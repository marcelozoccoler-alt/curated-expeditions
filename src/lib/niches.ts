import { FAQ } from "./types";

export interface NicheSection {
  heading: string;
  body: string;
}

export interface Niche {
  slug: string;
  title: string; // SEO title
  metaDescription: string;
  h1: string;
  kicker: string;
  intro: string;
  heroImageUrl: string;
  bestTime: string;
  idealDuration: string;
  sections: NicheSection[];
  destinationSlugs: string[]; // refers to destinations.ts slugs
  staySlugs: string[]; // refers to stays.ts slugs
  pullQuote: string;
  faq: FAQ[];
}

export const niches: Niche[] = [
  {
    slug: "safari-africa",
    title: "Safári na África: guia editorial de luxo discreto | Create Travel",
    metaDescription:
      "Como planejar um safári autoral e ético na África: melhores meses, países, lodges e roteiros desenhados pela Create Travel.",
    h1: "Safári na África",
    kicker: "Guia editorial",
    intro:
      "Um safári de verdade não é uma corrida atrás de animais — é a arte de chegar no lugar certo, com o guia certo, no horário certo. A Create Travel desenha safáris que privilegiam baixa densidade de hóspedes, condutores excepcionais e a ética animal acima da foto rápida.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=1920&h=1080&fit=crop",
    bestTime: "Jun–Out (estação seca, alta concentração de fauna) e Jan–Mar (nascimentos no sul do Serengeti).",
    idealDuration: "10 a 14 noites combinando duas a três reservas privadas + extensão de praia.",
    pullQuote:
      "O bom safári se mede em silêncio, não em check-list. É o que separa um drive turístico de uma manhã que muda quem você é.",
    sections: [
      {
        heading: "Quais países considerar",
        body:
          "Tanzânia (Serengeti, Ngorongoro) e Quênia (Masai Mara) são as portas clássicas — alta densidade de fauna e infraestrutura impecável. Botsuana (delta do Okavango) entrega exclusividade e baixíssima lotação. Namíbia agrega deserto e céu. África do Sul funciona bem para um primeiro safári com famílias. Ruanda é a experiência rara de gorilas-de-montanha.",
      },
      {
        heading: "Como escolher o lodge certo",
        body:
          "Privilegiamos reservas privadas (não parques públicos) por densidade controlada de veículos, guias experientes e atuação real em conservação. Tendas com luxo discreto superam resorts grandiosos: a experiência acontece fora do quarto.",
      },
      {
        heading: "Ética animal: o que importa",
        body:
          "Veículos abertos, distância respeitosa, rádios silenciosos e leitura de comportamento. Recusamos operadores que perseguem felinos ou que prometem 'animal garantido'. Respeito vira melhor avistamento — sempre.",
      },
      {
        heading: "Combinações naturais",
        body:
          "Bush + beach (Serengeti + Zanzibar) é a clássica. Deserto + delta (Namíbia + Okavango) é a versão mais autoral. Para lua de mel: Mara + Maldivas ou Mara + Seychelles.",
      },
    ],
    destinationSlugs: [
      "africa/tanzania/serengeti",
      "africa/quenia/masai-mara",
      "africa/botsuana/okavango",
      "africa/namibia",
      "africa/ruanda/gorilas",
      "africa/zanzibar",
    ],
    staySlugs: ["singita-grumeti", "andbeyond-bateleur", "andbeyond-sossusvlei"],
    faq: [
      { q: "Quantos dias de safári são suficientes?", a: "10 a 14 noites permitem combinar duas reservas + descanso. Menos de 7 noites tende a render apenas uma única região." },
      { q: "Safári com crianças funciona?", a: "Sim, em lodges com programa Mini-Rangers. Idade mínima geral é 6–8 anos em reservas privadas." },
      { q: "É seguro?", a: "Sim. Reservas privadas operam com altíssimo padrão de segurança e logística aérea charter." },
      { q: "Vacinas necessárias?", a: "Febre amarela é obrigatória para Tanzânia/Quênia e antimaláricos são recomendados. Confirme com seu médico." },
      { q: "Qual o melhor mês para a grande migração?", a: "Jul–Out para travessias de rio no Mara; Jan–Mar para nascimentos no sul do Serengeti." },
      { q: "Vale a pena combinar com Maldivas ou Zanzibar?", a: "Sim — bush + beach é a sequência mais bem-sucedida em lua de mel e viagens longas." },
    ],
  },
  {
    slug: "lua-de-mel",
    title: "Lua de mel autoral: destinos, hotéis e roteiros sob medida | Create Travel",
    metaDescription:
      "Lua de mel sob medida com curadoria de luxo discreto: melhores destinos, hospedagens e combinações para o seu momento.",
    h1: "Lua de mel autoral",
    kicker: "Para casais",
    intro:
      "Uma lua de mel não pede check-list de bucket-list — pede ritmo. A Create Travel desenha viagens que combinam intimidade, paisagem extraordinária e gastronomia memorável, com hotéis escolhidos pelo cuidado, não pela ostentação.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920&h=1080&fit=crop",
    bestTime: "Depende do destino: Polinésia (Mai–Out), África (Jul–Out), Japão (Mar–Mai e Out–Nov).",
    idealDuration: "12 a 18 noites combinando dois a três cenários complementares.",
    pullQuote:
      "A melhor lua de mel não é a mais cara — é aquela em que o casal se reconhece em cada manhã.",
    sections: [
      {
        heading: "Quatro narrativas que funcionam",
        body:
          "1) Praia + Selva (Noronha + Amazônia ou Maldivas + Sri Lanka). 2) Cultura + Refúgio (Japão + Bali ou Itália + Grécia). 3) Aventura + Spa (Patagônia + Atacama ou Islândia + Açores). 4) Bush + Beach (Mara + Zanzibar).",
      },
      {
        heading: "O que torna um hotel realmente romântico",
        body:
          "Não é a banheira de hidromassagem — é a qualidade do silêncio, a privacidade do café da manhã, a discrição do serviço. Selecionamos casas pequenas, propriedades de baixa densidade e suítes com privacidade real.",
      },
      {
        heading: "Detalhes que cuidamos",
        body:
          "Voo em classe que importa, transfers privativos sem espera, jantares isolados, surpresas alinhadas com o casal (nunca clichês), reservas em restaurantes difíceis e janelas de descanso entre cenários.",
      },
      {
        heading: "Erros comuns que evitamos",
        body:
          "Excesso de cidades, voos longos no início, último dia agitado, ritmo de check-in/check-out diário. Lua de mel pede pousos longos.",
      },
    ],
    destinationSlugs: [
      "brasil/fernando-de-noronha",
      "asia/japao",
      "europa/grecia/ilhas",
      "oceania/polinesia-francesa",
      "asia/indonesia/bali",
      "africa/zanzibar",
    ],
    staySlugs: ["nannai-noronha", "uxua-trancoso", "amankora-bhutan", "andbeyond-bateleur"],
    faq: [
      { q: "Quando começar a planejar?", a: "Idealmente 6 a 9 meses antes. Hotéis-ícone esgotam datas com antecedência." },
      { q: "Quantos destinos combinar?", a: "Dois a três. Mais que isso, o ritmo se quebra e a lua de mel vira mudança de mala." },
      { q: "Vale lua de mel no Brasil?", a: "Sim — Noronha, Trancoso, Caraíva e Pantanal são imbatíveis para casais que querem natureza com conforto." },
      { q: "Como funcionam as 'amenities' de lua de mel?", a: "Mensagens, brindes, jantar privativo, upgrade conforme disponibilidade — tudo coordenado pela Create Travel sem clichês." },
      { q: "Posso parcelar?", a: "Sim. Trabalhamos com formas de pagamento flexíveis, conforme cada fornecedor." },
      { q: "E se chover?", a: "Roteiros são pensados com plano B real, baseado em microclimas e janelas históricas." },
    ],
  },
  {
    slug: "patagonia",
    title: "Patagônia: como planejar uma viagem autoral | Create Travel",
    metaDescription:
      "Guia editorial da Create Travel para Patagônia: melhor época, base ideal, trekkings clássicos e luxo discreto na ponta sul do continente.",
    h1: "Patagônia",
    kicker: "Fim do mundo, com curadoria",
    intro:
      "A Patagônia é uma das poucas paisagens que ainda impressionam pelo que não tem: anúncios, cidades, ruído. Aqui o luxo é a luz, a escala e o silêncio. Curamos lodges com saídas guiadas todos os dias e infraestrutura para casais, famílias e fotógrafos.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1504457047772-27faf1c00561?w=1920&h=1080&fit=crop",
    bestTime: "Nov–Mar (verão austral) para estabilidade climática e dias longos.",
    idealDuration: "5 a 7 noites em Torres del Paine; 9 a 12 combinando lado argentino (El Calafate, El Chaltén).",
    pullQuote:
      "Você não fotografa a Patagônia — você se rende a ela.",
    sections: [
      {
        heading: "Lado chileno ou argentino?",
        body:
          "Chile (Torres del Paine) entrega proximidade visual com os maciços e excelentes lodges full-board. Argentina (El Calafate, El Chaltén, Bariloche) tem geleiras acessíveis e trekkings icônicos como Fitz Roy. A combinação é a viagem mais completa.",
      },
      {
        heading: "Como escolher o lodge",
        body:
          "Dentro do parque (full-board com excursões guiadas) ou hotel-charme em Puerto Natales (mais econômico, exige logística diária)? Para nós, o ganho de tempo e profundidade dos lodges all-inclusive guiados compensa.",
      },
      {
        heading: "Trilhas para todos os perfis",
        body:
          "Mirante Base Torres (intenso, 1 dia), Vale Francês (moderado/avançado), Lagunas Amarga e Azul (suave). Cavalgadas pela estepe são uma ótima alternativa em dias de vento forte.",
      },
      {
        heading: "Combinações poderosas",
        body:
          "Patagônia + Atacama (Chile completo, contraste deserto-vento), Patagônia + Iguaçu, ou Patagônia + Buenos Aires para fechar com cultura.",
      },
    ],
    destinationSlugs: ["america-do-sul/patagonia", "america-do-sul/chile/atacama"],
    staySlugs: ["explora-patagonia", "tierra-atacama"],
    faq: [
      { q: "Qual a melhor época para a Patagônia?", a: "Nov a meados de Mar. Dezembro-Fevereiro é alta. Outubro e Abril têm preços melhores e menor lotação." },
      { q: "Preciso ser atleta?", a: "Não. Há trilhas para todos os níveis e alternativas como cavalgada, navegação e fotografia." },
      { q: "Quantas noites em Torres del Paine?", a: "Mínimo 4, ideal 5–6 para boa rotação de trilhas e dias de clima." },
      { q: "Vale combinar com Atacama?", a: "Sim — é a narrativa Chile mais elogiada por nossos viajantes." },
      { q: "Crianças funcionam?", a: "Sim, a partir de adolescentes ativos. Para crianças menores, o ritmo precisa ser ajustado." },
      { q: "Faz frio mesmo no verão?", a: "Sim. Vento forte e variações grandes em um único dia. Camadas técnicas são essenciais." },
    ],
  },
  {
    slug: "amazonia",
    title: "Amazônia de luxo discreto: lodges, navegações e curadoria | Create Travel",
    metaDescription:
      "Como visitar a Amazônia com profundidade, ética e conforto. Lodges, melhor época e roteiros desenhados pela Create Travel.",
    h1: "Amazônia",
    kicker: "Floresta com profundidade",
    intro:
      "A Amazônia não se entrega ao apressado. Ela se revela em lentidão — em canoas, escutas e silêncios. Selecionamos lodges no Rio Negro e em Anavilhanas que entregam imersão verdadeira, com ética ambiental e respeito às comunidades.",
    heroImageUrl:
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1920&h=1080&fit=crop",
    bestTime: "Jun–Nov (seca) para trilhas e praias de rio; Dez–Mai (cheia) para igapós e navegação na floresta alagada.",
    idealDuration: "4 a 6 noites por base; combinar Anavilhanas + Manaus para uma narrativa completa.",
    pullQuote:
      "A Amazônia que merece ser vista é a Amazônia que escolhe quem entra — e nós cuidamos para você ser bem recebido.",
    sections: [
      {
        heading: "Seca ou cheia: o que muda",
        body:
          "Seca (jun–nov) revela praias de rio, trilhas longas e fauna concentrada perto da água. Cheia (dez–mai) abre os igapós e permite navegação por dentro da floresta — uma das experiências mais cinematográficas do planeta.",
      },
      {
        heading: "Como escolher o lodge",
        body:
          "Privilegiamos lodges de pequeno porte, com guias naturalistas, vínculo real com comunidades e arquitetura integrada à paisagem. Evitamos hotéis-resort que tratam a floresta como cenário.",
      },
      {
        heading: "O que esperar das atividades",
        body:
          "Canoagem ao amanhecer, trilhas interpretativas, focagem noturna ética, encontros com ribeirinhos com contexto, pesca esportiva (catch & release) e leitura de paisagem com guia. Sem perseguição de fauna.",
      },
      {
        heading: "Combinações que funcionam",
        body:
          "Amazônia + Lençóis Maranhenses (contraste água-rio + dunas), Amazônia + Pantanal (foto e fauna em camadas), Amazônia + Alter do Chão para descanso.",
      },
    ],
    destinationSlugs: [
      "brasil/amazonia/anavilhanas",
      "brasil/amazonia/manaus-rio-negro",
      "brasil/amazonia/alter-do-chao",
      "brasil/pantanal/norte",
    ],
    staySlugs: ["anavilhanas-jungle-lodge", "mirante-do-gaviao", "caiman-pantanal"],
    faq: [
      { q: "Qual a melhor época para a Amazônia?", a: "Depende do interesse: seca (jun–nov) para trilhas e praias; cheia (dez–mai) para igapós e navegação na floresta alagada." },
      { q: "É seguro?", a: "Sim. Lodges curados pela Create Travel operam com excelente padrão de segurança, médicos a chamada e logística cuidadosa." },
      { q: "Crianças funcionam?", a: "Sim, com atividades adaptadas por guia. Famílias são bem-recebidas." },
      { q: "Quantas noites mínimas?", a: "Quatro noites por base. Menos que isso reduz drasticamente a profundidade da experiência." },
      { q: "Como evitar experiências performáticas com comunidades?", a: "Trabalhamos apenas com lodges que têm vínculo real e narrativa ética com ribeirinhos." },
      { q: "Tem mosquito?", a: "Em Rio Negro a incidência é baixa (água preta). Levamos repelentes e protocolo de saúde mesmo assim." },
    ],
  },
];

export const getNicheBySlug = (slug: string): Niche | undefined =>
  niches.find((n) => n.slug === slug);

export const getAllNiches = (): Niche[] => niches;
