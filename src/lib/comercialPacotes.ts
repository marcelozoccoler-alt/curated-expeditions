// Landing pages comerciais de alta intenção — padrão /pacote/:slug
// Otimizadas para keywords de busca "pacote de viagem para X" identificadas
// via Semrush (concorrente Venturas Viagens, principal player desse formato no BR).

import type { FAQ } from "./types";

export interface PacoteRoteiroDia {
  dias: string;        // "Dia 1-2", "Dia 3"
  titulo: string;
  highlights: string[];
}

export interface Pacote {
  slug: string;
  destinationName: string;     // "Chapada dos Veadeiros"
  title: string;               // <title>
  h1: string;
  metaDescription: string;
  keywords: string;
  intro: string;
  porqueCreate: string[];      // bullets "Por que escolher Create Travel"
  duracoes: string[];          // ["5 dias", "7 dias", "10 dias"]
  melhorEpoca: string;
  roteiro: PacoteRoteiroDia[];
  hospedagens: { nome: string; descricao: string }[];
  faq: FAQ[];
  imageAiPrompt: string;
  imageOverrideUrl?: string;
  precoEstimado: string;       // ex.: "a partir de R$ 9.800 por pessoa"
  whatsappName: string;
}

export const pacotes: Pacote[] = [
  {
    slug: "chapada-dos-veadeiros",
    destinationName: "Chapada dos Veadeiros",
    title: "Pacote de viagem para Chapada dos Veadeiros — Roteiro autoral",
    h1: "Pacote de viagem para Chapada dos Veadeiros",
    metaDescription:
      "Roteiro autoral Create Travel para a Chapada dos Veadeiros: cachoeiras, vale da lua, pousadas selecionadas e guias locais. 5 a 8 dias.",
    keywords: "pacote chapada dos veadeiros, viagem chapada dos veadeiros, roteiro chapada dos veadeiros",
    intro:
      "A Chapada dos Veadeiros é o coração energético do Brasil. Quartzo sob os pés, cachoeiras de água cristalina, savanas que se estendem até o horizonte e um céu noturno tão limpo que devolve o que a vida nas cidades já tinha apagado. Nosso pacote autoral combina as cachoeiras mais belas, hospedagens de design e guias locais que conhecem cada trilha como o próprio quintal.",
    porqueCreate: [
      "Roteiro privativo com guia exclusivo Create Travel — nada de grupo grande padronizado",
      "Pousadas selecionadas pessoalmente: arquitetura, conforto e localização estratégica",
      "Acesso a cachoeiras menos visitadas, fora do circuito comum",
      "Cuidamos de transfer aéreo Brasília–Alto Paraíso, traslados e ingressos",
      "Suporte 24/7 durante toda a viagem",
    ],
    duracoes: ["5 dias", "7 dias", "8 dias"],
    melhorEpoca:
      "Maio a setembro (estação seca): trilhas firmes, céu limpo, cachoeiras cristalinas. Junho e julho são os melhores meses. Evite janeiro e fevereiro (chuvas intensas e cachoeiras barrentas).",
    roteiro: [
      {
        dias: "Dia 1",
        titulo: "Chegada a Alto Paraíso",
        highlights: [
          "Voo Brasília + traslado privativo (3h)",
          "Check-in em pousada selecionada (Caminho dos Pireneus ou similar)",
          "Briefing com guia + jantar de boas-vindas",
        ],
      },
      {
        dias: "Dia 2",
        titulo: "Cachoeiras dos Cristais e Almécegas",
        highlights: [
          "Trilha leve até Cachoeira dos Cristais",
          "Almoço em restaurante orgânico local",
          "Tarde nas cachoeiras Almécegas I e II — uma das mais cinematográficas",
        ],
      },
      {
        dias: "Dia 3",
        titulo: "Parque Nacional — Trilha dos Saltos",
        highlights: [
          "Trilha completa (8 km) até os Saltos do Rio Preto",
          "Banho nas piscinas naturais",
          "Pôr do sol no mirante",
        ],
      },
      {
        dias: "Dia 4",
        titulo: "Vale da Lua e Cachoeira Loquinhas",
        highlights: [
          "Formações rochosas esculpidas pelo Rio São Miguel",
          "Cachoeira Loquinhas (acesso restrito, com agendamento)",
          "Jantar especial em São Jorge",
        ],
      },
      {
        dias: "Dia 5",
        titulo: "Observação do céu + retorno",
        highlights: [
          "Tour astronômico com telescópio (noite anterior)",
          "Pequenas compras de quartzo e produtos locais",
          "Traslado para Brasília + voo de retorno",
        ],
      },
    ],
    hospedagens: [
      {
        nome: "Pousada Caminho dos Pireneus",
        descricao: "Bangalôs isolados, vista para a serra, café da manhã artesanal.",
      },
      {
        nome: "Casa Quintal (São Jorge)",
        descricao: "Charme rústico-chique no vilarejo, próxima ao parque.",
      },
      {
        nome: "Boutique opcional: Estalagem do Coração",
        descricao: "Para quem busca silêncio absoluto e atendimento ultra-personalizado.",
      },
    ],
    faq: [
      {
        q: "Preciso ter preparo físico?",
        a: "Para as cachoeiras mais acessíveis, não. Para a Trilha dos Saltos (8 km, com subidas), sim — preparo médio. Adaptamos roteiro ao perfil.",
      },
      {
        q: "É seguro?",
        a: "Sim. Chapada dos Veadeiros é destino turístico maduro, com guias credenciados e infraestrutura de pousadas crescente.",
      },
      {
        q: "Quanto custa o pacote?",
        a: "A partir de R$ 6.500 por pessoa (5 dias, em dupla), sem aéreo. Solicite proposta detalhada via WhatsApp.",
      },
    ],
    imageAiPrompt:
      "Cachoeira Almecegas Chapada dos Veadeiros Brazil, dramatic waterfall cascading into emerald natural pool surrounded by cerrado vegetation, golden afternoon light, painterly editorial, no people, ultra detailed",
    precoEstimado: "a partir de R$ 6.500 por pessoa",
    whatsappName: "Pacote Chapada dos Veadeiros",
  },
  {
    slug: "amazonia",
    destinationName: "Amazônia",
    title: "Pacote de viagem para Amazônia — Expedição autoral Create Travel",
    h1: "Pacote de viagem para a Amazônia",
    metaDescription:
      "Expedição privativa pela Amazônia brasileira: lodges flutuantes, encontro com botos, comunidades ribeirinhas e fauna intocada. 5 a 9 dias.",
    keywords: "pacote amazonia, viagem amazonia, roteiro amazonia, viagem na amazonia",
    intro:
      "A Amazônia não se conta — se sente. O som da floresta ao amanhecer, o silêncio rachado pelo grito de uma arara-vermelha, o jantar à luz de lampião em um lodge sobre estacas, o boto cor-de-rosa que surge do nada ao lado da canoa. Nossa expedição leva você ao coração da maior floresta tropical do planeta com a infraestrutura e o cuidado de uma viagem premium.",
    porqueCreate: [
      "Lodges parceiros selecionados (Anavilhanas, Mirante do Gavião, Cristalino) — todos com prática de conservação",
      "Guias naturalistas com formação acadêmica, falando português e inglês",
      "Encontros éticos com comunidades ribeirinhas (com retorno econômico direto)",
      "Logística completa: voo internacional + voo doméstico + voadeira + transfer",
      "Operação sustentável: zero plástico descartável, compensação de carbono incluída",
    ],
    duracoes: ["5 dias", "7 dias", "9 dias"],
    melhorEpoca:
      "Cheia (março a junho): floresta alagada navegável de canoa, paisagens irreais. Seca (setembro a novembro): praias de rio, melhor observação de fauna em terra firme. Ambas as épocas são incríveis — escolha pela experiência desejada.",
    roteiro: [
      {
        dias: "Dia 1",
        titulo: "Chegada a Manaus",
        highlights: [
          "Voo Manaus + transfer ao hotel",
          "Visita ao Mercado Municipal Adolpho Lisboa e Teatro Amazonas",
          "Jantar em restaurante autoral de cozinha amazônica",
        ],
      },
      {
        dias: "Dia 2",
        titulo: "Encontro das Águas + lodge na floresta",
        highlights: [
          "Travessia do encontro entre Rio Negro e Rio Solimões",
          "Voadeira até o lodge (Anavilhanas Jungle Lodge ou Mirante do Gavião)",
          "Trilha noturna com guia para observação de alligators e fauna noturna",
        ],
      },
      {
        dias: "Dia 3",
        titulo: "Botos cor-de-rosa e comunidade ribeirinha",
        highlights: [
          "Manhã de canoagem em silêncio para observação de fauna",
          "Almoço com família ribeirinha (com retorno econômico direto)",
          "Banho com botos cor-de-rosa em ponto autorizado",
        ],
      },
      {
        dias: "Dia 4",
        titulo: "Trilha de selva e pesca de piranha",
        highlights: [
          "Trilha de meio dia com guia indígena (identificação de plantas medicinais)",
          "Pesca tradicional de piranha (catch & release)",
          "Pôr do sol em canoa silenciosa",
        ],
      },
      {
        dias: "Dia 5",
        titulo: "Retorno",
        highlights: [
          "Voadeira de volta + transfer ao aeroporto de Manaus",
          "Voo de retorno",
        ],
      },
    ],
    hospedagens: [
      {
        nome: "Anavilhanas Jungle Lodge",
        descricao: "Arquipélago fluvial Patrimônio Mundial. Bangalôs sobre estacas, vista para o Rio Negro.",
      },
      {
        nome: "Mirante do Gavião",
        descricao: "Design contemporâneo amazônico, próximo a Novo Airão. Pequeno, exclusivo.",
      },
      {
        nome: "Cristalino Lodge (extensão Mato Grosso)",
        descricao: "Reserva privada, biodiversidade impressionante, torre de observação na copa.",
      },
    ],
    faq: [
      {
        q: "Quantos dias mínimos?",
        a: "5 dias (4 noites) é o mínimo para experiência verdadeira — menos que isso, perde-se na logística.",
      },
      {
        q: "É seguro?",
        a: "Sim, em operação organizada. Os lodges parceiros têm décadas de operação e zero histórico de incidentes.",
      },
      {
        q: "E malária / dengue?",
        a: "Nas áreas operadas dos lodges, risco baixo. Recomendamos repelente forte, roupas claras de manga longa e consulta médica para profilaxia.",
      },
    ],
    imageAiPrompt:
      "Amazon rainforest river at dawn, mist rising from dark water, dense green canopy reflected, single canoe in distance, painterly editorial cinematic, ultra detailed",
    precoEstimado: "a partir de R$ 8.500 por pessoa",
    whatsappName: "Pacote Amazônia",
  },
  {
    slug: "galapagos",
    destinationName: "Ilhas Galápagos",
    title: "Pacote de viagem para Galápagos — Cruzeiros e ilhas",
    h1: "Pacote de viagem para Galápagos",
    metaDescription:
      "Roteiro autoral Create Travel para Galápagos: cruzeiros premium, navegação entre ilhas, fauna endêmica e mergulho. 7 a 12 dias.",
    keywords: "pacote galapagos, viagem galapagos, galapagos cruzeiro, roteiro galapagos",
    intro:
      "Galápagos é onde Darwin entendeu a evolução. E para quem visita hoje, é onde se entende, num só fôlego, a sorte de habitar um planeta vivo. Iguanas marinhas se aquecendo em rochas negras, tartarugas gigantes de 150 anos pastando devagar, leões-marinhos curiosos que se aproximam para nadar do seu lado. Tudo a poucos metros — porque ali, sem predadores humanos por milênios, os animais nunca aprenderam a temer.",
    porqueCreate: [
      "Cruzeiros de pequena escala selecionados (Origin, Theory, Endemic) — máximo 20 passageiros",
      "Guias naturalistas certificados pelo Parque Nacional",
      "Itinerários nas ilhas mais ricas em endemismo (Fernandina, Española, Genovesa)",
      "Possibilidade de combinar com Quito + Otavalo ou Amazônia equatoriana",
      "Operação alinhada com práticas de conservação rigorosas",
    ],
    duracoes: ["7 dias", "10 dias", "12 dias"],
    melhorEpoca:
      "Janeiro a maio: águas mais quentes (24-27°C), ideal para mergulho. Junho a dezembro: águas mais frias, mais nutrientes, maior atividade animal (incluindo baleias).",
    roteiro: [
      {
        dias: "Dia 1",
        titulo: "Chegada a Quito",
        highlights: [
          "Voo Quito + hotel boutique no centro histórico",
          "Tour pelo centro histórico (Patrimônio Mundial UNESCO)",
        ],
      },
      {
        dias: "Dia 2",
        titulo: "Voo a Galápagos + embarque",
        highlights: [
          "Voo Quito–Baltra (2h30)",
          "Recepção no aeroporto + traslado ao porto",
          "Embarque em catamarã ou iate (Origin, Theory ou Endemic)",
          "Briefing de segurança + primeira saída em panga",
        ],
      },
      {
        dias: "Dias 3-6",
        titulo: "Navegação entre ilhas",
        highlights: [
          "Fernandina (iguanas marinhas, pinguins de Galápagos)",
          "Isabela (tartarugas gigantes, vulcões)",
          "Española (albatrozes de Galápagos, blue-footed boobies)",
          "Genovesa (paraíso de aves marinhas)",
          "Snorkel diário com leões-marinhos, tartarugas e tubarões inofensivos",
        ],
      },
      {
        dias: "Dia 7",
        titulo: "Desembarque + retorno",
        highlights: [
          "Desembarque em Baltra",
          "Voo de retorno a Quito",
          "Conexão para o Brasil",
        ],
      },
    ],
    hospedagens: [
      {
        nome: "M/V Origin (Ecoventura)",
        descricao: "Iate-luxo para 20 passageiros, suítes amplas, equipe naturalista premiada.",
      },
      {
        nome: "M/Y Theory",
        descricao: "Embarcação contemporânea, foco em fotografia e ciência cidadã.",
      },
      {
        nome: "Endemic (catamarã)",
        descricao: "Estabilidade superior, ótimo para quem tem sensibilidade a mar agitado.",
      },
    ],
    faq: [
      {
        q: "Cruzeiro ou base em terra?",
        a: "Cruzeiro acessa muito mais ilhas e fauna. Base em terra (Santa Cruz, San Cristóbal) é alternativa para quem tem restrição financeira ou enjoa em barco.",
      },
      {
        q: "Quanto custa?",
        a: "A partir de R$ 28.000 por pessoa (7 dias, com cruzeiro premium), sem aéreo internacional.",
      },
    ],
    imageAiPrompt:
      "Galapagos Islands wildlife scene, marine iguana sunbathing on black volcanic rocks with crystal turquoise ocean behind, blue-footed boobies in distance, cinematic editorial, no people, ultra detailed",
    precoEstimado: "a partir de R$ 28.000 por pessoa",
    whatsappName: "Pacote Galápagos",
  },
  {
    slug: "chapada-das-mesas",
    destinationName: "Chapada das Mesas",
    title: "Pacote de viagem para Chapada das Mesas — Roteiro autoral",
    h1: "Pacote de viagem para Chapada das Mesas",
    metaDescription:
      "Chapada das Mesas com curadoria Create Travel: cachoeiras de água azul, mesas geológicas e pôr do sol no Portal da Chapada. 5 a 7 dias.",
    keywords: "pacote chapada das mesas, viagem chapada das mesas, roteiro chapada das mesas",
    intro:
      "Menos conhecida que suas primas dos Veadeiros e da Diamantina, a Chapada das Mesas (sul do Maranhão) é, para muitos, o destino mais cinematográfico do cerrado brasileiro. Mesas geológicas imponentes, cachoeiras de água azul-piscina, e o pôr do sol no Portal da Chapada que enche os olhos.",
    porqueCreate: [
      "Pousadas selecionadas em Carolina, MA — base ideal",
      "Guias locais credenciados, conhecedores das melhores horas para cada cachoeira",
      "Roteiro privativo com veículo 4x4 (essencial para várias trilhas)",
      "Combinação possível com Jalapão (TO) em viagem estendida",
    ],
    duracoes: ["5 dias", "7 dias"],
    melhorEpoca: "Maio a setembro (seca). Junho a agosto é o pico de qualidade.",
    roteiro: [
      {
        dias: "Dia 1",
        titulo: "Chegada a Carolina (MA)",
        highlights: [
          "Voo Imperatriz + transfer privativo (1h30) a Carolina",
          "Check-in em pousada selecionada",
        ],
      },
      {
        dias: "Dia 2",
        titulo: "Cachoeira do Itapecuru e Encanto Azul",
        highlights: [
          "Cachoeira do Itapecuru (ícone, com queda larga)",
          "Encanto Azul — poço de água surreal",
        ],
      },
      {
        dias: "Dia 3",
        titulo: "Portal da Chapada e Pedra Caída",
        highlights: [
          "Trilha pelo complexo Pedra Caída (3 cachoeiras)",
          "Pôr do sol no Portal da Chapada — formação rochosa icônica",
        ],
      },
      {
        dias: "Dia 4",
        titulo: "Poço Azul e Capelão",
        highlights: [
          "Mergulho de máscara no Poço Azul (visibilidade impressionante)",
          "Cachoeira do Capelão",
        ],
      },
      {
        dias: "Dia 5",
        titulo: "Retorno",
        highlights: ["Transfer para Imperatriz + voo de retorno"],
      },
    ],
    hospedagens: [
      {
        nome: "Pousada do Lajeado",
        descricao: "Charme rústico, atendimento atencioso, café da manhã farto.",
      },
      {
        nome: "Pousada Encanto da Chapada",
        descricao: "Boa estrutura, próxima ao centro de Carolina.",
      },
    ],
    faq: [
      {
        q: "Vale a pena combinar com Jalapão?",
        a: "Sim, se houver 10+ dias. Travessia 4x4 de 1 dia entre Carolina e Mateiros. Roteiros combinados são clássicos.",
      },
    ],
    relatedDestinations: [],
    imageAiPrompt:
      "Chapada das Mesas Brazil, dramatic flat-topped mesa rock formation at sunset glowing orange, vast cerrado plains, cinematic editorial painterly, no people, ultra detailed",
    precoEstimado: "a partir de R$ 5.800 por pessoa",
    whatsappName: "Pacote Chapada das Mesas",
  } as Pacote,
  {
    slug: "alter-do-chao",
    destinationName: "Alter do Chão",
    title: "Pacote de viagem para Alter do Chão — Caribe Amazônico",
    h1: "Pacote de viagem para Alter do Chão",
    metaDescription:
      "Alter do Chão com Create Travel: Ilha do Amor, Lago Verde, comunidades ribeirinhas e Floresta Nacional do Tapajós. 5 a 7 dias.",
    keywords: "pacote alter do chao, viagem alter do chao, roteiro alter do chao",
    intro:
      "Alter do Chão é o que o Brasil tem de mais singular: praia de água doce, no meio da Amazônia, com areia branca e horizonte sem fim. A Ilha do Amor, banco de areia que emerge entre maio e janeiro, virou ícone — mas o que verdadeiramente impressiona é tudo o que vem antes e depois dela: a Floresta Nacional do Tapajós, as comunidades ribeirinhas, o pôr do sol cor de mel.",
    porqueCreate: [
      "Pousadas-boutique selecionadas em Alter (Mirante do Lago, Casa Saulé)",
      "Guias locais que conhecem cada comunidade e cada ponto do Tapajós",
      "Acesso à Floresta Nacional do Tapajós com comunidade Maguari",
      "Logística completa: voo Santarém + transfer + voadeiras privativas",
    ],
    duracoes: ["5 dias", "7 dias"],
    melhorEpoca:
      "Agosto a janeiro: Ilha do Amor exposta, praias máximas. Cheia (março a junho): paisagens alagadas, igapós navegáveis. Ambas as épocas têm magia distinta.",
    roteiro: [
      {
        dias: "Dia 1",
        titulo: "Chegada a Santarém + transfer a Alter",
        highlights: [
          "Voo Santarém + transfer (40 min) a Alter do Chão",
          "Check-in em pousada selecionada",
          "Pôr do sol na praia da vila",
        ],
      },
      {
        dias: "Dia 2",
        titulo: "Ilha do Amor + Lago Verde",
        highlights: [
          "Travessia de barco à Ilha do Amor",
          "Almoço em restaurante flutuante",
          "Passeio de canoa pelos igarapés do Lago Verde",
        ],
      },
      {
        dias: "Dia 3",
        titulo: "Floresta Nacional do Tapajós",
        highlights: [
          "Voadeira até a comunidade Maguari",
          "Trilha guiada na floresta com guia indígena",
          "Almoço comunitário, demonstração de farinha de mandioca",
        ],
      },
      {
        dias: "Dia 4",
        titulo: "Lago do Maicá ou Canal do Jari",
        highlights: [
          "Travessia de barco a remo entre arquipélago de ilhas",
          "Observação de fauna aquática",
          "Jantar em restaurante autoral em Alter",
        ],
      },
      {
        dias: "Dia 5",
        titulo: "Retorno",
        highlights: ["Transfer para Santarém + voo de retorno"],
      },
    ],
    hospedagens: [
      {
        nome: "Mirante do Lago",
        descricao: "Bangalôs com vista, melhor café da manhã da vila.",
      },
      {
        nome: "Casa Saulé",
        descricao: "Charme brasileiro contemporâneo, design impecável.",
      },
    ],
    faq: [
      {
        q: "Vale combinar com Manaus?",
        a: "Sim, mas opcional. Alter do Chão é experiência amazônica completa em si — combiná-la com Manaus dobra a viagem.",
      },
    ],
    imageAiPrompt:
      "Alter do Chao Brazil, white sand beach Ilha do Amor on Tapajos river, turquoise water, palm trees, golden afternoon light, painterly editorial, no people, ultra detailed",
    precoEstimado: "a partir de R$ 5.200 por pessoa",
    whatsappName: "Pacote Alter do Chão",
  },
  {
    slug: "patagonia-chilena",
    destinationName: "Patagônia chilena",
    title: "Pacote de viagem para Patagônia chilena — Torres del Paine",
    h1: "Pacote de viagem para Patagônia chilena",
    metaDescription:
      "Torres del Paine, Punta Arenas e fiordes do sul do Chile. Roteiro autoral Create Travel em lodges premium. 7 a 12 dias.",
    keywords: "pacote patagonia chilena, viagem patagonia chilena, torres del paine pacote",
    intro:
      "Torres del Paine é, para muitos viajantes, o parque nacional mais espetacular do planeta. Três torres de granito vermelho-rosado se erguem sobre lagos turquesa e geleiras vivas, com vento que muda a direção a cada hora e luz que muda a cada minuto. Nossa proposta combina caminhadas (não exigentes) com hospedagem de luxo total.",
    porqueCreate: [
      "Lodges premium dentro do parque (Explora Patagonia ou Tierra Patagonia)",
      "Trilhas guiadas adaptadas ao seu ritmo — de leve a desafiadora",
      "Possibilidade de combinar com El Calafate (Argentina) em travessia terrestre",
      "Logística completa: voos Santiago–Punta Arenas, transfer 4h, retorno",
    ],
    duracoes: ["7 dias", "10 dias", "12 dias"],
    melhorEpoca:
      "Novembro a março (verão austral). Janeiro e fevereiro são picos. Outubro e abril têm menos gente e luz fotográfica espetacular.",
    roteiro: [
      {
        dias: "Dia 1",
        titulo: "Chegada a Santiago",
        highlights: ["Voo Santiago + hotel boutique", "Tour pela região vinícola Maipo (opcional)"],
      },
      {
        dias: "Dia 2",
        titulo: "Voo a Punta Arenas + Torres del Paine",
        highlights: [
          "Voo Santiago–Punta Arenas (3h30)",
          "Transfer privativo até o lodge (4h por estradas cênicas)",
          "Check-in e jantar de boas-vindas",
        ],
      },
      {
        dias: "Dias 3-5",
        titulo: "Trilhas guiadas no parque",
        highlights: [
          "Mirante Base das Torres (excursão dia inteiro)",
          "Caminhada Glaciar Grey + navegação",
          "Vale do Francês ou Lago Pehoé (alternativas mais leves)",
        ],
      },
      {
        dias: "Dia 6",
        titulo: "Estancia + observação de fauna",
        highlights: [
          "Cavalgada em estancia tradicional patagônica",
          "Observação de guanacos, condores, possível avistamento de pumas",
        ],
      },
      {
        dias: "Dia 7",
        titulo: "Retorno",
        highlights: ["Transfer Punta Arenas + voo via Santiago"],
      },
    ],
    hospedagens: [
      {
        nome: "Explora Patagonia",
        descricao: "Lodge icônico, all-inclusive (refeições + excursões guiadas + bar).",
      },
      {
        nome: "Tierra Patagonia",
        descricao: "Arquitetura premiada, vista privilegiada para o maciço.",
      },
      {
        nome: "Awasi Patagonia",
        descricao: "Relais & Châteaux, cabanas privadas com guia + 4x4 exclusivos.",
      },
    ],
    faq: [
      {
        q: "Precisa fazer o circuito W?",
        a: "Não. As lodges oferecem programa diário com excursões adaptadas ao seu perfil — você vê tudo de melhor sem acampar.",
      },
      {
        q: "Vale combinar com a Argentina?",
        a: "Sim, é o roteiro mais clássico: Torres del Paine + El Calafate (Perito Moreno) em travessia terrestre de 5h.",
      },
    ],
    imageAiPrompt:
      "Torres del Paine Chile at sunrise, three granite towers glowing pink above turquoise glacial lake Pehoe, dramatic painterly editorial composition, no people, ultra detailed",
    precoEstimado: "a partir de R$ 18.000 por pessoa",
    whatsappName: "Pacote Patagônia chilena",
  },
  {
    slug: "ilhas-maldivas",
    destinationName: "Ilhas Maldivas",
    title: "Pacote de viagem para Ilhas Maldivas — Resorts curados",
    h1: "Pacote de viagem para as Ilhas Maldivas",
    metaDescription:
      "Maldivas com curadoria Create Travel: resorts selecionados, bangalôs sobre a água, mergulho premium e gastronomia. 6 a 10 dias.",
    keywords: "pacote ilhas maldivas, viagem maldivas, roteiro maldivas",
    intro:
      "Maldivas têm uma combinação rara: 26 atóis sobre o Oceano Índico, areia tão fina que parece talco, água em sete tons de azul e uma rede de resorts que reinventou o conceito de luxo descalço. A diferença entre uma viagem ok e uma viagem inesquecível mora inteiramente em qual ilha você escolhe.",
    porqueCreate: [
      "Curadoria das ilhas pelo seu perfil: romântico, família, mergulho, gastronomia",
      "Resorts parceiros (Soneva Jani, Six Senses Laamu, Cheval Blanc Randheli, Anantara Kihavah)",
      "Transfer aéreo (hidroavião ou voo doméstico) negociado e operado",
      "Combinação possível com Sri Lanka ou Singapura para otimizar o longo voo",
    ],
    duracoes: ["6 dias", "8 dias", "10 dias"],
    melhorEpoca:
      "Novembro a abril (estação seca). Dezembro e janeiro são pico. Maio a outubro têm chuvas curtas — preço cai consideravelmente e ainda vale.",
    roteiro: [
      {
        dias: "Dia 1",
        titulo: "Chegada a Malé + transfer ao resort",
        highlights: [
          "Voo Brasil + conexão (geralmente via Dubai, Doha ou Istanbul)",
          "Recepção VIP + transfer (hidroavião cênico ou voo doméstico)",
          "Check-in no overwater villa + jantar",
        ],
      },
      {
        dias: "Dias 2-5",
        titulo: "Imersão no resort + experiências",
        highlights: [
          "Snorkel diário no recife do resort",
          "Mergulho com mantas (sazonal — Hanifaru Bay)",
          "Spa com tratamentos autorais",
          "Jantar em restaurante submarino (no resort selecionado)",
          "Pôr do sol em dhoni tradicional",
        ],
      },
      {
        dias: "Dia 6",
        titulo: "Retorno",
        highlights: ["Transfer ao aeroporto + voo de retorno"],
      },
    ],
    hospedagens: [
      {
        nome: "Soneva Jani",
        descricao: "Villas com piscina, escorregador para a laguna, observatório astronômico.",
      },
      {
        nome: "Six Senses Laamu",
        descricao: "Mais autêntico, foco em sustentabilidade, melhor surf das Maldivas.",
      },
      {
        nome: "Cheval Blanc Randheli",
        descricao: "Design contemporâneo LVMH, serviço impecável.",
      },
      {
        nome: "Anantara Kihavah",
        descricao: "Excelente custo-benefício na faixa premium, restaurante submarino.",
      },
    ],
    faq: [
      {
        q: "Brasileiros precisam de visto?",
        a: "Não. Visto na chegada gratuito por 30 dias.",
      },
      {
        q: "Quanto custa?",
        a: "A partir de R$ 32.000 por pessoa (6 dias em resort selecionado), sem aéreo internacional. Faixa premium ultrapassa R$ 100 mil em alta temporada.",
      },
    ],
    imageAiPrompt:
      "Maldives overwater villa at sunset, wooden bungalow on stilts above turquoise lagoon, soft pink sky reflected in water, cinematic editorial painterly, no people, ultra detailed",
    precoEstimado: "a partir de R$ 32.000 por pessoa",
    whatsappName: "Pacote Maldivas",
  },
];

export const getPacote = (slug: string): Pacote | undefined =>
  pacotes.find((p) => p.slug === slug);
