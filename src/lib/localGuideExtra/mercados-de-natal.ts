import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const mercadosDeNatal: LocalGuideGroup = {
  slug: "mercados-de-natal",
  code: "MERC",
  title: "Mercados de Natal",
  subtitle: "Viena · Salzburgo · Innsbruck · Munique",
  intro:
    "Há um perfume de canela, vinho quente e amêndoas torradas que só existe entre novembro e dezembro nas praças centro-europeias, e é atrás dele que este roteiro segue, de Viena a Munique. Barracas de madeira iluminadas, catedrais góticas emolduradas por neve e a lenda de 'Noite Feliz' nascida em uma pequena igreja perto de Salzburgo compõem um inverno de contos, vivido sem pressa entre quatro cidades imperiais.",
  highlights: [
    "Mercado de Natal da Rathausplatz, em Viena, com seu carrossel histórico",
    "Vilarejo de Oberndorf, berço da canção 'Noite Feliz'",
    "Mercado de Natal de Salzburgo em Domplatz e Residenzplatz",
    "Mundo de Cristal Swarovski, criado pelo artista André Heller",
    "Centro histórico medieval de Innsbruck e o Telhado de Ouro",
    "Castelo de Neuschwanstein e o mercado de Natal da Marienplatz, em Munique",
  ],
  category: "Premium",
  days: 9,
  nights: 8,
  priceEur: 2215,
  singleSupplementEur: 960,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Saídas com guia acompanhante em espanhol.",
  countries: ["Áustria", "Alemanha"],
  area: "Europa",
  hotels: [
    { city: "Viena", hotel: "Roomz Prater" },
    { city: "Salzburgo", hotel: "June Six" },
    { city: "Innsbruck", hotel: "AC Marriott" },
    { city: "Munique", hotel: "Westin Grand" },
  ],
  departures: ["2027-11-26", "2027-12-03"],
  itinerary: [
    {
      day: 1,
      route: "VIENA",
      text: "Chegada ao aeroporto de Viena e traslado com nosso motorista até o hotel. À noite, encontro com os companheiros de viagem em um típico jantar de boas-vindas austríaco no famoso Restaurante Marchfelderhof, conhecido além das fronteiras do país. Neste ambiente verdadeiramente único, logo terá a sensação de que a Imperatriz Sissi está sentada à sua mesa. As bebidas também estão incluídas.",
    },
    {
      day: 2,
      route: "VIENA",
      text: "Após o café da manhã, visita panorâmica à cidade, que oferece uma excelente visão geral dos principais pontos de interesse de Viena. O aroma da pastelaria de Natal, do vinho quente e das amêndoas torradas preenche o ar, enquanto o centro antigo e as ruas comerciais ganham luzes festivas. Visitaremos os jardins do histórico Palácio Belvedere, antigo palácio de verão do Príncipe Eugênio de Savoia, com vista imortalizada pelo artista Giovanni Antonio Canal. Seguimos pela Ringstrasse, com a Ópera Estatal, o Museu de História da Arte e História Natural, o Monumento a Maria Theresa, o Parlamento Austríaco, a Prefeitura, o Teatro Nacional e o Hofburg. Caminhada pelas ruelas idílicas do centro histórico, visita ao interior da Catedral de Santo Estêvão e passagem pelo Relógio Anker e pelo bairro judeu, até o mais famoso mercado de Natal da cidade, na Rathausplatz, com seu arco de velas na entrada, presentes, artesanato, delícias culinárias e um carrossel de doze metros de altura. Opção de concerto de música clássica à noite (não incluído).",
    },
    {
      day: 3,
      route: "VIENA / OBERNDORF / SALZBURGO",
      text: "Café da manhã e saída para Salzburgo. Antes de chegar à cidade de Mozart, uma parada muito especial em Oberndorf, onde nasceu a canção natalina 'Noite Feliz', apresentada pela primeira vez em 24 de dezembro de 1818 na Igreja de São Nicolau. Visitamos a igreja e o mercado de Natal local, com a oportunidade de enviar cartas com selos especiais da canção. Em seguida, passeio pelo mercado de Natal e degustação de iguarias regionais antes da chegada a Salzburgo e acomodação.",
    },
    {
      day: 4,
      route: "SALZBURGO",
      text: "Café da manhã e visita panorâmica pelo charmoso centro histórico, onde se destacam a Casa Natal de Mozart, a Catedral e a Fortaleza. Encerramos o passeio com uma visita ao Mercado de Natal de Salzburgo, em Domplatz e Residenzplatz, um dos mais antigos e bonitos do mundo, declarado Patrimônio Mundial pela localização única no centro da cidade. Tarde livre e acomodação.",
    },
    {
      day: 5,
      route: "SALZBURGO / SWAROVSKI / INNSBRUCK",
      text: "Café da manhã e traslado para Innsbruck, com parada no Mundo de Cristal Swarovski. O artista multimídia André Heller criou um lugar único de fantasia, que surpreende e emociona visitantes do mundo inteiro em todas as facetas do cristal. Continuação para Innsbruck, chegada ao hotel e acomodação.",
    },
    {
      day: 6,
      route: "INNSBRUCK",
      text: "Café da manhã e visita à cidade de Innsbruck. A capital do Tirol, residência dos Habsburgos na Idade Média e sede de dois Jogos Olímpicos de Inverno, revela seu centro histórico pelo Arco do Triunfo, com casas medievais, o famoso Telhado de Ouro, a Igreja da Corte — onde repousa o túmulo do Imperador Maximiliano I — e o palácio Hofburg. Continuação com visita ao mercado de Natal, um dos mais tradicionais da cidade, com mais de setenta barracas rústicas sob a árvore de Natal, aromas de amêndoas e kiahln, presépios esculpidos e música ao vivo. Acomodação em Innsbruck.",
    },
    {
      day: 7,
      route: "INNSBRUCK / NEUSCHWANSTEIN / MUNIQUE",
      text: "Café da manhã e visita ao Castelo de Neuschwanstein, construído pelo Rei Ludwig II da Baviera, conhecido como 'o Rei Louco', inspirado nos castelos medievais dos Cavaleiros Teutônicos. À tarde, continuação até Oberammergau, célebre por sua peça da Paixão representada a cada dez anos, e visita à Abadia Beneditina de Ettal, fundada pela Casa de Wittelsbacher. Continuação até Munique, chegada e acomodação.",
    },
    {
      day: 8,
      route: "MUNIQUE",
      text: "Café da manhã e visita panorâmica à capital da Baviera, às margens do rio Isar, onde se destacam a Catedral de Nossa Senhora, a Igreja Gótica do Espírito Santo e a Igreja de São Miguel e São Nepomuceno. Visita ao famoso mercado da Marienplatz, com raízes no século XIV e considerado o mais bonito de Munique, tendo como cenário a romântica prefeitura neogótica — aqui está também o maior mercado de presépios da Alemanha. Acomodação em Munique.",
    },
    {
      day: 9,
      route: "MUNIQUE",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
