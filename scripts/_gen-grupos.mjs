import { writeFileSync } from "node:fs";

const groups = [
  {
    comp: "GrupoSulItaliaAbril2027",
    slug: "sul-italia-19-abril-2027",
    img: "grupo-sul-italia-primavera-2027.jpg",
    name: "Grupo Sul da Itália · 19 de abril de 2027 — Create Travel",
    h1: "Sul da Itália: Costa Amalfitana, Matera e a Puglia",
    dates: "19/04 a 30/04/2027",
    datesLong: "19 de abril a 30 de abril de 2027",
    days: 12,
    airline: "ITA Airways",
    seoTitle: "Sul da Itália Abril 2027 com Guia desde o Brasil | Create",
    seoDesc: "12 dias entre Sorrento, Positano, Amalfi, Pompeia, Matera, Bari, Alberobello, Lecce e Otranto. Saída 19/04/2027 com guia desde o Brasil.",
    heroAlt: "Vila colorida da Costa Amalfitana sobre o mar Tirreno ao amanhecer",
    lead: "12 dias pela primavera do Mezzogiorno: penhascos da Costa Amalfitana, Pompeia, os Sassi de Matera, os trulli da Puglia e o barroco de Lecce — com guia acompanhante desde o Brasil.",
    keywords: "Sul da Itália 2027, viagem em grupo Itália, Costa Amalfitana com guia brasileiro, Matera, Alberobello, Lecce, ITA Airways",
    countries: ["Itália"],
    currency: "EUR",
    prices: [["Apto triplo", "€ 4.730", "+ IOF € 112"], ["Apto duplo", "€ 4.757", "+ IOF € 113"], ["Apto individual", "€ 5.328", "+ IOF € 131"]],
    fromPrice: "€ 4.730",
    priceNumber: "4757.00",
    taxes: "EUR 187",
    flights: [
      ["Ida", "São Paulo (GRU) → Roma (FCO) → Nápoles (NAP)", "19/04 · AZ 0679 às 18h50 — conexão em 20/04 para Nápoles"],
      ["Volta", "Brindisi (BDS) → Roma (FCO) → São Paulo (GRU)", "29/04 · AZ 1622 às 15h15 — conexão AZ 0674, chegada em 30/04"],
    ],
    hotels: [["Sorrento", "Michelangelo"], ["Matera", "Unahotels MH Matera"], ["Bari", "Vittoria Park"], ["Lecce", "Hilton Garden Inn"]],
    itinerary: [
      ["Dia 1 — 19/04 (seg)", "São Paulo → Roma", ["Apresentação em Guarulhos com o guia acompanhante", "Voo ITA AZ 0679 às 18h50 · pernoite a bordo"]],
      ["Dia 2 — 20/04 (ter)", "Roma → Sorrento", ["Chegada a Roma e conexão para Nápoles", "Traslado a Sorrento e check-in"]],
      ["Dia 3 — 21/04 (qua)", "Positano e Amalfi", ["Dia na Costa Amalfitana: Positano e Amalfi", "Catedral de Santo André e vilarejos suspensos sobre o mar", "Almoço livre (não incluso)"]],
      ["Dia 4 — 22/04 (qui)", "Sorrento · Pompeia", ["Sítio arqueológico de Pompeia com guia local", "Centro histórico de Sorrento e mirantes sobre o golfo"]],
      ["Dia 5 — 23/04 (sex)", "Sorrento → Matera", ["Travessia pelo interior da Basilicata", "Chegada a Matera e primeiro contato com os Sassi"]],
      ["Dia 6 — 24/04 (sáb)", "Matera → Bari", ["Visita guiada aos Sassi de Matera, Patrimônio da UNESCO", "Casa-gruta e igrejas rupestres", "Seguimos para Bari"]],
      ["Dia 7 — 25/04 (dom)", "Bari · Polignano a Mare", ["Cidade velha de Bari e Basílica de São Nicolau", "Polignano a Mare, com caminhada à beira-mar", "Almoço livre (não incluso)"]],
      ["Dia 8 — 26/04 (seg)", "Bari · Alberobello → Lecce", ["Alberobello e seus trulli de pedra", "Chegada a Lecce, a “Florença do Sul”"]],
      ["Dia 9 — 27/04 (ter)", "Lecce · Otranto", ["Barroco leccese: Basílica de Santa Cruz e anfiteatro romano", "Otranto e o castelo aragonês", "Almoço livre (não incluso)"]],
      ["Dia 10 — 28/04 (qua)", "Lecce · Gallipoli e Santa Maria di Leuca", ["Gallipoli, famosa pelos frutos do mar (almoço não incluso)", "Santa Maria di Leuca, onde Adriático e Jônico se encontram", "Tempo livre nas praias da região"]],
      ["Dia 11 — 29/04 (qui)", "Lecce → Brindisi → Roma → São Paulo", ["Traslado ao aeroporto de Brindisi", "Voo AZ 1622 às 15h15 e conexão AZ 0674 · pernoite a bordo"]],
      ["Dia 12 — 30/04 (sex)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Nápoles e Brindisi / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde São Paulo",
      "Traslados com assistência em português ou espanhol",
      "Visitas com guia local conforme o roteiro, incluindo Pompeia e os Sassi de Matera",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["Como é o clima em abril no sul da Itália?", "É primavera: em geral entre 14°C e 22°C, com dias longos e vegetação florida. Leve calçado confortável, agasalho leve e capa de chuva compacta."]],
  },
  {
    comp: "GrupoLagosChilenosAbril2027",
    slug: "lagos-chilenos-abril-2027",
    img: "grupo-lagos-chilenos-maio-2027.jpg",
    name: "Grupo Lagos Chilenos · 19 de abril de 2027 — Create Travel",
    h1: "Lagos Chilenos: vulcões, lagos e herança alemã",
    dates: "19/04 a 26/04/2027",
    datesLong: "19 a 26 de abril de 2027",
    days: 8,
    airline: "LATAM",
    seoTitle: "Lagos Chilenos Abril 2027 com Guia desde o Brasil | Create",
    seoDesc: "8 dias entre Santiago, vinícola no Vale do Maipo, Puerto Varas, navegação até Peulla, Petrohué e Frutillar. Saída 19/04/2027 com guia desde o Brasil.",
    heroAlt: "Vulcão nevado refletido em lago azul no sul do Chile",
    lead: "8 dias no outono chileno: Santiago, vinhos do Vale do Maipo, Puerto Varas, navegação até Peulla, as Cataratas de Petrohué e a Frutillar alemã — com guia desde o Brasil.",
    keywords: "Lagos Chilenos 2027, Puerto Varas, Peulla, Petrohué, Frutillar, viagem em grupo Chile, LATAM",
    countries: ["Chile"],
    currency: "USD",
    prices: [["Apto triplo", "US$ 2.678", "+ IOF US$ 71"], ["Apto duplo", "US$ 2.698", "+ IOF US$ 72"], ["Apto individual", "US$ 3.340", "+ IOF US$ 93"]],
    fromPrice: "US$ 2.678",
    priceNumber: "2698.00",
    taxes: "USD 160",
    flights: [
      ["Ida", "São Paulo (GRU) → Santiago (SCL)", "19/04 · LATAM 753"],
      ["Volta", "Puerto Montt (PMC) → Santiago (SCL) → São Paulo (GRU)", "26/04 · LATAM 62 às 09h51 e LATAM 714 às 15h55"],
    ],
    hotels: [["Santiago", "Almacruz"], ["Puerto Varas", "Cabañas del Lago"]],
    itinerary: [
      ["Dia 1 — 19/04 (seg)", "São Paulo → Santiago", ["Encontro em Guarulhos com o guia acompanhante", "Voo LATAM 753 e traslado ao hotel em Santiago"]],
      ["Dia 2 — 20/04 (ter)", "Santiago · Vale do Maipo", ["Vinícola no coração do Vale do Maipo, com degustação incluída", "Tarde livre no centro de Santiago"]],
      ["Dia 3 — 21/04 (qua)", "Santiago", ["City tour pelos cerros e pela Plaza de Armas", "Mirantes da cidade e tempo livre (almoço não incluso)"]],
      ["Dia 4 — 22/04 (qui)", "Santiago → Puerto Montt → Puerto Varas", ["Voo LATAM 311 para Puerto Montt", "Traslado a Puerto Varas, às margens do Lago Llanquihue"]],
      ["Dia 5 — 23/04 (sex)", "Puerto Varas", ["Passeio pelo centro e Plaza de Armas", "Paisagens dos vulcões Osorno e Calbuco"]],
      ["Dia 6 — 24/04 (sáb)", "Puerto Varas · Peulla", ["Navegação pelo Lago Todos los Santos até Peulla", "Parque Nacional Vicente Pérez Rosales", "Almoço livre (não incluso)"]],
      ["Dia 7 — 25/04 (dom)", "Puerto Varas · Frutillar", ["Cataratas de Petrohué", "Frutillar e sua herança alemã, com jardins e Teatro del Lago"]],
      ["Dia 8 — 26/04 (seg)", "Puerto Montt → Santiago → São Paulo", ["Traslado ao aeroporto e voo LATAM 62 às 09h51", "Conexão LATAM 714 às 15h55 · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Santiago / Puerto Montt / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil",
      "Traslados com assistência em português ou espanhol",
      "Entradas: vinícola com degustação em Santiago e Parque Nacional Vicente Pérez Rosales",
      "Navegação até Peulla",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional GTA FLOT 75 de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["Preciso de visto para o Chile?", "Não. Brasileiros entram com passaporte ou RG original em bom estado e emitido há menos de dez anos."], ["Como é o clima em abril no sul do Chile?", "É outono: dias frescos, entre 6°C e 17°C, com chuvas possíveis. Leve casaco corta-vento impermeável e calçado fechado."]],
  },
  {
    comp: "GrupoSiciliaMaltaMaio2027",
    slug: "sicilia-malta-maio-2027",
    img: "grupo-sicilia-malta-2027.jpg",
    name: "Grupo Sicília & Malta · 14 de maio de 2027 — Create Travel",
    h1: "Sicília & Malta: fortalezas, barroco e o Etna",
    dates: "14/05 a 26/05/2027",
    datesLong: "14 a 26 de maio de 2027",
    days: 13,
    airline: "ITA Airways",
    seoTitle: "Sicília e Malta Maio 2027 com Guia desde o Brasil | Create",
    seoDesc: "13 dias por Valletta, Gozo, Ragusa, Modica, Noto, Siracusa, Etna, Taormina, Palermo, Monreale e Agrigento. Saída 14/05/2027 com guia desde o Brasil.",
    heroAlt: "Porto histórico de Malta com fortificações de pedra ao pôr do sol",
    lead: "13 dias entre as fortalezas de Malta, o barroco siciliano da UNESCO, o Monte Etna, Taormina e o Vale dos Templos — com guia acompanhante desde o Brasil.",
    keywords: "Sicília e Malta maio 2027, viagem em grupo Sicília, Malta com guia brasileiro, Vale dos Templos, Monte Etna, Taormina, ITA Airways",
    countries: ["Itália", "Malta"],
    currency: "EUR",
    prices: [["Apto triplo", "€ 5.657", "+ IOF € 176"], ["Apto duplo", "€ 5.673", "+ IOF € 177"], ["Apto individual", "€ 6.897", "+ IOF € 216"]],
    fromPrice: "€ 5.657",
    priceNumber: "5673.00",
    taxes: "EUR 190",
    flights: [
      ["Ida", "São Paulo (GRU) → Roma (FCO) → Malta (MLA)", "14/05 · voo ITA para Roma — 15/05 · AZ 884 às 17h, chegada a Malta"],
      ["Volta", "Palermo (PMO) → Roma (FCO) → São Paulo (GRU)", "25/05 · AZ 1792 às 15h10 e conexão AZ 674, chegada em 26/05"],
    ],
    hotels: [["Malta", "Waterfront"], ["Ragusa", "Mediterraneo Palace"], ["Letojanni", "Caparena Taormina"], ["Palermo", "Mercure Palermo"]],
    itinerary: [
      ["Dia 1 — 14/05 (sex)", "São Paulo → Roma", ["Apresentação em Guarulhos e embarque com o guia acompanhante", "Pernoite a bordo"]],
      ["Dia 2 — 15/05 (sáb)", "Roma → Malta", ["Chegada a Roma e conexão AZ 884 às 17h", "Recepção em Malta e traslado ao hotel"]],
      ["Dia 3 — 16/05 (dom)", "Malta · Valletta e Três Cidades", ["Valletta: Jardins Upper Barrakka e Co-catedral de São João", "Cospicua, Vittoriosa e Senglea, com passeio em barco tradicional", "Almoço incluído (sem bebidas)"]],
      ["Dia 4 — 17/05 (seg)", "Malta · Ilha de Gozo", ["Ferry a Gozo e visita a Victoria com sua Cidadela", "Baía de Xlendi e formações de Dwejra", "Tarde livre"]],
      ["Dia 5 — 18/05 (ter)", "Malta → Ragusa (Sicília)", ["Ferry até Pozzallo, no sul da Sicília", "Traslado a Ragusa e check-in"]],
      ["Dia 6 — 19/05 (qua)", "Ragusa · Modica · Scicli", ["Ragusa Ibla e sua arquitetura barroca", "Modica, do chocolate artesanal, e Scicli", "Almoço livre (não incluso)"]],
      ["Dia 7 — 20/05 (qui)", "Ragusa · Noto · Siracusa → Taormina", ["Noto, capital do barroco siciliano", "Parque Arqueológico de Siracusa e ilha de Ortigia", "Hospedagem em Letojanni"]],
      ["Dia 8 — 21/05 (sex)", "Taormina · Monte Etna", ["Crateras Silvestri, a cerca de 1.900 metros", "Taormina e o Teatro Greco-Romano"]],
      ["Dia 9 — 22/05 (sáb)", "Taormina · Savoca · Cefalù → Palermo", ["Forza d'Agrò e Savoca, cenários de O Poderoso Chefão", "Cefalù e sua catedral normanda", "Seguimos para Palermo"]],
      ["Dia 10 — 23/05 (dom)", "Palermo · Monreale", ["Palácio dos Normandos e Capela Palatina", "Quattro Canti e Catedral de Palermo", "Monreale: catedral e claustro dos beneditinos"]],
      ["Dia 11 — 24/05 (seg)", "Palermo · Agrigento", ["Vale dos Templos: Juno, Concórdia, Hércules e Castor e Pólux", "Almoço e tarde livres (não inclusos)"]],
      ["Dia 12 — 25/05 (ter)", "Palermo → Roma → São Paulo", ["Traslado ao aeroporto e voo AZ 1792 às 15h10", "Conexão AZ 674 · pernoite a bordo"]],
      ["Dia 13 — 26/05 (qua)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Malta e Palermo / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil",
      "Traslados com assistência em português ou espanhol",
      "Bilhetes de ferry Malta–Pozzallo em classe econômica",
      "Entradas: Co-catedral de São João, passeio de barco tradicional, ferry a Gozo, Parque Arqueológico de Siracusa, Crateras Silvestri, Teatro Grego de Taormina, Catedral e Claustro de Monreale e Vale dos Templos",
      "1 almoço em Malta (sem bebidas)",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["A travessia entre Malta e a Sicília é de avião?", "Não. É feita de ferry entre Malta e Pozzallo, com bilhete já incluído em classe econômica."]],
  },
  {
    comp: "GrupoEscandinaviaAbril2027",
    slug: "escandinavia-abril-2027",
    img: "grupo-escandinavia-maio-2027.jpg",
    name: "Grupo Escandinávia · 26 de abril de 2027 — Create Travel",
    h1: "Escandinávia: Copenhague, fiordes e Estocolmo",
    dates: "26/04 a 08/05/2027",
    datesLong: "26 de abril a 08 de maio de 2027",
    days: 13,
    airline: "TAP Air Portugal",
    seoTitle: "Escandinávia Abril 2027 com Guia desde o Brasil | Create",
    seoDesc: "13 dias entre Copenhague, ferry noturno para Oslo, Geilo, Bergen, Sognefjord, Balestrand e Estocolmo. Saída 26/04/2027 com guia desde o Brasil.",
    heroAlt: "Fiorde norueguês entre montanhas com casas de madeira à beira da água",
    lead: "13 dias pela primavera nórdica: Copenhague, ferry noturno até Oslo, Geilo, Bergen, o Sognefjord, Balestrand e Estocolmo — com guia acompanhante desde o Brasil.",
    keywords: "Escandinávia 2027, fiordes noruegueses, Copenhague, Bergen, Estocolmo, viagem em grupo Escandinávia, TAP",
    countries: ["Dinamarca", "Noruega", "Suécia"],
    currency: "EUR",
    prices: [["Apto triplo", "€ 4.988", "+ IOF € 128"], ["Apto duplo", "€ 5.099", "+ IOF € 132"], ["Apto individual", "€ 6.047", "+ IOF € 161"]],
    fromPrice: "€ 4.988",
    priceNumber: "5099.00",
    taxes: "EUR 188",
    flights: [
      ["Ida", "São Paulo (GRU) → Lisboa (LIS) → Copenhague (CPH)", "26/04 · TAP 82 às 15h30 — 27/04 · TAP 754 às 12h10"],
      ["Volta", "Estocolmo (ARN) → Lisboa (LIS) → São Paulo (GRU)", "07/05 · TAP 781 às 14h10 e TAP 87 às 23h55, chegada em 08/05"],
    ],
    hotels: [["Copenhague", "Radisson Blu Scandinavia"], ["Copenhague–Oslo", "Go Nordic Cruiseline"], ["Geilo", "Dr Holms"], ["Bergen", "Zander K"], ["Balestrand", "Kvikne's"], ["Oslo", "Radisson Blu Oslo"], ["Estocolmo", "Elite Eden Park"]],
    itinerary: [
      ["Dia 1 — 26/04 (seg)", "São Paulo → Lisboa", ["Apresentação em Guarulhos e voo TAP 82 às 15h30", "Pernoite a bordo"]],
      ["Dia 2 — 27/04 (ter)", "Lisboa → Copenhague", ["Conexão TAP 754 às 12h10", "Recepção em Copenhague e traslado ao hotel"]],
      ["Dia 3 — 28/04 (qua)", "Copenhague", ["Nyhavn, Amalienborg e a Pequena Sereia", "Tempo livre no centro histórico (almoço não incluso)"]],
      ["Dia 4 — 29/04 (qui)", "Copenhague → Oslo", ["Manhã livre na capital dinamarquesa", "Embarque no ferry noturno para Oslo, com jantar incluído a bordo"]],
      ["Dia 5 — 30/04 (sex)", "Oslo → Geilo", ["Chegada a Oslo e panorâmica pela cidade", "Seguimos para Geilo, na montanha"]],
      ["Dia 6 — 01/05 (sáb)", "Geilo → Bergen", ["Paisagens de cascatas e planaltos noruegueses", "Chegada a Bergen e ao bairro hanseático de Bryggen"]],
      ["Dia 7 — 02/05 (dom)", "Bergen → Balestrand", ["Ferry pelo Sognefjord, o maior fiorde da Noruega", "Hospedagem em Balestrand"]],
      ["Dia 8 — 03/05 (seg)", "Balestrand → Oslo", ["Igreja de madeira de Borgund", "Travessia até Oslo"]],
      ["Dia 9 — 04/05 (ter)", "Oslo", ["Museu Fram e o navio dos exploradores polares", "Parque Frogner e Prefeitura de Oslo"]],
      ["Dia 10 — 05/05 (qua)", "Oslo → Estocolmo", ["Travessia pela Suécia com paradas em rota", "Chegada a Estocolmo"]],
      ["Dia 11 — 06/05 (qui)", "Estocolmo", ["Gamla Stan, Casa dos Nobres e Museu Vasa", "Tarde livre (almoço não incluso)"]],
      ["Dia 12 — 07/05 (sex)", "Estocolmo → Lisboa", ["Traslado ao aeroporto e voo TAP 781 às 14h10", "Conexão TAP 87 às 23h55 · pernoite a bordo"]],
      ["Dia 13 — 08/05 (sáb)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Copenhague e Estocolmo / São Paulo via Lisboa, em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil",
      "Ferry noturno Copenhague–Oslo em cabine externa",
      "Ferry pelo Sognefjord",
      "3 jantares incluídos, sendo um a bordo do ferry",
      "Traslados e visitas com guia local conforme o roteiro",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["Como é o clima em abril e maio na Escandinávia?", "É primavera: em geral entre 5°C e 16°C, mais frio nos fiordes e nas montanhas. Leve segunda pele, casaco impermeável, gorro e luvas finas."]],
  },
  {
    comp: "GrupoTurquiaMaio2027",
    slug: "turquia-maio-2027",
    img: "grupo-turquia-junho-2027.jpg",
    name: "Grupo Turquia · 15 de maio de 2027 — Create Travel",
    h1: "Turquia: Istambul, Capadócia, Pamukkale e Éfeso",
    dates: "15/05 a 28/05/2027",
    datesLong: "15 a 28 de maio de 2027",
    days: 14,
    airline: "Turkish Airlines",
    seoTitle: "Turquia Maio 2027 com Guia desde o Brasil | Create Travel",
    seoDesc: "14 dias por Istambul, Ancara, Capadócia, Pamukkale, Éfeso, Izmir e Bursa. Saída 15/05/2027 com guia acompanhante desde o Brasil.",
    heroAlt: "Vales da Capadócia ao amanhecer com formações rochosas e balões ao fundo",
    lead: "14 dias entre dois continentes: Hagia Sophia e o Bósforo, os vales da Capadócia, os terraços brancos de Pamukkale e as ruínas de Éfeso — com guia desde o Brasil.",
    keywords: "Turquia 2027, viagem em grupo Turquia, Capadócia com guia brasileiro, Pamukkale, Éfeso, Istambul, Turkish Airlines",
    countries: ["Turquia"],
    currency: "EUR",
    prices: [["Apto triplo", "€ 3.958", "+ IOF € 94"], ["Apto duplo", "€ 3.977", "+ IOF € 95"], ["Apto individual", "€ 4.898", "+ IOF € 124"]],
    fromPrice: "€ 3.958",
    priceNumber: "3977.00",
    taxes: "EUR 711",
    flights: [
      ["Ida", "São Paulo (GRU) → Istambul (IST)", "15/05 · TK 216 às 16h35"],
      ["Volta", "Istambul (IST) → São Paulo (GRU)", "27/05 · TK 215 às 20h25, chegada em 28/05"],
    ],
    hotels: [["Istambul", "Nippon Taksim"], ["Ancara", "New Park Ankara"], ["Capadócia", "Perissia"], ["Pamukkale", "Colossae Thermal & Spa"], ["Izmir", "Kordon Çankaya"]],
    itinerary: [
      ["Dia 1 — 15/05 (sáb)", "São Paulo → Istambul", ["Apresentação em Guarulhos e voo TK 216 às 16h35", "Pernoite a bordo"]],
      ["Dia 2 — 16/05 (dom)", "Istambul", ["Chegada, traslado ao hotel e Avenida Istiklal", "Grand Bazar, o primeiro shopping coberto do mundo"]],
      ["Dia 3 — 17/05 (seg)", "Istambul", ["Hagia Sophia, Mesquita Azul e Hipódromo Romano", "Cisterna da Basílica e Bazar das Especiarias"]],
      ["Dia 4 — 18/05 (ter)", "Istambul", ["Palácio Topkapi e seus tesouros imperiais", "Passeio pelo Bósforo entre Europa e Ásia"]],
      ["Dia 5 — 19/05 (qua)", "Istambul → Ancara", ["Travessia pela Anatólia com paradas em rota", "Chegada a Ancara"]],
      ["Dia 6 — 20/05 (qui)", "Ancara → Capadócia", ["Lago Salgado e caravançarás da Rota da Seda", "Castelo de Üçhisar ao chegar à Capadócia"]],
      ["Dia 7 — 21/05 (sex)", "Capadócia", ["Vales de Göreme com igrejas rupestres e afrescos", "Cidade subterrânea e oficinas de cerâmica e tapetes", "Opcional (não incluso): voo de balão ao amanhecer"]],
      ["Dia 8 — 22/05 (sáb)", "Capadócia → Pamukkale", ["Travessia pelo interior da Turquia", "Chegada a Pamukkale e hospedagem termal"]],
      ["Dia 9 — 23/05 (dom)", "Pamukkale", ["Terraços brancos de travertino e ruínas de Hierápolis", "Museu arqueológico local"]],
      ["Dia 10 — 24/05 (seg)", "Pamukkale → Éfeso → Izmir", ["Éfeso: Biblioteca de Celso e Teatro Romano", "Casa da Virgem Maria", "Chegada a Izmir"]],
      ["Dia 11 — 25/05 (ter)", "Izmir → Bursa → Istambul", ["Bursa, primeira capital otomana, e a Mesquita Verde", "Retorno a Istambul"]],
      ["Dia 12 — 26/05 (qua)", "Istambul", ["Dia livre para bairros, compras e cafés (refeições não inclusas)"]],
      ["Dia 13 — 27/05 (qui)", "Istambul → São Paulo", ["Traslado ao aeroporto e voo TK 215 às 20h25", "Pernoite a bordo"]],
      ["Dia 14 — 28/05 (sex)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Istambul / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil e guias locais no destino",
      "Traslados e visitas conforme o roteiro, com entradas incluídas",
      "2 almoços e 6 jantares (sem bebidas)",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraNotIncluded: ["Gorjetas locais obrigatórias de US$ 50 por pessoa", "Voo de balão na Capadócia"],
    extraFaqs: [["O voo de balão na Capadócia está incluído?", "Não. É uma experiência opcional, contratada no destino conforme as condições de vento e horário de operação."]],
  },
  {
    comp: "GrupoCaucasoMaio2027",
    slug: "caucaso-maio-2027",
    img: "grupo-caucaso-junho-2027.jpg",
    name: "Grupo Cáucaso · 24 de maio de 2027 — Create Travel",
    h1: "Cáucaso: Armênia, Geórgia e Azerbaijão",
    dates: "24/05 a 07/06/2027",
    datesLong: "24 de maio a 07 de junho de 2027",
    days: 15,
    airline: "Turkish Airlines",
    seoTitle: "Cáucaso Maio 2027 com Guia desde o Brasil | Create Travel",
    seoDesc: "15 dias por Yerevan, mosteiros milenares, Lago Sevan, Tbilisi, Mtskheta, Baku e Gobustan. Saída 24/05/2027 com guia acompanhante desde o Brasil.",
    heroAlt: "Mosteiro de pedra em desfiladeiro montanhoso no Cáucaso",
    lead: "15 dias entre mosteiros escavados na rocha, aldeias de montanha, a Tbilisi das termas e a Baku do Cáspio — com guia acompanhante desde o Brasil.",
    keywords: "Cáucaso 2027, Armênia Geórgia Azerbaijão, Yerevan, Tbilisi, Baku, viagem em grupo Cáucaso, Turkish Airlines",
    countries: ["Armênia", "Geórgia", "Azerbaijão"],
    currency: "USD",
    prices: [["Apto triplo", "US$ 5.467", "+ IOF US$ 143"], ["Apto duplo", "US$ 5.498", "+ IOF US$ 144"], ["Apto individual", "US$ 6.245", "+ IOF US$ 168"]],
    fromPrice: "US$ 5.467",
    priceNumber: "5498.00",
    taxes: "USD 598",
    flights: [
      ["Ida", "São Paulo (GRU) → Istambul (IST) → Yerevan (EVN)", "24/05 · TK 216 às 16h35 — 25/05 · TK 358 às 21h45"],
      ["Volta", "Baku (GYD) → Istambul (IST) → São Paulo (GRU)", "06/06 · voo TK para Istambul e TK 215 às 20h25, chegada em 07/06"],
    ],
    hotels: [["Yerevan", "Yerevan Grand Ani"], ["Tbilisi", "Philarmonic by Mercure"], ["Baku", "Baku Midtown Hotel"]],
    itinerary: [
      ["Dia 1 — 24/05 (seg)", "São Paulo → Istambul", ["Apresentação em Guarulhos e voo TK 216 às 16h35", "Pernoite a bordo"]],
      ["Dia 2 — 25/05 (ter)", "Istambul → Yerevan", ["Conexão em Istambul e voo TK 358 às 21h45", "Chegada a Yerevan e traslado ao hotel"]],
      ["Dia 3 — 26/05 (qua)", "Yerevan", ["Praça da República, Cascade e Matenadaran", "Memorial Tsitsernakaberd"]],
      ["Dia 4 — 27/05 (qui)", "Yerevan · Garni e Geghard", ["Templo helenístico de Garni", "Mosteiro de Geghard, escavado na rocha"]],
      ["Dia 5 — 28/05 (sex)", "Yerevan · Khor Virap e Noravank", ["Mosteiro de Khor Virap, com o Monte Ararat ao fundo", "Desfiladeiro e mosteiro de Noravank"]],
      ["Dia 6 — 29/05 (sáb)", "Yerevan · Sevan · Dilijan · Haghpat", ["Península do Lago Sevan e Mosteiro Sevanavank", "Dilijan e o Mosteiro medieval de Haghpat"]],
      ["Dia 7 — 30/05 (dom)", "Tbilisi", ["Travessia até a Geórgia e chegada a Tbilisi", "Cidade antiga, termas de Abanotubani e fortaleza Narikala"]],
      ["Dia 8 — 31/05 (seg)", "Tbilisi · Mtskheta e Uplistsikhe", ["Igreja de Jvari e Catedral Svetitskhoveli, em Mtskheta", "Uplistsikhe, a cidade-caverna"]],
      ["Dia 9 — 01/06 (ter)", "Tbilisi", ["Museu Nacional e avenida Rustaveli", "Tempo livre (almoço não incluso)"]],
      ["Dia 10 — 02/06 (qua)", "Tbilisi → Baku", ["Travessia até o Azerbaijão", "Chegada a Baku, às margens do Cáspio"]],
      ["Dia 11 — 03/06 (qui)", "Baku · Ateshgah", ["Templo do Fogo de Ateshgah", "Cidade velha, Palácio dos Shirvanshahs e Pista dos Mártires"]],
      ["Dia 12 — 04/06 (sex)", "Baku · Gobustan", ["Petróglifos de Gobustan, Patrimônio da UNESCO", "Vulcões de lama do semideserto"]],
      ["Dia 13 — 05/06 (sáb)", "Baku", ["Centro Heydar Aliyev e boulevard do Cáspio", "Tempo livre (refeições não inclusas)"]],
      ["Dia 14 — 06/06 (dom)", "Baku → Istambul → São Paulo", ["Traslado ao aeroporto e conexão em Istambul", "Voo TK 215 às 20h25 · pernoite a bordo"]],
      ["Dia 15 — 07/06 (seg)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Istambul / Yerevan e Baku / Istambul / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil",
      "Traslados e visitas com guia local conforme o roteiro",
      "Entradas: Garni, Geghard, Khor Virap, Noravank, Sevanavank, Haghpat, Jvari, Svetitskhoveli, Uplistsikhe, Ateshgah e Gobustan",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["Brasileiros precisam de visto para o Cáucaso?", "Armênia e Geórgia não exigem visto para turismo. Para o Azerbaijão é necessário visto eletrônico, e orientamos cada viajante no processo."]],
  },
  {
    comp: "GrupoAfricaDoSulMaio2027",
    slug: "africa-do-sul-maio-2027",
    img: "grupo-africa-do-sul-carnaval-2027.jpg",
    name: "Grupo África do Sul · 24 de maio de 2027 — Create Travel",
    h1: "África do Sul: safári no Kruger e Cidade do Cabo",
    dates: "24/05 a 01/06/2027",
    datesLong: "24 de maio a 01 de junho de 2027",
    days: 9,
    airline: "South African Airways",
    seoTitle: "África do Sul Maio 2027 com Guia desde o Brasil | Create",
    seoDesc: "9 dias entre Joanesburgo, safáris em reserva privada no Kruger e Cidade do Cabo com Table Mountain e Cabo da Boa Esperança. Saída 24/05/2027.",
    heroAlt: "Leões ao amanhecer na savana sul-africana",
    lead: "9 dias entre Joanesburgo, safáris em reserva privada na área do Kruger e a Cidade do Cabo da Table Mountain e do Cabo da Boa Esperança — com guia desde o Brasil.",
    keywords: "África do Sul 2027, safári Kruger, Cidade do Cabo, viagem em grupo África do Sul, South African Airways",
    countries: ["África do Sul"],
    currency: "USD",
    prices: [["Apto triplo", "US$ 4.968", "+ IOF US$ 128"], ["Apto duplo", "US$ 4.987", "+ IOF US$ 129"], ["Apto individual", "US$ 5.699", "+ IOF US$ 151"]],
    fromPrice: "US$ 4.968",
    priceNumber: "4987.00",
    taxes: "USD 271",
    flights: [
      ["Ida", "São Paulo (GRU) → Joanesburgo (JNB)", "24/05 · SA 223"],
      ["Volta", "Cidade do Cabo (CPT) → Joanesburgo (JNB) → São Paulo (GRU)", "01/06 · conexão SA até Joanesburgo e voo de retorno a Guarulhos"],
    ],
    hotels: [["Joanesburgo", "Onomo Sandton"], ["Área do Kruger Park", "Shishangeni Main Lodge"], ["Cidade do Cabo", "Southern Sun Waterfront"]],
    itinerary: [
      ["Dia 1 — 24/05 (seg)", "São Paulo → Joanesburgo", ["Apresentação em Guarulhos e voo SA 223", "Pernoite a bordo"]],
      ["Dia 2 — 25/05 (ter)", "Joanesburgo", ["Chegada, recepção e traslado ao hotel", "Panorâmica pela cidade e restante do dia livre"]],
      ["Dia 3 — 26/05 (qua)", "Joanesburgo → área do Kruger", ["Travessia até a reserva privada, com almoço tipo piquenique incluído", "Primeiro safári ao fim da tarde"]],
      ["Dia 4 — 27/05 (qui)", "Reserva privada no Kruger", ["Safáris ao amanhecer e no fim da tarde em veículos abertos", "Pensão completa no lodge (sem bebidas)"]],
      ["Dia 5 — 28/05 (sex)", "Kruger → Cidade do Cabo", ["Safári matinal e voo SA 375 para a Cidade do Cabo", "Traslado ao hotel na região do Waterfront"]],
      ["Dia 6 — 29/05 (sáb)", "Cidade do Cabo", ["Table Mountain, conforme condições climáticas", "Company's Garden e centro histórico"]],
      ["Dia 7 — 30/05 (dom)", "Cidade do Cabo · Cabo da Boa Esperança", ["Reserva Natural do Cabo da Boa Esperança e Cape Point", "Colônia de pinguins em Boulders Beach", "Almoço livre (não incluso)"]],
      ["Dia 8 — 31/05 (seg)", "Cidade do Cabo", ["Dia livre", "Opcional (não incluso): rota dos vinhos de Stellenbosch e Franschhoek"]],
      ["Dia 9 — 01/06 (ter)", "Cidade do Cabo → São Paulo", ["Traslado ao aeroporto e conexão via Joanesburgo", "Voo de retorno a Guarulhos · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Joanesburgo / Cidade do Cabo / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hospedagem em hotéis de primeira categoria e lodge, com café da manhã",
      "Guia acompanhante desde São Paulo",
      "Traslados com assistência",
      "Safáris em veículo aberto na área do Kruger Park",
      "Almoço tipo piquenique em rota e pensão completa na área do Kruger (sem bebidas)",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["Preciso de vacina para entrar na África do Sul?", "Sim, a vacina contra febre amarela é obrigatória. O passaporte deve ter validade mínima de seis meses a partir da data de retorno."], ["Crianças podem participar do safári?", "A idade mínima é 6 anos e a participação está sujeita à avaliação do guia no destino."]],
  },
  {
    comp: "GrupoMendozaCarnaval2027",
    slug: "mendoza-carnaval-2027",
    img: "grupo-mendoza-reveillon-29-dezembro.jpg",
    name: "Grupo Mendoza · Carnaval 2027 — Create Travel",
    h1: "Mendoza no Carnaval: vinhedos, Andes e vindima",
    dates: "04 a 09/02/2027",
    datesLong: "04 a 09 de fevereiro de 2027",
    days: 6,
    airline: "GOL",
    seoTitle: "Mendoza Carnaval 2027 com Guia desde o Brasil | Create",
    seoDesc: "6 dias entre vinhedos, aula de empanadas na Santa Julia, Alta Montanha com Aconcágua e três vinícolas no Vale do Uco. Saída 04/02/2027.",
    heroAlt: "Vinhedos de Mendoza com a Cordilheira dos Andes ao fundo",
    lead: "6 dias no início da vindima: vinícola orgânica Santa Julia com aula de empanadas, Alta Montanha até o Aconcágua e três vinícolas no Vale do Uco — com guia desde o Brasil.",
    keywords: "Mendoza Carnaval 2027, vindima Mendoza, Vale do Uco, Aconcágua, viagem em grupo Argentina, GOL",
    countries: ["Argentina"],
    currency: "USD",
    prices: [["Apto triplo", "US$ 2.778", "+ IOF US$ 67"], ["Apto duplo", "US$ 2.798", "+ IOF US$ 68"], ["Apto individual", "US$ 3.276", "+ IOF US$ 84"]],
    fromPrice: "US$ 2.778",
    priceNumber: "2798.00",
    taxes: "USD 168",
    flights: [
      ["Ida", "São Paulo (GRU) → Mendoza (MDZ)", "04/02 · GOL 7486 às 08h55, chegada às 12h55"],
      ["Volta", "Mendoza (MDZ) → São Paulo (GRU)", "09/02 · GOL 7487 às 13h50, chegada às 17h20"],
    ],
    hotels: [["Mendoza", "Amérian Mendoza"]],
    itinerary: [
      ["Dia 1 — 04/02 (qui)", "São Paulo → Mendoza", ["Apresentação em Guarulhos e voo GOL 7486 às 08h55", "Recepção e traslado ao hotel; apartamentos a partir das 15h", "Restante do dia livre"]],
      ["Dia 2 — 05/02 (sex)", "Mendoza · Bodega Santa Julia", ["Visita à maior produtora de vinhos orgânicos da Argentina", "Aula de culinária de empanadas argentinas", "Almoço incluído, harmonizado com vinhos da casa"]],
      ["Dia 3 — 06/02 (sáb)", "Mendoza · city tour", ["Manhã livre para descanso", "Cidade antiga, Praça da Independência e rua Emilio Civit", "Parque General San Martín, Cerro de la Gloria e o anfiteatro da Vindima"]],
      ["Dia 4 — 07/02 (dom)", "Alta Montanha e Aconcágua", ["Rota Nacional 7 até a Cordilheira dos Andes", "Represa Potrerillos, Uspallata, Ponte do Inca e mirante do Aconcágua", "Almoço crioulo incluído no restaurante Valle Andino"]],
      ["Dia 5 — 08/02 (seg)", "Vale do Uco", ["Três vinícolas de altitude com tours e degustações", "Almoço de três passos incluído, harmonizado com vinhos selecionados"]],
      ["Dia 6 — 09/02 (ter)", "Mendoza → São Paulo", ["Apartamentos até às 12h e traslado ao aeroporto", "Voo GOL 7487 às 13h50 · chegada às 17h20 e fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Mendoza / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil",
      "Traslados com assistência em português ou espanhol",
      "Visitas com guia local: Bodega Santa Julia, city tour, Alta Montanha e Vale do Uco com três vinícolas",
      "Entradas conforme a programação",
      "3 almoços (sem bebidas)",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional GTA FLOT 75 de US$ 75.000",
      "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["Preciso de passaporte para a Argentina?", "Não é obrigatório: basta passaporte ou RG original em bom estado e emitido há menos de dez anos. Visto não é necessário."], ["O que é a vindima?", "É a colheita da uva, que começa em fevereiro em Mendoza. É quando os vinhedos ganham mais movimento e a região se prepara para sua maior festa."]],
  },
  {
    comp: "GrupoChinaCoreia2027",
    slug: "china-coreia-junho-2027",
    img: "grupo-china-primavera-2027.jpg",
    name: "Grupo China & Coreia do Sul · Junho 2027 — Create Travel",
    h1: "China & Coreia do Sul: dois mundos numa só viagem",
    dates: "02/06 a 18/06/2027",
    datesLong: "02 a 18 de junho de 2027",
    days: 17,
    airline: "Ethiopian Airlines",
    seoTitle: "China e Coreia do Sul 2027 com Guia desde o Brasil | Create",
    seoDesc: "17 dias entre Pequim, Grande Muralha, Xi'an e os Guerreiros de Terracota, Xangai e Seul com DMZ e Gangnam. Saída 02/06/2027 com guia desde o Brasil.",
    heroAlt: "Grande Muralha da China serpenteando por montanhas verdes",
    lead: "17 dias da Cidade Proibida e da Grande Muralha aos Guerreiros de Terracota, ao Bund de Xangai e à Seul dos palácios e da DMZ — com guia acompanhante desde o Brasil.",
    keywords: "China e Coreia do Sul 2027, Grande Muralha, Guerreiros de Terracota, Xangai, Seul, DMZ, viagem em grupo Ásia, Ethiopian Airlines",
    countries: ["China", "Coreia do Sul"],
    currency: "USD",
    prices: [["Apto triplo", "US$ 5.978", "+ IOF US$ 175"], ["Apto duplo", "US$ 5.998", "+ IOF US$ 176"], ["Apto individual", "US$ 7.497", "+ IOF US$ 221"]],
    fromPrice: "US$ 5.978",
    priceNumber: "5998.00",
    taxes: "USD 790",
    flights: [
      ["Ida", "São Paulo (GRU) → Adis Abeba (ADD) → Pequim (PEK)", "03/06 · Ethiopian 507 às 01h45 — 04/06 · Ethiopian 604 às 01h15, chegada às 17h20"],
      ["Trecho interno", "Xangai (PVG) → Seul (ICN)", "Voo com companhia local, franquia de bagagem de 20 kg"],
    ],
    hotels: [["Pequim", "New Otani"], ["Xi'an", "Sheraton North City"], ["Xangai", "Jin Jiang Hotel"], ["Seul", "Sotetsu Splaisir Myeongdong"]],
    itinerary: [
      ["Dia 1 — 02/06 (qua)", "São Paulo", ["Apresentação em Guarulhos para encontro com o guia e procedimentos de embarque"]],
      ["Dia 2 — 03/06 (qui)", "São Paulo → Adis Abeba", ["Voo Ethiopian 507 às 01h45, chegada às 19h45", "Conexão para Pequim"]],
      ["Dia 3 — 04/06 (sex)", "Adis Abeba → Pequim", ["Voo Ethiopian 604 às 01h15, chegada a Pequim às 17h20", "Traslado ao hotel"]],
      ["Dia 4 — 05/06 (sáb)", "Pequim", ["Cidade Proibida e Praça Tian An Men", "Almoço incluído", "Templo do Céu e o Salão da Oração pelas Boas Colheitas"]],
      ["Dia 5 — 06/06 (dom)", "Pequim · Grande Muralha", ["Dia na Grande Muralha da China, com almoço incluído", "Paradas no Ninho do Pássaro e no Cubo d'Água", "Jantar de boas-vindas com Pato Laqueado de Pequim"]],
      ["Dia 6 — 07/06 (seg)", "Pequim", ["Hutongs e a vida cotidiana da capital", "Tempo livre (refeições não inclusas)"]],
      ["Dia 7 — 08/06 (ter)", "Pequim → Xi'an", ["Manhã livre; apartamentos até o meio-dia", "Trem-bala até Xi'an, a única capital murada da China"]],
      ["Dia 8 — 09/06 (qua)", "Xi'an", ["Museu dos Guerreiros e Cavalos de Terracota", "Almoço incluído", "Grande Pagoda do Ganso Selvagem e Bairro Muçulmano"]],
      ["Dia 9 — 10/06 (qui)", "Xi'an → Xangai", ["Apartamentos até o meio-dia e voo para Xangai", "Traslado ao hotel"]],
      ["Dia 10 — 11/06 (sex)", "Xangai", ["Jardim Yuyuan, de 1557, e Templo do Buda de Jade", "Calçadão da Cidade e Bund, com almoço incluído"]],
      ["Dia 11 — 12/06 (sáb)", "Xangai → Seul", ["Tempo livre em Xangai", "Voo para Seul com companhia local e traslado ao hotel"]],
      ["Dia 12 — 13/06 (dom)", "Seul", ["Palácio Gyeongbokgung e troca da guarda", "Bukchon Hanok Village e Insadong", "Almoço incluído"]],
      ["Dia 13 — 14/06 (seg)", "Seul", ["Mercados tradicionais e Myeongdong", "Tempo livre para compras (refeições não inclusas)"]],
      ["Dia 14 — 15/06 (ter)", "Seul · DMZ", ["Zona Desmilitarizada: Parque Imjingak, Terceiro Túnel de Infiltração e Observatório Dora", "Almoço incluído", "Visita sujeita a filas ou alterações por questões de segurança"]],
      ["Dia 15 — 16/06 (qua)", "Seul", ["Lotte World Tower (Seoul Sky) e Lago Seokchon", "Starfield COEX Mall com a Biblioteca Starfield e distrito de Gangnam", "Almoço em rota incluído"]],
      ["Dia 16 — 17/06 (qui)", "Seul → São Paulo", ["Traslado ao aeroporto e embarque de retorno", "Pernoite a bordo"]],
      ["Dia 17 — 18/06 (sex)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    included: [
      "Bilhete aéreo São Paulo / Pequim e Seul / São Paulo em classe econômica e trecho interno Xangai / Seul com companhia local (franquia de 20 kg)",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde São Paulo e guias locais na China e em Seul",
      "Traslados com assistência",
      "Trem-bala Pequim–Xi'an em classe econômica",
      "Visitas e entradas conforme o roteiro",
      "1 jantar de pato laqueado, 4 almoços na China e 3 almoços em Seul (sem bebidas)",
      "Serviço de rastreamento de bagagem",
      "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
      "Cartão de assistência médica internacional de US$ 75.000",
      "Seguro cancelamento de US$ 5.000 para viajantes até 85 anos",
    ],
    extraFaqs: [["Preciso de visto para China e Coreia do Sul?", "Brasileiros não precisam de visto para a China em viagens de turismo. Para a Coreia do Sul é necessária a autorização eletrônica K-ETA, e orientamos cada viajante no processo."], ["Há exigência de vacina?", "Sim, é exigido o comprovante de vacinação contra febre amarela. O passaporte deve ter validade mínima de seis meses a partir da data de retorno."]],
  },
];

const esc = (s) => s.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const baseNotIncluded = (taxes) => [
  `Taxas de embarque, aeroporto e combustível (${taxes})`,
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Refeições indicadas como não inclusas no roteiro",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const baseFaqs = (g) => [
  ["Como funciona o acompanhamento?", "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno ao Brasil. No destino, as visitas são conduzidas por guias locais."],
  ["Quais valores não estão no preço divulgado?", `Os valores por pessoa não incluem as taxas de aeroporto e combustível de ${g.taxes} nem o IOF indicado em cada categoria de apartamento.`],
  ["Como faço para reservar?", "A parte terrestre pode ser reservada com 25% de entrada e o saldo em até 9 vezes sem juros no cartão de crédito. Fale com a curadoria pelo WhatsApp para confirmar disponibilidade."],
  ["Posso viajar sozinho(a)?", "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva."],
];

const arr = (items) => items.map((i) => `    ${JSON.stringify(i)},`).join("\n");

for (const g of groups) {
  const notIncluded = [...baseNotIncluded(g.taxes), ...(g.extraNotIncluded ?? [])];
  const faqs = [...baseFaqs(g), ...(g.extraFaqs ?? [])];
  const code = `import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Check, Hotel, MapPin, Plane, Sparkles, Users, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import { buildHotelsFAQs, buildHotelsJsonLd, buildHotelsKeywords, getHotelUrl } from "@/lib/groupHotels";
import heroImg from "@/assets/${g.img}";

const CANONICAL = "/grupos/${g.slug}";
const GROUP_NAME = ${JSON.stringify(g.name)};
const whatsappParams = {
  type: "Roteiro" as const,
  name: ${JSON.stringify(`${g.h1} (saída ${g.dates.split(" a ")[0]})`)},
};

const itinerary = [
${g.itinerary.map(([day, title, points]) => `  { day: ${JSON.stringify(day)}, title: ${JSON.stringify(title)}, points: ${JSON.stringify(points)} },`).join("\n")}
];

const hotels = [
${g.hotels.map(([city, hotel]) => `  { city: ${JSON.stringify(city)}, hotel: ${JSON.stringify(hotel)} },`).join("\n")}
];

const included = [
${arr(g.included)}
];

const notIncluded = [
${arr(notIncluded)}
];

const faqs = [
${faqs.map(([q, a]) => `  { q: ${JSON.stringify(q)}, a: ${JSON.stringify(a)} },`).join("\n")}
];

const hotelsJsonLd = buildHotelsJsonLd(hotels, GROUP_NAME, CANONICAL);
const hotelsFaqs = buildHotelsFAQs(hotels, GROUP_NAME, CANONICAL);
const hotelsKeywords = buildHotelsKeywords(hotels);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": \`\${CONTACT.domain}\${CANONICAL}#trip\`,
  url: \`\${CONTACT.domain}\${CANONICAL}\`,
  name: GROUP_NAME,
  description: ${JSON.stringify(g.seoDesc)},
  image: heroImg,
  itinerary: {
    "@type": "ItemList",
    itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: \`\${item.day} — \${item.title}\` })),
  },
  offers: {
    "@type": "Offer",
    price: ${JSON.stringify(g.priceNumber)},
    priceCurrency: ${JSON.stringify(g.currency)},
    availability: "https://schema.org/LimitedAvailability",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const ${g.comp} = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title=${JSON.stringify(g.seoTitle)}
        description=${JSON.stringify(g.seoDesc)}
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsJsonLd]}
        keywords={\`${esc(g.keywords)}, \${hotelsKeywords}\`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt=${JSON.stringify(g.heroAlt)} className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Saída confirmada · Lugares limitados</div>
            <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · ${esc(g.datesLong)}</p>
            <h1 className="heading-hero text-white mb-6">${esc(g.h1)}</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">${esc(g.lead)}</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" />
              <a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted py-10 border-b border-border">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Datas", value: ${JSON.stringify(g.dates)} },
            { icon: Users, label: "Perfil", value: "Guia desde o Brasil" },
            { icon: Plane, label: "Voos", value: ${JSON.stringify(g.airline)} },
            { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
          ].map((fact) => (
            <div key={fact.label} className="flex items-start gap-3">
              <fact.icon className="text-gold flex-shrink-0" size={22} />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                <p className="font-serif font-semibold text-foreground">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p>
            <h2 className="heading-section mb-6">Voos pela ${esc(g.airline)}</h2>
            <p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p>
          </div>
          <div className="space-y-4">
${g.flights.map(([label, route, detail]) => `            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">${esc(label)}</p>
              <p className="font-serif text-lg">${esc(route)}</p>
              <p className="text-white/75 text-sm mt-1">${esc(detail)}</p>
            </div>`).join("\n")}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">${g.days} dias — dia a dia</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {itinerary.map((item, index) => (
              <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div>
                <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Hotéis previstos</p>
            <h2 className="heading-section text-foreground">Hospedagens selecionadas</h2>
            <p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hotels.map((hotel) => (
              <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card">
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  <a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial max-w-4xl text-center">
          <p className="text-caption text-gold mb-4">Investimento</p>
          <h2 className="heading-section mb-6">A partir de ${esc(g.fromPrice)} por pessoa</h2>
          <p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de ${esc(g.taxes)} em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            {[
${g.prices.map(([label, price, extra]) => `              { label: ${JSON.stringify(label)}, price: ${JSON.stringify(price)}, extra: ${JSON.stringify(extra)} },`).join("\n")}
            ].map((price) => (
              <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p>
                <p className="font-serif text-2xl font-semibold">{price.price}</p>
                <p className="text-white/70 text-xs mt-1">{price.extra}</p>
              </div>
            ))}
          </div>
          <WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" />
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div>
      </section>

      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2>
          <p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade desta saída.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a>
            <Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ${g.comp};
`;
  writeFileSync(`/dev-server/src/pages/${g.comp}.tsx`, code);
  console.log("wrote", g.comp);
}
