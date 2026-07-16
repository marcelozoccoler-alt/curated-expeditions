import type { ContentLang } from "@/i18n/config";

export interface IncomingDestinoSection {
  title: string;
  text: string;
}

export interface IncomingDestinoContent {
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  longIntro: string[];
  whatToDo: {
    heading: string;
    items: IncomingDestinoSection[];
  };
  bestTime: { heading: string; text: string };
  howToGet: { heading: string; text: string };
  whereToStay: { heading: string; text: string };
  faqs: {
    heading: string;
    items: { q: string; a: string }[];
  };
  finalCta: { heading: string; subheading: string; button: string };
  back: string;
}

type Lang = Exclude<ContentLang, "pt">;

/**
 * Content for /:lang/incoming/:slug pages. Only 7 priority destinations
 * for foreign incoming SEO (ES/EN/IT/DE): Amazon, Pantanal, Lençóis,
 * Rio de Janeiro, Bonito, Iguazu, Bahia.
 */
export const INCOMING_DESTINO_CONTENT: Record<
  string,
  Record<Lang, IncomingDestinoContent>
> = {
  amazon: {
    en: {
      metaTitle: "Amazon Rainforest Tours from Brazil — Tailor-Made Trips",
      metaDescription:
        "Plan your Amazon rainforest trip from Brazil: remote eco-lodges on the Rio Negro and Mamirauá, river-community stays, wildlife and pink dolphins.",
      keywords:
        "amazon rainforest tour, amazon brazil trip, manaus lodge, rio negro cruise, mamirauá reserve, anavilhanas, amazon eco-lodge, pink dolphins amazon",
      hero: {
        eyebrow: "Brazilian Amazon",
        title: "The Amazon, without the crowds.",
        subtitle:
          "Remote eco-lodges, small river boats and the guides who know where the pink dolphins actually swim.",
        cta: "Design my Amazon trip",
      },
      longIntro: [
        "The Brazilian Amazon covers 4.2 million km² — nine times the size of Spain. We design your trip around the corner of it that fits you: the black-water calm of the Rio Negro out of Manaus, the flooded forests of Mamirauá near Tefé, the sandy river beaches of Alter do Chão in Santarém, or the wild Cristalino in southern Amazon for serious birding.",
        "You sleep in floating lodges or jungle bases with 10–20 rooms — not big hotels. Days move slowly: sunrise canoe rides, walks with an indigenous or ribeirinho guide, piranha fishing, night spotting of caimans, swims with pink dolphins in Novo Airão. Nothing scripted; everything real.",
        "We work only with lodges that hire locally, keep boats small, and respect the forest. That's the only kind of Amazon we know how to sell.",
      ],
      whatToDo: {
        heading: "What to do in the Brazilian Amazon",
        items: [
          {
            title: "Rio Negro & Anavilhanas (from Manaus)",
            text: "The classic first Amazon: 400+ river islands, black water that reflects the sky, jungle lodges 2–4h from Manaus. Best for a first trip: 3–5 nights.",
          },
          {
            title: "Mamirauá Sustainable Reserve (Tefé)",
            text: "The best chance in Brazil to see wild uakari monkeys and jaguars from the boat. Flooded forest, community-run Uakari Lodge. High water Mar–Jun, low water Sep–Nov.",
          },
          {
            title: "Alter do Chão & Tapajós (Santarém)",
            text: "The 'Caribbean of the Amazon': white-sand river beaches, warm clear water, tribal villages upriver, Amazon boat trips on wooden regional boats.",
          },
          {
            title: "Cristalino Lodge (southern Amazon)",
            text: "Legendary for birding — 600+ species, canopy towers above the forest, small research-grade lodge. Fly to Alta Floresta from Cuiabá.",
          },
          {
            title: "Meeting of Waters & Manaus",
            text: "The Rio Negro and Solimões flow side by side without mixing for 6 km. Combine with the Opera House, Adolpho Lisboa market and a night at Villa Amazônia.",
          },
        ],
      },
      bestTime: {
        heading: "Best time to visit the Amazon",
        text: "There is no bad month — but the seasons change what you can do. High water (Mar–Jun): canoe deep into the flooded forest, calmer heat, best photography. Low water (Aug–Nov): white-sand beaches appear, easy jungle hiking, more wildlife concentrated on the shrinking waterways. Sep–Nov is the sweet spot for most travelers.",
      },
      howToGet: {
        heading: "How to get there",
        text: "Fly into Manaus (MAO), Santarém (STM) or Alta Floresta (AFL) — all reached in 3–4h from São Paulo, Rio or Brasília. From Manaus, lodges arrange a road + speedboat transfer of 2–4h. Mamirauá needs a connection to Tefé (1h flight). We handle every leg door-to-door.",
      },
      whereToStay: {
        heading: "Where to stay",
        text: "Anavilhanas Jungle Lodge and Mirante do Gavião on the Rio Negro; Uakari Floating Lodge in Mamirauá; Juma Amazon Lodge east of Manaus for a raw floating-lodge vibe; Cristalino Lodge for birders; Villa Amazônia and Juma Ópera in Manaus as urban pre/post stays.",
      },
      faqs: {
        heading: "Amazon trip — frequently asked",
        items: [
          {
            q: "How many days do I need in the Amazon?",
            a: "3 nights is the practical minimum for a Rio Negro lodge; 4–5 nights lets you go deeper. Mamirauá needs 4 nights (flight logistics). Most guests combine 4 Amazon nights with Rio, Iguazu or the Northeast.",
          },
          {
            q: "Will I see wildlife — jaguars, monkeys, pink dolphins?",
            a: "Pink dolphins: almost guaranteed in Novo Airão and Mamirauá. Monkeys, sloths, caimans, macaws, toucans: very common. Jaguars: realistic only in Mamirauá at low water — Pantanal is the far better bet for jaguars.",
          },
          {
            q: "Is the Amazon safe? What about diseases?",
            a: "The lodges we work with are safe and well-supported. Yellow fever vaccine is required (10+ days before travel). Malaria risk is low in the main tourist areas but we brief you on prophylaxis. Long sleeves, DEET repellent, closed shoes for jungle walks.",
          },
          {
            q: "Amazon or Pantanal — which one?",
            a: "Amazon for the immersive rainforest experience, indigenous cultures, black rivers. Pantanal for guaranteed wildlife sightings (jaguars, giant otters, caimans, birds). Ideally, do both — they're very different biomes.",
          },
          {
            q: "How much does an Amazon trip cost?",
            a: "Lodge-based trips start around USD 1,500–2,500 per person for 3–4 nights all-inclusive (transfers, meals, guided activities). Premium lodges and Mamirauá are higher. Ask us for a transparent quote.",
          },
        ],
      },
      finalCta: {
        heading: "Ready to explore the Amazon?",
        subheading:
          "Tell us your dates and interests. We come back in 48 hours with a proposal built for you.",
        button: "Start on WhatsApp",
      },
      back: "Back to Brazil overview",
    },
    es: {
      metaTitle: "Viajes a la Amazonía Brasileña — Itinerarios a Medida",
      metaDescription:
        "Planifica tu viaje a la Amazonía brasileña: lodges remotos en el Río Negro y Mamirauá, comunidades ribereñas, fauna y delfines rosados. Viajes a medida.",
      keywords:
        "viaje amazonía brasil, tour amazonas manaus, lodge río negro, mamirauá, anavilhanas, delfines rosados amazonía, ecolodge amazonía, safari amazonía",
      hero: {
        eyebrow: "Amazonía Brasileña",
        title: "La Amazonía, sin multitudes.",
        subtitle:
          "Lodges remotos, barcos pequeños y los guías que saben dónde nadan de verdad los delfines rosados.",
        cta: "Diseñar mi viaje a la Amazonía",
      },
      longIntro: [
        "La Amazonía brasileña cubre 4,2 millones de km² — nueve veces España. Diseñamos tu viaje en el rincón que mejor te encaje: la calma de aguas negras del Río Negro desde Manaos, los bosques inundados de Mamirauá cerca de Tefé, las playas de arena blanca de Alter do Chão en Santarém, o el Cristalino salvaje en la Amazonía sur para observación de aves seria.",
        "Duermes en lodges flotantes o bases selváticas de 10–20 habitaciones — nunca grandes hoteles. Los días van lentos: canoas al amanecer, caminatas con guías indígenas o ribereños, pesca de pirañas, avistamiento nocturno de caimanes, nado con delfines rosados en Novo Airão. Nada guionado; todo real.",
        "Solo trabajamos con lodges que contratan localmente, mantienen barcos pequeños y respetan la selva. Es la única Amazonía que sabemos vender.",
      ],
      whatToDo: {
        heading: "Qué hacer en la Amazonía brasileña",
        items: [
          {
            title: "Río Negro y Anavilhanas (desde Manaos)",
            text: "La primera Amazonía clásica: 400+ islas fluviales, aguas negras que reflejan el cielo, lodges a 2–4h de Manaos. Ideal para una primera vez: 3–5 noches.",
          },
          {
            title: "Reserva Sostenible Mamirauá (Tefé)",
            text: "La mejor oportunidad en Brasil de ver monos uakari salvajes y jaguares desde el barco. Bosque inundado, Uakari Lodge comunitario. Aguas altas mar–jun, bajas sep–nov.",
          },
          {
            title: "Alter do Chão y Tapajós (Santarém)",
            text: "El 'Caribe de la Amazonía': playas fluviales de arena blanca, aguas claras y cálidas, aldeas indígenas río arriba, paseos en barcos regionales de madera.",
          },
          {
            title: "Cristalino Lodge (Amazonía sur)",
            text: "Legendario para birding — 600+ especies, torres de dosel sobre la selva, lodge pequeño de nivel científico. Vuelo a Alta Floresta desde Cuiabá.",
          },
          {
            title: "Encuentro de las Aguas y Manaos",
            text: "El Río Negro y el Solimões corren lado a lado sin mezclarse 6 km. Combinable con el Teatro Amazonas, el mercado Adolpho Lisboa y una noche en Villa Amazônia.",
          },
        ],
      },
      bestTime: {
        heading: "Mejor época para visitar la Amazonía",
        text: "No hay un mes malo — pero la estación cambia lo que puedes hacer. Aguas altas (mar–jun): canoas dentro del bosque inundado, calor más suave, mejor fotografía. Aguas bajas (ago–nov): aparecen playas de arena blanca, trekking fácil, fauna concentrada en los canales que se encogen. Sep–nov es el punto dulce para la mayoría.",
      },
      howToGet: {
        heading: "Cómo llegar",
        text: "Vuelo a Manaos (MAO), Santarém (STM) o Alta Floresta (AFL) — todos a 3–4h de São Paulo, Río o Brasilia. Desde Manaos, los lodges organizan traslado en coche + lancha rápida de 2–4h. Mamirauá requiere conexión a Tefé (1h de vuelo). Organizamos cada tramo puerta a puerta.",
      },
      whereToStay: {
        heading: "Dónde alojarse",
        text: "Anavilhanas Jungle Lodge y Mirante do Gavião en el Río Negro; Uakari Floating Lodge en Mamirauá; Juma Amazon Lodge al este de Manaos para lodge flotante puro; Cristalino Lodge para observadores de aves; Villa Amazônia y Juma Ópera en Manaos para pre/post estancias urbanas.",
      },
      faqs: {
        heading: "Viaje a la Amazonía — preguntas frecuentes",
        items: [
          {
            q: "¿Cuántos días necesito en la Amazonía?",
            a: "3 noches es el mínimo práctico en un lodge del Río Negro; 4–5 noches permiten profundizar. Mamirauá requiere 4 noches por logística de vuelos. La mayoría combina 4 noches de Amazonía con Río, Iguazú o el Nordeste.",
          },
          {
            q: "¿Veré fauna — jaguares, monos, delfines rosados?",
            a: "Delfines rosados: casi garantizados en Novo Airão y Mamirauá. Monos, perezosos, caimanes, guacamayos, tucanes: muy comunes. Jaguares: realistas solo en Mamirauá en aguas bajas — el Pantanal es mucho mejor para jaguares.",
          },
          {
            q: "¿Es segura la Amazonía? ¿Y las enfermedades?",
            a: "Los lodges con los que trabajamos son seguros. La vacuna de fiebre amarilla es obligatoria (10+ días antes del viaje). El riesgo de malaria es bajo en las áreas turísticas principales pero te asesoramos sobre profilaxis. Manga larga, repelente con DEET y calzado cerrado en caminatas.",
          },
          {
            q: "¿Amazonía o Pantanal — cuál elegir?",
            a: "Amazonía por la inmersión en selva, culturas indígenas, ríos negros. Pantanal por avistamientos garantizados (jaguares, nutrias gigantes, aves). Idealmente, ambos — son biomas muy diferentes.",
          },
          {
            q: "¿Cuánto cuesta un viaje a la Amazonía?",
            a: "Viajes con base en lodge desde USD 1.500–2.500 por persona para 3–4 noches todo incluido (traslados, comidas, actividades guiadas). Lodges premium y Mamirauá son más altos. Pide un presupuesto transparente.",
          },
        ],
      },
      finalCta: {
        heading: "¿Listo para explorar la Amazonía?",
        subheading:
          "Cuéntanos fechas e intereses. Volvemos en 48 horas con una propuesta hecha para ti.",
        button: "Empezar por WhatsApp",
      },
      back: "Volver al resumen de Brasil",
    },
    it: {
      metaTitle: "Viaggi in Amazzonia Brasiliana — Itinerari su Misura",
      metaDescription:
        "Progetta il tuo viaggio in Amazzonia brasiliana: eco-lodge remoti sul Rio Negro e Mamirauá, comunità fluviali, fauna e delfini rosa.",
      keywords:
        "viaggio amazzonia brasile, tour amazzonia manaus, lodge rio negro, mamirauá, anavilhanas, delfini rosa amazzonia, ecolodge amazzonia",
      hero: {
        eyebrow: "Amazzonia Brasiliana",
        title: "L'Amazzonia, senza folla.",
        subtitle:
          "Lodge remoti, barche piccole e le guide che sanno dove nuotano davvero i delfini rosa.",
        cta: "Progetta il mio viaggio in Amazzonia",
      },
      longIntro: [
        "L'Amazzonia brasiliana copre 4,2 milioni di km² — nove volte la Spagna. Progettiamo il tuo viaggio nell'angolo che ti si addice: la calma delle acque nere del Rio Negro da Manaus, le foreste allagate di Mamirauá vicino a Tefé, le spiagge di sabbia bianca di Alter do Chão a Santarém, o il Cristalino selvaggio nell'Amazzonia meridionale per il birdwatching serio.",
        "Dormi in lodge galleggianti o basi nella giungla di 10–20 camere — mai grandi hotel. I giorni scorrono lenti: canoe all'alba, camminate con guide indigene o ribeirinhos, pesca ai piranha, avvistamento notturno di caimani, nuoto con i delfini rosa a Novo Airão. Niente costruito; tutto vero.",
        "Lavoriamo solo con lodge che assumono localmente, mantengono barche piccole e rispettano la foresta. È l'unica Amazzonia che sappiamo vendere.",
      ],
      whatToDo: {
        heading: "Cosa fare in Amazzonia brasiliana",
        items: [
          {
            title: "Rio Negro e Anavilhanas (da Manaus)",
            text: "La prima Amazzonia classica: 400+ isole fluviali, acqua nera che riflette il cielo, lodge a 2–4h da Manaus. Ideale per la prima volta: 3–5 notti.",
          },
          {
            title: "Riserva Sostenibile Mamirauá (Tefé)",
            text: "La migliore possibilità in Brasile di vedere scimmie uakari selvatiche e giaguari dalla barca. Foresta allagata, Uakari Lodge comunitario. Acque alte mar–giu, basse set–nov.",
          },
          {
            title: "Alter do Chão e Tapajós (Santarém)",
            text: "I 'Caraibi dell'Amazzonia': spiagge fluviali di sabbia bianca, acque chiare e calde, villaggi indigeni a monte, gite su barche regionali di legno.",
          },
          {
            title: "Cristalino Lodge (Amazzonia sud)",
            text: "Leggendario per il birding — 600+ specie, torri di canopy sopra la foresta, piccolo lodge di livello scientifico. Volo per Alta Floresta da Cuiabá.",
          },
          {
            title: "Incontro delle Acque e Manaus",
            text: "Il Rio Negro e il Solimões scorrono fianco a fianco senza mescolarsi per 6 km. Combinabile con il Teatro Amazonas, il mercato Adolpho Lisboa e una notte a Villa Amazônia.",
          },
        ],
      },
      bestTime: {
        heading: "Migliore periodo per visitare l'Amazzonia",
        text: "Non c'è un mese cattivo — ma la stagione cambia cosa puoi fare. Acque alte (mar–giu): canoe dentro la foresta allagata, calore più mite, fotografia migliore. Acque basse (ago–nov): compaiono spiagge di sabbia bianca, trekking facile, fauna concentrata nei canali che si restringono. Set–nov è il punto di equilibrio per la maggior parte.",
      },
      howToGet: {
        heading: "Come arrivare",
        text: "Volo per Manaus (MAO), Santarém (STM) o Alta Floresta (AFL) — tutti a 3–4h da São Paulo, Rio o Brasilia. Da Manaus, i lodge organizzano transfer in auto + motoscafo di 2–4h. Mamirauá richiede coincidenza per Tefé (1h di volo). Organizziamo ogni tratta porta a porta.",
      },
      whereToStay: {
        heading: "Dove alloggiare",
        text: "Anavilhanas Jungle Lodge e Mirante do Gavião sul Rio Negro; Uakari Floating Lodge a Mamirauá; Juma Amazon Lodge a est di Manaus per lodge galleggiante puro; Cristalino Lodge per birdwatcher; Villa Amazônia e Juma Ópera a Manaus per pre/post soggiorni urbani.",
      },
      faqs: {
        heading: "Viaggio in Amazzonia — domande frequenti",
        items: [
          {
            q: "Quanti giorni servono in Amazzonia?",
            a: "3 notti è il minimo pratico in un lodge sul Rio Negro; 4–5 notti permettono di approfondire. Mamirauá richiede 4 notti per la logistica dei voli. La maggior parte combina 4 notti di Amazzonia con Rio, Iguazú o il Nordeste.",
          },
          {
            q: "Vedrò la fauna — giaguari, scimmie, delfini rosa?",
            a: "Delfini rosa: quasi garantiti a Novo Airão e Mamirauá. Scimmie, bradipi, caimani, ara, tucani: molto comuni. Giaguari: realistici solo a Mamirauá in acque basse — il Pantanal è di gran lunga migliore per i giaguari.",
          },
          {
            q: "L'Amazzonia è sicura? E le malattie?",
            a: "I lodge con cui lavoriamo sono sicuri. Il vaccino per la febbre gialla è obbligatorio (10+ giorni prima del viaggio). Il rischio di malaria è basso nelle aree turistiche principali ma ti consigliamo sulla profilassi. Maniche lunghe, repellente al DEET, scarpe chiuse per le camminate.",
          },
          {
            q: "Amazzonia o Pantanal — quale scegliere?",
            a: "Amazzonia per l'immersione nella foresta, culture indigene, fiumi neri. Pantanal per avvistamenti garantiti (giaguari, lontre giganti, uccelli). Idealmente, entrambi — sono biomi molto diversi.",
          },
          {
            q: "Quanto costa un viaggio in Amazzonia?",
            a: "Viaggi con base lodge da USD 1.500–2.500 a persona per 3–4 notti tutto compreso (transfer, pasti, attività guidate). Lodge premium e Mamirauá costano di più. Chiedici un preventivo trasparente.",
          },
        ],
      },
      finalCta: {
        heading: "Pronto a esplorare l'Amazzonia?",
        subheading:
          "Raccontaci date e interessi. Torniamo in 48 ore con una proposta pensata per te.",
        button: "Inizia su WhatsApp",
      },
      back: "Torna alla panoramica Brasile",
    },
    de: {
      metaTitle: "Amazonas-Reisen Brasilien — Maßgeschneiderte Reisen",
      metaDescription:
        "Planen Sie Ihre Amazonas-Reise in Brasilien: abgelegene Eco-Lodges am Rio Negro und in Mamirauá, Flussgemeinschaften, Wildtiere und rosa Delfine.",
      keywords:
        "amazonas reise brasilien, amazonas tour manaus, rio negro lodge, mamirauá, anavilhanas, rosa delfine amazonas, ecolodge amazonas",
      hero: {
        eyebrow: "Brasilianischer Amazonas",
        title: "Der Amazonas, ohne Massen.",
        subtitle:
          "Abgelegene Eco-Lodges, kleine Flussboote und Guides, die wissen, wo die rosa Delfine wirklich schwimmen.",
        cta: "Meine Amazonas-Reise planen",
      },
      longIntro: [
        "Der brasilianische Amazonas umfasst 4,2 Millionen km² — neunmal Spanien. Wir gestalten Ihre Reise nach dem Winkel, der zu Ihnen passt: die Schwarzwasser-Ruhe des Rio Negro ab Manaus, die überfluteten Wälder von Mamirauá bei Tefé, die weißen Sandstrände von Alter do Chão in Santarém oder das wilde Cristalino im Süd-Amazonas für ernsthaftes Birding.",
        "Sie schlafen in schwimmenden Lodges oder Dschungelbasen mit 10–20 Zimmern — nie in großen Hotels. Die Tage vergehen langsam: Kanufahrten im Morgengrauen, Wanderungen mit indigenen oder Ribeirinho-Guides, Piranha-Angeln, nächtliche Kaiman-Beobachtung, Schwimmen mit rosa Delfinen in Novo Airão. Nichts gescriptet; alles echt.",
        "Wir arbeiten nur mit Lodges, die lokal einstellen, kleine Boote fahren und den Wald respektieren. Das ist der einzige Amazonas, den wir verkaufen können.",
      ],
      whatToDo: {
        heading: "Was Sie im brasilianischen Amazonas tun können",
        items: [
          {
            title: "Rio Negro & Anavilhanas (ab Manaus)",
            text: "Der klassische erste Amazonas: 400+ Flussinseln, schwarzes Wasser, das den Himmel spiegelt, Lodges 2–4h von Manaus. Ideal beim ersten Mal: 3–5 Nächte.",
          },
          {
            title: "Nachhaltiges Reservat Mamirauá (Tefé)",
            text: "Die beste Chance in Brasilien, wilde Uakari-Affen und Jaguare vom Boot aus zu sehen. Überflutungswald, gemeindegeführte Uakari Lodge. Hochwasser Mär–Jun, Niedrigwasser Sep–Nov.",
          },
          {
            title: "Alter do Chão & Tapajós (Santarém)",
            text: "Die 'Karibik des Amazonas': weiße Flussstrände, warmes klares Wasser, indigene Dörfer flussaufwärts, Bootstouren auf traditionellen Holzbooten.",
          },
          {
            title: "Cristalino Lodge (Süd-Amazonas)",
            text: "Legendär für Birding — 600+ Arten, Kronendachtürme über dem Wald, kleine Lodge auf Forschungsniveau. Flug nach Alta Floresta ab Cuiabá.",
          },
          {
            title: "Zusammenfluss der Wasser & Manaus",
            text: "Rio Negro und Solimões fließen 6 km nebeneinander, ohne sich zu vermischen. Kombinierbar mit dem Opernhaus, dem Adolpho-Lisboa-Markt und einer Nacht in Villa Amazônia.",
          },
        ],
      },
      bestTime: {
        heading: "Beste Reisezeit für den Amazonas",
        text: "Es gibt keinen schlechten Monat — aber die Saison ändert, was möglich ist. Hochwasser (Mär–Jun): tief per Kanu in den überfluteten Wald, mildere Hitze, beste Fotografie. Niedrigwasser (Aug–Nov): weiße Sandstrände erscheinen, einfache Dschungelwanderungen, Wildtiere konzentriert an schrumpfenden Wasserläufen. Sep–Nov ist der Sweetspot für die meisten.",
      },
      howToGet: {
        heading: "Anreise",
        text: "Flug nach Manaus (MAO), Santarém (STM) oder Alta Floresta (AFL) — alle in 3–4h ab São Paulo, Rio oder Brasília erreichbar. Ab Manaus organisieren die Lodges Auto- + Schnellboot-Transfer von 2–4h. Mamirauá benötigt einen Anschlussflug nach Tefé (1h). Wir organisieren jede Etappe von Tür zu Tür.",
      },
      whereToStay: {
        heading: "Wo übernachten",
        text: "Anavilhanas Jungle Lodge und Mirante do Gavião am Rio Negro; Uakari Floating Lodge in Mamirauá; Juma Amazon Lodge östlich von Manaus für pures schwimmendes Lodge-Feeling; Cristalino Lodge für Vogelbeobachter; Villa Amazônia und Juma Ópera in Manaus für urbane Vor-/Nachaufenthalte.",
      },
      faqs: {
        heading: "Amazonas-Reise — häufige Fragen",
        items: [
          {
            q: "Wie viele Tage brauche ich im Amazonas?",
            a: "3 Nächte ist das praktische Minimum in einer Rio-Negro-Lodge; 4–5 Nächte erlauben mehr Tiefe. Mamirauá benötigt 4 Nächte wegen der Fluglogistik. Die meisten kombinieren 4 Amazonas-Nächte mit Rio, Iguazú oder dem Nordosten.",
          },
          {
            q: "Werde ich Wildtiere sehen — Jaguare, Affen, rosa Delfine?",
            a: "Rosa Delfine: fast garantiert in Novo Airão und Mamirauá. Affen, Faultiere, Kaimane, Aras, Tukane: sehr häufig. Jaguare: realistisch nur in Mamirauá bei Niedrigwasser — das Pantanal ist weit besser für Jaguare.",
          },
          {
            q: "Ist der Amazonas sicher? Und Krankheiten?",
            a: "Die Lodges, mit denen wir arbeiten, sind sicher. Gelbfieberimpfung ist Pflicht (10+ Tage vor Reise). Malariarisiko in den touristischen Hauptzonen niedrig, wir beraten zur Prophylaxe. Lange Ärmel, DEET-Repellent, geschlossene Schuhe für Dschungelwanderungen.",
          },
          {
            q: "Amazonas oder Pantanal — welches?",
            a: "Amazonas für das immersive Regenwald-Erlebnis, indigene Kulturen, schwarze Flüsse. Pantanal für garantierte Wildtiersichtungen (Jaguare, Riesenotter, Vögel). Idealerweise beides — es sind sehr verschiedene Biome.",
          },
          {
            q: "Was kostet eine Amazonas-Reise?",
            a: "Lodge-Reisen ab USD 1.500–2.500 pro Person für 3–4 Nächte all-inclusive (Transfers, Mahlzeiten, geführte Aktivitäten). Premium-Lodges und Mamirauá liegen höher. Fragen Sie nach einem transparenten Angebot.",
          },
        ],
      },
      finalCta: {
        heading: "Bereit, den Amazonas zu erkunden?",
        subheading:
          "Erzählen Sie uns Daten und Interessen. Wir melden uns in 48 Stunden mit einem Vorschlag.",
        button: "Auf WhatsApp starten",
      },
      back: "Zurück zur Brasilien-Übersicht",
    },
  },

  pantanal: {
    en: {
      metaTitle: "Pantanal Wildlife Safari — Jaguar Trips in Brazil",
      metaDescription:
        "Plan your Pantanal safari: guaranteed jaguar sightings on the Cuiabá River, giant otters, capybaras and hyacinth macaws. Boutique lodges, private guides.",
      keywords:
        "pantanal safari, jaguar tour brazil, pantanal wildlife, porto jofre, cuiabá river, transpantaneira, pantanal lodge, giant otter pantanal",
      hero: {
        eyebrow: "Pantanal Wetlands",
        title: "The best big-cat safari outside Africa.",
        subtitle:
          "Wild jaguars from the boat, giant otters, thousands of birds — the world's largest tropical wetland, seen with the right guides.",
        cta: "Design my Pantanal safari",
      },
      longIntro: [
        "The Pantanal is 10 times the size of the Everglades and holds the highest density of jaguars on Earth. Between July and October, along the Cuiabá River near Porto Jofre, sightings are effectively guaranteed — we've had guests see 6 different jaguars in a single day.",
        "There are two entry points: the North Pantanal (Cuiabá / Poconé / Porto Jofre via the legendary Transpantaneira dirt road) is the jaguar capital. The South Pantanal (Campo Grande / Aquidauana) is quieter, ranch-based, better for horseback riding and birds. We combine both when time allows.",
        "You stay in family-run pousadas, floating boats or working cattle ranches converted into lodges. Days are early: boat safaris on the river at sunrise, siesta in the heat, sunset drives with headlamps for tapirs and giant anteaters.",
      ],
      whatToDo: {
        heading: "What to do in the Pantanal",
        items: [
          {
            title: "Jaguar safaris on the Cuiabá River",
            text: "From Porto Jofre, small speedboats scan the riverbanks for jaguars sleeping, walking or hunting caimans. Peak season Jul–Oct. This is the reason most people come.",
          },
          {
            title: "The Transpantaneira road",
            text: "147 km of dirt road with 122 wooden bridges from Poconé to Porto Jofre. Slow-drive through wildlife: caimans, capybaras, hyacinth macaws, giant otters, tapirs at dusk.",
          },
          {
            title: "South Pantanal ranches (Refúgio Caiman, Barranco Alto)",
            text: "Working ranches converted into eco-lodges. Horseback safaris, canoe on clear rivers, night drives, macaw research projects. Quieter than the North.",
          },
          {
            title: "Bonito day-add (from South Pantanal)",
            text: "The crystal rivers of Bonito are 3h from Campo Grande — combine 3 Pantanal nights + 2 Bonito nights for a perfect wildlife-and-water week.",
          },
          {
            title: "Birding by boat and horseback",
            text: "700+ bird species: jabiru storks, hyacinth macaws, kingfishers, herons. Every meal at the lodge is interrupted by something colourful flying past.",
          },
        ],
      },
      bestTime: {
        heading: "Best time for a Pantanal safari",
        text: "Dry season (July to October) is peak: rivers shrink, wildlife concentrates, jaguar sightings peak in September. May–June is dry and green. November–March is the wet season — flooded landscapes, harder wildlife access but spectacular birdlife and fewer visitors. Avoid the peak of the rains (Jan–Feb) if roads matter to you.",
      },
      howToGet: {
        heading: "How to get there",
        text: "North Pantanal: fly to Cuiabá (CGB) — daily connections from São Paulo, Rio, Brasília. Then 4–5h drive on the Transpantaneira to Porto Jofre. South Pantanal: fly to Campo Grande (CGR), 3–4h drive to the ranches. Charter flights available for premium lodges. We handle all transfers.",
      },
      whereToStay: {
        heading: "Where to stay",
        text: "North: Hotel Pantanal Norte and SouthWild Pantanal in Porto Jofre for jaguars; Pousada Piuval for the Transpantaneira; Jaguar Flotel for boat-based comfort. South: Refúgio Caiman (large ranch with private trails), Barranco Alto (remote, small, birder-favourite), Caiman Ecological Refuge for luxury.",
      },
      faqs: {
        heading: "Pantanal safari — frequently asked",
        items: [
          {
            q: "Are jaguars really guaranteed?",
            a: "In peak dry season (Aug–Oct) on the Cuiabá River, sightings are 95%+ over a 3-day stay. Multiple sightings per day are common. In wet season (Dec–Mar), sightings are less reliable but landscapes are dramatic.",
          },
          {
            q: "How many days do I need in the Pantanal?",
            a: "Minimum 3 nights in North Pantanal for jaguars. 4–5 nights lets you combine the Transpantaneira with Porto Jofre. Add 2 nights in Bonito for the crystal rivers — the ideal week.",
          },
          {
            q: "Pantanal vs Amazon — which for wildlife?",
            a: "Pantanal wins for open landscapes and reliable sightings (jaguars, otters, birds, capybaras). Amazon wins for immersion in dense rainforest and indigenous cultures. Different biomes, both worth doing.",
          },
          {
            q: "Is it too hot? Any malaria?",
            a: "Dry season (Jul–Sep) is warm days (30–35°C), cool nights, low humidity. Malaria risk is low in the tourist areas, yellow fever vaccine required, we recommend dengue prophylaxis (long sleeves, repellent).",
          },
          {
            q: "How much does a Pantanal safari cost?",
            a: "From USD 2,000–3,500 per person for a 4-night safari including transfers from Cuiabá, all meals, and daily guided boat/vehicle safaris. Premium options and photographic tours are higher.",
          },
        ],
      },
      finalCta: {
        heading: "Ready for your Pantanal safari?",
        subheading: "Tell us your dates. We come back with a proposal in 48 hours.",
        button: "Start on WhatsApp",
      },
      back: "Back to Brazil overview",
    },
    es: {
      metaTitle: "Safari en el Pantanal — Viajes de Jaguares en Brasil",
      metaDescription:
        "Planifica tu safari en el Pantanal: avistamientos garantizados de jaguares en el Río Cuiabá, nutrias gigantes, capibaras y guacamayos jacintos.",
      keywords:
        "safari pantanal, tour jaguares brasil, fauna pantanal, porto jofre, río cuiabá, transpantaneira, lodge pantanal, nutria gigante pantanal",
      hero: {
        eyebrow: "Humedales del Pantanal",
        title: "El mejor safari de grandes felinos fuera de África.",
        subtitle:
          "Jaguares salvajes desde el barco, nutrias gigantes, miles de aves — el mayor humedal tropical del mundo, con los guías adecuados.",
        cta: "Diseñar mi safari en el Pantanal",
      },
      longIntro: [
        "El Pantanal es 10 veces los Everglades y tiene la mayor densidad de jaguares del planeta. Entre julio y octubre, a lo largo del Río Cuiabá cerca de Porto Jofre, los avistamientos son prácticamente garantizados — hemos tenido huéspedes que vieron 6 jaguares diferentes en un solo día.",
        "Hay dos accesos: el Pantanal Norte (Cuiabá / Poconé / Porto Jofre por la mítica carretera de tierra Transpantaneira) es la capital del jaguar. El Pantanal Sur (Campo Grande / Aquidauana) es más tranquilo, basado en fazendas, mejor para cabalgatas y aves. Los combinamos cuando el tiempo lo permite.",
        "Te alojas en pousadas familiares, barcos flotantes o estancias ganaderas convertidas en lodges. Días madrugadores: safari en barco al amanecer, siesta en el calor, salidas al atardecer con linternas para ver tapires y osos hormigueros.",
      ],
      whatToDo: {
        heading: "Qué hacer en el Pantanal",
        items: [
          {
            title: "Safaris de jaguares en el Río Cuiabá",
            text: "Desde Porto Jofre, lanchas pequeñas rastrean las orillas buscando jaguares durmiendo, caminando o cazando caimanes. Temporada alta jul–oct. Es la razón por la que casi todos vienen.",
          },
          {
            title: "La carretera Transpantaneira",
            text: "147 km de tierra con 122 puentes de madera de Poconé a Porto Jofre. Manejo lento entre fauna: caimanes, capibaras, guacamayos jacintos, nutrias gigantes, tapires al atardecer.",
          },
          {
            title: "Fazendas del Pantanal Sur (Refúgio Caiman, Barranco Alto)",
            text: "Estancias ganaderas convertidas en eco-lodges. Safaris a caballo, canoas en ríos claros, salidas nocturnas, proyectos de investigación de guacamayos. Más tranquilo que el Norte.",
          },
          {
            title: "Bonito como extensión (desde Pantanal Sur)",
            text: "Los ríos cristalinos de Bonito están a 3h de Campo Grande — combina 3 noches de Pantanal + 2 de Bonito para una semana perfecta de fauna y agua.",
          },
          {
            title: "Birding en barco y a caballo",
            text: "700+ especies de aves: tuiuiús, guacamayos jacintos, martines pescadores, garzas. Cualquier comida en el lodge se interrumpe por algo colorido que vuela.",
          },
        ],
      },
      bestTime: {
        heading: "Mejor época para safari en el Pantanal",
        text: "Estación seca (julio a octubre) es lo mejor: los ríos se encogen, la fauna se concentra, los avistamientos de jaguar culminan en septiembre. Mayo–junio es seco y verde. Noviembre–marzo es época de lluvias — paisajes inundados, acceso más difícil pero avifauna espectacular y menos visitantes. Evita el pico de lluvias (ene–feb) si te importan las carreteras.",
      },
      howToGet: {
        heading: "Cómo llegar",
        text: "Pantanal Norte: vuelo a Cuiabá (CGB) — conexiones diarias desde São Paulo, Río, Brasilia. Luego 4–5h en la Transpantaneira hasta Porto Jofre. Pantanal Sur: vuelo a Campo Grande (CGR), 3–4h en coche hasta las fazendas. Vuelos charter disponibles para lodges premium. Gestionamos todos los traslados.",
      },
      whereToStay: {
        heading: "Dónde alojarse",
        text: "Norte: Hotel Pantanal Norte y SouthWild Pantanal en Porto Jofre para jaguares; Pousada Piuval para la Transpantaneira; Jaguar Flotel para comodidad flotante. Sur: Refúgio Caiman (gran estancia con senderos privados), Barranco Alto (remoto, pequeño, favorito de birders), Caiman Ecological Refuge para lujo.",
      },
      faqs: {
        heading: "Safari en el Pantanal — preguntas frecuentes",
        items: [
          {
            q: "¿Los jaguares están realmente garantizados?",
            a: "En temporada seca pico (ago–oct) en el Río Cuiabá, los avistamientos son 95%+ en una estancia de 3 días. Múltiples avistamientos por día son comunes. En época de lluvias (dic–mar) menos fiables pero paisajes dramáticos.",
          },
          {
            q: "¿Cuántos días necesito en el Pantanal?",
            a: "Mínimo 3 noches en Pantanal Norte para jaguares. 4–5 noches permiten combinar la Transpantaneira con Porto Jofre. Añade 2 noches en Bonito por los ríos cristalinos — la semana ideal.",
          },
          {
            q: "¿Pantanal o Amazonía — cuál para fauna?",
            a: "Pantanal gana por paisajes abiertos y avistamientos fiables (jaguares, nutrias, aves, capibaras). Amazonía gana por inmersión en selva densa y culturas indígenas. Biomas distintos, ambos valen.",
          },
          {
            q: "¿Hace demasiado calor? ¿Hay malaria?",
            a: "Estación seca (jul–sep) tiene días cálidos (30–35°C), noches frescas, baja humedad. Riesgo de malaria bajo en zonas turísticas, vacuna de fiebre amarilla obligatoria, recomendamos protección contra dengue (manga larga, repelente).",
          },
          {
            q: "¿Cuánto cuesta un safari en el Pantanal?",
            a: "Desde USD 2.000–3.500 por persona por un safari de 4 noches incluyendo traslados desde Cuiabá, todas las comidas y safaris guiados diarios en barco/vehículo. Opciones premium y tours fotográficos son más altos.",
          },
        ],
      },
      finalCta: {
        heading: "¿Listo para tu safari en el Pantanal?",
        subheading: "Cuéntanos tus fechas. Volvemos con una propuesta en 48 horas.",
        button: "Empezar por WhatsApp",
      },
      back: "Volver al resumen de Brasil",
    },
    it: {
      metaTitle: "Safari nel Pantanal — Viaggi con i Giaguari in Brasile",
      metaDescription:
        "Progetta il tuo safari nel Pantanal: avvistamenti garantiti di giaguari sul Rio Cuiabá, lontre giganti, capibara e are giacinto.",
      keywords:
        "safari pantanal, tour giaguari brasile, fauna pantanal, porto jofre, rio cuiabá, transpantaneira, lodge pantanal",
      hero: {
        eyebrow: "Zone Umide del Pantanal",
        title: "Il miglior safari di grandi felini fuori dall'Africa.",
        subtitle:
          "Giaguari selvatici dalla barca, lontre giganti, migliaia di uccelli — la più grande zona umida tropicale del mondo, con le guide giuste.",
        cta: "Progetta il mio safari nel Pantanal",
      },
      longIntro: [
        "Il Pantanal è 10 volte gli Everglades e ha la più alta densità di giaguari al mondo. Tra luglio e ottobre, lungo il Rio Cuiabá vicino a Porto Jofre, gli avvistamenti sono praticamente garantiti — abbiamo avuto ospiti che hanno visto 6 giaguari diversi in un solo giorno.",
        "Ci sono due accessi: il Pantanal Nord (Cuiabá / Poconé / Porto Jofre attraverso la mitica strada sterrata Transpantaneira) è la capitale del giaguaro. Il Pantanal Sud (Campo Grande / Aquidauana) è più tranquillo, basato su fazendas, migliore per cavalcate e uccelli. Li combiniamo quando il tempo lo permette.",
        "Dormi in pousadas familiari, barche galleggianti o ranch bovini convertiti in lodge. Giornate mattiniere: safari in barca all'alba, siesta nel caldo, uscite al tramonto con torce per tapiri e formichieri giganti.",
      ],
      whatToDo: {
        heading: "Cosa fare nel Pantanal",
        items: [
          {
            title: "Safari di giaguari sul Rio Cuiabá",
            text: "Da Porto Jofre, piccoli motoscafi scandagliano le rive cercando giaguari che dormono, camminano o cacciano caimani. Alta stagione lug–ott. È la ragione per cui quasi tutti vengono.",
          },
          {
            title: "La strada Transpantaneira",
            text: "147 km di sterrato con 122 ponti di legno da Poconé a Porto Jofre. Guida lenta tra fauna: caimani, capibara, are giacinto, lontre giganti, tapiri al tramonto.",
          },
          {
            title: "Fazendas del Pantanal Sud (Refúgio Caiman, Barranco Alto)",
            text: "Ranch bovini convertiti in eco-lodge. Safari a cavallo, canoe su fiumi limpidi, uscite notturne, progetti di ricerca sulle are. Più tranquillo del Nord.",
          },
          {
            title: "Bonito come estensione (dal Pantanal Sud)",
            text: "I fiumi cristallini di Bonito sono a 3h da Campo Grande — combina 3 notti Pantanal + 2 Bonito per una settimana perfetta di fauna e acqua.",
          },
          {
            title: "Birdwatching in barca e a cavallo",
            text: "700+ specie di uccelli: tuiuiús, are giacinto, martin pescatori, aironi. Ogni pasto al lodge viene interrotto da qualcosa di colorato che vola.",
          },
        ],
      },
      bestTime: {
        heading: "Migliore periodo per il safari nel Pantanal",
        text: "Stagione secca (luglio–ottobre) è il picco: i fiumi si restringono, la fauna si concentra, avvistamenti di giaguaro al culmine a settembre. Maggio–giugno secco e verde. Novembre–marzo è stagione delle piogge — paesaggi allagati, accesso più difficile ma avifauna spettacolare. Evita il picco delle piogge (gen–feb) se le strade contano.",
      },
      howToGet: {
        heading: "Come arrivare",
        text: "Pantanal Nord: volo per Cuiabá (CGB) — coincidenze giornaliere da São Paulo, Rio, Brasilia. Poi 4–5h in Transpantaneira fino a Porto Jofre. Pantanal Sud: volo per Campo Grande (CGR), 3–4h in auto fino alle fazendas. Voli charter disponibili per lodge premium. Gestiamo tutti i transfer.",
      },
      whereToStay: {
        heading: "Dove alloggiare",
        text: "Nord: Hotel Pantanal Norte e SouthWild Pantanal a Porto Jofre per giaguari; Pousada Piuval per la Transpantaneira; Jaguar Flotel per comfort galleggiante. Sud: Refúgio Caiman (grande ranch con sentieri privati), Barranco Alto (remoto, piccolo, prediletto dai birder), Caiman Ecological Refuge per lusso.",
      },
      faqs: {
        heading: "Safari nel Pantanal — domande frequenti",
        items: [
          {
            q: "I giaguari sono davvero garantiti?",
            a: "In alta stagione secca (ago–ott) sul Rio Cuiabá, avvistamenti al 95%+ in un soggiorno di 3 giorni. Avvistamenti multipli al giorno sono comuni. In stagione umida (dic–mar) meno affidabili ma paesaggi drammatici.",
          },
          {
            q: "Quanti giorni servono nel Pantanal?",
            a: "Minimo 3 notti nel Pantanal Nord per i giaguari. 4–5 notti permettono di combinare Transpantaneira con Porto Jofre. Aggiungi 2 notti a Bonito per i fiumi cristallini — la settimana ideale.",
          },
          {
            q: "Pantanal o Amazzonia — quale per la fauna?",
            a: "Pantanal vince per paesaggi aperti e avvistamenti affidabili (giaguari, lontre, uccelli, capibara). Amazzonia vince per immersione nella foresta densa e culture indigene. Biomi diversi, entrambi validi.",
          },
          {
            q: "Fa troppo caldo? Malaria?",
            a: "Stagione secca (lug–set) ha giornate calde (30–35°C), notti fresche, umidità bassa. Rischio malaria basso nelle aree turistiche, vaccino febbre gialla obbligatorio, raccomandiamo protezione dengue (maniche lunghe, repellente).",
          },
          {
            q: "Quanto costa un safari nel Pantanal?",
            a: "Da USD 2.000–3.500 a persona per un safari di 4 notti inclusi transfer da Cuiabá, tutti i pasti e safari guidati giornalieri in barca/veicolo. Opzioni premium e tour fotografici costano di più.",
          },
        ],
      },
      finalCta: {
        heading: "Pronto per il tuo safari nel Pantanal?",
        subheading: "Raccontaci le tue date. Torniamo con una proposta in 48 ore.",
        button: "Inizia su WhatsApp",
      },
      back: "Torna alla panoramica Brasile",
    },
    de: {
      metaTitle: "Pantanal Safari — Jaguar-Reisen in Brasilien",
      metaDescription:
        "Planen Sie Ihre Pantanal-Safari: garantierte Jaguar-Sichtungen am Cuiabá-Fluss, Riesenotter, Capybaras und Hyazinth-Aras. Boutique-Lodges, private Guides.",
      keywords:
        "pantanal safari, jaguar tour brasilien, pantanal wildtiere, porto jofre, cuiabá fluss, transpantaneira, pantanal lodge",
      hero: {
        eyebrow: "Pantanal-Feuchtgebiete",
        title: "Die beste Großkatzen-Safari außerhalb Afrikas.",
        subtitle:
          "Wilde Jaguare vom Boot aus, Riesenotter, tausende Vögel — das größte tropische Feuchtgebiet der Welt, mit den richtigen Guides.",
        cta: "Meine Pantanal-Safari planen",
      },
      longIntro: [
        "Das Pantanal ist 10-mal so groß wie die Everglades und hat die höchste Jaguardichte der Erde. Zwischen Juli und Oktober, entlang des Cuiabá-Flusses bei Porto Jofre, sind Sichtungen praktisch garantiert — wir hatten Gäste, die 6 verschiedene Jaguare an einem Tag sahen.",
        "Es gibt zwei Zugänge: das Nord-Pantanal (Cuiabá / Poconé / Porto Jofre über die legendäre Schotterstraße Transpantaneira) ist die Jaguar-Hauptstadt. Das Süd-Pantanal (Campo Grande / Aquidauana) ist ruhiger, ranchbasiert, besser für Reiten und Vögel. Wir kombinieren beide, wenn die Zeit reicht.",
        "Sie übernachten in familiengeführten Pousadas, schwimmenden Booten oder in Lodges umgebauten Rinderfarmen. Frühe Tage: Boot-Safari im Morgengrauen, Siesta in der Hitze, Nachtfahrten mit Stirnlampen für Tapire und Riesenameisenbären.",
      ],
      whatToDo: {
        heading: "Was Sie im Pantanal tun können",
        items: [
          {
            title: "Jaguar-Safaris am Cuiabá-Fluss",
            text: "Von Porto Jofre aus scannen kleine Schnellboote die Ufer nach Jaguaren, die schlafen, laufen oder Kaimane jagen. Hochsaison Jul–Okt. Der Grund, warum fast alle kommen.",
          },
          {
            title: "Die Transpantaneira-Straße",
            text: "147 km Schotter mit 122 Holzbrücken von Poconé nach Porto Jofre. Langsame Fahrt zwischen Wildtieren: Kaimane, Capybaras, Hyazinth-Aras, Riesenotter, Tapire in der Dämmerung.",
          },
          {
            title: "Süd-Pantanal Fazendas (Refúgio Caiman, Barranco Alto)",
            text: "Rinderfarmen als Eco-Lodges. Reitsafaris, Kanu auf klaren Flüssen, Nachtfahrten, Ara-Forschungsprojekte. Ruhiger als der Norden.",
          },
          {
            title: "Bonito als Zusatz (vom Süd-Pantanal)",
            text: "Die kristallklaren Flüsse von Bonito sind 3h von Campo Grande entfernt — kombinieren Sie 3 Pantanal-Nächte + 2 Bonito-Nächte für eine perfekte Wildtier-und-Wasser-Woche.",
          },
          {
            title: "Vogelbeobachtung per Boot und Pferd",
            text: "700+ Vogelarten: Jabiru-Störche, Hyazinth-Aras, Eisvögel, Reiher. Jede Mahlzeit in der Lodge wird von etwas Buntem unterbrochen, das vorbeifliegt.",
          },
        ],
      },
      bestTime: {
        heading: "Beste Zeit für die Pantanal-Safari",
        text: "Trockenzeit (Juli–Oktober) ist Peak: Flüsse schrumpfen, Wildtiere konzentrieren sich, Jaguar-Sichtungen kulminieren im September. Mai–Juni ist trocken und grün. November–März ist Regenzeit — überflutete Landschaften, schwierigerer Zugang, aber spektakuläre Vogelwelt. Meiden Sie die Regen-Spitze (Jan–Feb), wenn Straßen wichtig sind.",
      },
      howToGet: {
        heading: "Anreise",
        text: "Nord-Pantanal: Flug nach Cuiabá (CGB) — tägliche Verbindungen ab São Paulo, Rio, Brasília. Dann 4–5h auf der Transpantaneira nach Porto Jofre. Süd-Pantanal: Flug nach Campo Grande (CGR), 3–4h Fahrt zu den Fazendas. Charterflüge für Premium-Lodges verfügbar. Wir organisieren alle Transfers.",
      },
      whereToStay: {
        heading: "Wo übernachten",
        text: "Nord: Hotel Pantanal Norte und SouthWild Pantanal in Porto Jofre für Jaguare; Pousada Piuval für die Transpantaneira; Jaguar Flotel für schwimmenden Komfort. Süd: Refúgio Caiman (große Ranch mit privaten Wegen), Barranco Alto (abgelegen, klein, Birder-Liebling), Caiman Ecological Refuge für Luxus.",
      },
      faqs: {
        heading: "Pantanal-Safari — häufige Fragen",
        items: [
          {
            q: "Sind Jaguare wirklich garantiert?",
            a: "In der Peak-Trockenzeit (Aug–Okt) am Cuiabá-Fluss liegen Sichtungen bei 95%+ über 3 Tage. Mehrfache Sichtungen pro Tag sind üblich. In der Regenzeit (Dez–Mär) unzuverlässiger, aber Landschaften dramatisch.",
          },
          {
            q: "Wie viele Tage brauche ich im Pantanal?",
            a: "Minimum 3 Nächte im Nord-Pantanal für Jaguare. 4–5 Nächte erlauben die Transpantaneira mit Porto Jofre zu kombinieren. Fügen Sie 2 Nächte Bonito für die klaren Flüsse hinzu — die ideale Woche.",
          },
          {
            q: "Pantanal oder Amazonas — welches für Wildtiere?",
            a: "Pantanal für offene Landschaften und zuverlässige Sichtungen (Jaguare, Otter, Vögel, Capybaras). Amazonas für Immersion in dichten Regenwald und indigene Kulturen. Verschiedene Biome, beide lohnend.",
          },
          {
            q: "Zu heiß? Malaria?",
            a: "Trockenzeit (Jul–Sep) hat warme Tage (30–35°C), kühle Nächte, niedrige Luftfeuchtigkeit. Malariarisiko in Touristenzonen niedrig, Gelbfieberimpfung Pflicht, Dengue-Schutz empfohlen (lange Ärmel, Repellent).",
          },
          {
            q: "Was kostet eine Pantanal-Safari?",
            a: "Ab USD 2.000–3.500 pro Person für 4-Nächte-Safari inkl. Transfer ab Cuiabá, alle Mahlzeiten und tägliche geführte Boots-/Fahrzeug-Safaris. Premium-Optionen und Fototouren höher.",
          },
        ],
      },
      finalCta: {
        heading: "Bereit für Ihre Pantanal-Safari?",
        subheading: "Erzählen Sie uns Ihre Daten. Wir melden uns in 48 Stunden mit einem Vorschlag.",
        button: "Auf WhatsApp starten",
      },
      back: "Zurück zur Brasilien-Übersicht",
    },
  },

  "lencois-maranhenses": {
    en: {
      metaTitle: "Lençóis Maranhenses Tours — Brazil's Desert of Lagoons",
      metaDescription:
        "Plan your Lençóis Maranhenses trip: white dunes, turquoise lagoons, Barreirinhas and Atins. Best months, how to get there, boutique pousadas.",
      keywords: "lençóis maranhenses tour, brazil desert, barreirinhas, atins, santo amaro, rota das emocoes, lagoa azul, lençóis best time",
      hero: {
        eyebrow: "Maranhão, Northeast Brazil",
        title: "The desert of turquoise lagoons.",
        subtitle: "1,500 km² of pure white dunes filled with rainwater lagoons — one of the most surreal landscapes on Earth.",
        cta: "Design my Lençóis trip",
      },
      longIntro: [
        "The Lençóis Maranhenses are not a true desert — they are a coastal dune field that fills with freshwater every rainy season. From June to September, thousands of turquoise, jade and emerald lagoons appear between the white dunes, warm enough to swim in.",
        "Three entry points shape the trip. Barreirinhas is the classic gateway, with 4x4 day trips to Lagoa Azul and Lagoa Bonita. Atins is the boho beach village at the eastern edge — kitesurf, seafood, and the walk-in access to the most photogenic dunes. Santo Amaro on the west is the quietest, wildest access, favoured by photographers.",
        "You reach Lençóis from São Luís (4h drive) or by scenic route from Jericoacoara through the Delta do Parnaíba — the mythic Rota das Emoções crossing three states in one week.",
      ],
      whatToDo: {
        heading: "What to do in the Lençóis Maranhenses",
        items: [
          { title: "Lagoa Azul & Lagoa Bonita (Barreirinhas)", text: "The classic 4x4 half-day tour: climb white dunes, swim in warm turquoise lagoons, sunset from a high dune." },
          { title: "Atins — dunes, river and sea", text: "Walk into the National Park from Atins, boat the Preguiças River, kitesurf on the estuary, sleep in beach pousadas." },
          { title: "Santo Amaro — the quiet side", text: "The most remote base, tiny village, walking access to Lagoa da Gaivota. Best for photographers and solitude." },
          { title: "Delta do Parnaíba & Rota das Emoções", text: "Combine Lençóis with Jericoacoara through the Parnaíba Delta — boats through mangroves, guarás (scarlet ibis) at sunset, three states in one crossing." },
          { title: "Small aircraft flight over the dunes", text: "A 40-minute scenic flight from Barreirinhas is the only way to grasp the scale — hundreds of lagoons, sinuous dune ridges, the sea on the horizon." },
        ],
      },
      bestTime: { heading: "Best time to visit", text: "July to September is the peak: lagoons at their fullest, sunny days, warm water. May–June: lagoons filling, fewer visitors. October–November: lagoons shrinking but still beautiful, quieter. December–April: rainy months, lagoons dry or muddy — not recommended for the classic experience." },
      howToGet: { heading: "How to get there", text: "Fly to São Luís (SLZ) from São Paulo, Rio or Fortaleza (2–3h). Private transfer or shared van 4h to Barreirinhas; 5h to Atins; 6h to Santo Amaro. From Jericoacoara/Fortaleza, the overland Rota das Emoções takes 2–3 days with boats and 4x4s." },
      whereToStay: { heading: "Where to stay", text: "Barreirinhas: Rancho do Buna, Villa Riacho, Vila Guará. Atins: Rancho do Peixe, Pousada Jalapão, Prea Boutique. Santo Amaro: Pousada Pequenos Lençóis. Add a night in São Luís' colonial centre (a UNESCO site) either side." },
      faqs: {
        heading: "Lençóis Maranhenses — frequently asked",
        items: [
          { q: "How many days do I need?", a: "3 nights minimum in Barreirinhas or Atins to see the main lagoons and dunes. 5 nights if combining Atins + Barreirinhas, or adding the Delta do Parnaíba. The full Rota das Emoções takes 7–10 days." },
          { q: "Barreirinhas vs Atins — where to base?", a: "Barreirinhas is easier logistics, more restaurants, classic tours. Atins is a beach village with dunes at your doorstep — boho, quieter, better for repeat visitors. First-timers usually start in Barreirinhas." },
          { q: "Can I swim in the lagoons?", a: "Yes — freshwater, warm (28–30°C), clear turquoise. No fish or hazards. It's one of the most magical swims in the world." },
          { q: "Is it accessible for children or older travellers?", a: "Yes. The 4x4 tours are gentle; some dune walking is required (short stretches). We arrange the easier lagoons and slower pace." },
          { q: "Can I combine Lençóis with the Amazon or Northeast beaches?", a: "Yes. Common combos: São Luís + Lençóis + Jericoacoara; Amazon (Belém or Manaus) + Lençóis; Lençóis + Bahia + Rio. All logistics via São Luís or Fortaleza." },
        ],
      },
      finalCta: { heading: "Ready to walk the desert of lagoons?", subheading: "Tell us your dates. We come back in 48 hours.", button: "Start on WhatsApp" },
      back: "Back to Brazil overview",
    },
    es: {
      metaTitle: "Tours a los Lençóis Maranhenses — El Desierto de Lagunas de Brasil",
      metaDescription: "Planifica tu viaje a los Lençóis Maranhenses: dunas blancas, lagunas turquesas, Barreirinhas y Atins. Mejor época, cómo llegar, pousadas boutique.",
      keywords: "tour lençóis maranhenses, desierto brasil, barreirinhas, atins, santo amaro, rota das emocoes, mejor época lençóis",
      hero: { eyebrow: "Maranhão, Nordeste de Brasil", title: "El desierto de lagunas turquesas.", subtitle: "1.500 km² de dunas blancas con lagunas de agua de lluvia — uno de los paisajes más surrealistas del planeta.", cta: "Diseñar mi viaje a los Lençóis" },
      longIntro: [
        "Los Lençóis Maranhenses no son un desierto verdadero — son un campo de dunas costeras que se llena de agua dulce cada estación lluviosa. De junio a septiembre aparecen miles de lagunas turquesas, jade y esmeralda entre las dunas blancas, cálidas para nadar.",
        "Tres accesos definen el viaje. Barreirinhas es la puerta clásica, con excursiones 4x4 a Lagoa Azul y Lagoa Bonita. Atins es el pueblo boho de playa en el extremo este — kitesurf, mariscos y acceso caminando a las dunas más fotogénicas. Santo Amaro al oeste es el acceso más tranquilo y salvaje, favorito de fotógrafos.",
        "Se llega desde São Luís (4h en coche) o por la ruta escénica desde Jericoacoara pasando por el Delta del Parnaíba — la mítica Rota das Emoções cruzando tres estados en una semana.",
      ],
      whatToDo: {
        heading: "Qué hacer en los Lençóis Maranhenses",
        items: [
          { title: "Lagoa Azul y Lagoa Bonita (Barreirinhas)", text: "El tour clásico de medio día en 4x4: subir dunas blancas, nadar en lagunas turquesas cálidas, atardecer desde una duna alta." },
          { title: "Atins — dunas, río y mar", text: "Entra caminando al Parque Nacional desde Atins, navega el Río Preguiças, haz kitesurf en el estuario, duerme en pousadas de playa." },
          { title: "Santo Amaro — el lado tranquilo", text: "La base más remota, pueblo minúsculo, acceso caminando a la Lagoa da Gaivota. Ideal para fotógrafos y soledad." },
          { title: "Delta del Parnaíba y Rota das Emoções", text: "Combina Lençóis con Jericoacoara por el Delta del Parnaíba — barcos entre manglares, guarás al atardecer, tres estados en una travesía." },
          { title: "Vuelo panorámico en avioneta", text: "40 minutos desde Barreirinhas — la única forma de captar la escala: cientos de lagunas, crestas sinuosas de dunas, el mar en el horizonte." },
        ],
      },
      bestTime: { heading: "Mejor época", text: "Julio a septiembre es el pico: lagunas al máximo, días soleados, agua cálida. Mayo–junio: lagunas llenándose, menos visitantes. Octubre–noviembre: lagunas reduciéndose pero aún bellas, más tranquilo. Diciembre–abril: meses de lluvia, lagunas secas o fangosas — no recomendado para la experiencia clásica." },
      howToGet: { heading: "Cómo llegar", text: "Vuelo a São Luís (SLZ) desde São Paulo, Río o Fortaleza (2–3h). Traslado privado o van compartida 4h a Barreirinhas; 5h a Atins; 6h a Santo Amaro. Desde Jericoacoara/Fortaleza, la Rota das Emoções por tierra lleva 2–3 días con barcos y 4x4." },
      whereToStay: { heading: "Dónde alojarse", text: "Barreirinhas: Rancho do Buna, Villa Riacho, Vila Guará. Atins: Rancho do Peixe, Pousada Jalapão, Prea Boutique. Santo Amaro: Pousada Pequenos Lençóis. Añade una noche en el centro colonial de São Luís (Patrimonio UNESCO)." },
      faqs: {
        heading: "Lençóis Maranhenses — preguntas frecuentes",
        items: [
          { q: "¿Cuántos días necesito?", a: "3 noches mínimo en Barreirinhas o Atins para ver las principales lagunas y dunas. 5 noches si combinas Atins + Barreirinhas, o añades el Delta del Parnaíba. La Rota das Emoções completa lleva 7–10 días." },
          { q: "Barreirinhas o Atins — ¿dónde basarse?", a: "Barreirinhas tiene logística más fácil, más restaurantes, tours clásicos. Atins es un pueblo de playa con dunas al frente — boho, tranquilo, mejor para repetidores. Los novatos empiezan en Barreirinhas." },
          { q: "¿Se puede nadar en las lagunas?", a: "Sí — agua dulce, cálida (28–30°C), turquesa clara. Sin peces ni peligros. Uno de los baños más mágicos del mundo." },
          { q: "¿Es accesible para niños o mayores?", a: "Sí. Los tours 4x4 son suaves; se requiere algo de caminata por dunas (tramos cortos). Adaptamos a lagunas más fáciles y ritmo pausado." },
          { q: "¿Puedo combinar con Amazonía o playas del Nordeste?", a: "Sí. Combinaciones habituales: São Luís + Lençóis + Jericoacoara; Amazonía (Belém o Manaos) + Lençóis; Lençóis + Bahía + Río. Toda la logística por São Luís o Fortaleza." },
        ],
      },
      finalCta: { heading: "¿Listo para caminar el desierto de lagunas?", subheading: "Cuéntanos tus fechas. Volvemos en 48 horas.", button: "Empezar por WhatsApp" },
      back: "Volver al resumen de Brasil",
    },
    it: {
      metaTitle: "Tour Lençóis Maranhenses — Il Deserto di Lagune del Brasile",
      metaDescription: "Progetta il tuo viaggio ai Lençóis Maranhenses: dune bianche, lagune turchesi, Barreirinhas e Atins. Migliore periodo, come arrivare, pousada boutique.",
      keywords: "tour lençóis maranhenses, deserto brasile, barreirinhas, atins, santo amaro, rota das emocoes",
      hero: { eyebrow: "Maranhão, Nordest Brasile", title: "Il deserto delle lagune turchesi.", subtitle: "1.500 km² di dune bianche riempite di lagune di pioggia — uno dei paesaggi più surreali della Terra.", cta: "Progetta il mio viaggio ai Lençóis" },
      longIntro: [
        "I Lençóis Maranhenses non sono un vero deserto — sono un campo di dune costiere che si riempie di acqua dolce ogni stagione delle piogge. Da giugno a settembre migliaia di lagune turchesi, giada e smeraldo appaiono tra le dune bianche, calde per nuotare.",
        "Tre accessi definiscono il viaggio. Barreirinhas è la porta classica, con escursioni 4x4 a Lagoa Azul e Lagoa Bonita. Atins è il villaggio bohémien sulla spiaggia all'estremità est — kitesurf, frutti di mare, accesso a piedi alle dune più fotogeniche. Santo Amaro a ovest è l'accesso più tranquillo e selvaggio, prediletto dai fotografi.",
        "Si arriva da São Luís (4h in auto) o dal percorso panoramico da Jericoacoara attraverso il Delta del Parnaíba — la mitica Rota das Emoções che attraversa tre stati in una settimana.",
      ],
      whatToDo: {
        heading: "Cosa fare ai Lençóis Maranhenses",
        items: [
          { title: "Lagoa Azul e Lagoa Bonita (Barreirinhas)", text: "Il classico tour di mezza giornata in 4x4: sali sulle dune bianche, nuota in lagune turchesi calde, tramonto da un'alta duna." },
          { title: "Atins — dune, fiume e mare", text: "Entra a piedi nel Parco Nazionale da Atins, naviga il fiume Preguiças, kitesurf nell'estuario, dormi in pousada sulla spiaggia." },
          { title: "Santo Amaro — il lato tranquillo", text: "La base più remota, villaggio minuscolo, accesso a piedi alla Lagoa da Gaivota. Ideale per fotografi e solitudine." },
          { title: "Delta del Parnaíba e Rota das Emoções", text: "Combina Lençóis con Jericoacoara attraverso il Delta del Parnaíba — barche tra mangrovie, guarás al tramonto, tre stati in una traversata." },
          { title: "Volo panoramico in aereo", text: "40 minuti da Barreirinhas — l'unico modo per cogliere la scala: centinaia di lagune, creste sinuose di dune, il mare all'orizzonte." },
        ],
      },
      bestTime: { heading: "Migliore periodo", text: "Luglio–settembre è il picco: lagune al massimo, giornate soleggiate, acqua calda. Maggio–giugno: lagune che si riempiono, meno visitatori. Ottobre–novembre: lagune che si restringono ma ancora belle. Dicembre–aprile: mesi di pioggia, lagune secche o fangose — sconsigliato." },
      howToGet: { heading: "Come arrivare", text: "Volo per São Luís (SLZ) da São Paulo, Rio o Fortaleza (2–3h). Transfer privato o van condiviso 4h a Barreirinhas; 5h ad Atins; 6h a Santo Amaro. Da Jericoacoara/Fortaleza, la Rota das Emoções via terra impiega 2–3 giorni con barche e 4x4." },
      whereToStay: { heading: "Dove alloggiare", text: "Barreirinhas: Rancho do Buna, Villa Riacho, Vila Guará. Atins: Rancho do Peixe, Pousada Jalapão, Prea Boutique. Santo Amaro: Pousada Pequenos Lençóis. Aggiungi una notte nel centro coloniale di São Luís (Patrimonio UNESCO)." },
      faqs: {
        heading: "Lençóis Maranhenses — domande frequenti",
        items: [
          { q: "Quanti giorni servono?", a: "3 notti minimo a Barreirinhas o Atins per vedere le lagune principali e le dune. 5 notti combinando Atins + Barreirinhas, o aggiungendo il Delta del Parnaíba. La Rota das Emoções completa richiede 7–10 giorni." },
          { q: "Barreirinhas o Atins — dove basarsi?", a: "Barreirinhas ha logistica più facile, più ristoranti, tour classici. Atins è un villaggio balneare con dune davanti — bohémien, tranquillo, meglio per chi torna. I primi visitatori partono da Barreirinhas." },
          { q: "Si può nuotare nelle lagune?", a: "Sì — acqua dolce, calda (28–30°C), turchese limpida. Nessun pesce o pericolo. Uno dei bagni più magici al mondo." },
          { q: "È accessibile per bambini o anziani?", a: "Sì. I tour 4x4 sono dolci; serve un po' di camminata sulle dune (tratti brevi). Adattiamo con lagune più facili e ritmo lento." },
          { q: "Posso combinare con Amazzonia o spiagge del Nordest?", a: "Sì. Combinazioni comuni: São Luís + Lençóis + Jericoacoara; Amazzonia (Belém o Manaus) + Lençóis; Lençóis + Bahia + Rio." },
        ],
      },
      finalCta: { heading: "Pronto a camminare nel deserto delle lagune?", subheading: "Raccontaci le tue date. Torniamo in 48 ore.", button: "Inizia su WhatsApp" },
      back: "Torna alla panoramica Brasile",
    },
    de: {
      metaTitle: "Lençóis Maranhenses Reisen — Brasiliens Lagunen-Wüste",
      metaDescription: "Planen Sie Ihre Lençóis-Maranhenses-Reise: weiße Dünen, türkisfarbene Lagunen, Barreirinhas und Atins. Beste Zeit, Anreise, Boutique-Pousadas.",
      keywords: "lençóis maranhenses reise, brasilien wüste, barreirinhas, atins, santo amaro, rota das emocoes",
      hero: { eyebrow: "Maranhão, Nordosten Brasilien", title: "Die Wüste türkisfarbener Lagunen.", subtitle: "1.500 km² weißer Dünen, gefüllt mit Regenwasser-Lagunen — eine der surrealsten Landschaften der Erde.", cta: "Meine Lençóis-Reise planen" },
      longIntro: [
        "Die Lençóis Maranhenses sind keine echte Wüste — sie sind ein Küstendünenfeld, das sich jede Regenzeit mit Süßwasser füllt. Von Juni bis September erscheinen tausende türkis-, jade- und smaragdfarbene Lagunen zwischen den weißen Dünen, warm zum Baden.",
        "Drei Zugänge prägen die Reise. Barreirinhas ist das klassische Tor, mit 4x4-Tagestouren zu Lagoa Azul und Lagoa Bonita. Atins ist das Böhmische Strandörfchen im Osten — Kitesurfen, Meeresfrüchte und Zugang zu Fuß zu den fotogensten Dünen. Santo Amaro im Westen ist der ruhigste, wildeste Zugang, Fotografen-Favorit.",
        "Sie erreichen die Lençóis von São Luís (4h Fahrt) oder auf der Panoramaroute ab Jericoacoara durch das Parnaíba-Delta — die mythische Rota das Emoções, die drei Bundesstaaten in einer Woche verbindet.",
      ],
      whatToDo: {
        heading: "Was Sie in den Lençóis Maranhenses tun können",
        items: [
          { title: "Lagoa Azul & Lagoa Bonita (Barreirinhas)", text: "Die klassische 4x4-Halbtagestour: weiße Dünen erklimmen, in warmen türkisfarbenen Lagunen baden, Sonnenuntergang von einer hohen Düne." },
          { title: "Atins — Dünen, Fluss und Meer", text: "Wandern Sie vom Ort in den Nationalpark, Bootsfahrt auf dem Preguiças-Fluss, Kitesurfen im Ästuar, übernachten in Strandpousadas." },
          { title: "Santo Amaro — die stille Seite", text: "Die entlegenste Basis, winziges Dorf, Zugang zu Fuß zur Lagoa da Gaivota. Ideal für Fotografen und Einsamkeit." },
          { title: "Parnaíba-Delta & Rota das Emoções", text: "Kombinieren Sie Lençóis mit Jericoacoara über das Parnaíba-Delta — Boote durch Mangroven, Guarás (Scharlach-Ibisse) im Sonnenuntergang, drei Bundesstaaten in einer Überquerung." },
          { title: "Panoramaflug im Kleinflugzeug", text: "40 Min. ab Barreirinhas — der einzige Weg, das Ausmaß zu erfassen: hunderte Lagunen, geschwungene Dünenkämme, das Meer am Horizont." },
        ],
      },
      bestTime: { heading: "Beste Reisezeit", text: "Juli–September ist Peak: Lagunen am vollsten, sonnige Tage, warmes Wasser. Mai–Juni: Lagunen füllen sich, weniger Besucher. Oktober–November: Lagunen schrumpfen, aber immer noch schön. Dezember–April: Regenmonate, Lagunen trocken oder schlammig — nicht empfohlen." },
      howToGet: { heading: "Anreise", text: "Flug nach São Luís (SLZ) ab São Paulo, Rio oder Fortaleza (2–3h). Privattransfer oder Shuttle 4h nach Barreirinhas; 5h Atins; 6h Santo Amaro. Von Jericoacoara/Fortaleza dauert die Rota das Emoções über Land 2–3 Tage mit Booten und 4x4." },
      whereToStay: { heading: "Wo übernachten", text: "Barreirinhas: Rancho do Buna, Villa Riacho, Vila Guará. Atins: Rancho do Peixe, Pousada Jalapão, Prea Boutique. Santo Amaro: Pousada Pequenos Lençóis. Fügen Sie eine Nacht im Kolonialzentrum von São Luís (UNESCO-Welterbe) hinzu." },
      faqs: {
        heading: "Lençóis Maranhenses — häufige Fragen",
        items: [
          { q: "Wie viele Tage brauche ich?", a: "Minimum 3 Nächte in Barreirinhas oder Atins für die Hauptlagunen und Dünen. 5 Nächte für Atins + Barreirinhas oder zusätzlich das Parnaíba-Delta. Die volle Rota das Emoções dauert 7–10 Tage." },
          { q: "Barreirinhas oder Atins — wo übernachten?", a: "Barreirinhas hat einfachere Logistik, mehr Restaurants, klassische Touren. Atins ist ein Strandörfchen mit Dünen vor der Tür — böhmisch, ruhiger, besser für Wiederkommer. Erstbesucher starten in Barreirinhas." },
          { q: "Kann man in den Lagunen baden?", a: "Ja — Süßwasser, warm (28–30°C), klares Türkis. Keine Fische oder Gefahren. Eines der magischsten Bäder der Welt." },
          { q: "Familientauglich?", a: "Ja. Die 4x4-Touren sind sanft; etwas Dünenlaufen (kurze Abschnitte). Wir passen an leichtere Lagunen und langsameres Tempo an." },
          { q: "Kombination mit Amazonas oder Nordost-Stränden?", a: "Ja. Gängige Kombis: São Luís + Lençóis + Jericoacoara; Amazonas (Belém/Manaus) + Lençóis; Lençóis + Bahia + Rio." },
        ],
      },
      finalCta: { heading: "Bereit für die Wüste der Lagunen?", subheading: "Erzählen Sie uns Ihre Daten. Wir melden uns in 48 Stunden.", button: "Auf WhatsApp starten" },
      back: "Zurück zur Brasilien-Übersicht",
    },
  },

  "rio-de-janeiro": {
    en: {
      metaTitle: "Rio de Janeiro Tailor-Made Trips — Beyond the Postcard",
      metaDescription: "Design your Rio de Janeiro trip with a local boutique agency: Santa Teresa, favela projects done right, hidden beaches, boat days on Angra.",
      keywords: "rio de janeiro custom tour, rio boutique travel, santa teresa, ipanema copacabana, sugarloaf christ redeemer, favela tour ethical, angra dos reis",
      hero: { eyebrow: "Rio de Janeiro, Southeast Brazil", title: "Rio, seen from the inside.", subtitle: "The Marvelous City with a real guide, real neighbourhoods and real time to breathe it in.", cta: "Design my Rio trip" },
      longIntro: [
        "Rio is the world's only megacity wedged between mountain, rainforest and ocean. But most visitors see just three postcards: Christ, Sugarloaf, Copacabana. We design Rio the way carioca friends would show it — Santa Teresa's tram-hill studios, sunrise trails in the Tijuca rainforest, a Sunday feijoada in Urca, boat days out of Angra, and yes the postcards too, at the right hour and with the right guide.",
        "The city works as a 4–6 night base, easily combined with Ilha Grande (2h transfer, no cars, waterfall trails), Paraty (colonial cobblestones, Bay of Islands schooners) or Búzios (Riviera-style beaches, 2.5h drive). Longer trips add Iguazu, Salvador, or the Amazon.",
        "Rio also happens to be one of the best food cities in Latin America — from Lasai's tasting menu to a boteco in Botafogo. We book what's worth booking.",
      ],
      whatToDo: {
        heading: "What to do in Rio",
        items: [
          { title: "Christ, Sugarloaf & the classics — with a real guide", text: "Book the timing right (early Corcovado, sunset Sugarloaf), avoid the queues, get the geology, history and carioca stories nobody tells." },
          { title: "Santa Teresa & Lapa", text: "The bohemian hill: colonial mansions, artist studios, the Selarón steps, live samba in Lapa. Sleep here or spend a full afternoon and evening." },
          { title: "Tijuca National Park", text: "The largest urban rainforest in the world. Guided hikes to Pedra Bonita, Pedra da Gávea (advanced), Vista Chinesa, or a private jeep with waterfalls and coati sightings." },
          { title: "Angra dos Reis & Ilha Grande", text: "Day-boat or 2–3 night extension: 365 islands, translucent water, no cars on Ilha Grande. The best beach day near Rio." },
          { title: "Botafogo, Urca & Leblon by night", text: "Where cariocas actually eat and drink: pé-sujo bars in Botafogo, sunset caipirinhas at Bar Urca, seafood in Leblon." },
        ],
      },
      bestTime: { heading: "Best time to visit Rio", text: "May–October is dry and sunny with cooler evenings (perfect for hikes and city days). December–February is high season, hot and vibrant (Réveillon on Copacabana, Carnival). March–April has warm sea, fewer crowds and lower prices — an underrated window. Avoid extreme heatwaves in Jan–Feb if you're heat-sensitive." },
      howToGet: { heading: "How to get there", text: "Fly into Rio de Janeiro / Galeão (GIG) for international, or Santos Dumont (SDU) for domestic. From São Paulo, 1h flight or 6h drive. We arrange private airport transfer, in-city driver, and any onward legs (Iguazu, Paraty, Salvador)." },
      whereToStay: { heading: "Where to stay", text: "Ipanema for beach + upscale walk. Leblon for quiet luxury. Copacabana for classic hotels (Copacabana Palace, Fairmont). Santa Teresa for boutique/character (Santa Teresa Hotel MGallery). Urca for a residential local feel. We match neighbourhood to your travel style." },
      faqs: {
        heading: "Rio de Janeiro — frequently asked",
        items: [
          { q: "How many days do I need in Rio?", a: "4 nights minimum to cover the classics without rushing. 5–6 nights lets you add Tijuca hikes, a boat day, and slower carioca time. Longer if combining Ilha Grande or Paraty." },
          { q: "Is Rio safe?", a: "With local guidance, yes. We choose safe neighbourhoods (Ipanema, Leblon, Botafogo, Urca), private drivers or authorised taxis, avoid certain areas at night, and brief you on street smarts. Our 24/7 support is always one message away." },
          { q: "Is a favela tour ethical?", a: "Only with community-based operators that hire and pay local residents, and only in favelas that welcome visitors (Vidigal, Santa Marta). We only book with community-vetted guides — never drive-through 'poverty tourism'." },
          { q: "What about Carnival?", a: "Carnival (Feb/Mar) is spectacular but requires booking 6–9 months ahead: Sambadrome tickets, Copacabana hotels, and pre-planned blocos street parties. Ask us early — we handle the whole package." },
          { q: "Can I combine Rio with Iguazu, Amazon or Bahia?", a: "Yes, all common: Rio + Iguazu (2h flight), Rio + Bahia (2.5h flight to Salvador), Rio + Amazon (4h flight to Manaus). We design the full itinerary end-to-end." },
        ],
      },
      finalCta: { heading: "Ready to see Rio properly?", subheading: "Tell us your dates. We come back with a proposal in 48 hours.", button: "Start on WhatsApp" },
      back: "Back to Brazil overview",
    },
    es: {
      metaTitle: "Viajes a Medida a Río de Janeiro — Más Allá de la Postal",
      metaDescription: "Diseña tu viaje a Río de Janeiro con una agencia boutique local: Santa Teresa, favela con proyectos éticos, playas escondidas, días de barco en Angra.",
      keywords: "tour a medida río de janeiro, río viaje boutique, santa teresa, ipanema copacabana, pan de azúcar cristo redentor, favela tour ético, angra dos reis",
      hero: { eyebrow: "Río de Janeiro, Sudeste de Brasil", title: "Río, visto desde adentro.", subtitle: "La Ciudad Maravillosa con un guía real, barrios reales y tiempo real para respirarla.", cta: "Diseñar mi viaje a Río" },
      longIntro: [
        "Río es la única megaciudad del mundo encajada entre montaña, selva y océano. Pero la mayoría solo ve tres postales: Cristo, Pan de Azúcar, Copacabana. Diseñamos Río como te lo mostrarían amigos cariocas — estudios del cerro Santa Teresa, senderos al amanecer en la selva de Tijuca, feijoada dominguera en Urca, días de barco desde Angra, y sí las postales también, a la hora justa y con el guía adecuado.",
        "La ciudad funciona como base de 4–6 noches, fácil de combinar con Ilha Grande (2h de traslado, sin coches, senderos a cascadas), Paraty (adoquines coloniales, escunas por la Bahía de las Islas) o Búzios (playas estilo Riviera, 2,5h en coche). Viajes más largos suman Iguazú, Salvador o Amazonía.",
        "Río también es una de las mejores ciudades gastronómicas de América Latina — del menú degustación de Lasai a un boteco en Botafogo. Reservamos lo que vale la pena reservar.",
      ],
      whatToDo: {
        heading: "Qué hacer en Río",
        items: [
          { title: "Cristo, Pan de Azúcar y clásicos — con un guía real", text: "Reserva el horario correcto (Corcovado temprano, Pan de Azúcar al atardecer), evita colas, obtén geología, historia y anécdotas cariocas que nadie cuenta." },
          { title: "Santa Teresa y Lapa", text: "El cerro bohemio: mansiones coloniales, estudios de artistas, escaleras de Selarón, samba en vivo en Lapa. Duerme aquí o pasa toda una tarde/noche." },
          { title: "Parque Nacional de Tijuca", text: "La mayor selva urbana del mundo. Caminatas guiadas a Pedra Bonita, Pedra da Gávea (avanzado), Vista Chinesa, o jeep privado con cascadas y avistamientos de coatíes." },
          { title: "Angra dos Reis e Ilha Grande", text: "Día de barco o extensión de 2–3 noches: 365 islas, agua translúcida, sin coches en Ilha Grande. El mejor día de playa cerca de Río." },
          { title: "Botafogo, Urca y Leblon de noche", text: "Donde comen y beben los cariocas: bares de barrio en Botafogo, caipirinhas al atardecer en Bar Urca, mariscos en Leblon." },
        ],
      },
      bestTime: { heading: "Mejor época para visitar Río", text: "Mayo–octubre es seco y soleado con noches frescas (perfecto para caminatas y días de ciudad). Diciembre–febrero es temporada alta, calurosa y vibrante (Réveillon en Copacabana, Carnaval). Marzo–abril tiene mar cálido, menos gente y precios más bajos — una ventana subestimada. Evita olas de calor extremas en ene–feb si te afecta." },
      howToGet: { heading: "Cómo llegar", text: "Vuelo a Río / Galeão (GIG) internacional, o Santos Dumont (SDU) para vuelos internos. Desde São Paulo, 1h de vuelo o 6h en coche. Organizamos traslado privado, chofer en la ciudad y cualquier tramo posterior (Iguazú, Paraty, Salvador)." },
      whereToStay: { heading: "Dónde alojarse", text: "Ipanema para playa + zona alta caminable. Leblon para lujo tranquilo. Copacabana para hoteles clásicos (Copacabana Palace, Fairmont). Santa Teresa para boutique/carácter (Santa Teresa Hotel MGallery). Urca para ambiente local residencial. Encajamos barrio con estilo." },
      faqs: {
        heading: "Río de Janeiro — preguntas frecuentes",
        items: [
          { q: "¿Cuántos días necesito en Río?", a: "4 noches mínimo para cubrir los clásicos sin prisa. 5–6 noches para añadir caminatas en Tijuca, día de barco y tiempo carioca más lento. Más si combinas Ilha Grande o Paraty." },
          { q: "¿Es seguro Río?", a: "Con orientación local, sí. Elegimos barrios seguros (Ipanema, Leblon, Botafogo, Urca), choferes privados o taxis autorizados, evitamos ciertas zonas de noche y te orientamos sobre buenas prácticas. Soporte 24/7 a un mensaje." },
          { q: "¿Es ético un tour a la favela?", a: "Solo con operadores comunitarios que contratan y pagan a residentes locales, y solo en favelas que reciben visitantes (Vidigal, Santa Marta). Reservamos exclusivamente con guías validados por la comunidad — nunca 'turismo de pobreza' de paso." },
          { q: "¿Y el Carnaval?", a: "El Carnaval (feb/mar) es espectacular pero requiere reserva con 6–9 meses de antelación: entradas del Sambódromo, hoteles en Copacabana y blocos callejeros pre-planificados. Pídelo pronto — organizamos el paquete completo." },
          { q: "¿Puedo combinar Río con Iguazú, Amazonía o Bahía?", a: "Sí, todos habituales: Río + Iguazú (2h de vuelo), Río + Bahía (2,5h a Salvador), Río + Amazonía (4h a Manaos). Diseñamos el itinerario completo." },
        ],
      },
      finalCta: { heading: "¿Listo para ver Río como se debe?", subheading: "Cuéntanos tus fechas. Volvemos con una propuesta en 48 horas.", button: "Empezar por WhatsApp" },
      back: "Volver al resumen de Brasil",
    },
    it: {
      metaTitle: "Viaggi su Misura a Rio de Janeiro — Oltre la Cartolina",
      metaDescription: "Progetta il tuo viaggio a Rio de Janeiro con un'agenzia boutique locale: Santa Teresa, favela con progetti etici, spiagge nascoste, giornate in barca ad Angra.",
      keywords: "tour su misura rio de janeiro, rio viaggio boutique, santa teresa, ipanema copacabana, pan di zucchero cristo redentore, favela tour etico",
      hero: { eyebrow: "Rio de Janeiro, Sudest Brasile", title: "Rio, vista dall'interno.", subtitle: "La Città Meravigliosa con una guida vera, quartieri veri e tempo vero per respirarla.", cta: "Progetta il mio viaggio a Rio" },
      longIntro: [
        "Rio è l'unica megalopoli al mondo incastonata tra montagna, foresta e oceano. Ma la maggior parte dei visitatori vede solo tre cartoline: Cristo, Pan di Zucchero, Copacabana. Progettiamo Rio come te la mostrerebbero amici carioca — studi sulla collina di Santa Teresa, sentieri all'alba nella foresta di Tijuca, una feijoada domenicale a Urca, giornate in barca da Angra, e sì anche le cartoline, all'ora giusta con la guida giusta.",
        "La città funziona come base di 4–6 notti, facile da combinare con Ilha Grande (2h di transfer, senza auto, sentieri a cascate), Paraty (ciottoli coloniali, scuna nella Baia delle Isole) o Búzios (spiagge in stile Riviera, 2,5h in auto). Viaggi più lunghi aggiungono Iguazú, Salvador o Amazzonia.",
        "Rio è anche una delle migliori città gastronomiche dell'America Latina — dal menu degustazione di Lasai a un boteco a Botafogo. Prenotiamo ciò che vale la pena prenotare.",
      ],
      whatToDo: {
        heading: "Cosa fare a Rio",
        items: [
          { title: "Cristo, Pan di Zucchero e i classici — con una guida vera", text: "Prenota gli orari giusti (Corcovado presto, Pan di Zucchero al tramonto), evita le code, ottieni la geologia, la storia e le storie carioca che nessuno racconta." },
          { title: "Santa Teresa e Lapa", text: "La collina bohémien: ville coloniali, studi di artisti, scale di Selarón, samba dal vivo a Lapa. Dormi qui o passa un pomeriggio e serata pieni." },
          { title: "Parco Nazionale di Tijuca", text: "La più grande foresta pluviale urbana al mondo. Escursioni guidate a Pedra Bonita, Pedra da Gávea (avanzato), Vista Chinesa, o jeep privato con cascate e avvistamenti di coati." },
          { title: "Angra dos Reis e Ilha Grande", text: "Giornata in barca o estensione di 2–3 notti: 365 isole, acqua traslucida, niente auto a Ilha Grande. La miglior giornata di mare vicino a Rio." },
          { title: "Botafogo, Urca e Leblon di notte", text: "Dove i carioca mangiano e bevono davvero: bar di quartiere a Botafogo, caipirinha al tramonto al Bar Urca, pesce a Leblon." },
        ],
      },
      bestTime: { heading: "Migliore periodo per visitare Rio", text: "Maggio–ottobre secco e soleggiato con serate fresche (perfetto per escursioni e giornate in città). Dicembre–febbraio è alta stagione, caldo e vibrante (Réveillon a Copacabana, Carnevale). Marzo–aprile mare caldo, meno folla e prezzi più bassi — una finestra sottovalutata. Evita ondate di calore estreme gen–feb se ti pesano." },
      howToGet: { heading: "Come arrivare", text: "Volo per Rio / Galeão (GIG) internazionale, o Santos Dumont (SDU) per voli interni. Da São Paulo, 1h di volo o 6h in auto. Organizziamo transfer privato, autista in città e ogni tratta successiva (Iguazú, Paraty, Salvador)." },
      whereToStay: { heading: "Dove alloggiare", text: "Ipanema per spiaggia + zona alta pedonabile. Leblon per lusso tranquillo. Copacabana per hotel classici (Copacabana Palace, Fairmont). Santa Teresa per boutique/carattere (Santa Teresa Hotel MGallery). Urca per atmosfera residenziale locale. Abbiniamo quartiere e stile." },
      faqs: {
        heading: "Rio de Janeiro — domande frequenti",
        items: [
          { q: "Quanti giorni servono a Rio?", a: "4 notti minimo per coprire i classici senza fretta. 5–6 notti per aggiungere escursioni a Tijuca, giornata in barca e tempo carioca più lento. Di più se combini Ilha Grande o Paraty." },
          { q: "Rio è sicura?", a: "Con guida locale, sì. Scegliamo quartieri sicuri (Ipanema, Leblon, Botafogo, Urca), autisti privati o taxi autorizzati, evitiamo certe zone di notte e ti informiamo su buone pratiche. Supporto 24/7 a un messaggio di distanza." },
          { q: "Un tour in favela è etico?", a: "Solo con operatori comunitari che assumono e pagano residenti locali, e solo nelle favelas che accolgono visitatori (Vidigal, Santa Marta). Prenotiamo solo con guide validate dalla comunità — mai 'turismo della povertà' di passaggio." },
          { q: "E il Carnevale?", a: "Il Carnevale (feb/mar) è spettacolare ma richiede prenotazione con 6–9 mesi di anticipo: biglietti per il Sambodromo, hotel a Copacabana, blocos di strada pre-pianificati. Chiedici presto — gestiamo tutto." },
          { q: "Posso combinare Rio con Iguazú, Amazzonia o Bahia?", a: "Sì, tutte comuni: Rio + Iguazú (2h di volo), Rio + Bahia (2,5h per Salvador), Rio + Amazzonia (4h per Manaus). Progettiamo l'itinerario completo." },
        ],
      },
      finalCta: { heading: "Pronto a vedere Rio come si deve?", subheading: "Raccontaci le tue date. Torniamo con una proposta in 48 ore.", button: "Inizia su WhatsApp" },
      back: "Torna alla panoramica Brasile",
    },
    de: {
      metaTitle: "Rio de Janeiro Maßgeschneiderte Reisen — Jenseits der Postkarte",
      metaDescription: "Gestalten Sie Ihre Rio-Reise mit einer lokalen Boutique-Agentur: Santa Teresa, ethische Favela-Projekte, versteckte Strände, Bootstage in Angra.",
      keywords: "rio de janeiro maßgeschneidert, rio boutique reise, santa teresa, ipanema copacabana, zuckerhut christus statue, favela tour ethisch",
      hero: { eyebrow: "Rio de Janeiro, Südost-Brasilien", title: "Rio, von innen gesehen.", subtitle: "Die wundervolle Stadt mit einem echten Guide, echten Vierteln und echter Zeit, sie einzuatmen.", cta: "Meine Rio-Reise planen" },
      longIntro: [
        "Rio ist die einzige Megacity der Welt eingebettet zwischen Berg, Regenwald und Ozean. Doch die meisten Besucher sehen nur drei Postkarten: Christus, Zuckerhut, Copacabana. Wir gestalten Rio, wie Carioca-Freunde es zeigen würden — die Ateliers am Santa-Teresa-Hügel, Sonnenaufgangswanderungen im Tijuca-Regenwald, sonntägliche Feijoada in Urca, Bootstage ab Angra, und ja auch die Postkarten, zur richtigen Stunde mit dem richtigen Guide.",
        "Die Stadt funktioniert als 4–6-Nächte-Basis, leicht kombinierbar mit Ilha Grande (2h Transfer, autofrei, Wasserfall-Wege), Paraty (Kolonialpflaster, Schoner in der Inselbucht) oder Búzios (Riviera-Strände, 2,5h Fahrt). Längere Reisen ergänzen Iguazú, Salvador oder Amazonas.",
        "Rio ist zudem eine der besten Foodie-Städte Lateinamerikas — vom Tasting-Menü im Lasai bis zum Boteco in Botafogo. Wir reservieren, was reserviert werden muss.",
      ],
      whatToDo: {
        heading: "Was Sie in Rio tun können",
        items: [
          { title: "Christus, Zuckerhut & Klassiker — mit echtem Guide", text: "Richtige Zeit buchen (Corcovado früh, Zuckerhut zum Sonnenuntergang), Schlangen meiden, Geologie, Geschichte und Carioca-Geschichten hören, die niemand erzählt." },
          { title: "Santa Teresa & Lapa", text: "Der bohemische Hügel: koloniale Villen, Künstlerateliers, Selarón-Stufen, Live-Samba in Lapa. Hier übernachten oder einen ganzen Nachmittag/Abend verbringen." },
          { title: "Tijuca-Nationalpark", text: "Der größte städtische Regenwald der Welt. Geführte Wanderungen zu Pedra Bonita, Pedra da Gávea (fortgeschritten), Vista Chinesa oder privater Jeep mit Wasserfällen und Nasenbären." },
          { title: "Angra dos Reis & Ilha Grande", text: "Tagesboot oder 2–3-Nächte-Verlängerung: 365 Inseln, durchscheinendes Wasser, autofrei auf Ilha Grande. Der beste Strandtag in Rio-Nähe." },
          { title: "Botafogo, Urca & Leblon bei Nacht", text: "Wo Cariocas wirklich essen und trinken: Kneipen in Botafogo, Caipirinha-Sonnenuntergang an der Bar Urca, Meeresfrüchte in Leblon." },
        ],
      },
      bestTime: { heading: "Beste Reisezeit für Rio", text: "Mai–Oktober trocken und sonnig mit kühleren Abenden (perfekt für Wanderungen und Stadttage). Dezember–Februar Hochsaison, heiß und lebendig (Réveillon an Copacabana, Karneval). März–April warmes Meer, weniger Andrang und niedrigere Preise — ein unterschätztes Fenster. Meiden Sie extreme Hitzewellen Jan–Feb bei Hitzeempfindlichkeit." },
      howToGet: { heading: "Anreise", text: "Flug nach Rio / Galeão (GIG) international oder Santos Dumont (SDU) für Inland. Ab São Paulo 1h Flug oder 6h Fahrt. Wir organisieren Privattransfer, Fahrer in der Stadt und alle Folgeetappen (Iguazú, Paraty, Salvador)." },
      whereToStay: { heading: "Wo übernachten", text: "Ipanema für Strand + gehobene Nachbarschaft. Leblon für ruhigen Luxus. Copacabana für klassische Hotels (Copacabana Palace, Fairmont). Santa Teresa für Boutique/Charakter (Santa Teresa Hotel MGallery). Urca für lokales Wohngefühl. Wir passen Viertel an Reisestil an." },
      faqs: {
        heading: "Rio de Janeiro — häufige Fragen",
        items: [
          { q: "Wie viele Tage brauche ich in Rio?", a: "Minimum 4 Nächte für die Klassiker ohne Hetze. 5–6 Nächte für Tijuca-Wanderungen, Bootstag und langsamere Carioca-Zeit. Länger bei Ilha Grande oder Paraty." },
          { q: "Ist Rio sicher?", a: "Mit lokaler Führung ja. Wir wählen sichere Viertel (Ipanema, Leblon, Botafogo, Urca), private Fahrer oder autorisierte Taxis, meiden bestimmte Zonen nachts und briefen zu Straßensicherheit. 24/7-Support jederzeit erreichbar." },
          { q: "Ist eine Favela-Tour ethisch?", a: "Nur mit gemeindebasierten Anbietern, die lokal einstellen und bezahlen, und nur in Favelas, die Besucher willkommen heißen (Vidigal, Santa Marta). Wir buchen ausschließlich mit gemeindegeprüften Guides — kein 'Armuts-Tourismus' im Vorbeifahren." },
          { q: "Was ist mit dem Karneval?", a: "Der Karneval (Feb/Mär) ist spektakulär, erfordert aber Buchung 6–9 Monate im Voraus: Sambadrom-Tickets, Copacabana-Hotels, geplante Straßen-Blocos. Frühzeitig anfragen — wir organisieren das ganze Paket." },
          { q: "Kombination Rio mit Iguazú, Amazonas oder Bahia?", a: "Ja, alle üblich: Rio + Iguazú (2h Flug), Rio + Bahia (2,5h nach Salvador), Rio + Amazonas (4h nach Manaus). Wir gestalten die Gesamtreise." },
        ],
      },
      finalCta: { heading: "Bereit, Rio richtig zu sehen?", subheading: "Erzählen Sie uns Ihre Daten. Wir melden uns in 48 Stunden mit einem Vorschlag.", button: "Auf WhatsApp starten" },
      back: "Zurück zur Brasilien-Übersicht",
    },
  },

  bonito: {
    en: {
      metaTitle: "Bonito Brazil — Crystal Rivers & Blue Caves",
      metaDescription: "Design your Bonito trip: float snorkelling in transparent rivers, the Blue Lake grotto, Buraco das Araras, waterfalls. Boutique lodges, private guides.",
      keywords: "bonito brazil tour, snorkelling rio da prata, gruta lago azul, buraco das araras, bonito mato grosso do sul, bonito nascente azul",
      hero: { eyebrow: "Mato Grosso do Sul, Central Brazil", title: "The clearest rivers on the planet.", subtitle: "Snorkel float in transparent water among fish, dive into blue-water caves, discover Brazil's freshwater paradise.", cta: "Design my Bonito trip" },
      longIntro: [
        "Bonito is a small town in Mato Grosso do Sul with one geological superpower: the limestone that filters its rivers into complete transparency. You put on a snorkel and mask, drift downstream and swim eye-to-eye with dourados and piraputangas in aquarium-clear water.",
        "The other draw is the caves — the Gruta do Lago Azul with its cathedral-sized blue chamber, the Anhumas Abyss where you abseil 72m into a submerged cave, and the Buraco das Araras sinkhole where hundreds of hyacinth macaws nest on the cliff walls.",
        "Bonito pairs perfectly with the South Pantanal (3h drive to Aquidauana) for a wildlife + freshwater week. Every activity is limited by daily quotas — book far ahead.",
      ],
      whatToDo: {
        heading: "What to do in Bonito",
        items: [
          { title: "Float snorkelling — Rio da Prata & Rio Sucuri", text: "The signature Bonito experience: wetsuit, mask and 2h drift downstream in transparent water surrounded by fish. Rio da Prata is deeper and richer; Rio Sucuri is gentler and even clearer." },
          { title: "Gruta do Lago Azul", text: "A limestone cave with a 90m-wide blue-water lake. Sunlight hits in September–October creating the famous electric-blue effect. Book in advance." },
          { title: "Buraco das Araras", text: "A 100m-deep sinkhole ringed by red cliffs where hyacinth macaws nest. A short boardwalk trail; go at sunrise or late afternoon for the birds returning." },
          { title: "Abismo Anhumas (adventurous)", text: "Abseil 72m into a hidden cave lake for a snorkel or dive among cathedral stalactites. Full-day, permit-limited, extraordinary." },
          { title: "Waterfalls at Estância Mimosa and Boca da Onça", text: "Half-day guided trails through the Serra da Bodoquena with waterfall swimming pools. Boca da Onça has the region's tallest waterfall (156m) and optional rappel." },
        ],
      },
      bestTime: { heading: "Best time to visit Bonito", text: "April to October is the dry season: rivers stay crystal-clear, easier road access, comfortable temperatures. September–October is peak for the Blue Lake cave (sunlight effect). November–March is rainy: rivers can turn cloudy after storms, some activities close. Book activities before you book flights — daily quotas fill months ahead in July, September and holidays." },
      howToGet: { heading: "How to get there", text: "Fly to Bonito (BYO) via Campo Grande (CGR) — 45-min shuttle flight or 3.5h private transfer. Some direct flights from São Paulo in high season. From the South Pantanal ranches, 3–4h drive." },
      whereToStay: { heading: "Where to stay", text: "In town: Wetiga Hotel, Zagaia Eco Resort. On the way to Rio da Prata: Fazenda San Francisco, Estância Mimosa. For upscale immersion: Nascente Azul Boutique. Combine with Refúgio Caiman or Barranco Alto for a Pantanal + Bonito week." },
      faqs: {
        heading: "Bonito — frequently asked",
        items: [
          { q: "How many days do I need in Bonito?", a: "3 nights is the sweet spot: 1 day for the Blue Lake + Buraco das Araras, 1 for float snorkelling, 1 for waterfalls or the Abyss. Add 1–2 more if you're a scuba diver or want a slower pace." },
          { q: "Do I need to know how to swim?", a: "For float snorkelling, basic swimming is enough (life vest provided). For the Anhumas Abyss, comfort in water and abseiling is required. We match activities to your comfort." },
          { q: "Is Bonito good with kids?", a: "Yes, family-friendly. Kids from 5+ manage Rio Sucuri float; from 7+ Rio da Prata. Waterfalls and the Blue Lake are gentle. Buraco das Araras is a short flat boardwalk." },
          { q: "Can I combine Bonito with Pantanal?", a: "Yes — the classic Central Brazil week. Fly to Campo Grande, 3h drive to South Pantanal for 3 nights, 3h drive to Bonito for 3 nights, fly back from Bonito (or reverse). We handle logistics." },
          { q: "Why the strict activity quotas?", a: "Every operator is capped daily to protect the ecosystems. That's why booking 2–3 months ahead (6+ in Jul/Sep) is essential — we lock everything in as one package." },
        ],
      },
      finalCta: { heading: "Ready to swim the clearest rivers in Brazil?", subheading: "Tell us your dates. We come back in 48 hours.", button: "Start on WhatsApp" },
      back: "Back to Brazil overview",
    },
    es: {
      metaTitle: "Bonito Brasil — Ríos Cristalinos y Cuevas Azules",
      metaDescription: "Diseña tu viaje a Bonito: flotación con snorkel en ríos transparentes, Gruta del Lago Azul, Buraco das Araras, cascadas. Pousadas boutique.",
      keywords: "tour bonito brasil, snorkel rio da prata, gruta lago azul, buraco das araras, bonito mato grosso do sul",
      hero: { eyebrow: "Mato Grosso do Sul, Brasil Central", title: "Los ríos más claros del planeta.", subtitle: "Flotación con snorkel en agua transparente entre peces, cuevas de agua azul, el paraíso de agua dulce de Brasil.", cta: "Diseñar mi viaje a Bonito" },
      longIntro: [
        "Bonito es un pueblito de Mato Grosso do Sul con un superpoder geológico: la piedra caliza filtra sus ríos hasta la transparencia total. Te pones máscara y snorkel, te dejas llevar corriente abajo y nadas ojo a ojo con dourados y piraputangas en agua clara como un acuario.",
        "El otro imán son las cuevas — la Gruta del Lago Azul con su cámara azul del tamaño de una catedral, el Abismo Anhumas donde rapelas 72m hasta una cueva sumergida, y el Buraco das Araras donde cientos de guacamayos jacintos anidan en las paredes del sumidero.",
        "Bonito combina perfecto con el Pantanal Sur (3h a Aquidauana) para una semana de fauna + agua dulce. Todas las actividades tienen cupos diarios — reserva con mucha antelación.",
      ],
      whatToDo: {
        heading: "Qué hacer en Bonito",
        items: [
          { title: "Flotación con snorkel — Rio da Prata y Rio Sucuri", text: "La experiencia clásica de Bonito: traje de neopreno, máscara y 2h flotando corriente abajo en agua transparente rodeado de peces. Rio da Prata más profundo y rico; Rio Sucuri más suave y aún más claro." },
          { title: "Gruta del Lago Azul", text: "Cueva de caliza con lago de agua azul de 90m. El sol la atraviesa en septiembre–octubre creando el famoso efecto azul eléctrico. Reserva con antelación." },
          { title: "Buraco das Araras", text: "Sumidero de 100m de profundidad rodeado de acantilados rojos donde anidan guacamayos jacintos. Sendero corto en pasarela; ve al amanecer o final de la tarde para verlos regresar." },
          { title: "Abismo Anhumas (aventurero)", text: "Rapel de 72m hasta un lago subterráneo escondido para hacer snorkel o buceo entre estalactitas de catedral. Día completo, cupo limitado, extraordinario." },
          { title: "Cascadas en Estância Mimosa y Boca da Onça", text: "Senderos guiados de medio día por la Serra da Bodoquena con piscinas de cascadas. Boca da Onça tiene la cascada más alta de la región (156m) y rappel opcional." },
        ],
      },
      bestTime: { heading: "Mejor época para Bonito", text: "Abril a octubre es la estación seca: los ríos se mantienen cristalinos, mejor acceso, temperaturas cómodas. Septiembre–octubre es el pico para la cueva del Lago Azul (efecto de luz solar). Noviembre–marzo lluvioso: los ríos pueden enturbiar tras tormentas, algunas actividades cierran. Reserva actividades antes que vuelos — los cupos se llenan meses antes en julio, septiembre y feriados." },
      howToGet: { heading: "Cómo llegar", text: "Vuelo a Bonito (BYO) vía Campo Grande (CGR) — vuelo shuttle de 45 min o traslado privado de 3,5h. Algunos vuelos directos desde São Paulo en temporada. Desde las fazendas del Pantanal Sur, 3–4h en coche." },
      whereToStay: { heading: "Dónde alojarse", text: "En el pueblo: Wetiga Hotel, Zagaia Eco Resort. Camino al Rio da Prata: Fazenda San Francisco, Estância Mimosa. Para inmersión premium: Nascente Azul Boutique. Combina con Refúgio Caiman o Barranco Alto para una semana Pantanal + Bonito." },
      faqs: {
        heading: "Bonito — preguntas frecuentes",
        items: [
          { q: "¿Cuántos días necesito en Bonito?", a: "3 noches es el punto dulce: 1 día para Lago Azul + Buraco das Araras, 1 para flotación, 1 para cascadas o Abismo. Añade 1–2 más si buceas o quieres ritmo pausado." },
          { q: "¿Necesito saber nadar?", a: "Para flotación con snorkel basta saber nadar básico (chaleco incluido). El Abismo Anhumas requiere comodidad en agua y rapel. Adaptamos actividades a tu comodidad." },
          { q: "¿Bonito con niños?", a: "Sí, familiar. Niños desde 5 años hacen el Rio Sucuri; desde 7 el Rio da Prata. Cascadas y Lago Azul son suaves. Buraco das Araras es pasarela corta y plana." },
          { q: "¿Puedo combinar Bonito con Pantanal?", a: "Sí — la semana clásica del Brasil central. Vuelo a Campo Grande, 3h al Pantanal Sur por 3 noches, 3h a Bonito por 3 noches, regreso desde Bonito (o al revés). Gestionamos logística." },
          { q: "¿Por qué los cupos estrictos?", a: "Cada operador tiene tope diario para proteger los ecosistemas. Por eso reservar con 2–3 meses (6+ en jul/sep) es esencial — cerramos todo como paquete único." },
        ],
      },
      finalCta: { heading: "¿Listo para nadar en los ríos más claros de Brasil?", subheading: "Cuéntanos tus fechas. Volvemos en 48 horas.", button: "Empezar por WhatsApp" },
      back: "Volver al resumen de Brasil",
    },
    it: {
      metaTitle: "Bonito Brasile — Fiumi Cristallini e Grotte Azzurre",
      metaDescription: "Progetta il tuo viaggio a Bonito: snorkeling flottante in fiumi trasparenti, Grotta del Lago Azzurro, Buraco das Araras, cascate. Lodge boutique.",
      keywords: "tour bonito brasile, snorkel rio da prata, gruta lago azul, buraco das araras, bonito mato grosso do sul",
      hero: { eyebrow: "Mato Grosso do Sul, Brasile Centrale", title: "I fiumi più limpidi del pianeta.", subtitle: "Snorkeling flottante in acqua trasparente tra i pesci, grotte di acqua azzurra, il paradiso di acqua dolce del Brasile.", cta: "Progetta il mio viaggio a Bonito" },
      longIntro: [
        "Bonito è una cittadina di Mato Grosso do Sul con un superpotere geologico: il calcare filtra i suoi fiumi fino alla trasparenza totale. Metti maschera e snorkel, ti lasci trasportare a valle e nuoti occhi negli occhi con dourados e piraputangas in acqua chiara come un acquario.",
        "L'altra attrazione sono le grotte — la Grotta del Lago Azzurro con la sua camera azzurra grande come una cattedrale, l'Abismo Anhumas dove ti caliamo 72m in una grotta sommersa, e il Buraco das Araras dove centinaia di are giacinto nidificano sulle pareti del pozzo.",
        "Bonito si abbina perfettamente al Pantanal Sud (3h ad Aquidauana) per una settimana fauna + acqua dolce. Ogni attività ha quote giornaliere — prenota con largo anticipo.",
      ],
      whatToDo: {
        heading: "Cosa fare a Bonito",
        items: [
          { title: "Snorkeling flottante — Rio da Prata e Rio Sucuri", text: "L'esperienza classica di Bonito: muta, maschera e 2h di deriva a valle in acqua trasparente circondato dai pesci. Rio da Prata più profondo e ricco; Rio Sucuri più dolce e ancora più limpido." },
          { title: "Grotta del Lago Azzurro", text: "Grotta calcarea con lago azzurro di 90m. Il sole la attraversa in settembre–ottobre creando il famoso effetto azzurro elettrico. Prenota in anticipo." },
          { title: "Buraco das Araras", text: "Pozzo naturale profondo 100m contornato da falesie rosse dove nidificano le are giacinto. Sentiero breve su passerella; vai all'alba o tardo pomeriggio per vederle rientrare." },
          { title: "Abismo Anhumas (avventuroso)", text: "Discesa in corda doppia di 72m in un lago sotterraneo nascosto per snorkeling o immersioni tra stalattiti da cattedrale. Giornata intera, quota limitata, straordinario." },
          { title: "Cascate a Estância Mimosa e Boca da Onça", text: "Sentieri guidati di mezza giornata nella Serra da Bodoquena con piscine di cascate. Boca da Onça ha la cascata più alta della regione (156m) e rappel opzionale." },
        ],
      },
      bestTime: { heading: "Migliore periodo per Bonito", text: "Aprile–ottobre stagione secca: fiumi cristallini, accesso più facile, temperature confortevoli. Settembre–ottobre picco per la Grotta del Lago Azzurro (effetto luce solare). Novembre–marzo piovoso: i fiumi possono intorbidirsi dopo temporali, alcune attività chiuse. Prenota le attività prima dei voli — quote esaurite mesi prima a luglio, settembre e festività." },
      howToGet: { heading: "Come arrivare", text: "Volo per Bonito (BYO) via Campo Grande (CGR) — volo shuttle di 45 min o transfer privato 3,5h. Alcuni voli diretti da São Paulo in alta stagione. Dalle fazendas del Pantanal Sud, 3–4h in auto." },
      whereToStay: { heading: "Dove alloggiare", text: "In città: Wetiga Hotel, Zagaia Eco Resort. Verso il Rio da Prata: Fazenda San Francisco, Estância Mimosa. Per immersione premium: Nascente Azul Boutique. Combina con Refúgio Caiman o Barranco Alto per una settimana Pantanal + Bonito." },
      faqs: {
        heading: "Bonito — domande frequenti",
        items: [
          { q: "Quanti giorni servono a Bonito?", a: "3 notti è il punto ideale: 1 giorno per Lago Azzurro + Buraco das Araras, 1 per snorkeling, 1 per cascate o Abismo. Aggiungi 1–2 se fai sub o vuoi ritmo lento." },
          { q: "Devo saper nuotare?", a: "Per lo snorkeling flottante basta nuoto base (giubbotto fornito). L'Abismo Anhumas richiede comfort in acqua e rappel. Adattiamo le attività al tuo comfort." },
          { q: "Bonito con bambini?", a: "Sì, adatto alle famiglie. Bambini dai 5 anni fanno il Rio Sucuri; dai 7 il Rio da Prata. Cascate e Lago Azzurro sono dolci. Buraco das Araras è passerella breve e piana." },
          { q: "Posso combinare Bonito con il Pantanal?", a: "Sì — la settimana classica del Brasile centrale. Volo a Campo Grande, 3h al Pantanal Sud per 3 notti, 3h a Bonito per 3 notti, rientro da Bonito (o viceversa). Gestiamo la logistica." },
          { q: "Perché le quote severe?", a: "Ogni operatore ha un tetto giornaliero per proteggere gli ecosistemi. Per questo prenotare 2–3 mesi prima (6+ a lug/set) è essenziale — chiudiamo tutto come pacchetto unico." },
        ],
      },
      finalCta: { heading: "Pronto a nuotare nei fiumi più limpidi del Brasile?", subheading: "Raccontaci le tue date. Torniamo in 48 ore.", button: "Inizia su WhatsApp" },
      back: "Torna alla panoramica Brasile",
    },
    de: {
      metaTitle: "Bonito Brasilien — Kristallklare Flüsse & Blaue Höhlen",
      metaDescription: "Planen Sie Ihre Bonito-Reise: Schnorchel-Drift in transparenten Flüssen, Blaue-See-Grotte, Buraco das Araras, Wasserfälle. Boutique-Lodges.",
      keywords: "bonito brasilien reise, schnorcheln rio da prata, blaue see grotte, buraco das araras, bonito mato grosso do sul",
      hero: { eyebrow: "Mato Grosso do Sul, Zentralbrasilien", title: "Die klarsten Flüsse des Planeten.", subtitle: "Schnorchel-Drift in transparentem Wasser zwischen Fischen, Höhlen mit blauem Wasser, Brasiliens Süßwasser-Paradies.", cta: "Meine Bonito-Reise planen" },
      longIntro: [
        "Bonito ist eine Kleinstadt in Mato Grosso do Sul mit einer geologischen Superkraft: der Kalkstein filtert die Flüsse bis zur völligen Transparenz. Sie ziehen Schnorchel und Maske an, treiben flussabwärts und schwimmen Auge in Auge mit Dourados und Piraputangas in aquariumklarem Wasser.",
        "Die zweite Attraktion sind die Höhlen — die Gruta do Lago Azul mit ihrer kathedralengroßen blauen Kammer, der Abismo Anhumas, wo Sie 72m in eine überflutete Höhle abseilen, und das Buraco das Araras, wo hunderte Hyazinth-Aras an den Felswänden nisten.",
        "Bonito lässt sich perfekt mit dem Süd-Pantanal (3h Fahrt nach Aquidauana) zu einer Wildtier-und-Süßwasser-Woche kombinieren. Jede Aktivität hat Tagesquoten — früh buchen.",
      ],
      whatToDo: {
        heading: "Was Sie in Bonito tun können",
        items: [
          { title: "Schnorchel-Drift — Rio da Prata & Rio Sucuri", text: "Das Bonito-Signaturerlebnis: Neopren, Maske und 2h Treiben flussabwärts in transparentem Wasser umgeben von Fischen. Rio da Prata tiefer und reicher; Rio Sucuri sanfter und noch klarer." },
          { title: "Gruta do Lago Azul", text: "Kalksteinhöhle mit 90m breitem blauem Wassersee. Im September–Oktober trifft Sonnenlicht ein und erzeugt den elektrisch-blauen Effekt. Vorbuchung nötig." },
          { title: "Buraco das Araras", text: "100m-Erdfall umringt von roten Klippen, wo Hyazinth-Aras nisten. Kurzer Bohlenweg; bei Sonnenaufgang oder späten Nachmittag für die zurückkehrenden Vögel." },
          { title: "Abismo Anhumas (abenteuerlich)", text: "72m Abseilen in einen verborgenen Höhlensee zum Schnorcheln oder Tauchen zwischen Kathedral-Stalaktiten. Ganztags, quotenbegrenzt, außergewöhnlich." },
          { title: "Wasserfälle Estância Mimosa und Boca da Onça", text: "Geführte Halbtageswege durch die Serra da Bodoquena mit Wasserfall-Schwimmbecken. Boca da Onça hat den höchsten Wasserfall der Region (156m) und optionales Rappel." },
        ],
      },
      bestTime: { heading: "Beste Reisezeit für Bonito", text: "April–Oktober Trockenzeit: Flüsse bleiben glasklar, leichterer Zugang, angenehme Temperaturen. September–Oktober Peak für die Blaue-See-Grotte (Lichteffekt). November–März regnerisch: Flüsse können nach Stürmen trüb werden, manche Aktivitäten geschlossen. Aktivitäten vor Flügen buchen — Quoten Monate vorher ausgebucht im Juli, September und Feiertagen." },
      howToGet: { heading: "Anreise", text: "Flug nach Bonito (BYO) via Campo Grande (CGR) — 45-min Shuttleflug oder 3,5h Privattransfer. Einige Direktflüge ab São Paulo in Hochsaison. Von den Süd-Pantanal-Fazendas 3–4h Fahrt." },
      whereToStay: { heading: "Wo übernachten", text: "In der Stadt: Wetiga Hotel, Zagaia Eco Resort. Richtung Rio da Prata: Fazenda San Francisco, Estância Mimosa. Für Premium-Immersion: Nascente Azul Boutique. Kombinieren mit Refúgio Caiman oder Barranco Alto für Pantanal + Bonito-Woche." },
      faqs: {
        heading: "Bonito — häufige Fragen",
        items: [
          { q: "Wie viele Tage brauche ich in Bonito?", a: "3 Nächte ist der Sweetspot: 1 Tag Blauer See + Buraco das Araras, 1 Schnorcheln, 1 Wasserfälle oder Abismo. 1–2 mehr für Taucher oder langsameres Tempo." },
          { q: "Muss ich schwimmen können?", a: "Für Schnorchel-Drift reicht Basisschwimmen (Weste gestellt). Der Abismo Anhumas erfordert Wasserkomfort und Abseilen. Wir passen Aktivitäten an." },
          { q: "Bonito mit Kindern?", a: "Ja, familienfreundlich. Kinder ab 5 machen Rio Sucuri; ab 7 Rio da Prata. Wasserfälle und Blauer See sind sanft. Buraco das Araras ist kurzer flacher Bohlenweg." },
          { q: "Kombination Bonito mit Pantanal?", a: "Ja — die klassische Zentralbrasilien-Woche. Flug Campo Grande, 3h Süd-Pantanal 3 Nächte, 3h Bonito 3 Nächte, Rückflug Bonito (oder umgekehrt). Wir organisieren." },
          { q: "Warum die strengen Quoten?", a: "Jeder Anbieter hat Tagesobergrenzen zum Schutz der Ökosysteme. Deshalb ist Buchung 2–3 Monate vorher (6+ Jul/Sep) essenziell — wir schnüren alles als Paket." },
        ],
      },
      finalCta: { heading: "Bereit für die klarsten Flüsse Brasiliens?", subheading: "Erzählen Sie uns Ihre Daten. Wir melden uns in 48 Stunden.", button: "Auf WhatsApp starten" },
      back: "Zurück zur Brasilien-Übersicht",
    },
  },

  iguazu: {
    en: {
      metaTitle: "Iguazu Falls from Brazil — Tailor-Made Tours",
      metaDescription: "Plan your Iguazu Falls trip from the Brazilian side: panoramic views, boat under the falls, helicopter, Bird Park, plus the Argentine side.",
      keywords: "iguazu falls brazil tour, foz do iguacu, cataratas iguazu, macuco safari boat, bird park iguazu, iguazu argentina brazil",
      hero: { eyebrow: "Foz do Iguaçu, Southern Brazil", title: "275 waterfalls, two countries, one week.", subtitle: "The full Iguazu — Brazilian panorama, Argentine devil's throat, boat under the falls, plus the Itaipu dam and Bird Park.", cta: "Design my Iguazu trip" },
      longIntro: [
        "Iguazu is not a single waterfall — it's 275 cascades spread across 2.7 km of jungle, straddling the Brazil–Argentina border. The Brazilian side gives you the panoramic view of the entire chain. The Argentine side puts you on top of the Devil's Throat with catwalks that seem to hover over the abyss. You need both — it's why we always design 2 nights minimum in Foz.",
        "Beyond the falls: the world-class Parque das Aves (a rescue-and-breeding sanctuary walking through toucans, macaws and harpy eagles), the Macuco Safari boat that races into the falls, sunset helicopter flights, and — for the curious — the Itaipu binational dam, one of the seven wonders of the modern world.",
        "Iguazu pairs perfectly with Rio (2h flight), São Paulo (2h flight), or as the natural stopover between Brazil and Buenos Aires.",
      ],
      whatToDo: {
        heading: "What to do at Iguazu",
        items: [
          { title: "Brazilian side — the panorama", text: "A 1.2 km boardwalk trail with sweeping views of the entire cascade, ending on a catwalk into the Garganta do Diabo. Half a day, best in morning light." },
          { title: "Argentine side — the Devil's Throat", text: "Full day: Upper Circuit, Lower Circuit and the train to the Garganta del Diablo catwalk where 14 falls thunder down 82m. Passport required for the border crossing." },
          { title: "Macuco Safari (boat under the falls)", text: "A speedboat that plunges you into the base of the falls. You get soaked — dry clothes required after. The most visceral way to feel the water." },
          { title: "Parque das Aves", text: "20 hectares of Atlantic Forest with walk-through aviaries for toucans, harpy eagles, hyacinth macaws and hummingbirds. All rescue birds, world-class conservation." },
          { title: "Helicopter flight over the falls", text: "10-minute scenic flight from the Brazilian side — the only way to grasp the full 2.7 km chain from above. Best late afternoon." },
        ],
      },
      bestTime: { heading: "Best time to visit Iguazu", text: "Iguazu is year-round. May–August: mild, dry, high water flow, fewer crowds. September–November: warm, occasional rain, spectacular flow. December–February: hot and humid, peak tourism. March–April: warm, less crowded, great water. Avoid catastrophic-flood periods (rare, but boats close) — we monitor and adjust." },
      howToGet: { heading: "How to get there", text: "Fly into Foz do Iguaçu (IGU) from São Paulo (2h), Rio (2h) or Buenos Aires (1.5h to AEP). We arrange transfer between your Brazilian hotel and both the Brazilian and Argentine park entrances, plus the border crossing." },
      whereToStay: { heading: "Where to stay", text: "Belmond Hotel das Cataratas — the only hotel inside the Brazilian park, magical sunrise access. Wish Foz do Iguaçu — full-service resort. Recanto Cataratas — mid-range with pool and shuttle. On the Argentine side: Awasi Iguazú (all-inclusive luxury) or Loi Suites Iguazú." },
      faqs: {
        heading: "Iguazu Falls — frequently asked",
        items: [
          { q: "How many days do I need at Iguazu?", a: "2 nights minimum: full day Brazilian side + Macuco, full day Argentine side, half day Bird Park or Itaipu. 3 nights if adding helicopter or a slower pace. Some travellers add a 4th night for Belmond immersion." },
          { q: "Brazilian side or Argentine side — which one?", a: "Both. Brazilian side = the wide panoramic view (½ day). Argentine side = the immersive Devil's Throat catwalk (full day). Missing either means missing half the falls." },
          { q: "Do I need a visa for the Argentine side?", a: "Most European and Latin American passports do not need a visa for the day trip. US and Canadian citizens should check current entry requirements. We advise on paperwork." },
          { q: "Is it worth the helicopter?", a: "For photographers and first-timers, absolutely. The aerial view reveals the horseshoe shape you can't see from ground level. 10 minutes; premium price but singular." },
          { q: "Can I combine Iguazu with Rio, Amazon or Buenos Aires?", a: "Yes — all natural: Rio + Iguazu (2h flight), Iguazu + Amazon (via São Paulo), Rio + Iguazu + Buenos Aires (classic Southern Cone). We design the full itinerary." },
        ],
      },
      finalCta: { heading: "Ready to see Iguazu from both sides?", subheading: "Tell us your dates. We come back in 48 hours.", button: "Start on WhatsApp" },
      back: "Back to Brazil overview",
    },
    es: {
      metaTitle: "Cataratas del Iguazú desde Brasil — Tours a Medida",
      metaDescription: "Planifica tu viaje a las Cataratas del Iguazú desde el lado brasileño: vistas panorámicas, barco bajo las cataratas, helicóptero, Parque das Aves, y el lado argentino.",
      keywords: "cataratas del iguazú tour brasil, foz do iguaçu, macuco safari, parque das aves, iguazú argentina brasil",
      hero: { eyebrow: "Foz do Iguaçu, Sur de Brasil", title: "275 cataratas, dos países, una semana.", subtitle: "El Iguazú completo — panorámica brasileña, Garganta del Diablo argentina, barco bajo las cataratas, más represa de Itaipú y Parque das Aves.", cta: "Diseñar mi viaje a Iguazú" },
      longIntro: [
        "Iguazú no es una sola cascada — son 275 caídas repartidas en 2,7 km de selva, en la frontera Brasil–Argentina. El lado brasileño te da la vista panorámica de toda la cadena. El lado argentino te pone encima de la Garganta del Diablo con pasarelas que parecen flotar sobre el abismo. Necesitas los dos — por eso siempre diseñamos mínimo 2 noches en Foz.",
        "Más allá de las cataratas: el Parque das Aves de nivel mundial (santuario de rescate y cría que se recorre entre tucanes, guacamayos y águilas arpías), el Macuco Safari que se mete en las cataratas en lancha, vuelos en helicóptero al atardecer y — para curiosos — la represa binacional de Itaipú, una de las siete maravillas del mundo moderno.",
        "Iguazú combina perfecto con Río (2h de vuelo), São Paulo (2h de vuelo) o como escala natural entre Brasil y Buenos Aires.",
      ],
      whatToDo: {
        heading: "Qué hacer en Iguazú",
        items: [
          { title: "Lado brasileño — la panorámica", text: "Sendero en pasarela de 1,2 km con vistas amplias de toda la cadena, terminando en pasarela dentro de la Garganta del Diablo. Medio día, mejor con luz de mañana." },
          { title: "Lado argentino — la Garganta del Diablo", text: "Día completo: Circuito Superior, Inferior y tren a la pasarela de la Garganta del Diablo donde 14 saltos truenan 82m. Pasaporte requerido para el cruce." },
          { title: "Macuco Safari (barco bajo las cataratas)", text: "Lancha rápida que te mete en la base de las cataratas. Te empapas — se requiere ropa seca. La forma más visceral de sentir el agua." },
          { title: "Parque das Aves", text: "20 hectáreas de Mata Atlántica con aviarios de tránsito para tucanes, arpías, guacamayos jacintos y colibríes. Todas aves de rescate, conservación de nivel mundial." },
          { title: "Vuelo en helicóptero sobre las cataratas", text: "Vuelo escénico de 10 min desde el lado brasileño — la única forma de captar los 2,7 km desde arriba. Mejor al final de la tarde." },
        ],
      },
      bestTime: { heading: "Mejor época para Iguazú", text: "Iguazú es todo el año. Mayo–agosto: templado, seco, caudal alto, menos gente. Septiembre–noviembre: cálido, lluvia ocasional, caudal espectacular. Diciembre–febrero: caluroso y húmedo, pico turístico. Marzo–abril: cálido, menos gente, buen agua. Evita crecidas catastróficas (raras, pero cierran barcos) — monitoreamos y ajustamos." },
      howToGet: { heading: "Cómo llegar", text: "Vuelo a Foz do Iguaçu (IGU) desde São Paulo (2h), Río (2h) o Buenos Aires (1,5h a AEP). Organizamos traslado entre tu hotel brasileño y las entradas de los parques brasileño y argentino, más el cruce fronterizo." },
      whereToStay: { heading: "Dónde alojarse", text: "Belmond Hotel das Cataratas — el único hotel dentro del parque brasileño, acceso mágico al amanecer. Wish Foz do Iguaçu — resort completo. Recanto Cataratas — gama media con piscina y shuttle. Lado argentino: Awasi Iguazú (lujo all-inclusive) o Loi Suites Iguazú." },
      faqs: {
        heading: "Cataratas del Iguazú — preguntas frecuentes",
        items: [
          { q: "¿Cuántos días necesito en Iguazú?", a: "2 noches mínimo: día completo lado brasileño + Macuco, día completo lado argentino, medio día Parque das Aves o Itaipú. 3 noches si añades helicóptero o ritmo más lento. Algunos añaden 4ª noche por inmersión en el Belmond." },
          { q: "¿Lado brasileño o argentino — cuál?", a: "Los dos. Brasileño = vista panorámica amplia (½ día). Argentino = pasarela inmersiva de la Garganta del Diablo (día completo). Perderse uno es perderse la mitad de las cataratas." },
          { q: "¿Necesito visa para el lado argentino?", a: "La mayoría de pasaportes europeos y latinoamericanos no necesitan visa para el paseo diario. Ciudadanos EE.UU. y Canadá deben verificar requisitos actuales. Asesoramos con el papeleo." },
          { q: "¿Vale la pena el helicóptero?", a: "Para fotógrafos y primera vez, sin duda. La vista aérea revela la forma de herradura que no se ve desde tierra. 10 minutos; precio premium pero único." },
          { q: "¿Puedo combinar Iguazú con Río, Amazonía o Buenos Aires?", a: "Sí — todos naturales: Río + Iguazú (2h de vuelo), Iguazú + Amazonía (vía São Paulo), Río + Iguazú + Buenos Aires (Cono Sur clásico). Diseñamos el itinerario completo." },
        ],
      },
      finalCta: { heading: "¿Listo para ver Iguazú desde los dos lados?", subheading: "Cuéntanos tus fechas. Volvemos en 48 horas.", button: "Empezar por WhatsApp" },
      back: "Volver al resumen de Brasil",
    },
    it: {
      metaTitle: "Cascate di Iguazú dal Brasile — Tour su Misura",
      metaDescription: "Progetta il tuo viaggio alle Cascate di Iguazú dal lato brasiliano: vista panoramica, barca sotto le cascate, elicottero, Parco degli Uccelli, e lato argentino.",
      keywords: "cascate iguazú tour brasile, foz do iguaçu, macuco safari, parque das aves, iguazú argentina brasile",
      hero: { eyebrow: "Foz do Iguaçu, Brasile del Sud", title: "275 cascate, due paesi, una settimana.", subtitle: "L'Iguazú completo — panoramica brasiliana, Gola del Diavolo argentina, barca sotto le cascate, più diga di Itaipú e Parco degli Uccelli.", cta: "Progetta il mio viaggio a Iguazú" },
      longIntro: [
        "Iguazú non è una singola cascata — sono 275 cascate distribuite su 2,7 km di foresta, al confine Brasile–Argentina. Il lato brasiliano offre la vista panoramica dell'intera catena. Il lato argentino ti mette sopra la Gola del Diavolo con passerelle che sembrano sospese sull'abisso. Servono entrambi — per questo progettiamo sempre minimo 2 notti a Foz.",
        "Oltre alle cascate: il Parque das Aves di livello mondiale (santuario di salvataggio e riproduzione da percorrere tra tucani, are e aquile arpia), il Macuco Safari che si tuffa nelle cascate in barca, voli in elicottero al tramonto e — per i curiosi — la diga binazionale di Itaipú, una delle sette meraviglie del mondo moderno.",
        "Iguazú si abbina perfettamente a Rio (2h di volo), São Paulo (2h) o come tappa naturale tra Brasile e Buenos Aires.",
      ],
      whatToDo: {
        heading: "Cosa fare a Iguazú",
        items: [
          { title: "Lato brasiliano — la panoramica", text: "Sentiero su passerella di 1,2 km con vista ampia dell'intera catena, che termina in passerella dentro la Garganta do Diabo. Mezza giornata, meglio al mattino." },
          { title: "Lato argentino — la Gola del Diavolo", text: "Giornata intera: Circuito Superiore, Inferiore e trenino alla passerella della Garganta del Diablo dove 14 cascate tuonano per 82m. Passaporto richiesto per il confine." },
          { title: "Macuco Safari (barca sotto le cascate)", text: "Motoscafo che ti porta alla base delle cascate. Ti bagni completamente — cambio obbligatorio. Il modo più viscerale di sentire l'acqua." },
          { title: "Parque das Aves", text: "20 ettari di Mata Atlantica con voliere attraversabili per tucani, aquile arpia, are giacinto e colibrì. Tutti uccelli salvati, conservazione di livello mondiale." },
          { title: "Volo in elicottero sulle cascate", text: "Volo panoramico di 10 min dal lato brasiliano — l'unico modo di cogliere i 2,7 km dall'alto. Meglio a fine pomeriggio." },
        ],
      },
      bestTime: { heading: "Migliore periodo per Iguazú", text: "Iguazú tutto l'anno. Maggio–agosto: mite, secco, portata alta, meno gente. Settembre–novembre: caldo, pioggia occasionale, portata spettacolare. Dicembre–febbraio: caldo e umido, picco turistico. Marzo–aprile: caldo, meno gente, buona acqua. Evita piene catastrofiche (rare, ma chiudono le barche) — monitoriamo e adattiamo." },
      howToGet: { heading: "Come arrivare", text: "Volo per Foz do Iguaçu (IGU) da São Paulo (2h), Rio (2h) o Buenos Aires (1,5h ad AEP). Organizziamo transfer tra il tuo hotel brasiliano e gli ingressi dei parchi brasiliano e argentino, più il valico di confine." },
      whereToStay: { heading: "Dove alloggiare", text: "Belmond Hotel das Cataratas — unico hotel dentro il parco brasiliano, accesso magico all'alba. Wish Foz do Iguaçu — resort completo. Recanto Cataratas — fascia media con piscina e navetta. Lato argentino: Awasi Iguazú (lusso all-inclusive) o Loi Suites Iguazú." },
      faqs: {
        heading: "Cascate di Iguazú — domande frequenti",
        items: [
          { q: "Quanti giorni servono a Iguazú?", a: "2 notti minimo: giornata intera lato brasiliano + Macuco, giornata intera lato argentino, mezza giornata Parco degli Uccelli o Itaipú. 3 notti se aggiungi elicottero o ritmo più lento. Alcuni aggiungono 4ª notte per immersione al Belmond." },
          { q: "Lato brasiliano o argentino — quale?", a: "Entrambi. Brasiliano = vista panoramica ampia (½ giorno). Argentino = passerella immersiva della Gola del Diavolo (giornata intera). Perderne uno significa perdere metà delle cascate." },
          { q: "Serve il visto per il lato argentino?", a: "La maggior parte dei passaporti europei e latinoamericani non necessita di visto per la gita giornaliera. Cittadini USA e Canada devono verificare i requisiti attuali. Consigliamo sulla documentazione." },
          { q: "Vale l'elicottero?", a: "Per fotografi e prima volta, assolutamente. La vista aerea rivela la forma a ferro di cavallo invisibile da terra. 10 minuti; prezzo premium ma unico." },
          { q: "Posso combinare Iguazú con Rio, Amazzonia o Buenos Aires?", a: "Sì — tutte naturali: Rio + Iguazú (2h volo), Iguazú + Amazzonia (via São Paulo), Rio + Iguazú + Buenos Aires (Cono Sud classico). Progettiamo tutto." },
        ],
      },
      finalCta: { heading: "Pronto a vedere Iguazú da entrambi i lati?", subheading: "Raccontaci le tue date. Torniamo in 48 ore.", button: "Inizia su WhatsApp" },
      back: "Torna alla panoramica Brasile",
    },
    de: {
      metaTitle: "Iguazú-Wasserfälle ab Brasilien — Maßgeschneiderte Touren",
      metaDescription: "Planen Sie Ihre Iguazú-Reise von der brasilianischen Seite: Panoramablick, Boot unter die Fälle, Helikopter, Vogelpark, plus argentinische Seite.",
      keywords: "iguazú wasserfälle brasilien tour, foz do iguaçu, macuco safari, parque das aves, iguazú argentinien brasilien",
      hero: { eyebrow: "Foz do Iguaçu, Süd-Brasilien", title: "275 Wasserfälle, zwei Länder, eine Woche.", subtitle: "Das komplette Iguazú — brasilianische Panorama, argentinischer Teufelsschlund, Boot unter den Fällen, plus Itaipú-Staudamm und Vogelpark.", cta: "Meine Iguazú-Reise planen" },
      longIntro: [
        "Iguazú ist kein einzelner Wasserfall — es sind 275 Kaskaden über 2,7 km Dschungel, an der Grenze Brasilien–Argentinien. Die brasilianische Seite zeigt den Panoramablick auf die ganze Kette. Die argentinische Seite bringt Sie auf den Teufelsschlund mit Stegen, die über dem Abgrund zu schweben scheinen. Sie brauchen beide — deshalb planen wir immer mindestens 2 Nächte in Foz.",
        "Über die Fälle hinaus: der Weltklasse-Parque das Aves (Rettungs- und Zuchtreservat mit Begehung zwischen Tukanen, Aras und Harpyien), die Macuco Safari, die im Boot in die Fälle rast, Helikopterflüge zum Sonnenuntergang und — für Neugierige — der binationale Itaipú-Staudamm, eines der sieben Weltwunder der modernen Welt.",
        "Iguazú lässt sich perfekt mit Rio (2h Flug), São Paulo (2h Flug) oder als natürlichen Stopp zwischen Brasilien und Buenos Aires kombinieren.",
      ],
      whatToDo: {
        heading: "Was Sie in Iguazú tun können",
        items: [
          { title: "Brasilianische Seite — das Panorama", text: "1,2 km Bohlenweg mit weiten Blicken auf die gesamte Kaskade, endend auf einem Steg in die Garganta do Diabo. Halbtags, am besten im Morgenlicht." },
          { title: "Argentinische Seite — der Teufelsschlund", text: "Ganztags: Oberer Rundweg, Unterer Rundweg und Zug zum Garganta-del-Diablo-Steg, wo 14 Fälle 82m tief donnern. Pass für den Grenzübertritt erforderlich." },
          { title: "Macuco Safari (Boot unter die Fälle)", text: "Schnellboot, das Sie an den Fuß der Fälle bringt. Sie werden völlig durchnässt — Wechselkleidung Pflicht. Der viszeralste Weg, das Wasser zu spüren." },
          { title: "Parque das Aves", text: "20 Hektar Atlantischer Regenwald mit begehbaren Volieren für Tukane, Harpyien, Hyazinth-Aras und Kolibris. Alle Rettungsvögel, Weltklasse-Naturschutz." },
          { title: "Helikopterflug über die Fälle", text: "10-min Panoramaflug ab brasilianischer Seite — der einzige Weg, die 2,7 km von oben zu erfassen. Am besten spätnachmittags." },
        ],
      },
      bestTime: { heading: "Beste Zeit für Iguazú", text: "Iguazú ganzjährig. Mai–August: mild, trocken, hoher Wasserstand, wenig Andrang. September–November: warm, gelegentlich Regen, spektakulärer Wasserfluss. Dezember–Februar: heiß und feucht, Peak-Tourismus. März–April: warm, weniger Menschen, gutes Wasser. Meiden Sie Katastrophenfluten (selten, aber Boote schließen) — wir überwachen und passen an." },
      howToGet: { heading: "Anreise", text: "Flug nach Foz do Iguaçu (IGU) ab São Paulo (2h), Rio (2h) oder Buenos Aires (1,5h nach AEP). Wir organisieren Transfer zwischen Ihrem brasilianischen Hotel und den Eingängen zu beiden Nationalparks sowie den Grenzübertritt." },
      whereToStay: { heading: "Wo übernachten", text: "Belmond Hotel das Cataratas — einziges Hotel im brasilianischen Park, magischer Sonnenaufgangszugang. Wish Foz do Iguaçu — Full-Service-Resort. Recanto Cataratas — Mittelklasse mit Pool und Shuttle. Argentinische Seite: Awasi Iguazú (All-Inclusive-Luxus) oder Loi Suites Iguazú." },
      faqs: {
        heading: "Iguazú-Wasserfälle — häufige Fragen",
        items: [
          { q: "Wie viele Tage brauche ich in Iguazú?", a: "Minimum 2 Nächte: ganzer Tag brasilianische Seite + Macuco, ganzer Tag argentinische Seite, halber Tag Vogelpark oder Itaipú. 3 Nächte für Helikopter oder langsameres Tempo. Manche 4. Nacht für Belmond-Immersion." },
          { q: "Brasilianische oder argentinische Seite — welche?", a: "Beide. Brasilianisch = weiter Panoramablick (½ Tag). Argentinisch = immersiver Teufelsschlund-Steg (ganztags). Eine auslassen heißt die Hälfte der Fälle verpassen." },
          { q: "Brauche ich Visum für die argentinische Seite?", a: "Die meisten europäischen und lateinamerikanischen Pässe brauchen kein Visum für den Tagesausflug. US- und Kanadier sollten aktuelle Einreiseanforderungen prüfen. Wir beraten." },
          { q: "Lohnt der Helikopter?", a: "Für Fotografen und Erstbesucher absolut. Die Luftansicht zeigt die Hufeisenform, die vom Boden aus unsichtbar ist. 10 Min.; Premium-Preis, aber einzigartig." },
          { q: "Kombination Iguazú mit Rio, Amazonas oder Buenos Aires?", a: "Ja — alle natürlich: Rio + Iguazú (2h Flug), Iguazú + Amazonas (via São Paulo), Rio + Iguazú + Buenos Aires (klassischer Southern Cone). Wir gestalten die Gesamtreise." },
        ],
      },
      finalCta: { heading: "Bereit, Iguazú von beiden Seiten zu sehen?", subheading: "Erzählen Sie uns Ihre Daten. Wir melden uns in 48 Stunden.", button: "Auf WhatsApp starten" },
      back: "Zurück zur Brasilien-Übersicht",
    },
  },

  bahia: {
    en: {
      metaTitle: "Bahia Brazil — Salvador, Chapada Diamantina & Beaches",
      metaDescription: "Design your Bahia trip: colonial Salvador, wild beaches of the Costa do Sapê, Península de Maraú, Trancoso, Chapada Diamantina trekking.",
      keywords: "bahia brazil tour, salvador travel, trancoso itacaré, chapada diamantina, peninsula de maraú, bahia beach boutique",
      hero: { eyebrow: "Bahia, Northeast Brazil", title: "Afro-Brazilian soul, wild beaches, cinematic canyons.", subtitle: "From Salvador's colonial heart to Trancoso's beach elegance and the Chapada Diamantina's trekking country.", cta: "Design my Bahia trip" },
      longIntro: [
        "Bahia is not one destination — it's three. Salvador is the historic capital: cobblestoned Pelourinho (UNESCO), Afro-Brazilian rhythm, capoeira circles at dusk, the most soulful food in Brazil. The southern coast (Trancoso, Caraíva, Península de Maraú, Boipeba) is where boutique beach travel was invented in Brazil — thatched pousadas, empty beaches, seafood on the sand. And the Chapada Diamantina, 6h inland, is trekking country: tabletop mountains, caves with underwater blue light, 380m waterfalls.",
        "Most of our clients spend 3 Salvador + 4 beach (Trancoso or Maraú) or 3 Salvador + 4 Chapada Diamantina. Longer trips combine all three. Bahia is also the natural entry point to combine with Fernando de Noronha (via Recife) or the Northeast beaches.",
        "The Bahia we design skips the mass-tourism resorts and stays with the small owner-run pousadas that made Trancoso and Boipeba famous.",
      ],
      whatToDo: {
        heading: "What to do in Bahia",
        items: [
          { title: "Salvador — Pelourinho, food and rhythm", text: "3 nights: guided Pelourinho with a historian, capoeira demonstration, moqueca lunch in Rio Vermelho, night out in Santo Antônio. Sleep in a boutique hotel inside the historic centre." },
          { title: "Trancoso & Caraíva", text: "The Quadrado at sunset, empty beaches accessed by 4x4 or on horseback, dinner at Uxua or Café das Artes, day trip to Caraíva (river crossing, no cars). 4–5 nights minimum for real relaxation." },
          { title: "Península de Maraú & Boipeba", text: "Barra Grande, Taipu de Fora tide pools, boat to Boipeba (car-free island). The quieter alternative to Trancoso, better for reef snorkelling and rustic charm." },
          { title: "Chapada Diamantina", text: "4–5 days from Lençóis town: Poço Encantado (sunlit blue cave), Cachoeira da Fumaça (380m), Vale do Pati trek (3-day guided), Morro do Pai Inácio sunset. Trekking country with excellent pousadas." },
          { title: "Costa do Sapê & Abrolhos", text: "Wild beaches south of Ilhéus — Ponta do Ramo, Cabana da Praia. From July–October, humpback whale watching at Abrolhos archipelago (day trip from Caravelas)." },
        ],
      },
      bestTime: { heading: "Best time to visit Bahia", text: "Coastal Bahia is warm year-round. December–March: hot, sunny, high season (book early for Trancoso Réveillon). April–June: warm sea, occasional rain, lower prices — an underrated window. July–August: dry, sunny, Northern-hemisphere summer vacations. September–November: warm, dry, quieter. Chapada Diamantina: April–October dry season for trekking; avoid Jan–Mar (flash floods)." },
      howToGet: { heading: "How to get there", text: "Fly to Salvador (SSA) — daily direct from São Paulo, Rio, and international from Lisbon, Madrid. For Trancoso: fly to Porto Seguro (BPS), 1h drive. For Península de Maraú: fly to Ilhéus (IOS), 2.5h transfer + boat. For Chapada: fly to Salvador, then 6h drive or 1h flight to Lençóis. We handle every leg." },
      whereToStay: { heading: "Where to stay", text: "Salvador: Fera Palace (Pelourinho boutique), Hotel Fasano Salvador (rooftop over the bay). Trancoso: Uxua Casa Hotel, Etnia Boutique, Fasano Trancoso. Península de Maraú: Kiaroa Eco Luxury, Butterfly House, Barcelona Barra Grande. Chapada: Vila Serrano, Vila dos Sonhos, Villa Iemanjá." },
      faqs: {
        heading: "Bahia — frequently asked",
        items: [
          { q: "How many days do I need in Bahia?", a: "Minimum 5 nights: 2 Salvador + 3 Trancoso, or 5 Chapada standalone. Ideal: 7–10 nights combining Salvador + Trancoso + a beach island (Boipeba/Maraú), or Salvador + Chapada + beach." },
          { q: "Trancoso or Península de Maraú — which one?", a: "Trancoso: more polished, boutique restaurants, direct 1h flight from São Paulo/Rio via Porto Seguro. Maraú: rougher, quieter, better reef snorkelling. Boipeba: car-free island retreat, most authentic. Match to your travel style — we advise." },
          { q: "Is the Chapada Diamantina worth the detour?", a: "Absolutely for outdoors travellers — trekking, caves, waterfalls, blue-water pools. Combine 4 Chapada nights with 3 Trancoso for the perfect nature-plus-beach week. Not for pure beach seekers." },
          { q: "Is Salvador safe?", a: "Yes with local guidance. We use vetted drivers and guides, choose safe neighbourhoods (Pelourinho by day + evening, Rio Vermelho for nightlife, Barra for beach), and brief you on street smarts. 24/7 support." },
          { q: "Can I combine Bahia with Fernando de Noronha, Rio or Amazon?", a: "Yes: Salvador + Trancoso + Rio (via Rio flight); Salvador + Chapada + Fernando de Noronha (via Recife); Salvador + Amazon (via Belém or Manaus). We design end-to-end." },
        ],
      },
      finalCta: { heading: "Ready to feel the soul of Bahia?", subheading: "Tell us your dates. We come back with a proposal in 48 hours.", button: "Start on WhatsApp" },
      back: "Back to Brazil overview",
    },
    es: {
      metaTitle: "Bahía Brasil — Salvador, Chapada Diamantina y Playas",
      metaDescription: "Diseña tu viaje a Bahía: Salvador colonial, playas salvajes de la Costa do Sapê, Península de Maraú, Trancoso, trekking en la Chapada Diamantina.",
      keywords: "bahía brasil tour, salvador de bahía viaje, trancoso itacaré, chapada diamantina, península de maraú, bahía playa boutique",
      hero: { eyebrow: "Bahía, Nordeste de Brasil", title: "Alma afrobrasileña, playas salvajes, cañones de cine.", subtitle: "Del corazón colonial de Salvador a la elegancia de playa de Trancoso y el país de trekking de la Chapada Diamantina.", cta: "Diseñar mi viaje a Bahía" },
      longIntro: [
        "Bahía no es un solo destino — son tres. Salvador es la capital histórica: Pelourinho adoquinado (UNESCO), ritmo afrobrasileño, ruedas de capoeira al atardecer, la comida más con alma de Brasil. La costa sur (Trancoso, Caraíva, Península de Maraú, Boipeba) es donde se inventó el viaje boutique de playa en Brasil — pousadas con techo de paja, playas vacías, mariscos en la arena. Y la Chapada Diamantina, 6h tierra adentro, es país de trekking: montañas de mesa, cuevas con luz azul submarina, cascadas de 380m.",
        "La mayoría de nuestros clientes hace 3 Salvador + 4 playa (Trancoso o Maraú) o 3 Salvador + 4 Chapada Diamantina. Viajes largos combinan los tres. Bahía es también la puerta natural para combinar con Fernando de Noronha (vía Recife) o las playas del Nordeste.",
        "La Bahía que diseñamos evita los resorts masivos y se queda con las pousadas pequeñas de dueño que hicieron famosos a Trancoso y Boipeba.",
      ],
      whatToDo: {
        heading: "Qué hacer en Bahía",
        items: [
          { title: "Salvador — Pelourinho, comida y ritmo", text: "3 noches: Pelourinho guiado con historiador, demostración de capoeira, almuerzo de moqueca en Rio Vermelho, salida nocturna en Santo Antônio. Duerme en hotel boutique dentro del centro histórico." },
          { title: "Trancoso y Caraíva", text: "El Quadrado al atardecer, playas vacías accedidas en 4x4 o a caballo, cena en Uxua o Café das Artes, día en Caraíva (cruce de río, sin coches). 4–5 noches mínimo para relajo real." },
          { title: "Península de Maraú y Boipeba", text: "Barra Grande, piscinas de marea de Taipu de Fora, barco a Boipeba (isla sin coches). Alternativa más tranquila a Trancoso, mejor para snorkel en arrecife y encanto rústico." },
          { title: "Chapada Diamantina", text: "4–5 días desde Lençóis: Poço Encantado (cueva azul con sol), Cachoeira da Fumaça (380m), trekking Vale do Pati (3 días guiado), atardecer en Morro do Pai Inácio. País de trekking con excelentes pousadas." },
          { title: "Costa do Sapê y Abrolhos", text: "Playas salvajes al sur de Ilhéus — Ponta do Ramo, Cabana da Praia. Julio–octubre, avistamiento de ballenas jorobadas en Abrolhos (día desde Caravelas)." },
        ],
      },
      bestTime: { heading: "Mejor época para Bahía", text: "La Bahía costera es cálida todo el año. Diciembre–marzo: caluroso, soleado, temporada alta (reserva pronto Réveillon en Trancoso). Abril–junio: mar cálido, lluvia ocasional, precios bajos — ventana subestimada. Julio–agosto: seco, soleado, vacaciones de verano del hemisferio norte. Septiembre–noviembre: cálido, seco, tranquilo. Chapada: abril–octubre estación seca para trekking; evita ene–mar (crecidas)." },
      howToGet: { heading: "Cómo llegar", text: "Vuelo a Salvador (SSA) — directos diarios desde São Paulo, Río, e internacionales desde Lisboa, Madrid. Trancoso: vuelo a Porto Seguro (BPS), 1h en coche. Península de Maraú: vuelo a Ilhéus (IOS), 2,5h traslado + barco. Chapada: vuelo a Salvador, luego 6h en coche o 1h de vuelo a Lençóis. Gestionamos cada tramo." },
      whereToStay: { heading: "Dónde alojarse", text: "Salvador: Fera Palace (boutique Pelourinho), Hotel Fasano Salvador (rooftop sobre la bahía). Trancoso: Uxua Casa Hotel, Etnia Boutique, Fasano Trancoso. Península de Maraú: Kiaroa Eco Luxury, Butterfly House, Barcelona Barra Grande. Chapada: Vila Serrano, Vila dos Sonhos, Villa Iemanjá." },
      faqs: {
        heading: "Bahía — preguntas frecuentes",
        items: [
          { q: "¿Cuántos días necesito en Bahía?", a: "Mínimo 5 noches: 2 Salvador + 3 Trancoso, o 5 Chapada solo. Ideal: 7–10 noches combinando Salvador + Trancoso + isla de playa (Boipeba/Maraú), o Salvador + Chapada + playa." },
          { q: "¿Trancoso o Península de Maraú — cuál?", a: "Trancoso: más pulido, restaurantes boutique, vuelo directo 1h desde São Paulo/Río vía Porto Seguro. Maraú: más rústico, tranquilo, mejor snorkel en arrecife. Boipeba: refugio isleño sin coches, más auténtico. Encajamos con tu estilo." },
          { q: "¿Vale la Chapada Diamantina?", a: "Sin duda para amantes del aire libre — trekking, cuevas, cascadas, piscinas de agua azul. Combina 4 noches Chapada con 3 Trancoso para la semana perfecta naturaleza+playa. No para buscadores de playa pura." },
          { q: "¿Es seguro Salvador?", a: "Sí con orientación local. Usamos choferes y guías validados, elegimos barrios seguros (Pelourinho día + tarde, Rio Vermelho para vida nocturna, Barra para playa) y te orientamos sobre buenas prácticas. Soporte 24/7." },
          { q: "¿Puedo combinar Bahía con Fernando de Noronha, Río o Amazonía?", a: "Sí: Salvador + Trancoso + Río (vuelo a Río); Salvador + Chapada + Fernando de Noronha (vía Recife); Salvador + Amazonía (vía Belém o Manaos). Diseñamos de punta a punta." },
        ],
      },
      finalCta: { heading: "¿Listo para sentir el alma de Bahía?", subheading: "Cuéntanos tus fechas. Volvemos con una propuesta en 48 horas.", button: "Empezar por WhatsApp" },
      back: "Volver al resumen de Brasil",
    },
    it: {
      metaTitle: "Bahia Brasile — Salvador, Chapada Diamantina e Spiagge",
      metaDescription: "Progetta il tuo viaggio in Bahia: Salvador coloniale, spiagge selvagge della Costa do Sapê, Península de Maraú, Trancoso, trekking Chapada Diamantina.",
      keywords: "bahia brasile tour, salvador viaggio, trancoso itacaré, chapada diamantina, penisola maraú, bahia spiaggia boutique",
      hero: { eyebrow: "Bahia, Nordest Brasile", title: "Anima afro-brasiliana, spiagge selvagge, canyon cinematografici.", subtitle: "Dal cuore coloniale di Salvador all'eleganza balneare di Trancoso e al paese di trekking della Chapada Diamantina.", cta: "Progetta il mio viaggio in Bahia" },
      longIntro: [
        "Bahia non è una singola destinazione — sono tre. Salvador è la capitale storica: Pelourinho acciottolato (UNESCO), ritmo afro-brasiliano, cerchi di capoeira al tramonto, il cibo più anima del Brasile. La costa sud (Trancoso, Caraíva, Penisola di Maraú, Boipeba) è dove è nato il viaggio boutique da spiaggia in Brasile — pousada con tetti di paglia, spiagge vuote, pesce sulla sabbia. E la Chapada Diamantina, 6h nell'entroterra, è paese di trekking: montagne tabulari, grotte con luce blu subacquea, cascate di 380m.",
        "La maggior parte dei nostri clienti fa 3 Salvador + 4 spiaggia (Trancoso o Maraú) o 3 Salvador + 4 Chapada Diamantina. Viaggi lunghi combinano tutte e tre. Bahia è anche l'accesso naturale per combinare con Fernando de Noronha (via Recife) o le spiagge del Nordest.",
        "La Bahia che progettiamo evita i resort di massa e resta con le pousade familiari che hanno reso famose Trancoso e Boipeba.",
      ],
      whatToDo: {
        heading: "Cosa fare in Bahia",
        items: [
          { title: "Salvador — Pelourinho, cibo e ritmo", text: "3 notti: Pelourinho guidato con storico, dimostrazione di capoeira, pranzo di moqueca a Rio Vermelho, serata a Santo Antônio. Dormi in hotel boutique nel centro storico." },
          { title: "Trancoso e Caraíva", text: "Il Quadrado al tramonto, spiagge vuote raggiunte in 4x4 o a cavallo, cena all'Uxua o Café das Artes, gita a Caraíva (traghetto sul fiume, senza auto). 4–5 notti minimo per vero relax." },
          { title: "Penisola di Maraú e Boipeba", text: "Barra Grande, piscine di marea di Taipu de Fora, barca per Boipeba (isola senza auto). Alternativa più tranquilla a Trancoso, migliore per snorkeling su barriera corallina." },
          { title: "Chapada Diamantina", text: "4–5 giorni da Lençóis: Poço Encantado (grotta blu illuminata dal sole), Cachoeira da Fumaça (380m), trekking Vale do Pati (3 giorni guidato), tramonto a Morro do Pai Inácio." },
          { title: "Costa do Sapê e Abrolhos", text: "Spiagge selvagge a sud di Ilhéus. Da luglio a ottobre, avvistamento di megattere nell'arcipelago di Abrolhos (gita da Caravelas)." },
        ],
      },
      bestTime: { heading: "Migliore periodo per la Bahia", text: "La Bahia costiera è calda tutto l'anno. Dicembre–marzo: caldo, sole, alta stagione (prenota presto per Réveillon a Trancoso). Aprile–giugno: mare caldo, pioggia occasionale, prezzi bassi — finestra sottovalutata. Luglio–agosto: secco, soleggiato, vacanze estive europee. Settembre–novembre: caldo, secco, tranquillo. Chapada: aprile–ottobre secca per trekking; evita gen–mar (piene lampo)." },
      howToGet: { heading: "Come arrivare", text: "Volo per Salvador (SSA) — diretti giornalieri da São Paulo, Rio e internazionali da Lisbona, Madrid. Trancoso: volo per Porto Seguro (BPS), 1h in auto. Penisola di Maraú: volo per Ilhéus (IOS), 2,5h transfer + barca. Chapada: volo per Salvador, poi 6h in auto o 1h volo per Lençóis. Gestiamo ogni tratta." },
      whereToStay: { heading: "Dove alloggiare", text: "Salvador: Fera Palace (boutique Pelourinho), Hotel Fasano Salvador (rooftop sulla baia). Trancoso: Uxua Casa Hotel, Etnia Boutique, Fasano Trancoso. Penisola di Maraú: Kiaroa Eco Luxury, Butterfly House, Barcelona Barra Grande. Chapada: Vila Serrano, Vila dos Sonhos, Villa Iemanjá." },
      faqs: {
        heading: "Bahia — domande frequenti",
        items: [
          { q: "Quanti giorni servono in Bahia?", a: "Minimo 5 notti: 2 Salvador + 3 Trancoso, o 5 Chapada da sola. Ideale: 7–10 notti combinando Salvador + Trancoso + isola (Boipeba/Maraú), o Salvador + Chapada + spiaggia." },
          { q: "Trancoso o Penisola di Maraú — quale?", a: "Trancoso: più raffinato, ristoranti boutique, volo diretto 1h da São Paulo/Rio via Porto Seguro. Maraú: più rustico, tranquillo, migliore snorkeling. Boipeba: rifugio insulare senza auto, più autentico." },
          { q: "Vale la Chapada Diamantina?", a: "Assolutamente per amanti dell'outdoor — trekking, grotte, cascate, piscine blu. Combina 4 notti Chapada con 3 Trancoso per la settimana perfetta natura+spiaggia. Non per cercatori di sola spiaggia." },
          { q: "Salvador è sicura?", a: "Sì con guida locale. Usiamo autisti e guide validati, scegliamo quartieri sicuri (Pelourinho di giorno + sera, Rio Vermelho per vita notturna, Barra per spiaggia). Supporto 24/7." },
          { q: "Posso combinare Bahia con Fernando de Noronha, Rio o Amazzonia?", a: "Sì: Salvador + Trancoso + Rio; Salvador + Chapada + Fernando de Noronha (via Recife); Salvador + Amazzonia (via Belém o Manaus). Progettiamo tutto." },
        ],
      },
      finalCta: { heading: "Pronto a sentire l'anima di Bahia?", subheading: "Raccontaci le tue date. Torniamo in 48 ore.", button: "Inizia su WhatsApp" },
      back: "Torna alla panoramica Brasile",
    },
    de: {
      metaTitle: "Bahia Brasilien — Salvador, Chapada Diamantina & Strände",
      metaDescription: "Planen Sie Ihre Bahia-Reise: koloniales Salvador, wilde Strände der Costa do Sapê, Península de Maraú, Trancoso, Trekking in der Chapada Diamantina.",
      keywords: "bahia brasilien reise, salvador reise, trancoso itacaré, chapada diamantina, halbinsel maraú, bahia strand boutique",
      hero: { eyebrow: "Bahia, Nordost-Brasilien", title: "Afro-brasilianische Seele, wilde Strände, kinoreife Schluchten.", subtitle: "Vom kolonialen Herzen Salvadors zur Strandeleganz Trancosos und zum Trekking-Land der Chapada Diamantina.", cta: "Meine Bahia-Reise planen" },
      longIntro: [
        "Bahia ist keine einzelne Destination — es sind drei. Salvador ist die historische Hauptstadt: kopfsteingepflastertes Pelourinho (UNESCO), afro-brasilianischer Rhythmus, Capoeira-Kreise in der Dämmerung, das seelenvollste Essen Brasiliens. Die Südküste (Trancoso, Caraíva, Halbinsel Maraú, Boipeba) ist der Geburtsort des Boutique-Strandreisens in Brasilien — reetgedeckte Pousadas, leere Strände, Meeresfrüchte am Sand. Und die Chapada Diamantina, 6h ins Landesinnere, ist Trekking-Land: Tafelberge, Höhlen mit blauem Unterwasserlicht, 380m-Wasserfälle.",
        "Die meisten Kunden buchen 3 Salvador + 4 Strand (Trancoso oder Maraú) oder 3 Salvador + 4 Chapada Diamantina. Längere Reisen kombinieren alle drei. Bahia ist auch der natürliche Einstieg für Kombination mit Fernando de Noronha (via Recife) oder Nordost-Stränden.",
        "Das Bahia, das wir gestalten, meidet Massenresorts und bleibt bei den kleinen inhabergeführten Pousadas, die Trancoso und Boipeba berühmt machten.",
      ],
      whatToDo: {
        heading: "Was Sie in Bahia tun können",
        items: [
          { title: "Salvador — Pelourinho, Essen und Rhythmus", text: "3 Nächte: geführtes Pelourinho mit Historiker, Capoeira-Vorführung, Moqueca-Mittagessen in Rio Vermelho, Abend in Santo Antônio. Boutique-Hotel im historischen Zentrum." },
          { title: "Trancoso & Caraíva", text: "Der Quadrado zum Sonnenuntergang, leere Strände per 4x4 oder Pferd, Abendessen im Uxua oder Café das Artes, Tagesausflug nach Caraíva (Flussübergang, autofrei). 4–5 Nächte minimum." },
          { title: "Halbinsel Maraú & Boipeba", text: "Barra Grande, Taipu-de-Fora-Gezeitenbecken, Boot nach Boipeba (autofreie Insel). Die ruhigere Alternative zu Trancoso, besser für Riffschnorcheln und rustikalen Charme." },
          { title: "Chapada Diamantina", text: "4–5 Tage ab Lençóis: Poço Encantado (sonnendurchflutete Blaue Höhle), Cachoeira da Fumaça (380m), Vale-do-Pati-Trek (3-tägig geführt), Sonnenuntergang am Morro do Pai Inácio." },
          { title: "Costa do Sapê & Abrolhos", text: "Wilde Strände südlich von Ilhéus. Von Juli–Oktober Buckelwal-Beobachtung im Abrolhos-Archipel (Tagesausflug ab Caravelas)." },
        ],
      },
      bestTime: { heading: "Beste Reisezeit für Bahia", text: "Die Küsten-Bahia ist ganzjährig warm. Dezember–März: heiß, sonnig, Hochsaison (früh buchen für Réveillon in Trancoso). April–Juni: warmes Meer, gelegentlich Regen, niedrigere Preise — unterschätztes Fenster. Juli–August: trocken, sonnig, europäische Sommerferien. September–November: warm, trocken, ruhiger. Chapada: April–Oktober Trockenzeit für Trekking; meiden Sie Jan–Mär (Sturzfluten)." },
      howToGet: { heading: "Anreise", text: "Flug nach Salvador (SSA) — täglich direkt ab São Paulo, Rio, international ab Lissabon, Madrid. Trancoso: Flug nach Porto Seguro (BPS), 1h Fahrt. Halbinsel Maraú: Flug nach Ilhéus (IOS), 2,5h Transfer + Boot. Chapada: Flug Salvador, dann 6h Fahrt oder 1h Flug nach Lençóis. Wir organisieren alles." },
      whereToStay: { heading: "Wo übernachten", text: "Salvador: Fera Palace (Pelourinho-Boutique), Hotel Fasano Salvador (Rooftop über der Bucht). Trancoso: Uxua Casa Hotel, Etnia Boutique, Fasano Trancoso. Halbinsel Maraú: Kiaroa Eco Luxury, Butterfly House, Barcelona Barra Grande. Chapada: Vila Serrano, Vila dos Sonhos, Villa Iemanjá." },
      faqs: {
        heading: "Bahia — häufige Fragen",
        items: [
          { q: "Wie viele Tage brauche ich in Bahia?", a: "Minimum 5 Nächte: 2 Salvador + 3 Trancoso oder 5 Chapada allein. Ideal: 7–10 Nächte Salvador + Trancoso + Insel (Boipeba/Maraú) oder Salvador + Chapada + Strand." },
          { q: "Trancoso oder Halbinsel Maraú — welche?", a: "Trancoso: gepflegter, Boutique-Restaurants, Direktflug 1h ab São Paulo/Rio via Porto Seguro. Maraú: rustikaler, ruhiger, besseres Riffschnorcheln. Boipeba: autofreies Inselrefugium, authentischster." },
          { q: "Lohnt die Chapada Diamantina?", a: "Für Outdoor-Reisende absolut — Trekking, Höhlen, Wasserfälle, blaue Pools. 4 Chapada-Nächte + 3 Trancoso = perfekte Natur-plus-Strand-Woche. Nicht für reine Strandsucher." },
          { q: "Ist Salvador sicher?", a: "Ja mit lokaler Führung. Wir nutzen geprüfte Fahrer und Guides, wählen sichere Viertel (Pelourinho tags + abends, Rio Vermelho fürs Nachtleben, Barra für Strand). 24/7-Support." },
          { q: "Kombination Bahia mit Fernando de Noronha, Rio oder Amazonas?", a: "Ja: Salvador + Trancoso + Rio; Salvador + Chapada + Fernando de Noronha (via Recife); Salvador + Amazonas (via Belém oder Manaus). Wir gestalten die Gesamtreise." },
        ],
      },
      finalCta: { heading: "Bereit, die Seele Bahias zu spüren?", subheading: "Erzählen Sie uns Ihre Daten. Wir melden uns in 48 Stunden mit einem Vorschlag.", button: "Auf WhatsApp starten" },
      back: "Zurück zur Brasilien-Übersicht",
    },
  },
};
