// Segundo lote de posts editoriais para destinos do portfólio Create Travel
// que ainda não tinham conteúdo no Blog.
// Público-alvo: viajantes 40+ de alta renda, ticket acima de R$ 25 mil por pessoa.
// Estrutura pensada para Google e para citação por IAs (ChatGPT, Gemini, Perplexity):
// pergunta-resposta objetiva, dados verificáveis, FAQ e vocabulário premium.

import type { DiaryPost } from "./diaryPosts";

export const diaryPostsDestinos2: DiaryPost[] = [
  {
    slug: "egito-terrestre-cairo-luxor-aswan-guia",
    title: "Egito terrestre: guia de Cairo, Luxor e Aswan para 2027",
    h1: "Egito por terra: Cairo, o deserto e os templos do sul",
    metaDescription:
      "Guia autoral do Egito terrestre: pirâmides de Gizé, o novo Grande Museu Egípcio, Luxor, Aswan e Abu Simbel. Melhor época, quantos dias e quanto custa uma viagem com curadoria.",
    keywords:
      "egito viagem, roteiro egito 12 dias, grande museu egipcio, piramides de gize, abu simbel, melhor epoca egito, quanto custa viagem egito, viagem egito com guia em portugues, egito 2027 grupo",
    intro:
      "Ninguém está preparado para a escala. Você viu a pirâmide em livro desde criança, sabe a altura de cor, e ainda assim, quando o carro contorna a última rua de Gizé e aquilo aparece inteiro contra o céu de areia, alguma coisa no corpo se recusa a aceitar. O Egito faz isso o tempo todo: transforma uma informação já sabida em experiência física. E a viagem por terra — sem a pressa do cruzeiro, com dias inteiros no Cairo e noites em Luxor e Aswan — é a maneira de deixar o país agir devagar.",
    sections: [
      {
        heading: "Cairo: pirâmides, o Grande Museu Egípcio e a cidade viva",
        paragraphs: [
          "As pirâmides de Gizé e a Esfinge merecem uma manhã inteira, começando cedo, antes do calor e dos ônibus. Vale contratar o acesso ao interior da Grande Pirâmide para quem não tem claustrofobia, e reservar uma parada no platô alto, onde as três aparecem alinhadas com a cidade ao fundo — a imagem que resume o paradoxo egípcio.",
          "O Grande Museu Egípcio, em Gizé, mudou a viagem. É o maior museu arqueológico do mundo dedicado a uma única civilização, com o acervo completo de Tutancâmon reunido pela primeira vez e a escadaria monumental de estátuas com vista para o platô. Reserve meio dia, no mínimo.",
          "E há o Cairo que não é faraônico: o Cairo copta, com a Igreja Suspensa; o Cairo islâmico, com a mesquita de Ibn Tulun e o bazar Khan el-Khalili; e o café da tarde num terraço com vista para o Nilo, ouvindo o chamado à oração de três minaretes ao mesmo tempo.",
        ],
      },
      {
        heading: "Luxor e Aswan: a maior concentração de história do planeta",
        paragraphs: [
          "Em Luxor, Karnak e sua Sala Hipóstila de 134 colunas ocupam a manhã; o Vale dos Reis e o templo de Hatshepsut, a margem oeste. Ver os túmulos com as cores originais preservadas — azul, ocre, vermelho — é entender que aquilo foi pintado para durar a eternidade, e está durando.",
          "Aswan é mais lenta, mais nubiana, mais africana. Feluca ao pôr do sol entre as ilhas de granito, o templo de Philae acessado de barco e uma tarde numa vila núbia, com casas azuis e chá com canela. É o contraponto sereno depois da densidade de Luxor.",
          "De Aswan sai a viagem a Abu Simbel — 280 km de deserto ou um voo de 45 minutos. Os quatro colossos de Ramsés II, realocados pedra a pedra nos anos 1960 para escapar do lago Nasser, são a obra de engenharia mais audaciosa do século XX aplicada à mais audaciosa da Antiguidade.",
        ],
      },
      {
        heading: "Melhor época, duração e ritmo confortável",
        paragraphs: [
          "A melhor janela vai de outubro a abril, com dias entre 22°C e 30°C. De maio a setembro o sul passa dos 40°C e as visitas ficam concentradas no amanhecer. Abril é especialmente agradável, com noites frescas no deserto.",
          "O roteiro ideal tem de 10 a 12 dias: quatro no Cairo, três em Luxor, dois em Aswan, um em Abu Simbel e, se houver folga, dois no Mar Vermelho ou no oásis do deserto branco.",
          "Nossos grupos viajam com egiptólogo falando português, hotéis com vista para o Nilo, transporte privativo com ar-condicionado e entradas compradas com antecedência. O aéreo é cotado à parte, porque as condições variam conforme a companhia escolhida.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar ao Egito?",
        a: "De outubro a abril, quando as temperaturas ficam entre 22°C e 30°C. Entre maio e setembro o sul do país ultrapassa 40°C e as visitas precisam ser feitas no início da manhã.",
      },
      {
        q: "Quantos dias são necessários para conhecer o Egito?",
        a: "De 10 a 12 dias para incluir Cairo, Luxor, Aswan e Abu Simbel com ritmo confortável. Em 8 dias é possível fazer Cairo e o sul, com menos tempo em cada cidade.",
      },
      {
        q: "Vale a pena visitar o Grande Museu Egípcio?",
        a: "Sim. É o maior museu do mundo dedicado a uma única civilização e reúne, pela primeira vez, todo o acervo de Tutancâmon. Reserve pelo menos meio dia da viagem.",
      },
      {
        q: "O Egito é seguro para turistas brasileiros?",
        a: "Os circuitos turísticos clássicos — Cairo, Luxor, Aswan e Mar Vermelho — operam normalmente e com forte presença de segurança. Recomenda-se viajar com operadora e guia credenciados.",
      },
      {
        q: "Quanto custa uma viagem ao Egito com curadoria?",
        a: "Roteiros autorais de 10 a 12 dias, com hotéis de alto padrão, egiptólogo em português, transporte privativo e Abu Simbel incluído, costumam partir de R$ 25 mil a R$ 35 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Grupo Egito · Abril 2027", href: "/grupos/egito-abril-2027" },
      { label: "Cruzeiros fluviais no Nilo", href: "/cruzeiros-fluviais" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Great Pyramid of Giza at golden hour seen from the desert plateau, long shadows on sand, warm ochre light, editorial travel photography, no people, no faces",
    publishedAt: "2026-08-05",
    readingMinutes: 11,
    category: "Destino",
    whatsappName: "Egito terrestre — Cairo, Luxor e Aswan",
  },
  {
    slug: "toscana-guia-viagem-autoral",
    title: "Toscana: guia de viagem autoral entre vinhedos e cidades de pedra",
    h1: "Toscana: a paisagem que a Europa inventou para si mesma",
    metaDescription:
      "Guia da Toscana para viajantes exigentes: Florença, Siena, Val d'Orcia, Chianti e Montalcino. Melhor época, quantos dias, agriturismos de alto padrão e quanto custa.",
    keywords:
      "toscana viagem, roteiro toscana 10 dias, val d orcia, chianti vinicolas, montalcino brunello, florenca siena, melhor epoca toscana, quanto custa viagem toscana, viagem italia curadoria",
    intro:
      "A Toscana tem uma vantagem injusta: ela já é uma imagem antes de ser um lugar. As fileiras de ciprestes, o ocre das casas de pedra, a colina que sobe até uma torre — tudo isso já está na sua cabeça. O que ninguém antecipa é o cheiro. Ervas secas ao meio-dia, madeira queimada nas cozinhas ao entardecer, o mosto adocicado das cantinas em setembro. A Toscana é um destino olfativo antes de ser visual, e é por isso que quem volta nunca fala das fotos.",
    sections: [
      {
        heading: "Florença e Siena: arte em escala humana",
        paragraphs: [
          "Florença cabe a pé. O David na Accademia, os Uffizi com Botticelli e Caravaggio, a cúpula de Brunelleschi vista do Piazzale Michelangelo no fim da tarde. Vale reservar visitas fora do horário de pico e um artesão — encadernador, ourives do Ponte Vecchio, restaurador de afresco — para dar dimensão de ofício a tudo aquilo.",
          "Siena é medieval de verdade: a Piazza del Campo em concha, a catedral em faixas de mármore branco e verde, as contrade que sustentam o Palio duas vezes por ano. Dormir uma noite ali, quando os ônibus vão embora, muda o destino.",
          "Entre as duas, San Gimignano e suas torres, Volterra e o alabastro, Pienza e o queijo pecorino. Cidades pequenas que sustentam meio dia inteiro sem pressa.",
        ],
      },
      {
        heading: "Val d'Orcia, Chianti e Montalcino: o vinho como roteiro",
        paragraphs: [
          "O Val d'Orcia é Patrimônio Mundial pela paisagem — não por um monumento. As estradas brancas entre Pienza, Montalcino e Montepulciano são o motivo pelo qual se aluga um carro na Itália. Pare no alto, desligue o motor, escute.",
          "No Chianti Classico, as vinícolas do Galo Preto recebem para degustações sentadas, com azeite novo e salumi. Em Montalcino está o Brunello, um dos maiores vinhos do mundo, com verticais que atravessam décadas em adegas escavadas na rocha.",
          "Curamos visitas em propriedades familiares que não recebem grupos grandes: almoço na casa do produtor, colheita em setembro, e a diferença entre provar o vinho e entender a encosta em que ele nasceu.",
        ],
      },
      {
        heading: "Onde dormir, quando ir e quantos dias",
        paragraphs: [
          "A hospedagem define a viagem: agriturismos de alto padrão e relais instalados em casas senhoriais do século XVI, com piscina voltada para o vale, cozinha de produção própria e no máximo doze quartos. Vale ficar três ou quatro noites no mesmo endereço e sair em raios curtos.",
          "As melhores épocas são maio e junho, quando o campo está verde e florido, e setembro e outubro, na vindima, com luz dourada e temperaturas amenas. Julho e agosto são quentes e cheios; o inverno é bonito e íntimo, com menos serviços abertos.",
          "De 8 a 12 dias é o ideal: duas ou três noites em Florença, uma em Siena e o restante no campo, entre Chianti e Val d'Orcia.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar à Toscana?",
        a: "Maio e junho, com o campo verde e florido, ou setembro e outubro, na vindima, com luz dourada e clima ameno. Julho e agosto são quentes e movimentados.",
      },
      {
        q: "Quantos dias ficar na Toscana?",
        a: "De 8 a 12 dias permitem combinar Florença, Siena e o campo entre Chianti e Val d'Orcia sem pressa. Com 5 dias dá para Florença mais uma base rural.",
      },
      {
        q: "Precisa alugar carro na Toscana?",
        a: "Para o campo, sim — as estradas brancas do Val d'Orcia e as vinícolas do Chianti pedem carro ou motorista privativo. Florença e Siena se resolvem a pé e de trem.",
      },
      {
        q: "Qual a diferença entre Chianti, Brunello e Vino Nobile?",
        a: "São três denominações toscanas à base de sangiovese: o Chianti Classico é mais versátil, o Brunello di Montalcino é o mais estruturado e longevo, e o Vino Nobile di Montepulciano fica entre os dois.",
      },
      {
        q: "Quanto custa uma viagem à Toscana com curadoria?",
        a: "Roteiros de 9 a 12 dias com relais e agriturismos de alto padrão, motorista privativo e degustações privativas costumam partir de R$ 35 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na Itália", href: "/destinos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Val d'Orcia Tuscany at sunrise, winding white road lined with cypress trees, rolling golden hills, soft mist in the valley, editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 10,
    category: "Destino",
    whatsappName: "Toscana — Florença, Chianti e Val d'Orcia",
  },
  {
    slug: "grecia-ilhas-guia-viagem",
    title: "Grécia: guia de Atenas, Cíclades e as ilhas menos óbvias",
    h1: "Grécia: a luz branca do Egeu e as ilhas que quase ninguém indica",
    metaDescription:
      "Guia autoral da Grécia: Atenas, Santorini, Naxos, Milos, Paros e Creta. Melhor época, quantos dias, como circular entre as ilhas e quanto custa uma viagem com curadoria.",
    keywords:
      "grecia viagem, roteiro grecia ilhas, santorini naxos milos, atenas acropole, melhor epoca grecia, quanto custa viagem grecia, cruzeiro grecia 2027, ilhas gregas curadoria",
    intro:
      "Há um momento, sempre no segundo dia, em que a Grécia deixa de ser cartão-postal. Costuma acontecer numa taverna de porto, tarde demais para o almoço e cedo demais para o jantar, quando o dono traz um prato que você não pediu e senta na mesa ao lado. A luz do Egeu tem uma qualidade quase mineral — ela não ilumina, ela lava. E é sob essa luz que a viagem acontece: entre a pedra da Acrópole, a cal das ilhas e a mesa que nunca termina.",
    sections: [
      {
        heading: "Atenas: dois dias que valem a viagem inteira",
        paragraphs: [
          "A Acrópole logo na abertura, às oito da manhã, antes do calor. Depois o Museu da Acrópole, com o friso do Partenon exposto na mesma orientação do templo original — a melhor aula de arquitetura antiga que existe.",
          "À tarde, os bairros: Plaka e Anafiotika, com casas cicládicas encravadas na encosta; Monastiraki e seu mercado; Psyrri para jantar. Termine no rooftop de um hotel em Sintagma vendo o Partenon iluminado.",
          "Vale acrescentar um dia fora da cidade: Cabo Sunion e o templo de Poseidon no pôr do sol, ou Delfos, no flanco do monte Parnaso, onde o oráculo respondia a impérios inteiros.",
        ],
      },
      {
        heading: "As ilhas: além de Santorini e Mykonos",
        paragraphs: [
          "Santorini merece a fama pela caldeira vulcânica, mas ganha muito quando se fica em Oia fora do verão e se reserva um jantar em vinícola de assyrtiko, uva que cresce enrolada no chão para resistir ao vento.",
          "As ilhas que costumamos indicar para quem já viajou muito são outras: Milos, com as formações brancas de Sarakiniko e enseadas só alcançáveis de barco; Naxos, verde, agrícola e com queijos e cidadelas venezianas; Paros e Antiparos, elegantes sem serem estridentes; Folegandros, para silêncio absoluto.",
          "Creta é quase um país: palácio minoico de Cnossos, o desfiladeiro de Samaria, azeites premiados e uma cozinha própria. Merece cinco dias sozinha.",
        ],
      },
      {
        heading: "Como circular, quando ir e quantos dias",
        paragraphs: [
          "Balsas rápidas ligam Pireu às Cíclades em 2 a 5 horas, e há voos domésticos para Santorini, Mykonos e Creta. Para quem prefere não desfazer malas, o cruzeiro pelo Egeu resolve a logística e chega a portos pequenos que a balsa não atende.",
          "A melhor janela é de maio a meados de junho e de setembro a outubro: mar quente, dias longos e ilhas sem a lotação de agosto. O meltemi, vento do norte, sopra forte em julho e agosto e pode cancelar balsas.",
          "De 10 a 14 dias: dois em Atenas e o restante entre duas ou três ilhas — nunca mais do que isso, sob pena de passar a viagem em porto.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar à Grécia?",
        a: "De maio a meados de junho e de setembro a outubro, com mar quente, dias longos e menos gente. Agosto é o mês mais cheio e o vento meltemi pode afetar as balsas.",
      },
      {
        q: "Quantas ilhas gregas dá para conhecer em uma viagem?",
        a: "Duas ou três em 10 a 14 dias. Mais do que isso significa passar boa parte do tempo em deslocamentos entre portos.",
      },
      {
        q: "Quais ilhas gregas são as mais tranquilas?",
        a: "Milos, Naxos, Paros, Folegandros e Sifnos oferecem paisagem e gastronomia de alto nível com muito menos movimento do que Santorini e Mykonos.",
      },
      {
        q: "É melhor viajar pelas ilhas gregas de balsa ou de cruzeiro?",
        a: "A balsa dá liberdade e permite ficar mais tempo em cada ilha. O cruzeiro elimina trocas de hotel e alcança portos menores, sendo mais confortável para quem viaja em grupo.",
      },
      {
        q: "Quanto custa uma viagem à Grécia com curadoria?",
        a: "Roteiros de 11 a 14 dias com hotéis-butique, transfers privativos, barco privado em uma das ilhas e experiências gastronômicas partem, em média, de R$ 35 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Grupo Grécia 2026", href: "/grupos/grecia-2026" },
      { label: "Cruzeiros fluviais e marítimos", href: "/cruzeiros-fluviais" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Cycladic island village at golden hour, whitewashed houses and blue domes above a caldera, deep blue Aegean sea, warm editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 10,
    category: "Destino",
    whatsappName: "Grécia — Atenas e ilhas do Egeu",
  },
  {
    slug: "galapagos-guia-viagem",
    title: "Galápagos: guia de viagem, melhor época e como escolher o barco",
    h1: "Galápagos: o único lugar do mundo onde os animais não fogem",
    metaDescription:
      "Guia de Galápagos para viajantes exigentes: cruzeiro ou base em terra, melhor época, quais ilhas escolher, taxas do parque e quanto custa uma viagem com curadoria.",
    keywords:
      "galapagos viagem, cruzeiro galapagos, melhor epoca galapagos, quantos dias galapagos, galapagos quanto custa, equador galapagos roteiro, ilhas galapagos animais, viagem galapagos luxo",
    intro:
      "O choque de Galápagos não é ver um animal raro. É ver um animal comum que simplesmente não tem medo de você. O leão-marinho continua dormindo na escada do píer. O atobá-de-pés-azuis faz sua dança de acasalamento a um metro da trilha. A iguana marinha espirra sal e volta a olhar o horizonte como se você não existisse. Em nenhum outro lugar do planeta a natureza aceita a presença humana com tal indiferença — e é essa indiferença, não a fauna, que torna as ilhas inesquecíveis.",
    sections: [
      {
        heading: "Cruzeiro ou base em terra: a decisão que define a viagem",
        paragraphs: [
          "O cruzeiro de expedição, com 16 a 40 passageiros, é a forma mais completa: navega à noite e amanhece em ilhas remotas — Genovesa, Fernandina, Española — que os barcos de bate-volta não alcançam. São dois desembarques por dia, com naturalista credenciado pelo parque.",
          "A base em terra, em Santa Cruz ou San Cristóbal, permite hotéis maiores, mais conforto e flexibilidade, mas limita as visitas às ilhas centrais. Funciona bem para quem tem enjoo, viaja com a família ou quer combinar com Quito e a Amazônia equatoriana.",
          "Para quem faz a viagem uma vez na vida, indicamos o cruzeiro de 7 a 8 noites com cabine externa e varanda. A diferença entre um itinerário e outro está nas ilhas — vale escolher o barco pelo roteiro, não pelo nome.",
        ],
      },
      {
        heading: "Melhor época e o que se vê em cada estação",
        paragraphs: [
          "De dezembro a maio é a temporada quente e úmida: mar mais calmo e quente (25°C a 27°C), ideal para snorkel, com chuvas rápidas, vegetação verde e a desova das tartarugas-marinhas.",
          "De junho a novembro é a estação seca, com a corrente de Humboldt trazendo água fria e rica em nutrientes: mais atividade marinha, baleias e golfinhos, albatrozes em Española de abril a dezembro e mar mais agitado.",
          "Não existe má época — existe a época do que você quer ver. Para snorkel confortável, janeiro a maio. Para vida marinha intensa e pinguins, julho a novembro.",
        ],
      },
      {
        heading: "Logística, taxas e quantos dias reservar",
        paragraphs: [
          "O acesso é por Quito ou Guayaquil, com voo de cerca de 2h para Baltra ou San Cristóbal. É cobrada a taxa de entrada do Parque Nacional (US$ 200 por adulto estrangeiro desde 2024) e o cartão de trânsito de US$ 20, além de controle rigoroso de bagagem por biossegurança.",
          "Reserve de 10 a 13 dias no total: 7 a 8 noites de navegação e 2 a 3 noites entre Quito e Otavalo, que valem a viagem por si só.",
          "Barcos de expedição de alto padrão vendem com 9 a 12 meses de antecedência para as datas boas. Planejar cedo é parte da curadoria.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar a Galápagos?",
        a: "De dezembro a maio o mar é mais calmo e quente, ideal para snorkel. De junho a novembro a água é fria e rica em nutrientes, com mais vida marinha, baleias e pinguins.",
      },
      {
        q: "É melhor fazer cruzeiro ou ficar em hotel em Galápagos?",
        a: "O cruzeiro de expedição alcança ilhas remotas como Genovesa e Fernandina e oferece dois desembarques diários. A base em terra é mais confortável, porém limitada às ilhas centrais.",
      },
      {
        q: "Quantos dias ficar em Galápagos?",
        a: "De 7 a 8 noites nas ilhas, somando 2 a 3 noites no Equador continental, o que resulta em uma viagem total de 10 a 13 dias.",
      },
      {
        q: "Quais taxas são cobradas em Galápagos?",
        a: "A taxa de entrada do Parque Nacional custa US$ 200 por adulto estrangeiro e o cartão de trânsito, US$ 20. Ambas são pagas na chegada e não estão incluídas no valor do barco.",
      },
      {
        q: "Quanto custa uma viagem a Galápagos com curadoria?",
        a: "Cruzeiros de expedição de alto padrão de 7 a 8 noites, com voos internos e programa em Quito, costumam partir de R$ 45 mil a R$ 70 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Grupo Equador e Galápagos · Carnaval 2027", href: "/grupos/equador-galapagos-carnaval-2027" },
      { label: "Grupo Equador e Galápagos 2026", href: "/grupos/equador-galapagos-2026" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Galapagos volcanic coastline at golden hour, marine iguanas on black lava rock, blue-footed booby, turquoise water, expedition yacht anchored far offshore, editorial wildlife photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 10,
    category: "Natureza",
    whatsappName: "Galápagos — cruzeiro de expedição",
  },
  {
    slug: "uyuni-atacama-guia-viagem",
    title: "Uyuni e Atacama: guia da travessia entre o sal e o deserto",
    h1: "Uyuni e Atacama: a travessia mais fotogênica da América do Sul",
    metaDescription:
      "Guia da travessia Atacama–Uyuni: melhor época, espelho d'água, altitude, quantos dias e como fazer o cruzamento com conforto e guia privativo. Custos e dicas práticas.",
    keywords:
      "salar de uyuni, atacama uyuni travessia, melhor epoca uyuni espelho dagua, deserto atacama roteiro, altitude uyuni, quanto custa viagem uyuni, san pedro de atacama luxo, bolivia chile viagem",
    intro:
      "Existe um instante, no Salar de Uyuni depois da chuva, em que o cérebro desiste. A crosta de sal cobre-se de dois centímetros de água parada e o céu inteiro se duplica no chão — nuvens embaixo dos pés, horizonte sem linha, sombra flutuando. Não há referência. É o lugar mais silencioso e mais desorientador que já vi. E a duas centenas de quilômetros dali, do outro lado da cordilheira, o Atacama faz o oposto: aperta a paisagem em cânions, gêiseres e lagunas cor de turquesa.",
    sections: [
      {
        heading: "San Pedro de Atacama: o deserto mais seco do mundo",
        paragraphs: [
          "O Valle de la Luna no fim da tarde, quando as cristas de sal ficam rosadas; os gêiseres do Tatio ao amanhecer, a 4.320 metros, com fumarolas de vapor a 85°C; as lagunas altiplânicas Miscanti e Miñiques, azuis contra ocre; e o salar de Atacama com flamingos ao entardecer.",
          "O céu do Atacama é o mais limpo do planeta — por isso os grandes observatórios estão ali. Uma noite de astronomia com telescópio, longe das luzes, é obrigatória.",
          "As hospedagens de alto padrão em San Pedro trabalham em regime all-inclusive, com excursões guiadas, spa e arquitetura de adobe. É o lugar certo para aclimatar antes de subir.",
        ],
      },
      {
        heading: "A travessia até Uyuni: dois dias no altiplano",
        paragraphs: [
          "A travessia por terra leva dois ou três dias em 4x4, cruzando a fronteira em Hito Cajón e subindo pela Reserva Eduardo Avaroa: Laguna Verde ao pé do vulcão Licancabur, Laguna Colorada, vermelha de algas e coberta de flamingos, o Deserto de Dalí e o vale de rochas do Árbol de Piedra.",
          "As acomodações no percurso são simples por natureza — vale escolher os poucos lodges com aquecimento e banho privativo, e viajar com veículo e guia exclusivos em vez de partilhado.",
          "Chega-se a Uyuni pelo sul, com noite em hotel de sal em Tahua ou Colchani, ao pé do vulcão Tunupa.",
        ],
      },
      {
        heading: "Espelho d'água, altitude e quando ir",
        paragraphs: [
          "O efeito espelho acontece na estação chuvosa, de janeiro a março, quando parte do salar fica alagada. Fora dessa janela, de maio a novembro, a crosta seca revela os hexágonos e permite dirigir por todo o salar, chegando à Ilha Incahuasi e seus cactos centenários.",
          "A altitude é o ponto de atenção: San Pedro fica a 2.400 m, os pontos altos passam de 4.800 m e Uyuni está a 3.660 m. Suba devagar, reserve dois dias de aclimatação e converse com seu médico sobre profilaxia.",
          "Reserve de 8 a 10 dias no total, incluindo a chegada por Calama ou La Paz. É uma viagem de contraste — e um dos roteiros mais fotogênicos que existem.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para ver o espelho d'água no Salar de Uyuni?",
        a: "De janeiro a março, na estação chuvosa, quando parte do salar fica alagada e reflete o céu. De maio a novembro a crosta seca permite percorrer todo o salar e chegar à Ilha Incahuasi.",
      },
      {
        q: "Quantos dias dura a travessia entre Atacama e Uyuni?",
        a: "Dois a três dias de 4x4 cruzando a Reserva Eduardo Avaroa. Somando San Pedro de Atacama e Uyuni, a viagem completa costuma ter de 8 a 10 dias.",
      },
      {
        q: "A altitude em Uyuni e no Atacama é um problema?",
        a: "Exige cuidado. San Pedro fica a 2.400 m, alguns pontos passam de 4.800 m e Uyuni está a 3.660 m. Recomenda-se subir gradualmente, reservar dias de aclimatação e consultar um médico antes.",
      },
      {
        q: "Dá para fazer Uyuni sem passar pelo Atacama?",
        a: "Sim. É possível chegar por La Paz, com voo até Uyuni, e fazer o salar em dois ou três dias. A travessia pelo Atacama, porém, acrescenta as lagunas altiplânicas e os gêiseres.",
      },
      {
        q: "Quanto custa a viagem Atacama e Uyuni com curadoria?",
        a: "Roteiros de 9 a 10 dias com hotel all-inclusive em San Pedro, travessia em 4x4 privativo, guia exclusivo e hotel de sal partem, em média, de R$ 30 mil a R$ 45 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na América do Sul", href: "/destinos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Salar de Uyuni with thin layer of water reflecting dramatic clouds at sunset, perfect mirror horizon, distant volcano, ultra wide editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 10,
    category: "Natureza",
    whatsappName: "Atacama e Uyuni — travessia do altiplano",
  },
  {
    slug: "rajastao-india-guia-viagem",
    title: "Rajastão: guia de viagem pela Índia dos palácios e do deserto",
    h1: "Rajastão: a Índia em cor saturada, dos palácios ao Thar",
    metaDescription:
      "Guia do Rajastão para viajantes exigentes: Jaipur, Jodhpur, Udaipur, Jaisalmer e o Taj Mahal. Melhor época, quantos dias, palácios-hotéis e quanto custa a viagem.",
    keywords:
      "rajastao viagem, roteiro india rajastao, jaipur jodhpur udaipur jaisalmer, taj mahal, melhor epoca india, quanto custa viagem india, palacios hotel india, india viagem de luxo",
    intro:
      "Ninguém chega ao Rajastão preparado para a cor. Não é o exagero cansativo das fotos — é o contrário: é uma lógica. Jodhpur é azul porque a cal com anil afasta insetos. Jaipur é rosa porque um marajá pintou a cidade para receber um príncipe em 1876. Jaisalmer é dourada porque é feita de arenito do deserto. Cada cor tem um motivo prático, e é essa mistura de beleza e razão que faz do Rajastão a Índia mais compreensível para quem chega pela primeira vez.",
    sections: [
      {
        heading: "Os quatro tons: Jaipur, Jodhpur, Udaipur e Jaisalmer",
        paragraphs: [
          "Jaipur guarda o Palácio dos Ventos, o Amber Fort acima do lago e o Jantar Mantar, observatório astronômico do século XVIII com instrumentos de pedra em escala de prédio. É também a capital indiana das joias e dos tecidos estampados à mão.",
          "Jodhpur é dominada pelo Mehrangarh, um dos fortes mais impressionantes da Ásia, suspenso 120 metros sobre o mar azul das casas. Udaipur é o oposto: água, ilhas, palácios brancos e pôr do sol no lago Pichola.",
          "Jaisalmer, no coração do deserto do Thar, é uma cidadela viva de arenito onde ainda moram famílias dentro das muralhas. Uma noite em acampamento de luxo nas dunas de Sam, com jantar sob as estrelas, é o fecho natural do roteiro.",
        ],
      },
      {
        heading: "Agra e o Taj Mahal: a parada obrigatória",
        paragraphs: [
          "O Taj Mahal ao amanhecer, com a névoa subindo do rio Yamuna e o mármore mudando de rosa a branco, é uma das poucas visitas que superam a expectativa. Vá no primeiro horário e reserve também o Forte de Agra, do outro lado do rio.",
          "No caminho, Fatehpur Sikri, capital mogol abandonada e intacta, quase sempre vazia — um dos melhores conjuntos arquitetônicos da Índia.",
          "Delhi merece dois dias no início ou no fim: o túmulo de Humayun, a Jama Masjid, Old Delhi de riquixá e os jardins de Lodhi ao amanhecer.",
        ],
      },
      {
        heading: "Palácios-hotéis, melhor época e ritmo",
        paragraphs: [
          "O Rajastão é o destino onde a hospedagem é atração: havelis restauradas, fortes convertidos em hotéis de vinte quartos e palácios ainda habitados pelas famílias reais. Dormir nesses endereços é metade da viagem.",
          "A melhor época vai de outubro a março, com dias de 22°C a 28°C e noites frescas no deserto. De abril a junho o calor passa de 42°C; de julho a setembro chove com as monções.",
          "Reserve de 12 a 15 dias, com trechos de carro e motorista privativo, um voo interno para encurtar as distâncias maiores e, sempre que possível, três noites em Udaipur — a cidade que quase todo mundo quer esticar.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar ao Rajastão?",
        a: "De outubro a março, com dias entre 22°C e 28°C e noites frescas. De abril a junho o calor supera 42°C e de julho a setembro ocorrem as monções.",
      },
      {
        q: "Quantos dias são necessários para conhecer o Rajastão?",
        a: "De 12 a 15 dias para incluir Delhi, Agra, Jaipur, Jodhpur, Udaipur e Jaisalmer com ritmo confortável. Em 10 dias é possível fazer o triângulo dourado mais Jodhpur e Udaipur.",
      },
      {
        q: "Brasileiro precisa de visto para a Índia?",
        a: "Sim. É necessário o e-visa de turismo, solicitado online antes do embarque, com passaporte válido por pelo menos seis meses.",
      },
      {
        q: "É melhor viajar de carro ou de trem pelo Rajastão?",
        a: "Carro com motorista privativo dá mais flexibilidade e permite paradas em vilarejos e templos. Trens e um voo interno ajudam nos trechos mais longos, como Jaisalmer.",
      },
      {
        q: "Quanto custa uma viagem ao Rajastão com curadoria?",
        a: "Roteiros de 12 a 15 dias com palácios-hotéis, motorista privativo, guias locais em português ou espanhol e experiências exclusivas partem, em média, de R$ 35 mil a R$ 55 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Grupo Índia e Sri Lanka · Holi 2027", href: "/grupos/india-sri-lanka-holi-2027" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Blue city of Jodhpur seen from Mehrangarh Fort at golden hour, sea of indigo rooftops, desert horizon, warm editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 11,
    category: "Cultura",
    whatsappName: "Rajastão — Índia dos palácios",
  },
  {
    slug: "polinesia-francesa-guia-viagem",
    title: "Polinésia Francesa: guia de Taiti, Bora Bora e as ilhas remotas",
    h1: "Polinésia Francesa: a água que muda de cor sete vezes por dia",
    metaDescription:
      "Guia da Polinésia Francesa: Bora Bora, Moorea, Taha'a, Fakarava e Rangiroa. Melhor época, quantos dias, overwater bungalows e quanto custa uma viagem com curadoria.",
    keywords:
      "polinesia francesa viagem, bora bora quanto custa, moorea taha a rangiroa, melhor epoca polinesia, overwater bungalow, lua de mel polinesia, taiti roteiro, viagem tahiti luxo",
    intro:
      "Ninguém avisa que a lagoa muda de cor durante o dia. Às sete da manhã ela é prateada e lisa como mercúrio; ao meio-dia é aquele turquesa impossível das fotos; às cinco da tarde vira lilás e depois azul-tinta, e às seis já não há diferença entre a água e o céu. Passar uma semana na Polinésia é aprender a ler essa mudança e a organizar o dia em torno dela. É o destino mais lento e mais luminoso do planeta — e o que exige menos do viajante e mais do planejamento.",
    sections: [
      {
        heading: "Bora Bora, Moorea e Taha'a: as ilhas altas",
        paragraphs: [
          "Bora Bora é o cartão-postal e cumpre: o monte Otemanu vertical no meio de uma lagoa de sete tons, resorts sobre a água com escada direta para o mar e piqueniques em motu privativo. Vale três a quatro noites — o suficiente para não virar rotina.",
          "Moorea é a ilha da paisagem: baías de Cook e Opunohu, plantações de abacaxi, trilhas ao Belvedere e nado com raias no raso. É mais viva, mais habitada, mais barata que Bora Bora e a preferida de quem volta.",
          "Taha'a é a ilha da baunilha e do rum, com o famoso 'jardim de corais' — uma correnteza rasa entre dois motus que se atravessa boiando, com peixes por todo lado. Serena e sofisticada.",
        ],
      },
      {
        heading: "Tuamotu: os atóis para quem mergulha",
        paragraphs: [
          "Fakarava é Reserva da Biosfera pela Unesco e tem a Passe Sul de Tumakohua, onde centenas de tubarões-de-recife se enfileiram na correnteza — um dos mergulhos mais impressionantes do mundo.",
          "Rangiroa, o segundo maior atol do planeta, tem a Passe de Tiputa com golfinhos residentes e uma vinícola implantada sobre coral, caso raro no Pacífico.",
          "Se o mergulho não for o foco, mesmo assim vale uma escala em atol: a escala de horizonte e o silêncio dos motus não existem nas ilhas altas.",
        ],
      },
      {
        heading: "Quando ir, quantos dias e como planejar",
        paragraphs: [
          "A melhor época é a estação seca, de maio a outubro, com 24°C a 28°C, baixa umidade e mar calmo. De julho a outubro passam baleias jubarte por Moorea e Rurutu. De novembro a abril chove mais, com pancadas curtas e calor úmido.",
          "Reserve de 12 a 16 dias no total, contando o voo. O ideal é combinar duas ou três ilhas — por exemplo Moorea, Taha'a e Bora Bora, ou uma ilha alta mais um atol — com voos domésticos da Air Tahiti.",
          "É um destino de reserva antecipada: os melhores overwater bungalows e as datas de lua de mel esgotam com 8 a 12 meses. Vale planejar cedo e emendar com Nova Zelândia ou Austrália, já que a rota aérea favorece.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar à Polinésia Francesa?",
        a: "De maio a outubro, na estação seca, com temperaturas entre 24°C e 28°C, baixa umidade e mar calmo. Entre julho e outubro é possível avistar baleias jubarte.",
      },
      {
        q: "Quantos dias ficar na Polinésia Francesa?",
        a: "De 12 a 16 dias no total, combinando duas ou três ilhas. Menos do que isso faz com que os voos internos consumam boa parte do programa.",
      },
      {
        q: "Quais ilhas escolher além de Bora Bora?",
        a: "Moorea pela paisagem e pelas trilhas, Taha'a pela baunilha e pelo jardim de corais, e os atóis de Fakarava e Rangiroa para mergulho de classe mundial.",
      },
      {
        q: "Como se chega à Polinésia Francesa saindo do Brasil?",
        a: "Os trajetos mais comuns partem de São Paulo via Santiago, Los Angeles ou Paris até Papeete, no Taiti, com um ou dois pontos de conexão e cerca de 24 a 30 horas de viagem.",
      },
      {
        q: "Quanto custa uma viagem à Polinésia Francesa?",
        a: "Programas de 10 a 12 noites com overwater bungalows, voos internos e experiências privativas partem, em média, de R$ 60 mil a R$ 100 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Lua de mel personalizada", href: "/lua-de-mel-personalizada" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Bora Bora lagoon at golden hour, overwater bungalows on stilts, Mount Otemanu silhouette, turquoise water in seven shades, editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 10,
    category: "Destino",
    whatsappName: "Polinésia Francesa — Bora Bora e atóis",
  },
  {
    slug: "mexico-guia-viagem-autoral",
    title: "México: guia autoral de Yucatán, Oaxaca e Cidade do México",
    h1: "México: o país que confunde quem acha que já o conhece",
    metaDescription:
      "Guia autoral do México: Cidade do México, Oaxaca, Chiapas, Yucatán e Baja California. Melhor época, quantos dias, gastronomia e quanto custa uma viagem com curadoria.",
    keywords:
      "mexico viagem, roteiro mexico 12 dias, oaxaca chiapas yucatan, cidade do mexico o que fazer, chichen itza uxmal, melhor epoca mexico, quanto custa viagem mexico, mexico viagem autoral",
    intro:
      "O erro é achar que o México é um resort em Cancún. O país tem 35 sítios reconhecidos pela Unesco, a primeira cozinha nacional a virar Patrimônio Imaterial da Humanidade e uma sequência de civilizações — olmeca, zapoteca, maia, mexica — que deixaram cidades inteiras de pedra dentro da floresta. Viajar bem pelo México é trocar a praia pela altitude, o buffet pela cozinha regional e o passeio pelo tempo com quem sabe ler uma estela maia.",
    sections: [
      {
        heading: "Cidade do México e Oaxaca: a espinha cultural",
        paragraphs: [
          "A Cidade do México sustenta cinco dias sem esforço: o Museu Nacional de Antropologia, um dos melhores do mundo; Coyoacán e a Casa Azul de Frida Kahlo; os murais de Diego Rivera no Palácio Nacional; Teotihuacán ao amanhecer, de balão ou a pé; e as mesas de Polanco e Roma, entre as melhores da América Latina.",
          "Oaxaca é a capital gastronômica: sete moles, mercados de Tlacolula, mezcalerías artesanais em Santiago Matatlán e ateliês de barro negro e alebrijes nos vilarejos ao redor. Ao lado, Monte Albán, a capital zapoteca sobre o vale.",
          "Se as datas permitirem, o Día de Muertos, entre 31 de outubro e 2 de novembro, é a expressão cultural mais intensa das Américas — e exige reservas com quase um ano de antecedência.",
        ],
      },
      {
        heading: "Chiapas e Yucatán: selva, cenotes e cidades maias",
        paragraphs: [
          "Em Chiapas, Palenque emerge da selva com o túmulo de Pakal, San Cristóbal de las Casas guarda a cultura viva tzotzil e o Cânion do Sumidero abre paredões de mil metros sobre o rio Grijalva.",
          "No Yucatán, Uxmal e a rota Puuc superam Chichén Itzá em atmosfera, com muito menos gente. Mérida é uma cidade elegante de haciendas restauradas, e os cenotes de Homún e Cuzamá oferecem banho em água doce dentro de cavernas de calcário.",
          "A costa vale por Holbox, Bacalar e sua lagoa de sete azuis, e a reserva de Sian Ka'an — não pelos grandes resorts de Cancún.",
        ],
      },
      {
        heading: "Melhor época, duração e como montar o roteiro",
        paragraphs: [
          "A melhor janela vai de novembro a abril, na estação seca, com clima agradável no altiplano e menos umidade no Caribe. De junho a outubro chove mais e há risco de furacões na costa leste. Baja California recebe baleias-cinzentas de janeiro a março.",
          "Reserve de 12 a 16 dias. Um desenho eficiente: quatro noites na Cidade do México, três em Oaxaca, três em Chiapas e quatro no Yucatán, com voos internos curtos entre os trechos.",
          "Nossos roteiros incluem guias arqueólogos falando português ou espanhol, haciendas e hotéis-butique, mesas privativas com chefs locais e visitas a ateliês familiares — o México que não aparece no pacote.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar ao México?",
        a: "De novembro a abril, na estação seca, com clima agradável no altiplano e menor umidade no Caribe. De junho a outubro há mais chuva e risco de furacões na costa leste.",
      },
      {
        q: "Quantos dias são necessários para conhecer o México?",
        a: "De 12 a 16 dias para combinar Cidade do México, Oaxaca, Chiapas e Yucatán. Em 8 a 10 dias é possível fazer duas dessas regiões com bom ritmo.",
      },
      {
        q: "Brasileiro precisa de visto para o México?",
        a: "Não é exigido visto para turismo de curta duração, mas é necessário passaporte válido e o preenchimento do formulário migratório. É comum a exigência de comprovação de hospedagem e passagem de volta.",
      },
      {
        q: "Vale mais a pena Chichén Itzá ou Uxmal?",
        a: "Chichén Itzá é mais famosa e monumental, porém muito movimentada. Uxmal e a rota Puuc oferecem arquitetura maia de altíssima qualidade com bem menos visitantes.",
      },
      {
        q: "Quanto custa uma viagem ao México com curadoria?",
        a: "Roteiros de 12 a 14 dias com hotéis-butique, haciendas, guias arqueólogos e voos internos partem, em média, de R$ 30 mil a R$ 45 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Grupo México 2026", href: "/grupos/mexico-2026" },
      { label: "Destinos", href: "/destinos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Uxmal Maya pyramid in Yucatan at golden hour, limestone temple surrounded by jungle, dramatic warm light, editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 11,
    category: "Cultura",
    whatsappName: "México — Cidade do México, Oaxaca e Yucatán",
  },
  {
    slug: "acores-guia-viagem",
    title: "Açores: guia das ilhas verdes no meio do Atlântico",
    h1: "Açores: nove ilhas verdes no meio do Atlântico",
    metaDescription:
      "Guia dos Açores: São Miguel, Pico, Faial, Flores e Terceira. Melhor época, quantos dias, observação de baleias, lagoas vulcânicas e quanto custa a viagem.",
    keywords:
      "acores viagem, sao miguel pico flores faial, melhor epoca acores, baleias acores, lagoa das sete cidades, quanto custa viagem acores, acores roteiro 10 dias, portugal ilhas",
    intro:
      "Chove nos Açores. Chove de repente, por vinte minutos, e depois o sol aparece e o vale inteiro solta vapor. Quem entende isso ama o arquipélago; quem espera Algarve volta frustrado. As nove ilhas são vulcões verdes plantados a dois mil quilômetros de qualquer coisa, com hortênsias azuis marcando os limites das pastagens, vinhas plantadas dentro de currais de lava e baleias passando ali fora. É o destino europeu mais bonito para quem já cansou de cidade.",
    sections: [
      {
        heading: "São Miguel: lagoas, fumarolas e chá",
        paragraphs: [
          "A Lagoa das Sete Cidades, com seus dois lagos de cores diferentes dentro da mesma caldeira, vista do Miradouro da Boca do Inferno, é a imagem dos Açores. Mas São Miguel é mais: o Vale das Furnas, onde o cozido é enterrado no solo vulcânico e cozinha seis horas no calor da terra, e a Lagoa do Fogo, a mais selvagem.",
          "Há também a Gorreana, única plantação de chá da Europa, em funcionamento desde 1883, e as piscinas termais da Poça da Dona Beija e do Parque Terra Nostra, com água ferrosa a 38°C entre jardins botânicos.",
          "Ponta Delgada resolve a base: hotéis bons, restaurantes de peixe e queijos, e distâncias curtas para toda a ilha.",
        ],
      },
      {
        heading: "Pico, Faial e Flores: as ilhas para quem quer mais",
        paragraphs: [
          "Pico tem a montanha mais alta de Portugal (2.351 m) e a paisagem vinícola da Criação Velha, Patrimônio Mundial: currais de pedra vulcânica protegendo videiras do vento salgado. O vinho verdelho dali é sério.",
          "Faial, do outro lado do canal, guarda a marina da Horta com os murais pintados por veleiros do mundo inteiro, o Peter Café Sport e a paisagem lunar dos Capelinhos, criada por uma erupção em 1957.",
          "Flores é a ilha mais remota e mais espetacular — cascatas em paredões, a Rocha dos Bordões e lagoas de cratera. Exige logística, e recompensa.",
        ],
      },
      {
        heading: "Baleias, melhor época e quantos dias",
        paragraphs: [
          "Os Açores são um dos melhores pontos do mundo para cetáceos: cachalotes o ano inteiro e baleias-azuis e comuns em passagem migratória entre abril e junho. Os passeios saem de Pico, Faial e São Miguel, com biólogos a bordo.",
          "A melhor época vai de maio a setembro, com dias de 20°C a 25°C. Junho é o mês das hortênsias floridas. O clima muda várias vezes por dia em qualquer estação — leve camadas e impermeável.",
          "Reserve de 8 a 12 dias para duas ou três ilhas, com voos curtos entre elas. Hospedagens boutique em quintas restauradas e casas de pedra fazem toda a diferença.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar aos Açores?",
        a: "De maio a setembro, com temperaturas entre 20°C e 25°C. Junho traz as hortênsias floridas e entre abril e junho passam baleias-azuis em migração.",
      },
      {
        q: "Quantas ilhas dos Açores visitar em uma viagem?",
        a: "Duas ou três em 8 a 12 dias. São Miguel como base, mais Pico e Faial, é a combinação mais equilibrada. Flores exige logística adicional.",
      },
      {
        q: "É possível ver baleias nos Açores?",
        a: "Sim. Cachalotes são vistos durante todo o ano e baleias-azuis e comuns passam em migração entre abril e junho. Os passeios saem de São Miguel, Pico e Faial com biólogos a bordo.",
      },
      {
        q: "Precisa alugar carro nos Açores?",
        a: "Sim. O transporte público é limitado e os miradouros e trilhas ficam espalhados. Carro ou motorista privativo é essencial em cada ilha.",
      },
      {
        q: "Quanto custa uma viagem aos Açores com curadoria?",
        a: "Roteiros de 9 a 12 dias com hospedagens boutique, voos entre ilhas, guias locais e experiências privativas partem, em média, de R$ 25 mil a R$ 35 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos em Portugal", href: "/destinos" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Sete Cidades twin crater lakes in Sao Miguel Azores seen from a high viewpoint, green volcanic caldera, blue hydrangeas, moody Atlantic light, editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 10,
    category: "Natureza",
    whatsappName: "Açores — São Miguel, Pico e Faial",
  },
  {
    slug: "fernando-de-noronha-guia-viagem",
    title: "Fernando de Noronha: guia completo, melhor época e taxas",
    h1: "Fernando de Noronha: o Brasil que se protege para continuar existindo",
    metaDescription:
      "Guia de Fernando de Noronha: melhor época, taxa de preservação, ingresso do parque, praias, mergulho e pousadas de alto padrão. Quantos dias ficar e quanto custa.",
    keywords:
      "fernando de noronha, melhor epoca noronha, taxa de preservacao noronha, ingresso parque nacional noronha, baia do sancho, mergulho noronha, pousadas noronha alto padrao, quanto custa noronha",
    intro:
      "Noronha começa antes de você pisar na ilha. Começa no avião, quando o arquipélago aparece como uma lasca de rocha vulcânica sobre um azul que não parece brasileiro, e o Morro do Pico corta o horizonte como um dedo apontado. Depois vem o silêncio das trilhas de manhã cedo, quando só há você, o tico-tico e o barulho do mar batendo nos costões. É o pedaço mais bem cuidado do litoral brasileiro — e é caro exatamente porque é cuidado.",
    sections: [
      {
        heading: "As praias e o que fazer em cada uma",
        paragraphs: [
          "A Baía do Sancho, eleita várias vezes a praia mais bonita do mundo, exige a descida por escada de ferro dentro de uma fenda no paredão — e recompensa com areia branca, tartarugas no raso e um anfiteatro de mata.",
          "A Baía dos Porcos e a Praia da Cacimba do Padre, aos pés dos Dois Irmãos, são as imagens clássicas. Do lado de dentro, o Mar de Dentro, mais calmo, guarda a Praia do Atalaia, com piscina natural de visitação controlada e agendamento no ICMBio.",
          "No fim da tarde, o Mirante dos Golfinhos e o Forte dos Remédios para o pôr do sol; ao amanhecer, a Baía dos Golfinhos, onde centenas de rotadores entram para descansar.",
        ],
      },
      {
        heading: "Mergulho, taxas e regras do parque",
        paragraphs: [
          "Noronha tem uma das melhores visibilidades do Atlântico Sul — de 30 a 50 metros — com naufrágios, cardumes de barracudas, tubarões-limão e tartarugas. Há saídas de batismo para iniciantes e mergulhos técnicos para certificados.",
          "Duas cobranças são obrigatórias: a Taxa de Preservação Ambiental (TPA), diária e progressiva conforme o tempo de permanência, e o ingresso do Parque Nacional Marinho, válido por dez dias, com valor diferenciado para brasileiros. Ambos são pagos online antes da viagem.",
          "O acesso a algumas áreas é limitado por número de visitantes e exige agendamento prévio. Essa é a razão de a ilha continuar como está.",
        ],
      },
      {
        heading: "Melhor época, quantos dias e onde ficar",
        paragraphs: [
          "De agosto a dezembro o mar fica calmo e transparente, com visibilidade máxima para mergulho — é a melhor janela. De janeiro a março chove mais e o Mar de Fora recebe ondas grandes, temporada de surfe na Cacimba do Padre.",
          "Reserve de 5 a 7 noites. Menos que isso não cobre as trilhas, os passeios de barco e ao menos dois dias de mergulho — e qualquer dia de mar agitado tira um ponto do roteiro.",
          "As pousadas de alto padrão são pequenas, com dez a vinte acomodações, cozinha própria e serviço de casa. Reservam com seis a nove meses de antecedência para alta temporada e feriados.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para ir a Fernando de Noronha?",
        a: "De agosto a dezembro, quando o mar fica calmo e com visibilidade máxima para mergulho. De janeiro a março chove mais e o Mar de Fora recebe ondas grandes.",
      },
      {
        q: "Quais taxas são cobradas em Fernando de Noronha?",
        a: "A Taxa de Preservação Ambiental, diária e progressiva conforme o tempo de permanência, e o ingresso do Parque Nacional Marinho, válido por dez dias e com valor diferenciado para brasileiros. Ambos são pagos online.",
      },
      {
        q: "Quantos dias ficar em Fernando de Noronha?",
        a: "De 5 a 7 noites. Esse período permite trilhas, passeio de barco, dois dias de mergulho e margem para eventuais dias de mar agitado.",
      },
      {
        q: "Precisa alugar carro ou buggy em Noronha?",
        a: "É recomendável um buggy ou carro elétrico para ter autonomia entre praias e mirantes, embora haja ônibus na via principal e táxis disponíveis.",
      },
      {
        q: "Quanto custa uma viagem a Fernando de Noronha?",
        a: "Programas de 6 noites em pousadas de alto padrão, com taxas, passeios privativos e mergulhos incluídos, partem, em média, de R$ 18 mil a R$ 30 mil por pessoa na parte terrestre.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil por estado", href: "/brasil" },
      { label: "Brasil Vivo", href: "/brasil-vivo" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
    imageAiPrompt:
      "Baia do Sancho in Fernando de Noronha seen from the cliff top at golden hour, turquoise water, white sand, Morro Dois Irmaos in the distance, editorial travel photography, no people",
    publishedAt: "2026-08-05",
    readingMinutes: 10,
    category: "Natureza",
    whatsappName: "Fernando de Noronha",
  },
];
