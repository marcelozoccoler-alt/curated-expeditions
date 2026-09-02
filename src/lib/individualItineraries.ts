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

  "brasil/fernando-de-noronha": [
    {
      title: "Fernando de Noronha Essencial — 5 dias",
      duration: "5 dias / 4 noites · saídas diárias",
      pricePerPerson: "R$ 3.862",
      currency: "BRL",
      priceBasis:
        "Por pessoa em apartamento duplo (parte terrestre) na Pousada Atobá ou Mar Atlântico. Individual a partir de R$ 5.551 · triplo a partir de R$ 3.207. Opções de charme: Pousada Maravilha a partir de R$ 6.790 e Pousada do Vale a partir de R$ 10.157.",
      summary:
        "O arquipélago em ritmo de contemplação: a Baía dos Golfinhos ao amanhecer, o Ilhatour em 4x4 pelas praias do mar de dentro e tardes livres para o mergulho, a Praia do Sancho e o pôr do sol no Mirante do Boldró.",
      days: [
        { day: "1", location: "Fernando de Noronha", description: "Desembarque no aeroporto, recepção e traslado à pousada escolhida. Restante do dia livre para o primeiro banho de mar." },
        { day: "2 a 4", location: "Fernando de Noronha", description: "Dias dedicados aos passeios incluídos: passeio de barco pela Baía dos Golfinhos (07h15 às 11h30), percorrendo as ilhas secundárias e o mar de dentro, e Ilhatour em 4x4 pelas principais praias e mirantes, terminando com o pôr do sol no Mirante do Boldró. Tempo livre entre as atividades para mergulho livre, Praia do Sancho e Baía do Sueste. (café)" },
        { day: "5", location: "Fernando de Noronha", description: "Café da manhã e traslado ao aeroporto em horário apropriado. (café)" },
      ],
      hotels: [
        { city: "Fernando de Noronha", hotel: "Pousada Atobá / Mar Atlântico (opções de charme: Pousada Maravilha, Pousada do Vale, Estrela do Mar, Alto da Floresta)", nights: 4, category: "Apto Standard", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados aeroporto / pousada / aeroporto",
        "4 noites de hospedagem na pousada escolhida com café da manhã",
        "Passeio de barco Baía dos Golfinhos",
        "Ilhatour em 4x4 com guia",
        "Seguro viagem nacional",
      ],
      excludes: [
        "Parte aérea",
        "Taxa de Preservação Ambiental (TPA), paga por dia de permanência",
        "Taxa de acesso ao Parque Nacional Marinho",
        "Refeições não mencionadas",
        "Despesas pessoais",
        "Qualquer serviço não mencionado como incluído",
      ],
      notes: [
        "Código de referência do roteiro: FA-NOR-05.",
        "Setembro a novembro costuma trazer mar mais calmo no mar de dentro e melhor visibilidade para mergulho.",
        "Versões de 8 dias e programas com mergulho batismal disponíveis sob consulta.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/amazonia/alter-do-chao": [
    {
      title: "Alter do Chão e Floresta Nacional do Tapajós — 5 dias",
      duration: "5 dias / 4 noites · saídas diárias",
      pricePerPerson: "R$ 5.740",
      currency: "BRL",
      priceBasis:
        "Por pessoa em apartamento duplo (parte terrestre) no Hotel Mirante da Ilha. Individual a partir de R$ 7.890 · triplo a partir de R$ 5.318. Vila de Alter (bangalô 35 m²) a partir de R$ 6.329.",
      summary:
        "O Caribe amazônico com tempo de sobra: a Ilha do Amor, a travessia do Lago Verde, as samaúmas gigantes da Floresta Nacional do Tapajós e a comunidade do Jamaraquá, onde a borracha ainda vira arte.",
      days: [
        { day: "1", location: "Santarém · Alter do Chão", description: "Chegada ao aeroporto de Santarém, recepção e traslado a Alter do Chão (cerca de 40 minutos). Restante do dia livre para caminhar até a orla." },
        { day: "2", location: "Ilha do Amor · Lago Verde", description: "Travessia à Ilha do Amor e navegação pelo Lago Verde, com paradas para banho nas praias de areia branca e tempo de contemplação nos igapós. (café)" },
        { day: "3", location: "Floresta Nacional do Tapajós · Jamaraquá", description: "Dia inteiro na Flona do Tapajós: trilha entre as samaúmas centenárias com guia comunitário e visita à comunidade do Jamaraquá, onde os moradores mostram o artesanato de látex. Almoço incluído. (café, almoço)" },
        { day: "4", location: "Lago Verde · Ponta do Jari · Lago Preto", description: "Navegação até a Ponta do Jari e o Lago Preto, com águas escuras e espelhadas, paradas para banho e almoço à beira do rio. (café, almoço)" },
        { day: "5", location: "Alter do Chão · Santarém", description: "Café da manhã e traslado ao aeroporto de Santarém. (café)" },
      ],
      hotels: [
        { city: "Alter do Chão", hotel: "Hotel Mirante da Ilha (ou Vila de Alter)", nights: 4, category: "Apto Frente Rio / Bangalô 35 m²", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados Santarém – Alter do Chão – Santarém",
        "4 noites de hospedagem em Alter do Chão com café da manhã",
        "Passeios do roteiro com guia em serviço semiprivativo",
        "2 almoços com água mineral",
        "Seguro viagem nacional",
      ],
      excludes: ["Parte aérea", "Despesas pessoais", "Qualquer serviço não mencionado como incluído"],
      notes: [
        "Código de referência do roteiro: FA-ALT-05.",
        "As praias de areia branca aparecem na vazante, entre agosto e dezembro; na cheia o passeio ganha os igapós.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/amazonia/manaus-rio-negro": [
    {
      title: "Amazônia — Juma Amazon Lodge — 4 dias",
      duration: "4 dias / 3 noites · saídas diárias",
      pricePerPerson: "R$ 9.709",
      currency: "BRL",
      priceBasis:
        "Por pessoa em bangalô Vista Floresta, apartamento duplo, com pensão completa. Individual a partir de R$ 12.946 · triplo a partir de R$ 8.417. Bangalô Vista Rio a partir de R$ 10.680.",
      summary:
        "Um lodge sobre palafitas no Rio Juma: o Encontro das Águas na chegada, canoa a remo pelos igarapés, amanhecer com binóculos na mão e uma noite de lanterna atrás de jacarés.",
      days: [
        { day: "1", location: "Manaus · Juma Lodge", description: "Recepção no aeroporto de Manaus e traslado combinado (lancha e veículo, cerca de 3h) até o Juma Amazon Lodge, passando pelo Encontro das Águas dos rios Negro e Solimões. Após o almoço, passeio de canoa a remo por igarapés e igapós. À noite, focagem de jacarés com o guia local. (almoço, jantar)" },
        { day: "2", location: "Rio Juma", description: "Saída para o nascer do sol sobre o rio, com binóculos para observação de aves. Depois do café, caminhada na floresta com guia nativo sobre plantas medicinais e sobrevivência. À tarde, pescaria de piranhas e pôr do sol no barco; à noite, roda de histórias ribeirinhas. (café, almoço, jantar)" },
        { day: "3", location: "Rio Juma", description: "Nova trilha na floresta seguida de piquenique regional preparado na brasa e descanso em redes. À tarde, visita à casa de um caboclo ribeirinho e à casa de farinha da comunidade. (café, almoço, jantar)" },
        { day: "4", location: "Juma Lodge · Manaus", description: "Café da manhã e retorno a Manaus por lancha e veículo, com chegada por volta do meio-dia direto ao aeroporto ou hotel. (café)" },
      ],
      hotels: [
        { city: "Rio Juma (Careiro)", hotel: "Juma Amazon Lodge", nights: 3, category: "Bangalô Vista Floresta ou Vista Rio", includes: "Pensão completa (3 cafés, 3 almoços, 3 jantares)" },
      ],
      includes: [
        "Traslados aeroporto de Manaus / Juma Lodge / aeroporto",
        "3 noites de hospedagem no lodge com pensão completa",
        "Passeios e atividades conforme o roteiro, com guias locais",
        "Seguro viagem nacional",
      ],
      excludes: ["Passagem aérea", "Bebidas", "Despesas pessoais", "Qualquer serviço não mencionado como incluído"],
      notes: [
        "Código de referência do roteiro: FA-AMZ-JUM-04.",
        "Recomendamos dormir a primeira noite em Manaus: o traslado ao lodge parte entre 6h30 e 7h30 ou às 13h. Noite extra em Manaus com traslado e city tour de meio dia sob consulta.",
        "Traslado em hidroavião disponível sob consulta.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/chapada-das-mesas": [
    {
      title: "Chapada das Mesas — 5 dias",
      duration: "5 dias / 4 noites · saídas regulares",
      pricePerPerson: "R$ 3.764",
      currency: "BRL",
      priceBasis: "Por pessoa em apartamento duplo (parte terrestre). Individual a partir de R$ 4.055 · triplo a partir de R$ 3.000.",
      summary:
        "O sul do Maranhão em tons de ocre e turquesa: o Encanto Azul, o Poço Azul, as quedas do Prata e São Romão e o complexo de Pedra Caída, com paredões vermelhos abraçando a cachoeira.",
      days: [
        { day: "1", location: "Imperatriz · Carolina", description: "Chegada a Imperatriz e traslado a Carolina (cerca de 2h30). Acomodação e restante do dia livre." },
        { day: "2", location: "Encanto Azul · Poço Azul · Santa Bárbara", description: "Dia entre nascentes: o Encanto Azul, o Poço Azul de água translúcida e a Cachoeira de Santa Bárbara, com trilhas curtas e paradas para banho. (café)" },
        { day: "3", location: "Parque Nacional da Chapada das Mesas", description: "Visita às Cachoeiras da Prata e de São Romão, dentro do parque nacional, entre paredões de arenito e piscinas naturais. (café)" },
        { day: "4", location: "Pedra Caída · Portal da Chapada", description: "Complexo de Pedra Caída, com o santuário e o cânion das cachoeiras, e mirante do Portal da Chapada para o fim de tarde. (café)" },
        { day: "5", location: "Carolina · Imperatriz", description: "Café da manhã e traslado ao aeroporto de Imperatriz. (café)" },
      ],
      hotels: [
        { city: "Carolina", hotel: "Pousada do Lajes", nights: 4, category: "Apto Standard", includes: "Café da manhã e traslado diário ao centro (cortesia da pousada)" },
      ],
      includes: [
        "Traslado compartilhado Imperatriz / Carolina / Imperatriz",
        "4 noites de hospedagem com café da manhã",
        "Passeios do roteiro em serviço regular com guia ou motorista local",
        "Seguro viagem nacional",
      ],
      excludes: [
        "Passagem aérea",
        "Almoços e jantares",
        "Bebidas",
        "Taxas ambientais e ingressos nos atrativos (São Romão, Prata, Poço Azul, Encanto Azul, Portal da Chapada e Pedra Caída)",
        "Qualquer serviço não mencionado como incluído",
      ],
      notes: [
        "Código de referência do roteiro: FA-CMS-05.",
        "Entre outubro e maio, período de chuvas, os atrativos podem mudar de cor e volume de água.",
        "Roteiro dos 3 Encantos, com 7 dias, disponível sob consulta.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/nordeste/rota-das-emocoes": [
    {
      title: "Rota das Emoções com Atins, Delta e Jericoacoara — 10 dias",
      duration: "10 dias / 9 noites · saídas diárias",
      pricePerPerson: "R$ 12.077",
      currency: "BRL",
      priceBasis:
        "Por pessoa em apartamento duplo (parte terrestre), hospedagens Encantes do Nordeste, Luzeiros São Luís, Vila Jurará, Vila Parnaíba e Villa Terra Viva. Individual a partir de R$ 14.955. Versão com Porto Preguiças Resort e Atins Charme Chalés a partir de R$ 13.252.",
      summary:
        "A travessia clássica do Nordeste em ritmo confortável: São Luís, as lagoas dos Lençóis, dois dias em Atins, o Delta do Parnaíba de barco e o fim de tarde na Pedra Furada de Jericoacoara.",
      days: [
        { day: "1", location: "São Luís", description: "Chegada, recepção e traslado ao hotel. Tarde livre no centro histórico de azulejos portugueses." },
        { day: "2", location: "São Luís · Barreirinhas · Tapuio · Marcelino", description: "Traslado a Barreirinhas e acomodação. À tarde, subida do Rio Preguiças em voadeira até os povoados do Tapuio e do Marcelino, com as artesãs de palha de buriti. (café)" },
        { day: "3", location: "Circuito Lagoas Azul e Bonita", description: "Em 4x4 pelo Parque Nacional dos Lençóis Maranhenses: caminhada pelas dunas da Lagoa Azul e pôr do sol na Lagoa Bonita. (café)" },
        { day: "4", location: "Barreirinhas · Vassouras · Mandacaru · Atins", description: "Descida do Preguiças com paradas nas dunas das Vassouras, no farol de Mandacaru, na revoada dos guarás e chegada a Atins, na foz. (café)" },
        { day: "5", location: "Atins · Canto do Atins · Ponta do Mangue", description: "Dia entre parque e mar: travessia de dunas até o Canto do Atins e a Ponta do Mangue, com lagoas escondidas e praias desertas. (café)" },
        { day: "6", location: "Atins · Tutóia · Delta do Parnaíba", description: "Travessia até Tutóia e navegação pelo Delta do Parnaíba, o único delta em mar aberto das Américas, com dunas e manguezais. Noite em Parnaíba. (café)" },
        { day: "7", location: "Parnaíba · Camocim · Tatajuba · Jericoacoara", description: "Travessia de 4x4 pelo litoral cearense com balsa em Camocim, lagoas de Tatajuba e chegada a Jericoacoara. (café)" },
        { day: "8", location: "Jericoacoara · Lagoas Azul e do Paraíso", description: "Dia nas lagoas de Jijoca, com redes dentro da água e almoço à beira da lagoa. (café)" },
        { day: "9", location: "Jericoacoara · Pedra Furada", description: "Caminhada até a Pedra Furada, arco de rocha esculpido pelo mar, e fim de tarde na duna do pôr do sol. (café)" },
        { day: "10", location: "Jericoacoara · Fortaleza", description: "Café da manhã e traslado ao aeroporto de Fortaleza (cerca de 4h30). (café)" },
      ],
      hotels: [
        { city: "São Luís", hotel: "Luzeiros São Luís", nights: 1, category: "Apto Superior", includes: "Café da manhã" },
        { city: "Barreirinhas", hotel: "Encantes do Nordeste (ou Porto Preguiças Resort)", nights: 2, category: "Chalé Standard", includes: "Café da manhã" },
        { city: "Atins", hotel: "Pousada Vila Jurará (ou Atins Charme Chalés)", nights: 2, category: "Apto Superior", includes: "Café da manhã" },
        { city: "Parnaíba", hotel: "Pousada Vila Parnaíba", nights: 1, category: "Acomodação Ilhas", includes: "Café da manhã" },
        { city: "Jericoacoara", hotel: "Villa Terra Viva", nights: 3, category: "Apto Standard", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados aeroporto de São Luís – hotel – pousada em Jericoacoara – aeroporto de Fortaleza",
        "9 noites de hospedagem com café da manhã (1 São Luís, 2 Barreirinhas, 2 Atins, 1 Parnaíba, 3 Jericoacoara)",
        "Passeios do roteiro com guias em serviço semiprivativo",
        "Taxa de turismo sustentável",
        "Seguro viagem nacional",
      ],
      excludes: ["Passagem aérea", "Refeições", "Despesas pessoais", "Qualquer serviço não mencionado como incluído"],
      notes: [
        "Código de referência do roteiro: FA-ROT-10.",
        "Versões de 11 e 12 dias, com Santo Amaro ou Barra Grande, disponíveis sob consulta.",
        "Lagoas dos Lençóis mais cheias entre maio e setembro.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/amazonia/belem-marajo": [
    {
      title: "Belém e Ilha de Marajó — 7 dias",
      duration: "7 dias / 6 noites · saídas diárias",
      pricePerPerson: "R$ 6.059",
      currency: "BRL",
      priceBasis:
        "Por pessoa em apartamento duplo (parte terrestre), Radisson Belém e Casarão da Amazônia. Individual a partir de R$ 7.622 · triplo a partir de R$ 6.251. Versão com Hotel Ilha do Marajó a partir de R$ 6.776.",
      summary:
        "A Amazônia urbana e a Amazônia das marés: o Ver-o-Peso e o Mangal das Garças em Belém, e depois Soure, os búfalos, a cerâmica marajoara e as praias de água doce e salgada de Marajó.",
      days: [
        { day: "1", location: "Belém", description: "Chegada ao aeroporto internacional de Belém, recepção e traslado ao hotel. Restante do dia livre." },
        { day: "2", location: "Belém — city tour", description: "Saída às 8h30 pelo Mangal das Garças, Estação das Docas, Ver-o-Peso, Cidade Velha e Basílica de Nazaré, com guia local. (café)" },
        { day: "3", location: "Belém · Ilha de Marajó", description: "Travessia de lancha até Camará e traslado a Soure. À tarde, panorâmica pela cidade — orla, Igreja Matriz e Mercado Municipal — e visita a uma fazenda de búfalos com degustação de iguarias marajoaras. (café)" },
        { day: "4", location: "Ilha de Marajó", description: "Praia do Pesqueiro com redes sob os sombreiros de palha, canoa pelo Igarapé do Céu entre manguezais e visita à Comunidade do Céu, de casas palafitas coloridas. (café)" },
        { day: "5", location: "Ilha de Marajó", description: "Instituição Caruãnas do Marajó, escola de cerâmica marajoara fundada pela pajé D. Zeneida Lima, ateliê Arte e Mangue com o ceramista Ronaldo Guedes e a Praia da Barra Velha, com ponte suspensa sobre o mangue. (café)" },
        { day: "6", location: "Marajó · Salvaterra · Joanes · Belém", description: "Saída às 9h com bagagem rumo a Salvaterra e à Vila de Joanes, com o centro de artesanato, as ruínas e a praia. Retorno a Belém em lancha ou balsa do Porto Camará. (café)" },
        { day: "7", location: "Belém", description: "Traslado ao aeroporto em horário apropriado." },
      ],
      hotels: [
        { city: "Belém", hotel: "Radisson Hotel Belém", nights: 3, category: "Suíte Superior (2 noites + 1 na volta)", includes: "Café da manhã" },
        { city: "Soure (Ilha de Marajó)", hotel: "Casarão da Amazônia (ou Hotel Ilha do Marajó)", nights: 3, category: "Suíte Garden / Apto Familiar", includes: "Café da manhã" },
      ],
      includes: [
        "Traslados de chegada e saída em Belém em serviço regular",
        "Traslados em Marajó em serviço semiprivativo",
        "6 noites de hospedagem com café da manhã (3 em Belém, 3 em Marajó)",
        "City tour em Belém com guia local",
        "Visitas aos atrativos de Marajó em serviço semiprivativo, com água mineral nos passeios",
        "Seguro viagem nacional",
      ],
      excludes: ["Parte aérea", "Bebidas", "Ingressos nos atrativos em Belém", "Despesas pessoais", "Qualquer serviço não mencionado como incluído"],
      notes: [
        "Código de referência do roteiro: FA-BEL-MAR-07.",
        "A ordem dos dias pode ser invertida conforme os horários da lancha para Marajó e a operação do city tour em Belém.",
        "Malas maiores podem ficar guardadas no hotel em Belém durante a estadia na ilha.",
        PAGAMENTO,
        TARIFA_NOTE,
        MIN_NOTE,
      ],
    },
  ],

  "brasil/sul/canions-do-sul": [
    {
      title: "Caminhos dos Cânions do Sul — Cambará do Sul e São José dos Ausentes — 8 dias",
      duration: "8 dias / 7 noites",
      pricePerPerson: "R$ 13.899",
      currency: "BRL",
      priceBasis:
        "Por pessoa em apartamento duplo (parte terrestre), categoria Confortável. Individual a partir de R$ 16.746 · triplo a partir de R$ 12.972. Categorias Especial (Cambará Eco Hotel), Executiva (Pousada Serra Verde) e Luxo (Cabana Paradouro da Serra) a partir de R$ 15.045, R$ 15.045 e R$ 17.128.",
      summary:
        "Sete noites entre araucárias e abismos: Itaimbezinho, Fortaleza, Monte Negro, Coxilha Rica, Pontão e Realengo, com jantares na serra e o entardecer numa fazenda de campos de altitude.",
      days: [
        { day: "1", location: "Porto Alegre · Cambará do Sul", description: "Traslado do aeroporto Salgado Filho a Cambará do Sul (cerca de 3h) e visita ao Kridjijimbé, réplica em bioarte do complexo de cânions criada pelo artista Marlon Silva. Acomodação na pousada escolhida." },
        { day: "2", location: "Cânion Itaimbezinho", description: "Saída às 8h ao Parque Nacional de Aparados da Serra: trilhas do Vértice e do Cotovelo, cerca de 8 km e 3h de caminhada entre campos de altitude e matas de araucária, com mirantes na borda do cânion. Tarde livre. (café)" },
        { day: "3", location: "Circuito das Águas", description: "Saída às 8h em 4x4, 100 km de percurso pela Cachoeira dos Venâncios, Passo da Ilha e Passo do S, com caminhadas curtas e banhos de rio nos dias quentes. Tarde livre. (café)" },
        { day: "4", location: "Cânion Fortaleza · entardecer na fazenda", description: "Visita ao Cânion Fortaleza, no Parque Nacional da Serra Geral, com mirantes sobre paredões de 900 metros, e fim de tarde numa fazenda de campos de cima da serra. (café, jantar)" },
        { day: "5", location: "Cambará do Sul · São José dos Ausentes", description: "Traslado a São José dos Ausentes e experiência histórico-cultural com as famílias serranas, entre galpões, fogo de chão e histórias de tropeiros. (café, almoço, jantar)" },
        { day: "6", location: "São José dos Ausentes", description: "Morro da Catedral e os cânions Monte Negro, Coxilha Rica e Boa Vista, com caminhadas em campos nativos e lanche de trilha. (café, lanche, jantar)" },
        { day: "7", location: "São José dos Ausentes · Cambará do Sul", description: "Cânion Pontão, Serra do Pilão e Cânion Realengo no caminho de volta a Cambará do Sul. (café, lanche)" },
        { day: "8", location: "Cambará do Sul · Porto Alegre", description: "Tour Raízes de Cambará pelo centro histórico e traslado ao aeroporto de Porto Alegre. (café)" },
      ],
      hotels: [
        { city: "Cambará do Sul", hotel: "Morada da Serra / Cambará Eco Hotel / Pousada Serra Verde / Cabana Paradouro da Serra, conforme a categoria escolhida", nights: 5, category: "Confortável a Luxo (4 noites + 1 na volta)", includes: "Café da manhã" },
        { city: "São José dos Ausentes", hotel: "Pousada Aparados da Serra e Toca da Onça", nights: 2, category: "Apto Standard", includes: "Café da manhã" },
      ],
      includes: [
        "Traslado de chegada e saída Porto Alegre / Cambará do Sul / Porto Alegre",
        "Traslado Cambará do Sul / São José dos Ausentes / Cambará do Sul",
        "7 noites de hospedagem em pousada com café da manhã",
        "1 almoço, 2 lanches de trilha e 3 jantares",
        "Passeios do roteiro com guia e traslados",
        "Ingressos nos atrativos mencionados",
        "Seguro viagem nacional",
      ],
      excludes: ["Passagem aérea", "Bebidas", "Refeições não mencionadas", "Despesas pessoais", "Passeios adicionais"],
      notes: [
        "Código de referência do roteiro: FA-CAN-SUL-08.",
        "Inverno traz geadas e a chance de neve; primavera abre a floração dos campos de altitude.",
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
