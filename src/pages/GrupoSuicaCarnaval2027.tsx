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
import heroImg from "@/assets/grupo-suica-carnaval-2027.jpg";

const CANONICAL = "/grupos/suica-carnaval-2027";
const GROUP_NAME = "Grupo Suíça no Inverno · Carnaval 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Suíça no Inverno · Carnaval 2027 (saída 03/02/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito até o retorno." },
  { title: "Bernina Express", desc: "Travessia dos Alpes de Tirano a Chur, patrimônio da UNESCO, com o Viaduto de Landwasser e mais de 2.200 metros de altitude." },
  { title: "Glacier Express", desc: "De Chur a Zurique pelo Oberalp Pass, a bordo do trem panorâmico mais famoso do mundo." },
  { title: "Monte Titlis e Lindt", desc: "Teleférico giratório Titlis Rotair a mais de 3.000 metros e o Lindt Home of Chocolate em Zurique." },
  { title: "Lucerna, Grindelwald e Berna", desc: "Kapellbrücke e o Lion Monument, os Alpes Berneses e o centro medieval de Berna, patrimônio da UNESCO." },
  { title: "Gruyères, Montreux e Genebra", desc: "Degustação de queijos na fábrica Gruyère, a Riviera Suíça e o Patek Philippe Museum em Genebra." },
];

const itinerary = [
  { day: "Dia 1 — 03/02 (qua)", title: "São Paulo → Madri", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo Iberia 268 às 15h10", "Pernoite a bordo"] },
  { day: "Dia 2 — 04/02 (qui)", title: "Madri → Milão", points: ["Chegada às 05h30 e conexão", "Voo Iberia 673 às 11h25, chegada a Milão às 13h40", "Traslado ao hotel · apartamentos disponíveis a partir das 16h"] },
  { day: "Dia 3 — 05/02 (sex)", title: "Milão", points: ["Panorâmica de cerca de 3 horas: Duomo, Galleria Vittorio Emanuele II, Teatro alla Scala e Castello Sforzesco", "Tarde livre"] },
  { day: "Dia 4 — 06/02 (sáb)", title: "Milão · Tirano · St. Moritz → Chur", points: ["Viagem até Tirano, na Lombardia", "Almoço incluído em restaurante local", "Bernina Express: Viaduto de Landwasser e o ponto mais alto da linha", "Passagem por St. Moritz e chegada a Chur"] },
  { day: "Dia 5 — 07/02 (dom)", title: "Chur · Andermatt → Zurique", points: ["Glacier Express de Chur, cruzando vales, pontes e o Oberalp Pass", "Chegada a Zurique e hospedagem"] },
  { day: "Dia 6 — 08/02 (seg)", title: "Zurique", points: ["Bahnhofstrasse e o centro histórico Old Town", "Lindt Home of Chocolate, com degustações", "Tarde livre"] },
  { day: "Dia 7 — 09/02 (ter)", title: "Zurique · Engelberg · Titlis → Lucerna", points: ["Subida ao Monte Titlis pelo teleférico giratório Titlis Rotair", "Tempo livre no topo, com neve e vistas de 360°", "Lucerna: Kapellbrücke, centro histórico e Lion Monument"] },
  { day: "Dia 8 — 10/02 (qua)", title: "Lucerna · Grindelwald · Interlaken → Berna", points: ["Grindelwald, aos pés da face norte do Eiger", "Interlaken, entre os lagos Thun e Brienz", "Berna, patrimônio da UNESCO", "Jantar incluído com raclete típico (sem bebidas)"] },
  { day: "Dia 9 — 11/02 (qui)", title: "Berna", points: ["Arcadas comerciais, torre do relógio Zytglogge e o Federal Palace", "Mirantes sobre o rio Aare", "Tempo livre"] },
  { day: "Dia 10 — 12/02 (sex)", title: "Berna · Gruyères · Montreux · Lausanne → Genebra", points: ["Gruyères, com visita e degustação na fábrica de queijo Gruyère", "Montreux, às margens do Lago Léman, e passagem por Lausanne", "Chegada a Genebra"] },
  { day: "Dia 11 — 13/02 (sáb)", title: "Genebra", points: ["Lago Léman, centro histórico, Catedral de Saint-Pierre e o relógio de flores", "Entrada incluída no Patek Philippe Museum", "Jantar de despedida incluído, com fondue e show folclórico suíço"] },
  { day: "Dia 12 — 14/02 (dom)", title: "Genebra → Madri → São Paulo", points: ["Traslado ao aeroporto", "Voo Iberia 618 às 18h35, chegada a Madri às 20h40", "Conexão Iberia 267 às 23h55 · pernoite a bordo"] },
  { day: "Dia 13 — 15/02 (seg)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 07h05 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Milão", hotel: "NH Milano Touring" },
  { city: "Chur", hotel: "ABC Hotel" },
  { city: "Zurique", hotel: "Mercure Zurich City" },
  { city: "Lucerna", hotel: "Astoria" },
  { city: "Berna", hotel: "Best Western Plus Bern" },
  { city: "Genebra", hotel: "Novotel Geneva Centre" },
];

const included = [
  "Bilhete aéreo São Paulo / Madri / Milão e Genebra / Madri / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português ou espanhol na chegada em Milão e na saída em Genebra",
  "Visitas e entradas conforme o roteiro, incluindo Lindt Home of Chocolate, Monte Titlis, fábrica de queijo Gruyère e Patek Philippe Museum",
  "Bilhete do Bernina Express (2ª classe turística)",
  "Bilhete do Glacier Express (2ª classe turística)",
  "1 almoço e 2 jantares (sem bebidas)",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 270)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Almoços e demais refeições não indicadas como incluídas",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno, com serviços locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto para a Suíça e a Itália?", a: "Não para turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno. Para 2027 pode ser exigida a autorização eletrônica europeia ETIAS — orientamos cada viajante no momento adequado." },
  { q: "Quanto frio faz em fevereiro nos Alpes?", a: "É pleno inverno alpino: nas cidades as temperaturas ficam em geral entre -3°C e 7°C e, no Titlis e nas passagens de montanha, bem abaixo de zero. Leve casaco térmico, segunda pele, luvas, gorro, cachecol, óculos de sol e calçado impermeável com boa aderência." },
  { q: "Os trens panorâmicos estão incluídos?", a: "Sim. Os bilhetes do Bernina Express e do Glacier Express estão incluídos em 2ª classe turística, em vagões panorâmicos." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 270 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 13 dias pela Suíça no inverno, de 03 a 15 de fevereiro de 2027, com guia desde o Brasil: Milão, Bernina Express, Glacier Express, Zurique, Titlis, Lucerna, Grindelwald, Berna, Gruyères, Montreux e Genebra.",
  image: heroImg,
  touristType: "Trens panorâmicos, Alpes, neve, chocolate e queijos suíços",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "6368.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-02-03", priceValidUntil: "2027-02-03" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoSuicaCarnaval2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Suíça no Inverno Carnaval 2027 com Guia desde o Brasil | Create" description="13 dias nos Alpes: Bernina Express, Glacier Express, Titlis, Lucerna, Berna, Gruyères e Genebra. Saída 03/02/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Suíça Carnaval 2027, Bernina Express, Glacier Express, viagem em grupo Suíça no inverno, excursão Alpes saindo de São Paulo, Iberia, Monte Titlis, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Trem panorâmico vermelho atravessando viaduto de pedra nos Alpes suíços cobertos de neve" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Carnaval 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 03 a 15 de fevereiro de 2027</p>
          <h1 className="heading-hero text-white mb-6">Suíça no inverno: Bernina e Glacier Express</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">13 dias entre os dois trens panorâmicos mais famosos do mundo, montanhas nevadas, chocolate, queijos e cidades alpinas.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "03 a 15/02/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "Iberia" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Os Alpes no auge do inverno</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela Iberia</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, via Madri. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Madri (MAD) → Milão (MXP)</p><p className="text-white/75 text-sm mt-1">03/02 · IB 268 às 15h10 — 04/02 · IB 673 às 11h25, chegada às 13h40</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Genebra (GVA) → Madri (MAD) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">14/02 · IB 618 às 18h35 — conexão IB 267 às 23h55, chegada em 15/02 às 07h05</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">13 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 6.338 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 270 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 6.338", extra: "+ IOF € 167" }, { label: "Apto duplo", price: "€ 6.368", extra: "+ IOF € 168" }, { label: "Apto individual", price: "€ 7.576", extra: "+ IOF € 206" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a Suíça no Carnaval de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoSuicaCarnaval2027;
