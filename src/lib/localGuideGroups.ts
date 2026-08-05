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
    slug: "encantos-do-japao-em-portugues",
    code: "R641",
    title: "Encantos do Japão (guia em português)",
    subtitle:
      "Tóquio · Hakone · Nara · Quioto · Fushimi Inari · Arashiyama · Kanazawa · Shirakawago · Takayama · Gero (ryokan e onsen) · Osaka",
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
