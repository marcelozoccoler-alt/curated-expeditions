import imgAmazonia from "@/assets/destinations/brasil-amazonia-anavilhanas.jpg";
import imgPantanal from "@/assets/destinations/brasil-pantanal-norte.jpg";
import imgLencois from "@/assets/destinations/brasil-lencois-maranhenses.jpg";
import imgRio from "@/assets/destinations/brasil-rio-de-janeiro.jpg";
import imgBonito from "@/assets/destinations/brasil-bonito.jpg";
import imgIguacu from "@/assets/destinations/brasil-cataratas-iguacu.jpg";
import imgBahia from "@/assets/destinations/brasil-salvador.jpg";
import imgNoronha from "@/assets/destinations/brasil-fernando-de-noronha.jpg";

/** Languages with dedicated landing copy. Other langs fall back to English. */
export type LandingLang = "pt" | "en" | "es";

export interface LandingHighlight {
  title: string;
  desc: string;
}

export interface LandingCopy {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string[];
  highlights: LandingHighlight[];
  bestTime: string;
  whereToStay: string;
  faqs: { q: string; a: string }[];
}

export interface BrasilLanding {
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  /** Related internal route (destination or region page). */
  related?: string;
  copy: Record<LandingLang, LandingCopy>;
}

export const BRASIL_LANDINGS: BrasilLanding[] = [
  {
    slug: "amazonia",
    name: "Amazônia",
    image: imgAmazonia,
    imageAlt:
      "Arquipélago de Anavilhanas ao amanhecer, com igarapés escuros entre a floresta amazônica",
    related: "/regioes/amazonia",
    copy: {
      pt: {
        metaTitle: "Viagem para a Amazônia sob medida | Create Travel",
        metaDescription:
          "Roteiro autoral na Amazônia: lodges remotos no Rio Negro, Mamirauá, Alter do Chão e comunidades ribeirinhas. Briefing consultivo e proposta em até 24h.",
        keywords:
          "viagem amazônia sob medida, lodge amazônia luxo, rio negro cruzeiro, mamirauá, alter do chão, roteiro amazônia autoral",
        eyebrow: "Brasil · Amazônia",
        title: "A Amazônia que só se alcança devagar",
        subtitle:
          "Lodges remotos, barcos pequenos e guias que sabem onde os botos realmente aparecem.",
        intro: [
          "A Amazônia brasileira tem 4,2 milhões de km². Não existe um roteiro único — existe o trecho certo para o seu ritmo: a calma de água preta do Rio Negro saindo de Manaus, as florestas alagadas de Mamirauá perto de Tefé, as praias fluviais de Alter do Chão em Santarém ou o Cristalino, no sul do Amazonas, para quem viaja atrás de aves.",
          "Desenhamos cada dia em função do nível da água, da lua e do que você quer sentir: noites de escuta na floresta, canoagem em igarapés, visita a comunidades ribeirinhas com quem já trabalha com turismo de base comunitária, pesca esportiva de captura e soltura.",
        ],
        highlights: [
          { title: "Rio Negro e Anavilhanas", desc: "Lodges de arquitetura leve sobre água preta, quase sem mosquito, a poucas horas de Manaus." },
          { title: "Mamirauá", desc: "Reserva de várzea com uacaris-brancos e pesquisa científica ativa — a Amazônia mais rara do roteiro." },
          { title: "Alter do Chão", desc: "Praias de areia branca no Tapajós, Floresta Nacional e comunidades do Rio Arapiuns." },
          { title: "Comunidades ribeirinhas", desc: "Encontros combinados com antecedência, sem visitas de vitrine." },
        ],
        bestTime:
          "Cheia (março a julho) para navegar dentro da floresta alagada e ver copas por perto. Seca (agosto a novembro) para praias de rio, trilhas longas e melhor observação de fauna em barrancos.",
        whereToStay:
          "Trabalhamos com lodges de pequena escala (8 a 20 acomodações) no Rio Negro, barcos-hotel privativos para grupos familiares e pousadas de charme em Alter do Chão. Em Manaus, hotel confortável para a noite de chegada e saída.",
        faqs: [
          { q: "Quantos dias são necessários na Amazônia?", a: "Cinco a sete noites permitem um lodge com profundidade. Combinações Rio Negro + Mamirauá ou Rio Negro + Alter do Chão pedem de nove a doze noites, pela logística de voos internos." },
          { q: "É seguro para crianças e para viajantes 60+?", a: "Sim, com escolha correta de lodge. Selecionamos estruturas com acesso fácil a barcos, refeições flexíveis e atendimento médico mapeado na região." },
          { q: "Preciso de vacina de febre amarela?", a: "Sim, é a recomendação padrão para a região amazônica, idealmente com dez dias de antecedência. Enviamos a orientação sanitária completa com o roteiro." },
        ],
      },
      en: {
        metaTitle: "Tailor-Made Amazon Trips in Brazil | Create Travel",
        metaDescription:
          "Private Amazon itineraries in Brazil: remote Rio Negro eco-lodges, Mamirauá, Alter do Chão and river communities. Consultative briefing, proposal within 24h.",
        keywords:
          "amazon trip brazil, amazon eco lodge, rio negro lodge, mamiraua reserve, alter do chao, tailor made amazon tour",
        eyebrow: "Brazil · Amazon",
        title: "The Amazon you can only reach slowly",
        subtitle:
          "Remote lodges, small boats and guides who know where the pink dolphins actually surface.",
        intro: [
          "The Brazilian Amazon covers 4.2 million km². There is no single itinerary — only the right stretch for your pace: the black-water calm of the Rio Negro out of Manaus, the flooded forests of Mamirauá near Tefé, the river beaches of Alter do Chão in Santarém, or Cristalino in the southern Amazon for serious birding.",
          "We design each day around water levels, moon phase and what you want to feel: nights listening to the forest, paddling narrow igarapés, visits to river communities we have worked with for years, catch-and-release fishing.",
        ],
        highlights: [
          { title: "Rio Negro & Anavilhanas", desc: "Light-footprint lodges over black water, few mosquitoes, hours from Manaus." },
          { title: "Mamirauá", desc: "Flooded-forest reserve with white uakari monkeys and active field research." },
          { title: "Alter do Chão", desc: "White-sand river beaches on the Tapajós, national forest and Arapiuns communities." },
          { title: "River communities", desc: "Visits arranged in advance with the community — never a staged stop." },
        ],
        bestTime:
          "High water (March–July) to navigate inside the flooded forest at canopy level. Low water (August–November) for river beaches, longer hikes and easier wildlife spotting.",
        whereToStay:
          "Small-scale lodges (8–20 rooms) on the Rio Negro, private riverboats for families, and boutique guesthouses in Alter do Chão. A comfortable Manaus hotel for arrival and departure nights.",
        faqs: [
          { q: "How many days do I need in the Amazon?", a: "Five to seven nights allow one lodge in depth. Combining Rio Negro with Mamirauá or Alter do Chão needs nine to twelve nights because of internal flights." },
          { q: "Is it suitable for children and travellers over 60?", a: "Yes, with the right lodge. We select properties with easy boat access, flexible meals and mapped medical support." },
          { q: "Do I need a yellow fever vaccine?", a: "Yes, it is the standard recommendation for the Amazon region, ideally ten days before travel. Full health guidance comes with your itinerary." },
        ],
      },
      es: {
        metaTitle: "Viajes a la Amazonía a medida | Create Travel",
        metaDescription:
          "Itinerarios privados en la Amazonía brasileña: lodges remotos en el Río Negro, Mamirauá, Alter do Chão y comunidades ribereñas. Propuesta en 24h.",
        keywords:
          "viaje amazonia brasil, lodge amazonia, rio negro, mamiraua, alter do chao, itinerario amazonia a medida",
        eyebrow: "Brasil · Amazonía",
        title: "La Amazonía que solo se alcanza despacio",
        subtitle:
          "Lodges remotos, embarcaciones pequeñas y guías que saben dónde aparecen los delfines rosados.",
        intro: [
          "La Amazonía brasileña tiene 4,2 millones de km². No existe un itinerario único: existe el tramo adecuado para tu ritmo. La calma de aguas negras del Río Negro desde Manaus, los bosques inundados de Mamirauá cerca de Tefé, las playas fluviales de Alter do Chão en Santarém o Cristalino, al sur, para observación de aves.",
          "Diseñamos cada día según el nivel del agua, la luna y lo que quieras sentir: noches de escucha en la selva, canoa por igarapés, encuentros con comunidades ribereñas y pesca de captura y liberación.",
        ],
        highlights: [
          { title: "Río Negro y Anavilhanas", desc: "Lodges de baja huella sobre aguas negras, casi sin mosquitos, a pocas horas de Manaus." },
          { title: "Mamirauá", desc: "Reserva de várzea con uacaríes blancos e investigación científica activa." },
          { title: "Alter do Chão", desc: "Playas de arena blanca en el Tapajós, floresta nacional y comunidades del Arapiuns." },
          { title: "Comunidades ribereñas", desc: "Visitas acordadas con antelación, nunca de escaparate." },
        ],
        bestTime:
          "Creciente (marzo a julio) para navegar dentro del bosque inundado. Bajante (agosto a noviembre) para playas de río, caminatas largas y mejor avistamiento de fauna.",
        whereToStay:
          "Lodges de pequeña escala (8 a 20 habitaciones) en el Río Negro, barcos-hotel privados para familias y posadas con encanto en Alter do Chão, además de un hotel cómodo en Manaus.",
        faqs: [
          { q: "¿Cuántos días necesito en la Amazonía?", a: "Cinco a siete noches permiten conocer un lodge con profundidad. Combinar Río Negro con Mamirauá o Alter do Chão requiere de nueve a doce noches por los vuelos internos." },
          { q: "¿Es adecuado para niños y viajeros de más de 60 años?", a: "Sí, con la elección correcta de lodge: acceso fácil a las embarcaciones, comidas flexibles y soporte médico mapeado." },
          { q: "¿Necesito vacuna de fiebre amarilla?", a: "Sí, es la recomendación estándar para la región amazónica, idealmente diez días antes del viaje." },
        ],
      },
    },
  },
  {
    slug: "pantanal",
    name: "Pantanal",
    image: imgPantanal,
    imageAlt: "Onça-pintada descansando na margem de um rio do Pantanal norte ao fim da tarde",
    related: "/regioes/pantanal",
    copy: {
      pt: {
        metaTitle: "Viagem para o Pantanal sob medida | Create Travel",
        metaDescription:
          "Roteiro autoral no Pantanal com foco em onça-pintada: Porto Jofre, Transpantaneira, fazendas históricas e safáris de barco. Proposta em até 24h.",
        keywords:
          "viagem pantanal sob medida, safári onça pintada, porto jofre, transpantaneira, pantanal sul, roteiro pantanal luxo",
        eyebrow: "Brasil · Pantanal",
        title: "O melhor safári das Américas fica no Brasil",
        subtitle:
          "Onça-pintada em água aberta, ariranhas, tuiuiús e fazendas que viraram lodges de conservação.",
        intro: [
          "O Pantanal é a maior planície alagável do planeta e o lugar mais confiável do mundo para ver onça-pintada em liberdade. No Pantanal Norte, entre Poconé e Porto Jofre, os safáris são de barco pelos rios Três Irmãos e Cuiabá — a taxa de avistamento na estação seca beira a certeza.",
          "No Pantanal Sul, o ritmo é outro: fazendas centenárias, cavalgadas ao amanhecer, safári noturno e um convívio mais lento com o ciclo da água. Combinamos os dois lados quando o tempo permite.",
        ],
        highlights: [
          { title: "Porto Jofre", desc: "Safáris de barco com guias especializados em onça, saídas de manhã e fim de tarde." },
          { title: "Transpantaneira", desc: "146 km de estrada elevada com 122 pontes: aves, jacarés e capivaras a cada curva." },
          { title: "Fazendas de conservação", desc: "Propriedades que trocaram gado por turismo de fauna, com pesquisa e manejo próprios." },
          { title: "Aves", desc: "Mais de 650 espécies, do tuiuiú à arara-azul-grande em Piquiri e Aquidauana." },
        ],
        bestTime:
          "Junho a outubro é a temporada clássica: água baixa, fauna concentrada e o pico de avistamento de onças em setembro. Dezembro a março traz cheia, verde intenso e aves reprodutivas.",
        whereToStay:
          "Flotéis e lodges pequenos em Porto Jofre, pousadas de fazenda na Transpantaneira e sedes históricas no Pantanal Sul — todas com guia próprio e veículos abertos.",
        faqs: [
          { q: "Qual a chance real de ver onça-pintada?", a: "Em Porto Jofre, entre julho e outubro, com três dias completos de safári de barco, a probabilidade histórica passa de 90%. Nunca prometemos avistamento, mas planejamos a viagem para maximizá-lo." },
          { q: "Pantanal Norte ou Sul?", a: "Norte para onça e safári de barco; Sul para vida de fazenda, cavalgada e aves. Com dez noites, é possível fazer os dois." },
          { q: "Como se chega?", a: "Norte: voo para Cuiabá e traslado pela Transpantaneira ou voo panorâmico até Porto Jofre. Sul: voo para Campo Grande ou Corumbá." },
        ],
      },
      en: {
        metaTitle: "Tailor-Made Pantanal Safaris in Brazil | Create Travel",
        metaDescription:
          "Private Pantanal itineraries built around jaguars: Porto Jofre boat safaris, the Transpantaneira, historic ranch lodges. Proposal within 24 hours.",
        keywords:
          "pantanal jaguar safari, porto jofre jaguar, transpantaneira, pantanal lodge, brazil wildlife safari, tailor made pantanal",
        eyebrow: "Brazil · Pantanal",
        title: "The best safari in the Americas is in Brazil",
        subtitle:
          "Jaguars in open water, giant otters, jabiru storks and cattle ranches turned conservation lodges.",
        intro: [
          "The Pantanal is the largest wetland on Earth and the most reliable place in the world to see wild jaguars. In the northern Pantanal, between Poconé and Porto Jofre, safaris happen by boat along the Três Irmãos and Cuiabá rivers — sighting rates in the dry season are extraordinary.",
          "The southern Pantanal moves differently: century-old ranches, dawn horseback rides, night safaris and a slower relationship with the flood cycle. We combine both when time allows.",
        ],
        highlights: [
          { title: "Porto Jofre", desc: "Boat safaris with dedicated jaguar guides, morning and late-afternoon departures." },
          { title: "Transpantaneira", desc: "146 km of raised road and 122 bridges: birds, caiman and capybara at every bend." },
          { title: "Conservation ranches", desc: "Properties that swapped cattle for wildlife tourism, with their own research programmes." },
          { title: "Birdlife", desc: "Over 650 species, from jabiru to hyacinth macaw around Piquiri and Aquidauana." },
        ],
        bestTime:
          "June to October is the classic season: low water, concentrated wildlife, peak jaguar sightings in September. December to March brings flood, deep green and breeding birds.",
        whereToStay:
          "Small flotels and lodges at Porto Jofre, ranch pousadas along the Transpantaneira and historic homesteads in the south — all with in-house guides and open vehicles.",
        faqs: [
          { q: "What are the real odds of seeing a jaguar?", a: "At Porto Jofre between July and October, with three full days of boat safaris, historic probability exceeds 90%. We never promise a sighting, but we plan the trip to maximise it." },
          { q: "Northern or southern Pantanal?", a: "North for jaguars and boat safaris; south for ranch life, riding and birds. Ten nights allow both." },
          { q: "How do I get there?", a: "North: fly to Cuiabá then drive the Transpantaneira, or take a scenic flight to Porto Jofre. South: fly to Campo Grande or Corumbá." },
        ],
      },
      es: {
        metaTitle: "Safaris a medida en el Pantanal | Create Travel",
        metaDescription:
          "Itinerarios privados en el Pantanal centrados en el jaguar: Porto Jofre, Transpantaneira, estancias históricas y safaris en barco. Propuesta en 24h.",
        keywords:
          "safari jaguar pantanal, porto jofre, transpantaneira, pantanal sur, viaje pantanal a medida",
        eyebrow: "Brasil · Pantanal",
        title: "El mejor safari de América está en Brasil",
        subtitle:
          "Jaguares en aguas abiertas, lobitos de río, tuyuyús y estancias convertidas en lodges de conservación.",
        intro: [
          "El Pantanal es la mayor llanura inundable del planeta y el lugar más confiable del mundo para ver jaguares en libertad. En el norte, entre Poconé y Porto Jofre, los safaris son en barco por los ríos Três Irmãos y Cuiabá, con índices de avistamiento excepcionales en la seca.",
          "El sur tiene otro ritmo: estancias centenarias, cabalgatas al amanecer, safari nocturno y una relación más lenta con el ciclo del agua. Combinamos ambos lados cuando el tiempo lo permite.",
        ],
        highlights: [
          { title: "Porto Jofre", desc: "Safaris en barco con guías especializados en jaguar, mañana y última hora de la tarde." },
          { title: "Transpantaneira", desc: "146 km de camino elevado y 122 puentes: aves, yacarés y carpinchos en cada curva." },
          { title: "Estancias de conservación", desc: "Propiedades que cambiaron ganado por turismo de fauna, con investigación propia." },
          { title: "Aves", desc: "Más de 650 especies, del tuyuyú al guacamayo jacinto en Piquiri y Aquidauana." },
        ],
        bestTime:
          "De junio a octubre es la temporada clásica: agua baja, fauna concentrada y pico de avistamientos de jaguar en septiembre. De diciembre a marzo, creciente y verde intenso.",
        whereToStay:
          "Floteles y lodges pequeños en Porto Jofre, posadas de estancia en la Transpantaneira y casas históricas en el Pantanal sur, todas con guía propio.",
        faqs: [
          { q: "¿Cuál es la probabilidad real de ver un jaguar?", a: "En Porto Jofre, entre julio y octubre y con tres días completos de safari en barco, la probabilidad histórica supera el 90%. Nunca prometemos avistamientos, pero planificamos para maximizarlos." },
          { q: "¿Pantanal norte o sur?", a: "Norte para jaguar y safari en barco; sur para vida de estancia, cabalgatas y aves. Con diez noches se pueden combinar." },
          { q: "¿Cómo se llega?", a: "Norte: vuelo a Cuiabá y traslado por la Transpantaneira o vuelo panorámico a Porto Jofre. Sur: vuelo a Campo Grande o Corumbá." },
        ],
      },
    },
  },
  {
    slug: "lencois-maranhenses",
    name: "Lençóis Maranhenses",
    image: imgLencois,
    imageAlt: "Dunas brancas dos Lençóis Maranhenses com lagoas de água doce ao pôr do sol",
    related: "/regioes/lencois-maranhenses",
    copy: {
      pt: {
        metaTitle: "Lençóis Maranhenses: roteiro sob medida | Create Travel",
        metaDescription:
          "Roteiro autoral nos Lençóis Maranhenses: Atins, Santo Amaro, travessia de dunas, Delta do Parnaíba e Jericoacoara. Proposta em até 24h.",
        keywords:
          "lençóis maranhenses roteiro, atins pousada, santo amaro lençóis, rota das emoções, travessia lençóis, viagem lençóis sob medida",
        eyebrow: "Brasil · Maranhão",
        title: "Um deserto que se enche de água doce",
        subtitle:
          "Lagoas azuis entre dunas brancas, vilas de pescadores e o silêncio raro do Maranhão.",
        intro: [
          "Os Lençóis Maranhenses são 155 mil hectares de dunas que, na estação chuvosa, guardam milhares de lagoas de água doce. É um dos poucos lugares do mundo em que se atravessa deserto e se nada a cada quilômetro.",
          "Montamos o roteiro a partir da base certa: Barreirinhas para acesso rápido, Atins para vento e gastronomia surpreendente, Santo Amaro para as lagoas mais vazias, Caburé e Mandacaru para o encontro do rio com o mar. Quem tem mais tempo segue pelo Delta do Parnaíba até Jericoacoara.",
        ],
        highlights: [
          { title: "Lagoas Azul e Bonita", desc: "As clássicas de Barreirinhas, feitas cedo ou no fim da tarde para fugir do fluxo." },
          { title: "Atins", desc: "Vila de rua de areia com pousadas pequenas, kitesurf e cozinha de autor à beira do Preguiças." },
          { title: "Santo Amaro", desc: "Acesso menos rodado, lagoas grandes e travessias 4x4 mais longas." },
          { title: "Travessia a pé", desc: "Dois a quatro dias entre Atins e Santo Amaro, com apoio, para quem quer o deserto por dentro." },
        ],
        bestTime:
          "Junho a setembro é a janela ideal: lagoas cheias e céu limpo. Outubro e novembro ainda têm água em lagoas profundas. De janeiro a maio chove, e o acesso fica mais imprevisível.",
        whereToStay:
          "Pousadas de charme em Atins e Barreirinhas, casas privativas com equipe para famílias e acampamento estruturado nas travessias.",
        faqs: [
          { q: "Quantos dias ficar nos Lençóis?", a: "Quatro noites cobrem as lagoas principais e o Preguiças com calma. A Rota das Emoções, até Jericoacoara, pede de oito a dez noites." },
          { q: "Precisa de bom preparo físico?", a: "Não para os passeios de 4x4 e as lagoas clássicas. A travessia a pé exige preparo moderado, mas fazemos versões com apoio de veículo e etapas curtas." },
          { q: "Qual aeroporto usar?", a: "São Luís é o principal, com quatro horas de estrada até Barreirinhas. É possível chegar por Parnaíba ou fazer trechos em voo panorâmico." },
        ],
      },
      en: {
        metaTitle: "Lençóis Maranhenses Tailor-Made Trips | Create Travel",
        metaDescription:
          "Private itineraries in Lençóis Maranhenses: Atins, Santo Amaro, dune crossings, Parnaíba Delta and Jericoacoara. Proposal within 24 hours.",
        keywords:
          "lencois maranhenses trip, atins hotel, santo amaro lencois, dune lagoons brazil, rota das emocoes, brazil desert lagoons",
        eyebrow: "Brazil · Maranhão",
        title: "A desert that fills with freshwater",
        subtitle:
          "Blue lagoons between white dunes, fishing villages and the rare silence of Maranhão.",
        intro: [
          "Lençóis Maranhenses is 155,000 hectares of dunes that hold thousands of freshwater lagoons through the rainy season. Few places on Earth let you cross a desert and swim every kilometre.",
          "We build the trip from the right base: Barreirinhas for quick access, Atins for wind and surprisingly good food, Santo Amaro for the emptiest lagoons, Caburé and Mandacaru where the river meets the sea. With more time, continue through the Parnaíba Delta to Jericoacoara.",
        ],
        highlights: [
          { title: "Lagoa Azul & Bonita", desc: "The classics near Barreirinhas, timed early or late to avoid the flow." },
          { title: "Atins", desc: "Sand-street village with small guesthouses, kitesurfing and chef-led cooking on the Preguiças." },
          { title: "Santo Amaro", desc: "Quieter access point, larger lagoons and longer 4x4 crossings." },
          { title: "Walking crossing", desc: "Two to four supported days between Atins and Santo Amaro, deep inside the dunes." },
        ],
        bestTime:
          "June to September is ideal: full lagoons and clear skies. October and November still hold water in the deeper lagoons. January to May is the rainy season with less predictable access.",
        whereToStay:
          "Boutique pousadas in Atins and Barreirinhas, private staffed houses for families, and structured camps on the walking crossings.",
        faqs: [
          { q: "How many days for Lençóis?", a: "Four nights cover the main lagoons and the Preguiças river without rushing. The full Rota das Emoções to Jericoacoara needs eight to ten nights." },
          { q: "Do I need to be fit?", a: "Not for the 4x4 excursions and classic lagoons. The walking crossing requires moderate fitness, and we can build vehicle-supported versions with shorter stages." },
          { q: "Which airport?", a: "São Luís is the main gateway, four hours by road to Barreirinhas. Parnaíba works as an alternative, and scenic flights can shorten transfers." },
        ],
      },
      es: {
        metaTitle: "Lençóis Maranhenses: viajes a medida | Create Travel",
        metaDescription:
          "Itinerarios privados en Lençóis Maranhenses: Atins, Santo Amaro, travesías de dunas, Delta del Parnaíba y Jericoacoara. Propuesta en 24h.",
        keywords:
          "lencois maranhenses viaje, atins posada, lagunas dunas brasil, rota das emocoes, travesia lencois",
        eyebrow: "Brasil · Maranhão",
        title: "Un desierto que se llena de agua dulce",
        subtitle:
          "Lagunas azules entre dunas blancas, aldeas de pescadores y el silencio raro de Maranhão.",
        intro: [
          "Lençóis Maranhenses son 155 mil hectáreas de dunas que, en la estación de lluvias, guardan miles de lagunas de agua dulce. Hay pocos lugares donde se cruce un desierto y se nade cada kilómetro.",
          "Armamos el viaje desde la base correcta: Barreirinhas para acceso rápido, Atins para viento y gastronomía sorprendente, Santo Amaro para las lagunas más vacías, Caburé y Mandacaru donde el río encuentra el mar. Con más tiempo, seguimos por el Delta del Parnaíba hasta Jericoacoara.",
        ],
        highlights: [
          { title: "Lagoa Azul y Bonita", desc: "Las clásicas de Barreirinhas, temprano o al final del día para evitar el flujo." },
          { title: "Atins", desc: "Aldea de calles de arena con posadas pequeñas, kitesurf y cocina de autor." },
          { title: "Santo Amaro", desc: "Acceso menos transitado, lagunas grandes y travesías 4x4 más largas." },
          { title: "Travesía a pie", desc: "Dos a cuatro días con apoyo entre Atins y Santo Amaro." },
        ],
        bestTime:
          "De junio a septiembre es la ventana ideal: lagunas llenas y cielo limpio. Octubre y noviembre aún tienen agua en las lagunas profundas.",
        whereToStay:
          "Posadas con encanto en Atins y Barreirinhas, casas privadas con equipo para familias y campamentos estructurados en las travesías.",
        faqs: [
          { q: "¿Cuántos días quedarse?", a: "Cuatro noches cubren las lagunas principales y el río Preguiças con calma. La Rota das Emoções hasta Jericoacoara pide de ocho a diez noches." },
          { q: "¿Se necesita buena forma física?", a: "No para las excursiones en 4x4. La travesía a pie exige preparación moderada, con versiones apoyadas por vehículo." },
          { q: "¿Qué aeropuerto usar?", a: "São Luís es el principal, a cuatro horas por carretera de Barreirinhas. Parnaíba es alternativa." },
        ],
      },
    },
  },
  {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro",
    image: imgRio,
    imageAlt: "Enseada do Rio de Janeiro vista de mirante alto, com Pão de Açúcar ao fundo",
    related: "/destinos/rio-de-janeiro",
    copy: {
      pt: {
        metaTitle: "Rio de Janeiro: roteiro privativo sob medida | Create Travel",
        metaDescription:
          "Roteiro autoral no Rio: mirantes fora de hora, arte moderna, Floresta da Tijuca, gastronomia e extensões para Búzios, Paraty e Ilha Grande.",
        keywords:
          "roteiro privativo rio de janeiro, city tour privativo rio, rio de janeiro luxo, paraty búzios extensão, guia particular rio",
        eyebrow: "Brasil · Rio de Janeiro",
        title: "O Rio visto no horário certo",
        subtitle:
          "Mirantes antes das multidões, arte moderna, floresta urbana e mesas que valem a viagem.",
        intro: [
          "O Rio recompensa quem entende horários. Cristo às 7h30, Pão de Açúcar no fim da tarde, Vista Chinesa quando a cidade ainda está de pé no vale. É essa engenharia de tempo que separa um bom roteiro de uma sequência de filas.",
          "Além do cartão-postal, desenhamos a cidade em camadas: modernismo em Niterói e no Sítio Burle Marx, botânica na Floresta da Tijuca, bossa nova em casas pequenas, e uma cena gastronômica que hoje disputa com as melhores da América Latina.",
        ],
        highlights: [
          { title: "Mirantes com timing", desc: "Cristo, Pão de Açúcar e Vista Chinesa nos horários de menor fluxo e melhor luz." },
          { title: "Modernismo carioca", desc: "MAC Niterói, Sítio Roberto Burle Marx e Instituto Moreira Salles com guia de arte." },
          { title: "Floresta da Tijuca", desc: "A maior floresta urbana do mundo: trilhas, cachoeiras e aves a 20 minutos do hotel." },
          { title: "Mesa carioca", desc: "Reservas em casas premiadas e mercados com chef, do Leblon ao Centro histórico." },
        ],
        bestTime:
          "Abril a junho e setembro a novembro reúnem mar limpo, calor moderado e cidade menos cheia. Dezembro a março é verão intenso; Carnaval e Réveillon exigem reserva com muitos meses de antecedência.",
        whereToStay:
          "Hotéis-ícone de frente para o mar em Ipanema e Leblon, hotéis de design em Santa Teresa e no Centro, e apartamentos privativos com serviço para estadias longas.",
        faqs: [
          { q: "Quantos dias no Rio?", a: "Três noites cobrem os essenciais com folga. Quatro a cinco permitem Niterói, Floresta da Tijuca e um dia de praia sem correr." },
          { q: "Como funciona a segurança?", a: "Trabalhamos com guias e motoristas fixos, rotas revisadas diariamente e orientação clara sobre bairros e horários — o modelo que usamos para clientes estrangeiros e brasileiros." },
          { q: "Vale estender para Paraty ou Búzios?", a: "Sim. Paraty (4h) para história colonial e Mata Atlântica; Búzios (2h30) para praias; Ilha Grande para mar sem carro." },
        ],
      },
      en: {
        metaTitle: "Private Rio de Janeiro Itineraries | Create Travel",
        metaDescription:
          "Tailor-made Rio de Janeiro: viewpoints at the right hour, modernist art, Tijuca Forest, food scene and extensions to Búzios, Paraty and Ilha Grande.",
        keywords:
          "private rio de janeiro tour, rio luxury travel, tijuca forest guide, paraty extension, rio private guide",
        eyebrow: "Brazil · Rio de Janeiro",
        title: "Rio, seen at the right hour",
        subtitle:
          "Viewpoints before the crowds, modernist art, urban rainforest and tables worth the flight.",
        intro: [
          "Rio rewards those who understand timing. Christ the Redeemer at 7.30am, Sugarloaf at golden hour, Vista Chinesa while the city still stands in the valley. That engineering of time is what separates a great itinerary from a queue.",
          "Beyond the postcard, we build the city in layers: modernism in Niterói and at Sítio Burle Marx, botany in the Tijuca Forest, bossa nova in small rooms, and a food scene now competing with the best in Latin America.",
        ],
        highlights: [
          { title: "Viewpoints with timing", desc: "Christ, Sugarloaf and Vista Chinesa at the quietest hours and best light." },
          { title: "Carioca modernism", desc: "MAC Niterói, Sítio Roberto Burle Marx and Instituto Moreira Salles with an art guide." },
          { title: "Tijuca Forest", desc: "The largest urban forest on Earth: trails, waterfalls and birds 20 minutes from your hotel." },
          { title: "Rio at the table", desc: "Reservations at award-winning kitchens and chef-led market visits." },
        ],
        bestTime:
          "April to June and September to November bring clear seas, moderate heat and a calmer city. December to March is high summer; Carnival and New Year require booking many months ahead.",
        whereToStay:
          "Iconic oceanfront hotels in Ipanema and Leblon, design hotels in Santa Teresa and downtown, and serviced private apartments for longer stays.",
        faqs: [
          { q: "How many days in Rio?", a: "Three nights cover the essentials comfortably. Four or five allow Niterói, the Tijuca Forest and a proper beach day." },
          { q: "How do you handle safety?", a: "Fixed guides and drivers, routes reviewed daily, and clear guidance on neighbourhoods and timing — the same model we use for international clients." },
          { q: "Worth extending to Paraty or Búzios?", a: "Yes. Paraty (4h) for colonial history and Atlantic Forest; Búzios (2.5h) for beaches; Ilha Grande for car-free coast." },
        ],
      },
      es: {
        metaTitle: "Río de Janeiro: itinerarios privados | Create Travel",
        metaDescription:
          "Río de Janeiro a medida: miradores en el horario correcto, arte moderno, Bosque de Tijuca, gastronomía y extensiones a Búzios, Paraty e Ilha Grande.",
        keywords:
          "tour privado rio de janeiro, rio de janeiro lujo, guia privado rio, paraty buzios extension",
        eyebrow: "Brasil · Río de Janeiro",
        title: "Río, visto a la hora correcta",
        subtitle:
          "Miradores antes de las multitudes, arte moderno, selva urbana y mesas que justifican el viaje.",
        intro: [
          "Río premia a quien entiende los horarios. El Cristo a las 7:30, el Pan de Azúcar al atardecer, la Vista Chinesa cuando la ciudad aún está en el valle. Esa ingeniería del tiempo separa un buen itinerario de una fila.",
          "Más allá de la postal, construimos la ciudad en capas: modernismo en Niterói y el Sítio Burle Marx, botánica en el Bosque de Tijuca, bossa nova en salas pequeñas y una escena gastronómica de nivel continental.",
        ],
        highlights: [
          { title: "Miradores con timing", desc: "Cristo, Pan de Azúcar y Vista Chinesa en las horas de menor flujo y mejor luz." },
          { title: "Modernismo carioca", desc: "MAC Niterói, Sítio Roberto Burle Marx e Instituto Moreira Salles con guía de arte." },
          { title: "Bosque de Tijuca", desc: "El mayor bosque urbano del mundo: senderos, cascadas y aves a 20 minutos del hotel." },
          { title: "Mesa carioca", desc: "Reservas en casas premiadas y mercados con chef." },
        ],
        bestTime:
          "De abril a junio y de septiembre a noviembre: mar limpio, calor moderado y ciudad menos llena. De diciembre a marzo, verano intenso; Carnaval y Fin de Año requieren reserva con mucha antelación.",
        whereToStay:
          "Hoteles icónicos frente al mar en Ipanema y Leblon, hoteles de diseño en Santa Teresa y el Centro, y apartamentos privados con servicio.",
        faqs: [
          { q: "¿Cuántos días en Río?", a: "Tres noches cubren lo esencial con holgura. Cuatro o cinco permiten Niterói, Tijuca y un día de playa sin prisa." },
          { q: "¿Cómo manejan la seguridad?", a: "Guías y conductores fijos, rutas revisadas a diario y orientación clara sobre barrios y horarios." },
          { q: "¿Vale extender a Paraty o Búzios?", a: "Sí. Paraty (4h) para historia colonial; Búzios (2h30) para playas; Ilha Grande para mar sin autos." },
        ],
      },
    },
  },
  {
    slug: "bonito",
    name: "Bonito",
    image: imgBonito,
    imageAlt: "Rio de água transparente em Bonito, com vegetação submersa e peixes visíveis",
    related: "/destinos/bonito",
    copy: {
      pt: {
        metaTitle: "Bonito e Serra da Bodoquena sob medida | Create Travel",
        metaDescription:
          "Roteiro autoral em Bonito: flutuações em rios transparentes, grutas de água azul, cachoeiras e combinação com o Pantanal Sul. Proposta em 24h.",
        keywords:
          "roteiro bonito ms, flutuação rio da prata, gruta do lago azul, bonito pantanal combinado, bonito viagem sob medida",
        eyebrow: "Brasil · Mato Grosso do Sul",
        title: "Água tão clara que parece ar",
        subtitle:
          "Flutuações em nascentes, grutas azuis e um dos modelos de turismo mais bem manejados do Brasil.",
        intro: [
          "Bonito é o exemplo brasileiro de turismo com controle de carga: cada atrativo tem número máximo de visitantes por dia e voucher com horário. É por isso que a água segue transparente — e por isso que a viagem precisa ser montada com meses de antecedência.",
          "Reservamos os horários certos para que você flutue no Rio da Prata com luz alta, desça na Gruta do Lago Azul no período de raios de sol e termine a tarde em cachoeiras da Serra da Bodoquena sem sobreposição de agenda.",
        ],
        highlights: [
          { title: "Rio da Prata e Sucuri", desc: "Flutuação em nascentes de visibilidade absurda, com cardumes e vegetação submersa." },
          { title: "Gruta do Lago Azul", desc: "Caverna com lago de azul improvável; entre dezembro e janeiro, o feixe de sol entra na água." },
          { title: "Buraco das Araras", desc: "Dolina de 100 m com araras-vermelhas nidificando nas paredes." },
          { title: "Combinação com Pantanal", desc: "Três horas de estrada separam Bonito de fazendas do Pantanal Sul." },
        ],
        bestTime:
          "Abril a setembro tem seca, visibilidade máxima e temperaturas amenas. Dezembro e janeiro trazem o fenômeno dos raios de sol na Gruta do Lago Azul, com chance de chuva.",
        whereToStay:
          "Fazendas-hotel na Serra da Bodoquena, hotéis de charme na cidade e lodges com estrutura para famílias. Para grupos, casas privativas com equipe.",
        faqs: [
          { q: "Preciso saber nadar para flutuar?", a: "Não. As flutuações usam colete, máscara e snorkel, com condução constante da equipe. Crianças a partir de cinco anos participam na maioria dos atrativos." },
          { q: "Por que reservar tão cedo?", a: "Cada atrativo tem limite diário fixado por lei ambiental. Na alta temporada, Rio da Prata e Gruta do Lago Azul esgotam com dois a três meses de antecedência." },
          { q: "Qual aeroporto?", a: "Bonito tem aeroporto com voos sazonais; Campo Grande (três horas) é a rota mais confiável durante todo o ano." },
        ],
      },
      en: {
        metaTitle: "Bonito & Bodoquena Tailor-Made Trips | Create Travel",
        metaDescription:
          "Private Bonito itineraries: snorkelling in crystal rivers, blue-water caves, waterfalls and combinations with the southern Pantanal. Proposal in 24h.",
        keywords:
          "bonito brazil snorkeling, rio da prata, gruta do lago azul, bonito pantanal combined, bonito private trip",
        eyebrow: "Brazil · Mato Grosso do Sul",
        title: "Water so clear it looks like air",
        subtitle:
          "Snorkelling in spring-fed rivers, blue caves, and one of Brazil's best-managed tourism models.",
        intro: [
          "Bonito is Brazil's benchmark for carrying-capacity tourism: every site has a daily visitor cap and timed vouchers. That is why the water stays transparent — and why the trip must be built months in advance.",
          "We secure the right time slots so you snorkel Rio da Prata in high light, enter Gruta do Lago Azul during the sunbeam season, and finish the afternoon at Bodoquena waterfalls without schedule clashes.",
        ],
        highlights: [
          { title: "Rio da Prata & Sucuri", desc: "Drift snorkelling in springs with extraordinary visibility, fish shoals and submerged plants." },
          { title: "Gruta do Lago Azul", desc: "Cave with an improbably blue lake; in December and January a sunbeam pierces the water." },
          { title: "Buraco das Araras", desc: "A 100 m sinkhole with red-and-green macaws nesting in the walls." },
          { title: "Pantanal combination", desc: "Three hours by road connect Bonito to southern Pantanal ranches." },
        ],
        bestTime:
          "April to September is dry with peak visibility and mild temperatures. December and January bring the sunbeam phenomenon at Gruta do Lago Azul, with rain risk.",
        whereToStay:
          "Ranch hotels in the Bodoquena hills, boutique properties in town, family-friendly lodges, and staffed private houses for groups.",
        faqs: [
          { q: "Do I need to swim well?", a: "No. Snorkelling uses buoyancy vests, mask and snorkel with constant guiding. Children from five join most activities." },
          { q: "Why book so early?", a: "Each site has a legally fixed daily cap. In high season Rio da Prata and Gruta do Lago Azul sell out two to three months ahead." },
          { q: "Which airport?", a: "Bonito has seasonal flights; Campo Grande (three hours) is the reliable year-round gateway." },
        ],
      },
      es: {
        metaTitle: "Bonito y Bodoquena a medida | Create Travel",
        metaDescription:
          "Itinerarios privados en Bonito: flotación en ríos cristalinos, grutas azules, cascadas y combinación con el Pantanal sur. Propuesta en 24h.",
        keywords:
          "bonito brasil flotacion, rio da prata, gruta do lago azul, bonito pantanal, viaje bonito a medida",
        eyebrow: "Brasil · Mato Grosso do Sul",
        title: "Agua tan clara que parece aire",
        subtitle:
          "Flotación en manantiales, grutas azules y uno de los modelos de turismo mejor gestionados de Brasil.",
        intro: [
          "Bonito es el referente brasileño de turismo con capacidad de carga: cada atractivo tiene un límite diario de visitantes y voucher con horario. Por eso el agua sigue transparente, y por eso el viaje se arma con meses de antelación.",
          "Reservamos los horarios correctos para que flotes en el Rio da Prata con buena luz, entres a la Gruta do Lago Azul en temporada de rayos de sol y cierres la tarde en cascadas de la Serra da Bodoquena.",
        ],
        highlights: [
          { title: "Rio da Prata y Sucuri", desc: "Flotación en manantiales de visibilidad extraordinaria, con cardúmenes y vegetación sumergida." },
          { title: "Gruta do Lago Azul", desc: "Caverna con lago de azul improbable; en diciembre y enero el rayo de sol entra en el agua." },
          { title: "Buraco das Araras", desc: "Dolina de 100 m con guacamayos rojos anidando en las paredes." },
          { title: "Combinación con Pantanal", desc: "Tres horas de carretera separan Bonito de las estancias del Pantanal sur." },
        ],
        bestTime:
          "De abril a septiembre, seca con visibilidad máxima. Diciembre y enero traen el fenómeno de los rayos de sol en la Gruta do Lago Azul.",
        whereToStay:
          "Hoteles-estancia en la Serra da Bodoquena, hoteles con encanto en la ciudad y lodges con estructura para familias.",
        faqs: [
          { q: "¿Necesito saber nadar?", a: "No. La flotación se hace con chaleco, máscara y snorkel, siempre acompañada. Niños desde cinco años participan en la mayoría de los atractivos." },
          { q: "¿Por qué reservar tan temprano?", a: "Cada atractivo tiene un límite diario fijado por ley ambiental y se agota con dos o tres meses de antelación en temporada alta." },
          { q: "¿Qué aeropuerto?", a: "Bonito tiene vuelos estacionales; Campo Grande (tres horas) es la ruta confiable todo el año." },
        ],
      },
    },
  },
  {
    slug: "foz-do-iguacu",
    name: "Foz do Iguaçu",
    image: imgIguacu,
    imageAlt: "Cataratas do Iguaçu vistas do lado brasileiro, com névoa subindo dos saltos",
    related: "/destinos/foz-do-iguacu",
    copy: {
      pt: {
        metaTitle: "Foz do Iguaçu: roteiro privativo | Create Travel",
        metaDescription:
          "Roteiro autoral em Foz do Iguaçu: cataratas dos dois lados, Parque das Aves, Itaipu, voo panorâmico e extensões para Pantanal e Bonito.",
        keywords:
          "roteiro foz do iguaçu, cataratas lado argentino, garganta do diabo, hotel dentro do parque, foz privativo",
        eyebrow: "Brasil · Paraná",
        title: "Duas margens, uma queda de 275 saltos",
        subtitle:
          "Panorâmica pelo Brasil, imersão pela Argentina e o privilégio de dormir dentro do parque.",
        intro: [
          "As Cataratas do Iguaçu pedem os dois lados. O brasileiro entrega o panorama e a passarela final que aponta para a Garganta do Diabo; o argentino entrega o volume, as passarelas superiores e inferiores, e a proximidade que molha a roupa.",
          "Organizamos a sequência com atenção à luz — cataratas brasileiras cedo, argentinas com dia inteiro —, incluímos o Parque das Aves e, quando faz sentido, voo panorâmico de helicóptero e visita interna à usina de Itaipu.",
        ],
        highlights: [
          { title: "Lado brasileiro", desc: "Trilha panorâmica de 1,5 km, elevador e a passarela mais fotografada do parque." },
          { title: "Lado argentino", desc: "Trem ecológico, circuitos superior e inferior e a Garganta do Diabo de frente." },
          { title: "Macuco Safari", desc: "Bote que entra na base dos saltos — a experiência mais física do destino." },
          { title: "Parque das Aves", desc: "Viveiros imersivos com aves de Mata Atlântica e trabalho sério de reabilitação." },
        ],
        bestTime:
          "Março a maio e agosto a novembro combinam bom volume de água, calor moderado e menos fila. Janeiro tem vazão máxima e alta temporada; julho é frio, com luz bonita.",
        whereToStay:
          "Hotel histórico dentro do parque nacional brasileiro (o único com acesso às cataratas fora do horário de visitação) e hotéis de resort na cidade para famílias.",
        faqs: [
          { q: "Quantos dias em Foz?", a: "Duas noites cobrem os dois lados. Três permitem Itaipu, Parque das Aves e voo panorâmico sem correria." },
          { q: "Preciso de visto para o lado argentino?", a: "Brasileiros entram apenas com documento de identidade válido. Estrangeiros dependem da nacionalidade — verificamos e informamos antes da emissão." },
          { q: "Dá para combinar com outros destinos?", a: "Sim. Foz conecta bem com Bonito e Pantanal Sul via Campo Grande, e com Buenos Aires em voo direto." },
        ],
      },
      en: {
        metaTitle: "Iguazu Falls Private Itineraries | Create Travel",
        metaDescription:
          "Tailor-made Iguazu Falls: both sides of the falls, Parque das Aves, Itaipu, helicopter flights and extensions to Pantanal and Bonito.",
        keywords:
          "iguazu falls private tour, argentinian side iguazu, devils throat, hotel inside iguazu park, iguazu brazil trip",
        eyebrow: "Brazil · Paraná",
        title: "Two banks, one wall of 275 falls",
        subtitle:
          "Panorama from Brazil, immersion from Argentina, and the privilege of sleeping inside the park.",
        intro: [
          "Iguazu deserves both sides. Brazil gives you the panorama and the final walkway pointing at Devil's Throat; Argentina gives you volume, upper and lower circuits, and the closeness that soaks your clothes.",
          "We sequence the visit around light — Brazilian side early, a full day in Argentina — add Parque das Aves and, when it fits, a helicopter flight and an inside visit to the Itaipu dam.",
        ],
        highlights: [
          { title: "Brazilian side", desc: "1.5 km panoramic trail, lift and the most photographed walkway in the park." },
          { title: "Argentinian side", desc: "Eco-train, upper and lower circuits, and Devil's Throat head-on." },
          { title: "Macuco Safari", desc: "Boat ride into the base of the falls — the most physical experience here." },
          { title: "Parque das Aves", desc: "Immersive aviaries of Atlantic Forest birds with serious rehabilitation work." },
        ],
        bestTime:
          "March–May and August–November balance strong flow, mild heat and shorter queues. January has maximum flow and peak crowds; July is cool with beautiful light.",
        whereToStay:
          "The historic hotel inside the Brazilian national park — the only address with access to the falls outside visiting hours — plus resort hotels in town for families.",
        faqs: [
          { q: "How many days at Iguazu?", a: "Two nights cover both sides. Three allow Itaipu, Parque das Aves and a scenic flight without rushing." },
          { q: "Do I need a visa for the Argentinian side?", a: "It depends on your nationality. We check the requirement and confirm it before issuing your itinerary." },
          { q: "Can I combine it with other destinations?", a: "Yes. Iguazu connects well with Bonito and the southern Pantanal via Campo Grande, and with Buenos Aires on direct flights." },
        ],
      },
      es: {
        metaTitle: "Cataratas del Iguazú: itinerarios privados | Create Travel",
        metaDescription:
          "Iguazú a medida: cataratas de los dos lados, Parque das Aves, Itaipú, vuelo panorámico y extensiones al Pantanal y Bonito.",
        keywords:
          "cataratas iguazu tour privado, lado brasileno iguazu, garganta del diablo, hotel dentro del parque iguazu",
        eyebrow: "Brasil · Paraná",
        title: "Dos orillas, una caída de 275 saltos",
        subtitle:
          "Panorámica desde Brasil, inmersión desde Argentina y el privilegio de dormir dentro del parque.",
        intro: [
          "Iguazú pide los dos lados. El brasileño entrega el panorama y la pasarela final frente a la Garganta del Diablo; el argentino entrega volumen, circuitos superior e inferior y esa cercanía que moja la ropa.",
          "Ordenamos la visita según la luz — lado brasileño temprano, día completo en Argentina —, incluimos el Parque das Aves y, cuando tiene sentido, vuelo en helicóptero y visita interna a Itaipú.",
        ],
        highlights: [
          { title: "Lado brasileño", desc: "Sendero panorámico de 1,5 km, ascensor y la pasarela más fotografiada del parque." },
          { title: "Lado argentino", desc: "Tren ecológico, circuitos superior e inferior y la Garganta del Diablo de frente." },
          { title: "Macuco Safari", desc: "Lancha que entra a la base de los saltos, la experiencia más física del destino." },
          { title: "Parque das Aves", desc: "Aviarios inmersivos de aves de Mata Atlántica con trabajo de rehabilitación." },
        ],
        bestTime:
          "De marzo a mayo y de agosto a noviembre: buen caudal, calor moderado y menos filas. Enero tiene caudal máximo y temporada alta.",
        whereToStay:
          "El hotel histórico dentro del parque nacional brasileño, único con acceso a las cataratas fuera del horario de visita, y resorts en la ciudad para familias.",
        faqs: [
          { q: "¿Cuántos días en Iguazú?", a: "Dos noches cubren ambos lados. Tres permiten Itaipú, Parque das Aves y vuelo panorámico sin prisa." },
          { q: "¿Necesito visa para el lado argentino?", a: "Depende de la nacionalidad. Verificamos el requisito y lo confirmamos antes de emitir el itinerario." },
          { q: "¿Se puede combinar con otros destinos?", a: "Sí. Iguazú conecta bien con Bonito y el Pantanal sur vía Campo Grande, y con Buenos Aires en vuelo directo." },
        ],
      },
    },
  },
  {
    slug: "bahia",
    name: "Bahia",
    image: imgBahia,
    imageAlt: "Casario colonial colorido do centro histórico de Salvador ao fim do dia",
    related: "/regioes/bahia",
    copy: {
      pt: {
        metaTitle: "Bahia: roteiro autoral sob medida | Create Travel",
        metaDescription:
          "Roteiro autoral na Bahia: Salvador com curadoria cultural, Chapada Diamantina, Trancoso, Península de Maraú e Boipeba. Proposta em até 24h.",
        keywords:
          "roteiro bahia sob medida, salvador cultural, chapada diamantina roteiro, trancoso maraú boipeba, bahia luxo",
        eyebrow: "Brasil · Bahia",
        title: "A Bahia que não cabe em um só roteiro",
        subtitle:
          "Salvador como cidade de arte, Chapada como cânion vivo e um litoral que muda de caráter a cada 200 km.",
        intro: [
          "A Bahia tem 1.100 km de costa e três Bahias distintas. Salvador é uma cidade de arte, cozinha e religiosidade afro-brasileira que merece guias formados, não roteiro de ônibus. A Chapada Diamantina é montanha, gruta e rio de água escura. O litoral sul vai do glamour discreto de Trancoso ao silêncio de Boipeba, sem carros.",
          "Escolhemos a combinação de acordo com o seu tempo: três noites em Salvador com curadoria cultural, quatro na Chapada com guias de trilha, e uma semana de mar em Maraú, Boipeba ou Trancoso.",
        ],
        highlights: [
          { title: "Salvador com curadoria", desc: "Pelourinho fora do horário de excursão, ateliês, terreiros com acolhimento combinado e cozinha de raiz." },
          { title: "Chapada Diamantina", desc: "Vale do Pati, Fumaça, Poço Encantado e Cachoeira do Buracão com guias locais." },
          { title: "Trancoso e Caraíva", desc: "Quadrado ao anoitecer, praias de falésias e vilas sem asfalto no extremo sul." },
          { title: "Maraú e Boipeba", desc: "Península de mar calmo e ilha sem carros — o litoral mais tranquilo do estado." },
        ],
        bestTime:
          "Setembro a março para praia e mar quente; abril a agosto tem chuvas no litoral, mas é a melhor época de cachoeiras na Chapada. Fevereiro reúne Carnaval e alta temporada.",
        whereToStay:
          "Hotéis de design em Salvador, pousadas de charme em Lençóis e no Vale do Capão, casas com equipe em Trancoso e pousadas pé na areia em Maraú e Boipeba.",
        faqs: [
          { q: "Dá para juntar Salvador, Chapada e litoral?", a: "Sim, com dez a doze noites. Abaixo disso, sugerimos duas frentes — normalmente Salvador com litoral sul ou Salvador com Chapada." },
          { q: "Como funcionam as visitas a terreiros?", a: "Somente com agendamento prévio, acompanhamento de guia formado e orientação de vestuário e conduta. É experiência de respeito, não de espetáculo." },
          { q: "Chapada exige preparo físico?", a: "Há trilhas de todos os níveis. O Vale do Pati pede três dias de caminhada com bom preparo; Poço Encantado e Buracão são acessíveis a quase todos." },
        ],
      },
      en: {
        metaTitle: "Bahia Tailor-Made Itineraries | Create Travel",
        metaDescription:
          "Private Bahia itineraries: Salvador with cultural curation, Chapada Diamantina, Trancoso, Maraú Peninsula and Boipeba. Proposal within 24 hours.",
        keywords:
          "bahia brazil private trip, salvador cultural tour, chapada diamantina trekking, trancoso maraú boipeba, bahia luxury travel",
        eyebrow: "Brazil · Bahia",
        title: "The Bahia that never fits one itinerary",
        subtitle:
          "Salvador as an art city, Chapada as a living canyon, and a coast that changes character every 200 km.",
        intro: [
          "Bahia has 1,100 km of coastline and three distinct identities. Salvador is a city of art, food and Afro-Brazilian religion that deserves trained guides, not a coach tour. Chapada Diamantina is mountain, cave and dark-water river. The southern coast runs from Trancoso's quiet glamour to car-free Boipeba.",
          "We choose the combination according to your time: three nights in Salvador with cultural curation, four in Chapada with trekking guides, and a week by the sea in Maraú, Boipeba or Trancoso.",
        ],
        highlights: [
          { title: "Curated Salvador", desc: "Pelourinho outside coach hours, artists' studios, respectful terreiro visits and root cooking." },
          { title: "Chapada Diamantina", desc: "Vale do Pati, Fumaça falls, Poço Encantado and Buracão with local guides." },
          { title: "Trancoso & Caraíva", desc: "The Quadrado at dusk, cliff beaches and unpaved villages in the far south." },
          { title: "Maraú & Boipeba", desc: "Calm-water peninsula and a car-free island — the state's quietest coast." },
        ],
        bestTime:
          "September to March for beach and warm sea; April to August brings coastal rain but the best waterfalls in Chapada. February combines Carnival and peak season.",
        whereToStay:
          "Design hotels in Salvador, boutique pousadas in Lençóis and Vale do Capão, staffed houses in Trancoso and beachfront pousadas in Maraú and Boipeba.",
        faqs: [
          { q: "Can I combine Salvador, Chapada and the coast?", a: "Yes, with ten to twelve nights. With less, we suggest two areas — usually Salvador plus the southern coast, or Salvador plus Chapada." },
          { q: "How do terreiro visits work?", a: "Only by prior arrangement, with a trained guide and guidance on dress and conduct. It is an experience of respect, not a show." },
          { q: "Does Chapada require fitness?", a: "There are trails at every level. Vale do Pati is a three-day trek for fit walkers; Poço Encantado and Buracão suit almost everyone." },
        ],
      },
      es: {
        metaTitle: "Bahía: itinerarios a medida | Create Travel",
        metaDescription:
          "Itinerarios privados en Bahía: Salvador con curaduría cultural, Chapada Diamantina, Trancoso, Península de Maraú y Boipeba. Propuesta en 24h.",
        keywords:
          "bahia brasil viaje privado, salvador cultural, chapada diamantina trekking, trancoso maraú boipeba",
        eyebrow: "Brasil · Bahía",
        title: "La Bahía que no cabe en un solo itinerario",
        subtitle:
          "Salvador como ciudad de arte, Chapada como cañón vivo y una costa que cambia cada 200 km.",
        intro: [
          "Bahía tiene 1.100 km de costa y tres identidades distintas. Salvador es una ciudad de arte, cocina y religiosidad afrobrasileña que merece guías formados. La Chapada Diamantina es montaña, gruta y río de agua oscura. El litoral sur va del glamour discreto de Trancoso al silencio de Boipeba, sin autos.",
          "Elegimos la combinación según tu tiempo: tres noches en Salvador con curaduría cultural, cuatro en la Chapada con guías de trekking y una semana de mar en Maraú, Boipeba o Trancoso.",
        ],
        highlights: [
          { title: "Salvador con curaduría", desc: "Pelourinho fuera del horario de excursiones, talleres de artistas y cocina de raíz." },
          { title: "Chapada Diamantina", desc: "Vale do Pati, Fumaça, Poço Encantado y Cachoeira do Buracão con guías locales." },
          { title: "Trancoso y Caraíva", desc: "El Quadrado al anochecer, playas de acantilados y aldeas sin asfalto." },
          { title: "Maraú y Boipeba", desc: "Península de mar calmo e isla sin autos, la costa más tranquila del estado." },
        ],
        bestTime:
          "De septiembre a marzo para playa y mar cálido; de abril a agosto llueve en la costa, pero es la mejor época de cascadas en la Chapada.",
        whereToStay:
          "Hoteles de diseño en Salvador, posadas con encanto en Lençóis y Vale do Capão, casas con equipo en Trancoso y posadas frente al mar en Maraú y Boipeba.",
        faqs: [
          { q: "¿Se pueden combinar Salvador, Chapada y costa?", a: "Sí, con diez a doce noches. Con menos tiempo sugerimos dos frentes." },
          { q: "¿Cómo funcionan las visitas a terreiros?", a: "Solo con acuerdo previo, guía formado y orientación de vestimenta y conducta. Es una experiencia de respeto, no un espectáculo." },
          { q: "¿La Chapada exige preparación física?", a: "Hay senderos de todos los niveles. El Vale do Pati son tres días de caminata; Poço Encantado y Buracão son accesibles a casi todos." },
        ],
      },
    },
  },
  {
    slug: "fernando-de-noronha",
    name: "Fernando de Noronha",
    image: imgNoronha,
    imageAlt: "Baía do Sancho em Fernando de Noronha, com mar azul-turquesa entre falésias",
    related: "/destinos/fernando-de-noronha",
    copy: {
      pt: {
        metaTitle: "Fernando de Noronha sob medida | Create Travel",
        metaDescription:
          "Roteiro autoral em Fernando de Noronha: mergulho no Atlântico Sul, Baía do Sancho, golfinhos-rotadores e pousadas de charme. Proposta em 24h.",
        keywords:
          "fernando de noronha roteiro, mergulho noronha, baía do sancho, pousada charme noronha, noronha sob medida",
        eyebrow: "Brasil · Pernambuco",
        title: "A ilha mais protegida do Atlântico Sul",
        subtitle:
          "Águas de 30 metros de visibilidade, golfinhos ao amanhecer e um limite diário de visitantes que preserva tudo isso.",
        intro: [
          "Noronha é arquipélago vulcânico, parque nacional marinho e área de preservação com controle de acesso: taxa ambiental, número limitado de visitantes e regras rígidas de trilha e mergulho. O resultado é o mar mais claro do Brasil.",
          "Planejamos a ilha em função das marés e do vento: Sancho e Sueste em maré certa, mergulho autônomo nos naufrágios e paredões da parte de fora, e o amanhecer na Baía dos Golfinhos, quando os rotadores voltam de mar aberto.",
        ],
        highlights: [
          { title: "Baía do Sancho", desc: "Eleita repetidas vezes a praia mais bonita do mundo — melhor cedo, com maré alta." },
          { title: "Mergulho", desc: "Visibilidade de até 30 m, tartarugas, arraias e naufrágios; batismo disponível para iniciantes." },
          { title: "Golfinhos-rotadores", desc: "Observação do mirante ao amanhecer, com biólogos monitorando a baía." },
          { title: "Trilhas com condução", desc: "Atalaia, Pontinha e Capim-Açu com agendamento e limite diário de visitantes." },
        ],
        bestTime:
          "Setembro a março: mar do Mar de Dentro calmo, visibilidade máxima e melhor mergulho. De abril a agosto há mais chuva e ondas grandes do lado de fora — temporada dos surfistas.",
        whereToStay:
          "Pousadas de charme com poucas suítes na Vila dos Remédios e no Sueste, casas privativas com chef e as melhores estruturas de mergulho da ilha.",
        faqs: [
          { q: "Quantas noites em Noronha?", a: "Cinco noites é o mínimo razoável, considerando taxas, marés e a chance de um dia de chuva. Sete permitem mergulho com folga." },
          { q: "Quais taxas existem?", a: "Taxa de preservação ambiental por dia de permanência e ingresso do Parque Nacional Marinho, válido por dez dias. Incluímos os dois no orçamento." },
          { q: "Como se chega?", a: "Voos diários de Recife (1h20) e Natal. A antecedência importa: a malha aérea é limitada e as pousadas boas são pequenas." },
        ],
      },
      en: {
        metaTitle: "Fernando de Noronha Tailor-Made Trips | Create Travel",
        metaDescription:
          "Private Fernando de Noronha itineraries: South Atlantic diving, Baía do Sancho, spinner dolphins and boutique pousadas. Proposal within 24 hours.",
        keywords:
          "fernando de noronha trip, noronha diving, baia do sancho, noronha boutique pousada, brazil island luxury",
        eyebrow: "Brazil · Pernambuco",
        title: "The most protected island in the South Atlantic",
        subtitle:
          "Thirty-metre visibility, dolphins at dawn, and a daily visitor cap that keeps it that way.",
        intro: [
          "Noronha is a volcanic archipelago, a marine national park and a protected area with controlled access: an environmental fee, a capped number of visitors and strict trail and diving rules. The result is the clearest sea in Brazil.",
          "We plan the island around tides and wind: Sancho and Sueste at the right tide, scuba on the outer walls and wrecks, and dawn at Baía dos Golfinhos when the spinner dolphins return from open water.",
        ],
        highlights: [
          { title: "Baía do Sancho", desc: "Repeatedly voted the world's most beautiful beach — best early, at high tide." },
          { title: "Diving", desc: "Up to 30 m visibility, turtles, rays and wrecks; discover-scuba available for beginners." },
          { title: "Spinner dolphins", desc: "Dawn viewing from the lookout, with biologists monitoring the bay." },
          { title: "Guided trails", desc: "Atalaia, Pontinha and Capim-Açu, all by appointment with daily visitor caps." },
        ],
        bestTime:
          "September to March: calm inner sea, peak visibility and the best diving. April to August brings more rain and big swells on the outer coast — surf season.",
        whereToStay:
          "Boutique pousadas with few suites in Vila dos Remédios and Sueste, private houses with a chef, and the island's best dive operations.",
        faqs: [
          { q: "How many nights in Noronha?", a: "Five nights is a sensible minimum, allowing for fees, tides and one rainy day. Seven gives diving room to breathe." },
          { q: "Which fees apply?", a: "An environmental preservation fee per day of stay, plus the Marine National Park ticket valid for ten days. Both are included in your quote." },
          { q: "How do I get there?", a: "Daily flights from Recife (1h20) and Natal. Book early: air capacity is limited and the good pousadas are small." },
        ],
      },
      es: {
        metaTitle: "Fernando de Noronha a medida | Create Travel",
        metaDescription:
          "Itinerarios privados en Fernando de Noronha: buceo en el Atlántico Sur, Baía do Sancho, delfines y posadas con encanto. Propuesta en 24h.",
        keywords:
          "fernando de noronha viaje, buceo noronha, baia do sancho, posada noronha, isla brasil lujo",
        eyebrow: "Brasil · Pernambuco",
        title: "La isla más protegida del Atlántico Sur",
        subtitle:
          "Visibilidad de 30 metros, delfines al amanecer y un límite diario de visitantes que lo preserva.",
        intro: [
          "Noronha es archipiélago volcánico, parque nacional marino y área protegida con acceso controlado: tasa ambiental, número limitado de visitantes y reglas estrictas de senderos y buceo. El resultado es el mar más claro de Brasil.",
          "Planificamos la isla según mareas y viento: Sancho y Sueste en la marea correcta, buceo en paredes y naufragios del lado externo, y amanecer en la Baía dos Golfinhos.",
        ],
        highlights: [
          { title: "Baía do Sancho", desc: "Elegida varias veces la playa más bonita del mundo: mejor temprano y con marea alta." },
          { title: "Buceo", desc: "Hasta 30 m de visibilidad, tortugas, mantas y naufragios; bautismo para principiantes." },
          { title: "Delfines rotadores", desc: "Observación desde el mirador al amanecer, con biólogos monitoreando la bahía." },
          { title: "Senderos guiados", desc: "Atalaia, Pontinha y Capim-Açu, con reserva previa y límite diario." },
        ],
        bestTime:
          "De septiembre a marzo: mar interior calmo, visibilidad máxima y mejor buceo. De abril a agosto, más lluvia y olas grandes del lado externo.",
        whereToStay:
          "Posadas con encanto de pocas suites en Vila dos Remédios y Sueste, casas privadas con chef y las mejores operaciones de buceo de la isla.",
        faqs: [
          { q: "¿Cuántas noches en Noronha?", a: "Cinco noches es el mínimo razonable, considerando tasas, mareas y un posible día de lluvia. Siete permiten bucear con holgura." },
          { q: "¿Qué tasas existen?", a: "Tasa de preservación ambiental por día de permanencia y entrada del Parque Nacional Marino, válida diez días. Incluimos ambas en el presupuesto." },
          { q: "¿Cómo se llega?", a: "Vuelos diarios desde Recife (1h20) y Natal. La antelación importa: la oferta aérea es limitada y las buenas posadas son pequeñas." },
        ],
      },
    },
  },
];

export const getBrasilLanding = (slug?: string) =>
  BRASIL_LANDINGS.find((l) => l.slug === slug);

export const toLandingLang = (lang?: string): LandingLang =>
  lang === "pt" || lang === "es" ? lang : "en";
