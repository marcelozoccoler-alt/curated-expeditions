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
import heroImg from "@/assets/grupo-portugal-maio-2027.jpg";

const CANONICAL = "/grupos/portugal-maio-2027";
const GROUP_NAME = "Grupo Portugal · Primavera 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Portugal · Primavera 2027 (saída 24/05/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Coordenador brasileiro desde São Paulo e guia local em português durante todo o circuito." },
  { title: "Porto e Aveiro", desc: "Avenida dos Aliados, estação de São Bento, Ribeira e Ponte Luís I, e os moliceiros de Aveiro com ovos moles e espumante." },
  { title: "Douro Vinhateiro", desc: "Braga e o Bom Jesus, quinta com degustação de vinho do Porto e cruzeiro de barco rabelo no Pinhão." },
  { title: "Serra da Estrela", desc: "Museu do Queijo em Covilhã e subida à Torre, o ponto mais alto de Portugal continental." },
  { title: "Fátima, Óbidos e Lisboa", desc: "Santuário de Fátima, a vila medieval murada de Óbidos e o bairro monumental de Belém." },
  { title: "Sintra, Cascais e Alentejo", desc: "Palácio de Queluz, a Riviera portuguesa e Évora com Monsaraz e prova de azeite alentejano." },
];

const itinerary = [
  { day: "Dia 1 — 24/05 (seg)", title: "São Paulo → Lisboa", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Procedimentos de embarque", "Pernoite a bordo"] },
  { day: "Dia 2 — 25/05 (ter)", title: "Lisboa → Porto", points: ["Voo TAP 84 às 00h45, chegada a Lisboa às 14h35", "Conexão TP 1932 às 18h, chegada ao Porto às 19h", "Traslado ao hotel"] },
  { day: "Dia 3 — 26/05 (qua)", title: "Porto · Aveiro", points: ["Avenida dos Aliados, estátua de D. Pedro IV e estação de São Bento", "Rua das Flores, cais da Ribeira e Ponte Luís I", "À tarde, Aveiro e passeio em moliceiro, com prova de ovos moles e espumante"] },
  { day: "Dia 4 — 27/05 (qui)", title: "Porto · Braga · Régua → Lamego", points: ["Braga e o Bom Jesus do Monte, com subida no bondinho movido a água", "Tempo livre para almoço (não incluso)", "Douro Vinhateiro e Peso da Régua", "Quinta produtora com degustação de vinho do Porto · hospedagem em Lamego"] },
  { day: "Dia 5 — 28/05 (sex)", title: "Lamego · Pinhão", points: ["Santuário da Nossa Senhora dos Remédios e sua escadaria de 600 degraus", "Pinhão, entre os vinhedos do Douro", "Cruzeiro de 1 hora em barco rabelo pelo rio Douro", "Almoço livre (não incluso)"] },
  { day: "Dia 6 — 29/05 (sáb)", title: "Lamego → Covilhã (Serra da Estrela)", points: ["Museu do Queijo e o processo tradicional de fabricação", "Almoço livre em rota (não incluso)", "Subida à Torre, ponto mais alto de Portugal continental"] },
  { day: "Dia 7 — 30/05 (dom)", title: "Covilhã → Fátima", points: ["Santuário do Rosário de Fátima", "Tempo livre para preces pessoais", "Possibilidade de acompanhar a procissão de velas, conforme o dia"] },
  { day: "Dia 8 — 31/05 (seg)", title: "Fátima · Óbidos → Lisboa", points: ["Óbidos, vila medieval murada, com suas ruelas históricas", "Ginjinha em copo de chocolate (não incluso)", "Lisboa: Padrão dos Descobrimentos, Torre de Belém e Mosteiro dos Jerónimos", "Pastéis de Belém (não incluso) e Avenida da Liberdade até o Marquês de Pombal"] },
  { day: "Dia 9 — 01/06 (ter)", title: "Lisboa · Sintra · Cascais · Estoril", points: ["Palácio de Queluz, onde nasceu D. Pedro I", "Centro histórico de Sintra, com os travesseiros tradicionais (não incluso)", "Cascais e suas praias · almoço livre (não incluso)", "Passagem pelo Estoril e retorno a Lisboa"] },
  { day: "Dia 10 — 02/06 (qua)", title: "Lisboa · Monsaraz → Évora", points: ["Vila murada de Monsaraz, com vista para o Alqueva", "Reguengos de Monsaraz, com prova de azeite alentejano", "Tempo livre para almoço (não incluso)", "Évora: Sé Catedral, Templo Romano, Igreja dos Lóios, Universidade e Igreja de São Francisco", "Jantar incluído"] },
  { day: "Dia 11 — 03/06 (qui)", title: "Évora → Lisboa → São Paulo", points: ["Traslado ao aeroporto", "Voo TAP 87 às 23h30", "Pernoite a bordo"] },
  { day: "Dia 12 — 04/06 (sex)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 05h50 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Porto", hotel: "Fénix Porto" },
  { city: "Douro", hotel: "Lamego Hotel & Life" },
  { city: "Covilhã", hotel: "Wool Valley Hotel & Spa" },
  { city: "Fátima", hotel: "Estrela de Fátima" },
  { city: "Lisboa", hotel: "Lutecia Smart Design" },
  { city: "Évora", hotel: "Évora Hotel" },
];

const included = [
  "Bilhete aéreo São Paulo / Lisboa / Porto e Lisboa / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "9 noites em hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro desde São Paulo e guia local em português",
  "Traslados com assistência em português na chegada no Porto e na saída em Évora",
  "Visitas com guia local em português conforme o roteiro",
  "Entradas: moliceiros no rio de Aveiro, bondinho de Braga, prova de vinhos no Douro, cruzeiro de barco rabelo no Pinhão, Palácio de Queluz e prova de azeite no Alentejo",
  "1 jantar em Évora (sem bebidas)",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 156)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Almoços e provas indicadas como não inclusas no roteiro, como pastéis de Belém, ginjinha e travesseiros de Sintra",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Documentação de viagem, vistos e autorizações",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um coordenador brasileiro segue com o grupo desde o embarque em Guarulhos até o retorno, com guia local em português durante o circuito em Portugal." },
  { q: "Brasileiros precisam de visto para Portugal?", a: "Não para turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno. Para 2027 pode ser exigida a autorização eletrônica europeia ETIAS — orientamos cada viajante no momento adequado." },
  { q: "Como é o clima no fim de maio em Portugal?", a: "É plena primavera, com temperaturas em geral entre 14°C e 26°C, mais frescas na Serra da Estrela. Leve agasalho intermediário, capa de chuva compacta e calçado confortável para as ruas de pedra e escadarias." },
  { q: "A subida à Torre e as escadarias exigem preparo físico?", a: "A subida à Torre é feita de ônibus, mas o roteiro inclui escadarias e ruas inclinadas, como o Santuário dos Remédios em Lamego. Cada viajante pode aproveitar no seu ritmo; avise-nos sobre limitações de mobilidade com antecedência." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 156 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 12 dias por Portugal na primavera, de 24 de maio a 04 de junho de 2027, com guia desde o Brasil: Porto, Aveiro, Braga, Douro, Pinhão, Serra da Estrela, Fátima, Óbidos, Lisboa, Sintra, Cascais, Monsaraz e Évora.",
  image: heroImg,
  touristType: "Vinhos, história, fé, gastronomia e paisagens portuguesas",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "4795.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-05-24", priceValidUntil: "2027-05-24" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoPortugalMaio2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Portugal Maio 2027 com Guia desde o Brasil | Create Travel" description="12 dias na primavera portuguesa: Porto, Aveiro, Douro, Serra da Estrela, Fátima, Óbidos, Lisboa, Sintra e Évora. Saída 24/05/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Portugal maio 2027, viagem em grupo Portugal, Douro com guia brasileiro, excursão Portugal saindo de São Paulo, TAP, Fátima, Óbidos, Sintra, Évora, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Vinhedos em socalcos do Vale do Douro com o rio serpenteando ao fundo na primavera" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Primavera 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 24 de maio a 04 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Primavera em Portugal, do Douro ao Alentejo</h1>
          <p className="text-xl md:text-2xl te xt-white/90 mb-8 font-light">12 dias entre Porto, Aveiro, o Douro Vinhateiro, a Serra da Estrela, Fátima, Lisboa, Sintra e Évora.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "24/05 a 04/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "TAP Air Portugal" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Portugal na estação mais bonita do ano</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela TAP Air Portugal</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, com voo interno até o Porto. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Lisboa (LIS) → Porto (OPO)</p><p className="text-white/75 text-sm mt-1">25/05 · TP 84 às 00h45, chegada às 14h35 — TP 1932 às 18h, chegada às 19h</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Lisboa (LIS) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">03/06 · TP 87 às 23h30, chegada em 04/06 às 05h50</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">12 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 4.780 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 156 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 4.780", extra: "+ IOF € 119" }, { label: "Apto duplo", price: "€ 4.795", extra: "+ IOF € 120" }, { label: "Apto individual", price: "€ 5.650", extra: "+ IOF € 146" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para Portugal em maio de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoPortugalMaio2027;
