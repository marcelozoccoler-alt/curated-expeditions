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
import heroImg from "@/assets/grupo-escandinavia-maio-2027.jpg";

const CANONICAL = "/grupos/escandinavia-maio-2027";
const GROUP_NAME = "Grupo Escandinávia · Maio 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Escandinávia · Primavera nórdica (saída 24/05/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Coordenador brasileiro desde São Paulo, com guias locais nas visitas panorâmicas das capitais." },
  { title: "Primavera nórdica", desc: "Dias longos, natureza desperta e cores intensas na Dinamarca, na Noruega e na Suécia." },
  { title: "Ferry noturno Copenhague–Oslo", desc: "Travessia a bordo do Go Nordic em cabine privativa, com jantar e uma bebida incluídos." },
  { title: "Fiordes e cachoeiras", desc: "Vøringfossen, Hardangerfjord, Steinsdalsfossen e a navegação pelo Sognefjord, o Rei dos Fiordes." },
  { title: "Bergen, Balestrand e Borgund", desc: "Bryggen da UNESCO, o histórico Hotel Kvikne's à beira do fiorde e a igreja de madeira de Borgund, com entrada incluída." },
  { title: "Estocolmo e Gamla Stan", desc: "A capital construída sobre ilhas, com Palácio Real, Catedral e Parlamento, após passagem por Karlstad e Gripsholm." },
];

const itinerary = [
  { day: "Dia 1 — 24/05 (seg)", title: "São Paulo → Lisboa", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo TAP 82 às 15h30", "Pernoite a bordo"] },
  { day: "Dia 2 — 25/05 (ter)", title: "Lisboa → Copenhague", points: ["Chegada às 05h35 e conexão", "Voo TAP 754 às 12h10, chegada a Copenhague às 16h50", "Traslado ao hotel"] },
  { day: "Dia 3 — 26/05 (qua)", title: "Copenhague", points: ["Visita panorâmica: Amalienborg, canais de Nyhavn, Palácio de Christiansborg, Palácio da Bolsa e a Pequena Sereia", "Tarde livre na Strøget e nos museus da cidade", "Opcional (não incluso): Palácio de Frederiksborg"] },
  { day: "Dia 4 — 27/05 (qui)", title: "Copenhague → Oslo (ferry noturno)", points: ["Manhã livre ou opcional (não incluso) ao Palácio de Frederiksborg", "Traslado ao porto e embarque no cruzeiro noturno Go Nordic", "Prepare uma bolsa de mão: as bagagens ficam indisponíveis durante a travessia", "Jantar com uma bebida incluído e acomodação em cabine"] },
  { day: "Dia 5 — 28/05 (sex)", title: "Oslo → Geilo", points: ["Café da manhã a bordo com vista do fiorde de Oslo", "Visita guiada: Parque Frogner com as esculturas de Vigeland, Palácio Real, fortaleza de Akershus e exterior da Prefeitura", "Viagem até Geilo, passando por Hønefoss", "Jantar incluído e hospedagem"] },
  { day: "Dia 6 — 29/05 (sáb)", title: "Geilo → Bergen", points: ["Cachoeira de Vøringfossen, com queda de 182 metros sobre o vale de Måbødalen", "Região do Hardangerfjord e a cachoeira de Steinsdalsfossen", "Visita panorâmica em Bergen: Mercado do Peixe e o bairro hanseático de Bryggen", "Opcional (não incluso): funicular Fløibanen até o Monte Fløyen"] },
  { day: "Dia 7 — 30/05 (dom)", title: "Bergen → Flåm → Balestrand", points: ["Parada em Voss", "Opcional (não incluso): trem regional Voss–Myrdal e a ferrovia de Flåm", "Ferry pelo Sognefjord até Balestrand", "Jantar incluído e hospedagem no histórico Hotel Kvikne's"] },
  { day: "Dia 8 — 31/05 (seg)", title: "Balestrand → Oslo", points: ["Duas breves travessias de ferry pelo caminho", "Igreja de madeira de Borgund, do fim do século XII, com entrada incluída", "Chegada a Oslo ao final do dia"] },
  { day: "Dia 9 — 01/06 (ter)", title: "Oslo", points: ["Dia livre na capital norueguesa", "Opcional (não incluso): Museu Fram e Museu Kon-Tiki"] },
  { day: "Dia 10 — 02/06 (qua)", title: "Oslo → Estocolmo", points: ["Parada em Karlstad, entre o lago Vänern e o rio Klarälven", "Passagem por Mariefred, com o Castelo de Gripsholm", "Chegada a Estocolmo ao final do dia"] },
  { day: "Dia 11 — 03/06 (qui)", title: "Estocolmo", points: ["Gamla Stan, a cidade antiga, com praças e fachadas históricas", "Exterior do Palácio Real, Catedral, Parlamento e Casa dos Nobres", "Tarde livre", "Opcional (não incluso): Prefeitura de Estocolmo e Museu Vasa"] },
  { day: "Dia 12 — 04/06 (sex)", title: "Estocolmo → Lisboa → São Paulo", points: ["Traslado ao aeroporto", "Voo TAP 781 às 14h10, chegada a Lisboa às 17h45", "Conexão TAP 87 às 23h30 · pernoite a bordo"] },
  { day: "Dia 13 — 05/06 (sáb)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 05h50 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Copenhague", hotel: "Scandic Kødbyen" },
  { city: "Copenhague → Oslo", hotel: "Go Nordic Cruiseline" },
  { city: "Geilo", hotel: "Dr Holms" },
  { city: "Bergen", hotel: "Zander K" },
  { city: "Balestrand", hotel: "Kvikne's" },
  { city: "Oslo", hotel: "Radisson Blu Oslo" },
  { city: "Estocolmo", hotel: "Elite Eden Park" },
];

const included = [
  "Bilhete aéreo São Paulo / Lisboa / Copenhague e Estocolmo / Lisboa / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro desde São Paulo",
  "Traslados com assistência em português ou espanhol na chegada em Copenhague e na saída em Estocolmo",
  "Cruzeiro noturno Go Nordic de Copenhague a Oslo, em cabine",
  "Visitas panorâmicas de Copenhague, Oslo e Estocolmo com guia local em português ou espanhol",
  "Entrada na Igreja de Madeira de Borgund",
  "3 jantares incluídos: um no barco Go Nordic (com uma bebida), um no Hotel Kvikne's e um no hotel em Geilo (sem bebidas)",
  "Carregadores de malas no porto",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 188)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Passeios opcionais: Palácio de Frederiksborg, funicular Fløibanen, trem Voss–Myrdal e ferrovia de Flåm, museus Fram e Kon-Tiki, Prefeitura de Estocolmo e Museu Vasa",
  "Almoços e demais refeições não indicadas como incluídas",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um coordenador brasileiro segue com o grupo desde o embarque em Guarulhos até o retorno. As visitas panorâmicas nas capitais são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto?", a: "Não para turismo. Dinamarca, Noruega e Suécia integram o espaço Schengen; o passaporte deve ter validade mínima de seis meses a partir da data de retorno. Para 2027 pode ser exigida a autorização eletrônica europeia ETIAS — orientamos cada viajante no momento adequado." },
  { q: "Como funciona a noite no ferry?", a: "A travessia entre Copenhague e Oslo é feita a bordo do Go Nordic, em cabine, com jantar e uma bebida incluídos. As bagagens ficam indisponíveis durante a travessia, por isso separe uma bolsa de mão com o necessário para a noite." },
  { q: "Como é o clima no fim de maio?", a: "É a primavera nórdica, com dias muito longos e temperaturas em geral entre 8°C e 18°C, mais frescas nas montanhas e nos fiordes. Leve casaco corta-vento impermeável, camadas intermediárias e calçado confortável." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 188 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 13 dias pela Escandinávia na primavera nórdica, de 24 de maio a 05 de junho de 2027, com guia desde o Brasil: Copenhague, ferry noturno até Oslo, Geilo, Bergen, Sognefjord, Balestrand, Borgund, Karlstad e Estocolmo.",
  image: heroImg,
  touristType: "Fiordes, natureza, herança viking e cidades nórdicas",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "5398.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-05-24", priceValidUntil: "2027-05-24" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoEscandinaviaMaio2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Escandinávia Maio 2027 com Guia desde o Brasil | Create" description="13 dias na primavera nórdica: Copenhague, ferry noturno até Oslo, fiordes, Bergen, Balestrand e Estocolmo. Saída 24/05/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Escandinávia 2027, viagem em grupo fiordes noruegueses, Copenhague Oslo Bergen Estocolmo com guia brasileiro, excursão Escandinávia saindo de São Paulo, TAP, Sognefjord, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Fiorde norueguês de águas azuis cercado por montanhas nevadas na primavera" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Primavera nórdica 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 24 de maio a 05 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Escandinávia: a primavera nórdica em seu melhor momento</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">13 dias entre Dinamarca, Noruega e Suécia, com ferry noturno até Oslo, fiordes monumentais e a elegância de Estocolmo.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "24/05 a 05/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "TAP Air Portugal" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Três países, uma natureza grandiosa</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela TAP Air Portugal</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, via Lisboa. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Lisboa (LIS) → Copenhague (CPH)</p><p className="text-white/75 text-sm mt-1">24/05 · TP 82 às 15h30 — 25/05 · TP 754 às 12h10, chegada às 16h50</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Estocolmo (ARN) → Lisboa (LIS) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">04/06 · TP 781 às 14h10 — conexão TP 87 às 23h30, chegada em 05/06 às 05h50</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">13 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 5.368 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 188 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 5.368", extra: "+ IOF € 140" }, { label: "Apto duplo", price: "€ 5.398", extra: "+ IOF € 141" }, { label: "Apto individual", price: "€ 6.551", extra: "+ IOF € 177" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a Escandinávia em maio de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoEscandinaviaMaio2027;
