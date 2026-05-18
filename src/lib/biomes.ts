import type { Lang } from "@/i18n/config";

export type BiomeId =
  | "amazonia"
  | "cerrado"
  | "mata-atlantica"
  | "caatinga"
  | "pantanal"
  | "pampa"
  | "costa";

export interface Biome {
  id: BiomeId;
  /** Brand-aligned palette color (hex) */
  color: string;
  /** Display name per language */
  name: Record<Lang, string>;
  /** Short editorial description per language */
  description: Record<Lang, string>;
  /** Signature fauna highlights per language */
  fauna: Record<Lang, string>;
  /** Signature flora highlights per language */
  flora: Record<Lang, string>;
  /** "Wow" natural attractions per language */
  wow: Record<Lang, string>;
}

export const BIOMES: Biome[] = [
  {
    id: "amazonia",
    color: "#0B5D3B",
    name: {
      pt: "Amazônia",
      en: "Amazon Rainforest",
      es: "Amazonía",
      it: "Amazzonia",
      de: "Amazonas-Regenwald",
    },
    description: {
      pt: "A maior floresta tropical do planeta — um oceano verde de rios voadores, povos originários e biodiversidade impossível de medir.",
      en: "The planet's largest rainforest — a green ocean of flying rivers, indigenous peoples and biodiversity beyond measure.",
      es: "La mayor selva tropical del planeta — un océano verde de ríos voladores, pueblos originarios y biodiversidad inconmensurable.",
      it: "La più grande foresta pluviale del pianeta — un oceano verde di fiumi volanti, popoli indigeni e biodiversità incommensurabile.",
      de: "Der größte Regenwald der Erde — ein grüner Ozean aus fliegenden Flüssen, indigenen Völkern und unermesslicher Artenvielfalt.",
    },
    fauna: {
      pt: "Boto-cor-de-rosa, onça-pintada, arara-azul, peixe-boi, sucuri, preguiça, micos e mais de 1.300 espécies de aves.",
      en: "Pink river dolphins, jaguars, hyacinth macaws, manatees, anacondas, sloths, tamarins and 1,300+ bird species.",
      es: "Delfín rosado, jaguar, guacamayo azul, manatí, anaconda, perezosos, titíes y más de 1.300 aves.",
      it: "Delfino rosa, giaguaro, ara giacinto, lamantino, anaconda, bradipi, tamarini e oltre 1.300 specie di uccelli.",
      de: "Rosa Flussdelfin, Jaguar, Hyazinthara, Manati, Anakonda, Faultiere, Tamarine und 1.300+ Vogelarten.",
    },
    flora: {
      pt: "Vitória-régia, castanheira, seringueira, açaí, cumaru, ipês gigantes e orquídeas que só florescem aqui.",
      en: "Giant water lilies, Brazil nut trees, rubber trees, açaí palms, cumaru, towering ipês and endemic orchids.",
      es: "Victoria regia, castaño, árbol del caucho, açaí, cumarú, ipês gigantes y orquídeas endémicas.",
      it: "Vittoria regia, albero della noce del Brasile, gomma, açaí, cumaru, ipê giganti e orchidee endemiche.",
      de: "Riesenseerose, Paranussbaum, Kautschukbaum, Açaí, Cumarú, gewaltige Ipês und endemische Orchideen.",
    },
    wow: {
      pt: "Encontro das Águas, praias fluviais de Alter do Chão, lodges flutuantes no Rio Negro e a Floresta Nacional do Tapajós.",
      en: "Meeting of the Waters, river beaches of Alter do Chão, floating lodges on the Rio Negro and Tapajós National Forest.",
      es: "Encuentro de las Aguas, playas fluviales de Alter do Chão, lodges flotantes en el Río Negro y la Floresta Nacional del Tapajós.",
      it: "Incontro delle Acque, spiagge fluviali di Alter do Chão, lodge galleggianti sul Rio Negro e la Foresta Nazionale del Tapajós.",
      de: "Zusammenfluss der Wasser, Flussstrände von Alter do Chão, schwimmende Lodges am Rio Negro und der Tapajós-Nationalpark.",
    },
  },
  {
    id: "cerrado",
    color: "#C68E3D",
    name: {
      pt: "Cerrado",
      en: "Cerrado (Brazilian Savanna)",
      es: "Cerrado (Sabana Brasileña)",
      it: "Cerrado (Savana Brasiliana)",
      de: "Cerrado (Brasilianische Savanne)",
    },
    description: {
      pt: "A savana mais biodiversa do mundo: chapadões, rios cristalinos e o berço d'água do Brasil, com 11 mil espécies de plantas.",
      en: "The world's most biodiverse savanna: tablelands, crystal rivers and Brazil's water cradle, with 11,000 plant species.",
      es: "La sabana más biodiversa del mundo: mesetas, ríos cristalinos y la cuna del agua de Brasil, con 11.000 plantas.",
      it: "La savana più biodiversa del mondo: altipiani, fiumi cristallini e la culla d'acqua del Brasile, con 11.000 piante.",
      de: "Die artenreichste Savanne der Welt: Tafelberge, kristallklare Flüsse und Brasiliens Wasserwiege, mit 11.000 Pflanzenarten.",
    },
    fauna: {
      pt: "Lobo-guará, tamanduá-bandeira, tatu-canastra, ema, tucano-de-bico-verde e seriema.",
      en: "Maned wolf, giant anteater, giant armadillo, greater rhea, green-billed toucan and red-legged seriema.",
      es: "Aguará guazú, oso hormiguero gigante, armadillo gigante, ñandú, tucán pico verde y seriema.",
      it: "Lupo dalla criniera, formichiere gigante, armadillo gigante, nandù, tucano becco verde e seriema.",
      de: "Mähnenwolf, Riesenameisenbär, Riesengürteltier, Nandu, Grünschnabeltukan und Seriema.",
    },
    flora: {
      pt: "Ipês amarelos e roxos, pequi, buriti, capim-dourado, sempre-vivas e árvores tortuosas resistentes ao fogo.",
      en: "Yellow and purple ipês, pequi, buriti palms, golden grass, sempre-vivas and fire-resistant gnarled trees.",
      es: "Ipês amarillos y morados, pequi, buritis, capim dorado, sempre-vivas y árboles retorcidos resistentes al fuego.",
      it: "Ipê gialli e viola, pequi, palme buriti, erba dorata, sempre-vivas e alberi nodosi resistenti al fuoco.",
      de: "Gelbe und violette Ipês, Pequi, Buriti-Palmen, Goldgras, Sempre-Vivas und feuerresistente knorrige Bäume.",
    },
    wow: {
      pt: "Cachoeiras dos Cristais e Santa Bárbara, Vale da Lua, fervedouros do Jalapão e o cânion de Sussuapara.",
      en: "Cristais and Santa Bárbara waterfalls, Vale da Lua, Jalapão's natural springs and Sussuapara canyon.",
      es: "Cascadas de los Cristales y Santa Bárbara, Vale da Lua, manantiales del Jalapão y el cañón de Sussuapara.",
      it: "Cascate dei Cristalli e Santa Bárbara, Vale da Lua, sorgenti naturali del Jalapão e canyon di Sussuapara.",
      de: "Wasserfälle Cristais und Santa Bárbara, Vale da Lua, Quellen des Jalapão und Sussuapara-Canyon.",
    },
  },
  {
    id: "mata-atlantica",
    color: "#16653A",
    name: {
      pt: "Mata Atlântica",
      en: "Atlantic Forest",
      es: "Mata Atlántica",
      it: "Foresta Atlantica",
      de: "Atlantischer Regenwald",
    },
    description: {
      pt: "A floresta tropical mais ameaçada do mundo, com 20 mil espécies vegetais entre montanhas, serras e o mar.",
      en: "The world's most threatened tropical forest, with 20,000 plant species between mountains, ranges and sea.",
      es: "La selva tropical más amenazada del mundo, con 20.000 especies vegetales entre montañas, sierras y mar.",
      it: "La foresta tropicale più minacciata del mondo, con 20.000 specie vegetali tra montagne, sierre e mare.",
      de: "Der bedrohteste Tropenwald der Welt, mit 20.000 Pflanzenarten zwischen Bergen, Sierras und Meer.",
    },
    fauna: {
      pt: "Mico-leão-dourado, jaguatirica, bugio, tucano-de-bico-preto, beija-flores raros e baleias-jubarte em alto-mar.",
      en: "Golden lion tamarin, ocelot, howler monkey, channel-billed toucan, rare hummingbirds and humpback whales offshore.",
      es: "Tití león dorado, ocelote, mono aullador, tucán pico negro, colibríes raros y ballenas jorobadas mar adentro.",
      it: "Tamarino leone dorato, ocelot, urlatore, tucano becco nero, colibrì rari e megattere al largo.",
      de: "Goldlöwenäffchen, Ozelot, Brüllaffe, Schwarzschnabeltukan, seltene Kolibris und Buckelwale vor der Küste.",
    },
    flora: {
      pt: "Pau-brasil, jequitibás centenários, bromélias, orquídeas, palmito-juçara e a serra coberta de mata.",
      en: "Brazilwood, centenary jequitibás, bromeliads, orchids, juçara palm and mountain ranges blanketed in forest.",
      es: "Pau-brasil, jequitibás centenarios, bromelias, orquídeas, palmito juçara y sierras cubiertas de bosque.",
      it: "Pau-brasil, jequitibá centenari, bromelie, orchidee, palma juçara e catene montuose coperte di foresta.",
      de: "Pau-Brasil, hundertjährige Jequitibás, Bromelien, Orchideen, Juçara-Palme und waldbedeckte Bergketten.",
    },
    wow: {
      pt: "Pão de Açúcar, Floresta da Tijuca, Serra do Mar, Ilha Grande e as cachoeiras da Serra dos Órgãos.",
      en: "Sugarloaf Mountain, Tijuca Forest, Serra do Mar, Ilha Grande and the waterfalls of Serra dos Órgãos.",
      es: "Pan de Azúcar, Floresta da Tijuca, Serra do Mar, Ilha Grande y las cascadas de la Serra dos Órgãos.",
      it: "Pan di Zucchero, Foresta di Tijuca, Serra do Mar, Ilha Grande e le cascate della Serra dos Órgãos.",
      de: "Zuckerhut, Tijuca-Wald, Serra do Mar, Ilha Grande und die Wasserfälle der Serra dos Órgãos.",
    },
  },
  {
    id: "caatinga",
    color: "#D4A574",
    name: {
      pt: "Caatinga",
      en: "Caatinga (Dry Forest)",
      es: "Caatinga (Bosque Seco)",
      it: "Caatinga (Foresta Secca)",
      de: "Caatinga (Trockenwald)",
    },
    description: {
      pt: "Único bioma 100% brasileiro: a 'mata branca' do sertão, com cactos gigantes, rios de pedra e céus mais estrelados do país.",
      en: "Brazil's only fully native biome: the sertão's 'white forest', with giant cacti, stone rivers and the country's starriest skies.",
      es: "El único bioma 100% brasileño: el 'bosque blanco' del sertão, con cactus gigantes, ríos de piedra y los cielos más estrellados del país.",
      it: "L'unico bioma 100% brasiliano: la 'foresta bianca' del sertão, con cactus giganti, fiumi di pietra e i cieli più stellati del paese.",
      de: "Brasiliens einziges rein heimisches Biom: der 'weiße Wald' des Sertão, mit Riesenkakteen, Steinflüssen und Brasiliens sternenreichstem Himmel.",
    },
    fauna: {
      pt: "Arara-azul-de-lear, asa-branca, jaguatirica, mocó, tatu-bola e o sapo-cururu.",
      en: "Lear's macaw, picazuro pigeon, ocelot, rock cavy, three-banded armadillo and cururu toad.",
      es: "Guacamayo de Lear, paloma picazuro, ocelote, mocó, armadillo de tres bandas y sapo cururu.",
      it: "Ara di Lear, colombo picazuro, ocelot, mocó, armadillo a tre bande e rospo cururu.",
      de: "Lear-Ara, Picazuro-Taube, Ozelot, Mocó, Dreibinden-Gürteltier und Cururu-Kröte.",
    },
    flora: {
      pt: "Mandacaru, xique-xique, juazeiro, umbuzeiro, facheiro e o florido cactos-coroa-de-frade após as chuvas.",
      en: "Mandacaru and xique-xique cacti, juazeiro, umbuzeiro, facheiro and the friar's-crown cactus that blooms after the rains.",
      es: "Cactus mandacaru y xique-xique, juazeiro, umbuzeiro, facheiro y el cactus corona-de-fraile en flor tras las lluvias.",
      it: "Cactus mandacaru e xique-xique, juazeiro, umbuzeiro, facheiro e il cactus corona-di-frate in fiore dopo le piogge.",
      de: "Mandacaru- und Xique-Xique-Kakteen, Juazeiro, Umbuzeiro, Facheiro und der nach Regen blühende Mönchskaktus.",
    },
    wow: {
      pt: "Cânions do Xingó, Cachoeira da Fumaça, Vale do Pati, Poço Azul e o Morro do Pai Inácio na Chapada Diamantina.",
      en: "Xingó canyons, Fumaça Waterfall, Pati Valley, Poço Azul and Morro do Pai Inácio in Chapada Diamantina.",
      es: "Cañones del Xingó, Cascada da Fumaça, Valle do Pati, Poço Azul y el Morro do Pai Inácio en Chapada Diamantina.",
      it: "Canyon di Xingó, Cascata da Fumaça, Valle del Pati, Poço Azul e Morro do Pai Inácio nella Chapada Diamantina.",
      de: "Xingó-Canyons, Fumaça-Wasserfall, Pati-Tal, Poço Azul und der Morro do Pai Inácio in der Chapada Diamantina.",
    },
  },
  {
    id: "pantanal",
    color: "#3D8A78",
    name: {
      pt: "Pantanal",
      en: "Pantanal Wetlands",
      es: "Pantanal",
      it: "Pantanal",
      de: "Pantanal",
    },
    description: {
      pt: "A maior planície alagável do planeta — o melhor lugar do mundo para ver vida selvagem a céu aberto.",
      en: "The planet's largest tropical wetland — the best place on Earth to see wildlife in the open.",
      es: "La mayor llanura inundable del planeta — el mejor lugar del mundo para ver vida silvestre a cielo abierto.",
      it: "La più grande pianura alluvionale del pianeta — il miglior posto al mondo per osservare la fauna selvatica all'aperto.",
      de: "Die größte Überschwemmungsebene der Erde — der weltbeste Ort, um Wildtiere unter freiem Himmel zu sehen.",
    },
    fauna: {
      pt: "Onça-pintada (maior densidade do mundo), tuiuiú, jacaré, ariranha, anta, cervo-do-pantanal e mais de 650 aves.",
      en: "Jaguar (world's highest density), jabiru stork, caiman, giant otter, tapir, marsh deer and 650+ bird species.",
      es: "Jaguar (mayor densidad del mundo), tuyuyú, yacaré, nutria gigante, tapir, ciervo de los pantanos y más de 650 aves.",
      it: "Giaguaro (massima densità al mondo), tuiuiú, caimano, lontra gigante, tapiro, cervo delle paludi e oltre 650 uccelli.",
      de: "Jaguar (höchste Dichte weltweit), Jabiru, Kaiman, Riesenotter, Tapir, Sumpfhirsch und 650+ Vogelarten.",
    },
    flora: {
      pt: "Ipês floridos, paratudal, carandazal, vitórias-régias e os campos inundáveis pintados de rosa pelos piúvas.",
      en: "Flowering ipês, paratudo forests, carandá palms, water lilies and floodplains painted pink by piúva trees.",
      es: "Ipês en flor, paratudais, carandazales, victorias regias y llanuras inundables teñidas de rosa por los piúvas.",
      it: "Ipê fioriti, paratudais, carandazales, vittorie regie e pianure alluvionali tinte di rosa dai piúva.",
      de: "Blühende Ipês, Paratudo-Wälder, Carandá-Palmen, Riesenseerosen und von Piúva-Bäumen rosa gefärbte Überschwemmungsflächen.",
    },
    wow: {
      pt: "Transpantaneira, safáris noturnos no Rio Cuiabá, observação de onças no Porto Jofre e ninhais de tuiuiús.",
      en: "Transpantaneira road, night safaris on the Cuiabá River, jaguar tracking in Porto Jofre and jabiru nesting colonies.",
      es: "Transpantaneira, safaris nocturnos en el Río Cuiabá, observación de jaguares en Porto Jofre y colonias de tuyuyúes.",
      it: "Transpantaneira, safari notturni sul fiume Cuiabá, avvistamento giaguari a Porto Jofre e colonie di tuiuiú.",
      de: "Transpantaneira-Straße, Nachtsafaris am Cuiabá-Fluss, Jaguar-Beobachtung in Porto Jofre und Jabiru-Brutkolonien.",
    },
  },
  {
    id: "pampa",
    color: "#88A87A",
    name: {
      pt: "Pampa",
      en: "Pampas Grasslands",
      es: "Pampa",
      it: "Pampa",
      de: "Pampa",
    },
    description: {
      pt: "Campos abertos do extremo sul — terra dos gaúchos, do vento minuano e dos horizontes que não acabam.",
      en: "Open grasslands of Brazil's far south — land of gauchos, the minuano wind and endless horizons.",
      es: "Pastizales abiertos del extremo sur — tierra de gauchos, viento minuano y horizontes sin fin.",
      it: "Praterie aperte dell'estremo sud — terra dei gauchos, del vento minuano e di orizzonti infiniti.",
      de: "Offene Graslandschaften im äußersten Süden — Land der Gauchos, des Minuano-Windes und endloser Horizonte.",
    },
    fauna: {
      pt: "Veado-campeiro, graxaim, gato-do-mato, perdiz, quero-quero, ema e capivara nas lagoas.",
      en: "Pampas deer, pampas fox, wildcat, partridge, southern lapwing, rhea and capybaras in the lagoons.",
      es: "Venado de las pampas, zorro gris, gato montés, perdiz, tero, ñandú y capibaras en las lagunas.",
      it: "Cervo della pampa, volpe della pampa, gatto selvatico, pernice, tero, nandù e capibara nelle lagune.",
      de: "Pampashirsch, Pampasfuchs, Wildkatze, Rebhuhn, Bronzekiebitz, Nandu und Capybaras in den Lagunen.",
    },
    flora: {
      pt: "Capim-mimoso, barba-de-bode, flor-das-almas, butiá, gravatá e os capões de mata nativa.",
      en: "Native grasses, gravatá bromeliads, butiá palms, flowering shrubs and isolated patches of native forest.",
      es: "Gramíneas nativas, bromelias gravatá, palmera butiá, flores silvestres y manchones de bosque nativo.",
      it: "Erbe native, bromelie gravatá, palme butiá, fiori selvatici e isolati boschetti nativi.",
      de: "Heimische Gräser, Gravatá-Bromelien, Butiá-Palmen, Wildblumen und isolierte heimische Waldinseln.",
    },
    wow: {
      pt: "Vinícolas da Campanha Gaúcha, Cânions do Aparados da Serra, Lagoa do Peixe e o Bioma Pampa em primavera.",
      en: "Campanha Gaúcha wineries, Aparados da Serra canyons, Lagoa do Peixe wetlands and the Pampa in spring bloom.",
      es: "Viñedos de la Campanha Gaúcha, cañones de Aparados da Serra, humedales de Lagoa do Peixe y el Pampa florido.",
      it: "Cantine della Campanha Gaúcha, canyon di Aparados da Serra, zone umide di Lagoa do Peixe e il Pampa in fiore.",
      de: "Weingüter der Campanha Gaúcha, Aparados da Serra-Canyons, Lagoa do Peixe-Feuchtgebiete und die blühende Pampa.",
    },
  },
  {
    id: "costa",
    color: "#3B85B8",
    name: {
      pt: "Costa & Litoral",
      en: "Coast & Islands",
      es: "Costa e Islas",
      it: "Costa e Isole",
      de: "Küste & Inseln",
    },
    description: {
      pt: "7.491 km de costa atlântica: piscinas naturais, dunas brancas, arquipélagos vulcânicos e a maior barreira de corais do Atlântico Sul.",
      en: "7,491 km of Atlantic coast: natural pools, white dunes, volcanic archipelagos and the largest coral reef of the South Atlantic.",
      es: "7.491 km de costa atlántica: piscinas naturales, dunas blancas, archipiélagos volcánicos y la mayor barrera de coral del Atlántico Sur.",
      it: "7.491 km di costa atlantica: piscine naturali, dune bianche, arcipelaghi vulcanici e la più grande barriera corallina dell'Atlantico Meridionale.",
      de: "7.491 km Atlantikküste: Naturpools, weiße Dünen, Vulkanarchipele und das größte Korallenriff des Südatlantiks.",
    },
    fauna: {
      pt: "Tartarugas marinhas, golfinhos-rotadores, baleias-jubarte, peixe-boi-marinho, recifes vivos e aves migratórias.",
      en: "Sea turtles, spinner dolphins, humpback whales, marine manatees, living reefs and migratory seabirds.",
      es: "Tortugas marinas, delfines giradores, ballenas jorobadas, manatí marino, arrecifes vivos y aves migratorias.",
      it: "Tartarughe marine, delfini stenella, megattere, lamantino marino, barriere viventi e uccelli migratori.",
      de: "Meeresschildkröten, Spinnerdelfine, Buckelwale, Karibikmanatis, lebende Riffe und Zugvögel.",
    },
    flora: {
      pt: "Restingas, mangues, coqueirais, cajueiros gigantes e os carnaubais que pintam o litoral nordestino.",
      en: "Restinga scrub, mangroves, coconut groves, giant cashew trees and the carnaúba palms that paint the northeast coast.",
      es: "Restingas, manglares, cocoteros, cajueiros gigantes y los carnaubais que pintan la costa nordestina.",
      it: "Restinghe, mangrovie, palmeti di cocco, anacardi giganti e le palme carnaúba che dipingono la costa nordorientale.",
      de: "Restinga-Buschland, Mangroven, Kokoshaine, Riesen-Cashewbäume und die Carnaúba-Palmen der Nordostküste.",
    },
    wow: {
      pt: "Lagoas turquesa dos Lençóis Maranhenses, piscinas naturais de Maragogi, dunas de Jericoacoara e o santuário de Fernando de Noronha.",
      en: "Turquoise lagoons of Lençóis Maranhenses, natural pools of Maragogi, dunes of Jericoacoara and the Fernando de Noronha sanctuary.",
      es: "Lagunas turquesa de los Lençóis Maranhenses, piscinas naturales de Maragogi, dunas de Jericoacoara y el santuario de Fernando de Noronha.",
      it: "Lagune turchesi dei Lençóis Maranhenses, piscine naturali di Maragogi, dune di Jericoacoara e il santuario di Fernando de Noronha.",
      de: "Türkisfarbene Lagunen der Lençóis Maranhenses, Naturpools von Maragogi, Dünen von Jericoacoara und das Schutzgebiet Fernando de Noronha.",
    },
  },
];

export const BIOMES_BY_ID = Object.fromEntries(
  BIOMES.map((b) => [b.id, b])
) as Record<BiomeId, Biome>;
