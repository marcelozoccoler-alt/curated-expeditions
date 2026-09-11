import budapesteMd from "@/content/viagem/capitais-imperiais-2026/budapeste.md?raw";
import vienaMd from "@/content/viagem/capitais-imperiais-2026/viena.md?raw";
import pragaMd from "@/content/viagem/capitais-imperiais-2026/praga.md?raw";
import istambulMd from "@/content/viagem/capitais-imperiais-2026/istambul.md?raw";
import heroTrip from "@/assets/viagem/capitais-imperiais-hero.jpg";
import heroBudapeste from "@/assets/viagem/capitais-imperiais-budapeste.jpg";
import heroViena from "@/assets/viagem/capitais-imperiais-viena.jpg";
import heroPraga from "@/assets/viagem/capitais-imperiais-praga.jpg";
import heroIstambul from "@/assets/viagem/capitais-imperiais-istambul.jpg";

import { parseCity } from "./parseRoteiro";
import type { CidadeRoteiro } from "./parseRoteiro";

export type { RoteiroItem, RoteiroBlock, CidadeRoteiro } from "./parseRoteiro";



export const VIAGEM_SLUG = "capitais-imperiais-2026";
export const VIAGEM_PATH = `/viagem/${VIAGEM_SLUG}`;

export const VIAGEM = {
  slug: VIAGEM_SLUG,
  path: VIAGEM_PATH,
  nome: "Capitais Imperiais",
  subtitulo: "uma jornada entre o Danúbio e o Bósforo",
  periodo: "2 a 16 de outubro de 2026",
  chamada:
    "Um grupo exclusivo e autoral atravessando o coração da Europa Central: quatro capitais, quatro rios, uma história escrita a quatro mãos — e registrada dia a dia para virar livro.",
  hero: heroTrip,
};

export const CIDADES: CidadeRoteiro[] = [
  parseCity(budapesteMd, "budapeste", "Budapeste", heroBudapeste),
  parseCity(vienaMd, "viena", "Viena", heroViena),
  parseCity(pragaMd, "praga", "Praga", heroPraga),
  parseCity(istambulMd, "istambul", "Istambul", heroIstambul),
];

/** Cidades ainda por publicar — mantêm a narrativa completa da viagem. */
export const CIDADES_EM_BREVE: { slug: string; nome: string; periodo: string }[] = [];

export const getCidade = (slug?: string) => CIDADES.find((c) => c.slug === slug);

/**
 * Fotos e vídeos da viagem, por cidade e por dia.
 * Chave: `${cidadeSlug}/${blocoId}` — ex.: "budapeste/dia-1-sexta-feira-3-de-outubro-de-2026".
 * Ao receber as imagens, basta adicionar aqui: elas aparecem no site e no livro.
 */
export interface ViagemFoto {
  src: string;
  alt: string;
  caption?: string;
  credit?: string;
}

export const FOTOS: Record<string, ViagemFoto[]> = {};

export const fotosDoBloco = (cidadeSlug: string, blocoId: string): ViagemFoto[] =>
  FOTOS[`${cidadeSlug}/${blocoId}`] || [];
