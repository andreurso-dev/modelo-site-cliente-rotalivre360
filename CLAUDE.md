# Site de cliente

Este repositório nasceu do modelo de sites de clientes. Responda e escreva textos do site em português do Brasil.

## Fluxo de trabalho

- Antes de desenhar ou mudar interface, use a skill `impeccable`. Ela carrega `PRODUCT.md` e `DESIGN.md`; se não existirem, comece por `/impeccable init` a partir do `BRIEFING.md`.
- Nunca invente fatos do cliente (preços, endereços, depoimentos, números, prêmios). Use o que está no briefing ou deixe um marcador `[CONFIRMAR COM CLIENTE]`.
- Cores, fontes e raios vivem como variáveis em `src/index.css`. Não espalhe cores fixas pelos componentes.
- Reaproveite os componentes de `src/components/ui` antes de criar novos.

## Qualidade mínima antes de entregar

- `npm run build` e `npm run lint` sem erros.
- Página conferida em celular (375px) e desktop.
- `title`, `description` e imagem de compartilhamento preenchidos em `index.html`.
- Botão de contato principal (WhatsApp, telefone ou formulário) visível sem rolar no celular.
