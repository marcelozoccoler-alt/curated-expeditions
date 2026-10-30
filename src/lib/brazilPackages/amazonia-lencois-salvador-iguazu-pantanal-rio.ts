import type { BrazilPackageDef, PackageCopy } from "../brazilPackageTypes";
import { AMAZON_GRAND_TOUR as BASE } from "./amazonia-lencois-salvador-iguazu-rio";

// 20-day version of the same PDF (30/10/2026): adds 3 nights at Pousada Aguapé before Rio.
const es = BASE.copy.es, en = BASE.copy.en;
const rioEs = [
  { title: "Río entre montaña, ciudad y mar", text: "Día libre junto al mar. Propuestas opcionales: Cristo Redentor y Parque Nacional de Tijuca; Pan de Azúcar y Urca; Centro, Santa Teresa y Lapa; playas." },
  { title: "Río a tu ritmo", text: "Último día completo para pasear por el paseo marítimo, disfrutar del paisaje u organizar una experiencia adicional." },
  { title: "Hasta pronto, Brasil", text: "Check-out tras tres noches en el Sol Ipanema y traslado al aeropuerto. Fin de los servicios." },
];
const rioEn = [
  { title: "Rio between mountains, city & sea", text: "A free day by the ocean. Optional: Christ the Redeemer and Tijuca National Park; Sugarloaf and Urca; Centro, Santa Teresa and Lapa; beaches." },
  { title: "Rio at your own pace", text: "A last full day to stroll the seafront, take in the views or arrange one more experience." },
  { title: "Until next time, Brazil", text: "Check-out after three nights at Sol Ipanema and airport transfer. End of services." },
];
const pantanalEs = [
  { title: "Foz → Campo Grande → Pantanal", text: "Vuelo GOL vía São Paulo (llegada a Campo Grande 09:30). Recepción en el aeropuerto y traslado por tierra a Pousada Aguapé. Cena y noche." },
  { title: "El Pantanal de cerca", text: "Pensión completa y dos actividades programadas por la pousada: cabalgatas, paseos en barco, caminatas, pesca de pirañas, safari fotográfico en 4×4, salida nocturna, paseo en carreta o vida de hacienda, según las condiciones locales." },
  { title: "Paisajes, fauna y vida pantanera", text: "Otro día con pensión completa y dos actividades. Las propuestas dependen del programa de la pousada y del clima." },
  { title: "Pantanal → Río de Janeiro", text: "Traslado a Campo Grande y vuelo GOL vía São Paulo, llegada a Río a las 14:45. Check-in en el Sol Ipanema." },
];
const pantanalEn = [
  { title: "Iguazu → Campo Grande → Pantanal", text: "GOL flight via São Paulo (arriving Campo Grande 09:30). Airport welcome and road transfer to Pousada Aguapé. Dinner and overnight." },
  { title: "The Pantanal up close", text: "Full board and two lodge-scheduled activities: horse riding, boat trips, walks, piranha fishing, 4×4 photographic safari, night outing, carriage ride or ranch life, depending on local conditions." },
  { title: "Landscapes, wildlife & ranch life", text: "Another full-board day with two activities, following the lodge programme and the weather." },
  { title: "Pantanal → Rio de Janeiro", text: "Transfer to Campo Grande and GOL flight via São Paulo, arriving in Rio at 14:45. Check in at Sol Ipanema." },
];
const scenePantanal = {
  es: { name: "Pantanal · Aquidauana", label: "03 NOCHES · VIDA SILVESTRE", text: "Pousada Aguapé, con pensión completa y dos actividades diarias: cabalgatas, barco, caminatas y safari fotográfico en 4×4. No es una ruta especializada en jaguares." },
  en: { name: "Pantanal · Aquidauana", label: "03 NIGHTS · WILDLIFE", text: "Pousada Aguapé, full board with two daily activities: horse riding, boating, walks and 4×4 photographic safari. Not a specialist jaguar itinerary." },
};
const build = (c: PackageCopy, lang: "es" | "en"): PackageCopy => {
  const isEs = lang === "es";
  const { extension: _omit, ...rest } = c;
  return {
    ...rest,
    title: isEs ? "Viaje Brasil 20 días: Amazonía, Lençóis, Iguazú, Pantanal y Río" : "20-Day Brazil Tour: Amazon, Lençóis, Iguazu, Pantanal & Rio",
    description: isEs
      ? "Amazonía, Lençóis Maranhenses, Salvador, Iguazú, Pantanal y Río en 20 días. 27 jul–15 ago 2027, desde 5.539 € por persona, vuelos internos incluidos. Propuesta en español."
      : "Amazon, Lençóis Maranhenses, Salvador, Iguazu, the Pantanal and Rio in 20 days. 27 Jul–15 Aug 2027, from €5,539 per person, domestic flights included.",
    eyebrow: isEs ? "EL GRAN BRASIL CON PANTANAL · 20 DÍAS · 2027" : "THE GRAND BRAZIL WITH THE PANTANAL · 20 DAYS · 2027",
    h1: isEs ? "Amazonía, Lençóis, Salvador, Iguazú, Pantanal y Río" : "Amazon, Lençóis, Salvador, Iguazu, Pantanal & Rio",
    subtitle: isEs ? "Seis Brasiles en un solo viaje: la selva, las dunas, Bahía, las Cataratas, la vida silvestre del Pantanal y el mar de Ipanema." : "Six Brazils in one journey: the rainforest, the dunes, Bahia, the Falls, the wildlife of the Pantanal and the sea at Ipanema.",
    dates: isEs ? "27 de julio – 15 de agosto de 2027" : "27 July – 15 August 2027",
    duration: isEs ? "20 días · 19 noches" : "20 days · 19 nights",
    introTitle: isEs ? "Seis paisajes. El Brasil más completo." : "Six landscapes. Brazil at its fullest.",
    intro: c.intro.replace(isEs ? "la fuerza de las Cataratas del Iguazú y, para terminar," : "the thunder of Iguazu Falls; and, to finish,", isEs ? "la fuerza de las Cataratas del Iguazú; tres noches de naturaleza en el Pantanal y, para terminar," : "the thunder of Iguazu Falls; three nights of nature in the Pantanal; and, to finish,"),
    landscapes: isEs ? "Brasil tiene siete grandes biomas y culturas muy distintas. Este itinerario reúne la Amazonía, la costa del Nordeste, la Mata Atlántica y el Pantanal en un solo viaje." : "Brazil has seven major biomes and strikingly different cultures. This itinerary brings together the Amazon, the northeastern coast, the Atlantic Forest and the Pantanal in one journey.",
    guideTeaser: isEs ? "27 de julio – 15 de agosto de 2027 · 20 días · desde 5.539 € por persona, base dos viajeros. Amazonía, Lençóis, Salvador, Iguazú, Pantanal y Río, con vuelos internos incluidos." : "27 July – 15 August 2027 · 20 days · from €5,539 per person, based on two travellers. Amazon, Lençóis, Salvador, Iguazu, the Pantanal and Rio, with domestic flights included.",
    guideButton: isEs ? "Ver el viaje de 20 días con Pantanal" : "See the 20-day journey with the Pantanal",
    scenes: [...c.scenes.slice(0, 4), scenePantanal[lang], c.scenes[4]],
    days: [...c.days.slice(0, 13), ...(isEs ? pantanalEs : pantanalEn), ...(isEs ? rioEs : rioEn)],
    includes: [
      isEs ? "Vuelos internos Manaus–São Luís, São Luís–Salvador, Salvador–Foz do Iguaçu, Foz–Campo Grande y Campo Grande–Río, según el itinerario." : "Domestic flights Manaus–São Luís, São Luís–Salvador, Salvador–Foz do Iguaçu, Foz–Campo Grande and Campo Grande–Rio, as per the itinerary.",
      isEs ? "19 noches en los alojamientos previstos, habitación doble estándar; pensión completa en la Amazonía y en el Pantanal, desayuno en el resto del viaje." : "19 nights in the planned accommodation, standard double room; full board in the Amazon and the Pantanal, breakfast elsewhere.",
      ...c.includes.slice(2, 5),
      isEs ? "Traslados Campo Grande–Pousada Aguapé–Campo Grande y dos actividades diarias en el Pantanal." : "Campo Grande–Pousada Aguapé–Campo Grande transfers and two daily Pantanal activities.",
      c.includes[5],
    ],
    hotelNotes: ["Pensión completa", "Desayuno", "Desayuno", "Desayuno", "Desayuno", "Pensión completa", "Desayuno"].map(n => isEs ? n : n === "Desayuno" ? "Breakfast" : "Full board"),
    priceTitle: isEs ? "Seis Brasiles en un solo viaje." : "Six Brazils in one journey.",
    faq: [
      isEs
        ? { q: "¿Cuánto cuesta y qué fechas tiene el viaje?", a: "Desde 5.539 € por persona, calculado para dos viajeros. Son 20 días y 19 noches, del 27 de julio al 15 de agosto de 2027. La versión de 17 días sin Pantanal parte de 4.128 € por persona." }
        : { q: "What does the trip cost, and when does it run?", a: "From €5,539 per person, based on two travellers. The journey runs 20 days and 19 nights, from 27 July to 15 August 2027. The 17-day version without the Pantanal starts at €4,128 per person." },
      isEs
        ? { q: "¿Qué vuelos están incluidos?", a: "Todos los vuelos internos: Manaus–São Luís, São Luís–Salvador, Salvador–Foz, Foz–Campo Grande y Campo Grande–Río. Los vuelos internacionales hasta Manaus y desde Río no están incluidos." }
        : { q: "Which flights are included?", a: "All domestic flights: Manaus–São Luís, São Luís–Salvador, Salvador–Foz, Foz–Campo Grande and Campo Grande–Rio. International flights to Manaus and home from Rio are not included." },
      c.faq[2],
      isEs
        ? { q: "¿Es un safari para ver jaguares?", a: "No. El Pantanal de esta ruta es Aquidauana, en Pousada Aguapé, con naturaleza, safari fotográfico y vida de hacienda. No incluye la búsqueda especializada de jaguares de Porto Jofre, que podemos cotizar aparte. Ningún avistamiento está garantizado." }
        : { q: "Is this a jaguar safari?", a: "No. The Pantanal on this route is Aquidauana, at Pousada Aguapé, with nature, photographic safari and ranch life. It does not include Porto Jofre's specialist jaguar search, which we can quote separately. No sightings are guaranteed." },
      ...c.faq.slice(4),
    ],
    finalTitle: isEs ? "Reserva tu gran viaje por Brasil con Pantanal para 2027." : "Secure your grand Brazil journey with the Pantanal for 2027.",
    finalText: c.finalText.replace(isEs ? "el Pantanal, Bonito" : "the Pantanal, Bonito", isEs ? "Bonito, Jalapão" : "Bonito, Jalapão"),
    whatsapp: isEs
      ? "¡Hola, Create Travel! Me interesa el viaje de 20 días Amazonía, Lençóis, Salvador, Iguazú, Pantanal y Río, del 27 de julio al 15 de agosto de 2027, desde 5.539 € por persona para dos viajeros. Quisiera recibir una propuesta en español."
      : "Hello Create Travel! I'm interested in the 20-day Amazon, Lençóis, Salvador, Iguazu, Pantanal and Rio journey, 27 July – 15 August 2027, from €5,539 per person for two travellers. Please send me a proposal in English.",
  };
};

export const AMAZON_GRAND_TOUR_PANTANAL: BrazilPackageDef = {
  slug: "amazon-lencois-salvador-iguazu-pantanal-rio-2027",
  facts: {
    priceEUR: 5539, travelers: 2, days: 20, nights: 19,
    start: "2027-07-27", end: "2027-08-15",
    exchange: BASE.facts.exchange,
    hotels: [...BASE.facts.hotels.slice(0, 5), { name: "Pousada Aguapé", location: "Pantanal · Aquidauana", nights: 3 }, BASE.facts.hotels[5]],
    route: ["Manaus · Amazonía", "São Luís · Lençóis", "Salvador", "Foz do Iguaçu", "Pantanal", "Rio de Janeiro"],
  },
  guides: [...BASE.guides.slice(0, 4), { slug: "pantanal", name: { es: "Pantanal", en: "Pantanal" } }, BASE.guides[4]],
  copy: { es: build(es, "es"), en: build(en, "en") },
};
