import type { Lang } from "@/i18n/config";

import amazonasImg from "@/assets/states/amazonas.jpg";
import matoGrossoImg from "@/assets/states/mato-grosso.jpg";
import maranhaoImg from "@/assets/states/maranhao.jpg";
import bahiaImg from "@/assets/states/bahia.jpg";
import rioImg from "@/assets/states/rio-de-janeiro.jpg";
import paranaImg from "@/assets/states/parana.jpg";
import goiasImg from "@/assets/states/goias.jpg";
import pernambucoImg from "@/assets/states/pernambuco.jpg";

export interface IncomingDestination {
  slug: string;
  image: string;
  /** Native, search-friendly name in each language */
  name: Record<Lang, string>;
  /** One-line editorial blurb in each language */
  blurb: Record<Lang, string>;
}

export const INCOMING_DESTINATIONS: IncomingDestination[] = [
  {
    slug: "amazon",
    image: amazonasImg,
    name: {
      pt: "Amazônia",
      en: "Amazon Rainforest",
      es: "Amazonía",
      it: "Amazzonia",
      de: "Amazonas-Regenwald",
    },
    blurb: {
      pt: "Lodges remotos, encontro com povos ribeirinhos e a maior floresta tropical do planeta.",
      en: "Remote eco-lodges, river-community encounters and the largest rainforest on Earth.",
      es: "Lodges remotos, encuentros con comunidades ribereñas y la mayor selva tropical del planeta.",
      it: "Lodge remoti, incontri con le comunità fluviali e la più grande foresta pluviale del mondo.",
      de: "Abgelegene Eco-Lodges, Begegnungen mit Flussgemeinschaften und der größte Regenwald der Erde.",
    },
  },
  {
    slug: "pantanal",
    image: matoGrossoImg,
    name: {
      pt: "Pantanal",
      en: "Pantanal Wetlands",
      es: "Pantanal",
      it: "Pantanal",
      de: "Pantanal",
    },
    blurb: {
      pt: "O melhor safári de vida selvagem das Américas: onças-pintadas, tuiuiús e horizontes infinitos.",
      en: "The Americas' finest wildlife safari: jaguars, giant otters and endless horizons.",
      es: "El mejor safari de vida silvestre de América: jaguares, nutrias gigantes y horizontes infinitos.",
      it: "Il miglior safari naturalistico delle Americhe: giaguari, lontre giganti e orizzonti infiniti.",
      de: "Die beste Wildlife-Safari Amerikas: Jaguare, Riesenotter und endlose Horizonte.",
    },
  },
  {
    slug: "lencois-maranhenses",
    image: maranhaoImg,
    name: {
      pt: "Lençóis Maranhenses",
      en: "Lençóis Maranhenses",
      es: "Lençóis Maranhenses",
      it: "Lençóis Maranhenses",
      de: "Lençóis Maranhenses",
    },
    blurb: {
      pt: "Dunas brancas com lagoas turquesa — o deserto brasileiro que parece miragem.",
      en: "Snow-white dunes with turquoise lagoons — Brazil's most surreal desert.",
      es: "Dunas blancas con lagunas turquesa — el desierto brasileño que parece un espejismo.",
      it: "Dune bianche con lagune turchesi — il deserto brasiliano che sembra un miraggio.",
      de: "Schneeweiße Dünen mit türkisfarbenen Lagunen — Brasiliens surrealste Wüste.",
    },
  },
  {
    slug: "bahia",
    image: bahiaImg,
    name: {
      pt: "Bahia",
      en: "Bahia",
      es: "Bahía",
      it: "Bahia",
      de: "Bahia",
    },
    blurb: {
      pt: "Salvador colonial, praias selvagens da Costa do Sapê e a alma afro-brasileira em estado puro.",
      en: "Colonial Salvador, the wild beaches of the Costa do Sapê and Afro-Brazilian soul at its purest.",
      es: "Salvador colonial, playas salvajes de la Costa do Sapê y el alma afrobrasileña en estado puro.",
      it: "Salvador coloniale, le spiagge selvagge della Costa do Sapê e l'anima afro-brasiliana allo stato puro.",
      de: "Koloniales Salvador, die wilden Strände der Costa do Sapê und die afro-brasilianische Seele in Reinform.",
    },
  },
  {
    slug: "rio-de-janeiro",
    image: rioImg,
    name: {
      pt: "Rio de Janeiro",
      en: "Rio de Janeiro",
      es: "Río de Janeiro",
      it: "Rio de Janeiro",
      de: "Rio de Janeiro",
    },
    blurb: {
      pt: "A cidade maravilhosa entre montanha, floresta e mar — vista por dentro, longe do óbvio.",
      en: "The Marvelous City between mountain, forest and sea — seen from the inside, away from the obvious.",
      es: "La ciudad maravillosa entre montaña, selva y mar — vista por dentro, lejos de lo obvio.",
      it: "La città meravigliosa tra montagna, foresta e mare — vissuta dall'interno, lontano dall'ovvio.",
      de: "Die wundervolle Stadt zwischen Berg, Wald und Meer — von innen erlebt, abseits des Offensichtlichen.",
    },
  },
  {
    slug: "iguazu",
    image: paranaImg,
    name: {
      pt: "Foz do Iguaçu",
      en: "Iguazu Falls",
      es: "Cataratas del Iguazú",
      it: "Cascate di Iguazú",
      de: "Iguazú-Wasserfälle",
    },
    blurb: {
      pt: "275 quedas d'água numa das paisagens mais espetaculares do planeta.",
      en: "275 waterfalls forming one of the planet's most spectacular landscapes.",
      es: "275 saltos de agua en uno de los paisajes más espectaculares del planeta.",
      it: "275 cascate in uno dei paesaggi più spettacolari del pianeta.",
      de: "275 Wasserfälle in einer der spektakulärsten Landschaften der Erde.",
    },
  },
  {
    slug: "chapada-dos-veadeiros",
    image: goiasImg,
    name: {
      pt: "Chapada dos Veadeiros",
      en: "Chapada dos Veadeiros",
      es: "Chapada dos Veadeiros",
      it: "Chapada dos Veadeiros",
      de: "Chapada dos Veadeiros",
    },
    blurb: {
      pt: "Cânions, cachoeiras de cristal e o cerrado mais antigo do mundo — patrimônio da UNESCO.",
      en: "Canyons, crystal waterfalls and the world's oldest savanna — a UNESCO World Heritage site.",
      es: "Cañones, cascadas de cristal y la sabana más antigua del mundo — Patrimonio de la UNESCO.",
      it: "Canyon, cascate cristalline e la savana più antica del mondo — patrimonio UNESCO.",
      de: "Canyons, kristallklare Wasserfälle und die älteste Savanne der Welt — UNESCO-Welterbe.",
    },
  },
  {
    slug: "fernando-de-noronha",
    image: pernambucoImg,
    name: {
      pt: "Fernando de Noronha",
      en: "Fernando de Noronha",
      es: "Fernando de Noronha",
      it: "Fernando de Noronha",
      de: "Fernando de Noronha",
    },
    blurb: {
      pt: "Arquipélago vulcânico, mergulho entre golfinhos e tartarugas — o paraíso preservado do Atlântico Sul.",
      en: "Volcanic archipelago, diving with dolphins and turtles — the preserved paradise of the South Atlantic.",
      es: "Archipiélago volcánico, buceo entre delfines y tortugas — el paraíso preservado del Atlántico Sur.",
      it: "Arcipelago vulcanico, immersioni tra delfini e tartarughe — il paradiso protetto dell'Atlantico del Sud.",
      de: "Vulkanarchipel, Tauchen mit Delfinen und Schildkröten — das geschützte Paradies des Südatlantiks.",
    },
  },
];
