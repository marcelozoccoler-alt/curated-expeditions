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
import heroImg from "@/assets/grupo-escandinavia-2027.jpg";

const CANONICAL = "/grupos/escandinavia-junho-2027";
const GROUP_NAME = "Grupo Escandinávia · Junho 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Escandinávia (saída 14/06/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito, até o retorno a São Paulo." },
  { title: "Sol da meia-noite", desc: "Junho é a estação das noites claras: dias longuíssimos para caminhar por Copenhague, Oslo, Bergen e Estocolmo." },
  { title: "Ferry noturno Copenhague–Oslo", desc: "Travessia pelo Skagerrak em cabine interna, com jantar incluído e uma bebida." },
  { title: "Estrada dos fiordes", desc: "Sognefjord e a região de Flåm, com a Igreja de Madeira de Borgund, do século XII." },
  { title: "Quatro capitais nórdicas", desc: "Copenhague, Oslo, Bergen e Estocolmo, ligadas por trens, ferries e estradas cênicas." },
  { title: "Voos pela TAP Air Portugal", desc: "São Paulo–Lisboa–Copenhague na ida e Estocolmo–Lisboa–São Paulo na volta, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 14/06 (seg)", title: "São Paulo → Lisboa", points: ["Apresentação em Guarulhos e encontro com o coordenador do grupo", "Voo TAP com destino a Lisboa", "Pernoite a bordo"] },
  { day: "Dia 2 — 15/06 (ter)", title: "Lisboa → Copenhague", points: ["Chegada a Lisboa e conexão para Copenhague", "Recepção e traslado ao hotel", "Restante do dia livre na capital dinamarquesa"] },
  { day: "Dia 3 — 16/06 (qua)", title: "Copenhague", points: ["Visita à cidade: Nyhavn, Amalienborg, Palácio de Christiansborg, Gefion e a Pequena Sereia", "Tarde livre · almoço e jantar livres (não inclusos)", "Opcional (não incluso): Castelo de Frederiksborg, o \"Versalhes do Norte\""] },
  { day: "Dia 4 — 17/06 (qui)", title: "Copenhague → Oslo (ferry noturno)", points: ["Manhã livre para o Jardim de Tivoli ou a Strøget (não inclusos)", "Embarque no ferry Go Nordic Cruiseline com destino a Oslo", "Cabine interna com jantar incluído e uma bebida · pernoite a bordo"] },
  { day: "Dia 5 — 18/06 (sex)", title: "Oslo", points: ["Desembarque e visita à cidade: Parque Frogner com as esculturas de Vigeland, Holmenkollen e o centro histórico", "Tarde livre · almoço e jantar livres (não inclusos)", "Opcional (não incluso): museus Fram e Kon-Tiki"] },
  { day: "Dia 6 — 19/06 (sáb)", title: "Oslo → Geilo", points: ["Viagem pelo interior da Noruega, entre lagos, vales e montanhas", "Chegada a Geilo, estação de montanha entre Oslo e os fiordes", "Hospedagem no Dr Holms Hotel"] },
  { day: "Dia 7 — 20/06 (dom)", title: "Geilo → Flåm → Bergen", points: ["Descida pelo vale de Flåm, no braço do Sognefjord", "Opcional (não incluso): trem panorâmico Flåm–Myrdal", "Continuação até Bergen e hospedagem"] },
  { day: "Dia 8 — 21/06 (seg)", title: "Bergen", points: ["Visita à cidade: Bryggen, o cais hanseático Patrimônio da UNESCO, mercado de peixe e bairro histórico", "Tarde livre · almoço e jantar livres (não inclusos)", "Opcional (não incluso): funicular Fløibanen ao Monte Fløyen"] },
  { day: "Dia 9 — 22/06 (ter)", title: "Bergen → Borgund → Leikanger", points: ["Estrada cênica pelos fiordes com visita à Igreja de Madeira de Borgund, do século XII", "Travessia de ferry em um dos braços do Sognefjord", "Hospedagem em Leikanger, à beira do fiorde"] },
  { day: "Dia 10 — 23/06 (qua)", title: "Leikanger → Oslo", points: ["Retorno a Oslo por estradas de montanha, com paradas panorâmicas", "Tempo livre na capital norueguesa", "Almoço e jantar livres (não inclusos)"] },
  { day: "Dia 11 — 24/06 (qui)", title: "Oslo → Estocolmo", points: ["Viagem à Suécia, cruzando a região dos lagos", "Chegada a Estocolmo e hospedagem", "Restante do dia livre"] },
  { day: "Dia 12 — 25/06 (sex)", title: "Estocolmo", points: ["Visita à cidade: Gamla Stan, Palácio Real, Riddarholmen e mirante de Fjällgatan", "Opcional (não incluso): Prefeitura de Estocolmo e Museu Vasa", "Tarde livre · almoço e jantar livres (não inclusos)"] },
  { day: "Dia 13 — 26/06 (sáb)", title: "Estocolmo → Lisboa → São Paulo", points: ["Apartamentos disponíveis até às 12h e traslado ao aeroporto", "Voo TAP com conexão em Lisboa e seguimento para São Paulo", "Chegada a Guarulhos · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Copenhague", hotel: "Radisson Blu Scandinavia Copenhagen" },
  { city: "Copenhague → Oslo", hotel: "Go Nordic Cruiseline (cabine interna)" },
  { city: "Geilo", hotel: "Dr Holms Hotel" },
  { city: "Bergen", hotel: "Scandic Bergen City" },
  { city: "Leikanger", hotel: "Leikanger Fjord Hotel" },
  { city: "Estocolmo", hotel: "Hotel C Stockholm" },
];

const included = [
  "Bilhete aéreo São Paulo / Copenhague e Estocolmo / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados de chegada e saída com assistência",
  "Visitas com guia local em Copenhague, Oslo, Bergen e Estocolmo",
  "Ferry noturno Copenhague–Oslo em cabine interna, com jantar e uma bebida",
  "Travessias de ferry pelos fiordes previstas no roteiro",
  "Entrada na Igreja de Madeira de Borgund",
];

const notIncluded = [
  "Taxas de aeroporto e combustível (EUR 188)",
  "IOF",
  "Taxas locais de hospedagem pagas nos hotéis, quando aplicáveis",
  "Bebidas nas refeições, exceto a bebida do jantar a bordo do ferry",
  "Passeios opcionais: Castelo de Frederiksborg, museus Fram e Kon-Tiki, trem Flåm–Myrdal, funicular Fløibanen, Prefeitura de Estocolmo e Museu Vasa",
  "Almoços e jantares indicados como não inclusos",
  "Gorjetas a guias, motoristas, garçons e carregadores de malas",
  "Despesas pessoais, lavanderia, telefonemas e frigobar",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento do grupo?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno a São Paulo. Nas cidades, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto para a Escandinávia?", a: "Não para turismo. Dinamarca, Noruega e Suécia integram o espaço Schengen; o passaporte deve ter validade mínima de seis meses a partir da data de retorno e é exigido seguro-viagem com cobertura mínima de € 30.000." },
  { q: "Como é o clima em junho no norte da Europa?", a: "É o início do verão, com noites muito claras e temperaturas em geral entre 12°C e 22°C, mais frescas nos fiordes. Leve camadas, casaco impermeável leve e calçado confortável." },
  { q: "Como é a noite a bordo do ferry?", a: "A travessia Copenhague–Oslo é feita em cabine interna, com jantar incluído e uma bebida. A bagagem principal segue com o grupo; recomenda-se separar o essencial em uma bolsa de mão para a noite." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 188, o IOF indicado em cada categoria nem as taxas locais de hospedagem pagas diretamente aos hotéis." },
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
  description: "Viagem de 13 dias pela Escandinávia, de 14 a 26 de junho de 2027, com guia acompanhante desde o Brasil: Copenhague, ferry noturno para Oslo, Geilo, Flåm, Bergen, Sognefjord e Estocolmo.",
  image: heroImg,
  touristType: "Fiordes, capitais nórdicas, natureza e sol da meia-noite",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "5698.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-06-14", priceValidUntil: "2027-06-14" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoEscandinavia2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Escandinávia Junho 2027 com Guia desde o Brasil | Create" description="13 dias entre Copenhague, Oslo, fiordes noruegueses, Bergen e Estocolmo, com ferry noturno incluído. Saída 14/06/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Escandinávia junho 2027, viagem em grupo fiordes noruegueses, Copenhague Oslo Bergen Estocolmo, guia brasileiro, sol da meia-noite, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Fiorde norueguês com montanhas verdes e casas à beira da água sob luz de verão" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Verão 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 14 a 26 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Escandinávia: fiordes, capitais nórdicas e noites claras</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">13 dias entre Copenhague, Oslo, o Sognefjord, Bergen e Estocolmo — com ferry noturno e guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "14 a 26/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "TAP Air Portugal" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">O norte da Europa em sua melhor luz</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela TAP Air Portugal</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, e conexão em Lisboa nos dois sentidos. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Lisboa (LIS) → Copenhague (CPH)</p><p className="text-white/75 text-sm mt-1">14/06 · voo noturno para Lisboa — 15/06 · conexão e chegada a Copenhague</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Estocolmo (ARN) → Lisboa (LIS) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">26/06 · conexão em Lisboa e seguimento para Guarulhos</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">13 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 5.667 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 188 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 5.667", extra: "+ IOF" }, { label: "Apto duplo", price: "€ 5.698", extra: "+ IOF" }, { label: "Apto individual", price: "€ 6.832", extra: "+ IOF" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a Escandinávia em junho de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoEscandinavia2027;
