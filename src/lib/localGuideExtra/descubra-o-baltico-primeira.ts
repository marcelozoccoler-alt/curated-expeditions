import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const descubraOBalticoPrimeira: LocalGuideGroup = {
  slug: "descubra-o-baltico-primeira",
  code: "EETDBAL",
  title: "Descubra o Báltico (Primeira)",
  subtitle: "Helsinque · Tallinn · Riga · Vilnius · Varsóvia",
  intro:
    "Entre mares gelados e cidades medievais talhadas em pedra e âmbar, o Báltico revela um capítulo pouco contado da Europa. Ferries deslizam sobre águas cor de aço enquanto capitais de traçado gótico, torres hanseáticas e colinas de cruzes desenham um roteiro raro, autoral e sem pressa. Uma travessia sensorial por cinco países que guardam, lado a lado, silêncio nórdico e memória eslava.",
  highlights: [
    "Ferry expresso atravessando o mar Báltico até Tallinn",
    "Centro histórico medieval de Tallinn e sua Catedral gótica",
    "Castelos de Sigulda e Turaida no Parque Nacional de Gauja",
    "Colina das Cruzes em Šiauliai, visitada pelo papa João Paulo II",
    "Vilnius e sua herança de 92 nacionalidades",
    "Castelo de Trakai, cercado por lagos na Lituânia",
  ],
  category: "Primeira",
  days: 10,
  nights: 9,
  priceEur: 1995,
  singleSupplementEur: 900,
  priceNote:
    "5% de desconto para o terceiro passageiro em quarto triplo. Redução de € 400 por pessoa em apto. duplo (€ 200 suplemento individual) para quem terminar o circuito em Vilnius no dia 8, com traslado ao aeroporto incluído.",
  countries: ["Finlândia", "Estônia", "Letônia", "Lituânia", "Polônia"],
  area: "Europa",
  hotels: [
    { city: "Helsinque", hotel: "Radisson Aleksanteri" },
    { city: "Tallinn", hotel: "Radisson Meriton" },
    { city: "Riga", hotel: "Radisson Latvija" },
    { city: "Vilnius", hotel: "Radisson Lietuva" },
    { city: "Varsóvia", hotel: "Radisson Sobieski" },
  ],
  departures: ["2027-07-06", "2027-08-03", "2027-09-28"],
  itinerary: [
    {
      day: 1,
      route: "HELSINQUE",
      text: "Chegada a Helsinque e traslado até o hotel. Às 18h30, encontro no lobby com o guia local, que apresenta as primeiras impressões da capital finlandesa antes do início oficial da viagem.",
    },
    {
      day: 2,
      route: "HELSINQUE / TALLINN",
      text: "Café da manhã e visita panorâmica de Helsinque, conhecida como «a Cidade Branca do Norte». O passeio percorre a Igreja Ortodoxa da Trindade, a Praça do Senado e a Temppeliaukio Kirkko, igreja luterana escavada na rocha, cuja cúpula desenha uma gigantesca espiral de fios de cobre. Tempo livre para atividades pessoais e, às 15h, traslado ao porto para embarque no ferry expresso que atravessa o mar Báltico rumo a Tallinn. Hospedagem em Tallinn.",
    },
    {
      day: 3,
      route: "TALLINN",
      text: "Café da manhã e visita à cidade e suas reminiscências hanseáticas, com destaque para o Kiek in de Kök, uma das torres defensivas mais imponentes da região do mar Báltico, a igreja de São Nicolau (séculos XIII–XV) e a Catedral de Santa Maria (Toomkirik), de estilo gótico com reformas posteriores. Hospedagem.",
    },
    {
      day: 4,
      route: "TALLINN / SIGULDA / RIGA",
      text: "Café da manhã e saída em direção a Sigulda, situada no Parque Nacional de Gauja, área salpicada de castelos e grutas. Visita das ruínas do Castelo de Sigulda, construído em 1207 pelos Cavaleiros da Cruz, e do Castelo de Turaida, de onde se aprecia uma vista impressionante sobre o entorno. Continuação até Riga. Hospedagem.",
    },
    {
      day: 5,
      route: "RIGA",
      text: "Café da manhã e visita da cidade, também chamada de «a Paris do Norte», cuja fundação remonta ao século XII. Passeio pelo centro histórico, com suas estreitas ruas e casas típicas, passando pela Catedral, a Casa dos Três Irmãos, a Praça da Prefeitura e o Monumento à Liberdade, além da impressionante coleção de edifícios art nouveau construídos majoritariamente entre 1904 e 1914, época em que Riga se destacava como uma das cidades mais prósperas do Império russo. Hospedagem.",
    },
    {
      day: 6,
      route: "RIGA / RUNDALE / SIAULIAI / VILNIUS",
      text: "Café da manhã e saída em direção a Rundale para visitar o castelo barroco construído pelo célebre arquiteto Francesco Rastrelli. Continuação até Šiauliai, «a Cidade do Sol», quarta cidade da Lituânia, cujas origens remontam a mais de 2.500 anos e cuja fama repousa na Colina das Cruzes, também visitada pelo papa João Paulo II, onde ao menos 10.000 cruzes de diferentes tamanhos simbolizam o desejo inquebrantável da população por sua liberdade. Prosseguimos até Vilnius, capital da Lituânia. Hospedagem.",
    },
    {
      day: 7,
      route: "VILNIUS / TRAKAI / VILNIUS",
      text: "Café da manhã e visita panorâmica da cidade, também chamada de «a Jerusalém da Lituânia», com uma população heterogênea que reúne pessoas de 92 nacionalidades diferentes. Entre suas múltiplas obras sacras destacam-se a igreja de São Pedro e São Paulo, construída em 1668 sobre os restos de um templo pagão dedicado a Milda, deusa do amor; a igreja de Santa Ana, com o adjacente mosteiro das Bernardinas; a igreja de São Casimiro, fundada pelos jesuítas; e a igreja de São Miguel, obra renascentista de 1594. À tarde, excursão a Trakai, famosa por seu castelo do século XIV, rodeado por dez pequenos lagos. Hospedagem.",
    },
    {
      day: 8,
      route: "VILNIUS / VARSÓVIA",
      text: "Café da manhã e saída em direção a Varsóvia, capital da Polônia. No trajeto, passamos a 17 km da fronteira com a Bielorrússia, onde confluem os rios Neris e Vilna, desfrutando das paisagens das pequenas povoações rurais polonesas até a chegada, à tarde, a Varsóvia. Hospedagem.",
    },
    {
      day: 9,
      route: "VARSÓVIA",
      text: "Café da manhã e visita à cidade seguindo o caminho da Rota Real, que abrange também o centro histórico, o Parque Real de Łazienki, com seu monumento a Chopin, e a Igreja de Santa Ana. Tarde livre e acomodação em Varsóvia.",
    },
    {
      day: 10,
      route: "VARSÓVIA",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
