const els = {
  streamStatus: document.getElementById('streamStatus'),
  streamDot: document.getElementById('streamDot'),
  refreshBtn: document.getElementById('refreshBtn'),
  activeSessions: document.getElementById('activeSessions'),
  activeSessionsMeta: document.getElementById('activeSessionsMeta'),
  loginsToday: document.getElementById('loginsToday'),
  alertsToday: document.getElementById('alertsToday'),
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
  loadMoreBtn: document.getElementById('loadMoreBtn')
};

const state = {
  events: [],
  offset: 0,
  limit: 100,
  filters: {}
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

function apiFetch(path, params) {
  const query = buildQuery(params || {});
  const url = query ? `${path}?${query}` : path;
  const headers = {};
  if (dashboardToken) {
    headers['X-Dashboard-Token'] = dashboardToken;
  }
  if (apiKey) {
    headers['X-API-Key'] = apiKey;
  }
  return fetch(url, { headers }).then(response => {
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
  if (els.activeSessions) els.activeSessions.textContent = '0';
  if (els.activeSessionsMeta) els.activeSessionsMeta.textContent = '0 usuários';
  if (els.loginsToday) els.loginsToday.textContent = '0';
  if (els.alertsToday) els.alertsToday.textContent = '0';
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
  if (els.alertsToday) {
    els.alertsToday.textContent = data.alertsToday ?? 0;
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
}

async function init() {
  initApiKey();
  initDashboardToken();
  bindEvents();
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
