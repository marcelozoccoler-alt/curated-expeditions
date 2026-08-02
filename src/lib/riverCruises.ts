// Rotas de cruzeiros fluviais AmaWaterways comercializadas pela Create Travel.
// Padrão de URL: /cruzeiros-fluviais e /cruzeiros-fluviais/:slug

import type { FAQ } from "./types";

export interface CruiseDay {
  dia: string;
  porto: string;
  descricao: string;
}

export interface RiverCruise {
  slug: string;
  name: string;            // Nome comercial da rota
  river: string;           // Rio principal
  region: string;          // Europa, Ásia, África, América do Sul
  countries: string[];
  duration: string;        // "7 noites"
  route: string;           // "Budapeste → Vilshofen"
  ships: string[];
  bestTime: string;
  priceFrom: string;
  intro: string;
  highlights: string[];
  itinerary: CruiseDay[];
  includes: string[];
  faq: FAQ[];
  metaTitle: string;
  metaDescription: string;
  keywords: string;
}

export const riverCruises: RiverCruise[] = [
  {
    slug: "danubio-encantador",
    name: "Danúbio Encantador",
    river: "Danúbio",
    region: "Europa",
    countries: ["Hungria", "Eslováquia", "Áustria", "Alemanha"],
    duration: "7 noites",
    route: "Budapeste → Vilshofen (ou inverso)",
    ships: ["AmaMagna", "AmaLea", "AmaSonata"],
    bestTime: "Abril a outubro; dezembro para os mercados de Natal",
    priceFrom: "a partir de US$ 3.199 por pessoa (cabine com varanda)",
    intro:
      "É o clássico absoluto da navegação fluvial europeia. Sete noites entre Budapeste e a Baviera, atravessando o Wachau ao entardecer, com Viena, Bratislava e Salzburgo ao alcance de uma caminhada — e o navio como hotel flutuante que desfaz malas uma única vez.",
    highlights: [
      "Budapeste iluminada vista do deck ao navegar sob a Ponte das Correntes",
      "Vale do Wachau: vinhedos em terraços, Dürnstein e a abadia de Melk",
      "Concerto privativo de música clássica em Viena",
      "Passeios de bicicleta guiados a partir do navio, incluídos",
      "Salzburgo como excursão de dia inteiro desde Passau",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Budapeste, Hungria", descricao: "Embarque e navegação noturna pela cidade iluminada — o momento mais fotografado do Danúbio." },
      { dia: "Dia 2", porto: "Budapeste", descricao: "Bairro do Castelo, Mercado Central e as termas centenárias." },
      { dia: "Dia 3", porto: "Bratislava, Eslováquia", descricao: "Centro histórico compacto a pé, com degustação de vinhos locais." },
      { dia: "Dia 4", porto: "Viena, Áustria", descricao: "Ringstrasse, Schönbrunn e concerto exclusivo de Mozart e Strauss." },
      { dia: "Dia 5", porto: "Wachau · Dürnstein · Melk", descricao: "Navegação diurna pelo trecho mais bonito do rio e visita à abadia beneditina de Melk." },
      { dia: "Dia 6", porto: "Linz, Áustria", descricao: "Escolha entre Salzburgo, a região dos lagos ou Český Krumlov, na Chéquia." },
      { dia: "Dia 7", porto: "Passau, Alemanha", descricao: "Cidade barroca no encontro de três rios; órgão da catedral de São Estêvão." },
      { dia: "Dia 8", porto: "Vilshofen, Alemanha", descricao: "Desembarque após o café da manhã, com traslado a Munique ou Praga." },
    ],
    includes: [
      "Cabine com varanda dupla (French + externa)",
      "Todas as refeições a bordo, com jantar no Chef's Table",
      "Vinhos, cervejas e refrigerantes no almoço e jantar",
      "Excursões diárias em português ou inglês, com fones individuais",
      "Bicicletas e caminhadas guiadas incluídas",
      "Wi-Fi, gorjetas da tripulação e traslados do programa",
    ],
    faq: [
      { q: "Qual o melhor sentido de navegação?", a: "Budapeste → Vilshofen tende a ter navegação diurna mais bonita no Wachau, mas ambos os sentidos cobrem os mesmos portos. Escolhemos conforme suas conexões aéreas." },
      { q: "Preciso saber inglês?", a: "Não. As excursões têm áudio-guia individual e a Create Travel acompanha o grupo brasileiro quando há mínimo de participantes." },
      { q: "Dá para combinar com pré e pós-cruzeiro?", a: "Sim — montamos extensões em Praga, Munique, Viena ou nos Alpes austríacos, com hotéis e traslados privativos." },
    ],
    metaTitle: "Cruzeiro AmaWaterways no Danúbio — Budapeste a Vilshofen",
    metaDescription:
      "Roteiro de 7 noites no Danúbio com AmaWaterways: Budapeste, Viena, Wachau, Salzburgo e Passau. Reservas e curadoria Create Travel.",
    keywords: "cruzeiro danubio, amawaterways danubio, cruzeiro fluvial europa, budapeste viena navio",
  },
  {
    slug: "reno-castelos-alpes-suicos",
    name: "Reno: Castelos & Alpes Suíços",
    river: "Reno",
    region: "Europa",
    countries: ["Holanda", "Alemanha", "França", "Suíça"],
    duration: "7 noites",
    route: "Amsterdã → Basileia (ou inverso)",
    ships: ["AmaMora", "AmaKristina", "AmaCerto"],
    bestTime: "Abril a outubro; dezembro para mercados de Natal",
    priceFrom: "a partir de US$ 3.399 por pessoa",
    intro:
      "O Reno Romântico em câmera lenta: quarenta castelos em poucas horas de navegação, vinhedos verticais sobre o Loreley, a Alsácia de casas enxaimel e a chegada aos Alpes suíços por Basileia.",
    highlights: [
      "Desfiladeiro do Reno Médio, Patrimônio da UNESCO, navegado à luz do dia",
      "Colônia e sua catedral gótica a metros do atracadouro",
      "Estrasburgo e a Petite France alsaciana",
      "Floresta Negra: relógios de cuco, tortas e vilarejos",
      "Moinhos de Kinderdijk na saída da Holanda",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Amsterdã, Holanda", descricao: "Embarque e passeio de barco pelos canais." },
      { dia: "Dia 2", porto: "Kinderdijk / Colônia", descricao: "Moinhos históricos pela manhã, catedral de Colônia à noite." },
      { dia: "Dia 3", porto: "Koblenz, Alemanha", descricao: "Fortaleza de Ehrenbreitstein e início do Reno Romântico." },
      { dia: "Dia 4", porto: "Rüdesheim", descricao: "Vinhedos do Rheingau, teleférico e degustação de Riesling." },
      { dia: "Dia 5", porto: "Ludwigshafen · Heidelberg", descricao: "Castelo de Heidelberg e a cidade universitária mais romântica da Alemanha." },
      { dia: "Dia 6", porto: "Estrasburgo, França", descricao: "Catedral, Petite France e vilarejos da rota dos vinhos alsacianos." },
      { dia: "Dia 7", porto: "Breisach · Floresta Negra", descricao: "Excursão à Floresta Negra ou à Colmar medieval." },
      { dia: "Dia 8", porto: "Basileia, Suíça", descricao: "Desembarque; conexão para Zurique, Lucerna ou Paris." },
    ],
    includes: [
      "Cabine com varanda e serviço de mordomo nas categorias suíte",
      "Pensão completa com bebidas nas refeições",
      "Excursões diárias, bicicletas e caminhadas guiadas",
      "Wi-Fi, gorjetas e traslados do programa",
    ],
    faq: [
      { q: "O Reno é indicado para quem viaja pela primeira vez?", a: "Sim. É o roteiro mais equilibrado entre paisagem, cidades e distâncias curtas de navegação." },
      { q: "Vale fazer em dezembro?", a: "Muito. A versão Mercados de Natal cobre os mesmos portos com feiras natalinas de Colônia, Estrasburgo e Rüdesheim." },
    ],
    metaTitle: "Cruzeiro no Reno com AmaWaterways — Amsterdã a Basileia",
    metaDescription:
      "7 noites no Reno com AmaWaterways: Kinderdijk, Colônia, Reno Romântico, Heidelberg, Estrasburgo e Floresta Negra. Curadoria Create Travel.",
    keywords: "cruzeiro reno, amawaterways reno, cruzeiro fluvial amsterda basileia, reno romantico",
  },
  {
    slug: "douro-portugal-espanha",
    name: "Sabores de Portugal & Espanha — Douro",
    river: "Douro",
    region: "Europa",
    countries: ["Portugal", "Espanha"],
    duration: "7 noites a bordo (10 dias com Lisboa e Madri)",
    route: "Porto → Vega de Terrón → Porto",
    ships: ["AmaDouro", "AmaVida"],
    bestTime: "Abril a junho e setembro a outubro (vindima em setembro)",
    priceFrom: "a partir de US$ 3.899 por pessoa",
    intro:
      "O Douro é o mais cinematográfico dos rios europeus: vinhedos em socalcos que caem até a água, quintas centenárias, o vinho do Porto na origem e uma incursão por Salamanca do lado espanhol.",
    highlights: [
      "Navegação pelo Alto Douro Vinhateiro, Patrimônio da UNESCO",
      "Degustações em quintas históricas com almoço entre parreiras",
      "Salamanca, na Espanha, em excursão de dia inteiro",
      "Guimarães, berço de Portugal, e o santuário de Lamego",
      "Pré em Lisboa e pós em Madri incluídos no pacote completo",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Porto, Portugal", descricao: "Embarque; Ribeira e caves de vinho do Porto em Gaia." },
      { dia: "Dia 2", porto: "Régua", descricao: "Quinta histórica, prova de vinhos e almoço português." },
      { dia: "Dia 3", porto: "Pinhão", descricao: "Passeio de rabelo e os azulejos da estação ferroviária." },
      { dia: "Dia 4", porto: "Vega de Terrón, Espanha", descricao: "Dia inteiro em Salamanca, com a Plaza Mayor e a universidade." },
      { dia: "Dia 5", porto: "Barca d'Alva · Castelo Rodrigo", descricao: "Aldeia medieval e paisagem do Douro Superior." },
      { dia: "Dia 6", porto: "Lamego", descricao: "Santuário dos Remédios e degustação de espumantes." },
      { dia: "Dia 7", porto: "Porto · Guimarães", descricao: "Excursão a Guimarães e Braga." },
      { dia: "Dia 8", porto: "Porto", descricao: "Desembarque ou início da extensão a Madri." },
    ],
    includes: [
      "Cabine com varanda no AmaDouro ou AmaVida",
      "Todas as refeições, vinhos portugueses e degustações em quintas",
      "Excursões diárias, incluindo Salamanca e Guimarães",
      "Wi-Fi, gorjetas e traslados",
    ],
    faq: [
      { q: "Qual a melhor época para ver a vindima?", a: "Setembro e início de outubro, quando as quintas colhem e pisam as uvas — reserve com pelo menos 8 meses de antecedência." },
      { q: "O Douro é adequado para quem tem mobilidade reduzida?", a: "O navio é acessível, mas várias excursões envolvem ladeiras e escadas. Montamos alternativas mais leves quando necessário." },
    ],
    metaTitle: "Cruzeiro no Douro com AmaWaterways — Porto, Régua e Salamanca",
    metaDescription:
      "Cruzeiro fluvial no Douro: 7 noites entre Porto, Régua, Pinhão, Salamanca e Guimarães, com quintas e vindima. Create Travel.",
    keywords: "cruzeiro douro, amawaterways douro, cruzeiro fluvial portugal, porto salamanca navio",
  },
  {
    slug: "sena-paris-normandia",
    name: "Paris & Normandia — Sena",
    river: "Sena",
    region: "Europa",
    countries: ["França"],
    duration: "7 noites",
    route: "Paris → Normandia → Paris (circular)",
    ships: ["AmaLyra", "AmaDante"],
    bestTime: "Abril a outubro; maio e junho para jardins em flor",
    priceFrom: "a partir de US$ 3.499 por pessoa",
    intro:
      "Do coração de Paris às praias do Desembarque, o Sena costura arte, memória e gastronomia normanda. É o roteiro dos jardins de Monet em Giverny, das cidades de Ruão e Honfleur e de um capítulo histórico que emociona qualquer viajante.",
    highlights: [
      "Atracação no centro de Paris, com a Torre Eiffel na janela",
      "Giverny e os jardins de Claude Monet",
      "Praias do Dia D e o cemitério americano de Colleville",
      "Ruão medieval e a catedral pintada por Monet",
      "Honfleur, queijos e sidra normanda",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Paris, França", descricao: "Embarque e city tour panorâmico ao entardecer." },
      { dia: "Dia 2", porto: "Vernon · Giverny", descricao: "Casa e jardins de Monet; opção de bicicleta pelo vale." },
      { dia: "Dia 3", porto: "Le Pecq · Versalhes", descricao: "Palácio e jardins de Versalhes em visita guiada." },
      { dia: "Dia 4", porto: "Caudebec · Praias do Dia D", descricao: "Omaha Beach, Arromanches e o cemitério americano." },
      { dia: "Dia 5", porto: "Ruão", descricao: "Cidade de Joana d'Arc, mercado gastronômico e catedral gótica." },
      { dia: "Dia 6", porto: "Les Andelys", descricao: "Château Gaillard, de Ricardo Coração de Leão, sobre o rio." },
      { dia: "Dia 7", porto: "Paris", descricao: "Montmartre, Louvre ou passeio livre pela cidade." },
      { dia: "Dia 8", porto: "Paris", descricao: "Desembarque após o café da manhã." },
    ],
    includes: [
      "Cabine com varanda dupla",
      "Refeições completas com vinhos franceses",
      "Excursões diárias, incluindo Versalhes e Dia D",
      "Bicicletas a bordo, Wi-Fi e gorjetas",
    ],
    faq: [
      { q: "O navio fica no centro de Paris?", a: "Sim, a atracação é junto à Torre Eiffel, o que permite noites livres na cidade sem traslados." },
      { q: "As praias do Dia D exigem muita caminhada?", a: "É uma excursão longa, de dia inteiro, com trechos em terreno irregular. Há versão panorâmica mais leve." },
    ],
    metaTitle: "Cruzeiro no Sena com AmaWaterways — Paris, Giverny e Normandia",
    metaDescription:
      "7 noites no Sena com AmaWaterways: Paris, Versalhes, Giverny, praias do Dia D, Ruão e Honfleur. Reservas Create Travel.",
    keywords: "cruzeiro sena, amawaterways sena, paris normandia navio, cruzeiro fluvial franca",
  },
  {
    slug: "rodano-cores-da-provence",
    name: "Cores da Provence — Ródano & Saône",
    river: "Ródano",
    region: "Europa",
    countries: ["França"],
    duration: "7 noites",
    route: "Arles → Lyon (ou inverso)",
    ships: ["AmaKristina", "AmaCello"],
    bestTime: "Abril a outubro; junho e julho para a lavanda",
    priceFrom: "a partir de US$ 3.299 por pessoa",
    intro:
      "Provence e Borgonha em sete noites: mercados de especiarias, lavanda em julho, vinhos de Châteauneuf-du-Pape e Beaujolais, e Lyon, capital gastronômica da França, como ponto final.",
    highlights: [
      "Avignon e o Palácio dos Papas",
      "Arles e as paisagens que Van Gogh pintou",
      "Degustações em Châteauneuf-du-Pape e Beaujolais",
      "Mercados provençais de Viviers e Tournon",
      "Lyon: bouchons, Vieux Lyon e mercado Paul Bocuse",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Arles, França", descricao: "Embarque; anfiteatro romano e a Arles de Van Gogh." },
      { dia: "Dia 2", porto: "Avignon", descricao: "Palácio dos Papas e vinhos de Châteauneuf-du-Pape." },
      { dia: "Dia 3", porto: "Viviers", descricao: "Vilarejo medieval e mercado provençal; caminhada guiada." },
      { dia: "Dia 4", porto: "Tournon · Tain-l'Hermitage", descricao: "Vinhos do norte do Ródano e chocolate Valrhona." },
      { dia: "Dia 5", porto: "Vienne", descricao: "Ruínas romanas e passeio de bicicleta pelo vale." },
      { dia: "Dia 6", porto: "Mâcon · Beaujolais", descricao: "Rota dos vinhos e castelos da Borgonha do sul." },
      { dia: "Dia 7", porto: "Lyon", descricao: "Capital gastronômica: traboules, mercado e jantar autoral." },
      { dia: "Dia 8", porto: "Lyon", descricao: "Desembarque; conexão para Paris ou Genebra." },
    ],
    includes: [
      "Cabine com varanda dupla",
      "Refeições completas com vinhos do Ródano e da Borgonha",
      "Excursões diárias e experiências gastronômicas",
      "Bicicletas, Wi-Fi e gorjetas",
    ],
    faq: [
      { q: "Quando os campos de lavanda estão floridos?", a: "Do fim de junho a meados de julho. Nesse período incluímos excursão ao platô de Valensole ou a Sault." },
      { q: "É um roteiro muito gastronômico?", a: "Sim — é o mais focado em vinho e mesa entre os itinerários europeus da AmaWaterways." },
    ],
    metaTitle: "Cruzeiro no Ródano com AmaWaterways — Provence e Lyon",
    metaDescription:
      "Cruzeiro fluvial pela Provence: Arles, Avignon, Viviers, Beaujolais e Lyon em 7 noites com AmaWaterways. Curadoria Create Travel.",
    keywords: "cruzeiro rodano, amawaterways provence, cruzeiro fluvial franca lavanda, lyon avignon navio",
  },
  {
    slug: "tulipas-holanda-belgica",
    name: "Tempo das Tulipas — Holanda & Bélgica",
    river: "Reno, Mosa & Escalda",
    region: "Europa",
    countries: ["Holanda", "Bélgica"],
    duration: "7 noites",
    route: "Amsterdã → Amsterdã (circular)",
    ships: ["AmaSerena", "AmaPrima"],
    bestTime: "Fim de março a início de maio (pico das tulipas em abril)",
    priceFrom: "a partir de US$ 3.099 por pessoa",
    intro:
      "A primavera holandesa vista de dentro: campos de tulipas em faixas de cor, Keukenhof no auge, moinhos de Kinderdijk e as cidades belgas de chocolate, rendas e cerveja de abadia.",
    highlights: [
      "Jardins de Keukenhof, os maiores bulbos do mundo",
      "Kinderdijk e seus 19 moinhos do século XVIII",
      "Bruges e Antuérpia em excursões de dia inteiro",
      "Delft, Roterdã e a arquitetura contemporânea holandesa",
      "Passeios de bicicleta entre os campos floridos",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Amsterdã, Holanda", descricao: "Embarque e passeio pelos canais." },
      { dia: "Dia 2", porto: "Amsterdã · Keukenhof", descricao: "Dia nos jardins de tulipas e visita ao Rijksmuseum." },
      { dia: "Dia 3", porto: "Hoorn / Volendam", descricao: "Vilarejos do Zuiderzee, queijos e tamancos." },
      { dia: "Dia 4", porto: "Kinderdijk · Roterdã", descricao: "Moinhos históricos e arquitetura moderna." },
      { dia: "Dia 5", porto: "Veere · Middelburg", descricao: "Zelândia, diques e ciclismo costeiro." },
      { dia: "Dia 6", porto: "Antuérpia, Bélgica", descricao: "Diamantes, Rubens e cervejarias históricas." },
      { dia: "Dia 7", porto: "Ghent · Bruges", descricao: "Canais medievais de Bruges e chocolate artesanal." },
      { dia: "Dia 8", porto: "Amsterdã", descricao: "Desembarque após o café da manhã." },
    ],
    includes: [
      "Cabine com varanda dupla",
      "Refeições completas com bebidas nas refeições",
      "Ingresso e excursão a Keukenhof",
      "Bicicletas, Wi-Fi e gorjetas",
    ],
    faq: [
      { q: "As tulipas estarão floridas na minha data?", a: "O pico costuma ser de meados de abril; ajustamos a saída conforme a previsão de floração do ano." },
      { q: "Keukenhof está incluído?", a: "Sim, com ingresso e transporte na saída de primavera." },
    ],
    metaTitle: "Cruzeiro das Tulipas com AmaWaterways — Holanda e Bélgica",
    metaDescription:
      "Cruzeiro fluvial na primavera holandesa: Keukenhof, Kinderdijk, Bruges e Antuérpia em 7 noites com AmaWaterways. Create Travel.",
    keywords: "cruzeiro tulipas, amawaterways holanda, cruzeiro fluvial belgica, keukenhof navio",
  },
  {
    slug: "mercados-de-natal-europa",
    name: "Mercados de Natal do Danúbio",
    river: "Danúbio",
    region: "Europa",
    countries: ["Hungria", "Eslováquia", "Áustria", "Alemanha"],
    duration: "7 noites",
    route: "Vilshofen → Budapeste",
    ships: ["AmaSonata", "AmaBella"],
    bestTime: "Fim de novembro a 23 de dezembro",
    priceFrom: "a partir de US$ 2.999 por pessoa",
    intro:
      "Vinho quente, madeira entalhada, corais nas praças e neve fina sobre as barracas: o Danúbio no inverno troca vinhedos por luzes e transforma cada porto em uma feira natalina centenária.",
    highlights: [
      "Christkindlmarkt de Viena, na frente da Prefeitura",
      "Feiras de Passau, Regensburg e Linz",
      "Vörösmarty tér, o mercado mais famoso de Budapeste",
      "Festa de gala de Natal a bordo, em Vilshofen",
      "Chocolate quente, strudel e Glühwein em cada parada",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Vilshofen, Alemanha", descricao: "Embarque e festa bávara de boas-vindas no cais." },
      { dia: "Dia 2", porto: "Passau", descricao: "Cidade barroca e primeira feira natalina da viagem." },
      { dia: "Dia 3", porto: "Linz, Áustria", descricao: "Mercado da praça principal ou excursão a Salzburgo natalina." },
      { dia: "Dia 4", porto: "Weissenkirchen · Melk", descricao: "Abadia de Melk e vilarejos do Wachau no inverno." },
      { dia: "Dia 5", porto: "Viena", descricao: "Christkindlmarkt, Ringstrasse e concerto clássico." },
      { dia: "Dia 6", porto: "Bratislava, Eslováquia", descricao: "Feira do centro histórico, com comidas típicas." },
      { dia: "Dia 7", porto: "Budapeste, Hungria", descricao: "Mercados de Vörösmarty e Basílica; termas ao fim do dia." },
      { dia: "Dia 8", porto: "Budapeste", descricao: "Desembarque após o café da manhã." },
    ],
    includes: [
      "Cabine com varanda dupla",
      "Refeições completas, com ceia festiva de Natal",
      "Excursões a todas as feiras natalinas do roteiro",
      "Wi-Fi, gorjetas e traslados do programa",
    ],
    faq: [
      { q: "Faz muito frio?", a: "Sim, entre -2 °C e 8 °C. Enviamos lista de bagagem com camadas técnicas e calçado impermeável." },
      { q: "Vale levar crianças?", a: "É um dos roteiros mais encantadores para famílias, sobretudo em cabines conectadas do AmaMagna." },
    ],
    metaTitle: "Cruzeiro Mercados de Natal no Danúbio — AmaWaterways",
    metaDescription:
      "Feiras natalinas de Viena, Passau, Linz, Bratislava e Budapeste em cruzeiro fluvial de 7 noites com AmaWaterways. Create Travel.",
    keywords: "cruzeiro mercados de natal, amawaterways natal, cruzeiro fluvial dezembro europa",
  },
  {
    slug: "mekong-vietna-camboja",
    name: "Riquezas do Mekong — Vietnã & Camboja",
    river: "Mekong",
    region: "Ásia",
    countries: ["Vietnã", "Camboja"],
    duration: "7 noites a bordo (14 dias com Hanói, Halong e Angkor)",
    route: "Ho Chi Minh → Siem Reap (ou inverso)",
    ships: ["AmaDara", "AmaSiem Reap"],
    bestTime: "Agosto a abril (águas altas de agosto a novembro)",
    priceFrom: "a partir de US$ 4.499 por pessoa",
    intro:
      "O Mekong é vida em movimento: mercados flutuantes ao amanhecer, aldeias de palafitas, monges em túnicas cor de açafrão e, ao fim da navegação, os templos de Angkor emergindo da floresta.",
    highlights: [
      "Mercados flutuantes do delta do Mekong em sampan",
      "Phnom Penh, o Palácio Real e a memória de Tuol Sleng",
      "Aldeias de artesãos de seda e prata em Koh Chen",
      "Angkor Wat ao nascer do sol, no pós-cruzeiro",
      "Extensão a Hanói e à baía de Halong",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Ho Chi Minh, Vietnã", descricao: "Embarque após noites em terra; mercado de Ben Thanh." },
      { dia: "Dia 2", porto: "Cai Be · Sa Dec", descricao: "Mercado flutuante e casas coloniais do delta." },
      { dia: "Dia 3", porto: "Tan Chau", descricao: "Vila de tecelagem e passeio de sampan por canais estreitos." },
      { dia: "Dia 4", porto: "Fronteira · Phnom Penh, Camboja", descricao: "Navegação para o Camboja e chegada à capital." },
      { dia: "Dia 5", porto: "Phnom Penh", descricao: "Palácio Real, Pagode de Prata e mercado russo." },
      { dia: "Dia 6", porto: "Koh Chen · Angkor Ban", descricao: "Aldeias tradicionais preservadas e escola local." },
      { dia: "Dia 7", porto: "Kampong Cham · Tonlé Sap", descricao: "Templos khmer e navegação pelo grande lago." },
      { dia: "Dia 8", porto: "Siem Reap", descricao: "Desembarque e início da estada em Angkor." },
    ],
    includes: [
      "Cabine com varanda no AmaDara ou AmaSiem Reap",
      "Todas as refeições, bebidas e gorjetas a bordo",
      "Excursões diárias com guias locais e sampans",
      "Vistos e traslados coordenados pela Create Travel",
    ],
    faq: [
      { q: "Quando o rio está mais cheio?", a: "De agosto a novembro, quando as monções elevam o nível e permitem atracações mais próximas das aldeias." },
      { q: "Precisa de vacinas?", a: "Febre amarela não é exigida vindo do Brasil em todos os casos; orientamos caso a caso com antecedência." },
    ],
    metaTitle: "Cruzeiro no Mekong com AmaWaterways — Vietnã e Camboja",
    metaDescription:
      "Cruzeiro fluvial no Mekong: delta vietnamita, Phnom Penh, Tonlé Sap e Angkor Wat em roteiro AmaWaterways. Create Travel.",
    keywords: "cruzeiro mekong, amawaterways mekong, cruzeiro vietna camboja, angkor navio",
  },
  {
    slug: "nilo-egito",
    name: "Segredos do Egito & do Nilo",
    river: "Nilo",
    region: "África",
    countries: ["Egito"],
    duration: "7 noites a bordo (12 dias com Cairo)",
    route: "Luxor → Assuã → Luxor",
    ships: ["AmaLilia", "AmaDahlia"],
    bestTime: "Outubro a abril",
    priceFrom: "a partir de US$ 5.199 por pessoa",
    intro:
      "Cinco mil anos passando devagar pela janela. Entre Luxor e Assuã, o Nilo entrega Karnak, o Vale dos Reis, Edfu, Kom Ombo e Abu Simbel — com o conforto de um navio pensado para o calor do deserto.",
    highlights: [
      "Karnak e Luxor iluminados ao entardecer",
      "Vale dos Reis e templo de Hatshepsut",
      "Templos de Edfu e Kom Ombo às margens do rio",
      "Abu Simbel e a ilha de Filae, em Assuã",
      "Pirâmides de Gizé e Museu Egípcio no pré-cruzeiro no Cairo",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Luxor, Egito", descricao: "Embarque após voo do Cairo; templo de Luxor à noite." },
      { dia: "Dia 2", porto: "Luxor", descricao: "Karnak pela manhã e Vale dos Reis na margem oeste." },
      { dia: "Dia 3", porto: "Esna · Edfu", descricao: "Navegação e templo de Hórus em charrete." },
      { dia: "Dia 4", porto: "Kom Ombo", descricao: "Templo duplo e museu dos crocodilos." },
      { dia: "Dia 5", porto: "Assuã", descricao: "Ilha de Filae, jardim botânico e vila núbia." },
      { dia: "Dia 6", porto: "Assuã · Abu Simbel", descricao: "Excursão aérea a Abu Simbel (opcional incluída no pacote)." },
      { dia: "Dia 7", porto: "Retorno a Luxor", descricao: "Navegação e templo de Dendera." },
      { dia: "Dia 8", porto: "Luxor", descricao: "Desembarque e voo ao Cairo." },
    ],
    includes: [
      "Cabine com varanda em navio exclusivo AmaWaterways",
      "Pensão completa, bebidas e gorjetas a bordo",
      "Egiptólogo acompanhando todas as visitas",
      "Voos internos Cairo–Luxor–Cairo e hotéis no Cairo",
    ],
    faq: [
      { q: "É seguro viajar ao Egito?", a: "Os roteiros turísticos do Nilo operam com segurança e escolta padrão; acompanhamos boletins consulares antes de cada saída." },
      { q: "Abu Simbel está incluído?", a: "Sim, no pacote completo Create Travel, com voo doméstico desde Assuã." },
    ],
    metaTitle: "Cruzeiro no Nilo com AmaWaterways — Luxor, Assuã e Abu Simbel",
    metaDescription:
      "Cruzeiro fluvial no Nilo com AmaWaterways: Karnak, Vale dos Reis, Edfu, Kom Ombo, Filae e Abu Simbel. Curadoria Create Travel.",
    keywords: "cruzeiro nilo, amawaterways egito, cruzeiro fluvial egito, luxor assua navio",
  },
  {
    slug: "magdalena-colombia",
    name: "Descobrindo o Rio Magdalena — Colômbia",
    river: "Magdalena",
    region: "América do Sul",
    countries: ["Colômbia"],
    duration: "7 noites a bordo (11 dias com Cartagena e Bogotá)",
    route: "Barranquilla → Magdalena → Cartagena",
    ships: ["AmaMagdalena", "AmaMelodia"],
    bestTime: "Novembro a abril",
    priceFrom: "a partir de US$ 4.999 por pessoa",
    intro:
      "O rio de Gabriel García Márquez, aberto ao turismo fluvial só recentemente. Vilarejos ribeirinhos que quase nunca recebem visitantes, aves em profusão, cumbia ao vivo no deck e Cartagena das Índias no encerramento.",
    highlights: [
      "Aldeias do Magdalena com recepção comunitária",
      "Mompox, cidade colonial patrimônio da UNESCO",
      "Observação de aves e manatis nas várzeas",
      "Cumbia, vallenato e cozinha caribenha a bordo",
      "Cartagena murada e Bogotá no pré/pós",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Barranquilla, Colômbia", descricao: "Embarque; cultura caribenha e carnaval em museu." },
      { dia: "Dia 2", porto: "Calamar", descricao: "Vila ribeirinha e vida cotidiana do rio." },
      { dia: "Dia 3", porto: "Mompox", descricao: "Ourivesaria em filigrana e centro colonial preservado." },
      { dia: "Dia 4", porto: "Magangué", descricao: "Mercado local e navegação por braços do rio." },
      { dia: "Dia 5", porto: "Ciénaga de Zapatosa", descricao: "Safári fluvial de aves em pequenas embarcações." },
      { dia: "Dia 6", porto: "El Banco", descricao: "Berço da cumbia; apresentação musical em terra." },
      { dia: "Dia 7", porto: "Retorno ao Caribe", descricao: "Navegação e noite de gala a bordo." },
      { dia: "Dia 8", porto: "Cartagena", descricao: "Desembarque e estada na cidade murada." },
    ],
    includes: [
      "Cabine com varanda em navio novo da frota",
      "Pensão completa, bebidas e gorjetas",
      "Excursões comunitárias com guias colombianos",
      "Voos internos e hotéis em Cartagena e Bogotá no pacote completo",
    ],
    faq: [
      { q: "É um roteiro para quem já viajou muito?", a: "Sim — é o mais inédito da frota, ideal para quem já fez os clássicos europeus." },
      { q: "Qual o nível de conforto em terra?", a: "As visitas são a comunidades simples; o conforto está a bordo. Faz parte da autenticidade do roteiro." },
    ],
    metaTitle: "Cruzeiro no Rio Magdalena — Colômbia com AmaWaterways",
    metaDescription:
      "Cruzeiro fluvial pelo Magdalena, na Colômbia: Mompox, aldeias ribeirinhas, aves, cumbia e Cartagena. Curadoria Create Travel.",
    keywords: "cruzeiro magdalena, amawaterways colombia, cruzeiro fluvial america do sul, mompox cartagena",
  },
  {
    slug: "nilo-2027-classico",
    name: "Nilo 2027 · Clássico Luxor–Assuã",
    river: "Nilo",
    region: "África",
    countries: ["Egito"],
    duration: "7 noites a bordo (10 dias com Cairo)",
    route: "Luxor → Edfu → Kom Ombo → Assuã → Luxor",
    ships: ["AmaLilia", "AmaDahlia"],
    bestTime: "Saídas 2027: janeiro a abril e outubro a dezembro",
    priceFrom: "a partir de US$ 5.390 por pessoa",
    intro:
      "A rota mais pedida do Egito para 2027: sete noites entre Luxor e Assuã com todos os templos clássicos, Vale dos Reis, Abu Simbel e balão ao amanhecer sobre a margem oeste — em navios de apenas 72 hóspedes, com varanda em todas as cabines.",
    highlights: [
      "Karnak e Luxor com visita ao entardecer, sem multidões",
      "Vale dos Reis, Hatshepsut e Colossos de Mêmnon",
      "Balão de ar quente ao amanhecer sobre Luxor (opcional)",
      "Edfu em charrete e o templo duplo de Kom Ombo",
      "Abu Simbel e a ilha de Filae, em Assuã",
      "Pré-cruzeiro no Cairo: Gizé e o Grande Museu Egípcio",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Luxor, Egito", descricao: "Embarque após o voo do Cairo; templo de Luxor iluminado à noite." },
      { dia: "Dia 2", porto: "Luxor", descricao: "Karnak pela manhã; margem oeste com Vale dos Reis e Hatshepsut." },
      { dia: "Dia 3", porto: "Esna · Edfu", descricao: "Navegação tranquila e templo de Hórus, chegando de charrete." },
      { dia: "Dia 4", porto: "Kom Ombo", descricao: "Templo duplo de Sobek e Haroeris e museu dos crocodilos." },
      { dia: "Dia 5", porto: "Assuã", descricao: "Ilha de Filae, represa alta e chá em vila núbia às margens do rio." },
      { dia: "Dia 6", porto: "Assuã · Abu Simbel", descricao: "Excursão a Abu Simbel (voo ou rodoviário) e tarde livre a bordo." },
      { dia: "Dia 7", porto: "Navegação para Luxor", descricao: "Dia de rio: deck, piscina e paradas em vilarejos ribeirinhos." },
      { dia: "Dia 8", porto: "Luxor", descricao: "Desembarque após o café, com traslado ao aeroporto ou extensão no Cairo e Mar Vermelho." },
    ],
    includes: [
      "Cabine com varanda em navio de 72 hóspedes",
      "Todas as refeições a bordo, bebidas nas refeições e gorjetas da tripulação",
      "Egiptólogo acompanhante e todas as entradas dos templos do programa",
      "Voo doméstico Cairo–Luxor e traslados do programa",
      "Assistência Create Travel em português antes e durante a viagem",
    ],
    faq: [
      { q: "Quais são as melhores datas em 2027?", a: "De janeiro a abril e de outubro a dezembro, quando o calor é confortável para visitar os templos. Fevereiro e março esgotam primeiro." },
      { q: "O balão sobre Luxor está incluído?", a: "Não — é opcional e reservamos antecipadamente, porque as vagas ao amanhecer são limitadas." },
      { q: "Abu Simbel é de avião ou de van?", a: "Oferecemos as duas opções. O voo economiza cerca de 6 horas de estrada e é o que mais recomendamos." },
      { q: "É seguro viajar ao Egito?", a: "Sim, nos roteiros turísticos. Trabalhamos com operadores locais licenciados, guias fixos e traslados privativos em todo o percurso." },
    ],
    metaTitle: "Cruzeiro no Nilo 2027 — Luxor, Assuã e Abu Simbel | Create Travel",
    metaDescription:
      "Rotas de cruzeiro no Rio Nilo em 2027: 7 noites entre Luxor e Assuã com Karnak, Vale dos Reis, Edfu, Kom Ombo e Abu Simbel. Curadoria Create Travel.",
    keywords: "cruzeiro nilo 2027, cruzeiro egito 2027, nilo luxor assua, abu simbel cruzeiro, amawaterways nilo",
  },
  {
    slug: "nilo-2027-grande-egito",
    name: "Nilo 2027 · Grande Egito (11 noites)",
    river: "Nilo",
    region: "África",
    countries: ["Egito"],
    duration: "11 noites (Cairo + 7 noites de rio + Alexandria)",
    route: "Cairo → Luxor → Assuã → Luxor → Alexandria",
    ships: ["AmaLilia", "AmaDahlia"],
    bestTime: "Saídas 2027: fevereiro, março, outubro e novembro",
    priceFrom: "a partir de US$ 7.480 por pessoa",
    intro:
      "Para quem quer o Egito inteiro em uma viagem só: Cairo com o Grande Museu Egípcio e Sakkara, os sete dias de rio entre Luxor e Assuã, e o fecho mediterrâneo em Alexandria — a biblioteca, as catacumbas e o mar.",
    highlights: [
      "Grande Museu Egípcio e o tesouro completo de Tutancâmon",
      "Sakkara, Memphis e as pirâmides de Gizé com egiptólogo",
      "Sete noites de navegação com todos os templos clássicos",
      "Abu Simbel ao amanhecer",
      "Alexandria: Bibliotheca Alexandrina, Qaitbay e catacumbas de Kom El Shoqafa",
    ],
    itinerary: [
      { dia: "Dias 1–3", porto: "Cairo", descricao: "Gizé, Esfinge, Sakkara, Memphis, Grande Museu Egípcio e o bazar Khan el-Khalili." },
      { dia: "Dia 4", porto: "Luxor", descricao: "Voo doméstico, embarque e templo de Luxor à noite." },
      { dia: "Dia 5", porto: "Luxor", descricao: "Karnak e margem oeste: Vale dos Reis, Hatshepsut e Medinet Habu." },
      { dia: "Dia 6", porto: "Esna · Edfu", descricao: "Eclusa de Esna e templo de Hórus." },
      { dia: "Dia 7", porto: "Kom Ombo", descricao: "Templo duplo e navegação com paisagem núbia." },
      { dia: "Dia 8", porto: "Assuã", descricao: "Filae, obelisco inacabado e passeio de faluca ao pôr do sol." },
      { dia: "Dia 9", porto: "Abu Simbel", descricao: "Os colossos de Ramsés II ao amanhecer; retorno e tarde a bordo." },
      { dia: "Dia 10", porto: "Navegação para Luxor", descricao: "Dia de rio, com Dendera ou Abydos como excursão opcional." },
      { dia: "Dias 11–12", porto: "Alexandria", descricao: "Desembarque, traslado ao Mediterrâneo, biblioteca, forte Qaitbay e catacumbas antes do voo de volta." },
    ],
    includes: [
      "3 noites de hotel 5★ no Cairo e 1 noite em Alexandria",
      "7 noites em cabine com varanda no Nilo, pensão completa",
      "Voos domésticos Cairo–Luxor e Luxor–Cairo",
      "Egiptólogo em todas as visitas, entradas e gorjetas",
      "Traslados privativos e suporte Create Travel em português",
    ],
    faq: [
      { q: "Vale incluir Alexandria?", a: "Sim, se você tem 12 dias. É o Egito greco-romano e mediterrâneo, um contraponto completo aos templos faraônicos." },
      { q: "Dá para combinar com Mar Vermelho ou Jordânia?", a: "Sim. Montamos extensões em Hurghada, El Gouna ou Petra e Wadi Rum na Jordânia após o desembarque." },
      { q: "Qual a bagagem ideal?", a: "Roupas leves de algodão, linho, chapéu, protetor solar alto e um agasalho fino para as noites de deserto." },
    ],
    metaTitle: "Egito completo 2027 — Cairo, cruzeiro no Nilo e Alexandria",
    metaDescription:
      "Roteiro Egito 2027 com 11 noites: Cairo e Grande Museu Egípcio, 7 noites de cruzeiro no Nilo, Abu Simbel e Alexandria. Create Travel.",
    keywords: "egito 2027, cruzeiro nilo 11 noites, cairo alexandria nilo, grande museu egipcio roteiro",
  },
  {
    slug: "grecia-2027-cicladas",
    name: "Grécia 2027 · Cíclades Essenciais",
    river: "Mar Egeu",
    region: "Grécia & Mediterrâneo",
    countries: ["Grécia"],
    duration: "7 noites",
    route: "Atenas (Pireu) → Mykonos → Paros → Naxos → Santorini → Atenas",
    ships: ["Iate de pequeno porte (36 a 90 hóspedes)"],
    bestTime: "Saídas 2027: abril a outubro; junho e setembro são os melhores meses",
    priceFrom: "a partir de € 3.290 por pessoa",
    intro:
      "As Cíclades como devem ser vistas: por mar, em embarcação pequena que atraca em portos onde os grandes navios não entram. Sete noites de água turquesa, vilarejos brancos, banhos em enseadas fechadas e a caldeira de Santorini ao pôr do sol, sem fila.",
    highlights: [
      "Cabo Sounion e o templo de Poseidon na saída de Atenas",
      "Mykonos: Little Venice, os moinhos e a vizinha Delos, berço de Apolo",
      "Paros e Antiparos: vilas de mármore e enseadas para nadar",
      "Naxos: o Portara, aldeias de montanha e queijos da ilha",
      "Santorini: caldeira, Oia ao pôr do sol e vinhos de Assyrtiko",
      "Banhos de mar diários em paradas fora dos roteiros de massa",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Atenas · Pireu", descricao: "Embarque no fim da tarde; jantar a bordo e navegação noturna pelo Egeu." },
      { dia: "Dia 2", porto: "Mykonos", descricao: "Manhã em Delos com arqueólogo; tarde e noite na Chora de Mykonos." },
      { dia: "Dia 3", porto: "Paros · Antiparos", descricao: "Naoussa, vilarejos de mármore e parada para banho em enseada turquesa." },
      { dia: "Dia 4", porto: "Naxos", descricao: "Portara ao amanhecer, aldeias de Halki e Apiranthos, degustação de queijos e kitron." },
      { dia: "Dia 5", porto: "Santorini", descricao: "Akrotiri, vinícolas na borda da caldeira e Oia no fim do dia." },
      { dia: "Dia 6", porto: "Santorini · Thirassia", descricao: "Manhã de mergulho nas fontes vulcânicas e almoço de peixe em Thirassia." },
      { dia: "Dia 7", porto: "Kea ou Syros", descricao: "Ilha discreta, sem turismo de massa, com caminhada e último banho de mar." },
      { dia: "Dia 8", porto: "Atenas · Pireu", descricao: "Desembarque após o café; extensão em Atenas ou conexão internacional." },
    ],
    includes: [
      "Cabine externa com janela panorâmica ou varanda",
      "Pensão completa a bordo com ênfase em cozinha grega de mercado",
      "Vinhos e cervejas gregas nas refeições",
      "Excursões guiadas em cada ilha e entradas de Delos e Akrotiri",
      "Equipamento de banho e mergulho livre nas paradas de mar",
      "Traslados do programa e gorjetas da tripulação",
    ],
    faq: [
      { q: "Qual a melhor época para a Grécia em 2027?", a: "Junho e setembro: mar quente, dias longos e menos gente que em julho e agosto. Abril, maio e outubro são ótimos para caminhar, com mar mais frio." },
      { q: "O meltemi atrapalha a navegação?", a: "O vento do Egeu sopra mais forte em julho e agosto. Em embarcações pequenas o comandante ajusta a rota; por isso preferimos junho e setembro." },
      { q: "Preciso de muita mobilidade?", a: "Ajuda. Há escadarias em Santorini e Mykonos, mas todas as caminhadas têm alternativa de transporte." },
      { q: "Dá para combinar com o Peloponeso ou Creta?", a: "Sim — montamos pré em Atenas com Acrópole e Museu, e pós em Creta, Nafplio ou Meteora com carro e guia privativos." },
    ],
    metaTitle: "Cruzeiro na Grécia 2027 — Cíclades, Mykonos e Santorini",
    metaDescription:
      "Cruzeiro pelas ilhas gregas em 2027: 7 noites de Atenas a Mykonos, Paros, Naxos e Santorini em iate de pequeno porte. Roteiro dia a dia Create Travel.",
    keywords: "cruzeiro grecia 2027, ilhas gregas cruzeiro, cruzeiro cicladas, santorini mykonos navio, cruzeiro egeu 2027",
  },
  {
    slug: "grecia-2027-egeu-turquia",
    name: "Grécia 2027 · Egeu, Dodecaneso & Turquia",
    river: "Mar Egeu",
    region: "Grécia & Mediterrâneo",
    countries: ["Grécia", "Turquia"],
    duration: "7 noites",
    route: "Atenas (Pireu) → Rodes → Patmos → Kusadasi/Éfeso → Creta → Atenas",
    ships: ["Iate de pequeno porte (36 a 90 hóspedes)"],
    bestTime: "Saídas 2027: maio a outubro",
    priceFrom: "a partir de € 3.590 por pessoa",
    intro:
      "O Egeu histórico em sete noites: a cidade medieval dos Cavaleiros em Rodes, a caverna do Apocalipse em Patmos, Éfeso na costa turca e o palácio minoico de Cnossos em Creta. Um roteiro para quem quer arqueologia de manhã e mar à tarde.",
    highlights: [
      "Rodes: cidade medieval murada, Patrimônio da UNESCO, e Lindos",
      "Patmos: mosteiro de São João e a gruta do Apocalipse",
      "Éfeso, na Turquia — uma das cidades antigas mais bem preservadas do mundo",
      "Creta: Cnossos, Chania veneziana e cozinha cretense",
      "Symi ou Milos como parada surpresa, conforme o vento",
    ],
    itinerary: [
      { dia: "Dia 1", porto: "Atenas · Pireu", descricao: "Embarque, coquetel de boas-vindas e navegação para o Dodecaneso." },
      { dia: "Dia 2", porto: "Rodes", descricao: "Cidade medieval, Palácio dos Grandes Mestres e a acrópole de Lindos." },
      { dia: "Dia 3", porto: "Symi", descricao: "O porto neoclássico mais fotogênico da Grécia e banho na baía de São Jorge." },
      { dia: "Dia 4", porto: "Patmos", descricao: "Mosteiro fortificado, gruta do Apocalipse e a Chora branca no alto da ilha." },
      { dia: "Dia 5", porto: "Kusadasi, Turquia · Éfeso", descricao: "Biblioteca de Celso, teatro romano e a Casa da Virgem Maria." },
      { dia: "Dia 6", porto: "Creta · Heraklion", descricao: "Palácio de Cnossos, museu arqueológico e tarde em Chania." },
      { dia: "Dia 7", porto: "Milos ou Santorini", descricao: "Sarakiniko e as enseadas vulcânicas, com último banho de mar." },
      { dia: "Dia 8", porto: "Atenas · Pireu", descricao: "Desembarque após o café da manhã, com traslado ao hotel ou aeroporto." },
    ],
    includes: [
      "Cabine externa com janela panorâmica ou varanda",
      "Pensão completa e bebidas gregas nas refeições",
      "Excursões guiadas com arqueólogo em Éfeso, Cnossos e Rodes",
      "Taxas portuárias, formalidades de entrada na Turquia e gorjetas",
      "Traslados do programa e suporte Create Travel em português",
    ],
    faq: [
      { q: "Preciso de visto para a Turquia?", a: "Brasileiros estão isentos para turismo em estadas curtas. Confirmamos as regras vigentes na sua data de embarque." },
      { q: "Este roteiro tem mais história ou mais praia?", a: "É o mais histórico dos dois. Se você quer sol e vilas brancas, o roteiro das Cíclades é o indicado." },
      { q: "Há saídas com acompanhante brasileiro?", a: "Sim, em datas selecionadas de 2027 montamos grupo Create Travel com anfitrião brasileiro a bordo." },
    ],
    metaTitle: "Cruzeiro Grécia e Turquia 2027 — Rodes, Patmos, Éfeso e Creta",
    metaDescription:
      "Cruzeiro de 7 noites pelo Egeu em 2027: Rodes, Symi, Patmos, Éfeso na Turquia e Creta com Cnossos. Roteiro dia a dia e reserva Create Travel.",
    keywords: "cruzeiro grecia turquia 2027, cruzeiro dodecaneso, efeso cruzeiro, creta cnossos cruzeiro, cruzeiro egeu",
  },
];

export const getRiverCruise = (slug: string): RiverCruise | undefined =>
  riverCruises.find((c) => c.slug === slug);

export const CRUISE_REGIONS = [
  "Europa",
  "Grécia & Mediterrâneo",
  "Ásia",
  "África",
  "América do Sul",
] as const;

// Rotas marítimas usam "Mar ..." como via navegável; fluviais recebem o prefixo "Rio".
export const waterwayLabel = (river: string): string =>
  /^(Mar|Oceano|Ilhas)\b/.test(river) ? river : `Rio ${river}`;
