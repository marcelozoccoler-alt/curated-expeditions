import type { ContentLang } from "@/i18n/config";

export interface IncomingCopy {
  meta: {
    title: string;
    description: string;
    keywords: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  intro: {
    heading: string;
    paragraphs: string[];
  };
  destinations: {
    heading: string;
    subheading: string;
  };
  biomesMap?: {
    eyebrow: string;
    heading: string;
    subheading: string;
  };
  process: {
    heading: string;
    subheading: string;
    steps: { title: string; text: string }[];
  };
  trust: {
    heading: string;
    items: string[];
  };
  expertise: {
    heading: string;
    lead: string;
    destinationsLabel: string;
    destinations: string;
    biomes: string;
  };
  cta: {
    heading: string;
    subheading: string;
    button: string;
  };
  faqs: {
    heading: string;
    subheading: string;
    items: { q: string; a: string }[];
  };
  back: string;
}

export const INCOMING_COPY: Record<Exclude<ContentLang, "pt\">, IncomingCopy> = {
  en: {
    meta: {
      title: "Brazil Travel — Tailor-Made Trips by Create Travel",
      description:
        "Plan your custom Brazil trip with Create Travel: Amazon, Pantanal, Lençóis, Bahia, Rio, Iguazu and Fernando de Noronha. Boutique hotels, private guides, authentic experiences.",
      keywords:
        "Brazil travel agency, custom Brazil trip, Amazon tours, Pantanal safari, Lençóis Maranhenses, Brazil luxury travel, tailor-made Brazil itinerary, Rio de Janeiro tours, Iguazu Falls trip, Bahia travel, Fernando de Noronha holiday",
    },
    hero: {
      eyebrow: "Brazil, designed for you",
      title: "Discover Brazil with the people who actually live it.",
      subtitle:
        "Tailor-made trips across Brazil — from the Amazon to the Atlantic Forest, from Rio to Lençóis. No mass tourism, no copy-paste itineraries.",
      cta: "Request my custom quote",
    },
    intro: {
      heading: "An incoming agency that travels Brazil first.",
      paragraphs: [
        "Create Travel is a Brazilian boutique agency based in São Paulo, designing private trips for travelers who arrive curious and leave changed. We don't sell packages — we compose itineraries.",
        "We work with the small lodges nobody lists, the local guides who became friends, the cooks who open their kitchens, and the boatmen who know which bend in the river the pink dolphins love. Brazil through the people who actually live it.",
        "Every quote is hand-built around your dates, pace and obsessions. You get one travel designer, one WhatsApp number, one trip that belongs only to you.",
      ],
    },
    destinations: {
      heading: "The Brazil we love to design",
      subheading:
        "A curated selection of starting points. Combine them, deepen them, or let us suggest something you've never heard of.",
    },
    biomesMap: {
      eyebrow: "Brazil by biomes",
      heading: "Choose Brazil the way nature drew it",
      subheading: "Six biomes plus 7,491 km of coast. Tap a region to discover its wildlife, plants and the natural wonders that make travellers gasp.",
    },
    process: {
      heading: "How we work",
      subheading: "Three steps from a conversation to your trip.",
      steps: [
        {
          title: "1. Tell us your story",
          text: "Dates, dreams, dealbreakers. A short call or message is enough.",
        },
        {
          title: "2. Receive a designed itinerary",
          text: "A custom proposal with hotels, guides, transfers and a clear price — yours to refine.",
        },
        {
          title: "3. Travel with full support",
          text: "A real person on WhatsApp from the moment you land until you're home.",
        },
      ],
    },
    trust: {
      heading: "Why travelers choose us",
      items: [
        "Brazilian agency, fully licensed (Cadastur 21.030.190/0001-60)",
        "Direct relationships with the lodges, not third-party resellers",
        "Private guides and 24/7 in-country support",
      ],
    },
    expertise: {
      heading: "Brazil on the palm of our hand",
      lead: "We customise and combine one, two, three or more destinations into a single seamless journey — fly-and-drive, river boats, charter flights, scenic trains, bespoke transfers. Whatever it takes to make the country flow for you.",
      destinationsLabel: "Destinations we design across Brazil",
      destinations: "Amazônia (Manaus, Rio Negro, Anavilhanas, Mamirauá) · Alter do Chão · Belém & Ilha de Marajó · Monte Roraima · Lençóis Maranhenses · Chapada das Mesas · Jalapão · Chapada dos Veadeiros · Pirenópolis · Pantanal Norte (MT) · Pantanal Sul (MS) · Bonito & Serra da Bodoquena · Cristalino · Serra do Roncador · Chapada Diamantina · Salvador · Ilha de Boipeba · Península de Maraú · Abrolhos & Costa do Descobrimento · Fernando de Noronha · Litoral Pernambucano · Litoral Alagoano · Maragogi · Cânions do Xingó · Jericoacoara · Rota das Emoções · Rota das Falésias · Serra da Capivara · Rio de Janeiro · Cataratas do Iguaçu · Cânions do Sul · Florianópolis · Serra do Cipó · Serra da Canastra · Cidades Históricas & Inhotim · Estrada Real · Campos do Jordão",
      biomes: "Local expertise across Brazil's 7 biomes — Amazon, Cerrado, Caatinga, Atlantic Forest, Pampa, Pantanal and Coastal-Marine — with trusted contacts in each one.",
    },
    cta: {
      heading: "Ready to design your Brazil?",
      subheading:
        "Tell us when you'd like to come and we'll come back with a proposal in 48 hours.",
      button: "Start on WhatsApp",
    },
    faqs: {
      heading: "Brazil trip planning — your questions answered",
      subheading: "Honest answers from the team that builds your trip.",
      items: [
        {
          q: "How much does a tailor-made Brazil trip cost with Create Travel?",
          a: "We don't sell off-the-shelf packages, so there's no fixed list price. Cost depends on season, length of stay, hotel category, internal flights, private guides and experiences. Most of our custom Brazil trips start around USD 350–500 per person per day for boutique-level travel with private transfers and curated experiences — premium lodges and remote destinations (Amazon, Pantanal, Fernando de Noronha) sit higher. Tell us your dates and dream and we send a detailed, transparent quote within 48 hours.",
        },
        {
          q: "Why book Brazil with Create Travel instead of a big online agency?",
          a: "We are a Brazilian boutique agency (Cadastur 21.030.190/0001-60) based in São Paulo. You speak with one travel designer, not a call center. We have direct relationships with the lodges, guides and operators — no resellers, no markup chains. Every itinerary is built by hand around your pace and obsessions, and a real person is on WhatsApp 24/7 during your trip.",
        },
        {
          q: "When is the best time to travel to Brazil?",
          a: "Brazil is a year-round destination thanks to its size. May–September is dry season for the Amazon and Pantanal (best for wildlife). June–September is ideal for Lençóis Maranhenses (lagoons full). December–March is high season for beaches (Bahia, Northeast, Rio). We tune the itinerary to the best regions for your dates.",
        },
        {
          q: "Do you handle the whole trip — flights, hotels, guides, transfers?",
          a: "Yes. We design the full journey end-to-end: international and domestic flights, boutique hotels and lodges, private bilingual guides, transfers, charter flights when needed, restaurant reservations and special experiences. One trip, one team, one WhatsApp.",
        },
        {
          q: "Is it safe to travel in Brazil?",
          a: "With local knowledge, yes. We choose the safest neighborhoods, vetted drivers and trusted guides, and brief you on common-sense practices. Our 24/7 in-country support is always one message away.",
        },
      ],
    },
    back: "Back to homepage",
  },
  es: {
    meta: {
      title: "Viajes a Brasil — Itinerarios a Medida con Create Travel",
      description:
        "Planifica tu viaje a medida por Brasil con Create Travel: Amazonía, Pantanal, Lençóis, Bahía, Río, Iguazú y Fernando de Noronha. Hoteles boutique, guías privados, experiencias auténticas.",
      keywords:
        "agencia de viajes a Brasil, viaje a medida Brasil, viaje Amazonía, safari Pantanal, Lençóis Maranhenses, viajes de lujo Brasil, itinerario personalizado Brasil, tours Río de Janeiro, Cataratas del Iguazú, viaje a Bahía, Fernando de Noronha",
    },
    hero: {
      eyebrow: "Brasil, diseñado para ti",
      title: "Descubre Brasil con quienes realmente lo viven.",
      subtitle:
        "Viajes a medida por todo Brasil — de la Amazonía a la Mata Atlántica, de Río a los Lençóis. Sin turismo de masas, sin itinerarios calcados.",
      cta: "Solicitar mi presupuesto a medida",
    },
    intro: {
      heading: "Una agencia incoming que viaja Brasil primero.",
      paragraphs: [
        "Create Travel es una agencia brasileña boutique con sede en São Paulo, que diseña viajes privados para viajeros que llegan curiosos y se van transformados. No vendemos paquetes — componemos itinerarios.",
        "Trabajamos con los pequeños lodges que nadie lista, los guías locales que se volvieron amigos, las cocineras que abren sus casas y los barqueros que saben en qué recodo del río están los delfines rosados. Brasil a través de quienes lo viven de verdad.",
        "Cada presupuesto se construye a mano según tus fechas, tu ritmo y tus obsesiones. Tendrás un diseñador de viajes, un WhatsApp, un viaje que pertenece solo a ti.",
      ],
    },
    destinations: {
      heading: "El Brasil que amamos diseñar",
      subheading:
        "Una selección curada de puntos de partida. Combínalos, profundízalos o déjanos sugerirte algo que nunca habías escuchado.",
    },
    biomesMap: {
      eyebrow: "Brasil por biomas",
      heading: "Elige Brasil tal como lo dibujó la naturaleza",
      subheading: "Seis biomas más 7.491 km de costa. Toca una región para descubrir su fauna, su flora y las maravillas naturales que hacen suspirar a los viajeros.",
    },
    process: {
      heading: "Cómo trabajamos",
      subheading: "Tres pasos entre una conversación y tu viaje.",
      steps: [
        {
          title: "1. Cuéntanos tu historia",
          text: "Fechas, sueños, no negociables. Una llamada corta o un mensaje basta.",
        },
        {
          title: "2. Recibe un itinerario diseñado",
          text: "Una propuesta personalizada con hoteles, guías, traslados y un precio claro — tuyo para ajustar.",
        },
        {
          title: "3. Viaja con apoyo total",
          text: "Una persona real en WhatsApp desde que aterrizas hasta que vuelves a casa.",
        },
      ],
    },
    trust: {
      heading: "Por qué los viajeros nos eligen",
      items: [
        "Agencia brasileña con licencia (Cadastur 21.030.190/0001-60)",
        "Relación directa con los lodges, sin revendedores",
        "Guías privados y soporte 24/7 en destino",
      ],
    },
    expertise: {
      heading: "Brasil en la palma de la mano",
      lead: "Personalizamos y combinamos uno, dos, tres o más destinos en un único viaje fluido — vuelos internos, barcos por los ríos, charters, trenes panorámicos y traslados privados. Lo que haga falta para que el país fluya para ti.",
      destinationsLabel: "Destinos que diseñamos por todo Brasil",
      destinations: "Amazônia (Manaus, Rio Negro, Anavilhanas, Mamirauá) · Alter do Chão · Belém & Ilha de Marajó · Monte Roraima · Lençóis Maranhenses · Chapada das Mesas · Jalapão · Chapada dos Veadeiros · Pirenópolis · Pantanal Norte (MT) · Pantanal Sul (MS) · Bonito & Serra da Bodoquena · Cristalino · Serra do Roncador · Chapada Diamantina · Salvador · Ilha de Boipeba · Península de Maraú · Abrolhos & Costa do Descobrimento · Fernando de Noronha · Litoral Pernambucano · Litoral Alagoano · Maragogi · Cânions do Xingó · Jericoacoara · Rota das Emoções · Rota das Falésias · Serra da Capivara · Rio de Janeiro · Cataratas do Iguaçu · Cânions do Sul · Florianópolis · Serra do Cipó · Serra da Canastra · Cidades Históricas & Inhotim · Estrada Real · Campos do Jordão",
      biomes: "Expertise local en los 7 biomas de Brasil — Amazonía, Cerrado, Caatinga, Mata Atlántica, Pampa, Pantanal y Costero-Marino — con contactos de confianza en cada uno.",
    },
    cta: {
      heading: "¿Listo para diseñar tu Brasil?",
      subheading:
        "Cuéntanos cuándo te gustaría venir y te enviaremos una propuesta en 48 horas.",
      button: "Empezar por WhatsApp",
    },
    faqs: {
      heading: "Viajar a Brasil — tus preguntas resueltas",
      subheading: "Respuestas honestas del equipo que diseña tu viaje.",
      items: [
        {
          q: "¿Cuánto cuesta un viaje a medida por Brasil con Create Travel?",
          a: "No vendemos paquetes cerrados, así que no hay precio de tabla. El costo depende de la temporada, duración, categoría de hotel, vuelos internos, guías privados y experiencias. La mayoría de nuestros viajes a medida arrancan en torno a USD 350–500 por persona/día en nivel boutique con traslados privados y experiencias curadas — lodges premium y destinos remotos (Amazonía, Pantanal, Fernando de Noronha) están por encima. Cuéntanos fechas y sueños y enviamos un presupuesto detallado y transparente en 48 horas.",
        },
        {
          q: "¿Por qué reservar Brasil con Create Travel y no con una gran OTA?",
          a: "Somos una agencia brasileña boutique (Cadastur 21.030.190/0001-60) con sede en São Paulo. Hablas con un único diseñador de viajes, no con un call center. Tenemos relación directa con los lodges, guías y operadores — sin reventas, sin cadenas de comisión. Cada itinerario se construye a mano y una persona real está en WhatsApp 24/7 durante tu viaje.",
        },
        {
          q: "¿Cuál es la mejor época para viajar a Brasil?",
          a: "Brasil es destino de todo el año por su tamaño. Mayo–septiembre es estación seca en Amazonía y Pantanal (ideal para fauna). Junio–septiembre es ideal para Lençóis Maranhenses (lagunas llenas). Diciembre–marzo es temporada alta de playas (Bahía, Nordeste, Río). Afinamos el itinerario según tus fechas.",
        },
        {
          q: "¿Organizan todo el viaje — vuelos, hoteles, guías, traslados?",
          a: "Sí. Diseñamos el viaje de principio a fin: vuelos internacionales e internos, hoteles boutique y lodges, guías privados bilingües, traslados, vuelos charter cuando hacen falta, reservas de restaurantes y experiencias especiales. Un viaje, un equipo, un WhatsApp.",
        },
        {
          q: "¿Es seguro viajar por Brasil?",
          a: "Con conocimiento local, sí. Elegimos los barrios más seguros, conductores y guías de confianza, y te orientamos con buenas prácticas. Nuestro soporte 24/7 en destino siempre está a un mensaje de distancia.",
        },
      ],
    },
    back: "Volver al inicio",
  },
  it: {
    meta: {
      title: "Viaggi in Brasile — Itinerari su Misura con Create Travel",
      description:
        "Pianifica il tuo viaggio su misura in Brasile con Create Travel: Amazzonia, Pantanal, Lençóis, Bahia, Rio, Iguazú e Fernando de Noronha. Hotel boutique, guide private, esperienze autentiche.",
      keywords:
        "agenzia viaggi Brasile, viaggio su misura Brasile, tour Amazzonia, safari Pantanal, Lençóis Maranhenses, viaggi di lusso Brasile, itinerario personalizzato Brasile, tour Rio de Janeiro, Cascate di Iguazú, viaggio Bahia, Fernando de Noronha",
    },
    hero: {
      eyebrow: "Brasile, disegnato per te",
      title: "Scopri il Brasile con chi lo vive davvero.",
      subtitle:
        "Viaggi su misura in tutto il Brasile — dall'Amazzonia alla Mata Atlantica, da Rio ai Lençóis. Niente turismo di massa, nessun itinerario fotocopiato.",
      cta: "Richiedi il mio preventivo su misura",
    },
    intro: {
      heading: "Un'agenzia incoming che viaggia il Brasile prima di te.",
      paragraphs: [
        "Create Travel è un'agenzia brasiliana boutique con sede a San Paolo, che disegna viaggi privati per viaggiatori che arrivano curiosi e ripartono trasformati. Non vendiamo pacchetti — componiamo itinerari.",
        "Lavoriamo con i piccoli lodge che nessuno elenca, le guide locali diventate amiche, le cuoche che aprono le loro case e i barcaioli che sanno in quale ansa del fiume nuotano i delfini rosa. Il Brasile attraverso chi lo vive davvero.",
        "Ogni preventivo è costruito a mano sulle tue date, sul tuo ritmo e sulle tue passioni. Avrai un travel designer, un WhatsApp, un viaggio che appartiene soltanto a te.",
      ],
    },
    destinations: {
      heading: "Il Brasile che amiamo disegnare",
      subheading:
        "Una selezione curata di punti di partenza. Combinali, approfondiscili o lascia che ti suggeriamo qualcosa che non avevi mai sentito nominare.",
    },
    biomesMap: {
      eyebrow: "Brasile per biomi",
      heading: "Scegli il Brasile come l'ha disegnato la natura",
      subheading: "Sei biomi più 7.491 km di costa. Tocca una regione per scoprirne fauna, flora e le meraviglie naturali che fanno trattenere il respiro.",
    },
    process: {
      heading: "Come lavoriamo",
      subheading: "Tre passi tra una conversazione e il tuo viaggio.",
      steps: [
        {
          title: "1. Raccontaci la tua storia",
          text: "Date, sogni, vincoli. Una breve chiamata o un messaggio è sufficiente.",
        },
        {
          title: "2. Ricevi un itinerario disegnato",
          text: "Una proposta personalizzata con hotel, guide, transfer e un prezzo chiaro — tua da affinare.",
        },
        {
          title: "3. Viaggia con pieno supporto",
          text: "Una persona vera su WhatsApp da quando atterri a quando torni a casa.",
        },
      ],
    },
    trust: {
      heading: "Perché i viaggiatori ci scelgono",
      items: [
        "Agenzia brasiliana, regolarmente registrata (Cadastur 21.030.190/0001-60)",
        "Rapporto diretto con i lodge, senza intermediari",
        "Guide private e supporto 24/7 sul posto",
      ],
    },
    expertise: {
      heading: "Il Brasile nel palmo della mano",
      lead: "Personalizziamo e combiniamo una, due, tre o più destinazioni in un unico viaggio fluido — voli interni, barche fluviali, charter, treni panoramici e transfer privati. Tutto ciò che serve perché il paese scorra per te.",
      destinationsLabel: "Destinazioni che progettiamo in tutto il Brasile",
      destinations: "Amazônia (Manaus, Rio Negro, Anavilhanas, Mamirauá) · Alter do Chão · Belém & Ilha de Marajó · Monte Roraima · Lençóis Maranhenses · Chapada das Mesas · Jalapão · Chapada dos Veadeiros · Pirenópolis · Pantanal Norte (MT) · Pantanal Sul (MS) · Bonito & Serra da Bodoquena · Cristalino · Serra do Roncador · Chapada Diamantina · Salvador · Ilha de Boipeba · Península de Maraú · Abrolhos & Costa do Descobrimento · Fernando de Noronha · Litoral Pernambucano · Litoral Alagoano · Maragogi · Cânions do Xingó · Jericoacoara · Rota das Emoções · Rota das Falésias · Serra da Capivara · Rio de Janeiro · Cataratas do Iguaçu · Cânions do Sul · Florianópolis · Serra do Cipó · Serra da Canastra · Cidades Históricas & Inhotim · Estrada Real · Campos do Jordão",
      biomes: "Expertise locale nei 7 biomi del Brasile — Amazzonia, Cerrado, Caatinga, Foresta Atlantica, Pampa, Pantanal e Costiero-Marino — con contatti fidati in ognuno.",
    },
    cta: {
      heading: "Pronto a disegnare il tuo Brasile?",
      subheading:
        "Dicci quando vorresti venire e ti risponderemo con una proposta entro 48 ore.",
      button: "Inizia su WhatsApp",
    },
    faqs: {
      heading: "Viaggiare in Brasile — le tue domande, le nostre risposte",
      subheading: "Risposte oneste dal team che disegna il tuo viaggio.",
      items: [
        {
          q: "Quanto costa un viaggio su misura in Brasile con Create Travel?",
          a: "Non vendiamo pacchetti preconfezionati, quindi non c'è un listino. Il costo dipende da stagione, durata, categoria di hotel, voli interni, guide private ed esperienze. La maggior parte dei nostri viaggi su misura parte intorno a USD 350–500 per persona/giorno in livello boutique con transfer privati ed esperienze curate — lodge premium e destinazioni remote (Amazzonia, Pantanal, Fernando de Noronha) sono più alti. Raccontaci date e desideri e inviamo un preventivo dettagliato e trasparente in 48 ore.",
        },
        {
          q: "Perché prenotare il Brasile con Create Travel invece di una grande OTA?",
          a: "Siamo un'agenzia brasiliana boutique (Cadastur 21.030.190/0001-60) con sede a San Paolo. Parli con un unico travel designer, non con un call center. Abbiamo rapporti diretti con i lodge, le guide e gli operatori — niente intermediari, niente catene di commissioni. Ogni itinerario è costruito a mano e una persona reale è su WhatsApp 24/7 durante il viaggio.",
        },
        {
          q: "Qual è il periodo migliore per viaggiare in Brasile?",
          a: "Il Brasile è una destinazione di tutto l'anno grazie alla sua dimensione. Maggio–settembre è stagione secca in Amazzonia e Pantanal (ideale per la fauna). Giugno–settembre è perfetto per i Lençóis Maranhenses (lagune piene). Dicembre–marzo è alta stagione per le spiagge (Bahia, Nordeste, Rio). Adattiamo l'itinerario alle tue date.",
        },
        {
          q: "Organizzate l'intero viaggio — voli, hotel, guide, transfer?",
          a: "Sì. Disegniamo il viaggio dall'inizio alla fine: voli internazionali e interni, hotel boutique e lodge, guide private bilingue, transfer, voli charter quando servono, prenotazioni di ristoranti ed esperienze speciali. Un viaggio, un team, un WhatsApp.",
        },
        {
          q: "È sicuro viaggiare in Brasile?",
          a: "Con conoscenza locale, sì. Scegliamo i quartieri più sicuri, autisti e guide di fiducia e ti diamo indicazioni di buon senso. Il nostro supporto 24/7 sul posto è sempre a un messaggio di distanza.",
        },
      ],
    },
    back: "Torna alla home",
  },
  de: {
    meta: {
      title: "Brasilien Reisen — Maßgeschneiderte Touren von Create Travel",
      description:
        "Plane deine maßgeschneiderte Brasilien-Reise mit Create Travel: Amazonas, Pantanal, Lençóis, Bahia, Rio, Iguazú und Fernando de Noronha. Boutique-Hotels, private Guides, authentische Erlebnisse.",
      keywords:
        "Brasilien Reiseagentur, maßgeschneiderte Brasilien Reise, Amazonas Touren, Pantanal Safari, Lençóis Maranhenses, Luxusreisen Brasilien, individuelle Brasilien Rundreise, Rio de Janeiro Touren, Iguazú Wasserfälle, Bahia Reise, Fernando de Noronha Urlaub",
    },
    hero: {
      eyebrow: "Brasilien, für dich gestaltet",
      title: "Entdecke Brasilien mit denen, die es wirklich leben.",
      subtitle:
        "Maßgeschneiderte Reisen durch ganz Brasilien — vom Amazonas bis zur Mata Atlântica, von Rio bis zu den Lençóis. Kein Massentourismus, keine Copy-Paste-Routen.",
      cta: "Mein individuelles Angebot anfordern",
    },
    intro: {
      heading: "Eine Incoming-Agentur, die Brasilien zuerst selbst bereist.",
      paragraphs: [
        "Create Travel ist eine brasilianische Boutique-Agentur mit Sitz in São Paulo. Wir entwerfen private Reisen für Menschen, die neugierig anreisen und verwandelt zurückkehren. Wir verkaufen keine Pauschalreisen — wir komponieren Reisen.",
        "Wir arbeiten mit den kleinen Lodges, die nirgendwo gelistet sind, mit lokalen Guides, die zu Freunden wurden, mit Köchinnen, die ihre Küchen öffnen, und mit Bootsführern, die wissen, an welcher Flussbiegung die rosa Delfine schwimmen. Brasilien durch jene, die es wirklich leben.",
        "Jedes Angebot wird von Hand auf deine Daten, dein Tempo und deine Leidenschaften zugeschnitten. Du bekommst eine Reisedesignerin, eine WhatsApp-Nummer, eine Reise, die nur dir gehört.",
      ],
    },
    destinations: {
      heading: "Das Brasilien, das wir lieben zu gestalten",
      subheading:
        "Eine kuratierte Auswahl von Ausgangspunkten. Kombiniere sie, vertiefe sie oder lass uns dir etwas vorschlagen, von dem du noch nie gehört hast.",
    },
    biomesMap: {
      eyebrow: "Brasilien nach Biomen",
      heading: "Erlebe Brasilien, wie die Natur es gezeichnet hat",
      subheading: "Sechs Biome plus 7.491 km Küste. Tippe eine Region an und entdecke Tierwelt, Pflanzen und Naturwunder, die jeden Reisenden staunen lassen.",
    },
    process: {
      heading: "So arbeiten wir",
      subheading: "Drei Schritte von einem Gespräch bis zu deiner Reise.",
      steps: [
        {
          title: "1. Erzähl uns deine Geschichte",
          text: "Daten, Träume, No-Gos. Ein kurzer Anruf oder eine Nachricht reicht.",
        },
        {
          title: "2. Erhalte eine gestaltete Reiseroute",
          text: "Ein individueller Vorschlag mit Hotels, Guides, Transfers und klarem Preis — zum Verfeinern.",
        },
        {
          title: "3. Reise mit voller Betreuung",
          text: "Eine echte Person auf WhatsApp — von der Landung bis zur Heimkehr.",
        },
      ],
    },
    trust: {
      heading: "Warum Reisende sich für uns entscheiden",
      items: [
        "Brasilianische Agentur, vollständig lizenziert (Cadastur 21.030.190/0001-60)",
        "Direkte Beziehungen zu den Lodges, keine Wiederverkäufer",
        "Private Guides und 24/7-Betreuung vor Ort",
      ],
    },
    expertise: {
      heading: "Brasilien in der Handfläche",
      lead: "Wir kombinieren ein, zwei, drei oder mehr Reiseziele zu einer einzigen nahtlosen Reise — Inlandsflüge, Flussboote, Charter, Panoramazüge und private Transfers. Was auch immer nötig ist, damit das Land für dich fließt.",
      destinationsLabel: "Reiseziele, die wir in ganz Brasilien gestalten",
      destinations: "Amazônia (Manaus, Rio Negro, Anavilhanas, Mamirauá) · Alter do Chão · Belém & Ilha de Marajó · Monte Roraima · Lençóis Maranhenses · Chapada das Mesas · Jalapão · Chapada dos Veadeiros · Pirenópolis · Pantanal Norte (MT) · Pantanal Sul (MS) · Bonito & Serra da Bodoquena · Cristalino · Serra do Roncador · Chapada Diamantina · Salvador · Ilha de Boipeba · Península de Maraú · Abrolhos & Costa do Descobrimento · Fernando de Noronha · Litoral Pernambucano · Litoral Alagoano · Maragogi · Cânions do Xingó · Jericoacoara · Rota das Emoções · Rota das Falésias · Serra da Capivara · Rio de Janeiro · Cataratas do Iguaçu · Cânions do Sul · Florianópolis · Serra do Cipó · Serra da Canastra · Cidades Históricas & Inhotim · Estrada Real · Campos do Jordão",
      biomes: "Lokale Expertise in Brasiliens 7 Biomen — Amazonas, Cerrado, Caatinga, Atlantischer Regenwald, Pampa, Pantanal und Küsten-/Meeresgebiet — mit vertrauenswürdigen Kontakten in jedem davon.",
    },
    cta: {
      heading: "Bereit, dein Brasilien zu gestalten?",
      subheading:
        "Sag uns, wann du kommen möchtest, und wir melden uns innerhalb von 48 Stunden mit einem Vorschlag.",
      button: "Auf WhatsApp starten",
    },
    faqs: {
      heading: "Brasilien-Reise planen — deine Fragen beantwortet",
      subheading: "Ehrliche Antworten vom Team, das deine Reise gestaltet.",
      items: [
        {
          q: "Was kostet eine maßgeschneiderte Brasilien-Reise mit Create Travel?",
          a: "Wir verkaufen keine Pauschalreisen, deshalb gibt es keinen Listenpreis. Die Kosten hängen von Saison, Dauer, Hotelkategorie, Inlandsflügen, privaten Guides und Erlebnissen ab. Die meisten unserer maßgeschneiderten Reisen beginnen bei etwa USD 350–500 pro Person/Tag im Boutique-Niveau mit privaten Transfers und kuratierten Erlebnissen — Premium-Lodges und abgelegene Ziele (Amazonas, Pantanal, Fernando de Noronha) liegen darüber. Erzähle uns deine Daten und Träume — du bekommst innerhalb von 48 Stunden ein detailliertes, transparentes Angebot.",
        },
        {
          q: "Warum Brasilien mit Create Travel statt mit einer großen OTA buchen?",
          a: "Wir sind eine brasilianische Boutique-Agentur (Cadastur 21.030.190/0001-60) mit Sitz in São Paulo. Du sprichst mit einer Reisedesignerin, nicht mit einem Call-Center. Wir haben direkte Beziehungen zu Lodges, Guides und Anbietern — keine Wiederverkäufer, keine Provisionsketten. Jede Reise wird von Hand gestaltet, und eine echte Person ist während der gesamten Reise 24/7 auf WhatsApp erreichbar.",
        },
        {
          q: "Wann ist die beste Reisezeit für Brasilien?",
          a: "Brasilien ist dank seiner Größe ganzjährig bereisbar. Mai–September ist Trockenzeit im Amazonas und Pantanal (ideal für Tierbeobachtung). Juni–September ist perfekt für die Lençóis Maranhenses (Lagunen voll). Dezember–März ist Hochsaison für Strände (Bahia, Nordosten, Rio). Wir stimmen die Route auf deine Daten ab.",
        },
        {
          q: "Organisiert ihr die gesamte Reise — Flüge, Hotels, Guides, Transfers?",
          a: "Ja. Wir gestalten die Reise von Anfang bis Ende: internationale und Inlandsflüge, Boutique-Hotels und Lodges, private zweisprachige Guides, Transfers, Charterflüge bei Bedarf, Restaurantreservierungen und besondere Erlebnisse. Eine Reise, ein Team, ein WhatsApp.",
        },
        {
          q: "Ist Brasilien sicher zu bereisen?",
          a: "Mit lokalem Wissen — ja. Wir wählen die sichersten Viertel, geprüfte Fahrer und vertrauenswürdige Guides und geben dir vernünftige Verhaltensregeln. Unser 24/7-Support vor Ort ist immer nur eine Nachricht entfernt.",
        },
      ],
    },
    back: "Zurück zur Startseite",
  },
  fr: {
    meta: {
      title: "Voyage au Brésil — Séjours sur mesure par Create Travel",
      description:
        "Organisez votre voyage sur mesure au Brésil avec Create Travel : Amazonie, Pantanal, Lençóis, Bahia, Rio, Iguazu et Fernando de Noronha. Hôtels de charme, guides privés, expériences authentiques.",
      keywords:
        "agence de voyage Brésil, voyage sur mesure Brésil, circuits Amazonie, safari Pantanal, Lençóis Maranhenses, voyage de luxe Brésil, itinéraire sur mesure Brésil, circuits Rio de Janeiro, voyage Chutes d'Iguazu, voyage Bahia, vacances Fernando de Noronha",
    },
    hero: {
      eyebrow: "Le Brésil, conçu pour vous",
      title: "Découvrez le Brésil avec ceux qui y vivent.",
      subtitle:
        "Voyages sur mesure à travers le Brésil — de l'Amazonie à la Forêt Atlantique, de Rio à Lençóis. Pas de tourisme de masse, pas d'itinéraires copier-coller.",
      cta: "Demander mon devis personnalisé",
    },
    intro: {
      heading: "Une agence réceptive qui voyage d'abord au Brésil.",
      paragraphs: [
        "Create Travel est une agence brésilienne basée à São Paulo, qui conçoit des voyages privés pour les voyageurs qui arrivent curieux et repartent transformés. Nous ne vendons pas de forfaits — nous composons des itinéraires.",
        "Nous travaillons avec les petites auberges que personne ne répertorie, les guides locaux devenus amis, les cuisiniers qui ouvrent leurs cuisines, et les bateliers qui savent quel méandre de la rivière les dauphins roses adorent. Le Brésil à travers les gens qui y vivent.",
        "Chaque devis est construit sur mesure en fonction de vos dates, de votre rythme et de vos obsessions. Vous obtenez un seul concepteur de voyage, un seul numéro WhatsApp, un seul voyage qui n'appartient qu'à vous.",
      ],
    },
    destinations: {
      heading: "Le Brésil que nous aimons concevoir",
      subheading:
        "Une sélectionT d'expériences. Combinez-les, approfondissez-les ou laissez-nous vous suggérer quelque chose dont vous n'avez jamais entendu parler.",
    },
    biomesMap: {
      eyebrow: "Le Brésil par biomes",
      heading: "Choisissez le Brésil tel que la nature l'a dessiné",
      subheading: "Six biomes plus 7 491 km de côte. Touchez une région pour découvrir sa faune, sa flore et les merveilles naturelles qui émerveillent les voyageurs.",
    },
    process: {
      heading: "Comment nous travaillons",
      subheading: "Trois étapes, de la conversation à votre voyage.",
      steps: [
        {
          title: "1. Racontez-nous votre histoire",
          text: "Dates, rêves, impératifs. Un court appel ou un message suffit.",
        },
        {
          title: "2. Recevez un itinéraire conçu",
          text: "Une proposition personnalisée avec hôtels, guides, transferts et un prix clair — que vous pourrez affiner.",
        },
        {
          title: "3. Voyagez avec un soutien complet",
          text: "Une personne réelle sur WhatsApp dès votre arrivée et jusqu'à votre retour chez vous.",
        },
      ],
    },
    trust: {
      heading: "Pourquoi les voyageurs nous choisissent",
      items: [
        "Agence brésilienne, entièrement agréée (Cadastur 21.030.190/0001-60)",
        "Relations directes avec les lodges, pas de revendeurs tiers",
        "Guides privés et assistance 24h/24 et 7j/7 dans le pays",
      ],
    },
    expertise: {
      heading: "Le Brésil au bout de nos doigts",
      lead: "Nous personnalisons et combinons une, deux, trois destinations ou plus en un seul voyage fluide — fly-and-drive, bateaux fluviaux, vols charters, trains panoramiques, transferts sur mesure. Tout ce qu'il faut pour que le pays vous convienne.",
      destinationsLabel: "Destinations que nous concevons à travers le Brésil",
      destinations: "Amazonie (Manaus, Rio Negro, Anavilhanas, Mamirauá) · Alter do Chão · Belém & Ilha de Marajó · Monte Roraima · Lençóis Maranhenses · Chapada das Mesas · Jalapão · Chapada dos Veadeiros · Pirenópolis · Pantanal Norte (MT) · Pantanal Sul (MS) · Bonito & Serra da Bodoquena · Cristalino · Serra do Roncador · Chapada Diamantina · Salvador · Ilha de Boipeba · Península de Maraú · Abrolhos & Costa do Descobrimento · Fernando de Noronha · Litoral Pernambucano · Litoral Alagoano · Maragogi · Cânions do Xingó · Jericoacoara · Rota das Emoções · Rota das Falésias · Serra da Capivara · Rio de Janeiro · Cataratas do Iguaçu · Cânions do Sul · Florianópolis · Serra do Cipó · Serra da Canastra · Cidades Históricas & Inhotim · Estrada Real · Campos do Jordão",
      biomes: "Expertise locale dans les 7 biomes du Brésil — Amazonie, Cerrado, Caatinga, Forêt Atlantique, Pampa, Pantanal et Côtier-Marin — avec des contacts fiables dans chacun d'eux.",
    },
    cta: {
      heading: "Prêt à concevoir votre Brésil ?",
      subheading:
        "Dites-nous quand vous souhaitez venir et nous vous ferons une proposition sous 48 heures.",
      button: "Commencer sur WhatsApp",
    },
    faqs: {
      heading: "Préparation de voyage au Brésil — vos questions, nos réponses",
      subheading: "Des réponses honnêtes de l'équipe qui construit votre voyage.",
      items: [
        {
          q: "Combien coûte un voyage sur mesure au Brésil avec Create Travel ?",
          a: "Nous ne vendons pas de forfaits standard, il n'y a donc pas de prix fixe. Le coût dépend de la saison, de la durée du séjour, de la catégorie d'hôtel, des vols intérieurs, des guides privés et des expériences. La plupart de nos voyages sur mesure au Brésil commencent autour de 350 à 500 USD par personne et par jour pour un voyage de type boutique avec transferts privés et expériences organisées — les lodges haut de gamme et les destinations isolées (Amazonie, Pantanal, Fernando de Noronha) sont plus chers. Dites-nous vos dates et votre rêve et nous vous envoyons un devis détaillé et transparent sous 48 heures.",
        },
        {
          q: "Pourquoi réserver le Brésil avec Create Travel plutôt qu'une grande agence en ligne ?",
          a: "Nous sommes une agence de charme brésilienne (Cadastur 21.030.190/0001-60) basée à São Paulo. Vous parlez à un seul concepteur de voyage, pas à un centre d'appels. Nous avons des relations directes avec les lodges, les guides et les opérateurs — pas de revendeurs, pas de chaînes de majoration. Chaque itinéraire est construit à la main en fonction de votre rythme et de vos obsessions, et une personne réelle est sur WhatsApp 24h/24 et 7j/7 pendant votre voyage.",
        },
        {
          q: "Quelle est la meilleure période pour voyager au Brésil ?",
          a: "Le Brésil est une destination toute l'année. Mai-septembre est la saison sèche pour l'Amazonie et le Pantanal (idéal pour la faune). Juin-septembre est idéal pour Lençóis Maranhenses (lacs pleins). Décembre-mars est la haute saison pour les plages (Bahia, Nord-Est, Rio). Nous ajustons l'itinéraire aux meilleures régions pour vos dates.",
        },
        {
          q: "Vous occupez-vous de tout le voyage — vols, hôtels, guides, transferts ?",
          a: "Oui. Nous concevons l'intégralité du voyage de bout en bout : vols internationaux et intérieurs, hôtels de charme et lodges, guides bilingues privés, transferts, vols charters si nécessaires, réservations de restaurants et expériences spéciales. Un seul voyage, une seule équipe, un seul WhatsApp.",
        },
        {
          q: "Est-il sûr de voyager au Brésil ?",
          a: "Avec une connaissance locale, oui. Nous choisissons les quartiers les plus sûrs, les chauffeurs vérifiés et les guides de confiance, et vous informons des pratiques de bon sens. Notre assistance 24h/24 et 7j/7 dans le pays n'est qu'à un message.",
        },
      ],
    },
    back: "Retour à la page d'accueil",
  },
  he: {
    meta: {
      title: "טיולים לברזיל — טיולים בהתאמה אישית על ידי Create Travel",
      description:
        "תכננו את הטיול המותאם אישית שלכם לברזיל עם Create Travel: אמזונס, פנטנל, לנצ'ויס, באהיה, ריו, איגואסו ופרננדו דה נורוניה. מלונות בוטיק, מדריכים פרטיים, חוויות אותנטיות.",
      keywords:
        "סוכנות נסיעות ברזיל, טיול מותאם אישית לברזיל, טיולי אמזונס, ספארי פנטנל, לנצ'ויס מרניינסס, טיולי יוקרה לברזיל, מסלול טיול מותאם אישית לברזיל, טיולים בריו דה ז'ניירו, טיול למפלי איגואסו, טיול לבאהיה, חופשה בפרננדו דה נורוניה",
    },
    hero: {
      eyebrow: "ברזיל, עוצב עבורכם",
      title: "גלו את ברזיל עם האנשים שבאמת חיים בה.",
      subtitle:
        "טיולים בהתאמה אישית ברחבי ברזיל — מהאמזונס ועד יער האטלנטי, מריו ללנצ'ויס. ללא תיירות המונית, ללא מסלולים משוכפלים.",
      cta: "בקשו הצעת מחיר בהתאמה אישית",
    },
    intro: {
      heading: "סוכנות נכנסת שקודם כל נוסעת בברזיל.",
      paragraphs: [
        "Create Travel היא סוכנות בוטיק ברזילאית שבסיסה בסאו פאולו, המעצבת טיולים פרטיים למטיילים שמגיעים סקרנים ועוזבים עם שינוי. אנחנו לא מוכרים חבילות — אנחנו מרכיבים מסלולים.",
        "אנחנו עובדים עם הלודג'ים הקטנים שאיש לא מפרסם, המדריכים המקומיים שהפכו לחברים, הטבחים שפותחים את מטבחיהם, וספני הסירות שיודעים באיזו עיקול בנהר הדולפינים הוורודים אוהבים. ברזיל דרך האנשים שבאמת חיים בה.",
        "כל הצעת מחיר בנויה בעבודת יד סביב התאריכים, הקצב והאובססיות שלכם. אתם מקבלים מעצב טיולים אחד, מספר וואטסאפ אחד, טיול אחד ששייך רק לכם.",
      ],
    },
    destinations: {
      heading: "הברזיל שאנו אוהבים לעצב",
      subheading:
        "מבחר מוקפד של נקודות מוצא. שלבו אותן, העמיקו אותן, או תנו לנו להציע לכם משהו שמעולם לא שמעתם עליו.",
    },
    biomesMap: {
      eyebrow: "ברזיל לפי ביומות",
      heading: "בחרו את ברזיל כפי שהטבע צייר אותה",
      subheading: "שישה ביומות בתוספת 7,491 ק\"מ של חוף. הקישו על אזור כדי לגלות את חיות הבר, הצמחים ופלאי הטבע שגורמים למטיילים להתפעם.",
    },
    process: {
      heading: "איך אנחנו עובדים",
      subheading: "שלושה שלבים משיחה ועד הטיול שלכם.",
      steps: [
        {
          title: "1. ספרו לנו את הסיפור שלכם",
          text: "תאריכים, חלומות, איסורים. מספיקה שיחה קצרה או הודעה.",
        },
        {
          title: "2. קבלו מסלול מעוצב",
          text: "הצעה מותאמת אישית עם מלונות, מדריכים, העברות ומחיר ברור — שלכם לליטוש.",
        },
        {
          title: "3. טוסו עם תמיכה מלאה",
          text: "אדם אמיתי בוואטסאפ מרגע נחיתתכם ועד חזרתכם הביתה.",
        },
      ],
    },
    trust: {
      heading: "מדוע מטיילים בוחרים בנו",
      items: [
        "סוכנות ברזילאית, מורשית במלואה (Cadastur 21.030.190/0001-60)",
        "קשרים ישירים עם הלודג'ים, לא משווקים צד שלישי",
        "מדריכים פרטיים ותמיכה 24/7 בתוך המדינה",
      ],
    },
    expertise: {
      heading: "ברזיל בכף ידינו",
      lead: "אנו מתאימים ומשלבים יעד אחד, שניים, שלושה או יותר, למסע חלק אחד — טיסות ונהיגה עצמית, סירות נהר, טיסות שכר, רכבות נוף, העברות בהזמנה אישית. כל מה שצריך כדי שהמדינה תתאים לכם.",
      destinationsLabel: "יעדים שאנו מעצבים ברחבי ברזיל",
      destinations: "אמזונס (מנאוס, ריו נגרו, אנאויהיאנס, ממירואא) · אלטר דו צ'או · בלם ואיליה דה מאראז'ו · מונטה רוריימה · לנצ'ויס מרניינסס · צ'פדה דאס מזס · ג'לפאו · צ'פדה דוס ויאדיירוס · פירנופוליס · פנטנל נורטה (MT) · פנטנל סול (MS) · בוניטו וסרה דה בודוקנה · קריסטלינו · סרה דו רונקדור · צ'פדה דיאמנטינה · סלבדור · איליה דה בויפבה · פנינסולה דה מאראו · אברולוס וקוסטה דו דסקוברימנטו · פרננדו דה נורוניה · ליטורל פרנמבוקנו · ליטורל אלגואנו · מאראגוג'י · קניונס דו שינגו · ז'ריקוקוארה · רוטה דאס אמוסיונס · רוטה דאס פאלסייאס · סרה דה קפיברה · ריו דה ז'ניירו · קטרטס דו איגואסו · קניונס דו סול · פלוריאנופוליס · סרה דו סיפו · סרה דה קנסטרה · סידדס היסטוריקס ואניוטין · אסטרדה ריאל · קמפוס דו ז'ורדאו",
      biomes: "מומחיות מקומית על פני 7 הביומות של ברזיל — אמזונס, סראדו, קאטינגה, יער האטלנטי, פמפה, פנטנל וחוף-ימי — עם אנשי קשר מהימנים בכל אחת.",
    },
    cta: {
      heading: "מוכנים לעצב את ברזיל שלכם?",
      subheading:
        "ספרו לנו מתי תרצו להגיע ונחזור אליכם עם הצעה בתוך 48 שעות.",
      button: "התחילו בוואטסאפ",
    },
    faqs: {
      heading: "תכנון טיול לברזיל — שאלותיכם נענות",
      subheading: "תשובות כנות מהצוות שבונה את הטיול שלכם.",
      items: [
        {
          q: "כמה עולה טיול בהתאמה אישית לברזיל עם Create Travel?",
          a: "אנחנו לא מוכרים חבילות מהמדף, ולכן אין מחירון קבוע. העלות תלויה בעונה, משך השהייה, קטגוריית המלון, טיסות פנימיות, מדריכים פרטיים וחוויות. רוב הטיולים המותאמים אישית שלנו לברזיל מתחילים בסביבות 350-500 דולר ארה\"ב לאדם ליום עבור טיול ברמת בוטיק עם העברות פרטיות וחוויות מותאמות אישית — לודג'ים יוקרתיים ויעדים מרוחקים (אמזונס, פנטנל, פרננדו דה נורוניה) יקרים יותר. ספרו לנו את התאריכים והחלום שלכם ואנו נשלח הצעת מחיר מפורטת ושקופה תוך 48 שעות.",
        },
        {
          q: "למה להזמין טיול לברזיל עם Create Travel במקום סוכנות מקוונת גדולה?",
          a: "אנחנו סוכנות בוטיק ברזילאית (Cadastur 21.030.190/0001-60) שבסיסה בסאו פאולו. אתם מדברים עם מעצב טיולים אחד, לא עם מוקד שירות. יש לנו קשרים ישירים עם הלודג'ים, המדריכים והמפעילים — ללא משווקים, ללא שרשראות תיווך. כל מסלול נבנה בעבודת יד סביב הקצב והאובססיות שלכם, ואדם אמיתי נמצא בוואטסאפ 24/7 במהלך הטיול שלכם.",
        },
        {
          q: "מתי הזמן הטוב ביותר לטייל בברזיל?",
          a: "ברזיל היא יעד לכל אורך השנה בזכות גודלה. מאי-ספטמבר היא העונה היבשה עבור האמזונס והפנטנל (הטוב ביותר לחיות בר). יוני-ספטמבר אידיאלי ללנצ'ויס מרניינסס (לגונות מלאות). דצמבר-מרץ היא העונה הגבוהה לחופים (באהיה, צפון מזרח, ריו). אנו מתאימים את המסלול לאזורים הטובים ביותר עבור התאריכים שלכם.",
        },
        {
          q: "האם אתם מטפלים בכל הטיול — טיסות, מלונות, מדריכים, העברות?",
          a: "כן. אנחנו מתכננים את כל המסע מקצה לקצה: טיסות בינלאומיות ופנימיות, מלונות בוטיק ולודג'ים, מדריכים דו-לשוניים פרטיים, העברות, טיסות שכר במידת הצורך, הזמנות מסעדות וחוויות מיוחדות. טיול אחד, צוות אחד, וואטסאפ אחד.",
        },
        {
          q: "האם בטוח לטייל בברזיל?",
          a: "עם ידע מקומי, כן. אנו בוחרים את השכונות הבטוחות ביותר, נהגים מאומתים ומדריכים מהימנים, ומדריכים אתכם על נוהלי היגיון בריא. התמיכה שלנו 24/7 בתוך המדינה נמצאת תמיד במרחק הודעה.",
        },
      ],
    },
    back: "חזרה לדף הבית",
  },
};
