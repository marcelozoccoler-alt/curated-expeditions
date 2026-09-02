import { Itinerary } from "./types";

/**
 * Roteiros individuais (viagem privativa, saídas diárias) por destino.
 * Base terrestre por pessoa em apartamento duplo — valores sujeitos a
 * reconfirmação no ato da reserva (tarifas hoteleiras flutuantes).
 * O código de referência de cada programa fica em `notes` (prefixo FA).
 */

const PAGAMENTO = "Formas de pagamento: à vista com 3% de desconto (pix ou depósito, exceto taxas) ou entrada de 20% + 7 parcelas iguais no cartão.";
const TARIFA_NOTE = "Hotéis adotam tarifas flutuantes: valores reconfirmados no ato da reserva.";
const MIN_NOTE = "Valores válidos para viagem privativa a partir de 2 pessoas; consulte suplemento para viajante individual.";

export const INDIVIDUAL_ITINERARIES: Record<string, Itinerary[]> = {
  "brasil/lencois-maranhenses": [
    {
      title: "Lençóis Maranhenses Express — 5 dias",
      duration: "5 dias / 4 noites · saídas diárias",
      pricePerPerson: "R$ 6.007",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo (parte terrestre). Individual a partir de R$ 7.086 · triplo a partir de R$ 5.816.",
      summary:
        "São Luís, Barreirinhas e o coração do parque em ritmo confortável: o Rio Preguiças em voadeira, o circuito de lagoas em 4x4 e o pôr do sol da Lagoa Bonita do alto das dunas.",
      days: [
        { day: "1", location: "São Luís", description: "Chegada ao aeroporto de São Luís, recepção e traslado ao hotel. Tarde livre para sentir o centro histórico e descansar." },
        { day: "2", location: "São Luís · Barreirinhas · Marcelino e Tapuio", description: "Traslado a Barreirinhas e acomodação. À tarde, subida do Rio Preguiças em voadeira até o Povoado do Marcelino, com as artesãs da palha de buriti, e visita à casa de farinha comunitária. (café)" },
        { day: "3", location: "Barreirinhas — Circuito das Lagoas", description: "Em 4x4 até o Parque Nacional: caminhada pelas dunas do circuito da Lagoa Azul, almoço regional próximo ao povoado Mata Fome e fim de tarde na Lagoa Bonita para o pôr do sol. (café)" },
        { day: "4", location: "Vassouras · Mandacaru · Atins", description: "Descida do Rio Preguiças em voadeira: dunas das Vassouras, o farol de Mandacaru e Atins, na foz, com almoço à beira do parque antes do retorno a Barreirinhas. (café)" },
        { day: "5", location: "Barreirinhas · São Luís", description: "Café da manhã e traslado privativo ao aeroporto de São Luís. (café)" },
      ],
      hotels: [
        { city: "São Luís", hotel: "Luzeiros São Luís", nights: 1, category: "Apto Superior", includes: "Café da manhã" },
        { city: "Barreirinhas", hotel: "Encantes do Nordeste (ou Porto Preguiças Resort)", nights: 3, category: "Chalé Standard", includes: "Café da manhã" },
      ],
      includes: [
        "Traslado aeroporto / hotel em São Luís",
        "Traslados terrestres São Luís – Barreirinhas – São Luís em serviço semiprivativo",
        "4 noites de hospedagem com café da manhã (1 em São Luís, 3 em Barreirinhas)",
        "Passeios descritos no roteiro com guias especializados em serviço semiprivativo",
        "Seguro viagem nacional",
      ],
      excludes: ["Passagem aérea", "Refeições não mencionadas", "Despesas pessoais", "Qualquer serviço não descrito como incluído"],
      notes: [
        "Código de referência do roteiro: FA-LEN-05.",
        "Melhor visibilidade das lagoas cheias entre maio e setembro.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/bonito": [
    {
      title: "Bonito Completo — voando direto — 5 dias",
      duration: "5 dias / 4 noites · saídas diárias",
      pricePerPerson: "R$ 3.439",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo (parte terrestre). Individual a partir de R$ 4.133 · triplo a partir de R$ 3.322.",
      summary:
        "O melhor de Bonito sem tempo perdido em estrada: grutas, flutuação no Rio da Prata, cachoeiras da Estância Mimosa, bote no Rio Formoso e o Buraco das Araras.",
      days: [
        { day: "1", location: "Bonito", description: "Chegada ao aeroporto de Bonito, recepção e traslado ao hotel escolhido." },
        { day: "2", location: "Bonito — Gruta Catedral e Estância Mimosa", description: "Trilha até a Gruta Catedral, com 180 metros de espeleotemas, e tarde na Estância Mimosa: 2,8 km de mata ciliar entre dez cachoeiras e piscinas naturais. Almoço incluído. (café, almoço)" },
        { day: "3", location: "Bonito — Rio da Prata e Buraco das Araras", description: "Flutuação de cerca de 4 horas na nascente do Rio Olho d'Água até o Rio da Prata, com guia especializado, e à tarde a dolina do Buraco das Araras, com araras-vermelhas em revoada. Almoço incluído. (café, almoço)" },
        { day: "4", location: "Bonito — Rio Formoso e Gruta do Lago Azul", description: "Descida de 6 km em bote inflável pelo Rio Formoso, com cachoeiras e corredeiras, e visita contemplativa à Gruta do Lago Azul. (café)" },
        { day: "5", location: "Bonito", description: "Manhã livre conforme o horário do voo e traslado ao aeroporto de Bonito." },
      ],
      hotels: [
        { city: "Bonito", hotel: "Ibis Styles Bonito, Marrua Hotel, Olho d'Água ou Águas de Bonito", nights: 4, category: "Suíte / Apto Standard ou Luxo", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados aeroporto de Bonito / hotel / aeroporto",
        "4 noites de hospedagem em Bonito com café da manhã",
        "Passeios conforme o roteiro, com ingressos",
        "Almoço na Estância Mimosa e no Rio da Prata (sem bebidas)",
        "Guias locais especializados",
        "Seguro viagem nacional",
      ],
      excludes: [
        "Passagem aérea",
        "Refeições não mencionadas e bebidas",
        "Taxa de conservação ambiental do município (R$ 15 por pessoa por dia)",
        "Despesas pessoais e serviços não listados",
      ],
      notes: [
        "Código de referência do roteiro: FA-BON-05.",
        "A ordem dos passeios é definida pela disponibilidade de vouchers dos atrativos.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/jericoacoara": [
    {
      title: "Jericoacoara — 6 dias",
      duration: "6 dias / 5 noites · saídas diárias",
      pricePerPerson: "R$ 4.399",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo (parte terrestre). Individual a partir de R$ 6.024 · triplo a partir de R$ 4.184. Opções de pousada boutique a partir de R$ 8.601.",
      summary:
        "Cinco noites na vila de ruas de areia, com os passeios clássicos de buggy pelas lagoas, a Pedra Furada e a travessia de dunas até Tatajuba.",
      days: [
        { day: "1", location: "Fortaleza · Jericoacoara", description: "Chegada a Fortaleza, recepção e traslado privativo até Jericoacoara. Acomodação na pousada escolhida." },
        { day: "2", location: "Jericoacoara — Lagoa Azul, do Paraíso e da Pinguela", description: "Buggy até a Lagoa Azul e a Lagoa do Paraíso e, à tarde, a Lagoa da Pinguela, de águas verde-esmeralda. Retorno pela travessia das dunas e pôr do sol na duna principal. (café)" },
        { day: "3", location: "Jericoacoara — Pedra Furada", description: "Caminhada até a Pedra Furada, símbolo da vila, e tempo livre para as praias e o vento de Jeri. (café)" },
        { day: "4", location: "Jericoacoara — Tatajuba e Lagoa da Torta", description: "Buggy até Tatajuba, com as Dunas Morta e do Funil, o 'esquibum' e as redes de corda na Lagoa da Torta. (café)" },
        { day: "5", location: "Jericoacoara", description: "Dia livre para kitesurf, passeios de barco ao amanhecer ou simplesmente o ritmo lento da vila. (café)" },
        { day: "6", location: "Jericoacoara · Fortaleza", description: "Café da manhã e traslado privativo ao aeroporto de Fortaleza. (café)" },
      ],
      hotels: [
        { city: "Jericoacoara", hotel: "Villa Terra Viva, Jeribá ou Vila Kalango", nights: 5, category: "Apto Standard, Luxo Jardim ou Bangalô", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados privativos Fortaleza / Jericoacoara / Fortaleza",
        "5 noites de hospedagem com café da manhã na pousada escolhida",
        "Passeio de buggy às Lagoas Azul e do Paraíso",
        "Passeio a pé à Pedra Furada",
        "Passeio de buggy a Tatajuba, com Dunas Morta e do Funil e Lagoa da Torta",
        "Taxa de turismo sustentável",
        "Seguro viagem nacional",
      ],
      excludes: ["Passagem aérea", "Refeições não mencionadas", "Despesas pessoais", "Qualquer serviço não mencionado como incluído"],
      notes: [
        "Código de referência do roteiro: FA-JER-06.",
        "Vento constante e céu limpo entre julho e dezembro; lagoas mais cheias de fevereiro a agosto.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/chapada-dos-veadeiros": [
    {
      title: "Chapada dos Veadeiros e Alto Paraíso — 5 dias",
      duration: "5 dias / 4 noites · saídas às quartas-feiras",
      pricePerPerson: "R$ 4.169",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo (parte terrestre). Individual a partir de R$ 4.836 · triplo a partir de R$ 4.030.",
      summary:
        "Quatro dias de cachoeiras e trilhas com guia especializado: Almécegas, Cataratas dos Couros, Saltos do Rio Preto e o Vale da Lua, com almoços e lanches de trilha incluídos.",
      days: [
        { day: "1", location: "Brasília · Alto Paraíso", description: "Chegada a Brasília até 13h30, recepção e traslado a Alto Paraíso. Acomodação na pousada escolhida." },
        { day: "2", location: "Almécegas · Cachoeira São Bento", description: "Fazenda São Bento: Almécegas I e II, com caminhada de 3 km (dificuldade média leve), e à tarde a Cachoeira de São Bento, de poço largo e fundo. Lanche de trilha e almoço tardio. (café, lanche, almoço)" },
        { day: "3", location: "Parque Estadual Águas do Paraíso — Rio dos Couros", description: "Deslocamento de 53 km até as Cataratas dos Couros: 2 km margeando o rio entre quedas como Muralha, Franja e Parafuso, com paradas para banho. Almoço caseiro na fazenda. (café, lanche, almoço)" },
        { day: "4", location: "PNCV — Saltos do Rio Preto", description: "Trilha de 12 km (ida e volta, dificuldade média pesada) até os Saltos do Rio Preto, de 120 m, e a Cachoeira do Garimpão, de 80 m. Opcional: Calungas e Cachoeira de Santa Bárbara. (café, lanche, almoço)" },
        { day: "5", location: "Vale da Lua · Brasília", description: "Vale da Lua, com as rochas esculpidas pelo Rio São Miguel, almoço e traslado de volta ao aeroporto de Brasília. (café, almoço)" },
      ],
      hotels: [
        { city: "Alto Paraíso de Goiás", hotel: "Chapada Confort Flat, Pousada Araras, Pousada dos Guias ou Recanto da Grande Paz", nights: 4, category: "Apto Standard ou Superior", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados aeroporto de Brasília / pousada em Alto Paraíso / aeroporto",
        "4 noites de hospedagem em Alto Paraíso com café da manhã",
        "4 almoços e 3 lanches de trilha",
        "Passeios descritos no roteiro com traslados quando necessários",
        "Guia especializado e entradas dos atrativos",
        "Seguro viagem nacional",
      ],
      excludes: [
        "Passagem aérea",
        "Refeições durante os traslados e bebidas",
        "Despesas pessoais",
        "Qualquer serviço não descrito como incluído",
      ],
      notes: [
        "Código de referência do roteiro: FA-CHV-05.",
        "Troca opcional do 4º dia pelos Calungas e Cachoeira de Santa Bárbara, com acréscimo por pessoa sob consulta.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/sul/cataratas-iguacu": [
    {
      title: "Foz do Iguaçu — 5 dias",
      duration: "5 dias / 4 noites · saídas diárias",
      pricePerPerson: "R$ 1.929",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo (parte terrestre). Individual a partir de R$ 2.384 · triplo a partir de R$ 1.857. Categorias superiores a partir de R$ 2.673.",
      summary:
        "As Cataratas pelo lado brasileiro, o Parque das Aves e a visita panorâmica a Itaipu, com tempo livre para o lado argentino e os passeios opcionais de barco ou helicóptero.",
      days: [
        { day: "1", location: "Foz do Iguaçu", description: "Chegada ao aeroporto de Foz do Iguaçu, recepção e traslado ao hotel escolhido." },
        { day: "2", location: "Parque Nacional do Iguaçu e Parque das Aves", description: "Trilha das Cataratas pelo lado brasileiro, com a passarela da Garganta do Diabo, e visita ao Parque das Aves, com viveiros imersivos de Mata Atlântica. (café)" },
        { day: "3", location: "Foz do Iguaçu", description: "Dia livre para o lado argentino do parque, o Marco das Três Fronteiras ou os opcionais Macuco Safári e voo panorâmico de helicóptero. (café)" },
        { day: "4", location: "Itaipu", description: "Visita panorâmica à hidrelétrica de Itaipu, com o vertedouro e a dimensão da barragem, e tarde livre. (café)" },
        { day: "5", location: "Foz do Iguaçu", description: "Café da manhã e traslado ao aeroporto. (café)" },
      ],
      hotels: [
        { city: "Foz do Iguaçu", hotel: "Hotel Del Rey, Viale Tower, Nadai ou Wyndham Golden Foz Suites", nights: 4, category: "Apto Standard ou Luxo", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados regulares aeroporto / hotel / aeroporto",
        "4 noites de hospedagem com café da manhã",
        "Visita às Cataratas pelo lado brasileiro com ingresso",
        "Visita ao Parque das Aves com ingresso",
        "Visita panorâmica à hidrelétrica de Itaipu com ingresso",
        "Seguro viagem nacional",
      ],
      excludes: [
        "Passagem aérea",
        "Refeições não mencionadas",
        "Passeios opcionais (Macuco Safári, helicóptero, lado argentino)",
        "Despesas pessoais e serviços não listados",
      ],
      notes: [
        "Código de referência do roteiro: FA-IGU-05.",
        "Ingressos incluídos com tarifa para brasileiros; para estrangeiros, valores sob consulta.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/pantanal/sul": [
    {
      title: "Pantanal Sul — Refúgio Ecológico Caiman — 4 dias",
      duration: "4 dias / 3 noites · saídas diárias",
      pricePerPerson: "Sob consulta",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo (parte terrestre), com pensão completa. Valores conforme sede, categoria e período.",
      summary:
        "Três noites em uma das fazendas de conservação mais reconhecidas do mundo, base do Projeto Onçafari: safáris diurnos e noturnos, cavalgada e caminhadas com guias especializados.",
      days: [
        { day: "1", location: "Campo Grande · Refúgio Ecológico Caiman", description: "Recepção em Campo Grande e traslado à fazenda, com as primeiras observações de fauna na estrada. Acomodação e safári de fim de tarde. (jantar)" },
        { day: "2", location: "Refúgio Ecológico Caiman", description: "Dias dedicados às atividades da fazenda com guias bilíngues: safári fotográfico em veículo aberto, caminhadas interpretativas, cavalgada pantaneira e safári noturno de focagem. (café, almoço, lanche, jantar)" },
        { day: "3", location: "Refúgio Ecológico Caiman", description: "Continuação das atividades, com foco na observação de onças-pintadas em parceria com o projeto de pesquisa da região, aves e jacarés ao entardecer. (café, almoço, lanche, jantar)" },
        { day: "4", location: "Refúgio Ecológico Caiman · Campo Grande", description: "Última atividade ao amanhecer e traslado ao aeroporto de Campo Grande. (café)" },
      ],
      hotels: [
        { city: "Miranda (Pantanal Sul)", hotel: "Refúgio Ecológico Caiman", nights: 3, category: "Sede Caiman ou Baiazinha", includes: "Pensão completa com bebidas não alcoólicas e atividades guiadas" },
      ],
      includes: [
        "Traslados aeroporto de Campo Grande / Refúgio Ecológico Caiman / aeroporto",
        "3 noites de hospedagem com pensão completa e bebidas não alcoólicas",
        "Lanches durante os passeios",
        "Passeios e safáris conforme programação da fazenda",
        "Guias especializados",
        "Seguro viagem nacional",
      ],
      excludes: ["Passagem aérea", "Bebidas alcoólicas", "Despesas pessoais", "Serviços não mencionados como incluídos"],
      notes: [
        "Código de referência do roteiro: FA-PAN-CAI-04.",
        "Melhor época para avistamento de onças: junho a outubro.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/pantanal/norte": [
    {
      title: "Pantanal Norte — Araras Eco Lodge — 5 dias",
      duration: "5 dias / 4 noites · saídas diárias",
      pricePerPerson: "R$ 9.640",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo, com pensão completa. Individual a partir de R$ 11.820 · triplo a partir de R$ 9.640. Alta temporada (jul–out) a partir de R$ 12.490.",
      summary:
        "A Transpantaneira como safári fotográfico e quatro noites em um lodge pioneiro em conservação: barco, cavalgada pantaneira, torres de observação e focagem noturna.",
      days: [
        { day: "1", location: "Cuiabá · Araras Eco Lodge", description: "Recepção em Cuiabá e travessia da Estrada-Parque Transpantaneira, com paradas para observação da vida selvagem. Caminhada de apresentação dos projetos de preservação e pôr do sol no Mirante da Garça. Após o jantar, passeio sob as estrelas. (jantar)" },
        { day: "2", location: "Araras Eco Lodge — barco e caminhada", description: "Navegação por baías e corixos em busca de jacarés, capivaras e aves aquáticas, e caminhada por passarelas suspensas sobre o campo alagado. (café, almoço, jantar)" },
        { day: "3", location: "Araras Eco Lodge — cavalgada e caminhada", description: "Cavalgada pantaneira no ritmo do peão, atravessando campos e vazantes, e caminhada guiada pela mata seca. (café, almoço, jantar)" },
        { day: "4", location: "Araras Eco Lodge — foto-safári", description: "Foto-safári em veículo aberto pela Transpantaneira ao amanhecer e ao anoitecer, alta temporada de tuiuiús, araras-azuis e tamanduás-bandeira. (café, almoço, jantar)" },
        { day: "5", location: "Araras Eco Lodge · Cuiabá", description: "Café da manhã e retorno pela Transpantaneira ao aeroporto de Cuiabá. (café)" },
      ],
      hotels: [
        { city: "Poconé (Pantanal Norte)", hotel: "Araras Eco Lodge", nights: 4, category: "Apartamento", includes: "Pensão completa (4 cafés, 3 almoços, 4 jantares) e atividades guiadas" },
      ],
      includes: [
        "Traslados de chegada e saída Cuiabá / lodge / Cuiabá em serviço regular",
        "4 noites de hospedagem no Araras Eco Lodge com pensão completa",
        "Passeios conforme o roteiro, em serviço regular",
        "Guias do lodge",
        "Seguro viagem nacional",
      ],
      excludes: [
        "Taxa de conservação (R$ 375 por pessoa em 2026)",
        "Taxa de município",
        "Passagem aérea",
        "Bebidas e despesas pessoais",
      ],
      notes: [
        "Código de referência do roteiro: FA-PAN-ARA-05.",
        "Cheia (dez–mar) favorece aves e paisagens alagadas; seca (jul–out) favorece mamíferos.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/amazonia/anavilhanas": [
    {
      title: "Amazônia — Anavilhanas Jungle Lodge — 5 dias",
      duration: "5 dias / 4 noites · saídas diárias",
      pricePerPerson: "R$ 16.034",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo, com pensão completa. Individual a partir de R$ 20.034 · triplo a partir de R$ 10.054. Alta temporada a partir de R$ 18.923.",
      summary:
        "Quatro noites de frente para o segundo maior arquipélago fluvial do mundo, com canoagem em igapós, focagem noturna, trilhas de terra firme e busca por botos cor-de-rosa.",
      days: [
        { day: "1", location: "Manaus · Anavilhanas Jungle Lodge", description: "Recepção em Manaus, travessia do Rio Negro e traslado até o lodge. Coquetel de boas-vindas, acomodação e, após o jantar, passeio em barco pequeno com focagem de jacarés em igapós e igarapés. (jantar)" },
        { day: "2", location: "Anavilhanas Jungle Lodge", description: "Canoagem cabocla entre árvores inundadas, visita a uma comunidade local do Rio Negro e prática de arco e flecha com artefatos Waimiri-Atroari. (café, almoço, jantar)" },
        { day: "3", location: "Arquipélago de Anavilhanas", description: "Dia inteiro a bordo de barco regional pelos canais, lagos e ilhas do arquipélago, com peixe assado na brasa, redes e busca por botos cor-de-rosa e tucuxis. (café, almoço, jantar)" },
        { day: "4", location: "Anavilhanas Jungle Lodge", description: "Contemplação do nascer do sol nas ilhas, trilha na mata de terra firme com guias locais e, conforme a estação, pescaria de piranhas ou caminhada pela mata de igapó. (café, almoço, jantar)" },
        { day: "5", location: "Anavilhanas Jungle Lodge · Manaus", description: "Café da manhã e traslado ao aeroporto de Manaus. (café)" },
      ],
      hotels: [
        { city: "Novo Airão", hotel: "Anavilhanas Jungle Lodge", nights: 4, category: "Chalé Standard (categorias superiores sob consulta)", includes: "Pensão completa e atividades guiadas" },
      ],
      includes: [
        "Traslados aeroporto de Manaus / Anavilhanas Jungle Lodge / aeroporto",
        "4 noites de hospedagem no lodge com pensão completa",
        "Passeios e atividades mencionados no roteiro",
        "Seguro viagem nacional",
      ],
      excludes: ["Passagem aérea", "Bebidas", "Despesas pessoais", "Qualquer serviço não mencionado como incluído"],
      notes: [
        "Código de referência do roteiro: FA-AMZ-ANA-05.",
        "A programação diária é definida pelo lodge e entregue na chegada; a ordem pode variar por nível do rio e clima.",
        "Cheia (fev–jul) favorece canoagem em igapós; seca (set–dez) abre praias e trilhas nas ilhas.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],
};

/** Aplica os roteiros individuais ao catálogo, preservando roteiros já existentes. */
export const withIndividualItineraries = <T extends { slug: string; itineraries?: Itinerary[] }>(
  list: T[],
): T[] =>
  list.map((d) => {
    const extra = INDIVIDUAL_ITINERARIES[d.slug];
    if (!extra) return d;
    return { ...d, itineraries: [...(d.itineraries ?? []), ...extra] };
  });
