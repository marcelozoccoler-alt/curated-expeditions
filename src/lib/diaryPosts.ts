// Posts editoriais do Diário Create Travel.
// Cada post mira uma keyword de alto volume identificada via análise Semrush
// dos principais concorrentes brasileiros de turismo autoral.

import type { FAQ } from "./types";

export interface DiarySection {
  heading: string;
  paragraphs: string[];
}

export interface DiaryPost {
  slug: string;
  title: string;            // <title> SEO
  h1: string;               // H1 visual
  metaDescription: string;
  keywords: string;
  intro: string;
  sections: DiarySection[];
  faq: FAQ[];
  relatedDestinations?: { label: string; href: string }[];
  imageAiPrompt: string;
  imageOverrideUrl?: string;
  publishedAt: string;      // ISO
  readingMinutes: number;
  category: "Cultura" | "Destino" | "Natureza" | "Roteiro" | "Curiosidades";
  whatsappName: string;     // mensagem contextual no CTA
}

export const diaryPosts: DiaryPost[] = [
  {
    slug: "gastronomia-na-turquia-alem-do-kebab",
    title: "Gastronomia na Turquia: sabores e culturas além do kebab",
    h1: "Gastronomia na Turquia: sabores e culturas além do kebab",
    metaDescription:
      "Comida na Turquia vai muito além do kebab: mezes, café-da-manhã turco, doces de Gaziantep e street food em Istambul. Guia autoral Create Travel.",
    keywords:
      "comida na turquia, gastronomia turca, comida turca, o que comer na turquia, kebab, meze, café da manhã turco",
    intro:
      "Falar em comida na Turquia é falar de três impérios sobrepostos — bizantino, seljúcida e otomano — que temperaram o mesmo território com influências do Mediterrâneo, dos Bálcãs, do Cáucaso e da rota da seda. O resultado é uma das cozinhas mais complexas do mundo, onde o kebab é apenas o começo. De Istambul à Capadócia, cada região oferece um vocabulário próprio de sabores, e comer bem é a maneira mais direta de entender por que a Turquia é, ao mesmo tempo, Europa, Ásia e Oriente Médio.",
    sections: [
      {
        heading: "O kahvaltı: por que o café-da-manhã turco é o mais rico do mundo",
        paragraphs: [
          "Antes de qualquer kebab, o primeiro contato de todo viajante com a gastronomia turca acontece no kahvaltı — o café-da-manhã. Não é uma refeição, é um ritual: mesa coberta por dez a vinte pratinhos com queijos brancos (beyaz peynir), azeitonas verdes e pretas, tomate, pepino, mel com kaymak (creme de leite espesso), geleias caseiras, ovos cozidos, embutidos de cordeiro (sucuk), pão fresco e chá preto servido em copinhos de vidro em formato de tulipa.",
          "Em Istambul, o bairro de Beşiktaş e a orla de Beyoğlu concentram os melhores kahvaltı salonları — restaurantes especializados que abrem cedo e recebem famílias inteiras aos domingos. Reservar mesa de kahvaltı em uma manhã de fim de semana é observar a Turquia contemporânea em seu momento mais civil.",
        ],
      },
      {
        heading: "Mezes: a arte turca de comer em pequenos pratos",
        paragraphs: [
          "Meze é o coração da mesa turca do almoço em diante. São dezenas de entradinhas frias e quentes servidas simultaneamente para compartilhar, acompanhadas de rakı — aguardente de anis que se toma com gelo e água, ficando leitoso (por isso apelidado de aslan sütü, leite do leão).",
          "Entre os clássicos: haydari (iogurte espesso com alho e hortelã), acılı ezme (pasta apimentada de tomate e pimentão), patlıcan salatası (berinjela defumada), fava (creme de fava), dolma (folhas de uva recheadas), sigara böreği (rolinhos crocantes de queijo) e midye dolma (mexilhões recheados com arroz e especiarias — street food obrigatório em Istambul).",
          "Uma refeição de meze bem conduzida dura horas. Não é acúmulo — é conversa. E é onde a Turquia mostra sua alma mediterrânea.",
        ],
      },
      {
        heading: "O universo do kebab: muito além do que se conhece no Brasil",
        paragraphs: [
          "O que chamamos de \"kebab\" no Brasil é apenas uma variação — o döner, cortado em fatias finas de um espeto vertical. Na Turquia, a palavra abrange centenas de preparações regionais.",
          "Em Adana, o Adana kebabı é feito de cordeiro moído com pimenta vermelha e grelhado em espetos largos. Em Urfa, a versão homônima é menos apimentada. Em Bursa, o İskender kebab combina döner sobre pão pide amanteigado, coberto por molho de tomate quente, iogurte e manteiga derretida — inventado ali no século XIX.",
          "Fora dos espetos, há o testi kebabı da Capadócia (cozido lentamente em jarro de barro selado, quebrado à mesa), o çöp şiş de Selçuk (mini-espetinhos de cordeiro grelhados no carvão) e o beyti sarma de Istambul (kebab enrolado em pão fino com molho de tomate).",
        ],
      },
      {
        heading: "Gaziantep: a capital gastronômica da Turquia e do baklava",
        paragraphs: [
          "Gaziantep, no sudeste da Anatólia, foi reconhecida pela UNESCO como Cidade Criativa da Gastronomia em 2015 — a única da Turquia. É onde se produz o melhor baklava do mundo, feito com pistache verde local (fıstık de Antep), massa filo em 40 camadas ultrafinas e xarope de açúcar sem mel — receita rigorosamente protegida.",
          "Além do baklava, Gaziantep é a origem do lahmacun (pizza fina turca com carne moída, tomate e especiarias), do katmer (crepe crocante com pistache e kaymak, servido no café-da-manhã) e de dezenas de kebabs regionais.",
          "Para o viajante gastronômico, uma extensão de dois ou três dias em Gaziantep vale mais do que muitos museus. Recomendamos combinar com Şanlıurfa e Mardin em roteiros autorais da Anatólia oriental.",
        ],
      },
      {
        heading: "Street food em Istambul: o que provar caminhando",
        paragraphs: [
          "Istambul come na rua com elegância. O simit — rosquinha de sergelim vendida por ambulantes com carrinhos vermelhos — é o pão informal da cidade, comido a qualquer hora com chá.",
          "No Eminönü, à beira do Corno de Ouro, os balık ekmek (sanduíches de cavala grelhada com cebola e limão) são vendidos direto de barcos coloridos ancorados no cais — uma das experiências mais fotografadas da cidade, e uma das melhores refeições rápidas do mundo.",
          "Nas ruas de Kadıköy, na margem asiática, prove kokoreç (tripas de cordeiro grelhadas e temperadas — não se assuste, é delicioso), midye dolma vendidos por ambulantes com bandejas, e boza (bebida fermentada de painço servida no inverno com canela e grão-de-bico torrado).",
          "Feche com um lokum (delícia turca) da Hacı Bekir — casa fundada em 1777, ainda em funcionamento no bairro de Eminönü.",
        ],
      },
      {
        heading: "Chá, café turco e a cultura da mesa",
        paragraphs: [
          "A Turquia é o maior consumidor de chá per capita do mundo — mais do que Reino Unido, Índia ou China. O çay é servido do amanhecer à meia-noite, em copinhos de vidro sem alça, sempre acompanhado de dois cubos de açúcar.",
          "O café turco (türk kahvesi), reconhecido pela UNESCO como Patrimônio Cultural Imaterial da Humanidade em 2013, é preparado em cezve — um pequeno bule de cobre — e servido não filtrado, com a borra assentando no fundo da xícara. A tradição de \"ler a borra\" após tomar o café segue viva em casas mais tradicionais.",
        ],
      },
      {
        heading: "Roteiro gastronômico autoral Create Travel",
        paragraphs: [
          "Nossa curadoria para a Turquia combina Istambul (3 a 4 dias), Capadócia (3 dias) e Gaziantep (2 dias) em roteiros de 10 a 12 dias, com aulas de culinária em famílias locais, tour privativo pelos mercados de especiarias (Mısır Çarşısı), degustação de mezes com sommelier de rakı e jantar em restaurantes autorais como Neolokal (Istambul) e Ciya Sofrası (Kadıköy) — este último referência mundial em cozinha regional turca.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual é a melhor cidade da Turquia para experiência gastronômica?",
        a: "Istambul é a mais completa pela variedade, mas Gaziantep é a capital gastronômica reconhecida pela UNESCO — é onde nasce o baklava e onde a cozinha anatólia atinge seu ápice. Idealmente, combine as duas.",
      },
      {
        q: "Comida turca é muito apimentada?",
        a: "Não. A cozinha turca usa temperos com sofisticação — cominho, sumac, pimenta-doce, hortelã seca —, mas é menos ardida que a indiana ou a tailandesa. Alguns kebabs de Adana têm mais pimenta, mas quase tudo é palatável para o brasileiro.",
      },
      {
        q: "Vegetarianos comem bem na Turquia?",
        a: "Muito bem. Boa parte dos mezes é vegetariana, os pratos com berinjela são numerosos (o clássico imam bayıldı), e há sopas de lentilha (mercimek çorbası) em qualquer restaurante. Peixe e frutos do mar são abundantes na costa.",
      },
      {
        q: "Vale fazer aula de culinária na Turquia?",
        a: "Sim. Uma aula de culinária em Istambul ou na Capadócia — em casas de família ou cozinhas autorais — é uma das experiências mais memoráveis da viagem. Combinamos isso em nossos roteiros sob medida.",
      },
    ],
    relatedDestinations: [
      { label: "Grupo Turquia 2026", href: "/grupos/turquia-2026" },
      { label: "Grupo Turquia Réveillon 2027", href: "/grupos/turquia-reveillon-2027" },
      { label: "Experiência: Gastronomia", href: "/experiencias/gastronomia" },
    ],
    imageAiPrompt:
      "Editorial overhead shot of a traditional Turkish meze table in Istanbul at golden hour: dozens of small ceramic dishes with olives, white cheese, stuffed grape leaves, hummus, roasted red pepper paste, warm flatbread, glass tulip cups of black tea, brass rakı carafe, natural window light, painterly, cinematic, no people, ultra high detail",
    publishedAt: "2026-07-09",
    readingMinutes: 8,
    category: "Cultura",
    whatsappName: "Roteiro Gastronômico Turquia",
  },

  {
    slug: "madagascar-onde-fica-e-curiosidades",
    title: "Madagascar: onde fica, o que ver e curiosidades essenciais",
    h1: "Madagascar: a ilha que evoluiu sozinha por 88 milhões de anos",
    metaDescription:
      "Onde fica Madagascar, melhor época, baobás, lêmures e roteiro autoral Create Travel para a quarta maior ilha do mundo.",
    keywords: "madagascar, ilha de madagascar, onde fica madagascar, viagem madagascar",
    intro:
      "Madagascar não é África e não é Ásia. É um mundo à parte — literalmente. Há 88 milhões de anos, essa ilha gigantesca se separou do continente africano e seguiu evoluindo em isolamento, criando uma das biodiversidades mais surpreendentes do planeta: 90% das espécies que vivem ali não existem em nenhum outro lugar da Terra.",
    sections: [
      {
        heading: "Onde fica Madagascar",
        paragraphs: [
          "Madagascar fica no Oceano Índico, a leste do continente africano, separada de Moçambique pelo Canal de Moçambique. É a quarta maior ilha do mundo, com 587 mil km² — quase o tamanho da França — e capital em Antananarivo, no planalto central.",
          "Do Brasil, a viagem mais comum é via Joanesburgo ou Adis Abeba, com tempo total de voo na casa das 20 horas. Vale combinar com uma extensão na África do Sul ou na Tanzânia para otimizar o deslocamento.",
        ],
      },
      {
        heading: "Os baobás, ícones absolutos da ilha",
        paragraphs: [
          "A Avenida dos Baobás, em Morondava, costa oeste, é a imagem-cartão de Madagascar — gigantes de até 30 metros de altura e mais de 800 anos de vida, alinhados como sentinelas contra o céu vermelho do entardecer. Existem seis espécies endêmicas, e estar entre elas é uma das experiências mais silenciosamente épicas que uma viagem oferece.",
          "Fora da Avenida, vale chegar até o Parque Nacional Kirindy, onde os baobás se misturam à floresta seca habitada por lêmures-de-cauda-anelada e fossas — o maior predador da ilha.",
        ],
      },
      {
        heading: "Lêmures, camaleões e fauna única",
        paragraphs: [
          "Madagascar tem mais de 100 espécies de lêmures, todas exclusivas da ilha. Os mais famosos são os lêmures-de-cauda-anelada do Parque Nacional Isalo e os indri-indri do Andasibe, cujo canto matinal é uma das vocalizações mais impressionantes do reino animal.",
          "Soma-se a isso quase metade dos camaleões do mundo, sapos translúcidos, geckos com cara de folha morta e baleias-jubarte que migram para a costa leste entre julho e setembro — Île Sainte-Marie é o melhor ponto de observação.",
        ],
      },
      {
        heading: "Melhor época para visitar",
        paragraphs: [
          "A estação seca, entre abril e novembro, é a janela ideal para a maior parte da ilha — estradas trafegáveis, parques abertos e fauna ativa. Setembro a novembro é especialmente bom: temperaturas amenas, baobás ainda secos e poucos turistas.",
          "Evite janeiro e fevereiro, época de ciclones na costa leste. Para baleias, mire julho a setembro. Para lêmures e camaleões, qualquer mês da estação seca funciona.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Nossa expedição clássica combina Antananarivo, Andasibe (lêmures e floresta tropical), Morondava (baobás), Tsingy de Bemaraha (formações cársticas Patrimônio da Humanidade) e Île Sainte-Marie (baleias e praias). De 14 a 18 dias, com guia naturalista, hospedagens em ecolodges e logística aérea interna — fundamental dada a distância entre regiões.",
        ],
      },
    ],
    faq: [
      {
        q: "Madagascar é seguro para turistas?",
        a: "Sim, com curadoria. As regiões turísticas são tranquilas, mas a infraestrutura é limitada — por isso recomendamos viagem operada, com motorista privativo, hospedagens selecionadas e seguro saúde robusto.",
      },
      {
        q: "Preciso de visto para Madagascar?",
        a: "Brasileiros recebem visto na chegada por até 60 dias, mediante pagamento em euros ou dólares. Documentação simples — passaporte com validade mínima de 6 meses.",
      },
      {
        q: "Quantos dias preciso para conhecer Madagascar?",
        a: "Mínimo 12 dias para ver mais de uma região. O ideal são 14 a 18, combinando floresta tropical (Andasibe), baobás (Morondava) e praia (Nosy Be ou Sainte-Marie).",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na África", href: "/destinos?c=africa" },
      { label: "Experiência: Safári & vida selvagem", href: "/experiencias/safari" },
    ],
    imageAiPrompt:
      "Editorial wide shot of Avenue of the Baobabs in Madagascar at golden hour, dramatic silhouettes of ancient giant baobab trees against a deep amber sky, soft warm light, cinematic, painterly, no people, ultra high detail",
    publishedAt: "2026-05-24",
    readingMinutes: 6,
    category: "Destino",
    whatsappName: "Roteiro Madagascar",
  },
  {
    slug: "islandia-guia-completo-e-curiosidades",
    title: "Islândia: guia completo, melhor época e curiosidades",
    h1: "Islândia: a ilha de fogo, gelo e silêncio absoluto",
    metaDescription:
      "Tudo sobre a Islândia: quando ir, ring road, aurora boreal, geleiras e roteiro autoral Create Travel — curadoria autoral na ilha mais cinematográfica do planeta.",
    keywords: "islandia, curiosidades islandia, quando ir islandia, roteiro islandia",
    intro:
      "A Islândia é o lugar onde o planeta ainda está se inventando. Vulcões ativos, geleiras milenares, gêiseres que disparam a cada poucos minutos, campos de lava cobertos de musgo verde-luminescente e auroras boreais que dançam por horas em silêncio absoluto. Nenhum outro país oferece tanta paisagem em tão pouco espaço.",
    sections: [
      {
        heading: "11 curiosidades que mudam o jeito de ver a Islândia",
        paragraphs: [
          "1. A Islândia fica sobre a Dorsal Mesoatlântica — você pode mergulhar entre as placas tectônicas norte-americana e europeia em Silfra, Þingvellir, com visibilidade de 100 metros.",
          "2. Não há mosquitos. Sério. O ecossistema simplesmente não os comporta.",
          "3. Cerca de 60% dos islandeses acreditam em elfos. Estradas chegam a ser desviadas para preservar pedras consideradas sagradas.",
          "4. O país funciona 100% com energia renovável — geotérmica e hidrelétrica.",
          "5. A Islândia tem o parlamento mais antigo do mundo ainda em funcionamento, fundado em 930 d.C. em Þingvellir.",
          "6. Sobrenomes não existem — islandeses usam patronímicos (filho de / filha de).",
          "7. Reykjavík é a capital mais ao norte do mundo.",
          "8. Há mais ovelhas do que pessoas — quase o dobro.",
          "9. A cerveja foi proibida no país até 1989.",
          "10. Quase 11% do território é coberto por geleiras.",
          "11. Você pode ver o sol da meia-noite em junho e a noite eterna em dezembro.",
        ],
      },
      {
        heading: "Melhor época para ver a aurora boreal",
        paragraphs: [
          "A janela vai de setembro a meados de abril, com pico entre outubro e março — meses de céu mais escuro e maior atividade solar. É preciso noite clara, baixa poluição luminosa e um pouco de paciência: a aurora é fenômeno natural, não show agendado.",
          "Os melhores pontos são a Península de Snæfellsnes, a região de Vík no sul e o entorno do Lago Mývatn no norte. Hospedagens isoladas com janelas voltadas para o norte aumentam dramaticamente as chances.",
        ],
      },
      {
        heading: "Ring Road: a estrada que dá a volta na ilha",
        paragraphs: [
          "A Route 1 percorre 1.332 km contornando toda a Islândia. É possível fazer em 7 dias correndo ou 12 a 14 dias com calma — recomendamos a segunda opção. Cada centena de quilômetros revela uma paisagem completamente diferente: cachoeiras gigantes (Skógafoss, Seljalandsfoss), praias de areia preta (Reynisfjara), lagoas glaciais (Jökulsárlón), fiordes do leste e o norte semi-deserto.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Nossa proposta privativa combina Ring Road com hospedagens-boutique selecionadas (Deplar Farm, Torfhús Retreat, ION Adventure), motorista-guia falando inglês ou português, banhos termais em piscinas naturais fora do circuito comum (Krauma, Hvammsvík), passeio de superjipe na geleira Langjökull e jantares com chefs que reinventam a cozinha nórdica com produtos locais.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para ir à Islândia?",
        a: "Junho a agosto para sol da meia-noite, paisagens verdes e estradas totalmente abertas. Setembro a março para aurora boreal e atmosfera invernal — paisagens cobertas de neve, gelo e silêncio.",
      },
      {
        q: "Quantos dias preciso na Islândia?",
        a: "Mínimo 7 dias para o sul + Golden Circle. Ideal 10 a 14 dias para fazer a Ring Road inteira com calma e incluir Snæfellsnes e Westfjords.",
      },
      {
        q: "Brasileiros precisam de visto para a Islândia?",
        a: "Não. A Islândia faz parte do Espaço Schengen — brasileiros podem permanecer até 90 dias com passaporte válido.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na Europa", href: "/destinos?c=europa" },
      { label: "Experiência: Aurora boreal", href: "/experiencias/aurora" },
    ],
    imageAiPrompt:
      "Cinematic landscape of Iceland, vast black sand beach Reynisfjara with basalt columns, dramatic stormy sky, soft northern light, painterly editorial style, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 7,
    category: "Destino",
    whatsappName: "Roteiro Islândia",
  },
  {
    slug: "namibia-cultura-e-vida-selvagem",
    title: "Namíbia: cultura, vida selvagem e o deserto mais antigo",
    h1: "Namíbia: o silêncio que se ouve do alto de uma duna",
    metaDescription:
      "Cultura himba, dunas de Sossusvlei, costa dos esqueletos e roteiros autorais Create Travel pelo deserto mais antigo do planeta.",
    keywords: "namibia, cultura namibia, viagem namibia, sossusvlei, deserto namibia",
    intro:
      "Há lugares no mundo onde o silêncio tem peso. Na Namíbia, ele tem cor. As dunas de Sossusvlei se erguem em laranja-incandescente sobre a planície branca de Deadvlei, e o vento que atravessa o deserto do Namib — o mais antigo da Terra, com 55 milhões de anos — não interrompe nada. Apenas sublinha.",
    sections: [
      {
        heading: "O deserto mais antigo do mundo",
        paragraphs: [
          "O Namib se estende por mais de 2.000 km ao longo da costa atlântica e abriga as dunas mais altas do planeta — algumas com mais de 380 metros. Subir a Big Daddy ao nascer do sol, contemplar Deadvlei com suas árvores fossilizadas de 900 anos e cruzar a Costa dos Esqueletos, onde naufrágios enferrujados emergem do nevoeiro, são experiências que dispensam adjetivos.",
        ],
      },
      {
        heading: "Etosha: safári como poucos lugares oferecem",
        paragraphs: [
          "O Parque Nacional Etosha, com seus 22 mil km², é um dos melhores destinos de safári da África Austral. A grande planície salina atrai elefantes, rinocerontes-negros (a Namíbia tem a maior população selvagem do mundo), leões, leopardos, girafas e enormes manadas de zebras e antílopes. As lodges com poços de água iluminados permitem observação noturna sem precisar sair do quarto.",
        ],
      },
      {
        heading: "Cultura himba: o povo da ocra vermelha",
        paragraphs: [
          "No norte, na região do Kunene, vivem os himbas — povo seminômade que preserva, há séculos, modos de vida ancestrais. As mulheres cobrem o corpo com uma pasta de ocra vermelha, manteiga e ervas que protege a pele do sol e do vento, e mantêm penteados elaborados que comunicam idade, estado civil e maternidade. Visitas devem ser feitas com mediadores éticos — algo que coordenamos integralmente.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Nossa expedição clássica vai de Windhoek a Sossusvlei, segue para a Costa dos Esqueletos via Swakopmund, sobe ao Damaraland (gravuras rupestres milenares em Twyfelfontein) e termina em Etosha, com extensão opcional para o Kunene e os himbas. De 12 a 15 dias, em lodges-tenda de luxo e com voos internos cênicos sobre as dunas.",
        ],
      },
    ],
    faq: [
      {
        q: "Quando ir para a Namíbia?",
        a: "A estação seca (maio a outubro) é ideal: dias quentes, noites frias, vegetação rala e fauna concentrada em poços de água. Para Sossusvlei, vá em junho, julho ou agosto — luz mais limpa e temperaturas amenas.",
      },
      {
        q: "É seguro viajar pela Namíbia?",
        a: "Sim. A Namíbia é um dos países mais seguros e estáveis da África. As estradas são bem sinalizadas, o turismo é maduro e a infraestrutura de lodges é excelente.",
      },
      {
        q: "Brasileiros precisam de visto para a Namíbia?",
        a: "Não. Brasileiros podem permanecer até 90 dias com passaporte válido por pelo menos 6 meses.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na África", href: "/destinos?c=africa" },
      { label: "Experiência: Safári", href: "/experiencias/safari" },
      { label: "Experiência: Deserto", href: "/experiencias/deserto" },
    ],
    imageAiPrompt:
      "Sossusvlei Deadvlei Namibia at sunrise, dramatic orange dunes towering above white salt pan with ancient blackened camel thorn trees, deep blue shadows, cinematic editorial, painterly, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 6,
    category: "Destino",
    whatsappName: "Roteiro Namíbia",
  },
  {
    slug: "escandinavia-paises-e-quando-ir",
    title: "Escandinávia: o que é, países e quando ir",
    h1: "Escandinávia: o norte que reinventou o conceito de luxo",
    metaDescription:
      "O que é Escandinávia, países que a formam, melhor época para visitar e roteiros Create Travel por Noruega, Suécia e Dinamarca.",
    keywords: "escandinavia, o que e escandinavia, paises escandinavos, viagem escandinavia",
    intro:
      "Escandinávia, no sentido estrito, refere-se a três países: Noruega, Suécia e Dinamarca — unidos por línguas mutuamente inteligíveis, história compartilhada e uma cultura que aprendeu, antes de qualquer outro lugar do mundo, que luxo de verdade é silêncio, espaço e tempo.",
    sections: [
      {
        heading: "Escandinávia × Nórdicos: a diferença",
        paragraphs: [
          "Geograficamente, Escandinávia compreende Noruega, Suécia e Dinamarca. Países nórdicos é um conceito mais amplo, que inclui também Finlândia, Islândia e os territórios autônomos das Ilhas Faroe, Groenlândia e Åland.",
          "Na prática turística, muitos roteiros 'escandinavos' incluem a Finlândia (Helsinque, Lapônia) — totalmente justificável dada a proximidade cultural e geográfica.",
        ],
      },
      {
        heading: "O que ver em cada país",
        paragraphs: [
          "Noruega: fiordes (Geirangerfjord, Nærøyfjord), aurora boreal em Tromsø, viagem cênica de trem Bergen–Oslo, ilhas Lofoten.",
          "Suécia: Estocolmo arquipelágica, hotel de gelo em Jukkasjärvi, Gotemburgo e a costa oeste de mariscos, Lapônia sueca.",
          "Dinamarca: Copenhague design e gastronomia (Noma, Geranium), castelos de Helsingør (Hamlet), ilhas de Bornholm e Funen.",
        ],
      },
      {
        heading: "Melhor época",
        paragraphs: [
          "Junho a agosto: dias longuíssimos (sol da meia-noite ao norte do Círculo Polar Ártico), trilhas, fiordes navegáveis, ilhas acessíveis. É a alta temporada por excelência.",
          "Setembro a março: aurora boreal, hotel de gelo, esqui, atmosfera invernal — escolha esta janela se a aurora é o objetivo principal.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Combinamos os três países em 12 a 16 dias: Copenhague + jantar Michelin, voo a Bergen + fiordes em iate privativo, train cênico até Oslo, voo a Estocolmo + arquipélago, extensão opcional à Lapônia (aurora boreal e tradições sami).",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor cidade para começar?",
        a: "Copenhague é a porta de entrada mais natural para o Brasil — conexões diretas via Europa, infraestrutura excelente e cidade ideal para 2-3 dias de aclimatação.",
      },
      {
        q: "É caro viajar pela Escandinávia?",
        a: "Sim, é uma das regiões mais caras do mundo. Mas a relação custo-experiência é alta — hospedagens de design impecável, gastronomia premiada e natureza intocada.",
      },
      {
        q: "Brasileiros precisam de visto?",
        a: "Não. Os três países fazem parte do Espaço Schengen — até 90 dias com passaporte.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na Europa", href: "/destinos?c=europa" },
      { label: "Experiência: Aurora boreal", href: "/experiencias/aurora" },
    ],
    imageAiPrompt:
      "Editorial photograph of Norwegian fjord with traditional red cabins, mirror-like water, snow-capped peaks reflected, soft Nordic light, painterly minimalist composition, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Escandinávia",
  },
  {
    slug: "etiopia-mitos-historia-e-curiosidades",
    title: "Etiópia: mitos, história e curiosidades que poucos conhecem",
    h1: "Etiópia: o berço da humanidade e o império que nunca foi colonizado",
    metaDescription:
      "Lalibela, Vale do Omo, Lucy e a história do único país africano nunca colonizado. Curiosidades e roteiro Create Travel.",
    keywords: "etiopia, curiosidades etiopia, lalibela, vale do omo, viagem etiopia",
    intro:
      "A Etiópia tem 13 meses no calendário, está sete anos 'atrasada' em relação ao resto do mundo e foi o único país africano que nunca foi colonizado. Para começar a viagem é preciso aceitar uma coisa: nada do que você acha que sabe sobre a África se aplica aqui.",
    sections: [
      {
        heading: "O calendário, o relógio e o ano novo em setembro",
        paragraphs: [
          "Etiópia usa o calendário copta: 13 meses (12 de 30 dias + 1 de 5 ou 6), e está 7-8 anos atrás do calendário gregoriano. O ano novo é em setembro. O relógio começa no nascer do sol — '6 horas da manhã' no Brasil é 'meio-dia' lá.",
        ],
      },
      {
        heading: "Lalibela: as 11 igrejas esculpidas na rocha",
        paragraphs: [
          "No século XII, o rei Lalibela mandou escavar 11 igrejas inteiras a partir de blocos únicos de rocha vulcânica vermelha. Não foram construídas — foram subtraídas da pedra. São Patrimônio da Humanidade pela UNESCO e um dos locais cristãos mais sagrados da África, com peregrinos que percorrem centenas de quilômetros para a missa do Natal etíope (7 de janeiro).",
        ],
      },
      {
        heading: "Vale do Omo: 16 povos, 16 mundos",
        paragraphs: [
          "No sul, o Vale do Omo abriga grupos étnicos que mantêm tradições milenares — Mursi (com pratos labiais), Hamer (com pinturas corporais e o ritual de 'pular o boi'), Karo, Dassanech. Visitas exigem mediação ética rigorosa, que coordenamos com ONGs locais e guias antropólogos.",
        ],
      },
      {
        heading: "Lucy, o ancestral da humanidade",
        paragraphs: [
          "Em 1974, na região de Hadar, foi encontrado o esqueleto de uma Australopithecus afarensis de 3,2 milhões de anos — Lucy. Os fósseis estão no Museu Nacional em Adis Abeba, e o sítio arqueológico pode ser visitado em expedição estendida.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Adis Abeba + circuito histórico do norte (Lalibela, Gondar, Axum, Simien Mountains com geladas) + extensão opcional ao Vale do Omo. De 10 a 16 dias, com guia falando português, lodges selecionados e voos domésticos.",
        ],
      },
    ],
    faq: [
      {
        q: "É seguro viajar pela Etiópia?",
        a: "Sim, com curadoria e roteiro escolhido com atenção. As regiões turísticas tradicionais (rota histórica do norte) são tranquilas. Algumas áreas de fronteira exigem cautela — algo que monitoramos continuamente.",
      },
      {
        q: "Brasileiros precisam de visto?",
        a: "Sim. O visto eletrônico (e-visa) é simples e emitido online em poucos dias.",
      },
      {
        q: "Qual a melhor época?",
        a: "Outubro a março — temporada seca, ideal para a rota histórica e para o Vale do Omo.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na África", href: "/destinos?c=africa" },
      { label: "Experiência: Cultura & história", href: "/experiencias/cultura" },
    ],
    imageAiPrompt:
      "Rock-hewn churches of Lalibela Ethiopia, ancient cross-shaped Church of Saint George cut into red volcanic rock seen from above, golden morning light, cinematic editorial, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 6,
    category: "Cultura",
    whatsappName: "Roteiro Etiópia",
  },
  {
    slug: "cultura-africana-herancas-do-continente",
    title: "Cultura africana: heranças vivas de um continente diverso",
    h1: "Cultura africana: 54 países, mais de 2.000 línguas, uma raiz comum",
    metaDescription:
      "Música, gastronomia, espiritualidade, arte e tradições do continente africano. Curadoria Create Travel para viagens culturais autorais.",
    keywords: "cultura africana, herancas africanas, paises africanos, viagem cultural africa",
    intro:
      "Falar em 'cultura africana' no singular é, em si, um equívoco. A África abriga 54 países, mais de 2.000 línguas e uma diversidade étnica que faz da Europa um capítulo curto. Mas existem fios que atravessam o continente — e que também atravessam o Brasil.",
    sections: [
      {
        heading: "Música: do tambor à diáspora",
        paragraphs: [
          "Do gnawa marroquino aos atabaques iorubás da Bahia, da kizomba angolana ao afrobeat nigeriano de Fela Kuti, a música africana é a espinha dorsal de boa parte da música mundial contemporânea. Festivais como o Festival au Désert (Mali), Sauti za Busara (Zanzibar) e o Lake of Stars (Malawi) são pontos altos para mergulhar nessa cena.",
        ],
      },
      {
        heading: "Gastronomia: temperos que viajaram com a história",
        paragraphs: [
          "Tagines marroquinos, jollof rice da África Ocidental, injera etíope, braai sul-africano, ezogelin turca-de-influência-africana, e — claro — o azeite de dendê, a pimenta e o quiabo que cruzaram o Atlântico e definem a cozinha baiana.",
        ],
      },
      {
        heading: "Espiritualidade: candomblé, vodu, ifá",
        paragraphs: [
          "As religiões iorubás (Nigéria, Benin) deram origem ao candomblé brasileiro, à santería cubana e ao vodu haitiano. Visitar Ouidah, no Benin, ou Oyo, na Nigéria — terras dos orixás — é uma jornada de raízes profundas para muitos brasileiros.",
        ],
      },
      {
        heading: "Arte contemporânea africana em alta",
        paragraphs: [
          "Bienal de Dakar, Zeitz MOCAA em Cape Town, Fundação Sindika Dokolo em Luanda. A arte africana contemporânea vive um momento de reconhecimento internacional sem precedentes — e visitá-la é parte essencial de uma viagem cultural ao continente.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Combinamos circuitos culturais como Marrocos imperial, Senegal + Benin (rota dos orixás), Etiópia rota histórica, África do Sul (Cape Town arte + Joanesburgo Apartheid Museum) e Zanzibar (cultura suaíli). Sempre com mediadores acadêmicos e contato direto com artistas locais.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual país africano começar?",
        a: "Marrocos, África do Sul ou Quênia/Tanzânia são portas de entrada confortáveis. Etiópia, Senegal e Namíbia são saltos mais autorais.",
      },
      {
        q: "Quantos países visitar em uma única viagem?",
        a: "Recomendamos no máximo dois. As distâncias internas são grandes e cada país merece tempo. Profundidade vale mais do que checklist.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na África", href: "/destinos?c=africa" },
      { label: "Experiência: Cultura & história", href: "/experiencias/cultura" },
    ],
    imageAiPrompt:
      "African market scene in Marrakech, vibrant spices and textiles in clay bowls, warm golden light, painterly editorial composition, no identifiable faces, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Cultura",
    whatsappName: "Roteiro cultural África",
  },
  {
    slug: "paises-africanos-imperdiveis",
    title: "10 países africanos imperdíveis para natureza e cultura",
    h1: "10 países africanos que mudam quem viaja",
    metaDescription:
      "Da Namíbia ao Quênia, do Marrocos a Madagascar — seleção autoral Create Travel dos 10 países africanos imperdíveis.",
    keywords: "paises africanos, paises africanos imperdiveis, melhores paises africa",
    intro:
      "A África não é destino — é continente. E escolher por onde começar é o primeiro passo de toda jornada autoral. Nossa seleção privilegia países que entregam autenticidade, segurança operacional e experiências que justificam a distância.",
    sections: [
      {
        heading: "Os 10 países que recomendamos",
        paragraphs: [
          "1. Namíbia — dunas vermelhas, Etosha, povo himba. Logística impecável.",
          "2. África do Sul — Cape Town, rota dos jardins, safári em Kruger ou Madikwe.",
          "3. Quênia — Masai Mara na Grande Migração, lago Nakuru, conservação.",
          "4. Tanzânia — Serengeti, Ngorongoro, Zanzibar para descansar depois.",
          "5. Marrocos — Marrakech, Fez, Saara, Atlas e costa atlântica.",
          "6. Etiópia — Lalibela, Simien, Vale do Omo. História profunda.",
          "7. Madagascar — biodiversidade única no planeta.",
          "8. Botsuana — Delta do Okavango, safári em mokoro, exclusividade total.",
          "9. Ruanda — gorilas-da-montanha no Parque Nacional dos Vulcões.",
          "10. Egito — pirâmides, Vale dos Reis, cruzeiro no Nilo.",
        ],
      },
      {
        heading: "Como combinar",
        paragraphs: [
          "Primeira viagem à África: África do Sul + extensão Vitória Falls ou Madikwe. Amantes de fauna: Quênia + Tanzânia + Zanzibar. Cultura profunda: Marrocos + Egito ou Etiópia solo. Aventura premium: Namíbia + Botsuana. Algo único: Madagascar ou Ruanda.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual o país africano mais seguro?",
        a: "Namíbia, Botsuana, Ruanda e África do Sul (zonas turísticas) lideram em estabilidade e maturidade do setor turístico.",
      },
      {
        q: "Quanto custa uma viagem à África?",
        a: "Varia enormemente. Marrocos é acessível; Botsuana e Ruanda estão no topo do luxo mundial. Roteiros típicos Create Travel partem de 15 mil reais por pessoa, sem aéreo internacional.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na África", href: "/destinos?c=africa" },
    ],
    imageAiPrompt:
      "Serengeti Tanzania at sunset, acacia tree silhouette against deep orange African sky, distant elephants, cinematic editorial, painterly, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro África imperdível",
  },
  {
    slug: "aurora-boreal-canada-como-ver",
    title: "Aurora boreal no Canadá: como ver e melhores lugares",
    h1: "Aurora boreal no Canadá: o céu que dança sobre Yukon e Northwest Territories",
    metaDescription:
      "Yellowknife, Whitehorse, melhor época e roteiros autorais Create Travel para ver a aurora boreal no Canadá.",
    keywords: "aurora boreal canada, ver aurora boreal canada, melhor lugar aurora boreal",
    intro:
      "O Canadá fica praticamente debaixo da Auroral Oval — a faixa do hemisfério norte onde as auroras boreais acontecem com maior frequência e intensidade. Em algumas regiões, há até 240 noites de aurora por ano. Estar no lugar certo, na época certa, é quase garantia de ver o céu dançar.",
    sections: [
      {
        heading: "Os melhores destinos",
        paragraphs: [
          "Yellowknife (Northwest Territories): a 'capital mundial da aurora'. Céu seco, plano e atividade auroral altíssima. Aurora Village oferece tipis aquecidos para espera.",
          "Whitehorse (Yukon): paisagens montanhosas, fontes termais (Takhini), trenó com cães de raça husky e auroras frequentes.",
          "Churchill (Manitoba): combina aurora boreal com ursos polares em novembro — combinação rara no mundo.",
          "Jasper National Park (Alberta): Reserva Internacional de Céu Escuro, ideal para fotografia.",
        ],
      },
      {
        heading: "Quando ir",
        paragraphs: [
          "Meados de agosto a meados de abril, com pico entre dezembro e março — máxima escuridão e atividade solar mais intensa. Reserve com pelo menos 4 noites no destino: a aurora depende de céu limpo e atividade solar, e quanto mais noites, maior a chance.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Combinamos Yellowknife (3-4 noites em lodge especializado em aurora) + Whitehorse (passeio de cães, fontes termais, snowshoeing) + extensão Banff/Jasper. De 8 a 12 dias, com voos internos, equipamento térmico fornecido e fotógrafo profissional opcional para registrar o momento.",
        ],
      },
    ],
    faq: [
      {
        q: "É garantido ver a aurora?",
        a: "Não há garantia — é fenômeno natural. Mas com 4 noites em Yellowknife na alta temporada, a chance ultrapassa 90%.",
      },
      {
        q: "Frio insuportável?",
        a: "Frio extremo (até -30°C em janeiro), mas com equipamento certo é totalmente confortável. Nossas hospedagens fornecem botas, parkas e calças térmicas.",
      },
      {
        q: "Brasileiros precisam de visto?",
        a: "Sim. eTA (autorização eletrônica) ou visto convencional, dependendo do caso. Conduzimos o processo.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na América do Norte", href: "/destinos?c=america-do-norte" },
      { label: "Experiência: Aurora boreal", href: "/experiencias/aurora" },
    ],
    imageAiPrompt:
      "Aurora borealis dancing green and violet over snowy frozen lake in Yellowknife Canada, pine forest silhouette, starry sky, cinematic painterly editorial, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Aurora Boreal Canadá",
  },
  {
    slug: "patagonia-argentina-vs-chilena",
    title: "Patagônia argentina ou chilena: qual escolher?",
    h1: "Patagônia argentina × chilena: dois mundos, uma mesma cordilheira",
    metaDescription:
      "Diferenças entre a Patagônia argentina e a chilena, melhor época, roteiros e como combinar os dois lados — guia Create Travel.",
    keywords: "patagonia, patagonia argentina, patagonia chilena, viagem patagonia",
    intro:
      "A Patagônia é uma só geografia partida por uma fronteira política. De cada lado dos Andes, o vento conta uma história diferente. Escolher entre a Patagônia argentina e a chilena é, na prática, escolher entre estepe e fiorde, glaciar e granito, Buenos Aires e Santiago como porta de entrada.",
    sections: [
      {
        heading: "Patagônia argentina: estepe, glaciares, Bariloche",
        paragraphs: [
          "El Calafate e o Glaciar Perito Moreno (um dos poucos do mundo em equilíbrio), El Chaltén com o Fitz Roy e Cerro Torre para trekking sério, Bariloche e a Rota dos Sete Lagos, Península Valdés para baleia franca-austral (junho a dezembro) e Ushuaia como porta para a Antártida.",
        ],
      },
      {
        heading: "Patagônia chilena: Torres del Paine, fiordes, Carretera",
        paragraphs: [
          "Torres del Paine — possivelmente o parque nacional mais espetacular do planeta, com o circuito W de 5 dias entre granito, lagos turquesa e glaciares. Puerto Natales e Punta Arenas como bases. Mais ao norte, a Carretera Austral atravessa florestas temperadas, vulcões e o Parque Pumalín. Chiloé, com sua cultura única, fecha o sul.",
        ],
      },
      {
        heading: "Qual escolher",
        paragraphs: [
          "Para trekking icônico: chilena (Torres del Paine).",
          "Para glaciares acessíveis sem trilha: argentina (Perito Moreno).",
          "Para fauna marinha: argentina (Valdés).",
          "Para combinar gastronomia + paisagem premium: argentina (Bariloche, Mendoza próxima).",
          "Para viver os fiordes profundos: chilena (Carretera Austral).",
          "Ideal: combinar os dois lados em 12-15 dias, atravessando a fronteira entre El Calafate e Torres del Paine.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Buenos Aires → El Calafate (Perito Moreno + Estancia Cristina) → travessia terrestre para Torres del Paine (Explora ou Tierra Patagonia) → Punta Arenas → opcional Antártida ou Ushuaia + Bariloche. De 12 a 18 dias.",
        ],
      },
    ],
    faq: [
      {
        q: "Quando ir para a Patagônia?",
        a: "Novembro a março (verão austral). Janeiro e fevereiro são pico — reservas com antecedência são essenciais. Outubro e abril têm menos gente e luz mais bonita.",
      },
      {
        q: "Preciso fazer trekking pesado?",
        a: "Não. Há hospedagens de luxo com day hikes leves e atividades alternativas (cavalgada, navegação, fauna). Curamos cada roteiro pelo perfil do viajante.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na América do Sul", href: "/destinos?c=america-do-sul" },
      { label: "Experiência: Trekking", href: "/experiencias/trekking" },
    ],
    imageAiPrompt:
      "Torres del Paine Chile at sunrise, three iconic granite towers glowing orange-pink above turquoise glacial lake, dramatic painterly editorial, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 6,
    category: "Destino",
    whatsappName: "Roteiro Patagônia",
  },
  {
    slug: "machu-picchu-onde-fica-e-como-chegar",
    title: "Machu Picchu: onde fica, como chegar e melhor época",
    h1: "Machu Picchu: 2.430 metros, 600 anos, uma única vida para visitar",
    metaDescription:
      "Onde fica Machu Picchu, como chegar (trem ou Caminho Inca), ingressos, melhor época e roteiro autoral Create Travel pelo Vale Sagrado.",
    keywords: "machu picchu, machu picchu onde fica, como chegar machu picchu",
    intro:
      "Machu Picchu fica em uma cumeeira de granito a 2.430 metros de altitude, na cordilheira dos Andes peruanos, sobre o vale do rio Urubamba. Construído pelos incas no século XV e redescoberto pelo mundo ocidental em 1911, é Patrimônio Mundial e uma das experiências mais arrebatadoras que uma viagem oferece.",
    sections: [
      {
        heading: "Onde fica exatamente",
        paragraphs: [
          "Na região de Cusco, Peru, dentro do Santuário Histórico de Machu Picchu. O ponto de partida é Cusco (3.400 m de altitude), e o povoado-base é Aguas Calientes (Machu Picchu Pueblo), a 6 km do sítio.",
        ],
      },
      {
        heading: "Como chegar",
        paragraphs: [
          "Trem panorâmico: a opção mais comum. PeruRail Hiram Bingham (luxo, com almoço e champagne), Vistadome (panorâmico de janelas amplas) ou Expedition (econômico). Saem de Poroy ou Ollantaytambo, no Vale Sagrado.",
          "Caminho Inca: 4 dias de trekking pela trilha original, chegando ao sítio pela Porta do Sol ao amanhecer. Exige reserva com 6 meses de antecedência (vagas limitadas) e bom preparo físico.",
          "Trilhas alternativas: Salkantay (5 dias), Lares (4 dias) ou Inca Jungle (mais aventura).",
        ],
      },
      {
        heading: "Melhor época",
        paragraphs: [
          "Maio a setembro: estação seca, céu claro, melhores fotos. Junho e julho são pico — reserve ingressos e trens com 3 meses de antecedência. Abril, maio e outubro têm menos gente, paisagem mais verde e clima ainda bom.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Lima (1 noite) → Cusco com aclimatação (2 noites em Belmond Palacio Nazarenas ou Inkaterra La Casona) → Vale Sagrado (2 noites em Inkaterra Hacienda Urubamba) → Machu Picchu via Hiram Bingham (1 noite em Sanctuary Lodge, único hotel ao lado das ruínas) → retorno a Cusco. De 7 a 10 dias, com guia arqueólogo privativo.",
        ],
      },
    ],
    faq: [
      {
        q: "Preciso comprar ingresso antecipado?",
        a: "Sim, e cada vez mais. Os ingressos têm cotas diárias divididas por circuitos e horários. Operamos toda a reserva e logística.",
      },
      {
        q: "Mal de altitude é grave?",
        a: "Pode ser desconfortável. Por isso aclimatamos em Cusco (3.400 m) por 2 noites antes de subir para outras altitudes. Hospedagens oferecem oxigênio e chá de coca.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na América do Sul", href: "/destinos?c=america-do-sul" },
    ],
    imageAiPrompt:
      "Machu Picchu Peru at sunrise, iconic Inca citadel with Huayna Picchu peak behind, morning mist rising from valley, golden light, cinematic editorial painterly, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Machu Picchu",
  },
  {
    slug: "bali-guia-essencial",
    title: "Bali: guia essencial — onde ficar, o que ver, quando ir",
    h1: "Bali: a ilha onde a espiritualidade ainda organiza o dia",
    metaDescription:
      "Ubud, Uluwatu, Canggu, Nusa Penida. Guia autoral Create Travel para Bali — onde ficar, o que ver e como viver a ilha sem turistificação.",
    keywords: "bali, viagem bali, roteiro bali, o que fazer bali",
    intro:
      "Bali tem 4 milhões de habitantes e recebe 6 milhões de turistas por ano. A boa notícia: dá para viver a ilha verdadeira — templos ao amanhecer, cerimônias hindus, arrozais de Tegalalang vazios, surf em pontos remotos — se você souber onde ficar e em que horários se mover.",
    sections: [
      {
        heading: "Onde ficar em Bali",
        paragraphs: [
          "Ubud: coração cultural. Arrozais, templos, ioga, gastronomia plant-based. Hospedagens como Bambu Indah, Capella ou Four Seasons Sayan.",
          "Uluwatu (sul): falésias, surf, templo no penhasco, jantares cinematográficos. Bulgari Resort, Six Senses.",
          "Canggu: vibe descontraída, surfistas, cafés. Ótimo para estadia longa, menos para 'férias clássicas'.",
          "Nusa Penida (ilha vizinha): praias selvagens, mantas, paisagens cinematográficas. 1-2 noites bastam.",
        ],
      },
      {
        heading: "Experiências autênticas",
        paragraphs: [
          "Cerimônia em templo familiar com sarong emprestado (curadoria nossa). Aula de cozinha balinesa em casa de família. Caminhada ao amanhecer no Monte Batur (vulcão ativo). Sessão com healer tradicional. Jantar pago em copos de coco verde em restaurante construído sobre arrozal.",
        ],
      },
      {
        heading: "Quando ir",
        paragraphs: [
          "Abril a outubro: estação seca, ideal. Junho e julho são pico (também alta temporada europeia). Setembro e início de outubro são o sweet spot — clima bom e menos gente.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Ubud (3 noites) + Sidemen ou Munduk (2 noites no interior autêntico) + Uluwatu (3 noites) + extensão opcional Nusa Penida ou Komodo. De 9 a 14 dias, com motorista privativo e guia falando português.",
        ],
      },
    ],
    faq: [
      {
        q: "Preciso de visto para Bali (Indonésia)?",
        a: "Sim. Visto de chegada (VOA) pago em dólar ou euro, válido por 30 dias e prorrogável.",
      },
      {
        q: "Bali é seguro?",
        a: "Sim. Crime contra turistas é raro. Atenção apenas a scooters (não recomendamos para visitantes) e barracudas-cambistas em pontos turísticos.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na Ásia", href: "/destinos?c=asia" },
      { label: "Experiência: Bem-estar", href: "/experiencias/bem-estar" },
    ],
    imageAiPrompt:
      "Ubud Bali rice terraces at sunrise, lush green tiered paddies with palm trees, morning mist, soft golden light, painterly editorial, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Bali",
  },
  {
    slug: "cidades-historicas-de-minas-gerais",
    title: "Cidades históricas de Minas Gerais: roteiro pelos 7 essenciais",
    h1: "Cidades históricas de Minas: sete tesouros do barroco brasileiro",
    metaDescription:
      "Ouro Preto, Tiradentes, Diamantina, Mariana, Congonhas, São João del-Rei e Sabará. Roteiro Create Travel pelo barroco mineiro.",
    keywords: "cidades historicas de minas gerais, ouro preto, tiradentes, barroco mineiro",
    intro:
      "No século XVIII, Minas Gerais foi o coração da economia colonial e o palco do barroco brasileiro mais sofisticado já produzido. Hoje, suas cidades históricas guardam igrejas com talha dourada, ladeiras de pedra, fazendas de café, mineiros que cozinham como ninguém — e Aleijadinho em quase toda esquina.",
    sections: [
      {
        heading: "Os sete imperdíveis",
        paragraphs: [
          "Ouro Preto — Patrimônio Mundial UNESCO. Igrejas de Aleijadinho, Mina do Chico Rei, gastronomia premiada. Mínimo 3 noites.",
          "Tiradentes — charme bucólico, gastronomia internacional (Festival Gastronômico em agosto), Maria Fumaça até São João del-Rei.",
          "Diamantina — terra de JK e Chica da Silva. Mais distante, menos visitada, autêntica.",
          "Mariana — primeira capital, vizinha de Ouro Preto. Mina de Passagem (subterrânea, navegável).",
          "Congonhas — os Doze Profetas de Aleijadinho, esculturas em pedra-sabão consideradas obras-primas mundiais.",
          "São João del-Rei — Maria Fumaça histórica, gastronomia, base para Tiradentes.",
          "Sabará — proximidade de BH, Igreja de Nossa Senhora do Ó (com talha chinoiserie).",
        ],
      },
      {
        heading: "Como combinar",
        paragraphs: [
          "Roteiro clássico (5-7 dias): BH → Sabará → Ouro Preto (3 noites) → Mariana → Tiradentes (2 noites) → São João del-Rei → BH.",
          "Extensão profunda (+3 dias): inclusão de Diamantina via avião BH–Diamantina.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Operamos com motorista-guia em carro premium, hospedagens-boutique (Solar do Rosário em Ouro Preto, Pousada Solar Cosme Damião em Tiradentes), restaurantes selecionados, aulas de cozinha mineira com chefs locais e jantares privativos em fazendas restauradas.",
        ],
      },
    ],
    faq: [
      {
        q: "Quando ir?",
        a: "Abril a setembro (estação seca). Inverno (junho-agosto) é especialmente charmoso — fogueiras, mineira quentinha, queijos serra da canastra. Evite janeiro/fevereiro (chuva).",
      },
      {
        q: "É possível ir só de transporte público?",
        a: "Possível, mas trabalhoso. Recomendamos motorista privativo: distâncias curtas, estradas sinuosas e paradas culturais frequentes.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil por estado: Minas Gerais", href: "/brasil/minas-gerais" },
      { label: "Experiência: Cultura & história", href: "/experiencias/cultura" },
    ],
    imageAiPrompt:
      "Ouro Preto Brazil cityscape, baroque colonial churches and red-roofed houses on green hills, golden afternoon light, painterly editorial, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Roteiro",
    whatsappName: "Roteiro Cidades Históricas Minas",
  },
  {
    slug: "lugares-mais-frios-do-mundo",
    title: "Os lugares mais frios do mundo que você pode visitar",
    h1: "Os lugares mais frios do mundo — e por que vale conhecer",
    metaDescription:
      "Oymyakon, Yakutsk, Yellowknife, Antártida. Lugares mais frios do mundo e como visitá-los com curadoria Create Travel.",
    keywords: "lugares mais frios do mundo, lugares mais frios, viagem ao frio extremo",
    intro:
      "Existe uma categoria de viajante que procura silêncio absoluto. E silêncio absoluto, no planeta Terra, geralmente vem com termômetros negativos extremos e poucas pessoas dispostas a estar ali.",
    sections: [
      {
        heading: "Os 7 lugares mais frios visitáveis",
        paragraphs: [
          "1. Oymyakon (Sibéria, Rússia) — vilarejo permanentemente habitado mais frio do mundo, com mínima registrada de -71,2°C.",
          "2. Yakutsk (Sibéria) — maior cidade do mundo construída sobre permafrost. Inverno chega a -50°C.",
          "3. Verkhoyansk (Rússia) — disputa com Oymyakon o título de polo do frio.",
          "4. Antártida — estações de pesquisa abertas a expedições. Verão austral (nov-fev) com -2 a -20°C.",
          "5. Yellowknife (Canadá) — base para aurora boreal. Janeiro a -35°C.",
          "6. Eismitte (Groenlândia) — interior coberto de gelo.",
          "7. International Falls (Minnesota, EUA) — apelidada de 'icebox of the nation'.",
        ],
      },
      {
        heading: "Como visitar com conforto",
        paragraphs: [
          "Não é loucura — é planejamento. Hospedagens preparadas (aquecimento robusto, oxigênio onde necessário), equipamento térmico de qualidade fornecido, guias treinados para emergências. Combinamos frio extremo com experiências marcantes: aurora boreal, ursos polares, trenó com cães husky.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual o destino frio mais acessível para brasileiros?",
        a: "Yellowknife (Canadá) — voo direto via Toronto, infraestrutura turística madura e combinação imbatível com aurora boreal.",
      },
    ],
    relatedDestinations: [
      { label: "Diário: Aurora boreal no Canadá", href: "/diario/aurora-boreal-canada-como-ver" },
    ],
    imageAiPrompt:
      "Frozen Siberian village in winter, wooden houses covered in snow, icy fog, soft pink dawn light, painterly editorial composition, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 4,
    category: "Curiosidades",
    whatsappName: "Roteiro destinos frios",
  },
  {
    slug: "ilhas-do-brasil-imperdiveis",
    title: "Ilhas do Brasil: 7 imperdíveis para beleza rara",
    h1: "Sete ilhas brasileiras que valem a viagem inteira",
    metaDescription:
      "Fernando de Noronha, Ilha Grande, Boipeba, Tinharé, Marajó, Lençóis, Mel — curadoria autoral Create Travel das ilhas mais belas do Brasil.",
    keywords: "ilhas do brasil, melhores ilhas brasil, ilhas brasileiras",
    intro:
      "O Brasil tem mais de 2.000 ilhas. Algumas, como Noronha, são internacionalmente célebres. Outras vivem sob proteção de quem chega — com pousadas pequenas, sem carros, sem agitação. Esta é a seleção das sete que recomendamos sem hesitar.",
    sections: [
      {
        heading: "As sete imperdíveis",
        paragraphs: [
          "1. Fernando de Noronha (PE) — Patrimônio Natural UNESCO. Praia do Sancho eleita várias vezes a mais bonita do mundo. Acesso controlado e taxa diária preservam.",
          "2. Ilha Grande (RJ) — Lagoa Azul, praia de Lopes Mendes, Mata Atlântica preservada, sem carros.",
          "3. Boipeba (BA) — irmã caçula e menos turística de Morro de São Paulo. Vilarejo de pescadores, praias quase desertas.",
          "4. Tinharé / Morro de São Paulo (BA) — clássico baiano, melhor durante semana e fora da alta temporada.",
          "5. Marajó (PA) — maior ilha fluviomarinha do mundo. Búfalos, queijo de búfala, praias do Amazonas.",
          "6. Lençóis Maranhenses (na verdade não é ilha, mas Atins é) — vilarejo isolado, dunas e lagoas.",
          "7. Ilha do Mel (PR) — Mata Atlântica, sem carros, perfeita para casais.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Combinamos: Noronha solo (5-7 noites em Pousada Maravilha ou Nannai Noronha). Bahia: Boipeba + Tinharé (6 noites). Paraty + Ilha Grande (5 noites). Marajó como extensão de roteiro Amazônia.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a ilha brasileira mais paradisíaca?",
        a: "Fernando de Noronha — sem competição em águas cristalinas, fauna marinha e paisagens. Mas exige reserva com antecedência e preparo de bolso.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil por estado", href: "/brasil" },
      { label: "Experiência: Praias & ilhas", href: "/experiencias/praia" },
    ],
    imageAiPrompt:
      "Praia do Sancho Fernando de Noronha Brazil, turquoise crescent bay from cliff above, dramatic dark volcanic cliffs and white sand, painterly editorial, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Ilhas do Brasil",
  },
  {
    slug: "brasil-alem-do-litoral-guia-completo",
    title: "Descobrindo o Brasil além do litoral — guia completo Create Travel",
    h1: "O Brasil que começa onde a praia termina",
    metaDescription:
      "Amazônia, Pantanal, Lençóis, Jalapão, Chapadas, Marajó e Roraima. Guia autoral Create Travel para descobrir o Brasil além do litoral.",
    keywords: "brasil alem do litoral, brasil interior, ecoturismo brasil, brasil natureza, viagem brasil interior",
    intro:
      "O Brasil tem 7.491 km de costa — e quase nove milhões de quilômetros quadrados de tudo o que não é praia. É no interior que o país guarda suas paisagens mais improváveis: um deserto branco com lagoas turquesa, savanas alagadas com a maior concentração de fauna das Américas, chapadas com cânions e cachoeiras de água preta, ilhas fluviais maiores que países inteiros e uma montanha-mesa pré-cambriana que inspirou Conan Doyle.",
    sections: [
      {
        heading: "Por que ir além do litoral",
        paragraphs: [
          "A maioria dos brasileiros conhece o Brasil pela orla. Mas a alma do país está no Cerrado, na Amazônia, no Pantanal e nas chapadas — biomas únicos no planeta, com biodiversidade e paisagens que rivalizam com qualquer destino africano ou asiático em termos de impacto visual.",
          "O viajante autoral encontra aqui o que procurava lá fora: silêncio absoluto, fauna selvagem em estado puro, comunidades tradicionais vivas, gastronomia regional sofisticada e hospedagens pé-na-areia substituídas por lodges ribeirinhos e pousadas-fazenda de altíssimo nível.",
        ],
      },
      {
        heading: "Os 10 destinos que definem o Brasil interior",
        paragraphs: [
          "1. Amazônia — a maior floresta tropical do planeta, com lodges flutuantes e encontros com botos cor-de-rosa.",
          "2. Pantanal e Bonito — a maior planície alagada do mundo + as águas mais transparentes do Brasil.",
          "3. Lençóis Maranhenses — dunas brancas e lagoas turquesa que aparecem entre maio e setembro.",
          "4. Jalapão — fervedouros, cachoeiras e dunas alaranjadas no coração do Tocantins.",
          "5. Chapada das Mesas — Maranhão profundo, com cachoeiras e formações rochosas pouco visitadas.",
          "6. Chapada Diamantina — Bahia interior: cânions, grutas com lagos azuis e trilhas clássicas.",
          "7. Chapada dos Guimarães — pôr-do-sol mais famoso do Centro-Oeste, a 1h de Cuiabá.",
          "8. Pantanal Norte e Nobres — Transpantaneira, onça-pintada e flutuação em águas cristalinas.",
          "9. Belém, Marajó e Alter do Chão — Pará triplo: gastronomia, búfalos e a 'praia caribenha' do rio Tapajós.",
          "10. Monte Roraima — o tepui que parece outro planeta, na tríplice fronteira Brasil-Venezuela-Guiana.",
        ],
      },
      {
        heading: "Como a Create Travel desenha estas viagens",
        paragraphs: [
          "Cada destino do interior brasileiro exige logística cirúrgica — voos regionais, transfers 4x4, guias locais credenciados e hospedagens com poucos quartos que esgotam meses antes. Nossa curadoria combina os melhores lodges (Anavilhanas, Cristalino, Caiman, Refúgio Ecológico do Pantanal), guias-naturalistas que falam o idioma do bioma e roteiros que respeitam a janela climática certa de cada região.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para viajar pelo interior do Brasil?",
        a: "Depende do bioma. Lençóis: maio a setembro (lagoas cheias). Pantanal: julho a outubro (seca, fauna concentrada). Amazônia: ano todo, com nuances. Jalapão e Chapadas: maio a setembro (estiagem).",
      },
      {
        q: "É seguro viajar pelo interior do Brasil?",
        a: "Sim, com curadoria. Operamos com receptivos locais credenciados, hospedagens selecionadas e logística testada — exatamente como fazemos para Madagascar ou Namíbia.",
      },
      {
        q: "Posso combinar mais de um destino na mesma viagem?",
        a: "Sim. Combinações clássicas: Lençóis + Jalapão (10-12 dias), Pantanal + Bonito (8-10 dias), Chapada Diamantina + Salvador (8 dias), Belém + Marajó + Alter do Chão (10 dias).",
      },
    ],
    relatedDestinations: [
      { label: "Destinos no Brasil", href: "/brasil" },
      { label: "Brasil Aventura", href: "/brasil-aventura" },
      { label: "Brasil Vivo", href: "/brasil-vivo" },
    ],
    imageAiPrompt:
      "Aerial editorial shot of Lençóis Maranhenses Brazil, endless white sand dunes with turquoise freshwater lagoons between them, soft late afternoon light, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 7,
    category: "Roteiro",
    whatsappName: "Roteiro Brasil além do litoral",
  },
  {
    slug: "amazonia-guia-completo-de-viagem",
    title: "Amazônia: guia completo de viagem, lodges e melhor época",
    h1: "Amazônia: navegar o maior rio do mundo dentro da maior floresta do mundo",
    metaDescription:
      "Quando ir à Amazônia, melhores lodges, encontro das águas, Anavilhanas, Mamirauá e roteiros autorais Create Travel.",
    keywords: "amazonia, viagem amazonia, lodge amazonia, manaus, anavilhanas, mamiraua",
    intro:
      "A Amazônia ocupa 60% do território brasileiro, abriga 10% de toda a biodiversidade do planeta e produz, sozinha, parte do oxigênio que você respira agora. Visitá-la é entrar no maior sistema vivo da Terra — e descobrir que o silêncio da floresta tem trilha sonora própria: bugios ao amanhecer, chuva sobre o dossel, motor à diesel cruzando o rio à noite.",
    sections: [
      {
        heading: "Por onde começar: Manaus, Belém ou Santarém",
        paragraphs: [
          "Manaus é a porta de entrada clássica — voos diretos do Brasil inteiro, encontro das águas (Rio Negro × Solimões), acesso ao arquipélago de Anavilhanas e à Reserva Mamirauá. É a base ideal para quem quer lodges flutuantes ou cruzeiros expedicionários pelo Rio Negro.",
          "Belém abre a Amazônia oriental: Ver-o-Peso, gastronomia paraense (Casa do Saulo, Remanso do Bosque), Ilha de Marajó e conexão para Alter do Chão.",
          "Santarém, no Pará, é a base para Alter do Chão e a Floresta Nacional do Tapajós — uma das águas mais limpas da bacia amazônica.",
        ],
      },
      {
        heading: "Os melhores lodges e cruzeiros",
        paragraphs: [
          "Anavilhanas Jungle Lodge (Rio Negro) e Mirante do Gavião combinam arquitetura premiada com excursões guiadas no maior arquipélago fluvial do mundo.",
          "Cristalino Lodge, no sul do Amazonas, é referência mundial em birdwatching — mais de 600 espécies catalogadas.",
          "Uakari Floating Lodge, em Mamirauá (AM), opera dentro de reserva sustentável com avistamento quase garantido de macaco-uacari e botos-cor-de-rosa.",
          "Cruzeiros de expedição (Tucano, Jacaré-Açu) permitem dormir flutuando e acordar todo dia em um igarapé diferente.",
        ],
      },
      {
        heading: "Cheia × seca: quando ir",
        paragraphs: [
          "Cheia (fevereiro a junho): rios transbordam, a floresta inunda, canoas entram entre árvores — paisagem dos sonhos, mas trilhas curtas.",
          "Seca (julho a novembro): praias fluviais aparecem, trilhas longas, melhor para fauna e pesca esportiva.",
          "Para Mamirauá e Anavilhanas, a janela de transição (maio-junho e setembro-outubro) costuma oferecer o melhor dos dois mundos.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Combinamos 5 a 7 noites em lodge selecionado + extensão a Alter do Chão ou Mamirauá. Voos internos curados, transfers em voadeira privativa, guia-naturalista bilíngue e jantares com chefs amazônicos. De 7 a 12 dias.",
        ],
      },
    ],
    faq: [
      {
        q: "É seguro visitar a Amazônia?",
        a: "Sim, dentro das regiões turísticas e com operação selecionada. Hospedagens credenciadas, transfers privativos e equipe local treinada — a Amazônia turística é uma das experiências mais seguras do Brasil.",
      },
      {
        q: "Preciso de vacina para visitar a Amazônia?",
        a: "Sim. Febre amarela é obrigatória (mínimo 10 dias antes da viagem). Recomendamos também repelente forte e medicação para profilaxia se for área de malária — coordenamos orientação médica completa.",
      },
      {
        q: "Quantos dias preciso na Amazônia?",
        a: "Mínimo 4 noites em lodge para sentir o ritmo da floresta. Ideal: 6 a 8 noites, combinando dois ecossistemas (igarapé + várzea ou Rio Negro + Tapajós).",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Amazonas", href: "/brasil/amazonas" },
      { label: "Brasil — Pará", href: "/brasil/para" },
      { label: "Experiência: Natureza", href: "/experiencias/natureza" },
    ],
    imageAiPrompt:
      "Aerial editorial view of Amazon rainforest at sunrise, mist rising over endless green canopy with winding dark river, soft golden light, cinematic painterly, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 7,
    category: "Destino",
    whatsappName: "Roteiro Amazônia",
  },
  {
    slug: "pantanal-e-bonito-guia-de-viagem",
    title: "Pantanal e Bonito: guia de viagem, melhor época e roteiros",
    h1: "Pantanal e Bonito: a dupla que ninguém deveria separar",
    metaDescription:
      "Como combinar Pantanal e Bonito, melhor época, onça-pintada, flutuação em rios cristalinos e roteiros autorais Create Travel.",
    keywords: "pantanal, bonito ms, pantanal e bonito, viagem pantanal, onca pintada, gruta lago azul",
    intro:
      "Pantanal e Bonito ficam no mesmo estado (Mato Grosso do Sul), partilham o aeroporto de Campo Grande e oferecem experiências complementares: o Pantanal é a maior planície alagada do mundo, com a maior concentração de fauna das Américas; Bonito é o santuário das águas cristalinas, com mais visibilidade subaquática que muito mar de Caribe.",
    sections: [
      {
        heading: "Pantanal: onça-pintada, jacarés e safári brasileiro",
        paragraphs: [
          "O Pantanal cobre 150 mil km² entre Brasil, Bolívia e Paraguai. Na seca (julho a outubro), a fauna se concentra nas baías remanescentes e o avistamento é quase garantido: jacarés aos milhares, capivaras, tuiuiús, ariranhas e — a estrela absoluta — a onça-pintada, com mais de 80% de probabilidade de avistamento na região de Porto Jofre.",
          "Hospedagens de referência: Caiman Ecological Refuge (sul, base do Projeto Onçafari), Pousada Aguapé, Refúgio Ecológico Caiman e os flotéis de Porto Jofre para safári de onça pelo Rio Cuiabá.",
        ],
      },
      {
        heading: "Bonito: flutuação em água cristalina",
        paragraphs: [
          "Bonito é o destino brasileiro mais maduro em ecoturismo — todas as atividades são reguladas, com voucher individual e número limitado diário. Os imperdíveis: flutuação no Rio Sucuri ou Prata (visibilidade de até 50 metros), Gruta do Lago Azul (caverna com lago de azul ultramarino), Buraco das Araras (sumidouro com araras-vermelhas) e Abismo Anhumas (rapel de 72m até um lago subterrâneo).",
        ],
      },
      {
        heading: "Como combinar os dois",
        paragraphs: [
          "Roteiro clássico de 8 a 10 dias: voo a Campo Grande, transfer ao sul do Pantanal (3 noites em Caiman), traslado terrestre a Bonito (3-4 noites), retorno por Campo Grande. Alternativa: incluir Pantanal Norte (Porto Jofre) via Cuiabá em alta temporada de onça.",
        ],
      },
      {
        heading: "Melhor época",
        paragraphs: [
          "Pantanal: junho a outubro (seca, fauna concentrada, melhor avistamento de onça). Bonito: ano todo, mas abril a setembro tem rios mais cristalinos. A janela junho-setembro é perfeita para combinar ambos.",
        ],
      },
    ],
    faq: [
      {
        q: "Vale a pena combinar Pantanal e Bonito?",
        a: "Sim. São complementares — fauna selvagem + águas cristalinas — e ficam no mesmo estado, com transfer terrestre viável.",
      },
      {
        q: "Qual a chance de ver onça-pintada?",
        a: "Em Porto Jofre, no Pantanal Norte, durante a seca (julho a outubro), a taxa de avistamento ultrapassa 80% em 3 noites de safári fluvial.",
      },
      {
        q: "Bonito é bom para crianças?",
        a: "Sim, é um dos destinos mais família-friendly do Brasil — atividades reguladas, guias treinados e infraestrutura impecável.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Mato Grosso do Sul", href: "/brasil/mato-grosso-do-sul" },
      { label: "Experiência: Safári & vida selvagem", href: "/experiencias/safari" },
    ],
    imageAiPrompt:
      "Editorial close-up of jaguar resting on Pantanal riverbank at golden hour, dramatic warm light, lush tropical wetland background, cinematic painterly, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 6,
    category: "Natureza",
    whatsappName: "Roteiro Pantanal e Bonito",
  },
  {
    slug: "lencois-maranhenses-guia-completo",
    title: "Lençóis Maranhenses: melhor época, lagoas e como visitar",
    h1: "Lençóis Maranhenses: o deserto brasileiro que vira espelho d'água",
    metaDescription:
      "Quando ir aos Lençóis Maranhenses, lagoas Azul e Bonita, Barreirinhas, Atins e Santo Amaro — guia autoral Create Travel.",
    keywords: "lencois maranhenses, quando ir lencois maranhenses, barreirinhas, atins, santo amaro",
    intro:
      "Os Lençóis Maranhenses são um paradoxo geográfico que só existe aqui: 1.500 km² de dunas brancas alimentadas pelo vento atlântico, intercaladas por milhares de lagoas de água doce que se formam entre maio e setembro, quando a chuva enche as depressões entre as dunas. O resultado é a paisagem mais cinematográfica do Brasil — e uma das mais incomuns do mundo.",
    sections: [
      {
        heading: "A janela mágica: maio a setembro",
        paragraphs: [
          "As lagoas dependem de chuva acumulada entre janeiro e maio. Visitar em junho, julho e agosto garante o pico — lagoas cheias, água turquesa, dunas brancas em contraste absoluto. Em setembro ainda há água, mas começam a secar. Fora dessa janela, o parque vira deserto seco — bonito, mas sem o cartão-postal.",
        ],
      },
      {
        heading: "Bases de acesso: Barreirinhas, Atins e Santo Amaro",
        paragraphs: [
          "Barreirinhas é a porta principal — voos via São Luís, infraestrutura completa, acesso aos circuitos Lagoa Azul e Lagoa Bonita por toyota.",
          "Atins é a vila pé-na-areia, na foz do rio Preguiças — pousadas charmosas, kitesurf, jantares à luz de vela e acesso à Lagoa da Esmeralda e Pequenos Lençóis.",
          "Santo Amaro é a base oeste, mais isolada e selvagem — acesso à Lagoa da Gaivota e ao circuito Emendadas, com pernoite de barraca para quem busca aventura.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "7 a 10 dias combinando São Luís (gastronomia e centro histórico Patrimônio Unesco), Barreirinhas (Lagoa Azul + Bonita + descida do rio Preguiças), Atins (Pequenos Lençóis, kite, jantar privativo) e extensão opcional ao Delta do Parnaíba. Hospedagens curadas, transfers privativos e guias locais.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual o melhor mês para ir aos Lençóis Maranhenses?",
        a: "Julho e agosto — lagoas no pico, sol confiável e dunas brancas em contraste perfeito. Junho e setembro também são excelentes.",
      },
      {
        q: "Dá para combinar Lençóis com Jericoacoara?",
        a: "Sim. A clássica Rota das Emoções vai de Jericoacoara (CE) a São Luís (MA) passando por Delta do Parnaíba e Lençóis — 8 a 10 dias.",
      },
      {
        q: "É difícil chegar?",
        a: "Não. Voos diários a São Luís + 4h de transfer a Barreirinhas (ou voo fretado de 40 min para Atins). Operamos a logística completa.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Maranhão", href: "/brasil/maranhao" },
      { label: "Experiência: Praias & ilhas", href: "/experiencias/praia" },
    ],
    imageAiPrompt:
      "Aerial editorial photograph of Lençóis Maranhenses dunes with turquoise freshwater lagoons in between, soft late afternoon light, no people, cinematic painterly, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Lençóis Maranhenses",
  },
  {
    slug: "jalapao-guia-completo-tocantins",
    title: "Jalapão: fervedouros, cachoeiras e dunas no Tocantins",
    h1: "Jalapão: o sertão de água cristalina no coração do Brasil",
    metaDescription:
      "Roteiro Jalapão: Fervedouros, Cachoeira da Velha, Dunas do Jalapão, capim dourado e melhor época — Create Travel.",
    keywords: "jalapao, tocantins, fervedouro jalapao, cachoeira da velha, dunas do jalapao",
    intro:
      "O Jalapão é a paisagem cerrada brasileira em estado bruto: dunas alaranjadas em meio à savana, cachoeiras de águas escuras, rios encaixados em paredões de arenito e — a marca registrada — os fervedouros, nascentes de areia branca que jorram de baixo para cima com tanta pressão que é impossível afundar. É flutuar sem esforço, em água a 24°C, no meio do sertão tocantinense.",
    sections: [
      {
        heading: "Os imperdíveis",
        paragraphs: [
          "Fervedouros (Bela Vista, Buritizinho, Macacos): cada um com tom de azul próprio, todos com regulamentação de visitação.",
          "Cachoeira da Velha (Rio Novo): queda em meia-lua de 15 m, com prainha e descida de bote pelo cânion.",
          "Dunas do Jalapão: dunas de 30 m em meio à vegetação do cerrado — pôr do sol icônico.",
          "Cachoeira do Formiga: lagoa interior em verde-fluorescente, uma das águas mais fotogênicas do Brasil.",
          "Serra do Espírito Santo e Cânion Sussuapara: paredões e mata úmida em meio à seca cerrada.",
        ],
      },
      {
        heading: "Capim dourado e cultura quilombola",
        paragraphs: [
          "O capim dourado é colhido entre setembro e novembro nas comunidades de Mumbuca e Boa Esperança, e transformado em peças artesanais que viraram patrimônio cultural do Brasil. Visitar essas comunidades — com mediação — é parte essencial do roteiro.",
        ],
      },
      {
        heading: "Quando ir e como chegar",
        paragraphs: [
          "Maio a setembro é a janela perfeita: seca, sol confiável e estradas trafegáveis. Acesso por voo a Palmas (TO) + 4 a 6 horas de 4x4 até Mateiros ou Ponte Alta do Tocantins, bases tradicionais.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "6 a 8 dias em pousadas selecionadas, com 4x4 privativo, guia local e logística inclusa — pode ser combinado com Lençóis Maranhenses (extensão de 4 dias) ou Chapada das Mesas.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para o Jalapão?",
        a: "Maio a setembro. Junho e julho são ideais — seco, frio à noite, dias limpos.",
      },
      {
        q: "Dá para ir sem 4x4?",
        a: "Não. As estradas internas exigem tração e altura. Sempre operamos com 4x4 e motorista experiente.",
      },
      {
        q: "Posso combinar Jalapão com Lençóis?",
        a: "Sim — combinação clássica de 10 a 12 dias via Palmas-Imperatriz-Barreirinhas.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Tocantins", href: "/brasil/tocantins" },
      { label: "Brasil Aventura", href: "/brasil-aventura" },
    ],
    imageAiPrompt:
      "Editorial view of Dunas do Jalapão Brazil at golden hour, orange sand dunes rising from cerrado vegetation, soft warm light, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Jalapão",
  },
  {
    slug: "chapada-das-mesas-guia-maranhao",
    title: "Chapada das Mesas: cachoeiras e mesetas no sul do Maranhão",
    h1: "Chapada das Mesas: o Maranhão profundo que poucos conhecem",
    metaDescription:
      "Guia da Chapada das Mesas: Cachoeira de Santa Bárbara, Pedra Caída, Encanto Azul e melhor época — Create Travel.",
    keywords: "chapada das mesas, carolina maranhao, pedra caida, santa barbara, encanto azul",
    intro:
      "A Chapada das Mesas, no sul do Maranhão, é o segredo melhor guardado do cerrado brasileiro. Mesetas de arenito vermelho de até 850 metros se erguem sobre vales verdes cortados por rios de água cristalina, cachoeiras de até 100 metros e poços azul-elétrico. Sem aglomeração, com pousadas charmosas e preço civilizado — é o que a Chapada Diamantina era há 20 anos.",
    sections: [
      {
        heading: "Os imperdíveis",
        paragraphs: [
          "Cachoeira de Santa Bárbara: queda esmeralda em meio à mata, acessível por trilha curta — talvez a mais bonita do Maranhão.",
          "Complexo Pedra Caída: três cachoeiras (Caverna, Capelão, Santuário) acessíveis por trilha guiada — fim espetacular num cânion vermelho.",
          "Encanto Azul: poço de água azul-fluorescente alimentado por nascente — flutuação imperdível.",
          "Morro do Chapéu: mesa icônica e mirante do pôr do sol da chapada.",
          "Cachoeira São Romão: 35 metros de largura — a 'Iguaçu maranhense' em escala íntima.",
        ],
      },
      {
        heading: "Como chegar e onde ficar",
        paragraphs: [
          "Base em Carolina (MA), com voos a Imperatriz (MA) + 2h de transfer ou voo a Palmas (TO) + 4h. Pousadas: Pedra Caída e Serra Verde são as melhores opções da região, com estrutura ecológica.",
        ],
      },
      {
        heading: "Quando ir",
        paragraphs: [
          "Maio a setembro — estiagem, cachoeiras ainda cheias e estradas trafegáveis. Junho e julho são especialmente confortáveis (temperaturas amenas).",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "4 a 6 dias na Chapada das Mesas, ideal para combinar com Jalapão (TO) ou Lençóis Maranhenses formando uma rota cerrado-litoral de 10 a 12 dias.",
        ],
      },
    ],
    faq: [
      {
        q: "Vale a pena ir à Chapada das Mesas?",
        a: "Sim, especialmente para quem já conhece Diamantina e Veadeiros — paisagem comparável, com infraestrutura turística menos saturada.",
      },
      {
        q: "É possível combinar com Jalapão?",
        a: "Sim. Carolina (MA) está a 4h de Mateiros (TO) — combinação natural de 10-12 dias.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Maranhão", href: "/brasil/maranhao" },
      { label: "Brasil Aventura", href: "/brasil-aventura" },
    ],
    imageAiPrompt:
      "Editorial view of Cachoeira de Santa Bárbara in Chapada das Mesas Brazil, emerald green waterfall plunging into pool surrounded by sandstone, soft tropical light, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Chapada das Mesas",
  },
  {
    slug: "chapada-diamantina-guia-completo-bahia",
    title: "Chapada Diamantina: roteiro, trilhas e melhor época",
    h1: "Chapada Diamantina: o coração de pedra e água da Bahia",
    metaDescription:
      "Guia da Chapada Diamantina: Vale do Pati, Cachoeira da Fumaça, Poço Azul, Lençóis e roteiros autorais Create Travel.",
    keywords: "chapada diamantina, bahia, vale do pati, cachoeira da fumaca, poco azul, lencois bahia",
    intro:
      "A Chapada Diamantina é a Bahia que ninguém imagina ao pensar em Bahia. No coração do estado, longe da orla, ergue-se um maciço serrano com cânions de 400 metros, cachoeiras que despencam em queda livre, grutas com lagos azul-piscina e o vale considerado por muitos como a trilha mais bonita do Brasil — o Pati.",
    sections: [
      {
        heading: "Os imperdíveis",
        paragraphs: [
          "Vale do Pati: 3 a 5 dias de trekking entre vilas isoladas, hospedagem em casas de moradores, paisagem épica em todos os ângulos — para muitos, a maior travessia do Brasil.",
          "Cachoeira da Fumaça: 340 m de queda livre — a água vira névoa antes de chegar ao chão. Mirante por cima (trilha 6h) ou pela base (trilha 2 dias).",
          "Poço Azul e Poço Encantado: cavernas inundadas com luz solar entrando em ângulo perfeito (abril a setembro) — flutuação imperdível.",
          "Cachoeira do Buracão: cânion estreito de 85 m, descida com guia obrigatório.",
          "Morro do Pai Inácio: pôr do sol icônico — cartão-postal absoluto da Chapada.",
        ],
      },
      {
        heading: "Lençóis: base e charme",
        paragraphs: [
          "Lençóis é a base ideal — vila colonial preservada, pousadas charmosas (Canto das Águas, Vila Serrano), gastronomia surpreendente e operação de trekkings consolidada. Outras bases: Mucugê, Igatu (a 'cidade de pedra') e Capão (para a Fumaça).",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "6 a 8 dias em Lençóis com excursões diárias + Vale do Pati (3 dias de travessia com mochileiros e guia). Pode ser combinado com Salvador / Praia do Forte (8-10 dias totais).",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para a Chapada Diamantina?",
        a: "Abril a outubro. Abril-junho: tudo verde e cachoeiras cheias. Julho-setembro: poços azuis no ângulo perfeito de luz. Evite novembro-fevereiro (chuvas fortes).",
      },
      {
        q: "Vale o Vale do Pati?",
        a: "Para quem tem fôlego, é a melhor experiência de trekking do Brasil. Operamos com guia local e logística completa.",
      },
      {
        q: "Como chegar?",
        a: "Voo a Salvador + 6h de van/carro a Lençóis, ou voo direto Salvador-Lençóis (sazonal).",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Bahia", href: "/brasil/bahia" },
      { label: "Brasil Aventura", href: "/brasil-aventura" },
    ],
    imageAiPrompt:
      "Editorial view of Vale do Pati Chapada Diamantina Brazil, dramatic table mountains and green valley at sunrise, mist in valley, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 6,
    category: "Destino",
    whatsappName: "Roteiro Chapada Diamantina",
  },
  {
    slug: "chapada-dos-guimaraes-guia-mato-grosso",
    title: "Chapada dos Guimarães: o que fazer, trilhas e roteiro",
    h1: "Chapada dos Guimarães: o cerrado dramático a uma hora de Cuiabá",
    metaDescription:
      "Roteiro Chapada dos Guimarães: Véu de Noiva, Mirante, Cidade de Pedra, Caverna Aroe Jari — Create Travel.",
    keywords: "chapada dos guimaraes, mato grosso, veu de noiva, cidade de pedra, mirante chapada",
    intro:
      "A Chapada dos Guimarães está a apenas 65 km de Cuiabá, mas parece outro planeta. Paredões vermelhos, vegetação do cerrado, cachoeiras e o famoso 'Mirante' — onde o cerrado se abre para o vazio em uma das vistas mais dramáticas do Brasil. É também a antessala perfeita para o Pantanal Norte.",
    sections: [
      {
        heading: "Os imperdíveis",
        paragraphs: [
          "Véu de Noiva: cartão-postal absoluto da Chapada — cachoeira de 86 m vista de mirante a curta caminhada.",
          "Mirante / Centro Geodésico: ponto considerado o centro geográfico da América do Sul, com vista de 360° sobre o cerrado e Cuiabá ao fundo.",
          "Cidade de Pedra: formações rochosas de arenito esculpidas pelo vento, no topo da serra — visual sci-fi.",
          "Caverna Aroe Jari: a maior caverna de arenito da América do Sul + Lagoa Azul interna.",
          "Circuito das Cachoeiras (Andorinhas, Independência, Pulo, Sete de Setembro): meia trilha + banhos em sequência.",
        ],
      },
      {
        heading: "Como combinar com o Pantanal",
        paragraphs: [
          "A combinação ideal: 2-3 dias na Chapada dos Guimarães + 4-5 dias no Pantanal Norte (Transpantaneira até Porto Jofre, para safári de onça). Total de 7 a 9 dias, base e regresso por Cuiabá.",
        ],
      },
      {
        heading: "Quando ir",
        paragraphs: [
          "Maio a setembro — estiagem, mirantes limpos e cachoeiras ainda boas. Junho e julho são especialmente bons (temperaturas amenas).",
        ],
      },
    ],
    faq: [
      {
        q: "Vale ir só à Chapada dos Guimarães?",
        a: "É excelente combinada com Pantanal Norte e/ou Nobres. Como destino solo, 3 dias bastam.",
      },
      {
        q: "É possível ir num bate-volta de Cuiabá?",
        a: "Tecnicamente sim, mas perde-se quase tudo. Recomendamos mínimo 2 noites na pousada.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Mato Grosso", href: "/brasil/mato-grosso" },
      { label: "Diário: Pantanal Norte e Nobres", href: "/diario/pantanal-norte-e-nobres-guia" },
    ],
    imageAiPrompt:
      "Editorial wide view of Véu de Noiva waterfall Chapada dos Guimarães Brazil, tall waterfall plunging into red canyon at golden hour, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 5,
    category: "Destino",
    whatsappName: "Roteiro Chapada dos Guimarães",
  },
  {
    slug: "pantanal-norte-e-nobres-guia",
    title: "Pantanal Norte e Nobres: onça, Transpantaneira e flutuação",
    h1: "Pantanal Norte e Nobres: safári brasileiro com flutuação cristalina",
    metaDescription:
      "Como combinar Pantanal Norte (Porto Jofre / Transpantaneira) com Nobres — flutuação e safári de onça. Create Travel.",
    keywords: "pantanal norte, transpantaneira, porto jofre, nobres mt, onca pintada",
    intro:
      "Para quem busca a maior chance de avistamento de onça-pintada do mundo, o destino é Porto Jofre, no fim da rodovia Transpantaneira (MT). Combine com Nobres, a 'Bonito mato-grossense', e você tem em uma única viagem o melhor safári da América + flutuação em águas cristalinas — sem precisar trocar de estado.",
    sections: [
      {
        heading: "Pantanal Norte: a Transpantaneira",
        paragraphs: [
          "São 145 km de estrada de chão entre Poconé e Porto Jofre, com 122 pontes de madeira, atravessando o coração do Pantanal Norte. A própria estrada já é o safári: jacarés, capivaras, tuiuiús e antas a qualquer momento.",
          "Em Porto Jofre, no Rio Cuiabá, opera-se safári fluvial em busca da onça-pintada — entre julho e outubro, a taxa de avistamento supera 85% em 3 noites. Hospedagem em flotéis (Jaguar Suites, Jaguar Flotel) ou em lodge clássico (Hotel Pantanal Norte).",
        ],
      },
      {
        heading: "Nobres: a 'Bonito mato-grossense'",
        paragraphs: [
          "A 150 km de Cuiabá, Nobres oferece flutuação em rios cristalinos com peixes coloridos (Aquário Encantado, Reino Encantado), Lagoa das Araras (raras araras-azuis ao amanhecer) e cachoeiras curtas. Menos saturada e mais íntima que Bonito.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "8 a 10 dias: Cuiabá → Chapada dos Guimarães (2 noites) → Nobres (2 noites) → Pantanal Norte / Transpantaneira / Porto Jofre (3-4 noites para safári de onça). Operação 4x4, transfers privativos, guias-naturalistas.",
        ],
      },
    ],
    faq: [
      {
        q: "Quando ir para ver onça-pintada?",
        a: "Julho a outubro — estiagem, fauna concentrada nas margens. Setembro é o pico estatístico de avistamento.",
      },
      {
        q: "Pantanal Norte ou Sul?",
        a: "Norte (Porto Jofre): melhor para onça. Sul (Caiman): melhor para fauna em geral, paisagem aberta e lodges de luxo. Os dois são ótimos com objetivos diferentes.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Mato Grosso", href: "/brasil/mato-grosso" },
      { label: "Diário: Pantanal e Bonito", href: "/diario/pantanal-e-bonito-guia-de-viagem" },
    ],
    imageAiPrompt:
      "Editorial photograph of jaguar on Cuiaba river bank in Pantanal Norte, golden hour light, tropical wetland background, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 5,
    category: "Natureza",
    whatsappName: "Roteiro Pantanal Norte e Nobres",
  },
  {
    slug: "belem-marajo-e-alter-do-chao-para",
    title: "Belém, Ilha de Marajó e Alter do Chão: roteiro pelo Pará",
    h1: "Belém, Marajó e Alter do Chão: a tríade que define a Amazônia oriental",
    metaDescription:
      "Roteiro pelo Pará: gastronomia em Belém, búfalos em Marajó e o 'Caribe amazônico' em Alter do Chão. Create Travel.",
    keywords: "belem, ilha de marajo, alter do chao, para, ver-o-peso, tapajos",
    intro:
      "O Pará é três destinos em um. Belém entrega a Amazônia urbana mais sofisticada do Brasil, com gastronomia premiada e arquitetura da Belle Époque. A Ilha de Marajó — maior ilha fluviomarinha do mundo — guarda búfalos, manguezais e uma cultura única. E Alter do Chão, do outro lado do estado, oferece a chamada 'Caribe amazônica' com praias de água doce e areia branca no Rio Tapajós.",
    sections: [
      {
        heading: "Belém: a cidade que come bem",
        paragraphs: [
          "Ver-o-Peso é o maior mercado a céu aberto da América Latina e o melhor briefing sobre a cozinha amazônica em duas horas: tucupi, jambu, açaí puro, peixes de água doce, ervas que ninguém conhece.",
          "A nova geração de chefs reinventou tudo: Casa do Saulo, Remanso do Bosque (estrela Michelin verde), Manjar das Garças. Hospedagem: Atrio Reverso, Casa Apuí, Boutique Hotel Soft Inn.",
        ],
      },
      {
        heading: "Marajó: búfalos, tacacá e silêncio",
        paragraphs: [
          "Travessia de barco/lancha de Belém (3-4h) à Soure ou Salvaterra. Praias paradisíacas (Pesqueiro, Joanes, Barra Velha), búfalos pastando à beira-mar, doce de leite de búfala, queijo do Marajó, pororoca no Rio Araguari (sazonal). Pousadas: Casarão da Amazônia, Marajó Park.",
        ],
      },
      {
        heading: "Alter do Chão: a Caribe amazônica",
        paragraphs: [
          "Acesso via Santarém (voos via Manaus ou Belém). A Ilha do Amor, em frente à vila, vira praia de areia branca entre agosto e janeiro (estiagem do Tapajós). Passeios à Floresta Nacional do Tapajós, comunidades ribeirinhas e lagos amazônicos. Pousadas charmosas e jantares à beira-rio.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "10 a 12 dias: Belém (3 noites — gastronomia + Ver-o-Peso + Estação das Docas) + Marajó (3 noites — Soure / Salvaterra) + Alter do Chão (3-4 noites — Tapajós + Flona). Voos internos, transfers privativos, jantares curados.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual a melhor época para Alter do Chão?",
        a: "Agosto a janeiro — Tapajós no nível baixo, praias largas. Fora dessa janela, é Amazônia clássica (rio cheio).",
      },
      {
        q: "Vale combinar Belém e Marajó?",
        a: "Sim, são complementares — Belém é Amazônia urbana, Marajó é Amazônia rural. Travessia operada.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Pará", href: "/brasil/para" },
      { label: "Diário: Amazônia — guia completo", href: "/diario/amazonia-guia-completo-de-viagem" },
    ],
    imageAiPrompt:
      "Editorial photograph of Alter do Chão Brazil at golden hour, white sand beach extending into turquoise Tapajós river with Amazon forest backdrop, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 6,
    category: "Destino",
    whatsappName: "Roteiro Belém, Marajó e Alter do Chão",
  },
  {
    slug: "monte-roraima-guia-completo",
    title: "Monte Roraima: como visitar o tepui mais famoso do Brasil",
    h1: "Monte Roraima: o platô que inspirou 'Mundo Perdido'",
    metaDescription:
      "Como subir o Monte Roraima — trilha clássica via Venezuela, duração, melhor época e roteiro autoral Create Travel.",
    keywords: "monte roraima, tepui, paraitepuy, gran sabana, roraima brasil",
    intro:
      "O Monte Roraima é um tepui — uma montanha-mesa com topo plano formada há cerca de 1,8 bilhão de anos, quando a Pangea ainda nem existia. Seus 2.810 metros se erguem como uma cidadela rochosa na tríplice fronteira Brasil-Venezuela-Guiana, inspirando o 'Mundo Perdido' de Conan Doyle e oferecendo uma das trekking expedicionários mais espetaculares do continente.",
    sections: [
      {
        heading: "A trilha clássica",
        paragraphs: [
          "A subida tradicional parte de Paraitepuy (Venezuela) — atualmente o acesso mais consolidado. São 6 a 8 dias de expedição com acampamento, guia indígena pemón, porteiros e logística completa: travessia da Gran Sabana, subida pela 'rampa' (única forma natural de chegar ao topo), 2 a 3 dias explorando o platô (Vale dos Cristais, Jacuzzis, Ponto Triplo Brasil-Venezuela-Guiana) e descida pelo mesmo caminho.",
          "Pelo lado brasileiro, em Roraima, o acesso é mais restrito (terras indígenas Yanomami / Ingarikó). A Create Travel opera apenas via Venezuela, com fronteira por Pacaraima (RR) → Santa Elena de Uairén (VE) → Paraitepuy.",
        ],
      },
      {
        heading: "Quando ir e nível de exigência",
        paragraphs: [
          "Dezembro a abril é a janela mais seca. Junho a agosto é viável, mas com chances de chuva. A expedição é exigente fisicamente — caminhadas de 6 a 8 horas por dia com mochila leve (porteiros levam o pesado), altitudes até 2.810 m, temperaturas que variam de 25°C ao sol a 5°C à noite no topo.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "10 a 12 dias totais: voo Manaus / Boa Vista, transfer a Pacaraima, travessia para Santa Elena (VE), expedição de 6-7 dias ao Roraima com guia, porteiros e cozinheiro, retorno e dia em Boa Vista. Logística delicada — operamos com receptivo venezuelano credenciado e seguros específicos.",
        ],
      },
    ],
    faq: [
      {
        q: "É possível subir o Roraima pelo Brasil?",
        a: "O acesso pelo Brasil cruza terras indígenas com regras próprias e logística complexa. A operação consolidada é via Venezuela.",
      },
      {
        q: "Preciso de muito preparo físico?",
        a: "Sim. É uma expedição séria. Recomendamos 3 meses de preparo cardiovascular (caminhada com mochila / corrida) antes da viagem.",
      },
      {
        q: "É seguro?",
        a: "Com operação correta, sim. Cruzamos a fronteira com transfer privativo, hospedagem em Santa Elena, guia oficial e roteiro consolidado há décadas.",
      },
    ],
    relatedDestinations: [
      { label: "Brasil — Roraima", href: "/brasil/roraima" },
      { label: "Brasil Aventura", href: "/brasil-aventura" },
    ],
    imageAiPrompt:
      "Editorial view of Mount Roraima tepui at sunrise, dramatic flat-top sandstone plateau rising from Gran Sabana, mist around base, painterly cinematic, no people, ultra detailed",
    publishedAt: "2026-05-31",
    readingMinutes: 6,
    category: "Destino",
    whatsappName: "Roteiro Monte Roraima",
  },
  {
    slug: "safari-africa-do-sul-kruger-vs-reservas-privadas",
    title: "Safari África do Sul: Kruger ou Reservas Privadas (Sabi Sands, Madikwe)?",
    h1: "Safari na África do Sul: Kruger vs Sabi Sands e Madikwe — qual escolher",
    metaDescription:
      "Comparativo autoral entre Parque Kruger e reservas privadas (Sabi Sands, Madikwe, Timbavati): preços, experiência, fauna e qual escolher para seu safári na África do Sul.",
    keywords:
      "safari africa do sul, safari kruger, sabi sands, madikwe, reservas privadas africa do sul, kruger ou sabi sands",
    intro:
      "Fazer safari na África do Sul é uma das experiências mais transformadoras que uma viagem oferece — mas a primeira decisão é também a mais determinante: ir ao Parque Nacional Kruger ou entrar em uma reserva privada como Sabi Sands, Madikwe ou Timbavati? São dois universos diferentes, com preços, ritmo, fauna e atmosfera distintos. Este guia é o comparativo honesto que usamos com nossos viajantes.",
    sections: [
      {
        heading: "Parque Kruger: a grande clássica sul-africana",
        paragraphs: [
          "O Kruger é um dos maiores parques nacionais do mundo: 19.485 km², do tamanho de Israel. Foi criado em 1898 e abriga os Big Five (leão, leopardo, elefante, rinoceronte e búfalo) em densidades altas, além de mais de 500 espécies de aves.",
          "É um parque público — você pode entrar de carro alugado, dirigir por estradas asfaltadas e dormir em rest camps administrados pelo governo (SANParks). Existem também lodges privados dentro do parque, com game drives operados por guias.",
          "Pontos fortes: escala épica, custo mais acessível, autonomia de horários e a sensação de estar em um parque-mito. Pontos fracos: você não pode sair da estrada (off-road é proibido), não há game drives noturnos para o público geral e o avistamento depende de sorte e tráfego de carros.",
        ],
      },
      {
        heading: "Sabi Sands: a reserva privada mais famosa do planeta",
        paragraphs: [
          "Sabi Sands faz fronteira direta com o Kruger — não há cerca entre os dois, então a fauna circula livremente. A diferença é jurídica: é uma reserva privada, com lodges-boutique de altíssimo padrão e regras próprias.",
          "Aqui os guias podem sair da estrada, perseguir um leopardo dentro da mata fechada, fazer game drives noturnos com holofote e levar no máximo 6 hóspedes por veículo. Sabi Sands é mundialmente reconhecida como o melhor lugar do planeta para fotografar leopardos — eles estão habituados aos veículos e permitem aproximações impensáveis em qualquer outro lugar.",
          "Lodges como Singita, Londolozi, Lion Sands, Sabi Sabi e Mala Mala são referência absoluta em safari de luxo. O preço reflete: diárias geralmente entre USD 1.500 e USD 4.500 por pessoa, com pensão completa, bebidas, dois game drives diários e guia privativo em alguns casos.",
        ],
      },
      {
        heading: "Madikwe: a reserva sem malária, ideal para famílias",
        paragraphs: [
          "Madikwe fica no noroeste da África do Sul, fronteira com Botsuana, em zona livre de malária — fator decisivo para famílias com crianças pequenas e viajantes que querem evitar profilaxia.",
          "É uma reserva grande (750 km²), com Big Five e uma das melhores populações de cães-selvagens-africanos do continente — uma espécie raríssima e fascinante de observar em caçada. Lodges como Tswalu (próxima, no Kalahari), Royal Madikwe, Jamala e Molori oferecem experiência de altíssimo nível com preços geralmente 20-30% abaixo de Sabi Sands.",
          "O perfil é mais íntimo, com menos veículos por avistamento. Ideal para quem busca exclusividade absoluta sem o nome de marquise de Sabi Sands.",
        ],
      },
      {
        heading: "Timbavati e Klaserie: o coração da Greater Kruger",
        paragraphs: [
          "Assim como Sabi Sands, Timbavati e Klaserie fazem parte do ecossistema Greater Kruger, sem cercas. Timbavati é famosa por seus leões brancos — uma variação genética rara que aparece naturalmente na região.",
          "Os lodges costumam ser um degrau abaixo de Sabi Sands em preço (USD 800-1.800 por pessoa) e oferecem a mesma liberdade de off-road e game drive noturno. Tanda Tula, Kings Camp e Ngala são referências.",
        ],
      },
      {
        heading: "Comparativo direto: qual escolher?",
        paragraphs: [
          "Escolha Kruger se: orçamento mais enxuto (a partir de USD 200/dia em rest camps), gosta de autonomia, topa dirigir e quer a sensação de aventura em um parque clássico. Bom para quem já fez safari antes e quer outra perspectiva.",
          "Escolha Sabi Sands se: é seu primeiro safari, busca o melhor avistamento de leopardo do mundo, quer luxo absoluto e fotografia próxima. Investimento mais alto, mas a curva de experiência é incomparável.",
          "Escolha Madikwe se: viaja com crianças, quer evitar malária, busca cães-selvagens e prefere ambiente mais íntimo e exclusivo, com preço mais racional que Sabi Sands.",
          "Escolha Timbavati se: quer experiência de reserva privada com off-road e game drive noturno, mas com orçamento um pouco mais flexível que Sabi Sands.",
        ],
      },
      {
        heading: "Quando ir: melhor época para safari na África do Sul",
        paragraphs: [
          "Maio a setembro é a estação seca — vegetação rala, animais concentrados em pontos de água e visibilidade máxima. É o pico do safari, e também o período mais frio (manhãs entre 5 e 10°C nos game drives).",
          "Outubro e novembro são meses de transição, ainda excelentes para avistamento e com clima mais ameno. Dezembro a março é estação chuvosa: paisagem verde-luminescente, filhotes nascendo, aves migratórias — mas vegetação densa dificulta avistamento.",
        ],
      },
      {
        heading: "Como combinamos isso em um roteiro autoral",
        paragraphs: [
          "Nossa proposta clássica para primeira viagem combina 3 a 4 noites em reserva privada (Sabi Sands ou Madikwe) com Cape Town e a Rota dos Jardins — totalizando 12 a 14 dias. Para viajantes que querem aprofundar, montamos extensões para Cataratas Vitória, Botsuana (Delta do Okavango) ou Moçambique (Bazaruto).",
          "A logística usa voos internos pequenos (Federal Air, Airlink) ligando Joanesburgo aos lodges diretamente — uma única viagem operada com transferências, voos charter, lodges selecionados e guia falando português quando disponível.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual é a diferença prática entre Kruger e Sabi Sands?",
        a: "Kruger é parque público (você dirige, dorme em camp e segue estradas asfaltadas). Sabi Sands é reserva privada anexa, sem cerca entre as duas, onde guias podem fazer off-road, game drive noturno e levar no máximo 6 pessoas por veículo. A fauna circula entre as duas áreas.",
      },
      {
        q: "Madikwe vale a pena para quem viaja com crianças?",
        a: "Sim. É zona livre de malária e vários lodges aceitam crianças a partir de 6 anos, com programas dedicados. É a melhor escolha para safári em família na África do Sul.",
      },
      {
        q: "Quantos dias de safari são ideais?",
        a: "Mínimo 3 noites em uma reserva (você faz 6 game drives, suficiente para ver os Big Five com calma). Ideal 4 noites — ou combinar 2 reservas diferentes em 5-6 noites para variar o ecossistema.",
      },
      {
        q: "Brasileiros precisam de visto para a África do Sul?",
        a: "Não, brasileiros têm isenção de visto por até 90 dias. Passaporte com validade mínima de 30 dias após o retorno e 2 páginas em branco.",
      },
      {
        q: "Quanto custa um safari de luxo em Sabi Sands?",
        a: "Diárias variam de USD 1.500 a USD 4.500 por pessoa, com pensão completa, bebidas, dois game drives diários e guia. O ticket médio inclui também voos internos charter e transferências.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na África", href: "/destinos?c=africa" },
      { label: "Experiência: Safári & vida selvagem", href: "/experiencias/safari" },
    ],
    imageAiPrompt:
      "Editorial wide shot of an African leopard resting on a marula tree branch at golden hour in Sabi Sands South Africa, dramatic warm light, cinematic shallow depth of field, painterly, no people, ultra high detail",
    publishedAt: "2026-06-14",
    readingMinutes: 8,
    category: "Destino",
    whatsappName: "Safari África do Sul",
  },
  {
    slug: "viagem-em-grupo-com-guia-brasileiro-saindo-do-brasil",
    title: "Viagem em grupo com guia brasileiro: a forma mais leve de conhecer o mundo",
    h1: "Viagem em grupo com guia brasileiro: liberdade para ir só, sem estar sozinho",
    metaDescription:
      "Como funciona uma viagem em grupo com guia brasileiro embarcando junto desde o Brasil: tudo organizado, amizades reais e a leveza de só precisar embarcar.",
    keywords:
      "viagem em grupo, viagem em grupo com guia brasileiro, viajar em grupo, grupo saindo do Brasil, viajar acompanhado, viagem organizada",
    intro:
      "Você quer viajar. Quer Patagônia, Grécia, Tailândia, Croácia. Mas o parceiro não topa, a amiga desistiu, os filhos têm a vida deles — e a ideia de organizar tudo sozinho cansa antes mesmo da viagem começar. Este texto é para você. Não é sobre coragem. É sobre descobrir como é leve viajar com tudo organizado, em um grupo onde você embarca só e desembarca cercado de novas amizades.",
    sections: [
      {
        heading: "A leveza de só precisar embarcar",
        paragraphs: [
          "Existe um tipo de cansaço pré-viagem que ninguém comenta: pesquisar voo, escolher hotel em bairro seguro, montar roteiro, traduzir cardápio, reservar restaurante, calcular transfer, conferir documento, recalcular tudo quando algo muda. Para muita gente, é exatamente esse trabalho que adia a viagem dos sonhos por anos.",
          "Em uma viagem em grupo bem organizada, esse peso simplesmente sai dos seus ombros. Voo, hospedagem em hotéis selecionados por charme e localização, passeios, restaurantes especiais, ingressos, transfers e imprevistos — tudo já está resolvido. A única coisa que você precisa fazer é chegar no aeroporto e embarcar.",
        ],
      },
      {
        heading: "Embarcar do Brasil com um guia brasileiro ao lado",
        paragraphs: [
          "O momento mais ansioso de uma viagem internacional costuma ser o aeroporto: check-in, despacho de bagagem, conexão, imigração, primeiro táxi em país estrangeiro. Quando o guia embarca junto com você desde o Brasil, tudo isso deixa de ser preocupação sua.",
          "Você chega ao portão, encontra o guia, reconhece os primeiros rostos do grupo — e a partir dali está em fluxo até o desembarque de volta. Alguém que fala sua língua, conhece o roteiro de ponta a ponta, resolve o que precisar ser resolvido e está disponível 24h. É o que transforma uma viagem internacional em uma experiência tranquila, do início ao fim.",
        ],
      },
      {
        heading: "Amizades que continuam depois do desembarque",
        paragraphs: [
          "Quem viaja em grupo conta sempre a mesma coisa: voltou com amigos que não esperava ter. Café da manhã com gente nova, jantares com vinho e conversa boa, risadas no ônibus, fotos que viram lembrança coletiva. As pessoas que escolhem esse formato costumam ter algo em comum — curiosidade pelo mundo, vontade de viver bem, abertura para conhecer gente.",
          "Não é raro que viajantes do mesmo grupo combinem a próxima viagem juntos, virem grupo de WhatsApp ativo por anos, ou voltem a se encontrar em outros roteiros. A viagem termina; as amizades, não.",
        ],
      },
      {
        heading: "Roteiros pensados para viver, não para correr",
        paragraphs: [
          "Viagem em grupo não precisa ser sinônimo de agenda apertada, ônibus lotado e check-list de pontos turísticos. Em um grupo curado, o roteiro respira: experiências autorais que furam o circuito de massa, jantares com chefs locais, vinícolas pequenas, ateliês, bairros que turista comum não chega, tempo livre real todo dia.",
          "Você participa do que faz sentido para você e tem espaço para descansar, passear por conta, voltar ao hotel ou simplesmente sentar em um café e ver a cidade passar. Liberdade dentro da estrutura — esse é o ponto.",
        ],
      },
      {
        heading: "Tudo organizado, do voo ao último jantar",
        paragraphs: [
          "Um grupo bem montado significa: voos coordenados com lugares próximos, hospedagem selecionada por charme e localização (não só por estrela), transfers privativos do grupo, ingressos antecipados sem fila, restaurantes reservados com cardápio testado, seguro-viagem robusto, guia brasileiro 24h e documento de viagem detalhado entregue antes do embarque.",
          "Para quem busca ainda mais privacidade, existe o formato 'Crie seu Grupo' — viagem desenhada sob medida para um grupo menor, com datas, roteiro e ritmo combinados a quatro mãos. Ideal para grupos de amigos, famílias estendidas, clubes ou empresas que querem viajar juntos com mais intimidade.",
        ],
      },
      {
        heading: "Perguntas comuns de quem vai embarcar pela primeira vez em grupo",
        paragraphs: [
          "'E se eu não me der com o grupo?' — Os jantares são em grupo, mas você não é obrigado a sentar com ninguém específico. Há horas livres todo dia e o guia faz pontes naturais nos primeiros dias. Quem quer estar junto, está; quem quer um tempo só, tem.",
          "'E se eu adoecer durante a viagem?' — Os roteiros incluem seguro-viagem com boa cobertura, guia 24h e parceria com hotéis que sabem acionar atendimento médico. Existe estrutura montada para imprevistos.",
          "'E o ritmo? Vou conseguir acompanhar?' — Os roteiros indicam o nível de cada dia com transparência e há sempre alternativa para quem quer caminhar menos. Ninguém é deixado para trás.",
        ],
      },
      {
        heading: "Destinos que mais combinam com viagem em grupo",
        paragraphs: [
          "Itália (Toscana, Sicília, Sul), Grécia (Atenas, Santorini, Cíclades), Portugal (Lisboa, Douro), Croácia e Eslovênia, França (Provença, Paris), Tailândia, Japão, Patagônia (chilena e argentina), Marrocos e Equador-Galápagos são alguns dos destinos onde a viagem em grupo brilha — pelo idioma, pela logística ou simplesmente porque ficam ainda melhores compartilhados.",
          "Cada um tem temperamento próprio. Itália e Portugal são acolhedores para a primeira viagem internacional em grupo. Tailândia e Marrocos pedem grupo bem amarrado para fluir sem desgaste. Patagônia é para quem quer paisagem épica com ritmo cuidado. Conversamos isso na curadoria, antes de você escolher.",
        ],
      },
    ],
    faq: [
      {
        q: "Como funciona uma viagem em grupo da Create Travel?",
        a: "Você embarca em um voo internacional saindo do Brasil acompanhado por um guia brasileiro que viaja junto do início ao fim. Voo, hospedagem, transfers, passeios, ingressos e jantares especiais já estão organizados. Você só precisa embarcar.",
      },
      {
        q: "Posso ir sem conhecer ninguém do grupo?",
        a: "Sim — é o caso da maior parte dos nossos viajantes. Fazemos conexão prévia via WhatsApp antes do embarque e o guia é o ponto de referência desde o aeroporto. É muito comum voltar da viagem com amizades que continuam depois.",
      },
      {
        q: "Preciso falar inglês?",
        a: "Não. O guia brasileiro acompanha todas as interações — check-in de hotel, restaurantes, ingressos, museus, transferências. Você só precisa do português.",
      },
      {
        q: "E se eu quiser tempo livre para passear por conta?",
        a: "Os roteiros são desenhados com tempo livre real todo dia. Você participa das experiências que fazem sentido para você e tem espaço para descansar, explorar sozinho ou simplesmente respirar.",
      },
      {
        q: "Existe formato com grupo menor e mais privativo?",
        a: "Sim. O programa 'Crie seu Grupo' opera com grupos menores em formato personalizado — datas, roteiro e ritmo desenhados sob medida para amigos, famílias estendidas, clubes ou empresas.",
      },
      {
        q: "É seguro viajar em grupo com guia brasileiro?",
        a: "Sim. Trabalhamos com hotéis em regiões seguras, transferências privativas, guia disponível 24h em WhatsApp e seguro-viagem com boa cobertura. A estrutura é o que dá a tranquilidade de só pensar em aproveitar.",
      },
    ],
    relatedDestinations: [
      { label: "Próximas saídas em grupo com guia brasileiro", href: "/embarque-com-a-create" },
      { label: "Crie seu próprio grupo", href: "/crie-seu-grupo" },
    ],
    imageAiPrompt:
      "Editorial wide shot of a small stylish travel group walking together through a sunlit Mediterranean coastal village in golden hour, viewed from behind so faces are not identifiable, mixed ages and genders, linen and neutral outfits, warm painterly light, cinematic, no logos, ultra detailed",
    publishedAt: "2026-06-14",
    readingMinutes: 8,
    category: "Curiosidades",
    whatsappName: "Viagem em grupo com guia brasileiro",
  },
  {
    slug: "budapeste-viena-praga-istambul-conexoes-imperiais",
    title: "Budapeste, Viena, Praga e Istambul: a rota dos três impérios que moldaram a Europa",
    h1: "Budapeste, Viena, Praga e Istambul: quatro capitais, três impérios, uma mesma história",
    metaDescription:
      "Por que Budapeste, Viena, Praga e Istambul se conectam: Habsburgos, Bizantinos e Otomanos, o Danúbio, a herança judaica e as catedrais, sinagogas e mesquitas mais belas do mundo.",
    keywords:
      "budapeste viena praga istambul, europa central e leste, império austro-húngaro, império otomano, império bizantino, danúbio, sinagogas europa, catedrais e mesquitas, renascimento, roteiro europa leste e turquia",
    intro:
      "Olhadas no mapa, parecem quatro cidades distantes. Vividas em sequência, são uma única narrativa: a do continente que foi disputado, esculpido e estilizado por três impérios gigantes — o Bizantino, o Otomano e o Austro-Húngaro dos Habsburgos — encontrando-se exatamente onde o Ocidente vira Oriente. Budapeste, Viena, Praga e Istambul não são paradas independentes em um roteiro: são capítulos do mesmo livro, atravessados por um fio condutor de fé, música, renascimento cultural e convivência entre cristãos, judeus e muçulmanos.",
    sections: [
      {
        heading: "Três impérios, um mesmo território",
        paragraphs: [
          "Istambul foi capital de três impérios — Romano, Bizantino e Otomano — e por mais de mil anos comandou a cristandade oriental antes de se tornar o coração do mundo islâmico. Os Habsburgos, do outro lado, ergueram a partir de Viena um império católico que, em sua versão dual a partir de 1867, governou Praga, Budapeste e boa parte da Europa Central. Entre os dois polos, a fronteira foi se movendo durante séculos — e é essa fricção que explica praticamente tudo o que se vê hoje nessas quatro cidades.",
          "Budapeste viveu sob domínio otomano por quase 150 anos (1541–1686) e ainda guarda banhos turcos em funcionamento, como o Rudas e o Király. Viena foi sitiada pelos otomanos em 1529 e 1683, e a derrota turca aos portões da cidade redesenhou o mapa do continente. Praga, mais ao norte, foi o palco do Renascimento centro-europeu sob Rodolfo II, que transformou o Castelo numa corte de astrônomos, alquimistas e artistas vindos de toda a Europa.",
        ],
      },
      {
        heading: "O eixo Habsburgo: Viena, Praga e Budapeste",
        paragraphs: [
          "Por quase quatro séculos, a família Habsburgo governou um território que ia dos Alpes aos Cárpatos. Viena era a capital política e musical, Praga o coração boêmio e intelectual, Budapeste a parceira húngara que dividiu com Viena a soberania do império dual. O resultado é uma estética compartilhada — cafés com espelhos altos, óperas douradas, palácios pastel, ruas largas pensadas para carruagens imperiais — que se reconhece imediatamente nas três cidades, mesmo séculos depois da queda da monarquia em 1918.",
          "Caminhar por Viena depois de Budapeste é uma sensação de déjà-vu organizado: a Ringstrasse vienense conversa com a Avenida Andrássy húngara, o Hofburg dialoga com o Palácio Real de Buda, e o ritual do café — Sachertorte em Viena, Dobos em Budapeste — é o mesmo gesto cultural em duas línguas.",
        ],
      },
      {
        heading: "Música, Renascimento e o fio cultural",
        paragraphs: [
          "Poucos lugares do mundo concentram tanta história musical em tão pouco espaço. Viena é a cidade de Mozart, Beethoven, Haydn, Schubert, Brahms, Mahler e Strauss — todos viveram, compuseram ou estrearam suas obras a poucas quadras umas das outras. Budapeste devolve a resposta com Liszt e Bartók; Praga, com Smetana, Dvořák e o jovem Mozart, que estreou o Don Giovanni no Teatro dos Estados em 1787. Istambul fecha o eixo com a música clássica otomana, os dervixes rodopiantes e as tradições do Mevlevi.",
          "No Renascimento, Praga foi capital do Sacro Império Romano-Germânico sob Rodolfo II e atraiu Kepler, Tycho Brahe e Arcimboldo. Viena se tornou epicentro do Barroco e, depois, do Renascimento intelectual fin-de-siècle, com Klimt, Schiele, Freud e a Secessão. Istambul viveu seu próprio renascimento sob Solimão, o Magnífico, e o gênio do arquiteto Sinan, autor das mesquitas que ainda hoje definem o horizonte da cidade.",
        ],
      },
      {
        heading: "Praga, a joia que escapou intacta",
        paragraphs: [
          "Enquanto Viena e Budapeste foram bombardeadas durante a Segunda Guerra, Praga atravessou o século 20 quase sem cicatrizes arquitetônicas. É por isso que andar pela Cidade Velha é andar dentro de um conjunto medieval, gótico, renascentista e barroco preservado em camadas — a Ponte Carlos, o Relógio Astronômico, o Castelo erguido sobre o rio Moldava. Tudo parece cenográfico porque, na verdade, é original.",
          "A herança Habsburgo aqui se mistura com a tradição tcheca de boemia intelectual: Kafka, Smetana, Dvořák, a Revolução de Veludo. Praga é o elo cultural mais delicado do trio centro-europeu — mais introspectiva que Viena, menos imperial que Budapeste, mais literária que ambas.",
        ],
      },
      {
        heading: "A herança judaica: a outra história, em paralelo",
        paragraphs: [
          "Ao lado da narrativa imperial corre uma segunda história, igualmente decisiva: a das comunidades judaicas que viveram, prosperaram e foram perseguidas nessas quatro cidades durante mais de mil anos. Praga abriga o bairro judeu mais bem preservado da Europa — Josefov — com seis sinagogas históricas, incluindo a Sinagoga Velha-Nova (de 1270, a mais antiga ainda em uso no continente) e o cemitério judeu medieval, com lápides empilhadas em camadas por falta de espaço. É um dos lugares mais comoventes da Europa Central.",
          "Budapeste tem a maior sinagoga da Europa e a segunda maior do mundo — a Grande Sinagoga da Rua Dohány, em estilo mourisco, com capacidade para 3.000 pessoas. Viena, antes de 1938, era um dos centros judaicos mais vibrantes do continente, lar de Freud, Mahler, Schoenberg, Zweig e Wittgenstein, e ainda hoje preserva sinagogas, museus e o monumento de Rachel Whiteread na Judenplatz. Istambul guarda a herança sefardita dos judeus expulsos da Espanha em 1492 e acolhidos pelo sultão Bayezid II — a Sinagoga Neve Shalom e a Ahrida, no bairro de Balat, ainda estão em funcionamento.",
        ],
      },
      {
        heading: "Catedrais, sinagogas e mesquitas: três fés, um itinerário",
        paragraphs: [
          "Talvez nenhum outro roteiro do mundo permita visitar, em uma só viagem, alguns dos templos mais importantes e arquitetonicamente impressionantes das três grandes tradições monoteístas. Catedrais: a Catedral de São Vito em Praga (gótica, sobre o Castelo), a Catedral de Santo Estêvão em Viena (com seu telhado de azulejos coloridos), a Basílica de Santo Estêvão em Budapeste (que abriga a relíquia da mão direita do primeiro rei húngaro) e a Hagia Sophia em Istambul — durante mil anos a maior catedral da cristandade, depois mesquita, depois museu, hoje novamente mesquita.",
          "Sinagogas: Velha-Nova e Espanhola em Praga, Dohány em Budapeste, Stadttempel em Viena, Ahrida em Istambul. Mesquitas: a Mesquita Azul, a Süleymaniye e a Rüstem Pasha em Istambul, todas obras-primas de Sinan e do auge otomano, com interiores forrados de azulejos de Iznik. Em duas semanas, é possível percorrer um arco de fé e de arte que vai do gótico boêmio aos azulejos turcos, passando pelo barroco austríaco e pelo estilo mourisco húngaro. Poucas viagens entregam algo tão denso em significado.",
        ],
      },
      {
        heading: "Castelos, palácios, parlamentos e óperas: o cenário imperial",
        paragraphs: [
          "Se as catedrais e mesquitas guardam a alma religiosa do roteiro, são os castelos, palácios e parlamentos que guardam o poder. Praga abriga o maior complexo de castelo do mundo segundo o Guinness — o Castelo de Praga, fundado no século IX, com mais de 70.000 m² sobre o Moldava. Viena responde com dois palácios imperiais: o Hofburg, residência de inverno dos Habsburgos por seis séculos, e o Schönbrunn, com seus 1.441 cômodos e os jardins barrocos onde Mozart, aos seis anos, tocou para Maria Teresa. Em Budapeste, o Palácio Real de Buda domina a colina, e em Istambul os palácios Topkapi e Dolmabahçe contam a transição entre o Império Otomano clássico e sua versão final, afrancesada e à beira do Bósforo.",
          "Os parlamentos completam o cenário: o Parlamento Húngaro, de frente para o Danúbio, é o terceiro maior do mundo e talvez o mais fotogênico — neogótico, com 691 cômodos e uma cúpula de 96 metros. O Parlamento austríaco em Viena, neoclássico com sua estátua de Atena, dialoga com a Ringstrasse. E as óperas costuram o eixo: a Staatsoper de Viena (uma das mais importantes do mundo), a Ópera Estatal Húngara em Budapeste (recém-restaurada, no estilo neorrenascentista), o Teatro Nacional e o Teatro dos Estados em Praga (onde Mozart estreou o Don Giovanni em 1787) e o Teatro Süreyya em Istambul. Em poucas viagens é possível assistir a uma temporada lírica em quatro casas históricas diferentes.",
        ],
      },
      {
        heading: "Cidades medievais e quatro línguas em duas semanas",
        paragraphs: [
          "Por baixo do verniz imperial existe uma camada anterior, medieval, que ainda estrutura essas cidades. A Cidade Velha de Praga, com suas ruelas de pedra, o Relógio Astronômico de 1410 e a Ponte Carlos de 1357, é o conjunto medieval mais íntegro da Europa Central. Budapeste guarda o Bairro do Castelo em Buda, com a Igreja de Matias e o Bastião dos Pescadores. Viena tem o centro histórico ao redor da Stephansplatz, com vielas que sobreviveram a séculos de reformas. E Istambul tem suas muralhas teodosianas do século V, a Cisterna da Basílica e o emaranhado do Grande Bazar, em funcionamento ininterrupto desde 1461.",
          "São também quatro línguas em duas semanas — tcheco eslavo, alemão austríaco, húngaro fino-úgrico (sem parentesco com nenhuma das outras europeias) e turco. Mais o iídiche, o ladino sefardita e o grego bizantino ecoando nos bairros históricos. Pouca gente percebe, mas atravessar esse eixo é atravessar quatro famílias linguísticas distintas em poucos dias de viagem — um luxo intelectual que nenhum outro trecho do continente entrega.",
        ],
      },
      {
        heading: "O Danúbio como fio condutor",
        paragraphs: [
          "Viena e Budapeste estão fisicamente ligadas pelo Danúbio — o segundo maior rio da Europa, que nasce na Floresta Negra alemã e desemboca no Mar Negro. Em ambas as cidades, ele é mais que paisagem: é a razão de existirem. O Parlamento húngaro foi construído de frente para a água; o centro histórico de Viena se organiza em torno do canal. Praga não toca o Danúbio, mas pertence à mesma bacia cultural — o Moldava deságua no Elba, e a sensação de cidade fluvial centro-europeia é a mesma.",
          "Hoje, o trajeto Viena–Budapeste pode ser feito de trem em pouco mais de duas horas, atravessando planícies que durante séculos foram zona de fronteira entre o império cristão e o avanço otomano. Geografia e história se sobrepõem.",
        ],
      },
      {
        heading: "Istambul: onde o Ocidente encontra o Oriente",
        paragraphs: [
          "Istambul é o outro lado da equação. Capital de três impérios — Romano, Bizantino e Otomano — é a única cidade do mundo construída sobre dois continentes. A Hagia Sophia, a Mesquita Azul, a Süleymaniye, o Grande Bazar e o Bósforo contam a história do poder que entrou pela Europa pela porta do Sudeste. Visitar Istambul depois das três capitais centro-europeias é fechar o círculo: você finalmente vê de onde vinha a pressão imperial que moldou Viena e Budapeste — e o sofisticadíssimo mundo cultural que se desenhou do outro lado dessa fronteira.",
          "É também onde as três fés convivem mais densamente no espaço urbano: minaretes, campanários e sinagogas a poucas quadras uns dos outros, num tecido que sobreviveu séculos de tensões e ainda hoje é uma das experiências urbanas mais fascinantes do planeta.",
        ],
      },
      {
        heading: "Por que esse roteiro funciona tão bem juntos",
        paragraphs: [
          "Combinar essas quatro cidades em uma só viagem entrega algo raro: a sensação de entender a Europa em vez de apenas visitá-la. Em duas semanas, você atravessa três tradições imperiais, dois alfabetos (latino e árabe), três grandes religiões (cristandade católica e ortodoxa, judaísmo e islã) e três cozinhas que se influenciaram mutuamente — strudel veniense, gulasch húngaro, knedlíky tcheco, meze turco — todas convivendo no mesmo eixo histórico.",
          "É também um roteiro logisticamente generoso: distâncias curtas entre Praga, Viena e Budapeste (voos ou trens rápidos), e um único voo um pouco mais longo até Istambul para fechar com o contraste mais dramático. Em grupo curado, com coordenador do grupo acompanhante desde o Brasil, a sequência narrativa fica ainda mais clara — cada cidade prepara o terreno para a próxima.",
        ],
      },
      {
        heading: "Melhor época para combinar as quatro cidades",
        paragraphs: [
          "Maio, junho e setembro são as janelas ideais: temperaturas amenas em toda a região, dias longos para passeios a pé, esplanadas de café cheias e Istambul ainda confortável antes do calor de julho-agosto. Outubro também é generoso, com tons outonais nos parques de Viena e Praga e um Bósforo ainda navegável com clima agradável.",
          "Em dezembro, o eixo centro-europeu se transforma com os mercados de Natal — Viena, Praga e Budapeste são três das capitais mais bonitas do mundo nessa época — e Istambul oferece o contraponto mais quente, com ar limpo de inverno e bazares em ritmo cheio.",
        ],
      },
      {
        heading: "Como a Create Travel monta esse roteiro",
        paragraphs: [
          "Nossa expedição Europa do Leste e Turquia 2026 conecta Praga, Viena, Budapeste e Istambul em uma única narrativa, com coordenador do grupo acompanhante desde o Brasil, hospedagens selecionadas em endereços com história, trens panorâmicos entre as capitais centro-europeias e voo direto para Istambul para fechar com o contraste oriental.",
          "Mais do que uma sequência de cidades bonitas, é um roteiro pensado para que a viagem faça sentido como um todo — música, fé, renascimento, herança judaica e disputa imperial costurados num único fio. Você desembarca com a sensação de ter entendido como esse pedaço do mundo se formou.",
        ],
      },
    ],
    faq: [
      {
        q: "Por que combinar Budapeste, Viena, Praga e Istambul em uma única viagem?",
        a: "Porque as três cidades centro-europeias compartilham a herança do Império Austro-Húngaro (Habsburgos) e Istambul é o centro do Império Otomano, que disputou e influenciou toda essa região por séculos. Visitadas em sequência, contam uma história contínua em vez de quatro histórias soltas.",
      },
      {
        q: "Qual a melhor ordem para visitar as quatro cidades?",
        a: "O fluxo mais natural é Praga → Viena → Budapeste → Istambul. As três primeiras estão conectadas por trens rápidos e compartilham estética Habsburgo, e Istambul fecha como contraponto oriental ao final, num voo direto a partir de Budapeste.",
      },
      {
        q: "Quantos dias são ideais para esse roteiro?",
        a: "Entre 12 e 15 dias é o intervalo ideal — cerca de 3 noites em cada capital centro-europeia e 3 a 4 noites em Istambul, que pede mais tempo por ser geograficamente maior e culturalmente mais densa.",
      },
      {
        q: "Qual é a melhor época para fazer esse roteiro?",
        a: "Maio, junho, setembro e início de outubro entregam clima ameno nas quatro cidades. Dezembro é mágico nas três centro-europeias pelos mercados de Natal, e Istambul fica confortável e fotogênica no inverno seco.",
      },
      {
        q: "É um roteiro complicado para fazer por conta?",
        a: "É possível, mas é onde uma viagem em grupo com coordenador do grupo acompanhante desde o Brasil mais agrega valor: idiomas diferentes, transferências entre países, ingressos antecipados, contexto histórico para amarrar a narrativa e logística entre Schengen e Turquia ficam resolvidos do início ao fim.",
      },
    ],
    relatedDestinations: [
      { label: "Grupo Europa do Leste e Turquia 2026", href: "/grupos/europa-leste-turquia-2026" },
      { label: "Próximas saídas em grupo com coordenador do grupo acompanhante desde o Brasil", href: "/embarque-com-a-create" },
    ],
    imageAiPrompt:
      "Editorial cinematic split landscape collage of four iconic European capitals at golden hour: the Hungarian Parliament on the Danube in Budapest, the Vienna State Opera facade, the Charles Bridge and Prague Castle skyline, and the Hagia Sophia with the Bosphorus in Istanbul, painterly warm light, rich textures, no people in foreground, ultra detailed, magazine cover quality, no text no logos",
    publishedAt: "2026-06-16",
    readingMinutes: 9,
    category: "Cultura",
    whatsappName: "Budapeste, Viena, Praga e Istambul: a rota dos impérios",
  },
  {
    slug: "albania-por-que-visitar-cultura-natureza",
    title: "Albânia: por que visitar, experiências, cultura, gastronomia e natureza",
    h1: "Albânia: o último segredo do Mediterrâneo que arrebata o coração",
    metaDescription:
      "Por que visitar a Albânia: praias da Riviera, montanhas dos Bálcãs, cultura otomano-bizantina, gastronomia mediterrânea e histórias que emocionam.",
    keywords: "albania, viagem albania, riviera albanesa, balcas, tirana, berat, gjirokastra, alpes albaneses",
    intro:
      "Existe um país no Mediterrâneo onde o mar é tão azul quanto o de Capri, as montanhas lembram a Suíça, as cidades têm a alma de Marrocos e os preços ainda são de outra década. Esse país é a Albânia — e talvez seja o último segredo de verdade da Europa. Fechada ao mundo por quase 50 anos durante a ditadura de Enver Hoxha, ela acordou recentemente, generosa, intacta e com uma hospitalidade que arrebata.",
    sections: [
      {
        heading: "Por que visitar a Albânia agora",
        paragraphs: [
          "A Albânia entrega o que a Grécia, a Croácia e a Itália entregavam há trinta anos: praias semivazias de areia branca e água translúcida, vilas medievais sem multidões, comida feita com ingredientes do próprio quintal e preços que fazem qualquer viajante se perguntar por que demorou tanto a chegar aqui.",
          "É um país do tamanho de Sergipe que reúne, num único roteiro, ruínas gregas e romanas, mosteiros bizantinos, cidades-museu otomanas Patrimônio da Humanidade, alpes selvagens e mais de 450 km de costa no Adriático e no Jônico. Tudo isso com uma cena gastronômica em ebulição e uma juventude que fala inglês, italiano e celebra a abertura ao mundo com entusiasmo contagiante.",
        ],
      },
      {
        heading: "Experiências que ficam para sempre",
        paragraphs: [
          "Atravessar de barco o Lago Koman, encaixado entre paredões verticais — o trajeto é chamado de 'fiorde dos Bálcãs' e leva ao coração dos Alpes Albaneses. Caminhar entre Theth e Valbona, uma das travessias mais belas da Europa, dormindo em casas de família nas aldeias de pedra.",
          "Subir ao Castelo de Berat ao pôr do sol e descobrir que dentro das muralhas ainda vive gente, em casas brancas empilhadas que rendem à cidade o apelido de 'cidade das mil janelas'. Perder-se nas vielas de Gjirokastra, terra natal do escritor Ismail Kadaré, com seus telhados de ardósia cinza e bazar otomano restaurado.",
          "Mergulhar nas águas do Mar Jônico em Ksamil, Dhërmi e Himara — a Riviera Albanesa entrega praias que rivalizam com as melhores das Cíclades. Visitar Butrint, sítio arqueológico Patrimônio da Humanidade onde gregos, romanos, bizantinos e venezianos deixaram camadas sobrepostas de história.",
        ],
      },
      {
        heading: "Cultura: o cruzamento de civilizações",
        paragraphs: [
          "A Albânia é uma das culturas mais singulares da Europa. O idioma albanês não pertence a nenhuma família linguística próxima — é um ramo isolado do indo-europeu, falado há mais de 3.000 anos. A população convive em harmonia rara: muçulmanos sunitas, bektashis (uma vertente sufi mística com sede mundial em Tirana), católicos e ortodoxos vivem lado a lado, frequentemente na mesma família.",
          "Tirana, a capital, é um laboratório a céu aberto. Os prédios da era comunista foram pintados em cores vibrantes por iniciativa do ex-prefeito e atual primeiro-ministro Edi Rama, ele mesmo artista plástico. O Bunk'Art, instalado num bunker antinuclear de Hoxha, é um dos museus mais perturbadores e poéticos da Europa contemporânea.",
          "O kanun, código de honra medieval transmitido oralmente, ainda ecoa no norte do país e moldou conceitos como a 'besa' — a palavra empenhada, a hospitalidade sagrada que levou famílias albanesas a esconderem judeus durante a Segunda Guerra. A Albânia foi um dos pouquíssimos países europeus onde havia mais judeus no fim da guerra do que no início.",
        ],
      },
      {
        heading: "Gastronomia: mediterrâneo puro, ainda artesanal",
        paragraphs: [
          "A comida albanesa é o Mediterrâneo antes da industrialização: azeite extra-virgem das próprias oliveiras, queijos de cabra curados em casa, tomates de verdade, ervas selvagens, peixe pescado pela manhã. Tudo regado com raki caseiro e vinhos de uvas autóctones como Kallmet e Shesh — uma cena enológica em redescoberta.",
          "Provar o byrek (torta folhada de espinafre, queijo ou abóbora) num café de Tirana. Comer tavë kosi — cordeiro assado com iogurte e ovos — num konak de Elbasan. Cordeiro no espeto nas montanhas de Korçë. Peixe grelhado com legumes da horta num chiringuito de Himara, olhando o pôr do sol cair no Jônico. A conta raramente passa de 15 euros por pessoa, vinho incluso.",
          "Korçë, no leste, é considerada a capital gastronômica do país, com cervejaria artesanal centenária e o melhor lakror (torta rústica) da região. Permet é berço do raki mais celebrado. E nas aldeias dos Alpes, o café da manhã ainda chega à mesa direto do estábulo, da horta e do forno a lenha.",
        ],
      },
      {
        heading: "Natureza: alpes, lagos e duas costas",
        paragraphs: [
          "Os Alpes Albaneses, no norte, abrigam os parques nacionais de Theth e Valbona — paredões calcários, cascatas, lagos glaciais e aldeias de pedra onde o tempo parou. O Vjosa, no sul, foi declarado em 2023 o primeiro Parque Nacional de Rio Selvagem da Europa: 270 km de águas correndo livres, sem uma única represa.",
          "Três grandes lagos guardam fronteiras com vizinhos: o Lago Ohrid (com a Macedônia do Norte), um dos mais antigos do planeta e Patrimônio da Humanidade; o Lago Prespa, refúgio de pelicanos-crespos; e o Lago Shkodër, o maior dos Bálcãs.",
          "E há as duas costas: o Adriático, ao norte, com praias longas de areia clara; e o Jônico, ao sul, da Riviera Albanesa, com enseadas de águas cristalinas escondidas entre montanhas que descem direto no mar. A estrada do Llogara Pass, que serpenteia da montanha até a praia de Dhërmi, é uma das mais cinematográficas da Europa.",
        ],
      },
      {
        heading: "Histórias que arrebatam o coração",
        paragraphs: [
          "A Albânia é um país de histórias que parecem ficção. Madre Teresa de Calcutá nasceu albanesa, em Skopje, de família de Shkodër — o aeroporto internacional de Tirana leva seu nome. Ismail Kadaré, eterno candidato ao Nobel, transformou a paisagem de Gjirokastra em literatura universal. Lord Byron viajou pelo país em 1809 e escreveu que ali encontrou a hospitalidade mais nobre que conhecera na vida.",
          "Há a história da besa, que fez aldeias inteiras se mobilizarem para proteger judeus durante o nazismo — gesto reconhecido pelo Yad Vashem em Jerusalém. Há a história dos mais de 170 mil bunkers construídos por Hoxha por paranoia, hoje virados em cafés, hotéis-cápsula e museus. E há a história silenciosa que se repete em cada vilarejo: a do estrangeiro convidado a entrar, sentar à mesa e provar o raki da casa, sem nunca ter sido apresentado.",
          "Talvez seja por isso que tantos viajantes voltam da Albânia com a sensação de ter conhecido um país que ainda sabe receber — e que a Europa, em algum lugar do caminho, esqueceu de ser.",
        ],
      },
      {
        heading: "Roteiro autoral Create Travel",
        paragraphs: [
          "Nossa expedição clássica combina Tirana (cultura e história contemporânea), Berat e Gjirokastra (cidades-museu otomanas), a Riviera Albanesa (Himara, Dhërmi, Ksamil e Butrint), o Lago Ohrid e os Alpes Albaneses com a travessia Koman–Valbona–Theth. De 10 a 14 dias, com guia brasileiro, hospedagens selecionadas entre boutique hotels urbanos e casas de família nas montanhas, e a possibilidade de combinar com Macedônia do Norte, Kosovo e Montenegro num grande circuito dos Bálcãs.",
        ],
      },
    ],
    faq: [
      {
        q: "A Albânia é segura para turistas brasileiros?",
        a: "Sim. A Albânia é hoje um dos países mais seguros dos Bálcãs, com índice de criminalidade baixo e hospitalidade lendária. Brasileiros não precisam de visto para estadias de até 90 dias.",
      },
      {
        q: "Qual a melhor época para visitar a Albânia?",
        a: "Maio, junho, setembro e início de outubro são ideais: clima ameno, praias ainda vazias e montanhas acessíveis. Julho e agosto são quentes e mais cheios na Riviera. Para a travessia dos Alpes, mire entre junho e outubro.",
      },
      {
        q: "Quantos dias preciso para conhecer a Albânia?",
        a: "Um roteiro completo pede entre 10 e 14 dias para combinar cidades históricas, Riviera e Alpes. Em 7 dias dá para fazer um recorte sul (Tirana, Berat, Gjirokastra e Riviera) muito consistente.",
      },
      {
        q: "Vale combinar a Albânia com outros países dos Bálcãs?",
        a: "Sim, e é uma das combinações mais ricas da Europa. Macedônia do Norte, Kosovo, Montenegro e Grécia fazem fronteira direta e somam camadas culturais que se conversam — todas com guia brasileiro e logística resolvida pela Create Travel.",
      },
      {
        q: "Qual é o idioma e a moeda?",
        a: "O idioma oficial é o albanês, mas inglês e italiano são amplamente falados, especialmente pelos mais jovens. A moeda é o lek albanês, e euros são aceitos em muitos estabelecimentos turísticos.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na Europa", href: "/destinos?c=europa" },
      { label: "Diário Create Travel", href: "/diario" },
    ],
    imageAiPrompt:
      "Editorial cinematic landscape of the Albanian Riviera at golden hour, turquoise Ionian Sea bay seen from a cliffside road, white-stone village perched above with terracotta roofs, distant Albanian Alps on the horizon, painterly warm light, magazine cover quality, no people in foreground, ultra detailed, no text no logos",
    publishedAt: "2026-06-17",
    readingMinutes: 8,
    category: "Destino",
    whatsappName: "Roteiro Albânia",
  },
  {
    slug: "gastronomia-na-china-alem-do-frango-xadrez",
    title: "Gastronomia na China: 8 cozinhas regionais além do frango xadrez",
    h1: "Gastronomia na China: 8 cozinhas regionais além do frango xadrez",
    metaDescription:
      "Comida chinesa vai muito além do que se serve no Brasil: cantonesa, sichuanesa, hunanesa, uigur, dim sum, hot pot, chá e street food. Guia autoral Create.",
    keywords:
      "comida chinesa, gastronomia china, culinária chinesa, dim sum, hot pot sichuan, pato laqueado pequim, o que comer na china, cozinha cantonesa",
    intro:
      "Falar em comida chinesa no Brasil é falar de um menu curto — frango xadrez, yakisoba, rolinho primavera. Na China, esse menu não existe. O que existe é um continente gastronômico de oito grandes cozinhas regionais reconhecidas oficialmente pelo governo (as 'Ba Da Cai Xi'), cada uma com técnicas próprias, ingredientes locais e séculos de refinamento. Comer na China é a maneira mais direta de entender por que ela é, ao mesmo tempo, deserto, mar tropical, planalto tibetano e delta industrial — tudo isso em um único passaporte.",
    sections: [
      {
        heading: "As oito cozinhas regionais da China (Ba Da Cai Xi)",
        paragraphs: [
          "A gastronomia chinesa é organizada oficialmente em oito escolas regionais: Shandong (Lu), Sichuan (Chuan), Cantonesa (Yue), Fujian (Min), Jiangsu (Su), Zhejiang (Zhe), Hunan (Xiang) e Anhui (Hui). Cada uma reflete o clima, o solo e a história de sua região — a de Sichuan é pungente por causa da umidade que exige especiarias que abrem o apetite; a cantonesa é suave para preservar o frescor dos ingredientes do delta subtropical; a de Shandong é salgada e frita porque nasceu na corte imperial de Beijing.",
          "Nenhum restaurante chinês no Brasil, por mais autêntico, cobre mais que duas dessas escolas. Ir à China é finalmente comer as outras seis.",
        ],
      },
      {
        heading: "Sichuan: o mala que dorme na língua",
        paragraphs: [
          "A cozinha de Sichuan (capital Chengdu) é conhecida pelo sabor 'mala' (麻辣) — a combinação da pimenta-vermelha ardida com a pimenta-de-sichuan (huajiao), que anestesia levemente a boca em vez de queimar. É uma sensação sensorial única no mundo, impossível de reproduzir com pimenta comum.",
          "O hot pot de Chongqing — panela dupla dividida com caldo picante vermelho de um lado e caldo suave de galinha e goji do outro — é a experiência gastronômica social por excelência: cada mesa cozinha os próprios ingredientes (carnes fatiadas, vegetais, tofu, cogumelos) por horas, entre cerveja Tsingtao e conversa alta. Outros clássicos: mapo tofu (o original em Chengdu é uma revelação), kung pao chicken (nada a ver com a versão americana), dan dan mian (macarrão apimentado com pasta de sésamo).",
        ],
      },
      {
        heading: "Cantonesa: dim sum, dim sum, dim sum",
        paragraphs: [
          "A cozinha cantonesa (Guangzhou, Hong Kong, Macau) é a mais delicada e a mais internacional das oito — foi a que os imigrantes chineses levaram para o mundo no século XIX, dando origem aos 'chineses de bairro' em todo o Ocidente.",
          "Sua expressão máxima é o yum cha ('beber chá') com dim sum: brunches longos de fim de semana onde carrinhos passam entre as mesas oferecendo dezenas de pratinhos cozidos no vapor em cestas de bambu — har gow (dumpling de camarão translúcido), siu mai (bolinho aberto de porco e camarão), char siu bao (pão fofinho de porco laqueado doce), cheung fun (rolinhos de arroz), egg tarts portugueses de Macau. Em Hong Kong, restaurantes como Lung King Heen (o primeiro dim sum com três estrelas Michelin) elevaram a tradição a arte contemporânea.",
          "Outros marcos cantoneses: pato assado de Guangzhou, sopa de barbatana (hoje polêmica), congee (mingau de arroz) no café-da-manhã, cha siu (porco laqueado vermelho) e o inigualável arroz claypot cozido em panela de barro.",
        ],
      },
      {
        heading: "Pato Laqueado de Beijing: o teatro da mesa",
        paragraphs: [
          "O Pato Laqueado (Peking Duck) é a cozinha imperial em sua forma mais icônica — receita da dinastia Ming (século XV) que se preservou intacta. Casas centenárias como Quanjude (fundada em 1864) e as contemporâneas Da Dong e Duck de Chine servem o pato inteiro em três momentos: primeiro a pele crocante caramelizada em fatias finas para comer com açúcar; depois as fatias de carne e pele enroladas em panquecas mandarim com molho hoisin, alho-poró e pepino; por fim, os ossos viram sopa clara servida no final.",
          "O ritual dura duas horas. O chef fatia o pato à mesa em 108 pedaços (número simbólico), com técnica de faca herdada dos cozinheiros da corte Qing. É uma refeição que justifica um voo internacional — literalmente.",
        ],
      },
      {
        heading: "Xi'an e Uigur: a cozinha da Rota da Seda",
        paragraphs: [
          "Xi'an, o ponto de partida da antiga Rota da Seda, tem uma cozinha própria misturando influências chinesas Han com muçulmanos huí e uigures do noroeste. O bairro muçulmano de Xi'an (perto da Grande Mesquita) fica aberto até tarde e é uma explosão sensorial: espetos de cordeiro grelhados sobre carvão com cominho e pimenta, roujiamo (o 'hambúrguer chinês' de porco desfiado num pãozinho branco assado no forno — considerado por historiadores o hambúrguer mais antigo do mundo, do século II a.C.), yangrou paomo (sopa de cordeiro com pão amassado à mão pelo próprio cliente na tigela).",
          "Nas províncias uigures de Xinjiang (Kashgar, Urumqi), a comida é praticamente turca ou uzbeque: laghman (macarrão puxado à mão em fio único de metros com molho de cordeiro e pimentões), polo (arroz com cordeiro e cenoura), naan em forno tandoor, chá com leite salgado. Uma China que a maioria dos brasileiros não sabe que existe.",
        ],
      },
      {
        heading: "Street food chinesa: o que provar caminhando",
        paragraphs: [
          "Em qualquer cidade chinesa, a rua alimenta melhor que muito restaurante. Em Shanghai, os xiao long bao (dumplings de sopa) do Din Tai Fung ou do humilde Jia Jia Tang Bao explodem caldo escaldante ao primeiro furo — técnica: coloque na colher, morda na lateral, sopre, tome o caldo, coma o resto. Em Beijing, jianbing (crepe de trigo com ovo, coentro e molho apimentado) é o café-da-manhã de rua obrigatório, feito em chapas quentes nas calçadas das 6h às 9h.",
          "Em Chengdu, dan dan noodles vendidos por ambulantes com balanças de bambu nos ombros; em Xi'an, biang biang mian (macarrão largo puxado à mão, cujo caractere tem 58 traços — o mais complexo do mandarim); em Guangzhou, congee com peixe cru e amendoim; em Kunming (Yunnan), rice noodles 'over the bridge' servidos em caldo tão quente que cozinha os ingredientes na tigela do cliente.",
        ],
      },
      {
        heading: "Chá chinês: o berço de tudo",
        paragraphs: [
          "A China é o berço mundial do chá — cultivado há 4.700 anos, exportado para o mundo pela Rota da Seda, base de todas as culturas do chá (japonesa, indiana, inglesa, russa). A cerimônia gongfu do sudeste chinês serve chá em xícaras minúsculas de porcelana em múltiplas infusões curtas, cada uma revelando uma faceta diferente da mesma folha.",
          "Yunnan produz o Pu'er (chá fermentado que envelhece como vinho — discos de 20 anos podem custar milhares de dólares), Fujian produz os oolongs Tie Guan Yin e Da Hong Pao (chá das rochas dos Wuyi), Zhejiang produz o Longjing (chá verde 'Poço do Dragão' de Hangzhou, servido ao presidente Nixon em 1972). Uma cerimônia com mestre em um clube de chá de Chengdu ou Kunming é uma das experiências culturais mais silenciosas e transformadoras que existe.",
        ],
      },
      {
        heading: "Roteiro gastronômico autoral Create Travel",
        paragraphs: [
          "Nossa curadoria gastronômica pela China combina: Beijing (3 dias — Pato Laqueado no Da Dong, jianbing de rua, jantar imperial em hutong), Chengdu (2 dias — hot pot mala, aula de culinária sichuanesa, cerimônia de chá em clube tradicional), Xi'an (2 dias — bairro muçulmano à noite com guia local, roujiamo, biang biang mian), Shanghai (3 dias — xiao long bao no Din Tai Fung, cantonesa em Yong Foo Elite, coquetel no Bund).",
          "Para viajantes que já conhecem a China clássica, oferecemos extensão gastronômica em Yunnan (5 dias — chá pu'er nas montanhas de origem, cozinha das minorias étnicas Bai e Naxi, mercados de especiarias em Kunming) ou Guangzhou–Hong Kong (5 dias — imersão cantonesa completa com dim sum em três estrelas Michelin).",
        ],
      },
    ],
    faq: [
      {
        q: "A comida chinesa autêntica é muito diferente da servida no Brasil?",
        a: "Radicalmente. O que se serve no Brasil (yakisoba, frango xadrez, rolinho primavera) é uma versão adaptada da cozinha cantonesa levada por imigrantes há um século. A comida real na China varia por província com a mesma diversidade que a europeia — cantonesa, sichuanesa e uigur não têm quase nada em comum.",
      },
      {
        q: "É muito apimentada?",
        a: "Depende da região. Sichuan e Hunan são famosas pelo picante. Cantonesa e Jiangsu são suaves. Beijing tem sabores intermediários. Guias e restaurantes ajustam pratos ao paladar ocidental sob demanda — mas experimentar o mala autêntico de Sichuan uma vez é obrigatório.",
      },
      {
        q: "Tem opções vegetarianas?",
        a: "Sim, especialmente perto de templos budistas (tofu, cogumelos, vegetais fermentados). A cozinha vegetariana budista chinesa é milenar. Vegano é mais difícil (muitos pratos usam banha ou molho de peixe fermentado); avise sempre 'wo chi su' (sou vegetariano).",
      },
      {
        q: "Vale fazer uma aula de culinária?",
        a: "Fortemente recomendado, especialmente em Chengdu (sichuanesa) e Yangshuo (cantonesa rural). Aulas de 4h com mercado de manhã e almoço do que se cozinhou são um dos melhores investimentos culturais da viagem.",
      },
    ],
    relatedDestinations: [
      { label: "China Clássica — Beijing, Xi'an e Shanghai", href: "/destinos/asia/china/classica" },
      { label: "Yunnan — a China que ninguém conta", href: "/destinos/asia/china/yunnan" },
      { label: "Grupo China Dourada · Outono 2026", href: "/grupos/china-2026" },
    ],
    imageAiPrompt:
      "Overhead flat lay editorial photo of a Chinese banquet table with dim sum bamboo steamers, Sichuan hot pot bubbling red oil, Peking duck sliced on white plate, hand-pulled noodles, tea in porcelain gaiwan, chopsticks, dark rustic wood table, moody warm cinematic light, magazine food photography, no text.",
    imageOverrideUrl: "/src/assets/diary/gastronomia-china.jpg",
    publishedAt: "2026-07-10",
    readingMinutes: 10,
    category: "Cultura",
    whatsappName: "Roteiro gastronômico China",
  },
  {
    slug: "china-alem-do-obvio-yunnan-guizhou-etnias",
    title: "China além do óbvio: Yunnan, Guizhou e as 55 etnias esquecidas",
    h1: "China além do óbvio: Yunnan, Guizhou e as 55 etnias esquecidas",
    metaDescription:
      "A China que quase nenhum brasileiro conhece: arrozais de Yuanyang, aldeias Miao e Dong em Guizhou, Shangri-La tibetana. Roteiro autoral Create Travel.",
    keywords:
      "china alternativa, yunnan turismo, guizhou china, arrozais yuanyang, minorias étnicas china, lijiang shangri-la, china fora do óbvio, aldeias miao dong",
    intro:
      "Quando um brasileiro pensa em China, pensa em Beijing, na Grande Muralha, em Xangai. Só que a China tem 9,6 milhões de km² — quase o dobro do Brasil — e 56 etnias oficialmente reconhecidas, das quais 55 são minorias com línguas, arquiteturas, religiões e culinárias próprias. A maioria vive no sudoeste do país, em duas províncias que quase nenhum roteiro comercial visita: Yunnan e Guizhou. É lá que está a China mais fotogênica, mais lenta, mais autêntica — e que quase nenhum viajante brasileiro sabe que existe.",
    sections: [
      {
        heading: "Por que Yunnan é um dos destinos mais subestimados do planeta",
        paragraphs: [
          "Yunnan (literalmente 'ao sul das nuvens') faz fronteira com Vietnã, Laos e Myanmar. Tem 25 das 55 etnias minoritárias chinesas, cinco cordilheiras (incluindo o Himalaia oriental), lagos alpinos, florestas tropicais no sul, chá cultivado há 1.700 anos e cidades antigas que a UNESCO listou repetidamente.",
          "Enquanto a China oriental industrial recebe 90% dos turistas, Yunnan continua um mundo à parte — trekking sério na Garganta do Salto do Tigre, arrozais mundialmente fotografados em Yuanyang, cidade antiga Naxi em Lijiang ao pé da Montanha do Dragão de Jade nevada, mosteiros tibetanos autênticos em Shangri-La (a 3.200m). Um único voo doméstico de 3h a partir de Shanghai muda de mundo.",
        ],
      },
      {
        heading: "Yuanyang: os arrozais mais fotografados do mundo",
        paragraphs: [
          "No sul de Yunnan, o povo Hani vem esculpindo montanhas inteiras em terraços de arroz há 1.300 anos. Em 2013 a UNESCO declarou o sistema patrimônio mundial pela engenhosidade hidráulica (canais que descem da floresta no cume irrigando cada terraço) e pela integração cultural (aldeias inteiras vivem exclusivamente dessa cultura).",
          "Entre fevereiro e março, quando os terraços estão cheios de água antes do plantio, o amanhecer sobre Duoyishu ou Bada é um dos espetáculos naturais mais cinematográficos do planeta: cada nível reflete o céu rosa e dourado em espelhos que descem a montanha em curvas orgânicas por 3.000 hectares. Sebastião Salgado fotografou aqui para Genesis. Michael Kenna dedicou uma série inteira. National Geographic voltou três vezes.",
        ],
      },
      {
        heading: "Lijiang e Shangri-La: China tibetana",
        paragraphs: [
          "A cidade antiga de Lijiang (2.400m) é patrimônio UNESCO desde 1997 — 800 anos de história Naxi (etnia matriarcal com escrita pictográfica dongba, a última escrita pictográfica do mundo ainda em uso religioso), casas de madeira em canais, restaurantes com músicos tocando composições ancestrais em instrumentos da dinastia Tang. Ao fundo, a Montanha do Dragão de Jade (5.596m) coberta de neve o ano inteiro.",
          "Três horas ao norte, subindo por vales cada vez mais tibetanos, chega-se a Shangri-La (3.200m). A cidade foi oficialmente rebatizada em 2001 (antes se chamava Zhongdian) — o governo chinês reivindicou ser esta a inspiração do romance 'Horizonte Perdido' (1933) de James Hilton. Verdadeira ou não, a atmosfera é tibetana pura: Mosteiro Songzanlin (réplica menor do Palácio de Potala em Lhasa) com 700 monges lamas, maior roda de oração do mundo (21m de altura) e pastagens de iaques no verão.",
        ],
      },
      {
        heading: "Guizhou: a China que nem os chineses conhecem",
        paragraphs: [
          "Guizhou, ao leste de Yunnan, é a província com o maior número de minorias étnicas por km² da China — 18 etnias oficialmente reconhecidas, com destaque para os Miao (que os brasileiros chamam de Hmong, a mesma etnia que vive no norte do Laos e Vietnã) e os Dong.",
          "Xijiang, a maior aldeia Miao do mundo, tem mil casas de madeira em palafitas empilhadas em anfiteatro natural na encosta. À noite, todas as luzes acendem simultaneamente como constelação. Mulheres ainda usam trajes bordados à mão e toucas de prata pesando 3kg em cerimônias — cada peça é dote familiar passado por gerações.",
          "Os Dong constroem torres de tambor de até 9 andares e pontes cobertas sem usar um único prego — só encaixes, patrimônio imaterial UNESCO. Zhaoxing tem cinco torres num único vilarejo. Ao entardecer, mulheres cantam polifonia dong (também UNESCO) em harmonias impossíveis que só existem ali.",
        ],
      },
      {
        heading: "Festivais étnicos: mais de 400 por ano",
        paragraphs: [
          "Guizhou tem mais de 400 festivais tradicionais anuais — um a cada dia em algum vilarejo. Os principais: Sisters' Meal Festival dos Miao (abril, o mais antigo festival de amor do mundo — mulheres oferecem bolinhos coloridos aos pretendentes com fio de linha dentro para dizer sim ou espinho de pinheiro para dizer não), Festival Lusheng (setembro — aldeias inteiras dançando com flautas de bambu de 3m), Ano Novo Miao (novembro–dezembro — lutas de touros, ópera de máscaras, banquetes comunais que duram dias).",
          "Yunnan tem os seus: Festival dos Baldes de Água dos Dai (abril, no sul tropical de Xishuangbanna — herança budista theravada, praticamente igual ao Songkran tailandês), Festival da Tocha Yi (julho — tochas de fogo iluminam vilarejos inteiros por três noites), Festival das Flores Bai (março, em Dali).",
        ],
      },
      {
        heading: "Como combinar Yunnan e Guizhou num roteiro de 15 dias",
        paragraphs: [
          "Nossa proposta autoral: Kunming (1 dia — capital de Yunnan, cerimônia de chá pu'er e mercado de especiarias) → Yuanyang (2 dias — arrozais UNESCO, amanhecer em Duoyishu, aldeia Hani com almoço familiar) → Lijiang (2 dias — cidade antiga Naxi, Garganta do Salto do Tigre por 1 dia) → Shangri-La (2 dias — Mosteiro Songzanlin, pastagens de iaques) → voo interno para Guizhou → Guiyang (1 dia) → aldeia Miao de Xijiang (2 dias com pernoite em guesthouse familiar) → aldeia Dong de Zhaoxing (2 dias, polifonia e torres de tambor) → cachoeira Huangguoshu (1 dia) → volta.",
          "Esse itinerário é fisicamente ativo (altitude em Shangri-La, trilhas, estradas de montanha), fotograficamente inesquecível e etnograficamente denso. Recomendamos para viajantes que já conhecem China clássica, ou para quem quer começar pela China menos óbvia — deixando Beijing para uma segunda viagem.",
        ],
      },
    ],
    faq: [
      {
        q: "Precisa fazer a China clássica antes de ir para Yunnan e Guizhou?",
        a: "Não. Muitos clientes nossos começam direto pelo sudoeste chinês, especialmente quem já viajou por Sudeste Asiático (Vietnã, Laos, Tailândia). O choque cultural é mais suave e as paisagens são mais surpreendentes. A China clássica pode virar uma segunda viagem.",
      },
      {
        q: "É muito difícil logisticamente?",
        a: "Sem curadoria, é praticamente impossível para brasileiros — quase ninguém fala inglês, aplicativos são bloqueados (Google, WhatsApp), motoristas e guesthouses só aceitam WeChat Pay e Alipay. Com guia da Create Travel em cada trecho e traslados privativos, é confortável.",
      },
      {
        q: "Tem hospedagem boa?",
        a: "Em Kunming, Lijiang e Guiyang há hotéis 4–5 estrelas internacionais. Em Yuanyang e nas aldeias Miao e Dong, guesthouses charmosas de madeira com aquecimento, banheiro privativo e boa comida caseira. Não espere resort — espere autenticidade com conforto.",
      },
      {
        q: "Quando é a melhor época?",
        a: "Fevereiro–março para arrozais de Yuanyang cheios de água (foto icônica), setembro–novembro para colheita, clima seco e festivais Miao. Evite julho–agosto (chuva intensa) e o feriado nacional chinês (01–07/10 — lotação máxima).",
      },
      {
        q: "Combina com Vietnã ou Laos?",
        a: "Perfeitamente. Yunnan faz fronteira com Vietnã e Laos, e voos entre Kunming e Hanói ou Luang Prabang são baratos e rápidos. Muitos clientes fazem 15 dias sudoeste chinês + 10 dias Vietnã norte, com fronteira terrestre pelo cume Hekou.",
      },
    ],
    relatedDestinations: [
      { label: "Yunnan — a China que ninguém conta", href: "/destinos/asia/china/yunnan" },
      { label: "Guizhou — aldeias Miao e Dong", href: "/destinos/asia/china/guizhou" },
      { label: "China Clássica — Beijing, Xi'an e Shanghai", href: "/destinos/asia/china/classica" },
      { label: "Pacote China Autoral — Yunnan e Guizhou", href: "/pacote/china-yunnan-guizhou" },
    ],
    imageAiPrompt:
      "Ultra realistic editorial photo of Lijiang old town in Yunnan China at dusk, cobblestone streets with red lanterns glowing, wooden Naxi architecture, Jade Dragon Snow Mountain in distance, cinematic warm light, no people, magazine travel cover.",
    imageOverrideUrl: "/src/assets/diary/china-alternativa.jpg",
    publishedAt: "2026-07-10",
    readingMinutes: 11,
    category: "Destino",
    whatsappName: "Roteiro China Yunnan e Guizhou",
  },
  {
    slug: "grande-rota-indochina-vietna-camboja-laos",
    title: "Grande Rota da Indochina: Vietnã, Camboja e Laos numa só viagem",
    h1: "Grande Rota da Indochina: Vietnã, Camboja e Laos numa só viagem",
    metaDescription:
      "Roteiro integrado de 21 dias pela antiga Indochina francesa: Hanói, Halong, Hoi An, Angkor, Luang Prabang e o Mekong. Guia autoral Create Travel.",
    keywords:
      "roteiro indochina, viagem vietnã camboja laos, indochina francesa, angkor luang prabang halong, mekong roteiro, sudeste asiático integrado",
    intro:
      "Vietnã, Camboja e Laos foram, por 70 anos, uma só entidade política — a Indochina Francesa. Compartilham o rio Mekong, a herança budista theravada (Laos e Camboja) e mahayana (Vietnã), a arquitetura colonial em amarelo-mostarda das capitais e uma culinária que troca receitas nas fronteiras. Fazer os três num único roteiro não é acumular carimbos: é entender como uma mesma região produziu a delicadeza dos templos khmer, a energia caótica de Hanói e o silêncio monástico de Luang Prabang. Vinte e um dias bem desenhados fazem essa viagem caber sem correria.",
    sections: [
      {
        heading: "Por que combinar os três — e não fazer um por vez",
        paragraphs: [
          "Os três países são complementares em ritmo. O Vietnã é intenso, cinematográfico, urbano; o Camboja concentra a experiência espiritual em Angkor e a melancolia histórica em Phnom Penh; o Laos é o desacelerador, o país onde monges caminham descalços ao amanhecer e o tempo se dilata no Mekong. Fazer os três em sequência cria um arco emocional que nenhum deles isolado entrega.",
          "Geograficamente também faz sentido: voos internos curtos (1h–1h30) e cruzamentos terrestres viáveis conectam Hanói → Luang Prabang → Siem Reap → Ho Chi Minh sem grandes deslocamentos. É um dos raros roteiros multi-país da Ásia que não exige logística acrobática.",
        ],
      },
      {
        heading: "Vietnã — do norte cárstico ao delta do Mekong",
        paragraphs: [
          "Comece por Hanói: cidade velha de 36 ruas de artesãos, cafés franceses do início do século XX, ópera colonial, pho ao amanhecer em tigelas fumegantes e o Templo da Literatura (1070, a primeira universidade do Vietnã). Duas noites são mínimas.",
          "Depois, a Baía de Halong ou a menos turística Bai Tu Long em cruzeiro de dois dias — 1.600 ilhas de calcário emergindo de água esmeralda, cavernas iluminadas, jantar no convés sob estrelas. Voo para Hue (cidade imperial dos Nguyen) ou trem noturno para Hoi An — a cidade-postal do Vietnã, lanternas de seda em cada esquina, alfaiates que fazem terno sob medida em 24h, praia An Bang a 4km.",
          "Fechamento em Ho Chi Minh City (antiga Saigon) — pulsação econômica, catedral Notre-Dame de tijolos vermelhos, mercado Ben Thanh, jantar de banh xeo em ruelas e um dia no delta do Mekong (Ben Tre ou Can Tho) navegando entre plantações de coco, casas flutuantes e mercados aquáticos.",
        ],
      },
      {
        heading: "Camboja — Angkor e a alma khmer",
        paragraphs: [
          "Voo curto de Ho Chi Minh (ou de Hanói via Bangkok) para Siem Reap. Angkor merece três dias inteiros, não um passe rápido. Dia 1: pequeno circuito (Angkor Wat ao amanhecer, Angkor Thom com os 216 rostos de Bayon, Ta Prohm engolido pelas raízes de figueira). Dia 2: grande circuito com Preah Khan e Neak Pean. Dia 3: templos periféricos — Banteay Srei (o mais delicadamente esculpido, em arenito rosa) e Beng Mealea semi-selvagem, 60km ao leste.",
          "Extensão possível para Battambang (cidade colonial francesa preservada, teatro de circo social Phare Ponleu Selpak) ou para as ilhas do sul (Koh Rong Samloem) para descompressão de 3 dias em praias de areia branca ainda pouco desenvolvidas.",
          "Phnom Penh vale duas noites para quem quer a camada histórica completa: Palácio Real, museu nacional com a maior coleção de arte khmer do mundo e o par Tuol Sleng / Choeung Ek — memoriais do genocídio Khmer Rouge (1975–79). Não é fácil, mas é essencial para entender o Camboja contemporâneo.",
        ],
      },
      {
        heading: "Laos — o silêncio que faltava",
        paragraphs: [
          "Voo Siem Reap → Luang Prabang (via Vientiane) coloca o viajante num outro tempo. Luang Prabang é patrimônio UNESCO integral — a cidade inteira. 33 templos budistas ativos, arquitetura colonial francesa em madeira e estuque, confluência do Mekong com o Nam Khan, montanhas ao redor.",
          "Amanhecer com a cerimônia do tak bat — mais de 200 monges de túnica laranja recebendo esmolas de arroz de moradores ajoelhados nas calçadas em silêncio absoluto. É uma das cenas mais fotografadas do sudeste asiático, mas quem participa com respeito (sem flash, mantendo distância, vestindo-se com decoro) leva memória para vida inteira.",
          "Excursões a partir de Luang Prabang: cachoeiras Kuang Si (águas turquesa em piscinas naturais escalonadas), grutas de Pak Ou (4.000 estátuas de Buda em duas cavernas sagradas sobre o Mekong), aldeias Hmong e Khmu. Extensão para Vang Vieng (paisagens cársticas em vales de arroz — o Halong terrestre do Laos) e Vientiane, a capital mais tranquila do sudeste asiático.",
        ],
      },
      {
        heading: "O Mekong como fio condutor",
        paragraphs: [
          "O rio Mekong nasce no Tibete e atravessa Yunnan, Mianmar, Laos, Tailândia, Camboja e Vietnã antes de se abrir num delta gigante. Nos três países desta rota ele é personagem constante — cruzeiro de dois dias entre Huay Xai e Luang Prabang em barco tradicional de madeira, jantares às margens em Phnom Penh, mercados flutuantes no delta vietnamita ao amanhecer.",
          "Para quem quer aprofundar o Mekong como experiência única, cruzeiros de luxo (Aqua Mekong, Aman Mekong) fazem trechos de 4 a 7 noites entre Siem Reap e Ho Chi Minh com paradas em vilarejos khmer, aulas de culinária a bordo e naturalistas explicando ecossistemas ribeirinhos.",
        ],
      },
      {
        heading: "Estrutura sugerida de 21 dias",
        paragraphs: [
          "Vietnã (10 dias): Hanói 3 + cruzeiro Halong 2 + Hoi An/Hue 3 + Ho Chi Minh e Mekong 2. Camboja (6 dias): Siem Reap/Angkor 4 + Phnom Penh 2. Laos (5 dias): Luang Prabang 4 + Vientiane 1. Voos internos: 4 (Hanói–Da Nang, Ho Chi Minh–Siem Reap, Siem Reap–Luang Prabang, Vientiane–Bangkok saída).",
          "Extensões premiadas: cruzeiro Mekong de luxo substituindo dias soltos entre Siem Reap e Ho Chi Minh; norte remoto do Vietnã (Ha Giang, Sapa) para quem tem 5 dias extras; ilhas cambojanas para descanso final.",
        ],
      },
      {
        heading: "Quando ir e o que evitar",
        paragraphs: [
          "Novembro a março é a melhor janela: seca em todos os três países, temperaturas amenas no norte do Vietnã (14°–22°C), quentes mas sem chuva em Angkor e Luang Prabang. Abril é quentíssimo (40°C no Camboja), com Ano Novo Budista (Songkran/Bunpimay/Chol Chnam Thmay) — festivo, mas com estradas cheias e hotéis caros. Maio a outubro é temporada de chuvas (não impede viagem, mas exige flexibilidade).",
          "Evite os feriados nacionais: Tet vietnamita (janeiro/fevereiro), Ano Novo Chinês (fecha muita coisa em Hanói e Ho Chi Minh) e feriado do trabalho (30/04–01/05 no Vietnã) por conta de lotação e preços altos.",
        ],
      },
    ],
    faq: [
      {
        q: "É seguro fazer os três países numa viagem só?",
        a: "Sim. Vietnã, Camboja e Laos estão entre os países mais seguros do sudeste asiático para turistas — crime violento contra estrangeiros é raro. Cuidados usuais com carteira em multidões (Hanói e Ho Chi Minh) e trânsito caótico são suficientes.",
      },
      {
        q: "Preciso de vistos para os três?",
        a: "Brasileiros não precisam de visto para o Vietnã (isenção até 45 dias desde 2023). Camboja e Laos oferecem e-visa online rápida (US$ 30–50). Todo o processo é feito em casa antes da viagem — a Create Travel envia o checklist com prazos.",
      },
      {
        q: "Dá para fazer com filhos?",
        a: "Sim, a partir de 10 anos idealmente. Angkor pode ser cansativo no calor; adaptamos o roteiro com pausas em piscina, cruzeiro Mekong (adoram) e aulas de culinária em família. Para famílias com crianças menores, sugerimos versão de 14 dias focada em Vietnã e Camboja.",
      },
      {
        q: "Qual é o gasto médio por pessoa em curadoria Create Travel?",
        a: "Depende de padrão de hospedagem e sazonalidade. Trabalhamos com hotéis boutique 4–5 estrelas, guias privativos falando português ou inglês em cada trecho e traslados em veículo particular. Solicite proposta detalhada pelo WhatsApp com as datas em mente.",
      },
    ],
    relatedDestinations: [
      { label: "Vietnã — norte, centro e sul", href: "/destinos/asia/vietna" },
      { label: "Camboja — Angkor e além", href: "/destinos/asia/camboja" },
      { label: "Laos — Luang Prabang e Mekong", href: "/destinos/asia/laos" },
    ],
    imageAiPrompt:
      "Editorial travel photo Mekong river at sunset with traditional wooden longtail boat, karst mountains reflection, warm golden light, misty atmosphere, magazine cover style, cinematic.",
    imageOverrideUrl: "/src/assets/diary/indochina-integrada.jpg",
    publishedAt: "2026-07-13",
    readingMinutes: 12,
    category: "Roteiro",
    whatsappName: "Grande Rota da Indochina",
  },
  {
    slug: "japao-coreia-do-sul-dois-imperios-uma-viagem",
    title: "Japão e Coreia do Sul: dois impérios asiáticos em uma viagem",
    h1: "Japão e Coreia do Sul: dois impérios asiáticos em uma viagem",
    metaDescription:
      "Como combinar Japão e Coreia do Sul em 18 dias: Tokyo, Kyoto, Seul e Busan com voos curtos, cultura milenar e vanguarda urbana. Curadoria Create Travel.",
    keywords:
      "japão coreia do sul roteiro, viagem ásia oriental, tokyo seul, kyoto busan, roteiro combinado japão coreia, cultura asiática",
    intro:
      "Japão e Coreia do Sul dividem 1.500 anos de história compartilhada — budismo chegou à Coreia pela China e à Coreia pelo Japão, a caligrafia sino-coreana moldou a japonesa, o chá veio pelo mesmo caminho. Mas as diferenças são radicais: onde o Japão cultiva silêncio, minimalismo e ritual, a Coreia moderna vibra em ritmo acelerado, cores fortes e reinvenção constante. Fazer os dois na mesma viagem é entender como duas culturas próximas produziram estéticas quase opostas — e isso é um dos exercícios comparativos mais ricos que a Ásia oferece.",
    sections: [
      {
        heading: "Por que combinar — e não escolher entre eles",
        paragraphs: [
          "Voar de Tokyo para Seul leva 2h30. De Osaka para Busan, 1h30. Existe até balsa noturna (Fukuoka–Busan, 6h) para quem quer a experiência marítima. O custo logístico de somar Coreia ao Japão (ou vice-versa) é baixíssimo.",
          "Culturalmente, o ganho é enorme. Depois de dez dias no Japão, chegar em Seul é choque sensorial: neons, K-pop nas ruas, comida picante, gente falando alto, moda ousada. Depois de dez dias na Coreia, chegar em Kyoto é o oposto — silêncio, jardins secos, chá cerimonial. Um contexto amplifica o outro.",
        ],
      },
      {
        heading: "Japão — do neon de Tokyo ao musgo de Kyoto",
        paragraphs: [
          "Comece por Tokyo (4 noites): Shibuya scramble, Meiji Shrine ao amanhecer, Tsukiji Outer Market, teamLab Planets, izakayas em Golden Gai. Extensão de dia para Kamakura ou Hakone (vista do Fuji, onsen).",
          "Shinkansen para Kyoto (2h20) — capital imperial por mil anos, 1.600 templos budistas, 400 santuários xintoístas, 17 patrimônios UNESCO na cidade. Quatro noites permitem cerimônia do chá em Ura-senke, Fushimi Inari nas primeiras horas do dia, Arashiyama com bambuzal e templo Tenryu-ji, Kinkaku-ji dourado, Ryoan-ji com jardim seco e um dia inteiro em Nara (cervos livres em Nara Park, Todai-ji com o grande Buda de bronze).",
          "Osaka (2 noites) como base gastronômica — takoyaki, okonomiyaki, kaiseki, izakaya em Dotonbori. Ou substituição por Hakone/Kanazawa para quem prefere ryokan clássico com onsen.",
        ],
      },
      {
        heading: "Coreia do Sul — Seul, Busan e as ilhas",
        paragraphs: [
          "Voo Osaka → Seul (1h30). Seul (4 noites): Palácio Gyeongbokgung com troca da guarda, aldeia hanok de Bukchon com casas tradicionais de telhado curvo entre arranha-céus, mercado noturno de Gwangjang (comida de rua histórica), Myeongdong para cosmética, Hongdae para vida noturna estudantil, DMZ com almoço na fronteira (o único lugar do mundo onde ainda se atravessa a Guerra Fria a pé).",
          "KTX (trem-bala coreano) para Busan (2h20) — segunda cidade, praia de Haeundae, mercado de peixe Jagalchi, templo Haedong Yonggungsa esculpido no penhasco sobre o mar, aldeia de Gamcheon (colinas cobertas de casas coloridas escalonadas — apelidada de Machu Picchu coreano). Duas noites.",
          "Extensão para Jeju (ilha vulcânica ao sul, patrimônio natural UNESCO, cachoeiras e crateras) ou Andong (aldeia hanok viva, cerimônias confucianas) para quem tem mais 3 dias.",
        ],
      },
      {
        heading: "Diferenças que só se percebem fazendo os dois",
        paragraphs: [
          "Comida: japonesa é sobre pureza — poucos ingredientes, sabores individualizados, apresentação minimal. Coreana é sobre profundidade — banchan (dezenas de acompanhamentos), fermentação (kimchi, gochujang), churrasco na mesa. Ambas geniais, filosoficamente opostas.",
          "Templos: budistas em ambos, mas japoneses tendem ao vazio contemplativo (jardim seco de Ryoan-ji), coreanos ao colorido narrativo (Haedong Yonggungsa em Busan, templo Bulguksa em Gyeongju com pinturas dancheong).",
          "Cidades: Tokyo é ordem obsessiva; Seul é criatividade caótica. Preservação arquitetônica é maior no Japão (Kyoto sobreviveu à guerra); Coreia foi reconstruída após 1953, então tudo é novo — palácios foram remontados peça a peça.",
        ],
      },
      {
        heading: "Estrutura sugerida de 18 dias",
        paragraphs: [
          "Japão (11 dias): Tokyo 4 + Kyoto 4 + Osaka 2 + traslado 1. Coreia do Sul (7 dias): Seul 4 + Busan 2 + Jeju ou Andong 1. Voo interno Osaka–Seul no meio.",
          "Versão curta (14 dias): Tokyo 3 + Kyoto 3 + Osaka 2 + Seul 4 + Busan 2. Versão longa (24 dias): acrescentar Hakone/Kanazawa no Japão, DMZ em profundidade e Jeju completo na Coreia.",
        ],
      },
      {
        heading: "Melhor época e considerações práticas",
        paragraphs: [
          "Cerejeiras (sakura): última semana de março a segunda de abril no Japão; primeira e segunda semana de abril na Coreia. Fazendo os dois países em sequência, é possível pegar florada em ambos com timing certo — começar por Tokyo/Kyoto em fim de março e chegar em Seul na primeira semana de abril.",
          "Outono (kouyou): última semana de outubro a segunda de novembro no Japão; primeira quinzena de novembro na Coreia. Cores igualmente espetaculares e menos multidões que sakura.",
          "Evite Golden Week japonesa (29/04–05/05) e Chuseok coreano (setembro/outubro variável) — feriados nacionais com trens lotados, hotéis caros e turistas domésticos em massa.",
        ],
      },
    ],
    faq: [
      {
        q: "Vale mesmo somar Coreia ao Japão, ou é melhor esticar tempo no Japão?",
        a: "Se é sua primeira vez na Ásia oriental, dez dias só de Japão bastam. Mas se você já foi ao Japão ou tem 15+ dias, somar Coreia multiplica a experiência em vez de diluí-la. Depoimentos de clientes: 'os dois melhores países da vida em três semanas'.",
      },
      {
        q: "É difícil sem falar japonês/coreano?",
        a: "Tokyo, Kyoto, Osaka e Seul têm sinalização em inglês razoável. Fora dos eixos turísticos, praticamente ninguém fala inglês em nenhum dos dois. Com guia da Create Travel em cada trecho, deixa de ser problema.",
      },
      {
        q: "JR Pass ainda vale a pena?",
        a: "Depende. Após o reajuste de 2023 (preço subiu 70%), só vale se você fizer trecho longo (Tokyo–Hiroshima ida e volta, por exemplo). Para roteiros Tokyo–Kyoto–Osaka, comprar bilhetes avulsos hoje sai mais barato. Simulamos para cada cliente.",
      },
      {
        q: "É caro?",
        a: "Ambos são países desenvolvidos, então o custo é comparável a Europa ocidental. Japão está mais barato desde 2022 pelo iene fraco. Coreia é 15–20% mais barata que Japão em média. Curadoria Create Travel: nem barata nem cara — precisa e bem escolhida.",
      },
    ],
    relatedDestinations: [
      { label: "Japão — do Fuji às ilhas do sul", href: "/destinos/asia/japao" },
      { label: "Coreia do Sul — Seul, Busan e Jeju", href: "/destinos/asia/coreia-do-sul" },
    ],
    imageAiPrompt:
      "Editorial split composition Kyoto bamboo forest and Seoul hanok village at dusk, cinematic warm light, magazine travel cover.",
    imageOverrideUrl: "/src/assets/diary/japao-coreia.jpg",
    publishedAt: "2026-07-13",
    readingMinutes: 11,
    category: "Roteiro",
    whatsappName: "Roteiro Japão e Coreia do Sul",
  },
  {
    slug: "sudeste-asiatico-luxo-tailandia-camboja-vietna",
    title: "Sudeste Asiático de luxo: Tailândia, Camboja e Vietnã combinados",
    h1: "Sudeste Asiático de luxo: Tailândia, Camboja e Vietnã combinados",
    metaDescription:
      "Como fazer Tailândia, Camboja e Vietnã em 18 dias com curadoria de luxo: Bangkok, Chiang Mai, Angkor, Hoi An e ilhas do sul. Create Travel autoral.",
    keywords:
      "sudeste asiático luxo, tailândia camboja vietnã roteiro, angkor hoi an chiang mai, viagem sudeste asiático premium, ásia autoral",
    intro:
      "O sudeste asiático virou, nos últimos dez anos, um dos destinos de luxo mais interessantes do mundo. Não pelo brilho ostensivo — é pelo oposto: hotéis boutique instalados em templos restaurados, resorts de praia em ilhas quase privativas, cruzeiros de madeira artesanal no Mekong e a possibilidade de ter Angkor Wat quase só para você ao amanhecer, com o preparo certo. Tailândia, Camboja e Vietnã em sequência entregam três atmosferas radicalmente distintas dentro de uma mesma viagem — e é essa progressão que faz o roteiro funcionar.",
    sections: [
      {
        heading: "A lógica do trio",
        paragraphs: [
          "Tailândia é a porta de entrada natural — infraestrutura impecável, voos diretos, hotelaria de padrão mundial em Bangkok e nas ilhas. Camboja é o coração espiritual — Angkor concentra em três dias a experiência arqueológica mais impactante da região. Vietnã é o encerramento cinematográfico — paisagens dramáticas (Halong, Hoi An, delta do Mekong) e uma culinária que muitos consideram a mais refinada da Ásia.",
          "A ordem importa. Começar por Bangkok dá tempo de aclimatação (fuso, calor). Emendar Camboja no meio traz o peso histórico. Terminar no Vietnã, especialmente com noites finais em Hoi An ou nas ilhas do sul (Con Dao, Phu Quoc), transforma a viagem numa curva ascendente em vez de descendente.",
        ],
      },
      {
        heading: "Tailândia — Bangkok, norte e ilhas",
        paragraphs: [
          "Bangkok (3 noites): Grand Palace com Wat Phra Kaew, mercado flutuante de Damnoen Saduak, jantar no rio Chao Phraya em iate privativo, spa tailandês em hotel de bandeira (Mandarin Oriental, Peninsula, Four Seasons) e uma noite em rooftop (Vertigo no Banyan Tree, Sirocco no Lebua) para o skyline mais vertical do sudeste asiático.",
          "Chiang Mai (3 noites) no norte: cidade antiga murada com 30 templos budistas ativos, aula de culinária em cozinha de fazenda orgânica, Doi Suthep no alto da montanha, santuário ético de elefantes (Elephant Nature Park — só reabilitação, sem passeios nas costas) e artesanato de prata em San Kamphaeng.",
          "Encerramento tailandês nas ilhas: Phuket para conforto e voos, Krabi para calcários dramáticos, Koh Samui para praia branca, Koh Yao Noi para exclusividade quase privativa. Três noites em resort premiado (Six Senses Yao Noi, Rosewood Phuket, Four Seasons Koh Samui) são suficientes se você fizer o Vietnã depois; sete noites se for encerramento.",
        ],
      },
      {
        heading: "Camboja — Angkor sem multidões",
        paragraphs: [
          "Voo Bangkok → Siem Reap (1h). Três dias de Angkor em ritmo curatorial: chegar ao Angkor Wat às 4h30 (portões abrem às 5h) para amanhecer com pouquíssima gente, retornar ao hotel para café e descanso, voltar às 15h para Angkor Thom quando o calor cede, luzes douradas nos rostos de Bayon.",
          "Dia 2: Banteay Srei em arenito rosa (60km a nordeste, o mais delicadamente esculpido de todos), almoço em restaurante de fazenda orgânica no caminho, Ta Prohm à tarde (raízes de figueira engolindo o templo, cenário de Tomb Raider).",
          "Dia 3: templos remotos — Beng Mealea semi-selvagem, aldeia de artesãos em Kampong Kleang no lago Tonlé Sap, jantar em restaurante de chef premiado em Siem Reap (Cuisine Wat Damnak, Malis). Hospedagem: Amansara (ex-residência do rei), Belmond La Résidence d'Angkor, Raffles Grand Hotel d'Angkor.",
        ],
      },
      {
        heading: "Vietnã — do centro cultural às praias secretas",
        paragraphs: [
          "Voo Siem Reap → Da Nang (1h30). Hoi An (3 noites): cidade velha patrimônio UNESCO, lanternas de seda em cada esquina, alfaiates para terno sob medida, praia An Bang a 4km. Hospedagem: Four Seasons Nam Hai (villas com piscina privativa de frente para o mar), Anantara Hoi An (colonial francês restaurado no rio).",
          "Voo interno para Hanói (1h20) + cruzeiro de luxo na Baía de Halong (2 noites em barco de madeira artesanal — Paradise Elegance, Heritage Bình Chuẩn, Ylang by Emperor). Depois duas noites em Hanói em hotel colonial (Sofitel Metropole, 1901).",
          "Encerramento nas ilhas do sul: Con Dao (arquipélago intocado no mar do sul da China, Six Senses Con Dao com 50 villas em 1,7km de praia privativa) ou Phu Quoc (JW Marriott Emerald Bay assinado por Bill Bensley, InterContinental Long Beach). Três a cinco noites de descompressão total antes do voo de volta.",
        ],
      },
      {
        heading: "Experiências únicas que só a curadoria oferece",
        paragraphs: [
          "Angkor Wat privativo ao amanhecer com arqueólogo francês da EFEO (École Française d'Extrême-Orient). Cerimônia de bênção com monges em templo tailandês fora do circuito. Jantar particular na muralha da cidade velha de Hoi An após fechar ao público. Cruzeiro Mekong de 4 noites no Aqua Mekong (barco de 40 hóspedes com naturalistas, aulas de culinária e paradas em vilarejos khmer). Aula de culinária com chef Luke Nguyen em Ho Chi Minh City.",
          "Todas essas experiências dependem de rede local construída em anos — não estão em nenhum booking online. É o que diferencia curadoria autoral de agência convencional.",
        ],
      },
      {
        heading: "Estrutura sugerida de 18 dias",
        paragraphs: [
          "Tailândia 8 (Bangkok 3 + Chiang Mai 2 + ilhas 3) + Camboja 4 (Siem Reap/Angkor 4) + Vietnã 6 (Hoi An 3 + Halong 2 + Hanói 1). Voos internos: 4.",
          "Versão premium alongada (24 dias): +3 dias nas ilhas tailandesas, +3 no encerramento em Con Dao ou Phu Quoc. Versão familiar (14 dias): concentrar em Bangkok, Siem Reap e Hoi An com base fixa em resort de praia para 4 noites finais.",
        ],
      },
    ],
    faq: [
      {
        q: "Qual é o padrão de hospedagem que a Create Travel opera nesse roteiro?",
        a: "Trabalhamos com Aman, Six Senses, Four Seasons, Belmond, Rosewood, Anantara, Sofitel Legend, InterContinental, Raffles e boutiques independentes premiadas. A escolha depende do perfil do cliente, do orçamento e da atmosfera desejada para cada trecho.",
      },
      {
        q: "Preciso reservar com quanta antecedência?",
        a: "Para viagens em alta temporada (novembro–fevereiro), 6 a 8 meses de antecedência é o ideal. Hotéis top (Amansara em Siem Reap tem só 24 suítes, Nam Hai em Hoi An esgota) fecham cedo. Para maio–setembro, 3 a 4 meses bastam.",
      },
      {
        q: "É viagem para casais, famílias ou grupos de amigos?",
        a: "Funciona para os três formatos com adaptações. Casais tendem a preferir mais Halong e ilhas; famílias com filhos adultos gostam do balanço cultural pesado; grupos de amigos (4–6 pessoas) conseguem villas privativas de 3–4 quartos em Bali-style layouts.",
      },
      {
        q: "Tem risco de instabilidade política?",
        a: "Os três países estão estáveis do ponto de vista turístico. Tailândia teve tensões pontuais em Bangkok em anos anteriores, sempre restritas e sem afetar viajantes. Camboja e Vietnã são seguros. Monitoramos a situação em tempo real e ajustamos qualquer trecho conforme necessário.",
      },
    ],
    relatedDestinations: [
      { label: "Tailândia — Bangkok, Chiang Mai e ilhas", href: "/destinos/asia/tailandia" },
      { label: "Camboja — Angkor e além", href: "/destinos/asia/camboja" },
      { label: "Vietnã — norte, centro e sul", href: "/destinos/asia/vietna" },
    ],
    imageAiPrompt:
      "Editorial photo Angkor Wat silhouette at sunrise reflected in lotus pond, warm pink and gold sky, cinematic magazine travel.",
    imageOverrideUrl: "/src/assets/diary/sudeste-asiatico-luxo.jpg",
    publishedAt: "2026-07-13",
    readingMinutes: 12,
    category: "Roteiro",
    whatsappName: "Sudeste Asiático de Luxo",
  },
  {
    slug: "cidades-estado-asia-singapura-hong-kong-taipei",
    title: "Cidades-estado da Ásia: Singapura, Hong Kong e Taipei em 12 dias",
    h1: "Cidades-estado da Ásia: Singapura, Hong Kong e Taipei em 12 dias",
    metaDescription:
      "Roteiro curatorial pelas três metrópoles asiáticas mais interessantes: Singapura, Hong Kong e Taipei. Arquitetura, gastronomia e mercados noturnos. Create Travel.",
    keywords:
      "singapura hong kong taipei roteiro, cidades ásia, gastronomia asiática urbana, marina bay victoria peak taipei 101, viagem urbana ásia",
    intro:
      "Singapura, Hong Kong e Taipei não são cidades — são civilizações em escala urbana. As três nasceram como pontos de encontro entre a China e o Ocidente, cresceram como capitais financeiras e hoje operam como laboratórios culturais onde tradição chinesa, arquitetura contemporânea, gastronomia obsessiva e vida noturna cosmopolita coexistem em poucas dezenas de km². Fazer as três em sequência, num roteiro de 12 dias com voos curtos entre elas, é entender a Ásia oriental fora do escopo de país — na escala da cidade que virou mundo.",
    sections: [
      {
        heading: "Por que essas três, juntas",
        paragraphs: [
          "As três compartilham origem chinesa (Hokkien e cantonesa em Singapura, cantonesa em Hong Kong, mandarim e taiwanês em Taipei), passado colonial (britânico em Hong Kong e Singapura, japonês em Taiwan até 1945), e hoje operam como sociedades híbridas onde budismo, taoísmo, cristianismo e islã convivem sem atrito visível.",
          "Voos entre elas: Singapura–Hong Kong 4h, Hong Kong–Taipei 1h40. Um único roteiro cobre três estéticas urbanas quase opostas: Singapura futurista e ultra-organizada, Hong Kong vertical e caótica, Taipei descontraída e criativa.",
        ],
      },
      {
        heading: "Singapura — cidade-jardim vertical",
        paragraphs: [
          "Quatro noites permitem cobrir bem. Dia 1: Gardens by the Bay ao entardecer com show de luzes das Supertrees, jantar em restaurante étnico em Kampong Glam (bairro malaio-árabe). Dia 2: Chinatown com Buddha Tooth Relic Temple, food court Maxwell (Michelin Bib Gourmand em barraca de frango-arroz), tarde no ArtScience Museum, coquetel no rooftop do Marina Bay Sands.",
          "Dia 3: Little India com templo hindu Sri Veeramakaliamman e almoço em folha de bananeira, tarde em Tiong Bahru (bairro Art Déco reformado com cafés independentes), noite em Clarke Quay ou Boat Quay à beira do rio.",
          "Dia 4: Sentosa (praia urbana, S.E.A. Aquarium) OU excursão de dia para Pulau Ubin (ilha rústica a 15min de balsa — Singapura como era nos anos 60). Hospedagem: Raffles Singapore (colonial 1887), Marina Bay Sands (icônico), Capella (villa boutique em Sentosa).",
        ],
      },
      {
        heading: "Hong Kong — vertical, contraditória, essencial",
        paragraphs: [
          "Voo direto de Singapura (4h). Quatro noites. Dia 1: Victoria Peak ao entardecer (pico com vista de 360° das duas margens iluminadas), jantar em Central com dim sum de fim de tarde. Dia 2: Star Ferry cruzando o porto (US$ 0,30, uma das travessias mais icônicas do mundo), Kowloon, mercado noturno de Temple Street, jantar peking duck em restaurante centenário.",
          "Dia 3: escapada para Lantau Island (Big Buddha de bronze com 34m, mosteiro Po Lin, teleférico Ngong Ping 360 sobre o mar), tarde em Tai O (vilarejo de pescadores em palafitas). Dia 4: Ilhas mais remotas (Lamma, Cheung Chau) OU dia de compras curadas em Sheung Wan (antiquários, PMQ com designers locais) e tarde no M+ Museum (arquitetura de Herzog & de Meuron, maior museu de cultura visual asiática contemporânea).",
          "Hospedagem: The Peninsula (1928, lendário), Rosewood Hong Kong (2019, vista imbatível do porto), Upper House (design boutique).",
        ],
      },
      {
        heading: "Taipei — a Ásia mais descontraída",
        paragraphs: [
          "Voo Hong Kong → Taipei (1h40). Quatro noites. Dia 1: Chiang Kai-shek Memorial Hall, National Palace Museum (maior coleção de arte chinesa imperial do mundo — os melhores tesouros da Cidade Proibida foram trazidos por Chiang em 1949), jantar em Din Tai Fung original (xiao long bao — a casa nasceu aqui).",
          "Dia 2: Longshan Temple (o mais movimentado da cidade), mercado noturno de Raohe ou Shilin (os dois melhores — comida de rua de nível gastronômico: stinky tofu, oyster omelette, bubble tea), Elephant Mountain para ver o Taipei 101 iluminado.",
          "Dia 3: excursão a Jiufen (vilarejo de mineração de ouro nas montanhas, inspiração para 'A Viagem de Chihiro' de Miyazaki, casas de chá com vista do mar), Shifen para soltar lanternas voadoras com desejos escritos. Dia 4: Beitou (bairro termal a 20min de metrô — onsen japonês herdado da ocupação) ou dia inteiro em Taroko Gorge (voo curto para Hualien, um dos desfiladeiros de mármore mais espetaculares do mundo).",
          "Hospedagem: Mandarin Oriental Taipei, Grand Hyatt Taipei, hoteis boutique em Ximending.",
        ],
      },
      {
        heading: "Como as três se diferenciam gastronomicamente",
        paragraphs: [
          "Singapura é fusão explícita — cozinha peranakana (chinês + malaio), indiana do sul, chinesa hokkien e cantonesa, malaia, ocidental, tudo num único food court Michelin. Comer em hawker center é experiência antropológica.",
          "Hong Kong é excelência técnica cantonesa levada ao extremo — dim sum, roast goose, wonton noodles, e a maior densidade de estrelas Michelin por km² do mundo. É a cidade onde a cozinha chinesa moderna se profissionalizou.",
          "Taipei é criatividade descontraída — mercados noturnos são o coração da vida gastronômica, chefs jovens reinventam clássicos sem cerimônia, e é o berço mundial do bubble tea (Chun Shui Tang, Taichung, 1988). Comer em Taipei é mais barato e mais divertido que nas outras duas.",
        ],
      },
      {
        heading: "Estrutura sugerida de 12 dias",
        paragraphs: [
          "Singapura 4 + Hong Kong 4 + Taipei 4. Voos internos: 2 (Cingapura–Hong Kong 4h, Hong Kong–Taipei 1h40). Pode ser feito na ordem inversa se voos mais baratos assim configurarem.",
          "Extensões possíveis: +3 dias na Malásia (Kuala Lumpur ou Penang) partindo de Singapura; +3 dias em Macau (30min de balsa de Hong Kong — patrimônio UNESCO português + cassinos); +3 dias em Kyoto ou Taroko em Taiwan.",
        ],
      },
    ],
    faq: [
      {
        q: "É seguro nas três?",
        a: "As três estão entre as cidades mais seguras do mundo — Singapura tem uma das menores taxas de crime globais, Hong Kong é segura para turistas 24h, Taipei é conhecida pela cordialidade dos taiwaneses. Cuidados normais de metrópole são suficientes.",
      },
      {
        q: "Hong Kong ainda vale depois das mudanças políticas de 2020?",
        a: "Sim. O turismo funciona normalmente, hotéis e restaurantes seguem operando com padrão internacional. Do ponto de vista de viagem, mudou pouco. Discussões políticas em locais públicos são desaconselhadas — no mais, a cidade que impressionou o mundo continua ali.",
      },
      {
        q: "Preciso de visto?",
        a: "Brasileiros não precisam de visto para nenhum dos três (permanência de 30 a 90 dias). É um dos raros roteiros multi-país da Ásia sem burocracia de vistos.",
      },
      {
        q: "Melhor época?",
        a: "Outubro a abril: temperaturas agradáveis (18°–25°C) e menos chuva nas três. Evite julho e agosto (calor extremo, umidade alta, temporada de tufões em Hong Kong e Taipei). Ano Novo Chinês (janeiro/fevereiro) tem clima festivo mas hotéis lotam e muitas lojas fecham.",
      },
    ],
    relatedDestinations: [
      { label: "Singapura — cidade-jardim vertical", href: "/destinos/asia/singapura" },
      { label: "Hong Kong — skyline e dim sum", href: "/destinos/asia/hong-kong" },
      { label: "Taiwan — Taipei, Taroko e chá oolong", href: "/destinos/asia/taiwan" },
    ],
    imageAiPrompt:
      "Editorial night skyline of Singapore Marina Bay with illuminated skyscrapers and Supertrees glowing purple, reflections on water, cinematic long exposure.",
    imageOverrideUrl: "/src/assets/diary/cidades-estado-asia.jpg",
    publishedAt: "2026-07-13",
    readingMinutes: 11,
    category: "Roteiro",
    whatsappName: "Cidades-estado da Ásia",
  },
];


export const getDiaryPost = (slug: string): DiaryPost | undefined =>
  diaryPosts.find((p) => p.slug === slug);
