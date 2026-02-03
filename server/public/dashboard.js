const els = {
  streamStatus: document.getElementById('streamStatus'),
  streamDot: document.getElementById('streamDot'),
  themeToggleBtn: document.getElementById('themeToggleBtn'),
  refreshBtn: document.getElementById('refreshBtn'),
  activeSessions: document.getElementById('activeSessions'),
  activeSessionsMeta: document.getElementById('activeSessionsMeta'),
  loginsToday: document.getElementById('loginsToday'),
  lastEventAt: document.getElementById('lastEventAt'),
  filterQuery: document.getElementById('filterQuery'),
  filterType: document.getElementById('filterType'),
  filterProvider: document.getElementById('filterProvider'),
  filterSince: document.getElementById('filterSince'),
  filterUntil: document.getElementById('filterUntil'),
  applyFiltersBtn: document.getElementById('applyFiltersBtn'),
  clearFiltersBtn: document.getElementById('clearFiltersBtn'),
  exportBtn: document.getElementById('exportBtn'),
  logoutBtn: document.getElementById('logoutBtn'),
  loadingOverlay: document.getElementById('loadingOverlay'),
  loadingText: document.getElementById('loadingText'),
  loginOverlay: document.getElementById('loginOverlay'),
  loginHint: document.getElementById('loginHint'),
  loginUser: document.getElementById('loginUser'),
  loginPass: document.getElementById('loginPass'),
  loginBtn: document.getElementById('loginBtn'),
  loginError: document.getElementById('loginError'),
  activeUsers: document.getElementById('activeUsers'),
  activeUsersNote: document.getElementById('activeUsersNote'),
  eventsBody: document.getElementById('eventsBody'),
  eventsCount: document.getElementById('eventsCount'),
  loadMoreBtn: document.getElementById('loadMoreBtn'),
  tabButtons: document.querySelectorAll('.tab-btn'),
  tabPanels: document.querySelectorAll('.tab-panel'),
  pointsNote: document.getElementById('pointsNote'),
  jsonFileInput: document.getElementById('jsonFileInput'),
  uploadStatus: document.getElementById('uploadStatus'),
  pointsDetail: document.getElementById('pointsDetail'),
  pointsEmpty: document.getElementById('pointsEmpty'),
  pointsData: document.getElementById('pointsData'),
  pointsUser: document.getElementById('pointsUser'),
  pointsMeta: document.getElementById('pointsMeta'),
  pointsSummary: document.getElementById('pointsSummary'),
  pointsTableBody: document.getElementById('pointsTableBody'),
  pointsRaw: document.getElementById('pointsRaw'),
  pointsRawWrap: document.getElementById('pointsRawWrap'),
  downloadJsonBtn: document.getElementById('downloadJsonBtn'),
  reportPdfBtn: document.getElementById('reportPdfBtn'),
  downloadCsvBtn: document.getElementById('downloadCsvBtn')
};

const state = {
  events: [],
  offset: 0,
  limit: 100,
  filters: {},
  selectedUserKey: '',
  userJson: null
};

const newEventIds = new Set();
let eventSource = null;
let apiKey = '';
let dashboardToken = '';
let authConfig = {
  loginRequired: false,
  apiKeyRequired: false,
  defaultUser: ''
};
let refreshTimer = null;
let dashboardStarted = false;
let autoRefreshTimer = null;
const AUTO_REFRESH_MS = 30000;

const TYPE_LABELS = {
  login_success: 'Login',
  session_resume: 'Sessão',
  login_failure: 'Falha',
  logout: 'Logout',
  ponto_registro: 'Ponto',
  alerta: 'Alerta'
};

const TYPE_CLASS = {
  login_success: 'login',
  session_resume: 'session',
  login_failure: 'failure',
  logout: 'logout',
  ponto_registro: 'ponto',
  alerta: 'alerta'
};
const REGISTRO_LABELS = {
  entrada: 'Entrada',
  saida_almoco: 'Saída almoço',
  retorno_almoco: 'Retorno almoço',
  saida: 'Saída'
};
const ALERTA_LABELS = {
  fim_jornada: 'Fim da jornada',
  sem_saida: 'Sem saída'
};
const LOGIN_FAILURE_REASONS = {
  user_not_found: 'Usuário não encontrado',
  user_not_registered: 'Usuário não cadastrado',
  invalid_password: 'Senha incorreta',
  crypto_unlock_failed: 'Falha ao desbloquear dados',
  google_oauth_not_configured: 'OAuth Google não configurado',
  google_token_failed: 'Falha ao obter token Google',
  google_profile_failed: 'Falha ao buscar perfil Google'
};
const SCROLL_LOCK_MIN = 12;
const ACTIVE_USERS_SCROLL_MIN = 30;
const THEME_STORAGE_KEY = 'monitor_theme';

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatDateTime(iso) {
  if (!iso) {
    return '--';
  }
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return iso;
  }
  return date.toLocaleString('pt-BR');
}

function formatTimeShort(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) {
    return '--:--';
  }
  return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
}

function formatDateShort(value) {
  if (!value) {
    return '--';
  }
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString('pt-BR');
}

function setStreamStatus(status, text) {
  if (!els.streamStatus || !els.streamDot) {
    return;
  }
  const wrapper = els.streamStatus.closest('.status');
  if (wrapper) {
    wrapper.classList.remove('online', 'error');
    if (status === 'online') {
      wrapper.classList.add('online');
    }
    if (status === 'error') {
      wrapper.classList.add('error');
    }
  }
  els.streamStatus.textContent = text;
}

function setLoadingVisible(show, message) {
  if (!els.loadingOverlay) {
    return;
  }
  els.loadingOverlay.classList.toggle('open', show);
  els.loadingOverlay.setAttribute('aria-hidden', show ? 'false' : 'true');
  if (els.loadingText && message) {
    els.loadingText.textContent = message;
  }
}

function applyTheme(mode) {
  const isDark = mode === 'dark';
  document.body.classList.toggle('dark-mode', isDark);
  if (els.themeToggleBtn) {
    els.themeToggleBtn.textContent = isDark ? '☀️' : '🌙';
    els.themeToggleBtn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }
}

function initTheme() {
  const saved = window.localStorage.getItem(THEME_STORAGE_KEY) || 'light';
  applyTheme(saved);
}

function toggleTheme() {
  const isDark = document.body.classList.contains('dark-mode');
  const next = isDark ? 'light' : 'dark';
  window.localStorage.setItem(THEME_STORAGE_KEY, next);
  applyTheme(next);
}

function setActiveTab(tabName) {
  if (!els.tabButtons || !els.tabPanels) {
    return;
  }
  els.tabButtons.forEach(button => {
    const isActive = button.dataset.tab === tabName;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', isActive ? 'true' : 'false');
  });
  els.tabPanels.forEach(panel => {
    const isActive = panel.dataset.tab === tabName;
    panel.classList.toggle('active', isActive);
    panel.setAttribute('aria-hidden', isActive ? 'false' : 'true');
  });
}

function readFilters() {
  return {
    q: els.filterQuery?.value.trim() || '',
    type: els.filterType?.value || '',
    provider: els.filterProvider?.value || '',
    since: els.filterSince?.value ? new Date(els.filterSince.value).toISOString() : '',
    until: els.filterUntil?.value ? new Date(els.filterUntil.value).toISOString() : ''
  };
}

function buildQuery(params) {
  const url = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.set(key, value);
    }
  });
  if (dashboardToken) {
    url.set('dash_token', dashboardToken);
  }
  if (apiKey) {
    url.set('api_key', apiKey);
  }
  return url.toString();
}

function buildAuthHeaders() {
  const headers = {};
  if (dashboardToken) {
    headers['X-Dashboard-Token'] = dashboardToken;
  }
  if (apiKey) {
    headers['X-API-Key'] = apiKey;
  }
  return headers;
}

function apiFetch(path, params) {
  const query = buildQuery(params || {});
  const url = query ? `${path}?${query}` : path;
  return fetch(url, { headers: buildAuthHeaders() }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    return response.json();
  });
}

function matchesFilters(event, filters) {
  if (filters.type && event.type !== filters.type) {
    return false;
  }
  if (filters.provider && event.user?.provider !== filters.provider) {
    return false;
  }
  if (filters.since) {
    const since = new Date(filters.since).getTime();
    if (new Date(event.ts).getTime() < since) {
      return false;
    }
  }
  if (filters.until) {
    const until = new Date(filters.until).getTime();
    if (new Date(event.ts).getTime() > until) {
      return false;
    }
  }
  if (filters.q) {
    const haystack = [
      event.user?.name,
      event.user?.email,
      event.user?.key,
      event.device?.name,
      event.device?.id,
      event.ip
    ]
      .filter(Boolean)
      .join(' ')
      .toLowerCase();
    if (!haystack.includes(filters.q.toLowerCase())) {
      return false;
    }
  }
  return true;
}

function formatDuration(seconds) {
  const total = Number(seconds);
  if (!Number.isFinite(total) || total <= 0) {
    return '';
  }
  const horas = Math.floor(total / 3600);
  const minutos = Math.floor((total % 3600) / 60);
  const partes = [];
  if (horas) {
    partes.push(`${horas}h`);
  }
  if (minutos || !horas) {
    partes.push(`${minutos}m`);
  }
  return partes.join(' ');
}

function formatDurationLabel(seconds) {
  const label = formatDuration(seconds);
  return label || '0m';
}

function getTotalSegundosDia(totalDia, periodos) {
  if (totalDia !== undefined && totalDia !== null) {
    if (typeof totalDia === 'object') {
      return Number(totalDia.totalSegundos) || 0;
    }
    return Number(totalDia) || 0;
  }
  if (!Array.isArray(periodos)) {
    return 0;
  }
  return periodos.reduce((sum, p) => {
    if (p.totalSegundos !== undefined && p.totalSegundos !== null) {
      return sum + (Number(p.totalSegundos) || 0);
    }
    const horas = Number(p.horas) || 0;
    const minutos = Number(p.minutos) || 0;
    return sum + (horas * 3600) + (minutos * 60);
  }, 0);
}

function buildPeriodsLabel(periodos) {
  if (!Array.isArray(periodos) || periodos.length === 0) {
    return '-';
  }
  return periodos
    .map(periodo => {
      const entrada = formatTimeShort(periodo.entrada);
      const saida = formatTimeShort(periodo.saida);
      return `${entrada} - ${saida}`;
    })
    .join(' | ');
}

function extractUserInfo(data, fallbackKey) {
  const user = data?.usuario || data?.user || {};
  return {
    key: user.chave || user.key || fallbackKey || '',
    name: user.nome || user.name || '',
    email: user.email || '',
    provider: user.provider || ''
  };
}

function extractDaysFromJson(data) {
  if (!data || typeof data !== 'object') {
    return [];
  }
  if (Array.isArray(data.dias)) {
    return data.dias
      .map(day => ({
        date: day.data || '',
        periodos: Array.isArray(day.periodos) ? day.periodos : [],
        totalSegundos: Number(day.totalSegundos) || 0
      }))
      .filter(day => day.date);
  }

  const periodos = data.periodos && typeof data.periodos === 'object' ? data.periodos : {};
  const totaisDiarios = data.totaisDiarios && typeof data.totaisDiarios === 'object' ? data.totaisDiarios : {};
  const registros = data.registros && typeof data.registros === 'object' ? data.registros : {};
  const keys = new Set([
    ...Object.keys(periodos),
    ...Object.keys(totaisDiarios),
    ...Object.keys(registros)
  ]);
  return Array.from(keys)
    .sort()
    .map(date => {
      const periodosDia = Array.isArray(periodos[date]) ? periodos[date] : [];
      const totalSegundos = getTotalSegundosDia(totaisDiarios[date], periodosDia);
      return { date, periodos: periodosDia, totalSegundos };
    });
}

function setPointsMessage(message) {
  if (els.pointsEmpty) {
    els.pointsEmpty.textContent = message;
  }
}

function setUploadStatus(message, isError = false) {
  if (!els.uploadStatus) {
    return;
  }
  els.uploadStatus.textContent = message || '';
  els.uploadStatus.classList.toggle('error', isError);
}

function clearPointsView() {
  if (els.pointsData) {
    els.pointsData.hidden = true;
  }
  if (els.pointsEmpty) {
    els.pointsEmpty.hidden = false;
    els.pointsEmpty.textContent = 'Carregue um arquivo JSON para visualizar horários.';
  }
  setUploadStatus('');
  if (els.jsonFileInput) {
    els.jsonFileInput.value = '';
  }
  if (els.downloadJsonBtn) {
    els.downloadJsonBtn.disabled = true;
  }
  if (els.reportPdfBtn) {
    els.reportPdfBtn.disabled = true;
  }
  if (els.downloadCsvBtn) {
    els.downloadCsvBtn.disabled = true;
  }
  if (els.pointsSummary) {
    els.pointsSummary.innerHTML = '';
  }
  if (els.pointsTableBody) {
    els.pointsTableBody.innerHTML = '';
  }
  if (els.pointsRaw) {
    els.pointsRaw.textContent = 'Carregue um JSON para visualizar o conteudo completo.';
  }
  if (els.pointsUser) {
    els.pointsUser.textContent = 'Usuário';
  }
  if (els.pointsMeta) {
    els.pointsMeta.textContent = '';
  }
  if (els.pointsRawWrap) {
    els.pointsRawWrap.hidden = true;
  }
  state.selectedUserKey = '';
  state.userJson = null;
}

function normalizeDownloadName(value) {
  return String(value || 'controle-ponto')
    .replace(/[\\/:*?"<>|]+/g, '_')
    .replace(/\s+/g, '_')
    .slice(0, 120);
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

function buildDataMapsFromJson(data) {
  const registros = data?.registros && typeof data.registros === 'object' ? { ...data.registros } : {};
  const periodos = data?.periodos && typeof data.periodos === 'object' ? { ...data.periodos } : {};
  if (Array.isArray(data?.dias)) {
    data.dias.forEach(dia => {
      if (!dia || !dia.data) {
        return;
      }
      if (!Array.isArray(registros[dia.data]) && Array.isArray(dia.registros)) {
        registros[dia.data] = dia.registros;
      }
      if (!Array.isArray(periodos[dia.data]) && Array.isArray(dia.periodos)) {
        periodos[dia.data] = dia.periodos;
      }
    });
  }
  return { registros, periodos };
}

function resumoRegistroAuditoria(registro) {
  if (!registro) {
    return '-';
  }
  const tipo = registro.tipo || 'Registro';
  const hora = registro.hora || (registro.timestamp
    ? new Date(registro.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    : '');
  const data = registro.timestamp ? new Date(registro.timestamp).toISOString().split('T')[0] : '';
  const partes = [tipo, hora, data].filter(Boolean);
  return partes.length ? partes.join(' | ') : '-';
}

function renderPointsData(userKey, data) {
  if (!els.pointsData || !els.pointsEmpty) {
    return;
  }
  const user = extractUserInfo(data, userKey);
  const displayName = user.name || user.email || user.key || userKey || 'Usuário';
  const provider = user.provider ? ` (${user.provider})` : '';
  if (els.pointsUser) {
    els.pointsUser.textContent = `${displayName}${provider}`;
  }
  const metaParts = [];
  if (user.email) {
    metaParts.push(user.email);
  }
  if (user.key) {
    metaParts.push(user.key);
  }
  const exportadoEm = data.exportadoEm || data.integridade?.geradoEm || '';
  if (exportadoEm) {
    metaParts.push(`Exportado: ${formatDateTime(exportadoEm)}`);
  }
  if (els.pointsMeta) {
    els.pointsMeta.textContent = metaParts.join(' · ');
  }

  const days = extractDaysFromJson(data);
  const totalSegundosFromResumo = Number(data?.resumo?.totalSegundos) || 0;
  const totalSegundos = totalSegundosFromResumo
    || days.reduce((sum, day) => sum + (Number(day.totalSegundos) || 0), 0);
  const totalDias = Number(data?.resumo?.totalDias) || days.length;
  const totalHoras = data?.resumo?.totalHoras || formatDurationLabel(totalSegundos);
  const origem = data?.tipo ? String(data.tipo) : 'export';

  if (els.pointsSummary) {
    els.pointsSummary.innerHTML = `
      <div class="card">
        <div class="card-label">Dias</div>
        <div class="card-value">${totalDias}</div>
      </div>
      <div class="card">
        <div class="card-label">Total</div>
        <div class="card-value">${escapeHtml(totalHoras)}</div>
      </div>
      <div class="card">
        <div class="card-label">Origem</div>
        <div class="card-value">${escapeHtml(origem)}</div>
      </div>
    `;
  }

  if (els.pointsTableBody) {
    if (!days.length) {
      els.pointsTableBody.innerHTML = '<tr><td colspan="3">Sem registros no JSON.</td></tr>';
    } else {
      els.pointsTableBody.innerHTML = days
        .map(day => {
          const periodosLabel = buildPeriodsLabel(day.periodos);
          const totalLabel = formatDurationLabel(day.totalSegundos);
          return `
            <tr>
              <td>${escapeHtml(formatDateShort(day.date))}</td>
              <td>${escapeHtml(periodosLabel)}</td>
              <td>${escapeHtml(totalLabel)}</td>
            </tr>
          `;
        })
        .join('');
    }
  }

  if (els.pointsRaw) {
    els.pointsRaw.textContent = JSON.stringify(data, null, 2);
  }
  if (els.pointsRawWrap) {
    els.pointsRawWrap.hidden = false;
  }

  if (els.downloadJsonBtn) {
    els.downloadJsonBtn.disabled = false;
  }
  if (els.reportPdfBtn) {
    els.reportPdfBtn.disabled = false;
  }
  if (els.downloadCsvBtn) {
    els.downloadCsvBtn.disabled = false;
  }
  els.pointsEmpty.hidden = true;
  els.pointsData.hidden = false;
}

function readJsonFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error('file_read_failed'));
    reader.readAsText(file, 'utf-8');
  });
}

async function loadJsonFromFile(file) {
  if (!file) {
    setUploadStatus('Selecione um arquivo JSON.', true);
    return;
  }
  setUploadStatus(`Lendo ${file.name}...`);
  setPointsMessage('Carregando JSON...');
  if (els.pointsData) {
    els.pointsData.hidden = true;
  }
  if (els.pointsEmpty) {
    els.pointsEmpty.hidden = false;
  }
  try {
    const text = await readJsonFile(file);
    const data = JSON.parse(String(text || ''));
    state.userJson = data;
    const user = extractUserInfo(data, '');
    state.selectedUserKey = user.key || '';
    window.localStorage.setItem('monitor_report_json', JSON.stringify(data));
    renderPointsData(state.selectedUserKey, data);
    setUploadStatus('JSON carregado.');
  } catch (error) {
    setUploadStatus('Arquivo JSON inválido.', true);
    setPointsMessage('Arquivo JSON inválido.');
  }
}

function buildCsvFromJson(data) {
  const { registros, periodos } = buildDataMapsFromJson(data || {});
  const auditLogs = Array.isArray(data?.auditLogs) ? data.auditLogs : [];
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

  const col = Object.fromEntries(headers.map((name, index) => [name, index]));
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
    const logsOrdenados = [...auditLogs].sort((a, b) => new Date(a.alteradoEm) - new Date(b.alteradoEm));
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
      row[col.auditConsentimento] = log.consentimento ? 'Sim' : 'Nao';
      row[col.auditConsentimentoEm] = log.consentimentoEm || '';
      rows.push(row);
    });
  }

  const hashesPorDia = data?.integridade?.hashesPorDia || {};
  Object.entries(hashesPorDia).forEach(([dataKey, info]) => {
    const row = criarLinha();
    row[col.categoria] = 'hash_dia';
    row[col.data] = dataKey;
    row[col.hashDiaFinal] = info?.hashFinal || '';
    row[col.hashDiaTotalRegistros] = info?.totalRegistros != null ? String(info.totalRegistros) : '';
    rows.push(row);
  });

  const checksum = data?.integridade?.checksum
    || data?.integridade?.checksumExport
    || data?.assinaturaDigital?.hashAssinado
    || '';
  const checksumRow = criarLinha();
  checksumRow[col.categoria] = 'checksum';
  checksumRow[col.checksumExport] = checksum;
  rows.push(checksumRow);

  return rows.map(row => row.map(csvEscape).join(',')).join('\n');
}

function baixarCsvDoJson(data) {
  const csvContent = buildCsvFromJson(data);
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const user = extractUserInfo(data, '');
  const prefixo = normalizeDownloadName(user.key || 'controle-ponto');
  const fileName = `${prefixo}-${new Date().toISOString().split('T')[0]}.csv`;
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function formatSource(value) {
  if (!value) {
    return 'manual';
  }
  if (value === 'auto_login') {
    return 'auto';
  }
  return value;
}

function buildDetailsLines(event) {
  const details = event.payload?.details || {};
  const lines = [];
  if (event.type === 'login_failure') {
    lines.push({
      label: 'Motivo',
      value: LOGIN_FAILURE_REASONS[details.reason] || details.reason || 'desconhecido'
    });
    if (details.username) {
      lines.push({ label: 'Usuário', value: details.username });
    }
  } else if (event.type === 'ponto_registro') {
    lines.push({
      label: 'Registro',
      value: REGISTRO_LABELS[details.registroTipo] || details.registroTipo || '-'
    });
    if (details.hora) {
      lines.push({ label: 'Hora', value: details.hora });
    }
    const duracao = formatDuration(details.duracaoSegundos);
    if (duracao) {
      lines.push({ label: 'Duração', value: duracao });
    }
    if (details.teveAlmoco !== undefined) {
      lines.push({ label: 'Almoço', value: details.teveAlmoco ? 'Sim' : 'Não' });
    }
  } else if (event.type === 'alerta') {
    lines.push({
      label: 'Alerta',
      value: ALERTA_LABELS[details.alertaTipo] || details.alertaTipo || '-'
    });
    if (details.horarioFim) {
      lines.push({ label: 'Horário', value: details.horarioFim });
    }
    if (details.limiteHoras) {
      lines.push({ label: 'Limite', value: `${details.limiteHoras}h` });
    }
    if (details.data) {
      lines.push({ label: 'Dia', value: details.data });
    }
  } else if (event.type === 'logout') {
    lines.push({ label: 'Origem', value: formatSource(details.source) });
  } else if (event.type === 'login_success' || event.type === 'session_resume') {
    lines.push({ label: 'Origem', value: formatSource(details.source) });
  }

  if (details.localizacao) {
    const cidade = [details.localizacao.cidade, details.localizacao.estado]
      .filter(Boolean)
      .join(' - ');
    if (cidade) {
      lines.push({ label: 'Local', value: cidade });
    }
    const lat = Number(details.localizacao.latitude);
    const lon = Number(details.localizacao.longitude);
    if (Number.isFinite(lat) && Number.isFinite(lon)) {
      lines.push({ label: 'Coords', value: `${lat.toFixed(4)}, ${lon.toFixed(4)}` });
    }
  }

  if (!lines.length) {
    lines.push({ label: 'Info', value: details.mensagem || '-' });
  }

  return lines;
}

function buildDetailsHtml(event) {
  const lines = buildDetailsLines(event)
    .map(line => {
      return `
        <div class="detail-line">
          <span class="detail-label">${escapeHtml(line.label)}</span>
          <span class="detail-value">${escapeHtml(line.value)}</span>
        </div>
      `;
    })
    .join('');
  return `<div class="detail-list">${lines}</div>`;
}

function renderEvents() {
  if (!els.eventsBody) {
    return;
  }
  els.eventsBody.innerHTML = state.events
    .map(event => {
      const tag = TYPE_LABELS[event.type] || event.type;
      const tagClass = TYPE_CLASS[event.type] || 'session';
      const userName = escapeHtml(event.user?.name || 'Sem usuário');
      const userProvider = event.user?.provider ? ` (${escapeHtml(event.user.provider)})` : '';
      const userEmail = event.user?.email ? `<div class="mono">${escapeHtml(event.user.email)}</div>` : '';
      const deviceName = escapeHtml(event.device?.name || '-');
      const deviceId = event.device?.id ? `<div class="mono">${escapeHtml(event.device.id)}</div>` : '';
      const ip = escapeHtml(event.ip || '-');
      const details = buildDetailsHtml(event);
      const rowClass = newEventIds.has(event.id) ? 'row-new' : '';
      return `
        <tr class="${rowClass}">
          <td><span class="tag ${tagClass}">${escapeHtml(tag)}</span></td>
          <td>${userName}${userProvider}${userEmail}</td>
          <td>${deviceName}${deviceId}</td>
          <td class="mono">${ip}</td>
          <td>${escapeHtml(formatDateTime(event.ts))}</td>
          <td>${details}</td>
        </tr>
      `;
    })
    .join('');
  if (els.eventsCount) {
    els.eventsCount.textContent = `${state.events.length} eventos`;
  }
  updateTableScrollLock();
}

function updateTableScrollLock() {
  const tableWrap = document.getElementById('eventsTableWrap');
  if (!tableWrap) {
    return;
  }
  const deveTravar = state.events.length >= SCROLL_LOCK_MIN;
  tableWrap.classList.toggle('locked', deveTravar);
}

function renderActiveUsers(items) {
  if (!els.activeUsers) {
    return;
  }
  if (!items.length) {
    els.activeUsers.innerHTML = '<span class="panel-note">Sem usuários ativos.</span>';
    if (els.activeUsersNote) {
      els.activeUsersNote.textContent = '0 usuários conectados';
    }
    els.activeUsers.classList.remove('scroll');
    return;
  }
  els.activeUsers.classList.toggle('scroll', items.length >= ACTIVE_USERS_SCROLL_MIN);
  els.activeUsers.innerHTML = items
    .map(session => {
      const name = escapeHtml(session.user?.name || 'Sem usuário');
      const device = escapeHtml(session.device?.name || session.device?.id || 'Dispositivo');
      const last = formatDateTime(session.lastEventAt);
      return `
        <div class="chip">
          ${name}
          <small>${device} · ${escapeHtml(last)}</small>
        </div>
      `;
    })
    .join('');
  if (els.activeUsersNote) {
    els.activeUsersNote.textContent = `${items.length} usuários conectados`;
  }
}

function resetDashboardUI() {
  state.events = [];
  state.offset = 0;
  renderEvents();
  renderActiveUsers([]);
  if (els.pointsNote) {
    els.pointsNote.textContent = 'Carregue um arquivo JSON para consultar horários.';
  }
  state.pendingJsonFile = null;
  clearPointsView();
  if (els.activeSessions) els.activeSessions.textContent = '0';
  if (els.activeSessionsMeta) els.activeSessionsMeta.textContent = '0 usuários';
  if (els.loginsToday) els.loginsToday.textContent = '0';
  if (els.lastEventAt) els.lastEventAt.textContent = '--';
  setStreamStatus('error', 'Desconectado');
}

function addNewEvent(event) {
  newEventIds.add(event.id);
  state.events.unshift(event);
  state.events = state.events.slice(0, 200);
  renderEvents();
  setTimeout(() => {
    newEventIds.delete(event.id);
    renderEvents();
  }, 1400);
}

function setLoginVisible(show, message) {
  if (!els.loginOverlay) {
    return;
  }
  els.loginOverlay.classList.toggle('open', show);
  els.loginOverlay.setAttribute('aria-hidden', show ? 'false' : 'true');
  if (els.loginError) {
    els.loginError.textContent = message || '';
  }
  if (show) {
    if (els.loginPass) {
      els.loginPass.value = '';
    }
    if (authConfig.defaultUser && els.loginUser && !els.loginUser.value) {
      els.loginUser.value = authConfig.defaultUser;
    }
    if (els.loginUser) {
      els.loginUser.focus();
    }
  }
}

async function fetchAuthConfig() {
  try {
    const response = await fetch('/api/auth/config');
    if (!response.ok) {
      return authConfig;
    }
    return response.json();
  } catch (error) {
    return authConfig;
  }
}

async function verificarAcesso() {
  const headers = {};
  if (dashboardToken) {
    headers['X-Dashboard-Token'] = dashboardToken;
  }
  if (apiKey) {
    headers['X-API-Key'] = apiKey;
  }
  try {
    const response = await fetch('/api/health', { headers });
    if (response.ok) {
      return true;
    }
    if (response.status === 401) {
      return false;
    }
    return false;
  } catch (error) {
    return false;
  }
}

async function fetchOverview() {
  const data = await apiFetch('/api/overview');
  if (els.activeSessions) {
    els.activeSessions.textContent = data.activeSessions ?? 0;
  }
  if (els.activeSessionsMeta) {
    els.activeSessionsMeta.textContent = `${data.activeSessions ?? 0} usuários`;
  }
  if (els.loginsToday) {
    els.loginsToday.textContent = data.loginsToday ?? 0;
  }
  if (els.lastEventAt) {
    els.lastEventAt.textContent = data.lastEventAt ? formatDateTime(data.lastEventAt) : '--';
  }
}

async function fetchActiveSessions() {
  const data = await apiFetch('/api/sessions', { active: 1 });
  renderActiveUsers(data.items || []);
}

async function fetchEvents(reset = false) {
  const filters = reset ? readFilters() : state.filters;
  if (reset) {
    state.filters = filters;
    state.offset = 0;
    state.events = [];
  }
  const data = await apiFetch('/api/events', {
    limit: state.limit,
    offset: state.offset,
    ...filters
  });
  state.events = state.events.concat(data.items || []);
  state.offset = state.events.length;
  renderEvents();
}

async function startDashboard() {
  if (dashboardStarted) {
    return;
  }
  dashboardStarted = true;
  await fetchOverview();
  await fetchActiveSessions();
  await fetchEvents(true);
  startStream();
  startAutoRefresh();
}

async function handleLoginSubmit() {
  const username = els.loginUser?.value.trim() || '';
  const password = els.loginPass?.value.trim() || '';
  if (!username || !password) {
    setLoginVisible(true, 'Informe usuário e senha.');
    return;
  }
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });
    if (!response.ok) {
      setLoginVisible(true, 'Credenciais inválidas.');
      return;
    }
    const data = await response.json();
    dashboardToken = data.token || '';
    if (!dashboardToken) {
      setLoginVisible(true, 'Não foi possível autenticar.');
      return;
    }
    window.localStorage.setItem('monitor_dash_token', dashboardToken);
    setLoginVisible(false, '');
    await startDashboard();
  } catch (error) {
    setLoginVisible(true, 'Servidor indisponível.');
  }
}

async function handleLogout() {
  try {
    if (dashboardToken) {
      await fetch('/api/logout', {
        method: 'POST',
        headers: { 'X-Dashboard-Token': dashboardToken }
      });
    }
  } catch (error) {
    // ignore
  }
  dashboardToken = '';
  window.localStorage.removeItem('monitor_dash_token');
  if (els.loginUser) {
    els.loginUser.value = '';
  }
  if (els.loginPass) {
    els.loginPass.value = '';
  }
  if (eventSource) {
    eventSource.close();
  }
  stopAutoRefresh();
  dashboardStarted = false;
  resetDashboardUI();
  setLoginVisible(true, 'Sessão encerrada.');
}

function scheduleRefresh() {
  if (refreshTimer) {
    clearTimeout(refreshTimer);
  }
  refreshTimer = setTimeout(() => {
    fetchOverview().catch(() => {});
    fetchActiveSessions().catch(() => {});
  }, 400);
}

function startAutoRefresh() {
  if (autoRefreshTimer) {
    return;
  }
  autoRefreshTimer = setInterval(() => {
    fetchOverview().catch(() => {});
    fetchActiveSessions().catch(() => {});
    fetchEvents(true).catch(() => {});
  }, AUTO_REFRESH_MS);
}

function stopAutoRefresh() {
  if (!autoRefreshTimer) {
    return;
  }
  clearInterval(autoRefreshTimer);
  autoRefreshTimer = null;
}

function startStream() {
  if (eventSource) {
    eventSource.close();
  }
  const query = buildQuery({});
  const url = query ? `/api/events/stream?${query}` : '/api/events/stream';
  eventSource = new EventSource(url);
  setStreamStatus('connecting', 'Conectando');

  eventSource.addEventListener('ready', () => {
    setStreamStatus('online', 'Online');
  });

  eventSource.addEventListener('event', event => {
    try {
      const data = JSON.parse(event.data);
      if (matchesFilters(data, state.filters)) {
        addNewEvent(data);
      }
      if (data?.type === 'alerta') {
        fetchOverview().catch(() => {});
      }
      scheduleRefresh();
    } catch (error) {
      // ignore invalid payloads
    }
  });

  eventSource.onerror = () => {
    setStreamStatus('error', 'Reconectando');
  };
}

function buildExportUrl() {
  const filters = readFilters();
  const query = buildQuery(filters);
  return query ? `/api/events/export?${query}` : '/api/events/export';
}

function initApiKey() {
  const fromQuery = new URLSearchParams(window.location.search).get('api_key');
  apiKey = fromQuery || '';
}

function initDashboardToken() {
  dashboardToken = window.localStorage.getItem('monitor_dash_token') || '';
}

function bindEvents() {
  if (els.tabButtons) {
    els.tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        setActiveTab(button.dataset.tab || 'monitor');
      });
    });
  }
  if (els.applyFiltersBtn) {
    els.applyFiltersBtn.addEventListener('click', () => {
      fetchEvents(true).catch(() => {});
    });
  }
  if (els.clearFiltersBtn) {
    els.clearFiltersBtn.addEventListener('click', () => {
      if (els.filterQuery) els.filterQuery.value = '';
      if (els.filterType) els.filterType.value = '';
      if (els.filterProvider) els.filterProvider.value = '';
      if (els.filterSince) els.filterSince.value = '';
      if (els.filterUntil) els.filterUntil.value = '';
      fetchEvents(true).catch(() => {});
    });
  }
  if (els.exportBtn) {
    els.exportBtn.addEventListener('click', () => {
      window.open(buildExportUrl(), '_blank');
    });
  }
  if (els.themeToggleBtn) {
    els.themeToggleBtn.addEventListener('click', () => {
      toggleTheme();
    });
  }
  if (els.loginBtn) {
    els.loginBtn.addEventListener('click', () => {
      handleLoginSubmit().catch(() => {});
    });
  }
  if (els.loginPass) {
    els.loginPass.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleLoginSubmit().catch(() => {});
      }
    });
  }
  if (els.loginUser) {
    els.loginUser.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        handleLoginSubmit().catch(() => {});
      }
    });
  }
  if (els.logoutBtn) {
    els.logoutBtn.addEventListener('click', () => {
      handleLogout().catch(() => {});
    });
  }
  if (els.loadMoreBtn) {
    els.loadMoreBtn.addEventListener('click', () => {
      fetchEvents(false).catch(() => {});
    });
  }
  if (els.refreshBtn) {
    els.refreshBtn.addEventListener('click', async () => {
      setLoadingVisible(true, 'Verificando usuários conectados...');
      try {
        await Promise.all([
          fetchOverview(),
          fetchActiveSessions(),
          fetchEvents(true),
          new Promise(resolve => setTimeout(resolve, 600))
        ]);
      } finally {
        setLoadingVisible(false);
      }
    });
  }
  if (els.jsonFileInput) {
    els.jsonFileInput.addEventListener('change', (event) => {
      const file = event.target.files?.[0] || null;
      if (!file) {
        setUploadStatus('');
        return;
      }
      setUploadStatus(`Carregando ${file.name}...`);
      loadJsonFromFile(file).catch(() => {});
    });
  }
  if (els.downloadJsonBtn) {
    els.downloadJsonBtn.addEventListener('click', () => {
      if (!state.userJson) {
        return;
      }
      const user = extractUserInfo(state.userJson, state.selectedUserKey);
      const fileName = `${normalizeDownloadName(user.key || 'controle-ponto')}.json`;
      const blob = new Blob([JSON.stringify(state.userJson, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }
  if (els.downloadCsvBtn) {
    els.downloadCsvBtn.addEventListener('click', () => {
      if (!state.userJson) {
        return;
      }
      baixarCsvDoJson(state.userJson);
    });
  }
  if (els.reportPdfBtn) {
    els.reportPdfBtn.addEventListener('click', () => {
      if (!state.userJson) {
        return;
      }
      window.localStorage.setItem('monitor_report_json', JSON.stringify(state.userJson));
      window.open('/relatorio.html', '_blank');
    });
  }
}

async function init() {
  initApiKey();
  initDashboardToken();
  initTheme();
  bindEvents();
  setActiveTab('monitor');
  authConfig = await fetchAuthConfig();
  if (els.loginHint) {
    els.loginHint.textContent = authConfig.defaultUser
      ? `Usuário padrão: ${authConfig.defaultUser}`
      : '';
  }
  if (authConfig.loginRequired) {
    if (!dashboardToken) {
      setLoginVisible(true, 'Informe usuário e senha.');
      return;
    }
    const ok = await verificarAcesso();
    if (!ok) {
      setLoginVisible(true, 'Sessão expirada. Informe usuário e senha.');
      return;
    }
    setLoginVisible(false, '');
    await startDashboard();
    return;
  }

  if (authConfig.apiKeyRequired && !apiKey) {
    setLoginVisible(true, 'API key requerida na URL (?api_key=...).');
    return;
  }

  if (authConfig.apiKeyRequired) {
    const ok = await verificarAcesso();
    if (!ok) {
      setLoginVisible(true, 'API key inválida.');
      return;
    }
  }

  setLoginVisible(false, '');
  await startDashboard();
}

init().catch(() => {
  setStreamStatus('error', 'Falha');
});
