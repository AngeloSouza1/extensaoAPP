// Elementos do DOM
const dateDisplay = document.getElementById('dateDisplay');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.getElementById('statusText');
const currentTime = document.getElementById('currentTime');
const entradaBtn = document.getElementById('entradaBtn');
const almocoSaidaBtn = document.getElementById('almocoSaidaBtn');
const almocoRetornoBtn = document.getElementById('almocoRetornoBtn');
const saidaBtn = document.getElementById('saidaBtn');
const hoursToday = document.getElementById('hoursToday');
const hoursMonth = document.getElementById('hoursMonth');
const lunchDiscount = document.getElementById('lunchDiscount');
const statusHint = document.getElementById('statusHint');
const scheduleSummary = document.getElementById('scheduleSummary');
const dailyBalance = document.getElementById('dailyBalance');
const weekModal = document.getElementById('weekModal');
const weekClose = document.getElementById('weekClose');
const weekTotal = document.getElementById('weekTotal');
const weekAverage = document.getElementById('weekAverage');
const weekExtra = document.getElementById('weekExtra');
const weekAbsences = document.getElementById('weekAbsences');
const monthModal = document.getElementById('monthModal');
const monthClose = document.getElementById('monthClose');
const monthTotal = document.getElementById('monthTotal');
const monthAverage = document.getElementById('monthAverage');
const monthExtra = document.getElementById('monthExtra');
const monthAbsences = document.getElementById('monthAbsences');
const holidaysModal = document.getElementById('holidaysModal');
const holidaysClose = document.getElementById('holidaysClose');
const holidaysDate = document.getElementById('holidaysDate');
const holidaysName = document.getElementById('holidaysName');
const holidaysAdd = document.getElementById('holidaysAdd');
const holidaysList = document.getElementById('holidaysList');
const holidaysEmpty = document.getElementById('holidaysEmpty');
const menuBtn = document.getElementById('menuBtn');
const menuPanel = document.getElementById('menuPanel');
const menuConfigBtn = document.getElementById('menuConfigBtn');
const menuPasswordBtn = document.getElementById('menuPasswordBtn');
const menuLoginPasswordBtn = document.getElementById('menuLoginPasswordBtn');
const menuMonitorBtn = document.getElementById('menuMonitorBtn');
const menuWeekBtn = document.getElementById('menuWeekBtn');
const menuMonthBtn = document.getElementById('menuMonthBtn');
const menuHolidaysBtn = document.getElementById('menuHolidaysBtn');
const menuReportBtn = document.getElementById('menuReportBtn');
const menuGuideBtn = document.getElementById('menuGuideBtn');
const menuAuditBtn = document.getElementById('menuAuditBtn');
const menuMirrorBtn = document.getElementById('menuMirrorBtn');
const menuAfdBtn = document.getElementById('menuAfdBtn');
const menuBackupBtn = document.getElementById('menuBackupBtn');
const menuLogoutBtn = document.getElementById('menuLogoutBtn');
const configModal = document.getElementById('configModal');
const configClose = document.getElementById('configClose');
const monitorModal = document.getElementById('monitorModal');
const monitorClose = document.getElementById('monitorClose');
const monitorEnabled = document.getElementById('monitorEnabled');
const monitorUrlInput = document.getElementById('monitorUrl');
const monitorApiKeyInput = document.getElementById('monitorApiKey');
const monitorDeviceNameInput = document.getElementById('monitorDeviceName');
const monitorDeviceIdInput = document.getElementById('monitorDeviceId');
const monitorTestBtn = document.getElementById('monitorTestBtn');
const monitorCheckBtn = document.getElementById('monitorCheckBtn');
const monitorNotifyTestBtn = document.getElementById('monitorNotifyTestBtn');
const monitorSaveBtn = document.getElementById('monitorSaveBtn');
const monitorStatus = document.getElementById('monitorStatus');
const monitorLastCheck = document.getElementById('monitorLastCheck');
const monitorState = document.getElementById('monitorState');
const monitorEntryAt = document.getElementById('monitorEntryAt');
const monitorScheduleEnd = document.getElementById('monitorScheduleEnd');
const monitorMissingExitCfg = document.getElementById('monitorMissingExitCfg');
const monitorLastAlert = document.getElementById('monitorLastAlert');
const monitorAlarmStatus = document.getElementById('monitorAlarmStatus');
const passwordModal = document.getElementById('passwordModal');
const passwordClose = document.getElementById('passwordClose');
const passwordCurrentField = document.getElementById('passwordCurrentField');
const passwordCurrent = document.getElementById('passwordCurrent');
const passwordNew = document.getElementById('passwordNew');
const passwordConfirm = document.getElementById('passwordConfirm');
const passwordSave = document.getElementById('passwordSave');
const passwordDefaultHint = document.getElementById('passwordDefaultHint');
const authModal = document.getElementById('authModal');
const authClose = document.getElementById('authClose');
const authTitle = document.getElementById('authTitle');
const authPassword = document.getElementById('authPassword');
const authConfirm = document.getElementById('authConfirm');
const authError = document.getElementById('authError');
const messageModal = document.getElementById('messageModal');
const messageClose = document.getElementById('messageClose');
const messageTitle = document.getElementById('messageTitle');
const messageText = document.getElementById('messageText');
const messageOk = document.getElementById('messageOk');
const messageCancel = document.getElementById('messageCancel');
const messageActions = document.getElementById('messageActions');
const loginPasswordModal = document.getElementById('loginPasswordModal');
const loginPasswordClose = document.getElementById('loginPasswordClose');
const loginPasswordCurrentField = document.getElementById('loginPasswordCurrentField');
const loginPasswordCurrent = document.getElementById('loginPasswordCurrent');
const loginPasswordNew = document.getElementById('loginPasswordNew');
const loginPasswordConfirmNew = document.getElementById('loginPasswordConfirmNew');
const loginPasswordSave = document.getElementById('loginPasswordSave');
const userDisplay = document.getElementById('userDisplay');
const userAvatar = document.getElementById('userAvatar');
const userLocation = document.getElementById('userLocation');
const loginModal = document.getElementById('loginModal');
const loginTitle = document.getElementById('loginTitle');
const loginModeHint = document.getElementById('loginModeHint');
const loginError = document.getElementById('loginError');
const loginName = document.getElementById('loginName');
const loginPasswordField = document.getElementById('loginPasswordField');
const loginPasswordLabel = document.getElementById('loginPasswordLabel');
const loginPassword = document.getElementById('loginPassword');
const loginAuto = document.getElementById('loginAuto');
const loginSubmit = document.getElementById('loginSubmit');
const loginGoogleBtn = document.getElementById('loginGoogleBtn');
const backupModal = document.getElementById('backupModal');
const backupClose = document.getElementById('backupClose');
const backupDownloadBtn = document.getElementById('backupDownloadBtn');
const backupRestoreBtn = document.getElementById('backupRestoreBtn');
const addRecordBtn = document.getElementById('addRecordBtn');
const editModal = document.getElementById('editModal');
const editClose = document.getElementById('editClose');
const editType = document.getElementById('editType');
const editTime = document.getElementById('editTime');
const editReason = document.getElementById('editReason');
const editConsent = document.getElementById('editConsent');
const editSave = document.getElementById('editSave');
const auditModal = document.getElementById('auditModal');
const auditClose = document.getElementById('auditClose');
const auditList = document.getElementById('auditList');
const auditEmpty = document.getElementById('auditEmpty');
const useScheduleInput = document.getElementById('useSchedule');
const missingExitAlertInput = document.getElementById('missingExitAlert');
const missingExitHoursInput = document.getElementById('missingExitHours');
const workStartInput = document.getElementById('workStart');
const workEndInput = document.getElementById('workEnd');
const lunchStartInput = document.getElementById('lunchStart');
const lunchEndInput = document.getElementById('lunchEnd');
const dailyTarget = document.getElementById('dailyTarget');
const scheduleSimulateBtn = document.getElementById('scheduleSimulateBtn');
const historyList = document.getElementById('historyList');
const holidayIndicator = document.getElementById('holidayIndicator');
const clearBtn = document.getElementById('clearBtn');
const exportBtn = document.getElementById('exportBtn');
const exportCsvBtn = document.getElementById('exportCsvBtn');
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

const PBKDF2_ITERATIONS = 120000;
const LOGIN_DEFAULT_USER = 'admin';
const LOGIN_DEFAULT_PASSWORD = 'admin';
const REGISTRO_PONTO_TIPOS = new Set(['entrada', 'saida_almoco', 'retorno_almoco', 'saida']);
const MONITOR_QUEUE_LIMIT = 200;
const GOOGLE_WEB_CLIENT_ID =
  '605657774443-sdcp0ji9831vv7n8190hlfabjcnvmtt8.apps.googleusercontent.com';
const GOOGLE_WEB_TOKEN_KEY = 'googleWebToken';

// Estado atual
// Estados: 'aguardando', 'trabalhando', 'almoco', 'trabalhando_apos_almoco'
let estado = 'aguardando';
let currentEntry = null;
let almocoSaida = null;
let almocoRetorno = null;
let totalSegundosHojeBase = 0;
let totalSegundosAlmocoBase = 0;
let jornadaConfigAtual = {
  ativo: false,
  inicio: '',
  fim: '',
  almocoInicio: '',
  almocoFim: '',
  alertaSemSaidaAtivo: false,
  alertaSemSaidaHoras: 0
};
let alertaSaidaMostradoEm = null;
let alertaSemSaidaMostradoEm = null;
let editRegistroIndex = null;
let editRegistroData = null;
let editRegistroSegundos = 0;
let editRegistroModo = 'edit';
let senhaEdicaoHash = null;
let senhaEdicaoSalt = null;
let senhaEdicaoIterations = PBKDF2_ITERATIONS;
let senhaEdicaoLegacy = false;
let senhaPadraoAtiva = false;
let authResolve = null;
let authMode = 'edit';
let messageResolve = null;
let messageMode = 'alert';
let messageOpen = false;
let messageAutoClose = false;
let messageHideActions = false;
let messageHideClose = false;
let messageAutoCloseTimer = null;
let usuarioNome = '';
let usuarioProvider = 'local';
let usuarioFoto = '';
let usuarioEmail = '';
let usuarioAutoLogin = false;
let usuarioLogado = false;
let cryptoEnabled = true;
let cryptoSalt = null;
let cryptoIterations = PBKDF2_ITERATIONS;
let cryptoKey = null;
let cryptoKeyMode = 'password';
let temDadosHistorico = false;
let ultimaLocalizacao = null;
let localizacaoLoginEmAndamento = false;
let feriados = [];
let loginPasswordHash = null;
let loginPasswordSalt = null;
let loginPasswordIterations = PBKDF2_ITERATIONS;
let loginPasswordDefault = false;
let loginPasswordForceChange = false;
let pendingLoginErrorMessage = '';
let monitorConfigAtual = {
  ativo: false,
  url: '',
  apiKey: '',
  deviceId: '',
  deviceName: ''
};
let monitorQueue = [];
let monitorQueueCarregada = false;
let monitorQueueEnviando = false;
const monitorSessionId = gerarIdAleatorio();

// Parse storage date keys into local Date (avoids UTC shift and supports dd/mm/yyyy)
function parseDateKey(dateKey) {
  if (!dateKey || typeof dateKey !== 'string') {
    return null;
  }

  const trimmed = dateKey.trim();
  if (!trimmed) {
    return null;
  }

  const isoPart = trimmed.includes('T') ? trimmed.split('T')[0] : trimmed;
  let match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoPart);
  if (match) {
    const year = Number(match[1]);
    const month = Number(match[2]) - 1;
    const day = Number(match[3]);
    return new Date(year, month, day);
  }

  match = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(trimmed);
  if (match) {
    const day = Number(match[1]);
    const month = Number(match[2]) - 1;
    const year = Number(match[3]);
    return new Date(year, month, day);
  }

  const parsed = new Date(trimmed);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed;
}


function formatarHorasMinutos(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  const minutosFinais = totalSegundos > 0 && horas === 0 && minutos === 0 ? 1 : minutos;
  return `${String(horas).padStart(2, '0')}:${String(minutosFinais).padStart(2, '0')}`;
}

function calcularTotalSegundos(periodos, totaisDiarios) {
  const datas = new Set([
    ...Object.keys(periodos || {}),
    ...Object.keys(totaisDiarios || {})
  ]);
  let total = 0;
  datas.forEach(dataKey => {
    total += obterTotalSegundosDia(dataKey, totaisDiarios, periodos);
  });
  return total;
}

function parseTimeToMinutes(value) {
  if (!value) {
    return null;
  }
  const [hours, minutes] = value.split(':').map(Number);
  if (Number.isNaN(hours) || Number.isNaN(minutes)) {
    return null;
  }
  return (hours * 60) + minutes;
}

function formatDateKey(year, monthIndex, day) {
  const monthStr = String(monthIndex + 1).padStart(2, '0');
  const dayStr = String(day).padStart(2, '0');
  return `${year}-${monthStr}-${dayStr}`;
}

function formatarDataCurta(dataKey) {
  const parsed = parseDateKey(dataKey);
  if (!parsed) {
    return dataKey || '';
  }
  return parsed.toLocaleDateString('pt-BR');
}

function formatarDataHoraCurta(valor) {
  if (!valor) {
    return '';
  }
  const data = new Date(valor);
  if (Number.isNaN(data.getTime())) {
    return '';
  }
  return data.toLocaleString('pt-BR');
}

function resumoRegistroAuditoria(registro) {
  if (!registro) {
    return '';
  }
  const info = obterInfoTipoRegistro(registro.tipo || '');
  const tipo = info.texto || registro.tipo || '';
  const hora = registro.hora || (registro.timestamp
    ? new Date(registro.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    : '');
  const data = registro.timestamp ? new Date(registro.timestamp).toISOString().split('T')[0] : '';
  return [tipo, hora, data].filter(Boolean).join(' | ');
}

function obterInfoTipoRegistro(tipo) {
  switch (tipo) {
    case 'entrada':
      return { texto: 'Entrada', icon: '📥' };
    case 'saida_almoco':
      return { texto: 'Saída Almoço', icon: '🍽️' };
    case 'retorno_almoco':
      return { texto: 'Retorno Almoço', icon: '↩️' };
    case 'saida':
      return { texto: 'Saída', icon: '📤' };
    case 'login':
      return { texto: 'Login', icon: '📍' };
    default:
      return { texto: tipo || 'Registro', icon: '⏰' };
  }
}

function criarLogAlteracao({ acao, dataKey, motivo, antes, depois, consentimento, consentimentoEm }) {
  return {
    acao,
    data: dataKey,
    motivo: motivo || '',
    antes: antes || null,
    depois: depois || null,
    consentimento: Boolean(consentimento),
    consentimentoEm: consentimentoEm || null,
    alteradoPor: {
      usuario: usuarioNome || '',
      provider: usuarioProvider || 'local',
      email: usuarioEmail || ''
    },
    alteradoEm: new Date().toISOString()
  };
}

function normalizarObjeto(valor) {
  return valor && typeof valor === 'object' && !Array.isArray(valor) ? valor : {};
}

function normalizarArray(valor) {
  return Array.isArray(valor) ? valor : [];
}

function obterUsuarioChave() {
  const provider = usuarioProvider || 'local';
  if (provider === 'google') {
    const email = (usuarioEmail || '').trim().toLowerCase();
    if (email) {
      return `google:${email}`;
    }
    const nome = (usuarioNome || '').trim().toLowerCase();
    if (nome) {
      return `google:${nome}`;
    }
    return 'google:desconhecido';
  }
  const nome = (usuarioNome || LOGIN_DEFAULT_USER).trim().toLowerCase();
  return `local:${nome}`;
}

function obterUsuarioChavePorProfile(profile) {
  const provider = profile?.provider || 'local';
  if (provider === 'google') {
    const email = (profile?.email || '').trim().toLowerCase();
    if (email) {
      return `google:${email}`;
    }
    const nome = (profile?.name || '').trim().toLowerCase();
    if (nome) {
      return `google:${nome}`;
    }
    return 'google:desconhecido';
  }
  const nome = (profile?.name || LOGIN_DEFAULT_USER).trim().toLowerCase();
  return `local:${nome}`;
}

function normalizarDadosUsuario(dados) {
  const base = dados && typeof dados === 'object' ? dados : {};
  return {
    registros: normalizarObjeto(base.registros),
    periodos: normalizarObjeto(base.periodos),
    totaisDiarios: normalizarObjeto(base.totaisDiarios),
    jornadaConfig: normalizarObjeto(base.jornadaConfig),
    feriados: normalizarArray(base.feriados),
    ultimaLocalizacao: base.ultimaLocalizacao || null,
    auditLogs: normalizarArray(base.auditLogs)
  };
}

function contemDadosLegados(storage) {
  return Boolean(
    storage.registros ||
    storage.periodos ||
    storage.totaisDiarios ||
    storage.jornadaConfig ||
    storage.feriados ||
    storage.ultimaLocalizacao
  );
}

async function obterDadosUsuarioStorage() {
  const userKey = obterUsuarioChave();
  const storage = await chrome.storage.local.get([
    'userDataEncrypted',
    'userData',
    'legacyMigrated',
    'registros',
    'periodos',
    'totaisDiarios',
    'jornadaConfig',
    'feriados',
    'ultimaLocalizacao'
  ]);
  const userDataEncrypted = normalizarObjeto(storage.userDataEncrypted);
  const userData = normalizarObjeto(storage.userData);
  const temUserData = Object.keys(userData).length > 0;
  const temUserDataEncrypted = Object.keys(userDataEncrypted).length > 0;
  let dados = userData[userKey];

  if (cryptoEnabled) {
    if (!cryptoKey) {
      await carregarChaveCriptoSessao();
    }
    if (cryptoKey) {
      const payloadCripto = userDataEncrypted[userKey];
      const temPayloadCripto = Boolean(payloadCripto);
      if (temPayloadCripto) {
        dados = await descriptografarDadosUsuario(payloadCripto);
      }

      if (!dados && temPayloadCripto) {
        return { userKey, userData: userDataEncrypted, dados: normalizarDadosUsuario({}) };
      }

      if (!dados && userData[userKey]) {
        dados = normalizarDadosUsuario(userData[userKey]);
        const encrypted = await criptografarDadosUsuario(dados);
        if (encrypted) {
          userDataEncrypted[userKey] = encrypted;
          const payload = { userDataEncrypted };
          if (temUserData && !storage.legacyMigrated) {
            payload.legacyMigrated = true;
          }
          await chrome.storage.local.set(payload);
          await chrome.storage.local.remove('userData');
        }
      }

      if (!dados && !storage.legacyMigrated && !temUserDataEncrypted && contemDadosLegados(storage)) {
        dados = normalizarDadosUsuario({
          registros: storage.registros,
          periodos: storage.periodos,
          totaisDiarios: storage.totaisDiarios,
          jornadaConfig: storage.jornadaConfig,
          feriados: storage.feriados,
          ultimaLocalizacao: storage.ultimaLocalizacao
        });
        const encrypted = await criptografarDadosUsuario(dados);
        if (encrypted) {
          userDataEncrypted[userKey] = encrypted;
          await chrome.storage.local.set({ userDataEncrypted, legacyMigrated: true });
        }
      }

      if (!dados) {
        dados = normalizarDadosUsuario({});
        const encrypted = await criptografarDadosUsuario(dados);
        if (encrypted) {
          userDataEncrypted[userKey] = encrypted;
          await chrome.storage.local.set({ userDataEncrypted });
        }
      }
      return { userKey, userData: userDataEncrypted, dados };
    }

    dados = normalizarDadosUsuario({});
    return { userKey, userData: userDataEncrypted, dados };
  }

  if (!dados) {
    if (!storage.legacyMigrated && !temUserData && contemDadosLegados(storage)) {
      dados = normalizarDadosUsuario({
        registros: storage.registros,
        periodos: storage.periodos,
        totaisDiarios: storage.totaisDiarios,
        jornadaConfig: storage.jornadaConfig,
        feriados: storage.feriados,
        ultimaLocalizacao: storage.ultimaLocalizacao
      });
      userData[userKey] = dados;
      await chrome.storage.local.set({ userData, legacyMigrated: true });
    } else {
      dados = normalizarDadosUsuario({});
      userData[userKey] = dados;
      const payload = { userData };
      if (temUserData && !storage.legacyMigrated) {
        payload.legacyMigrated = true;
      }
      await chrome.storage.local.set(payload);
    }
  } else {
    dados = normalizarDadosUsuario(dados);
    userData[userKey] = dados;
  }

  return { userKey, userData, dados };
}

async function salvarDadosUsuario(dadosAtualizados) {
  let userKey = obterUsuarioChave();
  if (cryptoEnabled) {
    if (!cryptoKey) {
      const perfilData = await chrome.storage.local.get(['userProfile']);
      const profile = perfilData.userProfile || null;
      if (profile) {
        usuarioNome = usuarioNome || profile.name || '';
        usuarioProvider = usuarioProvider || profile.provider || 'local';
        usuarioEmail = usuarioEmail || profile.email || '';
        userKey = obterUsuarioChavePorProfile(profile);
      }
      const provider = profile?.provider || usuarioProvider || 'local';
      const isGoogle = provider === 'google' || userKey.startsWith('google:');
      if (isGoogle) {
        cryptoKey = await obterOuCriarChaveDispositivo(userKey);
        cryptoKeyMode = 'device';
      } else {
        await carregarChaveCriptoSessao();
      }
    }
    if (!cryptoKey && (usuarioProvider === 'local' || usuarioProvider === '')) {
      if (!loginPasswordHash || !loginPasswordSalt) {
        const loginData = await chrome.storage.local.get([
          'loginPasswordHash',
          'loginPasswordSalt',
          'loginPasswordIterations',
          'loginPasswordDefault'
        ]);
        loginPasswordHash = loginData.loginPasswordHash || null;
        loginPasswordSalt = loginData.loginPasswordSalt || null;
        loginPasswordIterations = loginData.loginPasswordIterations || PBKDF2_ITERATIONS;
        loginPasswordDefault = Boolean(loginData.loginPasswordDefault);
      }
      if (loginPasswordHash && loginPasswordSalt && loginPasswordDefault) {
        cryptoKey = await derivarChaveCripto(LOGIN_DEFAULT_PASSWORD);
        cryptoKeyMode = 'password';
        await salvarChaveCriptoSessao();
      }
    }
    if (!cryptoKey && usuarioLogado) {
      await prepararCriptografiaUsuarioAtual({ allowPrompt: true });
    }
    if (!cryptoKey) {
      if (usuarioLogado) {
        console.warn('Chave de criptografia indisponível para salvar os dados.');
      }
      return;
    }
    const storage = await chrome.storage.local.get(['userDataEncrypted']);
    const userDataEncrypted = normalizarObjeto(storage.userDataEncrypted);
    const payload = await criptografarDadosUsuario(normalizarDadosUsuario(dadosAtualizados));
    if (!payload) {
      return;
    }
    userDataEncrypted[userKey] = payload;
    await chrome.storage.local.set({ userDataEncrypted });
    return;
  }

  const storage = await chrome.storage.local.get(['userData']);
  const userData = normalizarObjeto(storage.userData);
  userData[userKey] = normalizarDadosUsuario(dadosAtualizados);
  await chrome.storage.local.set({ userData });
}

function formatarCoordenadas(latitude, longitude) {
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return '';
  }
  return `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
}

function extrairCidadeEstado(localizacao) {
  if (!localizacao) {
    return { cidade: '', estado: '' };
  }
  let cidade = typeof localizacao.cidade === 'string' ? localizacao.cidade.trim() : '';
  let estado = typeof localizacao.estado === 'string' ? localizacao.estado.trim() : '';
  if (!estado && cidade.includes(' - ')) {
    const partes = cidade.split(' - ').map(parte => parte.trim()).filter(Boolean);
    if (partes.length >= 2) {
      estado = partes.pop();
      cidade = partes.join(' - ').trim();
    }
  }
  return { cidade, estado };
}

function formatarTextoLocalizacao(localizacao) {
  if (!localizacao) {
    return '';
  }
  const partes = [];
  const { cidade, estado } = extrairCidadeEstado(localizacao);
  const cidadeEstado = [cidade, estado].filter(Boolean).join(' - ');
  if (cidadeEstado) {
    partes.push(cidadeEstado);
  }
  const coords = formatarCoordenadas(localizacao.latitude, localizacao.longitude);
  if (coords) {
    partes.push(coords);
  }
  return partes.join(' | ');
}

async function buscarLocalizacaoPorCoordenadas(latitude, longitude) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  try {
    const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}`;
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal
    });
    if (!response.ok) {
      return { cidade: '', estado: '' };
    }
    const data = await response.json();
    const address = data.address || {};
    const cidade = address.city || address.town || address.village || address.municipality || address.county || '';
    const estado = address.state || '';
    return { cidade, estado };
  } catch (error) {
    return { cidade: '', estado: '' };
  } finally {
    clearTimeout(timeoutId);
  }
}

async function buscarLocalizacaoPorIp() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 5000);
  try {
    const url = 'https://ipwho.is/?fields=status,success,city,region,latitude,longitude';
    const response = await fetch(url, {
      headers: { Accept: 'application/json' },
      signal: controller.signal
    });
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    if (!data) {
      return null;
    }
    const cidade = typeof data.city === 'string' ? data.city.trim() : '';
    let estado = typeof data.region === 'string' ? data.region.trim() : '';
    const latitude = Number(data.latitude);
    const longitude = Number(data.longitude);
    const statusOk = data.success === true || data.status === 'success' || data.status === true;
    if (!statusOk && !cidade && !estado) {
      return null;
    }
    if (estado.toLowerCase().startsWith('state of ')) {
      estado = estado.slice('state of '.length).trim();
    }
    if (!cidade && !estado) {
      return null;
    }
    return {
      cidade,
      estado,
      latitude: Number.isFinite(latitude) ? latitude : null,
      longitude: Number.isFinite(longitude) ? longitude : null
    };
  } catch (error) {
    return null;
  } finally {
    clearTimeout(timeoutId);
  }
}

function obterLocalizacaoAtual() {
  if (!navigator?.geolocation) {
    return Promise.resolve(null);
  }
  return new Promise(resolve => {
    let best = null;
    let resolved = false;
    let watchId = null;

    const finish = (payload) => {
      if (resolved) {
        return;
      }
      resolved = true;
      resolve(payload);
    };

    const normalize = (position) => {
      const latitude = Number(position.coords.latitude);
      const longitude = Number(position.coords.longitude);
      const accuracy = Number(position.coords.accuracy);
      if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
        return null;
      }
      return {
        latitude,
        longitude,
        accuracy: Number.isFinite(accuracy) ? accuracy : null
      };
    };

    const handlePosition = (position, isWatch) => {
      const data = normalize(position);
      if (!data) {
        return;
      }
      if (!best || (data.accuracy != null && (best.accuracy == null || data.accuracy < best.accuracy))) {
        best = data;
      }
      if (data.accuracy != null && data.accuracy <= LOCATION_TARGET_ACCURACY_M) {
        if (isWatch && watchId != null) {
          navigator.geolocation.clearWatch(watchId);
        }
        finish(data);
      }
    };

    const handleError = () => {
      if (best) {
        finish(best);
        return;
      }
      finish(null);
    };

    navigator.geolocation.getCurrentPosition(
      position => {
        handlePosition(position, false);
        if (best && best.accuracy != null && best.accuracy <= LOCATION_TARGET_ACCURACY_M) {
          return;
        }
        watchId = navigator.geolocation.watchPosition(
          pos => handlePosition(pos, true),
          handleError,
          {
            enableHighAccuracy: true,
            timeout: LOCATION_WATCH_TIMEOUT_MS,
            maximumAge: 0
          }
        );
        setTimeout(() => {
          if (watchId != null) {
            navigator.geolocation.clearWatch(watchId);
          }
          if (!resolved) {
            finish(best);
          }
        }, LOCATION_WATCH_TIMEOUT_MS);
      },
      handleError,
      {
        enableHighAccuracy: true,
        timeout: LOCATION_WATCH_TIMEOUT_MS,
        maximumAge: 0
      }
    );
  }).then(async (coords) => {
    if (!coords) {
      return null;
    }
    const { latitude, longitude, accuracy } = coords;
    if (Number.isFinite(accuracy) && accuracy > LOCATION_MAX_ACCURACY_M) {
      return null;
    }
    try {
      const { cidade, estado } = await buscarLocalizacaoPorCoordenadas(latitude, longitude);
      return { cidade, estado, latitude, longitude, accuracy };
    } catch (error) {
      return { cidade: '', estado: '', latitude, longitude, accuracy };
    }
  });
}

function isCoordsFallbackBrasil(latitude, longitude) {
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return false;
  }
  return Math.abs(latitude + 14.235) < 0.05 && Math.abs(longitude + 51.925) < 0.05;
}

function isLocalizacaoPrecisa(localizacao) {
  if (!localizacao) {
    return false;
  }
  const { latitude, longitude, accuracy } = localizacao;
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) {
    return false;
  }
  if (Number.isFinite(accuracy) && accuracy > LOCATION_MAX_ACCURACY_M) {
    return false;
  }
  if (isCoordsFallbackBrasil(latitude, longitude)) {
    return false;
  }
  return true;
}

function isLocalizacaoExibivel(localizacao) {
  if (!localizacao) {
    return false;
  }
  const { cidade, estado } = extrairCidadeEstado(localizacao);
  if (cidade || estado) {
    return true;
  }
  const { latitude, longitude } = localizacao;
  return Number.isFinite(latitude) && Number.isFinite(longitude);
}

function isLocalizacaoInvalida(localizacao) {
  if (!localizacao) {
    return true;
  }
  const { cidade, estado } = extrairCidadeEstado(localizacao);
  const { latitude, longitude, accuracy } = localizacao;
  const temCidadeEstado = Boolean(cidade || estado);
  const temCoords = Number.isFinite(latitude) && Number.isFinite(longitude);
  if (!temCidadeEstado && !temCoords) {
    return true;
  }
  if (temCoords && isCoordsFallbackBrasil(latitude, longitude)) {
    return true;
  }
  if (Number.isFinite(accuracy) && accuracy > LOCATION_MAX_ACCURACY_M) {
    return true;
  }
  return false;
}

function corrigirLocalizacaoRegistro(registro, localizacaoPadrao) {
  if (!registro || !localizacaoPadrao) {
    return { registro, alterado: false };
  }
  if (!isLocalizacaoInvalida(registro.localizacao)) {
    return { registro, alterado: false };
  }
  const { cidade, estado, latitude, longitude, accuracy } = localizacaoPadrao;
  const novaLocalizacao = {
    cidade: cidade || '',
    estado: estado || '',
    latitude: Number.isFinite(latitude) ? latitude : null,
    longitude: Number.isFinite(longitude) ? longitude : null,
    accuracy: Number.isFinite(accuracy) ? accuracy : null
  };
  return {
    registro: { ...registro, localizacao: novaLocalizacao },
    alterado: true
  };
}

async function obterLocalizacaoComFallback({ allowGps = true } = {}) {
  if (allowGps) {
    const gps = await obterLocalizacaoAtual();
    if (gps && isLocalizacaoPrecisa(gps)) {
      return { ...gps, origem: 'gps' };
    }
  }
  const ip = await buscarLocalizacaoPorIp();
  if (ip) {
    return {
      ...ip,
      accuracy: null,
      origem: 'ip'
    };
  }
  return null;
}

function atualizarLocalizacaoTopo() {
  if (!userLocation) {
    return;
  }
  if (!usuarioLogado) {
    userLocation.textContent = '';
    userLocation.classList.add('hidden');
    return;
  }
  const texto = formatarTextoLocalizacao(ultimaLocalizacao);
  if (!texto) {
    userLocation.textContent = '';
    userLocation.classList.add('hidden');
    return;
  }
  userLocation.textContent = `📍 ${texto}`;
  userLocation.classList.remove('hidden');
  if (ultimaLocalizacao) {
    const accuracy = Number.isFinite(ultimaLocalizacao.accuracy)
      ? `${Math.round(ultimaLocalizacao.accuracy)}m`
      : '';
    const atualizadoEm = ultimaLocalizacao.atualizadoEm
      ? formatarDataHoraCurta(ultimaLocalizacao.atualizadoEm)
      : '';
    const titleParts = [];
    if (accuracy) titleParts.push(`Precisão: ${accuracy}`);
    if (atualizadoEm) titleParts.push(`Atualizado: ${atualizadoEm}`);
    if (titleParts.length) {
      userLocation.title = titleParts.join(' · ');
    }
  }
}

async function carregarLocalizacao() {
  const { dados } = await obterDadosUsuarioStorage();
  ultimaLocalizacao = dados.ultimaLocalizacao || null;
  if (ultimaLocalizacao && !isLocalizacaoExibivel(ultimaLocalizacao)) {
    ultimaLocalizacao = null;
    dados.ultimaLocalizacao = null;
    await salvarDadosUsuario(dados);
  }
  atualizarLocalizacaoTopo();
  if (!usuarioLogado) {
    return;
  }
  const now = Date.now();
  if (now - lastLocationRefreshAt < LOCATION_STARTUP_REFRESH_MS) {
    return;
  }
  lastLocationRefreshAt = now;
  if (ultimaLocalizacao?.atualizadoEm) {
    const last = new Date(ultimaLocalizacao.atualizadoEm).getTime();
    if (Number.isFinite(last)) {
      const ageMs = now - last;
      if (ageMs > 15 * 60 * 1000) {
        void atualizarLocalizacaoManual({ silent: true });
        return;
      }
    }
  }
  void atualizarLocalizacaoManual({ silent: true });
}

const LOCATION_REFRESH_MS = 5 * 60 * 1000;
const LOCATION_TARGET_ACCURACY_M = 200;
const LOCATION_MAX_ACCURACY_M = 20000;
const LOCATION_WATCH_TIMEOUT_MS = 15000;
const LOCATION_STARTUP_REFRESH_MS = 2 * 60 * 1000;
let locationRefreshTimer = null;
let lastLocationRefreshAt = 0;

async function obterEstadoPermissaoLocalizacao() {
  if (!navigator?.permissions?.query) {
    return 'unknown';
  }
  try {
    const status = await navigator.permissions.query({ name: 'geolocation' });
    return status?.state || 'unknown';
  } catch (error) {
    return 'unknown';
  }
}

async function atualizarLocalizacaoManual({ silent = false } = {}) {
  if (!usuarioLogado) {
    return;
  }
  const permissao = await obterEstadoPermissaoLocalizacao();
  if (permissao === 'denied') {
    if (!silent) {
      await showMessageSemCancelar('Localização bloqueada no navegador. Usando localização aproximada por IP.', 'Localização');
    }
  }
  const localizacao = await obterLocalizacaoComFallback({ allowGps: permissao !== 'denied' });
  if (!localizacao) {
    if (!silent) {
      await showMessageSemCancelar('Não foi possível obter uma localização precisa. Verifique a permissão do navegador e se a localização do sistema está ativa.', 'Localização');
    }
    return;
  }
  const { cidade, estado } = extrairCidadeEstado(localizacao);
  if (!cidade && !estado) {
    if (!silent) {
      await showMessageSemCancelar('Não foi possível identificar cidade/estado. Verifique a localização do sistema e tente novamente.', 'Localização');
    }
    return;
  }
  const now = new Date();
  ultimaLocalizacao = {
    ...localizacao,
    cidade,
    estado,
    atualizadoEm: now.toISOString()
  };
  const { dados } = await obterDadosUsuarioStorage();
  dados.ultimaLocalizacao = ultimaLocalizacao;
  await salvarDadosUsuario(dados);
  atualizarLocalizacaoTopo();
  if (!silent) {
    const titulo = localizacao.origem === 'ip' ? 'Localização aproximada (IP)' : 'Localização';
    const mensagem = localizacao.origem === 'ip' ? 'Localização aproximada por IP. Para precisão, ative o Wi-Fi/GPS.' : 'Localização atualizada.';
    await showMessageSemCancelar(mensagem, titulo);
  }
}

function iniciarAutoRefreshLocalizacao() {
  if (locationRefreshTimer) {
    clearInterval(locationRefreshTimer);
    locationRefreshTimer = null;
  }
  locationRefreshTimer = setInterval(() => {
    if (usuarioLogado) {
      void atualizarLocalizacaoManual({ silent: true });
    }
  }, LOCATION_REFRESH_MS);
}

async function registrarLocalizacaoLogin() {
  if (!usuarioLogado || localizacaoLoginEmAndamento) {
    return;
  }
  localizacaoLoginEmAndamento = true;
  try {
    const localizacao = await obterLocalizacaoComFallback();
    if (!localizacao) {
      return;
    }
    const now = new Date();
    const registro = {
      tipo: 'login',
      timestamp: now.toISOString(),
      hora: now.toLocaleTimeString('pt-BR'),
      localizacao
    };
    await salvarRegistro(registro);
    ultimaLocalizacao = {
      ...localizacao,
      atualizadoEm: now.toISOString()
    };
    const { dados } = await obterDadosUsuarioStorage();
    dados.ultimaLocalizacao = ultimaLocalizacao;
    await salvarDadosUsuario(dados);
    atualizarLocalizacaoTopo();
    await atualizarHistorico();
  } finally {
    localizacaoLoginEmAndamento = false;
  }
}

async function abrirComprovante(registro, dataKey) {
  if (!registro) {
    return;
  }
  const dataRegistro = registro.timestamp
    ? new Date(registro.timestamp)
    : new Date(`${dataKey || new Date().toISOString().split('T')[0]}T${registro.hora || '00:00'}`);
  const { texto } = obterInfoTipoRegistro(registro.tipo);
  const localizacao = registro.localizacao || ultimaLocalizacao || null;
  const assinaturaBase = JSON.stringify({
    tipo: registro.tipo || '',
    timestamp: registro.timestamp || dataRegistro.toISOString(),
    usuario: registro.usuario || usuarioNome || '',
    provider: registro.usuarioProvider || usuarioProvider || 'local',
    email: registro.usuarioEmail || usuarioEmail || '',
    localizacao: localizacao || null
  });
  const assinatura = await gerarHashSHA256(assinaturaBase);
  const comprovante = {
    tipo: registro.tipo || '',
    tipoTexto: texto,
    data: dataRegistro.toLocaleDateString('pt-BR'),
    hora: registro.hora || dataRegistro.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }),
    timestamp: registro.timestamp || dataRegistro.toISOString(),
    usuario: registro.usuario || usuarioNome || '',
    usuarioProvider: registro.usuarioProvider || usuarioProvider || 'local',
    usuarioEmail: registro.usuarioEmail || usuarioEmail || '',
    localizacao,
    assinatura,
    emitidoEm: new Date().toISOString()
  };
  await chrome.storage.local.set({ comprovanteAtual: comprovante });
  const url = chrome.runtime.getURL('comprovante.html');
  window.open(url, '_blank', 'width=420,height=640');
}

async function gerarHashSHA256(texto) {
  const encoder = new TextEncoder();
  const data = encoder.encode(texto);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
}

function bufferToHex(buffer) {
  return Array.from(new Uint8Array(buffer))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

function bufferToBase64(buffer) {
  return bytesToBase64(new Uint8Array(buffer));
}

function gerarIdAleatorio() {
  if (typeof crypto?.randomUUID === 'function') {
    return crypto.randomUUID();
  }
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
}

async function obterChavesEspelho() {
  const storage = await chrome.storage.local.get(['espelhoKeyPair']);
  const pair = storage.espelhoKeyPair || null;
  if (pair?.publicKeyJwk && pair?.privateKeyJwk) {
    const publicKey = await crypto.subtle.importKey(
      'jwk',
      pair.publicKeyJwk,
      { name: 'ECDSA', namedCurve: 'P-256' },
      true,
      ['verify']
    );
    const privateKey = await crypto.subtle.importKey(
      'jwk',
      pair.privateKeyJwk,
      { name: 'ECDSA', namedCurve: 'P-256' },
      false,
      ['sign']
    );
    return { publicKey, privateKey, publicKeyJwk: pair.publicKeyJwk };
  }

  const keyPair = await crypto.subtle.generateKey(
    { name: 'ECDSA', namedCurve: 'P-256' },
    true,
    ['sign', 'verify']
  );
  const publicKeyJwk = await crypto.subtle.exportKey('jwk', keyPair.publicKey);
  const privateKeyJwk = await crypto.subtle.exportKey('jwk', keyPair.privateKey);
  await chrome.storage.local.set({
    espelhoKeyPair: {
      publicKeyJwk,
      privateKeyJwk,
      criadoEm: new Date().toISOString()
    }
  });
  return { publicKey: keyPair.publicKey, privateKey: keyPair.privateKey, publicKeyJwk };
}

function normalizarRegistroParaHash(registro) {
  const localizacao = registro?.localizacao || {};
  return {
    tipo: registro?.tipo || '',
    timestamp: registro?.timestamp || '',
    hora: registro?.hora || '',
    usuario: registro?.usuario || '',
    usuarioProvider: registro?.usuarioProvider || '',
    usuarioEmail: registro?.usuarioEmail || '',
    localizacao: {
      cidade: localizacao.cidade || '',
      latitude: Number.isFinite(localizacao.latitude) ? Number(localizacao.latitude) : null,
      longitude: Number.isFinite(localizacao.longitude) ? Number(localizacao.longitude) : null
    }
  };
}

function ordenarRegistrosParaHash(registrosDia) {
  return [...registrosDia].sort((a, b) => {
    const ta = new Date(a.timestamp || 0).getTime();
    const tb = new Date(b.timestamp || 0).getTime();
    if (ta !== tb) {
      return ta - tb;
    }
    return String(a.tipo || '').localeCompare(String(b.tipo || ''));
  });
}

async function gerarHashEncadeadoPorDia(registros) {
  const resultado = {};
  let totalRegistros = 0;
  const datas = Object.keys(registros || {}).sort();
  for (const dataKey of datas) {
    const registrosDia = normalizarArray(registros[dataKey]);
    if (registrosDia.length === 0) {
      continue;
    }
    const registrosOrdenados = ordenarRegistrosParaHash(registrosDia);
    let hashAnterior = '';
    const hashesGerados = [];
    let hashFinal = '';
    for (const registro of registrosOrdenados) {
      totalRegistros += 1;
      const payload = JSON.stringify(normalizarRegistroParaHash(registro));
      const hash = await gerarHashSHA256(`${hashAnterior}|${payload}`);
      hashesGerados.push(hash);
      hashAnterior = hash;
      hashFinal = hash;
    }
    resultado[dataKey] = {
      totalRegistros: registrosOrdenados.length,
      hashFinal,
      hashes: hashesGerados
    };
  }
  return { dias: resultado, totalRegistros };
}

async function gerarChecksumExport(payload) {
  return gerarHashSHA256(JSON.stringify(payload));
}

function bytesToBase64(bytes) {
  let binary = '';
  bytes.forEach(byte => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

function gerarSaltBase64() {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return bytesToBase64(bytes);
}

async function gerarHashPBKDF2(senha, saltBase64, iterations) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(senha),
    { name: 'PBKDF2' },
    false,
    ['deriveBits']
  );
  const saltBytes = base64ToBytes(saltBase64);
  const bits = await crypto.subtle.deriveBits(
    {
      name: 'PBKDF2',
      salt: saltBytes,
      iterations: iterations || PBKDF2_ITERATIONS,
      hash: 'SHA-256'
    },
    keyMaterial,
    256
  );
  return bufferToHex(bits);
}

async function carregarCriptografiaConfig() {
  const data = await chrome.storage.local.get([
    'cryptoEnabled',
    'cryptoSalt',
    'cryptoIterations'
  ]);
  cryptoEnabled = data.cryptoEnabled !== undefined ? Boolean(data.cryptoEnabled) : true;
  cryptoSalt = data.cryptoSalt || null;
  cryptoIterations = data.cryptoIterations || PBKDF2_ITERATIONS;
  if (cryptoEnabled && !cryptoSalt) {
    cryptoSalt = gerarSaltBase64();
    await chrome.storage.local.set({
      cryptoEnabled,
      cryptoSalt,
      cryptoIterations
    });
  }
}

async function importarChaveCripto(rawBase64) {
  if (!rawBase64) {
    return null;
  }
  const rawBytes = base64ToBytes(rawBase64);
  return crypto.subtle.importKey(
    'raw',
    rawBytes,
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}

async function exportarChaveCripto(key) {
  if (!key) {
    return null;
  }
  if (key.extractable === false) {
    return null;
  }
  try {
    const raw = await crypto.subtle.exportKey('raw', key);
    return bufferToBase64(raw);
  } catch (error) {
    return null;
  }
}

async function carregarChaveCriptoSessao() {
  if (!chrome?.storage?.session) {
    return false;
  }
  const data = await chrome.storage.session.get(['cryptoKeyRaw']);
  if (!data.cryptoKeyRaw) {
    return false;
  }
  cryptoKey = await importarChaveCripto(data.cryptoKeyRaw);
  return Boolean(cryptoKey);
}

async function salvarChaveCriptoSessao() {
  if (!chrome?.storage?.session || !cryptoKey) {
    return;
  }
  if (cryptoKey.extractable === false) {
    return;
  }
  try {
    const rawBase64 = await exportarChaveCripto(cryptoKey);
    if (!rawBase64) {
      return;
    }
    await chrome.storage.session.set({
      cryptoKeyRaw: rawBase64,
      cryptoKeyEm: new Date().toISOString()
    });
  } catch (error) {
    // Ignorar falhas de exportacao em chaves nao extraiveis
  }
}

async function limparChaveCriptoSessao() {
  if (!chrome?.storage?.session) {
    return;
  }
  await chrome.storage.session.remove(['cryptoKeyRaw', 'cryptoKeyEm']);
}

async function obterOuCriarChaveDispositivo(userKey) {
  if (!userKey) {
    return null;
  }
  const data = await chrome.storage.local.get(['cryptoDeviceKeys']);
  const keys = normalizarObjeto(data.cryptoDeviceKeys);
  let entry = keys[userKey];
  let rawBase64 = '';
  if (typeof entry === 'string') {
    rawBase64 = entry;
  } else if (entry?.key) {
    rawBase64 = entry.key;
  }

  if (!rawBase64) {
    const key = await crypto.subtle.generateKey(
      { name: 'AES-GCM', length: 256 },
      true,
      ['encrypt', 'decrypt']
    );
    rawBase64 = await exportarChaveCripto(key);
    keys[userKey] = {
      key: rawBase64,
      criadoEm: new Date().toISOString()
    };
    await chrome.storage.local.set({ cryptoDeviceKeys: keys });
  }

  return importarChaveCripto(rawBase64);
}

async function derivarChaveCripto(senha) {
  if (!cryptoSalt) {
    await carregarCriptografiaConfig();
  }
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    encoder.encode(senha),
    { name: 'PBKDF2' },
    false,
    ['deriveKey']
  );
  const saltBytes = base64ToBytes(cryptoSalt);
  return crypto.subtle.deriveKey(
    {
      name: 'PBKDF2',
      salt: saltBytes,
      iterations: cryptoIterations || PBKDF2_ITERATIONS,
      hash: 'SHA-256'
    },
    keyMaterial,
    { name: 'AES-GCM', length: 256 },
    true,
    ['encrypt', 'decrypt']
  );
}

async function criptografarDadosUsuarioComChave(dados, chave) {
  if (!chave) {
    return null;
  }
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const encoder = new TextEncoder();
  const payload = encoder.encode(JSON.stringify(dados || {}));
  const cipher = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, chave, payload);
  return {
    v: 1,
    iv: bytesToBase64(iv),
    data: bufferToBase64(cipher)
  };
}

async function descriptografarDadosUsuarioComChave(payload, chave) {
  if (!chave || !payload?.iv || !payload?.data) {
    return null;
  }
  try {
    const iv = base64ToBytes(payload.iv);
    const cipher = base64ToBytes(payload.data);
    const decrypted = await crypto.subtle.decrypt({ name: 'AES-GCM', iv }, chave, cipher);
    const texto = new TextDecoder().decode(decrypted);
    return JSON.parse(texto);
  } catch (error) {
    return null;
  }
}

async function criptografarDadosUsuario(dados) {
  return criptografarDadosUsuarioComChave(dados, cryptoKey);
}

async function descriptografarDadosUsuario(payload) {
  return descriptografarDadosUsuarioComChave(payload, cryptoKey);
}

async function recriptografarUserDataParaUsuario(userKey, chaveAntiga, chaveNova) {
  if (!userKey || !chaveNova) {
    return;
  }
  const storage = await chrome.storage.local.get(['userDataEncrypted', 'userData']);
  const userDataEncrypted = normalizarObjeto(storage.userDataEncrypted);
  const userDataPlain = normalizarObjeto(storage.userData);
  let mudou = false;

  const payload = userDataEncrypted[userKey];
  if (payload) {
    const dados = await descriptografarDadosUsuarioComChave(payload, chaveAntiga);
    if (dados) {
      const novoPayload = await criptografarDadosUsuarioComChave(dados, chaveNova);
      if (novoPayload) {
        userDataEncrypted[userKey] = novoPayload;
        mudou = true;
      }
    }
  }

  if (userDataPlain[userKey]) {
    const dados = normalizarDadosUsuario(userDataPlain[userKey]);
    const novoPayload = await criptografarDadosUsuarioComChave(dados, chaveNova);
    if (novoPayload) {
      userDataEncrypted[userKey] = novoPayload;
      mudou = true;
    }
    delete userDataPlain[userKey];
  }

  if (mudou) {
    await chrome.storage.local.set({ userDataEncrypted });
  }
  if (storage.userData) {
    if (Object.keys(userDataPlain).length) {
      await chrome.storage.local.set({ userData: userDataPlain });
    } else {
      await chrome.storage.local.remove('userData');
    }
  }
}

function construirTimestampParaData(dataKey, horaStr, segundos) {
  const dataBase = parseDateKey(dataKey);
  if (!dataBase) {
    return null;
  }
  const [hora, minuto] = horaStr.split(':').map(Number);
  if (Number.isNaN(hora) || Number.isNaN(minuto)) {
    return null;
  }
  dataBase.setHours(hora, minuto, segundos || 0, 0);
  return dataBase.toISOString();
}

function formatarHoraParaInput(timestamp) {
  const data = new Date(timestamp);
  const horas = String(data.getHours()).padStart(2, '0');
  const minutos = String(data.getMinutes()).padStart(2, '0');
  return `${horas}:${minutos}`;
}

function obterTotalSegundosDia(dataKey, totaisDiarios, periodos) {
  const totalSalvo = totaisDiarios?.[dataKey];
  if (totalSalvo !== undefined && totalSalvo !== null) {
    if (typeof totalSalvo === 'object') {
      return Number(totalSalvo.totalSegundos) || 0;
    }
    return Number(totalSalvo) || 0;
  }

  const periodosDoDia = periodos?.[dataKey] || [];
  if (!Array.isArray(periodosDoDia) || periodosDoDia.length === 0) {
    return 0;
  }

  return periodosDoDia.reduce((sum, p) => {
    if (p.totalSegundos !== undefined && p.totalSegundos !== null) {
      return sum + (Number(p.totalSegundos) || 0);
    }
    const horas = Number(p.horas) || 0;
    const minutos = Number(p.minutos) || 0;
    return sum + (horas * 3600) + (minutos * 60);
  }, 0);
}

function obterInicioSemana(data) {
  const base = new Date(data);
  base.setHours(0, 0, 0, 0);
  const diaSemana = base.getDay();
  const diff = (diaSemana + 6) % 7;
  base.setDate(base.getDate() - diff);
  return base;
}

function obterDiasUteisNoMes(ano, mes) {
  const ultimoDia = new Date(ano, mes + 1, 0).getDate();
  let total = 0;
  for (let dia = 1; dia <= ultimoDia; dia += 1) {
    const data = new Date(ano, mes, dia);
    const diaSemana = data.getDay();
    if (diaSemana >= 1 && diaSemana <= 5) {
      total += 1;
    }
  }
  return total;
}

function obterCargaDiariaSegundos(config) {
  const inicio = parseTimeToMinutes(config.inicio);
  const fim = parseTimeToMinutes(config.fim);
  const almocoInicio = parseTimeToMinutes(config.almocoInicio);
  const almocoFim = parseTimeToMinutes(config.almocoFim);

  let totalMinutos = 0;
  if (inicio !== null && fim !== null && fim > inicio) {
    totalMinutos = fim - inicio;
  }
  if (almocoInicio !== null && almocoFim !== null && almocoFim > almocoInicio) {
    totalMinutos -= (almocoFim - almocoInicio);
  }
  if (totalMinutos < 0) {
    totalMinutos = 0;
  }
  return totalMinutos * 60;
}

function atualizarCargaDiaria(config) {
  if (!dailyTarget) {
    return;
  }

  dailyTarget.textContent = formatarHorasMinutos(obterCargaDiariaSegundos(config));
}

function calcularTemHistorico(dados) {
  const registros = normalizarObjeto(dados?.registros);
  const periodos = normalizarObjeto(dados?.periodos);
  const temRegistros = Object.values(registros).some(item => Array.isArray(item) && item.length > 0);
  const temPeriodos = Object.values(periodos).some(item => Array.isArray(item) && item.length > 0);
  return temRegistros || temPeriodos;
}

async function simularJornada() {
  const inicio = workStartInput?.value || '';
  const fim = workEndInput?.value || '';
  const almocoInicio = lunchStartInput?.value || '';
  const almocoFim = lunchEndInput?.value || '';

  if (!inicio || !fim) {
    await showMessage('Informe os horarios de entrada e saida para simular.', 'Jornada padrão');
    return;
  }

  const cargaSegundos = obterCargaDiariaSegundos({
    inicio,
    fim,
    almocoInicio,
    almocoFim
  });
  const cargaTexto = formatarHorasMinutos(cargaSegundos);
  const almocoTexto = almocoInicio && almocoFim
    ? `Almoco ${almocoInicio} - ${almocoFim}`
    : 'Sem almoco';
  const mensagem = [
    `Entrada ${inicio} · Saida ${fim}`,
    almocoTexto,
    `Carga diaria estimada: ${cargaTexto}`
  ].join('\n');

  await abrirMessageModal('Simular jornada', mensagem, false, {
    hideActions: true,
    hideClose: false
  });
}

function aplicarEstadoJornada(ativo, config) {
  const disabled = !ativo;
  [workStartInput, workEndInput, lunchStartInput, lunchEndInput].forEach(input => {
    if (input) {
      input.disabled = disabled;
    }
  });
  const ativoFinal = Boolean(ativo);
  if (useScheduleInput) {
    useScheduleInput.checked = ativoFinal;
  }
  jornadaConfigAtual = {
    ativo: ativoFinal,
    inicio: config.inicio || '',
    fim: config.fim || '',
    almocoInicio: config.almocoInicio || '',
    almocoFim: config.almocoFim || '',
    alertaSemSaidaAtivo: config.alertaSemSaidaAtivo || false,
    alertaSemSaidaHoras: config.alertaSemSaidaHoras || 0
  };
  if (scheduleSummary) {
    scheduleSummary.classList.toggle('hidden', !ativoFinal);
  }
  if (!ativoFinal) {
    if (dailyTarget) {
      dailyTarget.textContent = '00:00';
    }
    if (statusHint) {
      statusHint.textContent = '';
    }
    return;
  }
  atualizarCargaDiaria(jornadaConfigAtual);
}

function aplicarEstadoAlertaSemSaida(ativo, horas) {
  if (missingExitAlertInput) {
    missingExitAlertInput.checked = Boolean(ativo);
  }
  if (missingExitHoursInput) {
    missingExitHoursInput.disabled = !ativo;
    missingExitHoursInput.value = horas || 8;
  }
  jornadaConfigAtual.alertaSemSaidaAtivo = Boolean(ativo);
  jornadaConfigAtual.alertaSemSaidaHoras = horas || 0;
}

async function carregarJornadaConfig() {
  const { dados } = await obterDadosUsuarioStorage();
  const config = dados.jornadaConfig || {};

  if (workStartInput) workStartInput.value = config.inicio || '';
  if (workEndInput) workEndInput.value = config.fim || '';
  if (lunchStartInput) lunchStartInput.value = config.almocoInicio || '';
  if (lunchEndInput) lunchEndInput.value = config.almocoFim || '';
  if (missingExitHoursInput) {
    missingExitHoursInput.value = config.alertaSemSaidaHoras || 8;
  }

  const configAtual = {
    inicio: config.inicio || '',
    fim: config.fim || '',
    almocoInicio: config.almocoInicio || '',
    almocoFim: config.almocoFim || '',
    alertaSemSaidaAtivo: Boolean(config.alertaSemSaidaAtivo),
    alertaSemSaidaHoras: config.alertaSemSaidaHoras || 8
  };
  const possuiHorarios = Boolean(configAtual.inicio || configAtual.fim || configAtual.almocoInicio || configAtual.almocoFim);
  const ativo = config.ativo !== undefined ? Boolean(config.ativo) : possuiHorarios;
  aplicarEstadoJornada(ativo, configAtual);
  aplicarEstadoAlertaSemSaida(configAtual.alertaSemSaidaAtivo, configAtual.alertaSemSaidaHoras);
  await salvarMonitorEstadoAtual();
}

async function salvarJornadaConfig() {
  const alertaHorasValor = Number(missingExitHoursInput?.value);
  const alertaHoras = Number.isFinite(alertaHorasValor) && alertaHorasValor > 0 ? alertaHorasValor : 8;
  const config = {
    ativo: useScheduleInput?.checked || false,
    inicio: workStartInput?.value || '',
    fim: workEndInput?.value || '',
    almocoInicio: lunchStartInput?.value || '',
    almocoFim: lunchEndInput?.value || '',
    alertaSemSaidaAtivo: missingExitAlertInput?.checked || false,
    alertaSemSaidaHoras: alertaHoras
  };

  const { dados } = await obterDadosUsuarioStorage();
  dados.jornadaConfig = config;
  await salvarDadosUsuario(dados);
  aplicarEstadoJornada(config.ativo, config);
  aplicarEstadoAlertaSemSaida(config.alertaSemSaidaAtivo, config.alertaSemSaidaHoras);
  await salvarMonitorEstadoAtual();
  chrome.runtime?.sendMessage?.({ type: 'monitor_check_now' });
}

function abrirConfigModal() {
  if (!configModal) {
    return;
  }
  configModal.classList.add('open');
  configModal.setAttribute('aria-hidden', 'false');
  carregarJornadaConfig();
}

function fecharConfigModal() {
  if (!configModal) {
    return;
  }
  void salvarJornadaConfig();
  configModal.classList.remove('open');
  configModal.setAttribute('aria-hidden', 'true');
}

function aplicarMonitorConfig(config) {
  const cfg = config || {};
  if (monitorEnabled) {
    monitorEnabled.checked = Boolean(cfg.ativo);
  }
  if (monitorUrlInput) {
    monitorUrlInput.value = cfg.url || '';
  }
  if (monitorApiKeyInput) {
    monitorApiKeyInput.value = cfg.apiKey || '';
  }
  if (monitorDeviceNameInput) {
    monitorDeviceNameInput.value = cfg.deviceName || '';
  }
  if (monitorDeviceIdInput) {
    monitorDeviceIdInput.value = cfg.deviceId || '';
  }
}

async function carregarMonitorConfig() {
  const storage = await chrome.storage.local.get(['monitorConfig', 'monitorDeviceId', 'monitorQueue']);
  let deviceId = storage.monitorDeviceId || '';
  if (!deviceId) {
    deviceId = gerarIdAleatorio();
    await chrome.storage.local.set({ monitorDeviceId: deviceId });
  }
  const config = storage.monitorConfig || {};
  monitorConfigAtual = {
    ativo: Boolean(config.ativo),
    url: (config.url || '').trim(),
    apiKey: (config.apiKey || '').trim(),
    deviceId,
    deviceName: (config.deviceName || '').trim()
  };
  if (Array.isArray(storage.monitorQueue)) {
    monitorQueue = storage.monitorQueue;
  }
  monitorQueueCarregada = true;
  aplicarMonitorConfig(monitorConfigAtual);
}

function obterMonitorUrlBase(url) {
  const valor = (url || '').trim();
  if (!valor) {
    return '';
  }
  return valor.replace(/\/+$/, '');
}

async function validarSessaoUnicaServidor(user) {
  if (!monitorConfigAtual?.url) {
    return { ok: true, skipped: 'monitor_url' };
  }
  const baseUrl = obterMonitorUrlBase(monitorConfigAtual.url);
  if (!baseUrl) {
    return { ok: true, skipped: 'monitor_url' };
  }
  const deviceId = monitorConfigAtual.deviceId || '';
  if (!deviceId) {
    return { ok: true, skipped: 'device_missing' };
  }
  try {
    const headers = {
      'Content-Type': 'application/json'
    };
    if (monitorConfigAtual.apiKey) {
      headers['X-API-Key'] = monitorConfigAtual.apiKey;
    }
    const response = await fetch(`${baseUrl}/api/sessions/claim`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        user: {
          key: user?.key || '',
          name: user?.name || '',
          email: user?.email || '',
          provider: user?.provider || ''
        },
        device: {
          id: deviceId,
          name: monitorConfigAtual.deviceName || ''
        }
      })
    });
    if (response.ok) {
      return { ok: true };
    }
    const data = await response.json().catch(() => ({}));
    if (response.status === 409 && data?.error === 'session_conflict') {
      return { ok: false, reason: 'session_conflict', active: data.active || {} };
    }
    return { ok: false, reason: 'server_error', status: response.status };
  } catch (error) {
    return { ok: false, reason: 'server_unreachable' };
  }
}

function lerMonitorConfigModal() {
  return {
    ativo: monitorEnabled?.checked || false,
    url: monitorUrlInput?.value?.trim() || '',
    apiKey: monitorApiKeyInput?.value?.trim() || '',
    deviceName: monitorDeviceNameInput?.value?.trim() || ''
  };
}

async function salvarMonitorConfig() {
  const config = lerMonitorConfigModal();
  monitorConfigAtual = {
    ...monitorConfigAtual,
    ...config
  };
  await chrome.storage.local.set({
    monitorConfig: config,
    monitorDeviceId: monitorConfigAtual.deviceId
  });
  aplicarMonitorConfig(monitorConfigAtual);
  await showMessageSemCancelar('Monitoramento atualizado.', 'Monitoramento');
  void tentarEnviarFilaMonitoramento();
}

async function testarMonitorConexao() {
  const config = lerMonitorConfigModal();
  const baseUrl = obterMonitorUrlBase(config.url);
  if (!baseUrl) {
    await showMessage('Informe a URL do servidor.', 'Monitoramento');
    return;
  }
  try {
    const headers = {};
    if (config.apiKey) {
      headers['X-API-Key'] = config.apiKey;
    }
    const response = await fetch(`${baseUrl}/api/health`, { headers });
    if (!response.ok) {
      throw new Error('Falha ao conectar.');
    }
    await showMessageSemCancelar('Conexao OK.', 'Monitoramento');
  } catch (error) {
    await showMessage('Nao foi possivel conectar ao servidor.', 'Monitoramento');
  }
}

async function testarNotificacaoNavegador() {
  if (!chrome?.runtime?.sendMessage) {
    await showMessage('Nao foi possivel enviar a notificacao.', 'Notificacao');
    return;
  }
  chrome.runtime.sendMessage(
    {
      type: 'show_notification',
      title: 'Teste de notificacao',
      message: 'Se voce esta vendo isso, as notificacoes estao funcionando.'
    },
    () => {
      showMessageSemCancelar('Notificacao enviada.', 'Notificacao');
    }
  );
}

async function forcarChecagemMonitoramento() {
  if (!chrome?.runtime?.sendMessage) {
    await showMessage('Nao foi possivel iniciar a checagem.', 'Monitoramento');
    return;
  }
  chrome.runtime.sendMessage({ type: 'monitor_check_now' }, () => {
    setTimeout(() => {
      atualizarStatusMonitoramento();
    }, 300);
    showMessageSemCancelar('Checagem solicitada.', 'Monitoramento');
  });
}

async function atualizarStatusMonitoramento() {
  if (!monitorStatus) {
    return;
  }
  const data = await chrome.storage.local.get([
    'monitorLastCheckAt',
    'monitorLastCheckState',
    'monitorLastAlertAt',
    'monitorLastAlertTitle'
  ]);
  const ultimoCheck = data.monitorLastCheckAt ? formatarDataHoraCurta(data.monitorLastCheckAt) : '--';
  const state = data.monitorLastCheckState || {};
  const ultimoAlertTitle = data.monitorLastAlertTitle || '';
  const ultimoAlertAt = data.monitorLastAlertAt ? formatarDataHoraCurta(data.monitorLastAlertAt) : '';
  if (monitorLastCheck) {
    monitorLastCheck.textContent = ultimoCheck || '--';
  }
  if (monitorState) {
    monitorState.textContent = state.estado || '--';
  }
  if (monitorEntryAt) {
    monitorEntryAt.textContent = state.currentEntryTimestamp
      ? formatarDataHoraCurta(state.currentEntryTimestamp)
      : '--';
  }
  if (monitorScheduleEnd) {
    monitorScheduleEnd.textContent = state.jornadaFim || '--';
  }
  if (monitorMissingExitCfg) {
    monitorMissingExitCfg.textContent = state.alertaSemSaidaAtivo
      ? `${state.alertaSemSaidaHoras || 0}h`
      : 'desligado';
  }
  if (monitorLastAlert) {
    monitorLastAlert.textContent = ultimoAlertTitle
      ? `${ultimoAlertTitle} · ${ultimoAlertAt || '--'}`
      : '--';
  }
  if (monitorAlarmStatus && chrome?.alarms?.get) {
    chrome.alarms.get('monitor-alerts', alarm => {
      monitorAlarmStatus.textContent = alarm ? 'ativo' : 'inativo';
    });
  } else if (monitorAlarmStatus) {
    monitorAlarmStatus.textContent = '--';
  }
}

function abrirMonitorModal() {
  if (!monitorModal) {
    return;
  }
  monitorModal.classList.add('open');
  monitorModal.setAttribute('aria-hidden', 'false');
  aplicarMonitorConfig(monitorConfigAtual);
  atualizarStatusMonitoramento();
}

function fecharMonitorModal() {
  if (!monitorModal) {
    return;
  }
  monitorModal.classList.remove('open');
  monitorModal.setAttribute('aria-hidden', 'true');
}

function montarMonitorEstadoAtual() {
  const userKey = obterUsuarioChave();
  const usuarioAtivo = Boolean(usuarioLogado && userKey);
  return {
    user: usuarioAtivo
      ? {
          key: userKey,
          name: usuarioNome || '',
          email: usuarioEmail || '',
          provider: usuarioProvider || 'local'
        }
      : {
          key: '',
          name: '',
          email: '',
          provider: ''
        },
    estado: estado || 'aguardando',
    currentEntryTimestamp: currentEntry?.timestamp || '',
    almocoSaidaTimestamp: almocoSaida?.timestamp || '',
    almocoRetornoTimestamp: almocoRetorno?.timestamp || '',
    jornadaConfig: {
      ativo: Boolean(jornadaConfigAtual.ativo),
      inicio: jornadaConfigAtual.inicio || '',
      fim: jornadaConfigAtual.fim || '',
      almocoInicio: jornadaConfigAtual.almocoInicio || '',
      almocoFim: jornadaConfigAtual.almocoFim || '',
      alertaSemSaidaAtivo: Boolean(jornadaConfigAtual.alertaSemSaidaAtivo),
      alertaSemSaidaHoras: jornadaConfigAtual.alertaSemSaidaHoras || 0
    },
    atualizadoEm: new Date().toISOString()
  };
}

async function salvarMonitorEstadoAtual() {
  await chrome.storage.local.set({
    monitorState: montarMonitorEstadoAtual()
  });
  chrome.runtime?.sendMessage?.({ type: 'ensure_alarm' });
}

async function registrarAlertaMonitoramento(alertaTipo, detalhes) {
  if (!monitorConfigAtual.ativo || !monitorConfigAtual.url) {
    return;
  }
  const hoje = new Date().toISOString().split('T')[0];
  const storage = await chrome.storage.local.get(['monitorAlertSent']);
  const alertSent = storage.monitorAlertSent || {};
  if (alertSent[alertaTipo] === hoje) {
    return;
  }
  await enviarEventoMonitoramento('alerta', {
    alertaTipo,
    data: hoje,
    ...detalhes
  });
  alertSent[alertaTipo] = hoje;
  await chrome.storage.local.set({ monitorAlertSent: alertSent });
}

async function carregarFilaMonitoramento() {
  if (monitorQueueCarregada) {
    return monitorQueue;
  }
  const storage = await chrome.storage.local.get(['monitorQueue']);
  monitorQueue = Array.isArray(storage.monitorQueue) ? storage.monitorQueue : [];
  monitorQueueCarregada = true;
  return monitorQueue;
}

async function salvarFilaMonitoramento() {
  await chrome.storage.local.set({ monitorQueue });
}

async function enfileirarEventoMonitoramento(evento) {
  await carregarFilaMonitoramento();
  monitorQueue.push(evento);
  if (monitorQueue.length > MONITOR_QUEUE_LIMIT) {
    monitorQueue.splice(0, monitorQueue.length - MONITOR_QUEUE_LIMIT);
  }
  await salvarFilaMonitoramento();
}

function montarEventoMonitoramento(tipo, detalhes = {}) {
  const manifest = chrome.runtime?.getManifest?.() || {};
  const payloadDetalhes = { ...detalhes };
  if (!payloadDetalhes.localizacao && ultimaLocalizacao) {
    payloadDetalhes.localizacao = ultimaLocalizacao;
  }
  return {
    type: tipo,
    timestamp: new Date().toISOString(),
    sessionId: monitorSessionId,
    user: {
      key: obterUsuarioChave(),
      name: usuarioNome || '',
      email: usuarioEmail || '',
      provider: usuarioProvider || 'local'
    },
    device: {
      id: monitorConfigAtual.deviceId || '',
      name: monitorConfigAtual.deviceName || ''
    },
    app: {
      name: manifest.name || 'Ponto Eletronico',
      version: manifest.version || '',
      extVersion: manifest.version || ''
    },
    client: {
      userAgent: navigator.userAgent || '',
      language: navigator.language || ''
    },
    details: payloadDetalhes
  };
}

async function enviarEventoMonitoramentoDireto(config, evento) {
  const baseUrl = obterMonitorUrlBase(config.url);
  if (!baseUrl) {
    return false;
  }
  const headers = {
    'Content-Type': 'application/json'
  };
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

async function tentarEnviarFilaMonitoramento() {
  if (monitorQueueEnviando) {
    return;
  }
  monitorQueueEnviando = true;
  try {
    await carregarFilaMonitoramento();
    if (!monitorQueue.length) {
      return;
    }
    const baseUrl = obterMonitorUrlBase(monitorConfigAtual.url);
    if (!baseUrl || !monitorConfigAtual.ativo) {
      return;
    }
    let indiceFalha = -1;
    for (let i = 0; i < monitorQueue.length; i += 1) {
      const ok = await enviarEventoMonitoramentoDireto(monitorConfigAtual, monitorQueue[i]);
      if (!ok) {
        indiceFalha = i;
        break;
      }
    }
    if (indiceFalha === -1) {
      monitorQueue = [];
      await salvarFilaMonitoramento();
      return;
    }
    if (indiceFalha > 0) {
      monitorQueue = monitorQueue.slice(indiceFalha);
      await salvarFilaMonitoramento();
    }
  } finally {
    monitorQueueEnviando = false;
  }
}

async function enviarEventoMonitoramento(tipo, detalhes = {}) {
  if (!monitorConfigAtual.ativo || !monitorConfigAtual.url) {
    return;
  }
  const evento = montarEventoMonitoramento(tipo, detalhes);
  const ok = await enviarEventoMonitoramentoDireto(monitorConfigAtual, evento);
  if (!ok) {
    await enfileirarEventoMonitoramento(evento);
    return;
  }
  void tentarEnviarFilaMonitoramento();
}

function toggleMenuPanel() {
  if (!menuPanel) {
    return;
  }
  menuPanel.classList.toggle('open');
  const isOpen = menuPanel.classList.contains('open');
  menuPanel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

function fecharMenuPanel() {
  if (!menuPanel) {
    return;
  }
  menuPanel.classList.remove('open');
  menuPanel.setAttribute('aria-hidden', 'true');
}

function calcularSegundosEmAndamento() {
  const agora = new Date();
  if (estado === 'trabalhando' && currentEntry) {
    return Math.max(0, Math.floor((agora - new Date(currentEntry.timestamp)) / 1000));
  }
  if (estado === 'almoco' && currentEntry && almocoSaida) {
    return Math.max(0, Math.floor((new Date(almocoSaida.timestamp) - new Date(currentEntry.timestamp)) / 1000));
  }
  if (estado === 'trabalhando_apos_almoco' && currentEntry && almocoSaida && almocoRetorno) {
    const antesAlmoco = Math.floor((new Date(almocoSaida.timestamp) - new Date(currentEntry.timestamp)) / 1000);
    const depoisAlmoco = Math.floor((agora - new Date(almocoRetorno.timestamp)) / 1000);
    return Math.max(0, antesAlmoco + depoisAlmoco);
  }
  return 0;
}

function atualizarHorasHojeEmAndamento() {
  const hoursTodayEl = document.getElementById('hoursToday');
  if (!hoursTodayEl) {
    return;
  }
  const totalSegundosHoje = totalSegundosHojeBase + calcularSegundosEmAndamento();
  const valorHoje = formatarHorasMinutos(totalSegundosHoje);
  hoursTodayEl.textContent = valorHoje;
  hoursTodayEl.innerText = valorHoje;
  atualizarSaldoHoje(totalSegundosHoje);
}

function calcularSegundosAlmocoEmAndamento() {
  const agora = new Date();
  if (estado === 'almoco' && almocoSaida && !almocoRetorno) {
    return Math.max(0, Math.floor((agora - new Date(almocoSaida.timestamp)) / 1000));
  }
  return 0;
}

function atualizarDescontoAlmoco() {
  const descontoEl = document.getElementById('lunchDiscount');
  if (!descontoEl) {
    return;
  }
  const totalSegundos = totalSegundosAlmocoBase + calcularSegundosAlmocoEmAndamento();
  const valor = formatarHorasMinutos(totalSegundos);
  descontoEl.textContent = valor;
  descontoEl.innerText = valor;
}

function verificarAlertasJornada() {
  const agora = new Date();
  const minutosAgora = (agora.getHours() * 60) + agora.getMinutes();

  if (jornadaConfigAtual.ativo) {
    const almocoInicio = parseTimeToMinutes(jornadaConfigAtual.almocoInicio);
    const almocoFim = parseTimeToMinutes(jornadaConfigAtual.almocoFim);
    const fim = parseTimeToMinutes(jornadaConfigAtual.fim);

    if (statusHint) {
      if (
        almocoInicio !== null &&
        almocoFim !== null &&
        minutosAgora >= almocoInicio &&
        minutosAgora <= almocoFim &&
        !almocoSaida &&
        estado === 'trabalhando'
      ) {
        statusHint.textContent = 'Sugestao: iniciar almoço';
      } else {
        statusHint.textContent = '';
      }
    }

    if (fim !== null && currentEntry && estado !== 'aguardando') {
      const hoje = new Date().toISOString().split('T')[0];
    if (minutosAgora >= fim && alertaSaidaMostradoEm !== hoje) {
      alertaSaidaMostradoEm = hoje;
      const horarioFim = jornadaConfigAtual.fim ? ` ${jornadaConfigAtual.fim}` : '';
      const tituloAviso = `Aviso: Fim da jornada${horarioFim}`;
      const aviso = 'Horario de saida ultrapassado. Nao esqueça de registrar a saida.';
      abrirMessageModal(tituloAviso, aviso, false, {
        hideActions: true,
        hideClose: false
      });
      notificarSeSegundoPlano(tituloAviso, aviso);
      void registrarAlertaMonitoramento('fim_jornada', {
        horarioFim: jornadaConfigAtual.fim || ''
      });
    }
  }
  } else if (statusHint) {
    statusHint.textContent = '';
  }

  if (jornadaConfigAtual.alertaSemSaidaAtivo && currentEntry && estado !== 'aguardando') {
    const limiteHoras = Number(jornadaConfigAtual.alertaSemSaidaHoras) || 0;
    if (limiteHoras > 0) {
      const diffSegundos = Math.floor((agora - new Date(currentEntry.timestamp)) / 1000);
      if (diffSegundos >= limiteHoras * 3600) {
        const hoje = new Date().toISOString().split('T')[0];
        if (alertaSemSaidaMostradoEm !== hoje) {
          alertaSemSaidaMostradoEm = hoje;
          const tituloAviso = `Aviso: Sem saida (${limiteHoras}h)`;
          const aviso = `Falta registrar a saida. Ja passaram ${limiteHoras}h desde a entrada.`;
          abrirMessageModal(tituloAviso, aviso, false, {
            hideActions: true,
            hideClose: false
          });
          notificarSeSegundoPlano(tituloAviso, aviso);
          void registrarAlertaMonitoramento('sem_saida', {
            limiteHoras
          });
        }
      }
    }
  }
}

function atualizarSaldoHoje(totalSegundosHoje) {
  if (!scheduleSummary || !dailyBalance) {
    return;
  }
  if (!jornadaConfigAtual.ativo) {
    scheduleSummary.classList.add('hidden');
    return;
  }

  const cargaSegundos = obterCargaDiariaSegundos(jornadaConfigAtual);
  const saldo = totalSegundosHoje - cargaSegundos;
  const sinal = saldo >= 0 ? '+' : '-';
  const valor = formatarHorasMinutos(Math.abs(saldo));
  dailyBalance.textContent = `${sinal}${valor}`;
  scheduleSummary.classList.remove('hidden');
  scheduleSummary.classList.toggle('positive', saldo >= 0);
  scheduleSummary.classList.toggle('negative', saldo < 0);
}

async function atualizarResumoSemanal() {
  if (!weekModal || !weekTotal || !weekAverage || !weekExtra || !weekAbsences) {
    return;
  }

  const agora = new Date();
  const inicioSemana = obterInicioSemana(agora);
  const dataHoje = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate());
  const fimSemana = new Date(inicioSemana);
  fimSemana.setDate(inicioSemana.getDate() + 6);

  const { dados } = await obterDadosUsuarioStorage();
  let totaisDiarios = dados.totaisDiarios || {};
  const periodos = dados.periodos || {};
  if (Array.isArray(totaisDiarios)) {
    totaisDiarios = {};
  }
  const feriadosLista = Array.isArray(dados.feriados) ? dados.feriados : [];
  const feriadosSet = new Set(
    feriadosLista.map(item => item?.data).filter(Boolean)
  );

  const config = dados.jornadaConfig || {};
  const jornadaAtiva = Boolean(config.ativo);
  const cargaDiariaSegundos = obterCargaDiariaSegundos({
    inicio: config.inicio || '',
    fim: config.fim || '',
    almocoInicio: config.almocoInicio || '',
    almocoFim: config.almocoFim || ''
  });

  let totalSegundosSemana = 0;
  let diasComDados = 0;
  let faltas = 0;
  let diasConsiderados = 0;

  for (let i = 0; i < 7; i += 1) {
    const dia = new Date(inicioSemana);
    dia.setDate(inicioSemana.getDate() + i);
    if (dia > dataHoje) {
      continue;
    }

    const isWeekday = dia.getDay() >= 1 && dia.getDay() <= 5;
    const dataKey = formatDateKey(dia.getFullYear(), dia.getMonth(), dia.getDate());
    const isHoliday = feriadosSet.has(dataKey);
    if (isWeekday && !isHoliday) {
      diasConsiderados += 1;
    }

    const totalDia = obterTotalSegundosDia(dataKey, totaisDiarios, periodos);
    totalSegundosSemana += totalDia;
    if (totalDia > 0) {
      diasComDados += 1;
    } else if (isWeekday && !isHoliday) {
      faltas += 1;
    }
  }

  const mediaSegundos = diasComDados > 0 ? Math.floor(totalSegundosSemana / diasComDados) : 0;
  const esperadoSemana = jornadaAtiva ? cargaDiariaSegundos * diasConsiderados : 0;
  const extrasSegundos = jornadaAtiva ? Math.max(0, totalSegundosSemana - esperadoSemana) : 0;

  weekTotal.textContent = formatarHorasMinutos(totalSegundosSemana);
  weekAverage.textContent = formatarHorasMinutos(mediaSegundos);
  weekExtra.textContent = formatarHorasMinutos(extrasSegundos);
  weekAbsences.textContent = String(faltas);
}

function abrirWeekModal() {
  if (!weekModal) {
    return;
  }
  weekModal.classList.add('open');
  weekModal.setAttribute('aria-hidden', 'false');
}

function fecharWeekModal() {
  if (!weekModal) {
    return;
  }
  weekModal.classList.remove('open');
  weekModal.setAttribute('aria-hidden', 'true');
}

async function atualizarResumoMensal() {
  if (!monthModal || !monthTotal || !monthAverage || !monthExtra || !monthAbsences) {
    return;
  }

  const agora = new Date();
  const ano = agora.getFullYear();
  const mes = agora.getMonth();
  const dataHoje = new Date(ano, mes, agora.getDate());
  const ultimoDiaMes = new Date(ano, mes + 1, 0).getDate();

  const { dados } = await obterDadosUsuarioStorage();
  let totaisDiarios = dados.totaisDiarios || {};
  const periodos = dados.periodos || {};
  if (Array.isArray(totaisDiarios)) {
    totaisDiarios = {};
  }
  const feriadosLista = Array.isArray(dados.feriados) ? dados.feriados : [];
  const feriadosSet = new Set(
    feriadosLista.map(item => item?.data).filter(Boolean)
  );

  const config = dados.jornadaConfig || {};
  const jornadaAtiva = Boolean(config.ativo);
  const cargaDiariaSegundos = obterCargaDiariaSegundos({
    inicio: config.inicio || '',
    fim: config.fim || '',
    almocoInicio: config.almocoInicio || '',
    almocoFim: config.almocoFim || ''
  });

  let totalSegundosMes = 0;
  let diasComDados = 0;
  let faltas = 0;
  let diasUteisAteHoje = 0;

  for (let dia = 1; dia <= ultimoDiaMes; dia += 1) {
    const dataAtual = new Date(ano, mes, dia);
    if (dataAtual > dataHoje) {
      continue;
    }
    const dataKey = formatDateKey(ano, mes, dia);
    const diaSemana = dataAtual.getDay();
    const isWeekday = diaSemana >= 1 && diaSemana <= 5;
    const isHoliday = feriadosSet.has(dataKey);
    if (isWeekday && !isHoliday) {
      diasUteisAteHoje += 1;
    }
    const totalDia = obterTotalSegundosDia(dataKey, totaisDiarios, periodos);
    totalSegundosMes += totalDia;
    if (totalDia > 0) {
      diasComDados += 1;
    } else if (isWeekday && !isHoliday) {
      faltas += 1;
    }
  }

  const mediaSegundos = diasComDados > 0 ? Math.floor(totalSegundosMes / diasComDados) : 0;
  const esperadoMes = jornadaAtiva ? cargaDiariaSegundos * diasUteisAteHoje : 0;
  const extrasSegundos = jornadaAtiva ? Math.max(0, totalSegundosMes - esperadoMes) : 0;

  monthTotal.textContent = formatarHorasMinutos(totalSegundosMes);
  monthAverage.textContent = formatarHorasMinutos(mediaSegundos);
  monthExtra.textContent = formatarHorasMinutos(extrasSegundos);
  monthAbsences.textContent = String(faltas);
}

function abrirMonthModal() {
  if (!monthModal) {
    return;
  }
  monthModal.classList.add('open');
  monthModal.setAttribute('aria-hidden', 'false');
}

function fecharMonthModal() {
  if (!monthModal) {
    return;
  }
  monthModal.classList.remove('open');
  monthModal.setAttribute('aria-hidden', 'true');
}

async function carregarFeriados() {
  const { dados } = await obterDadosUsuarioStorage();
  feriados = Array.isArray(dados.feriados)
    ? dados.feriados
      .map(item => {
        if (!item) {
          return null;
        }
        const dataKey = item.data || item.date;
        if (!dataKey) {
          return null;
        }
        return {
          data: dataKey,
          nome: item.nome || item.name || ''
        };
      })
      .filter(Boolean)
    : [];
  feriados.sort((a, b) => a.data.localeCompare(b.data));
  renderizarFeriados();
}

async function salvarFeriados() {
  const { dados } = await obterDadosUsuarioStorage();
  dados.feriados = feriados;
  await salvarDadosUsuario(dados);
}

function renderizarFeriados() {
  if (!holidaysList || !holidaysEmpty) {
    return;
  }
  if (!feriados.length) {
    holidaysList.innerHTML = '';
    holidaysEmpty.classList.remove('hidden');
    return;
  }
  holidaysEmpty.classList.add('hidden');
  holidaysList.innerHTML = feriados.map(item => {
    const nome = item.nome || 'Feriado';
    return `
      <div class="holiday-item">
        <div class="holiday-info">
          <span class="holiday-date">${formatarDataCurta(item.data)}</span>
          <span class="holiday-name">${nome}</span>
        </div>
        <button class="holiday-remove" data-date="${item.data}" title="Remover">✖</button>
      </div>
    `;
  }).join('');
}

async function atualizarIndicadorFeriado() {
  if (!holidayIndicator) {
    return;
  }
  const hoje = new Date();
  const dataKey = formatDateKey(hoje.getFullYear(), hoje.getMonth(), hoje.getDate());
  let lista = feriados;
  if (!Array.isArray(lista) || !lista.length) {
    const { dados } = await obterDadosUsuarioStorage();
    lista = Array.isArray(dados.feriados) ? dados.feriados : [];
  }
  const feriado = lista.find(item => {
    const chave = item?.data || item?.date;
    return chave === dataKey;
  });
  if (!feriado) {
    holidayIndicator.textContent = '';
    holidayIndicator.classList.add('hidden');
    return;
  }
  const nome = feriado.nome || feriado.name || 'Feriado';
  holidayIndicator.textContent = `🎉 Feriado hoje: ${nome}`;
  holidayIndicator.classList.remove('hidden');
}

async function adicionarFeriado() {
  if (!holidaysDate) {
    return;
  }
  const dataKey = holidaysDate.value;
  if (!dataKey) {
    await showMessage('Informe a data do feriado.', 'Feriados');
    return;
  }
  const nome = holidaysName?.value.trim() || 'Feriado';
  const existente = feriados.find(item => item.data === dataKey);
  if (existente) {
    existente.nome = nome;
  } else {
    feriados.push({ data: dataKey, nome });
  }
  feriados.sort((a, b) => a.data.localeCompare(b.data));
  await salvarFeriados();
  renderizarFeriados();
  await atualizarIndicadorFeriado();
  if (holidaysName) {
    holidaysName.value = '';
  }
  if (weekModal?.classList.contains('open')) {
    await atualizarResumoSemanal();
  }
  if (monthModal?.classList.contains('open')) {
    await atualizarResumoMensal();
  }
}

async function removerFeriado(dataKey) {
  feriados = feriados.filter(item => item.data !== dataKey);
  await salvarFeriados();
  renderizarFeriados();
  await atualizarIndicadorFeriado();
  if (weekModal?.classList.contains('open')) {
    await atualizarResumoSemanal();
  }
  if (monthModal?.classList.contains('open')) {
    await atualizarResumoMensal();
  }
}

function abrirFeriadosModal() {
  if (!holidaysModal) {
    return;
  }
  if (holidaysDate) {
    holidaysDate.value = '';
  }
  if (holidaysName) {
    holidaysName.value = '';
  }
  holidaysModal.classList.add('open');
  holidaysModal.setAttribute('aria-hidden', 'false');
  carregarFeriados();
}

function fecharFeriadosModal() {
  if (!holidaysModal) {
    return;
  }
  holidaysModal.classList.remove('open');
  holidaysModal.setAttribute('aria-hidden', 'true');
}

function abrirBackupModal() {
  if (!backupModal) {
    return;
  }
  backupModal.classList.add('open');
  backupModal.setAttribute('aria-hidden', 'false');
}

function fecharBackupModal() {
  if (!backupModal) {
    return;
  }
  backupModal.classList.remove('open');
  backupModal.setAttribute('aria-hidden', 'true');
}

function abrirRelatorioPdf() {
  void salvarChaveCriptoSessao();
  const url = chrome?.runtime?.getURL ? chrome.runtime.getURL('relatorio.html') : 'relatorio.html';
  window.open(url, '_blank', 'width=820,height=900');
}

function abrirGuiaPdf() {
  const url = chrome?.runtime?.getURL ? chrome.runtime.getURL('guia.html') : 'guia.html';
  window.open(url, '_blank', 'width=820,height=900');
}

async function abrirJanelaRestauracao() {
  const url = chrome?.runtime?.getURL ? chrome.runtime.getURL('backup.html') : 'backup.html';
  const width = 380;
  const height = 480;
  const options = {
    url,
    type: 'popup',
    width,
    height,
    focused: true
  };

  if (chrome?.windows?.getCurrent) {
    try {
      const current = await new Promise(resolve => chrome.windows.getCurrent(resolve));
      if (current && Number.isFinite(current.left) && Number.isFinite(current.top) && Number.isFinite(current.width)) {
        const left = Math.max(0, current.left + current.width - width - 20);
        const top = Math.max(0, current.top + 60);
        options.left = left;
        options.top = top;
      }
    } catch (error) {
      // Ignorar erros de posicionamento
    }
  }

  if (chrome?.windows?.create) {
    try {
      chrome.windows.create(options);
    } catch (error) {
      window.open(url, '_blank');
    }
  } else {
    window.open(url, '_blank');
  }
  fecharBackupModal();
}

async function carregarSenhaEdicao() {
  const data = await chrome.storage.local.get([
    'editPasswordHash',
    'editPasswordSalt',
    'editPasswordIterations'
  ]);
  senhaEdicaoHash = data.editPasswordHash || null;
  senhaEdicaoSalt = data.editPasswordSalt || null;
  senhaEdicaoIterations = data.editPasswordIterations || PBKDF2_ITERATIONS;
  senhaEdicaoLegacy = Boolean(senhaEdicaoHash && !senhaEdicaoSalt);

  if (!senhaEdicaoHash) {
    const salt = gerarSaltBase64();
    const hash = await gerarHashPBKDF2('admin', salt, PBKDF2_ITERATIONS);
    await chrome.storage.local.set({
      editPasswordHash: hash,
      editPasswordSalt: salt,
      editPasswordIterations: PBKDF2_ITERATIONS
    });
    senhaEdicaoHash = hash;
    senhaEdicaoSalt = salt;
    senhaEdicaoIterations = PBKDF2_ITERATIONS;
    senhaEdicaoLegacy = false;
    senhaPadraoAtiva = true;
    return;
  }

  if (senhaEdicaoLegacy) {
    const hashAdmin = await gerarHashSHA256('admin');
    senhaPadraoAtiva = senhaEdicaoHash === hashAdmin;
    return;
  }

  const hashAdmin = await gerarHashPBKDF2('admin', senhaEdicaoSalt, senhaEdicaoIterations);
  senhaPadraoAtiva = hashAdmin === senhaEdicaoHash;
}

function abrirPasswordModal() {
  if (!passwordModal) {
    return;
  }
  const temSenha = Boolean(senhaEdicaoHash);
  if (passwordCurrentField) {
    passwordCurrentField.classList.toggle('hidden', !temSenha);
  }
  if (passwordDefaultHint) {
    passwordDefaultHint.classList.toggle('hidden', !senhaPadraoAtiva);
  }
  if (passwordCurrent) passwordCurrent.value = '';
  if (passwordNew) passwordNew.value = '';
  if (passwordConfirm) passwordConfirm.value = '';
  passwordModal.classList.add('open');
  passwordModal.setAttribute('aria-hidden', 'false');
}

function fecharPasswordModal() {
  if (!passwordModal) {
    return;
  }
  passwordModal.classList.remove('open');
  passwordModal.setAttribute('aria-hidden', 'true');
}

async function salvarSenhaEdicao() {
  if (!passwordNew || !passwordConfirm) {
    return;
  }
  const novaSenha = passwordNew.value;
  const confirmar = passwordConfirm.value;

  if (!novaSenha) {
    await showMessage('Informe a nova senha.', 'Senha');
    return;
  }
  if (novaSenha !== confirmar) {
    await showMessage('As senhas nao conferem.', 'Senha');
    return;
  }

  if (senhaEdicaoHash && passwordCurrent) {
    const senhaAtual = passwordCurrent.value;
    if (!senhaAtual) {
      await showMessage('Informe a senha atual.', 'Senha');
      return;
    }
    const hashAtual = senhaEdicaoLegacy
      ? await gerarHashSHA256(senhaAtual)
      : await gerarHashPBKDF2(senhaAtual, senhaEdicaoSalt, senhaEdicaoIterations);
    if (hashAtual !== senhaEdicaoHash) {
      await showMessage('Senha atual incorreta.', 'Senha');
      return;
    }
  }

  const novoSalt = gerarSaltBase64();
  const novoHash = await gerarHashPBKDF2(novaSenha, novoSalt, PBKDF2_ITERATIONS);
  await chrome.storage.local.set({
    editPasswordHash: novoHash,
    editPasswordSalt: novoSalt,
    editPasswordIterations: PBKDF2_ITERATIONS
  });
  senhaEdicaoHash = novoHash;
  senhaEdicaoSalt = novoSalt;
  senhaEdicaoIterations = PBKDF2_ITERATIONS;
  senhaEdicaoLegacy = false;
  senhaPadraoAtiva = novaSenha === 'admin';
  fecharPasswordModal();
  await showMessage('Senha atualizada.', 'Senha');
}

function abrirLoginPasswordModal() {
  if (!loginPasswordModal) {
    return;
  }
  const temSenha = Boolean(loginPasswordHash && loginPasswordSalt);
  if (loginPasswordCurrentField) {
    loginPasswordCurrentField.classList.toggle('hidden', !temSenha);
  }
  if (loginPasswordClose) {
    loginPasswordClose.classList.toggle('hidden', loginPasswordForceChange);
  }
  if (loginPasswordCurrent) {
    loginPasswordCurrent.value = '';
  }
  if (loginPasswordNew) {
    loginPasswordNew.value = '';
  }
  if (loginPasswordConfirmNew) {
    loginPasswordConfirmNew.value = '';
  }
  loginPasswordModal.classList.add('open');
  loginPasswordModal.setAttribute('aria-hidden', 'false');
}

function fecharLoginPasswordModal() {
  if (!loginPasswordModal) {
    return;
  }
  if (loginPasswordForceChange) {
    showMessage('Defina uma nova senha para continuar.', 'Senha de login');
    return;
  }
  loginPasswordModal.classList.remove('open');
  loginPasswordModal.setAttribute('aria-hidden', 'true');
}

async function salvarSenhaLogin() {
  if (!loginPasswordNew || !loginPasswordConfirmNew) {
    return;
  }
  const novaSenha = loginPasswordNew.value;
  const confirmar = loginPasswordConfirmNew.value;

  if (!novaSenha) {
    await showMessage('Informe a nova senha.', 'Senha de login');
    return;
  }
  if (novaSenha !== confirmar) {
    await showMessage('As senhas nao conferem.', 'Senha de login');
    return;
  }

  const temSenha = Boolean(loginPasswordHash && loginPasswordSalt);
  let senhaAtual = '';
  if (temSenha && loginPasswordCurrent) {
    senhaAtual = loginPasswordCurrent.value;
    if (!senhaAtual) {
      await showMessage('Informe a senha atual.', 'Senha de login');
      return;
    }
    const hashAtual = await gerarHashPBKDF2(senhaAtual, loginPasswordSalt, loginPasswordIterations);
    if (hashAtual !== loginPasswordHash) {
      await showMessage('Senha atual incorreta.', 'Senha de login');
      return;
    }
  }

  if (cryptoEnabled && usuarioProvider === 'local') {
    const chaveAntiga = temSenha ? await derivarChaveCripto(senhaAtual) : cryptoKey;
    const chaveNova = await derivarChaveCripto(novaSenha);
    await recriptografarUserDataParaUsuario(obterUsuarioChave(), chaveAntiga, chaveNova);
    cryptoKey = chaveNova;
    cryptoKeyMode = 'password';
    await salvarChaveCriptoSessao();
  }

  const novoSalt = gerarSaltBase64();
  const novoHash = await gerarHashPBKDF2(novaSenha, novoSalt, PBKDF2_ITERATIONS);
  await chrome.storage.local.set({
    loginPasswordHash: novoHash,
    loginPasswordSalt: novoSalt,
    loginPasswordIterations: PBKDF2_ITERATIONS,
    loginPasswordDefault: false
  });
  loginPasswordHash = novoHash;
  loginPasswordSalt = novoSalt;
  loginPasswordIterations = PBKDF2_ITERATIONS;
  loginPasswordDefault = false;
  loginPasswordForceChange = false;
  atualizarLoginModalCampos();
  fecharLoginPasswordModal();
  await showMessageSemCancelar('Senha de login atualizada.', 'Senha de login');
}

function atualizarAuthModalTexto(modo) {
  if (authTitle) {
    authTitle.textContent = modo === 'crypto' ? 'Senha de login' : 'Confirmar senha';
  }
  if (authConfirm) {
    authConfirm.textContent = modo === 'crypto' ? 'Desbloquear' : 'Liberar';
  }
}

function abrirAuthModal(modo = 'edit') {
  if (!authModal || !authPassword) {
    return;
  }
  authMode = modo;
  atualizarAuthModalTexto(modo);
  if (authError) {
    authError.textContent = '';
  }
  authPassword.value = '';
  authModal.classList.add('open');
  authModal.setAttribute('aria-hidden', 'false');
  authPassword.focus();
}

function fecharAuthModal(resultado) {
  if (!authModal) {
    return;
  }
  authModal.classList.remove('open');
  authModal.setAttribute('aria-hidden', 'true');
  if (authResolve) {
    authResolve(Boolean(resultado));
    authResolve = null;
  }
}

async function confirmarSenhaEdicao() {
  if (!authPassword) {
    return;
  }
  const senha = authPassword.value;
  if (!senha) {
    if (authError) {
      authError.textContent = 'Informe a senha.';
    }
    return;
  }
  const hash = senhaEdicaoLegacy
    ? await gerarHashSHA256(senha)
    : await gerarHashPBKDF2(senha, senhaEdicaoSalt, senhaEdicaoIterations);
  if (hash !== senhaEdicaoHash) {
    if (authError) {
      authError.textContent = 'Senha incorreta.';
    }
    return;
  }
  if (senhaEdicaoLegacy) {
    const novoSalt = gerarSaltBase64();
    const novoHash = await gerarHashPBKDF2(senha, novoSalt, PBKDF2_ITERATIONS);
    await chrome.storage.local.set({
      editPasswordHash: novoHash,
      editPasswordSalt: novoSalt,
      editPasswordIterations: PBKDF2_ITERATIONS
    });
    senhaEdicaoHash = novoHash;
    senhaEdicaoSalt = novoSalt;
    senhaEdicaoIterations = PBKDF2_ITERATIONS;
    senhaEdicaoLegacy = false;
    senhaPadraoAtiva = senha === 'admin';
  }
  fecharAuthModal(true);
}

async function solicitarSenhaEdicao() {
  if (!senhaEdicaoHash) {
    return true;
  }
  return new Promise(resolve => {
    authResolve = resolve;
    abrirAuthModal('edit');
  });
}

async function confirmarSenhaCriptografia() {
  if (!authPassword) {
    return;
  }
  const senha = authPassword.value;
  if (!senha) {
    if (authError) {
      authError.textContent = 'Informe a senha.';
    }
    return;
  }
  if (!loginPasswordHash || !loginPasswordSalt) {
    if (authError) {
      authError.textContent = 'Senha de login não configurada.';
    }
    return;
  }
  const hash = await gerarHashPBKDF2(senha, loginPasswordSalt, loginPasswordIterations);
  if (hash !== loginPasswordHash) {
    if (authError) {
      authError.textContent = 'Senha incorreta.';
    }
    return;
  }
  cryptoKey = await derivarChaveCripto(senha);
  cryptoKeyMode = 'password';
  await salvarChaveCriptoSessao();
  fecharAuthModal(true);
}

async function confirmarSenhaAuth() {
  if (authMode === 'crypto') {
    await confirmarSenhaCriptografia();
    return;
  }
  await confirmarSenhaEdicao();
}

async function solicitarSenhaCriptografia() {
  if (!cryptoEnabled) {
    return true;
  }
  if (cryptoKey) {
    return true;
  }
  if (!loginPasswordHash || !loginPasswordSalt) {
    await showMessage('Defina uma senha de login para desbloquear os dados.', 'Criptografia');
    return false;
  }
  return new Promise(resolve => {
    authResolve = resolve;
    abrirAuthModal('crypto');
  });
}

function abrirMessageModal(titulo, texto, confirmacao, options = {}) {
  if (!messageModal || !messageOk || !messageText || !messageTitle || !messageCancel) {
    return Promise.resolve(!confirmacao);
  }
  if (messageOpen) {
    return Promise.resolve(false);
  }
  messageAutoClose = Boolean(options.autoClose);
  messageHideActions = Boolean(options.hideActions);
  messageHideClose = Boolean(options.hideClose);
  messageOpen = true;
  messageMode = confirmacao ? 'confirm' : 'alert';
  messageTitle.textContent = titulo || (confirmacao ? 'Confirmar' : 'Mensagem');
  messageText.textContent = texto || '';
  messageCancel.classList.toggle('hidden', !confirmacao);
  messageCancel.toggleAttribute('hidden', !confirmacao);
  if (messageActions) {
    messageActions.classList.toggle('hidden', messageHideActions);
    messageActions.style.display = messageHideActions ? 'none' : '';
  }
  if (messageHideActions) {
    messageOk.classList.add('hidden');
    messageCancel.classList.add('hidden');
    messageOk.style.display = 'none';
    messageCancel.style.display = 'none';
  } else {
    messageOk.classList.remove('hidden');
    messageOk.style.display = '';
  }
  if (messageClose) {
    messageClose.classList.toggle('hidden', messageHideClose);
    messageClose.style.display = messageHideClose ? 'none' : '';
  }
  messageOk.textContent = confirmacao ? 'OK' : 'Fechar';
  messageModal.classList.add('open');
  messageModal.setAttribute('aria-hidden', 'false');
  if (messageAutoCloseTimer) {
    clearTimeout(messageAutoCloseTimer);
    messageAutoCloseTimer = null;
  }
  if (messageAutoClose) {
    messageAutoCloseTimer = setTimeout(() => {
      fecharMessageModal(true);
    }, 1400);
  }
  return new Promise(resolve => {
    messageResolve = resolve;
  });
}

function fecharMessageModal(resultado) {
  if (!messageModal) {
    return;
  }
  messageModal.classList.remove('open');
  messageModal.setAttribute('aria-hidden', 'true');
  delete messageModal.dataset.mode;
  messageOpen = false;
  if (messageAutoCloseTimer) {
    clearTimeout(messageAutoCloseTimer);
    messageAutoCloseTimer = null;
  }
  if (messageActions) {
    messageActions.classList.remove('hidden');
    messageActions.style.display = '';
  }
  if (messageClose) {
    messageClose.classList.remove('hidden');
    messageClose.style.display = '';
  }
  if (messageOk) {
    messageOk.classList.remove('hidden');
    messageOk.style.display = '';
  }
  if (messageCancel) {
    messageCancel.classList.remove('hidden');
    messageCancel.style.display = '';
  }
  if (messageResolve) {
    const res = messageMode === 'confirm' ? Boolean(resultado) : true;
    messageResolve(res);
    messageResolve = null;
  }
}

function showMessage(texto, titulo) {
  return abrirMessageModal(titulo || 'Mensagem', texto, false);
}

function showConfirm(texto, titulo) {
  return abrirMessageModal(titulo || 'Confirmar', texto, true);
}

function showMessageSemCancelar(texto, titulo) {
  if (!messageModal) {
    return Promise.resolve(true);
  }
  messageModal.dataset.mode = 'toast';
  return abrirMessageModal(titulo || 'Mensagem', texto, false, {
    autoClose: true,
    hideActions: true,
    hideClose: true
  });
}

function setLoginError(message, { persist = false } = {}) {
  if (persist) {
    pendingLoginErrorMessage = message || '';
  }
  if (!loginError) {
    return;
  }
  if (!message) {
    loginError.textContent = '';
    loginError.classList.add('hidden');
    return;
  }
  loginError.textContent = message;
  loginError.classList.remove('hidden');
}

function clearLoginError({ clearPersisted = true } = {}) {
  if (clearPersisted) {
    pendingLoginErrorMessage = '';
  }
  if (!loginError) {
    return;
  }
  loginError.textContent = '';
  loginError.classList.add('hidden');
}


function notificarSeSegundoPlano(titulo, texto) {
  if (!chrome?.runtime?.sendMessage || !document) {
    return;
  }
  const ativo = !document.hidden && (!document.hasFocus || document.hasFocus());
  if (ativo) {
    return;
  }
  chrome.runtime.sendMessage({
    type: 'show_notification',
    title: titulo || 'Aviso',
    message: texto || ''
  });
}
async function carregarSenhaLogin() {
  const data = await chrome.storage.local.get([
    'loginPasswordHash',
    'loginPasswordSalt',
    'loginPasswordIterations',
    'loginPasswordDefault'
  ]);
  loginPasswordHash = data.loginPasswordHash || null;
  loginPasswordSalt = data.loginPasswordSalt || null;
  loginPasswordIterations = data.loginPasswordIterations || PBKDF2_ITERATIONS;
  loginPasswordDefault = Boolean(data.loginPasswordDefault);
  if (loginPasswordHash && !loginPasswordSalt) {
    loginPasswordHash = null;
    loginPasswordSalt = null;
  }
}

function atualizarLoginModalCampos() {
  const temSenha = Boolean(loginPasswordHash && loginPasswordSalt);
  if (loginTitle) {
    loginTitle.textContent = 'Entrar';
  }
  clearLoginError({ clearPersisted: false });
  if (loginModeHint) {
    if (loginPasswordDefault && temSenha) {
      loginModeHint.textContent = `Primeiro acesso: usuario ${LOGIN_DEFAULT_USER} e senha ${LOGIN_DEFAULT_PASSWORD}.`;
      loginModeHint.classList.remove('hidden');
    } else {
      loginModeHint.classList.add('hidden');
      loginModeHint.textContent = '';
    }
  }
  if (pendingLoginErrorMessage) {
    setLoginError(pendingLoginErrorMessage, { persist: true });
  }
  if (loginSubmit) {
    loginSubmit.classList.toggle('hidden', !temSenha);
  }
  if (loginPasswordLabel) {
    loginPasswordLabel.textContent = 'Senha';
  }
}

async function prepararCriptografiaUsuarioAtual({ senha, allowPrompt = true } = {}) {
  if (!cryptoEnabled) {
    return true;
  }
  const userKey = obterUsuarioChave();
  const isGoogle = usuarioProvider === 'google';

  if (isGoogle) {
    cryptoKey = await obterOuCriarChaveDispositivo(userKey);
    cryptoKeyMode = 'device';
    return Boolean(cryptoKey);
  }

  if (!cryptoSalt) {
    await carregarCriptografiaConfig();
  }
  const modoAnterior = cryptoKeyMode;
  cryptoKeyMode = 'password';
  if (cryptoKey && modoAnterior !== 'password') {
    cryptoKey = null;
  }
  if (cryptoKey) {
    return true;
  }
  const carregouSessao = await carregarChaveCriptoSessao();
  if (carregouSessao) {
    return true;
  }
  if (senha) {
    cryptoKey = await derivarChaveCripto(senha);
    await salvarChaveCriptoSessao();
    return true;
  }
  if (!allowPrompt) {
    return false;
  }
  const ok = await solicitarSenhaCriptografia();
  return ok;
}

function oauthGoogleConfigurado() {
  if (!chrome?.runtime?.getManifest) {
    return false;
  }
  const manifest = chrome.runtime.getManifest();
  const clientId = manifest?.oauth2?.client_id || '';
  return Boolean(clientId) && !clientId.includes('SEU_CLIENT_ID');
}

function isExpectedGoogleAuthError(message) {
  if (!message) {
    return false;
  }
  const texto = String(message).toLowerCase();
  return (
    texto.includes('invalid_request') ||
    texto.includes('not supported') ||
    texto.includes('oauth2 not granted') ||
    texto.includes('did not approve access') ||
    texto.includes('user did not approve access')
  );
}

function isBraveBrowser() {
  try {
    if (typeof navigator === 'undefined') {
      return false;
    }
    if (navigator.brave) {
      return true;
    }
    const ua = navigator.userAgent || '';
    return ua.includes('Brave');
  } catch (error) {
    return false;
  }
}

function obterEscoposGoogleOAuth() {
  if (!chrome?.runtime?.getManifest) {
    return [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile'
    ];
  }
  const manifest = chrome.runtime.getManifest();
  const scopes = manifest?.oauth2?.scopes;
  if (Array.isArray(scopes) && scopes.length) {
    return scopes;
  }
  return [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile'
  ];
}

function obterGoogleWebClientId() {
  return GOOGLE_WEB_CLIENT_ID;
}

function parseOAuthFragment(url) {
  const hashIndex = url.indexOf('#');
  if (hashIndex === -1) {
    return {};
  }
  const fragment = url.slice(hashIndex + 1);
  const params = new URLSearchParams(fragment);
  return Object.fromEntries(params.entries());
}

async function obterTokenWebCache() {
  if (!chrome?.storage?.local?.get) {
    return null;
  }
  const data = await chrome.storage.local.get(GOOGLE_WEB_TOKEN_KEY);
  const payload = data[GOOGLE_WEB_TOKEN_KEY];
  if (!payload?.token) {
    return null;
  }
  if (payload.expiresAt && Date.now() > payload.expiresAt - 60000) {
    await chrome.storage.local.remove(GOOGLE_WEB_TOKEN_KEY);
    return null;
  }
  return payload.token;
}

async function salvarTokenWebCache(token, expiresInSec) {
  if (!chrome?.storage?.local?.set) {
    return;
  }
  const expiresAt = Number.isFinite(expiresInSec) && expiresInSec > 0
    ? Date.now() + expiresInSec * 1000
    : null;
  await chrome.storage.local.set({
    [GOOGLE_WEB_TOKEN_KEY]: {
      token,
      expiresAt
    }
  });
}

async function limparTokenWebCache() {
  if (!chrome?.storage?.local?.remove) {
    return;
  }
  await chrome.storage.local.remove(GOOGLE_WEB_TOKEN_KEY);
}

function obterAuthToken(interactive) {
  return new Promise((resolve, reject) => {
    if (!chrome?.identity?.getAuthToken) {
      reject(new Error('API de identidade indisponivel.'));
      return;
    }
    chrome.identity.getAuthToken({ interactive }, token => {
      if (chrome.runtime.lastError || !token) {
        const detalhe = chrome.runtime.lastError?.message || 'Falha ao obter token.';
        const erro = new Error(detalhe);
        if (!isExpectedGoogleAuthError(detalhe)) {
          console.error('Google OAuth getAuthToken falhou:', detalhe);
        }
        reject(erro);
        return;
      }
      resolve(token);
    });
  });
}

function obterAuthTokenWebFlow() {
  return new Promise((resolve, reject) => {
    if (!chrome?.identity?.launchWebAuthFlow) {
      reject(new Error('API de autenticacao web indisponivel.'));
      return;
    }
    const clientId = obterGoogleWebClientId();
    if (!clientId) {
      reject(new Error('Client ID web nao configurado.'));
      return;
    }
    const redirectUri = chrome.identity.getRedirectURL();
    const scopes = obterEscoposGoogleOAuth().join(' ');
    const authUrl =
      'https://accounts.google.com/o/oauth2/v2/auth' +
      `?client_id=${encodeURIComponent(clientId)}` +
      '&response_type=token' +
      `&redirect_uri=${encodeURIComponent(redirectUri)}` +
      `&scope=${encodeURIComponent(scopes)}` +
      '&prompt=consent' +
      '&include_granted_scopes=true';

    chrome.identity.launchWebAuthFlow({ url: authUrl, interactive: true }, responseUrl => {
      if (chrome.runtime.lastError || !responseUrl) {
        const detalhe = chrome.runtime.lastError?.message || 'Falha ao autenticar.';
        reject(new Error(detalhe));
        return;
      }
      const params = parseOAuthFragment(responseUrl);
      const token = params.access_token;
      if (!token) {
        reject(new Error('Token nao encontrado na resposta.'));
        return;
      }
      const expiresIn = Number(params.expires_in || 0);
      void salvarTokenWebCache(token, expiresIn);
      resolve(token);
    });
  });
}

async function obterAuthTokenComFallback(interactive) {
  if (!interactive) {
    const cached = await obterTokenWebCache();
    if (cached) {
      return { token: cached, source: 'web_cache' };
    }
  }

  if (interactive && isBraveBrowser()) {
    const token = await obterAuthTokenWebFlow();
    return { token, source: 'web' };
  }

  try {
    const token = await obterAuthToken(interactive);
    return { token, source: 'identity' };
  } catch (error) {
    const message = (error?.message || '').toLowerCase();
    const podeFallback =
      message.includes('invalid_request') ||
      message.includes('not supported') ||
      message.includes('oauth2 not granted') ||
      message.includes('did not approve access');
    if (interactive && podeFallback) {
      const token = await obterAuthTokenWebFlow();
      return { token, source: 'web' };
    }
    throw error;
  }
}

function removerTokenCache(token) {
  return new Promise(resolve => {
    if (!chrome?.identity?.removeCachedAuthToken) {
      resolve();
      return;
    }
    chrome.identity.removeCachedAuthToken({ token }, () => resolve());
  });
}

async function obterPerfilGoogle(token) {
  const endpoints = [
    'https://www.googleapis.com/oauth2/v3/userinfo',
    'https://www.googleapis.com/oauth2/v2/userinfo'
  ];
  let ultimoErro = null;

  for (const endpoint of endpoints) {
    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.ok) {
      return response.json();
    }
    ultimoErro = new Error(`Falha ao buscar perfil do Google (${response.status}).`);
    if (response.status >= 500 || response.status === 401 || response.status === 403) {
      continue;
    }
    break;
  }

  throw ultimoErro || new Error('Falha ao buscar perfil do Google.');
}

const LOGIN_MESSAGE_STORAGE_KEY = 'loginMessagePending';

async function loginComGoogle({ interactive, autoLogin, clearPending } = {}) {
  if (!oauthGoogleConfigurado()) {
    if (interactive) {
      await showMessage('OAuth do Google nao configurado. Defina o client_id no manifest.json.', 'Login');
    }
    void enviarEventoMonitoramento('login_failure', {
      reason: 'google_oauth_not_configured'
    });
    return { ok: false, reason: 'google_oauth_not_configured' };
  }

  let token = null;
  let tokenSource = 'identity';
  try {
    const resultado = await obterAuthTokenComFallback(Boolean(interactive));
    token = resultado.token;
    tokenSource = resultado.source || 'identity';
  } catch (error) {
    if (interactive) {
      const detalhe = error?.message ? ` (${error.message})` : '';
      await showMessage(`Nao foi possivel autenticar com o Google.${detalhe}`, 'Login');
    }
    if (chrome?.storage?.local?.set) {
      chrome.storage.local.set({
        googleAuthLastError: {
          message: error?.message || 'Falha ao obter token.',
          at: new Date().toISOString()
        }
      });
    }
    if (!isExpectedGoogleAuthError(error?.message)) {
      console.error('Google OAuth falhou:', error);
    }
    void enviarEventoMonitoramento('login_failure', {
      reason: 'google_token_failed',
      error: error?.message || ''
    });
    return { ok: false, reason: 'google_token_failed' };
  }

  let perfil = null;
  try {
    perfil = await obterPerfilGoogle(token);
  } catch (error) {
    if (token) {
      if (tokenSource === 'identity') {
        await removerTokenCache(token);
      } else {
        await limparTokenWebCache();
      }
    }
    if (interactive) {
      try {
        const novoResultado = await obterAuthTokenComFallback(true);
        const novoToken = novoResultado.token;
        tokenSource = novoResultado.source || tokenSource;
        perfil = await obterPerfilGoogle(novoToken);
        token = novoToken;
      } catch (retryError) {
        await showMessage('Nao foi possivel obter seus dados do Google.', 'Login');
        void enviarEventoMonitoramento('login_failure', {
          reason: 'google_profile_failed'
        });
        return { ok: false, reason: 'google_profile_failed' };
      }
    } else {
      void enviarEventoMonitoramento('login_failure', {
        reason: 'google_profile_failed'
      });
      return { ok: false, reason: 'google_profile_failed' };
    }
  }

  const userKey = obterUsuarioChavePorProfile({
    provider: 'google',
    email: perfil.email || '',
    name: perfil.name || perfil.given_name || ''
  });
  const sessaoOk = await validarSessaoUnicaServidor({
    key: userKey,
    name: perfil.name || perfil.given_name || '',
    email: perfil.email || '',
    provider: 'google'
  });
  if (!sessaoOk.ok) {
    let mensagem = 'Servidor indisponível para validar sessão. Tente novamente.';
    if (sessaoOk.reason === 'session_conflict') {
      mensagem = 'Este usuário já está logado em outro navegador/dispositivo.';
      if (sessaoOk.active?.deviceName) {
        mensagem += ` Dispositivo: ${sessaoOk.active.deviceName}.`;
      }
      if (sessaoOk.active?.lastEventAt) {
        mensagem += ` Última atividade: ${formatarDataHoraCurta(sessaoOk.active.lastEventAt)}.`;
      }
      mensagem += ' Faça logout lá para continuar.';
    }
    if (interactive) {
      if (loginModal && !loginModal.classList.contains('open')) {
        abrirLoginModal();
      }
      setLoginError(mensagem, { persist: true });
      const deveGuardar =
        !document ||
        document.hidden ||
        (document.hasFocus ? !document.hasFocus() : false);
      if (deveGuardar && chrome?.storage?.local?.set) {
        chrome.storage.local.set({
          [LOGIN_MESSAGE_STORAGE_KEY]: {
            title: 'Login',
            message: mensagem,
            at: new Date().toISOString()
          }
        });
      }
      notificarSeSegundoPlano('Login', mensagem);
    }
    void enviarEventoMonitoramento('login_failure', {
      reason: sessaoOk.reason || 'session_conflict',
      provider: 'google',
      username: perfil.email || perfil.name || ''
    });
    return { ok: false, reason: sessaoOk.reason || 'session_conflict' };
  }

  usuarioProvider = 'google';
  usuarioNome = perfil.name || perfil.given_name || perfil.email || '';
  usuarioFoto = perfil.picture || '';
  usuarioEmail = perfil.email || '';
  usuarioAutoLogin = typeof autoLogin === 'boolean' ? autoLogin : Boolean(loginAuto?.checked);
  usuarioLogado = true;

  const cryptoOk = await prepararCriptografiaUsuarioAtual();
  if (!cryptoOk) {
    usuarioLogado = false;
    usuarioAutoLogin = false;
    await chrome.storage.local.set({
      userProfile: {
        name: usuarioNome,
        autoLogin: false,
        loggedIn: false,
        provider: usuarioProvider,
        email: usuarioEmail,
        picture: usuarioFoto
      }
    });
    abrirLoginModal();
    void enviarEventoMonitoramento('login_failure', {
      reason: 'crypto_unlock_failed'
    });
    return { ok: false, reason: 'crypto_unlock_failed' };
  }

  const storagePayload = {
    userProfile: {
      name: usuarioNome,
      autoLogin: usuarioAutoLogin,
      loggedIn: usuarioLogado,
      provider: usuarioProvider,
      email: usuarioEmail,
      picture: usuarioFoto
    }
  };
  if (clearPending) {
    storagePayload.googleAuthPending = false;
  }
  await chrome.storage.local.set(storagePayload);

  atualizarUserDisplay();
  await recarregarDadosUsuarioAtual();
  fecharLoginModal();
  if (interactive) {
    void registrarLocalizacaoLogin();
  }
  await salvarMonitorEstadoAtual();
  void enviarEventoMonitoramento('login_success', { source: interactive ? 'manual' : 'auto_login' });
  return { ok: true };
}

async function iniciarLoginGoogle() {
  await chrome.storage.local.set({ googleAuthPending: true });
  const result = await loginComGoogle({ interactive: true, clearPending: true });
  if (!result.ok) {
    const manterPending = result.reason !== 'session_conflict';
    await chrome.storage.local.set({ googleAuthPending: manterPending });
  }
}

async function logoutGoogle() {
  try {
    const data = await chrome.storage.local.get(GOOGLE_WEB_TOKEN_KEY);
    const webToken = data[GOOGLE_WEB_TOKEN_KEY]?.token;
    if (webToken) {
      await limparTokenWebCache();
      fetch(`https://oauth2.googleapis.com/revoke?token=${webToken}`, { method: 'POST' }).catch(() => {});
    }
  } catch (error) {
    // Ignorar falhas de logout do Google para nao quebrar o fluxo local.
  }

  if (!chrome?.identity?.getAuthToken) {
    return;
  }
  try {
    const token = await obterAuthToken(false);
    await removerTokenCache(token);
    fetch(`https://oauth2.googleapis.com/revoke?token=${token}`, { method: 'POST' }).catch(() => {});
  } catch (error) {
    // Ignorar falhas de logout do Google para nao quebrar o fluxo local.
  }
}

async function carregarUsuario() {
  await carregarSenhaLogin();
  await carregarCriptografiaConfig();
  await carregarChaveCriptoSessao();
  const data = await chrome.storage.local.get(['userProfile', 'googleAuthPending', LOGIN_MESSAGE_STORAGE_KEY]);
  if (data[LOGIN_MESSAGE_STORAGE_KEY]?.message) {
    const aviso = data[LOGIN_MESSAGE_STORAGE_KEY];
    await chrome.storage.local.remove(LOGIN_MESSAGE_STORAGE_KEY);
    if (loginModal && !loginModal.classList.contains('open')) {
      abrirLoginModal();
    }
    setLoginError(aviso.message, { persist: true });
  }
  const googleAuthPending = Boolean(data.googleAuthPending);
  let profile = data.userProfile || null;

  if (!loginPasswordHash || !loginPasswordSalt) {
    const salt = gerarSaltBase64();
    const hash = await gerarHashPBKDF2(LOGIN_DEFAULT_PASSWORD, salt, PBKDF2_ITERATIONS);
    await chrome.storage.local.set({
      loginPasswordHash: hash,
      loginPasswordSalt: salt,
      loginPasswordIterations: PBKDF2_ITERATIONS,
      loginPasswordDefault: true
    });
    loginPasswordHash = hash;
    loginPasswordSalt = salt;
    loginPasswordIterations = PBKDF2_ITERATIONS;
    loginPasswordDefault = true;
  }

  if (!profile) {
    profile = {
      name: LOGIN_DEFAULT_USER,
      autoLogin: false,
      loggedIn: false,
      provider: 'local'
    };
    await chrome.storage.local.set({ userProfile: profile });
  }
  if (googleAuthPending) {
    const result = await loginComGoogle({ interactive: false, clearPending: true });
    if (result.ok) {
      return;
    }
  }

  usuarioProvider = profile.provider || 'local';
  usuarioNome = profile.name || '';
  usuarioEmail = profile.email || '';
  usuarioFoto = usuarioProvider === 'google' ? (profile.picture || '') : '';
  usuarioAutoLogin = Boolean(profile.autoLogin);
  usuarioLogado = Boolean(profile.loggedIn);

  if (usuarioProvider === 'google') {
    if (usuarioLogado) {
      const cryptoOk = await prepararCriptografiaUsuarioAtual();
      if (!cryptoOk) {
        usuarioLogado = false;
        usuarioAutoLogin = false;
        await chrome.storage.local.set({
          userProfile: {
            name: usuarioNome,
            autoLogin: false,
            loggedIn: false,
            provider: usuarioProvider,
            email: usuarioEmail,
            picture: usuarioFoto
          }
        });
        atualizarUserDisplay();
        abrirLoginModal();
        return;
      }
      atualizarUserDisplay();
      await recarregarDadosUsuarioAtual();
      fecharLoginModal();
      await salvarMonitorEstadoAtual();
      void enviarEventoMonitoramento('session_resume', { source: 'auto_login' });
      return;
    }
    if (googleAuthPending) {
      const result = await loginComGoogle({ interactive: false, autoLogin: usuarioAutoLogin, clearPending: true });
      if (result.ok) {
        return;
      }
    }
    if (usuarioAutoLogin) {
      const result = await loginComGoogle({ interactive: false, autoLogin: usuarioAutoLogin });
      if (result.ok) {
        return;
      }
    }
    atualizarUserDisplay();
    await recarregarDadosUsuarioAtual();
    abrirLoginModal();
    return;
  }

  if (usuarioAutoLogin) {
    const userKey = obterUsuarioChavePorProfile({ provider: 'local', name: usuarioNome, email: '' });
    const sessaoOk = await validarSessaoUnicaServidor({
      key: userKey,
      name: usuarioNome || '',
      email: '',
      provider: 'local'
    });
    if (!sessaoOk.ok) {
      let mensagem = 'Servidor indisponível para validar sessão. Tente novamente.';
      if (sessaoOk.reason === 'session_conflict') {
        mensagem = 'Este usuário já está logado em outro navegador/dispositivo.';
        if (sessaoOk.active?.deviceName) {
          mensagem += ` Dispositivo: ${sessaoOk.active.deviceName}.`;
        }
        if (sessaoOk.active?.lastEventAt) {
          mensagem += ` Última atividade: ${formatarDataHoraCurta(sessaoOk.active.lastEventAt)}.`;
        }
        mensagem += ' Faça logout lá para continuar.';
      }
      if (loginModal && !loginModal.classList.contains('open')) {
        abrirLoginModal();
      }
      setLoginError(mensagem, { persist: true });
      const deveGuardar =
        !document ||
        document.hidden ||
        (document.hasFocus ? !document.hasFocus() : false);
      if (deveGuardar && chrome?.storage?.local?.set) {
        chrome.storage.local.set({
          [LOGIN_MESSAGE_STORAGE_KEY]: {
            title: 'Login',
            message: mensagem,
            at: new Date().toISOString()
          }
        });
      }
      notificarSeSegundoPlano('Login', mensagem);
      usuarioAutoLogin = false;
      usuarioLogado = false;
      await chrome.storage.local.set({
        userProfile: {
          name: usuarioNome,
          autoLogin: false,
          loggedIn: false,
          provider: usuarioProvider
        }
      });
    }
  }

  usuarioLogado = usuarioAutoLogin;

  await chrome.storage.local.set({
    userProfile: {
      name: usuarioNome,
      autoLogin: usuarioAutoLogin,
      loggedIn: usuarioLogado,
      provider: usuarioProvider
    },
    googleAuthPending: false
  });

  atualizarUserDisplay();
  if (usuarioLogado) {
    const cryptoOk = await prepararCriptografiaUsuarioAtual();
    if (!cryptoOk) {
      usuarioLogado = false;
      usuarioAutoLogin = false;
      await chrome.storage.local.set({
        userProfile: {
          name: usuarioNome,
          autoLogin: false,
          loggedIn: false,
          provider: usuarioProvider
        }
      });
    }
  }
  await recarregarDadosUsuarioAtual();
  if (usuarioLogado) {
    fecharLoginModal();
    await salvarMonitorEstadoAtual();
    void enviarEventoMonitoramento('session_resume', { source: 'auto_login' });
  } else {
    abrirLoginModal();
  }
}

function atualizarUserDisplay() {
  if (!userDisplay) {
    return;
  }
  const sufixo = usuarioProvider === 'google' ? ' (Google)' : '';
  userDisplay.textContent = usuarioNome ? `Usuário: ${usuarioNome}${sufixo}` : '';
  if (userAvatar) {
    const mostrar = Boolean(usuarioLogado && usuarioFoto);
    userAvatar.classList.toggle('hidden', !mostrar);
    if (mostrar) {
      userAvatar.src = usuarioFoto;
    } else {
      userAvatar.removeAttribute('src');
    }
  }
  atualizarLocalizacaoTopo();
  if (usuarioLogado && !isLocalizacaoExibivel(ultimaLocalizacao)) {
    void atualizarLocalizacaoManual({ silent: true });
  }
}

async function recarregarDadosUsuarioAtual() {
  await carregarJornadaConfig();
  await carregarFeriados();
  await carregarLocalizacao();
  await loadData();
}

function abrirLoginModal() {
  if (!loginModal) {
    return;
  }
  if (loginName) {
    loginName.value = '';
  }
  if (loginPassword) {
    loginPassword.value = '';
  }
  if (loginAuto) {
    loginAuto.checked = usuarioAutoLogin;
  }
  clearLoginError();
  atualizarLoginModalCampos();
  if (loginGoogleBtn) {
    loginGoogleBtn.disabled = !oauthGoogleConfigurado();
  }
  loginModal.classList.add('open');
  loginModal.setAttribute('aria-hidden', 'false');
}

function fecharLoginModal() {
  if (!loginModal) {
    return;
  }
  clearLoginError({ clearPersisted: true });
  loginModal.classList.remove('open');
  loginModal.setAttribute('aria-hidden', 'true');
}

async function efetuarLogin() {
  if (!loginName) {
    return;
  }
  const nome = loginName.value.trim();
  if (!nome) {
    await showMessage('Informe o nome do usuário.', 'Login');
    return;
  }
  const nomeEsperado = (usuarioProvider === 'local' ? (usuarioNome || LOGIN_DEFAULT_USER) : LOGIN_DEFAULT_USER).trim();
  if (nome !== nomeEsperado) {
    await showMessage('Usuário não encontrado.', 'Login');
    void enviarEventoMonitoramento('login_failure', {
      reason: 'user_not_found',
      username: nome
    });
    return;
  }
  if (!loginPassword) {
    return;
  }

  if (!loginPasswordHash || !loginPasswordSalt) {
    await showMessage('Cadastre o usuário primeiro.', 'Login');
    void enviarEventoMonitoramento('login_failure', {
      reason: 'user_not_registered',
      username: nome
    });
    return;
  }

  const senha = loginPassword.value;
  if (!senha) {
    await showMessage('Informe a senha.', 'Login');
    return;
  }
  const iterations = Number(loginPasswordIterations) || PBKDF2_ITERATIONS;
  loginPasswordIterations = iterations;
  let hash = '';
  try {
    hash = await gerarHashPBKDF2(senha, loginPasswordSalt, iterations);
  } catch (error) {
    await showMessage('Nao foi possivel validar a senha.', 'Login');
    void enviarEventoMonitoramento('login_failure', {
      reason: 'password_check_failed',
      username: nome
    });
    return;
  }
  if (hash !== loginPasswordHash) {
    if (loginPasswordDefault && senha === LOGIN_DEFAULT_PASSWORD) {
      const novoSalt = gerarSaltBase64();
      const novoHash = await gerarHashPBKDF2(LOGIN_DEFAULT_PASSWORD, novoSalt, PBKDF2_ITERATIONS);
      await chrome.storage.local.set({
        loginPasswordHash: novoHash,
        loginPasswordSalt: novoSalt,
        loginPasswordIterations: PBKDF2_ITERATIONS,
        loginPasswordDefault: true
      });
      loginPasswordHash = novoHash;
      loginPasswordSalt = novoSalt;
      loginPasswordIterations = PBKDF2_ITERATIONS;
    } else {
      await showMessage('Senha incorreta.', 'Login');
      void enviarEventoMonitoramento('login_failure', {
        reason: 'invalid_password',
        username: nome
      });
      return;
    }
  }
  const cryptoOk = await prepararCriptografiaUsuarioAtual({ senha, allowPrompt: false });
  if (!cryptoOk) {
    await showMessage('Nao foi possivel desbloquear os dados.', 'Criptografia');
    void enviarEventoMonitoramento('login_failure', {
      reason: 'crypto_unlock_failed',
      username: nome
    });
    return;
  }
  const userKey = obterUsuarioChavePorProfile({ provider: 'local', name: nome, email: '' });
  const sessaoOk = await validarSessaoUnicaServidor({
    key: userKey,
    name: nome,
    email: '',
    provider: 'local'
  });
  if (!sessaoOk.ok) {
    let mensagem = 'Servidor indisponível para validar sessão. Tente novamente.';
    if (sessaoOk.reason === 'session_conflict') {
      mensagem = 'Este usuário já está logado em outro navegador/dispositivo.';
      if (sessaoOk.active?.deviceName) {
        mensagem += ` Dispositivo: ${sessaoOk.active.deviceName}.`;
      }
      if (sessaoOk.active?.lastEventAt) {
        mensagem += ` Última atividade: ${formatarDataHoraCurta(sessaoOk.active.lastEventAt)}.`;
      }
      mensagem += ' Faça logout lá para continuar.';
    }
    if (loginModal && !loginModal.classList.contains('open')) {
      abrirLoginModal();
    }
    setLoginError(mensagem, { persist: true });
    const deveGuardar =
      !document ||
      document.hidden ||
      (document.hasFocus ? !document.hasFocus() : false);
    if (deveGuardar && chrome?.storage?.local?.set) {
      chrome.storage.local.set({
        [LOGIN_MESSAGE_STORAGE_KEY]: {
          title: 'Login',
          message: mensagem,
          at: new Date().toISOString()
        }
      });
    }
    notificarSeSegundoPlano('Login', mensagem);
    void enviarEventoMonitoramento('login_failure', {
      reason: sessaoOk.reason || 'session_conflict',
      username: nome
    });
    return;
  }
  usuarioNome = nome;
  usuarioProvider = 'local';
  usuarioFoto = '';
  usuarioEmail = '';
  usuarioAutoLogin = Boolean(loginAuto?.checked);
  usuarioLogado = true;
  await chrome.storage.local.set({
    userProfile: {
      name: usuarioNome,
      autoLogin: usuarioAutoLogin,
      loggedIn: usuarioLogado,
      provider: usuarioProvider,
      email: ''
    }
  });
  atualizarUserDisplay();
  await recarregarDadosUsuarioAtual();
  fecharMessageModal(true);
  fecharLoginModal();
  void registrarLocalizacaoLogin();
  await salvarMonitorEstadoAtual();
  void enviarEventoMonitoramento('login_success', { source: 'manual' });
  if (loginPasswordDefault) {
    loginPasswordForceChange = true;
    abrirLoginPasswordModal();
    return;
  }
  await showMessageSemCancelar('Login realizado com sucesso.', 'Login');
}

async function efetuarLogout() {
  if (usuarioProvider === 'google') {
    await logoutGoogle();
  }
  void enviarEventoMonitoramento('logout', { source: 'menu' });
  usuarioLogado = false;
  usuarioAutoLogin = false;
  usuarioFoto = '';
  usuarioEmail = '';
  cryptoKey = null;
  cryptoKeyMode = 'password';
  await limparChaveCriptoSessao();
  loginPasswordForceChange = false;
  await chrome.storage.local.set({
    userProfile: {
      name: usuarioNome,
      autoLogin: usuarioAutoLogin,
      loggedIn: usuarioLogado,
      provider: usuarioProvider,
      email: usuarioProvider === 'google' ? usuarioEmail : ''
    }
  });
  atualizarUserDisplay();
  abrirLoginModal();
  await salvarMonitorEstadoAtual();
}

function abrirEditModal(modo, registro, index, dataKey) {
  if (!editModal || !editType || !editTime) {
    return;
  }
  editRegistroIndex = index;
  editRegistroData = dataKey;
  editRegistroSegundos = registro ? new Date(registro.timestamp).getSeconds() : 0;
  editRegistroModo = modo;

  const titulo = modo === 'add' ? 'Adicionar registro' : 'Editar registro';
  const editTitle = document.getElementById('editTitle');
  if (editTitle) {
    editTitle.textContent = titulo;
  }

  editType.value = registro?.tipo || 'entrada';
  if (registro?.timestamp) {
    editTime.value = formatarHoraParaInput(registro.timestamp);
  } else {
    editTime.value = '';
  }
  if (editReason) {
    editReason.value = '';
  }
  if (editConsent) {
    editConsent.checked = false;
  }

  editModal.classList.add('open');
  editModal.setAttribute('aria-hidden', 'false');
}

function fecharEditModal() {
  if (!editModal) {
    return;
  }
  editModal.classList.remove('open');
  editModal.setAttribute('aria-hidden', 'true');
  editRegistroIndex = null;
  editRegistroData = null;
  editRegistroSegundos = 0;
}

function abrirAuditModal() {
  if (!auditModal) {
    return;
  }
  auditModal.classList.add('open');
  auditModal.setAttribute('aria-hidden', 'false');
  carregarAuditLogs();
}

function fecharAuditModal() {
  if (!auditModal) {
    return;
  }
  auditModal.classList.remove('open');
  auditModal.setAttribute('aria-hidden', 'true');
}

async function carregarAuditLogs() {
  if (!auditList || !auditEmpty) {
    return;
  }
  const { dados } = await obterDadosUsuarioStorage();
  const auditLogs = normalizarArray(dados.auditLogs);
  if (auditLogs.length === 0) {
    auditList.innerHTML = '';
    auditEmpty.classList.remove('hidden');
    return;
  }
  auditEmpty.classList.add('hidden');
  const logsOrdenados = [...auditLogs].sort((a, b) => {
    return new Date(b.alteradoEm) - new Date(a.alteradoEm);
  });
  auditList.innerHTML = logsOrdenados.map(log => {
    const acaoTexto = log.acao === 'editar' ? 'Editado' : 'Adicionado';
    const antesResumo = resumoRegistroAuditoria(log.antes);
    const depoisResumo = resumoRegistroAuditoria(log.depois);
    const usuario = log.alteradoPor?.usuario || '';
    const provider = log.alteradoPor?.provider || '';
    const dataTexto = log.data ? formatarDataCurta(log.data) : '-';
    const dataHora = formatarDataHoraCurta(log.alteradoEm);
    const consentiu = log.consentimento ? 'Sim' : 'Não';
    const consentiuEm = formatarDataHoraCurta(log.consentimentoEm) || '-';
    return `
      <div class="audit-item">
        <div class="audit-header">
          <span class="audit-action">${acaoTexto}</span>
          <span class="audit-date">${dataTexto}</span>
        </div>
        <div class="audit-reason">${log.motivo || '-'}</div>
        <div class="audit-changes">
          <span>Antes: ${antesResumo || '-'}</span>
          <span>Depois: ${depoisResumo || '-'}</span>
        </div>
        <div class="audit-consent">Consentimento: ${consentiu} (${consentiuEm})</div>
        <div class="audit-meta">
          <span>${usuario}${provider ? ` (${provider})` : ''}</span>
          <span>${dataHora || '-'}</span>
        </div>
      </div>
    `;
  }).join('');
}

async function salvarEdicaoRegistro() {
  if (!editType || !editTime) {
    return;
  }
  const motivo = editReason?.value.trim() || '';
  const consentimento = Boolean(editConsent?.checked);
  const tipo = editType.value;
  const horaStr = editTime.value;
  if (!horaStr) {
    await showMessage('Informe o horario.', 'Registro');
    return;
  }
  if (!motivo) {
    await showMessage('Informe o motivo da alteracao.', 'Registro');
    return;
  }
  if (!consentimento) {
    await showMessage('Confirme o consentimento da alteracao.', 'Registro');
    return;
  }
  const dataKey = editRegistroData || new Date().toISOString().split('T')[0];
  const timestamp = construirTimestampParaData(dataKey, horaStr, editRegistroSegundos);
  if (!timestamp) {
    await showMessage('Horario invalido.', 'Registro');
    return;
  }

  const horaExibicao = new Date(timestamp).toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'
  });

  const { dados } = await obterDadosUsuarioStorage();
  const registros = normalizarObjeto(dados.registros);
  const periodos = normalizarObjeto(dados.periodos);
  const totaisDiarios = normalizarObjeto(dados.totaisDiarios);
  if (!registros[dataKey]) {
    registros[dataKey] = [];
  }

  const registroAnterior = (editRegistroIndex !== null && registros[dataKey][editRegistroIndex])
    ? { ...registros[dataKey][editRegistroIndex] }
    : null;

  let registroAtualizado = null;
  if (editRegistroIndex !== null && registros[dataKey][editRegistroIndex]) {
    registros[dataKey][editRegistroIndex] = {
      ...registros[dataKey][editRegistroIndex],
      tipo,
      timestamp,
      hora: horaExibicao
    };
    registroAtualizado = registros[dataKey][editRegistroIndex];
  } else {
    registros[dataKey].push({
      tipo,
      timestamp,
      hora: horaExibicao,
      usuario: usuarioNome || '',
      usuarioProvider: usuarioProvider || 'local',
      usuarioEmail: usuarioEmail || ''
    });
    registroAtualizado = registros[dataKey][registros[dataKey].length - 1];
  }

  registros[dataKey].sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));

  const auditLogs = normalizarArray(dados.auditLogs);
  auditLogs.push(criarLogAlteracao({
    acao: registroAnterior ? 'editar' : 'adicionar',
    dataKey,
    motivo,
    antes: registroAnterior,
    depois: registroAtualizado,
    consentimento,
    consentimentoEm: new Date().toISOString()
  }));

  dados.registros = registros;
  dados.periodos = periodos;
  dados.totaisDiarios = totaisDiarios;
  dados.auditLogs = auditLogs;
  await salvarDadosUsuario(dados);
  await loadData();
  fecharEditModal();
}

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
  updateDateTime();
  setInterval(updateDateTime, 1000);
  loadTheme();
  carregarSenhaEdicao();
  await carregarMonitorConfig();
  setupEventListeners();
  await carregarUsuario();
  iniciarAutoRefreshLocalizacao();
  void tentarEnviarFilaMonitoramento();
});

// Atualizar data e hora
function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString('pt-BR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  dateDisplay.textContent = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
  
  const timeStr = now.toLocaleTimeString('pt-BR');
  currentTime.textContent = timeStr;
  atualizarHorasHojeEmAndamento();
  atualizarDescontoAlmoco();
  verificarAlertasJornada();
}

// Configurar event listeners
function setupEventListeners() {
  entradaBtn.addEventListener('click', registrarEntrada);
  almocoSaidaBtn.addEventListener('click', registrarSaidaAlmoco);
  almocoRetornoBtn.addEventListener('click', registrarRetornoAlmoco);
  saidaBtn.addEventListener('click', registrarSaida);
  if (clearBtn) {
    clearBtn.addEventListener('click', limparHistorico);
  }
  if (exportBtn) {
    exportBtn.addEventListener('click', exportarDados);
  }
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', exportarCSV);
  }
  if (
    workStartInput &&
    workEndInput &&
    lunchStartInput &&
    lunchEndInput &&
    useScheduleInput &&
    missingExitAlertInput &&
    missingExitHoursInput
  ) {
    [
      workStartInput,
      workEndInput,
      lunchStartInput,
      lunchEndInput,
      useScheduleInput,
      missingExitAlertInput,
      missingExitHoursInput
    ].forEach(input => {
      input.addEventListener('change', salvarJornadaConfig);
      input.addEventListener('input', salvarJornadaConfig);
    });
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenuPanel);
  }
  if (menuConfigBtn) {
    menuConfigBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirConfigModal();
    });
  }
  if (menuPasswordBtn) {
    menuPasswordBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirPasswordModal();
    });
  }
  if (menuLoginPasswordBtn) {
    menuLoginPasswordBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirLoginPasswordModal();
    });
  }
  if (menuMonitorBtn) {
    menuMonitorBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirMonitorModal();
    });
  }
  if (menuWeekBtn) {
    menuWeekBtn.addEventListener('click', async () => {
      fecharMenuPanel();
      abrirWeekModal();
      await atualizarResumoSemanal();
    });
  }
  if (menuMonthBtn) {
    menuMonthBtn.addEventListener('click', async () => {
      fecharMenuPanel();
      abrirMonthModal();
      await atualizarResumoMensal();
    });
  }
  if (menuReportBtn) {
    menuReportBtn.addEventListener('click', () => {
      fecharMenuPanel();
      if (!temDadosHistorico) {
        void showMessage('Não há registros ou períodos para gerar o PDF.', 'Gerar PDF');
        return;
      }
      abrirRelatorioPdf();
    });
  }
  if (menuGuideBtn) {
    menuGuideBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirGuiaPdf();
    });
  }
  if (menuAuditBtn) {
    menuAuditBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirAuditModal();
    });
  }
  if (menuMirrorBtn) {
    menuMirrorBtn.addEventListener('click', async () => {
      fecharMenuPanel();
      await exportarEspelhoJSON();
    });
  }
  if (menuAfdBtn) {
    menuAfdBtn.addEventListener('click', async () => {
      fecharMenuPanel();
      await exportarAFDCSV();
    });
  }
  if (menuHolidaysBtn) {
    menuHolidaysBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirFeriadosModal();
    });
  }
  if (menuBackupBtn) {
    menuBackupBtn.addEventListener('click', () => {
      fecharMenuPanel();
      abrirBackupModal();
    });
  }
  if (menuLogoutBtn) {
    menuLogoutBtn.addEventListener('click', async () => {
      fecharMenuPanel();
      await efetuarLogout();
    });
  }
  if (monthClose) {
    monthClose.addEventListener('click', fecharMonthModal);
  }
  if (weekClose) {
    weekClose.addEventListener('click', fecharWeekModal);
  }
  if (holidaysClose) {
    holidaysClose.addEventListener('click', fecharFeriadosModal);
  }
  if (backupClose) {
    backupClose.addEventListener('click', fecharBackupModal);
  }
  if (passwordClose) {
    passwordClose.addEventListener('click', fecharPasswordModal);
  }
  if (passwordSave) {
    passwordSave.addEventListener('click', salvarSenhaEdicao);
  }
  if (loginPasswordClose) {
    loginPasswordClose.addEventListener('click', fecharLoginPasswordModal);
  }
  if (loginPasswordSave) {
    loginPasswordSave.addEventListener('click', salvarSenhaLogin);
  }
  if (authClose) {
    authClose.addEventListener('click', () => fecharAuthModal(false));
  }
  if (authConfirm) {
    authConfirm.addEventListener('click', confirmarSenhaAuth);
  }
  if (authPassword) {
    authPassword.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        confirmarSenhaAuth();
      }
    });
  }
  if (configClose) {
    configClose.addEventListener('click', fecharConfigModal);
  }
  if (configModal) {
    configModal.addEventListener('click', (event) => {
      if (event.target === configModal) {
        fecharConfigModal();
      }
    });
  }
  if (monitorClose) {
    monitorClose.addEventListener('click', fecharMonitorModal);
  }
  if (monitorSaveBtn) {
    monitorSaveBtn.addEventListener('click', salvarMonitorConfig);
  }
  if (monitorTestBtn) {
    monitorTestBtn.addEventListener('click', testarMonitorConexao);
  }
  if (monitorCheckBtn) {
    monitorCheckBtn.addEventListener('click', forcarChecagemMonitoramento);
  }
  if (monitorNotifyTestBtn) {
    monitorNotifyTestBtn.addEventListener('click', testarNotificacaoNavegador);
  }
  if (monitorModal) {
    monitorModal.addEventListener('click', (event) => {
      if (event.target === monitorModal) {
        fecharMonitorModal();
      }
    });
  }
  if (weekModal) {
    weekModal.addEventListener('click', (event) => {
      if (event.target === weekModal) {
        fecharWeekModal();
      }
    });
  }
  if (monthModal) {
    monthModal.addEventListener('click', (event) => {
      if (event.target === monthModal) {
        fecharMonthModal();
      }
    });
  }
  if (holidaysModal) {
    holidaysModal.addEventListener('click', (event) => {
      if (event.target === holidaysModal) {
        fecharFeriadosModal();
      }
    });
  }
  if (editModal) {
    editModal.addEventListener('click', (event) => {
      if (event.target === editModal) {
        fecharEditModal();
      }
    });
  }
  if (backupModal) {
    backupModal.addEventListener('click', (event) => {
      if (event.target === backupModal) {
        fecharBackupModal();
      }
    });
  }
  if (passwordModal) {
    passwordModal.addEventListener('click', (event) => {
      if (event.target === passwordModal) {
        fecharPasswordModal();
      }
    });
  }
  if (loginPasswordModal) {
    loginPasswordModal.addEventListener('click', (event) => {
      if (event.target === loginPasswordModal) {
        fecharLoginPasswordModal();
      }
    });
  }
  if (authModal) {
    authModal.addEventListener('click', (event) => {
      if (event.target === authModal) {
        fecharAuthModal(false);
      }
    });
  }
  if (messageClose) {
    messageClose.addEventListener('click', () => fecharMessageModal(false));
  }
  if (messageOk) {
    messageOk.addEventListener('click', () => fecharMessageModal(true));
  }
  if (messageCancel) {
    messageCancel.addEventListener('click', () => fecharMessageModal(false));
  }
  if (messageModal) {
    messageModal.addEventListener('click', (event) => {
      if (event.target === messageModal) {
        fecharMessageModal(false);
      }
    });
  }
  if (loginSubmit) {
    loginSubmit.addEventListener('click', efetuarLogin);
  }
  if (loginGoogleBtn) {
    loginGoogleBtn.addEventListener('click', async () => {
      await iniciarLoginGoogle();
    });
  }
  if (loginName) {
    loginName.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        efetuarLogin();
      }
    });
  }
  if (loginPassword) {
    loginPassword.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        efetuarLogin();
      }
    });
  }
  if (backupDownloadBtn) {
    backupDownloadBtn.addEventListener('click', exportarBackup);
  }
  if (backupRestoreBtn) {
    backupRestoreBtn.addEventListener('click', abrirJanelaRestauracao);
  }
  if (scheduleSimulateBtn) {
    scheduleSimulateBtn.addEventListener('click', simularJornada);
  }
  if (holidaysAdd) {
    holidaysAdd.addEventListener('click', adicionarFeriado);
  }
  if (holidaysList) {
    holidaysList.addEventListener('click', (event) => {
      const target = event.target;
      if (!(target instanceof HTMLElement)) {
        return;
      }
      const dataKey = target.dataset?.date;
      if (dataKey) {
        removerFeriado(dataKey);
      }
    });
  }
  if (holidaysName) {
    holidaysName.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        adicionarFeriado();
      }
    });
  }
  if (holidaysDate) {
    holidaysDate.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        adicionarFeriado();
      }
    });
  }
  if (addRecordBtn) {
    addRecordBtn.addEventListener('click', async () => {
      const liberado = await solicitarSenhaEdicao();
      if (!liberado) {
        return;
      }
      abrirEditModal('add', null, null, new Date().toISOString().split('T')[0]);
    });
  }
  if (editClose) {
    editClose.addEventListener('click', fecharEditModal);
  }
  if (auditClose) {
    auditClose.addEventListener('click', fecharAuditModal);
  }
  if (editSave) {
    editSave.addEventListener('click', salvarEdicaoRegistro);
  }
  if (historyList) {
    historyList.addEventListener('click', async (event) => {
      const target = event.target.closest('.history-edit');
      if (!target) {
        return;
      }
      const liberado = await solicitarSenhaEdicao();
      if (!liberado) {
        return;
      }
      const index = Number(target.dataset.index);
      const dataKey = new Date().toISOString().split('T')[0];
      const { dados } = await obterDadosUsuarioStorage();
      const registros = dados.registros?.[dataKey] || [];
      const registro = registros[index];
      if (registro) {
        abrirEditModal('edit', registro, index, dataKey);
      }
    });
  }
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      fecharMenuPanel();
      fecharWeekModal();
      fecharMonthModal();
      fecharFeriadosModal();
      fecharBackupModal();
      fecharPasswordModal();
      fecharLoginPasswordModal();
      fecharAuthModal(false);
      fecharMessageModal(false);
      fecharEditModal();
      fecharAuditModal();
      fecharConfigModal();
      fecharMonitorModal();
      if (usuarioLogado) {
        fecharLoginModal();
      }
    }
  });
  document.addEventListener('click', (event) => {
    if (!menuPanel || !menuBtn) {
      return;
    }
    if (menuPanel.contains(event.target) || menuBtn.contains(event.target)) {
      return;
    }
    fecharMenuPanel();
  });
  themeToggle.addEventListener('click', toggleTheme);
}

// Registrar entrada
async function registrarEntrada() {
  const now = new Date();
  const registro = {
    tipo: 'entrada',
    timestamp: now.toISOString(),
    hora: now.toLocaleTimeString('pt-BR')
  };

  currentEntry = registro;
  almocoSaida = null;
  almocoRetorno = null;
  alertaSemSaidaMostradoEm = null;
  estado = 'trabalhando';

  await salvarRegistro(registro);
  void enviarEventoMonitoramento('ponto_registro', {
    registroTipo: registro.tipo,
    timestamp: registro.timestamp,
    hora: registro.hora
  });
  await salvarMonitorEstadoAtual();
  chrome.runtime?.sendMessage?.({ type: 'monitor_check_now' });
  atualizarInterface();
  await atualizarHistorico();
  await calcularHoras();
}

// Registrar saída para almoço
async function registrarSaidaAlmoco() {
  if (!currentEntry) return;

  const now = new Date();
  const registro = {
    tipo: 'saida_almoco',
    timestamp: now.toISOString(),
    hora: now.toLocaleTimeString('pt-BR')
  };

  almocoSaida = registro;
  almocoRetorno = null;
  estado = 'almoco';

  await salvarRegistro(registro);
  void enviarEventoMonitoramento('ponto_registro', {
    registroTipo: registro.tipo,
    timestamp: registro.timestamp,
    hora: registro.hora
  });
  await salvarMonitorEstadoAtual();
  atualizarInterface();
  await atualizarHistorico();
  await calcularHoras();
}

// Registrar retorno do almoço
async function registrarRetornoAlmoco() {
  if (!almocoSaida) return;

  const now = new Date();
  const registro = {
    tipo: 'retorno_almoco',
    timestamp: now.toISOString(),
    hora: now.toLocaleTimeString('pt-BR')
  };

  almocoRetorno = registro;
  estado = 'trabalhando_apos_almoco';

  await salvarRegistro(registro);
  void enviarEventoMonitoramento('ponto_registro', {
    registroTipo: registro.tipo,
    timestamp: registro.timestamp,
    hora: registro.hora
  });
  await salvarMonitorEstadoAtual();
  atualizarInterface();
  await atualizarHistorico();
  await calcularHoras();
}

// Registrar saída
async function registrarSaida() {
  if (!currentEntry) return;

  const now = new Date();
  const registro = {
    tipo: 'saida',
    timestamp: now.toISOString(),
    hora: now.toLocaleTimeString('pt-BR')
  };

  // Salvar registro primeiro
  await salvarRegistro(registro);
  
  // Calcular horas trabalhadas (descontando almoço se houver)
  let totalMinutos = 0;
  
  // Buscar registros do dia para verificar se há retorno de almoço
  const hoje = new Date().toISOString().split('T')[0];
  const { dados } = await obterDadosUsuarioStorage();
  const registros = dados.registros?.[hoje] || [];
  const retornoAlmoco = registros.find(r => r.tipo === 'retorno_almoco');
  
  let totalSegundos = 0;
  
  if (almocoSaida) {
    // Período antes do almoço
    const entradaTime = new Date(currentEntry.timestamp);
    const almocoSaidaTime = new Date(almocoSaida.timestamp);
    const diffMsAntes = almocoSaidaTime - entradaTime;
    totalSegundos += Math.floor(diffMsAntes / 1000);
    
    // Período após o almoço (se houver retorno registrado)
    if (retornoAlmoco) {
      const retornoTime = new Date(retornoAlmoco.timestamp);
      const saidaTime = new Date(registro.timestamp);
      const diffMsDepois = saidaTime - retornoTime;
      totalSegundos += Math.floor(diffMsDepois / 1000);
    }
    // Se não há retorno registrado, não calcula período após almoço
    // (assume que ainda está em almoço ou esqueceu de registrar retorno)
  } else {
    // Se não houve almoço, calcular período completo
    const entradaTime = new Date(currentEntry.timestamp);
    const saidaTime = new Date(registro.timestamp);
    const diffMs = saidaTime - entradaTime;
    totalSegundos = Math.floor(diffMs / 1000);
  }
  
  // Calcular horas e minutos a partir dos segundos totais
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  
  // Salvar período trabalhado (mesmo que seja 0 minutos, para aparecer no histórico)
  const periodoSalvo = {
    entrada: currentEntry.timestamp,
    saida: registro.timestamp,
    horas: horas,
    minutos: minutos,
    teveAlmoco: Boolean(almocoSaida),
    totalSegundos: totalSegundos
  };
  
  await salvarPeriodo(periodoSalvo);
  void enviarEventoMonitoramento('ponto_registro', {
    registroTipo: registro.tipo,
    timestamp: registro.timestamp,
    hora: registro.hora,
    duracaoSegundos: totalSegundos,
    teveAlmoco: Boolean(almocoSaida)
  });

  // Resetar estado
  currentEntry = null;
  almocoSaida = null;
  almocoRetorno = null;
  estado = 'aguardando';

  atualizarInterface();
  await salvarMonitorEstadoAtual();
  
  // Aguardar um momento para garantir que os dados foram salvos no storage
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Atualizar histórico e horas trabalhadas
  await atualizarHistorico();
  
  // Aguardar mais um pouco antes de calcular horas para garantir que tudo foi salvo
  await new Promise(resolve => setTimeout(resolve, 100));
  await calcularHoras();
}

// Salvar registro
async function salvarRegistro(registro) {
  // IMPORTANTE: Buscar TODOS os dados do usuario para preservar periodos
  const { dados } = await obterDadosUsuarioStorage();
  // Garantir que registros é um objeto, não um array
  let registros = normalizarObjeto(dados.registros);
  
  // Se por algum motivo for array, converter para objeto
  if (Array.isArray(registros)) {
    registros = {};
  }
  
  const hoje = new Date().toISOString().split('T')[0];
  if (!registros[hoje]) {
    registros[hoje] = [];
  }
  
  const registroFinal = { ...registro };
  if (!registroFinal.usuario) {
    registroFinal.usuario = usuarioNome || '';
  }
  if (!registroFinal.usuarioProvider) {
    registroFinal.usuarioProvider = usuarioProvider || 'local';
  }
  if (!registroFinal.usuarioEmail && usuarioEmail) {
    registroFinal.usuarioEmail = usuarioEmail;
  }

  registros[hoje].push(registroFinal);
  
  // IMPORTANTE: Preservar periodos e totais diarios ao salvar registros
  const periodos = normalizarObjeto(dados.periodos);
  let totaisDiarios = normalizarObjeto(dados.totaisDiarios);
  if (Array.isArray(totaisDiarios)) {
    totaisDiarios = {};
  }
  
  console.log('Salvando registro:', registro);
  console.log('Registros antes de salvar:', registros);
  console.log('Periodos preservados:', periodos);
  
  dados.registros = registros;
  dados.periodos = periodos;
  dados.totaisDiarios = totaisDiarios;
  await salvarDadosUsuario(dados);
  
  // Verificar se foi salvo
  const { dados: verificacao } = await obterDadosUsuarioStorage();
  console.log('Verificação após salvar - Registros:', verificacao.registros);
  console.log('Verificação após salvar - Periodos:', verificacao.periodos);
}

// Salvar período trabalhado
async function salvarPeriodo(periodo) {
  console.log('Salvando período:', periodo);
  // IMPORTANTE: Buscar TODOS os dados do usuario para preservar registros
  const { dados } = await obterDadosUsuarioStorage();
  const periodos = normalizarObjeto(dados.periodos);
  const registros = normalizarObjeto(dados.registros);
  let totaisDiarios = normalizarObjeto(dados.totaisDiarios);
  if (Array.isArray(totaisDiarios)) {
    totaisDiarios = {};
  }
  
  const hoje = new Date().toISOString().split('T')[0];
  if (!periodos[hoje]) {
    periodos[hoje] = [];
  }
  
  periodos[hoje].push(periodo);
  
  const totalSegundosDia = (periodos[hoje] || []).reduce((sum, p) => {
    if (p.totalSegundos !== undefined && p.totalSegundos !== null) {
      return sum + (Number(p.totalSegundos) || 0);
    }
    const horas = Number(p.horas) || 0;
    const minutos = Number(p.minutos) || 0;
    return sum + (horas * 3600) + (minutos * 60);
  }, 0);
  totaisDiarios[hoje] = totalSegundosDia;

  console.log('Períodos antes de salvar:', periodos);
  console.log('Registros preservados antes de salvar:', registros);
  console.log('Total de dias com registros:', Object.keys(registros).length);
  console.log('Total de dias com períodos:', Object.keys(periodos).length);
  
  // IMPORTANTE: Preservar registros ao salvar periodos
  dados.registros = registros;
  dados.periodos = periodos;
  dados.totaisDiarios = totaisDiarios;
  await salvarDadosUsuario(dados);
  
  // Verificar se foi salvo corretamente
  const { dados: dataVerificacao } = await obterDadosUsuarioStorage();
  console.log('Períodos após salvar:', dataVerificacao.periodos);
  console.log('Períodos de hoje após salvar:', dataVerificacao.periodos?.[hoje]);
  console.log('Registros preservados após salvar:', Object.keys(dataVerificacao.registros || {}).length, 'dias');
  console.log('Dias com registros:', Object.keys(dataVerificacao.registros || {}));
  console.log('Dias com períodos:', Object.keys(dataVerificacao.periodos || {}));
}

// Carregar dados
async function loadData() {
  const hoje = new Date().toISOString().split('T')[0];
  const { dados } = await obterDadosUsuarioStorage();
  temDadosHistorico = calcularTemHistorico(dados);
  
  const registros = dados.registros?.[hoje] || [];
  almocoRetorno = null;
  almocoSaida = null;
  currentEntry = null;
  estado = 'aguardando';
  
  const registrosPonto = registros.filter(registro => REGISTRO_PONTO_TIPOS.has(registro.tipo));
  const agoraMs = Date.now();
  const registrosParaEstado = registrosPonto.filter(registro => {
    const ts = new Date(registro.timestamp).getTime();
    return Number.isFinite(ts) && ts <= (agoraMs + 1000);
  });

  // Verificar estado atual baseado nos registros
  if (registrosParaEstado.length > 0) {
    const registrosOrdenados = [...registrosParaEstado].sort((a, b) => {
      return new Date(a.timestamp) - new Date(b.timestamp);
    });
    const ultimoRegistro = registrosOrdenados[registrosOrdenados.length - 1];
    let entrada = null;
    let saidaAlmoco = null;
    let retornoAlmoco = null;

    registrosOrdenados.forEach(registro => {
      if (registro.tipo === 'entrada') {
        entrada = registro;
      } else if (registro.tipo === 'saida_almoco') {
        saidaAlmoco = registro;
      } else if (registro.tipo === 'retorno_almoco') {
        retornoAlmoco = registro;
      }
    });

    currentEntry = entrada;
    almocoSaida = saidaAlmoco;
    almocoRetorno = retornoAlmoco;

    if (ultimoRegistro?.tipo === 'entrada') {
      estado = 'trabalhando';
    } else if (ultimoRegistro?.tipo === 'saida_almoco') {
      estado = 'almoco';
    } else if (ultimoRegistro?.tipo === 'retorno_almoco') {
      estado = 'trabalhando_apos_almoco';
    } else if (ultimoRegistro?.tipo === 'saida') {
      estado = 'aguardando';
      currentEntry = null;
      almocoSaida = null;
      almocoRetorno = null;
    }
  }
  
  atualizarInterface();
  await atualizarHistorico();
  await atualizarIndicadorFeriado();
  
  // Garantir que calcularHoras() seja chamada para atualizar os cards
  // Aguardar um pouco para garantir que o DOM está pronto
  await new Promise(resolve => setTimeout(resolve, 100));
  await calcularHoras();
  await salvarMonitorEstadoAtual();
}

// Atualizar interface
function atualizarInterface() {
  // Resetar todos os botões
  entradaBtn.disabled = false;
  almocoSaidaBtn.disabled = true;
  almocoRetornoBtn.disabled = true;
  saidaBtn.disabled = true;
  
  switch (estado) {
    case 'aguardando':
      statusIndicator.textContent = '⚪';
      statusIndicator.classList.remove('active', 'almoco');
      statusText.textContent = 'Aguardando registro';
      entradaBtn.disabled = false;
      break;
      
    case 'trabalhando':
      statusIndicator.textContent = '🟢';
      statusIndicator.classList.add('active');
      statusIndicator.classList.remove('almoco');
      statusText.textContent = 'Trabalhando';
      entradaBtn.disabled = true;
      almocoSaidaBtn.disabled = false;
      saidaBtn.disabled = false;
      break;
      
    case 'almoco':
      statusIndicator.textContent = '🟡';
      statusIndicator.classList.add('active', 'almoco');
      statusText.textContent = 'Em almoço';
      entradaBtn.disabled = true;
      almocoRetornoBtn.disabled = false;
      break;
      
    case 'trabalhando_apos_almoco':
      statusIndicator.textContent = '🟢';
      statusIndicator.classList.add('active');
      statusIndicator.classList.remove('almoco');
      statusText.textContent = 'Trabalhando';
      entradaBtn.disabled = true;
      saidaBtn.disabled = false;
      break;
  }
}


// Atualizar histórico
async function atualizarHistorico() {
  const hoje = new Date().toISOString().split('T')[0];
  
  // Buscar dados atuais do storage - garantir que buscamos dados atualizados
  let data = await obterDadosUsuarioStorage();
  if (isLocalizacaoExibivel(ultimaLocalizacao)) {
    let alterouRegistros = false;
    const registrosPorDia = data.dados.registros || {};
    const registrosAtualizados = {};
    Object.entries(registrosPorDia).forEach(([dataKey, registrosDia]) => {
      if (!Array.isArray(registrosDia)) {
        registrosAtualizados[dataKey] = registrosDia;
        return;
      }
      let alterouDia = false;
      const novos = registrosDia.map(reg => {
        if (reg?.tipo !== 'login') {
          return reg;
        }
        const { registro, alterado } = corrigirLocalizacaoRegistro(reg, ultimaLocalizacao);
        if (alterado) {
          alterouDia = true;
        }
        return registro;
      });
      if (alterouDia) {
        alterouRegistros = true;
      }
      registrosAtualizados[dataKey] = novos;
    });
    if (alterouRegistros) {
      data.dados.registros = registrosAtualizados;
      await salvarDadosUsuario(data.dados);
      data = await obterDadosUsuarioStorage();
    }
  }
  temDadosHistorico = calcularTemHistorico(data.dados);
  let registros = data.dados.registros?.[hoje] || [];
  let periodos = data.dados.periodos?.[hoje] || [];
  
  // Verificar se precisa recalcular (se há saídas sem períodos correspondentes)
  const saidas = registros.filter(r => r.tipo === 'saida');
  
  if (saidas.length > 0) {
    // Verificar se todas as saídas têm períodos correspondentes
    const todasTemPeriodo = saidas.every(saida => {
      return periodos.some(p => {
        const pSaida = new Date(p.saida);
        const rSaida = new Date(saida.timestamp);
        return Math.abs(pSaida.getTime() - rSaida.getTime()) < 2000; // 2 segundos de tolerância
      });
    });
    
    // Se alguma saída não tem período correspondente, recalcular
    if (!todasTemPeriodo) {
      await recalcularPeriodos();
      // Buscar dados novamente após recalcular
      data = await obterDadosUsuarioStorage();
      registros = data.dados.registros?.[hoje] || [];
      periodos = data.dados.periodos?.[hoje] || [];
    }
  }
  
  // Renderizar histórico com os dados atualizados
  renderizarHistorico(registros, periodos);
}

// Renderizar histórico (função auxiliar)
function renderizarHistorico(registros, periodos) {
  // Verificar se o elemento existe
  if (!historyList) {
    console.error('Elemento historyList não encontrado');
    // Tentar buscar novamente
    const element = document.getElementById('historyList');
    if (!element) {
      console.error('Não foi possível encontrar o elemento historyList');
      return;
    }
  }
  
  // Garantir que temos arrays válidos
  registros = registros || [];
  periodos = periodos || [];
  
  const temDados = registros.length > 0 || periodos.length > 0;
  if (clearBtn) {
    clearBtn.disabled = !temDados;
  }

  if (!temDados) {
    historyList.innerHTML = '<div class="empty-state">Nenhum registro hoje</div>';
    return;
  }
  
  let html = '';
  const dataKey = new Date().toISOString().split('T')[0];
  
  // Mostrar registros
  registros.forEach((reg, index) => {
    let tipoClass, tipoIcon, tipoTexto;
    let detalhesHtml = '';
    
    switch (reg.tipo) {
      case 'entrada':
        tipoClass = 'entrada';
        tipoIcon = '📥';
        tipoTexto = 'Entrada';
        break;
      case 'saida_almoco':
        tipoClass = 'almoco';
        tipoIcon = '🍽️';
        tipoTexto = 'Saída Almoço';
        break;
      case 'retorno_almoco':
        tipoClass = 'retorno';
        tipoIcon = '↩️';
        tipoTexto = 'Retorno Almoço';
        break;
      case 'saida':
        tipoClass = 'saida';
        tipoIcon = '📤';
        tipoTexto = 'Saída';
        break;
      case 'login':
        tipoClass = 'login';
        tipoIcon = '📍';
        tipoTexto = 'Login';
        break;
      default:
        tipoClass = '';
        tipoIcon = '⏰';
        tipoTexto = reg.tipo;
    }

    if (reg.tipo === 'login') {
      const localizacaoTexto = formatarTextoLocalizacao(reg.localizacao);
      const horaTexto = reg.hora || '';
      detalhesHtml = `
        <div class="history-item-details">
          <span>${horaTexto}</span>
          ${localizacaoTexto ? `<span class="history-item-location">${localizacaoTexto}</span>` : ''}
        </div>
      `;
    } else {
      detalhesHtml = `
        <div class="history-item-time">
          <span>${reg.hora}</span>
          <button class="history-edit" data-index="${index}" title="Editar">✏️</button>
        </div>
      `;
    }
    
    html += `
      <div class="history-item">
        <div class="history-item-type ${tipoClass}">
          <span>${tipoIcon}</span>
          <span>${tipoTexto}</span>
        </div>
        ${detalhesHtml}
      </div>
    `;
  });
  
  // Mostrar períodos trabalhados com horas calculadas
  if (periodos.length > 0) {
    periodos.forEach((periodo, index) => {
      // Calcular total de minutos e segundos para exibição mais precisa
      const entradaDate = new Date(periodo.entrada);
      const saidaDate = new Date(periodo.saida);
      
      // Usar totalSegundos salvo se disponível, senão calcular
      const totalSegundos = periodo.totalSegundos !== undefined 
        ? periodo.totalSegundos 
        : Math.floor((saidaDate - entradaDate) / 1000);
      
      const horas = periodo.horas || Math.floor(totalSegundos / 3600);
      const minutos = periodo.minutos !== undefined 
        ? periodo.minutos 
        : Math.floor((totalSegundos % 3600) / 60);
      
      let horasStr;
      if (totalSegundos < 60) {
        // Se menos de 1 minuto, mostrar em segundos
        horasStr = `${totalSegundos}s`;
      } else if (horas === 0 && minutos < 10) {
        // Se menos de 10 minutos, mostrar minutos e segundos
        const segundos = totalSegundos % 60;
        horasStr = `${minutos}min ${segundos}s`;
      } else {
        // Formato padrão HH:MM
        horasStr = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
      }
      
      const entradaHora = entradaDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      const saidaHora = saidaDate.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      
      html += `
        <div class="history-item history-period">
          <div class="history-item-type periodo">
            <span>⏱️</span>
            <span>Período ${index + 1}${periodo.teveAlmoco ? ' (com almoço)' : ''}</span>
          </div>
          <div class="history-item-details">
            <div class="history-period-time">${entradaHora} - ${saidaHora}</div>
            <div class="history-period-hours">${horasStr}</div>
          </div>
        </div>
      `;
    });
  }
  
  // Atualizar o DOM - sempre buscar o elemento diretamente para garantir que está atualizado
  const element = document.getElementById('historyList');
  if (!element) {
    console.error('Elemento historyList não encontrado no DOM');
    return;
  }
  
  if (html) {
    element.innerHTML = html;
    // Forçar reflow para garantir que a atualização seja visível
    void element.offsetHeight;
  } else {
    element.innerHTML = '<div class="empty-state">Nenhum registro hoje</div>';
  }
}

// Recalcular períodos a partir dos registros (caso não existam ou estejam incompletos)
async function recalcularPeriodos() {
  const { dados } = await obterDadosUsuarioStorage();
  const registros = normalizarObjeto(dados.registros);
  let periodos = normalizarObjeto(dados.periodos);
  let totaisDiarios = normalizarObjeto(dados.totaisDiarios);
  if (Array.isArray(totaisDiarios)) {
    totaisDiarios = {};
  }
  
  // CRÍTICO: Preservar períodos existentes que não têm registros correspondentes
  // Se há períodos no storage mas não há registros, preservar os períodos
  const periodosExistentesNoStorage = periodos || {};
  
  // Processar cada dia com registros
  for (const dataKey of Object.keys(registros)) {
    const registrosDoDia = registros[dataKey];
    if (!registrosDoDia || registrosDoDia.length === 0) continue;
    
    // Encontrar todas as entradas e saídas do dia
    const entradas = registrosDoDia.filter(r => r.tipo === 'entrada');
    const saidas = registrosDoDia.filter(r => r.tipo === 'saida');
    
    // Se não há entradas ou saídas, não há períodos para calcular
    if (entradas.length === 0 || saidas.length === 0) {
      // Se não há períodos para este dia, garantir que o array existe
      if (!periodos[dataKey]) {
        periodos[dataKey] = [];
      }
      continue;
    }
    
    // Verificar quantos períodos já existem
    const periodosExistentes = periodos[dataKey] || [];
    
    // Verificar se os períodos existentes correspondem às saídas
    // Se todas as saídas têm períodos correspondentes com tolerância de 2 segundos, não recalcular
    if (periodosExistentes.length > 0 && saidas.length > 0) {
      const todasTemPeriodo = saidas.every(saida => {
        return periodosExistentes.some(p => {
          const pSaida = new Date(p.saida);
          const rSaida = new Date(saida.timestamp);
          return Math.abs(pSaida.getTime() - rSaida.getTime()) < 2000; // 2 segundos de tolerância
        });
      });
      
      // Se todas as saídas têm períodos e o número de períodos corresponde, não recalcular
      // MAS apenas se o número de períodos for igual ao número de saídas
      if (todasTemPeriodo && periodosExistentes.length === saidas.length) {
        // Verificar se os períodos existentes têm dados válidos
        const todosTemDados = periodosExistentes.every(p => 
          (p.horas !== undefined || p.totalSegundos !== undefined)
        );
        if (todosTemDados) {
          continue; // Não precisa recalcular este dia
        }
      }
    }
    
    // Recalcular períodos para cada par entrada/saída
    if (!periodos[dataKey]) {
      periodos[dataKey] = [];
    }
    
    // Limpar períodos antigos deste dia para recalcular
    periodos[dataKey] = [];
    
    // Processar cada saída (pode haver múltiplos períodos no mesmo dia)
    saidas.forEach(saida => {
      // Encontrar a entrada correspondente (a mais recente antes desta saída)
      const entrada = entradas
        .filter(e => new Date(e.timestamp) < new Date(saida.timestamp))
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))[0];
      
      if (!entrada) return;
      
      const saidaAlmoco = registrosDoDia.find(r => 
        r.tipo === 'saida_almoco' && 
        new Date(r.timestamp) > new Date(entrada.timestamp) &&
        new Date(r.timestamp) < new Date(saida.timestamp)
      );
      const retornoAlmoco = registrosDoDia.find(r => 
        r.tipo === 'retorno_almoco' && 
        saidaAlmoco &&
        new Date(r.timestamp) > new Date(saidaAlmoco.timestamp) &&
        new Date(r.timestamp) < new Date(saida.timestamp)
      );
      
      let totalSegundos = 0;
      
      if (saidaAlmoco) {
        // Período antes do almoço
        const entradaTime = new Date(entrada.timestamp);
        const almocoSaidaTime = new Date(saidaAlmoco.timestamp);
        const diffMsAntes = almocoSaidaTime - entradaTime;
        totalSegundos += Math.floor(diffMsAntes / 1000);
        
        // Período após o almoço (se houver retorno)
        if (retornoAlmoco) {
          const retornoTime = new Date(retornoAlmoco.timestamp);
          const saidaTime = new Date(saida.timestamp);
          const diffMsDepois = saidaTime - retornoTime;
          totalSegundos += Math.floor(diffMsDepois / 1000);
        }
      } else {
        // Período completo sem almoço
        const entradaTime = new Date(entrada.timestamp);
        const saidaTime = new Date(saida.timestamp);
        const diffMs = saidaTime - entradaTime;
        totalSegundos = Math.floor(diffMs / 1000);
      }
      
      // Calcular horas e minutos a partir dos segundos totais
      const horas = Math.floor(totalSegundos / 3600);
      const minutos = Math.floor((totalSegundos % 3600) / 60);
      
      // Salvar período recalculado
      const periodoRecalculado = {
        entrada: entrada.timestamp,
        saida: saida.timestamp,
        horas: horas,
        minutos: minutos,
        teveAlmoco: Boolean(saidaAlmoco),
        totalSegundos: totalSegundos
      };
      periodos[dataKey].push(periodoRecalculado);
    });
  }
  
  // CRÍTICO: Preservar períodos existentes que não têm registros correspondentes
  // Se há períodos no storage mas não há registros, preservar os períodos
  for (const dataKey of Object.keys(periodosExistentesNoStorage)) {
    // Se não há registros para este dia mas há períodos salvos, preservar os períodos
    if (!registros[dataKey] || registros[dataKey].length === 0) {
      if (periodosExistentesNoStorage[dataKey] && Array.isArray(periodosExistentesNoStorage[dataKey]) && periodosExistentesNoStorage[dataKey].length > 0) {
        // Preservar períodos existentes - copiar do storage original
        if (!periodos[dataKey] || periodos[dataKey].length === 0) {
          periodos[dataKey] = [...periodosExistentesNoStorage[dataKey]];
        }
      }
    }
  }
  
  // Atualizar totais diarios apenas para dias com periodos salvos
  Object.keys(periodos).forEach(dataKey => {
    const periodosDoDia = periodos[dataKey] || [];
    if (Array.isArray(periodosDoDia) && periodosDoDia.length > 0) {
      const totalSegundosDia = periodosDoDia.reduce((sum, p) => {
        if (p.totalSegundos !== undefined && p.totalSegundos !== null) {
          return sum + (Number(p.totalSegundos) || 0);
        }
        const horas = Number(p.horas) || 0;
        const minutos = Number(p.minutos) || 0;
        return sum + (horas * 3600) + (minutos * 60);
      }, 0);
      totaisDiarios[dataKey] = totalSegundosDia;
    }
  });
  
  // IMPORTANTE: Preservar registros ao salvar periodos recalculados
  dados.registros = registros;
  dados.periodos = periodos;
  dados.totaisDiarios = totaisDiarios;
  await salvarDadosUsuario(dados);
}

// Calcular horas trabalhadas
async function calcularHoras() {
  try {
    // Sempre buscar elementos do DOM para garantir que estão atualizados
    const hoursTodayEl = document.getElementById('hoursToday');
    const hoursMonthEl = document.getElementById('hoursMonth');
    
    if (!hoursTodayEl || !hoursMonthEl) {
      console.error('Elementos hoursToday ou hoursMonth não encontrados no DOM');
      console.error('hoursToday:', hoursTodayEl, 'hoursMonth:', hoursMonthEl);
      return;
    }
    
    // Primeiro, recalcular períodos se necessário
    await recalcularPeriodos();
    
    // Buscar dados atualizados após recalcular - SEMPRE buscar ambos para garantir dados corretos
    const hoje = new Date().toISOString().split('T')[0];
    const { dados } = await obterDadosUsuarioStorage();
    let periodos = normalizarObjeto(dados.periodos);
    let totaisDiarios = normalizarObjeto(dados.totaisDiarios);
    
    // Garantir que periodos é um objeto, não um array
    if (Array.isArray(periodos)) {
      console.warn('⚠️ Períodos estava como array, convertendo para objeto');
      periodos = {};
    }
    if (Array.isArray(totaisDiarios)) {
      totaisDiarios = {};
    }
    
    // Se não há períodos mas há registros, tentar recalcular novamente
    const registros = normalizarObjeto(dados.registros);
    const registrosHoje = registros[hoje] || [];
    let periodosHoje = periodos[hoje] || [];
    
    totalSegundosAlmocoBase = 0;
    if (Array.isArray(registrosHoje) && registrosHoje.length > 0) {
      const registrosOrdenados = [...registrosHoje].sort((a, b) => {
        return new Date(a.timestamp) - new Date(b.timestamp);
      });
      let ultimaSaidaAlmoco = null;
      
      registrosOrdenados.forEach(registro => {
        if (registro.tipo === 'saida_almoco') {
          ultimaSaidaAlmoco = registro;
        } else if (registro.tipo === 'retorno_almoco' && ultimaSaidaAlmoco) {
          const diffMs = new Date(registro.timestamp) - new Date(ultimaSaidaAlmoco.timestamp);
          if (diffMs > 0) {
            totalSegundosAlmocoBase += Math.floor(diffMs / 1000);
          }
          ultimaSaidaAlmoco = null;
        }
      });
    }
    
    if (registrosHoje.length > 0 && periodosHoje.length === 0) {
      console.log('Há registros mas não há períodos para hoje, forçando recálculo...');
      await recalcularPeriodos();
      const dataAtualizada = await obterDadosUsuarioStorage();
      const periodosAtualizados = dataAtualizada.dados.periodos || {};
      periodos = periodosAtualizados; // Atualizar periodos com os novos dados
      periodosHoje = periodos[hoje] || [];
      console.log('Períodos de hoje após forçar recálculo:', periodosHoje);
    }
    
  // Horas de hoje
  // periodosHoje já foi definido acima, usar diretamente
  let totalSegundosHoje = 0;
    
    console.log('=== CALCULANDO HORAS ===');
    console.log('Data de hoje:', hoje);
    console.log('Períodos de hoje encontrados:', periodosHoje);
    console.log('Quantidade de períodos:', periodosHoje.length);
    
    if (Array.isArray(periodosHoje) && periodosHoje.length > 0) {
      periodosHoje.forEach((p, index) => {
        console.log(`Período ${index + 1}:`, p);
        // Usar totalSegundos se disponível, senão calcular a partir de horas e minutos
        if (p.totalSegundos !== undefined && p.totalSegundos !== null) {
          const segundos = Number(p.totalSegundos) || 0;
          totalSegundosHoje += segundos;
          console.log(`  - Adicionando ${segundos} segundos (totalSegundos)`);
        } else {
          // Fallback: calcular a partir de horas e minutos
          const horas = Number(p.horas) || 0;
          const minutos = Number(p.minutos) || 0;
          const segundos = (horas * 3600) + (minutos * 60);
          totalSegundosHoje += segundos;
          console.log(`  - Adicionando ${segundos} segundos (${horas}h ${minutos}min)`);
        }
      });
    } else {
      console.log('Nenhum período encontrado para hoje');
    }
    
    totalSegundosHojeBase = totalSegundosHoje;
    const totalSegundosHojeComAndamento = totalSegundosHojeBase + calcularSegundosEmAndamento();
    const valorHoje = formatarHorasMinutos(totalSegundosHojeComAndamento);
    
    console.log('Total segundos hoje:', totalSegundosHoje);
    console.log('Horas de hoje calculadas:', valorHoje);
    hoursTodayEl.textContent = valorHoje;
    hoursTodayEl.innerText = valorHoje; // Forçar atualização
    console.log('Valor definido no elemento:', hoursTodayEl.textContent);
    
    // Total do mês
    // Soma todos os períodos trabalhados de todos os dias do mês atual
    const mesAtual = new Date().getMonth(); // 0-11 (janeiro = 0)
    const anoAtual = new Date().getFullYear();
    let totalSegundosMes = 0;
    
    console.log('=== CALCULANDO TOTAL DO MÊS ===');
    console.log('Mês atual:', mesAtual + 1, '(janeiro=1, fevereiro=2, etc)');
    console.log('Ano atual:', anoAtual);
    console.log('Total de dias com períodos salvos:', Object.keys(periodos).length);
    
    // Iterar sobre todos os dias que têm períodos salvos
    const diasComDados = new Set([
      ...Object.keys(periodos),
      ...Object.keys(totaisDiarios)
    ]);
    
    Array.from(diasComDados).forEach(dataKey => {
      const dataObj = parseDateKey(dataKey);
      
      // Verificar se a data é válida e se pertence ao mês e ano atual
      if (dataObj) {
        const mesDoPeriodo = dataObj.getMonth();
        const anoDoPeriodo = dataObj.getFullYear();
        
        if (mesDoPeriodo === mesAtual && anoDoPeriodo === anoAtual) {
          let segundosDoDia = null;
          const totalSalvo = totaisDiarios[dataKey];
          if (totalSalvo !== undefined && totalSalvo !== null) {
            if (typeof totalSalvo === 'object') {
              segundosDoDia = Number(totalSalvo.totalSegundos) || 0;
            } else {
              segundosDoDia = Number(totalSalvo) || 0;
            }
          }
          
          if (segundosDoDia === null) {
            const periodosDoDia = periodos[dataKey] || [];
            if (Array.isArray(periodosDoDia) && periodosDoDia.length > 0) {
              console.log(`✓ Dia ${dataKey}: ${periodosDoDia.length} período(s)`);
              segundosDoDia = 0;
              
              periodosDoDia.forEach((p, index) => {
                // Usar totalSegundos se disponível, senão calcular a partir de horas e minutos
                let segundosPeriodo = 0;
                if (p.totalSegundos !== undefined && p.totalSegundos !== null) {
                  segundosPeriodo = Number(p.totalSegundos) || 0;
                } else {
                  // Fallback: calcular a partir de horas e minutos
                  const horas = Number(p.horas) || 0;
                  const minutos = Number(p.minutos) || 0;
                  segundosPeriodo = (horas * 3600) + (minutos * 60);
                }
                
                segundosDoDia += segundosPeriodo;
                
                const horasP = Math.floor(segundosPeriodo / 3600);
                const minutosP = Math.floor((segundosPeriodo % 3600) / 60);
                console.log(`  Período ${index + 1}: ${horasP}h ${minutosP}min (${segundosPeriodo}s)`);
              });
              
              const horasDia = Math.floor(segundosDoDia / 3600);
              const minutosDia = Math.floor((segundosDoDia % 3600) / 60);
              console.log(`  Total do dia: ${horasDia}h ${minutosDia}min (${segundosDoDia}s)`);
            }
          }
          
          if (segundosDoDia !== null) {
            totalSegundosMes += segundosDoDia;
          }
        } else {
          console.log(`✗ Dia ${dataKey}: fora do mês atual (mês ${mesDoPeriodo + 1}/${anoDoPeriodo})`);
        }
      } else {
        console.log(`✗ Data inválida: ${dataKey}`);
      }
    });
    
    const valorMes = formatarHorasMinutos(totalSegundosMes);
    
    console.log('Total segundos mês:', totalSegundosMes);
    console.log('Total do mês calculado:', valorMes);
    hoursMonthEl.textContent = valorMes;
    hoursMonthEl.innerText = valorMes; // Forçar atualização
    console.log('Valor definido no elemento:', hoursMonthEl.textContent);
    atualizarDescontoAlmoco();
    await atualizarResumoSemanal();
    await atualizarResumoMensal();
    console.log('=== FIM DO CÁLCULO ===');
  } catch (error) {
    console.error('Erro ao calcular horas:', error);
    console.error('Stack trace:', error.stack);
  }
}

// Limpar histórico
async function limparHistorico() {
  if (!(await showConfirm('Tem certeza que deseja limpar o histórico de hoje? O total do mês será mantido.', 'Confirmar'))) {
    return;
  }
  
  const hoje = new Date().toISOString().split('T')[0];
  
  console.log('=== LIMPAR HISTÓRICO DE HOJE ===');
  console.log('Data de hoje:', hoje);
  
  // Buscar dados do usuário atual
  const { dados } = await obterDadosUsuarioStorage();
  
  // CRÍTICO: Criar cópias dos objetos originais para não modificar diretamente
  // Se os dados não existirem, criar objetos vazios, mas preservar estrutura
  let registros = {};
  let periodos = {};
  
  // Copiar dados originais se existirem
  if (dados.registros && typeof dados.registros === 'object' && !Array.isArray(dados.registros)) {
    registros = { ...dados.registros }; // Cópia profunda do objeto
  }
  if (dados.periodos && typeof dados.periodos === 'object' && !Array.isArray(dados.periodos)) {
    periodos = { ...dados.periodos }; // Cópia profunda do objeto
  }
  
  // Se por algum motivo forem arrays, converter para objetos vazios
  if (Array.isArray(registros)) {
    registros = {};
  }
  if (Array.isArray(periodos)) {
    periodos = {};
  }
  
  console.log('=== ANTES DE LIMPAR ===');
  console.log('Total de dias com registros:', Object.keys(registros).length);
  console.log('Total de dias com períodos:', Object.keys(periodos).length);
  console.log('Dias com registros:', Object.keys(registros));
  console.log('Dias com períodos:', Object.keys(periodos));
  
  // Remover apenas os dados de hoje, preservando os outros dias
  if (registros[hoje]) {
    delete registros[hoje];
    console.log('✓ Registros de hoje removidos');
  }
  if (periodos[hoje]) {
    delete periodos[hoje];
    console.log('✓ Períodos de hoje removidos');
  }
  
  console.log('=== APÓS REMOVER DADOS DE HOJE ===');
  console.log('Total de dias com registros (preservados):', Object.keys(registros).length);
  console.log('Total de dias com períodos (preservados):', Object.keys(periodos).length);
  console.log('Dias com registros preservados:', Object.keys(registros));
  console.log('Dias com períodos preservados:', Object.keys(periodos));
  
  // Verificar se há dados para preservar antes de salvar
  const temOutrosRegistros = Object.keys(registros).length > 0;
  const temOutrosPeriodos = Object.keys(periodos).length > 0;
  
  console.log('=== VERIFICAÇÃO ANTES DE SALVAR ===');
  console.log('Tem outros registros para preservar:', temOutrosRegistros);
  console.log('Tem outros períodos para preservar:', temOutrosPeriodos);
  
  // CRÍTICO: Verificar se não estamos apagando dados de outros dias
  // Comparar com os dados originais para garantir que estamos preservando
  const diasRegistrosOriginais = Object.keys(dados.registros || {}).filter(d => d !== hoje);
  const diasPeriodosOriginais = Object.keys(dados.periodos || {}).filter(d => d !== hoje);
  const diasRegistrosPreservados = Object.keys(registros);
  const diasPeriodosPreservados = Object.keys(periodos);
  
  console.log('Dias com registros originais (exceto hoje):', diasRegistrosOriginais);
  console.log('Dias com períodos originais (exceto hoje):', diasPeriodosOriginais);
  console.log('Dias com registros que serão salvos:', diasRegistrosPreservados);
  console.log('Dias com períodos que serão salvos:', diasPeriodosPreservados);
  
  // Verificar se estamos preservando todos os dias corretamente
  const todosRegistrosPreservados = diasRegistrosOriginais.every(d => diasRegistrosPreservados.includes(d));
  const todosPeriodosPreservados = diasPeriodosOriginais.every(d => diasPeriodosPreservados.includes(d));
  
  if (!todosRegistrosPreservados || !todosPeriodosPreservados) {
    console.error('⚠️ ERRO: Alguns dados não estão sendo preservados!');
    console.error('Registros preservados corretamente:', todosRegistrosPreservados);
    console.error('Períodos preservados corretamente:', todosPeriodosPreservados);
  }
  
  // Verificar se há dados para preservar
  const totalDiasRegistrosAntes = Object.keys(dados.registros || {}).length;
  const totalDiasPeriodosAntes = Object.keys(dados.periodos || {}).length;
  const totalDiasRegistrosDepois = Object.keys(registros).length;
  const totalDiasPeriodosDepois = Object.keys(periodos).length;
  
  console.log('=== COMPARAÇÃO ANTES/DEPOIS ===');
  console.log('Registros - Antes:', totalDiasRegistrosAntes, 'Depois:', totalDiasRegistrosDepois);
  console.log('Períodos - Antes:', totalDiasPeriodosAntes, 'Depois:', totalDiasPeriodosDepois);
  
  // Verificar se estamos preservando corretamente (deve ter 1 dia a menos, que é o de hoje)
  const diferencaRegistros = totalDiasRegistrosAntes - totalDiasRegistrosDepois;
  const diferencaPeriodos = totalDiasPeriodosAntes - totalDiasPeriodosDepois;
  
  // Se a diferença for maior que 1, significa que estamos apagando mais do que deveria
  if (diferencaRegistros > 1 || diferencaPeriodos > 1) {
    console.error('⚠️ ERRO CRÍTICO: Estamos apagando mais dados do que deveria!');
    console.error('Diferença em registros:', diferencaRegistros);
    console.error('Diferença em períodos:', diferencaPeriodos);
    // Não salvar se estivermos apagando mais do que deveria
    await showMessage('Erro: Não é possível limpar o histórico. Alguns dados podem ser perdidos.', 'Erro');
    return;
  }
  
  // Atualizar apenas registros e periodos do usuario atual
  dados.registros = registros;
  dados.periodos = periodos;
  await salvarDadosUsuario(dados);
  
  // Verificar se foi salvo corretamente
  const { dados: dataVerificacao } = await obterDadosUsuarioStorage();
  console.log('=== VERIFICAÇÃO APÓS SALVAR ===');
  console.log('Total de dias com registros salvos:', Object.keys(dataVerificacao.registros || {}).length);
  console.log('Total de dias com períodos salvos:', Object.keys(dataVerificacao.periodos || {}).length);
  console.log('Dias com registros salvos:', Object.keys(dataVerificacao.registros || {}));
  console.log('Dias com períodos salvos:', Object.keys(dataVerificacao.periodos || {}));
  
  // Verificar se os períodos foram preservados corretamente
  const periodosSalvos = dataVerificacao.periodos || {};
  const diasComPeriodos = Object.keys(periodosSalvos);
  console.log('Períodos preservados por dia:');
  diasComPeriodos.forEach(dia => {
    const periodosDoDia = periodosSalvos[dia] || [];
    const totalSegundosDoDia = periodosDoDia.reduce((sum, p) => {
      return sum + (Number(p.totalSegundos) || 0);
    }, 0);
    const horas = Math.floor(totalSegundosDoDia / 3600);
    const minutos = Math.floor((totalSegundosDoDia % 3600) / 60);
    console.log(`  - ${dia}: ${periodosDoDia.length} período(s) = ${horas}h ${minutos}min`);
  });
  
  // Resetar estado atual
  estado = 'aguardando';
  currentEntry = null;
  almocoSaida = null;
  almocoRetorno = null;
  
  // Atualizar interface
  atualizarInterface();
  await atualizarHistorico();
  
  // Aguardar um momento para garantir que os dados foram salvos completamente
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Calcular horas (isso vai atualizar "Horas de hoje" para 00:00 e "Total do mês" com os dados preservados)
  await calcularHoras();
  
  console.log('=== LIMPEZA CONCLUÍDA ===');
}

// Carregar tema salvo
async function loadTheme() {
  const data = await chrome.storage.local.get(['darkMode']);
  // Dark mode é o padrão (true se não estiver definido)
  const isDarkMode = data.darkMode !== false;
  
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
    if (themeIcon) {
      themeIcon.textContent = '☀️';
    }
    // Salvar a preferência se não existir
    if (data.darkMode === undefined) {
      await chrome.storage.local.set({ darkMode: true });
    }
  } else {
    document.body.classList.remove('dark-mode');
    if (themeIcon) {
      themeIcon.textContent = '🌙';
    }
  }
}

// Alternar tema
async function toggleTheme() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  
  if (isDarkMode) {
    document.body.classList.remove('dark-mode');
    if (themeIcon) {
      themeIcon.textContent = '🌙';
    }
    await chrome.storage.local.set({ darkMode: false });
  } else {
    document.body.classList.add('dark-mode');
    if (themeIcon) {
      themeIcon.textContent = '☀️';
    }
    await chrome.storage.local.set({ darkMode: true });
  }
}

// Exportar dados
async function exportarDados() {
  const { dados, userKey } = await obterDadosUsuarioStorage();
  
  const registros = dados.registros || {};
  const periodos = dados.periodos || {};
  const totaisDiarios = dados.totaisDiarios || {};
  const jornadaConfig = dados.jornadaConfig || {};
  const feriadosExport = Array.isArray(dados.feriados) ? dados.feriados : [];
  const auditLogs = Array.isArray(dados.auditLogs) ? dados.auditLogs : [];
  const hashInfo = await gerarHashEncadeadoPorDia(registros);
  const checksum = await gerarChecksumExport({
    userKey,
    registros,
    periodos,
    totaisDiarios,
    jornadaConfig,
    feriados: feriadosExport,
    auditLogs,
    hashesPorDia: hashInfo.dias
  });
  
  const exportData = {
    usuario: {
      chave: userKey,
      nome: usuarioNome || '',
      email: usuarioEmail || '',
      provider: usuarioProvider || 'local'
    },
    registros,
    periodos,
    totaisDiarios,
    jornadaConfig,
    ultimaLocalizacao: dados.ultimaLocalizacao || null,
    feriados: feriadosExport,
    auditLogs,
    integridade: {
      hashesPorDia: hashInfo.dias,
      checksum,
      geradoEm: new Date().toISOString()
    },
    exportadoEm: new Date().toISOString()
  };
  
  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `controle-ponto-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

async function exportarEspelhoJSON() {
  const { dados, userKey } = await obterDadosUsuarioStorage();
  const registros = normalizarObjeto(dados.registros);
  const periodos = normalizarObjeto(dados.periodos);
  const totaisDiarios = normalizarObjeto(dados.totaisDiarios);
  const feriadosExport = Array.isArray(dados.feriados) ? dados.feriados : [];
  const auditLogs = Array.isArray(dados.auditLogs) ? dados.auditLogs : [];
  const hashInfo = await gerarHashEncadeadoPorDia(registros);
  const checksum = await gerarChecksumExport({
    userKey,
    registros,
    periodos,
    totaisDiarios,
    jornadaConfig: dados.jornadaConfig || {},
    feriados: feriadosExport,
    auditLogs,
    hashesPorDia: hashInfo.dias
  });

  const dias = Array.from(new Set([
    ...Object.keys(registros),
    ...Object.keys(periodos),
    ...Object.keys(totaisDiarios)
  ])).sort();

  const detalhesDias = dias.map(dataKey => ({
    data: dataKey,
    registros: registros[dataKey] || [],
    periodos: periodos[dataKey] || [],
    totalSegundos: obterTotalSegundosDia(dataKey, totaisDiarios, periodos)
  }));

  const totalSegundos = calcularTotalSegundos(periodos, totaisDiarios);

  const exportData = {
    tipo: 'espelho_provisorio',
    usuario: {
      chave: userKey,
      nome: usuarioNome || '',
      email: usuarioEmail || '',
      provider: usuarioProvider || 'local'
    },
    resumo: {
      totalDias: dias.length,
      totalSegundos,
      totalHoras: formatarHorasMinutos(totalSegundos)
    },
    dias: detalhesDias,
    registros,
    periodos,
    totaisDiarios,
    jornadaConfig: dados.jornadaConfig || {},
    ultimaLocalizacao: dados.ultimaLocalizacao || null,
    feriados: feriadosExport,
    auditLogs,
    integridade: {
      hashesPorDia: hashInfo.dias,
      checksum,
      geradoEm: new Date().toISOString()
    },
    exportadoEm: new Date().toISOString()
  };

  const { privateKey, publicKeyJwk } = await obterChavesEspelho();
  const assinaturaBuffer = await crypto.subtle.sign(
    { name: 'ECDSA', hash: 'SHA-256' },
    privateKey,
    new TextEncoder().encode(checksum)
  );
  exportData.assinaturaDigital = {
    algoritmo: 'ECDSA_P256_SHA256',
    hashAssinado: checksum,
    assinatura: bufferToBase64(assinaturaBuffer),
    chavePublicaJwk: publicKeyJwk,
    assinadoEm: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `espelho-ponto-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function csvEscape(value) {
  if (value === null || value === undefined) {
    return '';
  }
  const str = String(value);
  if (/[",\n]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

async function exportarCSVComPrefixo(prefixo) {
  const { dados } = await obterDadosUsuarioStorage();
  const registros = dados.registros || {};
  const periodos = dados.periodos || {};
  const auditLogs = Array.isArray(dados.auditLogs) ? dados.auditLogs : [];
  const hashInfo = await gerarHashEncadeadoPorDia(registros);
  const checksum = await gerarChecksumExport({
    userKey: obterUsuarioChave(),
    registros,
    periodos,
    totaisDiarios: dados.totaisDiarios || {},
    jornadaConfig: dados.jornadaConfig || {},
    feriados: Array.isArray(dados.feriados) ? dados.feriados : [],
    auditLogs,
    hashesPorDia: hashInfo.dias
  });

  const headers = [
    'categoria',
    'data',
    'tipo',
    'usuario',
    'usuarioProvider',
    'usuarioEmail',
    'timestamp',
    'hora',
    'entrada',
    'saida',
    'horas',
    'minutos',
    'teveAlmoco',
    'totalSegundos',
    'cidade',
    'latitude',
    'longitude',
    'auditAcao',
    'auditMotivo',
    'auditAlteradoEm',
    'auditData',
    'auditAntes',
    'auditDepois',
    'auditConsentimento',
    'auditConsentimentoEm',
    'hashDiaFinal',
    'hashDiaTotalRegistros',
    'checksumExport'
  ];

  const col = {
    categoria: 0,
    data: 1,
    tipo: 2,
    usuario: 3,
    usuarioProvider: 4,
    usuarioEmail: 5,
    timestamp: 6,
    hora: 7,
    entrada: 8,
    saida: 9,
    horas: 10,
    minutos: 11,
    teveAlmoco: 12,
    totalSegundos: 13,
    cidade: 14,
    latitude: 15,
    longitude: 16,
    auditAcao: 17,
    auditMotivo: 18,
    auditAlteradoEm: 19,
    auditData: 20,
    auditAntes: 21,
    auditDepois: 22,
    auditConsentimento: 23,
    auditConsentimentoEm: 24,
    hashDiaFinal: 25,
    hashDiaTotalRegistros: 26,
    checksumExport: 27
  };

  const rows = [headers];
  const criarLinha = () => new Array(headers.length).fill('');
  const datas = new Set([...Object.keys(registros), ...Object.keys(periodos)]);
  const datasOrdenadas = Array.from(datas).sort();

  datasOrdenadas.forEach(dataKey => {
    const registrosDoDia = registros[dataKey] || [];
    registrosDoDia.forEach(reg => {
      const localizacao = reg.localizacao || {};
      const row = criarLinha();
      row[col.categoria] = 'registro';
      row[col.data] = dataKey;
      row[col.tipo] = reg.tipo || '';
      row[col.usuario] = reg.usuario || '';
      row[col.usuarioProvider] = reg.usuarioProvider || '';
      row[col.usuarioEmail] = reg.usuarioEmail || '';
      row[col.timestamp] = reg.timestamp || '';
      row[col.hora] = reg.hora || '';
      row[col.cidade] = localizacao.cidade || '';
      row[col.latitude] = localizacao.latitude ?? '';
      row[col.longitude] = localizacao.longitude ?? '';
      rows.push(row);
    });

    const periodosDoDia = periodos[dataKey] || [];
    periodosDoDia.forEach(periodo => {
      const row = criarLinha();
      row[col.categoria] = 'periodo';
      row[col.data] = dataKey;
      row[col.entrada] = periodo.entrada || '';
      row[col.saida] = periodo.saida || '';
      row[col.horas] = periodo.horas ?? '';
      row[col.minutos] = periodo.minutos ?? '';
      row[col.teveAlmoco] = periodo.teveAlmoco ?? '';
      row[col.totalSegundos] = periodo.totalSegundos ?? '';
      rows.push(row);
    });
  });

  if (auditLogs.length > 0) {
    const logsOrdenados = [...auditLogs].sort((a, b) => {
      return new Date(a.alteradoEm) - new Date(b.alteradoEm);
    });
    logsOrdenados.forEach(log => {
      const alteradoEm = log.alteradoEm || '';
      const horaAlteracao = alteradoEm
        ? new Date(alteradoEm).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        : '';
      const row = criarLinha();
      row[col.categoria] = 'auditoria';
      row[col.data] = log.data || '';
      row[col.tipo] = log.acao || '';
      row[col.usuario] = log.alteradoPor?.usuario || '';
      row[col.usuarioProvider] = log.alteradoPor?.provider || '';
      row[col.usuarioEmail] = log.alteradoPor?.email || '';
      row[col.timestamp] = alteradoEm;
      row[col.hora] = horaAlteracao;
      row[col.auditAcao] = log.acao || '';
      row[col.auditMotivo] = log.motivo || '';
      row[col.auditAlteradoEm] = alteradoEm;
      row[col.auditData] = log.data || '';
      row[col.auditAntes] = resumoRegistroAuditoria(log.antes);
      row[col.auditDepois] = resumoRegistroAuditoria(log.depois);
      row[col.auditConsentimento] = log.consentimento ? 'Sim' : 'Não';
      row[col.auditConsentimentoEm] = log.consentimentoEm || '';
      rows.push(row);
    });
  }

  Object.entries(hashInfo.dias || {}).forEach(([dataKey, info]) => {
    const row = criarLinha();
    row[col.categoria] = 'hash_dia';
    row[col.data] = dataKey;
    row[col.hashDiaFinal] = info.hashFinal || '';
    row[col.hashDiaTotalRegistros] = info.totalRegistros != null ? String(info.totalRegistros) : '';
    rows.push(row);
  });

  const checksumRow = criarLinha();
  checksumRow[col.categoria] = 'checksum';
  checksumRow[col.checksumExport] = checksum || '';
  rows.push(checksumRow);

  const csvContent = rows.map(row => row.map(csvEscape).join(',')).join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${prefixo}-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
async function exportarCSV() {
  await exportarCSVComPrefixo('controle-ponto');
}

async function exportarAFDCSV() {
  await exportarCSVComPrefixo('afd-provisorio');
}

async function exportarBackup() {
  const data = await chrome.storage.local.get(null);
  const exportData = {
    ...data,
    exportadoEm: new Date().toISOString()
  };

  const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `backup-controle-ponto-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function extrairDadosBackup(raw) {
  if (!raw || typeof raw !== 'object') {
    return null;
  }
  if (raw.userDataEncrypted || raw.userData || raw.registros || raw.periodos || raw.totaisDiarios || raw.jornadaConfig || raw.darkMode) {
    return raw;
  }
  if (raw.backup && typeof raw.backup === 'object') {
    return raw.backup;
  }
  return null;
}

function normalizarUserData(raw) {
  const base = normalizarObjeto(raw);
  const resultado = {};
  Object.entries(base).forEach(([key, value]) => {
    resultado[key] = normalizarDadosUsuario(value);
  });
  return resultado;
}

async function restaurarBackup(data) {
  const dados = extrairDadosBackup(data);
  if (!dados) {
    await showMessage('Arquivo de backup invalido.', 'Backup');
    return;
  }

  if (!(await showConfirm('Restaurar este backup substituira seus registros atuais. Deseja continuar?', 'Confirmar'))) {
    return;
  }

  const atuais = await chrome.storage.local.get([
    'loginPasswordHash',
    'loginPasswordSalt',
    'loginPasswordIterations',
    'loginPasswordDefault',
    'cryptoEnabled',
    'cryptoSalt',
    'cryptoIterations',
    'cryptoDeviceKeys',
    'userProfile',
    'darkMode',
    'userData',
    'userDataEncrypted'
  ]);

  const backupTemLogin = Boolean(dados.loginPasswordHash && dados.loginPasswordSalt);
  const atualTemLogin = Boolean(atuais.loginPasswordHash && atuais.loginPasswordSalt);

  const chavesLegadas = [
    'registros',
    'periodos',
    'totaisDiarios',
    'jornadaConfig',
    'ultimaLocalizacao',
    'feriados'
  ];
  const chaves = [
    'editPasswordHash',
    'editPasswordSalt',
    'editPasswordIterations',
    'userProfile',
    'loginPasswordHash',
    'loginPasswordSalt',
    'loginPasswordIterations',
    'loginPasswordDefault',
    'cryptoEnabled',
    'cryptoSalt',
    'cryptoIterations',
    'cryptoDeviceKeys'
  ];
  const dadosParaSalvar = {};
  chaves.forEach(chave => {
    if (dados[chave] !== undefined) {
      dadosParaSalvar[chave] = dados[chave];
    }
  });

  if (dados.userDataEncrypted && typeof dados.userDataEncrypted === 'object') {
    dadosParaSalvar.userDataEncrypted = normalizarObjeto(dados.userDataEncrypted);
    dadosParaSalvar.legacyMigrated = true;
  } else if (dados.userData && typeof dados.userData === 'object') {
    dadosParaSalvar.userData = normalizarUserData(dados.userData);
    dadosParaSalvar.legacyMigrated = true;
  } else if (contemDadosLegados(dados)) {
    const userKey = obterUsuarioChave();
    const userDataAtual = normalizarObjeto(atuais.userData);
    userDataAtual[userKey] = normalizarDadosUsuario({
      registros: dados.registros,
      periodos: dados.periodos,
      totaisDiarios: dados.totaisDiarios,
      jornadaConfig: dados.jornadaConfig,
      feriados: dados.feriados,
      ultimaLocalizacao: dados.ultimaLocalizacao
    });
    dadosParaSalvar.userData = userDataAtual;
    dadosParaSalvar.legacyMigrated = true;
  }

  if (!backupTemLogin && atualTemLogin) {
    dadosParaSalvar.loginPasswordHash = atuais.loginPasswordHash;
    dadosParaSalvar.loginPasswordSalt = atuais.loginPasswordSalt;
    if (atuais.loginPasswordIterations !== undefined) {
      dadosParaSalvar.loginPasswordIterations = atuais.loginPasswordIterations;
    }
  }

  if (dadosParaSalvar.loginPasswordDefault === undefined) {
    if (backupTemLogin || atualTemLogin) {
      dadosParaSalvar.loginPasswordDefault = false;
    } else if (atuais.loginPasswordDefault !== undefined) {
      dadosParaSalvar.loginPasswordDefault = atuais.loginPasswordDefault;
    }
  }

  if (dadosParaSalvar.userProfile === undefined && atuais.userProfile) {
    dadosParaSalvar.userProfile = atuais.userProfile;
  }

  if (atuais.darkMode !== undefined) {
    dadosParaSalvar.darkMode = atuais.darkMode;
  }

  if (dadosParaSalvar.cryptoEnabled === undefined && atuais.cryptoEnabled !== undefined) {
    dadosParaSalvar.cryptoEnabled = atuais.cryptoEnabled;
  }
  if (dadosParaSalvar.cryptoSalt === undefined && atuais.cryptoSalt) {
    dadosParaSalvar.cryptoSalt = atuais.cryptoSalt;
  }
  if (dadosParaSalvar.cryptoIterations === undefined && atuais.cryptoIterations !== undefined) {
    dadosParaSalvar.cryptoIterations = atuais.cryptoIterations;
  }
  if (dadosParaSalvar.cryptoDeviceKeys === undefined && atuais.cryptoDeviceKeys) {
    dadosParaSalvar.cryptoDeviceKeys = atuais.cryptoDeviceKeys;
  }

  await chrome.storage.local.remove([...chavesLegadas, 'userData', 'userDataEncrypted']);
  await chrome.storage.local.set(dadosParaSalvar);

  await loadTheme();
  await carregarUsuario();
  await carregarSenhaEdicao();
  await showMessage('Backup restaurado com sucesso.', 'Backup');
}

// Função de debug para verificar storage (pode ser chamada no console)
async function debugStorage() {
  console.log('=== DEBUG STORAGE ===');
  const allData = await chrome.storage.local.get(null);
  console.log('Todos os dados no storage:', allData);
  console.log('Registros:', allData.registros);
  console.log('Períodos:', allData.periodos);
  console.log('Totais diários:', allData.totaisDiarios);
  console.log('Dark Mode:', allData.darkMode);
  
  // Verificar se são objetos vazios
  if (allData.registros && Object.keys(allData.registros).length === 0) {
    console.warn('⚠️ AVISO: Registros está vazio!');
  }
  if (allData.periodos && Object.keys(allData.periodos).length === 0) {
    console.warn('⚠️ AVISO: Períodos está vazio!');
  }
  
  // Mostrar estrutura detalhada
  if (allData.registros && Object.keys(allData.registros).length > 0) {
    console.log('\n=== REGISTROS ===');
    Object.keys(allData.registros).forEach(data => {
      console.log(`Data: ${data}`, allData.registros[data]);
    });
  } else {
    console.log('\n=== REGISTROS === (vazio)');
  }
  
  if (allData.periodos && Object.keys(allData.periodos).length > 0) {
    console.log('\n=== PERÍODOS ===');
    Object.keys(allData.periodos).forEach(data => {
      console.log(`Data: ${data}`, allData.periodos[data]);
    });
  } else {
    console.log('\n=== PERÍODOS === (vazio)');
  }
  
  console.log('\n=== FIM DEBUG ===');
  return allData;
}

// Função para testar salvamento
async function testarSalvamento() {
  console.log('=== TESTE DE SALVAMENTO ===');
  const hoje = new Date().toISOString().split('T')[0];
  
  // Criar um registro de teste
  const registroTeste = {
    tipo: 'entrada',
    timestamp: new Date().toISOString()
  };
  
  console.log('Salvando registro de teste:', registroTeste);
  await salvarRegistro(registroTeste);
  
  // Verificar se foi salvo
  const { dados } = await obterDadosUsuarioStorage();
  console.log('Dados após salvar:', dados);
  console.log('Registros de hoje:', dados.registros?.[hoje]);
  
  return dados;
}

// Tornar as funções acessíveis globalmente para debug
window.debugStorage = debugStorage;
window.testarSalvamento = testarSalvamento;
