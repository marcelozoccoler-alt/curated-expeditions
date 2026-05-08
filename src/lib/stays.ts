import { Stay } from "./types";

export const stays: Stay[] = [
  // ===== BRASIL =====
  {
    slug: "anavilhanas-jungle-lodge",
    name: "Anavilhanas Jungle Lodge",
    destinationRef: "brasil-amazonia-anavilhanas",
    bestTime: "Jun–Nov (seca) para trilhas e praias de rio; Dez–Mai (cheia) para igapós e navegação.",
    tags: ["navegacao", "conservacao", "bem-estar", "fotografia", "familia", "remoto"],
    imageAiPrompt: "Ultra realistic editorial travel photo of a luxury jungle lodge in the Amazon on the riverbank, warm sunrise light, wooden architecture integrated with rainforest, natural colors, no people.",
    imageOverrideUrl: "https://cdn.prod.website-files.com/5f52a9ce6de4e1539299fac5/61af8fd572651e23ed11b42a_anavilhanas-home-960.jpg",
    whySelected: "Luxo discreto e imersão real no Rio Negro: serviço cuidadoso, guias fortes e experiências que valorizam silêncio, ética e profundidade.",
    beyondUsual: [
      "Canoagem silenciosa ao amanhecer com leitura de sons e rastros.",
      "Focagem noturna interpretativa (ética, sem perturbar fauna).",
      "Vivência responsável com comunidades ribeirinhas, com contexto e respeito.",
    ],
    faq: [
      { q: "Qual a melhor época para ficar no Anavilhanas?", a: "Seca (jun–nov) favorece trilhas e praias de rio; cheia (dez–mai) revela os igapós e a navegação por dentro da floresta." },
      { q: "É indicado para lua de mel?", a: "Sim, para casais que buscam natureza, conforto e silêncio." },
      { q: "Quantas noites são ideais?", a: "Em geral, 3 a 5 noites funcionam muito bem." },
      { q: "É bom para famílias?", a: "Sim, com atividades adaptadas por guia e ritmo." },
      { q: "Como chegar?", a: "Normalmente via Manaus e traslado até a região do Rio Negro." },
      { q: "A Create Travel monta roteiro combinado?", a: "Sim, com Manaus e extensões no Brasil conforme o seu perfil." },
    ],
  },
  {
    slug: "mirante-do-gaviao",
    name: "Mirante do Gavião Amazon Lodge",
    destinationRef: "brasil-amazonia-manaus-rio-negro",
    bestTime: "Jun–Nov para trilhas e praias de rio; Dez–Mai para floresta alagada.",
    tags: ["navegacao", "bem-estar", "conservacao", "fotografia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of an Amazon lodge with modern rustic architecture, deck overlooking a wide river at sunset, lush rainforest background, cinematic light, no people.",
    imageOverrideUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&h=1000&fit=crop",
    whySelected: "Arquitetura e paisagem se encontram com naturalidade. Um lugar para desacelerar e observar a Amazônia com conforto e estética.",
    beyondUsual: [
      "Rotas de canoa focadas em observação de aves.",
      "Jantar com ingredientes amazônicos e narrativa de origem.",
      "Trilha de escuta noturna com guia especializado.",
    ],
    faq: [
      { q: "É bom para quem quer descanso?", a: "Sim, é uma excelente base de slow travel na Amazônia." },
      { q: "A experiência muda entre seca e cheia?", a: "Sim: cheia favorece navegação; seca favorece trilhas e praias de rio." },
      { q: "Dá para combinar com Anavilhanas?", a: "Sim, como duas camadas complementares do Rio Negro." },
      { q: "Como reservar com a Create Travel?", a: "Via WhatsApp no botão Criar roteiro em parceria." },
      { q: "É focado em natureza?", a: "Sim, com curadoria para vivências autênticas." },
      { q: "Posso personalizar atividades?", a: "Sim, conforme seu perfil e ritmo." },
    ],
  },
  {
    slug: "caiman-pantanal",
    name: "Caiman Pantanal",
    destinationRef: "brasil-pantanal-norte",
    bestTime: "Mai–Out (seca) para máxima observação de fauna; Nov–Mar (cheia) para paisagens alagadas e aves.",
    tags: ["safari", "fotografia", "conservacao", "familia", "cavalgadas", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of a high-end safari lodge in the Pantanal, open landscape, golden hour, tasteful architecture, no people.",
    imageOverrideUrl: "https://www.caiman.com.br/wp-content/uploads/2022/07/caiman_pantanal_acomodacoes_baiazinha.png",
    whySelected: "Referência no Pantanal com bom padrão de serviço e vínculo com conservação. Ideal para observação ética e fotografia.",
    beyondUsual: [
      "Saídas focadas em comportamento animal (não em perseguição).",
      "Vivência pantaneira com histórias de território.",
      "Canoagem em silêncio ao entardecer.",
    ],
    faq: [
      { q: "Quando é melhor para ver onça?", a: "Em geral na seca (mai–out), quando as condições favorecem observação." },
      { q: "É indicado para famílias?", a: "Sim, com ajustes de ritmo." },
      { q: "Dá para combinar com Bonito?", a: "Sim, é uma combinação excelente." },
      { q: "O que é luxo discreto?", a: "Conforto real e serviço excelente sem ostentação." },
      { q: "Como funciona a curadoria Create Travel?", a: "Definimos base, dias, horários e foco (foto/aves/família)." },
      { q: "Como falar com consultor?", a: "Clique em Criar roteiro em parceria." },
    ],
  },
  {
    slug: "txai-noronha",
    name: "Txai Noronha",
    destinationRef: "brasil-fernando-de-noronha",
    bestTime: "Ago–Fev para mar mais calmo e visibilidade; Mar–Jul para surfe e céus dramáticos.",
    tags: ["praia", "lua-de-mel", "mergulho", "bem-estar", "remoto", "conservacao"],
    imageAiPrompt: "Ultra realistic editorial photo of a barefoot luxury beach villa in Fernando de Noronha, ocean view, sunset, no people.",
    imageOverrideUrl: "https://www.txairesorts.com/upload/banner/slide-home-bangalo2-64b1a26e5edd2.webp",
    whySelected: "O encontro raro entre estética contemporânea e ilha protegida: privacidade, mar e curadoria gastronômica em sintonia com Noronha.",
    beyondUsual: [
      "Mergulhos guiados em pontos menos visitados.",
      "Trilhas privativas ao nascer do sol.",
      "Mesa do chef com peixes do dia e histórias da ilha.",
    ],
    faq: [
      { q: "Vale para lua de mel?", a: "Sim, é uma das melhores escolhas no Brasil para casais." },
      { q: "Quantas noites?", a: "5 a 7 noites para ritmo ilha." },
      { q: "Tem mergulho?", a: "Sim, com operadores parceiros e curadoria." },
      { q: "Crianças?", a: "Sim, com ritmo familiar." },
      { q: "Logística complexa?", a: "Cuidamos de tudo: voos, taxa ambiental, base." },
      { q: "Combina com Trancoso?", a: "Sim, dá uma narrativa Brasil-mar muito bonita." },
    ],
  },
  {
    slug: "uxua-trancoso",
    name: "UXUA Casa Hotel & Spa",
    destinationRef: "brasil-bonito",
    bestTime: "Abr–Out para clima mais seco; Nov–Mar com mais chuvas curtas.",
    tags: ["lua-de-mel", "bem-estar", "praia", "cultura", "gastronomia"],
    imageAiPrompt: "Ultra realistic editorial photo of a charming hotel in Trancoso, colorful colonial architecture, garden, soft natural light, no people.",
    imageOverrideUrl: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=1600&h=1000&fit=crop",
    whySelected: "Estilo, alma local e serviço caloroso em torno do Quadrado. Um caso de luxo discreto que respeita o lugar.",
    beyondUsual: [
      "Spa com banhos rituais brasileiros.",
      "Mesa autoral com ingredientes baianos.",
      "Passeios privativos por praias menos óbvias.",
    ],
    faq: [
      { q: "Localização?", a: "No Quadrado de Trancoso, com fácil acesso a praias." },
      { q: "Lua de mel?", a: "Excelente escolha." },
      { q: "Pet-friendly?", a: "Sob consulta." },
      { q: "Spa?", a: "Sim, com tratamentos exclusivos." },
      { q: "Combina com Caraíva?", a: "Sim, como rota litorânea." },
      { q: "Como reservar?", a: "Via Create Travel com curadoria de roteiro." },
    ],
  },
  // ===== ÁFRICA =====
  {
    slug: "singita-grumeti",
    name: "Singita Grumeti",
    destinationRef: "africa-tanzania-serengeti",
    bestTime: "Jun–Out para grande migração; Dez–Mar para nascimentos no sul.",
    tags: ["safari", "fotografia", "conservacao", "lua-de-mel", "remoto", "expedicao"],
    imageAiPrompt: "Ultra realistic editorial photo of a luxury safari camp in the Serengeti at golden hour, vast savannah, acacia trees, no people.",
    imageOverrideUrl: "https://images.ctfassets.net/wds1hqrprqxb/4hnY4KdHWy79v2VcLIVwa7/5d22b195364e4d476cc282d41cddd8cb/DSC2803-Edit-1400x700.jpg",
    whySelected: "Reserva privada de grande escala com baixíssima densidade de hóspedes, conservação real e serviço impecável.",
    beyondUsual: [
      "Safári a pé com guias mestres.",
      "Visita a centro de pesquisa anti-caça.",
      "Jantar isolado em meio ao bush com fogueira.",
    ],
    faq: [
      { q: "Quando ir?", a: "Jul–Out para concentração da migração." },
      { q: "Crianças?", a: "Sim, com programa Mini-Rangers." },
      { q: "Lua de mel?", a: "Sim, ideal." },
      { q: "Combina com Zanzibar?", a: "Sim, é a clássica combinação bush + beach." },
      { q: "Voos internos?", a: "Sim, organizamos charters." },
      { q: "Vacinas?", a: "Febre amarela e antimaláricos comuns." },
    ],
  },
  {
    slug: "andbeyond-bateleur",
    name: "&Beyond Bateleur Camp",
    destinationRef: "africa-quenia-masai-mara",
    bestTime: "Jul–Out para grande migração no Mara; Jan–Mar para fauna residente.",
    tags: ["safari", "fotografia", "conservacao", "cultura", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic editorial photo of a classic 1920s style safari tent camp in Masai Mara, golden grass, acacia, no people.",
    imageOverrideUrl: "https://www.andbeyond.com/wp-content/uploads/sites/5/suite-at-andbeyond-bateleur-camp-overlooking-the-masai-mara.jpg",
    whySelected: "Tendas clássicas em localização privilegiada na Mara Triangle, com guias excepcionais e ética de fauna sólida.",
    beyondUsual: [
      "Travessias de rio do Mara em janelas certas.",
      "Imersão Maasai com contexto e respeito.",
      "Balão ao amanhecer com café no bush.",
    ],
    faq: [
      { q: "Combina com Tanzânia?", a: "Sim, mas escolhemos foco para evitar excesso." },
      { q: "Família?", a: "Sim." },
      { q: "Voos?", a: "Bush flights organizados." },
      { q: "Quantos dias?", a: "3 a 4 noites no Mara funcionam bem." },
      { q: "Lua de mel?", a: "Excelente." },
      { q: "Idiomas?", a: "Inglês padrão; guias multilíngues sob demanda." },
    ],
  },
  {
    slug: "andbeyond-sossusvlei",
    name: "&Beyond Sossusvlei Desert Lodge",
    destinationRef: "africa-namibia",
    bestTime: "Mai–Out (seca) para céus limpos e luz cinematográfica.",
    tags: ["deserto", "fotografia", "lua-de-mel", "remoto", "expedicao", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of a contemporary desert lodge in Namibia, glass walls facing red dunes, dramatic sunrise, no people.",
    imageOverrideUrl: "https://www.andbeyond.com/wp-content/uploads/sites/5/Namibia-Sossusvlei-Desert-Lodge-Aerial-showing-lodge-and-sunset.jpg",
    whySelected: "Arquitetura contemporânea em diálogo com o deserto mais antigo do mundo. Silêncio, escala e céus extraordinários.",
    beyondUsual: [
      "Observação astronômica com telescópio próprio.",
      "Caminhada nas dunas com geólogo.",
      "E-bike por paisagens marcianas.",
    ],
    faq: [
      { q: "Quantas noites?", a: "3 noites para Sossusvlei; combinar com costa Skeleton." },
      { q: "Lua de mel?", a: "Sim, marcante." },
      { q: "Família?", a: "Sim, com programa adaptado." },
      { q: "Como chegar?", a: "Voo charter ou self-drive." },
      { q: "Frio à noite?", a: "Sim no inverno; temos boas mantas." },
      { q: "Combina com Botsuana?", a: "Sim, contraste deserto-delta." },
    ],
  },
  // ===== AMÉRICA DO SUL =====
  {
    slug: "explora-patagonia",
    name: "Explora Patagonia",
    destinationRef: "america-do-sul-patagonia",
    bestTime: "Nov–Mar (verão austral) para trilhas e estabilidade.",
    tags: ["trekking", "montanha", "fotografia", "bem-estar", "expedicao"],
    imageAiPrompt: "Ultra realistic editorial photo of a remote luxury lodge in Torres del Paine with mountain backdrop and lake, dramatic light, no people.",
    imageOverrideUrl: "https://assets.explora.com/app/uploads/2020/07/Why-Explora-Patagonia.jpg",
    whySelected: "Localização única dentro do Parque Torres del Paine com saídas guiadas todos os dias e arquitetura integrada à paisagem.",
    beyondUsual: [
      "Cavalgada com baqueanos pela estepe.",
      "Trekking ao Mirante Base Torres com guia.",
      "Spa com vista para o Lago Pehoé.",
    ],
    faq: [
      { q: "Quantas noites?", a: "4 a 5 noites para boa rotação de trilhas." },
      { q: "Nível físico?", a: "Há rotas para todos os níveis." },
      { q: "Família?", a: "Sim, a partir de adolescentes ativos." },
      { q: "Combina com Atacama?", a: "Sim, dois Explora podem virar uma narrativa Chile completa." },
      { q: "Idiomas?", a: "Espanhol e inglês padrão; português sob consulta." },
      { q: "All-inclusive?", a: "Sim, incluindo excursões guiadas." },
    ],
  },
  {
    slug: "tierra-atacama",
    name: "Tierra Atacama",
    destinationRef: "america-do-sul-atacama",
    bestTime: "Ano todo; Mar–Mai e Set–Nov mais estáveis.",
    tags: ["deserto", "bem-estar", "fotografia", "lua-de-mel", "cultura"],
    imageAiPrompt: "Ultra realistic editorial photo of a contemporary desert hotel in Atacama, adobe walls and pool facing volcano, no people.",
    imageOverrideUrl: "https://tierraatacama.com/wp-content/uploads/2025/04/Gallery-Banner.jpg",
    whySelected: "Estética sóbria, spa de referência e excursões guiadas com excelente leitura de paisagem do Atacama.",
    beyondUsual: [
      "Astronomia com telescópio em céu Bortle 1.",
      "Trekking aos geyser del Tatio ao amanhecer.",
      "Visita a Pucará com contexto histórico.",
    ],
    faq: [
      { q: "Altitude?", a: "Atacama está a ~2.400m; algumas excursões sobem mais." },
      { q: "Spa?", a: "Sim, top regional." },
      { q: "Família?", a: "Sim." },
      { q: "Combina com Patagonia?", a: "Sim, narrativa Chile." },
      { q: "Como chegar?", a: "Voo até Calama + traslado." },
      { q: "Lua de mel?", a: "Sim." },
    ],
  },
  // ===== EUROPA =====
  {
    slug: "deplar-farm",
    name: "Deplar Farm",
    destinationRef: "europa-islandia",
    bestTime: "Set–Mar para aurora boreal; Mai–Ago para luz infinita.",
    tags: ["aurora", "remoto", "bem-estar", "expedicao", "fotografia"],
    imageAiPrompt: "Ultra realistic editorial photo of a remote turf-roof lodge in northern Iceland, snow, fjord backdrop, aurora, no people.",
    imageOverrideUrl: "https://elevenexperience.com/media/atpoazb5/deplar-farm-iceland-exterior-summer.jpg",
    whySelected: "Refúgio remoto na Península Troll: heli-ski, surf nas águas árticas, sauna flutuante e silêncio absoluto.",
    beyondUsual: [
      "Heli-ski guiado entre fiordes.",
      "Banho geotérmico ao ar livre sob aurora.",
      "Pesca esportiva de salmão em rios privativos.",
    ],
    faq: [
      { q: "Aurora garantida?", a: "Não, mas céus limpos do norte aumentam as chances." },
      { q: "Lua de mel?", a: "Sim, espetacular." },
      { q: "Família?", a: "Sim, com programa adaptado." },
      { q: "Como chegar?", a: "Via Akureyri ou helicóptero de Reykjavík." },
      { q: "Heli-ski é incluso?", a: "Não; cobramos como add-on." },
      { q: "Quantas noites?", a: "4 a 5 noites." },
    ],
  },
  // ===== ÁSIA =====
  {
    slug: "amankora-bhutan",
    name: "Aman Tokyo",
    destinationRef: "asia-japao",
    bestTime: "Mar–Mai (cerejeiras) e Out–Nov (bordos).",
    tags: ["cultura", "gastronomia", "bem-estar", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic editorial photo of a luxury minimal hotel suite in Tokyo with floor-to-ceiling window overlooking the city, refined natural materials, no people.",
    imageOverrideUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1600&h=1000&fit=crop",
    whySelected: "Calma profunda no centro de Tóquio: spa monumental, vistas e estética Aman como porta de entrada do Japão.",
    beyondUsual: [
      "Cerimônia do chá guiada.",
      "Roteiro privado em Tsukiji com chef.",
      "Walking tour de arquitetura contemporânea.",
    ],
    faq: [
      { q: "Quantas noites em Tóquio?", a: "3 a 4 noites." },
      { q: "Combina com Kyoto?", a: "Sim, narrativa essencial." },
      { q: "Família?", a: "Sim." },
      { q: "Idiomas?", a: "Inglês padrão." },
      { q: "Spa?", a: "Sim, referência." },
      { q: "Como chegar do aeroporto?", a: "Traslado privativo organizado pela Create Travel." },
    ],
  },
];

export const getStayBySlug = (slug: string): Stay | undefined => {
  return stays.find((s) => s.slug === slug);
};

export const getStaysByDestination = (destinationRef: string): Stay[] => {
  return stays.filter((s) => s.destinationRef === destinationRef);
};

export const getStaysByTag = (tagId: string): Stay[] => {
  return stays.filter((s) => s.tags.includes(tagId));
};

export const searchStays = (query: string): Stay[] => {
  const lowerQuery = query.toLowerCase();
  return stays.filter((s) => s.name.toLowerCase().includes(lowerQuery));
};

export const getFeaturedStays = (): Stay[] => {
  return stays.slice(0, 3);
};
