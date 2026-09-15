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
import heroImg from "@/assets/grupo-singapura-tailandia-2027.jpg";

const CANONICAL = "/grupos/singapura-tailandia-2027";
const GROUP_NAME = "Grupo Singapura & Tailândia · Abril 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Singapura & Tailândia (saída 25/04/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito, até o retorno a São Paulo." },
  { title: "Dois países em um roteiro", desc: "A Singapura futurista e três faces da Tailândia: Phuket, Krabi e a Bangkok dos templos e mercados." },
  { title: "Gardens by the Bay e Marina Bay", desc: "Os jardins verticais, o skyline e os bairros de Chinatown e Little India, com guia local." },
  { title: "Mar de Andamão", desc: "Praia de Kamala em Phuket e Ao Nang em Krabi, com falésias de calcário e ilhas próximas." },
  { title: "Bangkok à beira do rio Chao Phraya", desc: "Grande Palácio, Wat Pho e a vida nos canais e mercados da capital tailandesa." },
  { title: "Voos pela Ethiopian Airlines", desc: "São Paulo–Adis Abeba–Singapura na ida e retorno de Bangkok via Adis Abeba, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 25/04 (dom)", title: "São Paulo → Adis Abeba", points: ["Apresentação em Guarulhos e encontro com o coordenador do grupo", "Voo Ethiopian Airlines ET 507 com destino a Adis Abeba", "Pernoite a bordo"] },
  { day: "Dia 2 — 26/04 (seg)", title: "Adis Abeba → Singapura", points: ["Chegada a Adis Abeba e conexão no voo ET 638 para Singapura", "Pernoite a bordo"] },
  { day: "Dia 3 — 27/04 (ter)", title: "Singapura", points: ["Chegada a Singapura, recepção e traslado ao hotel", "Restante do dia livre para o primeiro contato com a cidade-estado", "Almoço e jantar livres (não inclusos)"] },
  { day: "Dia 4 — 28/04 (qua)", title: "Singapura · city tour", points: ["Visita à cidade: Marina Bay, Merlion Park, Chinatown, Little India e o bairro colonial", "Gardens by the Bay, com os Supertrees", "Tarde livre · opcional (não incluso): Sentosa Island ou observatório Marina Bay Sands"] },
  { day: "Dia 5 — 29/04 (qui)", title: "Singapura → Phuket", points: ["Traslado ao aeroporto e voo a Phuket", "Recepção e traslado ao hotel na praia de Kamala", "Restante do dia livre à beira do mar de Andamão"] },
  { day: "Dia 6 — 30/04 (sex)", title: "Phuket", points: ["Dia livre para praia e descanso", "Opcional (não incluso): passeio de barco à Baía de Phang Nga e à Ilha de James Bond", "Almoço e jantar livres (não inclusos)"] },
  { day: "Dia 7 — 01/05 (sáb)", title: "Phuket · cidade antiga", points: ["Visita à Phuket Town, com a arquitetura sino-portuguesa da Thalang Road", "Mirante de Karon e Big Buddha", "Tarde livre · almoço e jantar livres (não inclusos)"] },
  { day: "Dia 8 — 02/05 (dom)", title: "Phuket → Krabi", points: ["Traslado terrestre até Krabi, entre plantações e montanhas de calcário", "Hospedagem em Ao Nang, a poucos passos da praia", "Restante do dia livre"] },
  { day: "Dia 9 — 03/05 (seg)", title: "Krabi", points: ["Dia livre em Ao Nang", "Opcional (não incluso): passeio de long tail boat às Quatro Ilhas ou a Railay Beach", "Almoço e jantar livres (não inclusos)"] },
  { day: "Dia 10 — 04/05 (ter)", title: "Krabi → Bangkok", points: ["Traslado ao aeroporto de Krabi e voo a Bangkok", "Recepção e traslado ao hotel, à beira do rio Chao Phraya", "Restante do dia livre"] },
  { day: "Dia 11 — 05/05 (qua)", title: "Bangkok · templos", points: ["Grande Palácio Real e o Templo do Buda de Esmeralda", "Wat Pho, com o Buda Reclinado", "Tarde livre · opcional (não incluso): passeio pelos canais em long tail boat"] },
  { day: "Dia 12 — 06/05 (qui)", title: "Bangkok", points: ["Dia livre para mercados, spas e compras", "Opcional (não incluso): mercado flutuante de Damnoen Saduak e mercado ferroviário de Maeklong", "Almoço e jantar livres (não inclusos)"] },
  { day: "Dia 13 — 07/05 (sex)", title: "Bangkok → Adis Abeba", points: ["Apartamentos disponíveis até às 12h e tempo livre conforme o horário do voo", "Traslado ao aeroporto e voo Ethiopian com conexão em Adis Abeba", "Pernoite a bordo"] },
  { day: "Dia 14 — 08/05 (sáb)", title: "São Paulo", points: ["Chegada a Guarulhos · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Singapura", hotel: "Furama Riverfront Singapore" },
  { city: "Phuket (Kamala)", hotel: "Novotel Phuket Kamala Beach" },
  { city: "Krabi (Ao Nang)", hotel: "Aonang Villa Resort" },
  { city: "Bangkok", hotel: "Ramada Plaza Bangkok Menam Riverside" },
];

const included = [
  "Bilhete aéreo São Paulo / Singapura e Bangkok / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Voos internos Singapura / Phuket e Krabi / Bangkok",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados de chegada e saída com assistência em todas as cidades",
  "Traslado terrestre Phuket / Krabi",
  "City tour em Singapura, com Gardens by the Bay",
  "Visitas em Phuket e em Bangkok, com Grande Palácio e Wat Pho",
];

const notIncluded = [
  "Taxas de aeroporto e combustível (USD 715)",
  "IOF",
  "Bebidas nas refeições",
  "Almoços e jantares indicados como não inclusos",
  "Passeios opcionais em Singapura, Phuket, Krabi e Bangkok",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais, lavanderia, telefonemas e frigobar",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento do grupo?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno a São Paulo. Nas cidades, as visitas são conduzidas por guias locais." },
  { q: "Quais documentos são exigidos para Singapura e Tailândia?", a: "Brasileiros não precisam de visto para turismo. É necessário passaporte com validade mínima de seis meses, o Singapore Arrival Card, o Thailand Digital Arrival Card e o certificado internacional de vacinação contra febre amarela." },
  { q: "Como é o clima nessa época do ano?", a: "É quente e úmido, com temperaturas em geral entre 26°C e 34°C e pancadas de chuva rápidas. Leve roupas leves de algodão ou linho, capa de chuva fina, protetor solar e um agasalho leve para os ambientes com ar-condicionado." },
  { q: "Há regras de vestimenta nos templos?", a: "Sim. Nos templos de Bangkok é exigido cobrir ombros e joelhos, e os sapatos são retirados na entrada. Recomendamos levar um lenço ou pareô e meias confortáveis." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 715 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 14 dias por Singapura e Tailândia, de 25 de abril a 8 de maio de 2027, com guia acompanhante desde o Brasil: Singapura, Phuket, Krabi e Bangkok.",
  image: heroImg,
  touristType: "Ásia, praias, templos, gastronomia e cidades contemporâneas",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "5967.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-04-25", priceValidUntil: "2027-04-25" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoSingapuraTailandia2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Singapura e Tailândia 2027 com Guia desde o Brasil | Create" description="14 dias entre Singapura, Phuket, Krabi e Bangkok, com voos internos e visitas guiadas. Saída 25/04/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Singapura e Tailândia 2027, viagem em grupo Ásia, Phuket, Krabi, Bangkok, guia brasileiro, Ethiopian Airlines, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Skyline de Singapura ao anoitecer e falésias tailandesas sobre o mar de Andamão" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Abril 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 25 de abril a 8 de maio de 2027</p>
          <h1 className="heading-hero text-white mb-6">Singapura & Tailândia: da cidade do futuro ao mar de Andamão</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">14 dias entre jardins verticais, praias de falésias e os templos dourados de Bangkok — com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "25/04 a 08/05/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "Ethiopian Airlines" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Duas Ásias em uma só viagem</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela Ethiopian Airlines</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, conexão em Adis Abeba e os voos internos Singapura–Phuket e Krabi–Bangkok. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Adis Abeba (ADD) → Singapura (SIN)</p><p className="text-white/75 text-sm mt-1">25/04 · ET 507 — 26/04 · conexão ET 638, chegada a Singapura em 27/04</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Bangkok (BKK) → Adis Abeba (ADD) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">07/05 · voo Ethiopian com conexão em Adis Abeba e chegada a Guarulhos em 08/05</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">14 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de US$ 5.938 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 715 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "US$ 5.938", extra: "+ IOF" }, { label: "Apto duplo", price: "US$ 5.967", extra: "+ IOF" }, { label: "Apto individual", price: "US$ 7.148", extra: "+ IOF" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para Singapura e Tailândia em abril de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoSingapuraTailandia2027;
