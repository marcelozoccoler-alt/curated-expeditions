// AUTO-GERADO a partir do catálogo Europa 2027/2028 (saídas garantidas com guia local).
// Grupos com guia local: guia acompanhante no destino, em espanhol/português conforme
// negociação, sem coordenador saindo do Brasil. Preços por pessoa em euros.

export interface LocalGuideDay {
  day: number;
  route: string;
  text: string;
}

export interface LocalGuideHotel {
  city: string;
  hotel: string;
}

export type LocalGuideCategory = "Premium" | "Primeira" | "Tudo Incluído" | "Hot Deal";

export interface LocalGuideGroup {
  slug: string;
  code: string;
  title: string;
  subtitle: string;
  /** Introdução poética (padrão editorial obrigatório em todos os grupos). */
  intro: string;
  /** Destaques do roteiro (padrão editorial obrigatório em todos os grupos). */
  highlights: string[];
  category: LocalGuideCategory;
  days: number;
  nights: number;
  /** Preço por pessoa em apto duplo, na moeda do circuito (euro por padrão). */
  priceEur: number;
  /** Moeda do preço. Padrão: EUR. */
  currency?: "EUR" | "USD";
  /** Observação adicional sobre o preço (ex.: equivalente em reais). */
  priceNote?: string;
  singleSupplementEur?: number;
  countries: string[];
  /** Continente/área para agrupamento e contexto ("Europa" por padrão). */
  area?: string;
  hotels: LocalGuideHotel[];
  /** Datas de saída garantida no formato ISO (YYYY-MM-DD). */
  departures: string[];
  itinerary: LocalGuideDay[];
}

/** Rótulo de preço na moeda do circuito. */
export const localGuidePriceLabel = (g: LocalGuideGroup) =>
  `${g.currency === "USD" ? "US$" : "€"} ${g.priceEur.toLocaleString("pt-BR")}`;

export const localGuideGroups: LocalGuideGroup[] = [
  {
    slug: "asia-central-cazaquistao-quirguistao-uzbequistao-tajiquistao",
    code: "AC17",
    title: "Ásia Central — Cazaquistão, Quirguistão, Uzbequistão e Tajiquistão",
    subtitle:
      "Almaty · Cânion Charyn · Karakol · Lago Issyk Kul · Bishkek · Tashkent · Khiva · Bukhara · Samarcanda · Iskander Kul · Dushanbe",
    intro:
      "Dezessete dias para atravessar a Ásia Central como os caravaneiros faziam: das montanhas nevadas de Almaty ao azul impossível das cúpulas de Samarcanda, passando por lagos alpinos, desfiladeiros vermelhos e cidades de barro onde o tempo se mede em chá. É a Rota da Seda inteira, sem pressa, com guia local em cada fronteira.",
    highlights: [
      "Cânion Charyn ao fim da tarde, quando a rocha fica cor de brasa",
      "Lago Issyk Kul entre cumes de sete mil metros — o mar do Quirguistão",
      "Khiva murada, a cidade-museu que se percorre inteira a pé ao anoitecer",
      "Registan de Samarcanda iluminado, o pátio mais fotografado da Ásia",
      "Trem rápido Bukhara–Samarcanda cruzando o deserto do Kyzylkum",
      "Iskander Kul, o lago turquesa de Alexandre nas montanhas Fann",
    ],
    category: "Premium",
    days: 17,
    nights: 16,
    priceEur: 4760,
    currency: "USD",
    priceNote:
      "Valor por pessoa em apartamento duplo na base de 6 participantes. Outras bases: US$ 5.150 (5 pax), US$ 5.615 (4 pax), US$ 6.215 (3 pax) e US$ 7.295 (2 pax); em single, de US$ 6.015 a US$ 7.470. Não inclui IOF. Inclui meia pensão, transporte com ar-condicionado, traslados, trem Bukhara–Samarcanda e voo Tashkent–Urgench, entradas em museus e guias locais falando espanhol/inglês (no Tajiquistão, guia em inglês; opção de guia em espanhol com suplemento de US$ 1.415 por grupo). O voo Bishkek–Tashkent e o aéreo internacional são cotados à parte (a partir de US$ 310 por pessoa). Saídas diárias de Almaty ao longo de 2026, confirmadas na cotação.",
    countries: ["Cazaquistão", "Quirguistão", "Uzbequistão", "Tajiquistão"],
    area: "Ásia",
    hotels: [
      { city: "Almaty", hotel: "Kazzhol (ou similar)" },
      { city: "Karakol", hotel: "Karagat (ou similar)" },
      { city: "Lago Issyk Kul", hotel: "Baytur Resort & Spa (ou similar)" },
      { city: "Bishkek", hotel: "Ramada (ou similar)" },
      { city: "Tashkent", hotel: "Crowne Plaza (ou similar)" },
      { city: "Bukhara", hotel: "Wyndham (ou similar)" },
      { city: "Samarcanda", hotel: "Continental (ou similar)" },
      { city: "Dushanbe", hotel: "Rumi (ou similar)" },
    ],
    departures: [
      "2026-01-05","2026-02-02","2026-03-02","2026-04-06","2026-05-04","2026-06-01",
      "2026-07-06","2026-08-03","2026-09-07","2026-10-05","2026-11-02","2026-12-07",
    ],
    itinerary: [
      {
        day: 1,
        route: "ALMATY",
        text: "Recepção no aeroporto com guia e traslado ao hotel, com check-in antecipado incluído. À tarde, o centro histórico: Parque da 28ª Divisão Panfilov, com a chama eterna, a Catedral da Ascensão em madeira e o Museu de Instrumentos Musicais; o Bazar Verde, o mercado oriental mais autêntico da cidade; caminhada pelo Teatro Abay, rua Panfilov e rua Arbat; Praça da República com o Monumento da Independência. Fecha o dia o teleférico até Kok Tobe, a 1.100 m, para a vista panorâmica de Almaty. Almoço em restaurante local.",
      },
      {
        day: 2,
        route: "ALMATY",
        text: "Saída para a vila étnica cazaque “Los Hunos”, a 35 km, com recepção pelo ritual Shashu. Dia dedicado às tradições nômades: confecção de feltro, montagem de yurtas, rituais Besikke salu e Tusau kesu, espetáculo equestre Dzhiguitovka, jogos tradicionais como kyz kuu e atpen audaryspak, música e danças típicas, almoço na aldeia e oficina do pão baursak. Opcional de cavalgada pelas montanhas. Retorno à cidade no fim da tarde.",
      },
      {
        day: 3,
        route: "ALMATY — CÂNION CHARYN — KARAKOL (360 km)",
        text: "Café da manhã cedo e excursão ao Cânion Charyn, a 220 km de Almaty, com 154 km de extensão e o famoso Vale dos Castelos. Descida a pé de 153 degraus e caminhada de 2 km até o rio Charyn (há opção de veículos locais). Almoço no restaurante Tary e seguimos até a fronteira de Kegen com o Quirguistão. Formalidades e chegada a Karakol.",
      },
      {
        day: 4,
        route: "KARAKOL — LAGO ISSYK KUL (150 km)",
        text: "Passeio por Karakol, vila fundada por cossacos russos às margens do Issyk-Kul no século XIX: Mesquita Dungana, um dos edifícios de madeira mais bonitos da cidade, construída em 1910 em estilo chinês clássico, e a igreja ortodoxa em madeira. Seguimos para as margens do lago Issyk Kul, entre os picos nevados do Tien Shan.",
      },
      {
        day: 5,
        route: "LAGO ISSYK KUL — BURANA — BISHKEK (280 km)",
        text: "Manhã no sítio arqueológico de Cholpon Atá, templo a céu aberto com petróglifos citas e hunos aos pés da cordilheira Kunguey Alatoo. Opcional de iate pelo lago. Almoço no caminho e visita à Torre de Burana, atalaia dos séculos XI–XII em Balasagun, capital caracânida, com as ruínas do centro comercial da Rota da Seda, museu local e a coleção de balbals. Chegada a Bishkek.",
      },
      {
        day: 6,
        route: "BISHKEK — TASHKENT (em voo)",
        text: "Passeio pela capital quirguiz: Praça Pobeda, Parque Duboviy, Praça Ala-Too e o Museu Histórico Estatal, com sua coleção de artefatos, arte e artesanato. Almoço em restaurante local e traslado ao aeroporto para o voo a Tashkent (18h50–20h20). Chegada e acomodação.",
      },
      {
        day: 7,
        route: "TASHKENT",
        text: "Dia na capital uzbeque onde o antigo e o moderno convivem: Madrassa Barak Khan e complexo Hasti Imam, Mausoléu de Kafal Shohi, Mesquita Tilla Sheikh e o museu do Alcorão de Kalifa Osman (século VII). Parada no Bazar Chorsu para a comida típica e o artesanato local. Almoço e panorâmico pela cidade moderna: Praça da Independência e da Eternidade, Praça Amir Temur, o palácio Romanov do século XIX e o memorial do terremoto de 1966.",
      },
      {
        day: 8,
        route: "TASHKENT — URGENCH — KHIVA (em voo)",
        text: "Descida ao metrô de Tashkent, decorado em mármore e mosaicos, e caminhada pelo parque Tashkent City. Almoço em restaurante local e traslado ao aeroporto para o voo a Urgench. Chegada e seguimos 30 km até Khiva.",
      },
      {
        day: 9,
        route: "KHIVA",
        text: "Dia inteiro na cidade-museu do deserto, pérola do Uzbequistão: o coração fortificado de Itchan Kala, Kalta Minor, Kunya Ark, Madrassa Mohammed Rahim Khan, minarete e Madrassa Islom Khodja e Madrassa Allakuli Khan — toda a cidade velha é Patrimônio Mundial da UNESCO. Almoço local e, à tarde, o complexo Tash Hovli (harém do século XIX), o Mausoléu de Pahlavan Mahmud, a Mesquita Juma (século X) e o Mausoléu de Said Allauddin.",
      },
      {
        day: 10,
        route: "KHIVA — BUKHARA (450 km)",
        text: "Travessia por estrada até Bukhara, cerca de 7 horas de viagem, com almoço em café no caminho. Chegada e acomodação no hotel, com tempo livre para o primeiro contato com a cidade das cúpulas turquesa.",
      },
      {
        day: 11,
        route: "BUKHARA",
        text: "Dia completo na cidade natal de Avicena: Mausoléu Samânida (séculos IX–X), Mesquita Bolo Haouz de 1712 e suas colunas de madeira esculpida. Almoço local e, à tarde, a Fortaleza Ark (séculos V–XIX), residência dos emires, e as cúpulas comerciais do século XVI com tapetes, cerâmica e lenços de seda. Ainda a Mesquita Magoki Attory (século XII), as madrassas Ulughbek e Abdulaziz-Khan e o mausoléu e fonte sagrada de Chasmai Ayub.",
      },
      {
        day: 12,
        route: "BUKHARA — SAMARCANDA (em trem)",
        text: "Visita ao complexo Lyabi-Hauz, centro comercial e religioso do canato nos séculos XVI–XVII, com a Madrassa Kukeldash (1570) e a Nodir Devon Begi (1622). Almoço em restaurante local e trem para Samarcanda (15h03–16h46). Na chegada, o Mausoléu Gur-Emir, túmulo de Amir Timur, seus filhos e netos.",
      },
      {
        day: 13,
        route: "SAMARCANDA",
        text: "Praça Registan, formada no século XVII pelas madrassas Ulugbek (1417–1420), Sher-Dor (1619–1636) e Tillya-Kari (1647–1660), e a Mesquita Bibi Khanum, a maior da Ásia Central. Almoço local e, à tarde, o complexo Shahi-Zinda (séculos XI–XV), o Observatório de Ulughbek (século XV) e o Bazar Siab, o maior da cidade.",
      },
      {
        day: 14,
        route: "SAMARCANDA — PENJIKENT — DUSHANBE (295 km)",
        text: "Saída para a fronteira com o Tajiquistão e chegada a Penjikent, com o Parque Arqueológico de Sarazm e o Mausoléu de Rudaki. A estrada atravessa as montanhas até o lago Iskander Kul, a 2.195 m de altitude e 72 m de profundidade, famoso pela transparência das águas e pela lenda de Alexandre, o Grande. Almoço piquenique na margem e seguimos para Dushanbe.",
      },
      {
        day: 15,
        route: "DUSHANBE",
        text: "Passeio pela capital tajique: Museu Nacional de Antiguidades, com o Buda Adormecido em Nirvana de 14 metros e 1.400 anos, e o Palácio Navruz, residência oficial de recepções formais. Almoço em restaurante local e, pela Avenida Rudaki, a Praça da Independência e o obelisco dos 30 anos de independência.",
      },
      {
        day: 16,
        route: "DUSHANBE",
        text: "Excursão à cidade histórica de Hissor, com sua fortaleza antiga e duas madrassas dos séculos XVI e XVIII, passando pela mesquita principal na volta. Almoço local, visita ao Jardim Botânico e a uma pequena casa-museu que conta a vida dos tajiques das regiões montanhosas.",
      },
      {
        day: 17,
        route: "DUSHANBE",
        text: "Café da manhã no hotel e traslado ao aeroporto para o voo de retorno. Fim dos nossos serviços.",
      },
    ],
  },
  {
    slug: "uzbequistao-coracao-da-rota-da-seda",
    code: "UZ08",
    title: "Uzbequistão — Coração da Rota da Seda",
    subtitle: "Tashkent · Khiva · Bukhara · Samarcanda",
    intro:
      "Oito dias no coração da Rota da Seda, onde cada cidade é uma camada de história: Tashkent soviética e moderna, Khiva intacta dentro das muralhas, Bukhara com seu comércio de tapetes e especiarias, e Samarcanda — a cidade que Tamerlão quis fazer mais bonita que o céu. Azulejo, pão quente e chá verde do primeiro ao último dia.",
    highlights: [
      "A praça do Registan ao amanhecer, antes dos grupos chegarem",
      "Ichan Kala de Khiva, patrimônio da humanidade preservado por inteiro",
      "Bazares milenares de Bukhara sob as cúpulas dos Taki",
      "Necrópole de Shah-i-Zinda e seus corredores de mosaico azul",
      "Trem de alta velocidade entre as cidades históricas",
      "Saídas semanais garantidas com guia local em português/espanhol",
    ],
    category: "Primeira",
    days: 8,
    nights: 7,
    priceEur: 2110,
    currency: "USD",
    priceNote:
      "Valor por pessoa em apartamento duplo; em single, US$ 2.735. Inclui 7 noites com café da manhã, 7 almoços e 2 jantares, entradas, guia falando espanhol em todas as visitas, voo doméstico Tashkent–Urgench e trem Samarcanda–Tashkent (classe econômica). Aéreo internacional cotado à parte. Mínimo de 2 participantes; saídas semanais (segundas-feiras) confirmadas na cotação da sua data.",
    singleSupplementEur: 625,
    countries: ["Uzbequistão"],
    area: "Ásia",
    hotels: [
      { city: "Tashkent", hotel: "Hilton (ou similar)" },
      { city: "Khiva", hotel: "Faravon (ou similar)" },
      { city: "Bukhara", hotel: "Paradise Plaza (ou similar)" },
      { city: "Samarcanda", hotel: "Hilton Garden (ou similar)" },
    ],
    departures: [
      "2026-03-16","2026-03-23","2026-03-30","2026-04-06","2026-04-13","2026-04-20","2026-04-27",
      "2026-05-04","2026-05-11","2026-05-18","2026-05-25","2026-06-01","2026-06-08","2026-06-15",
      "2026-06-22","2026-06-29","2026-07-06","2026-07-13","2026-07-20","2026-07-27","2026-08-03",
      "2026-08-10","2026-08-17","2026-08-24","2026-08-31","2026-09-07","2026-09-14","2026-09-21",
      "2026-09-28","2026-10-05","2026-10-12","2026-10-19","2026-10-26","2026-11-02","2026-11-09",
      "2026-11-16","2026-11-23","2026-11-30","2026-12-07",
    ],
    itinerary: [
      {
        day: 1,
        route: "TASHKENT",
        text: "Chegada pela madrugada ao aeroporto de Tashkent, com traslado e guia até o hotel (check-in antecipado incluído). Café da manhã e tempo para descanso. Almoço em restaurante local, primeira caminhada pela cidade, visita ao Museu de Arte Decorativa e ao moderno parque Tashkent City.",
      },
      {
        day: 2,
        route: "TASHKENT",
        text: "Dia inteiro na capital onde o antigo e o moderno convivem: Madrassa Barak Khan, complexo Hasti Imam, Mausoléu Kafal Shohi, Mesquita Tilla Sheykh e o museu do Alcorão de Kalifa Osman (século VII). Parada no Bazar Chorsu para provar a comida típica e ver o artesanato local, memorial do terremoto de 1966 e descida ao metrô decorado em mármore e mosaicos. Almoço em restaurante local e panorâmico pela parte moderna: Praça da Independência, Praça Amir Temur e o palácio do século XIX.",
      },
      {
        day: 3,
        route: "TASHKENT — URGENCH — KHIVA",
        text: "Café da manhã em box-lunch e traslado ao aeroporto para o voo a Urgench. Chegada e seguimos 30 km até Khiva, cidade-museu no deserto e pérola do Uzbequistão. Visita ao coração fortificado de Itchan Kala, Kalta Minor, castelo Kunya Ark, Madrassa Mohammed Rahim Khan, minarete e Madrassa Islom Khodja e Madrassa Allakuli Khan (Patrimônio Mundial da UNESCO). Almoço local e, à tarde, o complexo Tash Hovli (harém do século XIX), o Mausoléu de Pahlavan Mahmud, a Mesquita Juma (século X) e o Mausoléu de Said Allauddin. Jantar em restaurante local.",
      },
      {
        day: 4,
        route: "KHIVA — BUKHARA",
        text: "Travessia por estrada até Bukhara (450 km, cerca de 7 horas), com almoço em restaurante local ou lunch-box. Chegada à cidade das cúpulas turquesa e primeira caminhada pelo complexo Lyabi-Hauz, centro comercial e religioso do canato, com a Madrassa Kukeldash (1570) e a Madrassa Nodir Devon (1622). Jantar em restaurante local.",
      },
      {
        day: 5,
        route: "BUKHARA",
        text: "Dia completo na cidade natal de Avicena: Mausoléu dos Samânidas (séculos IX–X), Mesquita Bolo Haouz e suas colunas de madeira talhada. Almoço local e, à tarde, a Fortaleza Ark (séculos V–XIX), residência dos emires, e as cúpulas comerciais do século XVI, com tapetes, cerâmica e lenços de seda. Ainda a Mesquita Magoki Attory (século XII), as madrassas Ulughbek e Abdulaziz-Khan e o mausoléu e fonte sagrada de Chasmai Ayub.",
      },
      {
        day: 6,
        route: "BUKHARA — SAMARCANDA",
        text: "Viagem em transporte confortável até Samarcanda, a lendária Maracanda, com acomodação e almoço local. Visitas à Praça Registan e suas três madrassas (Ulugh Beg, Sherdar e Tilla-Kori), ao Mausoléu de Tamerlão e à Mesquita Bibi Khanum.",
      },
      {
        day: 7,
        route: "SAMARCANDA — TASHKENT (EM TREM)",
        text: "Manhã com o complexo Shakhi-Zinda, necrópole de dezenas de mausoléus em terracota e azulejos, e o Observatório de Ulughbek (século XV). Tempo para compras no Bazar Siab e almoço em restaurante local. Traslado à estação para o trem até Tashkent e acomodação no hotel.",
      },
      {
        day: 8,
        route: "TASHKENT",
        text: "Café da manhã no hotel ou em lunch-box e traslado ao aeroporto para o próximo destino. Fim dos nossos serviços.",
      },
    ],
  },
  {
    slug: "nova-zelandia-de-norte-a-sul",
    code: "R148",
    title: "Nova Zelândia de Norte a Sul",
    subtitle:
      "Auckland · Waitomo · Rotorua · Christchurch · Lago Tekapo · Te Anau · Milford Sound · Queenstown · Wanaka · Franz Josef · Greymouth · Punakaiki · Kaikoura",
    intro:
      "Dezesseis dias de uma ilha à outra, atravessando o país que parece ter guardado para si todas as paisagens do mundo: geiseres fumegando em Rotorua, o silêncio glacial do Lago Tekapo, os fiordes de Milford Sound e o verde vertical de Franz Josef. Nova Zelândia é para quem viaja com a janela aberta.",
    highlights: [
      "Cruzeiro por Milford Sound entre paredões de mil metros e cascatas",
      "Cavernas de Waitomo iluminadas por vaga-lumes, em silêncio absoluto",
      "Cultura maori em Rotorua: hangi, haka e terra que respira vapor",
      "Lago Tekapo e o azul leitoso das águas glaciais sob céu de estrelas",
      "Geleira Franz Josef descendo até a floresta temperada",
      "Queenstown e Wanaka, entre vinhedos e montanhas Remarkables",
    ],
    category: "Premium",
    days: 16,
    nights: 15,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. Inclui o voo interno Rotorua–Christchurch em classe econômica (1 mala de até 23 kg); o aéreo internacional é cotado à parte. Visitas com guia local falando espanhol ou italiano, em serviço compartilhado.",
    countries: ["Nova Zelândia"],
    area: "Oceania",
    hotels: [
      { city: "Auckland", hotel: "Hotel selecionado (3 noites)" },
      { city: "Rotorua", hotel: "Hotel selecionado (1 noite)" },
      { city: "Christchurch", hotel: "Hotel selecionado (1 noite + 1 noite no final)" },
      { city: "Lago Tekapo", hotel: "Hotel selecionado (1 noite)" },
      { city: "Te Anau", hotel: "Hotel selecionado (1 noite)" },
      { city: "Queenstown", hotel: "Hotel selecionado (3 noites)" },
      { city: "Wanaka", hotel: "Hotel selecionado (1 noite)" },
      { city: "Franz Josef", hotel: "Hotel selecionado (1 noite)" },
      { city: "Punakaiki", hotel: "Hotel selecionado (1 noite)" },
      { city: "Kaikoura", hotel: "Hotel selecionado (1 noite)" },
    ],
    departures: [
      "2026-04-07",
      "2026-08-04",
      "2026-09-15",
      "2026-10-06",
      "2026-11-03",
      "2026-11-17",
      "2027-01-12",
      "2027-02-02",
      "2027-03-09",
    ],
    itinerary: [
      {
        day: 1,
        route: "AUCKLAND",
        text: "Chegada, recepção e traslado ao hotel para três noites, com check-in imediato. Restante do dia livre. Auckland é a maior cidade do país e fica a meia hora de praias, trilhas e de uma dúzia de ilhas do Golfo de Hauraki.",
      },
      {
        day: 2,
        route: "AUCKLAND",
        text: "Dia livre para atividades independentes — bom para a ilha vulcânica de Rangitoto ou os vinhedos de Waiheke. Café da manhã incluído.",
      },
      {
        day: 3,
        route: "AUCKLAND / COSTA OESTE",
        text: "Manhã na Costa Oeste, no Parque Regional de Muriwai, com sua praia de areia negra famosa entre surfistas e habitada por uma colônia de alcatrazes, aves de envergadura superior a um metro. Em seguida, o Museu de Auckland, com sua coleção de arte maori e polinésia, o bairro histórico de Parnell, Mission Bay, o viaduto e a Sky Tower, de 328 metros, com vista única das duas baías da cidade: Waitemata e Manukau. Café da manhã incluído.",
      },
      {
        day: 4,
        route: "AUCKLAND / WAITOMO / ROTORUA",
        text: "Saída pelos Bombay Hills, atravessando a rica região agrícola de Waikato, até Waitomo e a Footwhistle Cave, uma das mais famosas cavernas de larvas luminosas do mundo — o teto vira um céu estrelado azul. Almoço em restaurante local. Continuação a Rotorua, de intensa atividade termal. À tarde, o Centro Termal de Te Puia (antigo Whakarewarewa) e o Centro de Arte e Cultura Maori do Instituto Nacional de Arte e Artesanato. Visita a um povoado maori, com recepção tradicional, demonstração de músicas e danças e jantar típico. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 5,
        route: "ROTORUA / CHRISTCHURCH",
        text: "Manhã na reserva termal de Waimangu, extenso vale geotermal com bosques e os lagos azul e verde de água cristalina. Traslado ao aeroporto de Rotorua e voo para Christchurch (bilhete incluído). Chegada, passeio pela cidade e pernoite. Café da manhã incluído.",
      },
      {
        day: 6,
        route: "CHRISTCHURCH / LAGO TEKAPO",
        text: "Visita aos arredores de Christchurch e seguimos ao Lago Tekapo, cercado de montanhas, com águas turquesa e a emblemática Igreja do Bom Pastor à beira d'água. À tarde, recepção por anfitriões kiwis para um jantar caseiro com degustação da tradicional Pavlova. Pernoite. Café da manhã e jantar incluídos.",
      },
      {
        day: 7,
        route: "LAGO TEKAPO / TE ANAU",
        text: "Saída com vista espetacular do Monte Cook, o pico mais alto do país (3.750 m), e dos lagos glaciares turquesa, atravessando a Mackenzie Country. Parada na Bungy Bridge, onde nasceu o bungee jump (salto não incluído). Visita a um vinhedo de Central Otago com degustação de vinhos locais e aperitivo. Almoço incluído. Chegada a Te Anau para pernoite. Café da manhã e almoço incluídos.",
      },
      {
        day: 8,
        route: "TE ANAU / MILFORD SOUND / QUEENSTOWN",
        text: "Dia inteiro em Milford Sound (sujeito às condições climáticas), atravessando o Parque Nacional dos Fiordes. Navegação até o Mar da Tasmânia entre paredões verticais, o pico Mitre e as cascatas Bowen, com almoço servido a bordo. Continuação a Queenstown em ônibus — há opção de retorno em avião pequeno ou helicóptero, com suplemento pago localmente conforme disponibilidade. Três noites em Queenstown. Em caso de cancelamento de Milford Sound, o passeio é substituído por Doubtful Sound, com suplemento local. Café da manhã e almoço incluídos.",
      },
      {
        day: 9,
        route: "QUEENSTOWN / ARROWTOWN",
        text: "Meio dia pela região de Queenstown, incluindo Arrowtown, antigo povoado de mineração de ouro, e subida no teleférico Skyline ao Bob's Peak para a vista panorâmica do lago Wakatipu e das Remarkables. Restante do dia livre. Café da manhã incluído.",
      },
      {
        day: 10,
        route: "QUEENSTOWN",
        text: "Dia livre para atividades independentes — jet boat no rio Shotover, trilhas, vinícolas de Gibbston Valley ou simplesmente a beira do lago. Café da manhã incluído.",
      },
      {
        day: 11,
        route: "QUEENSTOWN / WANAKA",
        text: "Saída para a encantadora Wanaka, com visita a um campo de lavandas — há chá de ervas e sorvete de lavanda de produção local, por conta própria. Restante do dia livre. Café da manhã incluído.",
      },
      {
        day: 12,
        route: "WANAKA / FRANZ JOSEF",
        text: "Travessia pelo Haast Pass até a região dos glaciares, com parada no Parque Nacional Monte Aspiring. No caminho para Franz Josef, visita ao Lago Matheson, cujo espelho d'água reflete os cumes nevados nas manhãs calmas. Pernoite. Café da manhã incluído.",
      },
      {
        day: 13,
        route: "FRANZ JOSEF / GREYMOUTH / PUNAKAIKI",
        text: "Manhã livre para opcionais: caminhada no vale do glaciar, excursão de helicóptero com caminhada sobre o gelo ou voo panorâmico (não incluídos e sujeitos ao clima). À tarde, saída para Punakaiki passando por Greymouth e Hokitika, com caminhada em passarela pela floresta tropical, conforme o clima. Visita às Pancake Rocks, erodidas pelo mar em camadas de panqueca (pode ser feita na manhã seguinte). Pernoite. Café da manhã incluído.",
      },
      {
        day: 14,
        route: "PUNAKAIKI / KAIKOURA",
        text: "Continuação pela costa oeste, atravessando o Lewis Pass, com breve parada em Hanmer Springs. Chegada a Kaikoura, onde os Alpes caem quase dentro do mar. Pernoite. Café da manhã e jantar incluídos.",
      },
      {
        day: 15,
        route: "KAIKOURA / CHRISTCHURCH",
        text: "Pela manhã, passeio de barco para observação de baleias (sujeito às condições climáticas) — a fossa submarina em frente à cidade atrai cachalotes durante todo o ano. Continuação a Christchurch e pernoite. Café da manhã incluído.",
      },
      {
        day: 16,
        route: "CHRISTCHURCH",
        text: "Traslado ao aeroporto e fim dos nossos serviços. Café da manhã incluído.",
      },
    ],
  },

  {
    slug: "australia-downunder",
    code: "R634",
    title: "Austrália Downunder",
    subtitle:
      "Melbourne · Great Ocean Road · Doze Apóstolos · Cairns · Kuranda · Skyrail · Grande Barreira de Coral · Sydney · Bondi Beach · Ópera de Sydney · Montanhas Azuis",
    intro:
      "Dez dias para entender por que a Austrália é um continente e não um país: os cafés e vielas de arte de Melbourne, a Great Ocean Road recortando o Oceano Antártico, o corredor de coral vivo em Cairns e, no fim, a baía de Sydney como um último gesto de grandeza.",
    highlights: [
      "Doze Apóstolos ao pôr do sol, na estrada costeira mais bela do mundo",
      "Dia inteiro na Grande Barreira de Coral, com snorkel em recife vivo",
      "Trem histórico de Kuranda e retorno pelo teleférico Skyrail",
      "Bairros e laneways de Melbourne, capital do café australiano",
      "Sydney Opera House e Harbour Bridge vistos da água",
      "Voos internos incluídos entre as três bases do roteiro",
    ],
    category: "Premium",
    days: 10,
    nights: 9,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. Inclui 9 noites com café da manhã diário e 4 almoços. Não inclui os voos internos Melbourne–Cairns (QF 702) e Cairns–Sydney (QF 923) nem o aéreo internacional, cotados à parte. Visitas com guia local falando espanhol ou inglês, em serviço compartilhado.",
    countries: ["Austrália"],
    area: "Oceania",
    hotels: [
      { city: "Melbourne", hotel: "Hotel selecionado (3 noites)" },
      { city: "Cairns", hotel: "Hotel selecionado (3 noites)" },
      { city: "Sydney", hotel: "Hotel selecionado (3 noites)" },
    ],
    departures: [
      "2026-04-13",
      "2026-06-29",
      "2026-08-03",
      "2026-09-21",
      "2026-10-12",
      "2026-11-09",
      "2026-12-14",
      "2027-02-01",
      "2027-03-08",
    ],
    itinerary: [
      {
        day: 1,
        route: "MELBOURNE",
        text: "Chegada e traslado ao hotel para três noites, com check-in a partir das 16h. Restante do dia livre. Melbourne é uma metrópole moderna às margens do rio Yarra, conhecida pelos jardins, parques e espaços abertos que ocupam quase um terço da cidade, e por uma cena gastronômica em plena ascensão entre o Southbank e o Centro de Artes.",
      },
      {
        day: 2,
        route: "MELBOURNE",
        text: "Passeio a pé pela cidade (cerca de 3 horas): galerias escondidas nos becos, arte urbana extravagante, os melhores cafés e uma arquitetura em constante reinvenção. O tour termina no Melbourne Skydeck, com coquetel exclusivo no Bar 88 e a vista desde a plataforma de observação mais alta do hemisfério sul. Retorno ao hotel por conta própria. Café da manhã incluído.",
      },
      {
        day: 3,
        route: "MELBOURNE / GREAT OCEAN ROAD / MELBOURNE",
        text: "Dia inteiro pela Great Ocean Road, um dos trajetos costeiros mais bonitos do mundo, com acesso exclusivo a um bosque de eucaliptos onde é possível ver koalas e cangurus. No caminho, atenção às baleias e golfinhos. Tempo livre nas praias virgens e, no fim da tarde, os Doze Apóstolos e o Loch Ard Gorge. Retorno ao hotel. Nota: as visitas podem sofrer alterações por trânsito ou clima e o café da manhã pode ser servido em formato \"box\", conforme o horário de saída. Café da manhã incluído.",
      },
      {
        day: 4,
        route: "MELBOURNE / CAIRNS",
        text: "Traslado ao aeroporto e voo para Cairns. Chegada, recepção e traslado ao hotel para três noites. Tarde livre. Cairns é uma cidade vibrante e a base privilegiada para navegação, mergulho e snorkel no norte tropical. Nota: o bilhete aéreo Melbourne–Cairns não está incluído; reservar o voo QF 702 (09h20–12h40). Horários diferentes podem gerar suplemento de traslado e a perda da reunião com o guia. Café da manhã incluído.",
      },
      {
        day: 5,
        route: "CAIRNS / KURANDA / SKYRAIL",
        text: "Saída pela costa norte até um parque de vida silvestre singular, com oportunidade de conhecer os grandes crocodilos, segurar um coala e alimentar o casuar do sul. Em seguida, o povoado de Kuranda e almoço em restaurante local. À tarde, Parque Nacional Barron Gorge com subida no teleférico Skyrail sobre a floresta tropical Patrimônio da Humanidade, lar do povo aborígene Djabugay. No retorno, parada em Palm Cove, uma das praias mais deslumbrantes do norte. Café da manhã e almoço incluídos.",
      },
      {
        day: 6,
        route: "CAIRNS / GRANDE BARREIRA DE CORAL",
        text: "Caminhada até o terminal Reef Fleet para embarque no cruzeiro Ocean Spirit a Michaelmas Cay (sem guia acompanhante, comentários em inglês, sujeito às condições climáticas). A Grande Barreira de Coral, com 2.300 km, é o maior sistema de corais do mundo; Michaelmas Cay é um cayo de areia clara cercado por recife espetacular e santuário protegido de aves migratórias. Tempo para snorkel e para nadar nas águas transparentes. Almoço buffet a bordo. Café da manhã e almoço incluídos.",
      },
      {
        day: 7,
        route: "CAIRNS / SYDNEY",
        text: "Traslado ao aeroporto e voo para Sydney. Chegada e traslado ao hotel para três noites, com check-in a partir das 16h. Tarde livre. Nota: o bilhete aéreo Cairns–Sydney não está incluído; reservar o voo QF 923 (13h30–16h25). Horários diferentes podem gerar suplemento de traslado e a perda da reunião com o guia. Café da manhã incluído.",
      },
      {
        day: 8,
        route: "SYDNEY / BONDI / ÓPERA",
        text: "Manhã de visita panorâmica pela cidade, começando por The Rocks e a história dos primeiros colonos, com vistas magníficas da Ópera e da Harbour Bridge, seguindo pelo CBD, QVB e Centrepoint. Tempo livre na praia de Bondi e vista panorâmica desde Dover Heights, com retorno por Double Bay, Kings Cross e o mirante Macquarie's Chair. Em Darling Harbour, passeio de barco pela baía de Sydney com almoço a bordo. À tarde, visita guiada de 1 hora pela Ópera de Sydney, com acesso a áreas fora do alcance do público. Retorno ao hotel por conta própria. Café da manhã e almoço incluídos.",
      },
      {
        day: 9,
        route: "SYDNEY / MONTANHAS AZUIS / SYDNEY",
        text: "Dia inteiro nas Montanhas Azuis. Primeira parada em Calmsley Hill, entre cangurus e coalas, seguida do mirante do vale de Jamison e do remoto Eaglehawk, onde se contam as lendas das formações rochosas. Almoço incluído. À tarde, a vista desde Govetts Leap, um dos mirantes mais famosos da Austrália, e o Jardim Botânico do Monte Tomah. Retorno ao hotel. Café da manhã e almoço incluídos.",
      },
      {
        day: 10,
        route: "SYDNEY",
        text: "Traslado ao aeroporto e fim dos nossos serviços. Café da manhã incluído.",
      },
    ],
  },

  {


    slug: "grande-tour-tunisia-top-deluxe",
    code: "R638",
    title: "Grande Tour Tunísia Top Deluxe",
    subtitle:
      "Tunis · Medina de Tunis · Sidi Bou Said · Museu do Bardo · Cartago · Sousse · Monastir · El Jem · Matmata · Chott El Jerid · Tozeur · Kairouan · Hammamet",
    intro:
      "Nove dias na Tunísia em versão deluxe: o azul e branco de Sidi Bou Said, os mosaicos do Bardo, o anfiteatro colossal de El Jem no meio do nada, as casas trogloditas de Matmata e a primeira noite de deserto no Saara. Um país pequeno que guarda Roma, Cartago, o Islã e o cinema em poucas centenas de quilômetros.",
    highlights: [
      "El Jem: o anfiteatro romano mais bem preservado da África",
      "Sidi Bou Said sobre o Mediterrâneo, ao fim da tarde",
      "Museu do Bardo, a maior coleção de mosaicos romanos do mundo",
      "Matmata e as casas escavadas na rocha do sul tunisiano",
      "Oásis de montanha e travessia do Chott El Jerid",
      "Hotéis de categoria superior e pensão quase completa",
    ],
    category: "Premium",
    days: 9,
    nights: 8,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. Inclui pensão praticamente completa (7 almoços e 8 jantares); o aéreo internacional é cotado à parte. Taxa de turismo na Tunísia (12 TND, cerca de 4 euros por noite por adulto) paga diretamente nos hotéis.",
    countries: ["Tunísia"],
    area: "África",
    hotels: [
      { city: "Tunis", hotel: "Hotel selecionado (2 noites)" },
      { city: "Sousse", hotel: "Hotel selecionado (2 noites)" },
      { city: "Tozeur", hotel: "Hotel selecionado (2 noites)" },
      { city: "Hammamet", hotel: "Hotel resort à beira-mar (2 noites)" },
    ],
    departures: [
      "2026-09-11","2026-09-18","2026-09-25",
      "2026-10-02","2026-10-09","2026-10-16","2026-10-23","2026-10-30",
      "2026-11-06","2026-11-13","2026-11-20","2026-11-27",
      "2026-12-04","2026-12-11","2026-12-18","2026-12-25",
      "2027-01-01","2027-01-08","2027-01-15","2027-01-22","2027-01-29",
      "2027-02-05","2027-02-12","2027-02-19","2027-02-26",
      "2027-03-05","2027-03-12","2027-03-19","2027-03-26",
      "2027-04-02","2027-04-09","2027-04-16","2027-04-23","2027-04-30",
      "2027-05-07","2027-05-14","2027-05-21","2027-05-28",
      "2027-06-04","2027-06-11","2027-06-18","2027-06-25",
      "2027-09-10","2027-09-17","2027-09-24",
      "2027-10-01","2027-10-08","2027-10-15","2027-10-22","2027-10-29",
      "2027-11-05","2027-11-12","2027-11-19","2027-11-26",
      "2027-12-03","2027-12-10","2027-12-17","2027-12-24",
    ],
    itinerary: [
      {
        day: 1,
        route: "TUNIS",
        text: "Chegada ao aeroporto de Tunis, recepção e traslado ao hotel para duas noites na capital. Jantar de boas-vindas no restaurante do hotel — o primeiro contato com a mesa tunisiana, entre harissa, brik e azeite do norte. Jantar incluído.",
      },
      {
        day: 2,
        route: "TUNIS / MEDINA DE TUNIS / SIDI BOU SAID / TUNIS",
        text: "Manhã de exploração da capital, fundada no século IX a.C. e sucessivamente cartaginesa, romana, árabe, otomana e francesa — cada camada ainda legível nas fachadas. Almoço na Medina de Tunis e tempo livre entre os souks para compras. À tarde, Sidi Bou Said, vila suspensa sobre o mar com casas brancas, portas e janelas azuis, arquitetura árabe-mourisca, cafés antigos e vista aberta para o Mediterrâneo. Jantar e pernoite. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 3,
        route: "TUNIS / BARDO / CARTAGO / SOUSSE",
        text: "Visita ao Museu do Bardo, que abriga a maior coleção de mosaicos romanos do mundo. Em seguida, o sítio arqueológico de Cartago, com as ruínas púnicas, as Termas de Antonino e o anfiteatro que recebe o festival internacional. Continuação para Sousse, a pérola do litoral, para duas noites. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 4,
        route: "SOUSSE / MONASTIR / SOUSSE",
        text: "Visita ao Ribat de Monastir, a mais antiga fortaleza construída pelos árabes na conquista do Magrebe, e ao mausoléu de Bourguiba, líder que conduziu a Tunísia à independência da França e foi seu primeiro presidente. Almoço em restaurante em Monastir. À tarde, a Medina de Sousse, Patrimônio Mundial da UNESCO, com suas muralhas históricas e tempo livre entre as lojas. Jantar e pernoite em Sousse. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 5,
        route: "SOUSSE / EL JEM / MATMATA / TOZEUR",
        text: "Saída para o anfiteatro romano de El Jem, que rivaliza com o Coliseu em dimensão. Continuação a Matmata, célebre pelas casas trogloditas subterrâneas da tribo Amazigh: visita a uma casa típica para conhecer a arquitetura escavada e as tradições do povo berbere, ancestral da Tunísia. Almoço em restaurante típico. O dia termina em Tozeur, atravessando o espetacular lago salgado de Chott El Jerid, onde a evaporação desenha miragens no horizonte. Duas noites em Tozeur. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 6,
        route: "TOZEUR",
        text: "Manhã na charmosa Medina de Tozeur, com seus tijolos de barro em relevo geométrico. Depois, visita a um oásis de tamareiras, onde é servido um almoço típico à sombra das palmeiras. Tarde livre. Jantar e pernoite no hotel. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 7,
        route: "TOZEUR / KAIROUAN / HAMMAMET",
        text: "Visita a Kairouan, uma das maiores cidades santas do Islã: a Grande Mesquita de Okba Ibn Nafa, primeira mesquita fundada no continente africano, no ano 671 d.C., e o Mausoléu de Sidi Sahbi, o barbeiro do Profeta. A cidade é conhecida pela fabricação de tapetes — visitamos uma fábrica tradicional da região. Após o almoço incluído, continuação a Hammamet, cidade costeira de praias longas, para duas noites. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 8,
        route: "HAMMAMET",
        text: "Dia livre para aproveitar a praia ou as instalações do hotel — o intervalo de descanso depois do deserto. Pernoite em Hammamet. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 9,
        route: "HAMMAMET / TUNIS",
        text: "Em horário apropriado, traslado ao aeroporto de Tunis para o embarque. Fim dos nossos serviços. Café da manhã incluído.",
      },
    ],
  },

  {

    slug: "grande-tour-da-indochina",
    code: "R597",
    title: "Grande Tour da Indochina",
    subtitle:
      "Luang Prabang · Pak Ou · Kuang Si · Hanói · cruzeiro na Baía de Halong · Hoi An · Danang · Hue · Ho Chi Minh · Siem Reap · Angkor Wat",
    intro:
      "Treze dias entre Laos, Vietnã e Camboja: monges de laranja ao amanhecer em Luang Prabang, os rochedos verticais da Baía de Halong, as lanternas de Hoi An, o caos doce de Ho Chi Minh e, no encerramento, Angkor emergindo da floresta na primeira luz do dia.",
    highlights: [
      "Cruzeiro com pernoite na Baía de Halong",
      "Cerimônia das esmolas ao amanhecer em Luang Prabang",
      "Cataratas de Kuang Si e as grutas sagradas de Pak Ou",
      "Hoi An iluminada por lanternas de seda à noite",
      "Nascer do sol em Angkor Wat com guia local",
      "Quatro voos internos incluídos, sem desgaste de estrada",
    ],
    category: "Primeira",
    days: 13,
    nights: 12,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. Inclui os voos internos Luang Prabang–Hanói–Danang e Hue–Ho Chi Minh–Siem Reap em classe econômica (1 mala de até 20 kg); o aéreo internacional é cotado à parte.",
    countries: ["Laos", "Vietnã", "Camboja"],
    area: "Ásia",
    hotels: [
      { city: "Luang Prabang", hotel: "Hotel selecionado (2 noites)" },
      { city: "Hanói", hotel: "Hotel selecionado (2 noites)" },
      { city: "Baía de Halong", hotel: "Cruzeiro a bordo (1 noite)" },
      { city: "Hoi An", hotel: "Hotel selecionado (2 noites)" },
      { city: "Hue", hotel: "Hotel selecionado (1 noite)" },
      { city: "Ho Chi Minh", hotel: "Hotel selecionado (2 noites)" },
      { city: "Siem Reap", hotel: "Hotel selecionado (2 noites)" },
    ],
    departures: [
      "2026-11-01","2026-11-15","2026-11-22","2026-11-29",
      "2026-12-13","2026-12-27",
      "2027-01-10","2027-01-24",
      "2027-02-14","2027-02-28",
      "2027-03-14","2027-03-21",
      "2027-04-04","2027-04-18",
      "2027-05-02","2027-05-16","2027-05-30",
      "2027-06-13","2027-06-27",
      "2027-07-04","2027-07-11","2027-07-18","2027-07-25",
      "2027-08-01","2027-08-08","2027-08-15","2027-08-22",
      "2027-09-05","2027-09-19",
      "2027-10-03","2027-10-17",
    ],
    itinerary: [
      {
        day: 1,
        route: "LUANG PRABANG",
        text: "Chegada a Luang Prabang, no Laos, recepção e traslado ao hotel para duas noites (check-in a partir das 14h). À tarde, o Wat Xieng Thong, templo do século XVI com sua coleção de imagens de Buda, e subida ao Monte Phousi para o panorama da cidade entre o Mekong e o Nam Khan.",
      },
      {
        day: 2,
        route: "LUANG PRABANG / TAK BAT / GRUTAS DE PAK OU",
        text: "Bem cedo, o ritual do Tak Bat: centenas de monges de túnicas alaranjadas recolhendo oferendas em silêncio pelas ruas ainda escuras. Visita ao mercado de frutas frescas e café da manhã no hotel. Depois, o Museu Nacional (antigo Palácio Real) e passeio de barco pelo Mekong, com parada numa aldeia para conhecer a destilação do Lao Khao, o vinho de arroz local, e as grutas de Tham Ting e Tham Phoum, com centenas de estátuas de Buda. Almoço local e visita à oficina de tecelagem Ock Pop Tok. Café da manhã e almoço incluídos.",
      },
      {
        day: 3,
        route: "LUANG PRABANG / KUANG SI / HANÓI",
        text: "Passeio panorâmico até a Cachoeira Kuang Si, com caminhada leve até as piscinas naturais de água turquesa — dá tempo de se refrescar. Retorno e voo para Hanói (bilhete incluído). Chegada, traslado ao hotel e duas noites na capital vietnamita. Restante do dia livre. Café da manhã incluído.",
      },
      {
        day: 4,
        route: "HANÓI",
        text: "Manhã com o Mausoléu de Ho Chi Minh (exterior), a Pagode de Um Pilar e o Museu de Etnologia. Almoço local. À tarde, o Templo da Literatura — dedicado a Confúcio por volta de 1070 e primeira universidade do país — e caminhada pelo bairro antigo até o Lago Hoan Kiem e o Templo Ngoc Son, com parada num café escondido para o típico cà phê vietnamita (ou uma cerveja local). Café da manhã e almoço incluídos.",
      },
      {
        day: 5,
        route: "HANÓI / BAÍA DE HALONG",
        text: "Viagem à Baía de Halong — 'o dragão descendo ao mar' — e embarque no cruzeiro por uma noite entre os milhares de rochedos de calcário que emergem da água, Patrimônio Mundial da UNESCO. Almoço e jantar a bordo. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 6,
        route: "HALONG / HANÓI / DANANG / HOI AN",
        text: "Bem cedo, aula de Tai Chi no deque durante o nascer do sol. Desembarque às 11h e traslado pela nova rodovia (130 km) ao aeroporto Noi Bai para o voo a Danang (bilhete incluído). Chegada e traslado ao hotel em Hoi An, por duas noites. Café da manhã incluído.",
      },
      {
        day: 7,
        route: "HOI AN",
        text: "Dia na cidade histórica que foi um próspero porto entre os séculos XVI e XVIII, com arquitetura que mistura influências vietnamitas, chinesas e japonesas: o Phuc Kien Hall, a Ponte Coberta Japonesa, a Casa Antiga Tan Ky e uma oficina de seda. Almoço local. Tarde livre — ideal para as lanternas acesas ao anoitecer. Café da manhã e almoço incluídos.",
      },
      {
        day: 8,
        route: "HOI AN / DANANG / HUE",
        text: "Saída para Danang e visita às Montanhas de Mármore, com um pagode escondido dentro de uma caverna. Seguimos a Hue pela passagem de Hai Van. Almoço local. Em Hue, visita à Cidadela Imperial e parada no Mercado Dong Ba para provar produtos locais. Pernoite. Café da manhã e almoço incluídos.",
      },
      {
        day: 9,
        route: "HUE / HO CHI MINH",
        text: "Manhã de barco pelo Rio Perfume até a pagode Thien Mu e visita à tumba do imperador Tu Duc. Passeio de rickshaw por um povoado autêntico, com casas tradicionais e atividades agrícolas, escalda-pés com ervas medicinais e almoço em casa de família. À tarde, voo para Ho Chi Minh (bilhete incluído) e duas noites na cidade. Café da manhã e almoço incluídos.",
      },
      {
        day: 10,
        route: "HO CHI MINH",
        text: "Visita ao Museu dos Vestígios da Guerra, ao edifício dos Correios de traços coloniais e parada para fotos no Palácio da Reunificação (externo). Depois, a Rua Cong Kieu, paraíso dos amantes de artesanato e antiguidades, e o Mercado Ben Thanh, o mais vibrante da cidade. Café da manhã incluído.",
      },
      {
        day: 11,
        route: "HO CHI MINH / SIEM REAP",
        text: "Manhã livre e traslado ao aeroporto para o voo a Siem Reap, no Camboja (bilhete incluído). Chegada e traslado ao hotel para duas noites (check-in a partir das 14h). Restante do dia livre. Café da manhã incluído.",
      },
      {
        day: 12,
        route: "SIEM REAP / ANGKOR",
        text: "Dia grande: de tuk-tuk ao Parque Arqueológico de Angkor, começando pela antiga capital Angkor Thom — Portão Sul, o Bayon com seus 216 rostos esculpidos, o Baphuon do século XI, o Terraço dos Elefantes, o Terraço do Rei Leproso, o Phimeanakas e o Recinto Real. Almoço local. À tarde, Ta Prohm, tomado pelas raízes das árvores, e Angkor Wat, a maior estrutura religiosa do mundo. Visita ao Les Senteurs d'Angkor, empresa social que transforma ervas e especiarias em cosméticos e alimentos. Jantar com dança Apsara e, depois, a Pub Street. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 13,
        route: "SIEM REAP",
        text: "O programa varia com o nível do Lago Tonle Sap, o maior lago de água doce do sudeste asiático. De fevereiro a julho (nível baixo): os templos remotos de Banteay Srei, em arenito rosa, e Banteay Samre, dedicado a Vishnu. De agosto a janeiro (nível alto): barco até Kampong Phluk, vila de casas sobre palafitas de até sete metros, com canoa pelos manguezais e navegação no Tonle Sap, além da vila gastronômica de Preah Dak (almoço não incluído). Traslado ao aeroporto e fim dos nossos serviços. Café da manhã incluído.",
      },
    ],
  },

  {

    slug: "encantos-do-japao-em-portugues",
    code: "R641",
    title: "Encantos do Japão (guia em português)",
    subtitle:
      "Tóquio · Hakone · Nara · Quioto · Fushimi Inari · Arashiyama · Kanazawa · Shirakawago · Takayama · Gero (ryokan e onsen) · Osaka",
    intro:
      "Dez dias no Japão com dias em português: Tóquio vertical e elétrica, o Fuji visto de Hakone, os mil portais vermelhos de Fushimi Inari, os bambuzais de Arashiyama, as ruas de madeira de Takayama e uma noite de ryokan com onsen e jantar kaiseki. O país onde o detalhe é o destino.",
    highlights: [
      "Noite em ryokan tradicional com onsen e jantar kaiseki",
      "Fushimi Inari e os corredores infinitos de torii vermelhos",
      "Shirakawago, as casas de telhado de palha entre montanhas",
      "Arashiyama: floresta de bambu e templos de Quioto",
      "Nara e seus cervos livres em torno do Grande Buda",
      "Dias acompanhados por guia falando português",
    ],
    category: "Primeira",
    days: 10,
    nights: 9,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. Inclui os trens Tóquio–Quioto e Gero–Nagoya–Shin-Osaka em classe turística; o aéreo internacional é cotado à parte. Visitas do 2º ao 5º e do 7º ao 9º dia com guia falando português.",
    countries: ["Japão"],
    area: "Ásia",
    hotels: [
      { city: "Tóquio", hotel: "Hotel selecionado (3 noites)" },
      { city: "Quioto", hotel: "Hotel selecionado (3 noites)" },
      { city: "Kanazawa", hotel: "Hotel selecionado (1 noite)" },
      { city: "Gero", hotel: "Ryokan tradicional com onsen (1 noite)" },
      { city: "Osaka", hotel: "Hotel selecionado (1 noite)" },
    ],
    departures: [
      "2026-08-11",
      "2026-09-11",
      "2026-10-02",
      "2026-12-11",
      "2027-01-08",
      "2027-02-12",
      "2027-03-12",
    ],
    itinerary: [
      {
        day: 1,
        route: "TÓQUIO",
        text: "Chegada a Narita ou Haneda, recepção com assistência e traslado ao hotel, para três noites em Tóquio. Apartamento disponível a partir das 15h; o guia em português fica no hotel das 14h às 20h para orientações e primeiras dicas da cidade.",
      },
      {
        day: 2,
        route: "TÓQUIO",
        text: "Meio dia de visita: o Santuário Meiji, dedicado ao imperador Mutsuhito, num bosque de 100 mil árvores no meio da metrópole; a Praça do Palácio Imperial (vista externa); e o Templo Senso-ji, em Asakusa, com a rua comercial Nakamise e seu incenso. O passeio termina em Ginza. Tarde livre. Café da manhã incluído.",
      },
      {
        day: 3,
        route: "TÓQUIO / HAKONE / TÓQUIO",
        text: "Dia em Hakone, aos pés do Monte Fuji: navegação pelo Lago Ashi, o Santuário Hakone-jinja com seu torii vermelho sobre a água e o Museu ao Ar Livre, com esculturas entre as montanhas. Almoço em restaurante local. Se o barco não operar por condições climáticas, a alternativa é o Hakone Sekishoato. Café da manhã e almoço incluídos.",
      },
      {
        day: 4,
        route: "TÓQUIO / QUIOTO / NARA / QUIOTO",
        text: "Traslado com assistência à estação e trem-bala até Quioto. A caminho, visita a Nara: o Templo Todai-ji, que abriga o Grande Buda de bronze, e o Parque de Nara, com seus cervos livres que se curvam por biscoitos. Chegada a Quioto e acomodação por três noites. Uma mala por pessoa é despachada separadamente de Tóquio a Quioto e pode chegar no dia seguinte — leve uma bagagem de mão para a noite. Café da manhã incluído.",
      },
      {
        day: 5,
        route: "QUIOTO",
        text: "Dia na antiga capital imperial: o Templo Sanjusangendo, com mil estátuas de Kannon; o Santuário Fushimi Inari e seus milhares de torii vermelhos subindo a montanha; o dourado Kinkaku-ji refletido no lago; o Templo Tenryu-ji com seu jardim clássico; e o Bosque de Bambu de Sagano, em Arashiyama. Almoço em restaurante local. Quem quiser pode descer no bairro Gion, das gueixas, e voltar por conta própria. Café da manhã e almoço incluídos.",
      },
      {
        day: 6,
        route: "QUIOTO",
        text: "Dia livre em Quioto. Sugerimos o passeio opcional a Hiroshima e Miyajima (não incluído, reserva com no mínimo 3 semanas de antecedência): trem-bala ida e volta, o Santuário Itsukushima com o torii sobre o mar, o Parque Memorial da Paz e a Cúpula da Bomba Atômica. Café da manhã incluído.",
      },
      {
        day: 7,
        route: "QUIOTO / KANAZAWA",
        text: "Viagem a Kanazawa, a cidade dos samurais e do ouro em folha. Visita ao Mercado Omicho, com mais de 170 barracas de frutos do mar de Ishikawa; ao bairro de gueixas Higashi Chaya, de casas de madeira preservadas; e ao jardim Kenrokuen, um dos três mais belos do Japão. Pernoite. Uma mala por pessoa segue separadamente para Osaka — leve bagagem de mão para duas noites. Café da manhã incluído.",
      },
      {
        day: 8,
        route: "KANAZAWA / SHIRAKAWAGO / TAKAYAMA / GERO",
        text: "Manhã em Shirakawago (Patrimônio Mundial desde 1995), com suas casas de telhado de palha em estilo gasshozukuri encaixadas entre montanhas — um Japão de outra era. Depois, Takayama: o bairro histórico de Kamisannomachi, com antigas casas de saquê, e o Yatai Kaikan, museu dos carros alegóricos do festival. Seguimos a Gero para uma noite em ryokan, com banho de onsen de águas termais (banhos separados por gênero; tatuagens visíveis costumam não ser aceitas). Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 9,
        route: "GERO / NAGOYA / OSAKA",
        text: "Traslado à estação de Gero e trem até Shin-Osaka, com conexão em Nagoya. Chegada e passeio pelo agitado Dotonbori, de letreiros de neon refletidos no canal, e pelo Castelo de Osaka (sem entrar). Pernoite em Osaka. Café da manhã incluído.",
      },
      {
        day: 10,
        route: "OSAKA (KANSAI OU ITAMI)",
        text: "Traslado em ônibus compartilhado ao aeroporto de Kansai ou Itami. Para voos partindo às 8h30 ou antes, há suplemento de táxi (US$ 141 por pessoa; US$ 282 se viajar sozinho). Fim dos nossos serviços. Café da manhã incluído.",
      },
    ],
  },

  {

    slug: "coreia-do-sul-tradicao-inovacao",
    code: "R632",
    title: "Coreia do Sul: Tradição e Inovação",
    subtitle:
      "Seul · Lotte World Tower · Gangnam · Palácio Gyeongbokgung · Myeongdong · trem-bala · Busan · Mercado Jagalchi · Gamcheon · Templo Haedong Yonggungsa · Gyeongju · Bulguksa",
    intro:
      "Sete dias na Coreia entre o palácio e o arranha-céu: a troca da guarda em Gyeongbokgung pela manhã, o vidro do Lotte World Tower à tarde, o trem-bala rasgando o país e, em Busan, o mercado de peixe mais vivo da Ásia com o mar logo atrás.",
    highlights: [
      "Palácio Gyeongbokgung e o bairro tradicional de Bukchon",
      "Trem-bala KTX de Seul a Busan em pouco mais de duas horas",
      "Mercado Jagalchi e o vilarejo colorido de Gamcheon",
      "Gangnam, Myeongdong e a Coreia contemporânea",
      "Observatório do Lotte World Tower sobre o rio Han",
      "26 saídas garantidas com guia local",
    ],
    category: "Primeira",
    days: 7,
    nights: 6,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. Inclui o trem-bala Seul–Busan em classe econômica; o aéreo internacional é cotado à parte.",
    countries: ["Coreia do Sul"],
    area: "Ásia",
    hotels: [
      { city: "Seul", hotel: "Hotel selecionado (3 noites)" },
      { city: "Busan", hotel: "Hotel selecionado (3 noites)" },
    ],
    departures: [
      "2026-08-03","2026-08-17","2026-08-24","2026-08-31",
      "2026-09-07","2026-09-14","2026-09-21","2026-09-28",
      "2026-10-05","2026-10-12","2026-10-19","2026-10-26",
      "2026-11-02","2026-11-09","2026-11-23",
      "2026-12-07","2026-12-21",
      "2027-01-04","2027-01-18",
      "2027-02-08","2027-02-22",
      "2027-03-08","2027-03-15","2027-03-22","2027-03-29",
      "2027-04-05",
    ],
    itinerary: [
      {
        day: 1,
        route: "SEUL",
        text: "Chegada ao aeroporto de Incheon ou Gimpo, recepção com assistência e traslado ao hotel, para três noites em Seul — cidade de arranha-céus e centros de alta tecnologia que ainda guarda palácios da dinastia Joseon e templos budistas. Check-in a partir das 15h. Restante do dia livre.",
      },
      {
        day: 2,
        route: "SEUL",
        text: "Dia inteiro na Seul contemporânea: subida à Lotte World Tower e ao observatório Seoul Sky, a torre mais alta do país, com vista do rio Han; o complexo COEX, em Gangnam, e a icônica escultura do 'Gangnam Style'; a Starfield Library, com suas estantes gigantes de pé-direito duplo. À tarde, experiência de metrô entre as estações Samsung e Gangnam e passeio pela Gangnam Square — moda, tecnologia e o ritmo da cidade que não dorme. Café da manhã incluído.",
      },
      {
        day: 3,
        route: "SEUL",
        text: "Manhã histórica: o Palácio de Gyeongbokgung, o maior do país, erguido em 1395, onde acontece a cerimônia de troca da guarda com trajes de época; a Praça Gwanghwamun, só para pedestres, com as estátuas do Rei Sejong — criador do alfabeto coreano — e do almirante Yi Sun-sin; vista externa da Prefeitura de Seul e do Palácio Deoksugung, que mistura arquitetura coreana e ocidental. O passeio termina em Myeongdong, o bairro de compras e comida de rua. Tarde livre. Café da manhã incluído.",
      },
      {
        day: 4,
        route: "SEUL / BUSAN (330 km)",
        text: "Traslado à estação de Seul e trem-bala até Busan. Almoço em restaurante local e tarde de visitas: o Mercado Jagalchi, o maior mercado de frutos do mar do país; a Praça BIFF, homenagem ao Festival Internacional de Cinema de Busan; Nampodong, coração comercial e cultural da cidade; e a Aldeia Cultural Gamcheon, labirinto de casas coloridas e murais na encosta, apelidada de 'Santorini coreana'. Acomodação por três noites. Café da manhã e almoço incluídos.",
      },
      {
        day: 5,
        route: "BUSAN",
        text: "Manhã junto ao mar: o Templo Haedong Yonggungsa, construído sobre as rochas de frente para o oceano, onde a oração se mistura ao som das ondas. Depois, embarque no Blue Line Train, o trenzinho colorido que percorre lentamente a costa de Haeundae. Retorno ao hotel e tempo livre. Café da manhã incluído.",
      },
      {
        day: 6,
        route: "BUSAN / GYEONGJU / BUSAN",
        text: "Dia inteiro em Gyeongju, o 'museu sem muros' e antiga capital do Reino de Silla: o Templo Bulguksa (Patrimônio Mundial), a Ponte Woljeonggyo restaurada, o Observatório Cheomseongdae — o mais antigo da Ásia, do século VII — e a rua Hwangridan-gil, onde casas tradicionais convivem com cafés e lojas. À tarde, o parque das Tumbas Daereungwon e Cheonmachong, com relíquias reais da era Silla. Retorno a Busan. Café da manhã incluído.",
      },
      {
        day: 7,
        route: "BUSAN",
        text: "Check-out até as 11h e traslado ao aeroporto internacional de Gimhae. Fim dos nossos serviços. Café da manhã incluído.",
      },
    ],
  },

  {

    slug: "china-classica",
    code: "R019",
    title: "China Clássica",
    subtitle:
      "Pequim · Grande Muralha · Cidade Proibida · Xian · Exército de Terracota · Xangai · The Bund · Guilin · Rio Li Jiang · Yangshuo · Guangzhou · Hong Kong",
    intro:
      "Dez dias na China essencial: caminhar sobre a Grande Muralha, atravessar a Cidade Proibida pátio por pátio, encarar os olhos do Exército de Terracota em Xian, navegar o Rio Li entre os morros de Guilin e terminar em Xangai, com o Bund aceso do outro lado da água.",
    highlights: [
      "Grande Muralha da China em trecho panorâmico",
      "Exército de Terracota em Xian, um dos achados do século",
      "Cidade Proibida e Praça Tiananmen com guia local",
      "Navegação pelo Rio Li entre os pães-de-açúcar de Guilin",
      "The Bund e a silhueta futurista de Pudong à noite",
      "Trens rápidos e voos internos entre as cidades",
    ],
    category: "Primeira",
    days: 10,
    nights: 9,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. Inclui os voos internos Pequim–Xian–Xangai–Guilin e os trens Guilin–Guangzhou e Guangzhou–Hong Kong; o aéreo internacional é cotado à parte.",
    countries: ["China"],
    area: "Ásia",
    hotels: [
      { city: "Pequim", hotel: "Hotel selecionado (3 noites)" },
      { city: "Xian", hotel: "Hotel selecionado (2 noites)" },
      { city: "Xangai", hotel: "Hotel selecionado (2 noites)" },
      { city: "Guilin", hotel: "Hotel selecionado (1 noite)" },
      { city: "Guangzhou", hotel: "Hotel selecionado (1 noite)" },
    ],
    departures: [
      "2026-08-04","2026-08-06","2026-08-11","2026-08-13","2026-08-18","2026-08-20","2026-08-25","2026-08-27",
      "2026-09-01","2026-09-03","2026-09-08","2026-09-10","2026-09-15","2026-09-17","2026-09-22","2026-09-24",
      "2026-10-06","2026-10-08","2026-10-13","2026-10-15","2026-10-20","2026-10-22","2026-10-27","2026-10-29",
      "2026-11-03","2026-11-10","2026-11-17","2026-11-24",
      "2026-12-01","2026-12-08","2026-12-15","2026-12-22","2026-12-29",
      "2027-01-05","2027-01-12","2027-01-19","2027-01-26",
      "2027-02-02","2027-02-09","2027-02-16","2027-02-23",
    ],
    itinerary: [
      {
        day: 1,
        route: "PEQUIM",
        text: "Chegada a Pequim e traslado ao hotel, para três noites na capital chinesa. Restante do dia livre para o primeiro contato com a cidade — talvez um chá numa hutong, o bairro de becos onde a China antiga resiste entre arranha-céus.",
      },
      {
        day: 2,
        route: "PEQUIM",
        text: "Dia inteiro de visitas: o Palácio Imperial (Cidade Proibida), com seus 980 edifícios e cinco séculos de dinastias; a Praça Tien An Men, uma das maiores do mundo; e o Palácio de Verão, o jardim de veraneio da família imperial da dinastia Qing, com o lago Kunming e o Longo Corredor pintado. Restante do dia livre. Café da manhã e almoço incluídos.",
      },
      {
        day: 3,
        route: "PEQUIM",
        text: "Dia inteiro dedicado à Grande Muralha, a obra que sobe e desce as montanhas até o horizonte — de longe o momento mais impressionante da viagem. Parada para fotos do Estádio Nacional Ninho de Pássaro e do Cubo d'Água. À noite, jantar especial de Pato Laqueado de Pequim. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 4,
        route: "PEQUIM / XIAN",
        text: "Pela manhã, visita ao Templo do Céu, onde os imperadores Ming e Qing ofereciam sacrifícios pela boa colheita. À tarde, traslado ao aeroporto e voo para Xian, antiga capital imperial e ponto de partida da Rota da Seda. Acomodação por duas noites. Café da manhã incluído.",
      },
      {
        day: 5,
        route: "XIAN",
        text: "Visita ao Museu do Exército de Terracota da dinastia Qin, com mais de 6.000 figuras em tamanho natural — cada rosto diferente do outro, enterrados há 22 séculos. À tarde, o Pagode do Ganso Selvagem (sem subir) e final do tour no bairro Muçulmano, com seu mercado de rua e a cozinha de especiarias de Xian. Café da manhã e almoço incluídos.",
      },
      {
        day: 6,
        route: "XIAN / XANGAI",
        text: "Pela manhã cedo, traslado ao aeroporto e voo para Xangai, a cidade portuária de mais de 16 milhões de habitantes onde a China olha para o futuro. Chegada, traslado ao hotel e acomodação por duas noites. Café da manhã incluído.",
      },
      {
        day: 7,
        route: "XANGAI",
        text: "Subida à Torre Jinmao — 420 m e 88 andares — para a vista panorâmica da cidade, seguida de passeio pelo The Bund, a orla de edifícios coloniais que encara os arranha-céus de Pudong do outro lado do rio Huangpu. À tarde, o Templo do Buda de Jade e o centro antigo. Café da manhã e almoço incluídos.",
      },
      {
        day: 8,
        route: "XANGAI / GUILIN",
        text: "Traslado ao aeroporto e voo para Guilin, cercada pelos morros de calcário que aparecem na pintura chinesa clássica. À tarde, visita à Gruta das Flautas de Cana, iluminada entre estalactites. Pernoite em Guilin. Café da manhã incluído.",
      },
      {
        day: 9,
        route: "GUILIN / YANGSHUO / GUANGZHOU",
        text: "Cruzeiro pelo rio Li Jiang, entre os picos que emergem da névoa — uma das paisagens mais fotografadas da Ásia. Lanche a bordo. O cruzeiro termina em Yangshuo, povoado às margens do rio, com tempo para a movimentada rua Oeste e seu mercado de artesanato. Em horário apropriado, traslado à estação e trem para Guangzhou. Pernoite. Café da manhã e lanche incluídos.",
      },
      {
        day: 10,
        route: "GUANGZHOU / HONG KONG",
        text: "Pela manhã, a Casa Ancestral da Família Chen, joia arquitetônica famosa por suas esculturas, e o Mercado Qingping, onde se vive o cotidiano cantonês. Passeio pela Praça Huacheng, com a melhor vista da Torre de Cantão. À tarde, trem de alta velocidade para Hong Kong e fim dos nossos serviços. Café da manhã e almoço incluídos.",
      },
    ],
  },

  {

    slug: "armenia-georgia-azerbaijao",
    code: "R624",
    title: "Armênia, Geórgia e Azerbaijão",
    subtitle:
      "Yerevan · Gueghard · Garni · Echmiadzin · Zvartnots · Lago Sevan · Dilijan · Tbilisi · Uplistsikhe · Gori · Mtskheta · Baku · Gobustán",
    intro:
      "Onze dias no Cáucaso, onde a Europa e a Ásia trocam de lugar a cada vale: mosteiros armênios escavados na rocha, o lago Sevan como um mar interior, as varandas de madeira de Tbilisi, as montanhas de Kazbegi e Baku, moderna e ventosa, à beira do Cáspio.",
    highlights: [
      "Mosteiro de Gueghard e o templo pagão de Garni",
      "Lago Sevan e a floresta de Dilijan",
      "Tbilisi antiga: termas de enxofre, becos e vinho de ânfora",
      "Uplistsikhe, a cidade-caverna, e a cidade natal de Stalin em Gori",
      "Estrada militar da Geórgia até Kazbegi, sob o Monte Kazbek",
      "Baku entre a cidade murada e as torres de vidro do Cáspio",
    ],
    category: "Primeira",
    days: 11,
    nights: 10,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Valor de referência por pessoa em apartamento duplo (equivalente aproximado de R$ 27.492 ao câmbio de R$ 6,16), confirmado na cotação da sua data. O trecho aéreo Tbilisi–Baku não está incluído e é cotado junto com o aéreo internacional.",
    countries: ["Armênia", "Geórgia", "Azerbaijão"],
    area: "Cáucaso",
    hotels: [
      { city: "Yerevan", hotel: "Hotel selecionado (4 noites)" },
      { city: "Tbilisi", hotel: "Hotel selecionado (3 noites)" },
      { city: "Baku", hotel: "Hotel selecionado (3 noites)" },
    ],
    departures: [
      "2026-08-08","2026-08-15","2026-08-22","2026-08-29",
      "2026-09-05","2026-09-12","2026-09-19","2026-09-26",
      "2026-10-03","2026-10-10","2026-10-17","2026-10-24","2026-10-31",
      "2026-11-07","2026-11-14","2026-11-21","2026-11-28",
      "2026-12-05","2026-12-12","2026-12-19",
    ],
    itinerary: [
      {
        day: 1,
        route: "YEREVAN",
        text: "Chegada ao aeroporto Zvartnots, em Yerevan, e traslado ao hotel. Primeiro encontro com os companheiros de viagem e noite livre na capital armênia, uma das cidades continuamente habitadas mais antigas do mundo.",
      },
      {
        day: 2,
        route: "YEREVAN",
        text: "Encontro com o guia para a visita da capital: Praça da República, a monumental Cascata com o centro de arte contemporânea Cafesjian e a rua Abovyán. Seguimos para Tsitsernakaberd, com o Parque Memorial e o Museu das Vítimas do Genocídio, e para a feira Vernissage, ideal para artesanato e antiguidades. Tempo livre. Café da manhã incluído.",
      },
      {
        day: 3,
        route: "YEREVAN / GUEGHARD / GARNI / YEREVAN",
        text: "Viagem ao Mosteiro de Gueghard (séc. VII–XII, Patrimônio Mundial), parcialmente esculpido na rocha viva do desfiladeiro — um dos lugares de acústica mais impressionante do Cáucaso. Depois, o Templo Pagão de Garni, o único templo greco-romano preservado no território da antiga União Soviética (séc. I d.C.), com suas termas de estilo romano. Retorno a Yerevan. Café da manhã incluído.",
      },
      {
        day: 4,
        route: "YEREVAN / ECHMIADZIN / ZVARTNOTS / YEREVAN",
        text: "Dia dedicado ao coração espiritual da Armênia: Echmiadzin, sede da primeira igreja cristã do mundo (303 d.C.), onde acompanhamos a missa na catedral principal, e as ruínas da Catedral de Zvartnots (séc. VII), uma das obras mais extraordinárias da arquitetura eclesiástica. Ambas são Patrimônio Mundial. Café da manhã incluído.",
      },
      {
        day: 5,
        route: "YEREVAN / SEVÁN / DILIJAN / SADAKHLO / TBILISI",
        text: "Partida rumo à Geórgia. No caminho, o Lago Sevan, o segundo maior lago alpino do mundo, a 1.900 m de altitude, e Dilijan, a 'Suíça armênia', de florestas densas e casas de madeira. Cruzamos a fronteira em Sadakhlo, onde trocamos de guia e veículo, e seguimos para Tbilisi. Café da manhã incluído.",
      },
      {
        day: 6,
        route: "TBILISI",
        text: "Exploração a pé da capital georgiana, onde oriente e ocidente se encontram: o centro antigo, as casas de banho de enxofre, igrejas medievais, becos com varandas suspensas sobre os abismos e a vibrante Avenida Rustaveli. Opcional: Museu Nacional, Museu Etnográfico ou galerias de arte. Café da manhã incluído.",
      },
      {
        day: 7,
        route: "TBILISI / UPLISTSIKHE / GORI / MTSKHETA / TBILISI",
        text: "Dia na região de Kartli, o coração da Geórgia: a cidade rupestre de Uplistsikhe, escavada na rocha, e Gori. No retorno, parada em Mtskheta, habitada desde o segundo milênio a.C. e Patrimônio Mundial — um museu vivo de arquitetura sacra. Café da manhã incluído.",
      },
      {
        day: 8,
        route: "TBILISI / BAKU",
        text: "Traslado ao aeroporto de Tbilisi e voo para Baku, no Azerbaijão (trecho aéreo não incluído — cotamos junto). Recepção com guia e motorista e traslado ao hotel, para três noites na capital do Cáspio. Café da manhã incluído.",
      },
      {
        day: 9,
        route: "BAKU",
        text: "Visita guiada de Baku: a Pista dos Mártires, com vista panorâmica da baía; a Cidade Velha (Patrimônio Mundial), de ruelas sinuosas dentro das muralhas de Ichari Shahar, com mesquitas, hammams e caravançarais; o Palácio dos Shirvan Shah (séc. XV) e a Torre da Donzela (séc. XII). À tarde, a península de Absheron, com o templo zoroastriano de Ateshgah e Yanar Dagh, a montanha que arde naturalmente há séculos. Café da manhã incluído.",
      },
      {
        day: 10,
        route: "BAKU / GOBUSTÁN / BAKU",
        text: "Viagem à Reserva de Gobustán (Patrimônio Mundial), com mais de 600 mil gravuras rupestres de 5.000 a 20.000 anos — caçadores, danças rituais, barcos e caravanas — entre vulcões de lama. De volta a Baku, visita ao Centro Cultural Heydar Aliyev, ícone da arquitetura contemporânea assinado por Zaha Hadid. Tarde livre. Café da manhã incluído.",
      },
      {
        day: 11,
        route: "BAKU",
        text: "Em horário informado localmente, traslado ao aeroporto de Baku e fim dos nossos serviços. Café da manhã incluído.",
      },
    ],
  },

  {
    slug: "argelia-tunisia-top-deluxe",
    code: "R546",
    title: "Argélia e Tunísia Top Deluxe",
    subtitle:
      "Argel · Tipaza · Djemila · Constantina · Annaba · Tabarka · Bizerte · Túnis · Sidi Bou Said · Cartago · Sousse · Monastir · El Jem · Matmata · Tozeur · Kairouan · Hammamet",
    intro:
      "Quinze dias em dois países que quase ninguém percorre juntos: as ruínas romanas de Djemila e Tipaza sem multidão, a Casbah de Argel, os corais de Tabarka e, na Tunísia, Cartago, Sidi Bou Said e o anfiteatro de El Jem. Norte da África em versão deluxe, do Mediterrâneo ao deserto.",
    highlights: [
      "Djemila e Timgad: Roma preservada no interior da Argélia",
      "Tipaza sobre o mar e a Casbah de Argel",
      "Travessia por Constantina, a cidade suspensa entre pontes",
      "Cartago e Sidi Bou Said em azul e branco",
      "El Jem, o colosso romano no centro da Tunísia",
      "Hotéis top deluxe e 57 saídas garantidas em 2026–2027",
    ],
    category: "Premium",
    days: 15,
    nights: 14,
    priceEur: 4463,
    currency: "USD",
    priceNote:
      "Equivalente aproximado de R$ 27.492 por pessoa (câmbio de referência R$ 6,16), sujeito à conversão do dia da reserva.",
    countries: ["Argélia", "Tunísia"],
    area: "África",
    hotels: [
      { city: "Argel", hotel: "Hotel categoria deluxe (3 noites)" },
      { city: "Constantina", hotel: "Hotel categoria deluxe (2 noites)" },
      { city: "Tabarka", hotel: "Hotel categoria deluxe (1 noite)" },
      { city: "Túnis", hotel: "Hotel categoria deluxe (2 + 1 noites)" },
      { city: "Sousse", hotel: "Hotel categoria deluxe (3 noites)" },
      { city: "Tozeur", hotel: "Hotel categoria deluxe (2 noites)" },
    ],
    departures: [
      "2026-09-12","2026-09-19","2026-09-26",
      "2026-10-03","2026-10-10","2026-10-17","2026-10-24","2026-10-31",
      "2026-11-07","2026-11-14","2026-11-21","2026-11-28",
      "2026-12-05","2026-12-12","2026-12-19","2026-12-26",
      "2027-01-09","2027-01-16","2027-01-23","2027-01-30",
      "2027-02-06","2027-02-13","2027-02-20","2027-02-27",
      "2027-03-06","2027-03-13","2027-03-20","2027-03-27",
      "2027-04-03","2027-04-10","2027-04-17","2027-04-24",
      "2027-05-01","2027-05-08","2027-05-15","2027-05-22","2027-05-29",
      "2027-06-05","2027-06-12","2027-06-19","2027-06-26",
      "2027-09-11","2027-09-18","2027-09-25",
      "2027-10-02","2027-10-09","2027-10-16","2027-10-23","2027-10-30",
      "2027-11-06","2027-11-13","2027-11-20","2027-11-27",
      "2027-12-04","2027-12-11","2027-12-18","2027-12-25",
    ],
    itinerary: [
      {
        day: 1,
        route: "ARGEL",
        text: "Chegada ao aeroporto de Argel — a 'Alger la Blanche', assim chamada pelo branco resplandecente dos edifícios que sobem a encosta vistos do mar. Recepção, traslado ao hotel e pernoite.",
      },
      {
        day: 2,
        route: "ARGEL",
        text: "Visita da capital argelina: a Cidadela, a Kasbah de Argel (Patrimônio Mundial) e a Praça dos Mártires. Almoço incluído em restaurante típico e continuação ao centro pela rua Dibouche, ideal para apreciar a arquitetura colonial francesa. Visita à Igreja Notre Dame d'Afrique, com vista panorâmica sobre a cidade. Tarde livre. Café da manhã e almoço incluídos.",
      },
      {
        day: 3,
        route: "ARGEL / TIPAZA / ARGEL",
        text: "Saída para Tipaza, com visita ao Mausoléu Real da Mauritânia (Tombeau de la Chrétienne) e às ruínas romanas de Tipaza, debruçadas sobre o Mediterrâneo. Após o almoço incluído, regresso a Argel para conhecer a Grande Mesquita de Argel, a terceira maior do mundo e com o minarete mais alto do planeta. Café da manhã e almoço incluídos.",
      },
      {
        day: 4,
        route: "ARGEL / DJEMILA / CONSTANTINA",
        text: "Viagem em direção a Constantina, a 'cidade das pontes', com almoço incluído no caminho. Visita a Djemila — 'a bela', em árabe —, um dos conjuntos de ruínas romanas mais bem preservados do mundo, Patrimônio Mundial desde 1981: basílicas, teatro, arcos, mosaicos e o Museu de Djemila. Pernoite em Constantina. Café da manhã e almoço incluídos.",
      },
      {
        day: 5,
        route: "CONSTANTINA",
        text: "Dia dedicado a Constantina: Mesquita Emir Abdelkader, Museu Cirta e Palácio de Hadj Ahmed Bey. Após o almoço incluído em Igherssan, percurso pelas famosas pontes suspensas sobre o desfiladeiro, o Monumento aos Mortos e obras do arquiteto brasileiro Oscar Niemeyer, incluindo a Universidade de Constantina. Café da manhã e almoço incluídos.",
      },
      {
        day: 6,
        route: "CONSTANTINA / ANNABA / TABARKA",
        text: "Saída para Annaba, com visita à imponente Catedral de Saint Augustin, erguida em homenagem ao filósofo que viveu na antiga Hipona, e ao museu e às ruínas de Hipona — mosaicos, termas e basílica cristã. Após o almoço incluído, seguimos para Tabarka, já na Tunísia, com assistência na fronteira. Café da manhã e almoço incluídos.",
      },
      {
        day: 7,
        route: "TABARKA / BIZERTE / TÚNIS",
        text: "Manhã em Tabarka, cidade costeira do Forte Genovês, das formações rochosas Les Aiguilles e de praias de água cristalina. Continuação a Bizerte, cidade portuária, com passeio pelos pontos emblemáticos e almoço típico. À tarde, viagem a Túnis, jantar e pernoite. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 8,
        route: "TÚNIS / MEDINA / SIDI BOU SAID",
        text: "Exploração da capital tunisiana, fundada no século IX a.C. e capital de cartagineses, romanos, árabes, otomanos e franceses ao longo dos séculos. Almoço na Medina de Túnis, com tempo livre para compras. À tarde, Sidi Bou Said, vila de casas brancas e portas azuis suspensa sobre o mar, com arquitetura árabe-mourisca, cafés e vistas deslumbrantes. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 9,
        route: "TÚNIS / BARDO / CARTAGO / SOUSSE",
        text: "Visita ao Museu do Bardo, que reúne a maior coleção de mosaicos romanos do mundo, e ao sítio arqueológico de Cartago, com ruínas púnicas, as Termas de Antonino e o anfiteatro do festival internacional. Continuação a Sousse, a pérola do litoral. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 10,
        route: "SOUSSE / MONASTIR / SOUSSE",
        text: "Visita ao Ribat de Monastir, a mais antiga fortaleza construída pelos árabes durante a conquista do Magrebe, e ao mausoléu de Bourguiba, primeiro presidente da Tunísia. Almoço em Monastir e tarde na Medina de Sousse, Patrimônio Mundial, com suas muralhas históricas e tempo livre entre as lojas. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 11,
        route: "SOUSSE / EL JEM / MATMATA / TOZEUR",
        text: "Manhã no colossal anfiteatro romano de El Jem, que rivaliza com o Coliseu de Roma. Continuação a Matmata, das casas trogloditas subterrâneas amazigh: visita a uma casa típica e às tradições do povo berbere. Almoço típico e chegada a Tozeur atravessando o lago salgado de Chott El Jerid, onde a evaporação cria miragens. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 12,
        route: "TOZEUR",
        text: "Manhã na charmosa Medina de Tozeur, de tijolos ocres, seguida da visita a um oásis de palmeirais com almoço típico. Tarde livre, com opção de passeio 4x4 pelo deserto (não incluído). Jantar e pernoite em Tozeur. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 13,
        route: "TOZEUR / KAIROUAN / HAMMAMET / TÚNIS",
        text: "Visita a Kairouan, uma das maiores cidades santas do Islã: a Grande Mesquita de Okba Ibn Nafa, primeira mesquita fundada no continente africano, em 671 d.C., e o Mausoléu de Sidi Sahbi. Visita a uma tradicional fábrica de tapetes. Após o almoço incluído, regresso a Túnis com parada em Hammamet. Café da manhã, almoço e jantar incluídos.",
      },
      {
        day: 14,
        route: "TÚNIS",
        text: "Dia livre na capital para compras nos souks, um último café em Sidi Bou Said ou uma visita opcional. Hospedagem em Túnis. Café da manhã incluído.",
      },
      {
        day: 15,
        route: "TÚNIS",
        text: "Em horário apropriado, traslado ao aeroporto de Túnis para o embarque de regresso. Café da manhã incluído. Fim dos nossos serviços.",
      },

    ],
  },

  {
    "slug": "capitais-imperiais-premium",
    "code": "VBP",
    "title": "Capitais Imperiais",
    "subtitle": "Viena · Budapeste · Bratislava · Praga",
    "intro": "Nove dias no coração do antigo império: Viena valsando entre palácios, Budapeste partida em duas pelo Danúbio, Bratislava compacta e teatral, e Praga como um fecho de pedra dourada. Um circuito onde o café da tarde é tão importante quanto o museu da manhã.",
    "highlights": ["Schönbrunn e a Ringstrasse vienense", "Panorama do Bastião dos Pescadores sobre o Danúbio", "Praga: Ponte Carlos e relógio astronômico ao amanhecer", "Termas centenárias e mercado central de Budapeste", "Hotéis Premium em localização central", "Guia local acompanhando todo o circuito"],
    "category": "Premium",
    "days": 9,
    "nights": 8,
    "priceEur": 2055,
    "singleSupplementEur": 1200,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Savoyen"
      },
      {
        "city": "Budapeste",
        "hotel": "Radisson Blu Béke"
      },
      {
        "city": "Praga",
        "hotel": "Grandium"
      }
    ],
    "departures": [
      "2027-04-01",
      "2027-04-08",
      "2027-04-15",
      "2027-04-22",
      "2027-04-29",
      "2027-05-06",
      "2027-05-13",
      "2027-05-20",
      "2027-05-27",
      "2027-06-03",
      "2027-06-10",
      "2027-06-17",
      "2027-06-24",
      "2027-07-01",
      "2027-07-08",
      "2027-07-15",
      "2027-07-22",
      "2027-07-29",
      "2027-08-05",
      "2027-08-12",
      "2027-08-19",
      "2027-08-26",
      "2027-09-02",
      "2027-09-09",
      "2027-09-16",
      "2027-09-23",
      "2027-09-30",
      "2027-10-07",
      "2027-10-14",
      "2027-10-21",
      "2027-10-28"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas de Viena. Continuaremos pela Ringstrasse, com seus magníficos edifícios como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura de Viena, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas pequenas e idílicas ruas do centro histórico de Viena e visitaremos o interior da Catedral de Santo Estêvão, a maior da cidade. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina no centro, na Maria-T"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita da cidade. Budapeste está dividida em duas partes: Buda, onde se encontram o centro histórico, as embaixadas e as residências da alta sociedade, e Pest, onde estão localizados a maioria dos hotéis e lojas. Não esqueça de preparar sua câmera. Neste primeiro passeio veremos a parte de Buda, caminharemos pelo bairro do castelo, onde se encontram dois dos principais destaques da cidade: a Igreja de Matias e o Bastião dos Pescadores. Aqui se encontra provavelmente a vista mais bonita da cidade, perfeita para uma foto panorâmica. Em seguida, continuaremos até o Palácio Real e observaremos as diferentes pontes que conectam as duas partes da cidade. Após a excursão, retorno ao hotel, onde"
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada Patrimônio da Humanidade. Aqui encontra-se o edifício mais importante do boulevard, a Ópera Estatal da Hungria, projetada por Miklós Ybl, assim como o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Sabia que por aqui passa o segundo metrô mais antigo da Europa? Suas elegantes estações são populares entre moradores e visitantes. Também passaremos pelo edifício do Parlamento húngaro, um monumento emblemático às margens do Danúbio, sede do poder legislativo e guardião da Santa Coroa húngara. Antes de continuar até o mercado e a zona pedonal, veremos um dos edifícios mais belos da cidade: a Basílica de Santo E"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em Praga, realizaremos um inesquecível passeio pelo centro histórico da cidade. Mostraremos seus monumentos mais belos e conheceremos as partes mais antigas de Praga. Sabia que a cidade é berço de algumas das melhores cervejas do mundo, com uma fábrica para cada 10.000 habitantes? Praga possui uma das maiores produções de cerveja do mundo. Saúde!"
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena pela rua Nerudova, com suas belas casas e símbolos antigos. Passaremos pela Igreja de São Nicolau até chegar à Ponte Carlos, uma das mais antigas da Europa, que liga a Cidade Pequena à Cidade Velha, de onde se tem uma bela vista. Caminharemos pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus. Por fim, chegaremos à Cidade Nova, onde termina o passeio. Praga também é famosa por sua arte em vidro e porcelana; as marionetes são uma lembrança autêntica para quem ficou em casa."
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 9,
        "route": "PRAGA",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "capitais-imperiais-primeira",
    "code": "EETVBP",
    "title": "Capitais Imperiais · Primeira",
    "subtitle": "Viena · Budapeste · Bratislava · Praga",
    "intro": "As mesmas quatro capitais imperiais em versão Primeira: Viena, Budapeste, Bratislava e Praga com o essencial preservado — cafés históricos, pontes iluminadas e centros a pé — em uma estrutura de hotel mais enxuta e preço mais leve.",
    "highlights": ["Viena imperial: Hofburg, Ópera e Ringstrasse", "Budapeste vista do Bastião dos Pescadores", "Bratislava em caminhada pelo centro medieval", "Praga: Castelo, Malá Strana e Ponte Carlos", "Ônibus moderno com áudio individual", "Excelente relação valor e roteiro"],
    "category": "Primeira",
    "days": 9,
    "nights": 8,
    "priceEur": 1695,
    "singleSupplementEur": 880,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Parkhotel Schönbrunn / Roomz Prater"
      },
      {
        "city": "Budapeste",
        "hotel": "Mercure Korona"
      },
      {
        "city": "Praga",
        "hotel": "Hermitage"
      }
    ],
    "departures": [
      "2027-04-01",
      "2027-04-08",
      "2027-04-15",
      "2027-04-22",
      "2027-04-29",
      "2027-05-06",
      "2027-05-13",
      "2027-05-20",
      "2027-05-27",
      "2027-06-03",
      "2027-06-10",
      "2027-06-17",
      "2027-06-24",
      "2027-07-01",
      "2027-07-08",
      "2027-07-15",
      "2027-07-22",
      "2027-07-29",
      "2027-08-05",
      "2027-08-12",
      "2027-08-19",
      "2027-08-26",
      "2027-09-02",
      "2027-09-09",
      "2027-09-16",
      "2027-09-23",
      "2027-09-30",
      "2027-10-07",
      "2027-10-14",
      "2027-10-21",
      "2027-10-28"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do prín…"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita da cidade. Budapeste está dividida…"
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada…"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em Praga, realizaremos um inesquecível passeio pelo centro histórico da ci…"
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena pela rua Nerudova, com suas belas casas e símbolos antigos. Passaremos pela Igreja de São Nicolau até chegar à Ponte Car-"
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 9,
        "route": "PRAGA",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "leste-europeu-premium",
    "code": "VB",
    "title": "Leste Europeu",
    "subtitle": "Viena · Budapeste · Praga · Dresden · Berlim",
    "intro": "Onze dias descendo o mapa da Europa Central: a elegância de Viena, o vigor de Budapeste, a beleza intacta de Praga, o barroco reconstruído de Dresden e Berlim, cidade que carrega o século XX na pele.",
    "highlights": ["Dresden barroca sobre o Elba", "Berlim: Portão de Brandemburgo e Muro", "Praga em dois dias, com tempo para viver a cidade", "Budapeste e suas termas imperiais", "Viena e um café Sacher sem pressa", "Hotéis Premium em todas as cidades"],
    "category": "Premium",
    "days": 11,
    "nights": 10,
    "priceEur": 2590,
    "singleSupplementEur": 1500,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca",
      "Alemanha"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Savoyen"
      },
      {
        "city": "Budapeste",
        "hotel": "Radisson Blu Béke"
      },
      {
        "city": "Praga",
        "hotel": "Grandium"
      },
      {
        "city": "Berlim",
        "hotel": "JW Marriott"
      }
    ],
    "departures": [
      "2027-04-01",
      "2027-04-08",
      "2027-04-15",
      "2027-04-22",
      "2027-04-29",
      "2027-05-06",
      "2027-05-13",
      "2027-05-20",
      "2027-05-27",
      "2027-06-03",
      "2027-06-10",
      "2027-06-17",
      "2027-06-24",
      "2027-07-01",
      "2027-07-08",
      "2027-07-15",
      "2027-07-22",
      "2027-07-29",
      "2027-08-05",
      "2027-08-12",
      "2027-08-19",
      "2027-08-26",
      "2027-09-02",
      "2027-09-09",
      "2027-09-16",
      "2027-09-23",
      "2027-09-30",
      "2027-10-07",
      "2027-10-14",
      "2027-10-21",
      "2027-10-28"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas de Viena. Continuaremos pela Ringstrasse, com seus magníficos edifícios como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura de Viena, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas pequenas e idílicas ruas do centro histórico de Viena e visitaremos o interior da Catedral de Santo Estêvão, a maior da cidade. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina no centro, na Maria-T"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita da cidade. Budapeste está dividida em duas partes: Buda, onde se encontram o centro histórico, as embaixadas e as residências da alta sociedade, e Pest, onde estão localizados a maioria dos hotéis e lojas. Não esqueça de preparar sua câmera. Neste primeiro passeio veremos a parte de Buda, caminharemos pelo bairro do castelo, onde se encontram dois dos principais destaques da cidade: a Igreja de Matias e o Bastião dos Pescadores. Aqui se encontra provavelmente a vista mais bonita da cidade, perfeita para uma foto panorâmica. Em seguida, continuaremos até o Palácio Real e observaremos as diferentes pontes que conectam as duas partes da cidade. Após a excursão, retorno ao hotel, onde"
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada Patrimônio da Humanidade. Aqui encontra-se o edifício mais importante do boulevard, a Ópera Estatal da Hungria, projetada por Miklós Ybl, assim como o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Sabia que por aqui passa o segundo metrô mais antigo da Europa? Suas elegantes estações são populares entre moradores e visitantes. Também passaremos pelo edifício do Parlamento húngaro, um monumento emblemático às margens do Danúbio, sede do poder legislativo e guardião da Santa Coroa húngara. Antes de continuar até o mercado e a zona pedonal, veremos um dos edifícios mais belos da cidade: a Basílica de Santo E"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em Praga, realizaremos um inesquecível passeio pelo centro histórico da cidade. Mostraremos seus monumentos mais belos e conheceremos as partes mais antigas"
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena pela rua Nerudova, com suas belas casas e símbolos antigos. Passaremos pela Igreja de São Nicolau até chegar à Ponte Carlos, uma das mais antigas da Europa, que liga a Cidade Pequena à Cidade Velha, de onde se tem uma bela vista. Caminharemos pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus. Por fim, chegaremos à Cidade Nova, onde termina o passeio. Praga também é famosa por sua arte em vidro e porcelana; as marionetes são uma lembrança autêntica para quem ficou em casa."
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 9,
        "route": "PRAGA - DRESDEN - BERLIM",
        "text": "Começaremos o dia em direção a Dresden, uma das cidades mais belas da Alemanha, situada às margens do rio Elba. Também é conhecida como a “Florença do Elba”. Embora os bombardeios da aviação americana tenham danificado gravemente a cidade, hoje ela voltou a brilhar com todo o seu esplendor arquitetônico. Destacam-se a joia barroca do Zwinger, a Ópera Semper e a Hofkirche. Sabia que o primeiro chocolate ao leite e, curiosamente, a pasta de dentes foram inventados em Dresden? Continuação da viagem até Berlim e hospedagem."
      },
      {
        "day": 10,
        "route": "BERLIM",
        "text": "Iniciaremos o dia com uma visita panorâmica da cidade, destacando-se as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, oferecemos um passeio de barco pelo rio Spree, a melhor forma de admirar esta magnífica cidade e seus belos edifícios e pontes desde a água. À tarde, terá tempo livre para explorar a cidade por conta própria. Há tanto para ver que certamente encontrará algo interessante. Para os amantes de comida rápida: em Berlim são consumidas cerca de 70 milhões de salsichas currywurst por ano. A cidade inclusive possui um museu dedicado a este prato popular. Ficou curioso?"
      },
      {
        "day": 11,
        "route": "BERLIM",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "leste-europeu-primeira",
    "code": "EETVB",
    "title": "Leste Europeu · Primeira",
    "subtitle": "Viena · Budapeste · Praga · Dresden · Berlim",
    "intro": "De Viena a Berlim em onze dias, atravessando cinco cidades que contam a Europa do império ao muro. Versão Primeira: mesmo roteiro, mesma profundidade, hotelaria mais econômica.",
    "highlights": ["Cinco cidades históricas em um só circuito", "Dresden e o Elba entre Praga e Berlim", "Berlim contemporânea com guia local", "Centro de Praga a pé, do castelo ao rio", "Budapeste em dois dias", "Saídas garantidas e preço competitivo"],
    "category": "Primeira",
    "days": 11,
    "nights": 10,
    "priceEur": 2125,
    "singleSupplementEur": 1100,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca",
      "Alemanha"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Parkhotel Schönbrunn / Roomz Prater"
      },
      {
        "city": "Budapeste",
        "hotel": "Mercure Korona"
      },
      {
        "city": "Praga",
        "hotel": "Hermitage"
      },
      {
        "city": "Berlim",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-04-01",
      "2027-04-08",
      "2027-04-15",
      "2027-04-22",
      "2027-04-29",
      "2027-05-06",
      "2027-05-13",
      "2027-05-20",
      "2027-05-27",
      "2027-06-03",
      "2027-06-10",
      "2027-06-17",
      "2027-06-24",
      "2027-07-01",
      "2027-07-08",
      "2027-07-15",
      "2027-07-22",
      "2027-07-29",
      "2027-08-05",
      "2027-08-12",
      "2027-08-19",
      "2027-08-26",
      "2027-09-02",
      "2027-09-09",
      "2027-09-16",
      "2027-09-23",
      "2027-09-30",
      "2027-10-07",
      "2027-10-14",
      "2027-10-21",
      "2027-10-28"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas de Viena. Continuaremos pela Ringstrasse, com seus magníficos edifícios como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura de Viena, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas pequenas e idílicas ruas do centro histórico de Viena e visitaremos o interior da Catedral de Santo Estêvão, a maior da cidade. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina no centro, na Maria-T"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita da cidade. Budapeste está dividida em duas partes: Buda, onde se encontram o centro histórico, as embaixadas e as residências da alta sociedade, e Pest, onde estão localizados a maioria dos hotéis e lojas. Não esqueça de preparar sua câmera. Neste primeiro passeio veremos a parte de Buda, caminharemos pelo bairro do castelo, onde se encontram dois dos principais destaques da cidade: a Igreja de Matias e o Bastião dos Pescadores. Aqui se encontra provavelmente a vista mais bonita da cidade, perfeita para uma foto panorâmica. Em seguida, continuaremos até o Palácio Real e observaremos as diferentes pontes que conectam as duas partes da cidade. Após a excursão, retorno ao hotel, onde"
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada Patrimônio da Humanidade. Aqui encontra-se o edifício mais importante do boulevard, a Ópera Estatal da Hungria, projetada por Miklós Ybl, assim como o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Sabia que por aqui passa o segundo metrô mais antigo da Europa? Suas elegantes estações são populares entre moradores e visitantes. Também passaremos pelo edifício do Parlamento húngaro, um monumento emblemático às margens do Danúbio, sede do poder legislativo e guardião da Santa Coroa húngara. Antes de continuar até o mercado e a zona pedonal, veremos um dos edifícios mais belos da cidade: a Basílica de Santo E"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em Praga, realizaremos um inesquecível passeio pelo centro histórico da cidade. Mostraremos seus monumentos mais belos e conheceremos as partes mais antigas de Praga. Sabia que a cidade é berço de algumas das melhores cervejas do mundo, com uma fábrica para cada 10.000 habitantes? Praga possui uma das maiores produções de cerveja do mundo. Saúde!"
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena pela rua Nerudova, com suas belas casas e símbolos antigos. Passaremos pela Igreja de São Nicolau até chegar à Ponte Carlos, uma das mais antigas da Europa, que liga a Cidade Pequena à Cidade Velha, de onde se tem uma bela vista. Caminharemos pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus. Por fim, chegaremos à Cidade Nova, onde termina o passeio. Praga também é famosa por sua arte em vidro e porcelana; as marionetes são uma lembrança autêntica para quem ficou em casa."
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 9,
        "route": "PRAGA - DRESDEN - BERLIM",
        "text": "Começaremos o dia em direção a Dresden, uma das cidades mais belas da Alemanha, situada às margens do rio Elba. Também é conhecida como a “Florença do Elba”. Embora os bombardeios da aviação americana tenham danificado gravemente a cidade, hoje ela voltou a brilhar com todo o seu esplendor arquitetônico. Destacam-se a joia barroca do Zwinger, a Ópera Semper e a Hofkirche. Sabia que o primeiro chocolate ao leite e, curiosamente, a pasta de dentes foram inventados em Dresden? Continuação da viagem até Berlim e hospedagem."
      },
      {
        "day": 10,
        "route": "BERLIM",
        "text": "Iniciaremos o dia com uma visita panorâmica da cidade, destacando-se as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, oferecemos um passeio de barco pelo rio Spree, a melhor forma de admirar esta magnífica cidade e seus belos edifícios e pontes desde a água. À tarde, terá tempo livre para explorar a cidade por conta própria. Há tanto para ver que certamente encontrará algo interessante. Para os amantes de comida rápida: em Berlim são consumidas cerca de 70 milhões de salsichas currywurst por ano. A cidade possui inclusive um museu dedicado a este prato popular. Ficou curioso?"
      },
      {
        "day": 11,
        "route": "BERLIM",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "de-viena-a-frankfurt",
    "code": "VF",
    "title": "De Viena a Frankfurt",
    "subtitle": "Viena · Budapeste · Praga · Dresden · Berlim · Weimar · Frankfurt",
    "intro": "Doze dias de Viena a Frankfurt, cruzando o antigo leste e a Alemanha de Goethe: valsa, art nouveau, barroco, Bauhaus e o rio Meno no fim. Um roteiro para quem gosta de ver a história mudar de sotaque a cada parada.",
    "highlights": ["Weimar, cidade de Goethe e do Bauhaus", "Dresden e sua Frauenkirche reconstruída", "Berlim: memória do século XX", "Praga em dois dias completos", "Viena e Budapeste no início do circuito", "Traslados e guia local do começo ao fim"],
    "category": "Premium",
    "days": 12,
    "nights": 11,
    "priceEur": 2795,
    "singleSupplementEur": 1650,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca",
      "Alemanha"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Savoyen"
      },
      {
        "city": "Budapeste",
        "hotel": "Radisson Blu Béke"
      },
      {
        "city": "Praga",
        "hotel": "Grandium"
      },
      {
        "city": "Berlim",
        "hotel": "JW Marriott"
      },
      {
        "city": "Frankfurt",
        "hotel": "Maritim"
      }
    ],
    "departures": [
      "2027-04-22",
      "2027-05-06",
      "2027-05-20",
      "2027-06-03",
      "2027-06-17",
      "2027-07-01",
      "2027-07-15",
      "2027-07-29",
      "2027-08-12",
      "2027-08-26",
      "2027-09-09",
      "2027-09-23"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do prínci…"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita panorâmica da cidade. Budapeste…"
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada…"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em"
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita panorâmica da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena p…"
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão"
      },
      {
        "day": 9,
        "route": "PRAGA - DRESDEN - BERLIM",
        "text": "Começaremos o dia em direção a Dresden, uma das cidades mais belas da Alemanha, situada às margens do rio Elba. Também é conhecida como a “Florença do Elba”. Embora os bombardeios da aviação americana tenham danificado gravemente a cidade, hoje ela voltou a brilhar com todo o seu esplendor arquitetônico. Destacam-se a joia barroca do Zwinger, a Ópera Semper e a Hofkirche. Sabia que o primeiro chocolate ao leite e, curiosamente, a pasta de dentes foram inventados em Dresden? Continuação da viagem até Berlim e hospedagem."
      },
      {
        "day": 10,
        "route": "BERLIM",
        "text": "Iniciaremos o dia com uma visita panorâmica da cidade, destacando-se as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, oferecemos um passeio de barco pelo rio Spree, a melhor forma de admirar esta magnífica cidade e seus belos edifícios e pontes desde a água. À tarde, terá tempo livre para explorar a cidade por conta própria. Há tanto para ver que certamente encontrará algo interessante. Para os amantes de comida rápida: em Berlim são consumidas cerca de 70 milhões de salsichas currywurst por ano. A cidade possui inclusive um museu dedicado a este prato popular Ficou curioso?"
      },
      {
        "day": 11,
        "route": "BERLIM - FRANKFURT",
        "text": "Café da manhã e saída para Frankfurt, passando pela cidade de Weimar, na Turíngia, que ainda hoje conserva seu caráter medieval. Destaque para a Igreja Paroquial, no centro da praça, que abriga um retábulo feito por Lukas Cranach, o Velho. Continuação do percurso até Frankfurt. Chegada e acomodação."
      },
      {
        "day": 12,
        "route": "FRANKFURT",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "triangulo-da-europa-oriental",
    "code": "TRO",
    "title": "Triângulo da Europa Oriental",
    "subtitle": "Viena · Budapeste · Praga · Cracóvia · Varsóvia",
    "intro": "Treze dias para entender a Europa Oriental por dentro: Viena e Budapeste imperiais, Praga luminosa, Cracóvia com sua praça medieval e a memória de Auschwitz, e Varsóvia reconstruída pedra por pedra depois da guerra.",
    "highlights": ["Cracóvia e a maior praça medieval da Europa", "Memorial de Auschwitz-Birkenau com guia", "Varsóvia reconstruída, patrimônio da humanidade", "Praga: castelo, ponte e cervejarias", "Viena e Budapeste em versão imperial", "Cinco países em um único circuito"],
    "category": "Primeira",
    "days": 13,
    "nights": 12,
    "priceEur": 2695,
    "singleSupplementEur": 1320,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca",
      "Polônia"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Parkhotel Schönbrunn / Roomz Prater"
      },
      {
        "city": "Budapeste",
        "hotel": "Mercure Korona"
      },
      {
        "city": "Praga",
        "hotel": "Hermitage"
      },
      {
        "city": "Cracóvia",
        "hotel": "Puro Hotel"
      },
      {
        "city": "Varsóvia",
        "hotel": "Mercure Centrum"
      }
    ],
    "departures": [
      "2027-04-01",
      "2027-04-15",
      "2027-04-29",
      "2027-05-13",
      "2027-05-27",
      "2027-06-10",
      "2027-06-24",
      "2027-07-08",
      "2027-07-22",
      "2027-08-05",
      "2027-08-19",
      "2027-09-02",
      "2027-09-16",
      "2027-09-30",
      "2027-10-14"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas de Viena. Continuaremos pela Ringstrasse, com seus magníficos edifícios como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura de Viena, o Teatro Nacional e o Hofburg, sede do"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita da cidade. Budapeste está dividida em duas partes: Buda, onde se encontram o centro histórico, as embaixa-"
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada Patrimônio da Humanidade. Aqui encontra-se o edifício mais importante do boulevard, a Ópera Estatal da Hungria, projetada por Miklós Ybl, assim como o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Sabia que por aqui passa o segundo metrô mais antigo da Europa? Suas elegantes estações são populares entre"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em Praga, realizaremos um inesquecível passeio pelo centro histórico da cidade. Mostraremos seus monumentos mais belos e conheceremos as partes mais antigas de Praga. Sabia que a cidade é berço de algumas das melhores cervejas do mundo, com uma fábrica para cada 10.000 habitantes? Praga possui uma das maiores produções de cerveja do mundo. Saúde!"
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os"
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 9,
        "route": "PRAGA - WIELICZKA CRACÓVIA",
        "text": "Café da manhã e saída cedo do hotel. Hoje deixaremos a República Tcheca e seguiremos para leste até Cracóvia. Antes de chegar à antiga capital da Polônia, faremos um desvio até Wieliczka, onde visitaremos as famosas minas de sal. Um elevador nos levará a 250 metros abaixo da superfície terrestre, e não deixaremos de nos maravilhar. Não é à toa que as minas são uma atração única no mundo e foram incluídas na Lista do Patrimônio Mundial da UNESCO. A visita passa por belas capelas esculpidas em sal (sendo a mais impressionante a dedicada à beata Kinga), câmaras enormes, grutas de cristal e lagoas subterrâneas. Chegada a Cracóvia no final da tarde. Acomodação."
      },
      {
        "day": 10,
        "route": "CRACÓVIA",
        "text": "Café da manhã e visita da cidade. Cracóvia fascina por seus tesouros arquitetônicos e artísticos, como a colina de Wawel, durante séculos residência dos reis da Polônia, a Igreja de Santa Maria e seu centro histórico, onde se encontra uma das maiores praças medievais da Europa, rodeada por edifícios históricos. Como parte do nosso percurso pela cidade, visitaremos o Castelo de Wawel, sem dúvida o castelo mais importante de toda a Polônia. A maioria dos reis poloneses está enterrada na catedral e conheceremos de perto a extensa história da Polônia. Tarde livre. Hospedagem em Cracóvia."
      },
      {
        "day": 11,
        "route": "CRACÓVIA - CZESTOCHOWA - VARSÓVIA",
        "text": "Café da manhã no hotel e saída em direção a Czestochowa, capital religiosa da Polônia e centro de peregrinação. É mundialmente conhecida por seu santuário de Jasna Gora, onde se encontra a capela da Natividade de Maria com a imagem da «Virgem Negra». Após a visita interna ao santuário, continuação da viagem até Varsóvia. Hospedagem."
      },
      {
        "day": 12,
        "route": "VARSÓVIA",
        "text": "Café da manhã e visita da cidade. Seguiremos o percurso pela Rota Real, que inclui também o centro histórico da cidade, o Parque Real de Lazienki com seu monumento a Chopin e a Igreja de Santa Ana. Tarde livre e hospedagem em Varsóvia."
      },
      {
        "day": 13,
        "route": "VARSÓVIA",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "capitais-imperiais-polonia-e-berlim",
    "code": "TROBER",
    "title": "Capitais Imperiais, Polônia e Berlim",
    "subtitle": "Viena · Budapeste · Praga · Cracóvia · Varsóvia · Berlim",
    "intro": "Quinze dias de Viena a Berlim pela Polônia: o império, o gótico polonês, a memória da guerra e a cidade que se reinventou. É o circuito mais completo da Europa Central, para quem quer ver a linha inteira da história.",
    "highlights": ["Seis capitais e cidades históricas em 15 dias", "Cracóvia, Wieliczka e Varsóvia", "Berlim como encerramento do roteiro", "Praga em dois dias", "Budapeste, Viena e Bratislava", "Ônibus moderno e guia local permanente"],
    "category": "Primeira",
    "days": 15,
    "nights": 14,
    "priceEur": 2985,
    "singleSupplementEur": 1320,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca",
      "Polônia",
      "Alemanha"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Parkhotel Schönbrunn"
      },
      {
        "city": "Budapeste",
        "hotel": "Mercure Korona"
      },
      {
        "city": "Praga",
        "hotel": "Hermitage"
      },
      {
        "city": "Cracóvia",
        "hotel": "Puro Hotel"
      },
      {
        "city": "Varsóvia",
        "hotel": "Mercure Centrum"
      },
      {
        "city": "Berlim",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-04-01",
      "2027-04-15",
      "2027-04-29",
      "2027-05-13",
      "2027-05-27",
      "2027-06-10",
      "2027-06-24",
      "2027-07-08",
      "2027-07-22",
      "2027-08-05",
      "2027-08-19",
      "2027-09-02",
      "2027-09-16",
      "2027-09-30"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas de Viena. Continuaremos pela Ringstrasse, com seus magníficos edifícios como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura de Viena, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas pequenas e idílicas ruas do centro histórico de Viena e visitaremos o interior da Catedral de Santo Estêvão, a maior da cidade. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina no centro, na Maria-T"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita da cidade. Budapeste está dividida em duas partes: Buda, onde se encontram o centro histórico, as embaixadas e as residências da alta sociedade, e Pest, onde estão localizados a maioria dos hotéis e lojas. Não esqueça de preparar sua câmera. Neste primeiro passeio veremos a parte de Buda, caminharemos pelo bairro do castelo, onde se encontram dois dos principais destaques da cidade: a Igreja de Matias e o Bastião dos Pescadores. Aqui se encontra provavelmente a vista mais bonita da cidade, perfeita para uma foto panorâmica. Em seguida, continuaremos até o Palácio Real e observaremos as diferentes pontes que conectam as duas partes da cidade. Após a excursão, retorno ao hotel, onde"
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada Patrimônio da Humanidade. Aqui encontra-se o edifício mais importante do boulevard, a Ópera Estatal da Hungria, projetada por Miklós Ybl, assim como o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Sabia que por aqui passa o segundo metrô mais antigo da Europa? Suas elegantes estações são populares entre moradores e visitantes. Também passaremos pelo edifício do Parlamento húngaro, um monumento emblemático às margens do Danúbio, sede do poder legislativo e guardião da Santa Coroa húngara. Antes de continuar até o mercado e a zona pedonal, veremos um dos edifícios mais belos da cidade: a Basílica de Santo E"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em Praga, realizaremos um inesquecível passeio pelo centro histórico da cidade. Mostraremos seus monumentos mais belos e conheceremos as partes mais antigas de Praga. Sabia que a cidade é berço de algumas das melhores cervejas do mundo, com uma fábrica para cada 10.000 habitantes? Praga possui uma das maiores produções de cerveja do mundo. Saúde!"
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitare-"
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 9,
        "route": "PRAGA - WIELICZKA CRACÓVIA",
        "text": "Café da manhã e saída cedo do hotel. Hoje deixaremos a República Tcheca e seguiremos para leste até Cracóvia. Antes de chegar à antiga capital da Polônia, faremos um desvio até Wieliczka, onde visitaremos as famosas minas de sal. Um elevador nos levará a 250 metros abaixo da superfície terrestre, e não deixaremos de nos maravilhar. Não é à toa que as minas são uma atração única no mundo e foram incluídas na Lista do Patrimônio Mundial da UNESCO. A visita passa por belas capelas esculpidas em sal (sendo a mais impressionante a dedicada à beata Kinga), câmaras enormes, grutas de cristal e lagoas subterrâneas. Chegada a Cracóvia no final da tarde. Acomodação."
      },
      {
        "day": 10,
        "route": "CRACÓVIA",
        "text": "Café da manhã e visita da cidade. Cracóvia fascina por seus tesouros arquitetônicos e artísticos, como a colina de Wawel, durante séculos residência dos reis da Polônia, a Igreja de Santa Maria e seu centro histórico, onde se encontra uma das maiores praças medievais da Europa, rodeada por edifícios históricos. Como parte do nosso percurso pela cidade, visitaremos o Castelo de Wawel, sem dúvida o castelo mais importante de toda a Polônia. A maioria dos reis poloneses está enterrada na catedral e conheceremos de perto a extensa história da Polônia. Tarde livre. Hospedagem em Cracóvia."
      },
      {
        "day": 11,
        "route": "CRACÓVIA - CZESTOCHOWA - VARSÓVIA",
        "text": "Café da manhã no hotel e saída em direção a Czestochowa, capital religiosa da Polônia e centro de peregrinação. É mundialmente conhecida por seu santuário de Jasna Gora, onde se encontra a capela da Natividade de Maria com a imagem da «Virgem Negra». Após a visita interna ao santuário, continuação da viagem até Varsóvia. Hospedagem."
      },
      {
        "day": 12,
        "route": "VARSÓVIA",
        "text": "Café da manhã e visita da cidade. Seguiremos o percurso pela Rota Real, que inclui também o centro histórico da cidade, o Parque Real de Lazienki com seu monumento a Chopin e a Igreja de Santa Ana. Tarde livre e hospedagem em Varsóvia."
      },
      {
        "day": 13,
        "route": "VARSÓVIA - BERLIM",
        "text": "Café da manhã e saída em direção a Berlim. Hospedagem em Berlim."
      },
      {
        "day": 14,
        "route": "BERLIM",
        "text": "Iniciaremos o dia com uma visita panorâmica da cidade, destacando- -se as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, oferecemos um passeio de barco pelo rio Spree, a melhor forma de admirar esta magnífica cidade e seus belos edifícios e pontes desde a água. À tarde, terá tempo livre para explorar a cidade por conta própria. Há tanto para ver que certamente encontrará algo interessante. Para os amantes de comida rápida: em Berlim são consumidas cerca de 70 milhões de salsichas currywurst por ano.A cidade possui inclusive um museu dedicado a este prato popular Ficou curioso?"
      },
      {
        "day": 15,
        "route": "BERLIM",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "praga-polonia-e-berlim",
    "code": "POLBER",
    "title": "Praga, Polônia e Berlim",
    "subtitle": "Praga · Wieliczka · Cracóvia · Czestochowa · Varsóvia · Berlim",
    "intro": "Dez dias entre Praga, Polônia e Berlim: a mina de sal de Wieliczka a cem metros de profundidade, o santuário de Czestochowa, a praça de Cracóvia ao pôr do sol e Berlim inteira em contraste.",
    "highlights": ["Mina de sal de Wieliczka, patrimônio da humanidade", "Santuário de Czestochowa, coração espiritual polonês", "Cracóvia medieval e sua Rynek Glowny", "Varsóvia e a cidade velha reconstruída", "Berlim com guia local", "Roteiro compacto e bem encadeado"],
    "category": "Primeira",
    "days": 10,
    "nights": 9,
    "priceEur": 2090,
    "singleSupplementEur": 990,
    "countries": [
      "República Tcheca",
      "Polônia",
      "Alemanha"
    ],
    "hotels": [
      {
        "city": "Praga",
        "hotel": "Hermitage"
      },
      {
        "city": "Cracóvia",
        "hotel": "Puro Hotel"
      },
      {
        "city": "Varsóvia",
        "hotel": "Mercure Centrum"
      },
      {
        "city": "Berlim",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-05-25",
      "2027-06-08",
      "2027-07-20",
      "2027-08-31",
      "2027-09-14",
      "2027-09-28"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "PRAGA",
        "text": "Chegada ao aeroporto, traslado para o hotel e acomodação. O guia estará no hotel a partir das 19h."
      },
      {
        "day": 2,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena pela rua Nerudova, com suas belas casas e símbolos antigos. Passaremos pela Igreja de São Nicolau até chegar à Ponte Carlos, uma das mais antigas da Europa, que liga a Cidade Pequena à Cidade Velha, de onde se tem uma bela vista. Caminharemos pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus. Por fim, chegaremos à Cidade Nova, onde termina o passeio. Praga também é famosa por sua arte em vidro e porcelana; as marionetes são uma lembrança autêntica para quem ficou em casa."
      },
      {
        "day": 3,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 4,
        "route": "PRAGA - WIELICZKA CRACÓVIA",
        "text": "Café da manhã e saída cedo do hotel. Hoje deixaremos a República Tcheca e seguiremos para leste até Cracóvia. Antes de chegar à antiga capital da Polônia, faremos um desvio até Wieliczka, onde visitaremos as famosas minas de sal. Um elevador nos levará a 250 metros abaixo da superfície terrestre, e não deixaremos de nos maravilhar. Não é à toa que as minas são uma atração única no mundo e foram incluídas na Lista do Patrimônio Mundial da UNESCO. A visita passa por belas capelas esculpidas em sal (sendo a mais impressionante a dedicada à beata Kinga), câmaras enormes, grutas de cristal e lagoas subterrâneas. Chegada a Cracóvia no final da tarde. Acomodação."
      },
      {
        "day": 5,
        "route": "CRACÓVIA",
        "text": "Café da manhã e visita da cidade. Cracóvia fascina por seus tesouros arquitetônicos e artísticos, como a colina de Wawel, durante séculos residência dos reis da Polônia, a Igreja de Santa Maria e seu centro histórico, onde se encontra uma das maiores praças medievais da Europa, rodeada por edifícios históricos. Como parte do nosso percurso pela cidade, visitaremos o Castelo de Wawel, sem dúvida o castelo mais importante de toda a Polônia. A maioria dos reis poloneses está enterrada na catedral e conheceremos de perto a extensa história da Polônia. Tarde livre. Hospedagem em Cracóvia."
      },
      {
        "day": 6,
        "route": "CRACÓVIA - CZESTOCHOWA - VARSÓVIA",
        "text": "Café da manhã no hotel e saída em direção a Czestochowa, capital religiosa da Polônia e centro de peregrinação. É mundialmente conhecida por seu santuário de Jasna Gora, onde se encontra a capela da Natividade de Maria com a imagem da «Virgem Negra». Após a visita interna ao santuário, continuação da viagem até Varsóvia. Hospedagem."
      },
      {
        "day": 7,
        "route": "VARSÓVIA",
        "text": "Café da manhã e visita da cidade. Seguiremos o percurso pela Rota Real, que inclui também o centro histórico da cidade, o Parque Real de Lazienki com seu monumento a Chopin e a Igreja de Santa Ana. Tarde livre e hospedagem em Varsóvia."
      },
      {
        "day": 8,
        "route": "VARSÓVIA - BERLIM",
        "text": "Café da manhã e saída em direção a Berlim. Hospedagem em Berlim."
      },
      {
        "day": 9,
        "route": "BERLIM",
        "text": "Iniciaremos o dia com uma visita panorâmica da cidade, destacando-se as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, oferecemos um passeio de barco pelo rio Spree, a melhor forma de admirar esta magnífica cidade e seus belos edifícios e pontes desde a água. À tarde, terá tempo livre para explorar a cidade por conta própria. Há tanto para ver que certamente encontrará algo interessante. Para os amantes de comida rápida: em Berlim são consumidas cerca de 70 milhões de salsichas currywurst por ano. A cidade possui inclusive um museu dedicado a este prato popular. Ficou curioso?"
      },
      {
        "day": 10,
        "route": "BERLIM",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "croacia-eslovenia-e-bosnia",
    "code": "VIEZAG",
    "title": "Croácia, Eslovênia e Bósnia",
    "subtitle": "Viena · Liubliana · Bled · Zadar · Split · Dubrovnik · Mostar · Sarajevo · Zagreb",
    "intro": "Treze dias do Danúbio ao Adriático: os lagos alpinos da Eslovênia, as muralhas de Dubrovnik sobre o mar, o palácio romano de Split, a ponte de Mostar e Sarajevo, cidade que ensina mais do que qualquer livro.",
    "highlights": ["Muralhas de Dubrovnik ao fim da tarde", "Lago Bled e o castelo sobre a água", "Palácio de Diocleciano em Split", "Ponte Velha de Mostar, patrimônio da humanidade", "Sarajevo entre oriente e ocidente", "Costa adriática de norte a sul"],
    "category": "Premium",
    "days": 13,
    "nights": 12,
    "priceEur": 3395,
    "singleSupplementEur": 1800,
    "countries": [
      "Áustria",
      "Eslovênia",
      "Croácia",
      "Bósnia e Herzegovina"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "InterContinental"
      },
      {
        "city": "Liubliana",
        "hotel": "Grand Plaza"
      },
      {
        "city": "Split",
        "hotel": "Hotel Atrium"
      },
      {
        "city": "Dubrovnik",
        "hotel": "Dubrovnik Palace"
      },
      {
        "city": "Sarajevo",
        "hotel": "Hotel President"
      },
      {
        "city": "Zagreb",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-04-11",
      "2027-04-25",
      "2027-05-09",
      "2027-05-16",
      "2027-05-23",
      "2027-05-30",
      "2027-06-06",
      "2027-06-20",
      "2027-07-04",
      "2027-07-18",
      "2027-08-01",
      "2027-08-15",
      "2027-08-29",
      "2027-09-05",
      "2027-09-12",
      "2027-09-19",
      "2027-09-26",
      "2027-10-10"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, exploraremos Viena com uma visita panorâmica que oferece uma excelente impressão de seus numerosos atrativos. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas. Continuaremos pela Ringstrasse, com edifícios emblemáticos como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas encantadoras ruas do centro histórico e visitaremos o interior da Catedral de Santo Estêvão. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina na Maria-Theresien-Platz. Após a visi-"
      },
      {
        "day": 3,
        "route": "VIENA - LIUBLIANA",
        "text": "Pela manhã, partiremos de ônibus em direção a Ljubljana, a encantadora capital da Eslovênia. Na chegada, realizaremos um passeio a pé pelo centro histórico, onde se destacam a Prefeitura, a Fonte de Robba, as Três Pontes, a Universidade e o Parlamento. Hospedagem."
      },
      {
        "day": 4,
        "route": "LIUBLIANA - POSTOJNA BLED - LIUBLIANA",
        "text": "Hoje seguiremos em direção a Postojna, famosa por suas impressionantes cavernas de estalactites. A visita será realizada em um trem turístico mineiro que percorre espaços tão evocativos como o Salão de Baile e o Paraíso. Destaca-se especialmente a grande caverna abobadada conhecida como Sala de Concertos. Continuação até Bled, com seu icônico lago e sua pequena ilha, uma das imagens mais representativas do país. Retorno a Ljubljana e hospedagem."
      },
      {
        "day": 5,
        "route": "LIUBLIANA - ZADAR - SPLIT",
        "text": "Deixaremos Ljubljana para seguir em direção a Zadar, cidade que foi o centro administrativo da Dalmácia bizantina e alcançou grande importância na Europa no século XVII. Na chegada, visitaremos as ruínas do Forum Romanum e a Igreja de São Donato do século IX. Posteriormente,"
      },
      {
        "day": 6,
        "route": "SPLIT",
        "text": "Dedicaremos o dia a descobrir Split, cidade que surgiu ao redor do monumental palácio do imperador romano Diocleciano. Passeando por suas praças e pelo animado calçadão à beira do Adriático, conheceremos seus principais atrativos, como o Vestíbulo do Palácio, o Peristilo, o campanário da Catedral de São Domnio e o Templo de Júpiter. Hospedagem."
      },
      {
        "day": 7,
        "route": "SPLIT - DUBROVNIK",
        "text": "Percorreremos a escarpada costa dálmata em direção a Dubrovnik, desfrutando de uma paisagem única com inúmeras ilhas sobre o Adriático. Na chegada, realizaremos a visita desta joia histórica, declarada Patrimônio da Humanidade pela UNESCO. Destacam-se a Igreja Franciscana, o Palácio do Reitor, a Catedral e o Mosteiro Dominicano. A imponente Torre Minceta, uma das mais bem conservadas da Europa, completa este conjunto monumental. Hospedagem."
      },
      {
        "day": 8,
        "route": "DUBROVNIK",
        "text": "Dia livre para aproveitar a cidade no seu próprio ritmo. Opcionalmente, poderá realizar uma excursão a Montenegro, visitando alguns dos recantos mais pitorescos do país (não incluída). Hospedagem."
      },
      {
        "day": 9,
        "route": "DUBROVNIK - MEDJUGORJE - MOSTAR - SARAJEVO",
        "text": "Saída em direção à Bósnia e Herzegovina, com uma primeira parada em"
      },
      {
        "day": 10,
        "route": "SARAJEVO",
        "text": "Exploraremos Sarajevo, uma cidade que surpreende por sua diversidade cultural. Entre seus principais atrativos encontram-se a Mesquita Husrev Beg, com sua delicada ornamentação, assim como o tradicional bazar «Baščaršija», o bairro austro-húngaro e o estádio olímpico. À tarde, tempo livre. Hospedagem."
      },
      {
        "day": 11,
        "route": "SARAJEVO - ZAGREB",
        "text": "Seguiremos em direção a Zagreb, capital da Croácia. Após a chegada, passeio pelo centro histórico, onde se destacam o Palácio do Governo, a Catedral de Santo Estêvão e a Igreja de São Marcos."
      },
      {
        "day": 12,
        "route": "ZAGREB",
        "text": "Dia livre para continuar explorando a cidade ou realizar uma excursão opcional aos Lagos de Plitvice (não incluída)."
      },
      {
        "day": 13,
        "route": "ZAGREB",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "perolas-dos-balcas",
    "code": "LJUZAG",
    "title": "Pérolas dos Bálcãs",
    "subtitle": "Liubliana · Postojna · Bled · Zadar · Split · Dubrovnik · Mostar · Sarajevo · Zagreb",
    "intro": "Onze dias no Adriático e nos Bálcãs: as grutas de Postojna, o azul de Bled, a pedra branca da Dalmácia, Dubrovnik intacta e o encontro de culturas em Mostar e Sarajevo.",
    "highlights": ["Grutas de Postojna, catedral subterrânea", "Lago Bled e os Alpes Julianos", "Zadar, Split e as ilhas dálmatas", "Dubrovnik, a pérola do Adriático", "Mostar e Sarajevo em um só roteiro", "Zagreb como encerramento"],
    "category": "Premium",
    "days": 11,
    "nights": 10,
    "priceEur": 2795,
    "singleSupplementEur": 1500,
    "countries": [
      "Eslovênia",
      "Croácia",
      "Bósnia e Herzegovina"
    ],
    "hotels": [
      {
        "city": "Liubliana",
        "hotel": "Grand Plaza"
      },
      {
        "city": "Split",
        "hotel": "Hotel Atrium"
      },
      {
        "city": "Dubrovnik",
        "hotel": "Dubrovnik Palace"
      },
      {
        "city": "Sarajevo",
        "hotel": "Hotel President"
      },
      {
        "city": "Zagreb",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-04-13",
      "2027-04-27",
      "2027-05-11",
      "2027-05-18",
      "2027-05-25",
      "2027-06-08",
      "2027-06-22",
      "2027-07-06",
      "2027-07-20",
      "2027-08-03",
      "2027-08-17",
      "2027-08-31",
      "2027-09-07",
      "2027-09-14",
      "2027-09-21",
      "2027-09-28",
      "2027-10-12"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "LIUBLIANA",
        "text": "Chegada ao aeroporto, traslado ao hotel. Acomodação. O guia estará no hotel a partir das 19h."
      },
      {
        "day": 2,
        "route": "LIUBLIANA - POSTOJNA BLED - LIUBLIANA",
        "text": "Hoje seguiremos em direção a Postojna, famosa por suas impressionantes cavernas de estalactites. A visita será realizada em um trem turístico mineiro que percorre espaços tão evocativos como o Salão de Baile e o Paraíso. Destaca-se especialmente a grande caverna abobadada conhecida como Sala de Concertos. Em seguida, continuação até Bled, com seu icônico lago e sua pequena ilha, uma das imagens mais representativas do país. Retorno a Ljubljana e hospedagem."
      },
      {
        "day": 3,
        "route": "LIUBLIANA - ZADAR - SPLIT",
        "text": "Deixaremos Ljubljana para seguir em direção a Zadar, cidade que foi o centro administrativo da Dalmácia bizantina e alcançou grande importância na Europa no século XVII. Na chegada, visitaremos as ruínas do Forum Romanum e a Igreja de São Donato do século IX. Posteriormente, continuação até Split, principal cidade da região da Dalmácia. Hospedagem."
      },
      {
        "day": 4,
        "route": "SPLIT",
        "text": "Dedicaremos o dia a descobrir Split, cidade que surgiu ao redor do monumental palácio do imperador romano Diocleciano. Passeando por suas praças e pelo animado calçadão à beira do Adriático, conheceremos seus principais atrativos, como o Vestíbulo do Palácio, o Peristilo, o campanário da Catedral de São Domnio e o Templo de Júpiter. Hospedagem."
      },
      {
        "day": 5,
        "route": "SPLIT - DUBROVNIK",
        "text": "Percorreremos a escarpada costa dálmata em direção a Dubrovnik, desfrutando de uma paisagem única com inúmeras ilhas sobre o Adriático. Na chegada, realizaremos a visita desta joia histórica, declarada Patrimônio da Humanidade pela UNESCO. Destacam-se a Igreja Franciscana, o Palácio do Reitor, a Catedral e o Mosteiro Dominicano. A imponente Torre Minceta, uma das mais bem conservadas da Europa, completa este conjunto monumental. Hospedagem."
      },
      {
        "day": 6,
        "route": "DUBROVNIK",
        "text": "Dia livre para aproveitar a cidade no seu próprio ritmo. Opcionalmente, poderá realizar uma excursão a Montenegro, visitando alguns dos recantos mais pitorescos do país (não incluída). Hospedagem."
      },
      {
        "day": 7,
        "route": "DUBROVNIK - MEDJUGORJE - MOSTAR - SARAJEVO",
        "text": "Saída em direção à Bósnia e Herzegovina, com uma primeira parada em Medjugorje, importante centro de peregrinação. Continuação até Mostar, cidade marcada por sua história recente e símbolo de convivência cultural, cujo centro histórico encanta com suas ruas medievais e lojas tradicionais. Em seguida, seguiremos até Sarajevo, capital do país e ponto de encontro de diferentes religiões e culturas. Sua história está profundamente ligada a acontecimentos-chave como o assassinato do arquiduque Francisco Ferdinando em 1914. com sua delicada ornamentação, assim como o tradicional bazar «Baščaršija», o bairro austro-húngaro e o estádio olímpico. À tarde, tempo livre. Hospedagem."
      },
      {
        "day": 8,
        "route": "SARAJEVO",
        "text": "Exploraremos Sarajevo, uma cidade que surpreende por sua diversidade cultural. Entre seus principais atrativos encontram-se a Mesquita Husrev Beg,"
      },
      {
        "day": 9,
        "route": "SARAJEVO - ZAGREB",
        "text": "Seguiremos em direção a Zagreb, capital da Croácia. Após a chegada, passeio pelo centro histórico, onde se destacam o Palácio do Governo, a Catedral de Santo Estêvão e a Igreja de São Marcos."
      },
      {
        "day": 10,
        "route": "ZAGREB",
        "text": "Dia livre para continuar explorando a cidade ou realizar uma excursão opcional aos Lagos de Plitvice (não incluída)."
      }
    ]
  },
  {
    "slug": "balcas-e-capitais-imperiais",
    "code": "CROIMP",
    "title": "Bálcãs e Capitais Imperiais",
    "subtitle": "Viena · Liubliana · Split · Dubrovnik · Sarajevo · Zagreb · Budapeste · Praga",
    "intro": "Vinte dias para juntar dois mundos: o Adriático de pedra e sal — Split, Dubrovnik, Sarajevo — e as capitais imperiais de Viena, Budapeste e Praga. É o grande tour da Europa Central e dos Bálcãs em uma só viagem.",
    "highlights": ["Vinte dias, oito destinos, um só circuito", "Dubrovnik e a costa dálmata", "Sarajevo e Mostar com guia local", "Viena, Budapeste e Praga no encerramento", "Lago Bled e Liubliana", "Ideal para quem viaja de longe e quer ver tudo"],
    "category": "Premium",
    "days": 20,
    "nights": 19,
    "priceEur": 4795,
    "singleSupplementEur": 2850,
    "countries": [
      "Áustria",
      "Eslovênia",
      "Croácia",
      "Bósnia e Herzegovina",
      "Hungria",
      "Eslováquia",
      "República Tcheca"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "InterContinental"
      },
      {
        "city": "Liubliana",
        "hotel": "Grand Plaza"
      },
      {
        "city": "Split",
        "hotel": "Atrium"
      },
      {
        "city": "Dubrovnik",
        "hotel": "Dubrovnik Palace"
      },
      {
        "city": "Sarajevo",
        "hotel": "Hotel President"
      },
      {
        "city": "Zagreb",
        "hotel": "Sheraton"
      },
      {
        "city": "Budapeste",
        "hotel": "Radisson Blu Béke"
      },
      {
        "city": "Praga",
        "hotel": "Grandium"
      }
    ],
    "departures": [
      "2027-04-11",
      "2027-04-25",
      "2027-05-09",
      "2027-05-23",
      "2027-06-06",
      "2027-06-20",
      "2027-07-04",
      "2027-07-18",
      "2027-08-01",
      "2027-08-15",
      "2027-08-29",
      "2027-09-05",
      "2027-09-19"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, exploraremos Viena com uma visita panorâmica que oferece uma excelente impressão de seus numerosos atrativos. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas. Continuaremos pela Ringstrasse, com edifícios emblemáticos"
      },
      {
        "day": 3,
        "route": "VIENA - LIUBLIANA",
        "text": "Pela manhã, partiremos de ônibus em direção a Ljubljana, a encantadora capital da Eslovênia. Na chegada, realizaremos um passeio a pé pelo centro histórico, onde se destacam a Prefeitura, a Fonte de Robba, as Três Pontes, a Universidade e o Parlamento. Hospedagem."
      },
      {
        "day": 4,
        "route": "LIUBLIANA - POSTOJNA BLED - LIUBLIANA",
        "text": "Hoje seguiremos em direção a Postojna, famosa por suas impressionantes cavernas de estalactites. A visita será realizada"
      },
      {
        "day": 5,
        "route": "LIUBLIANA - ZADAR - SPLIT",
        "text": "Deixaremos Ljubljana para seguir em direção a Zadar, cidade que foi o centro administrativo da Dalmácia bizantina e alcançou grande importância na Europa no século XVII. Na chegada, visitaremos as ruínas do Forum Romanum e a Igreja de São Donato do século IX. Posteriormente, continuação até Split, principal cidade da região da Dalmácia. Hospedagem."
      },
      {
        "day": 6,
        "route": "SPLIT",
        "text": "Dedicaremos o dia a descobrir Split, cidade que surgiu ao redor do monumental palácio do imperador romano Diocleciano. Passeando por suas praças e pelo animado calçadão à beira do Adriático, conheceremos seus principais atrativos, como o Vestíbulo do"
      },
      {
        "day": 7,
        "route": "SPLIT - DUBROVNIK",
        "text": "Percorreremos a escarpada costa dálmata em direção a Dubrovnik, desfrutando de uma paisagem única com inúmeras ilhas sobre o Adriático. Na chegada, realizaremos a visita desta joia histórica, declarada Patrimônio da Humanidade pela UNESCO. Destacam-se a Igreja Franciscana, o Palácio do Reitor, a Catedral e o Mosteiro Dominicano. A imponente Torre Minceta, uma das mais bem conservadas da Europa, completa este conjunto monumental. Hospedagem."
      },
      {
        "day": 8,
        "route": "DUBROVNIK",
        "text": "Dia livre para aproveitar a cidade no seu próprio ritmo. Opcionalmente, poderá realizar uma excursão a Montenegro, visitando alguns dos recantos mais pitorescos do país (não incluída). Hospedagem."
      },
      {
        "day": 9,
        "route": "DUBROVNIK - MEDJUGORJE - MOSTAR - SARAJEVO",
        "text": "Saída em direção à Bósnia e Herzegovina, com uma primeira parada em Medjugorje, importante centro de"
      },
      {
        "day": 10,
        "route": "SARAJEVO",
        "text": "Exploraremos Sarajevo, uma cidade que surpreende por sua diversidade cultural. Entre seus principais atrativos encontram-se a Mesquita Husrev Beg, com sua delicada ornamentação, assim como o tradicional bazar «Baščaršija», o bairro austro-húngaro e o estádio olímpico. À tarde, tempo livre. Hospedagem."
      },
      {
        "day": 11,
        "route": "SARAJEVO - ZAGREB",
        "text": "Seguiremos em direção a Zagreb, capital da Croácia. Após a chegada, passeio pelo centro histórico, onde se destacam o Palácio do Governo, a Catedral de Santo Estêvão e a Igreja de São Marcos."
      },
      {
        "day": 12,
        "route": "ZAGREB",
        "text": "Dia livre para continuar explorando a cidade ou realizar uma excursão opcional aos Lagos de Plitvice (não incluída)"
      },
      {
        "day": 13,
        "route": "ZAGREB - VIENA",
        "text": ". Café da manhã e saída para Viena. Chegada à tarde e acomodação."
      },
      {
        "day": 14,
        "route": "VIENA",
        "text": "Dia livre após o café da manhã no hotel reservado. Se depois das impressões da capital você se sente mais atraído pela natureza, recomendamos participar de nossa excursão ao famoso Vale do Danúbio, a cerca de 80 km de Viena e que abriga um dos mais belos trechos do Danúbio (não incluída). Gostaria de surpreender seus entes queridos em casa com um souvenir autêntico? Nossa dica: A região de Wachau é famosa pelo cultivo de damascos e pelos produtos feitos a partir deles, de chocolate e licor a aguardente."
      },
      {
        "day": 15,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio. Ao chegar, realizaremos uma visita da cidade. Budapeste está dividida em duas partes: Buda, onde se encontram o centro histórico, as embaixadas e as residências da alta sociedade, e Pest, onde estão localizados a maioria dos hotéis e lojas. Não esqueça de preparar sua câmera. Neste primeiro passeio veremos a parte de Buda, caminharemos pelo bairro do castelo, onde se encontram dois dos principais destaques da cidade: a Igreja de Matias e o Bastião dos Pescadores. Aqui se encontra provavelmente a vista mais bonita da cidade, perfeita para uma foto panorâmica. Em seguida, continuaremos até o Palácio Real e observaremos as diferentes pontes que conectam as duas partes da cidade. Após a excursão, retorno ao hotel, onde"
      },
      {
        "day": 16,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada Patrimônio da Humanidade. Aqui encontra-se o edifício mais importante do boulevard, a Ópera Estatal da Hungria, projetada por Miklós Ybl, assim como o Museu Casa do Terror, a Universidade Húngara de Belas Artes e o Museu Memorial Franz Liszt. Sabia que por aqui passa o segundo metrô mais antigo da Europa? Suas elegantes estações são populares entre moradores e visitantes. Também passaremos pelo edifício do Parlamento húngaro, um monumento emblemático às margens do Danúbio, sede do poder legislativo e guardião da Santa Coroa húngara. Antes de continuar até o mercado e a zona pedonal, veremos um dos edifícios mais belos da cidade: a Basílica de Santo E"
      },
      {
        "day": 17,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "Começaremos o dia saindo em direção a Praga, capital da República Tcheca, com uma breve parada na capital eslovaca, Bratislava, onde poderá desfrutar de tempo livre. Já em Praga, realizaremos um inesquecível passeio pelo centro histórico da cidade. Mostraremos seus monumentos mais belos e conheceremos as partes mais antigas de Praga. Sabia que a cidade é berço de algumas das melhores cervejas do mundo, com uma fábrica para cada 10.000 habitantes? Praga possui uma das maiores produções de cerveja do mundo. Saúde!"
      },
      {
        "day": 18,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena pela rua Nerudova, com suas belas casas e símbolos antigos. Passaremos pela Igreja de São Nicolau até chegar à Ponte Carlos, uma das mais antigas da Europa, que liga a Cidade Pequena à Cidade Velha, de onde se tem uma bela vista. Caminharemos pela rua Karlova até a Praça da Cidade Velha, com seu relógio astronômico, a igreja gótica de Nossa Senhora de Týn e o monumento a Jan Hus. Por fim, chegaremos à Cidade Nova, onde termina o passeio. Praga também é famosa por sua arte em vidro e porcelana; as marionetes são uma lembrança autêntica para quem ficou em casa."
      },
      {
        "day": 19,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 20,
        "route": "PRAGA",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "do-danubio-ao-adriatico",
    "code": "VIEBEL",
    "title": "Do Danúbio ao Adriático",
    "subtitle": "Viena · Liubliana · Split · Dubrovnik · Budva · Shkodra · Tirana · Ohrid · Skopje · Belgrado · Zagreb",
    "intro": "Dezessete dias de Viena a Zagreb pelo Adriático e pelos Bálcãs profundos: Budva em Montenegro, Shkodra e Tirana na Albânia, o lago de Ohrid, Skopje e Belgrado. Uma Europa que quase ninguém percorre inteira.",
    "highlights": ["Montenegro: Budva e a baía de Kotor", "Albânia de Shkodra a Tirana", "Lago Ohrid, patrimônio natural e cultural", "Skopje e Belgrado com guia local", "Dubrovnik e Split no Adriático", "Onze destinos em um único roteiro"],
    "category": "Premium",
    "days": 17,
    "nights": 16,
    "priceEur": 4450,
    "singleSupplementEur": 2400,
    "countries": [
      "Áustria",
      "Eslovênia",
      "Croácia",
      "Montenegro",
      "Albânia",
      "Macedônia do Norte",
      "Sérvia"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "InterContinental"
      },
      {
        "city": "Liubliana",
        "hotel": "Grand Plaza"
      },
      {
        "city": "Split",
        "hotel": "Atrium"
      },
      {
        "city": "Dubrovnik",
        "hotel": "Dubrovnik Palace"
      },
      {
        "city": "Shkodra",
        "hotel": "Colosseo"
      },
      {
        "city": "Tirana",
        "hotel": "Marriott"
      },
      {
        "city": "Skopje",
        "hotel": "Marriott"
      },
      {
        "city": "Belgrado",
        "hotel": "Radisson Collection"
      },
      {
        "city": "Zagreb",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-05-16",
      "2027-06-06",
      "2027-08-29",
      "2027-09-19"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, exploraremos Viena com uma visita panorâmica que oferece uma excelente impressão de seus numerosos atrativos. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas. Continuaremos pela Ringstrasse, com edifícios emblemáticos como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas encantadoras ruas do centro histórico e visitaremos o interior da Catedral de Santo Estêvão. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina na Maria-Theresien-Platz. Após a visita, terá a opção de participar de uma excursão ao Paláci"
      },
      {
        "day": 3,
        "route": "VIENA - LIUBLIANA",
        "text": "Pela manhã, partiremos de ônibus em direção a Ljubljana, a encantadora capital da Eslovênia. Na chegada, realizaremos um passeio a pé pelo centro histórico, onde se destacam a Prefeitura, a Fonte de Robba, as Três Pontes, a Universidade e o Parlamento. Hospedagem."
      },
      {
        "day": 4,
        "route": "LIUBLIANA - POSTOJNA BLED - LIUBLIANA",
        "text": "Hoje seguiremos em direção a Postojna, famosa por suas impressionantes cavernas de estalactites. A visita será realizada em um trem turístico mineiro que percorre espaços tão evocativos como o Salão de Baile e o Paraíso. Destaca-se especialmente a grande caverna abobadada conhecida como Sala de Concertos. Em seguida, continuação até Bled, com seu icônico lago e sua pequena ilha, uma das imagens mais representativas do país. Retorno a Ljubljana e hospedagem."
      },
      {
        "day": 5,
        "route": "LIUBLIANA - ZADAR - SPLIT",
        "text": "Deixaremos Ljubljana para seguir em direção a Zadar, cidade que foi o centro administrativo da Dalmácia bizantina e alcançou grande importância na Europa no século XVII. Na chegada, visitaremos as ruínas do Forum Romanum e a Igreja de São Donato do século IX. Posteriormente, continuação até Split, principal cidade da região da Dalmácia. Hospedagem."
      },
      {
        "day": 6,
        "route": "SPLIT",
        "text": "Dedicaremos o dia a descobrir Split, cidade que surgiu ao redor do monumental palácio do imperador romano Diocleciano. Passeando por suas praças e pelo animado calçadão à beira do Adriático, conheceremos seus principais atrativos, como o Vestíbulo do Palácio, o Peristilo, o campanário da Catedral de São Domnio e o Templo de Júpiter. Hospedagem."
      },
      {
        "day": 7,
        "route": "SPLIT - DUBROVNIK",
        "text": "Percorreremos a escarpada costa dálmata em direção a Dubrovnik, desfrutando de uma paisagem única com inúmeras ilhas sobre o Adriático. Na chegada, realizaremos a visita desta joia histórica, declarada Patrimônio da Humanidade pela UNESCO. Destacam-se a Igreja Franciscana, o Palácio do Reitor, a Catedral e o Mosteiro Dominicano. A imponente Torre Minceta, uma das mais bem conservadas da Europa, completa este conjunto monumental. Hospedagem."
      },
      {
        "day": 8,
        "route": "DUBROVNIK",
        "text": "Dia livre para aproveitar a cidade no seu próprio ritmo. Opcionalmente, poderá realizar uma excursão a Montenegro, visitando alguns dos recantos mais pitorescos do país (não incluída). Hospedagem."
      },
      {
        "day": 9,
        "route": "DUBROVNIK - BUDVA- SHKODRA",
        "text": "Café da manhã e saída para Budva, preciosa cidade antiga considerada o principal destino turístico do país, por seu patrimônio cultural e arquitetônico, A área antiga de Budva, Stari Grad, é cheia de vida. Sua arquitetura claramente mediterrânea é formada em torno de recinto amuralhado cercado por bastiões medievais do século XV. Breve parada e continuação da viagem para Shkodra, um percurso atraente que conecta a costa adriática de Montenegro com o interior do norte da Albânia, combinando paisagens marítimas, áreas rurais e cidades com grande riqueza histórica. Chegada a Shkodra e acomodação. Recomendamos percorrer Shkodra a pé; é uma experiência tranquila e muito autêntica, ideal para se conectar com a história e o cotidiano do norte da Albânia. O passeio geralmente começa no centro histórico, onde as ruas pedonais, como Rruga Kole Idromeno, estão cheias de cafés, pequenas lojas e edif"
      },
      {
        "day": 10,
        "route": "SHKODRA - TIRANA",
        "text": "Café da manhã e saída para Tirana, passando pelo Castelo de Rozafa, de origem veneziana, situado em uma colina rochosa a 130 metros acima do nível do mar.Continuação para Tirana, capital da Albânia e como tal, cidade mais importante do país. Acomodação."
      },
      {
        "day": 11,
        "route": "TIRANA",
        "text": "Café da manhã e visita à cidade, passando pela Praça Skanderberg, o principal símbolo da cidade, com a estátua equestre do herói nacional, Mesquita Ethem Bey, Biblioteca Nacional, Palácio da Cultura e Museu Nacional de História, que nos permitirá conhecer mais sobre a história da Albânia. Em seguida, visita ao bazar recentemente transformado em uma animada área de lojas e restaurantes. Tarde livre e acomodação."
      },
      {
        "day": 12,
        "route": "TIRANA - LAGO OHRID - SKOPJE",
        "text": "Café da manhã e saída para Ohrid, situado no sul da Macedônia, possivelmente o lugar mais bonito e turístico do país junto com seu lago homônimo. Caminhando pelas ruas íngremes de paralelepípedos entraremos na Catedral de Santa Sofia (XI), monumento de maior impressão deste país. Da mesma forma, a Igreja de São João Kaneo, possivelmente o lugar mais fotografado em todo o norte da Macedônia, localizado em um penhasco do lago Ohrid. Continuação para Skopje, capital da Macedônia. Acomodação em Skopje."
      },
      {
        "day": 13,
        "route": "SKOPJE",
        "text": "Café da manhã e visita à cidade passando pela Igreja de São Salvador, com seus ícones esculpidos em nogueira, ponte de pedra, antigo bazar e fortaleza de Kale. Continuação ao longo da encosta da montanha Vodno, onde visitamos o Mosteiro de São Panteleimon, prestigioso por seus afrescos do século XII, considerados entre as melhores realizações de arte bizantina dessa época."
      },
      {
        "day": 14,
        "route": "SKOPJE - BELGRADO",
        "text": "Café da manhã e saída para Belgrado, capital da Sérvia, onde convergem influências europeias e turcas. Essa enigmática mescla de culturas deu origem a uma fascinante variedade de estilos arquitetônicos. Acomodação em Belgrado."
      },
      {
        "day": 15,
        "route": "BELGRADO",
        "text": "Café da manhã e visita à cidade percorrendo seu centro histórico, com o Parlamento e a Praça da República, o coração de Belgrado e local de encontro de seus cidadãos. É a praça principal da cidade, rodeada por importantes edifícios públicos como o Museu Nacional e o Teatro Nacional. Depois, prosseguimento para a Fortaleza Kalemegdan; cuja localização e altura convertem-na num mirante perfeito. Desfrutamos vistas esplêndidas da cidade e dos dois rios que a atravessam, o Sava e o Danúbio. Em seguida nos dirigimos a Sveti Sava, a maior catedral ortodoxa da Europa que leva o nome do fundador da igreja ortodoxa na Sérvia. Destaca-se especialmente pela fachada em mármore branco e granito e pelos belos jardins que a rodeiam. É considerada a igreja mais bonita da Sérvia. Terminamos a visita com a rua de pedestres Knez Mihailova, com um quilômetro de comprimento para onde convergem a vida comerci"
      },
      {
        "day": 16,
        "route": "BELGRADO - ZAGREB",
        "text": "Café da manhã e saída para Zagreb, capital da Croácia. Chegada e passeio pelo centro antigo, onde se destacam o Palácio do Governo, a catedral de Santo Estevão e igreja de São Marcos. Acomodação em Zagreb."
      },
      {
        "day": 17,
        "route": "ZAGREB",
        "text": "Café da manhã e traslado de saida para o aeroporto."
      }
    ]
  },
  {
    "slug": "maravilhas-do-adriatico-e-dos-balcas",
    "code": "LJUBEL",
    "title": "Maravilhas do Adriático e dos Bálcãs",
    "subtitle": "Liubliana · Split · Dubrovnik · Budva · Tirana · Ohrid · Skopje · Belgrado · Zagreb",
    "intro": "Quinze dias de Liubliana a Zagreb pelo litoral e pelo interior dos Bálcãs: cidades muradas, mosteiros ortodoxos, minaretes, mercados e um mar que muda de azul a cada país.",
    "highlights": ["Dubrovnik, Budva e a costa montenegrina", "Tirana e Ohrid, os Bálcãs menos óbvios", "Skopje, Belgrado e o Danúbio sérvio", "Split e o palácio de Diocleciano", "Liubliana e Zagreb como portas do circuito", "Guia local durante todo o percurso"],
    "category": "Premium",
    "days": 15,
    "nights": 14,
    "priceEur": 3850,
    "singleSupplementEur": 2100,
    "countries": [
      "Eslovênia",
      "Croácia",
      "Montenegro",
      "Albânia",
      "Macedônia do Norte",
      "Sérvia"
    ],
    "hotels": [
      {
        "city": "Liubliana",
        "hotel": "Grand Plaza"
      },
      {
        "city": "Split",
        "hotel": "Atrium"
      },
      {
        "city": "Dubrovnik",
        "hotel": "Dubrovnik Palace"
      },
      {
        "city": "Shkodra",
        "hotel": "Colosseo"
      },
      {
        "city": "Tirana",
        "hotel": "Marriott"
      },
      {
        "city": "Skopje",
        "hotel": "Marriott"
      },
      {
        "city": "Belgrado",
        "hotel": "Radisson Collection"
      },
      {
        "city": "Zagreb",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-05-18",
      "2027-06-08",
      "2027-08-31",
      "2027-09-21"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "LIUBLIANA",
        "text": "Chegada ao aeroporto, traslado ao hotel. Acomodação. O guia estará no hotel a partir das 19h."
      },
      {
        "day": 2,
        "route": "LIUBLIANA - POSTOJNA BLED - LIUBLIANA",
        "text": "Hoje seguiremos em direção a Postojna, famosa por suas impressionantes cavernas de estalactites. A visita será realizada em um trem turístico mineiro que percorre espaços tão evocativos como o Salão de Baile e o Paraíso. Destaca-se especialmente a grande caverna abobadada conhecida como Sala de Concertos. Em seguida, continuação até Bled, com seu icônico lago e sua pequena ilha, uma das imagens mais representativas do país. Retorno a Ljubljana e hospedagem."
      },
      {
        "day": 3,
        "route": "LIUBLIANA - ZADAR - SPLIT",
        "text": "Deixaremos Ljubljana para seguir em direção a Zadar, cidade que foi o centro administrativo da Dalmácia"
      },
      {
        "day": 4,
        "route": "SPLIT",
        "text": "Dedicaremos o dia a descobrir Split, cidade que surgiu ao redor do monumental palácio do imperador romano Diocleciano. Passeando por suas praças e pelo animado calçadão à beira do Adriático, conheceremos seus principais atrativos, como o Vestíbulo do Palácio, o Peristilo, o campanário da Catedral de São Domnio e o Templo de Júpiter. Hospedagem."
      },
      {
        "day": 5,
        "route": "SPLIT - DUBROVNIK",
        "text": "Percorreremos a escarpada costa dálmata em direção a Dubrovnik, desfrutando de uma paisagem única com inúmeras ilhas sobre o Adriático. Na chegada, realizaremos a visita desta joia histórica, declarada Patrimônio da Humanidade pela UNESCO. Destacam-se a Igreja Franciscana, o Palácio do Reitor, a Catedral e o Mosteiro Dominicano. A imponente Torre Minceta,"
      },
      {
        "day": 6,
        "route": "DUBROVNIK",
        "text": "Dia livre para aproveitar a cidade no seu próprio ritmo. Opcionalmente, poderá realizar uma excursão a Montenegro, visitando alguns dos recantos mais pitorescos do país (não incluída). Hospedagem."
      },
      {
        "day": 7,
        "route": "DUBROVNIK - BUDVA- SHKODRA",
        "text": "Café da manhã e saída para Budva, preciosa cidade antiga considerada o principal destino turístico do país, por seu patrimônio cultural e arquitetônico, A área antiga de Budva, Stari Grad, é cheia de vida. Sua arquitetura claramente mediterrânea é formada em torno de recinto amuralhado cercado por bastiões medievais do século XV. Breve parada e continuação da viagem para Shkodra, um percurso atraente que conecta a costa adriática de Montenegro com o interior do norte da Albânia, combinando paisagens marítimas, áreas rurais e cida-"
      },
      {
        "day": 8,
        "route": "SHKODRA - TIRANA",
        "text": "Café da manhã e saída para Tirana, passando pelo Castelo de Rozafa, de origem veneziana, situado em uma colina rochosa a 130 metros acima do nível do mar.Continuação para Tirana, capital da Albânia capital da Albânia e como tal, cidade mais importante do país. Acomodação."
      },
      {
        "day": 9,
        "route": "TIRANA",
        "text": "Café da manhã e visita à cidade, passando pela Praça Skanderberg, o principal símbolo da cidade, com a estátua equestre do herói nacional, Mesquita Ethem Bey, Biblioteca Nacional, Palácio da Cultura e Museu Nacional de História, que nos permitirá conhecer mais sobre a história da Albânia. Em seguida, visita ao bazar recentemente transformado em uma animada área de lojas e restaurantes. Tarde livre e acomodação."
      },
      {
        "day": 10,
        "route": "TIRANA - LAGO OHRID - SKOPJE",
        "text": "Café da manhã e saída para Ohrid, situado no sul da Macedônia, possivelmente o lugar mais bonito e turístico do país junto com seu lago homônimo. Caminhando pelas ruas íngremes de paralelepípedos entraremos na Catedral de Santa Sofia (XI), monumento de maior impressão deste país. Da mesma forma, a Igreja de São João Kaneo, possivelmente o lugar mais fotografado em todo o norte da Macedônia, localizado em um penhasco do lago Ohrid. Continuação para Skopje, capital da Macedônia. Acomodação em Skopje."
      },
      {
        "day": 11,
        "route": "SKOPJE",
        "text": "Café da manhã e visita à cidade passando pela Igreja de São Salvador, com seus ícones esculpidos em nogueira, ponte de pedra, antigo bazar e fortaleza de Kale. Continuação ao longo da encosta da montanha Vodno, onde visitamos o Mosteiro de São Panteleimon, prestigioso por seus afrescos do século XII, considerados entre as melhores realizações de arte bizantina dessa época."
      },
      {
        "day": 12,
        "route": "SKOPJE - BELGRADO",
        "text": "Café da manhã e saída para Belgrado, capital da Sérvia, onde convergem influências europeias e turcas. Essa enigmática mescla de culturas deu origem a uma fascinante variedade de estilos arquitetônicos. Acomodação em Belgrado."
      },
      {
        "day": 13,
        "route": "BELGRADO",
        "text": "Café da manhã e visita à cidade percorrendo seu centro histórico, com o Parlamento e a Praça da República, o coração de Belgrado e local de encontro de seus cidadãos. É a praça principal da cidade, rodeada por importantes edifícios públicos como o Museu Nacional e o Teatro Nacional. Depois, prosseguimento para a Fortaleza Kalemegdan; cuja localização e altura convertem-na num mirante perfeito. Desfrutamos vistas esplêndidas da cidade e dos dois rios que a atravessam, o Sava e o Danúbio. Em seguida nos dirigimos a Sveti Sava, a maior catedral ortodoxa da Europa que leva o nome do fundador da igreja ortodoxa na Sérvia. Destaca-se especialmente pela fachada em mármore branco e granito e pelos belos jardins que a rodeiam. É considerada a igreja mais bonita da Sérvia. Terminamos a visita com a rua de pedestres Knez Mihailova, com um quilômetro de comprimento para onde convergem a vida comerci"
      },
      {
        "day": 14,
        "route": "BELGRADO - ZAGREB",
        "text": "Café da manhã e saída para Zagreb, capital da Croácia. Chegada e passeio pelo centro antigo, onde se destacam o Palácio do Governo, a catedral de Santo Estevão e igreja de São Marcos. Acomodação em Zagreb."
      },
      {
        "day": 15,
        "route": "ZAGREB",
        "text": "Café da manhã e traslado de saida para o aeroporto."
      }
    ]
  },
  {
    "slug": "alemanha-romantica-e-os-balcas",
    "code": "ALCRO",
    "title": "Alemanha Romântica e os Bálcãs",
    "subtitle": "Frankfurt · Heidelberg · Floresta Negra · Munique · Viena · Liubliana · Split · Dubrovnik · Sarajevo · Zagreb",
    "intro": "Vinte dias que começam na Alemanha romântica — Heidelberg, Floresta Negra, Munique — e terminam no Adriático, entre Dubrovnik e Sarajevo. Da cerveja bávara ao café bósnio, sem trocar de grupo.",
    "highlights": ["Castelo de Heidelberg e o vale do Neckar", "Floresta Negra e suas aldeias de relojoeiros", "Munique e a tradição bávara", "Viena e Liubliana como transição", "Split, Dubrovnik e Sarajevo", "Vinte dias com guia local permanente"],
    "category": "Primeira",
    "days": 20,
    "nights": 19,
    "priceEur": 5085,
    "singleSupplementEur": 2660,
    "countries": [
      "Alemanha",
      "França",
      "Áustria",
      "Eslovênia",
      "Croácia",
      "Bósnia e Herzegovina"
    ],
    "hotels": [
      {
        "city": "Frankfurt",
        "hotel": "Marriott"
      },
      {
        "city": "Heidelberg",
        "hotel": "Marriott"
      },
      {
        "city": "Friburgo",
        "hotel": "Leonardo City Center"
      },
      {
        "city": "Munique",
        "hotel": "Westin Grand"
      },
      {
        "city": "Viena",
        "hotel": "Parkhotel Schönbrunn"
      },
      {
        "city": "Liubliana",
        "hotel": "Grand Plaza"
      },
      {
        "city": "Split",
        "hotel": "Atrium"
      },
      {
        "city": "Dubrovnik",
        "hotel": "Dubrovnik Palace"
      },
      {
        "city": "Sarajevo",
        "hotel": "Hotel President"
      },
      {
        "city": "Zagreb",
        "hotel": "Sheraton"
      }
    ],
    "departures": [
      "2027-05-09",
      "2027-06-06",
      "2027-08-29",
      "2027-09-05",
      "2027-09-19"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "FRANKFURT",
        "text": "Chegada a Frankfurt e traslado ao hotel. O guia estará no hotel a partir das 19h00."
      },
      {
        "day": 2,
        "route": "FRANKFURT - ROTHENBURG - HEIDELBERG",
        "text": "Após o café da manhã, realizaremos a visita da cidade de Frankfurt, onde conheceremos o centro histórico com o Römer, a Prefeitura, a Catedral e a Paulskirche (Igreja de São Paulo). Também veremos a Casa de Goethe, local de nascimento do grand…"
      },
      {
        "day": 3,
        "route": "HEIDELBERG",
        "text": "A jornada começa com a visita de Heidelberg, a cidade universitária mais antiga da Alemanha. O percurso inicia-se no centro histórico, onde se destacam edifícios históricos como a antiga prefeitura e a Heiliggeistkirche, ambos do século XV, além das tradicionais casas em enxaimel. O ponto culminante é a visita ao castelo de Heidelberg, situado no alto da cidade, de onde se obtém uma mag-"
      },
      {
        "day": 4,
        "route": "HEIDELBERG - ESTRASBURGO - FRIBURGO",
        "text": "O percurso de hoje transcorre através dos vales do Neckar e do Reno, onde os vinhedos se estendem sobre suaves colinas que se refletem no rio. Ao aproximar-se da fronteira francesa, a paisagem dá lugar a bosques densos e colinas onduladas. Chega…"
      },
      {
        "day": 5,
        "route": "FRIBURGO - FLORESTA NEGRA - LINDAU - MUNIQUE",
        "text": "Saída de Friburgo em direção à Floresta Negra, atravessando paisagens de grande beleza natural. Nossa primeira parada será para degustar uma autêntica torta de cerejas da Floresta Negra, acompanhada de café, e apreciar um dos sabores mais tr…"
      },
      {
        "day": 6,
        "route": "MUNIQUE",
        "text": "Visita panorâmica de Munique, capital da Baviera, situada às margens do rio Isar. O percurso começa na porta medieval Karlstor e continua até a Igreja de São Miguel, onde se encontram os restos do rei Luís II. Através da Marienplatz chega-se à Prefeitura, famosa por seu carrilhão, e à Frauenkirche, cuja entrada conserva, segundo a lenda, a pegada do Diabo. O itinerário inclui ainda a Praça da Ópera, a Feldherrnhalle, a igreja Bürgersaalkirche, a Residência Real e a Igreja de São Pedro. Antes de finalizar, realiza-se um passeio pelo Jardim Inglês, um dos maiores parques urbanos da Europa. Hospedagem."
      },
      {
        "day": 8,
        "route": "MUNIQUE - VALE DO DANÚBIO - VIENA",
        "text": "Café da manhã e saída para Viena, passando pelo Vale do Danúbio. Apresentamos a beleza do Vale do Danúbio por meio de um cenário romântico, repleto de histórias e lendas. Faremos um breve passeio por Dürnstein, cidade medieval famosa por ter sido o local onde o rei Ricardo foi mantido prisioneiro em seu castelo (hoje em ruínas). Continuação para Viena. Chegada e acomodação. À noite, jantar típico austríaco no famoso Restaurante Marchfelderhof, conhecido além das fronteiras do país. Neste ambiente verdadeiramente único, você logo terá a sensação de que a Imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 9,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, exploraremos Viena com uma visita panorâmica que oferece uma excelente impressão de seus numerosos atrativos. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas. Continuaremos pela Ringstrasse, com edifícios emblemáticos como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas encantadoras ruas do centro histórico e visitaremos o interior da Catedral de Santo Estêvão. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina na Maria-Theresien-Platz. Após a visita, terá a opção de participar de uma excursão ao Paláci"
      },
      {
        "day": 10,
        "route": "VIENA - LIUBLIANA",
        "text": "Pela manhã, partiremos de ônibus em direção a Ljubljana, a encantadora capital da Eslovênia. Na chegada, realizaremos um passeio a pé pelo centro histórico, onde se destacam a Prefeitura, a Fonte de Robba, as Três Pontes, a Universidade e o Parlamento. Hospedagem."
      },
      {
        "day": 11,
        "route": "LIUBLIANA - POSTOJNA - BLED - LIUBLIANA",
        "text": "Hoje seguiremos em direção a Postojna, famosa por suas impressionantes cavernas de estalactites. A visita será realizada em um trem turístico mineiro que percorre espaços tão evocativos como o Salão de Baile e o Paraíso. Destaca-se especialmente a grande caverna abobadada conhecida como Sala de Concertos. Em seguida, continuação até Bled, com seu icônico lago e sua pequena ilha, uma das imagens mais representativas do país. Retorno a Ljubljana e hospedagem."
      },
      {
        "day": 12,
        "route": "LIUBLIANA - ZADAR - SPLIT",
        "text": "Deixaremos Ljubljana para seguir em direção a Zadar, cidade que foi o centro administrativo da Dalmácia bizantina e alcançou grande importância na Europa no século XVII. Na chegada, visitaremos as ruínas do Forum Romanum e a Igreja de São Donato do século IX. Posteriormente, continuação até Split, principal cidade da região da Dalmácia. Hospedagem."
      },
      {
        "day": 13,
        "route": "SPLIT",
        "text": "Dedicaremos o dia a descobrir Split, cidade que surgiu ao redor do monumental palácio do imperador romano Diocleciano. Passeando por suas praças e pelo animado calçadão à beira do Adriático, conheceremos seus principais atrativos, como o Vestíbulo do Palácio, o Peristilo, o campanário da Catedral de São Domnio e o Templo de Júpiter. Hospedagem."
      },
      {
        "day": 14,
        "route": "SPLIT - DUBROVNIK",
        "text": "Percorreremos a escarpada costa dálmata em direção a Dubrovnik, desfrutando de uma paisagem única com inúmeras ilhas sobre o Adriático. Na chegada, realizaremos a visita desta joia histórica, declarada Patrimônio da Humanidade pela UNESCO. Destacam-se a Igreja Franciscana, o Palácio do Reitor, a Catedral e o Mosteiro Dominicano. A imponente Torre Minceta, uma das mais bem conservadas da Europa, completa este conjunto monumental. Hospedagem."
      },
      {
        "day": 15,
        "route": "DUBROVNIK",
        "text": "Dia livre para aproveitar a cidade no seu próprio ritmo. Opcionalmente, poderá realizar uma excursão a Montenegro, visitando alguns dos recantos mais pitorescos do país (não incluída). Hospedagem."
      },
      {
        "day": 16,
        "route": "DUBROVNIK - MEDJUGORJE - MOSTAR - SARAJEVO",
        "text": "Saída em direção à Bósnia e Herzegovina, com uma primeira parada em Medjugorje, importante centro de peregrinação. Continuação até Mostar, cidade marcada por sua história recente e símbolo de convivência cultural, cujo centro histórico encanta com suas ruas medievais e lojas tradicionais. Em seguida, seguiremos até Sarajevo, capital do país e ponto de encontro de diferentes religiões e culturas. Sua história está profundamente ligada a acontecimentos-chave como o assassinato do arquiduque Francisco Ferdinando em 1914."
      },
      {
        "day": 17,
        "route": "SARAJEVO",
        "text": "Exploraremos Sarajevo, uma cidade que surpreende por sua diversidade cultural. Entre seus principais atrativos encontram-se a Mesquita Husrev Beg, com sua delicada ornamentação, assim como o tradicional bazar «Baščaršija», o bairro austro-húngaro e o estádio olímpico. À tarde, tempo livre. Hospedagem."
      },
      {
        "day": 18,
        "route": "SARAJEVO - ZAGREB",
        "text": "Seguiremos em direção a Zagreb, capital da Croácia. Após a chegada, passeio pelo centro histórico, onde se destacam o Palácio do Governo, a Catedral de Santo Estêvão e a Igreja de São Marcos."
      },
      {
        "day": 20,
        "route": "ZAGREB",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "alemanha-floresta-negra-e-suica",
    "code": "EETALSUI",
    "title": "Alemanha, Floresta Negra e Suíça",
    "subtitle": "Frankfurt · Heidelberg · Estrasburgo · Munique · Zurique · Berna · Genebra · Zermatt · Glacier Express",
    "intro": "Dezesseis dias da Alemanha à Suíça: Heidelberg e Estrasburgo às margens do Reno, a Floresta Negra, Munique, e depois os Alpes — Berna, Zermatt, o Matterhorn e o Glacier Express atravessando a neve.",
    "highlights": ["Glacier Express, o trem panorâmico mais famoso do mundo", "Zermatt e o Matterhorn sem carros", "Estrasburgo e a Alsácia de enxaimel", "Floresta Negra e Heidelberg", "Zurique, Berna e Genebra", "Dezesseis dias entre dois países alpinos"],
    "category": "Primeira",
    "days": 16,
    "nights": 15,
    "priceEur": 5195,
    "singleSupplementEur": 2250,
    "countries": [
      "Alemanha",
      "França",
      "Suíça"
    ],
    "hotels": [
      {
        "city": "Frankfurt",
        "hotel": "Marriott"
      },
      {
        "city": "Heidelberg",
        "hotel": "Marriott"
      },
      {
        "city": "Friburgo",
        "hotel": "Leonardo City Center"
      },
      {
        "city": "Munique",
        "hotel": "Westin Grand"
      },
      {
        "city": "Zurique",
        "hotel": "Novotel City West"
      },
      {
        "city": "Berna",
        "hotel": "Swissôtel Kursaal"
      },
      {
        "city": "Genebra",
        "hotel": "Crowne Plaza"
      },
      {
        "city": "Zermatt",
        "hotel": "Hotel em Zermatt"
      }
    ],
    "departures": [
      "2027-06-13",
      "2027-06-27",
      "2027-07-11",
      "2027-08-08",
      "2027-09-05",
      "2027-09-19",
      "2027-10-03"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "FRANKFURT",
        "text": "Chegada a Frankfurt e traslado ao hotel. O guia estará no hotel a partir das 19h00."
      },
      {
        "day": 2,
        "route": "FRANKFURT - ROTHENBURG - HEIDELBERG",
        "text": "Após o café da manhã, realizaremos a visita da cidade de Frankfurt, onde conheceremos o centro histórico com o Römer, a Prefeitura, a Catedral e a Paulskirche (Igreja de São Paulo). Também veremos a Casa de Goethe, local de nascimento do grand…"
      },
      {
        "day": 3,
        "route": "HEIDELBERG",
        "text": "A jornada começa com a visita de Heidelberg, a cidade universitária mais antiga da Alemanha. O percurso inicia-se no centro histórico, onde se destacam edifícios históricos como a antiga prefeitura e a Heiliggeistkirche, ambos do século XV, além…"
      },
      {
        "day": 4,
        "route": "HEIDELBERG - ESTRASBURGO - FRIBURGO",
        "text": "O percurso de hoje transcorre através dos vales do Neckar e do Reno, onde"
      },
      {
        "day": 5,
        "route": "FRIBURGO - FLORESTA NEGRA - LINDAU - MUNIQUE",
        "text": "Saída de Friburgo em direção à Floresta Negra, atravessando paisagens de grande beleza natural. Nossa primeira parada será para degustar uma autêntica torta de cerejas da Floresta Negra, acompanhada de café, e apreciar um dos sabores mais trad…"
      },
      {
        "day": 6,
        "route": "MUNIQUE",
        "text": "Visita panorâmica de Munique, capital da Baviera, situada às margens do rio Isar. O percurso começa no portão medieval Karlstor e continua até a Igreja de São Miguel, onde se encontram os restos do rei Luís II. Através da Marienplatz chega-se…"
      },
      {
        "day": 8,
        "route": "MUNIQUE - ZURIQUE",
        "text": "Café da manhã e saída para Schaffhausen, famosa pelas Cataratas do Reno, a maior cachoeira da Europa Central. Em seguida, passagem pelo centro antigo de Schaffhausen, fechado para automóveis, que é considerado um dos mais pitorescos de toda a Suíça. Chegada a Zurique à tarde. Acomodação."
      },
      {
        "day": 9,
        "route": "ZURIQUE",
        "text": "Pela manhã, visita da cidade, destacando o centro histórico com a catedral, a antiga prefeitura e a Porta de São Martinho. O percurso continua pelo centro comercial e financeiro, a Bahnhofstrasse, a igreja de Fraumünster, o Limmatquai e o bairro da Universidade. Em seguida, descobriremos o mundo do chocolate com a visita à Casa do Chocolate Lindt, onde conheceremos sua história e desfrutaremos de uma degustação."
      },
      {
        "day": 10,
        "route": "ZURIQUE - LUCERNA - BERNA",
        "text": "Saída em direção a Lucerna, cidade medieval situada às margens do Lago dos Quatro Cantões. Um de seus principais atrativos é a Ponte da Capela, construída em madeira em 1333 e decorada com pinturas. Em seguida, vamos nos dirigir a Engelberg, de onde se sobe no primeiro teleférico giratório do mundo até o topo do Monte Titlis, a 3.020 metros, com impressionantes vistas dos Alpes. À tarde, continuação até Berna, capital da Suíça e uma das cidades medievais mais bem conservadas da Europa. Hospedagem."
      },
      {
        "day": 11,
        "route": "BERNA - GRUYÈRES GENEBRA",
        "text": "Visita panorâmica de Berna, destacando a Torre do Relógio e a Catedral de São Vicente do século XV. Após o passeio, saída em direção à região de Gruyeres, uma pequena cidade cheia de charme. A região é conhecida pela produção do queijo gruyère, um dos mais apreciados da Suíça. Passeio pela localidade. Continuação até Genebra. Hospedagem."
      },
      {
        "day": 12,
        "route": "GENEBRA",
        "text": "Passeio pela cidade, onde veremos a Promenade du Lac e o Jardim Inglês, onde se encontra o famoso Relógio Floral. Genebra é berço de figuras históricas como Calvino, Rousseau, Voltaire e Henri Dunant, fundador da Cruz Vermelha. O símbolo da cidade é o Jet d’Eau, um dos jatos de água mais altos do mundo, com uma altura de 140 metros. Passeio pelo centro histórico com a Catedral de São Pedro e visita ao Parc des Bastions com o Monumento aos Reformadores. Tarde livre e hospedagem."
      },
      {
        "day": 13,
        "route": "GENEBRA - MONTREUX - ZERMATT",
        "text": "Saída em direção a Montreux, onde a combinação de lago, montanhas e vinhedos cria uma paisagem única. Breve visita e entrada ao Castelo de Chillon, situado às margens do Lago Léman e antiga residência dos condes de Saboia durante quase quatro séculos. Continuação até Zermatt, pitoresco povoado alpino livre de tráfego, localizado aos pés do Matterhorn. Hospedagem."
      },
      {
        "day": 14,
        "route": "ZERMATT",
        "text": "Subida em trem cremalheira ao Gornergrat, mirante situado a 3.089 metros de altitude, de onde se obtém uma das melhores vistas do Matterhorn e dos Alpes, com panorâmicas de até 29 picos com mais de 4.000 metros. Retorno de trem a Zermatt e hospedagem."
      },
      {
        "day": 15,
        "route": "ZERMATT - GLACIER EXPRESS - ZURIQUE",
        "text": "Embarque no Glacier Express, um dos trens panorâmicos mais famosos da Suíça, conhecido como o „trem expresso mais lento do mundo“. O trajeto entre Zermatt e Chur atravessa vales, montanhas e espetaculares pontes, incluindo a passagem pelo porto de Oberalp, a 2.033 metros de altitude. Chegada a Chur e continuação de ônibus até Zurique. Hospedagem."
      },
      {
        "day": 16,
        "route": "ZURIQUE",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "baviera-e-suica",
    "code": "EETBAVSUI",
    "title": "Baviera e Suíça",
    "subtitle": "Munique · Neuschwanstein · Zurique · Lucerna · Berna · Genebra · Zermatt",
    "intro": "Doze dias entre a Baviera e os Alpes suíços: o castelo de Neuschwanstein como um sonho de Wagner, Lucerna e sua ponte de madeira, Berna medieval e Zermatt aos pés do Matterhorn.",
    "highlights": ["Castelo de Neuschwanstein, o castelo dos contos", "Lucerna, lago e Kapellbrücke", "Berna, patrimônio da humanidade", "Zermatt e o Matterhorn", "Munique e a Marienplatz", "Trens e traslados panorâmicos"],
    "category": "Primeira",
    "days": 12,
    "nights": 11,
    "priceEur": 4395,
    "singleSupplementEur": 1650,
    "countries": [
      "Alemanha",
      "Suíça"
    ],
    "hotels": [
      {
        "city": "Munique",
        "hotel": "Westin Grand"
      },
      {
        "city": "Zurique",
        "hotel": "Novotel City West"
      },
      {
        "city": "Berna",
        "hotel": "Swissôtel Kursaal"
      },
      {
        "city": "Genebra",
        "hotel": "Crowne Plaza"
      }
    ],
    "departures": [
      "2027-06-18",
      "2027-07-16",
      "2027-08-13",
      "2027-09-10",
      "2027-09-24"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "MUNIQUE",
        "text": "Chegada a Munique e traslado ao hotel e acomodação O guia estará no hotel a partir das 19h00."
      },
      {
        "day": 2,
        "route": "MUNIQUE",
        "text": "Visita panorâmica de Munique, capital da Baviera, situada às margens do rio Isar. O percurso começa no portão medieval Karlstor e continua até a Igreja de São Miguel, onde se encontram os restos do rei Luís II. Através da Marienplatz chega-se à Prefeitura, famosa pelo seu carrilhão, e à Frauenkirche, cuja entrada conserva, segundo a lenda, a pegada do Diabo. Passaremos também pela Praça da Ópera, pela Feldherrnhalle, pela igreja Bürgersaalkirche, pela Residência Real e pela Igreja de São Pedro. Antes de finalizar, faremos um passeio pelo Jardim Inglês, um dos maiores parques urbanos da Europa. Hospedagem."
      },
      {
        "day": 3,
        "route": "MUNIQUE - NEUSCHWANSTEIN - MUNIQUE",
        "text": "Café da manhã e visita ao Castelo de Neuschwanstein, construído pelo rei Ludwig II da Baviera, mais conhecido pelo apelido de ‘o Rei Louco‘. A construção foi inspirada nos castelos medievais dos ‘Cavaleiros Teutônicos‘ e seus salões aludem a mitos, fábulas e lendas. À tarde, continuação para Oberammergau, famosa por sua peça da Paixão, que data de 1633 e é representada a cada 10 anos. Em seguida, visitamos também a Abadia Beneditina de Ettal, fundada pela Casa de Wittelsbacher. Acomodação."
      },
      {
        "day": 4,
        "route": "MUNIQUE - ZURIQUE",
        "text": "Café da manhã e saída para Schaffhausen, famosa pelas Cataratas do Reno, a maior cachoeira na Europa Central. Em seguida, passagem pelo centro antigo de Schaffhausen, fechado para automóveis que é considerado um dos mais pitorescos de toda a Suíça. Chegada a Zurique à tarde. Acomodação em Zurique."
      },
      {
        "day": 5,
        "route": "ZURIQUE",
        "text": "Pela manhã, visita da cidade, destacando o centro histórico com a catedral, a antiga prefeitura e a Porta de São Martinho. O percurso continua pelo centro comercial e financeiro, a Bahnhofstrasse, a igreja de Fraumünster, o Limmatquai e o bairro da Universidade. Em seguida, descobriremos o mundo do chocolate com a visita à Casa do Chocolate Lindt, onde conheceremos sua história e desfrutaremos de uma degustação."
      },
      {
        "day": 6,
        "route": "ZURIQUE - LUCERNA - BERNA",
        "text": "Saída em direção a Lucerna, cidade medieval situada às margens do Lago dos Quatro Cantões. Um de seus principais atrativos é a Ponte da Capela, construída em madeira em 1333 e decorada com pinturas. Em seguida, vamos nos dirigir a Engelberg, de onde se sobe no primeiro teleférico giratório do mundo até o topo do Monte Titlis, a 3.020 metros, com impressionantes vistas dos Alpes. À tarde, continuação até Berna, capital da Suíça e uma das cidades medievais mais bem conservadas da Europa. Hospedagem."
      },
      {
        "day": 7,
        "route": "BERNA - GRUYÈRES GENEBRA",
        "text": "Visita panorâmica de Berna, destacando a Torre do Relógio e a Catedral de São Vicente do século XV. Após o passeio, saída em direção à região de Gruyeres, uma pequena cidade cheia de charme. A região é conhecida pela produção do queijo gruyère, um dos mais apreciados da Suíça. Passeio pela localidade. Continuação até Genebra. Hospedagem."
      },
      {
        "day": 8,
        "route": "GENEBRA",
        "text": "Passeio pela cidade, onde veremos a Promenade du Lac e o Jardim Inglês, onde se encontra o famoso Relógio Floral. Genebra é berço de figuras históricas como Calvino, Rousseau, Voltaire e Henri Dunant, fundador da Cruz Vermelha. O símbolo da cidade é o Jet d’Eau, um dos jatos de água mais altos do mundo, com uma altura de 140 metros. Passeio pelo centro histórico com a Catedral de São Pedro e visita ao Parc des Bastions com o Monumento aos Reformadores. Tarde livre e hospedagem."
      },
      {
        "day": 9,
        "route": "GENEBRA - MONTREUX - ZERMATT",
        "text": "Saída em direção a Montreux, onde a combinação de lago, montanhas e vinhedos cria uma paisagem única. Breve visita e entrada ao Castelo de Chillon, situado às margens do Lago Léman e antiga residência dos condes de Saboia durante quase quatro séculos. Continuação até Zermatt, pitoresco povoado alpino livre de tráfego, localizado aos pés do Matterhorn."
      },
      {
        "day": 10,
        "route": "ZERMATT",
        "text": "Subida em trem cremalheira ao Gornergrat, mirante situado a 3.089 metros de altitude, de onde se obtém uma das melhores vistas do Matterhorn e dos Alpes, com panorâmicas de até 29 picos com mais de 4.000 metros. Retorno de trem a Zermatt e hospedagem."
      },
      {
        "day": 11,
        "route": "ZERMATT - GLACIER EXPRESS - ZURIQUE",
        "text": "Embarque no Glacier Express, um dos trens panorâmicos mais famosos da Suíça, conhecido como o „trem expresso mais lento do mundo“. O trajeto entre Zermatt e Chur atravessa vales, montanhas e espetaculares pontes, incluindo a passagem pelo porto de Oberalp, a 2.033 metros de altitude. Chegada a Chur e continuação de ônibus até Zurique. Hospedagem."
      },
      {
        "day": 12,
        "route": "ZURIQUE",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "leste-europeu-e-alemanha",
    "code": "EETCEAL",
    "title": "Leste Europeu e Alemanha",
    "subtitle": "Viena · Budapeste · Praga · Berlim · Frankfurt · Heidelberg · Floresta Negra · Munique",
    "intro": "Dezoito dias de Viena a Munique cruzando a Europa Central e a Alemanha inteira: capitais imperiais, Berlim, o Reno, Heidelberg e a Floresta Negra. Um roteiro para quem quer uma viagem só, longa e completa.",
    "highlights": ["Viena, Budapeste e Praga em sequência", "Berlim com guia local", "Heidelberg e a Alemanha romântica", "Floresta Negra e Munique", "Dezoito dias sem trocar de grupo", "Hotéis centrais em todas as cidades"],
    "category": "Primeira",
    "days": 18,
    "nights": 17,
    "priceEur": 3975,
    "singleSupplementEur": 1870,
    "countries": [
      "Áustria",
      "Hungria",
      "Eslováquia",
      "República Tcheca",
      "Alemanha",
      "França"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Parkhotel Schönbrunn"
      },
      {
        "city": "Budapeste",
        "hotel": "Mercure Korona"
      },
      {
        "city": "Praga",
        "hotel": "Hermitage"
      },
      {
        "city": "Berlim",
        "hotel": "Sheraton"
      },
      {
        "city": "Frankfurt",
        "hotel": "Marriott"
      },
      {
        "city": "Heidelberg",
        "hotel": "Marriott"
      },
      {
        "city": "Munique",
        "hotel": "Westin Grand"
      }
    ],
    "departures": [
      "2027-04-08",
      "2027-04-22",
      "2027-05-06",
      "2027-05-20",
      "2027-06-03",
      "2027-06-17",
      "2027-07-01",
      "2027-07-15",
      "2027-07-29",
      "2027-08-12",
      "2027-08-26",
      "2027-09-09",
      "2027-09-23"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, realizaremos uma visita panorâmica da cidade, que oferece uma excelente impressão dos numerosos pontos de interesse de Viena. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do prínci…"
      },
      {
        "day": 3,
        "route": "VIENA",
        "text": "Dia livre para continuar aproveitando a cidade no seu próprio ritmo. Se após as impressões da capital desejar se aprofundar na natureza, recomendamos participar de uma excursão opcional ao famoso Vale do Danúbio, situado a cerca de 80 quilômetros de Viena e considerado um dos trechos mais belos do rio (não incluída)."
      },
      {
        "day": 4,
        "route": "VIENA - BUDAPESTE",
        "text": "Começaremos o dia com a saída em direção à Hungria. Aproveite o trajeto em nosso ônibus que nos levará à capital, Budapeste, frequentemente conhecida como a Pérola do Danúbio."
      },
      {
        "day": 5,
        "route": "BUDAPESTE",
        "text": "Iniciaremos o passeio de hoje por Pest e pela Praça dos Heróis, onde se encontra o Monumento do Milênio. Em seu pedestal erguem-se as estátuas dos sete conquistadores e de seu líder Árpád. O percurso continua pela avenida Andrássy, declarada Patrimônio da Humanidade. Aqui encontra-se o edifício mais importante do boulevard, a Ópera Estatal"
      },
      {
        "day": 6,
        "route": "BUDAPESTE – BRATISLAVA - PRAGA",
        "text": "40 Uma foto de uma praça histórica com edifícios coloridos e uma carruagem puxada por cavalos."
      },
      {
        "day": 7,
        "route": "PRAGA",
        "text": "Iniciaremos o dia com a visita da cidade. Começaremos pelo bairro do Castelo de Hradčany, com a Catedral de São Vito, o Castelo de Praga e a Rua do Ouro. Após percorrer os diferentes pátios do castelo, visitaremos a Cidade Pequena pela rua N…"
      },
      {
        "day": 8,
        "route": "PRAGA",
        "text": "Hoje terá o dia totalmente livre para continuar descobrindo a cidade ou descansar. Para aqueles que desejam conhecer como relaxavam os imperadores, oferecemos uma excursão opcional a Karlovy Vary, a clássica cidade termal da antiga monarquia austro-húngara (não incluída). Hospedagem em Praga."
      },
      {
        "day": 9,
        "route": "PRAGA - DRESDEN - BERLIM",
        "text": "Começaremos o dia em direção a Dresden, uma das cidades mais belas da Alemanha, situada às margens do rio Elba. Também é conhecida como a “Florença do Elba”. Embora os bombardeios da aviação americana tenham danificado gravemente a cidade, hoje ela voltou a brilhar com todo o seu esplendor arquitetônico. Destacam-se a joia barroca do Zwinger, a Ópera Semper e a Hofkirche. Sabia que o primeiro chocolate ao leite e, curiosamente, a pasta de dentes foram inventados em Dresden? Continuação da viagem até Berlim e hospedagem."
      },
      {
        "day": 10,
        "route": "BERLIM",
        "text": "Iniciaremos o dia com uma visita panorâmica da cidade, destacando-se as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao…"
      },
      {
        "day": 11,
        "route": "BERLIM - FRANKFURT",
        "text": "Café da manhã e saída para Frankfurt, passando pela cidade de Weimar, na Turíngia, que ainda hoje conserva seu caráter medieval. Destaque para a Igreja Paroquial, no centro da praça, que abriga um retábulo feito por Lukas Cranach, o Velho. Continuação do percurso até Frankfurt. Chegada e acomodação."
      },
      {
        "day": 12,
        "route": "FRANKFURT - ROTHENBURG - HEIDELBERG",
        "text": "Após o café da manhã, realizaremos a visita da cidade de Frankfurt, onde conheceremos o centro histórico com o Römer, a Prefeitura, a Catedral e a Paulskirche (Igreja de São Paulo). Também veremos a Casa de Goethe, local de nascimento do grande poeta alemão, assim como as instalações da Feira de Frankfurt, sede de exposições internacionais. Veremos a Alte Oper (Ópera Antiga) e o distrito financeiro, com seus arranha-céus, entre eles alguns dos mais altos da Europa. Além disso, passaremos pelo Banco Central Europeu, a Hauptwache e a rua comercial „Zeil“, assim como pelas torres das antigas muralhas e os museus às margens do Reno. Em seguida, saída em direção a Rothenburg ob der Tauber. Ao chegar, a cidade oferece uma autêntica…"
      },
      {
        "day": 13,
        "route": "HEIDELBERG",
        "text": "A jornada começa com a visita de Heidelberg, a cidade universitária mais antiga da Alemanha. O percurso inicia-se no centro histórico, onde se destacam edifícios históricos como a antiga prefeitura e a Heiliggeistkirche, ambos do século XV, além…"
      },
      {
        "day": 14,
        "route": "HEIDELBERG - ESTRASBURGO - FRIBURGO",
        "text": "O percurso de hoje transcorre através dos vales do Neckar e do Reno, onde os vinhedos se estendem sobre suaves colinas que se refletem no rio. Ao aproximar-se da fronteira francesa, a paisagem dá lugar a bosques densos e colinas onduladas. Chega…"
      },
      {
        "day": 15,
        "route": "FRIBURGO - FLORESTA NEGRA - LINDAU - MUNIQUE",
        "text": "Saída de Friburgo em direção à Floresta Negra, atravessando paisagens de grande beleza natural. Nossa primeira parada será para degustar uma autêntica torta de cerejas da Floresta Negra, acompanhada de café, e apreciar um dos sabores mais tr…"
      },
      {
        "day": 16,
        "route": "MUNIQUE",
        "text": "Visita panorâmica de Munique, capital da Baviera, situada às margens do rio Isar. O percurso começa no portão medieval Karlstor e continua até a Igreja de São Miguel, onde se encontram os restos do rei Luís II. Através da Marienplatz chega-se…"
      },
      {
        "day": 18,
        "route": "MUNIQUE",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "alemanha-e-viena",
    "code": "EETALAUS",
    "title": "Alemanha e Viena",
    "subtitle": "Frankfurt · Rothenburg · Heidelberg · Estrasburgo · Floresta Negra · Munique · Vale do Danúbio · Viena",
    "intro": "Dez dias na Alemanha de conto de fadas até Viena: Rothenburg dentro das muralhas, Heidelberg sobre o Neckar, Estrasburgo alsaciana, a Floresta Negra, Munique e a navegação pelo vale do Danúbio.",
    "highlights": ["Rothenburg ob der Tauber, cidade medieval intacta", "Vale do Danúbio entre Passau e Viena", "Heidelberg e Estrasburgo", "Floresta Negra e seus relógios de cuco", "Munique bávara", "Viena imperial como encerramento"],
    "category": "Primeira",
    "days": 10,
    "nights": 9,
    "priceEur": 2290,
    "singleSupplementEur": 990,
    "countries": [
      "Alemanha",
      "França",
      "Áustria"
    ],
    "hotels": [
      {
        "city": "Frankfurt",
        "hotel": "Marriott"
      },
      {
        "city": "Heidelberg",
        "hotel": "Marriott"
      },
      {
        "city": "Friburgo",
        "hotel": "Leonardo City Center"
      },
      {
        "city": "Munique",
        "hotel": "Westin Grand"
      },
      {
        "city": "Viena",
        "hotel": "Parkhotel Schönbrunn"
      }
    ],
    "departures": [
      "2027-04-15",
      "2027-05-13",
      "2027-05-27",
      "2027-06-10",
      "2027-06-24",
      "2027-07-08",
      "2027-07-22",
      "2027-08-05",
      "2027-08-19",
      "2027-09-02",
      "2027-09-16",
      "2027-09-30"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "FRANKFURT",
        "text": "Chegada a Frankfurt e traslado ao hotel. O guia estará no hotel a partir das 19h00."
      },
      {
        "day": 2,
        "route": "FRANKFURT - ROTHENBURG - HEIDELBERG",
        "text": "Após o café da manhã, realizaremos a visita da cidade de Frankfurt, onde conheceremos o centro histórico com o Römer, a Prefeitura, a Catedral e a Paulskirche (Igreja de São Paulo). Também veremos a Casa de Goethe, local de nascimento do grande poeta alemão, assim como as instalações da Feira de Frankfurt, sede de exposições internacionais. Veremos a Alte Oper (Ópera Antiga) e o distrito financeiro, com seus arranha-céus, entre eles alguns dos mais altos da Europa. Além disso, passaremos pelo Banco Central Europeu, a Hauptwache e a rua comercial „Zeil“, assim como pelas torres das antigas muralhas e os museus às margens do Reno. Em seguida, saída em direção a Rothenburg ob der Tauber. Ao chegar, a cidade oferece uma autêntica paisagem medieval, com suas muralhas perfeitamente conservadas e ruas de paralelepípedos que evocam tempos de cavaleiros e donzelas. A praça do mercado, com sua pit"
      },
      {
        "day": 3,
        "route": "HEIDELBERG",
        "text": "A jornada começa com a visita de Heidelberg, a cidade universitária mais antiga da Alemanha. O percurso inicia-se no centro histórico, onde se destacam edifícios históricos como a antiga prefeitura e a Heiliggeistkirche, ambos do século XV, além das tradicionais casas em enxaimel. O ponto culminante é a visita ao castelo de Heidelberg, situado no alto da cidade, de onde se obtém uma magnífica vista do vale do Neckar. Em seu interior encontra-se a grande adega, que abriga o maior barril de vinho do mundo. Posteriormente, passeio pela Ponte Velha, uma construção de pedra do século XVIII que completa a visita. Tarde livre e hospedagem."
      },
      {
        "day": 4,
        "route": "HEIDELBERG - ESTRASBURGO - FRIBURGO",
        "text": "O percurso de hoje transcorre através dos vales do Neckar e do Reno, onde os vinhedos se estendem sobre suaves colinas que se refletem no rio. Ao aproximar-se da fronteira francesa, a paisagem dá lugar a bosques densos e colinas onduladas. Chegada a Estrasburgo, cidade de grande riqueza histórica e cultural, famosa por sua catedral gótica e seu encantador centro histórico. Destaca-se o bairro de La Petite France, com suas casas tradicionais e canais, assim como a Praça da Catedral, especialmente animada durante o mercado de Natal. Após uma breve visita panorâmica, continuação até Friburgo."
      },
      {
        "day": 5,
        "route": "FRIBURGO - FLORESTA NEGRA - LINDAU - MUNIQUE",
        "text": "Saída de Friburgo em direção à Floresta Negra, atravessando paisagens de grande beleza natural. Nossa primeira parada será para degustar uma autêntica torta de cerejas da Floresta Negra, acompanhada de café, e apreciar um dos sabores mais tradicionais e emblemáticos da região. Uma pausa doce ideal para se aproximar da gastronomia local em um ambiente agradável. Em seguida, veremos o maior relógio cuco do mundo, localizado em Schonach Untertal. Construído pelo relojoeiro Josef Dold e sua família, este impressionante mecanismo de madeira mede mais de três metros e representa uma mostra excepcional da tradição artesanal da região. A viagem continua em direção a Lindau, uma pitoresca cidade situada em uma ilha no Lago de Constança, conhecida por seu porto e sua arquitetura histórica. Após uma breve parada, continuação para Munique, atravessando a região de Allgäu, caracterizada por seus verd"
      },
      {
        "day": 6,
        "route": "MUNIQUE",
        "text": "Visita panorâmica de Munique, capital da Baviera, situada às margens do rio Isar. O percurso começa no portão medieval Karlstor e continua até a Igreja de São Miguel, onde se encontram os restos do rei Luís II. Através da Marienplatz chega-se à Prefeitura, famosa pelo seu carrilhão, e à Frauenkirche, cuja entrada conserva, segundo a lenda, a pegada do Diabo. Passaremos também pela Praça da Ópera, pela Feldherrnhalle, pela igreja Bürgersaalkirche, pela Residência Real e pela Igreja de São Pedro. Antes de finalizar, faremos um passeio pelo Jardim Inglês, um dos maiores parques urbanos da Europa. Hospedagem."
      },
      {
        "day": 8,
        "route": "MUNIQUE - VALE DO DANÚBIO - VIENA",
        "text": "Café da manhã e saída para Viena, passando pelo Vale do Danúbio. Apresentamos a beleza do Vale do Danúbio por meio de um cenário romântico, repleto de histórias e lendas. Faremos um breve passeio por Dürnstein, cidade medieval famosa por ter sido o local onde o rei Ricardo foi mantido prisioneiro em seu castelo (hoje em ruínas). Continuação para Viena. Chegada e acomodação. À noite, <mark>jantar típico austríaco</mark> no famoso Restaurante Marchfelderhof, conhecido além das fronteiras do país. Neste ambiente verdadeiramente único, você logo terá a sensação de que a Imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 9,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, exploraremos Viena com uma visita panorâmica que oferece uma excelente impressão de seus numerosos atrativos. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas. Continuaremos pela Ringstrasse, com edifícios emblemáticos como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas encantadoras ruas do centro histórico e visitaremos o interior da Catedral de Santo Estêvão. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina na Maria-Theresien-Platz. Após a visita, terá a opção de participar de uma excursão ao Paláci"
      },
      {
        "day": 10,
        "route": "VIENA",
        "text": "Café da manhã e traslado de saída para o aeroporto. Vista de Viena"
      }
    ]
  },
  {
    "slug": "tour-dos-alpes",
    "code": "EETMUCZRH",
    "title": "Tour dos Alpes",
    "subtitle": "Munique · Neuschwanstein · Viena · Hallstatt · Salzburgo · Innsbruck · Liechtenstein · Zurique",
    "intro": "Doze dias pelos Alpes: Neuschwanstein, Hallstatt refletido no lago, Salzburgo de Mozart, Innsbruck entre picos, o principado de Liechtenstein e Zurique. Montanha, música e lago em doses iguais.",
    "highlights": ["Hallstatt, o vilarejo mais fotografado da Áustria", "Castelo de Neuschwanstein na Baviera", "Salzburgo, cidade natal de Mozart", "Innsbruck e o telhadinho de ouro", "Liechtenstein, um país em uma tarde", "Viena e Zurique nas pontas do circuito"],
    "category": "Primeira",
    "days": 12,
    "nights": 11,
    "priceEur": 3295,
    "singleSupplementEur": 1210,
    "countries": [
      "Alemanha",
      "Áustria",
      "Liechtenstein",
      "Suíça"
    ],
    "hotels": [
      {
        "city": "Munique",
        "hotel": "Westin Grand"
      },
      {
        "city": "Viena",
        "hotel": "Roomz Prater"
      },
      {
        "city": "Salzburgo",
        "hotel": "June Six Salzburg"
      },
      {
        "city": "Innsbruck",
        "hotel": "AC by Marriott Stage 12"
      },
      {
        "city": "Zurique",
        "hotel": "Novotel City West"
      }
    ],
    "departures": [
      "2027-05-20",
      "2027-06-17",
      "2027-08-26",
      "2027-09-23"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "MUNIQUE",
        "text": "Chegada a Munique e traslado ao hotel e acomodação. O guia estará no hotel a partir das 19h00."
      },
      {
        "day": 2,
        "route": "MUNIQUE",
        "text": "Visita panorâmica de Munique, capital da Baviera, situada às margens do rio Isar. O percurso começa no portão medieval Karlstor e continua até a Igreja de São Miguel, onde se encontram os restos do rei Luís II. Através da Marienplatz chega-se à Prefeitura, famosa pelo seu carrilhão, e à Frauenkirche, cuja entrada conserva, segundo a lenda, a pegada do Diabo. Passaremos também pela Praça da Ópera, pela Feldherrnhalle, pela igreja Bürgersaalkirche, pela Residência Real e pela Igreja de São Pedro. Antes de finalizar, faremos um passeio pelo Jardim Inglês, um dos maiores parques urbanos da Europa. Hospedagem."
      },
      {
        "day": 3,
        "route": "MUNIQUE - NEUSCHWANSTEIN - MUNIQUE",
        "text": "Excursão ao Castelo de Neuschwanstein, mandado construir pelo rei Luís"
      },
      {
        "day": 4,
        "route": "MUNIQUE - VALE DO DANÚBIO - VIENA",
        "text": "Café da manhã e saída para Viena, passando pelo Vale do Danúbio. Apresentamos a beleza do Vale do Danúbio por meio de um cenário romântico, repleto de histórias e lendas. Faremos um breve passeio por Dürnstein, cidade medieval famosa por ter sido o local onde o rei Ricardo foi mantido prisioneiro em seu castelo (hoje em ruínas). Continuação para Viena. Chegada e acomodação. À noite, jantar típico austríaco no famoso Restaurante Marchfelderhof, conhecido além das fronteiras do país. Neste ambiente verdadeiramente único, você logo terá a sensação de que a Imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 5,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, exploraremos Viena com uma visita panorâmica que oferece uma excelente impressão de seus numerosos atrativos. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas. Continuaremos pela Ringstrasse, com edifícios emblemáticos como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas encantadoras ruas do centro histórico e visitaremos o interior da Catedral de Santo Estêvão. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina na Maria-Theresien-Platz. Após a visita, terá a opção de participar de uma excursão ao Paláci"
      },
      {
        "day": 6,
        "route": "VIENA - HALLSTATT - SALZBURGO",
        "text": "Café da manhã no hotel e saída cedo, pois hoje vamos visitar um verdadeiro ponto culminante. Seguimos em direção ao oeste e veremos uma das regiões mais belas da Áustria, chamada Salzkammergut, uma região famosa por suas montanhas e lagos. Especialmente o povoado de Hallstatt é um lugar tão incrivelmente espetacular que até os chineses criaram uma cópia do antigo povoado das minas de sal. Mas somente no original você descobrirá essa cultura realmente única, com tanta história, em um entorno montanhoso que vai tirar o seu fôlego. À tarde, a viagem continua em direção a Salzburgo. Hospedagem."
      },
      {
        "day": 7,
        "route": "SALZBURGO",
        "text": "Visita panorâmica de Salzburgo, começando em frente ao Palácio Mirabell e seus jardins. O percurso continua pela Schwarzstrasse, passando pelo Mozarteum e o Teatro de Marionetes, até chegar ao centro histórico, onde se encontra a residência de Mozart e a Igreja da Santíssima Trindade. Após cruzar o rio Salzach, continua-se em direção ao Palácio de Hellbrunn com uma breve parada. No retorno ao centro, passa-se pelo Palácio Frohnburg e a abadia de Nonnberg, acessando através do túnel de Neutor. Antes de finalizar na Praça de Mozart, vamos passar pelo Festival."
      },
      {
        "day": 8,
        "route": "SALZBURGO - SWAROVSKI - INNSBRUCK",
        "text": "Saída em direção a Innsbruck com parada no Mundo de Cristal Swarovski, um espaço criado pelo artista André bém duas vezes sede dos Jogos Olímpicos de Inverno. Nossa visita passará pelo Arco do Triunfo em direção ao centro histórico com suas casas medievais, onde se destacam o famoso Telhadinho de Ouro, a Igreja da Corte, onde se encontra o túmulo do imperador Maximiliano I rodeado pelas famosas estátuas negras gigantes de cobre, e o Palácio Hofburg. A visita da cidade finaliza no Palácio de Congressos de Innsbruck, onde nos espera uma experiência especial. Hoje nos aproximamos dos Alpes, ou melhor, da cordilheira Nordkette. Primeiro subiremos de funicular até Hungerburg, a 860 m acima do nível do mar. A vista já impressiona, mas fica ainda melhor. Em seguida, tomamos o teleférico até Seegrube, nossa segunda parada a 1.905 metros acima do nível do mar. Ali teremos que nos acli"
      },
      {
        "day": 9,
        "route": "INNSBRUCK",
        "text": "Café da manhã e visita da cidade de Innsbruck. A capital do Tirol, residência dos Habsburgo na Idade Média, foi tam-"
      },
      {
        "day": 10,
        "route": "INNSBRUCK - LIECHTENSTEIN - ZURIQUE",
        "text": "Saída em direção à Suíça com parada no Principado de Liechtenstein, um dos países menores do mundo, situado no coração dos Alpes. À tarde, continuação em direção a Zurique. Hospedagem."
      },
      {
        "day": 11,
        "route": "ZURIQUE",
        "text": "Pela manhã, visita da cidade, destacando o centro histórico com a catedral, a antiga prefeitura e o Portão de São Martinho. O percurso continua pelo centro comercial e financeiro, a Bahnhofstrasse, a igreja de Fraumünster, o Limmatquai e o bairro da Universidade. Em seguida, descobriremos o mundo do chocolate com a visita à Casa do Chocolate Lindt, onde será possível conhecer sua história e desfrutar de uma degustação."
      },
      {
        "day": 12,
        "route": "ZURIQUE",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "austria-e-zurique",
    "code": "EETVIEZRH",
    "title": "Áustria e Zurique",
    "subtitle": "Viena · Hallstatt · Salzburgo · Innsbruck · Liechtenstein · Zurique",
    "intro": "Nove dias na Áustria dos lagos e das montanhas, terminando na Suíça: Viena imperial, Hallstatt ao amanhecer, Salzburgo barroca, Innsbruck alpina e Zurique à beira do lago.",
    "highlights": ["Hallstatt e a região dos lagos de Salzburgo", "Salzburgo: fortaleza, catedral e Getreidegasse", "Innsbruck e os Alpes tiroleses", "Liechtenstein no caminho", "Viena imperial em dois dias", "Roteiro compacto e cênico"],
    "category": "Primeira",
    "days": 9,
    "nights": 8,
    "priceEur": 2595,
    "singleSupplementEur": 880,
    "countries": [
      "Áustria",
      "Liechtenstein",
      "Suíça"
    ],
    "hotels": [
      {
        "city": "Viena",
        "hotel": "Roomz Prater"
      },
      {
        "city": "Salzburgo",
        "hotel": "June Six Salzburg"
      },
      {
        "city": "Innsbruck",
        "hotel": "AC by Marriott Stage 12"
      },
      {
        "city": "Zurique",
        "hotel": "Novotel City West"
      }
    ],
    "departures": [
      "2027-05-23",
      "2027-06-20",
      "2027-08-29",
      "2027-09-26"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "VIENA",
        "text": "Chegada ao aeroporto de Viena, onde nosso motorista o levará ao seu hotel. À noite, conhecerá seus companheiros de viagem em um típico jantar austríaco de boas-vindas no restaurante Marchfelderhof, muito conhecido além das fronteiras do país. Neste ambiente realmente único, rapidamente terá a sensação de que a imperatriz Sissi está sentada ao seu lado à mesa. Naturalmente, as bebidas também estão incluídas."
      },
      {
        "day": 2,
        "route": "VIENA",
        "text": "Após o café da manhã no hotel, exploraremos Viena com uma visita panorâmica que oferece uma excelente impressão de seus numerosos atrativos. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do príncipe Eugênio de Saboia, de onde poderá desfrutar de uma magnífica vista da cidade, imortalizada pelo artista Giovanni Antonio Canal em suas pinturas. Continuaremos pela Ringstrasse, com edifícios emblemáticos como a Ópera Estatal, o Museu de Ciências Naturais, o Monumento a Maria Teresa, o Parlamento austríaco, a Prefeitura, o Teatro Nacional e o Hofburg, sede do nosso Presidente Federal. Passearemos pelas encantadoras ruas do centro histórico e visitaremos o interior da Catedral de Santo Estêvão. Também passaremos pelo Relógio Anker e pelo bairro judeu. O percurso termina na Maria-Theresien-Platz. Após a visita, terá a opção de participar de uma excursão ao Paláci"
      },
      {
        "day": 3,
        "route": "VIENA - HALLSTATT - SALZBURGO",
        "text": "Café da manhã no hotel e saída cedo, pois hoje vamos visitar um verdadeiro ponto culminante. Seguimos em direção ao oeste e veremos uma das regiões mais belas da Áustria, chamada Salzkammergut, uma região famosa por suas montanhas e lagos. Especialmente o povoado de Hallstatt é um lugar tão incrivelmente espetacular que até os chineses criaram uma cópia do antigo povoado das minas de sal. Mas somente no original você descobrirá essa cultura realmente única, com tanta história, em um entorno montanhoso que vai tirar o seu fôlego. À tarde, a viagem continua em direção a Salzburgo. Hospedagem."
      },
      {
        "day": 4,
        "route": "SALZBURGO",
        "text": "Visita panorâmica de Salzburgo, começando em frente ao Palácio Mirabell e seus jardins. O percurso continua pela Schwarzstrasse, passando pelo Mozarteum e o Teatro de Marionetes, até chegar ao centro histórico, onde se encontra a residência de Mozart e a Igreja da Santíssima Trindade. Após cruzar o rio Salzach, continua-se em direção ao Palácio de Hellbrunn com uma breve parada. No retorno ao centro, passa-se pelo Palácio Frohnburg e a abadia de Nonnberg, acessando através do túnel de Neutor. Antes de finalizar na Praça de Mozart, vamos passar pelo Festivalhaus; o tanque dos cavalos e a Igreja de São Blásio. Tarde livre e hospedagem."
      },
      {
        "day": 5,
        "route": "SALZBURGO - SWAROVSKI - INNSBRUCK",
        "text": "Saída em direção a Innsbruck com parada no Mundo de Cristal Swarovski, um espaço criado pelo artista André"
      },
      {
        "day": 6,
        "route": "INNSBRUCK",
        "text": "Café da manhã e visita da cidade de Innsbruck. A capital do Tirol, residência dos Habsburgo na Idade Média, foi também duas vezes sede dos Jogos Olímpicos de Inverno. Nossa visita passará pelo Arco do Triunfo em direção ao centro histórico com suas casas medievais, onde se destacam o famoso Telhadinho de Ouro, a Igreja da Corte, onde se encontra o túmulo do imperador Maximiliano I rodeado pelas famosas estátuas negras gigantes de cobre, e o Palácio Hofburg. A visita da cidade finaliza no"
      },
      {
        "day": 7,
        "route": "INNSBRUCK - LIECHTENSTEIN - ZURIQUE",
        "text": "Saída em direção à Suíça com parada no Principado de Liechtenstein, um dos países menores do mundo, situado no coração dos Alpes. À tarde, continuação em direção a Zurique. Hospedagem."
      },
      {
        "day": 8,
        "route": "ZURIQUE",
        "text": "Cable car ascending a mountain Pela manhã, visita da cidade, destacando o centro histórico com a catedral, a antiga prefeitura e o Portão de São Martinho. O percurso continua pelo centro comercial e financeiro, a Bahnhofstrasse, a igreja de Fraumünster, o Limmatquai e o bairro da Universidade. Em seguida, descobriremos o mundo do chocolate com a visita à Casa do Chocolate Lindt, onde será possível conhecer sua história e desfrutar de uma degustação."
      },
      {
        "day": 9,
        "route": "ZURIQUE",
        "text": "Café da manhã e traslado de saída para o aeroporto."
      }
    ]
  },
  {
    "slug": "paises-baixos-e-paris",
    "code": "AMSPAR",
    "title": "Países Baixos e Paris",
    "subtitle": "Amsterdã · Antuérpia · Bruges · Gante · Bruxelas · Paris",
    "intro": "Nove dias entre canais e boulevards: Amsterdã de bicicleta, os canais de Bruges à noite, o gótico de Antuérpia e Gante, o chocolate de Bruxelas e Paris para fechar, como só Paris fecha.",
    "highlights": ["Bruges iluminada, a Veneza do norte", "Amsterdã e seus canais patrimônio da humanidade", "Gante e Antuérpia em um mesmo dia", "Bruxelas: Grand Place e chocolaterias", "Paris com guia local", "Trechos de trem rápido incluídos"],
    "category": "Primeira",
    "days": 9,
    "nights": 8,
    "priceEur": 2550,
    "singleSupplementEur": 1040,
    "countries": [
      "Países Baixos",
      "Bélgica",
      "França"
    ],
    "hotels": [
      {
        "city": "Amsterdã",
        "hotel": "Apollo Amsterdam"
      },
      {
        "city": "Bruges",
        "hotel": "Novotel"
      },
      {
        "city": "Bruxelas",
        "hotel": "Renaissance"
      },
      {
        "city": "Paris",
        "hotel": "NH Paris Gare de l'Est"
      }
    ],
    "departures": [
      "2027-05-02",
      "2027-05-23",
      "2027-06-13",
      "2027-07-04",
      "2027-09-12",
      "2027-09-26",
      "2027-10-10"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "AMSTERDÃ",
        "text": "Chegada ao aeroporto de Amsterdã e traslado ao hotel. Acomodação. O guia estará no hotel a partir das 19h00."
      },
      {
        "day": 2,
        "route": "AMSTERDÃ",
        "text": "Café da manhã e visita panorâmica percorrendo o centro histórico, a Praça Dam com o Monumento da Libertação, o Palácio Real, construído sobre 13.659 estacas de madeira, a Praça Rembrandt com o monumento ao artista, a Praça Leidseplein, o Teatro Municipal e o famoso Museu Nacional. Finalizaremos com um passeio de barco de uma hora pelos canais, rodeados por casas de mercadores do século XVII, igrejas com campanários e armazéns construídos nos séculos XVI e XVII."
      },
      {
        "day": 3,
        "route": "AMSTERDÃ - ANTUÉRPIA - BRUGES",
        "text": "Café da manhã e saída em direção a Antuérpia, uma das cidades mais importantes da Bélgica, famosa por seu mercado de diamantes e seu porto (o segundo maior da Europa). Combina elementos tradicionais com um ambiente moderno, o que a torna uma cidade de referência em design, vida noturna e diversidade cultural. Visitaremos a Catedral de Nossa Senhora, a Praça Maior e a Prefeitura. Continuação até Bruges, capital da província da Flandres Ocidental, famosa por seu centro histórico declarado Patrimônio da Humanidade. Também é conhecida como «a Veneza do Norte» por seus canais. Hospedagem."
      },
      {
        "day": 4,
        "route": "BRUGES - GANTE - BRUXELAS",
        "text": "Café da manhã e breve visita da cidade. Destacam-se a Igreja de Santa Ana, a Basílica do Sangue Sagrado e a Casa Consistorial, magnífico exemplo de arquitetura renascentista. Seguiremos até Gante para visitar seu centro histórico, onde se destacam a Igreja de São Nicolau, a Igreja de São Miguel e a Catedral de São Bavão, que abriga obras como «A vocação de São Bavão» de Rubens e o políptico «A adoração do Cordeiro Místico» dos irmãos Van Eyck. Após a visita, continuação até Bruxelas. Hospedagem."
      },
      {
        "day": 5,
        "route": "BRUXELAS",
        "text": "Café da manhã e visita da cidade. Entre seus edifícios destacam-se a Catedral de São Miguel e Santa Gúdula, a Prefeitura, o Palácio da Justiça e a Grand Place, um dos conjuntos arquitetônicos mais belos da Europa. Em seguida, visitaremos um museu do chocolate onde um mestre chocolatier preparará pralinés diante de nós. A visita inclui degustações e acesso à loja. Tarde livre. Hospedagem."
      },
      {
        "day": 6,
        "route": "BRUXELAS - PARIS",
        "text": "Café da manhã e saída em direção a Paris. Chegada à tarde à capital francesa, conhecida como a cidade do amor. Hospedagem em Paris."
      },
      {
        "day": 7,
        "route": "PARIS",
        "text": "Café da manhã e visita panorâmica de uma das cidades mais turísticas e visitadas do mundo. Durante o percurso em ônibus passaremos pelo bairro de Saint-Germain, de ambiente intelectual e ponto de encontro de figuras como Hemingway, Sartre e Picasso. Veremos a Universidade da Sorbonne, os Campos Elísios, a Praça da Concórdia, o Arco do Triunfo e algumas das pontes sobre o Sena, até chegar à Torre Eiffel, onde faremos uma parada para fotos. Também veremos Os Inválidos, onde se encontra o túmulo de Napoleão, La Madeleine, o Panteão e outros lugares emblemáticos que fazem de Paris uma cidade única. À tarde, possibilidade de realizar uma visita opcional a pé pelo Bairro Latino e Montmartre. A Catedral de Notre Dame será visitada externamente. A excursão termina com um passeio de barco pelo rio Sena (não incluído). Hospedagem em Paris."
      },
      {
        "day": 8,
        "route": "PARIS",
        "text": "Café da manhã no hotel e dia livre. Possibilidade de realizar uma excursão opcional ao Palácio e aos jardins de Versalhes (não incluída), com traslado de ida e volta em ônibus. Hospedagem."
      },
      {
        "day": 9,
        "route": "PARIS",
        "text": "Café da manhã e traslado ao aeroporto. Despedimo-nos de uma viagem que nos encantou."
      }
    ]
  },
  {
    "slug": "berlim-paises-baixos-e-paris",
    "code": "EETBPAR",
    "title": "Berlim, Países Baixos e Paris",
    "subtitle": "Berlim · Amsterdã · Antuérpia · Bruges · Gante · Bruxelas · Paris",
    "intro": "Onze dias de Berlim a Paris pelos Países Baixos e pela Bélgica: memória e arte contemporânea, canais, campanários flamengos e, ao fim, a luz do Sena. Três países, um crescendo.",
    "highlights": ["Berlim: Muro, ilha dos museus e Brandemburgo", "Amsterdã em barco pelos canais", "Bruges, Gante e Antuérpia", "Bruxelas e a Grand Place", "Paris como grande final", "Onze dias com guia local"],
    "category": "Primeira",
    "days": 11,
    "nights": 10,
    "priceEur": 2895,
    "singleSupplementEur": 1300,
    "countries": [
      "Alemanha",
      "Países Baixos",
      "Bélgica",
      "França"
    ],
    "hotels": [
      {
        "city": "Berlim",
        "hotel": "Sheraton"
      },
      {
        "city": "Amsterdã",
        "hotel": "Apollo Amsterdam"
      },
      {
        "city": "Bruges",
        "hotel": "Novotel"
      },
      {
        "city": "Bruxelas",
        "hotel": "Renaissance"
      },
      {
        "city": "Paris",
        "hotel": "NH Paris Gare de l'Est"
      }
    ],
    "departures": [
      "2027-04-30",
      "2027-05-21",
      "2027-06-11",
      "2027-07-02",
      "2027-09-10",
      "2027-09-24",
      "2027-10-08"
    ],
    "itinerary": [
      {
        "day": 1,
        "route": "BERLIM",
        "text": "Chegada ao aeroporto de Berlim e traslado ao hotel. Acomodação. O guia estará no hotel a partir das 19h00."
      },
      {
        "day": 2,
        "route": "BERLIM",
        "text": "Iniciaremos o dia com uma visita panorâmica da cidade, destacando-se as famosas avenidas Kurfürstendamm e Unter den Linden, o Portão de Brandemburgo, símbolo da unidade alemã, a Alexanderplatz, a Universidade Humboldt e o Museu de Pérgamo. Ao final do passeio, oferecemos um passeio de barco pelo rio Spree, a melhor forma de admirar esta magnífica cidade e seus belos edifícios e pontes desde a água. À tarde, terá tempo livre para explorar a cidade por conta própria. Há tanto para ver que certamente encontrará algo interessante. Para os amantes de comida rápida: em Berlim são consumidas cerca de 70 milhões de salsichas currywurst por ano. A cidade possui inclusive um museu dedicado a este prato popular. Ficou curioso?"
      },
      {
        "day": 3,
        "route": "BERLIM - AMSTERDÃ",
        "text": "Café da manhã e saída pela manhã para Amsterdã, que combina seus extensos canais e inúmeras pontes com a arquitetura original dos séculos XVI e XVII, concentrada numa pequena área. Acomodação."
      },
      {
        "day": 4,
        "route": "AMSTERDÃ",
        "text": "Café da manhã e visita panorâmica percorrendo o centro histórico, a Praça Dam com o Monumento da Libertação, o Palácio Real, construído sobre 13.659 estacas de madeira, a Praça Rembrandt com o monumento ao artista, a Praça Leidseplein, o Teatro Municipal e o famoso Museu Nacional. Finalizaremos com um passeio de barco de uma hora pelos canais, rodeados por casas de mercadores do século XVII, igrejas com campanários e armazéns construídos nos séculos XVI e XVII."
      },
      {
        "day": 5,
        "route": "AMSTERDÃ - ANTUÉRPIA - BRUGES",
        "text": "Café da manhã e saída em direção a Antuérpia, uma das cidades mais importantes da Bélgica, famosa por seu mercado de diamantes e seu porto (o segundo maior da Europa). Combina elementos tradicionais com um ambiente moderno, o que a torna uma cidade de referência em design, vida noturna e diversidade cultural. Visitaremos a Catedral de Nossa Senhora, a Praça Maior e a Prefeitura. Continuação até Bruges, capital da província da Flandres Ocidental, famosa por seu centro histórico declarado Patrimônio da Humanidade. Também é conhecida como «a Veneza do Norte» por seus canais. Hospedagem."
      },
      {
        "day": 6,
        "route": "BRUGES - GANTE - BRUXELAS",
        "text": "Café da manhã e breve visita da cidade. Destacam-se a Igreja de Santa Ana, a Basílica do Sangue Sagrado e a Casa Consistorial, magnífico exemplo de arquitetura renascentista. Seguiremos até Gante para visitar seu centro histórico, onde se destacam a Igreja de São Nicolau, a Igreja de São Miguel e a Catedral de São Bavão, que abriga obras como «A vocação de São Bavão» de Rubens e o políptico «A adoração do Cordeiro Místico» dos irmãos Van Eyck. Após a visita, continuação até Bruxelas. Hospedagem."
      },
      {
        "day": 7,
        "route": "BRUXELAS",
        "text": "Café da manhã e visita da cidade. Entre seus edifícios destacam-se a Catedral de São Miguel e Santa Gúdula, a Prefeitura, o Palácio da Justiça e a Grand Place, um dos conjuntos arquitetônicos mais belos da Europa. Em seguida, visitaremos um museu do chocolate onde um mestre chocolatier preparará pralinés diante de nós. A visita inclui degustações e acesso à loja. Tarde livre. Hospedagem."
      },
      {
        "day": 8,
        "route": "BRUXELAS - PARIS",
        "text": "Café da manhã e saída em direção a Paris. Chegada à tarde à capital francesa, conhecida como a cidade do amor. Hospedagem em Paris."
      },
      {
        "day": 9,
        "route": "PARIS",
        "text": "Café da manhã e visita panorâmica de uma das cidades mais turísticas e visitadas do mundo. Durante o percurso em ônibus passaremos pelo bairro de Saint-Germain, de ambiente intelectual e ponto de encontro de figuras como Hemingway, Sartre e Picasso. Veremos a Universidade da Sorbonne, os Campos Elísios, a Praça da Concórdia, o Arco do Triunfo e algumas das pontes sobre o Sena, até chegar à Torre Eiffel, onde faremos uma parada para fotos. Também veremos Os Inválidos, onde se encontra o túmulo de Napoleão, La Madeleine, o Panteão e outros lugares emblemáticos que fazem de Paris uma cidade única. À tarde, possibilidade de realizar uma visita opcional a pé pelo Bairro Latino e Montmartre. A Catedral de Notre Dame será visitada externamente. A excursão termina com um passeio de barco pelo rio Sena (não incluído). Hospedagem em Paris."
      },
      {
        "day": 10,
        "route": "PARIS",
        "text": "Café da manhã no hotel e dia livre. Possibilidade de realizar uma excursão opcional ao Palácio e aos jardins de Versalhes (não incluída), com traslado de ida e volta em ônibus. Hospedagem."
      }
    ]
  }
];

export const LOCAL_GUIDE_INCLUDED = [
  "Guia acompanhante local durante todo o circuito (espanhol e/ou português conforme a saída negociada)",
  "Hospedagem em hotéis selecionados, com café da manhã tipo buffet",
  "Ônibus moderno, confortável e seguro em todos os trechos terrestres",
  "Sistema de áudio individual nas visitas guiadas",
  "Entradas e experiências indicadas no itinerário",
  "Jantar de boas-vindas (nos roteiros que iniciam em Viena)",
  "Traslados de chegada e saída nos aeroportos",
  "Assistência Create Travel em português antes, durante e depois da viagem",
];

export const LOCAL_GUIDE_NOT_INCLUDED = [
  "Passagens aéreas internacionais (cotamos junto, com as melhores tarifas do momento)",
  "Coordenador brasileiro embarcando do Brasil (exclusivo dos Grupos com Guia Brasileiro)",
  "Refeições não mencionadas, bebidas e extras de caráter pessoal",
  "Excursões opcionais e ingressos assinalados como não incluídos",
  "Seguro viagem, vistos e taxas consulares",
  "Gorjetas a guias e motoristas",
];

export const MONTHS_PT_SHORT = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
export const MONTHS_PT = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

export const formatDeparture = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${String(d).padStart(2, "0")} ${MONTHS_PT_SHORT[m - 1]} ${y}`;
};

export const getLocalGuideGroup = (slug: string) =>
  localGuideGroups.find((g) => g.slug === slug);

/** Lista única de destinos (países) presentes no portfólio de grupos com guia local. */
export const localGuideCountries = Array.from(
  new Set(localGuideGroups.flatMap((g) => g.countries))
).sort((a, b) => a.localeCompare(b, "pt-BR"));

/** Meses com saídas garantidas, no formato YYYY-MM. */
export const localGuideMonths = Array.from(
  new Set(localGuideGroups.flatMap((g) => g.departures.map((d) => d.slice(0, 7))))
).sort();
