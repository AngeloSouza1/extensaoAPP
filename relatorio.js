const reportContent = document.getElementById('reportContent');
const reportSummary = document.getElementById('reportSummary');
const reportMeta = document.getElementById('reportMeta');
const reportLogo = document.getElementById('reportLogo');
const reportCompany = document.getElementById('reportCompany');
const reportAppDesc = document.getElementById('reportAppDesc');
const reportPrint = document.getElementById('reportPrint');
const reportClose = document.getElementById('reportClose');

function normalizarObjeto(valor) {
  return valor && typeof valor === 'object' && !Array.isArray(valor) ? valor : {};
}

function normalizarArray(valor) {
  return Array.isArray(valor) ? valor : [];
}

function base64ToBytes(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
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
    ['decrypt']
  );
}

async function carregarChaveCriptoSessao() {
  if (!chrome?.storage?.session) {
    return null;
  }
  const data = await chrome.storage.session.get(['cryptoKeyRaw']);
  if (!data.cryptoKeyRaw) {
    return null;
  }
  return importarChaveCripto(data.cryptoKeyRaw);
}

async function descriptografarDadosUsuario(payload, chave) {
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

function formatarHoras(totalSegundos) {
  const horas = Math.floor(totalSegundos / 3600);
  const minutos = Math.floor((totalSegundos % 3600) / 60);
  return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}`;
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

function formatarLocalizacao(localizacao) {
  if (!localizacao) {
    return '-';
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
  return partes.length ? partes.join(' | ') : '-';
}

function obterLocalizacaoDia(registrosDia, ultimaLocalizacao) {
  let encontrada = null;
  registrosDia.forEach(registro => {
    if (registro && registro.localizacao) {
      encontrada = registro.localizacao;
    }
  });
  return encontrada || ultimaLocalizacao || null;
}

function obterUsuarioChave(profile) {
  const provider = profile?.provider || 'local';
  if (provider === 'google') {
    const email = (profile?.email || '').trim().toLowerCase();
    if (email) {
      return `google:${email}`;
    }
    const nomeGoogle = (profile?.name || '').trim().toLowerCase();
    if (nomeGoogle) {
      return `google:${nomeGoogle}`;
    }
    return 'google:desconhecido';
  }
  const nome = (profile?.name || 'admin').trim().toLowerCase();
  return `local:${nome}`;
}

function obterInfoTipoRegistro(tipo) {
  switch (tipo) {
    case 'entrada':
      return 'Entrada';
    case 'saida_almoco':
      return 'Saída Almoço';
    case 'retorno_almoco':
      return 'Retorno Almoço';
    case 'saida':
      return 'Saída';
    case 'login':
      return 'Login';
    default:
      return tipo || 'Registro';
  }
}

function resumoRegistroAuditoria(registro) {
  if (!registro) {
    return '-';
  }
  const tipo = obterInfoTipoRegistro(registro.tipo || '');
  const hora = registro.hora || (registro.timestamp
    ? new Date(registro.timestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    : '');
  const data = registro.timestamp ? new Date(registro.timestamp).toISOString().split('T')[0] : '';
  const partes = [tipo, hora, data].filter(Boolean);
  return partes.length ? partes.join(' | ') : '-';
}

async function gerarHashSHA256(texto) {
  const encoder = new TextEncoder();
  const data = encoder.encode(texto);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(byte => byte.toString(16).padStart(2, '0'))
    .join('');
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
    let hashFinal = '';
    for (const registro of registrosOrdenados) {
      totalRegistros += 1;
      const payload = JSON.stringify(normalizarRegistroParaHash(registro));
      const hash = await gerarHashSHA256(`${hashAnterior}|${payload}`);
      hashAnterior = hash;
      hashFinal = hash;
    }
    resultado[dataKey] = {
      totalRegistros: registrosOrdenados.length,
      hashFinal
    };
  }
  return { dias: resultado, totalRegistros };
}

async function gerarChecksumExport(payload) {
  return gerarHashSHA256(JSON.stringify(payload));
}

function ordenarPorTimestamp(registros) {
  return registros.slice().sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
}

function ordenarPorEntrada(periodos) {
  return periodos.slice().sort((a, b) => new Date(a.entrada) - new Date(b.entrada));
}

function criarResumoCard(rotulo, valor) {
  return `
    <div class="summary-card">
      <span>${rotulo}</span>
      <strong>${valor}</strong>
    </div>
  `;
}

function obterSegundosPeriodo(periodo) {
  if (!periodo) {
    return 0;
  }
  const total = Number(periodo.totalSegundos);
  if (Number.isFinite(total) && total > 0) {
    return total;
  }
  const horas = Number(periodo.horas);
  const minutos = Number(periodo.minutos);
  if (Number.isFinite(horas) || Number.isFinite(minutos)) {
    return Math.max(0, (Number(horas) || 0) * 3600 + (Number(minutos) || 0) * 60);
  }
  const entrada = new Date(periodo.entrada);
  const saida = new Date(periodo.saida);
  if (!Number.isNaN(entrada.getTime()) && !Number.isNaN(saida.getTime())) {
    return Math.max(0, Math.floor((saida - entrada) / 1000));
  }
  return 0;
}

async function carregarRelatorio() {
  const manifest = chrome.runtime?.getManifest?.() || {};
  const data = await chrome.storage.local.get([
    'userProfile',
    'userData',
    'userDataEncrypted',
    'cryptoEnabled',
    'cryptoDeviceKeys',
    'darkMode',
    'empresaNome'
  ]);
  document.body.classList.toggle('dark-mode', Boolean(data.darkMode));

  const nomeEmpresa = data.empresaNome || manifest.name || 'Ponto Eletrônico';
  if (reportLogo) {
    reportLogo.src = chrome.runtime.getURL('icons/icon128.png');
  }
  if (reportCompany) {
    reportCompany.textContent = nomeEmpresa;
  }
  if (reportAppDesc) {
    reportAppDesc.textContent = manifest.description || 'Relatório detalhado de registros';
  }

  const profile = data.userProfile || {};
  const userKey = obterUsuarioChave(profile);
  const cryptoEnabled = data.cryptoEnabled !== false;
  let userData = {};
  if (cryptoEnabled && data.userDataEncrypted) {
    let chave = await carregarChaveCriptoSessao();
    if (!chave && profile.provider === 'google') {
      const keys = normalizarObjeto(data.cryptoDeviceKeys);
      const entry = keys[userKey];
      const rawBase64 = typeof entry === 'string' ? entry : (entry?.key || '');
      if (rawBase64) {
        chave = await importarChaveCripto(rawBase64);
      }
    }
    if (!chave) {
      if (reportContent) {
        reportContent.innerHTML = '<div class="report-empty">Dados criptografados. Abra o app, informe a senha e tente gerar o relatório novamente.</div>';
      }
      if (reportSummary) {
        reportSummary.innerHTML = '';
      }
      if (reportMeta) {
        reportMeta.innerHTML = '';
      }
      return;
    }
    const encryptedMap = normalizarObjeto(data.userDataEncrypted);
    const decrypted = await descriptografarDadosUsuario(encryptedMap[userKey], chave);
    if (!decrypted) {
      if (reportContent) {
        reportContent.innerHTML = '<div class="report-empty">Não foi possível descriptografar os dados deste usuário.</div>';
      }
      if (reportSummary) {
        reportSummary.innerHTML = '';
      }
      if (reportMeta) {
        reportMeta.innerHTML = '';
      }
      return;
    }
    userData = decrypted;
  } else {
    userData = normalizarObjeto(data.userData)[userKey] || {};
  }
  const registros = normalizarObjeto(userData.registros);
  const periodos = normalizarObjeto(userData.periodos);
  const totaisDiarios = normalizarObjeto(userData.totaisDiarios);
  const auditLogs = normalizarArray(userData.auditLogs);
  const ultimaLocalizacao = userData.ultimaLocalizacao || null;
  const hashInfo = await gerarHashEncadeadoPorDia(registros);
  const checksum = await gerarChecksumExport({
    userKey,
    registros,
    periodos,
    totaisDiarios,
    jornadaConfig: userData.jornadaConfig || {},
    feriados: normalizarArray(userData.feriados),
    auditLogs,
    hashesPorDia: hashInfo.dias
  });

  const todasDatas = Array.from(new Set([...Object.keys(registros), ...Object.keys(periodos)])).sort();
  const dataInicio = todasDatas[0] || '-';
  const dataFim = todasDatas[todasDatas.length - 1] || '-';
  const usuarioNome = profile.name || 'admin';
  const provider = profile.provider || 'local';
  const usuarioEmail = profile.email || '';

  if (reportMeta) {
    reportMeta.innerHTML = `
      <div><strong>Usuário:</strong> ${usuarioNome} ${provider === 'google' ? '(Google)' : '(Local)'}</div>
      ${usuarioEmail ? `<div><strong>Email:</strong> ${usuarioEmail}</div>` : ''}
      <div><strong>Período:</strong> ${dataInicio} a ${dataFim}</div>
      <div><strong>Gerado em:</strong> ${new Date().toLocaleString('pt-BR')}</div>
    `;
  }

  let totalRegistros = 0;
  let totalPeriodos = 0;
  let totalSegundos = 0;

  todasDatas.forEach(dataKey => {
    totalRegistros += normalizarArray(registros[dataKey]).length;
    const periodosDia = normalizarArray(periodos[dataKey]);
    totalPeriodos += periodosDia.length;
    periodosDia.forEach(periodo => {
      const segundos = periodo.totalSegundos !== undefined
        ? Number(periodo.totalSegundos) || 0
        : Math.floor((new Date(periodo.saida) - new Date(periodo.entrada)) / 1000);
      totalSegundos += Math.max(segundos, 0);
    });
  });

  if (reportSummary) {
    reportSummary.innerHTML = [
      criarResumoCard('Total de registros', String(totalRegistros)),
      criarResumoCard('Total de períodos', String(totalPeriodos)),
      criarResumoCard('Total de horas', formatarHoras(totalSegundos)),
      criarResumoCard('Dias no relatório', String(todasDatas.length)),
      criarResumoCard('Alterações', String(auditLogs.length))
    ].join('');
  }

  if (!reportContent) {
    return;
  }
  if (todasDatas.length === 0 && auditLogs.length === 0) {
    reportContent.innerHTML = '<div class="summary-card">Nenhum dado disponível para o usuário atual.</div>';
    return;
  }

  const blocos = [];
  todasDatas.forEach(dataKey => {
    const registrosDia = ordenarPorTimestamp(normalizarArray(registros[dataKey]));
    const localizacaoDia = obterLocalizacaoDia(registrosDia, ultimaLocalizacao);
    const periodosDia = ordenarPorEntrada(normalizarArray(periodos[dataKey]));
    let totalDiaSegundos = 0;
    const totalDia = totaisDiarios[dataKey];
    if (typeof totalDia === 'number') {
      totalDiaSegundos = totalDia;
    } else if (totalDia && typeof totalDia === 'object') {
      totalDiaSegundos = Number(totalDia.totalSegundos) || 0;
    }
    if (totalDiaSegundos <= 0) {
      periodosDia.forEach(periodo => {
        totalDiaSegundos += obterSegundosPeriodo(periodo);
      });
    }

    const registrosRows = registrosDia.map(reg => `
      <tr>
        <td>${dataKey}</td>
        <td>${reg.hora || '-'}</td>
        <td>${obterInfoTipoRegistro(reg.tipo)}</td>
        <td>${reg.usuario || '-'}</td>
        <td>${reg.usuarioProvider || '-'}</td>
        <td>${reg.usuarioEmail || '-'}</td>
        <td>${formatarLocalizacao(reg.localizacao || localizacaoDia)}</td>
        <td>${reg.timestamp || '-'}</td>
      </tr>
    `).join('');

    const periodosRows = periodosDia.map(periodo => {
      const entradaHora = new Date(periodo.entrada).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      const saidaHora = new Date(periodo.saida).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
      const segundos = obterSegundosPeriodo(periodo);
      return `
        <tr>
          <td>${dataKey}</td>
          <td>${entradaHora}</td>
          <td>${saidaHora}</td>
          <td>${formatarHoras(segundos)}</td>
          <td>${periodo.teveAlmoco ? 'Sim' : 'Não'}</td>
        </tr>
      `;
    }).join('');

    blocos.push(`
      <div class="day-section">
        <div class="day-header">
          <strong>${dataKey}</strong>
          <span>Total do dia: ${formatarHoras(totalDiaSegundos)}</span>
        </div>
        <div class="report-section-title">Registros do dia</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Hora</th>
              <th>Tipo</th>
              <th>Usuário</th>
              <th>Provider</th>
              <th>Email</th>
              <th>Localização</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            ${registrosRows || '<tr><td colspan="8">Sem registros.</td></tr>'}
          </tbody>
        </table>
        <div class="report-section-title">Períodos do dia</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Entrada</th>
              <th>Saída</th>
              <th>Total</th>
              <th>Almoço</th>
            </tr>
          </thead>
          <tbody>
            ${periodosRows || '<tr><td colspan="5">Sem períodos.</td></tr>'}
          </tbody>
        </table>
      </div>
    `);
  });

  if (auditLogs.length > 0) {
    const logsOrdenados = [...auditLogs].sort((a, b) => new Date(a.alteradoEm) - new Date(b.alteradoEm));
    const auditRows = logsOrdenados.map(log => `
      <tr>
        <td>${log.data || '-'}</td>
        <td>${log.acao || '-'}</td>
        <td>${log.motivo || '-'}</td>
        <td>${log.alteradoPor?.usuario || '-'}</td>
        <td>${log.alteradoPor?.provider || '-'}</td>
        <td>${log.alteradoPor?.email || '-'}</td>
        <td>${log.alteradoEm ? new Date(log.alteradoEm).toLocaleString('pt-BR') : '-'}</td>
        <td>${log.consentimento ? 'Sim' : 'Não'}</td>
        <td>${log.consentimentoEm ? new Date(log.consentimentoEm).toLocaleString('pt-BR') : '-'}</td>
        <td>${resumoRegistroAuditoria(log.antes)}</td>
        <td>${resumoRegistroAuditoria(log.depois)}</td>
      </tr>
    `).join('');

    blocos.push(`
      <div class="day-section">
        <div class="day-header">
          <strong>Histórico de alterações</strong>
          <span>Total: ${auditLogs.length}</span>
        </div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Ação</th>
              <th>Motivo</th>
              <th>Usuário</th>
              <th>Provider</th>
              <th>Email</th>
              <th>Alterado em</th>
              <th>Consentimento</th>
              <th>Consentimento em</th>
              <th>Antes</th>
              <th>Depois</th>
            </tr>
          </thead>
          <tbody>
            ${auditRows}
          </tbody>
        </table>
      </div>
    `);
  }

  blocos.push(`
    <div class="day-section">
      <div class="day-header">
        <strong>Integridade</strong>
        <span>Registros encadeados: ${hashInfo.totalRegistros}</span>
      </div>
      <div class="report-section-title">Checksum do relatório</div>
      <div class="report-checksum">${checksum}</div>
    </div>
  `);

  reportContent.innerHTML = blocos.join('');
}

if (reportPrint) {
  reportPrint.addEventListener('click', () => window.print());
}

if (reportClose) {
  reportClose.addEventListener('click', () => window.close());
}

document.addEventListener('DOMContentLoaded', () => {
  carregarRelatorio();
});
