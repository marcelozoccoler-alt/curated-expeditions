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
import heroImg from "@/assets/grupo-sicilia-malta-2027.jpg";

const CANONICAL = "/grupos/sicilia-malta-abril-2027";
const GROUP_NAME = "Grupo Sicília & Malta · Abril 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Sicília & Malta (saída 24/04/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito até o retorno." },
  { title: "Primavera no Mediterrâneo", desc: "Temperaturas agradáveis, paisagens floridas e a luz intensa que define Malta e a Sicília em abril e maio." },
  { title: "Malta, Três Cidades e Gozo", desc: "Valletta e a Co-catedral de São João, passeio em embarcação dghajsa pelo Grand Harbour e dia inteiro na Ilha de Gozo." },
  { title: "Barroco siciliano da UNESCO", desc: "Ragusa Ibla, Modica, Scicli, Noto e Siracusa com o Parque Arqueológico e a ilha de Ortigia." },
  { title: "Etna, Taormina e O Poderoso Chefão", desc: "Crateras Silvestri no Etna, Teatro Greco-Romano de Taormina e as vilas de Savoca e Forza d'Agrò." },
  { title: "Palermo, Monreale e Agrigento", desc: "Capela Palatina, os mosaicos dourados de Monreale e o Vale dos Templos gregos em Agrigento." },
];

const itinerary = [
  { day: "Dia 1 — 24/04 (sáb)", title: "São Paulo → Roma", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo ITA AZ 679 às 18h55", "Pernoite a bordo"] },
  { day: "Dia 2 — 25/04 (dom)", title: "Roma → Malta", points: ["Chegada a Roma às 11h30 e conexão", "Voo AZ 884 às 17h, chegada a Malta às 18h25", "Recepção e traslado ao hotel"] },
  { day: "Dia 3 — 26/04 (seg)", title: "Malta · Valletta e Três Cidades", points: ["Jardins Upper Barrakka, Rua da República e Praça de São Jorge", "Co-catedral de São João, com as obras-primas de Caravaggio, e espetáculo audiovisual", "Almoço incluído (sem bebidas)", "Cospicua, Vittoriosa e Senglea, com passeio em embarcação tradicional dghajsa e Jardins Gardjola"] },
  { day: "Dia 4 — 27/04 (ter)", title: "Malta · Ilha de Gozo", points: ["Travessia de ferry e visita a Victoria, com sua Cidadela histórica", "Baía de Xlendi e as formações rochosas de Dwejra", "Tarde livre"] },
  { day: "Dia 5 — 28/04 (qua)", title: "Malta → Ragusa (Sicília)", points: ["Ferry até Pozzallo, na Sicília", "Traslado a Ragusa e check-in", "Restante do dia livre"] },
  { day: "Dia 6 — 29/04 (qui)", title: "Ragusa · Modica · Scicli", points: ["Centro histórico de Ragusa Ibla, com igrejas e palácios barrocos", "Modica, conhecida pelo chocolate artesanal", "Almoço livre (não incluso)", "Scicli, a Vigata da série Il Commissario Montalbano"] },
  { day: "Dia 7 — 30/04 (sex)", title: "Ragusa · Noto · Siracusa → Taormina", points: ["Noto, capital do barroco siciliano, com o Arco de Noto e a Catedral", "Parque Arqueológico de Siracusa: Teatro Grego, Anfiteatro Romano e Orelha de Dionísio", "Almoço livre (não incluso)", "Ilha de Ortigia e hospedagem em Letojanni"] },
  { day: "Dia 8 — 01/05 (sáb)", title: "Taormina · Monte Etna", points: ["Parque do Etna até as Crateras Silvestri, a cerca de 1.900 metros", "Parada em apiário local com degustação de mel artesanal", "Almoço livre (não incluso)", "Visita guiada a Taormina e ao Teatro Greco-Romano"] },
  { day: "Dia 9 — 02/05 (dom)", title: "Taormina · Savoca · Cefalù → Palermo", points: ["Forza d'Agrò: Arco Durazzesco e praça panorâmica", "Savoca, com o Bar Vitelli e a Igreja de Santa Lúcia, cenários de O Poderoso Chefão", "Almoço livre (não incluso)", "Cefalù: Piazza del Duomo, Catedral e Corso Ruggero", "Seguimos para Palermo"] },
  { day: "Dia 10 — 03/05 (seg)", title: "Palermo · Monreale", points: ["Palácio dos Normandos e a Capela Palatina", "Catedral de Palermo, Corso Vittorio Emanuele e os Quattro Canti", "Almoço livre (não incluso)", "Monreale: Catedral árabe-normanda e o Claustro dos Beneditinos"] },
  { day: "Dia 11 — 04/05 (ter)", title: "Palermo · Agrigento", points: ["Centro histórico de Agrigento", "Vale dos Templos: Juno, Concórdia, Hércules e Castor e Pólux", "Almoço livre (não incluso)", "Opcional (não incluso): Jardim de Kolymbethra"] },
  { day: "Dia 12 — 05/05 (qua)", title: "Palermo → Roma → São Paulo", points: ["Apartamentos disponíveis até às 12h e traslado ao aeroporto", "Voo AZ 1792 às 15h10, chegada a Roma às 16h25", "Conexão AZ 674 às 22h05 · pernoite a bordo"] },
  { day: "Dia 13 — 06/05 (qui)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 05h25 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Malta", hotel: "TRE Waterfront" },
  { city: "Ragusa", hotel: "Mediterraneo Palace" },
  { city: "Letojanni", hotel: "Albatros" },
  { city: "Palermo", hotel: "Plaza Opera" },
];

const included = [
  "Bilhete aéreo São Paulo / Malta e Palermo / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em português ou espanhol na chegada e saída em Malta e Palermo",
  "Bilhetes de ferry Malta–Pozzallo em classe econômica",
  "Visitas com guia local em português ou espanhol conforme o roteiro",
  "Entradas: Co-catedral de São João, espetáculo audiovisual em Valletta, passeio de dghajsa, ferry a Gozo, Parque Arqueológico de Siracusa, Crateras Silvestri no Etna, Teatro Grego de Taormina, Catedral e Claustro de Monreale e Vale dos Templos",
  "1 almoço em Malta (sem bebidas)",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 190)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Almoços e jantares indicados como não inclusos no roteiro",
  "Visita opcional ao Jardim de Kolymbethra",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno. No destino, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto para Malta e Itália?", a: "Não para turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno. Para viagens a partir de 2027 pode ser exigida a autorização eletrônica europeia ETIAS — orientamos cada viajante no momento adequado." },
  { q: "Como é o clima em abril e maio?", a: "É plena primavera mediterrânea: em geral entre 15°C e 24°C, com dias claros e possibilidade de chuvas passageiras. Leve calçado confortável para os centros históricos de pedra, agasalho leve e capa de chuva compacta." },
  { q: "A travessia entre Malta e a Sicília é de avião?", a: "Não. É feita de ferry entre Malta e Pozzallo, no sul da Sicília, com bilhete já incluído em classe econômica." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 190 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 13 dias por Malta e Sicília na primavera mediterrânea, de 24 de abril a 06 de maio de 2027, com guia acompanhante desde o Brasil: Valletta, Gozo, Ragusa, Noto, Siracusa, Etna, Taormina, Cefalù, Palermo, Monreale e Agrigento.",
  image: heroImg,
  touristType: "História, arqueologia, barroco, gastronomia e paisagens mediterrâneas",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "5048.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-04-24", priceValidUntil: "2027-04-24" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoSiciliaMalta2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Sicília e Malta Abril 2027 com Guia desde o Brasil | Create" description="13 dias no Mediterrâneo: Valletta, Gozo, Ragusa, Noto, Siracusa, Etna, Taormina, Palermo, Monreale e Agrigento. Saída 24/04/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Sicília e Malta 2027, viagem em grupo Sicília, Malta com guia brasileiro, excursão Sicília saindo de São Paulo, ITA Airways, Vale dos Templos, Monte Etna, Taormina, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Porto histórico de Malta com fortificações de pedra e barcos tradicionais ao pôr do sol" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Primavera mediterrânea 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 24 de abril a 06 de maio de 2027</p>
          <h1 className="heading-hero text-white mb-6">Sicília & Malta: duas ilhas, milhares de anos de história</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">13 dias entre fortalezas, cidades barrocas, templos gregos, o Monte Etna e a gastronomia do Mediterrâneo — com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "24/04 a 06/05/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "ITA Airways" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">O Mediterrâneo em sua estação mais bonita</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela ITA Airways</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, via Roma. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Roma (FCO) → Malta (MLA)</p><p className="text-white/75 text-sm mt-1">24/04 · AZ 679 às 18h55 — 25/04 · AZ 884 às 17h, chegada às 18h25</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Palermo (PMO) → Roma (FCO) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">05/05 · AZ 1792 às 15h10 — conexão AZ 674 às 22h05, chegada em 06/05 às 05h25</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">13 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 5.013 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 190 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 5.013", extra: "+ IOF € 127" }, { label: "Apto duplo", price: "€ 5.048", extra: "+ IOF € 128" }, { label: "Apto individual", price: "€ 6.119", extra: "+ IOF € 162" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para Sicília e Malta em abril de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoSiciliaMalta2027;
