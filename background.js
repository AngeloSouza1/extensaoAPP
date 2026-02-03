const MONITOR_ALARM = 'monitor-alerts';
const MONITOR_INTERVAL_MIN = 1;
const MAX_ALERTS_PER_DAY = 2;
const MIN_ALERT_INTERVAL_MS = 5 * 60 * 1000;

function normalizarContadorDiario(valor, hoje) {
  if (typeof valor === 'string') {
    return {
      date: valor,
      count: valor === hoje ? 1 : 0,
      lastShownAt: null
    };
  }
  if (valor && typeof valor === 'object') {
    const date = typeof valor.date === 'string' ? valor.date : '';
    const count = Number.isFinite(valor.count) ? valor.count : 0;
    const lastShownAt = typeof valor.lastShownAt === 'string' ? valor.lastShownAt : null;
    if (date === hoje) {
      return { date, count, lastShownAt };
    }
  }
  return { date: hoje, count: 0, lastShownAt: null };
}

function mostrarNotificacao({ title, message }) {
  if (!chrome?.notifications?.create) {
    return;
  }
  const id = `ponto-alerta-${Date.now()}`;
  chrome.notifications.create(id, {
    type: 'basic',
    iconUrl: 'icons/clock128.png',
    title: title || 'Aviso',
    message: message || '',
    priority: 2,
    silent: false,
    requireInteraction: true
  });
}

function obterTextoAlerta(alertaTipo, detalhes, usuario) {
  const nome = usuario?.name || usuario?.nome || '';
  const prefixo = nome ? `${nome} - ` : '';
  if (alertaTipo === 'fim_jornada') {
    const horario = detalhes?.horarioFim ? ` ${detalhes.horarioFim}` : '';
    return {
      title: `${prefixo}Aviso: Fim da jornada${horario}`,
      message: 'Horario de saida ultrapassado. Nao esqueça de registrar a saida.'
    };
  }
  if (alertaTipo === 'sem_saida') {
    const limite = detalhes?.limiteHoras ? ` (${detalhes.limiteHoras}h)` : '';
    return {
      title: `${prefixo}Aviso: Sem saida${limite}`,
      message: detalhes?.limiteHoras
        ? `Falta registrar a saida. Ja passaram ${detalhes.limiteHoras}h desde a entrada.`
        : 'Falta registrar a saida.'
    };
  }
  return {
    title: 'Aviso',
    message: ''
  };
}

function parseTimeToMinutes(time) {
  if (!time || typeof time !== 'string') {
    return null;
  }
  const match = /^(\d{2}):(\d{2})$/.exec(time.trim());
  if (!match) {
    return null;
  }
  const hours = Number(match[1]);
  const minutes = Number(match[2]);
  if (!Number.isFinite(hours) || !Number.isFinite(minutes)) {
    return null;
  }
  return (hours * 60) + minutes;
}

function obterHojeIso() {
  return new Date().toISOString().split('T')[0];
}

async function garantirAlarme() {
  chrome.alarms.create(MONITOR_ALARM, {
    periodInMinutes: MONITOR_INTERVAL_MIN
  });
}

function garantirAlarmeAtivo() {
  if (!chrome?.alarms?.get) {
    return;
  }
  chrome.alarms.get(MONITOR_ALARM, alarm => {
    if (!alarm) {
      garantirAlarme();
    }
  });
}

async function carregarMonitorConfig() {
  const data = await chrome.storage.local.get([
    'monitorConfig',
    'monitorDeviceId'
  ]);
  const config = data.monitorConfig || {};
  return {
    ativo: Boolean(config.ativo),
    url: (config.url || '').trim(),
    apiKey: (config.apiKey || '').trim(),
    deviceName: (config.deviceName || '').trim(),
    deviceId: data.monitorDeviceId || ''
  };
}

function obterUrlBase(url) {
  const base = (url || '').trim();
  return base.replace(/\/+$/, '');
}

async function enviarEvento(config, evento) {
  const baseUrl = obterUrlBase(config.url);
  if (!baseUrl) {
    return false;
  }
  const headers = { 'Content-Type': 'application/json' };
  if (config.apiKey) {
    headers['X-API-Key'] = config.apiKey;
  }
  try {
    const response = await fetch(`${baseUrl}/api/events`, {
      method: 'POST',
      headers,
      body: JSON.stringify(evento),
      keepalive: true
    });
    return response.ok;
  } catch (error) {
    return false;
  }
}

async function carregarFila() {
  const data = await chrome.storage.local.get(['monitorQueue']);
  return Array.isArray(data.monitorQueue) ? data.monitorQueue : [];
}

async function salvarFila(queue) {
  await chrome.storage.local.set({ monitorQueue: queue });
}

function eventoAlertaIgual(a, b) {
  if (!a || !b) {
    return false;
  }
  if (a.type !== 'alerta' || b.type !== 'alerta') {
    return false;
  }
  const ad = a.details || {};
  const bd = b.details || {};
  return ad.alertaTipo === bd.alertaTipo && ad.data === bd.data;
}

async function enfileirarSeNecessario(evento) {
  const queue = await carregarFila();
  const existe = queue.some(item => eventoAlertaIgual(item, evento));
  if (!existe) {
    queue.push(evento);
    await salvarFila(queue);
  }
}

async function enviarFila(config, alertSent) {
  if (!config.ativo || !config.url) {
    return alertSent;
  }
  const queue = await carregarFila();
  if (!queue.length) {
    return alertSent;
  }
  const restantes = [];
  const sentAtualizado = { ...alertSent };
  for (let i = 0; i < queue.length; i += 1) {
    const evento = queue[i];
    const ok = await enviarEvento(config, evento);
    if (!ok) {
      restantes.push(...queue.slice(i));
      break;
    }
    if (evento.type === 'alerta') {
      const detalhes = evento.details || {};
      if (detalhes.alertaTipo && detalhes.data) {
        sentAtualizado[detalhes.alertaTipo] = detalhes.data;
      }
    }
  }
  if (restantes.length !== queue.length) {
    await salvarFila(restantes);
  }
  return sentAtualizado;
}

async function registrarAlertasSent(sent, shown) {
  await chrome.storage.local.set({
    monitorAlertSent: sent,
    monitorAlertShown: shown
  });
}

async function enviarAlerta(config, estadoMonitor, alertSent, alertShown, alertaTipo, detalhes) {
  const hoje = obterHojeIso();
  const alertaTexto = obterTextoAlerta(alertaTipo, detalhes, estadoMonitor?.user);
  const estadoShown = normalizarContadorDiario(alertShown[alertaTipo], hoje);
  const ultimoMs = estadoShown.lastShownAt ? new Date(estadoShown.lastShownAt).getTime() : 0;
  const agoraMs = Date.now();
  const intervaloOk = !ultimoMs || (agoraMs - ultimoMs) >= MIN_ALERT_INTERVAL_MS;
  const limiteAtingido = estadoShown.count >= MAX_ALERTS_PER_DAY;
  if (!limiteAtingido && intervaloOk) {
    mostrarNotificacao(alertaTexto);
    const atualizado = {
      date: hoje,
      count: estadoShown.count + 1,
      lastShownAt: new Date().toISOString()
    };
    alertShown = {
      ...alertShown,
      [alertaTipo]: atualizado
    };
    await chrome.storage.local.set({
      monitorLastAlertAt: new Date().toISOString(),
      monitorLastAlertTitle: alertaTexto.title || 'Aviso'
    });
  }
  if (alertSent[alertaTipo] === hoje) {
    return { sent: alertSent, shown: alertShown };
  }
  if (!config.ativo || !config.url) {
    return {
      sent: {
        ...alertSent,
        [alertaTipo]: hoje
      },
      shown: alertShown
    };
  }
  const manifest = chrome.runtime.getManifest() || {};
  const evento = {
    type: 'alerta',
    timestamp: new Date().toISOString(),
    user: estadoMonitor.user || {},
    device: {
      id: config.deviceId || '',
      name: config.deviceName || ''
    },
    app: {
      name: manifest.name || 'Ponto Eletronico',
      version: manifest.version || '',
      extVersion: manifest.version || ''
    },
    details: {
      ...detalhes,
      alertaTipo,
      data: hoje
    }
  };
  const ok = await enviarEvento(config, evento);
  if (!ok) {
    await enfileirarSeNecessario(evento);
    return { sent: alertSent, shown: alertShown };
  }
  return {
    sent: {
      ...alertSent,
      [alertaTipo]: hoje
    },
    shown: alertShown
  }
}

async function verificarAlertas() {
  const config = await carregarMonitorConfig();
  const storage = await chrome.storage.local.get([
    'monitorState',
    'monitorAlertSent',
    'monitorAlertShown'
  ]);
  const estadoMonitor = storage.monitorState || {};
  const alertSent = storage.monitorAlertSent || {};
  let alertShown = storage.monitorAlertShown || {};

  const agora = new Date();
  const minutosAgora = (agora.getHours() * 60) + agora.getMinutes();
  const currentEntryTimestamp = estadoMonitor.currentEntryTimestamp || '';
  const jornadaConfig = estadoMonitor.jornadaConfig || {};

  let alertSentAtualizado = await enviarFila(config, alertSent);
  let alertShownAtualizado = alertShown;

  if (jornadaConfig.ativo && currentEntryTimestamp) {
    const fim = parseTimeToMinutes(jornadaConfig.fim);
    if (fim !== null && minutosAgora >= fim) {
      const res = await enviarAlerta(
        config,
        estadoMonitor,
        alertSentAtualizado,
        alertShownAtualizado,
        'fim_jornada',
        { horarioFim: jornadaConfig.fim || '' }
      );
      alertSentAtualizado = res.sent;
      alertShownAtualizado = res.shown;
    }
  }

  if (jornadaConfig.alertaSemSaidaAtivo && currentEntryTimestamp) {
    const limiteHoras = Number(jornadaConfig.alertaSemSaidaHoras) || 0;
    if (limiteHoras > 0) {
      const diffSegundos = Math.floor((agora - new Date(currentEntryTimestamp)) / 1000);
      if (diffSegundos >= limiteHoras * 3600) {
        const res = await enviarAlerta(
          config,
          estadoMonitor,
          alertSentAtualizado,
          alertShownAtualizado,
          'sem_saida',
          { limiteHoras }
        );
        alertSentAtualizado = res.sent;
        alertShownAtualizado = res.shown;
      }
    }
  }

  await registrarAlertasSent(alertSentAtualizado, alertShownAtualizado);
  await chrome.storage.local.set({
    monitorLastCheckAt: new Date().toISOString(),
    monitorLastCheckState: {
      estado: estadoMonitor.estado || 'aguardando',
      currentEntryTimestamp,
      jornadaFim: jornadaConfig.fim || '',
      alertaSemSaidaAtivo: Boolean(jornadaConfig.alertaSemSaidaAtivo),
      alertaSemSaidaHoras: jornadaConfig.alertaSemSaidaHoras || 0,
      minutosAgora
    }
  });
}

chrome.runtime.onInstalled.addListener(() => {
  garantirAlarme();
});

chrome.runtime.onStartup.addListener(() => {
  garantirAlarme();
});

garantirAlarmeAtivo();

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === MONITOR_ALARM) {
    verificarAlertas();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === 'ensure_alarm') {
    garantirAlarme();
    sendResponse({ ok: true });
    return false;
  }
  if (message?.type === 'show_notification') {
    mostrarNotificacao({ title: message.title, message: message.message });
    chrome.storage.local.set({
      monitorLastAlertAt: new Date().toISOString(),
      monitorLastAlertTitle: message.title || 'Aviso'
    });
    sendResponse({ ok: true });
    return false;
  }
if (message?.type === 'monitor_check_now') {
    verificarAlertas()
      .then(() => sendResponse({ ok: true }))
      .catch(() => sendResponse({ ok: false }));
    return true;
  }
  return false;
});
