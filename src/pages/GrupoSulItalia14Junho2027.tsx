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
import heroImg from "@/assets/grupo-sul-italia-primavera-2027.jpg";

const CANONICAL = "/grupos/sul-italia-14-junho-2027";
const GROUP_NAME = "Grupo Sul da Itália · 14 de junho de 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Sul da Itália (saída 14/06/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito, até o retorno a São Paulo." },
  { title: "Primavera mediterrânea", desc: "Campos verdes, jardins floridos e dias longos na Costa Amalfitana antes do auge do verão europeu." },
  { title: "Navegação pela Costa Amalfitana", desc: "Hidrofólio saindo de Sorrento para ver Positano e Amalfi do mar, o ângulo mais bonito da costa." },
  { title: "Matera e a Basilicata", desc: "Visita panorâmica aos Sassi, Patrimônio da UNESCO, e à Casa Gruta de Vico Solitário." },
  { title: "Puglia autêntica", desc: "Bari Vecchia, Polignano a Mare, os trulli de Alberobello, o barroco de Lecce e a catedral de Otranto." },
  { title: "Voos pela ITA Airways", desc: "São Paulo–Roma–Nápoles na ida e Brindisi–Roma–São Paulo na volta, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 14/06 (seg)", title: "São Paulo → Roma", points: ["Apresentação em Guarulhos e encontro com o coordenador", "Voo ITA Airways AZ 0679 às 18h55 com destino a Roma", "Pernoite a bordo"] },
  { day: "Dia 2 — 15/06 (ter)", title: "Roma → Nápoles → Sorrento", points: ["Chegada a Roma às 11h e conexão no voo AZ 1271 às 17h55", "Chegada a Nápoles às 18h50, recepção e traslado", "Hospedagem em Sorrento"] },
  { day: "Dia 3 — 16/06 (qua)", title: "Costa Amalfitana · Positano e Amalfi", points: ["Traslado ao embarcadouro de Sorrento e navegação em hidrofólio pela Costa Amalfitana", "Paisagens de Positano e Amalfi vistas do mar", "Em caso de mar impraticável, o passeio é feito por via terrestre"] },
  { day: "Dia 4 — 17/06 (qui)", title: "Sorrento", points: ["Dia livre", "Opcional (não incluso): dia inteiro na Ilha de Capri, com Anacapri, La Piazzetta e Jardins de Augusto"] },
  { day: "Dia 5 — 18/06 (sex)", title: "Sorrento → Pompeia → Matera", points: ["Visita ao sítio arqueológico de Pompeia, soterrada pelo Vesúvio em 79 d.C.", "Viagem até a Basilicata", "Hospedagem em Matera"] },
  { day: "Dia 6 — 19/06 (sáb)", title: "Matera → Bari", points: ["Visita panorâmica aos Sassi de Matera, Patrimônio da UNESCO", "Casa Gruta de Vico Solitário", "Almoço livre (não incluso) e seguimos para Bari"] },
  { day: "Dia 7 — 20/06 (dom)", title: "Bari e Polignano a Mare", points: ["Basílica de San Nicola, Catedral de San Sabino e Castelo Normando-Suevo", "Bari Vecchia e a produção artesanal de massa nas portas das casas", "Polignano a Mare: praia de Lama Monachile, centro histórico e mirantes"] },
  { day: "Dia 8 — 21/06 (seg)", title: "Bari → Alberobello → Lecce", points: ["Alberobello e o Trullo Sovrano, hoje museu da vida rural da Puglia", "Almoço incluído (sem bebidas)", "Continuação até Lecce e hospedagem"] },
  { day: "Dia 9 — 22/06 (ter)", title: "Lecce e Otranto", points: ["Basílica de Santa Croce, Duomo di Lecce e Porta Napoli", "Almoço livre (não incluso)", "Otranto: catedral com o mosaico da Árvore da Vida, Baía dos Turcos e Cabo de Otranto"] },
  { day: "Dia 10 — 23/06 (qua)", title: "Lecce", points: ["Dia livre", "Opcional (não incluso): Gallipoli, no Mar Jônico, e Santa Maria di Leuca, onde o Adriático encontra o Jônico"] },
  { day: "Dia 11 — 24/06 (qui)", title: "Lecce → Brindisi → Roma → São Paulo", points: ["Apartamentos disponíveis até às 12h e traslado ao aeroporto de Brindisi", "Voo AZ 1622 às 15h15, chegada a Roma às 16h25", "Conexão no voo AZ 674 às 22h05 · pernoite a bordo"] },
  { day: "Dia 12 — 25/06 (sex)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 05h25 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Sorrento", hotel: "Michelangelo" },
  { city: "Matera", hotel: "San Domenico al Piano" },
  { city: "Bari (Torre a Mare)", hotel: "Unahotels Regina Bari" },
  { city: "Lecce", hotel: "Hilton Garden Inn Lecce" },
];

const included = [
  "Bilhete aéreo São Paulo / Nápoles e Brindisi / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo",
  "Traslados com assistência em português ou espanhol em Nápoles e Brindisi",
  "Visitas com guia local conforme o roteiro",
  "Navegação em hidrofólio pela Costa Amalfitana",
  "Almoço em Alberobello (sem bebidas)",
  "Entradas previstas no roteiro, incluindo Pompeia, Casa Gruta de Vico Solitário e Trullo Sovrano",
];

const notIncluded = [
  "Taxas de aeroporto e combustível (EUR 187)",
  "IOF",
  "Taxa local italiana paga no hotel no check-out (cerca de € 6 por pessoa por noite em hotéis 4 estrelas)",
  "Bebidas nas refeições",
  "Passeios opcionais a Capri, Gallipoli e Santa Maria di Leuca",
  "Almoços e jantares indicados como não inclusos",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais, lavanderia, telefonemas e frigobar",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento do grupo?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno a São Paulo. Nas cidades, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto para a Itália?", a: "Não para turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno e não há exigência de vacinas. A autorização ETIAS ainda não tem data de início de vigência." },
  { q: "Como é o clima em maio no sul da Itália?", a: "É plena primavera: dias longos, temperaturas em geral entre 15°C e 25°C e vegetação exuberante. Leve camadas leves, um agasalho para a noite e calçado confortável para as ruas de pedra." },
  { q: "A navegação pela Costa Amalfitana é garantida?", a: "Sim, está incluída. Em caso de condições climáticas que impeçam a navegação, o passeio é realizado por via terrestre, preservando o roteiro sempre que possível." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 187, o IOF indicado em cada categoria nem a taxa local italiana paga diretamente ao hotel." },
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
  description: "Viagem de 12 dias pelo sul da Itália, de 14 a 25 de junho de 2027, com guia acompanhante desde o Brasil: Costa Amalfitana, Pompeia, Matera, Bari, Alberobello, Lecce e Otranto.",
  image: heroImg,
  touristType: "Cultura, gastronomia, história e Mediterrâneo",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "4757.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-06-14", priceValidUntil: "2027-06-14" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoSulItalia14Junho2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Sul da Itália 14/06/2027 com Guia desde o Brasil | Create" description="12 dias entre Costa Amalfitana, Pompeia, Matera, Bari, Alberobello, Lecce e Otranto. Saída 14/06/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Sul da Itália junho 2027, viagem em grupo Itália, Costa Amalfitana com guia brasileiro, Puglia, Matera, Lecce, ITA Airways, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Vila colorida sobre falésias da Costa Amalfitana com o mar Mediterrâneo na primavera" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Primavera 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 14 a 25 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Sul da Itália: entre o azul do mar e a alma italiana</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">12 dias entre a Costa Amalfitana, a pedra dourada de Matera e a Puglia mais autêntica — com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "14 a 25/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "ITA Airways" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">O Mezzogiorno em sua estação mais luminosa</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela ITA Airways</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Roma (FCO) → Nápoles (NAP)</p><p className="text-white/75 text-sm mt-1">14/06 · AZ 0679 às 18h55 — 15/06 · AZ 1271 às 17h55, chegada a Nápoles às 18h50</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Brindisi (BDS) → Roma (FCO) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">24/06 · AZ 1622 às 15h15, chegada às 16h25 — conexão AZ 674 às 22h05, chegada em 25/06 às 05h25</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">12 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 4.730 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 187 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 4.730", extra: "+ IOF € 114" }, { label: "Apto duplo", price: "€ 4.757", extra: "+ IOF € 115" }, { label: "Apto individual", price: "€ 5.482", extra: "+ IOF € 138" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para o sul da Itália em junho de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoSulItalia14Junho2027;
