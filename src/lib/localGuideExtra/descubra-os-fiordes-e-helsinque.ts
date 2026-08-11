import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const descubraOsFiordesEHelsinque: LocalGuideGroup = {
  slug: "descubra-os-fiordes-e-helsinque",
  code: "EETME",
  title: "Descubra os Fiordes e Helsinque",
  subtitle:
    "Copenhague · Oslo · Lofthus · Bergen · Lillehammer · Estocolmo · Helsinque",
  intro:
    "Doze dias entre fiordes noruegueses de azul profundo e capitais escandinavas onde o tempo parece mais lento. O roteiro combina travessias marítimas a bordo de cruzeiros com jantar buffet e paisagens que alternam glaciares, cachoeiras e campos de cereais suecos, até desembarcar em Helsinque, a serena «Cidade Branca do Norte». Uma curadoria pensada para quem deseja sentir a Escandinávia sem pressa, hospedado sempre com conforto e autenticidade.",
  highlights: [
    "Fiorde de Hardanger e o histórico Hotel Ullensvang, refúgio de Edvard Grieg",
    "Ferry pelo Sognefjord, o fiorde mais longo e profundo da Noruega",
    "Igreja medieval de Borgund, Patrimônio da Humanidade pela UNESCO",
    "Noite a bordo do cruzeiro Nordic entre Copenhague e Oslo",
    "Travessia pelo arquipélago de mais de 24.000 ilhas a bordo do cruzeiro Silja Line",
    "Temppeliaukio Kirkko, a igreja escavada na rocha em Helsinque",
  ],
  category: "Premium",
  days: 12,
  nights: 11,
  priceEur: 3510,
  singleSupplementEur: 1430,
  priceNote: "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["Dinamarca", "Noruega", "Suécia", "Finlândia"],
  area: "Europa",
  hotels: [
    { city: "Copenhague", hotel: "Island Hotel" },
    { city: "Oslo", hotel: "Hotel Folketeateret" },
    { city: "Lofthus", hotel: "Ullensvang" },
    { city: "Bergen", hotel: "Comfort Hotel" },
    { city: "Lillehammer", hotel: "Home Hammer" },
    { city: "Estocolmo", hotel: "Clarion" },
    { city: "Helsinque", hotel: "Radisson Aleksanteri" },
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
      text: "Café da manhã e saída em direção a Lofthus, passando pelo Parque Nacional de Hardangervidda, o maior do país, e pela ponte suspensa de Hardanger, que permite admirar o fiorde de mesmo nome. Chegada ao Hotel Ullensvang, refúgio histórico do compositor Edvard Grieg. Jantar e hospedagem.",
    },
    {
      day: 6,
      route: "LOFTHUS / BERGEN",
      text: "Café da manhã e saída rumo a Bergen, com vista panorâmica para o glaciar Folgefonna. Chegada e visita da cidade, uma das mais antigas da Noruega, com a Fortaleza, o Håkonshallen, o Bryggen e a igreja de Maria, encerrando com a subida no famoso funicular. Tarde livre e hospedagem.",
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
      route: "ESTOCOLMO / CRUZEIRO SILJA / HELSINQUE",
      text: "Café da manhã e manhã livre até as 15h. Traslado ao porto para embarque em cruzeiro rumo a Helsinque, navegando pelo arquipélago de mais de 24.000 ilhas. Jantar buffet a bordo, em cabine dupla externa categoria A.",
    },
    {
      day: 11,
      route: "HELSINQUE",
      text: "Café da manhã buffet a bordo e chegada a Helsinque às 10h. Visita panorâmica da «Cidade Branca do Norte», passando pela Igreja Ortodoxa da Trindade, a Praça do Senado e a Temppeliaukio Kirkko, igreja luterana escavada na rocha. Tarde livre e hospedagem.",
    },
    {
      day: 12,
      route: "HELSINQUE",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
