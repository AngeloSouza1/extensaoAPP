#!/usr/bin/env python3
"""
Script para gerar ícones básicos para a extensão de ponto eletrônico.
Requer: pip install Pillow
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    import os
except ImportError:
    print("Por favor, instale o Pillow: pip install Pillow")
    exit(1)

def criar_icone(tamanho, caminho):
    """Cria um ícone simples com um relógio"""
    # Criar imagem com fundo transparente
    img = Image.new('RGBA', (tamanho, tamanho), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    
    # Cor principal (roxo/azul)
    cor_principal = (102, 126, 234, 255)  # #667eea
    
    # Desenhar círculo de fundo
    margin = tamanho // 8
    draw.ellipse([margin, margin, tamanho - margin, tamanho - margin], 
                 fill=cor_principal, outline=None)
    
    # Desenhar ponteiros do relógio (simplificado)
    centro = tamanho // 2
    # Ponteiro das horas (mais curto)
    draw.line([centro, centro, centro, centro - tamanho // 4], 
              fill=(255, 255, 255, 255), width=max(2, tamanho // 16))
    # Ponteiro dos minutos (mais longo)
    draw.line([centro, centro, centro + tamanho // 5, centro], 
              fill=(255, 255, 255, 255), width=max(2, tamanho // 20))
    
    # Salvar imagem
    img.save(caminho, 'PNG')
    print(f"Ícone criado: {caminho} ({tamanho}x{tamanho})")

if __name__ == "__main__":
    # Criar diretório icons se não existir
    os.makedirs('icons', exist_ok=True)
    
    # Criar os três tamanhos de ícone
    criar_icone(16, 'icons/icon16.png')
    criar_icone(48, 'icons/icon48.png')
    criar_icone(128, 'icons/icon128.png')
    
    print("\n✅ Todos os ícones foram criados com sucesso!")

