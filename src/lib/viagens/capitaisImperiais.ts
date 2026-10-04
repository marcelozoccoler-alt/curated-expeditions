import budapesteMd from "@/content/viagem/capitais-imperiais-2026/budapeste.md?raw";
import vienaMd from "@/content/viagem/capitais-imperiais-2026/viena.md?raw";
import pragaMd from "@/content/viagem/capitais-imperiais-2026/praga.md?raw";
import istambulMd from "@/content/viagem/capitais-imperiais-2026/istambul.md?raw";
import heroTrip from "@/assets/viagem/capitais-imperiais-hero.jpg";
import heroBudapeste from "@/assets/viagem/capitais-imperiais-budapeste.jpg";
import heroViena from "@/assets/viagem/capitais-imperiais-viena.jpg";
import heroPraga from "@/assets/viagem/capitais-imperiais-praga.jpg";
import heroIstambul from "@/assets/viagem/capitais-imperiais-istambul.jpg";
import chegadaGrupo from "@/assets/viagem/budapeste-chegada-grupo.jpg";
import danubioCrepusculo from "@/assets/viagem/budapeste-danubio-crepusculo.jpg";
import parlamentoNoite from "@/assets/viagem/budapeste-parlamento-noite.jpg";
import basilicaNoite from "@/assets/viagem/budapeste-basilica-noite.jpg";
import grupoDanubio from "@/assets/viagem/budapeste-grupo-danubio.jpg";
import ponteCastelo from "@/assets/viagem/budapeste-ponte-castelo.jpg";

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

export const FOTOS: Record<string, ViagemFoto[]> = {
  "budapeste/dia-1-sabado-3-de-outubro-de-2026": [
    { src: chegadaGrupo, alt: "Viajantes reunidos no aeroporto antes da jornada", caption: "O começo da jornada" },
    { src: danubioCrepusculo, alt: "Ponte das Correntes iluminada sobre o Danúbio ao anoitecer", caption: "Primeiras luzes sobre o Danúbio" },
    { src: parlamentoNoite, alt: "Parlamento húngaro iluminado refletido no Danúbio", caption: "O Parlamento visto do rio" },
    { src: ponteCastelo, alt: "Ponte das Correntes e Castelo de Buda iluminados à noite", caption: "A ponte e o Castelo de Buda" },
    { src: grupoDanubio, alt: "Viajantes à beira do Danúbio à noite", caption: "Encontros à beira do rio" },
    { src: basilicaNoite, alt: "Basílica de Santo Estêvão iluminada à noite em Budapeste", caption: "A Basílica de Santo Estêvão" },
  ],
};

export const fotosDoBloco = (cidadeSlug: string, blocoId: string): ViagemFoto[] =>
  FOTOS[`${cidadeSlug}/${blocoId}`] || [];
