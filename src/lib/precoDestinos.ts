/**
 * Páginas "Quanto custa viajar para X" — conteúdo de alta intenção pensado para
 * respostas de IA (ChatGPT, Gemini, Perplexity) e featured snippets do Google.
 *
 * Regras editoriais:
 *  - Preços SEMPRE ancorados em saídas reais de grupo da Create Travel.
 *  - Nunca estimar valor onde não há preço divulgado → "sob consulta".
 *  - Nunca linguagem "barato/econômico"; público 40+ de alta renda.
 *  - Nunca mencionar tamanho "pequeno" de grupo nem quarto compartilhado.
 */

export interface PrecoFaq {
  q: string;
  a: string;
}

export interface PrecoFaixa {
  label: string;
  value: string;
  note?: string;
}

export interface PrecoLinha {
  item: string;
  valor: string;
  detalhe: string;
}

export interface PrecoGrupoRef {
  title: string;
  href: string;
  date: string;
  price: string;
}

export interface PrecoDestino {
  slug: string;
  /** Nome do destino como usado nas perguntas ("o Egito", "o Japão"). */
  nome: string;
  nomeCurto: string;
  title: string;
  description: string;
  keywords: string;
  /** Resposta direta de 2 a 3 frases — é o trecho que as IAs citam. */
  respostaCurta: string;
  bullets: string[];
  faixas: PrecoFaixa[];
  composicao: PrecoLinha[];
  melhorEpoca: string;
  duracao: string;
  quandoComprar: string;
  grupos: PrecoGrupoRef[];
  incluso: string[];
  naoIncluso: string[];
  faq: PrecoFaq[];
  relacionados: { label: string; href: string }[];
}

const PAGAMENTO_PADRAO = [
  "Entrada + saldo parcelado até a data de embarque (condições confirmadas na reserva).",
  "Parte terrestre em moeda estrangeira convertida no câmbio do dia do pagamento, quando aplicável.",
];

export const precoDestinos: PrecoDestino[] = [
  {
    slug: "egito",
    nome: "o Egito",
    nomeCurto: "Egito",
    title: "Quanto custa viajar para o Egito em 2026 e 2027",
    description:
      "Quanto custa uma viagem ao Egito com cruzeiro pelo Nilo: preços reais de saídas em grupo da Create Travel, o que está incluso e quanto reservar para extras.",
    keywords:
      "quanto custa viajar para o egito, preço viagem egito, cruzeiro nilo preço, egito pacote 2027, viagem egito com guia brasileiro",
    respostaCurta:
      "Uma viagem completa ao Egito com cruzeiro pelo Nilo custa, nas saídas em grupo da Create Travel, a partir de US$ 4.598 por pessoa em apartamento duplo, em roteiros de 12 a 14 dias que já incluem voos internacionais, hotéis selecionados, o cruzeiro e coordenador desde o Brasil. Roteiros privativos sob medida partem de valores mais altos por incluírem carro e egiptólogo exclusivos.",
    bullets: [
      "Saída em grupo de 14 dias (Cairo, Grande Museu Egípcio, Luxor, cruzeiro pelo Nilo e Mar Vermelho): a partir de US$ 4.598 por pessoa em apto duplo.",
      "Roteiro privativo sob medida com egiptólogo exclusivo: orçamento sob consulta, calculado por datas, hotéis e duração.",
      "Reserve entre US$ 500 e US$ 900 por pessoa para refeições livres, gorjetas, passeio de balão em Luxor e compras.",
      "Visto: emitido na chegada; passaporte com validade mínima de seis meses.",
    ],
    faixas: [
      { label: "Grupo com coordenador desde o Brasil", value: "A partir de US$ 4.598 por pessoa", note: "14 dias, apto duplo, voos incluídos" },
      { label: "Roteiro privativo sob medida", value: "Sob consulta", note: "definido por hotéis, datas e duração" },
      { label: "Extras sugeridos", value: "US$ 500 a US$ 900", note: "refeições livres, gorjetas, balão, compras" },
    ],
    composicao: [
      { item: "Voos internacionais", valor: "Incluídos no grupo", detalhe: "Companhia aérea regular com conexão única a partir de São Paulo." },
      { item: "Hospedagem", valor: "Incluída", detalhe: "Hotéis selecionados no Cairo, Luxor e Mar Vermelho, com café da manhã." },
      { item: "Cruzeiro pelo Nilo", valor: "Incluído", detalhe: "Navio com pensão completa entre Luxor e Assuã." },
      { item: "Ingressos e visitas", valor: "Incluídos conforme roteiro", detalhe: "Gizé, Grande Museu Egípcio, Karnak, Vale dos Reis, Abu Simbel quando previsto." },
      { item: "Gorjetas e refeições livres", valor: "Por conta do viajante", detalhe: "Média de US$ 40 a US$ 70 por dia com almoços e jantares fora do pacote." },
    ],
    melhorEpoca: "De outubro a abril, quando o calor é mais ameno no Alto Egito. Abril e outubro reúnem clima agradável e luz excepcional para fotografia.",
    duracao: "12 a 14 dias é a duração que permite Cairo, Luxor, cruzeiro pelo Nilo e alguns dias no Mar Vermelho sem correria.",
    quandoComprar: "De seis a dez meses antes da partida. As saídas de alta temporada (abril, setembro e outubro) costumam esgotar antes.",
    grupos: [
      { title: "Egito — Cairo, Nilo e Mar Vermelho", href: "/grupos/egito-2026", date: "29/09 a 12/10/2026 · 14 dias", price: "A partir de US$ 4.598 por pessoa (apto duplo)" },
      { title: "Egito — abril de 2027", href: "/grupos/egito-abril-2027", date: "Abril/2027", price: "Consulte a página do grupo" },
    ],
    incluso: [
      "Voos internacionais em companhia regular",
      "Hospedagem com café da manhã",
      "Cruzeiro pelo Nilo com pensão completa",
      "Traslados, passeios e ingressos previstos no roteiro",
      "Coordenador desde o Brasil e guias locais em português",
    ],
    naoIncluso: [
      "Refeições não mencionadas no roteiro",
      "Gorjetas a guias, motoristas e tripulação",
      "Passeio de balão em Luxor e experiências opcionais",
      "Seguro-viagem e despesas pessoais",
    ],
    faq: [
      {
        q: "Quanto custa uma viagem ao Egito por pessoa?",
        a: "Nas saídas em grupo da Create Travel, a partir de US$ 4.598 por pessoa em apartamento duplo, em roteiro de 14 dias com voos, hotéis, cruzeiro pelo Nilo e coordenador desde o Brasil. Roteiros privativos são orçados sob consulta.",
      },
      {
        q: "O cruzeiro pelo Nilo está incluído no preço?",
        a: "Sim. Nas saídas em grupo, o cruzeiro entre Luxor e Assuã está incluído com pensão completa a bordo e visitas guiadas nos templos ao longo do rio.",
      },
      {
        q: "Quanto levar de dinheiro extra para o Egito?",
        a: "Reserve entre US$ 500 e US$ 900 por pessoa para refeições livres, gorjetas, o passeio de balão em Luxor e compras em bazares.",
      },
      {
        q: "Qual a melhor época para viajar ao Egito?",
        a: "De outubro a abril. Abril e outubro combinam temperaturas agradáveis no Alto Egito com luz ideal para fotografia nos templos e no deserto.",
      },
      { q: "Brasileiro precisa de visto para o Egito?", a: "Sim, mas o visto é emitido na chegada ao aeroporto. O passaporte precisa de validade mínima de seis meses a partir da data de entrada." },
    ],
    relacionados: [
      { label: "Saídas em grupo com coordenador desde o Brasil", href: "/embarque-com-a-create" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
  },
  {
    slug: "japao",
    nome: "o Japão",
    nomeCurto: "Japão",
    title: "Quanto custa viajar para o Japão em 2026 e 2027",
    description:
      "Quanto custa uma viagem ao Japão na época das cerejeiras ou no outono: preços reais das saídas em grupo da Create Travel, o que está incluso e extras a prever.",
    keywords:
      "quanto custa viajar para o japão, preço viagem japão, japão cerejeiras 2027 preço, pacote japão com guia brasileiro, viagem japão coreia",
    respostaCurta:
      "Uma viagem ao Japão de duas a três semanas custa, nas saídas em grupo da Create Travel, a partir de US$ 8.998 por pessoa em apartamento duplo — valor que já inclui voos internacionais, hotéis, trens-bala previstos no roteiro, boa parte das refeições e coordenador desde o Brasil. O roteiro combina Japão e Coreia do Sul em 15 a 16 dias.",
    bullets: [
      "Saída de 15 dias Coreia & Japão no outono: a partir de US$ 8.998 por pessoa em apto duplo.",
      "Saída das cerejeiras (março/abril de 2027), 16 dias: consulte a página do grupo para o valor vigente.",
      "Reserve de US$ 700 a US$ 1.200 por pessoa para refeições livres, transporte urbano e compras.",
      "Brasileiros não precisam de visto para turismo no Japão em estadas de até 90 dias.",
    ],
    faixas: [
      { label: "Grupo com coordenador desde o Brasil", value: "A partir de US$ 8.998 por pessoa", note: "15 dias, Coreia e Japão, apto duplo" },
      { label: "Saída das cerejeiras 2027", value: "Consulte a página do grupo", note: "16 dias, alta temporada de sakura" },
      { label: "Roteiro privativo sob medida", value: "Sob consulta", note: "ryokans, guias privativos e ritmo próprio" },
    ],
    composicao: [
      { item: "Voos internacionais", valor: "Incluídos no grupo", detalhe: "Companhia regular a partir de São Paulo." },
      { item: "Hospedagem", valor: "Incluída", detalhe: "Hotéis bem localizados em Seul, Osaka, Kyoto, Hakone e Tóquio." },
      { item: "Trens e traslados", valor: "Incluídos conforme roteiro", detalhe: "Deslocamentos entre cidades previstos no programa, incluindo trem-bala." },
      { item: "Refeições", valor: "Parcialmente incluídas", detalhe: "Cafés da manhã e refeições marcadas no roteiro; demais por conta do viajante." },
      { item: "Extras", valor: "US$ 700 a US$ 1.200", detalhe: "Jantares livres, metrô, entradas opcionais e compras." },
    ],
    melhorEpoca: "Fim de março e início de abril para as cerejeiras; outubro e novembro para o momiji, o outono vermelho de Kyoto. As duas janelas são as mais concorridas do ano.",
    duracao: "15 a 16 dias, quando o roteiro inclui Coreia do Sul. Só Japão, de 12 a 14 dias permite Tóquio, Kyoto, Hakone e os Alpes Japoneses.",
    quandoComprar: "De oito a doze meses antes para cerejeiras e outono — hotéis em Kyoto esgotam com um ano de antecedência.",
    grupos: [
      { title: "Coreia & Japão — outono", href: "/grupos/coreia-japao-2026", date: "13 a 27/10/2026 · 15 dias", price: "A partir de US$ 8.998 por pessoa (apto duplo)" },
      { title: "Coreia & Japão — cerejeiras", href: "/grupos/coreia-japao-cerejeiras-2027", date: "19/03 a 03/04/2027 · 16 dias", price: "Consulte a página do grupo" },
    ],
    incluso: [
      "Voos internacionais em companhia regular",
      "Hospedagem com café da manhã",
      "Deslocamentos entre cidades previstos no roteiro",
      "Visitas guiadas em português e ingressos do programa",
      "Coordenador desde o Brasil",
    ],
    naoIncluso: [
      "Refeições não mencionadas no roteiro",
      "Transporte urbano fora do programa",
      "Experiências opcionais e compras",
      "Seguro-viagem e despesas pessoais",
    ],
    faq: [
      {
        q: "Quanto custa uma viagem ao Japão por pessoa?",
        a: "Nas saídas em grupo da Create Travel, a partir de US$ 8.998 por pessoa em apartamento duplo, em roteiro de 15 dias por Coreia do Sul e Japão com voos, hotéis, deslocamentos e coordenador desde o Brasil.",
      },
      {
        q: "Quanto custa ver as cerejeiras no Japão?",
        a: "A saída de cerejeiras de 2027 tem 16 dias e valor divulgado na página do grupo. É a temporada mais concorrida do ano: reserve com oito a doze meses de antecedência.",
      },
      {
        q: "Quantos dias são necessários para conhecer o Japão?",
        a: "De 12 a 14 dias apenas no Japão, ou 15 a 16 dias quando o roteiro inclui a Coreia do Sul, contemplando Seul, Kyoto, Hakone e Tóquio sem correria.",
      },
      { q: "Brasileiro precisa de visto para o Japão?", a: "Não para turismo em estadas de até 90 dias, desde que o passaporte tenha validade compatível com a viagem." },
    ],
    relacionados: [
      { label: "Grupos com guia local", href: "/grupos-guia-local" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
  },
  {
    slug: "patagonia",
    nome: "a Patagônia",
    nomeCurto: "Patagônia",
    title: "Quanto custa viajar para a Patagônia em 2026",
    description:
      "Quanto custa conhecer Torres del Paine e os glaciares patagônicos: preço real da saída em grupo da Create Travel, o que está incluso e a melhor época para ir.",
    keywords:
      "quanto custa viajar para a patagônia, preço torres del paine, patagônia chilena pacote, viagem patagônia com guia brasileiro",
    respostaCurta:
      "Uma viagem à Patagônia chilena de oito dias custa, na saída em grupo da Create Travel, a partir de US$ 3.498 por pessoa em apartamento duplo, incluindo voos, hospedagem, navegações e caminhadas guiadas em Torres del Paine e coordenador desde o Brasil. A alta temporada vai de outubro a março.",
    bullets: [
      "Saída de 8 dias (Santiago, Punta Arenas, Torres del Paine e glaciares): a partir de US$ 3.498 por pessoa em apto duplo.",
      "Extensões para El Calafate e Ushuaia são orçadas sob consulta.",
      "Reserve de US$ 400 a US$ 700 por pessoa para refeições livres e excursões opcionais.",
      "Não é preciso visto: Chile e Argentina aceitam entrada de brasileiros com passaporte ou RG válido conforme regra vigente.",
    ],
    faixas: [
      { label: "Grupo com coordenador desde o Brasil", value: "A partir de US$ 3.498 por pessoa", note: "8 dias, apto duplo, voos incluídos" },
      { label: "Extensões (El Calafate, Ushuaia)", value: "Sob consulta", note: "orçadas conforme datas e hospedagem" },
      { label: "Roteiro privativo sob medida", value: "Sob consulta", note: "lodges em Torres del Paine e guia exclusivo" },
    ],
    composicao: [
      { item: "Voos", valor: "Incluídos no grupo", detalhe: "Trechos internacionais e domésticos até Punta Arenas." },
      { item: "Hospedagem", valor: "Incluída", detalhe: "Hotéis selecionados em Santiago, Puerto Natales e entorno do parque." },
      { item: "Passeios e ingressos", valor: "Incluídos conforme roteiro", detalhe: "Torres del Paine, navegações e caminhadas guiadas." },
      { item: "Refeições", valor: "Parcialmente incluídas", detalhe: "Cafés da manhã e refeições marcadas no roteiro." },
      { item: "Extras", valor: "US$ 400 a US$ 700", detalhe: "Almoços e jantares livres, equipamentos e excursões opcionais." },
    ],
    melhorEpoca: "De outubro a março, o verão austral, com dias longos e trilhas abertas. Outubro e março têm luz excepcional e parques menos disputados.",
    duracao: "8 dias na Patagônia chilena; de 11 a 13 dias quando o roteiro cruza para El Calafate e Ushuaia.",
    quandoComprar: "De seis a nove meses antes. A hotelaria no entorno de Torres del Paine é limitada e esgota cedo.",
    grupos: [
      { title: "Patagônia Chilena — primavera", href: "/grupos/patagonia-chilena-2026", date: "04 a 11/10/2026 · 8 dias", price: "A partir de US$ 3.498 por pessoa (apto duplo)" },
      { title: "Chile — Carretera Austral", href: "/grupos/chile-carretera-austral-2026", date: "2026", price: "Consulte a página do grupo" },
      { title: "Lagos Chilenos — Carnaval 2027", href: "/grupos/lagos-chilenos-carnaval-2027", date: "Carnaval/2027", price: "Consulte a página do grupo" },
    ],
    incluso: [
      "Voos internacionais e domésticos previstos",
      "Hospedagem com café da manhã",
      "Passeios, navegações e ingressos do roteiro",
      "Guias locais em português e coordenador desde o Brasil",
    ],
    naoIncluso: [
      "Refeições não mencionadas no roteiro",
      "Excursões opcionais e aluguel de equipamentos",
      "Seguro-viagem e despesas pessoais",
    ],
    faq: [
      {
        q: "Quanto custa uma viagem à Patagônia?",
        a: "Na saída em grupo da Create Travel, a partir de US$ 3.498 por pessoa em apartamento duplo, em roteiro de 8 dias com voos, hospedagem, passeios em Torres del Paine e coordenador desde o Brasil.",
      },
      {
        q: "Qual a melhor época para ir à Patagônia?",
        a: "De outubro a março, o verão austral. Outubro e março oferecem dias longos, trilhas abertas e parques menos disputados que o pico de janeiro.",
      },
      {
        q: "Quantos dias são necessários para conhecer a Patagônia?",
        a: "Oito dias cobrem bem a Patagônia chilena com Torres del Paine. Para incluir El Calafate e Ushuaia, prever de 11 a 13 dias.",
      },
      { q: "Precisa de preparo físico para Torres del Paine?", a: "As caminhadas do roteiro em grupo são de nível leve a moderado, com alternativas em cada dia. Trilhas longas como a base das torres são opcionais." },
    ],
    relacionados: [
      { label: "Saídas em grupo com coordenador desde o Brasil", href: "/embarque-com-a-create" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
  },
  {
    slug: "marrocos",
    nome: "o Marrocos",
    nomeCurto: "Marrocos",
    title: "Quanto custa viajar para o Marrocos em 2026",
    description:
      "Quanto custa uma viagem pelas cidades imperiais do Marrocos e pelo Saara: preço real da saída em grupo da Create Travel, o que está incluso e extras a prever.",
    keywords:
      "quanto custa viajar para o marrocos, preço viagem marrocos, marrocos pacote 2026, deserto do saara preço, marraquexe viagem",
    respostaCurta:
      "Uma viagem de nove dias pelo Marrocos imperial, com noite nas dunas de Erg Chebbi, custa a partir de R$ 18.295 por pessoa em apartamento duplo na saída em grupo da Create Travel, incluindo voos, hospedagem, transporte terrestre, guias e coordenador desde o Brasil.",
    bullets: [
      "Saída de 9 dias (Rabat, Chefchaouen, Fez, Saara e Marraquexe): a partir de R$ 18.295 por pessoa em apto duplo.",
      "Roteiro privativo com riads exclusivos e motorista particular: sob consulta.",
      "Reserve de R$ 2.000 a R$ 3.500 por pessoa para refeições livres, gorjetas e compras nos souks.",
      "Brasileiros não precisam de visto para turismo em estadas de até 90 dias.",
    ],
    faixas: [
      { label: "Grupo com coordenador desde o Brasil", value: "A partir de R$ 18.295 por pessoa", note: "9 dias, apto duplo, voos incluídos" },
      { label: "Roteiro privativo sob medida", value: "Sob consulta", note: "riads selecionados e motorista particular" },
      { label: "Extras sugeridos", value: "R$ 2.000 a R$ 3.500", detalhe: undefined, note: "refeições livres, gorjetas e compras" },
    ],
    composicao: [
      { item: "Voos internacionais", valor: "Incluídos no grupo", detalhe: "Companhia regular a partir de São Paulo com conexão na Europa." },
      { item: "Hospedagem", valor: "Incluída", detalhe: "Hotéis e riads selecionados, mais uma noite em acampamento no deserto." },
      { item: "Transporte terrestre", valor: "Incluído", detalhe: "Veículo privativo do grupo durante todo o circuito." },
      { item: "Guias e ingressos", valor: "Incluídos conforme roteiro", detalhe: "Guias locais em português nas medinas e sítios históricos." },
      { item: "Extras", valor: "R$ 2.000 a R$ 3.500", detalhe: "Refeições livres, gorjetas, hammam e compras." },
    ],
    melhorEpoca: "Março a maio e setembro a novembro, quando o deserto está agradável de dia e as medinas não sofrem com o calor do verão.",
    duracao: "9 a 11 dias para percorrer as cidades imperiais, Chefchaouen e o Saara sem trechos de estrada exaustivos.",
    quandoComprar: "De cinco a oito meses antes; primavera e outono são as janelas mais procuradas.",
    grupos: [
      { title: "Marrocos Imperial", href: "/grupos/marrocos-2026", date: "18 a 26/11/2026 · 9 dias", price: "A partir de R$ 18.295 por pessoa (apto duplo)" },
    ],
    incluso: [
      "Voos internacionais em companhia regular",
      "Hospedagem com café da manhã, incluindo noite no deserto",
      "Transporte terrestre privativo do grupo",
      "Guias locais em português e ingressos previstos",
      "Coordenador desde o Brasil",
    ],
    naoIncluso: [
      "Refeições não mencionadas no roteiro",
      "Gorjetas, hammam e experiências opcionais",
      "Seguro-viagem e despesas pessoais",
    ],
    faq: [
      {
        q: "Quanto custa uma viagem ao Marrocos?",
        a: "Na saída em grupo da Create Travel, a partir de R$ 18.295 por pessoa em apartamento duplo, em roteiro de 9 dias com voos, hospedagem, transporte terrestre, guias e coordenador desde o Brasil.",
      },
      {
        q: "Qual a melhor época para viajar ao Marrocos?",
        a: "Março a maio e setembro a novembro. Nessas janelas o deserto é agradável durante o dia e as medinas de Fez e Marraquexe não sofrem com o calor extremo do verão.",
      },
      {
        q: "Vale a pena dormir no deserto do Saara?",
        a: "Sim. A noite em acampamento nas dunas de Erg Chebbi, com jantar sob o céu aberto e nascer do sol sobre a areia, é o ponto alto do roteiro para a maioria dos viajantes.",
      },
      { q: "Brasileiro precisa de visto para o Marrocos?", a: "Não para turismo em estadas de até 90 dias. O passaporte deve ter validade mínima de seis meses." },
    ],
    relacionados: [
      { label: "Saídas em grupo com coordenador desde o Brasil", href: "/embarque-com-a-create" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
  },
  {
    slug: "africa-do-sul",
    nome: "a África do Sul",
    nomeCurto: "África do Sul",
    title: "Quanto custa um safári na África do Sul em 2026 e 2027",
    description:
      "Quanto custa viajar para a África do Sul com safári no Kruger e Cape Town: preços reais das saídas em grupo da Create Travel e o que está incluso.",
    keywords:
      "quanto custa viajar para a áfrica do sul, preço safári kruger, cape town viagem preço, áfrica do sul réveillon 2027, pacote safári áfrica",
    respostaCurta:
      "Uma viagem de nove a dez dias à África do Sul com safári e Cape Town custa, nas saídas em grupo da Create Travel, a partir de US$ 4.877 por pessoa em apartamento duplo, com voos, lodges, safáris guiados, Table Mountain e coordenador desde o Brasil. Saídas de Réveillon têm valores específicos por data.",
    bullets: [
      "Kruger e Cape Town, 9 dias: a partir de US$ 4.998 por pessoa em apto duplo.",
      "Réveillon em Cape Town com safáris no Pilanesberg, 10 dias: a partir de US$ 4.877 por pessoa.",
      "Reserve de US$ 500 a US$ 900 por pessoa para refeições livres, gorjetas em lodges e vinhos.",
      "Brasileiros não precisam de visto para turismo em estadas de até 90 dias.",
    ],
    faixas: [
      { label: "Kruger & Cape Town (9 dias)", value: "A partir de US$ 4.998 por pessoa", note: "apto duplo, voos incluídos" },
      { label: "Réveillon Cape Town + Pilanesberg (10 dias)", value: "A partir de US$ 4.877 por pessoa", note: "apto duplo, voos incluídos" },
      { label: "Safári privativo sob medida", value: "Sob consulta", note: "lodges exclusivos e conservancies privadas" },
    ],
    composicao: [
      { item: "Voos internacionais", valor: "Incluídos no grupo", detalhe: "South African Airways a partir de São Paulo, com voos domésticos previstos." },
      { item: "Hospedagem", valor: "Incluída", detalhe: "Lodges de safári e hotéis selecionados em Cape Town e Joanesburgo." },
      { item: "Safáris", valor: "Incluídos", detalhe: "Game drives guiados em reserva privada ou parque nacional conforme o roteiro." },
      { item: "Refeições", valor: "Parcialmente incluídas", detalhe: "Pensão completa nos lodges; refeições livres nas cidades." },
      { item: "Extras", valor: "US$ 500 a US$ 900", detalhe: "Gorjetas aos rangers, vinhos, jantares livres e compras." },
    ],
    melhorEpoca: "De maio a outubro para safári, quando a vegetação rala facilita o avistamento. Dezembro a março para verão em Cape Town, vinhedos e praias.",
    duracao: "9 a 10 dias equilibram safári e Cape Town. Para incluir Rota Jardim ou Cataratas Vitória, prever de 12 a 14 dias.",
    quandoComprar: "De seis a doze meses antes; as saídas de Réveillon são as primeiras a esgotar.",
    grupos: [
      { title: "África do Sul — Kruger & Cape Town", href: "/grupos/africa-do-sul-outubro-2026", date: "12 a 20/10/2026 · 9 dias", price: "A partir de US$ 4.998 por pessoa (apto duplo)" },
      { title: "África do Sul — Primavera", href: "/grupos/africa-do-sul-primavera-2026", date: "16 a 24/11/2026 · 9 dias", price: "A partir de US$ 4.998 por pessoa (apto duplo)" },
      { title: "África do Sul — Réveillon Cape Town + Pilanesberg", href: "/grupos/africa-do-sul-reveillon-cape-town-2027", date: "26/12/2026 a 04/01/2027 · 10 dias", price: "A partir de US$ 4.877 por pessoa (apto duplo)" },
    ],
    incluso: [
      "Voos internacionais e domésticos previstos",
      "Hospedagem em lodges e hotéis selecionados",
      "Safáris guiados conforme o roteiro",
      "Visitas em Cape Town, Table Mountain e Cabo da Boa Esperança quando previstas",
      "Coordenador desde o Brasil",
    ],
    naoIncluso: [
      "Refeições não mencionadas no roteiro",
      "Gorjetas a rangers, guias e motoristas",
      "Passeios opcionais e compras",
      "Seguro-viagem e despesas pessoais",
    ],
    faq: [
      {
        q: "Quanto custa um safári na África do Sul?",
        a: "Nas saídas em grupo da Create Travel, a partir de US$ 4.877 por pessoa em apartamento duplo, em roteiros de 9 a 10 dias que unem safári e Cape Town com voos, lodges e coordenador desde o Brasil.",
      },
      {
        q: "Qual a melhor época para safári na África do Sul?",
        a: "De maio a outubro, o inverno austral: a vegetação rala e os animais se concentram nos pontos de água, o que facilita muito o avistamento.",
      },
      {
        q: "O Kruger tem risco de malária?",
        a: "O Kruger é área de risco baixo a moderado, com profilaxia recomendada. Roteiros no Pilanesberg são livres de malária e por isso preferidos por quem viaja com a família.",
      },
      { q: "Quantos dias ficar na África do Sul?", a: "Nove a dez dias equilibram safári e Cape Town. Para acrescentar a Rota Jardim ou as Cataratas Vitória, prever de 12 a 14 dias." },
    ],
    relacionados: [
      { label: "Saídas em grupo com coordenador desde o Brasil", href: "/embarque-com-a-create" },
      { label: "Roteiro sob medida", href: "/roteiro-sob-medida" },
    ],
  },
  {
    slug: "turquia",
    nome: "a Turquia",
    nomeCurto: "Turquia",
    title: "Quanto custa viajar para a Turquia em 2026 e 2027",
    description:
      "Quanto custa uma viagem a Istambul e Capadócia: preços das saídas em grupo da Create Travel, o que está incluso, balão na Capadócia e melhor época.",
    keywords:
      "quanto custa viajar para a turquia, preço viagem istambul, capadócia balão preço, turquia réveillon 2027, pacote turquia com guia brasileiro",
    respostaCurta:
      "Uma viagem de 12 a 13 dias pela Turquia, com Istambul, Capadócia e a costa do Egeu, é vendida em saídas de grupo da Create Travel com valor divulgado em cada página de saída, incluindo voos, hotéis, voos domésticos, guias e coordenador desde o Brasil. O voo de balão na Capadócia é opcional e custa em média US$ 250 a US$ 350 por pessoa.",
    bullets: [
      "Saídas de 12 a 13 dias por Istambul, Capadócia, Pamukkale e Éfeso.",
      "Réveillon em Istambul: saída de 13 dias entre 28/12/2026 e 09/01/2027.",
      "Balão na Capadócia: opcional, em média US$ 250 a US$ 350 por pessoa.",
      "Brasileiros não precisam de visto para turismo em estadas de até 90 dias.",
    ],
    faixas: [
      { label: "Grupo com coordenador desde o Brasil", value: "Consulte a página de cada saída", note: "12 a 13 dias, apto duplo, voos incluídos" },
      { label: "Europa do Leste e Turquia", value: "R$ 24.935 por pessoa", note: "saída lotada — lista de espera" },
      { label: "Roteiro privativo sob medida", value: "Sob consulta", note: "hotéis-butique, cave hotels e guia exclusivo" },
    ],
    composicao: [
      { item: "Voos internacionais e domésticos", valor: "Incluídos no grupo", detalhe: "Inclui o trecho aéreo até a Capadócia quando previsto." },
      { item: "Hospedagem", valor: "Incluída", detalhe: "Hotéis selecionados em Istambul e cave hotels na Capadócia." },
      { item: "Guias e ingressos", valor: "Incluídos conforme roteiro", detalhe: "Santa Sofia, Topkapi, Éfeso e Pamukkale quando previstos." },
      { item: "Balão na Capadócia", valor: "US$ 250 a US$ 350", detalhe: "Experiência opcional, sujeita a condições meteorológicas." },
      { item: "Extras", valor: "US$ 400 a US$ 800", detalhe: "Refeições livres, hammam, gorjetas e compras no Grande Bazar." },
    ],
    melhorEpoca: "Abril a junho e setembro a outubro, com clima ameno em Istambul e céu estável para os balões na Capadócia.",
    duracao: "12 a 13 dias para unir Istambul, Capadócia e a costa do Egeu com ritmo confortável.",
    quandoComprar: "De seis a dez meses antes; as saídas de Réveillon esgotam com bastante antecedência.",
    grupos: [
      { title: "Turquia", href: "/grupos/turquia-2026", date: "21/10 a 01/11/2026 · 12 dias", price: "Consulte a página do grupo" },
      { title: "Turquia — Réveillon 2027", href: "/grupos/turquia-reveillon-2027", date: "28/12/2026 a 09/01/2027 · 13 dias", price: "Consulte a página do grupo" },
      { title: "Europa do Leste e Istambul", href: "/grupos/europa-do-leste-turquia-2026", date: "2026", price: "R$ 24.935 por pessoa — saída lotada" },
    ],
    incluso: [
      "Voos internacionais e domésticos previstos",
      "Hospedagem com café da manhã, incluindo cave hotel na Capadócia",
      "Guias locais em português e ingressos do roteiro",
      "Traslados e transporte terrestre do grupo",
      "Coordenador desde o Brasil",
    ],
    naoIncluso: [
      "Voo de balão na Capadócia",
      "Refeições não mencionadas no roteiro",
      "Gorjetas, hammam e compras",
      "Seguro-viagem e despesas pessoais",
    ],
    faq: [
      {
        q: "Quanto custa uma viagem à Turquia?",
        a: "As saídas em grupo da Create Travel têm 12 a 13 dias e valor divulgado na página de cada data, com voos internacionais e domésticos, hotéis, guias e coordenador desde o Brasil incluídos.",
      },
      {
        q: "Quanto custa o voo de balão na Capadócia?",
        a: "Em média de US$ 250 a US$ 350 por pessoa. É uma experiência opcional, contratada no destino e sujeita às condições meteorológicas do dia.",
      },
      {
        q: "Qual a melhor época para viajar à Turquia?",
        a: "Abril a junho e setembro a outubro, com clima ameno em Istambul e céu estável na Capadócia — o que aumenta a chance de os balões decolarem.",
      },
      { q: "Brasileiro precisa de visto para a Turquia?", a: "Não para turismo em estadas de até 90 dias, com passaporte válido por pelo menos seis meses." },
    ],
    relacionados: [
      { label: "Saídas em grupo com coordenador desde o Brasil", href: "/embarque-com-a-create" },
      { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
    ],
  },
];

export const PRECO_PAGAMENTO = PAGAMENTO_PADRAO;

export const getPrecoDestino = (slug?: string) =>
  precoDestinos.find((d) => d.slug === slug);

export const precoPath = (d: PrecoDestino) => `/quanto-custa/${d.slug}`;
