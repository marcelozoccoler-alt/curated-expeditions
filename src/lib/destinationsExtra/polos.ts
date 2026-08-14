import { Destination } from "../types";

/**
 * Antártida & Ártico — expedições polares de curadoria Create Travel.
 * Destinos raros, de alto ticket, para viajantes que colecionam travessias
 * e não destinos. Conteúdo estruturado para busca em Google e IAs generativas.
 */
export const polosExtraDestinations: Destination[] = [
  {
    id: "polos-antartida",
    continent: "Antártida & Ártico",
    country: "Antártida",
    region: "Península Antártica, Drake e Círculo Polar",
    slug: "polos/antartida",
    name: "Antártida — Península, Drake e Círculo Polar",
    bestTime:
      "Nov–Mar (verão austral). Novembro traz gelo intacto e cortejo de pinguins; janeiro e fevereiro concentram baleias e filhotes; março oferece a melhor luz para fotografia.",
    tags: ["expedicao", "remoto", "fotografia", "navegacao", "conservacao", "montanha"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of an expedition ship anchored beside towering blue icebergs in the Antarctic Peninsula, gentoo penguins on a snow shelf in the foreground, low golden polar light, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Antártida não é um destino: é uma travessia. Cruza-se o Drake por dois dias para chegar a um continente sem dono, sem cidade e sem fuso horário útil — onde o silêncio tem textura e o azul do gelo antigo não existe em nenhuma outra paisagem da Terra. A Create Travel trabalha com armadores de expedição de pequeno porte (de 70 a 200 passageiros), cabines com sacada, líderes de expedição glaciologistas e programas opcionais de caiaque, camping polar e sobrevoo do Círculo Polar. É a viagem que os nossos viajantes descrevem como divisor de águas de uma vida inteira de viagens.",
    highlights: [
      {
        title: "A travessia do Drake",
        story:
          "Dois dias de mar aberto entre a América do Sul e o continente branco, com albatrozes acompanhando a popa em planeio perfeito. Quando a primeira montanha de gelo aparece no horizonte, o navio inteiro emudece — ninguém combina, simplesmente acontece.",
      },
      {
        title: "Desembarques em zodiac entre icebergs",
        story:
          "O bote encosta em uma praia de neve compactada e o cheiro salgado se mistura ao ar mais limpo que seus pulmões já receberam. A colônia de pinguins segue sua rotina a três metros de distância, indiferente à sua existência.",
      },
      {
        title: "Baleias jubarte em Wilhelmina Bay",
        story:
          "O motor desligado, a água como chumbo polido, e o sopro de uma jubarte estourando ao lado do bote. Elas vêm por curiosidade — e ficam. Há relatos de encontros de quarenta minutos com o mesmo animal circulando a embarcação.",
      },
      {
        title: "Cruzar o Círculo Polar Antártico",
        story:
          "Poucos itinerários descem abaixo dos 66°33'. Quem cruza recebe o certificado e a sensação particular de estar no clube reduzido de humanos que já esteve ali — a maioria dos visitantes da Antártida nunca chega tão ao sul.",
      },
      {
        title: "Camping polar e caiaque",
        story:
          "Dormir uma noite sobre o gelo, dentro de um saco de dormir expedicionário, ouvindo geleiras se partirem à distância. No dia seguinte, remar um caiaque entre placas de gelo que tilintam como cristal ao encostarem no casco.",
      },
    ],
    beyondUsual: [
      {
        title: "Fly & Cruise: sobrevoo do Drake",
        story:
          "Voo charter de Punta Arenas até King George Island, embarcando direto na Antártida e economizando quatro dias de navegação — ideal para quem tem agenda curta ou sensibilidade a mar aberto.",
      },
      {
        title: "Geórgia do Sul e Ilhas Falkland",
        story:
          "A extensão de 18 a 21 dias que multiplica a experiência: praias com 200 mil pinguins-rei, elefantes-marinhos e o túmulo de Shackleton em Grytviken.",
      },
      {
        title: "Expedições fotográficas com mentoria",
        story:
          "Saídas específicas com fotógrafos de natureza embarcados, botes dedicados à luz certa e revisão de imagens a bordo ao final de cada dia.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar à Antártida?", a: "A temporada vai de novembro a março. Novembro tem gelo intacto e rituais de acasalamento dos pinguins; janeiro e fevereiro concentram baleias, filhotes e dias mais longos; março oferece a melhor luz para fotografia e maior chance de avistar jubartes em grande número." },
      { q: "Quantos dias dura uma expedição à Antártida?", a: "Os roteiros clássicos de Península Antártica levam de 10 a 12 dias saindo de Ushuaia. Programas com Círculo Polar chegam a 14 dias, e os que incluem Geórgia do Sul e Falkland vão de 18 a 21 dias." },
      { q: "É preciso preparo físico para ir à Antártida?", a: "Não é preciso preparo atlético. Exige-se mobilidade para embarcar e desembarcar de botes zodiac e caminhar em neve. Atividades opcionais como caiaque, camping polar e trekking em altitude têm requisitos próprios, informados na reserva." },
      { q: "Quanto custa uma viagem à Antártida?", a: "É uma das viagens de maior investimento do planeta, com valores definidos por armador, categoria de cabine e época. Trabalhamos apenas com navios de expedição de pequeno porte e enviamos as opções sob consulta, com condições de pagamento da parte terrestre." },
      { q: "Como se evita o mar agitado do Drake?", a: "Existem programas Fly & Cruise que substituem a navegação por um voo charter até King George Island. Também orientamos escolha de cabine, posição no navio e medicação preventiva com antecedência." },
      { q: "Como criar minha expedição à Antártida?", a: "Clique em Criar roteiro sob medida e conte janela de datas e perfil de conforto — desenhamos a comparação entre armadores, cabines e extensões possíveis." },
    ],
  },
  {
    id: "polos-groenlandia",
    continent: "Antártida & Ártico",
    country: "Groenlândia",
    region: "Ilulissat, Disko Bay e leste selvagem",
    slug: "polos/groenlandia",
    name: "Groenlândia — Ilulissat, Disko Bay e aurora boreal",
    bestTime:
      "Jun–Set para navegação entre icebergs e sol da meia-noite; Set–Mar para aurora boreal, com setembro somando gelo navegável e céu ativo.",
    tags: ["expedicao", "aurora", "remoto", "navegacao", "fotografia", "cultura"],
    imageAiPrompt:
      "Ultra realistic editorial photograph of colossal icebergs in Ilulissat Icefjord, Greenland, small colourful Inuit village houses on the rocky shore, midnight sun low on the horizon casting pink light, documentary style, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Groenlândia é a maior ilha do mundo e ainda uma das menos visitadas: 56 mil habitantes, nenhuma estrada entre cidades e um manto de gelo com quase três quilômetros de espessura. Em Ilulissat, o fiorde despeja icebergs do tamanho de edifícios no Atlântico Norte — patrimônio da Unesco e um dos espetáculos geológicos mais impressionantes que existem. A curadoria Create Travel combina navegação em barco privativo, hospedagens com vista para o fiorde, comunidades inuítes e as noites em que a aurora boreal cobre o céu de verde.",
    highlights: [
      {
        title: "Fiorde de gelo de Ilulissat",
        story:
          "Icebergs encalhados na boca do fiorde criam uma cidade branca flutuante. À noite, o sol de verão não se põe — apenas raspa o horizonte e pinta o gelo de rosa por três horas seguidas.",
      },
      {
        title: "Baleias na Disko Bay",
        story:
          "Jubartes e baleias-comuns cruzam a baía entre os blocos de gelo. Do convés de um barco pequeno, o sopro ecoa nas paredes de gelo antes de você conseguir localizar o animal.",
      },
      {
        title: "Aurora boreal sobre o gelo",
        story:
          "A partir de setembro, o céu se abre em cortinas verdes que se refletem na água escura e nos icebergs. É aurora com espelho — algo que nem a Islândia nem a Lapônia conseguem oferecer.",
      },
      {
        title: "Comunidades inuítes",
        story:
          "Casas de madeira em vermelho, azul e amarelo, cães de trenó descansando ao sol e uma cultura de caça e pesca que atravessou milênios. Conversar com um caçador local reorganiza o que você acha que sabe sobre resiliência.",
      },
    ],
    beyondUsual: [
      {
        title: "Travessia de leste a oeste",
        story:
          "Programas que combinam Kulusuk e Tasiilaq, no leste selvagem, com Ilulissat e Nuuk no oeste — o contraste entre a Groenlândia inuíte tradicional e a capital contemporânea.",
      },
      {
        title: "Caminhada sobre o manto de gelo",
        story:
          "Guias glaciologistas conduzem à borda do inlandsis em Point 660, onde se pisa no segundo maior corpo de gelo do planeta.",
      },
      {
        title: "Trenó puxado por cães no inverno",
        story:
          "Ao norte do Círculo Polar, o trenó ainda é meio de transporte real. Uma travessia de duas horas em silêncio absoluto sobre neve compactada.",
      },
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para viajar à Groenlândia?", a: "De junho a setembro para navegação entre icebergs, trilhas e sol da meia-noite. De setembro a março para aurora boreal. Setembro é a janela que reúne as duas coisas: gelo navegável e céu já escuro o suficiente." },
      { q: "Como se chega à Groenlândia?", a: "Voos a partir de Copenhague (Dinamarca) e de Reykjavík (Islândia) para Nuuk, Ilulissat e Kangerlussuaq. Os deslocamentos internos são feitos por avião, helicóptero ou barco — não há estradas entre as cidades." },
      { q: "Groenlândia ou Islândia, qual escolher?", a: "A Islândia é mais acessível, com estradas e infraestrutura ampla. A Groenlândia é mais remota, mais rara e oferece icebergs em escala incomparável e cultura inuíte viva. Muitos roteiros combinam as duas, com conexão em Reykjavík." },
      { q: "Quantos dias em uma viagem à Groenlândia?", a: "De 7 a 10 dias para Ilulissat e Disko Bay com conforto. De 12 a 14 dias para combinar leste e oeste ou incluir extensão pela Islândia." },
      { q: "Dá para ver aurora boreal e icebergs na mesma viagem?", a: "Sim, em setembro e início de outubro. O gelo do fiorde de Ilulissat continua navegável e as noites já são escuras o suficiente para a aurora aparecer sobre a água." },
      { q: "Como montar meu roteiro pela Groenlândia?", a: "Clique em Criar roteiro sob medida e informe o período — desenhamos a combinação de voos, barcos privativos e hospedagens com vista para o fiorde." },
    ],
  },
];
