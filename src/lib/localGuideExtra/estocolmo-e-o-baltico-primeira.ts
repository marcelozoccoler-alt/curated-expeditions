import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const estocolmoEOBalticoPrimeira: LocalGuideGroup = {
  slug: "estocolmo-e-o-baltico-primeira",
  code: "EETEBAL",
  title: "Estocolmo e o Báltico (Primeira)",
  subtitle: "Estocolmo · Helsinque · Tallinn · Riga · Vilnius · Varsóvia",
  intro:
    "Estocolmo abre a viagem sobre suas catorze ilhas, prenúncio de uma travessia que se completará a bordo de um cruzeiro noturno pelo arquipélago báltico. Dali em diante, capitais medievais, colinas sagradas e castelos lacustres compõem um itinerário de rara amplitude geográfica e emocional. Uma jornada editorial pelo norte e pelo leste da Europa, sem pressa, com o mar sempre por perto.",
  highlights: [
    "Estocolmo e a cidade antiga de Gamla Stan",
    "Noite a bordo do cruzeiro Tallink-Silja Line rumo a Helsinque",
    "Centro histórico medieval de Tallinn",
    "Colina das Cruzes em Šiauliai",
    "Vilnius, «a Jerusalém da Lituânia», e o Castelo de Trakai",
    "Rota Real de Varsóvia e o Parque de Łazienki",
  ],
  category: "Primeira",
  days: 13,
  nights: 12,
  priceEur: 2835,
  singleSupplementEur: 1200,
  priceNote:
    "5% de desconto para o terceiro passageiro em quarto triplo. Redução de € 400 por pessoa em apto. duplo (€ 200 suplemento individual) para quem terminar o circuito em Vilnius no dia 11, com traslado ao aeroporto incluído.",
  countries: ["Suécia", "Finlândia", "Estônia", "Letônia", "Lituânia", "Polônia"],
  area: "Europa",
  hotels: [
    { city: "Estocolmo", hotel: "Clarion" },
    { city: "Helsinque", hotel: "Radisson Aleksanteri" },
    { city: "Tallinn", hotel: "Radisson Meriton" },
    { city: "Riga", hotel: "Radisson Latvija" },
    { city: "Vilnius", hotel: "Radisson Lietuva" },
    { city: "Varsóvia", hotel: "Radisson Sobieski" },
  ],
  departures: ["2027-07-03", "2027-07-31", "2027-09-25"],
  itinerary: [
    {
      day: 1,
      route: "ESTOCOLMO",
      text: "Chegada a Estocolmo, traslado até o hotel e acomodação. Às 18h30, encontro no lobby do hotel com o guia.",
    },
    {
      day: 2,
      route: "ESTOCOLMO",
      text: "Café da manhã e visita à cidade. Passeio pela cidade antiga, Gamla Stan, onde se encontram edifícios marcantes de sua história, como o Palácio Real, a Casa da Nobreza e o Museu Nobel. Chegada à ilha de Södermalm, assentada sobre colinas, de onde se descortinam vistas espetaculares desde «O Mirante» em direção à zona norte do centro. Conhecemos ainda o interessante centro histórico e comercial, cruzando algumas de suas ilhas — Estocolmo assenta-se sobre 14 ilhas unidas por 57 pontes. Tarde livre e hospedagem.",
    },
    {
      day: 3,
      route: "ESTOCOLMO / CRUZEIRO TALLINK-SILJA / HELSINQUE",
      text: "Café da manhã e manhã livre até às 15h, quando seguimos ao porto para embarcar no cruzeiro com destino a Helsinque. Recomendamos aproveitar as vistas na saída do porto e a navegação pelo arquipélago de mais de 24.000 ilhas. O navio conta com wifi nas áreas comuns, diferentes restaurantes e cafeterias, clube noturno com discoteca, espetáculos ao vivo e lojas duty-free. Hospedagem em cabines duplas externas categoria A. Jantar buffet a bordo.",
    },
    {
      day: 4,
      route: "HELSINQUE",
      text: "Café da manhã buffet a bordo e chegada a Helsinque às 10h. Desembarque e visita panorâmica da capital da Finlândia, também conhecida como «a Cidade Branca do Norte», passando pela Igreja Ortodoxa da Trindade, vestígio do domínio russo, a Praça do Senado e a Temppeliaukio Kirkko, igreja luterana escavada na rocha, cuja cúpula desenha uma gigantesca espiral de fios de cobre. Tarde livre e hospedagem.",
    },
    {
      day: 5,
      route: "HELSINQUE / TALLINN",
      text: "Café da manhã e tempo livre para atividades pessoais. Às 15h, traslado ao porto para embarque no ferry expresso com destino a Tallinn, atravessando o mar Báltico. Hospedagem em Tallinn.",
    },
    {
      day: 6,
      route: "TALLINN",
      text: "Café da manhã e visita à cidade e suas reminiscências hanseáticas, com destaque para o Kiek in de Kök, uma das torres defensivas mais imponentes da região do mar Báltico, a igreja de São Nicolau (séculos XIII–XV) e a Catedral de Santa Maria (Toomkirik), de estilo gótico com reformas posteriores. Hospedagem.",
    },
    {
      day: 7,
      route: "TALLINN / SIGULDA / RIGA",
      text: "Café da manhã e saída em direção a Sigulda, situada no Parque Nacional de Gauja, área salpicada de castelos e grutas. Visita das ruínas do Castelo de Sigulda, construído em 1207 pelos Cavaleiros da Cruz, e do Castelo de Turaida, de onde se aprecia uma vista impressionante sobre o entorno. Continuação até Riga. Hospedagem.",
    },
    {
      day: 8,
      route: "RIGA",
      text: "Café da manhã e visita da cidade, também chamada de «a Paris do Norte», cuja fundação remonta ao século XII. Passeio pelo centro histórico, com suas estreitas ruas e casas típicas, passando pela Catedral, a Casa dos Três Irmãos, a Praça da Prefeitura e o Monumento à Liberdade, além da impressionante coleção de edifícios art nouveau construídos majoritariamente entre 1904 e 1914. Hospedagem.",
    },
    {
      day: 9,
      route: "RIGA / RUNDALE / SIAULIAI / VILNIUS",
      text: "Café da manhã e saída em direção a Rundale para visitar o castelo barroco construído pelo célebre arquiteto Francesco Rastrelli. Continuação até Šiauliai, «a Cidade do Sol», onde a Colina das Cruzes, também visitada pelo papa João Paulo II, reúne ao menos 10.000 cruzes de diferentes tamanhos, símbolo do desejo inquebrantável da população por sua liberdade. Prosseguimos até Vilnius, capital da Lituânia. Hospedagem.",
    },
    {
      day: 10,
      route: "VILNIUS / TRAKAI / VILNIUS",
      text: "Café da manhã e visita panorâmica da cidade, também chamada de «a Jerusalém da Lituânia», com uma população heterogênea que reúne pessoas de 92 nacionalidades diferentes. Entre suas múltiplas obras sacras destacam-se a igreja de São Pedro e São Paulo, a igreja de Santa Ana, a igreja de São Casimiro e a igreja de São Miguel. À tarde, excursão a Trakai, famosa por seu castelo do século XIV, rodeado por dez pequenos lagos. Hospedagem.",
    },
    {
      day: 11,
      route: "VILNIUS / VARSÓVIA",
      text: "Café da manhã e saída em direção a Varsóvia, capital da Polônia. No trajeto, passamos a 17 km da fronteira com a Bielorrússia, onde confluem os rios Neris e Vilna, desfrutando das paisagens das pequenas povoações rurais polonesas até a chegada, à tarde, a Varsóvia. Hospedagem.",
    },
    {
      day: 12,
      route: "VARSÓVIA",
      text: "Café da manhã e visita à cidade seguindo o caminho da Rota Real, que abrange também o centro histórico, o Parque Real de Łazienki, com seu monumento a Chopin, e a Igreja de Santa Ana. Tarde livre e acomodação em Varsóvia.",
    },
    {
      day: 13,
      route: "VARSÓVIA",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
