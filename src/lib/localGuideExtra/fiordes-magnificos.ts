import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const fiordesMagnificos: LocalGuideGroup = {
  slug: "fiordes-magnificos",
  code: "FM",
  title: "Fiordes Magníficos",
  subtitle: "Estocolmo · Lillehammer · Loen · Bergen · Oslo · Copenhague",
  intro:
    "Um roteiro esculpido pela geografia mais dramática da Escandinávia, onde estradas de montanha, cruzeiros por fiordes e uma noite a bordo do Nordic conduzem de Estocolmo a Copenhague, passando pelo coração selvagem da Noruega. Cascatas, planaltos e vilarejos vikings compõem uma narrativa sem pressa, pensada para quem busca profundidade, não pressa, em cada paisagem.",
  highlights: [
    "Fiorde de Geiranger, com as cachoeiras das Sete Irmãs e a estrada de Dalsnibba",
    "Sognefjord, o fiorde mais longo e profundo da Noruega, de Flåm a Gudvangen",
    "Jantar típico norueguês no histórico Hotel Alexandra, em Loen",
    "Bergen hanseática, com funicular panorâmico e o bairro do Bryggen",
    "Parque Nacional de Hardanger e o planalto de Hardangervidda",
    "Uma noite a bordo do cruzeiro Nordic, de Oslo a Copenhague",
  ],
  category: "Primeira",
  days: 11,
  nights: 10,
  priceEur: 3540,
  singleSupplementEur: 1500,
  priceNote:
    "Guia acompanhante em espanhol durante todo o roteiro; consulte condições de desconto para o terceiro passageiro no mesmo quarto.",
  countries: ["Suécia", "Noruega", "Dinamarca"],
  area: "Europa",
  hotels: [
    { city: "Estocolmo", hotel: "Clarion Sign" },
    { city: "Lillehammer", hotel: "Home Hotel Hammer" },
    { city: "Loen", hotel: "Alexandra" },
    { city: "Bergen", hotel: "Havnekontoret" },
    { city: "Oslo", hotel: "Radisson Scandinavia" },
    { city: "Copenhague", hotel: "Radisson Blu Scandinavia" },
  ],
  departures: [
    "2027-05-14",
    "2027-05-28",
    "2027-06-11",
    "2027-06-25",
    "2027-07-09",
    "2027-07-23",
    "2027-08-06",
    "2027-08-20",
    "2027-09-03",
    "2027-09-17",
  ],
  itinerary: [
    {
      day: 1,
      route: "ESTOCOLMO",
      text: "Chegada ao aeroporto e traslado ao hotel. Acomodação. Às 18h30, encontro no lobby do hotel com o guia.",
    },
    {
      day: 2,
      route: "ESTOCOLMO",
      text: "Café da manhã e visita da cidade de Estocolmo, conhecida mundialmente como «a Rainha das Águas», situada sobre 14 maravilhosas ilhas conectadas por pontes. A ilha mais antiga, onde se encontra a cidade antiga, Gamla Stan, abriga grande parte dos edifícios mais emblemáticos e das estruturas arquitetônicas mais importantes da cidade. Hospedagem em Estocolmo.",
    },
    {
      day: 3,
      route: "ESTOCOLMO / HAMAR / LILLEHAMMER",
      text: "Café da manhã e saída em direção à Noruega, atravessando belos campos de cereais e lagos suecos até as paisagens de florestas e montanhas norueguesas. Passagem por Hamar, às margens do lago Mjøsa, onde se encontra o edifício em forma de barco viking invertido que sediou as provas de patinação no gelo dos Jogos Olímpicos de Inverno de 1994. Chegada e hospedagem em Lillehammer, sede olímpica e um dos centros de esportes de inverno mais conhecidos do país.",
    },
    {
      day: 4,
      route: "LILLEHAMMER / LOM / GEIRANGER / LOEN",
      text: "Café da manhã e saída em direção a Lom, pitoresca localidade conhecida por sua igreja medieval de madeira, uma das maiores do país e uma das poucas a conservar cabeças originais de dragão. Continuação pela espetacular estrada de Dalsnibba, que sobe a mais de 1.000 metros com paisagens fascinantes, até Geiranger, onde faremos um cruzeiro de aproximadamente uma hora pelo fiorde, com as cachoeiras das Sete Irmãs e o Pretendente. Desembarque em Hellesylt e continuação até Loen. Jantar buffet típico norueguês e hospedagem em Loen.",
    },
    {
      day: 5,
      route: "LOEN / FLAM / GUDVANGEN / BERGEN",
      text: "Café da manhã e saída em direção a Flåm, onde embarcaremos em um ferry para percorrer o Sognefjord, o fiorde mais longo e profundo do país. Chegada a Gudvangen, desembarque e continuação até Bergen. Hospedagem.",
    },
    {
      day: 6,
      route: "BERGEN",
      text: "Café da manhã e visita panorâmica pela capital dos fiordes, cercada por sete colinas às margens do mar do Norte. Passagem pela Fortaleza, o Bryggen com seu famoso mercado de peixe, a Igreja de Maria e o Grieghallen, além do bairro hanseático. O passeio inclui a subida no famoso funicular de Bergen, com vistas espetaculares. Tarde livre e hospedagem.",
    },
    {
      day: 7,
      route: "BERGEN / HARDANGER / OSLO",
      text: "Café da manhã. Durante a etapa de hoje desfrutaremos dos contrastes da paisagem por uma das estradas mais panorâmicas do país, atravessando o Parque Nacional de Hardanger, com seus fiordes rodeados por florestas e montanhas, e o planalto de Hardangervidda, com paradas para fotografias. Continuação até Oslo e visita panorâmica da capital norueguesa: o Parque Vigeland, com suas esculturas que representam o ciclo da vida humana e o monólito de 212 corpos entrelaçados, além da Ópera, a Prefeitura, o porto, o Palácio Real, o Parlamento e a Fortaleza de Akershus. Hospedagem em Oslo.",
    },
    {
      day: 8,
      route: "OSLO / CRUZEIRO NORDIC / COPENHAGUE",
      text: "Café da manhã e manhã livre até a saída em direção ao porto. Às 14h30, traslado para embarque no cruzeiro Nordic, navegando pelo mar do Norte com destino a Copenhague. Hospedagem em cabine externa com janela. Jantar buffet a bordo.",
    },
    {
      day: 9,
      route: "COPENHAGUE",
      text: "Café da manhã e chegada a Copenhague às 09h45. Desembarque e visita panorâmica pela cidade, percorrendo a Praça da Prefeitura, o Palácio de Christiansborg, sede do Parlamento, a Fonte da deusa Gefion e o porto de Nyhavn, com suas fachadas coloridas do século XVII. Contemplação da célebre Pequena Sereia e, opcionalmente, visita ao majestoso Castelo Real de Frederiksborg, ao norte da Zelândia. Hospedagem.",
    },
    {
      day: 10,
      route: "COPENHAGUE",
      text: "Café da manhã e dia livre. Acomodação em Copenhague.",
    },
    {
      day: 11,
      route: "COPENHAGUE",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
