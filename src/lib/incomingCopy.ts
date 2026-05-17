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
    cta: {
      heading: "¿Listo para diseñar tu Brasil?",
      subheading:
        "Cuéntanos cuándo te gustaría venir y te enviaremos una propuesta en 48 horas.",
      button: "Empezar por WhatsApp",
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
    cta: {
      heading: "Pronto a disegnare il tuo Brasile?",
      subheading:
        "Dicci quando vorresti venire e ti risponderemo con una proposta entro 48 ore.",
      button: "Inizia su WhatsApp",
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
    cta: {
      heading: "Bereit, dein Brasilien zu gestalten?",
      subheading:
        "Sag uns, wann du kommen möchtest, und wir melden uns innerhalb von 48 Stunden mit einem Vorschlag.",
      button: "Auf WhatsApp starten",
    },
    back: "Zurück zur Startseite",
  },
};
