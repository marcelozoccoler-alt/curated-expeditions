import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const alemanhaRomanticaEFlorestaNegra: LocalGuideGroup = {
  slug: "alemanha-romantica-e-floresta-negra",
  code: "EETALROM",
  title: "Alemanha Romântica e Floresta Negra",
  subtitle: "Frankfurt · Rothenburg · Heidelberg · Estrasburgo · Friburgo · Floresta Negra · Lindau · Munique",
  intro:
    "Oito dias pela Alemanha que vive nos contos de fadas: castelos empoleirados sobre rios, vilas de enxaimel onde o tempo parou no século XV e a doçura das tortas de cereja da Floresta Negra. Um roteiro que atravessa fronteiras sem pressa, da elegância de Heidelberg à fantasia de Neuschwanstein, sempre com um guia local a conduzir a narrativa.",
  highlights: [
    "Centro histórico de Rothenburg ob der Tauber, joia medieval intacta",
    "Castelo de Heidelberg e o maior barril de vinho do mundo",
    "Estrasburgo e o bairro de La Petite France",
    "Floresta Negra, com degustação de torta de cereja e o maior relógio cuco do mundo",
    "Castelo de Neuschwanstein, inspiração dos castelos de conto de fadas",
    "Munique panorâmica, da Marienplatz ao Jardim Inglês",
  ],
  category: "Premium",
  days: 8,
  nights: 7,
  priceEur: 1995,
  singleSupplementEur: 770,
  priceNote:
    "Guia acompanhante em espanhol. Inclui 7 noites com café da manhã tipo buffet e entradas e experiências conforme o itinerário. Suplemento de € 300 por pessoa na saída de setembro. Desconto para o terceiro passageiro em quarto triplo (consulte condições).",
  countries: ["Alemanha", "França"],
  area: "Europa",
  hotels: [
    { city: "Frankfurt", hotel: "Marriott" },
    { city: "Heidelberg", hotel: "Marriott" },
    { city: "Friburgo", hotel: "Leonardo City Center ou Hampton by Hilton" },
    { city: "Munique", hotel: "Westin Grand" },
  ],
  departures: [
    "2027-04-18",
    "2027-05-02",
    "2027-05-16",
    "2027-05-30",
    "2027-06-13",
    "2027-06-27",
    "2027-07-11",
    "2027-07-25",
    "2027-08-08",
    "2027-08-22",
    "2027-09-05",
    "2027-09-19",
    "2027-10-03",
  ],
  itinerary: [
    {
      day: 1,
      route: "FRANKFURT",
      text: "Chegada a Frankfurt e traslado ao hotel. O guia estará disponível no hotel a partir das 19h00.",
    },
    {
      day: 2,
      route: "FRANKFURT / ROTHENBURG / HEIDELBERG",
      text: "Após o café da manhã, visita à cidade de Frankfurt, com o centro histórico, o Römer, a Prefeitura, a Catedral e a Paulskirche (Igreja de São Paulo). Também veremos a Casa de Goethe, local de nascimento do grande poeta alemão, as instalações da Feira de Frankfurt, a Alte Oper (Ópera Antiga) e o distrito financeiro, com seus arranha-céus entre os mais altos da Europa. Passagem pelo Banco Central Europeu, pela Hauptwache e pela rua comercial Zeil, além das torres das antigas muralhas e dos museus às margens do Reno. Em seguida, saída em direção a Rothenburg ob der Tauber, cidade de paisagem medieval, com muralhas conservadas e ruas de paralelepípedos que evocam tempos de cavaleiros e donzelas. A praça do mercado, com sua pitoresca prefeitura e casas em enxaimel, é o coração deste destino. À tarde, continuação até Heidelberg. Hospedagem.",
    },
    {
      day: 3,
      route: "HEIDELBERG",
      text: "Visita à cidade universitária mais antiga da Alemanha, com o centro histórico, onde se destacam edifícios como a antiga prefeitura e a Heiliggeistkirche, ambos do século XV, além das tradicionais casas em enxaimel. O ponto culminante é a visita ao castelo de Heidelberg, no alto da cidade, com vista magnífica do vale do Neckar, e em seu interior a grande adega, que abriga o maior barril de vinho do mundo. Depois, passeio pela Ponte Velha, construção de pedra do século XVIII que completa a visita. Tarde livre e hospedagem.",
    },
    {
      day: 4,
      route: "HEIDELBERG / ESTRASBURGO / FRIBURGO",
      text: "O percurso de hoje atravessa os vales do Neckar e do Reno, entre vinhedos que se refletem no rio, até bosques densos e colinas onduladas próximo à fronteira francesa. Chegada a Estrasburgo, cidade de grande riqueza histórica e cultural, famosa por sua catedral gótica e seu encantador centro histórico, com destaque para o bairro de La Petite France, suas casas tradicionais e canais, e a Praça da Catedral. Após uma breve visita panorâmica, continuação até Friburgo.",
    },
    {
      day: 5,
      route: "FRIBURGO / FLORESTA NEGRA / LINDAU / MUNIQUE",
      text: "Saída de Friburgo em direção à Floresta Negra, atravessando paisagens de grande beleza natural. Primeira parada para degustar uma autêntica torta de cerejas da região, acompanhada de café. Em seguida, visita ao maior relógio cuco do mundo, em Schonach Untertal, construído pelo relojoeiro Josef Dold e sua família, com mais de três metros e representativo da tradição artesanal local. A viagem continua até Lindau, pitoresca cidade situada em uma ilha no Lago de Constança, conhecida por seu porto e sua arquitetura histórica. Após breve parada, continuação para Munique, atravessando a região de Allgäu, de verdes prados, bosques e casas tradicionais decoradas com flores. Chegada e hospedagem.",
    },
    {
      day: 6,
      route: "MUNIQUE",
      text: "Visita panorâmica de Munique, capital da Baviera, às margens do rio Isar. O percurso começa no portão medieval Karlstor e segue até a Igreja de São Miguel, onde estão os restos do rei Luís II. Pela Marienplatz chega-se à Prefeitura, famosa pelo seu carrilhão, e à Frauenkirche, cuja entrada guarda, segundo a lenda, a pegada do Diabo. Passagem também pela Praça da Ópera, pela Feldherrnhalle, pela igreja Bürgersaalkirche, pela Residência Real e pela Igreja de São Pedro. Encerramento com passeio pelo Jardim Inglês, um dos maiores parques urbanos da Europa. Hospedagem.",
    },
    {
      day: 7,
      route: "MUNIQUE / NEUSCHWANSTEIN / MUNIQUE",
      text: "Excursão ao Castelo de Neuschwanstein, mandado construir pelo rei Luís II da Baviera e inspirado nos castelos medievais dos Cavaleiros Teutônicos, com interior que recria um mundo de lendas e mitologia. À tarde, passagem por Oberammergau, conhecido pela representação da Paixão realizada a cada dez anos desde 1633, e visita à abadia beneditina de Ettal. Retorno a Munique e hospedagem.",
    },
    {
      day: 8,
      route: "MUNIQUE",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
