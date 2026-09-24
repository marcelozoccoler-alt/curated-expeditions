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

const CANONICAL = "/grupos/turquia-maio-2027";
const GROUP_NAME = "Grupo Turquia · 15 de maio de 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Turquia: Istambul, Capadócia, Pamukkale e Éfeso (saída 15/05)",
};

const itinerary = [
  { day: "Dia 1 — 15/05 (sáb)", title: "São Paulo → Istambul", points: ["Apresentação em Guarulhos e voo TK 216 às 16h35","Pernoite a bordo"] },
  { day: "Dia 2 — 16/05 (dom)", title: "Istambul", points: ["Chegada, traslado ao hotel e Avenida Istiklal","Grand Bazar, o primeiro shopping coberto do mundo"] },
  { day: "Dia 3 — 17/05 (seg)", title: "Istambul", points: ["Hagia Sophia, Mesquita Azul e Hipódromo Romano","Cisterna da Basílica e Bazar das Especiarias"] },
  { day: "Dia 4 — 18/05 (ter)", title: "Istambul", points: ["Palácio Topkapi e seus tesouros imperiais","Passeio pelo Bósforo entre Europa e Ásia"] },
  { day: "Dia 5 — 19/05 (qua)", title: "Istambul → Ancara", points: ["Travessia pela Anatólia com paradas em rota","Chegada a Ancara"] },
  { day: "Dia 6 — 20/05 (qui)", title: "Ancara → Capadócia", points: ["Lago Salgado e caravançarás da Rota da Seda","Castelo de Üçhisar ao chegar à Capadócia"] },
  { day: "Dia 7 — 21/05 (sex)", title: "Capadócia", points: ["Vales de Göreme com igrejas rupestres e afrescos","Cidade subterrânea e oficinas de cerâmica e tapetes","Opcional (não incluso): voo de balão ao amanhecer"] },
  { day: "Dia 8 — 22/05 (sáb)", title: "Capadócia → Pamukkale", points: ["Travessia pelo interior da Turquia","Chegada a Pamukkale e hospedagem termal"] },
  { day: "Dia 9 — 23/05 (dom)", title: "Pamukkale", points: ["Terraços brancos de travertino e ruínas de Hierápolis","Museu arqueológico local"] },
  { day: "Dia 10 — 24/05 (seg)", title: "Pamukkale → Éfeso → Izmir", points: ["Éfeso: Biblioteca de Celso e Teatro Romano","Casa da Virgem Maria","Chegada a Izmir"] },
  { day: "Dia 11 — 25/05 (ter)", title: "Izmir → Bursa → Istambul", points: ["Bursa, primeira capital otomana, e a Mesquita Verde","Retorno a Istambul"] },
  { day: "Dia 12 — 26/05 (qua)", title: "Istambul", points: ["Dia livre para bairros, compras e cafés (refeições não inclusas)"] },
  { day: "Dia 13 — 27/05 (qui)", title: "Istambul → São Paulo", points: ["Traslado ao aeroporto e voo TK 215 às 20h25","Pernoite a bordo"] },
  { day: "Dia 14 — 28/05 (sex)", title: "São Paulo", points: ["Chegada a Guarulhos · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Istambul", hotel: "Nippon Taksim" },
  { city: "Ancara", hotel: "New Park Ankara" },
  { city: "Capadócia", hotel: "Perissia" },
  { city: "Pamukkale", hotel: "Colossae Thermal & Spa" },
  { city: "Izmir", hotel: "Kordon Çankaya" },
];

const included = [
    "Bilhete aéreo São Paulo / Istambul / São Paulo em classe econômica, com 1 mala de 23 kg",
    "Hotéis de primeira categoria com café da manhã",
    "Guia acompanhante desde o Brasil e guias locais no destino",
    "Traslados e visitas conforme o roteiro, com entradas incluídas",
    "2 almoços e 6 jantares (sem bebidas)",
    "Serviço de rastreamento de bagagem",
    "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
    "Cartão de assistência médica internacional de US$ 75.000",
    "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
    "Taxas de embarque, aeroporto e combustível (EUR 711)",
    "IOF",
    "Bebidas nas refeições",
    "Gorjetas a guias, motoristas e garçons",
    "Refeições indicadas como não inclusas no roteiro",
    "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
    "Documentação de viagem, vistos e autorizações",
    "Taxas e impostos não mencionados como incluídos",
    "Gorjetas locais obrigatórias de US$ 50 por pessoa",
    "Voo de balão na Capadócia",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno ao Brasil. No destino, as visitas são conduzidas por guias locais." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 711 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Como faço para reservar?", a: "A parte terrestre pode ser reservada com 25% de entrada e o saldo em até 9 vezes sem juros no cartão de crédito. Fale com a curadoria pelo WhatsApp para confirmar disponibilidade." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva." },
  { q: "O voo de balão na Capadócia está incluído?", a: "Não. É uma experiência opcional, contratada no destino conforme as condições de vento e horário de operação." },
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
  description: "14 dias por Istambul, Ancara, Capadócia, Pamukkale, Éfeso, Izmir e Bursa. Saída 15/05/2027 com guia acompanhante desde o Brasil.",
  image: heroImg,
  itinerary: {
    "@type": "ItemList",
    itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })),
  },
  offers: {
    "@type": "Offer",
    price: "3977.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoTurquiaMaio2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Turquia Maio 2027 com Guia desde o Brasil | Create Travel"
        description="14 dias por Istambul, Ancara, Capadócia, Pamukkale, Éfeso, Izmir e Bursa. Saída 15/05/2027 com guia acompanhante desde o Brasil."
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsJsonLd]}
        keywords={`Turquia 2027, viagem em grupo Turquia, Capadócia com guia brasileiro, Pamukkale, Éfeso, Istambul, Turkish Airlines, ${hotelsKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vales da Capadócia ao amanhecer com formações rochosas e balões ao fundo" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Saída confirmada · Lugares limitados</div>
            <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 15 a 28 de maio de 2027</p>
            <h1 className="heading-hero text-white mb-6">Turquia: Istambul, Capadócia, Pamukkale e Éfeso</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">14 dias entre dois continentes: Hagia Sophia e o Bósforo, os vales da Capadócia, os terraços brancos de Pamukkale e as ruínas de Éfeso — com guia desde o Brasil.</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton variant="cta" label="Garantir minha vaga" params={whatsappParams} className="text-lg px-8 py-4" />
              <a href="#investimento" className="btn-outline border-white text-white hover:bg-white hover:text-navy">Ver investimento <ArrowRight size={18} /></a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-muted py-10 border-b border-border">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Datas", value: "15/05 a 28/05/2027" },
            { icon: Users, label: "Perfil", value: "Guia desde o Brasil" },
            { icon: Plane, label: "Voos", value: "Turkish Airlines" },
            { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria" },
          ].map((fact) => (
            <div key={fact.label} className="flex items-start gap-3">
              <fact.icon className="text-gold flex-shrink-0" size={22} />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{fact.label}</p>
                <p className="font-serif font-semibold text-foreground">{fact.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-navy text-white">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p>
            <h2 className="heading-section mb-6">Voos pela Turkish Airlines</h2>
            <p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">São Paulo (GRU) → Istambul (IST)</p>
              <p className="text-white/75 text-sm mt-1">15/05 · TK 216 às 16h35</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Istambul (IST) → São Paulo (GRU)</p>
              <p className="text-white/75 text-sm mt-1">27/05 · TK 215 às 20h25, chegada em 28/05</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">14 dias — dia a dia</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {itinerary.map((item, index) => (
              <motion.div key={item.day} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {item.day}</div>
                <h3 className="font-serif text-xl font-semibold mb-3">{item.title}</h3>
                <ul className="space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{point}</span></li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Hotéis previstos</p>
            <h2 className="heading-section text-foreground">Hospedagens selecionadas</h2>
            <p className="text-muted-foreground mt-4">Todos com café da manhã incluído. Hotéis previstos ou similares da mesma categoria.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {hotels.map((hotel) => (
              <div key={hotel.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card">
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{hotel.city}</p>
                <p className="font-serif text-lg font-semibold text-foreground">
                  <a href={getHotelUrl(hotel.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{hotel.hotel}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h2>
            <ul className="space-y-3">
              {included.map((item) => (
                <li key={item} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h2 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h2>
            <ul className="space-y-3">
              {notIncluded.map((item) => (
                <li key={item} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial max-w-4xl text-center">
          <p className="text-caption text-gold mb-4">Investimento</p>
          <h2 className="heading-section mb-6">A partir de € 3.958 por pessoa</h2>
          <p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 711 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            {[
              { label: "Apto triplo", price: "€ 3.958", extra: "+ IOF € 94" },
              { label: "Apto duplo", price: "€ 3.977", extra: "+ IOF € 95" },
              { label: "Apto individual", price: "€ 4.898", extra: "+ IOF € 124" },
            ].map((price) => (
              <div key={price.label} className="bg-white/10 border border-white/20 rounded-xl p-6">
                <p className="text-xs uppercase tracking-wider text-gold mb-2">{price.label}</p>
                <p className="font-serif text-2xl font-semibold">{price.price}</p>
                <p className="text-white/70 text-xs mt-1">{price.extra}</p>
              </div>
            ))}
          </div>
          <WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" />
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsFaqs]} /></div>
      </section>

      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">Lugares limitados — grupo com guia desde o Brasil</h2>
          <p className="text-muted-foreground mb-8">Fale com a curadoria Create Travel e consulte a disponibilidade desta saída.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={ctaLink} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-lg px-8 py-4">Falar no WhatsApp</a>
            <Link to="/embarque-com-a-create" className="btn-outline">Ver outras saídas <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GrupoTurquiaMaio2027;
