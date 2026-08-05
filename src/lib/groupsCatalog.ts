// Catálogo unificado de grupos (guia brasileiro + guia local) para busca por DESTINO.
// Usado nas páginas índice de grupos e nos blocos "Grupos nesta região" das páginas
// de destinos e regiões, maximizando descoberta interna e contexto para buscadores/IA.

import { DEPARTURES } from "@/pages/EmbarqueComACreate";
import { localGuideGroups, localGuidePriceLabel } from "@/lib/localGuideGroups";

/** Países cobertos por cada saída com guia brasileiro (chave = href da página). */
export const BRAZILIAN_GROUP_COUNTRIES: Record<string, string[]> = {
  "/grupos/africa-do-sul-2026": ["África do Sul"],
  "/grupos/africa-do-sul-outubro-2026": ["África do Sul"],
  "/grupos/africa-do-sul-primavera-2026": ["África do Sul"],
  "/grupos/africa-do-sul-reveillon-2027": ["África do Sul"],
  "/grupos/balcas-autenticos-2026": ["Croácia", "Bósnia e Herzegovina", "Montenegro", "Sérvia"],
  "/grupos/benelux-2026": ["Países Baixos", "Bélgica", "Luxemburgo"],
  "/grupos/chile-carretera-austral-2026": ["Chile"],
  "/grupos/china-2026": ["China"],
  "/grupos/china-primavera-2027": ["China"],
  "/grupos/colombia-2026": ["Colômbia"],
  "/grupos/coreia-japao-2026": ["Coreia do Sul", "Japão"],
  "/grupos/coreia-japao-cerejeiras-2027": ["Coreia do Sul", "Japão"],
  "/grupos/croacia-balcas-2026": ["Croácia", "Eslovênia", "Bósnia e Herzegovina", "Montenegro"],
  "/grupos/egito-2026": ["Egito"],
  "/grupos/egito-abril-2027": ["Egito"],
  "/grupos/equador-galapagos-2026": ["Equador"],
  "/grupos/equador-galapagos-carnaval-2027": ["Equador"],
  "/grupos/europa-do-leste-turquia-2026": ["Hungria", "Áustria", "República Tcheca", "Turquia"],
  "/grupos/grecia-2026": ["Grécia"],
  "/grupos/india-sri-lanka-holi-2027": ["Índia", "Sri Lanka"],
  "/grupos/islandia-2026": ["Islândia"],
  "/grupos/jordania-2026": ["Jordânia"],
  "/grupos/lagos-chilenos-carnaval-2027": ["Chile", "Argentina"],
  "/grupos/marrocos-2026": ["Marrocos"],
  "/grupos/mexico-2026": ["México"],
  "/grupos/nepal-butao-2027": ["Nepal", "Butão"],
  "/grupos/patagonia-chilena-2026": ["Chile"],
  "/grupos/portugal-aldeias-historicas-2026": ["Portugal"],
  "/grupos/portugal-norte-sul-2026": ["Portugal"],
  "/grupos/suica-norte-italia-2026": ["Suíça", "Itália"],
  "/grupos/sul-italia-2026": ["Itália"],
  "/grupos/sul-italia-outubro-2026": ["Itália"],
  "/grupos/tailandia-2026": ["Tailândia"],
  "/grupos/tunisia-carnaval-2027": ["Tunísia"],
  "/grupos/turquia-2026": ["Turquia"],
  "/grupos/turquia-reveillon-2027": ["Turquia"],
  "/grupos/vietna-laos-camboja-2027": ["Vietnã", "Laos", "Camboja"],
};

export type GroupKind = "brasileiro" | "local";

export interface CatalogGroup {
  kind: GroupKind;
  href: string;
  title: string;
  subtitle: string;
  /** Rótulo curto de data (ex.: "Set/26" ou "18 saídas 2027"). */
  dateLabel: string;
  /** Datas de saída em ISO para filtros por mês. */
  departures: string[];
  countries: string[];
  priceLabel: string;
  img?: string;
}

const localCountLabel = (n: number) =>
  n === 1 ? "1 saída garantida" : `${n} saídas garantidas`;

export const catalogGroups: CatalogGroup[] = [
  ...DEPARTURES.map((d) => ({
    kind: "brasileiro" as const,
    href: d.href,
    title: d.title,
    subtitle: d.subtitle,
    dateLabel: d.monthLabel,
    departures: [d.departureDate.toISOString().slice(0, 10)],
    countries: BRAZILIAN_GROUP_COUNTRIES[d.href] ?? [],
    priceLabel: d.fromPrice,
    img: d.img,
  })),
  ...localGuideGroups.map((g) => ({
    kind: "local" as const,
    href: `/grupos-guia-local/${g.slug}`,
    title: g.title,
    subtitle: g.subtitle,
    dateLabel: localCountLabel(g.departures.length),
    departures: g.departures,
    countries: g.countries,
    priceLabel:
      localGuidePriceLabel(g) === "Sob consulta"
        ? "Valor sob consulta"
        : `A partir de ${localGuidePriceLabel(g)} por pessoa (apto duplo)`,
  })),
];

/** Todos os destinos (países) com grupos disponíveis, ordenados. */
export const catalogCountries = Array.from(
  new Set(catalogGroups.flatMap((g) => g.countries))
).sort((a, b) => a.localeCompare(b, "pt-BR"));

const normalize = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

/** Grupos que passam por um país/região (busca tolerante a acentos). */
export const getGroupsByCountry = (country: string, kind?: GroupKind) => {
  const target = normalize(country);
  return catalogGroups.filter(
    (g) =>
      (!kind || g.kind === kind) &&
      g.countries.some((c) => normalize(c) === target)
  );
};

/**
 * Grupos relacionados a um conjunto de termos (país, região ou destino).
 * Usado nas páginas de destino e de região para exibir saídas correspondentes.
 */
export const getGroupsForTerms = (terms: string[]) => {
  const targets = terms.map(normalize).filter(Boolean);
  if (targets.length === 0) return [];
  return catalogGroups.filter((g) =>
    g.countries.some((c) => targets.includes(normalize(c)))
  );
};
