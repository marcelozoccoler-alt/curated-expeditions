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
import heroImg from "@/assets/grupo-marrocos-2026.jpg";

const CANONICAL = "/grupos/marrocos-maio-2027";
const GROUP_NAME = "Grupo Marrocos Maio 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Marrocos · Maio 2027 (saída 12/05/2027)",
};

const benefits = [
  { title: "Coordenador brasileiro", desc: "Acompanhamento desde o encontro em Guarulhos até o retorno ao Brasil." },
  { title: "Cidades imperiais e cultura", desc: "Rabat, Meknès, Fez, Marrakech e Casablanca em uma leitura completa do país." },
  { title: "Noite no Saara", desc: "Acampamento de luxo em Merzouga, passeio de dromedário e jantar sob o céu do deserto." },
  { title: "Paisagens do Atlas", desc: "Travessia por Ifrane, Vale do Ziz, Gargantas do Todra, Vale das Rosas e Tizi n’Tichka." },
  { title: "Hotéis de primeira categoria", desc: "Hospedagens selecionadas com café da manhã e três jantares previstos no roteiro." },
  { title: "Assistência e tranquilidade", desc: "Seguro-viagem, rastreamento de bagagem, sala VIP e guias locais em português ou espanhol." },
];

const itinerary = [
  { day: "Dia 1 — 12/05 (qua)", title: "São Paulo · encontro em Guarulhos", points: ["Apresentação às 20h30 no Aeroporto Internacional de Guarulhos", "Encontro com o coordenador brasileiro e preparação para o embarque"] },
  { day: "Dia 2 — 13/05 (qui)", title: "São Paulo → Casablanca → Rabat", points: ["Voo Royal Air Maroc AT 214 às 00h30", "Chegada a Casablanca às 12h25", "Recepção e traslado a Rabat · apartamentos disponíveis a partir das 15h", "Restante do dia livre para descanso"] },
  { day: "Dia 3 — 14/05 (sex)", title: "Rabat", points: ["Torre Hassan, Mausoléu de Mohammed V e Kasbah dos Oudaias", "Caminhada pela Medina e passagem pelo porto e pela área moderna", "Tarde livre para explorar a capital"] },
  { day: "Dia 4 — 15/05 (sáb)", title: "Rabat → Chefchaouen", points: ["Viagem às montanhas do Rif", "Visita guiada pela Praça Uta el-Hammam, Kasbah e Medina", "Tempo livre entre ruelas azuis e lojas de artesanato"] },
  { day: "Dia 5 — 16/05 (dom)", title: "Chefchaouen → Volubilis → Meknès → Fez", points: ["Manhã livre em Chefchaouen", "Ruínas romanas e mosaicos de Volubilis", "Bab Mansour e Praça El Hedim em Meknès", "Continuação até Fez"] },
  { day: "Dia 6 — 17/05 (seg)", title: "Fez", points: ["Medina de Fez, Madraça Bou Anania e Fonte Nejjarine", "Bairro dos curtidores, souks e oficinas de artesãos", "Fez el-Jdid, exterior do Palácio Real e vista panorâmica da Medina", "Almoço não incluído"] },
  { day: "Dia 7 — 18/05 (ter)", title: "Fez → Ifrane → Midelt → Erfoud", points: ["Travessia do Atlas por Immouzzer Kandar, Ifrane e Azrou", "Bosques de cedros e paisagens berberes", "Vale do Ziz e seus extensos palmeirais", "Chegada a Erfoud · almoço não incluído"] },
  { day: "Dia 8 — 19/05 (qua)", title: "Erfoud → Merzouga", points: ["Manhã livre em Erfoud", "Travessia em veículo 4x4 até as dunas de Erg Chebbi", "Passeio de dromedário ao entardecer ou amanhecer", "Jantar incluído e noite em acampamento de luxo no Saara"] },
  { day: "Dia 9 — 20/05 (qui)", title: "Merzouga → Todra → Ouarzazate", points: ["Caminhada pelas Gargantas do Todra", "Vale do Dades e Rota das Mil Kasbahs", "Vale das Rosas e oásis de Skoura", "Jantar incluído e hospedagem em Ouarzazate"] },
  { day: "Dia 10 — 21/05 (sex)", title: "Ouarzazate → Aït Ben Haddou → Marrakech", points: ["Tour panorâmico e parada na Kasbah Taourirt", "Visita à cidade fortificada de Aït Ben Haddou", "Travessia do Alto Atlas pela estrada de Tizi n’Tichka", "Jantar incluído no hotel em Marrakech"] },
  { day: "Dia 11 — 22/05 (sáb)", title: "Marrakech", points: ["Jardins de Menara e Palácio Bahia", "Mesquita Koutoubia em visita externa e Medersa Ben Youssef", "Souks da Medina e Praça Jemaa el-Fna", "Jantar folclórico opcional · não incluído"] },
  { day: "Dia 12 — 23/05 (dom)", title: "Marrakech · dia livre", points: ["Dia livre para explorar a Medina e os souks", "Sugestões não incluídas: balão ao amanhecer, Jardins Majorelle, Museu Yves Saint Laurent, hammam ou aula de culinária", "Almoço opcional não incluído"] },
  { day: "Dia 13 — 24/05 (seg)", title: "Marrakech → Casablanca", points: ["Viagem até Casablanca", "Corniche de Ain Diab, centro e Praça Mohammed V", "Visita externa à Mesquita Hassan II", "Tempo livre e sugestão de refeição no Rick’s Café · não incluída"] },
  { day: "Dia 14 — 25/05 (ter)", title: "Casablanca → São Paulo", points: ["Apartamentos disponíveis até as 12h", "Traslado ao aeroporto e voo Royal Air Maroc AT 215 às 15h50", "Chegada prevista a Guarulhos às 22h25"] },
];

const hotels = [
  { city: "Rabat", hotel: "Le Diwan MGallery by Sofitel" },
  { city: "Chefchaouen", hotel: "Taj Chefchaouen Luxury" },
  { city: "Fez", hotel: "Heritage Boutique" },
  { city: "Erfoud", hotel: "Xaluca Maadid" },
  { city: "Merzouga", hotel: "Bivouac Belles Etoiles Camp" },
  { city: "Ouarzazate", hotel: "Ksar Ighnda" },
  { city: "Marrakech", hotel: "Grand Mogador Agdal" },
  { city: "Casablanca", hotel: "Le Square by Onomo" },
];

const included = [
  "Bilhete aéreo São Paulo / Casablanca / São Paulo pela Royal Air Maroc, em classe econômica, com 1 mala de 23 kg",
  "Hotéis de primeira categoria com café da manhã",
  "Coordenador brasileiro desde o embarque em São Paulo",
  "Traslados de chegada Casablanca–Rabat e de saída em Casablanca, com assistência em português ou espanhol",
  "Traslado em veículo 4x4 de Erfoud às dunas de Merzouga",
  "Guias locais em português ou espanhol durante o circuito",
  "Noite em tenda em Merzouga e passeio de dromedário",
  "Entradas conforme a programação",
  "3 jantares, sem bebidas, em Erfoud, Merzouga e Ouarzazate",
  "Rastreamento de bagagem e acesso à Sala VIP W Premium em Guarulhos",
  "Assistência médica internacional de US$ 75.000 e seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
  "Taxas de embarque, aeroporto e combustível (EUR 224)",
  "IOF",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas, garçons e carregadores",
  "Passeios, refeições e experiências indicados como opcionais",
  "Despesas pessoais, lavanderia, telefonemas e frigobar",
  "Documentos, vistos, autorizações, taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um coordenador brasileiro encontra o grupo em Guarulhos e acompanha toda a jornada. No destino, as visitas são conduzidas por guias locais em português ou espanhol." },
  { q: "Brasileiros precisam de visto para o Marrocos?", a: "Não para viagens de turismo, mas o passaporte deve ter validade mínima de seis meses a partir da data de retorno. Recomenda-se manter o calendário de vacinação atualizado." },
  { q: "Como é o clima em maio?", a: "A primavera costuma trazer dias agradáveis e noites mais frescas, principalmente no Atlas e no deserto. Roupas em camadas, calçado confortável e proteção solar são recomendados." },
  { q: "Como é a noite no Saara?", a: "A experiência inclui traslado em 4x4, passeio de dromedário e hospedagem em acampamento de luxo em Merzouga, com jantar e café da manhã." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos à disponibilidade no momento da reserva." },
  { q: "Qual é a condição de pagamento?", a: "Consulte a Create Travel para confirmar as condições comerciais e a disponibilidade atual desta saída." },
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
  description: "Viagem de 14 dias pelo Marrocos, de 12 a 25 de maio de 2027, com coordenador brasileiro, cidades imperiais, Chefchaouen, Atlas e noite no Saara.",
  image: heroImg,
  touristType: "Cultura, história, gastronomia e deserto",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })) },
  offers: { "@type": "Offer", price: "4252.00", priceCurrency: "EUR", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-05-12", priceValidUntil: "2027-05-12" },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoMarrocosMaio2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO title="Marrocos Maio 2027 com Guia Brasileiro | Create" description="14 dias pelo Marrocos: Rabat, Chefchaouen, Fez, Saara, Ouarzazate, Marrakech e Casablanca. Saída 12/05/2027 com guia brasileiro." canonicalPath={CANONICAL} ogImage={heroImg} ogType="article" jsonLd={[jsonLd, ...hotelsJsonLd]} keywords={`Marrocos maio 2027, viagem em grupo Marrocos, Marrocos com guia brasileiro, excursão Marrocos saindo de São Paulo, Royal Air Maroc, noite no Saara, Chefchaouen, Fez, Marrakech, ${hotelsKeywords}`} />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0"><img src={heroImg} alt="Arquitetura marroquina em viagem pelo Marrocos" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" /><div className="absolute inset-0 hero-overlay" /></div>
        <div className="container-editorial relative z-10"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Primavera 2027 · Vagas limitadas</div>
          <p className="text-caption text-gold mb-4">Grupo com guia brasileiro · 12 a 25 de maio de 2027</p>
          <h1 className="heading-hero text-white mb-6">Marrocos: história, deserto e cultura</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">14 dias pelas cidades imperiais, montanhas do Atlas e dunas do Saara — com coordenador brasileiro desde Guarulhos.</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4"><WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" /><a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a></div>
        </motion.div></div>
      </section>

      <section className="bg-muted py-10 border-b border-border"><div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">{[
        { icon: Calendar, label: "Datas", value: "12 a 25/05/2027" }, { icon: Users, label: "Perfil", value: "Guia desde o Brasil" }, { icon: Plane, label: "Voos", value: "Royal Air Maroc" }, { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria + Saara" },
      ].map((fact) => <div key={fact.label} className="flex items-start gap-3"><fact.icon className="text-gold flex-shrink-0" size={22} /><div><p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p><p className="font-serif font-semibold text-foreground">{fact.value}</p></div></div>)}</div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Por que viver esta jornada</p><h2 className="heading-section text-foreground">O Marrocos em toda a sua diversidade</h2></div><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{benefits.map((benefit, index) => <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border"><div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div><h3 className="text-lg font-serif font-semibold mb-2">{benefit.title}</h3><p className="text-muted-foreground text-sm leading-relaxed">{benefit.desc}</p></motion.div>)}</div></div></section>

      <section className="section-padding bg-navy text-white"><div className="container-editorial grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p><h2 className="heading-section mb-6">Voos diretos pela Royal Air Maroc</h2><p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada de até 23 kg por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p></div><div className="space-y-4"><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p><p className="font-serif text-lg">São Paulo (GRU) → Casablanca (CMN)</p><p className="text-white/75 text-sm mt-1">13/05 · AT 214 às 00h30 — chegada às 12h25</p></div><div className="bg-white/5 border border-white/10 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p><p className="font-serif text-lg">Casablanca (CMN) → São Paulo (GRU)</p><p className="text-white/75 text-sm mt-1">25/05 · AT 215 às 15h50 — chegada às 22h25</p></div></div></div></section>

      <section className="section-padding"><div className="container-editorial"><div className="text-center mb-14 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Roteiro completo</p><h2 className="heading-section text-foreground">14 dias — dia a dia</h2></div><div className="grid md:grid-cols-2 gap-6">{itinerary.map((item, index) => <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card"><div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div><h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3><ul className="space-y-2">{item.points.map((point) => <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>)}</ul></motion.div>)}</div></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial"><div className="text-center mb-12 max-w-2xl mx-auto"><p className="text-caption text-gold mb-4">Hotéis previstos</p><h2 className="heading-section text-foreground">Hospedagens selecionadas</h2><p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p></div><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">{hotels.map((hotel) => <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card"><Hotel className="text-gold mx-auto mb-3" size={22} /><p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p><p className="font-serif text-lg font-semibold text-foreground"><a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a></p></div>)}</div></div></section>

      <section className="section-padding"><div className="container-editorial grid md:grid-cols-2 gap-8"><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2><ul className="space-y-3">{included.map((item) => <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>)}</ul></div><div className="bg-card rounded-xl p-8 border border-border shadow-card"><h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2><ul className="space-y-3">{notIncluded.map((item) => <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>)}</ul></div></div></section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white"><div className="container-editorial max-w-4xl text-center"><p className="text-caption text-gold mb-4">Investimento</p><h2 className="heading-section mb-6">A partir de € 4.252 por pessoa</h2><p className="text-white/85 mb-8">Em apartamento duplo. Valores por pessoa, acrescidos de IOF e de EUR 224 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p><div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">{[
        { label: "Apto triplo", price: "€ 4.218", extra: "+ IOF € 107" }, { label: "Apto duplo", price: "€ 4.252", extra: "+ IOF € 109" }, { label: "Apto individual", price: "€ 5.218", extra: "+ IOF € 132" },
      ].map((price) => <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p><p className="font-serif text-2xl font-semibold">{price.price}</p><p className="text-white/70 text-xs mt-1">{price.extra}</p></div>)}</div><WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" /></div></section>

      <section className="section-padding bg-muted"><div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div></section>
      <section className="section-padding"><div className="container-editorial text-center max-w-2xl"><h2 className="heading-section text-foreground mb-6">Vagas limitadas — grupo com guia brasileiro</h2><p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade para o Marrocos em maio de 2027.</p><div className="flex flex-col sm:flex-row items-center justify-center gap-4"><a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a><Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link></div></div></section>
      <Footer />
    </div>
  );
};

export default GrupoMarrocosMaio2027;