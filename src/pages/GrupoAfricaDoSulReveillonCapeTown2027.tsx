import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Calendar,
  Users,
  Plane,
  Hotel,
  MapPin,
  Check,
  X,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import heroImg from "@/assets/grupo-africa-do-sul-reveillon-cape-town-2027.jpg";
import { getHotelUrl, buildHotelsJsonLd, buildHotelsFAQs, buildHotelsKeywords } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo África do Sul · Réveillon 2027 — Cape Town + Pilanesberg (saída 26/12/2026)",
};

const benefits = [
  {
    title: "Réveillon em Cape Town",
    desc: "A virada do ano com a Table Mountain de cenário, o clima vibrante do verão sul-africano e a liberdade de uma cidade entre montanha e oceano.",
  },
  {
    title: "Table Mountain Fast Track",
    desc: "Ticket prioritário para o teleférico que sobe ao topo da montanha icônica — um dos marcos mais fotografados do planeta, com vista de 360°.",
  },
  {
    title: "Safári no Pilanesberg livre de malária",
    desc: "Três safáris fotográficos em reserva de 55 mil hectares, casa do Big Five e considerada uma das melhores áreas livres de malária da África do Sul.",
  },
  {
    title: "Cabo da Boa Esperança e pinguins",
    desc: "Chapman's Peak Drive, o extremo sudoeste do continente africano no Cape Point e a colônia de pinguins africanos de Boulders Beach.",
  },
  {
    title: "Vinhedos do Cabo com degustações",
    desc: "Dia entre as vinícolas de Stellenbosch e Franschhoek, com duas degustações por pessoa e almoço em cenário de montanhas cobertas de videiras.",
  },
  {
    title: "História viva: Museu do Apartheid",
    desc: "Visita guiada em português ao Apartheid Museum, mergulho profundo na trajetória de Nelson Mandela e na reconstrução da África do Sul.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 26/12 (sáb)",
    title: "São Paulo → Cidade do Cabo",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo South African Airways SA 227 às 18h05",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 27/12 (dom)",
    title: "Cidade do Cabo · chegada",
    points: [
      "Chegada por volta das 06h40",
      "Traslado ao hotel com early check-in garantido",
      "Café da manhã e dia livre para descanso ou passeios pessoais",
    ],
  },
  {
    day: "Dia 3 — 28/12 (seg)",
    title: "Cidade do Cabo · tour panorâmico",
    points: [
      "Table Mountain Fast Track (ou Signal Hill se o clima impedir)",
      "Castelo da Boa Esperança, Grand Parade, Prefeitura, Distrito Seis e Parlamento",
      "Catedral de São Jorge, Bo-Kaap (Bairro Malaio), Company Gardens e museu",
      "Almoço incluído e Jardins de Kirstenbosch",
    ],
  },
  {
    day: "Dia 4 — 29/12 (ter)",
    title: "Cabo da Boa Esperança",
    points: [
      "Chapman's Peak Drive pela costa atlântica",
      "Cabo da Boa Esperança (Cape Point) e Buffelsfontein Visitor Centre",
      "Boulders Beach — colônia de pinguins africanos",
      "Almoço incluído",
    ],
  },
  {
    day: "Dia 5 — 30/12 (qua)",
    title: "Vinhedos do Cabo",
    points: [
      "Passeio à região vinícola de Stellenbosch e Franschhoek",
      "Duas degustações de vinho por pessoa",
      "Almoço incluído",
    ],
  },
  {
    day: "Dia 6 — 31/12 (qui)",
    title: "Cidade do Cabo · dia livre · Réveillon",
    points: [
      "Dia inteiramente livre para viver a cidade",
      "Sugestão: restaurantes, praias, mercados ou passeios opcionais",
      "Noite de virada do ano em Cape Town",
    ],
  },
  {
    day: "Dia 7 — 01/01 (sex)",
    title: "Cidade do Cabo → Joanesburgo → Pilanesberg",
    points: [
      "Café da manhã e traslado ao aeroporto",
      "Voo SA 316 às 09h00 · chegada em Joanesburgo às 11h00",
      "Traslado ao lodge no Parque Nacional de Pilanesberg",
      "Safári fotográfico ao entardecer com ranger",
    ],
  },
  {
    day: "Dia 8 — 02/01 (sáb)",
    title: "Parque Nacional de Pilanesberg",
    points: [
      "Safári ao amanhecer em 4x4 aberto",
      "Pensão completa no lodge",
      "Safári ao entardecer em busca dos Big Five",
    ],
  },
  {
    day: "Dia 9 — 03/01 (dom)",
    title: "Pilanesberg → Joanesburgo",
    points: [
      "Safári fotográfico pela manhã",
      "Traslado a Joanesburgo (próximo ao aeroporto)",
      "Visita guiada ao Museu do Apartheid",
      "Almoço incluído e restante do dia livre",
    ],
  },
  {
    day: "Dia 10 — 04/01 (seg)",
    title: "Joanesburgo → São Paulo",
    points: [
      "Café da manhã e traslado ao aeroporto",
      "Voo SA 222 às 11h10",
      "Chegada em Guarulhos às 16h15",
    ],
  },
];

const included = [
  "Bloqueio aéreo em classe econômica São Paulo / Cidade do Cabo // Joanesburgo / São Paulo pela South African Airways, com 1 mala despachada de 23kg",
  "05 noites em Cidade do Cabo com café da manhã (incluindo early check-in)",
  "Trecho aéreo Cidade do Cabo / Joanesburgo em classe econômica",
  "02 noites em Pilanesberg com pensão completa e safáris fotográficos",
  "01 noite em Joanesburgo com café da manhã",
  "Traslados privados nos três centros (1 mala por pessoa, assistência em inglês)",
  "City tour de dia inteiro em Cidade do Cabo com guia em português e motorista em inglês",
  "Ticket Fast Track para Table Mountain + almoço",
  "Cape Point Tour de dia inteiro com guia em português e motorista em inglês + almoço",
  "Wineland Tour de dia inteiro com guia em português, motorista em inglês e 2 degustações de vinho por pessoa + almoço",
  "Entrada no Museu do Apartheid com guia em português",
];

const notIncluded = [
  "Taxas de embarque cobradas pelos aeroportos (aproximadamente USD 151 por pessoa)",
  "IOF",
  "Bebidas durante as refeições incluídas",
  "Voos domésticos no Brasil, caso necessários",
  "Seguro assistência viagem",
  "Gorjetas a guias, motoristas e garçons",
  "Carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem e vacinas",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em até 9 parcelas sem juros no cartão de crédito — condição válida para a parte terrestre do programa. A parte aérea é cotada separadamente e o parcelamento segue as condições da companhia aérea escolhida, que mudam de uma cia para outra. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para a África do Sul?",
    a: "Não é necessário visto para brasileiros em estadia turística de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno, pelo menos 3 folhas em branco e o certificado internacional de vacinação contra febre amarela.",
  },
  {
    q: "Como é o clima no fim de dezembro / início de janeiro?",
    a: "É pleno verão no Hemisfério Sul. Cidade do Cabo costuma ser seca e ensolarada, entre 17–28 °C, com vento típico da região. Pilanesberg e Joanesburgo giram entre 18–30 °C, com possíveis pancadas de chuva à tarde.",
  },
  {
    q: "Pilanesberg é mesmo livre de malária?",
    a: "Sim. O Parque Nacional de Pilanesberg está situado em uma região considerada livre de malária, o que o torna uma das escolhas mais seguras para safári na África do Sul. A profilaxia permanece recomendável apenas caso o viajante vá a outras regiões de risco antes ou depois do roteiro.",
  },
  {
    q: "Crianças podem participar do safári?",
    a: "Sim. A idade mínima para os safáris em 4x4 geralmente é de 6 anos, sujeita às regras do lodge. O roteiro é bastante flexível, com muitas experiências familiares como pinguins, vinhedos e Cidade do Cabo.",
  },
];

const hotelsForSeo = [
  { city: "Cidade do Cabo", hotel: "Pullman Cape Town City Centre" },
  { city: "Pilanesberg", hotel: "Ivory Tree Game Lodge" },
  { city: "Joanesburgo", hotel: "Peermont Mondior Hotel no Emperors Palace" },
];
const hotelsSeoJsonLd = buildHotelsJsonLd(hotelsForSeo, "Grupo África do Sul — Réveillon 2027 · Cape Town + Pilanesberg — Create Travel", "/grupos/africa-do-sul-reveillon-cape-town-2027");
const hotelsSeoFaqs = buildHotelsFAQs(hotelsForSeo, "Grupo África do Sul — Réveillon 2027 · Cape Town + Pilanesberg — Create Travel", "/grupos/africa-do-sul-reveillon-cape-town-2027");
const hotelsSeoKeywords = buildHotelsKeywords(hotelsForSeo);

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  "@id": "https://createtravel.tur.br/grupos/africa-do-sul-reveillon-cape-town-2027#trip",
  url: "https://createtravel.tur.br/grupos/africa-do-sul-reveillon-cape-town-2027",
  name: "Grupo África do Sul — Réveillon 2027 · Cape Town + Pilanesberg — Create Travel",
  description:
    "Grupo organizado de 10 dias pela África do Sul no Réveillon 2027: Cidade do Cabo, Table Mountain, Cabo da Boa Esperança, vinhedos do Cabo, Pilanesberg e Joanesburgo. Saída 26/12/2026 pela South African Airways.",
  image: heroImg,
  touristType: "Safári, natureza, cultura, Réveillon",
  itinerary: { "@type": "ItemList", itemListElement: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })) },
  offers: {
    "@type": "Offer",
    price: "4877.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-12-26", priceValidUntil: "2026-12-26",
  },
  provider: { "@id": "https://createtravel.tur.br/#organization" },
};

const GrupoAfricaDoSulReveillonCapeTown2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo África do Sul · Réveillon 2027: Cape Town + Pilanesberg | Create Travel"
        description="10 dias na África do Sul no Réveillon 2027: Table Mountain, Cabo da Boa Esperança, vinhedos do Cabo, safáris em Pilanesberg e Museu do Apartheid. Saída 26/12/2026 pela South African Airways. Parte terrestre: entrada 25% + 9x sem juros."
        canonicalPath="/grupos/africa-do-sul-reveillon-cape-town-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={[jsonLd, ...hotelsSeoJsonLd]}
        keywords={`viagem em grupo África do Sul Réveillon 2027, Cape Town Réveillon, safári Pilanesberg, Table Mountain, grupo com coordenador desde o Brasil, Create Travel safári, ${hotelsSeoKeywords}`}
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Vista aérea da Cidade do Cabo e Table Mountain ao pôr do sol"
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            fetchPriority="high"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles size={14} /> Réveillon 2027 · Saída confirmada
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 26 de dezembro de 2026 a 4 de janeiro de 2027
            </p>
            <h1 className="heading-hero text-white mb-6">
              África do Sul
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              10 dias de verão: Table Mountain e Cidade do Cabo, Cabo da Boa
              Esperança, vinhedos do Cabo e safáris no Pilanesberg — com voos
              South African Airways.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <WhatsAppButton
                variant="cta"
                label="Garantir minha vaga"
                params={whatsappParams}
                className="text-lg px-8 py-4"
              />
              <a
                href="#investimento"
                className="btn-outline border-white text-white hover:bg-white hover:text-navy"
              >
                Ver investimento <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick facts */}
      <section className="bg-muted py-10 border-b border-border">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Calendar, label: "Datas", value: "26/12/2026 a 04/01/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com coordenador desde o Brasil" },
            { icon: Plane, label: "Voos", value: "South African Airways" },
            { icon: Hotel, label: "Estilo", value: "Cultura + Safári + Réveillon" },
          ].map((f, i) => (
            <div key={i} className="flex items-start gap-3">
              <f.icon className="text-gold flex-shrink-0" size={22} />
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {f.label}
                </p>
                <p className="font-serif font-semibold text-foreground">
                  {f.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">
              Por que viajar com a Create Travel
            </p>
            <h2 className="heading-section text-foreground">
              Réveillon entre a montanha, o oceano e a savana
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-8 rounded-xl shadow-card border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center mb-4">
                  <Check className="text-gold" size={20} />
                </div>
                <h3 className="text-lg font-serif font-semibold mb-2">
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flights */}
      <section className="section-padding bg-navy text-white">
        <div className="container-editorial grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-caption text-gold mb-4">
              Passagens aéreas incluídas
            </p>
            <h2 className="heading-section mb-6">Voos South African Airways</h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Companhia nacional sul-africana, com serviço atencioso, aeronaves
              confortáveis, refeições de qualidade e entretenimento a bordo. O
              clima de hospitalidade africana começa no embarque, tornando a
              travessia parte da experiência da viagem.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">GRU → Cidade do Cabo</p>
              <p className="text-white/75 text-sm mt-1">
                26/12 SA 227 às 18h05 · chegada CPT 27/12 às 06h40
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Doméstico
              </p>
              <p className="font-serif text-lg">Cidade do Cabo → Joanesburgo</p>
              <p className="text-white/75 text-sm mt-1">
                01/01 SA 316 às 09h00 · chegada JNB às 11h00
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Joanesburgo → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                04/01 SA 222 às 11h10 · chegada GRU 16h15
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Roteiro completo</p>
            <h2 className="heading-section text-foreground">
              10 dias — dia a dia
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {itinerary.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-card border border-border rounded-xl p-6 shadow-card"
              >
                <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-2">
                  <MapPin size={14} /> {d.day}
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {d.title}
                </h3>
                <ul className="space-y-2">
                  {d.points.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="text-gold mt-1">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hotels */}
      <section className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Hotéis previstos</p>
            <h2 className="heading-section text-foreground">
              Hospedagens cuidadosamente selecionadas
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { city: "Cidade do Cabo", hotel: "Pullman Cape Town City Centre" },
              { city: "Pilanesberg", hotel: "Ivory Tree Game Lodge" },
              { city: "Joanesburgo", hotel: "Peermont Mondior Hotel no Emperors Palace" },
            ].map((h) => (
              <div
                key={h.city}
                className="bg-card border border-border rounded-xl p-6 text-center shadow-card"
              >
                <Hotel className="text-gold mx-auto mb-3" size={22} />
                <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">
                  {h.city}
                </p>
                <p className="font-serif text-base font-semibold text-foreground">
                  <a href={getHotelUrl(h.hotel)} target="_blank" rel="noopener noreferrer" className="hover:text-gold underline-offset-4 hover:underline transition-colors">{h.hotel}</a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included / not included */}
      <section className="section-padding">
        <div className="container-editorial grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              O que está incluído
            </h3>
            <ul className="space-y-3">
              {included.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <Check
                    className="text-emerald flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-foreground/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-card rounded-xl p-8 border border-border shadow-card">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-foreground">
              Não incluído
            </h3>
            <ul className="space-y-3">
              {notIncluded.map((item, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <X
                    className="text-muted-foreground flex-shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Investment */}
      <section
        id="investimento"
        className="section-padding bg-gradient-hero text-white"
      >
        <div className="container-editorial max-w-4xl text-center">
          <p className="text-caption text-gold mb-4">Investimento</p>
          <h2 className="heading-section mb-6">
            A partir de US$ 4.877 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de embarque (aproximadamente USD 151). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-8 max-w-2xl mx-auto">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 4.877</p>
              <p className="text-white/70 text-xs mt-1">por pessoa</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 6.468</p>
              <p className="text-white/70 text-xs mt-1">suplemento single</p>
            </div>
          </div>

          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left max-w-2xl mx-auto">
            <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
              Condição de pagamento
            </p>
            <p className="text-sm text-muted-foreground mb-5">
              Condição válida para a parte terrestre do programa. A parte aérea é cotada à parte e o parcelamento segue as regras da companhia aérea escolhida, que variam de uma cia para outra.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Entrada</p>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  25%
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  no ato da reserva
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Saldo (75%)
                </p>
                <p className="font-serif text-3xl font-semibold text-foreground">
                  9x sem juros
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  no cartão de crédito
                </p>
              </div>
            </div>
          </div>

          <WhatsAppButton
            variant="cta"
            label="Quero garantir minha vaga"
            params={whatsappParams}
            className="text-lg px-10 py-5"
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl">
          <FAQSection faqs={[...faqs, ...hotelsSeoFaqs]} />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding">
        <div className="container-editorial text-center max-w-2xl">
          <h2 className="heading-section text-foreground mb-6">
            Vagas limitadas — Réveillon na África do Sul
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga no Réveillon
            2027. Atendimento personalizado pelo WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg px-8 py-4"
            >
              Falar no WhatsApp
            </a>
            <Link to="/embarque-com-a-create" className="btn-outline">
              Ver outras saídas <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GrupoAfricaDoSulReveillonCapeTown2027;
