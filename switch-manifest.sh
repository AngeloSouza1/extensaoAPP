#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET="${1:-}"
CHROME_MANIFEST="$ROOT_DIR/manifest.chrome.json"
BRAVE_MANIFEST="$ROOT_DIR/manifest.brave.json"
ACTIVE_MANIFEST="$ROOT_DIR/manifest.json"

if [[ -z "$TARGET" ]]; then
  echo "Uso: ./switch-manifest.sh [chrome|brave]" >&2
  exit 1
fi

case "$TARGET" in
  chrome)
    if [[ ! -f "$CHROME_MANIFEST" ]]; then
      if [[ -f "$ACTIVE_MANIFEST" ]]; then
        cp "$ACTIVE_MANIFEST" "$CHROME_MANIFEST"
        echo "manifest.chrome.json criado a partir do manifest.json atual."
      else
        echo "manifest.chrome.json nao encontrado." >&2
        exit 1
      fi
    fi
    cp "$CHROME_MANIFEST" "$ACTIVE_MANIFEST"
    echo "manifest.json atualizado para Chrome."
    ;;
  brave)
    if [[ ! -f "$BRAVE_MANIFEST" ]]; then
      echo "manifest.brave.json nao encontrado." >&2
      exit 1
    fi
    cp "$BRAVE_MANIFEST" "$ACTIVE_MANIFEST"
    echo "manifest.json atualizado para Brave."
    ;;
  *)
    echo "Opcao invalida: $TARGET" >&2
    echo "Uso: ./switch-manifest.sh [chrome|brave]" >&2
    exit 1
    ;;
 esac
