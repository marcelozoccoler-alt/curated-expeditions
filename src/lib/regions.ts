// Short SEO landing pages for regions and places — mapped to destinations.
// Each entry produces a /:regionSlug page (e.g. /amazonia, /pantanal, /japao).

export interface RegionFAQ {
  q: string;
  a: string;
}

export interface RegionSection {
  title: string;
  body: string;
}

export interface Region {
  slug: string;
  label: string;
  kicker: string; // tag above the title
  intro: string; // 2–3 sentences for hero + meta description
  metaDescription: string;
  heroImageUrl: string;
  destinationSlugs: string[]; // refers to destinations.ts slug field
  /** Optional long-form SEO content — rendered only when present. */
  longIntro?: string;
  whatToDo?: RegionSection[];
  bestTime?: string;
  howToGet?: string;
  whereToStay?: string;
  faqs?: RegionFAQ[];
}

export const regions: Region[] = [
  // ===== BRASIL =====
  {
    slug: "amazonia",
    label: "Amazônia",
    kicker: "Brasil",
    intro:
      "Amazônia em estado de contemplação: ilhas, canais e silêncio com profundidade. A Create Travel desenha imersões com ética ambiental, conforto real e guias que sabem ler a floresta.",
    metaDescription:
      "Pacote de viagem para a Amazônia com curadoria Create Travel: lodges em Anavilhanas, Manaus, Rio Negro e Alter do Chão. Roteiros sob medida, ética ambiental e suporte 24/7.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/amazonia/anavilhanas",
      "brasil/amazonia/manaus-rio-negro",
      "brasil/amazonia/alter-do-chao",
    ],
    longIntro:
      "Um pacote de viagem para a Amazônia pode ser muito mais do que um passeio de barco em Manaus. O bioma abriga alguns dos ecossistemas mais ricos do planeta — o arquipélago de Anavilhanas no Rio Negro, o Encontro das Águas, as praias fluviais de Alter do Chão no Tapajós e comunidades ribeirinhas que só podem ser visitadas com operadores credenciados. Na Create Travel desenhamos roteiros pela Amazônia brasileira sob medida, hospedando em lodges com estrutura real e ética ambiental, com guias naturalistas de nascença. Trabalhamos com Anavilhanas, Manaus e Rio Negro, Alter do Chão (PA) e extensões pela Amazônia peruana quando faz sentido.",
    whatToDo: [
      {
        title: "Lodges no Rio Negro e Anavilhanas",
        body: "Hospedagens sobre palafitas ou barcos-hotel em meio ao maior arquipélago fluvial do mundo. Focagem noturna de jacarés, trilhas na mata, pesca esportiva de tucunaré (temporada) e visitas éticas a comunidades ribeirinhas.",
      },
      {
        title: "Manaus e Encontro das Águas",
        body: "Base logística com voos diretos das capitais. Teatro Amazonas, mercado municipal, gastronomia amazônica autoral e o clássico Encontro das Águas entre Rio Negro e Solimões.",
      },
      {
        title: "Alter do Chão e Rio Tapajós",
        body: "As praias fluviais mais bonitas do Brasil (a 'Caribe amazônico'), Floresta Nacional do Tapajós, comunidades quilombolas e ipês em flor entre agosto e outubro.",
      },
      {
        title: "Observação de fauna e botos-cor-de-rosa",
        body: "Passeios em canoa silenciosa ao amanhecer, safári fotográfico de macacos, preguiças, jacarés e mais de 400 espécies de aves. Interação ética com botos-cor-de-rosa em áreas selecionadas.",
      },
    ],
    bestTime:
      "A melhor época depende da experiência. De junho a novembro é o período de águas baixas: praias fluviais em Alter do Chão, trilhas terrestres mais acessíveis, melhor observação de fauna em terra. De dezembro a maio é a cheia: florestas alagadas navegáveis de canoa, silêncio absoluto e a paisagem amazônica clássica dos igapós. Setembro e outubro combinam bem: águas baixas no Tapajós + Encontro das Águas ainda visível.",
    howToGet:
      "O acesso principal é pelo Aeroporto Internacional Eduardo Gomes (MAO) em Manaus, com voos diretos de todas as capitais. Para Alter do Chão, voo até Santarém (STM) e transfer terrestre de 30 min. De Manaus para os lodges de Anavilhanas, transfer terrestre + fluvial (2–3h) organizado pelo próprio lodge. Coordenamos todo o encadeamento aéreo-terrestre-fluvial.",
    whereToStay:
      "Selecionamos lodges premium sobre o Rio Negro (bangalôs com varanda para a floresta), barcos-hotel para roteiros itinerantes, e pousadas-charme em Alter do Chão pé-na-areia do rio. Em Manaus, hotéis-base para 1 noite de conexão. Só trabalhamos com operações que praticam turismo de baixo impacto e remuneram comunidades locais.",
    faqs: [
      {
        q: "Quantos dias ficar na Amazônia?",
        a: "Para uma experiência real de lodge no Rio Negro, mínimo 4 noites. Roteiro combinando Manaus + Anavilhanas + Alter do Chão pede 8 a 10 noites. Extensões para a Amazônia peruana (Iquitos, Puerto Maldonado) somam mais 4 a 5 noites.",
      },
      {
        q: "Qual a melhor época para um pacote de viagem para a Amazônia?",
        a: "Junho a novembro para praias fluviais, trilhas e observação de fauna em terra (águas baixas). Dezembro a maio para florestas alagadas navegáveis e silêncio absoluto (cheia). Setembro e outubro são o meio-termo ideal.",
      },
      {
        q: "É seguro viajar para a Amazônia com crianças?",
        a: "Sim, desde que hospedado em lodges estruturados. Trabalhamos com operações que têm equipe médica de plantão, atividades adaptadas por idade e rota de evacuação para Manaus em caso de necessidade. Vacina de febre amarela é obrigatória (10 dias antes da viagem).",
      },
      {
        q: "Como funciona um pacote para a Amazônia na Create Travel?",
        a: "Não vendemos pacotes prontos. A partir de uma conversa por WhatsApp levantamos período, perfil, apetite por conforto vs. aventura. Enviamos uma proposta sob medida com lodge selecionado, voos, transfers fluviais, guias privativos e suporte 24/7 — com um único travel designer do briefing ao pós-viagem.",
      },
      {
        q: "Precisa de guia para visitar a Amazônia?",
        a: "Sim, obrigatoriamente. Toda a experiência acontece com guias naturalistas locais dos lodges — não é um destino para explorar por conta. É justamente o guia que transforma a floresta em algo compreensível.",
      },
    ],
  },
  {
    slug: "pantanal",
    label: "Pantanal",
    kicker: "Brasil",
    intro:
      "A maior planície alagável do planeta — paisagens abertas, fauna abundante e a melhor janela do Brasil para fotografar onças. Selecionamos lodges com saídas guiadas e ética animal sólida.",
    metaDescription:
      "Pantanal Norte e Sul com curadoria Create Travel: melhores lodges, época para onças e roteiros sob medida.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/pantanal/norte", "brasil/pantanal/sul"],
  },
  {
    slug: "fernando-de-noronha",
    label: "Fernando de Noronha",
    kicker: "Brasil",
    intro:
      "Arquipélago protegido com mar transparente, mergulho excepcional e privacidade. Curadoria de hospedagem, transfers e experiências para quem quer Noronha sem o ritmo turístico.",
    metaDescription:
      "Roteiros em Fernando de Noronha com curadoria Create Travel: melhores hospedagens, época e mergulhos.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1516815231560-8f41ec531527?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/fernando-de-noronha"],
  },
  {
    slug: "lencois-maranhenses",
    label: "Lençóis Maranhenses",
    kicker: "Brasil",
    intro:
      "Dunas brancas e lagoas azuis em janelas curtas do ano. Roteiros que combinam o encanto único dos Lençóis com extensão para Atins, Caburé e o Delta do Parnaíba.",
    metaDescription:
      "Lençóis Maranhenses com curadoria Create Travel: melhor época para as lagoas, Atins, Caburé e Delta do Parnaíba.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/lencois-maranhenses"],
  },
  {
    slug: "jalapao",
    label: "Jalapão",
    kicker: "Brasil",
    intro:
      "Cerrado dramático com cachoeiras, fervedouros e dunas alaranjadas. Logística cuidada para uma das aventuras mais autênticas do Brasil.",
    metaDescription:
      "Jalapão com curadoria Create Travel: roteiros, melhor época e logística cuidada para o coração do cerrado.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1605649461784-edc01e9b2d1f?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/jalapao"],
  },
  {
    slug: "chapada-diamantina",
    label: "Chapada Diamantina",
    kicker: "Brasil",
    intro:
      "Cânions, grutas e cachoeiras na Bahia profunda. Roteiros com guias locais e hospedagens charmosas em Lençóis e Vale do Capão.",
    metaDescription:
      "Chapada Diamantina com curadoria Create Travel: trilhas, vales, grutas e melhores hospedagens.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/chapada-diamantina"],
  },
  {
    slug: "chapada-dos-veadeiros",
    label: "Chapada dos Veadeiros",
    kicker: "Brasil",
    intro:
      "Quartzo, água cristalina e céus extraordinários no coração do cerrado. Curadoria com pousadas autorais em São Jorge e Alto Paraíso.",
    metaDescription:
      "Chapada dos Veadeiros com curadoria Create Travel: cachoeiras, trilhas e hospedagens autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1566159196870-56cd084e1c10?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/chapada-dos-veadeiros"],
  },
  {
    slug: "bonito",
    label: "Bonito",
    kicker: "Brasil",
    intro:
      "Águas cristalinas, flutuações inesquecíveis e cavernas. Combinamos Bonito com Pantanal Sul para uma narrativa Brasil profunda.",
    metaDescription:
      "Bonito (MS) com curadoria Create Travel: flutuações, grutas e combinação com Pantanal Sul.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1583244532610-2a234e0d0f10?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/bonito"],
  },
  {
    slug: "jericoacoara",
    label: "Jericoacoara",
    kicker: "Brasil",
    intro:
      "Vento, dunas, lagoas e pôr do sol icônico. Curadoria de pousadas-pé na areia e roteiros de carro pelas praias do Ceará.",
    metaDescription:
      "Jericoacoara com curadoria Create Travel: melhores pousadas, kite e roteiros pelas praias do Ceará.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1543248939-ff40856f65d4?w=1920&h=1080&fit=crop",
    destinationSlugs: ["brasil/jericoacoara"],
  },

  // ===== ÁFRICA =====
  {
    slug: "tanzania",
    label: "Tanzânia",
    kicker: "África",
    intro:
      "Berço do safári clássico: Serengeti, Ngorongoro e Zanzibar. Curadoria de reservas privadas, voos charter e a clássica combinação bush + beach.",
    metaDescription:
      "Tanzânia com curadoria Create Travel: Serengeti, Ngorongoro e Zanzibar. Safári autoral e ético.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "africa/tanzania/serengeti",
      "africa/tanzania/ngorongoro",
      "africa/zanzibar",
    ],
  },
  {
    slug: "serengeti",
    label: "Serengeti",
    kicker: "Tanzânia",
    intro:
      "A grande migração e densidade de fauna sem paralelo. Selecionamos camps em reservas privadas com guias mestres e ética animal real.",
    metaDescription:
      "Safári no Serengeti com curadoria Create Travel: melhor época para a migração, camps e roteiros sob medida.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/tanzania/serengeti"],
  },
  {
    slug: "ngorongoro",
    label: "Ngorongoro",
    kicker: "Tanzânia",
    intro:
      "A cratera mais célebre da África: paisagem espetacular e altíssima densidade de fauna em um único cenário.",
    metaDescription:
      "Ngorongoro com curadoria Create Travel: lodges na borda, melhor época e combinações de safári.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/tanzania/ngorongoro"],
  },
  {
    slug: "zanzibar",
    label: "Zanzibar",
    kicker: "Tanzânia",
    intro:
      "Mar turquesa, vento de monção e Stone Town como herança cultural. A clássica praia depois do safári.",
    metaDescription:
      "Zanzibar com curadoria Create Travel: melhores resorts, mergulho e combinação com Serengeti.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1589552416260-f5deca0c46d4?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/zanzibar"],
  },
  {
    slug: "masai-mara",
    label: "Masai Mara",
    kicker: "Quênia",
    intro:
      "A ponta queniana do ecossistema do Serengeti, palco das travessias do rio Mara entre Jul e Out. Camps clássicos e cultura Maasai.",
    metaDescription:
      "Masai Mara com curadoria Create Travel: melhor época, camps clássicos e safári autoral.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/quenia/masai-mara"],
  },
  {
    slug: "quenia",
    label: "Quênia",
    kicker: "África",
    intro:
      "Mara, lagos do vale do Rift e costa do Índico. Roteiros que combinam safári, cultura e descanso.",
    metaDescription:
      "Quênia com curadoria Create Travel: Masai Mara, costa e roteiros de safári autoral.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/quenia/masai-mara"],
  },
  {
    slug: "africa-do-sul",
    label: "África do Sul",
    kicker: "África",
    intro:
      "Cidade do Cabo, rotas de vinho e safári no Kruger. Excelente porta de entrada para a África com infraestrutura impecável.",
    metaDescription:
      "África do Sul com curadoria Create Travel: Cidade do Cabo, vinhedos e safári no Kruger.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/africa-do-sul"],
  },
  {
    slug: "namibia",
    label: "Namíbia",
    kicker: "África",
    intro:
      "Sossusvlei, Skeleton Coast e Etosha: deserto mais antigo do mundo, vida selvagem e céus extraordinários.",
    metaDescription:
      "Namíbia com curadoria Create Travel: Sossusvlei, Etosha e Skeleton Coast em roteiros autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1547985205-ee1d50ee5f78?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/namibia"],
  },
  {
    slug: "botsuana",
    label: "Botsuana",
    kicker: "África",
    intro:
      "Delta do Okavango: água, fauna e exclusividade. Camps de baixíssima lotação operados por algumas das melhores casas de safári do mundo.",
    metaDescription:
      "Botsuana e Delta do Okavango com curadoria Create Travel: camps exclusivos e safári premium.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/botsuana/okavango"],
  },
  {
    slug: "ruanda",
    label: "Ruanda",
    kicker: "África",
    intro:
      "Encontros raros com gorilas-de-montanha em florestas vulcânicas. Uma das experiências mais transformadoras do continente.",
    metaDescription:
      "Ruanda com curadoria Create Travel: trekking de gorilas e roteiros autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/ruanda/gorilas"],
  },
  {
    slug: "marrocos",
    label: "Marrocos",
    kicker: "África",
    intro:
      "Marrakech, Fès, Atlas e o deserto do Saara. Cultura, riads autorais e gastronomia em camadas.",
    metaDescription:
      "Marrocos com curadoria Create Travel: Marrakech, Fès, Atlas, Saara e melhores riads.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1539020140153-e479b8c5ee47?w=1920&h=1080&fit=crop",
    destinationSlugs: ["africa/marrocos"],
  },

  // ===== AMÉRICA DO SUL =====
  {
    slug: "patagonia",
    label: "Patagônia",
    kicker: "América do Sul",
    intro:
      "Torres del Paine, Fitz Roy e geleiras. A ponta sul do continente em sua escala mais cinematográfica.",
    metaDescription:
      "Patagônia (Chile e Argentina) com curadoria Create Travel: lodges, trilhas e roteiros sob medida.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=1920&h=1080&fit=crop",
    destinationSlugs: ["america-do-sul/patagonia"],
  },
  {
    slug: "atacama",
    label: "Atacama",
    kicker: "Chile",
    intro:
      "Geyser, salares e céus Bortle 1. A combinação ideal com Patagônia para uma narrativa Chile completa.",
    metaDescription:
      "Atacama com curadoria Create Travel: hotéis, geyser e astronomia em roteiro autoral.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1572979517077-2b06ba0d2c3d?w=1920&h=1080&fit=crop",
    destinationSlugs: ["america-do-sul/chile/atacama"],
  },
  {
    slug: "chile",
    label: "Chile",
    kicker: "América do Sul",
    intro:
      "Atacama no norte, Patagônia no sul. Um país-narrativa com as duas paisagens mais marcantes do continente sul-americano.",
    metaDescription:
      "Pacote de viagem para o Chile com curadoria Create Travel: Atacama, Patagônia, Santiago e Valparaíso. Roteiros sob medida, hospedagens autorais e suporte 24/7.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "america-do-sul/patagonia",
      "america-do-sul/chile/atacama",
    ],
    longIntro:
      "Um pacote de viagem para o Chile é, na prática, dois países em um. No norte, o Deserto do Atacama entrega o céu mais estrelado do planeta, salares, gêiseres, lagoas altiplânicas e hotéis-boutique com programa all-inclusive de excursões. No sul, a Patagônia chilena — Torres del Paine, Puerto Natales, Carretera Austral — oferece uma das paisagens mais impressionantes do mundo, com lodges que combinam luxo e imersão. No meio, Santiago e Valparaíso trazem gastronomia premiada, vinícolas em Colchagua e Casablanca, e a arte de rua de Valparaíso. Na Create Travel desenhamos roteiros sob medida pelo Chile unindo Atacama + Patagônia (a combinação clássica de 10–14 noites), extensões pela Ilha de Páscoa e viagens gastronômicas por vinhas premiadas.",
    whatToDo: [
      {
        title: "Deserto do Atacama (norte)",
        body: "San Pedro de Atacama como base para gêiseres del Tatio, Vale da Lua, Salar de Atacama, lagoas altiplânicas Miscanti e Miñiques e observação astronômica em céus Bortle 1. Hotéis com programa de excursões incluído.",
      },
      {
        title: "Patagônia chilena e Torres del Paine",
        body: "Trekking do W ou trilhas curtas de dia, avistamento de pumas, glaciar Grey, hospedagem em lodges premium dentro ou na borda do parque. Combinações com El Calafate (Argentina) via fronteira terrestre.",
      },
      {
        title: "Santiago e vinícolas",
        body: "Base de chegada e conexão. Bairros Lastarria e Bellavista, gastronomia autoral, day-trips para vinícolas em Colchagua (Montes, Lapostolle) e Casablanca (vinhos brancos costeiros).",
      },
      {
        title: "Valparaíso e Viña del Mar",
        body: "Cidade-porto UNESCO com arte de rua icônica, funiculares históricos e restaurantes autorais. Ideal para 1 ou 2 noites como extensão de Santiago.",
      },
      {
        title: "Carretera Austral e Chiloé",
        body: "Para viajantes com mais tempo (12+ noites): fiordes, geleiras, Marble Caves em Puerto Río Tranquilo e a cultura insular de Chiloé. Roteiros autorais de road trip com motorista.",
      },
    ],
    bestTime:
      "A melhor época depende da combinação. O Atacama é destino de ano inteiro (dias secos e ensolarados sempre; noites frias no inverno de junho a agosto). A Patagônia chilena tem janela restrita: novembro a março (verão austral), com dezembro-fevereiro no pico. Setembro-outubro e abril entregam bons preços com clima ainda estável. Vinícolas colhem em março-abril (época de vindima). Para combinar Atacama + Patagônia, o ideal é novembro a março.",
    howToGet:
      "Voos diretos do Brasil para Santiago (SCL) a partir de SP, RJ, POA, BSB e outras capitais — 4 a 5 horas de voo. De Santiago, voos domésticos para Calama (CJC, aeroporto do Atacama, 2h) e Punta Arenas (PUQ, portão da Patagônia, 3h30) + transfer terrestre. Coordenamos todo o encadeamento aéreo doméstico e transfers privativos.",
    whereToStay:
      "No Atacama indicamos hotéis com programa all-inclusive de excursões, guias bilíngues e observatório próprio. Em Torres del Paine, lodges premium dentro ou na fronteira do parque, com trilhas guiadas incluídas. Em Santiago, hotéis-boutique em Lastarria ou Vitacura. Em Valparaíso, casarões restaurados nos cerros com vista para a baía. Toda a curadoria é feita a partir do briefing.",
    faqs: [
      {
        q: "Quantos dias ficar no Chile?",
        a: "Para o clássico Atacama + Patagônia, 10 a 14 noites. Só Atacama, 4 a 5 noites. Só Patagônia (Torres del Paine), 5 a 7 noites. Incluindo Santiago, vinícolas e Valparaíso, adicione 3 a 4 noites.",
      },
      {
        q: "Qual a melhor época para um pacote de viagem para o Chile?",
        a: "Novembro a março é a janela ideal para combinar Atacama + Patagônia (verão austral, clima estável em Torres del Paine). Setembro-outubro e abril são meia-estação com bons preços. O Atacama funciona o ano inteiro; a Patagônia praticamente fecha entre maio e agosto.",
      },
      {
        q: "É melhor visitar o Atacama ou a Patagônia?",
        a: "Depende. Atacama entrega deserto, astronomia e conforto de hotel — mais leve, ideal para primeira viagem ou casais. Patagônia entrega trekking, glaciares e paisagem monumental — pede mais preparo físico. A resposta clássica é fazer as duas em um único roteiro, de norte para sul.",
      },
      {
        q: "Preciso de visto para o Chile?",
        a: "Brasileiros não precisam de visto para viagens de turismo de até 90 dias. Basta passaporte ou RG válido (com foto recente e em bom estado). Vacina de febre amarela recomendada mas não obrigatória.",
      },
      {
        q: "Como funciona um pacote de viagem para o Chile na Create Travel?",
        a: "Não vendemos pacotes prontos. A partir de uma conversa por WhatsApp levantamos período, perfil e apetite por atividade. Enviamos uma proposta sob medida com hotéis, voos domésticos, transfers privativos, excursões e guias bilíngues — com suporte 24/7 durante toda a viagem e um único travel designer do briefing ao pós-viagem.",
      },
      {
        q: "Vale a pena combinar Chile e Argentina?",
        a: "Sim — é uma combinação natural. Torres del Paine (Chile) e El Calafate/El Chaltén (Argentina) ficam a 4h de estrada com fronteira tranquila. Roteiros combinados pedem 12 a 16 noites e entregam as duas Patagônias em uma viagem.",
      },
    ],
  },
  {
    slug: "galapagos",
    label: "Galápagos",
    kicker: "Equador",
    intro:
      "Arquipélago vulcânico icônico para naturalistas. Cruzeiros pequenos com guias especializados e janelas exclusivas.",
    metaDescription:
      "Galápagos com curadoria Create Travel: cruzeiros pequenos, ilhas e melhor época.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1582038362281-8e6b6e3c5b54?w=1920&h=1080&fit=crop",
    destinationSlugs: ["america-do-sul/equador/galapagos"],
  },
  {
    slug: "peru",
    label: "Peru",
    kicker: "América do Sul",
    intro:
      "Cusco, Vale Sagrado, Machu Picchu e a Amazônia peruana. Cultura andina viva e gastronomia premiada.",
    metaDescription:
      "Peru com curadoria Create Travel: Cusco, Vale Sagrado, Machu Picchu e Amazônia.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&h=1080&fit=crop",
    destinationSlugs: ["america-do-sul/peru/cusco-vale-sagrado"],
  },
  {
    slug: "machu-picchu",
    label: "Machu Picchu",
    kicker: "Peru",
    intro:
      "A cidadela inca em sua versão mais cuidada: trens premium, hospedagens em Aguas Calientes e guias arqueólogos.",
    metaDescription:
      "Machu Picchu com curadoria Create Travel: trens premium, melhor época e logística sem ruído.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=1920&h=1080&fit=crop",
    destinationSlugs: ["america-do-sul/peru/cusco-vale-sagrado"],
  },
  {
    slug: "salar-de-uyuni",
    label: "Salar de Uyuni",
    kicker: "Bolívia",
    intro:
      "O maior deserto de sal do planeta. Em estação chuvosa, vira um espelho do céu — paisagem rara em qualquer lugar do mundo.",
    metaDescription:
      "Salar de Uyuni com curadoria Create Travel: melhor época, hotéis de sal e fotografia.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1549144511-f099e773c147?w=1920&h=1080&fit=crop",
    destinationSlugs: ["america-do-sul/bolivia/salar-uyuni"],
  },

  // ===== EUROPA =====
  {
    slug: "islandia",
    label: "Islândia",
    kicker: "Europa",
    intro:
      "Aurora boreal, geleiras, fontes termais e vulcões. A Ring Road com paradas autorais e refúgios remotos.",
    metaDescription:
      "Islândia com curadoria Create Travel: Ring Road, aurora boreal, fontes termais e refúgios remotos.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1504541899037-08882f9efff8?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/islandia"],
  },
  {
    slug: "noruega",
    label: "Noruega",
    kicker: "Europa",
    intro:
      "Fiordes vertiginosos, trens panorâmicos e Lofoten. Paisagem operática de norte a sul.",
    metaDescription:
      "Noruega com curadoria Create Travel: fiordes, Lofoten e roteiros de aurora boreal.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/noruega/fiordes"],
  },
  {
    slug: "italia",
    label: "Itália",
    kicker: "Europa",
    intro:
      "Toscana, Costa Amalfitana, Sul da Itália e cidades de arte. Vinhedos, mesa autoral, agriturismos e propriedades históricas.",
    metaDescription:
      "Pacote de viagem para a Itália com curadoria Create Travel: Toscana, Costa Amalfitana, Roma, Florença, Veneza e Sul da Itália. Roteiros sob medida, agriturismos autorais e suporte 24/7.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/italia/toscana"],
    longIntro:
      "Um pacote de viagem para a Itália pede escolha — o país tem mais camadas do que uma única viagem comporta. O circuito clássico une Roma, Florença e Veneza, com extensão pela Toscana (Chianti, Val d'Orcia, San Gimignano) para agriturismos, vinícolas e ritmo lento. O Sul da Itália entrega a Costa Amalfitana (Positano, Ravello, Amalfi), a Puglia dos trulli e Capri como refúgio insular. No norte, os lagos italianos (Como, Garda, Maggiore) e Milão fecham o mapa. Na Create Travel desenhamos roteiros sob medida pela Itália unindo cidade + campo + costa no ritmo certo, com hospedagens autorais, motoristas privativos e experiências raras — vindima em vinícola de família, aulas de pasta com nonna, veleiro privativo na Amalfi.",
    whatToDo: [
      {
        title: "Roma, Florença e Veneza",
        body: "O clássico circuito de arte italiana: Coliseu e Vaticano em Roma, Uffizi e Duomo em Florença, canais e ilhas da Laguna em Veneza. Reservamos entradas sem fila, guias de arte e restaurantes autorais.",
      },
      {
        title: "Toscana e agriturismos",
        body: "Val d'Orcia, Chianti, Siena, San Gimignano, Pienza e Montalcino. Villas restauradas em meio a vinhedos, vindima em setembro-outubro, aulas de culinária e degustações de Brunello e Chianti Classico.",
      },
      {
        title: "Costa Amalfitana e Capri",
        body: "Positano, Ravello, Amalfi e a ilha de Capri. Hotéis-boutique com vista para o Mediterrâneo, veleiro privativo pela costa, jantares em terraços icônicos. Alta temporada de maio a setembro.",
      },
      {
        title: "Puglia e Sul da Itália",
        body: "Trulli de Alberobello, cidades brancas de Ostuni e Locorotondo, praias do Salento e a gastronomia mais autêntica do país. Extensão ideal para quem já foi à Itália clássica.",
      },
      {
        title: "Lagos italianos",
        body: "Lago di Como (Bellagio, Varenna), Lago di Garda e Lago Maggiore. Villas históricas, jardins e travessias de barco. Ótima extensão de 3 a 4 noites após Milão.",
      },
    ],
    bestTime:
      "A melhor época para um pacote de viagem para a Itália é abril-junho e setembro-outubro — clima ameno, menos turistas do que julho-agosto e vindima na Toscana em setembro. Julho e agosto concentram alta temporada europeia: calor forte no sul, cidades cheias e preços elevados. Novembro a março é baixa (frio, chuvas, alguns hotéis de campo fechados), mas Roma, Florença e Veneza funcionam bem para viagem cultural. Reserve com 6 a 9 meses de antecedência para maio, junho e setembro.",
    howToGet:
      "Voos diretos do Brasil para Roma (FCO) e Milão (MXP) a partir de SP, RJ e outras capitais — 10 a 11 horas. Alternativas com conexão em Lisboa, Madri ou Paris para chegar a Veneza (VCE), Florença (FLR), Nápoles (NAP) ou Bari (BRI). Entre cidades italianas, trens de alta velocidade (Frecciarossa, Italo) são o meio ideal: Roma-Florença em 1h30, Florença-Veneza em 2h. Organizamos reservas, transfers privativos e aluguel de carro apenas para o campo (Toscana, Amalfi, Puglia).",
    whereToStay:
      "Em Roma e Florença, hotéis-boutique no centro histórico. Em Veneza, palácios convertidos em hotel ou refúgios na Giudecca. Na Toscana, agriturismos autorais com produção própria de vinho e azeite. Na Costa Amalfitana, hotéis com vista frontal para o Mediterrâneo (Le Sirenuse, Il San Pietro estilo). Na Puglia, masserias — casarões-fazenda restaurados. Toda a curadoria é feita a partir do briefing.",
    faqs: [
      {
        q: "Quantos dias ficar na Itália?",
        a: "Para o circuito clássico Roma-Florença-Veneza, 8 a 10 noites. Adicionando Toscana, 12 a 14 noites. Roteiro completo com Sul da Itália (Amalfi + Capri ou Puglia), 15 a 21 noites. Primeira viagem geralmente pede 12 a 14 noites.",
      },
      {
        q: "Qual a melhor época para um pacote de viagem para a Itália?",
        a: "Abril-junho e setembro-outubro: clima ameno, menos turistas, vindima na Toscana em setembro. Evite julho-agosto (calor extremo no sul, cidades lotadas) a menos que a viagem seja focada em Amalfi ou lagos. Reserve com 6 a 9 meses de antecedência para maio, junho e setembro.",
      },
      {
        q: "Precisa de visto para a Itália?",
        a: "Brasileiros não precisam de visto para turismo de até 90 dias no Espaço Schengen. Passaporte com validade mínima de 6 meses após a data de retorno. Recomendamos seguro-viagem com cobertura mínima de €30.000 (exigência Schengen).",
      },
      {
        q: "Como funciona um pacote de viagem para a Itália na Create Travel?",
        a: "Não vendemos pacotes prontos. A partir de uma conversa por WhatsApp levantamos período, perfil e ritmo desejado. Enviamos uma proposta sob medida com hotéis autorais, trens de alta velocidade, motoristas privativos no campo, guias de arte particulares e experiências raras — com suporte 24/7 durante toda a viagem e um único travel designer do briefing ao pós-viagem.",
      },
      {
        q: "É melhor viajar de trem ou alugar carro na Itália?",
        a: "Trem para o eixo urbano (Roma, Florença, Veneza, Milão, Nápoles) — rápido, confortável e livre do trânsito. Carro apenas para o campo (Toscana, Puglia, interior) e para a Costa Amalfitana só com motorista privativo (a estrada é estreita e estressante). Organizamos as duas opções conforme o roteiro.",
      },
      {
        q: "Vale a pena combinar Itália com outros países?",
        a: "Sim. Combinações comuns: Itália + França (por trem), Itália + Grécia (voo curto + cruzeiro), Itália + Croácia (ferry de Veneza a Split ou Dubrovnik) e Itália + Portugal. Roteiros multi-país pedem 18 a 25 noites.",
      },
    ],
  },
  {
    slug: "toscana",
    label: "Toscana",
    kicker: "Itália",
    intro:
      "Vinhedos, vilarejos medievais e villas autorais. A Itália para quem busca ritmo lento e mesa memorável.",
    metaDescription:
      "Toscana com curadoria Create Travel: villas, vinícolas e roteiros gastronômicos.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1568797629192-5b7c6a55f55b?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/italia/toscana"],
  },
  {
    slug: "portugal",
    label: "Portugal",
    kicker: "Europa",
    intro:
      "Lisboa, Douro e Açores. Vinho, mar e arquitetura — uma das melhores combinações de Europa para o viajante brasileiro.",
    metaDescription:
      "Portugal com curadoria Create Travel: Lisboa, Douro, Alentejo e Açores em roteiros autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/portugal/acores"],
  },
  {
    slug: "acores",
    label: "Açores",
    kicker: "Portugal",
    intro:
      "Ilhas vulcânicas no meio do Atlântico — caldeiras, fontes termais, baleias e silêncio. Refúgio raro na Europa.",
    metaDescription:
      "Açores com curadoria Create Travel: São Miguel, Pico e Terceira em roteiros autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1543393470-b2d317a98a8a?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/portugal/acores"],
  },
  {
    slug: "grecia",
    label: "Grécia",
    kicker: "Europa",
    intro:
      "Cíclades, Dodecaneso e Ática. Mar Egeu, sítios clássicos e ilhas com personalidade distinta.",
    metaDescription:
      "Grécia com curadoria Create Travel: Cíclades, ilhas autorais e Atenas em roteiros sob medida.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/grecia/ilhas"],
  },

  // ===== ÁSIA =====
  {
    slug: "japao",
    label: "Japão",
    kicker: "Ásia",
    intro:
      "Tóquio, Kyoto e Alpes japoneses. Cultura, gastronomia e natureza em camadas — o destino que mais transforma quem visita.",
    metaDescription:
      "Japão com curadoria Create Travel: Tóquio, Kyoto, Alpes e roteiros gastronômicos em sakura ou bordos.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1920&h=1080&fit=crop",
    destinationSlugs: ["asia/japao"],
  },
  {
    slug: "india",
    label: "Índia",
    kicker: "Ásia",
    intro:
      "Rajastão: forte cor, palácios convertidos em hotel e história viva. Roteiros com motorista privativo e curadoria de alma.",
    metaDescription:
      "Índia (Rajastão) com curadoria Create Travel: palácios, cidades imperiais e roteiros autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop",
    destinationSlugs: ["asia/india/rajastao"],
  },
  {
    slug: "rajastao",
    label: "Rajastão",
    kicker: "Índia",
    intro:
      "Jaipur, Udaipur, Jodhpur. A Índia mais cinematográfica em palácios convertidos em hotel.",
    metaDescription:
      "Rajastão com curadoria Create Travel: Jaipur, Udaipur, Jodhpur e palácios autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&h=1080&fit=crop",
    destinationSlugs: ["asia/india/rajastao"],
  },
  {
    slug: "indonesia",
    label: "Indonésia",
    kicker: "Ásia",
    intro:
      "Bali e ilhas vizinhas: arroz, templos, mar e mesa. Curadoria de villas e refúgios autorais.",
    metaDescription:
      "Indonésia (Bali) com curadoria Create Travel: villas autorais, Ubud e ilhas vizinhas.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&h=1080&fit=crop",
    destinationSlugs: ["asia/indonesia/bali"],
  },
  {
    slug: "bali",
    label: "Bali",
    kicker: "Indonésia",
    intro:
      "Ubud, costa sul e ilhas vizinhas. Bali com profundidade — sem turistismo de massa.",
    metaDescription:
      "Bali com curadoria Create Travel: Ubud, costa sul e villas autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1920&h=1080&fit=crop",
    destinationSlugs: ["asia/indonesia/bali"],
  },

  // ===== OCEANIA =====
  {
    slug: "nova-zelandia",
    label: "Nova Zelândia",
    kicker: "Oceania",
    intro:
      "Ilha Sul cinematográfica, fiordes, glaciares e Maori. Roteiros de carro com lodges autorais.",
    metaDescription:
      "Nova Zelândia com curadoria Create Travel: Ilha Norte, Ilha Sul, fiordes e lodges autorais.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&h=1080&fit=crop",
    destinationSlugs: ["oceania/nova-zelandia"],
  },
  {
    slug: "polinesia-francesa",
    label: "Polinésia Francesa",
    kicker: "Oceania",
    intro:
      "Bora Bora, Taiti, Moorea, Tikehau. Lagoas e overwater bungalows em sua melhor versão.",
    metaDescription:
      "Polinésia Francesa com curadoria Create Travel: Bora Bora, Moorea e Tikehau em lua de mel autoral.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&h=1080&fit=crop",
    destinationSlugs: ["oceania/polinesia-francesa"],
  },
  {
    slug: "bora-bora",
    label: "Bora Bora",
    kicker: "Polinésia Francesa",
    intro:
      "A lagoa mais célebre do mundo. Curadoria de overwater bungalows e logística cuidada para lua de mel.",
    metaDescription:
      "Bora Bora com curadoria Create Travel: melhores resorts, overwater bungalows e lua de mel.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1920&h=1080&fit=crop",
    destinationSlugs: ["oceania/polinesia-francesa"],
  },
  {
    slug: "australia",
    label: "Austrália",
    kicker: "Oceania",
    intro:
      "Costa leste, outback e Grande Barreira de Coral. Continente-país com muitas viagens em uma só.",
    metaDescription:
      "Austrália com curadoria Create Travel: Sydney, Uluru e Grande Barreira de Coral.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=1920&h=1080&fit=crop",
    destinationSlugs: ["oceania/australia"],
  },
];

export const getRegionBySlug = (slug: string): Region | undefined =>
  regions.find((r) => r.slug === slug);

export const getAllRegions = (): Region[] => regions;
