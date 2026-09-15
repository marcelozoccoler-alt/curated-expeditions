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
import heroImg from "@/assets/grupo-baltico-2027.jpg";

const CANONICAL = "/grupos/baltico-maio-2027";
const GROUP_NAME = "Grupo Báltico · Maio 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Báltico · Finlândia, Estônia, Letônia e Lituânia (saída 29/05/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Coordenador brasileiro desde São Paulo, com guias locais em português ou espanhol nas visitas." },
  { title: "Quatro países em um roteiro", desc: "Finlândia, Estônia, Letônia e Lituânia no verão do norte europeu, com dias longos e temperaturas agradáveis." },
  { title: "Helsinque e a travessia do Golfo", desc: "Praça do Senado, monumento a Sibelius, igreja Temppeliaukio e ferry até Tallinn, com bilhete incluído." },
  { title: "Tallinn medieval da UNESCO", desc: "Toompea, muralhas, Alexander Nevsky e a igreja mais antiga do país, com jantar em restaurante medieval." },
  { title: "Gauja, Sigulda e Turaida", desc: "A “Suíça Letã”, o castelo medieval de Turaida de 1214 e as grutas de Gutmann no caminho para Riga." },
  { title: "Rundāle, Colina das Cruzes e Trakai", desc: "Jardins do palácio de Rastrelli, o símbolo da resistência lituana e o castelo sobre a ilha em Trakai." },
];

const itinerary = [
  { day: "Dia 1 — 29/05 (sáb)", title: "São Paulo → Istambul", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo Turkish TK 216 às 16h35", "Pernoite a bordo"] },
  { day: "Dia 2 — 30/05 (dom)", title: "Istambul → Helsinque", points: ["Chegada às 11h15 e conexão", "Voo TK 1763 às 15h05, chegada a Helsinque às 18h40", "Traslado ao hotel"] },
  { day: "Dia 3 — 31/05 (seg)", title: "Helsinque", points: ["Praça do Senado, Palácio Presidencial, Câmara Municipal, Parlamento e Ópera Nacional", "Monumento a Sibelius e igreja Temppeliaukio, esculpida na rocha", "Tarde livre"] },
  { day: "Dia 4 — 01/06 (ter)", title: "Helsinque → Tallinn", points: ["Traslado privativo ao porto", "Ferry pelo Golfo da Finlândia, cerca de 2h a 2h30 de travessia", "Traslado privativo ao hotel e check-in"] },
  { day: "Dia 5 — 02/06 (qua)", title: "Tallinn", points: ["Toompea, catedral Alexander Nevsky, igreja Tookirik de 1233, Parlamento e muralhas", "Cidade baixa: Câmara Municipal, guildas de comerciantes e praça do mercado", "Almoço livre (não incluso)", "Jantar incluído em restaurante medieval"] },
  { day: "Dia 6 — 03/06 (qui)", title: "Tallinn · Pärnu · Sigulda → Riga", points: ["Passeio panorâmico por Pärnu, a “capital do verão” da Estônia", "Almoço livre (não incluso)", "Parque Nacional de Gauja e Sigulda", "Castelo medieval de Turaida, igreja de madeira de Vidzeme e grutas de Gutmann", "Seguimos para Riga"] },
  { day: "Dia 7 — 04/06 (sex)", title: "Riga", points: ["Mercado Central e centro histórico da UNESCO, com a casa das Três Irmãs e o Castelo de Riga", "Catedral de Riga e seu órgão de mais de 6.700 tubos", "Almoço livre (não incluso)", "Distrito Art Nouveau, a maior coleção do mundo", "Jantar incluído em restaurante local"] },
  { day: "Dia 8 — 05/06 (sáb)", title: "Riga · Rundāle · Colina das Cruzes → Vilnius", points: ["Jardins do Palácio de Rundāle, obra de Francesco Bartolomeo Rastrelli", "Almoço livre em rota (não incluso)", "Colina das Cruzes, próxima a Šiauliai", "Chegada a Vilnius"] },
  { day: "Dia 9 — 06/06 (dom)", title: "Vilnius · Trakai", points: ["Praça da Catedral, Rua do Castelo, igrejas de Santa Ana e dos Bernardinos, Porta do Amanhecer e Universidade de Vilnius", "Almoço livre (não incluso)", "Trakai: castelo de tijolos sobre o Lago Galvė e Museu do Castelo", "Jantar incluído em restaurante tradicional com música folclórica"] },
  { day: "Dia 10 — 07/06 (seg)", title: "Vilnius → Istambul → São Paulo", points: ["Traslado ao aeroporto", "Voo TK 1408 às 11h40, chegada a Istambul às 14h45", "Conexão TK 215 às 20h25 · pernoite a bordo"] },
  { day: "Dia 11 — 08/06 (ter)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 03h30 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Helsinque", hotel: "Scandic Grand Marina" },
  { city: "Tallinn", hotel: "Hestia Europa" },
  { city: "Riga", hotel: "Tallink" },
  { city: "Vilnius", hotel: "Conti" },
];

const included = [
  "Bilhete aéreo São Paulo / Istambul / Helsinque e Vilnius / Istambul / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro desde São Paulo",
  "Traslados com assistência em português ou espanhol na chegada em Helsinque e na saída em Vilnius",
  "Bilhete de ferry Helsinque–Tallinn em classe econômica",
  "Visitas com guia local em português ou espanhol: meio dia em Helsinque, Tallinn, Riga e Vilnius",
  "Entradas: Catedral de Riga, Parque Nacional de Gauja, Palácio de Rundāle, Universidade de Vilnius, Igreja de São João e Castelo de Trakai",
  "3 jantares (sem bebidas)",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 697)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Almoços indicados como não inclusos no roteiro",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um coordenador brasileiro segue com o grupo desde o embarque em Guarulhos até o retorno. Nas cidades, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto?", a: "Não para turismo. Finlândia, Estônia, Letônia e Lituânia integram o espaço Schengen; o passaporte deve ter validade mínima de seis meses a partir da data de retorno. Para 2027 pode ser exigida a autorização eletrônica europeia ETIAS — orientamos cada viajante no momento adequado." },
  { q: "Como é o clima no fim de maio e início de junho?", a: "É o início do verão nórdico, com dias muito longos e temperaturas em geral entre 12°C e 22°C. Leve agasalho intermediário, capa de chuva compacta e calçado confortável para as ruas de pedra." },
  { q: "Quantas refeições estão incluídas?", a: "Café da manhã em todos os hotéis e três jantares: em restaurante medieval em Tallinn, em restaurante local em Riga e em restaurante tradicional com música folclórica em Vilnius, todos sem bebidas." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 697 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 11 dias pelo Báltico no verão nórdico, de 29 de maio a 08 de junho de 2027, com guia desde o Brasil: Helsinque, Tallinn, Pärnu, Sigulda, Riga, Rundāle, Colina das Cruzes, Vilnius e Trakai.",
  image: heroImg,
  touristType: "História, arquitetura, natureza e gastronomia do norte da Europa",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "3988.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-05-29", priceValidUntil: "2027-05-29" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoBaltico2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Báltico Maio 2027 com Guia desde o Brasil | Create Travel" description="11 dias pela Finlândia, Estônia, Letônia e Lituânia no verão nórdico: Helsinque, Tallinn, Riga, Vilnius e Trakai. Saída 29/05/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Báltico 2027, viagem em grupo países bálticos, Tallinn Riga Vilnius com guia brasileiro, excursão Báltico saindo de São Paulo, Turkish Airlines, Colina das Cruzes, Trakai, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Telhados vermelhos e torres da cidade velha medieval de Tallinn diante do mar Báltico" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Verão nórdico 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 29 de maio a 08 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Báltico: quatro países, uma única viagem</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">11 dias entre Helsinque, Tallinn, Riga e Vilnius, com castelos medievais, arquitetura Art Nouveau e a luz longa do verão do norte.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "29/05 a 08/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "Turkish Airlines" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">O norte da Europa na melhor época do ano</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela Turkish Airlines</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, via Istambul. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Istambul (IST) → Helsinque (HEL)</p><p className="text-white/75 text-sm mt-1">29/05 · TK 216 às 16h35 — 30/05 · TK 1763 às 15h05, chegada às 18h40</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Vilnius (VNO) → Istambul (IST) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">07/06 · TK 1408 às 11h40 — conexão TK 215 às 20h25, chegada em 08/06 às 03h30</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">11 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 3.968 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 697 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 3.968", extra: "+ IOF € 104" }, { label: "Apto duplo", price: "€ 3.988", extra: "+ IOF € 105" }, { label: "Apto individual", price: "€ 4.638", extra: "+ IOF € 125" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para o Báltico em maio de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoBaltico2027;
