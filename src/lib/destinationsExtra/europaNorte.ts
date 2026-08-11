import { Destination } from "../types";

/**
 * Norte da Europa — curadoria Create Travel.
 * Intro autoral, destaques sensoriais, "além do óbvio" e FAQs de intenção real.
 * Nunca mencionar preços.
 */
export const europaNorteExtraDestinations: Destination[] = [
  {
    id: "europa-inglaterra",
    continent: "Europa",
    country: "Inglaterra",
    region: "Londres & Cotswolds",
    slug: "europa/inglaterra",
    name: "Londres e Cotswolds Autoral",
    bestTime:
      "Mai–Set (dias longos, jardins em plena floração) e Dez para a temporada de luzes e ópera. Cotswolds está no auge entre Mai e Jul, com rosas e campos dourados.",
    tags: ["cultura", "gastronomia", "fotografia", "roadtrip"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a golden-stone Cotswolds village lane at soft morning light, thatched roofs and climbing roses, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Londres é uma metrópole que guarda clubes centenários, teatros de bastidor aberto e mercados que só o morador conhece. A poucas horas dali, os Cotswolds desdobram-se em vilarejos de pedra dourada, onde o tempo parece ter combinado de andar mais devagar. A curadoria Create Travel une as duas paisagens numa só narrativa: a cidade que nunca dorme e o campo que ensina a repousar.",
    highlights: [
      {
        title: "Teatro West End com bastidores abertos",
        story:
          "Poltronas na primeira fileira e, depois da cortina cair, uma conversa reservada com o elenco no camarim. Uma noite de teatro que vira memória de bastidor, não só de plateia.",
      },
      {
        title: "Afternoon tea em salão histórico",
        story:
          "Porcelana fina, torres de scones ainda mornos e um pianista ao fundo. O ritual britânico vivido sem pressa, numa sala que já recebeu realeza e ainda guarda o mesmo silêncio elegante.",
      },
      {
        title: "Vilarejos dourados dos Cotswolds",
        story:
          "Bibury, Castle Combe e Bourton-on-the-Water desfilam em pedra cor de mel, riachos rasos e jardins que parecem pintados. Cada curva da estrada revela um postal que ninguém encomendou.",
      },
      {
        title: "Mansões de campo com jardins privados",
        story:
          "Portões que só se abrem com hora marcada, gramados perfeitos e um chá servido na varanda de uma casa de família há gerações. O interior inglês na sua versão mais autêntica.",
      },
      {
        title: "Mercados e galerias fora do circuito turístico",
        story:
          "Borough Market ao amanhecer, antes das filas, e ateliês em Notting Hill onde artistas locais recebem visitantes com hora marcada. Londres revelada por quem mora nela.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar em clube privado de Mayfair",
        story:
          "Salões de madeira escura, adega centenária e um cardápio que muda conforme a estação — acesso reservado a convidados apresentados.",
      },
      {
        title: "Degustação em destilaria artesanal de gin",
        story:
          "Um mestre destilador conduz a prova de botânicos raros num alambique que ainda funciona como há um século.",
      },
      {
        title: "Passeio de balão sobre os Cotswolds ao amanhecer",
        story:
          "A vista dos campos em mosaico e das primeiras luzes tocando os telhados de pedra dourada, vista de cima e em silêncio quase total.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para Londres e Cotswolds?", a: "De 6 a 8 noites: quatro em Londres para cultura e gastronomia, e três a quatro nos Cotswolds em ritmo de campo, com bate-voltas a vilarejos históricos." },
      { q: "Qual a melhor época para visitar os Cotswolds?", a: "Maio a julho, quando rosas e jardins estão em plena floração e os dias são longos. Setembro e outubro trazem cores de outono e menos movimento." },
      { q: "Brasileiro precisa de visto para a Inglaterra?", a: "Desde 2025, brasileiros precisam solicitar o ETA (autorização eletrônica de viagem) antes do embarque. Orientamos todo o processo dentro do planejamento da viagem." },
      { q: "Vale alugar carro para conhecer os Cotswolds?", a: "Sim, é a forma mais fluida de percorrer os vilarejos, mas também organizamos motorista particular para quem prefere apreciar a paisagem sem dirigir pela mão inglesa." },
      { q: "É possível combinar Londres com outros destinos europeus?", a: "Sim. Trens de alta velocidade conectam Londres a Paris e Bruxelas em poucas horas, permitindo estender o roteiro sem voos adicionais." },
      { q: "Como criar meu roteiro sob medida?", a: "Fale com a Create Travel informando período, ritmo desejado e interesses — desenhamos a viagem do zero, sem pacotes prontos." },
    ],
  },
  {
    id: "europa-escocia",
    continent: "Europa",
    country: "Escócia",
    region: "Highlands & Ilhas",
    slug: "europa/escocia",
    name: "Highlands e Ilhas Escocesas",
    bestTime:
      "Mai–Set para dias longos e trilhas abertas. Setembro traz a urze florida cobrindo as montanhas de roxo, e o outono colore os glens.",
    tags: ["montanha", "roadtrip", "fotografia", "cultura", "birdwatching"],
    imageAiPrompt:
      "Ultra realistic editorial photo of misty Scottish Highlands with heather-covered hills and a lone loch reflecting soft morning light, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "As Highlands escocesas não pedem pressa: pedem respeito pela névoa que sobe dos lochs, pelo silêncio das montanhas nuas e pela história de clãs escrita em cada castelo em ruínas. Nas ilhas, a paisagem se torna ainda mais bruta e luminosa. A curadoria Create Travel projeta um roteiro de estradas cênicas, destilarias familiares e hospedagens que contam a Escócia por dentro.",
    highlights: [
      {
        title: "North Coast 500 em trechos selecionados",
        story:
          "A estrada litorânea mais cênica da Escócia, com falésias, praias desertas de areia branca e vilarejos de pescadores. Cada curva descortina um horizonte novo entre mar e montanha.",
      },
      {
        title: "Destilarias de uísque familiares",
        story:
          "Um mestre destilador guia a prova de rótulos raros que nunca saem da ilha onde nascem. O aroma de turfa e a história de gerações contadas num copo só.",
      },
      {
        title: "Ilha de Skye e seus penhascos dramáticos",
        story:
          "Old Man of Storr recortado contra o céu, cachoeiras que despencam direto no mar e a luz mutante que muda a paisagem a cada dez minutos.",
      },
      {
        title: "Castelos e lendas de clã com guia especialista",
        story:
          "Salões de pedra fria, brasões esquecidos e histórias de batalhas contadas por quem estudou a genealogia de cada clã. A Escócia histórica ganha rosto e enredo.",
      },
      {
        title: "Observação de águias e vida selvagem nas ilhas",
        story:
          "Águias-de-cauda-branca sobrevoando penhascos, focas descansando em rochedos e a paciência recompensada de quem aprende a observar em silêncio.",
      },
    ],
    beyondUsual: [
      {
        title: "Hospedagem em castelo com anfitrião da família",
        story:
          "Noites em propriedades históricas ainda habitadas por seus donos, com jantar servido à luz de velas e histórias de família contadas à mesa.",
      },
      {
        title: "Pesca com mosca em rio privado",
        story:
          "Um guia local conduz a pesca de salmão em águas reservadas, entre montanhas silenciosas e o som único da linha cortando o ar.",
      },
      {
        title: "Travessia de barco privativo entre ilhas remotas",
        story:
          "Rotas que fogem das balsas convencionais, revelando enseadas isoladas e colônias de aves marinhas raramente visitadas.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são recomendados para as Highlands?", a: "De 7 a 10 dias permitem percorrer trechos do North Coast 500, visitar Skye e ainda reservar tempo de descanso em uma propriedade histórica." },
      { q: "Qual a melhor época para ver a urze florida?", a: "Final de agosto a meados de setembro, quando as encostas das Highlands se cobrem de roxo. É também uma época com menos turistas que o pico do verão." },
      { q: "Preciso de visto para visitar a Escócia?", a: "A Escócia segue as regras do Reino Unido: brasileiros precisam do ETA antes da viagem. Cuidamos de toda a orientação do processo." },
      { q: "Vale alugar um carro nas Highlands?", a: "Sim, é essencial para explorar estradas rurais e vilarejos isolados. Também organizamos motorista particular para quem prefere se dedicar apenas à paisagem." },
      { q: "É seguro viajar sozinho pelas ilhas escocesas?", a: "Sim, é uma região tranquila e acolhedora. A logística exige apenas planejamento cuidadoso de balsas e distâncias, que resolvemos no roteiro." },
      { q: "Como montar meu roteiro pelas Highlands?", a: "Conte à Create Travel o tempo disponível e o tipo de experiência que busca — histórica, gastronômica ou de natureza — e criamos a viagem sob medida." },
    ],
  },
  {
    id: "europa-irlanda",
    continent: "Europa",
    country: "Irlanda",
    region: "Wild Atlantic Way",
    slug: "europa/irlanda",
    name: "Irlanda pelo Wild Atlantic Way",
    bestTime:
      "Mai–Set (dias longos e clima mais estável). Junho e julho oferecem luz até tarde da noite, ideal para fotografia nos penhascos.",
    tags: ["roadtrip", "fotografia", "cultura", "gastronomia", "festivais-folcloricos"],
    imageAiPrompt:
      "Ultra realistic editorial photo of dramatic Irish Atlantic cliffs with green pastures and crashing waves at golden hour, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Wild Atlantic Way é a mais longa estrada costeira definida da Europa, e também a mais generosa em contrastes: penhascos que despencam no oceano, vilarejos de pescadores onde o gaélico ainda é falado à mesa e pubs onde a música tradicional nasce espontânea ao cair da noite. A curadoria Create Travel transforma essa rota em uma narrativa de paisagem, história e hospitalidade genuína.",
    highlights: [
      {
        title: "Penhascos de Moher ao amanhecer",
        story:
          "Antes dos ônibus de turismo chegarem, os penhascos se revelam em silêncio quase absoluto, com o Atlântico batendo duzentos metros abaixo e a bruma ainda pairando sobre o mar.",
      },
      {
        title: "Anel de Kerry em ritmo privativo",
        story:
          "Uma estrada de curvas junto ao mar, vilarejos coloridos e paradas combinadas para fotografar sem a pressa dos roteiros em grupo.",
      },
      {
        title: "Música tradicional em pub autêntico",
        story:
          "Violinos e bodhráns tocando espontaneamente numa mesa de fundo, cerveja escura servida devagar e a sensação de estar dentro, não ao lado, da cultura irlandesa.",
      },
      {
        title: "Ilhas Aran e a vida gaélica preservada",
        story:
          "Travessia de barco até um pedaço de terra onde muros de pedra dividem campos minúsculos e o gaélico ainda é a língua do dia a dia.",
      },
      {
        title: "Castelos convertidos em hospedagem histórica",
        story:
          "Torres medievais com aquecimento a lareira, jantar servido em salão de pedra e a sensação de dormir dentro de um capítulo de história irlandesa.",
      },
    ],
    beyondUsual: [
      {
        title: "Aula de culinária com produtor local",
        story:
          "Um chef de fazenda ensina a preparar um jantar com queijos e vegetais colhidos na hora, encerrando com uma prova de whiskeys irlandeses raros.",
      },
      {
        title: "Passeio a cavalo pelas praias do oeste",
        story:
          "Galopar na areia dura da maré baixa, com as montanhas de Connemara ao fundo e o vento atlântico como única companhia sonora.",
      },
      {
        title: "Encontro com contador de histórias tradicional",
        story:
          "Uma noite reservada de seanchaí, o narrador oral irlandês, revivendo lendas de fadas e heróis à luz de uma lareira crepitante.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são necessários para o Wild Atlantic Way?", a: "De 8 a 12 dias, dependendo da extensão desejada — desde Kerry e Clare até estender-se pela Connemara e Donegal, no norte." },
      { q: "Preciso de visto para visitar a Irlanda?", a: "Brasileiros não precisam de visto para estadias turísticas de curta duração na Irlanda. É necessário apenas passaporte válido — orientamos os detalhes atualizados na etapa de planejamento." },
      { q: "Vale a pena visitar as Ilhas Aran?", a: "Sim, é uma das experiências mais autênticas da Irlanda rural, com paisagem preservada e cultura gaélica viva — recomendamos ao menos meio dia na maior das ilhas." },
      { q: "É melhor alugar carro ou ter motorista particular?", a: "Ambos funcionam bem; motoristas particulares permitem apreciar a paisagem sem a atenção exigida pelas estradas estreitas e pela mão inglesa de direção." },
      { q: "Qual a melhor época para fotografar os penhascos?", a: "Final da primavera e verão, com luz longa até as 22h, e o início da manhã, quando a maioria dos visitantes ainda não chegou." },
      { q: "Como criar meu roteiro pela Irlanda?", a: "Fale com a Create Travel sobre o tempo disponível e o tipo de experiência — histórica, gastronômica ou de natureza — e desenhamos a viagem sob medida." },
    ],
  },
  {
    id: "europa-dinamarca",
    continent: "Europa",
    country: "Dinamarca",
    region: "Copenhague",
    slug: "europa/dinamarca",
    name: "Copenhague Autoral",
    bestTime:
      "Mai–Ago (dias longos, canais movimentados e vida ao ar livre) e Dez para os mercados de Natal e o brilho do hygge no inverno.",
    tags: ["gastronomia", "cultura", "bem-estar", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of colorful Nyhavn canal houses in Copenhagen at golden hour with boats moored along the quay, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Copenhague é a capital que transformou design, gastronomia e bem-estar em filosofia de vida. Entre canais coloridos, restaurantes de vanguarda e bairros onde bicicletas superam carros, a cidade convida a desacelerar sem abrir mão da sofisticação. A curadoria Create Travel revela a Copenhague que vai além do cartão-postal de Nyhavn.",
    highlights: [
      {
        title: "Mesa em restaurante de vanguarda nórdica",
        story:
          "Um menu degustação que reinventa ingredientes locais — algas, ervas selvagens, peixes da região — servido num ambiente que parece cenografia escandinava.",
      },
      {
        title: "Passeio de barco privativo pelos canais",
        story:
          "Nyhavn visto da água, sem multidões, ao entardecer, quando as fachadas coloridas ganham um brilho dourado e os cafés começam a acender as luzes.",
      },
      {
        title: "Castelo de Frederiksborg e jardins barrocos",
        story:
          "Um castelo renascentista refletido em seu próprio fosso, com salões de tapeçarias reais e jardins simétricos que convidam a caminhadas contemplativas.",
      },
      {
        title: "Design dinamarquês em ateliês e galerias",
        story:
          "Visitas guiadas a estúdios de mobiliário e cerâmica que definem o conceito de design escandinavo, com a chance de encomendar peças exclusivas.",
      },
      {
        title: "Bairro de Christianshavn de bicicleta",
        story:
          "Canais estreitos, casas flutuantes e cafés escondidos, percorridos sobre duas rodas no ritmo tranquilo que é marca registrada da cidade.",
      },
    ],
    beyondUsual: [
      {
        title: "Sauna flutuante nos canais com banho gelado",
        story:
          "Um ritual nórdico autêntico de calor intenso seguido por mergulho nas águas do porto, sob supervisão de anfitrião local.",
      },
      {
        title: "Jantar em casa de designer dinamarquês",
        story:
          "Uma refeição íntima servida na residência de um criador local, cercado por peças de mobiliário que também estão à venda.",
      },
      {
        title: "Bate-volta a castelos costeiros do norte de Zelândia",
        story:
          "Kronborg, cenário que inspirou Hamlet, e vilarejos de pescadores dinamarqueses raramente visitados por turistas.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para Copenhague?", a: "De 3 a 4 noites são suficientes para a cidade em ritmo tranquilo, com um dia extra para bate-volta a castelos do norte de Zelândia." },
      { q: "Qual a melhor época para visitar Copenhague?", a: "Maio a agosto, com dias longos e vida ao ar livre intensa. Dezembro é encantador pelos mercados de Natal e pela atmosfera de hygge." },
      { q: "Brasileiro precisa de visto para a Dinamarca?", a: "Não, para estadias turísticas de até 90 dias no espaço Schengen. É necessário apenas passaporte válido." },
      { q: "Vale combinar Copenhague com outros destinos escandinavos?", a: "Sim, é comum combinar com Estocolmo ou Oslo, com voos curtos ou trens que conectam as capitais nórdicas." },
      { q: "Copenhague é boa para viagem em família?", a: "Sim. A cidade é extremamente segura, com ciclovias, parques e o histórico Tivoli Gardens, perfeito para todas as idades." },
      { q: "Como montar meu roteiro por Copenhague?", a: "Fale com a Create Travel sobre período e interesses — desenhamos a viagem sob medida, unindo design, gastronomia e bem-estar." },
    ],
  },
  {
    id: "europa-suecia",
    continent: "Europa",
    country: "Suécia",
    region: "Estocolmo & Lapônia",
    slug: "europa/suecia",
    name: "Estocolmo e Lapônia Sueca",
    bestTime:
      "Mai–Ago para Estocolmo (dias claríssimos e arquipélago em plena vida) e Dez–Mar para a Lapônia, com neve, aurora boreal e sol da meia-noite em junho.",
    tags: ["cultura", "aurora", "bem-estar", "expedicao", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Stockholm old town Gamla Stan waterfront at golden hour contrasted with a snowy Swedish Lapland forest under aurora light, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Suécia se divide entre a elegância urbana de Estocolmo, espalhada por catorze ilhas, e a vastidão silenciosa da Lapônia, onde renas atravessam estradas e o céu se ilumina em verde durante o inverno. A curadoria Create Travel constrói um roteiro que liga essas duas Suécias sem perder a coerência de uma viagem só.",
    highlights: [
      {
        title: "Cidade Velha de Gamla Stan a pé",
        story:
          "Ruas medievais estreitas, fachadas em tons de terracota e um palácio real que ainda guarda a cerimônia da troca da guarda. Estocolmo em sua camada mais histórica.",
      },
      {
        title: "Arquipélago de Estocolmo de barco privativo",
        story:
          "Mais de trinta mil ilhas pontilham as águas ao redor da capital. Um passeio reservado revela casas de veraneio, penhascos baixos e o silêncio raro da vida marítima sueca.",
      },
      {
        title: "Hotel de gelo e iglus de vidro na Lapônia",
        story:
          "Dormir sob um teto transparente esperando a aurora boreal aparecer, ou numa suíte esculpida inteiramente em gelo — duas formas radicalmente diferentes de sentir o inverno ártico.",
      },
      {
        title: "Trenó puxado por huskies pela taiga",
        story:
          "O som da neve sob os patins, a respiração ofegante dos cães e a floresta congelada se abrindo em silêncio absoluto. Uma forma ancestral de se mover pelo Ártico.",
      },
      {
        title: "Encontro com a cultura sami e suas renas",
        story:
          "Uma família sami recebe visitantes em sua tenda tradicional, compartilhando histórias do povo indígena da Lapônia e o vínculo milenar com as renas.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar em restaurante submerso no Ártico",
        story:
          "Uma sala de jantar com paredes de vidro abaixo da linha d'água, onde é possível observar a vida selvagem aquática enquanto se prova o menu nórdico.",
      },
      {
        title: "Fotografia de aurora com especialista",
        story:
          "Um fotógrafo profissional guia a noite inteira em busca do ângulo certo, ensinando técnicas de captura em longa exposição sob céu estrelado.",
      },
      {
        title: "Sauna sueca tradicional à beira de lago congelado",
        story:
          "Calor intenso seguido de um mergulho controlado em água gelada, ritual nórdico que revigora o corpo e reconecta com o silêncio do inverno.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são recomendados para Estocolmo e Lapônia?", a: "De 8 a 10 dias: três a quatro em Estocolmo e o restante na Lapônia, incluindo tempo de folga para tentar avistar a aurora boreal mais de uma noite." },
      { q: "Qual a melhor época para ver a aurora boreal na Suécia?", a: "De dezembro a março, em noites de céu limpo e longe da poluição luminosa — a Lapônia oferece condições ideais fora das grandes cidades." },
      { q: "Preciso de visto para visitar a Suécia?", a: "Não, para estadias turísticas de até 90 dias no espaço Schengen. Basta passaporte válido." },
      { q: "Vale a pena visitar a Lapônia no verão?", a: "Sim, é a época do sol da meia-noite, com luz quase constante, trilhas abertas e uma paisagem completamente diferente do inverno gelado." },
      { q: "É seguro viajar com crianças até a Lapônia?", a: "Sim, com o planejamento certo de roupas térmicas e ritmo adaptado, é uma experiência memorável em família, mesmo com temperaturas negativas." },
      { q: "Como montar meu roteiro pela Suécia?", a: "Conte à Create Travel a época pretendida e o tipo de experiência buscada — urbana, ártica ou as duas — e desenhamos a viagem sob medida." },
    ],
  },
  {
    id: "europa-finlandia",
    continent: "Europa",
    country: "Finlândia",
    region: "Helsinque & Lapônia",
    slug: "europa/finlandia",
    name: "Helsinque e Lapônia Finlandesa",
    bestTime:
      "Jun–Ago para Helsinque (dias longos e vida ao ar livre) e Set–Mar para a Lapônia, com o auge da aurora boreal entre outubro e março.",
    tags: ["aurora", "bem-estar", "cultura", "expedicao", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a snowy Finnish Lapland forest at night with vivid green aurora borealis overhead reflecting on a frozen lake, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Finlândia equilibra o design minimalista de Helsinque com a imensidão branca da Lapônia, onde a aurora boreal dança sobre florestas congeladas com uma frequência rara no mundo. É também o país da sauna como ritual diário, do silêncio como valor cultural e de uma relação com a natureza que molda cada experiência. A curadoria Create Travel constrói essa dualidade em um só roteiro.",
    highlights: [
      {
        title: "Design finlandês em Helsinque",
        story:
          "Ateliês de cerâmica, vidro e mobiliário que moldaram o conceito escandinavo de simplicidade funcional, visitados com curador especializado em design nórdico.",
      },
      {
        title: "Sauna finlandesa autêntica à beira-mar",
        story:
          "O ritual nacional em sua forma mais genuína: calor intenso de lenha, seguido por um mergulho nas águas geladas do Báltico. Uma tradição levada a sério há gerações.",
      },
      {
        title: "Caça à aurora boreal na Lapônia finlandesa",
        story:
          "Noites sob céu extremamente escuro, longe de qualquer poluição luminosa, esperando o momento em que o verde e o violeta começam a dançar sobre a neve.",
      },
      {
        title: "Iglus de vidro e cabanas de gelo",
        story:
          "Dormir com o céu ártico como teto, aquecido por dentro enquanto a aurora se movimenta lá fora — uma das experiências mais procuradas do inverno nórdico.",
      },
      {
        title: "Encontro com renas e trenós na floresta boreal",
        story:
          "Um passeio guiado por uma fazenda de renas, seguido de um trajeto de trenó pela neve profunda, no silêncio absoluto da taiga finlandesa.",
      },
    ],
    beyondUsual: [
      {
        title: "Sauna de fumaça tradicional com anfitrião local",
        story:
          "Uma família finlandesa recebe visitantes em sua sauna centenária, compartilhando o ritual completo, incluindo o mergulho em lago congelado.",
      },
      {
        title: "Expedição de motoneve sob céu estrelado",
        story:
          "Atravessar a floresta boreal à noite, guiado por especialista local, em busca dos melhores pontos para observar a aurora longe de qualquer estrada.",
      },
      {
        title: "Visita à vila oficial do Papai Noel com experiência privativa",
        story:
          "Um encontro reservado, fora dos horários de maior movimento, ideal para famílias que buscam uma experiência mais íntima e menos comercial.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são recomendados para Helsinque e Lapônia?", a: "De 7 a 9 dias: dois a três em Helsinque e o restante na Lapônia, reservando ao menos três noites consecutivas para aumentar as chances de ver a aurora." },
      { q: "Qual a melhor época para ver a aurora boreal na Finlândia?", a: "De setembro a março, com pico de visibilidade entre outubro e fevereiro, em noites de céu limpo e pouca lua." },
      { q: "Preciso de visto para visitar a Finlândia?", a: "Não, para estadias turísticas de até 90 dias no espaço Schengen. Basta passaporte válido." },
      { q: "A Lapônia finlandesa é boa para viagem em família?", a: "Sim, é um dos destinos árticos mais estruturados para famílias, com atividades adaptadas a crianças e infraestrutura pensada para o inverno extremo." },
      { q: "Vale combinar Helsinque com outros destinos nórdicos?", a: "Sim, ferries e voos curtos conectam Helsinque a Estocolmo e Tallinn, permitindo estender o roteiro pela região báltica." },
      { q: "Como montar meu roteiro pela Finlândia?", a: "Fale com a Create Travel sobre o período pretendido e o tipo de experiência — design urbano, aventura ártica ou aurora boreal — e desenhamos a viagem sob medida." },
    ],
  },
  {
    id: "europa-montenegro",
    continent: "Europa",
    country: "Montenegro",
    region: "Baía de Kotor",
    slug: "europa/montenegro",
    name: "Baía de Kotor Autoral",
    bestTime:
      "Mai–Jun e Set–Out (calor ameno, mar convidativo e menos movimento). Julho e agosto são intensos de sol, mas mais concorridos.",
    tags: ["navegacao", "cultura", "gastronomia", "fotografia", "praia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Kotor Bay fjord-like coastline with medieval stone town and mountains rising from turquoise water at golden hour, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Baía de Kotor é muitas vezes descrita como o único fiorde do sul da Europa, embora tecnicamente seja um cânion afogado — o efeito visual, porém, é igualmente dramático: montanhas escarpadas mergulhando direto no Adriático, cidades medievais amuralhadas e um mar de um azul quase impossível. A curadoria Create Travel revela um Montenegro discreto e ainda pouco explorado pelo turismo de massa.",
    highlights: [
      {
        title: "Cidade murada de Kotor ao amanhecer",
        story:
          "Ruas de pedra medievais, praças silenciosas e a Catedral de São Tríon abrindo as portas antes das primeiras excursões de cruzeiro atracarem. A cidade só para você.",
      },
      {
        title: "Navegação privativa pela baía",
        story:
          "Um veleiro desliza entre montanhas que emergem direto da água, passando por vilarejos que só têm acesso pelo mar e por uma ilha artificial construída por marinheiros há séculos.",
      },
      {
        title: "Vista panorâmica de Lovćen ao entardecer",
        story:
          "A estrada de curvas sobe a serra em zigue-zague até um mirante que revela toda a baía lá embaixo, dourada pela última luz do dia.",
      },
      {
        title: "Vilarejo de Perast e suas igrejas barrocas",
        story:
          "Um punhado de palácios à beira-mar e duas ilhotas com igrejas que guardam lendas de marinheiros. O tempo parece ter parado neste trecho da costa.",
      },
      {
        title: "Gastronomia entre influências italiana e balcânica",
        story:
          "Frutos do mar do Adriático grelhados na brasa, azeite de produção local e um vinho da uva vranac servido numa taverna à beira d'água.",
      },
    ],
    beyondUsual: [
      {
        title: "Trilha panorâmica nas montanhas de Lovćen",
        story:
          "Caminhada guiada por trilhas pouco frequentadas, com vistas simultâneas da baía e do interior montanhoso do país.",
      },
      {
        title: "Jantar em vinícola familiar do interior",
        story:
          "Uma refeição servida entre parreirais, com harmonização conduzida pelo próprio produtor da região vinícola montenegrina.",
      },
      {
        title: "Bate-volta a Dubrovnik ou Budva fora do circuito",
        story:
          "Extensões privativas para cidades vizinhas na costa adriática, evitando os horários de maior fluxo de visitantes.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias reservar para a Baía de Kotor?", a: "De 4 a 5 noites permitem explorar Kotor, Perast e Lovćen com calma, além de um dia de navegação privativa pela baía." },
      { q: "Qual a melhor época para visitar Montenegro?", a: "Maio, junho, setembro e outubro oferecem clima ameno e menos turistas. Julho e agosto são mais quentes e movimentados, especialmente na costa." },
      { q: "Brasileiro precisa de visto para Montenegro?", a: "Não, para estadias turísticas de até 90 dias. É necessário apenas passaporte válido." },
      { q: "Vale combinar Montenegro com a Croácia?", a: "Sim, é uma extensão natural: Dubrovnik fica a cerca de duas horas de carro de Kotor, permitindo somar as duas costas adriáticas num mesmo roteiro." },
      { q: "A Baía de Kotor é boa para lua de mel?", a: "Sim, especialmente combinada com um trecho de navegação privativa e hospedagem em propriedades históricas dentro da cidade murada." },
      { q: "Como montar meu roteiro por Montenegro?", a: "Fale com a Create Travel sobre período e interesses — navegação, gastronomia ou trilhas — e desenhamos a viagem sob medida." },
    ],
  },
];
