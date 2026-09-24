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
import heroImg from "@/assets/grupo-mendoza-reveillon-29-dezembro.jpg";

const CANONICAL = "/grupos/mendoza-carnaval-2027";
const GROUP_NAME = "Grupo Mendoza · Carnaval 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "Mendoza no Carnaval: vinhedos, Andes e vindima (saída 04)",
};

const itinerary = [
  { day: "Dia 1 — 04/02 (qui)", title: "São Paulo → Mendoza", points: ["Apresentação em Guarulhos e voo GOL 7486 às 08h55","Recepção e traslado ao hotel; apartamentos a partir das 15h","Restante do dia livre"] },
  { day: "Dia 2 — 05/02 (sex)", title: "Mendoza · Bodega Santa Julia", points: ["Visita à maior produtora de vinhos orgânicos da Argentina","Aula de culinária de empanadas argentinas","Almoço incluído, harmonizado com vinhos da casa"] },
  { day: "Dia 3 — 06/02 (sáb)", title: "Mendoza · city tour", points: ["Manhã livre para descanso","Cidade antiga, Praça da Independência e rua Emilio Civit","Parque General San Martín, Cerro de la Gloria e o anfiteatro da Vindima"] },
  { day: "Dia 4 — 07/02 (dom)", title: "Alta Montanha e Aconcágua", points: ["Rota Nacional 7 até a Cordilheira dos Andes","Represa Potrerillos, Uspallata, Ponte do Inca e mirante do Aconcágua","Almoço crioulo incluído no restaurante Valle Andino"] },
  { day: "Dia 5 — 08/02 (seg)", title: "Vale do Uco", points: ["Três vinícolas de altitude com tours e degustações","Almoço de três passos incluído, harmonizado com vinhos selecionados"] },
  { day: "Dia 6 — 09/02 (ter)", title: "Mendoza → São Paulo", points: ["Apartamentos até às 12h e traslado ao aeroporto","Voo GOL 7487 às 13h50 · chegada às 17h20 e fim dos nossos serviços"] },
];

const hotels = [
  { city: "Mendoza", hotel: "Amérian Mendoza" },
];

const included = [
    "Bilhete aéreo São Paulo / Mendoza / São Paulo em classe econômica, com 1 mala de 23 kg",
    "Hotéis de primeira categoria com café da manhã",
    "Guia acompanhante desde o Brasil",
    "Traslados com assistência em português ou espanhol",
    "Visitas com guia local: Bodega Santa Julia, city tour, Alta Montanha e Vale do Uco com três vinícolas",
    "Entradas conforme a programação",
    "3 almoços (sem bebidas)",
    "Serviço de rastreamento de bagagem",
    "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
    "Cartão de assistência médica internacional GTA FLOT 75 de US$ 75.000",
    "Seguro cancelamento de US$ 3.000 para viajantes até 85 anos",
];

const notIncluded = [
    "Taxas de embarque, aeroporto e combustível (USD 168)",
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
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 168 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Como faço para reservar?", a: "A parte terrestre pode ser reservada com 25% de entrada e o saldo em até 9 vezes sem juros no cartão de crédito. Fale com a curadoria pelo WhatsApp para confirmar disponibilidade." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva." },
  { q: "Preciso de passaporte para a Argentina?", a: "Não é obrigatório: basta passaporte ou RG original em bom estado e emitido há menos de dez anos. Visto não é necessário." },
  { q: "O que é a vindima?", a: "É a colheita da uva, que começa em fevereiro em Mendoza. É quando os vinhedos ganham mais movimento e a região se prepara para sua maior festa." },
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
  description: "6 dias entre vinhedos, aula de empanadas na Santa Julia, Alta Montanha com Aconcágua e três vinícolas no Vale do Uco. Saída 04/02/2027.",
  image: heroImg,
  itinerary: {
    "@type": "ItemList",
    itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })),
  },
  offers: {
    "@type": "Offer",
    price: "2798.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoMendozaCarnaval2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Mendoza Carnaval 2027 com Guia desde o Brasil | Create"
        description="6 dias entre vinhedos, aula de empanadas na Santa Julia, Alta Montanha com Aconcágua e três vinícolas no Vale do Uco. Saída 04/02/2027."
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsJsonLd]}
        keywords={`Mendoza Carnaval 2027, vindima Mendoza, Vale do Uco, Aconcágua, viagem em grupo Argentina, GOL, ${hotelsKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Vinhedos de Mendoza com a Cordilheira dos Andes ao fundo" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Saída confirmada · Lugares limitados</div>
            <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 04 a 09 de fevereiro de 2027</p>
            <h1 className="heading-hero text-white mb-6">Mendoza no Carnaval: vinhedos, Andes e vindima</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">6 dias no início da vindima: vinícola orgânica Santa Julia com aula de empanadas, Alta Montanha até o Aconcágua e três vinícolas no Vale do Uco — com guia desde o Brasil.</p>
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
            { icon: Calendar, label: "Datas", value: "04 a 09/02/2027" },
            { icon: Users, label: "Perfil", value: "Guia desde o Brasil" },
            { icon: Plane, label: "Voos", value: "GOL" },
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
            <h2 className="heading-section mb-6">Voos pela GOL</h2>
            <p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">São Paulo (GRU) → Mendoza (MDZ)</p>
              <p className="text-white/75 text-sm mt-1">04/02 · GOL 7486 às 08h55, chegada às 12h55</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Mendoza (MDZ) → São Paulo (GRU)</p>
              <p className="text-white/75 text-sm mt-1">09/02 · GOL 7487 às 13h50, chegada às 17h20</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">6 dias — dia a dia</h2>
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
          <h2 className="heading-section mb-6">A partir de US$ 2.778 por pessoa</h2>
          <p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 168 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            {[
              { label: "Apto triplo", price: "US$ 2.778", extra: "+ IOF US$ 67" },
              { label: "Apto duplo", price: "US$ 2.798", extra: "+ IOF US$ 68" },
              { label: "Apto individual", price: "US$ 3.276", extra: "+ IOF US$ 84" },
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

export default GrupoMendozaCarnaval2027;
