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
import maiteEsquiPista from "@/assets/depoimentos/maite-esqui-casal-pista.jpeg.asset.json";
import maiteEsquiSol from "@/assets/depoimentos/maite-esqui-sol.jpeg.asset.json";
import maiteDanubioNeve from "@/assets/depoimentos/maite-danubio-neve-barco.jpeg.asset.json";
import taniaCapadociaValeVermelho from "@/assets/depoimentos/tania-capadocia-vale-vestido-vermelho.jpg.asset.json";
import taniaCapadociaQuadriciclo from "@/assets/depoimentos/tania-capadocia-quadriciclo.jpg.asset.json";
import taniaCidadeSubterranea from "@/assets/depoimentos/tania-capadocia-cidade-subterranea.jpg.asset.json";
import taniaDolmabahce from "@/assets/depoimentos/tania-istambul-dolmabahce-portao.jpg.asset.json";
import taniaBalat from "@/assets/depoimentos/tania-istambul-balat-ruas-coloridas.jpg.asset.json";
import taniaSantaSofia from "@/assets/depoimentos/tania-istambul-santa-sofia-interior.jpg.asset.json";
import taniaBosforoNoite from "@/assets/depoimentos/tania-bosforo-noite-mesquita.jpg.asset.json";
import taniaMosaicoBizantino from "@/assets/depoimentos/tania-santa-sofia-mosaico-bizantino.jpg.asset.json";
import taniaGrupoV2 from "@/assets/depoimentos/tania-istambul-mesquita-azul-grupo-v2.jpg.asset.json";
import taniaOrtakoy from "@/assets/depoimentos/tania-istambul-ortakoy-bosforo.jpg.asset.json";
import taniaBalatCafe from "@/assets/depoimentos/tania-balat-antik-cafe.jpg.asset.json";
import taniaBalatCartazes from "@/assets/depoimentos/tania-balat-cartazes-cinema-turco.jpg.asset.json";
import taniaGalata from "@/assets/depoimentos/tania-istambul-torre-galata-noite.jpg.asset.json";
import taniaFuscaRosa from "@/assets/depoimentos/tania-balat-fusca-rosa-guarda-chuvas.jpg.asset.json";
import taniaBonde from "@/assets/depoimentos/tania-labib-bonde-istiklal-istambul.jpg.asset.json";
import taniaVideo from "@/assets/depoimentos/tania-turquia-video.mp4.asset.json";
import taniaVideoPoster from "@/assets/depoimentos/tania-video-poster.jpg.asset.json";
import taniaVideo2 from "@/assets/depoimentos/tania-turquia-video-2.mp4.asset.json";
import taniaVideo2Poster from "@/assets/depoimentos/tania-video-2-poster.jpg.asset.json";
import taniaVideo3 from "@/assets/depoimentos/tania-turquia-video-3.mp4.asset.json";
import taniaVideo3Poster from "@/assets/depoimentos/tania-video-3-poster.jpg.asset.json";
import taniaGrupoBaloes from "@/assets/depoimentos/tania-capadocia-grupo-baloes-amanhecer.jpg.asset.json";
import taniaDolmabahceJardim from "@/assets/depoimentos/tania-dolmabahce-jardim-fonte-flores.jpg.asset.json";
import labibGrupoCampanario from "@/assets/depoimentos/labib-grecia-grupo-campanario-poente.jpg.asset.json";
import labibOdeonNoite from "@/assets/depoimentos/labib-atenas-odeon-herodes-noite.jpg.asset.json";
import labibCapadociaQuadriciclos from "@/assets/depoimentos/labib-capadocia-grupo-quadriciclos.jpg.asset.json";
import labibEfeso from "@/assets/depoimentos/labib-efeso-casa-virgem-maria.jpg.asset.json";
import labibJantarGrupo from "@/assets/depoimentos/labib-grecia-jantar-grupo.jpg.asset.json";
import labibTemploHefesto from "@/assets/depoimentos/labib-atenas-agora-templo-hefesto.jpg.asset.json";
import labibAgoraHefesto from "@/assets/depoimentos/labib-atenas-templo-hefesto-amigas.jpg.asset.json";
import labibPiqueniqueJardim from "@/assets/depoimentos/labib-grupo-piquenique-jardim.jpg.asset.json";
import labibCruzeiroEscadaria from "@/assets/depoimentos/labib-cruzeiro-escadaria-grupo.jpg.asset.json";
import labibPortaoMadeira from "@/assets/depoimentos/labib-portao-madeira-antigo.jpg.asset.json";

export const TESTIMONIALS_DRAFT = true;

export interface TestimonialPhoto {
  /** Caminho da imagem (ex.: importada de src/assets/depoimentos/...) ou URL. */
  src: string;
  /** Legenda curta (até 12 palavras) — pronta para galeria e redes sociais. */
  caption: string;
  alt: string;
  /** Alinhamento opcional do ponto focal para object-position. */
  objectPosition?: string;
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
  /** Vídeo real da viagem (opcional). */
  video?: { src: string; poster?: string; caption: string };
  /** Vídeos extras da viagem (opcional). */
  videos?: { src: string; poster?: string; caption: string }[];
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
        src: maitePatagoniaBracos.url,
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
      {
        src: maiteDanubioNeve.url,
        caption: "Réveillon no Danúbio: neve no ombro, Budapeste ao fundo",
        alt: "Maite Leal e Murilo Lamano no deque de embarcação no rio Danúbio sob neve, com as luzes da Ponte das Correntes de Budapeste ao fundo",
      },
      {
        src: maiteEsquiSol.url,
        caption: "Primeiro dia de esqui, com o sol atravessando a pista",
        alt: "Maite Leal e Murilo Lamano de capacete e roupas de esqui segurando esquis na pista nevada, com o sol de inverno atrás",
      },
      {
        src: maiteEsquiPista.url,
        caption: "Fim de tarde na estação, esquis fincados na neve",
        alt: "Maite Leal e Murilo Lamano abraçados na base da estação de esqui no Leste Europeu, segurando esquis sobre a neve ao fim da tarde",
      },
    ],
    suggestedCaptions: [],
    photoDirection: "",
  },
  {
    slug: "tania-abreu-turquia-novembro-2025",
    title: "A Turquia que eu ouvia da minha mãe — até virar a minha",
    author: "Tânia Abreu",
    city: "São Paulo, SP",
    tripType: "Grupo exclusivo Create Travel — Turquia, novembro de 2025",
    destination: "Istambul e Capadócia, Turquia",
    month: "Novembro de 2025",
    verified: true,
    since: "Viaja com a Create Travel desde 2025",
    countries: ["Turquia"],
    quote:
      "Eu ouvi minha mãe falar da Turquia por anos. Ela voltou do grupo da Create Travel contando das ruas de Istambul, das mesquitas, dos palácios — e cada vez que ela contava, meu coração batia mais forte de vontade de viver aquilo. Em novembro de 2025 foi a minha vez, no grupo exclusivo da Create. Andei muito pelos caminhos da Turquia: bairros autênticos, ruas coloridas de Balat, o portão do palácio aberto para o Bósforo, o interior de Santa Sofia que faz a gente ficar em silêncio. Sobrevoar a Capadócia no balão foi algo inexplicável — não existe palavra, existe a sensação. Depois a aventura na terra, no quadriciclo entre os vales, descer numa cidade subterrânea, navegar de noite pelo Bósforo com a cidade toda dourada na água. Vivi tanta coisa e sou grata à Create Travel por cada detalhe. Agora estou com grandes expectativas para o próximo grupo, o Leste Europeu 2026. E lá vamos nós!",
    note:
      "A Tânia chegou até nós pelo caminho mais bonito que existe numa agência: a mãe dela viajou primeiro, voltou contando, e a filha decidiu que queria a mesma Turquia — só que do jeito dela. O grupo exclusivo de novembro de 2025 foi desenhado para isso: Istambul com tempo nos bairros que não estão no roteiro padrão (Balat, o Bósforo à noite, o Dolmabahçe visto da beira d'água) e a Capadócia em duas velocidades, o balão ao amanhecer e o quadriciclo no fim do dia. Novembro não é escolha aleatória: menos fila nas mesquitas, luz baixa e dourada nas fotos, e melhor janela de voo do balão do que no verão. Da nossa parte, o que se repete é o acompanhamento antes de cada experiência sensível — voo de balão confirmado com o operador local na véspera, horário de Santa Sofia ajustado ao calendário de orações. Em 2026 ela embarca com a gente no Leste Europeu. — Marcelo Zoccoler",
    photoStory:
      "As fotos da Tânia começam em Istambul e terminam no céu. O portão de mármore do Dolmabahçe emoldurando o Bósforo em manhã de céu leitoso; as fachadas lilás, laranja e azul de Balat, com o cardápio de giz na calçada; a nave de Santa Sofia vista de cima, os lustres dourados suspensos sobre o tapete verde. Depois a noite no Bósforo: minaretes iluminados e a cúpula azul refletidos na água escura, a cidade inteira em luz âmbar. E a Capadócia em dois climas — o vestido vermelho contra o cinza vulcânico das chaminés de fada do Vale dos Monges, e o mesmo vermelho na penumbra alaranjada de uma cidade subterrânea. Fecha com o capacete azul, os óculos escuros e o V de vitória sobre o quadriciclo, no meio do vale branco: a foto de quem entendeu que aventura e elegância cabem na mesma viagem.",
    video: {
      src: taniaVideo.url,
      poster: taniaVideoPoster.url,
      caption: "Istambul em movimento: um trecho da viagem da Tânia, gravado por ela",
    },
    videos: [
      {
        src: taniaVideo2.url,
        poster: taniaVideo2Poster.url,
        caption: "Mais um trecho da Turquia pelos olhos da Tânia",
      },
      {
        src: taniaVideo3.url,
        poster: taniaVideo3Poster.url,
        caption: "A Turquia em movimento: mais um registro da viagem da Tânia",
      },
    ],
    photos: [
      {
        src: taniaGrupoV2.url,
        caption: "Mesquita Azul: o grupo reunido embaixo dos lustres",
        alt: "Grupo de viajantes da Create Travel com véus, sorrindo dentro da Mesquita Azul de Istambul, com azulejos e lustres ao fundo",
        objectPosition: "center 40%",
      },
      {
        src: taniaGrupoBaloes.url,
        caption: "Amanhecer na Capadócia: o grupo antes de subir de balão",
        alt: "Grupo de viajantes da Create Travel sorrindo ao amanhecer na Capadócia, com dezenas de balões no céu e o envelope de um balão ao lado",
        objectPosition: "center 55%",
      },
      {
        src: taniaDolmabahceJardim.url,
        caption: "Os jardins floridos do Dolmabahçe, com a fonte dos cisnes",
        alt: "Jardim do Palácio de Dolmabahçe em Istambul com fonte de cisnes, espelho d'água e canteiro de flores rosa em primeiro plano",
      },
      {
        src: taniaCapadociaValeVermelho.url,
        caption: "Capadócia: vestido vermelho diante das chaminés de fada",
        alt: "Tânia Abreu de vestido vermelho sentada em rocha clara com as chaminés de fada e o platô vulcânico da Capadócia ao fundo, Turquia",
      },
      {
        src: taniaSantaSofia.url,
        caption: "Santa Sofia por dentro: o silêncio embaixo dos lustres",
        alt: "Interior da mesquita de Santa Sofia visto da galeria superior, com lustres dourados, tapete verde e caligrafia otomana, Istambul",
      },
      {
        src: taniaBalat.url,
        caption: "Balat: as fachadas coloridas de um bairro autêntico",
        alt: "Tânia Abreu em rua de paralelepípedo do bairro de Balat, diante de casarões lilás, laranja e azul, Istambul",
      },
      {
        src: taniaBosforoNoite.url,
        caption: "Navegar de noite pelo Bósforo, a cidade dourada na água",
        alt: "Mesquita com cúpula azul e minaretes iluminados às margens do Bósforo à noite, com reflexos dourados na água, Istambul",
      },
      {
        src: taniaCapadociaQuadriciclo.url,
        caption: "Quadriciclo entre os vales: aventura na terra",
        alt: "Tânia Abreu de capacete azul sobre quadriciclo vermelho em vale de rochas claras na Capadócia, Turquia",
      },
      {
        src: taniaDolmabahce.url,
        caption: "O portão do palácio aberto para o Bósforo",
        alt: "Tânia Abreu diante do portão de mármore esculpido do Palácio de Dolmabahçe com o Bósforo ao fundo, Istambul",
      },
      {
        src: taniaCidadeSubterranea.url,
        caption: "Descer numa cidade subterrânea da Capadócia",
        alt: "Tânia Abreu de vestido vermelho dentro de câmara escavada de cidade subterrânea da Capadócia, iluminada em laranja",
      },
      {
        src: taniaOrtakoy.url,
        caption: "A mesquita de Ortaköy vista da água, no fim da tarde",
        alt: "Mesquita de Ortaköy às margens do Bósforo vista de barco, com a ponte ao fundo e reflexos na água, Istambul",
      },
      {
        src: taniaBalatCafe.url,
        caption: "Balat: o café das flores, entre guarda-sóis coloridos",
        alt: "Tânia Abreu sentada em banco de madeira sob arco de flores no Balat Antik Café, com guarda-sóis coloridos ao fundo, Istambul",
      },
      {
        src: taniaBalatCartazes.url,
        caption: "Os cartazes do cinema turco antigo nas ruas do Balat",
        alt: "Tânia Abreu diante de grandes cartazes de filmes clássicos turcos em parede colorida no bairro de Balat, Istambul",
        objectPosition: "center 40%",
      },
      {
        src: taniaFuscaRosa.url,
        caption: "O fusca rosa e os guarda-chuvas coloridos do Balat",
        alt: "Tânia Abreu sentada sobre fusca rosa antigo sob dezenas de guarda-chuvas coloridos no Balat Antik, Istambul",
      },
      {
        src: taniaGalata.url,
        caption: "A Torre de Gálata iluminada, vista dos telhados",
        alt: "Torre de Gálata iluminada à noite acima dos telhados dos edifícios do bairro de Beyoğlu, Istambul",
        objectPosition: "center 35%",
      },
      {
        src: taniaBonde.url,
        caption: "O bonde vermelho da Istiklal no fim do dia",
        alt: "Mulher com xale rosa diante do bonde vermelho histórico da avenida Istiklal ao crepúsculo, Istambul",
        objectPosition: "center 45%",
      },
      {
        src: taniaMosaicoBizantino.url,
        caption: "O mosaico bizantino de fundo dourado em Santa Sofia",
        alt: "Mosaico bizantino de Santa Sofia com a Virgem entronizada entre dois imperadores em fundo de tesselas douradas, Istambul",
      },
    ],
    suggestedCaptions: [],
    photoDirection: "",
  },
  {
    slug: "labib-maria-miguel-bernardi-desde-2015",
    title: "Onze anos de viagens, e as surpresas que ninguém esquece",
    author: "Labib Maria Miguel Bernardi",
    city: "São Paulo, SP",
    tripType: "Viajante recorrente desde 2015 — grupos exclusivos e viagens com amigos",
    destination: "Espanha, Portugal, Grécia, Turquia, Marrocos e mais",
    month: "2015 a 2026",
    verified: true,
    since: "Viaja com a Create Travel desde 2015",
    countries: ["Espanha", "Portugal", "Grécia", "Turquia", "Marrocos"],
    quote:
      "Minha primeira viagem com a Create Travel foi em 2015, com a minha amiga Rosinha: Espanha e Portugal, de trem, só nós duas. Levávamos o livrinho de viagem que eles fizeram para nós — com os mapinhas das ruas, os caminhos, o que ver em cada lugar. Foi assim que chegamos a Toledo, e foi assim que aprendemos a viajar de trem (quase perdemos um, confesso). Em Portugal, o motorista parou num lugar deserto, no meio de uma paisagem lindíssima, e nós duas ficamos com medo: o que ele vai fazer com a gente? Era um piquenique surpresa, só para nós. Até hoje rimos dessa história. Desde então eu viajo todo ano no grupo exclusivo deles, porque sempre tem uma surpresa esperando: um brinde no alto do Lycabettus, em Atenas, um piquenique num oásis do Marrocos, um concerto no Odeon de Herodes Ático aos pés da Acrópole. Eu já não sei viajar de outro jeito.",
    note:
      "A Labib está com a gente desde 2015 — foi uma das primeiras a receber o livrinho de viagem artesanal da Create Travel, com mapas de rua desenhados à mão e caminhadas sugeridas quarteirão por quarteirão. Aquela viagem de trem por Espanha e Portugal com a amiga Rosinha estabeleceu o que a gente faz até hoje: preparar a viagem para que a viajante possa se perder de propósito, sem nunca ficar sem rede. O piquenique surpresa em Portugal virou lenda interna, junto com o susto no carro. Nos grupos anuais, a Labib é quem espera pela surpresa — e é por ela, entre outras, que a gente continua desenhando o brinde no morro, o piquenique no oásis, o concerto ao pé da Acrópole. — Marcelo Zoccoler",
    photoStory:
      "As fotos da Labib atravessam onze anos sem perder o mesmo sorriso. Na Grécia, o grupo reunido ao pé do campanário quando o céu de Atenas fica laranja, a mesa longa de taças e risos num jantar que ninguém quis encerrar, e o Templo de Hefesto na Ágora recortado pela luz dura do meio-dia. À noite, o Odeon de Herodes Ático iluminado por trás, pedra sobre pedra, aos pés da Acrópole. Na Turquia, o grupo de capacete antes dos quadriciclos nos vales da Capadócia e o silêncio da Casa da Virgem Maria, em Éfeso, sob o plátano centenário. Tem ainda o piquenique no jardim, as fotos penduradas na árvore como bandeirinhas, a escadaria dourada do navio — e uma porta antiga enorme, que ela abre como quem já sabe que atrás dela tem história.",
    photos: [
      {
        src: labibGrupoCampanario.url,
        caption: "Grécia: o grupo reunido quando o céu virou laranja",
        alt: "Grupo de viajantes da Create Travel reunido diante de campanário de pedra iluminado ao poente, na Grécia",
      },
      {
        src: labibOdeonNoite.url,
        caption: "Odeon de Herodes Ático iluminado, aos pés da Acrópole",
        alt: "Viajantes diante do Odeon de Herodes Ático iluminado à noite, aos pés da Acrópole de Atenas, Grécia",
      },
      {
        src: labibCapadociaQuadriciclos.url,
        caption: "Capadócia: capacete na cabeça, vale logo ali",
        alt: "Grupo de viajantes de capacete antes do passeio de quadriciclo nos vales da Capadócia, Turquia",
      },
      {
        src: labibEfeso.url,
        caption: "Éfeso: o silêncio da Casa da Virgem Maria",
        alt: "Viajante em frente à entrada de pedra da Casa da Virgem Maria, em Éfeso, sob plátano centenário, Turquia",
      },
      {
        src: labibJantarGrupo.url,
        caption: "A mesa longa que ninguém quis encerrar",
        alt: "Grupo de viajantes da Create Travel em jantar numa mesa longa de restaurante grego, com taças e velas",
      },
      {
        src: labibTemploHefesto.url,
        caption: "Ágora de Atenas: o Templo de Hefesto ao meio-dia",
        alt: "Viajante na Ágora Antiga de Atenas com o Templo de Hefesto ao fundo, sob céu azul, Grécia",
      },
      {
        src: labibAgoraHefesto.url,
        caption: "Duas amigas, colunas dóricas e nenhuma pressa",
        alt: "Duas viajantes diante das colunas dóricas do Templo de Hefesto, na Ágora de Atenas, Grécia",
      },
      {
        src: labibPiqueniqueJardim.url,
        caption: "Piquenique no jardim, fotos penduradas na árvore",
        alt: "Grupo de viajantes em piquenique num jardim com fotos da viagem penduradas em uma árvore",
      },
      {
        src: labibCruzeiroEscadaria.url,
        caption: "A escadaria dourada do navio, no fim da noite",
        alt: "Grupo de viajantes sentadas na escadaria iluminada do átrio dourado de um navio de cruzeiro",
      },
      {
        src: labibPortaoMadeira.url,
        caption: "A porta antiga que ela abre como quem sabe a história",
        alt: "Viajante de chapéu apoiada em portão antigo de madeira maciça com tachas de bronze",
      },
      {
        src: labibAtenasRuaErmou.url,
        caption: "Atenas: o grupo inteiro na Ermou, igreja bizantina ao fundo",
        alt: "Grupo de viajantes da Create Travel posando na rua Ermou, em Atenas, com igreja bizantina de cúpula ao fundo",
      },
      {
        src: labibBrindeIgrejaCupula.url,
        caption: "O brinde do grupo diante da capela de cúpula azul",
        alt: "Grupo de viajantes erguendo taças de espumante diante de capela grega branca com cúpula azul",
      },
      {
        src: labibIgrejaIconostase.url,
        caption: "O iconostase entalhado, o silêncio de dentro",
        alt: "Viajante diante de iconostase de madeira entalhada com ícones dourados em igreja ortodoxa grega",
      },
      {
        src: labibMykonosBougainvilleBranco.url,
        caption: "Mykonos: cal, buganvília e vinho esperando",
        alt: "Viajante de vestido branco em pátio de Mykonos com paredes de cal e buganvílias floridas",
      },
      {
        src: labibMykonosBancoBougainvilles.url,
        caption: "Um banco branco, duas portas azuis e a noite chegando",
        alt: "Viajante sentada em banco branco entre vasos de buganvília diante de portas azuis em Mykonos, Grécia",
      },
      {
        src: labibCapadociaCavernaMarcelo.url,
        caption: "Capadócia: dentro da rocha, com o Marcelo",
        alt: "Viajante de chapéu ao lado de travel designer da Create Travel dentro de caverna de rocha na Capadócia",
      },
      {
        src: labibSagradaFamiliaVitrais.url,
        caption: "Sagrada Família: sentadas dentro da luz colorida",
        alt: "Grupo de viajantes sentadas no interior da Sagrada Família, em Barcelona, com vitrais azuis e verdes ao fundo",
      },
      {
        src: labibParkGuellAmigas.url,
        caption: "Barcelona: as amigas na entrada do Park Güell",
        alt: "Quatro viajantes diante da casa de mosaicos de Gaudí na entrada do Park Güell, em Barcelona",
      },
      {
        src: labibPiqueniqueSurpresaMesa.url,
        caption: "A mesa quadriculada do piquenique surpresa, em Barcelona",
        alt: "Grupo de viajantes ao redor de mesa de piquenique com toalha quadriculada vermelha e espumante, em Barcelona",
      },
    ],

    suggestedCaptions: [],
    photoDirection: "",
  },
];

