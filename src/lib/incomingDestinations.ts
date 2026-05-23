import type { ContentLang } from "@/i18n/config";

import amazonasImg from "@/assets/states/amazonas.jpg";
import matoGrossoImg from "@/assets/states/mato-grosso.jpg";
import maranhaoImg from "@/assets/destinations/brasil-lencois-maranhenses.jpg";
import salvadorImg from "@/assets/destinations/brasil-salvador.jpg";
import rioImg from "@/assets/destinations/brasil-rio-de-janeiro.jpg";
import iguacuImg from "@/assets/destinations/brasil-cataratas-iguacu.jpg";
import veadeirosImg from "@/assets/destinations/brasil-chapada-dos-veadeiros.jpg";
import noronhaImg from "@/assets/destinations/brasil-fernando-de-noronha.jpg";
import chapadaDiamantinaImg from "@/assets/destinations/brasil-chapada-diamantina.jpg";
import jericoacoaraImg from "@/assets/destinations/brasil-jericoacoara.jpg";
import bonitoImg from "@/assets/destinations/brasil-bonito.jpg";
import alterDoChaoImg from "@/assets/destinations/brasil-amazonia-kaiara-alter-do-chao.jpg";

import jalapaoImg from "@/assets/destinations/brasil-jalapao.jpg";
import maragogiImg from "@/assets/destinations/brasil-litoral-alagoano.jpg";
import floripaImg from "@/assets/destinations/brasil-litoral-santa-catarina.jpg";
import rotaEmocoesImg from "@/assets/destinations/brasil-rota-das-emocoes.jpg";

import type { BiomeId } from "./biomes";

export interface IncomingDestination {
  slug: string;
  image: string;
  /** Native, search-friendly name in each language */
  name: Record<ContentLang, string>;
  /** One-line editorial blurb in each language */
  blurb: Record<ContentLang, string>;
  /** Primary biome this destination belongs to */
  biome: BiomeId;
  /** Approximate position on the stylized Brazil SVG (viewBox 0 0 600 700) */
  map: { x: number; y: number };
}

export const INCOMING_DESTINATIONS: IncomingDestination[] = [
  {
    slug: "amazon",
    biome: "amazonia",
    map: { x: 210, y: 145 },
    image: amazonasImg,
    name: {
      pt: "Amazônia",
      en: "Amazon Rainforest",
      es: "Amazonía",
      it: "Amazzonia",
      de: "Amazonas-Regenwald",
      fr: "Forêt amazonienne",
      he: "יער הגשם באמזונס",
    },
    blurb: {
      pt: "Lodges remotos, encontro com povos ribeirinhos e a maior floresta tropical do planeta.",
      en: "Remote eco-lodges, river-community encounters and the largest rainforest on Earth.",
      es: "Lodges remotos, encuentros con comunidades ribereñas y la mayor selva tropical del planeta.",
      it: "Lodge remoti, incontri con le comunità fluviali e la più grande foresta pluviale del mondo.",
      de: "Abgelegene Eco-Lodges, Begegnungen mit Flussgemeinschaften und der größte Regenwald der Erde.",
      fr: "Éco-lodges isolés, rencontres avec les communautés riveraines et la plus grande forêt tropicale humide de la Terre.",
      he: "אקו-לודג'ים מרוחקים, מפגשים עם קהילות נהר ויער הגשם הגדול ביותר על פני כדור הארץ.",
    },
  },
  {
    slug: "pantanal",
    biome: "pantanal",
    map: { x: 262, y: 386 },
    image: matoGrossoImg,
    name: {
      pt: "Pantanal",
      en: "Pantanal Wetlands",
      es: "Pantanal",
      it: "Pantanal",
      de: "Pantanal",
      fr: "Zones humides du Pantanal",
      he: "השטחים הרטובים של הפנטנל",
    },
    blurb: {
      pt: "O melhor safári de vida selvagem das Américas: onças-pintadas, tuiuiús e horizontes infinitos.",
      en: "The Americas' finest wildlife safari: jaguars, giant otters and endless horizons.",
      es: "El mejor safari de vida silvestre de América: jaguares, nutrias gigantes y horizontes infinitos.",
      it: "Il miglior safari naturalistico delle Americhe: giaguari, lontre giganti e orizzonti infiniti.",
      de: "Die beste Wildlife-Safari Amerikas: Jaguare, Riesenotter und endlose Horizonte.",
      fr: "Le plus beau safari animalier des Amériques : jaguars, loutres géantes et horizons infinis.",
      he: "הספארי הטוב ביותר לחיות בר באמריקה: יגוארים, לוטרות ענק ואופקים אינסופיים.",
    },
  },
  {
    slug: "lencois-maranhenses",
    biome: "costa",
    map: { x: 465, y: 135 },
    image: maranhaoImg,
    name: {
      pt: "Lençóis Maranhenses",
      en: "Lençóis Maranhenses",
      es: "Lençóis Maranhenses",
      it: "Lençóis Maranhenses",
      de: "Lençóis Maranhenses",
      fr: "Lençóis Maranhenses",
      he: "לנסויס מרניינסס",
    },
    blurb: {
      pt: "Dunas brancas com lagoas turquesa — o deserto brasileiro que parece miragem.",
      en: "Snow-white dunes with turquoise lagoons — Brazil's most surreal desert.",
      es: "Dunas blancas con lagunas turquesa — el desierto brasileño que parece un espejismo.",
      it: "Dune bianche con lagune turchesi — il deserto brasiliano che sembra un miraggio.",
      de: "Schneeweiße Dünen mit türkisfarbenen Lagunen — Brasiliens surrealste Wüste.",
      fr: "Des dunes d'un blanc immaculé avec des lagons turquoise — le désert le plus surréaliste du Brésil.",
      he: "דיונות לבנות שלג עם לגונות טורקיז — המדבר הסוריאליסטי ביותר בברזיל.",
    },
  },
  {
    slug: "bahia",
    biome: "mata-atlantica",
    map: { x: 532, y: 323 },
    image: salvadorImg,
    name: {
      pt: "Bahia",
      en: "Bahia",
      es: "Bahía",
      it: "Bahia",
      de: "Bahia",
      fr: "Bahia",
      he: "Bahia",
    },
    blurb: {
      pt: "Salvador colonial, praias selvagens da Costa do Sapê e a alma afro-brasileira em estado puro.",
      en: "Colonial Salvador, the wild beaches of the Costa do Sapê and Afro-Brazilian soul at its purest.",
      es: "Salvador colonial, playas salvajes de la Costa do Sapê y el alma afrobrasileña en estado puro.",
      it: "Salvador coloniale, le spiagge selvagge della Costa do Sapê e l'anima afro-brasiliana allo stato puro.",
      de: "Koloniales Salvador, die wilden Strände der Costa do Sapê und die afro-brasilianische Seele in Reinform.",
      fr: "Salvador colonial, les plages sauvages de la Costa do Sapê et l'âme afro-brésilienne à son paroxysme.",
      he: "סלבדור הקולוניאלית, החופים הפראיים של קוסטה דו סאפה והנשמה האפרו-ברזילאית בטהרתה.",
    },
  },
  {
    slug: "rio-de-janeiro",
    biome: "mata-atlantica",
    map: { x: 462, y: 501 },
    image: rioImg,
    name: {
      pt: "Rio de Janeiro",
      en: "Rio de Janeiro",
      es: "Río de Janeiro",
      it: "Rio de Janeiro",
      de: "Rio de Janeiro",
      fr: "Rio de Janeiro",
      he: "ריו דה ז'ניירו",
    },
    blurb: {
      pt: "A cidade maravilhosa entre montanha, floresta e mar — vista por dentro, longe do óbvio.",
      en: "The Marvelous City between mountain, forest and sea — seen from the inside, away from the obvious.",
      es: "La ciudad maravillosa entre montaña, selva y mar — vista por dentro, lejos de lo obvio.",
      it: "La città meravigliosa tra montagna, foresta e mare — vissuta dall'interno, lontano dall'ovvio.",
      de: "Die wundervolle Stadt zwischen Berg, Wald und Meer — von innen erlebt, abseits des Offensichtlichen.",
      fr: "La Ville Merveilleuse entre montagne, forêt et mer — vue de l'intérieur, loin de l'évidence.",
      he: "העיר המדהימה בין הר, יער וים — נצפית מבפנים, הרחק מהמובן מאליו.",
    },
  },
  {
    slug: "iguazu",
    biome: "mata-atlantica",
    map: { x: 292, y: 549 },
    image: iguacuImg,
    name: {
      pt: "Foz do Iguaçu",
      en: "Iguazu Falls",
      es: "Cataratas del Iguazú",
      it: "Cascate di Iguazú",
      de: "Iguazú-Wasserfälle",
      fr: "Chutes d'Iguazu",
      he: "מפלי איגואסו",
    },
    blurb: {
      pt: "275 quedas d'água numa das paisagens mais espetaculares do planeta.",
      en: "275 waterfalls forming one of the planet's most spectacular landscapes.",
      es: "275 saltos de agua en uno de los paisajes más espectaculares del planeta.",
      it: "275 cascate in uno dei paesaggi più spettacolari del pianeta.",
      de: "275 Wasserfälle in einer der spektakulärsten Landschaften der Erde.",
      fr: "275 cascades formant l'un des paysages les plus spectaculaires de la planète.",
      he: "275 מפלים המרכיבים את אחד הנופים המרהיבים ביותר על פני כדור הארץ.",
    },
  },
  {
    slug: "chapada-dos-veadeiros",
    biome: "cerrado",
    map: { x: 397, y: 343 },
    image: veadeirosImg,
    name: {
      pt: "Chapada dos Veadeiros",
      en: "Chapada dos Veadeiros",
      es: "Chapada dos Veadeiros",
      it: "Chapada dos Veadeiros",
      de: "Chapada dos Veadeiros",
      fr: "Chapada dos Veadeiros",
      he: "צ'אפאדה דוס ויידיירוס",
    },
    blurb: {
      pt: "Cânions, cachoeiras de cristal e o cerrado mais antigo do mundo — patrimônio da UNESCO.",
      en: "Canyons, crystal waterfalls and the world's oldest savanna — a UNESCO World Heritage site.",
      es: "Cañones, cascadas de cristal y la sabana más antigua del mundo — Patrimonio de la UNESCO.",
      it: "Canyon, cascate cristalline e la savana più antica del mondo — patrimonio UNESCO.",
      de: "Canyons, kristallklare Wasserfälle und die älteste Savanne der Welt — UNESCO-Welterbe.",
      fr: "Des canyons, des chutes d'eau cristallines et la plus ancienne savane du monde — un site classé au patrimoine mondial de l'UNESCO.",
      he: "קניונים, מפלי מים כחולים והסוואנה הוותיקה בעולם — אתר מורשת עולמית של אונסק"ו.",
    },
  },
  {
    slug: "fernando-de-noronha",
    biome: "costa",
    map: { x: 590, y: 175 },
    image: noronhaImg,
    name: {
      pt: "Fernando de Noronha",
      en: "Fernando de Noronha",
      es: "Fernando de Noronha",
      it: "Fernando de Noronha",
      de: "Fernando de Noronha",
      fr: "Fernando de Noronha",
      he: "פרננדו דה נורוניה",
    },
    blurb: {
      pt: "Arquipélago vulcânico, mergulho entre golfinhos e tartarugas — o paraíso preservado do Atlântico Sul.",
      en: "Volcanic archipelago, diving with dolphins and turtles — the preserved paradise of the South Atlantic.",
      es: "Archipiélago volcánico, buceo entre delfines y tortugas — el paraíso preservado del Atlántico Sur.",
      it: "Arcipelago vulcanico, immersioni tra delfini e tartarughe — il paradiso protetto dell'Atlantico del Sud.",
      de: "Vulkanarchipel, Tauchen mit Delfinen und Schildkröten — das geschützte Paradies des Südatlantiks.",
      fr: "Archipel volcanique, plongée avec les dauphins et les tortues — le paradis préservé de l'Atlantique Sud.",
      he: "ארכיפלג געשי, צלילה עם דולפינים וצבים — גן העדן השמור של האוקיינוס האטלנטי הדרומי.",
    },
  },
  {
    slug: "chapada-diamantina",
    biome: "caatinga",
    map: { x: 487, y: 314 },
    image: chapadaDiamantinaImg,
    name: {
      pt: "Chapada Diamantina",
      en: "Chapada Diamantina",
      es: "Chapada Diamantina",
      it: "Chapada Diamantina",
      de: "Chapada Diamantina",
      fr: "Chapada Diamantina",
      he: "צ'פדה דיאמנטינה",
    },
    blurb: {
      pt: "Vales, grutas azuis e cachoeiras gigantes no coração da Bahia — trekking e silêncio.",
      en: "Valleys, blue caves and towering waterfalls in the heart of Bahia — trekking and silence.",
      es: "Valles, grutas azules y cascadas gigantes en el corazón de Bahía — trekking y silencio.",
      it: "Valli, grotte azzurre e cascate giganti nel cuore di Bahia — trekking e silenzio.",
      de: "Täler, blaue Grotten und gewaltige Wasserfälle im Herzen Bahias — Trekking und Stille.",
      fr: "Vallées, grottes bleues et cascades imposantes au cœur de Bahia — trekking et silence.",
      he: "עמקים, מערות כחולות ומפלים אדירים בלב באהיה — טרקים ושתיקה.",
    },
  },
  {
    slug: "jericoacoara",
    biome: "costa",
    map: { x: 502, y: 140 },
    image: jericoacoaraImg,
    name: {
      pt: "Jericoacoara",
      en: "Jericoacoara",
      es: "Jericoacoara",
      it: "Jericoacoara",
      de: "Jericoacoara",
      fr: "Jericoacoara",
      he: "ג'ריקווארה",
    },
    blurb: {
      pt: "Vila de pescadores entre dunas e mar — pôr do sol no alto da duna e ruas de areia.",
      en: "A fishing village between dunes and sea — sunset from the dune and sandy streets.",
      es: "Pueblo de pescadores entre dunas y mar — atardecer en la duna y calles de arena.",
      it: "Villaggio di pescatori tra dune e mare — tramonto sulla duna e strade di sabbia.",
      de: "Fischerdorf zwischen Dünen und Meer — Sonnenuntergang auf der Düne und Sandstraßen.",
      fr: "Un village de pêcheurs entre dunes et mer — coucher de soleil depuis la dune et les rues sableuses.",
      he: "כפר דייגים בין דיונות לים - שקיעה מהדיונה ומהרחובות החוליים.",
    },
  },
  {
    slug: "bonito",
    biome: "pantanal",
    map: { x: 262, y: 468 },
    image: bonitoImg,
    name: {
      pt: "Bonito",
      en: "Bonito",
      es: "Bonito",
      it: "Bonito",
      de: "Bonito",
      fr: "Bonito",
      he: "בוניטו",
    },
    blurb: {
      pt: "Rios transparentes para flutuar entre peixes, grutas submersas e cavernas de água azul.",
      en: "Crystal-clear rivers to float among fish, submerged grottoes and blue-water caves.",
      es: "Ríos transparentes para flotar entre peces, grutas sumergidas y cavernas de agua azul.",
      it: "Fiumi trasparenti per galleggiare tra i pesci, grotte sommerse e caverne d'acqua azzurra.",
      de: "Glasklare Flüsse zum Treiben zwischen Fischen, versunkene Grotten und blaue Wasserhöhlen.",
      fr: "Des rivières cristallines pour flotter parmi les poissons, des grottes submergées et des cavernes aux eaux bleues.",
      he: "נהרות צלולים לשוט בהם בין דגים, מערות תת-מימיות ומערות מים כחולים.",
    },
  },
  {
    slug: "alter-do-chao",
    biome: "amazonia",
    map: { x: 286, y: 135 },
    image: alterDoChaoImg,
    name: {
      pt: "Alter do Chão",
      en: "Alter do Chão",
      es: "Alter do Chão",
      it: "Alter do Chão",
      de: "Alter do Chão",
      fr: "Alter do Chão",
      he: "אלטר דו שאו",
    },
    blurb: {
      pt: "O 'Caribe amazônico': praias de rio com areia branca e floresta logo atrás.",
      en: "The 'Caribbean of the Amazon': white-sand river beaches with the rainforest behind.",
      es: "El 'Caribe amazónico': playas de río con arena blanca y selva justo detrás.",
      it: "I 'Caraibi amazzonici': spiagge fluviali di sabbia bianca con la foresta alle spalle.",
      de: "Die 'Karibik des Amazonas': weiße Flussstrände mit Regenwald direkt dahinter.",
      fr: "Le 'Caraïbe de l'Amazonie': plages de sable blanc avec la forêt tropicale en arrière-plan.",
      he: "ה'קריביים של האמזונס': חופי נהר חוליים לבנים עם יער הגשם מאחור.",
    },
  },
  {
    slug: "jalapao",
    biome: "cerrado",
    map: { x: 414, y: 269 },
    image: jalapaoImg,
    name: {
      pt: "Jalapão",
      en: "Jalapão",
      es: "Jalapão",
      it: "Jalapão",
      de: "Jalapão",
      fr: "Jalapão",
      he: "Jalapão",
    },
    blurb: {
      pt: "Dunas alaranjadas, fervedouros e cachoeiras escondidas no cerrado mais remoto do Brasil.",
      en: "Orange dunes, natural springs and hidden waterfalls in Brazil's remotest savanna.",
      es: "Dunas anaranjadas, manantiales naturales y cascadas escondidas en el cerrado más remoto.",
      it: "Dune arancioni, sorgenti naturali e cascate nascoste nel cerrado più remoto del Brasile.",
      de: "Orangefarbene Dünen, natürliche Quellen und versteckte Wasserfälle in Brasiliens entlegenster Savanne.",
      fr: "Des dunes oranges, des sources naturelles et des cascades cachées dans la savane la plus reculée du Brésil.",
      he: "דיונות כתומות, מעיינות טבעיים ומפלים נסתרים בסוואנה המרוחקת ביותר של ברזיל.",
    },
  },
  {
    slug: "maragogi",
    biome: "costa",
    map: { x: 568, y: 251 },
    image: maragogiImg,
    name: {
      pt: "Maragogi",
      en: "Maragogi",
      es: "Maragogi",
      it: "Maragogi",
      de: "Maragogi",
      fr: "Maragogi",
      he: "Maragogi",
    },
    blurb: {
      pt: "Piscinas naturais de águas cristalinas e recifes de coral no litoral de Alagoas.",
      en: "Crystal-clear natural pools and coral reefs along the coast of Alagoas.",
      es: "Piscinas naturales de aguas cristalinas y arrecifes de coral en la costa de Alagoas.",
      it: "Piscine naturali di acque cristalline e barriere coralline sulla costa di Alagoas.",
      de: "Kristallklare Naturpools und Korallenriffe an der Küste von Alagoas.",
      fr: "Piscines naturelles cristallines et récifs coralliens le long de la côte d'Alagoas.",
      he: "בריכות טבעיות צלולות ושוניות אלמוגים לאורך חוף אלגואס.",
    },
  },
  {
    slug: "florianopolis",
    biome: "mata-atlantica",
    map: { x: 382, y: 585 },
    image: floripaImg,
    name: {
      pt: "Florianópolis",
      en: "Florianópolis",
      es: "Florianópolis",
      it: "Florianópolis",
      de: "Florianópolis",
      fr: "Florianópolis",
      he: "פלוריאנופוליס",
    },
    blurb: {
      pt: "Ilha de 42 praias, lagoas e trilhas — surf, ostras e o sul brasileiro mais leve.",
      en: "An island of 42 beaches, lagoons and trails — surf, oysters and Brazil's lightest south.",
      es: "Isla de 42 playas, lagunas y senderos — surf, ostras y el sur brasileño más ligero.",
      it: "Un'isola di 42 spiagge, lagune e sentieri — surf, ostriche e il sud brasiliano più leggero.",
      de: "Eine Insel mit 42 Stränden, Lagunen und Wegen — Surfen, Austern und der leichteste Süden Brasiliens.",
      fr: "Une île de 42 plages, lagons et sentiers — surf, huîtres et le sud le plus léger du Brésil.",
      he: "אי של 42 חופים, לגונות ושבילים — גלישה, אויסטרים והדרום הקל ביותר של ברזיל.",
    },
  },
  {
    slug: "rota-emocoes",
    biome: "costa",
    map: { x: 483, y: 140 },
    image: rotaEmocoesImg,
    name: {
      pt: "Rota das Emoções",
      en: "Route of Emotions",
      es: "Ruta de las Emociones",
      it: "Rotta delle Emozioni",
      de: "Route der Emotionen",
      fr: "Route des Émotions",
      he: "דרך הרגשות",
    },
    blurb: {
      pt: "De Jericoacoara aos Lençóis passando pelo Delta do Parnaíba — três estados, uma travessia mítica.",
      en: "From Jericoacoara to Lençóis via the Parnaíba Delta — three states, one mythic crossing.",
      es: "De Jericoacoara a los Lençóis pasando por el Delta del Parnaíba — tres estados, una travesía mítica.",
      it: "Da Jericoacoara ai Lençóis passando per il Delta del Parnaíba — tre stati, una traversata mitica.",
      de: "Von Jericoacoara zu den Lençóis über das Parnaíba-Delta — drei Bundesstaaten, eine mythische Reise.",
      fr: "De Jericoacoara aux Lençóis via le delta du Parnaíba — trois états, une traversée mythique.",
      he: "מג'ריקואקוארה ללנסויס דרך דלתת פרנאיבה — שלושה מחוזות, חצייה מיתית אחת.",
    },
  },
];
