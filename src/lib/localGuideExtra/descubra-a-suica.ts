import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const descubraASuica: LocalGuideGroup = {
  slug: "descubra-a-suica",
  code: "EETSUI",
  title: "Descubra a Suíça",
  subtitle: "Zurique · Lucerna · Berna · Gruyères · Genebra · Montreux · Zermatt · Chur",
  intro:
    "Nove dias entre lagos de água mais límpida que o vidro, vilas medievais de madeira entalhada e o branco absoluto do Matterhorn recortando o céu alpino. A Suíça se revela em trens panorâmicos, queijos de nome próprio e cidades onde a precisão é também uma forma de beleza — um roteiro para quem viaja devagar, prestando atenção aos detalhes.",
  highlights: [
    "Ponte da Capela e o centro medieval de Lucerna, às margens do Lago dos Quatro Cantões",
    "Teleférico giratório ao topo do Monte Titlis, a 3.020 metros de altitude",
    "Degustação de queijo gruyère na charmosa Gruyères",
    "Castelo de Chillon, à beira do Lago Léman, em Montreux",
    "Trem cremalheira ao Gornergrat, com vista privilegiada do Matterhorn",
    "Glacier Express, o lendário trem panorâmico entre Zermatt e Chur",
  ],
  category: "Premium",
  days: 9,
  nights: 8,
  priceEur: 3690,
  singleSupplementEur: 1200,
  priceNote:
    "Guia acompanhante em espanhol. Inclui 8 noites com café da manhã tipo buffet, bilhetes de trem Glacier Express em 2ª classe e entradas e experiências conforme o itinerário. Desconto para o terceiro passageiro em quarto triplo (consulte condições).",
  countries: ["Suíça"],
  area: "Europa",
  hotels: [
    { city: "Zurique", hotel: "Novotel City West" },
    { city: "Berna", hotel: "Swissotel Kursaal ou NH Bristol" },
    { city: "Genebra", hotel: "Crowne Plaza" },
    { city: "Zermatt", hotel: "Hotel Ambassador ou Hotel Christiania" },
  ],
  departures: [
    "2027-06-20",
    "2027-07-04",
    "2027-07-18",
    "2027-08-15",
    "2027-09-12",
    "2027-09-26",
    "2027-10-10",
  ],
  itinerary: [
    {
      day: 1,
      route: "ZURIQUE",
      text: "Chegada a Zurique e traslado ao hotel para acomodação. O guia estará disponível no hotel a partir das 19h00.",
    },
    {
      day: 2,
      route: "ZURIQUE",
      text: "Pela manhã, visita da cidade, com destaque para o centro histórico, a Catedral, a antiga Prefeitura e a Porta de São Martinho. O percurso segue pela Bahnhofstrasse, coração comercial e financeiro da cidade, pela igreja de Fraumünster, pelo Limmatquai e pelo bairro da Universidade. Em seguida, uma incursão pelo universo do chocolate na Casa do Chocolate Lindt, com sua história e uma degustação.",
    },
    {
      day: 3,
      route: "ZURIQUE / LUCERNA / BERNA",
      text: "Saída em direção a Lucerna, cidade medieval às margens do Lago dos Quatro Cantões, onde se destaca a Ponte da Capela, construída em madeira em 1333 e decorada com pinturas. Seguimos até Engelberg, de onde se sobe pelo primeiro teleférico giratório do mundo até o topo do Monte Titlis, a 3.020 metros, com vistas impressionantes dos Alpes. À tarde, continuação até Berna, capital suíça e uma das cidades medievais mais bem conservadas da Europa. Hospedagem.",
    },
    {
      day: 4,
      route: "BERNA / GRUYÈRES / GENEBRA",
      text: "Visita panorâmica de Berna, com destaque para a Torre do Relógio e a Catedral de São Vicente, do século XV. Na sequência, saída em direção à região de Gruyères, pequena cidade cheia de charme conhecida pela produção do queijo de mesmo nome, um dos mais apreciados da Suíça, com passeio pela localidade. Continuação até Genebra. Hospedagem.",
    },
    {
      day: 5,
      route: "GENEBRA",
      text: "Passeio pela cidade, com a Promenade du Lac e o Jardim Inglês, onde está o famoso Relógio Floral. Genebra é berço de figuras históricas como Calvino, Rousseau, Voltaire e Henri Dunant, fundador da Cruz Vermelha, e tem no Jet d'Eau, jato de água de 140 metros de altura, seu símbolo maior. Passeio pelo centro histórico com a Catedral de São Pedro e visita ao Parc des Bastions, com o Monumento aos Reformadores. Tarde livre e hospedagem.",
    },
    {
      day: 6,
      route: "GENEBRA / MONTREUX / ZERMATT",
      text: "Saída em direção a Montreux, onde lago, montanhas e vinhedos compõem uma paisagem única. Breve visita e entrada ao Castelo de Chillon, às margens do Lago Léman e antiga residência dos condes de Saboia por quase quatro séculos. Continuação até Zermatt, pitoresco povoado alpino livre de tráfego, aos pés do Matterhorn.",
    },
    {
      day: 7,
      route: "ZERMATT",
      text: "Subida em trem cremalheira ao Gornergrat, mirante a 3.089 metros de altitude, de onde se avista uma das melhores vistas do Matterhorn e dos Alpes, com panoramas de até 29 picos acima de 4.000 metros. Retorno de trem a Zermatt e hospedagem.",
    },
    {
      day: 8,
      route: "ZERMATT / GLACIER EXPRESS / ZURIQUE",
      text: "Embarque no Glacier Express, um dos trens panorâmicos mais famosos da Suíça, conhecido como o \"trem expresso mais lento do mundo\". O trajeto entre Zermatt e Chur atravessa vales, montanhas e pontes espetaculares, incluindo a passagem pelo porto de Oberalp, a 2.033 metros de altitude. Chegada a Chur e continuação de ônibus até Zurique. Hospedagem.",
    },
    {
      day: 9,
      route: "ZURIQUE",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
