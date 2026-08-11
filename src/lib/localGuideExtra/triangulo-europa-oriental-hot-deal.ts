import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const trianguloEuropaOrientalHotDeal: LocalGuideGroup = {
  slug: "triangulo-europa-oriental-hot-deal",
  code: "HOTTRO",
  title: "Triângulo da Europa Oriental — Hot Deal",
  subtitle: "Viena · Budapeste · Bratislava · Praga · Wieliczka · Cracóvia · Czestochowa · Varsóvia",
  intro:
    "Treze dias entre impérios: das valsas imperiais de Viena às cúpulas douradas do Danúbio húngaro, da Praga das torres góticas às minas de sal que brilham como catedrais subterrâneas na Polônia. Um triângulo clássico da Europa Central, percorrido sem pressa, com guia local em espanhol e conforto de quem viaja para sentir a história, não apenas atravessá-la.",
  highlights: [
    "Palácio Belvedere e a Ringstrasse imperial em Viena",
    "Bastião dos Pescadores e a Basílica de Santo Estêvão em Budapeste",
    "Castelo de Praga, a Rua do Ouro e a Ponte Carlos ao entardecer",
    "Minas de sal de Wieliczka, Patrimônio Mundial da UNESCO",
    "Colina de Wawel e o centro medieval de Cracóvia",
    "Santuário de Jasna Góra em Czestochowa, com a Virgem Negra",
  ],
  category: "Hot Deal",
  days: 13,
  nights: 12,
  priceEur: 2495,
  singleSupplementEur: 1320,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["Áustria", "Hungria", "Eslováquia", "República Tcheca", "Polônia"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Roomz Prater" },
    { city: "Budapeste", hotel: "NH City" },
    { city: "Praga", hotel: "Occidental Praha Five" },
    { city: "Cracóvia", hotel: "INX Design" },
    { city: "Varsóvia", hotel: "Radisson Sobieski" },
  ],
  departures: ["2027-06-03", "2027-07-15", "2027-09-23"],
  itinerary: [
    {
      day: 1,
      route: "VIENA",
      text:
        "Chegada ao aeroporto de Viena e traslado com o nosso motorista até o hotel.",
    },
    {
      day: 2,
      route: "VIENA",
      text:
        "Após o café da manhã no hotel, visita panorâmica pelos principais pontos de interesse de Viena, incluindo os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia. Seguimos pela Ringstrasse, com a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg. Passeio pelas ruas do centro histórico, visita ao interior da Catedral de Santo Estêvão e passagem pelo Relógio Anker e pelo bairro judeu, com término na Maria-Theresien-Platz. À tarde, possibilidade de visitar o Palácio de Schönbrunn ou assistir a um concerto de música clássica (não incluídos).",
    },
    {
      day: 3,
      route: "VIENA",
      text:
        "Dia livre para aproveitar a cidade no seu próprio ritmo, com a opção de uma excursão ao Vale do Danúbio, a cerca de 80 quilômetros de Viena, um dos trechos mais belos do rio (não incluída).",
    },
    {
      day: 4,
      route: "VIENA / BUDAPESTE",
      text:
        "Saída em direção à Hungria e chegada a Budapeste, a Pérola do Danúbio. Visita da cidade dividida entre Buda, com o centro histórico e as embaixadas, e Pest, onde se concentram hotéis e comércio. Passeio pelo bairro do castelo em Buda, com a Igreja de Matias e o Bastião dos Pescadores, de onde se avista um dos panoramas mais bonitos da cidade. Continuação até o Palácio Real e as pontes que ligam as duas margens. Tempo livre ao final da tarde.",
    },
    {
      day: 5,
      route: "BUDAPESTE",
      text:
        "Passeio por Pest e pela Praça dos Heróis, com o Monumento do Milênio, seguindo pela avenida Andrássy, Patrimônio da Humanidade, onde estão a Ópera Estatal da Hungria, o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Visita ao Parlamento húngaro, às margens do Danúbio, e à Basílica de Santo Estêvão. Tarde livre.",
    },
    {
      day: 6,
      route: "BUDAPESTE / BRATISLAVA / PRAGA",
      text:
        "Saída em direção a Praga, capital da República Tcheca, com uma breve parada em Bratislava, capital eslovaca, onde há tempo livre. Já em Praga, passeio pelo centro histórico, conhecendo seus monumentos mais belos e as partes mais antigas da cidade, célebre por suas cervejarias.",
    },
    {
      day: 7,
      route: "PRAGA",
      text:
        "Visita da cidade pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Passeio pela Cidade Pequena pela rua Nerudova, pela Igreja de São Nicolau até a Ponte Carlos, e pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a Igreja de Nossa Senhora de Týn e o monumento a Jan Hus, terminando na Cidade Nova.",
    },
    {
      day: 8,
      route: "PRAGA",
      text:
        "Dia totalmente livre para continuar descobrindo a cidade ou descansar, com a opção de uma excursão a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga.",
    },
    {
      day: 9,
      route: "PRAGA / WIELICZKA / CRACÓVIA",
      text:
        "Saída cedo do hotel em direção a Cracóvia, com um desvio até Wieliczka para visitar as famosas minas de sal, Patrimônio Mundial da UNESCO, com capelas esculpidas em sal, câmaras enormes e lagoas subterrâneas. Chegada a Cracóvia no final da tarde e acomodação.",
    },
    {
      day: 10,
      route: "CRACÓVIA",
      text:
        "Café da manhã e visita da cidade, que fascina por seus tesouros arquitetônicos, como a colina de Wawel, a Igreja de Santa Maria e o centro histórico, com uma das maiores praças medievais da Europa. Visita ao Castelo de Wawel, o mais importante da Polônia. Tarde livre.",
    },
    {
      day: 11,
      route: "CRACÓVIA / CZESTOCHOWA / VARSÓVIA",
      text:
        "Café da manhã e saída em direção a Czestochowa, capital religiosa da Polônia e centro de peregrinação, conhecida pelo santuário de Jasna Góra, onde se encontra a imagem da Virgem Negra. Após a visita, continuação até Varsóvia. Hospedagem.",
    },
    {
      day: 12,
      route: "VARSÓVIA",
      text:
        "Café da manhã e visita da cidade, seguindo pela Rota Real, que inclui o centro histórico, o Parque Real de Lazienki, com seu monumento a Chopin, e a Igreja de Santa Ana. Tarde livre.",
    },
    {
      day: 13,
      route: "VARSÓVIA",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
