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
import heroImg from "@/assets/grupo-africa-do-sul-2026.jpg";
import { getHotelUrl } from "@/lib/groupHotels";

const whatsappParams = {
  type: "Roteiro" as const,
  name: "Grupo África do Sul 2026 (saída 07/09/2026)",
};

const benefits = [
  {
    title: "Safári em reserva privada no Kruger",
    desc: "Hospedagem no Mdluli Safari Lodge com três safáris em veículo 4x4 aberto, acesso off-road e chances reais de avistar os Big Five.",
  },
  {
    title: "Guia acompanhante desde o Brasil",
    desc: "Embarque em Guarulhos com a equipe Create Travel e siga acompanhado em português do check-in ao retorno.",
  },
  {
    title: "Voos South African Airways",
    desc: "Companhia bandeira sul-africana, voo direto GRU-JNB e clima de hospitalidade africana desde a decolagem.",
  },
  {
    title: "Johanesburgo & Soweto",
    desc: "Museu Casa Mandela, Vilakazi Street e Hector Pieterson — a história do apartheid contada de dentro.",
  },
  {
    title: "Cape Town & Cabo da Boa Esperança",
    desc: "Table Mountain, Chapman’s Peak, pinguins africanos em Simon’s Town e o encontro de dois oceanos.",
  },
  {
    title: "Sabores e vinhos do Cabo",
    desc: "Bobotie, braai sob o céu estrelado e opcional pelos vinhedos de Stellenbosch e Franschhoek.",
  },
];

const itinerary = [
  {
    day: "Dia 1 — 07/09 (seg)",
    title: "São Paulo → Johanesburgo",
    points: [
      "Apresentação no Aeroporto de Guarulhos",
      "Encontro com o guia acompanhante",
      "Voo SAA SA 223 às 17h05 · pernoite a bordo",
    ],
  },
  {
    day: "Dia 2 — 08/09 (ter)",
    title: "Johanesburgo",
    points: [
      "Chegada às 07h05 e traslado ao hotel",
      "Apartamentos já disponíveis · manhã para descanso",
      "Tarde de visita a Johanesburgo e Soweto",
    ],
  },
  {
    day: "Dia 3 — 09/09 (qua)",
    title: "Johanesburgo → Região do Kruger Park",
    points: [
      "Travessia pela província de Mpumalanga",
      "Blyde River Canyon e Bourke’s Luck Potholes",
      "Almoço em rota · jantar e hospedagem no lodge",
    ],
  },
  {
    day: "Dia 4 — 10/09 (qui)",
    title: "Reserva Privada no Kruger",
    points: [
      "Pensão completa no lodge",
      "Safári fotográfico ao amanhecer em 4x4 aberto",
      "Tempo livre · safári ao entardecer",
    ],
  },
  {
    day: "Dia 5 — 11/09 (sex)",
    title: "Kruger → Johanesburgo → Cidade do Cabo",
    points: [
      "Safári ao amanhecer · café da manhã",
      "Traslado a Joanesburgo com almoço piquenique",
      "Voo SA 375 às 21h20 · chegada Cape Town 23h35",
    ],
  },
  {
    day: "Dia 6 — 12/09 (sáb)",
    title: "Cidade do Cabo",
    points: [
      "City tour pelo Cabo: Table Mountain (teleférico*)",
      "Castelo da Boa Esperança e Museu SA",
      "Tarde livre · hospedagem",
    ],
  },
  {
    day: "Dia 7 — 13/09 (dom)",
    title: "Península do Cabo",
    points: [
      "Hout Bay e Chapman’s Peak Drive",
      "Reserva do Cabo da Boa Esperança",
      "Pinguins africanos em Simon’s Town · almoço incluído",
    ],
  },
  {
    day: "Dia 8 — 14/09 (seg)",
    title: "Cidade do Cabo (dia livre)",
    points: [
      "Sugestão opcional: tour pelos vinhedos do Cabo",
      "Stellenbosch e Franschhoek com degustações",
      "Hospedagem",
    ],
  },
  {
    day: "Dia 9 — 15/09 (ter)",
    title: "Cidade do Cabo → São Paulo",
    points: [
      "Traslado ao aeroporto",
      "Voo SA 226 às 12h50 com destino a Guarulhos",
      "Chegada às 16h45 · fim dos nossos serviços",
    ],
  },
];

const included = [
  "Bilhete aéreo São Paulo / Johanesburgo / Cidade do Cabo / São Paulo (South African Airways) em classe econômica com 1 mala de 23 kg",
  "7 noites de hospedagem em hotéis de primeira categoria com café da manhã",
  "Traslados privados com assistência",
  "Guia acompanhante desde São Paulo e guia local em português em Johanesburgo e Cidade do Cabo",
  "Meio dia em Johanesburgo com Soweto, dia inteiro na Cidade do Cabo e Cabo da Boa Esperança",
  "Entradas: Museu Casa Mandela, Constitution Court, Castelo da Boa Esperança e Museu SA",
  "Três safáris fotográficos em 4x4 aberto com ranger e guia em português/espanhol",
  "Pensão completa no Mdluli Safari Lodge (almoços e jantares incluídos no Kruger)",
  "Tag de rastreamento de bagagem",
  "Acesso à Sala VIP W Premium no aeroporto de Guarulhos",
  "Cartão de assistência com cobertura médica de US$ 75.000",
  "Seguro cancelamento Plus Reason até 85 anos: US$ 3.000",
];

const notIncluded = [
  "Taxas de embarque",
  "IOF",
  "Taxas de aeroporto e combustível (USD 251)",
  "Bebidas nas refeições",
  "Passeios opcionais (Vinhedos do Cabo, etc.)",
  "Gorjetas a guias, motoristas, garçons e carregadores",
  "Despesas pessoais (frigobar, telefonemas, lavanderia, etc.)",
  "Taxas, impostos e afins",
];

const faqs = [
  {
    q: "Qual a condição de pagamento?",
    a: "25% de entrada no ato da reserva e o saldo (75%) em 9 parcelas sem juros no cartão de crédito. Valores em dólar, sujeitos a disponibilidade e confirmação aérea.",
  },
  {
    q: "Quais documentos e vacinas são necessários?",
    a: "Passaporte com validade mínima de 6 meses a partir da data de retorno. Brasileiros não precisam de visto para a África do Sul. Vacina contra febre amarela é obrigatória.",
  },
  {
    q: "Crianças podem participar do safári?",
    a: "Sim, a idade mínima é 6 anos — no Mdluli Safari Lodge, crianças são consideradas de 6 a 11 anos. A participação fica sujeita a avaliação do guia.",
  },
  {
    q: "Como é a experiência do safári com guia em português?",
    a: "Os safáris são conduzidos por rangers experientes em 4x4 aberto, com acompanhamento de guias falando português. Isso traz mais conforto, segurança e melhor compreensão da fauna e da cultura local.",
  },
  {
    q: "Posso viajar sozinho(a)? Tem suplemento single?",
    a: "Sim. Trabalhamos com apartamento duplo, triplo ou individual. Podemos emparelhar você com outra pessoa do grupo do mesmo gênero para evitar o suplemento single.",
  },
  {
    q: "Qual o tamanho do grupo?",
    a: "Grupo organizado pela Create Travel com guia acompanhante desde São Paulo. Vagas limitadas — recomenda-se reserva antecipada.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: "Grupo África do Sul 2026 — Create Travel",
  description:
    "Grupo organizado de 9 dias pela África do Sul: Johanesburgo, Soweto, Blyde River Canyon, safári no Kruger e Cidade do Cabo. Saída 07/09/2026 com guia acompanhante desde o Brasil e voos South African Airways.",
  image: heroImg,
  touristType: "Safári, natureza, cultura, história",
  itinerary: itinerary.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `${d.day} — ${d.title}`,
  })),
  offers: {
    "@type": "Offer",
    price: "5298.00",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    validThrough: "2026-09-07",
  },
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
};

const GrupoAfricaDoSul2026 = () => {
  const ctaLink = generateWhatsAppLink(whatsappParams);

  return (
    <div className="min-h-screen">
      <SEO
        title="Grupo África do Sul 2026 — Safári no Kruger & Cape Town | Create Travel"
        description="9 dias pela África do Sul em grupo com guia do Brasil: Johanesburgo, Soweto, safári no Kruger e Cidade do Cabo. Saída 07/09/2026 pela South African Airways. Entrada 25% + 9x sem juros."
        canonicalPath="/grupos/africa-do-sul-2026"
        ogImage={heroImg}
        ogType="article"
        jsonLd={jsonLd}
        keywords="viagem em grupo África do Sul 2026, safári Kruger com guia do Brasil, Cape Town em português, Soweto Mandela, Big Five Mdluli Lodge, Create Travel África"
      />
      <Header />
      <WhatsAppButton variant="float" params={whatsappParams} />

      {/* Hero */}
      <section className="relative h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Elefantes africanos ao amanhecer na savana, com Table Mountain ao fundo, África do Sul"
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
              <Sparkles size={14} /> Saída confirmada · Vagas limitadas
            </div>
            <p className="text-caption text-gold mb-4">
              Grupo · 7 a 15 de setembro de 2026
            </p>
            <h1 className="heading-hero text-white mb-6">
              África do Sul
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light">
              9 dias entre Johanesburgo, Soweto, o safári no Kruger e a beleza
              da Cidade do Cabo — com guia do Brasil e voos South African.
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
            { icon: Calendar, label: "Datas", value: "07 a 15/09/2026" },
            { icon: Users, label: "Perfil", value: "Grupo com guia do Brasil" },
            { icon: Plane, label: "Voos", value: "South African Airways" },
            { icon: Hotel, label: "Hospedagem", value: "Hotéis 1ª categoria + lodge" },
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
              África do Sul em sua versão mais autêntica
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
            <h2 className="heading-section mb-6">
              Voos pela South African Airways
            </h2>
            <p className="text-white/85 leading-relaxed mb-4">
              Classe econômica com 1 bagagem despachada de até 23 kg. Voo direto
              entre Guarulhos e Johanesburgo, com voo doméstico SAA até Cape
              Town e retorno também direto até São Paulo.
            </p>
          </div>
          <div className="space-y-4">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Ida
              </p>
              <p className="font-serif text-lg">
                GRU → Johanesburgo
              </p>
              <p className="text-white/75 text-sm mt-1">
                07/09 SA 223 17h05 — chegada Johanesburgo 08/09 às 07h05
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Doméstico
              </p>
              <p className="font-serif text-lg">
                Johanesburgo → Cidade do Cabo
              </p>
              <p className="text-white/75 text-sm mt-1">
                11/09 SA 375 21h20 — chegada 23h35
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Volta
              </p>
              <p className="font-serif text-lg">
                Cidade do Cabo → GRU
              </p>
              <p className="text-white/75 text-sm mt-1">
                15/09 SA 226 12h50 — chegada GRU 16h45
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {[
              { city: "Johanesburgo", hotel: "Onomo Sandton" },
              { city: "Região do Kruger", hotel: "Mdluli Safari Lodge" },
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
                <p className="font-serif text-lg font-semibold text-foreground">
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
            A partir de US$ 5.298 por pessoa
          </h2>
          <p className="text-white/85 mb-8">
            Em acomodação dupla. Valores em dólar, por pessoa, acrescidos de IOF
            e taxas de aeroporto e combustível (USD 251). Sujeitos a
            disponibilidade e confirmação aérea no momento da reserva. Crianças
            a partir de USD 3.169 + IOF 71.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-8 text-left">
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto triplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.274</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 137</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6 ring-2 ring-gold/60">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto duplo
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 5.298</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 138</p>
            </div>
            <div className="bg-white/10 border border-white/20 rounded-xl p-6">
              <p className="text-xs uppercase tracking-wider text-gold mb-2">
                Apto individual
              </p>
              <p className="font-serif text-2xl font-semibold">US$ 6.957</p>
              <p className="text-white/70 text-xs mt-1">+ IOF USD 190</p>
            </div>
          </div>

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
            Vagas limitadas — grupo com guia do Brasil
          </h2>
          <p className="text-muted-foreground mb-8">
            Fale com um consultor Create Travel e reserve sua vaga no Grupo
            África do Sul 2026. Atendimento personalizado pelo WhatsApp.
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

export default GrupoAfricaDoSul2026;
