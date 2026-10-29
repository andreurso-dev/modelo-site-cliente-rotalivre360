import { Button } from "@/components/ui/button";
import { linkWhatsApp, site } from "@/site.config";

// Página provisória. O site do cliente é desenhado a partir do briefing:
// preencha BRIEFING.md e rode `/impeccable init` e depois `/impeccable shape`.
const Index = () => (
  <main className="container flex min-h-screen flex-col items-start justify-center gap-6 py-16">
    <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">Modelo de site</p>
    <h1 className="max-w-2xl font-display text-4xl font-semibold leading-tight md:text-5xl">
      {site.nome}
    </h1>
    <p className="max-w-xl text-lg text-muted-foreground">
      Substitua esta página seguindo o passo a passo do README.
    </p>
    <Button asChild size="lg">
      <a href={linkWhatsApp("Olá! Vim pelo site.")}>Falar no WhatsApp</a>
    </Button>
  </main>
);

export default Index;
