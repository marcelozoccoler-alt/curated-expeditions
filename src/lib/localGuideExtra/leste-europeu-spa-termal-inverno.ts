import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const lesteEuropeuSpaTermalInverno: LocalGuideGroup = {
  slug: "leste-europeu-spa-termal-inverno",
  code: "EETVB-INV",
  title: "Leste Europeu com Spa Termal",
  subtitle: "Viena · Budapeste · Praga · Berlim",
  intro:
    "No frio do inverno centro-europeu, as águas termais de Budapeste ganham um novo sentido: pausa e recolhimento entre um império e outro. Este roteiro conduz de Viena a Berlim, atravessando Bratislava e a bela Dresden, e reserva uma tarde inteira ao Balneário Széchenyi, o maior complexo termal da Europa, antes de seguir para os castelos e ruas medievais de Praga.",
  highlights: [
    "Jardins do Palácio Belvedere e centro histórico de Viena",
    "Balneário Széchenyi, o maior complexo termal da Europa, em Budapeste",
    "Avenida Andrássy e o Parlamento húngaro às margens do Danúbio",
    "Castelo de Praga, Catedral de São Vito e Ponte Carlos",
    "Passagem por Dresden, a 'Florença do Elba'",
    "Portão de Brandemburgo e passeio de barco pelo rio Spree, em Berlim",
  ],
  category: "Premium",
  days: 11,
  nights: 10,
  priceEur: 1895,
  singleSupplementEur: 1100,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Saídas com guia acompanhante em espanhol.",
  countries: ["Áustria", "Hungria", "Eslováquia", "República Tcheca", "Alemanha"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Roomz Prater" },
    { city: "Budapeste", hotel: "Mercure Korona" },
    { city: "Praga", hotel: "Hermitage" },
    { city: "Berlim", hotel: "Sheraton" },
  ],
  departures: ["2027-11-04", "2028-03-02", "2028-03-23"],
  itinerary: [
    {
      day: 1,
      route: "VIENA",
      text: "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao hotel. À noite, encontro com os companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente único, logo terá a sensação de que a Imperatriz Sissi está sentada à sua mesa. As bebidas também estão incluídas.",
    },
    {
      day: 2,
      route: "VIENA",
      text: "Após o café da manhã, visita panorâmica pelos numerosos pontos turísticos de Viena: os jardins do histórico Palácio Belvedere, antigo palácio de verão do Príncipe Eugênio de Savoia, imortalizado pelo artista Giovanni Antonio Canal, a Ringstrasse com a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg. Caminhada pelo centro histórico, visita ao interior da Catedral de Santo Estêvão e passagem pelo Relógio Anker e pelo bairro judeu, até a Maria-Theresien-Platz. Opção de visita ao Palácio de Schönbrunn e concerto de música clássica à noite (ambos não incluídos).",
    },
    {
      day: 3,
      route: "VIENA",
      text: "Dia livre após o café da manhã no hotel reservado. Acomodação.",
    },
    {
      day: 4,
      route: "VIENA / BUDAPESTE",
      text: "Saída em direção à Hungria rumo a Budapeste, a Pérola do Danúbio. Na chegada, visita da cidade dividida entre Buda — centro histórico, embaixadas e residências da alta sociedade — e Pest, onde se concentram hotéis e comércio. Passeio pelo bairro do castelo, com a Igreja de Matias e o Bastião dos Pescadores, mirante com uma das vistas mais bonitas da cidade. Visita ao Palácio Real e às pontes que ligam as duas margens do Danúbio. Retorno ao hotel para descansar ao final da tarde.",
    },
    {
      day: 5,
      route: "BUDAPESTE",
      text: "Passeio por Pest e pela Praça dos Heróis, com o Monumento do Milênio e as estátuas dos sete conquistadores e de seu líder Árpád. Caminhada pela elegante Avenida Andrássy, Patrimônio da Humanidade, onde estão a Ópera Estatal da Hungria, o Museu Casa do Terror, a Universidade de Belas Artes e o Museu Memorial Franz Liszt. Passagem pelo Parlamento húngaro, às margens do Danúbio, e pela Basílica de Santo Estêvão. À tarde, experiência de relaxamento no famoso Balneário Széchenyi, o maior complexo termal da Europa, com numerosas piscinas cobertas e ao ar livre reconhecidas por seus efeitos benéficos (entrada incluída). Retorno ao hotel.",
    },
    {
      day: 6,
      route: "BUDAPESTE / BRATISLAVA / PRAGA",
      text: "Saída em direção a Praga com uma breve parada na capital eslovaca, Bratislava, onde há tempo livre. Uma vez em Praga, passeio turístico inesquecível pelo centro histórico, conhecendo os monumentos mais belos e as partes mais antigas da cidade, berço de algumas das melhores cervejas do mundo.",
    },
    {
      day: 7,
      route: "PRAGA",
      text: "Visita da cidade pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Descida pela Cidade Pequena, pela rua Nerudova, passando pela Igreja de São Nicolau até a Ponte Carlos, uma das mais antigas da Europa, com bela vista sobre o rio. Caminhada pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus, finalizando na Cidade Nova. Praga também é famosa por sua arte em vidro e porcelana, e as marionetes são uma lembrança autêntica de viagem.",
    },
    {
      day: 8,
      route: "PRAGA",
      text: "Dia totalmente livre para continuar descobrindo a cidade ou descansar.",
    },
    {
      day: 9,
      route: "PRAGA / DRESDEN / BERLIM",
      text: "Saída em direção a Dresden, uma das cidades mais belas da Alemanha, situada às margens do rio Elba e conhecida como a 'Florença do Elba'. Destacam-se a joia barroca do Zwinger, a Ópera Semper e a Hofkirche. Continuação da viagem até Berlim e hospedagem.",
    },
    {
      day: 10,
      route: "BERLIM",
      text: "Visita panorâmica da cidade, destacando-se as avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, passeio de barco pelo rio Spree, a melhor forma de admirar a cidade, seus edifícios e pontes desde a água. Tarde livre para explorar por conta própria.",
    },
    {
      day: 11,
      route: "BERLIM",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
