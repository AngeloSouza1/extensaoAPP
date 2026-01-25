const restoreFile = document.getElementById('restoreFile');
const restoreBtn = document.getElementById('restoreBtn');
const restoreStatus = document.getElementById('restoreStatus');
const confirmModal = document.getElementById('confirmModal');
const confirmTitle = document.getElementById('confirmTitle');
const confirmText = document.getElementById('confirmText');
const confirmCancel = document.getElementById('confirmCancel');
const confirmOk = document.getElementById('confirmOk');

let confirmResolve = null;
const LOGIN_DEFAULT_USER = 'admin';

function normalizarObjeto(valor) {
  return valor && typeof valor === 'object' && !Array.isArray(valor) ? valor : {};
}

function normalizarArray(valor) {
  return Array.isArray(valor) ? valor : [];
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

function normalizarUserData(raw) {
  const base = normalizarObjeto(raw);
  const resultado = {};
  Object.entries(base).forEach(([key, value]) => {
    resultado[key] = normalizarDadosUsuario(value);
  });
  return resultado;
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

function obterUsuarioChavePorProfile(profile) {
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
  const nome = (profile?.name || LOGIN_DEFAULT_USER).trim().toLowerCase();
  return `local:${nome}`;
}

function setStatus(text, type = 'info') {
  if (!restoreStatus) {
    return;
  }
  restoreStatus.textContent = text;
  restoreStatus.classList.remove('hidden', 'success', 'error', 'info');
  restoreStatus.classList.add(type);
}

async function aplicarTema() {
  const data = await chrome.storage.local.get(['darkMode']);
  document.body.classList.toggle('dark-mode', Boolean(data.darkMode));
}

function abrirConfirmacao(texto) {
  if (!confirmModal || !confirmText || !confirmTitle) {
    return Promise.resolve(false);
  }
  confirmTitle.textContent = 'Confirmar restauração';
  confirmText.textContent = texto;
  confirmModal.classList.add('open');
  confirmModal.setAttribute('aria-hidden', 'false');
  return new Promise(resolve => {
    confirmResolve = resolve;
  });
}

function fecharConfirmacao(resultado) {
  if (!confirmModal) {
    return;
  }
  confirmModal.classList.remove('open');
  confirmModal.setAttribute('aria-hidden', 'true');
  if (confirmResolve) {
    confirmResolve(Boolean(resultado));
    confirmResolve = null;
  }
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

async function restaurarBackup(data) {
  const dados = extrairDadosBackup(data);
  if (!dados) {
    setStatus('Arquivo inválido. Escolha um backup exportado pela extensão.', 'error');
    return;
  }

  const confirmou = await abrirConfirmacao('Esta ação substitui seus registros atuais. Deseja continuar?');
  if (!confirmou) {
    setStatus('Restauração cancelada.', 'info');
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
    const userKey = obterUsuarioChavePorProfile(atuais.userProfile);
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
  await aplicarTema();
  setStatus('Backup restaurado. Pode fechar esta janela e voltar ao app.', 'success');
  if (restoreBtn) {
    restoreBtn.disabled = true;
    restoreBtn.textContent = 'Restaurado';
  }
  if (restoreFile) {
    restoreFile.disabled = true;
  }
}

async function lerArquivoSelecionado(file) {
  if (!file) {
    setStatus('Selecione um arquivo JSON antes de restaurar.', 'error');
    return;
  }
  try {
    const text = await file.text();
    const data = JSON.parse(text);
    await restaurarBackup(data);
  } catch (error) {
    setStatus('Não foi possível ler este arquivo JSON.', 'error');
  }
}

if (restoreBtn) {
  restoreBtn.addEventListener('click', async () => {
    const file = restoreFile?.files?.[0];
    await lerArquivoSelecionado(file);
  });
}

if (restoreFile) {
  restoreFile.addEventListener('change', async () => {
    const file = restoreFile.files?.[0];
    if (file) {
      setStatus(`Arquivo selecionado: ${file.name}`, 'info');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  aplicarTema();
});

if (confirmCancel) {
  confirmCancel.addEventListener('click', () => fecharConfirmacao(false));
}

if (confirmOk) {
  confirmOk.addEventListener('click', () => fecharConfirmacao(true));
}

if (confirmModal) {
  confirmModal.addEventListener('click', event => {
    if (event.target === confirmModal) {
      fecharConfirmacao(false);
    }
  });
}
