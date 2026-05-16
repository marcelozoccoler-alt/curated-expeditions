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
    ],
  },
  {
    slug: "tocantins",
    uf: "TO",
    name: "Tocantins",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "Cerrado dramático com cachoeiras, fervedouros e dunas alaranjadas no coração do Jalapão.",
    metaDescription:
      "Tocantins com curadoria Create Travel: Jalapão, fervedouros e cachoeiras.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1605649461784-edc01e9b2d1f?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/jalapao"],
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
    destinationSlugs: ["brasil/lencois-maranhenses"],
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
      "Ceará com curadoria Create Travel: Jericoacoara e Rota das Emoções.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1583003860004-bc4ddb53a8eb?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/jericoacoara",
      "brasil/nordeste/rota-das-emocoes",
    ],
  },
  {
    slug: "pernambuco",
    uf: "PE",
    name: "Pernambuco",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Fernando de Noronha — arquipélago protegido, mergulhos icônicos e o mar mais bonito do Brasil.",
    metaDescription:
      "Pernambuco com curadoria Create Travel: Fernando de Noronha.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/fernando-de-noronha"],
  },
  {
    slug: "bahia",
    uf: "BA",
    name: "Bahia",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Da Chapada Diamantina à península de Maraú, passando por Salvador e Boipeba: a Bahia tem destinos para todos os ritmos.",
    metaDescription:
      "Bahia com curadoria Create Travel: Chapada Diamantina, Salvador, Boipeba e Maraú.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/chapada-diamantina",
      "brasil/nordeste/salvador",
      "brasil/nordeste/boipeba",
      "brasil/nordeste/marau",
    ],
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
    destinationSlugs: ["brasil/chapada-dos-veadeiros"],
  },

  // ===== SUDESTE =====
  {
    slug: "rio-de-janeiro",
    uf: "RJ",
    name: "Rio de Janeiro",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "A cidade maravilhosa em curadoria autoral: vistas, gastronomia, praia e bairros vivos — sem clichês.",
    metaDescription:
      "Rio de Janeiro com curadoria Create Travel: roteiros autorais na cidade maravilhosa.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/sudeste/rio-de-janeiro"],
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
