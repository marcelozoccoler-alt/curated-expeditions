import type { ContentLang } from "@/i18n/config";
import { INCOMING_DESTINATIONS } from "@/lib/incomingDestinations";
import type { BrazilGuide, BrazilGuideLocalized } from "./types";

import { amazonGuide } from "./amazon";
import { pantanalGuide } from "./pantanal";
import { rioDeJaneiroGuide } from "./rio-de-janeiro";
import { lencoisMaranhensesGuide } from "./lencois-maranhenses";
import { iguazuGuide } from "./iguazu";
import { chapadaDiamantinaGuide } from "./chapada-diamantina";
import { florianopolisGuide } from "./florianopolis";
import { fernandoDeNoronhaGuide } from "./fernando-de-noronha";
import { jericoacoaraGuide } from "./jericoacoara";
import { maragogiGuide } from "./maragogi";
import { bahiaGuide } from "./bahia";
import { alterDoChaoGuide } from "./alter-do-chao";
import { rotaEmocoesGuide } from "./rota-emocoes";
import { chapadaDosVeadeirosGuide } from "./chapada-dos-veadeiros";
import { jalapaoGuide } from "./jalapao";
import { bonitoGuide } from "./bonito";
// Os demais destinos do Brasil estão sendo escritos nos 5 idiomas e serão
// registrados aqui à medida que os arquivos entrarem.

export type { BrazilGuide, BrazilGuideLocalized } from "./types";

/** Guias autorais por destino do Brasil — chave = slug do destino de Incoming. */
export const BRAZIL_GUIDES: Record<string, BrazilGuideLocalized> = {
  amazon: amazonGuide,
  pantanal: pantanalGuide,
  "rio-de-janeiro": rioDeJaneiroGuide,
  "lencois-maranhenses": lencoisMaranhensesGuide,
  iguazu: iguazuGuide,
  "chapada-diamantina": chapadaDiamantinaGuide,
  florianopolis: florianopolisGuide,
  "fernando-de-noronha": fernandoDeNoronhaGuide,
  jericoacoara: jericoacoaraGuide,
  maragogi: maragogiGuide,
  bahia: bahiaGuide,
  "alter-do-chao": alterDoChaoGuide,
  "rota-emocoes": rotaEmocoesGuide,
  "chapada-dos-veadeiros": chapadaDosVeadeirosGuide,
  jalapao: jalapaoGuide,
  bonito: bonitoGuide,


};

/** Ordem editorial de exibição no hub. */
export const BRAZIL_GUIDE_SLUGS = Object.keys(BRAZIL_GUIDES);

export const getBrazilGuide = (
  slug: string,
  lang: ContentLang,
): BrazilGuide | undefined => BRAZIL_GUIDES[slug]?.[lang];

/** Segmento de URL do hub de guias por idioma. */
const GUIDE_SEGMENT: Record<ContentLang, string> = {
  pt: "/guias-brasil",
  en: "/en/brazil-guides",
  es: "/es/brazil-guides",
  it: "/it/brazil-guides",
  de: "/de/brazil-guides",
};

/** Caminho canônico do hub (sem slug) ou do guia (com slug). */
export const guidePath = (lang: ContentLang, slug?: string) =>
  slug ? `${GUIDE_SEGMENT[lang]}/${slug}` : GUIDE_SEGMENT[lang];

export const guideImage = (slug: string): string | undefined =>
  INCOMING_DESTINATIONS.find((d) => d.slug === slug)?.image;

export const guideDestinationName = (slug: string, lang: ContentLang): string =>
  INCOMING_DESTINATIONS.find((d) => d.slug === slug)?.name[lang] ?? slug;

export const guideBlurb = (slug: string, lang: ContentLang): string =>
  INCOMING_DESTINATIONS.find((d) => d.slug === slug)?.blurb[lang] ?? "";

interface GuideUiStrings {
  eyebrow: string;
  hubTitle: string;
  hubH1: string;
  hubIntro: string;
  hubMetaTitle: string;
  hubMetaDescription: string;
  hubKeywords: string;
  faqHeading: string;
  relatedHeading: string;
  backToHub: string;
  touristType: string;
  readGuide: string;
}

/** Micro-copy de interface dos guias, por idioma. */
export const GUIDE_UI: Record<ContentLang, GuideUiStrings> = {
  pt: {
    eyebrow: "Guia autoral de destino",
    hubTitle: "Guias do Brasil",
    hubH1: "Guias autorais dos destinos do Brasil",
    hubIntro:
      "Épocas certas, experiências reais, as melhores hospedagens por perfil de viajante e como integrar cada destino a um roteiro maior pelo Brasil. Escrito por quem visita pessoalmente.",
    hubMetaTitle: "Guias do Brasil: épocas, hospedagens e roteiros",
    hubMetaDescription:
      "Guias autorais dos destinos do Brasil: melhor época mês a mês, experiências, hospedagens por perfil e como integrar cada destino a um roteiro sob medida.",
    hubKeywords:
      "guia de viagem brasil, melhor epoca brasil, roteiro brasil sob medida, hospedagens brasil, viagem autoral brasil",
    faqHeading: "Perguntas frequentes",
    relatedHeading: "Outros guias do Brasil",
    backToHub: "Ver todos os guias do Brasil",
    touristType: "Viajantes 40+ de alto padrão",
    readGuide: "Ler o guia",
  },
  en: {
    eyebrow: "Curated destination guide",
    hubTitle: "Brazil Guides",
    hubH1: "Curated guides to Brazil's destinations",
    hubIntro:
      "The right seasons, real experiences, the best places to stay by traveller profile and how to combine each destination into a wider Brazil itinerary. Written by people who visit in person.",
    hubMetaTitle: "Brazil Travel Guides: Seasons, Hotels & Itineraries",
    hubMetaDescription:
      "Curated guides to Brazil's destinations: best time month by month, real experiences, where to stay by profile and how to build a tailor-made Brazil itinerary.",
    hubKeywords:
      "brazil travel guide, best time to visit brazil, brazil itinerary, where to stay brazil, tailor-made brazil trip",
    faqHeading: "Frequently asked",
    relatedHeading: "More Brazil guides",
    backToHub: "See all Brazil guides",
    touristType: "Discerning travellers 40+",
    readGuide: "Read the guide",
  },
  es: {
    eyebrow: "Guía de autor del destino",
    hubTitle: "Guías de Brasil",
    hubH1: "Guías de autor de los destinos de Brasil",
    hubIntro:
      "Las épocas correctas, experiencias reales, los mejores alojamientos por perfil de viajero y cómo integrar cada destino a un itinerario mayor por Brasil. Escritas por quienes visitan en persona.",
    hubMetaTitle: "Guías de Brasil: épocas, hoteles e itinerarios",
    hubMetaDescription:
      "Guías curadas de los destinos de Brasil: mejor época mes a mes, experiencias, alojamientos por perfil y cómo armar un itinerario a medida por Brasil.",
    hubKeywords:
      "guia de viaje brasil, mejor epoca brasil, itinerario brasil, donde alojarse brasil, viaje a medida brasil",
    faqHeading: "Preguntas frecuentes",
    relatedHeading: "Más guías de Brasil",
    backToHub: "Ver todas las guías de Brasil",
    touristType: "Viajeros exigentes 40+",
    readGuide: "Leer la guía",
  },
  it: {
    eyebrow: "Guida d'autore del destino",
    hubTitle: "Guide del Brasile",
    hubH1: "Guide d'autore alle destinazioni del Brasile",
    hubIntro:
      "Le stagioni giuste, esperienze autentiche, i migliori alloggi per profilo di viaggiatore e come inserire ogni destinazione in un itinerario più ampio in Brasile. Scritte da chi visita di persona.",
    hubMetaTitle: "Guide Brasile: stagioni, hotel e itinerari",
    hubMetaDescription:
      "Guide curate alle destinazioni del Brasile: periodo migliore mese per mese, esperienze, alloggi per profilo e come costruire un itinerario su misura.",
    hubKeywords:
      "guida viaggio brasile, quando andare in brasile, itinerario brasile, dove dormire brasile, viaggio su misura brasile",
    faqHeading: "Domande frequenti",
    relatedHeading: "Altre guide del Brasile",
    backToHub: "Tutte le guide del Brasile",
    touristType: "Viaggiatori esigenti 40+",
    readGuide: "Leggi la guida",
  },
  de: {
    eyebrow: "Kuratierter Reiseführer",
    hubTitle: "Brasilien-Guides",
    hubH1: "Kuratierte Reiseführer zu Brasiliens Zielen",
    hubIntro:
      "Die richtige Reisezeit, echte Erlebnisse, die besten Unterkünfte nach Reisetyp und wie sich jedes Ziel in eine größere Brasilien-Route fügt. Geschrieben von Menschen, die persönlich vor Ort sind.",
    hubMetaTitle: "Brasilien-Guides: Reisezeit, Hotels und Routen",
    hubMetaDescription:
      "Kuratierte Reiseführer zu Brasiliens Zielen: beste Reisezeit Monat für Monat, Erlebnisse, Unterkünfte nach Reisetyp und maßgeschneiderte Routen.",
    hubKeywords:
      "brasilien reisefuehrer, beste reisezeit brasilien, brasilien rundreise, unterkuenfte brasilien, individualreise brasilien",
    faqHeading: "Häufige Fragen",
    relatedHeading: "Weitere Brasilien-Guides",
    backToHub: "Alle Brasilien-Guides",
    touristType: "Anspruchsvolle Reisende 40+",
    readGuide: "Guide lesen",
  },
};

/* ---------------------------------------------------------------------------
 * Busca e filtros do hub de guias
 * ------------------------------------------------------------------------- */

export const GUIDE_THEME_IDS = [
  "praias-ilhas",
  "fauna",
  "trilhas",
  "cidades-cultura",
  "paisagens-raras",
] as const;
export type GuideThemeId = (typeof GUIDE_THEME_IDS)[number];

export const GUIDE_THEME_LABELS: Record<ContentLang, Record<GuideThemeId, string>> = {
  pt: {
    "praias-ilhas": "Praias e ilhas",
    fauna: "Fauna e safáris",
    trilhas: "Trilhas e cachoeiras",
    "cidades-cultura": "Cidades e cultura",
    "paisagens-raras": "Paisagens raras",
  },
  en: {
    "praias-ilhas": "Beaches & islands",
    fauna: "Wildlife & safaris",
    trilhas: "Hikes & waterfalls",
    "cidades-cultura": "Cities & culture",
    "paisagens-raras": "Rare landscapes",
  },
  es: {
    "praias-ilhas": "Playas e islas",
    fauna: "Fauna y safaris",
    trilhas: "Senderos y cascadas",
    "cidades-cultura": "Ciudades y cultura",
    "paisagens-raras": "Paisajes singulares",
  },
  it: {
    "praias-ilhas": "Spiagge e isole",
    fauna: "Fauna e safari",
    trilhas: "Trekking e cascate",
    "cidades-cultura": "Città e cultura",
    "paisagens-raras": "Paesaggi rari",
  },
  de: {
    "praias-ilhas": "Strände & Inseln",
    fauna: "Tierwelt & Safaris",
    trilhas: "Wanderungen & Wasserfälle",
    "cidades-cultura": "Städte & Kultur",
    "paisagens-raras": "Seltene Landschaften",
  },
};

export const GUIDE_THEMES: Record<string, GuideThemeId[]> = {
  amazon: ["fauna", "paisagens-raras"],
  pantanal: ["fauna", "paisagens-raras"],
  "rio-de-janeiro": ["cidades-cultura", "praias-ilhas"],
  "lencois-maranhenses": ["paisagens-raras", "trilhas"],
  iguazu: ["paisagens-raras", "fauna"],
  "chapada-diamantina": ["trilhas", "paisagens-raras"],
  florianopolis: ["praias-ilhas", "cidades-cultura"],
  "fernando-de-noronha": ["praias-ilhas", "fauna"],
  jericoacoara: ["praias-ilhas", "paisagens-raras"],
  maragogi: ["praias-ilhas", "fauna"],
  bahia: ["praias-ilhas", "cidades-cultura"],
  "alter-do-chao": ["praias-ilhas", "fauna"],
  "rota-emocoes": ["paisagens-raras", "praias-ilhas"],
  "chapada-dos-veadeiros": ["trilhas", "paisagens-raras"],
  jalapao: ["paisagens-raras", "trilhas"],
  bonito: ["trilhas", "fauna"],
};

interface GuideFilterStrings {
  searchLabel: string;
  searchPlaceholder: string;
  themesLabel: string;
  clear: string;
  results: (n: number) => string;
  empty: string;
  showing: (shown: number, total: number) => string;
  loadMore: string;
}

export const GUIDE_FILTER_UI: Record<ContentLang, GuideFilterStrings> = {
  pt: {
    searchLabel: "Buscar guia",
    searchPlaceholder: "Destino, tema ou experiência (ex.: Pantanal, onças, dunas)",
    themesLabel: "Filtrar por tema",
    clear: "Limpar filtros",
    results: (n) => (n === 1 ? "1 guia encontrado" : `${n} guias encontrados`),
    empty: "Nenhum guia corresponde à sua busca. Tente outro destino ou tema.",
    showing: (a, b) => `Mostrando ${a} de ${b} guias`,
    loadMore: "Carregar mais guias",
  },
  en: {
    searchLabel: "Search guides",
    searchPlaceholder: "Destination, theme or experience (e.g. Pantanal, jaguars, dunes)",
    themesLabel: "Filter by theme",
    clear: "Clear filters",
    results: (n) => (n === 1 ? "1 guide found" : `${n} guides found`),
    empty: "No guide matches your search. Try another destination or theme.",
    showing: (a, b) => `Showing ${a} of ${b} guides`,
    loadMore: "Load more guides",
  },
  es: {
    searchLabel: "Buscar guías",
    searchPlaceholder: "Destino, tema o experiencia (ej.: Pantanal, jaguares, dunas)",
    themesLabel: "Filtrar por tema",
    clear: "Limpiar filtros",
    results: (n) => (n === 1 ? "1 guía encontrada" : `${n} guías encontradas`),
    empty: "Ninguna guía coincide con tu búsqueda. Prueba otro destino o tema.",
    showing: (a, b) => `Mostrando ${a} de ${b} guías`,
    loadMore: "Cargar más guías",
  },
  it: {
    searchLabel: "Cerca guide",
    searchPlaceholder: "Destinazione, tema o esperienza (es.: Pantanal, giaguari, dune)",
    themesLabel: "Filtra per tema",
    clear: "Azzera filtri",
    results: (n) => (n === 1 ? "1 guida trovata" : `${n} guide trovate`),
    empty: "Nessuna guida corrisponde alla ricerca. Prova un'altra destinazione o tema.",
    showing: (a, b) => `Mostrate ${a} di ${b} guide`,
    loadMore: "Carica altre guide",
  },
  de: {
    searchLabel: "Guides suchen",
    searchPlaceholder: "Ziel, Thema oder Erlebnis (z. B. Pantanal, Jaguare, Dünen)",
    themesLabel: "Nach Thema filtern",
    clear: "Filter zurücksetzen",
    results: (n) => (n === 1 ? "1 Guide gefunden" : `${n} Guides gefunden`),
    empty: "Kein Guide passt zur Suche. Versuche ein anderes Ziel oder Thema.",
    showing: (a, b) => `${a} von ${b} Guides angezeigt`,
    loadMore: "Weitere Guides laden",
  },
};

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

/** Texto pesquisável de um guia (destino, título, blurb, keywords, temas). */
export const guideSearchText = (slug: string, lang: ContentLang): string => {
  const guide = BRAZIL_GUIDES[slug]?.[lang];
  const themes = (GUIDE_THEMES[slug] ?? []).map((t) => GUIDE_THEME_LABELS[lang][t]);
  return normalize(
    [
      slug,
      guideDestinationName(slug, lang),
      guideBlurb(slug, lang),
      guide?.h1,
      guide?.keywords,
      guide?.aiAnswer,
      ...themes,
    ]
      .filter(Boolean)
      .join(" "),
  );
};

export const filterGuideSlugs = (
  lang: ContentLang,
  query: string,
  themes: GuideThemeId[],
): string[] =>
  BRAZIL_GUIDE_SLUGS.filter((slug) => {
    if (themes.length > 0) {
      const slugThemes = GUIDE_THEMES[slug] ?? [];
      if (!themes.some((t) => slugThemes.includes(t))) return false;
    }
    const q = normalize(query.trim());
    if (!q) return true;
    const text = guideSearchText(slug, lang);
    return q.split(/\s+/).every((token) => text.includes(token));
  });
