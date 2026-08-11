import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const imperioViking: LocalGuideGroup = {
  slug: "imperio-viking",
  code: "3CAP",
  title: "Império Viking",
  subtitle: "Copenhague · Aarhus · Stavanger · Bergen · Oslo · Estocolmo",
  intro:
    "Uma viagem que segue o rastro dos antigos navegadores nórdicos, da elegância real de Copenhague aos penhascos de Stavanger, da Bergen hanseática à Oslo dos fiordes, até a Estocolmo assentada sobre catorze ilhas. Ferries, funiculares e estradas costeiras compõem uma coreografia serena entre três reinos escandinavos, sem pressa, entre paisagens talhadas por glaciares e histórias de reis e vikings.",
  highlights: [
    "Cruzeiro panorâmico pelo Fiorde de Lyse e o icônico Púlpito, o Preikestolen",
    "Funicular de Bergen com vistas espetaculares sobre a cidade hanseática",
    "Travessia do Fiorde dos Sonhos, de Gudvangen a Flåm",
    "Parque Vigeland em Oslo, com as esculturas de Gustav Vigeland",
    "Gamla Stan, a cidade antiga de Estocolmo, e o mirador de Södermalm",
    "Travessia marítima Hirtshals–Kristiansand, ligando Dinamarca e Noruega",
  ],
  category: "Primeira",
  days: 11,
  nights: 10,
  priceEur: 3295,
  singleSupplementEur: 1500,
  priceNote:
    "Guia acompanhante em espanhol durante todo o roteiro; consulte condições de desconto para o terceiro passageiro no mesmo quarto.",
  countries: ["Dinamarca", "Noruega", "Suécia"],
  area: "Europa",
  hotels: [
    { city: "Copenhague", hotel: "Radisson Scandinavia" },
    { city: "Aarhus", hotel: "Comwell Aarhus" },
    { city: "Stavanger", hotel: "Radisson Atlantic" },
    { city: "Bergen", hotel: "Havnekontoret" },
    { city: "Oslo", hotel: "Clarion The Hub" },
    { city: "Estocolmo", hotel: "Radisson Royal Viking ou Clarion Sign" },
  ],
  departures: [
    "2027-04-30",
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
      route: "COPENHAGUE",
      text: "Chegada ao aeroporto e traslado ao hotel. Às 18h30, encontro no lobby com o guia acompanhante.",
    },
    {
      day: 2,
      route: "COPENHAGUE",
      text: "Café da manhã e visita panorâmica pela capital dinamarquesa, passando pela Praça da Prefeitura, o Palácio de Christiansborg, sede do Parlamento, a Fonte da deusa Gefion e o porto de Nyhavn, com suas fachadas coloridas do século XVII. Contemplação da célebre Pequena Sereia e, opcionalmente, visita ao majestoso Castelo Real de Frederiksborg, ao norte da Zelândia. Tarde livre. Hospedagem.",
    },
    {
      day: 3,
      route: "COPENHAGUE / ODENSE / AARHUS",
      text: "Café da manhã e saída rumo a Odense, atravessando as pontes que unem as ilhas de Zelândia e Fionia sobre o estreito do Grande Belt. Breve parada em Odense, cidade natal de Hans Christian Andersen, e continuação até Aarhus, a segunda maior cidade da Dinamarca. Tarde livre e hospedagem.",
    },
    {
      day: 4,
      route: "AARHUS / KRISTIANSAND / STAVANGER",
      text: "Café da manhã e saída até Hirtshals, onde embarcamos em um ferry que cruza o mar do Norte até Kristiansand, na Noruega. Continuação até Stavanger, célebre por seu bairro antigo de 173 casas de madeira, em sua maioria brancas. Hospedagem.",
    },
    {
      day: 5,
      route: "STAVANGER",
      text: "Café da manhã e passeio de barco pelo Fiorde de Lyse, de geologia espetacular, incluindo vistas do Preikestolen, o «Púlpito», com queda vertical de 604 metros — cenário de uma das cenas de Missão Impossível. Tempo livre para visitar, opcionalmente, o Museu do Petróleo. Hospedagem em Stavanger.",
    },
    {
      day: 6,
      route: "STAVANGER / BERGEN",
      text: "Café da manhã e saída rumo a Bergen, percorrendo a costa norueguesa por túneis, pontes e trechos de barco. Visita panorâmica pela cidade, uma das mais antigas da Noruega, com sua Fortaleza, o Håkonshallen, o Bryggen — antigas instalações portuárias do século XVI — e a Igreja de Maria. O passeio inclui a subida no famoso funicular de Bergen, com vistas espetaculares. Hospedagem.",
    },
    {
      day: 7,
      route: "BERGEN / OSLO",
      text: "Café da manhã e saída até Gudvangen, atravessando uma paisagem cativante de florestas, rios, cachoeiras e lagos cercados por montanhas. Em Gudvangen, embarque em um ferry até Flåm pela parte mais espetacular do «Fiorde dos Sonhos». Desembarque e continuação em ônibus até Oslo. Hospedagem.",
    },
    {
      day: 8,
      route: "OSLO",
      text: "Café da manhã e visita da capital viking, situada no fundo de seu fiorde homônimo: a Prefeitura, o Castelo de Akershus, o Palácio Real, o Parlamento e o Parque Vigeland, com as esculturas de bronze de Gustav Vigeland e seu monólito de 121 corpos entrelaçados. Tarde livre. Hospedagem.",
    },
    {
      day: 9,
      route: "OSLO / ESTOCOLMO",
      text: "Café da manhã e saída rumo a Estocolmo, atravessando as paisagens de lagos e florestas de Värmland, uma das 21 províncias suecas. Chegada à tarde e hospedagem.",
    },
    {
      day: 10,
      route: "ESTOCOLMO",
      text: "Café da manhã e visita da cidade antiga, Gamla Stan, com o Palácio Real, a Casa da Nobreza e o Museu Nobel. Passagem pela ilha de Södermalm, com vistas espetaculares desde “O Mirante”, e pelo centro histórico e comercial, cruzando algumas das 14 ilhas ligadas por 57 pontes que sustentam Estocolmo. Tarde livre. Hospedagem.",
    },
    {
      day: 11,
      route: "ESTOCOLMO",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
