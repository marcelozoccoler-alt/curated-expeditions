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
import heroImg from "@/assets/grupo-china-primavera-2027.jpg";

const CANONICAL = "/grupos/china-coreia-junho-2027";
const GROUP_NAME = "Grupo China & Coreia do Sul · Junho 2027 — Create Travel";
const whatsappParams = {
  type: "Roteiro" as const,
  name: "China & Coreia do Sul: dois mundos numa só viagem (saída 02/06)",
};

const itinerary = [
  { day: "Dia 1 — 02/06 (qua)", title: "São Paulo", points: ["Apresentação em Guarulhos para encontro com o guia e procedimentos de embarque"] },
  { day: "Dia 2 — 03/06 (qui)", title: "São Paulo → Adis Abeba", points: ["Voo Ethiopian 507 às 01h45, chegada às 19h45","Conexão para Pequim"] },
  { day: "Dia 3 — 04/06 (sex)", title: "Adis Abeba → Pequim", points: ["Voo Ethiopian 604 às 01h15, chegada a Pequim às 17h20","Traslado ao hotel"] },
  { day: "Dia 4 — 05/06 (sáb)", title: "Pequim", points: ["Cidade Proibida e Praça Tian An Men","Almoço incluído","Templo do Céu e o Salão da Oração pelas Boas Colheitas"] },
  { day: "Dia 5 — 06/06 (dom)", title: "Pequim · Grande Muralha", points: ["Dia na Grande Muralha da China, com almoço incluído","Paradas no Ninho do Pássaro e no Cubo d'Água","Jantar de boas-vindas com Pato Laqueado de Pequim"] },
  { day: "Dia 6 — 07/06 (seg)", title: "Pequim", points: ["Hutongs e a vida cotidiana da capital","Tempo livre (refeições não inclusas)"] },
  { day: "Dia 7 — 08/06 (ter)", title: "Pequim → Xi'an", points: ["Manhã livre; apartamentos até o meio-dia","Trem-bala até Xi'an, a única capital murada da China"] },
  { day: "Dia 8 — 09/06 (qua)", title: "Xi'an", points: ["Museu dos Guerreiros e Cavalos de Terracota","Almoço incluído","Grande Pagoda do Ganso Selvagem e Bairro Muçulmano"] },
  { day: "Dia 9 — 10/06 (qui)", title: "Xi'an → Xangai", points: ["Apartamentos até o meio-dia e voo para Xangai","Traslado ao hotel"] },
  { day: "Dia 10 — 11/06 (sex)", title: "Xangai", points: ["Jardim Yuyuan, de 1557, e Templo do Buda de Jade","Calçadão da Cidade e Bund, com almoço incluído"] },
  { day: "Dia 11 — 12/06 (sáb)", title: "Xangai → Seul", points: ["Tempo livre em Xangai","Voo para Seul com companhia local e traslado ao hotel"] },
  { day: "Dia 12 — 13/06 (dom)", title: "Seul", points: ["Palácio Gyeongbokgung e troca da guarda","Bukchon Hanok Village e Insadong","Almoço incluído"] },
  { day: "Dia 13 — 14/06 (seg)", title: "Seul", points: ["Mercados tradicionais e Myeongdong","Tempo livre para compras (refeições não inclusas)"] },
  { day: "Dia 14 — 15/06 (ter)", title: "Seul · DMZ", points: ["Zona Desmilitarizada: Parque Imjingak, Terceiro Túnel de Infiltração e Observatório Dora","Almoço incluído","Visita sujeita a filas ou alterações por questões de segurança"] },
  { day: "Dia 15 — 16/06 (qua)", title: "Seul", points: ["Lotte World Tower (Seoul Sky) e Lago Seokchon","Starfield COEX Mall com a Biblioteca Starfield e distrito de Gangnam","Almoço em rota incluído"] },
  { day: "Dia 16 — 17/06 (qui)", title: "Seul → São Paulo", points: ["Traslado ao aeroporto e embarque de retorno","Pernoite a bordo"] },
  { day: "Dia 17 — 18/06 (sex)", title: "São Paulo", points: ["Chegada a Guarulhos · fim dos nossos serviços"] },
];

const hotels = [
  { city: "Pequim", hotel: "New Otani" },
  { city: "Xi'an", hotel: "Sheraton North City" },
  { city: "Xangai", hotel: "Jin Jiang Hotel" },
  { city: "Seul", hotel: "Sotetsu Splaisir Myeongdong" },
];

const included = [
    "Bilhete aéreo São Paulo / Pequim e Seul / São Paulo em classe econômica e trecho interno Xangai / Seul com companhia local (franquia de 20 kg)",
    "Hotéis de primeira categoria com café da manhã",
    "Guia acompanhante desde São Paulo e guias locais na China e em Seul",
    "Traslados com assistência",
    "Trem-bala Pequim–Xi'an em classe econômica",
    "Visitas e entradas conforme o roteiro",
    "1 jantar de pato laqueado, 4 almoços na China e 3 almoços em Seul (sem bebidas)",
    "Serviço de rastreamento de bagagem",
    "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
    "Cartão de assistência médica internacional de US$ 75.000",
    "Seguro cancelamento de US$ 5.000 para viajantes até 85 anos",
];

const notIncluded = [
    "Taxas de embarque, aeroporto e combustível (USD 790)",
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
  { q: "Quais valores não estão no preço divulgado?", a: "Os valores por pessoa não incluem as taxas de aeroporto e combustível de USD 790 nem o IOF indicado em cada categoria de apartamento." },
  { q: "Como faço para reservar?", a: "A parte terrestre pode ser reservada com 25% de entrada e o saldo em até 9 vezes sem juros no cartão de crédito. Fale com a curadoria pelo WhatsApp para confirmar disponibilidade." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Há valores para apartamento individual, duplo e triplo, sujeitos a disponibilidade no momento da reserva." },
  { q: "Preciso de visto para China e Coreia do Sul?", a: "Brasileiros não precisam de visto para a China em viagens de turismo. Para a Coreia do Sul é necessária a autorização eletrônica K-ETA, e orientamos cada viajante no processo." },
  { q: "Há exigência de vacina?", a: "Sim, é exigido o comprovante de vacinação contra febre amarela. O passaporte deve ter validade mínima de seis meses a partir da data de retorno." },
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
  description: "17 dias entre Pequim, Grande Muralha, Xi'an e os Guerreiros de Terracota, Xangai e Seul com DMZ e Gangnam. Saída 02/06/2027 com guia desde o Brasil.",
  image: heroImg,
  itinerary: {
    "@type": "ItemList",
    itemListElement: itinerary.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: `${item.day} — ${item.title}` })),
  },
  offers: {
    "@type": "Offer",
    price: "5998.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoChinaCoreia2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="China e Coreia do Sul 2027 com Guia desde o Brasil | Create"
        description="17 dias entre Pequim, Grande Muralha, Xi'an e os Guerreiros de Terracota, Xangai e Seul com DMZ e Gangnam. Saída 02/06/2027 com guia desde o Brasil."
        canonicalPath={CANONICAL}
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsJsonLd]}
        keywords={`China e Coreia do Sul 2027, Grande Muralha, Guerreiros de Terracota, Xangai, Seul, DMZ, viagem em grupo Ásia, Ethiopian Airlines, ${hotelsKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Grande Muralha da China serpenteando por montanhas verdes" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6"><Sparkles size={14} /> Saída confirmada · Lugares limitados</div>
            <p className="text-caption text-gold mb-4">Grupo com guia desde o Brasil · 02 a 18 de junho de 2027</p>
            <h1 className="heading-hero text-white mb-6">China & Coreia do Sul: dois mundos numa só viagem</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">17 dias da Cidade Proibida e da Grande Muralha aos Guerreiros de Terracota, ao Bund de Xangai e à Seul dos palácios e da DMZ — com guia acompanhante desde o Brasil.</p>
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
            { icon: Calendar, label: "Datas", value: "02/06 a 18/06/2027" },
            { icon: Users, label: "Perfil", value: "Guia desde o Brasil" },
            { icon: Plane, label: "Voos", value: "Ethiopian Airlines" },
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
            <h2 className="heading-section mb-6">Voos pela Ethiopian Airlines</h2>
            <p className="text-white/85 leading-relaxed">Classe econômica, com uma mala despachada por pessoa. Horários previstos, sujeitos a ajustes da companhia aérea.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">São Paulo (GRU) → Adis Abeba (ADD) → Pequim (PEK)</p>
              <p className="text-white/75 text-sm mt-1">03/06 · Ethiopian 507 às 01h45 — 04/06 · Ethiopian 604 às 01h15, chegada às 17h20</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Trecho interno</p>
              <p className="font-serif text-lg">Xangai (PVG) → Seul (ICN)</p>
              <p className="text-white/75 text-sm mt-1">Voo com companhia local, franquia de bagagem de 20 kg</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">17 dias — dia a dia</h2>
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
          <h2 className="heading-section mb-6">A partir de US$ 5.978 por pessoa</h2>
          <p className="text-white/85 mb-8">Valores por pessoa, acrescidos de IOF e de USD 790 em taxas de aeroporto e combustível. Sujeitos a disponibilidade e confirmação aérea.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            {[
              { label: "Apto triplo", price: "US$ 5.978", extra: "+ IOF US$ 175" },
              { label: "Apto duplo", price: "US$ 5.998", extra: "+ IOF US$ 176" },
              { label: "Apto individual", price: "US$ 7.497", extra: "+ IOF US$ 221" },
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

export default GrupoChinaCoreia2027;
