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
      "Tudo sobre a Islândia: quando ir, ring road, aurora boreal, geleiras e roteiro autoral Create Travel — luxo discreto na ilha mais cinematográfica do planeta.",
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
    title: "Namíbia: cultura, vida selvagem e o deserto mais antigo do mundo",
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
    title: "10 países africanos imperdíveis para amantes da natureza e cultura",
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
    title: "Cidades históricas de Minas Gerais: roteiro autoral pelos 7 essenciais",
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
    slug: "30-destinos-america-do-sul",
    title: "30 destinos imperdíveis da América do Sul — seleção autoral",
    h1: "30 destinos que definem a América do Sul",
    metaDescription:
      "De Galápagos à Patagônia, de Cartagena a Salar de Uyuni — seleção Create Travel dos 30 destinos imperdíveis na América do Sul.",
    keywords: "destinos america do sul, melhores destinos america do sul, america do sul viagem",
    intro:
      "A América do Sul tem doze países e uma diversidade de paisagens e culturas que poucos continentes do mundo igualam. Esta seleção combina ícones absolutos e jóias menos conhecidas — tudo testado pela curadoria Create Travel.",
    sections: [
      {
        heading: "Os 30 destinos",
        paragraphs: [
          "Argentina: 1. Buenos Aires · 2. Patagônia (El Calafate + El Chaltén) · 3. Salta e Cafayate · 4. Mendoza · 5. Bariloche.",
          "Chile: 6. Torres del Paine · 7. Atacama · 8. Ilha de Páscoa · 9. Vale do Colchagua · 10. Chiloé.",
          "Peru: 11. Machu Picchu + Vale Sagrado · 12. Amazônia peruana (Tambopata) · 13. Arequipa e Cañón del Colca · 14. Lima gastronomia.",
          "Bolívia: 15. Salar de Uyuni · 16. La Paz e Vale da Lua.",
          "Equador: 17. Galápagos · 18. Quito + Otavalo.",
          "Colômbia: 19. Cartagena · 20. Eixo cafeteiro · 21. Tayrona + Ciudad Perdida.",
          "Brasil: 22. Lençóis Maranhenses · 23. Fernando de Noronha · 24. Chapada Diamantina · 25. Amazônia · 26. Pantanal · 27. Rio de Janeiro · 28. Bonito.",
          "Uruguai: 29. José Ignacio + Garzón.",
          "Venezuela (quando estável): 30. Roraima/Salto Angel.",
        ],
      },
      {
        heading: "Combinações sugeridas",
        paragraphs: [
          "Patagônia argentina + chilena (12-15 dias). Peru + Bolívia (Machu Picchu + Uyuni, 10-12 dias). Colômbia capital + Cartagena (10 dias). Galápagos solo (8 dias). Brasil norte-nordeste (Lençóis + Noronha, 10 dias).",
        ],
      },
    ],
    faq: [
      {
        q: "Qual destino para primeira viagem à América do Sul?",
        a: "Patagônia (argentina ou chilena), Peru ou Colômbia. Infraestrutura turística madura e roteiros fluidos.",
      },
    ],
    relatedDestinations: [
      { label: "Destinos na América do Sul", href: "/destinos?c=america-do-sul" },
    ],
    imageAiPrompt:
      "Salar de Uyuni Bolivia at sunrise, mirror-like salt flats reflecting sky perfectly, soft pink and gold colors, cinematic editorial painterly, no people, ultra detailed",
    publishedAt: "2026-05-24",
    readingMinutes: 6,
    category: "Roteiro",
    whatsappName: "Roteiro América do Sul",
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
    title: "Ilhas do Brasil: as 7 imperdíveis para quem busca beleza rara",
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
];

export const getDiaryPost = (slug: string): DiaryPost | undefined =>
  diaryPosts.find((p) => p.slug === slug);
