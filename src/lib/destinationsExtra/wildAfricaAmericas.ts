import { Destination } from "../types";

/**
 * África, Ártico e Américas — lacunas de portfólio identificadas em benchmark
 * com operadores internacionais de viagem autoral (expedição, festivais e trekking).
 */
export const wildAfricaAmericasDestinations: Destination[] = [
  {
    id: "africa-etiopia-omo-lalibela",
    continent: "África",
    country: "Etiópia",
    region: "Vale do Omo, Lalibela e Danakil",
    slug: "africa/etiopia/omo-lalibela",
    name: "Etiópia — Lalibela, Vale do Omo e a depressão de Danakil",
    bestTime:
      "Out–Mar, com estradas secas. Janeiro traz o Timkat, a maior celebração ortodoxa do país; setembro tem o Meskel e as planícies floridas.",
    tags: ["cultura", "remoto", "festivais-folcloricos", "fotografia", "expedicao", "deserto"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of the rock-hewn church of Bete Giyorgis in Lalibela, Ethiopia, cross-shaped monolithic church carved down into red volcanic rock, white-robed pilgrims at a distance, warm morning light, editorial style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Etiópia nunca foi colonizada, tem alfabeto próprio, calendário próprio e uma igreja cristã de mil e setecentos anos que talhou catedrais inteiras para dentro da rocha. É a África que quase ninguém imagina: planaltos frios a três mil metros, mosteiros em ilhas do lago Tana, um deserto de sal onde a terra ferve em amarelo-enxofre e, no sul, o Vale do Omo, com povos que mantêm formas de vida anteriores a qualquer Estado. Viagem para quem já viu muito e quer ser surpreendido de novo.",
    highlights: [
      {
        title: "Igrejas monolíticas de Lalibela",
        story:
          "Onze templos escavados de cima para baixo no basalto vermelho no século XII. Na missa das cinco da manhã, sacerdotes de branco cantam em ge'ez à luz de velas, e a rocha devolve o som como um instrumento.",
      },
      {
        title: "Montanhas Simien",
        story:
          "Escarpas de quatro mil metros, babuínos-gelada em bandos de centenas e trilhas na borda do abismo. Um dos trekkings mais cênicos do continente africano.",
      },
      {
        title: "Vale do Omo",
        story:
          "Mursi, Hamer, Karo e Dassanech vivem no baixo Omo com estéticas corporais próprias. Visitamos com antropólogos e protocolos éticos claros — sem fotografia extrativa, com acordos justos e tempo de convivência real.",
      },
      {
        title: "Depressão de Danakil",
        story:
          "Cem metros abaixo do nível do mar, um dos lugares mais quentes da Terra: fontes ácidas amarelas e verdes em Dallol, caravanas de camelos carregando sal e o lago de lava permanente do Erta Ale.",
      },
    ],
    beyondUsual: [
      {
        title: "Timkat em Gondar",
        story:
          "Em janeiro, milhares de fiéis mergulham na piscina do banho de Fasilidas em uma renovação coletiva de batismo. Um dos grandes espetáculos religiosos do mundo.",
      },
      {
        title: "Harar e a cidade amuralhada",
        story:
          "Oitenta e duas mesquitas dentro de muralhas do século XVI, mercados de café e o homem que alimenta hienas selvagens à mão todas as noites.",
      },
      {
        title: "Café de origem em Yirgacheffe",
        story:
          "Visita às fazendas onde nasceu o café arábica, com cerimônia tradicional em casas de agricultores.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar à Etiópia?", a: "De outubro a março, na estação seca. Janeiro concentra o Timkat, em Gondar e Lalibela, e setembro traz o Meskel e o verde após as chuvas." },
      { q: "A Etiópia é segura para turistas?", a: "O circuito histórico do norte e o sul do Vale do Omo operam normalmente com apoio local. Algumas regiões têm restrições de acesso e monitoramos a situação continuamente antes e durante cada viagem." },
      { q: "É preciso preparo físico?", a: "Não para o circuito histórico, feito com voos internos e caminhadas curtas — embora Lalibela exija subir e descer escadas em rocha. Simien e Erta Ale pedem condicionamento e tolerância a calor extremo." },
      { q: "Como visitar o Vale do Omo de forma ética?", a: "Trabalhamos com guias antropólogos, acordos financeiros transparentes com as aldeias, permanência mais longa em menos comunidades e nenhuma fotografia sem consentimento." },
      { q: "Quanto custa uma viagem à Etiópia?", a: "Depende dos voos internos, do uso de 4x4 no Omo e no Danakil e da hospedagem. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro na Etiópia?", a: "Clique em Criar roteiro sob medida e conte se busca o norte histórico, o sul étnico ou os dois." },
    ],
  },
  {
    id: "africa-gana-togo-benim",
    continent: "África",
    country: "Gana, Togo e Benim",
    region: "Golfo da Guiné, costa dos escravos e terras vodum",
    slug: "africa/gana-togo-benim",
    name: "Gana, Togo e Benim — raízes, vodum e a Rota do Atlântico",
    bestTime:
      "Nov–Mar, na estação seca. O dia 10 de janeiro reúne o Festival Nacional do Vodum em Ouidah, no Benim.",
    tags: ["cultura", "festivais-folcloricos", "remoto", "fotografia", "gastronomia"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of a vodun ceremony in Benin, dancers in layered raffia and bright fabric costumes spinning in red dust, drummers and crowd blurred behind, late afternoon golden light, editorial photojournalism style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Para o viajante brasileiro, esta é a viagem de origem: é do Golfo da Guiné que vieram o candomblé, o vodum, o jeje-nagô, a comida de azeite de dendê e boa parte da matriz cultural do Brasil. Ouidah, Abomé, Cape Coast e Elmina não são apenas sítios históricos — são o outro lado de uma travessia que moldou nosso país. Ao mesmo tempo, é uma África de aldeias lacustres, palácios de terra, mercados de tecido e cerimônias vivas, onde o vodum é religião oficial e não folclore.",
    highlights: [
      {
        title: "Castelos de Cape Coast e Elmina",
        story:
          "As masmorras e a Porta do Não Retorno, de onde partiram milhões de pessoas escravizadas. Um lugar que exige tempo, silêncio e guias que saibam conduzir a emoção — e que devolve uma compreensão do Brasil impossível de obter aqui.",
      },
      {
        title: "Ouidah e o vodum vivo",
        story:
          "O Templo das Serpentes, a Floresta Sagrada de Kpasse e a estrada de quatro quilômetros até a praia. Nas cerimônias, os egúngún giram em túnicas de retalhos e ninguém pode tocá-los.",
      },
      {
        title: "Ganvié, a Veneza africana",
        story:
          "Trinta mil pessoas vivendo sobre estacas na lagoa Nokoué, com mercado flutuante, escola e igreja sobre a água — uma cidade fundada para escapar dos caçadores de escravos.",
      },
      {
        title: "Palácios reais de Abomé",
        story:
          "Baixos-relevos de barro contando a história do reino do Daomé e das amazonas mino, guerreiras que aterrorizaram exércitos coloniais.",
      },
    ],
    beyondUsual: [
      {
        title: "País Tamberma e as tata somba",
        story:
          "No norte do Togo, casas-fortaleza de barro em dois andares, patrimônio da Unesco, entre povos batammariba que nunca aceitaram reis.",
      },
      {
        title: "Ashanti em Kumasi",
        story:
          "O reino do ouro e dos tecidos kente, com oficinas de tecelagem e adinkra e o museu do Manhyia Palace.",
      },
      {
        title: "Festival do Inhame e Gèlèdé",
        story:
          "Datas móveis de agosto e setembro reúnem máscaras, tambores e liturgias femininas iorubás reconhecidas pela Unesco.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar a Gana, Togo e Benim?", a: "De novembro a março, na estação seca. O Festival Nacional do Vodum acontece em 10 de janeiro em Ouidah e é o ponto alto do calendário." },
      { q: "Por que combinar os três países?", a: "Porque a história é uma só: a costa do Golfo da Guiné concentra os portos de embarque, os reinos do Daomé e Ashanti e as religiões matriciais afro-brasileiras. As fronteiras são curtas e cruzadas por estrada." },
      { q: "É uma viagem indicada para brasileiros?", a: "Especialmente. É a viagem de reencontro com as raízes que formaram o Brasil, com guias que trabalham a ligação direta entre Ouidah, Salvador e o Recôncavo." },
      { q: "Quantos dias reservar?", a: "De doze a quinze dias para os três países com tempo real em cada cerimônia e sítio histórico." },
      { q: "Quanto custa essa viagem?", a: "Depende dos voos internacionais, do veículo com motorista e da hospedagem disponível — a hotelaria é simples fora das capitais. Valores sob consulta." },
      { q: "Como criar meu roteiro na África Ocidental?", a: "Clique em Criar roteiro sob medida e conte suas datas e se deseja coincidir com festivais." },
    ],
  },
  {
    id: "africa-senegal-gambia",
    continent: "África",
    country: "Senegal e Gâmbia",
    region: "Dakar, Saloum, Casamance e Rio Gâmbia",
    slug: "africa/senegal-gambia",
    name: "Senegal e Gâmbia — Dakar, deltas e o Sahel atlântico",
    bestTime:
      "Nov–Abr, com clima seco e ameno. Dezembro a fevereiro concentra as aves migratórias do Djoudj.",
    tags: ["cultura", "birdwatching", "navegacao", "praia", "gastronomia", "fotografia"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of colourful wooden pirogues lined on a beach in Senegal at sunset, fishermen silhouettes hauling nets, warm dusty Sahel light, ocean waves behind, editorial travel photography, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Senegal tem a teranga, uma palavra wolof para uma hospitalidade que é quase institucional, e uma cena musical que exportou o mbalax para o mundo. Saint-Louis guarda a arquitetura crioula das margens do rio; a Ilha de Gorée devolve, em pedra, a memória do tráfico atlântico; o delta do Saloum abre um labirinto de manguezais e ilhas de conchas. A Gâmbia, encravada como uma faixa em torno do rio, oferece uma das melhores observações de aves da África Ocidental e uma navegação fluvial lenta e memorável.",
    highlights: [
      {
        title: "Ilha de Gorée",
        story:
          "Vinte minutos de barco desde Dakar até uma ilha sem carros, com casas coloniais em ocre e a Casa dos Escravos. O silêncio no fim da tarde, quando os barcos de turistas partem, é o que fica.",
      },
      {
        title: "Saint-Louis e o rio Senegal",
        story:
          "Antiga capital da África Ocidental Francesa, com varandas de ferro, pescadores lébou e o festival de jazz que ocupa a cidade em maio.",
      },
      {
        title: "Delta do Saloum de piroga",
        story:
          "Canais entre manguezais, ilhas construídas sobre milhões de conchas, baobás enormes e aldeias serer onde o tempo é medido pela maré.",
      },
      {
        title: "Parque de Djoudj",
        story:
          "Terceiro maior santuário ornitológico do mundo: pelicanos brancos aos milhares, flamingos e aves europeias que atravessam o Saara para invernar aqui.",
      },
    ],
    beyondUsual: [
      {
        title: "Casamance",
        story:
          "Ao sul da Gâmbia, floresta, aldeias diola, campements comunitários e praias vazias — o Senegal mais verde e menos visitado.",
      },
      {
        title: "Subir o Rio Gâmbia",
        story:
          "Navegação de vários dias até Janjanbureh, com hipopótamos, chimpanzés reintroduzidos em Baboon Islands e nenhum outro barco à vista.",
      },
      {
        title: "Noites de mbalax em Dakar",
        story:
          "Clubes onde bateristas de sabar tocam até o amanhecer, com acesso guiado a casas de show fora do circuito de visitantes.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar ao Senegal?", a: "De novembro a abril, na estação seca. Dezembro a fevereiro é o pico das aves migratórias no Djoudj e nos deltas." },
      { q: "Vale combinar Senegal e Gâmbia?", a: "Sim. A Gâmbia acrescenta a navegação fluvial e a observação de aves, e a travessia por estrada ou barco é curta. Um roteiro de dez a doze dias cobre bem os dois." },
      { q: "Precisa de visto e vacinas?", a: "Brasileiros não precisam de visto para o Senegal em estadas curtas. Febre amarela é exigida e recomenda-se profilaxia de malária — orientamos caso a caso." },
      { q: "Como é a hospedagem?", a: "Há boutique hotels charmosos em Dakar, Saint-Louis e Saly, lodges ecológicos no Saloum e campements simples na Casamance. Selecionamos o melhor disponível em cada trecho." },
      { q: "Quanto custa a viagem?", a: "Depende do aéreo, do veículo com motorista e das navegações contratadas. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro no Senegal?", a: "Clique em Criar roteiro sob medida e conte se prioriza cultura, aves ou praias." },
    ],
  },
  {
    id: "africa-cabo-verde",
    continent: "África",
    country: "Cabo Verde",
    region: "Santo Antão, São Vicente, Fogo e Sal",
    slug: "africa/cabo-verde",
    name: "Cabo Verde — trilhas de Santo Antão, morna e o vulcão do Fogo",
    bestTime:
      "Nov–Jun, com clima seco e ventos constantes. Agosto reúne o Festival da Baía das Gatas, em São Vicente.",
    tags: ["trekking", "montanha", "praia", "cultura", "gastronomia", "fotografia"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of the Paul Valley in Santo Antão, Cape Verde, vertiginous green terraced ravine with sugarcane fields, cobbled path winding along the ridge, clouds spilling over volcanic peaks, editorial travel photography, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Cabo Verde é o arquipélago onde a língua é irmã da nossa, a música é morna e coladeira, e a paisagem muda radicalmente de uma ilha para a outra: Santo Antão é uma catedral vertical de vales verdes e caminhos de pedra; o Fogo tem uma caldeira habitada com vinhas plantadas em cinza vulcânica; São Vicente vive de música em Mindelo, cidade de Cesária Évora; e Sal e Boa Vista oferecem o mar mais azul do Atlântico médio. É trekking, cultura e mar na mesma viagem, com a familiaridade de quem fala português.",
    highlights: [
      {
        title: "Travessia do Vale do Paul, em Santo Antão",
        story:
          "Descer da cratera de Cova até o mar por um caminho calçado de pedra, entre canaviais, mangueiras e casas coladas em paredões. Uma das caminhadas mais bonitas do Atlântico.",
      },
      {
        title: "Chã das Caldeiras, na Ilha do Fogo",
        story:
          "Uma vila dentro da cratera de um vulcão ativo, com uvas plantadas em lapilli e um vinho tinto improvável. Subir o Pico do Fogo, 2.829 metros, leva a manhã inteira e é pura cinza solta.",
      },
      {
        title: "Mindelo e a morna",
        story:
          "Bares onde violão, cavaquinho e voz atravessam a madrugada. A morna é patrimônio imaterial da Unesco e aqui é rotina, não apresentação.",
      },
      {
        title: "Cidade Velha, em Santiago",
        story:
          "A primeira cidade colonial europeia dos trópicos, com o pelourinho e a fortaleza real de São Filipe olhando o mar.",
      },
    ],
    beyondUsual: [
      {
        title: "Tartarugas na Boa Vista",
        story:
          "Entre junho e outubro, uma das maiores populações de desova de tartaruga-cabeçuda do Atlântico, com monitoramento científico acompanhado.",
      },
      {
        title: "Kitesurf em Sal",
        story:
          "Ventos alísios constantes fazem de Santa Maria e Kite Beach destino de temporada para praticantes de todos os níveis.",
      },
      {
        title: "Travessia entre ilhas de barco",
        story:
          "Ferry de São Vicente a Santo Antão ao amanhecer, com o canal aberto e as montanhas surgindo da névoa.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para conhecer Cabo Verde?", a: "De novembro a junho, com clima seco e temperaturas estáveis. Agosto tem festivais de música, mas também mais calor e alguma chuva." },
      { q: "Quais ilhas escolher?", a: "Santo Antão para trekking, São Vicente para música, Fogo para vulcão e vinho, Santiago para história e Sal ou Boa Vista para praia. Combinamos três a quatro em um roteiro de dez dias." },
      { q: "Fala-se português em Cabo Verde?", a: "Sim, o português é a língua oficial, e o crioulo cabo-verdiano é a língua do dia a dia. É um dos destinos internacionais mais confortáveis para brasileiros." },
      { q: "É preciso preparo físico?", a: "Para as trilhas de Santo Antão e o Pico do Fogo, sim — há desníveis longos e piso irregular. Há versões mais leves para quem prefere caminhadas curtas." },
      { q: "Quanto custa uma viagem a Cabo Verde?", a: "Depende do aéreo, do número de ilhas e das conexões internas. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro em Cabo Verde?", a: "Clique em Criar roteiro sob medida e conte se busca trilhas, música ou mar." },
    ],
  },
  {
    id: "polos-svalbard",
    continent: "Antártida & Ártico",
    country: "Noruega",
    region: "Svalbard e Spitsbergen",
    slug: "polos/svalbard-spitsbergen",
    name: "Svalbard — ursos-polares, gelo do Ártico e sol da meia-noite",
    bestTime:
      "Jun–Ago para navegação, sol da meia-noite e ursos na borda do gelo; Mar–Abr para trenó de cães e luz azul do fim da noite polar.",
    tags: ["expedicao", "remoto", "safari", "aurora", "navegacao", "fotografia"],
    imageAiPrompt:
      "Ultra realistic wildlife documentary photograph of a polar bear walking across pack ice in Svalbard, distant expedition ship out of focus, low arctic midnight sun, cold blue and gold palette, editorial photography, no people visible.",
    imageOverrideUrl: "",
    intro:
      "Svalbard fica a mil quilômetros do polo norte e tem mais ursos-polares do que habitantes. É o Ártico verdadeiro, com geleiras despencando direto no mar, morsas em praias de seixos e a borda do banquisa onde o urso caça foca. No verão, o sol não se põe por quatro meses; no inverno, não nasce por outros quatro. Navegar aqui em navio de expedição de pequeno porte é a forma mais segura, ética e produtiva de encontrar a fauna — e a Create Travel seleciona armadores com biólogos embarcados e políticas rígidas de aproximação.",
    highlights: [
      {
        title: "Ursos-polares na borda do gelo",
        story:
          "O navio avança até o limite da banquisa e desliga os motores. Alguém no convés aponta um ponto amarelo a um quilômetro. Meia hora depois, o animal atravessa a placa em passo tranquilo, sem se importar com a nossa existência.",
      },
      {
        title: "Frente de geleira em Monacobreen",
        story:
          "Uma parede de gelo azul de vários quilômetros que estala e desaba em blocos. O som chega dois segundos depois da imagem.",
      },
      {
        title: "Colônias de aves e morsas",
        story:
          "Falésias com centenas de milhares de araus, raposas-do-ártico esperando embaixo, e praias com dezenas de morsas empilhadas ao sol.",
      },
      {
        title: "Longyearbyen",
        story:
          "A cidade mais setentrional do mundo: casas coloridas, minas de carvão desativadas, uma placa avisando que não se sai do perímetro sem rifle e uma cena gastronômica surpreendentemente boa.",
      },
    ],
    beyondUsual: [
      {
        title: "Circum-navegação de Spitsbergen",
        story:
          "Dez a doze dias contornando a ilha principal, chegando ao norte de 80° e ao gelo permanente — o itinerário com maior probabilidade de encontros com urso.",
      },
      {
        title: "Trenó de cães e motoneve na primavera",
        story:
          "Março e abril, com o mar ainda congelado e uma luz azul que dura horas, atravessando vales até cavernas de gelo glacial.",
      },
      {
        title: "Três ilhas árticas",
        story:
          "Programas que somam Svalbard, Groenlândia e Islândia em uma única navegação de duas semanas.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para ver ursos-polares em Svalbard?", a: "De junho a agosto, quando o navio alcança a borda do gelo com sol 24 horas. Julho costuma equilibrar melhor gelo navegável e avistamentos." },
      { q: "É garantido ver urso-polar?", a: "Nenhum encontro com fauna selvagem é garantido, mas os itinerários que alcançam a banquisa ao norte têm índice histórico muito alto de avistamentos, quase sempre múltiplos." },
      { q: "Como se chega a Svalbard?", a: "Por voo desde Oslo ou Tromsø até Longyearbyen, cerca de três horas. Combinamos com alguns dias na Noruega continental." },
      { q: "É perigoso?", a: "Fora do perímetro urbano, a lei exige guia armado por causa dos ursos. Todos os desembarques são feitos com equipe de expedição treinada e protocolos rígidos." },
      { q: "Quanto custa uma expedição a Svalbard?", a: "É uma viagem de alto investimento, definida por armador, cabine e duração. Enviamos comparativo de navios sob consulta." },
      { q: "Como criar minha expedição ao Ártico?", a: "Clique em Criar roteiro sob medida e conte sua janela de datas e preferência entre verão de navegação ou primavera de neve." },
    ],
  },
  {
    id: "america-central-guatemala-honduras",
    continent: "América do Norte",
    country: "Guatemala e Honduras",
    region: "Tikal, Atitlán, Antígua e Copán",
    slug: "america-central/guatemala-honduras",
    name: "Guatemala e Honduras — Tikal, Atitlán e a Copán maia",
    bestTime:
      "Nov–Abr, na estação seca. A Semana Santa em Antígua, em março ou abril, é uma das maiores do continente.",
    tags: ["cultura", "montanha", "festivais-folcloricos", "gastronomia", "fotografia", "familia"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of Tikal Temple I rising above dense jungle canopy at sunrise, mist between the trees, howler monkeys unseen, warm golden light on grey limestone, editorial travel photography, no people visible.",
    imageOverrideUrl: "",
    intro:
      "A Guatemala é o coração do mundo maia e continua sendo: vinte e duas línguas maias vivas, mercados de tecido em Chichicastenango e cerimônias com copal que acontecem porque precisam acontecer, não porque alguém assiste. Antígua guarda a arquitetura colonial mais bonita da América Central sob três vulcões, um deles em erupção permanente. Tikal ergue templos acima da copa da floresta. E, cruzando a fronteira, Copán, em Honduras, oferece a escultura maia mais refinada que existe — uma escadaria com dois mil e quinhentos glifos.",
    highlights: [
      {
        title: "Tikal ao amanhecer",
        story:
          "Entrar no parque antes do sol, subir o Templo IV no escuro e esperar a névoa baixar enquanto bugios rugem em coro. Os topos de pedra emergem da floresta um a um.",
      },
      {
        title: "Lago Atitlán",
        story:
          "Três vulcões cercando uma caldeira inundada e doze aldeias tz'utujil e cakchiquel na margem, cada uma com seu traje próprio. Atravessar de lancha ao amanhecer, com a água como espelho, é o ritual da região.",
      },
      {
        title: "Antígua Guatemala",
        story:
          "Ruas de pedra, conventos em ruína, portas em cores saturadas e o vulcão Fuego soltando cinza ao fundo. Na Semana Santa, tapetes de serragem colorida cobrem as ruas antes das procissões.",
      },
      {
        title: "Copán, em Honduras",
        story:
          "A Escadaria Hieroglífica, com o texto maia mais longo já encontrado, e estelas esculpidas em alto-relevo que nenhuma outra cidade maia igualou.",
      },
    ],
    beyondUsual: [
      {
        title: "Semuc Champey e as terras altas",
        story:
          "Piscinas naturais turquesa sobre uma ponte de calcário, em um vale de acesso difícil e recompensa absoluta.",
      },
      {
        title: "Subida ao vulcão Acatenango",
        story:
          "Pernoite a 3.700 metros para ver o Fuego em erupção a poucos quilômetros — uma das noites mais impressionantes das Américas.",
      },
      {
        title: "Ilhas da Bahía",
        story:
          "Roatán e Utila fecham a viagem com mergulho no segundo maior recife de coral do mundo.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar a Guatemala?", a: "De novembro a abril, na estação seca. A Semana Santa em Antígua é o ponto alto cultural do calendário e exige reserva com muitos meses de antecedência." },
      { q: "Vale incluir Copán, em Honduras?", a: "Sim. Fica a poucas horas por estrada da Guatemala e é a cidade maia de escultura mais refinada — complementa Tikal em vez de repeti-la." },
      { q: "Quantos dias reservar?", a: "De dez a doze dias para Antígua, Atitlán, Tikal e Copán com ritmo confortável. Com Semuc Champey ou Roatán, calcule quinze." },
      { q: "É uma viagem indicada para famílias?", a: "Sim, com adaptações: distâncias moderadas, boa hotelaria de charme e experiências práticas como oficinas de tecelagem, chocolate e cerâmica." },
      { q: "Quanto custa a viagem?", a: "Depende do aéreo, do voo interno até Flores e da categoria de hospedagem. Enviamos os valores sob consulta." },
      { q: "Como criar meu roteiro na Guatemala?", a: "Clique em Criar roteiro sob medida e conte suas datas e interesse por arqueologia, cultura viva ou vulcões." },
    ],
  },
  {
    id: "america-do-sul-peru-amazonia-cruzeiro",
    continent: "América do Sul",
    country: "Peru",
    region: "Rio Amazonas, Pacaya-Samiria e Iquitos",
    slug: "america-do-sul/peru/amazonia-cruzeiro",
    name: "Amazônia peruana — cruzeiro no alto Amazonas e Pacaya-Samiria",
    bestTime:
      "Dez–Mai na cheia, com navegação por igapós e florestas alagadas; Jun–Nov na vazante, com praias de rio e melhor observação de fauna em terra.",
    tags: ["navegacao", "birdwatching", "conservacao", "remoto", "fotografia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of a small luxury expedition riverboat on the Peruvian Amazon at dawn, mist rising off the water, dense flooded forest reflected, pink river dolphin surfacing nearby, editorial travel photography, no people visible.",
    imageOverrideUrl: "",
    intro:
      "O Amazonas nasce no Peru, e é ali — onde o Marañón encontra o Ucayali — que a floresta ainda oferece a maior densidade de fauna visível do rio inteiro. A reserva de Pacaya-Samiria protege dois milhões de hectares de floresta inundável, com botos rosados, preguiças, macacos-de-cheiro e mais de quatrocentas espécies de aves. A forma certa de conhecê-la é a bordo: embarcações pequenas, de dez a vinte cabines, com suítes panorâmicas, naturalistas peruanos e esquifes que entram nos igarapés ao amanhecer e ao anoitecer.",
    highlights: [
      {
        title: "Saídas de esquife ao amanhecer",
        story:
          "Cinco e meia da manhã, névoa sobre a água, e o barco pequeno entrando em um canal estreito. Em duas horas: preguiças, tucanos, iguanas, e um boto rosa arqueando ao lado do casco.",
      },
      {
        title: "Pacaya-Samiria",
        story:
          "A maior reserva de floresta inundável protegida do Peru. Aqui os manatis são reintroduzidos, os jacarés-negros voltaram e o silêncio noturno é interrompido apenas por rãs e bugios.",
      },
      {
        title: "Comunidades ribeirinhas",
        story:
          "Visitas conduzidas por acordos de longo prazo com aldeias que recebem parte da receita da navegação — artesanato de chambira, roçados de mandioca e escolas apoiadas pelo programa.",
      },
      {
        title: "Iquitos e o mercado de Belén",
        story:
          "A maior cidade do mundo sem acesso por estrada, com casarões da era da borracha, um mercado flutuante caótico e a melhor cozinha amazônica do Peru.",
      },
    ],
    beyondUsual: [
      {
        title: "Combinação com Machu Picchu",
        story:
          "Cusco e Vale Sagrado antes, cruzeiro amazônico depois: o roteiro peruano completo, do Andes ao rio, em duas semanas.",
      },
      {
        title: "Pesca esportiva de tucunaré e piranha",
        story:
          "Programas de captura e soltura com guias especializados nos braços laterais do Ucayali.",
      },
      {
        title: "Retiros de ayahuasca supervisionados",
        story:
          "Centros credenciados com médicos e curandeiros reconhecidos, para quem busca essa dimensão com segurança e triagem prévia.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para o cruzeiro na Amazônia peruana?", a: "Na cheia, de dezembro a maio, navega-se dentro da floresta alagada. Na vazante, de junho a novembro, surgem praias de rio e a fauna se concentra em terra firme. Ambas são excelentes, com experiências diferentes." },
      { q: "Quantos dias dura o cruzeiro?", a: "Os programas mais comuns têm três, quatro ou sete noites saindo de Nauta, próximo a Iquitos. Sete noites permitem chegar mais fundo em Pacaya-Samiria." },
      { q: "Como se chega a Iquitos?", a: "Por voo doméstico de Lima, cerca de duas horas. Não há acesso por estrada — a cidade só é alcançável por ar ou rio." },
      { q: "Qual a diferença para a Amazônia brasileira?", a: "O trecho peruano tem alta densidade de fauna em área protegida e uma frota de embarcações pequenas de padrão elevado. A brasileira oferece mais escala, cultura ribeirinha e lodges de floresta. Muitos clientes fazem as duas." },
      { q: "Quanto custa?", a: "Depende da embarcação, da categoria de suíte e da duração. Enviamos comparativo de barcos sob consulta." },
      { q: "Como criar meu roteiro na Amazônia peruana?", a: "Clique em Criar roteiro sob medida e conte se deseja combinar com Cusco e Machu Picchu." },
    ],
  },
  {
    id: "america-do-sul-peru-cordilheira-branca",
    continent: "América do Sul",
    country: "Peru",
    region: "Cordilheira Branca, Huayhuash e Huaraz",
    slug: "america-do-sul/peru/cordilheira-branca",
    name: "Cordilheira Branca e Huayhuash — os Andes de trekking do Peru",
    bestTime:
      "Mai–Set, a estação seca andina, com céu limpo e trilhas abertas. Junho e julho são os meses mais estáveis.",
    tags: ["trekking", "montanha", "remoto", "fotografia", "expedicao", "cultura"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of Laguna 69 in the Cordillera Blanca, Peru, intensely turquoise glacial lake below snow-covered granite peaks, hikers absent, crisp high-altitude light, editorial mountain photography.",
    imageOverrideUrl: "",
    intro:
      "A Cordilheira Branca é a maior cadeia tropical glaciada do mundo: mais de cinquenta cumes acima de cinco mil e setecentos metros em duzentos quilômetros de extensão, coroados pelo Huascarán, o teto do Peru. As lagoas glaciais têm um turquesa que parece manipulado, e os vales guardam quéchuas cultivando batata a quatro mil metros. Ao sul, a Cordilheira Huayhuash oferece o que muitos alpinistas consideram o circuito de trekking mais bonito do planeta — dez dias de caminhada sem cruzar uma estrada.",
    highlights: [
      {
        title: "Laguna 69",
        story:
          "Sobe-se de 3.900 a 4.600 metros em uma manhã, entre cascatas e vacas soltas. No alto, a lagoa aparece de repente, turquesa impossível, com o Chacraraju branco despencando atrás.",
      },
      {
        title: "Trekking de Santa Cruz",
        story:
          "Quatro dias clássicos cruzando o passo Punta Unión, a 4.750 metros, com Alpamayo — eleito a montanha mais bela do mundo — aparecendo em um recorte perfeito de vale.",
      },
      {
        title: "Circuito Huayhuash",
        story:
          "Dez a doze dias em torno de um maciço compacto de seis-mil-metros, com lagoas em cada acampamento e o Siula Grande, o da história de 'Tocando o Vazio', diante da barraca.",
      },
      {
        title: "Chavín de Huántar",
        story:
          "Templo de três mil anos com galerias subterrâneas e a estela Lanzón — a civilização que antecedeu tudo o que veio depois nos Andes.",
      },
    ],
    beyondUsual: [
      {
        title: "Versão lodge-to-lodge",
        story:
          "Para quem não quer barraca: programas com pousadas de montanha em Huaraz e Vicos, com caminhadas diárias e retorno ao conforto.",
      },
      {
        title: "Ascensões guiadas",
        story:
          "Nevado Mateo, Vallunaraju e Pisco para iniciantes em alta montanha, com guias UIAGM e equipamento completo.",
      },
      {
        title: "Combinação com Cusco",
        story:
          "Duas semanas somando Andes do norte, com trekking, e Andes do sul, com Machu Picchu e Vale Sagrado.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para trekking na Cordilheira Branca?", a: "De maio a setembro, na estação seca. Junho e julho oferecem o céu mais limpo e as trilhas mais estáveis." },
      { q: "Qual o preparo físico necessário?", a: "Caminhadas de dia inteiro entre 3.500 e 4.800 metros. Recomendamos preparo aeróbico consistente nos três meses anteriores e dois a três dias de aclimatação em Huaraz antes de qualquer trilha." },
      { q: "Santa Cruz ou Huayhuash?", a: "Santa Cruz tem quatro dias e é o melhor primeiro trekking andino. Huayhuash tem dez a doze dias, é mais remoto e exigente, e recompensa quem já caminhou em altitude." },
      { q: "Como se chega a Huaraz?", a: "Por estrada desde Lima, cerca de oito horas por uma rota cênica, ou por voo curto até Anta. Organizamos transfer privativo em ambos os casos." },
      { q: "Quanto custa?", a: "Depende do formato — camping com equipe e mulas ou lodge-to-lodge —, da duração e do número de participantes. Valores sob consulta." },
      { q: "Como criar meu roteiro nos Andes peruanos?", a: "Clique em Criar roteiro sob medida e conte sua experiência prévia em altitude." },
    ],
  },
];
