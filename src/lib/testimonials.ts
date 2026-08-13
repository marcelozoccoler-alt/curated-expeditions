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
];
