# Site de cliente

Este repositório nasceu do modelo de sites de clientes. Responda e escreva textos do site em português do Brasil.

## Fluxo de trabalho

- Antes de desenhar ou mudar interface, use a skill `impeccable`. Ela carrega `PRODUCT.md` e `DESIGN.md`; se não existirem, comece por `/impeccable init` a partir do `BRIEFING.md`.
- Nunca invente fatos do cliente (preços, endereços, depoimentos, números, prêmios). Use o que está no briefing ou deixe um marcador `[CONFIRMAR COM CLIENTE]`.
- Cores, fontes e raios vivem como variáveis em `src/index.css`. Não espalhe cores fixas pelos componentes.
- Dados do negócio (nome, contatos, endereço, horários) vêm de `src/site.config.ts`. Não repita esses dados soltos nos componentes; importe `site` e use `linkWhatsApp()`.
- Toda página nova: chame `usePageMeta` e inclua a rota em `site.paginas`.
- Reaproveite os componentes de `src/components/ui` antes de criar novos.

## Qualidade mínima antes de entregar

- `npm run build` e `npm run lint` sem erros.
- Página conferida em celular (375px) e desktop.
- `npm run build` sem o aviso `[SEO]` (todos os dados de exemplo trocados em `src/site.config.ts`) e `public/og.jpg` (1200x630) presente.
- Botão de contato principal (WhatsApp, telefone ou formulário) visível sem rolar no celular.
