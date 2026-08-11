import { Destination } from "../types";

/**
 * Américas — curadoria Create Travel para destinos autorais na América do Sul,
 * América Central, Caribe e Canadá. Mesmo padrão editorial das demais coleções.
 */
export const americasExtraDestinations: Destination[] = [
  {
    id: "america-do-sul-argentina",
    continent: "América do Sul",
    country: "Argentina",
    region: "Buenos Aires, Mendoza e Bariloche",
    slug: "america-do-sul/argentina/argentina-autoral",
    name: "Argentina Autoral",
    bestTime:
      "Mar–Mai e Set–Nov para Buenos Aires e Mendoza (temperaturas amenas, colheita da uva em março-abril). Jun–Set para Bariloche, temporada de neve na Patagônia andina.",
    tags: ["gastronomia", "cultura", "montanha", "roadtrip", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a vineyard in Mendoza at golden hour with the Andes mountains in the background, rows of grapevines, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Argentina que a Create Travel desenha não cabe num roteiro só de tango e bife. É Buenos Aires vivida por dentro dos seus ateliês e livrarias centenárias, Mendoza provada garrafa a garrafa em vinícolas de família, e Bariloche respirada na altitude limpa dos lagos andinos. Três países dentro de um só, costurados sob medida.",
    highlights: [
      {
        title: "Buenos Aires com anfitriões locais",
        story:
          "Um casarão em Recoleta, a milonga que só os portenhos frequentam e uma livraria que virou catedral. Buenos Aires se revela devagar, entre um café com leite e a esquina onde Borges escrevia.",
      },
      {
        title: "Degustação privativa em vinícolas de Mendoza",
        story:
          "O enólogo que abre a adega só para você, garrafas raras servidas à sombra da cordilheira e um almoço de muitas horas sob as parreiras. O Malbec aqui tem endereço e sobrenome.",
      },
      {
        title: "Bariloche e os lagos andinos",
        story:
          "Águas de um azul quase impossível cercadas de bosques de coihues, o Circuito Chico ao entardecer e um chocolate artesanal que vira ritual depois de um dia de trilha.",
      },
      {
        title: "Estâncias na Pampa com cavalgada",
        story:
          "Gaúchos de bombacha conduzindo o rebanho ao amanhecer, um asado que começa cedo e termina tarde, e a planície se abrindo sem fim até o horizonte.",
      },
      {
        title: "Teatro Colón e vida cultural portenha",
        story:
          "Uma noite de ópera na acústica perfeita de um dos teatros mais celebrados do mundo, seguida de jantar tardio numa parrilla que só os locais conhecem.",
      },
    ],
    beyondUsual: [
      {
        title: "Vindima assistida em pequena vinícola familiar",
        story: "Participar da colheita de março-abril, mãos na terra, e provar o vinho da própria safra meses depois.",
      },
      {
        title: "Sobrevoo panorâmico sobre os Andes e os Sete Lagos",
        story: "Vinte minutos de ar puro sobre lagos glaciares e picos nevados, um ângulo que nenhuma estrada alcança.",
      },
      {
        title: "Jantar de chef em ateliê privado em Palermo",
        story: "Uma cozinha aberta, menu degustação e o chef contando a história de cada prato à mesa.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são necessários para conhecer Argentina Autoral?", a: "De 8 a 10 noites: 3 em Buenos Aires, 3 em Mendoza e 3 em Bariloche, com voos internos curtos entre as cidades." },
      { q: "Qual a melhor época para visitar Mendoza?", a: "Março e abril, período de vindima, trazem paisagem, degustações especiais e clima ameno. Setembro a novembro também é excelente, com a primavera nas vinhas." },
      { q: "Bariloche é destino de inverno ou de verão?", a: "Os dois. No inverno (junho a setembro) domina o esqui nos Andes; no verão (dezembro a março) prevalecem trekking, lagos e cavalgadas." },
      { q: "Brasileiro precisa de visto para a Argentina?", a: "Não. Basta documento de identidade válido ou passaporte para entrar como turista." },
      { q: "Dá para combinar Argentina com Chile ou Uruguai?", a: "Sim. Bariloche conecta-se por estrada aos lagos chilenos, e Buenos Aires está a poucas horas de barco de Colonia del Sacramento, no Uruguai." },
      { q: "Como montar meu roteiro pela Argentina?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e interesses — a curadoria desenha o itinerário do zero." },
    ],
  },
  {
    id: "america-do-sul-colombia",
    continent: "América do Sul",
    country: "Colômbia",
    region: "Cartagena, Eixo Cafeteiro e Bogotá",
    slug: "america-do-sul/colombia/cartagena-eixo-cafeteiro-bogota",
    name: "Colômbia Essencial",
    bestTime:
      "Dez–Mar (seca, ideal para Cartagena e o Eixo Cafeteiro). Jul–Ago também é seco no Eixo Cafeteiro. Bogotá tem clima estável o ano todo, em torno de 15°C.",
    tags: ["cultura", "gastronomia", "fotografia", "praia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photo of colorful colonial balconies in Cartagena's old town at sunset, bougainvillea flowers, cinematic warm light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Colômbia da Create Travel entrelaça três Colômbias distintas: a Cartagena colonial e caribenha, o Eixo Cafeteiro verde e montanhoso, e a Bogotá contemporânea de museus e alta gastronomia. Um país que reescreveu sua própria narrativa e hoje se oferece inteiro a quem quiser conhecê-lo de perto.",
    highlights: [
      {
        title: "Cidade Amuralhada de Cartagena ao entardecer",
        story:
          "Ruas de pedra ainda quentes do dia, balcões cobertos de buganvílias e a luz dourada caindo sobre as muralhas que resistiram a séculos de piratas e impérios.",
      },
      {
        title: "Fazendas de café no Eixo Cafeteiro",
        story:
          "Colher o próprio grão entre as montanhas de Salento, torrar na hora e provar um café que nunca viajou mais do que alguns metros até a xícara.",
      },
      {
        title: "Vale de Cocora e as palmeiras de cera",
        story:
          "As palmeiras mais altas do mundo emergindo da neblina da manhã, uma trilha entre pontes suspensas e o silêncio raro de uma floresta de altitude.",
      },
      {
        title: "Bogotá contemporânea e o Museu do Ouro",
        story:
          "Mais de trinta mil peças pré-colombianas contando a história de civilizações inteiras, seguidas por um jantar de autor num bairro que reinventa a gastronomia andina.",
      },
      {
        title: "Ilhas do Rosário a partir de Cartagena",
        story:
          "Um arquipélago de águas transparentes a uma hora de barco, onde o almoço é peixe fresco servido com os pés na areia.",
      },
    ],
    beyondUsual: [
      {
        title: "Rota da esmeralda com joalheiro especializado",
        story: "Visita guiada por um especialista que ensina a reconhecer a qualidade da pedra símbolo da Colômbia.",
      },
      {
        title: "Imersão privativa em fazenda de café boutique",
        story: "Um dia inteiro com o produtor, do plantio à torra artesanal, longe do roteiro turístico padrão.",
      },
      {
        title: "Passeio noturno pela Getsemaní com artista de rua",
        story: "Murais, música ao vivo e histórias de bairro contadas por quem nasceu ali.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para Cartagena, Eixo Cafeteiro e Bogotá?", a: "9 a 11 noites: 3 em Cartagena, 3 no Eixo Cafeteiro e 3 em Bogotá, com voos domésticos curtos entre as três regiões." },
      { q: "Qual a melhor época para visitar a Colômbia?", a: "Dezembro a março é o período mais seco em Cartagena e no Eixo Cafeteiro. Bogotá, em altitude, mantém clima ameno o ano inteiro." },
      { q: "A Colômbia é um destino seguro para viajar?", a: "Sim, com roteiro bem planejado e guias locais de confiança nas regiões turísticas centrais — exatamente o que a curadoria Create Travel estrutura." },
      { q: "Brasileiro precisa de visto para a Colômbia?", a: "Não. Passaporte válido é suficiente para estadias turísticas." },
      { q: "Vale a pena conhecer o Eixo Cafeteiro além de Cartagena?", a: "Sim — é uma Colômbia completamente diferente, verde e montanhosa, essencial para entender a cultura cafeeira do país." },
      { q: "Como montar meu roteiro pela Colômbia?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e interesses — desenhamos o itinerário sob medida." },
    ],
  },
  {
    id: "america-do-sul-uruguai",
    continent: "América do Sul",
    country: "Uruguai",
    region: "José Ignacio, Garzón e Colonia",
    slug: "america-do-sul/uruguai/jose-ignacio-garzon-colonia",
    name: "Uruguai Discreto",
    bestTime:
      "Dez–Mar para José Ignacio (verão austral, praias e vida social). Todo o ano para Garzón e Colonia, com outono e primavera mais amenos.",
    tags: ["praia", "gastronomia", "bem-estar", "lua-de-mel", "cultura"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a minimalist beach house in José Ignacio Uruguay at sunset, wild dunes and Atlantic ocean, cinematic golden light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Uruguai que a Create Travel apresenta é o do luxo sem alarde: José Ignacio e suas casas de arquitetura discreta voltadas para o Atlântico, Garzón e sua única rua de restaurante badalado no meio do campo, e Colonia del Sacramento com suas pedras portuguesas encravadas no Rio da Prata. Um país pequeno que ensina que sofisticação também é saber sussurrar.",
    highlights: [
      {
        title: "Praias selvagens de José Ignacio",
        story:
          "Dunas intocadas, um farol branco recortando o céu e restaurantes de pé na areia onde o peixe do dia chega ainda molhado da rede.",
      },
      {
        title: "Almoço na única rua de Garzón",
        story:
          "Um vilarejo de poucas centenas de habitantes, uma rua de terra e uma mesa de assador a lenha que atrai viajantes do mundo inteiro para um almoço que dura a tarde inteira.",
      },
      {
        title: "Colonia del Sacramento a pé",
        story:
          "Calçamento português desgastado por séculos, um farol para subir ao entardecer e a travessia de barco até Buenos Aires ao fundo do Rio da Prata.",
      },
      {
        title: "Vinícolas de Tannat no interior",
        story:
          "A uva que o Uruguai fez sua, provada em adegas de pequena produção onde o enólogo ainda cuida pessoalmente de cada barrica.",
      },
      {
        title: "Pôr do sol em Playa Brava e Playa Mansa",
        story:
          "Duas praias, dois mares: de um lado as ondas do Atlântico bravo, do outro a calmaria da baía — a poucos minutos uma da outra, em Punta del Este.",
      },
    ],
    beyondUsual: [
      {
        title: "Passeio de charrete por trilhas rurais perto de José Ignacio",
        story: "Um ritmo quase esquecido, cavalos conduzindo por campos e lagoas ao entardecer.",
      },
      {
        title: "Visita a ateliê de ceramista local",
        story: "Peças únicas feitas à mão, uma conversa sobre técnica e a chance de levar uma lembrança autoral.",
      },
      {
        title: "Piquenique privativo nas dunas com chef particular",
        story: "Uma mesa montada na areia ao pôr do sol, menu assinado e vista só para dois.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar entre José Ignacio, Garzón e Colonia?", a: "6 a 8 noites: 4 em José Ignacio, um dia dedicado a Garzón e 2 a 3 noites em Colonia del Sacramento." },
      { q: "Qual a melhor época para José Ignacio?", a: "Dezembro a março, verão austral, quando praias, restaurantes e vida social estão em plena atividade." },
      { q: "Como chegar a Colonia del Sacramento?", a: "De balsa a partir de Buenos Aires, em cerca de uma hora, ou por estrada desde Montevidéu — ambas as opções fazem parte do roteiro sob medida." },
      { q: "Uruguai é bom para lua de mel?", a: "Sim — a combinação de praias discretas, gastronomia refinada e cidades pequenas cria um roteiro íntimo, sem multidões." },
      { q: "Brasileiro precisa de visto para o Uruguai?", a: "Não. Basta documento de identidade válido ou passaporte." },
      { q: "Como criar meu roteiro pelo Uruguai?", a: "Clique em Criar roteiro sob medida e conte período, estilo de viagem e preferências gastronômicas." },
    ],
  },
  {
    id: "america-do-norte-canada",
    continent: "América do Norte",
    country: "Canadá",
    region: "Rockies e Costa Oeste",
    slug: "america-do-norte/canada/rockies-costa-oeste",
    name: "Canadá: Rockies e Costa Oeste",
    bestTime:
      "Jun–Set para trilhas e lagos nas Rockies (verão curto e intenso). Set–Out para folhagem dourada. Dez–Mar para esqui em Whistler.",
    tags: ["montanha", "trekking", "roadtrip", "fotografia", "conservacao"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Moraine Lake in the Canadian Rockies with turquoise glacial water and snow-capped peaks, cinematic morning light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Canadá que a Create Travel desenha atravessa lagos de um turquesa quase irreal em Banff e Jasper, desce pela estrada cênica até Vancouver e termina nas florestas antigas da Ilha de Vancouver. Uma geografia de escala monumental, vivida em lodges privativos e trilhas guiadas por quem conhece cada curva da montanha.",
    highlights: [
      {
        title: "Lake Louise e Moraine Lake ao amanhecer",
        story:
          "A cor impossível da água glacial refletindo picos nevados, antes das primeiras excursões chegarem — o silêncio da montanha ainda intacto.",
      },
      {
        title: "Icefields Parkway entre Banff e Jasper",
        story:
          "Uma das estradas mais cênicas do planeta, glaciares visíveis da janela do carro e paradas para observar ursos e alces em segurança.",
      },
      {
        title: "Vancouver entre montanha e mar",
        story:
          "Uma cidade onde se esquia de manhã e janta frutos do mar à noite, com o Stanley Park e suas árvores centenárias a poucos minutos do centro.",
      },
      {
        title: "Florestas antigas da Ilha de Vancouver",
        story:
          "Cedros e abetos com centenas de anos, trilhas cobertas de musgo e o oceano Pacífico batendo em praias quase desertas.",
      },
      {
        title: "Observação de orcas na Costa Oeste",
        story:
          "Um passeio de barco guiado por biólogos marinhos, à procura das baleias residentes que cruzam o estreito entre a ilha e o continente.",
      },
    ],
    beyondUsual: [
      {
        title: "Heli-hike privativo nas Rockies",
        story: "Um helicóptero pousando em um platô só acessível pelo ar, seguido de trilha guiada com vista de tirar o fôlego.",
      },
      {
        title: "Jantar em vinícola do Okanagan Valley",
        story: "Vinhos premiados do único vale desértico do Canadá, servidos com vista para o lago ao entardecer.",
      },
      {
        title: "Encontro com comunidade indígena das Primeiras Nações",
        story: "Uma tarde de histórias, arte e tradições transmitidas por quem habita essas terras há milênios.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são ideais para Rockies e Costa Oeste?", a: "10 a 12 noites: 5 entre Banff e Jasper, 2 a 3 no Okanagan ou trajeto cênico, e 4 entre Vancouver e a Ilha de Vancouver." },
      { q: "Qual a melhor época para ver as Rockies canadenses?", a: "Junho a setembro, verão curto e intenso, com trilhas abertas e lagos na cor turquesa característica do degelo glacial." },
      { q: "Brasileiro precisa de visto para o Canadá?", a: "Precisa de eTA (autorização eletrônica) para viagens aéreas ou visto de visitante, conforme o histórico de viagens — orientamos todo o processo." },
      { q: "É possível ver ursos e vida selvagem com segurança?", a: "Sim, com guias especializados e distância adequada, respeitando protocolos de conservação — essencial nas Rockies e na Ilha de Vancouver." },
      { q: "Dá para combinar Rockies com Vancouver e a Costa Oeste?", a: "Sim, é o roteiro clássico e mais completo: montanha, estrada cênica e oceano em uma só viagem." },
      { q: "Como montar meu roteiro pelo Canadá?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e interesses — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "america-do-norte-costa-rica",
    continent: "América do Norte",
    country: "Costa Rica",
    region: "Pacífico, Arenal e Caribe Sul",
    slug: "america-do-norte/costa-rica/pacifico-arenal-caribe-sul",
    name: "Costa Rica Selvagem",
    bestTime:
      "Dez–Abr, estação seca, ideal para trilhas e praias. Mai–Nov é a estação verde, com chuvas rápidas à tarde e floresta em pleno viço.",
    tags: ["conservacao", "trekking", "birdwatching", "praia", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a misty cloud forest canopy in Monteverde Costa Rica at dawn, lush green rainforest, cinematic soft light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Costa Rica que a Create Travel apresenta é o país que fez da conservação um projeto de nação: mais de um quarto do território protegido, biodiversidade em cada trilha e uma filosofia de vida — a pura vida — que se sente em cada parada. Vulcões ativos, praias no Pacífico e no Caribe, e uma floresta que nunca para de sussurrar.",
    highlights: [
      {
        title: "Floresta nublada de Monteverde",
        story:
          "Pontes suspensas entre copas de árvores centenárias, uma neblina que muda a paisagem a cada minuto e o quetzal-resplandecente, se a sorte e o silêncio colaborarem.",
      },
      {
        title: "Vulcão Arenal e águas termais naturais",
        story:
          "Um cone quase perfeito emergindo da selva, e à noite um banho em fontes termais alimentadas pelo próprio calor vulcânico.",
      },
      {
        title: "Península de Osa e Corcovado",
        story:
          "Descrita pela National Geographic como o lugar biologicamente mais intenso da Terra: onças-pintadas, araras-vermelhas e praias que ainda não têm nome de resort.",
      },
      {
        title: "Caribe Sul e a cultura afro-costarriquenha",
        story:
          "Puerto Viejo com seu reggae ao vivo, praias de areia negra e dourada, e uma gastronomia de coco e especiarias que não se parece com o resto do país.",
      },
      {
        title: "Observação de tartarugas marinhas em Tortuguero",
        story:
          "Canais navegados de canoa silenciosa e, na temporada certa, o instante raro de ver uma tartaruga desovar sob a lua.",
      },
    ],
    beyondUsual: [
      {
        title: "Trilha noturna guiada por biólogo",
        story: "A floresta muda de personagens ao anoitecer — rãs, insetos luminosos e sons que só um especialista decifra.",
      },
      {
        title: "Visita a fazenda de café orgânico de altitude",
        story: "Do grão à xícara, com produtores que cultivam há gerações nas encostas vulcânicas.",
      },
      {
        title: "Voluntariado de um dia em projeto de conservação marinha",
        story: "Uma manhã participando de monitoramento de tartarugas ou recifes, ao lado de pesquisadores locais.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são recomendados para a Costa Rica?", a: "9 a 12 noites, combinando Monteverde ou Arenal, a Península de Osa ou Manuel Antonio, e o Caribe Sul." },
      { q: "Qual a melhor época para ir à Costa Rica?", a: "Dezembro a abril, estação seca, é a mais procurada. A estação verde, de maio a novembro, tem chuvas rápidas à tarde e floresta exuberante, com menos gente." },
      { q: "A Costa Rica é boa para viagem em família?", a: "Sim, é um dos destinos mais adequados da região para famílias: infraestrutura de ecoturismo madura, atividades para todas as idades e forte cultura de segurança." },
      { q: "Brasileiro precisa de visto para a Costa Rica?", a: "Não. Passaporte válido é suficiente para estadias turísticas." },
      { q: "É possível ver as duas costas — Pacífico e Caribe — na mesma viagem?", a: "Sim, embora o país seja pequeno, os trajetos entre regiões pedem tempo; recomendamos ao menos 9 noites para incluir ambas as costas com calma." },
      { q: "Como montar meu roteiro pela Costa Rica?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e interesses — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "america-do-norte-belize",
    continent: "América do Norte",
    country: "Belize",
    region: "Cayes e Recife de Barreira",
    slug: "america-do-norte/belize/cayes-recife-de-barreira",
    name: "Belize Submerso",
    bestTime:
      "Dez–Abr, estação seca, melhor visibilidade para mergulho. Abr–Jun tem águas mais calmas e menos vento para o Blue Hole.",
    tags: ["mergulho", "praia", "conservacao", "expedicao", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of the Great Blue Hole in Belize seen from above, deep circular blue sinkhole surrounded by turquoise reef, cinematic aerial light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Belize que a Create Travel revela é um país pequeno guardando o segundo maior recife de barreira do mundo. O Great Blue Hole se abre como um olho azul-escuro no meio do turquesa, ilhas particulares oferecem isolamento absoluto, e a floresta maia no interior completa um roteiro que equilibra profundidade oceânica e história ancestral.",
    highlights: [
      {
        title: "Mergulho no Great Blue Hole",
        story:
          "Um sumidouro perfeitamente circular de trezentos metros de diâmetro, estalactites submersas a quarenta metros de profundidade e a sensação de mergulhar dentro de um mistério geológico.",
      },
      {
        title: "Snorkel no Recife de Barreira de Belize",
        story:
          "O segundo maior sistema de recifes do planeta, tartarugas-marinhas, arraias e cardumes que cruzam o caminho sem pressa nenhuma.",
      },
      {
        title: "Ilhas privativas nos Cayes",
        story:
          "Uma cabana sobre pilotis, água tão clara que o barco parece flutuar no ar, e o silêncio de quem escolheu estar longe de tudo.",
      },
      {
        title: "Ruínas maias de Lamanai e Caracol",
        story:
          "Templos emergindo da selva, macacos-aranha cruzando as copas das árvores e a vista do topo de uma pirâmide que dominava um império inteiro.",
      },
      {
        title: "Rio subterrâneo de Actun Tunichil Muknal",
        story:
          "Uma caverna sagrada maia, atravessada a nado e a pé, guardando cerâmicas e vestígios de rituais antigos intocados por séculos.",
      },
    ],
    beyondUsual: [
      {
        title: "Mergulho noturno com tubarões-nutriz",
        story: "Uma experiência guiada por instrutores especializados, ao lado de uma das espécies mais dóceis do recife.",
      },
      {
        title: "Pesca com mosca em águas rasas de Turneffe",
        story: "Uma manhã silenciosa em busca do permit e do bonefish, peixes lendários entre pescadores esportivos.",
      },
      {
        title: "Jantar privativo em ilha desabitada",
        story: "Uma mesa montada na areia, chef particular e nenhuma outra alma no horizonte.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são recomendados para Belize?", a: "7 a 9 noites, combinando 4 a 5 noites em um resort de ilha nos Cayes e 2 a 3 no interior, entre selva e ruínas maias." },
      { q: "Preciso ser mergulhador experiente para conhecer o Blue Hole?", a: "O mergulho técnico no Blue Hole pede certificação avançada, mas snorkel e mergulhos rasos no recife são acessíveis a iniciantes e não mergulhadores." },
      { q: "Qual a melhor época para mergulhar em Belize?", a: "Dezembro a abril, estação seca, oferece melhor visibilidade; abril a junho traz águas mais calmas, ideais para o Blue Hole." },
      { q: "Brasileiro precisa de visto para Belize?", a: "Não. Passaporte válido é suficiente para estadias turísticas." },
      { q: "Belize é seguro para viajar?", a: "As regiões turísticas costeiras e os resorts de ilha operam com infraestrutura sólida e são a base do roteiro estruturado pela curadoria." },
      { q: "Como montar meu roteiro por Belize?", a: "Clique em Criar roteiro sob medida e conte período, nível de mergulho e interesses — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "america-do-norte-cuba",
    continent: "América do Norte",
    country: "Cuba",
    region: "Havana e Viñales",
    slug: "america-do-norte/cuba/havana-vinales",
    name: "Cuba em Camadas",
    bestTime:
      "Nov–Abr, estação seca e mais fresca, ideal para caminhar por Havana e visitar o Vale de Viñales.",
    tags: ["cultura", "fotografia", "gastronomia", "festivais-folcloricos", "roadtrip"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a classic 1950s car parked on a colorful colonial street in Old Havana, pastel facades, cinematic warm afternoon light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Cuba que a Create Travel apresenta atravessa a Havana de fachadas pastel e carros dos anos 1950, e chega ao Vale de Viñales, onde os mogotes de calcário emergem entre plantações de tabaco. Um país suspenso no tempo que exige curadoria justamente para revelar o que está por trás do cartão-postal.",
    highlights: [
      {
        title: "Havana Vieja a pé, com guia local",
        story:
          "Fachadas coloniais restauradas, praças que já viram séculos de história e o som de um trio de son cubano saindo de um bar sem placa na porta.",
      },
      {
        title: "Passeio de carro clássico americano",
        story:
          "Um conversível dos anos 1950 restaurado, o motorista contando histórias da cidade e o vento do Malecón batendo no rosto ao entardecer.",
      },
      {
        title: "Vale de Viñales e as plantações de tabaco",
        story:
          "Mogotes verdes emergindo do vale como esculturas naturais, uma visita a uma fazenda de charutos artesanais e o cheiro de folha de tabaco secando ao sol.",
      },
      {
        title: "Música ao vivo em clubes de Havana",
        story:
          "Salsa, son e bolero tocados por músicos que aprenderam de ouvido com os pais — uma noite cubana de verdade, longe dos palcos turísticos.",
      },
      {
        title: "Arte contemporânea cubana em ateliês independentes",
        story:
          "Estúdios de artistas plásticos que retratam, em cores vivas, as contradições e a poesia cotidiana da ilha.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar em paladar familiar de Havana",
        story: "Restaurantes particulares dentro de casas centenárias, onde a receita é da avó e a conversa é parte do menu.",
      },
      {
        title: "Aula de charuto com mestre torcedor",
        story: "Aprender a enrolar um charuto do jeito tradicional, direto de quem faz isso há décadas em Viñales.",
      },
      {
        title: "Sessão de fotografia em Trinidad colonial",
        story: "Ruas de pedra, cores desbotadas pelo tempo e um fotógrafo local guiando pelos melhores ângulos e luzes do dia.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são ideais para Havana e Viñales?", a: "7 a 8 noites: 4 em Havana e 3 em Viñales, com trajeto rodoviário privativo entre as duas regiões." },
      { q: "Qual a melhor época para visitar Cuba?", a: "Novembro a abril, estação seca e mais fresca, é a mais indicada para caminhar pela cidade e visitar o vale de tabaco." },
      { q: "Brasileiro precisa de visto para Cuba?", a: "Sim, é necessário o cartão de turista cubano, providenciado antes do embarque — orientamos todo o processo." },
      { q: "É fácil usar cartão de crédito e internet em Cuba?", a: "Não — recomendamos levar dinheiro em espécie e planejar a comunicação com antecedência; a curadoria orienta cada detalhe prático antes da viagem." },
      { q: "Vale a pena combinar Havana e Viñales com Trinidad?", a: "Sim, para viagens de 10 noites ou mais, Trinidad soma uma terceira camada colonial e cultural ao roteiro." },
      { q: "Como montar meu roteiro por Cuba?", a: "Clique em Criar roteiro sob medida e conte período, interesses e ritmo — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "america-do-norte-caribe",
    continent: "América do Norte",
    country: "Caribe",
    region: "Saint Barth, Anguilla e Turks & Caicos",
    slug: "america-do-norte/caribe/saint-barth-anguilla-turks-caicos",
    name: "Caribe de Alta Curadoria",
    bestTime:
      "Dez–Abr, estação seca, temperatura estável e mar em seu melhor. Evitar Jun–Nov, temporada de furacões no Caribe.",
    tags: ["praia", "lua-de-mel", "mergulho", "gastronomia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a secluded white sand beach in Anguilla Caribbean with turquoise calm water and a single beach cabana, cinematic soft daylight, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Caribe que a Create Travel seleciona não é o das ilhas de massa: é Saint Barth com sua discrição francesa e iates ancorados na Baía de Gustavia, Anguilla com as praias mais vazias e brancas do arquipélago, e Turks & Caicos com Grace Bay e suas águas em um turquesa quase irreal. Três ilhas, três formas distintas de definir exclusividade.",
    highlights: [
      {
        title: "Baía de Gustavia em Saint Barth",
        story:
          "Iates ancorados lado a lado, boutiques francesas discretas e um pôr do sol observado de um restaurante de pé na areia — o Caribe com sotaque parisiense.",
      },
      {
        title: "Praias desertas de Anguilla",
        story:
          "Areia branca e fina como talco, água rasa e cristalina, e a sensação real de ter uma praia inteira só para si em pleno Caribe.",
      },
      {
        title: "Grace Bay em Turks & Caicos",
        story:
          "Eleita repetidamente uma das melhores praias do mundo, com um mar em degradê de azuis que parece pintado à mão.",
      },
      {
        title: "Gastronomia franco-caribenha em Saint Barth",
        story:
          "Chefs formados em Paris cozinhando peixe local recém-pescado, servido em mesas de frente para o mar ao entardecer.",
      },
      {
        title: "Mergulho e snorkel nos recifes de Turks & Caicos",
        story:
          "Águas parte do terceiro maior sistema de recifes do mundo, tartarugas-marinhas e uma visibilidade que ultrapassa os trinta metros.",
      },
    ],
    beyondUsual: [
      {
        title: "Passeio de veleiro privativo entre ilhotas de Saint Barth",
        story: "Um dia inteiro navegando enseadas escondidas, com paradas para snorkel e almoço a bordo.",
      },
      {
        title: "Jantar privativo na praia em Anguilla",
        story: "Mesa montada na areia ao entardecer, velas, chef particular e o som das ondas como única trilha sonora.",
      },
      {
        title: "Excursão a Iguana Island e observação de vida marinha",
        story: "Um bate-volta de barco a partir de Turks & Caicos para nadar entre raias e observar iguanas nativas em habitat protegido.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual ilha do Caribe escolher: Saint Barth, Anguilla ou Turks & Caicos?", a: "Saint Barth combina praia com vida social sofisticada; Anguilla prioriza isolamento e praias vazias; Turks & Caicos equilibra praia icônica com boa infraestrutura de resorts. A curadoria ajuda a escolher conforme o perfil da viagem." },
      { q: "Quantos dias são recomendados no Caribe de alta curadoria?", a: "7 a 10 noites, seja em uma única ilha para imersão total, seja combinando duas delas com voo charter entre trechos." },
      { q: "Qual a melhor época para o Caribe?", a: "Dezembro a abril, estação seca. Junho a novembro é a temporada de furacões e deve ser evitada." },
      { q: "Esse roteiro é indicado para lua de mel?", a: "Sim — é um dos destinos mais procurados para lua de mel de alto padrão, pela combinação de privacidade, praias e gastronomia refinada." },
      { q: "Brasileiro precisa de visto para essas ilhas do Caribe?", a: "Depende da ilha: Saint Barth segue regras da União Europeia (território francês), Anguilla e Turks & Caicos são territórios britânicos — orientamos a documentação específica de cada uma." },
      { q: "Como montar meu roteiro pelo Caribe?", a: "Clique em Criar roteiro sob medida e conte período, estilo de viagem e ilhas de interesse — desenhamos o itinerário do zero." },
    ],
  },
];
