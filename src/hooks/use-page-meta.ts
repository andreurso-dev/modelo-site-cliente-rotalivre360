import { useEffect } from "react";
import { site } from "@/site.config";

// Título e descrição por página (rotas além da inicial).
export function usePageMeta(titulo: string, descricao?: string) {
  useEffect(() => {
    document.title = `${titulo} | ${site.nome}`;
    if (descricao) {
      document.querySelector('meta[name="description"]')?.setAttribute("content", descricao);
    }
    return () => {
      document.title = site.titulo;
      document.querySelector('meta[name="description"]')?.setAttribute("content", site.descricao);
    };
  }, [titulo, descricao]);
}
