# Ponto Eletronico - Extensao para navegador

Uma extensao para controle de ponto com registro de batidas, resumos, auditoria e exportacoes. Foco em uso diario e integridade dos dados.

## Funcionalidades (com exemplos)

### 1) Registro de ponto
- Entrada, Saida, Almoco e Retorno.
- Exemplo: Entrada 09:00 -> Saida Almoco 12:00 -> Retorno 13:00 -> Saida 18:00.

### 2) Historico do dia
- Lista registros e periodos calculados.
- Exemplo: dois periodos no mesmo dia (manha e tarde).

### 3) Jornada padrao e alertas
- Jornada com entrada/saida e pausa de almoco.
- Alerta de ausencia de saida apos X horas.
- Exemplo: Jornada 09:00-18:00, Almoco 12:00-13:00.

### 4) Resumos semanal e mensal
- Total, media, horas extras e faltas.
- Considera feriados cadastrados.
- Exemplo: semana com 1 feriado reduz faltas.

### 5) Feriados
- Cadastro por data e descricao.
- Exemplo: 01/01 - Confraternizacao Universal.

### 6) Login local e Google (multiusuario)
- Dados isolados por usuario.
- Exemplo: admin (local) nao compartilha dados com usuario Google.

### 7) Edicao com motivo e consentimento
- Toda edicao/adicao manual exige motivo e confirmacao.
- Exemplo: "Esqueci a batida" + checkbox de consentimento.

### 8) Log de alteracoes
- Auditoria completa: quem, quando, antes/depois, motivo e consentimento.
- Exemplo: alteracao em 12/01 10:15 com antes/depois registrados.

### 9) Geolocalizacao
- Registra cidade e coordenadas (quando permitido).
- Exemplo: "Cacapava - SP | -23.07, -45.71".

### 10) Exportacoes e backups
- Exportacao JSON e CSV.
- Espelho (JSON) e AFD (CSV) provisios.
- Backup/restauracao via menu.
- Exemplo: exportar espelho para auditoria interna.

### 11) Relatorio PDF
- PDF detalhado com registros, periodos, auditoria e checksum.
- Exemplo: relatorio mensal completo para conferencia.

### 12) Integridade e assinatura local
- Hash encadeado por dia + checksum nos exports.
- Espelho inclui assinatura digital local (autoassinado).
- Exemplo: qualquer alteracao no arquivo invalida o checksum.

## Exportacoes

- Exportar Dados (JSON): dados do usuario atual.
- Exportar CSV: registros, periodos e auditoria.
- Espelho (JSON): exportacao detalhada com resumo e integridade.
- AFD (CSV): formato provisio para uso interno.
- Relatorio PDF: documento completo por topicos.

## Observacoes legais

- AFD/Espelho estao em formato provisio. Para padrao oficial, e necessario o layout da Portaria 671.
- Assinatura digital atual e local (nao ICP-Brasil).

## Instalacao (Chrome/Edge/Brave)

1. Acesse `chrome://extensions`.
2. Ative o modo desenvolvedor.
3. Clique em "Carregar sem compactacao".
4. Selecione a pasta do projeto.

## Distribuicao (pasta ou ZIP)

- Envie a pasta da extensao inteira ou um ZIP com os arquivos da extensao.
- Quem receber so precisa repetir o mesmo processo em `chrome://extensions`.

Para gerar um ZIP limpo (somente arquivos da extensao), um exemplo:

```bash
zip -r controle-ponto-extensao.zip \
  manifest.json popup.html popup.js styles.css \
  relatorio.html relatorio.css relatorio.js \
  guia.html guia.css guia.js \
  comprovante.html comprovante.css comprovante.js \
  backup.html backup.js background.js icons/
```

Ou use o script:

```bash
./gerar_zip.sh
```

Opcionalmente, informe um nome de arquivo:

```bash
./gerar_zip.sh minha-extensao.zip
```

## Monitoramento (dashboard)

Este projeto agora pode enviar eventos para um servidor Node/Express e mostrar um dashboard com filtros e atualizacao em tempo real.

### 1) Subir o servidor

1. `cd server`
2. `npm install`
3. `PORT=8787 MONITOR_API_KEY=chave-opcional npm start`
4. Acesse `http://localhost:8787`

Variaveis:
- `PORT`: porta do servidor (padrao 8787).
- `DB_PATH`: caminho do banco SQLite (padrao `server/data/monitor.db`).
- `MONITOR_API_KEY`: se definido, exige a chave nas requisicoes.
- `MONITOR_DASH_USER`: usuario do dashboard (opcional).
- `MONITOR_DASH_PASS`: senha do dashboard (opcional).
- `MONITOR_DASH_TOKEN_TTL_MS`: expira tokens do dashboard (opcional).
- `MONITOR_SESSION_TTL_MIN`: minutos de inatividade para considerar sessao ativa (padrao 60, 0 desativa).

### 2) Configurar na extensao

Menu -> Monitoramento:
- Ativar envio de eventos
- URL do servidor (ex: `http://localhost:8787`)
- Chave API (se configurada no servidor)

Defina `MONITOR_DASH_USER` e `MONITOR_DASH_PASS` no servidor (obrigatorio para login).
Se quiser proteger também o envio de eventos da extensão, defina `MONITOR_API_KEY` e configure a chave no menu Monitoramento da extensão.

Obs: se o servidor estiver em outro host/IP, ajuste `host_permissions` no `manifest.json` para liberar o dominio.

## Uso rapido

- Clique em Entrada para iniciar.
- Use Almoco/Retorno se houver pausa.
- Clique em Saida para encerrar o periodo.
- Use o menu para resumos, backups e exportacoes.

## Estrutura do projeto

```
ExtensaoControlePonto/
├── manifest.json
├── popup.html
├── popup.js
├── styles.css
├── relatorio.html
├── relatorio.css
├── relatorio.js
├── guia.html
├── guia.css
├── guia.js
├── comprovante.html
├── comprovante.css
├── comprovante.js
├── backup.html
├── backup.js
├── icons/
└── README.md
```

## Privacidade

Os dados ficam no armazenamento local do navegador. Nada e enviado para servidores externos.

## Suporte

Abra uma issue ou descreva o problema no chat para ajustes e melhorias.
# extensaoAPP
