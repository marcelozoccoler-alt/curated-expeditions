import { Destination } from "../types";

/**
 * África — destinos raros com curadoria Create Travel.
 * Madagascar, Ilhas Maurício, Moçambique, Seychelles, São Tomé e Príncipe,
 * Uganda, Zimbábue e Zâmbia: safári, ilhas remotas e conservação autoral.
 */
export const africaExtraDestinations: Destination[] = [
  {
    id: "africa-madagascar",
    continent: "África",
    country: "Madagascar",
    region: "Andasibe, Tsingy de Bemaraha e Nosy Be",
    slug: "africa/madagascar",
    name: "Madagascar Autoral",
    bestTime:
      "Abr–Nov (estação seca, trilhas acessíveis e mar calmo em Nosy Be). Set–Out para o pico de atividade dos lêmures e florações de baobás.",
    tags: ["safari", "trekking", "praia", "fotografia", "conservacao", "birdwatching"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a lemur perched on a moss-covered branch in Andasibe rainforest, soft morning light filtering through canopy, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Madagascar se desprendeu do continente há milhões de anos e seguiu evoluindo sozinha — o resultado é um laboratório vivo de espécies que não existem em nenhum outro lugar do planeta. A curadoria Create Travel combina a floresta de Andasibe, as agulhas de pedra de Tsingy e o mar cristalino de Nosy Be num roteiro que é tanto expedição quanto descanso.",
    highlights: [
      {
        title: "Lêmures ao amanhecer em Andasibe",
        story:
          "O canto do indri — um uivo grave que atravessa a mata — anuncia o dia antes mesmo do sol nascer. Caminhar sob o dossel úmido guiado por um naturalista local é testemunhar uma das últimas grandes singularidades biológicas da Terra.",
      },
      {
        title: "Tsingy de Bemaraha, a floresta de pedra",
        story:
          "Agulhas calcárias afiadas como lâminas se erguem por quilômetros, esculpidas pela água ao longo de milênios. Atravessar pontes suspensas entre elas é caminhar sobre uma paisagem que parece pertencer a outro planeta.",
      },
      {
        title: "Avenida dos Baobás ao pôr do sol",
        story:
          "Troncos centenários alinhados contra um céu em chamas — uma das imagens mais fotografadas da África, vivida sem pressa, com uma taça na mão e o silêncio do interior malgaxe em volta.",
      },
      {
        title: "Nosy Be e o arquipélago de Mitsio",
        story:
          "Águas cor de turquesa, recifes intocados e ilhotas onde se ancora sem cruzar outro barco no horizonte. O ritmo desacelera até restar apenas o som das ondas contra o casco.",
      },
      {
        title: "Vida rural na estrada nacional 7",
        story:
          "Mercados de especiarias, arrozais em terraço e aldeias merina onde o tempo segue o calendário agrícola. A travessia terrestre revela um país que raramente aparece nos roteiros convencionais.",
      },
    ],
    beyondUsual: [
      {
        title: "Camaleões noturnos com guia especializado",
        story:
          "Uma caminhada após o pôr do sol revela camaleões, geckos e rãs endêmicas invisíveis à luz do dia — um universo paralelo que desperta só depois do escuro.",
      },
      {
        title: "Mergulho com tubarões-baleia em Nosy Be",
        story:
          "Entre setembro e dezembro, os gigantes gentis se alimentam perto da superfície — nadar ao lado de um deles é medir, em silêncio, a própria escala diante do oceano.",
      },
      {
        title: "Encontro com artesãos de Zafimaniry",
        story:
          "Entalhadores de madeira reconhecidos pela Unesco recebem viajantes em suas oficinas nas montanhas — um mergulho na tradição que sobrevive geração após geração.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são necessários para conhecer Madagascar?", a: "De 10 a 14 noites. Esse tempo permite combinar Andasibe, Tsingy de Bemaraha e alguns dias de praia em Nosy Be sem trajetos apressados — as distâncias internas são grandes e exigem voos domésticos." },
      { q: "Qual a melhor época para ir a Madagascar?", a: "Abril a novembro é a estação seca, ideal para trilhas e observação de lêmures. Setembro e outubro concentram o pico de atividade da vida selvagem e a floração dos baobás." },
      { q: "Brasileiro precisa de visto para Madagascar?", a: "Sim, o visto é emitido na chegada mediante taxa, com passaporte válido por ao menos seis meses. Orientamos a documentação completa antes do embarque." },
      { q: "Madagascar é seguro para viajar?", a: "Sim, com roteiro bem planejado e guias locais de confiança. A curadoria Create Travel seleciona motoristas, lodges e itinerários testados, evitando trajetos noturnos e áreas sem infraestrutura." },
      { q: "É possível combinar Madagascar com outros destinos africanos?", a: "Sim. Combinações naturais incluem Ilhas Maurício, Seychelles ou um safári na África do Sul, aproveitando as conexões aéreas via Joanesburgo ou Nairóbi." },
      { q: "Como criar meu roteiro para Madagascar?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "africa-ilhas-mauricio",
    continent: "África",
    country: "Ilhas Maurício",
    region: "Costa Norte e Interior",
    slug: "africa/ilhas-mauricio",
    name: "Ilhas Maurício em Alta Curadoria",
    bestTime:
      "Mai–Dez (inverno austral, ar seco e mar calmo). Evitar Jan–Mar, período de ciclones e chuvas intensas.",
    tags: ["praia", "lua-de-mel", "mergulho", "gastronomia", "bem-estar"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a turquoise lagoon in Mauritius with a private beach cabana and palm trees at golden hour, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Maurício reúne, numa única ilha, lagoas de um azul quase irreal, uma culinária que mistura Índia, França, África e China, e resorts que entendem privacidade como arte. A curadoria Create Travel vai além da faixa de areia: leva ao interior vulcânico, aos mercados coloridos e às mesas onde a ilha realmente se conta.",
    highlights: [
      {
        title: "Lagoas privativas do norte",
        story:
          "Águas rasas e cristalinas que mudam de tom a cada hora do dia. Um piquenique servido sobre um ilhéu isolado transforma o almoço numa cena que parece pintada.",
      },
      {
        title: "Chamarel e a Terra das Sete Cores",
        story:
          "Dunas de solo vulcânico em tons de vermelho, roxo e ocre, formadas por decomposição mineral única no mundo. A cachoeira próxima completa uma tarde de contrastes geológicos raros.",
      },
      {
        title: "Mergulho e vela ao redor do Ilha Maurício",
        story:
          "Recifes de coral bem preservados, naufrágios acessíveis e passeios de catamarã que combinam snorkel, golfinhos ao amanhecer e um pôr do sol a bordo.",
      },
      {
        title: "Mercado Central de Port Louis",
        story:
          "Especiarias empilhadas em cones coloridos, doces indianos fritos na hora e o sotaque crioulo que atravessa gerações. Um mergulho sensorial na identidade multicultural da ilha.",
      },
      {
        title: "Trilhas nas Black River Gorges",
        story:
          "Florestas nativas, cachoeiras escondidas e mirantes sobre o litoral sul — o lado selvagem de uma ilha conhecida, sobretudo, pelas praias.",
      },
    ],
    beyondUsual: [
      {
        title: "Jantar com chef crioulo em casa de família",
        story:
          "Uma refeição íntima preparada por uma família local, com receitas transmitidas oralmente há gerações — o oposto do bufê de resort.",
      },
      {
        title: "Observação de aves endêmicas na Île aux Aigrettes",
        story:
          "Um santuário de conservação onde espécies quase extintas, como o falcão de Maurício, foram reintroduzidas com sucesso — natureza e ciência lado a lado.",
      },
      {
        title: "Spa ayurvédico com terapeutas indianos",
        story:
          "Tratamentos tradicionais herdados da imigração indiana do século XIX, praticados com óleos preparados na hora e rituais que atravessam o tempo.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são ideais em Maurício?", a: "De 6 a 9 noites. Esse período permite alternar praia, um dia de interior (Chamarel e Black River Gorges) e um passeio de barco, sem correria." },
      { q: "Qual a melhor época para ir a Maurício?", a: "Maio a dezembro, no inverno austral, com clima seco e mar mais calmo. Janeiro a março concentra o risco de ciclones tropicais." },
      { q: "Brasileiro precisa de visto para Maurício?", a: "Não. Brasileiros com passaporte válido recebem entrada facilitada para estadas turísticas de curta duração, sem necessidade de visto prévio." },
      { q: "Maurício é bom para lua de mel?", a: "Sim, é um dos destinos mais procurados para lua de mel por casais brasileiros de alto padrão — a curadoria seleciona vilas privativas com piscina e serviço de mordomo dedicado." },
      { q: "Vale combinar Maurício com outros destinos?", a: "Sim. Combinações frequentes incluem Seychelles, Madagascar ou um safári na África do Sul, aproveitando a proximidade geográfica e as conexões aéreas regionais." },
      { q: "Como montar meu roteiro para Maurício?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "africa-mocambique-bazaruto",
    continent: "África",
    country: "Moçambique",
    region: "Arquipélago de Bazaruto",
    slug: "africa/mocambique/bazaruto",
    name: "Arquipélago de Bazaruto",
    bestTime:
      "Abr–Nov (mar calmo, visibilidade máxima para mergulho). Set–Nov é o auge da temporada de baleias-jubarte na costa.",
    tags: ["praia", "mergulho", "lua-de-mel", "navegacao", "remoto", "conservacao"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a white sand dune meeting a turquoise sea in Bazaruto Archipelago, a traditional dhow sailing in the distance, golden hour light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Bazaruto é um arquipélago de dunas móveis, dunas que avançam sobre o mar e lagoas de água doce a poucos metros da salgada — uma geografia rara na costa africana. A curadoria Create Travel leva a lodges isolados onde o Índico ainda guarda dugongos, mantas e uma tranquilidade cada vez mais escassa.",
    highlights: [
      {
        title: "Dunas gigantes sobre o mar",
        story:
          "Montanhas de areia branca que se movem com o vento, criando um contraste imediato entre deserto e oceano. Subir ao topo ao entardecer revela o arquipélago inteiro em silhueta.",
      },
      {
        title: "Mergulho com mantas e tubarões-baleia",
        story:
          "Os recifes de Bazaruto abrigam uma das últimas populações significativas de dugongos do Oceano Índico, além de encontros frequentes com mantas gigantes em pontos de limpeza conhecidos apenas por guias locais.",
      },
      {
        title: "Passeio de dhow ao pôr do sol",
        story:
          "O veleiro tradicional moçambicano desliza sobre águas rasas cor de esmeralda, com o sol descendo atrás das dunas — uma cena repetida há séculos pelos pescadores da região.",
      },
      {
        title: "Baleias-jubarte na travessia sazonal",
        story:
          "Entre setembro e novembro, jubartes migram pela costa com seus filhotes. Avistá-las saltando a poucas centenas de metros da praia é um espetáculo que independe de qualquer roteiro planejado.",
      },
      {
        title: "Lagoa Azul e Lagoa Ferradura",
        story:
          "Corpos d'água doce cercados por dunas, isolados do mar por uma fina faixa de areia. Nadar ali é entender por que Bazaruto é chamado de joia escondida do Índico.",
      },
    ],
    beyondUsual: [
      {
        title: "Visita a projetos de conservação marinha",
        story:
          "Iniciativas locais de proteção a dugongos e tartarugas recebem viajantes interessados em entender o trabalho de campo que sustenta a preservação do arquipélago.",
      },
      {
        title: "Pesca esportiva com guias locais",
        story:
          "Marlins e barracudas nas águas profundas ao largo do arquipélago, numa tradição de pesca artesanal adaptada ao turismo de alto padrão.",
      },
      {
        title: "Jantar privativo sobre uma duna",
        story:
          "Uma mesa montada no topo de uma duna ao entardecer, iluminada por velas, com o som das ondas como única trilha sonora.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias vale a pena ficar em Bazaruto?", a: "De 4 a 6 noites são suficientes para mergulho, passeios de dhow e tempo de descanso sem pressa — a maioria dos lodges do arquipélago é pequena e voltada à privacidade." },
      { q: "Qual a melhor época para ir a Bazaruto?", a: "Abril a novembro oferece mar mais calmo e melhor visibilidade para mergulho. Setembro a novembro soma o avistamento de baleias-jubarte na migração." },
      { q: "Como se chega ao Arquipélago de Bazaruto?", a: "Via voo doméstico até Vilankulo, seguido de transfer de barco ou helicóptero até a ilha escolhida — a Create Travel coordena toda a logística de ponta a ponta." },
      { q: "Bazaruto é indicado para lua de mel?", a: "Sim, é um dos destinos mais exclusivos do Índico para casais, com lodges de poucas unidades, piscinas privativas e experiências desenhadas para dois." },
      { q: "Vale combinar Bazaruto com um safári?", a: "Sim, a combinação clássica é um safári no Kruger ou em reservas privadas sul-africanas seguido de dias de praia em Bazaruto — savana e oceano na mesma viagem." },
      { q: "Como criar meu roteiro para Bazaruto?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "africa-seychelles",
    continent: "África",
    country: "Seychelles",
    region: "Mahé, Praslin e La Digue",
    slug: "africa/seychelles",
    name: "Seychelles em Camadas",
    bestTime:
      "Abr–Mai e Out–Nov (períodos de transição, mar calmo e ventos amenos). Todo o ano é navegável, com variações sazonais de vento.",
    tags: ["praia", "lua-de-mel", "mergulho", "navegacao", "fotografia", "conservacao"],
    imageAiPrompt:
      "Ultra realistic editorial photo of granite boulders framing a white sand beach in Seychelles at sunrise, palm trees leaning over turquoise water, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Seychelles é o arquipélago onde rochas de granito de bilhões de anos emolduram praias que parecem desenhadas — Anse Source d'Argent, em La Digue, é citada com frequência como a mais fotografada do planeta. A curadoria Create Travel combina as 115 ilhas em um roteiro de barco privativo e resorts isolados que priorizam distância e silêncio.",
    highlights: [
      {
        title: "Anse Source d'Argent em La Digue",
        story:
          "Blocos de granito rosado emergindo da areia branca, água rasa em tons impossíveis de turquesa. A luz do fim da tarde transforma a praia numa composição que parece intencional demais para ser natural.",
      },
      {
        title: "Vallée de Mai, o jardim do Éden de Praslin",
        story:
          "Uma floresta primitiva, Patrimônio Mundial da Unesco, onde crescem as palmeiras coco-de-mar — a semente mais pesada do reino vegetal, símbolo de fertilidade nas lendas locais.",
      },
      {
        title: "Cruzeiro privativo entre ilhas interiores",
        story:
          "Veleiro ou catamarã fretado navegando por ilhotas quase desabitadas, com paradas para snorkel em recifes intocados e almoços servidos a bordo, sem outro barco à vista.",
      },
      {
        title: "Tartarugas-gigantes em Curieuse",
        story:
          "Uma população protegida de tartarugas-gigantes de Aldabra vive livre nesta ilha-reserva — aproximar-se delas em seu habitat é um lembrete raro da escala do tempo geológico.",
      },
      {
        title: "Mergulho nos Recifes de Sainte Anne",
        story:
          "Um parque marinho a poucos minutos de Mahé abriga tartarugas-marinhas, raias e cardumes densos — ideal tanto para o mergulho técnico quanto para o primeiro snorkel.",
      },
    ],
    beyondUsual: [
      {
        title: "Ilhas privativas de uma única villa",
        story:
          "Algumas ilhas do arquipélago abrigam apenas um resort ou uma villa isolada, reservadas por inteiro — o nível máximo de privacidade que Seychelles pode oferecer.",
      },
      {
        title: "Observação de aves em Aride e Cousin",
        story:
          "Santuários com colônias de aves marinhas raras, geridos por organizações de conservação que recebem visitantes em número limitado e com guias especializados.",
      },
      {
        title: "Culinária crioula com pescado do dia",
        story:
          "Peixe grelhado com molho de manga verde, curry de camarão e especiarias trazidas por gerações de comerciantes — uma cozinha que mistura África, Índia e França.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são necessários em Seychelles?", a: "De 7 a 10 noites, distribuídas entre pelo menos duas ou três ilhas (Mahé, Praslin e La Digue), permitem conhecer as diferentes paisagens do arquipélago sem pressa." },
      { q: "Qual a melhor época para ir a Seychelles?", a: "Abril, maio, outubro e novembro são os períodos de transição, com ventos mais amenos e mar calmo. O arquipélago é navegável o ano todo, fora da zona de ciclones." },
      { q: "Brasileiro precisa de visto para Seychelles?", a: "Não é exigido visto prévio; a autorização de entrada é concedida na chegada, mediante passaporte válido, reserva de hospedagem e passagem de retorno." },
      { q: "Seychelles é indicado para lua de mel?", a: "Sim, é um dos destinos mais desejados do mundo para lua de mel, com resorts de poucas unidades, praias privativas e roteiros de barco que reforçam a exclusividade." },
      { q: "Como se desloca entre as ilhas de Seychelles?", a: "Por voos domésticos curtos entre Mahé e Praslin, balsa para La Digue, ou barco privativo fretado para um roteiro personalizado entre múltiplas ilhas." },
      { q: "Como criar meu roteiro para Seychelles?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "africa-sao-tome-e-principe",
    continent: "África",
    country: "São Tomé e Príncipe",
    region: "Ilha de São Tomé e Ilha do Príncipe",
    slug: "africa/sao-tome-e-principe",
    name: "São Tomé e Príncipe Remoto",
    bestTime:
      "Jun–Set (estação seca, gravana, ideal para trilhas). Dez–Fev também é seco e mais quente, bom para mergulho e praias.",
    tags: ["praia", "trekking", "birdwatching", "conservacao", "remoto", "gastronomia"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a lush volcanic peak rising above a cocoa plantation in São Tomé, morning mist over the forest canopy, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "São Tomé e Príncipe é um dos países menos visitados da África: um arquipélago vulcânico de origem portuguesa, coberto por floresta primária e antigas roças de cacau, no meio exato do Golfo da Guiné. A curadoria Create Travel leva a um lugar onde o turismo de massa nunca chegou — e talvez nunca chegue.",
    highlights: [
      {
        title: "Pico Cão Grande",
        story:
          "Uma agulha vulcânica de 370 metros que se ergue verticalmente da floresta, visível de quase qualquer ponto da ilha de São Tomé. Sua silhueta abrupta é o símbolo mais reconhecível do arquipélago.",
      },
      {
        title: "Roças históricas de cacau",
        story:
          "Antigas plantações coloniais portuguesas, hoje parcialmente restauradas, contam a história de um país que já foi o maior produtor mundial de cacau — arquitetura decadente e charmosa em meio à selva.",
      },
      {
        title: "Ilha do Príncipe, Reserva da Biosfera",
        story:
          "Menor, mais selvagem e reconhecida pela Unesco, a ilha do Príncipe abriga praias intocadas, florestas com altíssimo endemismo e uma população de poucos milhares de habitantes.",
      },
      {
        title: "Praia Banana e Praia Boi Bandado",
        story:
          "Faixas de areia curvas emolduradas por coqueiros e rochas vulcânicas negras, quase sempre vazias — o tipo de cenário que outros destinos precisam de exclusividade paga para oferecer.",
      },
      {
        title: "Observação de aves endêmicas",
        story:
          "O arquipélago concentra uma das maiores taxas de endemismo de aves do mundo por área — pombos, sunbirds e íbis exclusivos que atraem observadores de todos os continentes.",
      },
    ],
    beyondUsual: [
      {
        title: "Trilha noturna para tartarugas marinhas",
        story:
          "Entre outubro e março, tartarugas desovam nas praias do sul da ilha — acompanhar o processo com um guia de conservação é uma lição de paciência e respeito pela natureza.",
      },
      {
        title: "Prova de chocolate de origem única",
        story:
          "Fábricas artesanais retomaram o cultivo de cacau fino, produzindo chocolate premiado internacionalmente — uma degustação guiada revela camadas de sabor que remontam ao terroir vulcânico.",
      },
      {
        title: "Mergulho em recifes intocados",
        story:
          "Águas ainda pouco exploradas comercialmente, com visibilidade alta e uma biodiversidade marinha que só começa a ser documentada por cientistas internacionais.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias vale a pena reservar para São Tomé e Príncipe?", a: "De 7 a 10 noites, incluindo pelo menos 3 na ilha do Príncipe — o arquipélago pede tempo, já que os deslocamentos internos são de pequena aviação e dependem de boas condições climáticas." },
      { q: "Qual a melhor época para visitar São Tomé e Príncipe?", a: "Junho a setembro, a estação seca chamada gravana, é ideal para trilhas. Dezembro a fevereiro também é seco, com temperaturas mais altas, favorável a mergulho e praia." },
      { q: "Brasileiro precisa de visto para São Tomé e Príncipe?", a: "Sim, é necessário visto, que pode ser solicitado antecipadamente ou, em alguns casos, obtido na chegada — orientamos toda a documentação antes do embarque." },
      { q: "São Tomé e Príncipe é um destino seguro?", a: "Sim, é considerado um dos países mais estáveis e seguros da África, com baixa criminalidade — o desafio real é a infraestrutura turística ainda incipiente, por isso a curadoria é essencial." },
      { q: "Como se chega a São Tomé e Príncipe?", a: "Voos internacionais partem principalmente de Lisboa ou Acra, com conexão adicional de pequena aviação até a ilha do Príncipe. A Create Travel organiza toda a logística de ponta a ponta." },
      { q: "Como criar meu roteiro para São Tomé e Príncipe?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "africa-uganda-bwindi",
    continent: "África",
    country: "Uganda",
    region: "Floresta Impenetrável de Bwindi",
    slug: "africa/uganda/bwindi",
    name: "Gorilas de Bwindi",
    bestTime:
      "Jun–Ago e Dez–Fev (estações secas, trilhas menos escorregadias). O trekking de gorilas ocorre o ano todo, mediante permissão limitada.",
    tags: ["trekking", "safari", "conservacao", "expedicao", "fotografia", "birdwatching"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a mountain gorilla family resting in dense misty rainforest foliage in Bwindi, soft diffused natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Menos da metade dos gorilas-das-montanhas que restam no mundo vive nas encostas úmidas de Bwindi, na fronteira entre Uganda, Ruanda e a República Democrática do Congo. A curadoria Create Travel organiza o trekking — físico, imprevisível e profundamente emocional — de encontrar, cara a cara, uma das últimas grandes espécies selvagens do planeta.",
    highlights: [
      {
        title: "Trekking de gorilas-das-montanhas",
        story:
          "Horas de caminhada em terreno íngreme e denso até o encontro com uma família de gorilas habituada à presença humana. A hora regulamentada de observação, a poucos metros deles, é descrita por viajantes como transformadora.",
      },
      {
        title: "Floresta Impenetrável, Patrimônio da Unesco",
        story:
          "Uma das florestas tropicais mais antigas e biodiversas da África, com mais de 400 espécies de plantas e centenas de aves — um ecossistema que sobreviveu praticamente intacto por 25 mil anos.",
      },
      {
        title: "Trekking de chimpanzés na Floresta de Kibale",
        story:
          "A uma distância acessível de Bwindi, Kibale abriga a maior concentração de primatas da África Oriental — encontrar chimpanzés em liberdade completa a experiência de primatologia do roteiro.",
      },
      {
        title: "Comunidades Batwa e sua história florestal",
        story:
          "Antigos habitantes ancestrais da floresta compartilham, em visitas guiadas, conhecimentos sobre plantas medicinais e um modo de vida que precedeu a criação do parque nacional.",
      },
      {
        title: "Lago Bunyonyi e as colinas de Kigezi",
        story:
          "Um lago vulcânico cercado por terraços agrícolas, ideal para descansar após os dias de trekking — canoagem tradicional e paisagem que lembra os Andes peruanos, no coração da África.",
      },
    ],
    beyondUsual: [
      {
        title: "Habituação de gorilas em grupo reduzido",
        story:
          "Uma permissão especial permite acompanhar por até quatro horas — em vez da hora padrão — o processo de habituação de uma família de gorilas ainda em adaptação à presença humana.",
      },
      {
        title: "Combinação com safári no Queen Elizabeth National Park",
        story:
          "A poucas horas de Bwindi, leões que sobem em árvores, hipopótamos no Canal de Kazinga e uma savana pontuada de crateras vulcânicas complementam o roteiro de primatas com um safári clássico.",
      },
      {
        title: "Fotografia de vida selvagem com guia especializado",
        story:
          "Um fotógrafo profissional local acompanha o trekking para orientar enquadramento, luz e comportamento animal — resultado técnico à altura da raridade do encontro.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são necessários para o trekking de gorilas em Uganda?", a: "De 5 a 8 noites, incluindo ao menos dois dias de trekking (um para gorilas, outro opcional para chimpanzés) e tempo de deslocamento entre parques — as estradas do interior de Uganda pedem calma." },
      { q: "Qual a melhor época para o trekking de gorilas?", a: "Junho a agosto e dezembro a fevereiro são as estações secas, com trilhas menos escorregadias. O trekking ocorre o ano todo, mas as permissões são limitadas e devem ser reservadas com antecedência." },
      { q: "Brasileiro precisa de visto para Uganda?", a: "Sim, é necessário visto eletrônico solicitado previamente pela internet, além de comprovante de vacina contra febre amarela — orientamos todo o processo antes da viagem." },
      { q: "Quantas pessoas podem ver a mesma família de gorilas por dia?", a: "As autoridades ugandesas limitam a oito visitantes por família de gorilas e uma hora de observação, garantindo o bem-estar dos animais — por isso as permissões esgotam com meses de antecedência." },
      { q: "Vale combinar o trekking de gorilas com um safári?", a: "Sim. A combinação clássica inclui o Queen Elizabeth National Park ou o Murchison Falls, somando savana, primatas e um dos maiores conjuntos de aves da África num único roteiro." },
      { q: "Como criar meu roteiro para Uganda?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "africa-zimbabue",
    continent: "África",
    country: "Zimbábue",
    region: "Parque Nacional de Hwange e Cataratas Vitória",
    slug: "africa/zimbabue",
    name: "Hwange e Cataratas Vitória",
    bestTime:
      "Ago–Out (estação seca, concentração máxima de animais nos poços d'água). Fev–Mai para as Cataratas Vitória em seu volume mais espetacular.",
    tags: ["safari", "fotografia", "conservacao", "expedicao", "navegacao", "birdwatching"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a large herd of elephants approaching a waterhole at golden hour in Hwange National Park, dust rising in the light, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "Zimbábue guarda duas das cenas mais imponentes da África: os mais de 45 mil elefantes de Hwange, o maior parque nacional do país, e as Cataratas Vitória, onde o rio Zambeze despenca em uma cortina de água visível a quilômetros de distância. A curadoria Create Travel constrói um roteiro que equilibra safári denso e o espetáculo natural que os locais chamam de 'a fumaça que troveja'.",
    highlights: [
      {
        title: "Manadas de elefantes em Hwange",
        story:
          "Ao redor dos poços d'água artificiais, dezenas de elefantes se reúnem ao entardecer em um ritual diário de banho e disputa territorial — uma das maiores concentrações do continente.",
      },
      {
        title: "Cataratas Vitória, a fumaça que troveja",
        story:
          "Mosi-oa-Tunya, o nome local, descreve a névoa que se ergue a mais de 400 metros de altura durante a cheia do Zambeze — de fevereiro a maio, o volume de água é o mais espetacular do ano.",
      },
      {
        title: "Safári noturno de vida selvagem",
        story:
          "Hienas, leopardos e civetas emergem sob a luz vermelha dos holofotes guiados por rangers experientes — um safári que revela o lado da savana invisível durante o dia.",
      },
      {
        title: "Cruzeiro ao pôr do sol no rio Zambeze",
        story:
          "Hipopótamos boiando entre embarcações discretas, crocodilos nas margens e o céu incendiado sobre o rio que, a poucos quilômetros dali, se transforma em uma das maiores quedas d'água do mundo.",
      },
      {
        title: "Voo panorâmico sobre as Cataratas",
        story:
          "Do ar, a dimensão real do desfiladeiro e da fenda formada pelo Zambeze se revela por completo — um ângulo impossível de capturar do solo.",
      },
    ],
    beyondUsual: [
      {
        title: "Caminhada com rangers armados em Hwange",
        story:
          "Uma expedição a pé, guiada por rastreadores locais, ensina a ler pegadas, fezes e comportamento animal — uma forma de safári muito mais próxima e silenciosa do que o veículo aberto.",
      },
      {
        title: "Projetos de conservação de rinocerontes",
        story:
          "Programas de proteção antipoaching recebem viajantes interessados em entender o trabalho diário de monitoramento e reintrodução de rinocerontes negros na região.",
      },
      {
        title: "Ponte das Cataratas Vitória e bungee jump",
        story:
          "Para os mais aventureiros, o salto de 111 metros sobre o desfiladeiro do Zambeze, na fronteira entre Zimbábue e Zâmbia, é uma das experiências de adrenalina mais icônicas da África.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são recomendados para Hwange e Cataratas Vitória?", a: "De 6 a 8 noites, sendo 3 a 4 em Hwange para um safári completo e 2 a 3 nas Cataratas Vitória, incluindo cruzeiro e voo panorâmico." },
      { q: "Qual a melhor época para o safári em Hwange?", a: "Agosto a outubro, no auge da estação seca, quando os animais se concentram nos poços d'água artificiais, facilitando avistamentos densos e previsíveis." },
      { q: "Qual a melhor época para ver as Cataratas Vitória?", a: "Fevereiro a maio apresenta o maior volume de água, com a névoa mais espetacular. Setembro a dezembro tem menor vazão, mas permite ver melhor a formação rochosa e nadar na Piscina do Diabo, quando disponível." },
      { q: "Brasileiro precisa de visto para o Zimbábue?", a: "Sim, o visto pode ser emitido na chegada mediante taxa, com passaporte válido. Há também a opção de visto combinado Kaza, que permite trânsito entre Zimbábue e Zâmbia." },
      { q: "Vale combinar Zimbábue com a Zâmbia?", a: "Sim. As Cataratas Vitória ficam na fronteira entre os dois países, e é comum hospedar-se de um lado e visitar o outro em bate-volta, ampliando os ângulos de observação da queda d'água." },
      { q: "Como criar meu roteiro para Zimbábue?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
  {
    id: "africa-zambia",
    continent: "África",
    country: "Zâmbia",
    region: "Baixo Zambeze e South Luangwa",
    slug: "africa/zambia",
    name: "Baixo Zambeze e South Luangwa",
    bestTime:
      "Mai–Out (estação seca, safári terrestre e a pé nas melhores condições). Fev–Abr para caiaque no Baixo Zambeze com o rio mais cheio.",
    tags: ["safari", "navegacao", "trekking", "conservacao", "fotografia", "remoto", "birdwatching"],
    imageAiPrompt:
      "Ultra realistic editorial photo of a canoe safari gliding past elephants drinking at the bank of the lower Zambezi River at dawn mist, cinematic natural light, no identifiable faces.",
    imageOverrideUrl: "",
    intro:
      "A Zâmbia é o berço do safári a pé — a tradição criada nas décadas de 1950 e 1960 por guias pioneiros ainda define o ritmo das visitas ao South Luangwa. Somada ao Baixo Zambeze, onde se navega de canoa entre elefantes e hipopótamos, a curadoria Create Travel entrega uma África menos percorrida, mais silenciosa e profundamente autêntica.",
    highlights: [
      {
        title: "Safári a pé no South Luangwa",
        story:
          "Criado por guias lendários décadas atrás, o walking safari aproxima o viajante da savana num ritmo humano — o cheiro da terra, o rastro fresco de um leopardo, o silêncio absoluto antes de um encontro inesperado.",
      },
      {
        title: "Canoagem entre elefantes no Baixo Zambeze",
        story:
          "Deslizar de canoa por canais estreitos entre ilhas fluviais, com elefantes nadando de uma margem a outra e hipopótamos emergindo a poucos metros — uma perspectiva ao nível da água, rara em qualquer safári.",
      },
      {
        title: "Densidade de leopardos no vale do Luangwa",
        story:
          "O South Luangwa é reconhecido como um dos melhores lugares do mundo para observar leopardos, graças à vegetação ribeirinha e à longa tradição de rastreamento noturno guiado.",
      },
      {
        title: "Cataratas Vitória pelo lado zambiano",
        story:
          "A margem zambiana oferece o ângulo mais próximo da queda, incluindo, na estação seca, a possibilidade de nadar na Piscina do Diabo, à beira do precipício.",
      },
      {
        title: "Acampamentos móveis de safári",
        story:
          "Estruturas leves montadas ao longo de rotas migratórias sazonais, onde dormir é acordar literalmente ao som da savana — sem cercas, sem eletricidade constante, sem distância entre viajante e natureza.",
      },
    ],
    beyondUsual: [
      {
        title: "Rastreamento noturno de carnívoros",
        story:
          "Guias com décadas de experiência conduzem safáris após o pôr do sol em busca de leopardos e hienas em atividade — a especialidade histórica da região.",
      },
      {
        title: "Visita a projetos comunitários de conservação",
        story:
          "Iniciativas locais que unem proteção da vida selvagem e desenvolvimento das aldeias vizinhas ao parque mostram um modelo de turismo que devolve valor direto à comunidade.",
      },
      {
        title: "Pesca esportiva de tigerfish no Zambeze",
        story:
          "Uma espécie predatória e combativa, símbolo da pesca esportiva africana, disputada em barcos guiados ao longo dos trechos mais correntosos do rio.",
      },
    ],
    stays: [],
    faq: [
      { q: "Quantos dias vale a pena reservar para a Zâmbia?", a: "De 6 a 9 noites, distribuídas entre o South Luangwa e o Baixo Zambeze, com tempo extra caso se inclua as Cataratas Vitória pelo lado zambiano." },
      { q: "Qual a melhor época para o safári na Zâmbia?", a: "Maio a outubro, na estação seca, é ideal para o safári a pé e para observação terrestre. Fevereiro a abril, com o rio mais cheio, favorece a canoagem no Baixo Zambeze." },
      { q: "Brasileiro precisa de visto para a Zâmbia?", a: "Sim, o visto pode ser obtido na chegada ou antecipadamente online, com passaporte válido — há também o visto combinado Kaza, que inclui trânsito para o Zimbábue." },
      { q: "O que diferencia o safári na Zâmbia de outros países africanos?", a: "A Zâmbia é considerada o berço do safári a pé e mantém baixa densidade de veículos por área — a experiência é mais silenciosa, íntima e voltada a viajantes que já conhecem a savana." },
      { q: "Vale combinar a Zâmbia com o Zimbábue?", a: "Sim. As Cataratas Vitória ficam na fronteira entre os dois países, e é possível hospedar-se do lado zambiano, com vista mais próxima da queda, e cruzar para o Zimbábue em bate-volta." },
      { q: "Como criar meu roteiro para a Zâmbia?", a: "Clique em Criar roteiro sob medida e conte período, ritmo e preferências — desenhamos a viagem do zero." },
    ],
  },
];
