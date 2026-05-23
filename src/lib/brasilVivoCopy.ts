import type { ContentLang } from "@/i18n/config\";
import type { IucnStatus } from "./conservation\";

export interface BrasilVivoUI {
  meta: { title: string; description: string; keywords: string };
  breadcrumb: string;
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  philosophy: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  biomes: {
    eyebrow: string;
    title: string;
    lead: string;
    faunaLabel: string;
    floraLabel: string;
    wowLabel: string;
  };
  species: {
    eyebrow: string;
    title: string;
    lead: string;
    whereLabel: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    lead: string;
    travelerLabel: string;
    visit: string;
  };
  cycle: {
    eyebrow: string;
    title: string;
    steps: { n: string; t: string; d: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    ctaNote: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: { q: string; a: string }[];
  };
  links: { destinos: string; sobre: string };
  whatsappMessage: string;
  iucnStatusLabel: Record<IucnStatus, string>;
}

const PT: BrasilVivoUI = {
  meta: {
    title: "Brasil Vivo — Biomas, fauna e turismo de conservação | Create Travel",
    description:
      "Amazônia, Pantanal, Cerrado, Mata Atlântica, Caatinga, Pampa e Costa: roteiros sob medida que protegem a natureza brasileira.",
    keywords:
      "biomas do Brasil, turismo de conservação, viagem sustentável Brasil, onça-pintada Pantanal, fauna brasileira",
  },
  breadcrumb: "Brasil Vivo",
  hero: {
    eyebrow: "Biomas · Fauna · Conservação",
    title: "Brasil Vivo — viajar é também preservar",
    subtitle:
      "Seis biomas, uma costa imensa e algumas das criaturas mais raras do planeta. A Create Travel desenha viagens autênticas pelo Brasil natural — com guias-naturalistas, pousadas comprometidas e roteiros que apoiam, na prática, quem protege a floresta.",
    cta: "Criar um roteiro de natureza",
  },
  philosophy: {
    eyebrow: "Nossa filosofia",
    title: "Experiência autêntica.\nTerritório preservado.",
    lead: "Viajamos para conhecer o lugar como ele é — e voltamos sabendo que ele continua ali, melhor do que encontramos.",
    items: [
      { title: "Experiência autêntica", text: "Pessoas reais, território vivo. Guias-naturalistas, comunidades ribeirinhas, mestres de saber e cozinheiras que carregam o sabor do lugar." },
      { title: "Baixo impacto", text: "Grupos pequenos, operadores locais, ritmo do bioma. Recusamos lugares e práticas que ferem o ambiente ou comunidades." },
      { title: "Conservação ativa", text: "Toda viagem que desenhamos prioriza pousadas, reservas e operadores que dedicam parte da receita à proteção da fauna e flora." },
      { title: "Conhecimento em campo", text: "Biólogos, cientistas e moradores que leem a paisagem com você — para que a viagem deixe entendimento, não só foto." },
    ],
  },
  biomes: {
    eyebrow: "Os biomas do Brasil",
    title: "Seis mundos numa única viagem",
    lead: "De rios voadores na Amazônia a canyons no extremo sul, cada bioma tem seu calendário, sua fauna icônica e seus guardiões.",
    faunaLabel: "Fauna",
    floraLabel: "Flora",
    wowLabel: "Belezas cênicas",
  },
  species: {
    eyebrow: "Espécies que protegemos vendo",
    title: "Encontros raros, com responsabilidade",
    lead: "Cada uma destas espécies carrega a história do seu bioma. Damos os caminhos éticos para esse encontro.",
    whereLabel: "Onde ver com ética",
  },
  projects: {
    eyebrow: "Projetos idôneos de conservação",
    title: "Quem cuida do Brasil de verdade",
    lead: "Organizações reconhecidas, com décadas de trabalho científico e comunitário. A viagem que você faz apoia a rede que sustenta o trabalho delas em campo.",
    travelerLabel: "Como sua viagem apoia",
    visit: "Conhecer o projeto",
  },
  cycle: {
    eyebrow: "Como sua viagem preserva",
    title: "O ciclo simples do turismo que protege",
    steps: [
      { n: "01", t: "Você viaja com curadoria", d: "Roteiro pensado para o ritmo do bioma, sem aglomeração e sem extrair valor do território." },
      { n: "02", t: "Operadores locais são contratados", d: "Guias-naturalistas, barqueiros, cozinheiras e pousadas-família recebem direto pela sua presença." },
      { n: "03", t: "Renda fica na comunidade", d: "Famílias que dependem da floresta em pé têm motivo concreto para mantê-la em pé." },
      { n: "04", t: "Conservação se sustenta", d: "Reservas privadas, pesquisa de fauna e fiscalização comunitária seguem funcionando — porque dão renda." },
    ],
    ctaTitle: "Quero viajar protegendo a natureza brasileira",
    ctaText: "Conte o que move você — observar onças no Pantanal, dormir em lodge ribeirinho na Amazônia, caminhar na Chapada com geólogo, ver tartarugas desovando no litoral. Desenhamos o roteiro autêntico, com baixo impacto, para você.",
    ctaButton: "Falar com um curador",
    ctaNote: "Resposta em horário comercial · Sem compromisso",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Turismo de conservação no Brasil",
    items: [
      { q: "O que é turismo de conservação?", a: "É a forma de viajar que transforma a presença do viajante em recurso para a proteção do território: hospedagens que mantêm reservas privadas, guias-naturalistas que dependem da fauna em pé, comunidades que escolhem preservar porque preservar gera renda." },
      { q: "Quais são os biomas brasileiros?", a: "O Brasil tem seis biomas terrestres — Amazônia, Cerrado, Mata Atlântica, Caatinga, Pantanal e Pampa — além da extensa costa marinha. Todos podem ser visitados com curadoria responsável." },
      { q: "Como sei se uma viagem é realmente sustentável?", a: "Procure três marcas: operadores locais com vínculo real à comunidade, grupos pequenos, e clareza sobre para onde vai o dinheiro." },
      { q: "Posso ver onça-pintada de forma ética?", a: "Sim — o Pantanal Norte (Porto Jofre, Transpantaneira) tem a maior densidade conhecida de onças do mundo e protocolos consolidados de observação fluvial respeitosa." },
      { q: "Que projetos a Create Travel apoia indiretamente?", a: "Nossos roteiros priorizam parceiros do Instituto Onça-Pintada, Projeto Tamar, Instituto Arara Azul, AMLD, Instituto Mamirauá, ICAS, SOS Mata Atlântica e Fundação Grupo Boticário." },
      { q: "É possível combinar luxo e baixo impacto no Brasil?", a: "Totalmente. Existe uma nova geração de lodges e pousadas-boutique brasileiras que entregam conforto refinado com práticas responsáveis." },
    ],
  },
  links: { destinos: "Ver destinos pelo Brasil", sobre: "Conheça a Create Travel" },
  whatsappMessage:
    "Olá, Create Travel! Quero criar um roteiro pelo Brasil com foco em natureza, fauna e turismo de conservação.",
  iucnStatusLabel: {
    "Pouco preocupante": "Pouco preocupante",
    "Quase ameaçada": "Quase ameaçada",
    Vulnerável: "Vulnerável",
    "Em perigo": "Em perigo",
    "Criticamente ameaçada": "Criticamente ameaçada",
    "Extinta na natureza": "Extinta na natureza",
  },
};

const EN: BrasilVivoUI = {
  meta: {
    title: "Living Brazil — Biomes, Wildlife & Conservation Travel | Create Travel",
    description:
      "Amazon, Pantanal, Cerrado, Atlantic Forest, Caatinga, Pampa and Coast: tailor-made journeys that protect Brazil's living nature.",
    keywords:
      "Brazil biomes, conservation travel Brazil, sustainable Brazil trip, Pantanal jaguar, Brazilian wildlife, ecotourism Brazil, responsible travel",
  },
  breadcrumb: "Living Brazil",
  hero: {
    eyebrow: "Biomes · Wildlife · Conservation",
    title: "Living Brazil — to travel is also to preserve",
    subtitle:
      "Six biomes, an immense coastline and some of the rarest creatures on Earth. Create Travel designs authentic journeys through wild Brazil — with naturalist guides, committed lodges and itineraries that, in practice, support those who protect the forest.",
    cta: "Design a nature trip",
  },
  philosophy: {
    eyebrow: "Our philosophy",
    title: "Authentic experience.\nPreserved territory.",
    lead: "We travel to know a place as it truly is — and we leave knowing it is still there, better than we found it.",
    items: [
      { title: "Authentic experience", text: "Real people, living territory. Naturalist guides, riverside communities, masters of local knowledge and cooks who carry the flavor of the land." },
      { title: "Low impact", text: "Small groups, local operators, the rhythm of the biome. We refuse places and practices that harm the environment or communities." },
      { title: "Active conservation", text: "Every trip we design prioritizes lodges, reserves and operators that channel part of their revenue into protecting wildlife and habitat." },
      { title: "Field knowledge", text: "Biologists, scientists and locals reading the landscape with you — so the trip leaves understanding, not just photos." },
    ],
  },
  biomes: {
    eyebrow: "Brazil's biomes",
    title: "Six worlds in a single journey",
    lead: "From the Amazon's flying rivers to canyons in the far south, each biome has its calendar, its iconic wildlife and its guardians.",
    faunaLabel: "Wildlife",
    floraLabel: "Flora",
    wowLabel: "Scenic wonders",
  },
  species: {
    eyebrow: "Species we protect by seeing",
    title: "Rare encounters, with responsibility",
    lead: "Each species carries the story of its biome. We open the ethical paths to those encounters.",
    whereLabel: "Where to see ethically",
  },
  projects: {
    eyebrow: "Trusted conservation projects",
    title: "Who truly takes care of Brazil",
    lead: "Recognized organizations with decades of scientific and community work. The trip you take supports the network that keeps their fieldwork alive.",
    travelerLabel: "How your trip supports it",
    visit: "Visit the project",
  },
  cycle: {
    eyebrow: "How your trip preserves",
    title: "The simple cycle of travel that protects",
    steps: [
      { n: "01", t: "You travel with curation", d: "An itinerary tuned to the biome's rhythm, without crowds and without extracting value from the territory." },
      { n: "02", t: "Local operators are hired", d: "Naturalist guides, boatmen, cooks and family-run lodges are paid directly through your presence." },
      { n: "03", t: "Income stays in the community", d: "Families who depend on the standing forest gain a concrete reason to keep it standing." },
      { n: "04", t: "Conservation sustains itself", d: "Private reserves, wildlife research and community monitoring keep working — because they generate income." },
    ],
    ctaTitle: "I want to travel protecting Brazil's nature",
    ctaText: "Tell us what moves you — jaguar safaris in the Pantanal, riverside lodges in the Amazon, geological treks in the Chapada, sea turtles nesting on the coast. We design the authentic, low-impact itinerary for you.",
    ctaButton: "Talk to a curator",
    ctaNote: "Reply during business hours · No commitment",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Conservation tourism in Brazil",
    items: [
      { q: "What is conservation tourism?", a: "It is travel that turns the visitor's presence into a resource for protecting the territory: lodges that maintain private reserves, naturalist guides who depend on living wildlife, and communities that choose to preserve because preservation generates income." },
      { q: "What are Brazil's biomes?", a: "Brazil has six terrestrial biomes — Amazon, Cerrado, Atlantic Forest, Caatinga, Pantanal and Pampa — plus its vast coastal-marine zone. All can be visited with responsible curation." },
      { q: "How do I know if a trip is really sustainable?", a: "Look for three signals: local operators with a real link to the community, small groups, and transparency about where the money goes." },
      { q: "Can I see jaguars ethically?", a: "Yes — the Northern Pantanal (Porto Jofre, Transpantaneira) holds the highest known density of jaguars in the world, with consolidated protocols for respectful boat-based observation." },
      { q: "Which projects does Create Travel indirectly support?", a: "Our itineraries prioritize partners of Instituto Onça-Pintada, Projeto Tamar, Instituto Arara Azul, AMLD, Instituto Mamirauá, ICAS, SOS Mata Atlântica and Fundação Grupo Boticário." },
      { q: "Can luxury and low impact coexist in Brazil?", a: "Absolutely. A new generation of Brazilian boutique lodges delivers refined comfort with solar energy, local sourcing and trained local teams." },
    ],
  },
  links: { destinos: "See Brazil destinations", sobre: "About Create Travel" },
  whatsappMessage:
    "Hello, Create Travel! I'd like to design a Brazil trip focused on nature, wildlife and conservation tourism.",
  iucnStatusLabel: {
    "Pouco preocupante": "Least concern",
    "Quase ameaçada": "Near threatened",
    Vulnerável: "Vulnerable",
    "Em perigo": "Endangered",
    "Criticamente ameaçada": "Critically endangered",
    "Extinta na natureza": "Extinct in the wild",
  },
};

const ES: BrasilVivoUI = {
  meta: {
    title: "Brasil Vivo — Biomas, fauna y turismo de conservación | Create Travel",
    description:
      "Amazonía, Pantanal, Cerrado, Mata Atlántica, Caatinga, Pampa y Costa: viajes a medida que protegen la naturaleza brasileña.",
    keywords:
      "biomas de Brasil, turismo de conservación, viaje sostenible Brasil, jaguar Pantanal, fauna brasileña, ecoturismo Brasil",
  },
  breadcrumb: "Brasil Vivo",
  hero: {
    eyebrow: "Biomas · Fauna · Conservación",
    title: "Brasil Vivo — viajar también es preservar",
    subtitle:
      "Seis biomas, una costa inmensa y algunas de las criaturas más raras del planeta. Create Travel diseña viajes auténticos por el Brasil natural — con guías naturalistas, posadas comprometidas e itinerarios que, en la práctica, apoyan a quienes protegen la selva.",
    cta: "Diseñar un viaje de naturaleza",
  },
  philosophy: {
    eyebrow: "Nuestra filosofía",
    title: "Experiencia auténtica.\nTerritorio preservado.",
    lead: "Viajamos para conocer el lugar como es — y volvemos sabiendo que sigue allí, mejor de como lo encontramos.",
    items: [
      { title: "Experiencia auténtica", text: "Personas reales, territorio vivo. Guías naturalistas, comunidades ribereñas, maestros de saber y cocineras que llevan el sabor del lugar." },
      { title: "Bajo impacto", text: "Grupos pequeños, operadores locales, ritmo del bioma. Rechazamos lugares y prácticas que dañan el ambiente o las comunidades." },
      { title: "Conservación activa", text: "Cada viaje que diseñamos prioriza posadas, reservas y operadores que dedican parte de sus ingresos a proteger fauna y flora." },
      { title: "Conocimiento en campo", text: "Biólogos, científicos y locales leen el paisaje contigo — para que el viaje deje comprensión, no solo fotos." },
    ],
  },
  biomes: {
    eyebrow: "Los biomas de Brasil",
    title: "Seis mundos en un único viaje",
    lead: "De los ríos voladores de la Amazonía a los cañones del extremo sur, cada bioma tiene su calendario, su fauna icónica y sus guardianes.",
    faunaLabel: "Fauna",
    floraLabel: "Flora",
    wowLabel: "Maravillas escénicas",
  },
  species: {
    eyebrow: "Especies que protegemos viendo",
    title: "Encuentros raros, con responsabilidad",
    lead: "Cada especie lleva la historia de su bioma. Abrimos los caminos éticos para ese encuentro.",
    whereLabel: "Dónde verla con ética",
  },
  projects: {
    eyebrow: "Proyectos serios de conservación",
    title: "Quién cuida de Brasil de verdad",
    lead: "Organizaciones reconocidas, con décadas de trabajo científico y comunitario. El viaje que haces apoya la red que sostiene su labor en el campo.",
    travelerLabel: "Cómo tu viaje apoya",
    visit: "Conocer el proyecto",
  },
  cycle: {
    eyebrow: "Cómo tu viaje preserva",
    title: "El ciclo simple del turismo que protege",
    steps: [
      { n: "01", t: "Viajas con curaduría", d: "Itinerario al ritmo del bioma, sin aglomeraciones, sin extraer valor del territorio." },
      { n: "02", t: "Se contrata a operadores locales", d: "Guías naturalistas, barqueros, cocineras y posadas familiares reciben directamente por tu presencia." },
      { n: "03", t: "El ingreso queda en la comunidad", d: "Las familias que dependen del bosque en pie tienen razones concretas para mantenerlo en pie." },
      { n: "04", t: "La conservación se sostiene", d: "Reservas privadas, investigación de fauna y vigilancia comunitaria siguen funcionando — porque generan ingresos." },
    ],
    ctaTitle: "Quiero viajar protegiendo la naturaleza brasileña",
    ctaText: "Cuéntanos qué te mueve — jaguares en el Pantanal, lodges ribereños en la Amazonía, caminatas con geólogos en la Chapada, tortugas desovando en la costa. Diseñamos el itinerario auténtico y de bajo impacto para ti.",
    ctaButton: "Hablar con un curador",
    ctaNote: "Respuesta en horario comercial · Sin compromiso",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Turismo de conservación en Brasil",
    items: [
      { q: "¿Qué es el turismo de conservación?", a: "Es la forma de viajar que convierte la presencia del viajero en recurso para proteger el territorio: posadas con reservas privadas, guías naturalistas que dependen de la fauna viva y comunidades que preservan porque preservar genera ingresos." },
      { q: "¿Cuáles son los biomas brasileños?", a: "Brasil tiene seis biomas terrestres — Amazonía, Cerrado, Mata Atlántica, Caatinga, Pantanal y Pampa — además de la extensa zona costero-marina." },
      { q: "¿Cómo sé si un viaje es realmente sostenible?", a: "Busca tres señales: operadores locales con vínculo real con la comunidad, grupos pequeños y transparencia sobre adónde va el dinero." },
      { q: "¿Puedo ver jaguar de forma ética?", a: "Sí — el Pantanal Norte (Porto Jofre, Transpantaneira) tiene la mayor densidad conocida de jaguares del mundo, con protocolos consolidados de observación fluvial respetuosa." },
      { q: "¿Qué proyectos apoya indirectamente Create Travel?", a: "Nuestros itinerarios priorizan socios del Instituto Onça-Pintada, Projeto Tamar, Instituto Arara Azul, AMLD, Instituto Mamirauá, ICAS, SOS Mata Atlântica y Fundação Grupo Boticário." },
      { q: "¿Es posible combinar lujo y bajo impacto en Brasil?", a: "Totalmente. Una nueva generación de lodges y posadas boutique brasileñas entrega confort refinado con prácticas responsables." },
    ],
  },
  links: { destinos: "Ver destinos por Brasil", sobre: "Conocer Create Travel" },
  whatsappMessage:
    "¡Hola, Create Travel! Quiero diseñar un viaje por Brasil con foco en naturaleza, fauna y turismo de conservación.",
  iucnStatusLabel: {
    "Pouco preocupante": "Preocupación menor",
    "Quase ameaçada": "Casi amenazada",
    Vulnerável: "Vulnerable",
    "Em perigo": "En peligro",
    "Criticamente ameaçada": "En peligro crítico",
    "Extinta na natureza": "Extinta en estado silvestre",
  },
};

const IT: BrasilVivoUI = {
  meta: {
    title: "Brasile Vivo — Biomi, fauna e turismo di conservazione | Create Travel",
    description:
      "Amazzonia, Pantanal, Cerrado, Foresta Atlantica, Caatinga, Pampa e Costa: viaggi su misura che proteggono la natura brasiliana.",
    keywords:
      "biomi del Brasile, turismo di conservazione, viaggio sostenibile Brasile, giaguaro Pantanal, fauna brasiliana, ecoturismo Brasile",
  },
  breadcrumb: "Brasile Vivo",
  hero: {
    eyebrow: "Biomi · Fauna · Conservazione",
    title: "Brasile Vivo — viaggiare è anche preservare",
    subtitle:
      "Sei biomi, una costa immensa e alcune delle creature più rare del pianeta. Create Travel disegna viaggi autentici nel Brasile naturale — con guide naturaliste, lodge impegnati e itinerari che, nei fatti, sostengono chi protegge la foresta.",
    cta: "Disegna un viaggio nella natura",
  },
  philosophy: {
    eyebrow: "La nostra filosofia",
    title: "Esperienza autentica.\nTerritorio preservato.",
    lead: "Viaggiamo per conoscere il luogo com'è — e torniamo sapendo che è ancora lì, migliore di come l'abbiamo trovato.",
    items: [
      { title: "Esperienza autentica", text: "Persone reali, territorio vivo. Guide naturaliste, comunità rivierasche, maestri del sapere e cuoche che portano il sapore del luogo." },
      { title: "Basso impatto", text: "Piccoli gruppi, operatori locali, ritmo del bioma. Rifiutiamo luoghi e pratiche che danneggiano l'ambiente o le comunità." },
      { title: "Conservazione attiva", text: "Ogni viaggio che disegniamo privilegia lodge, riserve e operatori che destinano parte dei ricavi alla tutela di fauna e flora." },
      { title: "Conoscenza sul campo", text: "Biologi, scienziati e abitanti del posto leggono il paesaggio con te — perché il viaggio lasci comprensione, non solo foto." },
    ],
  },
  biomes: {
    eyebrow: "I biomi del Brasile",
    title: "Sei mondi in un unico viaggio",
    lead: "Dai fiumi volanti dell'Amazzonia ai canyon dell'estremo sud, ogni bioma ha il suo calendario, la sua fauna iconica e i suoi guardiani.",
    faunaLabel: "Fauna",
    floraLabel: "Flora",
    wowLabel: "Meraviglie sceniche",
  },
  species: {
    eyebrow: "Specie che proteggiamo vedendo",
    title: "Incontri rari, con responsabilità",
    lead: "Ogni specie porta la storia del suo bioma. Apriamo i percorsi etici per quegli incontri.",
    whereLabel: "Dove vederla eticamente",
  },
  projects: {
    eyebrow: "Progetti seri di conservazione",
    title: "Chi si prende cura del Brasile davvero",
    lead: "Organizzazioni riconosciute, con decenni di lavoro scientifico e comunitario. Il viaggio che fai sostiene la rete che mantiene vivo il loro lavoro sul campo.",
    travelerLabel: "Come il tuo viaggio sostiene",
    visit: "Scopri il progetto",
  },
  cycle: {
    eyebrow: "Come il tuo viaggio preserva",
    title: "Il ciclo semplice del turismo che protegge",
    steps: [
      { n: "01", t: "Viaggi con curatela", d: "Itinerario al ritmo del bioma, senza folle, senza estrarre valore dal territorio." },
      { n: "02", t: "Operatori locali vengono ingaggiati", d: "Guide naturaliste, barcaioli, cuoche e lodge familiari ricevono direttamente dalla tua presenza." },
      { n: "03", t: "Il reddito resta nella comunità", d: "Le famiglie che dipendono dalla foresta in piedi hanno motivi concreti per mantenerla in piedi." },
      { n: "04", t: "La conservazione si sostiene", d: "Riserve private, ricerca faunistica e vigilanza comunitaria continuano a funzionare — perché generano reddito." },
    ],
    ctaTitle: "Voglio viaggiare proteggendo la natura brasiliana",
    ctaText: "Raccontaci cosa ti muove — giaguari nel Pantanal, lodge fluviali in Amazzonia, trekking con geologo nella Chapada, tartarughe che depongono sulla costa. Disegniamo l'itinerario autentico e a basso impatto per te.",
    ctaButton: "Parla con un curatore",
    ctaNote: "Risposta in orario d'ufficio · Senza impegno",
  },
  faq: {
    eyebrow: "Domande frequenti",
    title: "Turismo di conservazione in Brasile",
    items: [
      { q: "Cos'è il turismo di conservazione?", a: "È il modo di viaggiare che trasforma la presenza del viaggiatore in risorsa per proteggere il territorio: lodge con riserve private, guide naturaliste che dipendono dalla fauna viva e comunità che preservano perché preservare genera reddito." },
      { q: "Quali sono i biomi brasiliani?", a: "Il Brasile ha sei biomi terrestri — Amazzonia, Cerrado, Foresta Atlantica, Caatinga, Pantanal e Pampa — oltre alla vasta zona costiero-marina." },
      { q: "Come capisco se un viaggio è davvero sostenibile?", a: "Cerca tre segnali: operatori locali con un vero legame con la comunità, gruppi piccoli e trasparenza su dove va il denaro." },
      { q: "Posso vedere il giaguaro in modo etico?", a: "Sì — il Pantanal Nord (Porto Jofre, Transpantaneira) ha la più alta densità conosciuta di giaguari al mondo, con protocolli consolidati di osservazione fluviale rispettosa." },
      { q: "Quali progetti Create Travel sostiene indirettamente?", a: "I nostri itinerari privilegiano partner di Instituto Onça-Pintada, Projeto Tamar, Instituto Arara Azul, AMLD, Instituto Mamirauá, ICAS, SOS Mata Atlântica e Fundação Grupo Boticário." },
      { q: "È possibile unire lusso e basso impatto in Brasile?", a: "Assolutamente sì. Una nuova generazione di lodge boutique brasiliani offre comfort raffinato con pratiche responsabili." },
    ],
  },
  links: { destinos: "Vedi destinazioni del Brasile", sobre: "Scopri Create Travel" },
  whatsappMessage:
    "Ciao, Create Travel! Vorrei disegnare un viaggio in Brasile incentrato su natura, fauna e turismo di conservazione.",
  iucnStatusLabel: {
    "Pouco preocupante": "Minore preoccupazione",
    "Quase ameaçada": "Quasi minacciata",
    Vulnerável: "Vulnerabile",
    "Em perigo": "In pericolo",
    "Criticamente ameaçada": "In pericolo critico",
    "Extinta na natureza": "Estinta in natura",
  },
};

const DE: BrasilVivoUI = {
  meta: {
    title: "Lebendiges Brasilien — Biome, Tierwelt & Naturschutz-Reisen | Create Travel",
    description:
      "Amazonas, Pantanal, Cerrado, Atlantischer Regenwald, Caatinga, Pampa und Küste: maßgeschneiderte Reisen, die Brasiliens lebende Natur schützen.",
    keywords:
      "Brasilien Biome, Naturschutz Reise Brasilien, nachhaltige Brasilien Reise, Pantanal Jaguar, brasilianische Tierwelt, Ökotourismus Brasilien",
  },
  breadcrumb: "Lebendiges Brasilien",
  hero: {
    eyebrow: "Biome · Tierwelt · Naturschutz",
    title: "Lebendiges Brasilien — Reisen heißt auch bewahren",
    subtitle:
      "Sechs Biome, eine immense Küste und einige der seltensten Lebewesen der Erde. Create Travel gestaltet authentische Reisen durch das wilde Brasilien — mit Naturkundigen Guides, engagierten Lodges und Routen, die jene konkret unterstützen, die den Wald schützen.",
    cta: "Eine Naturreise gestalten",
  },
  philosophy: {
    eyebrow: "Unsere Philosophie",
    title: "Authentisches Erleben.\nBewahrtes Territorium.",
    lead: "Wir reisen, um den Ort kennenzulernen, wie er ist — und kehren wissend zurück, dass er noch da ist, besser als wir ihn fanden.",
    items: [
      { title: "Authentisches Erleben", text: "Echte Menschen, lebendiges Territorium. Naturkundige Guides, Flussgemeinden, Meister:innen lokalen Wissens und Köchinnen, die den Geschmack des Ortes tragen." },
      { title: "Geringer Fußabdruck", text: "Kleine Gruppen, lokale Anbieter, im Rhythmus des Bioms. Wir lehnen Orte und Praktiken ab, die Umwelt oder Gemeinden schädigen." },
      { title: "Aktiver Naturschutz", text: "Jede Reise priorisiert Lodges, Reservate und Anbieter, die Teile ihrer Einnahmen in den Schutz von Fauna und Flora investieren." },
      { title: "Wissen im Feld", text: "Biolog:innen, Wissenschaftler:innen und Einheimische lesen die Landschaft mit dir — damit die Reise Verständnis hinterlässt, nicht nur Fotos." },
    ],
  },
  biomes: {
    eyebrow: "Brasiliens Biome",
    title: "Sechs Welten in einer einzigen Reise",
    lead: "Von den fliegenden Flüssen des Amazonas bis zu den Canyons im äußersten Süden hat jedes Biom seinen Kalender, seine ikonische Tierwelt und seine Hüter.",
    faunaLabel: "Tierwelt",
    floraLabel: "Flora",
    wowLabel: "Landschaftliche Wunder",
  },
  species: {
    eyebrow: "Arten, die wir durch Sehen schützen",
    title: "Seltene Begegnungen, mit Verantwortung",
    lead: "Jede Art trägt die Geschichte ihres Bioms. Wir öffnen die ethischen Wege zu diesen Begegnungen.",
    whereLabel: "Wo man sie ethisch sieht",
  },
  projects: {
    eyebrow: "Seriöse Naturschutzprojekte",
    title: "Wer wirklich auf Brasilien aufpasst",
    lead: "Anerkannte Organisationen mit jahrzehntelanger wissenschaftlicher und gemeinschaftlicher Arbeit. Deine Reise unterstützt das Netzwerk, das ihre Feldarbeit am Leben hält.",
    travelerLabel: "Wie deine Reise unterstützt",
    visit: "Projekt entdecken",
  },
  cycle: {
    eyebrow: "Wie deine Reise bewahrt",
    title: "Der einfache Kreislauf des schützenden Reisens",
    steps: [
      { n: "01", t: "Du reist kuratiert", d: "Eine Route im Takt des Bioms, ohne Gedränge, ohne dem Territorium Wert zu entziehen." },
      { n: "02", t: "Lokale Anbieter werden beauftragt", d: "Naturkundige Guides, Bootsführer, Köchinnen und familiengeführte Lodges werden direkt durch deine Anwesenheit bezahlt." },
      { n: "03", t: "Einkommen bleibt in der Gemeinde", d: "Familien, die vom stehenden Wald leben, haben einen konkreten Grund, ihn stehen zu lassen." },
      { n: "04", t: "Naturschutz trägt sich selbst", d: "Private Reservate, Faunaforschung und Gemeindeüberwachung funktionieren weiter — weil sie Einkommen schaffen." },
    ],
    ctaTitle: "Ich möchte reisen und Brasiliens Natur schützen",
    ctaText: "Erzähle uns, was dich bewegt — Jaguare im Pantanal, Flusslodges im Amazonas, geologische Wanderungen in der Chapada, Meeresschildkröten an der Küste. Wir entwerfen die authentische, schonende Route für dich.",
    ctaButton: "Mit einer Kuratorin sprechen",
    ctaNote: "Antwort zu Geschäftszeiten · Unverbindlich",
  },
  faq: {
    eyebrow: "Häufige Fragen",
    title: "Naturschutz-Tourismus in Brasilien",
    items: [
      { q: "Was ist Naturschutz-Tourismus?", a: "Es ist Reisen, das die Anwesenheit der Besucher:innen in eine Ressource für den Schutz des Territoriums verwandelt: Lodges mit privaten Reservaten, naturkundige Guides, die von lebender Tierwelt abhängen, und Gemeinden, die bewahren, weil Bewahrung Einkommen schafft." },
      { q: "Was sind Brasiliens Biome?", a: "Brasilien hat sechs terrestrische Biome — Amazonas, Cerrado, Atlantischer Regenwald, Caatinga, Pantanal und Pampa — sowie die ausgedehnte Küsten-Meereszone." },
      { q: "Wie erkenne ich, ob eine Reise wirklich nachhaltig ist?", a: "Achte auf drei Zeichen: lokale Anbieter mit echter Bindung zur Gemeinde, kleine Gruppen und Transparenz darüber, wohin das Geld fließt." },
      { q: "Kann ich Jaguare ethisch beobachten?", a: "Ja — das Nord-Pantanal (Porto Jofre, Transpantaneira) hat die höchste bekannte Jaguardichte der Welt, mit etablierten Protokollen respektvoller Bootsbeobachtung." },
      { q: "Welche Projekte unterstützt Create Travel indirekt?", a: "Unsere Routen bevorzugen Partner von Instituto Onça-Pintada, Projeto Tamar, Instituto Arara Azul, AMLD, Instituto Mamirauá, ICAS, SOS Mata Atlântica und Fundação Grupo Boticário." },
      { q: "Können Luxus und geringer Fußabdruck in Brasilien zusammengehen?", a: "Absolut. Eine neue Generation brasilianischer Boutique-Lodges bietet raffinierten Komfort mit verantwortungsvollen Praktiken." },
    ],
  },
  links: { destinos: "Brasilien-Reiseziele ansehen", sobre: "Über Create Travel" },
  whatsappMessage:
    "Hallo, Create Travel! Ich möchte eine Brasilien-Reise mit Fokus auf Natur, Tierwelt und Naturschutz gestalten.",
  iucnStatusLabel: {
    "Pouco preocupante": "Nicht gefährdet",
    "Quase ameaçada": "Potenziell gefährdet",
    Vulnerável: "Gefährdet",
    "Em perigo": "Stark gefährdet",
    "Criticamente ameaçada": "Vom Aussterben bedroht",
    "Extinta na natureza": "In der Natur ausgestorben",
  },
};

export const BRASIL_VIVO_UI: Record<ContentLang, BrasilVivoUI> = {
  pt: PT,
  en: EN,
  es: ES,
  it: IT,
  de: DE,
  fr: "EN",
  he: "EN",
};

/** Translations for the 8 endangered species by id */
export const SPECIES_I18N: Record<
  string,
  Record<ContentLang, { commonName: string; whereToSee: string; whyItMatters: string }>
> = {
  "onca-pintada": {
    pt: { commonName: "Onça-pintada", whereToSee: "Porto Jofre e Transpantaneira (Pantanal Norte), em safáris fluviais com guias-naturalistas locais.", whyItMatters: "Predador de topo: sua presença indica florestas saudáveis. Ápice do turismo de fauna nas Américas." },
    en: { commonName: "Jaguar", whereToSee: "Porto Jofre and Transpantaneira (Northern Pantanal), on river safaris led by local naturalist guides.", whyItMatters: "Apex predator whose presence signals healthy forests and wetlands. The summit of wildlife travel in the Americas." },
    es: { commonName: "Jaguar (Onça-pintada)", whereToSee: "Porto Jofre y Transpantaneira (Pantanal Norte), en safaris fluviales con guías naturalistas locales.", whyItMatters: "Depredador tope: su presencia indica selvas y humedales sanos. La cima del turismo de fauna en las Américas." },
    it: { commonName: "Giaguaro", whereToSee: "Porto Jofre e Transpantaneira (Pantanal Nord), in safari fluviali con guide naturaliste locali.", whyItMatters: "Predatore al vertice: la sua presenza indica foreste sane. Vetta del turismo faunistico nelle Americhe." },
    de: { commonName: "Jaguar", whereToSee: "Porto Jofre und Transpantaneira (Nord-Pantanal), auf Flusssafaris mit lokalen Naturkundigen Guides.", whyItMatters: "Spitzenprädator, dessen Präsenz auf gesunde Wälder hinweist. Höhepunkt des Tier-Tourismus in Amerika." },
    fr: { commonName: "Jaguar", whereToSee: "Porto Jofre et Transpantaneira (Pantanal Nord), lors de safaris fluviaux menés par des guides naturalistes locaux.", whyItMatters: "Prédateur apex dont la présence témoigne de la bonne santé des forêts et des zones humides. Le summum du tourisme animalier dans les Amériques." },
    he: { commonName: "יגואר", whereToSee: "פורטו ז'ופרה וטרנספנטנירה (צפון הפנטנל), בטיולי ספארי בנהר בהובלת מדריכי טבע מקומיים.", whyItMatters: "טורף על שנוכחותו מסמלת יערות ושטחי ביצות בריאים. שיא טיולי חיות הבר באמריקות." },
  },
  "ararinha-azul": {
    pt: { commonName: "Ararinha-azul", whereToSee: "Refúgio de Vida Silvestre Ararinha-azul (BA), em visitas guiadas com ICMBio e ACTP.", whyItMatters: "Reintroduzida na Caatinga após 22 anos extinta na natureza — símbolo mundial da conservação séria." },
    en: { commonName: "Spix's Macaw", whereToSee: "Spix's Macaw Wildlife Refuge (Bahia), on guided visits run with ICMBio and ACTP.", whyItMatters: "Reintroduced in the Caatinga 22 years after extinction in the wild — a global symbol of serious conservation." },
    es: { commonName: "Guacamayo de Spix", whereToSee: "Refugio de Vida Silvestre del Guacamayo de Spix (Bahía), con visitas guiadas de ICMBio y ACTP.", whyItMatters: "Reintroducido en la Caatinga 22 años después de extinguirse — símbolo mundial de conservación rigurosa." },
    it: { commonName: "Ara di Spix", whereToSee: "Rifugio Faunistico dell'Ara di Spix (Bahia), con visite guidate da ICMBio e ACTP.", whyItMatters: "Reintrodotta nella Caatinga 22 anni dopo l'estinzione in natura — simbolo mondiale di conservazione seria." },
    de: { commonName: "Spix-Ara", whereToSee: "Spix-Ara-Schutzgebiet (Bahia), bei geführten Besuchen mit ICMBio und ACTP.", whyItMatters: "22 Jahre nach dem Aussterben in der Natur in der Caatinga wieder angesiedelt — weltweites Symbol ernsthaften Naturschutzes." },
    fr: { commonName: "Ara de Spix", whereToSee: "Refuge faunique de l'Ara de Spix (Bahia), lors de visites guidées organisées avec l'ICMBio et l'ACTP.", whyItMatters: "Réintroduit dans la Caatinga 22 ans après son extinction à l'état sauvage – un symbole mondial de conservation sérieuse." },
    he: { commonName: "ארה של ספיקס", whereToSee: "מקלט חיות הבר של ארת ספיקס (באהיה), בסיורים מודרכים המנוהלים עם ICMBio ו-ACTP.", whyItMatters: "הושב לקאטינגה 22 שנים לאחר הכחדתו בטבע - סמל עולמי לשימור רציני." },
  },
  "mico-leao-dourado": {
    pt: { commonName: "Mico-leão-dourado", whereToSee: "Reserva Poço das Antas e Silva Jardim (RJ), com guias da AMLD.", whyItMatters: "Endêmico da Mata Atlântica fluminense. Sua recuperação inspirou os corredores ecológicos no Brasil." },
    en: { commonName: "Golden Lion Tamarin", whereToSee: "Poço das Antas Reserve and Silva Jardim (Rio de Janeiro), with AMLD guides.", whyItMatters: "Endemic to Rio's Atlantic Forest. Its recovery inspired Brazil's ecological corridor concept." },
    es: { commonName: "Tití león dorado", whereToSee: "Reserva Poço das Antas y Silva Jardim (RJ), con guías de AMLD.", whyItMatters: "Endémico de la Mata Atlántica fluminense. Su recuperación inspiró los corredores ecológicos en Brasil." },
    it: { commonName: "Tamarino leone dorato", whereToSee: "Riserva Poço das Antas e Silva Jardim (RJ), con guide AMLD.", whyItMatters: "Endemico della Foresta Atlantica di Rio. Il suo recupero ha ispirato i corridoi ecologici in Brasile." },
    de: { commonName: "Goldlöwenäffchen", whereToSee: "Reservat Poço das Antas und Silva Jardim (Rio), mit Guides der AMLD.", whyItMatters: "Endemisch im Atlantischen Regenwald von Rio. Seine Erholung inspirierte Brasiliens Ökokorridore." },
    fr: { commonName: "Tamarin-lion doré", whereToSee: "Réserve de Poço das Antas et Silva Jardim (Rio de Janeiro), avec les guides de l'AMLD.", whyItMatters: "Endémique de la Forêt Atlantique de Rio. Son rétablissement a inspiré le concept de couloir écologique du Brésil." },
    he: { commonName: "טמרין רעמתי זהוב", whereToSee: "שמורת פוסו דאס אנטאס וסילבה ז'ארדים (ריו דה ז'ניירו), עם מדריכי AMLD.", whyItMatters: "אנדמי ליער האטלנטי של ריו. שיקומו שימש השראה לקונספט המסדרון האקולוגי של ברזיל." },
  },
  "lobo-guara": {
    pt: { commonName: "Lobo-guará", whereToSee: "Santuário do Caraça (MG), em observação noturna respeitosa — pesquisa há 40+ anos.", whyItMatters: "O maior canídeo da América do Sul. Sintetiza a importância do Cerrado como savana viva e ameaçada." },
    en: { commonName: "Maned Wolf", whereToSee: "Caraça Sanctuary (Minas Gerais), in respectful nighttime observation — 40+ years of research.", whyItMatters: "South America's largest canid. Embodies the importance of the Cerrado as a living, threatened savanna." },
    es: { commonName: "Aguará guazú", whereToSee: "Santuario do Caraça (MG), en observación nocturna respetuosa — más de 40 años de investigación.", whyItMatters: "El mayor cánido de Sudamérica. Sintetiza la importancia del Cerrado como sabana viva y amenazada." },
    it: { commonName: "Lupo dalla criniera", whereToSee: "Santuario del Caraça (MG), in osservazione notturna rispettosa — oltre 40 anni di ricerca.", whyItMatters: "Il più grande canide del Sud America. Sintetizza l'importanza del Cerrado come savana viva e minacciata." },
    de: { commonName: "Mähnenwolf", whereToSee: "Caraça-Heiligtum (Minas Gerais), in respektvoller Nachtbeobachtung — über 40 Jahre Forschung.", whyItMatters: "Südamerikas größter Hundeartiger. Verkörpert die Bedeutung des Cerrado als lebende, bedrohte Savanne." },
    fr: { commonName: "Loup à crinière", whereToSee: "Sanctuaire de Caraça (Minas Gerais), en observation nocturne respectueuse — plus de 40 ans de recherche.", whyItMatters: "Le plus grand canidé d'Amérique du Sud. Il incarne l'importance du Cerrado en tant que savane vivante et menacée." },
    he: { commonName: "זאב רעמתי", whereToSee: "שמורת קראסה (מינאס ז'ראיס), בתצפית לילה מכבדת — 40+ שנות מחקר.", whyItMatters: "הכלבני הגדול ביותר בדרום אמריקה. מגלם את חשיבות הסראדו כסוואנה חיה ומאוימת." },
  },
  "peixe-boi-amazonia": {
    pt: { commonName: "Peixe-boi-da-Amazônia", whereToSee: "Centros do INPA e Instituto Mamirauá (AM), em visitas educativas — nunca como atração.", whyItMatters: "Maior mamífero aquático do Brasil. Depende de várzeas íntegras — sua história é a dos rios e ribeirinhos." },
    en: { commonName: "Amazonian Manatee", whereToSee: "INPA and Instituto Mamirauá centers (Amazonas), in educational visits — never as a show.", whyItMatters: "Brazil's largest aquatic mammal. Depends on intact floodplains — its story is the story of the rivers and their people." },
    es: { commonName: "Manatí amazónico", whereToSee: "Centros del INPA e Instituto Mamirauá (AM), en visitas educativas — nunca como atracción.", whyItMatters: "Mayor mamífero acuático de Brasil. Depende de várzeas íntegras — su historia es la de los ríos y ribereños." },
    it: { commonName: "Lamantino amazzonico", whereToSee: "Centri INPA e Instituto Mamirauá (Amazonas), in visite educative — mai come attrazione.", whyItMatters: "Il più grande mammifero acquatico del Brasile. Dipende dalle várzeas integre — la sua storia è quella dei fiumi e delle popolazioni rivierasche." },
    de: { commonName: "Amazonas-Manati", whereToSee: "Zentren von INPA und Instituto Mamirauá (Amazonas), bei pädagogischen Besuchen — nie als Attraktion.", whyItMatters: "Brasiliens größtes Wassersäugetier. Hängt von intakten Überschwemmungsflächen ab — seine Geschichte ist die der Flüsse und Flussanwohner." },
    fr: { commonName: "Lamantin d'Amazonie", whereToSee: "Centres de l'INPA et de l'Instituto Mamirauá (Amazonas), lors de visites éducatives — jamais comme un spectacle.", whyItMatters: "Le plus grand mammifère aquatique du Brésil. Dépend des plaines inondables intactes — son histoire est l'histoire des fleuves et de leurs habitants." },
    he: { commonName: "מנאטי אמזוני", whereToSee: "מרכזי INPA ומכון ממיראואה (אמזונס), בביקורים חינוכיים – לעולם לא כהופעה.", whyItMatters: "היונק המימי הגדול ביותר בברזיל. תלוי במישורים מוצפים שלמים – הסיפור שלו הוא הסיפור של הנהרות ואנשיהם." },
  },
  "tamandua-bandeira": {
    pt: { commonName: "Tamanduá-bandeira", whereToSee: "Pantanal Sul (Fazenda Baía das Pedras) e Parque Nacional das Emas (GO), em safáris diurnos.", whyItMatters: "Mais atropelado que caçado: conservá-lo é planejar estradas e fogo." },
    en: { commonName: "Giant Anteater", whereToSee: "Southern Pantanal (Fazenda Baía das Pedras) and Emas National Park (Goiás), in daytime safaris.", whyItMatters: "More victim of roads than of hunting: protecting it means planning highways and managing fire." },
    es: { commonName: "Oso hormiguero gigante", whereToSee: "Pantanal Sur (Fazenda Baía das Pedras) y Parque Nacional das Emas (GO), en safaris diurnos.", whyItMatters: "Más atropellado que cazado: conservarlo es planificar carreteras y el fuego." },
    it: { commonName: "Formichiere gigante", whereToSee: "Pantanal Sud (Fazenda Baía das Pedras) e Parco Nazionale delle Emas (GO), in safari diurni.", whyItMatters: "Più investito che cacciato: tutelarlo significa pianificare strade e gestire il fuoco." },
    de: { commonName: "Riesenameisenbär", whereToSee: "Süd-Pantanal (Fazenda Baía das Pedras) und Emas-Nationalpark (Goiás), bei Tagessafaris.", whyItMatters: "Häufiger Opfer von Straßen als von Jagd: ihn zu schützen heißt Straßen planen und Feuer managen." },
    fr: { commonName: "Grand Fourmilier", whereToSee: "Sud du Pantanal (Fazenda Baía das Pedras) et Parc National d'Emas (Goiás), lors de safaris diurnes.", whyItMatters: "Plus victime des routes que de la chasse : le protéger signifie planifier les autoroutes et gérer les incendies." },
    he: { commonName: "דובי נמלים גדול", whereToSee: "דרום הפנטנל (Fazenda Baía das Pedras) ופארק לאומי עמאס (Goiás), בספארי יום.", whyItMatters: "יותר קורבן של כבישים מאשר של ציד: הגנה עליו פירושה תכנון כבישים מהירים וניהול שריפות." },
  },
  "tatu-canastra": {
    pt: { commonName: "Tatu-canastra", whereToSee: "Pantanal de Aquidauana e Nhecolândia, com pesquisadores do ICAS.", whyItMatters: "Engenheiro de paisagem: suas tocas abrigam mais de 80 espécies. Vê-lo é raro até para quem mora ali." },
    en: { commonName: "Giant Armadillo", whereToSee: "Pantanal of Aquidauana and Nhecolândia, on expeditions with ICAS researchers.", whyItMatters: "A landscape engineer: its burrows shelter 80+ species. Seeing one is rare even for locals." },
    es: { commonName: "Armadillo gigante", whereToSee: "Pantanal de Aquidauana y Nhecolândia, con investigadores de ICAS.", whyItMatters: "Ingeniero del paisaje: sus madrigueras albergan más de 80 especies. Verlo es raro incluso para los locales." },
    it: { commonName: "Armadillo gigante", whereToSee: "Pantanal di Aquidauana e Nhecolândia, con ricercatori dell'ICAS.", whyItMatters: "Ingegnere del paesaggio: le sue tane ospitano oltre 80 specie. Vederlo è raro persino per chi ci vive." },
    de: { commonName: "Riesengürteltier", whereToSee: "Pantanal von Aquidauana und Nhecolândia, mit Forscher:innen des ICAS.", whyItMatters: "Landschaftsingenieur: seine Baue beherbergen 80+ Arten. Selbst Einheimische sehen es selten." },
    fr: { commonName: "Tatou Géant", whereToSee: "Pantanal d'Aquidauana et Nhecolândia, lors d'expéditions avec les chercheurs de l'ICAS.", whyItMatters: "Un ingénieur paysagiste : ses terriers abritent plus de 80 espèces. En voir un est rare même pour les habitants." },
    he: { commonName: "ארמדיל ענק", whereToSee: "הפנטנל של אקידאואנה ונהקולנדייא, במשלחות עם חוקרי ICAS.", whyItMatters: "מהנדס נוף: מחילותיו מספקות מחסה ליותר מ-80 מינים. לראות אחד זה נדיר גם למקומיים." },
  },
  "tartaruga-de-pente": {
    pt: { commonName: "Tartaruga-de-pente", whereToSee: "Bases do Projeto Tamar em Praia do Forte (BA), Noronha (PE) e Pipa (RN).", whyItMatters: "Espécie-bandeira dos recifes do Atlântico Sul. Cada desova protegida é vitória de décadas de trabalho comunitário." },
    en: { commonName: "Hawksbill Sea Turtle", whereToSee: "Projeto Tamar bases in Praia do Forte (Bahia), Fernando de Noronha and Pipa.", whyItMatters: "Flagship species of the South Atlantic reefs. Each protected nesting is a victory of decades of community work." },
    es: { commonName: "Tortuga carey", whereToSee: "Bases del Projeto Tamar en Praia do Forte (BA), Noronha (PE) y Pipa (RN).", whyItMatters: "Especie bandera de los arrecifes del Atlántico Sur. Cada desove protegido es una victoria de décadas de trabajo comunitario." },
    it: { commonName: "Tartaruga embricata", whereToSee: "Basi del Projeto Tamar a Praia do Forte (BA), Noronha (PE) e Pipa (RN).", whyItMatters: "Specie bandiera delle barriere dell'Atlantico Sud. Ogni nidificazione protetta è una vittoria di decenni di lavoro comunitario." },
    de: { commonName: "Echte Karettschildkröte", whereToSee: "Stationen des Projeto Tamar in Praia do Forte (BA), Noronha (PE) und Pipa (RN).", whyItMatters: "Leitart der Riffe des Südatlantiks. Jedes geschützte Gelege ist ein Sieg jahrzehntelanger Gemeindearbeit." },
    fr: { commonName: "Tortue imbriquée", whereToSee: "Bases du Projeto Tamar à Praia do Forte (Bahia), Fernando de Noronha et Pipa.", whyItMatters: "Espèce phare des récifs de l'Atlantique Sud. Chaque nidification protégée est une victoire de décennies de travail communautaire." },
    he: { commonName: "צב ים קרני", whereToSee: "בסיסי פרוג'טו טאמאר בפראיה דו פורטה (בהיה), פרננדו דה נורוניה ופיפה.", whyItMatters: "מין דגל של שוניות דרום האוקיינוס האטלנטי. כל קינון מוגן הוא ניצחון של עשרות שנים של עבודה קהילתית." },
  },
};

/** Translations for the 8 conservation projects by id */
export const PROJECTS_I18N: Record<
  string,
  Record<ContentLang, { focus: string; description: string; travelerLink: string }>
> = {
  "instituto-onca-pintada": {
    pt: { focus: "Pesquisa e proteção da onça-pintada no Cerrado e Pantanal", description: "Há mais de 20 anos monitora populações de onças, capacita fazendeiros para coexistência e cria protocolos de manejo de referência internacional.", travelerLink: "Hospedar-se em fazendas-parceiras do Pantanal que adotam manejo coexistente garante renda à conservação e reduz retaliação contra a espécie." },
    en: { focus: "Research and protection of the jaguar in the Cerrado and Pantanal", description: "For over 20 years has monitored jaguar populations, trained ranchers in coexistence and built management protocols that became an international reference.", travelerLink: "Staying at partner ranches in the Pantanal that adopt coexistence management channels direct income to conservation and reduces retaliation against the species." },
    es: { focus: "Investigación y protección del jaguar en el Cerrado y Pantanal", description: "Desde hace más de 20 años monitorea poblaciones de jaguares, capacita a ganaderos para la coexistencia y crea protocolos de manejo de referencia internacional.", travelerLink: "Hospedarse en estancias socias del Pantanal con manejo coexistente garantiza renta a la conservación y reduce la retaliación contra la especie." },
    it: { focus: "Ricerca e protezione del giaguaro nel Cerrado e Pantanal", description: "Da oltre 20 anni monitora le popolazioni di giaguaro, forma gli allevatori alla coesistenza e crea protocolli di gestione di riferimento internazionale.", travelerLink: "Soggiornare in fazendas partner del Pantanal con gestione di coesistenza garantisce reddito alla conservazione e riduce le ritorsioni contro la specie." },
    de: { focus: "Forschung und Schutz des Jaguars im Cerrado und Pantanal", description: "Überwacht seit über 20 Jahren Jaguarpopulationen, schult Rancher in Koexistenz und entwickelte international anerkannte Management-Protokolle.", travelerLink: "Übernachten auf Partner-Fazendas im Pantanal mit Koexistenz-Management leitet Einkommen direkt in den Naturschutz und reduziert Vergeltungstötungen." },
    fr: { focus: "Recherche et protection du jaguar dans le Cerrado et le Pantanal", description: "Depuis plus de 20 ans, elle suit les populations de jaguars, forme les éleveurs à la coexistence et élabore des protocoles de gestion qui sont devenus une référence internationale.", travelerLink: "Séjourner dans des ranchs partenaires du Pantanal qui adoptent une gestion de la coexistence génère un revenu direct pour la conservation et réduit les représailles contre l'espèce." },
    he: { focus: "מחקר והגנה על היגואר בסראדו ובפנטנל", description: "במשך למעלה מ-20 שנה עקבה אחר אוכלוסיות יגוארים, אימנה חוואים בדו-קיום ובנתה פרוטוקולי ניהול שהפכו לאסמכתא בינלאומית.", travelerLink: "שהייה בחוות שותפים בפנטנל המאמצות ניהול דו-קיום מכוונת הכנסה ישירה לשימור ומפחיתה תגמול נגד המין." },
  },
  "projeto-tamar": {
    pt: { focus: "Conservação de tartarugas marinhas no litoral brasileiro", description: "Fundado em 1980, protege cinco espécies em 25 bases litorâneas. Já liberou mais de 40 milhões de filhotes ao mar com apoio de comunidades pesqueiras.", travelerLink: "Visitar uma base Tamar (Praia do Forte, Noronha, Pipa) financia a vigilância de praias e a educação ambiental de jovens locais." },
    en: { focus: "Conservation of marine turtles along the Brazilian coast", description: "Founded in 1980, protects five species across 25 coastal bases. Has released over 40 million hatchlings to the sea with the support of fishing communities.", travelerLink: "Visiting a Tamar base (Praia do Forte, Noronha, Pipa) directly funds beach monitoring and environmental education for local youth." },
    es: { focus: "Conservación de tortugas marinas en el litoral brasileño", description: "Fundado en 1980, protege cinco especies en 25 bases costeras. Ha liberado más de 40 millones de crías al mar con apoyo de comunidades pesqueras.", travelerLink: "Visitar una base Tamar (Praia do Forte, Noronha, Pipa) financia la vigilancia de playas y la educación ambiental de jóvenes locales." },
    it: { focus: "Conservazione delle tartarughe marine lungo la costa brasiliana", description: "Fondato nel 1980, protegge cinque specie in 25 basi costiere. Ha rilasciato in mare oltre 40 milioni di piccoli con il supporto di comunità di pescatori.", travelerLink: "Visitare una base Tamar (Praia do Forte, Noronha, Pipa) finanzia la vigilanza delle spiagge e l'educazione ambientale dei giovani locali." },
    de: { focus: "Schutz der Meeresschildkröten an Brasiliens Küste", description: "Gegründet 1980, schützt fünf Arten in 25 Küstenstationen. Hat über 40 Millionen Jungtiere ins Meer entlassen, gemeinsam mit Fischergemeinden.", travelerLink: "Der Besuch einer Tamar-Station (Praia do Forte, Noronha, Pipa) finanziert direkt Strandüberwachung und Umweltbildung lokaler Jugendlicher." },
    fr: { focus: "Conservation des tortues marines le long de la côte brésilienne", description: "Fondée en 1980, protège cinq espèces à travers 25 bases côtières. A relâché plus de 40 millions de nouveau-nés à la mer avec le soutien des communautés de pêcheurs.", travelerLink: "La visite d'une base Tamar (Praia do Forte, Noronha, Pipa) finance directement la surveillance des plages et l'éducation environnementale des jeunes locaux." },
    he: { focus: "שימור צבי ים לאורך החוף הברזילאי", description: "נוסד ב-1980, מגן על חמישה מינים ב-25 בסיסים לאורך החוף. שחרר למעלה מ-40 מיליון אבקועים לים בתמיכת קהילות דיג.", travelerLink: "ביקור בבסיס תמר (פראיה דו פורטה, נורוניה, פיפה) מממן ישירות ניטור חופים וחינוך סביבתי לנוער המקומי." },
  },
  "instituto-arara-azul": {
    pt: { focus: "Proteção da arara-azul-grande no Pantanal e Cerrado", description: "Trouxe a arara-azul-grande da beira da extinção (1990) para mais de 6.500 indivíduos hoje, com ninhos artificiais e parceria com pecuaristas.", travelerLink: "Roteiros pelo Pantanal Sul (Buraco das Araras, Aquidauana) financiam ninhos e a proteção das árvores manduvi, essenciais para a espécie." },
    en: { focus: "Protection of the Hyacinth Macaw in the Pantanal and Cerrado", description: "Brought the Hyacinth Macaw from the brink of extinction (1990) to more than 6,500 individuals today, through artificial nests and partnerships with ranchers.", travelerLink: "Trips through the Southern Pantanal (Buraco das Araras, Aquidauana) fund nesting management and the protection of the manduvi trees the species needs." },
    es: { focus: "Protección del guacamayo jacinto en el Pantanal y Cerrado", description: "Llevó al guacamayo jacinto del borde de la extinción (1990) a más de 6.500 individuos hoy, con nidos artificiales y alianzas con ganaderos.", travelerLink: "Viajes por el Pantanal Sur (Buraco das Araras, Aquidauana) financian nidos y la protección de los manduvi, esenciales para la especie." },
    it: { focus: "Protezione dell'ara giacinto nel Pantanal e Cerrado", description: "Ha portato l'ara giacinto dall'orlo dell'estinzione (1990) a oltre 6.500 individui oggi, con nidi artificiali e collaborazioni con allevatori.", travelerLink: "Viaggi nel Pantanal Sud (Buraco das Araras, Aquidauana) finanziano i nidi e la protezione degli alberi manduvi, essenziali per la specie." },
    de: { focus: "Schutz des Hyazinth-Aras im Pantanal und Cerrado", description: "Brachte den Hyazinth-Ara vom Rand des Aussterbens (1990) zurück auf heute über 6.500 Individuen, mit künstlichen Nestern und Rancherpartnerschaften.", travelerLink: "Reisen durchs Süd-Pantanal (Buraco das Araras, Aquidauana) finanzieren Nester und den Schutz der für die Art essenziellen Manduvi-Bäume." },
    fr: { focus: "Protection de l'Ara hyacinthe dans le Pantanal et le Cerrado", description: "A sauvé l'Ara hyacinthe du bord de l'extinction (1990) à plus de 6 500 individus aujourd'hui, grâce à des nids artificiels et des partenariats avec des éleveurs.", travelerLink: "Les voyages à travers le Pantanal sud (Buraco das Araras, Aquidauana) financent la gestion des nids et la protection des arbres manduvi dont l'espèce a besoin." },
    he: { focus: "הגנה על תוכי ההיאסינת' בפנטנל ובסראדו", description: "הציל את תוכי ההיאסינת' מסף הכחדה (1990) ליותר מ-6,500 פרטים כיום, באמצעות קינים מלאכותיים ושותפויות עם חוואים.", travelerLink: "טיולים דרך הפנטנל הדרומי (בוראקו דאס אראראס, אקוידאואנה) מממנים את ניהול הקינון וההגנה על עצי המנדובי שהמין זקוק להם." },
  },
  "amld-mico-leao-dourado": {
    pt: { focus: "Recuperação do mico-leão-dourado e corredores na Mata Atlântica", description: "Trouxe a espécie de menos de 200 indivíduos para mais de 4.800. Pioneira em corredores ecológicos sobre rodovias e plantio comunitário.", travelerLink: "Roteiros pela Costa Verde fluminense com visita à reserva Poço das Antas convertem o desejo de ver o mico em proteção real do hábitat." },
    en: { focus: "Recovery of the Golden Lion Tamarin and Atlantic Forest corridors", description: "Brought the species from fewer than 200 individuals to over 4,800. Pioneer of ecological corridors over highways and community-led reforestation in Brazil.", travelerLink: "Trips along Rio's Costa Verde with a guided visit to Poço das Antas turn the desire to see the tamarin into real habitat protection." },
    es: { focus: "Recuperación del tití león dorado y corredores en la Mata Atlántica", description: "Llevó la especie de menos de 200 individuos a más de 4.800. Pionera en corredores ecológicos sobre carreteras y reforestación comunitaria.", travelerLink: "Viajes por la Costa Verde fluminense con visita a Poço das Antas convierten el deseo de ver al tití en protección real del hábitat." },
    it: { focus: "Recupero del tamarino leone dorato e corridoi nella Foresta Atlantica", description: "Ha portato la specie da meno di 200 individui a oltre 4.800. Pioniera nei corridoi ecologici sopra le autostrade e nel rimboschimento comunitario.", travelerLink: "Viaggi lungo la Costa Verde di Rio con visita guidata a Poço das Antas trasformano il desiderio di vedere il tamarino in protezione reale dell'habitat." },
    de: { focus: "Wiederherstellung des Goldlöwenäffchens und Korridore im Atlantischen Regenwald", description: "Brachte die Art von weniger als 200 Tieren auf über 4.800. Pionier ökologischer Korridore über Autobahnen und gemeinschaftlicher Aufforstung.", travelerLink: "Reisen entlang der Costa Verde von Rio mit Besuch in Poço das Antas verwandeln den Wunsch, das Äffchen zu sehen, in realen Habitatschutz." },
    fr: { focus: "Récupération du Tamarin Lion Doré et des corridors de la Forêt Atlantique", description: "A fait passer l'espèce de moins de 200 individus à plus de 4 800. Pionnier des corridors écologiques au-dessus des autoroutes et de la reforestation dirigée par la communauté au Brésil.", travelerLink: "Les voyages le long de la Costa Verde de Rio avec une visite guidée à Poço das Antas transforment le désir de voir le tamarin en une protection réelle de l'habitat." },
    he: { focus: "התאוששות של טמרין אריה זהוב ופרוזדורי יער האטלנטי", description: "הביא את המין מ-פחות מ-200 פרטים ליותר מ-4,800. חלוץ של מסדרונות אקולוגיים מעל כבישים מהירים ושיקום יערות בהובלת קהילה בברזיל.", travelerLink: "טיולים לאורך קוסטה ורדה של ריו עם ביקור מודרך בפוסו דאס אנטס הופכים את הרצון לראות את הטמרין להגנת בתי גידול אמיתית." },
  },
  "instituto-mamiraua": {
    pt: { focus: "Manejo participativo na várzea amazônica", description: "Unidade de pesquisa do MCTI que combina ciência e comunidades ribeirinhas no maior arquipélago fluvial do mundo. Modelo mundial de uso sustentável.", travelerLink: "Hospedar-se na Pousada Uacari (gerida pelas comunidades de Mamirauá) é a forma mais direta de financiar pesquisa e renda local na várzea." },
    en: { focus: "Participatory management in the Amazon floodplains", description: "Government research unit that combines science with riverside communities in the world's largest river archipelago. A global model of sustainable use.", travelerLink: "Staying at Pousada Uacari (run by the Mamirauá communities) is the most direct way to fund research and local livelihoods in the floodplains." },
    es: { focus: "Manejo participativo en la várzea amazónica", description: "Unidad de investigación que combina ciencia y comunidades ribereñas en el mayor archipiélago fluvial del mundo. Modelo mundial de uso sostenible.", travelerLink: "Hospedarse en la Pousada Uacari (gestionada por las comunidades de Mamirauá) es la forma más directa de financiar investigación y renta local." },
    it: { focus: "Gestione partecipativa nelle várzeas amazzoniche", description: "Unità di ricerca che unisce scienza e comunità rivierasche nel più grande arcipelago fluviale del mondo. Modello mondiale di uso sostenibile.", travelerLink: "Soggiornare alla Pousada Uacari (gestita dalle comunità di Mamirauá) è il modo più diretto di finanziare ricerca e reddito locale nelle várzeas." },
    de: { focus: "Partizipative Verwaltung im Amazonas-Überschwemmungswald", description: "Forschungseinheit, die Wissenschaft und Flussgemeinden im größten Flussarchipel der Welt verbindet. Weltweites Modell nachhaltiger Nutzung.", travelerLink: "Ein Aufenthalt in der Pousada Uacari (von den Mamirauá-Gemeinden geführt) ist der direkteste Weg, Forschung und lokales Einkommen zu finanzieren." },
    fr: { focus: "Gestion participative dans les plaines inondables de l'Amazonie", description: "Unité de recherche gouvernementale qui combine la science avec les communautés riveraines dans le plus grand archipel fluvial du monde. Un modèle mondial d'utilisation durable.", travelerLink: "Séjourner à la Pousada Uacari (gérée par les communautés de Mamirauá) est le moyen le plus direct de financer la recherche et les moyens de subsistance locaux dans les plaines inondables." },
    he: { focus: "ניהול שיתופי במישורי ההצפה של האמזונס", description: "יחידת מחקר ממשלתית המשלבת מדע עם קהילות גדות הנהר בארכיפלג הנהרות הגדול בעולם. מודל גלובלי של שימוש בר קיימא.", travelerLink: "לינה בפוסאדה אואקארי (המנוהלת על ידי קהילות ממיראוא) היא הדרך הישירה ביותר לממן מחקר ופרנסה מקומית במישורי ההצפה." },
  },
  "sos-mata-atlantica": {
    pt: { focus: "Restauração e monitoramento da Mata Atlântica", description: "Maior ONG ambiental brasileira voltada à Mata Atlântica. Plantou mais de 50 milhões de mudas e monitora o desmatamento por satélite.", travelerLink: "Roteiros pela Serra do Mar, Bocaina e Costa Verde podem incluir trilhas em áreas de restauração apoiadas pela rede de viveiros parceiros." },
    en: { focus: "Restoration and monitoring of the Atlantic Forest", description: "Brazil's largest environmental NGO focused on the Atlantic Forest. Has planted over 50 million seedlings and monitors deforestation by satellite.", travelerLink: "Trips through Serra do Mar, Bocaina and Costa Verde can include hikes in restoration areas supported by the network of partner nurseries." },
    es: { focus: "Restauración y monitoreo de la Mata Atlántica", description: "Mayor ONG ambiental brasileña dedicada a la Mata Atlántica. Plantó más de 50 millones de plántulas y monitorea la deforestación por satélite.", travelerLink: "Viajes por la Serra do Mar, Bocaina y Costa Verde pueden incluir senderos en áreas de restauración apoyadas por la red de viveros socios." },
    it: { focus: "Restauro e monitoraggio della Foresta Atlantica", description: "La più grande ONG ambientale brasiliana dedicata alla Foresta Atlantica. Ha piantato oltre 50 milioni di piantine e monitora la deforestazione via satellite.", travelerLink: "I viaggi nella Serra do Mar, Bocaina e Costa Verde possono includere trekking in aree di restauro supportate dalla rete di vivai partner." },
    de: { focus: "Wiederherstellung und Überwachung des Atlantischen Regenwalds", description: "Brasiliens größte Umwelt-NGO für den Atlantischen Regenwald. Hat über 50 Millionen Setzlinge gepflanzt und überwacht Entwaldung per Satellit.", travelerLink: "Reisen durch Serra do Mar, Bocaina und Costa Verde können Wanderungen in Wiederaufforstungsgebieten der Partnergärtnereien einschließen." },
    fr: { focus: "Restauration et suivi de la Forêt Atlantique", description: "La plus grande ONG environnementale du Brésil axée sur la Forêt Atlantique. Elle a planté plus de 50 millions de semis et surveille la déforestation par satellite.", travelerLink: "Les voyages à travers la Serra do Mar, la Bocaina et la Costa Verde peuvent inclure des randonnées dans des zones de restauration soutenues par le réseau de pépinières partenaires." },
    he: { focus: "שיקום וניטור יער האטלנטי", description: "הארגון הסביבתי הגדול ביותר בברזיל המתמקד ביער האטלנטי. שתל למעלה מ-50 מיליון שתילים ומנטר כריתת יערות באמצעות לוויין.", travelerLink: "טיולים דרך סרה דו מאר, בוקאינה וקוסטה ורדה יכולים לכלול טיולי הליכה באזורי שיקום הנתמכים על ידי רשת המשתלות השותפות." },
  },
  "icas-tatu-canastra": {
    pt: { focus: "Pesquisa de fauna silvestre no Cerrado e Pantanal", description: "Pesquisa de longo prazo sobre tatu-canastra, anta-brasileira e tamanduá-bandeira, com agenda forte em redução de atropelamentos e queimadas.", travelerLink: "Expedições de fauna em Aquidauana e na Nhecolândia podem incluir visitas de campo, com logística contratada de comunidades locais." },
    en: { focus: "Wildlife research in the Cerrado and Pantanal", description: "Long-term research on the giant armadillo, lowland tapir and giant anteater, with a strong agenda on reducing road kills and fires.", travelerLink: "Wildlife expeditions in Aquidauana and Nhecolândia can include field visits, with logistics contracted from local communities." },
    es: { focus: "Investigación de fauna silvestre en el Cerrado y Pantanal", description: "Investigación de largo plazo sobre armadillo gigante, tapir y oso hormiguero gigante, con foco en reducir atropellamientos e incendios.", travelerLink: "Expediciones de fauna en Aquidauana y Nhecolândia pueden incluir visitas de campo, con logística contratada a comunidades locales." },
    it: { focus: "Ricerca sulla fauna selvatica nel Cerrado e Pantanal", description: "Ricerca a lungo termine su armadillo gigante, tapiro e formichiere gigante, con forte agenda sulla riduzione di investimenti stradali e incendi.", travelerLink: "Spedizioni faunistiche ad Aquidauana e Nhecolândia possono includere visite sul campo, con logistica affidata alle comunità locali." },
    de: { focus: "Wildtierforschung im Cerrado und Pantanal", description: "Langzeitforschung zu Riesengürteltier, Flachland-Tapir und Riesenameisenbär, mit starkem Fokus auf weniger Straßentote und Brände.", travelerLink: "Wildtierexpeditionen in Aquidauana und Nhecolândia können Feldbesuche umfassen, mit Logistik durch lokale Gemeinden." },
    fr: { focus: "Recherche sur la faune dans le Cerrado et le Pantanal", description: "Recherche à long terme sur l'armadillo géant, le tapir des basses terres et le fourmilier géant, avec un fort programme de réduction des accidents routiers et des incendies.", travelerLink: "Les expéditions animalières à Aquidauana et Nhecolândia peuvent inclure des visites sur le terrain, avec une logistique contractée auprès des communautés locales." },
    he: { focus: "מחקר חיות בר בסראדו ובפנטנל", description: "מחקר ארוך טווח על הארמדילו הענק, הטאפיר של השפלה ודובי הנמלים הענקיים, עם סדר יום חזק להפחתת הרוגים בכבישים ושריפות.", travelerLink: "משלחות חיות בר באקווידאונה ונאקולנדייה יכולות לכלול ביקורי שטח, כאשר הלוגיסטיקה נחתמת מול הקהילות המקומיות." },
  },
  "fundacao-boticario": {
    pt: { focus: "Conservação da natureza em múltiplos biomas", description: "Mantém duas das maiores reservas privadas do país (Salto Morato e Serra do Tombador) e financia centenas de iniciativas científicas há 30+ anos.", travelerLink: "Reservas como Salto Morato (PR) podem entrar como dia de caminhada em roteiros pelo litoral do Paraná — visitação responsável apoia a manutenção." },
    en: { focus: "Nature conservation across multiple biomes", description: "Maintains two of Brazil's largest private reserves (Salto Morato and Serra do Tombador) and has funded hundreds of scientific initiatives for over 30 years.", travelerLink: "Reserves like Salto Morato (Paraná) can be added as a hiking day in itineraries along the Paraná coast — responsible visits support upkeep." },
    es: { focus: "Conservación de la naturaleza en múltiples biomas", description: "Mantiene dos de las mayores reservas privadas del país (Salto Morato y Serra do Tombador) y financia cientos de iniciativas científicas hace 30+ años.", travelerLink: "Reservas como Salto Morato (PR) pueden incluirse como día de caminata en itinerarios por la costa de Paraná — la visita responsable apoya el mantenimiento." },
    it: { focus: "Conservazione della natura in più biomi", description: "Gestisce due delle maggiori riserve private del Paese (Salto Morato e Serra do Tombador) e finanzia centinaia di iniziative scientifiche da oltre 30 anni.", travelerLink: "Riserve come Salto Morato (PR) possono entrare come giornata di trekking negli itinerari lungo la costa del Paraná — la visita responsabile sostiene la manutenzione." },
    de: { focus: "Naturschutz in mehreren Biomen", description: "Unterhält zwei der größten Privatreservate Brasiliens (Salto Morato und Serra do Tombador) und fördert seit über 30 Jahren Hunderte wissenschaftlicher Initiativen.", travelerLink: "Reservate wie Salto Morato (Paraná) lassen sich als Wandertag in Routen entlang der Paraná-Küste einbauen — verantwortungsvoller Besuch unterstützt den Erhalt." },
    fr: { focus: "Conservation de la nature à travers de multiples biomes", description: "Maintient deux des plus grandes réserves privées du Brésil (Salto Morato et Serra do Tombador) et a financé des centaines d'initiatives scientifiques pendant plus de 30 ans.", travelerLink: "Des réserves comme le Salto Morato (Paraná) peuvent être ajoutées comme journée de randonnée dans les itinéraires le long de la côte du Paraná — les visites responsables soutiennent l'entretien." },
    he: { focus: "שימור הטבע על פני ביומות מרובות", description: "מתחזק שתיים מהשמורות הפרטיות הגדולות ביותר בברזיל (סלטו מוראטו וסרה דו טומבדור) ומימן מאות יוזמות מדעיות במשך למעלה מ-30 שנה.", travelerLink: "שמורות כמו סלטו מוראטו (פרנה) יכולות להתווסף כיום טיול במסלולים לאורך חוף פרנה – ביקורים אחראיים תומכים בתחזוקה." },
  },
};
