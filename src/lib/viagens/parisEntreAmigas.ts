import parisMd from "@/content/viagem/paris-entre-amigas-2026/paris.md?raw";
import heroParis from "@/assets/viagem/paris-entre-amigas-hero.jpg";
import { parseCity } from "./parseRoteiro";

export type { RoteiroItem, RoteiroBlock, CidadeRoteiro } from "./parseRoteiro";

export const VIAGEM_PARIS_SLUG = "paris-entre-amigas-2026";
export const VIAGEM_PARIS_PATH = `/viagem/${VIAGEM_PARIS_SLUG}`;

export const VIAGEM_PARIS = {
  slug: VIAGEM_PARIS_SLUG,
  path: VIAGEM_PARIS_PATH,
  nome: "Paris entre amigas",
  subtitulo: "seis dias sobre a mesma calçada",
  periodo: "24 a 30 de setembro de 2026",
  viajantes: "Silvia & Patrícia",
  hero: heroParis,
  hotel: {
    nome: "ibis budget Paris Porte d'Orléans",
    endereco: "15–21 Boulevard Romain Rolland, 75014 Paris, França",
  },
};

export const PARIS = parseCity(parisMd, "paris", "Paris", heroParis);

/** Endereço de origem de todas as rotas: o hotel. */
const ORIGEM = "15-21 Boulevard Romain Rolland, 75014 Paris, France";

const dirUrl = (destino: string, modo: "transit" | "driving" | "walking") =>
  `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(ORIGEM)}&destination=${encodeURIComponent(
    destino
  )}&travelmode=${modo}`;

export interface RotaHotel {
  id: string;
  titulo: string;
  destino: string;
  enderecoVisivel: string;
  quando?: string;
  saida?: string;
  reservado?: boolean;
  /** Dia do roteiro a que a rota pertence (1 a 7). */
  dia: number;
  modos: ("transit" | "driving" | "walking")[];
}

const ROTAS_BASE: RotaHotel[] = [

  {
    id: "louvre",
    titulo: "Ponto de encontro do Louvre — Arco do Carrossel",
    destino: "Arc de Triomphe du Carrousel, 75001 Paris, France",
    enderecoVisivel: "Lado direito do Arco do Carrossel, em frente à Pirâmide — acompanhante com jaqueta vermelha",
    quando: "Sábado 26/09 · início 9h30 · estar no ponto 9h05",
    saida: "Sair do hotel às 7h30 (metrô) ou 7h50 (Uber)",
    reservado: true,
    dia: 3,
    modos: ["transit", "driving"],
  },
  {
    id: "cruzeiro",
    titulo: "Cruzeiro com jantar — Porto de Solférino",
    destino: "Port de Solférino, Promenade Édouard Glissant, 75007 Paris, France",
    enderecoVisivel: "Cais do Porto de Solférino — Promenade Édouard Glissant, 75007 Paris",
    quando: "Sexta 25/09 · menu 18h45 · estar no cais 18h15",
    saida: "Sair do hotel às 16h30 (metrô) ou 17h00 (Uber)",
    reservado: true,
    dia: 2,
    modos: ["transit", "driving"],
  },
  {
    id: "versalhes",
    titulo: "Ponto de encontro de Versalhes — 6 Av. du Dr Brouardel",
    destino: "6 Avenue du Dr Brouardel, 75007 Paris, France",
    enderecoVisivel: "6 Avenue du Dr Brouardel, 75007 Paris — equipe com colete vermelho",
    quando: "Domingo 27/09 · início 10h00 · estar no ponto 9h30",
    saida: "Sair do hotel às 7h30 (metrô) ou 8h10 (Uber)",
    reservado: true,
    dia: 4,
    modos: ["transit", "driving"],
  },
  {
    id: "notre-dame",
    titulo: "Notre-Dame — estátua de Carlos Magno",
    destino: "Statue de Charlemagne, Place Jean-Paul II, 75004 Paris, France",
    enderecoVisivel: "Estátua de Carlos Magno, no adro de Notre-Dame, Île de la Cité",
    quando: "Segunda 28/09 · início 9h00 · estar no ponto 8h35",
    saida: "Sair do hotel às 7h00 (metrô) ou 7h30 (Uber)",
    reservado: true,
    dia: 5,
    modos: ["transit", "driving"],
  },
  {
    id: "orly",
    titulo: "Aeroporto Paris-Orly (ORY)",
    destino: "Aéroport de Paris-Orly, 94390 Orly, France",
    enderecoVisivel: "Terminal a confirmar no aplicativo da TAP",
    quando: "Quarta 30/09 · voo TP 431 às 12h00",
    saida: "Sair do hotel às 7h45 (Uber, carro reservado na véspera) ou 6h45 (metrô)",
    dia: 7,
    modos: ["driving", "transit"],
  },
  {
    id: "trocadero",
    titulo: "Torre Eiffel — mirante do Trocadéro",
    destino: "Place du Trocadéro et du 11 Novembre, 75116 Paris, France",
    enderecoVisivel: "Praça do Trocadéro — a vista frontal da torre",
    quando: "Terça 29/09, pela manhã",
    dia: 6,
    modos: ["transit", "driving"],
  },
  {
    id: "montmartre",
    titulo: "Sacré-Cœur e Montmartre",
    destino: "Basilique du Sacré-Cœur, 35 Rue du Chevalier de la Barre, 75018 Paris, France",
    enderecoVisivel: "Usar o funicular na subida",
    dia: 6,
    modos: ["transit", "driving"],
  },
  {
    id: "lafayette",
    titulo: "Galeries Lafayette e Printemps",
    destino: "Galeries Lafayette Haussmann, 40 Boulevard Haussmann, 75009 Paris, France",
    enderecoVisivel: "Boulevard Haussmann — cúpula de vitral e terraço",
    dia: 6,
    modos: ["transit", "driving"],
  },
  {
    id: "saint-germain",
    titulo: "Saint-Germain-des-Prés",
    destino: "Place Saint-Germain-des-Prés, 75006 Paris, France",
    enderecoVisivel: "Linha 4 direta, sem conexão",
    dia: 5,
    modos: ["transit"],
  },
  {
    id: "luxemburgo",
    titulo: "Jardim de Luxemburgo",
    destino: "Jardin du Luxembourg, 75006 Paris, France",
    enderecoVisivel: "Palácio do Senado e o tanque dos barquinhos",
    dia: 5,
    modos: ["transit"],
  },
  {
    id: "opera",
    titulo: "Opéra Garnier",
    destino: "Palais Garnier, Place de l'Opéra, 75009 Paris, France",
    enderecoVisivel: "Ópera de Paris — 1875",
    dia: 6,
    modos: ["transit"],
  },
  {
    id: "montsouris",
    titulo: "Parc Montsouris (a pé)",
    destino: "Parc Montsouris, 75014 Paris, France",
    enderecoVisivel: "A poucos minutos do hotel, caminhando",
    dia: 2,
    modos: ["walking"],
  },
];

export type RotaComLinks = RotaHotel & {
  links: { modo: string; label: string; url: string }[];
};

export const ROTAS: RotaComLinks[] =

  ROTAS_BASE.map((r) => ({
    ...r,
    links: r.modos.map((m) => ({
      modo: m,
      label:
        m === "transit" ? "Metrô e ônibus" : m === "driving" ? "Carro, táxi ou Uber" : "A pé",
      url: dirUrl(r.destino, m),
    })),
  }));

/** Mapa embutido com a localização do hotel (sem chave de API). */
export const MAPA_HOTEL_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(
  ORIGEM
)}&output=embed`;

export const RESUMO_HORARIOS = [
  { data: "24/09 qui", atividade: "Chegada em Orly e transfer ao hotel", inicio: "23h00", local: "—", saida: "Táxi/Uber no saguão" },
  { data: "25/09 sex", atividade: "Cruzeiro com jantar no Sena", inicio: "18h45", local: "18h15", saida: "16h30 metrô · 17h00 Uber" },
  { data: "26/09 sáb", atividade: "Museu do Louvre", inicio: "9h30", local: "9h05", saida: "7h30 metrô · 7h50 Uber" },
  { data: "27/09 dom", atividade: "Palácio de Versalhes", inicio: "10h00", local: "9h30", saida: "7h30 metrô · 8h10 Uber" },
  { data: "28/09 seg", atividade: "Notre-Dame e Île de la Cité", inicio: "9h00", local: "8h35", saida: "7h00 metrô · 7h30 Uber" },
  { data: "29/09 ter", atividade: "Torre Eiffel, Montmartre e compras", inicio: "livre", local: "—", saida: "8h30 após o café" },
  { data: "30/09 qua", atividade: "Voo TP 431 para Lisboa", inicio: "12h00", local: "8h30 em Orly", saida: "7h45 Uber · 6h45 metrô" },
];
