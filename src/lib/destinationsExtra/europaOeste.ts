import { Destination } from "../types";

/**
 * Europa Ocidental — curadoria Create Travel.
 * Mesmo padrão editorial dos demais continentes: intro autoral, destaques sensoriais,
 * "além do óbvio", FAQs de intenção real (formato citável por IA).
 * Nunca mencionar preço.
 */
export const europaOesteExtraDestinations: Destination[] = [
  {
    id: "europa-franca-paris",
    continent: "Europa",
    country: "França",
    region: "Paris",
    slug: "europa/franca-paris",
    name: "Paris Autoral",
    bestTime:
      "Abr–Jun e Set–Out (luz suave, cidade em ritmo pleno, terraços abertos). Dezembro para vitrines e ópera; agosto tem menos parisienses e mais turistas.",
    tags: ["cultura", "gastronomia", "fotografia", "lua-de-mel"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a quiet Parisian rooftop terrace at golden hour overlooking zinc roofs and the Eiffel Tower in the distance, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Paris não se resume em três dias de museus lotados. A curadoria Create Travel troca a fila do Louvre pela visita guiada antes da abertura, o café de turista pelo bistrô de bairro sem placa e o roteiro genérico por uma cidade vivida em camadas — arte, mesa e luz, na medida certa para quem já foi outras vezes ou estreia com propriedade.",
    highlights: [
      {
        title: "Louvre e Musée d'Orsay fora do horário público",
        story:
          "As salas ainda vazias, os passos ecoando no mármore, e um historiador da arte conduzindo você por uma dúzia de obras essenciais em vez de mil quadros apressados. A Mona Lisa sem multidão é outra experiência inteiramente.",
      },
      {
        title: "Mercados e bistrôs de bairro com quem conhece",
        story:
          "O queijeiro que reconhece o cliente antigo, o vinho natural servido sem cerimônia, a mesa de seis lugares onde o chef sai da cozinha para cumprimentar. Paris comida devagar, sem roteiro de guia turístico.",
      },
      {
        title: "Sena ao entardecer em embarcação privativa",
        story:
          "Nada de barco lotado com autofalante. Uma embarcação só para o seu grupo, taça na mão, enquanto Notre-Dame e as pontes se acendem uma a uma contra o céu violeta.",
      },
      {
        title: "Ateliês e alfaiatarias com acesso privado",
        story:
          "Um perfumista que cria uma fragrância sob medida, uma maison de couture que recebe com hora marcada, um ateliê de encadernação artesanal escondido num pátio do Marais. O luxo de Paris que não está na vitrine.",
      },
      {
        title: "Versalhes sem multidão",
        story:
          "Chegar antes dos ônibus de turismo, caminhar pelos jardins com um guia que conhece cada estátua pelo nome, e sentir por um instante o silêncio que a corte de Luís XIV também conheceu.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar em apartamento particular com chef",
        story:
          "Uma mesa montada num salão do século XIX, menu autoral e o anfitrião contando a história do prédio entre um prato e outro.",
      },
      {
        title: "Aula de culinária com chef estrelado",
        story:
          "Uma manhã na cozinha aprendendo técnica francesa clássica, seguida do almoço que você mesmo ajudou a preparar.",
      },
      {
        title: "Bate-volta a Giverny em dia de semana",
        story:
          "Os jardins de Monet sem ônibus escolares, a ponte japonesa refletida na água parada, e o silêncio que inspirou os nenúfares.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar em Paris?", a: "De 4 a 6 noites. Quatro cobrem o essencial com calma; seis permitem Versalhes, Giverny e mais tempo em bairros como Marais e Saint-Germain sem correria." },
      { q: "Qual a melhor época para ir a Paris?", a: "Abril a junho e setembro a outubro oferecem clima ameno e menos multidão. Dezembro traz vitrines e ópera; agosto esvazia de parisienses, mas concentra turistas." },
      { q: "Vale a pena visitar o Louvre com guia privado?", a: "Sim. Um historiador da arte fora do horário público transforma uma visita cansativa em uma experiência de duas horas, focada nas obras que realmente importam para você." },
      { q: "Paris é boa para lua de mel?", a: "É um clássico por bons motivos: cenários íntimos, gastronomia refinada e a possibilidade de curar cada detalhe — do jantar em apartamento privado ao passeio de barco só a dois." },
      { q: "Vale combinar Paris com outros destinos da França?", a: "Sim. Loire fica a menos de duas horas de trem para castelos e vinhos; Provence pode ser combinada com voo curto ou TGV para completar duas semanas na região." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-franca-provence",
    continent: "Europa",
    country: "França",
    region: "Provence",
    slug: "europa/franca-provence",
    name: "Provence e a Luz do Sul",
    bestTime:
      "Mai–Jun e Set (lavandas ainda verdes ou colhidas, calor ameno, vindima começando). Julho é a temporada de lavanda em flor, mas com calor intenso e mais gente.",
    tags: ["gastronomia", "roadtrip", "bem-estar", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of lavender fields at golden hour in Provence with a stone farmhouse in the background, warm cinematic light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Provence é luz antes de ser paisagem — aquela claridade que fez Van Gogh e Cézanne reinventarem a pintura. A curadoria Create Travel constrói dias sem pressa entre vilarejos de pedra, mercados de produtor e adegas familiares, no ritmo lento que a região sempre exigiu de quem a visita com atenção.",
    highlights: [
      {
        title: "Campos de lavanda em Valensole",
        story:
          "Fileiras roxas se perdendo no horizonte sob o sol de julho, o zumbido das abelhas e um piquenique montado à sombra de uma oliveira centenária. A imagem que a França mais exporta, vivida sem multidão.",
      },
      {
        title: "Vilarejos empoleirados de Luberon",
        story:
          "Gordes, Roussillon e Ménerbes em ruelas de pedra ocre, ateliês de artistas locais e uma parada obrigatória para o ocre natural que colore as casas há séculos.",
      },
      {
        title: "Mercados de produtor ao amanhecer",
        story:
          "Queijos de cabra ainda mornos, tomates que cheiram a verão e um produtor de azeite que insiste para você provar três variedades antes de escolher a sua.",
      },
      {
        title: "Adegas familiares no Vale do Rhône",
        story:
          "Um enólogo de terceira geração conduzindo a degustação na própria adega, entre barris de carvalho, contando a história do terroir com o vinho ainda na taça.",
      },
      {
        title: "Aix-en-Provence e o legado de Cézanne",
        story:
          "As ruas que o pintor percorreu diariamente, o ateliê preservado como ele deixou e a Montagne Sainte-Victoire ao fundo, a mesma que ele pintou dezenas de vezes.",
      },
    ],
    beyondUsual: [
      {
        title: "Colheita de lavanda com produtor local",
        story:
          "Uma manhã de trabalho manual ao lado de quem cultiva o campo há gerações, terminando com a destilação do próprio óleo essencial.",
      },
      {
        title: "Jantar em mas provençal restaurado",
        story:
          "Uma fazenda de pedra do século XVIII, mesa posta no pátio sob as estrelas e menu que segue estritamente a estação.",
      },
      {
        title: "Les Baux-de-Provence à noite",
        story:
          "A vila medieval esvaziada de turistas ao entardecer, com o castelo em ruínas iluminado e o vale de olivais em silêncio abaixo.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para Provence?", a: "De 4 a 5 noites em pousada rural, com carro à disposição, cobrem Luberon, os campos de lavanda e o Vale do Rhône sem pressa." },
      { q: "Qual a melhor época para ver os campos de lavanda?", a: "A floração plena acontece entre meados de junho e final de julho. Fora desse período os campos ainda são verdes e o clima mais ameno para caminhadas e degustações." },
      { q: "Provence é boa para quem gosta de vinho?", a: "Sim. O Vale do Rhône e os arredores de Aix concentram adegas familiares que recebem com visita guiada e degustação, muitas vezes conduzidas pelo próprio enólogo." },
      { q: "É preciso alugar carro em Provence?", a: "Recomendamos fortemente. Os vilarejos mais autênticos e as melhores adegas ficam fora das rotas de ônibus turístico; motorista particular também é uma opção sem perder flexibilidade." },
      { q: "Vale combinar Provence com Paris ou a Riviera Francesa?", a: "Sim. Paris-Provence é natural via TGV em cerca de três horas; a Côte d'Azur e Mônaco ficam a menos de duas horas de carro, completando um roteiro de sul da França." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-franca-loire",
    continent: "Europa",
    country: "França",
    region: "Vale do Loire",
    slug: "europa/franca-loire",
    name: "Castelos do Loire",
    bestTime:
      "Mai–Jun e Set (jardins floridos, clima ameno, vindima próxima). Outubro traz as folhas douradas ao longo do rio.",
    tags: ["cultura", "gastronomia", "roadtrip"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a Renaissance château reflected on the Loire river at sunrise mist, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Vale do Loire é o jardim renascentista da França: castelos que rivalizavam entre reis, vinhedos que descem até a margem do rio e vilarejos que parecem parados no século XVI. A Create Travel desenha dias que combinam arquitetura, degustação e silêncio rural a menos de duas horas de Paris.",
    highlights: [
      {
        title: "Chambord ao amanhecer",
        story:
          "A escadaria em dupla hélice atribuída a Leonardo da Vinci, o telhado com mais de trezentas chaminés recortando o céu, e a névoa ainda subindo do parque de caça real ao redor.",
      },
      {
        title: "Chenonceau sobre o rio Cher",
        story:
          "O castelo construído literalmente sobre a água, disputado por duas mulheres da corte francesa, e a galeria que atravessa o rio de ponta a ponta como uma ponte habitada.",
      },
      {
        title: "Vinhedos de Vouvray e Chinon",
        story:
          "Adegas escavadas na própria rocha calcária, o vinho envelhecendo em túneis que mantêm doze graus o ano inteiro, e um enólogo explicando por que o solo de cada encosta muda o sabor.",
      },
      {
        title: "Vilarejos de pedra branca à beira-rio",
        story:
          "Amboise e Villandry em ruas estreitas de tufo local, mercados semanais e jardins renascentistas geométricos que parecem tapetes vistos de cima.",
      },
      {
        title: "Passeio de canoa tradicional no rio",
        story:
          "Um barqueiro local conduzindo uma embarcação de fundo chato pelas águas rasas do Loire, entre bancos de areia e garças pescando à margem.",
      },
    ],
    beyondUsual: [
      {
        title: "Degustação em adega troglodita privativa",
        story:
          "Uma sala escavada na rocha só para o seu grupo, o enólogo servindo direto do barril e queijos locais harmonizados.",
      },
      {
        title: "Jantar dentro de um castelo privado",
        story:
          "Uma família proprietária de um château menos conhecido recebendo para um jantar íntimo no próprio salão de baile.",
      },
      {
        title: "Passeio de balão sobre os castelos",
        story:
          "O vale inteiro visto de cima ao amanhecer, os telhados de ardósia brilhando e o rio serpenteando entre os vinhedos.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos castelos vale a pena visitar no Loire?", a: "Recomendamos de três a quatro em uma estadia de três noites, priorizando qualidade sobre quantidade — Chambord, Chenonceau e um menos conhecido, sem pressa entre eles." },
      { q: "É melhor visitar o Loire com carro próprio?", a: "Sim, a região é rural e os castelos ficam espaçados. Carro ou motorista particular dão a flexibilidade para incluir adegas e vilarejos fora do circuito principal." },
      { q: "Quantos dias reservar para o Vale do Loire?", a: "De 2 a 3 noites são suficientes para os castelos essenciais e uma tarde de degustação, ideal como extensão de uma viagem a Paris." },
      { q: "O Loire é bom para quem gosta de vinho?", a: "Sim. A região produz brancos e espumantes reconhecidos, com adegas familiares que recebem visitantes em cavernas escavadas na rocha calcária." },
      { q: "Vale combinar o Loire com Paris?", a: "É a combinação mais natural: menos de duas horas de trem ou carro separam Paris dos primeiros castelos, permitindo uma extensão de dois a três dias sem complicação logística." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-espanha-andaluzia",
    continent: "Europa",
    country: "Espanha",
    region: "Andaluzia",
    slug: "europa/espanha-andaluzia",
    name: "Andaluzia Essencial",
    bestTime:
      "Mar–Mai e Set–Nov (temperaturas amenas, laranjeiras em flor na primavera). O verão andaluz costuma ultrapassar 40°C no interior.",
    tags: ["cultura", "gastronomia", "cavalgadas", "festivais-folcloricos"],
    imageAiPrompt:
      "Ultra realistic editorial photo of the Alhambra palace courtyard at golden hour with reflecting pool and intricate Moorish arches, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Andaluzia carrega oito séculos de convivência entre culturas mouriscas, judaicas e cristãs — visíveis em cada azulejo, arco e pátio florido. A curadoria Create Travel percorre Sevilha, Córdoba e Granada com acesso privado a monumentos e a alma flamenca que só se revela longe do palco turístico.",
    highlights: [
      {
        title: "Alhambra ao amanhecer",
        story:
          "Os Palácios Nazaridas antes da abertura ao público, a luz baixa entrando pelos arcos de gesso rendado e o som da água correndo pelos canais do Generalife como há oitocentos anos.",
      },
      {
        title: "Mesquita-Catedral de Córdoba sem multidão",
        story:
          "As oitocentas colunas de mármore e jaspe em fileiras infinitas, a catedral renascentista erguida no centro como uma ilha cristã dentro do templo islâmico. Um guia especializado decifra cada camada de história sobreposta.",
      },
      {
        title: "Bairro de Santa Cruz e o Real Alcázar em Sevilha",
        story:
          "Ruelas estreitas perfumadas por laranjeiras, pátios andaluzes com azulejos centenários e o palácio mudéjar que serviu de cenário real — não de filme — para reis castelhanos.",
      },
      {
        title: "Flamenco em tablao autêntico",
        story:
          "Uma sala pequena, sem microfone, onde o taconeo ecoa no piso de madeira e o cante jondo sai rouco e visceral. Nada de espetáculo turístico: aqui é tradição viva.",
      },
      {
        title: "Cavalgada pela campiña andaluza",
        story:
          "Cavalos de pura raça espanhola conduzidos por um picador local entre olivais e cortijos brancos, com parada para um almoço de queijos manchegos e presunto ibérico.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar privativo em pátio andaluz do século XVI",
        story:
          "Uma casa senhorial de Sevilha aberta só para o seu grupo, fonte central murmurando e menu de gaspacho, presunto e vinho de Jerez servido por quem mora ali.",
      },
      {
        title: "Aula de flamenco com bailaora profissional",
        story:
          "Uma tarde aprendendo os primeiros compassos com uma artista que se apresenta nos tablaos mais respeitados de Sevilha.",
      },
      {
        title: "Rota do vinho de Jerez com adega centenária",
        story:
          "Degustação de finos e olorosos direto do barril, em bodegas onde a solera envelhece o vinho há gerações da mesma família.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para a Andaluzia?", a: "De 6 a 8 noites, dividindo entre Sevilha, Córdoba, Granada e uma noite de campo, é o suficiente para viver a região sem correria." },
      { q: "Qual a melhor época para visitar a Andaluzia?", a: "Março a maio e setembro a novembro trazem clima ameno e laranjeiras em flor na primavera. Evite julho e agosto, quando o calor no interior costuma ultrapassar 40°C." },
      { q: "Vale a pena reservar entrada antecipada para a Alhambra?", a: "É essencial. Os ingressos para os Palácios Nazaridas esgotam com semanas de antecedência e o acesso fora do horário público garante a experiência sem multidão." },
      { q: "O flamenco em tablao vale a experiência?", a: "Sim, especialmente em salas pequenas e menos turísticas de Sevilha, Jerez ou Granada, onde a apresentação mantém a intensidade original da tradição." },
      { q: "Vale combinar a Andaluzia com Madri ou Portugal?", a: "Sim. Madri é natural via trem de alta velocidade em pouco mais de duas horas; o sul de Portugal também pode ser incluído em roteiros mais longos pela Península Ibérica." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-espanha-pais-basco",
    continent: "Europa",
    country: "Espanha",
    region: "País Basco",
    slug: "europa/espanha-pais-basco",
    name: "País Basco Gastronômico",
    bestTime:
      "Mai–Set (clima ameno, mar convidativo, temporada alta de restaurantes). Setembro reduz o fluxo turístico mantendo boas temperaturas.",
    tags: ["gastronomia", "praia", "cultura", "roadtrip"],
    imageAiPrompt:
      "Ultra realistic editorial photo of San Sebastián's La Concha bay at golden hour with pintxos bars glowing in the old town, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Poucos lugares do mundo concentram tantas estrelas Michelin por quilômetro quadrado quanto o País Basco. A Create Travel constrói uma imersão entre San Sebastián, Bilbao e vilarejos de pescadores, onde a gastronomia é identidade cultural — e cada pintxo carrega séculos de tradição.",
    highlights: [
      {
        title: "Baía de La Concha em San Sebastián",
        story:
          "A curva perfeita de areia dourada emoldurada por colinas verdes, o passeio marítimo ao entardecer e a sensação rara de uma cidade pequena que abriga a densidade gastronômica de uma capital.",
      },
      {
        title: "Rota de pintxos na Parte Vieja",
        story:
          "De bar em bar, cada balcão coberto de pequenas obras-primas culinárias, um copo de txakoli servido de cima para arejar e a certeza de que aqui comer é esporte de rua.",
      },
      {
        title: "Museu Guggenheim Bilbao",
        story:
          "O titânio curvo de Frank Gehry refletindo o rio Nervión, a Puppy de Jeff Koons na entrada e uma cidade industrial que se reinventou através da arquitetura e da arte contemporânea.",
      },
      {
        title: "Vilarejos de pescadores na costa",
        story:
          "Getaria e Hondarribia com casas coloridas debruçadas sobre o porto, o cheiro de peixe grelhado na brasa e barcos que ainda saem ao amanhecer para pescar o mesmo peixe do jantar.",
      },
      {
        title: "Restaurantes com estrela Michelin",
        story:
          "Uma concentração de chefs que redefiniu a alta gastronomia espanhola, servindo menus degustação que contam a história do mar e da montanha basca em cada etapa.",
      },
    ],
    beyondUsual: [
      {
        title: "Aula de cozinha em sociedade gastronômica local",
        story:
          "As txokos bascas, clubes privados onde homens e mulheres se reúnem para cozinhar juntos, abrem uma porta rara ao visitante para essa tradição centenária.",
      },
      {
        title: "Degustação de txakoli na vinícola de origem",
        story:
          "O vinho branco levemente espumante servido direto na adega costeira, com vista para as vinhas que descem quase até o mar Cantábrico.",
      },
      {
        title: "Bate-volta a Biarritz na França vizinha",
        story:
          "A fronteira que separa dois países em menos de meia hora, praias de surfistas e a arquitetura belle époque da costa basca francesa.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para o País Basco?", a: "De 4 a 5 noites entre San Sebastián e Bilbao, com um dia de vilarejos costeiros, cobrem o essencial sem apressar as refeições — que aqui merecem tempo." },
      { q: "Vale conseguir reserva em restaurante com estrela Michelin?", a: "Sim, especialmente nas casas mais concorridas, onde a agenda costuma fechar com meses de antecedência. Coordenamos essas reservas dentro do planejamento do roteiro." },
      { q: "Qual a diferença entre San Sebastián e Bilbao?", a: "San Sebastián é praia, pintxos e ritmo de balneário elegante; Bilbao é cidade industrial reinventada pela arquitetura e arte contemporânea, com o Guggenheim como símbolo." },
      { q: "O País Basco é bom para quem não é fluente em espanhol?", a: "Sim, com guias locais bilíngues a experiência gastronômica e cultural se aprofunda sem qualquer barreira de comunicação." },
      { q: "Vale combinar o País Basco com o resto da Espanha ou com a França?", a: "Sim. Madri fica a pouco mais de duas horas de trem de alta velocidade; a costa basca francesa e Biarritz ficam a menos de uma hora de carro." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-espanha-madri",
    continent: "Europa",
    country: "Espanha",
    region: "Madri",
    slug: "europa/espanha-madri",
    name: "Madri Real e Contemporânea",
    bestTime:
      "Abr–Jun e Set–Out (clima ameno, museus em ritmo pleno). Evite julho e agosto, quando o calor ultrapassa facilmente os 35°C.",
    tags: ["cultura", "gastronomia", "cavalgadas"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Madrid's Retiro Park at golden hour with the Crystal Palace reflecting on a pond, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Madri combina o peso institucional de capital europeia com a vida noturna mais tardia do continente. A curadoria Create Travel percorre o Triângulo das Artes com acesso privilegiado, os mercados gastronômicos renovados e os arredores reais de El Escorial e Toledo, sem perder o ritmo castiço das tabernas centenárias.",
    highlights: [
      {
        title: "Museu do Prado com curador privativo",
        story:
          "Velázquez, Goya e Bosch explicados por quem estudou cada pincelada, nas salas ainda tranquilas do início da manhã, antes de a coleção se tornar corredor de grupos apressados.",
      },
      {
        title: "Retiro e o Palácio de Cristal",
        story:
          "Um parque que já foi jardim exclusivo da realeza, com o pavilhão de vidro do século XIX refletido num lago tranquilo — Madri respirando devagar no meio do caos urbano.",
      },
      {
        title: "Mercado de San Miguel e tabernas centenárias",
        story:
          "Tapas de jamón ibérico cortado à mão, um copo de vermute servido em bar que não muda o balcão há cem anos, e a certeza de que em Madri o jantar nunca começa antes das nove.",
      },
      {
        title: "Toledo em bate-volta privativo",
        story:
          "A cidade imperial suspensa sobre o rio Tejo, onde mesquitas viraram igrejas e sinagogas dividiram muros com catedrais — um retrato compacto de toda a história ibérica.",
      },
      {
        title: "El Escorial e a herança dos Habsburgo",
        story:
          "O mosteiro-palácio que Felipe II construiu como declaração de poder e fé, com a biblioteca real e o panteão onde repousam gerações de reis espanhóis.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar em taberna com dono há gerações",
        story:
          "Um cocido madrilenho servido em três tempos, na mesma casa onde o avô do atual proprietário começou a cozinhar há mais de sessenta anos.",
      },
      {
        title: "Passeio a cavalo nos arredores da Comunidade de Madri",
        story:
          "Trilhas pela serra próxima à capital, entre pinheiros e granito, com parada num cortijo para um almoço de campo.",
      },
      {
        title: "Visita privada a ateliê de flamenco",
        story:
          "Uma aula introdutória com bailaora profissional seguida de show íntimo em tablao fora do circuito turístico da Gran Vía.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar em Madri?", a: "De 3 a 4 noites cobrem os museus principais, os bairros centrais e um bate-volta a Toledo ou El Escorial sem pressa." },
      { q: "Qual a melhor época para visitar Madri?", a: "Abril a junho e setembro a outubro trazem o clima mais ameno. Julho e agosto costumam ultrapassar 35°C, esvaziando a cidade de moradores." },
      { q: "Vale visitar o Prado com guia privado?", a: "Sim. O acervo é vasto e um historiador de arte ajuda a focar nas obras certas, evitando a fadiga de museu comum a quem tenta ver tudo sozinho." },
      { q: "Toledo é um bom bate-volta a partir de Madri?", a: "Sim, a menos de uma hora de carro ou trem, Toledo condensa história moura, judaica e cristã em um só passeio de dia inteiro." },
      { q: "Vale combinar Madri com Andaluzia?", a: "Sim, o trem de alta velocidade liga Madri a Sevilha e Córdoba em pouco mais de duas horas, tornando a combinação simples e confortável." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-alemanha-baviera",
    continent: "Europa",
    country: "Alemanha",
    region: "Baviera e Estrada Romântica",
    slug: "europa/alemanha-baviera",
    name: "Baviera e a Estrada Romântica",
    bestTime:
      "Mai–Jun e Set–Out (clima ameno, paisagens verdes ou douradas). Dezembro traz os mercados natalinos; setembro coincide com o início da Oktoberfest.",
    tags: ["roadtrip", "cultura", "montanha", "gastronomia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Neuschwanstein castle surrounded by autumn forest at golden hour, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Estrada Romântica atravessa a Baviera por trezentos e cinquenta quilômetros de vilarejos medievais murados, castelos que inspiraram contos de fada e cervejarias centenárias. A Create Travel desenha essa travessia com motorista privativo, no ritmo de quem quer parar em cada esquina que merece.",
    highlights: [
      {
        title: "Castelo de Neuschwanstein",
        story:
          "A fantasia neogótica de Ludwig II erguida sobre penhascos alpinos, cercada por floresta e lagos glaciais — a inspiração confessa do castelo da Disney, mas real e visitável.",
      },
      {
        title: "Rothenburg ob der Tauber",
        story:
          "Uma cidade murada que escapou intacta de séculos de guerra, com casas de enxaimel coloridas, torres medievais e a sensação de caminhar dentro de uma gravura antiga.",
      },
      {
        title: "Munique e a tradição cervejeira",
        story:
          "Salões centenários de cerveja com música ao vivo, pretzels quentes e a Marienplatz com seu carrilhão mecânico tocando ao meio-dia diante da multidão.",
      },
      {
        title: "Alpes bávaros e o Zugspitze",
        story:
          "O pico mais alto da Alemanha alcançado de teleférico, com vista simultânea para quatro países em dias claros e trilhas alpinas logo abaixo da linha de neve.",
      },
      {
        title: "Würzburg e os vinhedos do Franken",
        story:
          "A Residência episcopal, patrimônio da Unesco, e vinhedos em socalcos que produzem os brancos secos característicos da região, servidos na garrafa em formato de cantil.",
      },
    ],
    beyondUsual: [
      {
        title: "Degustação privativa em cervejaria de mosteiro",
        story:
          "Uma abadia que produz cerveja há séculos segundo a mesma receita, com visita guiada pelo próprio mestre cervejeiro.",
      },
      {
        title: "Jantar em castelo particular com família proprietária",
        story:
          "Uma refeição servida no salão de um schloss ainda habitado, com a família contando gerações de história entre um prato e outro.",
      },
      {
        title: "Caminhada por vilarejos fora do circuito principal",
        story:
          "Dinkelsbühl e Nördlingen, cidades muradas tão bem preservadas quanto Rothenburg, mas sem os ônibus de turismo.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para a Estrada Romântica?", a: "De 5 a 6 noites, com motorista privativo, permitem percorrer os principais vilarejos e o castelo de Neuschwanstein sem pressa entre uma parada e outra." },
      { q: "Qual a melhor época para visitar a Baviera?", a: "Maio a junho e setembro a outubro têm o clima mais ameno. Dezembro é indicado para os mercados natalinos; final de setembro coincide com o início da Oktoberfest." },
      { q: "É preciso reservar com antecedência para Neuschwanstein?", a: "Sim, os ingressos esgotam rapidamente em alta temporada. Coordenamos a reserva junto ao planejamento do roteiro para evitar filas." },
      { q: "A Baviera é boa para quem gosta de trilhas?", a: "Sim, os Alpes bávaros oferecem desde caminhadas leves até trilhas mais técnicas próximas ao Zugspitze, com paisagens alpinas clássicas." },
      { q: "Vale combinar a Baviera com a Suíça ou a Áustria?", a: "Sim, os Alpes bávaros conectam-se naturalmente ao Tirol austríaco e à região dos lagos suíços, formando um roteiro alpino mais amplo." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-suica-alpes",
    continent: "Europa",
    country: "Suíça",
    region: "Alpes Suíços",
    slug: "europa/suica-alpes",
    name: "Suíça em Trens Panorâmicos",
    bestTime:
      "Jun–Set para trilhas e trens com vista aberta; Dez–Mar para esqui e vilarejos nevados. Maio e outubro têm paisagens de transição e menos gente.",
    tags: ["montanha", "trekking", "roadtrip", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a red panoramic train crossing a stone viaduct in the Swiss Alps surrounded by snow-capped peaks, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Poucos países tornaram o próprio deslocamento parte da experiência como a Suíça. A Create Travel constrói roteiros em torno dos grandes trens panorâmicos — Glacier Express, Bernina Express — combinados a vilarejos alpinos, lagos glaciais e a precisão suíça de hospitalidade que nunca decepciona.",
    highlights: [
      {
        title: "Glacier Express entre Zermatt e St. Moritz",
        story:
          "Oito horas de janelas panorâmicas cruzando cento e noventa e um túneis e trezentas pontes, com o Matterhorn surgindo no início e os Alpes da Engadina fechando o trajeto.",
      },
      {
        title: "Zermatt e o Matterhorn",
        story:
          "Uma vila sem carros a combustão, teleféricos que sobem até quase quatro mil metros e a pirâmide de granito mais fotografada dos Alpes recortando o céu ao amanhecer.",
      },
      {
        title: "Interlaken e a região de Jungfrau",
        story:
          "Entre os lagos Thun e Brienz, trens de cremalheira sobem até a estação ferroviária mais alta da Europa, cercada por geleiras eternas.",
      },
      {
        title: "Lucerna e a ponte da capela",
        story:
          "A ponte de madeira medieval sobre o rio Reuss, o monte Pilatus refletido no lago e a sensação de uma Suíça em miniatura, compacta e perfeita.",
      },
      {
        title: "Bernina Express até Tirano",
        story:
          "O trajeto atravessa a paisagem alpina até a fronteira italiana, cruzando o viaduto circular de Brusio e descendo entre vinhedos até os pomares da Valtellina.",
      },
    ],
    beyondUsual: [
      {
        title: "Vagão panorâmico privativo em trecho selecionado",
        story:
          "Um compartimento reservado só para o seu grupo, com champanhe servido enquanto os Alpes passam pela janela panorâmica de vidro curvo.",
      },
      {
        title: "Jantar em chalé de alta montanha acessível só a pé",
        story:
          "Uma trilha curta até um refúgio tradicional, fondue preparado na hora e o silêncio absoluto que só a altitude alpina proporciona.",
      },
      {
        title: "Spa termal com vista para geleiras",
        story:
          "Águas termais ao ar livre em pleno inverno, o vapor subindo contra o céu gelado e picos nevados emoldurando a experiência.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para a Suíça?", a: "De 6 a 8 noites permitem combinar dois ou três trens panorâmicos com estadias em Zermatt, Interlaken ou Lucerna sem pressa." },
      { q: "Vale a pena reservar assento no Glacier Express com antecedência?", a: "Sim, especialmente nos meses de verão. Os assentos com melhor vista esgotam rápido e coordenamos essa reserva dentro do planejamento geral." },
      { q: "Qual a melhor época para os trens panorâmicos suíços?", a: "Junho a setembro garante paisagens verdes e visibilidade máxima; dezembro a março oferece a paisagem nevada clássica, com trajetos igualmente espetaculares." },
      { q: "A Suíça é boa para quem não pratica esqui?", a: "Sim. Trens panorâmicos, spas termais, trilhas leves e gastronomia alpina oferecem uma imersão completa sem necessidade de esportes de inverno." },
      { q: "Vale combinar a Suíça com a Baviera ou a Itália do Norte?", a: "Sim. O Bernina Express já conecta naturalmente a Suíça ao norte da Itália; a Baviera fica a poucas horas de trem ou carro a partir de Zurique." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-paises-baixos",
    continent: "Europa",
    country: "Países Baixos",
    region: "Amsterdã e Campos de Tulipas",
    slug: "europa/paises-baixos",
    name: "Países Baixos em Bicicleta e Canais",
    bestTime:
      "Meados de Mar a Meados de Mai (tulipas em floração plena em abril). Jun–Ago traz dias longos e clima ameno para os canais.",
    tags: ["cultura", "roadtrip", "fotografia", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a canal in Amsterdam lined with narrow gabled houses at golden hour, reflections on the water, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Os Países Baixos condensam em um território pequeno uma das paisagens mais reconhecíveis do mundo: canais, moinhos, tulipas e uma tradição de museus que rivaliza com capitais bem maiores. A Create Travel monta uma imersão entre Amsterdã, os campos floridos e vilarejos de pescadores à beira do antigo Zuiderzee.",
    highlights: [
      {
        title: "Canais de Amsterdã ao entardecer",
        story:
          "Casas estreitas de fachada inclinada refletidas na água parada, uma embarcação privativa deslizando sob pontes iluminadas, e a cidade revelando por que é patrimônio da Unesco.",
      },
      {
        title: "Campos de tulipas em Keukenhof e arredores",
        story:
          "Faixas de cor organizadas como um quadro vivo, moinhos de vento girando ao fundo e o perfume doce que só a primavera holandesa produz nessa escala.",
      },
      {
        title: "Museu Van Gogh e Rijksmuseum",
        story:
          "A coleção mais completa do mundo sobre o pintor holandês, seguida pela Ronda Noturna de Rembrandt em tamanho real — dois séculos de arte holandesa em um único dia.",
      },
      {
        title: "Vilarejos tradicionais de Zaanse Schans e Giethoorn",
        story:
          "Moinhos de vento em atividade produzindo óleo e farinha como há séculos, e um vilarejo sem ruas para carros, onde os canais fazem as vezes de avenidas.",
      },
      {
        title: "Ciclovias entre polders e diques históricos",
        story:
          "Pedalar por terras conquistadas do mar, entre vacas pastando abaixo do nível do oceano e a engenharia hidráulica que define a identidade holandesa.",
      },
    ],
    beyondUsual: [
      {
        title: "Passeio de barco privativo pelos canais menos turísticos",
        story:
          "Rotas fora do circuito principal, entre casas-barco residenciais e pontes que os holandeses realmente usam no cotidiano.",
      },
      {
        title: "Visita a ateliê de lapidação de diamantes",
        story:
          "Uma tradição centenária de Amsterdã explicada por um lapidário, com a chance de ver o processo de perto antes de conhecer as peças acabadas.",
      },
      {
        title: "Jantar em fazenda de queijo artesanal",
        story:
          "Uma propriedade familiar produzindo gouda e edam à moda antiga, com degustação guiada pelo próprio produtor.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para os Países Baixos?", a: "De 4 a 5 noites cobrem Amsterdã, os campos de tulipas na temporada certa e um dia de vilarejos tradicionais sem pressa." },
      { q: "Qual a melhor época para ver as tulipas floridas?", a: "Meados de março a meados de maio, com pico geralmente em abril — mas a data exata varia conforme o clima do ano, e ajustamos o roteiro conforme a previsão de floração." },
      { q: "Os Países Baixos são bons para viagem em família?", a: "Sim. Ciclovias seguras, museus interativos e vilarejos compactos tornam a logística simples mesmo com crianças pequenas." },
      { q: "É fácil se locomover de bicicleta em Amsterdã?", a: "Sim, a infraestrutura cicloviária é uma das melhores do mundo, mas recomendamos orientação local nos primeiros trajetos para se adaptar ao fluxo intenso de ciclistas." },
      { q: "Vale combinar os Países Baixos com Bélgica?", a: "Sim, Bruxelas e Bruges ficam a menos de duas horas de trem de Amsterdã, permitindo uma extensão natural pelo Benelux." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-belgica-flandres",
    continent: "Europa",
    country: "Bélgica",
    region: "Flandres",
    slug: "europa/belgica-flandres",
    name: "Flandres Medieval",
    bestTime:
      "Abr–Jun e Set (clima ameno, cidades floridas ou em cores de outono). Dezembro traz mercados natalinos nas praças históricas.",
    tags: ["cultura", "gastronomia", "roadtrip", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Bruges canal at golden hour with medieval gabled houses and a stone bridge, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Flandres preservou intacto o auge comercial do norte da Europa medieval: guildas, canais, campanários e uma tradição de cerveja e chocolate transmitida por gerações. A Create Travel percorre Bruges, Gante e Antuérpia no ritmo de quem quer sentir a cidade além do cartão-postal.",
    highlights: [
      {
        title: "Bruges e seus canais medievais",
        story:
          "Uma cidade praticamente intacta desde o século XV, casas de tijolo debruçadas sobre a água, e o silêncio noturno quando os grupos de turistas já foram embora e restam só os moradores.",
      },
      {
        title: "Gante e o Cordeiro Místico",
        story:
          "O retábulo de Van Eyck, um dos marcos da pintura ocidental, exibido numa capela lateral da catedral de São Bavo — obra roubada e recuperada mais vezes do que qualquer outra da história da arte.",
      },
      {
        title: "Antuérpia e o distrito de diamantes",
        story:
          "A capital mundial da lapidação de diamantes, com uma catedral gótica onde Rubens pintou seus maiores trípticos e uma cena de moda contemporânea que renasceu nos anos 90.",
      },
      {
        title: "Cervejarias trapistas e de abadia",
        story:
          "Monges que ainda produzem cerveja segundo receitas seculares, servida em copos específicos para cada estilo, num ritual quase litúrgico de degustação.",
      },
      {
        title: "Ateliês de chocolate artesanal",
        story:
          "Um chocolatier de terceira geração moldando pralinés à mão, explicando a diferença entre o cacau belga tradicional e as criações contemporâneas da casa.",
      },
    ],
    beyondUsual: [
      {
        title: "Degustação privativa em abadia trapista",
        story:
          "Acesso a uma cervejaria monástica que raramente recebe visitantes, com explicação sobre o processo conduzida por quem vive na comunidade.",
      },
      {
        title: "Aula de chocolate com mestre chocolatier",
        story:
          "Uma manhã aprendendo técnicas de têmpera e moldagem, terminando com uma caixa de pralinés feita por você mesmo.",
      },
      {
        title: "Passeio noturno de barco pelos canais de Bruges",
        story:
          "Uma embarcação privativa sob as pontes iluminadas, quando a cidade medieval assume um silêncio quase cenográfico.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para a Flandres?", a: "De 4 a 5 noites permitem conhecer Bruges, Gante e Antuérpia com calma, incluindo degustações de cerveja e chocolate sem pressa." },
      { q: "Bruges ou Gante: qual visitar primeiro?", a: "Ambas se complementam: Bruges é mais compacta e cenográfica; Gante tem vida universitária pulsante e menos turismo de massa. Recomendamos incluir as duas." },
      { q: "A Flandres é boa para quem gosta de cerveja?", a: "Sim, é uma das regiões cervejeiras mais respeitadas do mundo, com tradição trapista reconhecida pela Unesco como patrimônio cultural imaterial." },
      { q: "Vale visitar a Flandres no inverno?", a: "Dezembro é especialmente encantador, com mercados natalinos nas praças históricas e iluminação que realça a arquitetura medieval." },
      { q: "Vale combinar a Flandres com os Países Baixos?", a: "Sim, Bruxelas e Amsterdã ficam a menos de duas horas de trem, formando um roteiro natural pelo Benelux." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-andorra-pirineus",
    continent: "Europa",
    country: "Andorra",
    region: "Pirineus",
    slug: "europa/andorra-pirineus",
    name: "Andorra nos Pirineus",
    bestTime:
      "Dez–Mar para esqui nas estações alpinas; Jun–Set para trekking e lagos glaciais. Maio e outubro têm paisagens de transição com pouca gente.",
    tags: ["montanha", "trekking", "bem-estar", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a glacial lake surrounded by Pyrenees peaks in Andorra at golden hour, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Encravado entre França e Espanha, o pequeno principado de Andorra guarda paisagens pirenaicas de rara intensidade: lagos glaciais, picos acima de dois mil e novecentos metros e vilarejos de pedra que resistem ao turismo de massa. A Create Travel constrói uma imersão de montanha longe das rotas óbvias dos Pirineus.",
    highlights: [
      {
        title: "Lagos glaciais de Tristaina",
        story:
          "Três lagos de água turquesa emoldurados por picos de granito, alcançados por trilha de dificuldade moderada — um cenário alpino que poucos brasileiros conhecem.",
      },
      {
        title: "Estações de esqui de Grandvalira",
        story:
          "Uma das maiores áreas esquiáveis do sul da Europa, com pistas para todos os níveis e vistas simultâneas para os Pirineus franceses e espanhóis.",
      },
      {
        title: "Vilarejos românicos de pedra",
        story:
          "Igrejas do século XII com afrescos preservados, pontes medievais estreitas sobre rios cristalinos, e a sensação de um tempo que parou entre montanhas.",
      },
      {
        title: "Caldea, termas urbanas nos Pirineus",
        story:
          "Um complexo termal contemporâneo com piscinas ao ar livre entre montanhas nevadas, vapor subindo contra o frio alpino em pleno inverno.",
      },
      {
        title: "Trilhas de trekking no Parque Natural da Vall de Sorteny",
        story:
          "Flora endêmica pirenaica, cabras selvagens observando de penhascos distantes, e trilhas que raramente cruzam outro caminhante em dia de semana.",
      },
    ],
    beyondUsual: [
      {
        title: "Esqui com instrutor privativo fora das pistas movimentadas",
        story:
          "Acesso a trechos menos concorridos de Grandvalira, com instrução personalizada para todos os níveis de experiência.",
      },
      {
        title: "Jantar em refúgio de montanha acessível por trilha curta",
        story:
          "Um refúgio tradicional pirenaico, lareira acesa e cozinha de montanha servida depois de uma caminhada ao entardecer.",
      },
      {
        title: "Observação de estrelas em altitude",
        story:
          "Andorra tem um dos céus mais límpidos do sul da Europa; noites claras revelam a Via Láctea a olho nu longe da poluição luminosa.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para Andorra?", a: "De 3 a 4 noites são suficientes para combinar trekking ou esqui com as termas de Caldea e os vilarejos históricos, sem pressa." },
      { q: "Andorra é um bom destino de esqui para brasileiros?", a: "Sim, Grandvalira tem pistas para todos os níveis, incluindo iniciantes, com infraestrutura moderna e menos fluxo do que os Alpes franceses ou suíços na alta temporada." },
      { q: "Qual a melhor época para trekking em Andorra?", a: "Junho a setembro, quando a neve derrete nos passos de montanha e os lagos glaciais ficam acessíveis por trilha." },
      { q: "Andorra é boa para quem busca destinos menos óbvios na Europa?", a: "Sim, é um dos principados menos visitados por turistas brasileiros, com paisagem pirenaica de nível internacional e infraestrutura de conforto elevada." },
      { q: "Vale combinar Andorra com Barcelona ou o sul da França?", a: "Sim. Barcelona fica a cerca de três horas de carro; Toulouse, na França, fica a pouco mais de duas horas, ambas conexões naturais para completar o roteiro." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "europa-monaco",
    continent: "Europa",
    country: "Mônaco",
    region: "Costa Azul",
    slug: "europa/monaco",
    name: "Mônaco e a Riviera",
    bestTime:
      "Mai–Jun e Set (clima ameno, temporada de eventos e regatas sem o calor de julho). Maio traz o Grande Prêmio de Fórmula 1.",
    tags: ["praia", "gastronomia", "cultura", "lua-de-mel"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Monte Carlo harbor at golden hour with yachts anchored and the hillside city rising behind, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Mônaco condensa em pouco mais de dois quilômetros quadrados uma das concentrações mais intensas de glamour, história e mar do Mediterrâneo. A Create Travel desenha uma imersão que vai além do Cassino e do Grande Prêmio — o principado tem palácio, museu oceanográfico centenário e vilarejos vizinhos que raramente entram no roteiro padrão.",
    highlights: [
      {
        title: "Porto de Monte Carlo e seus iates",
        story:
          "Uma marina que reúne algumas das embarcações mais notáveis do Mediterrâneo, com o Palácio Príncipal no alto do rochedo observando tudo como sempre observou.",
      },
      {
        title: "Cassino de Monte Carlo por dentro",
        story:
          "Os salões Belle Époque decorados a folha de ouro e afrescos, onde James Bond já apostou nas telas — e onde a arquitetura vale a visita mesmo para quem não joga.",
      },
      {
        title: "Museu Oceanográfico de Mônaco",
        story:
          "Fundado pelo Príncipe Albert I, com aquários que abrigam espécies mediterrâneas e tropicais, erguido literalmente sobre um penhasco à beira-mar.",
      },
      {
        title: "Palácio Principesco e a Cidade Velha",
        story:
          "A troca da guarda ao meio-dia, ruas medievais estreitas que sobrevivem ao lado dos arranha-céus modernos, e a vista privilegiada sobre toda a Riviera.",
      },
      {
        title: "Èze e os vilarejos suspensos da Riviera",
        story:
          "Um vilarejo medieval esculpido na rocha a poucos minutos de Mônaco, com jardim exótico de cactos suspenso a quatrocentos metros sobre o Mediterrâneo.",
      },
    ],
    beyondUsual: [
      {
        title: "Passeio de iate privativo pela Costa Azul",
        story:
          "Saindo de Monte Carlo rumo a Cap-Ferrat e Villefranche-sur-Mer, com águas de um azul quase artificial e paradas para mergulho em enseadas privadas.",
      },
      {
        title: "Jantar com vista para o Grande Prêmio (fora de temporada)",
        story:
          "Visitar o circuito urbano de Fórmula 1 nos dias comuns, caminhando pelas mesmas curvas que os carros percorrem a mais de trezentos quilômetros por hora em maio.",
      },
      {
        title: "Perfumaria em Grasse, capital mundial do perfume",
        story:
          "A meia hora de Mônaco, ateliês centenários onde é possível criar uma fragrância assinada sob a orientação de um mestre perfumista (nez).",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para Mônaco?", a: "De 2 a 3 noites são suficientes para o principado; a maioria dos visitantes combina com a Riviera Francesa para completar de 5 a 7 dias na região." },
      { q: "Vale ir a Mônaco durante o Grande Prêmio?", a: "É uma experiência única para apaixonados por automobilismo, mas a cidade fica extremamente concorrida e os valores de hospedagem sobem significativamente. Fora dessa semana, a experiência é mais tranquila e igualmente rica." },
      { q: "Mônaco é bom para lua de mel?", a: "Sim, especialmente combinado a um passeio de iate privativo e jantares com vista para o porto — o glamour do principado tem apelo romântico natural." },
      { q: "É preciso passaporte para entrar em Mônaco?", a: "Não há fronteira formal vindo da França; o principado integra a zona de livre circulação, mas recomendamos sempre portar documento de identificação." },
      { q: "Vale combinar Mônaco com a Riviera Francesa e a Itália?", a: "Sim. Nice, Cannes e Èze ficam a poucos minutos; Sanremo, na Itália, fica a menos de uma hora de carro, permitindo estender o roteiro por duas costas." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
];
