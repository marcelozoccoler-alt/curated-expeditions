import { Destination } from "../types";

/**
 * Ásia e Pacífico — recortes de expedição, trekking e culturas raras.
 * Lacunas identificadas em benchmark com operadores internacionais de viagem
 * autoral. Conteúdo estruturado para Google e IAs generativas.
 */
export const wildAsiaPacificoDestinations: Destination[] = [
  {
    id: "oceania-papua-nova-guine",
    continent: "Oceania",
    country: "Papua-Nova Guiné",
    region: "Terras Altas, Rio Sepik e Melanésia",
    slug: "oceania/papua-nova-guine",
    name: "Papua-Nova Guiné — Terras Altas, Sepik e Melanésia",
    bestTime:
      "Mai–Out (estação seca). Agosto e setembro concentram os grandes sing-sings das Terras Altas, quando dezenas de clãs se reúnem para dançar.",
    tags: ["remoto", "cultura", "festivais-folcloricos", "expedicao", "fotografia", "navegacao"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of a Papua New Guinea highlands sing-sing gathering, elaborate bird-of-paradise feather headdresses and ochre body paint, misty green mountains behind, overcast soft light, editorial style, faces turned away, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Papua-Nova Guiné é o último grande arquivo vivo da diversidade humana: mais de 800 línguas em um único país, clãs que só encontraram o mundo exterior no século XX e uma floresta que ainda guarda espécies sem nome científico. Viajar aqui não é turismo — é presença. A Create Travel organiza a logística que torna o país acessível com conforto: voos internos privativos, lodges selecionados nas Terras Altas, embarcação no Rio Sepik e acompanhamento de guias antropólogos que abrem portas fechadas ao viajante comum.",
    highlights: [
      {
        title: "Sing-sings das Terras Altas",
        story:
          "Centenas de dançarinos com cocares de aves-do-paraíso, corpos pintados de ocre e tambores kundu marcando um pulso que atravessa o peito. Mount Hagen e Goroka reúnem clãs que, há três gerações, se encontravam apenas em guerra.",
      },
      {
        title: "Rio Sepik em embarcação privativa",
        story:
          "Casas de espíritos com pilares esculpidos, crocodilos deslizando na margem e aldeias onde a arte é ritual, não souvenir. Navegar o Sepik é entrar em uma cosmologia inteira que a maioria dos viajantes nunca verá.",
      },
      {
        title: "Aves-do-paraíso em Tari",
        story:
          "Ao amanhecer, na Bacia de Tari, o macho da ave-do-paraíso-de-Raggiana abre a plumagem em um galho conhecido e dança para uma plateia de fêmeas indiferentes. Birdwatchers atravessam o planeta por esses vinte minutos.",
      },
      {
        title: "Kokoda Track e a memória da guerra",
        story:
          "A trilha que decidiu o Pacífico em 1942 sobe e desce a Cordilheira Owen Stanley entre lama, orquídeas e placas de bronze. Pode ser caminhada por trechos, com apoio de carregadores locais.",
      },
    ],
    beyondUsual: [
      {
        title: "Mergulho em Kimbe Bay e Milne Bay",
        story:
          "Dentro do Triângulo de Coral, com a maior biodiversidade marinha do planeta: mais de 900 espécies de peixes em uma única baía, naufrágios da Segunda Guerra e paredões verticais.",
      },
      {
        title: "Cruzeiro de expedição pela Melanésia",
        story:
          "Navios pequenos que combinam Papua, Ilhas Salomão e Vanuatu, desembarcando em aldeias sem porto — a única forma de alcançar certas ilhas.",
      },
      {
        title: "Festival de Máscaras de Rabaul",
        story:
          "Em julho, os Baining dançam sobre o fogo com máscaras gigantes de casca de árvore. Uma das cerimônias mais impressionantes do Pacífico.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar Papua-Nova Guiné?", a: "De maio a outubro, na estação seca. Agosto e setembro concentram os grandes festivais culturais de Mount Hagen e Goroka, e julho traz o Festival de Máscaras de Rabaul." },
      { q: "Papua-Nova Guiné é segura para viajantes?", a: "Exige planejamento profissional. Trabalhamos com voos internos privativos, transfers acompanhados, lodges e operadores locais consolidados, evitando deslocamentos urbanos desnecessários em Port Moresby e Lae." },
      { q: "Quantos dias são necessários?", a: "Um roteiro consistente pede de 10 a 14 dias, combinando Terras Altas, Rio Sepik e uma ilha do Triângulo de Coral. Programas com festival exigem datas fixas." },
      { q: "Precisa de vacinas para Papua-Nova Guiné?", a: "Febre amarela é exigida para quem vem do Brasil, e recomenda-se profilaxia contra malária, além de tifóide e hepatites. Enviamos orientação médica personalizada antes da viagem." },
      { q: "Quanto custa uma viagem a Papua-Nova Guiné?", a: "É um destino de logística complexa e alto investimento, com valores definidos por rota aérea interna, lodges e datas de festival. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro em Papua-Nova Guiné?", a: "Clique em Criar roteiro sob medida e conte a janela de datas — desenhamos a combinação entre festivais, Sepik e mergulho." },
    ],
  },
  {
    id: "oceania-palau-micronesia",
    continent: "Oceania",
    country: "Palau",
    region: "Rock Islands, Micronésia",
    slug: "oceania/palau-micronesia",
    name: "Palau e Micronésia — Rock Islands e o oceano intacto",
    bestTime:
      "Nov–Abr para mar mais calmo e visibilidade máxima; Dez–Mar concentra as melhores condições para mergulho em correnteza.",
    tags: ["mergulho", "praia", "remoto", "conservacao", "navegacao", "fotografia"],
    imageAiPrompt:
      "Ultra realistic aerial photograph of Palau Rock Islands, hundreds of emerald mushroom-shaped limestone islets scattered in turquoise lagoon, a small boat wake, bright tropical daylight, documentary editorial style, no people visible.",
    imageOverrideUrl: "",
    intro:
      "Palau transformou 80% de suas águas em santuário marinho e virou referência mundial de conservação: quem entra no país assina, no passaporte, um compromisso com o oceano. O resultado é uma densidade de vida marinha que praticamente não existe mais no planeta — tubarões-de-recife em cardume, mantas em estação de limpeza e paredões verticais que caem a mil metros. Acima da água, as Rock Islands formam um labirinto de ilhotas de calcário cobertas de floresta, com lagoas escondidas que só se alcançam de caiaque.",
    highlights: [
      {
        title: "Blue Corner",
        story:
          "O mergulho mais famoso do Pacífico: você se ancora com um gancho de recife na borda do paredão e assiste, imóvel, à correnteza trazer tubarões, barracudas e tartarugas em desfile contínuo.",
      },
      {
        title: "Jellyfish Lake",
        story:
          "Um lago marinho isolado onde milhões de águas-vivas perderam o ferrão por falta de predadores. Nadar no meio delas, com a luz atravessando as cúpulas douradas, é surreal e absolutamente seguro.",
      },
      {
        title: "Rock Islands de caiaque",
        story:
          "Remar entre ilhotas em forma de cogumelo, entrar em túneis de calcário na maré certa e emergir em lagoas fechadas onde o único som é o de morcegos-da-fruta nas árvores.",
      },
      {
        title: "Naufrágios da Segunda Guerra",
        story:
          "Navios e aviões japoneses repousam em água rasa e translúcida, agora recobertos de corais moles. Arqueologia e biologia no mesmo quadro.",
      },
    ],
    beyondUsual: [
      {
        title: "Yap e a cultura das pedras-moeda",
        story:
          "A ilha vizinha guarda discos de pedra de até três metros usados como moeda até hoje — e mantas gigantes em estações de limpeza no canal.",
      },
      {
        title: "Live-aboard de sete noites",
        story:
          "Dormir a bordo permite mergulhar Blue Corner e German Channel no melhor horário de maré, antes de qualquer barco de day-trip chegar.",
      },
      {
        title: "Chuuk Lagoon",
        story:
          "A maior frota naufragada do mundo, intacta desde 1944: uma extensão possível para mergulhadores certificados em profundidade.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para mergulhar em Palau?", a: "De novembro a abril o mar é mais calmo e a visibilidade maior. Dezembro a março reúne as melhores condições para os mergulhos de correnteza como Blue Corner e German Channel." },
      { q: "Precisa ser mergulhador certificado para conhecer Palau?", a: "Não. Jellyfish Lake, as lagoas das Rock Islands e vários recifes rasos são feitos em snorkel. Mas os mergulhos-assinatura do país pedem certificação e experiência em correnteza." },
      { q: "Como se chega a Palau saindo do Brasil?", a: "Por conexões via Doha, Dubai, Tóquio, Seul, Taipé ou Manila até Koror. São, em geral, dois dias de deslocamento — o que recomenda uma estada mínima de sete noites." },
      { q: "Quantos dias ficar em Palau?", a: "Sete a dez noites permitem cobrir Rock Islands, os mergulhos clássicos e ainda uma extensão a Yap ou Chuuk." },
      { q: "Quanto custa uma viagem a Palau?", a: "É um destino remoto de alto investimento, definido por aéreo, categoria de resort ou live-aboard e número de mergulhos. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro em Palau?", a: "Clique em Criar roteiro sob medida e conte seu nível de mergulho e janela de datas." },
    ],
  },
  {
    id: "oceania-tonga-jubartes",
    continent: "Oceania",
    country: "Tonga",
    region: "Vava'u e Ha'apai",
    slug: "oceania/tonga-baleias",
    name: "Tonga — nadar com baleias jubarte em Vava'u",
    bestTime:
      "Jul–Out, temporada de reprodução das jubartes no Pacífico Sul. Agosto e setembro concentram os filhotes recém-nascidos.",
    tags: ["mergulho", "remoto", "conservacao", "praia", "fotografia", "navegacao"],
    imageAiPrompt:
      "Ultra realistic underwater documentary photograph of a humpback whale mother and calf suspended in clear deep blue water in Tonga, sunbeams from surface, sense of vast scale, editorial wildlife photography, no people visible.",
    imageOverrideUrl: "",
    intro:
      "Tonga é um dos pouquíssimos lugares do mundo onde é legal e regulado entrar na água com baleias jubarte. Entre julho e outubro, elas cruzam milhares de quilômetros da Antártida até as águas mornas e protegidas de Vava'u para parir e amamentar. Estar a alguns metros de uma fêmea de quinze metros que decide observá-lo de volta é uma experiência que reordena o senso de escala de qualquer viajante. A operação é rigorosa: poucos nadadores por vez, guias licenciados e respeito absoluto ao comportamento animal.",
    highlights: [
      {
        title: "Encontro em água aberta com mãe e filhote",
        story:
          "O filhote sobe para respirar a cada poucos minutos; a mãe permanece suspensa, imóvel, a vinte metros de profundidade. Quando ela abre os olhos e gira devagar para olhar quem está na superfície, o silêncio dentro da máscara vira absoluto.",
      },
      {
        title: "O canto dos machos",
        story:
          "A partir de agosto, os machos cantam sequências que duram vinte minutos e se repetem por horas. Debaixo d'água, o som chega pelo peito antes de chegar pelo ouvido.",
      },
      {
        title: "Heat runs",
        story:
          "Grupos de machos competindo em alta velocidade por uma fêmea, batendo nadadeiras e saltando — o espetáculo mais bruto e cinematográfico da temporada.",
      },
      {
        title: "O arquipélago de Vava'u",
        story:
          "Sessenta ilhas de calcário e água turquesa, cavernas marinhas e aldeias polinésias onde o domingo ainda é dedicado ao canto coral nas igrejas.",
      },
    ],
    beyondUsual: [
      {
        title: "Charter privativo de catamarã",
        story:
          "Um barco só seu permite seguir as baleias sem competir por vaga e dormir ancorado em enseadas desertas — a melhor forma de viver a temporada.",
      },
      {
        title: "Ha'apai, o grupo silencioso",
        story:
          "Menos barcos e mais encontros longos, para quem prioriza qualidade de interação em vez de conforto de infraestrutura.",
      },
      {
        title: "Combinação com Fiji ou Nova Zelândia",
        story:
          "Conexões regionais permitem somar Tonga a uma temporada em Fiji ou à Ilha Sul neozelandesa no mesmo bilhete.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quando nadar com baleias em Tonga?", a: "A temporada oficial vai de julho a outubro. Agosto e setembro são os meses de pico, com filhotes recém-nascidos e cantos dos machos." },
      { q: "É seguro nadar com jubartes?", a: "Sim, quando feito com operadores licenciados. A lei tonganesa limita quatro nadadores mais um guia por baleia, proíbe aproximação por cima do animal e respeita sinais de estresse — nunca há perseguição." },
      { q: "Preciso ser mergulhador?", a: "Não. Toda a interação é em snorkel e apneia superficial. Bom preparo de natação e conforto em mar aberto são o suficiente." },
      { q: "Quantos dias reservar?", a: "Recomendamos de cinco a sete dias de água. As baleias são selvagens: mais dias significam mais chances de um encontro longo e memorável." },
      { q: "Quanto custa a viagem a Tonga?", a: "Depende do aéreo, da hospedagem e do formato — barco compartilhado ou charter privativo. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro em Tonga?", a: "Clique em Criar roteiro sob medida e conte suas datas de julho a outubro." },
    ],
  },
  {
    id: "asia-paquistao-hunza",
    continent: "Ásia",
    country: "Paquistão",
    region: "Vale do Hunza, Karakoram e Baltistão",
    slug: "asia/paquistao/hunza-karakoram",
    name: "Paquistão — Vale do Hunza e o Karakoram",
    bestTime:
      "Abr–Mai para as amendoeiras e damasqueiros em flor; Set–Out para o outono dourado dos álamos e céu limpo sobre o Rakaposhi.",
    tags: ["montanha", "trekking", "cultura", "remoto", "fotografia", "expedicao"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of Hunza Valley in autumn, golden poplar trees along terraced fields, ancient stone fort on a ridge, snow-covered Rakaposhi peak towering behind, crisp clear light, editorial travel photography, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Karakoram concentra a maior densidade de montanhas altas do planeta: quatro picos de mais de oito mil metros a poucos vales de distância, incluindo o K2. No meio dessa geografia impossível está o Hunza, um vale de terraços de damasco e albricoques onde as pessoas envelhecem bem e recebem estranhos com uma naturalidade desarmante. A Karakoram Highway — a estrada pavimentada mais alta do mundo — costura tudo isso, subindo da planície do Indo até a fronteira chinesa em Khunjerab, a 4.700 metros.",
    highlights: [
      {
        title: "Fortes de Baltit e Altit",
        story:
          "Mil anos de arquitetura de pedra e madeira restaurados pela Fundação Aga Khan, pendurados sobre o vale. Do terraço, vê-se o Rakaposhi inteiro — sete mil e oitocentos metros sem nenhum obstáculo visual.",
      },
      {
        title: "Passo de Khunjerab e a Karakoram Highway",
        story:
          "Subir de carro até 4.700 metros entre geleiras suspensas e caminhões pintados como igrejas ambulantes. A estrada é, em si, a atração.",
      },
      {
        title: "Geleira Passu e as Cathedral Spires",
        story:
          "Agulhas de granito recortando o céu como catedrais e um mar de gelo cinzento aos pés. A ponte suspensa de Hussaini, feita de cabos e tábuas soltas, é o teste de coragem local.",
      },
      {
        title: "Fairy Meadows e o Nanga Parbat",
        story:
          "Uma campina de altitude aos pés da nona montanha mais alta do mundo, alcançada por jipe e caminhada. À noite, a face Rupal reflete a lua e ninguém consegue dormir cedo.",
      },
    ],
    beyondUsual: [
      {
        title: "Trekking até o Concordia e o K2 Base Camp",
        story:
          "Duas semanas sobre a geleira Baltoro até o anfiteatro onde quatro oito-mil-metros se encontram. Uma das grandes travessias de montanha do mundo, para viajantes preparados.",
      },
      {
        title: "Festival Shandur de polo",
        story:
          "Em julho, Chitral e Gilgit disputam polo a 3.700 metros de altitude, sem árbitro e sem regras escritas, num campo cercado de montanhas.",
      },
      {
        title: "Lahore e a herança mogol",
        story:
          "Antes ou depois da montanha: o Forte de Lahore, a mesquita Badshahi e uma das cozinhas mais intensas da Ásia.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar o Vale do Hunza?", a: "Abril e maio, quando damasqueiros e cerejeiras florescem no vale, e setembro a outubro, quando os álamos ficam dourados e o céu limpa para ver o Rakaposhi e o Passu." },
      { q: "O Paquistão é seguro para turistas?", a: "As regiões de Gilgit-Baltistão e Hunza têm hoje um histórico muito favorável e recebem viajantes internacionais com regularidade. Trabalhamos com guias locais, motoristas fixos e roteiros que evitam áreas desaconselhadas." },
      { q: "Precisa de visto para o Paquistão?", a: "Sim. Brasileiros solicitam visto eletrônico, geralmente com carta-convite do operador local, que providenciamos como parte do serviço." },
      { q: "É preciso preparo físico?", a: "Para o roteiro clássico do Hunza, não — a maior parte é feita de carro com caminhadas leves. Fairy Meadows exige uma caminhada de três a quatro horas, e o Baltoro/K2 exige preparo de trekking de alta montanha." },
      { q: "Quanto custa uma viagem ao Paquistão?", a: "Varia conforme a duração, uso de voos internos e hospedagens. Valores enviados sob consulta, com condições de pagamento para a parte terrestre." },
      { q: "Como criar meu roteiro no Paquistão?", a: "Clique em Criar roteiro sob medida e conte se busca a versão cultural do Hunza ou um trekking de altitude." },
    ],
  },
  {
    id: "asia-india-ladakh",
    continent: "Ásia",
    country: "Índia",
    region: "Ladakh, Himalaia indiano",
    slug: "asia/india/ladakh",
    name: "Ladakh — mosteiros himalaicos e o leopardo-das-neves",
    bestTime:
      "Jun–Set para vales abertos, festivais monásticos e trekking; Jan–Mar para rastrear leopardo-das-neves em Hemis.",
    tags: ["montanha", "cultura", "remoto", "trekking", "fotografia", "safari"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of Thiksey Monastery in Ladakh at sunrise, whitewashed buildings cascading down an ochre hillside, barren Himalayan mountains and deep blue sky behind, prayer flags in foreground, editorial style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Ladakh é o Tibete que ainda se pode visitar: budismo vajrayana vivo, mosteiros do século XI colados em penhascos e uma paisagem de deserto de altitude onde a terra é ocre e o céu, de um azul quase artificial. A 3.500 metros, o ar seco e a luz cortante mudam a percepção das distâncias — uma montanha que parece a uma hora está a um dia. No inverno, quando os passos fecham e a temperatura despenca, o Vale de Rumbak se torna o melhor lugar do mundo para rastrear o leopardo-das-neves.",
    highlights: [
      {
        title: "Mosteiros de Thiksey, Hemis e Lamayuru",
        story:
          "A puja do amanhecer em Thiksey: monges jovens servindo chá de manteiga, tambores graves, trompas longas e a luz entrando obliquamente pela sala das estátuas. Nada disso é encenado para visitantes.",
      },
      {
        title: "Vale de Nubra e Khardung La",
        story:
          "Cruzar um dos passos motorizáveis mais altos do mundo para descer a dunas de areia onde camelos bactrianos, remanescentes da Rota da Seda, ainda pastam entre montanhas nevadas.",
      },
      {
        title: "Lago Pangong",
        story:
          "Cento e trinta quilômetros de água salgada a 4.350 metros, mudando de turquesa a azul-cobalto conforme o sol se move. Dormir ali é dormir sob a via láctea inteira.",
      },
      {
        title: "Festivais monásticos mascarados",
        story:
          "Nas cham dances de Hemis, monges com máscaras de divindades iradas dançam para expulsar obstáculos do ano. Cor, tambor e teologia em movimento.",
      },
    ],
    beyondUsual: [
      {
        title: "Rastreamento de leopardo-das-neves",
        story:
          "Fevereiro em Rumbak, com rastreadores locais e lunetas: dias de paciência recompensados pelo animal mais difícil de ver do planeta. Programas com pernoite em homestays ladakhis.",
      },
      {
        title: "Trekking do Vale de Markha",
        story:
          "Sete dias entre aldeias, passos de cinco mil metros e mosteiros isolados, com apoio de mulas e cozinheiro.",
      },
      {
        title: "Zanskar e o Chadar",
        story:
          "Em janeiro, caminhar sobre o rio congelado que já foi a única saída de inverno do vale. Uma das travessias mais extremas e fotogênicas da Ásia.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para ir a Ladakh?", a: "De junho a setembro, quando as estradas abrem e acontecem os festivais monásticos. Para rastrear leopardo-das-neves, a janela é de janeiro a março." },
      { q: "Como lidar com a altitude em Ladakh?", a: "Leh está a 3.500 metros. Planejamos dois dias de aclimatação sem esforço no início do roteiro, hidratação orientada e subidas graduais para Nubra e Pangong." },
      { q: "Como se chega a Ladakh?", a: "Por voo doméstico de Délhi a Leh, cerca de 1h20, com vista aérea do Himalaia. Também é possível chegar por estrada de Manali ou Srinagar entre junho e setembro." },
      { q: "Quantos dias em Ladakh?", a: "Oito a dez dias permitem aclimatação, mosteiros do Vale do Indo, Nubra e Pangong. Trekkings e programas de leopardo pedem de doze a quinze." },
      { q: "Quanto custa uma viagem a Ladakh?", a: "Depende da temporada, do padrão de hospedagem e de haver ou não programa de vida selvagem. Enviamos os valores sob consulta." },
      { q: "Como criar meu roteiro em Ladakh?", a: "Clique em Criar roteiro sob medida e conte se prefere a face cultural ou a face de expedição do Himalaia indiano." },
    ],
  },
  {
    id: "asia-india-kerala",
    continent: "Ásia",
    country: "Índia",
    region: "Kerala, Costa do Malabar",
    slug: "asia/india/kerala",
    name: "Kerala — backwaters, chá e a Costa do Malabar",
    bestTime:
      "Out–Mar, com clima seco e ameno. Dezembro e janeiro são os meses mais confortáveis; agosto traz o festival de barcos de Onam.",
    tags: ["navegacao", "bem-estar", "gastronomia", "cultura", "praia", "familia"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of a traditional kettuvallam houseboat gliding through Kerala backwaters at golden hour, coconut palms mirrored in still water, a fisherman casting a net in the distance, warm editorial light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Kerala é a Índia em outro andamento: verde, marítima, alfabetizada, temperada por séculos de comércio com árabes, chineses, portugueses e holandeses. Aqui a viagem se organiza em camadas — os canais dos backwaters, as montanhas de chá dos Ghats Ocidentais, as casas coloniais de Fort Kochi e a medicina ayurvédica praticada como ciência, não como spa. É o destino indiano ideal para quem quer profundidade cultural sem a intensidade do norte.",
    highlights: [
      {
        title: "Backwaters em kettuvallam privativo",
        story:
          "Uma casa-barco de madeira e coqueiro só sua, deslizando por 900 quilômetros de canais. Cozinheiro a bordo, peixe pescado na hora e o silêncio das seis da tarde, quando os pássaros trocam de turno.",
      },
      {
        title: "Fort Kochi e as redes chinesas",
        story:
          "A mais antiga sinagoga em atividade da Commonwealth, igrejas portuguesas, armazéns de especiarias que ainda cheiram a cardamomo e as redes de pesca chinesas erguendo-se contra o pôr do sol.",
      },
      {
        title: "Plantações de chá de Munnar",
        story:
          "Colinas inteiras esculpidas em verde-esmeralda a 1.600 metros, névoa passando entre as fileiras e o cheiro de folha nova. Bangalôs de fazendeiro britânico convertidos em hospedagens de charme.",
      },
      {
        title: "Kathakali e teyyam",
        story:
          "Duas horas de maquiagem para meia hora de teatro-dança sagrado. No norte de Kerala, o teyyam vai além: o dançarino incorpora a divindade, e a aldeia inteira se ajoelha.",
      },
    ],
    beyondUsual: [
      {
        title: "Ayurveda com prescrição médica",
        story:
          "Programas de sete a vinte e um dias em centros credenciados, com diagnóstico, dieta e tratamento — o oposto do spa de fim de semana.",
      },
      {
        title: "Costa do Malabar até Kannur",
        story:
          "O norte pouco visitado, com fortes portugueses, tecelagens de algodão e praias sem nenhum resort à vista.",
      },
      {
        title: "Wayanad e Periyar",
        story:
          "Reservas de elefantes e tigres nos Ghats Ocidentais, com safáris a pé acompanhados por rastreadores tribais.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para conhecer Kerala?", a: "De outubro a março, fora das monções, com clima seco e temperaturas amenas. Agosto e setembro têm as regatas de Onam, mas com chuva frequente." },
      { q: "Vale a pena dormir em uma casa-barco nos backwaters?", a: "Sim, uma ou duas noites em kettuvallam privativo com tripulação é uma das experiências mais memoráveis da Índia. Selecionamos barcos com ar-condicionado e cozinha própria." },
      { q: "Kerala é indicada para quem viaja à Índia pela primeira vez?", a: "É a porta de entrada mais confortável do país: infraestrutura sólida, ritmo tranquilo, boa hotelaria e menos intensidade urbana do que o norte." },
      { q: "Quantos dias em Kerala?", a: "Oito a dez dias cobrem Kochi, Munnar, backwaters e uma praia. Com ayurveda ou norte de Malabar, calcule de doze a quinze." },
      { q: "Quanto custa uma viagem a Kerala?", a: "Depende do padrão de hospedagem, do barco escolhido e do tempo de programa ayurvédico. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro em Kerala?", a: "Clique em Criar roteiro sob medida e conte se busca cultura, bem-estar ou combinação com Rajastão." },
    ],
  },
  {
    id: "asia-central-uzbequistao-quirguistao",
    continent: "Ásia",
    country: "Uzbequistão e Quirguistão",
    region: "Rota da Seda e Tien Shan",
    slug: "asia/asia-central/uzbequistao-quirguistao",
    name: "Ásia Central — Samarcanda, Bukhara e as montanhas Tien Shan",
    bestTime:
      "Abr–Jun e Set–Out nas cidades da Rota da Seda; Jul–Ago para os pastos de altitude e os jailoos do Quirguistão.",
    tags: ["cultura", "montanha", "remoto", "gastronomia", "fotografia", "cavalgadas"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of the Registan in Samarkand at dusk, three towering madrasas covered in cobalt blue and turquoise tilework, warm floodlight against deep blue sky, editorial travel photography, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Nenhuma outra região concentra tanto azul: as madrassas de Samarcanda e Bukhara são cobertas de azulejos cobalto e turquesa que atravessaram seiscentos anos. A Rota da Seda não é metáfora aqui — é urbanismo, é comida, é a razão pela qual um bazar de Tashkent vende damascos do Ferganá ao lado de tapetes turcomanos. A poucas horas dali, o Quirguistão oferece o contraponto absoluto: nenhum monumento, apenas pastagens de altitude, iurtas, cavalos e o lago Issyk-Kul emoldurado por montanhas de cinco mil metros.",
    highlights: [
      {
        title: "Registan, em Samarcanda",
        story:
          "Três madrassas em torno de uma praça, cobertas de mosaico azul do chão ao topo dos minaretes. Ao entardecer, com os refletores acesos e a praça quase vazia, a escala é medieval e íntima ao mesmo tempo.",
      },
      {
        title: "Bukhara, a cidade que continua sendo cidade",
        story:
          "Diferente de um sítio arqueológico: aqui as pessoas moram entre caravançarais do século XVI, tomam chá à sombra das amoreiras do Lyabi-Hauz e vendem tesouras em forma de cegonha nas cúpulas dos bazares.",
      },
      {
        title: "Khiva ao amanhecer",
        story:
          "A cidade murada de Ichan Kala, inteira em tijolo cru e cerâmica turquesa. Antes das sete da manhã, você a percorre sozinho, com a luz rasante batendo no minarete inacabado de Kalta Minor.",
      },
      {
        title: "Jailoos e o lago Song-Köl",
        story:
          "No verão quirguiz, famílias sobem com rebanhos para pastos a três mil metros. Dormir em uma iurta, comer com a família e ver o céu noturno sem uma única luz artificial ao redor.",
      },
    ],
    beyondUsual: [
      {
        title: "Caça com águias-reais",
        story:
          "Berkutchi treinam águias há séculos no Tien Shan. Ver uma ave de dois metros de envergadura descer sobre a neve a um chamado é uma cena de outro tempo.",
      },
      {
        title: "Vale do Ferganá",
        story:
          "A oficina artesanal da Ásia Central: seda ikat tingida à mão, cerâmica de Rishtan e facas de Chust, longe de qualquer circuito turístico.",
      },
      {
        title: "Trem particular pela Rota da Seda",
        story:
          "Programas em trem de luxo cruzando Cazaquistão, Uzbequistão e Turcomenistão, incluindo a cratera em chamas de Darvaza.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar à Ásia Central?", a: "Abril a junho e setembro a outubro têm clima ideal nas cidades da Rota da Seda. Julho e agosto, quentes nas planícies, são a única janela para os pastos de altitude do Quirguistão." },
      { q: "Brasileiros precisam de visto para Uzbequistão e Quirguistão?", a: "Ambos os países dispensam visto para brasileiros em estadas de turismo de curta duração. Confirmamos as regras vigentes na abertura de cada roteiro." },
      { q: "Dá para combinar Uzbequistão e Quirguistão na mesma viagem?", a: "Sim, e é a combinação que recomendamos: cinco a sete dias de cidades monumentais mais quatro a cinco de montanha, com conexão aérea curta via Tashkent ou Bishkek." },
      { q: "É um destino confortável?", a: "O Uzbequistão tem hotelaria boutique excelente em Samarcanda e Bukhara. No Quirguistão, o conforto é rústico por natureza — iurtas e guesthouses — e é justamente esse o ponto." },
      { q: "Quanto custa uma viagem à Ásia Central?", a: "Depende da duração, do padrão de hotelaria e do uso de trem privativo. Enviamos as opções sob consulta." },
      { q: "Como criar meu roteiro na Ásia Central?", a: "Clique em Criar roteiro sob medida e conte se busca a Rota da Seda cultural, a montanha nômade ou as duas." },
    ],
  },
  {
    id: "asia-tibete-himalaia",
    continent: "Ásia",
    country: "Tibete e Nepal",
    region: "Lhasa, Shigatse e face norte do Everest",
    slug: "asia/tibete/lhasa-everest",
    name: "Tibete — Lhasa, Shigatse e a face norte do Everest",
    bestTime:
      "Abr–Jun e Set–Out, com céu limpo e estradas abertas. Outubro oferece a melhor visibilidade do Everest a partir de Rongbuk.",
    tags: ["montanha", "cultura", "remoto", "fotografia", "expedicao", "trekking"],
    imageAiPrompt:
      "Ultra realistic documentary photograph of Potala Palace in Lhasa at dawn, massive white and ochre fortress-monastery rising above the city, clear high-altitude sky, prayer flags strung in the foreground, editorial travel photography, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O planalto tibetano é a maior altitude habitada do planeta — uma imensidão de 4.500 metros onde o ar é escasso, a luz é violenta e a fé é a estrutura organizadora de tudo. Peregrinos medem o caminho até Lhasa com o próprio corpo, prostração após prostração. O Potala domina a cidade como uma montanha construída. E, seguindo a Estrada da Amizade rumo ao oeste, chega-se ao mosteiro de Rongbuk, de onde se vê a face norte do Everest inteira, sem trekking algum.",
    highlights: [
      {
        title: "Palácio de Potala e templo de Jokhang",
        story:
          "Mil cômodos, escadarias íngremes e capelas douradas onde a manteiga de iaque queima há séculos. No Jokhang, os peregrinos giram o Barkhor no sentido horário desde antes do amanhecer.",
      },
      {
        title: "Mosteiro de Tashilhunpo, em Shigatse",
        story:
          "Sede do Panchen Lama, com um Buda Maitreya de vinte e seis metros folheado a ouro. Os debates filosóficos no pátio, com palmas ritmadas, acontecem ao fim da tarde.",
      },
      {
        title: "Face norte do Everest em Rongbuk",
        story:
          "O mosteiro mais alto do mundo, a 5.000 metros, e a montanha ocupando todo o horizonte sul. Ao pôr do sol, a pluma de neve no cume fica alaranjada.",
      },
      {
        title: "Lago Yamdrok e o passo Kamba La",
        story:
          "Água turquesa em forma de escorpião a 4.400 metros, cercada de morros nus. Uma das paradas mais fotografadas do planalto — e ainda assim silenciosa.",
      },
    ],
    beyondUsual: [
      {
        title: "Kora do Monte Kailash",
        story:
          "Três dias de circumambulação em torno da montanha mais sagrada da Ásia, a 5.600 metros no passo Dolma La, entre peregrinos hindus, budistas e bön.",
      },
      {
        title: "Combinação com Nepal por estrada",
        story:
          "Entrar por Lhasa e sair por Katmandu descendo 4.000 metros em um dia, do deserto de altitude à floresta subtropical.",
      },
      {
        title: "Butão como extensão",
        story:
          "Fechar o Himalaia budista com o reino do índice de felicidade, o Ninho do Tigre e os festivais tsechu.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar ao Tibete?", a: "Abril a junho e setembro a outubro. Outubro costuma ter o céu mais limpo para ver a face norte do Everest a partir de Rongbuk." },
      { q: "É preciso permissão especial para entrar no Tibete?", a: "Sim. Além do visto chinês, é obrigatório o Tibet Travel Permit e, para áreas como Everest e Kailash, permissões adicionais — todas providenciadas por nós com antecedência, exigindo guia e transporte licenciados." },
      { q: "Como lidar com a altitude no Tibete?", a: "Lhasa está a 3.650 metros. Programamos dois dias de aclimatação antes de qualquer deslocamento, subidas graduais e monitoramento diário, com oxigênio disponível nos veículos." },
      { q: "Quantos dias no Tibete?", a: "Oito dias cobrem Lhasa, Gyantse, Shigatse e o acampamento base norte do Everest. O Kailash exige de treze a quinze dias." },
      { q: "Quanto custa uma viagem ao Tibete?", a: "Depende de permissões, veículo, guia e categoria de hospedagem — a operação é obrigatoriamente privativa. Enviamos os valores sob consulta." },
      { q: "Como criar meu roteiro no Tibete?", a: "Clique em Criar roteiro sob medida e conte se deseja incluir Everest, Kailash ou a travessia até o Nepal." },
    ],
  },
];
