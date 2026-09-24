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
import heroImg from "@/assets/grupo-sicilia-malta-2027.jpg";

const CANONICAL = "/grupos/sicilia-malta-maio-2027";
const GROUP_NAME = "Grupo Sicília & Malta · 14 de maio de 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Sicília & Malta: fortalezas, barroco e o Etna (saída 14/05)",
};

const itinerary = [
  { day: "Dia 1 — 14/05 (sex)", title: "São Paulo → Roma", points: ["Apresentação em Guarulhos e embarque com o guia acompanhante","Pernoite a bordo"] },
  { day: "Dia 2 — 15/05 (sáb)", title: "Roma → Malta", points: ["Chegada a Roma e conexão AZ 884 às 17h","Recepção em Malta e traslado ao hotel"] },
  { day: "Dia 3 — 16/05 (dom)", title: "Malta · Valletta e Três Cidades", points: ["Valletta: Jardins Upper Barrakka e Co-catedral de São João","Cospicua, Vittoriosa e Senglea, com passeio em barco tradicional","Almoço incluído (sem bebidas)"] },
  { day: "Dia 4 — 17/05 (seg)", title: "Malta · Ilha de Gozo", points: ["Ferry a Gozo e visita a Victoria com sua Cidadela","Baía de Xlendi e formações de Dwejra","Tarde livre"] },
  { day: "Dia 5 — 18/05 (ter)", title: "Malta → Ragusa (Sicília)", points: ["Ferry até Pozzallo, no sul da Sicília","Traslado a Ragusa e check-in"] },
  { day: "Dia 6 — 19/05 (qua)", title: "Ragusa · Modica · Scicli", points: ["Ragusa Ibla e sua arquitetura barroca","Modica, do chocolate artesanal, e Scicli","Almoço livre (não incluso)"] },
  { day: "Dia 7 — 20/05 (qui)", title: "Ragusa · Noto · Siracusa → Taormina", points: ["Noto, capital do barroco siciliano","Parque Arqueológico de Siracusa e ilha de Ortigia","Hospedagem em Letojanni"] },
  { day: "Dia 8 — 21/05 (sex)", title: "Taormina · Monte Etna", points: ["Crateras Silvestri, a cerca de 1.900 metros","Taormina e o Teatro Greco-Romano"] },
  { day: "Dia 9 — 22/05 (sáb)", title: "Taormina · Savoca · Cefalù → Palermo", points: ["Forza d'Agrò e Savoca, cenários de O Poderoso Chefão","Cefalù e sua catedral normanda","Seguimos para Palermo"] },
  { day: "Dia 10 — 23/05 (dom)", title: "Palermo · Monreale", points: ["Palácio dos Normandos e Capela Palatina","Quattro Canti e Catedral de Palermo","Monreale: catedral e claustro dos beneditinos"] },
  { day: "Dia 11 — 24/05 (seg)", title: "Palermo · Agrigento", points: ["Vale dos Templos: Juno, Concórdia, Hércules e Castor e Pólux","Almoço e tarde livres (não inclusos)"] },
  { day: "Dia 12 — 25/05 (ter)", title: "Palermo → Roma → São Paulo", points: ["Traslado ao aeroporto e voo AZ 1792 às 15h10","Conexão AZ 674 · pernoite a bordo"] },
  { day: "Dia 13 — 26/05 (qua)", title: "São Paulo", points: ["Chegada a Guarulhos · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Malta", hotel: "Waterfront" },
  { city: "Ragusa", hotel: "Mediterraneo Palace" },
  { city: "Letojanni", hotel: "Caparena Taormina" },
  { city: "Palermo", hotel: "Mercure Palermo" },
];

const included = [
    "Bilhete aéreo São Paulo / Malta e Palermo / São Paulo em classe econômica, com 1 mala de 23 kg",
    "Hotéis de primeira categoria com café da manhã",
    "Guia acompanhante desde o Brasil",
    "Traslados com assistência em português ou espanhol",
    "Bilhetes de ferry Malta–Pozzallo em classe econômica",
    "Entradas: Co-catedral de São João, passeio de barco tradicional, ferry a Gozo, Parque Arqueológico de Siracusa, Crateras Silvestri, Teatro Grego de Taormina, Catedral e Claustro de Monreale e Vale dos Templos",
    "1 almoço em Malta (sem bebidas)",
    "Serviço de rastreamento de bagagem",
    "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
    "Cartão de assistência médica internacional de US$ 75.000",
    "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
    "Taxas de embarque, aeroporto e combustível (EUR 190)",
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
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de EUR 190 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Como faço para reservar?", a: "A parte terrestre pode ser reservada com 25% de entrada e o saldo em até 9 vezes sem juros no cartão de crédito. Fale com a curadoria pelo WhatsApp para confirmar disponibilidade." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva." },
  { q: "A travessia entre Malta e a Sicília é de avião?", a: "Não. É feita de ferry entre Malta e Pozzallo, com bilhete já incluído em classe econômica." },
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
  description: "13 dias por Valletta, Gozo, Ragusa, Modica, Noto, Siracusa, Etna, Taormina, Palermo, Monreale e Agrigento. Saída 14/05/2027 com guia desde o Brasil.",
  image: heroImg,
  itinerary: {
    "@type": "ItemList",
    itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })),
  },
  offers: {
    "@type": "Offer",
    price: "5673.00",
    priceCurrency: "EUR",
    availability: "https://schema.org/LimitedAvailability",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoSiciliaMaltaMaio2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Sicília e Malta Maio 2027 com Guia desde o Brasil | Create"
        description="13 dias por Valletta, Gozo, Ragusa, Modica, Noto, Siracusa, Etna, Taormina, Palermo, Monreale e Agrigento. Saída 14/05/2027 com guia desde o Brasil."
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsJsonLd]}
        keywords={`Sicília e Malta maio 2027, viagem em grupo Sicília, Malta com guia brasileiro, Vale dos Templos, Monte Etna, Taormina, ITA Airways, ${hotelsKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Porto histórico de Malta com fortificações de pedra ao pôr do sol" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Saída confirmada · Lugares limitados</div>
            <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 14 a 26 de maio de 2027</p>
            <h1 className="heading-hero text-white mb-6">Sicília & Malta: fortalezas, barroco e o Etna</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">13 dias entre as fortalezas de Malta, o barroco siciliano da UNESCO, o Monte Etna, Taormina e o Vale dos Templos — com guia acompanhante desde o Brasil.</p>
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
            { icon: Calendar, label: "Datas", value: "14/05 a 26/05/2027" },
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
              <p className="font-serif text-lg">São Paulo (GRU) → Roma (FCO) → Malta (MLA)</p>
              <p className="text-white/75 text-sm mt-1">14/05 · voo ITA para Roma — 15/05 · AZ 884 às 17h, chegada a Malta</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Palermo (PMO) → Roma (FCO) → São Paulo (GRU)</p>
              <p className="text-white/75 text-sm mt-1">25/05 · AZ 1792 às 15h10 e conexão AZ 674, chegada em 26/05</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">13 dias — dia a dia</h2>
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
          <h2 className="heading-section mb-6">A partir de € 5.657 por pessoa</h2>
          <p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de EUR 190 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            {[
              { label: "Apto triplo", price: "€ 5.657", extra: "+ IOF € 176" },
              { label: "Apto duplo", price: "€ 5.673", extra: "+ IOF € 177" },
              { label: "Apto individual", price: "€ 6.897", extra: "+ IOF € 216" },
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

export default GrupoSiciliaMaltaMaio2027;
