import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const capitaisImperiaisHotDeal: LocalGuideGroup = {
  slug: "capitais-imperiais-hot-deal",
  code: "HOTVBP",
  title: "Capitais Imperiais — Hot Deal",
  subtitle: "Viena · Budapeste · Bratislava · Praga",
  intro:
    "A mesma rota das capitais imperiais, em versão mais leve e livre: dias com tempo para caminhar sem roteiro fixo, provar um goulash com calma ou simplesmente observar o Danúbio passar. Viena, Budapeste e Praga em nove dias, com curadoria essencial e espaço generoso para descobertas próprias.",
  highlights: [
    "Panorâmica de Viena com Belvedere, Ringstrasse e Catedral de Santo Estêvão",
    "Dia livre em Viena para explorar no seu próprio ritmo",
    "Bairro do castelo em Buda, com a Igreja de Matias e o Bastião dos Pescadores",
    "Avenida Andrássy e Parlamento húngaro em Budapeste",
    "Castelo de Praga, Ponte Carlos e Praça da Cidade Velha",
    "Dia inteiramente livre em Praga para descansar ou descobrir por conta própria",
  ],
  category: "Hot Deal",
  days: 9,
  nights: 8,
  priceEur: 1495,
  singleSupplementEur: 890,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["Áustria", "Hungria", "Eslováquia", "República Tcheca"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Rooms Prater" },
    { city: "Budapeste", hotel: "NH City" },
    { city: "Praga", hotel: "Occidental Praha 5" },
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
      route: "PRAGA",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
