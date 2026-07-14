import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Users, Plane, Hotel, MapPin, Check, X, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-coreia-japao-cerejeiras-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Coreia & Japão 2027 — Cerejeiras (saída 19/03/2027)",
};

const benefits = [
  { title: "Sakura na sua época perfeita", desc: "Saída 19 de março a 03 de abril de 2027 — a janela exata para acompanhar as cerejeiras em Seul, Osaka, Kyoto e Tóquio." },
  { title: "Coreia do Sul com DMZ", desc: "Palácio Gyeongbokgung, Vilarejo Bukchon Hanok, Torre N-Seul, Lotte World Tower e a impactante Zona Desmilitarizada com Terceiro Túnel e Observatório Dora." },
  { title: "Do Japão clássico ao Japão futurista", desc: "Castelo de Osaka, cervos sagrados de Nara, Fushimi Inari e Kinkakuji em Kyoto, Alpes Japoneses e a metrópole de Tóquio." },
  { title: "Shirakawa-go e Takayama", desc: "Vila UNESCO com casas gassho-zukuri, mercado matinal de Takayama e a autenticidade rural dos Alpes Japoneses." },
  { title: "Lago Ashi e Monte Fuji", desc: "Minicruzeiro no Lago Ashi com o torii vermelho, Santuário Hakone e teleférico Owakudani — com o Monte Fuji ao fundo em dias claros." },
  { title: "Guia desde o Brasil + voos Emirates", desc: "Coordenador Create Travel embarcando em Guarulhos, guia local em português/espanhol e voos Emirates com conexão em Dubai." },
];

const itinerary = [
  { day: "Dia 1 — 19/03 (sex)", title: "São Paulo", points: ["Apresentação em Guarulhos por volta das 21h", "Check-in Emirates com o coordenador"] },
  { day: "Dia 2 — 20/03 (sáb)", title: "São Paulo → Dubai", points: ["Emirates EK 0262 às 01h30", "Chegada Dubai 22h35"] },
  { day: "Dia 3 — 21/03 (dom)", title: "Dubai → Seul", points: ["Emirates EK 0322 às 03h30", "Chegada Seul 16h50", "Hospedagem no Sotetsu Splaisir Myeongdong"] },
  { day: "Dia 4 — 22/03 (seg)", title: "Seul · dia completo", points: ["Palácio Gyeongbokgung e Museu do Folclore", "Vilarejo Bukchon Hanok e Riacho Cheonggyecheon", "Torre N-Seul · almoço incluído"] },
  { day: "Dia 5 — 23/03 (ter)", title: "Seul · DMZ", points: ["Parque Imjingak e Terceiro Túnel", "Observatório Dora com vista para a Coreia do Norte", "Museu Memorial de Guerra · almoço incluído"] },
  { day: "Dia 6 — 24/03 (qua)", title: "Seul · Gangnam & Lotte", points: ["Lotte World Tower (Seoul Sky)", "Passeio a pé no Lago Seokchon", "Starfield COEX Mall e Distrito de Gangnam"] },
  { day: "Dia 7 — 25/03 (qui)", title: "Seul → Osaka", points: ["Voo Seul → Osaka", "Exterior do Castelo de Osaka", "Mercado Kuromon Ichiba e Dotonbori · almoço incluído"] },
  { day: "Dia 8 — 26/03 (sex)", title: "Osaka → Nara → Osaka", points: ["Templo Todaiji e Grande Buda", "Parque de Nara com cervos sagrados", "Templo Kofukuji"] },
  { day: "Dia 9 — 27/03 (sáb)", title: "Osaka → Kyoto (trem-bala)", points: ["Shinkansen até Kyoto", "Santuário Fushimi Inari · almoço incluído", "Distrito de Gion"] },
  { day: "Dia 10 — 28/03 (dom)", title: "Kyoto · dia completo", points: ["Castelo Nijo e Templo Kinkakuji (Pavilhão Dourado)", "Templo Tenryuji e Bosque de Bambu de Arashiyama", "Almoço incluído"] },
  { day: "Dia 11 — 29/03 (seg)", title: "Kyoto → Shirakawa-go → Takayama", points: ["Shirakawa-go (UNESCO) e House Kanda", "Distrito histórico Sanmachi Suji", "Almoço incluído · hospedagem em Takayama"] },
  { day: "Dia 12 — 30/03 (ter)", title: "Takayama → Lago Kawaguchi → Hakone", points: ["Mercado matinal de Takayama", "Santuário Kitaguchi, Pagode Chureito e vila de Oshino Hakkai", "Ryokan em Hakone · jantar incluído"] },
  { day: "Dia 13 — 31/03 (qua)", title: "Hakone → Lago Ashi → Tóquio", points: ["Minicruzeiro no Lago Ashi", "Santuário Hakone com torii vermelho", "Teleférico Owakudani · almoço incluído"] },
  { day: "Dia 14 — 01/04 (qui)", title: "Tóquio · dia completo", points: ["Templo Senso-ji e Rua Nakamise", "Santuário Meiji Jingu", "Cruzamento de Shibuya, Harajuku e Omotesando · almoço incluído"] },
  { day: "Dia 15 — 02/04 (sex)", title: "Tóquio · dia livre", points: ["Manhã e tarde livres", "Traslado ao aeroporto de Haneda"] },
  { day: "Dia 16 — 03/04 (sáb)", title: "Tóquio → Dubai → São Paulo", points: ["Emirates EK 0313 às 00h05", "Conexão EK 0261 às 09h05", "Chegada em Guarulhos às 17h40"] },
];

const included = [
  "Bilhete aéreo internacional em classe econômica São Paulo/Seul/Osaka/Tóquio/São Paulo pela Emirates (franquia 23 kg)",
  "Voo doméstico Seul → Osaka",
  "Hospedagem em hotéis de primeira categoria com café da manhã",
  "Ryokan em Hakone com jantar japonês incluído",
  "Guia acompanhante desde São Paulo",
  "Guia local em português/espanhol nas visitas",
  "Traslado das bagagens em ônibus privativo entre Osaka e Kyoto",
  "Shinkansen Osaka → Kyoto em classe econômica",
  "Visitas conforme o roteiro com entradas",
  "3 almoços na Coreia + 6 almoços e 1 jantar no Japão (sem bebidas)",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium em Guarulhos",
  "Cartão de assistência com cobertura médica de US$ 75.000",
  "Seguro cancelamento para passageiros até 85 anos: US$ 5.000",
];

const notIncluded = [
  "Taxas de embarque e IOF",
  "Taxas de aeroporto e combustível (USD 691)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas e garçons",
  "Visto eletrônico K-ETA para a Coreia do Sul",
  "Despesas pessoais (frigobar, telefonemas, lavanderia)",
];

const faqs = [
  { q: "Qual a condição de pagamento?", a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea." },
  { q: "Vou ver as cerejeiras com certeza?", a: "A saída (19/03 a 03/04/2027) foi programada para acompanhar o pico natural da sakura entre Coreia do Sul e Japão. O calendário biológico varia levemente a cada ano, mas cobrimos toda a janela típica: Seul, Kyoto, Osaka, Hakone e Tóquio." },
  { q: "Preciso de visto?", a: "Sim, é necessário o K-ETA (visto eletrônico da Coreia do Sul), obtido online antes do embarque. Japão não exige visto para brasileiros. Passaporte com validade mínima de 6 meses após o retorno." },
  { q: "Como é o clima em março/abril?", a: "Primavera amena: 8–18 °C na Coreia, 10–20 °C no Japão. Dias frescos, noites frias em Hakone/Takayama. Traga camadas, um casaco leve e sapato confortável para caminhadas." },
  { q: "Como funcionam as bagagens no Japão?", a: "Entre Osaka e Kyoto, as malas seguem em ônibus privativo — você viaja mais leve no shinkansen. Camas de casal não são padrão nos hotéis japoneses; fazemos o possível para atender preferências conforme disponibilidade." },
];

const hotelsForSeo = [
  { city: "Seul", hotel: "Sotetsu Splaisir Myeongdong" },
  { city: "Osaka", hotel: "Monterey Grasmere Osaka" },
  { city: "Kyoto", hotel: "Rihga Gran Kyoto" },
  { city: "Takayama", hotel: "Amanek Hida Takayama" },
  { city: "Hakone", hotel: "Nanpuso" },
  { city: "Tóquio", hotel: "Tokyo Dome Hotel" },
];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Coreia & Japão 2027 — Cerejeiras — Create Travel", "/grupos/coreia-japao-cerejeiras-2027");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Coreia & Japão 2027 — Cerejeiras — Create Travel", "/grupos/coreia-japao-cerejeiras-2027");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Coreia & Japão 2027 — Cerejeiras — Create Travel",
  description: "16 dias entre Coreia do Sul e Japão no auge da floração das cerejeiras: Seul, DMZ, Osaka, Nara, Kyoto, Alpes Japoneses, Hakone e Tóquio. Saída 19/03/2027 pela Emirates com guia do Brasil.",
  image: heroImg,
  touristType: "Cultura, natureza, primavera",
  itinerary: itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.day} — ${d.title}` })),
  offers: { "@type": "Offer", price: "8985.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-03-19" },
  provider: { "@type": "TravelAgency", name: "Create Travel", url: CONTACT.domain },
};

const GrupoCoreiaJapaoCerejeiras2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Coreia & Japão 2027 — Cerejeiras com guia do Brasil | Create Travel"
        description="16 dias entre Seul, Kyoto, Osaka, Alpes Japoneses, Hakone e Tóquio no auge das cerejeiras. Saída 19/03/2027 pela Emirates. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/coreia-japao-cerejeiras-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Coreia Japão 2027, cerejeiras sakura, Kyoto Tóquio Hakone, Create Travel Ásia, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Cerejeiras em flor com o Monte Fuji ao fundo" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Cerejeiras 2027 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">Grupo · 19 de março a 03 de abril de 2027</p>
            <h1 className="heading-hero text-white mb-6">Coreia & Japão</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              16 dias entre cerejeiras, palácios e tradições: Seul, DMZ, Osaka, Nara, Kyoto, Alpes Japoneses, Hakone e Tóquio — com guia do Brasil e voos Emirates.
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
            { icon: Calendar, label: "Datas", value: "19/03 a 03/04/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "Emirates" },
            { icon: Hotel, label: "Hotéis", value: "1ª categoria + ryokan" },
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
            <h2 className="heading-section text-foreground">A primavera na sua forma mais bonita</h2>
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
            <h2 className="heading-section text-foreground">16 dias — dia a dia</h2>
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
          <h2 className="heading-section mb-6">A partir de US$ 8.985 por pessoa</h2>
          <p className="text-white/85 mb-8">Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF e taxas de aeroporto e combustível (USD 691). Sujeitos a disponibilidade e confirmação aérea no momento da reserva.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto triplo</p><p className="font-serif text-2xl font-semibold">US$ 8.950</p><p className="text-white/70 text-xs mt-1">+ IOF USD 248</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto duplo</p><p className="font-serif text-2xl font-semibold">US$ 8.985</p><p className="text-white/70 text-xs mt-1">+ IOF USD 250</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto individual</p><p className="font-serif text-2xl font-semibold">US$ 10.680</p><p className="text-white/70 text-xs mt-1">+ IOF USD 303</p></div>
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
          <p className="text-muted-foreground mb-8">Fale com um consultor Create Travel e reserve sua vaga no Grupo Coreia & Japão 2027 (Cerejeiras).</p>
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

export default GrupoCoreiaJapaoCerejeiras2027;
