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
import heroImg from "@/assets/grupo-croacia-bosnia-montenegro-2027.jpg";

const CANONICAL = "/grupos/croacia-bosnia-montenegro-2027";
const GROUP_NAME = "Grupo Croácia, Bósnia e Montenegro · Junho 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Croácia, Bósnia e Montenegro (saída 13/06/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito, até o retorno a São Paulo." },
  { title: "Três países em um só roteiro", desc: "Croácia, Bósnia e Herzegovina e Montenegro, ligados pela costa do Adriático e pelos vales interiores." },
  { title: "Lagos de Plitvice com almoço incluído", desc: "Passarelas suspensas entre lagos turquesa e cachoeiras no parque nacional mais famoso da Croácia." },
  { title: "Dubrovnik e a Ilha de Hvar", desc: "A cidade murada do Adriático e um dia inteiro na ilha mais luminosa da Dalmácia." },
  { title: "Mostar e Kotor", desc: "A ponte otomana de Mostar, o santuário de Medjugorje e a baía fiorde de Kotor, Patrimônio da UNESCO." },
  { title: "Voos pela Turkish Airlines", desc: "São Paulo–Istambul–Zagreb na ida e Dubrovnik–Istambul–São Paulo na volta, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 13/06 (dom)", title: "São Paulo → Istambul", points: ["Apresentação em Guarulhos e encontro com o coordenador do grupo", "Voo Turkish Airlines TK 16 às 15h30", "Pernoite a bordo"] },
  { day: "Dia 2 — 14/06 (seg)", title: "Istambul → Zagreb", points: ["Chegada a Istambul às 08h05 e conexão no voo TK 1053 às 11h50", "Chegada a Zagreb às 12h55, recepção e traslado ao hotel", "Restante do dia livre para um primeiro contato com a capital croata"] },
  { day: "Dia 3 — 15/06 (ter)", title: "Zagreb", points: ["Visita à Cidade Alta: Catedral de São Estêvão, Igreja de São Marcos, Parlamento e Palácio do Governo", "Cidade Baixa: Praça Ban Jelačić, Teatro Nacional e o mercado Dolac", "Tarde livre · almoço e jantar livres (não inclusos)"] },
  { day: "Dia 4 — 16/06 (qua)", title: "Zagreb → Plitvice → Zadar", points: ["Viagem ao Parque Nacional dos Lagos de Plitvice, Patrimônio da UNESCO", "Caminhada pelas passarelas entre lagos e cachoeiras, com passeio de barco elétrico", "Almoço incluído (sem bebidas)", "Continuação até Zadar, na costa da Dalmácia"] },
  { day: "Dia 5 — 17/06 (qui)", title: "Zadar", points: ["Visita ao centro histórico: Fórum Romano, Igreja de São Donato, Catedral de Santa Anastácia e Porta da Terra", "Órgão do Mar e Saudação ao Sol, na orla", "Tarde livre para cafés e a ilha-pedestre da cidade antiga"] },
  { day: "Dia 6 — 18/06 (sex)", title: "Zadar → Split", points: ["Viagem pela costa até Split, com paradas panorâmicas", "Visita ao Palácio de Diocleciano, Patrimônio da UNESCO, à catedral e à Praça do Povo", "Hospedagem em Split · almoço e jantar livres (não inclusos)"] },
  { day: "Dia 7 — 19/06 (sáb)", title: "Ilha de Hvar", points: ["Travessia de balsa até a Ilha de Hvar", "Cidade de Hvar: praça central, catedral, arsenal e mirante da fortaleza espanhola", "Tempo livre para banho de mar e almoço (não incluso) antes do retorno a Split"] },
  { day: "Dia 8 — 20/06 (dom)", title: "Split → Medjugorje → Mostar", points: ["Entrada na Bósnia e Herzegovina e visita a Medjugorje, importante centro de peregrinação", "Mostar: Stari Most, a ponte otomana reconstruída, e o bazar de Kujundžiluk", "Hospedagem na região de Mostar"] },
  { day: "Dia 9 — 21/06 (seg)", title: "Mostar → Dubrovnik", points: ["Viagem de volta ao Adriático, cruzando a fronteira para a Croácia", "Chegada a Dubrovnik e hospedagem", "Tempo livre · opcional (não incluso): teleférico ao Monte Srđ ao pôr do sol"] },
  { day: "Dia 10 — 22/06 (ter)", title: "Dubrovnik", points: ["Visita à cidade murada: Stradun, Palácio do Reitor, Catedral, Mosteiro Franciscano e Fonte de Onofrio", "Tarde livre para caminhar sobre as muralhas (ingresso não incluso)", "Almoço e jantar livres (não inclusos)"] },
  { day: "Dia 11 — 23/06 (qua)", title: "Baía de Kotor · Montenegro", points: ["Excursão de dia inteiro a Montenegro, margeando a Baía de Kotor", "Visita à cidade medieval de Kotor, Patrimônio da UNESCO, e parada em Perast", "Retorno a Dubrovnik · almoço livre (não incluso)"] },
  { day: "Dia 12 — 24/06 (qui)", title: "Dubrovnik → Istambul → São Paulo", points: ["Apartamentos disponíveis até às 12h e traslado ao aeroporto de Dubrovnik", "Voo TK 1440 com conexão em Istambul e seguimento para São Paulo", "Chegada a Guarulhos no dia seguinte · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Zagreb", hotel: "Sheraton Zagreb" },
  { city: "Zadar", hotel: "Hotel Kolovare" },
  { city: "Split", hotel: "Radisson Blu Resort Split" },
  { city: "Mostar", hotel: "Hotel Mepas" },
  { city: "Dubrovnik", hotel: "Hotel City Dubrovnik" },
];

const included = [
  "Bilhete aéreo São Paulo / Zagreb e Dubrovnik / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados de chegada e saída com assistência",
  "Visitas com guia local em Zagreb, Zadar, Split, Mostar e Dubrovnik",
  "Excursão de dia inteiro à Ilha de Hvar, com travessia de balsa",
  "Excursão de dia inteiro a Medjugorje e Mostar",
  "Excursão de dia inteiro a Montenegro, com Kotor e Perast",
  "Entrada e passeio de barco no Parque Nacional dos Lagos de Plitvice",
  "Almoço em Plitvice (sem bebidas)",
];

const notIncluded = [
  "Taxas de aeroporto e combustível (EUR 615)",
  "IOF",
  "Taxas locais de hospedagem pagas nos hotéis, quando aplicáveis",
  "Bebidas nas refeições",
  "Ingresso para caminhada sobre as muralhas de Dubrovnik e teleférico ao Monte Srđ",
  "Almoços e jantares indicados como não inclusos",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais, lavanderia, telefonemas e frigobar",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento do grupo?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno a São Paulo. Nas cidades, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto para Croácia, Bósnia e Montenegro?", a: "Não para turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno. A Croácia integra o espaço Schengen; Bósnia e Montenegro dispensam visto para estadas curtas." },
  { q: "Como é o clima em junho no Adriático?", a: "Verão inicial: dias longos, temperaturas em geral entre 20°C e 30°C e mar já agradável para banho. Leve roupas leves, chapéu, protetor solar e um agasalho fino para as noites." },
  { q: "Quantas fronteiras o roteiro atravessa?", a: "O circuito cruza para a Bósnia e Herzegovina no trajeto Split–Medjugorje–Mostar e para Montenegro na excursão à Baía de Kotor. Mantenha o passaporte sempre com você nesses dias." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 615, o IOF indicado em cada categoria nem as taxas locais de hospedagem pagas diretamente aos hotéis." },
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
  description: "Viagem de 12 dias pela Croácia, Bósnia e Herzegovina e Montenegro, de 13 a 24 de junho de 2027, com guia acompanhante desde o Brasil: Zagreb, Plitvice, Zadar, Split, Hvar, Mostar, Dubrovnik e Baía de Kotor.",
  image: heroImg,
  touristType: "Cultura, história, natureza e Adriático",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "4590.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-06-13", priceValidUntil: "2027-06-13" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoCroaciaBosniaMontenegro2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Croácia, Bósnia e Montenegro 2027 com Guia Brasileiro | Create" description="12 dias pelo Adriático: Zagreb, Plitvice, Zadar, Split, Hvar, Mostar, Dubrovnik e Kotor. Saída 13/06/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Croácia junho 2027, viagem em grupo Croácia Bósnia Montenegro, Dubrovnik com guia brasileiro, Plitvice, Mostar, Kotor, Turkish Airlines, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Cidade murada de telhados vermelhos sobre o mar Adriático em dia de verão" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Junho 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 13 a 24 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Croácia, Bósnia e Montenegro: o Adriático de ponta a ponta</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">12 dias entre lagos turquesa, cidades muradas, ilhas da Dalmácia e a baía fiorde de Kotor — com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "13 a 24/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "Turkish Airlines" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Três países, um só mar</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela Turkish Airlines</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Istambul (IST) → Zagreb (ZAG)</p><p className="text-white/75 text-sm mt-1">13/06 · TK 16 às 15h30 — 14/06 · TK 1053 às 11h50, chegada a Zagreb às 12h55</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Dubrovnik (DBV) → Istambul (IST) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">24/06 · TK 1440 com conexão em Istambul e chegada a Guarulhos no dia seguinte</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">12 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 4.575 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 615 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 4.575", extra: "+ IOF" }, { label: "Apto duplo", price: "€ 4.590", extra: "+ IOF" }, { label: "Apto individual", price: "€ 5.790", extra: "+ IOF" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para o Adriático em junho de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoCroaciaBosniaMontenegro2027;
