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
import heroImg from "@/assets/grupo-lagos-chilenos-maio-2027.jpg";

const CANONICAL = "/grupos/lagos-chilenos-abril-2027";
const GROUP_NAME = "Grupo Lagos Chilenos · 19 de abril de 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Lagos Chilenos: vulcões, lagos e herança alemã (saída 19/04)",
};

const itinerary = [
  { day: "Dia 1 — 19/04 (seg)", title: "São Paulo → Santiago", points: ["Encontro em Guarulhos com o guia acompanhante","Voo LATAM 753 e traslado ao hotel em Santiago"] },
  { day: "Dia 2 — 20/04 (ter)", title: "Santiago · Vale do Maipo", points: ["Vinícola no coração do Vale do Maipo, com degustação incluída","Tarde livre no centro de Santiago"] },
  { day: "Dia 3 — 21/04 (qua)", title: "Santiago", points: ["City tour pelos cerros e pela Plaza de Armas","Mirantes da cidade e tempo livre (almoço não incluso)"] },
  { day: "Dia 4 — 22/04 (qui)", title: "Santiago → Puerto Montt → Puerto Varas", points: ["Voo LATAM 311 para Puerto Montt","Traslado a Puerto Varas, às margens do Lago Llanquihue"] },
  { day: "Dia 5 — 23/04 (sex)", title: "Puerto Varas", points: ["Passeio pelo centro e Plaza de Armas","Paisagens dos vulcões Osorno e Calbuco"] },
  { day: "Dia 6 — 24/04 (sáb)", title: "Puerto Varas · Peulla", points: ["Navegação pelo Lago Todos los Santos até Peulla","Parque Nacional Vicente Pérez Rosales","Almoço livre (não incluso)"] },
  { day: "Dia 7 — 25/04 (dom)", title: "Puerto Varas · Frutillar", points: ["Cataratas de Petrohué","Frutillar e sua herança alemã, com jardins e Teatro del Lago"] },
  { day: "Dia 8 — 26/04 (seg)", title: "Puerto Montt → Santiago → São Paulo", points: ["Traslado ao aeroporto e voo LATAM 62 às 09h51","Conexão LATAM 714 às 15h55 · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Santiago", hotel: "Almacruz" },
  { city: "Puerto Varas", hotel: "Cabañas del Lago" },
];

const included = [
    "Bilhete aéreo São Paulo / Santiago / Puerto Montt / São Paulo em classe econômica, com 1 mala de 23 kg",
    "Hotéis de primeira categoria com café da manhã",
    "Guia acompanhante desde o Brasil",
    "Traslados com assistência em português ou espanhol",
    "Entradas: vinícola com degustação em Santiago e Parque Nacional Vicente Pérez Rosales",
    "Navegação até Peulla",
    "Serviço de rastreamento de bagagem",
    "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
    "Cartão de assistência médica internacional GTA FLOT 75 de US$ 75.000",
    "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
    "Taxas de embarque, aeroporto e combustível (USD 160)",
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
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 160 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Como faço para reservar?", a: "A parte terrestre pode ser reservada com 25% de entrada e o saldo em até 9 vezes sem juros no cartão de crédito. Fale com a curadoria pelo WhatsApp para confirmar disponibilidade." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva." },
  { q: "Preciso de visto para o Chile?", a: "Não. Brasileiros entram com passaporte ou RG original em bom estado e emitido há menos de dez anos." },
  { q: "Como é o clima em abril no sul do Chile?", a: "É outono: dias frescos, entre 6°C e 17°C, com chuvas possíveis. Leve casaco corta-vento impermeável e calçado fechado." },
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
  description: "8 dias entre Santiago, vinícola no Vale do Maipo, Puerto Varas, navegação até Peulla, Petrohué e Frutillar. Saída 19/04/2027 com guia desde o Brasil.",
  image: heroImg,
  itinerary: {
    "@type": "ItemList",
    itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })),
  },
  offers: {
    "@type": "Offer",
    price: "2698.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoLagosChilenosAbril2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Lagos Chilenos Abril 2027 com Guia desde o Brasil | Create"
        description="8 dias entre Santiago, vinícola no Vale do Maipo, Puerto Varas, navegação até Peulla, Petrohué e Frutillar. Saída 19/04/2027 com guia desde o Brasil."
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsJsonLd]}
        keywords={`Lagos Chilenos 2027, Puerto Varas, Peulla, Petrohué, Frutillar, viagem em grupo Chile, LATAM, ${hotelsKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vulcão nevado refletido em lago azul no sul do Chile" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Saída confirmada · Lugares limitados</div>
            <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 19 a 26 de abril de 2027</p>
            <h1 className="heading-hero text-white mb-6">Lagos Chilenos: vulcões, lagos e herança alemã</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">8 dias no outono chileno: Santiago, vinhos do Vale do Maipo, Puerto Varas, navegação até Peulla, as Cataratas de Petrohué e a Frutillar alemã — com guia desde o Brasil.</p>
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
            { icon: Calendar, label: "Datas", value: "19/04 a 26/04/2027" },
            { icon: Users, label: "Perfil", value: "Guia desde o Brasil" },
            { icon: Plane, label: "Voos", value: "LATAM" },
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
            <h2 className="heading-section mb-6">Voos pela LATAM</h2>
            <p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">São Paulo (GRU) → Santiago (SCL)</p>
              <p className="text-white/75 text-sm mt-1">19/04 · LATAM 753</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Puerto Montt (PMC) → Santiago (SCL) → São Paulo (GRU)</p>
              <p className="text-white/75 text-sm mt-1">26/04 · LATAM 62 às 09h51 e LATAM 714 às 15h55</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">8 dias — dia a dia</h2>
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
          <h2 className="heading-section mb-6">A partir de US$ 2.678 por pessoa</h2>
          <p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 160 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            {[
              { label: "Apto triplo", price: "US$ 2.678", extra: "+ IOF US$ 71" },
              { label: "Apto duplo", price: "US$ 2.698", extra: "+ IOF US$ 72" },
              { label: "Apto individual", price: "US$ 3.340", extra: "+ IOF US$ 93" },
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

export default GrupoLagosChilenosAbril2027;
