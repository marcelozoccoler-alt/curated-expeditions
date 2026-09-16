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
import heroImg from "@/assets/grupo-mendoza-reveillon-30-dezembro.jpg";

const CANONICAL = "/grupos/mendoza-reveillon-30-dezembro-2026";
const GROUP_NAME = "Grupo Mendoza · Réveillon 2027 (saída 30/12) — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Mendoza · Réveillon 2027 (saída 30/12/2026)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante toda a viagem até o retorno." },
  { title: "Virada já no segundo dia", desc: "Bodega Santa Julia durante o dia e, à noite, jantar festivo e programação de Réveillon no Ahijuna Show Folclórico." },
  { title: "Vinícola Santa Julia", desc: "Aula de empanadas argentinas e almoço incluído harmonizado com vinhos orgânicos da Familia Zuccardi." },
  { title: "Alta Montanha e Aconcágua", desc: "Represa Potrerillos, Uspallata, Ponte do Inca e o mirante do Cerro Aconcágua, com almoço crioulo incluído." },
  { title: "Vale de Uco", desc: "Três vinícolas com tours e degustações, e almoço de três passos harmonizado em uma das bodegas." },
  { title: "Voos diretos pela LATAM", desc: "São Paulo–Mendoza em classe econômica, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 30/12 (qua)", title: "São Paulo → Mendoza", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo LATAM 8168 às 12h15, chegada a Mendoza às 16h15", "Recepção e traslado ao hotel", "Restante do dia livre"] },
  { day: "Dia 2 — 31/12 (qui)", title: "Santa Julia · Réveillon", points: ["Visita à Bodega Santa Julia, referência em vinhos orgânicos", "Aula de culinária de empanadas argentinas", "Almoço incluído harmonizado com vinhos da casa", "À noite, Ahijuna Show Folclórico com jantar festivo e programação de Réveillon incluídos"] },
  { day: "Dia 3 — 01/01 (sex)", title: "Mendoza · city tour", points: ["Manhã livre para descanso", "City tour à tarde: fundação da cidade, Praça da Independência e rua Emilio Civit", "Parque General San Martín e Cerro de la Gloria", "Estádio Malvinas Argentinas e anfiteatro Frank Romero Day"] },
  { day: "Dia 4 — 02/01 (sáb)", title: "Alta Montanha e Aconcágua", points: ["Rota Nacional 7 acompanhando o rio Mendoza", "Represa Potrerillos, Uspallata, Ponte do Inca e mirante do Cerro Aconcágua", "Almoço crioulo incluído no restaurante Valle Andino", "Retorno ao hotel"] },
  { day: "Dia 5 — 03/01 (dom)", title: "Vale de Uco", points: ["Saída para o Vale de Uco, a cerca de 100 km da cidade", "Visita a três vinícolas, com tours e degustações", "Almoço incluído de três passos harmonizado em uma das bodegas", "Retorno ao hotel"] },
  { day: "Dia 6 — 04/01 (seg)", title: "Mendoza → São Paulo", points: ["Apartamentos disponíveis até às 12h e traslado ao aeroporto", "Voo LATAM 8020 às 13h", "Chegada prevista a Guarulhos às 16h30 · fim dos nossos serviços"] },
];

const hotels = [{ city: "Mendoza", hotel: "NH Mendoza Cordillera" }];

const included = [
  "Bilhete aéreo São Paulo / Mendoza / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português ou espanhol na chegada e na saída",
  "Visitas com guia local em português ou espanhol: city tour em Mendoza, Tour Alta Montanha, Vinícola Santa Julia e Vale de Uco com três vinícolas",
  "Entrada no Ahijuna Show Folclórico em 31/12, com jantar e programação de Réveillon (a uma quadra do hotel; não inclui traslados)",
  "3 almoços (sem bebidas)",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (USD 168)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Jantares e demais refeições não indicadas como incluídas",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Qual a diferença entre as duas saídas de Réveillon para Mendoza?", a: "Esta saída parte em 30/12/2026 pela LATAM e a virada acontece no segundo dia de viagem, logo após a visita à Bodega Santa Julia. Há também a saída de 29/12/2026 pela GOL, com o tour de Alta Montanha no dia 31." },
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno. As visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Quais documentos são necessários?", a: "Passaporte ou RG original em bom estado e emitido há menos de dez anos. Não é necessário visto para brasileiros." },
  { q: "Como é o clima no fim de dezembro em Mendoza?", a: "É verão, com dias quentes e secos, em geral entre 18°C e 33°C, e noites mais frescas na montanha. Leve protetor solar, óculos de sol, chapéu e um agasalho leve para a Alta Montanha." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 168 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva." },
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
  description: "Réveillon 2027 em Mendoza, de 30 de dezembro de 2026 a 04 de janeiro de 2027, com guia desde o Brasil: Vinícola Santa Julia, virada com show folclórico, city tour, Alta Montanha com Aconcágua e Vale de Uco.",
  image: heroImg,
  touristType: "Vinhos, gastronomia, Andes e Réveillon",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "2578.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2026-12-30", priceValidUntil: "2026-12-30" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoMendozaReveillon30Dezembro = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Mendoza Réveillon 2027 saída 30/12 com Guia | Create Travel" description="6 dias aos pés dos Andes: Santa Julia, virada com show folclórico, city tour, Alta Montanha e Vale de Uco. Saída 30/12/2026 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Réveillon Mendoza 2027, viagem em grupo Mendoza saída 30 de dezembro, Vale de Uco com guia brasileiro, Aconcágua, LATAM, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Estrada da alta montanha com lago turquesa e picos nevados dos Andes em Mendoza" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Réveillon 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 30/12/2026 a 04/01/2027</p>
          <h1 className="heading-hero text-white mb-6">Mendoza: brindando 2027 aos pés dos Andes</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">6 dias de bodegas premiadas, alta montanha até o Aconcágua, Vale de Uco e uma virada com gastronomia e música argentina.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "30/12/2026 a 04/01/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "LATAM" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Vinhedos, montanhas e novos começos</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela LATAM</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, em voos diretos. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Mendoza (MDZ)</p><p className="text-white/75 text-sm mt-1">30/12 · LA 8168 às 12h15, chegada às 16h15</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Mendoza (MDZ) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">04/01 · LA 8020 às 13h, chegada às 16h30</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">6 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotel previsto</p><h2 className="heading-section text-foreground">Hospedagem selecionada</h2><p className="text-muted-foreground mt-4">Com café da manhã incluído. Hotel previsto ou similar da mesma categoria.</p></div><div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de US$ 2.548 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 168 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "US$ 2.548", extra: "+ IOF US$ 64" }, { label: "Apto duplo", price: "US$ 2.578", extra: "+ IOF US$ 65" }, { label: "Apto individual", price: "US$ 2.938", extra: "+ IOF US$ 77" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para o Réveillon em Mendoza.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoMendozaReveillon30Dezembro;
