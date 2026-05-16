import { Destination } from "./types";
import monteRoraimaImg from "@/assets/destinations/brasil-monte-roraima.jpg";
import festivalParintinsImg from "@/assets/destinations/brasil-amazonia-festival-parintins.jpg";
import manausRioNegroImg from "@/assets/destinations/brasil-amazonia-manaus-rio-negro.jpg";

export const destinations: Destination[] = [
  // ===== BRASIL =====
  {
    id: "brasil-amazonia-anavilhanas",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/anavilhanas",
    name: "Anavilhanas (Rio Negro)",
    bestTime: "Jun–Nov (seca) para trilhas e praias de rio; Dez–Mai (cheia) para igapós e floresta alagada.",
    tags: ["navegacao", "conservacao", "fotografia", "bem-estar", "remoto", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of the Anavilhanas archipelago in the Rio Negro, Amazon rainforest, morning mist, cinematic natural light, no people.",
    imageOverrideUrl: "",
    intro: "Anavilhanas é Amazônia em estado de contemplação: ilhas, canais e silêncio com profundidade. Uma viagem para desacelerar, observar e sentir a floresta como um organismo vivo — com curadoria e conforto.",
    highlights: [
      "Navegação por canais do Rio Negro",
      "Trilhas interpretativas com guia naturalista",
      "Observação de fauna (aves, primatas, botos)",
      "Pôr do sol no rio com leitura de paisagem",
      "Focagem noturna interpretativa"
    ],
    beyondUsual: [
      "Canoagem de escuta ao amanhecer (sons, rastros, luz).",
      "Vivência responsável com saberes ribeirinhos (plantas e cultura local).",
      "Saída fotográfica dedicada à textura e atmosfera (menos pressa, mais presença)."
    ],
    stays: ["anavilhanas-jungle-lodge", "mirante-do-gaviao"],
    faq: [
      { q: "Qual a melhor época para ir a Anavilhanas?", a: "Seca (jun–nov) favorece trilhas e praias; cheia (dez–mai) é ideal para igapós e navegação na floresta alagada." },
      { q: "Quantos dias devo ficar?", a: "Em geral, 4 a 6 noites permitem alternar rio, floresta e descanso." },
      { q: "É adequado para iniciantes em Amazônia?", a: "Sim, com logística bem estruturada e bom nível de conforto." },
      { q: "Dá para ir com crianças?", a: "Sim, com atividades ajustadas ao ritmo da família." },
      { q: "Como evitar experiências muito turísticas?", a: "Com horários, rotas e guias certos — base da curadoria Create Travel." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "brasil-amazonia-manaus-rio-negro",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/manaus-rio-negro",
    name: "Manaus & Rio Negro",
    bestTime: "Jun–Nov (seca) para trilhas e praias de rio; Dez–Mai (cheia) para igapós e grandes navegadas.",
    tags: ["navegacao", "cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Rio Negro at sunset with calm waters and rainforest horizon, cinematic editorial travel style, no people.",
    imageOverrideUrl: manausRioNegroImg,
    intro: "A porta de entrada para uma Amazônia com camadas: cidade, rio e floresta. A Create Travel equilibra cultura e natureza com logística suave e experiências de verdade.",
    highlights: [
      "Encontro das Águas",
      "Arquitetura e história de Manaus",
      "Navegação no Rio Negro",
      "Trilhas e observação de fauna",
      "Sabores amazônicos com curadoria"
    ],
    beyondUsual: [
      "Roteiro urbano-curado em Manaus (história + mercados + sabores).",
      "Experiências de rio em horários silenciosos.",
      "Combinações com bases mais remotas (ex.: Anavilhanas)."
    ],
    stays: ["mirante-do-gaviao"],
    faq: [
      { q: "Manaus vale a pena no roteiro?", a: "Sim, principalmente quando bem curada: história, arquitetura e gastronomia amazônica." },
      { q: "Dá para fazer sem pressa?", a: "Sim, montamos uma sequência com pausas e bons tempos de deslocamento." },
      { q: "Qual período é melhor?", a: "Depende do seu foco: seca para trilhas; cheia para navegação em igapós." },
      { q: "É bom para fotografia?", a: "Muito — luz, água e floresta rendem imagens únicas." },
      { q: "Pode ser uma primeira viagem à Amazônia?", a: "Sim, excelente para começar com conforto." },
      { q: "Como falar com consultor?", a: "Via WhatsApp no botão Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-pantanal-norte",
    continent: "Brasil",
    country: "Brasil",
    region: "Pantanal",
    slug: "brasil/pantanal/norte",
    name: "Pantanal Norte (MT)",
    bestTime: "Mai–Out (seca) para avistamento de fauna; Nov–Mar (cheia) para paisagens alagadas e aves.",
    tags: ["safari", "fotografia", "conservacao", "cavalgadas", "familia", "bem-estar"],
    imageAiPrompt: "Ultra realistic wildlife photo of a jaguar in the Pantanal wetlands at golden hour, professional telephoto look, no people.",
    imageOverrideUrl: "",
    intro: "O Pantanal Norte é o Brasil em forma de safári: vida selvagem, luz dourada e encontros que marcam. A diferença está na curadoria de ritmo e ética.",
    highlights: [
      "Safáris em áreas de alta densidade de fauna",
      "Observação de aves",
      "Passeios de barco/voadeira",
      "Cavalgadas pantaneiras",
      "Saídas ao amanhecer e entardecer"
    ],
    beyondUsual: [
      "Fotografia com foco em comportamento animal e narrativa.",
      "Vivência pantaneira com cultura de território.",
      "Canoagem silenciosa para leitura de rastros."
    ],
    stays: ["caiman-pantanal"],
    faq: [
      { q: "Quando a fauna aparece mais?", a: "Na seca (mai–out), quando a água baixa e a fauna se concentra." },
      { q: "É indicado para famílias?", a: "Sim, com ajustes de ritmo e atividades." },
      { q: "Precisa de preparo físico?", a: "Não necessariamente; dá para equilibrar conforto e atividade." },
      { q: "Dá para combinar com Bonito?", a: "Sim, combinação clássica e excelente." },
      { q: "Como evitar 'turismo de corrida'?", a: "Com base bem escolhida e horários curados." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-lencois-maranhenses",
    continent: "Brasil",
    country: "Brasil",
    region: "Maranhão",
    slug: "brasil/lencois-maranhenses",
    name: "Lençóis Maranhenses",
    bestTime: "Jun–Set para lagoas cheias; Mai e Out podem ser ótimos com menos fluxo (dependendo das chuvas).",
    tags: ["praia", "trekking", "fotografia", "bem-estar", "lua-de-mel", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Lençóis Maranhenses dunes with blue lagoons, bright natural light, no people.",
    imageOverrideUrl: "",
    intro: "Lençóis é beleza em estado bruto. A curadoria Create Travel está no timing: bases certas, horários vazios e deslocamentos inteligentes.",
    highlights: [
      "Lagoas e dunas em diferentes bases",
      "Pôr do sol nas dunas",
      "Rotas cênicas selecionadas",
      "Vento, mar e rio em uma mesma viagem",
      "Gastronomia regional com personalidade"
    ],
    beyondUsual: [
      "Travessias leves com pernoites de charme e logística suave.",
      "Saídas fotográficas em horários silenciosos.",
      "Experiências gastronômicas fora do circuito óbvio."
    ],
    stays: [],
    faq: [
      { q: "Quando as lagoas estão melhores?", a: "Normalmente de junho a setembro." },
      { q: "Precisa fazer travessia?", a: "Não. Podemos curar a viagem por bases sem travessia." },
      { q: "É bom para lua de mel?", a: "Sim, se você busca natureza e charme com tranquilidade." },
      { q: "Como fugir das multidões?", a: "Com base, horários e rotas certas." },
      { q: "Quantos dias?", a: "Em geral 5 a 8 noites, dependendo das bases escolhidas." },
      { q: "Como montar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-chapada-das-mesas",
    continent: "Brasil",
    country: "Brasil",
    region: "Maranhão",
    slug: "brasil/chapada-das-mesas",
    name: "Chapada das Mesas",
    bestTime: "Jun–Set (seca) para trilhas e estradas; cachoeiras cheias entre Dez–Mar.",
    tags: ["natureza", "trekking", "fotografia", "remoto", "aventura"],
    imageAiPrompt: "Ultra realistic photo of Chapada das Mesas in Maranhão, Brazil: dramatic flat-topped mesas at sunset, golden light, cerrado vegetation, waterfalls, cinematic landscape, no people.",
    imageOverrideUrl: "",
    intro: "Mesas de arenito recortando o cerrado, cachoeiras escondidas e um silêncio quase irreal. Um Maranhão alternativo aos Lençóis — ainda pouco explorado.",
    highlights: [
      "Mirante do Portal da Chapada ao pôr do sol",
      "Cachoeira do Santuário e Encanto Azul",
      "Poço Azul e suas águas translúcidas",
      "Cachoeira de São Romão, uma das maiores do Brasil",
      "Trilhas e mirantes com vistas cinematográficas"
    ],
    beyondUsual: [
      "Pernoites em pousadas de charme em Carolina (MA).",
      "Combinação com Jalapão por estrada cênica.",
      "Saídas privativas com guias locais em horários sem fluxo."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época?", a: "Jun–Set para trilhas secas; Dez–Mar para cachoeiras mais cheias." },
      { q: "Onde se hospedar?", a: "Carolina (MA) é a base principal, com pousadas charmosas." },
      { q: "Dá para combinar com Lençóis Maranhenses?", a: "Sim, mas exige logística — orientamos sobre voos e traslados." },
      { q: "Dá para combinar com Jalapão?", a: "Sim, é uma das combinações mais ricas do Brasil." },
      { q: "Precisa de preparo físico?", a: "Trilhas variam de leves a moderadas; adaptamos ao seu ritmo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-alter-do-chao",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/alter-do-chao",
    name: "Alter do Chão",
    bestTime: "Jun–Dez (seca) para praias de rio e águas claras; Jan–Mai (cheia) para igapós e florestas alagadas.",
    tags: ["praia", "navegacao", "bem-estar", "cultura", "familia"],
    imageAiPrompt: "Ultra realistic photo of Alter do Chão beach on the Tapajós river with turquoise waters and white sand, Amazonian landscape, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "O Caribe amazônico em sua versão mais autêntica: praias de águas claras, floresta ao redor e ritmo de vila. Uma pausa sofisticada na imensidão.",
    highlights: [
      "Praias de rio com águas cristalinas",
      "Floresta Nacional do Tapajós",
      "Cultura ribeirinha e artesanato",
      "Pôr do sol no Rio Tapajós",
      "Gastronomia amazônica local"
    ],
    beyondUsual: [
      "Expedição às comunidades tradicionais do Tapajós.",
      "Trilhas interpretativas na Floresta Nacional.",
      "Navegação contemplativa em horários silenciosos."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para ir?", a: "Seca (jun–dez) para praias; cheia (jan–mai) para experiências de floresta alagada." },
      { q: "É adequado para famílias?", a: "Sim, excelente para descanso em família com atividades leves." },
      { q: "Dá para combinar com outros destinos amazônicos?", a: "Sim, Santarém e conexões para outras regiões." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites permitem aproveitar bem o ritmo local." },
      { q: "É muito turístico?", a: "Pode ser em alta temporada; a curadoria ajuda a encontrar o equilíbrio." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-pantanal-sul",
    continent: "Brasil",
    country: "Brasil",
    region: "Pantanal",
    slug: "brasil/pantanal/sul",
    name: "Pantanal Sul (MS)",
    bestTime: "Mai–Set (seca) para safáris e fauna concentrada; Out–Abr (cheia) para paisagens alagadas.",
    tags: ["safari", "fotografia", "cavalgadas", "conservacao", "familia"],
    imageAiPrompt: "Ultra realistic photo of the southern Pantanal wetlands at sunrise with wildlife, calm waters reflecting golden light, no people.",
    imageOverrideUrl: "",
    intro: "A versão mais acessível do Pantanal, com fazendas históricas e rica biodiversidade. Base perfeita para combinar com Bonito.",
    highlights: [
      "Safáris de observação de fauna",
      "Cavalgadas em fazendas históricas",
      "Observação de aves e jacarés",
      "Pesca esportiva (catch and release)",
      "Cultura pantaneira autêntica"
    ],
    beyondUsual: [
      "Imersão em fazendas com história e tradição.",
      "Fotografia noturna de céu estrelado.",
      "Roteiros combinados com Bonito para diversidade de experiências."
    ],
    stays: [],
    faq: [
      { q: "Qual a diferença para o Pantanal Norte?", a: "Mais acessível, fazendas históricas e fácil combinação com Bonito." },
      { q: "Vejo onça no Pantanal Sul?", a: "É possível, mas menos provável que no Norte." },
      { q: "É bom para crianças?", a: "Sim, com atividades adaptadas ao ritmo familiar." },
      { q: "Quantos dias são ideais?", a: "3 a 5 noites, podendo combinar com Bonito." },
      { q: "Como funciona a pesca?", a: "Pesca esportiva com devolução, respeitando conservação." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-jalapao",
    continent: "Brasil",
    country: "Brasil",
    region: "Tocantins",
    slug: "brasil/jalapao",
    name: "Jalapão",
    bestTime: "Mai–Set (seca) para acesso e fervedouros; Out–Abr pode ter chuvas e estradas difíceis.",
    tags: ["trekking", "praia", "remoto", "fotografia", "expedicao"],
    imageAiPrompt: "Ultra realistic photo of Jalapão sand dunes and fervedouros crystal waters, dramatic savanna landscape, golden hour light, no people.",
    imageOverrideUrl: "",
    intro: "O cerrado em sua forma mais dramática: dunas douradas, nascentes cristalinas e vastidão silenciosa. Uma expedição para quem busca o Brasil remoto.",
    highlights: [
      "Fervedouros de águas cristalinas",
      "Dunas e formações rochosas únicas",
      "Cachoeiras do cerrado",
      "Comunidades quilombolas",
      "Céu estrelado intenso"
    ],
    beyondUsual: [
      "Roteiros fora do circuito principal com menos veículos.",
      "Vivências com artesãs do capim dourado.",
      "Acampamentos sob as estrelas em locais selecionados."
    ],
    stays: [],
    faq: [
      { q: "É uma viagem de aventura?", a: "Pode ser, mas há opções com conforto intermediário." },
      { q: "Precisa de 4x4?", a: "Sim, as estradas exigem veículos adequados." },
      { q: "Quantos dias são necessários?", a: "Mínimo 5 noites para ver os principais atrativos." },
      { q: "É indicado para crianças?", a: "Depende da idade e disposição para deslocamentos." },
      { q: "O que são fervedouros?", a: "Nascentes de água cristalina onde não se afunda." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-monte-roraima",
    continent: "Brasil",
    country: "Brasil",
    region: "Roraima",
    slug: "brasil/monte-roraima",
    name: "Monte Roraima",
    bestTime: "Dez–Mar (estação seca) — trilhas mais seguras e vistas abertas.",
    tags: ["trekking", "remoto", "fotografia", "expedicao", "natureza"],
    imageAiPrompt: "Ultra realistic photo of Monte Roraima tepui plateau, dramatic flat-topped sandstone mountain rising from cloud forest, mist, golden hour, no people.",
    imageOverrideUrl: monteRoraimaImg,
    intro: "O tepui mais icônico da América do Sul: um platô pré-cambriano suspenso entre nuvens, com formações rochosas e ecossistemas únicos no planeta.",
    highlights: [
      "Travessia de 6 a 8 dias até o platô",
      "Vale dos Cristais e jacuzzis naturais",
      "Vistas para a tríplice fronteira",
      "Flora endêmica e formações rochosas surreais",
      "Acampamentos sob paredões de 400m"
    ],
    beyondUsual: [
      "Saída pelo lado brasileiro com guias indígenas Pemón.",
      "Extensão para a Gran Sabana venezuelana.",
      "Sessões de astrofotografia no platô."
    ],
    stays: [],
    faq: [
      { q: "É uma expedição difícil?", a: "Sim, exige bom condicionamento físico e disposição para acampar." },
      { q: "Quantos dias dura a travessia?", a: "Em média 6 a 8 dias completos com guia." },
      { q: "Precisa de equipamento técnico?", a: "Não é escalada, mas requer equipamento de trekking completo." },
      { q: "Qual é o ponto de partida?", a: "Pacaraima (RR) no lado brasileiro ou Santa Elena (Venezuela)." },
      { q: "É indicado para iniciantes?", a: "Não. Recomendamos experiência prévia em trekkings longos." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-chapada-diamantina",
    continent: "Brasil",
    country: "Brasil",
    region: "Bahia",
    slug: "brasil/chapada-diamantina",
    name: "Chapada Diamantina",
    bestTime: "Mar–Out (período mais seco); Nov–Fev pode ter chuvas intensas.",
    tags: ["trekking", "fotografia", "bem-estar", "cultura", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Chapada Diamantina mountains with waterfalls and dramatic cliffs, Brazilian cerrado landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Montanhas, cânions e cachoeiras em meio à caatinga e ao cerrado baiano. Uma Chapada para caminhar, contemplar e se reconectar.",
    highlights: [
      "Cachoeira da Fumaça e outras quedas monumentais",
      "Trilhas no Vale do Pati",
      "Morro do Pai Inácio",
      "Grutas e poços azuis",
      "Vilas históricas de mineração"
    ],
    beyondUsual: [
      "Travessia do Vale do Pati com pernoites em casas locais.",
      "Trilhas pouco visitadas com guias especializados.",
      "Gastronomia de fazenda com produtos locais."
    ],
    stays: [],
    faq: [
      { q: "Precisa de preparo físico?", a: "Para trilhas longas sim, mas há opções para todos os níveis." },
      { q: "Qual a melhor base?", a: "Lençóis é a mais estruturada, mas outras vilas têm charme." },
      { q: "Vale a pena fazer o Vale do Pati?", a: "É uma das melhores travessias do Brasil para quem curte trekking." },
      { q: "Quantos dias ficar?", a: "5 a 7 noites permitem bom equilíbrio." },
      { q: "Dá para ir com crianças?", a: "Sim, escolhendo trilhas adequadas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-chapada-dos-veadeiros",
    continent: "Brasil",
    country: "Brasil",
    region: "Goiás",
    slug: "brasil/chapada-dos-veadeiros",
    name: "Chapada dos Veadeiros",
    bestTime: "Mai–Set (seca) para cachoeiras acessíveis; Out–Abr pode ter trilhas fechadas por chuva.",
    tags: ["trekking", "bem-estar", "fotografia", "remoto", "conservacao"],
    imageAiPrompt: "Ultra realistic photo of Chapada dos Veadeiros waterfalls and cerrado landscape, crystal clear waters, dramatic rock formations, no people.",
    imageOverrideUrl: "",
    intro: "Energia, natureza e misticismo no coração do cerrado. Cachoeiras de tirar o fôlego e uma comunidade vibrante em Alto Paraíso.",
    highlights: [
      "Cachoeiras dentro e fora do parque",
      "Trilhas no Parque Nacional",
      "Vale da Lua e formações rochosas",
      "Comunidades alternativas e bem-estar",
      "Céu estrelado intenso"
    ],
    beyondUsual: [
      "Cachoeiras menos conhecidas fora do circuito turístico.",
      "Experiências de bem-estar e retiros.",
      "Trilhas ao nascer do sol para evitar multidões."
    ],
    stays: [],
    faq: [
      { q: "É muito cheio?", a: "Pode ser em feriados, mas a curadoria ajuda a evitar picos." },
      { q: "Precisa de guia?", a: "Para o parque sim, para outras cachoeiras depende." },
      { q: "É bom para casais?", a: "Sim, muitas opções românticas e de relaxamento." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para aproveitar bem." },
      { q: "Tem boa gastronomia?", a: "Sim, Alto Paraíso surpreende positivamente." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-fernando-de-noronha",
    continent: "Brasil",
    country: "Brasil",
    region: "Pernambuco",
    slug: "brasil/fernando-de-noronha",
    name: "Fernando de Noronha",
    bestTime: "Ago–Dez para mergulho com melhor visibilidade; Mar–Jul para surfe.",
    tags: ["praia", "mergulho", "lua-de-mel", "fotografia", "conservacao"],
    imageAiPrompt: "Ultra realistic aerial photo of Fernando de Noronha with turquoise waters, dramatic rock formations and pristine beaches, tropical paradise, no people.",
    imageOverrideUrl: "",
    intro: "O arquipélago mais exclusivo do Brasil: águas cristalinas, vida marinha abundante e controle de visitação que preserva a magia.",
    highlights: [
      "Praias paradisíacas e enseadas",
      "Mergulho com tartarugas e golfinhos",
      "Trilhas com vistas cinematográficas",
      "Pôr do sol no Forte",
      "Vida marinha única"
    ],
    beyondUsual: [
      "Mergulho em pontos menos frequentados com operadoras selecionadas.",
      "Trilhas ao amanhecer para evitar fluxo.",
      "Experiências gastronômicas com ingredientes locais."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são ideais?", a: "5 a 7 noites para mergulho e praias com calma." },
      { q: "É muito caro?", a: "Sim, mas a exclusividade e preservação justificam." },
      { q: "Precisa reservar com antecedência?", a: "Sim, especialmente para pousadas e mergulhos." },
      { q: "É bom para lua de mel?", a: "Perfeito para casais que amam natureza." },
      { q: "Verei golfinhos?", a: "Muito provável, especialmente na Baía dos Golfinhos." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-bonito",
    continent: "Brasil",
    country: "Brasil",
    region: "Mato Grosso do Sul",
    slug: "brasil/bonito",
    name: "Bonito & Serra da Bodoquena",
    bestTime: "Ano todo, com melhor visibilidade Dez–Mar; Jun–Set é alta temporada.",
    tags: ["mergulho", "trekking", "familia", "fotografia", "conservacao"],
    imageAiPrompt: "Ultra realistic underwater photo of crystal clear waters in Bonito Brazil with fish and aquatic vegetation, natural light filtering through, no people.",
    imageOverrideUrl: "",
    intro: "Águas tão claras que parecem irreais. Bonito é ecoturismo referência: flutuação, grutas e natureza preservada pelo modelo sustentável.",
    highlights: [
      "Flutuação em rios cristalinos",
      "Gruta do Lago Azul",
      "Cachoeiras e trilhas",
      "Mergulho em abismos",
      "Observação de fauna aquática"
    ],
    beyondUsual: [
      "Flutuações em rios menos visitados.",
      "Combinação estratégica de passeios para evitar filas.",
      "Extensões para a Serra da Bodoquena e Pantanal."
    ],
    stays: [],
    faq: [
      { q: "Precisa saber nadar?", a: "Para flutuação não, mas ajuda ter conforto na água." },
      { q: "É bom para crianças?", a: "Sim, excelente destino para famílias." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para os principais atrativos." },
      { q: "Posso combinar com Pantanal?", a: "Sim, é uma das melhores combinações do Brasil." },
      { q: "Os passeios são muito cheios?", a: "O sistema de vouchers controla, mas alta temporada exige planejamento." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-jericoacoara",
    continent: "Brasil",
    country: "Brasil",
    region: "Ceará",
    slug: "brasil/jericoacoara",
    name: "Jericoacoara",
    bestTime: "Jul–Dez para ventos constantes e céu limpo; Jan–Jun pode ter chuvas.",
    tags: ["praia", "bem-estar", "lua-de-mel", "fotografia", "trekking"],
    imageAiPrompt: "Ultra realistic photo of Jericoacoara dunes and lagoons at sunset, dramatic coastal landscape, golden light, no people.",
    imageOverrideUrl: "",
    intro: "Vila de pescadores que virou ícone: dunas, lagoas e pôr do sol perfeito. Jeri equilibra rusticidade e conforto para quem busca o litoral brasileiro autêntico.",
    highlights: [
      "Pôr do sol na Duna do Pôr do Sol",
      "Lagoas de água doce",
      "Kitesurf e windsurf",
      "Passeios de buggy",
      "Ruas de areia e vida noturna"
    ],
    beyondUsual: [
      "Passeios a lagoas menos conhecidas fora do circuito.",
      "Experiências de bem-estar e yoga.",
      "Jantares em locais com ingredientes locais."
    ],
    stays: [],
    faq: [
      { q: "É muito cheio?", a: "Pode ser em alta temporada, mas a curadoria encontra equilíbrio." },
      { q: "Como chegar?", a: "Via Fortaleza ou Jijoca de Jericoacoara." },
      { q: "É bom para kitesurf?", a: "Um dos melhores do Brasil de julho a dezembro." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para curtir sem pressa." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, Rota das Emoções inclui Jeri, Delta e Lençóis." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-serra-da-capivara",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/serra-da-capivara",
    name: "Serra da Capivara (PI)",
    bestTime: "Mai–Set (seca) para trilhas confortáveis e luz cinematográfica nos paredões.",
    tags: ["cultura", "fotografia", "trekking", "remoto", "conservacao"],
    imageAiPrompt: "Ultra realistic editorial photo of Serra da Capivara National Park in Piauí, Brazil, sandstone cliffs at golden hour with prehistoric rock paintings, caatinga landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Serra da Capivara é um dos sítios arqueológicos mais importantes do mundo: paredões de arenito esculpidos pelo tempo guardam pinturas rupestres com mais de 25 mil anos. Uma viagem rara, de profundidade histórica e paisagens de cinema na caatinga piauiense.",
    highlights: [
      "Pinturas rupestres milenares em sítios ao ar livre",
      "Trilhas pelos cânions e boqueirões de arenito",
      "Museu do Homem Americano em São Raimundo Nonato",
      "Pôr do sol no Desfiladeiro da Capivara",
      "Visita ao Museu da Natureza"
    ],
    beyondUsual: [
      "Guia local com leitura aprofundada das pinturas e contexto arqueológico.",
      "Saídas fotográficas ao amanhecer e ao entardecer, quando a luz revela texturas.",
      "Encontro com ceramistas da Cerâmica Serra da Capivara — design contemporâneo com raízes ancestrais."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Entre maio e setembro, na seca, com clima mais ameno e trilhas confortáveis." },
      { q: "Quantos dias devo ficar?", a: "3 a 4 noites permitem visitar os principais sítios sem pressa." },
      { q: "Como chegar?", a: "Voo até Teresina (PI) ou Petrolina (PE) e transfer rodoviário até São Raimundo Nonato." },
      { q: "É adequado para crianças?", a: "Sim, com trilhas selecionadas conforme idade e ritmo." },
      { q: "Preciso de guia?", a: "Sim, a entrada nos sítios é obrigatoriamente acompanhada por guia credenciado." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "brasil-cristalino",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/cristalino",
    name: "Cristalino (Alta Floresta, MT)",
    bestTime: "Mai–Set (seca) para trilhas e observação de aves; Out–Abr para floresta exuberante e cheia de vida.",
    tags: ["conservacao", "fotografia", "remoto", "trekking", "navegacao", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of the Cristalino River and pristine southern Amazon rainforest with canopy observation tower at golden hour, mist, editorial travel style, no people.",
    imageOverrideUrl: "",
    intro: "No sul da Amazônia mato-grossense, a Reserva Particular do Patrimônio Natural Cristalino guarda uma das florestas mais bem preservadas do bioma. Rio de águas escuras, biodiversidade rara e torres de observação acima da copa: uma das experiências de natureza mais profundas do Brasil.",
    highlights: [
      "Torres de observação a 50m acima da copa da floresta",
      "Navegação pelo Rio Cristalino e seus afluentes",
      "Trilhas interpretativas com guias naturalistas",
      "Observação de aves raras (mais de 600 espécies)",
      "Avistamento de primatas e fauna amazônica"
    ],
    beyondUsual: [
      "Amanhecer no topo da torre, com a floresta despertando em camadas de som.",
      "Saídas dedicadas à fotografia de fauna com guias especializados.",
      "Imersão em projeto de conservação ativo — viagem com propósito real."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Maio a setembro (seca) facilita trilhas e observação; a estação chuvosa traz floresta mais exuberante." },
      { q: "Quantos dias devo ficar?", a: "Mínimo de 4 noites para aproveitar trilhas, rio e torres com tranquilidade." },
      { q: "Como chegar?", a: "Voo até Alta Floresta (MT) e transfer terrestre + barco até o lodge." },
      { q: "É indicado para birdwatchers?", a: "Sim, é um dos destinos mais cobiçados do mundo para observação de aves." },
      { q: "Dá para ir com crianças?", a: "Sim, com atividades ajustadas à idade e ritmo familiar." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "brasil-rio-de-janeiro",
    continent: "Brasil",
    country: "Brasil",
    region: "Sudeste",
    slug: "brasil/sudeste/rio-de-janeiro",
    name: "Rio de Janeiro",
    bestTime: "Abr–Jun e Set–Nov, com clima ameno, menos chuva e luz dourada nas montanhas.",
    tags: ["cultura", "gastronomia", "praia", "fotografia", "bem-estar", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Rio de Janeiro at golden hour with Sugarloaf, Christ the Redeemer and Copacabana beach, lush green mountains meeting turquoise sea, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Cidade-paisagem onde montanha, mata e mar se encontram em escala dramática. O Rio é cultura viva, gastronomia em ascensão e mirantes inesquecíveis — uma das cidades mais cenográficas do planeta, com camadas para muito além do óbvio.",
    highlights: [
      "Cristo Redentor e Pão de Açúcar",
      "Praias de Ipanema, Leblon e Copacabana",
      "Centro histórico e Boulevard Olímpico",
      "Floresta da Tijuca e mirantes",
      "Cena gastronômica e cultural contemporânea"
    ],
    beyondUsual: [
      "Trilha guiada até o topo do Morro Dois Irmãos ao amanhecer.",
      "Roteiro privado de samba de raiz no Centro com curador musical.",
      "Helicóptero ao pôr do sol sobre a Baía de Guanabara."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Abril–junho e setembro–novembro: clima ameno, menos chuva e cidade mais tranquila." },
      { q: "Quantos dias devo ficar?", a: "5 a 7 noites para curtir cidade, praias e excursões com calma." },
      { q: "Onde se hospedar?", a: "Ipanema e Leblon para praia; Santa Teresa para charme histórico; Copacabana para clássico." },
      { q: "Vale a pena ir no Réveillon ou Carnaval?", a: "Sim, mas com planejamento antecipado e curadoria de logística — montamos roteiros sob medida." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Búzios, Paraty ou Costa Verde funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-cataratas-iguacu",
    continent: "Brasil",
    country: "Brasil",
    region: "Sul",
    slug: "brasil/sul/cataratas-iguacu",
    name: "Cataratas do Iguaçu",
    bestTime: "Abr–Jun e Set–Out, com clima ameno e vazão equilibrada nas quedas.",
    tags: ["fotografia", "familia", "conservacao", "trekking"],
    imageAiPrompt: "Ultra realistic aerial photo of Iguaçu Falls at golden hour with rainbow over the horseshoe falls, surrounded by emerald rainforest, mist rising, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Uma das maiores maravilhas naturais do planeta: 275 quedas espalhadas em ferradura, cercadas pela Mata Atlântica preservada. Iguaçu é potência sensorial — som, água e luz em escala monumental — e merece curadoria de tempo e ritmo.",
    highlights: [
      "Trilha das Cataratas no lado brasileiro",
      "Garganta do Diabo no lado argentino",
      "Macuco Safari (passeio de barco até as quedas)",
      "Voo de helicóptero sobre as Cataratas",
      "Parque das Aves e Itaipu Binacional"
    ],
    beyondUsual: [
      "Café da manhã no Belmond Hotel das Cataratas, com acesso exclusivo ao parque antes da abertura.",
      "Jantar ao luar com vista para as quedas em noites de lua cheia.",
      "Visita guiada a projeto de conservação da Mata Atlântica na região."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias devo ficar?", a: "3 a 4 noites para visitar os dois lados e atividades complementares." },
      { q: "Lado brasileiro ou argentino?", a: "Os dois — perspectivas completamente diferentes e complementares." },
      { q: "Qual a melhor época para visitar?", a: "Abril–junho e setembro–outubro: clima ameno e vazão equilibrada." },
      { q: "É bom para crianças?", a: "Sim, com infraestrutura excelente e atividades para todas as idades." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Bonito ou Buenos Aires funcionam bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-canions-do-sul",
    continent: "Brasil",
    country: "Brasil",
    region: "Sul",
    slug: "brasil/sul/canions-do-sul",
    name: "Cânions do Sul (Aparados da Serra)",
    bestTime: "Abr–Jun e Set–Nov, com céu limpo, luz dourada e paisagens nítidas; inverno traz névoa e drama.",
    tags: ["trekking", "fotografia", "remoto", "conservacao", "montanha"],
    imageAiPrompt: "Ultra realistic editorial photo of Itaimbezinho canyon in Aparados da Serra Brazil with vertical basalt cliffs covered in araucaria pines and mist at golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Paredões verticais de basalto que cortam o planalto entre Santa Catarina e Rio Grande do Sul. Os cânions do sul são uma das paisagens mais imponentes do Brasil — silêncio, araucárias e abismos que se revelam entre névoas e luz dourada.",
    highlights: [
      "Cânion Itaimbezinho e Trilha do Vértice",
      "Cânion Fortaleza com seus mirantes",
      "Cascata do Tigre Preto",
      "Vilarejo de Cambará do Sul",
      "Trilha do Rio do Boi (no fundo do cânion)"
    ],
    beyondUsual: [
      "Saída fotográfica ao amanhecer no Fortaleza, quando a névoa se levanta dos paredões.",
      "Visita a produtores de vinho e queijo da serra gaúcha com curadoria.",
      "Caminhada interpretativa com guia naturalista pelos campos de cima da serra."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Abril–junho e setembro–novembro têm céu mais limpo; inverno (jun–ago) traz drama com névoa e frio." },
      { q: "Quantos dias devo ficar?", a: "3 a 5 noites para conhecer os principais cânions com calma." },
      { q: "Como chegar?", a: "Voo até Porto Alegre ou Caxias do Sul e transfer terrestre até Cambará do Sul." },
      { q: "É bom para crianças?", a: "Sim, com trilhas selecionadas conforme idade." },
      { q: "Dá para combinar com a Serra Gaúcha?", a: "Sim, é um conjugado natural e muito recomendado." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-rota-das-emocoes",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/rota-das-emocoes",
    name: "Rota das Emoções (Jeri, Delta & Lençóis)",
    bestTime: "Jul–Set para lagoas cheias nos Lençóis; Jun–Dez para ventos em Jeri.",
    tags: ["roadtrip", "fotografia", "praia", "remoto", "navegacao", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Lençóis Maranhenses with endless white dunes and turquoise freshwater lagoons at golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Três paisagens brasileiras singulares ligadas por uma rota cênica entre Ceará, Piauí e Maranhão: Jericoacoara com seu vento e dunas, o labiríntico Delta do Parnaíba e os irreais Lençóis Maranhenses. Uma das jornadas mais sensoriais do Brasil.",
    highlights: [
      "Pôr do sol na Duna do Pôr do Sol em Jericoacoara",
      "Navegação pelos furos do Delta do Parnaíba",
      "Lagoas Azul e Bonita nos Lençóis Maranhenses",
      "Vilarejo de Atins e Caburé",
      "Travessia 4x4 entre as três paisagens"
    ],
    beyondUsual: [
      "Voo panorâmico de teco-teco sobre os Lençóis ao amanhecer.",
      "Pernoite em casa de farol no Delta com astronomia.",
      "Travessia de barco-charter privado pelo Parnaíba com chef a bordo."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Julho a setembro para lagoas cheias nos Lençóis; junho a dezembro para ventos em Jeri." },
      { q: "Quantos dias devo ficar?", a: "10 a 14 noites para fazer a rota completa sem pressa." },
      { q: "Como chegar?", a: "Voo até Fortaleza (entrada) e saída por São Luís — ou o contrário." },
      { q: "É bom para crianças?", a: "Sim, com logística bem estruturada e ritmo ajustado." },
      { q: "Posso fazer só uma parte?", a: "Sim — Lençóis isolado também funciona muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-belem-marajo",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/belem-marajo",
    name: "Belém & Ilha de Marajó",
    bestTime: "Jul–Dez (menos chuva), com clima mais ameno para cidade e ilha.",
    tags: ["cultura", "gastronomia", "navegacao", "fotografia", "conservacao", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Belém Ver-o-Peso market at the Amazon river at golden hour with traditional boats and mangroves of Marajó in the distance, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Belém é a Amazônia urbana em sua forma mais saborosa: mercados centenários, cena gastronômica em ebulição e arquitetura belle époque banhada pelo rio. A poucas horas, a Ilha de Marajó revela búfalos, manguezais e um modo de vida ribeirinho único.",
    highlights: [
      "Mercado Ver-o-Peso ao amanhecer",
      "Estação das Docas e cena gastronômica paraense",
      "Forte do Presépio e Cidade Velha",
      "Travessia para Marajó e fazendas de búfalo",
      "Praias de água doce e manguezais"
    ],
    beyondUsual: [
      "Roteiro gastronômico com chef paraense entre mercados e bistrôs autorais.",
      "Vivência em fazenda de búfalos em Marajó com queijaria artesanal.",
      "Saída de barco ao pôr do sol pela Baía do Guajará com cuias e tucupi."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Julho a dezembro, com menos chuva." },
      { q: "Quantos dias devo ficar?", a: "5 a 7 noites para combinar Belém e Marajó com calma." },
      { q: "Como chegar a Marajó?", a: "Travessia de balsa ou lancha rápida saindo de Belém." },
      { q: "Belém vale a pena pela gastronomia?", a: "Sim — é uma das cidades gastronômicas mais relevantes do Brasil hoje." },
      { q: "Dá para combinar com outros destinos amazônicos?", a: "Sim, conjugados com Alter do Chão funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-salvador",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/salvador",
    name: "Salvador",
    bestTime: "Set–Mar para sol e praia; o ano todo para cultura e gastronomia.",
    tags: ["cultura", "gastronomia", "fotografia", "praia", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of Salvador Pelourinho with colorful baroque facades in pastel tones at golden hour, ancient cobblestone streets, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Primeira capital do Brasil, Salvador é cultura em estado bruto: arquitetura colonial em tons vibrantes, ritmo afro-brasileiro pulsando nas ruas e uma das culinárias mais ricas do país. Cidade de camadas históricas e energia única.",
    highlights: [
      "Pelourinho e Centro Histórico (Patrimônio UNESCO)",
      "Igreja e Convento de São Francisco",
      "Elevador Lacerda e Mercado Modelo",
      "Igreja do Senhor do Bonfim",
      "Praias da Barra, Itapuã e Stella Maris"
    ],
    beyondUsual: [
      "Roda de capoeira angola privada com mestre tradicional.",
      "Aula de cozinha baiana com chef em terreiro contemporâneo.",
      "Visita curada a ateliês de artistas afro-brasileiros no Pelourinho."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Setembro a março para sol e praia; o ano todo para cultura." },
      { q: "Quantos dias devo ficar?", a: "4 a 5 noites para Salvador; 7 a 10 se combinar com litoral baiano." },
      { q: "Onde se hospedar?", a: "Pelourinho para imersão histórica; Barra ou Rio Vermelho para praia e gastronomia." },
      { q: "É bom para famílias?", a: "Sim, com roteiro bem desenhado e atividades selecionadas." },
      { q: "Dá para combinar com Boipeba ou Marau?", a: "Sim, é um conjugado natural e muito recomendado." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-boipeba",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/boipeba",
    name: "Ilha de Boipeba",
    bestTime: "Set–Mar, com sol, mar calmo e visibilidade ideal para snorkel nas piscinas naturais.",
    tags: ["praia", "lua-de-mel", "bem-estar", "remoto", "mergulho", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Boipeba Island Bahia with deserted white sand beach, turquoise sea and coral reef tidal pools, coconut palms, golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Ilha sem carros, sem multidão e com algumas das praias mais preservadas do Brasil. Boipeba é o refúgio baiano para quem busca lentidão, mar calmo e a sofisticação do simples — pés na areia, peixe fresco e silêncio.",
    highlights: [
      "Praia de Moreré e suas piscinas naturais",
      "Praia da Cueira e Tassimirim",
      "Travessia a pé pela orla até Cova da Onça",
      "Pôr do sol no Rio das Garças",
      "Snorkel nos recifes de coral"
    ],
    beyondUsual: [
      "Charter privado de barco entre praias desertas, com chef e almoço a bordo.",
      "Massagem ao som do mar em deck reservado de pousada-boutique.",
      "Jantar autoral com peixes locais em pé na areia, sob estrelas."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Setembro a março, com sol e mar calmo." },
      { q: "Quantos dias devo ficar?", a: "4 a 6 noites para desacelerar de verdade." },
      { q: "Como chegar?", a: "Voo até Salvador + transfer terrestre + travessia de lancha (ou direto de Salvador por catamarã)." },
      { q: "Tem internet e estrutura?", a: "Sim, com boas pousadas-boutique; mas o charme está justamente em desconectar." },
      { q: "Dá para combinar com Marau ou Salvador?", a: "Sim, é um dos melhores conjugados do litoral baiano." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-marau",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/marau",
    name: "Península de Maraú",
    bestTime: "Set–Mar, com sol pleno, mar calmo e dias longos.",
    tags: ["praia", "lua-de-mel", "bem-estar", "remoto", "mergulho", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Península de Maraú Bahia with deserted white sand beach, coconut palms, mangroves and Taipus de Fora natural pool reef, golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Faixa de terra entre o Atlântico e a Baía de Camamu, Maraú reúne algumas das praias mais sofisticadas do Nordeste brasileiro — areia branca, manguezais e piscinas naturais formadas por recifes. Um refúgio para descanso de alto padrão.",
    highlights: [
      "Praia de Taipus de Fora e suas piscinas naturais",
      "Praia do Cassange e Algodões",
      "Barra Grande e seu pôr do sol",
      "Travessia pela Baía de Camamu",
      "Trilhas costeiras e mangues"
    ],
    beyondUsual: [
      "Charter privado pela Baía de Camamu com paradas em ilhas desertas.",
      "Aula de stand-up paddle ao amanhecer em águas calmas.",
      "Jantar de frutos do mar à beira-mar com chef autoral."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Setembro a março, com sol pleno e mar calmo." },
      { q: "Quantos dias devo ficar?", a: "5 a 7 noites para curtir sem pressa." },
      { q: "Como chegar?", a: "Voo até Salvador + transfer terrestre + travessia, ou voo direto a Ilhéus + transfer terrestre." },
      { q: "Maraú ou Boipeba?", a: "Maraú tem mais infraestrutura de pousadas-boutique; Boipeba é mais rústica e isolada." },
      { q: "É bom para famílias?", a: "Sim, com mar calmo e atividades para todas as idades." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== LITORAIS BRASILEIROS (curadoria por estado) =====
  {
    id: "brasil-litoral-alagoano",
    continent: "Brasil",
    country: "Brasil",
    region: "Alagoas",
    slug: "brasil/litoral-alagoano",
    name: "Litoral Alagoano",
    bestTime: "Set–Mar (mar mais calmo e visibilidade nas piscinas naturais).",
    tags: ["praia", "mergulho", "lua-de-mel", "familia", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of Maragogi natural pools in Alagoas, Brazil, turquoise sea, white sand, coconut trees, no people.",
    imageOverrideUrl: "",
    intro: "Águas tranquilas, piscinas naturais e pequenas vilas litorâneas: o Litoral Alagoano é o Caribe brasileiro em sua versão mais sofisticada e silenciosa.",
    highlights: [
      "Maragogi e as Galés — piscinas naturais a 6 km da costa",
      "São Miguel dos Milagres e a Rota Ecológica",
      "Praia do Patacho e Lagoa Azeda",
      "Praia do Gunga e falésias coloridas",
      "Maceió, Pajuçara e jangadas para as piscinas naturais"
    ],
    beyondUsual: [
      "Pousadas-boutique pé na areia na Rota Ecológica.",
      "Saídas privativas para piscinas naturais antes da multidão.",
      "Jantares em casas de praia com chefs locais."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "São Miguel dos Milagres para sofisticação; Maragogi para acesso às Galés; Maceió para infraestrutura urbana." },
      { q: "Quando o mar fica mais calmo?", a: "Entre setembro e março, com melhor visibilidade nas piscinas naturais." },
      { q: "É bom para lua de mel?", a: "Sim, especialmente a Rota Ecológica dos Milagres." },
      { q: "Dá para combinar com Pernambuco?", a: "Sim, Porto de Galinhas e Recife são vizinhos." },
      { q: "Quantos dias?", a: "5 a 7 noites permitem combinar 2 bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-pernambucano",
    continent: "Brasil",
    country: "Brasil",
    region: "Pernambuco",
    slug: "brasil/litoral-pernambucano",
    name: "Litoral Pernambucano",
    bestTime: "Set–Mar (menos chuva, mar calmo e melhor visibilidade).",
    tags: ["praia", "mergulho", "cultura", "lua-de-mel", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Porto de Galinhas natural pools with jangadas, Pernambuco, turquoise water, no people.",
    imageOverrideUrl: "",
    intro: "De Porto de Galinhas a Tamandaré, o litoral de Pernambuco combina mar transparente, piscinas naturais, jangadas e vilas charmosas — com curadoria que foge do óbvio.",
    highlights: [
      "Porto de Galinhas e suas piscinas naturais",
      "Praia dos Carneiros e a capela à beira-mar",
      "Tamandaré e Praia do Cupe",
      "Maracaípe — surfe e ‘pôr do sol do rio’",
      "Recife Antigo e Olinda como complemento cultural"
    ],
    beyondUsual: [
      "Pousadas-boutique em Serrambi e Carneiros.",
      "Passeios de catamarã privativo em Carneiros ao entardecer.",
      "Rota gastronômica em Olinda e Recife."
    ],
    stays: [],
    faq: [
      { q: "Carneiros ou Porto de Galinhas?", a: "Carneiros é mais bucólica; Porto tem mais infraestrutura." },
      { q: "Qual a melhor época?", a: "Setembro a março, com mar mais calmo." },
      { q: "Dá para combinar com Fernando de Noronha?", a: "Sim, voos diretos do Recife." },
      { q: "É bom para famílias?", a: "Sim, mar calmo e atividades leves." },
      { q: "Quantos dias?", a: "5 a 7 noites permitem combinar praia + Recife/Olinda." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-baiano",
    continent: "Brasil",
    country: "Brasil",
    region: "Bahia",
    slug: "brasil/litoral-baiano",
    name: "Litoral Baiano",
    bestTime: "Set–Mar para sol; Abr–Ago tem clima mais ameno e baixa temporada elegante.",
    tags: ["praia", "cultura", "gastronomia", "lua-de-mel", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of the Bahia coastline, Brazil, deep blue sea, palm trees, Atlantic forest, no people.",
    imageOverrideUrl: "",
    intro: "Mais de 1.000 km de costa: do norte sofisticado da Praia do Forte ao sul rústico de Trancoso, passando por Itacaré, Maraú e Boipeba. A Bahia tem praia para todo tipo de viajante.",
    highlights: [
      "Praia do Forte e Costa do Sauípe — resorts e Projeto Tamar",
      "Itacaré — surfe, cachoeiras e Mata Atlântica",
      "Península de Maraú — Barra Grande e Taipus de Fora",
      "Boipeba — vila isolada e mar transparente",
      "Trancoso, Caraíva e Espelho — sul da Bahia atemporal",
      "Morro de São Paulo — base clássica para 1ª viagem"
    ],
    beyondUsual: [
      "Casas privativas em Trancoso e Espelho com chef à disposição.",
      "Travessias de barco entre Boipeba e Morro de São Paulo.",
      "Jantares à beira-mar em Caraíva sem energia elétrica."
    ],
    stays: [],
    faq: [
      { q: "Qual região escolher?", a: "Norte (Praia do Forte) para resorts; Itacaré para natureza ativa; Maraú/Boipeba para isolamento; Trancoso/Caraíva para charme atemporal." },
      { q: "Quando ir?", a: "Setembro a março para sol firme; abril a agosto para baixa temporada elegante." },
      { q: "Dá para combinar várias bases?", a: "Sim, é o ideal — recomendamos 2 ou 3 bases distintas." },
      { q: "É bom para lua de mel?", a: "Excelente, especialmente Trancoso, Espelho e Maraú." },
      { q: "Quantos dias?", a: "7 a 12 noites para combinar mais de uma base." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-cearense",
    continent: "Brasil",
    country: "Brasil",
    region: "Ceará",
    slug: "brasil/litoral-cearense",
    name: "Litoral Cearense",
    bestTime: "Jul–Fev (sol firme e ventos para kite); Mar–Jun tem chuvas mais frequentes.",
    tags: ["praia", "kitesurf", "fotografia", "lua-de-mel", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Jericoacoara coast in Ceará, dunes, sunset, lone palm tree, no people.",
    imageOverrideUrl: "",
    intro: "Dunas que invadem o mar, lagoas azuis e vilas de pescadores. O Ceará tem o litoral mais cinematográfico do Brasil — e a curadoria certa transforma a viagem.",
    highlights: [
      "Jericoacoara — pôr do sol na duna e Pedra Furada",
      "Lagoa do Paraíso e Lagoa Azul",
      "Atins, Caburé e o ‘Litoral Pequenos Lençóis’ (transição com MA)",
      "Praia de Tatajuba e Guriú",
      "Canoa Quebrada, falésias e dunas coloridas",
      "Cumbuco — kitesurf e dunas"
    ],
    beyondUsual: [
      "Pousadas-boutique pé na areia em Jericoacoara.",
      "Travessia 4x4 Jeri → Atins → Lençóis Maranhenses.",
      "Saídas de buggy privativo em horários sem fluxo."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "Jericoacoara concentra o melhor; complemente com Canoa Quebrada ou Atins." },
      { q: "Quando ir para kitesurf?", a: "Julho a janeiro tem vento constante." },
      { q: "Dá para combinar com Lençóis Maranhenses?", a: "Sim, pela Rota das Emoções (4x4)." },
      { q: "É bom para famílias?", a: "Sim, com bases certas — Jeri pode ser mais animada à noite." },
      { q: "Quantos dias?", a: "5 a 8 noites, dependendo das bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-rio-grande-do-norte",
    continent: "Brasil",
    country: "Brasil",
    region: "Rio Grande do Norte",
    slug: "brasil/litoral-rio-grande-do-norte",
    name: "Litoral do Rio Grande do Norte",
    bestTime: "Set–Mar (sol firme, mar calmo); Abr–Ago pode ter chuvas pontuais.",
    tags: ["praia", "lua-de-mel", "kitesurf", "familia", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of Pipa beach in Rio Grande do Norte, red cliffs, turquoise sea, no people.",
    imageOverrideUrl: "",
    intro: "Falésias avermelhadas, mar verde-azulado e ventos constantes. O litoral potiguar reúne charme bucólico (Pipa) e natureza dramática (Maracajaú, Galinhos).",
    highlights: [
      "Pipa — falésias, Baía dos Golfinhos e vida boêmia",
      "Praia do Madeiro e Chapadão",
      "Maracajaú — parrachos e mergulho",
      "Galinhos — vila isolada com travessia de barco",
      "São Miguel do Gostoso — kitesurf e vento constante",
      "Natal e Genipabu — buggy nas dunas"
    ],
    beyondUsual: [
      "Pousadas-boutique no alto das falésias em Pipa.",
      "Passeios privativos a Galinhos para um dia sem turistas.",
      "Mergulho com guia certificado nos parrachos de Maracajaú."
    ],
    stays: [],
    faq: [
      { q: "Pipa ou São Miguel do Gostoso?", a: "Pipa para charme/vida noturna; Gostoso para vento e silêncio." },
      { q: "Qual a melhor época?", a: "Setembro a março para sol firme." },
      { q: "Dá para combinar com Ceará?", a: "Sim, voos curtos e estradas conectadas." },
      { q: "É bom para lua de mel?", a: "Sim, Pipa e seu entorno têm pousadas românticas." },
      { q: "Quantos dias?", a: "5 a 7 noites com 1 ou 2 bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-paraibano",
    continent: "Brasil",
    country: "Brasil",
    region: "Paraíba",
    slug: "brasil/litoral-paraibano",
    name: "Litoral Paraibano",
    bestTime: "Set–Mar (sol firme e mar calmo).",
    tags: ["praia", "natureza", "lua-de-mel", "familia", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Coqueirinho beach in Paraíba, red cliffs, palm trees, turquoise sea, no people.",
    imageOverrideUrl: "",
    intro: "Pequeno, charmoso e ainda pouco conhecido. O litoral paraibano combina o Ponto Mais Oriental das Américas, falésias coloridas e vilas tranquilas.",
    highlights: [
      "Praia do Coqueirinho — falésias multicoloridas",
      "Tambaba — primeira praia naturista oficial do Brasil",
      "Praia de Tabatinga e os mirantes",
      "João Pessoa, Tambaú e o Pôr do Sol no Jacaré",
      "Ponta do Seixas — ponto mais oriental das Américas",
      "Areia Vermelha — banco de areia em alto-mar"
    ],
    beyondUsual: [
      "Pousadas-boutique no Conde, fora do circuito de massa.",
      "Saídas de catamarã privativo a Areia Vermelha.",
      "Roteiros gastronômicos em João Pessoa."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "Conde (litoral sul) para charme e Coqueirinho; João Pessoa para infraestrutura." },
      { q: "É bom para famílias?", a: "Sim, com mar calmo na maior parte do litoral." },
      { q: "Dá para combinar com Pernambuco e RN?", a: "Sim, distâncias curtas por estrada." },
      { q: "Quando ir?", a: "Setembro a março para sol firme." },
      { q: "Quantos dias?", a: "4 a 6 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-santa-catarina",
    continent: "Brasil",
    country: "Brasil",
    region: "Santa Catarina",
    slug: "brasil/litoral-santa-catarina",
    name: "Litoral de Santa Catarina",
    bestTime: "Dez–Mar (alta temporada, calor); Out–Nov e Abr–Mai com clima ameno e menos gente.",
    tags: ["praia", "surfe", "bem-estar", "gastronomia", "natureza"],
    imageAiPrompt: "Ultra realistic aerial photo of Praia do Rosa in Santa Catarina, crescent bay, green hills, Atlantic forest, no people.",
    imageOverrideUrl: "",
    intro: "Mata Atlântica encontrando o mar, baías em forma de meia-lua e gastronomia de origem açoriana. Um litoral mais frio, mais verde e cheio de personalidade.",
    highlights: [
      "Praia do Rosa — baía cinematográfica e baleias-franca (jul–nov)",
      "Florianópolis — Lagoinha do Leste, Joaquina e Mole",
      "Bombinhas e a Reserva Biológica do Arvoredo",
      "Garopaba e Silveira para surfe",
      "Guarda do Embaú — Vila e rio que encontra o mar",
      "Praia do Forte e Jurerê Internacional para sofisticação"
    ],
    beyondUsual: [
      "Avistamento de baleias-franca-austral em Imbituba (jul–nov).",
      "Pousadas-boutique nos morros do Rosa com vista da baía.",
      "Rota gastronômica de ostras em Floripa."
    ],
    stays: [],
    faq: [
      { q: "Rosa ou Floripa?", a: "Rosa é mais charmosa e bucólica; Floripa tem mais variedade de praias e infraestrutura." },
      { q: "Quando ver baleias?", a: "Entre julho e novembro, em Imbituba/Rosa." },
      { q: "Quando ir para sol e mar?", a: "Dezembro a março, mas chove eventualmente." },
      { q: "É bom para famílias?", a: "Sim, com praias calmas no norte da ilha." },
      { q: "Quantos dias?", a: "5 a 8 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-rio-de-janeiro",
    continent: "Brasil",
    country: "Brasil",
    region: "Rio de Janeiro",
    slug: "brasil/litoral-rio-de-janeiro",
    name: "Litoral do Rio de Janeiro",
    bestTime: "Dez–Mar para sol e mar; Abr–Set ameno, com Búzios e Paraty agradáveis o ano todo.",
    tags: ["praia", "navegacao", "lua-de-mel", "gastronomia", "cultura"],
    imageAiPrompt: "Ultra realistic aerial photo of Angra dos Reis tropical islands and turquoise sea in Rio de Janeiro, sailboats, no people.",
    imageOverrideUrl: "",
    intro: "Da Costa Verde à Região dos Lagos: o estado do Rio tem 600 km de costa, com ilhas, vilas coloniais, praias paradisíacas e sofisticação à beira-mar.",
    highlights: [
      "Búzios — praias e vida boêmia internacional",
      "Arraial do Cabo — ‘Caribe brasileiro’ e mar transparente",
      "Cabo Frio e Praia do Forte",
      "Angra dos Reis — 365 ilhas e Ilha Grande",
      "Paraty — centro histórico colonial e Saco do Mamanguá",
      "Trindade — praias selvagens dentro da Mata Atlântica"
    ],
    beyondUsual: [
      "Veleiros privativos em Angra e Paraty.",
      "Pousadas-boutique em Paraty e na Ilha Grande.",
      "Trilha do Saco do Mamanguá com pernoite em barco."
    ],
    stays: [],
    faq: [
      { q: "Búzios ou Paraty?", a: "Búzios é mais sofisticada/social; Paraty é histórica e cercada de natureza." },
      { q: "Vale combinar com a cidade do Rio?", a: "Sim, é a combinação clássica — cidade + 2 bases litorâneas." },
      { q: "Quando ir?", a: "Dezembro a março para sol; ano inteiro para Búzios e Paraty." },
      { q: "É bom para lua de mel?", a: "Sim, especialmente Angra, Paraty e Búzios." },
      { q: "Quantos dias?", a: "7 a 10 noites com 2 ou 3 bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-sao-paulo",
    continent: "Brasil",
    country: "Brasil",
    region: "São Paulo",
    slug: "brasil/litoral-sao-paulo",
    name: "Litoral de São Paulo",
    bestTime: "Dez–Mar para sol firme; Abr–Out com clima mais ameno e menos fluxo.",
    tags: ["praia", "natureza", "surfe", "navegacao", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of Ilhabela coast in São Paulo, lush Atlantic forest meeting the sea, secluded beach, no people.",
    imageOverrideUrl: "",
    intro: "Do litoral norte com Mata Atlântica selvagem ao sul de pequenas vilas: o litoral paulista esconde praias-cinema a poucas horas da capital.",
    highlights: [
      "Ilhabela — arquipélago com 40+ praias e cachoeiras",
      "São Sebastião — Maresias, Camburi e Barra do Una",
      "Ubatuba — Praia do Félix, Lagoinha e Trindade",
      "Paraty Mirim e Picinguaba (Parque Estadual da Serra do Mar)",
      "Juquehy e Barra do Sahy para famílias",
      "Ilha do Cardoso e Ilha Comprida (litoral sul selvagem)"
    ],
    beyondUsual: [
      "Casas de praia privativas com chef em Barra do Una.",
      "Travessias de veleiro em Ilhabela.",
      "Trilhas costeiras na Serra do Mar com guia local."
    ],
    stays: [],
    faq: [
      { q: "Ubatuba ou Ilhabela?", a: "Ilhabela é mais sofisticada e contemplativa; Ubatuba tem mais variedade de praias." },
      { q: "Quando ir?", a: "Dezembro a março para sol; abril a outubro para silêncio." },
      { q: "Dá para combinar com o Rio?", a: "Sim, pela estrada costeira até Paraty." },
      { q: "É bom para famílias?", a: "Sim, com bases certas (Juquehy, Barra do Sahy)." },
      { q: "Quantos dias?", a: "4 a 7 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-espirito-santo",
    continent: "Brasil",
    country: "Brasil",
    region: "Espírito Santo",
    slug: "brasil/litoral-espirito-santo",
    name: "Litoral do Espírito Santo",
    bestTime: "Set–Mar (sol firme e mar calmo).",
    tags: ["praia", "natureza", "gastronomia", "familia", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Itaúnas coast in Espírito Santo, white sand dunes meeting the sea, palm trees, no people.",
    imageOverrideUrl: "",
    intro: "Pouco explorado e cheio de surpresas: dunas, vilas pesqueiras e gastronomia de moqueca capixaba. Um dos litorais mais autênticos do Sudeste.",
    highlights: [
      "Itaúnas — dunas gigantes e vila de forró",
      "Guarapari e Praia do Morro",
      "Anchieta e Castelhanos",
      "Praia do Forno (Reserva Biológica de Comboios)",
      "Vitória e Vila Velha — cultura e moqueca capixaba",
      "Conceição da Barra e suas praias desertas"
    ],
    beyondUsual: [
      "Pousadas-boutique em Itaúnas, próximas ao Parque Estadual.",
      "Roteiros gastronômicos de moqueca capixaba.",
      "Avistamento de tartarugas em Comboios (TAMAR)."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "Itaúnas para natureza/dunas; Guarapari para infraestrutura familiar." },
      { q: "Quando ir?", a: "Setembro a março para sol firme." },
      { q: "Dá para combinar com a Bahia?", a: "Sim, Itaúnas é fronteiriço a Caraíva/Trancoso." },
      { q: "É bom para famílias?", a: "Sim, com praias calmas em Guarapari e Anchieta." },
      { q: "Quantos dias?", a: "4 a 6 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== ÁFRICA =====
  {
    id: "africa-tanzania-serengeti",
    continent: "África",
    country: "Tanzânia",
    region: "Serengeti",
    slug: "africa/tanzania/serengeti",
    name: "Serengeti",
    bestTime: "Jun–Out (migração em áreas-chave) e Dez–Mar (nascimentos em regiões do sul).",
    tags: ["safari", "fotografia", "lua-de-mel", "conservacao", "remoto"],
    imageAiPrompt: "Ultra realistic National Geographic style photo of wildebeest migration in Serengeti at sunrise, dramatic light, no people.",
    imageOverrideUrl: "",
    intro: "Serengeti é o grande teatro da vida selvagem. A Create Travel cura a experiência para ser ética, silenciosa e intensa — menos corrida, mais presença.",
    highlights: [
      "Safáris ao amanhecer e entardecer",
      "Grandes manadas e predadores",
      "Céu estrelado na savana",
      "Extensão estratégica para Ngorongoro",
      "Contato cultural com respeito e contexto"
    ],
    beyondUsual: [
      "Safári com foco em comportamento animal (ética acima do 'clique').",
      "Conservação com transparência (entender impactos reais).",
      "Bases escolhidas por temporada para reduzir deslocamentos e aumentar tempo em campo."
    ],
    stays: [],
    faq: [
      { q: "A migração tem data certa?", a: "Ela varia. Curamos o roteiro pelo seu mês e pelas áreas mais prováveis naquele período." },
      { q: "Quantos dias de safári são ideais?", a: "Em geral 5 a 8 noites entre parques dá profundidade." },
      { q: "É bom para lua de mel?", a: "Sim, para casais que buscam emoção e contemplação." },
      { q: "Dá para combinar com praia?", a: "Sim, Zanzibar pode ser uma extensão (bem curada)." },
      { q: "Como é a ética de observação?", a: "Priorizamos boas práticas: distância, respeito e baixo impacto." },
      { q: "Como falar com consultor?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-tanzania-ngorongoro",
    continent: "África",
    country: "Tanzânia",
    region: "Ngorongoro",
    slug: "africa/tanzania/ngorongoro",
    name: "Ngorongoro",
    bestTime: "Jun–Out para clima seco; Dez–Mar para paisagens verdes e nascimentos.",
    tags: ["safari", "fotografia", "conservacao", "cultura"],
    imageAiPrompt: "Ultra realistic aerial photo of Ngorongoro crater in Tanzania, vast crater with wildlife, dramatic clouds, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "A maior caldeira intacta do mundo: um anfiteatro natural onde a vida selvagem se concentra. Complemento perfeito ao Serengeti.",
    highlights: [
      "Descida à cratera ao amanhecer",
      "Concentração de grandes mamíferos",
      "Rinocerontes negros (um dos poucos locais)",
      "Povos Maasai no entorno",
      "Paisagens vulcânicas dramáticas"
    ],
    beyondUsual: [
      "Visita cultural com comunidades Maasai (respeitosa e com contexto).",
      "Horários de descida para evitar picos de veículos.",
      "Combinação com áreas menos visitadas do norte da Tanzânia."
    ],
    stays: [],
    faq: [
      { q: "Qual a diferença para o Serengeti?", a: "Ngorongoro é uma caldeira fechada com fauna concentrada; Serengeti são planícies abertas com migração." },
      { q: "Vejo rinoceronte lá?", a: "É um dos melhores locais da África Oriental para tentar." },
      { q: "Quantos dias ficar?", a: "1 a 2 noites na área, combinando com Serengeti." },
      { q: "Fica muito cheio de veículos?", a: "Pode ficar; a curadoria de horários ajuda." },
      { q: "É bom para fotografia?", a: "Muito, especialmente ao amanhecer." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-zanzibar",
    continent: "África",
    country: "Tanzânia",
    region: "Zanzibar",
    slug: "africa/zanzibar",
    name: "Zanzibar",
    bestTime: "Jun–Out e Dez–Fev para praias; Mar–Mai são os meses mais chuvosos.",
    tags: ["praia", "cultura", "gastronomia", "lua-de-mel", "mergulho"],
    imageAiPrompt: "Ultra realistic photo of Zanzibar beach with turquoise waters, traditional dhow boats, palm trees, tropical paradise, no people.",
    imageOverrideUrl: "",
    intro: "Praias paradisíacas encontram história e especiarias. Zanzibar é a extensão perfeita após o safári — ou um destino por si só.",
    highlights: [
      "Praias de areia branca e águas turquesa",
      "Stone Town (Patrimônio UNESCO)",
      "Rota das especiarias",
      "Mergulho e snorkel",
      "Gastronomia de influências árabes e africanas"
    ],
    beyondUsual: [
      "Praias menos visitadas no norte e leste da ilha.",
      "Experiência de especiarias com contexto histórico real.",
      "Jantares em rooftops de Stone Town."
    ],
    stays: [],
    faq: [
      { q: "É só praia ou tem mais?", a: "Muito mais: história, cultura e gastronomia únicas." },
      { q: "Quantos dias ficar?", a: "3 a 5 noites equilibram praia e exploração." },
      { q: "Vale combinar com safári?", a: "Sim, uma das melhores combinações." },
      { q: "É seguro?", a: "Sim, com os cuidados normais de viagem." },
      { q: "Qual a melhor praia?", a: "Depende do que você busca — curamos pela sua preferência." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-quenia-masai-mara",
    continent: "África",
    country: "Quênia",
    region: "Masai Mara",
    slug: "africa/quenia/masai-mara",
    name: "Masai Mara",
    bestTime: "Jul–Out para a Grande Migração; ano todo para fauna residente.",
    tags: ["safari", "fotografia", "conservacao", "cultura", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Masai Mara savanna with elephants and acacia trees at golden hour, dramatic African landscape, no people.",
    imageOverrideUrl: "",
    intro: "A continuação do Serengeti em solo queniano: palco da travessia do rio Mara e lar de leões, leopardos e guepardos o ano todo.",
    highlights: [
      "Travessia do Rio Mara (quando a migração cruza)",
      "Grandes felinos em alta densidade",
      "Balões sobre a savana",
      "Cultura Maasai",
      "Conservancies privadas com menos veículos"
    ],
    beyondUsual: [
      "Safáris em conservancies para experiência mais exclusiva.",
      "Caminhadas guiadas em áreas permitidas.",
      "Interações culturais com comunidades Maasai com contexto."
    ],
    stays: [],
    faq: [
      { q: "Quando é a travessia do rio?", a: "Geralmente julho a outubro, mas sem data fixa." },
      { q: "Qual a diferença para o Serengeti?", a: "Masai Mara tem mais densidade de felinos e conservancies exclusivas." },
      { q: "Quantos dias de safári?", a: "4 a 6 noites para boa imersão." },
      { q: "Vale fazer balão?", a: "É uma experiência única, mas cara — curamos pela prioridade." },
      { q: "É bom para lua de mel?", a: "Sim, especialmente em lodges de conservancies." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-africa-do-sul",
    continent: "África",
    country: "África do Sul",
    region: "Kruger & Cidade do Cabo",
    slug: "africa/africa-do-sul",
    name: "África do Sul",
    bestTime: "Mai–Set para safári (seca); Out–Mar para Cidade do Cabo e vinhos.",
    tags: ["safari", "gastronomia", "cultura", "fotografia", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Cape Town with Table Mountain, dramatic coastline, and colorful Bo-Kaap houses, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Do safári ao vinho, da cidade cosmopolita às paisagens dramáticas. A África do Sul é um país inteiro em experiências.",
    highlights: [
      "Safári no Kruger ou reservas privadas",
      "Rota dos Vinhos (Stellenbosch, Franschhoek)",
      "Cidade do Cabo e Table Mountain",
      "Garden Route cênica",
      "Cultura e história complexa"
    ],
    beyondUsual: [
      "Reservas privadas adjacentes ao Kruger para experiência exclusiva.",
      "Vinícolas boutique fora do circuito massificado.",
      "Trechos menos conhecidos da Garden Route."
    ],
    stays: [],
    faq: [
      { q: "Consigo fazer safári e Cidade do Cabo em uma viagem?", a: "Sim, é a combinação clássica." },
      { q: "Quantos dias são ideais?", a: "10 a 14 dias para combinar bem os elementos." },
      { q: "É seguro?", a: "Sim, com planejamento e áreas adequadas." },
      { q: "A Garden Route vale a pena?", a: "Muito, especialmente para quem gosta de dirigir e paisagens." },
      { q: "Qual melhor época?", a: "Depende da prioridade: safári ou costa." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-namibia",
    continent: "África",
    country: "Namíbia",
    region: "Sossusvlei & Etosha",
    slug: "africa/namibia",
    name: "Namíbia",
    bestTime: "Mai–Out para safári e clima seco; Nov–Abr para paisagens verdes (mas mais quente).",
    tags: ["deserto", "fotografia", "safari", "roadtrip", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Namibia red sand dunes at Sossusvlei with dramatic shadows, vast desert landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Paisagens que parecem de outro planeta: dunas vermelhas, desertos costeiros e vida selvagem adaptada. A Namíbia é para quem busca o extraordinário.",
    highlights: [
      "Dunas de Sossusvlei e Deadvlei",
      "Safári em Etosha",
      "Costa do Esqueleto",
      "Tribos Himba (com respeito)",
      "Céu estrelado mais escuro do mundo"
    ],
    beyondUsual: [
      "Regiões menos visitadas do Damaraland.",
      "Acampamentos remotos com experiência imersiva.",
      "Fotografia noturna em locais certificados de céu escuro."
    ],
    stays: [],
    faq: [
      { q: "Precisa dirigir?", a: "Self-drive é comum, mas há opções com motorista." },
      { q: "É seguro dirigir?", a: "Sim, com preparo para estradas de cascalho." },
      { q: "Quantos dias são ideais?", a: "10 a 14 dias para cobrir os highlights." },
      { q: "É bom para fotografia?", a: "Um dos melhores destinos do mundo." },
      { q: "Tem safári de verdade?", a: "Sim, Etosha é excelente para Big 5." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-botsuana-okavango",
    continent: "África",
    country: "Botsuana",
    region: "Delta do Okavango",
    slug: "africa/botsuana/okavango",
    name: "Delta do Okavango",
    bestTime: "Jun–Out para águas altas e safári aquático; Nov–Mar para nascimentos.",
    tags: ["safari", "navegacao", "fotografia", "conservacao", "remoto", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic aerial photo of Okavango Delta waterways and wildlife, lush green islands, mokoro canoes, golden light, no people.",
    imageOverrideUrl: "",
    intro: "O maior delta interior do mundo: safári aquático, vida selvagem extraordinária e exclusividade em meio à natureza intocada.",
    highlights: [
      "Safári de mokoro (canoa tradicional)",
      "Game drives em ilhas remotas",
      "Concentração de elefantes e predadores",
      "Lodges e camps de luxo exclusivos",
      "Paisagens alagadas únicas"
    ],
    beyondUsual: [
      "Camps pequenos com poucas unidades para máxima privacidade.",
      "Caminhadas guiadas em áreas de alta biodiversidade.",
      "Helicóptero sobre o delta para perspectiva aérea."
    ],
    stays: [],
    faq: [
      { q: "É caro?", a: "Sim, mas a exclusividade e conservação justificam." },
      { q: "Quantos dias ficar?", a: "Mínimo 3 noites, ideal 5 a 7 para combinar áreas." },
      { q: "Qual a diferença para outros safáris?", a: "A dimensão aquática e a exclusividade dos camps." },
      { q: "É bom para lua de mel?", a: "Um dos melhores destinos românticos de safári." },
      { q: "Tem malária?", a: "É área de risco; profilaxia recomendada." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-ruanda-gorilas",
    continent: "África",
    country: "Ruanda",
    region: "Parque Nacional dos Vulcões",
    slug: "africa/ruanda/gorilas",
    name: "Ruanda (Gorilas)",
    bestTime: "Jun–Set e Dez–Fev para trilhas mais secas; possível o ano todo.",
    tags: ["safari", "trekking", "conservacao", "fotografia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of mountain gorillas in Rwanda misty forest, intimate wildlife encounter, dramatic natural light, no people besides wildlife.",
    imageOverrideUrl: "",
    intro: "Encontrar gorilas das montanhas é uma das experiências mais transformadoras do planeta. Ruanda oferece o cenário mais acessível para esse encontro raro.",
    highlights: [
      "Trekking até famílias de gorilas",
      "Vulcões e florestas de altitude",
      "Golden monkeys",
      "Kigali e sua história de resiliência",
      "Conservação como modelo"
    ],
    beyondUsual: [
      "Experiência de habituação para mais tempo com os gorilas.",
      "Visita a projetos de conservação comunitária.",
      "Combinação com chimpanzés na Floresta Nyungwe."
    ],
    stays: [],
    faq: [
      { q: "É difícil a trilha?", a: "Pode ser exigente, mas há assistentes disponíveis." },
      { q: "Quantas noites ficar?", a: "2 a 4 noites para o encontro com gorilas; mais se combinar experiências." },
      { q: "É seguro em Ruanda?", a: "Sim, é um dos países mais seguros da África." },
      { q: "O permit de gorila é caro?", a: "Sim, mas financia diretamente a conservação." },
      { q: "Posso combinar com safári tradicional?", a: "Sim, Tanzânia ou Quênia são boas extensões." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-marrocos",
    continent: "África",
    country: "Marrocos",
    region: "Marrakech & Deserto",
    slug: "africa/marrocos",
    name: "Marrocos",
    bestTime: "Mar–Mai e Set–Nov para clima ameno; verão pode ser muito quente no deserto.",
    tags: ["cultura", "deserto", "gastronomia", "fotografia", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Moroccan architecture in Marrakech with colorful tiles and intricate patterns, golden light, no people.",
    imageOverrideUrl: "",
    intro: "Cores, aromas e história em cada medina. Marrocos é sensorial: das montanhas ao deserto, das cidades imperiais aos riads escondidos.",
    highlights: [
      "Medinas de Marrakech e Fez",
      "Deserto do Saara (Merzouga e Zagora)",
      "Atlas e vales berberes",
      "Arquitetura e artesanato",
      "Gastronomia marroquina"
    ],
    beyondUsual: [
      "Riads boutique fora do circuito óbvio.",
      "Experiências de deserto em camps exclusivos.",
      "Aldeias berberes com interações respeitosas."
    ],
    stays: [],
    faq: [
      { q: "É seguro viajar no Marrocos?", a: "Sim, é um destino turístico consolidado." },
      { q: "Quantos dias são ideais?", a: "8 a 12 dias para combinar cidades e deserto." },
      { q: "Precisa de guia?", a: "Recomendado para medinas e deserto." },
      { q: "É bom para casais?", a: "Sim, especialmente em riads românticos." },
      { q: "Qual a melhor base?", a: "Marrakech para explorar o sul; Fez para o norte." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-egito",
    continent: "África",
    country: "Egito",
    region: "Cairo, Luxor & Nilo",
    slug: "africa/egito/nilo",
    name: "Egito (Nilo, Cairo & Luxor)",
    bestTime: "Out–Abr, com clima ameno para visitar templos, pirâmides e navegar o Nilo.",
    tags: ["cultura", "navegacao", "fotografia", "deserto", "familia"],
    imageAiPrompt: "Ultra realistic editorial photo of the Pyramids of Giza at golden hour with warm desert sands and painterly sky, cinematic depth, no identifiable people.",
    imageOverrideUrl: "",
    intro: "Civilização que atravessa milênios: pirâmides, templos colossais e o Nilo como fio condutor. Uma viagem de profundidade histórica, com cruzeiros entre Luxor e Aswan e bases urbanas no Cairo.",
    highlights: [
      "Pirâmides de Gizé e Esfinge",
      "Museu Egípcio e Grand Egyptian Museum",
      "Cruzeiro pelo Nilo entre Luxor e Aswan",
      "Vale dos Reis e Templo de Karnak",
      "Templos de Abu Simbel"
    ],
    beyondUsual: [
      "Visita privada às pirâmides ao amanhecer, antes da abertura ao público.",
      "Dahabiya (veleiro tradicional) em vez de cruzeiro convencional — ritmo lento e exclusivo.",
      "Encontro com egiptólogo para leitura aprofundada dos hieróglifos no Vale dos Reis."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Outubro a abril, com temperaturas amenas; evite o verão (jun–ago)." },
      { q: "Quantos dias devo ficar?", a: "10 a 12 noites para combinar Cairo, cruzeiro no Nilo e Abu Simbel." },
      { q: "Cruzeiro ou dahabiya?", a: "Dahabiyas oferecem experiência mais íntima e cuidada; cruzeiros têm logística mais simples." },
      { q: "Preciso de visto?", a: "Sim, mas o e-visa é simples e rápido para brasileiros." },
      { q: "É seguro?", a: "Sim, com itinerários bem estruturados e guias credenciados — acompanhamos a situação em tempo real." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== AMÉRICA DO SUL =====
  {
    id: "america-do-sul-patagonia",
    continent: "América do Sul",
    country: "Chile/Argentina",
    region: "Patagônia",
    slug: "america-do-sul/patagonia",
    name: "Patagônia",
    bestTime: "Out–Mar para clima mais estável; Nov–Jan dias mais longos; Abr para outono dourado.",
    tags: ["trekking", "fotografia", "montanha", "remoto", "expedicao"],
    imageAiPrompt: "Ultra realistic photo of Torres del Paine mountains in Patagonia with dramatic clouds and turquoise lake, epic landscape, no people.",
    imageOverrideUrl: "",
    intro: "O fim do mundo em sua versão mais dramática: torres de granito, geleiras azuis e silêncio que transforma. Patagônia é para quem busca grandeza.",
    highlights: [
      "Torres del Paine (Chile)",
      "El Chaltén e Fitz Roy (Argentina)",
      "Geleira Perito Moreno",
      "Trilhas épicas (W, O, Circuito)",
      "Navegação por fiordes e geleiras"
    ],
    beyondUsual: [
      "Trekking em áreas menos visitadas da região.",
      "Estâncias patagônicas para imersão local.",
      "Travessias em kayak por lagos glaciais."
    ],
    stays: [],
    faq: [
      { q: "Precisa de preparo físico?", a: "Para trilhas longas sim, mas há opções para todos os níveis." },
      { q: "Chile ou Argentina?", a: "Ambos são extraordinários; podemos combinar." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para combinar os highlights." },
      { q: "O clima é muito imprevisível?", a: "Sim, mas faz parte da experiência." },
      { q: "É caro?", a: "Região de custo moderado a alto, dependendo do estilo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-atacama",
    continent: "América do Sul",
    country: "Chile",
    region: "Atacama",
    slug: "america-do-sul/chile/atacama",
    name: "Atacama",
    bestTime: "Ano todo, com céus mais limpos Mar–Nov; Dez–Fev pode ter chuvas de verão.",
    tags: ["deserto", "fotografia", "bem-estar", "astronomia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Atacama desert with salt flats and volcanoes at sunset, dramatic colors, alien landscape, no people.",
    imageOverrideUrl: "",
    intro: "O deserto mais seco do mundo: paisagens marcianas, céu estrelado perfeito para astronomia e silêncio que convida à introspecção.",
    highlights: [
      "Valle de la Luna",
      "Geysers del Tatio ao amanhecer",
      "Salares e lagoas altiplânicas",
      "Astronomia e céu estrelado",
      "Oásis de San Pedro"
    ],
    beyondUsual: [
      "Tours astronômicos privados com observatórios.",
      "Trilhas em áreas pouco visitadas.",
      "Experiências termais com contexto geológico."
    ],
    stays: [],
    faq: [
      { q: "Precisa de aclimatação?", a: "Sim, alguns passeios chegam a 4.000m+ de altitude." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para os principais atrativos." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, Patagônia ou Ilha de Páscoa." },
      { q: "O que levar?", a: "Roupas em camadas — amplitude térmica alta." },
      { q: "É bom para fotografia?", a: "Excepcional, especialmente ao nascer e pôr do sol." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-galapagos",
    continent: "América do Sul",
    country: "Equador",
    region: "Galápagos",
    slug: "america-do-sul/equador/galapagos",
    name: "Galápagos",
    bestTime: "Jan–Mai águas quentes para snorkel; Jun–Nov mais seco e fauna mais ativa.",
    tags: ["mergulho", "conservacao", "fotografia", "expedicao", "fauna"],
    imageAiPrompt: "Ultra realistic photo of Galapagos giant tortoise in natural habitat, volcanic landscape, unique wildlife, cinematic natural light, no people.",
    imageOverrideUrl: "",
    intro: "O laboratório da evolução: fauna sem medo, vulcões ativos e experiências que Darwin imortalizou. Galápagos é único no planeta.",
    highlights: [
      "Tartarugas gigantes em seu habitat",
      "Snorkel com leões-marinhos e pinguins",
      "Iguanas marinhas e terrestres",
      "Cruzeiros entre as ilhas",
      "Blue-footed boobies e fragatas"
    ],
    beyondUsual: [
      "Mergulho em Wolf e Darwin para tubarões-martelo.",
      "Ilhas menos visitadas para experiência mais exclusiva.",
      "Kayak e caminhadas interpretativas."
    ],
    stays: [],
    faq: [
      { q: "Cruzeiro ou base em terra?", a: "Ambos funcionam — curamos pela sua preferência." },
      { q: "Quantos dias são ideais?", a: "5 a 8 dias para diversidade de ilhas." },
      { q: "É caro?", a: "Sim, mas financia conservação extraordinária." },
      { q: "Precisa saber nadar?", a: "Ajuda para aproveitar o snorkel." },
      { q: "Os animais têm medo?", a: "Não, a aproximação é surreal." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-peru-cusco",
    continent: "América do Sul",
    country: "Peru",
    region: "Cusco & Vale Sagrado",
    slug: "america-do-sul/peru/cusco-vale-sagrado",
    name: "Cusco & Vale Sagrado",
    bestTime: "Mai–Out para clima seco; Nov–Abr mais chuvoso.",
    tags: ["cultura", "trekking", "gastronomia", "fotografia", "montanha"],
    imageAiPrompt: "Ultra realistic photo of Machu Picchu at sunrise with dramatic clouds and Andes mountains, ancient Incan citadel, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "O coração do império Inca: Machu Picchu, vale fértil e tradições vivas. Peru é história, gastronomia e paisagens andinas em uma viagem.",
    highlights: [
      "Machu Picchu ao amanhecer",
      "Vale Sagrado dos Incas",
      "Cusco colonial e pré-colombiano",
      "Mercados e gastronomia peruana",
      "Trilhas incas (Salkantay, Lares)"
    ],
    beyondUsual: [
      "Acessos alternativos a Machu Picchu menos lotados.",
      "Comunidades andinas com interações autênticas.",
      "Restaurantes fora do circuito turístico em Cusco."
    ],
    stays: [],
    faq: [
      { q: "Precisa de aclimatação?", a: "Sim, Cusco está a 3.400m — recomendamos dias leves no início." },
      { q: "Qual a melhor trilha para Machu Picchu?", a: "Depende do perfil — curamos pela intensidade desejada." },
      { q: "Quantos dias ficar?", a: "5 a 8 noites para Vale Sagrado e Machu Picchu." },
      { q: "A gastronomia é boa?", a: "Extraordinária — uma das melhores do mundo." },
      { q: "É muito turístico?", a: "Pode ser — a curadoria de horários e locais faz diferença." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-salar-uyuni",
    continent: "América do Sul",
    country: "Bolívia",
    region: "Salar de Uyuni",
    slug: "america-do-sul/bolivia/salar-uyuni",
    name: "Salar de Uyuni",
    bestTime: "Dez–Abr para efeito espelho (cheia); Mai–Nov seco com padrões geométricos.",
    tags: ["deserto", "fotografia", "remoto", "expedicao", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Salar de Uyuni salt flats with mirror effect reflecting clouds, vast white landscape, surreal, no people.",
    imageOverrideUrl: "",
    intro: "O maior deserto de sal do mundo: paisagens surrealistas que brincam com perspectiva e proporção. Um portal para outro planeta.",
    highlights: [
      "Salar infinito com efeito espelho",
      "Ilha Incahuasi com cactos gigantes",
      "Lagoas coloridas e flamingos",
      "Formações rochosas únicas",
      "Nascer e pôr do sol no sal"
    ],
    beyondUsual: [
      "Pernoite em hotel de sal dentro do salar.",
      "Expedições de múltiplos dias pela Reserva Eduardo Avaroa.",
      "Fotografia com técnicas de perspectiva forçada."
    ],
    stays: [],
    faq: [
      { q: "Quando tem o efeito espelho?", a: "Na estação chuvosa (dez–abr), quando há lâmina d'água." },
      { q: "É muito frio?", a: "À noite sim, especialmente na altitude (3.650m)." },
      { q: "Quantos dias são necessários?", a: "2 a 4 dias para o salar e lagoas." },
      { q: "Dá para combinar com Atacama?", a: "Sim, travessia clássica entre os dois." },
      { q: "Precisa de 4x4?", a: "Sim, sempre com guia local." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== EUROPA =====
  {
    id: "europa-islandia",
    continent: "Europa",
    country: "Islândia",
    region: "Ring Road",
    slug: "europa/islandia",
    name: "Islândia",
    bestTime: "Jun–Ago para sol da meia-noite e acessos; Set–Mar para aurora boreal.",
    tags: ["aurora", "fotografia", "roadtrip", "remoto", "trekking", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Iceland dramatic landscape with waterfall, volcanic terrain and aurora borealis, otherworldly scenery, no people.",
    imageOverrideUrl: "",
    intro: "Fogo e gelo em uma ilha vulcânica: cascatas monumentais, geleiras, gêiseres e a aurora boreal. Islândia é natureza em estado bruto.",
    highlights: [
      "Círculo Dourado (Geysir, Gullfoss, Þingvellir)",
      "Costa Sul (praias negras, glaciais)",
      "Lagoa glacial Jökulsárlón",
      "Aurora boreal (inverno)",
      "Banhos termais naturais"
    ],
    beyondUsual: [
      "Fiordes do Oeste menos visitados.",
      "Trilhas no interior (Highlands) para experientes.",
      "Experiências termais fora do Blue Lagoon."
    ],
    stays: [],
    faq: [
      { q: "Preciso de 4x4?", a: "Para Highlands sim; Ring Road pode ser com carro comum no verão." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para a volta completa." },
      { q: "É muito caro?", a: "Sim, é um dos destinos mais caros da Europa." },
      { q: "Qual época para aurora?", a: "Set–Mar, com melhor chance em noites claras." },
      { q: "O clima é muito extremo?", a: "Imprevisível, mas faz parte da aventura." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-noruega-fiordes",
    continent: "Europa",
    country: "Noruega",
    region: "Fiordes",
    slug: "europa/noruega/fiordes",
    name: "Noruega (Fiordes)",
    bestTime: "Mai–Set para dias longos e acessos; Dez–Mar para aurora e inverno.",
    tags: ["navegacao", "fotografia", "trekking", "montanha", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Norwegian fjord with steep cliffs, calm waters and small village, dramatic Nordic landscape, no people.",
    imageOverrideUrl: "",
    intro: "Fiordes esculpidos por geleiras, vilarejos que parecem miniaturas e uma natureza que impõe respeito. Noruega é silêncio e grandiosidade.",
    highlights: [
      "Geirangerfjord e Nærøyfjord (UNESCO)",
      "Preikestolen e Trolltunga",
      "Ilhas Lofoten",
      "Bergen e vilarejos de madeira",
      "Estradas cênicas nacionais"
    ],
    beyondUsual: [
      "Ilhas Lofoten para paisagens árticas e cabanas de pescadores.",
      "Trilhas menos frequentadas nos fiordes.",
      "Kayak em águas calmas dos fiordes."
    ],
    stays: [],
    faq: [
      { q: "Qual o melhor fiorde?", a: "Depende do que você busca — curamos pela experiência desejada." },
      { q: "Precisa dirigir?", a: "Recomendado para flexibilidade; há trens e ferries." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para combinar região dos fiordes e Lofoten." },
      { q: "É muito caro?", a: "Sim, Noruega é um dos países mais caros." },
      { q: "Tem aurora boreal?", a: "No norte (Lofoten, Tromsø), de set a mar." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-italia-toscana",
    continent: "Europa",
    country: "Itália",
    region: "Toscana",
    slug: "europa/italia/toscana",
    name: "Itália (Toscana)",
    bestTime: "Abr–Jun e Set–Out para clima e paisagens; verão pode ser cheio.",
    tags: ["gastronomia", "cultura", "roadtrip", "fotografia", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Tuscan countryside with cypress trees, rolling hills and medieval village, golden hour light, no people.",
    imageOverrideUrl: "",
    intro: "Colinas onduladas, ciprestes, vinhos e arte em cada esquina. A Toscana é a Itália em sua forma mais romântica e atemporal.",
    highlights: [
      "Florença e seus tesouros",
      "Siena e San Gimignano",
      "Vinhos do Chianti e Montalcino",
      "Colinas do Val d'Orcia",
      "Gastronomia regional"
    ],
    beyondUsual: [
      "Vinícolas boutique com degustações privadas.",
      "Vilarejos medievais fora do circuito turístico.",
      "Aulas de culinária em fazendas locais."
    ],
    stays: [],
    faq: [
      { q: "Precisa de carro?", a: "Recomendado para explorar o interior com liberdade." },
      { q: "Quantos dias ficar?", a: "5 a 8 noites para equilibrar cidades e campo." },
      { q: "É bom para lua de mel?", a: "Um dos destinos mais românticos do mundo." },
      { q: "Qual a melhor época para vinhos?", a: "Set–out para colheita; primavera para paisagens verdes." },
      { q: "Florença é muito cheia?", a: "Pode ser — a curadoria de horários ajuda." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-portugal-acores",
    continent: "Europa",
    country: "Portugal",
    region: "Açores",
    slug: "europa/portugal/acores",
    name: "Portugal (Açores)",
    bestTime: "Mai–Out para clima mais estável; observação de baleias jun–set.",
    tags: ["trekking", "navegacao", "fotografia", "bem-estar", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Azores volcanic crater lake Sete Cidades with lush green landscape, dramatic clouds, no people.",
    imageOverrideUrl: "",
    intro: "Vulcões, lagoas em crateras e o Atlântico selvagem. Os Açores são a Europa remota: natureza exuberante, ritmo lento e poucas multidões.",
    highlights: [
      "Lagoa das Sete Cidades",
      "Observação de baleias e golfinhos",
      "Trilhas vulcânicas",
      "Termas naturais",
      "Gastronomia atlântica"
    ],
    beyondUsual: [
      "Ilhas menos visitadas (Flores, Corvo) para remoto real.",
      "Mergulho com tubarões-azuis.",
      "Caminhadas em trilhas pouco conhecidas."
    ],
    stays: [],
    faq: [
      { q: "Qual ilha visitar?", a: "São Miguel é a mais completa; Pico e Faial complementam bem." },
      { q: "Quantos dias ficar?", a: "5 a 10 dias para combinar 2 ou 3 ilhas." },
      { q: "É bom para trekking?", a: "Excelente — trilhas bem sinalizadas em paisagens únicas." },
      { q: "Verei baleias?", a: "Muito provável na temporada (primavera/verão)." },
      { q: "O clima é muito instável?", a: "Pode mudar rápido, mas raramente estraga o dia todo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-grecia-ilhas",
    continent: "Europa",
    country: "Grécia",
    region: "Ilhas",
    slug: "europa/grecia/ilhas",
    name: "Grécia (Ilhas)",
    bestTime: "Mai–Jun e Set–Out para clima e menos multidões; Jul–Ago é alta temporada.",
    tags: ["praia", "cultura", "gastronomia", "lua-de-mel", "navegacao"],
    imageAiPrompt: "Ultra realistic photo of Santorini white buildings with blue domes overlooking the caldera at sunset, iconic Greek island scenery, no people.",
    imageOverrideUrl: "",
    intro: "Cicládicas brancas sobre o azul do Egeu: Santorini, Mykonos e dezenas de ilhas menos conhecidas. Grécia é história, beleza e sabor mediterrâneo.",
    highlights: [
      "Santorini e sua caldeira vulcânica",
      "Mykonos e vida noturna",
      "Ilhas menos turísticas (Milos, Naxos, Paros)",
      "Gastronomia grega autêntica",
      "Ruínas e história antiga"
    ],
    beyondUsual: [
      "Ilhas menos visitadas como Folegandros e Sifnos.",
      "Navegação privada entre ilhas.",
      "Experiências gastronômicas em tavernas locais."
    ],
    stays: [],
    faq: [
      { q: "Santorini e Mykonos são muito cheias?", a: "Em alta temporada sim — alternativas existem." },
      { q: "Quantas ilhas visitar?", a: "2 a 3 ilhas em uma semana é um bom ritmo." },
      { q: "É bom para lua de mel?", a: "Perfeito, especialmente Santorini." },
      { q: "Como se locomover entre ilhas?", a: "Ferries e voos domésticos." },
      { q: "Qual a melhor ilha para praias?", a: "Milos e Naxos surpreendem." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-turquia",
    continent: "Europa",
    country: "Turquia",
    region: "Istambul & Capadócia",
    slug: "europa/turquia/istambul-capadocia",
    name: "Turquia (Istambul & Capadócia)",
    bestTime: "Abr–Jun e Set–Out, com clima ameno e luz ideal para balonismo na Capadócia.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of Cappadocia at sunrise with hot air balloons floating over fairy chimney rock formations, pastel sky, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Encontro entre Oriente e Ocidente: Istambul pulsa com mercados, mesquitas e o Bósforo, enquanto a Capadócia revela paisagens surreais de chaminés de fada e voos de balão ao amanhecer. Uma viagem de história, arte e atmosfera.",
    highlights: [
      "Hagia Sophia, Mesquita Azul e Topkapi em Istambul",
      "Grande Bazar e Bazar das Especiarias",
      "Cruzeiro pelo Bósforo",
      "Voo de balão sobre a Capadócia ao amanhecer",
      "Cidades subterrâneas e hotéis-caverna"
    ],
    beyondUsual: [
      "Roteiro gastronômico em Istambul com chef local, fora dos circuitos turísticos.",
      "Visita a ateliê de cerâmica em Avanos com mestre ceramista.",
      "Caminhada privada pelos vales da Capadócia ao pôr do sol."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para o balão na Capadócia?", a: "Abril a outubro têm maior frequência de voos; o clima de primavera e outono é o mais confortável." },
      { q: "Quantos dias devo ficar?", a: "8 a 10 noites para combinar Istambul, Capadócia e uma extensão (Éfeso ou Costa Turquesa)." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo de curta duração." },
      { q: "Como me deslocar entre cidades?", a: "Voos domésticos curtos e frequentes, com transfers privados na chegada." },
      { q: "Dá para ir com crianças?", a: "Sim, com atividades selecionadas — hotéis-caverna e balões encantam." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-viena-budapeste-praga",
    continent: "Europa",
    country: "Áustria, Hungria & República Tcheca",
    region: "Europa Central",
    slug: "europa/conjugado/viena-budapeste-praga",
    name: "Viena, Budapeste & Praga (de trem)",
    bestTime: "Abr–Jun e Set–Out, com clima ameno e luz dourada nas cidades imperiais.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar", "familia"],
    imageAiPrompt: "Ultra realistic editorial photo of Charles Bridge in Prague at golden hour with Prague Castle and baroque spires in the distance, warm honey light, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Três capitais imperiais conectadas por trens confortáveis e cênicos: Viena com sua elegância musical, Budapeste banhada pelo Danúbio e suas termas, e Praga com seus telhados vermelhos e ruas medievais. Um roteiro fluido, sem aeroportos, com o ritmo de uma viagem europeia clássica.",
    highlights: [
      "Ópera, palácios e cafés históricos em Viena",
      "Termas e cruzeiro pelo Danúbio em Budapeste",
      "Castelo de Praga, Ponte Carlos e Cidade Velha",
      "Trens diurnos em primeira classe entre as capitais",
      "Gastronomia centro-europeia com curadoria contemporânea"
    ],
    beyondUsual: [
      "Concerto privado em palácio vienense, fora dos circuitos de turistas.",
      "Banho noturno nas termas Széchenyi em Budapeste com transfer privado.",
      "Caminhada ao amanhecer pela Ponte Carlos em Praga, antes da cidade acordar."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor ordem entre as cidades?", a: "Viena → Budapeste → Praga (ou o inverso) — trajetos curtos e cênicos de trem." },
      { q: "Quanto tempo de trem entre as cidades?", a: "Viena–Budapeste em ~2h40; Viena–Praga em ~4h, ambos em trens modernos e confortáveis." },
      { q: "Quantos dias devo ficar?", a: "10 a 14 noites para curtir cada capital com profundidade." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo até 90 dias no espaço Schengen (com ETIAS a partir de 2026)." },
      { q: "Dá para ir com crianças?", a: "Sim, é um dos melhores conjugados europeus para famílias — distâncias curtas e cidades caminháveis." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "europa-croacia",
    continent: "Europa",
    country: "Croácia",
    region: "Costa Dálmata & Ilhas",
    slug: "europa/croacia/dalmacia",
    name: "Croácia (Costa Dálmata)",
    bestTime: "Mai–Jun e Set–Out, com mar quente, menos multidão e luz mediterrânea perfeita.",
    tags: ["navegacao", "praia", "cultura", "gastronomia", "fotografia", "familia"],
    imageAiPrompt: "Ultra realistic editorial aerial photo of Dubrovnik old town walled city with terracotta rooftops over turquoise Adriatic sea at golden hour, sailboats, cinematic Mediterranean light, no people.",
    imageOverrideUrl: "",
    intro: "Mar Adriático em tons de turquesa, cidades muradas de pedra clara e ilhas que se sucedem como pérolas. Da elegância de Dubrovnik ao charme de Hvar e Split, a Croácia é uma das viagens mais sensoriais do Mediterrâneo — ainda mais quando explorada de veleiro.",
    highlights: [
      "Cidade Velha murada de Dubrovnik",
      "Palácio de Diocleciano em Split",
      "Ilhas de Hvar, Brač e Vis",
      "Parque Nacional dos Lagos de Plitvice",
      "Navegação privada pela Costa Dálmata"
    ],
    beyondUsual: [
      "Charter privado de veleiro ou catamarã entre as ilhas, com tripulação e chef a bordo.",
      "Jantar em konoba familiar em Hvar, longe dos circuitos turísticos.",
      "Visita a produtor de azeite e vinho na ilha de Brač com degustação privada."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Maio–junho e setembro–outubro: mar quente, clima ameno e menos multidão." },
      { q: "Quantos dias devo ficar?", a: "10 a 14 noites para combinar costa, ilhas e Plitvice." },
      { q: "Vale a pena alugar veleiro?", a: "Sim — é a maneira mais autêntica e fluida de explorar as ilhas dálmatas." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo até 90 dias (Schengen, com ETIAS a partir de 2026)." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Itália, Eslovênia ou Montenegro funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== ÁSIA =====
  {
    id: "asia-japao",
    continent: "Ásia",
    country: "Japão",
    region: "Tóquio, Kyoto & Alpes",
    slug: "asia/japao",
    name: "Japão",
    bestTime: "Mar–Mai (cerejeiras) e Out–Nov (outono); verão quente e chuvoso.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar", "trekking"],
    imageAiPrompt: "Ultra realistic photo of traditional Japanese temple in Kyoto with cherry blossoms, serene atmosphere, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Tradição e futuro convivem em harmonia: templos zen, gastronomia precisa e natureza reverenciada. Japão é sensorial em cada detalhe.",
    highlights: [
      "Tóquio contemporânea",
      "Kyoto tradicional e templos",
      "Alpes japoneses e onsens",
      "Gastronomia japonesa autêntica",
      "Cerejeiras ou outono colorido"
    ],
    beyondUsual: [
      "Ryokans em vilarejos remotos.",
      "Caminhadas nos Alpes Japoneses.",
      "Experiências gastronômicas fora do óbvio."
    ],
    stays: [],
    faq: [
      { q: "Quando florescem as cerejeiras?", a: "Varia por região — geralmente fim de março a início de abril." },
      { q: "Quantos dias ficar?", a: "10 a 14 dias para cobrir os clássicos." },
      { q: "Precisa falar japonês?", a: "Não, mas algumas frases ajudam fora das grandes cidades." },
      { q: "É muito caro?", a: "Custo médio a alto, mas há opções variadas." },
      { q: "O que é ryokan?", a: "Hospedagem tradicional com tatami, futon e onsens." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-india-rajastao",
    continent: "Ásia",
    country: "Índia",
    region: "Rajastão",
    slug: "asia/india/rajastao",
    name: "Índia (Rajastão)",
    bestTime: "Out–Mar para clima ameno; Abr–Jun muito quente; Jul–Set monções.",
    tags: ["cultura", "fotografia", "gastronomia", "roadtrip", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Rajasthan palace in Udaipur with lake and Aravalli mountains, golden light, colorful Indian architecture, no people.",
    imageOverrideUrl: "",
    intro: "Palácios de marajás, cores vibrantes e hospitalidade ancestral. O Rajastão é a Índia em sua versão mais cinematográfica e intensa.",
    highlights: [
      "Jaipur (Cidade Rosa)",
      "Udaipur (Cidade dos Lagos)",
      "Jodhpur (Cidade Azul)",
      "Jaisalmer e o deserto do Thar",
      "Palácios convertidos em hotéis"
    ],
    beyondUsual: [
      "Estadias em heritage hotels fora do circuito óbvio.",
      "Experiências no deserto com camps exclusivos.",
      "Encontros com artesãos e tradições locais."
    ],
    stays: [],
    faq: [
      { q: "É difícil viajar na Índia?", a: "Com boa curadoria, é uma experiência transformadora." },
      { q: "Quantos dias ficar no Rajastão?", a: "10 a 14 dias para o circuito clássico." },
      { q: "É seguro?", a: "Sim, com os cuidados normais de viagem." },
      { q: "Vale ficar em palácios?", a: "Uma das melhores experiências do destino." },
      { q: "A comida é muito apimentada?", a: "Pode-se ajustar — há opções para todos os paladares." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-indonésia-bali",
    continent: "Ásia",
    country: "Indonésia",
    region: "Bali",
    slug: "asia/indonesia/bali",
    name: "Indonésia (Bali)",
    bestTime: "Abr–Out para clima seco; Nov–Mar estação chuvosa.",
    tags: ["cultura", "bem-estar", "praia", "gastronomia", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Bali rice terraces in Ubud with palm trees and morning mist, lush tropical landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Espiritualidade, arrozais e praias: Bali equilibra introspecção e aventura. Um destino para quem busca reconexão com cuidado e estética.",
    highlights: [
      "Ubud e seus arrozais",
      "Templos hindus icônicos",
      "Praias e surf no sul",
      "Vulcões e trilhas",
      "Bem-estar e retiros"
    ],
    beyondUsual: [
      "Áreas menos turísticas no norte e leste.",
      "Retiros de bem-estar com profundidade.",
      "Experiências gastronômicas em warungs locais."
    ],
    stays: [],
    faq: [
      { q: "Bali é muito turístico?", a: "Pode ser em certas áreas — a curadoria faz diferença." },
      { q: "Quantos dias ficar?", a: "7 a 10 dias para variar praia, interior e vulcões." },
      { q: "É bom para lua de mel?", a: "Excelente, especialmente em Ubud e ilhas próximas." },
      { q: "Dá para combinar com outras ilhas?", a: "Sim, Gili, Komodo e Flores." },
      { q: "Qual a melhor área para ficar?", a: "Depende do que você busca — curamos pela experiência." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-israel",
    continent: "Ásia",
    country: "Israel",
    region: "Jerusalém, Tel Aviv & Mar Morto",
    slug: "asia/israel/terra-santa",
    name: "Israel (Terra Santa)",
    bestTime: "Mar–Mai e Set–Nov, com clima ameno para caminhadas em Jerusalém e no deserto.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of Jerusalem Old City at golden hour with Dome of the Rock glowing and honey-colored ancient walls, cinematic Mediterranean light, no people.",
    imageOverrideUrl: "",
    intro: "Camadas milenares entre Jerusalém, Tel Aviv, o Mar Morto e o deserto do Negev. Israel é uma viagem de espiritualidade, arquitetura, vinhos e gastronomia contemporânea — densa em significado e em sabor.",
    highlights: [
      "Cidade Antiga de Jerusalém e seus quarteirões",
      "Tel Aviv: Bauhaus, praia e cena gastronômica",
      "Mar Morto e suas paisagens lunares",
      "Massada ao amanhecer",
      "Vinícolas e mercados (Mahane Yehuda, Carmel)"
    ],
    beyondUsual: [
      "Tour gastronômico noturno em Tel Aviv com chef local.",
      "Caminhada interpretativa pelos quatro quarteirões da Cidade Antiga com historiador.",
      "Imersão no deserto do Negev com astronomia e silêncio."
    ],
    stays: [],
    faq: [
      { q: "É seguro viajar para Israel?", a: "Avaliamos a situação em tempo real e ajustamos roteiro conforme orientações oficiais." },
      { q: "Qual a melhor base?", a: "Combinação de Jerusalém + Tel Aviv + deserto cobre o essencial." },
      { q: "Quantos dias devo ficar?", a: "8 a 12 noites para um roteiro com profundidade." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo de curta duração." },
      { q: "Posso combinar com Jordânia ou Egito?", a: "Sim, montamos extensões para Petra ou Cairo." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-tailandia-camboja",
    continent: "Ásia",
    country: "Tailândia & Camboja",
    region: "Sudeste Asiático",
    slug: "asia/conjugado/tailandia-camboja",
    name: "Tailândia & Camboja (conjugado)",
    bestTime: "Nov–Mar (estação seca), com clima ameno e luz ideal para templos e praias.",
    tags: ["cultura", "gastronomia", "fotografia", "praia", "bem-estar", "familia"],
    imageAiPrompt: "Ultra realistic editorial photo of Angkor Wat at sunrise reflected in lotus pond, ancient stone towers with golden light, misty tropical atmosphere, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Dois universos que se completam: a Tailândia vibrante com Bangkok, Chiang Mai e suas praias paradisíacas, e o Camboja sagrado com a grandiosidade milenar de Angkor. Um conjugado que combina contraste, espiritualidade, gastronomia e descanso à beira-mar.",
    highlights: [
      "Templos e mercados de Bangkok",
      "Chiang Mai e o norte com cultura lana",
      "Phuket, Krabi ou Koh Samui para descanso",
      "Amanhecer em Angkor Wat",
      "Templos de Ta Prohm e Bayon em Siem Reap"
    ],
    beyondUsual: [
      "Aula de culinária tailandesa com chef em casa de família em Chiang Mai.",
      "Visita privada a templos secundários de Angkor com arqueólogo local.",
      "Jantar khmer contemporâneo em Siem Reap com produtores locais."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor ordem entre os países?", a: "Geralmente Tailândia primeiro (Bangkok → norte ou praias) e Camboja ao final, com voo curto até Siem Reap." },
      { q: "Quantos dias devo ficar?", a: "12 a 16 noites para combinar cidades, cultura, templos e praias com tranquilidade." },
      { q: "Preciso de visto?", a: "Tailândia: brasileiros não precisam para turismo curto. Camboja: e-visa simples e rápido." },
      { q: "Qual a melhor época?", a: "Novembro a março, com clima seco e temperaturas amenas." },
      { q: "Dá para ir com crianças?", a: "Sim, é um dos melhores conjugados da Ásia para famílias — variedade de experiências e bom conforto." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-maldivas",
    continent: "Ásia",
    country: "Maldivas",
    region: "Oceano Índico",
    slug: "asia/maldivas",
    name: "Maldivas",
    bestTime: "Nov–Abr (estação seca), com mar calmo, sol pleno e visibilidade ideal para mergulho.",
    tags: ["praia", "lua-de-mel", "mergulho", "bem-estar", "remoto", "navegacao"],
    imageAiPrompt: "Ultra realistic aerial photo of Maldives atoll with overwater bungalows over crystal-clear turquoise lagoon and white sandbar, coral reefs, golden hour, editorial travel style, no people.",
    imageOverrideUrl: "",
    intro: "Atóis de areia branca sobre lagoas de turquesa irreal, bangalôs sobre as águas e silêncio absoluto. Maldivas é o destino-ícone do descanso de luxo — perfeito para luas de mel, retiros e imersões em vida marinha.",
    highlights: [
      "Bangalôs sobre as águas em resorts privados",
      "Mergulho e snorkel em recifes de coral",
      "Encontros com tubarões-baleia e mantas",
      "Spas com curadoria over-water",
      "Jantares privados em ilhotas desertas"
    ],
    beyondUsual: [
      "Charter de iate privado entre atóis remotos, fora do circuito de resorts.",
      "Imersão com biólogo marinho em projeto de conservação de corais.",
      "Cinema na areia ou jantar em sandbank ao pôr do sol, com chef privado."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Novembro a abril, com mar calmo e clima seco." },
      { q: "Quantos dias devo ficar?", a: "7 a 10 noites para curtir sem pressa; ideal combinar dois resorts ou ilhas." },
      { q: "Preciso de visto?", a: "Não, brasileiros recebem visto na chegada." },
      { q: "É bom para mergulhadores?", a: "Sim, é um dos melhores destinos do mundo para mergulho e snorkel." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Dubai, Sri Lanka ou Sudeste Asiático funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== OCEANIA =====
  {
    id: "oceania-nova-zelandia",
    continent: "Oceania",
    country: "Nova Zelândia",
    region: "Ilhas Norte e Sul",
    slug: "oceania/nova-zelandia",
    name: "Nova Zelândia",
    bestTime: "Nov–Mar (verão) para trekking e clima; Abr–Mai para outono; Jun–Ago para esqui.",
    tags: ["trekking", "roadtrip", "fotografia", "remoto", "expedicao"],
    imageAiPrompt: "Ultra realistic photo of New Zealand Milford Sound with dramatic mountains and waterfalls, pristine wilderness, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Paisagens que parecem cenário de filme: fiordes, montanhas e florestas intocadas. Nova Zelândia é aventura e contemplação em perfeito equilíbrio.",
    highlights: [
      "Milford Sound e fiordes",
      "Queenstown (capital da aventura)",
      "Rotorua e cultura Maori",
      "Trilhas Great Walks",
      "Hobbiton e cenários de cinema"
    ],
    beyondUsual: [
      "Great Walks menos conhecidas.",
      "Região da Costa Oeste na Ilha Sul.",
      "Experiências Maori com profundidade cultural."
    ],
    stays: [],
    faq: [
      { q: "Ilha Norte ou Sul?", a: "Ambas são extraordinárias — podemos combinar." },
      { q: "Quantos dias ficar?", a: "2 a 3 semanas para fazer justiça ao destino." },
      { q: "Precisa de carro?", a: "Altamente recomendado para flexibilidade." },
      { q: "É seguro dirigir?", a: "Sim, excelente infraestrutura." },
      { q: "É muito caro?", a: "Custo médio a alto, mas vale cada centavo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "oceania-polinesia-francesa",
    continent: "Oceania",
    country: "Polinésia Francesa",
    region: "Taiti & Bora Bora",
    slug: "oceania/polinesia-francesa",
    name: "Polinésia Francesa",
    bestTime: "Mai–Out para clima seco; Nov–Abr mais quente e chuvoso.",
    tags: ["praia", "lua-de-mel", "mergulho", "bem-estar", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Bora Bora overwater bungalows with turquoise lagoon and Mount Otemanu, tropical paradise, golden light, no people.",
    imageOverrideUrl: "",
    intro: "O paraíso em sua forma mais icônica: bangalôs sobre águas cristalinas, vulcões emersos e o ritmo mana. Polinésia é o sonho que se realiza.",
    highlights: [
      "Bora Bora e sua lagoa",
      "Moorea selvagem e autêntica",
      "Cultura polinésia",
      "Mergulho e vida marinha",
      "Pores do sol sobre o Pacífico"
    ],
    beyondUsual: [
      "Ilhas menos visitadas como Huahine e Rangiroa.",
      "Mergulho com tubarões e raias em Fakarava.",
      "Experiências culturais com famílias locais."
    ],
    stays: [],
    faq: [
      { q: "Só Bora Bora vale a pena?", a: "Outras ilhas surpreendem — Moorea é mais autêntica." },
      { q: "É muito caro?", a: "Sim, um dos destinos mais caros do mundo." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para combinar 2 ou 3 ilhas." },
      { q: "É bom para lua de mel?", a: "O sonho de lua de mel para muitos casais." },
      { q: "Precisa saber nadar?", a: "Ajuda para snorkel e atividades aquáticas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "oceania-australia",
    continent: "Oceania",
    country: "Austrália",
    region: "Costa Leste & Outback",
    slug: "oceania/australia",
    name: "Austrália",
    bestTime: "Set–Nov e Mar–Mai para clima ameno; verão quente; inverno para o norte.",
    tags: ["praia", "roadtrip", "mergulho", "fotografia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Australian Uluru rock formation at sunset, vast red outback landscape, dramatic colors, no people.",
    imageOverrideUrl: "",
    intro: "Um continente em um país: recifes de corais, outback vermelho e cidades cosmopolitas. Austrália é diversidade em escala continental.",
    highlights: [
      "Grande Barreira de Corais",
      "Sydney e Melbourne",
      "Uluru e Outback",
      "Great Ocean Road",
      "Fauna única (cangurus, coalas)"
    ],
    beyondUsual: [
      "Kimberley e norte remoto.",
      "Mergulho em Ningaloo (menos conhecido que a Barreira).",
      "Roteiros de Outback com conforto."
    ],
    stays: [],
    faq: [
      { q: "Quanto tempo preciso?", a: "Mínimo 2 semanas; 3 a 4 para mais diversidade." },
      { q: "É muito caro?", a: "Custo médio a alto, especialmente hospedagem." },
      { q: "Precisa de carro?", a: "Para roteiros de roadtrip sim; nas cidades não." },
      { q: "A Barreira de Corais está bem?", a: "Áreas protegidas ainda são extraordinárias." },
      { q: "É seguro?", a: "Muito, apesar da fama da fauna perigosa." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== MINAS GERAIS =====
  {
    id: "brasil-minas-gerais-serra-do-cipo",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/serra-do-cipo",
    name: "Serra do Cipó",
    bestTime: "Abr–Set (seca) para trilhas; Out–Mar para cachoeiras cheias.",
    tags: ["natureza", "trekking", "fotografia", "aventura", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Serra do Cipó, cerrado plateau with quartzite cliffs and waterfall, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "Cachoeiras, cânions e cerrado de altitude a poucas horas de Belo Horizonte. Trilhas com curadoria e pousadas-charme para desacelerar.",
    highlights: [
      "Cachoeira da Farofa e Cânion das Bandeirinhas",
      "Cachoeira do Tabuleiro (vizinhança)",
      "Trilhas pelo Parque Nacional",
      "Pôr do sol no alto do Cipó",
      "Gastronomia mineira em pousadas-fazenda"
    ],
    beyondUsual: [
      "Trilhas guiadas com curadoria fora dos circuitos massificados.",
      "Banho de cachoeira em horários silenciosos.",
      "Combinações com Inhotim e Cidades Históricas."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar?", a: "3 a 4 noites para conhecer com tempo." },
      { q: "Vai bem com crianças?", a: "Sim, com trilhas mais curtas e cachoeiras acessíveis." },
      { q: "Combina com Inhotim?", a: "Sim, ótima dupla em poucos dias." },
      { q: "Precisa de guia?", a: "Recomendado para as trilhas mais longas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-serra-da-canastra",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/serra-da-canastra",
    name: "Serra da Canastra",
    bestTime: "Mai–Set (seca) para trilhas e estradas; Out–Mar para cachoeiras cheias.",
    tags: ["natureza", "trekking", "gastronomia", "remoto", "fotografia"],
    imageAiPrompt: "Ultra realistic photo of Casca d'Anta waterfall in Serra da Canastra, vast plateau, soft morning light, no people.",
    imageOverrideUrl: "",
    intro: "Berço do Rio São Francisco e do melhor queijo do Brasil. Paisagem aberta, cachoeiras imensas e fazendas centenárias com curadoria.",
    highlights: [
      "Cachoeira Casca d'Anta (alto e baixo)",
      "Nascente do Rio São Francisco",
      "Rota do Queijo Canastra com produtores selecionados",
      "Trilhas e cânions do parque nacional",
      "Pôr do sol no alto da chapada"
    ],
    beyondUsual: [
      "Visitas privativas a queijarias premiadas.",
      "Cavalgadas em fazendas históricas.",
      "Fotografia de cerrado com guias naturalistas."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo para Belo Horizonte ou Ribeirão Preto e road trip." },
      { q: "Quantos dias?", a: "4 a 5 noites é o ideal." },
      { q: "Tem queijo o ano inteiro?", a: "Sim, mas a estação seca facilita as visitas em estrada de terra." },
      { q: "É bom para fotografia?", a: "Excelente: paisagens abertas, fauna e cachoeiras." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-estrada-real",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/estrada-real",
    name: "Estrada Real",
    bestTime: "O ano inteiro; Abr–Set tem clima mais ameno e seco.",
    tags: ["cultura", "gastronomia", "natureza", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of a cobblestone street in Tiradentes, Minas Gerais, baroque church, warm afternoon light, no people.",
    imageOverrideUrl: "",
    intro: "A rota colonial do ouro: Tiradentes, São João del-Rei, Ouro Preto, Diamantina e mais. Roteiros lentos por cidades-museu com pousadas autorais.",
    highlights: [
      "Tiradentes e São João del-Rei",
      "Ouro Preto e Mariana",
      "Diamantina e Serro",
      "Gastronomia mineira e cachaçarias",
      "Trem da Maria Fumaça e ateliês de arte"
    ],
    beyondUsual: [
      "Acesso a casas históricas particulares.",
      "Jantares com chefs mineiros premiados.",
      "Trilhas curtas conectando vilarejos."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias para Estrada Real?", a: "5 a 8 noites combinando 3 a 4 cidades." },
      { q: "Precisa de carro?", a: "Sim, ou transfer privativo entre cidades." },
      { q: "Vai bem com casais?", a: "Sim, é um dos roteiros mais charmosos do Brasil." },
      { q: "Combina com Serra do Cipó/Inhotim?", a: "Perfeitamente." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-cavernas-do-peruacu",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/cavernas-do-peruacu",
    name: "Parque Nacional Cavernas do Peruaçu",
    bestTime: "Mai–Set (seca) para acesso pleno; chuvas dificultam estradas.",
    tags: ["natureza", "expedicao", "fotografia", "remoto", "aventura"],
    imageAiPrompt: "Ultra realistic photo of enormous limestone cave entrance at Peruaçu, dramatic light beams, no people.",
    imageOverrideUrl: "",
    intro: "Cavernas catedrais, arte rupestre e o cerrado mineiro mais selvagem. Patrimônio natural pouco visitado e absolutamente cinematográfico.",
    highlights: [
      "Gruta do Janelão (clarabóias gigantes)",
      "Lapa do Boquete (arte rupestre)",
      "Gruta dos Brejões",
      "Cânion do Peruaçu",
      "Cerrado e fauna do Norte de Minas"
    ],
    beyondUsual: [
      "Guias especializados em arqueologia.",
      "Saídas fotográficas dedicadas à luz das clarabóias.",
      "Combinação com Grande Sertão Veredas."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo até Montes Claros e road trip de cerca de 3h." },
      { q: "Precisa estar em forma?", a: "Condicionamento médio; trilhas até 3h." },
      { q: "Quantos dias?", a: "3 a 4 noites." },
      { q: "Tem boa hospedagem?", a: "Pousadas-charme em Januária e Itacarambi." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-cidades-historicas-inhotim",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/cidades-historicas-inhotim",
    name: "Cidades Históricas & Inhotim",
    bestTime: "O ano inteiro; Abr–Set é mais seco.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Ouro Preto colonial baroque town and contemporary art pavilion in tropical garden (Inhotim mood), warm light, no people.",
    imageOverrideUrl: "",
    intro: "Barroco mineiro e arte contemporânea no mesmo roteiro: Ouro Preto, Mariana e o Instituto Inhotim, um dos maiores museus a céu aberto do mundo.",
    highlights: [
      "Inhotim: pavilhões de arte em jardim botânico",
      "Ouro Preto e Mariana",
      "Congonhas e os Profetas de Aleijadinho",
      "Gastronomia mineira premiada",
      "Pousadas-boutique em casarões coloniais"
    ],
    beyondUsual: [
      "Visitas guiadas privativas em Inhotim.",
      "Encontros com artistas em ateliês de Ouro Preto.",
      "Jantares autorais com vinhos mineiros."
    ],
    stays: [],
    faq: [
      { q: "Inhotim merece quantos dias?", a: "2 dias é o ideal para curtir sem pressa." },
      { q: "Quantos dias no total?", a: "5 a 7 noites combinando arte e história." },
      { q: "Pode ir com crianças?", a: "Sim, Inhotim é encantador para todas as idades." },
      { q: "Combina com Estrada Real?", a: "É parte dela — perfeito." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== TOCANTINS — CANTÃO =====
  {
    id: "brasil-tocantins-parque-cantao",
    continent: "Brasil",
    country: "Brasil",
    region: "Tocantins",
    slug: "brasil/tocantins/parque-cantao",
    name: "Parque Estadual do Cantão",
    bestTime: "Jun–Out (seca) para praias de rio e fauna; Nov–Mai (cheia) para igapós.",
    tags: ["natureza", "navegacao", "fotografia", "remoto", "conservacao"],
    imageAiPrompt: "Ultra realistic photo of Parque do Cantão, flooded forest with pink dolphin and mirror waters at sunset, no people.",
    imageOverrideUrl: "",
    intro: "Encontro entre Amazônia, Cerrado e Pantanal: lagos, igapós e fauna abundante em um dos parques mais bem preservados do Brasil.",
    highlights: [
      "Navegação em lagos e furos",
      "Observação de botos cor-de-rosa",
      "Pesca esportiva responsável (pirarucu, tucunaré)",
      "Aves e jacarés em alta densidade",
      "Praias de rio na seca"
    ],
    beyondUsual: [
      "Pousada de selva com guias locais.",
      "Saídas noturnas para focagem de fauna.",
      "Roteiros fotográficos dedicados."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Palmas ou Araguaína e transfer a Caseara." },
      { q: "Quantos dias?", a: "3 a 5 noites." },
      { q: "Vai bem para famílias?", a: "Sim, com guias e logística cuidada." },
      { q: "Combina com Jalapão?", a: "Sim, é o complemento perfeito." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== MATO GROSSO — extras =====
  {
    id: "brasil-mato-grosso-tres-ecossistemas",
    continent: "Brasil",
    country: "Brasil",
    region: "Mato Grosso",
    slug: "brasil/mato-grosso/tres-ecossistemas",
    name: "Roteiro dos Três Ecossistemas",
    bestTime: "Mai–Out (seca) para fauna no Pantanal e estradas; Nov–Mar para paisagens verdes.",
    tags: ["safari", "fotografia", "natureza", "expedicao", "conservacao"],
    imageAiPrompt: "Photo composition of Pantanal wetlands, Cerrado plateau and Amazon rainforest river, Mato Grosso, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "Em uma só viagem, três Brasis: o cerrado da Chapada dos Guimarães, o Pantanal Norte (Porto Jofre) e a Amazônia meridional do Cristalino. Itinerário-assinatura da Create Travel.",
    highlights: [
      "Chapada dos Guimarães: cerrado e mirantes",
      "Pantanal Norte: safáris de onça",
      "Cristalino: Amazônia primária",
      "Voos internos curtos e logística cuidada",
      "Fotografia de fauna e paisagem"
    ],
    beyondUsual: [
      "Guia naturalista acompanhando todo o roteiro.",
      "Saídas privativas para fotografia.",
      "Imersão cultural com comunidades locais."
    ],
    stays: ["caiman-pantanal"],
    faq: [
      { q: "Quantos dias preciso?", a: "Mínimo 10 a 12 noites." },
      { q: "Qual a melhor época?", a: "Jul–Out para fauna no Pantanal." },
      { q: "Vai bem para fotógrafos?", a: "É um dos melhores roteiros do mundo para safári." },
      { q: "Tem conforto?", a: "Sim, lodges de referência em cada bioma." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-mato-grosso-serra-do-roncador",
    continent: "Brasil",
    country: "Brasil",
    region: "Mato Grosso",
    slug: "brasil/mato-grosso/serra-do-roncador",
    name: "Serra do Roncador",
    bestTime: "Mai–Set (seca) para trilhas e estradas; Nov–Mar para cachoeiras cheias.",
    tags: ["natureza", "expedicao", "remoto", "trekking", "fotografia"],
    imageAiPrompt: "Ultra realistic photo of Serra do Roncador, dramatic red rocky mountains over cerrado plains, mystical atmosphere, no people.",
    imageOverrideUrl: "",
    intro: "Cerrado dramático, cachoeiras isoladas e energia única na fronteira entre Mato Grosso e Goiás. Aldeia Velha, Vale do Sol Nascente e mistérios indígenas Xavante.",
    highlights: [
      "Cachoeira do Segredo e Vale do Sol Nascente",
      "Mirantes da Serra Azul",
      "Trilhas no cerrado",
      "Vivências respeitosas com cultura Xavante",
      "Céu noturno extraordinário"
    ],
    beyondUsual: [
      "Roteiros com guias locais experientes.",
      "Combinação com Chapada dos Veadeiros.",
      "Saídas fotográficas dedicadas."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Brasília ou Cuiabá e road trip até Aragarças/Barra do Garças." },
      { q: "Quantos dias?", a: "5 a 7 noites." },
      { q: "É para iniciantes?", a: "Trilhas leves a moderadas." },
      { q: "Tem boa hospedagem?", a: "Pousadas-charme em Aragarças e cidades vizinhas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== AMAZÔNIA — extras =====
  {
    id: "brasil-amazonia-mamiraua-uacari",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/mamiraua-uacari",
    name: "Mamirauá & Pousada Uacari",
    bestTime: "Mai–Jul (cheia) para canoagem em igapós; Set–Nov (seca) para trilhas e fauna concentrada.",
    tags: ["conservacao", "fotografia", "navegacao", "remoto", "expedicao"],
    imageAiPrompt: "Ultra realistic photo of Mamirauá floating lodge on stilts over a black water river in flooded Amazon at sunrise, no people.",
    imageOverrideUrl: "",
    intro: "A Reserva de Mamirauá é a maior unidade de conservação de várzea do mundo. A Pousada Uacari, flutuante, é referência em ecoturismo, pesquisa e observação de fauna — incluindo onça, primatas raros e centenas de aves.",
    highlights: [
      "Roteiro de ecoturismo (4–5 noites)",
      "Observação de aves com guias especializados",
      "Observação de onças-pintadas em copas de árvores",
      "Expedição fotográfica dedicada (luz e fauna)",
      "Canoagem silenciosa em igapós"
    ],
    beyondUsual: [
      "Encontros com pesquisadores do Instituto Mamirauá.",
      "Vivências com comunidades ribeirinhas parceiras.",
      "Saídas noturnas para fauna e céu amazônico."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Tefé (via Manaus) e voadeira até a pousada." },
      { q: "Quantos dias?", a: "4 a 7 noites conforme foco." },
      { q: "Vejo onça-pintada?", a: "Na cheia, a chance de avistamento em árvores é alta — sem garantias." },
      { q: "Tem conforto?", a: "Sim, bangalôs flutuantes simples e charmosos, com energia solar." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-katerre",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/katerre",
    name: "Expedições Katerre (barco no Amazonas)",
    bestTime: "O ano inteiro; cada estação revela um rio diferente.",
    tags: ["navegacao", "expedicao", "fotografia", "conservacao", "remoto"],
    imageAiPrompt: "Ultra realistic photo of traditional wooden Amazon riverboat with multiple decks navigating Rio Negro at sunset, no people visible.",
    imageOverrideUrl: "",
    intro: "O barco Katerre é uma forma de viver a Amazônia em movimento: cabines confortáveis, navegação por Rio Negro, Anavilhanas e afluentes pouco visitados — com curadoria e ritmo lento.",
    highlights: [
      "Navegações por Rio Negro e Anavilhanas",
      "Roteiros de 4 a 8 noites a bordo",
      "Trilhas, focagem noturna e canoagem",
      "Encontros com comunidades ribeirinhas",
      "Gastronomia regional em alto nível"
    ],
    beyondUsual: [
      "Saídas exclusivas para fotografia.",
      "Programas temáticos (aves, etnografia, conservação).",
      "Charters privativos para grupos pequenos."
    ],
    stays: [],
    faq: [
      { q: "É indicado para famílias?", a: "Sim, com cabines amplas e atividades para diferentes idades." },
      { q: "Quantos dias?", a: "Mínimo 4 noites a bordo." },
      { q: "Posso combinar com lodge?", a: "Sim, Anavilhanas é o par ideal." },
      { q: "Pega muito mosquito?", a: "No Rio Negro (águas pretas) é baixíssima a incidência." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-kaiara-alter-do-chao",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/kaiara-alter-do-chao",
    name: "Expedição Kaiara — Alter do Chão",
    bestTime: "Ago–Jan (águas baixas) para praias de rio do Tapajós.",
    tags: ["navegacao", "expedicao", "fotografia", "bem-estar", "remoto"],
    imageAiPrompt: "Ultra realistic photo of expedition boat anchored near Alter do Chão white sand beaches and turquoise Tapajós river, no people.",
    imageOverrideUrl: "",
    intro: "A bordo do Kaiara, navegamos por Tapajós e Arapiuns: praias desertas, comunidades ribeirinhas, florestas e o melhor pôr do sol da Amazônia.",
    highlights: [
      "Navegação Tapajós–Arapiuns (4 a 6 noites)",
      "Ilha do Amor e praias desertas",
      "Floresta Nacional do Tapajós",
      "Comunidades ribeirinhas com vivências autênticas",
      "Pôr do sol e luas no rio"
    ],
    beyondUsual: [
      "Saídas em canoa nas comunidades.",
      "Yoga e bem-estar a bordo.",
      "Roteiros fotográficos privativos."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Santarém e transfer para Alter do Chão." },
      { q: "Quando é melhor?", a: "Set–Dez para praias e águas mais transparentes." },
      { q: "Posso fazer só passeio diário?", a: "Sim, mas o melhor é embarcar por algumas noites." },
      { q: "Combina com Mamirauá ou Anavilhanas?", a: "Sim, com voos internos." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== NORTE — FESTIVAIS FOLCLÓRICOS =====
  {
    id: "brasil-amazonia-festival-parintins",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazonas",
    slug: "brasil/amazonia/festival-parintins",
    name: "Festival Folclórico de Parintins",
    bestTime: "Últimos 3 dias de junho (datas oficiais variam).",
    tags: ["cultura", "fotografia", "expedicao", "navegacao"],
    imageAiPrompt: "Ultra realistic photo of Parintins Folklore Festival arena, vibrant Boi Bumbá costumes in red and blue, fireworks above river island, evening, festive Amazonian atmosphere.",
    imageOverrideUrl: festivalParintinsImg,
    intro: "Um dos maiores espetáculos folclóricos do mundo: a disputa entre Bois Garantido e Caprichoso, em Parintins, no meio do Rio Amazonas. Logística cuidada e ingressos garantidos.",
    highlights: [
      "Três noites de apresentação no Bumbódromo",
      "Hospedagem em barcos-hotel ou casas selecionadas",
      "Vivências com brincantes e bastidores",
      "Navegação pelo Rio Amazonas",
      "Combinação com Manaus e Anavilhanas"
    ],
    beyondUsual: [
      "Bastidores dos currais Garantido e Caprichoso.",
      "Camarotes e ingressos premium.",
      "Pacote fotográfico oficial."
    ],
    stays: [],
    faq: [
      { q: "Quando acontece?", a: "Nos últimos 3 dias de junho — datas oficiais variam." },
      { q: "Como chegar?", a: "Voo a Manaus e fretado/cruzeiro a Parintins." },
      { q: "Preciso reservar com antecedência?", a: "Sim, com no mínimo 6 a 9 meses de antecedência." },
      { q: "Tem alternativa de hospedagem?", a: "Barcos-hotel, casas privativas e hotéis locais (limitados)." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-festival-caire",
    continent: "Brasil",
    country: "Brasil",
    region: "Pará",
    slug: "brasil/amazonia/festival-caire",
    name: "Festival do Çairé — Alter do Chão",
    bestTime: "Segunda quinzena de setembro (datas oficiais variam).",
    tags: ["cultura", "fotografia", "navegacao", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Çairé folkloric festival in Alter do Chão, decorated symbolic mast, river beach at sunset, vibrant Amazonian cultural atmosphere.",
    imageOverrideUrl: "",
    intro: "Tradicional festa religiosa e folclórica de Alter do Chão, com procissões no rio, disputa entre os botos Tucuxi e Cor-de-Rosa e a beleza inigualável do Tapajós.",
    highlights: [
      "Procissão fluvial do Çairé",
      "Apresentações dos botos Tucuxi e Cor-de-Rosa",
      "Praias do Tapajós em alta temporada cultural",
      "Gastronomia ribeirinha",
      "Combinação com Expedição Kaiara"
    ],
    beyondUsual: [
      "Hospedagem-boutique selecionada.",
      "Acesso a comunidades e brincantes.",
      "Saídas privativas de barco durante o festival."
    ],
    stays: [],
    faq: [
      { q: "Quando acontece?", a: "Geralmente na segunda quinzena de setembro." },
      { q: "Como chegar?", a: "Voo a Santarém e transfer a Alter do Chão." },
      { q: "Quantos dias?", a: "4 a 6 noites para vivenciar bem." },
      { q: "Combina com Parintins?", a: "Não no mesmo período, mas como roteiros distintos no ano." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== BAHIA — ABROLHOS E COSTA DO DESCOBRIMENTO =====
  {
    id: "brasil-bahia-abrolhos-costa-descobrimento",
    continent: "Brasil",
    country: "Brasil",
    region: "Bahia",
    slug: "brasil/bahia/abrolhos-costa-descobrimento",
    name: "Abrolhos & Costa do Descobrimento",
    bestTime: "Jul–Nov para baleias-jubarte; Dez–Mar para mergulho e mar calmo.",
    tags: ["navegacao", "conservacao", "fotografia", "expedicao", "natureza"],
    imageAiPrompt: "Ultra realistic aerial photo of Abrolhos archipelago, turquoise waters, coral reefs, lighthouse on island, humpback whale silhouette below, no people.",
    imageOverrideUrl: "",
    intro: "O primeiro parque marinho do Brasil: ilhas vulcânicas, corais únicos no Atlântico Sul e o berço das baleias-jubarte. Roteiros combinam Abrolhos, Caraíva, Trancoso e os parques nacionais da Costa do Descobrimento.",
    highlights: [
      "Avistamento de baleias-jubarte (Jul–Nov)",
      "Mergulho e snorkel nos chapeirões de coral",
      "Arquipélago de Abrolhos e Farol de Santa Bárbara",
      "Parques Nacionais Pau Brasil e Monte Pascoal",
      "Trancoso, Caraíva e Corumbau"
    ],
    beyondUsual: [
      "Embarcações de expedição com pernoite em Abrolhos.",
      "Mergulhos guiados por biólogos.",
      "Visitas a comunidades indígenas Pataxó."
    ],
    stays: [],
    faq: [
      { q: "Como se chega a Abrolhos?", a: "De Caravelas, em embarcações de bate-volta ou expedição." },
      { q: "Vejo baleias garantido?", a: "Na temporada (Jul–Nov), a probabilidade é altíssima." },
      { q: "Quantos dias?", a: "7 a 10 noites combinando Abrolhos e Costa do Descobrimento." },
      { q: "Combina com Trancoso?", a: "Sim, é a combinação clássica da curadoria." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== NORDESTE — CANYONS E ROTA DAS FALÉSIAS =====
  {
    id: "brasil-nordeste-canyons-xingo",
    continent: "Brasil",
    country: "Brasil",
    region: "Sergipe/Alagoas/Bahia",
    slug: "brasil/nordeste/canyons-xingo",
    name: "Cânions do Xingó",
    bestTime: "O ano inteiro; Mai–Set tem clima mais ameno.",
    tags: ["natureza", "navegacao", "fotografia", "aventura"],
    imageAiPrompt: "Ultra realistic photo of Xingó canyons, São Francisco river through dramatic ochre red rock walls, calm green water, no people.",
    imageOverrideUrl: "",
    intro: "O São Francisco em sua forma mais cinematográfica: paredões avermelhados de até 80 metros, águas esverdeadas e silêncio. Acesso por Canindé do São Francisco (SE), Piranhas (AL) e Paulo Afonso (BA).",
    highlights: [
      "Navegação por catamarã ou lancha rápida",
      "Banho nas águas verde-jade do São Francisco",
      "Mirantes panorâmicos dos paredões",
      "Vila histórica de Piranhas (AL)",
      "Museu de Arqueologia de Xingó"
    ],
    beyondUsual: [
      "Saídas privativas em horário silencioso.",
      "Combinação com litoral alagoano e sergipano.",
      "Fotografia dedicada à luz do entardecer."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "2 a 3 noites são suficientes." },
      { q: "Como combinar?", a: "Com Maragogi, Aracaju ou Salvador." },
      { q: "Tem boa hospedagem?", a: "Pousadas-charme em Piranhas e Canindé." },
      { q: "É bom para crianças?", a: "Sim, passeios tranquilos de barco." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-nordeste-rota-falesias-fortaleza-natal",
    continent: "Brasil",
    country: "Brasil",
    region: "Ceará/Rio Grande do Norte",
    slug: "brasil/nordeste/rota-falesias-fortaleza-natal",
    name: "Rota das Falésias — Fortaleza a Natal",
    bestTime: "Ago–Fev (sol e ventos) para a rota completa.",
    tags: ["aventura", "fotografia", "natureza", "expedicao"],
    imageAiPrompt: "Ultra realistic aerial photo of red sea cliffs and dunes along northeastern Brazilian coast, turquoise ocean, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "Uma road trip pelo litoral mais cinematográfico do Brasil: falésias avermelhadas, dunas e vilas autênticas entre Fortaleza, Canoa Quebrada, Pipa e Natal, com travessias em buggy 4×4.",
    highlights: [
      "Canoa Quebrada e Praia das Fontes (CE)",
      "Travessia de buggy por dunas e praias",
      "Praia de Pipa (RN) e o Chapadão",
      "Galinhos e Maracajaú",
      "Pôr do sol em falésias coloridas"
    ],
    beyondUsual: [
      "Bugueiros credenciados pela curadoria.",
      "Pousadas-boutique selecionadas em cada parada.",
      "Saídas fotográficas dedicadas ao amanhecer."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "7 a 10 noites para fazer com calma." },
      { q: "Travessia de buggy é segura?", a: "Sim, com bugueiros credenciados." },
      { q: "Posso fazer o caminho inverso?", a: "Sim, Natal → Fortaleza também funciona muito bem." },
      { q: "Vai bem para casais?", a: "Sim, é um dos roteiros mais românticos do Nordeste." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== GOIÁS — PIRENÓPOLIS =====
  {
    id: "brasil-goias-pirenopolis",
    continent: "Brasil",
    country: "Brasil",
    region: "Goiás",
    slug: "brasil/goias/pirenopolis",
    name: "Pirenópolis",
    bestTime: "Abr–Set (seca) para trilhas; Out–Mar para cachoeiras cheias.",
    tags: ["cultura", "natureza", "gastronomia", "bem-estar", "fotografia"],
    imageAiPrompt: "Ultra realistic photo of Pirenópolis colonial church and cobblestone street with cerrado mountains in background, warm light, no people.",
    imageOverrideUrl: "",
    intro: "Cidade colonial preservada no cerrado goiano, com cachoeiras, vida cultural intensa e gastronomia premiada. Excelente complemento para Chapada dos Veadeiros ou Brasília.",
    highlights: [
      "Centro histórico (séc. XVIII) e Igreja Matriz",
      "Cachoeiras do Abade, Bonsucesso e Santuário Vagafogo",
      "Trilhas no Parque dos Pireneus",
      "Festa do Divino e Cavalhadas",
      "Restaurantes e ateliês de arte"
    ],
    beyondUsual: [
      "Cachoeiras privativas com acesso curado.",
      "Jantares-degustação com chefs locais.",
      "Combinação com Chapada dos Veadeiros."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "3 a 4 noites." },
      { q: "Como chegar?", a: "Voo a Brasília ou Goiânia e road trip (cerca de 2h)." },
      { q: "É bom para famílias?", a: "Sim, com cachoeiras acessíveis." },
      { q: "Combina com Chapada dos Veadeiros?", a: "Sim, é a combinação clássica." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};

export const getDestinationsByContinent = (continent: string): Destination[] => {
  return destinations.filter((d) => d.continent.toLowerCase() === continent.toLowerCase());
};

export const getDestinationsByTag = (tagId: string): Destination[] => {
  return destinations.filter((d) => d.tags.includes(tagId));
};

export const searchDestinations = (query: string): Destination[] => {
  const lowerQuery = query.toLowerCase();
  return destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(lowerQuery) ||
      d.country.toLowerCase().includes(lowerQuery) ||
      d.region.toLowerCase().includes(lowerQuery) ||
      d.continent.toLowerCase().includes(lowerQuery)
  );
};

export const getFeaturedDestinations = (): Destination[] => {
  const featuredIds = [
    "africa-tanzania-serengeti",
    "brasil-amazonia-anavilhanas",
    "america-do-sul-patagonia",
    "europa-islandia",
    "asia-japao",
    "brasil-lencois-maranhenses"
  ];
  return destinations.filter((d) => featuredIds.includes(d.id));
};
