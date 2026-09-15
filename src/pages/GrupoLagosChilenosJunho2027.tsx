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
import heroImg from "@/assets/grupo-lagos-chilenos-maio-2027.jpg";

const CANONICAL = "/grupos/lagos-chilenos-junho-2027";
const GROUP_NAME = "Grupo Lagos Chilenos · Junho 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Lagos Chilenos · Junho 2027 (saída 23/06/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito até o retorno." },
  { title: "Inverno chileno", desc: "Vulcões cobertos de neve, lagos espelhados e vilarejos silenciosos na estação mais cinematográfica do sul do Chile." },
  { title: "Santiago e vinhos", desc: "City tour pela capital aos pés dos Andes e visita com degustação na Vinícola Undurraga, no Vale do Maipo." },
  { title: "Navegação até Peulla", desc: "Travessia pelo Lago Todos los Santos, o Lago Esmeralda, entre os vulcões Osorno, Puntiagudo e Tronador." },
  { title: "Puerto Varas e Frutillar", desc: "Herança alemã às margens do Lago Llanquihue, Cataratas de Petrohué e o Teatro del Lago." },
  { title: "Voos pela LATAM", desc: "São Paulo–Santiago–Puerto Montt e retorno em classe econômica, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 23/06 (qua)", title: "São Paulo → Santiago", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo LATAM 753 às 17h50, chegada a Santiago às 21h10", "Recepção e traslado ao hotel"] },
  { day: "Dia 2 — 24/06 (qui)", title: "Santiago · Vinícola Undurraga", points: ["City tour: La Moneda, Praça das Armas, Catedral, Correio Central, Clube Hípico e Cerro Santa Lucía", "Bairros de Providência, Vitacura e Las Condes, com parada em loja de lápis-lazúli", "Almoço livre (não incluso)", "Tarde na Vinícola Undurraga, em Talagante, com visita às adegas e degustação"] },
  { day: "Dia 3 — 25/06 (sex)", title: "Santiago", points: ["Dia livre", "Opcional (não incluso): Valparaíso e Viña del Mar, com Plaza Sotomayor, funicular, Parque Quinta Vergara e almoço à beira-mar"] },
  { day: "Dia 4 — 26/06 (sáb)", title: "Santiago → Puerto Montt → Puerto Varas", points: ["Apartamentos disponíveis até às 11h e traslado ao aeroporto", "Voo LATAM 311 às 12h47, chegada a Puerto Montt às 14h33", "Traslado ao hotel em Puerto Varas, com apartamentos disponíveis após às 16h"] },
  { day: "Dia 5 — 27/06 (dom)", title: "Puerto Varas e Puerto Montt", points: ["Cerro Philippi, Igreja do Sagrado Coração de Jesus e casas históricas de estilo alemão", "Orla do Lago Llanquihue até Puerto Chico", "Puerto Montt: Plaza de Armas, Catedral, Monumento aos Colonos Alemães e mirante sobre a Baía de Reloncaví", "Enseada de Angelmó, com mercado de frutos do mar e feira de artesanato"] },
  { day: "Dia 6 — 28/06 (seg)", title: "Puerto Varas · Peulla", points: ["Estrada cênica margeando o Lago Llanquihue até Ensenada, aos pés do Vulcão Osorno", "Navegação pelo Lago Todos los Santos, o Lago Esmeralda, até Peulla", "Almoço livre (não incluso) e tarde livre na vila ecoturística", "Retorno navegando até Petrohué"] },
  { day: "Dia 7 — 29/06 (ter)", title: "Petrohué e Frutillar", points: ["Parque Nacional Vicente Pérez Rosales e as Cataratas de Petrohué", "Parada para almoço em Ensenada (não incluso), com vista para o lago e os vulcões", "Frutillar: orla do Lago Llanquihue, Teatro del Lago, cafés e lojas de artesanato"] },
  { day: "Dia 8 — 30/06 (qua)", title: "Puerto Varas → Santiago", points: ["Apartamentos disponíveis até às 11h e dia livre para últimas compras", "Traslado ao aeroporto de Puerto Montt", "Voo LATAM 284 às 18h22, chegada a Santiago às 20h05, com conexão para São Paulo"] },
  { day: "Dia 9 — 01/07 (qui)", title: "Santiago → São Paulo", points: ["Voo LATAM 8097 às 00h20", "Chegada a Guarulhos às 05h30 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Santiago", hotel: "Almacruz" },
  { city: "Puerto Varas", hotel: "Cabañas del Lago" },
];

const included = [
  "Bilhete aéreo São Paulo / Santiago / Puerto Montt / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português ou espanhol em Santiago e Puerto Montt",
  "Visitas com guia local conforme o roteiro (passeio a Petrohué em serviço regular, com guia em espanhol)",
  "Entradas: Vinícola Undurraga com degustação e Parque Nacional Vicente Pérez Rosales",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (USD 160)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Passeio opcional a Valparaíso e Viña del Mar",
  "Almoços indicados como não inclusos no roteiro",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno. No destino, as visitas são conduzidas por guias locais em português ou espanhol; o passeio a Petrohué é em serviço regular, com guia em espanhol." },
  { q: "Brasileiros precisam de visto para o Chile?", a: "Não para turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno e não há exigência de vacinas." },
  { q: "Como é o clima em junho na Região dos Lagos?", a: "É inverno: temperaturas em geral entre 3°C e 11°C, com chuvas frequentes e neve nas montanhas. Leve casaco impermeável, segunda pele, luvas, gorro, cachecol e calçado fechado com boa aderência." },
  { q: "O passeio a Valparaíso está incluído?", a: "Não. É um opcional oferecido no dia livre em Santiago, contratado à parte, assim como o almoço à beira-mar durante o passeio." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 160 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 8 dias pelos Lagos Chilenos em pleno outono, de 23 de junho a 1º de julho de 2027, com guia acompanhante desde o Brasil: Santiago, Vinícola Undurraga, Puerto Varas, Peulla, Petrohué e Frutillar.",
  image: heroImg,
  touristType: "Natureza, lagos, vulcões, vinhos e inverno no sul do Chile",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "2698.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-06-23", priceValidUntil: "2027-06-23" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoLagosChilenosJunho2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Lagos Chilenos Junho 2027 com Guia desde o Brasil | Create" description="9 dias no inverno chileno: Santiago, Vinícola Undurraga, Puerto Varas, Peulla, Petrohué e Frutillar. Saída 23/06/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Lagos Chilenos junho 2027, viagem em grupo Chile, Puerto Varas com guia brasileiro, inverno no sul do Chile, LATAM, Peulla, Frutillar, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Vulcão nevado refletido em lago cercado por folhagens de outono no sul do Chile" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Inverno 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 23 de junho a 1º de julho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Lagos Chilenos: o sul do Chile no coração do inverno</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">9 dias entre vulcões, lagos cristalinos, vinhos e cidades de herança alemã — com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "23/06 a 01/07/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "LATAM" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">A Região dos Lagos no inverno</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela LATAM</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa. Voos internos Santiago–Puerto Montt incluídos. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Santiago (SCL) → Puerto Montt (PMC)</p><p className="text-white/75 text-sm mt-1">23/06 · LA 753 às 17h50, chegada às 21h10 — 26/06 · LA 311 às 12h47, chegada a Puerto Montt às 14h33</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Puerto Montt (PMC) → Santiago (SCL) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">30/06 · LA 284 às 18h22, chegada às 20h05 — conexão LA 8097 em 01/07 às 00h20, chegada às 05h30</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">9 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de US$ 2.678 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 160 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "US$ 2.678", extra: "+ IOF US$ 71" }, { label: "Apto duplo", price: "US$ 2.698", extra: "+ IOF US$ 72" }, { label: "Apto individual", price: "US$ 3.340", extra: "+ IOF US$ 93" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para os Lagos Chilenos entre junho e julho de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoLagosChilenosJunho2027;
