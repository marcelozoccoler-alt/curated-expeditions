import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const descubraOsFiordes: LocalGuideGroup = {
  slug: "descubra-os-fiordes",
  code: "EETDE",
  title: "Descubra os Fiordes",
  subtitle: "Copenhague · Oslo · Lofthus · Bergen · Lillehammer · Estocolmo",
  intro:
    "Dez dias para se deixar envolver pelos fiordes noruegueses, onde a água azul-acinzentada reflete montanhas e glaciares em silêncio quase sagrado. O roteiro atravessa Dinamarca, Noruega e Suécia com uma noite a bordo do cruzeiro Nordic e passagens por vilarejos e cidades que guardam história viking, arquitetura hanseática e paisagens de rara beleza. Uma síntese elegante da Escandinávia para quem prefere viagens intensas, mas sem pressa.",
  highlights: [
    "Fiorde de Hardanger e o histórico Hotel Ullensvang, refúgio de Edvard Grieg",
    "Ferry pelo Sognefjord, o fiorde mais longo e profundo da Noruega",
    "Igreja medieval de Borgund, Patrimônio da Humanidade pela UNESCO",
    "Noite a bordo do cruzeiro Nordic entre Copenhague e Oslo",
    "Bergen, cidade hanseática com o icônico Bryggen e seu funicular panorâmico",
    "Lillehammer, sede olímpica cercada por florestas e centros de esportes de inverno",
  ],
  category: "Premium",
  days: 10,
  nights: 9,
  priceEur: 2975,
  singleSupplementEur: 1100,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["Dinamarca", "Noruega", "Suécia"],
  area: "Europa",
  hotels: [
    { city: "Copenhague", hotel: "Copenhague Island Hotel" },
    { city: "Oslo", hotel: "Hotel Folketeateret" },
    { city: "Lofthus", hotel: "Ullensvang" },
    { city: "Bergen", hotel: "Comfort Hotel" },
    { city: "Lillehammer", hotel: "Home Hammer" },
    { city: "Estocolmo", hotel: "Clarion" },
  ],
  departures: [
    "2027-06-18",
    "2027-07-02",
    "2027-07-16",
    "2027-07-30",
    "2027-08-27",
    "2027-09-10",
  ],
  itinerary: [
    {
      day: 1,
      route: "COPENHAGUE",
      text: "Chegada ao aeroporto e traslado para o hotel. Às 18h30, encontro no lobby com o guia que conduzirá a viagem.",
    },
    {
      day: 2,
      route: "COPENHAGUE",
      text: "Café da manhã e visita panorâmica pela cidade, percorrendo a Praça da Prefeitura, o Palácio de Christiansborg, a Fonte da deusa Gefion, o porto de Nyhavn e suas casas coloridas do século XVII, além da estátua da Pequena Sereia. Opcionalmente, visita ao Castelo Real de Frederiksborg, no norte da Zelândia. Tarde livre. Hospedagem.",
    },
    {
      day: 3,
      route: "COPENHAGUE / CRUZEIRO NORDIC / OSLO",
      text: "Café da manhã e manhã livre até a saída ao porto para embarque no cruzeiro Nordic rumo a Oslo, atravessando o mar do Norte. Jantar buffet a bordo, em cabine externa com janela.",
    },
    {
      day: 4,
      route: "OSLO",
      text: "Café da manhã buffet a bordo e chegada a Oslo por volta das 9h30. Desembarque e visita panorâmica da «capital viking», passando pela Prefeitura, o Castelo de Akershus, o Palácio Real, o Parlamento e o Parque Vigeland, com suas esculturas de bronze. Tarde livre. Hospedagem.",
    },
    {
      day: 5,
      route: "OSLO / LOFTHUS",
      text: "Café da manhã e saída em direção a Lofthus, passando pelo Parque Nacional de Hardangervidda, o maior do país, e pela ponte suspensa de Hardanger, que permite admirar o fiorde de mesmo nome. Chegada ao Hotel Ullensvang, refúgio histórico do compositor Edvard Grieg, com vista para o glaciar Folgefonna. Jantar e hospedagem.",
    },
    {
      day: 6,
      route: "LOFTHUS / BERGEN",
      text: "Café da manhã e saída rumo a Bergen. Chegada e visita da cidade, uma das mais antigas da Noruega, com a Fortaleza, o Håkonshallen, o Bryggen e a igreja de Maria, encerrando com a subida no famoso funicular. Tarde livre e hospedagem.",
    },
    {
      day: 7,
      route: "BERGEN / GUDVANGEN / LILLEHAMMER",
      text: "Café da manhã e saída cedo rumo a Gudvangen, onde embarcamos em ferry para navegar pelo Sognefjord, o fiorde mais longo e profundo do país. Desembarque em Aurland e visita à igreja medieval de Borgund, Patrimônio da Humanidade pela UNESCO. Continuação até Lillehammer, sede dos Jogos Olímpicos. Hospedagem.",
    },
    {
      day: 8,
      route: "LILLEHAMMER / ESTOCOLMO",
      text: "Café da manhã e saída rumo à Suécia, atravessando campos de cereais e lagos suecos até chegar a Estocolmo. Hospedagem.",
    },
    {
      day: 9,
      route: "ESTOCOLMO",
      text: "Café da manhã e visita panorâmica da capital sueca, conhecida como «a Rainha das Águas», situada sobre 14 ilhas conectadas por pontes, incluindo a ilha antiga de Gamla Stan. Hospedagem.",
    },
    {
      day: 10,
      route: "ESTOCOLMO",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
