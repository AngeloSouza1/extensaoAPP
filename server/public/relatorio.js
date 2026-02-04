const reportContent = document.getElementById('reportContent');
const reportSummary = document.getElementById('reportSummary');
const reportMeta = document.getElementById('reportMeta');
const reportLogo = document.getElementById('reportLogo');
const reportCompany = document.getElementById('reportCompany');
const reportAppDesc = document.getElementById('reportAppDesc');
const reportPrint = document.getElementById('reportPrint');
const reportClose = document.getElementById('reportClose');

const REPORT_STORAGE_KEY = 'monitor_report_json';
const DEFAULT_TITLE = 'Ponto Eletronico';
const LOGO_DATA_URI = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ccircle cx='32' cy='32' r='28' fill='%231f6f8b'/%3E%3Ccircle cx='32' cy='32' r='24' fill='%23fff4e6'/%3E%3Cpath d='M32 18v16l10 8' stroke='%231f6f8b' stroke-width='4' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E";

function normalizarObjeto(valor) {
  return valor && typeof valor === 'object' && !Array.isArray(valor) ? valor : {};
}

function normalizarArray(valor) {
  return Array.isArray(valor) ? valor : [];
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

function obterInfoTipoRegistro(tipo) {
  switch (tipo) {
    case 'entrada':
      return 'Entrada';
    case 'saida_almoco':
      return 'Saida Almoco';
    case 'retorno_almoco':
      return 'Retorno Almoco';
    case 'saida':
      return 'Saida';
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
  if (!globalThis.crypto || !crypto.subtle) {
    return '';
  }
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

function buildDataMaps(data) {
  const registros = normalizarObjeto(data.registros);
  const periodos = normalizarObjeto(data.periodos);
  const totaisDiarios = normalizarObjeto(data.totaisDiarios);
  if (Array.isArray(data.dias)) {
    data.dias.forEach(dia => {
      if (!dia || !dia.data) {
        return;
      }
      const dateKey = dia.data;
      if (!Array.isArray(registros[dateKey]) || registros[dateKey].length === 0) {
        if (Array.isArray(dia.registros)) {
          registros[dateKey] = dia.registros;
        }
      }
      if (!Array.isArray(periodos[dateKey]) || periodos[dateKey].length === 0) {
        if (Array.isArray(dia.periodos)) {
          periodos[dateKey] = dia.periodos;
        }
      }
      if (totaisDiarios[dateKey] === undefined && dia.totalSegundos !== undefined) {
        totaisDiarios[dateKey] = Number(dia.totalSegundos) || 0;
      }
    });
  }
  return { registros, periodos, totaisDiarios };
}

function buildDateList(registros, periodos, dias) {
  const keys = new Set([...Object.keys(registros), ...Object.keys(periodos)]);
  if (Array.isArray(dias)) {
    dias.forEach(dia => {
      if (dia?.data) {
        keys.add(dia.data);
      }
    });
  }
  return Array.from(keys).sort();
}

function hashInfoFromIntegridade(integridade) {
  const hashesPorDia = normalizarObjeto(integridade?.hashesPorDia);
  const dias = Object.keys(hashesPorDia);
  if (dias.length === 0) {
    return null;
  }
  let totalRegistros = 0;
  dias.forEach(dataKey => {
    const total = Number(hashesPorDia[dataKey]?.totalRegistros);
    if (Number.isFinite(total)) {
      totalRegistros += total;
    }
  });
  return { dias: hashesPorDia, totalRegistros };
}

async function carregarRelatorio() {
  if (reportLogo) {
    reportLogo.src = LOGO_DATA_URI;
  }
  if (reportCompany) {
    reportCompany.textContent = DEFAULT_TITLE;
  }
  if (reportAppDesc) {
    reportAppDesc.textContent = 'Relatorio detalhado';
  }

  const raw = window.localStorage.getItem(REPORT_STORAGE_KEY);
  if (!raw) {
    if (reportContent) {
      reportContent.innerHTML = '<div class="report-empty">Nenhum JSON carregado. Volte ao dashboard e selecione o arquivo.</div>';
    }
    if (reportSummary) {
      reportSummary.innerHTML = '';
    }
    if (reportMeta) {
      reportMeta.innerHTML = '';
    }
    return;
  }

  let data = null;
  try {
    data = JSON.parse(raw);
  } catch (error) {
    if (reportContent) {
      reportContent.innerHTML = '<div class="report-empty">JSON invalido. Recarregue o arquivo no dashboard.</div>';
    }
    if (reportSummary) {
      reportSummary.innerHTML = '';
    }
    if (reportMeta) {
      reportMeta.innerHTML = '';
    }
    return;
  }

  const user = data.usuario || data.user || {};
  const userKey = user.chave || user.key || '';
  const usuarioNome = user.nome || user.name || 'admin';
  const provider = user.provider || 'local';
  const usuarioEmail = user.email || '';

  if (reportCompany) {
    reportCompany.textContent = data.empresaNome || DEFAULT_TITLE;
  }
  if (reportAppDesc) {
    reportAppDesc.textContent = data.tipo || 'Relatorio detalhado';
  }

  const auditLogs = normalizarArray(data.auditLogs);
  const ultimaLocalizacao = data.ultimaLocalizacao || null;
  const { registros, periodos, totaisDiarios } = buildDataMaps(data);
  const todasDatas = buildDateList(registros, periodos, data.dias);
  const dataInicio = todasDatas[0] || '-';
  const dataFim = todasDatas[todasDatas.length - 1] || '-';
  const exportadoEm = data.exportadoEm ? new Date(data.exportadoEm).toLocaleString('pt-BR') : new Date().toLocaleString('pt-BR');

  if (reportMeta) {
    reportMeta.innerHTML = `
      <div><strong>Usuario:</strong> ${usuarioNome} ${provider === 'google' ? '(Google)' : '(Local)'}</div>
      ${usuarioEmail ? `<div><strong>Email:</strong> ${usuarioEmail}</div>` : ''}
      <div><strong>Periodo:</strong> ${dataInicio} a ${dataFim}</div>
      <div><strong>Gerado em:</strong> ${exportadoEm}</div>
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
      totalSegundos += Math.max(obterSegundosPeriodo(periodo), 0);
    });
  });

  if (reportSummary) {
    reportSummary.innerHTML = [
      criarResumoCard('Total de registros', String(totalRegistros)),
      criarResumoCard('Total de periodos', String(totalPeriodos)),
      criarResumoCard('Total de horas', formatarHoras(totalSegundos)),
      criarResumoCard('Dias no relatorio', String(todasDatas.length)),
      criarResumoCard('Alteracoes', String(auditLogs.length))
    ].join('');
  }

  if (!reportContent) {
    return;
  }

  if (todasDatas.length === 0 && auditLogs.length === 0) {
    reportContent.innerHTML = '<div class="summary-card">Nenhum dado disponivel para o JSON selecionado.</div>';
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
      const entradaHora = periodo.entrada
        ? new Date(periodo.entrada).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        : '-';
      const saidaHora = periodo.saida
        ? new Date(periodo.saida).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
        : '-';
      const segundos = obterSegundosPeriodo(periodo);
      return `
        <tr>
          <td>${dataKey}</td>
          <td>${entradaHora}</td>
          <td>${saidaHora}</td>
          <td>${formatarHoras(segundos)}</td>
          <td>${periodo.teveAlmoco ? 'Sim' : 'Nao'}</td>
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
              <th>Usuario</th>
              <th>Provider</th>
              <th>Email</th>
              <th>Localizacao</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            ${registrosRows || '<tr><td colspan="8">Sem registros.</td></tr>'}
          </tbody>
        </table>
        <div class="report-section-title">Periodos do dia</div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Entrada</th>
              <th>Saida</th>
              <th>Total</th>
              <th>Almoco</th>
            </tr>
          </thead>
          <tbody>
            ${periodosRows || '<tr><td colspan="5">Sem periodos.</td></tr>'}
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
        <td>${log.consentimento ? 'Sim' : 'Nao'}</td>
        <td>${log.consentimentoEm ? new Date(log.consentimentoEm).toLocaleString('pt-BR') : '-'}</td>
        <td>${resumoRegistroAuditoria(log.antes)}</td>
        <td>${resumoRegistroAuditoria(log.depois)}</td>
      </tr>
    `).join('');

    blocos.push(`
      <div class="day-section">
        <div class="day-header">
          <strong>Historico de alteracoes</strong>
          <span>Total: ${auditLogs.length}</span>
        </div>
        <table class="report-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Acao</th>
              <th>Motivo</th>
              <th>Usuario</th>
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

  let hashInfo = hashInfoFromIntegridade(data.integridade);
  if (!hashInfo) {
    hashInfo = await gerarHashEncadeadoPorDia(registros);
  }
  let checksum = data.integridade?.checksum
    || data.integridade?.checksumExport
    || data.assinaturaDigital?.hashAssinado
    || '';
  if (!checksum) {
    try {
      checksum = await gerarChecksumExport({
        userKey,
        registros,
        periodos,
        totaisDiarios,
        jornadaConfig: data.jornadaConfig || {},
        feriados: normalizarArray(data.feriados),
        auditLogs,
        hashesPorDia: hashInfo.dias
      });
    } catch (error) {
      checksum = '';
    }
  }

  blocos.push(`
    <div class="day-section">
      <div class="day-header">
        <strong>Integridade</strong>
        <span>Registros encadeados: ${hashInfo.totalRegistros || 0}</span>
      </div>
      <div class="report-section-title">Checksum do relatorio</div>
      <div class="report-checksum">${checksum || '-'}</div>
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
