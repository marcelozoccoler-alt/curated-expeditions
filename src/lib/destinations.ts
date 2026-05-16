import { Destination } from "./types";

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
    imageOverrideUrl: "",
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
