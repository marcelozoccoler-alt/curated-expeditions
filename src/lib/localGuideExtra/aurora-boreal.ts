import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const auroraBoreal: LocalGuideGroup = {
  slug: "aurora-boreal",
  code: "AURO",
  title: "Aurora Boreal",
  subtitle: "Copenhague · Oslo · Tromsø · Estocolmo",
  intro:
    "O inverno escandinavo transforma o céu em um teatro de cores raras, e é para vê-lo que este roteiro sobe até o Círculo Polar Ártico, em Tromsø, depois de atravessar Copenhague e Oslo a bordo de um cruzeiro noturno pelo fiorde. Trenós puxados por renas, um encontro com a cultura sami e duas noites dedicadas à caça da aurora boreal dão o tom de uma viagem que termina em Estocolmo, entre ilhas e história.",
  highlights: [
    "Mini-cruzeiro noturno DFDS entre Copenhague e Oslo, com cabine externa",
    "Duas saídas noturnas em busca da aurora boreal em Tromsø",
    "Passeio de trenó puxado por renas e encontro com a cultura sami",
    "Catedral Ártica e teleférico Fjellheisen, com vista sobre os fiordes",
    "Trem rápido entre Oslo e Estocolmo",
    "Gamla Stan e a ilha de Södermalm, em Estocolmo",
  ],
  category: "Premium",
  days: 11,
  nights: 10,
  priceEur: 4450,
  singleSupplementEur: 1900,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Inclui 1 noite a bordo do cruzeiro Nordic DFDS em cabine externa, passagem aérea Oslo–Tromsø–Oslo, trem rápido Oslo–Estocolmo e roupa térmica em Tromsø. Saídas com guia acompanhante em espanhol.",
  countries: ["Dinamarca", "Noruega", "Suécia"],
  area: "Europa",
  hotels: [
    { city: "Copenhague", hotel: "Radisson Scandinavia" },
    { city: "Oslo", hotel: "Radisson Scandinavia" },
    { city: "Tromsø", hotel: "Radisson Blu" },
    { city: "Estocolmo", hotel: "Clarion Sign" },
  ],
  departures: [
    "2027-11-22",
    "2028-01-10", "2028-01-24", "2028-01-31",
    "2028-02-07", "2028-02-14", "2028-02-21", "2028-02-28",
  ],
  itinerary: [
    {
      day: 1,
      route: "COPENHAGUE",
      text: "Chegada ao aeroporto, traslado para o hotel e acomodação. O guia estará no hotel a partir das 18h30.",
    },
    {
      day: 2,
      route: "COPENHAGUE",
      text: "Café da manhã e visita panorâmica da cidade, percorrendo seus principais monumentos e locais históricos, como a Praça da Prefeitura, o Palácio de Christiansborg — atual sede do Parlamento —, a Fonte da deusa Gefion e o porto de Nyhavn, com suas pitorescas casas coloridas do século XVII. E, claro, o símbolo da cidade: a famosa Pequena Sereia. Opcionalmente, visita ao majestoso Castelo Real de Frederiksborg, no norte da Zelândia. Tarde livre e hospedagem.",
    },
    {
      day: 3,
      route: "COPENHAGUE / CRUZEIRO DFDS / OSLO",
      text: "Café da manhã e tempo livre até as 15h, quando seguimos ao porto para embarcar no cruzeiro DFDS com destino a Oslo. O navio conta com restaurantes, bar, lojas, discoteca e wi-fi. Hospedagem em cabine externa com janela e jantar buffet a bordo.",
    },
    {
      day: 4,
      route: "OSLO",
      text: "Café da manhã a bordo e chegada a Oslo às 09h30. Desembarque e visita panorâmica da 'capital viking', situada ao fundo do fiorde homônimo, passando pela Prefeitura, o Castelo de Akershus, o Palácio Real, o Parlamento e o Parque Vigeland, com as famosas esculturas de bronze de Gustav Vigeland que simbolizam o ciclo da vida, entre elas o grande monólito com seus 121 corpos entrelaçados. Tarde livre para passear pelo animado distrito de Aker Brygge, com suas instalações portuárias revitalizadas, restaurantes, bares e lojas. Hospedagem.",
    },
    {
      day: 5,
      route: "OSLO / TROMSØ",
      text: "Café da manhã e traslado ao aeroporto para embarque no voo com destino a Tromsø. Chegada e hospedagem. À noite, primeira saída em busca das auroras boreais em áreas afastadas da poluição luminosa, onde as condições climáticas favorecem sua observação. Guias especializados compartilham informações e relatos sobre este fenômeno natural. Inclui refeição quente (bebidas não incluídas). Retorno ao hotel e hospedagem.",
    },
    {
      day: 6,
      route: "TROMSØ",
      text: "Café da manhã e manhã dedicada a descobrir Tromsø. A jornada começa com uma visita panorâmica guiada pela cidade, incluindo o acesso à Catedral Ártica — uma das obras de arquitetura moderna mais singulares da Noruega. Em seguida, subida no teleférico Fjellheisen (421 m), de onde se obtém uma vista panorâmica privilegiada de Tromsø, do arquipélago e dos fiordes ao redor. Tarde livre para explorar o centro histórico, as galerias de arte local ou os mercados de artesanato ártico. À noite, segunda saída em busca das auroras boreais, desta vez em uma área diferente, selecionada em tempo real pelos guias de acordo com as condições do céu e o índice de atividade solar. Inclui refeição quente (bebidas não incluídas). Retorno ao hotel e hospedagem.",
    },
    {
      day: 7,
      route: "TROMSØ",
      text: "Café da manhã e saída em direção a um acampamento sami para viver uma experiência cultural única. Passeio de trenó puxado por renas através de paisagens árticas e encontro com a cultura sami, conhecendo suas tradições e estilo de vida. Inclui comida e bebida quentes ao redor do fogo em uma lavvu tradicional. Retorno ao hotel e hospedagem.",
    },
    {
      day: 8,
      route: "TROMSØ / OSLO",
      text: "Café da manhã e traslado ao aeroporto no horário previsto para embarque no voo com destino a Oslo. Chegada e hospedagem.",
    },
    {
      day: 9,
      route: "OSLO / ESTOCOLMO",
      text: "Café da manhã e traslado à estação de trem para embarque no trem rápido com destino a Estocolmo. Na chegada, traslado ao hotel e hospedagem.",
    },
    {
      day: 10,
      route: "ESTOCOLMO",
      text: "Café da manhã e visita da cidade, passando pela cidade antiga, Gamla Stan, onde se encontram alguns dos edifícios mais relevantes de sua história, como o Palácio Real, a Casa da Nobreza e o Museu Nobel. Continuação até a ilha de Södermalm, assentada sobre várias colinas, com vistas espetaculares desde o mirante em direção à zona norte do centro de Estocolmo.",
    },
    {
      day: 11,
      route: "ESTOCOLMO",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
