const path = require('path');
const fs = require('fs');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const Database = require('better-sqlite3');
const { randomUUID } = require('crypto');

const PORT = Number(process.env.PORT) || 8787;
const DB_PATH = process.env.DB_PATH || path.join(__dirname, 'data', 'monitor.db');
const API_KEY = process.env.MONITOR_API_KEY || '';
const DASH_USER = process.env.MONITOR_DASH_USER || '';
const DASH_PASS = process.env.MONITOR_DASH_PASS || '';
const DASH_TOKEN_TTL_MS = Number(process.env.MONITOR_DASH_TOKEN_TTL_MS) || 0;
const USER_JSON_DIR = process.env.MONITOR_USER_JSON_DIR || path.join(__dirname, 'data', 'user_json');
const DEFAULT_LIMIT = 100;
const MAX_LIMIT = 500;
const ACTIVE_SESSION_TTL_MIN = Number(process.env.MONITOR_SESSION_TTL_MIN) || 60;
const SINGLE_SESSION_ONLY = String(process.env.MONITOR_SINGLE_SESSION || '1') !== '0';
const CLEAR_SESSIONS_ON_START = String(process.env.MONITOR_CLEAR_SESSIONS_ON_START || '0') === '1';

const app = express();
app.set('trust proxy', true);
app.use(cors());
app.use(express.json({ limit: '5mb' }));

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

ensureDir(path.dirname(DB_PATH));
ensureDir(USER_JSON_DIR);

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.exec(`
  CREATE TABLE IF NOT EXISTS events (
    id TEXT PRIMARY KEY,
    ts TEXT NOT NULL,
    type TEXT NOT NULL,
    session_id TEXT,
    user_key TEXT,
    user_name TEXT,
    user_email TEXT,
    user_provider TEXT,
    device_id TEXT,
    device_name TEXT,
    ip TEXT,
    user_agent TEXT,
    app_version TEXT,
    ext_version TEXT,
    payload TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_events_ts ON events (ts);
  CREATE INDEX IF NOT EXISTS idx_events_type ON events (type);
  CREATE INDEX IF NOT EXISTS idx_events_user ON events (user_key);

  CREATE TABLE IF NOT EXISTS sessions (
    id TEXT PRIMARY KEY,
    session_id TEXT,
    user_key TEXT,
    user_name TEXT,
    user_email TEXT,
    user_provider TEXT,
    device_id TEXT,
    device_name TEXT,
    started_at TEXT NOT NULL,
    last_event_at TEXT NOT NULL,
    ended_at TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_sessions_active ON sessions (ended_at);
  CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions (user_key);
`);

const clearActiveSessionsStmt = db.prepare(`
  UPDATE sessions
  SET ended_at = ?
  WHERE ended_at IS NULL;
`);

if (CLEAR_SESSIONS_ON_START) {
  clearActiveSessionsStmt.run(new Date().toISOString());
}

const insertEventStmt = db.prepare(`
  INSERT INTO events (
    id,
    ts,
    type,
    session_id,
    user_key,
    user_name,
    user_email,
    user_provider,
    device_id,
    device_name,
    ip,
    user_agent,
    app_version,
    ext_version,
    payload
  ) VALUES (
    @id,
    @ts,
    @type,
    @session_id,
    @user_key,
    @user_name,
    @user_email,
    @user_provider,
    @device_id,
    @device_name,
    @ip,
    @user_agent,
    @app_version,
    @ext_version,
    @payload
  );
`);

const insertSessionStmt = db.prepare(`
  INSERT INTO sessions (
    id,
    session_id,
    user_key,
    user_name,
    user_email,
    user_provider,
    device_id,
    device_name,
    started_at,
    last_event_at,
    ended_at
  ) VALUES (
    @id,
    @session_id,
    @user_key,
    @user_name,
    @user_email,
    @user_provider,
    @device_id,
    @device_name,
    @started_at,
    @last_event_at,
    @ended_at
  );
`);

const findActiveSessionBySessionIdStmt = db.prepare(`
  SELECT id
  FROM sessions
  WHERE session_id = ? AND ended_at IS NULL
  ORDER BY started_at DESC
  LIMIT 1;
`);

const findActiveSessionByUserDeviceStmt = db.prepare(`
  SELECT id
  FROM sessions
  WHERE user_key = ? AND device_id = ? AND ended_at IS NULL
  ORDER BY started_at DESC
  LIMIT 1;
`);

const findActiveSessionsByUserDeviceStmt = db.prepare(`
  SELECT id
  FROM sessions
  WHERE user_key = ? AND device_id = ? AND ended_at IS NULL;
`);

const findActiveSessionByUserOtherDeviceStmt = db.prepare(`
  SELECT device_id, device_name, last_event_at
  FROM sessions
  WHERE user_key = ? AND device_id != ? AND ended_at IS NULL
  ORDER BY last_event_at DESC
  LIMIT 1;
`);

const findActiveSessionByUserOtherDeviceWithTtlStmt = db.prepare(`
  SELECT device_id, device_name, last_event_at
  FROM sessions
  WHERE user_key = ?
    AND device_id != ?
    AND ended_at IS NULL
    AND last_event_at >= ?
  ORDER BY last_event_at DESC
  LIMIT 1;
`);

const updateSessionActivityStmt = db.prepare(`
  UPDATE sessions
  SET last_event_at = ?
  WHERE id = ?;
`);

const endSessionStmt = db.prepare(`
  UPDATE sessions
  SET ended_at = ?, last_event_at = ?
  WHERE id = ?;
`);

const listActiveSessionsStmt = db.prepare(`
  SELECT *
  FROM sessions
  WHERE ended_at IS NULL
  ORDER BY last_event_at DESC
  LIMIT 200;
`);

const listActiveSessionsWithTtlStmt = db.prepare(`
  SELECT *
  FROM sessions
  WHERE ended_at IS NULL
    AND last_event_at >= ?
  ORDER BY last_event_at DESC
  LIMIT 200;
`);

const listAllSessionsStmt = db.prepare(`
  SELECT *
  FROM sessions
  ORDER BY last_event_at DESC
  LIMIT 500;
`);

const listUsersStmt = db.prepare(`
  SELECT
    user_key,
    user_name,
    user_email,
    user_provider,
    MAX(ts) as last_event_at,
    COUNT(*) as total_events
  FROM events
  WHERE user_key IS NOT NULL AND user_key != ''
  GROUP BY user_key, user_name, user_email, user_provider
  ORDER BY last_event_at DESC
  LIMIT 500;
`);

const countActiveSessionsStmt = db.prepare(`
  SELECT COUNT(*) as count
  FROM sessions
  WHERE ended_at IS NULL;
`);

const countActiveSessionsWithTtlStmt = db.prepare(`
  SELECT COUNT(*) as count
  FROM sessions
  WHERE ended_at IS NULL
    AND last_event_at >= ?;
`);

const dashboardTokens = new Map();

function dashboardLoginRequired() {
  return Boolean(DASH_USER && DASH_PASS);
}

function apiKeyRequired() {
  return Boolean(API_KEY);
}

function authRequired() {
  return Boolean(apiKeyRequired() || dashboardLoginRequired());
}

function getDashboardToken(req) {
  return req.get('x-dashboard-token') || req.query.dash_token || '';
}

function issueDashboardToken(username) {
  const token = randomUUID();
  dashboardTokens.set(token, {
    user: username,
    issuedAt: Date.now()
  });
  return token;
}

function isDashboardTokenValid(token) {
  if (!token) {
    return false;
  }
  const entry = dashboardTokens.get(token);
  if (!entry) {
    return false;
  }
  if (DASH_TOKEN_TTL_MS > 0 && (Date.now() - entry.issuedAt) > DASH_TOKEN_TTL_MS) {
    dashboardTokens.delete(token);
    return false;
  }
  return true;
}

function revokeDashboardToken(token) {
  if (token) {
    dashboardTokens.delete(token);
  }
}

function requireDashboardAuth(req, res, next) {
  if (!authRequired()) {
    return next();
  }
  const headerKey = req.get('x-api-key');
  const queryKey = req.query.api_key;
  if (API_KEY && (headerKey === API_KEY || queryKey === API_KEY)) {
    return next();
  }
  const dashToken = getDashboardToken(req);
  if (isDashboardTokenValid(dashToken)) {
    return next();
  }
  return res.status(401).json({ error: 'unauthorized' });
}

function requireEventAuth(req, res, next) {
  if (!apiKeyRequired()) {
    return next();
  }
  const headerKey = req.get('x-api-key');
  const queryKey = req.query.api_key;
  if (headerKey === API_KEY || queryKey === API_KEY) {
    return next();
  }
  return res.status(401).json({ error: 'unauthorized' });
}

function getActiveSessionThresholdIso() {
  if (!Number.isFinite(ACTIVE_SESSION_TTL_MIN) || ACTIVE_SESSION_TTL_MIN <= 0) {
    return null;
  }
  return new Date(Date.now() - (ACTIVE_SESSION_TTL_MIN * 60 * 1000)).toISOString();
}

function listActiveSessions() {
  const threshold = getActiveSessionThresholdIso();
  if (!threshold) {
    return listActiveSessionsStmt.all();
  }
  return listActiveSessionsWithTtlStmt.all(threshold);
}

function countActiveSessions() {
  const threshold = getActiveSessionThresholdIso();
  if (!threshold) {
    return countActiveSessionsStmt.get().count;
  }
  return countActiveSessionsWithTtlStmt.get(threshold).count;
}

function safeDate(value) {
  if (!value) {
    return null;
  }
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return null;
  }
  return parsed.toISOString();
}

function normalizeUserKey(value) {
  return String(value || '').trim();
}

function normalizeUserFileName(userKey) {
  return normalizeUserKey(userKey).replace(/[^a-zA-Z0-9._:@-]/g, '_');
}

function getUserJsonPathFromKey(userKey) {
  const safeName = normalizeUserFileName(userKey);
  if (!safeName) {
    return null;
  }
  return path.join(USER_JSON_DIR, `${safeName}.json`);
}

function listUserJsonEntries() {
  const entries = new Map();
  let files = [];
  try {
    files = fs.readdirSync(USER_JSON_DIR);
  } catch (error) {
    return entries;
  }
  files
    .filter(file => file.toLowerCase().endsWith('.json'))
    .forEach(file => {
      const filePath = path.join(USER_JSON_DIR, file);
      let userKey = path.basename(file, '.json');
      let name = '';
      let email = '';
      let provider = '';
      try {
        const raw = fs.readFileSync(filePath, 'utf8');
        const data = JSON.parse(raw);
        const user = data?.usuario || data?.user || {};
        userKey = normalizeUserKey(user.chave || user.key || userKey) || userKey;
        name = user.nome || user.name || '';
        email = user.email || '';
        provider = user.provider || '';
      } catch (error) {
        // ignore invalid JSON, keep fallback file name
      }
      let jsonUpdatedAt = '';
      try {
        jsonUpdatedAt = fs.statSync(filePath).mtime.toISOString();
      } catch (error) {
        jsonUpdatedAt = '';
      }
      entries.set(userKey, {
        key: userKey,
        name,
        email,
        provider,
        hasJson: true,
        jsonFile: file,
        jsonPath: filePath,
        jsonUpdatedAt
      });
    });
  return entries;
}

function findUserJsonPath(userKey) {
  const directPath = getUserJsonPathFromKey(userKey);
  if (directPath && fs.existsSync(directPath)) {
    return directPath;
  }
  const entries = listUserJsonEntries();
  const entry = entries.get(normalizeUserKey(userKey));
  return entry?.jsonPath || null;
}

function parsePayload(payloadText) {
  if (!payloadText) {
    return null;
  }
  try {
    return JSON.parse(payloadText);
  } catch (error) {
    return null;
  }
}

function mapEventRow(row) {
  return {
    id: row.id,
    ts: row.ts,
    type: row.type,
    sessionId: row.session_id,
    user: {
      key: row.user_key,
      name: row.user_name,
      email: row.user_email,
      provider: row.user_provider
    },
    device: {
      id: row.device_id,
      name: row.device_name
    },
    ip: row.ip,
    userAgent: row.user_agent,
    appVersion: row.app_version,
    extVersion: row.ext_version,
    payload: parsePayload(row.payload)
  };
}

function closeActiveSessions(userKey, deviceId, endedAt) {
  if (!userKey || !deviceId) {
    return;
  }
  const rows = findActiveSessionsByUserDeviceStmt.all(userKey, deviceId);
  rows.forEach(row => {
    endSessionStmt.run(endedAt, endedAt, row.id);
  });
}

function createSession(eventRow, lastEventAt) {
  const sessionId = eventRow.session_id || randomUUID();
  closeActiveSessions(eventRow.user_key, eventRow.device_id, lastEventAt);
  insertSessionStmt.run({
    id: randomUUID(),
    session_id: sessionId,
    user_key: eventRow.user_key || '',
    user_name: eventRow.user_name || '',
    user_email: eventRow.user_email || '',
    user_provider: eventRow.user_provider || '',
    device_id: eventRow.device_id || '',
    device_name: eventRow.device_name || '',
    started_at: lastEventAt,
    last_event_at: lastEventAt,
    ended_at: null
  });
}

function updateSessionActivity(eventRow, lastEventAt) {
  if (!eventRow.user_key || !eventRow.device_id) {
    return;
  }
  let session = null;
  if (eventRow.session_id) {
    session = findActiveSessionBySessionIdStmt.get(eventRow.session_id);
  }
  if (!session) {
    session = findActiveSessionByUserDeviceStmt.get(eventRow.user_key, eventRow.device_id);
  }
  if (session) {
    updateSessionActivityStmt.run(lastEventAt, session.id);
  }
}

function closeSession(eventRow, lastEventAt) {
  let session = null;
  if (eventRow.session_id) {
    session = findActiveSessionBySessionIdStmt.get(eventRow.session_id);
  }
  if (!session && eventRow.user_key && eventRow.device_id) {
    session = findActiveSessionByUserDeviceStmt.get(eventRow.user_key, eventRow.device_id);
  }
  if (session) {
    endSessionStmt.run(lastEventAt, lastEventAt, session.id);
  }
}

function handleSessionUpdate(eventRow, lastEventAt) {
  const tipo = eventRow.type;
  if (tipo === 'login_success') {
    createSession(eventRow, lastEventAt);
    return;
  }
  if (tipo === 'session_resume') {
    const active = eventRow.user_key && eventRow.device_id
      ? findActiveSessionByUserDeviceStmt.get(eventRow.user_key, eventRow.device_id)
      : null;
    if (active) {
      updateSessionActivityStmt.run(lastEventAt, active.id);
      return;
    }
    createSession(eventRow, lastEventAt);
    return;
  }
  if (tipo === 'logout') {
    closeSession(eventRow, lastEventAt);
    return;
  }
  updateSessionActivity(eventRow, lastEventAt);
}

const sseClients = new Set();

function broadcastEvent(event) {
  if (sseClients.size === 0) {
    return;
  }
  const data = JSON.stringify(event);
  sseClients.forEach(res => {
    res.write(`event: event\ndata: ${data}\n\n`);
  });
}

setInterval(() => {
  if (sseClients.size === 0) {
    return;
  }
  sseClients.forEach(res => {
    res.write('event: ping\ndata: {}\n\n');
  });
}, 20000);

app.get('/api/auth/config', (req, res) => {
  res.json({
    loginRequired: dashboardLoginRequired(),
    apiKeyRequired: apiKeyRequired(),
    defaultUser: dashboardLoginRequired() ? DASH_USER : ''
  });
});

app.post('/api/login', (req, res) => {
  if (!DASH_USER || !DASH_PASS) {
    return res.status(400).json({ error: 'login_disabled' });
  }
  const username = String(req.body?.username || '').trim();
  const password = String(req.body?.password || '').trim();
  if (username !== DASH_USER || password !== DASH_PASS) {
    return res.status(401).json({ error: 'invalid_credentials' });
  }
  const token = issueDashboardToken(username);
  return res.json({ ok: true, token });
});

app.post('/api/logout', (req, res) => {
  const token = getDashboardToken(req);
  revokeDashboardToken(token);
  return res.json({ ok: true });
});

app.get('/api/health', requireDashboardAuth, (req, res) => {
  res.json({
    ok: true,
    now: new Date().toISOString()
  });
});

app.post('/api/sessions/claim', requireEventAuth, (req, res) => {
  if (!SINGLE_SESSION_ONLY) {
    return res.json({ ok: true, enforced: false });
  }
  const payload = req.body || {};
  const user = payload.user || {};
  const device = payload.device || {};
  const userKey = normalizeUserKey(user.key || '');
  const deviceId = String(device.id || '').trim();
  if (!userKey || !deviceId) {
    return res.status(400).json({ error: 'user_device_required' });
  }

  const threshold = getActiveSessionThresholdIso();
  const active = threshold
    ? findActiveSessionByUserOtherDeviceWithTtlStmt.get(userKey, deviceId, threshold)
    : findActiveSessionByUserOtherDeviceStmt.get(userKey, deviceId);

  if (active) {
    return res.status(409).json({
      error: 'session_conflict',
      active: {
        deviceId: active.device_id || '',
        deviceName: active.device_name || '',
        lastEventAt: active.last_event_at || ''
      }
    });
  }

  return res.json({ ok: true, enforced: true });
});

app.post('/api/events', requireEventAuth, (req, res) => {
  const payload = req.body || {};
  const type = String(payload.type || '').trim();
  if (!type) {
    return res.status(400).json({ error: 'type_required' });
  }

  const ts = safeDate(payload.timestamp) || new Date().toISOString();
  const user = payload.user || {};
  const device = payload.device || {};
  const appInfo = payload.app || {};
  const client = payload.client || {};
  const eventRow = {
    id: randomUUID(),
    ts,
    type,
    session_id: payload.sessionId || '',
    user_key: user.key || '',
    user_name: user.name || '',
    user_email: user.email || '',
    user_provider: user.provider || '',
    device_id: device.id || '',
    device_name: device.name || '',
    ip: req.ip || '',
    user_agent: req.get('user-agent') || '',
    app_version: appInfo.version || '',
    ext_version: appInfo.extVersion || '',
    payload: JSON.stringify({
      details: payload.details || {},
      app: appInfo,
      client,
      sessionId: payload.sessionId || ''
    })
  };

  insertEventStmt.run(eventRow);
  handleSessionUpdate(eventRow, ts);

  const eventResponse = mapEventRow(eventRow);
  broadcastEvent(eventResponse);

  return res.json({ ok: true, id: eventRow.id });
});

app.post('/api/users/json', requireDashboardAuth, (req, res) => {
  const payload = req.body || {};
  const data = payload?.data && typeof payload.data === 'object' ? payload.data : payload;
  if (!data || typeof data !== 'object') {
    return res.status(400).json({ error: 'invalid_json' });
  }
  const user = data.usuario || data.user || {};
  const userKey = normalizeUserKey(user.chave || user.key || '');
  if (!userKey) {
    return res.status(400).json({ error: 'user_required' });
  }
  const filePath = getUserJsonPathFromKey(userKey);
  if (!filePath) {
    return res.status(400).json({ error: 'invalid_user' });
  }
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  } catch (error) {
    return res.status(500).json({ error: 'json_write_failed' });
  }
  return res.json({
    ok: true,
    key: userKey,
    file: path.basename(filePath),
    updatedAt: new Date().toISOString()
  });
});

app.get('/api/users', requireDashboardAuth, (req, res) => {
  const jsonEntries = listUserJsonEntries();
  const rows = listUsersStmt.all();
  const rowsByKey = new Map(rows.map(row => [row.user_key, row]));
  const items = Array.from(jsonEntries.values())
    .map(entry => {
      const row = rowsByKey.get(entry.key);
      return {
        key: entry.key,
        name: entry.name || row?.user_name || '',
        email: entry.email || row?.user_email || '',
        provider: entry.provider || row?.user_provider || '',
        lastEventAt: row?.last_event_at || '',
        totalEvents: row?.total_events || 0,
        hasJson: true,
        jsonFile: entry.jsonFile || '',
        jsonUpdatedAt: entry.jsonUpdatedAt || ''
      };
    })
    .sort((a, b) => (b.jsonUpdatedAt || '').localeCompare(a.jsonUpdatedAt || ''));

  return res.json({ items });
});

app.get('/api/users/:userKey/json', requireDashboardAuth, (req, res) => {
  const userKey = normalizeUserKey(req.params.userKey);
  if (!userKey) {
    return res.status(400).json({ error: 'user_required' });
  }
  const filePath = findUserJsonPath(userKey);
  if (!filePath || !fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'json_not_found' });
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    res.setHeader('X-User-Json-File', path.basename(filePath));
    return res.json(data);
  } catch (error) {
    return res.status(500).json({ error: 'json_invalid' });
  }
});

app.get('/api/events', requireDashboardAuth, (req, res) => {
  const filters = [];
  const params = [];
  const type = String(req.query.type || '').trim();
  const provider = String(req.query.provider || '').trim();
  const user = String(req.query.user || '').trim();
  const device = String(req.query.device || '').trim();
  const query = String(req.query.q || '').trim();
  const since = safeDate(req.query.since);
  const until = safeDate(req.query.until);

  if (type) {
    filters.push('type = ?');
    params.push(type);
  }
  if (provider) {
    filters.push('user_provider = ?');
    params.push(provider);
  }
  if (user) {
    filters.push('(user_name = ? OR user_email = ? OR user_key = ?)');
    params.push(user, user, user);
  }
  if (device) {
    filters.push('device_id = ?');
    params.push(device);
  }
  if (since) {
    filters.push('ts >= ?');
    params.push(since);
  }
  if (until) {
    filters.push('ts <= ?');
    params.push(until);
  }
  if (query) {
    const term = `%${query}%`;
    filters.push(
      '(user_name LIKE ? OR user_email LIKE ? OR user_key LIKE ? OR device_name LIKE ? OR device_id LIKE ? OR ip LIKE ?)'
    );
    params.push(term, term, term, term, term, term);
  }

  const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
  const limit = Math.min(Math.max(Number(req.query.limit) || DEFAULT_LIMIT, 1), MAX_LIMIT);
  const offset = Math.max(Number(req.query.offset) || 0, 0);

  const rows = db
    .prepare(
      `SELECT * FROM events ${where} ORDER BY ts DESC LIMIT ? OFFSET ?;`
    )
    .all(...params, limit, offset);

  const total = db
    .prepare(`SELECT COUNT(*) as total FROM events ${where};`)
    .get(...params).total;

  const items = rows.map(mapEventRow);

  return res.json({ items, total, limit, offset });
});

function escapeCsv(value) {
  if (value === null || value === undefined) {
    return '';
  }
  const text = String(value);
  if (text.includes('"') || text.includes(',') || text.includes('\n')) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

app.get('/api/events/export', requireDashboardAuth, (req, res) => {
  const filters = [];
  const params = [];
  const type = String(req.query.type || '').trim();
  const provider = String(req.query.provider || '').trim();
  const user = String(req.query.user || '').trim();
  const device = String(req.query.device || '').trim();
  const query = String(req.query.q || '').trim();
  const since = safeDate(req.query.since);
  const until = safeDate(req.query.until);

  if (type) {
    filters.push('type = ?');
    params.push(type);
  }
  if (provider) {
    filters.push('user_provider = ?');
    params.push(provider);
  }
  if (user) {
    filters.push('(user_name = ? OR user_email = ? OR user_key = ?)');
    params.push(user, user, user);
  }
  if (device) {
    filters.push('device_id = ?');
    params.push(device);
  }
  if (since) {
    filters.push('ts >= ?');
    params.push(since);
  }
  if (until) {
    filters.push('ts <= ?');
    params.push(until);
  }
  if (query) {
    const term = `%${query}%`;
    filters.push(
      '(user_name LIKE ? OR user_email LIKE ? OR user_key LIKE ? OR device_name LIKE ? OR device_id LIKE ? OR ip LIKE ?)'
    );
    params.push(term, term, term, term, term, term);
  }

  const where = filters.length ? `WHERE ${filters.join(' AND ')}` : '';
  const limit = Math.min(Math.max(Number(req.query.limit) || 2000, 1), 10000);

  const rows = db
    .prepare(`SELECT * FROM events ${where} ORDER BY ts DESC LIMIT ?;`)
    .all(...params, limit);

  const header = [
    'id',
    'ts',
    'type',
    'session_id',
    'user_key',
    'user_name',
    'user_email',
    'user_provider',
    'device_id',
    'device_name',
    'ip',
    'user_agent',
    'app_version',
    'ext_version',
    'payload'
  ];

  const lines = [header.join(',')];
  rows.forEach(row => {
    lines.push(
      [
        row.id,
        row.ts,
        row.type,
        row.session_id,
        row.user_key,
        row.user_name,
        row.user_email,
        row.user_provider,
        row.device_id,
        row.device_name,
        row.ip,
        row.user_agent,
        row.app_version,
        row.ext_version,
        row.payload
      ].map(escapeCsv).join(',')
    );
  });

  res.setHeader('Content-Type', 'text/csv; charset=utf-8');
  res.setHeader('Content-Disposition', 'attachment; filename="monitor-events.csv"');
  res.send(lines.join('\n'));
});

app.get('/api/sessions', requireDashboardAuth, (req, res) => {
  const activeOnly = String(req.query.active || '') === '1';
  const rows = activeOnly ? listActiveSessions() : listAllSessionsStmt.all();
  res.json({
    items: rows.map(row => ({
      id: row.id,
      sessionId: row.session_id,
      user: {
        key: row.user_key,
        name: row.user_name,
        email: row.user_email,
        provider: row.user_provider
      },
      device: {
        id: row.device_id,
        name: row.device_name
      },
      startedAt: row.started_at,
      lastEventAt: row.last_event_at,
      endedAt: row.ended_at
    }))
  });
});

app.post('/api/sessions/clear', requireDashboardAuth, (req, res) => {
  const endedAt = new Date().toISOString();
  const result = clearActiveSessionsStmt.run(endedAt);
  res.json({ ok: true, cleared: result.changes || 0, endedAt });
});

app.get('/api/overview', requireDashboardAuth, (req, res) => {
  const startOfDay = new Date();
  startOfDay.setHours(0, 0, 0, 0);
  const startIso = startOfDay.toISOString();

  const activeSessions = countActiveSessions();
  const eventsToday = db.prepare('SELECT COUNT(*) as count FROM events WHERE ts >= ?;').get(startIso).count;
  const loginsToday = db
    .prepare('SELECT COUNT(*) as count FROM events WHERE ts >= ? AND type IN (?, ?);')
    .get(startIso, 'login_success', 'session_resume').count;
  const alertsToday = db
    .prepare('SELECT COUNT(*) as count FROM events WHERE ts >= ? AND type = ?;')
    .get(startIso, 'alerta').count;
  const lastEventAt = db.prepare('SELECT MAX(ts) as ts FROM events;').get().ts || null;

  res.json({
    activeSessions,
    eventsToday,
    loginsToday,
    alertsToday,
    lastEventAt
  });
});

app.get('/api/events/stream', requireDashboardAuth, (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*'
  });
  res.write('event: ready\ndata: {}\n\n');
  sseClients.add(res);
  req.on('close', () => {
    sseClients.delete(res);
  });
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Monitor server running on http://localhost:${PORT}`);
});
