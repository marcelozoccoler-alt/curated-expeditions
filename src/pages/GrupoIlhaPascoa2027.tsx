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
import heroImg from "@/assets/grupo-ilha-de-pascoa-2027.jpg";

const CANONICAL = "/grupos/ilha-de-pascoa-2027";
const GROUP_NAME = "Grupo Ilha de Páscoa · Maio 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Ilha de Páscoa (saída 18/05/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito, até o retorno a São Paulo." },
  { title: "Rapa Nui de perto", desc: "Rano Raraku, Ahu Tongariki, Anakena e Orongo: os grandes sítios cerimoniais da ilha, com guia local." },
  { title: "Santiago e vinhos do Maipo", desc: "City tour pela capital chilena e visita com degustação em vinícola tradicional do Vale do Maipo." },
  { title: "Hospedagem em Hanga Roa", desc: "Hotel boutique com café da manhã, a poucos minutos do centro e do porto da ilha." },
  { title: "Ritmo de contemplação", desc: "Roteiro desenhado para amanheceres e pores do sol nos moais, os melhores momentos de luz da ilha." },
  { title: "Voos pela LATAM", desc: "São Paulo–Santiago–Ilha de Páscoa e retorno em classe econômica, com uma mala de 23 kg." },
];

const itinerary = [
  { day: "Dia 1 — 18/05 (ter)", title: "São Paulo → Santiago", points: ["Apresentação em Guarulhos e encontro com nosso representante", "Voo LATAM com destino a Santiago", "Recepção e traslado ao hotel"] },
  { day: "Dia 2 — 19/05 (qua)", title: "Santiago · city tour e vinícola", points: ["Visita à cidade: La Moneda, Praça das Armas, Catedral, Cerro Santa Lucía e os bairros de Providência e Las Condes", "Almoço livre (não incluso)", "Tarde em vinícola do Vale do Maipo, com visita às adegas e degustação"] },
  { day: "Dia 3 — 20/05 (qui)", title: "Santiago → Ilha de Páscoa", points: ["Traslado ao aeroporto e voo de cerca de 5h30 sobre o Pacífico", "Recepção em Mataveri com colar de flores e traslado ao hotel em Hanga Roa", "Restante do dia livre para caminhar pela orla e pelo porto"] },
  { day: "Dia 4 — 21/05 (sex)", title: "Rano Raraku e Ahu Tongariki", points: ["Visita à pedreira de Rano Raraku, onde os moais foram esculpidos", "Ahu Tongariki, a maior plataforma cerimonial da ilha, com 15 moais alinhados", "Praia de Anakena, de areia branca e coqueiros · almoço livre (não incluso)"] },
  { day: "Dia 5 — 22/05 (sáb)", title: "Orongo e Rano Kau", points: ["Cratera do vulcão Rano Kau e a vila cerimonial de Orongo, ligada ao culto do homem-pássaro", "Ahu Vinapu e suas pedras de encaixe perfeito", "Tarde livre · opcional (não incluso): mergulho ou aula de dança rapa nui"] },
  { day: "Dia 6 — 23/05 (dom)", title: "Costa norte e Puna Pau", points: ["Ahu Akivi, com sete moais voltados para o mar", "Puna Pau, pedreira dos pukao, os \"chapéus\" de escória vermelha", "Ana Te Pahu, caverna de lava com jardins subterrâneos"] },
  { day: "Dia 7 — 24/05 (seg)", title: "Ilha de Páscoa → Santiago", points: ["Manhã livre em Hanga Roa · pôr do sol prévio em Tahai como despedida, conforme horário do voo", "Traslado ao aeroporto e voo de retorno a Santiago", "Hospedagem em Santiago"] },
  { day: "Dia 8 — 25/05 (ter)", title: "Santiago → São Paulo", points: ["Tempo livre conforme o horário do voo e traslado ao aeroporto", "Voo LATAM de retorno a Guarulhos", "Chegada a São Paulo · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Santiago", hotel: "Almacruz" },
  { city: "Ilha de Páscoa (Hanga Roa)", hotel: "Altiplanico Rapa Nui" },
];

const included = [
  "Bilhete aéreo São Paulo / Santiago / Ilha de Páscoa / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis selecionados com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados com assistência em Santiago e na Ilha de Páscoa",
  "City tour em Santiago e visita a vinícola do Vale do Maipo com degustação",
  "Excursões na Ilha de Páscoa com guia local, conforme o roteiro",
  "Ingresso do Parque Nacional Rapa Nui",
  "Serviço de rastreamento de bagagem",
  "Cartão de assistência médica internacional",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (USD 160)",
  "IOF",
  "Bebidas nas refeições",
  "Almoços e jantares indicados como não inclusos",
  "Passeios opcionais na ilha, como mergulho e experiências culturais",
  "Gorjetas a guias, motoristas e garçons",
  "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
  "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento do grupo?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno. Na ilha e em Santiago, as visitas são conduzidas por guias locais." },
  { q: "Brasileiros precisam de visto para o Chile e para a Ilha de Páscoa?", a: "Não para turismo. Além do passaporte válido, a entrada em Rapa Nui exige o formulário FUI, comprovante de hospedagem e passagem de retorno — providenciados com apoio da nossa equipe." },
  { q: "Como é o clima em maio na Ilha de Páscoa?", a: "É outono no Pacífico: temperaturas em geral entre 18°C e 24°C, com pancadas de chuva rápidas. Leve roupas leves, capa de chuva, protetor solar, chapéu e calçado com boa aderência para os sítios de pedra." },
  { q: "Quanto tempo dura o voo até a ilha?", a: "Cerca de 5h30 desde Santiago, sobre o Pacífico. É um dos trechos aéreos mais isolados do mundo, o que torna a chegada parte da experiência." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 160 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 8 dias a Santiago e à Ilha de Páscoa, de 18 a 25 de maio de 2027, com guia acompanhante desde o Brasil: Rano Raraku, Ahu Tongariki, Anakena, Orongo e vinícola do Vale do Maipo.",
  image: heroImg,
  touristType: "Arqueologia, cultura polinésia, natureza e Pacífico Sul",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "4429.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-05-18", priceValidUntil: "2027-05-18" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoIlhaPascoa2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Ilha de Páscoa 2027 com Guia desde o Brasil | Create Travel" description="8 dias entre Santiago e Rapa Nui: Rano Raraku, Ahu Tongariki, Anakena, Orongo e vinícola do Maipo. Saída 18/05/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Ilha de Páscoa 2027, Rapa Nui viagem em grupo, moais, Ahu Tongariki, Santiago do Chile, guia brasileiro, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Fileira de moais de pedra na Ilha de Páscoa ao pôr do sol, com o oceano ao fundo" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Maio 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 18 a 25 de maio de 2027</p>
          <h1 className="heading-hero text-white mb-6">Ilha de Páscoa: o mistério dos moais no meio do Pacífico</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">8 dias entre Santiago e Rapa Nui, a ilha habitada mais isolada do planeta — com guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "18 a 25/05/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "LATAM" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis selecionados" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Uma ilha entre o mito e o oceano</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela LATAM</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, incluindo o trecho Santiago–Ilha de Páscoa nos dois sentidos. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Santiago (SCL) → Ilha de Páscoa (IPC)</p><p className="text-white/75 text-sm mt-1">18/05 · voo a Santiago — 20/05 · travessia de cerca de 5h30 sobre o Pacífico</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Ilha de Páscoa (IPC) → Santiago (SCL) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">24/05 · retorno a Santiago com pernoite — 25/05 · voo a Guarulhos</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">8 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de US$ 4.397 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 160 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "US$ 4.397", extra: "+ IOF" }, { label: "Apto duplo", price: "US$ 4.429", extra: "+ IOF" }, { label: "Apto individual", price: "US$ 5.200", extra: "+ IOF" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a Ilha de Páscoa em maio de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoIlhaPascoa2027;
