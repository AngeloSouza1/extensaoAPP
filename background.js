const MONITOR_ALARM = 'monitor-alerts';
const MONITOR_INTERVAL_MIN = 1;

function mostrarNotificacao({ title, message }) {
  if (!chrome?.notifications?.create) {
    return;
  }
  const id = `ponto-alerta-${Date.now()}`;
  chrome.notifications.create(id, {
    type: 'basic',
    iconUrl: 'icons/icon128.png',
    title: title || 'Aviso',
    message: message || ''
  });
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

async function registrarAlertasSent(sent) {
  await chrome.storage.local.set({ monitorAlertSent: sent });
}

async function enviarAlerta(config, estadoMonitor, alertSent, alertaTipo, detalhes) {
  const hoje = obterHojeIso();
  if (alertSent[alertaTipo] === hoje) {
    return alertSent;
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
    return alertSent;
  }
  return {
    ...alertSent,
    [alertaTipo]: hoje
  };
}

async function verificarAlertas() {
  const config = await carregarMonitorConfig();
  if (!config.ativo || !config.url) {
    return;
  }

  const storage = await chrome.storage.local.get([
    'monitorState',
    'monitorAlertSent'
  ]);
  const estadoMonitor = storage.monitorState || {};
  const alertSent = storage.monitorAlertSent || {};

  if (!estadoMonitor.user || !estadoMonitor.user.key) {
    return;
  }

  const agora = new Date();
  const minutosAgora = (agora.getHours() * 60) + agora.getMinutes();
  const estado = estadoMonitor.estado || 'aguardando';
  const currentEntryTimestamp = estadoMonitor.currentEntryTimestamp || '';
  const jornadaConfig = estadoMonitor.jornadaConfig || {};

  let alertSentAtualizado = await enviarFila(config, alertSent);

  if (jornadaConfig.ativo && currentEntryTimestamp && estado !== 'aguardando') {
    const fim = parseTimeToMinutes(jornadaConfig.fim);
    if (fim !== null && minutosAgora >= fim) {
      alertSentAtualizado = await enviarAlerta(
        config,
        estadoMonitor,
        alertSentAtualizado,
        'fim_jornada',
        { horarioFim: jornadaConfig.fim || '' }
      );
    }
  }

  if (jornadaConfig.alertaSemSaidaAtivo && currentEntryTimestamp && estado !== 'aguardando') {
    const limiteHoras = Number(jornadaConfig.alertaSemSaidaHoras) || 0;
    if (limiteHoras > 0) {
      const diffSegundos = Math.floor((agora - new Date(currentEntryTimestamp)) / 1000);
      if (diffSegundos >= limiteHoras * 3600) {
        alertSentAtualizado = await enviarAlerta(
          config,
          estadoMonitor,
          alertSentAtualizado,
          'sem_saida',
          { limiteHoras }
        );
      }
    }
  }

  await registrarAlertasSent(alertSentAtualizado);
}

chrome.runtime.onInstalled.addListener(() => {
  garantirAlarme();
});

chrome.runtime.onStartup.addListener(() => {
  garantirAlarme();
});

chrome.alarms.onAlarm.addListener(alarm => {
  if (alarm.name === MONITOR_ALARM) {
    verificarAlertas();
  }
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message?.type === 'show_notification') {
    mostrarNotificacao({ title: message.title, message: message.message });
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
