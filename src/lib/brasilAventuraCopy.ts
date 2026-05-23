import type { ContentLang } from "@/i18n/config";

export type AdventureIntensity = "leve" | "moderada" | "intensa";

export interface AdventureActivity {
  id: string;
  image: string; // imported asset path
  intensity: AdventureIntensity;
  i18n: Record<ContentLang, {
    name: string;
    tagline: string;
    description: string;
    season: string;
    where: string; // human-readable list of destinations
  }>;
}

export interface BrasilAventuraUI {
  meta: { title: string; description: string; keywords: string };
  breadcrumb: string;
  hero: { eyebrow: string; title: string; subtitle: string; cta: string };
  philosophy: {
    eyebrow: string;
    title: string;
    lead: string;
    items: { title: string; text: string }[];
  };
  activities: {
    eyebrow: string;
    title: string;
    lead: string;
    intensityLabel: string;
    seasonLabel: string;
    whereLabel: string;
    intensity: Record<AdventureIntensity, string>;
  };
  journey: {
    eyebrow: string;
    title: string;
    steps: { n: string; t: string; d: string }[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
    ctaNote: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  links: { destinos: string; vivo: string };
  whatsappMessage: string;
}

/* ============================================================== */
/* UI strings — PT / EN / ES / IT / DE                            */
/* ============================================================== */

const PT: BrasilAventuraUI = {
  meta: {
    title: "Brasil Aventura — Atividades outdoor e turismo de natureza | Create Travel",
    description:
      "Boia-cross, rapel, rafting, tree climbing, balonismo, SUP, canoagem e mais: 20 atividades outdoor curadas em destinos selvagens do Brasil.",
    keywords:
      "turismo de aventura Brasil, rafting Brotas, boia cross Bonito, rapel Chapada Diamantina, tree climbing Amazônia, balonismo Praia Grande, canoagem Pantanal, atividades outdoor Brasil",
  },
  breadcrumb: "Brasil Aventura",
  hero: {
    eyebrow: "Outdoor · Natureza · Adrenalina",
    title: "Brasil Aventura — solte a criança que ainda mora em você",
    subtitle:
      "Existe um Brasil que se vive de cima de uma boia, pendurado numa cachoeira, no alto de uma castanheira ou dentro de um cânion. A Create Travel desenha roteiros para você reencontrar o moleque destemido, a adolescente curiosa, o aventureiro adormecido — com segurança, guias certificados e cenários que parecem impossíveis.",
    cta: "Quero um roteiro de aventura",
  },
  philosophy: {
    eyebrow: "Por que ir de cabeça",
    title: "Adrenalina com curadoria.\nNatureza intocada.",
    lead: "Aventura não é coragem cega — é confiança no time certo, no equipamento certo e no lugar certo. A nossa curadoria entrega essas três coisas para você só precisar sentir.",
    items: [
      { title: "Resgate da criança interior", text: "A primeira vez que você desce um rio numa boia, pula de um cânion preso por uma corda ou sobe na copa de uma árvore gigante — você lembra de algo importante que tinha esquecido sobre si." },
      { title: "Segurança séria, leveza absoluta", text: "Trabalhamos só com operadores certificados (ABETA, instrutores ACE/IRF, guias UIAA). Você se diverte porque sabe que tudo o que pode ser controlado, está controlado." },
      { title: "Cenários que ninguém esquece", text: "Cachoeiras de 80 m, rios de água cristalina onde se vê o cardume passar, árvores de 50 m, cânions de basalto: a Create escolhe os palcos onde a aventura vira memória vitalícia." },
      { title: "Para todo tipo de corpo e ousadia", text: "Da família com crianças no flutuação leve em Bonito ao casal experiente em travessias multi-dia na Chapada, montamos o nível certo de desafio para cada perfil." },
    ],
  },
  activities: {
    eyebrow: "20 maneiras de sentir o Brasil",
    title: "O cardápio outdoor",
    lead: "Cada atividade abaixo tem uma curva de adrenalina e uma janela de melhor época. Combine duas, três, quantas couberem no seu sonho — desenhamos a logística.",
    intensityLabel: "Intensidade",
    seasonLabel: "Melhor época",
    whereLabel: "Onde praticar",
    intensity: { leve: "Leve", moderada: "Moderada", intensa: "Intensa" },
  },
  journey: {
    eyebrow: "Como funciona",
    title: "Da vontade ao primeiro salto",
    steps: [
      { n: "01", t: "Você conta o que te move", d: "Adrenalina alta ou contemplação ativa? Família com crianças, casal, grupo de amigos? Já praticou ou é primeira vez? Tudo importa." },
      { n: "02", t: "Desenhamos o roteiro", d: "Combinamos 2 a 5 atividades complementares, com pousadas de caráter, descansos bem distribuídos e logística aérea/terrestre amarrada." },
      { n: "03", t: "Você só precisa aparecer", d: "Equipamento, briefings de segurança, guias certificados, transfers, autorizações de parque — tudo pronto. Você chega, respira fundo e vai." },
      { n: "04", t: "Volta com história nova", d: "E uma certeza: o Brasil tem cenários de outro mundo a poucas horas de qualquer cidade grande. Aventura aqui é fácil, é só ter quem desenhe." },
    ],
    ctaTitle: "Quero viver um roteiro de aventura no Brasil",
    ctaText: "Conte o que sonha — boia-cross em Bonito, rafting em Brotas, balão sobre os cânions, tree climbing na Amazônia, canoagem na Lagoa do Pati. Desenhamos sua semana (ou duas) com curadoria fina, operadores sérios e o ritmo que cabe em você.",
    ctaButton: "Falar com um curador",
    ctaNote: "Resposta em horário comercial · Sem compromisso",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Aventura outdoor no Brasil",
    items: [
      { q: "Preciso ter experiência prévia?", a: "Não. A maioria das atividades (boia-cross, flutuação, rafting nível II–III, SUP, balonismo, tree climbing iniciante) é acessível a quem nunca praticou. Para travessias longas e rafting nível IV, conversamos antes sobre preparo físico." },
      { q: "É seguro? Como vocês selecionam os operadores?", a: "Trabalhamos exclusivamente com operadores certificados pela ABETA (Associação Brasileira das Empresas de Ecoturismo e Turismo de Aventura) e por entidades internacionais (IRF para rafting, ACE/ETTC para tree climbing, UIAA para alta montanha). Equipamento revisado, briefing obrigatório, seguro incluso." },
      { q: "Qual a melhor época do ano para aventura no Brasil?", a: "Depende da atividade. Bonito e Pantanal: estação seca (abril a setembro). Amazônia: cheia (fev–jun) é ótima para canoagem na floresta; vazante (ago–nov) abre praias e trilhas. Chapadas: maio a outubro. Surf no Nordeste: ago a fev." },
      { q: "Funciona para família com crianças?", a: "Sim. Bonito (flutuação), Brotas (boia-cross light, arvorismo infantil), balão e SUP em Paraty ou Alter do Chão são excelentes a partir dos 6–8 anos. Indicamos a idade mínima de cada atividade no roteiro." },
      { q: "Posso combinar aventura com luxo e conforto?", a: "Totalmente. Há lodges-boutique no Pantanal, na Amazônia e na Chapada que entregam cama macia, gastronomia regional e spa — depois de um dia inteiro de rapel ou canoagem. A curadoria amarra os dois mundos." },
      { q: "E se eu travar no momento? Posso desistir de uma atividade?", a: "Claro. Toda atividade tem opção de observação ou intensidade reduzida. Os guias respeitam seu tempo e sua intuição — aventura boa é a que você termina com vontade de repetir." },
    ],
  },
  links: {
    destinos: "Ver destinos pelo Brasil",
    vivo: "Brasil Vivo — biomas e conservação",
  },
  whatsappMessage:
    "Olá, Create Travel! Quero desenhar um roteiro de aventura outdoor pelo Brasil (rafting, boia-cross, rapel, tree climbing, balão etc.).",
};

const EN: BrasilAventuraUI = {
  meta: {
    title: "Adventure Brazil — Outdoor activities & nature travel | Create Travel",
    description:
      "Tubing, rappel, rafting, tree climbing, ballooning, SUP, canoeing and more: 20 outdoor activities curated in Brazil's wildest landscapes.",
    keywords:
      "Brazil adventure travel, Brotas rafting, Bonito river tubing, Chapada Diamantina rappel, Amazon tree climbing, hot air balloon Brazil, Pantanal canoeing, outdoor activities Brazil",
  },
  breadcrumb: "Adventure Brazil",
  hero: {
    eyebrow: "Outdoor · Nature · Adrenaline",
    title: "Adventure Brazil — set free the child still living in you",
    subtitle:
      "There is a Brazil you only meet floating down a river, hanging off a waterfall, perched in a giant Amazon tree or deep inside a canyon. Create Travel designs trips that bring back the fearless kid, the curious teenager, the dormant adventurer — with safety, certified guides and landscapes that look impossible.",
    cta: "Design my adventure trip",
  },
  philosophy: {
    eyebrow: "Why dive in",
    title: "Curated adrenaline.\nUntouched nature.",
    lead: "Adventure isn't blind courage — it's trust in the right team, the right gear and the right place. Our curation delivers all three, so you only need to feel.",
    items: [
      { title: "Recovering the inner child", text: "The first time you float down a river on a tube, leap off a canyon edge on a rope, or climb to the canopy of a giant tree — you remember something important about yourself." },
      { title: "Serious safety, total ease", text: "We only work with certified operators (Brazil's ABETA, international IRF rafting instructors, ACE tree-climbing trainers, UIAA mountain guides). You enjoy yourself because everything controllable is controlled." },
      { title: "Backdrops you never forget", text: "80-meter waterfalls, crystal rivers where you watch shoals pass beneath you, 50-meter trees, basalt canyons: Create picks the stages where adventure becomes a lifetime memory." },
      { title: "For every body and every level of daring", text: "From a family with kids on a gentle Bonito snorkel float to a couple of experienced trekkers on a multi-day Chapada traverse — we tune the right level of challenge to each profile." },
    ],
  },
  activities: {
    eyebrow: "20 ways to feel Brazil",
    title: "The outdoor menu",
    lead: "Each activity below has its adrenaline curve and its best season. Combine two, three, as many as fit your dream — we sort the logistics.",
    intensityLabel: "Intensity",
    seasonLabel: "Best season",
    whereLabel: "Where to do it",
    intensity: { leve: "Easy", moderada: "Moderate", intensa: "Intense" },
  },
  journey: {
    eyebrow: "How it works",
    title: "From idea to first jump",
    steps: [
      { n: "01", t: "You tell us what moves you", d: "Pure adrenaline or active contemplation? Family with kids, couple, group of friends? Experienced or first-timer? All of it matters." },
      { n: "02", t: "We design the trip", d: "We combine 2 to 5 complementary activities, with character lodges, well-spaced rest days and ground/air logistics fully tied together." },
      { n: "03", t: "You just need to show up", d: "Gear, safety briefings, certified guides, transfers, park permits — all set. You land, breathe deep and go." },
      { n: "04", t: "You come back with a new story", d: "And a certainty: Brazil holds otherworldly landscapes a few hours from any major city. Adventure here is easy — you just need someone who designs it." },
    ],
    ctaTitle: "I want to live an adventure trip in Brazil",
    ctaText: "Tell us what you dream of — tubing in Bonito, rafting in Brotas, ballooning over canyons, tree climbing in the Amazon, canoeing in Pati Valley. We design your week (or two) with sharp curation, serious operators and the pace that fits you.",
    ctaButton: "Talk to a curator",
    ctaNote: "Reply during business hours · No commitment",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Outdoor adventure in Brazil",
    items: [
      { q: "Do I need previous experience?", a: "No. Most activities (tubing, snorkel-floating, class II–III rafting, SUP, ballooning, beginner tree climbing) are accessible to first-timers. For long traverses and class IV rafting we discuss fitness beforehand." },
      { q: "Is it safe? How do you pick operators?", a: "We work exclusively with operators certified by ABETA (Brazil's adventure tourism body) and international bodies (IRF for rafting, ACE/ETTC for tree climbing, UIAA for high mountain). Reviewed gear, mandatory briefing, insurance included." },
      { q: "When is the best season for adventure in Brazil?", a: "It depends on the activity. Bonito and Pantanal: dry season (April–September). Amazon: high water (Feb–Jun) is great for forest canoeing; low water (Aug–Nov) opens beaches and trails. Chapadas: May to October. Northeast surf: Aug to Feb." },
      { q: "Does it work for families with kids?", a: "Yes. Bonito (snorkel float), Brotas (gentle tubing, kids' canopy course), ballooning and SUP in Paraty or Alter do Chão are excellent from age 6–8. We mark the minimum age of each activity in the itinerary." },
      { q: "Can adventure be combined with luxury and comfort?", a: "Absolutely. Boutique lodges in the Pantanal, Amazon and Chapada deliver soft beds, regional fine dining and spa — after a full day of rappel or canoeing. Curation marries both worlds." },
      { q: "What if I freeze in the moment? Can I skip an activity?", a: "Of course. Every activity has an observation or reduced-intensity option. Guides respect your pace and your gut — a good adventure is one you finish wanting to repeat." },
    ],
  },
  links: {
    destinos: "See Brazil destinations",
    vivo: "Living Brazil — biomes & conservation",
  },
  whatsappMessage:
    "Hello, Create Travel! I'd like to design an outdoor adventure trip through Brazil (rafting, tubing, rappel, tree climbing, ballooning, etc.).",
};

const ES: BrasilAventuraUI = {
  meta: {
    title: "Brasil Aventura — Actividades outdoor y turismo de naturaleza | Create Travel",
    description:
      "Boya-cross, rapel, rafting, tree climbing, globo, SUP, canotaje y más: 20 actividades outdoor curadas en los paisajes más salvajes de Brasil.",
    keywords:
      "turismo de aventura Brasil, rafting Brotas, boya cross Bonito, rapel Chapada Diamantina, tree climbing Amazonía, globo aerostático Brasil, canotaje Pantanal",
  },
  breadcrumb: "Brasil Aventura",
  hero: {
    eyebrow: "Outdoor · Naturaleza · Adrenalina",
    title: "Brasil Aventura — libera al niño que aún vive en ti",
    subtitle:
      "Existe un Brasil que solo se conoce flotando en un río, colgado de una cascada, encaramado en un árbol gigante de la Amazonía o dentro de un cañón. Create Travel diseña viajes que despiertan al niño valiente, a la adolescente curiosa, al aventurero dormido — con seguridad, guías certificados y escenarios que parecen imposibles.",
    cta: "Diseñar mi viaje de aventura",
  },
  philosophy: {
    eyebrow: "Por qué entrar de cabeza",
    title: "Adrenalina con curaduría.\nNaturaleza intacta.",
    lead: "La aventura no es coraje ciego — es confianza en el equipo correcto, el material correcto y el lugar correcto. Nuestra curaduría entrega los tres para que tú solo tengas que sentir.",
    items: [
      { title: "Rescatar al niño interior", text: "La primera vez que bajas un río en boya, saltas un cañón sujeto por una cuerda o subes a la copa de un árbol gigante — recuerdas algo importante que habías olvidado sobre ti." },
      { title: "Seguridad seria, ligereza absoluta", text: "Trabajamos solo con operadores certificados (ABETA en Brasil, instructores IRF de rafting, ACE para tree climbing, UIAA para alta montaña). Te diviertes porque sabes que todo lo controlable está controlado." },
      { title: "Escenarios inolvidables", text: "Cascadas de 80 m, ríos de agua cristalina donde ves pasar el cardumen, árboles de 50 m, cañones de basalto: Create elige los escenarios donde la aventura se vuelve memoria de por vida." },
      { title: "Para todo cuerpo y todo nivel de osadía", text: "Desde la familia con niños en la flotación suave de Bonito hasta la pareja experimentada en travesías multidía en la Chapada — ajustamos el nivel de desafío a cada perfil." },
    ],
  },
  activities: {
    eyebrow: "20 formas de sentir Brasil",
    title: "El menú outdoor",
    lead: "Cada actividad tiene su curva de adrenalina y su mejor época. Combina dos, tres, las que quepan en tu sueño — nosotros armamos la logística.",
    intensityLabel: "Intensidad",
    seasonLabel: "Mejor época",
    whereLabel: "Dónde practicar",
    intensity: { leve: "Suave", moderada: "Moderada", intensa: "Intensa" },
  },
  journey: {
    eyebrow: "Cómo funciona",
    title: "De la idea al primer salto",
    steps: [
      { n: "01", t: "Tú nos cuentas qué te mueve", d: "¿Adrenalina pura o contemplación activa? ¿Familia con niños, pareja, grupo de amigos? ¿Experto o primera vez? Todo cuenta." },
      { n: "02", t: "Diseñamos el itinerario", d: "Combinamos 2 a 5 actividades complementarias, con posadas de carácter, descansos bien distribuidos y logística aérea/terrestre amarrada." },
      { n: "03", t: "Tú solo tienes que aparecer", d: "Equipo, briefings de seguridad, guías certificados, traslados, permisos de parque — todo listo. Llegas, respiras profundo y vas." },
      { n: "04", t: "Vuelves con una historia nueva", d: "Y una certeza: Brasil tiene paisajes de otro mundo a pocas horas de cualquier ciudad grande. La aventura aquí es fácil — solo hace falta quien la diseñe." },
    ],
    ctaTitle: "Quiero un viaje de aventura por Brasil",
    ctaText: "Cuéntanos qué sueñas — boya-cross en Bonito, rafting en Brotas, globo sobre los cañones, tree climbing en la Amazonía, canotaje en el Valle do Pati. Diseñamos tu semana (o dos) con curaduría fina, operadores serios y el ritmo que te cabe.",
    ctaButton: "Hablar con un curador",
    ctaNote: "Respuesta en horario comercial · Sin compromiso",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Aventura outdoor en Brasil",
    items: [
      { q: "¿Necesito experiencia previa?", a: "No. La mayoría de actividades (boya-cross, flotación, rafting clase II–III, SUP, globo, tree climbing iniciante) son accesibles a principiantes. Para travesías largas y rafting clase IV hablamos antes sobre preparación física." },
      { q: "¿Es seguro? ¿Cómo eligen a los operadores?", a: "Trabajamos solo con operadores certificados por ABETA (la asociación brasileña de turismo de aventura) y entidades internacionales (IRF para rafting, ACE para tree climbing, UIAA para alta montaña). Equipo revisado, briefing obligatorio, seguro incluido." },
      { q: "¿Cuál es la mejor época?", a: "Depende de la actividad. Bonito y Pantanal: temporada seca (abril a septiembre). Amazonía: aguas altas (feb–jun) para canotaje en la selva; aguas bajas (ago–nov) para playas y senderos. Chapadas: mayo a octubre. Surf en el Nordeste: ago a feb." },
      { q: "¿Funciona para familias con niños?", a: "Sí. Bonito (flotación), Brotas (boya-cross suave, arborismo infantil), globo y SUP en Paraty o Alter do Chão son excelentes desde los 6–8 años. Indicamos la edad mínima de cada actividad." },
      { q: "¿Se puede combinar aventura con lujo?", a: "Totalmente. Hay lodges boutique en Pantanal, Amazonía y Chapada que entregan cama suave, gastronomía regional y spa — tras un día entero de rapel o canotaje." },
      { q: "¿Y si me bloqueo en el momento? ¿Puedo desistir?", a: "Por supuesto. Toda actividad tiene opción de observación o intensidad reducida. Los guías respetan tu tiempo y tu intuición." },
    ],
  },
  links: {
    destinos: "Ver destinos por Brasil",
    vivo: "Brasil Vivo — biomas y conservación",
  },
  whatsappMessage:
    "¡Hola, Create Travel! Quiero diseñar un viaje de aventura outdoor por Brasil (rafting, boya-cross, rapel, tree climbing, globo, etc.).",
};

const IT: BrasilAventuraUI = {
  meta: {
    title: "Brasile Avventura — Attività outdoor e turismo di natura | Create Travel",
    description:
      "Tubing, corda doppia, rafting, tree climbing, mongolfiera, SUP, canoa e altro: 20 attività outdoor curate nei paesaggi più selvaggi del Brasile.",
    keywords:
      "turismo avventura Brasile, rafting Brotas, tubing Bonito, corda doppia Chapada Diamantina, tree climbing Amazzonia, mongolfiera Brasile, canoa Pantanal",
  },
  breadcrumb: "Brasile Avventura",
  hero: {
    eyebrow: "Outdoor · Natura · Adrenalina",
    title: "Brasile Avventura — libera il bambino che vive ancora in te",
    subtitle:
      "Esiste un Brasile che si incontra solo galleggiando in un fiume, sospesi a una cascata, sulla cima di un albero gigante dell'Amazzonia o dentro un canyon. Create Travel disegna viaggi che risvegliano il bambino coraggioso, l'adolescente curiosa, l'avventuriero dormiente — con sicurezza, guide certificate e scenari che sembrano impossibili.",
    cta: "Disegnare il mio viaggio avventura",
  },
  philosophy: {
    eyebrow: "Perché lanciarsi",
    title: "Adrenalina con curatela.\nNatura intatta.",
    lead: "L'avventura non è coraggio cieco — è fiducia nel team giusto, nell'attrezzatura giusta e nel posto giusto. La nostra curatela ti consegna tutti e tre.",
    items: [
      { title: "Recuperare il bambino interiore", text: "La prima volta che scendi un fiume su una camera d'aria, salti da un canyon legato a una corda o sali in cima a un albero gigante — ricordi qualcosa di importante che avevi dimenticato di te." },
      { title: "Sicurezza seria, leggerezza assoluta", text: "Lavoriamo solo con operatori certificati (ABETA in Brasile, istruttori IRF per il rafting, ACE per il tree climbing, UIAA per l'alta montagna). Tutto ciò che è controllabile è controllato." },
      { title: "Scenari indimenticabili", text: "Cascate di 80 m, fiumi cristallini, alberi di 50 m, canyon di basalto: Create sceglie i palcoscenici dove l'avventura diventa memoria di una vita." },
      { title: "Per ogni corpo e ogni livello di audacia", text: "Dalla famiglia con bambini al galleggiamento dolce di Bonito alla coppia esperta in traversate di più giorni nella Chapada — moduliamo la sfida per ogni profilo." },
    ],
  },
  activities: {
    eyebrow: "20 modi di sentire il Brasile",
    title: "Il menu outdoor",
    lead: "Ogni attività ha la sua curva di adrenalina e la sua stagione. Combinane due, tre, quante ne entrano nel tuo sogno — la logistica la curiamo noi.",
    intensityLabel: "Intensità",
    seasonLabel: "Stagione migliore",
    whereLabel: "Dove praticare",
    intensity: { leve: "Soft", moderada: "Moderata", intensa: "Intensa" },
  },
  journey: {
    eyebrow: "Come funziona",
    title: "Dall'idea al primo salto",
    steps: [
      { n: "01", t: "Ci racconti cosa ti muove", d: "Adrenalina pura o contemplazione attiva? Famiglia con bambini, coppia, gruppo di amici? Esperto o prima volta? Tutto conta." },
      { n: "02", t: "Disegniamo l'itinerario", d: "Combiniamo 2-5 attività complementari, con lodge di carattere, riposi ben distribuiti, logistica aerea/terrestre cucita su misura." },
      { n: "03", t: "Tu devi solo arrivare", d: "Attrezzatura, briefing di sicurezza, guide certificate, transfer, permessi parco — tutto pronto. Atterri, respiri, parti." },
      { n: "04", t: "Torni con una storia nuova", d: "E una certezza: il Brasile ha paesaggi di un altro mondo a poche ore da ogni grande città. L'avventura qui è facile — basta chi te la disegna." },
    ],
    ctaTitle: "Voglio vivere un viaggio avventura in Brasile",
    ctaText: "Raccontaci cosa sogni — tubing a Bonito, rafting a Brotas, mongolfiera sopra i canyon, tree climbing in Amazzonia, canoa nella Valle del Pati. Disegniamo la tua settimana (o due) con curatela fine e operatori seri.",
    ctaButton: "Parlare con un curatore",
    ctaNote: "Risposta in orario d'ufficio · Senza impegno",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Avventura outdoor in Brasile",
    items: [
      { q: "Serve esperienza?", a: "No. La maggior parte delle attività (tubing, snorkel-flottante, rafting classe II–III, SUP, mongolfiera, tree climbing principianti) è accessibile ai novizi. Per traversate lunghe e rafting classe IV parliamo prima di preparazione fisica." },
      { q: "È sicuro?", a: "Lavoriamo solo con operatori certificati ABETA (l'ente brasiliano del turismo avventura) e organismi internazionali (IRF rafting, ACE tree climbing, UIAA alta montagna). Attrezzatura controllata, briefing obbligatorio, assicurazione inclusa." },
      { q: "Qual è la stagione migliore?", a: "Dipende dall'attività. Bonito e Pantanal: stagione secca (aprile-settembre). Amazzonia: acque alte (feb-giu) per canoa nella foresta; acque basse (ago-nov) per spiagge e sentieri. Chapadas: maggio-ottobre. Surf nel Nordeste: ago-feb." },
      { q: "Funziona per famiglie con bambini?", a: "Sì. Bonito (galleggiamento), Brotas (tubing dolce, percorsi sospesi per bambini), mongolfiera e SUP a Paraty o Alter do Chão sono ottimi dai 6-8 anni. Indichiamo l'età minima di ogni attività." },
      { q: "Si può combinare avventura e lusso?", a: "Assolutamente. Ci sono lodge boutique in Pantanal, Amazzonia e Chapada con letti morbidi, gastronomia regionale e spa — dopo una giornata di corda doppia o canoa." },
      { q: "E se mi blocco sul momento? Posso rinunciare?", a: "Certo. Ogni attività ha opzione di osservazione o intensità ridotta. Le guide rispettano i tuoi tempi e il tuo istinto." },
    ],
  },
  links: {
    destinos: "Vedere le destinazioni in Brasile",
    vivo: "Brasile Vivo — biomi e conservazione",
  },
  whatsappMessage:
    "Ciao Create Travel! Vorrei disegnare un viaggio di avventura outdoor in Brasile (rafting, tubing, corda doppia, tree climbing, mongolfiera, ecc.).",
};

const DE: BrasilAventuraUI = {
  meta: {
    title: "Brasilien Abenteuer — Outdoor-Aktivitäten und Naturreisen | Create Travel",
    description:
      "Tubing, Abseilen, Rafting, Tree Climbing, Heißluftballon, SUP, Kanu und mehr: 20 kuratierte Outdoor-Aktivitäten in Brasiliens wildesten Landschaften.",
    keywords:
      "Abenteuerreisen Brasilien, Rafting Brotas, Tubing Bonito, Abseilen Chapada Diamantina, Tree Climbing Amazonas, Heißluftballon Brasilien, Kanu Pantanal",
  },
  breadcrumb: "Brasilien Abenteuer",
  hero: {
    eyebrow: "Outdoor · Natur · Adrenalin",
    title: "Brasilien Abenteuer — befreie das Kind, das noch in dir lebt",
    subtitle:
      "Es gibt ein Brasilien, das man nur trifft, wenn man auf einem Schlauch einen Fluss hinunterschwimmt, an einem Wasserfall hängt, auf einem riesigen Amazonas-Baum sitzt oder tief in einem Canyon steht. Create Travel entwirft Reisen, die das mutige Kind, die neugierige Jugendliche, den schlafenden Abenteurer wecken — mit Sicherheit, zertifizierten Guides und Landschaften, die unmöglich aussehen.",
    cta: "Mein Abenteuer entwerfen",
  },
  philosophy: {
    eyebrow: "Warum eintauchen",
    title: "Kuratiertes Adrenalin.\nUnberührte Natur.",
    lead: "Abenteuer ist kein blinder Mut — es ist Vertrauen in das richtige Team, die richtige Ausrüstung und den richtigen Ort. Unsere Kuratierung liefert alle drei.",
    items: [
      { title: "Das innere Kind zurückholen", text: "Wenn du zum ersten Mal auf einem Reifen einen Fluss hinunterschwimmst, an einem Seil von einer Canyonkante springst oder in die Krone eines Riesenbaumes kletterst — erinnerst du dich an etwas Wichtiges über dich." },
      { title: "Ernste Sicherheit, völlige Leichtigkeit", text: "Wir arbeiten ausschließlich mit zertifizierten Anbietern (Brasiliens ABETA, internationale IRF-Rafting-Instruktoren, ACE für Baumklettern, UIAA für Hochgebirge). Alles Kontrollierbare ist kontrolliert." },
      { title: "Unvergessliche Kulissen", text: "80-m-Wasserfälle, kristallklare Flüsse, 50-m-Bäume, Basalt-Canyons: Create wählt die Bühnen, auf denen Abenteuer zur lebenslangen Erinnerung wird." },
      { title: "Für jeden Körper und jeden Wagemut", text: "Von der Familie mit Kindern beim sanften Schnorchel-Treiben in Bonito bis zum erfahrenen Paar auf mehrtägigen Chapada-Durchquerungen — wir wählen die richtige Herausforderung." },
    ],
  },
  activities: {
    eyebrow: "20 Wege, Brasilien zu fühlen",
    title: "Die Outdoor-Karte",
    lead: "Jede Aktivität hat ihre Adrenalinkurve und ihre Saison. Kombiniere zwei, drei, so viele wie in deinen Traum passen — wir kümmern uns um die Logistik.",
    intensityLabel: "Intensität",
    seasonLabel: "Beste Saison",
    whereLabel: "Wo praktizieren",
    intensity: { leve: "Sanft", moderada: "Moderat", intensa: "Intensiv" },
  },
  journey: {
    eyebrow: "So funktioniert es",
    title: "Von der Idee zum ersten Sprung",
    steps: [
      { n: "01", t: "Du erzählst, was dich bewegt", d: "Pures Adrenalin oder aktive Kontemplation? Familie mit Kindern, Paar, Freundesgruppe? Erfahren oder das erste Mal? Alles zählt." },
      { n: "02", t: "Wir entwerfen die Reise", d: "Wir kombinieren 2-5 ergänzende Aktivitäten, mit Charakter-Lodges, gut verteilten Ruhetagen und durchdachter Boden-/Flug-Logistik." },
      { n: "03", t: "Du musst nur auftauchen", d: "Ausrüstung, Sicherheits-Briefings, zertifizierte Guides, Transfers, Parkgenehmigungen — alles bereit. Du landest, atmest tief, los geht's." },
      { n: "04", t: "Du kommst mit einer neuen Geschichte zurück", d: "Und einer Gewissheit: Brasilien hat weltferne Landschaften nur wenige Stunden von jeder Großstadt. Abenteuer hier ist einfach — man braucht nur jemanden, der es entwirft." },
    ],
    ctaTitle: "Ich möchte eine Abenteuerreise in Brasilien erleben",
    ctaText: "Erzähle uns, wovon du träumst — Tubing in Bonito, Rafting in Brotas, Ballonfahrt über Canyons, Tree Climbing im Amazonas, Kanu im Pati-Tal. Wir entwerfen deine Woche (oder zwei) mit feiner Kuratierung und ernsten Anbietern.",
    ctaButton: "Mit einem Kurator sprechen",
    ctaNote: "Antwort zu Bürozeiten · Unverbindlich",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Outdoor-Abenteuer in Brasilien",
    items: [
      { q: "Brauche ich Erfahrung?", a: "Nein. Die meisten Aktivitäten (Tubing, Schnorchel-Treiben, Rafting Klasse II–III, SUP, Ballonfahrt, Tree Climbing für Anfänger) sind für Neulinge geeignet. Für lange Durchquerungen und Rafting Klasse IV besprechen wir vorher die Fitness." },
      { q: "Ist es sicher?", a: "Wir arbeiten nur mit Anbietern, die von ABETA (brasilianischer Abenteuertourismus-Verband) und internationalen Stellen zertifiziert sind (IRF Rafting, ACE Tree Climbing, UIAA Hochgebirge). Geprüfte Ausrüstung, obligatorisches Briefing, Versicherung inklusive." },
      { q: "Wann ist die beste Saison?", a: "Je nach Aktivität. Bonito und Pantanal: Trockenzeit (April-September). Amazonas: Hochwasser (Feb-Jun) ideal für Kanu im Wald; Niedrigwasser (Aug-Nov) öffnet Strände und Wege. Chapadas: Mai bis Oktober. Surfen im Nordosten: Aug-Feb." },
      { q: "Funktioniert es für Familien mit Kindern?", a: "Ja. Bonito (Schnorchel-Treiben), Brotas (sanftes Tubing, Kinder-Hochseilgarten), Ballonfahrt und SUP in Paraty oder Alter do Chão sind ab 6-8 Jahren ausgezeichnet." },
      { q: "Lässt sich Abenteuer mit Luxus verbinden?", a: "Absolut. Boutique-Lodges im Pantanal, Amazonas und in der Chapada bieten weiche Betten, regionale Gastronomie und Spa — nach einem ganzen Tag Abseilen oder Kanu." },
      { q: "Was, wenn ich im Moment blockiere?", a: "Kein Problem. Jede Aktivität hat eine Beobachtungs- oder Light-Variante. Die Guides respektieren dein Tempo und dein Gefühl." },
    ],
  },
  links: {
    destinos: "Brasilien-Reiseziele entdecken",
    vivo: "Brasilien Lebt — Biome und Naturschutz",
  },
  whatsappMessage:
    "Hallo Create Travel! Ich möchte eine Outdoor-Abenteuerreise durch Brasilien entwerfen (Rafting, Tubing, Abseilen, Tree Climbing, Ballonfahrt usw.).",
};

export const BRASIL_AVENTURA_UI: Record<ContentLang, BrasilAventuraUI> = {
  pt: PT, en: EN, es: ES, it: IT, de: DE,
};

/* ============================================================== */
/* Activities catalog (20 curated outdoor experiences)            */
/* ============================================================== */

import boiaCrossImg from "@/assets/destinations/brasil-bonito.jpg";
import rapelImg from "@/assets/destinations/brasil-chapada-diamantina.jpg";
import treeClimbingImg from "@/assets/destinations/brasil-cristalino.jpg";
import raftingImg from "@/assets/destinations/brasil-brotas-aventura.jpg";
import supImg from "@/assets/destinations/brasil-amazonia-alter-do-chao.jpg";
import balaoImg from "@/assets/destinations/brasil-canions-do-sul.jpg";
import canoagemImg from "@/assets/destinations/brasil-pantanal-norte.jpg";
import trekkingImg from "@/assets/destinations/brasil-chapada-diamantina.jpg";
import flutuacaoImg from "@/assets/destinations/brasil-bonito.jpg";
import tirolesaImg from "@/assets/destinations/brasil-brotas-aventura.jpg";
import surfImg from "@/assets/destinations/brasil-fernando-de-noronha.jpg";
import kitesurfImg from "@/assets/destinations/brasil-jericoacoara.jpg";
import quadricicloImg from "@/assets/destinations/brasil-lencois-maranhenses.jpg";
import cavalgadaImg from "@/assets/destinations/brasil-pantanal-sul.jpg";
import canionismoImg from "@/assets/destinations/brasil-chapada-das-mesas.jpg";
import mergulhoImg from "@/assets/destinations/brasil-bahia-abrolhos-costa-descobrimento.jpg";
import bikeImg from "@/assets/destinations/brasil-minas-gerais-estrada-real.jpg";
import caiaqueOceanicoImg from "@/assets/destinations/brasil-marau.jpg";
import parapenteImg from "@/assets/destinations/brasil-rio-de-janeiro.jpg";
import espeleologiaImg from "@/assets/destinations/brasil-minas-gerais-cavernas-do-peruacu.jpg";

export const ADVENTURE_ACTIVITIES: AdventureActivity[] = [
  {
    id: "boia-cross",
    image: boiaCrossImg,
    intensity: "leve",
    i18n: {
      pt: {
        name: "Boia-cross",
        tagline: "O rio te conduz, você só ri",
        description: "Descer um rio sentado numa boia, atravessando pequenas corredeiras e poços de água cristalina. É a porta de entrada da aventura: zero esforço técnico, máxima diversão. Você bóia entre cardumes, passa por matas alagadas e desce com o sorriso de criança de oito anos.",
        season: "Abril a setembro (águas mais claras)",
        where: "Bonito (MS) — Rio Formoso · Brotas (SP) — Rio Jacaré-Pepira · Nobres (MT) — Rio Triste",
      },
      en: {
        name: "River tubing (boia-cross)",
        tagline: "The river leads, you just laugh",
        description: "Floating down a river on an inflatable tube, drifting through gentle rapids and crystal pools. The gateway drug of adventure: zero technical effort, maximum joy. You float past shoals, through flooded forests, with the smile of an eight-year-old.",
        season: "April to September (clearest water)",
        where: "Bonito (MS) — Rio Formoso · Brotas (SP) — Jacaré-Pepira river · Nobres (MT) — Rio Triste",
      },
      es: {
        name: "Boya-cross (tubing)",
        tagline: "El río te lleva, tú solo ríes",
        description: "Bajar un río sentado en una boya, cruzando pequeños rápidos y pozas de agua cristalina. La puerta de entrada de la aventura: cero esfuerzo técnico, máxima diversión.",
        season: "Abril a septiembre (aguas más claras)",
        where: "Bonito (MS) — Río Formoso · Brotas (SP) — Río Jacaré-Pepira · Nobres (MT) — Río Triste",
      },
      it: {
        name: "Tubing fluviale",
        tagline: "Il fiume ti guida, tu ridi soltanto",
        description: "Scendere un fiume seduti su una camera d'aria, attraversando piccole rapide e pozze cristalline. La porta d'ingresso dell'avventura: zero sforzo tecnico, massimo divertimento.",
        season: "Aprile-settembre (acque più chiare)",
        where: "Bonito (MS) — Rio Formoso · Brotas (SP) — Rio Jacaré-Pepira · Nobres (MT) — Rio Triste",
      },
      de: {
        name: "Fluss-Tubing",
        tagline: "Der Fluss führt, du lachst nur",
        description: "Auf einem Schlauch einen Fluss hinunterschwimmen, durch sanfte Stromschnellen und kristallklare Becken. Das Einstiegsabenteuer: null technischer Aufwand, maximale Freude.",
        season: "April bis September (klarstes Wasser)",
        where: "Bonito (MS) — Rio Formoso · Brotas (SP) — Rio Jacaré-Pepira · Nobres (MT) — Rio Triste",
      },
    },
  },
  {
    id: "flutuacao",
    image: flutuacaoImg,
    intensity: "leve",
    i18n: {
      pt: {
        name: "Flutuação em rios cristalinos",
        tagline: "Snorkel num aquário aberto",
        description: "De máscara e snorkel, você se entrega à correnteza de rios tão transparentes que parecem ar líquido. Cardumes de dourados, piraputangas e curimbas passam a centímetros de você. É contemplação ativa: relaxa o corpo, abre os olhos, agradece.",
        season: "Abril a setembro · evite chuvas fortes",
        where: "Bonito (MS) — Rio da Prata, Rio Sucuri · Nobres (MT) — Aquário Encantado · Bonito do Iguaçu (PR)",
      },
      en: {
        name: "Crystal-river snorkel float",
        tagline: "Snorkeling an open aquarium",
        description: "Mask and snorkel on, you surrender to the current of rivers so transparent they feel like liquid air. Shoals of dourados and piraputangas drift inches from your face. Active contemplation at its purest.",
        season: "April to September · avoid heavy rain",
        where: "Bonito (MS) — Rio da Prata, Rio Sucuri · Nobres (MT) — Aquário Encantado",
      },
      es: {
        name: "Flotación en ríos cristalinos",
        tagline: "Snorkel en un acuario abierto",
        description: "Con máscara y snorkel, te entregas a la corriente de ríos tan transparentes que parecen aire líquido. Cardúmenes de dorados y piraputangas pasan a centímetros de ti.",
        season: "Abril a septiembre · evitar lluvias fuertes",
        where: "Bonito (MS) — Río da Prata, Río Sucuri · Nobres (MT) — Acuario Encantado",
      },
      it: {
        name: "Flottaggio in fiumi cristallini",
        tagline: "Snorkeling in un acquario aperto",
        description: "Con maschera e boccaglio, ti abbandoni alla corrente di fiumi così trasparenti da sembrare aria liquida. Banchi di dourados e piraputangas passano a pochi centimetri.",
        season: "Aprile-settembre · evitare piogge forti",
        where: "Bonito (MS) — Rio da Prata, Rio Sucuri · Nobres (MT) — Aquário Encantado",
      },
      de: {
        name: "Schnorcheln in Kristallflüssen",
        tagline: "Schnorcheln in einem offenen Aquarium",
        description: "Mit Maske und Schnorchel gleitest du in einer Strömung, die so klar ist, dass sie wie flüssige Luft wirkt. Schwärme von Dourados und Piraputangas ziehen Zentimeter vor dir vorbei.",
        season: "April bis September · starke Regenfälle meiden",
        where: "Bonito (MS) — Rio da Prata, Rio Sucuri · Nobres (MT) — Aquário Encantado",
      },
    },
  },
  {
    id: "rapel",
    image: rapelImg,
    intensity: "moderada",
    i18n: {
      pt: {
        name: "Rapel em cachoeira",
        tagline: "Descer 80 metros pendurado no arco-íris",
        description: "Você se pendura numa corda e desce por dentro de uma cachoeira — sentindo a água bater no capacete, vendo o arco-íris se formar abaixo de você. Existem rapéis de 25 m para iniciantes e descidas de 80 m para corações fortes. Em todos os casos, instrutor UIAA do seu lado.",
        season: "O ano todo · cheias deixam mais dramático",
        where: "Chapada Diamantina (BA) — Cachoeira do Buracão · Pirenópolis (GO) — Abade · São Thomé das Letras (MG) · Capitólio (MG)",
      },
      en: {
        name: "Waterfall rappel",
        tagline: "Descending 80 m hanging from a rainbow",
        description: "You hang from a rope and descend through a waterfall — water hitting your helmet, a rainbow forming below. 25-m drops for beginners, 80-m drops for the brave. Always with a UIAA-certified instructor at your side.",
        season: "Year-round · high water makes it more dramatic",
        where: "Chapada Diamantina (BA) — Cachoeira do Buracão · Pirenópolis (GO) — Abade · São Thomé das Letras (MG) · Capitólio (MG)",
      },
      es: {
        name: "Rapel en cascada",
        tagline: "Bajar 80 m colgado del arco iris",
        description: "Te cuelgas de una cuerda y bajas por dentro de una cascada — sintiendo el agua en el casco, viendo el arco iris formarse debajo de ti. Hay rapeles de 25 m para iniciantes y descensos de 80 m para corazones fuertes.",
        season: "Todo el año · las crecidas lo hacen más dramático",
        where: "Chapada Diamantina (BA) — Cascada do Buracão · Pirenópolis (GO) — Abade · São Thomé das Letras (MG) · Capitólio (MG)",
      },
      it: {
        name: "Corda doppia in cascata",
        tagline: "Scendere 80 m appesi all'arcobaleno",
        description: "Ti appendi a una corda e scendi dentro una cascata — sentendo l'acqua sul casco, vedendo l'arcobaleno formarsi sotto di te. Cascate di 25 m per principianti, discese di 80 m per cuori forti.",
        season: "Tutto l'anno · le piene rendono tutto più drammatico",
        where: "Chapada Diamantina (BA) — Cascata do Buracão · Pirenópolis (GO) — Abade · Capitólio (MG)",
      },
      de: {
        name: "Wasserfall-Abseilen",
        tagline: "80 m am Regenbogen herabsteigen",
        description: "Du hängst an einem Seil und steigst durch einen Wasserfall ab — Wasser prasselt auf deinen Helm, ein Regenbogen formt sich unter dir. 25-m-Abseilen für Anfänger, 80-m-Abseilen für starke Herzen.",
        season: "Ganzjährig · Hochwasser macht es dramatischer",
        where: "Chapada Diamantina (BA) — Cachoeira do Buracão · Pirenópolis (GO) · Capitólio (MG)",
      },
    },
  },
  {
    id: "tree-climbing",
    image: treeClimbingImg,
    intensity: "moderada",
    i18n: {
      pt: {
        name: "Tree climbing — copa das gigantes da Amazônia",
        tagline: "Subir 50 m no andar dos bichos",
        description: "Castanheiras de 500 anos, samaúmas com troncos de 3 m de diâmetro. Com técnica de corda dupla (sem cravos no tronco, sem ferir a árvore), você sobe até a copa e olha a floresta amazônica de cima — onde araras-vermelhas passam na altura dos seus olhos. Um dos miradouros mais singulares do planeta.",
        season: "Junho a novembro (vazante) · evita chuva intensa",
        where: "Cristalino Lodge (MT) · RDS Mamirauá (AM) · Anavilhanas (AM) · Reserva Cuieiras (AM)",
      },
      en: {
        name: "Tree climbing — Amazon canopy giants",
        tagline: "50 m up, on the animals' floor",
        description: "500-year-old Brazil nut trees, kapoks with 3-m-thick trunks. Using double-rope technique (no spikes, no harm to the tree), you climb to the canopy and look down on the Amazon — with red macaws flying at eye level. One of the most singular viewpoints on Earth.",
        season: "June to November (low water) · avoid heavy rain",
        where: "Cristalino Lodge (MT) · Mamirauá Reserve (AM) · Anavilhanas (AM) · Reserva Cuieiras (AM)",
      },
      es: {
        name: "Tree climbing — gigantes amazónicos",
        tagline: "Subir 50 m al piso de los animales",
        description: "Castañeros de 500 años, samaúmas con troncos de 3 m de diámetro. Con técnica de cuerda doble (sin clavos, sin dañar el árbol), subes a la copa y miras la Amazonía desde arriba — donde los guacamayos pasan a la altura de tus ojos.",
        season: "Junio a noviembre (aguas bajas)",
        where: "Cristalino Lodge (MT) · Reserva Mamirauá (AM) · Anavilhanas (AM)",
      },
      it: {
        name: "Tree climbing — giganti dell'Amazzonia",
        tagline: "50 m in alto, al piano degli animali",
        description: "Alberi del Brasile di 500 anni, samaúmas con tronchi di 3 m di diametro. Con tecnica a doppia corda (senza chiodi, senza danneggiare l'albero), sali fino alla chioma e guardi l'Amazzonia dall'alto.",
        season: "Giugno-novembre (acque basse)",
        where: "Cristalino Lodge (MT) · Riserva Mamirauá (AM) · Anavilhanas (AM)",
      },
      de: {
        name: "Tree Climbing — Amazonas-Riesen",
        tagline: "50 m hoch, auf der Etage der Tiere",
        description: "500 Jahre alte Paranussbäume, Samaúmas mit 3 m dicken Stämmen. Mit Doppelseiltechnik (ohne Nägel, ohne Schaden für den Baum) kletterst du in die Krone und siehst den Amazonas von oben.",
        season: "Juni bis November (Niedrigwasser)",
        where: "Cristalino Lodge (MT) · Mamirauá-Reservat (AM) · Anavilhanas (AM)",
      },
    },
  },
  {
    id: "rafting",
    image: raftingImg,
    intensity: "intensa",
    i18n: {
      pt: {
        name: "Rafting",
        tagline: "Trabalho de equipe contra a água viva",
        description: "Botes infláveis para 6 pessoas, capacete, colete, e o rio dando o ritmo. No nível III remamos forte em corredeiras claras e divertidas; no nível IV o coração dispara em ondas de 2 m e funis técnicos. Sempre com piloto IRF certificado e bote de resgate.",
        season: "Brotas: o ano todo · Três Coroas: setembro a março · Jaguaribe: ago a fev",
        where: "Brotas (SP) — Rio Jacaré-Pepira (II-III) · Três Coroas (RS) — Rio Paranhana (III-IV) · Aurora do Tocantins (TO) — Rio Novo · Jaguaribe (CE)",
      },
      en: {
        name: "Rafting",
        tagline: "Teamwork against living water",
        description: "Six-person inflatable boats, helmet, vest, and the river setting the rhythm. Class III is strong, clean, fun rapids; class IV is racing-heart 2-m waves and technical drops. Always with IRF-certified skipper and safety boat.",
        season: "Brotas: year-round · Três Coroas: Sep-Mar · Jaguaribe: Aug-Feb",
        where: "Brotas (SP) — Jacaré-Pepira river (II-III) · Três Coroas (RS) — Paranhana river (III-IV) · Aurora do Tocantins (TO) · Jaguaribe (CE)",
      },
      es: {
        name: "Rafting",
        tagline: "Trabajo en equipo contra el agua viva",
        description: "Botes inflables para 6 personas, casco, chaleco, y el río marca el ritmo. En clase III remamos fuerte en rápidos claros; en clase IV el corazón dispara con olas de 2 m y embudos técnicos.",
        season: "Brotas: todo el año · Três Coroas: sep-mar",
        where: "Brotas (SP) — Río Jacaré-Pepira (II-III) · Três Coroas (RS) (III-IV) · Aurora do Tocantins (TO)",
      },
      it: {
        name: "Rafting",
        tagline: "Lavoro di squadra contro l'acqua viva",
        description: "Gommoni per 6 persone, casco, salvagente, e il fiume detta il ritmo. Classe III: rapide forti e divertenti. Classe IV: cuore in gola, onde di 2 m e cadute tecniche.",
        season: "Brotas: tutto l'anno · Três Coroas: set-mar",
        where: "Brotas (SP) — Rio Jacaré-Pepira (II-III) · Três Coroas (RS) (III-IV) · Aurora do Tocantins (TO)",
      },
      de: {
        name: "Rafting",
        tagline: "Teamwork gegen lebendiges Wasser",
        description: "Sechs-Personen-Schlauchboote, Helm, Weste — der Fluss gibt den Takt vor. Klasse III: kräftige, saubere, vergnügliche Stromschnellen. Klasse IV: Herzrasen, 2-m-Wellen, technische Drops.",
        season: "Brotas: ganzjährig · Três Coroas: Sep-Mär",
        where: "Brotas (SP) — Rio Jacaré-Pepira (II-III) · Três Coroas (RS) (III-IV)",
      },
    },
  },
  {
    id: "sup",
    image: supImg,
    intensity: "leve",
    i18n: {
      pt: {
        name: "Stand Up Paddle",
        tagline: "Caminhar sobre as águas mais bonitas do Brasil",
        description: "Em pé sobre a prancha, remo na mão, você atravessa lagoas amazônicas de água preta, baías de Mata Atlântica e enseadas turquesa do Nordeste. Excelente para iniciantes, ótimo para o corpo, e a perspectiva muda tudo: você vê o fundo, vê o céu, vê o mundo de outra altura.",
        season: "O ano todo no Nordeste · Amazônia: vazante (ago-nov)",
        where: "Alter do Chão (PA) — Lago Verde · Paraty (RJ) — Saco do Mamanguá · Jericoacoara (CE) — Lagoa do Paraíso · Ilhabela (SP)",
      },
      en: {
        name: "Stand Up Paddle",
        tagline: "Walk on Brazil's most beautiful waters",
        description: "Standing on the board, paddle in hand, you cross Amazonian black-water lakes, Atlantic Forest bays and turquoise Northeast coves. Beginner-friendly, great for the body — and the perspective changes everything.",
        season: "Year-round in the Northeast · Amazon: low water (Aug-Nov)",
        where: "Alter do Chão (PA) — Lago Verde · Paraty (RJ) — Saco do Mamanguá · Jericoacoara (CE) · Ilhabela (SP)",
      },
      es: {
        name: "Stand Up Paddle",
        tagline: "Caminar sobre las aguas más bellas de Brasil",
        description: "De pie sobre la tabla, remo en mano, cruzas lagunas amazónicas de agua negra, bahías de Mata Atlántica y ensenadas turquesas del Nordeste.",
        season: "Todo el año en el Nordeste · Amazonía: aguas bajas (ago-nov)",
        where: "Alter do Chão (PA) · Paraty (RJ) · Jericoacoara (CE) · Ilhabela (SP)",
      },
      it: {
        name: "Stand Up Paddle",
        tagline: "Camminare sulle acque più belle del Brasile",
        description: "In piedi sulla tavola, pagaia in mano, attraversi lagune amazzoniche di acque nere, baie della Foresta Atlantica e insenature turchesi del Nordeste.",
        season: "Tutto l'anno nel Nordeste · Amazzonia: acque basse (ago-nov)",
        where: "Alter do Chão (PA) · Paraty (RJ) · Jericoacoara (CE) · Ilhabela (SP)",
      },
      de: {
        name: "Stand Up Paddle",
        tagline: "Auf Brasiliens schönsten Gewässern gehen",
        description: "Stehend auf dem Board, Paddel in der Hand, durchquerst du amazonische Schwarzwasserseen, Buchten des Atlantischen Regenwalds und türkise Buchten des Nordostens.",
        season: "Ganzjährig im Nordosten · Amazonas: Niedrigwasser (Aug-Nov)",
        where: "Alter do Chão (PA) · Paraty (RJ) · Jericoacoara (CE) · Ilhabela (SP)",
      },
    },
  },
  {
    id: "balonismo",
    image: balaoImg,
    intensity: "leve",
    i18n: {
      pt: {
        name: "Balonismo",
        tagline: "O silêncio mais bonito da sua vida",
        description: "Decolagem ao amanhecer, 45 minutos a 90 minutos voando ao ritmo do vento sobre cânions de basalto, vinhedos da Serra Gaúcha ou o sertão de Minas. O som é só o do queimador — entre rajadas, silêncio absoluto. Pouso com champagne e brinde ao mundo de cima.",
        season: "Praia Grande: maio a outubro · Boituva: abril a setembro",
        where: "Praia Grande (SC) — sobre os cânions de Aparados da Serra · Boituva (SP) · Pirenópolis (GO) · Vinícolas do RS",
      },
      en: {
        name: "Hot-air balloon",
        tagline: "The most beautiful silence of your life",
        description: "Sunrise lift-off, 45 to 90 minutes flying with the wind over basalt canyons, Gaucho-region vineyards or the Minas backlands. The only sound is the burner — between bursts, absolute silence. Landing with champagne.",
        season: "Praia Grande: May-Oct · Boituva: Apr-Sep",
        where: "Praia Grande (SC) — over Aparados da Serra canyons · Boituva (SP) · Pirenópolis (GO) · RS wineries",
      },
      es: {
        name: "Vuelo en globo",
        tagline: "El silencio más bello de tu vida",
        description: "Despegue al amanecer, 45 a 90 minutos volando al ritmo del viento sobre cañones de basalto, viñedos de la Serra Gaúcha o el sertón de Minas. Aterrizaje con champagne.",
        season: "Praia Grande: may-oct · Boituva: abr-sep",
        where: "Praia Grande (SC) — cañones de Aparados da Serra · Boituva (SP) · Pirenópolis (GO)",
      },
      it: {
        name: "Mongolfiera",
        tagline: "Il silenzio più bello della tua vita",
        description: "Decollo all'alba, 45-90 minuti volando con il vento sopra canyon di basalto, vigneti della Serra Gaucha o l'entroterra del Minas. Atterraggio con champagne.",
        season: "Praia Grande: mag-ott · Boituva: apr-set",
        where: "Praia Grande (SC) — sui canyon di Aparados da Serra · Boituva (SP) · Pirenópolis (GO)",
      },
      de: {
        name: "Heißluftballon",
        tagline: "Die schönste Stille deines Lebens",
        description: "Start bei Sonnenaufgang, 45 bis 90 Minuten Flug im Rhythmus des Windes über Basalt-Canyons, Weinberge der Serra Gaúcha oder das Hinterland von Minas. Landung mit Champagner.",
        season: "Praia Grande: Mai-Okt · Boituva: Apr-Sep",
        where: "Praia Grande (SC) — Canyons der Aparados da Serra · Boituva (SP) · Pirenópolis (GO)",
      },
    },
  },
  {
    id: "canoagem",
    image: canoagemImg,
    intensity: "moderada",
    i18n: {
      pt: {
        name: "Canoagem em águas selvagens",
        tagline: "A pagaia, o silêncio, e o bicho que aparece",
        description: "Caiaques individuais ou canoas canadenses em rios e lagoas de pouca intensidade — mas muita vida. Na Amazônia, você entra em igarapés onde só dá passagem para a canoa; no Pantanal, jacarés boiam a 5 metros; no Jalapão, atravessa o Rio Novo entre dunas alaranjadas.",
        season: "Pantanal: maio-out · Amazônia: o ano todo · Jalapão: maio a setembro",
        where: "Anavilhanas (AM) · Pantanal Norte (MT) — Rio Cuiabá · Jalapão (TO) — Rio Novo · Lençóis Maranhenses (MA) — Rio Preguiças",
      },
      en: {
        name: "Wild-water canoeing",
        tagline: "The paddle, the silence, the creature that appears",
        description: "Solo kayaks or Canadian canoes on low-intensity rivers and lakes — but with abundant life. In the Amazon you enter igarapés barely wider than the canoe; in the Pantanal, caimans drift 5 m away; in Jalapão you cross the Rio Novo between orange dunes.",
        season: "Pantanal: May-Oct · Amazon: year-round · Jalapão: May-Sep",
        where: "Anavilhanas (AM) · Northern Pantanal (MT) · Jalapão (TO) — Rio Novo · Lençóis Maranhenses (MA)",
      },
      es: {
        name: "Canotaje en aguas salvajes",
        tagline: "La pala, el silencio, el bicho que aparece",
        description: "Kayaks individuales o canoas canadienses en ríos y lagunas de baja intensidad — pero mucha vida. En la Amazonía entras en igarapés donde solo cabe la canoa; en el Pantanal, caimanes flotan a 5 m.",
        season: "Pantanal: may-oct · Amazonía: todo el año · Jalapão: may-sep",
        where: "Anavilhanas (AM) · Pantanal Norte (MT) · Jalapão (TO) · Lençóis Maranhenses (MA)",
      },
      it: {
        name: "Canoa in acque selvagge",
        tagline: "La pagaia, il silenzio, l'animale che appare",
        description: "Kayak singoli o canoe canadesi su fiumi e lagune di bassa intensità — ma con vita abbondante. In Amazzonia entri in igarapés appena più larghi della canoa; nel Pantanal, caimani galleggiano a 5 m.",
        season: "Pantanal: mag-ott · Amazzonia: tutto l'anno · Jalapão: mag-set",
        where: "Anavilhanas (AM) · Pantanal Nord (MT) · Jalapão (TO) · Lençóis Maranhenses (MA)",
      },
      de: {
        name: "Wildwasser-Kanu",
        tagline: "Das Paddel, die Stille, das Tier, das auftaucht",
        description: "Einzelkajaks oder Kanadier auf ruhigen Flüssen und Seen — aber mit reichem Leben. Im Amazonas fährst du in Igarapés, kaum breiter als das Kanu; im Pantanal treiben Kaimane 5 m entfernt.",
        season: "Pantanal: Mai-Okt · Amazonas: ganzjährig · Jalapão: Mai-Sep",
        where: "Anavilhanas (AM) · Nord-Pantanal (MT) · Jalapão (TO) · Lençóis Maranhenses (MA)",
      },
    },
  },
  {
    id: "trekking",
    image: trekkingImg,
    intensity: "intensa",
    i18n: {
      pt: {
        name: "Travessias e trekking",
        tagline: "Dormir onde só se chega andando",
        description: "Trilhas de 2 a 6 dias com pernoite em casas de moradores, abrigos ou camping. O Vale do Pati (Chapada Diamantina) é considerado o trekking mais bonito do Brasil; a Travessia Petrópolis-Teresópolis cruza a Serra dos Órgãos; o circuito do Sino Real (RJ) sobe ao ponto mais alto do estado.",
        season: "Maio a setembro (estação seca)",
        where: "Vale do Pati (BA) — 4 a 6 dias · Travessia Petrópolis-Teresópolis (RJ) — 3 dias · Serra Fina (MG/SP) — 4 dias · Chapada dos Veadeiros (GO) — múltiplas",
      },
      en: {
        name: "Multi-day treks",
        tagline: "Sleep where only walking gets you",
        description: "2 to 6-day trails with overnight stays in local homes, refuges or camps. The Pati Valley (Chapada Diamantina) is considered Brazil's most beautiful trek; the Petrópolis-Teresópolis traverse crosses the Serra dos Órgãos.",
        season: "May to September (dry season)",
        where: "Pati Valley (BA) — 4 to 6 days · Petrópolis-Teresópolis traverse (RJ) — 3 days · Serra Fina (MG/SP) — 4 days · Chapada dos Veadeiros (GO)",
      },
      es: {
        name: "Travesías y trekking",
        tagline: "Dormir donde solo se llega caminando",
        description: "Senderos de 2 a 6 días con pernocte en casas de moradores, refugios o camping. El Valle do Pati (Chapada Diamantina) es considerado el trekking más bello de Brasil.",
        season: "Mayo a septiembre (estación seca)",
        where: "Vale do Pati (BA) — 4-6 días · Petrópolis-Teresópolis (RJ) — 3 días · Serra Fina (MG/SP) · Chapada dos Veadeiros (GO)",
      },
      it: {
        name: "Traversate e trekking",
        tagline: "Dormire dove si arriva solo a piedi",
        description: "Sentieri di 2-6 giorni con pernottamento in case di abitanti, rifugi o campeggio. La Valle do Pati (Chapada Diamantina) è considerata il trekking più bello del Brasile.",
        season: "Maggio-settembre (stagione secca)",
        where: "Valle do Pati (BA) — 4-6 giorni · Petrópolis-Teresópolis (RJ) — 3 giorni · Serra Fina (MG/SP) · Chapada dos Veadeiros (GO)",
      },
      de: {
        name: "Mehrtägige Trekkingtouren",
        tagline: "Schlafen, wo man nur zu Fuß hinkommt",
        description: "2- bis 6-tägige Wanderungen mit Übernachtungen bei Einheimischen, in Hütten oder Camps. Das Pati-Tal (Chapada Diamantina) gilt als Brasiliens schönste Trekkingtour.",
        season: "Mai bis September (Trockenzeit)",
        where: "Pati-Tal (BA) — 4-6 Tage · Petrópolis-Teresópolis (RJ) — 3 Tage · Serra Fina (MG/SP) · Chapada dos Veadeiros (GO)",
      },
    },
  },
  {
    id: "tirolesa",
    image: tirolesaImg,
    intensity: "moderada",
    i18n: {
      pt: {
        name: "Tirolesas e arvorismo",
        tagline: "Voar entre as copas a 60 km/h",
        description: "Cabos de aço cruzando vales e cachoeiras, e percursos suspensos entre árvores. Em Brotas há a Mega Tirolesa, com 700 m sobre o Rio Jacaré-Pepira; em Bonito você cruza buracos de calcário; em Aparados da Serra desliza sobre o cânion. Adrenalina amigável para quase qualquer idade.",
        season: "O ano todo",
        where: "Brotas (SP) — Parque dos Saltos · Bonito (MS) — Boca da Onça · Aparados da Serra (RS) · Domingos Martins (ES)",
      },
      en: {
        name: "Ziplines & canopy walks",
        tagline: "Fly between treetops at 60 km/h",
        description: "Steel cables crossing valleys and waterfalls, plus suspended routes between trees. Brotas has the Mega Tirolesa, 700 m over the Jacaré-Pepira river; Bonito crosses limestone sinkholes; Aparados da Serra glides over the canyon.",
        season: "Year-round",
        where: "Brotas (SP) — Parque dos Saltos · Bonito (MS) — Boca da Onça · Aparados da Serra (RS) · Domingos Martins (ES)",
      },
      es: {
        name: "Tirolesas y arborismo",
        tagline: "Volar entre las copas a 60 km/h",
        description: "Cables de acero cruzando valles y cascadas, y recorridos suspendidos entre árboles. En Brotas hay la Mega Tirolesa, 700 m sobre el Río Jacaré-Pepira.",
        season: "Todo el año",
        where: "Brotas (SP) · Bonito (MS) — Boca da Onça · Aparados da Serra (RS)",
      },
      it: {
        name: "Teleferiche e percorsi sospesi",
        tagline: "Volare tra le chiome a 60 km/h",
        description: "Cavi d'acciaio che attraversano valli e cascate, e percorsi sospesi tra gli alberi. A Brotas c'è la Mega Tirolesa, 700 m sul Rio Jacaré-Pepira.",
        season: "Tutto l'anno",
        where: "Brotas (SP) · Bonito (MS) — Boca da Onça · Aparados da Serra (RS)",
      },
      de: {
        name: "Ziplines & Hochseilgärten",
        tagline: "Mit 60 km/h zwischen Baumkronen fliegen",
        description: "Stahlseile über Täler und Wasserfälle, dazu Hängeparcours zwischen Bäumen. In Brotas die Mega Tirolesa, 700 m über dem Jacaré-Pepira; in Bonito über Kalksteinkrater.",
        season: "Ganzjährig",
        where: "Brotas (SP) · Bonito (MS) — Boca da Onça · Aparados da Serra (RS)",
      },
    },
  },
  {
    id: "surf",
    image: surfImg,
    intensity: "moderada",
    i18n: {
      pt: {
        name: "Surf — do iniciante ao tubo perfeito",
        tagline: "O Brasil tem onda para todo nível",
        description: "Aulas para iniciantes em praias de fundo de areia e ondas suaves; secret spots para surfistas avançados; e a temporada de tubos pesados em Fernando de Noronha entre dezembro e março. Instrutores ISA, pranchas, lycra e escola na praia.",
        season: "Nordeste: ago-fev · Sudeste/Sul: abril-out · Noronha: dez-mar (tubo)",
        where: "Itacaré (BA) · Florianópolis (SC) — Joaquina, Praia Mole · Fernando de Noronha (PE) — Cacimba do Padre · Maresias (SP)",
      },
      en: {
        name: "Surf — from first lesson to perfect barrel",
        tagline: "Brazil has a wave for every level",
        description: "Lessons for beginners on sandy-bottom beaches with mellow waves; secret spots for advanced surfers; and the heavy-barrel season at Fernando de Noronha between December and March. ISA-certified instructors, boards, rash guards.",
        season: "Northeast: Aug-Feb · Southeast/South: Apr-Oct · Noronha: Dec-Mar",
        where: "Itacaré (BA) · Florianópolis (SC) · Fernando de Noronha (PE) — Cacimba do Padre · Maresias (SP)",
      },
      es: {
        name: "Surf — del iniciante al tubo perfecto",
        tagline: "Brasil tiene ola para todo nivel",
        description: "Clases para principiantes en playas de fondo de arena; spots secretos para surfistas avanzados; y la temporada de tubos pesados en Fernando de Noronha entre diciembre y marzo.",
        season: "Nordeste: ago-feb · Sur: abr-oct · Noronha: dic-mar",
        where: "Itacaré (BA) · Florianópolis (SC) · Fernando de Noronha (PE) · Maresias (SP)",
      },
      it: {
        name: "Surf — dal principiante al tubo perfetto",
        tagline: "Il Brasile ha un'onda per ogni livello",
        description: "Lezioni per principianti su spiagge di sabbia con onde dolci; spot segreti per surfisti avanzati; e la stagione dei tubi pesanti a Fernando de Noronha tra dicembre e marzo.",
        season: "Nordeste: ago-feb · Sud: apr-ott · Noronha: dic-mar",
        where: "Itacaré (BA) · Florianópolis (SC) · Fernando de Noronha (PE) · Maresias (SP)",
      },
      de: {
        name: "Surfen — vom Anfänger bis zur perfekten Tube",
        tagline: "Brasilien hat eine Welle für jedes Niveau",
        description: "Unterricht für Anfänger an Sandstränden mit sanften Wellen; Geheimspots für Fortgeschrittene; und die Tube-Saison in Fernando de Noronha zwischen Dezember und März.",
        season: "Nordosten: Aug-Feb · Süden: Apr-Okt · Noronha: Dez-Mär",
        where: "Itacaré (BA) · Florianópolis (SC) · Fernando de Noronha (PE) · Maresias (SP)",
      },
    },
  },
  {
    id: "kitesurf",
    image: kitesurfImg,
    intensity: "intensa",
    i18n: {
      pt: {
        name: "Kitesurf — o vento eterno do Nordeste",
        tagline: "De junho a janeiro, o alísio nunca falha",
        description: "O litoral entre Fortaleza e o Delta do Parnaíba é um dos melhores spots de kitesurf do planeta: vento constante (15-25 nós), águas rasas em lagoas, downwinds épicos entre falésias e dunas. Escola para iniciantes em Cumbuco; downwind de 10 dias para experientes (Cumbuco até Atins).",
        season: "Junho a janeiro (alísios constantes)",
        where: "Cumbuco (CE) · Jericoacoara (CE) · Atins (MA) · Barra Grande (PI) · Icaraizinho (CE)",
      },
      en: {
        name: "Kitesurf — the eternal Northeast wind",
        tagline: "From June to January, the trade winds never fail",
        description: "The coast between Fortaleza and the Parnaíba Delta is one of the planet's premier kitesurf zones: steady wind (15-25 knots), shallow-lagoon waters, epic downwinds between cliffs and dunes. School for beginners in Cumbuco; 10-day downwind for advanced (Cumbuco to Atins).",
        season: "June to January (steady trade winds)",
        where: "Cumbuco (CE) · Jericoacoara (CE) · Atins (MA) · Barra Grande (PI) · Icaraizinho (CE)",
      },
      es: {
        name: "Kitesurf — el viento eterno del Nordeste",
        tagline: "De junio a enero, el alisio nunca falla",
        description: "La costa entre Fortaleza y el Delta del Parnaíba es uno de los mejores spots de kitesurf del planeta: viento constante (15-25 nudos), aguas bajas en lagunas, downwinds épicos entre acantilados y dunas.",
        season: "Junio a enero (alisios constantes)",
        where: "Cumbuco (CE) · Jericoacoara (CE) · Atins (MA) · Barra Grande (PI)",
      },
      it: {
        name: "Kitesurf — il vento eterno del Nordeste",
        tagline: "Da giugno a gennaio, gli alisei non sbagliano mai",
        description: "La costa tra Fortaleza e il Delta del Parnaíba è uno dei migliori spot di kitesurf del pianeta: vento costante (15-25 nodi), acque basse in laguna, downwind epici tra scogliere e dune.",
        season: "Giugno-gennaio (alisei costanti)",
        where: "Cumbuco (CE) · Jericoacoara (CE) · Atins (MA) · Barra Grande (PI)",
      },
      de: {
        name: "Kitesurfen — der ewige Wind des Nordostens",
        tagline: "Von Juni bis Januar lassen die Passatwinde nie nach",
        description: "Die Küste zwischen Fortaleza und dem Parnaíba-Delta ist eines der besten Kitesurf-Gebiete der Welt: konstanter Wind (15-25 Knoten), seichtes Lagunenwasser, epische Downwinds zwischen Klippen und Dünen.",
        season: "Juni bis Januar (konstante Passatwinde)",
        where: "Cumbuco (CE) · Jericoacoara (CE) · Atins (MA) · Barra Grande (PI)",
      },
    },
  },
];
