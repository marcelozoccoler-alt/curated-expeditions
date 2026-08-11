import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const pragaEPolonia: LocalGuideGroup = {
  slug: "praga-e-polonia",
  code: "PPOL",
  title: "Praga e Polônia",
  subtitle: "Praga · Wieliczka · Cracóvia · Czestochowa · Varsóvia",
  intro:
    "Oito dias que atravessam três capitais de pedra e memória: as torres góticas de Praga, o sal transformado em catedral em Wieliczka, o centro medieval de Cracóvia e a Varsóvia reconstruída pedra a pedra. Uma curadoria compacta da Europa Central, guiada localmente, para quem prefere profundidade à pressa.",
  highlights: [
    "Castelo de Praga, Catedral de São Vito e a Rua do Ouro",
    "Ponte Carlos e a Praça da Cidade Velha, com o relógio astronômico",
    "Minas de sal de Wieliczka, Patrimônio Mundial da UNESCO",
    "Colina de Wawel e o Castelo de Wawel em Cracóvia",
    "Santuário de Jasna Góra em Czestochowa, com a Virgem Negra",
    "Rota Real e o Parque de Lazienki em Varsóvia",
  ],
  category: "Primeira",
  days: 8,
  nights: 7,
  priceEur: 1635,
  singleSupplementEur: 770,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["República Tcheca", "Polônia"],
  area: "Europa",
  hotels: [
    { city: "Praga", hotel: "Hermitage" },
    { city: "Cracóvia", hotel: "Puro" },
    { city: "Varsóvia", hotel: "Mercure Centrum" },
  ],
  departures: [
    "2027-05-25",
    "2027-06-08",
    "2027-07-20",
    "2027-08-31",
    "2027-09-14",
    "2027-09-28",
  ],
  itinerary: [
    {
      day: 1,
      route: "PRAGA",
      text:
        "Chegada ao aeroporto, traslado para o hotel e acomodação. O guia estará disponível no hotel a partir das 19h.",
    },
    {
      day: 2,
      route: "PRAGA",
      text:
        "Visita da cidade pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Passeio pela Cidade Pequena pela rua Nerudova, pela Igreja de São Nicolau até a Ponte Carlos, e pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a Igreja de Nossa Senhora de Týn e o monumento a Jan Hus, terminando na Cidade Nova.",
    },
    {
      day: 3,
      route: "PRAGA",
      text:
        "Dia totalmente livre para continuar descobrindo a cidade ou descansar, com a opção de uma excursão a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga.",
    },
    {
      day: 4,
      route: "PRAGA / WIELICZKA / CRACÓVIA",
      text:
        "Café da manhã e saída cedo do hotel em direção a Cracóvia, com um desvio até Wieliczka para visitar as famosas minas de sal, Patrimônio Mundial da UNESCO, com capelas esculpidas em sal, câmaras enormes e lagoas subterrâneas. Chegada a Cracóvia no final da tarde e acomodação.",
    },
    {
      day: 5,
      route: "CRACÓVIA",
      text:
        "Café da manhã e visita da cidade, que fascina por seus tesouros arquitetônicos, como a colina de Wawel, a Igreja de Santa Maria e o centro histórico, com uma das maiores praças medievais da Europa. Visita ao Castelo de Wawel, o mais importante da Polônia. Tarde livre.",
    },
    {
      day: 6,
      route: "CRACÓVIA / CZESTOCHOWA / VARSÓVIA",
      text:
        "Café da manhã e saída em direção a Czestochowa, capital religiosa da Polônia e centro de peregrinação, conhecida pelo santuário de Jasna Góra, onde se encontra a imagem da Virgem Negra. Após a visita, continuação até Varsóvia. Hospedagem.",
    },
    {
      day: 7,
      route: "VARSÓVIA",
      text:
        "Café da manhã e visita da cidade, seguindo pela Rota Real, que inclui o centro histórico, o Parque Real de Lazienki, com seu monumento a Chopin, e a Igreja de Santa Ana. Tarde livre.",
    },
    {
      day: 8,
      route: "VARSÓVIA",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
