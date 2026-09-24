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

const CANONICAL = "/grupos/sul-italia-19-abril-2027";
const GROUP_NAME = "Grupo Sul da Itália · 19 de abril de 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Sul da Itália: Costa Amalfitana, Matera e a Puglia (saída 19/04)",
};

const itinerary = [
  { day: "Dia 1 — 19/04 (seg)", title: "São Paulo → Roma", points: ["Apresentação em Guarulhos com o guia acompanhante","Voo ITA AZ 0679 às 18h50 · pernoite a bordo"] },
  { day: "Dia 2 — 20/04 (ter)", title: "Roma → Sorrento", points: ["Chegada a Roma e conexão para Nápoles","Traslado a Sorrento e check-in"] },
  { day: "Dia 3 — 21/04 (qua)", title: "Positano e Amalfi", points: ["Dia na Costa Amalfitana: Positano e Amalfi","Catedral de Santo André e vilarejos suspensos sobre o mar","Almoço livre (não incluso)"] },
  { day: "Dia 4 — 22/04 (qui)", title: "Sorrento · Pompeia", points: ["Sítio arqueológico de Pompeia com guia local","Centro histórico de Sorrento e mirantes sobre o golfo"] },
  { day: "Dia 5 — 23/04 (sex)", title: "Sorrento → Matera", points: ["Travessia pelo interior da Basilicata","Chegada a Matera e primeiro contato com os Sassi"] },
  { day: "Dia 6 — 24/04 (sáb)", title: "Matera → Bari", points: ["Visita guiada aos Sassi de Matera, Patrimônio da UNESCO","Casa-gruta e igrejas rupestres","Seguimos para Bari"] },
  { day: "Dia 7 — 25/04 (dom)", title: "Bari · Polignano a Mare", points: ["Cidade velha de Bari e Basílica de São Nicolau","Polignano a Mare, com caminhada à beira-mar","Almoço livre (não incluso)"] },
  { day: "Dia 8 — 26/04 (seg)", title: "Bari · Alberobello → Lecce", points: ["Alberobello e seus trulli de pedra","Chegada a Lecce, a “Florença do Sul”"] },
  { day: "Dia 9 — 27/04 (ter)", title: "Lecce · Otranto", points: ["Barroco leccese: Basílica de Santa Cruz e anfiteatro romano","Otranto e o castelo aragonês","Almoço livre (não incluso)"] },
  { day: "Dia 10 — 28/04 (qua)", title: "Lecce · Gallipoli e Santa Maria di Leuca", points: ["Gallipoli, famosa pelos frutos do mar (almoço não incluso)","Santa Maria di Leuca, onde Adriático e Jônico se encontram","Tempo livre nas praias da região"] },
  { day: "Dia 11 — 29/04 (qui)", title: "Lecce → Brindisi → Roma → São Paulo", points: ["Traslado ao aeroporto de Brindisi","Voo AZ 1622 às 15h15 e conexão AZ 0674 · pernoite a bordo"] },
  { day: "Dia 12 — 30/04 (sex)", title: "São Paulo", points: ["Chegada a Guarulhos · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Sorrento", hotel: "Michelangelo" },
  { city: "Matera", hotel: "Unahotels MH Matera" },
  { city: "Bari", hotel: "Vittoria Park" },
  { city: "Lecce", hotel: "Hilton Garden Inn" },
];

const included = [
    "Bilhete aéreo São Paulo / Nápoles e Brindisi / São Paulo em classe econômica, com 1 mala de 23 kg",
    "Hotéis de primeira categoria com café da manhã",
    "Guia acompanhante desde São Paulo",
    "Traslados com assistência em português ou espanhol",
    "Visitas com guia local conforme o roteiro, incluindo Pompeia e os Sassi de Matera",
    "Serviço de rastreamento de bagagem",
    "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
    "Cartão de assistência médica internacional de US$ 75.000",
    "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
    "Taxas de embarque, aeroporto e combustível (EUR 187)",
    "IOF",
    "Bebidas nas refeições",
    "Gorjetas a guias, motoristas e garçons",
    "Refeições indicadas como não inclusas no roteiro",
    "Despesas pessoais, frigobar, telefonemas, lavanderia e carregadores de malas",
    "Documentação de viagem, vistos e autorizações",
    "Taxas e impostos não mencionados como incluídos",
];

const faqs = [
  { q: "Como funciona o acompanhamento?", a: "Um guia acompanhante segue com o grupo desde o embarque em Guarulhos até o retorno ao Brasil. No destino, as visitas são conduzidas por guias locais." },
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 187 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Como faço para reservar?", a: "A parte terrestre pode ser reservada com 25% de entrada e o saldo em até 9 vezes sem juros no cartão de crédito. Fale com a curadoria pelo WhatsApp para confirmar disponibilidade." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva." },
  { q: "Como é o clima em abril no sul da Itália?", a: "É primavera: em geral entre 14°C e 22°C, com dias longos e vegetação florida. Leve calçado confortável, agasalho leve e capa de chuva compacta." },
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
  description: "12 dias entre Sorrento, Positano, Amalfi, Pompeia, Matera, Bari, Alberobello, Lecce e Otranto. Saída 19/04/2027 com guia desde o Brasil.",
  image: heroImg,
  itinerary: {
    "@type": "ItemList",
    itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })),
  },
  offers: {
    "@type": "Offer",
    price: "4757.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoSulItaliaAbril2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Sul da Itália Abril 2027 com Guia desde o Brasil | Create"
        description="12 dias entre Sorrento, Positano, Amalfi, Pompeia, Matera, Bari, Alberobello, Lecce e Otranto. Saída 19/04/2027 com guia desde o Brasil."
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsJsonLd]}
        keywords={`Sul da Itália 2027, viagem em grupo Itália, Costa Amalfitana com guia brasileiro, Matera, Alberobello, Lecce, ITA Airways, ${hotelsKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vila colorida da Costa Amalfitana sobre o mar Tirreno ao amanhecer" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Saída confirmada · Lugares limitados</div>
            <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 19 de abril a 30 de abril de 2027</p>
            <h1 className="heading-hero text-white mb-6">Sul da Itália: Costa Amalfitana, Matera e a Puglia</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">12 dias pela primavera do Mezzogiorno: penhascos da Costa Amalfitana, Pompeia, os Sassi de Matera, os trulli da Puglia e o barroco de Lecce — com guia acompanhante desde o Brasil.</p>
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
            { icon: Calendar, label: "Datas", value: "19/04 a 30/04/2027" },
            { icon: Users, label: "Perfil", value: "Guia desde o Brasil" },
            { icon: Plane, label: "Voos", value: "ITA Airways" },
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
            <h2 className="heading-section mb-6">Voos pela ITA Airways</h2>
            <p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">São Paulo (GRU) → Roma (FCO) → Nápoles (NAP)</p>
              <p className="text-white/75 text-sm mt-1">19/04 · AZ 0679 às 18h50 — conexão em 20/04 para Nápoles</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Brindisi (BDS) → Roma (FCO) → São Paulo (GRU)</p>
              <p className="text-white/75 text-sm mt-1">29/04 · AZ 1622 às 15h15 — conexão AZ 0674, chegada em 30/04</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">12 dias — dia a dia</h2>
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
          <h2 className="heading-section mb-6">A partir de € 4.730 por pessoa</h2>
          <p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 187 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            {[
              { label: "Apto triplo", price: "€ 4.730", extra: "+ IOF € 112" },
              { label: "Apto duplo", price: "€ 4.757", extra: "+ IOF € 113" },
              { label: "Apto individual", price: "€ 5.328", extra: "+ IOF € 131" },
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

export default GrupoSulItaliaAbril2027;
