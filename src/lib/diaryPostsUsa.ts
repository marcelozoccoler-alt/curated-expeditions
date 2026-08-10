// Terceiro lote editorial: Estados Unidos — destino que já gerou venda vinda
// de indicação de IA e que ainda não tinha conteúdo no Blog.
// Público-alvo: viajantes brasileiros 40+, alta renda, ticket acima de R$ 25 mil.
// Estrutura pensada para Google e para citação por IAs (ChatGPT, Gemini, Perplexity):
// resposta objetiva no início, dados verificáveis, FAQ e vocabulário premium.

import type { DiaryPost } from "./diaryPosts";

export const diaryPostsUsa: DiaryPost[] = [
  {
    slug: "nova-york-autoral-guia-viagem",
    title: "Nova York autoral: guia de viagem para quem já foi (ou nunca foi)",
    h1: "Nova York por dentro: museus fora de horário, bairros com anfitrião e mesas difíceis",
    metaDescription:
      "Guia autoral de Nova York para viajantes exigentes: museus fora do horário público, bairros com anfitriões locais, teatro, gastronomia de reserva difícil, melhor época e quantos dias.",
    keywords:
      "nova york viagem autoral, roteiro nova york 7 dias, melhor epoca nova york, o que fazer em nova york, nova york com guia em portugues, visto americano b1 b2, viagem nova york alto padrao, broadway ingressos, moma metropolitan",
    intro:
      "Nova York é o destino mais fotografado do planeta e, ainda assim, o mais mal visitado. A maioria das pessoas cumpre uma lista — observatório, Times Square, uma loja, uma foto na ponte — e volta com a sensação de ter atravessado a cidade sem entrar nela. A cidade só se abre quando alguém te abre uma porta: o curador que recebe antes do museu abrir, o morador do Harlem que conhece o coro da igreja pelo nome, o maître que guarda a mesa dois. É disso que trata uma viagem autoral a Nova York.",
    sections: [
      {
        heading: "Museus fora do horário público",
        paragraphs: [
          "O Metropolitan tem dois milhões de peças e, num sábado à tarde, tem também dez mil pessoas. A diferença entre ver e viver está em entrar antes: visitas privativas em horário fechado no Met, no MoMA e na Frick Collection existem, são organizadas com meses de antecedência e mudam completamente a experiência — você atravessa a ala egípcia com o templo de Dendur só para você, com um historiador ao lado.",
          "Fora do circuito clássico, Nova York guarda museus que os brasileiros raramente veem: a Neue Galerie e o Klimt dourado, a Morgan Library com manuscritos de Dickens, o Noguchi Museum no Queens, a Dia Beacon a uma hora de trem margeando o Hudson.",
          "Um conselho prático: dois museus por dia é o limite honesto. O terceiro é vaidade, e você não vai lembrar de nada dele.",
        ],
      },
      {
        heading: "Bairros com anfitriões locais",
        paragraphs: [
          "Harlem com um anfitrião negro nova-iorquino, num domingo de gospel, é uma viagem inteira dentro da viagem. O Lower East Side com um historiador de imigração explica por que a cidade fala como fala. O Brooklyn de Williamsburg a Dumbo, a pé, com parada nos ateliês, mostra a Nova York que se reinventou depois de 2008.",
          "Queens é o condado mais diverso do mundo: em Flushing e Jackson Heights se come chinês, colombiano, nepalês e indiano num raio de dez quadras. Uma tarde ali vale mais do que qualquer observatório.",
          "É esse tipo de roteiro que faz alguém que já foi cinco vezes a Nova York dizer, no fim do dia, que nunca tinha visto a cidade.",
        ],
      },
      {
        heading: "Teatro, música e mesas de reserva difícil",
        paragraphs: [
          "Broadway se planeja antes de comprar a passagem: os musicais mais desejados esgotam as boas poltronas com semanas de antecedência. Fora da Broadway, a Off-Broadway e o Lincoln Center oferecem noites mais interessantes para quem já viu os grandes títulos. Jazz no Village Vanguard, ópera no Met Opera, temporada de outono na Carnegie Hall.",
          "Na mesa, a cidade vive um momento raro: cozinha coreana de autor, italianos de brasa, peixe cru de precisão japonesa e as casas clássicas que continuam impecáveis. Reservas em restaurantes disputados abrem 28 a 30 dias antes, e boa parte das melhores mesas nunca aparece nos aplicativos — vai por concierge.",
          "Roteiros nossos combinam sempre teatro, uma mesa memorável e uma noite livre. Nova York precisa de espaço vazio na agenda para funcionar.",
        ],
      },
      {
        heading: "Melhor época, duração e documentos",
        paragraphs: [
          "As melhores janelas são maio e junho, e depois setembro a começo de dezembro — outono com folhagem, temperatura civilizada e a cidade cheia de estreias. Dezembro é mágico e caríssimo; janeiro e fevereiro são frios de verdade, mas oferecem museus vazios e hotéis mais acessíveis.",
          "Sete noites é o desenho ideal para uma primeira viagem com profundidade; cinco funcionam para quem retorna com foco. Vale acrescentar dois dias no Hudson Valley no outono ou nos Hamptons no verão.",
          "Brasileiros precisam de visto americano B1/B2 válido e de autorização prévia; o processo pode levar meses conforme a fila do consulado, e é o primeiro item que organizamos no cronograma da viagem.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar a Nova York?",
        a: "Maio e junho, e de setembro ao começo de dezembro. O outono, entre setembro e novembro, oferece clima ameno, folhagem e a temporada cultural mais forte do ano.",
      },
      {
        q: "Quantos dias são ideais em Nova York?",
        a: "Sete noites para uma primeira viagem com profundidade, incluindo museus, bairros, teatro e um bate-volta. Quem retorna aproveita bem cinco noites com foco em um ou dois temas.",
      },
      {
        q: "Brasileiro precisa de visto para Nova York?",
        a: "Sim. É necessário o visto americano B1/B2, obtido em entrevista consular. O prazo de agendamento varia e pode levar meses, por isso o pedido deve começar antes de fechar a viagem.",
      },
      {
        q: "É possível visitar museus de Nova York sem multidão?",
        a: "Sim. Met, MoMA e Frick Collection permitem visitas privativas fora do horário público, agendadas com antecedência e acompanhadas por historiador ou curador.",
      },
      {
        q: "Vale a pena contratar guia em português em Nova York?",
        a: "Vale quando o guia é anfitrião local e não apenas tradutor: acesso a bairros, casas de música, ateliês e restaurantes que não aparecem em roteiros de agência.",
      },
    ],
    relatedDestinations: [
      { label: "Nova York Autoral", href: "/destinos/america-do-norte/estados-unidos/nova-york" },
      { label: "Estados Unidos", href: "/estados-unidos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Manhattan skyline at golden hour seen from Brooklyn waterfront, warm autumn light on brick and glass, editorial travel photography, documentary realism, no people faces",
    imageOverrideUrl: "nova-york-autoral.jpg",
    publishedAt: "2026-08-10",
    readingMinutes: 10,
    category: "Destino",
    whatsappName: "Nova York autoral",
  },
  {
    slug: "parques-nacionais-oeste-americano-roteiro",
    title: "Parques nacionais do Oeste americano: roteiro completo e melhor época",
    h1: "Oeste americano: Zion, Bryce, Arches, Monument Valley e Grand Canyon num só roteiro",
    metaDescription:
      "Roteiro autoral pelos parques nacionais do Oeste dos EUA: Zion, Bryce Canyon, Arches, Canyonlands, Monument Valley, Antelope Canyon e Grand Canyon. Melhor época, quantos dias e como se locomover.",
    keywords:
      "parques nacionais estados unidos roteiro, oeste americano viagem, zion bryce arches, monument valley, antelope canyon, grand canyon melhor epoca, roteiro utah arizona, viagem parques americanos alto padrao",
    intro:
      "Existe um trecho de planalto entre Utah e Arizona onde a geologia deixa de ser matéria escolar e vira acontecimento. São 500 milhões de anos de rocha empilhada, cortada por rios que não pediram licença, e cinco parques nacionais em menos de mil quilômetros de estrada. Quem faz esse roteiro no ritmo certo — dormindo dentro dos parques, caminhando de manhã cedo, esperando a luz — volta com a impressão de ter visitado outro planeta com sinal de celular.",
    sections: [
      {
        heading: "A sequência que funciona",
        paragraphs: [
          "O desenho clássico começa em Las Vegas e termina em Phoenix (ou fecha em círculo). Zion primeiro, com o desfiladeiro vermelho e as caminhadas dentro do rio no Narrows; depois Bryce Canyon, a 2.400 metros, com o anfiteatro de hoodoos que ao amanhecer parece uma cidade em chamas.",
          "Segue-se Capitol Reef, o parque que quase ninguém agenda e todos elogiam, e a dupla de Moab: Arches, com mais de 2.000 arcos naturais, e Canyonlands, onde o mirante de Mesa Arch ao nascer do sol é uma das cenas mais fotografadas do mundo.",
          "A curva sul leva a Monument Valley, em terra Navajo — a paisagem que criou o imaginário do faroeste —, ao Antelope Canyon com guia Navajo, ao Horseshoe Bend e, finalmente, ao Grand Canyon, que se vê melhor na margem sul ao entardecer, quando o desfiladeiro muda de cor a cada dez minutos.",
        ],
      },
      {
        heading: "Dormir dentro dos parques muda tudo",
        paragraphs: [
          "Os lodges históricos dentro dos parques — El Tovar no Grand Canyon, o lodge de Zion, o de Bryce — têm poucas unidades e abrem reservas com 12 a 13 meses de antecedência. Quem dorme dentro do parque tem o amanhecer e o anoitecer sem multidão; quem dorme na cidade vizinha chega quando o estacionamento já lotou.",
          "Fora dos parques, a região ganhou hospedagens de alto padrão notáveis: acampamentos-butique com tendas climatizadas e observação de céu escuro perto de Moab e do Grand Canyon, e ranchos de deserto no Arizona.",
          "O céu, aliás, é metade da viagem. Boa parte desses parques é certificada como International Dark Sky Park — a Via Láctea aparece a olho nu, e vale reservar uma noite de astronomia guiada.",
        ],
      },
      {
        heading: "Melhor época, distâncias e ritmo",
        paragraphs: [
          "Abril a junho e setembro a outubro são as melhores janelas: dias entre 18°C e 28°C e trilhas confortáveis. Julho e agosto trazem calor extremo no fundo dos cânions e tempestades de monção à tarde. De dezembro a março, Bryce e o Grand Canyon nevam — é lindo e exige planejamento.",
          "São muitas horas de estrada, sempre bonitas: de 2 a 4 horas entre parques. Doze a catorze dias é o número honesto para o circuito completo com caminhadas; em dez dias faz-se uma versão enxuta sem Capitol Reef.",
          "Nossos roteiros usam motorista-guia ou carro privativo com guia-naturalista, entradas e permissões antecipadas (Antelope Canyon e algumas trilhas exigem cota) e caminhadas calibradas para o preparo real de cada viajante — de trilhas planas de 40 minutos a travessias de meio dia.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para visitar os parques nacionais do Oeste americano?",
        a: "Abril a junho e setembro a outubro, com temperaturas entre 18°C e 28°C. O verão traz calor extremo nos cânions e o inverno leva neve a Bryce Canyon e ao Grand Canyon.",
      },
      {
        q: "Quantos dias são necessários para o roteiro dos parques do Oeste?",
        a: "De 12 a 14 dias para incluir Zion, Bryce, Capitol Reef, Arches, Canyonlands, Monument Valley, Antelope Canyon e Grand Canyon com caminhadas. Em 10 dias faz-se uma versão reduzida.",
      },
      {
        q: "É melhor dormir dentro dos parques nacionais?",
        a: "Sim. Os lodges dentro dos parques garantem amanhecer e pôr do sol sem multidão, mas têm poucas unidades e reservas abertas com cerca de um ano de antecedência.",
      },
      {
        q: "Precisa de reserva para o Antelope Canyon?",
        a: "Sim. O acesso é feito apenas com guia Navajo autorizado e por cota de horário, comprada com antecedência. O mesmo vale para algumas trilhas com permissão limitada.",
      },
      {
        q: "Dá para fazer os parques do Oeste sem dirigir?",
        a: "Sim. É possível viajar com motorista-guia ou carro privativo com guia-naturalista, formato que também resolve permissões, horários de luz e trilhas adequadas ao preparo do grupo.",
      },
    ],
    relatedDestinations: [
      { label: "Parques Nacionais do Oeste", href: "/destinos/america-do-norte/estados-unidos/parques-nacionais-oeste" },
      { label: "Estados Unidos", href: "/estados-unidos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Mesa Arch at sunrise in Canyonlands Utah, red rock glowing, vast canyon behind, documentary travel photography, no people",
    imageOverrideUrl: "parques-nacionais-oeste.jpg",
    publishedAt: "2026-08-10",
    readingMinutes: 11,
    category: "Natureza",
    whatsappName: "Parques nacionais do Oeste americano",
  },
  {
    slug: "california-highway-1-napa-yosemite-roteiro",
    title: "Califórnia e Highway 1: roteiro de San Francisco a Big Sur",
    h1: "Califórnia autoral: San Francisco, Napa com enólogo, Yosemite e a Highway 1",
    metaDescription:
      "Roteiro autoral pela Califórnia: San Francisco, vinícolas de Napa e Sonoma com enólogo, Yosemite e a Highway 1 até Big Sur. Melhor época, quantos dias e como planejar.",
    keywords:
      "california roteiro, highway 1 big sur, napa valley vinicolas, sonoma degustacao, yosemite melhor epoca, san francisco o que fazer, viagem california alto padrao, costa oeste estados unidos roteiro",
    intro:
      "A Califórnia é um dos poucos lugares do mundo onde é possível tomar café num terraço com névoa sobre a baía, almoçar entre vinhedos com o enólogo que fez o vinho da taça e jantar ouvindo o Pacífico bater numa falésia de duzentos metros. Não é excesso: é geografia. Em cinco horas de carro cabem cidade, vinho, montanha e oceano — desde que o roteiro respeite a ordem certa e a luz certa.",
    sections: [
      {
        heading: "San Francisco e a baía",
        paragraphs: [
          "San Francisco pede três noites. A cidade se entende a pé e de teleférico: North Beach e as livrarias, o Ferry Building nas manhãs de mercado, o Presidio com vista para a Golden Gate, o SFMOMA e a arquitetura vitoriana de Alamo Square.",
          "Do outro lado da ponte, Sausalito e Muir Woods, com sequoias de 80 metros que fazem o silêncio parecer arquitetado. Uma manhã ali é obrigatória.",
          "É também onde se come melhor no começo da viagem: a cozinha californiana nasceu aqui, produto-primeiro, e continua sendo o padrão que o resto do país copia.",
        ],
      },
      {
        heading: "Napa e Sonoma com quem faz o vinho",
        paragraphs: [
          "A diferença entre uma degustação turística e uma visita autoral em Napa é quem abre a garrafa. Curamos visitas em propriedades familiares e em cavas de produção limitada, com o enólogo ou o proprietário conduzindo a prova, verticais de safras e almoço na vinha.",
          "Sonoma é mais rural e menos formal, boa para pinot noir e chardonnay de clima fresco; Napa é cabernet sauvignon, arquitetura e alta gastronomia. Duas a três noites cobrem as duas regiões sem pressa — e é aqui que se deve incluir um voo de balão ao amanhecer sobre os vinhedos.",
          "Setembro e outubro são a colheita: a região fica mais cheia, mais cara e infinitamente mais viva.",
        ],
      },
      {
        heading: "Yosemite e a Highway 1 até Big Sur",
        paragraphs: [
          "Yosemite fica a quatro horas de carro e merece duas noites dentro ou na borda do parque. O vale com El Capitan e Half Dome, as cachoeiras de Yosemite Falls (mais fortes de abril a junho) e as sequoias gigantes de Mariposa Grove.",
          "Depois, o litoral. A Highway 1 entre Monterey, Carmel e Big Sur é uma das estradas mais bonitas do mundo: falésia de um lado, Pacífico do outro, elefantes-marinhos em San Simeon, o mirante da Bixby Bridge, o Hearst Castle. Dirija de norte para sul — o lado do mar fica com você.",
          "Termine em Big Sur, com duas noites num refúgio sobre o penhasco, ou siga a Santa Bárbara e Los Angeles, se a viagem incluir voo de volta pelo sul.",
        ],
      },
      {
        heading: "Melhor época, duração e logística",
        paragraphs: [
          "Setembro e outubro são os melhores meses: céu limpo, colheita em Napa e a névoa de verão de San Francisco já dissipada. Maio e junho também funcionam, com cachoeiras cheias em Yosemite. Evite julho e agosto se a prioridade for a costa — a névoa costuma fechar Big Sur pela manhã.",
          "Doze a catorze dias fazem o roteiro completo; dez cobrem San Francisco, Napa e a Highway 1 sem Yosemite.",
          "Trechos da Highway 1 fecham periodicamente por deslizamento — o roteiro precisa de alternativa checada às vésperas. Brasileiros precisam de visto americano B1/B2.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar à Califórnia?",
        a: "Setembro e outubro, com céu limpo, colheita nas vinícolas e menos névoa na costa. Maio e junho são ótimos para Yosemite, quando as cachoeiras estão no volume máximo.",
      },
      {
        q: "Quantos dias são ideais para a Califórnia com Highway 1?",
        a: "De 12 a 14 dias incluindo San Francisco, Napa e Sonoma, Yosemite e a Highway 1 até Big Sur. Em 10 dias é possível fazer o roteiro sem Yosemite.",
      },
      {
        q: "Qual o melhor sentido para dirigir a Highway 1?",
        a: "De norte para sul, de Monterey a Big Sur, porque a faixa da direita fica voltada para o oceano e facilita paradas nos mirantes.",
      },
      {
        q: "Napa ou Sonoma: qual escolher?",
        a: "Napa concentra cabernet sauvignon, alta gastronomia e vinícolas de arquitetura marcante. Sonoma é mais rural e brilha em pinot noir e chardonnay de clima fresco. Duas a três noites cobrem as duas.",
      },
      {
        q: "Vale a pena incluir Yosemite no roteiro da Califórnia?",
        a: "Vale, com duas noites no parque ou na borda. A partir de San Francisco são cerca de quatro horas de carro, e o vale concentra El Capitan, Half Dome e as sequoias de Mariposa Grove.",
      },
    ],
    relatedDestinations: [
      { label: "Califórnia & Costa do Pacífico", href: "/destinos/america-do-norte/estados-unidos/california-costa-oeste" },
      { label: "Estados Unidos", href: "/estados-unidos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Bixby Bridge on Highway 1 Big Sur California at golden hour, Pacific ocean cliffs, coastal fog, documentary travel photography, no people",
    imageOverrideUrl: "california-highway-1.jpg",
    publishedAt: "2026-08-10",
    readingMinutes: 10,
    category: "Roteiro",
    whatsappName: "Califórnia e Highway 1",
  },
  {
    slug: "alasca-viagem-guia-melhor-epoca",
    title: "Alasca: guia de viagem, melhor época e lodges remotos",
    h1: "Alasca: geleiras, ursos-pardos e lodges onde só se chega de bush plane",
    metaDescription:
      "Guia autoral do Alasca: Kenai Fjords, Denali, lodges remotos por bush plane, observação de ursos-pardos e aurora boreal. Melhor época, quantos dias e como planejar.",
    keywords:
      "alasca viagem, melhor epoca alasca, denali parque nacional, kenai fjords geleiras, ursos pardos alasca, aurora boreal alasca fairbanks, lodge remoto alasca, viagem natureza alto padrao estados unidos",
    intro:
      "O Alasca corrige a escala das coisas. Um urso-pardo adulto pescando salmão a quarenta metros, uma parede de gelo azul de sessenta metros desabando dentro do mar, uma montanha de 6.190 metros aparecendo inteira depois de três dias de nuvem — nada disso cabe numa fotografia, e é exatamente por isso que se vai. É a viagem de natureza mais impressionante que os Estados Unidos oferecem, e a menos frequentada por brasileiros.",
    sections: [
      {
        heading: "Kenai Fjords e o gelo que se ouve",
        paragraphs: [
          "De Seward saem as navegações pelo Kenai Fjords, onde geleiras de maré descem até o oceano e se partem com um estrondo que chega antes da imagem. No caminho, orcas, baleias-jubarte, leões-marinhos e papagaios-do-mar.",
          "A alternativa aérea é sobrevoar o campo de gelo Harding — 1.800 km² de gelo contínuo — e pousar sobre a geleira. É caro, é curto, e é o tipo de meia hora que a pessoa lembra pelo resto da vida.",
          "Base recomendada: duas noites em Seward ou num lodge da península de Kenai, com pesca de salmão e caiaque entre icebergs.",
        ],
      },
      {
        heading: "Denali e os lodges remotos",
        paragraphs: [
          "O Parque Nacional Denali tem uma única estrada, fechada a carros particulares depois do quilômetro 24. Entra-se de ônibus do parque ou, melhor, hospedando-se nos lodges do fundo do vale, em Kantishna, com acesso e guias próprios.",
          "A grande montanha só aparece em cerca de um terço dos dias — quem fica três noites aumenta muito a chance. E há o resto: alces, caribus, ursos-pardos na tundra aberta, e uma luz de verão que não termina.",
          "Para quem quer o Alasca em estado bruto, os lodges de Katmai e Lake Clark, alcançados apenas por hidroavião, oferecem observação de ursos-pardos a curta distância com guias especializados, entre julho e setembro, na temporada do salmão.",
        ],
      },
      {
        heading: "Verão, aurora boreal e quantos dias",
        paragraphs: [
          "A temporada principal vai de meados de junho a meados de setembro: dias longuíssimos, todos os lodges abertos e a vida selvagem ativa. Julho e agosto concentram a corrida do salmão e a melhor observação de ursos; setembro traz tundra vermelha e as primeiras auroras.",
          "Para aurora boreal, a janela é de fim de agosto a abril, com base em Fairbanks ou em lodges de Chena — noites claras e frio de verdade.",
          "Dez a doze dias fazem um roteiro coerente: Anchorage, península de Kenai, Denali e um lodge remoto. Somando aurora em Fairbanks, catorze. Brasileiros precisam de visto americano B1/B2.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar ao Alasca?",
        a: "De meados de junho a meados de setembro, quando os lodges estão abertos e a vida selvagem está ativa. Para aurora boreal, a janela vai do fim de agosto a abril, com base em Fairbanks.",
      },
      {
        q: "Quantos dias são necessários no Alasca?",
        a: "De 10 a 12 dias para Anchorage, península de Kenai, Denali e um lodge remoto. Acrescente dois a três dias se incluir aurora boreal em Fairbanks.",
      },
      {
        q: "Onde ver ursos-pardos no Alasca?",
        a: "Nos parques de Katmai e Lake Clark, acessíveis apenas por hidroavião, entre julho e setembro, durante a corrida do salmão, sempre com guias especializados.",
      },
      {
        q: "É possível ver o Monte Denali de perto?",
        a: "Sim, a partir dos lodges no fundo do vale, em Kantishna, ou em sobrevoos. A montanha aparece em cerca de um terço dos dias, então três noites na região aumentam muito a chance.",
      },
      {
        q: "Dá para ver aurora boreal e geleiras na mesma viagem?",
        a: "Sim, no fim de agosto e em setembro, quando a temporada de verão ainda está aberta e as noites já escurecem o suficiente para a aurora no interior do estado.",
      },
    ],
    relatedDestinations: [
      { label: "Alasca", href: "/destinos/america-do-norte/estados-unidos/alasca" },
      { label: "Estados Unidos", href: "/estados-unidos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Tidewater glacier calving into the sea in Kenai Fjords Alaska, blue ice wall, snow mountains, dramatic overcast light, documentary nature photography, no people",
    imageOverrideUrl: "alasca-kenai-fjords.jpg",
    publishedAt: "2026-08-10",
    readingMinutes: 10,
    category: "Natureza",
    whatsappName: "Alasca — geleiras e ursos",
  },
  {
    slug: "havai-guia-viagem-ilhas-vulcoes",
    title: "Havaí: qual ilha escolher, melhor época e o que fazer",
    h1: "Havaí além da praia: vulcões ativos, mantas à noite e a costa Na Pali",
    metaDescription:
      "Guia autoral do Havaí para viajantes exigentes: qual ilha escolher, vulcões ativos na Big Island, mergulho noturno com mantas, costa Na Pali em Kauai e imersão cultural havaiana.",
    keywords:
      "havai viagem, qual ilha do havai escolher, big island vulcao kilauea, maui road to hana, kauai na pali, mergulho com mantas kona, melhor epoca havai, viagem havai alto padrao",
    intro:
      "Chamar o Havaí de destino de praia é como chamar a Itália de destino de massa. As ilhas são o arquipélago mais isolado do planeta, nascidas de um ponto quente que ainda está aceso, e concentram onze das treze zonas climáticas do mundo em algumas centenas de quilômetros. Dá para começar o dia num deserto de lava a 4.000 metros e terminar numa floresta tropical com cachoeira — no mesmo carro, no mesmo dia.",
    sections: [
      {
        heading: "Qual ilha escolher",
        paragraphs: [
          "Big Island é a ilha da geologia: o Parque Nacional dos Vulcões com o Kilauea ativo, campos de lava recentes, praias de areia preta e o observatório de Mauna Kea, um dos melhores céus do mundo. É também onde acontece o mergulho noturno com mantas em Kona, com bichos de quatro metros passando a centímetros — a experiência mais memorável do arquipélago.",
          "Maui equilibra: a estrada de Hana com suas 600 curvas e 50 pontes, o nascer do sol no cratera de Haleakalā a 3.055 metros e a melhor concentração de resorts. Baleias-jubarte de dezembro a abril.",
          "Kauai é a mais verde e a mais dramática: a costa Na Pali, vista de helicóptero, de barco ou pela trilha Kalalau, e o Waimea Canyon. Oahu é a ilha urbana e histórica — Honolulu, Pearl Harbor, cultura viva e a North Shore no inverno.",
          "Duas ilhas por viagem é o número certo. Três só a partir de doze noites.",
        ],
      },
      {
        heading: "Cultura havaiana de verdade",
        paragraphs: [
          "Fora do circuito de resort existe um Havaí que se sustenta em prática cultural: mestres de hula que ensinam o significado dos gestos, navegadores polinésios que orientam canoas por estrelas, fazendas de taro em vales que continuam sendo cultivados como há séculos.",
          "Curamos encontros com esses anfitriões — não apresentações para plateia, mas conversas e práticas — além de fazendas de café em Kona e de cacau em Hāmākua.",
          "É esse contraste que transforma o Havaí de uma semana de praia numa viagem que se conta depois.",
        ],
      },
      {
        heading: "Melhor época, duração e logística",
        paragraphs: [
          "O Havaí funciona o ano inteiro, com temperaturas entre 24°C e 30°C. Abril a junho e setembro a novembro têm menos gente e melhores tarifas. Dezembro a março é a temporada de baleias e de ondas grandes na costa norte, com mais chuva.",
          "De 10 a 14 noites para duas ilhas, com voos internos curtos entre elas. De São Paulo, a rota mais confortável passa por Los Angeles, San Francisco ou Dallas.",
          "Brasileiros precisam de visto americano B1/B2 — o Havaí é território dos Estados Unidos. Aluguel de carro é praticamente obrigatório, e vale reservar com meses de antecedência nas ilhas menores.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual ilha do Havaí escolher para a primeira viagem?",
        a: "Big Island e Maui formam a melhor dupla de estreia: vulcões ativos, mergulho com mantas e Mauna Kea na primeira; a estrada de Hana, Haleakalā e boas hospedagens na segunda.",
      },
      {
        q: "Qual a melhor época para viajar ao Havaí?",
        a: "Abril a junho e setembro a novembro, com clima estável, menos movimento e melhores tarifas. De dezembro a março há mais chuva, ondas grandes e observação de baleias-jubarte.",
      },
      {
        q: "Quantos dias são ideais no Havaí?",
        a: "De 10 a 14 noites para conhecer duas ilhas com calma. Três ilhas só se justificam a partir de doze noites, por causa do tempo perdido em voos e traslados.",
      },
      {
        q: "Brasileiro precisa de visto para o Havaí?",
        a: "Sim. O Havaí é um estado americano, portanto exige o visto B1/B2 como qualquer outro destino nos Estados Unidos.",
      },
      {
        q: "Onde mergulhar com mantas no Havaí?",
        a: "Na costa de Kona, na Big Island, em mergulhos e snorkels noturnos com operadores licenciados, quando as arraias-manta se aproximam das luzes para se alimentar de plâncton.",
      },
    ],
    relatedDestinations: [
      { label: "Havaí", href: "/destinos/america-do-norte/estados-unidos/havai" },
      { label: "Estados Unidos", href: "/estados-unidos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Na Pali coast cliffs in Kauai Hawaii at golden hour, green fluted ridges falling into the Pacific, aerial documentary travel photography, no people",
    imageOverrideUrl: "havai-na-pali.jpg",
    publishedAt: "2026-08-10",
    readingMinutes: 10,
    category: "Destino",
    whatsappName: "Havaí — vulcões e ilhas",
  },
];
