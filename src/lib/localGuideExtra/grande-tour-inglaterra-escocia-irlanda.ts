import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const grandeTourInglaterraEscociaIrlanda: LocalGuideGroup = {
  slug: "grande-tour-inglaterra-escocia-irlanda",
  code: "UK",
  title: "Grande Tour da Inglaterra, Escócia e Irlanda",
  subtitle:
    "Londres · Windsor · Cambridge · York · Durham · Alnwick · Edimburgo · Glasgow · Belfast · Calçada do Gigante · Galway · Cork · Kilkenny · Dublin",
  intro:
    "Catorze dias pelas Ilhas Britânicas em sua forma mais completa: da elegância imperial de Londres aos penhascos basálticos da Calçada do Gigante, das Terras Altas escocesas ao verde intenso da Irlanda. Castelos, catedrais, lagos lendários e cidades onde a história se mistura ao cotidiano compõem um roteiro que atravessa quatro nações em um só fôlego, sempre com guia local em espanhol.",
  highlights: [
    "Castelo de Windsor, residência oficial da família real britânica",
    "Castelo de Edimburgo e a Royal Mile sobre a colina de Castle Hill",
    "Lago Ness e as ruínas do Castelo de Urquhart nas Terras Altas escocesas",
    "Calçada do Gigante, Patrimônio da Humanidade na Irlanda do Norte",
    "Penhascos de Moher, sobre o oceano Atlântico",
    "Fábrica de cerveja mais famosa do mundo, em Dublin",
  ],
  category: "Primeira",
  days: 14,
  nights: 13,
  priceEur: 4850,
  singleSupplementEur: 1800,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["Inglaterra", "Escócia", "Irlanda do Norte", "Irlanda"],
  area: "Europa",
  hotels: [
    { city: "Londres", hotel: "Riu Plaza Victoria" },
    { city: "York", hotel: "Indigo" },
    { city: "Edimburgo", hotel: "Radisson Blu Edinburgh" },
    { city: "Glasgow", hotel: "Voco Grand Central" },
    { city: "Belfast", hotel: "Titanic / Belfast AC Hotel" },
    { city: "Galway", hotel: "The Galmont / Radisson Red" },
    { city: "Cork", hotel: "The River Lee" },
    { city: "Dublin", hotel: "Riu Plaza The Gresham" },
  ],
  departures: ["2027-05-07", "2027-06-04", "2027-07-16", "2027-09-03", "2027-09-24"],
  itinerary: [
    {
      day: 1,
      route: "LONDRES",
      text: "Chegada a Londres e acomodação (o traslado ao hotel não está incluído). O guia estará no hotel a partir das 19h.",
    },
    {
      day: 2,
      route: "LONDRES",
      text: "Café da manhã no hotel e visita panorâmica da vibrante e cosmopolita cidade de Londres, percorrendo pontos emblemáticos como o Big Ben, a Abadia de Westminster, o London Eye e o Palácio de Buckingham, onde poderemos ver a famosa troca da guarda (sempre que estiver em funcionamento). Continuaremos a visita pelos bairros de Westminster, Kensington, Mayfair e West End, conhecida área de teatros e restaurantes, assim como pelas praças Trafalgar Square e Piccadilly Circus. Tarde livre para aproveitar a cidade. Hospedagem em Londres.",
    },
    {
      day: 3,
      route: "LONDRES",
      text: "Café da manhã e saída em direção ao Castelo de Windsor, um dos monumentos mais célebres do Reino Unido e uma das residências oficiais da família real. Situado no condado de Berkshire, no vale do Tâmisa, oferece uma das paisagens mais belas dos arredores de Londres. Destacam-se a impressionante Capela de São Jorge, local de sepultamento de Henrique VIII, e a exquisitamente ornamentada Casa de Bonecas da rainha Mary. Retorno ao centro da cidade. Tempo livre. Hospedagem.",
    },
    {
      day: 4,
      route: "LONDRES / CAMBRIDGE / YORK",
      text: "Café da manhã no hotel e saída em direção ao norte da Inglaterra. Parada na encantadora cidade universitária de Cambridge, onde teremos tempo para passear por suas históricas ruas e descobrir seus famosos colleges universitários, onde estudaram personalidades como Isaac Newton ou Charles Darwin. Continuação até a histórica cidade de York, fundada pelos romanos, ligada aos vikings e considerada uma das mais belas do Reino Unido. Realizaremos uma visita a pé por suas estreitas e fotogênicas ruas do centro histórico. Hospedagem.",
    },
    {
      day: 5,
      route: "YORK / EDIMBURGO",
      text: "Café da manhã e saída em direção a Durham, bela cidade medieval situada sobre uma colina rochosa às margens do rio Wear. Tempo disponível para conhecer sua impressionante catedral, declarada Patrimônio da Humanidade e um dos centros religiosos mais importantes da Inglaterra, assim como seu encantador centro histórico, onde se encontra a terceira universidade mais antiga do Reino Unido. Continuação até Alnwick, pitoresca localidade medieval conhecida por seu castelo, cenário de cenas da saga Harry Potter. Seguimos até Edimburgo, capital da Escócia. Hospedagem.",
    },
    {
      day: 6,
      route: "EDIMBURGO",
      text: "Café da manhã e visita da cidade, percorrendo seus principais pontos de interesse como o Palácio de Holyrood, a Catedral de St. Giles, a Royal Mile e a Galeria Nacional. Em seguida, visitaremos o interior do Castelo de Edimburgo, que se ergue imponente sobre a colina de Castle Hill, oferecendo magníficas vistas da cidade. Para finalizar, desfrutaremos de «The Scotch Whisky Experience», onde, durante uma hora, conheceremos o processo e a cultura do whisky escocês. Tarde livre e hospedagem.",
    },
    {
      day: 7,
      route: "EDIMBURGO / GLASGOW",
      text: "Café da manhã no hotel e saída em direção a Glasgow. No trajeto passaremos por Inverness, capital das Terras Altas escocesas e a cidade mais ao norte do Reino Unido. Continuação até o misterioso Lago Ness, onde realizaremos um passeio de barco por suas águas e visitaremos as ruínas do Castelo de Urquhart. Seguiremos por Fort Augustus e Fort William, aos pés do Ben Nevis, a montanha mais alta do Reino Unido. Prosseguiremos pelo vale de Glen Coe, um dos cenários mais espetaculares da Escócia, e pela região do lago Lomond até chegar a Glasgow. Hospedagem.",
    },
    {
      day: 8,
      route: "GLASGOW / BELFAST",
      text: "Café da manhã no hotel e visita da cidade de Glasgow. Percorreremos o centro da capital financeira da Escócia, apreciando a influência de arquitetos como Charles Mackintosh. Veremos George Square, a Catedral, a Universidade, a Prefeitura e o rio Clyde, protagonista da Revolução Industrial. Tempo livre e saída em direção ao porto de Cairnryan para embarcar no ferry com destino a Belfast, capital da Irlanda do Norte. Chegada e hospedagem.",
    },
    {
      day: 9,
      route: "BELFAST / CALÇADA DO GIGANTE / BELFAST",
      text: "Café da manhã e visita panorâmica de Belfast, percorrendo os bairros católicos e protestantes e seus famosos murais. Passaremos pelo centro histórico, a Prefeitura, a Queen's University, a Torre do Relógio e os estaleiros onde foi construído o Titanic. Tempo livre. Em seguida, visitaremos a Calçada dos Gigantes, um dos principais atrativos da Irlanda do Norte, declarada Patrimônio da Humanidade pela UNESCO. Retorno a Belfast e hospedagem.",
    },
    {
      day: 10,
      route: "BELFAST / GALWAY",
      text: "Café da manhã e saída em direção à República da Irlanda, passando pela abadia de Kylemore, conhecida como o «Taj Mahal irlandês» (visita interna). Continuação através de uma bela paisagem de lagos até chegar a Galway, conhecida como a «cidade das tribos» pelas 14 famílias que a governaram durante a Idade Média. Aqui poderemos conhecer a origem dos tradicionais pubs irlandeses e ver a última catedral católica construída na Irlanda em 1965. Hospedagem em Galway.",
    },
    {
      day: 11,
      route: "GALWAY / CORK",
      text: "Café da manhã e saída em direção ao sul da ilha, visitando os impressionantes penhascos de Moher, que oferecem espetaculares vistas sobre o oceano Atlântico e estão protegidos pela UNESCO. Continuação até a pitoresca localidade de Adare, considerada uma das vilas mais bonitas da Irlanda, com suas casas de telhados de palha, edifícios de pedra e mosteiros medievais. Seguiremos até Cork, cidade construída sobre a água e um dos principais centros produtores de whisky. Hospedagem em Cork.",
    },
    {
      day: 12,
      route: "CORK / KILKENNY / DUBLIN",
      text: "Café da manhã e saída em direção a Dublin, passando por Cashel, onde se destaca o conjunto medieval do Rock of Cashel, um dos símbolos da Irlanda. Continuação até Kilkenny, conhecida como a «Cidade de Mármore», onde faremos uma breve parada para passear por seu centro histórico. Chegada a Dublin e hospedagem.",
    },
    {
      day: 13,
      route: "DUBLIN",
      text: "Café da manhã e visita panorâmica da cidade para descobrir sua história, mitos e lendas. Para finalizar, visitaremos a fábrica de cerveja mais famosa do mundo, onde conheceremos seu processo de elaboração e degustaremos uma das bebidas mais emblemáticas da Irlanda.",
    },
    {
      day: 14,
      route: "DUBLIN",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
