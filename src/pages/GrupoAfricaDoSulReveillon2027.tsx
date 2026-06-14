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
import heroImg from "@/assets/grupo-africa-do-sul-reveillon-2027.jpg";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo África do Sul · Réveillon 2027 (saída 28/12/2026)",
};

const benefits = [
  {
    title: "Réveillon em reserva privada",
    desc: "A virada do ano em lodge de safári no Kruger, cercado pela vida selvagem africana — uma das experiências mais raras do planeta.",
  },
  {
    title: "Safáris off-road com ranger",
    desc: "Três safáris fotográficos em 4x4 abertos em reserva privada, com possibilidade de sair das rotas em busca dos Big Five.",
  },
  {
    title: "Soweto e o legado de Mandela",
    desc: "Mergulho na história do apartheid: Vilakazi Street, Mandela House e Hector Pieterson Memorial com guia em português.",
  },
  {
    title: "Cape Town e Cabo da Boa Esperança",
    desc: "Table Mountain, Bo-Kaap, Castelo da Boa Esperança e o encontro dos oceanos no extremo sul do continente.",
  },
  {
    title: "Verão sul-africano",
    desc: "Dias longos, clima vibrante e a natureza em sua melhor forma — a melhor janela do ano para viver a África do Sul.",
  },
  {
    title: "Guia desde o Brasil",
    desc: "Coordenador Create Travel embarcando em Guarulhos e guia local em português em Johanesburgo e Cidade do Cabo.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 28/12 (seg)",
    title: "São Paulo → Johanesburgo",
    points: [
      "Apresentação em Guarulhos com o coordenador",
      "Voo South African Airways SA 223 às 17h45",
      "Pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 29/12 (ter)",
    title: "Johanesburgo · Soweto",
    points: [
      "Chegada às 07h45 e traslado ao hotel",
      "Visita a Joanesburgo e Soweto à tarde",
      "Vilakazi Street, Mandela House e Hector Pieterson Memorial",
    ],
  },
  {
    day: "Dia 3 — 30/12 (qua)",
    title: "Johanesburgo → Região do Kruger",
    points: [
      "Província de Mpumalanga e Rota Panorâmica",
      "Bourke's Luck Potholes no Blyde River Canyon",
      "Almoço em rota · jantar e hospedagem no lodge",
    ],
  },
  {
    day: "Dia 4 — 31/12 (qui)",
    title: "Réveillon na reserva privada",
    points: [
      "Safári fotográfico ao amanhecer em 4x4 aberto",
      "Tarde livre no lodge · safári ao entardecer",
      "Pensão completa · ceia e virada do ano na reserva",
    ],
  },
  {
    day: "Dia 5 — 01/01 (sex)",
    title: "Kruger → Johanesburgo → Cidade do Cabo",
    points: [
      "Safári fotográfico ao amanhecer",
      "Traslado a Joanesburgo · almoço piquenique",
      "Voo SA 375 às 21h20 · chegada Cape Town 23h35",
    ],
  },
  {
    day: "Dia 6 — 02/01 (sáb)",
    title: "Cidade do Cabo · dia livre",
    points: [
      "Dia livre na cidade",
      "Sugestão: passeio opcional aos Vinhedos do Cabo",
      "Stellenbosch e Franschhoek com degustações",
    ],
  },
  {
    day: "Dia 7 — 03/01 (dom)",
    title: "Cabo da Boa Esperança",
    points: [
      "Passeio de dia inteiro pela Península do Cabo",
      "Hout Bay, Chapman's Peak e Boulders Beach (pinguins)",
      "Cabo da Boa Esperança e Cape Point · almoço incluído",
    ],
  },
  {
    day: "Dia 8 — 04/01 (seg)",
    title: "Cidade do Cabo · Table Mountain",
    points: [
      "Teleférico da Table Mountain (se o clima permitir)",
      "Greenmarket Square, Company's Garden e Castelo da Boa Esperança",
      "Bairro malaio Bo-Kaap · almoço incluído",
    ],
  },
  {
    day: "Dia 9 — 05/01 (ter)",
    title: "Cidade do Cabo → São Paulo",
    points: [
      "Traslado ao aeroporto",
      "Voo SA 226 às 12h40",
      "Chegada em Guarulhos às 16h35",
    ],
  },
];

const included = [
  "Bilhete aéreo em classe econômica São Paulo / Johanesburgo // Cidade do Cabo / São Paulo pela South African Airways, com franquia de 1 mala de 23kg",
  "7 noites de hospedagem em hotéis de primeira categoria com café da manhã",
  "Traslados privados com assistência",
  "Guia acompanhante desde São Paulo e guia local em português em Johanesburgo e Cidade do Cabo",
  "Meio dia de visita em Johanesburgo com Soweto, passeio de dia todo na Cidade do Cabo e passeio de dia todo ao Cabo da Boa Esperança",
  "Entradas no Museu Casa Mandela, Constitution Court, Castelo da Boa Esperança e Museu SA",
  "Três safáris fotográficos em 4x4 aberto com ranger e acompanhamento de guia em português/espanhol",
  "Quatro almoços (incluindo um em estilo piquenique) e pensão completa na região do Kruger",
  "Tag de rastreamento de bagagem",
  "Acesso à sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 195)",
  "Bebidas nas refeições",
  "Passeios opcionais",
  "Gorjetas a guias, motoristas e garçons",
  "Carregadores de malas",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Documentação de viagem e vacinas",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Brasileiros precisam de visto para a África do Sul?",
    a: "Não é necessário visto para brasileiros em estadia turística de até 90 dias. É obrigatório passaporte com validade mínima de 6 meses a partir da data de retorno e o certificado internacional de vacinação contra febre amarela.",
  },
  {
    q: "Como é o clima no fim de dezembro / início de janeiro?",
    a: "É pleno verão no Hemisfério Sul — dias longos, sol forte e clima vibrante. Joanesburgo e Kruger giram entre 18–30 °C, com pancadas de chuva à tarde. Cidade do Cabo costuma ser seca e ensolarada, entre 17–28 °C, com vento típico da região.",
  },
  {
    q: "Como funciona o Réveillon na reserva?",
    a: "A virada acontece no lodge em reserva privada junto ao Kruger, com pensão completa e safáris ao amanhecer e ao entardecer. A celebração de Ano-Novo é organizada pelo próprio lodge, no clima da África selvagem.",
  },
  {
    q: "Crianças podem participar do safári?",
    a: "Sim. A idade mínima permitida para participar dos safáris é de 6 anos, sujeita à avaliação do guia. Preço de criança em quarto com dois adultos: USD 3.640 + IOF.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo África do Sul — Réveillon 2027 — Create Travel",
  description:
    "Grupo organizado de 9 dias pela África do Sul no Réveillon 2027: Johanesburgo, Soweto, Blyde River Canyon, Kruger Park em reserva privada, Cape Town e Cabo da Boa Esperança. Saída 28/12/2026 pela South African Airways, com guia desde o Brasil.",
  image: heroImg,
  touristType: "Safári, natureza, cultura, Réveillon",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "5487.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-12-28",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoAfricaDoSulReveillon2027 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo África do Sul · Réveillon 2027 com guia do Brasil | Create Travel"
        description="9 dias na África do Sul no Réveillon 2027: Soweto, Blyde River Canyon, safári em reserva privada no Kruger, Table Mountain e Cabo da Boa Esperança. Saída 28/12/2026 pela South African Airways. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/africa-do-sul-reveillon-2027"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo África do Sul Réveillon 2027, safári Kruger Ano Novo, Cape Town Réveillon, virada do ano África com guia do Brasil, Create Travel safári"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elefantes ao pôr do sol na savana sul-africana com céu dourado"
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
              Grupo · 28 de dezembro de 2026 a 5 de janeiro de 2027
            </p>
            <h1 className="heading-hero text-white mb-6">
              África do Sul
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              9 dias em pleno verão: Soweto e o legado de Mandela, Rota
              Panorâmica, virada do ano em reserva privada no Kruger e o
              esplendor de Cape Town — com guia do Brasil e voos South African
              Airways.
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
            { icon: Calendar, label: "Datas", value: "28/12/2026 a 05/01/2027" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "South African Airways" },
            { icon: Hotel, label: "Estilo", value: "Safári + Réveillon" },
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
              Réveillon entre os Big Five e o Cabo da Boa Esperança
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
              <p className="font-serif text-lg">GRU → Johanesburgo</p>
              <p className="text-white/75 text-sm mt-1">
                28/12 SA 223 às 17h45 · chegada JNB 29/12 às 07h45
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Doméstico
              </p>
              <p className="font-serif text-lg">Johanesburgo → Cidade do Cabo</p>
              <p className="text-white/75 text-sm mt-1">
                01/01 SA 375 às 21h20 · chegada CPT às 23h35
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">Cidade do Cabo → GRU</p>
              <p className="text-white/75 text-sm mt-1">
                05/01 SA 226 às 12h40 · chegada GRU 16h35
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
              9 dias — dia a dia
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
              { city: "Johanesburgo", hotel: "Onomo Sandton" },
              { city: "Área do Kruger", hotel: "Mdluli Safari Lodge" },
              { city: "Cidade do Cabo", hotel: "Southern Sun Waterfront" },
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
                  {h.hotel}
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
            A partir de US$ 5.487 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 195). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.241</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 139</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.487</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 146</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 6.944</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 192</p>
            </div>
          </div>

          <p className="text-white/70 text-sm mb-8">
            Criança: USD 3.640 + IOF 88 (sujeito a regras de idade do safári).
          </p>

          <div className="bg-card/95 text-foreground rounded-xl p-8 mb-8 text-left">
            <p className="text-xs uppercase tracking-wider text-gold mb-3 font-semibold">
              Condição de pagamento
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
          <FAQSection faqs={faqs} />
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

export default GrupoAfricaDoSulReveillon2027;
