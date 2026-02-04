const receiptType = document.getElementById('receiptType');
const receiptDate = document.getElementById('receiptDate');
const receiptTime = document.getElementById('receiptTime');
const receiptUser = document.getElementById('receiptUser');
const receiptProvider = document.getElementById('receiptProvider');
const receiptLocation = document.getElementById('receiptLocation');
const receiptTimestamp = document.getElementById('receiptTimestamp');
const receiptSignature = document.getElementById('receiptSignature');
const receiptIssued = document.getElementById('receiptIssued');
const receiptPrint = document.getElementById('receiptPrint');
const receiptClose = document.getElementById('receiptClose');
const receiptLogo = document.getElementById('receiptLogo');
const receiptCompany = document.getElementById('receiptCompany');
const receiptCompanyRow = document.getElementById('receiptCompanyRow');

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

function preencherCampo(elemento, valor) {
  if (!elemento) {
    return;
  }
  elemento.textContent = valor || '-';
}

async function carregarComprovante() {
  const data = await chrome.storage.local.get(['comprovanteAtual', 'darkMode', 'empresaNome']);
  document.body.classList.toggle('dark-mode', Boolean(data.darkMode));
  const manifestName = chrome.runtime?.getManifest?.().name || 'Ponto Eletrônico';
  const nomeEmpresa = data.empresaNome || manifestName;
  if (receiptLogo) {
    receiptLogo.src = chrome.runtime.getURL('icons/icon128.png');
  }
  preencherCampo(receiptCompany, nomeEmpresa);
  preencherCampo(receiptCompanyRow, nomeEmpresa);
  const comprovante = data.comprovanteAtual;
  if (!comprovante) {
    preencherCampo(receiptType, 'Nenhum comprovante encontrado.');
    return;
  }

  preencherCampo(receiptType, comprovante.tipoTexto || comprovante.tipo || '-');
  preencherCampo(receiptDate, comprovante.data);
  preencherCampo(receiptTime, comprovante.hora);
  preencherCampo(receiptUser, comprovante.usuario || '-');
  preencherCampo(receiptProvider, comprovante.usuarioProvider || '-');
  preencherCampo(receiptLocation, formatarTextoLocalizacao(comprovante.localizacao));
  preencherCampo(receiptTimestamp, comprovante.timestamp);
  preencherCampo(receiptSignature, comprovante.assinatura);
  const emitido = comprovante.emitidoEm
    ? new Date(comprovante.emitidoEm).toLocaleString('pt-BR')
    : '';
  preencherCampo(receiptIssued, emitido);
}

if (receiptPrint) {
  receiptPrint.addEventListener('click', () => window.print());
}

if (receiptClose) {
  receiptClose.addEventListener('click', () => window.close());
}

document.addEventListener('DOMContentLoaded', () => {
  carregarComprovante();
});
