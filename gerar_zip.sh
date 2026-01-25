#!/usr/bin/env bash
set -euo pipefail

OUT="${1:-controle-ponto-extensao.zip}"

FILES=(
  manifest.json
  popup.html
  popup.js
  styles.css
  relatorio.html
  relatorio.css
  relatorio.js
  guia.html
  guia.css
  guia.js
  comprovante.html
  comprovante.css
  comprovante.js
  backup.html
  backup.js
  background.js
  icons
)

for f in "${FILES[@]}"; do
  if [[ ! -e "$f" ]]; then
    echo "Arquivo/pasta ausente: $f" >&2
    exit 1
  fi
done

rm -f "$OUT"
zip -r "$OUT" "${FILES[@]}"
echo "ZIP gerado: $OUT"
