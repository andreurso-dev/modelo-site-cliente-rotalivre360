import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <main className="container flex min-h-screen flex-col items-start justify-center gap-4 py-16">
    <p className="text-sm font-medium text-muted-foreground">Erro 404</p>
    <h1 className="text-3xl font-semibold">Página não encontrada</h1>
    <p className="text-muted-foreground">O endereço pode ter mudado ou não existir mais.</p>
    <Button asChild variant="outline">
      <Link to="/">Voltar para o início</Link>
    </Button>
  </main>
);

export default NotFound;
