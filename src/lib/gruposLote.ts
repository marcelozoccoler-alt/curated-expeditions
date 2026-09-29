import turquia2026Img from "@/assets/grupo-turquia-2026.jpg";
import turquiaJunhoImg from "@/assets/grupo-turquia-junho-2027.jpg";
import japaoImg from "@/assets/grupo-japao-maio-2027.jpg";
import suicaImg from "@/assets/grupo-suica-norte-italia-2026.jpg";
import beneluxImg from "@/assets/grupo-benelux-2026.jpg";
import portugalImg from "@/assets/grupo-portugal-norte-sul-2026.jpg";
import coreiaImg from "@/assets/grupo-coreia-junho-2027.jpg";
import saltaImg from "@/assets/grupo-salta-carnaval-2027.jpg";
import greciaImg from "@/assets/grupo-grecia-2026.jpg";

export interface GrupoLote {
  slug: string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  h1: string;
  lead: string;
  seoTitle: string;
  desc: string;
  dates: string;
  short: string;
  tag: string;
  air: string;
  cur: "EUR" | "USD";
  sym: string;
  prices: [string, string][];
  tax: string;
  countries: string[];
  kw: string;
  flights: [string, string][];
  itin: [string, string, string[]][];
  hotels: { city: string; hotel: string }[];
  inc: string[];
  not: string[];
  faq: { q: string; a: string }[];
}

const baseNot = (tax: string, extra: string[] = []) => [
  `Taxas de embarque, aeroporto e combustível (${tax})`,
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Refeições indicadas como não inclusas no roteiro",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  ...extra,
];
const STD = [
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
];
const SEG3 = "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos";

/* ---------- Turquia (Istambul → Anatólia) ---------- */
const turqDays = (d: string[], extraIst: boolean): [string, string, string[]][] => {
  const L: [string, string[]][] = [
    ["São Paulo → Istambul", ["Apresentação em Guarulhos e voo TK 216 às 16h35", "Pernoite a bordo"]],
    ["Istambul", ["Chegada às 11h15, traslado ao hotel e hospedagem"]],
    ["Istambul", ["Muralhas de Constantinopla, bairro de Eyüp e Avenida Istiklal", "Hipódromo, Mesquita Azul e Santa Sofia · almoço incluído", "Grand Bazar"]],
    ["Istambul", ["Palácio Beylerbeyi e Colina Çamlıca", "Passeio de barco pelo Bósforo · almoço incluído", "Bazar das Especiarias"]],
  ];
  if (extraIst) L.push(["Istambul", ["Dia livre para jardins floridos, cafés e compras (refeições não inclusas)"]]);
  L.push(
    ["Istambul → Ancara", ["Viagem pela Anatólia e Mausoléu de Atatürk", "Jantar incluído"]],
    ["Ancara → Capadócia", ["Lago Salgado e caravançará da Rota da Seda", "Jantar incluído", "Opcional (não incluso): Jeep Safari"]],
    ["Capadócia", ["Vales de Göreme, igrejas rupestres e cidade subterrânea", "Jantar incluído", "Opcionais (não inclusos): voo de balão e noite turca"]],
    ["Capadócia → Pamukkale", ["Travessia pela Anatólia", "Jantar e hotel termal com piscinas"]],
    ["Pamukkale → Éfeso → Kusadasi", ["Terraços de travertino e Hierápolis", "Éfeso e Casa da Virgem Maria", "Jantar incluído"]],
    ["Kusadasi", ["Dia livre à beira do Mar Egeu (refeições não inclusas)"]],
    ["Kusadasi → Bursa → Istambul", ["Bursa, primeira capital otomana, e a Mesquita Verde", "Chegada a Istambul"]],
  );
  if (!extraIst) L.push(["Istambul", ["Dia livre para bairros, compras e o Festival das Tulipas (refeições não inclusas)"]]);
  L.push(["Istambul → São Paulo", ["Traslado ao aeroporto e voo TK 215 às 20h25", "Pernoite a bordo"]], ["São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]]);
  return L.map(([t, p], i) => [d[i], t, p]);
};
const turqHotels = [
  { city: "Istambul", hotel: "Nippon Taksim" },
  { city: "Ancara", hotel: "New Park Ankara" },
  { city: "Capadócia", hotel: "Perissia" },
  { city: "Pamukkale", hotel: "Colossae Thermal & Spa" },
  { city: "Kusadasi", hotel: "Tusan Beach Resort" },
];
const turqInc = [
  "Bilhete aéreo São Paulo / Istambul / São Paulo em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã e taxa de turismo",
  "Guia acompanhante desde o Brasil e guias locais em português ou espanhol",
  "Traslados de chegada e saída em Istambul e visitas conforme o roteiro",
  "2 almoços e 6 jantares (sem bebidas)",
  ...STD,
  SEG3,
];
const turqNot = baseNot("EUR 711", ["Gorjetas locais obrigatórias de US$ 50 por pessoa", "Voo de balão, Jeep Safari e noite turca na Capadócia", "Early check-in e late check-out"]);
const turqFaq = [
  { q: "O voo de balão na Capadócia está incluído?", a: "Não. É uma experiência opcional, contratada no destino conforme as condições de vento." },
  { q: "Preciso de visto para a Turquia?", a: "Não. Brasileiros precisam apenas de passaporte válido por 6 meses a partir da data de volta." },
];

/* ---------- Japão ---------- */
const japaoItin = (d: string[], kaiseki: boolean): [string, string, string[]][] => [
  [d[0], "São Paulo", ["Apresentação em Guarulhos por volta das 21h, balcão Emirates"]],
  [d[1], "São Paulo → Dubai", ["Voo EK 262 à 01h35 · chegada a Dubai às 23h"]],
  [d[2], "Dubai → Osaka", ["Chegada, recepção e traslado ao hotel"]],
  [d[3], "Osaka e Nara", ["Templo Todaiji, Parque dos cervos e Templo Kofukuji", "Castelo de Osaka (exterior), Mercado Kuromon e Dotonbori · almoço incluído"]],
  [d[4], "Osaka → Kyoto", ["Santuário Fushimi Inari e distrito de Gion · almoço incluído"]],
  [d[5], "Kyoto", ["Castelo Nijo, Pavilhão Dourado, Templo Tenryuji e bosque de bambu de Arashiyama · almoço incluído"]],
  [d[6], "Kyoto", kaiseki ? ["Experiência com quimonos tradicionais", "Kyoto sob a Lua cheia com jantar tradicional incluído"] : ["Experiência com quimonos tradicionais e tarde livre em Kyoto"]],
  [d[7], "Kyoto → Shirakawa-go → Takayama", ["Vila histórica de Shirakawa-go e House Kanda", "Distrito de Sanmachi Suji"]],
  [d[8], "Takayama → Lago Kawaguchi → Hakone", ["Mercado matinal de Takayama", "Parque Arakurayama Sengen e Oshino Hakkai com vista do Fuji", "Hospedagem em ryokan com jantar incluído"]],
  [d[9], "Hakone → Tóquio", ["Minicruzeiro pelo Lago Ashi e Santuário de Hakone", "Teleférico sobre o vale vulcânico de Owakudani"]],
  [d[10], "Tóquio", ["Templo Senso-ji, Rua Nakamise e Santuário Meiji Jingu", "Cruzamento de Shibuya, Harajuku e Omotesando"]],
  [d[11], "Tóquio", ["Dia livre para bairros e compras (refeições não inclusas)"]],
  [d[12], "Tóquio → Dubai", ["Traslado ao aeroporto e voo Emirates (horário a ser informado)"]],
  [d[13], "Dubai → São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
];
const japaoHotels = [
  { city: "Osaka", hotel: "Monterey Grasmere Osaka" },
  { city: "Kyoto", hotel: "Century Kyoto" },
  { city: "Takayama", hotel: "Amanek Hida Takayama" },
  { city: "Hakone", hotel: "Nanpuso" },
  { city: "Tóquio", hotel: "Tokyo Dome Hotel" },
];
const japaoInc = (refeicoes: string) => [
  "Bilhete aéreo São Paulo / Osaka · Tóquio / São Paulo pela Emirates em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria e ryokan com café da manhã",
  "Guia acompanhante desde São Paulo e guias locais em espanhol",
  "Traslados de chegada em Osaka e saída em Tóquio",
  "Visitas e entradas conforme o roteiro",
  refeicoes,
  ...STD,
  "Seguro cancelamento de US$ 5.000 para viajantes até 85 anos",
];
const japaoFaq = [
  { q: "Os quartos têm cama de casal?", a: "Camas de casal não são comuns no Japão; a hospedagem não garante esse tipo de acomodação, mas sempre buscamos atender ao pedido." },
  { q: "Preciso de visto para o Japão?", a: "Brasileiros com passaporte válido por 6 meses a partir da volta estão isentos de visto para turismo de curta duração." },
];

/* ---------- Suíça & Norte da Itália ---------- */
const suicaItin = (d: string[]): [string, string, string[]][] => [
  [d[0], "São Paulo → Lisboa", ["Apresentação em Guarulhos e voo TP 82 às 15h30"]],
  [d[1], "Lisboa → Zurique", ["Conexão para Zurique · traslado ao hotel"]],
  [d[2], "Zurique", ["Visita panorâmica de Zurique e fábrica da Lindt"]],
  [d[3], "Zurique → Lucerna", ["Visita de Lucerna, Ponte da Capela e lago"]],
  [d[4], "Lucerna → Engelberg → Interlaken", ["Monte Titlis e suas geleiras", "Jantar suíço incluído em Interlaken"]],
  [d[5], "Interlaken e Grindelwald", ["Vilarejo alpino de Grindelwald"]],
  [d[6], "Interlaken → Andermatt → St. Moritz", ["Glacier Express (2ª classe) com refeição a bordo incluída"]],
  [d[7], "St. Moritz → Como → Gênova", ["Lago de Como com almoço incluído", "Jantar incluído em Gênova"]],
  [d[8], "Santa Margherita, Rapallo e Portofino", ["Riviera da Ligúria"]],
  [d[9], "Cinque Terre", ["Vilarejos coloridos de Cinque Terre"]],
  [d[10], "Gênova → Milão", ["Vinícola em Gavi-Piemonte", "Galeria Vittorio Emanuele, Scala e Duomo"]],
  [d[11], "Milão → Lisboa → São Paulo", ["Traslado ao aeroporto de Malpensa e voos TAP (horários a serem informados)"]],
  [d[12], "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
];
const suicaInc = [
  "Bilhete aéreo São Paulo / Lisboa / Zurique · Milão / Lisboa / São Paulo pela TAP em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil e guias locais em português ou espanhol",
  "Traslados de chegada em Zurique e saída em Milão",
  "Visitas e entradas conforme o roteiro, incluindo Lindt, Monte Titlis e vinícola em Gavi",
  "Glacier Express em 2ª classe",
  "1 jantar em Interlaken, 1 refeição no Glacier Express, 1 almoço em Como e 1 jantar em Gênova",
  ...STD,
  SEG3,
];
const suicaFaq = [{ q: "O Glacier Express está incluído?", a: "Sim, em 2ª classe (turística), com uma refeição a bordo — que pode ser ajustada para almoço por questões operacionais." }];
const suicaKw = "Suíça 2027, Glacier Express em grupo, Suíça e Itália com guia brasileiro, Cinque Terre, Lago de Como";

export const GRUPOS_LOTE: GrupoLote[] = [
  {
    slug: "turquia-abril-2027", img: turquia2026Img, alt: "Mesquitas de Istambul vistas do Bósforo",
    title: "Turquia na primavera · Festival das Tulipas", subtitle: "Istambul · Ancara · Capadócia · Pamukkale · Éfeso · Kusadasi · Bursa",
    h1: "Turquia na primavera: Istambul em flor e Capadócia", lead: "14 dias no Festival das Tulipas: Istambul, Ancara, Capadócia, Pamukkale, Éfeso, Kusadasi e Bursa — com guia desde o Brasil.",
    seoTitle: "Turquia Abril 2027 · Festival das Tulipas com Guia | Create Travel",
    desc: "Istambul coberta de tulipas, Bósforo, vales da Capadócia, Pamukkale e Éfeso. Voos Turkish Airlines e guia desde o Brasil.",
    dates: "07 a 20 de abril de 2027", short: "07/04 a 20/04/2027", tag: "07 a 20/04/2027 · 14 dias · Tulipas", air: "Turkish Airlines",
    cur: "EUR", sym: "€", prices: [["3.958", "94"], ["3.977", "95"], ["4.898", "124"]], tax: "EUR 711", countries: ["Turquia"],
    kw: "Turquia abril 2027, Festival das Tulipas Istambul, Capadócia com guia brasileiro, Pamukkale, Éfeso",
    flights: [["São Paulo (GRU) → Istambul (IST)", "07/04 · TK 216 às 16h35"], ["Istambul (IST) → São Paulo (GRU)", "19/04 · TK 215 às 20h25, chegada em 20/04"]],
    itin: turqDays(["07/04 (qua)", "08/04 (qui)", "09/04 (sex)", "10/04 (sáb)", "11/04 (dom)", "12/04 (seg)", "13/04 (ter)", "14/04 (qua)", "15/04 (qui)", "16/04 (sex)", "17/04 (sáb)", "18/04 (dom)", "19/04 (seg)", "20/04 (ter)"], false),
    hotels: turqHotels, inc: turqInc, not: turqNot, faq: turqFaq,
  },
  {
    slug: "turquia-20-abril-2027", img: turquiaJunhoImg, alt: "Vales da Capadócia com balões ao amanhecer",
    title: "Turquia na primavera · saída 20/04", subtitle: "Istambul · Ancara · Capadócia · Pamukkale · Éfeso · Kusadasi · Bursa",
    h1: "Turquia: Istambul, Capadócia, Pamukkale e Éfeso", lead: "14 dias com quatro noites em Istambul na primavera, Capadócia, Pamukkale, Éfeso e o Mar Egeu — com guia desde o Brasil.",
    seoTitle: "Turquia Abril 2027 com Guia desde o Brasil | Create Travel",
    desc: "Quatro noites em Istambul, vales da Capadócia, terraços de Pamukkale, Éfeso e Kusadasi. Voos Turkish Airlines e guia desde o Brasil.",
    dates: "20 de abril a 03 de maio de 2027", short: "20/04 a 03/05/2027", tag: "20/04 a 03/05/2027 · 14 dias", air: "Turkish Airlines",
    cur: "EUR", sym: "€", prices: [["3.978", "97"], ["3.995", "98"], ["4.977", "129"]], tax: "EUR 711", countries: ["Turquia"],
    kw: "Turquia abril 2027, viagem em grupo Turquia, Capadócia com guia brasileiro, Pamukkale, Éfeso",
    flights: [["São Paulo (GRU) → Istambul (IST)", "20/04 · TK 216 às 16h35"], ["Istambul (IST) → São Paulo (GRU)", "02/05 · TK 215 às 20h25, chegada em 03/05"]],
    itin: turqDays(["20/04 (ter)", "21/04 (qua)", "22/04 (qui)", "23/04 (sex)", "24/04 (sáb)", "25/04 (dom)", "26/04 (seg)", "27/04 (ter)", "28/04 (qua)", "29/04 (qui)", "30/04 (sex)", "01/05 (sáb)", "02/05 (dom)", "03/05 (seg)"], true),
    hotels: turqHotels, inc: turqInc, not: turqNot, faq: turqFaq,
  },
  {
    slug: "benelux-abril-2027", img: beneluxImg, alt: "Canais e casas históricas nos Países Baixos",
    title: "Benelux na primavera · Keukenhof", subtitle: "Amsterdã · Keukenhof · Haia · Kinderdijk · Antuérpia · Bruges · Gante · Bruxelas · Luxemburgo",
    h1: "Países Baixos, Bélgica e Luxemburgo na época das tulipas", lead: "11 dias com Keukenhof em flor, moinhos de Kinderdijk, Amsterdã, Haia, Antuérpia, Bruges, Gante, Bruxelas e Luxemburgo — com guia desde o Brasil.",
    seoTitle: "Holanda, Bélgica e Luxemburgo Abril 2027 · Keukenhof | Create Travel",
    desc: "Parque de tulipas Keukenhof, moinhos de Kinderdijk, Bruges medieval e Luxemburgo. Voos KLM e guia desde o Brasil.",
    dates: "06 a 16 de abril de 2027", short: "06/04 a 16/04/2027", tag: "06 a 16/04/2027 · 11 dias · Tulipas", air: "KLM",
    cur: "EUR", sym: "€", prices: [["5.378", "136"], ["5.398", "137"], ["6.843", "182"]], tax: "EUR 187", countries: ["Países Baixos", "Bélgica", "Luxemburgo"],
    kw: "Keukenhof 2027 em grupo, Holanda e Bélgica com guia brasileiro, Bruges, Luxemburgo, tulipas",
    flights: [["São Paulo (GRU) → Amsterdã (AMS)", "06/04 · KL 792, chegada em 07/04 às 14h25"], ["Bruxelas → Amsterdã → São Paulo (GRU)", "16/04 · KL 1702 às 08h00 e KL 1791 às 13h00"]],
    itin: [
      ["06/04 (ter)", "São Paulo → Amsterdã", ["Apresentação em Guarulhos e voo KL 792"]],
      ["07/04 (qua)", "Amsterdã", ["Chegada às 14h25 e traslado ao hotel"]],
      ["08/04 (qui)", "Amsterdã", ["Visita guiada pelos canais e centro histórico"]],
      ["09/04 (sex)", "Amsterdã → Keukenhof → Haia", ["Parque de tulipas Keukenhof (entrada incluída)", "Chegada a Haia"]],
      ["10/04 (sáb)", "Kinderdijk e Roterdã", ["Moinhos de Kinderdijk (entrada incluída)", "Roterdã moderna (almoço não incluso)"]],
      ["11/04 (dom)", "Haia → Antuérpia → Bruges", ["Cervejaria trapista (visita incluída)", "Antuérpia: Praça Maior e Catedral"]],
      ["12/04 (seg)", "Bruges", ["Visita guiada à Bruges medieval"]],
      ["13/04 (ter)", "Bruges → Gante → Bruxelas", ["Gante histórica (almoço não incluso)", "Chegada a Bruxelas"]],
      ["14/04 (qua)", "Bruxelas", ["Grand-Place, Manneken Pis e Atomium"]],
      ["15/04 (qui)", "Luxemburgo", ["Excursão ao Grão-Ducado de Luxemburgo e retorno a Bruxelas"]],
      ["16/04 (sex)", "Bruxelas → Amsterdã → São Paulo", ["Voos KL 1702 às 08h00 e KL 1791 às 13h00 · chegada no mesmo dia"]],
    ],
    hotels: [
      { city: "Amsterdã", hotel: "Holiday Inn The Niu Fender Amsterdam" },
      { city: "Haia", hotel: "Hilton The Hague" },
      { city: "Bruges", hotel: "Le Bois de Bruges" },
      { city: "Bruxelas", hotel: "Novotel Brussels City Centre" },
    ],
    inc: [
      "Bilhete aéreo São Paulo / Amsterdã · Bruxelas / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil e guias locais em português ou espanhol",
      "Traslados de chegada em Amsterdã e saída em Bruxelas",
      "Entradas no Keukenhof, cervejaria trapista e moinhos de Kinderdijk",
      ...STD,
      SEG3,
    ],
    not: baseNot("EUR 187"),
    faq: [{ q: "O Keukenhof estará florido?", a: "A saída foi programada para o auge da temporada de tulipas, em abril. A floração depende do clima de cada ano." }],
  },
  {
    slug: "portugal-espanha-abril-2027", img: portugalImg, alt: "Casario histórico de Portugal à beira do rio",
    title: "Portugal & Espanha · Lisboa a Madri", subtitle: "Lisboa · Sintra · Fátima · Coimbra · Porto · Salamanca · Ávila · Segóvia · Toledo · Madri",
    h1: "Portugal e Espanha: de Lisboa a Madri", lead: "14 dias por Lisboa, Sintra, Cascais, Óbidos, Fátima, Coimbra, Porto, Salamanca, Ávila, Segóvia, Toledo e Madri — com coordenador desde o Brasil.",
    seoTitle: "Portugal e Espanha Abril 2027 com Guia desde o Brasil | Create Travel",
    desc: "Palácio da Pena, Fátima, vinho do Porto, Salamanca, Alcázar de Segóvia e Toledo. Voos TAP e guia desde o Brasil.",
    dates: "19 de abril a 02 de maio de 2027", short: "19/04 a 02/05/2027", tag: "19/04 a 02/05/2027 · 14 dias", air: "TAP Air Portugal",
    cur: "EUR", sym: "€", prices: [["5.177", "134"], ["5.198", "135"], ["6.383", "172"]], tax: "EUR 197", countries: ["Portugal", "Espanha"],
    kw: "Portugal e Espanha 2027 em grupo, Península Ibérica com guia brasileiro, Fátima, Porto, Toledo, Segóvia",
    flights: [["São Paulo (GRU) → Lisboa (LIS)", "19/04 · TP 88, chegada em 20/04 às 10h35"], ["Madri → Lisboa → São Paulo (GRU)", "01/05 · TP 1019 e TP 87 às 23h30, chegada em 02/05"]],
    itin: [
      ["19/04 (seg)", "São Paulo → Lisboa", ["Apresentação em Guarulhos e voo TP 88"]],
      ["20/04 (ter)", "Lisboa", ["Chegada às 10h35 e traslado ao hotel"]],
      ["21/04 (qua)", "Lisboa", ["Meio dia de visita com degustação de pastéis de Belém"]],
      ["22/04 (qui)", "Estoril, Sintra e Cascais", ["Palácio da Pena (entrada incluída) · almoço incluído"]],
      ["23/04 (sex)", "Lisboa → Óbidos → Fátima", ["Vila medieval de Óbidos e Santuário de Fátima · jantar incluído"]],
      ["24/04 (sáb)", "Fátima → Coimbra → Porto", ["Coimbra universitária · almoço incluído"]],
      ["25/04 (dom)", "Porto", ["Meio dia no Porto com degustação de vinho do Porto"]],
      ["26/04 (seg)", "Porto → Salamanca", ["Travessia para a Espanha e Salamanca"]],
      ["27/04 (ter)", "Salamanca → Ávila → Segóvia", ["Catedral de Ávila e Convento de Santa Teresa"]],
      ["28/04 (qua)", "Segóvia", ["Aqueduto romano e Alcázar (entrada incluída) · almoço incluído"]],
      ["29/04 (qui)", "Segóvia → Toledo → Madri", ["Toledo, a cidade das três culturas"]],
      ["30/04 (sex)", "Madri", ["Dia livre para museus, tapas e compras (refeições não inclusas)"]],
      ["01/05 (sáb)", "Madri → Lisboa → São Paulo", ["Voos TP 1019 e TP 87 às 23h30"]],
      ["02/05 (dom)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    hotels: [
      { city: "Lisboa", hotel: "Turim Europa" },
      { city: "Fátima", hotel: "Hotel Santa Maria Fátima" },
      { city: "Porto", hotel: "Mercure Porto Centro Santa Catarina" },
      { city: "Salamanca", hotel: "Abba Fonseca" },
      { city: "Segóvia", hotel: "Eurostars Plaza Acueducto" },
      { city: "Madri", hotel: "Meliá Madrid Princesa" },
    ],
    inc: [
      "Bilhete aéreo São Paulo / Lisboa · Madri / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Coordenador brasileiro desde o embarque e guias locais em português ou espanhol",
      "Traslados de chegada em Lisboa e saída em Madri",
      "Entradas: Pastéis de Belém, Palácio da Pena, vinho do Porto, Catedral de Ávila, Convento de Santa Teresa e Alcázar de Segóvia",
      "3 almoços e 1 jantar (sem bebidas)",
      "Carregadores de mala nos hotéis (1 peça por pessoa)",
      "Cartão de assistência médica internacional de US$ 75.000",
      SEG3,
    ],
    not: baseNot("EUR 197", ["Tag de rastreio de bagagem", "Acesso à Sala VIP em Guarulhos"]),
    faq: [],
  },
  {
    slug: "japao-maio-2027", img: japaoImg, alt: "Pagode de Kyoto entre bordos verdes sob a lua cheia",
    title: "Japão · entre tradições e a Lua cheia", subtitle: "Osaka · Nara · Kyoto · Shirakawa-go · Takayama · Fuji · Hakone · Tóquio",
    h1: "Japão: entre tradições e a Lua cheia", lead: "14 dias por Osaka, Nara, Kyoto, Shirakawa-go, Takayama, Monte Fuji, Hakone e Tóquio — com quimono em Kyoto, ryokan e guia desde o Brasil.",
    seoTitle: "Japão Maio 2027 com Guia desde o Brasil · Lua cheia | Create Travel",
    desc: "Kyoto sob a Lua cheia, cervos de Nara, vila de Shirakawa-go, ryokan em Hakone e Tóquio. Voos Emirates e guia desde o Brasil.",
    dates: "14 a 27 de maio de 2027", short: "14/05 a 27/05/2027", tag: "14 a 27/05/2027 · 14 dias · Lua cheia", air: "Emirates",
    cur: "USD", sym: "US$", prices: [["7.278", "196"], ["7.298", "197"], ["8.697", "241"]], tax: "USD 716", countries: ["Japão"],
    kw: "Japão maio 2027, viagem em grupo Japão, Japão com guia brasileiro, Kyoto, Takayama, Hakone, ryokan",
    flights: [["São Paulo (GRU) → Dubai → Osaka (KIX)", "15/05 · EK 262 à 01h35, chegada a Osaka em 16/05"], ["Tóquio → Dubai → São Paulo (GRU)", "26/05 · Emirates (voos a serem informados), chegada em 27/05"]],
    itin: japaoItin(["14/05 (sex)", "15/05 (sáb)", "16/05 (dom)", "17/05 (seg)", "18/05 (ter)", "19/05 (qua)", "20/05 (qui)", "21/05 (sex)", "22/05 (sáb)", "23/05 (dom)", "24/05 (seg)", "25/05 (ter)", "26/05 (qua)", "27/05 (qui)"], true),
    hotels: japaoHotels, inc: japaoInc("6 almoços e 2 jantares (sem bebidas)"), not: baseNot("USD 716"), faq: japaoFaq,
  },
  {
    slug: "japao-27-maio-2027", img: japaoImg, alt: "Pagode de Kyoto entre bordos verdes",
    title: "Japão · saída 27/05", subtitle: "Osaka · Nara · Kyoto · Shirakawa-go · Takayama · Fuji · Hakone · Tóquio",
    h1: "Japão: Kyoto, Alpes Japoneses, Monte Fuji e Tóquio", lead: "14 dias por Osaka, Nara, Kyoto, Shirakawa-go, Takayama, Monte Fuji, Hakone e Tóquio — com quimono em Kyoto, ryokan e guia desde o Brasil.",
    seoTitle: "Japão Maio/Junho 2027 com Guia desde o Brasil | Create Travel",
    desc: "Templos de Kyoto, cervos de Nara, Shirakawa-go, ryokan em Hakone com vista do Fuji e Tóquio. Voos Emirates e guia desde o Brasil.",
    dates: "27 de maio a 09 de junho de 2027", short: "27/05 a 09/06/2027", tag: "27/05 a 09/06/2027 · 14 dias", air: "Emirates",
    cur: "USD", sym: "US$", prices: [["7.365", "199"], ["7.398", "200"], ["8.750", "242"]], tax: "USD 716", countries: ["Japão"],
    kw: "Japão junho 2027, viagem em grupo Japão, Japão com guia brasileiro, Kyoto, Takayama, Hakone, ryokan",
    flights: [["São Paulo (GRU) → Dubai → Osaka (KIX)", "28/05 · EK 262 à 01h35, chegada a Osaka em 29/05"], ["Tóquio → Dubai → São Paulo (GRU)", "08/06 · Emirates (voos a serem informados), chegada em 09/06"]],
    itin: japaoItin(["27/05 (qui)", "28/05 (sex)", "29/05 (sáb)", "30/05 (dom)", "31/05 (seg)", "01/06 (ter)", "02/06 (qua)", "03/06 (qui)", "04/06 (sex)", "05/06 (sáb)", "06/06 (dom)", "07/06 (seg)", "08/06 (ter)", "09/06 (qua)"], false),
    hotels: japaoHotels, inc: japaoInc("6 almoços e 1 jantar (sem bebidas)"), not: baseNot("USD 716"), faq: japaoFaq,
  },
  {
    slug: "suica-norte-italia-maio-2027", img: suicaImg, alt: "Alpes suíços com lagos e vilarejos",
    title: "Suíça & Norte da Itália · Glacier Express", subtitle: "Zurique · Lucerna · Titlis · Interlaken · St. Moritz · Como · Portofino · Cinque Terre · Milão",
    h1: "Suíça e Norte da Itália com Glacier Express", lead: "13 dias por Zurique, Lucerna, Monte Titlis, Interlaken, Glacier Express, St. Moritz, Lago de Como, Portofino e Cinque Terre — com guia desde o Brasil.",
    seoTitle: "Suíça e Norte da Itália Maio 2027 · Glacier Express | Create Travel",
    desc: "Monte Titlis, Glacier Express, St. Moritz, Lago de Como, Portofino e Cinque Terre. Voos TAP e guia desde o Brasil.",
    dates: "26 de maio a 07 de junho de 2027", short: "26/05 a 07/06/2027", tag: "26/05 a 07/06/2027 · 13 dias", air: "TAP Air Portugal",
    cur: "EUR", sym: "€", prices: [["6.530", "180"], ["6.570", "181"], ["8.060", "228"]], tax: "EUR 191", countries: ["Suíça", "Itália"], kw: suicaKw,
    flights: [["São Paulo (GRU) → Lisboa → Zurique", "26/05 · TP 82 às 15h30 e TP 932 às 13h25, chegada em 27/05 às 17h15"], ["Milão → Lisboa → São Paulo (GRU)", "06/06 · TAP (voos a serem informados), chegada em 07/06"]],
    itin: suicaItin(["26/05 (qua)", "27/05 (qui)", "28/05 (sex)", "29/05 (sáb)", "30/05 (dom)", "31/05 (seg)", "01/06 (ter)", "02/06 (qua)", "03/06 (qui)", "04/06 (sex)", "05/06 (sáb)", "06/06 (dom)", "07/06 (seg)"]),
    hotels: [
      { city: "Zurique", hotel: "Crowne Plaza Zurich" },
      { city: "Lucerna", hotel: "Astoria Luzern" },
      { city: "Interlaken", hotel: "Metropole Interlaken" },
      { city: "St. Moritz", hotel: "Reine Victoria by Laudinella" },
      { city: "Gênova", hotel: "NH Genova Centro" },
      { city: "Milão", hotel: "Starhotels Ritz Milano" },
    ],
    inc: suicaInc, not: baseNot("EUR 191"), faq: suicaFaq,
  },
  {
    slug: "suica-norte-italia-junho-2027", img: suicaImg, alt: "Alpes suíços com lagos e vilarejos no verão",
    title: "Suíça & Norte da Itália · saída 02/06", subtitle: "Zurique · Lucerna · Titlis · Interlaken · St. Moritz · Como · Portofino · Cinque Terre · Milão",
    h1: "Suíça e Norte da Itália no início do verão", lead: "13 dias por Zurique, Lucerna, Monte Titlis, Interlaken, Glacier Express, St. Moritz, Lago de Como, Portofino e Cinque Terre — com guia desde o Brasil.",
    seoTitle: "Suíça e Norte da Itália Junho 2027 · Glacier Express | Create Travel",
    desc: "Monte Titlis, Glacier Express, St. Moritz, Lago de Como, Portofino e Cinque Terre no início do verão. Voos TAP e guia desde o Brasil.",
    dates: "02 a 14 de junho de 2027", short: "02/06 a 14/06/2027", tag: "02 a 14/06/2027 · 13 dias", air: "TAP Air Portugal",
    cur: "EUR", sym: "€", prices: [["6.530", "180"], ["6.570", "181"], ["8.060", "228"]], tax: "EUR 191", countries: ["Suíça", "Itália"], kw: suicaKw,
    flights: [["São Paulo (GRU) → Lisboa → Zurique", "02/06 · TP 82 às 15h30, conexão para Zurique em 03/06 (voo de conexão a ser informado)"], ["Milão → Lisboa → São Paulo (GRU)", "13/06 · TAP (voos a serem informados), chegada em 14/06"]],
    itin: suicaItin(["02/06 (qua)", "03/06 (qui)", "04/06 (sex)", "05/06 (sáb)", "06/06 (dom)", "07/06 (seg)", "08/06 (ter)", "09/06 (qua)", "10/06 (qui)", "11/06 (sex)", "12/06 (sáb)", "13/06 (dom)", "14/06 (seg)"]),
    hotels: [
      { city: "Zurique", hotel: "Crowne Plaza Zurich" },
      { city: "Lucerna", hotel: "Astoria Luzern" },
      { city: "Interlaken", hotel: "Metropole Interlaken" },
      { city: "St. Moritz", hotel: "San Gian St. Moritz" },
      { city: "Gênova", hotel: "Bristol Palace Genova" },
      { city: "Milão", hotel: "Starhotels Ritz Milano" },
    ],
    inc: suicaInc, not: baseNot("EUR 191"), faq: suicaFaq,
  },
  {
    slug: "coreia-do-sul-maio-2027", img: coreiaImg, alt: "Palácio Gyeongbokgung em Seul com montanhas ao fundo",
    title: "Coreia do Sul completa", subtitle: "Seul · Seoraksan · Sokcho · Nami · DMZ · Gyeongju · Busan",
    h1: "Coreia do Sul completa: Seul, Seoraksan, Gyeongju e Busan", lead: "13 dias por Seul, Parque Nacional Seoraksan, Nami Island, DMZ, Gyeongju e Busan — com guia desde o Brasil.",
    seoTitle: "Coreia do Sul 2027 com Guia desde o Brasil | Create Travel",
    desc: "Palácios de Seul, Parque Seoraksan, Nami Island, DMZ, a Gyeongju milenar e a costa de Busan. Voos Ethiopian e guia desde o Brasil.",
    dates: "27 de maio a 08 de junho de 2027", short: "27/05 a 08/06/2027", tag: "27/05 a 08/06/2027 · 13 dias", air: "Ethiopian Airlines",
    cur: "USD", sym: "US$", prices: [["4.980", "132"], ["4.991", "133"], ["5.905", "162"]], tax: "USD 795", countries: ["Coreia do Sul"],
    kw: "Coreia do Sul 2027 em grupo, Seul com guia brasileiro, DMZ, Busan, Gyeongju, Seoraksan",
    flights: [["São Paulo (GRU) → Adis Abeba → Seul (ICN)", "28/05 · Ethiopian, conexão ET 672 às 22h35, chegada em 29/05"], ["Seul (ICN) → Adis Abeba → São Paulo (GRU)", "08/06 · ET 673 às 00h10 e ET 506 às 09h50, chegada às 16h20"]],
    itin: [
      ["27/05 (qui)", "São Paulo", ["Apresentação em Guarulhos e encontro com o guia"]],
      ["28/05 (sex)", "São Paulo → Adis Abeba", ["Voo Ethiopian e conexão ET 672 às 22h35"]],
      ["29/05 (sáb)", "Adis Abeba → Seul", ["Chegada, traslado e hospedagem"]],
      ["30/05 (dom)", "Seul → Gangwon → Sokcho", ["Parque Nacional Seoraksan, Templo Sinheungsa e Fortaleza Gwongeumseong · almoço incluído"]],
      ["31/05 (seg)", "Sokcho → Gapyeong → Seul", ["Nami Island e Gangchon Rail Park · almoço incluído"]],
      ["01/06 (ter)", "Seul", ["Lotte World Tower (Seoul Sky), Lago Seokchon, COEX e Gangnam · almoço incluído"]],
      ["02/06 (qua)", "DMZ", ["Zona desmilitarizada na fronteira com a Coreia do Norte · almoço incluído"]],
      ["03/06 (qui)", "Seul", ["Troca da Guarda no Palácio Gyeongbok, Cheonggye Stream, Museu Nacional e N Seoul Tower · almoço incluído"]],
      ["04/06 (sex)", "Seul → Gyeongju", ["Museu Nacional, Túmulos de Daereungwon e Cheomseongdae · almoço incluído"]],
      ["05/06 (sáb)", "Gyeongju → Busan", ["Gruta Seokguram, Templo Haedong Yonggungsa e praia de Haeundae · almoço incluído"]],
      ["06/06 (dom)", "Busan → Seul", ["Aldeia Cultural Gamcheon e Mercado Jagalchi · almoço incluído", "Retorno a Seul"]],
      ["07/06 (seg)", "Seul", ["Dia livre para compras e cafés (refeições não inclusas)"]],
      ["08/06 (ter)", "Seul → Adis Abeba → São Paulo", ["Voos ET 673 às 00h10 e ET 506 às 09h50 · chegada às 16h20"]],
    ],
    hotels: [
      { city: "Seul", hotel: "Sotetsu Hotels The Splaisir Seoul Myeongdong" },
      { city: "Sokcho", hotel: "Ramada by Wyndham Gangwon" },
      { city: "Gyeongju", hotel: "Kolon Hotel Gyeongju" },
      { city: "Busan", hotel: "Asti Hotel Busan" },
    ],
    inc: [
      "Bilhete aéreo São Paulo / Adis Abeba / Seul / Adis Abeba / São Paulo em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil e guias locais em espanhol",
      "Traslados de chegada e saída em Seul",
      "Visitas e entradas conforme o roteiro, incluindo DMZ e Seoul Sky",
      "8 almoços (sem bebidas)",
      "Cartão de assistência médica internacional de US$ 75.000",
      SEG3,
    ],
    not: baseNot("USD 795"),
    faq: [{ q: "Preciso de visto para a Coreia do Sul?", a: "É necessário apresentar a autorização eletrônica K-ETA antes do embarque, além de passaporte válido por 6 meses a partir da volta." }],
  },
  {
    slug: "salta-jujuy-carnaval-2027", img: saltaImg, alt: "Cerro de los Siete Colores em Purmamarca, norte da Argentina",
    title: "Salta & Jujuy · Carnaval", subtitle: "Salta · Cachi · Molinos · Quebrada de las Flechas · Cafayate · Purmamarca · Humahuaca",
    h1: "Norte argentino: Salta, Cafayate e Purmamarca no Carnaval", lead: "9 dias entre vinhedos de altitude, cânions coloridos e vilarejos andinos — com voos GOL e guia desde o Brasil.",
    seoTitle: "Salta e Jujuy Carnaval 2027 com Guia desde o Brasil | Create Travel",
    desc: "Cachi, Quebrada de las Flechas, vinhedos de Cafayate e o Cerro de los Siete Colores em Purmamarca. Voos GOL e guia desde o Brasil.",
    dates: "07 a 15 de fevereiro de 2027", short: "07/02 a 15/02/2027", tag: "07 a 15/02/2027 · 9 dias · Carnaval", air: "GOL",
    cur: "USD", sym: "US$", prices: [["2.978", "76"], ["2.998", "77"], ["3.698", "99"]], tax: "USD 178", countries: ["Argentina"],
    kw: "Salta 2027 em grupo, Carnaval norte argentino, Purmamarca, Cafayate, Jujuy com guia brasileiro",
    flights: [["São Paulo → Rio de Janeiro → Salta", "07/02 · GOL com conexão no Galeão"], ["Salta → Rio de Janeiro → São Paulo", "15/02 · GOL 7599 às 02h30 e GOL 1373 às 08h30"]],
    itin: [
      ["07/02 (dom)", "São Paulo → Rio → Salta", ["Apresentação em Guarulhos e voos GOL via Galeão", "Traslado ao hotel em Salta"]],
      ["08/02 (seg)", "Salta", ["Visita à Salta colonial: praças, igrejas e mirantes"]],
      ["09/02 (ter)", "Salta → Cachi → Molinos", ["Cuesta del Obispo e Parque Nacional Los Cardones", "Vilarejo de Cachi (almoço não incluso)"]],
      ["10/02 (qua)", "Molinos → Quebrada de las Flechas → Cafayate", ["Formações rochosas da Quebrada de las Flechas", "Chegada à região vinícola de Cafayate"]],
      ["11/02 (qui)", "Cafayate → Salta", ["Vinícola de altitude e Quebrada de las Conchas", "Retorno a Salta · noite livre"]],
      ["12/02 (sex)", "Salta → Purmamarca", ["Chegada a Purmamarca, aos pés do Cerro de los Siete Colores"]],
      ["13/02 (sáb)", "Quebrada de Humahuaca", ["Tilcara e Humahuaca, Patrimônio da UNESCO (almoço não incluso)"]],
      ["14/02 (dom)", "Purmamarca → Salta", ["Retorno a Salta com tempo livre (almoço não incluso)"]],
      ["15/02 (seg)", "Salta → Rio → São Paulo", ["Voos GOL 7599 às 02h30 e GOL 1373 às 08h30 · fim dos nossos serviços"]],
    ],
    hotels: [
      { city: "Salta", hotel: "Hotel Brizo Salta" },
      { city: "Molinos", hotel: "Hacienda de Molinos" },
      { city: "Cafayate", hotel: "Hotel Asturias Cafayate" },
      { city: "Purmamarca", hotel: "La Comarca Purmamarca" },
    ],
    inc: [
      "Bilhete aéreo São Paulo / Salta / São Paulo pela GOL em classe econômica, com 1 mala de 23 kg",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil e guias locais",
      "Traslados e visitas conforme o roteiro",
      "Cartão de assistência médica internacional de US$ 75.000",
      SEG3,
    ],
    not: baseNot("USD 178"),
    faq: [{ q: "Preciso de passaporte para a Argentina?", a: "Não. Brasileiros podem viajar com RG original em bom estado e emitido há menos de dez anos, ou passaporte válido." }],
  },
  {
    slug: "turquia-grecia-maio-2027", img: greciaImg, alt: "Casas brancas e cúpulas azuis nas ilhas gregas",
    title: "Turquia & Ilhas Gregas", subtitle: "Istambul · Ancara · Capadócia · Pamukkale · Éfeso · Samos · Mykonos · Santorini · Atenas",
    h1: "Turquia e Ilhas Gregas: da Capadócia a Santorini", lead: "18 dias entre Istambul, Capadócia, Pamukkale e Éfeso, seguindo de ferry por Samos, Mykonos e Santorini até Atenas — com guia desde o Brasil.",
    seoTitle: "Turquia e Grécia Maio 2027 com Guia desde o Brasil | Create Travel",
    desc: "Istambul, Capadócia, Pamukkale e Éfeso, depois Samos, Mykonos, Santorini e a Acrópole de Atenas. Voos Turkish Airlines e guia desde o Brasil.",
    dates: "20 de maio a 06 de junho de 2027", short: "20/05 a 06/06/2027", tag: "20/05 a 06/06/2027 · 18 dias", air: "Turkish Airlines",
    cur: "EUR", sym: "€", prices: [["5.914", "159"], ["5.955", "160"], ["7.141", "197"]], tax: "EUR 716", countries: ["Turquia", "Grécia"],
    kw: "Turquia e Grécia 2027 em grupo, Mykonos e Santorini com guia brasileiro, Capadócia, Atenas",
    flights: [["São Paulo (GRU) → Istambul (IST)", "20/05 · TK 216 às 16h35"], ["Atenas → Istambul → São Paulo (GRU)", "05/06 · Turkish, conexão TK 215 às 20h25, chegada em 06/06"]],
    itin: [
      ["20/05 (qui)", "São Paulo → Istambul", ["Apresentação em Guarulhos e voo TK 216 às 16h35"]],
      ["21/05 (sex)", "Istambul", ["Chegada, traslado ao hotel e hospedagem"]],
      ["22/05 (sáb)", "Istambul", ["Hipódromo, Mesquita Azul, Santa Sofia e Grand Bazar · almoço incluído"]],
      ["23/05 (dom)", "Istambul", ["Dia livre para passeios opcionais (não inclusos)"]],
      ["24/05 (seg)", "Istambul → Ancara", ["Passeio pelo Bósforo e Mausoléu de Atatürk · jantar incluído"]],
      ["25/05 (ter)", "Ancara → Capadócia", ["Lago Salgado e caravançará do século XIII · jantar incluído"]],
      ["26/05 (qua)", "Capadócia", ["Vales, igrejas rupestres e cidade subterrânea · jantar incluído", "Opcional (não incluso): voo de balão"]],
      ["27/05 (qui)", "Capadócia → Pamukkale", ["Travessia pela Anatólia · jantar incluído"]],
      ["28/05 (sex)", "Pamukkale → Éfeso → Kusadasi", ["Terraços de travertino, Hierápolis e Éfeso · jantar incluído"]],
      ["29/05 (sáb)", "Kusadasi → Samos", ["Ferry para a ilha grega de Samos · resto do dia livre"]],
      ["30/05 (dom)", "Samos → Mykonos", ["Ferry para Mykonos · resto do dia livre"]],
      ["31/05 (seg)", "Mykonos", ["Dia livre para praias e o vilarejo de Chora (refeições não inclusas)"]],
      ["01/06 (ter)", "Mykonos → Santorini", ["Ferry para Santorini · resto do dia livre"]],
      ["02/06 (qua)", "Santorini", ["Dia livre para Oia e o pôr do sol na caldeira (refeições não inclusas)"]],
      ["03/06 (qui)", "Santorini → Atenas", ["Voo para Atenas e traslado ao hotel"]],
      ["04/06 (sex)", "Atenas", ["Visita à Acrópole e ao seu museu"]],
      ["05/06 (sáb)", "Atenas → Istambul → São Paulo", ["Voo às 17h20 e conexão TK 215 às 20h25"]],
      ["06/06 (dom)", "São Paulo", ["Chegada a Guarulhos · fim dos nossos serviços"]],
    ],
    hotels: [
      { city: "Istambul", hotel: "The Green Park Taksim" },
      { city: "Capadócia", hotel: "Perissia" },
      { city: "Pamukkale", hotel: "Richmond Thermal Pamukkale" },
      { city: "Kusadasi", hotel: "Suhan Seaport Kusadasi" },
      { city: "Samos", hotel: "Hydrelle Samos" },
      { city: "Mykonos", hotel: "Aeolos Resort Mykonos" },
      { city: "Santorini", hotel: "Costa Grand Santorini" },
      { city: "Atenas", hotel: "Athenaeum Grand Athens" },
    ],
    inc: [
      "Bilhete aéreo São Paulo / Istambul · Atenas / São Paulo e voo Santorini–Atenas em classe econômica, com 1 mala de 23 kg",
      "Ferries Kusadasi–Samos–Mykonos–Santorini",
      "Hotéis de primeira categoria com café da manhã",
      "Guia acompanhante desde o Brasil e guias locais",
      "Traslados e visitas conforme o roteiro",
      "1 almoço e 5 jantares (sem bebidas)",
      ...STD,
      SEG3,
    ],
    not: baseNot("EUR 716", ["Voo de balão na Capadócia"]),
    faq: [{ q: "Como são os trechos entre as ilhas gregas?", a: "Os deslocamentos entre Kusadasi, Samos, Mykonos e Santorini são feitos em ferries incluídos, com traslados entre portos e hotéis." }],
  },
];
