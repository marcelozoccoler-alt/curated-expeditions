// Short SEO landing pages for regions and places — mapped to destinations.
// Each entry produces a /:regionSlug page (e.g. /amazonia, /pantanal, /japao).

export interface Region {
  slug: string;
  label: string;
  kicker: string; // tag above the title
  intro: string; // 2–3 sentences for hero + meta description
  metaDescription: string;
  heroImageUrl: string;
  destinationSlugs: string[]; // refers to destinations.ts slug field
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
      "Roteiros e lodges na Amazônia com curadoria de luxo discreto da Create Travel. Anavilhanas, Manaus, Alter do Chão.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "brasil/amazonia/anavilhanas",
      "brasil/amazonia/manaus-rio-negro",
      "brasil/amazonia/alter-do-chao",
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
      "Atacama no norte, Patagônia no sul. Um país-narrativa com as duas paisagens mais marcantes do continente.",
    metaDescription:
      "Chile com curadoria Create Travel: Atacama, Patagônia e Santiago em roteiros sob medida.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=1920&h=1080&fit=crop",
    destinationSlugs: [
      "america-do-sul/patagonia",
      "america-do-sul/chile/atacama",
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
      "Toscana, Costa Amalfitana e cidades de arte. Vinhedos, mesa autoral e propriedades históricas.",
    metaDescription:
      "Itália com curadoria Create Travel: Toscana, Amalfi e cidades de arte em roteiros sob medida.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1496318447583-f524534e9ce1?w=1920&h=1080&fit=crop",
    destinationSlugs: ["europa/italia/toscana"],
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
