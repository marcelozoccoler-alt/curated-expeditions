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
      "Mar–Mai e Set–Nov (temperaturas amenas, laranjeiras em flor na primavera). O verão andaluz é intenso, com calor acima de 40°C no interior.",
    tags: ["cultura", "gastronomia", "cavalgadas", "festivais-folcloricos"],
    imageAiPrompt:
      "Ultra realistic editorial photo of the Alhambra palace courtyard at golden hour with reflecting pool and intricate Moorish arches, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "seville_placeholder_not_used_actually_empty",
    intro:
      "PLACEHOLDER",
    highlights: [],
    beyondUsual: [],
    stays: [],
    faq: [],
  }
];
