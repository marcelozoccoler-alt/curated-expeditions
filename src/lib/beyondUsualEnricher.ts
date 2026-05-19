/**
 * Enriquecedor de "Além do óbvio".
 *
 * Para cada item de beyondUsual que vem apenas como título curto (sem
 * `story`), gera automaticamente um parágrafo editorial — sensorial,
 * emocional e ancorado em palavras que pessoas realmente buscam no
 * Google e em plataformas de IA (ChatGPT, Gemini, Perplexity).
 *
 * Objetivo duplo:
 *  - despertar desejo e identificação com a curadoria Create Travel;
 *  - aparecer em buscas como "o que fazer em X", "experiências em X",
 *    "viagem sob medida em X", "roteiro autêntico em X".
 *
 * Importante: a função NUNCA inventa fatos específicos do destino.
 * Trabalha com sensações, valores de curadoria e palavras-chave de
 * intenção — seguro de aplicar a qualquer destino/hospedagem.
 */

export interface EnrichContext {
  placeName: string;
  region?: string;
  country?: string;
  kind?: "destino" | "hospedagem";
}

interface Template {
  /** palavras-gatilho no título (lower, sem acento) */
  match: RegExp;
  build: (title: string, ctx: EnrichContext, where: string) => string;
}

const stripAccents = (s: string) =>
  s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

const TEMPLATES: Template[] = [
  {
    match: /(fotograf|fotograf|foto |\bfoto\b|imagem)/,
    build: (title, _ctx, where) =>
      `Não é um passeio: é uma saída fotográfica desenhada para quem quer voltar com imagens autorais — não cartões-postais repetidos. ` +
      `Nosso travel designer alinha horário de luz, escolha de cenário e ritmo de deslocamento ${where} para que cada quadro tenha textura, atmosfera e narrativa. ` +
      `Vai com guia que entende composição, sabe esperar o momento e conhece os pontos que os roteiros prontos nunca alcançam. ` +
      `Se você procura por "o que fotografar ${where}", "melhores spots fotográficos ${where}" ou "viagem fotográfica sob medida", esta é a experiência que a Create Travel monta para o seu olhar.`,
  },
  {
    match: /(canoa|caiaqu|stand[\s-]?up|kayak|remad)/,
    build: (title, _ctx, where) =>
      `Remar em silêncio é outra forma de entrar na paisagem ${where}: sem motor, sem pressa, à altura da água. ` +
      `A curadoria Create Travel escolhe horário, trecho e guia para transformar a remada em escuta — você ouve o canto que vem da margem, vê o reflexo da floresta abrir caminho na proa e percebe rastros que de barco nunca veria. ` +
      `É a experiência ideal para quem busca "viagem de canoagem ${where}", "passeio silencioso ${where}" ou um roteiro sob medida que troque velocidade por presença.`,
  },
  {
    match: /(trilha|caminhada|hiking|trekking|caminhad)/,
    build: (title, _ctx, where) =>
      `Caminhar com guia naturalista ${where} é descobrir uma camada que o turismo convencional não acessa: o cheiro da mata depois da chuva, o rastro fresco que ninguém viu, a planta que cura e a que enfeitiça. ` +
      `Cada trilha é desenhada pela Create Travel no nível certo de esforço para o seu ritmo — sem aglomeração, com paradas que importam. ` +
      `Quem procura "trilhas ${where}", "o que fazer ${where}" ou "ecoturismo com curadoria" encontra aqui um roteiro sob medida que respeita o seu tempo e o do território.`,
  },
  {
    match: /(gastronom|sabor|culin|comida|chef|cozinh|degustaç|jantar|vinho|wine|enogastr|mercad)/,
    build: (title, _ctx, where) =>
      `Comer ${where} é entender a geografia no garfo: o que o solo dá, o que a comunidade pesca, o que a avó ensinou. ` +
      `Nossa curadoria abre portas que cardápios de hotel não abrem — mesa em casa de chef local, ingrediente nativo no auge da safra, encontro com produtor, lugar pequeno que ninguém te indicaria sem confiança. ` +
      `Se você procura "onde comer ${where}", "gastronomia autêntica ${where}" ou "experiência gastronômica sob medida", a Create Travel desenha a sequência certa para a sua viagem.`,
  },
  {
    match: /(cultura|saber|comunid|ribeirinh|ind[íi]gen|local|encontro|vivênci|vivenc|tradiç)/,
    build: (title, _ctx, where) =>
      `Encontros assim não se compram em balcão: nascem de relações que a Create Travel cultiva há anos com comunidades, mestres e guardiões de saberes ${where}. ` +
      `Você é recebido como visitante atento — não como turista de passagem — e ouve histórias que dão profundidade ao destino e contexto ao que vê. ` +
      `É a experiência de quem busca "turismo de base comunitária ${where}", "viagem com propósito" ou "roteiro autêntico ${where}" — desenhada com ética, consentimento e remuneração justa.`,
  },
  {
    match: /(bem[-\s]?estar|spa|yoga|medita|silenci|retir|wellness|sono|terma|banh)/,
    build: (title, _ctx, where) =>
      `É a parte da viagem que cuida de você: silêncio, ritmo lento e práticas escolhidas para reequilibrar corpo e cabeça ${where}. ` +
      `A Create Travel encaixa essa pausa no ponto certo do roteiro — depois de um deslocamento, antes de uma experiência intensa — para que descansar seja parte da curadoria, não acaso. ` +
      `Para quem pesquisa "viagem de bem-estar ${where}", "retiro ${where}" ou "roteiro relaxante sob medida", desenhamos uma jornada que devolve presença e descanso real.`,
  },
  {
    match: /(safari|safári|fauna|animais|vida selvag|wildlife|onça|aves|bird|pássar|baleia|tartarug|primat|elefant|gorila|leão)/,
    build: (title, _ctx, where) =>
      `Avistamento não é sorte: é horário, é guia, é ética. A Create Travel trabalha apenas com operadores ${where} que respeitam distância, leem comportamento e priorizam encontros reais — não cenas forçadas. ` +
      `Você sai em janelas de luz certas, com binóculo, conhecimento e silêncio do seu lado. ` +
      `É o que busca quem pesquisa "safari ${where}", "observação de fauna ${where}", "onde ver [animal] ${where}" ou um roteiro de vida selvagem desenhado sob medida — com conservação no centro da experiência.`,
  },
  {
    match: /(história|histor|patrim[ôo]ni|arquitet|museu|colonial|sítio|ru[íi]na|herança|herancas?)/,
    build: (title, _ctx, where) =>
      `Caminhar ${where} com um guia que entende o passado muda a viagem: cada fachada, cada pedra, cada nome de rua começa a contar uma história. ` +
      `A Create Travel seleciona quem conduz — historiador, arquiteto ou morador de longa data — e desenha o percurso em horários sem multidão. ` +
      `Para quem pesquisa "history tour ${where}", "passeio histórico ${where}", "patrimônio ${where}" ou um roteiro cultural sob medida, é a forma mais densa e elegante de entrar no destino.`,
  },
  {
    match: /(navega|barco|veleir|iate|catamar|crucei|river|rio)/,
    build: (title, _ctx, where) =>
      `Ver ${where} a partir da água muda completamente a escala da viagem: outra perspectiva, outras paradas, outro tempo. ` +
      `A Create Travel curadoria embarcação, rota e tripulação para que a navegação seja confortável e cheia de pequenos momentos — uma parada para banho, um pôr do sol no convés, um almoço em lugar que só chega de barco. ` +
      `É a escolha de quem busca "passeio de barco ${where}", "navegação ${where}" ou um roteiro náutico sob medida com o conforto e a privacidade certos.`,
  },
  {
    match: /(noite|noturn|estrel|astro|aurora|c[ée]u)/,
    build: (title, _ctx, where) =>
      `O destino muda à noite e poucos roteiros sabem aproveitar. ${where.charAt(0).toUpperCase()}${where.slice(1)} oferece um céu, uma fauna e um silêncio próprios depois do pôr do sol — e a Create Travel desenha a saída no horário certo, com o guia certo e o nível certo de aventura. ` +
      `Para quem busca "o que fazer à noite ${where}", "céu estrelado ${where}" ou um roteiro noturno sob medida, é uma daquelas experiências que volta na memória como ponto alto da viagem.`,
  },
  {
    match: /(privad|privac|exclus|vip|pr[íi]vat|reserva)/,
    build: (title, _ctx, where) =>
      `Privacidade real ${where} não é luxo decorativo — é tempo, espaço e atenção sob medida. ` +
      `A Create Travel reserva acesso, escolhe horários sem público e arranja uma equipe dedicada para que você viva o destino sem disputa de espaço. ` +
      `Quem pesquisa "experiência privativa ${where}", "viagem exclusiva ${where}" ou um roteiro VIP sob medida encontra aqui o nível de cuidado que torna cada momento, de fato, seu.`,
  },
  {
    match: /(família|familia|kids|criança|crianc|teen|infantil)/,
    build: (title, _ctx, where) =>
      `Viajar em família ${where} pede outro tipo de curadoria: ritmo certo, hospedagem que recebe bem todas as idades, experiências que conversam com adultos e crianças ao mesmo tempo. ` +
      `A Create Travel desenha pausas, distâncias e atividades para que ninguém fique cansado e todo mundo viva o destino. ` +
      `Para quem pesquisa "viagem em família ${where}", "o que fazer com crianças ${where}" ou um roteiro familiar sob medida, é a forma mais leve e memorável de levar todos juntos.`,
  },
  {
    match: /(desert|dunas|areia|oásis|oasis|berber|caravana)/,
    build: (title, _ctx, where) =>
      `O deserto ${where} é uma experiência de escala e silêncio que pede curadoria fina: chegar na hora certa, dormir no acampamento certo, sair com o guia certo. ` +
      `A Create Travel monta o trecho de deserto como ponto alto do roteiro — com transição confortável e tempo para vivê-lo de verdade, sem virar parada rápida. ` +
      `Para quem pesquisa "viagem ao deserto ${where}", "acampamento no deserto" ou um roteiro sob medida, é a forma de viver paisagem e silêncio com profundidade.`,
  },
  {
    match: /(mont[ãa]nh|cordilheir|pico|cume|trek|altitud|andes|himala|alpe)/,
    build: (title, _ctx, where) =>
      `Subir ${where} é mais do que paisagem: é ritmo, aclimatação e companhia certa. ` +
      `A Create Travel desenha o trecho com guias experientes, hospedagens nos pontos estratégicos e dias de respiro para que a montanha seja vivida — não sofrida. ` +
      `Quem pesquisa "trekking ${where}", "viagem de altitude ${where}" ou um roteiro de montanha sob medida encontra aqui o equilíbrio entre desafio e contemplação.`,
  },
  {
    match: /(praia|mar|oceano|costa|litoral|snorkel|mergulh|diving|coral)/,
    build: (title, _ctx, where) =>
      `A costa ${where} muda totalmente conforme onde você dorme, em que horário sai ao mar e com quem. ` +
      `A Create Travel escolhe a praia certa para o seu perfil, organiza saídas privadas e abre acesso a trechos pouco visitados — para que o azul seja experiência, não pano de fundo. ` +
      `Para quem busca "melhores praias ${where}", "passeio de barco ${where}" ou um roteiro de praia sob medida, é a forma mais elegante de viver o mar.`,
  },
  {
    match: /(amanhec|nascer|alvorad|amanhe)/,
    build: (title, _ctx, where) =>
      `O melhor de ${where} acontece antes das 8h. Levantar cedo aqui é privilégio: luz dourada, silêncio, fauna ativa, lugares vazios. ` +
      `A Create Travel posiciona hospedagem e guia para que a saída ao amanhecer seja simples — café preparado, transporte na hora, ponto exato no melhor momento. ` +
      `Para quem pesquisa "amanhecer ${where}", "nascer do sol ${where}" ou um roteiro contemplativo sob medida, é o momento que volta na memória como o ponto alto da viagem.`,
  },
  {
    match: /(p[ôo]r do sol|sunset|entardec|crep[úu]scul)/,
    build: (title, _ctx, where) =>
      `Pôr do sol ${where} pede mais do que ponto turístico cheio: pede o lugar certo, na hora certa, com a companhia certa. ` +
      `A Create Travel reserva o mirante, a embarcação ou a mesa que transforma o entardecer em ritual — taça nas mãos, silêncio respeitado, fotografia possível. ` +
      `Para quem pesquisa "melhor pôr do sol ${where}" ou um roteiro contemplativo sob medida, é a curadoria que faz o fim do dia virar lembrança definitiva.`,
  },
];

const fallback = (title: string, _ctx: EnrichContext, where: string): string =>
  `Não está em guia comum — está aqui porque a Create Travel testou, validou e curadoria de verdade significa abrir caminhos que ninguém mais abre ${where}. ` +
  `Cada detalhe — horário, guia, acesso, ritmo — é desenhado para o seu briefing, com o cuidado de quem entende que viagem boa é viagem sob medida. ` +
  `Para quem pesquisa "o que fazer ${where}", "experiências autênticas ${where}", "viagem com curadoria" ou "roteiro sob medida ${where}", esta é uma daquelas escolhas que viram história contada por anos depois.`;

/**
 * Gera (ou apenas devolve, se já existir) o storytelling rico de um
 * item de "Além do óbvio".
 *
 * @param title título do item (ex.: "Canoagem de escuta ao amanhecer")
 * @param ctx contexto do destino/hospedagem
 * @returns parágrafo único pronto para renderizar
 */
export const enrichBeyondUsualStory = (
  title: string,
  ctx: EnrichContext
): string => {
  const where = ctx.placeName
    ? `em ${ctx.placeName}`
    : ctx.region
      ? `em ${ctx.region}`
      : "no destino";
  const normalized = stripAccents(title);
  const tpl = TEMPLATES.find((t) => t.match.test(normalized));
  return (tpl ? tpl.build(title, ctx, where) : fallback(title, ctx, where));
};
