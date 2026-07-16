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
};
