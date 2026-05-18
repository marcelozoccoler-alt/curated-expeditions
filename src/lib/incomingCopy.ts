import type { Lang } from "@/i18n/config";

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

export const INCOMING_COPY: Record<Exclude<Lang, "pt">, IncomingCopy> = {
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
};
