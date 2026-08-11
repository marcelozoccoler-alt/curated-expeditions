import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const lesteEuropeuHotDeal: LocalGuideGroup = {
  slug: "leste-europeu-hot-deal",
  code: "HOTVB",
  title: "Leste Europeu — Hot Deal",
  subtitle: "Viena · Budapeste · Bratislava · Praga · Dresden · Berlim",
  intro:
    "Onze dias entre quatro países, com dias livres estrategicamente colocados para respirar cada cidade em seu próprio compasso. De Viena a Berlim, passando pela Praga medieval e pela Dresden reconstruída à beira do Elba, esta é a versão Hot Deal do grande roteiro centro-europeu — mesma essência, mais liberdade.",
  highlights: [
    "Panorâmica de Viena com Belvedere, Ringstrasse e Catedral de Santo Estêvão",
    "Dia livre em Viena para explorar no seu próprio ritmo",
    "Avenida Andrássy e Parlamento húngaro em Budapeste",
    "Castelo de Praga, Ponte Carlos e Praça da Cidade Velha",
    "Zwinger, Ópera Semper e Hofkirche na barroca Dresden",
    "Passeio de barco pelo rio Spree e Portão de Brandemburgo em Berlim",
  ],
  category: "Hot Deal",
  days: 11,
  nights: 10,
  priceEur: 1895,
  singleSupplementEur: 1100,
  priceNote:
    "Tarifas em euros para o verão de 2027. Guia acompanhante em espanhol.",
  countries: ["Áustria", "Hungria", "Eslováquia", "República Tcheca", "Alemanha"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Roomz Prater" },
    { city: "Budapeste", hotel: "NH City" },
    { city: "Praga", hotel: "Occidental Praha 5" },
    { city: "Berlim", hotel: "AC Humboldthain Park" },
  ],
  departures: [
    "2027-05-06","2027-05-13","2027-05-27",
    "2027-06-10","2027-06-24",
    "2027-07-08",
    "2027-08-05",
    "2027-09-02","2027-09-09","2027-09-30",
  ],
  itinerary: [
    {
      day: 1,
      route: "VIENA",
      text: "Chegada ao aeroporto, traslado para o hotel e acomodação.",
    },
    {
      day: 2,
      route: "VIENA",
      text: "Após o café da manhã, visita panorâmica pelos principais pontos de Viena: os jardins do Palácio Belvedere, a Ringstrasse com a Ópera Estatal, o Museu de Ciências Naturais, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg. Caminhada pelo centro histórico e visita ao interior da Catedral de Santo Estêvão, ao Relógio Anker e ao bairro judeu, até a Maria-Theresien-Platz. Após a visita panorâmica, há a opção de conhecer o interior do Palácio de Schönbrunn e, à tarde, de assistir a um concerto de música clássica (ambas as atividades não incluídas).",
    },
    {
      day: 3,
      route: "VIENA",
      text: "Dia livre para continuar aproveitando a cidade no seu próprio ritmo.",
    },
    {
      day: 4,
      route: "VIENA / BUDAPESTE",
      text: "Saída em direção à Hungria, rumo à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Na chegada, visita da cidade dividida entre Buda — centro histórico, embaixadas e residências da alta sociedade — e Pest, onde se concentram hotéis e comércio. Passeio pela parte de Buda, pelo bairro do castelo, com a Igreja de Matias e o Bastião dos Pescadores, mirante com a vista mais bonita da cidade. Continuação até o Palácio Real, com vista das pontes que conectam as duas margens. Retorno ao hotel para relaxar no final da tarde.",
    },
    {
      day: 5,
      route: "BUDAPESTE",
      text: "Passeio por Pest e pela Praça dos Heróis, com o Monumento do Milênio e as estátuas dos sete conquistadores. Caminhada pela avenida Andrássy, Patrimônio da Humanidade, com a Ópera Estatal da Hungria, projetada por Miklós Ybl, o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Passagem pelo Parlamento húngaro, monumento emblemático às margens do Danúbio, e pela Basílica de Santo Estêvão, antes do mercado e da zona pedonal. Tempo livre para experimentar a gastronomia local — vale pedir um goulash.",
    },
    {
      day: 6,
      route: "BUDAPESTE / BRATISLAVA / PRAGA",
      text: "Saída em direção a Praga, capital da República Tcheca, com breve parada na capital eslovaca, Bratislava, com tempo livre. Já em Praga, passeio inesquecível pelo centro histórico, conhecendo seus monumentos mais belos e as partes mais antigas da cidade, célebre por sua tradição cervejeira.",
    },
    {
      day: 7,
      route: "PRAGA",
      text: "Visita da cidade pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Descida até a Cidade Pequena pela rua Nerudova, com suas belas casas e símbolos antigos, passando pela Igreja de São Nicolau até a Ponte Carlos, uma das mais antigas da Europa. Caminhada pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus, finalizando na Cidade Nova. Praga também é famosa por sua arte em vidro e porcelana — as marionetes são uma lembrança autêntica.",
    },
    {
      day: 8,
      route: "PRAGA",
      text: "Dia totalmente livre para continuar descobrindo a cidade ou descansar. Hospedagem em Praga.",
    },
    {
      day: 9,
      route: "PRAGA / DRESDEN / BERLIM",
      text: "Saída em direção a Dresden, uma das cidades mais belas da Alemanha, situada às margens do rio Elba e conhecida como a Florença do Elba. Embora os bombardeios aéreos tenham danificado gravemente a cidade, hoje ela volta a brilhar com todo o seu esplendor arquitetônico, com destaque para a joia barroca do Zwinger, a Ópera Semper e a Hofkirche. Continuação da viagem até Berlim e hospedagem.",
    },
    {
      day: 10,
      route: "BERLIM",
      text: "Visita panorâmica da cidade, com destaque para as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, um passeio de barco pelo rio Spree, a melhor forma de admirar a cidade desde a água. À tarde, tempo livre para explorar por conta própria.",
    },
    {
      day: 11,
      route: "BERLIM",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
