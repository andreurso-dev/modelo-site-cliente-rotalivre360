import type { Plugin } from "vite";
import { site } from "../site.config";
import { camposPendentes, robotsTxt, sitemapXml, tagsHead } from "./seo";

const MARCADOR = "<!-- seo -->";

export function seo(): Plugin {
  return {
    name: "seo-local",
    transformIndexHtml(html) {
      return html.replace(MARCADOR, tagsHead(site));
    },
    generateBundle() {
      const pendentes = camposPendentes(site);
      if (pendentes.length > 0) {
        this.warn(`[SEO] Preencha src/site.config.ts antes de publicar. Pendente: ${pendentes.join(", ")}`);
      }
      this.emitFile({ type: "asset", fileName: "sitemap.xml", source: sitemapXml(site) });
      this.emitFile({ type: "asset", fileName: "robots.txt", source: robotsTxt(site) });
    },
  };
}
