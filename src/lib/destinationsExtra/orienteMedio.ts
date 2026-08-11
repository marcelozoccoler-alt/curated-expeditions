import { Destination } from "../types";

/**
 * Oriente Médio — destinos com curadoria Create Travel.
 * Intro autoral, destaques sensoriais, "além do óbvio" e FAQs de intenção real.
 */
export const orienteMedioExtraDestinations: Destination[] = [
  {
    id: "oriente-medio-oma",
    continent: "Oriente Médio",
    country: "Omã",
    region: "Mascate, Wahiba, Jebel Shams e Musandam",
    slug: "oriente-medio/oma",
    name: "Omã Autoral",
    bestTime:
      "Out–Abr (temperaturas amenas, céus limpos). Nov–Fev é o auge para dunas e trekking; verão é desaconselhado pelo calor extremo no interior.",
    tags: ["deserto", "cultura", "trekking", "expedicao", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Wahiba desert dunes at golden hour, a single Bedouin-style camp tent silhouette in the distance, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Omã guardou o que os vizinhos do Golfo trocaram por arranha-céus: fortes de barro intactos, wadis de água turquesa escondidos entre rochedos e um deserto que ainda pertence às estrelas. A curadoria Create Travel entra por Mascate branca e discreta, sobe ao Jebel Shams — o Grand Canyon da Arábia — e termina sob a lona de um acampamento privativo nas dunas de Wahiba, onde o silêncio tem peso.",
    highlights: [
      {
        title: "Mascate ao amanhecer",
        story:
          "A Grande Mesquita do Sultão Qaboos vazia, o mármore ainda frio sob os pés e o tapete persa de trinta toneladas estendido em silêncio. Da Corniche, os barcos de pesca voltam antes que o calor tome conta da cidade.",
      },
      {
        title: "Jebel Shams, o Grand Canyon árabe",
        story:
          "Uma trilha estreita corre à beira de um precipício de mil metros, aldeias abandonadas penduradas na rocha e um vilarejo local que ainda cultiva romãs em terraços seculares.",
      },
      {
        title: "Dunas de Wahiba sob acampamento privativo",
        story:
          "Areia alaranjada que muda de tom a cada hora, um beduíno que ensina a ler o vento nas ondulações do solo e uma noite sem nenhuma luz artificial entre você e a Via Láctea.",
      },
      {
        title: "Wadi Shab e as piscinas escondidas",
        story:
          "Uma caminhada entre paredões de calcário termina numa caverna semiaberta onde a água esverdeada convida ao mergulho. Poucos visitantes chegam até ali fora dos horários certos.",
      },
      {
        title: "Fiordes de Musandam de dhow tradicional",
        story:
          "Um barco de madeira desliza por canais que lembram a Noruega sob o sol do Golfo, golfinhos acompanham a proa e vilarejos de pescadores aparecem entre penhascos que mergulham direto no mar.",
      },
    ],
    beyondUsual: [
      {
        title: "Noite em acampamento de luxo com astrônomo particular",
        story:
          "Um telescópio profissional montado nas dunas e um guia que decifra constelações que o hemisfério sul raramente revela.",
      },
      {
        title: "Forte de Nizwa e o souq das especiarias ao amanhecer",
        story:
          "Antes das lojas abrirem ao público, os comerciantes já organizam sacas de incenso e tâmaras — um Omã que ainda não posou para foto.",
      },
      {
        title: "Mergulho nas Ilhas Daymaniyat",
        story:
          "Águas raramente exploradas por turistas, corais preservados e tartarugas em rota migratória — um santuário marinho a poucos minutos de barco de Mascate.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar em Omã?", a: "De 7 a 9 noites. Sete cobrem Mascate, Jebel Shams e Wahiba com calma; nove permitem incluir os fiordes de Musandam sem pressa." },
      { q: "Qual a melhor época para viajar a Omã?", a: "Outubro a abril, com temperaturas amenas mesmo no interior. Novembro a fevereiro é o período mais procurado para o deserto; o verão é desaconselhado pelo calor extremo." },
      { q: "Brasileiro precisa de visto para Omã?", a: "Sim, é necessário visto eletrônico, solicitado online com antecedência. A curadoria Create Travel orienta toda a documentação e prazos." },
      { q: "Omã é seguro para viajar?", a: "Sim, é considerado um dos destinos mais seguros e hospitaleiros do Oriente Médio, com infraestrutura turística sólida e população acolhedora." },
      { q: "Vale combinar Omã com outros destinos do Golfo?", a: "Combinações naturais incluem Dubai, Abu Dhabi ou Qatar, com voos curtos entre as capitais — ideais para somar litoral urbano e deserto autêntico numa mesma viagem." },
      { q: "Como criar meu roteiro para Omã?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "oriente-medio-catar",
    continent: "Oriente Médio",
    country: "Catar",
    region: "Doha e deserto de Khor Al Adaid",
    slug: "oriente-medio/catar",
    name: "Catar Autoral",
    bestTime:
      "Nov–Mar (clima ameno, ideal para deserto e cidade). Verão traz calor intenso e alta umidade, desaconselhado para passeios ao ar livre.",
    tags: ["deserto", "cultura", "gastronomia", "fotografia", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Doha skyline reflected on the Corniche waterfront at dusk, dhow boats silhouetted in foreground, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Doha condensa em poucos quilômetros quadrados uma das arquiteturas mais ousadas do planeta e, a uma hora dali, o silêncio absoluto onde o deserto encontra o mar. A curadoria Create Travel equilibra os dois extremos: museus desenhados por I.M. Pei, souqs perfumados de açafrão e uma noite sob as estrelas em Khor Al Adaid, a lagoa interna cercada de dunas que poucos viajantes brasileiros conhecem.",
    highlights: [
      {
        title: "Museu de Arte Islâmica com curador privativo",
        story:
          "O edifício de I.M. Pei sobre sua própria ilha artificial guarda mil e quatrocentos anos de arte islâmica. Um curador conduz a visita antes da abertura ao público, com o Golfo Pérsico emoldurando as janelas.",
      },
      {
        title: "Souq Waqif ao entardecer",
        story:
          "Becos estreitos de arenito, falcoeiros exibindo suas aves de caça e o aroma de café com cardamomo saindo das casas de chá centenárias — o comércio tradicional do Catar ainda pulsa aqui.",
      },
      {
        title: "Khor Al Adaid, a lagoa interna do deserto",
        story:
          "Único lugar do mundo onde dunas se encontram diretamente com o mar sem faixa de praia. Um 4x4 privativo cruza as ondulações de areia até o acampamento montado à beira d'água.",
      },
      {
        title: "The Pearl-Qatar de barco privativo",
        story:
          "Canais artificiais margeados por marinas e arquitetura mediterrânea reinventada no Golfo, vistos de um pequeno barco ao pôr do sol, longe do fluxo dos shoppings.",
      },
      {
        title: "Corniche de Doha ao amanhecer",
        story:
          "A caminhada à beira-mar revela dhows de madeira ancorados diante dos arranha-céus futuristas de West Bay — um contraste que resume o Catar contemporâneo.",
      },
    ],
    beyondUsual: [
      {
        title: "Corrida de camelos com treinador local",
        story:
          "Uma manhã na pista de treino nos arredores de Doha, onde robôs jóqueis guiam os animais numa tradição reinventada pela tecnologia.",
      },
      {
        title: "Jantar privativo em Al Zubarah, sítio da Unesco",
        story:
          "Ruínas de uma cidade portuária do século XVIII, isoladas no deserto costeiro, servem de cenário para uma refeição sob as estrelas, longe de qualquer rota turística.",
      },
      {
        title: "Ateliê de arte contemporânea local",
        story:
          "Visitas agendadas a artistas cataris que trabalham caligrafia e têxteis tradicionais reinterpretados em chave contemporânea.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar em Doha?", a: "De 3 a 5 noites são suficientes para explorar a cidade, os museus e uma noite no deserto de Khor Al Adaid." },
      { q: "Qual a melhor época para visitar o Catar?", a: "Novembro a março, com temperaturas amenas para passeios ao ar livre e experiências no deserto. O verão é extremamente quente e úmido." },
      { q: "Brasileiro precisa de visto para o Catar?", a: "Não é necessário visto para estadas turísticas de até 30 dias, apenas passaporte válido. A curadoria Create Travel confirma as regras vigentes conforme a data da viagem." },
      { q: "Vale a pena combinar o Catar com outros destinos do Golfo?", a: "Sim. Doha conecta-se facilmente com Dubai, Abu Dhabi e Omã, com voos curtos que permitem somar cidade, deserto e litoral numa única viagem." },
      { q: "O Catar é indicado para viagem em família?", a: "Sim. Museus interativos, o aquário de Doha e passeios de 4x4 no deserto agradam diferentes idades, com logística confortável e curta." },
      { q: "Como criar meu roteiro para o Catar?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "oriente-medio-arabia-saudita",
    continent: "Oriente Médio",
    country: "Arábia Saudita",
    region: "AlUla e Hegra",
    slug: "oriente-medio/arabia-saudita",
    name: "Arábia Saudita Autoral",
    bestTime:
      "Out–Mar (clima ameno no deserto do noroeste). Verão traz calor extremo em AlUla, desaconselhado para trilhas e passeios diurnos.",
    tags: ["deserto", "cultura", "expedicao", "fotografia", "conservacao"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Hegra rock-cut tombs in AlUla desert at sunset, sandstone formations glowing orange, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Arábia Saudita abriu suas portas ao mundo há pouco tempo, e AlUla é o capítulo mais espetacular dessa nova narrativa: tumbas nabateias esculpidas na rocha, formações de arenito esculpidas pelo vento por milênios e um deserto que só agora recebe visitantes internacionais em número reduzido. A curadoria Create Travel chega antes que o destino se torne óbvio.",
    highlights: [
      {
        title: "Hegra, o segundo sítio nabateu do mundo",
        story:
          "Mais de cem tumbas monumentais esculpidas em arenito, irmãs de Petra e ainda pouco visitadas. Caminhar entre elas ao amanhecer, sem outro grupo à vista, é medir a escala real da civilização nabateia.",
      },
      {
        title: "Elephant Rock ao pôr do sol",
        story:
          "Uma formação rochosa de sessenta metros, esculpida pelo vento em forma de elefante, recorta o céu alaranjado do deserto do Hejaz enquanto o silêncio toma conta do vale.",
      },
      {
        title: "AlUla Old Town a pé",
        story:
          "Casas de barro abandonadas há décadas, ruas estreitas que serpenteiam entre paredes de adobe e uma mesquita centenária ainda de pé — o vilarejo original antes da cidade moderna crescer ao redor.",
      },
      {
        title: "Jantar sob as instalações de arte de Desert X AlUla",
        story:
          "Obras de arte contemporânea internacional dialogam com as formações rochosas milenares, num dos festivais mais discutidos da cena artística global recente.",
      },
      {
        title: "Trilha panorâmica de Harrat Viewpoint",
        story:
          "Um mirante remoto sobre campos de lava vulcânica petrificada, onde a paisagem lunar se estende até o horizonte sem nenhum sinal de presença humana.",
      },
    ],
    beyondUsual: [
      {
        title: "Voo de balão sobre Hegra ao amanhecer",
        story:
          "As tumbas nabateias vistas de cima, com a luz rasante desenhando sombras longas sobre o arenito — uma perspectiva reservada a poucos viajantes por dia.",
      },
      {
        title: "Encontro com arqueólogos em escavação ativa",
        story:
          "Visitas conduzidas por pesquisadores que seguem escavando novos sítios na região, com relatos de descobertas ainda não publicadas.",
      },
      {
        title: "Jantar beduíno privativo nas dunas do Hejaz",
        story:
          "Uma mesa montada longe de qualquer estrutura turística, com pratos tradicionais servidos sob um céu sem poluição luminosa.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar em AlUla?", a: "De 4 a 5 noites permitem explorar Hegra, AlUla Old Town e os mirantes do entorno com ritmo tranquilo, incluindo um dia de folga para arte contemporânea." },
      { q: "Qual a melhor época para visitar AlUla?", a: "Outubro a março, quando as temperaturas do deserto do noroeste saudita ficam amenas para trilhas e passeios diurnos." },
      { q: "Brasileiro precisa de visto para a Arábia Saudita?", a: "Sim, é necessário visto eletrônico de turismo, emitido online. A curadoria Create Travel orienta toda a documentação necessária." },
      { q: "É seguro viajar para a Arábia Saudita?", a: "Sim, o país investe fortemente em infraestrutura turística desde a abertura ao turismo internacional, com áreas como AlUla estruturadas especificamente para receber visitantes estrangeiros." },
      { q: "Existe algum código de vestimenta a respeitar?", a: "Recomenda-se vestimenta modesta em locais públicos, sem exigência de véu para visitantes estrangeiras. A curadoria orienta detalhes práticos antes da viagem." },
      { q: "Como criar meu roteiro para AlUla?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "oriente-medio-bareine",
    continent: "Oriente Médio",
    country: "Bareine",
    region: "Manama",
    slug: "oriente-medio/bareine",
    name: "Bareine Autoral",
    bestTime:
      "Nov–Mar (clima ameno). Verão traz calor e umidade elevados, mais adequado para o roteiro indoor de museus e gastronomia.",
    tags: ["cultura", "gastronomia", "mergulho", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Manama's Bahrain World Trade Center towers at dusk with traditional dhow harbor in foreground, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Bareine é o arquipélago discreto do Golfo, onde torres eólicas integradas a arranha-céus dividem espaço com fortes portugueses do século XVI e os últimos mergulhadores de pérolas naturais do mundo. A curadoria Create Travel revela um país pequeno em extensão e denso em camadas históricas, ideal para quem busca autenticidade sem multidões.",
    highlights: [
      {
        title: "Forte de Bareine, sítio da Unesco",
        story:
          "Camadas de sete mil anos de ocupação humana sobrepostas num único tell, da civilização Dilmun aos portugueses. Ao entardecer, a luz dourada sobre as ruínas de coral e gesso conta essa estratigrafia sem precisar de palavras.",
      },
      {
        title: "Banco de pérolas naturais com mergulhador tradicional",
        story:
          "Um dos últimos mestres pescadores de pérolas do Golfo ensina a técnica ancestral de apneia, antes de submergir sem equipamento nos bancos que sustentaram a economia do arquipélago por séculos.",
      },
      {
        title: "Souq de Manama e a Casa da Corte",
        story:
          "Ruas cobertas de ouro, especiarias e têxteis, com pausas para café árabe em pátios internos que escapam do fluxo principal — o comércio bareinita em sua forma mais genuína.",
      },
      {
        title: "Árvore da Vida no deserto sul",
        story:
          "Uma acácia solitária de quatrocentos anos, sobrevivendo sem fonte de água aparente em pleno deserto, é um dos enigmas naturais mais fotografados do Golfo.",
      },
      {
        title: "Torres do World Trade Center ao entardecer",
        story:
          "As primeiras turbinas eólicas integradas à estrutura de um arranha-céu giram lentamente sobre a baía, um símbolo da ambição sustentável bareinita observado de um terraço reservado.",
      },
    ],
    beyondUsual: [
      {
        title: "Ateliê de tecelagem tradicional em Bani Jamra",
        story:
          "Um vilarejo onde teares manuais ainda produzem os tecidos usados nas vestimentas tradicionais do Golfo, com mestres artesãos dispostos a receber visitantes.",
      },
      {
        title: "Circuito de Fórmula 1 fora de temporada",
        story:
          "Visita nos bastidores da pista do Bahrain International Circuit, incluindo o boxe e a torre de controle, longe do burburinho da corrida.",
      },
      {
        title: "Jantar privativo em antiga casa de comerciante de pérolas",
        story:
          "Uma residência histórica restaurada no bairro de Muharraq recebe uma mesa fechada, com pratos que remontam à culinária dos comerciantes marítimos do século XIX.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar em Bareine?", a: "De 3 a 4 noites são suficientes para explorar Manama, o Forte de Bareine e o deserto sul com boa profundidade." },
      { q: "Qual a melhor época para visitar Bareine?", a: "Novembro a março, com clima ameno para passeios ao ar livre e visitas aos sítios históricos." },
      { q: "Brasileiro precisa de visto para Bareine?", a: "Sim, é necessário visto eletrônico de turismo, com emissão simples e rápida online. A curadoria Create Travel orienta o processo." },
      { q: "Vale combinar Bareine com outros destinos do Golfo?", a: "Sim, Bareine conecta-se facilmente com o Catar e a Arábia Saudita, complementando um roteiro dedicado à história e à arquitetura contemporânea do Golfo." },
      { q: "Bareine é indicado para quem busca mergulho?", a: "Sim, os bancos de pérolas naturais e os recifes preservados no sul do arquipélago oferecem mergulho e snorkel em águas ainda pouco exploradas por turistas." },
      { q: "Como criar meu roteiro para Bareine?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "oriente-medio-libano",
    continent: "Oriente Médio",
    country: "Líbano",
    region: "Beirute, Baalbek e Vale do Bekaa",
    slug: "oriente-medio/libano",
    name: "Líbano Autoral",
    bestTime:
      "Abr–Jun e Set–Out (clima ameno, colheita de uvas no Bekaa em setembro). Jul–Ago é alto verão na costa; inverno abre a temporada de esqui no Monte Líbano.",
    tags: ["cultura", "gastronomia", "montanha", "fotografia", "festivais-folcloricos"],
    imageAiPrompt:
      "Ultra realistic editorial photo of the Roman Temple of Bacchus at Baalbek at golden hour, Bekaa Valley vineyards visible in the distance, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Líbano concentra num território minúsculo uma densidade histórica rara: templos romanos entre os mais bem preservados do mundo, vinícolas milenares no vale do Bekaa e uma Beirute que reconstrói sua identidade a cada geração sem nunca perder o apetite pela vida. A curadoria Create Travel percorre esse país de contrastes com anfitriões locais que conhecem cada camada da sua história recente.",
    highlights: [
      {
        title: "Baalbek, o maior complexo romano do Oriente",
        story:
          "As colunas do Templo de Júpiter, entre as maiores já erguidas pelo Império Romano, se impõem contra o céu do Bekaa. Ao entardecer, com o sítio quase vazio, a escala monumental impressiona mais do que qualquer fotografia consegue captar.",
      },
      {
        title: "Vinícolas centenárias do Vale do Bekaa",
        story:
          "Château Ksara e Château Musar guardam adegas escavadas em cavernas romanas, onde garrafas envelhecem entre as mesmas pedras usadas há dois mil anos. Uma degustação guiada revela por que a vinicultura libanesa é uma das mais antigas do planeta.",
      },
      {
        title: "Beirute entre ruínas e vida noturna",
        story:
          "Prédios perfurados por décadas de conflito dividem quarteirão com galerias de arte contemporânea e bares que só abrem depois da meia-noite. Um passeio a pé com historiador local decifra essa cidade que se reinventa sem apagar as cicatrizes.",
      },
      {
        title: "Gruta de Jeita",
        story:
          "Um rio subterrâneo navegável corta câmaras de estalactites que se formaram ao longo de milhões de anos, num dos sistemas de cavernas calcárias mais espetaculares do Oriente Médio.",
      },
      {
        title: "Vilarejos cristãos maronitas no Monte Líbano",
        story:
          "Bcharre e os cedros milenares que resistem no alto da montanha, mosteiros escavados na rocha do Vale Sagrado de Qadisha e a casa-museu do poeta Khalil Gibran compõem um dia de silêncio e altitude.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar em vinícola boutique com o enólogo",
        story:
          "Uma mesa privativa entre as parreiras do Bekaa, com o enólogo explicando como o terroir libanês resistiu a décadas de instabilidade regional.",
      },
      {
        title: "Trilha pelo Vale Sagrado de Qadisha",
        story:
          "Caminhada guiada entre mosteiros bizantinos escavados em penhascos, patrimônio da Unesco e um dos berços do cristianismo oriental.",
      },
      {
        title: "Noite de música dabke em vilarejo do Bekaa",
        story:
          "Um festival folclórico local, com dança tradicional em círculo e tambores, vivido entre famílias da região fora do circuito turístico convencional.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar no Líbano?", a: "De 5 a 7 noites cobrem Beirute, Baalbek, o Vale do Bekaa e o Monte Líbano com bom ritmo, incluindo degustações e trilhas." },
      { q: "Qual a melhor época para visitar o Líbano?", a: "Abril a junho e setembro a outubro têm o clima mais equilibrado. Setembro coincide com a colheita de uvas no Bekaa; o inverno abre a temporada de esqui no Monte Líbano." },
      { q: "Brasileiro precisa de visto para o Líbano?", a: "Sim, é necessário visto, que pode ser obtido na chegada em determinadas condições ou previamente. A curadoria Create Travel confirma as exigências vigentes conforme a data da viagem." },
      { q: "O Líbano é seguro para viajar atualmente?", a: "A situação regional exige acompanhamento constante. A curadoria Create Travel monitora o contexto e desenha o roteiro apenas quando as condições de segurança permitem uma viagem tranquila." },
      { q: "Vale combinar o Líbano com outros destinos da região?", a: "Sim, combinações naturais incluem Jordânia e Chipre, ambos com boa conexão aérea a partir de Beirute." },
      { q: "Como criar meu roteiro para o Líbano?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
];
