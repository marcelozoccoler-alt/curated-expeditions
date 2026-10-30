// Shared, browser-independent source for the page and its crawler-readable HTML.
import type { PackageLang, PackageCopy, BrazilPackageDef } from "./brazilPackageTypes";
import { AMAZON_GRAND_TOUR } from "./brazilPackages/amazonia-lencois-salvador-iguazu-rio";
import { AMAZON_GRAND_TOUR_PANTANAL } from "./brazilPackages/amazonia-lencois-salvador-iguazu-pantanal-rio";
import { PARATY_IGUAZU_PANTANAL_RIO } from "./brazilPackages/paraty-iguazu-pantanal-rio";
export type { PackageLang, BrazilPackageDef } from "./brazilPackageTypes";
export const PACKAGE_SLUG = "rio-pantanal-lencois-august-2027";
export const PACKAGE_FACTS = {
  priceEUR: 3985, travelers: 2, days: 12, nights: 11,
  start: "2027-08-07", end: "2027-08-18",
  exchange: { rate: 1.116, checkedOn: "2026-10-29", source: "https://wise.com/us/currency-converter/eur-to-usd-rate" },
  hotels: [
    { name: "Pousada Aguapé do Pantanal", location: "Pantanal", nights: 3 },
    { name: "Brisamar Hotel & SPA", location: "São Luís", nights: 2 },
    { name: "Pousada Encantes do Nordeste", location: "Barreirinhas", nights: 3 },
    { name: "Sol Ipanema Hotel", location: "Rio de Janeiro", nights: 3 },
  ],
  route: ["Rio de Janeiro", "Pantanal · Aquidauana", "São Luís · Lençóis", "Rio de Janeiro"],
} as const;
export const packagePath = (lang: PackageLang) => `/${lang}/brazil-packages/${PACKAGE_SLUG}`;
export const packageUSD = () => Math.round(PACKAGE_FACTS.priceEUR * PACKAGE_FACTS.exchange.rate);
export const packagePrice = (lang: PackageLang, currency: "EUR" | "USD") =>
  new Intl.NumberFormat(lang === "es" ? "es-ES" : "en-US", { style: "currency", currency, maximumFractionDigits: 0, minimumFractionDigits: 0, useGrouping: true }).format(currency === "EUR" ? PACKAGE_FACTS.priceEUR : packageUSD());

export const PACKAGE_GUIDES = [
  { slug: "pantanal", name: { es: "Pantanal", en: "Pantanal" } },
  { slug: "lencois-maranhenses", name: { es: "Lençóis Maranhenses", en: "Lençóis Maranhenses" } },
  { slug: "rio-de-janeiro", name: { es: "Río de Janeiro", en: "Rio de Janeiro" } },
] as const;
export const guidePackage = (lang: string, slug: string) => {
  if (lang !== "es" || !PACKAGE_GUIDES.some(g => g.slug === slug)) return undefined;
  const c = PACKAGE_COPY.es;
  return {
    path: packagePath("es"), title: c.h1, button: "Ver el viaje completo y solicitar propuesta",
    text: `${c.dates} · ${c.duration} · ${c.from} ${packagePrice("es", "EUR")} ${c.perPerson}. ${c.basis}. Vuelos internos incluidos; vuelos internacionales no incluidos. Naturaleza y safari fotográfico en Aquidauana, no búsqueda especializada de jaguares en Porto Jofre. Servicios compartidos según el itinerario; personalización con presupuesto propio.`,
  };
};

type Copy = PackageCopy;

export const PACKAGE_COPY: Record<PackageLang, Copy> = {
  es: {
    title: "Viaje Río, Pantanal y Lençóis Maranhenses | Agosto 2027",
    description: "Río, naturaleza en Aquidauana y Lençóis Maranhenses. 12 días, 7–18 agosto 2027, desde 3.985 € por persona, con vuelos internos. Propuesta en español.",
    eyebrow: "BRASIL EN TRES ESCENARIOS · AGOSTO 2027",
    h1: "Río, Pantanal y Lençóis Maranhenses",
    subtitle: "La vida silvestre del Pantanal. Las lagunas entre dunas. El mar de Río. Un viaje para sentir Brasil, sin prisas.",
    dates: "7–18 de agosto de 2027", duration: "12 días · 11 noches", from: "Desde", perPerson: "por persona", basis: "Precio base para dos viajeros", cta: "Quiero mi propuesta", viewRoute: "Descubrir el itinerario",
    introTitle: "Tres paisajes. Un Brasil que se queda contigo.",
    intro: "Del ritmo de una fazenda pantanera al silencio de las dunas, y de los ríos del Maranhão al mar de Ipanema. Una travesía cuidadosamente conectada, con vuelos internos, alojamientos y experiencias seleccionadas por Create Travel. La ruta comienza en Río rumbo al Pantanal y termina con tres noches para disfrutar de la ciudad a tu ritmo.",
    landscapes: "Combina el bioma del Pantanal con los paisajes costeros de Lençóis y Río: naturaleza, culturas y maneras distintas de vivir Brasil en un mismo viaje.",
    wildlifeNote: "En el Pantanal, esta ruta ofrece naturaleza y safari fotográfico en Aquidauana, con base en Pousada Aguapé y actividades según su programación. No incluye la búsqueda especializada de jaguares en Porto Jofre. La foto muestra un jaguar del río Piquiri, otra zona del Pantanal; ningún avistamiento está garantizado.",
    guidesTitle: "Conoce cada destino antes de viajar", guideLink: "Ver gu\u00eda de viaje",
    guideTeaser: "7–18 de agosto de 2027 · 12 días · desde 3.985 € por persona, base dos viajeros. Vuelos internos incluidos; vuelos internacionales no incluidos. Naturaleza y safari fotográfico en Aquidauana, no búsqueda especializada de jaguares en Porto Jofre.",
    guideButton: "Ver el viaje completo y solicitar propuesta",
    scenes: [
      { name: "Pantanal", label: "03 NOCHES · VIDA SILVESTRE", text: "Pousada Aguapé, a orillas del río Aquidauana. Pensión completa y actividades por los campos, senderos y aguas del Pantanal, según la programación de la pousada." },
      { name: "Lençóis Maranhenses", label: "03 NOCHES · DUNAS Y LAGUNAS", text: "Lagoa Bonita, Atins, Santo Amaro y el río Preguiças. Cuatro perspectivas de un paisaje que cambia con la luz, el viento y las aguas de cada temporada." },
      { name: "Río de Janeiro", label: "03 NOCHES · MAR Y MONTAÑAS", text: "Sol Ipanema Hotel y dos días libres. Pasear junto al mar, descubrir la ciudad o simplemente descansar: el cierre del viaje sigue tu propio ritmo." },
    ],
    seasonTitle: "Agosto: dos ritmos de la naturaleza",
    seasonText: "En el Pantanal, la estación seca suele favorecer la observación de fauna. En Lençóis, algunas lagunas pueden conservar el agua de las lluvias; su nivel varía cada año y por circuito. Ajustamos las visitas a las condiciones locales, sin garantizar avistamientos ni lagunas llenas.",
    itineraryTitle: "Tu viaje, día a día",
    days: [
      { title: "Río → Campo Grande → Pantanal", text: "Vuelo interno con equipaje facturado. Recepción y traslado de aproximadamente 3 h 30 a Pousada Aguapé. Instalación y cena incluida." },
      { title: "La vida de la fazenda", text: "Desayuno, almuerzo y cena. Dos actividades programadas por la pousada: entre las opciones, paseos a caballo, barco por el río Aquidauana, caminatas y safari fotográfico en 4×4." },
      { title: "Otro día en el Pantanal", text: "Pensión completa y dos actividades según la programación local. Nuevos senderos y paisajes; pueden incluir paseo en carreta u observación nocturna de fauna." },
      { title: "Pantanal → São Luís", text: "Después del desayuno, traslado a Campo Grande y vuelo a São Luís con equipaje facturado. Traslado al Brisamar Hotel & SPA." },
      { title: "Barreirinhas y Lagoa Bonita", text: "Traslado compartido a Barreirinhas a las 06:30. A las 14:00, excursión compartida en 4×4 al Circuito Lagoa Bonita, entre dunas y lagunas estacionales." },
      { title: "Atins, entre el río y el mar", text: "Salida a las 08:30 en excursión compartida en 4×4 hacia Atins. Calles de arena y vida junto al agua, entre los Lençóis, el río Preguiças y el mar." },
      { title: "Los paisajes de Santo Amaro", text: "A las 08:30, excursión compartida en 4×4 a Santo Amaro. Dunas y lagunas según las condiciones de la temporada." },
      { title: "Río Preguiças → São Luís", text: "A las 08:30, navegación compartida en lancha por el río Preguiças. A las 16:30, traslado compartido de regreso a São Luís y noche en el Brisamar." },
      { title: "De São Luís a Ipanema", text: "Traslado al aeropuerto y vuelo a Río con equipaje facturado. Recepción y traslado al Sol Ipanema Hotel, tu base para las próximas tres noches." },
      { title: "Río a tu ritmo", text: "Día libre con desayuno. Cristo Redentor, Pan de Azúcar, Jardín Botánico o Santa Teresa son propuestas opcionales, no incluidas. También puedes disfrutar de Ipanema." },
      { title: "Un día más junto al mar", text: "Día libre con desayuno. Playa, descanso o visitas opcionales al Museo del Mañana y al centro histórico, no incluidas en el paquete." },
      { title: "Hasta pronto, Brasil", text: "Check-out y traslado del hotel al aeropuerto de Río incluido. Fin de los servicios del paquete." },
    ],
    includesTitle: "Lo que está incluido",
    includes: ["Vuelos Río–Campo Grande, Campo Grande–São Luís y São Luís–Río, con equipaje facturado.", "11 noches en los alojamientos previstos; pensión completa en el Pantanal y desayuno en São Luís, Barreirinhas y Río.", "Traslados Campo Grande–Pousada Aguapé–Campo Grande (aprox. 3 h 30 por trayecto).", "Dos actividades diarias en el Pantanal según la programación de la pousada; guía bilingüe en español o inglés durante cuatro días.", "Traslados aeropuerto–hotel–aeropuerto en São Luís y Río; traslados compartidos São Luís–Barreirinhas–São Luís.", "Excursiones compartidas en 4×4 a Lagoa Bonita, Atins y Santo Amaro; navegación compartida por el río Preguiças.", "Guía local en portugués y guía acompañante bilingüe en las excursiones de Lençóis. Los traslados no incluyen guía bilingüe."],
    excludesTitle: "No incluido en el precio base",
    excludes: ["Vuelos internacionales hasta Brasil y de regreso.", "Visitas opcionales en Río y servicios no indicados en las inclusiones.", "Comidas fuera del régimen indicado y gastos personales. Consulta las condiciones completas en tu propuesta."],
    hotelsTitle: "Alojamientos previstos", nights: "noches",
    hotelNotes: ["Pensión completa", "Desayuno incluido", "O similar · categoría turística · desayuno", "Habitación estándar · desayuno"],
    priceTitle: "Tu próximo agosto puede ser aquí.",
    exchangeNote: "Referencia Wise consultada el 29/10/2026: 1 € = 1,116 US$. El importe en dólares es orientativo y se confirmará con el cambio del día de la reserva.",
    conditions: "Precio base por persona, calculado para dos viajeros. Hoteles y vuelos sujetos a disponibilidad y variaciones hasta la confirmación. La propuesta escrita confirma habitaciones, servicios y condiciones de reserva.",
    faqTitle: "Antes de viajar",
    faq: [
      { q: "¿Cuánto cuesta y qué fechas tiene el viaje?", a: "El precio base es de 3.985 € por persona, calculado para dos viajeros. Son 12 días y 11 noches, del 7 al 18 de agosto de 2027. El importe en dólares es una referencia cambiante; la propuesta final confirma disponibilidad y condiciones." },
      { q: "¿Tendré guía en español?", a: "El Pantanal incluye guía bilingüe en español o inglés durante cuatro días. En las excursiones de Lençóis hay guía local en portugués y acompañante bilingüe. Indica tu preferencia por el español al solicitar la propuesta. Los traslados no incluyen guía bilingüe." },
      { q: "¿Este es un safari específico para ver jaguares?", a: "No. Este itinerario visita el Pantanal de Aquidauana, con base en Pousada Aguapé y actividades de naturaleza. No incluye la ruta especializada de búsqueda de jaguares de Porto Jofre. Ningún avistamiento de fauna está garantizado." },
      { q: "¿Todo el viaje es privado?", a: "No. Los traslados entre São Luís y Barreirinhas y las excursiones de Lençóis son servicios compartidos. Las actividades del Pantanal siguen la programación de la pousada. Consulta si deseas adaptar servicios a un formato privado." },
      { q: "¿Agosto es una buena época para Lençóis y el Pantanal?", a: "La estación seca del Pantanal suele favorecer la observación de fauna. En Lençóis, el agua de las lagunas depende de las lluvias del año y del circuito. Las actividades se ajustan a las condiciones locales." },
      { q: "¿Puedo combinar otros destinos o biomas?", a: "Sí. Podemos estudiar una extensión a la Amazonía, Bonito, Foz de Iguazú u otros paisajes brasileños. Toda extensión se cotiza por separado; no está incluida en este precio base." },
    ],
    finalTitle: "Reserva tu viaje al Pantanal, Lençóis y Río para agosto de 2027.",
    finalText: "Combina tu viaje con otros escenarios de Brasil: la Amazonía, las Cataratas del Iguazú, Bonito y mucho más. Elige alojamientos con más encanto o lujo y adapta el itinerario a tu manera de viajar. La flexibilidad es total: diseñamos cada detalle según tus preferencias y el nivel de inversión que deseas dedicar a tu viaje. Cuéntanos qué imaginas y te enviamos una propuesta personalizada en español; las extensiones y los cambios de alojamiento se cotizan según tus elecciones, sujetos a disponibilidad.",
    whatsapp: "¡Hola, Create Travel! Me interesa el viaje Río, Pantanal y Lençóis Maranhenses del 7 al 18 de agosto de 2027, con precio base de 3.985 € por persona para dos viajeros. Quisiera recibir una propuesta en español con disponibilidad y condiciones.",
    back: "Descubrir Brasil", contact: "Hablemos de tu viaje",
  },
  en: {
    title: "Pantanal, Lençóis & Rio | August 2027 · Create Travel",
    description: "Pantanal wildlife safari, Lençóis Maranhenses lagoons and Rio. 12 days, 7–18 August 2027. From €3,985 per person. Request your written travel proposal.",
    eyebrow: "BRAZIL IN THREE LANDSCAPES · AUGUST 2027",
    h1: "Rio, Pantanal & Lençóis Maranhenses",
    subtitle: "The wildlife of the Pantanal. Lagoons between dunes. Rio by the sea. A journey to feel Brazil, at an unhurried pace.",
    dates: "7–18 August 2027", duration: "12 days · 11 nights", from: "From", perPerson: "per person", basis: "Base price for two travellers", cta: "Request my proposal", viewRoute: "Explore the itinerary",
    introTitle: "Three landscapes. One unforgettable Brazil.",
    intro: "From the rhythm of a Pantanal fazenda to the quiet of the dunes, and from Maranhão's rivers to the shores of Ipanema. A carefully connected journey with domestic flights, selected stays and experiences curated by Create Travel. Depart from Rio for the Pantanal, then finish with three nights to enjoy the city at your own pace.",
    landscapes: "Combine the Pantanal biome with the coastal landscapes of Lençóis and Rio: different ecosystems, cultures and ways of life within one Brazilian journey.",
    wildlifeNote: "In the Pantanal, this itinerary offers nature activities and photographic safari in Aquidauana, based at Pousada Aguapé and following its programme. It does not include Porto Jofre’s specialist jaguar-search itinerary. The photograph shows a jaguar by the Piquiri River, another area of the Pantanal; no wildlife sightings are guaranteed.",
    guidesTitle: "Get to know each destination", guideLink: "Explore the travel guide",
    guideTeaser: "7–18 August 2027 · 12 days · from €3,985 per person, based on two travellers. Domestic flights included; international flights not included. Nature and photographic safari in Aquidauana, not a specialist jaguar search in Porto Jofre.",
    guideButton: "See the full journey and request a proposal",
    scenes: [
      { name: "Pantanal", label: "03 NIGHTS · WILDLIFE", text: "Pousada Aguapé, beside the Aquidauana River. Full board and activities through the fields, trails and waterways of the Pantanal, following the lodge's programme." },
      { name: "Lençóis Maranhenses", label: "03 NIGHTS · DUNES & LAGOONS", text: "Lagoa Bonita, Atins, Santo Amaro and the Preguiças River. Four perspectives on a landscape shaped by light, wind and the waters of each season." },
      { name: "Rio de Janeiro", label: "03 NIGHTS · SEA & MOUNTAINS", text: "Sol Ipanema Hotel and two free days. Walk beside the ocean, discover the city or simply unwind: the final chapter follows your own rhythm." },
    ],
    seasonTitle: "August: two rhythms of nature",
    seasonText: "The Pantanal's dry season often favours wildlife observation. In Lençóis, some lagoons may retain rainwater; levels vary by year and circuit. Visits follow local conditions, with no guarantee of wildlife sightings or full lagoons.",
    itineraryTitle: "Your journey, day by day",
    days: [
      { title: "Rio → Campo Grande → Pantanal", text: "Domestic flight with checked baggage. Airport welcome and an approximately 3½-hour transfer to Pousada Aguapé. Settle in and enjoy your included dinner." },
      { title: "Life on a Pantanal fazenda", text: "Breakfast, lunch and dinner. Two lodge-scheduled activities, with options including horse riding, boating on the Aquidauana River, walks and a photographic safari in a 4×4." },
      { title: "Another day in the Pantanal", text: "Full board and two activities following the lodge programme. Explore more trails and landscapes; activities may include a carriage ride or nocturnal wildlife observation." },
      { title: "Pantanal → São Luís", text: "After breakfast, transfer to Campo Grande and fly to São Luís with checked baggage. Transfer to Brisamar Hotel & SPA." },
      { title: "Barreirinhas & Lagoa Bonita", text: "Shared transfer to Barreirinhas at 06:30. At 14:00, a shared 4×4 excursion to the Lagoa Bonita circuit, among dunes and seasonal lagoons." },
      { title: "Atins, between river and sea", text: "A shared 4×4 excursion to Atins departs at 08:30. Sandy lanes and life beside the water, between Lençóis, the Preguiças River and the sea." },
      { title: "The landscapes of Santo Amaro", text: "At 08:30, a shared 4×4 excursion to Santo Amaro. Dunes and lagoons according to seasonal conditions." },
      { title: "Preguiças River → São Luís", text: "Shared motorboat outing on the Preguiças River at 08:30. Shared return transfer to São Luís at 16:30, with another night at Brisamar." },
      { title: "São Luís to Ipanema", text: "Airport transfer and flight to Rio with checked baggage. Welcome and transfer to Sol Ipanema Hotel, your base for the next three nights." },
      { title: "Rio at your own pace", text: "Free day with breakfast. Christ the Redeemer, Sugarloaf Mountain, the Botanical Garden or Santa Teresa are optional suggestions, not included. Or simply enjoy Ipanema." },
      { title: "One more day by the sea", text: "Free day with breakfast. Beach time, rest or optional visits to the Museum of Tomorrow and the historic centre, not included in the package." },
      { title: "Until next time, Brazil", text: "Check-out and included transfer from your hotel to Rio airport. End of package services." },
    ],
    includesTitle: "What is included",
    includes: ["Flights Rio–Campo Grande, Campo Grande–São Luís and São Luís–Rio, with checked baggage.", "11 nights in the planned accommodation; full board in the Pantanal and breakfast in São Luís, Barreirinhas and Rio.", "Campo Grande–Pousada Aguapé–Campo Grande transfers (approximately 3½ hours each way).", "Two daily Pantanal activities following the lodge programme; a bilingual English- or Spanish-speaking guide for four days.", "Airport–hotel–airport transfers in São Luís and Rio; shared São Luís–Barreirinhas–São Luís transfers.", "Shared 4×4 excursions to Lagoa Bonita, Atins and Santo Amaro; a shared boat outing on the Preguiças River.", "A Portuguese-speaking local guide and a bilingual accompanying guide on Lençóis excursions. Transfers do not include a bilingual guide."],
    excludesTitle: "Not included in the base price",
    excludes: ["International flights to and from Brazil.", "Optional visits in Rio and services not listed as included.", "Meals outside the stated board basis and personal expenses. Request full conditions in your proposal."],
    hotelsTitle: "Planned accommodation", nights: "nights",
    hotelNotes: ["Full board", "Breakfast included", "Or similar · tourist category · breakfast", "Standard room · breakfast"],
    priceTitle: "Your next August could look like this.",
    exchangeNote: "Wise reference checked on 29 October 2026: €1 = US$1.116. The dollar amount is indicative and will be confirmed using the exchange rate on the booking date.",
    conditions: "Base price per person, calculated for two travellers. Hotels and flights are subject to availability and price changes until confirmed. Your written proposal confirms rooms, services and booking conditions.",
    faqTitle: "Before you travel",
    faq: [
      { q: "What does the trip cost, and when does it run?", a: "The base price is €3,985 per person, calculated for two travellers. The journey runs from 7 to 18 August 2027, with 12 days and 11 nights. The dollar amount is an exchange-rate reference; your final proposal confirms availability and conditions." },
      { q: "Will I have an English-speaking guide?", a: "The Pantanal includes a bilingual English- or Spanish-speaking guide for four days. Lençóis excursions include a Portuguese-speaking local guide and a bilingual accompanying guide. State your preferred language when requesting your proposal. Transfers do not include a bilingual guide." },
      { q: "Is this a dedicated jaguar safari?", a: "No. This itinerary visits the Aquidauana area of the Pantanal, based at Pousada Aguapé, with nature activities. It does not include Porto Jofre's specialist jaguar-search itinerary. No wildlife sightings are guaranteed." },
      { q: "Is the entire journey private?", a: "No. São Luís–Barreirinhas transfers and Lençóis excursions are shared services. Pantanal activities follow the lodge programme. Ask about adapting services if you prefer a private arrangement." },
      { q: "Is August a good time for Lençóis and the Pantanal?", a: "The Pantanal's dry season often favours wildlife observation. Lagoon levels in Lençóis depend on that year's rains and the circuit visited. Activities follow local conditions." },
      { q: "Can I combine other Brazilian destinations or biomes?", a: "Yes. We can explore extensions to the Amazon, Bonito, Iguazu Falls or other Brazilian landscapes. Extensions are quoted separately and are not included in this base price." },
    ],
    finalTitle: "Secure your Pantanal, Lençóis and Rio journey for August 2027.",
    finalText: "Combine your journey with Brazil's other remarkable landscapes: the Amazon, Iguazu Falls, Bonito and beyond. Choose stays with more charm or luxury and shape the itinerary around your way of travelling. Flexibility is complete: we tailor every detail to your preferences and the level of investment you wish to make in your journey. Tell us what you have in mind and we will send a personalised proposal in English; extensions and accommodation changes are quoted according to your choices, subject to availability.",
    whatsapp: "Hello Create Travel! I'm interested in Rio, Pantanal and Lençóis Maranhenses from 7 to 18 August 2027, with a base price of €3,985 per person for two travellers. Please send me a proposal in English with availability and booking conditions.",
    back: "Discover Brazil", contact: "Let's talk about your journey",
  },
};

export const packageWhatsApp = (lang: PackageLang) => `https://wa.me/5511963693159?text=${encodeURIComponent(PACKAGE_COPY[lang].whatsapp)}`;
export const packageJsonLd = (lang: PackageLang) => ({
  "@context": "https://schema.org", "@type": "TouristTrip",
  name: PACKAGE_COPY[lang].h1, description: PACKAGE_COPY[lang].description,
  url: `https://createtravel.tur.br${packagePath(lang)}`,
  provider: { "@type": "TravelAgency", name: "Create Travel", url: "https://createtravel.tur.br" },
  itinerary: { "@type": "ItemList", itemListElement: PACKAGE_COPY[lang].days.map((day, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Thing", name: day.title, description: day.text } })) },
  offers: { "@type": "Offer", price: PACKAGE_FACTS.priceEUR, priceCurrency: "EUR", url: `https://createtravel.tur.br${packagePath(lang)}`, description: PACKAGE_COPY[lang].conditions },
});

// ---- Multi-package registry (generic helpers) ----
export const RIO_PANTANAL_LENCOIS: BrazilPackageDef = { slug: PACKAGE_SLUG, facts: PACKAGE_FACTS, copy: PACKAGE_COPY, guides: PACKAGE_GUIDES };
export const BRAZIL_PACKAGES: BrazilPackageDef[] = [RIO_PANTANAL_LENCOIS, AMAZON_GRAND_TOUR, AMAZON_GRAND_TOUR_PANTANAL, PARATY_IGUAZU_PANTANAL_RIO];
export const findPackage = (slug?: string) => BRAZIL_PACKAGES.find(p => p.slug === slug);
export const pkgPath = (pkg: BrazilPackageDef, lang: PackageLang) => `/${lang}/brazil-packages/${pkg.slug}`;
export const pkgAmount = (pkg: BrazilPackageDef, currency: "EUR" | "USD", eur = pkg.facts.priceEUR) =>
  currency === "EUR" ? eur : Math.round(eur * pkg.facts.exchange.rate);
export const pkgPrice = (pkg: BrazilPackageDef, lang: PackageLang, currency: "EUR" | "USD", eur?: number) =>
  new Intl.NumberFormat(lang === "es" ? "es-ES" : "en-US", { style: "currency", currency, maximumFractionDigits: 0, minimumFractionDigits: 0, useGrouping: true }).format(pkgAmount(pkg, currency, eur));
export const pkgWhatsApp = (pkg: BrazilPackageDef, lang: PackageLang) => `https://wa.me/5511963693159?text=${encodeURIComponent(pkg.copy[lang].whatsapp)}`;
/** dd/mm label for a day index counted from the package start date. */
export const pkgDayLabel = (pkg: BrazilPackageDef, index: number) => {
  const d = new Date(`${pkg.facts.start}T12:00:00Z`); d.setUTCDate(d.getUTCDate() + index);
  return `${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}`;
};
export const pkgJsonLd = (pkg: BrazilPackageDef, lang: PackageLang) => {
  const c = pkg.copy[lang]; const url = `https://createtravel.tur.br${pkgPath(pkg, lang)}`;
  const offers: any[] = [{ "@type": "Offer", price: pkg.facts.priceEUR, priceCurrency: "EUR", url, availability: "https://schema.org/InStock", validFrom: pkg.facts.exchange.checkedOn, description: c.conditions }];
  if (pkg.facts.extension && c.extension) offers.push({ "@type": "Offer", name: c.extension.title, price: pkg.facts.extension.priceEUR, priceCurrency: "EUR", url, description: c.extension.text });
  return {
    "@context": "https://schema.org", "@type": "TouristTrip", name: c.h1, description: c.description, url, inLanguage: lang,
    touristType: lang === "es" ? "Viajeros que buscan naturaleza y cultura en Brasil" : "Travellers seeking nature and culture in Brazil",
    provider: { "@type": "TravelAgency", name: "Create Travel", url: "https://createtravel.tur.br" },
    itinerary: { "@type": "ItemList", itemListElement: c.days.map((day, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Thing", name: day.title, description: day.text } })) },
    offers: offers.length === 1 ? offers[0] : offers,
  };
};
/** Packages featured on a destination guide page (Spanish and English). */
export const guidePackages = (lang: string, slug: string) => {
  if (lang !== "es" && lang !== "en") return [];
  return BRAZIL_PACKAGES.filter(p => p.guides.some(g => g.slug === slug)).map(p => ({
    path: pkgPath(p, lang), eyebrow: p.copy[lang].eyebrow, title: p.copy[lang].h1, text: p.copy[lang].guideTeaser, button: p.copy[lang].guideButton,
  }));
};
