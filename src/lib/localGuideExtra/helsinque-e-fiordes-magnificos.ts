import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const helsinqueEFiordesMagnificos: LocalGuideGroup = {
  slug: "helsinque-e-fiordes-magnificos",
  code: "HELFM",
  title: "Helsinque e Fiordes Magníficos",
  subtitle: "Helsinque · Estocolmo · Lillehammer · Loen · Bergen · Oslo · Copenhague",
  intro:
    "Entre a brancura serena de Helsinque e os fiordes mais dramáticos da Noruega, este itinerário costura duas noites de cruzeiro, estradas de montanha que cortam o país em curvas panorâmicas e cidades reais banhadas por águas nórdicas. Um roteiro autoral em cinco atos — Finlândia, Suécia, Noruega e Dinamarca —, tecido para quem deseja sentir, sem pressa, o pulso do Norte da Europa.",
  highlights: [
    "Duas noites de cruzeiro: Silja Line entre Helsinque e Estocolmo, e Nordic entre Oslo e Copenhague",
    "Fiorde de Geiranger, com as cachoeiras das Sete Irmãs e a estrada de Dalsnibba",
    "Sognefjord, o fiorde mais longo e profundo da Noruega, de Flåm a Gudvangen",
    "Jantar típico norueguês no histórico Hotel Alexandra, em Loen",
    "Bergen hanseática, com funicular panorâmico e o bairro do Bryggen",
    "Temppeliaukio Kirkko, a igreja finlandesa esculpida na rocha",
  ],
  category: "Primeira",
  days: 13,
  nights: 12,
  priceEur: 4030,
  singleSupplementEur: 1800,
  priceNote:
    "Guia acompanhante em espanhol durante todo o roteiro; consulte condições de desconto para o terceiro passageiro no mesmo quarto.",
  countries: ["Finlândia", "Suécia", "Noruega", "Dinamarca"],
  area: "Europa",
  hotels: [
    { city: "Helsinque", hotel: "Radisson Red" },
    { city: "Estocolmo", hotel: "Clarion Sign" },
    { city: "Lillehammer", hotel: "Home Hotel Hammer" },
    { city: "Loen", hotel: "Alexandra" },
    { city: "Bergen", hotel: "Havnekontoret" },
    { city: "Oslo", hotel: "Radisson Scandinavia" },
    { city: "Copenhague", hotel: "Radisson Blu Scandinavia" },
  ],
  departures: [
    "2027-05-12",
    "2027-05-26",
    "2027-06-09",
    "2027-06-23",
    "2027-07-07",
    "2027-07-21",
    "2027-08-04",
    "2027-08-18",
    "2027-09-01",
    "2027-09-15",
  ],
  itinerary: [
    {
      day: 1,
      route: "HELSINQUE",
      text: "Chegada e traslado ao hotel. Acomodação em Helsinque. Às 18h30, encontro no lobby do hotel com o guia.",
    },
    {
      day: 2,
      route: "HELSINQUE / CRUZEIRO ESTOCOLMO",
      text: "Café da manhã e visita panorâmica pela capital da Finlândia, conhecida como «a Cidade Branca do Norte». Passagem pela Igreja Ortodoxa da Trindade, vestígio do domínio russo, pela Praça do Senado e pela Temppeliaukio Kirkko, igreja luterana de planta circular esculpida na rocha, com cúpula em espiral de cobre. Tempo livre e, às 15h00, traslado ao porto para embarque no cruzeiro Silja Line rumo a Estocolmo, navegando pelas ilhotas de Helsinque e pelo arquipélago sueco de mais de 24.000 ilhas. Acomodação em cabines externas duplas categoria A. Jantar buffet a bordo.",
    },
    {
      day: 3,
      route: "ESTOCOLMO",
      text: "Café da manhã buffet a bordo e desembarque por volta das 09h45. Visita panorâmica pela capital sueca, conhecida como «a Rainha das Águas», assentada em 14 ilhas ligadas por pontes, incluindo a cidade antiga, Gamla Stan. Acomodação em Estocolmo.",
    },
    {
      day: 4,
      route: "ESTOCOLMO",
      text: "Café da manhã e dia livre, durante o qual é possível visitar opcionalmente o Museu Vasa e a Prefeitura de Estocolmo (visitas não incluídas). Acomodação em Estocolmo.",
    },
    {
      day: 5,
      route: "ESTOCOLMO / LILLEHAMMER",
      text: "Café da manhã e saída em direção à Noruega, atravessando belos campos de cereais e lagos suecos até as paisagens de florestas e montanhas norueguesas. Passagem por Hamar, às margens do lago Mjøsa, onde se encontra o edifício em forma de barco viking invertido que sediou as provas de patinação no gelo dos Jogos Olímpicos de Inverno de 1994. Chegada e hospedagem em Lillehammer, sede olímpica e um dos centros de esportes de inverno mais conhecidos do país.",
    },
    {
      day: 6,
      route: "LILLEHAMMER / LOM / GEIRANGER / LOEN",
      text: "Café da manhã e saída em direção a Lom, pitoresca localidade conhecida por sua igreja medieval de madeira, uma das maiores do país e uma das poucas a conservar cabeças originais de dragão. Continuação pela espetacular estrada de Dalsnibba, que sobe a mais de 1.000 metros com paisagens fascinantes, até Geiranger, onde faremos um cruzeiro de aproximadamente uma hora pelo fiorde, com as cachoeiras das Sete Irmãs e o Pretendente. Desembarque em Hellesylt e continuação até Loen. Jantar buffet típico norueguês e hospedagem em Loen.",
    },
    {
      day: 7,
      route: "LOEN / FLAM / GUDVANGEN / BERGEN",
      text: "Café da manhã e saída em direção a Flåm, onde embarcaremos em um ferry para percorrer o Sognefjord, o fiorde mais longo e profundo do país. Chegada a Gudvangen, desembarque e continuação até Bergen. Jantar e hospedagem.",
    },
    {
      day: 8,
      route: "BERGEN",
      text: "Café da manhã e visita panorâmica pela capital dos fiordes, cercada por sete colinas às margens do mar do Norte. Passagem pela Fortaleza, o Bryggen com seu famoso mercado de peixe, a Igreja de Maria e o Grieghallen, além do bairro hanseático. O passeio inclui a subida no famoso funicular de Bergen, com vistas espetaculares. Tarde livre e hospedagem.",
    },
    {
      day: 9,
      route: "BERGEN / HARDANGER / OSLO",
      text: "Café da manhã. Durante a etapa de hoje desfrutaremos dos contrastes da paisagem por uma das estradas mais panorâmicas do país, atravessando o Parque Nacional de Hardanger, com seus fiordes rodeados por florestas e montanhas, e o planalto de Hardangervidda, com paradas para fotografias. Continuação até Oslo e visita panorâmica da capital norueguesa: o Parque Vigeland, com suas esculturas que representam o ciclo da vida humana e o monólito de 212 corpos entrelaçados, além da Ópera, a Prefeitura, o porto, o Palácio Real, o Parlamento e a Fortaleza de Akershus. Hospedagem em Oslo.",
    },
    {
      day: 10,
      route: "OSLO / CRUZEIRO NORDIC / COPENHAGUE",
      text: "Café da manhã e manhã livre até a saída em direção ao porto. Às 14h30, traslado para embarque no cruzeiro Nordic, navegando pelo mar do Norte com destino a Copenhague. Hospedagem em cabine externa com janela. Jantar buffet a bordo.",
    },
    {
      day: 11,
      route: "COPENHAGUE",
      text: "Café da manhã e chegada a Copenhague às 09h45. Desembarque e visita panorâmica pela cidade, percorrendo a Praça da Prefeitura, o Palácio de Christiansborg, sede do Parlamento, a Fonte da deusa Gefion e o porto de Nyhavn, com suas fachadas coloridas do século XVII. Contemplação da célebre Pequena Sereia e, opcionalmente, visita ao majestoso Castelo Real de Frederiksborg, ao norte da Zelândia. Hospedagem.",
    },
    {
      day: 12,
      route: "COPENHAGUE",
      text: "Café da manhã e dia livre. Acomodação em Copenhague.",
    },
    {
      day: 13,
      route: "COPENHAGUE",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
