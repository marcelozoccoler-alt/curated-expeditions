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
import { costaDoDescobrimentoGuide } from "./costa-do-descobrimento";
import { costaDasBaleiasGuide } from "./costa-das-baleias";
import { costaDoCacauGuide } from "./costa-do-cacau";
import { costaDoDendeGuide } from "./costa-do-dende";
import { costaDosCoqueirosGuide } from "./costa-dos-coqueiros";
import { costaDoSolPoenteGuide } from "./costa-do-sol-poente";
import { costaDoSolNascenteGuide } from "./costa-do-sol-nascente";
import { canyonsDoSulGuide } from "./canyons-do-sul";
import { expedicoesFluviaisBrasilGuide } from "./expedicoes-fluviais-brasil";
import { festasFolcloricasBrasilGuide } from "./festas-folcloricas-brasil";
import { cavalgadasPantanalGuide } from "./cavalgadas-pantanal";
import { ilhaDeMarajoGuide } from "./ilha-de-marajo";
import { ilhaDeAlgodoalGuide } from "./ilha-de-algodoal";
import { faunaDoBrasilGuide } from "./fauna-do-brasil";
import { floraDoBrasilGuide } from "./flora-do-brasil";
import { avesDoBrasilGuide } from "./aves-do-brasil";
import { grandesCenariosBrasilGuide } from "./grandes-cenarios-brasil";
import { brasilAventuraGuide } from "./brasil-aventura";
import { belemGuide } from "./belem";
import { conjugadoAmazoniaPantanalGuide } from "./conjugado-amazonia-pantanal";
import { conjugadoBelemMarajoAlterGuide } from "./conjugado-belem-marajo-alter";
import { conjugadoRioBahiaNoronhaGuide } from "./conjugado-rio-bahia-noronha";
import { conjugadoCerradoChapadasGuide } from "./conjugado-cerrado-chapadas";
import { conjugadoSulSerraCanyonsGuide } from "./conjugado-sul-serra-canyons";
import { conjugadoCostasNordesteGuide } from "./conjugado-costas-nordeste";
// Belém, Algodoal-conjugados restantes e demais especiais entram aqui conforme
// os arquivos são concluídos nos 5 idiomas.


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
  "costa-do-descobrimento": costaDoDescobrimentoGuide,
  "costa-das-baleias": costaDasBaleiasGuide,
  "costa-do-cacau": costaDoCacauGuide,
  "costa-do-dende": costaDoDendeGuide,
  "costa-dos-coqueiros": costaDosCoqueirosGuide,
  "costa-do-sol-poente": costaDoSolPoenteGuide,
  "costa-do-sol-nascente": costaDoSolNascenteGuide,
  "canyons-do-sul": canyonsDoSulGuide,
  "expedicoes-fluviais-brasil": expedicoesFluviaisBrasilGuide,
  "festas-folcloricas-brasil": festasFolcloricasBrasilGuide,
  "cavalgadas-pantanal": cavalgadasPantanalGuide,
  "ilha-de-marajo": ilhaDeMarajoGuide,
  "ilha-de-algodoal": ilhaDeAlgodoalGuide,
  "fauna-do-brasil": faunaDoBrasilGuide,
  "flora-do-brasil": floraDoBrasilGuide,
  "aves-do-brasil": avesDoBrasilGuide,
  "grandes-cenarios-brasil": grandesCenariosBrasilGuide,
  "brasil-aventura": brasilAventuraGuide,
  belem: belemGuide,
  "conjugado-amazonia-pantanal": conjugadoAmazoniaPantanalGuide,
  "conjugado-belem-marajo-alter": conjugadoBelemMarajoAlterGuide,
  "conjugado-rio-bahia-noronha": conjugadoRioBahiaNoronhaGuide,
  "conjugado-cerrado-chapadas": conjugadoCerradoChapadasGuide,
  "conjugado-sul-serra-canyons": conjugadoSulSerraCanyonsGuide,
  "conjugado-costas-nordeste": conjugadoCostasNordesteGuide,



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

/* Imagens dos guias temáticos e de costas (slugs fora do catálogo de Incoming). */
import costaDescobrimentoImg from "@/assets/destinations/brasil-bahia-abrolhos-costa-descobrimento.jpg";
import litoralBaianoImg from "@/assets/destinations/brasil-litoral-baiano.jpg";
import bahiaStateImg from "@/assets/states/bahia.jpg";
import boipebaImg from "@/assets/destinations/brasil-boipeba.jpg";
import jeriImg2 from "@/assets/destinations/brasil-jericoacoara.jpg";
import litoralCearenseImg from "@/assets/destinations/brasil-litoral-cearense.jpg";
import canionsSulImg from "@/assets/destinations/brasil-canions-do-sul.jpg";
import katerreImg from "@/assets/destinations/brasil-amazonia-katerre.jpg";
import parintinsImg from "@/assets/destinations/brasil-amazonia-festival-parintins.jpg";
import pantanalSulImg from "@/assets/destinations/brasil-pantanal-sul.jpg";
import pantanalNorteImg from "@/assets/destinations/brasil-pantanal-norte.jpg";
import serraCipoImg from "@/assets/destinations/brasil-minas-gerais-serra-do-cipo.jpg";
import cristalinoImg from "@/assets/destinations/brasil-cristalino.jpg";
import brotasImg from "@/assets/destinations/brasil-brotas-aventura.jpg";
import roraimaImg from "@/assets/destinations/brasil-monte-roraima.jpg";
import belemMarajoImg from "@/assets/destinations/brasil-belem-marajo.jpg";
import paraStateImg from "@/assets/states/para.jpg";
import alterImg2 from "@/assets/destinations/brasil-alter-do-chao.jpg";
import biomasHeroImg from "@/assets/incoming-biomes-hero.jpg";
import tresEcossistemasImg from "@/assets/destinations/brasil-mato-grosso-tres-ecossistemas.jpg";
import alterAmazoniaImg from "@/assets/destinations/brasil-amazonia-alter-do-chao.jpg";
import noronhaImg2 from "@/assets/destinations/brasil-fernando-de-noronha.jpg";
import chapadaMesasImg from "@/assets/destinations/brasil-chapada-das-mesas.jpg";
import rsStateImg from "@/assets/states/rio-grande-do-sul.jpg";
import falesiasImg from "@/assets/destinations/brasil-nordeste-rota-falesias-fortaleza-natal.jpg";

const GUIDE_EXTRA_IMAGES: Record<string, string> = {
  "costa-do-descobrimento": costaDescobrimentoImg,
  "costa-das-baleias": litoralBaianoImg,
  "costa-do-cacau": bahiaStateImg,
  "costa-do-dende": boipebaImg,
  "costa-dos-coqueiros": litoralBaianoImg,
  "costa-do-sol-poente": jeriImg2,
  "costa-do-sol-nascente": litoralCearenseImg,
  "canyons-do-sul": canionsSulImg,
  "expedicoes-fluviais-brasil": katerreImg,
  "festas-folcloricas-brasil": parintinsImg,
  "cavalgadas-pantanal": pantanalSulImg,
  "fauna-do-brasil": pantanalNorteImg,
  "flora-do-brasil": serraCipoImg,
  "aves-do-brasil": cristalinoImg,
  "brasil-aventura": brotasImg,
  "grandes-cenarios-brasil": roraimaImg,
  belem: belemMarajoImg,
  "ilha-de-marajo": paraStateImg,
  "ilha-de-algodoal": alterImg2,
  "conjugados-brasil": biomasHeroImg,
  "conjugado-amazonia-pantanal": tresEcossistemasImg,
  "conjugado-belem-marajo-alter": alterAmazoniaImg,
  "conjugado-rio-bahia-noronha": noronhaImg2,
  "conjugado-cerrado-chapadas": chapadaMesasImg,
  "conjugado-sul-serra-canyons": rsStateImg,
  "conjugado-costas-nordeste": falesiasImg,
};

/** Roteiros conjugados (mosaico de biomas) — ordem editorial. */
export const CONJUGADO_SLUGS = [
  "conjugado-amazonia-pantanal",
  "conjugado-belem-marajo-alter",
  "conjugado-rio-bahia-noronha",
  "conjugado-cerrado-chapadas",
  "conjugado-sul-serra-canyons",
  "conjugado-costas-nordeste",
] as const;

export const guideImage = (slug: string): string | undefined =>
  INCOMING_DESTINATIONS.find((d) => d.slug === slug)?.image ?? GUIDE_EXTRA_IMAGES[slug];

export const guideDestinationName = (slug: string, lang: ContentLang): string =>
  INCOMING_DESTINATIONS.find((d) => d.slug === slug)?.name[lang] ??
  BRAZIL_GUIDES[slug]?.[lang]?.destinationName ??
  slug;

export const guideBlurb = (slug: string, lang: ContentLang): string =>
  INCOMING_DESTINATIONS.find((d) => d.slug === slug)?.blurb[lang] ??
  BRAZIL_GUIDES[slug]?.[lang]?.blurb ??
  "";

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
  "costas",
  "expedicoes",
  "festas-cultura",
  "aventura",
  "flora-aves",
  "conjugados",
] as const;
export type GuideThemeId = (typeof GUIDE_THEME_IDS)[number];

export const GUIDE_THEME_LABELS: Record<ContentLang, Record<GuideThemeId, string>> = {
  pt: {
    "praias-ilhas": "Praias e ilhas",
    fauna: "Fauna e safáris",
    trilhas: "Trilhas e cachoeiras",
    "cidades-cultura": "Cidades e cultura",
    "paisagens-raras": "Paisagens raras",
    costas: "Costas e litorais",
    expedicoes: "Expedições fluviais",
    "festas-cultura": "Festas e folclore",
    aventura: "Aventura e cavalgadas",
    "flora-aves": "Flora e aves",
    conjugados: "Roteiros conjugados",
  },
  en: {
    "praias-ilhas": "Beaches & islands",
    fauna: "Wildlife & safaris",
    trilhas: "Hikes & waterfalls",
    "cidades-cultura": "Cities & culture",
    "paisagens-raras": "Rare landscapes",
    costas: "Coastlines",
    expedicoes: "River expeditions",
    "festas-cultura": "Festivals & folklore",
    aventura: "Adventure & riding",
    "flora-aves": "Flora & birding",
    conjugados: "Multi-region journeys",
  },
  es: {
    "praias-ilhas": "Playas e islas",
    fauna: "Fauna y safaris",
    trilhas: "Senderos y cascadas",
    "cidades-cultura": "Ciudades y cultura",
    "paisagens-raras": "Paisajes singulares",
    costas: "Costas y litorales",
    expedicoes: "Expediciones fluviales",
    "festas-cultura": "Fiestas y folclore",
    aventura: "Aventura y cabalgatas",
    "flora-aves": "Flora y aves",
    conjugados: "Itinerarios combinados",
  },
  it: {
    "praias-ilhas": "Spiagge e isole",
    fauna: "Fauna e safari",
    trilhas: "Trekking e cascate",
    "cidades-cultura": "Città e cultura",
    "paisagens-raras": "Paesaggi rari",
    costas: "Coste e litorali",
    expedicoes: "Spedizioni fluviali",
    "festas-cultura": "Feste e folclore",
    aventura: "Avventura e cavalcate",
    "flora-aves": "Flora e birdwatching",
    conjugados: "Itinerari combinati",
  },
  de: {
    "praias-ilhas": "Strände & Inseln",
    fauna: "Tierwelt & Safaris",
    trilhas: "Wanderungen & Wasserfälle",
    "cidades-cultura": "Städte & Kultur",
    "paisagens-raras": "Seltene Landschaften",
    costas: "Küsten",
    expedicoes: "Flussexpeditionen",
    "festas-cultura": "Feste & Folklore",
    aventura: "Abenteuer & Reitreisen",
    "flora-aves": "Flora & Vogelwelt",
    conjugados: "Kombinationsreisen",
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
  "costa-do-descobrimento": ["costas", "praias-ilhas", "cidades-cultura"],
  "costa-das-baleias": ["costas", "fauna"],
  "costa-do-cacau": ["costas", "cidades-cultura"],
  "costa-do-dende": ["costas", "praias-ilhas"],
  "costa-dos-coqueiros": ["costas", "fauna"],
  "costa-do-sol-poente": ["costas", "praias-ilhas"],
  "costa-do-sol-nascente": ["costas", "paisagens-raras"],
  "canyons-do-sul": ["paisagens-raras", "trilhas"],
  "expedicoes-fluviais-brasil": ["expedicoes", "fauna"],
  "festas-folcloricas-brasil": ["festas-cultura", "cidades-cultura"],
  "cavalgadas-pantanal": ["aventura", "fauna"],
  belem: ["cidades-cultura", "festas-cultura"],
  "ilha-de-marajo": ["paisagens-raras", "fauna"],
  "ilha-de-algodoal": ["praias-ilhas", "paisagens-raras"],
  "fauna-do-brasil": ["fauna", "flora-aves"],
  "flora-do-brasil": ["flora-aves", "paisagens-raras"],
  "aves-do-brasil": ["flora-aves", "fauna"],
  "brasil-aventura": ["aventura", "trilhas"],
  "grandes-cenarios-brasil": ["paisagens-raras", "conjugados"],
  "conjugado-amazonia-pantanal": ["conjugados", "fauna"],
  "conjugado-belem-marajo-alter": ["conjugados", "expedicoes"],
  "conjugado-rio-bahia-noronha": ["conjugados", "praias-ilhas"],
  "conjugado-cerrado-chapadas": ["conjugados", "trilhas"],
  "conjugado-sul-serra-canyons": ["conjugados", "paisagens-raras"],
  "conjugado-costas-nordeste": ["conjugados", "costas"],
};

/* ---------------------------------------------------------------------------
 * Mosaico dos 7 biomas — introdução do hub e dos roteiros conjugados
 * ------------------------------------------------------------------------- */

export interface BiomeMosaicItem {
  name: string;
  text: string;
}

export interface BiomeMosaicCopy {
  eyebrow: string;
  heading: string;
  intro: string[];
  biomes: BiomeMosaicItem[];
  artHeading: string;
  artText: string;
  itinerariesHeading: string;
  itinerariesIntro: string;
}

export const BIOME_MOSAIC: Record<ContentLang, BiomeMosaicCopy> = {
  pt: {
    eyebrow: "A arte de combinar biomas",
    heading: "Sete biomas, um mosaico: como se monta uma grande viagem pelo Brasil",
    intro: [
      "O Brasil não é um destino — é um continente disfarçado de país. Sete biomas dividem o mesmo território e quase nunca se parecem: a floresta que respira, a planície que alaga, o cerrado que queima e renasce, a mata que sobe a serra, o sertão que floresce em três dias de chuva, os campos de vento sul e o litoral de 7.491 quilômetros. Viajar bem pelo Brasil é saber qual peça encaixar em qual, e em que mês.",
      "Chamamos isso de mosaico. Em vez de um destino solitário, desenhamos combinações em que cada trecho intensifica o próximo: a água escura do Rio Negro faz o azul de Noronha parecer inventado; o silêncio do Jalapão prepara o corpo para o barulho do Ver-o-Peso; a onça vista ao amanhecer no Pantanal muda para sempre o modo como você olha um gato dormindo. Abaixo, os biomas e, depois, os roteiros conjugados que costuramos entre eles.",
    ],
    biomes: [
      { name: "Amazônia", text: "Floresta e rios que sobem 14 metros por ano: igapós, botos, lodges sobre a água e cheiro de terra molhada às cinco da tarde." },
      { name: "Pantanal", text: "A maior planície alagável do planeta e o melhor lugar do mundo para ver onça-pintada em liberdade, entre maio e outubro." },
      { name: "Cerrado", text: "Savana mais antiga e mais biodiversa do mundo: chapadas, água transparente, lobo-guará e florações que duram semanas." },
      { name: "Mata Atlântica", text: "A mata que abraça o mar — Rio, Costa do Descobrimento, Serra do Mar, Itatiaia — com endemismos que só existem aqui." },
      { name: "Caatinga", text: "O sertão que ninguém espera: cânions do Xingó, Serra da Capivara, arte rupestre de 12 mil anos e um verde súbito depois da chuva." },
      { name: "Pampa", text: "Campos do Sul, estâncias, vinhedos de altitude, canyons de Aparados da Serra e as baleias francas do inverno catarinense." },
      { name: "Marinho e costeiro", text: "Recifes de Maragogi, arquipélagos de Noronha e Abrolhos, manguezais de Marajó, dunas do Ceará e o Maranhão de água doce." },
    ],
    artHeading: "A arte do encaixe",
    artText:
      "Um bom conjugado respeita três regras: janela climática compartilhada (nada de floresta em cheia com dunas em chuva), no máximo dois voos internos longos por viagem e um contraste sensorial claro entre etapas — água doce e mar, silêncio e festa, altitude e planície. É assim que 13 noites viram uma viagem que se lembra por 13 anos.",
    itinerariesHeading: "Roteiros conjugados pelo Brasil",
    itinerariesIntro:
      "Clique em um nome para ler tudo o que se vive em cada etapa: experiências, conexões, hospedagens e a melhor época.",
  },
  en: {
    eyebrow: "The art of combining biomes",
    heading: "Seven biomes, one mosaic: how a great Brazilian journey is built",
    intro: [
      "Brazil is not a destination — it is a continent disguised as a country. Seven biomes share the same territory and rarely resemble one another: the breathing rainforest, the flooding plain, the savanna that burns and returns, the forest climbing the mountains, the drylands that bloom after three days of rain, the southern grasslands and 7,491 kilometres of coast. Travelling Brazil well means knowing which piece fits which — and in which month.",
      "We call it the mosaic. Instead of one lonely destination, we design combinations where each leg intensifies the next: the black water of the Rio Negro makes Noronha's blue look invented; the silence of Jalapão prepares you for the roar of Belém's market; a jaguar at dawn in the Pantanal changes forever the way you look at a sleeping cat. Below, the biomes — and then the multi-region journeys we stitch between them.",
    ],
    biomes: [
      { name: "Amazon", text: "Forest and rivers that rise 14 metres a year: flooded igapós, pink dolphins, lodges on the water, the smell of wet earth at five in the afternoon." },
      { name: "Pantanal", text: "The largest floodplain on earth and the best place in the world to see wild jaguars, between May and October." },
      { name: "Cerrado", text: "The oldest and most biodiverse savanna on the planet: tablelands, crystal water, maned wolf and blooms that last for weeks." },
      { name: "Atlantic Forest", text: "The forest that embraces the sea — Rio, the Discovery Coast, Serra do Mar, Itatiaia — with endemic species found nowhere else." },
      { name: "Caatinga", text: "The unexpected drylands: Xingó canyons, Serra da Capivara, 12,000-year-old rock art and a sudden green after the rains." },
      { name: "Pampa", text: "Southern grasslands, estâncias, high-altitude vineyards, the canyons of Aparados da Serra and winter right whales off Santa Catarina." },
      { name: "Marine & coastal", text: "Maragogi reefs, the Noronha and Abrolhos archipelagos, Marajó mangroves, Ceará dunes and Maranhão's freshwater lagoons." },
    ],
    artHeading: "The art of the fit",
    artText:
      "A good combination follows three rules: a shared weather window, no more than two long domestic flights per trip, and a clear sensory contrast between legs — fresh water and ocean, silence and festival, altitude and plain. That is how 13 nights become a journey remembered for 13 years.",
    itinerariesHeading: "Multi-region journeys across Brazil",
    itinerariesIntro:
      "Tap a name to read everything each leg holds: experiences, connections, places to stay and the best season.",
  },
  es: {
    eyebrow: "El arte de combinar biomas",
    heading: "Siete biomas, un mosaico: cómo se arma un gran viaje por Brasil",
    intro: [
      "Brasil no es un destino: es un continente disfrazado de país. Siete biomas comparten el mismo territorio y casi nunca se parecen: la selva que respira, la llanura que se inunda, el cerrado que arde y renace, la mata que sube la sierra, el sertón que florece en tres días de lluvia, los campos del sur y 7.491 kilómetros de costa. Viajar bien por Brasil es saber qué pieza encaja con cuál, y en qué mes.",
      "Lo llamamos mosaico. En lugar de un destino solitario, diseñamos combinaciones en las que cada tramo intensifica el siguiente: el agua negra del Río Negro hace que el azul de Noronha parezca inventado; el silencio del Jalapão prepara el cuerpo para el bullicio del Ver-o-Peso; un jaguar al amanecer en el Pantanal cambia para siempre cómo mirás a un gato dormido. Abajo, los biomas y, después, los itinerarios combinados que cosemos entre ellos.",
    ],
    biomes: [
      { name: "Amazonia", text: "Selva y ríos que suben 14 metros al año: igapós inundados, delfines rosados, lodges sobre el agua y olor a tierra mojada." },
      { name: "Pantanal", text: "La mayor llanura inundable del planeta y el mejor lugar del mundo para ver jaguares en libertad, de mayo a octubre." },
      { name: "Cerrado", text: "La sabana más antigua y biodiversa del mundo: mesetas, agua transparente, lobo de crin y floraciones de semanas." },
      { name: "Mata Atlántica", text: "El bosque que abraza el mar — Río, Costa del Descubrimiento, Serra do Mar, Itatiaia — con endemismos únicos." },
      { name: "Caatinga", text: "El sertón inesperado: cañones del Xingó, Serra da Capivara, arte rupestre de 12.000 años y un verde súbito tras la lluvia." },
      { name: "Pampa", text: "Campos del Sur, estancias, viñedos de altura, cañones de Aparados da Serra y ballenas francas en invierno." },
      { name: "Marino y costero", text: "Arrecifes de Maragogi, archipiélagos de Noronha y Abrolhos, manglares de Marajó, dunas de Ceará y lagunas de Maranhão." },
    ],
    artHeading: "El arte del encaje",
    artText:
      "Una buena combinación respeta tres reglas: una ventana climática compartida, como máximo dos vuelos internos largos por viaje y un contraste sensorial claro entre etapas: agua dulce y mar, silencio y fiesta, altura y llanura. Así 13 noches se vuelven un viaje que se recuerda 13 años.",
    itinerariesHeading: "Itinerarios combinados por Brasil",
    itinerariesIntro:
      "Hacé clic en un nombre para leer todo lo que se vive en cada etapa: experiencias, conexiones, alojamientos y mejor época.",
  },
  it: {
    eyebrow: "L'arte di combinare i biomi",
    heading: "Sette biomi, un mosaico: come si costruisce un grande viaggio in Brasile",
    intro: [
      "Il Brasile non è una destinazione: è un continente travestito da Paese. Sette biomi condividono lo stesso territorio e quasi mai si somigliano: la foresta che respira, la pianura che si allaga, il cerrado che brucia e rinasce, la foresta che sale la montagna, il sertão che fiorisce dopo tre giorni di pioggia, le pampas del sud e 7.491 chilometri di costa. Viaggiare bene in Brasile significa sapere quale tessera incastrare con quale, e in che mese.",
      "Lo chiamiamo mosaico. Invece di una destinazione solitaria, disegniamo combinazioni in cui ogni tappa intensifica la successiva: l'acqua nera del Rio Negro rende il blu di Noronha quasi inverosimile; il silenzio del Jalapão prepara al frastuono del Ver-o-Peso; un giaguaro all'alba nel Pantanal cambia per sempre il modo di guardare un gatto che dorme. Qui sotto i biomi e, poi, gli itinerari combinati che cuciamo tra loro.",
    ],
    biomes: [
      { name: "Amazzonia", text: "Foresta e fiumi che salgono 14 metri l'anno: igapós allagati, delfini rosa, lodge sull'acqua e odore di terra bagnata." },
      { name: "Pantanal", text: "La più grande pianura alluvionale del pianeta e il posto migliore al mondo per vedere giaguari liberi, da maggio a ottobre." },
      { name: "Cerrado", text: "La savana più antica e biodiversa del mondo: altopiani, acqua trasparente, lupo dalla criniera e fioriture di settimane." },
      { name: "Foresta Atlantica", text: "La foresta che abbraccia il mare — Rio, Costa do Descobrimento, Serra do Mar, Itatiaia — con endemismi unici." },
      { name: "Caatinga", text: "Il sertão inatteso: canyon di Xingó, Serra da Capivara, arte rupestre di 12.000 anni e un verde improvviso dopo la pioggia." },
      { name: "Pampa", text: "Praterie del Sud, estâncias, vigneti d'altura, i canyon di Aparados da Serra e le balene franche d'inverno." },
      { name: "Marino e costiero", text: "Barriere di Maragogi, arcipelaghi di Noronha e Abrolhos, mangrovie di Marajó, dune del Ceará e lagune del Maranhão." },
    ],
    artHeading: "L'arte dell'incastro",
    artText:
      "Una buona combinazione segue tre regole: una finestra climatica condivisa, non più di due voli interni lunghi per viaggio e un contrasto sensoriale netto tra le tappe — acqua dolce e oceano, silenzio e festa, altura e pianura. Così 13 notti diventano un viaggio ricordato per 13 anni.",
    itinerariesHeading: "Itinerari combinati in Brasile",
    itinerariesIntro:
      "Clicca un nome per leggere tutto ciò che si vive in ogni tappa: esperienze, collegamenti, alloggi e periodo migliore.",
  },
  de: {
    eyebrow: "Die Kunst, Biome zu verbinden",
    heading: "Sieben Biome, ein Mosaik: wie eine große Brasilienreise entsteht",
    intro: [
      "Brasilien ist kein Reiseziel, sondern ein Kontinent im Gewand eines Landes. Sieben Biome teilen dasselbe Territorium und gleichen sich fast nie: der atmende Regenwald, die überflutete Ebene, die Savanne, die brennt und wiederkehrt, der Wald, der ins Gebirge steigt, das Trockenland, das nach drei Regentagen blüht, die Graslandschaften des Südens und 7.491 Kilometer Küste. Brasilien gut zu bereisen heißt zu wissen, welches Teil zu welchem passt — und in welchem Monat.",
      "Wir nennen es Mosaik. Statt eines einzelnen Ziels entwerfen wir Kombinationen, in denen jede Etappe die nächste verstärkt: Das schwarze Wasser des Rio Negro lässt das Blau von Noronha erfunden wirken; die Stille des Jalapão bereitet auf den Lärm des Ver-o-Peso vor; ein Jaguar im Morgengrauen im Pantanal verändert für immer den Blick auf eine schlafende Katze. Unten die Biome — und danach die Kombinationsreisen, die wir daraus nähen.",
    ],
    biomes: [
      { name: "Amazonien", text: "Wald und Flüsse, die jährlich 14 Meter steigen: überflutete Igapós, rosa Delfine, Lodges auf dem Wasser, Geruch nach feuchter Erde." },
      { name: "Pantanal", text: "Die größte Überschwemmungsebene der Erde und der beste Ort weltweit für wilde Jaguare, von Mai bis Oktober." },
      { name: "Cerrado", text: "Die älteste und artenreichste Savanne der Welt: Tafelberge, klares Wasser, Mähnenwolf und wochenlange Blüten." },
      { name: "Atlantischer Regenwald", text: "Der Wald, der das Meer umfasst — Rio, Costa do Descobrimento, Serra do Mar, Itatiaia — mit einzigartigen Endemiten." },
      { name: "Caatinga", text: "Das überraschende Trockenland: Xingó-Canyons, Serra da Capivara, 12.000 Jahre alte Felskunst und plötzliches Grün nach Regen." },
      { name: "Pampa", text: "Graslandschaften des Südens, Estâncias, Höhenweinberge, die Canyons von Aparados da Serra und Glattwale im Winter." },
      { name: "Meer & Küste", text: "Riffe von Maragogi, Archipele Noronha und Abrolhos, Mangroven von Marajó, Dünen im Ceará und Süßwasserlagunen im Maranhão." },
    ],
    artHeading: "Die Kunst der Passung",
    artText:
      "Eine gute Kombination folgt drei Regeln: ein gemeinsames Klimafenster, höchstens zwei lange Inlandsflüge pro Reise und ein klarer sinnlicher Kontrast zwischen den Etappen — Süßwasser und Ozean, Stille und Fest, Höhe und Ebene. So werden 13 Nächte zu einer Reise, an die man 13 Jahre denkt.",
    itinerariesHeading: "Kombinationsreisen durch Brasilien",
    itinerariesIntro:
      "Auf einen Namen klicken und alles zur Etappe lesen: Erlebnisse, Verbindungen, Unterkünfte und beste Reisezeit.",
  },
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
