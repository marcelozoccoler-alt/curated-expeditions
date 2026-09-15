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
import heroImg from "@/assets/grupo-polonia-tchequia-2027.jpg";

const CANONICAL = "/grupos/polonia-tchequia-maio-2027";
const GROUP_NAME = "Grupo Polônia & Tchéquia · Maio 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Polônia & Tchéquia (saída 19/05/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Coordenador brasileiro desde São Paulo, com guias locais em português ou espanhol nas visitas." },
  { title: "Varsóvia que renasceu", desc: "Cidade Velha reconstruída, Castelo Real, Museu de História dos Judeus Poloneses e o Parque Łazienki com o monumento a Chopin." },
  { title: "Częstochowa e a Virgem Negra", desc: "Mosteiro de Jasna Góra, um dos maiores centros de peregrinação da Europa." },
  { title: "Cracóvia e Wieliczka", desc: "Praça do Mercado, Castelo de Wawel, bairro Kazimierz, Fábrica de Schindler e a catedral subterrânea da Mina de Sal." },
  { title: "Wadowice, cidade de João Paulo II", desc: "A casa da família Wojtyła e a basílica onde Karol foi batizado, com o tradicional chá da tarde." },
  { title: "Brno e Praga", desc: "A capital da Morávia e, no fim, Ponte Carlos, Castelo de Praga, Catedral de São Vito e o relógio astronômico." },
];

const itinerary = [
  { day: "Dia 1 — 19/05 (qua)", title: "São Paulo → Amsterdã", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo KLM KL 792 às 21h45", "Pernoite a bordo"] },
  { day: "Dia 2 — 20/05 (qui)", title: "Amsterdã → Varsóvia", points: ["Chegada às 14h20 e conexão", "Voo KL 1317 às 17h, chegada a Varsóvia às 18h55", "Traslado ao hotel"] },
  { day: "Dia 3 — 21/05 (sex)", title: "Varsóvia", points: ["Cidade Velha reconstruída e Castelo Real", "Museu de História dos Judeus Poloneses", "Panorâmica pelo Palácio da Cultura e da Ciência", "Tempo livre no bairro de Praga"] },
  { day: "Dia 4 — 22/05 (sáb)", title: "Varsóvia", points: ["Parque Łazienki, com o monumento a Chopin", "Área das embaixadas, Monumento aos Mártires da II Guerra e Praça Kamkowy", "Tarde livre"] },
  { day: "Dia 5 — 23/05 (dom)", title: "Varsóvia · Częstochowa → Cracóvia", points: ["Mosteiro de Jasna Góra, na Colina da Luz", "A Madona Negra, padroeira da Polônia", "Chegada a Cracóvia e hospedagem"] },
  { day: "Dia 6 — 24/05 (seg)", title: "Cracóvia", points: ["Praça do Mercado, Basílica de Santa Maria, Antiga Prefeitura e Castelo de Wawel", "Almoço livre (não incluso)", "Bairro judeu de Kazimierz", "Fábrica de Oskar Schindler, hoje museu"] },
  { day: "Dia 7 — 25/05 (ter)", title: "Cracóvia · Wieliczka", points: ["Minas de Sal de Wieliczka, com a Catedral de Sal, galerias e lagos subterrâneos", "Restante do dia livre no centro e no mercado central"] },
  { day: "Dia 8 — 26/05 (qua)", title: "Cracóvia · Wadowice → Brno", points: ["Wadowice: casa da família Wojtyła e basílica onde João Paulo II foi batizado", "Chá da tarde do Papa incluído", "Continuação para Brno, na República Tcheca"] },
  { day: "Dia 9 — 27/05 (qui)", title: "Brno → Praga", points: ["Panorâmica por Brno: Praça da Liberdade, Catedral de São Pedro e São Paulo, Castelo Špilberk e Antiga Prefeitura", "Chegada a Praga e visita ao centro histórico, Ponte Carlos e Praça da Cidade Velha", "Bairro do Castelo, Catedral de São Vito, Igreja de São Jorge, Rua dos Ourives e o Loreto", "Jantar típico folclórico incluído"] },
  { day: "Dia 10 — 28/05 (sex)", title: "Praga", points: ["Dia livre", "Opcional (não incluso): Karlovy Vary, com o Mirante Diana e a cervejaria Krušovice"] },
  { day: "Dia 11 — 29/05 (sáb)", title: "Praga → Amsterdã → São Paulo", points: ["Traslado ao aeroporto", "Voo KL 1352 às 08h50, chegada a Amsterdã às 10h25", "Conexão KL 791 às 13h, chegada a Guarulhos às 19h50 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Varsóvia", hotel: "Mercure Warszawa" },
  { city: "Cracóvia", hotel: "Novotel Krakow Centrum" },
  { city: "Brno", hotel: "International Brno" },
  { city: "Praga", hotel: "Ambassador" },
];

const included = [
  "Bilhete aéreo São Paulo / Varsóvia e Praga / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro desde São Paulo",
  "Traslados com assistência em português ou espanhol na chegada em Varsóvia e na saída em Praga",
  "Visitas com guia local em português ou espanhol conforme o roteiro",
  "Entradas: Parque Łazienki, Fábrica de Schindler, Minas de Sal de Wieliczka e Castelo de Praga",
  "1 jantar típico folclórico em Praga (sem bebidas)",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 239)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Passeio opcional a Karlovy Vary",
  "Almoços e demais refeições não indicadas como incluídas",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um coordenador brasileiro segue com o grupo desde o embarque em Guarulhos até o retorno. As visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto?", a: "Não para turismo. Polônia e República Tcheca integram o espaço Schengen; o passaporte deve ter validade mínima de seis meses a partir da data de retorno. Para 2027 pode ser exigida a autorização eletrônica europeia ETIAS — orientamos cada viajante no momento adequado." },
  { q: "Como é o clima em maio na Europa Central?", a: "É plena primavera, com temperaturas em geral entre 12°C e 23°C, jardins floridos e dias longos. Leve agasalho intermediário, capa de chuva compacta e calçado confortável para as ruas de pedra." },
  { q: "A visita à Mina de Sal exige preparo físico?", a: "O percurso inclui escadas na descida e caminhada por galerias, com temperatura constante em torno de 14°C. Recomendamos calçado fechado e um agasalho leve; quem tem limitações de mobilidade deve nos avisar com antecedência." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 239 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 11 dias pela Polônia e República Tcheca na primavera, de 19 a 29 de maio de 2027, com guia desde o Brasil: Varsóvia, Częstochowa, Cracóvia, Wieliczka, Wadowice, Brno e Praga.",
  image: heroImg,
  touristType: "História, fé, cultura e cidades históricas da Europa Central",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "5086.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-05-19", priceValidUntil: "2027-05-19" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoPoloniaTchequia2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Polônia e Tchéquia Maio 2027 com Guia desde o Brasil | Create" description="11 dias pela Europa Central: Varsóvia, Częstochowa, Cracóvia, Wieliczka, Wadowice, Brno e Praga. Saída 19/05/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Polônia e Tchéquia 2027, viagem em grupo Cracóvia, Praga com guia brasileiro, excursão Europa Central saindo de São Paulo, KLM, Wieliczka, Jasna Góra, Wadowice, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Castelo e catedral de Praga sobre o rio Moldava ao anoitecer, com árvores da primavera" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Primavera na Europa Central 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 19 a 29 de maio de 2027</p>
          <h1 className="heading-hero text-white mb-6">Polônia & Tchéquia: uma viagem pelo coração da Europa</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">11 dias entre Varsóvia, Częstochowa, Cracóvia, a Mina de Sal de Wieliczka, Wadowice, Brno e Praga.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "19 a 29/05/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "KLM" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">História, fé e cidades que encantam</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela KLM</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, via Amsterdã. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Amsterdã (AMS) → Varsóvia (WAW)</p><p className="text-white/75 text-sm mt-1">19/05 · KL 792 às 21h45 — 20/05 · KL 1317 às 17h, chegada às 18h55</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Praga (PRG) → Amsterdã (AMS) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">29/05 · KL 1352 às 08h50 — conexão KL 791 às 13h, chegada às 19h50</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">11 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 5.074 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 239 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 5.074", extra: "+ IOF € 123" }, { label: "Apto duplo", price: "€ 5.086", extra: "+ IOF € 124" }, { label: "Apto individual", price: "€ 6.016", extra: "+ IOF € 153" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para Polônia e Tchéquia em maio de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoPoloniaTchequia2027;
