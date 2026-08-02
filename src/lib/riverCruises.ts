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
];

export const getRiverCruise = (slug: string): RiverCruise | undefined =>
  riverCruises.find((c) => c.slug === slug);

export const CRUISE_REGIONS = ["Europa", "Ásia", "África", "América do Sul"] as const;
