import { Destination } from "./types";

/**
 * Estados Unidos — destinos com curadoria Create Travel.
 * Mesmo padrão editorial do México: intro autoral, destaques sensoriais,
 * "além do óbvio", FAQs de intenção (formato citável por IA) e um roteiro autoral.
 * Nunca estimar preço: quando não há valor fechado, "Sob consulta".
 */
export const usaDestinations: Destination[] = [
  {
    id: "america-do-norte-estados-unidos-nova-york",
    continent: "América do Norte",
    country: "Estados Unidos",
    region: "Nova York",
    slug: "america-do-norte/estados-unidos/nova-york",
    name: "Nova York Autoral",
    bestTime:
      "Abr–Jun e Set–Nov (clima ameno, cidade em ritmo pleno). Dezembro para a temporada de luzes e ópera; outubro para a folhagem no Hudson Valley.",
    tags: ["cultura", "gastronomia", "fotografia", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Manhattan skyline seen from Brooklyn at blue hour, brownstone rooftops in foreground, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Nova York não se visita: se frequenta. A curadoria Create Travel troca a fila do observatório pela galeria que abre com hora marcada, pelo ensaio aberto no Lincoln Center e pela mesa que só existe para quem tem contato. Uma cidade de camadas, vivida no ritmo de quem já foi outras vezes — ou de quem quer estrear direito.",
    highlights: [
      {
        title: "Museus com curador privativo",
        story:
          "O Met antes da abertura ao público, os corredores ainda vazios, e um historiador da arte que conduz você por doze obras em vez de trezentas. Duas horas depois você entende o século XX de um jeito que nenhuma audioguia entregaria.",
      },
      {
        title: "Broadway e Lincoln Center com bons lugares",
        story:
          "Poltronas escolhidas — não as que sobraram. O silêncio antes da abertura da cortina, a orquestra afinando no fosso, e o instante em que a cidade inteira desaparece atrás do palco.",
      },
      {
        title: "Mesa em restaurantes de reserva impossível",
        story:
          "Aquele balcão de dez lugares que abre a agenda às 10h e esgota em noventa segundos. Você chega, dizem seu nome, e o chef manda o primeiro prato sem que você tenha pedido nada.",
      },
      {
        title: "Brooklyn e Harlem a pé, com quem mora ali",
        story:
          "Brownstones de arenito vermelho, uma igreja onde o gospel ainda é culto e não espetáculo, a padaria dominicana da esquina. Nova York deixa de ser cenário e vira bairro.",
      },
      {
        title: "Hudson Valley em outubro",
        story:
          "Uma hora e meia ao norte, os bordos incendeiam o vale. Storm King com esculturas monumentais no campo aberto, uma adega no caminho e o retorno com a silhueta de Manhattan surgindo ao anoitecer.",
      },
    ],
    beyondUsual: [
      {
        title: "Ateliês de artistas em Bushwick e Long Island City",
        story:
          "Visitas agendadas a estúdios que não abrem ao público, café com o artista e a chance de sair com uma obra.",
      },
      {
        title: "Jazz em clube de sócios no Village",
        story:
          "Sem fila, sem turista: uma sala pequena, som acústico e músicos que tocam para trinta pessoas.",
      },
      {
        title: "Compras com personal shopper e alfaiataria",
        story:
          "Um dia estruturado entre showrooms, vintage curado e ajustes sob medida entregues no hotel.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar em Nova York?", a: "De 5 a 7 noites. Cinco cobrem Manhattan com calma; sete permitem Brooklyn, Harlem e um dia no Hudson Valley sem correria." },
      { q: "Qual a melhor época para ir a Nova York?", a: "Abril a junho e setembro a novembro têm o melhor clima. Outubro soma a folhagem do Hudson Valley; dezembro traz a temporada de luzes, ópera e vitrines — com cidade cheia." },
      { q: "Brasileiro precisa de visto para os Estados Unidos?", a: "Sim, é necessário o visto americano B1/B2 válido e o passaporte com validade compatível. Orientamos o processo e o cronograma de agendamento, que pode ser longo — recomendamos iniciar com bastante antecedência." },
      { q: "Nova York é boa para viajar em família?", a: "Sim. Desenhamos roteiros com ritmo adequado a cada idade: museus com atividades, parques, um musical na Broadway e deslocamentos curtos, evitando o cansaço típico de quem tenta ver tudo." },
      { q: "Vale combinar Nova York com outros destinos?", a: "Combinações naturais: Washington D.C. e Boston de trem, Hudson Valley em bate-volta, ou uma segunda semana na Costa Oeste." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
    itineraries: [
      {
        title: "Nova York em Camadas — arte, mesa e bairros",
        duration: "7 dias / 6 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis:
          "Valor por pessoa em apartamento duplo, sem aéreo internacional. Cotação sob medida conforme datas e categoria de hotel.",
        summary:
          "A cidade vivida por dentro: museus com curador, bairros a pé com anfitriões locais, teatro com bons lugares e um dia de folhagem no Hudson Valley.",
        days: [
          { day: "Dia 1", location: "Nova York", description: "Chegada, transfer privativo e instalação em hotel-boutique no Village, Tribeca ou Upper East Side. Jantar de boas-vindas no bairro." },
          { day: "Dia 2", location: "Midtown & Central Park", description: "Met antes da abertura com historiador da arte, caminhada pelo Central Park e tarde livre. À noite, espetáculo na Broadway com lugares selecionados." },
          { day: "Dia 3", location: "Downtown", description: "High Line, Chelsea e suas galerias, Whitney Museum e o Memorial do 11 de Setembro com guia. Fim de tarde em Tribeca." },
          { day: "Dia 4", location: "Brooklyn", description: "Travessia a pé da Brooklyn Bridge, Dumbo, Williamsburg e ateliês em Bushwick com visita agendada. Jantar em mesa autoral do bairro." },
          { day: "Dia 5", location: "Hudson Valley", description: "Bate-volta privativo: Storm King Art Center, adega no vale e almoço de fazenda. Retorno ao anoitecer." },
          { day: "Dia 6", location: "Harlem & Uptown", description: "Harlem com anfitrião local, Cloisters e tarde livre para compras com personal shopper (opcional). Jazz à noite no Village." },
          { day: "Dia 7", location: "Nova York", description: "Manhã livre e transfer privativo para o aeroporto." },
        ],
        includes: [
          "6 noites em hotel-boutique selecionado",
          "Transfers privativos de chegada e saída",
          "Guias locais em português ou espanhol nas visitas previstas",
          "Visita ao Met fora do horário público com historiador da arte",
          "Bate-volta privativo ao Hudson Valley com almoço",
          "Reservas de restaurantes e ingressos de teatro coordenados pela curadoria",
          "Suporte Create Travel 24/7 durante a viagem",
        ],
        excludes: ["Aéreo internacional", "Refeições não mencionadas", "Ingressos de teatro", "Gorjetas e despesas pessoais", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-estados-unidos-parques-oeste",
    continent: "América do Norte",
    country: "Estados Unidos",
    region: "Oeste Americano",
    slug: "america-do-norte/estados-unidos/parques-nacionais-oeste",
    name: "Parques Nacionais do Oeste",
    bestTime:
      "Mai–Jun e Set–Out (temperaturas amenas, menos gente). Julho e agosto são altos e cheios; inverno fecha estradas em Yellowstone e no Grand Teton.",
    tags: ["roadtrip", "montanha", "fotografia", "deserto", "expedicao"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Grand Canyon south rim at sunrise with layered red rock and morning haze, cinematic natural light, no people.",
    imageOverrideUrl: "",
    intro:
      "O Oeste americano é uma sucessão de escalas impossíveis: cânions de dois bilhões de anos, gêiseres que respiram enxofre, arcos de arenito recortados pelo vento. A Create Travel desenha essa travessia com lodges dentro dos parques, guias-naturalistas e o luxo mais raro da região — estar no lugar certo na hora em que a luz acontece.",
    highlights: [
      {
        title: "Grand Canyon ao amanhecer",
        story:
          "Você chega no escuro. Aos poucos, camada por camada, dois bilhões de anos de rocha vão saindo da sombra em vermelho, ocre e violeta. Ninguém fala. Não há nada a dizer.",
      },
      {
        title: "Yellowstone com guia-naturalista",
        story:
          "No vale de Lamar, antes do sol, o guia monta a luneta e aponta: uma alcateia atravessa a planície gelada. Bisões soltando vapor pelas narinas, gêiseres estourando ao fundo. O continente antes de nós.",
      },
      {
        title: "Antelope Canyon e Horseshoe Bend",
        story:
          "Dentro do slot canyon, a luz desce como uma coluna sólida e as paredes de arenito parecem tecido em movimento. Guia navajo, horário calculado — a fotografia acontece sozinha.",
      },
      {
        title: "Zion e Bryce em dois climas",
        story:
          "De manhã, as paredes de Zion a mil metros sobre a trilha do rio. À tarde, o anfiteatro de hoodoos de Bryce, laranja incandescente, a dois mil e quatrocentos metros — casaco na mochila.",
      },
      {
        title: "Monument Valley com anfitrião navajo",
        story:
          "As mesas de arenito que criaram o imaginário do faroeste, atravessadas em veículo aberto por quem nasceu ali, com histórias de família e o silêncio absoluto do fim de tarde.",
      },
    ],
    beyondUsual: [
      {
        title: "Voo panorâmico sobre o Grand Canyon",
        story:
          "Helicóptero ou avião pequeno com portas removidas para fotografia, no horário de luz baixa.",
      },
      {
        title: "Céu escuro certificado",
        story:
          "Sessão de astrofotografia com astrônomo em um dos Dark Sky Parks do Utah — Via Láctea a olho nu sobre os arcos.",
      },
      {
        title: "Rafting de um dia no Colorado",
        story:
          "Trecho calmo a partir de Glen Canyon, com almoço em banco de areia e paredes de trezentos metros dos dois lados.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias para o roteiro dos parques do Oeste?", a: "De 12 a 14 dias para o circuito clássico Las Vegas–Zion–Bryce–Page–Monument Valley–Grand Canyon com respiro. Incluindo Yellowstone e Grand Teton, calcule 16 a 18 dias." },
      { q: "Qual a melhor época para visitar os parques nacionais americanos?", a: "Maio-junho e setembro-outubro: temperaturas amenas, menos multidão e estradas abertas. Julho e agosto têm calor extremo no deserto e lotação máxima. De novembro a abril, boa parte de Yellowstone e do Grand Teton fica inacessível por neve." },
      { q: "Precisa alugar carro ou é melhor com motorista?", a: "Desenhamos das duas formas. Self-drive com roteiro milimetrado e reservas garantidas é o mais comum; para quem prefere não dirigir, montamos com motorista-guia privativo — mais confortável e mais caro." },
      { q: "Dá para fazer com pais mais velhos ou ritmo tranquilo?", a: "Sim. Substituímos trilhas longas por mirantes acessíveis, voos panorâmicos e trechos curtos, com hospedagem dentro dos parques para reduzir deslocamento." },
      { q: "Vale ficar dentro dos parques?", a: "Vale muito, e é o principal diferencial do roteiro: dormir no rim do Grand Canyon ou dentro de Yellowstone dá acesso ao amanhecer e ao entardecer sem duas horas de estrada. Exige reserva com 9 a 12 meses de antecedência." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências." },
    ],
    itineraries: [
      {
        title: "Grande Circuito do Oeste — cânions, arcos e deserto",
        duration: "12 dias / 11 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis:
          "Valor por pessoa em apartamento duplo, sem aéreo internacional. Cotação sob medida conforme datas, categoria de hotel e modalidade (self-drive ou com motorista).",
        summary:
          "O circuito clássico do Sudoeste com hospedagem dentro dos parques, guias-naturalistas e horários calculados para a melhor luz.",
        days: [
          { day: "Dia 1", location: "Las Vegas", description: "Chegada, transfer e descanso. Briefing do roteiro e entrega do veículo (ou apresentação do motorista-guia)." },
          { day: "Dia 2", location: "Zion", description: "Estrada cênica até Springdale. Tarde no Zion Canyon com o shuttle do parque e caminhada do Riverside Walk." },
          { day: "Dia 3", location: "Zion", description: "Manhã de trilha escolhida conforme o ritmo do grupo — Emerald Pools ou Angels Landing (com permissão). Tarde livre." },
          { day: "Dia 4", location: "Bryce Canyon", description: "Sunrise Point ao amanhecer e trilha Navajo Loop entre os hoodoos. Noite de céu escuro com astrônomo." },
          { day: "Dia 5", location: "Capitol Reef & Escalante", description: "Scenic Byway 12, uma das estradas mais bonitas do país, com paradas fotográficas e almoço em rancho." },
          { day: "Dia 6", location: "Moab / Arches", description: "Delicate Arch no fim de tarde e Windows Section. Jantar em Moab." },
          { day: "Dia 7", location: "Canyonlands", description: "Island in the Sky ao amanhecer, Mesa Arch e Dead Horse Point. Tarde de rafting leve no Colorado (opcional)." },
          { day: "Dia 8", location: "Monument Valley", description: "Travessia até o Navajo Tribal Park com anfitrião navajo, tour em veículo aberto e pôr do sol nas mesas." },
          { day: "Dia 9", location: "Page", description: "Antelope Canyon com guia navajo no horário de melhor luz e Horseshoe Bend ao entardecer." },
          { day: "Dia 10", location: "Grand Canyon", description: "Chegada ao South Rim e instalação em lodge dentro do parque. Pôr do sol em Hopi Point." },
          { day: "Dia 11", location: "Grand Canyon", description: "Amanhecer no rim, trilha South Kaibab até Ooh Aah Point e voo panorâmico (opcional). Fim de tarde em Desert View." },
          { day: "Dia 12", location: "Las Vegas", description: "Retorno pela Route 66 e transfer para o aeroporto." },
        ],
        includes: [
          "11 noites em lodges e hotéis selecionados, incluindo pernoites dentro dos parques quando disponíveis",
          "Entradas de todos os parques nacionais previstos",
          "Tour em Monument Valley com anfitrião navajo",
          "Antelope Canyon com guia navajo em horário calculado",
          "Sessão de céu escuro com astrônomo em Bryce",
          "Roteiro dia a dia detalhado e assistência de estrada",
          "Suporte Create Travel 24/7 durante a viagem",
        ],
        excludes: ["Aéreo internacional e doméstico", "Locação de veículo ou motorista-guia (cotados à parte)", "Refeições não mencionadas", "Voo panorâmico e rafting", "Gorjetas e despesas pessoais", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-estados-unidos-california",
    continent: "América do Norte",
    country: "Estados Unidos",
    region: "Califórnia",
    slug: "america-do-norte/estados-unidos/california-costa-oeste",
    name: "Califórnia & Costa do Pacífico",
    bestTime:
      "Abr–Jun e Set–Out. Setembro e outubro são a temporada de colheita em Napa e Sonoma; julho traz neblina densa em San Francisco.",
    tags: ["roadtrip", "gastronomia", "praia", "fotografia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Big Sur coastline with Bixby Bridge at golden hour, Pacific fog rolling over cliffs, cinematic, no people.",
    imageOverrideUrl: "",
    intro:
      "Da neblina de San Francisco às sequoias de Yosemite, das vinhas de Napa aos penhascos de Big Sur: a Califórnia é a roadtrip que mais bem combina paisagem, mesa e conforto. A Create Travel desenha o percurso com hotéis pequenos, mesas com reserva garantida e o tempo certo em cada parada.",
    highlights: [
      {
        title: "Big Sur pela Highway 1",
        story:
          "O carro contorna a Bixby Bridge, o Pacífico bate trezentos metros abaixo e a neblina sobe pelo penhasco como se tivesse hora marcada. Você para no acostamento — todo mundo para — e simplesmente olha.",
      },
      {
        title: "Napa e Sonoma com enólogo",
        story:
          "Vinícolas familiares que não recebem sem indicação, barricas provadas direto no tonel, e um almoço de horta na varanda com o vale inteiro embaixo.",
      },
      {
        title: "Yosemite no vale",
        story:
          "Granito de novecentos metros em El Capitan, cachoeiras que caem do céu na primavera e o cheiro de pinheiro quente ao meio-dia. Ao anoitecer, Glacier Point e a última luz rosa sobre o Half Dome.",
      },
      {
        title: "Sequoias milenares",
        story:
          "Entrar numa floresta de sequoias é entrar numa catedral: silêncio abafado, luz filtrada em colunas e árvores que estavam de pé antes de Roma existir.",
      },
      {
        title: "San Francisco a pé e de barco",
        story:
          "Ferry até Sausalito com a Golden Gate se abrindo à direita, mercado do Ferry Building na manhã de sábado e o bonde subindo colina em Nob Hill.",
      },
    ],
    beyondUsual: [
      {
        title: "Cozinha do vale com chef",
        story:
          "Aula de mercado e almoço preparado a quatro mãos em uma fazenda de Sonoma.",
      },
      {
        title: "Observação de baleias em Monterey",
        story:
          "Saída em embarcação pequena com biólogo marinho no cânion submarino da baía.",
      },
      {
        title: "Balão ao amanhecer sobre Napa",
        story:
          "Decolagem no escuro, vinhedos surgindo em xadrez sob a névoa e brunch ao pousar.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias para uma roadtrip pela Califórnia?", a: "De 10 a 14 dias para San Francisco, Napa/Sonoma, Yosemite, Big Sur e Los Angeles com ritmo confortável. Em 7 dias, escolha entre norte (SF + vinhos + Yosemite) ou costa (SF a LA pela Highway 1)." },
      { q: "Qual a melhor época para a Califórnia?", a: "Abril a junho e setembro a outubro. Setembro e outubro coincidem com a colheita nos vales de Napa e Sonoma; julho e agosto trazem neblina persistente em San Francisco e alta lotação em Yosemite." },
      { q: "Vale a pena dirigir na Highway 1?", a: "Sim — é a espinha dorsal do roteiro. Programamos o trecho Monterey–Big Sur–San Simeon em um dia inteiro, sempre de norte para sul, para ficar no lado da estrada com vista para o mar." },
      { q: "Dá para combinar Califórnia com os parques do Oeste?", a: "Sim, é a combinação mais pedida: uma semana na Califórnia e outra no circuito de Las Vegas, Zion, Bryce e Grand Canyon, com voo interno entre as duas pontas." },
      { q: "É bom para lua de mel?", a: "Excelente: hotéis pequenos em Big Sur e Napa, jantares reservados, spa e balão ao amanhecer sobre os vinhedos." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências." },
    ],
    itineraries: [
      {
        title: "Califórnia Autoral — cidade, vinhos, granito e Pacífico",
        duration: "11 dias / 10 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis:
          "Valor por pessoa em apartamento duplo, sem aéreo internacional. Cotação sob medida conforme datas e categoria de hotel.",
        summary:
          "San Francisco, os vales do vinho, Yosemite e a descida pela Highway 1 até Santa Barbara, com mesas e vinícolas reservadas pela curadoria.",
        days: [
          { day: "Dia 1", location: "San Francisco", description: "Chegada, transfer privativo e instalação em hotel-boutique. Jantar no bairro." },
          { day: "Dia 2", location: "San Francisco", description: "Ferry Building, Golden Gate a pé ou de bicicleta, Presidio e ferry a Sausalito. Fim de tarde em Nob Hill." },
          { day: "Dia 3", location: "Sonoma", description: "Subida ao vale, duas vinícolas familiares com enólogo e almoço de horta. Noite em pousada no vale." },
          { day: "Dia 4", location: "Napa", description: "Balão ao amanhecer (opcional), prova em barricas e jantar em mesa autoral do vale." },
          { day: "Dia 5", location: "Yosemite", description: "Travessia até o parque, instalação em lodge e primeira caminhada no vale ao entardecer." },
          { day: "Dia 6", location: "Yosemite", description: "Trilha escolhida conforme ritmo, Mariposa Grove de sequoias e pôr do sol em Glacier Point." },
          { day: "Dia 7", location: "Monterey & Carmel", description: "Descida à costa, saída de observação de baleias com biólogo e noite em Carmel-by-the-Sea." },
          { day: "Dia 8", location: "Big Sur", description: "Highway 1 no sentido sul: Bixby Bridge, McWay Falls e mirantes. Noite em hotel de penhasco." },
          { day: "Dia 9", location: "Santa Barbara", description: "Hearst Castle no caminho, praia de elefantes-marinhos e chegada a Santa Barbara." },
          { day: "Dia 10", location: "Los Angeles", description: "Getty Center, Venice e Santa Monica com guia. Jantar de despedida." },
          { day: "Dia 11", location: "Los Angeles", description: "Manhã livre e transfer privativo para o aeroporto." },
        ],
        includes: [
          "10 noites em hotéis-boutique e lodges selecionados",
          "Transfers privativos de chegada e saída",
          "Visitas a vinícolas familiares com enólogo e almoço no vale",
          "Entrada e lodge no Parque Nacional de Yosemite",
          "Saída de observação de baleias em Monterey com biólogo",
          "Guias locais em português ou espanhol nas visitas previstas",
          "Suporte Create Travel 24/7 durante a viagem",
        ],
        excludes: ["Aéreo internacional e doméstico", "Locação de veículo", "Refeições não mencionadas", "Balão em Napa", "Gorjetas e despesas pessoais", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-estados-unidos-alasca",
    continent: "América do Norte",
    country: "Estados Unidos",
    region: "Alasca",
    slug: "america-do-norte/estados-unidos/alasca",
    name: "Alasca — Geleiras e Vida Selvagem",
    bestTime:
      "Jun–Set (dias longos, fauna ativa, estradas abertas). Ursos em julho e agosto; aurora boreal de setembro a março em Fairbanks.",
    tags: ["expedicao", "remoto", "conservacao", "fotografia", "montanha", "aurora"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a tidewater glacier calving into a fjord in Alaska with mist and mountains behind, cinematic natural light, no people.",
    imageOverrideUrl: "",
    intro:
      "Um estado maior que três Franças, com dezessete das vinte montanhas mais altas do país e geleiras que ainda desabam no mar. O Alasca é a última grande fronteira selvagem dos Estados Unidos — e a Create Travel desenha a viagem com lodges remotos, bush planes e guias-naturalistas que sabem exatamente onde estar.",
    highlights: [
      {
        title: "Geleira desabando no fiorde",
        story:
          "O barco desliga o motor a quinhentos metros da frente de gelo. Um estalo seco, depois um estrondo — e uma parede azul de sessenta metros cai no mar. A onda chega até o casco vinte segundos depois.",
      },
      {
        title: "Ursos-pardos pescando salmão",
        story:
          "Bush plane pousa na praia de maré, você caminha vinte minutos com o guia e senta na margem. A três dezenas de metros, um urso de quatrocentos quilos pesca com uma paciência de monge.",
      },
      {
        title: "Denali sem nuvem",
        story:
          "Só um terço dos visitantes vê a montanha inteira. Quando o céu abre, os seis mil e cento e noventa metros do Denali aparecem sobre a tundra vermelha do outono e ninguém no ônibus consegue falar.",
      },
      {
        title: "Kenai Fjords em embarcação pequena",
        story:
          "Orcas cruzando a proa, colônias de papagaios-do-mar nas falésias, leões-marinhos empilhados numa laje. Um dia inteiro no Golfo do Alasca com biólogo a bordo.",
      },
      {
        title: "Aurora boreal em Fairbanks",
        story:
          "Cabana aquecida, café na mão, o alarme do guia soando às duas da manhã. Lá fora, o céu inteiro em verde líquido sobre a floresta congelada.",
      },
    ],
    beyondUsual: [
      {
        title: "Pouso sobre geleira em bush plane",
        story:
          "Pouso com esquis no campo de gelo do Denali e caminhada curta sobre a geleira com guia de montanha.",
      },
      {
        title: "Lodge remoto sem estrada",
        story:
          "Três noites em um lodge acessível apenas por hidroavião, com pesca de salmão, caiaque e nenhum vizinho num raio de trinta quilômetros.",
      },
      {
        title: "Trem Alaska Railroad em vagão panorâmico",
        story:
          "Anchorage a Talkeetna em cúpula de vidro, com a cordilheira acompanhando a janela por horas.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar ao Alasca?", a: "Junho a setembro é a janela principal: dias de até vinte horas de luz, fauna ativa, estradas e lodges abertos. Julho e agosto concentram os ursos pescando salmão. Para aurora boreal, o período é de setembro a março, com base em Fairbanks." },
      { q: "Quantos dias ficar no Alasca?", a: "De 9 a 12 dias para combinar Anchorage, Kenai Fjords, Denali e um lodge remoto sem correria. Roteiros de 14 dias somam a região de Katmai ou a aurora em Fairbanks." },
      { q: "Cruzeiro ou viagem por terra no Alasca?", a: "O cruzeiro cobre bem a costa interior e as geleiras, mas mantém você a bordo. Nossos roteiros por terra, com lodges e bush planes, chegam onde o navio não vai — Denali, Katmai e os lodges de fiorde. Também desenhamos formatos combinados." },
      { q: "É seguro observar ursos de perto?", a: "Sim, nas áreas operadas com guias credenciados, plataformas e protocolos rígidos de distância. Trabalhamos apenas com operadores licenciados." },
      { q: "Precisa de preparo físico?", a: "Não para o roteiro padrão: as caminhadas são curtas e opcionais. Existem versões mais exigentes com trekking em geleira e travessias, desenhadas sob medida." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências." },
    ],
    itineraries: [
      {
        title: "Alasca Selvagem — fiordes, Denali e ursos",
        duration: "10 dias / 9 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis:
          "Valor por pessoa em apartamento duplo, sem aéreo internacional. Cotação sob medida conforme datas, lodges e voos internos.",
        summary:
          "Kenai Fjords, o Parque Nacional de Denali e um lodge remoto de observação de ursos, com trem panorâmico e bush plane.",
        days: [
          { day: "Dia 1", location: "Anchorage", description: "Chegada, transfer privativo e briefing da expedição." },
          { day: "Dia 2", location: "Seward", description: "Descida pela Seward Highway com paradas de fauna e chegada ao fiorde." },
          { day: "Dia 3", location: "Kenai Fjords", description: "Dia inteiro em embarcação pequena com biólogo: geleiras de maré, orcas, papagaios-do-mar e leões-marinhos." },
          { day: "Dia 4", location: "Talkeetna", description: "Retorno e trem panorâmico Alaska Railroad. Voo cênico sobre o Denali com pouso em geleira (opcional)." },
          { day: "Dia 5", location: "Denali", description: "Entrada no parque e safári em veículo do parque com naturalista: alces, caribus, ursos e a tundra." },
          { day: "Dia 6", location: "Denali", description: "Caminhada guiada na tundra, rafting no Nenana ou dia livre no lodge." },
          { day: "Dia 7", location: "Lodge remoto", description: "Voo de bush plane para lodge sem acesso por estrada. Tarde de caiaque ou pesca." },
          { day: "Dia 8", location: "Lodge remoto", description: "Dia inteiro de observação de ursos com guia credenciado em plataforma licenciada." },
          { day: "Dia 9", location: "Anchorage", description: "Retorno de bush plane, tarde livre e jantar de encerramento." },
          { day: "Dia 10", location: "Anchorage", description: "Transfer privativo para o aeroporto." },
        ],
        includes: [
          "9 noites entre hotéis, lodges de parque e lodge remoto",
          "Trem panorâmico Alaska Railroad em vagão cúpula",
          "Voos de bush plane de ida e volta ao lodge remoto",
          "Saída de dia inteiro em Kenai Fjords com biólogo",
          "Entradas e safári guiado no Parque Nacional de Denali",
          "Observação de ursos com guia credenciado",
          "Suporte Create Travel 24/7 durante a viagem",
        ],
        excludes: ["Aéreo internacional e doméstico", "Refeições não mencionadas", "Voo cênico com pouso em geleira", "Gorjetas e despesas pessoais", "Seguro viagem"],
      },
    ],
  },
  {
    id: "america-do-norte-estados-unidos-havai",
    continent: "América do Norte",
    country: "Estados Unidos",
    region: "Havaí",
    slug: "america-do-norte/estados-unidos/havai",
    name: "Havaí — Vulcões e Pacífico",
    bestTime:
      "Abr–Jun e Set–Nov (menos chuva, menos gente). Baleias-jubarte de dezembro a abril; ondas grandes no North Shore no inverno.",
    tags: ["praia", "mergulho", "montanha", "lua-de-mel", "bem-estar", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Na Pali coast cliffs in Kauai at golden hour seen from the sea, deep green ridges and Pacific swell, cinematic, no people.",
    imageOverrideUrl: "",
    intro:
      "Vulcões ativos, penhascos verticais cobertos de floresta, mantas gigantes à noite e uma cultura polinésia que sobreviveu inteira. O Havaí que a Create Travel desenha não é resort com pulseira: é ilha a ilha, com anfitriões havaianos, hotéis pequenos e experiências que dependem de conhecer quem opera de verdade.",
    highlights: [
      {
        title: "Costa Na Pali vista do mar",
        story:
          "Catamarã pequeno saindo antes do sol. As muralhas de Kauai se erguem seiscentos metros do Pacífico, riscadas por cachoeiras, e golfinhos-rotadores cruzam a proa como se fizessem parte do roteiro.",
      },
      {
        title: "Vulcões do Havaí à noite",
        story:
          "A cratera Halemaʻumaʻu pulsando vermelho no escuro, o cheiro de enxofre no vento e um guia-geólogo explicando que aquele chão tem menos de um século de idade.",
      },
      {
        title: "Mergulho noturno com mantas",
        story:
          "Luzes submersas atraem plâncton; o plâncton atrai mantas de quatro metros que giram a centímetros de você, em silêncio, por quarenta minutos. Uma das experiências marinhas mais intensas do planeta.",
      },
      {
        title: "Amanhecer no Haleakalā",
        story:
          "Três mil metros acima do mar, casaco pesado, o mar de nuvens abaixo. O sol nasce dentro de uma cratera lunar e os havaianos entoam um canto de manhã — é assim que se faz há séculos.",
      },
      {
        title: "Road to Hana com anfitrião local",
        story:
          "Seiscentas curvas, cinquenta e nove pontes, piscinas de água doce e um almoço de kalua pork numa casa de família. A estrada é o destino.",
      },
    ],
    beyondUsual: [
      {
        title: "Imersão cultural havaiana",
        story:
          "Tarde com uma família que ensina taro, canoa polinésia com balancim e a história oral das ilhas — sem show de luau turístico.",
      },
      {
        title: "Fazenda de café e cacau no Kona",
        story:
          "Colheita, torra e prova com o produtor nas encostas do Hualālai.",
      },
      {
        title: "Helicóptero de portas abertas em Kauai",
        story:
          "O único acesso ao interior do Monte Waiʻaleʻale e à cratera do Waimea — voo com fotógrafo a bordo.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantas ilhas visitar no Havaí?", a: "Duas em 10 dias, três em 14. A combinação mais equilibrada é Big Island (vulcões e mantas) com Kauai (natureza selvagem) ou Maui (praia, Haleakalā e Hana)." },
      { q: "Qual a melhor época para o Havaí?", a: "Abril a junho e setembro a novembro: menos chuva, menos gente e melhores tarifas. De dezembro a abril há baleias-jubarte em todas as ilhas e swell grande no North Shore de Oahu." },
      { q: "Qual ilha do Havaí escolher?", a: "Big Island para vulcões, mantas e diversidade de clima; Kauai para natureza dramática e casais; Maui para praia com boa infraestrutura e famílias; Oahu para cultura, história e surfe." },
      { q: "O Havaí é bom para lua de mel?", a: "É um dos destinos mais pedidos: hotéis pequenos com vista de oceano, jantar privativo na praia, helicóptero em Kauai e spa havaiano tradicional." },
      { q: "Brasileiro precisa de visto para o Havaí?", a: "Sim — o Havaí é território dos Estados Unidos, portanto vale o mesmo visto americano B1/B2. Orientamos o processo e o cronograma." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências." },
    ],
    itineraries: [
      {
        title: "Havaí em Duas Ilhas — vulcões, mantas e Na Pali",
        duration: "11 dias / 10 noites",
        pricePerPerson: "Sob consulta",
        currency: "USD",
        priceBasis:
          "Valor por pessoa em apartamento duplo, sem aéreo internacional. Cotação sob medida conforme datas e categoria de hotel.",
        summary:
          "Big Island e Kauai com curadoria: vulcões ativos, mergulho noturno com mantas, costa Na Pali pelo mar e imersão cultural havaiana.",
        days: [
          { day: "Dia 1", location: "Big Island (Kona)", description: "Chegada, transfer privativo e instalação na costa de Kona." },
          { day: "Dia 2", location: "Kona", description: "Fazenda de café e cacau com o produtor. À noite, mergulho ou snorkel com mantas." },
          { day: "Dia 3", location: "Vulcões", description: "Parque Nacional dos Vulcões com guia-geólogo: crateras, tubos de lava e o brilho noturno de Halemaʻumaʻu." },
          { day: "Dia 4", location: "Hamakua & Waipiʻo", description: "Costa verde ao norte, cachoeiras e o vale sagrado de Waipiʻo com anfitrião havaiano." },
          { day: "Dia 5", location: "Mauna Kea", description: "Pôr do sol acima das nuvens e observação astronômica com guia. Tarde livre na praia." },
          { day: "Dia 6", location: "Kauai", description: "Voo interinsular e instalação na costa sul ou norte. Tarde livre." },
          { day: "Dia 7", location: "Na Pali", description: "Catamarã pequeno ao amanhecer pela costa Na Pali, com snorkel e almoço a bordo." },
          { day: "Dia 8", location: "Waimea", description: "Cânion de Waimea e o mirante de Kalalau, com caminhada curta. Fim de tarde em Hanapepe." },
          { day: "Dia 9", location: "Kauai", description: "Helicóptero de portas abertas (opcional), praia e imersão cultural com família local." },
          { day: "Dia 10", location: "Kauai", description: "Dia livre de descanso, spa ou surfe com instrutor. Jantar de despedida." },
          { day: "Dia 11", location: "Kauai", description: "Transfer privativo para o aeroporto." },
        ],
        includes: [
          "10 noites em hotéis selecionados nas duas ilhas",
          "Transfers privativos de chegada e saída",
          "Parque Nacional dos Vulcões com guia-geólogo",
          "Mergulho ou snorkel noturno com mantas",
          "Catamarã pela costa Na Pali com almoço",
          "Imersão cultural com anfitriões havaianos",
          "Suporte Create Travel 24/7 durante a viagem",
        ],
        excludes: ["Aéreo internacional e interinsular", "Locação de veículo", "Refeições não mencionadas", "Helicóptero em Kauai", "Gorjetas e despesas pessoais", "Seguro viagem"],
      },
    ],
  },
];
