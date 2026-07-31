import { Destination } from "./types";

/**
 * México — destinos com curadoria Create Travel.
 * Cada destino traz um roteiro autoral (itinerário dia a dia) desenhado pela nossa curadoria.
 */
export const mexicoDestinations: Destination[] = [
  {
    id: "america-do-norte-mexico-cidade-do-mexico",
    continent: "América do Norte",
    country: "México",
    region: "México Central",
    slug: "america-do-norte/mexico/cidade-do-mexico",
    name: "Cidade do México & Xochimilco",
    bestTime: "Mar–Mai e Out–Nov (céu limpo, clima ameno). Final de outubro para o Dia de Muertos.",
    tags: ["cultura", "gastronomia", "fotografia", "festivais-folcloricos", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Mexico City rooftops at golden hour with colonial architecture and volcanoes on the horizon, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Uma das capitais culturais mais densas do planeta: pirâmides astecas sob o asfalto, murais de Rivera, mercados que são enciclopédias de sabor e uma cena gastronômica entre as melhores do mundo. A Create Travel desenha a CDMX em camadas — histórica, criativa e íntima.",
    highlights: [
      {
        title: "Teotihuacán ao amanhecer",
        story:
          "Você chega antes dos ônibus, quando a Calçada dos Mortos ainda está vazia e a névoa se desfaz devagar sobre a Pirâmide do Sol. O guia arqueólogo aponta os pigmentos vermelhos que sobreviveram mil e quinhentos anos — e por um instante a cidade inteira volta a respirar.",
      },
      {
        title: "Mercado de La Merced com chef local",
        story:
          "Pilhas de chiles secos com cheiro de fumaça doce, insetos crocantes, dezenas de moles em pasta escura. Você prova, pergunta, erra o nome — e a senhora do balcão ri e te serve mais. O mercado é a aula de história mexicana que nenhum museu consegue dar.",
      },
      {
        title: "Coyoacán e a Casa Azul de Frida",
        story:
          "Paredes azul-cobalto, o corpete pintado, a cama com espelho no teto. Sair dali e caminhar pelas ruas de pedra de Coyoacán com um sorvete de mamey na mão é entender por que tanta gente se apaixona por esta cidade em 48 horas.",
      },
      {
        title: "Trajineras em Xochimilco fora do circuito",
        story:
          "Uma trajinera privativa desliza pelos canais que os astecas cavaram, entre chinampas ainda cultivadas. Sem música alta: só o remo na água, um mariachi contratado por você em algum momento certo e o almoço servido a bordo por um produtor local.",
      },
      {
        title: "Cena gastronômica autoral",
        story:
          "Do taco de suadero na esquina à mesa do chef que reinterpreta o milho crioulo em dez texturas. Você percebe que 'comida mexicana' era, até então, uma caricatura — e volta para casa com o paladar reeducado.",
      },
    ],
    beyondUsual: [
      {
        title: "Ateliês de arte contemporânea em Roma e Juárez",
        story:
          "Visitas agendadas a estúdios de artistas e galerias que não abrem ao público — conversa, café e a chance de levar uma obra para casa.",
      },
      {
        title: "Lucha libre com curadoria",
        story:
          "Ingressos bem posicionados, máscara na mão e um anfitrião que traduz o teatro, o folclore e as piadas da arquibancada.",
      },
      {
        title: "Dia de Muertos vivido de dentro",
        story:
          "Altar montado com uma família, visita a um panteón iluminado por velas e a compreensão de que aqui a morte se celebra com flores e memória.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar na Cidade do México?", a: "De 4 a 5 noites para cobrir centro histórico, Coyoacán, Teotihuacán e a cena gastronômica com calma." },
      { q: "A altitude incomoda?", a: "A cidade está a 2.240 m. Recomendamos primeiro dia leve, boa hidratação e álcool moderado." },
      { q: "É seguro?", a: "Com bairros certos (Polanco, Roma, Condesa, Juárez), transporte privativo e guias credenciados, a experiência é tranquila." },
      { q: "Vale combinar com outros destinos?", a: "Sim: Oaxaca, Chiapas e Yucatán são as extensões naturais a partir da CDMX." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências." },
    ],
    itineraries: [
      {
        title: "México Essencial Autoral — CDMX, Puebla e Teotihuacán",
        duration: "6 dias / 5 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis: "Valor por pessoa em apartamento duplo, sem aéreo internacional. Cotação sob medida conforme datas e categoria de hotel.",
        summary:
          "Uma imersão na capital com curadoria de arte, mesa e arqueologia — mais um mergulho colonial em Puebla e Cholula.",
        days: [
          { day: "Dia 1", location: "Cidade do México", description: "Chegada, transfer privativo e instalação em hotel-boutique na Roma ou Polanco. Jantar de boas-vindas com cozinha mexicana contemporânea." },
          { day: "Dia 2", location: "Centro Histórico", description: "Zócalo, Templo Mayor, Palacio Nacional com os murais de Diego Rivera e almoço em cantina histórica. Tarde livre ou visita ao Museu Nacional de Antropologia." },
          { day: "Dia 3", location: "Teotihuacán", description: "Saída ao amanhecer para as pirâmides com guia arqueólogo, antes dos grupos. Retorno via Basílica de Guadalupe. Noite livre." },
          { day: "Dia 4", location: "Coyoacán & Xochimilco", description: "Casa Azul de Frida Kahlo, Museu Diego Rivera Anahuacalli e trajinera privativa em Xochimilco com almoço a bordo." },
          { day: "Dia 5", location: "Puebla & Cholula", description: "Bate-volta com guia: talavera, Capela do Rosário, Grande Pirâmide de Cholula e almoço de mole poblano em casa tradicional." },
          { day: "Dia 6", location: "Cidade do México", description: "Manhã livre para mercados e compras autorais. Transfer para o aeroporto." },
        ],
        includes: [
          "5 noites em hotel-boutique selecionado com café da manhã",
          "Todos os transfers privativos",
          "Guias locais credenciados em português ou espanhol",
          "Ingressos dos sítios e museus previstos",
          "Trajinera privativa em Xochimilco com almoço",
          "Suporte Create Travel 24/7 durante a viagem",
        ],
        excludes: ["Aéreo internacional", "Refeições não mencionadas", "Gorjetas e despesas pessoais", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-mexico-oaxaca",
    continent: "América do Norte",
    country: "México",
    region: "Oaxaca",
    slug: "america-do-norte/mexico/oaxaca",
    name: "Oaxaca & Vale de Tlacolula",
    bestTime: "Out–Abr (seco). Final de outubro para Dia de Muertos; julho para a Guelaguetza.",
    tags: ["gastronomia", "cultura", "festivais-folcloricos", "fotografia", "remoto"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Oaxaca colonial street with ochre walls, bougainvillea and Santo Domingo church at golden hour, cinematic, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O coração artesanal e gastronômico do México: sete moles, mezcal de fermentação selvagem, tapetes de Teotitlán tingidos com cochonilha e uma vida de praça que não se apressa. Oaxaca é o destino que transforma turistas em viajantes.",
    highlights: [
      {
        title: "Palenques de mezcal no vale",
        story:
          "O forno de pedra ainda solta fumaça, o cavalo gira a mó de tahona e o mestre mezcalero serve direto do alambique numa jícara. Você sente agave assado, terra molhada e fumaça — e entende que mezcal não é bebida, é território líquido.",
      },
      {
        title: "Monte Albán sobre o vale",
        story:
          "A cidade zapoteca aparece nivelada no topo de uma montanha, com o vale de Oaxaca aberto em 360°. O vento é constante, as escadarias íngremes, e o silêncio ali em cima é de outra ordem.",
      },
      {
        title: "Cozinha com uma cocinera tradicional",
        story:
          "Milho nixtamalizado moído no metate, chiles tostados no comal de barro, mole que leva quatro horas e trinta ingredientes. No fim você senta à mesa com a família — e a receita vira memória afetiva.",
      },
      {
        title: "Teotitlán del Valle e os tapetes",
        story:
          "A lã é fiada à mão, tingida com cochonilha viva, índigo e casca de romã. O tear range num ritmo antigo. Você escolhe um tapete sabendo exatamente quantas semanas de vida ele levou.",
      },
      {
        title: "Hierve el Agua",
        story:
          "Cascatas petrificadas suspensas sobre um vale infinito, com piscinas naturais mineralizadas na beirada. Chegar cedo é ter esse anfiteatro só para você e o nascer do sol.",
      },
    ],
    beyondUsual: [
      { title: "Mercado de Tlacolula no domingo", story: "O mercado indígena mais antigo em atividade nas Américas — trocas em zapoteco, barbacoa em forno de terra e nenhum roteiro turístico à vista." },
      { title: "Oficina de alebrijes em San Martín Tilcajete", story: "Talha em copal e pintura de padrões zapotecas com a família de artesãos, com peça sua feita à mão." },
      { title: "Costa de Oaxaca em extensão", story: "Puerto Escondido e Mazunte para fechar a viagem entre praia selvagem, tartarugas e pousadas de arquitetura de terra." },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias em Oaxaca?", a: "4 a 5 noites na cidade e vales; some 3 a 4 noites se incluir a costa (Puerto Escondido / Mazunte)." },
      { q: "Vale ir no Dia de Muertos?", a: "É a experiência mais intensa do ano — reservas precisam ser feitas com 8 a 10 meses de antecedência." },
      { q: "Como chegar?", a: "Voos domésticos de 1h a partir da Cidade do México até o aeroporto de Oaxaca (OAX)." },
      { q: "É bom para quem gosta de gastronomia?", a: "É um dos melhores destinos gastronômicos do mundo, entre cozinha tradicional e mezcalarias autorais." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." },
    ],
    itineraries: [
      {
        title: "Oaxaca Autoral — mole, mezcal e mãos que fazem",
        duration: "5 dias / 4 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis: "Valor por pessoa em apartamento duplo, sem aéreo. Extensão para a costa sob consulta.",
        summary: "Um roteiro de mesa, artesanato e arqueologia pelos vales centrais, com acesso a casas e ateliês que não recebem grupos.",
        days: [
          { day: "Dia 1", location: "Oaxaca de Juárez", description: "Chegada e instalação em hotel-boutique em casarão colonial. Caminhada ao entardecer por Santo Domingo e aperitivo de mezcal com curadoria." },
          { day: "Dia 2", location: "Monte Albán & centro", description: "Monte Albán com guia arqueólogo pela manhã. Tarde no Mercado 20 de Noviembre e no Jardín Etnobotánico." },
          { day: "Dia 3", location: "Vale de Tlacolula", description: "Teotitlán del Valle (tapetes), palenque de mezcal artesanal, árvore de Tule e Hierve el Agua ao fim da tarde." },
          { day: "Dia 4", location: "Cozinha & alebrijes", description: "Aula de cozinha tradicional com cocinera oaxaquenha (mole e tortillas no comal). Tarde em San Martín Tilcajete com mestres de alebrijes." },
          { day: "Dia 5", location: "Oaxaca", description: "Manhã livre para cafés e galerias. Transfer para o aeroporto ou início da extensão para a costa." },
        ],
        includes: [
          "4 noites em hotel-boutique com café da manhã",
          "Transfers e traslados privativos",
          "Guia local credenciado",
          "Aula de cozinha com almoço",
          "Degustação em palenque de mezcal",
          "Ingressos previstos e suporte 24/7",
        ],
        excludes: ["Aéreo", "Refeições não mencionadas", "Compras de artesanato", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-mexico-yucatan",
    continent: "América do Norte",
    country: "México",
    region: "Yucatán",
    slug: "america-do-norte/mexico/yucatan-merida",
    name: "Yucatán, Mérida & Cenotes",
    bestTime: "Nov–Abr (seco e ameno). Mar/Set para o fenômeno da serpente em Chichén Itzá.",
    tags: ["cultura", "mergulho", "gastronomia", "familia", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a Yucatan cenote with turquoise water, hanging roots and a shaft of sunlight, cinematic, no people.",
    imageOverrideUrl: "",
    intro:
      "O mundo maia vivo: haciendas henequeneras restauradas, cidades brancas, cenotes de água impossível e uma cozinha yucateca com camadas maias, espanholas e libanesas. Yucatán é história com temperatura de férias.",
    highlights: [
      {
        title: "Uxmal e a Rota Puuc sem multidão",
        story:
          "A Pirâmide do Adivinho tem curvas arredondadas que nenhuma outra ruína maia tem. Ao fim da tarde, com poucos visitantes, você escuta iguanas correndo entre as pedras e o som do vento entre as fachadas cheias de máscaras de Chaac.",
      },
      {
        title: "Cenotes privativos em hacienda",
        story:
          "Você desce degraus de pedra até uma câmara subterrânea onde raízes descem 15 metros do teto e um facho de luz atravessa a água azul. O eco do primeiro mergulho é a coisa mais bonita que você vai ouvir na viagem.",
      },
      {
        title: "Mérida e a Paseo de Montejo",
        story:
          "Mansões da era do henequém, sorveteria de estilo francês, música na praça ao anoitecer. Mérida tem o ritmo de uma cidade que já foi riquíssima e hoje escolheu ser gostosa de viver.",
      },
      {
        title: "Cozinha yucateca de raiz",
        story:
          "Cochinita pibil assada em forno de terra, recado negro, sopa de lima, habanero cortado na hora. É o sabor mais distinto de todo o México — defumado, ácido e antigo.",
      },
      {
        title: "Flamingos de Río Lagartos e Las Coloradas",
        story:
          "Um barco atravessa o manguezal e, de repente, mil flamingos rosados levantam voo ao mesmo tempo sobre lagoas cor-de-rosa. Parece manipulação de imagem, mas é só a natureza exagerando.",
      },
    ],
    beyondUsual: [
      { title: "Noite em hacienda restaurada", story: "Dormir em uma antiga fazenda de henequém com piscina no pátio, jantar servido sob arcos do século XVIII e silêncio absoluto." },
      { title: "Chichén Itzá na primeira hora", story: "Acesso logo na abertura, com guia maia falante da língua, antes que os ônibus de Cancún cheguem." },
      { title: "Cozinha maia em vila", story: "Preparo de pibil em forno de terra com uma família de Yaxunah e conversa sobre milho, calendário e memória." },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias no Yucatán?", a: "5 a 6 noites entre Mérida, Rota Puuc, cenotes e Chichén Itzá; 8 a 10 se combinar com a Riviera Maya." },
      { q: "Dá para combinar com praia?", a: "Sim — Tulum, Holbox ou Isla Mujeres fecham muito bem a viagem." },
      { q: "É bom para famílias?", a: "Excelente: cenotes, ruínas e distâncias curtas de carro em estradas boas." },
      { q: "Preciso alugar carro?", a: "Trabalhamos com transfers privativos e guias; carro é opcional para quem quer autonomia." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." },
    ],
    itineraries: [
      {
        title: "Mundo Maia Autoral — Mérida, Puuc, cenotes e Chichén Itzá",
        duration: "7 dias / 6 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis: "Valor por pessoa em apartamento duplo, sem aéreo. Inclui 2 noites em hacienda histórica.",
        summary: "Arqueologia maia com guias especializados, cenotes fora do circuito e mesa yucateca — dormindo entre casarões de Mérida e haciendas restauradas.",
        days: [
          { day: "Dia 1", location: "Mérida", description: "Chegada e instalação em hotel-boutique no centro. Caminhada ao entardecer pela Plaza Grande e jantar yucateco autoral." },
          { day: "Dia 2", location: "Mérida", description: "City tour histórico, Paseo de Montejo, Gran Museo del Mundo Maya e tarde livre em mercados e galerias." },
          { day: "Dia 3", location: "Rota Puuc", description: "Uxmal com guia arqueólogo, Kabah e Santa Elena. Noite em hacienda henequenera restaurada." },
          { day: "Dia 4", location: "Cenotes & vilas maias", description: "Cenotes privativos de hacienda, almoço maia preparado em forno de terra numa comunidade e tarde de descanso na fazenda." },
          { day: "Dia 5", location: "Río Lagartos & Las Coloradas", description: "Passeio de barco pelo manguezal para observação de flamingos e lagoas rosadas. Retorno para Valladolid." },
          { day: "Dia 6", location: "Chichén Itzá & Valladolid", description: "Chichén Itzá logo na abertura com guia maia. Tarde em Valladolid: convento, cenote urbano e cozinha local." },
          { day: "Dia 7", location: "Saída", description: "Transfer para Mérida ou Cancún, ou início da extensão de praia em Tulum / Holbox." },
        ],
        includes: [
          "6 noites entre hotel-boutique e hacienda histórica com café da manhã",
          "Transporte privativo com motorista durante todo o roteiro",
          "Guias arqueólogos credenciados",
          "Ingressos de Uxmal, Kabah, Chichén Itzá e cenotes",
          "Almoço maia comunitário e passeio de barco em Río Lagartos",
          "Suporte Create Travel 24/7",
        ],
        excludes: ["Aéreo", "Refeições não mencionadas", "Gorjetas", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-mexico-riviera-maya",
    continent: "América do Norte",
    country: "México",
    region: "Riviera Maya",
    slug: "america-do-norte/mexico/riviera-maya-tulum",
    name: "Riviera Maya, Tulum & Sian Ka'an",
    bestTime: "Nov–Abr (seco). Jun–Set para tubarões-baleia em Isla Mujeres/Holbox.",
    tags: ["praia", "mergulho", "lua-de-mel", "bem-estar", "conservacao"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a wild Caribbean beach in Tulum with turquoise water, palms and dunes at sunrise, cinematic, no people.",
    imageOverrideUrl: "",
    intro:
      "O Caribe mexicano em sua versão curada: reserva da biosfera de Sian Ka'an, cenotes de água doce a minutos do mar, ruínas maias sobre a falésia e hotéis pequenos de arquitetura autoral. Sem pulseirinha, sem multidão.",
    highlights: [
      {
        title: "Tulum arqueológico ao nascer do sol",
        story:
          "O único sítio maia construído de frente para o mar. Na primeira luz, o azul do Caribe atrás do Castillo é tão irreal que dá vontade de ficar em silêncio até o sol subir de vez.",
      },
      {
        title: "Sian Ka'an — 'onde nasce o céu'",
        story:
          "Barco por canais que os maias abriram há mil anos, boia na correnteza morna entre manguezais, golfinhos ao longe e nenhuma construção no horizonte. Patrimônio da UNESCO com acesso controlado.",
      },
      {
        title: "Mergulho em cenotes",
        story:
          "Descer numa caverna inundada com visibilidade de 60 metros, atravessar a haloclina onde água doce e salgada se encontram e ver a luz entrar como vitral. Não há mergulho parecido em nenhum outro lugar.",
      },
      {
        title: "Segunda maior barreira de corais do mundo",
        story:
          "Snorkel em Puerto Morelos ou Cozumel entre tartarugas, arraias e paredes de coral. Passeios com operadores que respeitam limites de grupo e não tocam nada.",
      },
      {
        title: "Holbox e o tubarão-baleia",
        story:
          "Nadar ao lado de um animal de 10 metros que se alimenta de plâncton e te ignora completamente. A ilha, sem carros, devolve o resto do dia em ritmo de rede e pé descalço.",
      },
    ],
    beyondUsual: [
      { title: "Temazcal cerimonial", story: "Ritual de vapor conduzido por guardião da tradição, com cantos, ervas e uma saída ao ar livre que reinicia o corpo inteiro." },
      { title: "Cenote privativo ao entardecer", story: "Acesso exclusivo a um cenote em propriedade particular, com mesa montada à beira da água." },
      { title: "Projetos de conservação de tartarugas", story: "Acompanhamento de desova ou soltura em Xcacel com biólogos, na temporada (mai–out)." },
    ],
    stays: [],
    faq: [
      { q: "Tulum ou Riviera Maya?", a: "Tulum entrega design e natureza; Playa del Carmen e Puerto Morelos entregam conforto e logística. Costumamos combinar." },
      { q: "Quantos dias?", a: "5 a 7 noites de praia, ideais como extensão de Yucatán ou Cidade do México." },
      { q: "É bom para lua de mel?", a: "Sim — trabalhamos com hotéis pequenos e adults-only de arquitetura autoral, longe dos megarresorts." },
      { q: "E as algas sargaço?", a: "Ocorrem principalmente entre abril e agosto. Escolhemos praias e datas com menor incidência e temos plano B com cenotes e ilhas." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." },
    ],
    itineraries: [
      {
        title: "Caribe Maia Autoral — Tulum, cenotes e Sian Ka'an",
        duration: "6 dias / 5 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis: "Valor por pessoa em apartamento duplo, sem aéreo. Hotéis boutique pé na areia.",
        summary: "Praia selvagem, mergulho em caverna e reserva da biosfera — um roteiro de natureza e design, sem resorts de massa.",
        days: [
          { day: "Dia 1", location: "Cancún → Tulum", description: "Recepção no aeroporto e transfer privativo (1h30) até hotel-boutique na zona hoteleira de Tulum. Fim de tarde livre na praia." },
          { day: "Dia 2", location: "Tulum", description: "Sítio arqueológico de Tulum na abertura com guia. Tarde em cenote privativo e jantar autoral na selva." },
          { day: "Dia 3", location: "Sian Ka'an", description: "Dia inteiro na reserva da biosfera: barco pelos canais maias, flutuação na correnteza e almoço em Muyil com biólogo local." },
          { day: "Dia 4", location: "Cenotes & recife", description: "Mergulho ou snorkel guiado em cenote (Dos Ojos ou Casa Cenote) pela manhã e recife de Puerto Morelos à tarde." },
          { day: "Dia 5", location: "Tulum / Cobá", description: "Cobá e sua selva de estradas maias pela manhã, ou dia livre de praia e spa. Temazcal cerimonial ao entardecer." },
          { day: "Dia 6", location: "Saída", description: "Manhã livre e transfer para o aeroporto de Cancún — ou extensão para Holbox e Isla Mujeres." },
        ],
        includes: [
          "5 noites em hotel-boutique selecionado com café da manhã",
          "Transfers privativos aeroporto–hotel–aeroporto",
          "Passeio completo em Sian Ka'an com biólogo",
          "Cenote privativo e ingressos previstos",
          "Guia credenciado nas visitas arqueológicas",
          "Suporte Create Travel 24/7",
        ],
        excludes: ["Aéreo", "Refeições não mencionadas", "Cursos e cilindros de mergulho", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-mexico-chiapas",
    continent: "América do Norte",
    country: "México",
    region: "Chiapas",
    slug: "america-do-norte/mexico/chiapas-san-cristobal",
    name: "Chiapas, San Cristóbal & Palenque",
    bestTime: "Nov–Abr (seco). Verde intenso e cachoeiras cheias entre Jun–Out.",
    tags: ["cultura", "trekking", "remoto", "fotografia", "conservacao"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Palenque Maya ruins emerging from misty jungle at dawn, cinematic natural light, no people.",
    imageOverrideUrl: "",
    intro:
      "O México mais indígena e mais verde: pinheiros de altitude, aldeias tzotziles com liturgia própria, cânions de 1.000 metros e ruínas maias engolidas pela selva. Chiapas exige respeito — e devolve profundidade.",
    highlights: [
      {
        title: "Palenque na névoa da manhã",
        story:
          "Os bugios rugem antes do sol nascer e o Templo das Inscrições aparece entre a neblina como se estivesse sendo revelado pela primeira vez. A selva encosta nas pedras. É a ruína maia mais cinematográfica que existe.",
      },
      {
        title: "San Juan Chamula",
        story:
          "Dentro da igreja não há bancos: agulhas de pinho no chão, milhares de velas, cantos em tzotzil, refrigerante e posh como oferendas. Uma cosmovisão inteira acontecendo diante de você — sem fotos, com silêncio.",
      },
      {
        title: "Cañón del Sumidero",
        story:
          "Paredes de mil metros subindo à sua direita e à esquerda enquanto a lancha avança pelo Grijalva. Crocodilos nas margens, urubus-rei planando lá em cima e a sensação de estar num corredor geológico.",
      },
      {
        title: "Cascadas de Agua Azul e Misol-Há",
        story:
          "Água turquesa em degraus de travertino e uma cachoeira de 35 metros que você atravessa por trás, na parede úmida, com a luz filtrada pela cortina d'água.",
      },
      {
        title: "Selva Lacandona e Yaxchilán",
        story:
          "Lancha pelo rio Usumacinta até um sítio maia acessível só pela água, na fronteira com a Guatemala. Máscaras de morcego na entrada, templos vazios e macacos no dossel.",
      },
    ],
    beyondUsual: [
      { title: "Cooperativas têxteis tzotziles", story: "Tear de cintura, tinturas naturais e conversa com tecelãs sobre os símbolos que cada peça carrega." },
      { title: "Cacau e café de origem", story: "Visita a produtores chiapanecos de café de altitude e cacau criollo, com prova guiada." },
      { title: "Comunidade lacandona", story: "Encontro com famílias lacandonas na selva, com caminhada botânica e narrativa oral sobre a floresta." },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias em Chiapas?", a: "5 a 6 noites entre San Cristóbal, Sumidero, Palenque e cachoeiras." },
      { q: "Como chegar?", a: "Voos para Tuxtla Gutiérrez (TGZ) ou Palenque (PQM) a partir da Cidade do México." },
      { q: "As estradas são longas?", a: "Sim, alguns trechos passam de 5h. Montamos o roteiro com pernoites bem distribuídos e veículo privativo confortável." },
      { q: "Preciso de preparo físico?", a: "Não — caminhadas leves a moderadas. Palenque e Yaxchilán têm escadarias." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." },
    ],
    itineraries: [
      {
        title: "Chiapas Autoral — altiplano tzotzil e selva maia",
        duration: "7 dias / 6 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis: "Valor por pessoa em apartamento duplo, sem aéreo. Veículo e guia privativos durante todo o percurso.",
        summary: "Da altitude fria de San Cristóbal à selva quente de Palenque, com encontros comunitários éticos e arqueologia guiada.",
        days: [
          { day: "Dia 1", location: "Tuxtla → San Cristóbal de las Casas", description: "Chegada, transfer cênico pelo altiplano e instalação em hotel-boutique colonial. Caminhada ao entardecer pelo centro." },
          { day: "Dia 2", location: "Chamula & Zinacantán", description: "Visita às aldeias tzotziles com guia da própria comunidade, cooperativas têxteis e almoço em casa local." },
          { day: "Dia 3", location: "Cañón del Sumidero", description: "Navegação pelo cânion e visita a Chiapa de Corzo. Tarde livre em San Cristóbal com café de origem e museus." },
          { day: "Dia 4", location: "San Cristóbal → Palenque", description: "Travessia com paradas em Agua Azul e Misol-Há. Chegada à selva e noite em lodge próximo às ruínas." },
          { day: "Dia 5", location: "Palenque", description: "Sítio arqueológico na abertura com guia arqueólogo, museu de sítio e trilha pelo grupo norte. Tarde livre." },
          { day: "Dia 6", location: "Yaxchilán & Bonampak", description: "Dia inteiro: lancha pelo Usumacinta até Yaxchilán e os murais de Bonampak, com almoço em comunidade lacandona." },
          { day: "Dia 7", location: "Saída", description: "Transfer para o aeroporto de Palenque ou Villahermosa — ou conexão para Yucatán." },
        ],
        includes: [
          "6 noites entre hotel-boutique colonial e lodge de selva com café da manhã",
          "Veículo privativo com motorista e guia acompanhante",
          "Guia arqueólogo em Palenque, Yaxchilán e Bonampak",
          "Navegações no Sumidero e no Usumacinta",
          "Visitas comunitárias com remuneração direta às famílias",
          "Suporte Create Travel 24/7",
        ],
        excludes: ["Aéreo", "Refeições não mencionadas", "Gorjetas", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-mexico-baja-california-sur",
    continent: "América do Norte",
    country: "México",
    region: "Baja California Sur",
    slug: "america-do-norte/mexico/baja-california-sur",
    name: "Baja California Sur & Mar de Cortez",
    bestTime: "Jan–Mar para baleias-cinzentas e jubartes; Out–Nov para mar calmo e tubarão-baleia.",
    tags: ["mergulho", "conservacao", "deserto", "expedicao", "lua-de-mel"],
    imageAiPrompt:
      "Ultra realistic editorial photo of the Sea of Cortez with desert mountains meeting turquoise water and a lone boat, cinematic golden light, no people.",
    imageOverrideUrl: "",
    intro:
      "O 'aquário do mundo', como Cousteau chamou o Mar de Cortez: deserto de cactos caindo direto no azul, ilhas desabitadas, leões-marinhos curiosos e baleias que se aproximam por vontade própria. Baja é expedição com conforto.",
    highlights: [
      {
        title: "Baleias-cinzentas em San Ignacio",
        story:
          "Uma fêmea de 14 metros encosta o focinho na borda do bote e empurra o filhote para perto de você. Ela escolheu esse contato. Você estende a mão e toca uma pele quente, elástica, viva — e chora sem perceber.",
      },
      {
        title: "Espíritu Santo e os leões-marinhos",
        story:
          "Filhotes giram ao seu redor no snorkel, mordiscam a nadadeira, sobem para respirar e voltam. A ilha, atrás, é pura rocha vermelha sobre água turquesa — Patrimônio da UNESCO sem uma única construção.",
      },
      {
        title: "Todos Santos e o deserto florido",
        story:
          "Um pueblo mágico entre cactos e ondas grossas, com galerias, cafés de torra própria e um pôr do sol que incendeia toda a serra da Laguna.",
      },
      {
        title: "Arco de Cabo San Lucas ao amanhecer",
        story:
          "A ponta da península onde o Pacífico encontra o Cortez. Ir cedo, de lancha privativa, é ver a formação sem outra embarcação por perto e com leões-marinhos ainda sonolentos nas pedras.",
      },
      {
        title: "Tubarão-baleia em La Paz",
        story:
          "Nadar ao lado do maior peixe do mar, num programa com número limitado de pessoas na água e biólogo a bordo. Um gigante manso passando devagar a um metro de você.",
      },
    ],
    beyondUsual: [
      { title: "Acampamento de luxo em Espíritu Santo", story: "Tendas montadas em praia isolada, jantar de frutos do mar na areia e Via Láctea inteira sobre o Mar de Cortez." },
      { title: "Vinhas do Valle de Guadalupe", story: "Extensão pelo norte da península para a região vinícola mexicana, com almoços de campo entre vinhedos." },
      { title: "Pesca esportiva sustentável", story: "Saídas de catch-and-release com capitães locais e briefing de conservação." },
    ],
    stays: [],
    faq: [
      { q: "Quando ver baleias?", a: "Cinzentas em San Ignacio e Magdalena de janeiro a março; jubartes e azuis no Cortez entre janeiro e abril." },
      { q: "Quantos dias?", a: "6 a 8 noites para combinar La Paz, Espíritu Santo, Todos Santos e um lado de baleias." },
      { q: "Como chegar?", a: "Voos para Los Cabos (SJD) ou La Paz (LAP), com conexões via Cidade do México ou EUA." },
      { q: "Serve para lua de mel?", a: "Sim — hotéis de design em Todos Santos e East Cape combinam natureza e privacidade." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." },
    ],
    itineraries: [
      {
        title: "Mar de Cortez Autoral — baleias, ilhas e deserto",
        duration: "8 dias / 7 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis: "Valor por pessoa em apartamento duplo, sem aéreo. Temporada de baleias com disponibilidade limitada.",
        summary: "Expedição marinha com biólogos entre La Paz, Espíritu Santo e a laguna de San Ignacio, fechando no design desértico de Todos Santos.",
        days: [
          { day: "Dia 1", location: "La Paz", description: "Chegada, transfer privativo e instalação em hotel à beira do malecón. Jantar de frutos do mar do Cortez." },
          { day: "Dia 2", location: "Ilha Espíritu Santo", description: "Dia inteiro de navegação privativa: snorkel com leões-marinhos, praias desertas e almoço a bordo." },
          { day: "Dia 3", location: "La Paz", description: "Snorkel com tubarão-baleia (temporada) ou observação de raias-mobula. Tarde livre no centro histórico." },
          { day: "Dia 4", location: "Laguna San Ignacio", description: "Voo charter ou traslado até a laguna. Instalação em eco-camp à beira d'água e primeira saída de observação de baleias-cinzentas." },
          { day: "Dia 5", location: "Laguna San Ignacio", description: "Duas saídas de bote com biólogo, caminhada nas dunas e noite estrelada no deserto." },
          { day: "Dia 6", location: "Todos Santos", description: "Retorno e transfer para Todos Santos. Galerias, cafés e pôr do sol na praia de Cerritos." },
          { day: "Dia 7", location: "Todos Santos / East Cape", description: "Dia livre de bem-estar, surfe ou passeio pela Sierra de la Laguna com guia naturalista." },
          { day: "Dia 8", location: "Saída", description: "Transfer para o aeroporto de Los Cabos (SJD)." },
        ],
        includes: [
          "7 noites entre hotéis de design e eco-camp na laguna",
          "Navegação privativa em Espíritu Santo com almoço",
          "Saídas de observação de baleias com biólogo",
          "Transfers privativos e taxas de áreas protegidas",
          "Guias naturalistas credenciados",
          "Suporte Create Travel 24/7",
        ],
        excludes: ["Aéreo", "Voo charter até San Ignacio (opcional)", "Refeições não mencionadas", "Seguro viagem"],
      },
    ],
  },
];
