import type { SiteConfig } from "../site.config";

// Funções puras: recebem a configuração e devolvem texto. O plugin do Vite
// (src/seo/vite-plugin-seo.ts) injeta o resultado no index.html no build.

const PLACEHOLDERS = ["dominio-do-cliente", "Nome do Cliente", "00000-0000", "5500000000000"];

function escapeHtml(valor: string): string {
  return valor
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function urlAbsoluta(site: SiteConfig, caminho: string): string {
  if (/^https?:\/\//.test(caminho)) return caminho;
  return `${site.url}${caminho.startsWith("/") ? "" : "/"}${caminho}`;
}

export function camposPendentes(site: SiteConfig): string[] {
  const texto = JSON.stringify(site);
  const pendentes = PLACEHOLDERS.filter((p) => texto.includes(p));
  if (!site.negocio.endereco && site.negocio.areaAtendida.length === 0) {
    pendentes.push("endereço ou área atendida");
  }
  return pendentes;
}

export function localBusinessJsonLd(site: SiteConfig): Record<string, unknown> {
  const { negocio } = site;
  const dados: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": negocio.tipo,
    "@id": `${site.url}/#negocio`,
    name: site.nome,
    description: site.descricao,
    url: site.url,
    image: urlAbsoluta(site, site.imagemCompartilhamento),
    telephone: negocio.telefone,
  };

  if (negocio.email) dados.email = negocio.email;
  if (negocio.faixaDePreco) dados.priceRange = negocio.faixaDePreco;

  if (negocio.endereco) {
    const e = negocio.endereco;
    dados.address = {
      "@type": "PostalAddress",
      streetAddress: e.bairro ? `${e.rua}, ${e.bairro}` : e.rua,
      addressLocality: e.cidade,
      addressRegion: e.estado,
      postalCode: e.cep,
      addressCountry: e.pais,
    };
  }

  if (negocio.coordenadas) {
    dados.geo = {
      "@type": "GeoCoordinates",
      latitude: negocio.coordenadas.latitude,
      longitude: negocio.coordenadas.longitude,
    };
  }

  if (negocio.horarios.length > 0) {
    dados.openingHoursSpecification = negocio.horarios.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dias,
      opens: h.abre,
      closes: h.fecha,
    }));
  }

  if (negocio.areaAtendida.length > 0) {
    dados.areaServed = negocio.areaAtendida.map((nome) => ({ "@type": "City", name: nome }));
  }

  if (negocio.perfis.length > 0) dados.sameAs = negocio.perfis;

  return dados;
}

export function tagsHead(site: SiteConfig): string {
  const imagem = urlAbsoluta(site, site.imagemCompartilhamento);
  // "<" escapado impede que um texto do cliente feche a tag <script>.
  const jsonLd = JSON.stringify(localBusinessJsonLd(site), null, 2).replace(/</g, "\\u003c");
  const t = escapeHtml(site.titulo);
  const d = escapeHtml(site.descricao);

  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${escapeHtml(site.url)}/" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${escapeHtml(site.nome)}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${escapeHtml(site.url)}/" />`,
    `<meta property="og:image" content="${escapeHtml(imagem)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">\n${jsonLd}\n</script>`,
  ].join("\n    ");
}

export function sitemapXml(site: SiteConfig): string {
  const urls = site.paginas
    .map((p) => `  <url><loc>${escapeHtml(urlAbsoluta(site, p))}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function robotsTxt(site: SiteConfig): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`;
}
