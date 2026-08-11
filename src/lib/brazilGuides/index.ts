import type { ContentLang } from "@/i18n/config";
import { INCOMING_DESTINATIONS } from "@/lib/incomingDestinations";
import type { BrazilGuide, BrazilGuideLocalized } from "./types";

import { amazonGuide } from "./amazon";
import { pantanalGuide } from "./pantanal";
import { lencoisMaranhensesGuide } from "./lencois-maranhenses";
import { bahiaGuide } from "./bahia";
import { rioDeJaneiroGuide } from "./rio-de-janeiro";
import { iguazuGuide } from "./iguazu";
import { bonitoGuide } from "./bonito";
import { chapadaDosVeadeirosGuide } from "./chapada-dos-veadeiros";
import { chapadaDiamantinaGuide } from "./chapada-diamantina";
import { fernandoDeNoronhaGuide } from "./fernando-de-noronha";
import { jericoacoaraGuide } from "./jericoacoara";
import { alterDoChaoGuide } from "./alter-do-chao";
import { jalapaoGuide } from "./jalapao";
import { maragogiGuide } from "./maragogi";
import { florianopolisGuide } from "./florianopolis";
import { rotaEmocoesGuide } from "./rota-emocoes";

export type { BrazilGuide, BrazilGuideLocalized } from "./types";

/** Guias autorais por destino do Brasil — chave = slug do destino de Incoming. */
export const BRAZIL_GUIDES: Record<string, BrazilGuideLocalized> = {
  amazon: amazonGuide,
  pantanal: pantanalGuide,
  "lencois-maranhenses": lencoisMaranhensesGuide,
  bahia: bahiaGuide,
  "rio-de-janeiro": rioDeJaneiroGuide,
  iguazu: iguazuGuide,
  bonito: bonitoGuide,
  "chapada-dos-veadeiros": chapadaDosVeadeirosGuide,
  "chapada-diamantina": chapadaDiamantinaGuide,
  "fernando-de-noronha": fernandoDeNoronhaGuide,
  jericoacoara: jericoacoaraGuide,
  "alter-do-chao": alterDoChaoGuide,
  jalapao: jalapaoGuide,
  maragogi: maragogiGuide,
  florianopolis: florianopolisGuide,
  "rota-emocoes": rotaEmocoesGuide,
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
