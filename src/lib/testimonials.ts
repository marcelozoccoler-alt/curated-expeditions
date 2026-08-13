/**
 * Depoimentos e histórias de viagem.
 *
 * IMPORTANTE — integridade do conteúdo:
 * Os textos abaixo foram escritos como MODELO editorial (rascunho), no tom e na
 * estrutura desejados, para serem substituídos pelos depoimentos reais dos
 * viajantes (com autorização de uso de nome, cidade e foto).
 *
 * Enquanto `TESTIMONIALS_DRAFT` for `true`, a página exibe um aviso discreto de
 * conteúdo em revisão e NÃO emite dados estruturados de Review/AggregateRating
 * (marcar avaliação não verificada é penalizado pelo Google e quebra a
 * confiança do leitor). Ao trocar por depoimentos reais e autorizados,
 * mude para `false`.
 */
import luanaCapadociaBaloes from "@/assets/depoimentos/luana-capadocia-baloes.jpeg.asset.json";
import luanaSantoriniFira from "@/assets/depoimentos/luana-santorini-fira.jpeg.asset.json";
import luanaSantoriniPoente from "@/assets/depoimentos/luana-santorini-poente.jpeg.asset.json";
import luanaGreciaEnseada from "@/assets/depoimentos/luana-grecia-enseada.jpeg.asset.json";
import luanaJerusalem from "@/assets/depoimentos/luana-jerusalem-monte-oliveiras.jpeg.asset.json";
import luanaJaffa from "@/assets/depoimentos/luana-jaffa-antiga.jpeg.asset.json";
import luanaSuicaBlausee from "@/assets/depoimentos/luana-suica-blausee.jpeg.asset.json";
import luanaSuicaNeve from "@/assets/depoimentos/luana-suica-neve.jpeg.asset.json";
import luanaParisEiffel from "@/assets/depoimentos/luana-paris-torre-eiffel.jpeg.asset.json";
import luanaPetiteFrance from "@/assets/depoimentos/luana-franca-petite-france.jpeg.asset.json";
import luanaSantaSofia from "@/assets/depoimentos/luana-istambul-santa-sofia.jpeg.asset.json";
import luanaMesquitaAzul from "@/assets/depoimentos/luana-istambul-mesquita-azul.jpeg.asset.json";
import luanaCapadociaTerraco from "@/assets/depoimentos/luana-capadocia-vestido-terraco.jpeg.asset.json";
import luanaCapadociaVoo from "@/assets/depoimentos/luana-capadocia-voo-balao.jpeg.asset.json";

export const TESTIMONIALS_DRAFT = true;

export interface TestimonialPhoto {
  /** Caminho da imagem (ex.: importada de src/assets/depoimentos/...) ou URL. */
  src: string;
  /** Legenda curta (até 12 palavras) — pronta para galeria e redes sociais. */
  caption: string;
  alt: string;
}

export interface Testimonial {
  slug: string;
  /** Título curto que captura a essência da experiência. */
  title: string;
  author: string;
  city: string;
  /** Lua de mel, família, solo, aniversário, executiva… */
  tripType: string;
  destination: string;
  month: string;
  /** Depoimento em primeira pessoa, 80–150 palavras. */
  quote: string;
  /** Bastidor assinado por Marcelo Zoccoler — informativo, sem superlativos. */
  note: string;
  /** Narrativa sensorial das fotos (60–100 palavras). */
  photoStory: string;
  /** Fotos reais da viagem. Vazio = galeria em aberto, aguardando envio. */
  photos: TestimonialPhoto[];
  /** Sugestões de legenda para as fotos que ainda serão enviadas. */
  suggestedCaptions: string[];
  /** Ordem narrativa sugerida para a sequência de fotos. */
  photoDirection: string;
  /** true = depoimento real, autorizado pela viajante, com fotos originais. */
  verified?: boolean;
  /** Anos de relacionamento / destinos acumulados — só para depoimentos reais. */
  since?: string;
  /** Destinos já viajados com a Create Travel. */
  countries?: string[];
}

export const testimonials: Testimonial[] = [
  {
    slug: "luana-santos-cinco-viagens",
    title: "Cinco viagens depois, eu não sei mais planejar sozinha",
    author: "Luana Santos",
    city: "São Paulo, SP",
    tripType: "Viajante recorrente desde 2022",
    destination: "França, Grécia, Turquia, Israel e Suíça",
    month: "2022 a 2026",
    verified: true,
    since: "Viaja com a Create Travel desde 2022",
    countries: ["França", "Grécia", "Turquia", "Israel", "Suíça"],
    quote:
      "Eu cheguei na Create Travel por indicação, meio desconfiada, com a França na cabeça e uma lista de coisas que eu não queria: fila, ônibus cheio, roteiro de vitrine. Voltei de lá com a sensação de que alguém tinha pensado no meu dia antes de mim — o carro no horário certo, a reserva já feita no restaurante que eu tinha comentado de passagem, o hotel na rua que fazia sentido para o que eu queria caminhar. Depois vieram a Grécia, a Turquia, Israel e a Suíça. Em cada uma delas o cuidado apareceu no detalhe pequeno: o balão da Capadócia remarcado por causa do vento, sem eu precisar correr atrás; o guia em Jerusalém que entendeu que eu queria história, não roteiro decorado; o dia livre em Santorini que eles insistiram para eu manter — e virou a minha lembrança preferida. Hoje eu não sei mais planejar viagem sozinha. E não quero.",
    note:
      "A Luana viaja com a gente desde 2022 e cada roteiro foi desenhado a partir do anterior: aprendemos que ela detesta acordar cedo dois dias seguidos, que prefere duas noites a mais no mesmo hotel a somar cidades, e que fotografa muito — o que muda a escolha de horário e de lugar. O balão na Capadócia foi remanejado porque acompanhamos o boletim de vento com o operador local desde a véspera; em Israel trocamos o guia por um historiador para o dia em Jerusalém. É esse histórico acumulado que torna a quinta viagem mais precisa que a primeira. — Marcelo Zoccoler",
    photoStory:
      "As fotos da Luana contam a mesma viagem em cinco climas. Na Capadócia, o azul de antes do amanhecer com os balões inflando ainda no chão, o vestido vermelho aberto sobre os tapetes do terraço e, depois, o vale visto de dentro do cesto. Em Paris, a Torre Eiffel de baixo para cima em pleno verão; na Alsácia, a Petite France com as casas enxaimel refletidas no canal. Em Istambul, Santa Sofia atrás dos jardins e a Mesquita Azul recortando o céu. Em Santorini, a luz do fim de tarde batendo de lado e o mar de Fira lá embaixo. Em Jerusalém, o dourado do Domo ao fundo. E na Suíça, a água verde do Blausee sob a neve — e o riso dela na nevasca, a foto menos posada e a mais verdadeira do conjunto.",
    photos: [
      {
        src: luanaCapadociaTerraco.url,
        caption: "Capadócia: o vestido vermelho e os balões ainda no céu",
        alt: "Luana Santos de vestido vermelho longo em terraço com tapetes turcos, chaminés de fada e balões ao amanhecer na Capadócia, Turquia",
      },
      {
        src: luanaCapadociaVoo.url,
        caption: "Dentro do cesto, com o vale inteiro embaixo",
        alt: "Luana Santos sorrindo dentro do cesto de um balão em voo sobre o vale da Capadócia, com outros balões ao fundo",
      },
      {
        src: luanaParisEiffel.url,
        caption: "Paris: a Torre Eiffel vista de baixo, no verão",
        alt: "Luana Santos de vestido verde diante da Torre Eiffel, fotografada de baixo para cima com céu azul, em Paris",
      },
      {
        src: luanaPetiteFrance.url,
        caption: "Petite France: canal, enxaimel e fim de tarde",
        alt: "Luana Santos de vestido vermelho sentada em terraço às margens do canal da Petite France, em Estrasburgo, com casas enxaimel ao fundo",
      },
      {
        src: luanaSantaSofia.url,
        caption: "Istambul: Santa Sofia atrás dos jardins",
        alt: "Luana Santos em pé nos jardins do Sultanahmet com a basílica de Santa Sofia ao fundo, em Istambul, Turquia",
      },
      {
        src: luanaMesquitaAzul.url,
        caption: "A Mesquita Azul recortando o céu de manhã",
        alt: "Luana Santos com óculos de sol e a Mesquita Azul e seus minaretes ao fundo, em Istambul, Turquia",
      },
      {
        src: luanaSantoriniPoente.url,
        caption: "Santorini, o poente que ninguém apressa",
        alt: "Luana Santos de vestido vermelho e chapéu observando o sol se pôr sobre a caldeira de Santorini, Grécia",
      },
      {
        src: luanaCapadociaBaloes.url,
        caption: "Capadócia: os balões antes de a cidade acordar",
        alt: "Luana Santos de vestido vermelho longo com os braços erguidos diante de balões inflando ao amanhecer na Capadócia, Turquia",
      },
      {
        src: luanaSuicaBlausee.url,
        caption: "Blausee: a água verde sob a primeira neve",
        alt: "Luana Santos junto à cerca de madeira do lago Blausee, com floresta nevada e água esverdeada ao fundo, Suíça",
      },
      {
        src: luanaJerusalem.url,
        caption: "Jerusalém vista do Monte das Oliveiras",
        alt: "Luana Santos sentada em mirante do Monte das Oliveiras com a Cidade Velha de Jerusalém e o Domo da Rocha ao fundo, Israel",
      },
      {
        src: luanaSantoriniFira.url,
        caption: "Fira inteira lá embaixo, no fim da tarde",
        alt: "Luana Santos de vestido vermelho em terraço branco com as casas de Fira, em Santorini, ao fundo",
      },
      {
        src: luanaJaffa.url,
        caption: "Jaffa antiga: pedra amarela e escadas sem pressa",
        alt: "Luana Santos nas escadas de pedra da entrada da cidade antiga de Jaffa, sob o letreiro Welcome to Old Jaffa, Israel",
      },
      {
        src: luanaSuicaNeve.url,
        caption: "A nevasca que virou a melhor foto da viagem",
        alt: "Luana Santos sorrindo em meio à nevasca em vila alpina suíça, com gorro e óculos cobertos de neve",
      },
      {
        src: luanaGreciaEnseada.url,
        caption: "Enseada grega: água transparente e nenhum horário",
        alt: "Luana Santos sentada em rochas diante de enseada de água azul turquesa em ilha grega",
      },
    ],
    suggestedCaptions: [],
    photoDirection: "",
  },
  {
    slug: "lua-de-mel-grecia",
    title: "A gente só queria descansar — e voltou apaixonado pela Grécia",
    author: "Camila e Rodrigo",
    city: "Campinas, SP",
    tripType: "Lua de mel",
    destination: "Atenas, Naxos e Santorini · Grécia",
    month: "Setembro",
    quote:
      "Confesso que comecei desconfiada. A gente tinha uma planilha enorme, cheia de ilha, e eu achava que ia perder tempo explicando tudo de novo. Não perdi. Na segunda conversa já tinham entendido que a gente queria mar e sossego, não maratona de balsa. Cortaram uma ilha do nosso plano e enfiaram três noites em Naxos, que nem estava no radar — e virou a nossa favorita. Comi peixe grelhado com os pés na areia num lugar que ninguém posta. Em Santorini choveu numa tarde, e em vinte minutos tinham remanejado a degustação de vinho para o dia seguinte, sem eu pedir. Não foi perfeito o tempo todo. Mas nunca a gente esteve sozinho.",
    note:
      "A troca de uma das ilhas por Naxos veio de um detalhe: a Camila disse, de passagem, que odeia acordar cedo. Naxos permite dias inteiros sem deslocamento, o que sustenta esse ritmo. A degustação foi reagendada porque acompanhamos a previsão junto com o produtor local — parte do trabalho acontece antes de o viajante notar que existia um problema. — Marcelo Zoccoler",
    photoStory:
      "O branco de Oia depois da chuva fica com outro tom — mais leitoso, quase morno. Nas fotos, dá para ver a toalha ainda torta no terraço e as duas taças meio cheias, porque ninguém quis posar. Em Naxos, o prato de peixe com limão aparece de cima, com a mão do Rodrigo entrando no quadro. É a foto menos bonita do conjunto e a favorita deles. Foi ali, sem cenário nenhum, que a viagem virou memória.",
    photos: [],
    suggestedCaptions: [
      "Oia depois da chuva: o branco fica mais macio",
      "Naxos, peixe grelhado e nenhuma pressa",
      "O terraço que virou nossa sala de estar",
      "Última balsa do dia, mochila no colo",
    ],
    photoDirection:
      "Abrir com o terraço em Santorini (luz difusa, alto contraste com o azul) e fechar com a foto do prato em Naxos, que carrega a emoção. Sugestão de tratamento: reduzir levemente a saturação do azul para não competir com a pele, e recortar a primeira foto em 4:5 para valorizar a verticalidade das casas.",
  },
  {
    slug: "familia-africa-do-sul",
    title: "Meus filhos falam do safári até hoje — e eu, do WhatsApp respondido às 6h",
    author: "Fernanda Arruda",
    city: "Belo Horizonte, MG",
    tripType: "Viagem em família",
    destination: "Cidade do Cabo e Sabi Sand · África do Sul",
    month: "Julho",
    quote:
      "Viajar com filhos de 9 e 14 anos é negociar o dia inteiro. O roteiro veio com uma coisa que eu não tinha pedido: intervalos. Tarde livre depois do Table Mountain, uma manhã sem nada antes do voo interno. Isso salvou a viagem. No safári, o mais velho ficou obcecado por rinocerontes e o guia mudou a rota do segundo drive só por causa dele. Teve um susto: a mala da minha filha não chegou em Nelspruit. Mandei mensagem às seis da manhã achando que ia esperar horas. Responderam em dez minutos e a mala apareceu no lodge no fim da tarde. Não resolveram tudo do Brasil, mas estavam ali.",
    note:
      "Os intervalos são deliberados em roteiros com crianças: cansaço acumulado é o que costuma estragar o terceiro dia. A mala foi rastreada com o lodge e a companhia ao mesmo tempo, para não depender de um único canal. Ainda assim, avisamos a família de que poderia levar mais de um dia — preferimos a expectativa correta à promessa confortável. — Marcelo Zoccoler",
    photoStory:
      "Tem uma foto do fim de tarde no Sabi Sand em que ninguém está olhando para o animal: os quatro estão olhando para o mesmo ponto, fora do quadro, e a poeira levantada pega a luz de lado. É a imagem que resume aqueles dias. Na Cidade do Cabo, a mão da filha segurando o gorro contra o vento do Cabo da Boa Esperança diz mais sobre a viagem do que qualquer panorâmica. O resto é paisagem — e paisagem, ali, sobrava.",
    photos: [],
    suggestedCaptions: [
      "A poeira dourada do fim de tarde no Sabi Sand",
      "Gorro na mão, vento do Cabo da Boa Esperança",
      "Café da manhã interrompido por elefantes",
      "Table Mountain e o dia inteiro sem pressa",
    ],
    photoDirection:
      "Abrir com o retrato dos quatro no jipe (contraluz com poeira) e fechar com o gorro no vento. Evitar a panorâmica de Table Mountain como capa: é a foto mais previsível do conjunto. Tratamento: clarear as sombras dos rostos no contraluz sem tocar no céu.",
  },
  {
    slug: "solo-japao",
    title: "Viajei sozinha pelo Japão aos 52 e nunca me senti perdida",
    author: "Teresa Vilar",
    city: "Curitiba, PR",
    tripType: "Viagem solo",
    destination: "Tóquio, Kanazawa e Kyoto · Japão",
    month: "Novembro",
    quote:
      "Minha maior insegurança não era o idioma, era o metrô. Recebi um documento com cada trajeto, o nome da estação em japonês para eu mostrar na tela do celular, e o horário do último trem. Parece pouco. Foi tudo. Em Kanazawa, que nem estava no meu plano original, entrei num ateliê de folha de ouro e passei a manhã inteira lá. Em Kyoto errei um ônibus e cheguei atrasada num jantar; ligaram para o restaurante e me esperaram. Ainda me lembro do cheiro do mercado de Nishiki às nove da manhã. Voltei com menos fotos do que imaginava e mais coragem do que eu tinha quando saí.",
    note:
      "Kanazawa entrou no roteiro por causa de uma frase da Teresa na primeira conversa: 'gosto de ver gente trabalhando com a mão'. É uma cidade de artesãos e tem escala humana, o que ajuda em viagem solo. O documento de trajetos com o nome das estações em japonês virou padrão nas nossas viagens ao Japão depois dessa. — Marcelo Zoccoler",
    photoStory:
      "As fotos da Teresa são quase todas de detalhe: as mãos do artesão sobre a folha de ouro, o vapor subindo de uma tigela, um guarda-chuva transparente encostado na parede. Só há um retrato dela, tirado por um desconhecido em Kyoto, meio desalinhado. É a foto que abre a história. O Japão dela não é o dos cartões-postais — é o de quem olhou de perto, com tempo, e voltou sabendo o cheiro das nove da manhã.",
    photos: [],
    suggestedCaptions: [
      "Mãos do artesão e a folha de ouro em Kanazawa",
      "Nishiki às nove da manhã, vapor e vozes",
      "Guarda-chuva transparente, chuva de Kyoto",
      "O único retrato meu da viagem inteira",
    ],
    photoDirection:
      "Abrir com o retrato desalinhado (imperfeição é parte da narrativa) e fechar com as mãos do artesão. Tratamento: manter o grão, não corrigir a inclinação do retrato; aquecer levemente as fotos de mercado para aproximar do tom de memória.",
  },
  {
    slug: "aniversario-patagonia",
    title: "Comemorei 60 anos caminhando — e chorei no mirante do Fitz Roy",
    author: "Sérgio Nakamura",
    city: "São Paulo, SP",
    tripType: "Aniversário",
    destination: "El Chaltén e El Calafate · Patagônia argentina",
    month: "Março",
    quote:
      "Eu queria caminhar, mas tenho um joelho que reclama. Falei isso uma vez e o roteiro veio com a trilha dividida em dois dias, com um guia que topava parar quando eu precisasse. Parei umas seis vezes. Cheguei. No mirante, com o Fitz Roy limpo — dizem que é raro —, eu chorei um pouco e não tive vergonha. À noite teve um bolo no restaurante que eu não pedi, com o nome errado escrito na cobertura, e a gente riu disso a viagem inteira. Não foi uma viagem de luxo. Foi uma viagem em que alguém tinha pensado no meu joelho antes de mim.",
    note:
      "A trilha ao Fitz Roy é normalmente vendida em um dia; dividimos em dois e escolhemos hospedagem em El Chaltén justamente para permitir isso. O bolo foi combinado com o restaurante por telefone, e o erro no nome foi nosso. Ficou melhor assim. — Marcelo Zoccoler",
    photoStory:
      "Na sequência, o granito aparece três vezes: escondido na neblina no primeiro dia, recortado contra o azul no segundo, e refletido na Laguna de los Tres. Entre eles, uma foto do Sérgio sentado numa pedra, bastão apoiado no ombro, rindo de cansaço. O bolo com o nome errado fecha tudo, tremido, sob luz amarela de restaurante. Sessenta anos raramente cabem numa foto bonita — mas cabem nessa.",
    photos: [],
    suggestedCaptions: [
      "Primeiro dia: Fitz Roy escondido na neblina",
      "Pausa na pedra, bastão no ombro, rindo",
      "Laguna de los Tres e o granito refletido",
      "O bolo com meu nome escrito errado",
    ],
    photoDirection:
      "Abrir com a neblina (cria expectativa) e fechar com o bolo. Tratamento: não estourar o branco da neve do granito; a foto do bolo pode ficar como está, o tremido faz parte.",
  },
  {
    slug: "executiva-lisboa",
    title: "Trabalhei quatro dias em Lisboa e ganhei um fim de semana que não esperava",
    author: "Luciana Prado",
    city: "Porto Alegre, RS",
    tripType: "Viagem executiva",
    destination: "Lisboa e Comporta · Portugal",
    month: "Maio",
    quote:
      "Minha agenda era um mosaico de reuniões e eu não tinha cabeça para pensar em lazer. Pedi hotel perto do escritório e ponto. O que recebi foi o hotel certo, com uma observação sobre trânsito no fim da tarde que evitou dois atrasos meus, e uma sugestão de dois dias em Comporta emendados no voo de volta, com carro e tudo resolvido. Aceitei no dia anterior, quase por impulso. Dormi onze horas. Andei descalça na areia, comi arroz de lingueirão numa casa sem placa e voltei para o Brasil melhor do que cheguei em Lisboa. Foi a única viagem de trabalho que terminou assim.",
    note:
      "A observação sobre trânsito veio da equipe, não do hotel: o eixo Marquês–Saldanha trava depois das 17h e isso muda a escolha do bairro. Comporta ficou pré-reservada com cancelamento livre antes de a Luciana decidir, para que a resposta de última hora fosse possível. Às vezes o trabalho é deixar uma porta destrancada. — Marcelo Zoccoler",
    photoStory:
      "Duas Lisboas nas fotos: a de terno, com o reflexo dos azulejos na porta de vidro do escritório, e a de sexta à noite, com a luz laranja do fim de tarde no Tejo. Depois, Comporta: areia clara, pinheiro torto, uma mesa com arroz de lingueirão e as unhas ainda com esmalte de reunião. É essa mistura que conta a história — o descanso que apareceu no meio da semana de trabalho, sem aviso.",
    photos: [],
    suggestedCaptions: [
      "Azulejos refletidos na porta de vidro do escritório",
      "Sexta-feira, luz laranja sobre o Tejo",
      "Comporta: pinheiro torto e areia clara",
      "Arroz de lingueirão numa casa sem placa",
    ],
    photoDirection:
      "Abrir com o reflexo dos azulejos (dá o contexto de trabalho) e fechar com o prato em Comporta. Tratamento: esfriar levemente as fotos urbanas e aquecer as de praia, reforçando a virada de clima entre as duas metades.",
  },
  {
    slug: "casal-lencois-maranhenses",
    title: "Trocamos o Caribe pelos Lençóis e não teve comparação",
    author: "Ana e Beto Siqueira",
    city: "Ribeirão Preto, SP",
    tripType: "Viagem a dois",
    destination: "Lençóis Maranhenses e Atins · Maranhão",
    month: "Junho",
    quote:
      "A gente ia para o Caribe, de novo. Numa conversa mudamos de ideia e fomos para os Lençóis, com receio de estrutura. O receio era justo e foi tratado na cara dura: falaram do trecho de 4x4, do banho de água salobra, do calor. Sabendo disso, tudo virou parte da aventura. A lagoa às cinco da tarde, sem mais ninguém, com o céu inteiro dentro da água — nunca vi nada parecido. Em Atins jantamos num quintal com peixe na brasa e um gato dormindo na cadeira do lado. Voltei com areia dentro da mala por três lavagens. Melhor troca que já fizemos.",
    note:
      "Contar o desconforto antes é parte do trabalho: quem viaja informado aproveita mais. A lagoa vazia às cinco da tarde não é sorte — é horário escolhido para não coincidir com a saída dos grupos, algo que só o guia local sabe ajustar. — Marcelo Zoccoler",
    photoStory:
      "Nas fotos, o céu quase sempre ocupa dois terços do quadro, e a água devolve o rosa. Tem uma em que a Ana está de costas, sozinha na lagoa, e a linha do horizonte desaparece — não se sabe onde termina a duna. No quintal de Atins, a brasa desfocada no fundo e o gato dormindo do lado da mesa. Nada disso parece o Caribe. É melhor: parece deles.",
    photos: [],
    suggestedCaptions: [
      "Cinco da tarde na lagoa, ninguém por perto",
      "O céu inteiro dentro da água",
      "Atins: peixe na brasa e um gato sonolento",
      "Duna e horizonte sem linha de separação",
    ],
    photoDirection:
      "Abrir com a foto da lagoa vazia (é a imagem-síntese) e fechar com o quintal em Atins. Tratamento: preservar o rosa do fim de tarde sem aumentar saturação — o excesso tira a credibilidade da cena.",
  },
  {
    slug: "amigas-marrocos",
    title: "Quatro amigas, um deserto e um chá que nunca vou esquecer",
    author: "Regina Dantas",
    city: "Recife, PE",
    tripType: "Viagem entre amigas",
    destination: "Marrakech, Vale do Draa e Merzouga · Marrocos",
    month: "Outubro",
    quote:
      "Somos quatro e discutimos muito. Achei que o roteiro ia ser um problema, mas conseguiram encaixar o museu que uma queria, o hammam que a outra insistia e o silêncio do deserto que era o meu. No caminho para Merzouga paramos numa casa onde uma senhora serviu chá de menta com uma quantidade absurda de açúcar, e eu, que não como doce, tomei duas. Não estava no programa. O motorista sugeriu. Uma das meninas passou mal no segundo dia e o guia levou ela num médico sem drama nenhum. No fim, o que ficou não foi o cenário. Foi o cuidado com a gente.",
    note:
      "A parada da casa de chá não está em roteiro nenhum: é do motorista, que trabalha com a gente há anos e conhece a família. Guardamos sempre uma folga de duas horas nas travessias longas justamente para que esse tipo de desvio possa acontecer. — Marcelo Zoccoler",
    photoStory:
      "As melhores fotos do grupo são as de dentro do carro: reflexo no vidro, terra vermelha correndo do lado de fora, quatro pares de óculos escuros. Depois, o copo de chá contra a luz, o vapor visível. E o deserto ao amanhecer, com as pegadas ainda intactas antes do vento. Não é o Marrocos do pôster. É o Marrocos que quatro amigas atravessaram brigando, rindo e cuidando uma da outra.",
    photos: [],
    suggestedCaptions: [
      "Terra vermelha correndo pela janela do carro",
      "Chá de menta contra a luz, vapor visível",
      "Amanhecer em Merzouga, pegadas intactas",
      "Quatro pares de óculos escuros e nenhum acordo",
    ],
    photoDirection:
      "Abrir com a foto dentro do carro (apresenta as personagens) e fechar com o amanhecer no deserto. Tratamento: reduzir o brilho do reflexo no vidro e manter o contraste da terra vermelha, que dá identidade ao conjunto.",
  },
];
