import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Check, Hotel, MapPin, Plane, Sparkles, Users, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import { buildHotelsFAQs, buildHotelsJsonLd, buildHotelsKeywords, getHotelUrl } from "@/lib/groupHotels";
import heroImg from "@/assets/grupo-carretera-austral-2027.jpg";

const CANONICAL = "/grupos/carretera-austral-abril-2027";
const GROUP_NAME = "Grupo Chile com Carretera Austral Abril 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Carretera Austral · Abril 2027 (saída 21/04/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante toda a jornada até o retorno a São Paulo." },
  { title: "A Carretera Austral no outono", desc: "Uma das estradas cênicas mais espetaculares do planeta em sua época mais bonita: bosques dourados, montanhas nevadas e a Patagônia em silêncio contemplativo." },
  { title: "Capelas de Mármore", desc: "Navegação pelo Lago General Carrera, de águas azul-turquesa, até as catedrais naturais esculpidas pela água ao longo de milhares de anos." },
  { title: "Glaciar San Rafael", desc: "Expedição de catamarã pelos fiordes patagônicos até a Laguna San Rafael, com open bar, brinde com gelo milenar e tudo incluído a bordo." },
  { title: "Termas da Enseada Pérez", desc: "Piscinas naturais de águas quentes emolduradas por fiordes, florestas e montanhas — relaxamento absoluto em plena natureza selvagem." },
  { title: "Cordeiro ao palo patagônico", desc: "Caminhada de contemplação no Parque Aikén del Sur seguida de autêntico assado patagônico no quincho do parque." },
];

const itinerary = [
  { day: "Dia 1 — 21/04 (qua)", title: "São Paulo → Santiago", points: ["Apresentação no Aeroporto de Guarulhos e encontro com nosso coordenador", "Voo LATAM 753 às 17h50 com destino a Santiago, chegada prevista às 21h10", "Recepção e traslado ao hotel (incluído)"] },
  { day: "Dia 2 — 22/04 (qui)", title: "Santiago", points: ["City tour pelas áreas históricas, cívicas e residenciais: Parque O'Higgins, Palácio de La Moneda, Plaza de Armas, Catedral e Cerro Santa Lucía", "Bairros de Providencia, Vitacura e Las Condes, com parada em centro de artesanato", "Tarde livre", "Sugestão opcional (não incluído): Vinícola Undurraga, no Vale do Maipo, com degustação"] },
  { day: "Dia 3 — 23/04 (sex)", title: "Santiago → Balmaceda → Capelas de Mármore → Puerto Tranquilo", points: ["Voo LATAM 1151 às 06h36 para Balmaceda, chegada às 10h00 (traslado ao aeroporto incluído)", "Início da Carretera Austral rumo ao sul, com parada na Cuesta del Diablo diante do Cerro Castillo e lanche ao ar livre com café e biscoitos", "Navegação de barco pelo Lago General Carrera até as Capelas de Mármore — capas de chuva fornecidas", "Almoço em Puerto Río Tranquilo (incluído) e jantar em restaurante em frente à hospedagem (incluído, sem bebidas)"] },
  { day: "Dia 4 — 24/04 (sáb)", title: "Puerto Tranquilo → Puerto Chacabuco", points: ["Café da manhã em restaurante em frente à hospedagem", "Viagem cênica até Puerto Chacabuco com paradas e lunch box (incluído)", "Hospedagem no Loberías del Sur e jantar incluído"] },
  { day: "Dia 5 — 25/04 (dom)", title: "Puerto Chacabuco · Termas da Enseada Pérez", points: ["Manhã nas piscinas naturais de águas termais da Enseada Pérez, entre fiordes e florestas", "Kit térmico com toalha, roupão ecológico e sandálias — levar traje de banho", "Café, biscoitos e coquetel incluídos no passeio", "Almoço e jantar no hotel (incluídos)"] },
  { day: "Dia 6 — 26/04 (seg)", title: "Expedição Laguna San Rafael e Glaciar San Rafael", points: ["Embarque às 08h em catamarã pelos fiordes patagônicos, com café da manhã a bordo", "Navegação entre montanhas, icebergs e águas geladas até o majestoso Glaciar San Rafael", "Almoço na rota, open bar de bebidas alcoólicas e não alcoólicas e brinde com gelo milenar — tudo incluído", "Retorno a Puerto Chacabuco por volta das 21h, jantar e hospedagem"] },
  { day: "Dia 7 — 27/04 (ter)", title: "Parque Aikén del Sur", points: ["Caminhada de contemplação pela flora e fauna patagônicas a 15 minutos do hotel", "Almoço no quincho do parque: autêntico cordeiro ao palo ao estilo patagônico (incluído)", "Retorno ao hotel, jantar incluído"] },
  { day: "Dia 8 — 28/04 (qua)", title: "Puerto Chacabuco → Balmaceda → São Paulo", points: ["Traslado ao aeroporto de Balmaceda (incluído)", "Voo LATAM 1150 às 11h19 para Santiago, chegada às 12h42", "Conexão para o voo LATAM 8105 às 16h25, chegada a Guarulhos às 21h10", "Fim dos nossos serviços"] },
];

const hotels = [
  { city: "Santiago", hotel: "Almacruz" },
  { city: "Puerto Tranquilo", hotel: "Hotel Bacaris" },
  { city: "Puerto Chacabuco", hotel: "Loberías del Sur" },
];

const included = [
  "Bilhete aéreo São Paulo / Santiago / Balmaceda / São Paulo pela LATAM, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português ou espanhol em Santiago e Balmaceda",
  "Visitas com guia local: city tour em Santiago em português; Capelas de Mármore, Laguna San Rafael, Parque Aikén e Enseada Pérez em espanhol",
  "Entradas conforme o roteiro",
  "Refeições: 1 lanche e 1 jantar em Puerto Tranquilo (sem bebidas), 1 lunch box, 2 almoços, 1 almoço de cordeiro ao palo patagônico e 3 jantares (sem bebidas)",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de aeroporto e combustível (US$ 160)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Passeio opcional à Vinícola Undurraga",
  "Despesas de maleteiros e de caráter pessoal, como frigobar, telefonemas e lavanderia",
  "Taxas, impostos e custos de documentação não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos. No destino, o city tour de Santiago é conduzido em português e as excursões patagônicas por guias locais em espanhol, sempre com o suporte do nosso acompanhante." },
  { q: "Brasileiros precisam de visto para o Chile?", a: "Não para viagens de turismo. Basta passaporte com validade de seis meses a partir da data de retorno ou RG em bom estado com emissão inferior a dez anos. Não há exigência de vacinas." },
  { q: "Como é o clima na Carretera Austral em abril?", a: "É o início do outono patagônico: dias frescos, noites frias e bosques em tons dourados e avermelhados. Recomendamos camadas, casaco impermeável, calçado firme e um traje de banho para as termas da Enseada Pérez." },
  { q: "As estradas são pavimentadas?", a: "Parte da Carretera Austral ainda é de cascalho — e é justamente isso que preserva o caráter remoto e autêntico da região. Viajamos com conforto e paradas planejadas para contemplação e lanches ao ar livre." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de US$ 160 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos à disponibilidade no momento da reserva." },
];

const hotelsJsonLd = buildHotelsJsonLd(hotels, GROUP_NAME, CANONICAL);
const hotelsFaqs = buildHotelsFAQs(hotels, GROUP_NAME, CANONICAL);
const hotelsKeywords = buildHotelsKeywords(hotels);
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": `${CONTACT.domain}${CANONICAL}#trip`,
  url: `${CONTACT.domain}${CANONICAL}`,
  name: GROUP_NAME,
  description: "Viagem de 8 dias pelo Chile e pela Carretera Austral, de 21 a 28 de abril de 2027, com guia acompanhante desde o Brasil: Santiago, Capelas de Mármore, Glaciar San Rafael, termas da Enseada Pérez e Parque Aikén del Sur.",
  image: heroImg,
  touristType: "Natureza, paisagens patagônicas, glaciares, termas e gastronomia",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "3956.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-04-21", priceValidUntil: "2027-04-21" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoCarreteraAustralAbril2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Carretera Austral Abril 2027 com Guia Brasileiro | Create" description="8 dias pelo Chile e Carretera Austral: Santiago, Capelas de Mármore, Glaciar San Rafael, termas e cordeiro patagônico. Saída 21/04/2027." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Carretera Austral 2027, viagem em grupo Chile, Patagônia com guia brasileiro, Capelas de Mármore, Glaciar San Rafael, excursão Chile saindo de São Paulo, LATAM, Puerto Chacabuco, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Lago azul-turquesa e montanhas nevadas da Carretera Austral no outono patagônico" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Outono na Patagônia 2027 · Vagas limitadas</div>
          <p className="text-caption text-gold mb-4">Grupo com guia acompanhante desde o Brasil · 21 a 28 de abril de 2027</p>
          <h1 className="heading-hero text-white mb-6">Chile com Carretera Austral: o outono em sua forma mais grandiosa</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">8 dias por uma das estradas mais espetaculares do planeta: Capelas de Mármore, Glaciar San Rafael, termas naturais e cordeiro ao palo.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "21 a 28/04/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "LATAM" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Uma Patagônia diferente: silenciosa, contemplativa e dourada</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela LATAM</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa. Ao sobrevoar a Cordilheira dos Andes, uma prévia da beleza que espera o grupo em solo chileno. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Santiago (SCL) → Balmaceda (BBA)</p><p className="text-white/75 text-sm mt-1">21/04 · LA 753 às 17h50, chegada às 21h10 · 23/04 · LA 1151 às 06h36, chegada às 10h00</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Balmaceda (BBA) → Santiago (SCL) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">28/04 · LA 1150 às 11h19 — conexão LA 8105 às 16h25, chegada a Guarulhos às 21h10</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">8 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Em Puerto Tranquilo, pousada aconchegante típica da vila patagônica, onde o luxo está no atendimento caloroso e na proximidade com a natureza. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de US$ 3.956 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de US$ 160 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea. Condições de pagamento: consulte a Create Travel.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "US$ 3.956", extra: "+ IOF US$ 107" }, { label: "Apto duplo", price: "US$ 3.988", extra: "+ IOF US$ 108" }, { label: "Apto individual", price: "US$ 4.388", extra: "+ IOF US$ 121" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Vagas limitadas — grupo com guia acompanhante</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a Carretera Austral em abril de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoCarreteraAustralAbril2027;
