import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Users, Plane, Hotel, MapPin, Check, X, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-india-sri-lanka-holi-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Índia & Sri Lanka 2027 — Festival Holi (saída 16/03/2027)",
};

const benefits = [
  { title: "Festival Holi em Jaipur", desc: "Celebração privativa no Chomu Palace com pós coloridos orgânicos, trajes típicos, música e dança — uma das experiências mais memoráveis da Índia." },
  { title: "Triângulo Dourado completo", desc: "Delhi imperial, Jaipur (Cidade Rosa), Abhaneri e Agra com o inesquecível Taj Mahal ao amanhecer." },
  { title: "Sri Lanka de norte a sul", desc: "Rocha de Sigiriya, jardins de chá em Nuwara Eliya, safári no Yala com leopardos e o descanso na praia de Bentota." },
  { title: "Trem cênico e safáris", desc: "Passeio no lendário trem de Ambewela a Ella, safáris de jipe em Minneriya e Yala, forte de Galle e passeio de riquixá em Old Delhi." },
  { title: "Guia desde o Brasil + voos Turkish", desc: "Coordenador Create Travel embarcando em Guarulhos, guias locais em espanhol e voos Turkish Airlines com conexão em Istambul." },
  { title: "Rituais e experiências culturais", desc: "Pintura de henna, prova de sari e turbante, cerimônia Aarti no Templo Birla, tuk-tuk pelos bazares e cozinha do Gurudwara em Delhi." },
];

const itinerary = [
  { day: "Dia 1 — 16/03 (ter)", title: "São Paulo → Istambul", points: ["Apresentação em Guarulhos", "Turkish TK 216 às 17h10", "Pernoite a bordo"] },
  { day: "Dia 2 — 17/03 (qua)", title: "Istambul → Delhi", points: ["Chegada Istambul 11h45", "Conexão TK 716 às 20h50", "Pernoite a bordo"] },
  { day: "Dia 3 — 18/03 (qui)", title: "Delhi", points: ["Chegada 05h20 · guirlanda e ritual Mouli", "Check-in e almoço no hotel", "Tarde livre"] },
  { day: "Dia 4 — 19/03 (sex)", title: "Delhi · Old & New Delhi", points: ["Forte Vermelho e riquixá em Chandni Chowk", "Mesquita Jama, Rajghat e Gurudwara", "Qutub Minar, Rashtrapati Bhawan e India Gate"] },
  { day: "Dia 5 — 20/03 (sáb)", title: "Delhi → Jaipur", points: ["Viagem terrestre à Cidade Rosa", "Patrika Gate para fotos", "Cerimônia Aarti no Templo Birla"] },
  { day: "Dia 6 — 21/03 (dom)", title: "Jaipur · Forte Amber", points: ["Forte Amber e Sheesh Mahal", "Palácio da Cidade e Jantar Mantar", "Bazares em tuk-tuk · henna e prova de sari/turbante"] },
  { day: "Dia 7 — 22/03 (seg)", title: "Jaipur · Festival Holi", points: ["Trajes de Holi e amarração de turbantes", "Celebração privativa no Chomu Palace com música, dança e almoço buffet", "Templo dos Macacos Galtaji"] },
  { day: "Dia 8 — 23/03 (ter)", title: "Jaipur → Abhaneri → Agra", points: ["Poço escalonado Chand Baori em Abhaneri", "Chegada em Agra e visita ao Taj Mahal ao pôr do sol", "Almoço incluído"] },
  { day: "Dia 9 — 24/03 (qua)", title: "Agra · Taj Mahal & Forte", points: ["Taj Mahal ao amanhecer", "Forte de Agra e Museu do Mármore", "Vista do Taj de Mehtab Bagh"] },
  { day: "Dia 10 — 25/03 (qui)", title: "Agra → Delhi", points: ["Túmulo Itmad-ud-Daulah (Baby Taj)", "Viagem terrestre a Delhi", "Almoço incluído · hospedagem"] },
  { day: "Dia 11 — 26/03 (sex)", title: "Delhi → Colombo → Sigiriya", points: ["Voo para o Sri Lanka", "Traslado a Sigiriya", "Almoço servido a bordo"] },
  { day: "Dia 12 — 27/03 (sáb)", title: "Sigiriya · Rocha do Leão", points: ["Subida à Fortaleza Rochosa de Sigiriya", "Vila de Hiriwadunna com carro de bois", "Safári de jipe em Minneriya"] },
  { day: "Dia 13 — 28/03 (dom)", title: "Sigiriya → Nuwara Eliya", points: ["Estrada cênica pelas montanhas", "Plantação de chá com degustação", "Gregory Lake e Victoria Park"] },
  { day: "Dia 14 — 29/03 (seg)", title: "Nuwara Eliya → Yala", points: ["Trem cênico Ambewela → Ella", "Parada em Ella Gap para fotos", "Chegada e descanso"] },
  { day: "Dia 15 — 30/03 (ter)", title: "Yala → Bentota", points: ["Safári de jipe ao amanhecer no Yala", "Forte de Galle (UNESCO) no caminho", "Pôr do sol na praia de Bentota"] },
  { day: "Dia 16 — 31/03 (qua)", title: "Bentota · dia livre", points: ["Manhã e tarde livres", "Praia e Rio Bentota", "Almoço incluído"] },
  { day: "Dia 17 — 01/04 (qui)", title: "Bentota → Colombo → Istambul → SP", points: ["Traslado 03h20 · Turkish TK 1131 às 08h25", "Conexão TK 215 em Istambul às 20h25", "Pernoite a bordo"] },
  { day: "Dia 18 — 02/04 (sex)", title: "São Paulo", points: ["Chegada em Guarulhos às 03h30", "Fim dos nossos serviços"] },
];

const included = [
  "Bilhete aéreo internacional em classe econômica São Paulo/Istambul/Delhi//Colombo/Istambul/São Paulo pela Turkish Airlines",
  "Voo doméstico Delhi/Colombo emitido localmente",
  "Hotéis de primeira categoria com café da manhã",
  "Guia acompanhante desde São Paulo e guias locais em espanhol",
  "Traslados com assistência",
  "Todas as visitas conforme o roteiro",
  "Festival Holi com pós coloridos orgânicos, trajes típicos e cerimônia cultural",
  "Passeio de riquixá em Delhi, riquixá elétrico e prova de sari/turbante em Jaipur",
  "01 foto no Taj Mahal · chinelos e burcas para visita a templos",
  "Safári de jipe em Minneriya e Yala, passeio de trem Ambewela–Ella",
  "14 almoços (sem bebidas)",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium em Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento para passageiros até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque e IOF",
  "Taxas de aeroporto e combustível (USD 821)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Vistos da Índia (eVisa) e Sri Lanka (ETA)",
  "Despesas pessoais (frigobar, telefonemas, lavanderia)",
];

const faqs = [
  { q: "Qual a condição de pagamento?", a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea." },
  { q: "Preciso de visto e vacina?", a: "Sim. Índia com eVisa (indianvisaonline.gov.in) e Sri Lanka com ETA (eta.gov.lk). O processo é rápido (72h), mas recomendamos providenciar 30 dias antes. Vacina de febre amarela obrigatória. Passaporte válido por 6 meses após o retorno." },
  { q: "Como é o Holi em Jaipur?", a: "O grupo celebra o festival de forma privativa no Chomu Palace, com pós orgânicos, música e dança tradicional do Rajastão, doces gujia e almoço buffet — sem a exposição das celebrações abertas nas ruas." },
  { q: "Como é o clima em março?", a: "Norte da Índia (Delhi, Jaipur, Agra) tem dias quentes (28–34 °C) e noites amenas. Sri Lanka tem clima tropical (28–32 °C) com chuvas rápidas. Nuwara Eliya (montanha) é fresco (18–22 °C) — leve uma peça de meia estação." },
  { q: "É seguro viajar em grupo pela Índia?", a: "Sim. Todo o roteiro é operado com transporte privativo, hotéis 1ª categoria, guia brasileiro do início ao fim e guias locais em espanhol. Você vive o impacto sensorial do país com toda a estrutura ao redor." },
];

const hotelsForSeo = [
  { city: "Delhi", hotel: "ITC Fortune East Park" },
  { city: "Jaipur", hotel: "Sarovar Golden Tulip" },
  { city: "Agra", hotel: "Radisson" },
  { city: "Sigiriya", hotel: "Habarana by Cinnamon" },
  { city: "Nuwara Eliya", hotel: "Blackpool" },
  { city: "Yala / Bentota", hotel: "Hotel previsto 1ª categoria" },
];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Índia & Sri Lanka 2027 — Festival Holi — Create Travel", "/grupos/india-sri-lanka-holi-2027");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Índia & Sri Lanka 2027 — Festival Holi — Create Travel", "/grupos/india-sri-lanka-holi-2027");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Índia & Sri Lanka 2027 — Festival Holi — Create Travel",
  description: "18 dias pela Índia e Sri Lanka em 2027 com participação privativa no Festival Holi em Jaipur, Taj Mahal, Sigiriya, jardins de chá e safári no Yala. Saída 16/03/2027 pela Turkish Airlines com guia do Brasil.",
  image: heroImg,
  touristType: "Cultura, festivais, natureza, vida selvagem",
  itinerary: itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.day} — ${d.title}` })),
  offers: { "@type": "Offer", price: "6998.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-03-16" },
  provider: { "@type": "TravelAgency", name: "Create Travel", url: CONTACT.domain },
};

const GrupoIndiaSriLankaHoli2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Índia & Sri Lanka 2027 — Festival Holi com guia do Brasil | Create Travel"
        description="18 dias na Índia e Sri Lanka em 2027 com Festival Holi privativo em Jaipur, Taj Mahal, Sigiriya, Nuwara Eliya e safári no Yala. Saída 16/03/2027 pela Turkish Airlines. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/india-sri-lanka-holi-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Índia Sri Lanka 2027, Festival Holi Jaipur, Taj Mahal, Sigiriya Yala, Create Travel Ásia, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Festival Holi em Jaipur com pessoas cobertas de pó colorido rosa e amarelo" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Grupo 2027 · Festival Holi
            </div>
            <p className="text-caption text-gold mb-4">Grupo · 16 de março a 02 de abril de 2027</p>
            <h1 className="heading-hero text-white mb-6">Índia & Sri Lanka</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              18 dias entre cores, templos e natureza exuberante: Festival Holi em Jaipur, Taj Mahal, Rocha de Sigiriya, jardins de chá e safári no Yala.
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
            { icon: Calendar, label: "Datas", value: "16/03 a 02/04/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Turkish Airlines" },
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
            <h2 className="heading-section text-foreground">Cores, templos e natureza no Sul da Ásia</h2>
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
            <h2 className="heading-section text-foreground">18 dias — dia a dia</h2>
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
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
          <h2 className="heading-section mb-6">A partir de US$ 6.998 por pessoa</h2>
          <p className="text-white/85 mb-8">Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF e taxas de aeroporto e combustível (USD 821). Sujeitos a disponibilidade e confirmação aérea no momento da reserva.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto triplo</p><p className="font-serif text-2xl font-semibold">US$ 6.985</p><p className="text-white/70 text-xs mt-1">+ IOF USD 181</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto duplo</p><p className="font-serif text-2xl font-semibold">US$ 6.998</p><p className="text-white/70 text-xs mt-1">+ IOF USD 182</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto individual</p><p className="font-serif text-2xl font-semibold">US$ 8.498</p><p className="text-white/70 text-xs mt-1">+ IOF USD 230</p></div>
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
          <p className="text-muted-foreground mb-8">Fale com um consultor Create Travel e reserve sua vaga no Grupo Índia & Sri Lanka 2027 (Festival Holi).</p>
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

export default GrupoIndiaSriLankaHoli2027;
