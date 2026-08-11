import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const capitaisImperiaisTudoIncluido: LocalGuideGroup = {
  slug: "capitais-imperiais-tudo-incluido",
  code: "TIVBP",
  title: "Capitais Imperiais ao Seu Alcance — Tudo Incluído",
  subtitle: "Viena · Budapeste · Bratislava · Praga",
  intro:
    "Três impérios, um só rio de história: o Danúbio costura Viena, Budapeste e Praga em nove dias sem pressa, com todas as visitas e boa parte das refeições já resolvidas. Valsas de Strauss, pontes sobre o Danúbio e vielas medievais se sucedem como cenas de um mesmo sonho centro-europeu, guiado por quem conhece cada esquina.",
  highlights: [
    "Concerto de música clássica em um palacete histórico de Viena",
    "Cruzeiro pelo Vale do Danúbio, Patrimônio da Humanidade",
    "Panorâmica de Budapeste dividida entre Buda e Pest",
    "Avenida Andrássy e as margens do Danúbio em Budapeste",
    "Castelo de Praga, Catedral de São Vito e Ponte Carlos",
    "Excursão a Karlovy Vary, a cidade termal da monarquia austro-húngara",
  ],
  category: "Tudo Incluído",
  days: 9,
  nights: 8,
  priceEur: 2325,
  singleSupplementEur: 880,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Quatro saídas exclusivas com guia brasileiro: 20 de maio, 10 de junho, 2 e 30 de setembro; demais saídas com guia acompanhante em espanhol.",
  countries: ["Áustria", "Hungria", "Eslováquia", "República Tcheca"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Parkhotel Schönbrunn / Roomz Prater" },
    { city: "Budapeste", hotel: "Mercure Korona" },
    { city: "Praga", hotel: "Hermitage" },
  ],
  departures: [
    "2027-04-01","2027-04-08","2027-04-15","2027-04-22","2027-04-29",
    "2027-05-06","2027-05-13","2027-05-20","2027-05-27",
    "2027-06-03","2027-06-10","2027-06-17","2027-06-24",
    "2027-07-01","2027-07-08","2027-07-15","2027-07-22","2027-07-29",
    "2027-08-05","2027-08-12","2027-08-19","2027-08-26",
    "2027-09-02","2027-09-09","2027-09-16","2027-09-23","2027-09-30",
    "2027-10-07","2027-10-14","2027-10-21","2027-10-28",
  ],
  itinerary: [
    {
      day: 1,
      route: "VIENA",
      text: "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, com bebidas incluídas — ambiente único, digno da mesa da imperatriz Sissi.",
    },
    {
      day: 2,
      route: "VIENA",
      text: "Após o café da manhã, visita panorâmica pelos principais pontos de Viena: os jardins do Palácio Belvedere, a Ringstrasse com a Ópera Estatal, o Museu de Ciências Naturais, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg. Caminhada pelo centro histórico e visita ao interior da Catedral de Santo Estêvão, ao Relógio Anker e ao bairro judeu, até a Maria-Theresien-Platz. Em seguida, visita ao interior do Palácio de Schönbrunn, residência de verão dos Habsburgo. À noite, concerto de música clássica em um dos palacetes mais prestigiados da cidade.",
    },
    {
      day: 3,
      route: "VIENA",
      text: "Excursão de dia completo ao Vale do Danúbio, Patrimônio Cultural da Humanidade. Passeio por Dürnstein, pitoresco povoado medieval onde o rei Ricardo Coração de Leão esteve prisioneiro, seguido de um relaxante cruzeiro pelo Danúbio entre vinhedos e vilarejos, com almoço servido a bordo. Desembarque em Melk para visitar sua imponente abadia beneditina, joia do barroco austríaco. Retorno a Viena ao final do dia.",
    },
    {
      day: 4,
      route: "VIENA / BUDAPESTE",
      text: "Saída em direção à Hungria, atravessando a paisagem a caminho de Budapeste, a Pérola do Danúbio. Na chegada, visita da cidade dividida entre Buda — centro histórico, embaixadas e residências da alta sociedade — e Pest, onde se concentram hotéis e comércio. Passeio pela parte de Buda, pelo bairro do castelo, com a Igreja de Matias e o Bastião dos Pescadores, mirante com a vista mais bonita da cidade. Visita ao Palácio Real e às pontes sobre o Danúbio. Almoço no hotel. Hospedagem.",
    },
    {
      day: 5,
      route: "BUDAPESTE",
      text: "Passeio por Pest e pela Praça dos Heróis, com o Monumento do Milênio e as estátuas dos sete conquistadores. Caminhada pela elegante avenida Andrássy, Patrimônio da Humanidade, onde estão a Ópera Estatal da Hungria, o Museu Casa do Terror, a Universidade de Belas Artes e o Museu Memorial Franz Liszt. Visita ao edifício do Parlamento húngaro, às margens do Danúbio, e à Basílica de Santo Estêvão, antes de um tempo livre pelo mercado e pela zona pedonal. À noite, jantar no hotel.",
    },
    {
      day: 6,
      route: "BUDAPESTE / BRATISLAVA / PRAGA",
      text: "Saída em direção a Praga com parada em Bratislava, capital da Eslováquia, onde há almoço e tempo livre pelo encantador centro histórico. Continuação até Praga e hospedagem. À tarde, passeio pela histórica rota de coroação dos reis, descobrindo alguns dos lugares mais emblemáticos da cidade.",
    },
    {
      day: 7,
      route: "PRAGA",
      text: "Visita da cidade pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Descida até a Cidade Pequena pela rua Nerudova, passando pela Igreja de São Nicolau e cruzando a Ponte Carlos, com belas vistas sobre o rio. Continuação até a Praça da Cidade Velha, com seu relógio astronômico e a igreja de Nossa Senhora de Týn, finalizando na Cidade Nova. Almoço em uma cervejaria típica, com degustação da gastronomia local. À tarde, passeio pelo bairro judeu e pela histórica Sinagoga Velha-Nova, seguido de Malá Strana, com a igreja de São Nicolau e o célebre Menino Jesus de Praga.",
    },
    {
      day: 8,
      route: "PRAGA",
      text: "Excursão a Karlovy Vary, a elegante cidade termal da antiga monarquia austro-húngara. Almoço em um restaurante típico antes de retornar a Praga.",
    },
    {
      day: 9,
      route: "PRAGA",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
