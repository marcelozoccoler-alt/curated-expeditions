import { Destination } from "./types";
import monteRoraimaImg from "@/assets/destinations/brasil-monte-roraima.jpg";
import festivalParintinsImg from "@/assets/destinations/brasil-amazonia-festival-parintins.jpg";
import manausRioNegroImg from "@/assets/destinations/brasil-amazonia-manaus-rio-negro.jpg";

export const destinations: Destination[] = [
  // ===== BRASIL =====
  {
    id: "brasil-amazonia-anavilhanas",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/anavilhanas",
    name: "Anavilhanas (Rio Negro)",
    bestTime: "Jun–Nov (seca) para trilhas e praias de rio; Dez–Mai (cheia) para igapós e floresta alagada.",
    tags: ["navegacao", "conservacao", "fotografia", "bem-estar", "remoto", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of the Anavilhanas archipelago in the Rio Negro, Amazon rainforest, morning mist, cinematic natural light, no people.",
    imageOverrideUrl: "",
    intro: "Anavilhanas é Amazônia em estado de contemplação: ilhas, canais e silêncio com profundidade. Uma viagem para desacelerar, observar e sentir a floresta como um organismo vivo — com curadoria e conforto.",
    highlights: [
      { title: "Navegação por canais do Rio Negro", story: "A voadeira corta a água preta como espelho e o barulho do motor desaparece dentro do verde. De um lado, um igapó submerso revela troncos centenários; do outro, uma família de macacos atravessa a copa. O guia desliga o motor — e a Amazônia inteira começa a falar baixo no seu ouvido." },
      { title: "Trilhas interpretativas com guia naturalista", story: "Cada passo é uma aula viva: o cheiro doce de uma resina, a marca de unha de uma anta no barro, o canto que anuncia chuva. Você sai da trilha sem perceber que andou três horas — e voltando ao lodge entende que floresta não é cenário, é organismo respirando junto com você." },
      { title: "Observação de fauna (aves, primatas, botos)", story: "Um boto-cor-de-rosa emerge a três metros do barco e te encara. Lá em cima, um casal de araras risca o céu em vermelho e azul. Os primatas se anunciam antes de aparecerem. Aqui, a vida selvagem não é fotografia de revista — é encontro, presente, irrepetível." },
      { title: "Pôr do sol no rio com leitura de paisagem", story: "O céu vira fogo refletido na água escura e tudo fica em silêncio cerimonial. Uma taça nas mãos, o guia explicando por que o Rio Negro é negro, e a sensação rara de estar testemunhando algo que acontece desde antes do ser humano existir." },
      { title: "Focagem noturna interpretativa", story: "Lanterna apontada na margem, um par de olhos brilha de volta — jacaré. Mais adiante, uma cobra-papagaio enrolada num galho, uma rã do tamanho de uma moeda cantando alto. A floresta noturna é outro planeta e você está, oficialmente, dentro dele." }
    ],
    beyondUsual: [
      "Canoagem de escuta ao amanhecer (sons, rastros, luz).",
      "Vivência responsável com saberes ribeirinhos (plantas e cultura local).",
      "Saída fotográfica dedicada à textura e atmosfera (menos pressa, mais presença)."
    ],
    stays: ["anavilhanas-jungle-lodge", "mirante-do-gaviao"],
    faq: [
      { q: "Qual a melhor época para ir a Anavilhanas?", a: "Seca (jun–nov) favorece trilhas e praias; cheia (dez–mai) é ideal para igapós e navegação na floresta alagada." },
      { q: "Quantos dias devo ficar?", a: "Em geral, 4 a 6 noites permitem alternar rio, floresta e descanso." },
      { q: "É adequado para iniciantes em Amazônia?", a: "Sim, com logística bem estruturada e bom nível de conforto." },
      { q: "Dá para ir com crianças?", a: "Sim, com atividades ajustadas ao ritmo da família." },
      { q: "Como evitar experiências muito turísticas?", a: "Com horários, rotas e guias certos — base da curadoria Create Travel." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "brasil-amazonia-manaus-rio-negro",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/manaus-rio-negro",
    name: "Manaus & Rio Negro",
    bestTime: "Jun–Nov (seca) para trilhas e praias de rio; Dez–Mai (cheia) para igapós e grandes navegadas.",
    tags: ["navegacao", "cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Rio Negro at sunset with calm waters and rainforest horizon, cinematic editorial travel style, no people.",
    imageOverrideUrl: manausRioNegroImg,
    intro: "A porta de entrada para uma Amazônia com camadas: cidade, rio e floresta. A Create Travel equilibra cultura e natureza com logística suave e experiências de verdade.",
    highlights: [
      { title: "Encontro das Águas", story: "Duas correntezas correm lado a lado por seis quilômetros sem se misturar: o Negro escuro como café e o Solimões barrento como areia. Ver isso de perto é entender, no corpo, por que os ribeirinhos chamam os rios de gente — cada um com seu temperamento, sua temperatura, sua história." },
      { title: "Arquitetura e história de Manaus", story: "O Teatro Amazonas surge da floresta como uma alucinação belle époque: mármore italiano, ferro escocês, cúpula em mosaico tropical. Caminhar por ali é tocar com a ponta dos dedos o auge febril do ciclo da borracha — e entender de onde veio tanta ópera no meio da selva." },
      { title: "Navegação no Rio Negro", story: "O barco desliza por entre arquipélagos sem nome e o horizonte se abre infinito. Em algumas curvas o rio tem 20 km de largura — você está em água doce, mas parece mar. O vento bate no rosto e o tempo, finalmente, desacelera." },
      { title: "Trilhas e observação de fauna", story: "Saída ao amanhecer, antes que o calor suba: o guia mostra o primeiro tucano da manhã, o rastro fresco de uma cutia, uma orquídea suspensa que ninguém veria sem ele. A floresta se revela em camadas — quanto mais você olha, mais ela aparece." },
      { title: "Sabores amazônicos com curadoria", story: "Tucupi servido em prato fundo, jambu fazendo formigar a boca, tambaqui na brasa derretendo na faca. Cada garfada conta a geografia do rio: o que o solo dá, o que o ribeirinho pesca, o que a avó ensinou. Você nunca mais vai comer 'peixe' da mesma forma." }
    ],
    beyondUsual: [
      "Roteiro urbano-curado em Manaus (história + mercados + sabores).",
      "Experiências de rio em horários silenciosos.",
      "Combinações com bases mais remotas (ex.: Anavilhanas)."
    ],
    stays: ["mirante-do-gaviao"],
    faq: [
      { q: "Manaus vale a pena no roteiro?", a: "Sim, principalmente quando bem curada: história, arquitetura e gastronomia amazônica." },
      { q: "Dá para fazer sem pressa?", a: "Sim, montamos uma sequência com pausas e bons tempos de deslocamento." },
      { q: "Qual período é melhor?", a: "Depende do seu foco: seca para trilhas; cheia para navegação em igapós." },
      { q: "É bom para fotografia?", a: "Muito — luz, água e floresta rendem imagens únicas." },
      { q: "Pode ser uma primeira viagem à Amazônia?", a: "Sim, excelente para começar com conforto." },
      { q: "Como falar com consultor?", a: "Via WhatsApp no botão Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-pantanal-norte",
    continent: "Brasil",
    country: "Brasil",
    region: "Pantanal",
    slug: "brasil/pantanal/norte",
    name: "Pantanal Norte (MT)",
    bestTime: "Mai–Out (seca) para avistamento de fauna; Nov–Mar (cheia) para paisagens alagadas e aves.",
    tags: ["safari", "fotografia", "conservacao", "cavalgadas", "familia", "bem-estar", "birdwatching"],
    imageAiPrompt: "Ultra realistic wildlife photo of a jaguar in the Pantanal wetlands at golden hour, professional telephoto look, no people.",
    imageOverrideUrl: "",
    intro: "O Pantanal Norte é o Brasil em forma de safári: vida selvagem, luz dourada e encontros que marcam. A diferença está na curadoria de ritmo e ética.",
    highlights: [
      { title: "Safáris em áreas de alta densidade de fauna", story: "O guia aponta para a margem e seu coração para: uma onça-pintada de 90 kg, deitada à sombra, te olhando com indiferença régia. Você não respira. Nenhum filme te preparou para a escala disso. Por alguns segundos, vocês dois compartilham o mesmo silêncio — e você sai dali outra pessoa." },
      { title: "Observação de aves", story: "São 650 espécies catalogadas e o céu nunca está vazio. Tuiuiús de dois metros pousam como bailarinas, araras-azuis cruzam em casais para a vida toda, um martim-pescador mergulha bem na sua frente. Mesmo quem nunca olhou um pássaro sai dali com binóculo na mochila." },
      { title: "Passeios de barco/voadeira", story: "O rio Cuiabá é uma autoestrada de vida selvagem: capivaras tomando sol em família, jacarés deslizando como troncos, ariranhas brincando em bando. Cada curva entrega uma cena nova — e você passa o dia inteiro com a câmera no colo, pronto." },
      { title: "Cavalgadas pantaneiras", story: "Em cima de um cavalo crioulo, no ritmo lento de quem nasceu para a planície, você atravessa campos alagados onde carros não chegam. O peão canta baixinho à frente, garças levantam voo ao seu lado — e a paisagem se abre de um jeito que só a montaria permite ver." },
      { title: "Saídas ao amanhecer e entardecer", story: "O Pantanal pertence a essas duas horas mágicas. No nascer, a neblina sobe do rio em fumaça dourada e a fauna desperta numa orquestra. No pôr, o céu inteiro vira chama e os bandos voltam para o ninho riscando o vermelho. Levantar cedo aqui é sempre o melhor negócio do dia." }
    ],
    beyondUsual: [
      "Fotografia com foco em comportamento animal e narrativa.",
      "Vivência pantaneira com cultura de território.",
      "Canoagem silenciosa para leitura de rastros."
    ],
    stays: ["caiman-pantanal"],
    faq: [
      { q: "Quando a fauna aparece mais?", a: "Na seca (mai–out), quando a água baixa e a fauna se concentra." },
      { q: "É indicado para famílias?", a: "Sim, com ajustes de ritmo e atividades." },
      { q: "Precisa de preparo físico?", a: "Não necessariamente; dá para equilibrar conforto e atividade." },
      { q: "Dá para combinar com Bonito?", a: "Sim, combinação clássica e excelente." },
      { q: "Como evitar 'turismo de corrida'?", a: "Com base bem escolhida e horários curados." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-lencois-maranhenses",
    continent: "Brasil",
    country: "Brasil",
    region: "Maranhão",
    slug: "brasil/lencois-maranhenses",
    name: "Lençóis Maranhenses",
    bestTime: "Jun–Set para lagoas cheias; Mai e Out podem ser ótimos com menos fluxo (dependendo das chuvas).",
    tags: ["praia", "trekking", "fotografia", "bem-estar", "lua-de-mel", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Lençóis Maranhenses dunes with blue lagoons, bright natural light, no people.",
    imageOverrideUrl: "",
    intro: "Lençóis é beleza em estado bruto. A curadoria Create Travel está no timing: bases certas, horários vazios e deslocamentos inteligentes.",
    highlights: [
      { title: "Lagoas e dunas em diferentes bases", story: "Você sobe uma duna branca em silêncio e, do alto, o impossível: centenas de lagoas turquesa espalhadas no horizonte como peças de um colar. Desce correndo, mergulha numa água morna e doce, e percebe que está nadando dentro de um deserto. Pouca coisa no mundo dá esse tipo de espanto." },
      { title: "Pôr do sol nas dunas", story: "O sol se dissolve atrás da areia e tudo vira ouro líquido — duna, lagoa, seu rosto. Por dez minutos, o lugar inteiro brilha de um jeito que nenhuma câmera consegue capturar direito. É um daqueles momentos em que você guarda o celular e simplesmente fica." },
      { title: "Rotas cênicas selecionadas", story: "Atalhos de 4x4 por estradas de areia, paradas em comunidades pesqueiras esquecidas, travessia de rio em balsa antiga. Em vez de chegar rápido, você chega devagar — e o caminho vira parte da viagem, com cada parada revelando uma camada diferente do Maranhão profundo." },
      { title: "Vento, mar e rio em uma mesma viagem", story: "Da imensidão das dunas ao encontro do Rio Preguiças com o Atlântico em Atins. Você sai de uma lagoa de água doce pela manhã e mergulha no mar aberto à tarde — e entende por que essa região é chamada de paraíso anfíbio do Brasil." },
      { title: "Gastronomia regional com personalidade", story: "Camarão no bafo, peixe na folha de bananeira, arroz de cuxá com gosto de mato verde. Numa mesa rústica em Atins, ao som do vento, você prova receitas que atravessam séculos sem perder nenhum sabor. Comer aqui é tão paisagem quanto a duna." }
    ],
    beyondUsual: [
      "Travessias leves com pernoites de charme e logística suave.",
      "Saídas fotográficas em horários silenciosos.",
      "Experiências gastronômicas fora do circuito óbvio."
    ],
    stays: [],
    faq: [
      { q: "Quando as lagoas estão melhores?", a: "Normalmente de junho a setembro." },
      { q: "Precisa fazer travessia?", a: "Não. Podemos curar a viagem por bases sem travessia." },
      { q: "É bom para lua de mel?", a: "Sim, se você busca natureza e charme com tranquilidade." },
      { q: "Como fugir das multidões?", a: "Com base, horários e rotas certas." },
      { q: "Quantos dias?", a: "Em geral 5 a 8 noites, dependendo das bases escolhidas." },
      { q: "Como montar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-chapada-das-mesas",
    continent: "Brasil",
    country: "Brasil",
    region: "Maranhão",
    slug: "brasil/chapada-das-mesas",
    name: "Chapada das Mesas",
    bestTime: "Jun–Set (seca) para trilhas e estradas; cachoeiras cheias entre Dez–Mar.",
    tags: ["natureza", "trekking", "fotografia", "remoto", "aventura"],
    imageAiPrompt: "Ultra realistic photo of Chapada das Mesas in Maranhão, Brazil: dramatic flat-topped mesas at sunset, golden light, cerrado vegetation, waterfalls, cinematic landscape, no people.",
    imageOverrideUrl: "",
    intro: "Mesas de arenito recortando o cerrado, cachoeiras escondidas e um silêncio quase irreal. Um Maranhão alternativo aos Lençóis — ainda pouco explorado.",
    highlights: [
      { title: "Mirante do Portal da Chapada ao pôr do sol", story: "Você senta na beira da rocha, pés balançando sobre 300 metros de nada, e assiste o sol mergulhar entre duas mesas de arenito como num cinema sem teto. O cerrado embaixo vira vermelho-cobre, o silêncio é absoluto — e parece que esse mirante existe só para você naquele instante." },
      { title: "Cachoeira do Santuário e Encanto Azul", story: "Um corredor de pedra úmida e, no fim, uma cortina d'água caindo num poço esmeralda escondido na floresta. Você nada até o pé da queda, sente a massagem natural nos ombros, e entende por que essa cachoeira ganhou esse nome — é mesmo um pequeno templo encantado." },
      { title: "Poço Azul e suas águas translúcidas", story: "Quando o feixe de sol entra pela fenda na hora exata, o poço inteiro acende em azul-cobalto fluorescente. Você flutua de bruços de máscara e snorkel, o fundo a oito metros abaixo, e tem a sensação rara de estar suspenso dentro de uma pedra preciosa." },
      { title: "Cachoeira de São Romão, uma das maiores do Brasil", story: "Cento e cinquenta metros de queda livre, espuma branca caindo em paredões vermelhos, arco-íris se formando no respingo da tarde. De cima, você sente o trovão na barriga. De baixo, mergulha na piscina natural ao pé da queda — e fica pequenininho do jeito mais bonito do mundo." },
      { title: "Trilhas e mirantes com vistas cinematográficas", story: "Cada caminhada termina em uma varanda natural sobre o vazio: vales infinitos, mesas geológicas, o rio Tocantins serpenteando lá longe. Sem multidão, sem fila, sem cerca — só você, o vento quente do cerrado e a sensação rara de descobrir um Brasil que pouca gente conhece." }
    ],
    beyondUsual: [
      "Pernoites em pousadas de charme em Carolina (MA).",
      "Combinação com Jalapão por estrada cênica.",
      "Saídas privativas com guias locais em horários sem fluxo."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época?", a: "Jun–Set para trilhas secas; Dez–Mar para cachoeiras mais cheias." },
      { q: "Onde se hospedar?", a: "Carolina (MA) é a base principal, com pousadas charmosas." },
      { q: "Dá para combinar com Lençóis Maranhenses?", a: "Sim, mas exige logística — orientamos sobre voos e traslados." },
      { q: "Dá para combinar com Jalapão?", a: "Sim, é uma das combinações mais ricas do Brasil." },
      { q: "Precisa de preparo físico?", a: "Trilhas variam de leves a moderadas; adaptamos ao seu ritmo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-alter-do-chao",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/alter-do-chao",
    name: "Alter do Chão",
    bestTime: "Jun–Dez (seca) para praias de rio e águas claras; Jan–Mai (cheia) para igapós e florestas alagadas.",
    tags: ["praia", "navegacao", "bem-estar", "cultura", "familia"],
    imageAiPrompt: "Ultra realistic photo of Alter do Chão beach on the Tapajós river with turquoise waters and white sand, Amazonian landscape, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "O Caribe amazônico em sua versão mais autêntica: praias de águas claras, floresta ao redor e ritmo de vila. Uma pausa sofisticada na imensidão.",
    highlights: [
      { title: "Praias de rio com águas cristalinas", story: "Na Ilha do Amor, você atravessa um braço raso de água verde-turquesa caminhando — sim, é Amazônia, e sim, parece Caribe. A areia é branca, a água é doce e morna, e ao fundo a floresta densa lembra que você está, na verdade, no meio do maior rio de águas claras do planeta." },
      { title: "Floresta Nacional do Tapajós", story: "Uma trilha guiada entre sumaúmas de 50 metros, lianas grossas como braços e o cheiro inconfundível de chão vivo. O guia ribeirinho mostra a árvore que cura, a folha que perfuma, o cipó que dá água potável. Você sai de lá com a certeza de que floresta em pé vale infinitamente mais." },
      { title: "Cultura ribeirinha e artesanato", story: "Numa comunidade de palafitas, mulheres tecem cestos de tucumã enquanto contam histórias de cobra grande e da Iara. Você almoça peixe assado na folha, bebe suco de cupuaçu, leva para casa uma peça feita a mão — e uma versão da Amazônia que TV nenhuma mostra." },
      { title: "Pôr do sol no Rio Tapajós", story: "De canoa, no meio do rio largo como mar, o sol despenca atrás da floresta e o céu inteiro pega fogo em rosa e laranja. O barqueiro desliga o motor. Só o som da água batendo no casco. É o tipo de silêncio que reseta o ano inteiro." },
      { title: "Gastronomia amazônica local", story: "Tacacá fumegante numa cuia, açaí grosso e roxo servido com farinha, peixe pirarucu desfiado no tucupi. Em mesas simples à beira do rio, você prova ingredientes que nasceram a poucos metros dali — e descobre uma cozinha que é, ao mesmo tempo, ancestral e modernista." }
    ],
    beyondUsual: [
      "Expedição às comunidades tradicionais do Tapajós.",
      "Trilhas interpretativas na Floresta Nacional.",
      "Navegação contemplativa em horários silenciosos."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para ir?", a: "Seca (jun–dez) para praias; cheia (jan–mai) para experiências de floresta alagada." },
      { q: "É adequado para famílias?", a: "Sim, excelente para descanso em família com atividades leves." },
      { q: "Dá para combinar com outros destinos amazônicos?", a: "Sim, Santarém e conexões para outras regiões." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites permitem aproveitar bem o ritmo local." },
      { q: "É muito turístico?", a: "Pode ser em alta temporada; a curadoria ajuda a encontrar o equilíbrio." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-pantanal-sul",
    continent: "Brasil",
    country: "Brasil",
    region: "Pantanal",
    slug: "brasil/pantanal/sul",
    name: "Pantanal Sul (MS)",
    bestTime: "Mai–Set (seca) para safáris e fauna concentrada; Out–Abr (cheia) para paisagens alagadas.",
    tags: ["safari", "fotografia", "cavalgadas", "conservacao", "familia"],
    imageAiPrompt: "Ultra realistic photo of the southern Pantanal wetlands at sunrise with wildlife, calm waters reflecting golden light, no people.",
    imageOverrideUrl: "",
    intro: "A versão mais acessível do Pantanal, com fazendas históricas e rica biodiversidade. Base perfeita para combinar com Bonito.",
    highlights: [
      { title: "Safáris de observação de fauna", story: "Você sai numa caminhonete aberta antes do amanhecer e em poucos minutos: tatu, veado-campeiro, cervo-do-pantanal de chifres imponentes, bandos de queixadas atravessando a estrada. A cada parada, o guia explica comportamento e ecologia — você não está vendo bichos, está lendo um livro vivo." },
      { title: "Cavalgadas em fazendas históricas", story: "Sela de couro gasto, cavalo manso, peão à frente cantando uma toada. Você atravessa campos alagados que pertencem à mesma família há cinco gerações, passa por porteira centenária, almoça à sombra de uma figueira gigantesca. É o Pantanal contado por dentro, no ritmo de quem vive ali." },
      { title: "Observação de aves e jacarés", story: "Numa única lagoa: 200 jacarés tomando sol em fila como esculturas, garças brancas pousadas nas costas deles como num quadro, jaburus de 1,5m dando bote em peixe. Você fica três horas só olhando, e mesmo assim sai com a impressão de não ter visto nem metade." },
      { title: "Pesca esportiva (catch and release)", story: "O dourado morde e a vara verga em dois — quinze minutos de luta no calor da tarde até trazer ao barco um peixe dourado de 8 kg que parece feito de luz. Foto, beijo, devolução. Você não levou nada para casa, mas a história fica para sempre." },
      { title: "Cultura pantaneira autêntica", story: "À noite, viola de cocho na varanda, comitiva de peão chegando do campo, churrasco lento na brasa, causos contados pelo dono da fazenda. Aqui você não visita o Pantanal — você é recebido por ele, com gente que fala devagar e te trata como se já conhecesse há anos." }
    ],
    beyondUsual: [
      "Imersão em fazendas com história e tradição.",
      "Fotografia noturna de céu estrelado.",
      "Roteiros combinados com Bonito para diversidade de experiências."
    ],
    stays: [],
    faq: [
      { q: "Qual a diferença para o Pantanal Norte?", a: "Mais acessível, fazendas históricas e fácil combinação com Bonito." },
      { q: "Vejo onça no Pantanal Sul?", a: "É possível, mas menos provável que no Norte." },
      { q: "É bom para crianças?", a: "Sim, com atividades adaptadas ao ritmo familiar." },
      { q: "Quantos dias são ideais?", a: "3 a 5 noites, podendo combinar com Bonito." },
      { q: "Como funciona a pesca?", a: "Pesca esportiva com devolução, respeitando conservação." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-jalapao",
    continent: "Brasil",
    country: "Brasil",
    region: "Tocantins",
    slug: "brasil/jalapao",
    name: "Jalapão",
    bestTime: "Mai–Set (seca) para acesso e fervedouros; Out–Abr pode ter chuvas e estradas difíceis.",
    tags: ["trekking", "praia", "remoto", "fotografia", "expedicao"],
    imageAiPrompt: "Ultra realistic photo of Jalapão sand dunes and fervedouros crystal waters, dramatic savanna landscape, golden hour light, no people.",
    imageOverrideUrl: "",
    intro: "O cerrado em sua forma mais dramática: dunas douradas, nascentes cristalinas e vastidão silenciosa. Uma expedição para quem busca o Brasil remoto.",
    highlights: [
      { title: "Fervedouros de águas cristalinas", story: "Você se deita numa nascente de água tão pura e pressurizada que é literalmente impossível afundar — o corpo flutua sozinho como em mágica. Olha para cima e vê o céu azul recortado por buritizais. A água borbulha do fundo de areia branca como se a terra estivesse respirando." },
      { title: "Dunas e formações rochosas únicas", story: "Você sobe a Duna do Jalapão descalço, a areia laranja escorrendo entre os dedos, e do topo enxerga o cerrado se estendendo até onde a vista acaba. Não há fila, não há cerca, não há nada além do vento. É o tipo de paisagem que dá vontade de chorar de tão limpa." },
      { title: "Cachoeiras do cerrado", story: "A Cachoeira da Velha despenca 15 metros num paredão de 100 de largura, formando uma piscina cor de chá. Você nada até a base, sente a massagem da queda nos ombros, sai com a pele cheirando a barro doce do cerrado. Pouca gente conhece — quase ninguém esquece." },
      { title: "Comunidades quilombolas", story: "Em Mumbuca, dona Miúda mostra como o capim dourado vira fio, depois cesto, depois joia. Você senta no chão de terra batida, almoça galinha caipira na panela de ferro, escuta histórias de resistência que vêm dos avós dos avós. Leva para casa uma peça única — e uma lição inteira." },
      { title: "Céu estrelado intenso", story: "Sem cidade num raio de 100 km, a noite no Jalapão é absurda: a Via Láctea atravessa o céu como uma estrada de luz, estrelas cadentes cortam o silêncio. Você se deita numa rede ao lado do acampamento, e por horas o universo inteiro fica acessível, vivo, próximo." }
    ],
    beyondUsual: [
      "Roteiros fora do circuito principal com menos veículos.",
      "Vivências com artesãs do capim dourado.",
      "Acampamentos sob as estrelas em locais selecionados."
    ],
    stays: [],
    faq: [
      { q: "É uma viagem de aventura?", a: "Pode ser, mas há opções com conforto intermediário." },
      { q: "Precisa de 4x4?", a: "Sim, as estradas exigem veículos adequados." },
      { q: "Quantos dias são necessários?", a: "Mínimo 5 noites para ver os principais atrativos." },
      { q: "É indicado para crianças?", a: "Depende da idade e disposição para deslocamentos." },
      { q: "O que são fervedouros?", a: "Nascentes de água cristalina onde não se afunda." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-monte-roraima",
    continent: "Brasil",
    country: "Brasil",
    region: "Roraima",
    slug: "brasil/monte-roraima",
    name: "Monte Roraima",
    bestTime: "Dez–Mar (estação seca) — trilhas mais seguras e vistas abertas.",
    tags: ["trekking", "remoto", "fotografia", "expedicao", "natureza"],
    imageAiPrompt: "Ultra realistic photo of Monte Roraima tepui plateau, dramatic flat-topped sandstone mountain rising from cloud forest, mist, golden hour, no people.",
    imageOverrideUrl: monteRoraimaImg,
    intro: "O tepui mais icônico da América do Sul: um platô pré-cambriano suspenso entre nuvens, com formações rochosas e ecossistemas únicos no planeta.",
    highlights: [
      { title: "Travessia de 6 a 8 dias até o platô", story: "Você atravessa savana, sobe rampa de pedra úmida, passa entre nuvens — e no terceiro dia chega ao topo de uma montanha pré-histórica que serviu de inspiração para 'O Mundo Perdido'. Cada passo da subida é conquista, e quando você finalmente pisa no platô, sente fisicamente que está num lugar que poucos humanos conhecem." },
      { title: "Vale dos Cristais e jacuzzis naturais", story: "Andando pelo platô, você encontra um vale inteiro coberto de quartzos brilhando ao sol como se alguém tivesse derramado diamantes no chão. Adiante, piscinas naturais escavadas na pedra negra, água gelada e cristalina, banho gelado a 2.800 m de altitude. Surreal não é exagero — é descrição." },
      { title: "Vistas para a tríplice fronteira", story: "Do mirante chamado La Proa, três países se abrem aos seus pés: Brasil, Venezuela e Guiana. Lá embaixo, a Gran Sabana se estende em verde infinito, atravessada por rios de chocolate. Acima, só céu. O vento bate forte, e você entende por que os indígenas Pemón chamam esse lugar de 'casa dos deuses'." },
      { title: "Flora endêmica e formações rochosas surreais", story: "Esculturas de pedra erguidas pelo vento ao longo de bilhões de anos: tartarugas gigantes, navios, rostos. Entre elas, plantas carnívoras endêmicas e flores que só existem aqui, no topo deste tepui. Cada metro é um museu de história natural a céu aberto." },
      { title: "Acampamentos sob paredões de 400m", story: "Sua barraca é montada na base de uma muralha vermelha que sobe vertical, sumindo nas nuvens. A noite cai, a fogueira estala, o guia indígena conta lendas Pemón em voz baixa. Você dorme com o som do vento riscando a pedra — uma das melhores noites de sono da sua vida." }
    ],
    beyondUsual: [
      "Saída pelo lado brasileiro com guias indígenas Pemón.",
      "Extensão para a Gran Sabana venezuelana.",
      "Sessões de astrofotografia no platô."
    ],
    stays: [],
    faq: [
      { q: "É uma expedição difícil?", a: "Sim, exige bom condicionamento físico e disposição para acampar." },
      { q: "Quantos dias dura a travessia?", a: "Em média 6 a 8 dias completos com guia." },
      { q: "Precisa de equipamento técnico?", a: "Não é escalada, mas requer equipamento de trekking completo." },
      { q: "Qual é o ponto de partida?", a: "Pacaraima (RR) no lado brasileiro ou Santa Elena (Venezuela)." },
      { q: "É indicado para iniciantes?", a: "Não. Recomendamos experiência prévia em trekkings longos." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-chapada-diamantina",
    continent: "Brasil",
    country: "Brasil",
    region: "Bahia",
    slug: "brasil/chapada-diamantina",
    name: "Chapada Diamantina",
    bestTime: "Mar–Out (período mais seco); Nov–Fev pode ter chuvas intensas.",
    tags: ["trekking", "fotografia", "bem-estar", "cultura", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Chapada Diamantina mountains with waterfalls and dramatic cliffs, Brazilian cerrado landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Montanhas, cânions e cachoeiras em meio à caatinga e ao cerrado baiano. Uma Chapada para caminhar, contemplar e se reconectar.",
    highlights: [
      { title: "Cachoeira da Fumaça e outras quedas monumentais", story: "São 380 metros de queda livre — tão alta que a água se desfaz em neblina antes de tocar o chão. Você se deita na borda do paredão, cabeça para fora do precipício, e vê o vento empurrando a cachoeira para cima. É vertigem, beleza e adrenalina misturadas num único minuto inesquecível." },
      { title: "Trilhas no Vale do Pati", story: "Três a seis dias de travessia pelo coração da Chapada, dormindo em casas de moradores que cozinham para você no fogão a lenha. Cada dia: um vale novo, uma cachoeira escondida, um mirante que parece pintado. Você termina cansado, em paz e com a sensação de ter feito uma das melhores caminhadas da América do Sul." },
      { title: "Morro do Pai Inácio", story: "Trinta minutos de subida e, no topo, 360 graus do mundo se abrindo: serras roxas no horizonte, vales verdes, ruínas de fazendas de garimpo. O pôr do sol pinta tudo de cor-de-rosa, o vento é forte, e por meia hora você tem certeza de que esse é um dos lugares mais bonitos do Brasil." },
      { title: "Grutas e poços azuis", story: "Você desce uma escada de pedra e entra na caverna do Poço Azul. Cinco metros abaixo, a água é tão transparente que parece feita de ar. Coloca máscara, flutua, vê o feixe de luz mergulhando até o fundo num azul-elétrico — e tem a impressão estranha de estar suspenso no vazio." },
      { title: "Vilas históricas de mineração", story: "Lençóis, Mucugê, Igatu — casarios coloridos do século XIX, igrejinhas brancas, ladeiras de pedra polida pelos passos do garimpo. Você toma café num antigo armazém, ouve história de aventureiro de diamante, dorme em pousada de janelões azuis. O passado aqui não é museu, é vizinho." }
    ],
    beyondUsual: [
      "Travessia do Vale do Pati com pernoites em casas locais.",
      "Trilhas pouco visitadas com guias especializados.",
      "Gastronomia de fazenda com produtos locais."
    ],
    stays: [],
    faq: [
      { q: "Precisa de preparo físico?", a: "Para trilhas longas sim, mas há opções para todos os níveis." },
      { q: "Qual a melhor base?", a: "Lençóis é a mais estruturada, mas outras vilas têm charme." },
      { q: "Vale a pena fazer o Vale do Pati?", a: "É uma das melhores travessias do Brasil para quem curte trekking." },
      { q: "Quantos dias ficar?", a: "5 a 7 noites permitem bom equilíbrio." },
      { q: "Dá para ir com crianças?", a: "Sim, escolhendo trilhas adequadas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-chapada-dos-veadeiros",
    continent: "Brasil",
    country: "Brasil",
    region: "Goiás",
    slug: "brasil/chapada-dos-veadeiros",
    name: "Chapada dos Veadeiros",
    bestTime: "Mai–Set (seca) para cachoeiras acessíveis; Out–Abr pode ter trilhas fechadas por chuva.",
    tags: ["trekking", "bem-estar", "fotografia", "remoto", "conservacao"],
    imageAiPrompt: "Ultra realistic photo of Chapada dos Veadeiros waterfalls and cerrado landscape, crystal clear waters, dramatic rock formations, no people.",
    imageOverrideUrl: "",
    intro: "Energia, natureza e misticismo no coração do cerrado. Cachoeiras de tirar o fôlego e uma comunidade vibrante em Alto Paraíso.",
    highlights: [
      { title: "Cachoeiras dentro e fora do parque", story: "Águas cristalinas despencam por paredões de quartzito e formam piscinas naturais cor de esmeralda. Em Almécegas, Loquinhas, Santa Bárbara e São Bento, cada cachoeira tem um ritmo: umas convidam ao banho contemplativo, outras ao salto adrenalínico. O som constante da água preenche o silêncio do cerrado." },
      { title: "Trilhas no Parque Nacional", story: "Caminhar pelos Saltos do Rio Preto ou pelos Cânions é mergulhar no coração geológico mais antigo do Brasil — rochas com 1,8 bilhão de anos sob seus pés. A vegetação rasteira do cerrado se abre em mirantes vertiginosos, e o vento traz o perfume seco das ervas medicinais que tingem o ar de eucalipto e capim-limão." },
      { title: "Vale da Lua e formações rochosas", story: "A água esculpiu a rocha por milênios até criar piscinas circulares, fendas profundas e superfícies lisas como porcelana. Caminhar pelo Vale da Lua ao entardecer é sentir-se em outro planeta — a luz dourada se reflete nas curvas minerais e o céu se prepara para um espetáculo de estrelas." },
      { title: "Comunidades alternativas e bem-estar", story: "Alto Paraíso e São Jorge pulsam com retiros de yoga, terapeutas, músicos e cozinheiros que fizeram do cerrado seu refúgio. Cafés orgânicos, jantares vegetarianos à luz de vela e cerimônias de cura compõem uma atmosfera leve, onde o ritmo do corpo desacelera naturalmente." },
      { title: "Céu estrelado intenso", story: "Longe das luzes urbanas e a 1.200 metros de altitude, o céu da Chapada se abre em uma cúpula de Via Láctea visível a olho nu. Deitar em uma esteira no Mirante da Janela e ver estrelas cadentes riscarem o firmamento é uma das experiências mais místicas que o Brasil oferece." }
    ],
    beyondUsual: [
      "Cachoeiras menos conhecidas fora do circuito turístico.",
      "Experiências de bem-estar e retiros.",
      "Trilhas ao nascer do sol para evitar multidões."
    ],
    stays: [],
    faq: [
      { q: "É muito cheio?", a: "Pode ser em feriados, mas a curadoria ajuda a evitar picos." },
      { q: "Precisa de guia?", a: "Para o parque sim, para outras cachoeiras depende." },
      { q: "É bom para casais?", a: "Sim, muitas opções românticas e de relaxamento." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para aproveitar bem." },
      { q: "Tem boa gastronomia?", a: "Sim, Alto Paraíso surpreende positivamente." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-fernando-de-noronha",
    continent: "Brasil",
    country: "Brasil",
    region: "Pernambuco",
    slug: "brasil/fernando-de-noronha",
    name: "Fernando de Noronha",
    bestTime: "Ago–Dez para mergulho com melhor visibilidade; Mar–Jul para surfe.",
    tags: ["praia", "mergulho", "lua-de-mel", "fotografia", "conservacao"],
    imageAiPrompt: "Ultra realistic aerial photo of Fernando de Noronha with turquoise waters, dramatic rock formations and pristine beaches, tropical paradise, no people.",
    imageOverrideUrl: "",
    intro: "O arquipélago mais exclusivo do Brasil: águas cristalinas, vida marinha abundante e controle de visitação que preserva a magia.",
    highlights: [
      { title: "Praias paradisíacas e enseadas", story: "A Praia do Sancho — eleita várias vezes a mais bela do mundo — se revela apenas após descer uma escada cravada na falésia: areia clara, água em três tons de azul e peixes coloridos a poucos metros da margem. Baía dos Porcos, Cacimba do Padre e Atalaia compõem um colar de enseadas onde cada chegada é um espanto." },
      { title: "Mergulho com tartarugas e golfinhos", story: "As águas de Noronha têm visibilidade que ultrapassa 40 metros e abrigam mais de 200 espécies de peixes, tartarugas-verdes que se alimentam calmamente nos corais e golfinhos-rotadores que executam saltos acrobáticos ao amanhecer na Baía dos Golfinhos. Mergulhar aqui é flutuar dentro de um aquário vivo." },
      { title: "Trilhas com vistas cinematográficas", story: "A Trilha do Atalaia, do Capim-Açu e do Piquinho levam a mirantes onde o oceano Atlântico se estende em curvas dramáticas, com o Morro do Pico se elevando como uma escultura vulcânica. Cada ponto revela uma Noronha diferente — selvagem, vertical, esculpida pelo vento e pelo tempo." },
      { title: "Pôr do sol no Forte", story: "No Forte Nossa Senhora dos Remédios, o sol mergulha no mar tingindo o céu de laranja, rosa e violeta enquanto a brisa traz o som das ondas batendo nas pedras. Um drink de cajá na mão, conversa baixa e a sensação rara de estar testemunhando um dos finais de tarde mais bonitos do planeta." },
      { title: "Vida marinha única", story: "Tubarões-lixa repousam em fendas, arraias deslizam silenciosas, tartarugas-verdes pastam tranquilas e cardumes de peixes-cirurgião cintilam como prata em movimento. Noronha é santuário marinho preservado — cada mergulho é um privilégio raro de testemunhar a vida oceânica em equilíbrio." }
    ],
    beyondUsual: [
      "Mergulho em pontos menos frequentados com operadoras selecionadas.",
      "Trilhas ao amanhecer para evitar fluxo.",
      "Experiências gastronômicas com ingredientes locais."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias são ideais?", a: "5 a 7 noites para mergulho e praias com calma." },
      { q: "É muito caro?", a: "Sim, mas a exclusividade e preservação justificam." },
      { q: "Precisa reservar com antecedência?", a: "Sim, especialmente para pousadas e mergulhos." },
      { q: "É bom para lua de mel?", a: "Perfeito para casais que amam natureza." },
      { q: "Verei golfinhos?", a: "Muito provável, especialmente na Baía dos Golfinhos." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-bonito",
    continent: "Brasil",
    country: "Brasil",
    region: "Mato Grosso do Sul",
    slug: "brasil/bonito",
    name: "Bonito & Serra da Bodoquena",
    bestTime: "Ano todo, com melhor visibilidade Dez–Mar; Jun–Set é alta temporada.",
    tags: ["mergulho", "trekking", "familia", "fotografia", "conservacao"],
    imageAiPrompt: "Ultra realistic underwater photo of crystal clear waters in Bonito Brazil with fish and aquatic vegetation, natural light filtering through, no people.",
    imageOverrideUrl: "",
    intro: "Águas tão claras que parecem irreais. Bonito é ecoturismo referência: flutuação, grutas e natureza preservada pelo modelo sustentável.",
    highlights: [
      { title: "Flutuação em rios cristalinos", story: "Vestir roupa de neoprene, máscara e snorkel e deixar-se levar pela correnteza suave do Rio Sucuri ou do Rio da Prata é entrar em um aquário vivo. Cardumes de dourados, piraputangas e curimbás passam a centímetros do seu rosto, enquanto a vegetação submersa balança como cabelos verdes na água translúcida." },
      { title: "Gruta do Lago Azul", story: "Após descer 100 metros entre estalactites milenares, abre-se um lago de azul impossivelmente intenso, iluminado por um raio de sol que entra pela abertura da caverna entre setembro e fevereiro. O silêncio é absoluto, interrompido apenas pelo eco dos passos — uma das cenas mais surreais do Brasil." },
      { title: "Cachoeiras e trilhas", story: "A Estância Mimosa e a Boca da Onça revelam um circuito de quedas escondidas na mata, onde se pode nadar em piscinas naturais sob cascatas espumantes. Trilhas leves entre o cerrado e a Mata Atlântica conduzem a tirolesas, rapéis e a piscinas naturais de água azul-turquesa." },
      { title: "Mergulho em abismos", story: "O Abismo Anhumas é uma das experiências mais intensas do ecoturismo mundial: rapel de 72 metros até um lago subterrâneo cristalino onde se mergulha entre formações cônicas submersas que parecem catedrais de pedra. Um privilégio para poucos — limite diário rigoroso de visitantes." },
      { title: "Observação de fauna aquática", story: "Sentar à beira do Rio Formoso e ver piraputangas saltarem para pegar frutos caídos é puro espetáculo. Aves aquáticas como o tuiuiú, lontras brincalhonas e jacarés ao entardecer compõem um cenário de vida abundante — Bonito é uma das melhores janelas para a fauna pantaneira sem entrar no Pantanal." }
    ],
    beyondUsual: [
      "Flutuações em rios menos visitados.",
      "Combinação estratégica de passeios para evitar filas.",
      "Extensões para a Serra da Bodoquena e Pantanal."
    ],
    stays: [],
    faq: [
      { q: "Precisa saber nadar?", a: "Para flutuação não, mas ajuda ter conforto na água." },
      { q: "É bom para crianças?", a: "Sim, excelente destino para famílias." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para os principais atrativos." },
      { q: "Posso combinar com Pantanal?", a: "Sim, é uma das melhores combinações do Brasil." },
      { q: "Os passeios são muito cheios?", a: "O sistema de vouchers controla, mas alta temporada exige planejamento." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-jericoacoara",
    continent: "Brasil",
    country: "Brasil",
    region: "Ceará",
    slug: "brasil/jericoacoara",
    name: "Jericoacoara",
    bestTime: "Jul–Dez para ventos constantes e céu limpo; Jan–Jun pode ter chuvas.",
    tags: ["praia", "bem-estar", "lua-de-mel", "fotografia", "trekking"],
    imageAiPrompt: "Ultra realistic photo of Jericoacoara dunes and lagoons at sunset, dramatic coastal landscape, golden light, no people.",
    imageOverrideUrl: "",
    intro: "Vila de pescadores que virou ícone: dunas, lagoas e pôr do sol perfeito. Jeri equilibra rusticidade e conforto para quem busca o litoral brasileiro autêntico.",
    highlights: [
      { title: "Pôr do sol na Duna do Pôr do Sol", story: "Toda tarde, uma procissão silenciosa sobe a duna gigante que abraça a vila. No topo, dezenas de pessoas se sentam na areia ainda morna, esperando o ritual: o sol mergulhando no Atlântico em um espetáculo de laranjas, rosas e violetas. Quando o último raio desaparece, vem o aplauso — uma das tradições mais bonitas do litoral brasileiro." },
      { title: "Lagoas de água doce", story: "A Lagoa do Paraíso e a Lagoa Azul têm águas mornas, transparentes e tão calmas que parecem espelhos. Redes amarradas dentro d'água, tábuas de madeira e barzinhos rústicos compõem um cenário onde o tempo para — passar uma tarde inteira boiando, lendo e tomando água de coco é o programa." },
      { title: "Kitesurf e windsurf", story: "Entre julho e dezembro, ventos constantes de 25 nós transformam Jeri em meca mundial do kite. Dezenas de velas coloridas cortam o céu sobre as ondas, atletas saltam metros no ar e a Lagoa do Cauípe oferece águas planas perfeitas para iniciantes. Pegar uma aula aqui é entrar em um ritual coletivo." },
      { title: "Passeios de buggy", story: "Saltar em um buggy com 'emoção, por favor!' e cruzar dunas alaranjadas, atravessar rios com a água batendo nas portas e descer ladeiras de areia em queda livre é assinatura de Jeri. O motorista vira anfitrião, contando lendas locais e mostrando lagoas escondidas que só os iniciados conhecem." },
      { title: "Ruas de areia e vida noturna", story: "Jeri não tem asfalto nem postes de luz — as ruas são tapetes de areia branca e à noite as estrelas brilham sobre a Rua Principal. Bares com música ao vivo, capoeira na praça, mesas na areia, drinks de frutas tropicais e encontros que se estendem até o amanhecer. Um charme rústico e cosmopolita ao mesmo tempo." }
    ],
    beyondUsual: [
      "Passeios a lagoas menos conhecidas fora do circuito.",
      "Experiências de bem-estar e yoga.",
      "Jantares em locais com ingredientes locais."
    ],
    stays: [],
    faq: [
      { q: "É muito cheio?", a: "Pode ser em alta temporada, mas a curadoria encontra equilíbrio." },
      { q: "Como chegar?", a: "Via Fortaleza ou Jijoca de Jericoacoara." },
      { q: "É bom para kitesurf?", a: "Um dos melhores do Brasil de julho a dezembro." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para curtir sem pressa." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, Rota das Emoções inclui Jeri, Delta e Lençóis." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-serra-da-capivara",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/serra-da-capivara",
    name: "Serra da Capivara (PI)",
    bestTime: "Mai–Set (seca) para trilhas confortáveis e luz cinematográfica nos paredões.",
    tags: ["cultura", "fotografia", "trekking", "remoto", "conservacao"],
    imageAiPrompt: "Ultra realistic editorial photo of Serra da Capivara National Park in Piauí, Brazil, sandstone cliffs at golden hour with prehistoric rock paintings, caatinga landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Serra da Capivara é um dos sítios arqueológicos mais importantes do mundo: paredões de arenito esculpidos pelo tempo guardam pinturas rupestres com mais de 25 mil anos. Uma viagem rara, de profundidade histórica e paisagens de cinema na caatinga piauiense.",
    highlights: [
      { title: "Pinturas rupestres milenares em sítios ao ar livre", story: "Caminhar sob paredões de arenito ocre e ver cenas pintadas há mais de 25 mil anos — caçadas, danças, partos, rituais — é um arrepio raro. Os pigmentos vermelhos, amarelos e brancos resistiram ao tempo e contam histórias de povos que viveram aqui muito antes do que se imaginava possível nas Américas. Cada figura é um sussurro ancestral." },
      { title: "Trilhas pelos cânions e boqueirões de arenito", story: "Os boqueirões da Pedra Furada e da Capivara abrem fendas dramáticas na caatinga, com paredões verticais avermelhados e silêncio absoluto. Caminhar entre eles ao amanhecer, quando a luz tangencial revela texturas e cores que à tarde desaparecem, é entrar em uma catedral natural esculpida pelo tempo geológico." },
      { title: "Museu do Homem Americano em São Raimundo Nonato", story: "Um museu de nível internacional no sertão piauiense apresenta o trabalho da arqueóloga Niède Guidon, que provou a presença humana nas Américas há mais de 50 mil anos. Crânios, ferramentas, reconstituições e narrativas envolventes recolocam o Brasil no centro da história da humanidade." },
      { title: "Pôr do sol no Desfiladeiro da Capivara", story: "No fim da tarde, os paredões de arenito ficam incandescentes, como se a pedra guardasse o sol dentro de si. Sentar-se em uma laje quente, ouvir o canto das araras-canindé voltando aos ninhos e ver o céu virar fogo é um dos finais de tarde mais cinematográficos do Brasil profundo." },
      { title: "Visita ao Museu da Natureza", story: "Projeto arquitetônico contemporâneo de Niemeyer dialoga com a paisagem da caatinga e conta a história natural do bioma — sua fauna, flora, formação geológica e a vida dos primeiros habitantes. Uma experiência imersiva que prepara o olhar para enxergar a caatinga como rica, complexa e única no planeta." }
    ],
    beyondUsual: [
      "Guia local com leitura aprofundada das pinturas e contexto arqueológico.",
      "Saídas fotográficas ao amanhecer e ao entardecer, quando a luz revela texturas.",
      "Encontro com ceramistas da Cerâmica Serra da Capivara — design contemporâneo com raízes ancestrais."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Entre maio e setembro, na seca, com clima mais ameno e trilhas confortáveis." },
      { q: "Quantos dias devo ficar?", a: "3 a 4 noites permitem visitar os principais sítios sem pressa." },
      { q: "Como chegar?", a: "Voo até Teresina (PI) ou Petrolina (PE) e transfer rodoviário até São Raimundo Nonato." },
      { q: "É adequado para crianças?", a: "Sim, com trilhas selecionadas conforme idade e ritmo." },
      { q: "Preciso de guia?", a: "Sim, a entrada nos sítios é obrigatoriamente acompanhada por guia credenciado." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "brasil-cristalino",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/cristalino",
    name: "Cristalino (Alta Floresta, MT)",
    bestTime: "Mai–Set (seca) para trilhas e observação de aves; Out–Abr para floresta exuberante e cheia de vida.",
    tags: ["conservacao", "fotografia", "remoto", "trekking", "navegacao", "bem-estar", "birdwatching"],
    imageAiPrompt: "Ultra realistic aerial photo of the Cristalino River and pristine southern Amazon rainforest with canopy observation tower at golden hour, mist, editorial travel style, no people.",
    imageOverrideUrl: "",
    intro: "No sul da Amazônia mato-grossense, a Reserva Particular do Patrimônio Natural Cristalino guarda uma das florestas mais bem preservadas do bioma. Rio de águas escuras, biodiversidade rara e torres de observação acima da copa: uma das experiências de natureza mais profundas do Brasil.",
    highlights: [
      { title: "Torres de observação a 50m acima da copa da floresta", story: "Subir os 50 metros da torre antes do amanhecer é viver um privilégio raro: estar acima do dossel da Amazônia enquanto a floresta desperta. Bandos de araras vermelhas cruzam o céu rosado, tucanos cantam, macacos-aranha pulam entre galhos e a neblina se levanta como um lençol — uma das experiências de natureza mais profundas do Brasil." },
      { title: "Navegação pelo Rio Cristalino e seus afluentes", story: "O Cristalino é um rio de águas escuras e límpidas que serpenteia entre paredões de floresta intocada. Em barcos silenciosos ao entardecer, é possível ver onças-pintadas descansando nas margens, ariranhas pescando, capivaras em famílias e o reflexo perfeito da mata na superfície imóvel da água." },
      { title: "Trilhas interpretativas com guias naturalistas", story: "Os guias do Cristalino Lodge são entre os mais qualificados da Amazônia — biólogos que decifram pegadas, sons, plantas medicinais e cantos de aves com precisão de cientistas. Cada caminhada se transforma em aula viva sobre o bioma mais complexo do planeta." },
      { title: "Observação de aves raras (mais de 600 espécies)", story: "Para birdwatchers, Cristalino é destino de peregrinação mundial: mais de 600 espécies catalogadas, incluindo o gavião-real, o uirapuru, o galo-da-serra e dezenas de espécies endêmicas. Cada saída ao amanhecer é uma nova lista, novos cantos, novas plumagens deslumbrantes." },
      { title: "Avistamento de primatas e fauna amazônica", story: "Macacos-aranha, macacos-prego, micos-de-cheiro e o raro zogue-zogue habitam a reserva. Em silêncio, é possível ver antas atravessando trilhas, queixadas em bandos, jaguatiricas e até, com sorte, a sombra de uma onça-pintada — a maior densidade de fauna acessível ao visitante na Amazônia brasileira." }
    ],
    beyondUsual: [
      "Amanhecer no topo da torre, com a floresta despertando em camadas de som.",
      "Saídas dedicadas à fotografia de fauna com guias especializados.",
      "Imersão em projeto de conservação ativo — viagem com propósito real."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Maio a setembro (seca) facilita trilhas e observação; a estação chuvosa traz floresta mais exuberante." },
      { q: "Quantos dias devo ficar?", a: "Mínimo de 4 noites para aproveitar trilhas, rio e torres com tranquilidade." },
      { q: "Como chegar?", a: "Voo até Alta Floresta (MT) e transfer terrestre + barco até o lodge." },
      { q: "É indicado para birdwatchers?", a: "Sim, é um dos destinos mais cobiçados do mundo para observação de aves." },
      { q: "Dá para ir com crianças?", a: "Sim, com atividades ajustadas à idade e ritmo familiar." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "brasil-rio-de-janeiro",
    continent: "Brasil",
    country: "Brasil",
    region: "Sudeste",
    slug: "brasil/sudeste/rio-de-janeiro",
    name: "Rio de Janeiro",
    bestTime: "Abr–Jun e Set–Nov, com clima ameno, menos chuva e luz dourada nas montanhas.",
    tags: ["cultura", "gastronomia", "praia", "fotografia", "bem-estar", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Rio de Janeiro at golden hour with Sugarloaf, Christ the Redeemer and Copacabana beach, lush green mountains meeting turquoise sea, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Cidade-paisagem onde montanha, mata e mar se encontram em escala dramática. O Rio é cultura viva, gastronomia em ascensão e mirantes inesquecíveis — uma das cidades mais cenográficas do planeta, com camadas para muito além do óbvio.",
    highlights: [
      { title: "Cristo Redentor e Pão de Açúcar", story: "Subir ao Corcovado ao amanhecer, quando o Rio ainda dorme sob uma neblina dourada e o Cristo se ergue contra o céu rosa, é um momento de quase silêncio espiritual. Do Pão de Açúcar, ao entardecer, a cidade se acende em luzes enquanto a baía vira espelho — duas perspectivas que mostram por que o Rio é considerado uma das paisagens mais belas do planeta." },
      { title: "Praias de Ipanema, Leblon e Copacabana", story: "Cada praia tem sua tribo, seu ritmo e seu posto. Em Ipanema, o pôr do sol no Arpoador é aplaudido coletivamente todos os dias. No Leblon, a brisa traz o cheiro de água de coco e protetor solar. Em Copacabana, o calçadão de Burle Marx é palco de futevôlei, samba e encontros — a praia carioca é cultura viva." },
      { title: "Centro histórico e Boulevard Olímpico", story: "Caminhar pelo Largo da Carioca, Confeitaria Colombo, Igreja da Candelária e Theatro Municipal é folhear séculos de história brasileira. No Boulevard Olímpico, o Museu do Amanhã e o MAR convivem com murais gigantes de Kobra — um Rio contemporâneo, vibrante e em reinvenção constante." },
      { title: "Floresta da Tijuca e mirantes", story: "A maior floresta urbana do mundo guarda cachoeiras escondidas, trilhas para o Pico da Tijuca, e mirantes como o Vista Chinesa e a Mesa do Imperador, com vistas panorâmicas da cidade abraçada pela mata. Uma cidade onde, em 30 minutos, você sai do asfalto e entra na Mata Atlântica intacta." },
      { title: "Cena gastronômica e cultural contemporânea", story: "Restaurantes como Oro, Lasai e Olympe figuram entre os melhores do mundo, e a nova geração de chefs reinventa a cozinha carioca com ingredientes da Mata Atlântica e do mar. Bares de música ao vivo em Santa Teresa, samba na Pedra do Sal e MPB no Beco das Garrafas compõem uma trilha sonora inesquecível." }
    ],
    beyondUsual: [
      "Trilha guiada até o topo do Morro Dois Irmãos ao amanhecer.",
      "Roteiro privado de samba de raiz no Centro com curador musical.",
      "Helicóptero ao pôr do sol sobre a Baía de Guanabara."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Abril–junho e setembro–novembro: clima ameno, menos chuva e cidade mais tranquila." },
      { q: "Quantos dias devo ficar?", a: "5 a 7 noites para curtir cidade, praias e excursões com calma." },
      { q: "Onde se hospedar?", a: "Ipanema e Leblon para praia; Santa Teresa para charme histórico; Copacabana para clássico." },
      { q: "Vale a pena ir no Réveillon ou Carnaval?", a: "Sim, mas com planejamento antecipado e curadoria de logística — montamos roteiros sob medida." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Búzios, Paraty ou Costa Verde funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-cataratas-iguacu",
    continent: "Brasil",
    country: "Brasil",
    region: "Sul",
    slug: "brasil/sul/cataratas-iguacu",
    name: "Cataratas do Iguaçu",
    bestTime: "Abr–Jun e Set–Out, com clima ameno e vazão equilibrada nas quedas.",
    tags: ["fotografia", "familia", "conservacao", "trekking"],
    imageAiPrompt: "Ultra realistic aerial photo of Iguaçu Falls at golden hour with rainbow over the horseshoe falls, surrounded by emerald rainforest, mist rising, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Uma das maiores maravilhas naturais do planeta: 275 quedas espalhadas em ferradura, cercadas pela Mata Atlântica preservada. Iguaçu é potência sensorial — som, água e luz em escala monumental — e merece curadoria de tempo e ritmo.",
    highlights: [
      { title: "Trilha das Cataratas no lado brasileiro", story: "A trilha panorâmica revela as cataratas em camadas — primeiro como sussurro distante, depois como rugido. No fim, uma passarela avança sobre o rio em meio à Garganta do Diabo, e a água cai com tamanha força que o vapor sobe em jatos verticais, criando arco-íris duplos que parecem dançar. Sair molhado faz parte do ritual." },
      { title: "Garganta do Diabo no lado argentino", story: "Pelo lado argentino, um trenzinho leva até passarelas que avançam sobre o rio até o exato ponto onde 1.500 m³ de água por segundo despencam 80 metros em uma fenda em U. O barulho é ensurdecedor, o vapor encobre o corpo, e a sensação é de estar à beira do fim do mundo — visceral e inesquecível." },
      { title: "Macuco Safari (passeio de barco até as quedas)", story: "Lanchas potentes sobem o rio Iguaçu até entrar literalmente embaixo das quedas. A água golpeia o rosto, o barco balança e o coração dispara — uma das experiências mais adrenalínicas e refrescantes do Brasil. Sair encharcado, rindo e com a alma lavada é garantido." },
      { title: "Voo de helicóptero sobre as Cataratas", story: "Vistas do alto, as cataratas revelam sua escala monumental — uma ferradura de 2,7 km de extensão com 275 quedas separadas, cercada de floresta verde-esmeralda até onde a vista alcança. Em 10 minutos de voo, a perspectiva muda para sempre: a magnitude do espetáculo só se compreende do céu." },
      { title: "Parque das Aves e Itaipu Binacional", story: "O Parque das Aves abriga tucanos, araras, harpias e flamingos em recintos imersivos onde se caminha dentro dos viveiros — uma das melhores experiências de educação ambiental do país. Itaipu, ao lado, impressiona pela engenharia: uma das maiores hidrelétricas do mundo, com tour iluminado à noite que vira espetáculo." }
    ],
    beyondUsual: [
      "Café da manhã no Belmond Hotel das Cataratas, com acesso exclusivo ao parque antes da abertura.",
      "Jantar ao luar com vista para as quedas em noites de lua cheia.",
      "Visita guiada a projeto de conservação da Mata Atlântica na região."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias devo ficar?", a: "3 a 4 noites para visitar os dois lados e atividades complementares." },
      { q: "Lado brasileiro ou argentino?", a: "Os dois — perspectivas completamente diferentes e complementares." },
      { q: "Qual a melhor época para visitar?", a: "Abril–junho e setembro–outubro: clima ameno e vazão equilibrada." },
      { q: "É bom para crianças?", a: "Sim, com infraestrutura excelente e atividades para todas as idades." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Bonito ou Buenos Aires funcionam bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-canions-do-sul",
    continent: "Brasil",
    country: "Brasil",
    region: "Sul",
    slug: "brasil/sul/canions-do-sul",
    name: "Cânions do Sul (Aparados da Serra)",
    bestTime: "Abr–Jun e Set–Nov, com céu limpo, luz dourada e paisagens nítidas; inverno traz névoa e drama.",
    tags: ["trekking", "fotografia", "remoto", "conservacao", "montanha"],
    imageAiPrompt: "Ultra realistic editorial photo of Itaimbezinho canyon in Aparados da Serra Brazil with vertical basalt cliffs covered in araucaria pines and mist at golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Paredões verticais de basalto que cortam o planalto entre Santa Catarina e Rio Grande do Sul. Os cânions do sul são uma das paisagens mais imponentes do Brasil — silêncio, araucárias e abismos que se revelam entre névoas e luz dourada.",
    highlights: [
      { title: "Cânion Itaimbezinho e Trilha do Vértice", story: "A Trilha do Vértice leva ao mirante onde o Itaimbezinho se abre como uma ferida na terra — 720 metros de profundidade, paredões verticais de basalto e a Cascata das Andorinhas caindo em fios prateados. Em dias de neblina, as nuvens entram pelo cânion como rios de algodão, e a vista vira pintura abstrata." },
      { title: "Cânion Fortaleza com seus mirantes", story: "Maior e mais imponente que o Itaimbezinho, o Fortaleza tem 7,5 km de extensão e 900 metros de profundidade. Caminhar pela borda, com araucárias se silhuetando contra o céu e o vento gelado trazendo o som distante de uma cascata, é uma experiência de pequenez diante da escala geológica." },
      { title: "Cascata do Tigre Preto", story: "No fundo do Cânion Itaimbezinho, escondida entre paredões cobertos de bromélias e samambaias gigantes, está uma cascata de 350 metros que cai em queda livre. Avistá-la do mirante exclusivo é uma das visões mais dramáticas do sul do Brasil — a natureza em estado bruto." },
      { title: "Vilarejo de Cambará do Sul", story: "Cambará é a base perfeita: vilarejo serrano com lareiras crepitando, fondues, vinhos da serra gaúcha e queijos artesanais. As pousadas têm aquela hospitalidade gaúcha quente, e em noites de inverno é comum geada cobrir os campos — uma raridade no Brasil que vale a viagem." },
      { title: "Trilha do Rio do Boi (no fundo do cânion)", story: "Caminhar pelo leito do Rio do Boi, com paredões de 700 metros se erguendo dos dois lados, é entrar em uma catedral natural. A trilha exige guia, atravessa o rio várias vezes e leva a poços de água gelada cristalina — uma das aventuras mais visceralmente bonitas do Brasil." }
    ],
    beyondUsual: [
      "Saída fotográfica ao amanhecer no Fortaleza, quando a névoa se levanta dos paredões.",
      "Visita a produtores de vinho e queijo da serra gaúcha com curadoria.",
      "Caminhada interpretativa com guia naturalista pelos campos de cima da serra."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Abril–junho e setembro–novembro têm céu mais limpo; inverno (jun–ago) traz drama com névoa e frio." },
      { q: "Quantos dias devo ficar?", a: "3 a 5 noites para conhecer os principais cânions com calma." },
      { q: "Como chegar?", a: "Voo até Porto Alegre ou Caxias do Sul e transfer terrestre até Cambará do Sul." },
      { q: "É bom para crianças?", a: "Sim, com trilhas selecionadas conforme idade." },
      { q: "Dá para combinar com a Serra Gaúcha?", a: "Sim, é um conjugado natural e muito recomendado." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-rota-das-emocoes",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/rota-das-emocoes",
    name: "Rota das Emoções (Jeri, Delta & Lençóis)",
    bestTime: "Jul–Set para lagoas cheias nos Lençóis; Jun–Dez para ventos em Jeri.",
    tags: ["roadtrip", "fotografia", "praia", "remoto", "navegacao", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Lençóis Maranhenses with endless white dunes and turquoise freshwater lagoons at golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Três paisagens brasileiras singulares ligadas por uma rota cênica entre Ceará, Piauí e Maranhão: Jericoacoara com seu vento e dunas, o labiríntico Delta do Parnaíba e os irreais Lençóis Maranhenses. Uma das jornadas mais sensoriais do Brasil.",
    highlights: [
      { title: "Pôr do sol na Duna do Pôr do Sol em Jericoacoara", story: "Toda tarde, uma procissão silenciosa sobe a duna gigante. No topo, dezenas de pessoas se sentam na areia ainda morna, esperando o sol mergulhar no Atlântico em um espetáculo de laranjas e violetas. Quando o último raio desaparece, vem o aplauso coletivo — uma das tradições mais bonitas do litoral brasileiro." },
      { title: "Navegação pelos furos do Delta do Parnaíba", story: "O único delta em mar aberto das Américas é um labirinto de 75 ilhas, mangues densos e canais espelhados onde a luz dourada se reflete na água. Navegar de catamarã ou barco regional, ver guarás-vermelhos voltarem aos ninhos ao entardecer e ouvir o silêncio absoluto do mangue é mágico." },
      { title: "Lagoas Azul e Bonita nos Lençóis Maranhenses", story: "Entre julho e setembro, as dunas brancas guardam centenas de lagoas de água doce em tons impossíveis de turquesa e esmeralda. Caminhar descalço pela areia fina e morna até mergulhar em uma lagoa cercada apenas por dunas é uma das sensações mais purificantes que o Brasil oferece." },
      { title: "Vilarejo de Atins e Caburé", story: "Atins é a porta de entrada dos Lençóis pelo lado mais autêntico — vilarejo de pescadores com ruas de areia, pousadas charmosas e jantares à base de peixes frescos. Caburé, entre o rio e o mar, oferece pôr do sol duplo: o Atlântico de um lado, o Rio Preguiças do outro." },
      { title: "Travessia 4x4 entre as três paisagens", story: "A Rota das Emoções é feita de travessias inesquecíveis: 4x4 cruzando dunas e rios, balsas atravessando o Delta, lanchas singrando o Parnaíba. Cada deslocamento é parte do espetáculo, e a paisagem muda diante dos olhos — do verde do mangue ao ocre das falésias e ao branco absoluto dos Lençóis." }
    ],
    beyondUsual: [
      "Voo panorâmico de teco-teco sobre os Lençóis ao amanhecer.",
      "Pernoite em casa de farol no Delta com astronomia.",
      "Travessia de barco-charter privado pelo Parnaíba com chef a bordo."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Julho a setembro para lagoas cheias nos Lençóis; junho a dezembro para ventos em Jeri." },
      { q: "Quantos dias devo ficar?", a: "10 a 14 noites para fazer a rota completa sem pressa." },
      { q: "Como chegar?", a: "Voo até Fortaleza (entrada) e saída por São Luís — ou o contrário." },
      { q: "É bom para crianças?", a: "Sim, com logística bem estruturada e ritmo ajustado." },
      { q: "Posso fazer só uma parte?", a: "Sim — Lençóis isolado também funciona muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-belem-marajo",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/belem-marajo",
    name: "Belém & Ilha de Marajó",
    bestTime: "Jul–Dez (menos chuva), com clima mais ameno para cidade e ilha.",
    tags: ["cultura", "gastronomia", "navegacao", "fotografia", "conservacao", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Belém Ver-o-Peso market at the Amazon river at golden hour with traditional boats and mangroves of Marajó in the distance, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Belém é a Amazônia urbana em sua forma mais saborosa: mercados centenários, cena gastronômica em ebulição e arquitetura belle époque banhada pelo rio. A poucas horas, a Ilha de Marajó revela búfalos, manguezais e um modo de vida ribeirinho único.",
    highlights: [
      { title: "Mercado Ver-o-Peso ao amanhecer", story: "Quando o sol nasce sobre a Baía do Guajará, o maior mercado a céu aberto da América Latina já fervilha: pescadores descarregam pirarucu, tambaqui e filhote ainda úmidos, erveiras anunciam plantas medicinais com nomes que parecem encantamento — japana, marupazinho, mucuracaá — e o cheiro de tucupi, jambu e açaí fresco preenche o ar. Tomar um caldo de cumaru de pé, no balcão, é ritual de iniciação." },
      { title: "Estação das Docas e cena gastronômica paraense", story: "Antigos galpões portuários viraram um dos polos gastronômicos mais vibrantes do Brasil. Restaurantes como Remanso do Bosque, Lá em Casa e Cozinha das Manas reinventam o tacacá, o pato no tucupi e o filhote na folha de bananeira com técnica contemporânea. Jantar diante do rio, com o som de aparelhagens de carimbó ao fundo, é Amazônia urbana em seu melhor estilo." },
      { title: "Forte do Presépio e Cidade Velha", story: "É no Forte que Belém nasceu em 1616. Caminhar pela Cidade Velha ao entardecer, passando pela Catedral da Sé, Casa das Onze Janelas e ruelas de paralelepípedo, é folhear quatro séculos de história. Os casarões coloniais em tons pastel, mangueiras centenárias e o eco distante do sino da igreja compõem um cenário de tempo suspenso." },
      { title: "Travessia para Marajó e fazendas de búfalo", story: "A maior ilha fluvial-marítima do mundo é território de búfalos — eles são tantos que viraram parte da paisagem, atravessando estradas, banhando-se em igarapés e produzindo um dos melhores queijos do Brasil. Hospedar-se em uma fazenda tradicional, andar a cavalo entre campos alagados e provar o filé de búfalo grelhado é viver a Amazônia mais surpreendente." },
      { title: "Praias de água doce e manguezais", story: "Em Soure e Salvaterra, praias de areia clara são banhadas pelo encontro do rio com o mar — sem ondas, com água morna e jacarés-marrons à distância. Ao entardecer, passeios pelos manguezais revelam guarás-vermelhos voltando aos ninhos em revoadas que tingem o céu — uma das visões mais impactantes da Amazônia." }
    ],
    beyondUsual: [
      "Roteiro gastronômico com chef paraense entre mercados e bistrôs autorais.",
      "Vivência em fazenda de búfalos em Marajó com queijaria artesanal.",
      "Saída de barco ao pôr do sol pela Baía do Guajará com cuias e tucupi."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Julho a dezembro, com menos chuva." },
      { q: "Quantos dias devo ficar?", a: "5 a 7 noites para combinar Belém e Marajó com calma." },
      { q: "Como chegar a Marajó?", a: "Travessia de balsa ou lancha rápida saindo de Belém." },
      { q: "Belém vale a pena pela gastronomia?", a: "Sim — é uma das cidades gastronômicas mais relevantes do Brasil hoje." },
      { q: "Dá para combinar com outros destinos amazônicos?", a: "Sim, conjugados com Alter do Chão funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-salvador",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/salvador",
    name: "Salvador",
    bestTime: "Set–Mar para sol e praia; o ano todo para cultura e gastronomia.",
    tags: ["cultura", "gastronomia", "fotografia", "praia", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of Salvador Pelourinho with colorful baroque facades in pastel tones at golden hour, ancient cobblestone streets, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Primeira capital do Brasil, Salvador é cultura em estado bruto: arquitetura colonial em tons vibrantes, ritmo afro-brasileiro pulsando nas ruas e uma das culinárias mais ricas do país. Cidade de camadas históricas e energia única.",
    highlights: [
      { title: "Pelourinho e Centro Histórico (Patrimônio UNESCO)", story: "Subir a ladeira do Pelourinho ao entardecer é caminhar por uma aquarela viva: casarões em ocre, lilás, turquesa e amarelo-ovo se inclinam sobre ruas de pedra, janelas se abrem com cortinas balançando, e a qualquer esquina pode surgir uma roda de samba ou um cortejo de bloco afro. O som dos tambores ecoa pelas paredes e parece sair do próprio chão." },
      { title: "Igreja e Convento de São Francisco", story: "Por fora, fachada barroca discreta. Por dentro, uma explosão de quase uma tonelada de ouro cobrindo cada centímetro: altares, anjos, colunas torcidas, tetos esculpidos. Uma das obras-primas do barroco mundial — entrar é experimentar um silêncio reverencial diante de tanto excesso transformado em devoção." },
      { title: "Elevador Lacerda e Mercado Modelo", story: "Construído em 1873, o Elevador Lacerda liga a Cidade Alta à Cidade Baixa em 30 segundos, com vista panorâmica para a Baía de Todos-os-Santos. Lá embaixo, o Mercado Modelo oferece artesanato baiano, instrumentos de capoeira, biojoias e o melhor acarajé na mão da Dinha — uma imersão sensorial completa." },
      { title: "Igreja do Senhor do Bonfim", story: "Subir a colina sagrada do Bonfim, amarrar a fitinha colorida com três nós e três pedidos, e entrar na Sala dos Milagres — com centenas de fotos, próteses e cartas de gratidão — é vivenciar o sincretismo afro-católico que faz Salvador única. Devoção pulsante, pé descalço e fé visível por todos os cantos." },
      { title: "Praias da Barra, Itapuã e Stella Maris", story: "Da Praia do Porto da Barra — eleita uma das melhores do mundo pelo The Guardian — até Stella Maris, Salvador tem 50 km de praias com piscinas naturais, coqueirais, barracas que servem moqueca e cerveja gelada. Ver o sol mergulhar atrás do Farol da Barra, com o céu tingido de laranja, é despedida obrigatória do dia." }
    ],
    beyondUsual: [
      "Roda de capoeira angola privada com mestre tradicional.",
      "Aula de cozinha baiana com chef em terreiro contemporâneo.",
      "Visita curada a ateliês de artistas afro-brasileiros no Pelourinho."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Setembro a março para sol e praia; o ano todo para cultura." },
      { q: "Quantos dias devo ficar?", a: "4 a 5 noites para Salvador; 7 a 10 se combinar com litoral baiano." },
      { q: "Onde se hospedar?", a: "Pelourinho para imersão histórica; Barra ou Rio Vermelho para praia e gastronomia." },
      { q: "É bom para famílias?", a: "Sim, com roteiro bem desenhado e atividades selecionadas." },
      { q: "Dá para combinar com Boipeba ou Marau?", a: "Sim, é um conjugado natural e muito recomendado." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-boipeba",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/boipeba",
    name: "Ilha de Boipeba",
    bestTime: "Set–Mar, com sol, mar calmo e visibilidade ideal para snorkel nas piscinas naturais.",
    tags: ["praia", "lua-de-mel", "bem-estar", "remoto", "mergulho", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Boipeba Island Bahia with deserted white sand beach, turquoise sea and coral reef tidal pools, coconut palms, golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Ilha sem carros, sem multidão e com algumas das praias mais preservadas do Brasil. Boipeba é o refúgio baiano para quem busca lentidão, mar calmo e a sofisticação do simples — pés na areia, peixe fresco e silêncio.",
    highlights: [
      { title: "Praia de Moreré e suas piscinas naturais", story: "Na maré baixa, o oceano recua e revela piscinas de coral com água cristalina e morna, onde peixes coloridos se aproximam sem medo. Um quiosque rústico serve moqueca de peixe à beira-mar, redes balançam entre coqueiros, e o tempo desaparece — Moreré é definição perfeita do paraíso baiano." },
      { title: "Praia da Cueira e Tassimirim", story: "Areia branca compactada perfeita para caminhadas, coqueirais inclinados sobre o mar e quase nenhuma construção à vista. Em Cueira e Tassimirim, é possível andar quilômetros sem cruzar com alguém — apenas o som das ondas, o vento nas palmeiras e a sensação rara de estar em um Brasil que ainda existe." },
      { title: "Travessia a pé pela orla até Cova da Onça", story: "Caminhar pela areia firme da maré baixa por mais de 8 km, atravessando rios que desaguam no mar, vendo carangueijos correrem laterais e pescadores puxando redes, é uma das caminhadas mais bonitas do litoral brasileiro. Em Cova da Onça, o almoço com peixe na brasa é a recompensa perfeita." },
      { title: "Pôr do sol no Rio das Garças", story: "Ao entardecer, barcos levam aos manguezais do Rio das Garças, onde guarás-vermelhos voltam aos ninhos em revoadas que tingem as árvores de escarlate. Com um drink na mão e o céu virando rosa, é um dos espetáculos mais cinematográficos da Bahia — silencioso, selvagem, inesquecível." },
      { title: "Snorkel nos recifes de coral", story: "Os recifes de Moreré e Bainema abrigam peixes-borboleta, donzelas, peixes-papagaio e ouriços em águas mornas e calmas. Mesmo iniciantes podem flutuar com máscara e snorkel e mergulhar em um aquário natural — Boipeba é uma das melhores experiências de mergulho livre do nordeste." }
    ],
    beyondUsual: [
      "Charter privado de barco entre praias desertas, com chef e almoço a bordo.",
      "Massagem ao som do mar em deck reservado de pousada-boutique.",
      "Jantar autoral com peixes locais em pé na areia, sob estrelas."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Setembro a março, com sol e mar calmo." },
      { q: "Quantos dias devo ficar?", a: "4 a 6 noites para desacelerar de verdade." },
      { q: "Como chegar?", a: "Voo até Salvador + transfer terrestre + travessia de lancha (ou direto de Salvador por catamarã)." },
      { q: "Tem internet e estrutura?", a: "Sim, com boas pousadas-boutique; mas o charme está justamente em desconectar." },
      { q: "Dá para combinar com Marau ou Salvador?", a: "Sim, é um dos melhores conjugados do litoral baiano." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-marau",
    continent: "Brasil",
    country: "Brasil",
    region: "Nordeste",
    slug: "brasil/nordeste/marau",
    name: "Península de Maraú",
    bestTime: "Set–Mar, com sol pleno, mar calmo e dias longos.",
    tags: ["praia", "lua-de-mel", "bem-estar", "remoto", "mergulho", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Península de Maraú Bahia with deserted white sand beach, coconut palms, mangroves and Taipus de Fora natural pool reef, golden hour, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Faixa de terra entre o Atlântico e a Baía de Camamu, Maraú reúne algumas das praias mais sofisticadas do Nordeste brasileiro — areia branca, manguezais e piscinas naturais formadas por recifes. Um refúgio para descanso de alto padrão.",
    highlights: [
      { title: "Praia de Taipus de Fora e suas piscinas naturais", story: "Considerada uma das praias mais bonitas do Brasil: areia branca finíssima, coqueirais densos e, na maré baixa, piscinas naturais de coral com águas cor de aquamarine. Flutuar entre peixes coloridos, com o sol filtrando pela água translúcida, é experiência hipnótica — Taipus é razão suficiente para vir a Maraú." },
      { title: "Praia do Cassange e Algodões", story: "Cassange tem 14 km de areia branca quase deserta, falésias avermelhadas e a Lagoa do Cassange (água doce) a poucos metros do mar — combinação rara no mundo. Algodões, ao lado, oferece pousadas-boutique sofisticadas com pé na areia, deck sobre o mar e jantares à luz de velas." },
      { title: "Barra Grande e seu pôr do sol", story: "Vila de pescadores que virou refúgio sofisticado mantendo o charme rústico — ruas de areia, casas baixas, gente cumprimentando na rua. Ao entardecer, todos se reúnem no píer para ver o sol se pôr atrás da Ilha de Tinharé, com drinks de cajá e o som dos barcos balançando." },
      { title: "Travessia pela Baía de Camamu", story: "A terceira maior baía do Brasil é um labirinto de ilhas, manguezais e águas calmas onde golfinhos cruzam o caminho do barco. Em escunas ou lanchas privativas, é possível parar em ilhas desertas, banhar em fontes de água doce e almoçar peixe fresco em pousadas-restaurante isoladas — dia inteiro em paraíso navegável." },
      { title: "Trilhas costeiras e mangues", story: "Caminhar entre coqueirais até praias secretas como Saquaíra e Bombaça, ou explorar os manguezais de canoa nos rios que cortam a península, revela uma Maraú mais selvagem — guarás-vermelhos ao entardecer, raízes aéreas formando catedrais verdes, silêncio interrompido apenas pelo som da maré." }
    ],
    beyondUsual: [
      "Charter privado pela Baía de Camamu com paradas em ilhas desertas.",
      "Aula de stand-up paddle ao amanhecer em águas calmas.",
      "Jantar de frutos do mar à beira-mar com chef autoral."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Setembro a março, com sol pleno e mar calmo." },
      { q: "Quantos dias devo ficar?", a: "5 a 7 noites para curtir sem pressa." },
      { q: "Como chegar?", a: "Voo até Salvador + transfer terrestre + travessia, ou voo direto a Ilhéus + transfer terrestre." },
      { q: "Maraú ou Boipeba?", a: "Maraú tem mais infraestrutura de pousadas-boutique; Boipeba é mais rústica e isolada." },
      { q: "É bom para famílias?", a: "Sim, com mar calmo e atividades para todas as idades." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== LITORAIS BRASILEIROS (curadoria por estado) =====
  {
    id: "brasil-litoral-alagoano",
    continent: "Brasil",
    country: "Brasil",
    region: "Alagoas",
    slug: "brasil/litoral-alagoano",
    name: "Litoral Alagoano",
    bestTime: "Set–Mar (mar mais calmo e visibilidade nas piscinas naturais).",
    tags: ["praia", "mergulho", "lua-de-mel", "familia", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of Maragogi natural pools in Alagoas, Brazil, turquoise sea, white sand, coconut trees, no people.",
    imageOverrideUrl: "",
    intro: "Águas tranquilas, piscinas naturais e pequenas vilas litorâneas: o Litoral Alagoano é o Caribe brasileiro em sua versão mais sofisticada e silenciosa.",
    highlights: [
      { title: "Maragogi e as Galés — piscinas naturais a 6 km da costa", story: "Catamarãs levam até as Galés, formações coralíneas em mar aberto onde a água tem 1,5m de profundidade e visibilidade infinita. Saltar com snorkel e ver peixes-papagaio, donzelas e ouriços em águas color aquamarine, a quilômetros da costa, com apenas o azul ao redor, é uma das experiências mais surreais do nordeste brasileiro." },
      { title: "São Miguel dos Milagres e a Rota Ecológica", story: "Os 28 km da Rota Ecológica concentram pousadas-boutique de altíssimo nível pé na areia — sem cadeia hoteleira, sem barulho, sem multidão. Areia clara, mar verde-jade calmo, peixes-boi em projeto de preservação e jantares autorais à luz de velas. É o nordeste mais sofisticado e silencioso do Brasil." },
      { title: "Praia do Patacho e Lagoa Azeda", story: "Patacho tem 4 km de areia branca, coqueirais cerrados e quase nenhuma construção — apenas pousadas escondidas na mata. A Lagoa Azeda, formada pelo encontro do rio com o mar, tem águas mornas em tons de verde-esmeralda perfeitas para boiar. Combinação de praia e lagoa rara no litoral brasileiro." },
      { title: "Praia do Gunga e falésias coloridas", story: "Falésias listradas em tons de ocre, vermelho e branco descem dramaticamente até um mar transparente onde o rio Roteiro encontra o oceano. Subir o mirante para a vista panorâmica é parada obrigatória — e descer para passear de jangada entre coqueirais é completar o quadro de paraíso." },
      { title: "Maceió, Pajuçara e jangadas para as piscinas naturais", story: "Da praia urbana de Pajuçara, jangadas coloridas levam a 2 km da costa onde, na maré baixa, surgem piscinas naturais de água cristalina. Saltar do barco, ver cardumes circulando os pés e tomar uma cerveja com o som do violão do jangadeiro é um dos rituais mais charmosos de Maceió." }
    ],
    beyondUsual: [
      "Pousadas-boutique pé na areia na Rota Ecológica.",
      "Saídas privativas para piscinas naturais antes da multidão.",
      "Jantares em casas de praia com chefs locais."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "São Miguel dos Milagres para sofisticação; Maragogi para acesso às Galés; Maceió para infraestrutura urbana." },
      { q: "Quando o mar fica mais calmo?", a: "Entre setembro e março, com melhor visibilidade nas piscinas naturais." },
      { q: "É bom para lua de mel?", a: "Sim, especialmente a Rota Ecológica dos Milagres." },
      { q: "Dá para combinar com Pernambuco?", a: "Sim, Porto de Galinhas e Recife são vizinhos." },
      { q: "Quantos dias?", a: "5 a 7 noites permitem combinar 2 bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-pernambucano",
    continent: "Brasil",
    country: "Brasil",
    region: "Pernambuco",
    slug: "brasil/litoral-pernambucano",
    name: "Litoral Pernambucano",
    bestTime: "Set–Mar (menos chuva, mar calmo e melhor visibilidade).",
    tags: ["praia", "mergulho", "cultura", "lua-de-mel", "familia"],
    imageAiPrompt: "Ultra realistic aerial photo of Porto de Galinhas natural pools with jangadas, Pernambuco, turquoise water, no people.",
    imageOverrideUrl: "",
    intro: "De Porto de Galinhas a Tamandaré, o litoral de Pernambuco combina mar transparente, piscinas naturais, jangadas e vilas charmosas — com curadoria que foge do óbvio.",
    highlights: [
      { title: "Porto de Galinhas e suas piscinas naturais", story: "Na maré baixa, jangadas coloridas levam até as piscinas naturais formadas pelos arrecifes a 100m da costa. Água cristalina, peixinhos circulando os tornozelos e o jangadeiro contando histórias do mar — um dos cartões-postais mais democráticos e charmosos do nordeste brasileiro." },
      { title: "Praia dos Carneiros e a capela à beira-mar", story: "A icônica Capelinha de São Benedito ergue-se sobre a areia, com coqueirais inclinados e mar verde-jade ao fundo — uma das imagens mais fotografadas do Brasil. Catamarãs passam o dia ancorados em águas mornas e rasas, com bares flutuantes, peixe na brasa e sensação de paraíso desenhado." },
      { title: "Tamandaré e Praia do Cupe", story: "Tamandaré tem mar tranquilo e fortaleza histórica de Santo Inácio com vista panorâmica. O Cupe, com seus 7 km de areia clara e palmeiras, abriga resorts elegantes e pousadas-boutique — refúgio sofisticado para quem busca conforto com mar bonito ao lado." },
      { title: "Maracaípe — surfe e 'pôr do sol do rio'", story: "Pôr do sol no encontro do Rio Maracaípe com o mar é tradição: jangadeiros levam ao banco de areia onde se senta com pés na água doce-salgada vendo o sol mergulhar atrás dos manguezais. Crianças, cavalos, drinks de coco e o céu virando fogo — um dos finais de tarde mais bonitos de Pernambuco." },
      { title: "Recife Antigo e Olinda como complemento cultural", story: "Recife Antigo recuperou casarões coloridos e ganhou bares de coquetelaria, livrarias e cena artística vibrante. Olinda, a poucos minutos, é Patrimônio UNESCO: ladeiras com igrejas barrocas, ateliês, frevo nas esquinas e mirantes para o mar. Cultura pernambucana em estado puro." }
    ],
    beyondUsual: [
      "Pousadas-boutique em Serrambi e Carneiros.",
      "Passeios de catamarã privativo em Carneiros ao entardecer.",
      "Rota gastronômica em Olinda e Recife."
    ],
    stays: [],
    faq: [
      { q: "Carneiros ou Porto de Galinhas?", a: "Carneiros é mais bucólica; Porto tem mais infraestrutura." },
      { q: "Qual a melhor época?", a: "Setembro a março, com mar mais calmo." },
      { q: "Dá para combinar com Fernando de Noronha?", a: "Sim, voos diretos do Recife." },
      { q: "É bom para famílias?", a: "Sim, mar calmo e atividades leves." },
      { q: "Quantos dias?", a: "5 a 7 noites permitem combinar praia + Recife/Olinda." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-baiano",
    continent: "Brasil",
    country: "Brasil",
    region: "Bahia",
    slug: "brasil/litoral-baiano",
    name: "Litoral Baiano",
    bestTime: "Set–Mar para sol; Abr–Ago tem clima mais ameno e baixa temporada elegante.",
    tags: ["praia", "cultura", "gastronomia", "lua-de-mel", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of the Bahia coastline, Brazil, deep blue sea, palm trees, Atlantic forest, no people.",
    imageOverrideUrl: "",
    intro: "Mais de 1.000 km de costa: do norte sofisticado da Praia do Forte ao sul rústico de Trancoso, passando por Itacaré, Maraú e Boipeba. A Bahia tem praia para todo tipo de viajante.",
    highlights: [
      { title: "Praia do Forte e Costa do Sauípe — resorts e Projeto Tamar", story: "Vila charmosa de ruas de pedra, com a sede do Projeto Tamar onde se vê tartarugas marinhas em tanques de pesquisa e, na temporada, desovas na praia. Resorts pé na areia oferecem conforto familiar de alto padrão, e o Castelo Garcia D'Ávila, mais antiga construção militar das Américas, remete ao século XVI." },
      { title: "Itacaré — surfe, cachoeiras e Mata Atlântica", story: "Praias selvagens cercadas por mata densa — Engenhoca, Havaizinho, Itacarezinho — com ondas perfeitas para surfe e trilhas curtas que terminam em areia branca. À noite, a Rua Pedro Longo vira polo gastronômico vibrante, com restaurantes autorais, música ao vivo e energia jovem e cosmopolita." },
      { title: "Península de Maraú — Barra Grande e Taipus de Fora", story: "Vila de pescadores virada destino sofisticado mantendo o charme rústico. Taipus de Fora forma piscinas naturais de coral consideradas das mais bonitas do Brasil. Pousadas-boutique pé na areia, jantares à luz de velas e isolamento elegante — o melhor de Maraú é o tempo desacelerado." },
      { title: "Boipeba — vila isolada e mar transparente", story: "Sem carros, sem estrada asfaltada, com mar transparente e praias quase desertas. Boipeba é a Bahia que ainda existe: ruas de areia, pescadores na rede, peixe fresco na brasa e silêncio. Para quem quer desconectar de verdade, sem abrir mão de pousadas-boutique de altíssimo nível." },
      { title: "Trancoso, Caraíva e Espelho — sul da Bahia atemporal", story: "Trancoso e seu Quadrado em estilo colonial guardam restaurantes premiados e lojas de design autoral. Espelho tem 5 km de areia branca com piscinas naturais ao entardecer. Caraíva, sem energia elétrica nas ruas, mantém o ritmo de vila pesqueira — três tempos diferentes em 30 km de costa." },
      { title: "Morro de São Paulo — base clássica para 1ª viagem", story: "Sem carros, com 4 praias numeradas que vão da animada à isolada, Morro reúne pousadas-boutique, escolas de mergulho, vida noturna na 2ª praia e piscinas naturais na 3ª e 4ª. Porta de entrada perfeita para quem visita o litoral baiano pela primeira vez e quer combinar conforto, charme e diversão." }
    ],
    beyondUsual: [
      "Casas privativas em Trancoso e Espelho com chef à disposição.",
      "Travessias de barco entre Boipeba e Morro de São Paulo.",
      "Jantares à beira-mar em Caraíva sem energia elétrica."
    ],
    stays: [],
    faq: [
      { q: "Qual região escolher?", a: "Norte (Praia do Forte) para resorts; Itacaré para natureza ativa; Maraú/Boipeba para isolamento; Trancoso/Caraíva para charme atemporal." },
      { q: "Quando ir?", a: "Setembro a março para sol firme; abril a agosto para baixa temporada elegante." },
      { q: "Dá para combinar várias bases?", a: "Sim, é o ideal — recomendamos 2 ou 3 bases distintas." },
      { q: "É bom para lua de mel?", a: "Excelente, especialmente Trancoso, Espelho e Maraú." },
      { q: "Quantos dias?", a: "7 a 12 noites para combinar mais de uma base." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-cearense",
    continent: "Brasil",
    country: "Brasil",
    region: "Ceará",
    slug: "brasil/litoral-cearense",
    name: "Litoral Cearense",
    bestTime: "Jul–Fev (sol firme e ventos para kite); Mar–Jun tem chuvas mais frequentes.",
    tags: ["praia", "kitesurf", "fotografia", "lua-de-mel", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Jericoacoara coast in Ceará, dunes, sunset, lone palm tree, no people.",
    imageOverrideUrl: "",
    intro: "Dunas que invadem o mar, lagoas azuis e vilas de pescadores. O Ceará tem o litoral mais cinematográfico do Brasil — e a curadoria certa transforma a viagem.",
    highlights: [
      { title: "Jericoacoara — pôr do sol na duna e Pedra Furada", story: "Toda tarde, uma procissão silenciosa sobe a duna gigante para ver o sol mergulhar no Atlântico em um espetáculo de laranjas e violetas. A Pedra Furada, monumento natural esculpido pelo mar, vira moldura perfeita para fotos ao amanhecer. Jeri é cinematográfico em cada esquina." },
      { title: "Lagoa do Paraíso e Lagoa Azul", story: "Águas mornas, transparentes e tão calmas que parecem espelhos. Redes amarradas dentro d'água, tábuas de madeira e barzinhos rústicos onde se passa a tarde inteira boiando, lendo e tomando água de coco. Lentidão organizada — uma das melhores invenções do litoral cearense." },
      { title: "Atins, Caburé e o 'Litoral Pequenos Lençóis' (transição com MA)", story: "Saindo de Jeri rumo ao oeste, começam dunas e lagoas que prenunciam os Lençóis Maranhenses. Atins é vilarejo de pescadores com pousadas charmosas, kitesurf em águas planas e acesso direto às lagoas do Lençóis. Caburé, no encontro do Rio Preguiças com o mar, oferece pôr do sol duplo." },
      { title: "Praia de Tatajuba e Guriú", story: "A leste de Jeri, dunas avançam sobre o mar formando paisagens lunares. A Lagoa da Torta tem rede dentro d'água e tirolesa, e o vilarejo de Guriú, atravessado pelo Rio Guriú, é refúgio rústico com cavalos-marinhos no manguezal e pôr do sol entre coqueiros e barcos." },
      { title: "Canoa Quebrada, falésias e dunas coloridas", story: "Falésias vermelhas e ocre se erguem dramaticamente sobre o mar verde, e a Broadway concentra restaurantes, bares e lojas em ruas de areia. Passeios de buggy revelam o Labirinto das Falésias, dunas onde se desce de skibunda e mirantes com vista para as escarpas mais cinematográficas do Ceará." },
      { title: "Cumbuco — kitesurf e dunas", story: "A 30 minutos de Fortaleza, Cumbuco virou meca mundial do kitesurf — ventos constantes, lagoas planas como espelhos e escolas de altíssimo nível. Buggy nas dunas, descidas em skibunda na Duna do Banana e o caju maduro vendido por crianças nas estradas completam a experiência." }
    ],
    beyondUsual: [
      "Pousadas-boutique pé na areia em Jericoacoara.",
      "Travessia 4x4 Jeri → Atins → Lençóis Maranhenses.",
      "Saídas de buggy privativo em horários sem fluxo."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "Jericoacoara concentra o melhor; complemente com Canoa Quebrada ou Atins." },
      { q: "Quando ir para kitesurf?", a: "Julho a janeiro tem vento constante." },
      { q: "Dá para combinar com Lençóis Maranhenses?", a: "Sim, pela Rota das Emoções (4x4)." },
      { q: "É bom para famílias?", a: "Sim, com bases certas — Jeri pode ser mais animada à noite." },
      { q: "Quantos dias?", a: "5 a 8 noites, dependendo das bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-rio-grande-do-norte",
    continent: "Brasil",
    country: "Brasil",
    region: "Rio Grande do Norte",
    slug: "brasil/litoral-rio-grande-do-norte",
    name: "Litoral do Rio Grande do Norte",
    bestTime: "Set–Mar (sol firme, mar calmo); Abr–Ago pode ter chuvas pontuais.",
    tags: ["praia", "lua-de-mel", "kitesurf", "familia", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of Pipa beach in Rio Grande do Norte, red cliffs, turquoise sea, no people.",
    imageOverrideUrl: "",
    intro: "Falésias avermelhadas, mar verde-azulado e ventos constantes. O litoral potiguar reúne charme bucólico (Pipa) e natureza dramática (Maracajaú, Galinhos).",
    highlights: [
      { title: "Pipa — falésias, Baía dos Golfinhos e vida boêmia", story: "Falésias avermelhadas se erguem sobre praias quase desertas, e na Baía dos Golfinhos é comum ver, do alto, dezenas de golfinhos brincando nas ondas próximas à costa. À noite, a Avenida Baía dos Golfinhos vira polo gastronômico vibrante — restaurantes autorais, drinks de frutas tropicais e ambiente cosmopolita." },
      { title: "Praia do Madeiro e Chapadão", story: "Madeiro é meia-lua de areia clara abraçada por falésias verdes, com mar calmo perfeito para surf iniciante e SUP. O Chapadão, mirante natural no topo das falésias, oferece uma das vistas mais cinematográficas do litoral brasileiro — especialmente ao entardecer, com o sol tingindo as escarpas de cobre." },
      { title: "Maracajaú — parrachos e mergulho", story: "Catamarãs levam até os parrachos a 7 km da costa: formações coralíneas em mar aberto onde se mergulha com snorkel ou cilindro entre peixes coloridos, raias e até pequenos tubarões inofensivos. Visibilidade excepcional — é o 'Caribe potiguar' em sua versão mais autêntica." },
      { title: "Galinhos — vila isolada com travessia de barco", story: "Pequena península sem carros, acessível apenas de barco, onde se anda de charrete pelas ruas de areia. Salinas tingem a paisagem de rosa e branco, dunas se estendem até o horizonte, e o silêncio é absoluto. Refúgio para quem quer desaparecer do mundo por alguns dias." },
      { title: "São Miguel do Gostoso — kitesurf e vento constante", story: "Vilarejo de pescadores virado destino de kitesurfistas do mundo inteiro — vento constante de 25 nós entre julho e janeiro, águas planas e pousadas charmosas. Atmosfera relaxada, cosmopolita e ainda preservada, com pôr do sol espetacular no Cajueiro." },
      { title: "Natal e Genipabu — buggy nas dunas", story: "Em Genipabu, dunas vivas mudam de forma com o vento, e os bugueiros oferecem 'emoção, por favor!' — descidas em queda livre na areia, travessias de lagoas com buggy boiando e descida de esquibunda em encostas íngremes. Adrenalina pura, com o mar de fundo cinematográfico." }
    ],
    beyondUsual: [
      "Pousadas-boutique no alto das falésias em Pipa.",
      "Passeios privativos a Galinhos para um dia sem turistas.",
      "Mergulho com guia certificado nos parrachos de Maracajaú."
    ],
    stays: [],
    faq: [
      { q: "Pipa ou São Miguel do Gostoso?", a: "Pipa para charme/vida noturna; Gostoso para vento e silêncio." },
      { q: "Qual a melhor época?", a: "Setembro a março para sol firme." },
      { q: "Dá para combinar com Ceará?", a: "Sim, voos curtos e estradas conectadas." },
      { q: "É bom para lua de mel?", a: "Sim, Pipa e seu entorno têm pousadas românticas." },
      { q: "Quantos dias?", a: "5 a 7 noites com 1 ou 2 bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-paraibano",
    continent: "Brasil",
    country: "Brasil",
    region: "Paraíba",
    slug: "brasil/litoral-paraibano",
    name: "Litoral Paraibano",
    bestTime: "Set–Mar (sol firme e mar calmo).",
    tags: ["praia", "natureza", "lua-de-mel", "familia", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Coqueirinho beach in Paraíba, red cliffs, palm trees, turquoise sea, no people.",
    imageOverrideUrl: "",
    intro: "Pequeno, charmoso e ainda pouco conhecido. O litoral paraibano combina o Ponto Mais Oriental das Américas, falésias coloridas e vilas tranquilas.",
    highlights: [
      { title: "Praia do Coqueirinho — falésias multicoloridas", story: "Falésias listradas em vermelho, ocre, branco e amarelo descem sobre uma praia de areia clara e mar verde-jade. Cavernas naturais escavadas pelo mar, coqueirais inclinados e quase nenhuma estrutura — Coqueirinho é uma das praias mais belas e ainda pouco descobertas do nordeste brasileiro." },
      { title: "Tambaba — primeira praia naturista oficial do Brasil", story: "Enseada protegida por falésias, com mar calmo e área dividida entre praia tradicional e zona naturista. A natureza preservada, o silêncio e o ambiente respeitoso fazem de Tambaba uma curiosidade cultural única no litoral brasileiro — visitar é experimentar uma praia onde o tempo parou em outra dimensão." },
      { title: "Praia de Tabatinga e os mirantes", story: "Falésias vermelhas avançam sobre o mar formando enseadas dramáticas. Do alto dos mirantes, é comum avistar golfinhos cruzando as ondas próximos à costa e tartarugas nadando em águas cristalinas. Caminhar pelas falésias ao entardecer, com o céu tingindo o paredão de fogo, é momento inesquecível." },
      { title: "João Pessoa, Tambaú e o Pôr do Sol no Jacaré", story: "Toda tarde, no Rio Paraíba, um saxofonista toca o Bolero de Ravel em um barco enquanto o sol mergulha no horizonte. Centenas de pessoas se reúnem em barcos e na margem para o ritual mais charmoso de João Pessoa — música, céu rosa e sensação de pertencimento coletivo." },
      { title: "Ponta do Seixas — ponto mais oriental das Américas", story: "É aqui que o sol nasce primeiro nas Américas. Um marco geográfico, um farol e a sensação simbólica de estar no extremo leste de um continente inteiro. Ao amanhecer, ver os primeiros raios tocarem a terra com o oceano Atlântico se abrindo à frente é experiência de profundidade rara." },
      { title: "Areia Vermelha — banco de areia em alto-mar", story: "Na maré baixa, um banco de areia surge a 3 km da costa em meio ao mar verde-azulado. Catamarãs levam dezenas de pessoas que passam o dia em piscinas naturais cristalinas, com música, drinks e a sensação surreal de estar em uma 'ilha' que aparece e desaparece com a maré." }
    ],
    beyondUsual: [
      "Pousadas-boutique no Conde, fora do circuito de massa.",
      "Saídas de catamarã privativo a Areia Vermelha.",
      "Roteiros gastronômicos em João Pessoa."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "Conde (litoral sul) para charme e Coqueirinho; João Pessoa para infraestrutura." },
      { q: "É bom para famílias?", a: "Sim, com mar calmo na maior parte do litoral." },
      { q: "Dá para combinar com Pernambuco e RN?", a: "Sim, distâncias curtas por estrada." },
      { q: "Quando ir?", a: "Setembro a março para sol firme." },
      { q: "Quantos dias?", a: "4 a 6 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-santa-catarina",
    continent: "Brasil",
    country: "Brasil",
    region: "Santa Catarina",
    slug: "brasil/litoral-santa-catarina",
    name: "Litoral de Santa Catarina",
    bestTime: "Dez–Mar (alta temporada, calor); Out–Nov e Abr–Mai com clima ameno e menos gente.",
    tags: ["praia", "surfe", "bem-estar", "gastronomia", "natureza"],
    imageAiPrompt: "Ultra realistic aerial photo of Praia do Rosa in Santa Catarina, crescent bay, green hills, Atlantic forest, no people.",
    imageOverrideUrl: "",
    intro: "Mata Atlântica encontrando o mar, baías em forma de meia-lua e gastronomia de origem açoriana. Um litoral mais frio, mais verde e cheio de personalidade.",
    highlights: [
      { title: "Praia do Rosa — baía cinematográfica e baleias-franca (jul–nov)", story: "Considerada uma das praias mais bonitas do Brasil pela revista Travel + Leisure: meia-lua de areia clara abraçada por morros cobertos de mata atlântica, com pousadas charmosas escondidas no alto. Entre julho e novembro, baleias-franca-austral vêm parir junto à costa e podem ser vistas saltando da areia mesmo — espetáculo raro e profundamente emocionante." },
      { title: "Florianópolis — Lagoinha do Leste, Joaquina e Mole", story: "A Lagoinha do Leste exige trilha de 1h30 e recompensa com uma das praias mais selvagens do sul do Brasil. A Joaquina é palco dos campeonatos de surfe e tem dunas onde se desce de sandboard. A Praia Mole reúne a galera jovem em barracas com música ao vivo até o sol se pôr atrás dos morros." },
      { title: "Bombinhas e a Reserva Biológica do Arvoredo", story: "Águas das mais transparentes do litoral sul brasileiro — Bombinhas tem praias pequenas em formato de enseada com mar verde-jade e mergulho com snorkel acessível. O Arvoredo, a 11 milhas da costa, é santuário marinho com visibilidade de 20m e mergulho cilindro entre cardumes, raias e tartarugas." },
      { title: "Garopaba e Silveira para surfe", story: "Praias para surfistas de todos os níveis, com ondas constantes e escolas de altíssimo nível. Garopaba mantém charme de vila pesqueira açoriana, com pousadas-boutique sustentáveis e cena vegetariana inesperada. A Silveira é point de surfistas profissionais — assistir a uma sessão ao amanhecer é puro espetáculo." },
      { title: "Guarda do Embaú — Vila e rio que encontra o mar", story: "Para chegar à praia atravessa-se o Rio da Madre em uma canoa puxada por corda — ritual charmoso que filtra a multidão. Do outro lado, areia branca, ondas perfeitas e quase nenhuma construção. Surfistas, hippies modernos e vegetarianos compõem a tribo local em um dos pedaços mais autênticos do litoral catarinense." },
      { title: "Praia do Forte e Jurerê Internacional para sofisticação", story: "Jurerê Internacional é o pedaço mais sofisticado de Floripa — beach clubs de altíssimo padrão, pôr do sol com champagne e música eletrônica, restaurantes premiados e clima cosmopolita. Praia do Forte, com sua fortaleza histórica de São José da Ponta Grossa, oferece mar calmo perfeito para famílias." }
    ],
    beyondUsual: [
      "Avistamento de baleias-franca-austral em Imbituba (jul–nov).",
      "Pousadas-boutique nos morros do Rosa com vista da baía.",
      "Rota gastronômica de ostras em Floripa."
    ],
    stays: [],
    faq: [
      { q: "Rosa ou Floripa?", a: "Rosa é mais charmosa e bucólica; Floripa tem mais variedade de praias e infraestrutura." },
      { q: "Quando ver baleias?", a: "Entre julho e novembro, em Imbituba/Rosa." },
      { q: "Quando ir para sol e mar?", a: "Dezembro a março, mas chove eventualmente." },
      { q: "É bom para famílias?", a: "Sim, com praias calmas no norte da ilha." },
      { q: "Quantos dias?", a: "5 a 8 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-rio-de-janeiro",
    continent: "Brasil",
    country: "Brasil",
    region: "Rio de Janeiro",
    slug: "brasil/litoral-rio-de-janeiro",
    name: "Litoral do Rio de Janeiro",
    bestTime: "Dez–Mar para sol e mar; Abr–Set ameno, com Búzios e Paraty agradáveis o ano todo.",
    tags: ["praia", "navegacao", "lua-de-mel", "gastronomia", "cultura"],
    imageAiPrompt: "Ultra realistic aerial photo of Angra dos Reis tropical islands and turquoise sea in Rio de Janeiro, sailboats, no people.",
    imageOverrideUrl: "",
    intro: "Da Costa Verde à Região dos Lagos: o estado do Rio tem 600 km de costa, com ilhas, vilas coloniais, praias paradisíacas e sofisticação à beira-mar.",
    highlights: [
      { title: "Búzios — praias e vida boêmia internacional", story: "Descoberta por Brigitte Bardot nos anos 60, Búzios mantém o charme cosmopolita das ruas de pedra, mas sua alma está nas 23 praias — Geribá para juventude e ondas, Ferradura para mar calmo e família, João Fernandes para piscinas naturais e Azeda para refúgio íntimo. À noite, a Rua das Pedras vira cenário de jantares à luz de velas e pôr do sol no Mirante." },
      { title: "Arraial do Cabo — 'Caribe brasileiro' e mar transparente", story: "A Praia do Farol — só acessível de barco — tem areia tão branca que parece talco e água com visibilidade de 20 metros. Saltar do escuna em meio à enseada, ver tartarugas e cardumes a olho nu e almoçar peixe na brasa em barracas rústicas é viver o Caribe sem sair do Sudeste brasileiro." },
      { title: "Cabo Frio e Praia do Forte", story: "Areia branca finíssima, mar gelado e cristalino e a Fortaleza de São Mateus do século XVII de frente para o oceano. O Centro Histórico de Cabo Frio guarda o Convento Nossa Senhora dos Anjos e ladeiras coloniais que descem para o canal — combinação rara de história e praia caribenha." },
      { title: "Angra dos Reis — 365 ilhas e Ilha Grande", story: "Uma ilha para cada dia do ano — algumas habitadas, outras desertas, todas cercadas de água verde-azul. Em escunas privativas, passa-se o dia ancorando em piscinas naturais, mergulhando em naufrágios e almoçando em restaurantes ilhados. Na Ilha Grande, sem carros, trilhas de mata atlântica levam a Lopes Mendes — eleita uma das praias mais bonitas do mundo." },
      { title: "Paraty — centro histórico colonial e Saco do Mamanguá", story: "Patrimônio UNESCO, Paraty preserva ruas de pedra do século XVII inundadas pela maré cheia, casarões coloniais em cal e pedra, igrejas barrocas brancas. O Saco do Mamanguá, único fiorde tropical do Brasil, é navegado em barcos para praias desertas cercadas por mata atlântica em paredões verdes." },
      { title: "Trindade — praias selvagens dentro da Mata Atlântica", story: "A 30 minutos de Paraty, Trindade é vilarejo de pescadores com 6 praias de areia clara cercadas por mata densa. A Piscina Natural, formada por blocos de pedra, é um aquário de águas calmas onde se mergulha entre peixes coloridos. Rústica, sem ostentação, autêntica — refúgio para quem busca natureza pura." }
    ],
    beyondUsual: [
      "Veleiros privativos em Angra e Paraty.",
      "Pousadas-boutique em Paraty e na Ilha Grande.",
      "Trilha do Saco do Mamanguá com pernoite em barco."
    ],
    stays: [],
    faq: [
      { q: "Búzios ou Paraty?", a: "Búzios é mais sofisticada/social; Paraty é histórica e cercada de natureza." },
      { q: "Vale combinar com a cidade do Rio?", a: "Sim, é a combinação clássica — cidade + 2 bases litorâneas." },
      { q: "Quando ir?", a: "Dezembro a março para sol; ano inteiro para Búzios e Paraty." },
      { q: "É bom para lua de mel?", a: "Sim, especialmente Angra, Paraty e Búzios." },
      { q: "Quantos dias?", a: "7 a 10 noites com 2 ou 3 bases." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-sao-paulo",
    continent: "Brasil",
    country: "Brasil",
    region: "São Paulo",
    slug: "brasil/litoral-sao-paulo",
    name: "Litoral de São Paulo",
    bestTime: "Dez–Mar para sol firme; Abr–Out com clima mais ameno e menos fluxo.",
    tags: ["praia", "natureza", "surfe", "navegacao", "bem-estar"],
    imageAiPrompt: "Ultra realistic aerial photo of Ilhabela coast in São Paulo, lush Atlantic forest meeting the sea, secluded beach, no people.",
    imageOverrideUrl: "",
    intro: "Do litoral norte com Mata Atlântica selvagem ao sul de pequenas vilas: o litoral paulista esconde praias-cinema a poucas horas da capital.",
    highlights: [
      { title: "Ilhabela — arquipélago com 40+ praias e cachoeiras", story: "85% da ilha é Parque Estadual com Mata Atlântica intocada, cachoeiras escondidas (Toca, Friagem, Gato) e praias selvagens acessíveis apenas de 4x4 ou barco — Bonete, Castelhanos, Saco do Eustáquio. Para os mais sofisticados, as praias do norte (Pinto, Curral, Engenho) oferecem pousadas-boutique pé na areia e cena gastronômica de altíssimo nível." },
      { title: "São Sebastião — Maresias, Camburi e Barra do Una", story: "Maresias tem as ondas mais consistentes do litoral norte e vida noturna jovem e cosmopolita. Camburi e Camburizinho são mais sofisticados, com restaurantes premiados e pousadas-boutique. Barra do Una é refúgio íntimo, onde o rio encontra o mar formando enseada calma — ideal para famílias e SUP." },
      { title: "Ubatuba — Praia do Félix, Lagoinha e Trindade", story: "Mais de 100 praias e a maior concentração de quedas d'água do litoral paulista. Praia do Félix tem coqueirais e mar calmo, Lagoinha é meia-lua perfeita, Trindade (em Paraty) e Picinguaba revelam Mata Atlântica selvagem chegando até o mar — algumas das praias mais cinematográficas do Sudeste." },
      { title: "Paraty Mirim e Picinguaba (Parque Estadual da Serra do Mar)", story: "Entre São Paulo e Rio, a costa entra em zona de Parque Estadual: praias quase desertas, vilas de caiçaras tradicionais, manguezais e cachoeiras escondidas na mata. Picinguaba é uma das vilas mais autênticas do litoral — pescadores, canoas de pau-só, peixe na brasa servido na areia ao pôr do sol." },
      { title: "Juquehy e Barra do Sahy para famílias", story: "Mar calmo, areia firme perfeita para caminhadas, infraestrutura completa de restaurantes e quiosques e atmosfera familiar acolhedora. Juquehy é referência para casais com filhos pequenos no litoral paulista, com pousadas charmosas e o famoso bar/restaurante Marakuthai com gastronomia premiada." },
      { title: "Ilha do Cardoso e Ilha Comprida (litoral sul selvagem)", story: "Patrimônio natural quase desconhecido: a Ilha do Cardoso tem 22.500 hectares de Mata Atlântica preservada, vilas caiçaras tradicionais (Marujá), trilhas para cachoeiras escondidas e praias desertas de areia branca. Refúgio para quem busca um litoral paulista completamente fora do circuito turístico." }
    ],
    beyondUsual: [
      "Casas de praia privativas com chef em Barra do Una.",
      "Travessias de veleiro em Ilhabela.",
      "Trilhas costeiras na Serra do Mar com guia local."
    ],
    stays: [],
    faq: [
      { q: "Ubatuba ou Ilhabela?", a: "Ilhabela é mais sofisticada e contemplativa; Ubatuba tem mais variedade de praias." },
      { q: "Quando ir?", a: "Dezembro a março para sol; abril a outubro para silêncio." },
      { q: "Dá para combinar com o Rio?", a: "Sim, pela estrada costeira até Paraty." },
      { q: "É bom para famílias?", a: "Sim, com bases certas (Juquehy, Barra do Sahy)." },
      { q: "Quantos dias?", a: "4 a 7 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-mantiqueira-paulista",
    continent: "Brasil",
    country: "Brasil",
    region: "São Paulo",
    slug: "brasil/mantiqueira-paulista",
    name: "Mantiqueira Paulista — Campos do Jordão",
    bestTime: "Jun–Ago para inverno e lareira; Set–Nov para flores e clima ameno.",
    tags: ["montanha", "gastronomia", "bem-estar", "roadtrip", "familia"],
    imageAiPrompt: "Ultra realistic photo of Campos do Jordão landscape, Mantiqueira mountains in São Paulo, araucária pine trees, alpine-style chalet, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "A serra paulista por excelência: araucárias centenárias, chalés de pedra, gastronomia de inverno e estradas cênicas a 3h de São Paulo.",
    highlights: [
      { title: "Campos do Jordão — Capivari, Horto Florestal e Pedra do Baú", story: "É o entardecer no Capivari quando o ar fica azul e cheira a lenha queimando nas lareiras das padarias. Você caminha entre chalés enxaimel com fondue na vitrine, sobe ao Horto Florestal para se perder num bosque de araucárias centenárias e termina o dia com chocolate quente artesanal enquanto a serra escurece — a Suíça brasileira não é apelido publicitário, é experiência sensorial." },
      { title: "Santo Antônio do Pinhal — vilarejo bucólico com vista para a serra", story: "A 1.400 m de altitude, a 25 min de Campos, este vilarejo é o segredo dos que querem o frio sem a multidão. Vacas pastando, fazendas de truticultura, ateliês de queijo artesanal, pôr do sol no Pico Agudo com parapente colorindo o céu e jantares íntimos em pousadas de oito quartos. É a Mantiqueira sem filtro de Instagram." },
      { title: "São Bento do Sapucaí — escalada na Pedra do Baú e cachoeiras", story: "A silhueta da Pedra do Baú irrompe do horizonte como um monolito de Patagônia paulista. Aqui se escala via ferrata até o cume com guia, almoça-se pastel de feira numa praça pacata e se descobre cachoeiras escondidas entre bananais — a aventura de verdade está a duas horas e meia de São Paulo." },
      { title: "Monte Verde (divisa MG) — combinável em road trip", story: "Cruzar para Minas pela serra é entrar em outra atmosfera: pinheiros, vento gelado, fogões a lenha e cervejarias artesanais a 1.500 m. Combinado com a Mantiqueira paulista, vira o road trip de inverno mais romântico do país — paradas curtas, sempre uma lareira esperando." },
      { title: "Ciclovia e Maria Fumaça entre Pindamonhangaba e Campos", story: "O trem centenário ainda sopra fumaça subindo a serra como há 100 anos, atravessando viadutos e túneis cavados na pedra. Quem prefere pedal encara a ciclovia panorâmica entre vales de araucárias — duas formas analógicas e raras de sentir o relevo." },
      { title: "Cervejarias artesanais e cafés de altitude", story: "A altitude mudou o terroir paulista: cervejarias premiadas como Baden Baden, microcafés de fazenda com grãos cultivados acima dos 1.200 m e harmonizações com truta defumada da casa. É a gastronomia de montanha brasileira no auge — e ninguém ainda descobriu direito." }
    ],
    beyondUsual: [
      "Jantar harmonizado em vinícolas de altitude da Mantiqueira.",
      "Trilha guiada à Pedra do Baú ao amanhecer.",
      "Retiros de bem-estar em pousadas-boutique escondidas em Santo Antônio do Pinhal."
    ],
    stays: [],
    faq: [
      { q: "Quando ir?", a: "Inverno (jun–ago) para clima de serra; primavera para flores e menos fluxo." },
      { q: "Quantos dias?", a: "3 a 5 noites, ideal para combinar 2 bases." },
      { q: "Vai de carro?", a: "Sim, 2h30 a 3h de São Paulo pela Carvalho Pinto + Floriano Rodrigues Pinheiro." },
      { q: "É bom para famílias?", a: "Excelente — trens, parques e atividades ao ar livre." },
      { q: "Dá para combinar com o litoral?", a: "Sim, descendo a serra até Ubatuba ou São Sebastião." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-brotas-aventura",
    continent: "Brasil",
    country: "Brasil",
    region: "São Paulo",
    slug: "brasil/brotas-aventura",
    name: "Brotas & Vale do Jacaré — Aventura Paulista",
    bestTime: "Abr–Out (águas mais claras); Nov–Mar com mais volume nos rios.",
    tags: ["natureza", "expedicao", "familia", "bem-estar", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of rafting on Rio Jacaré-Pepira in Brotas, São Paulo, lush cerrado vegetation, blue sky, no people identifiable.",
    imageOverrideUrl: "",
    intro: "Capital paulista da aventura: rafting, cachoeiras, tirolesa e canoagem no coração do cerrado, a 4h da capital — perfeito para famílias ativas.",
    highlights: [
      { title: "Rafting no Rio Jacaré-Pepira", story: "Cinco quilômetros de corredeiras nível 3 e 4 que misturam adrenalina e mata atlântica intocada. O bote sobe na crista, água espirra na cara, todo mundo grita junto — e na próxima curva o rio acalma e revela uma cachoeira escondida. É o batismo mais democrático na aventura: dos 10 aos 70 anos." },
      { title: "Cachoeira Três Quedas e Cassorova", story: "A Cassorova despenca de 40 metros num poço verde-esmeralda cercado por floresta — você atravessa atrás da cortina d'água sentindo o vapor frio na pele. Na Três Quedas, três tobogãs naturais convidam ao rapel de cascata, equipamento completo, instrutor experiente, a memória de uma vida." },
      { title: "Tirolesas, rapel e arvorismo no Parque dos Saltos", story: "300 metros de tirolesa cruzando o desfiladeiro do Jacaré-Pepira a 60 m de altura. O coração para na largada, o vento corta o rosto, e por 20 segundos você é uma ave sobre o cânion. Embaixo, arvorismo entre figueiras centenárias para encerrar com gosto de quero mais." },
      { title: "Bóia-cross e canoagem para iniciantes", story: "Para quem prefere começar leve: deitar numa bóia e descer trechos cristalinos do Jacaré, vendo lambaris passando entre as pernas. É o tipo de experiência que crianças relembram a vida inteira — e os pais, também." },
      { title: "Analândia e a Cuesta de Itaqueri (mirantes geológicos)", story: "Pedras vermelhas que parecem desenhadas a mão erguem-se sobre o cerrado como esculturas. O Morro do Camelo ao pôr do sol é cinema: o sol some atrás da Cuesta e o céu fica laranja-violeta. Pouca gente sabe que existe — e por isso continua mágico." },
      { title: "Torrinha — grutas e cavernas pouco visitadas", story: "Espeleologia leve em cavernas de calcário com salões catedralescos, lagos subterrâneos e estalactites milenares. Visita técnica com guia local, capacete, lanterna — o tipo de descoberta que faz você se sentir explorador de verdade, sem sair do estado." }
    ],
    beyondUsual: [
      "Expedição de 2 dias descendo o Jacaré-Pepira com pernoite acampado.",
      "Voo de balão sobre o Vale do Jacaré ao amanhecer.",
      "Eco-lodges com SPA e gastronomia caipira contemporânea."
    ],
    stays: [],
    faq: [
      { q: "É bom para crianças?", a: "Sim, há opções leves de rafting e arvorismo desde 6 anos." },
      { q: "Quantos dias?", a: "3 a 4 noites para aproveitar as principais atividades." },
      { q: "Quando ir?", a: "Abril a outubro para águas mais cristalinas." },
      { q: "Como chegar?", a: "4h de carro de São Paulo via Bandeirantes." },
      { q: "Combina com outros destinos?", a: "Sim, com Analândia, São Pedro e Circuito das Águas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-circuito-aguas-paulistas",
    continent: "Brasil",
    country: "Brasil",
    region: "São Paulo",
    slug: "brasil/circuito-aguas-paulistas",
    name: "Circuito das Águas Paulistas",
    bestTime: "Abr–Set (clima ameno e seco); evite feriadões.",
    tags: ["bem-estar", "gastronomia", "familia", "roadtrip", "cultura"],
    imageAiPrompt: "Ultra realistic photo of Serra Negra hills in São Paulo countryside, colonial architecture, rolling green coffee plantations, late afternoon light, no people.",
    imageOverrideUrl: "",
    intro: "Águas termais, ar de montanha e charme de cidades pequenas: o circuito reúne Serra Negra, Lindóia, Socorro, Águas de São Pedro e Holambra em road trip caipira.",
    highlights: [
      { title: "Serra Negra — bondinho, malharias e cafés de fazenda", story: "Sobe-se de bondinho ao Cristo no topo da serra e a paisagem se abre 360°: vales de café, telhados coloniais, ar perfumado de eucalipto. Desce-se para vitrines de malhas finas feitas há gerações e termina o dia num café de fazenda que torra o próprio grão à vista — turismo lento, do jeito que era para ser." },
      { title: "Águas de Lindóia e Lindóia — fontes termais e parques", story: "Águas medicinais brotando da rocha desde 1900, parques arborizados com bondes elétricos antigos, hotéis-fonte com piscinas termais aquecidas naturalmente. É o spa brasileiro do começo do século XX preservado intacto — banho de imersão num ritual centenário." },
      { title: "Socorro — turismo de aventura no Rio do Peixe", story: "A surpresa do circuito: a cidade pequena tem uma das infraestruturas de aventura acessível mais avançadas do país, com tirolesa, rafting e arvorismo adaptados para PCDs. Inclusão de verdade, água cristalina, gente acolhedora — e ainda dá tempo de um chocolate quente na praça." },
      { title: "Águas de São Pedro — SPA termal e arquitetura art déco", story: "Uma das menores cidades do Brasil, planejada nos anos 1940 como estância hidromineral, ainda preserva sua arquitetura art déco impecável. Fontes sulfurosas, hotéis com tratamentos termais, um centrinho onde se anda a pé — relíquia do turismo paulista que parece parar o tempo." },
      { title: "Holambra — herança holandesa, tulipas e Expoflora", story: "Em setembro o município vira mar de tulipas, girassóis e moinhos de vento de verdade — não é cenografia. Pratos holandeses servidos em restaurantes administrados por descendentes, bicicletas pelas ruas, a maior feira de flores da América Latina. Um pedaço da Holanda no interior caipira." },
      { title: "Amparo — centro histórico tombado e gastronomia rural", story: "Casario colonial preservado, igreja imperial, cafés numa praça com araucárias, fazendas-restaurante onde se almoça em mesa de tábua corrida — galinhada na panela de ferro, doces caseiros, vinho mineiro. O interior paulista no que ele tem de mais autêntico." }
    ],
    beyondUsual: [
      "Banhos termais privativos em hotel-fonte histórico.",
      "Almoço autoral em fazendas-restaurante com ingredientes do terroir paulista.",
      "Roteiro de bondinhos, antiquários e cafés de especialidade em Serra Negra."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "4 a 6 noites para um circuito completo." },
      { q: "Como se desloca?", a: "De carro — distâncias curtas entre as cidades." },
      { q: "Quando ir?", a: "Outono e inverno (abr–set) para clima seco e ameno." },
      { q: "É bom para casais?", a: "Sim, ideal para bem-estar e gastronomia." },
      { q: "Combina com Campos do Jordão?", a: "Sim, em road trip serrana mais longa." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-vale-historico-caipira",
    continent: "Brasil",
    country: "Brasil",
    region: "São Paulo",
    slug: "brasil/vale-historico-caipira",
    name: "Vale Histórico & Cultura Caipira — Cunha, São Luiz do Paraitinga e Bananal",
    bestTime: "Maio–Set (clima seco); Fev para o Carnaval de Marchinhas em São Luiz.",
    tags: ["cultura", "gastronomia", "bem-estar", "roadtrip", "fotografia"],
    imageAiPrompt: "Ultra realistic photo of colonial baroque church in São Luiz do Paraitinga, São Paulo, colorful colonial houses, mountains of Serra do Mar in background, no people.",
    imageOverrideUrl: "",
    intro: "A São Paulo profunda: vilarejos coloniais, ateliês de cerâmica, fazendas de café do ciclo imperial e a cultura caipira viva entre a Mantiqueira e a Serra do Mar.",
    highlights: [
      { title: "Cunha — capital paulista da cerâmica de alta temperatura (noborigamas)", story: "Mestres ceramistas mantêm fornos noborigama japoneses queimando lenha por 50 horas seguidas, produzindo peças únicas que estão em coleções de museus em Tóquio e Nova York. Visitar os ateliês é assistir a um ritual: barro, fogo, paciência e a beleza intencionalmente imperfeita do wabi-sabi nascendo nas mãos do artesão." },
      { title: "São Luiz do Paraitinga — casario colonial e Carnaval de Marchinhas", story: "Reconstruída pedra por pedra após a enchente de 2010, a cidade é um dos casarios coloniais mais íntegros do estado. Em fevereiro, o Carnaval de Marchinhas reúne 50 mil pessoas cantando sambas antigos ao vivo, sem trio elétrico, sem violência — pura memória afetiva brasileira, vivida nas ruas." },
      { title: "Bananal — fazendas históricas do ciclo do café", story: "Casarões imperiais do auge do café preservam senzalas, capelas, escadarias de pedra portuguesa e mobiliário do século XIX. Algumas viraram pousadas onde se dorme em quartos onde já passou D. Pedro II. Café da manhã servido em prata, vista para o cafezal — o luxo de habitar a história." },
      { title: "Parque Nacional da Serra da Bocaina (acesso por Cunha)", story: "Uma das maiores áreas de Mata Atlântica preservada do país: araucárias, micos-leões-pretos, cachoeiras gigantes e a trilha do Ouro descendo de 1.500 m até Paraty pelos caminhos coloniais originais. Travessia épica em 3 dias com mulas, guia e bivaque." },
      { title: "Cachoeira do Pimenta e Mata Atlântica preservada", story: "Vinte minutos de trilha leve entre samambaias gigantes levam a um poço de água gelada e cristalina com queda de 15 metros. Sem multidão, sem quiosque, sem rede — só você, a mata e o som da água. É o que sobra de uma natureza que quase perdemos." },
      { title: "Roteiro de cachaças artesanais e queijos do Vale do Paraíba", story: "Alambiques familiares destilam cachaças envelhecidas em jequitibá e bálsamo enquanto queijarias produzem reblochon e camembert brasileiros premiados internacionalmente. Visita guiada com degustação, conversa com produtores, almoço caipira contemporâneo — gastronomia rural no nível dos melhores roteiros europeus." }
    ],
    beyondUsual: [
      "Visita guiada a ateliês de cerâmica com mestres-artesãos em Cunha.",
      "Hospedagem em fazenda histórica do café com café da manhã caipira.",
      "Travessia de jipe até Paraty pela Estrada Real (Cunha–Paraty)."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "3 a 5 noites combinando 2 bases." },
      { q: "Combina com Paraty?", a: "Sim, Cunha fica a 50 km de Paraty pela serra." },
      { q: "Quando ir?", a: "Inverno seco (maio–set); fevereiro para o Carnaval de São Luiz." },
      { q: "É bom para casais?", a: "Sim, perfeito para slow travel e gastronomia rural." },
      { q: "Tem trilhas?", a: "Sim, na Serra da Bocaina e em torno de Cunha." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-litoral-espirito-santo",
    continent: "Brasil",
    country: "Brasil",
    region: "Espírito Santo",
    slug: "brasil/litoral-espirito-santo",
    name: "Litoral do Espírito Santo",
    bestTime: "Set–Mar (sol firme e mar calmo).",
    tags: ["praia", "natureza", "gastronomia", "familia", "remoto"],
    imageAiPrompt: "Ultra realistic aerial photo of Itaúnas coast in Espírito Santo, white sand dunes meeting the sea, palm trees, no people.",
    imageOverrideUrl: "",
    intro: "Pouco explorado e cheio de surpresas: dunas, vilas pesqueiras e gastronomia de moqueca capixaba. Um dos litorais mais autênticos do Sudeste.",
    highlights: [
      { title: "Itaúnas — dunas gigantes e vila de forró", story: "Dunas brancas de até 30 metros avançaram sobre a antiga vila e hoje formam uma paisagem quase saariana à beira do Atlântico. À noite, Itaúnas vira capital nacional do forró pé de serra — três fóruns simultâneos com sanfona, zabumba e gente dançando agarrada até o amanhecer. Energia única no litoral brasileiro." },
      { title: "Guarapari e Praia do Morro", story: "Praias urbanas de areia monazítica (com propriedades terapêuticas) e mar verde-jade. A Praia do Morro tem 6 km de extensão com calçadão arborizado, quiosques de moqueca capixaba e pôr do sol que tinge o mar de rosa. Infraestrutura completa para famílias, com hotéis pé na areia e atmosfera relaxada." },
      { title: "Anchieta e Castelhanos", story: "Vila pesqueira histórica fundada em 1565, com igreja matriz do século XVI e centro tombado de paralelepípedos. As praias de Castelhanos, Iriri e Ubu têm mar tranquilo, areia clara e quase nenhuma multidão — o Espírito Santo silencioso e autêntico, longe dos roteiros óbvios." },
      { title: "Praia do Forno (Reserva Biológica de Comboios)", story: "Acesso por trilha leve em meio à restinga, e a recompensa é uma praia selvagem onde tartarugas-marinhas desovam entre setembro e março. O Projeto TAMAR mantém base em Comboios e oferece visitas guiadas para ver filhotes sendo soltos ao mar — experiência educativa profundamente tocante." },
      { title: "Vitória e Vila Velha — cultura e moqueca capixaba", story: "Vitória surpreende: arquitetura contemporânea, Terceira Ponte com vista cinematográfica, Convento da Penha no alto da serra. A moqueca capixaba (sem dendê, com urucum, cozida em panela de barro) é servida em restaurantes premiados onde o ritual da panela borbulhando à mesa é parte do espetáculo." },
      { title: "Conceição da Barra e suas praias desertas", story: "Norte capixaba, fronteira com Bahia, com 30 km de praias quase desertas, falésias coloridas em Itaúnas e dunas que descem direto até o mar. Vilarejo tranquilo, gastronomia simples de peixe fresco e a sensação rara de ter quilômetros de areia branca só para si — refúgio absoluto." }
    ],
    beyondUsual: [
      "Pousadas-boutique em Itaúnas, próximas ao Parque Estadual.",
      "Roteiros gastronômicos de moqueca capixaba.",
      "Avistamento de tartarugas em Comboios (TAMAR)."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor base?", a: "Itaúnas para natureza/dunas; Guarapari para infraestrutura familiar." },
      { q: "Quando ir?", a: "Setembro a março para sol firme." },
      { q: "Dá para combinar com a Bahia?", a: "Sim, Itaúnas é fronteiriço a Caraíva/Trancoso." },
      { q: "É bom para famílias?", a: "Sim, com praias calmas em Guarapari e Anchieta." },
      { q: "Quantos dias?", a: "4 a 6 noites." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== ÁFRICA =====
  {
    id: "africa-tanzania-serengeti",
    continent: "África",
    country: "Tanzânia",
    region: "Serengeti",
    slug: "africa/tanzania/serengeti",
    name: "Serengeti",
    bestTime: "Jun–Out (migração em áreas-chave) e Dez–Mar (nascimentos em regiões do sul).",
    tags: ["safari", "fotografia", "lua-de-mel", "conservacao", "remoto"],
    imageAiPrompt: "Ultra realistic National Geographic style photo of wildebeest migration in Serengeti at sunrise, dramatic light, no people.",
    imageOverrideUrl: "",
    intro: "Serengeti é o grande teatro da vida selvagem. A Create Travel cura a experiência para ser ética, silenciosa e intensa — menos corrida, mais presença.",
    highlights: [
      { title: "Safáris ao amanhecer e entardecer", story: "Antes do sol nascer, o jipe corta a savana ainda azulada. O ar é frio, o cheiro de capim molhado entra forte e, à distância, leões começam a rugir reivindicando território. Quando a luz dourada finalmente toca a planície, ela revela cenas que parecem coreografadas — uma chita observando, elefantes em fila, búfalos levantando poeira. Cada saída é teatro." },
      { title: "Grandes manadas e predadores", story: "Centenas de milhares de gnus e zebras se movem como um único organismo pela savana, perseguidos por leões, leopardos e hienas que esperam o momento certo. Ver uma chita em caça plena, com 110 km/h em segundos, ou um leopardo descendo da árvore com a presa, é privilégio raro — o ciclo da vida acontecendo a poucos metros do veículo." },
      { title: "Céu estrelado na savana", story: "Sem luzes artificiais por centenas de quilômetros, a noite do Serengeti revela uma Via Láctea de tirar o fôlego. Deitar em uma esteira no deck do lodge, ouvir o som distante das hienas e ver estrelas cadentes riscarem o céu enquanto se toma um drink é uma das experiências mais espirituais que a África oferece." },
      { title: "Extensão estratégica para Ngorongoro", story: "A combinação clássica e por bom motivo: enquanto o Serengeti oferece as planícies infinitas da migração, o Ngorongoro concentra fauna em uma caldeira vulcânica de 20 km de diâmetro — incluindo rinocerontes-negros raros. Curamos a rota para reduzir deslocamentos e maximizar tempo de observação." },
      { title: "Contato cultural com respeito e contexto", story: "Visitas a comunidades Maasai vão muito além da foto de turista — incluem conversas com anciãos, demonstrações de rituais ancestrais, dança guerreira do adumu e contexto sobre os desafios contemporâneos do povo. Antropólogos locais acompanham para garantir uma experiência ética e profunda." }
    ],
    beyondUsual: [
      "Safári com foco em comportamento animal (ética acima do 'clique').",
      "Conservação com transparência (entender impactos reais).",
      "Bases escolhidas por temporada para reduzir deslocamentos e aumentar tempo em campo."
    ],
    stays: [],
    faq: [
      { q: "A migração tem data certa?", a: "Ela varia. Curamos o roteiro pelo seu mês e pelas áreas mais prováveis naquele período." },
      { q: "Quantos dias de safári são ideais?", a: "Em geral 5 a 8 noites entre parques dá profundidade." },
      { q: "É bom para lua de mel?", a: "Sim, para casais que buscam emoção e contemplação." },
      { q: "Dá para combinar com praia?", a: "Sim, Zanzibar pode ser uma extensão (bem curada)." },
      { q: "Como é a ética de observação?", a: "Priorizamos boas práticas: distância, respeito e baixo impacto." },
      { q: "Como falar com consultor?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-tanzania-ngorongoro",
    continent: "África",
    country: "Tanzânia",
    region: "Ngorongoro",
    slug: "africa/tanzania/ngorongoro",
    name: "Ngorongoro",
    bestTime: "Jun–Out para clima seco; Dez–Mar para paisagens verdes e nascimentos.",
    tags: ["safari", "fotografia", "conservacao", "cultura"],
    imageAiPrompt: "Ultra realistic aerial photo of Ngorongoro crater in Tanzania, vast crater with wildlife, dramatic clouds, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "A maior caldeira intacta do mundo: um anfiteatro natural onde a vida selvagem se concentra. Complemento perfeito ao Serengeti.",
    highlights: [
      { title: "Descida à cratera ao amanhecer", story: "A estrada serpenteia pela borda do vulcão extinto, e quando o jipe começa a descer os 600 metros até o fundo, a neblina ainda preenche a caldeira como um lago de algodão. À medida que o sol sobe, a névoa se dissipa e revela um anfiteatro natural de 260 km² com fauna concentrada como em nenhum outro lugar do planeta — sensação de estar entrando no Éden." },
      { title: "Concentração de grandes mamíferos", story: "Mais de 25.000 grandes mamíferos vivem dentro da cratera: leões com juba escura, manadas de elefantes-tusker (com presas enormes), búfalos em milhares, hipopótamos boiando nas lagoas, flamingos rosados tingindo o lago Magadi. A densidade é tamanha que se vê os Big Five em uma única manhã." },
      { title: "Rinocerontes negros (um dos poucos locais)", story: "Restam menos de 5.500 rinocerontes-negros em toda a África, e a cratera abriga uma das populações mais protegidas. Avistar essa silhueta pré-histórica caminhando lentamente pela planície, com a vista da borda da cratera ao fundo, é um momento de privilégio e responsabilidade — testemunhar uma espécie em recuperação." },
      { title: "Povos Maasai no entorno", story: "Os Maasai mantêm direito ancestral de pastorear o gado nas planícies do Ngorongoro Conservation Area — uma das poucas convivências bem-sucedidas entre cultura tradicional e conservação. Encontros com anciãos, visitas a bomas (aldeias) e mercados semanais revelam uma cultura que resiste ao tempo com dignidade." },
      { title: "Paisagens vulcânicas dramáticas", story: "Cones vulcânicos, lagos alcalinos cor-de-rosa, escarpas vertiginosas e a Garganta de Olduvai — berço da humanidade, onde Mary e Louis Leakey encontraram fósseis de 1,8 milhão de anos. A geologia conta uma história tão profunda quanto a fauna — viagem ao princípio do tempo." }
    ],
    beyondUsual: [
      "Visita cultural com comunidades Maasai (respeitosa e com contexto).",
      "Horários de descida para evitar picos de veículos.",
      "Combinação com áreas menos visitadas do norte da Tanzânia."
    ],
    stays: [],
    faq: [
      { q: "Qual a diferença para o Serengeti?", a: "Ngorongoro é uma caldeira fechada com fauna concentrada; Serengeti são planícies abertas com migração." },
      { q: "Vejo rinoceronte lá?", a: "É um dos melhores locais da África Oriental para tentar." },
      { q: "Quantos dias ficar?", a: "1 a 2 noites na área, combinando com Serengeti." },
      { q: "Fica muito cheio de veículos?", a: "Pode ficar; a curadoria de horários ajuda." },
      { q: "É bom para fotografia?", a: "Muito, especialmente ao amanhecer." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-zanzibar",
    continent: "África",
    country: "Tanzânia",
    region: "Zanzibar",
    slug: "africa/zanzibar",
    name: "Zanzibar",
    bestTime: "Jun–Out e Dez–Fev para praias; Mar–Mai são os meses mais chuvosos.",
    tags: ["praia", "cultura", "gastronomia", "lua-de-mel", "mergulho"],
    imageAiPrompt: "Ultra realistic photo of Zanzibar beach with turquoise waters, traditional dhow boats, palm trees, tropical paradise, no people.",
    imageOverrideUrl: "",
    intro: "Praias paradisíacas encontram história e especiarias. Zanzibar é a extensão perfeita após o safári — ou um destino por si só.",
    highlights: [
      { title: "Praias de areia branca e águas turquesa", story: "Nungwi, Kendwa, Paje, Matemwe — nomes que viraram sinônimo de paraíso. Areia branca quase translúcida, mar em três tons de azul e dhows tradicionais com velas triangulares deslizando ao entardecer. Em Paje, a maré baixa revela bancos de areia que se estendem por quilômetros, e caminhar até o horizonte com pés na água é hipnótico." },
      { title: "Stone Town (Patrimônio UNESCO)", story: "Labirinto de ruelas estreitas com portas talhadas em madeira de mais de 200 anos, mesquitas, templos hindus, igrejas e bazares — Stone Town é o encontro de África, Arábia, Índia e Europa em arquitetura viva. À noite, o mercado Forodhani serve frutos do mar grelhados na hora sob luz de lampiões, com vista para o oceano Índico." },
      { title: "Rota das especiarias", story: "Zanzibar foi por séculos a 'Ilha das Especiarias' — cravo, baunilha, cardamomo, pimenta-do-reino e noz-moscada cresciam aqui em escala global. Visitar uma fazenda de especiarias é fazer um tour sensorial: cheirar folhas, mascar raízes, descobrir aromas que mudaram a história da humanidade. Almoço com curry zanzibarense fecha a experiência." },
      { title: "Mergulho e snorkel", story: "As águas ao redor de Mnemba Island têm visibilidade de 30 metros e abrigam tartarugas-verdes, golfinhos-rotadores, peixes-palhaço e corais coloridos. Mergulhar em Pemba ou nas Mnemba Atoll é encontrar um dos ecossistemas marinhos mais ricos do oceano Índico — com a sorte de ver, em meses certos, tubarões-baleia." },
      { title: "Gastronomia de influências árabes e africanas", story: "Curries aromáticos, urojo (sopa azeda zanzibarense), pweza wa nazi (polvo no leite de coco), mishkaki (espetinhos), todos perfumados com especiarias da ilha. Jantar em um rooftop de Stone Town ao chamado do muezzin, com o pôr do sol tingindo o Índico, é uma das experiências mais memoráveis da África Oriental." }
    ],
    beyondUsual: [
      "Praias menos visitadas no norte e leste da ilha.",
      "Experiência de especiarias com contexto histórico real.",
      "Jantares em rooftops de Stone Town."
    ],
    stays: [],
    faq: [
      { q: "É só praia ou tem mais?", a: "Muito mais: história, cultura e gastronomia únicas." },
      { q: "Quantos dias ficar?", a: "3 a 5 noites equilibram praia e exploração." },
      { q: "Vale combinar com safári?", a: "Sim, uma das melhores combinações." },
      { q: "É seguro?", a: "Sim, com os cuidados normais de viagem." },
      { q: "Qual a melhor praia?", a: "Depende do que você busca — curamos pela sua preferência." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-quenia-masai-mara",
    continent: "África",
    country: "Quênia",
    region: "Masai Mara",
    slug: "africa/quenia/masai-mara",
    name: "Masai Mara",
    bestTime: "Jul–Out para a Grande Migração; ano todo para fauna residente.",
    tags: ["safari", "fotografia", "conservacao", "cultura", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Masai Mara savanna with elephants and acacia trees at golden hour, dramatic African landscape, no people.",
    imageOverrideUrl: "",
    intro: "A continuação do Serengeti em solo queniano: palco da travessia do rio Mara e lar de leões, leopardos e guepardos o ano todo.",
    highlights: [
      { title: "Travessia do Rio Mara (quando a migração cruza)", story: "Milhares de gnus e zebras se acumulam na margem do rio, hesitando — sabem que abaixo há crocodilos de 5 metros esperando. De repente, um animal salta e a manada inteira se atira em êxodo desesperado. A água ferve em água, poeira e morte; ao mesmo tempo, é renascimento — uma das cenas mais visceralmente impressionantes da natureza, narrada por documentaristas há décadas." },
      { title: "Grandes felinos em alta densidade", story: "Masai Mara tem uma das maiores concentrações de leões, leopardos e chitas do mundo. É comum, em um único safári, ver bandos de leoas caçando, leopardos descansando em galhos de acácia e chitas com filhotes brincando ao sol. Cada saída ao amanhecer é potencial para testemunhar uma caçada inteira do início ao fim." },
      { title: "Balões sobre a savana", story: "Antes do sol nascer, o balão se ergue silenciosamente sobre a Mara. De 300 metros de altura, a planície se revela em escala épica — manadas se movendo como rios escuros, leões caminhando ao longo de trilhas, elefantes em famílias. Ao final do voo, café da manhã com champagne servido na savana, com girafas observando à distância. Sem palavras." },
      { title: "Cultura Maasai", story: "Os Maasai mantêm vida tradicional pastoral em bomas (aldeias) cercadas de espinhos para proteger o gado dos leões. Visitas curadas incluem dança guerreira do adumu (saltos altíssimos), conversas com anciãos sobre rituais de passagem, demonstrações de medicina herbal e a oportunidade rara de entender uma cultura ancestral em primeira mão." },
      { title: "Conservancies privadas com menos veículos", story: "Áreas adjacentes ao parque nacional, gerenciadas por comunidades Maasai, oferecem experiência mais exclusiva: limite de veículos por avistamento, safári a pé permitido, drives noturnos e maior conforto nos lodges. A receita dos turistas vai diretamente para as comunidades — turismo regenerativo de verdade." }
    ],
    beyondUsual: [
      "Safáris em conservancies para experiência mais exclusiva.",
      "Caminhadas guiadas em áreas permitidas.",
      "Interações culturais com comunidades Maasai com contexto."
    ],
    stays: [],
    faq: [
      { q: "Quando é a travessia do rio?", a: "Geralmente julho a outubro, mas sem data fixa." },
      { q: "Qual a diferença para o Serengeti?", a: "Masai Mara tem mais densidade de felinos e conservancies exclusivas." },
      { q: "Quantos dias de safári?", a: "4 a 6 noites para boa imersão." },
      { q: "Vale fazer balão?", a: "É uma experiência única, mas cara — curamos pela prioridade." },
      { q: "É bom para lua de mel?", a: "Sim, especialmente em lodges de conservancies." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-africa-do-sul",
    continent: "África",
    country: "África do Sul",
    region: "Kruger & Cidade do Cabo",
    slug: "africa/africa-do-sul",
    name: "África do Sul",
    bestTime: "Mai–Set para safári (seca); Out–Mar para Cidade do Cabo e vinhos.",
    tags: ["safari", "gastronomia", "cultura", "fotografia", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Cape Town with Table Mountain, dramatic coastline, and colorful Bo-Kaap houses, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Do safári ao vinho, da cidade cosmopolita às paisagens dramáticas. A África do Sul é um país inteiro em experiências.",
    highlights: [
      { title: "Safári no Kruger ou reservas privadas", story: "O Kruger é um dos maiores parques nacionais da África com os Big Five (leão, leopardo, elefante, búfalo, rinoceronte) em alta densidade. Em reservas privadas adjacentes como Sabi Sands, é permitido sair da estrada para acompanhar predadores em ação — encontros próximos com leopardos relaxando em árvores marula são especialidade da região." },
      { title: "Rota dos Vinhos (Stellenbosch, Franschhoek)", story: "Vales de vinhedos cercados por montanhas dramáticas, vinícolas em arquitetura cape dutch do século XVII, restaurantes premiados com estrelas Michelin e degustações de chenin blanc, pinotage e syrah. Franschhoek tem um trenzinho-bonde que percorre 8 vinícolas em um dia — gastronomia e enologia em nível mundial." },
      { title: "Cidade do Cabo e Table Mountain", story: "Uma das cidades mais belas do mundo, abraçada pela Table Mountain (acessível por teleférico ou trilha) com vista panorâmica do oceano Atlântico encontrando o Índico. O bairro Bo-Kaap com casinhas em cores vibrantes, o V&A Waterfront, a Ilha de Robben (onde Mandela foi preso) — cada esquina é história e beleza." },
      { title: "Garden Route cênica", story: "750 km de estrada costeira entre Cape Town e Port Elizabeth, com Knysna e suas lagoas, Plettenberg Bay e suas baleias-franca, Tsitsikamma com florestas indígenas e pontes suspensas, Oudtshoorn e suas fazendas de avestruz. Road trip clássico que combina natureza, gastronomia e charme de vilarejos costeiros." },
      { title: "Cultura e história complexa", story: "Robben Island, Apartheid Museum em Joanesburgo, township de Soweto com visitas guiadas pela casa de Mandela — entender a história sul-africana é parte essencial da viagem. Encontros com guias locais que viveram o apartheid trazem profundidade emocional rara, transformando o turismo em testemunho histórico." }
    ],
    beyondUsual: [
      "Reservas privadas adjacentes ao Kruger para experiência exclusiva.",
      "Vinícolas boutique fora do circuito massificado.",
      "Trechos menos conhecidos da Garden Route."
    ],
    stays: [],
    faq: [
      { q: "Consigo fazer safári e Cidade do Cabo em uma viagem?", a: "Sim, é a combinação clássica." },
      { q: "Quantos dias são ideais?", a: "10 a 14 dias para combinar bem os elementos." },
      { q: "É seguro?", a: "Sim, com planejamento e áreas adequadas." },
      { q: "A Garden Route vale a pena?", a: "Muito, especialmente para quem gosta de dirigir e paisagens." },
      { q: "Qual melhor época?", a: "Depende da prioridade: safári ou costa." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-namibia",
    continent: "África",
    country: "Namíbia",
    region: "Sossusvlei & Etosha",
    slug: "africa/namibia",
    name: "Namíbia",
    bestTime: "Mai–Out para safári e clima seco; Nov–Abr para paisagens verdes (mas mais quente).",
    tags: ["deserto", "fotografia", "safari", "roadtrip", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Namibia red sand dunes at Sossusvlei with dramatic shadows, vast desert landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Paisagens que parecem de outro planeta: dunas vermelhas, desertos costeiros e vida selvagem adaptada. A Namíbia é para quem busca o extraordinário.",
    highlights: [
      { title: "Dunas de Sossusvlei e Deadvlei", story: "As dunas de Sossusvlei são as mais altas do mundo — algumas com 325 metros, vermelhas como sangue ao amanhecer. Subir a Big Daddy ao nascer do sol, sentir o vento gelado e ver o vale se acender em tons de fogo é experiência transcendental. No Deadvlei, árvores fossilizadas há 900 anos se erguem como esculturas em um lago seco branco — uma das imagens mais surreais do planeta." },
      { title: "Safári em Etosha", story: "Em volta do enorme salar Etosha Pan, os waterholes atraem fauna em concentrações espetaculares — especialmente na seca. Elefantes brancos cobertos pela poeira do salar, rinocerontes-negros, leões e girafas se revezam em um teatro contínuo. Lodges com waterholes iluminados permitem observar a fauna durante a noite com bebidas em mão." },
      { title: "Costa do Esqueleto", story: "Onde o deserto do Namib encontra o Atlântico em uma das costas mais inóspitas e cinematográficas do mundo. Naufrágios enferrujados emergem da areia, neblinas espessas envolvem leões-marinhos e flamingos, e a sensação é estar no fim do mundo. Em Cape Cross, milhares de focas-do-cabo se reúnem em colônias barulhentas — espetáculo único." },
      { title: "Tribos Himba (com respeito)", story: "No norte da Namíbia, o povo Himba mantém vida seminômade com mulheres cobrindo a pele com pasta de ocre vermelho misturado a gordura — proteção contra o sol e marca cultural milenar. Visitas curadas, com guias locais e em troca justa, permitem entender uma cultura que escolheu manter suas tradições contra o tempo." },
      { title: "Céu estrelado mais escuro do mundo", story: "A NamibRand Nature Reserve é uma das primeiras Reservas Internacionais de Céu Escuro do mundo — visibilidade noturna sem precedentes, com a Via Láctea projetando sombras no chão. Astrônomos amadores e profissionais peregrinam para observar nebulosas a olho nu, e os lodges oferecem decks com telescópios para noites inesquecíveis." }
    ],
    beyondUsual: [
      "Regiões menos visitadas do Damaraland.",
      "Acampamentos remotos com experiência imersiva.",
      "Fotografia noturna em locais certificados de céu escuro."
    ],
    stays: [],
    faq: [
      { q: "Precisa dirigir?", a: "Self-drive é comum, mas há opções com motorista." },
      { q: "É seguro dirigir?", a: "Sim, com preparo para estradas de cascalho." },
      { q: "Quantos dias são ideais?", a: "10 a 14 dias para cobrir os highlights." },
      { q: "É bom para fotografia?", a: "Um dos melhores destinos do mundo." },
      { q: "Tem safári de verdade?", a: "Sim, Etosha é excelente para Big 5." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-botsuana-okavango",
    continent: "África",
    country: "Botsuana",
    region: "Delta do Okavango",
    slug: "africa/botsuana/okavango",
    name: "Delta do Okavango",
    bestTime: "Jun–Out para águas altas e safári aquático; Nov–Mar para nascimentos.",
    tags: ["safari", "navegacao", "fotografia", "conservacao", "remoto", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic aerial photo of Okavango Delta waterways and wildlife, lush green islands, mokoro canoes, golden light, no people.",
    imageOverrideUrl: "",
    intro: "O maior delta interior do mundo: safári aquático, vida selvagem extraordinária e exclusividade em meio à natureza intocada.",
    highlights: [
      { title: "Safári de mokoro (canoa tradicional)", story: "Deslizar silenciosamente em uma canoa de madeira escavada por um remador local, atravessando canais de água cristalina entre lírios e papiros, com elefantes pastando a poucos metros, é uma das experiências de safári mais íntimas do planeta. O silêncio é absoluto, interrompido apenas pelo bater das asas de uma garça ou pelo bufo distante de um hipopótamo." },
      { title: "Game drives em ilhas remotas", story: "O delta é um arquipélago de centenas de ilhas formadas por sedimentos e termiteiros gigantes. Cada ilha vira plataforma de safári com fauna abundante — leões adaptados a caçar em águas rasas, cães-selvagens raros, leopardos noturnos e os famosos elefantes do Okavango, conhecidos por suas presas longas." },
      { title: "Concentração de elefantes e predadores", story: "Botsuana abriga a maior população de elefantes da África (mais de 130.000), e muitos passam pelo Okavango. Ver manadas de 50+ elefantes atravessando canais a nado, ou um leopardo levando uma presa para o alto de uma árvore-salsicha, é cotidiano aqui. A densidade e qualidade das observações é mundialmente reconhecida." },
      { title: "Lodges e camps de luxo exclusivos", story: "Botsuana adota modelo de turismo de baixo volume e alto valor: poucos lodges, poucas unidades, máxima privacidade e mínimo impacto. Lodges como Mombo, Vumbura Plains e Jao oferecem suítes com decks privativos sobre o delta, jantares à luz de lampiões na savana e serviço personalíssimo — luxo no sentido mais profundo." },
      { title: "Paisagens alagadas únicas", story: "O Okavango é o maior delta interior do mundo — um rio que não chega ao mar, evaporando em milhares de canais no meio do deserto do Kalahari. Vista do helicóptero, é uma escultura líquida verde-azulada cercada de areia, com manadas de búfalos atravessando ilhas e revoadas de pelicanos sobrevoando — pura poesia geográfica." }
    ],
    beyondUsual: [
      "Camps pequenos com poucas unidades para máxima privacidade.",
      "Caminhadas guiadas em áreas de alta biodiversidade.",
      "Helicóptero sobre o delta para perspectiva aérea."
    ],
    stays: [],
    faq: [
      { q: "É caro?", a: "Sim, mas a exclusividade e conservação justificam." },
      { q: "Quantos dias ficar?", a: "Mínimo 3 noites, ideal 5 a 7 para combinar áreas." },
      { q: "Qual a diferença para outros safáris?", a: "A dimensão aquática e a exclusividade dos camps." },
      { q: "É bom para lua de mel?", a: "Um dos melhores destinos românticos de safári." },
      { q: "Tem malária?", a: "É área de risco; profilaxia recomendada." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-ruanda-gorilas",
    continent: "África",
    country: "Ruanda",
    region: "Parque Nacional dos Vulcões",
    slug: "africa/ruanda/gorilas",
    name: "Ruanda (Gorilas)",
    bestTime: "Jun–Set e Dez–Fev para trilhas mais secas; possível o ano todo.",
    tags: ["safari", "trekking", "conservacao", "fotografia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of mountain gorillas in Rwanda misty forest, intimate wildlife encounter, dramatic natural light, no people besides wildlife.",
    imageOverrideUrl: "",
    intro: "Encontrar gorilas das montanhas é uma das experiências mais transformadoras do planeta. Ruanda oferece o cenário mais acessível para esse encontro raro.",
    highlights: [
      { title: "Trekking até famílias de gorilas", story: "Após horas subindo trilhas íngremes em floresta densa de bambu e samambaias gigantes, o rastreador para e silencia. À sua frente, a apenas 7 metros, uma família inteira de gorilas-das-montanhas — um silverback pesando 250 kg, fêmeas com filhotes nas costas, jovens brincando entre galhos. Por uma hora você compartilha o espaço deles, olhos nos olhos. Transformador é palavra pequena." },
      { title: "Vulcões e florestas de altitude", story: "O Parque Nacional dos Vulcões abriga 5 vulcões adormecidos da cordilheira Virunga, cobertos por floresta de altitude perpetuamente envolta em neblina. Caminhar entre samambaias arborescentes de 4 metros, com sons de pássaros endêmicos ecoando, é entrar em um mundo pré-histórico — cenário do filme 'Nas Montanhas dos Gorilas'." },
      { title: "Golden monkeys", story: "Endêmicos das florestas de bambu de Virunga, os macacos-dourados são pequenos primatas com pelagem cor de ouro brilhante e olhos âmbar. Trekking mais leve que o dos gorilas leva a bandos brincando entre os bambus — alternativa econômica e igualmente encantadora, ideal para quem quer mais um dia na floresta de altitude." },
      { title: "Kigali e sua história de resiliência", story: "Kigali é uma das capitais mais limpas, seguras e organizadas da África. O Memorial do Genocídio, onde 250.000 vítimas estão enterradas, é visita densa mas essencial — entender a tragédia de 1994 e a reconstrução do país em apenas 30 anos é uma das histórias mais inspiradoras do mundo contemporâneo." },
      { title: "Conservação como modelo", story: "Ruanda transformou os gorilas em pilar de identidade nacional — cada permit de trekking financia diretamente a conservação e as comunidades locais. A população de gorilas-das-montanhas saiu de 250 nos anos 80 para mais de 1.000 hoje. Viajar aqui é apoiar uma das maiores histórias de sucesso de conservação do planeta." }
    ],
    beyondUsual: [
      "Experiência de habituação para mais tempo com os gorilas.",
      "Visita a projetos de conservação comunitária.",
      "Combinação com chimpanzés na Floresta Nyungwe."
    ],
    stays: [],
    faq: [
      { q: "É difícil a trilha?", a: "Pode ser exigente, mas há assistentes disponíveis." },
      { q: "Quantas noites ficar?", a: "2 a 4 noites para o encontro com gorilas; mais se combinar experiências." },
      { q: "É seguro em Ruanda?", a: "Sim, é um dos países mais seguros da África." },
      { q: "O permit de gorila é caro?", a: "Sim, mas financia diretamente a conservação." },
      { q: "Posso combinar com safári tradicional?", a: "Sim, Tanzânia ou Quênia são boas extensões." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-marrocos",
    continent: "África",
    country: "Marrocos",
    region: "Marrakech & Deserto",
    slug: "africa/marrocos",
    name: "Marrocos",
    bestTime: "Mar–Mai e Set–Nov para clima ameno; verão pode ser muito quente no deserto.",
    tags: ["cultura", "deserto", "gastronomia", "fotografia", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Moroccan architecture in Marrakech with colorful tiles and intricate patterns, golden light, no people.",
    imageOverrideUrl: "",
    intro: "Cores, aromas e história em cada medina. Marrocos é sensorial: das montanhas ao deserto, das cidades imperiais aos riads escondidos.",
    highlights: [
      { title: "Medinas de Marrakech e Fez", story: "Entrar na medina de Fez — labirinto de 9.000 ruelas onde o tempo parou no século XIV — é experiência sensorial total. Tinturarias de couro com tanques coloridos vistos do alto, ferreiros martelando bronze, padeiros assando pão em fornos comunitários, perfumistas misturando essências em pequenos frascos. Em Marrakech, a Praça Jemaa el-Fnaa explode à noite com encantadores de serpentes, contadores de histórias e barracas de comida fumegante." },
      { title: "Deserto do Saara (Merzouga e Zagora)", story: "Cavalgando um camelo pelas dunas alaranjadas de Erg Chebbi ao pôr do sol, com a sombra do animal projetada longa na areia, é viver imagem de cartão-postal mil vezes vista — agora real. À noite, no camp de tendas berberes, jantar tagine sob estrelas com tambores tocando ao redor da fogueira, e dormir ouvindo apenas o silêncio do deserto. Ao amanhecer, subir a duna mais alta para ver o sol nascer transforma a vida." },
      { title: "Atlas e vales berberes", story: "A Cordilheira do Atlas separa o Marrocos verde do Marrocos saariano com picos de 4.000 metros, vilarejos berberes pendurados em encostas e vales como Ourika, Imlil e o vale do Dadès com gargantas avermelhadas espetaculares. Cavalgar por trilhas onde caravanas passavam há séculos, almoçar tagine em casa berbere e dormir em kasbah de barro é viver o Marrocos profundo." },
      { title: "Arquitetura e artesanato", story: "Madrassas com mosaicos zellige perfeitos, palácios com tetos esculpidos em cedro, riads com pátios centrais e fontes — a arquitetura marroquina é poesia geométrica. Tapetes berberes, lâmpadas de bronze perfuradas, cerâmica azul de Fez, tecidos de seda e couros tingidos compõem o paraíso dos compradores de design no Suk de Marrakech." },
      { title: "Gastronomia marroquina", story: "Tagines cozinhando em fogo lento por horas, cuscuz de sexta-feira em famílias, pastilla doce e salgada ao mesmo tempo, chá de menta servido com cerimônia, pães rasgados na mão. Jantares em riads boutique com música andaluza ao vivo, e workshops de culinária em cozinhas de mulheres locais — gastronomia que conta a história das rotas das caravanas." }
    ],
    beyondUsual: [
      "Riads boutique fora do circuito óbvio.",
      "Experiências de deserto em camps exclusivos.",
      "Aldeias berberes com interações respeitosas."
    ],
    stays: [],
    faq: [
      { q: "É seguro viajar no Marrocos?", a: "Sim, é um destino turístico consolidado." },
      { q: "Quantos dias são ideais?", a: "8 a 12 dias para combinar cidades e deserto." },
      { q: "Precisa de guia?", a: "Recomendado para medinas e deserto." },
      { q: "É bom para casais?", a: "Sim, especialmente em riads românticos." },
      { q: "Qual a melhor base?", a: "Marrakech para explorar o sul; Fez para o norte." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "africa-egito",
    continent: "África",
    country: "Egito",
    region: "Cairo, Luxor & Nilo",
    slug: "africa/egito/nilo",
    name: "Egito (Nilo, Cairo & Luxor)",
    bestTime: "Out–Abr, com clima ameno para visitar templos, pirâmides e navegar o Nilo.",
    tags: ["cultura", "navegacao", "fotografia", "deserto", "familia"],
    imageAiPrompt: "Ultra realistic editorial photo of the Pyramids of Giza at golden hour with warm desert sands and painterly sky, cinematic depth, no identifiable people.",
    imageOverrideUrl: "",
    intro: "Civilização que atravessa milênios: pirâmides, templos colossais e o Nilo como fio condutor. Uma viagem de profundidade histórica, com cruzeiros entre Luxor e Aswan e bases urbanas no Cairo.",
    highlights: [
      { title: "Pirâmides de Gizé e Esfinge", story: "Vê-las pela primeira vez do alto de um camelo, com a poeira dourada do deserto subindo no ar, é confrontar 4.500 anos de história em um único olhar. A Grande Pirâmide de Quéops — única das Sete Maravilhas do Mundo Antigo ainda de pé — tem 146 metros e blocos de 2,5 toneladas. Entrar na câmara funerária, descendo corredores estreitos, é tocar o mistério dos faraós com as próprias mãos." },
      { title: "Museu Egípcio e Grand Egyptian Museum", story: "O novo Grand Egyptian Museum em Gizé, inaugurado em 2024, é o maior museu arqueológico do mundo — abriga os 5.000 objetos do tesouro de Tutankamon expostos pela primeira vez juntos, incluindo a icônica máscara dourada. Caminhar entre múmias reais, sarcófagos esculpidos e estátuas colossais é mergulho de profundidade rara na civilização que inventou a eternidade." },
      { title: "Cruzeiro pelo Nilo entre Luxor e Aswan", story: "A bordo de uma dahabiya (veleiro tradicional de duas velas) ou cruzeiro convencional, navegar pelo Nilo é deslizar pela mesma paisagem que faraós viram: campos verdes intensos cortando o deserto, fellahin lavando roupas na margem, ibis voando ao entardecer. Templos surgem em curvas do rio como em sonho — Edfu, Kom Ombo, Esna — cada parada uma viagem no tempo." },
      { title: "Vale dos Reis e Templo de Karnak", story: "No Vale dos Reis, descer aos hipogeus de Tutankamon, Ramsés VI e Seti I, com paredes cobertas por hieróglifos e cenas do Livro dos Mortos em cores ainda vivas, é experiência mística. Karnak, em Luxor, é o maior templo religioso já construído — a Sala Hipostila com 134 colunas gigantes faz qualquer visitante se sentir formiga diante do divino." },
      { title: "Templos de Abu Simbel", story: "Os dois templos colossais esculpidos na rocha por Ramsés II em 1264 a.C. foram realocados pedra por pedra nos anos 60 para escapar das águas da represa de Aswan. Duas vezes por ano (22/fev e 22/out), o sol nasce alinhado e ilumina por minutos a estátua de Ramsés no fundo do templo — engenharia astronômica milenar. Voo curto de Aswan ou estrada com escolta torna a visita acessível." }
    ],
    beyondUsual: [
      "Visita privada às pirâmides ao amanhecer, antes da abertura ao público.",
      "Dahabiya (veleiro tradicional) em vez de cruzeiro convencional — ritmo lento e exclusivo.",
      "Encontro com egiptólogo para leitura aprofundada dos hieróglifos no Vale dos Reis."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Outubro a abril, com temperaturas amenas; evite o verão (jun–ago)." },
      { q: "Quantos dias devo ficar?", a: "10 a 12 noites para combinar Cairo, cruzeiro no Nilo e Abu Simbel." },
      { q: "Cruzeiro ou dahabiya?", a: "Dahabiyas oferecem experiência mais íntima e cuidada; cruzeiros têm logística mais simples." },
      { q: "Preciso de visto?", a: "Sim, mas o e-visa é simples e rápido para brasileiros." },
      { q: "É seguro?", a: "Sim, com itinerários bem estruturados e guias credenciados — acompanhamos a situação em tempo real." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== AMÉRICA DO SUL =====
  {
    id: "america-do-sul-patagonia",
    continent: "América do Sul",
    country: "Chile/Argentina",
    region: "Patagônia",
    slug: "america-do-sul/patagonia",
    name: "Patagônia",
    bestTime: "Out–Mar para clima mais estável; Nov–Jan dias mais longos; Abr para outono dourado.",
    tags: ["trekking", "fotografia", "montanha", "remoto", "expedicao"],
    imageAiPrompt: "Ultra realistic photo of Torres del Paine mountains in Patagonia with dramatic clouds and turquoise lake, epic landscape, no people.",
    imageOverrideUrl: "",
    intro: "O fim do mundo em sua versão mais dramática: torres de granito, geleiras azuis e silêncio que transforma. Patagônia é para quem busca grandeza.",
    highlights: [
      { title: "Torres del Paine (Chile)", story: "As três torres de granito se erguem como catedrais geológicas talhadas por geleiras há 12 milhões de anos. O vento patagônico cala qualquer conversa, e quando o sol nasce atrás delas pintando o granito de cor-de-rosa fluorescente, entende-se por que tantos viajantes choram em silêncio diante do Mirador Base — o vento, o frio nas mãos e a luz se combinam num único instante que reorganiza prioridades." },
      { title: "El Chaltén e Fitz Roy (Argentina)", story: "El Chaltén é uma vila de quatro ruas onde todos calçam botas e ninguém tem pressa — e o Fitz Roy é a razão. A caminhada até a Laguna de los Tres começa no café da manhã e termina diante de um anfiteatro de água glacial turquesa cercado por agulhas de granito que parecem desenhadas com régua. O último quilômetro é uma subida brutal de pedras soltas; o que se vê no topo dispensa fotografia." },
      { title: "Geleira Perito Moreno", story: "São 5 quilômetros de frente glacial com 70 metros de altura — um muro azul vivo que respira, range e desaba em pedaços do tamanho de prédios dentro do Lago Argentino. Caminha-se em passarelas de madeira por horas só ouvindo: o estalo distante anuncia o desabamento minutos antes de acontecer, e o som do gelo batendo na água parece um trovão subaquático." },
      { title: "Trilhas épicas (W, O, Circuito)", story: "O W são 5 dias clássicos entre vento, refúgios e três vales que cortam o maciço de Paine; o Circuito O acrescenta 4 dias pelo lado selvagem, atravessando o Passo John Gardner com vista aérea do Glaciar Grey. Carregar a própria mochila, dormir em barraca sob céu austral e acordar ao som do gelo é uma das experiências mais transformadoras que a montanha oferece no planeta." },
      { title: "Navegação por fiordes e geleiras", story: "De Punta Arenas ou Puerto Natales, embarcações pequenas levam por fiordes onde só passam navios e baleias — Balmaceda, Serrano, Pío XI. Vê-se a geleira de proa, ouve-se o silêncio que só existe a 54° de latitude sul e, com sorte, condores cruzam por cima do barco como se inspecionassem a visita." }
    ],
    beyondUsual: [
      "Trekking em áreas menos visitadas da região.",
      "Estâncias patagônicas para imersão local.",
      "Travessias em kayak por lagos glaciais."
    ],
    stays: [],
    faq: [
      { q: "Precisa de preparo físico?", a: "Para trilhas longas sim, mas há opções para todos os níveis." },
      { q: "Chile ou Argentina?", a: "Ambos são extraordinários; podemos combinar." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para combinar os highlights." },
      { q: "O clima é muito imprevisível?", a: "Sim, mas faz parte da experiência." },
      { q: "É caro?", a: "Região de custo moderado a alto, dependendo do estilo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-atacama",
    continent: "América do Sul",
    country: "Chile",
    region: "Atacama",
    slug: "america-do-sul/chile/atacama",
    name: "Atacama",
    bestTime: "Ano todo, com céus mais limpos Mar–Nov; Dez–Fev pode ter chuvas de verão.",
    tags: ["deserto", "fotografia", "bem-estar", "astronomia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Atacama desert with salt flats and volcanoes at sunset, dramatic colors, alien landscape, no people.",
    imageOverrideUrl: "",
    intro: "O deserto mais seco do mundo: paisagens marcianas, céu estrelado perfeito para astronomia e silêncio que convida à introspecção.",
    highlights: [
      { title: "Valle de la Luna", story: "A 13 km de San Pedro, dunas, anfiteatros de sal e formações de gesso esculpidas pelo vento se incendeiam ao pôr do sol — primeiro dourado, depois laranja, finalmente um violeta improvável. Sobe-se a duna mayor com sapatos cheios de areia, senta-se em silêncio com 50 outros estranhos e, quando o sol desaparece atrás da cordilheira de sal, ouve-se o deserto estalar enquanto a temperatura despenca." },
      { title: "Geysers del Tatio ao amanhecer", story: "Sai-se do hotel às 4h30 da madrugada e sobe-se a 4.320 metros no escuro, vendo as estrelas ainda intactas. Quando o sol nasce, as fumarolas de água a 86°C ganham forma — colunas brancas que sobem 10 metros no ar gelado de -10°C, criando o terceiro maior campo geotermal do mundo. Toma-se café e ovos cozidos na própria nascente vulcânica, e nada do dia seguinte se compara." },
      { title: "Salares e lagoas altiplânicas", story: "A 4.300 metros, as Lagunas Miscanti e Miñiques exibem um azul-cobalto contra vulcões cônicos cobertos de neve, com flamingos rosados em primeiro plano que parecem absurdos diante daquele cenário. No Salar de Atacama, a Laguna Chaxa abriga três espécies de flamingos andinos pescando em poças cor-de-rosa enquanto o vulcão Licancabur observa em silêncio." },
      { title: "Astronomia e céu estrelado", story: "Atacama é o lugar mais transparente do planeta para olhar o universo — é por isso que ALMA, o maior observatório do mundo, está aqui. Em tours noturnos privados com astrônomos, deita-se em espreguiçadeiras a 2.500m, vê-se a Via Láctea atravessar o céu como um rio de leite e olha-se Saturno num telescópio de 16 polegadas até reconhecer os anéis com nitidez de fotografia." },
      { title: "Oásis de San Pedro", story: "San Pedro é um vilarejo de barro caiado de branco com igreja do século XVII, ruas de terra e bicicletas alugadas em cada esquina. Almoça-se quinoa e cordeiro em pátios sombreados por pimenteiras, compra-se lã de alpaca tingida com plantas do deserto e, à noite, janta-se à luz de velas porque é regra municipal: nada de poluição luminosa para não atrapalhar o céu." }
    ],
    beyondUsual: [
      "Tours astronômicos privados com observatórios.",
      "Trilhas em áreas pouco visitadas.",
      "Experiências termais com contexto geológico."
    ],
    stays: [],
    faq: [
      { q: "Precisa de aclimatação?", a: "Sim, alguns passeios chegam a 4.000m+ de altitude." },
      { q: "Quantos dias ficar?", a: "4 a 6 noites para os principais atrativos." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, Patagônia ou Ilha de Páscoa." },
      { q: "O que levar?", a: "Roupas em camadas — amplitude térmica alta." },
      { q: "É bom para fotografia?", a: "Excepcional, especialmente ao nascer e pôr do sol." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-galapagos",
    continent: "América do Sul",
    country: "Equador",
    region: "Galápagos",
    slug: "america-do-sul/equador/galapagos",
    name: "Galápagos",
    bestTime: "Jan–Mai águas quentes para snorkel; Jun–Nov mais seco e fauna mais ativa.",
    tags: ["mergulho", "conservacao", "fotografia", "expedicao", "fauna"],
    imageAiPrompt: "Ultra realistic photo of Galapagos giant tortoise in natural habitat, volcanic landscape, unique wildlife, cinematic natural light, no people.",
    imageOverrideUrl: "",
    intro: "O laboratório da evolução: fauna sem medo, vulcões ativos e experiências que Darwin imortalizou. Galápagos é único no planeta.",
    highlights: [
      { title: "Tartarugas gigantes em seu habitat", story: "Na reserva de Santa Cruz, caminha-se entre tartarugas de 250 kg e 150 anos pastando capim em câmera lenta como se o tempo não passasse — porque para elas, não passa mesmo. O som é apenas o roçar das carapaças contra a vegetação e respirações pesadas; aproximar-se a dois metros sem que se mexam é a primeira lição de que aqui o humano é apenas mais um animal." },
      { title: "Snorkel com leões-marinhos e pinguins", story: "Em Punta Pitt ou Los Túneles, leões-marinhos juvenis nadam em volta dos snorkelistas em espirais brincalhonas, soprando bolhas no rosto e fazendo loopings de 360° a centímetros da máscara. Em poucas horas se nada também com pinguins de Galápagos — os únicos do mundo a viver na linha do equador — tubarões de recife e tartarugas verdes que cruzam tranquilas pelo lado." },
      { title: "Iguanas marinhas e terrestres", story: "São os únicos lagartos do planeta que mergulham no mar para comer algas — descem a 10 metros, ficam imóveis no fundo gelado e voltam à superfície para se aquecer em rochas pretas vulcânicas em massas de dezenas, espirrando sal pelas narinas. Vistas de perto, parecem dragões em miniatura, e sua imobilidade total a 30 cm dos pés é desconcertante." },
      { title: "Cruzeiros entre as ilhas", story: "Os melhores roteiros são em embarcações de 16 cabines que navegam à noite enquanto se janta e dorme — acorda-se a cada manhã em uma ilha diferente, com fauna distinta, lava distinta, lições distintas de evolução. Naturalistas certificados guiam dois desembarques por dia, contam histórias de Darwin no convés ao pôr do sol e fazem da viagem uma sala de aula flutuante de altíssimo nível." },
      { title: "Blue-footed boobies e fragatas", story: "Os atobás-de-patas-azuis fazem a dança de acasalamento mais cômica da natureza — levantam alternadamente os pés azul-turquesa, abrem as asas e assoviam para a fêmea com seriedade absoluta. A poucos metros, fragatas-magníficas inflam o papo escarlate até o tamanho de uma bola de basquete e ficam horas assim, parecendo balões abandonados num galho." }
    ],
    beyondUsual: [
      "Mergulho em Wolf e Darwin para tubarões-martelo.",
      "Ilhas menos visitadas para experiência mais exclusiva.",
      "Kayak e caminhadas interpretativas."
    ],
    stays: [],
    faq: [
      { q: "Cruzeiro ou base em terra?", a: "Ambos funcionam — curamos pela sua preferência." },
      { q: "Quantos dias são ideais?", a: "5 a 8 dias para diversidade de ilhas." },
      { q: "É caro?", a: "Sim, mas financia conservação extraordinária." },
      { q: "Precisa saber nadar?", a: "Ajuda para aproveitar o snorkel." },
      { q: "Os animais têm medo?", a: "Não, a aproximação é surreal." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-peru-cusco",
    continent: "América do Sul",
    country: "Peru",
    region: "Cusco & Vale Sagrado",
    slug: "america-do-sul/peru/cusco-vale-sagrado",
    name: "Cusco & Vale Sagrado",
    bestTime: "Mai–Out para clima seco; Nov–Abr mais chuvoso.",
    tags: ["cultura", "trekking", "gastronomia", "fotografia", "montanha"],
    imageAiPrompt: "Ultra realistic photo of Machu Picchu at sunrise with dramatic clouds and Andes mountains, ancient Incan citadel, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "O coração do império Inca: Machu Picchu, vale fértil e tradições vivas. Peru é história, gastronomia e paisagens andinas em uma viagem.",
    highlights: [
      { title: "Machu Picchu ao amanhecer", story: "Entrar pelo Inti Punku (Portal do Sol) às 6h da manhã e ver a cidadela emergir lentamente da neblina, com o Huayna Picchu recortando o céu atrás, é uma experiência que reorganiza qualquer ideia preconcebida sobre o que humanos foram capazes de construir em 1450. O silêncio dos primeiros 20 minutos — antes da chegada dos trens — é o luxo absoluto desta visita." },
      { title: "Vale Sagrado dos Incas", story: "Entre Pisac e Ollantaytambo o rio Urubamba serpenteia por um vale fértil onde os Incas plantavam milho cerimonial em terraços que ainda funcionam hoje. Visita-se Moray, onde anfiteatros circulares concêntricos criavam microclimas para experimentação agrícola, e as salinas de Maras — 4.500 poças brancas escalonadas no flanco da montanha desde antes do Império Inca." },
      { title: "Cusco colonial e pré-colombiano", story: "A capital inca é uma sobreposição arquitetônica única no mundo: igrejas barrocas espanholas construídas literalmente sobre paredes incas de pedras poliédricas que se encaixam sem argamassa há 600 anos. Caminha-se pela rua Loreto à noite, encosta-se a mão na pedra dos doze ângulos e sente-se a precisão impossível de uma civilização que não conhecia a roda." },
      { title: "Mercados e gastronomia peruana", story: "No mercado de San Pedro, vendedoras com tranças e polleras coloridas oferecem 3.800 variedades de batata, suco de rã (sim, viva), milho gigante de Urubamba e queijos andinos. À noite, restaurantes como Cicciolina ou MIL (de Virgilio Martínez, a 3.680m em Moray) servem cozinha andina contemporânea que faz da viagem também uma peregrinação gastronômica." },
      { title: "Trilhas incas (Salkantay, Lares)", story: "Para quem quer chegar a Machu Picchu pelos pés, a clássica Inca Trail de 4 dias atravessa três passes a 4.200m com ruínas a cada curva; a Salkantay é mais selvagem, contornando uma montanha sagrada de 6.271m; a Lares mistura caminhada com visitas a comunidades quéchuas onde se dorme com famílias e se aprende a tecer com lã de alpaca tingida em raízes." }
    ],
    beyondUsual: [
      "Acessos alternativos a Machu Picchu menos lotados.",
      "Comunidades andinas com interações autênticas.",
      "Restaurantes fora do circuito turístico em Cusco."
    ],
    stays: [],
    faq: [
      { q: "Precisa de aclimatação?", a: "Sim, Cusco está a 3.400m — recomendamos dias leves no início." },
      { q: "Qual a melhor trilha para Machu Picchu?", a: "Depende do perfil — curamos pela intensidade desejada." },
      { q: "Quantos dias ficar?", a: "5 a 8 noites para Vale Sagrado e Machu Picchu." },
      { q: "A gastronomia é boa?", a: "Extraordinária — uma das melhores do mundo." },
      { q: "É muito turístico?", a: "Pode ser — a curadoria de horários e locais faz diferença." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "america-do-sul-salar-uyuni",
    continent: "América do Sul",
    country: "Bolívia",
    region: "Salar de Uyuni",
    slug: "america-do-sul/bolivia/salar-uyuni",
    name: "Salar de Uyuni",
    bestTime: "Dez–Abr para efeito espelho (cheia); Mai–Nov seco com padrões geométricos.",
    tags: ["deserto", "fotografia", "remoto", "expedicao", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Salar de Uyuni salt flats with mirror effect reflecting clouds, vast white landscape, surreal, no people.",
    imageOverrideUrl: "",
    intro: "O maior deserto de sal do mundo: paisagens surrealistas que brincam com perspectiva e proporção. Um portal para outro planeta.",
    highlights: [
      { title: "Salar infinito com efeito espelho", story: "Na estação chuvosa, uma lâmina de 5 centímetros de água cobre os 10.582 km² do salar e transforma o chão na maior superfície refletora do planeta — o céu se duplica de tal forma que perde-se a noção de cima e baixo, e caminhar parece flutuar entre duas atmosferas. Ao pôr do sol, as nuvens incendiadas aparecem em estéreo, e o silêncio absoluto da altitude amplifica a sensação de irrealidade." },
      { title: "Ilha Incahuasi com cactos gigantes", story: "No meio do nada branco emerge uma ilha de coral fóssil coberta por cactos Trichocereus de até 10 metros de altura e mil anos de idade — vestígios de quando ali existia um lago pré-histórico. Sobe-se a trilha de pedra vulcânica até o topo, vê-se o horizonte branco de 360° e entende-se em silêncio que se está no leito seco de um oceano de sal." },
      { title: "Lagoas coloridas e flamingos", story: "Na Reserva Eduardo Avaroa, a Laguna Colorada é vermelha-sangue por causa de algas e sedimentos, com centenas de flamingos andinos rosados pescando contra esse fundo cinematográfico; a Laguna Verde é esmeralda por arsênico dissolvido, refletindo o vulcão Licancabur perfeito como um cone de neve. Cada lagoa parece pintada por um expressionista com paleta proibida." },
      { title: "Formações rochosas únicas", story: "No deserto Siloli, a Árbol de Piedra é um monólito de 7 metros esculpido pelo vento durante milênios até virar uma escultura abstrata que parece flutuar sobre a base estreita. Ao redor, o deserto Dalí — assim batizado porque os surrealismos das rochas e cores fazem pensar nas paisagens do pintor — completa um cenário que não pertence a este planeta." },
      { title: "Nascer e pôr do sol no sal", story: "Sair do hotel de sal às 5h da manhã, dirigir 40 minutos no escuro absoluto e parar no meio do nada para ver o sol nascer atrás dos Andes refletido no espelho infinito — o silêncio é tão denso que se ouvem os próprios batimentos. À noite, sem nenhuma luz num raio de 200 km, a Via Láctea desce até tocar o horizonte e se reflete duplicada no chão de água." }
    ],
    beyondUsual: [
      "Pernoite em hotel de sal dentro do salar.",
      "Expedições de múltiplos dias pela Reserva Eduardo Avaroa.",
      "Fotografia com técnicas de perspectiva forçada."
    ],
    stays: [],
    faq: [
      { q: "Quando tem o efeito espelho?", a: "Na estação chuvosa (dez–abr), quando há lâmina d'água." },
      { q: "É muito frio?", a: "À noite sim, especialmente na altitude (3.650m)." },
      { q: "Quantos dias são necessários?", a: "2 a 4 dias para o salar e lagoas." },
      { q: "Dá para combinar com Atacama?", a: "Sim, travessia clássica entre os dois." },
      { q: "Precisa de 4x4?", a: "Sim, sempre com guia local." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== EUROPA =====
  {
    id: "europa-islandia",
    continent: "Europa",
    country: "Islândia",
    region: "Ring Road",
    slug: "europa/islandia",
    name: "Islândia",
    bestTime: "Jun–Ago para sol da meia-noite e acessos; Set–Mar para aurora boreal.",
    tags: ["aurora", "fotografia", "roadtrip", "remoto", "trekking", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Iceland dramatic landscape with waterfall, volcanic terrain and aurora borealis, otherworldly scenery, no people.",
    imageOverrideUrl: "",
    intro: "Fogo e gelo em uma ilha vulcânica: cascatas monumentais, geleiras, gêiseres e a aurora boreal. Islândia é natureza em estado bruto.",
    highlights: [
      { title: "Círculo Dourado (Geysir, Gullfoss, Þingvellir)", story: "Em poucas horas atravessa-se três cenários geológicos imperdíveis: Þingvellir é a fenda visível entre as placas tectônicas euroasiática e norte-americana, onde se caminha literalmente entre dois continentes que se afastam 2 cm por ano; Geysir borbulha em silêncio até explodir 20 metros de água a 100°C a cada 6 minutos; e Gullfoss desaba em duas quedas escalonadas dentro de um cânion de basalto, lançando névoa que desenha arco-íris ao meio-dia." },
      { title: "Costa Sul (praias negras, glaciais)", story: "Reynisfjara é uma praia de areia preta vulcânica com colunas de basalto hexagonal perfeitas — formação geológica que parece feita à mão. O Atlântico bate com ondas-sneaker imprevisíveis, e a poucos minutos vê-se Skógafoss desabar 60 metros num véu denso de água gelada que se atravessa de moto-aquática até a base, ouvindo o trovão da queda multiplicado pelo penhasco." },
      { title: "Lagoa glacial Jökulsárlón", story: "Icebergs azul-elétrico do tamanho de carros se desprendem do glaciar Breiðamerkurjökull e flutuam lentamente até o mar, encalhando na Praia de Diamante — areia preta polvilhada de gelo translúcido que brilha sob o sol como cristal. Faz-se passeio de zodiac entre os blocos, escuta-se o gelo estalar e, com sorte, focas curiosas se aproximam do barco." },
      { title: "Aurora boreal (inverno)", story: "De setembro a março, em noites de céu limpo longe das luzes de Reykjavík, espera-se em silêncio até o céu começar a vibrar em verde-pálido, depois rosa, depois roxo — cortinas que dançam horizonte a horizonte com a leveza de tecido ao vento. A primeira vez é um soco no peito; mesmo cientes do fenômeno, o cérebro insiste que aquilo não pode ser real." },
      { title: "Banhos termais naturais", story: "Para além da Blue Lagoon — bonita mas turística — há lagoas escondidas como Reykjadalur, onde se caminha 1 hora montanha acima até um rio quente onde o corpo se afunda em água a 38°C com vista de vale verde e fumarolas saindo do chão. Sky Lagoon, à beira do Atlântico, é o luxo contemporâneo: ritual de 7 passos termais com vista para o oceano gelado." }
    ],
    beyondUsual: [
      "Fiordes do Oeste menos visitados.",
      "Trilhas no interior (Highlands) para experientes.",
      "Experiências termais fora do Blue Lagoon."
    ],
    stays: [],
    faq: [
      { q: "Preciso de 4x4?", a: "Para Highlands sim; Ring Road pode ser com carro comum no verão." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para a volta completa." },
      { q: "É muito caro?", a: "Sim, é um dos destinos mais caros da Europa." },
      { q: "Qual época para aurora?", a: "Set–Mar, com melhor chance em noites claras." },
      { q: "O clima é muito extremo?", a: "Imprevisível, mas faz parte da aventura." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-noruega-fiordes",
    continent: "Europa",
    country: "Noruega",
    region: "Fiordes",
    slug: "europa/noruega/fiordes",
    name: "Noruega (Fiordes)",
    bestTime: "Mai–Set para dias longos e acessos; Dez–Mar para aurora e inverno.",
    tags: ["navegacao", "fotografia", "trekking", "montanha", "roadtrip"],
    imageAiPrompt: "Ultra realistic photo of Norwegian fjord with steep cliffs, calm waters and small village, dramatic Nordic landscape, no people.",
    imageOverrideUrl: "",
    intro: "Fiordes esculpidos por geleiras, vilarejos que parecem miniaturas e uma natureza que impõe respeito. Noruega é silêncio e grandiosidade.",
    highlights: [
      { title: "Geirangerfjord e Nærøyfjord (UNESCO)", story: "Dois braços de mar penetram 15 km montanha adentro entre paredes verticais de 1.500 metros, com cachoeiras como as Sete Irmãs caindo em véus diretamente na água escura. Navega-se em ferries silenciosos ou kayaks, e o eco do remo bate nas paredes como dentro de uma catedral líquida — fazendas verticais ainda habitadas se equilibram em saliências impossíveis, alcançadas apenas por escadas de corda." },
      { title: "Preikestolen e Trolltunga", story: "Preikestolen é uma plataforma de granito perfeitamente plana de 25 x 25 metros suspensa 604 m acima do Lysefjord — caminha-se 4 horas montanha acima e o último passo até a borda exige coragem porque não há corrimão e o vazio é absoluto. Trolltunga é mais brutal: 28 km ida e volta para se sentar numa língua de pedra que se projeta 700m sobre o vazio, foto que define uma vida." },
      { title: "Ilhas Lofoten", story: "Acima do Círculo Polar Ártico, picos de granito negro mergulham direto no mar verde-esmeralda, e vilarejos de cabanas vermelhas de pescadores (rorbu) se penduram em pontes minúsculas entre ilhas. No verão, sol da meia-noite ilumina trilhas até as 2h da manhã; no inverno, aurora boreal e neve fresca cobrindo barcos. Pesca-se bacalhau, dorme-se em rorbu sobre estacas e janta-se peixe pescado horas antes." },
      { title: "Bergen e vilarejos de madeira", story: "Bryggen é o cais hanseático de Bergen — fileira de casas de madeira inclinadas, coloridas e estreitas, do século XIV, agora abrigando lojas de artesanato e cafés com bolinhos de cardamomo. Sobe-se o funicular Fløibanen até o topo do monte Fløyen para ver a cidade entre os sete fiordes, e à noite janta-se peixe fresco no Fish Market sob luz dourada de verão." },
      { title: "Estradas cênicas nacionais", story: "A Atlanterhavsveien (Estrada do Atlântico) serpenteia 8 km sobre pontes que parecem cascatas de pedra entre ilhotas batidas por tempestades — dirige-se com música baixa porque o cenário pede silêncio. A Trollstigen sobe 11 curvas em zigue-zague entre cachoeiras com mirantes vertiginosos, e a Geiranger-Trollstigen oferece talvez o roadtrip mais cinematográfico da Europa." }
    ],
    beyondUsual: [
      "Ilhas Lofoten para paisagens árticas e cabanas de pescadores.",
      "Trilhas menos frequentadas nos fiordes.",
      "Kayak em águas calmas dos fiordes."
    ],
    stays: [],
    faq: [
      { q: "Qual o melhor fiorde?", a: "Depende do que você busca — curamos pela experiência desejada." },
      { q: "Precisa dirigir?", a: "Recomendado para flexibilidade; há trens e ferries." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para combinar região dos fiordes e Lofoten." },
      { q: "É muito caro?", a: "Sim, Noruega é um dos países mais caros." },
      { q: "Tem aurora boreal?", a: "No norte (Lofoten, Tromsø), de set a mar." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-italia-toscana",
    continent: "Europa",
    country: "Itália",
    region: "Toscana",
    slug: "europa/italia/toscana",
    name: "Itália (Toscana)",
    bestTime: "Abr–Jun e Set–Out para clima e paisagens; verão pode ser cheio.",
    tags: ["gastronomia", "cultura", "roadtrip", "fotografia", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Tuscan countryside with cypress trees, rolling hills and medieval village, golden hour light, no people.",
    imageOverrideUrl: "",
    intro: "Colinas onduladas, ciprestes, vinhos e arte em cada esquina. A Toscana é a Itália em sua forma mais romântica e atemporal.",
    highlights: [
      { title: "Florença e seus tesouros", story: "A Galleria degli Uffizi guarda Botticelli, Leonardo e Caravaggio numa sequência que rearranja a história da arte ocidental, mas é a Galleria dell'Accademia, com o David de Michelangelo no fim de um corredor longo e branco, que paralisa: aos 5,17 metros de mármore vivo, com veias visíveis no antebraço, entende-se de uma vez por que o Renascimento mudou o mundo. À noite, atravessa-se o Ponte Vecchio iluminado e janta-se bistecca alla fiorentina num bistrô em Oltrarno." },
      { title: "Siena e San Gimignano", story: "A Piazza del Campo de Siena é uma concha medieval inclinada onde o Palio acontece duas vezes por ano — sentado num café às 18h, vê-se os locais conversarem em italiano cantado sob a torre del Mangia. San Gimignano é a 'Manhattan medieval', com 14 torres de pedra ainda em pé contra o céu toscano, e seus gelatos de saffron e gorgonzola na Gelateria Dondoli são considerados os melhores do mundo." },
      { title: "Vinhos do Chianti e Montalcino", story: "Entre Florença e Siena, estradas brancas serpenteiam por vinhedos geométricos e cipestres em fila como soldados. Visita-se vinícolas familiares como Castello di Ama ou Felsina onde se desce em adegas seculares, prova-se Chianti Classico Riserva direto do barril e almoça-se debaixo de pérgulas com pasta artesanal e azeite recém-prensado. Em Montalcino, prova-se Brunello em terraços com vista do Val d'Orcia." },
      { title: "Colinas do Val d'Orcia", story: "Patrimônio UNESCO de paisagem cultural, o Val d'Orcia é a Toscana das fotografias — cipestres alinhados em colinas onduladas, fazendas pintadas de ocre no fim de estradas brancas, ovelhas pastando sob luz dourada de fim de tarde. Dirige-se com janelas abertas entre Pienza (capital do pecorino), Montepulciano (Vino Nobile) e San Quirico d'Orcia, parando em qualquer trattoria para pici al ragù e Vino Nobile." },
      { title: "Gastronomia regional", story: "A Toscana é austera na cozinha: pão sem sal porque historicamente custava caro, ribollita feita com pão duro e couve toscana, pappa al pomodoro grossa de pão e tomate, bistecca alla fiorentina assada apenas com sal e azeite. Faz-se cooking class em fattorias com a nonna, aprende-se a fazer pici à mão e janta-se à mesa coletiva tudo regado a Chianti da casa — três horas de almoço sem pressa nenhuma." }
    ],
    beyondUsual: [
      "Vinícolas boutique com degustações privadas.",
      "Vilarejos medievais fora do circuito turístico.",
      "Aulas de culinária em fazendas locais."
    ],
    stays: [],
    faq: [
      { q: "Precisa de carro?", a: "Recomendado para explorar o interior com liberdade." },
      { q: "Quantos dias ficar?", a: "5 a 8 noites para equilibrar cidades e campo." },
      { q: "É bom para lua de mel?", a: "Um dos destinos mais românticos do mundo." },
      { q: "Qual a melhor época para vinhos?", a: "Set–out para colheita; primavera para paisagens verdes." },
      { q: "Florença é muito cheia?", a: "Pode ser — a curadoria de horários ajuda." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-portugal-acores",
    continent: "Europa",
    country: "Portugal",
    region: "Açores",
    slug: "europa/portugal/acores",
    name: "Portugal (Açores)",
    bestTime: "Mai–Out para clima mais estável; observação de baleias jun–set.",
    tags: ["trekking", "navegacao", "fotografia", "bem-estar", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Azores volcanic crater lake Sete Cidades with lush green landscape, dramatic clouds, no people.",
    imageOverrideUrl: "",
    intro: "Vulcões, lagoas em crateras e o Atlântico selvagem. Os Açores são a Europa remota: natureza exuberante, ritmo lento e poucas multidões.",
    highlights: [
      { title: "Lagoa das Sete Cidades", story: "No miradouro Vista do Rei, em São Miguel, abre-se aos pés uma cratera vulcânica de 12 km de circunferência abrigando duas lagoas conectadas — uma verde-esmeralda e outra azul-cobalto, separadas apenas por uma ponte estreita. A lenda diz que são as lágrimas de uma princesa e um pastor proibidos de se casar; vista do alto, a explicação geológica é menos comovente, mas o efeito é igualmente irreal." },
      { title: "Observação de baleias e golfinhos", story: "Os Açores estão entre os melhores lugares do mundo para cetáceos: cachalotes residentes o ano todo, baleias-azuis e comuns na migração de Abril-Junho, e golfinhos-roazes saltando em vagas ao redor do barco. Embarca-se em zodiacs com biólogos marinhos que escutam os cantos em hidrofones, e quando uma baleia de 15 metros emerge a 10 metros do barco, fica-se em silêncio total." },
      { title: "Trilhas vulcânicas", story: "Caminhar pela cratera do Vulcão dos Capelinhos no Faial é pisar em areia preta de uma erupção de 1957 que ainda parece quente — o farol antigo está semienterrado em cinzas. Em São Jorge, a trilha da Fajã dos Cubres desce 600m de zigue-zague por penhascos verdes até vilarejos isolados que só se acessa a pé, com lagoas costeiras e galinhas ciscando entre as casas." },
      { title: "Termas naturais", story: "Em Furnas, a Poça da Dona Beija oferece tanques termais a 39°C de água laranja-ferrugem cercados por vegetação subtropical iluminada à noite — relaxar ali sob garoa morna açoriana é uma das experiências mais sensoriais do arquipélago. Almoça-se Cozido das Furnas: ensopado de carnes e legumes cozido por 7 horas em buracos vulcânicos no chão da própria caldeira, com sabor terroso único." },
      { title: "Gastronomia atlântica", story: "Queijo São Jorge envelhecido em caves de pedra com sabor picante de pastagens ricas em iodo, atum açoriano grelhado ainda meio rosa, lapas grelhadas com manteiga e alho colhidas das poças da maré pela manhã, ananás cultivado em estufas de vidro e bolo lêvedo no café da manhã. Em pousadas convertidas de antigas adegas, janta-se com vista de cratera enquanto se bebe vinho de Pico — feito em vinhas plantadas em quadrados de pedra vulcânica." }
    ],
    beyondUsual: [
      "Ilhas menos visitadas (Flores, Corvo) para remoto real.",
      "Mergulho com tubarões-azuis.",
      "Caminhadas em trilhas pouco conhecidas."
    ],
    stays: [],
    faq: [
      { q: "Qual ilha visitar?", a: "São Miguel é a mais completa; Pico e Faial complementam bem." },
      { q: "Quantos dias ficar?", a: "5 a 10 dias para combinar 2 ou 3 ilhas." },
      { q: "É bom para trekking?", a: "Excelente — trilhas bem sinalizadas em paisagens únicas." },
      { q: "Verei baleias?", a: "Muito provável na temporada (primavera/verão)." },
      { q: "O clima é muito instável?", a: "Pode mudar rápido, mas raramente estraga o dia todo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-grecia-ilhas",
    continent: "Europa",
    country: "Grécia",
    region: "Ilhas",
    slug: "europa/grecia/ilhas",
    name: "Grécia (Ilhas)",
    bestTime: "Mai–Jun e Set–Out para clima e menos multidões; Jul–Ago é alta temporada.",
    tags: ["praia", "cultura", "gastronomia", "lua-de-mel", "navegacao"],
    imageAiPrompt: "Ultra realistic photo of Santorini white buildings with blue domes overlooking the caldera at sunset, iconic Greek island scenery, no people.",
    imageOverrideUrl: "",
    intro: "Cicládicas brancas sobre o azul do Egeu: Santorini, Mykonos e dezenas de ilhas menos conhecidas. Grécia é história, beleza e sabor mediterrâneo.",
    highlights: [
      { title: "Santorini e sua caldeira vulcânica", story: "Santorini é o resquício da maior erupção vulcânica registrada na história — uma cratera afundada onde os vilarejos brancos de Oia e Imerovigli se equilibram em penhascos de 300m sobre o Egeu azul-marinho. O pôr do sol em Oia é tão concorrido que se reserva mesa em tavernas com 24h de antecedência; a alternativa é alugar uma villa com piscina infinita no flanco da caldeira e ver o sol descer em paz com vinho Assyrtiko local." },
      { title: "Mykonos e vida noturna", story: "De dia, Mykonos é vilarejo cubista de paredes caiadas e janelas azul-marinho, com pelicanos vagando entre as ruelas estreitas de Little Venice e moinhos de vento contra o mar. À noite, vira a capital glamourosa do Mediterrâneo: clubes à beira-mar como Scorpios e Nammos com DJs internacionais, jantares pieds-dans-l'eau até 3h da manhã e atmosfera entre Ibiza e Saint-Tropez sob estrelas gregas." },
      { title: "Ilhas menos turísticas (Milos, Naxos, Paros)", story: "Milos guarda Sarakiniko — formações rochosas brancas vulcânicas que parecem uma paisagem lunar à beira-mar — e dezenas de praias só acessíveis de barco. Naxos tem o maior vilarejo das Cíclades e cordilheira interior com aldeias de montanha; Paros é o equilíbrio perfeito entre Mykonos e Milos, com a vila de Naoussa, porto pesqueiro de tavernas de polvo seco no varal e camas brancas sob videiras." },
      { title: "Gastronomia grega autêntica", story: "Saladas de tomate maduro com queijo feta inteiro por cima regado em azeite ainda verde-novo, polvo grelhado batido na pedra antes de assar para ficar tenro, moussaka de berinjela com canela e cordeiro, peixe-do-dia grelhado inteiro com limão e orégano selvagem. Termina-se com loukoumades — bolinhos de massa frita banhados em mel de tomilho — e ouzo gelado que se enturva com gelo, à beira do mar." },
      { title: "Ruínas e história antiga", story: "Em Atenas, sobe-se a Acrópole ao amanhecer (abertura 8h) para ter o Parthenon quase deserto, com luz dourada nas colunas dóricas perfeitas; o Museu da Acrópole abriga as esculturas originais com vista direta para o monumento. Em Delos (de Mykonos), passeia-se entre ruínas inteiras de uma cidade-santuário do século VII a.C.; em Knossos (Creta), os afrescos minoicos restaurados contam 3.500 anos." }
    ],
    beyondUsual: [
      "Ilhas menos visitadas como Folegandros e Sifnos.",
      "Navegação privada entre ilhas.",
      "Experiências gastronômicas em tavernas locais."
    ],
    stays: [],
    faq: [
      { q: "Santorini e Mykonos são muito cheias?", a: "Em alta temporada sim — alternativas existem." },
      { q: "Quantas ilhas visitar?", a: "2 a 3 ilhas em uma semana é um bom ritmo." },
      { q: "É bom para lua de mel?", a: "Perfeito, especialmente Santorini." },
      { q: "Como se locomover entre ilhas?", a: "Ferries e voos domésticos." },
      { q: "Qual a melhor ilha para praias?", a: "Milos e Naxos surpreendem." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-turquia",
    continent: "Europa",
    country: "Turquia",
    region: "Istambul & Capadócia",
    slug: "europa/turquia/istambul-capadocia",
    name: "Turquia (Istambul & Capadócia)",
    bestTime: "Abr–Jun e Set–Out, com clima ameno e luz ideal para balonismo na Capadócia.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of Cappadocia at sunrise with hot air balloons floating over fairy chimney rock formations, pastel sky, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Encontro entre Oriente e Ocidente: Istambul pulsa com mercados, mesquitas e o Bósforo, enquanto a Capadócia revela paisagens surreais de chaminés de fada e voos de balão ao amanhecer. Uma viagem de história, arte e atmosfera.",
    highlights: [
      { title: "Hagia Sophia, Mesquita Azul e Topkapi em Istambul", story: "Entrar na Hagia Sophia é atravessar 1.500 anos de história em silêncio — basílica bizantina do século VI convertida em mesquita, museu e mesquita de novo, com mosaicos dourados de Cristo Pantocrator coexistindo com caligrafia árabe gigante nos discos. A poucos metros, a Mesquita Azul exibe seus seis minaretes e 20 mil azulejos de Iznik; o Topkapi guarda joias dos sultões e vista do Bósforo do harém imperial." },
      { title: "Grande Bazar e Bazar das Especiarias", story: "São 4 mil lojas em 64 ruas cobertas desde 1461, e perde-se mesmo com GPS — tapetes anatólios pendurados em camadas, lojas de ouro com peças tradicionais, cerâmica iznik azul-cobalto, lâmpadas de mosaico que filtram luz colorida. No Bazar das Especiarias, montanhas piramidais de açafrão, sumagre, pétalas de rosa secas e baklavas escorrendo mel — toma-se çay (chá turco) no copinho-tulipa entre uma compra e outra." },
      { title: "Cruzeiro pelo Bósforo", story: "Embarca-se ao entardecer e navega-se entre a Europa e a Ásia em poucos minutos — palacetes otomanos de madeira (yalı) pintados de pastéis se equilibram à beira d'água, fortalezas medievais guardam estreitos onde golfinhos saltam nas hélices. Cruzar sob a Ponte do Bósforo ao pôr do sol enquanto o muezzin chama à oração de 3.000 minaretes simultaneamente é puro cinema." },
      { title: "Voo de balão sobre a Capadócia ao amanhecer", story: "Acorda-se às 4h da manhã, embarca-se num cesto de vime ainda no escuro e, conforme as queimadores aquecem o ar, sobe-se em silêncio com outros 200 balões coloridos ao redor — todos flutuando sobre vales lunares de chaminés de fada esculpidas por erosão. Quando o sol nasce atrás do Monte Erciyes e ilumina o cenário em rosa e dourado, o piloto serve champagne; é a fotografia que define a viagem." },
      { title: "Cidades subterrâneas e hotéis-caverna", story: "Em Derinkuyu, desce-se 8 andares debaixo do chão pelos túneis estreitos de uma cidade subterrânea do século VIII a.C. que abrigava 20 mil pessoas, com igrejas, escolas e adegas — fugindo de perseguições religiosas. À noite, dorme-se em hotéis escavados em rocha vulcânica em Göreme ou Uçhisar, com paredes de pedra esculpida, lareiras e janelas com vista para vales de tons rosa, amarelo e cinza." }
    ],
    beyondUsual: [
      "Roteiro gastronômico em Istambul com chef local, fora dos circuitos turísticos.",
      "Visita a ateliê de cerâmica em Avanos com mestre ceramista.",
      "Caminhada privada pelos vales da Capadócia ao pôr do sol."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para o balão na Capadócia?", a: "Abril a outubro têm maior frequência de voos; o clima de primavera e outono é o mais confortável." },
      { q: "Quantos dias devo ficar?", a: "8 a 10 noites para combinar Istambul, Capadócia e uma extensão (Éfeso ou Costa Turquesa)." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo de curta duração." },
      { q: "Como me deslocar entre cidades?", a: "Voos domésticos curtos e frequentes, com transfers privados na chegada." },
      { q: "Dá para ir com crianças?", a: "Sim, com atividades selecionadas — hotéis-caverna e balões encantam." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "europa-viena-budapeste-praga",
    continent: "Europa",
    country: "Áustria, Hungria & República Tcheca",
    region: "Europa Central",
    slug: "europa/conjugado/viena-budapeste-praga",
    name: "Viena, Budapeste & Praga (de trem)",
    bestTime: "Abr–Jun e Set–Out, com clima ameno e luz dourada nas cidades imperiais.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar", "familia"],
    imageAiPrompt: "Ultra realistic editorial photo of Charles Bridge in Prague at golden hour with Prague Castle and baroque spires in the distance, warm honey light, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Três capitais imperiais conectadas por trens confortáveis e cênicos: Viena com sua elegância musical, Budapeste banhada pelo Danúbio e suas termas, e Praga com seus telhados vermelhos e ruas medievais. Um roteiro fluido, sem aeroportos, com o ritmo de uma viagem europeia clássica.",
    highlights: [
      { title: "Ópera, palácios e cafés históricos em Viena", story: "Uma noite na Wiener Staatsoper, com camarote de veludo vermelho e dourado e orquestra interpretando Mozart em sua cidade natal, é viver a Viena imperial em alta definição. De dia, percorrem-se Schönbrunn e seus jardins barrocos, depois prova-se Sachertorte original no Café Sacher e Apfelstrudel no Café Central — cafés do século XIX onde Freud e Trotsky tomavam melange entre debates intelectuais." },
      { title: "Termas e cruzeiro pelo Danúbio em Budapeste", story: "Budapeste é a capital das termas: Széchenyi com piscinas amarelas neobarrocas ao ar livre onde se joga xadrez em tabuleiros flutuantes mesmo na neve, Gellért com mosaicos art nouveau num palácio termal. À noite, cruzeiro pelo Danúbio com o Parlamento iluminado em dourado, a Ponte das Correntes refletida na água e janta-se goulash autêntico em barcos-restaurante deslizando lentamente entre as duas margens." },
      { title: "Castelo de Praga, Ponte Carlos e Cidade Velha", story: "O Castelo de Praga é o maior complexo de castelo do mundo, com a Catedral de São Vito gótica de torres pretas afiadas e o Beco Dourado de casas miniatura coloridas onde Kafka morou. Atravessa-se a Ponte Carlos ao amanhecer (única hora vazia), entre estátuas barrocas de santos enegrecidas pelo tempo, até a Cidade Velha onde o Relógio Astronômico do século XV ainda marca as horas com procissão de apóstolos." },
      { title: "Trens diurnos em primeira classe entre as capitais", story: "Viena-Budapeste (2h30) e Budapeste-Praga (7h) em trens RegioJet ou Railjet em primeira classe — poltronas de couro reclináveis, refeições servidas no lugar, paisagens da Europa Central deslizando pela janela panorâmica: vinhedos morávios, florestas eslovacas, planícies húngaras com cegonhas em ninhos no topo de postes. Chegada direto no centro de cada capital, sem aeroporto." },
      { title: "Gastronomia centro-europeia com curadoria contemporânea", story: "Para além de Wiener Schnitzel e goulash, há restaurantes com estrela Michelin reinventando a tradição: Tian em Viena (vegetariano de alta cozinha), Costes em Budapeste (cozinha húngara contemporânea), Field em Praga (a estrela Michelin da Cidade Velha). Combina-se com tabernas seculares como Plzeňská Restaurace em Praga onde o pilsner é tirado direto do barril como há 180 anos." }
    ],
    beyondUsual: [
      "Concerto privado em palácio vienense, fora dos circuitos de turistas.",
      "Banho noturno nas termas Széchenyi em Budapeste com transfer privado.",
      "Caminhada ao amanhecer pela Ponte Carlos em Praga, antes da cidade acordar."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor ordem entre as cidades?", a: "Viena → Budapeste → Praga (ou o inverso) — trajetos curtos e cênicos de trem." },
      { q: "Quanto tempo de trem entre as cidades?", a: "Viena–Budapeste em ~2h40; Viena–Praga em ~4h, ambos em trens modernos e confortáveis." },
      { q: "Quantos dias devo ficar?", a: "10 a 14 noites para curtir cada capital com profundidade." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo até 90 dias no espaço Schengen (com ETIAS a partir de 2026)." },
      { q: "Dá para ir com crianças?", a: "Sim, é um dos melhores conjugados europeus para famílias — distâncias curtas e cidades caminháveis." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida e conte período e preferências." }
    ]
  },
  {
    id: "europa-croacia",
    continent: "Europa",
    country: "Croácia",
    region: "Costa Dálmata & Ilhas",
    slug: "europa/croacia/dalmacia",
    name: "Croácia (Costa Dálmata)",
    bestTime: "Mai–Jun e Set–Out, com mar quente, menos multidão e luz mediterrânea perfeita.",
    tags: ["navegacao", "praia", "cultura", "gastronomia", "fotografia", "familia"],
    imageAiPrompt: "Ultra realistic editorial aerial photo of Dubrovnik old town walled city with terracotta rooftops over turquoise Adriatic sea at golden hour, sailboats, cinematic Mediterranean light, no people.",
    imageOverrideUrl: "",
    intro: "Mar Adriático em tons de turquesa, cidades muradas de pedra clara e ilhas que se sucedem como pérolas. Da elegância de Dubrovnik ao charme de Hvar e Split, a Croácia é uma das viagens mais sensoriais do Mediterrâneo — ainda mais quando explorada de veleiro.",
    highlights: [
      { title: "Cidade Velha murada de Dubrovnik", story: "Caminhar os 2 km de muralhas medievais de Dubrovnik no entardecer — quando o sol bate de lado nos telhados de cerâmica laranja contra o Adriático azul-marinho — é uma das experiências mais cinematográficas da Europa (não à toa virou Porto Real em Game of Thrones). Stradun, a rua principal de mármore polido por séculos de pés, brilha à noite quando a iluminação dourada toma conta e turistas dão lugar a moradores em pizzarias escondidas." },
      { title: "Palácio de Diocleciano em Split", story: "Diferente de outras ruínas, o Palácio de Diocleciano (305 d.C.) é uma cidade viva — pessoas moram dentro das paredes romanas, há cafés nos peristilos, lojas em arcos do século IV e a Catedral é o antigo mausoléu do imperador. Toma-se café da manhã num pátio que tem 1.700 anos, ouve-se cantos klapa (canto a cappella croata) ressoando nas abóbadas e janta-se em konobas onde só se serve peixe pescado pela manhã." },
      { title: "Ilhas de Hvar, Brač e Vis", story: "Hvar é a capital glamourosa com lavandas no interior, bares de cocktails à beira-mar e o forte espanhol no topo com vista da cidade laranja contra ilhas Pakleni. Brač esconde a Praia Zlatni Rat (Chifre Dourado), língua de seixos brancos que muda de forma com o vento. Vis, ex-base militar fechada até 1989, oferece a Gruta Azul — caverna onde a luz refrata um azul-fluorescente que parece artificial." },
      { title: "Parque Nacional dos Lagos de Plitvice", story: "16 lagos turquesa em escadaria, conectados por 90 cachoeiras travertinas que mudam de cor conforme o ângulo do sol — do esmeralda ao azul-cobalto. Caminha-se 8 km em passarelas de madeira a centímetros da água cristalina onde se vê cardumes de truta nadando devagar entre algas verde-fluorescente. No outono, as folhagens vermelhas refletidas no espelho dos lagos fazem do parque um quadro impressionista." },
      { title: "Navegação privada pela Costa Dálmata", story: "Charter de 7 dias num catamarã com tripulação e chef, partindo de Split em direção sul, ancorando a cada noite numa baía diferente — Stari Grad em Hvar, Vis para mergulho no submarino afundado, ilhas Kornati selvagens sem habitantes. Almoça-se grelhado fresco no convés, banha-se em águas onde se vê o fundo a 20m, e janta-se em konobas escondidas onde só se chega de barco." }
    ],
    beyondUsual: [
      "Charter privado de veleiro ou catamarã entre as ilhas, com tripulação e chef a bordo.",
      "Jantar em konoba familiar em Hvar, longe dos circuitos turísticos.",
      "Visita a produtor de azeite e vinho na ilha de Brač com degustação privada."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Maio–junho e setembro–outubro: mar quente, clima ameno e menos multidão." },
      { q: "Quantos dias devo ficar?", a: "10 a 14 noites para combinar costa, ilhas e Plitvice." },
      { q: "Vale a pena alugar veleiro?", a: "Sim — é a maneira mais autêntica e fluida de explorar as ilhas dálmatas." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo até 90 dias (Schengen, com ETIAS a partir de 2026)." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Itália, Eslovênia ou Montenegro funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== ÁSIA =====
  {
    id: "asia-japao",
    continent: "Ásia",
    country: "Japão",
    region: "Tóquio, Kyoto & Alpes",
    slug: "asia/japao",
    name: "Japão",
    bestTime: "Mar–Mai (cerejeiras) e Out–Nov (outono); verão quente e chuvoso.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar", "trekking"],
    imageAiPrompt: "Ultra realistic photo of traditional Japanese temple in Kyoto with cherry blossoms, serene atmosphere, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Tradição e futuro convivem em harmonia: templos zen, gastronomia precisa e natureza reverenciada. Japão é sensorial em cada detalhe.",
    highlights: [
      { title: "Tóquio contemporânea", story: "Shibuya Crossing às 18h é o cruzamento mais movimentado do mundo — 3 mil pessoas atravessam em 30 segundos com sincronia coreográfica que parece ensaiada. Em Shinjuku, becos minúsculos do Omoide Yokocho servem yakitori grelhado em fumaça de carvão japonês com cerveja gelada; em Ginza, sushiya de oito lugares com chefs de avental branco preparam nigiri silenciosamente diante do cliente; e teamLab Planets transforma o corpo em parte de uma instalação digital imersiva inesquecível." },
      { title: "Kyoto tradicional e templos", story: "O templo Fushimi Inari ao amanhecer (6h) é um corredor infinito de 10 mil torii vermelho-vivo subindo a montanha em curvas — caminha-se sozinho com o som apenas dos próprios passos e cigarras. O Kinkaku-ji dourado se reflete num espelho d'água perfeito; em Arashiyama, o bambuzal sussurra no vento; e em Gion, ao entardecer, gueixas atravessam ruas de pedra em direção a chá-de-cerimônia — o Japão eterno em três horas." },
      { title: "Alpes japoneses e onsens", story: "Em Takayama e Shirakawa-go, casas de telhado triangular gassho-zukuri (mãos em oração) cobertas de neve no inverno parecem cenário de conto. Dorme-se em ryokan com tatami, futon e robe yukata, janta-se kaiseki de 10 pratos servidos no quarto pela okami e mergulha-se em onsen ao ar livre (rotenburo) com flocos de neve caindo nos ombros enquanto a água termal a 42°C aquece os ossos." },
      { title: "Gastronomia japonesa autêntica", story: "Sushi omakase no Tsukiji externo onde o itamae corta o atum vendido horas antes; ramen de tonkotsu de Hakata cremoso e cheio de umami num balcão de 8 lugares em Fukuoka; okonomiyaki montado pelo cliente sobre teppan em Osaka; kaiseki em Kyoto onde a louça muda 12 vezes ao longo do jantar para combinar com a estação. Termina-se com matchá batido por um mestre num chá-de-cerimônia silencioso de 90 minutos." },
      { title: "Cerejeiras ou outono colorido", story: "Hanami é o ritual de sentar sob as sakuras em flor (final de março a início de abril) com bentô e saquê — em Maruyama Park em Kyoto, lanternas iluminam as árvores à noite e milhares de pessoas celebram em silêncio respeitoso. No outono (novembro), os bordos do Tofuku-ji e os ginkgos amarelos do Meiji Jingu Gaien explodem em vermelho, laranja e amarelo — cinema natural que dura apenas duas semanas por ano." }
    ],
    beyondUsual: [
      "Ryokans em vilarejos remotos.",
      "Caminhadas nos Alpes Japoneses.",
      "Experiências gastronômicas fora do óbvio."
    ],
    stays: [],
    faq: [
      { q: "Quando florescem as cerejeiras?", a: "Varia por região — geralmente fim de março a início de abril." },
      { q: "Quantos dias ficar?", a: "10 a 14 dias para cobrir os clássicos." },
      { q: "Precisa falar japonês?", a: "Não, mas algumas frases ajudam fora das grandes cidades." },
      { q: "É muito caro?", a: "Custo médio a alto, mas há opções variadas." },
      { q: "O que é ryokan?", a: "Hospedagem tradicional com tatami, futon e onsens." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-india-rajastao",
    continent: "Ásia",
    country: "Índia",
    region: "Rajastão",
    slug: "asia/india/rajastao",
    name: "Índia (Rajastão)",
    bestTime: "Out–Mar para clima ameno; Abr–Jun muito quente; Jul–Set monções.",
    tags: ["cultura", "fotografia", "gastronomia", "roadtrip", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Rajasthan palace in Udaipur with lake and Aravalli mountains, golden light, colorful Indian architecture, no people.",
    imageOverrideUrl: "",
    intro: "Palácios de marajás, cores vibrantes e hospitalidade ancestral. O Rajastão é a Índia em sua versão mais cinematográfica e intensa.",
    highlights: [
      { title: "Jaipur (Cidade Rosa)", story: "Toda Jaipur foi pintada de rosa-terracota em 1876 para receber o Príncipe de Gales — caminhar pelo Bazar Johari ao entardecer é mergulhar em tecidos de seda bordados a ouro, joias de pedra colorida e elefantes pintados a mão para festivais. O Hawa Mahal, palácio de fachada de favo de mel com 953 janelas, foi construído para as mulheres reais observarem a rua sem serem vistas; o Forte Amber, no alto, exige subida de elefante por escadarias seculares." },
      { title: "Udaipur (Cidade dos Lagos)", story: "Sete lagos artificiais conectados refletem o Lake Palace, hotel branco de mármore que parece flutuar sobre a água do Lago Pichola — chega-se de barco, janta-se no terraço com músicos de sitar e dorme-se em suítes onde marajás viviam. Ao entardecer, do Sajjangarh Monsoon Palace nos morros, vê-se Udaipur inteira dourada com o reflexo das luzes do palácio na água — talvez a cidade mais romântica da Índia." },
      { title: "Jodhpur (Cidade Azul)", story: "Do alto do Mehrangarh Fort, fortaleza de pedra vermelha que se eleva 122m da rocha, vê-se Jodhpur em câmera fotográfica: milhares de casas pintadas de azul-índigo (originalmente cor da casta brâmane, depois adotada por todos por refletir calor e repelir insetos). Desce-se a pé pelas vielas labirínticas até a Sardar Market, onde se compra especiarias, prova-se mirchi vada apimentado e ouve-se o muezzin misturado a sinos hindus." },
      { title: "Jaisalmer e o deserto do Thar", story: "Jaisalmer é a 'Cidade Dourada' — uma fortaleza viva inteira esculpida em arenito amarelo onde 3.000 pessoas ainda moram dentro das muralhas medievais. Sai-se de jipe ao entardecer pelo deserto do Thar, troca-se para camelos nas dunas Sam, vê-se o sol se pôr sobre areia rosada infinita e dorme-se em camp de luxo com tendas de tecido bordado, jantar com música rajastani e céu de estrelas absoluto." },
      { title: "Palácios convertidos em hotéis", story: "Heritage hotels permitem dormir literalmente nos palácios da realeza: Taj Lake Palace flutuando em Udaipur, Rambagh Palace em Jaipur (residência do Marajá Sawai Man Singh II), Umaid Bhawan em Jodhpur (último grande palácio construído na Índia, ainda parte residência real). Aposentos com afrescos originais, jardins mughal, banhos turcos privados e serviço de mordomo de turbante — viagem no tempo com conforto contemporâneo." }
    ],
    beyondUsual: [
      "Estadias em heritage hotels fora do circuito óbvio.",
      "Experiências no deserto com camps exclusivos.",
      "Encontros com artesãos e tradições locais."
    ],
    stays: [],
    faq: [
      { q: "É difícil viajar na Índia?", a: "Com boa curadoria, é uma experiência transformadora." },
      { q: "Quantos dias ficar no Rajastão?", a: "10 a 14 dias para o circuito clássico." },
      { q: "É seguro?", a: "Sim, com os cuidados normais de viagem." },
      { q: "Vale ficar em palácios?", a: "Uma das melhores experiências do destino." },
      { q: "A comida é muito apimentada?", a: "Pode-se ajustar — há opções para todos os paladares." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-indonésia-bali",
    continent: "Ásia",
    country: "Indonésia",
    region: "Bali",
    slug: "asia/indonesia/bali",
    name: "Indonésia (Bali)",
    bestTime: "Abr–Out para clima seco; Nov–Mar estação chuvosa.",
    tags: ["cultura", "bem-estar", "praia", "gastronomia", "lua-de-mel"],
    imageAiPrompt: "Ultra realistic photo of Bali rice terraces in Ubud with palm trees and morning mist, lush tropical landscape, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Espiritualidade, arrozais e praias: Bali equilibra introspecção e aventura. Um destino para quem busca reconexão com cuidado e estética.",
    highlights: [
      { title: "Ubud e seus arrozais", story: "Os terraços de Tegallalang descem em escadaria verde-fluorescente esculpida há mais de mil anos pelo sistema subak (irrigação coletiva sagrada, patrimônio UNESCO). Caminha-se por trilhas estreitas entre os campos enquanto camponeses de chapéu cônico plantam mudas e patos correm livres comendo insetos; ao entardecer, janta-se em restaurantes suspensos sobre arrozais ouvindo gamelão balinês ao fundo." },
      { title: "Templos hindus icônicos", story: "Tanah Lot é um templo do século XVI sobre uma rocha cercada pelo mar — só se atravessa na maré baixa, e ao pôr do sol a silhueta contra o céu laranja é a foto-cartão de Bali. Uluwatu, sobre penhascos de 70m, oferece a dança kecak ao entardecer com 100 homens entoando 'cak cak cak' em transe. Em Besakih, o Templo Mãe nas encostas do vulcão Agung, descalço entre fiéis em sarong com oferendas." },
      { title: "Praias e surf no sul", story: "Uluwatu, Padang Padang e Bingin têm algumas das melhores ondas direitas do planeta — surfistas de elite voam de todo lugar para encarar tubos perfeitos sobre coral raso. Quem não surfa, observa de beach clubs cravados em penhascos (Single Fin, Ulu Cliffhouse) com cocktails ao pôr do sol; em Canggu, ambiente mais hipster com cafés de specialty coffee, surfistas casuais e festas até o amanhecer." },
      { title: "Vulcões e trilhas", story: "Sobe-se o Monte Batur (1.717m) começando às 3h da manhã com lanternas de cabeça, em fila silenciosa de 200 trekkers, para chegar ao cume no minuto em que o sol nasce atrás do Monte Agung — toma-se café da manhã com ovos cozidos no vapor das fumarolas vulcânicas. Para mais selvagem, o Monte Agung exige guia espiritual hindu, 7 horas de subida e descida no escuro com vista de Lombok ao amanhecer." },
      { title: "Bem-estar e retiros", story: "Ubud é o epicentro mundial do bem-estar — retiros de yoga 5 dias, terapias balinesas com flores frescas, cerimônias de purificação (melukat) em fontes sagradas com sacerdotes hindus, healers tradicionais (balian) que diagnosticam pelo pulso, jejum com sucos verdes e meditação ao amanhecer em pavilhões sobre o rio. Spas como Como Shambhala oferecem ayurveda em open-air pavilions cercados por selva e cantos de pássaros." }
    ],
    beyondUsual: [
      "Áreas menos turísticas no norte e leste.",
      "Retiros de bem-estar com profundidade.",
      "Experiências gastronômicas em warungs locais."
    ],
    stays: [],
    faq: [
      { q: "Bali é muito turístico?", a: "Pode ser em certas áreas — a curadoria faz diferença." },
      { q: "Quantos dias ficar?", a: "7 a 10 dias para variar praia, interior e vulcões." },
      { q: "É bom para lua de mel?", a: "Excelente, especialmente em Ubud e ilhas próximas." },
      { q: "Dá para combinar com outras ilhas?", a: "Sim, Gili, Komodo e Flores." },
      { q: "Qual a melhor área para ficar?", a: "Depende do que você busca — curamos pela experiência." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-israel",
    continent: "Ásia",
    country: "Israel",
    region: "Jerusalém, Tel Aviv & Mar Morto",
    slug: "asia/israel/terra-santa",
    name: "Israel (Terra Santa)",
    bestTime: "Mar–Mai e Set–Nov, com clima ameno para caminhadas em Jerusalém e no deserto.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of Jerusalem Old City at golden hour with Dome of the Rock glowing and honey-colored ancient walls, cinematic Mediterranean light, no people.",
    imageOverrideUrl: "",
    intro: "Camadas milenares entre Jerusalém, Tel Aviv, o Mar Morto e o deserto do Negev. Israel é uma viagem de espiritualidade, arquitetura, vinhos e gastronomia contemporânea — densa em significado e em sabor.",
    highlights: [
      { title: "Cidade Antiga de Jerusalém e seus quarteirões", story: "Dentro das muralhas otomanas de 1538, quatro quarteirões (judeu, cristão, muçulmano e armênio) coexistem em 1 km². Toca-se a pedra do Muro das Lamentações sentindo bilhetes de orações entre as fendas; segue-se a Via Dolorosa pelos 14 estações da Paixão até a Igreja do Santo Sepulcro, onde gregos, católicos e armênios partilham o mesmo altar; escuta-se o muezzin do Domo da Rocha dourado e o sino das igrejas simultaneamente — sobrepostos por 3 mil anos." },
      { title: "Tel Aviv: Bauhaus, praia e cena gastronômica", story: "Tel Aviv tem 4.000 edifícios Bauhaus dos anos 30 (a 'Cidade Branca', UNESCO) — passeia-se de bicicleta pelo Boulevard Rothschild entre cafés sob ficus e janta-se hummus no Abu Hassan em Jaffa, considerado o melhor do mundo. À noite, o Carmel Market vira street food com chefs israelenses contemporâneos (Eyal Shani, Assaf Granit), e o Mediterrâneo banha 14 km de praia urbana com vôlei até a meia-noite." },
      { title: "Mar Morto e suas paisagens lunares", story: "A 430m abaixo do nível do mar — ponto mais baixo da Terra — flutua-se sem esforço sobre água tão salgada (33%) que se lê jornal sentado, pingando para baixo. Cobre-se o corpo com lama negra rica em minerais que vendem por dezenas em spas no mundo todo, deixa-se secar ao sol e enxágua-se em águas terapêuticas que tratam psoríase e artrite. Ao redor, montanhas de calcário com tons rosa e amarelo formam paisagem de outro planeta." },
      { title: "Massada ao amanhecer", story: "Sobe-se a fortaleza herodiana de Massada (450m sobre o deserto) pelo Snake Path em 45 min no escuro absoluto, chegando ao topo no momento exato em que o sol explode atrás das montanhas da Jordânia, iluminando o Mar Morto abaixo em prata derretida. Caminha-se entre as ruínas dos palácios de Herodes e da última resistência judaica contra Roma (73 d.C.) com guia israelense que conta a história em silêncio quase místico." },
      { title: "Vinícolas e mercados (Mahane Yehuda, Carmel)", story: "Mahane Yehuda em Jerusalém, ao entardecer de sexta-feira, é um furacão sensorial: vendedores gritando preços de halva fresco, montanhas de tâmaras Medjool, peixe do dia, especiarias amontoadas em tons terra. À noite vira bar-hopping de pubs nas mesmas barracas. As vinícolas da Galileia (Galil Mountain, Tabor) e do Judean Hills produzem cabernet e syrah premiados — visita-se com almoço de queijo de cabra e azeite local." }
    ],
    beyondUsual: [
      "Tour gastronômico noturno em Tel Aviv com chef local.",
      "Caminhada interpretativa pelos quatro quarteirões da Cidade Antiga com historiador.",
      "Imersão no deserto do Negev com astronomia e silêncio."
    ],
    stays: [],
    faq: [
      { q: "É seguro viajar para Israel?", a: "Avaliamos a situação em tempo real e ajustamos roteiro conforme orientações oficiais." },
      { q: "Qual a melhor base?", a: "Combinação de Jerusalém + Tel Aviv + deserto cobre o essencial." },
      { q: "Quantos dias devo ficar?", a: "8 a 12 noites para um roteiro com profundidade." },
      { q: "Preciso de visto?", a: "Brasileiros não precisam de visto para turismo de curta duração." },
      { q: "Posso combinar com Jordânia ou Egito?", a: "Sim, montamos extensões para Petra ou Cairo." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-tailandia-camboja",
    continent: "Ásia",
    country: "Tailândia & Camboja",
    region: "Sudeste Asiático",
    slug: "asia/conjugado/tailandia-camboja",
    name: "Tailândia & Camboja (conjugado)",
    bestTime: "Nov–Mar (estação seca), com clima ameno e luz ideal para templos e praias.",
    tags: ["cultura", "gastronomia", "fotografia", "praia", "bem-estar", "familia"],
    imageAiPrompt: "Ultra realistic editorial photo of Angkor Wat at sunrise reflected in lotus pond, ancient stone towers with golden light, misty tropical atmosphere, cinematic depth, no people.",
    imageOverrideUrl: "",
    intro: "Dois universos que se completam: a Tailândia vibrante com Bangkok, Chiang Mai e suas praias paradisíacas, e o Camboja sagrado com a grandiosidade milenar de Angkor. Um conjugado que combina contraste, espiritualidade, gastronomia e descanso à beira-mar.",
    highlights: [
      { title: "Templos e mercados de Bangkok", story: "O Wat Pho abriga um Buda Reclinado de 46 metros coberto em folha de ouro com olhos e pés em madrepérola; ao lado, o Grand Palace deslumbra com telhados pontudos em mosaico de vidro colorido que reflete o sol como diamantes. À noite, Chatuchak ou os mercados flutuantes de Damnoen Saduak — sampans cheias de mangostões, durians, pad thai feito na hora num wok sobre o barco — completam o caos sensorial perfeito de Bangkok." },
      { title: "Chiang Mai e o norte com cultura lana", story: "Cercada por 117 templos, Chiang Mai tem ritmo lento que a capital perdeu. O Doi Suthep dourado oferece vista da cidade entre montanhas verdes; santuários éticos de elefantes (Elephant Nature Park) permitem alimentar e banhar paquidermes resgatados sem montaria. À noite, Sunday Walking Street fecha o centro histórico para artesanato hill-tribe, massagem por monges cegos e khao soi (curry noodle do norte) numa banca de plástico." },
      { title: "Phuket, Krabi ou Koh Samui para descanso", story: "Krabi e suas baías Phang Nga — penhascos verticais de calcário cobertos de selva emergindo de águas verde-jade onde se navega de longtail boat entre grutas escondidas com praias só acessíveis na maré certa. Koh Phi Phi para festas e Maya Bay; Koh Samui para resorts mais sofisticados. Koh Lipe é a 'Maldivas tailandesa' — água tão transparente que se vê os pés a 5 metros de profundidade." },
      { title: "Amanhecer em Angkor Wat", story: "Chega-se às 5h da manhã ainda escuro, atravessa-se a ponte de pedra sobre o fosso de 200m e senta-se diante do espelho d'água — quando o sol nasce atrás dos cinco torres de Angkor Wat (1113 d.C., maior estrutura religiosa do mundo), a silhueta se duplica no reflexo perfeito enquanto o céu passa do azul ao laranja em 20 minutos. Depois entra-se nos baixo-relevos de 800m que narram batalhas hindus em pedra esculpida." },
      { title: "Templos de Ta Prohm e Bayon em Siem Reap", story: "Ta Prohm é o templo onde a selva venceu — raízes gigantes de sumaúmas centenárias abraçam, esmagam e atravessam as paredes de arenito esculpido, criando o cenário que inspirou Tomb Raider. Bayon, no centro de Angkor Thom, exibe 216 rostos colossais sorrindo do alto de 54 torres em todas as direções — caminhar entre eles ao entardecer com poucos turistas é uma das experiências mais místicas do Sudeste Asiático." }
    ],
    beyondUsual: [
      "Aula de culinária tailandesa com chef em casa de família em Chiang Mai.",
      "Visita privada a templos secundários de Angkor com arqueólogo local.",
      "Jantar khmer contemporâneo em Siem Reap com produtores locais."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor ordem entre os países?", a: "Geralmente Tailândia primeiro (Bangkok → norte ou praias) e Camboja ao final, com voo curto até Siem Reap." },
      { q: "Quantos dias devo ficar?", a: "12 a 16 noites para combinar cidades, cultura, templos e praias com tranquilidade." },
      { q: "Preciso de visto?", a: "Tailândia: brasileiros não precisam para turismo curto. Camboja: e-visa simples e rápido." },
      { q: "Qual a melhor época?", a: "Novembro a março, com clima seco e temperaturas amenas." },
      { q: "Dá para ir com crianças?", a: "Sim, é um dos melhores conjugados da Ásia para famílias — variedade de experiências e bom conforto." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "asia-maldivas",
    continent: "Ásia",
    country: "Maldivas",
    region: "Oceano Índico",
    slug: "asia/maldivas",
    name: "Maldivas",
    bestTime: "Nov–Abr (estação seca), com mar calmo, sol pleno e visibilidade ideal para mergulho.",
    tags: ["praia", "lua-de-mel", "mergulho", "bem-estar", "remoto", "navegacao"],
    imageAiPrompt: "Ultra realistic aerial photo of Maldives atoll with overwater bungalows over crystal-clear turquoise lagoon and white sandbar, coral reefs, golden hour, editorial travel style, no people.",
    imageOverrideUrl: "",
    intro: "Atóis de areia branca sobre lagoas de turquesa irreal, bangalôs sobre as águas e silêncio absoluto. Maldivas é o destino-ícone do descanso de luxo — perfeito para luas de mel, retiros e imersões em vida marinha.",
    highlights: [
      { title: "Bangalôs sobre as águas em resorts privados", story: "Acorda-se com a luz refletida do oceano dançando no teto de madeira, abre-se a porta corrediça do quarto para uma plataforma privada e desce-se a escada direto na laguna turquesa onde se vê o próprio fundo. Resorts como Soneka Jani, Cheval Blanc Randheli ou Velaa oferecem mordomo 24h, jantar romântico na praia com mesa iluminada por velas na areia e villa pieds-dans-l'eau que define o luxo tropical contemporâneo." },
      { title: "Mergulho e snorkel em recifes de coral", story: "As Maldivas têm 26 atóis com 2.000 recifes — basta sair da escada do bangalô e nadar 20 metros para ver tartarugas-verdes pastando, peixe-papagaio coloridos, moréias e cardumes de jacks. Sites como Banana Reef em North Malé ou Maaya Thila têm visibilidade de 30m+ e biodiversidade rivalizando com Galápagos; cruzeiros de mergulho de uma semana percorrem manta points, swim-throughs em paredes verticais e mergulhos noturnos com tubarões-de-recife." },
      { title: "Encontros com tubarões-baleia e mantas", story: "No Atol Baa (UNESCO), a baía de Hanifaru concentra plâncton em correntes específicas atraindo dezenas de mantas oceânicas com até 7m de envergadura — nada-se ao lado delas em snorkel enquanto fazem barrel rolls para se alimentar. De agosto a novembro, tubarões-baleia de 12 metros aparecem para se alimentar do mesmo plâncton; nadar ao lado do maior peixe do mundo, completamente inofensivo, é desconcertante e inesquecível." },
      { title: "Spas com curadoria over-water", story: "Spas como o COMO Shambhala em Maalifushi ou o spa do Six Senses Laamu são pavilhões de madeira sobre a laguna com piso de vidro através do qual se vê corais e peixes durante a massagem. Tratamentos com óleos balineses, terapias ayurvédicas com médicos indianos residentes, yoga ao amanhecer em decks com vista de 360° de oceano — bem-estar elevado ao luxo absoluto." },
      { title: "Jantares privados em ilhotas desertas", story: "Resorts levam casais de speedboat até bancos de areia desertos no meio do oceano — uma ilhota que aparece e desaparece com a maré, onde aguarda mesa para dois iluminada por lanternas, champagne no balde, chef preparando lagosta na grelha sob estrelas. Sem outras pessoas em raio de quilômetros, apenas o som de ondas batendo na areia branca; experiência cinematográfica de uma vida só." }
    ],
    beyondUsual: [
      "Charter de iate privado entre atóis remotos, fora do circuito de resorts.",
      "Imersão com biólogo marinho em projeto de conservação de corais.",
      "Cinema na areia ou jantar em sandbank ao pôr do sol, com chef privado."
    ],
    stays: [],
    faq: [
      { q: "Qual a melhor época para visitar?", a: "Novembro a abril, com mar calmo e clima seco." },
      { q: "Quantos dias devo ficar?", a: "7 a 10 noites para curtir sem pressa; ideal combinar dois resorts ou ilhas." },
      { q: "Preciso de visto?", a: "Não, brasileiros recebem visto na chegada." },
      { q: "É bom para mergulhadores?", a: "Sim, é um dos melhores destinos do mundo para mergulho e snorkel." },
      { q: "Dá para combinar com outros destinos?", a: "Sim, conjugados com Dubai, Sri Lanka ou Sudeste Asiático funcionam muito bem." },
      { q: "Como criar meu roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== OCEANIA =====
  {
    id: "oceania-nova-zelandia",
    continent: "Oceania",
    country: "Nova Zelândia",
    region: "Ilhas Norte e Sul",
    slug: "oceania/nova-zelandia",
    name: "Nova Zelândia",
    bestTime: "Nov–Mar (verão) para trekking e clima; Abr–Mai para outono; Jun–Ago para esqui.",
    tags: ["trekking", "roadtrip", "fotografia", "remoto", "expedicao"],
    imageAiPrompt: "Ultra realistic photo of New Zealand Milford Sound with dramatic mountains and waterfalls, pristine wilderness, cinematic light, no people.",
    imageOverrideUrl: "",
    intro: "Paisagens que parecem cenário de filme: fiordes, montanhas e florestas intocadas. Nova Zelândia é aventura e contemplação em perfeito equilíbrio.",
    highlights: [
      { title: "Milford Sound e fiordes", story: "Atravessa-se a estrada Milford Road por florestas tropicais de selva neozelandesa, túneis cavados na rocha e mirantes de cascatas até desembocar no fiorde mais espetacular do planeta: Milford Sound, com paredes verticais de granito de 1.200m mergulhando direto no mar negro, cascatas como Stirling Falls (146m) caindo do nada e focas-de-pelo descansando em rochas. Em dias chuvosos — frequentes — milhares de cachoeiras temporárias surgem nas paredes simultaneamente." },
      { title: "Queenstown (capital da aventura)", story: "Cravada às margens do Lago Wakatipu com vista para o cordão The Remarkables, Queenstown é onde se inventou o bungee jumping em 1988 (Kawarau Bridge, 43m). Lança-se em jet boats por cânions estreitos a 80 km/h, salta-se de paraquedas vendo Aoraki/Mount Cook ao fundo, ou simplesmente toma-se vinho Pinot Noir de Central Otago num terraço com vista do lago glacial — adrenalina e paisagem em equilíbrio raro." },
      { title: "Rotorua e cultura Maori", story: "Cheira a enxofre na cidade inteira por causa da atividade geotérmica — gêiseres como o Pohutu disparam 30m no ar a cada hora em Te Puia, piscinas borbulhantes em Wai-O-Tapu pintam o chão com tons fluorescentes de laranja, verde e amarelo. À noite, hangi tradicional Maori — refeição cozida durante horas em buracos com pedras vulcânicas aquecidas, seguida de danças haka que estremecem o chão e a alma." },
      { title: "Trilhas Great Walks", story: "A Routeburn Track atravessa em 3 dias o coração dos Alpes do Sul entre Mount Aspiring e Fiordland National Park, com vista de vales glaciais e camas em hut de montanha com fogão a lenha. A Milford Track de 4 dias é a 'finest walk in the world' segundo o Spectator de 1908; a Kepler e a Abel Tasman completam o quinteto dos sonhos para trekkers — paisagens variando de florestas subtropicais a campos alpinos em poucas horas." },
      { title: "Hobbiton e cenários de cinema", story: "Em Matamata, na Ilha Norte, o set original do Condado de Hobbit foi mantido permanente após Peter Jackson rodar O Hobbit — caminha-se entre 44 buracos coloridos de hobbit com chaminés fumegantes, jardins floridos cuidadosamente mantidos e termina-se com cerveja no Green Dragon Inn com fogo crepitante na lareira. Para fãs, é peregrinação; para qualquer um, é a paisagem rural mais encantadora da Nova Zelândia." }
    ],
    beyondUsual: [
      "Great Walks menos conhecidas.",
      "Região da Costa Oeste na Ilha Sul.",
      "Experiências Maori com profundidade cultural."
    ],
    stays: [],
    faq: [
      { q: "Ilha Norte ou Sul?", a: "Ambas são extraordinárias — podemos combinar." },
      { q: "Quantos dias ficar?", a: "2 a 3 semanas para fazer justiça ao destino." },
      { q: "Precisa de carro?", a: "Altamente recomendado para flexibilidade." },
      { q: "É seguro dirigir?", a: "Sim, excelente infraestrutura." },
      { q: "É muito caro?", a: "Custo médio a alto, mas vale cada centavo." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "oceania-polinesia-francesa",
    continent: "Oceania",
    country: "Polinésia Francesa",
    region: "Taiti & Bora Bora",
    slug: "oceania/polinesia-francesa",
    name: "Polinésia Francesa",
    bestTime: "Mai–Out para clima seco; Nov–Abr mais quente e chuvoso.",
    tags: ["praia", "lua-de-mel", "mergulho", "bem-estar", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Bora Bora overwater bungalows with turquoise lagoon and Mount Otemanu, tropical paradise, golden light, no people.",
    imageOverrideUrl: "",
    intro: "O paraíso em sua forma mais icônica: bangalôs sobre águas cristalinas, vulcões emersos e o ritmo mana. Polinésia é o sonho que se realiza.",
    highlights: [
      "Bora Bora e sua lagoa",
      "Moorea selvagem e autêntica",
      "Cultura polinésia",
      "Mergulho e vida marinha",
      "Pores do sol sobre o Pacífico"
    ],
    beyondUsual: [
      "Ilhas menos visitadas como Huahine e Rangiroa.",
      "Mergulho com tubarões e raias em Fakarava.",
      "Experiências culturais com famílias locais."
    ],
    stays: [],
    faq: [
      { q: "Só Bora Bora vale a pena?", a: "Outras ilhas surpreendem — Moorea é mais autêntica." },
      { q: "É muito caro?", a: "Sim, um dos destinos mais caros do mundo." },
      { q: "Quantos dias ficar?", a: "7 a 12 dias para combinar 2 ou 3 ilhas." },
      { q: "É bom para lua de mel?", a: "O sonho de lua de mel para muitos casais." },
      { q: "Precisa saber nadar?", a: "Ajuda para snorkel e atividades aquáticas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "oceania-australia",
    continent: "Oceania",
    country: "Austrália",
    region: "Costa Leste & Outback",
    slug: "oceania/australia",
    name: "Austrália",
    bestTime: "Set–Nov e Mar–Mai para clima ameno; verão quente; inverno para o norte.",
    tags: ["praia", "roadtrip", "mergulho", "fotografia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of Australian Uluru rock formation at sunset, vast red outback landscape, dramatic colors, no people.",
    imageOverrideUrl: "",
    intro: "Um continente em um país: recifes de corais, outback vermelho e cidades cosmopolitas. Austrália é diversidade em escala continental.",
    highlights: [
      "Grande Barreira de Corais",
      "Sydney e Melbourne",
      "Uluru e Outback",
      "Great Ocean Road",
      "Fauna única (cangurus, coalas)"
    ],
    beyondUsual: [
      "Kimberley e norte remoto.",
      "Mergulho em Ningaloo (menos conhecido que a Barreira).",
      "Roteiros de Outback com conforto."
    ],
    stays: [],
    faq: [
      { q: "Quanto tempo preciso?", a: "Mínimo 2 semanas; 3 a 4 para mais diversidade." },
      { q: "É muito caro?", a: "Custo médio a alto, especialmente hospedagem." },
      { q: "Precisa de carro?", a: "Para roteiros de roadtrip sim; nas cidades não." },
      { q: "A Barreira de Corais está bem?", a: "Áreas protegidas ainda são extraordinárias." },
      { q: "É seguro?", a: "Muito, apesar da fama da fauna perigosa." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== MINAS GERAIS =====
  {
    id: "brasil-minas-gerais-serra-do-cipo",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/serra-do-cipo",
    name: "Serra do Cipó",
    bestTime: "Abr–Set (seca) para trilhas; Out–Mar para cachoeiras cheias.",
    tags: ["natureza", "trekking", "fotografia", "aventura", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Serra do Cipó, cerrado plateau with quartzite cliffs and waterfall, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "Cachoeiras, cânions e cerrado de altitude a poucas horas de Belo Horizonte. Trilhas com curadoria e pousadas-charme para desacelerar.",
    highlights: [
      "Cachoeira da Farofa e Cânion das Bandeirinhas",
      "Cachoeira do Tabuleiro (vizinhança)",
      "Trilhas pelo Parque Nacional",
      "Pôr do sol no alto do Cipó",
      "Gastronomia mineira em pousadas-fazenda"
    ],
    beyondUsual: [
      "Trilhas guiadas com curadoria fora dos circuitos massificados.",
      "Banho de cachoeira em horários silenciosos.",
      "Combinações com Inhotim e Cidades Históricas."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias ficar?", a: "3 a 4 noites para conhecer com tempo." },
      { q: "Vai bem com crianças?", a: "Sim, com trilhas mais curtas e cachoeiras acessíveis." },
      { q: "Combina com Inhotim?", a: "Sim, ótima dupla em poucos dias." },
      { q: "Precisa de guia?", a: "Recomendado para as trilhas mais longas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-serra-da-canastra",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/serra-da-canastra",
    name: "Serra da Canastra",
    bestTime: "Mai–Set (seca) para trilhas e estradas; Out–Mar para cachoeiras cheias.",
    tags: ["natureza", "trekking", "gastronomia", "remoto", "fotografia"],
    imageAiPrompt: "Ultra realistic photo of Casca d'Anta waterfall in Serra da Canastra, vast plateau, soft morning light, no people.",
    imageOverrideUrl: "",
    intro: "Berço do Rio São Francisco e do melhor queijo do Brasil. Paisagem aberta, cachoeiras imensas e fazendas centenárias com curadoria.",
    highlights: [
      "Cachoeira Casca d'Anta (alto e baixo)",
      "Nascente do Rio São Francisco",
      "Rota do Queijo Canastra com produtores selecionados",
      "Trilhas e cânions do parque nacional",
      "Pôr do sol no alto da chapada"
    ],
    beyondUsual: [
      "Visitas privativas a queijarias premiadas.",
      "Cavalgadas em fazendas históricas.",
      "Fotografia de cerrado com guias naturalistas."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo para Belo Horizonte ou Ribeirão Preto e road trip." },
      { q: "Quantos dias?", a: "4 a 5 noites é o ideal." },
      { q: "Tem queijo o ano inteiro?", a: "Sim, mas a estação seca facilita as visitas em estrada de terra." },
      { q: "É bom para fotografia?", a: "Excelente: paisagens abertas, fauna e cachoeiras." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-estrada-real",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/estrada-real",
    name: "Estrada Real",
    bestTime: "O ano inteiro; Abr–Set tem clima mais ameno e seco.",
    tags: ["cultura", "gastronomia", "natureza", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of a cobblestone street in Tiradentes, Minas Gerais, baroque church, warm afternoon light, no people.",
    imageOverrideUrl: "",
    intro: "A rota colonial do ouro: Tiradentes, São João del-Rei, Ouro Preto, Diamantina e mais. Roteiros lentos por cidades-museu com pousadas autorais.",
    highlights: [
      "Tiradentes e São João del-Rei",
      "Ouro Preto e Mariana",
      "Diamantina e Serro",
      "Gastronomia mineira e cachaçarias",
      "Trem da Maria Fumaça e ateliês de arte"
    ],
    beyondUsual: [
      "Acesso a casas históricas particulares.",
      "Jantares com chefs mineiros premiados.",
      "Trilhas curtas conectando vilarejos."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias para Estrada Real?", a: "5 a 8 noites combinando 3 a 4 cidades." },
      { q: "Precisa de carro?", a: "Sim, ou transfer privativo entre cidades." },
      { q: "Vai bem com casais?", a: "Sim, é um dos roteiros mais charmosos do Brasil." },
      { q: "Combina com Serra do Cipó/Inhotim?", a: "Perfeitamente." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-cavernas-do-peruacu",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/cavernas-do-peruacu",
    name: "Parque Nacional Cavernas do Peruaçu",
    bestTime: "Mai–Set (seca) para acesso pleno; chuvas dificultam estradas.",
    tags: ["natureza", "expedicao", "fotografia", "remoto", "aventura"],
    imageAiPrompt: "Ultra realistic photo of enormous limestone cave entrance at Peruaçu, dramatic light beams, no people.",
    imageOverrideUrl: "",
    intro: "Cavernas catedrais, arte rupestre e o cerrado mineiro mais selvagem. Patrimônio natural pouco visitado e absolutamente cinematográfico.",
    highlights: [
      "Gruta do Janelão (clarabóias gigantes)",
      "Lapa do Boquete (arte rupestre)",
      "Gruta dos Brejões",
      "Cânion do Peruaçu",
      "Cerrado e fauna do Norte de Minas"
    ],
    beyondUsual: [
      "Guias especializados em arqueologia.",
      "Saídas fotográficas dedicadas à luz das clarabóias.",
      "Combinação com Grande Sertão Veredas."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo até Montes Claros e road trip de cerca de 3h." },
      { q: "Precisa estar em forma?", a: "Condicionamento médio; trilhas até 3h." },
      { q: "Quantos dias?", a: "3 a 4 noites." },
      { q: "Tem boa hospedagem?", a: "Pousadas-charme em Januária e Itacarambi." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-minas-gerais-cidades-historicas-inhotim",
    continent: "Brasil",
    country: "Brasil",
    region: "Minas Gerais",
    slug: "brasil/minas-gerais/cidades-historicas-inhotim",
    name: "Cidades Históricas & Inhotim",
    bestTime: "O ano inteiro; Abr–Set é mais seco.",
    tags: ["cultura", "gastronomia", "fotografia", "bem-estar"],
    imageAiPrompt: "Ultra realistic photo of Ouro Preto colonial baroque town and contemporary art pavilion in tropical garden (Inhotim mood), warm light, no people.",
    imageOverrideUrl: "",
    intro: "Barroco mineiro e arte contemporânea no mesmo roteiro: Ouro Preto, Mariana e o Instituto Inhotim, um dos maiores museus a céu aberto do mundo.",
    highlights: [
      "Inhotim: pavilhões de arte em jardim botânico",
      "Ouro Preto e Mariana",
      "Congonhas e os Profetas de Aleijadinho",
      "Gastronomia mineira premiada",
      "Pousadas-boutique em casarões coloniais"
    ],
    beyondUsual: [
      "Visitas guiadas privativas em Inhotim.",
      "Encontros com artistas em ateliês de Ouro Preto.",
      "Jantares autorais com vinhos mineiros."
    ],
    stays: [],
    faq: [
      { q: "Inhotim merece quantos dias?", a: "2 dias é o ideal para curtir sem pressa." },
      { q: "Quantos dias no total?", a: "5 a 7 noites combinando arte e história." },
      { q: "Pode ir com crianças?", a: "Sim, Inhotim é encantador para todas as idades." },
      { q: "Combina com Estrada Real?", a: "É parte dela — perfeito." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== TOCANTINS — CANTÃO =====
  {
    id: "brasil-tocantins-parque-cantao",
    continent: "Brasil",
    country: "Brasil",
    region: "Tocantins",
    slug: "brasil/tocantins/parque-cantao",
    name: "Parque Estadual do Cantão",
    bestTime: "Jun–Out (seca) para praias de rio e fauna; Nov–Mai (cheia) para igapós.",
    tags: ["natureza", "navegacao", "fotografia", "remoto", "conservacao"],
    imageAiPrompt: "Ultra realistic photo of Parque do Cantão, flooded forest with pink dolphin and mirror waters at sunset, no people.",
    imageOverrideUrl: "",
    intro: "Encontro entre Amazônia, Cerrado e Pantanal: lagos, igapós e fauna abundante em um dos parques mais bem preservados do Brasil.",
    highlights: [
      "Navegação em lagos e furos",
      "Observação de botos cor-de-rosa",
      "Pesca esportiva responsável (pirarucu, tucunaré)",
      "Aves e jacarés em alta densidade",
      "Praias de rio na seca"
    ],
    beyondUsual: [
      "Pousada de selva com guias locais.",
      "Saídas noturnas para focagem de fauna.",
      "Roteiros fotográficos dedicados."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Palmas ou Araguaína e transfer a Caseara." },
      { q: "Quantos dias?", a: "3 a 5 noites." },
      { q: "Vai bem para famílias?", a: "Sim, com guias e logística cuidada." },
      { q: "Combina com Jalapão?", a: "Sim, é o complemento perfeito." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== MATO GROSSO — extras =====
  {
    id: "brasil-mato-grosso-tres-ecossistemas",
    continent: "Brasil",
    country: "Brasil",
    region: "Mato Grosso",
    slug: "brasil/mato-grosso/tres-ecossistemas",
    name: "Roteiro dos Três Ecossistemas",
    bestTime: "Mai–Out (seca) para fauna no Pantanal e estradas; Nov–Mar para paisagens verdes.",
    tags: ["safari", "fotografia", "natureza", "expedicao", "conservacao"],
    imageAiPrompt: "Photo composition of Pantanal wetlands, Cerrado plateau and Amazon rainforest river, Mato Grosso, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "Em uma só viagem, três Brasis: o cerrado da Chapada dos Guimarães, o Pantanal Norte (Porto Jofre) e a Amazônia meridional do Cristalino. Itinerário-assinatura da Create Travel.",
    highlights: [
      "Chapada dos Guimarães: cerrado e mirantes",
      "Pantanal Norte: safáris de onça",
      "Cristalino: Amazônia primária",
      "Voos internos curtos e logística cuidada",
      "Fotografia de fauna e paisagem"
    ],
    beyondUsual: [
      "Guia naturalista acompanhando todo o roteiro.",
      "Saídas privativas para fotografia.",
      "Imersão cultural com comunidades locais."
    ],
    stays: ["caiman-pantanal"],
    faq: [
      { q: "Quantos dias preciso?", a: "Mínimo 10 a 12 noites." },
      { q: "Qual a melhor época?", a: "Jul–Out para fauna no Pantanal." },
      { q: "Vai bem para fotógrafos?", a: "É um dos melhores roteiros do mundo para safári." },
      { q: "Tem conforto?", a: "Sim, lodges de referência em cada bioma." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-mato-grosso-serra-do-roncador",
    continent: "Brasil",
    country: "Brasil",
    region: "Mato Grosso",
    slug: "brasil/mato-grosso/serra-do-roncador",
    name: "Serra do Roncador",
    bestTime: "Mai–Set (seca) para trilhas e estradas; Nov–Mar para cachoeiras cheias.",
    tags: ["natureza", "expedicao", "remoto", "trekking", "fotografia"],
    imageAiPrompt: "Ultra realistic photo of Serra do Roncador, dramatic red rocky mountains over cerrado plains, mystical atmosphere, no people.",
    imageOverrideUrl: "",
    intro: "Cerrado dramático, cachoeiras isoladas e energia única na fronteira entre Mato Grosso e Goiás. Aldeia Velha, Vale do Sol Nascente e mistérios indígenas Xavante.",
    highlights: [
      "Cachoeira do Segredo e Vale do Sol Nascente",
      "Mirantes da Serra Azul",
      "Trilhas no cerrado",
      "Vivências respeitosas com cultura Xavante",
      "Céu noturno extraordinário"
    ],
    beyondUsual: [
      "Roteiros com guias locais experientes.",
      "Combinação com Chapada dos Veadeiros.",
      "Saídas fotográficas dedicadas."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Brasília ou Cuiabá e road trip até Aragarças/Barra do Garças." },
      { q: "Quantos dias?", a: "5 a 7 noites." },
      { q: "É para iniciantes?", a: "Trilhas leves a moderadas." },
      { q: "Tem boa hospedagem?", a: "Pousadas-charme em Aragarças e cidades vizinhas." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== AMAZÔNIA — extras =====
  {
    id: "brasil-amazonia-mamiraua-uacari",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/mamiraua-uacari",
    name: "Mamirauá & Pousada Uacari",
    bestTime: "Mai–Jul (cheia) para canoagem em igapós; Set–Nov (seca) para trilhas e fauna concentrada.",
    tags: ["conservacao", "fotografia", "navegacao", "remoto", "expedicao", "birdwatching"],
    imageAiPrompt: "Ultra realistic photo of Mamirauá floating lodge on stilts over a black water river in flooded Amazon at sunrise, no people.",
    imageOverrideUrl: "",
    intro: "A Reserva de Mamirauá é a maior unidade de conservação de várzea do mundo. A Pousada Uacari, flutuante, é referência em ecoturismo, pesquisa e observação de fauna — incluindo onça, primatas raros e centenas de aves.",
    highlights: [
      "Roteiro de ecoturismo (4–5 noites)",
      "Observação de aves com guias especializados",
      "Observação de onças-pintadas em copas de árvores",
      "Expedição fotográfica dedicada (luz e fauna)",
      "Canoagem silenciosa em igapós"
    ],
    beyondUsual: [
      "Encontros com pesquisadores do Instituto Mamirauá.",
      "Vivências com comunidades ribeirinhas parceiras.",
      "Saídas noturnas para fauna e céu amazônico."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Tefé (via Manaus) e voadeira até a pousada." },
      { q: "Quantos dias?", a: "4 a 7 noites conforme foco." },
      { q: "Vejo onça-pintada?", a: "Na cheia, a chance de avistamento em árvores é alta — sem garantias." },
      { q: "Tem conforto?", a: "Sim, bangalôs flutuantes simples e charmosos, com energia solar." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-katerre",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/katerre",
    name: "Expedições Katerre (barco no Amazonas)",
    bestTime: "O ano inteiro; cada estação revela um rio diferente.",
    tags: ["navegacao", "expedicao", "fotografia", "conservacao", "remoto"],
    imageAiPrompt: "Ultra realistic photo of traditional wooden Amazon riverboat with multiple decks navigating Rio Negro at sunset, no people visible.",
    imageOverrideUrl: "",
    intro: "O barco Katerre é uma forma de viver a Amazônia em movimento: cabines confortáveis, navegação por Rio Negro, Anavilhanas e afluentes pouco visitados — com curadoria e ritmo lento.",
    highlights: [
      "Navegações por Rio Negro e Anavilhanas",
      "Roteiros de 4 a 8 noites a bordo",
      "Trilhas, focagem noturna e canoagem",
      "Encontros com comunidades ribeirinhas",
      "Gastronomia regional em alto nível"
    ],
    beyondUsual: [
      "Saídas exclusivas para fotografia.",
      "Programas temáticos (aves, etnografia, conservação).",
      "Charters privativos para grupos pequenos."
    ],
    stays: [],
    faq: [
      { q: "É indicado para famílias?", a: "Sim, com cabines amplas e atividades para diferentes idades." },
      { q: "Quantos dias?", a: "Mínimo 4 noites a bordo." },
      { q: "Posso combinar com lodge?", a: "Sim, Anavilhanas é o par ideal." },
      { q: "Pega muito mosquito?", a: "No Rio Negro (águas pretas) é baixíssima a incidência." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-kaiara-alter-do-chao",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazônia",
    slug: "brasil/amazonia/kaiara-alter-do-chao",
    name: "Expedição Kaiara — Alter do Chão",
    bestTime: "Ago–Jan (águas baixas) para praias de rio do Tapajós.",
    tags: ["navegacao", "expedicao", "fotografia", "bem-estar", "remoto"],
    imageAiPrompt: "Ultra realistic photo of expedition boat anchored near Alter do Chão white sand beaches and turquoise Tapajós river, no people.",
    imageOverrideUrl: "",
    intro: "A bordo do Kaiara, navegamos por Tapajós e Arapiuns: praias desertas, comunidades ribeirinhas, florestas e o melhor pôr do sol da Amazônia.",
    highlights: [
      "Navegação Tapajós–Arapiuns (4 a 6 noites)",
      "Ilha do Amor e praias desertas",
      "Floresta Nacional do Tapajós",
      "Comunidades ribeirinhas com vivências autênticas",
      "Pôr do sol e luas no rio"
    ],
    beyondUsual: [
      "Saídas em canoa nas comunidades.",
      "Yoga e bem-estar a bordo.",
      "Roteiros fotográficos privativos."
    ],
    stays: [],
    faq: [
      { q: "Como chegar?", a: "Voo a Santarém e transfer para Alter do Chão." },
      { q: "Quando é melhor?", a: "Set–Dez para praias e águas mais transparentes." },
      { q: "Posso fazer só passeio diário?", a: "Sim, mas o melhor é embarcar por algumas noites." },
      { q: "Combina com Mamirauá ou Anavilhanas?", a: "Sim, com voos internos." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== NORTE — FESTIVAIS FOLCLÓRICOS =====
  {
    id: "brasil-amazonia-festival-parintins",
    continent: "Brasil",
    country: "Brasil",
    region: "Amazonas",
    slug: "brasil/amazonia/festival-parintins",
    name: "Festival Folclórico de Parintins",
    bestTime: "Últimos 3 dias de junho (datas oficiais variam).",
    tags: ["cultura", "fotografia", "expedicao", "navegacao", "festivais-folcloricos"],
    imageAiPrompt: "Ultra realistic photo of Parintins Folklore Festival arena, vibrant Boi Bumbá costumes in red and blue, fireworks above river island, evening, festive Amazonian atmosphere.",
    imageOverrideUrl: festivalParintinsImg,
    intro: "Um dos maiores espetáculos folclóricos do mundo: a disputa entre Bois Garantido e Caprichoso, em Parintins, no meio do Rio Amazonas. Logística cuidada e ingressos garantidos.",
    highlights: [
      "Três noites de apresentação no Bumbódromo",
      "Hospedagem em barcos-hotel ou casas selecionadas",
      "Vivências com brincantes e bastidores",
      "Navegação pelo Rio Amazonas",
      "Combinação com Manaus e Anavilhanas"
    ],
    beyondUsual: [
      "Bastidores dos currais Garantido e Caprichoso.",
      "Camarotes e ingressos premium.",
      "Pacote fotográfico oficial."
    ],
    stays: [],
    faq: [
      { q: "Quando acontece?", a: "Nos últimos 3 dias de junho — datas oficiais variam." },
      { q: "Como chegar?", a: "Voo a Manaus e fretado/cruzeiro a Parintins." },
      { q: "Preciso reservar com antecedência?", a: "Sim, com no mínimo 6 a 9 meses de antecedência." },
      { q: "Tem alternativa de hospedagem?", a: "Barcos-hotel, casas privativas e hotéis locais (limitados)." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-amazonia-festival-caire",
    continent: "Brasil",
    country: "Brasil",
    region: "Pará",
    slug: "brasil/amazonia/festival-caire",
    name: "Festival do Çairé — Alter do Chão",
    bestTime: "Segunda quinzena de setembro (datas oficiais variam).",
    tags: ["cultura", "fotografia", "navegacao", "bem-estar", "festivais-folcloricos"],
    imageAiPrompt: "Ultra realistic photo of Çairé folkloric festival in Alter do Chão, decorated symbolic mast, river beach at sunset, vibrant Amazonian cultural atmosphere.",
    imageOverrideUrl: "",
    intro: "Tradicional festa religiosa e folclórica de Alter do Chão, com procissões no rio, disputa entre os botos Tucuxi e Cor-de-Rosa e a beleza inigualável do Tapajós.",
    highlights: [
      "Procissão fluvial do Çairé",
      "Apresentações dos botos Tucuxi e Cor-de-Rosa",
      "Praias do Tapajós em alta temporada cultural",
      "Gastronomia ribeirinha",
      "Combinação com Expedição Kaiara"
    ],
    beyondUsual: [
      "Hospedagem-boutique selecionada.",
      "Acesso a comunidades e brincantes.",
      "Saídas privativas de barco durante o festival."
    ],
    stays: [],
    faq: [
      { q: "Quando acontece?", a: "Geralmente na segunda quinzena de setembro." },
      { q: "Como chegar?", a: "Voo a Santarém e transfer a Alter do Chão." },
      { q: "Quantos dias?", a: "4 a 6 noites para vivenciar bem." },
      { q: "Combina com Parintins?", a: "Não no mesmo período, mas como roteiros distintos no ano." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== BAHIA — ABROLHOS E COSTA DO DESCOBRIMENTO =====
  {
    id: "brasil-bahia-abrolhos-costa-descobrimento",
    continent: "Brasil",
    country: "Brasil",
    region: "Bahia",
    slug: "brasil/bahia/abrolhos-costa-descobrimento",
    name: "Abrolhos & Costa do Descobrimento",
    bestTime: "Jul–Nov para baleias-jubarte; Dez–Mar para mergulho e mar calmo.",
    tags: ["navegacao", "conservacao", "fotografia", "expedicao", "natureza"],
    imageAiPrompt: "Ultra realistic aerial photo of Abrolhos archipelago, turquoise waters, coral reefs, lighthouse on island, humpback whale silhouette below, no people.",
    imageOverrideUrl: "",
    intro: "O primeiro parque marinho do Brasil: ilhas vulcânicas, corais únicos no Atlântico Sul e o berço das baleias-jubarte. Roteiros combinam Abrolhos, Caraíva, Trancoso e os parques nacionais da Costa do Descobrimento.",
    highlights: [
      "Avistamento de baleias-jubarte (Jul–Nov)",
      "Mergulho e snorkel nos chapeirões de coral",
      "Arquipélago de Abrolhos e Farol de Santa Bárbara",
      "Parques Nacionais Pau Brasil e Monte Pascoal",
      "Trancoso, Caraíva e Corumbau"
    ],
    beyondUsual: [
      "Embarcações de expedição com pernoite em Abrolhos.",
      "Mergulhos guiados por biólogos.",
      "Visitas a comunidades indígenas Pataxó."
    ],
    stays: [],
    faq: [
      { q: "Como se chega a Abrolhos?", a: "De Caravelas, em embarcações de bate-volta ou expedição." },
      { q: "Vejo baleias garantido?", a: "Na temporada (Jul–Nov), a probabilidade é altíssima." },
      { q: "Quantos dias?", a: "7 a 10 noites combinando Abrolhos e Costa do Descobrimento." },
      { q: "Combina com Trancoso?", a: "Sim, é a combinação clássica da curadoria." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== NORDESTE — CANYONS E ROTA DAS FALÉSIAS =====
  {
    id: "brasil-nordeste-canyons-xingo",
    continent: "Brasil",
    country: "Brasil",
    region: "Sergipe/Alagoas/Bahia",
    slug: "brasil/nordeste/canyons-xingo",
    name: "Cânions do Xingó",
    bestTime: "O ano inteiro; Mai–Set tem clima mais ameno.",
    tags: ["natureza", "navegacao", "fotografia", "aventura"],
    imageAiPrompt: "Ultra realistic photo of Xingó canyons, São Francisco river through dramatic ochre red rock walls, calm green water, no people.",
    imageOverrideUrl: "",
    intro: "O São Francisco em sua forma mais cinematográfica: paredões avermelhados de até 80 metros, águas esverdeadas e silêncio. Acesso por Canindé do São Francisco (SE), Piranhas (AL) e Paulo Afonso (BA).",
    highlights: [
      "Navegação por catamarã ou lancha rápida",
      "Banho nas águas verde-jade do São Francisco",
      "Mirantes panorâmicos dos paredões",
      "Vila histórica de Piranhas (AL)",
      "Museu de Arqueologia de Xingó"
    ],
    beyondUsual: [
      "Saídas privativas em horário silencioso.",
      "Combinação com litoral alagoano e sergipano.",
      "Fotografia dedicada à luz do entardecer."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "2 a 3 noites são suficientes." },
      { q: "Como combinar?", a: "Com Maragogi, Aracaju ou Salvador." },
      { q: "Tem boa hospedagem?", a: "Pousadas-charme em Piranhas e Canindé." },
      { q: "É bom para crianças?", a: "Sim, passeios tranquilos de barco." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },
  {
    id: "brasil-nordeste-rota-falesias-fortaleza-natal",
    continent: "Brasil",
    country: "Brasil",
    region: "Ceará/Rio Grande do Norte",
    slug: "brasil/nordeste/rota-falesias-fortaleza-natal",
    name: "Rota das Falésias — Fortaleza a Natal",
    bestTime: "Ago–Fev (sol e ventos) para a rota completa.",
    tags: ["aventura", "fotografia", "natureza", "expedicao"],
    imageAiPrompt: "Ultra realistic aerial photo of red sea cliffs and dunes along northeastern Brazilian coast, turquoise ocean, golden hour, no people.",
    imageOverrideUrl: "",
    intro: "Uma road trip pelo litoral mais cinematográfico do Brasil: falésias avermelhadas, dunas e vilas autênticas entre Fortaleza, Canoa Quebrada, Pipa e Natal, com travessias em buggy 4×4.",
    highlights: [
      "Canoa Quebrada e Praia das Fontes (CE)",
      "Travessia de buggy por dunas e praias",
      "Praia de Pipa (RN) e o Chapadão",
      "Galinhos e Maracajaú",
      "Pôr do sol em falésias coloridas"
    ],
    beyondUsual: [
      "Bugueiros credenciados pela curadoria.",
      "Pousadas-boutique selecionadas em cada parada.",
      "Saídas fotográficas dedicadas ao amanhecer."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "7 a 10 noites para fazer com calma." },
      { q: "Travessia de buggy é segura?", a: "Sim, com bugueiros credenciados." },
      { q: "Posso fazer o caminho inverso?", a: "Sim, Natal → Fortaleza também funciona muito bem." },
      { q: "Vai bem para casais?", a: "Sim, é um dos roteiros mais românticos do Nordeste." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  },

  // ===== GOIÁS — PIRENÓPOLIS =====
  {
    id: "brasil-goias-pirenopolis",
    continent: "Brasil",
    country: "Brasil",
    region: "Goiás",
    slug: "brasil/goias/pirenopolis",
    name: "Pirenópolis",
    bestTime: "Abr–Set (seca) para trilhas; Out–Mar para cachoeiras cheias.",
    tags: ["cultura", "natureza", "gastronomia", "bem-estar", "fotografia"],
    imageAiPrompt: "Ultra realistic photo of Pirenópolis colonial church and cobblestone street with cerrado mountains in background, warm light, no people.",
    imageOverrideUrl: "",
    intro: "Cidade colonial preservada no cerrado goiano, com cachoeiras, vida cultural intensa e gastronomia premiada. Excelente complemento para Chapada dos Veadeiros ou Brasília.",
    highlights: [
      "Centro histórico (séc. XVIII) e Igreja Matriz",
      "Cachoeiras do Abade, Bonsucesso e Santuário Vagafogo",
      "Trilhas no Parque dos Pireneus",
      "Festa do Divino e Cavalhadas",
      "Restaurantes e ateliês de arte"
    ],
    beyondUsual: [
      "Cachoeiras privativas com acesso curado.",
      "Jantares-degustação com chefs locais.",
      "Combinação com Chapada dos Veadeiros."
    ],
    stays: [],
    faq: [
      { q: "Quantos dias?", a: "3 a 4 noites." },
      { q: "Como chegar?", a: "Voo a Brasília ou Goiânia e road trip (cerca de 2h)." },
      { q: "É bom para famílias?", a: "Sim, com cachoeiras acessíveis." },
      { q: "Combina com Chapada dos Veadeiros?", a: "Sim, é a combinação clássica." },
      { q: "Como criar roteiro?", a: "Clique em Criar roteiro sob medida." }
    ]
  }
];

export const getDestinationBySlug = (slug: string): Destination | undefined => {
  return destinations.find((d) => d.slug === slug);
};

export const getDestinationsByContinent = (continent: string): Destination[] => {
  return destinations.filter((d) => d.continent.toLowerCase() === continent.toLowerCase());
};

export const getDestinationsByTag = (tagId: string): Destination[] => {
  return destinations.filter((d) => d.tags.includes(tagId));
};

export const searchDestinations = (query: string): Destination[] => {
  const lowerQuery = query.toLowerCase();
  return destinations.filter(
    (d) =>
      d.name.toLowerCase().includes(lowerQuery) ||
      d.country.toLowerCase().includes(lowerQuery) ||
      d.region.toLowerCase().includes(lowerQuery) ||
      d.continent.toLowerCase().includes(lowerQuery)
  );
};

export const getFeaturedDestinations = (): Destination[] => {
  const featuredIds = [
    "africa-tanzania-serengeti",
    "brasil-amazonia-anavilhanas",
    "america-do-sul-patagonia",
    "europa-islandia",
    "asia-japao",
    "brasil-lencois-maranhenses"
  ];
  return destinations.filter((d) => featuredIds.includes(d.id));
};
