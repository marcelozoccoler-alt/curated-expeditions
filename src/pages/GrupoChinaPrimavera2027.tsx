import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Users, Plane, Hotel, MapPin, Check, X, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-china-primavera-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo China 2027 — Primavera (saída 13/05/2027)",
};

const benefits = [
  { title: "China na primavera", desc: "Saída 13 a 27 de maio de 2027: temperaturas amenas, jardins floridos e a melhor época para percorrer o país." },
  { title: "Beijing imperial", desc: "Praça da Paz Celestial, Cidade Proibida, Templo do Céu, Palácio de Verão e a lendária Grande Muralha da China." },
  { title: "Xi'an e a Rota da Seda", desc: "Exército de Guerreiros de Terracota (Patrimônio UNESCO), Grande Pagode do Ganso Selvagem e o vibrante Bairro Muçulmano." },
  { title: "Zhangjiajie, cenário de Avatar", desc: "Elevador Bailong, Montanha Tianzi, Montanha Tianmen com Caminho de Vidro e a Ponte de Vidro mais longa do mundo no Grand Canyon." },
  { title: "Shanghai futurista", desc: "Torre Jinmao com vista panorâmica, Calçadão do Bund, Templo de Buda de Jade e o encantador Bairro Antigo." },
  { title: "Guia desde o Brasil + trens-bala", desc: "Coordenador Create Travel embarcando em Guarulhos, guias locais em espanhol, voos Ethiopian e trem-bala Beijing → Xi'an — símbolo da modernidade chinesa." },
];

const itinerary = [
  { day: "Dia 1 — 13/05 (qui)", title: "São Paulo", points: ["Apresentação em Guarulhos", "Encontro com o coordenador"] },
  { day: "Dia 2 — 14/05 (sex)", title: "São Paulo → Addis Abeba", points: ["Ethiopian 507 às 01h45", "Chegada Addis Abeba 19h45"] },
  { day: "Dia 3 — 15/05 (sáb)", title: "Addis Abeba → Beijing", points: ["Ethiopian 604 às 01h15", "Chegada Beijing 17h20", "Hospedagem no New Otani"] },
  { day: "Dia 4 — 16/05 (dom)", title: "Beijing · Cidade Proibida", points: ["Palácio Imperial (Cidade Proibida)", "Praça Tian An Men", "Palácio de Verão · almoço incluído"] },
  { day: "Dia 5 — 17/05 (seg)", title: "Beijing · Grande Muralha", points: ["Visita à Grande Muralha da China", "Ninho de Pássaro e Cubo Aquático (fotos)", "Jantar de boas-vindas com Pato Laqueado"] },
  { day: "Dia 6 — 18/05 (ter)", title: "Beijing · Templo do Céu", points: ["Templo do Céu", "Tarde livre para explorar hutongs ou compras"] },
  { day: "Dia 7 — 19/05 (qua)", title: "Beijing → Xi'an (trem-bala)", points: ["Manhã livre", "Trem-bala para Xi'an", "Traslado ao Sheraton North City"] },
  { day: "Dia 8 — 20/05 (qui)", title: "Xi'an · Guerreiros de Terracota", points: ["Museu do Exército de Terracota (UNESCO)", "Grande Pagode do Ganso Selvagem", "Bairro Muçulmano · almoço incluído"] },
  { day: "Dia 9 — 21/05 (sex)", title: "Xi'an → Zhangjiajie", points: ["Voo doméstico a Zhangjiajie", "Traslado ao Pullman Hotel", "Descanso e preparação"] },
  { day: "Dia 10 — 22/05 (sáb)", title: "Zhangjiajie · Avatar", points: ["Elevador Bailong (326m)", "Reserva Yuanjiajie e Montanha Hallelujah", "Montanha Tianzi · almoço fast food"] },
  { day: "Dia 11 — 23/05 (dom)", title: "Zhangjiajie → Shanghai", points: ["Montanha Tianmen com Caminho de Vidro", "Ponte de Vidro do Grand Canyon", "Voo a Shanghai · hospedagem no JinJiang"] },
  { day: "Dia 12 — 24/05 (seg)", title: "Shanghai · Bund & Jinmao", points: ["Subida à Torre Jinmao (420m)", "Passeio pelo Bund (Calçadão)", "Templo de Buda de Jade e Bairro Antigo · almoço incluído"] },
  { day: "Dia 13 — 25/05 (ter)", title: "Shanghai · dia livre", points: ["Manhã e tarde livres", "Compras, gastronomia, French Concession"] },
  { day: "Dia 14 — 26/05 (qua)", title: "Shanghai · check-out", points: ["Apartamentos até 18h", "Traslado ao aeroporto internacional"] },
  { day: "Dia 15 — 27/05 (qui)", title: "Shanghai → Addis Abeba → SP", points: ["Ethiopian 685 às 00h20", "Conexão Ethiopian 506 às 09h50", "Chegada em Guarulhos às 16h20"] },
];

const included = [
  "Bilhete aéreo internacional em classe econômica São Paulo/Beijing // Shanghai/São Paulo pela Ethiopian Airlines",
  "Trechos internos Xi'an/Zhangjiajie/Shanghai com operador local (franquia 20 kg)",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo e guias locais em espanhol (inglês em Zhangjiajie)",
  "Traslados com assistência em espanhol/inglês",
  "Visitas privadas conforme o roteiro",
  "Trem-bala Beijing → Xi'an em classe econômica (franquia 20 kg)",
  "5 almoços + 1 almoço fast food + 1 jantar Pato Laqueado (sem bebidas)",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium em Guarulhos",
  "Cartão de assistência com cobertura médica de US$ 75.000",
  "Seguro cancelamento para passageiros até 85 anos: US$ 5.000",
];

const notIncluded = [
  "Taxas de embarque e IOF",
  "Taxas de aeroporto e combustível (USD 790)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas, garçons e maleteiros",
  "Custos de documentação de viagem, vistos e autorizações",
  "Despesas pessoais (frigobar, telefonemas, lavanderia)",
];

const faqs = [
  { q: "Qual a condição de pagamento?", a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea." },
  { q: "Preciso de visto para a China?", a: "Não. Brasileiros não precisam de visto para a China (isenção em vigor). Passaporte com validade mínima de 6 meses a partir do retorno e vacina de febre amarela obrigatória." },
  { q: "Como é o clima em maio na China?", a: "A primavera é uma das melhores épocas: temperaturas agradáveis (18–26 °C em Beijing e Xi'an, 22–28 °C em Shanghai e Zhangjiajie), jardins floridos e boa visibilidade. Pode ocorrer chuva leve em Zhangjiajie, o que valoriza a névoa cinematográfica das montanhas." },
  { q: "Como funcionam os trens-bala e voos internos?", a: "O trem-bala Beijing → Xi'an é uma das experiências mais marcantes do roteiro — silencioso, pontual e a mais de 300 km/h. Os voos Xi'an → Zhangjiajie e Zhangjiajie → Shanghai são operados por cias locais, com franquia de 20 kg." },
  { q: "As caminhadas em Zhangjiajie são exigentes?", a: "Há passarelas suspensas, elevadores panorâmicos e trilhas moderadas. Não há trechos técnicos, mas exige disposição para caminhar. Em alta temporada pode haver filas para acessar atrações — o roteiro considera essa realidade." },
];

const hotelsForSeo = [
  { city: "Beijing", hotel: "New Otani" },
  { city: "Xi'an", hotel: "Sheraton North City" },
  { city: "Zhangjiajie", hotel: "Pullman Hotel" },
  { city: "Shanghai", hotel: "JinJiang" },
];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo China 2027 — Primavera — Create Travel", "/grupos/china-primavera-2027");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo China 2027 — Primavera — Create Travel", "/grupos/china-primavera-2027");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo China 2027 — Primavera — Create Travel",
  description: "15 dias pela China na primavera 2027: Beijing, Grande Muralha, Xi'an com Guerreiros de Terracota, Zhangjiajie (cenário de Avatar) e Shanghai. Saída 13/05/2027 pela Ethiopian com guia do Brasil.",
  image: heroImg,
  touristType: "Cultura, história, natureza, cidades",
  itinerary: itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.day} — ${d.title}` })),
  offers: { "@type": "Offer", price: "5998.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-05-13" },
  provider: { "@type": "TravelAgency", name: "Create Travel", url: CONTACT.domain },
};

const GrupoChinaPrimavera2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo China 2027 — Primavera com guia do Brasil | Create Travel"
        description="15 dias pela China na primavera: Beijing, Grande Muralha, Xi'an, Zhangjiajie (Avatar) e Shanghai. Saída 13/05/2027 pela Ethiopian. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/china-primavera-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo China 2027, Grande Muralha primavera, Guerreiros de Terracota Xi'an, Zhangjiajie Avatar, Shanghai, Create Travel Ásia, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Grande Muralha da China serpenteando montanhas verdes ao amanhecer" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Primavera 2027 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">Grupo · 13 a 27 de maio de 2027</p>
            <h1 className="heading-hero text-white mb-6">China na Primavera</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              15 dias por uma das civilizações mais fascinantes do planeta: Beijing, Grande Muralha, Xi'an, Zhangjiajie (cenário de Avatar) e Shanghai — com guia do Brasil e voos Ethiopian.
            </p>
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
            { icon: Calendar, label: "Datas", value: "13 a 27/05/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Ethiopian Airlines" },
            { icon: Hotel, label: "Hotéis", value: "1ª categoria + café" },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="text-gold flex-shrink-0" size={22} />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{f.label}</p>
                <p className="font-serif font-semibold text-foreground">{f.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Por que viajar com a Create Travel</p>
            <h2 className="heading-section text-foreground">Quatro mil anos de civilização em uma viagem</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card p-8 rounded-xl shadow-card border border-border">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4"><Check className="text-gold" size={20} /></div>
                <h3 className="text-lg font-serif font-semibold mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">15 dias — dia a dia</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {itinerary.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.02 }} className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2"><MapPin size={14} /> {d.day}</div>
                <h3 className="font-serif text-xl font-semibold mb-3">{d.title}</h3>
                <ul className="space-y-2">
                  {d.points.map((p, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted-foreground"><span className="text-gold mt-1">•</span><span>{p}</span></li>
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
            <h2 className="heading-section text-foreground">Hospedagens cuidadosamente selecionadas</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {hotelsForSeo.map((h) => (
              <div key={h.city} className="bg-card border border-border rounded-xl p-6 text-center shadow-card">
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">{h.city}</p>
                <p className="font-serif text-base font-semibold text-foreground">
                  <a href={getHotelUrl(h.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{h.hotel}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">O que está incluído</h3>
            <ul className="space-y-3">{included.map((item, i) => (<li key={i} className="flex gap-3 text-sm"><Check className="text-emerald flex-shrink-0 mt-0.5" size={18} /><span className="text-foreground/85">{item}</span></li>))}</ul>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">Não incluído</h3>
            <ul className="space-y-3">{notIncluded.map((item, i) => (<li key={i} className="flex gap-3 text-sm"><X className="text-muted-foreground flex-shrink-0 mt-0.5" size={18} /><span className="text-muted-foreground">{item}</span></li>))}</ul>
          </div>
        </div>
      </section>

      <section id="investimento" className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial max-w-4xl text-center">
          <p className="text-caption text-gold mb-4">Investimento</p>
          <h2 className="heading-section mb-6">A partir de US$ 5.998 por pessoa</h2>
          <p className="text-white/85 mb-8">Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF e taxas de aeroporto e combustível (USD 790). Sujeitos a disponibilidade e confirmação aérea no momento da reserva.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto triplo</p><p className="font-serif text-2xl font-semibold">US$ 5.968</p><p className="text-white/70 text-xs mt-1">+ IOF USD 158</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto duplo</p><p className="font-serif text-2xl font-semibold">US$ 5.998</p><p className="text-white/70 text-xs mt-1">+ IOF USD 159</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto individual</p><p className="font-serif text-2xl font-semibold">US$ 6.998</p><p className="text-white/70 text-xs mt-1">+ IOF USD 190</p></div>
          </div>
          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left">
            <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">Condição de pagamento</p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div><p className="text-sm text-muted-foreground mb-1">Entrada</p><p className="font-serif text-3xl font-semibold text-foreground">25%</p><p className="text-sm text-muted-foreground mt-1">no ato da reserva</p></div>
              <div><p className="text-sm text-muted-foreground mb-1">Saldo (75%)</p><p className="font-serif text-3xl font-semibold text-foreground">9x sem juros</p><p className="text-sm text-muted-foreground mt-1">no cartão de crédito</p></div>
            </div>
          </div>
          <WhatsAppButton variant="cta" label="Quero garantir minha vaga" params={whatsappParams} className="text-lg px-10 py-5" />
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl"><FAQSection faqs={[...faqs, ...hotelsSeoFaqs]} /></div>
      </section>

      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">Vagas limitadas — grupo com guia do Brasil</h2>
          <p className="text-muted-foreground mb-8">Fale com um consultor Create Travel e reserve sua vaga no Grupo China 2027 (Primavera).</p>
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

export default GrupoChinaPrimavera2027;
