import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const laponiaRovaniemiAuroraBoreal2027: LocalGuideGroup = {
  slug: "laponia-rovaniemi-aurora-boreal-janeiro-2027",
  code: "LAP-ROV27",
  title: "Lapônia Finlandesa: Rovaniemi & Aurora Boreal",
  subtitle: "Rovaniemi · Fazenda de renas · Sauna finlandesa · Vila do Papai Noel",
  intro:
    "Em janeiro, Rovaniemi vive sob uma luz azulada que dura poucas horas e um silêncio que só a neve sabe fazer. É ali, no Círculo Polar Ártico, que esta escapada Create Signature reúne o essencial da Lapônia: um dia inteiro com um criador de renas, trenó entre pinheiros cobertos de gelo, uma noite privada de sauna finlandesa à beira do lago com jantar de chef — e, sempre que o céu permitir, a caçada à aurora boreal.",
  highlights: [
    "Visita privada a uma fazenda de criação de renas, com passeio de trenó e almoço típico",
    "Noite privada de sauna finlandesa tradicional, hot tub ao ar livre e jantar lapão preparado por chef",
    "Dia na Vila do Papai Noel, sobre a linha do Círculo Polar Ártico",
    "Caçada à aurora boreal (3–4 h) e uma saída adicional caso a aurora ainda não tenha sido vista",
    "Traslados privados e hotel no centro de Rovaniemi com café da manhã",
  ],
  category: "Premium",
  days: 4,
  nights: 3,
  priceEur: 0,
  priceNote:
    "Forma de pagamento: 30% de entrada e saldo em 3 parcelas no cartão de crédito. Saída de Lisboa em 23/01/2027, com voos via Amsterdã incluídos (item pessoal, bagagem de mão e proteção de viagem). O aéreo Brasil–Lisboa é cotado à parte pela Create Travel. Experiências com guias locais.",
  countries: ["Finlândia"],
  area: "Europa",
  hotels: [{ city: "Rovaniemi", hotel: "Scandic Rovaniemi City (Standard Room)" }],
  departures: ["2027-01-23"],
  itinerary: [
    {
      day: 1,
      route: "LISBOA / AMSTERDÃ / ROVANIEMI",
      text: "Voo de Lisboa a Rovaniemi via Amsterdã, com chegada no fim da tarde. Traslado privado ao Scandic Rovaniemi City, no centro da cidade, e acomodação. Nas noites com condições favoráveis, saída para a caçada à aurora boreal.",
    },
    {
      day: 2,
      route: "ROVANIEMI · RENAS E SAUNA FINLANDESA",
      text: "Dia dedicado a uma fazenda de criação de renas, com passeio de trenó pela floresta nevada e refeição típica na quinta. À noite, experiência privada de bem-estar à beira de um lago, longe das multidões: sauna finlandesa tradicional, hot tub ao ar livre — com chance de avistar a aurora se o céu ajudar — e jantar com pratos da Lapônia preparado por chef privado em uma cabana acolhedora.",
    },
    {
      day: 3,
      route: "ROVANIEMI · VILA DO PAPAI NOEL",
      text: "Dia dedicado à Vila do Papai Noel (Santa Claus Village), sobre a linha do Círculo Polar Ártico, com seu correio, casas de madeira e a atmosfera encantada do inverno lapão.",
    },
    {
      day: 4,
      route: "ROVANIEMI / AMSTERDÃ / LISBOA",
      text: "Café da manhã e tempo livre. Traslado privado ao aeroporto e voo de regresso a Lisboa via Amsterdã.",
    },
  ],
};
