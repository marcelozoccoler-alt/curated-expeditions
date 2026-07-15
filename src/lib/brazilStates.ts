// Brazilian states with destination mapping for hierarchical navigation:
// Brasil → Estados → Destinos do estado → Roteiro

import amazonasImg from "@/assets/states/amazonas.jpg";
import paraImg from "@/assets/states/para.jpg";
import roraimaImg from "@/assets/states/roraima.jpg";
import tocantinsImg from "@/assets/states/tocantins.jpg";
import maranhaoImg from "@/assets/states/maranhao.jpg";
import piauiImg from "@/assets/states/piaui.jpg";
import cearaImg from "@/assets/states/ceara.jpg";
import rioGrandeDoNorteImg from "@/assets/states/rio-grande-do-norte.jpg";
import paraibaImg from "@/assets/states/paraiba.jpg";
import pernambucoImg from "@/assets/states/pernambuco.jpg";
import alagoasImg from "@/assets/states/alagoas.jpg";
import bahiaImg from "@/assets/states/bahia.jpg";
import sergipeImg from "@/assets/states/sergipe.jpg";
import matoGrossoImg from "@/assets/states/mato-grosso.jpg";
import matoGrossoDoSulImg from "@/assets/states/mato-grosso-do-sul.jpg";
import goiasImg from "@/assets/states/goias.jpg";
import rioDeJaneiroImg from "@/assets/states/rio-de-janeiro.jpg";
import saoPauloImg from "@/assets/states/sao-paulo.jpg";
import espiritoSantoImg from "@/assets/states/espirito-santo.jpg";
import minasGeraisImg from "@/assets/states/minas-gerais.jpg";
import paranaImg from "@/assets/states/parana.jpg";
import santaCatarinaImg from "@/assets/states/santa-catarina.jpg";
import rioGrandeDoSulImg from "@/assets/states/rio-grande-do-sul.jpg";

export type Macroregion =
  | "Norte"
  | "Nordeste"
  | "Centro-Oeste"
  | "Sudeste"
  | "Sul";

export interface BrazilStateFAQ {
  q: string;
  a: string;
}

export interface BrazilStateSection {
  title: string;
  body: string;
}

export interface BrazilState {
  slug: string;
  uf: string; // sigla
  name: string;
  macroregion: Macroregion;
  kicker: string;
  intro: string;
  metaDescription: string;
  heroImageUrl: string;
  /** Destination slugs (from destinations.ts) that belong to this state */
  destinationSlugs: string[];
  /** Optional long-form SEO content — rendered only when present. */
  longIntro?: string;
  whatToDo?: BrazilStateSection[];
  bestTime?: string;
  howToGet?: string;
  whereToStay?: string;
  faqs?: BrazilStateFAQ[];
}

export const brazilStates: BrazilState[] = [
  // ===== NORTE =====
  {
    slug: "amazonas",
    uf: "AM",
    name: "Amazonas",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "O coração da maior floresta tropical do planeta. Lodges sobre o Rio Negro, encontro das águas e silêncio que só Anavilhanas oferece.",
    metaDescription:
      "Destinos no Amazonas com curadoria Create Travel: Anavilhanas, Manaus e Rio Negro.",
    heroImageUrl: amazonasImg,
    destinationSlugs: [
      "brasil/amazonia/anavilhanas",
      "brasil/amazonia/manaus-rio-negro",
      "brasil/amazonia/mamiraua-uacari",
      "brasil/amazonia/katerre",
      "brasil/amazonia/festival-parintins",
    ],
  },
  {
    slug: "para",
    uf: "PA",
    name: "Pará",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "Da Amazônia urbana de Belém às praias de água doce de Alter do Chão e o universo cultural da Ilha de Marajó.",
    metaDescription:
      "Destinos no Pará com curadoria Create Travel: Alter do Chão, Belém e Marajó.",
    heroImageUrl: paraImg,
    destinationSlugs: [
      "brasil/amazonia/alter-do-chao",
      "brasil/amazonia/belem-marajo",
      "brasil/amazonia/kaiara-alter-do-chao",
      "brasil/amazonia/festival-caire",
    ],
  },
  {
    slug: "tocantins",
    uf: "TO",
    name: "Tocantins",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "Cerrado dramático com cachoeiras, fervedouros e dunas alaranjadas no Jalapão — e o Parque do Cantão, onde Amazônia, Cerrado e Pantanal se encontram.",
    metaDescription:
      "Tocantins com curadoria Create Travel: Jalapão e Parque Estadual do Cantão.",
    heroImageUrl: tocantinsImg,
    destinationSlugs: ["brasil/jalapao", "brasil/tocantins/parque-cantao"],
  },
  {
    slug: "roraima",
    uf: "RR",
    name: "Roraima",
    macroregion: "Norte",
    kicker: "Norte • Brasil",
    intro:
      "Tepuis pré-cambrianos, savana aberta e o icônico Monte Roraima — um dos trekkings mais espetaculares da América do Sul.",
    metaDescription:
      "Roraima com curadoria Create Travel: Monte Roraima e travessia de tepuis.",
    heroImageUrl: roraimaImg,
    destinationSlugs: ["brasil/monte-roraima"],
  },

  // ===== NORDESTE =====
  {
    slug: "maranhao",
    uf: "MA",
    name: "Maranhão",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Dunas brancas, lagoas azuis e vilarejos isolados. Os Lençóis Maranhenses são paisagem única no mundo.",
    metaDescription:
      "Maranhão com curadoria Create Travel: Lençóis Maranhenses, Atins e Caburé.",
    heroImageUrl: maranhaoImg,
    destinationSlugs: ["brasil/lencois-maranhenses", "brasil/chapada-das-mesas"],
  },
  {
    slug: "piaui",
    uf: "PI",
    name: "Piauí",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Serra da Capivara: arte rupestre milenar, cânions e silêncio. Patrimônio Mundial em sertão raro de ver.",
    metaDescription:
      "Piauí com curadoria Create Travel: Serra da Capivara e arte rupestre.",
    heroImageUrl: piauiImg,
    destinationSlugs: ["brasil/nordeste/serra-da-capivara"],
  },
  {
    slug: "ceara",
    uf: "CE",
    name: "Ceará",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Vento, dunas e o azul das lagoas. Jericoacoara e a Rota das Emoções definem um Nordeste autêntico e contemplativo.",
    metaDescription:
      "Ceará com curadoria Create Travel: Jericoacoara, Rota das Emoções e curadoria do litoral cearense.",
    heroImageUrl: cearaImg,
    destinationSlugs: [
      "brasil/litoral-cearense",
      "brasil/jericoacoara",
      "brasil/nordeste/rota-das-emocoes",
      "brasil/nordeste/rota-falesias-fortaleza-natal",
    ],
  },
  {
    slug: "rio-grande-do-norte",
    uf: "RN",
    name: "Rio Grande do Norte",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Pipa, Maracajaú e Galinhos: falésias avermelhadas, mar verde e vilas isoladas no Nordeste mais ventoso do Brasil.",
    metaDescription:
      "Pacote de viagem para o Rio Grande do Norte com curadoria Create Travel: Pipa, Praia da Pipa, Galinhos, Maracajaú e Natal. Roteiros sob medida, hospedagens autorais e suporte 24/7.",
    heroImageUrl: rioGrandeDoNorteImg,
    destinationSlugs: [
      "brasil/litoral-rio-grande-do-norte",
      "brasil/nordeste/rota-falesias-fortaleza-natal",
    ],
    longIntro:
      "Um pacote de viagem para o Rio Grande do Norte revela um Nordeste diferente do circuito clássico. O litoral potiguar combina Pipa — a vila-praia mais desejada do sul do estado, com falésias vermelhas e golfinhos — Natal e seus passeios de buggy nas dunas, Maracajaú e suas piscinas naturais, e o norte quase deserto de Galinhos e São Miguel do Gostoso, capital brasileira do kitesurf. Na Create Travel desenhamos roteiros sob medida pelo RN unindo a energia de Pipa, o descanso das vilas do norte e experiências privativas nas dunas e falésias, no ritmo certo para casais, famílias e grupos de amigos.",
    whatToDo: [
      {
        title: "Praia da Pipa e Tibau do Sul",
        body: "Baía dos Golfinhos, Praia do Amor, Chapadão, mirantes ao pôr do sol e pousadas-boutique escondidas na mata atlântica. Passeios de barco privativo para avistamento de golfinhos e tartarugas.",
      },
      {
        title: "Natal e passeios de buggy",
        body: "Genipabu, Jacumã, esquibunda nas dunas, travessias de balsa e o pôr do sol na Ponta Negra. Base logística para todo o estado, com o Aeroporto Internacional de São Gonçalo do Amarante.",
      },
      {
        title: "Maracajaú e parrachos",
        body: "Piscinas naturais formadas por corais a 7 km da costa, ideais para snorkel em águas cristalinas. Passeio de meio dia que combina bem com base em Natal.",
      },
      {
        title: "Galinhos e São Miguel do Gostoso",
        body: "O norte potiguar quase intocado: vilas de pescadores, dunas móveis, salinas e a melhor janela de vento do Brasil para kitesurf (agosto a janeiro).",
      },
      {
        title: "Rota das Falésias Fortaleza–Natal",
        body: "Roteiro autoral pela costa entre os dois estados: Canoa Quebrada, Praia de Ponta Grossa, Icapuí, Tibau, Baía Formosa e Pipa. Ideal para 8 a 10 noites de carro com motorista.",
      },
    ],
    bestTime:
      "A melhor época para visitar o Rio Grande do Norte é de setembro a fevereiro — período seco, sol constante, mar mais calmo e ventos alísios estáveis (bom para kitesurf no norte). De março a julho ocorrem as chuvas: mais concentradas em abril e maio, geralmente à noite, com dias ainda ensolarados. Setembro combina baixa temporada, clima seco e preços melhores. Dezembro e janeiro (alta temporada, Réveillon em Pipa) exigem reserva com 4 a 6 meses de antecedência.",
    howToGet:
      "O acesso é pelo Aeroporto Internacional Governador Aluízio Alves (NAT), em São Gonçalo do Amarante, a 40 minutos de Natal e 1h30 de Pipa. Voos diretos das principais capitais brasileiras (SP, RJ, BSB, POA, REC, FOR, BEL). Para o norte (Galinhos, São Miguel do Gostoso), o deslocamento é de 2h30 a 3h de Natal. Organizamos transfers privativos, motorista bilíngue e, para grupos, deslocamentos rodoviários.",
    whereToStay:
      "Em Pipa indicamos pousadas-boutique com vista para o mar e refúgios na mata atlântica de Tibau do Sul. Em Natal, hotéis frente-mar na Ponta Negra para uma ou duas noites de logística. Em São Miguel do Gostoso, pousadas pé-na-areia com estrutura para kitesurf. Em Galinhos, hospedagens rústico-charme para desconexão total. Toda a seleção é feita a partir do briefing — sem hotéis de cadeia genérica.",
    faqs: [
      {
        q: "Quantos dias ficar no Rio Grande do Norte?",
        a: "Para Pipa + Natal, 5 a 7 noites. Roteiro completo com Pipa, Natal e norte (Galinhos ou São Miguel), 8 a 10 noites. A Rota das Falésias unindo Fortaleza e Natal pede 10 a 12 noites.",
      },
      {
        q: "Qual a melhor época para um pacote de viagem no Rio Grande do Norte?",
        a: "Setembro a fevereiro para sol pleno, mar calmo e ventos estáveis para kitesurf. Setembro e outubro combinam baixa temporada e clima ideal. Dezembro e janeiro concentram Réveillon e alta temporada — reserve com 4 a 6 meses de antecedência.",
      },
      {
        q: "Vale mais a pena ficar em Pipa ou em Natal?",
        a: "Pipa entrega vila-praia, gastronomia autoral e pousadas de charme — ideal para casais e desconexão. Natal funciona como base para buggy, Maracajaú e voos. Roteiros Create Travel geralmente combinam 1 noite em Natal (chegada) + 4 a 5 em Pipa + extensão opcional no norte.",
      },
      {
        q: "Precisa alugar carro no RN?",
        a: "Não é obrigatório. Em Pipa tudo é a pé ou de van, e os passeios em Natal são feitos com buggueiro credenciado. Para roteiros com o norte potiguar ou a Rota das Falésias, recomendamos motorista privativo em vez de aluguel — mais seguro e libera você da estrada.",
      },
      {
        q: "Como funciona um pacote de viagem para o Rio Grande do Norte na Create Travel?",
        a: "Não vendemos pacotes prontos. A partir de uma conversa por WhatsApp levantamos período, perfil e ritmo desejado. Enviamos uma proposta sob medida com hospedagens, transfers privativos, buggy exclusivo, passeios de barco e suporte 24/7 durante toda a viagem — com um único travel designer do briefing ao pós-viagem.",
      },
      {
        q: "Pipa é seguro para famílias e casais?",
        a: "Sim. É uma das vilas-praia mais organizadas do Nordeste, com estrutura turística consolidada, boa oferta gastronômica e trânsito controlado. Reservamos pousadas em zonas seguras e mantemos suporte por WhatsApp durante toda a estadia.",
      },
    ],
  },
  {
    slug: "paraiba",
    uf: "PB",
    name: "Paraíba",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Coqueirinho, Tambaba e o ponto mais oriental das Américas: um litoral pequeno, charmoso e ainda discreto.",
    metaDescription:
      "Paraíba com curadoria Create Travel: Coqueirinho, Tambaba e litoral paraibano.",
    heroImageUrl: paraibaImg,
    destinationSlugs: ["brasil/litoral-paraibano"],
  },
  {
    slug: "pernambuco",
    uf: "PE",
    name: "Pernambuco",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "De Fernando de Noronha ao litoral sul com Porto de Galinhas e Carneiros — mar transparente e história.",
    metaDescription:
      "Pernambuco com curadoria Create Travel: Fernando de Noronha e litoral pernambucano.",
    heroImageUrl: pernambucoImg,
    destinationSlugs: [
      "brasil/fernando-de-noronha",
      "brasil/litoral-pernambucano",
    ],
  },
  {
    slug: "alagoas",
    uf: "AL",
    name: "Alagoas",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Maragogi, Milagres e Patacho: piscinas naturais e vilas charmosas no Caribe brasileiro.",
    metaDescription:
      "Alagoas com curadoria Create Travel: Maragogi, São Miguel dos Milagres e litoral alagoano.",
    heroImageUrl: alagoasImg,
    destinationSlugs: ["brasil/litoral-alagoano"],
  },
  {
    slug: "bahia",
    uf: "BA",
    name: "Bahia",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "Da Chapada Diamantina à península de Maraú, passando por Salvador, Boipeba e todo o litoral baiano.",
    metaDescription:
      "Bahia com curadoria Create Travel: Chapada Diamantina, Salvador, Boipeba, Maraú e litoral baiano.",
    heroImageUrl: bahiaImg,
    destinationSlugs: [
      "brasil/chapada-diamantina",
      "brasil/nordeste/salvador",
      "brasil/nordeste/boipeba",
      "brasil/nordeste/marau",
      "brasil/litoral-baiano",
      "brasil/bahia/abrolhos-costa-descobrimento",
      "brasil/nordeste/canyons-xingo",
    ],
  },
  {
    slug: "sergipe",
    uf: "SE",
    name: "Sergipe",
    macroregion: "Nordeste",
    kicker: "Nordeste • Brasil",
    intro:
      "O São Francisco em sua forma mais cinematográfica: paredões de até 80 metros nos Cânions do Xingó.",
    metaDescription:
      "Sergipe com curadoria Create Travel: Cânions do Xingó e São Francisco.",
    heroImageUrl: sergipeImg,
    destinationSlugs: ["brasil/nordeste/canyons-xingo"],
  },

  // ===== CENTRO-OESTE =====
  {
    slug: "mato-grosso",
    uf: "MT",
    name: "Mato Grosso",
    macroregion: "Centro-Oeste",
    kicker: "Centro-Oeste • Brasil",
    intro:
      "Pantanal Norte para fotografar onças e a Amazônia meridional do Cristalino. Fauna abundante e logística cuidada.",
    metaDescription:
      "Mato Grosso com curadoria Create Travel: Pantanal Norte e Cristalino.",
    heroImageUrl: matoGrossoImg,
    destinationSlugs: [
      "brasil/pantanal/norte",
      "brasil/amazonia/cristalino",
      "brasil/mato-grosso/tres-ecossistemas",
      "brasil/mato-grosso/serra-do-roncador",
    ],
  },
  {
    slug: "mato-grosso-do-sul",
    uf: "MS",
    name: "Mato Grosso do Sul",
    macroregion: "Centro-Oeste",
    kicker: "Centro-Oeste • Brasil",
    intro:
      "Águas transparentes de Bonito, flutuações e grutas — e o Pantanal Sul para safáris de onça com infraestrutura sólida.",
    metaDescription:
      "Mato Grosso do Sul com curadoria Create Travel: Bonito e Pantanal Sul.",
    heroImageUrl: matoGrossoDoSulImg,
    destinationSlugs: ["brasil/bonito", "brasil/pantanal/sul"],
  },
  {
    slug: "goias",
    uf: "GO",
    name: "Goiás",
    macroregion: "Centro-Oeste",
    kicker: "Centro-Oeste • Brasil",
    intro:
      "Chapada dos Veadeiros: quartzo, água cristalina e céus extraordinários no coração do cerrado.",
    metaDescription:
      "Goiás com curadoria Create Travel: Chapada dos Veadeiros.",
    heroImageUrl: goiasImg,
    destinationSlugs: [
      "brasil/chapada-dos-veadeiros",
      "brasil/goias/pirenopolis",
    ],
  },

  // ===== SUDESTE =====
  {
    slug: "rio-de-janeiro",
    uf: "RJ",
    name: "Rio de Janeiro",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "A Cidade Maravilhosa e seu litoral: Búzios, Angra dos Reis, Paraty e Trindade. Sofisticação, natureza atlântica e cultura brasileira em um só estado.",
    metaDescription:
      "Pacote de viagem para o Rio de Janeiro com curadoria Create Travel: cidade do Rio, Búzios, Angra, Paraty e o litoral fluminense. Roteiros sob medida, hospedagens autorais e suporte 24/7.",
    heroImageUrl: rioDeJaneiroImg,
    destinationSlugs: [
      "brasil/sudeste/rio-de-janeiro",
      "brasil/litoral-rio-de-janeiro",
    ],
    longIntro:
      "Um pacote de viagem para o Rio de Janeiro pode ser muito mais do que Copacabana e Cristo Redentor. O estado combina a energia da capital carioca com dois litorais distintos — a Costa do Sol (Búzios, Arraial do Cabo, Cabo Frio) e a Costa Verde (Angra dos Reis, Ilha Grande, Paraty e Trindade) — além da Serra Fluminense, com Petrópolis, Itaipava e Teresópolis. Na Create Travel desenhamos roteiros pelo Rio de Janeiro sob medida, unindo cidade, praia e serra no ritmo certo para o seu perfil: casais em lua de mel, famílias com crianças, grupos de amigos ou viagens de comemoração.",
    whatToDo: [
      {
        title: "Cidade do Rio de Janeiro",
        body: "Cristo Redentor, Pão de Açúcar, Jardim Botânico, bairros de Santa Teresa e Lapa, praias de Ipanema e Leblon, museus como o MAR e o Museu do Amanhã, e experiências gastronômicas do casual ao autoral. Reservamos passeios sem fila e guias particulares.",
      },
      {
        title: "Búzios e Costa do Sol",
        body: "Pousadas-boutique, praias de águas cristalinas (Ferradura, João Fernandes, Azeda), passeios de escuna e a badalada Rua das Pedras. Ideal como extensão de 3 a 5 noites depois da cidade.",
      },
      {
        title: "Angra dos Reis e Ilha Grande",
        body: "365 ilhas na Costa Verde, day-charters em lanchas privativas, hospedagens pé-na-areia e a Lagoa Azul. Um contraste calmo em relação à intensidade do Rio.",
      },
      {
        title: "Paraty e Trindade",
        body: "Centro histórico colonial tombado pela UNESCO, cachoeiras da Serra da Bocaina, praias selvagens de Trindade e a rota do cachaça. Perfeito para quem busca cultura, natureza e ritmo lento.",
      },
      {
        title: "Serra Fluminense",
        body: "Petrópolis imperial, hotéis-fazenda em Itaipava e o Parque Nacional da Serra dos Órgãos em Teresópolis. Extensão elegante para o inverno.",
      },
    ],
    bestTime:
      "A melhor época para visitar o Rio de Janeiro depende do que você busca. De maio a outubro (outono e inverno) o clima é seco, temperaturas amenas (18–28 °C) e o mar mais calmo — ideal para trilhas, cidade e Serra Fluminense. De dezembro a março o verão é intenso (calor, praia cheia, chuvas rápidas de fim de tarde) e concentra Réveillon em Copacabana e o Carnaval carioca — reserve com 6 a 9 meses de antecedência. Junho e julho pegam o Festival Literário de Paraty (FLIP), e agosto tende a ser o mês mais estável para combinar cidade + Costa Verde.",
    howToGet:
      "O principal portão de entrada é o Aeroporto Internacional do Galeão (GIG), com voos diretos de todas as capitais brasileiras e conexões internacionais. O Aeroporto Santos Dumont (SDU) atende voos domésticos e fica no centro. Para o litoral: Búzios está a 2h30 de carro do Rio; Angra dos Reis a 2h30–3h; Paraty a 4h. Organizamos transfers privativos, aluguel de carro e, para grupos, deslocamentos rodoviários com motorista.",
    whereToStay:
      "No Rio, indicamos hotéis autorais em Ipanema, Leblon, Copacabana e Santa Teresa — do clássico de frente para o mar ao boutique urbano. Em Búzios, pousadas de charme na Ferradura e João Fernandes. Em Angra, resorts pé-na-areia e ilhas privativas. Em Paraty, casarões restaurados no centro histórico ou refúgios na mata atlântica. Toda a curadoria é feita a partir do briefing — não trabalhamos com hotéis de cadeia genérica.",
    faqs: [
      {
        q: "Quanto tempo ficar no Rio de Janeiro?",
        a: "Para a cidade, o ideal são 4 a 5 noites. Combinações comuns: Rio + Búzios (7–8 noites), Rio + Paraty (7 noites), Rio + Angra + Paraty (10 noites). Roteiros com Serra Fluminense pedem 1 ou 2 noites extras.",
      },
      {
        q: "Qual a melhor época para um pacote no Rio de Janeiro?",
        a: "Maio a outubro para clima seco, temperaturas amenas e mar calmo. Dezembro a março para verão pleno, Réveillon e Carnaval — nesses períodos reserve com 6 a 9 meses de antecedência. Agosto é o mês mais equilibrado para quem quer combinar cidade e litoral.",
      },
      {
        q: "O Rio de Janeiro é seguro para turistas?",
        a: "Sim, com os cuidados de qualquer grande cidade. Nos roteiros Create Travel usamos motoristas privativos, guias credenciados, hospedagens em bairros seguros (Zona Sul, Santa Teresa, Barra) e suporte 24/7 por WhatsApp durante toda a viagem.",
      },
      {
        q: "Vale a pena combinar o Rio com o litoral fluminense?",
        a: "Sim — é o formato mais pedido. A cidade entrega cultura, gastronomia e ícones; o litoral (Búzios, Angra, Paraty) entrega descanso, natureza e um ritmo diferente. A combinação faz a viagem parecer duas em uma.",
      },
      {
        q: "Como funciona um pacote de viagem para o Rio de Janeiro na Create Travel?",
        a: "Não vendemos pacotes prontos. A partir de uma conversa por WhatsApp levantamos período, perfil dos viajantes, ritmo e experiências desejadas. Enviamos uma proposta sob medida com hospedagens, transfers, passeios privativos e suporte durante a viagem. Você fala com um único travel designer do briefing ao pós-viagem.",
      },
      {
        q: "É melhor ficar em Copacabana, Ipanema ou Leblon?",
        a: "Leblon é o bairro mais tranquilo e sofisticado, com boa gastronomia. Ipanema equilibra praia, vida noturna e conveniência — nossa recomendação padrão. Copacabana tem mais opções de hotéis clássicos frente-mar e é ideal para primeira viagem. Santa Teresa entrega charme boêmio para quem prefere pousadas.",
      },
      {
        q: "Precisa de guia particular no Rio?",
        a: "Recomendamos para os primeiros dias — evita filas em Cristo/Pão de Açúcar, dá contexto histórico real (Santa Teresa, centro, favela pacificada) e libera você para aproveitar. Para praia e restaurantes, o guia deixa de ser necessário.",
      },
    ],
  },
  {
    slug: "sao-paulo",
    uf: "SP",
    name: "São Paulo",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "Muito além do litoral: a Mantiqueira de Campos do Jordão, a aventura de Brotas, o Circuito das Águas e o Vale Histórico caipira de Cunha e São Luiz do Paraitinga.",
    metaDescription:
      "São Paulo com curadoria Create Travel: litoral paulista, Campos do Jordão, Brotas, Circuito das Águas e Vale Histórico caipira.",
    heroImageUrl: saoPauloImg,
    destinationSlugs: [
      "brasil/litoral-sao-paulo",
      "brasil/mantiqueira-paulista",
      "brasil/brotas-aventura",
      "brasil/circuito-aguas-paulistas",
      "brasil/vale-historico-caipira",
    ],
  },
  {
    slug: "espirito-santo",
    uf: "ES",
    name: "Espírito Santo",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "Itaúnas, Guarapari e a moqueca capixaba: um litoral pouco explorado e cheio de personalidade.",
    metaDescription:
      "Espírito Santo com curadoria Create Travel: Itaúnas, Guarapari e litoral capixaba.",
    heroImageUrl: espiritoSantoImg,
    destinationSlugs: ["brasil/litoral-espirito-santo"],
  },
  {
    slug: "minas-gerais",
    uf: "MG",
    name: "Minas Gerais",
    macroregion: "Sudeste",
    kicker: "Sudeste • Brasil",
    intro:
      "Barroco mineiro, cerrado dramático, cavernas catedrais e a melhor gastronomia do Brasil. Da Estrada Real ao Peruaçu, com tempo para sentir.",
    metaDescription:
      "Minas Gerais com curadoria Create Travel: Estrada Real, Serra do Cipó, Canastra, Peruaçu, Cidades Históricas e Inhotim.",
    heroImageUrl: minasGeraisImg,
    destinationSlugs: [
      "brasil/minas-gerais/estrada-real",
      "brasil/minas-gerais/cidades-historicas-inhotim",
      "brasil/minas-gerais/serra-do-cipo",
      "brasil/minas-gerais/serra-da-canastra",
      "brasil/minas-gerais/cavernas-do-peruacu",
    ],
  },

  // ===== SUL =====
  {
    slug: "parana",
    uf: "PR",
    name: "Paraná",
    macroregion: "Sul",
    kicker: "Sul • Brasil",
    intro:
      "Cataratas do Iguaçu — uma das maravilhas naturais do planeta, com hospedagens dentro do parque nacional.",
    metaDescription:
      "Paraná com curadoria Create Travel: Cataratas do Iguaçu.",
    heroImageUrl: paranaImg,
    destinationSlugs: ["brasil/sul/cataratas-iguacu"],
  },
  {
    slug: "santa-catarina",
    uf: "SC",
    name: "Santa Catarina",
    macroregion: "Sul",
    kicker: "Sul • Brasil",
    intro:
      "Praia do Rosa, Florianópolis e Bombinhas: Mata Atlântica encontrando o mar com gastronomia açoriana.",
    metaDescription:
      "Santa Catarina com curadoria Create Travel: Praia do Rosa, Floripa e litoral catarinense.",
    heroImageUrl: santaCatarinaImg,
    destinationSlugs: ["brasil/litoral-santa-catarina"],
  },
  {
    slug: "rio-grande-do-sul",
    uf: "RS",
    name: "Rio Grande do Sul",
    macroregion: "Sul",
    kicker: "Sul • Brasil",
    intro:
      "Cânions dos Aparados da Serra: paredões dramáticos, trilhas suspensas e ar frio em um Brasil pouco visto.",
    metaDescription:
      "Rio Grande do Sul com curadoria Create Travel: Cânions do Sul e Aparados da Serra.",
    heroImageUrl: rioGrandeDoSulImg,
    destinationSlugs: ["brasil/sul/canions-do-sul"],
  },
];

export const MACROREGION_ORDER: Macroregion[] = [
  "Norte",
  "Nordeste",
  "Centro-Oeste",
  "Sudeste",
  "Sul",
];

export const getBrazilStateBySlug = (slug: string): BrazilState | undefined =>
  brazilStates.find((s) => s.slug === slug);

export const getBrazilStatesByMacroregion = (
  macro: Macroregion
): BrazilState[] => brazilStates.filter((s) => s.macroregion === macro);
