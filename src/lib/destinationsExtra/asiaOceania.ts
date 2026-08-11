import { Destination } from "../types";

/**
 * Ásia & Oceania — curadoria Create Travel.
 * Filipinas, Mongólia, Nepal, Sri Lanka e Fiji: destinos remotos e autorais
 * para quem busca experiências raras, sensoriais e verificáveis.
 */
export const asiaOceaniaExtraDestinations: Destination[] = [
  {
    id: "asia-filipinas",
    continent: "Ásia",
    country: "Filipinas",
    region: "Palawan e Cebu",
    slug: "asia/filipinas",
    name: "Filipinas — Palawan e Cebu",
    bestTime:
      "Nov–Mai (estação seca, mares calmos). Dezembro a março reúne o melhor equilíbrio entre visibilidade de mergulho e ventos amenos.",
    tags: ["praia", "mergulho", "navegacao", "lua-de-mel", "fotografia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of limestone karst islands rising from turquoise lagoon water in Palawan at golden hour, traditional bangka boat anchored in foreground, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Palawan é o arquipélago que parece desenhado a régua e emoção: calcário vertical mergulhando em lagoas de um azul quase artificial. Cebu completa a viagem com o encontro raro entre tubarões-baleia, mar aberto e ilhas de areia branca ainda pouco descobertas pelo turismo de massa. A curadoria Create Travel evita as excursões em grupo e desenha travessias privativas entre El Nido e Coron.",
    highlights: [
      {
        title: "Lagoas escondidas de El Nido",
        story:
          "Um barco privativo desliza entre paredões de calcário até uma fenda estreita que se abre para uma lagoa fechada, água parada e transparente até o fundo. O silêncio ali é quase físico, quebrado apenas pelo remo.",
      },
      {
        title: "Naufrágios de Coron",
        story:
          "Navios japoneses da Segunda Guerra repousam a poucos metros da superfície, hoje recobertos de coral macio e cardumes que atravessam os corredores metálicos como se fossem seus donos originais.",
      },
      {
        title: "Ilhas privativas para o dia",
        story:
          "Uma faixa de areia que desaparece na maré alta, sombra de coqueiro, e o almoço servido sob um toldo montado só para você. Nenhum outro barco no horizonte.",
      },
      {
        title: "Nado com tubarões-baleia em Oslob",
        story:
          "Ao amanhecer, antes das lanchas de turismo, deslizar na água e ver a sombra gigante e pacífica passar ao lado é medir, em segundos, o tamanho verdadeiro do oceano.",
      },
      {
        title: "Ilhas de Bantayan e Malapascua",
        story:
          "Areia fina como talco, redes de pescadores secando ao sol e pousadas que ainda cabem nos dedos de uma mão — o litoral filipino antes de virar destino.",
      },
    ],
    beyondUsual: [
      {
        title: "Cruzeiro de veleiro entre El Nido e Coron",
        story:
          "Três a cinco dias navegando e dormindo em ilhas desertas, com tripulação própria, longe das rotas de day-tour em grupo.",
      },
      {
        title: "Mergulho técnico nos naufrágios de Coron",
        story:
          "Instrutores particulares certificados conduzem imersões nos destroços mais profundos, fora do circuito de iniciantes.",
      },
      {
        title: "Vila de pescadores em Culion",
        story:
          "Uma antiga colônia de hanseníase transformada em comunidade viva, com história pouco contada e recepção genuína.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar Palawan e Cebu?", a: "De novembro a maio, na estação seca. Dezembro a março oferece a melhor visibilidade para mergulho e mares mais calmos para as travessias entre ilhas." },
      { q: "Quantos dias são necessários para conhecer Palawan?", a: "Recomendamos de 6 a 9 noites: 4 a 5 em El Nido e Coron, mais 2 a 3 em Cebu para o encontro com os tubarões-baleia e as ilhas de Bantayan ou Malapascua." },
      { q: "Brasileiro precisa de visto para as Filipinas?", a: "Não, para estadias turísticas de até 30 dias o brasileiro está isento de visto, apenas com passaporte válido. Orientamos a documentação completa antes da viagem." },
      { q: "É seguro nadar com tubarões-baleia em Oslob?", a: "Sim, com operadores licenciados e horário reservado antes da chegada das excursões em grupo. A curadoria Create Travel prioriza saídas privativas ao amanhecer, respeitando protocolos de conservação." },
      { q: "Vale combinar Filipinas com outro destino da Ásia?", a: "Sim. Uma extensão comum é Bali ou Cingapura, com voos regionais diretos, formando um roteiro de duas a três semanas pela Ásia insular." },
      { q: "Como criar meu roteiro pelas Filipinas?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a travessia do zero, incluindo os barcos privativos." },
    ],
  },
  {
    id: "asia-mongolia",
    continent: "Ásia",
    country: "Mongólia",
    region: "Deserto de Gobi e Vale do Orkhon",
    slug: "asia/mongolia",
    name: "Mongólia — Gobi e Vale do Orkhon",
    bestTime:
      "Jun–Set (verão curto, estepes verdes e acesso às regiões remotas). Julho traz o Festival Naadam, o mais importante do calendário mongol.",
    tags: ["deserto", "cavalgadas", "expedicao", "cultura", "aurora", "remoto"],
    imageAiPrompt:
      "Ultra realistic editorial photo of vast Gobi desert dunes at dusk with a traditional ger tent silhouetted against the sky, warm cinematic light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Mongólia é o último grande vazio do mapa asiático: estepes que se estendem sem cerca até o horizonte, dunas que cantam ao vento e famílias nômades que ainda vivem como há mil anos. A curadoria Create Travel monta expedições privativas com veículos 4x4, guias locais e noites em gers, longe de qualquer roteiro de massa — porque aqui a distância é a própria experiência.",
    highlights: [
      {
        title: "Dunas cantantes de Khongoryn Els",
        story:
          "Paredes de areia de até 300 metros de altura emitem um som grave quando o vento desliza pela crista — os mongóis chamam de canto das dunas. Subir até o topo ao entardecer é ver o Gobi inteiro se acender em laranja.",
      },
      {
        title: "Vale do Orkhon e o antigo império",
        story:
          "Pastagens intermináveis pontilhadas de gers brancos marcam a região onde Genghis Khan ergueu sua capital. O silêncio do vale contrasta com a dimensão histórica de tudo o que ali começou.",
      },
      {
        title: "Noites com famílias nômades",
        story:
          "Dormir em um ger de feltro, aquecido por fogão a lenha, e acordar com o som dos cavalos pastando. O leite fermentado servido pela manhã é o mesmo há gerações.",
      },
      {
        title: "Cavalgadas nas estepes centrais",
        story:
          "Cavalos mongóis pequenos e resistentes, criados soltos desde sempre, levam o cavaleiro por quilômetros sem cerca à vista — a sensação exata de liberdade que a paisagem promete.",
      },
      {
        title: "Céu noturno sem poluição luminosa",
        story:
          "Longe de qualquer cidade, a Via Láctea aparece inteira, densa, quase tridimensional. Uma das poucas experiências de céu que o mundo moderno já não oferece com essa nitidez.",
      },
    ],
    beyondUsual: [
      {
        title: "Festival Naadam em vila remota",
        story:
          "Em vez da versão turística em Ulaanbaatar, assistir às competições de luta, arco e corrida de cavalos numa celebração local, entre famílias, sem plateia estrangeira.",
      },
      {
        title: "Águias-caçadoras no oeste do país",
        story:
          "Encontro com caçadores cazaques que treinam águias-douradas havia gerações, uma tradição hoje protegida e cada vez mais rara.",
      },
      {
        title: "Travessia 4x4 fora de estrada",
        story:
          "Dias inteiros sem sinal de telefone, guiados por rastreadores locais que leem o terreno como um mapa vivo.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar a Mongólia?", a: "De junho a setembro, quando as temperaturas permitem acampar e as estradas de terra ficam acessíveis. Julho reúne o Festival Naadam, o evento cultural mais relevante do país." },
      { q: "Quantos dias são necessários para o Gobi e o Vale do Orkhon?", a: "Recomendamos de 10 a 14 dias para cobrir as duas regiões com conforto, já que as distâncias internas são grandes e os trajetos, feitos por terra." },
      { q: "Brasileiro precisa de visto para a Mongólia?", a: "Não, para estadias de até 30 dias o brasileiro está isento de visto, com passaporte válido. Orientamos toda a documentação necessária." },
      { q: "Como é a hospedagem durante a expedição?", a: "Em gers tradicionais — tendas de feltro aquecidas — tanto em acampamentos fixos de padrão superior quanto em famílias nômades selecionadas pela curadoria." },
      { q: "A Mongólia é indicada para viajantes sem experiência em expedição?", a: "Sim, desde que o roteiro seja bem dosado. Ajustamos o ritmo de deslocamento e o nível de conforto conforme a experiência prévia do viajante." },
      { q: "Como criar meu roteiro pela Mongólia?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a expedição do zero, da capital ao deserto." },
    ],
  },
  {
    id: "asia-nepal",
    continent: "Ásia",
    country: "Nepal",
    region: "Kathmandu e Himalaia",
    slug: "asia/nepal",
    name: "Nepal — Kathmandu e Himalaia",
    bestTime:
      "Mar–Mai e Set–Nov (céus limpos, temperaturas de trekking ideais). Outubro coincide com o festival Dashain, o mais importante do calendário nepalês.",
    tags: ["trekking", "montanha", "cultura", "expedicao", "fotografia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photo of Annapurna Himalayan peaks at sunrise seen from a trekking trail, prayer flags fluttering in foreground, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Nepal concentra, num único país, o teto do mundo e templos milenares que se erguem lado a lado com o cotidiano de Kathmandu. A curadoria Create Travel desenha travessias privativas pelo Annapurna e pelo vale sagrado da capital, com guias e portadores dedicados — o mesmo Himalaia que inspirou gerações de alpinistas, vivido no ritmo de quem quer sentir a altitude sem abrir mão do conforto possível.",
    highlights: [
      {
        title: "Amanhecer no Circuito do Annapurna",
        story:
          "A luz baixa incendeia os picos de mais de 7 mil metros enquanto o vale ainda dorme na sombra. Um instante que justifica sozinho os dias de subida.",
      },
      {
        title: "Templos e pátios de Kathmandu",
        story:
          "No coração da cidade antiga, incensos, sinos de templo e uma arquitetura em madeira entalhada que sobrevive a terremotos e séculos — a fé nepalesa é paisagem urbana.",
      },
      {
        title: "Vilarejos gurung e sherpa ao longo da trilha",
        story:
          "Casas de pedra com bandeiras de oração tremulando, chá quente servido por quem já cruzou a mesma trilha centenas de vezes. A hospitalidade de montanha em sua forma mais simples.",
      },
      {
        title: "Voo panorâmico sobre o Everest",
        story:
          "Sem a exigência física da escalada, um voo de hélice a baixa altitude revela o Everest, o Lhotse e o Ama Dablam em sequência — o Himalaia inteiro por uma janela.",
      },
      {
        title: "Pokhara e o lago Phewa",
        story:
          "As montanhas se refletem inteiras na água parada ao amanhecer, e a cidade que serve de porta de entrada ao Annapurna vira, por um dia, puro descanso.",
      },
    ],
    beyondUsual: [
      {
        title: "Retiro de meditação com monge budista",
        story:
          "Sessões privativas num mosteiro do vale de Kathmandu, guiadas por um monge que também recebe alpinistas antes das grandes expedições.",
      },
      {
        title: "Trekking com portadores e cozinheiro dedicados",
        story:
          "Uma versão mais confortável da trilha clássica, com tendas e refeições preparadas na hora, sem abrir mão da experiência de caminhar em altitude.",
      },
      {
        title: "Festival Dashain em vila local",
        story:
          "Participar das celebrações familiares do maior festival hindu do Nepal, com bênçãos, pipas no céu e refeições compartilhadas.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para trekking no Nepal?", a: "Março a maio e setembro a novembro, quando os céus ficam limpos e as temperaturas em altitude são mais estáveis para caminhar." },
      { q: "Preciso de experiência prévia para o Annapurna?", a: "Não necessariamente. Existem trechos moderados de 4 a 6 dias adequados a caminhantes com boa condição física, e versões mais longas para quem busca desafio maior." },
      { q: "Brasileiro precisa de visto para o Nepal?", a: "Sim, o visto pode ser obtido na chegada ao aeroporto de Kathmandu mediante pagamento em dólares e passaporte válido. Orientamos todo o processo antes do embarque." },
      { q: "Quantos dias são necessários para Kathmandu e o Himalaia?", a: "Recomendamos de 10 a 14 dias, somando o vale de Kathmandu, o trekking selecionado e Pokhara como base de descanso." },
      { q: "É possível ver o Everest sem fazer trekking até o acampamento-base?", a: "Sim, o voo panorâmico de hélice sobre a cordilheira mostra o Everest e picos vizinhos em cerca de uma hora, sem exigência física." },
      { q: "Como criar meu roteiro pelo Nepal?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a travessia do zero, da capital à cordilheira." },
    ],
  },
  {
    id: "asia-sri-lanka",
    continent: "Ásia",
    country: "Sri Lanka",
    region: "Triângulo Cultural, Yala e Colinas de Chá",
    slug: "asia/sri-lanka",
    name: "Sri Lanka — Triângulo Cultural, Yala e Colinas de Chá",
    bestTime:
      "Dez–Mar para o litoral e o sul (costa seca); Mai–Set para o norte e o leste. O Triângulo Cultural pode ser visitado o ano todo.",
    tags: ["cultura", "safari", "montanha", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photo of misty Sri Lankan tea plantation hills at sunrise with a lone tea picker's path winding through rows, soft cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "O Sri Lanka concentra, numa ilha do tamanho de um estado brasileiro, palácios erguidos no topo de rochedos, leopardos que caçam livres em Yala e colinas de chá onde a neblina nunca se dissipa de todo. A curadoria Create Travel conecta essas três camadas — história, vida selvagem e altitude — num roteiro privativo que atravessa a ilha sem pressa.",
    highlights: [
      {
        title: "Rochedo de Sigiriya ao amanhecer",
        story:
          "Subir os degraus esculpidos na rocha antes das excursões chegarem, e encontrar no topo as ruínas de um palácio real erguido há mais de 1.500 anos, com a selva se espalhando em todas as direções.",
      },
      {
        title: "Safári em Yala com leopardos",
        story:
          "A maior densidade de leopardos do mundo vive aqui. Num jipe privativo ao amanhecer, o silêncio da savana é quebrado apenas pelo estalo de galhos — sinal de que algo se move perto.",
      },
      {
        title: "Colinas de chá em Ella e Nuwara Eliya",
        story:
          "Plantações em curvas de nível cobrindo montanhas inteiras, colhedoras com cestos às costas e o trem de montanha cruzando viadutos suspensos sobre o verde — uma paisagem que parece pintada.",
      },
      {
        title: "Templo da Relíquia do Dente, em Kandy",
        story:
          "Ao som de tambores e trombetas cerimoniais, os fiéis se reúnem ao entardecer diante da relíquia mais sagrada do budismo cingalês, num ritual que se repete há séculos.",
      },
      {
        title: "Cozinha cingalesa em mesa privativa",
        story:
          "Curries de folhas de curry fresca, leite de coco batido na hora e pratos de arroz coloridos por especiarias que crescem no próprio quintal — o Sri Lanka se conta pela mesa.",
      },
    ],
    beyondUsual: [
      {
        title: "Fábrica de chá com degustação guiada",
        story:
          "Visita a uma plantação histórica ainda em atividade, com prova de colheitas exclusivas conduzida por um provador profissional.",
      },
      {
        title: "Amanhecer no Pico de Adão",
        story:
          "Subida noturna a um dos picos mais sagrados da ilha para ver o sol nascer projetando a sombra triangular da montanha sobre as nuvens.",
      },
      {
        title: "Vilarejos de pescadores no sul",
        story:
          "Encontro com pescadores que ainda utilizam as tradicionais varas altas fincadas no mar, uma técnica quase extinta e pouco vista fora das rotas comerciais.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar o Sri Lanka?", a: "De dezembro a março para o litoral sul e oeste; de maio a setembro para o norte e leste. O Triângulo Cultural, no centro da ilha, tem clima estável durante o ano todo." },
      { q: "Quantos dias são necessários para conhecer o Sri Lanka?", a: "Recomendamos de 10 a 12 noites para cobrir o Triângulo Cultural, o safári em Yala, as colinas de chá e uma extensão de praia no sul." },
      { q: "Brasileiro precisa de visto para o Sri Lanka?", a: "Sim, é necessária a autorização eletrônica ETA, solicitada online antes da viagem. Orientamos todo o processo de emissão." },
      { q: "É seguro fazer safári em Yala?", a: "Sim, com jipes e guias licenciados. A curadoria Create Travel prioriza saídas privativas em horários de menor movimento, com maior chance de avistamento e mais conforto." },
      { q: "Vale combinar Sri Lanka com Índia ou Maldivas?", a: "Sim, ambas são conexões naturais com voos curtos — Maldivas para uma extensão de praia, Índia para aprofundar a imersão cultural na região." },
      { q: "Como criar meu roteiro pelo Sri Lanka?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a travessia do zero, das rochas antigas às colinas de chá." },
    ],
  },
  {
    id: "oceania-fiji",
    continent: "Oceania",
    country: "Fiji",
    region: "Ilhas Privativas",
    slug: "oceania/fiji",
    name: "Fiji — Ilhas Privativas",
    bestTime:
      "Mai–Out (estação seca, menor umidade e mares mais calmos para travessias entre ilhas). Junho a setembro tem o clima mais estável do ano.",
    tags: ["praia", "lua-de-mel", "mergulho", "navegacao", "bem-estar", "remoto"],
    imageAiPrompt:
      "Ultra realistic editorial photo of an overwater bungalow on a private Fijian island lagoon at sunset, calm turquoise water, palm trees silhouetted, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Fiji é o arquipélago onde o conceito de ilha privativa nasceu em sua forma mais genuína: mais de 330 ilhas espalhadas pelo Pacífico Sul, muitas delas ocupadas por um único resort, ou por nenhum. A curadoria Create Travel seleciona refúgios acessíveis apenas por hidroavião ou lancha própria, onde o luxo é medido em silêncio, recife de coral intacto e a hospitalidade fijiana, conhecida por ser uma das mais calorosas do mundo.",
    highlights: [
      {
        title: "Ilhas de acesso exclusivo por hidroavião",
        story:
          "O voo baixo sobre recifes em formato de anel já é parte da experiência — águas em degradês de azul que mudam de tom a cada minuto, até o pouso suave junto ao píer do resort.",
      },
      {
        title: "Mergulho no Grande Recife de Astrolabe",
        story:
          "Corais moles em cores raramente vistas em outros pontos do Pacífico, paredes submersas e uma visibilidade que, em dias bons, ultrapassa 30 metros.",
      },
      {
        title: "Kava com uma comunidade local",
        story:
          "A cerimônia tradicional da bebida ritual fijiana, compartilhada em círculo ao som de cantos, é o convite mais autêntico para entender o valor que os fijianos dão à hospitalidade.",
      },
      {
        title: "Bangalôs sobre a água em lagoas privadas",
        story:
          "Acordar com o mar batendo suavemente sob o próprio quarto, sem outro hóspede à vista — a intimidade que só um arquipélago com ilhas de um único resort consegue oferecer.",
      },
      {
        title: "Pôr do sol a bordo de veleiro privativo",
        story:
          "Navegar entre ilhotas desertas enquanto o céu muda de laranja para violeta, com uma taça na mão e o motor desligado — o silêncio do Pacífico Sul em sua forma mais pura.",
      },
    ],
    beyondUsual: [
      {
        title: "Piquenique em ilhote deserto",
        story:
          "Uma faixa de areia sem nome no mapa, montada por horas apenas para o casal ou a família, com tudo desmontado antes do anoitecer.",
      },
      {
        title: "Pesca tradicional com pescadores fijianos",
        story:
          "Saída de canoa com técnicas ancestrais de pesca em recife, seguida de preparo do peixe na hora, em fogueira na praia.",
      },
      {
        title: "Spa com terapias à base de coco e ervas locais",
        story:
          "Tratamentos conduzidos por terapeutas fijianas em cabanas abertas para o mar, usando óleos extraídos de plantas cultivadas na própria ilha.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar Fiji?", a: "De maio a outubro, na estação seca, com mares mais calmos para as travessias de barco ou hidroavião entre as ilhas." },
      { q: "Fiji é indicado para lua de mel?", a: "Sim, é um dos destinos mais procurados do Pacífico Sul para esse propósito, com ilhas privativas de acesso exclusivo e bangalôs sobre a água voltados a casais." },
      { q: "Brasileiro precisa de visto para Fiji?", a: "Não, para estadias de até 4 meses o brasileiro está isento de visto, com passaporte válido e passagem de saída. Orientamos a documentação de apoio." },
      { q: "Quantos dias são necessários para Fiji?", a: "Recomendamos entre 6 e 9 noites, considerando o tempo de voo até o arquipélago e a possibilidade de combinar duas ilhas diferentes." },
      { q: "Vale combinar Fiji com outro destino da Oceania?", a: "Sim, é comum somar Fiji a uma passagem pela Austrália ou Nova Zelândia, aproveitando as conexões aéreas regionais." },
      { q: "Como criar meu roteiro por Fiji?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero, incluindo a ilha privativa ideal." },
    ],
  },
];
