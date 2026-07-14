import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Users, Plane, Hotel, MapPin, Check, X, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-equador-galapagos-carnaval-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo Equador & Galápagos 2027 — Carnaval (saída 05/02/2027)",
};

const benefits = [
  { title: "Carnaval entre Andes e Pacífico", desc: "Saída especial 05 a 15 de fevereiro de 2027: Quito, Avenida dos Vulcões, Galápagos e Guayaquil em uma única jornada." },
  { title: "Quito colonial em altitude", desc: "Centro histórico Patrimônio da UNESCO a 2.850m, La Compañía de Jesús revestida em ouro, El Panecillo e Metade do Mundo." },
  { title: "Avenida dos Vulcões", desc: "Parque Nacional Cotopaxi, lagoa glacial de Limpiopungo a 3.800m e fazenda de rosas Rose Success." },
  { title: "Duas navegações em Galápagos", desc: "Dois passeios de iate por ilhas como Bartolomé, Seymour, Santa Fé ou Plazas Sul, com almoço a bordo e snorkel entre pinguins e leões-marinhos." },
  { title: "Tartarugas gigantes em Santa Cruz", desc: "Rancho El Chato, túneis de lava e Puerto Ayora — o coração vivo do arquipélago onde Darwin escreveu a história da evolução." },
  { title: "Guia desde o Brasil + voos LATAM", desc: "Coordenador Create Travel embarcando em Guarulhos e voos LATAM São Paulo · Lima · Quito · Galápagos · Guayaquil · São Paulo." },
];

const itinerary = [
  { day: "Dia 1 — 05/02 (sex)", title: "São Paulo", points: ["Apresentação em Guarulhos às 23h50", "Encontro com o coordenador Create Travel"] },
  { day: "Dia 2 — 06/02 (sáb)", title: "São Paulo → Lima → Quito", points: ["LATAM 8004 às 03h40 · chegada Lima 06h55", "Conexão até Quito · chegada 11h10", "Hospedagem no Mercure Quito"] },
  { day: "Dia 3 — 07/02 (dom)", title: "Quito colonial · Metade do Mundo", points: ["Plaza Grande, La Compañía de Jesús, San Francisco", "Mirante El Panecillo", "Ciudad Mitad del Mundo e Museu Intiñán"] },
  { day: "Dia 4 — 08/02 (seg)", title: "Cotopaxi · Avenida dos Vulcões", points: ["Parque Nacional Cotopaxi", "Lagoa de Limpiopungo a 3.800m", "Fazenda de rosas Rose Success"] },
  { day: "Dia 5 — 09/02 (ter)", title: "Quito → Galápagos (Santa Cruz)", points: ["LATAM 1413 às 08h30 · chegada 11h10", "Canal de Itabaca e balsa a Santa Cruz", "Rancho El Chato: tartarugas gigantes + túneis de lava · almoço incluído"] },
  { day: "Dia 6 — 10/02 (qua)", title: "Galápagos · navegação de iate", points: ["Passeio a Bartolomé, Seymour, Santa Fé ou Plazas Sul", "Snorkel com leões-marinhos, iguanas e fragatas", "Almoço tradicional a bordo"] },
  { day: "Dia 7 — 11/02 (qui)", title: "Galápagos · segunda navegação", points: ["Segundo iate a uma ilha diferente", "Almoço a bordo", "Noite livre em Puerto Ayora"] },
  { day: "Dia 8 — 12/02 (sex)", title: "Galápagos → Guayaquil", points: ["LATAM 1412 às 10h35 · chegada 13h25", "Traslado ao hotel Wyndham Puerto Santa Ana"] },
  { day: "Dia 9 — 13/02 (sáb)", title: "Guayaquil", points: ["Bairro Las Peñas e Cerro Santa Ana", "Malecón 2000 e La Rotonda", "Parque das Iguanas · almoço incluído"] },
  { day: "Dia 10 — 14/02 (dom)", title: "Guayaquil → Lima → São Paulo", points: ["LATAM 1448 às 20h40 · Lima 22h35", "Conexão LATAM 8005 às 00h30", "Pernoite a bordo"] },
  { day: "Dia 11 — 15/02 (seg)", title: "São Paulo", points: ["Chegada em Guarulhos às 07h20", "Fim dos nossos serviços"] },
];

const included = [
  "Bilhete aéreo internacional em classe econômica São Paulo/Lima/Quito/Galápagos/Guayaquil/São Paulo pela LATAM (franquia 23 kg)",
  "Hotéis de primeira categoria em Quito e Guayaquil e categoria turística nas Galápagos, todos com café da manhã",
  "Guia acompanhante desde o Brasil",
  "Traslados e visitas conforme o roteiro",
  "Duas navegações de iate por ilhas de Galápagos com almoço a bordo",
  "04 almoços",
  "Tag de rastreio de bagagem",
  "Acesso à sala VIP W Premium em Guarulhos",
  "Cartão de assistência GTA FLOT 75 com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason para passageiros até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque e IOF",
  "Taxas de Galápagos (USD 145)",
  "Taxas de aeroporto e combustível (USD 198)",
  "Bebidas nas refeições",
  "Gorjetas a guias, motoristas, garçons e maleteiros",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
];

const faqs = [
  { q: "Qual a condição de pagamento?", a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea." },
  { q: "Preciso de visto para o Equador?", a: "Não. Brasileiros não precisam de visto. É obrigatória a vacina de febre amarela e passaporte com validade mínima de 6 meses a partir da data de retorno." },
  { q: "Como é o Carnaval na região?", a: "Fevereiro é alta temporada natural no Equador. Nos Andes o clima é ameno (10–20 °C) com chuvas rápidas de tarde; nas Galápagos as águas estão mornas (24–27 °C), ideais para snorkel, com sol forte e chuvas curtas." },
  { q: "As navegações em Galápagos são exigentes?", a: "Não. São passeios diurnos de iate com almoço a bordo, saindo de Santa Cruz. As caminhadas em terra são curtas, com trilhas planas. Recomenda-se protetor solar, chapéu, calçado fechado e roupa de banho." },
  { q: "Posso viajar sozinho(a)?", a: "Sim. Trabalhamos com apartamento triplo, duplo ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero, mediante disponibilidade." },
];

const hotelsForSeo = [
  { city: "Quito", hotel: "Mercure Quito" },
  { city: "Galápagos", hotel: "Ninfa" },
  { city: "Guayaquil", hotel: "Wyndham Pto Santa Ana 4★" },
];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo Equador & Galápagos 2027 — Carnaval — Create Travel", "/grupos/equador-galapagos-carnaval-2027");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo Equador & Galápagos 2027 — Carnaval — Create Travel", "/grupos/equador-galapagos-carnaval-2027");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo Equador & Galápagos 2027 — Carnaval — Create Travel",
  description: "11 dias no Carnaval 2027 entre Andes e Pacífico: Quito colonial, Avenida dos Vulcões, Ilhas Galápagos e Guayaquil. Saída 05/02/2027 com guia do Brasil e voos LATAM.",
  image: heroImg,
  touristType: "Natureza, cultura, vida selvagem",
  itinerary: itinerary.map((d, i) => ({ "@type": "ListItem", position: i + 1, name: `${d.day} — ${d.title}` })),
  offers: { "@type": "Offer", price: "3998.00", priceCurrency: "USD", availability: "https://schema.org/LimitedAvailability", validThrough: "2027-02-05" },
  provider: { "@type": "TravelAgency", name: "Create Travel", url: CONTACT.domain },
};

const GrupoEquadorGalapagosCarnaval2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);
  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo Equador & Galápagos 2027 — Carnaval com guia do Brasil | Create Travel"
        description="11 dias no Carnaval 2027 entre Quito, Cotopaxi, Ilhas Galápagos e Guayaquil. Saída 05/02/2027 pela LATAM com guia do Brasil. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/equador-galapagos-carnaval-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo Equador Galápagos 2027, Carnaval Galápagos, Quito Cotopaxi, Create Travel América do Sul, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Tartaruga gigante e tartaruga marinha em Galápagos ao amanhecer" className="w-full h-full object-cover" width={1600} height={900} fetchPriority="high" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Carnaval 2027 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">Grupo · 05 a 15 de fevereiro de 2027</p>
            <h1 className="heading-hero text-white mb-6">Equador & Galápagos</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              11 dias entre Andes e Pacífico: Quito colonial, Cotopaxi, duas navegações por Galápagos e Guayaquil — com guia do Brasil e voos LATAM.
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
            { icon: Calendar, label: "Datas", value: "05 a 15/02/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "LATAM" },
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
            <h2 className="heading-section text-foreground">Um Carnaval extraordinário no Pacífico</h2>
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

      <section className="section-padding bg-navy text-white">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-caption text-gold mb-4">Passagens aéreas incluídas</p>
            <h2 className="heading-section mb-6">Voos LATAM</h2>
            <p className="text-white/85 leading-relaxed mb-4">Companhia sul-americana com atendimento cordial, moderna frota e conexão eficiente em Lima. Inclui os voos domésticos até Galápagos e Guayaquil.</p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Ida</p>
              <p className="font-serif text-lg">GRU → Lima → Quito</p>
              <p className="text-white/75 text-sm mt-1">06/02 LATAM 8004 às 03h40 · chegada Quito 11h10</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Doméstico</p>
              <p className="font-serif text-lg">Quito → Galápagos → Guayaquil</p>
              <p className="text-white/75 text-sm mt-1">Voos LATAM 1413 e 1412 incluídos no pacote</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">Volta</p>
              <p className="font-serif text-lg">Guayaquil → Lima → GRU</p>
              <p className="text-white/75 text-sm mt-1">14/02 LATAM 1448 às 20h40 · chegada GRU 15/02 às 07h20</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">11 dias — dia a dia</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {itinerary.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="bg-card border border-border rounded-xl p-6 shadow-card">
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
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
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
          <h2 className="heading-section mb-6">A partir de US$ 3.998 por pessoa</h2>
          <p className="text-white/85 mb-8">Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF, taxas de Galápagos (USD 145) e taxas de aeroporto e combustível (USD 198). Sujeitos a disponibilidade e confirmação aérea no momento da reserva.</p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto triplo</p><p className="font-serif text-2xl font-semibold">US$ 3.978</p><p className="text-white/70 text-xs mt-1">+ IOF USD 110</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto duplo</p><p className="font-serif text-2xl font-semibold">US$ 3.998</p><p className="text-white/70 text-xs mt-1">+ IOF USD 111</p></div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6"><p className="text-xs uppercase tracking-wider text-gold mb-2">Apto individual</p><p className="font-serif text-2xl font-semibold">US$ 4.658</p><p className="text-white/70 text-xs mt-1">+ IOF USD 132</p></div>
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
        <div className="container-editorial max-w-3xl">
          <FAQSection faqs={[...faqs, ...hotelsSeoFaqs]} />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">Vagas limitadas — grupo com guia do Brasil</h2>
          <p className="text-muted-foreground mb-8">Fale com um consultor Create Travel e reserve sua vaga no Grupo Equador & Galápagos 2027 (Carnaval).</p>
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

export default GrupoEquadorGalapagosCarnaval2027;
