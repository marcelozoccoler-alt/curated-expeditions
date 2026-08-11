import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const capitaisImperiaisSpaTermalInverno: LocalGuideGroup = {
  slug: "capitais-imperiais-spa-termal-inverno",
  code: "EETVBP-INV",
  title: "Capitais Imperiais com Spa Termal",
  subtitle: "Viena · Budapeste · Bratislava · Praga",
  intro:
    "Há um prazer particular em atravessar o antigo império no inverno: os cafés vienenses ficam mais acolhedores, o Danúbio corre escuro entre Buda e Pest e o vapor sobe das piscinas centenárias do Széchenyi. Nove dias sem pressa, com jantar austríaco de boas-vindas, uma tarde inteira dedicada às águas termais de Budapeste e o fechamento em Praga, dourada sob a luz curta da estação.",
  highlights: [
    "Jantar austríaco de boas-vindas no histórico Marchfelderhof, bebidas incluídas",
    "Jardins do Palácio Belvedere e a Ringstrasse vienense em panorâmica",
    "Bastião dos Pescadores e Igreja de Matias, o melhor mirante de Budapeste",
    "Tarde de relaxamento no Balneário Széchenyi, o maior complexo termal da Europa (entrada incluída)",
    "Avenida Andrássy, Patrimônio da Humanidade, e o Parlamento húngaro à beira do Danúbio",
    "Castelo de Hradčany, Catedral de São Vito e Ponte Carlos ao amanhecer de Praga",
  ],
  category: "Primeira",
  days: 9,
  nights: 8,
  priceEur: 1550,
  singleSupplementEur: 770,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol durante todo o circuito.",
  countries: ["Áustria", "Hungria", "Eslováquia", "República Tcheca"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Roomz Prater" },
    { city: "Budapeste", hotel: "Mercure Korona" },
    { city: "Praga", hotel: "Hermitage" },
  ],
  departures: ["2027-11-04", "2028-03-02", "2028-03-23"],
  itinerary: [
    {
      day: 1,
      route: "VIENA",
      text: "Chegada ao aeroporto de Viena, com traslado privativo ao hotel. À noite, o encontro com os companheiros de viagem acontece em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, célebre muito além das fronteiras do país — um ambiente onde parece que a Imperatriz Sissi está sentada à mesa ao lado. Bebidas incluídas. Jantar incluído.",
    },
    {
      day: 2,
      route: "VIENA",
      text: "Visita panorâmica da capital austríaca: os jardins do histórico Palácio Belvedere, residência de verão do príncipe Eugênio de Savoia, com a vista da cidade imortalizada por Canaletto. Seguimos pela Ringstrasse — Ópera Estatal, Museu de Ciências Naturais, Monumento a Maria Teresa, Parlamento, Prefeitura, Teatro Nacional e o Hofburg — e caminhamos pelas ruas do centro histórico até o interior da Catedral de Santo Estêvão, passando pelo Relógio Anker e pelo bairro judeu. Opção de visitar o Palácio de Schönbrunn e, à noite, um concerto de música clássica (não incluídos). Café da manhã incluído.",
    },
    {
      day: 3,
      route: "VIENA",
      text: "Dia livre para viver Viena no próprio ritmo: um café da tarde com Sachertorte, os museus do MuseumsQuartier ou as vitrines da Kärntner Strasse. Hospedagem em Viena. Café da manhã incluído.",
    },
    {
      day: 4,
      route: "VIENA / BUDAPESTE",
      text: "Viagem à Hungria e chegada a Budapeste, a Pérola do Danúbio, dividida entre Buda — centro histórico, embaixadas e casas da alta sociedade — e Pest, das lojas e dos hotéis. Visita ao bairro do castelo, com a Igreja de Matias e o Bastião dos Pescadores, provavelmente a vista mais bonita da cidade, seguindo até o Palácio Real e as pontes que costuram as duas margens. Café da manhã incluído.",
    },
    {
      day: 5,
      route: "BUDAPESTE",
      text: "Manhã por Pest e pela Praça dos Heróis, com o Monumento do Milênio e as estátuas dos sete conquistadores. O percurso continua pela Avenida Andrássy, Patrimônio da Humanidade, com a Ópera Estatal de Miklós Ybl, o Museu Casa do Terror, a Universidade de Belas Artes e o Museu Memorial Franz Liszt, além do Parlamento húngaro, guardião da Santa Coroa. Passagem pela Basílica de Santo Estêvão e pelo mercado antes da zona pedonal. À tarde, experiência de relaxamento no Balneário Széchenyi, o maior complexo termal da Europa, com piscinas cobertas e ao ar livre de águas reconhecidas por seus efeitos benéficos (entrada incluída). Café da manhã incluído.",
    },
    {
      day: 6,
      route: "BUDAPESTE / BRATISLAVA / PRAGA",
      text: "Saída em direção a Praga com parada na capital eslovaca, Bratislava, e tempo livre em seu centro compacto e teatral. Já em Praga, passeio inaugural pelo centro histórico, conhecendo os monumentos mais belos e as partes mais antigas da cidade — berço de algumas das melhores cervejas do mundo, com uma cervejaria para cada dez mil habitantes. Café da manhã incluído.",
    },
    {
      day: 7,
      route: "PRAGA",
      text: "Dia dedicado à cidade: bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Depois dos pátios do castelo, descida pela Cidade Pequena pela rua Nerudova, com suas casas de símbolos antigos, a Igreja de São Nicolau e a Ponte Carlos, uma das mais antigas da Europa. Pela rua Karlova chegamos à Praça da Cidade Velha, com o relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus, terminando na Cidade Nova. Café da manhã incluído.",
    },
    {
      day: 8,
      route: "PRAGA",
      text: "Dia inteiramente livre para seguir descobrindo Praga — o vidro e a porcelana boêmios, as marionetes artesanais, um café à beira do Vltava — ou simplesmente descansar. Café da manhã incluído.",
    },
    {
      day: 9,
      route: "PRAGA",
      text: "Café da manhã no hotel e traslado ao aeroporto de Praga para o embarque de regresso. Fim dos nossos serviços.",
    },
  ],
};
