import { Destination } from "../types";

/**
 * Ampliação Américas do Sul, África e Alpes:
 * Ilha de Páscoa, Lago Titicaca, Mendoza, Lagos Andinos e Chiloé,
 * Kilimanjaro e Tour du Mont Blanc.
 */
export const andesAlpesExtraDestinations: Destination[] = [
  {
    id: "america-do-sul-chile-ilha-de-pascoa",
    continent: "América do Sul",
    country: "Chile",
    region: "Rapa Nui — Ilha de Páscoa",
    slug: "america-do-sul/chile/ilha-de-pascoa",
    name: "Ilha de Páscoa — Rapa Nui",
    bestTime:
      "Set–Nov e Mar–Mai, com clima ameno e menos visitantes. Fevereiro concentra a Tapati Rapa Nui, o maior festival cultural polinésio do Pacífico Sul.",
    tags: ["cultura", "remoto", "fotografia", "praia", "festivais-folcloricos"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of a row of moai statues at Ahu Tongariki on Easter Island at sunrise, volcanic coastline and ocean spray behind, dramatic warm light, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Rapa Nui é o lugar habitado mais isolado do planeta: 3.700 quilômetros de oceano até a costa chilena, 2.000 até a ilha vizinha mais próxima. Nesse isolamento, um povo polinésio esculpiu quase mil moai em rocha vulcânica e os ergueu de frente para as aldeias, de costas para o mar. Caminhar pela pedreira do Rano Raraku, onde estátuas inacabadas continuam deitadas na encosta, é atravessar um enigma que a arqueologia ainda desmonta. A curadoria Create Travel usa guias rapanui, hospedagens boutique e horários fora do fluxo dos grupos.",
    highlights: [
      {
        title: "Nascer do sol em Ahu Tongariki",
        story:
          "Quinze moai alinhados recebem a primeira luz do Pacífico. A silhueta se acende do escuro para o dourado em quinze minutos, e ninguém fala — o vento e as ondas fazem o resto.",
      },
      {
        title: "Rano Raraku, a pedreira dos gigantes",
        story:
          "Quase 400 moai ainda presos à rocha, alguns pela metade, como se os escultores tivessem largado as ferramentas ontem. É o lugar onde a ilha revela como fez o impossível.",
      },
      {
        title: "Orongo e o culto do homem-pássaro",
        story:
          "Casas de pedra na borda de uma cratera de 300 metros, sobre o oceano. Dali, jovens desciam a falésia e nadavam até um ilhéu em busca do primeiro ovo de andorinha-do-mar — a competição decidia quem governaria a ilha por um ano.",
      },
      {
        title: "Anakena e a areia coralina",
        story:
          "A única praia de areia branca da ilha, com coqueiros e moai de costas para o mar. O contraste entre praia polinésia e arqueologia monumental não existe em nenhum outro lugar.",
      },
    ],
    beyondUsual: [
      {
        title: "Cavalgada até o Terevaka",
        story:
          "O ponto mais alto da ilha, de onde se vê os 360 graus de horizonte oceânico — a percepção física do isolamento absoluto.",
      },
      {
        title: "Tapati Rapa Nui",
        story:
          "Duas semanas de fevereiro com competições ancestrais, corpos pintados, canto e dança — o calendário cultural mais forte da Polinésia oriental.",
      },
      {
        title: "Cavernas e tubos de lava",
        story:
          "Ana Kakenga e Ana Te Pahu, galerias vulcânicas usadas como refúgio, com janelas abertas direto para o penhasco e o mar.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar a Ilha de Páscoa?", a: "Setembro a novembro e março a maio, com clima ameno e menos visitantes. Fevereiro é o mês da Tapati Rapa Nui, festival cultural que exige reserva com muitos meses de antecedência." },
      { q: "Como se chega à Ilha de Páscoa?", a: "Por voo direto de Santiago do Chile, com cerca de 5h30 de duração, operado pela LATAM. Também há conexão pontual com Papeete, no Taiti." },
      { q: "Quantos dias na Ilha de Páscoa?", a: "De 4 a 5 noites permitem conhecer os principais ahu, Rano Raraku, Orongo, Anakena e ainda ter dias de ritmo lento. Menos que isso torna a viagem apressada para a distância percorrida." },
      { q: "É preciso pagar entrada nos sítios arqueológicos?", a: "Sim. O ingresso do Parque Nacional Rapa Nui é obrigatório, válido por dez dias, e alguns sítios só podem ser visitados uma única vez com guia local credenciado." },
      { q: "Vale combinar Ilha de Páscoa com Patagônia ou Atacama?", a: "Sim. Santiago é a base natural das três rotas, e um roteiro de 14 a 18 dias pode reunir deserto, ilha e fim do mundo em uma única viagem." },
      { q: "Como montar meu roteiro para Rapa Nui?", a: "Clique em Criar roteiro sob medida — desenhamos a viagem com guia rapanui, hospedagem boutique e horários fora do fluxo dos grupos." },
    ],
  },
  {
    id: "america-do-sul-peru-lago-titicaca",
    continent: "América do Sul",
    country: "Peru e Bolívia",
    region: "Lago Titicaca — Puno, Taquile e Isla del Sol",
    slug: "america-do-sul/peru/lago-titicaca",
    name: "Lago Titicaca — Puno, Taquile e Isla del Sol",
    bestTime:
      "Mai–Set (estação seca), com céu limpo e noites frias. Fevereiro traz a Candelária em Puno, uma das maiores festas religiosas dos Andes.",
    tags: ["cultura", "montanha", "navegacao", "fotografia", "festivais-folcloricos"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of Lake Titicaca at 3800m, deep blue water, terraced island slopes and traditional reed boat, Andean sky with towering clouds, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A 3.812 metros de altitude, o Titicaca é o lago navegável mais alto do mundo e, para as culturas andinas, o berço do sol. A água tem um azul denso que parece pintado, as ilhas Uros flutuam sobre camadas de totora renovadas a cada quinze dias e, em Taquile, os homens tecem e as mulheres fiam em uma sociedade que a Unesco reconheceu como patrimônio imaterial. Do lado boliviano, a Isla del Sol guarda a rocha sagrada de onde, segundo o mito, Manco Cápac emergiu. Curadoria Create Travel com barcos privativos e pernoite em comunidade.",
    highlights: [
      {
        title: "Ilhas flutuantes dos Uros",
        story:
          "Pisar em uma ilha de junco é sentir o chão ceder levemente, como um colchão. As famílias explicam como o solo é reposto camada sobre camada e por que as casas precisam ser leves.",
      },
      {
        title: "Taquile e o têxtil patrimônio da humanidade",
        story:
          "Uma ilha sem carros, sem hotéis e sem polícia, governada por códigos comunitários. O gorro tecido por um homem indica se ele é solteiro ou casado — e a qualidade do tecido diz quem ele é.",
      },
      {
        title: "Pernoite em Amantani",
        story:
          "Dormir na casa de uma família aymara, jantar quinoa e batata cozida no fogão a lenha e subir ao templo de Pachatata para ver o pôr do sol sobre o lago inteiro.",
      },
      {
        title: "Isla del Sol, na Bolívia",
        story:
          "Trilhas incas entre terraços agrícolas e ruínas, com o Titicaca de um lado e a Cordilheira Real nevada do outro. Nenhum veículo motorizado na ilha.",
      },
    ],
    beyondUsual: [
      {
        title: "Sillustani e as chullpas",
        story:
          "Torres funerárias pré-incas de até 12 metros, à beira da lagoa Umayo — geometria impressionante e quase sem visitantes.",
      },
      {
        title: "Trem Andean Explorer",
        story:
          "Um dos poucos trens-hotel de luxo da América do Sul, cruzando o altiplano entre Cusco, Puno e Arequipa com cabines e vagão de observação.",
      },
      {
        title: "Travessia Peru–Bolívia por terra",
        story:
          "Puno, Copacabana e La Paz em rota terrestre, atravessando a fronteira à beira do lago com paradas culturais no caminho.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar o lago Titicaca?", a: "De maio a setembro, na estação seca, com céu limpo e sol forte durante o dia — mas noites que podem ficar abaixo de zero. Fevereiro concentra a Virgem da Candelária, em Puno." },
      { q: "Como lidar com a altitude no Titicaca?", a: "A 3.812 metros, recomendamos chegar já aclimatado por Cusco ou Arequipa, hidratação intensa, primeiro dia leve e chá de coca. Podemos incluir oxigênio suplementar nas hospedagens." },
      { q: "Quantos dias no lago Titicaca?", a: "De 2 a 3 dias no lado peruano, incluindo Uros, Taquile e, opcionalmente, pernoite em Amantani. Com a Isla del Sol boliviana, some mais 2 dias." },
      { q: "Como combinar Titicaca com Machu Picchu?", a: "É a extensão natural do Peru clássico: Cusco e Vale Sagrado, Machu Picchu, e depois Puno por estrada cênica ou pelo trem Andean Explorer, seguindo para Arequipa e o Colca." },
      { q: "O pernoite em comunidade é confortável?", a: "É simples e autêntico: quarto em casa de família, banheiro básico e refeições caseiras. Para quem prefere conforto pleno, indicamos hotéis à beira do lago em Puno com visita de dia inteiro às ilhas." },
      { q: "Como montar meu roteiro pelo Titicaca?", a: "Clique em Criar roteiro sob medida — desenhamos a viagem com barcos privativos, guias locais e a combinação com Cusco, Arequipa ou Bolívia." },
    ],
  },
  {
    id: "america-do-sul-argentina-mendoza",
    continent: "América do Sul",
    country: "Argentina",
    region: "Mendoza — Uco, Luján de Cuyo e Maipú",
    slug: "america-do-sul/argentina/mendoza",
    name: "Mendoza — Vale de Uco, Malbec e Cordilheira",
    bestTime:
      "Mar–Abr (vindima e outono nos parreirais) e Out–Dez (primavera com Andes nevados ao fundo). Março concentra a Fiesta Nacional de la Vendimia.",
    tags: ["gastronomia", "montanha", "roadtrip", "bem-estar", "fotografia", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of vineyard rows in Uco Valley Mendoza with snow-capped Andes on the horizon, autumn golden vines, long shadows at late afternoon, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Mendoza é a região vinícola de maior altitude do mundo em escala comercial — parreirais a até 1.700 metros, com os Andes nevados como pano de fundo permanente. O Malbec, uva francesa quase extinta na origem, encontrou aqui sua expressão definitiva. Mas a viagem vai além da taça: almoços de sete tempos em bodegas de arquitetura contemporânea, cavalgadas na cordilheira, rafting no rio Mendoza e o Aconcágua, o teto das Américas, a poucas horas de carro. Curadoria Create Travel com hotéis-vinícola, chefs premiados e motorista privativo.",
    highlights: [
      {
        title: "Vale de Uco em dia inteiro",
        story:
          "Três bodegas, três altitudes e três interpretações do Malbec. Entre uma e outra, o almoço em mesa longa sob as parreiras com a cordilheira ocupando toda a janela.",
      },
      {
        title: "Almoços de autor nas bodegas",
        story:
          "Cozinhas de fogo, cordeiro em cocção lenta e harmonização copo a copo. Alguns dos restaurantes de bodega de Mendoza figuram entre os melhores da América Latina.",
      },
      {
        title: "Alta montanha e o Aconcágua",
        story:
          "A estrada rumo ao Chile atravessa Uspallata, a Ponte do Inca e o mirante do Aconcágua, a 6.961 metros. A escala da paisagem cala qualquer conversa dentro do carro.",
      },
      {
        title: "Cavalgada andina com asado",
        story:
          "Subir a cavalo até um mirante ao entardecer e descer para um asado criollo com fogo aceso e violão — o ritual argentino em sua forma mais verdadeira.",
      },
    ],
    beyondUsual: [
      {
        title: "Vindima participativa",
        story:
          "Em março, colher a uva de manhã, acompanhar a mesa de seleção e assinar o próprio blend com o enólogo da casa.",
      },
      {
        title: "Salta e Cafayate como extensão",
        story:
          "Os Torrontés de altitude e a Quebrada de las Conchas, no noroeste argentino, formam com Mendoza a rota completa do vinho andino.",
      },
      {
        title: "Termas de Cacheuta",
        story:
          "Piscinas termais encravadas na rocha da cordilheira, ideais para o dia seguinte a uma sequência de degustações.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar Mendoza?", a: "Março e abril, época da vindima e do outono dourado nos parreirais, e outubro a dezembro, com primavera e Andes ainda nevados. O verão é quente e seco; o inverno é frio, com bodegas mais vazias e preços melhores." },
      { q: "Quantos dias em Mendoza?", a: "De 4 a 5 dias: dois no Vale de Uco, um em Luján de Cuyo e Maipú, um de alta montanha rumo ao Aconcágua e um livre para spa ou cavalgada." },
      { q: "É melhor ficar na cidade ou nas vinícolas?", a: "Recomendamos dividir: duas noites em hotel-vinícola no Vale de Uco, para viver o parreiral, e duas na cidade ou em Chacras de Coria, com mais gastronomia e vida noturna." },
      { q: "Precisa de motorista para as degustações?", a: "Sim, é a forma segura e confortável de fazer a rota. Trabalhamos sempre com motorista privativo e guia sommelier, com visitas agendadas antecipadamente nas bodegas de acesso restrito." },
      { q: "Mendoza é bom para quem não bebe vinho?", a: "Sim. A região oferece alta montanha, rafting, parapente, termas, cavalgadas e uma cena gastronômica forte — o vinho é o fio condutor, não a única razão." },
      { q: "Como montar meu roteiro por Mendoza?", a: "Clique em Criar roteiro sob medida — desenhamos a rota com hotéis-vinícola, almoços de autor e alta montanha." },
    ],
  },
  {
    id: "america-do-sul-chile-lagos-andinos-chiloe",
    continent: "América do Sul",
    country: "Chile e Argentina",
    region: "Lagos Andinos, Bariloche, Puerto Varas e Chiloé",
    slug: "america-do-sul/chile/lagos-andinos-chiloe",
    name: "Lagos Andinos e Chiloé — Bariloche, Puerto Varas e o arquipélago",
    bestTime:
      "Nov–Mar (verão austral, dias longos e travessias tranquilas). Jun–Set traz esqui em Bariloche e no Osorno; abril pinta as lengas de vermelho.",
    tags: ["montanha", "roadtrip", "navegacao", "gastronomia", "fotografia", "familia"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of Osorno volcano perfectly conical above Todos los Santos emerald lake, native forest shoreline, crisp morning light, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Entre o Chile e a Argentina há uma região de vulcões perfeitos, lagos de água esmeralda e floresta valdiviana que sobrevive desde antes da última glaciação. A travessia dos lagos andinos — feita em uma combinação de barcos e estradas entre Bariloche e Puerto Varas — é uma das viagens cênicas mais bonitas do continente. Chiloé acrescenta o arquipélago: igrejas de madeira patrimônio da Unesco, palafitas coloridas, curanto cozido no chão e uma mitologia própria de bruxas e barcos fantasmas. Curadoria Create Travel com lodges de autor e navegações privativas.",
    highlights: [
      {
        title: "Cruce Andino entre Bariloche e Petrohué",
        story:
          "Três lagos, três embarcações e trechos de estrada dentro de floresta virgem. Quando o barco entra no Todos los Santos e o cone branco do Osorno aparece à frente, o convés inteiro se levanta.",
      },
      {
        title: "Vulcão Osorno e os saltos de Petrohué",
        story:
          "Água turquesa forçada entre lava basáltica negra, com o vulcão em segundo plano. É a fotografia mais reproduzida do sul do Chile — e ainda assim surpreende ao vivo.",
      },
      {
        title: "Igrejas de madeira de Chiloé",
        story:
          "Dezesseis templos jesuítas erguidos sem um único prego, com técnica de carpintaria naval. Por dentro, cheiram a alerce e a séculos de fé insular.",
      },
      {
        title: "Curanto en hoyo",
        story:
          "Mariscos, carnes, batata e milcao cozidos sob folhas de pangue dentro de um buraco com pedras quentes. Um ritual gastronômico coletivo que dura toda a tarde.",
      },
      {
        title: "Bariloche e o Circuito Chico",
        story:
          "Lagos em cada curva, o Cerro Campanario com uma das vistas mais premiadas do mundo, chocolates artesanais e cordeiro patagônico ao fim do dia.",
      },
    ],
    beyondUsual: [
      {
        title: "Parque Tantauco e Parque Pumalín",
        story:
          "Reservas privadas de conservação criadas para proteger floresta temperada, com trilhas, refúgios e quase nenhum visitante.",
      },
      {
        title: "Termas de Puyuhuapi e Carretera Austral",
        story:
          "Extensão rumo ao sul profundo do Chile, com termas acessíveis apenas por barco e a estrada mais cênica do país.",
      },
      {
        title: "Pinguins em Puñihuil",
        story:
          "O único lugar do mundo onde pinguins de Magalhães e de Humboldt nidificam juntos, a poucos minutos de barco da costa de Chiloé.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para os Lagos Andinos e Chiloé?", a: "De novembro a março, no verão austral, com dias longos e travessias garantidas. Abril traz o outono das lengas em vermelho e laranja; de junho a setembro há esqui em Bariloche e no Osorno." },
      { q: "Como funciona a travessia dos lagos andinos?", a: "É um percurso combinado de barcos e ônibus entre Bariloche, na Argentina, e Puerto Varas, no Chile, atravessando os lagos Nahuel Huapi, Frías e Todos los Santos em um único dia, com opção de pernoite em Peulla." },
      { q: "Quantos dias para conhecer a região?", a: "De 8 a 10 dias: 3 em Bariloche, a travessia dos lagos, 2 em Puerto Varas e Frutillar, e 3 em Chiloé, entre Castro, Dalcahue e Puñihuil." },
      { q: "Chiloé vale a pena?", a: "Sim, para quem valoriza cultura viva. É a face mais singular do sul chileno: arquitetura de madeira, mitologia própria, gastronomia de raiz e paisagens de campo e mar que não se repetem no continente." },
      { q: "A região é boa para famílias?", a: "Excelente. As distâncias são curtas, as atividades são acessíveis a todas as idades e há lodges com estrutura para crianças, navegação, cavalgada e observação de fauna." },
      { q: "Como montar meu roteiro pelos Lagos Andinos?", a: "Clique em Criar roteiro sob medida — desenhamos a travessia binacional com lodges de autor e navegações privativas." },
    ],
  },
  {
    id: "africa-tanzania-kilimanjaro",
    continent: "África",
    country: "Tanzânia",
    region: "Kilimanjaro — rotas Machame, Lemosho e Rongai",
    slug: "africa/tanzania/kilimanjaro",
    name: "Kilimanjaro — o teto da África",
    bestTime:
      "Jan–Mar e Jun–Out (janelas secas). Janeiro e fevereiro têm céu mais limpo; agosto e setembro concentram a alta temporada com melhor previsibilidade.",
    tags: ["trekking", "montanha", "expedicao", "fotografia", "conservacao"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of Mount Kilimanjaro summit glaciers at sunrise seen from Stella Point, layered clouds far below, trekkers silhouettes small in the distance, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Kilimanjaro é a montanha mais alta do mundo que se sobe caminhando: 5.895 metros sem escalada técnica, atravessando cinco zonas climáticas em poucos dias — da floresta tropical à calota glacial, como se percorresse do Equador aos polos em uma semana. Chegar ao Uhuru Peak ao amanhecer, com as geleiras acesas em laranja e o continente africano estendido abaixo, é uma das conquistas pessoais mais celebradas que uma viagem pode oferecer. A Create Travel opera com equipes locais certificadas, aclimatação generosa e acampamentos de padrão superior — e recomenda emendar o safári no Serengeti e o descanso em Zanzibar.",
    highlights: [
      {
        title: "Cinco zonas climáticas em uma subida",
        story:
          "Floresta úmida com macacos colobus, charneca de lobélias gigantes, deserto alpino de pedra e, por fim, o gelo. Cada dia a paisagem se despede e outra assume.",
      },
      {
        title: "Muralha de Barranco",
        story:
          "Uma parede de rocha de 250 metros vencida com as mãos, sem corda, ao nascer do sol. Chegar no topo dela é o momento em que a maioria entende que vai conseguir.",
      },
      {
        title: "Cume ao amanhecer no Uhuru Peak",
        story:
          "Saída à meia-noite, lanternas em fila subindo o cascalho, e o sol nascendo em Stella Point sobre um mar de nuvens. As geleiras do cume ficam vermelhas por alguns minutos.",
      },
      {
        title: "Equipe local e ritual de despedida",
        story:
          "Guias, cozinheiros e carregadores cantam Kilimanjaro no último acampamento. Depois de uma semana de dependência mútua, é impossível não se emocionar.",
      },
    ],
    beyondUsual: [
      {
        title: "Rota Lemosho de oito dias",
        story:
          "A mais cênica e com melhor taxa de sucesso, por permitir aclimatação gradual e evitar os trechos mais movimentados.",
      },
      {
        title: "Kilimanjaro, Serengeti e Zanzibar",
        story:
          "A combinação perfeita: montanha, migração de gnus e o descanso em praia de areia branca no Índico.",
      },
      {
        title: "Monte Meru como aclimatação",
        story:
          "Quatro dias a 4.566 metros no Parque Arusha, com fauna no percurso — o melhor treino possível antes do cume principal.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para subir o Kilimanjaro?", a: "Janeiro a março e junho a outubro, as duas janelas secas. Janeiro e fevereiro têm céu mais limpo e menos gente; agosto e setembro são a alta temporada, com clima previsível e mais movimento nas rotas." },
      { q: "Qual rota do Kilimanjaro tem mais chance de sucesso?", a: "Lemosho em 8 dias e Machame em 7 dias apresentam as melhores taxas de cume, porque permitem aclimatação gradual. Rotas de 5 dias reduzem muito a probabilidade de chegar ao topo." },
      { q: "É preciso experiência de montanhismo?", a: "Não. Não há escalada técnica nem uso de corda. É preciso preparo aeróbico consistente, caminhadas longas de treino nos meses anteriores e boa resposta à altitude." },
      { q: "Como se lida com o mal de altitude?", a: "Com ritmo lento, hidratação abundante, dias extras de aclimatação, monitoramento diário de oximetria pela equipe e oxigênio de emergência disponível. Avaliação médica prévia é recomendada." },
      { q: "Vale combinar Kilimanjaro com safári?", a: "Sim, é o programa clássico: 7 a 8 dias de montanha, 4 a 5 de safári em Serengeti e Ngorongoro e 4 de descanso em Zanzibar, totalizando cerca de 17 dias." },
      { q: "Como montar minha expedição ao Kilimanjaro?", a: "Clique em Criar roteiro sob medida — indicamos a rota adequada ao seu perfil, com equipe certificada e acampamentos de padrão superior." },
    ],
  },
  {
    id: "europa-alpes-mont-blanc",
    continent: "Europa",
    country: "França, Itália e Suíça",
    region: "Tour du Mont Blanc — Chamonix, Courmayeur e Vale de Ferret",
    slug: "europa/alpes/tour-mont-blanc",
    name: "Tour du Mont Blanc — Alpes em três países",
    bestTime:
      "Jul–Set, quando os refúgios estão abertos e os colos livres de neve. Fim de junho traz flores alpinas; setembro oferece menos gente e ar mais limpo.",
    tags: ["trekking", "montanha", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of hikers trail crossing an alpine meadow with the Mont Blanc massif and glaciers behind, wildflowers in foreground, clear summer light, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Tour du Mont Blanc é a caminhada de longa distância mais célebre da Europa: cerca de 170 quilômetros em volta do maciço, atravessando França, Itália e Suíça, com geleiras à vista o tempo todo e uma mudança de idioma, cozinha e arquitetura a cada dois dias. Não é uma travessia de sobrevivência — dorme-se em refúgios e hotéis de montanha, come-se raclette, polenta e tarte aux myrtilles, e há versões com bagagem transportada e etapas ajustadas. Para quem prefere a montanha sem esforço, montamos a versão panorâmica: teleféricos, trens cênicos e caminhadas curtas com a mesma paisagem.",
    highlights: [
      {
        title: "Aiguille du Midi e o Vallée Blanche",
        story:
          "Teleférico até 3.842 metros em vinte minutos. Lá em cima, o Mont Blanc parece ao alcance da mão e a passarela de vidro suspende você sobre mil metros de vazio.",
      },
      {
        title: "Col de la Seigne, entrada na Itália",
        story:
          "O colo marca a fronteira. De um lado, o verde francês; do outro, o Val Veny se abrindo sob a face sul do maciço — talvez a vista mais impressionante de todo o circuito.",
      },
      {
        title: "Courmayeur e a cozinha valdostana",
        story:
          "Depois de uma etapa longa, uma mesa com fontina derretida, polenta concia e um tinto do Valle d'Aosta. A Itália alpina compensa cada metro de desnível.",
      },
      {
        title: "Vale de Ferret suíço",
        story:
          "Pastagens perfeitas, sinos de vaca ao longe e chalés de madeira escura — o trecho mais bucólico e silencioso da volta.",
      },
      {
        title: "Refúgios de montanha",
        story:
          "Jantar comunitário, mapas na parede, o cansaço bom nas pernas e o nascer do sol batendo nas geleiras direto da janela do dormitório.",
      },
    ],
    beyondUsual: [
      {
        title: "Versão em hotéis com bagagem transportada",
        story:
          "Caminhar apenas com mochila de ataque e encontrar as malas já no hotel da etapa seguinte, com jantares reservados.",
      },
      {
        title: "Trechos selecionados em cinco dias",
        story:
          "As etapas mais bonitas do circuito, ligadas por transfers e teleféricos, para quem tem menos tempo ou quer ritmo mais leve.",
      },
      {
        title: "Extensão a Zermatt e ao Matterhorn",
        story:
          "Trem panorâmico Glacier Express ligando os Alpes franceses ao ícone suíço, com caminhadas curtas em altitude.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para fazer o Tour du Mont Blanc?", a: "De julho a setembro, quando os refúgios operam e os colos estão livres de neve. Fim de junho traz flores alpinas; setembro oferece menos gente, ar limpo e primeiras cores de outono." },
      { q: "Quantos dias leva o Tour du Mont Blanc?", a: "O circuito completo leva de 10 a 12 dias de caminhada. Versões reduzidas de 5 a 7 dias cobrem os trechos mais cênicos, com transfers e teleféricos entre as etapas." },
      { q: "É preciso experiência de trekking?", a: "É preciso condicionamento para caminhar de 5 a 7 horas por dia com desníveis de 800 a 1.200 metros, mas não há trechos técnicos. Ajustamos etapas e transfers ao ritmo de cada viajante." },
      { q: "Dá para dormir em hotéis em vez de refúgios?", a: "Sim. Há uma versão em hotéis e chalés de charme, com bagagem transportada entre as etapas e jantares reservados — mais conforto, mesma paisagem." },
      { q: "Dá para conhecer o Mont Blanc sem caminhar muito?", a: "Sim. Chamonix, Courmayeur e Zermatt permitem teleféricos, trens panorâmicos e caminhadas curtas em altitude, com hospedagem de alto padrão e gastronomia alpina." },
      { q: "Como montar meu roteiro nos Alpes?", a: "Clique em Criar roteiro sob medida — desenhamos o circuito completo, trechos selecionados ou a versão panorâmica, com guia de montanha." },
    ],
  },
];
