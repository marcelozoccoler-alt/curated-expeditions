import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const descubraACroaciaHotDeal: LocalGuideGroup = {
  slug: "descubra-a-croacia-hot-deal",
  code: "HOTCRO",
  title: "Descubra a Croácia — Hot Deal",
  subtitle: "Viena · Liubliana · Postojna · Bled · Split · Dubrovnik · Sarajevo · Mostar · Zagreb",
  intro:
    "Treze dias pela costa dálmata e pelos Bálcãs, onde a pedra branca de Split encontra o Adriático e as muralhas de Dubrovnik guardam séculos de história. Entre lagos alpinos, cavernas de estalactites e cidades que atravessaram impérios, este roteiro combina paisagem e memória num só fôlego, com guia local em espanhol do início ao fim.",
  highlights: [
    "Palácio Belvedere e a Ringstrasse imperial em Viena",
    "Cavernas de Postojna e o lago de Bled na Eslovênia",
    "Palácio de Diocleciano e o calçadão à beira do Adriático em Split",
    "Muralhas de Dubrovnik, Patrimônio Mundial da UNESCO",
    "Bazar Baščaršija e a Mesquita Husrev Beg em Sarajevo",
    "Centro histórico de Mostar, símbolo de convivência cultural",
  ],
  category: "Hot Deal",
  days: 13,
  nights: 12,
  priceEur: 2660,
  singleSupplementEur: 1080,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["Áustria", "Eslovênia", "Croácia", "Bósnia e Herzegovina"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Roomz Prater" },
    { city: "Liubliana", hotel: "Exe Lev" },
    { city: "Split", hotel: "Split Inn" },
    { city: "Dubrovnik", hotel: "Lero" },
    { city: "Sarajevo", hotel: "Courtyard" },
    { city: "Zagreb", hotel: "International" },
  ],
  departures: ["2027-06-20", "2027-08-29", "2027-10-17"],
  itinerary: [
    {
      day: 1,
      route: "VIENA",
      text: "Chegada ao aeroporto, traslado ao hotel e hospedagem.",
    },
    {
      day: 2,
      route: "VIENA",
      text:
        "Após o café da manhã no hotel, visita panorâmica pelos principais pontos de interesse de Viena, incluindo os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia. Seguimos pela Ringstrasse, com a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg. Passeio pelas ruas do centro histórico, visita ao interior da Catedral de Santo Estêvão e passagem pelo Relógio Anker e pelo bairro judeu, com término na Maria-Theresien-Platz. À tarde, possibilidade de visitar o Palácio de Schönbrunn ou assistir a um concerto de música clássica (não incluídos).",
    },
    {
      day: 3,
      route: "VIENA / LIUBLIANA",
      text:
        "Pela manhã, saída de ônibus em direção a Liubliana, a encantadora capital da Eslovênia. Na chegada, passeio a pé pelo centro histórico, com a Prefeitura, a Fonte de Robba, as Três Pontes, a Universidade e o Parlamento. Hospedagem.",
    },
    {
      day: 4,
      route: "LIUBLIANA / POSTOJNA / BLED / LIUBLIANA",
      text:
        "Saída em direção a Postojna, famosa por suas impressionantes cavernas de estalactites, visitadas em um trem turístico mineiro que percorre espaços como o Salão de Baile e o Paraíso, com destaque para a Sala de Concertos. Continuação até Bled, com seu icônico lago e pequena ilha. Retorno a Liubliana e hospedagem.",
    },
    {
      day: 5,
      route: "LIUBLIANA / ZADAR / SPLIT",
      text:
        "Saída em direção a Zadar, antigo centro administrativo da Dalmácia bizantina, onde visitaremos as ruínas do Forum Romanum e a Igreja de São Donato, do século IX. Continuação até Split, principal cidade da região da Dalmácia. Hospedagem.",
    },
    {
      day: 6,
      route: "SPLIT",
      text:
        "Dia dedicado a descobrir Split, cidade construída ao redor do monumental palácio do imperador romano Diocleciano. Passeio por suas praças e pelo calçadão à beira do Adriático, com o Vestíbulo do Palácio, o Peristilo, o campanário da Catedral de São Domnio e o Templo de Júpiter. Hospedagem.",
    },
    {
      day: 7,
      route: "SPLIT / DUBROVNIK",
      text:
        "Percurso pela escarpada costa dálmata em direção a Dubrovnik, com paisagens sobre inúmeras ilhas do Adriático. Na chegada, visita a esta joia histórica, Patrimônio da Humanidade pela UNESCO, com destaque para a Igreja Franciscana, o Palácio do Reitor, a Catedral, o Mosteiro Dominicano e a Torre Minceta. Hospedagem.",
    },
    {
      day: 8,
      route: "DUBROVNIK",
      text:
        "Dia livre para aproveitar a cidade no seu próprio ritmo, com a opção de uma excursão a Montenegro, visitando alguns dos recantos mais pitorescos do país (não incluída). Hospedagem.",
    },
    {
      day: 9,
      route: "DUBROVNIK / MEDJUGORJE / MOSTAR / SARAJEVO",
      text:
        "Saída em direção à Bósnia e Herzegovina, com parada em Medjugorje, importante centro de peregrinação. Continuação até Mostar, cidade marcada por sua história recente e símbolo de convivência cultural, com seu centro histórico medieval. Em seguida, seguimos até Sarajevo, capital do país e ponto de encontro de diferentes religiões e culturas.",
    },
    {
      day: 10,
      route: "SARAJEVO",
      text:
        "Exploração de Sarajevo, cidade que surpreende por sua diversidade cultural, com a Mesquita Husrev Beg, o tradicional bazar Baščaršija, o bairro austro-húngaro e o estádio olímpico. Tarde livre. Hospedagem.",
    },
    {
      day: 11,
      route: "SARAJEVO / ZAGREB",
      text:
        "Saída em direção a Zagreb, capital da Croácia. Após a chegada, passeio pelo centro histórico, com destaque para o Palácio do Governo, a Catedral de Santo Estêvão e a Igreja de São Marcos.",
    },
    {
      day: 12,
      route: "ZAGREB",
      text:
        "Dia livre para continuar explorando a cidade ou realizar uma excursão opcional aos Lagos de Plitvice (não incluída).",
    },
    {
      day: 13,
      route: "ZAGREB",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
