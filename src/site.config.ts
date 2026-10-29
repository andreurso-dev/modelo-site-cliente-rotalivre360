// Dados do cliente em um só lugar. O build usa este arquivo para gerar
// title, meta tags, Open Graph, JSON-LD (LocalBusiness), sitemap.xml e robots.txt.
// Preencha com dados reais do briefing; nunca invente endereço, telefone ou horário.

export type DiaDaSemana =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

export interface Horario {
  dias: DiaDaSemana[];
  abre: string; // "08:00"
  fecha: string; // "18:00"
}

export interface SiteConfig {
  url: string; // domínio final, sem barra no fim
  nome: string;
  titulo: string; // aparece na aba e no Google (até ~60 caracteres)
  descricao: string; // aparece no Google (até ~155 caracteres)
  imagemCompartilhamento: string; // caminho em public/, 1200x630
  negocio: {
    // Tipo do schema.org: LocalBusiness, TravelAgency, TouristTrip, Restaurant,
    // LodgingBusiness, Store, BeautySalon, Dentist, RealEstateAgent...
    tipo: string;
    telefone: string; // formato internacional: +55 12 99999-9999
    whatsapp: string; // só dígitos com DDI: 5512999999999
    email?: string;
    faixaDePreco?: string; // "$", "$$", "$$$"
    endereco?: {
      rua: string;
      bairro?: string;
      cidade: string;
      estado: string; // sigla: SP
      cep: string;
      pais: string; // BR
    };
    coordenadas?: { latitude: number; longitude: number };
    horarios: Horario[];
    areaAtendida: string[]; // cidades/bairros atendidos
    perfis: string[]; // Instagram, Facebook, link do Google Meu Negócio...
  };
  paginas: string[]; // rotas públicas para o sitemap
}

export const site: SiteConfig = {
  url: "https://www.dominio-do-cliente.com.br",
  nome: "Nome do Cliente",
  titulo: "Nome do Cliente | Serviço principal em Cidade",
  descricao: "Descrição curta do negócio do cliente, com cidade e serviço principal.",
  imagemCompartilhamento: "/og.jpg",
  negocio: {
    tipo: "LocalBusiness",
    telefone: "+55 00 00000-0000",
    whatsapp: "5500000000000",
    horarios: [],
    areaAtendida: [],
    perfis: [],
  },
  paginas: ["/"],
};

export function linkWhatsApp(mensagem?: string): string {
  const base = `https://wa.me/${site.negocio.whatsapp}`;
  return mensagem ? `${base}?text=${encodeURIComponent(mensagem)}` : base;
}
