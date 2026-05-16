// Brazilian states with destination mapping for hierarchical navigation:
// Brasil → Estados → Destinos do estado → Roteiro

export type Macroregion =
  | "Norte"
  | "Nordeste"
  | "Centro-Oeste"
  | "Sudeste"
  | "Sul";

export interface BrazilState {
  slug: string;
  uf: string; // sigla
  name: string;
  macroregion: Macroregion;
  kicker: string;
  intro: string;
  metaDescription: string;
  heroImageUrl: string;
  /** Destination slugs (from destinations.ts) that belong to this state */
  destinationSlugs: string[];
}

export const brazilStates: BrazilState[] = [
  // ===== NORTE =====
  {
    slug: "amazonas",
    uf: "AM",
    name: "Amazonas",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "O coração da maior floresta tropical do planeta. Lodges sobre o Rio Negro, encontro das águas e silêncio que só Anavilhanas oferece.",
    metaDescription:
      "Destinos no Amazonas com curadoria Create Travel: Anavilhanas, Manaus e Rio Negro.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/amazonia/anavilhanas",
      "brasil/amazonia/manaus-rio-negro",
      "brasil/amazonia/mamiraua-uacari",
      "brasil/amazonia/katerre",
      "brasil/amazonia/festival-parintins",
    ],
  },
  {
    slug: "para",
    uf: "PA",
    name: "Pará",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "Da Amazônia urbana de Belém às praias de água doce de Alter do Chão e o universo cultural da Ilha de Marajó.",
    metaDescription:
      "Destinos no Pará com curadoria Create Travel: Alter do Chão, Belém e Marajó.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/amazonia/alter-do-chao",
      "brasil/amazonia/belem-marajo",
      "brasil/amazonia/kaiara-alter-do-chao",
      "brasil/amazonia/festival-caire",
    ],
  },
  {
    slug: "tocantins",
    uf: "TO",
    name: "Tocantins",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "Cerrado dramático com cachoeiras, fervedouros e dunas alaranjadas no Jalapão — e o Parque do Cantão, onde Amazônia, Cerrado e Pantanal se encontram.",
    metaDescription:
      "Tocantins com curadoria Create Travel: Jalapão e Parque Estadual do Cantão.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1605649461784-edc01e9b2d1f?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/jalapao", "brasil/tocantins/parque-cantao"],
  },
  {
    slug: "roraima",
    uf: "RR",
    name: "Roraima",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "Tepuis pré-cambrianos, savana aberta e o icônico Monte Roraima — um dos trekkings mais espetaculares da América do Sul.",
    metaDescription:
      "Roraima com curadoria Create Travel: Monte Roraima e travessia de tepuis.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/monte-roraima"],
  },

  // ===== NORDESTE =====
  {
    slug: "maranhao",
    uf: "MA",
    name: "Maranhão",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Dunas brancas, lagoas azuis e vilarejos isolados. Os Lençóis Maranhenses são paisagem única no mundo.",
    metaDescription:
      "Maranhão com curadoria Create Travel: Lençóis Maranhenses, Atins e Caburé.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/lencois-maranhenses", "brasil/chapada-das-mesas"],
  },
  {
    slug: "piaui",
    uf: "PI",
    name: "Piauí",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Serra da Capivara: arte rupestre milenar, cânions e silêncio. Patrimônio Mundial em sertão raro de ver.",
    metaDescription:
      "Piauí com curadoria Create Travel: Serra da Capivara e arte rupestre.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1551763073-4d3d4c2f0d3a?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/nordeste/serra-da-capivara"],
  },
  {
    slug: "ceara",
    uf: "CE",
    name: "Ceará",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Vento, dunas e o azul das lagoas. Jericoacoara e a Rota das Emoções definem um Nordeste autêntico e contemplativo.",
    metaDescription:
      "Ceará com curadoria Create Travel: Jericoacoara, Rota das Emoções e curadoria do litoral cearense.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1583003860004-bc4ddb53a8eb?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/litoral-cearense",
      "brasil/jericoacoara",
      "brasil/nordeste/rota-das-emocoes",
      "brasil/nordeste/rota-falesias-fortaleza-natal",
    ],
  },
  {
    slug: "rio-grande-do-norte",
    uf: "RN",
    name: "Rio Grande do Norte",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Pipa, Maracajaú e Galinhos: falésias avermelhadas, mar verde e vilas isoladas no Nordeste mais ventoso.",
    metaDescription:
      "Rio Grande do Norte com curadoria Create Travel: Pipa, Galinhos e litoral potiguar.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1582719471327-19657df0ff67?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/litoral-rio-grande-do-norte",
      "brasil/nordeste/rota-falesias-fortaleza-natal",
    ],
  },
  {
    slug: "paraiba",
    uf: "PB",
    name: "Paraíba",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Coqueirinho, Tambaba e o ponto mais oriental das Américas: um litoral pequeno, charmoso e ainda discreto.",
    metaDescription:
      "Paraíba com curadoria Create Travel: Coqueirinho, Tambaba e litoral paraibano.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1583003860004-bc4ddb53a8eb?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/litoral-paraibano"],
  },
  {
    slug: "pernambuco",
    uf: "PE",
    name: "Pernambuco",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "De Fernando de Noronha ao litoral sul com Porto de Galinhas e Carneiros — mar transparente e história.",
    metaDescription:
      "Pernambuco com curadoria Create Travel: Fernando de Noronha e litoral pernambucano.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/fernando-de-noronha",
      "brasil/litoral-pernambucano",
    ],
  },
  {
    slug: "alagoas",
    uf: "AL",
    name: "Alagoas",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Maragogi, Milagres e Patacho: piscinas naturais e vilas charmosas no Caribe brasileiro.",
    metaDescription:
      "Alagoas com curadoria Create Travel: Maragogi, São Miguel dos Milagres e litoral alagoano.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1568550064743-3f3e4b15bf63?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/litoral-alagoano"],
  },
  {
    slug: "bahia",
    uf: "BA",
    name: "Bahia",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Da Chapada Diamantina à península de Maraú, passando por Salvador, Boipeba e todo o litoral baiano.",
    metaDescription:
      "Bahia com curadoria Create Travel: Chapada Diamantina, Salvador, Boipeba, Maraú e litoral baiano.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/chapada-diamantina",
      "brasil/nordeste/salvador",
      "brasil/nordeste/boipeba",
      "brasil/nordeste/marau",
      "brasil/litoral-baiano",
      "brasil/bahia/abrolhos-costa-descobrimento",
      "brasil/nordeste/canyons-xingo",
    ],
  },
  {
    slug: "sergipe",
    uf: "SE",
    name: "Sergipe",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "O São Francisco em sua forma mais cinematográfica: paredões de até 80 metros nos Cânions do Xingó.",
    metaDescription:
      "Sergipe com curadoria Create Travel: Cânions do Xingó e São Francisco.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1582719471327-19657df0ff67?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/nordeste/canyons-xingo"],
  },

  // ===== CENTRO-OESTE =====
  {
    slug: "mato-grosso",
    uf: "MT",
    name: "Mato Grosso",
    macroregion: "Centro-Oeste",
    kicker: "Centro-Oeste • Brasil",
    intro:
      "Pantanal Norte para fotografar onças e a Amazônia meridional do Cristalino. Fauna abundante e logística cuidada.",
    metaDescription:
      "Mato Grosso com curadoria Create Travel: Pantanal Norte e Cristalino.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/pantanal/norte",
      "brasil/amazonia/cristalino",
      "brasil/mato-grosso/tres-ecossistemas",
      "brasil/mato-grosso/serra-do-roncador",
    ],
  },
  {
    slug: "mato-grosso-do-sul",
    uf: "MS",
    name: "Mato Grosso do Sul",
    macroregion: "Centro-Oeste",
    kicker: "Centro-Oeste • Brasil",
    intro:
      "Águas transparentes de Bonito, flutuações e grutas — e o Pantanal Sul para safáris de onça com infraestrutura sólida.",
    metaDescription:
      "Mato Grosso do Sul com curadoria Create Travel: Bonito e Pantanal Sul.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1559666126-84f389727b9a?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/bonito", "brasil/pantanal/sul"],
  },
  {
    slug: "goias",
    uf: "GO",
    name: "Goiás",
    macroregion: "Centro-Oeste",
    kicker: "Centro-Oeste • Brasil",
    intro:
      "Chapada dos Veadeiros: quartzo, água cristalina e céus extraordinários no coração do cerrado.",
    metaDescription:
      "Goiás com curadoria Create Travel: Chapada dos Veadeiros.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1582719471327-19657df0ff67?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/chapada-dos-veadeiros",
      "brasil/goias/pirenopolis",
    ],
  },

  // ===== SUDESTE =====
  {
    slug: "rio-de-janeiro",
    uf: "RJ",
    name: "Rio de Janeiro",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "A cidade maravilhosa e seu litoral: Búzios, Angra, Paraty e Trindade — sofisticação e natureza.",
    metaDescription:
      "Rio de Janeiro com curadoria Create Travel: cidade do Rio e litoral fluminense.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/sudeste/rio-de-janeiro",
      "brasil/litoral-rio-de-janeiro",
    ],
  },
  {
    slug: "sao-paulo",
    uf: "SP",
    name: "São Paulo",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "Ilhabela, Ubatuba, São Sebastião e o litoral norte: Mata Atlântica e praias-cinema a poucas horas da capital.",
    metaDescription:
      "São Paulo com curadoria Create Travel: litoral paulista, Ilhabela e Ubatuba.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1544413164-5f1b295eb435?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/litoral-sao-paulo"],
  },
  {
    slug: "espirito-santo",
    uf: "ES",
    name: "Espírito Santo",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "Itaúnas, Guarapari e a moqueca capixaba: um litoral pouco explorado e cheio de personalidade.",
    metaDescription:
      "Espírito Santo com curadoria Create Travel: Itaúnas, Guarapari e litoral capixaba.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/litoral-espirito-santo"],
  },

  // ===== SUL =====
  {
    slug: "parana",
    uf: "PR",
    name: "Paraná",
    macroregion: "Sul",
    kicker: "Sul • Brasil",
    intro:
      "Cataratas do Iguaçu — uma das maravilhas naturais do planeta, com hospedagens dentro do parque nacional.",
    metaDescription:
      "Paraná com curadoria Create Travel: Cataratas do Iguaçu.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/sul/cataratas-iguacu"],
  },
  {
    slug: "santa-catarina",
    uf: "SC",
    name: "Santa Catarina",
    macroregion: "Sul",
    kicker: "Sul • Brasil",
    intro:
      "Praia do Rosa, Florianópolis e Bombinhas: Mata Atlântica encontrando o mar com gastronomia açoriana.",
    metaDescription:
      "Santa Catarina com curadoria Create Travel: Praia do Rosa, Floripa e litoral catarinense.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1551845728-6820a30c64e1?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/litoral-santa-catarina"],
  },
  {
    slug: "rio-grande-do-sul",
    uf: "RS",
    name: "Rio Grande do Sul",
    macroregion: "Sul",
    kicker: "Sul • Brasil",
    intro:
      "Cânions dos Aparados da Serra: paredões dramáticos, trilhas suspensas e ar frio em um Brasil pouco visto.",
    metaDescription:
      "Rio Grande do Sul com curadoria Create Travel: Cânions do Sul e Aparados da Serra.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/sul/canions-do-sul"],
  },
];

export const MACROREGION_ORDER: Macroregion[] = [
  "Norte",
  "Nordeste",
  "Centro-Oeste",
  "Sudeste",
  "Sul",
];

export const getBrazilStateBySlug = (slug: string): BrazilState | undefined =>
  brazilStates.find((s) => s.slug === slug);

export const getBrazilStatesByMacroregion = (
  macro: Macroregion
): BrazilState[] => brazilStates.filter((s) => s.macroregion === macro);
