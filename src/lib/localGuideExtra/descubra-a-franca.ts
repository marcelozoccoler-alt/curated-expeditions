import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const descubraAFranca: LocalGuideGroup = {
  slug: "descubra-a-franca",
  code: "PARNIZ",
  title: "Descubra a França",
  subtitle:
    "Paris · Épernay · Dijon · Beaune · Lyon · Aix-en-Provence · Nice · Saint-Paul-de-Vence · Cannes · Mônaco · Èze · Grasse",
  intro:
    "Onze dias que percorrem a França de norte a sul, dos bulevares de Paris às vinhas espumantes da Champagne, das ruas medievais da Borgonha ao azul intenso da Côte d'Azur. Um roteiro que revela a diversidade de um país inteiro — arte, gastronomia, vinho e luxo mediterrâneo — sempre com guia local em espanhol.",
  highlights: [
    "Torre Eiffel, Sena e os grandes bulevares parisienses",
    "Degustação na vinícola Mercier, em Épernay, coração da Champagne",
    "Dijon e o legado renascentista dos duques da Borgonha",
    "Vieux Lyon e a basílica de Notre-Dame de Fourvière",
    "Saint-Paul-de-Vence e Cannes, joias da Riviera Francesa",
    "Mônaco, Èze e Grasse — luxo, penhascos e perfumes na Côte d'Azur",
  ],
  category: "Primeira",
  days: 11,
  nights: 10,
  priceEur: 3295,
  singleSupplementEur: 1400,
  priceNote:
    "Desconto de 5% para o terceiro passageiro em quarto triplo. Guia acompanhante em espanhol.",
  countries: ["França", "Mônaco"],
  area: "Europa",
  hotels: [
    { city: "Paris", hotel: "NH Paris Gare de l'Est" },
    { city: "Dijon", hotel: "Aloft Dijon" },
    { city: "Lyon", hotel: "Radisson Blu" },
    { city: "Nice", hotel: "Ikonik Marengo / NH Nice" },
  ],
  departures: ["2027-06-18", "2027-10-01"],
  itinerary: [
    {
      day: 1,
      route: "PARIS",
      text: "Chegada ao aeroporto, traslado para o hotel e acomodação. O guia estará no hotel a partir das 19h00.",
    },
    {
      day: 2,
      route: "PARIS",
      text: "Café da manhã e visita panorâmica de uma das cidades mais turísticas e visitadas do mundo. Durante o percurso em ônibus passaremos pelo bairro de Saint-Germain, de ambiente intelectual e ponto de encontro de figuras como Hemingway, Sartre e Picasso. Veremos a Universidade da Sorbonne, os Campos Elísios, a Praça da Concórdia, o Arco do Triunfo e algumas das pontes sobre o Sena, até chegar à Torre Eiffel, onde faremos uma parada para fotos. Também veremos Os Inválidos, onde se encontra o túmulo de Napoleão, La Madeleine, o Panteão e outros lugares emblemáticos. À tarde, possibilidade de visita opcional a pé pelo Bairro Latino e Montmartre, com a Catedral de Notre Dame vista externamente. A excursão termina com um passeio de barco pelo rio Sena (não incluído). Hospedagem em Paris.",
    },
    {
      day: 3,
      route: "PARIS",
      text: "Café da manhã no hotel e dia livre. Possibilidade de realizar uma excursão opcional ao Palácio e aos jardins de Versalhes (não incluída), com traslado de ida e volta em ônibus. Hospedagem.",
    },
    {
      day: 4,
      route: "PARIS / ÉPERNAY / DIJON",
      text: "Café da manhã e saída em direção a Épernay, onde visitaremos a famosa vinícola Mercier. Após a visita, continuação até Dijon. Chegada e hospedagem. À tarde, visita panorâmica da cidade de Dijon, uma das mais importantes da França e capital da Borgonha, terra da mostarda, famosa por seu esplendor arquitetônico renascentista, legado dos duques da Borgonha. Vamos passar pelo Palácio dos Duques, a igreja de São Miguel, a rua Verrerie e a Praça Darcy. Hospedagem.",
    },
    {
      day: 5,
      route: "DIJON / BEAUNE / LYON",
      text: "Café da manhã e saída em direção a Beaune, uma das cidades mais belas da França, com seu centro histórico murado e seu famoso Hôtel-Dieu. Após a visita, continuação até Lyon, a terceira maior cidade do país. Chegada e hospedagem.",
    },
    {
      day: 6,
      route: "LYON",
      text: "Café da manhã e visita panorâmica de Lyon, antiga capital dos gauleses e cidade com um dos maiores patrimônios renascentistas do mundo, depois de Veneza e Florença. Durante a visita veremos o Vieux Lyon, o bairro medieval e renascentista às margens do rio Saône, a Catedral de São João com seu relógio astronômico, a basílica de Notre-Dame de Fourvière, a Praça da Comédia, a rua da República, a Praça dos Terreaux e a moderna Ópera de Lyon. Hospedagem em Lyon.",
    },
    {
      day: 7,
      route: "LYON / AIX-EN-PROVENCE / NICE",
      text: "Café da manhã e saída em direção à Côte d'Azur. A primeira parada será Aix-en-Provence, conhecida como a joia cultural da região. Tempo livre para passear por esta elegante cidade universitária de origem romana. Continuação até Nice. Durante a estadia, recomendamos percorrer a Promenade des Anglais e as ruas do encantador centro histórico, Vieux Nice, onde poderá desfrutar da gastronomia local, destacando a famosa salade niçoise. Hospedagem em Nice.",
    },
    {
      day: 8,
      route: "NICE / SAINT-PAUL-DE-VENCE / NICE",
      text: "Café da manhã e excursão a dois locais emblemáticos da região: Saint-Paul-de-Vence e Cannes. Começamos em Saint-Paul-de-Vence, uma das cidades medievais mais antigas da Riviera Francesa. Passearemos por suas ruas e visitaremos a Praça da Fonte Grande, antiga praça do mercado, com tempo livre para percorrer galerias de arte onde artistas como Henri Matisse e Joan Miró deixaram sua marca. Continuação até Cannes, conhecida mundialmente por seu festival de cinema. Percorreremos bairros históricos como Le Suquet e o Boulevard de la Croisette, famoso por suas boutiques, cafés e hotéis de luxo. Também veremos o Musée de la Castre, a capela de Sainte-Anne e a Rue d'Antibes. Retorno a Nice. Hospedagem.",
    },
    {
      day: 9,
      route: "NICE / MÔNACO / ÈZE / NICE",
      text: "Café da manhã e saída em direção a Mônaco, destino de referência para os amantes do luxo e da Fórmula 1. Veremos locais emblemáticos como o Cassino de Monte Carlo, projetado pelo arquiteto da Ópera de Paris. Continuação até o pitoresco povoado medieval de Èze, situado sobre um penhasco entre Nice e Monte Carlo, de onde se desfrutam vistas espetaculares do mar. Retorno a Nice. Hospedagem.",
    },
    {
      day: 10,
      route: "NICE / GRASSE / NICE",
      text: "Café da manhã e saída em direção a Grasse, capital mundial do perfume. Situada a 750 metros de altitude, está rodeada de campos de flores como rosas, jasmim e nardo, base da indústria perfumista. Visitaremos a Casa Fragonard, onde conheceremos a história e o processo de elaboração das fragrâncias. Retorno a Nice e hospedagem.",
    },
    {
      day: 11,
      route: "NICE",
      text: "Café da manhã e traslado de saída para o aeroporto.",
    },
  ],
};
