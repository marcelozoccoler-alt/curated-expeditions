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
import heroImg from "@/assets/grupo-tunisia-junho-2027.jpg";

const CANONICAL = "/grupos/tunisia-junho-2027";
const GROUP_NAME = "Grupo Tunísia Junho 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Tunísia · Junho 2027 (saída 05/06/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito até o retorno." },
  { title: "Cartago, Dougga e El Jem", desc: "Três marcos da Antiguidade: ruínas púnicas, a cidade romana mais preservada do Mediterrâneo e um dos maiores anfiteatros do mundo." },
  { title: "Sidi Bou Said", desc: "A vila azul e branca sobre o Mediterrâneo, com cafés tradicionais e vistas para o golfo de Túnis." },
  { title: "Saara e oásis", desc: "Tozeur, o lago salgado Chott el Jerid, Douz — a porta do deserto — e as casas trogloditas de Matmata." },
  { title: "Hammamet tudo incluído", desc: "Dois dias de descanso à beira do Mediterrâneo em regime de tudo incluído no resort." },
  { title: "Voos pela ITA Airways", desc: "São Paulo–Roma–Túnis em classe econômica, com uma mala de 23 kg e conexão na Itália." },
];

const itinerary = [
  { day: "Dia 1 — 05/06 (sáb)", title: "São Paulo → Roma", points: ["Apresentação em Guarulhos para encontro com nosso representante", "Voo ITA 675 às 14h15 · pernoite a bordo"] },
  { day: "Dia 2 — 06/06 (dom)", title: "Roma → Túnis", points: ["Chegada a Roma às 06h50 e conexão para o voo ITA 864 às 09h15", "Chegada a Túnis às 09h35 e traslado ao hotel", "Apartamentos disponíveis a partir das 16h · restante do dia livre"] },
  { day: "Dia 3 — 07/06 (seg)", title: "Túnis · Dougga · Rota do Azeite · Testour", points: ["Dougga, as mais importantes ruínas romanas da África — Patrimônio Mundial da UNESCO", "Degustação do azeite Triomphe de Thuccabor", "Almoço na rota (incluído)", "Testour, fundada no século XVII, e visita externa à grande mesquita hispano-mourisca", "Regresso a Túnis no fim da tarde"] },
  { day: "Dia 4 — 08/06 (ter)", title: "Túnis · Medina · Cartago · Sidi Bou Said", points: ["Medina de Túnis, seus souks e mesquitas centenárias", "Sítio arqueológico de Cartago, Termas de Antonino e anfiteatro", "Almoço incluído", "Sidi Bou Said, a vila branca e azul sobre o Mediterrâneo"] },
  { day: "Dia 5 — 09/06 (qua)", title: "Túnis → Kairouan → Tozeur", points: ["Grande Mesquita de Okba Ibn Nafa, a primeira fundada no continente africano, em 671 d.C.", "Tanques dos Aglabidas e passeio pela Medina de Kairouan", "Almoço na rota (incluído) e continuação a Tozeur"] },
  { day: "Dia 6 — 10/06 (qui)", title: "Tozeur", points: ["Medina de Tozeur e seus tijolos em relevo", "Visita a um oásis com almoço típico (incluído)", "Tarde livre", "Opcional (não incluído): safári 4x4 por Chebika, Tamerza e Ong Jmal, cenário de Star Wars"] },
  { day: "Dia 7 — 11/06 (sex)", title: "Tozeur → Chott el Jerid → Douz", points: ["Travessia do Chott el Jerid, o maior lago salgado do país, entre miragens e cristais de sal", "Chegada a Douz, a porta do Saara, e almoço incluído", "Tarde livre", "Opcional (não incluído): passeio de dromedário ou quadriciclo pelas dunas"] },
  { day: "Dia 8 — 12/06 (sáb)", title: "Douz → Matmata → Sfax", points: ["Matmata e visita a uma casa troglodita escavada na rocha", "Almoço na rota (incluído)", "Medina de Sfax, uma das mais autênticas do norte da África, cercada por muralhas medievais"] },
  { day: "Dia 9 — 13/06 (dom)", title: "Sfax → El Jem → Sousse → Hammamet", points: ["Anfiteatro romano de El Jem, Patrimônio Mundial da UNESCO", "Medina de Sousse, souks tradicionais e tempo livre para compras", "Almoço na rota (incluído)", "Check-in em Hammamet e início do regime tudo incluído"] },
  { day: "Dia 10 — 14/06 (seg)", title: "Hammamet", points: ["Dia livre à beira do Mediterrâneo", "Tudo incluído no hotel"] },
  { day: "Dia 11 — 15/06 (ter)", title: "Hammamet → Túnis → Roma → São Paulo", points: ["Apartamentos disponíveis até o meio-dia", "Traslado ao aeroporto e voo ITA 867 às 18h10 para Roma, chegada às 20h35", "Conexão para o voo ITA 674 às 22h05 · pernoite a bordo"] },
  { day: "Dia 12 — 16/06 (qua)", title: "São Paulo", points: ["Chegada prevista a Guarulhos às 05h25", "Fim dos nossos serviços"] },
];

const hotels = [
  { city: "Túnis", hotel: "Verdi Tunis Beach Resort" },
  { city: "Tozeur", hotel: "Tozeur Plaza by Odysee" },
  { city: "Douz", hotel: "Sahara Douz" },
  { city: "Sfax", hotel: "Occidental Sfax Center" },
  { city: "Hammamet", hotel: "Le Royal Hammamet" },
];

const included = [
  "Bilhete aéreo São Paulo / Túnis / São Paulo pela ITA Airways, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados de chegada e saída em Túnis, com assistência em português ou espanhol",
  "Visitas com guia local em português ou espanhol conforme o roteiro",
  "7 almoços, sem bebidas, e regime tudo incluído no hotel em Hammamet",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 170)",
  "IOF",
  "Bebidas nas refeições, exceto em Hammamet",
  "Gorjetas a guias, motoristas, garçons e carregadores",
  "Passeios e experiências indicados como opcionais",
  "Despesas pessoais, lavanderia, telefonemas e frigobar",
  "Documentos, vistos, autorizações, taxas e impostos não mencionados como incluídos",
  "Taxa turística local: 12 dinares (cerca de € 3 a € 5) por adulto, por noite, paga no hotel",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante brasileiro segue com o grupo desde o embarque em Guarulhos. No destino, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto para a Tunísia?", a: "Não para viagens de turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno e não há exigência de vacinas." },
  { q: "Como é o clima em junho?", a: "Início do verão mediterrâneo: dias ensolarados e quentes no litoral e calor mais intenso no sul, em Tozeur e Douz. Roupas leves, chapéu, óculos e protetor solar são essenciais, com um agasalho fino para as noites no deserto." },
  { q: "O que está incluído nas refeições?", a: "Café da manhã em todos os hotéis, sete almoços sem bebidas ao longo do circuito e regime tudo incluído durante a estadia em Hammamet." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de embarque, aeroporto e combustível de EUR 170, o IOF indicado em cada categoria de apartamento nem a taxa turística local paga no hotel." },
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
  description: "Viagem de 12 dias pela Tunísia, de 5 a 16 de junho de 2027, com guia acompanhante desde o Brasil: Túnis, Cartago, Sidi Bou Said, Dougga, Kairouan, Tozeur, Douz, Matmata, Sfax, El Jem e Hammamet.",
  image: heroImg,
  touristType: "História, arqueologia, cultura árabe, deserto e Mediterrâneo",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "4542.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-06-05", priceValidUntil: "2027-06-05" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoTunisiaJunho2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Tunísia Junho 2027 com Guia Brasileiro | Create" description="12 dias pela Tunísia: Túnis, Cartago, Sidi Bou Said, Dougga, Kairouan, Tozeur, Douz, Sfax, El Jem e Hammamet. Saída 05/06/2027." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Tunísia junho 2027, viagem em grupo Tunísia, Tunísia com guia brasileiro, excursão Tunísia saindo de São Paulo, ITA Airways, Cartago, Sidi Bou Said, El Jem, Saara tunisiano, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Ruas azuis e brancas de Sidi Bou Said, na Tunísia, com vista para o Mediterrâneo" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Verão mediterrâneo 2027 · Vagas limitadas</div>
          <p className="text-caption text-gold mb-4">Grupo com guia brasileiro · 5 a 16 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Tunísia: do azul do Mediterrâneo às areias do Saara</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">12 dias entre Cartago, medinas milenares, ruínas romanas, oásis e dunas — com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "5 a 16/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "ITA Airways" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria + Hammamet" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Três mil anos de história em um só país</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela ITA Airways via Roma</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Roma (FCO) → Túnis (TUN)</p><p className="text-white/75 text-sm mt-1">05/06 · ITA 675 às 14h15 — conexão em Roma às 06h50 e ITA 864 às 09h15, chegada às 09h35</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Túnis (TUN) → Roma (FCO) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">15/06 · ITA 867 às 18h10 — conexão ITA 674 às 22h05, chegada em 16/06 às 05h25</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">12 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 4.522 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 170 em taxas de aeroporto e combustível. A taxa turística local (12 dinares por adulto, por noite) é paga diretamente nos hotéis. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 4.522", extra: "+ IOF € 105" }, { label: "Apto duplo", price: "€ 4.542", extra: "+ IOF € 106" }, { label: "Apto individual", price: "€ 5.200", extra: "+ IOF € 126" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Vagas limitadas — grupo com guia brasileiro</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a Tunísia em junho de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoTunisiaJunho2027;
