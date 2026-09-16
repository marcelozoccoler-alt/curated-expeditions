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
import heroImg from "@/assets/grupo-turquia-junho-2027.jpg";

const CANONICAL = "/grupos/turquia-junho-2027";
const GROUP_NAME = "Grupo Turquia · Junho 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Turquia (saída 15/06/2027)",
};

const benefits = [
  { title: "Guia acompanhante desde o Brasil", desc: "Encontro em Guarulhos e acompanhamento durante todo o circuito até o retorno." },
  { title: "Istambul entre dois continentes", desc: "Santa Sofia, Mesquita Azul, Hipódromo, Grande Bazar, Palácio Beylerbeyi e passeio pelo Bósforo." },
  { title: "Capadócia extraordinária", desc: "Göreme, chaminés de fadas, cidade subterrânea de Saratlı, Avanos e Üçhisar, com opcional de balão ao amanhecer." },
  { title: "Pamukkale e Hierápolis", desc: "Terraços de travertino, museu, Laodiceia e hotel com piscinas termais." },
  { title: "Éfeso e Casa da Virgem Maria", desc: "Biblioteca de Celso, Templo de Adriano e o Grande Teatro em uma das cidades antigas mais bem preservadas." },
  { title: "Ancara e Bursa", desc: "Mausoléu de Atatürk e a primeira capital otomana, com o bairro da Mesquita Verde e os mercados de seda." },
];

const itinerary = [
  { day: "Dia 1 — 15/06 (ter)", title: "São Paulo → Istambul", points: ["Apresentação em Guarulhos e encontro com o coordenador", "Voo Turkish TK 216 às 16h35", "Pernoite a bordo"] },
  { day: "Dia 2 — 16/06 (qua)", title: "Istambul", points: ["Chegada às 11h15", "Recepção e traslado ao hotel", "Hospedagem"] },
  { day: "Dia 3 — 17/06 (qui)", title: "Istambul histórica", points: ["Muralhas de Constantinopla, bairro Eyüp e o Chifre de Ouro", "Avenida Istiklal, Hipódromo Bizantino e Mesquita Azul", "Almoço incluído", "Basílica de Santa Sofia e o Grande Bazar"] },
  { day: "Dia 4 — 18/06 (sex)", title: "Istambul e o Bósforo", points: ["Palácio Beylerbeyi, residência de verão dos sultões", "Parada panorâmica na Colina Çamlıca", "Passeio de barco pelo Estreito de Bósforo", "Almoço incluído e visita ao Bazar das Especiarias"] },
  { day: "Dia 5 — 19/06 (sáb)", title: "Istambul → Ancara", points: ["Viagem pela Anatólia até a capital", "Mausoléu de Atatürk", "Jantar incluído e hospedagem"] },
  { day: "Dia 6 — 20/06 (dom)", title: "Ancara → Capadócia", points: ["Parada no Lago Salgado (Tuz)", "Cidade subterrânea de Saratlı", "Museu ao Ar Livre de Göreme, com afrescos dos séculos X e XI", "Centro de tapetes artesanais · jantar incluído", "Opcional (não incluso): Jeep Safari pelos vales"] },
  { day: "Dia 7 — 21/06 (seg)", title: "Capadócia", points: ["Região de Avanos e as chaminés de fadas", "Aldeias de Üçhisar e Ortahisar e o Vale dos Pombos", "Jantar incluído", "Opcionais (não inclusos): voo de balão ao amanhecer e Noite Turca"] },
  { day: "Dia 8 — 22/06 (ter)", title: "Capadócia → Pamukkale", points: ["Parada no caravançarai Sultan Han, na Rota da Seda", "Chegada a Pamukkale", "Jantar incluído e piscinas termais no hotel"] },
  { day: "Dia 9 — 23/06 (qua)", title: "Pamukkale · Hierápolis", points: ["Terraços de travertino e a antiga cidade de Hierápolis", "Museu com esculturas romanas e tempo livre nas piscinas naturais", "Laodiceia, uma das sete igrejas do Apocalipse", "Tarde livre nas termas · jantar incluído"] },
  { day: "Dia 10 — 24/06 (qui)", title: "Pamukkale → Éfeso → Izmir", points: ["Ruínas de Éfeso: Ágora, Odeão, Fonte de Trajano, Templo de Adriano, Teatro e Biblioteca de Celso", "Casa da Virgem Maria", "Parada em centro de peles · jantar incluído"] },
  { day: "Dia 11 — 25/06 (sex)", title: "Izmir · Bursa → Istambul", points: ["Bursa, primeira capital otomana", "Bairro da Mesquita Verde e mercados de seda", "Continuação para Istambul"] },
  { day: "Dia 12 — 26/06 (sáb)", title: "Istambul", points: ["Dia livre para compras ou atividades pessoais", "Opcional (não incluso): lado asiático, com Palácio de Yıldız, Mesquita de Çamlıca e Avenida Bağdat"] },
  { day: "Dia 13 — 27/06 (dom)", title: "Istambul → São Paulo", points: ["Apartamentos disponíveis até às 12h e traslado ao aeroporto", "Voo TK 215 às 20h25", "Pernoite a bordo"] },
  { day: "Dia 14 — 28/06 (seg)", title: "São Paulo", points: ["Chegada prevista a Guarulhos · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Istambul", hotel: "Nippon Taksim" },
  { city: "Ancara", hotel: "New Park Ankara" },
  { city: "Capadócia", hotel: "Dinler" },
  { city: "Pamukkale", hotel: "Colossae Thermal & Spa" },
  { city: "Izmir", hotel: "Kordon Çankaya" },
];

const included = [
  "Bilhete aéreo São Paulo / Istambul / São Paulo, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã e taxa de turismo",
  "Guia acompanhante desde o Brasil",
  "Traslados de chegada e saída em Istambul",
  "Visitas conforme o roteiro com guia local em português ou espanhol",
  "2 almoços e 6 jantares (sem bebidas)",
  "Serviço de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência médica internacional de US$ 75.000",
  "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 711)",
  "IOF",
  "Gorjetas obrigatórias a guias, motoristas, restaurantes, hotéis e carregadores de malas: USD 50 por pessoa, pagos localmente",
  "Bebidas nas refeições",
  "Passeios opcionais: voo de balão na Capadócia, Jeep Safari, Noite Turca e lado asiático de Istambul",
  "Almoços e demais refeições não indicadas como incluídas",
  "Early check-in e late check-out",
  "Despesas pessoais, frigobar, telefonemas e lavanderia",
  "Documentação de viagem, vistos e autorizações",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno. As visitas são conduzidas por guias locais com conhecimento de português ou espanhol." },
  { q: "Brasileiros precisam de visto para a Turquia?", a: "Não para turismo. O passaporte deve ter validade mínima de seis meses a partir da data de retorno." },
  { q: "As gorjetas estão incluídas?", a: "Não. Há um valor obrigatório de USD 50 por pessoa, pago localmente, que cobre gorjetas a guias, motoristas, restaurantes, hotéis e carregadores de malas." },
  { q: "O voo de balão na Capadócia está incluído?", a: "Não. É um passeio opcional, contratado à parte, realizado ao amanhecer e sujeito às condições climáticas do dia." },
  { q: "Como é o clima em junho?", a: "É verão: Istambul e a costa do Egeu ficam em geral entre 22°C e 32°C, e a Capadócia tem dias quentes com noites frescas. Leve roupas leves, protetor solar, chapéu, calçado confortável e um agasalho leve, além de traje de banho para as piscinas termais." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 711 nem o IOF indicado em cada categoria de apartamento." },
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
  description: "Viagem de 14 dias pela Turquia, de 15 a 28 de junho de 2027, com guia desde o Brasil: Istambul, Bósforo, Ancara, Capadócia, Pamukkale, Hierápolis, Éfeso, Izmir e Bursa.",
  image: heroImg,
  touristType: "História, arqueologia, paisagens e gastronomia turca",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "3998.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-06-15", priceValidUntil: "2027-06-15" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoTurquiaJunho2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Turquia Junho 2027 com Guia desde o Brasil | Create Travel" description="14 dias entre dois continentes: Istambul, Bósforo, Ancara, Capadócia, Pamukkale, Éfeso e Bursa. Saída 15/06/2027 com guia desde o Brasil." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Turquia junho 2027, viagem em grupo Turquia, Capadócia com guia brasileiro, excursão Istambul saindo de São Paulo, Turkish Airlines, Pamukkale, Éfeso, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Balões coloridos sobrevoando as chaminés de fadas da Capadócia ao amanhecer" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Junho 2027 · Lugares limitados</div>
          <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 15 a 28 de junho de 2027</p>
          <h1 className="heading-hero text-white mb-6">Turquia: entre dois continentes, milhares de anos de história</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">14 dias de Istambul à Capadócia, com Pamukkale, Éfeso, Ancara e Bursa — e guia acompanhante desde o Brasil.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "15 a 28/06/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "Turkish Airlines" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">Um dos países mais fascinantes do mundo</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos pela Turkish Airlines</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa, em rota direta a Istambul. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Istambul (IST)</p><p className="text-white/75 text-sm mt-1">15/06 · TK 216 às 16h35, chegada em 16/06 às 11h15</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Istambul (IST) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">27/06 · TK 215 às 20h25, chegada em 28/06</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">14 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 3.969 por pessoa</h2><p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 711 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 3.969", extra: "+ IOF € 94" }, { label: "Apto duplo", price: "€ 3.998", extra: "+ IOF € 95" }, { label: "Apto individual", price: "€ 4.978", extra: "+ IOF € 126" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para a Turquia em junho de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoTurquiaJunho2027;
