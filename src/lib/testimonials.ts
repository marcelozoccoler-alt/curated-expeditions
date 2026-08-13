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
import luanaCapadociaGrupoChamines from "@/assets/depoimentos/luana-capadocia-grupo-chamines.jpg.asset.json";
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
import maitePatagoniaTrineoDia from "@/assets/depoimentos/maite-patagonia-trineo-huskies-dia.jpeg.asset.json";
import maitePatagoniaBracos from "@/assets/depoimentos/maite-patagonia-neve-bracos-abertos.jpeg.asset.json";
import maitePatagoniaFarolBeijo from "@/assets/depoimentos/maite-patagonia-farol-beijo.jpeg.asset.json";
import maitePatagoniaBeagle from "@/assets/depoimentos/maite-patagonia-canal-beagle-farol.jpeg.asset.json";
import maitePeritoMoreno from "@/assets/depoimentos/maite-patagonia-perito-moreno.jpeg.asset.json";
import maitePatagoniaTrineoNoite from "@/assets/depoimentos/maite-patagonia-trineo-noite.jpeg.asset.json";
import maitePatagoniaTrineoMontanhas from "@/assets/depoimentos/maite-patagonia-trineo-montanhas.jpeg.asset.json";
import maiteReveillonBrinde from "@/assets/depoimentos/maite-leste-reveillon-brinde.jpeg.asset.json";
import maiteVienaMercado from "@/assets/depoimentos/maite-viena-mercado-natal.jpeg.asset.json";
import maiteVienaCatedral from "@/assets/depoimentos/maite-viena-catedral-santo-estevao.jpeg.asset.json";

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
    title: "Cinco destinos, uma mesma forma de viajar",
    author: "Luana Santos",
    city: "São Paulo, SP",
    tripType: "Viajante recorrente desde 2022",
    destination: "França, Grécia, Turquia, Israel e Suíça",
    month: "2022 a 2026",
    verified: true,
    since: "Viaja com a Create Travel desde 2022",
    countries: ["França", "Grécia", "Turquia", "Israel", "Suíça"],
    quote:
      "Eu cheguei na Create Travel por indicação, com a França na cabeça e uma lista de coisas que eu não queria: fila, ônibus cheio, roteiro de vitrine. Voltei de lá com a sensação de que alguém tinha pensado no meu dia antes de mim — o carro no horário certo, a reserva já feita no restaurante que eu tinha comentado de passagem, o hotel na rua que fazia sentido para o que eu queria caminhar. Depois vieram a Grécia, a Turquia, Israel e a Suíça. Em cada uma delas o cuidado apareceu no detalhe pequeno: o balão da Capadócia remarcado por causa do vento, sem eu precisar correr atrás; o guia em Jerusalém que entendeu que eu queria história, não roteiro decorado; o dia livre em Santorini que eles insistiram para eu manter — e virou a minha lembrança preferida. Hoje eu escolho viajar assim: com tempo, com cuidado e com a certeza de que cada detalhe foi pensado antes.",
    note:
      "A Luana viaja com a gente desde 2022 e cada roteiro é um encontro inesperado que a gente vai desenhando junto: descobrimos que ela prefere deixar o céu clarear sem compromisso, que duas noites no mesmo hotel valem mais do que somar cidades, e que a câmera dela escolhe horários que o relógio não alcança. O balão na Capadócia foi remanejado porque acompanhamos o boletim de vento com o operador local desde a véspera; em Israel trocamos o guia por um historiador para o dia em Jerusalém. É esse histórico acumulado — e a curiosidade de conhecer a mesma viajante de novo — que torna a quinta viagem mais precisa que a primeira. — Marcelo Zoccoler",
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
        src: luanaCapadociaGrupoChamines.url,
        caption: "Capadócia: entre as chaminés de fada, com o grupo",
        alt: "Luana Santos com grupo de viajantes diante das formações rochosas das chaminés de fada na Capadócia, Turquia",
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
    slug: "maite-leal-murilo-lamano-patagonia-leste-europeu",
    title: "Duas viagens que superaram tudo o que a gente tinha imaginado",
    author: "Maite Leal e Murilo Lamano",
    city: "São Paulo, SP",
    tripType: "Casal — duas viagens com a Create Travel",
    destination: "Patagônia Argentina (2025) e Leste Europeu com estação de esqui (2026)",
    month: "2025 e 2026",
    verified: true,
    since: "Viajam com a Create Travel desde 2025",
    countries: ["Argentina", "Áustria", "Hungria", "República Tcheca"],
    quote:
      "As duas viagens superaram completamente as nossas expectativas. Na Patagônia foi a primeira vez que a gente sentiu o que é viajar sem carregar preocupação: tudo já estava resolvido antes de a gente chegar — o trenó puxado pelos huskies em Ushuaia, o barco até o farol do Canal de Beagle, o dia sobre o gelo do Perito Moreno. No Leste Europeu, entre os mercados de Natal de Viena e a neve da estação de esqui, foi a mesma sensação: a viagem simplesmente flui. E quando algo acontece, eles nos socorrem. Quase perdemos a embarcação do réveillon no Danúbio porque fomos ao ponto de embarque errado — acionamos a Create, eles encontraram o cais certo em minutos e a gente entrou a tempo do brinde. Ufa! Brindamos rindo, de mãos dadas, com a sensação de que nunca estivemos sozinhos. É por isso que a gente volta: são viagens que tocam o coração.",
    note:
      "Com a Maite e o Murilo aprendemos a desenhar viagens para dois: menos deslocamentos, mais fins de tarde juntos, e sempre uma experiência que eles não pediram mas que combina com eles — o trenó noturno em Ushuaia entrou assim. A noite do réveillon no Danúbio é a história que eles mais contam, e para nós é a prova de por que existe plantão: eram poucos minutos, a mensagem chegou, confirmamos o cais correto com o operador local e o casal embarcou. Cuidar da viagem inteira é também estar do outro lado do telefone quando a viagem improvisa. — Marcelo Zoccoler",
    photoStory:
      "A Patagônia deles é branca e barulhenta de alegria: os huskies puxando o trenó pela neve de Ushuaia, o casal de braços abertos no meio da nevasca, o trenó atravessando a noite austral com os cães acesos pelo flash. Depois a água — o farol Les Éclaireurs ao fundo, o beijo no deque do barco no Canal de Beagle, a bandeira argentina tremendo no vento. E o azul impossível do Perito Moreno, os dois de crampons e capacete, de mãos dadas sobre o gelo. No Leste Europeu a temperatura da luz muda: as luzes vermelhas e verdes do Wiener Christkindlmarkt, o vapor subindo das canecas de vinho quente, a catedral de Santo Estêvão num céu azul de inverno — e o brinde de taça na mão, sob o Happy New Year, na noite que quase virou história de perigo e virou história de riso.",
    photos: [
      {
        src: maitePatagoniaTrineoDia.url,
        caption: "Ushuaia: os huskies puxando o trenó na neve",
        alt: "Maite Leal e Murilo Lamano em trenó puxado por cães huskies na neve, com montanhas nevadas ao fundo em Ushuaia, Patagônia Argentina",
      },
      {
        src: maitePatagoniaBracos,
        caption: "De braços abertos no meio da nevasca",
        alt: "Casal Maite Leal e Murilo Lamano de braços abertos sorrindo em meio à neve caindo, na Patagônia Argentina",
      },
      {
        src: maitePatagoniaFarolBeijo.url,
        caption: "Um beijo diante do farol do fim do mundo",
        alt: "Maite Leal e Murilo Lamano se beijando no deque de barco com o farol Les Éclaireurs ao fundo, Canal de Beagle, Ushuaia",
      },
      {
        src: maitePatagoniaBeagle.url,
        caption: "Canal de Beagle: bandeira ao vento e o farol atrás",
        alt: "Maite Leal e Murilo Lamano sorrindo em barco no Canal de Beagle, com bandeira argentina e o farol Les Éclaireurs ao fundo",
      },
      {
        src: maitePeritoMoreno.url,
        caption: "Perito Moreno: de mãos dadas sobre o gelo azul",
        alt: "Maite Leal e Murilo Lamano de capacete e crampons, de mãos dadas sobre o gelo azul do glaciar Perito Moreno, Argentina",
      },
      {
        src: maitePatagoniaTrineoNoite.url,
        caption: "O trenó que atravessou a noite austral",
        alt: "Maite Leal e Murilo Lamano em trenó puxado por huskies durante passeio noturno na neve em Ushuaia",
      },
      {
        src: maitePatagoniaTrineoMontanhas.url,
        caption: "Abraçados no trenó, com a cordilheira atrás",
        alt: "Maite Leal e Murilo Lamano abraçados sentados em trenó de madeira com montanhas nevadas ao fundo na Patagônia Argentina",
      },
      {
        src: maiteVienaMercado.url,
        caption: "Viena: vinho quente sob as luzes do Christkindlmarkt",
        alt: "Maite Leal e Murilo Lamano com canecas de vinho quente sob o arco iluminado do mercado de Natal Wiener Christkindlmarkt, em Viena",
      },
      {
        src: maiteVienaCatedral.url,
        caption: "A catedral de Santo Estêvão num azul de inverno",
        alt: "Maite Leal e Murilo Lamano em selfie diante da catedral de Santo Estêvão, em Viena, com céu azul de inverno",
      },
      {
        src: maiteReveillonBrinde.url,
        caption: "O brinde do réveillon que quase não aconteceu",
        alt: "Maite Leal e Murilo Lamano brindando com taças de vinho sob balões de Happy New Year em escadaria de madeira, na noite de réveillon",
      },
    ],
    suggestedCaptions: [],
    photoDirection: "",
  },
];
