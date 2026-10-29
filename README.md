# Modelo de site para clientes

Ponto de partida para os sites de clientes: Vite + React + TypeScript + Tailwind + shadcn/ui, com a skill de design **Impeccable** já instalada para o Claude Code.

## Começar um cliente novo

1. No GitHub, clique em **Use this template → Create a new repository** e dê o nome do cliente (ex.: `site-pousada-mar-azul`).
2. Preencha o `BRIEFING.md` com o cliente (ou cole as respostas dele no chat do Claude).
3. Abra uma sessão do Claude Code no repositório novo e rode, em ordem:

| Passo | Comando | O que faz |
|---|---|---|
| 1 | `/impeccable init` | Lê o briefing e cria o `PRODUCT.md` (público, tom, objetivo). |
| 2 | `/impeccable shape página inicial` | Planeja a estrutura e o fluxo antes de escrever código. |
| 3 | Pedir a construção da página | Ex.: "construa a página inicial seguindo o shape". |
| 4 | `/impeccable critique` | Revisão de UX com notas, antes de mostrar ao cliente. |
| 5 | `/impeccable audit` | Acessibilidade, performance e celular. |
| 6 | `/impeccable polish` | Acabamento final. |
| 7 | `/impeccable document` | Registra o sistema visual em `DESIGN.md` para manutenções futuras. |

4. Troque título, descrição e favicon em `index.html` e `public/`.

## Arrumar um site que já existe

Copie a pasta `.claude/` deste modelo para o repositório do site e rode `/impeccable document` (registra o visual atual), depois `/impeccable critique` e só então `polish`, `layout` ou outro comando de correção.

## Rodar localmente

```sh
npm install
npm run dev        # http://localhost:8080
npm run build      # gera dist/ para publicar
```

## O que vem pronto

- Todos os componentes do shadcn/ui em `src/components/ui`.
- Tokens de cor e fonte neutros em `src/index.css` (cada cliente recebe os seus).
- Rotas com `react-router-dom` e página 404 em português.
- Skill Impeccable (`.claude/skills/impeccable`) e seus subagentes (`.claude/agents`). Licença Apache 2.0, origem: github.com/pbakaus/impeccable.

## Integrações opcionais

Supabase, formulários e analytics ficam de fora para o modelo continuar leve. Adicione só quando o cliente precisar.
