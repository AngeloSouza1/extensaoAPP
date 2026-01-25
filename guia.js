const guideLogo = document.getElementById('guideLogo');
const guideCompany = document.getElementById('guideCompany');
const guideMeta = document.getElementById('guideMeta');
const guidePrint = document.getElementById('guidePrint');
const guideClose = document.getElementById('guideClose');

async function carregarGuia() {
  const manifest = chrome.runtime?.getManifest?.() || {};
  const data = await chrome.storage.local.get(['darkMode', 'empresaNome', 'userProfile']);
  document.body.classList.toggle('dark-mode', Boolean(data.darkMode));
  const nomeEmpresa = data.empresaNome || manifest.name || 'Ponto Eletronico';
  if (guideLogo) {
    guideLogo.src = chrome.runtime.getURL('icons/icon128.png');
  }
  if (guideCompany) {
    guideCompany.textContent = nomeEmpresa;
  }
  if (guideMeta) {
    const usuario = data.userProfile?.name || 'admin';
    guideMeta.innerHTML = `
      <div><strong>Usuario:</strong> ${usuario}</div>
      <div><strong>Gerado em:</strong> ${new Date().toLocaleString('pt-BR')}</div>
    `;
  }
}

if (guidePrint) {
  guidePrint.addEventListener('click', () => window.print());
}

if (guideClose) {
  guideClose.addEventListener('click', () => window.close());
}

document.addEventListener('DOMContentLoaded', () => {
  carregarGuia();
});
