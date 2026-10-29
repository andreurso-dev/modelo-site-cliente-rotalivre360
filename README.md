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

4. Preencha `src/site.config.ts` com os dados reais do cliente (veja **SEO local** abaixo) e troque o favicon e a imagem `og.jpg` em `public/`.

## Arrumar um site que já existe

Copie a pasta `.claude/` deste modelo para o repositório do site e rode `/impeccable document` (registra o visual atual), depois `/impeccable critique` e só então `polish`, `layout` ou outro comando de correção.

## SEO local

Todos os dados do negócio ficam em **`src/site.config.ts`**: nome, título, descrição, domínio, telefone, WhatsApp, endereço, coordenadas, horários, área atendida e perfis (Instagram, Google Meu Negócio...). No `npm run build`, o modelo gera sozinho:

- `<title>`, meta description, link canônico e tags de compartilhamento (WhatsApp, Facebook, X);
- dados estruturados **JSON-LD** do tipo `LocalBusiness` (ou o tipo escolhido, como `TravelAgency` ou `Restaurant`), que ajudam o Google a mostrar endereço, horário e telefone;
- `sitemap.xml` e `robots.txt` com o domínio do cliente.

Enquanto houver dado de exemplo, o build mostra o aviso `[SEO] Preencha src/site.config.ts`. Para páginas além da inicial, use `usePageMeta("Título", "Descrição")` no componente da página e acrescente a rota em `paginas`.

Depois de publicar: valide em https://search.google.com/test/rich-results, envie o sitemap no Google Search Console e use exatamente o mesmo nome, endereço e telefone do perfil no Google Meu Negócio.

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
- SEO local gerado a partir de `src/site.config.ts`, e o helper `linkWhatsApp()` para botões de contato.
- Skill Impeccable (`.claude/skills/impeccable`) e seus subagentes (`.claude/agents`). Licença Apache 2.0, origem: github.com/pbakaus/impeccable.

## Integrações opcionais

Supabase, formulários e analytics ficam de fora para o modelo continuar leve. Adicione só quando o cliente precisar.
