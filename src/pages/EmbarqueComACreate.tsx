import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plane,
  ShieldCheck,
  Users,
  Languages,
  HeadphonesIcon,
  Sparkles,
  MapPin,
  CreditCard,
  Calendar,
  Compass,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import grupoGreciaImg from "@/assets/grupo-grecia-2026.jpg";
import grupoMarrocosImg from "@/assets/grupo-marrocos-2026.jpg";
import grupoPatagoniaImg from "@/assets/grupo-patagonia-chilena-2026.jpg";
import grupoEquadorImg from "@/assets/grupo-equador-galapagos-2026.jpg";
import grupoTailandiaImg from "@/assets/grupo-tailandia-2026.jpg";
import grupoCroaciaImg from "@/assets/grupo-croacia-balcas-2026.jpg";
import grupoAfricaImg from "@/assets/grupo-africa-do-sul-2026.jpg";
import grupoEgitoImg from "@/assets/grupo-egito-2026.jpg";
import grupoIslandiaImg from "@/assets/grupo-islandia-2026.jpg";

const DEPARTURES = [
  {
    href: "/grupos/africa-do-sul-2026",
    img: grupoAfricaImg,
    tag: "07 a 15/09/2026 · 9 dias",
    title: "África do Sul",
    subtitle: "Johanesburgo · Soweto · Kruger · Cape Town",
    desc: "Safári em reserva privada no Kruger, Soweto e o legado de Mandela, Table Mountain e o Cabo da Boa Esperança. Voos South African Airways e guia desde o Brasil.",
    fromPrice: "A partir de US$ 5.298 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/egito-2026",
    img: grupoEgitoImg,
    tag: "29/09 a 12/10/2026 · 14 dias",
    title: "Egito",
    subtitle: "Cairo · GEM · Luxor · Cruzeiro pelo Nilo · Sharm El Sheikh",
    desc: "Pirâmides de Gizé, o novíssimo Grande Museu Egípcio, cruzeiro pelo Nilo até Assuã e descanso no Mar Vermelho. Voos Turkish Airlines e guia desde o Brasil.",
    fromPrice: "A partir de US$ 4.598 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/tailandia-2026",
    img: grupoTailandiaImg,
    tag: "12 a 26/11/2026 · 15 dias",
    title: "Tailândia · Festival das Lanternas",
    subtitle: "Phuket · Phi Phi · Bangkok · Ayutthaya · Sukhothai · Chiang Mai",
    desc: "Praias do Mar de Andaman, templos milenares e a noite mágica do Yi Peng em Chiang Mai. Voos Emirates e guia desde o Brasil.",
    fromPrice: "A partir de US$ 5.978 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/equador-galapagos-2026",
    img: grupoEquadorImg,
    tag: "12 a 22/10/2026 · 11 dias",
    title: "Equador & Galápagos",
    subtitle: "Quito · Cotopaxi · Galápagos · Guayaquil",
    desc: "Dos Andes ao Pacífico: tartarugas gigantes, iguanas marinhas e a Avenida dos Vulcões com voos LATAM e guia desde o Brasil.",
    fromPrice: "A partir de US$ 3.997 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/croacia-balcas-2026",
    img: grupoCroaciaImg,
    tag: "11 a 22/10/2026 · 12 dias",
    title: "Croácia, Bósnia & Montenegro",
    subtitle: "Zagreb · Plitvice · Split · Hvar · Mostar · Dubrovnik · Kotor",
    desc: "Outono dourado nos Bálcãs: lagos da UNESCO, muralhas medievais e o único fiorde do Mediterrâneo, com voos Turkish e guia desde o Brasil.",
    fromPrice: "A partir de € 4.338 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/patagonia-chilena-2026",
    img: grupoPatagoniaImg,
    tag: "04 a 11/10/2026 · 8 dias",
    title: "Patagônia Chilena",
    subtitle: "Santiago · Punta Arenas · Torres del Paine · Glaciares",
    desc: "Primavera no fim do mundo: granito, gelo e estepes patagônicas com voos LATAM e guia desde o Brasil.",
    fromPrice: "A partir de US$ 3.498 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/grecia-2026",
    img: grupoGreciaImg,
    tag: "27/09 a 09/10/2026 · 13 dias",
    title: "Grécia Eterna",
    subtitle: "Atenas · Delfos · Meteora · Santorini · Mykonos",
    desc: "Entre deuses, ilhas e história. Voos Iberia via Madri, hotéis 1ª categoria e guia acompanhante desde São Paulo.",
    fromPrice: "A partir de € 4.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/marrocos-2026",
    img: grupoMarrocosImg,
    tag: "18 a 26/11/2026 · 9 dias",
    title: "Marrocos Imperial",
    subtitle: "Rabat · Chefchaouen · Fez · Saara · Marrakech",
    desc: "Cidades imperiais, a cidade azul e uma noite nas dunas de Erg Chebbi. Grupo pequeno com curadoria Create Travel.",
    fromPrice: "A partir de R$ 18.295 por pessoa (apto duplo)",
    status: "Vagas limitadas",
  },
];

const BENEFITS = [
  {
    icon: Plane,
    title: "Guia acompanhante desde o Brasil",
    desc: "Você embarca em Guarulhos com a equipe Create Travel e segue acompanhado do check-in à volta. Nada de chegar sozinho no destino.",
  },
  {
    icon: Languages,
    title: "Tudo em português",
    desc: "Guias, traslados, briefings e assistência em português durante toda a viagem — para você só se preocupar em viver a experiência.",
  },
  {
    icon: Users,
    title: "Grupos pequenos e selecionados",
    desc: "Saídas com número limitado de viajantes, perfil compatível e ritmo equilibrado entre cultura, conforto e tempo livre.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e suporte 24/7",
    desc: "Seguro médico internacional, seguro cancelamento e suporte da equipe Create Travel antes, durante e depois da viagem.",
  },
  {
    icon: CreditCard,
    title: "Pagamento facilitado",
    desc: "Entrada de 25% e saldo em até 9 parcelas sem juros no cartão de crédito. Sem surpresas e sem letras miúdas.",
  },
  {
    icon: Sparkles,
    title: "Curadoria autoral",
    desc: "Hotéis testados pessoalmente, visitas guiadas com especialistas locais e experiências que vão além do óbvio em cada destino.",
  },
];

const HOW = [
  {
    icon: Calendar,
    title: "Escolha a saída",
    desc: "Confira as datas confirmadas abaixo e selecione o destino que combina com você.",
  },
  {
    icon: HeadphonesIcon,
    title: "Fale com um consultor",
    desc: "Tire dúvidas pelo WhatsApp e receba o dossiê completo da viagem em PDF.",
  },
  {
    icon: CreditCard,
    title: "Garanta sua vaga",
    desc: "Pague 25% de entrada e parcele o saldo em 9x sem juros no cartão.",
  },
  {
    icon: Plane,
    title: "Embarque tranquilo",
    desc: "Encontre o grupo em Guarulhos e siga acompanhado do início ao fim.",
  },
];

const FAQS = [
  {
    q: "O que significa 'grupo com guia desde o Brasil'?",
    a: "Significa que um guia acompanhante da Create Travel embarca com o grupo no Brasil (geralmente em Guarulhos) e segue com vocês durante toda a viagem — voos, conexões, traslados, passeios e retorno. Você nunca está sozinho.",
  },
  {
    q: "Qual o perfil dos viajantes nessas saídas?",
    a: "Adultos e famílias que valorizam conforto, segurança e companhia em destinos internacionais. Boa parte do grupo viaja em casal, com amigos ou sozinho(a) buscando conhecer pessoas novas com afinidade.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Entrada de 25% no ato da reserva e o saldo de 75% parcelado em até 9 vezes sem juros no cartão de crédito. Valores em reais ou euros conforme a saída.",
  },
  {
    q: "Posso viajar sozinho(a)?",
    a: "Sim — muitos dos nossos viajantes embarcam sozinhos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero.",
  },
  {
    q: "Quantas pessoas viajam por grupo?",
    a: "Grupos pequenos, normalmente entre 12 e 25 viajantes. O número exato varia por saída — sempre pensado para garantir agilidade, atenção e experiências mais próximas do destino.",
  },
  {
    q: "E se eu quiser uma saída privativa, só com o meu grupo?",
    a: "Também desenhamos viagens privativas sob medida (família, amigos, casamento, incentivo, retiro). Conheça a página Crie seu grupo para saber como funciona a curadoria personalizada.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Embarque com a Create — Grupos com guia desde o Brasil",
  serviceType: "Viagens em grupo acompanhadas",
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
  areaServed: "Brasil",
  description:
    "Saídas em grupo internacionais com guia acompanhante desde o Brasil. Tudo em português, suporte 24/7, entrada de 25% e saldo em até 9x sem juros no cartão.",
  offers: DEPARTURES.map((d) => ({
    "@type": "Offer",
    name: d.title,
    url: `${CONTACT.domain}${d.href}`,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const EmbarqueComACreate = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Embarque com a Create — Viagens em grupo com guia desde o Brasil"
        description="Saídas em grupo internacionais com guia acompanhante desde o Brasil, tudo em português e suporte 24/7. Grécia, Marrocos e mais. Entrada 25% + 9x sem juros."
        canonicalPath="/embarque-com-a-create"
        ogImage={grupoGreciaImg}
        ogType="website"
        jsonLd={[jsonLd, faqJsonLd]}
        keywords="viagem em grupo com guia do Brasil, grupos acompanhados, viagem em grupo internacional, saídas em grupo 2026, viagem em grupo em português, Create Travel grupos"
      />
      <Header />
      <WhatsAppButton variant="float" params={{ type: "Roteiro", name: "Embarque com a Create — Grupos com guia desde o Brasil" }} />

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={grupoGreciaImg}
            alt="Grupo de viajantes em Santorini ao pôr do sol"
            className="w-full h-full object-cover"
            loading="eager"
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
              <Plane size={14} /> Saídas confirmadas · Vagas limitadas
            </div>
            <p className="text-caption text-gold mb-4">
              Grupos com guia desde o Brasil
            </p>
            <h1 className="heading-hero text-white mb-6">
              Embarque com a Create
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl">
              Saídas internacionais em grupo, com guia acompanhante embarcando
              junto com você no Brasil. Tudo em português, sem solidão, sem
              preocupação com logística — só a viagem.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#saidas" className="btn-accent text-lg px-8 py-4">
                Ver próximas saídas <ArrowRight size={18} />
              </a>
              <WhatsAppButton
                variant="cta"
                label="Falar com um consultor"
                params={{ type: "Roteiro", name: "Embarque com a Create — Grupos com guia desde o Brasil" }}
                className="text-lg px-8 py-4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-editorial pt-8">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Embarque com a Create" },
          ]}
        />
      </div>

      {/* Por que viajar acompanhado */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">
              Por que viajar com a Create
            </p>
            <h2 className="heading-section text-foreground mb-5">
              Viajar acompanhado, viver com leveza
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Para quem quer conhecer o mundo sem abrir mão da segurança de ter
              um guia do Brasil ao lado — do check-in em Guarulhos ao último
              brinde no destino.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-7 rounded-xl border border-border shadow-card"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-5">
                  <b.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximas saídas */}
      <section id="saidas" className="section-padding bg-muted">
        <div className="container-editorial">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Próximas saídas</p>
            <h2 className="heading-section text-foreground mb-4">
              Grupos com guia do Brasil · 2026
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Saídas confirmadas com vagas limitadas. Entrada de 25% e saldo em
              até 9 parcelas sem juros no cartão de crédito.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {DEPARTURES.map((d) => (
              <Link
                key={d.href}
                to={d.href}
                className="group block bg-card border border-border rounded-xl overflow-hidden shadow-card hover:border-gold hover:shadow-xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={d.img}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-emerald/95 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {d.status}
                  </div>
                </div>
                <div className="p-7">
                  <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-3">
                    <Calendar size={14} /> {d.tag}
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {d.title}
                  </h3>
                  <p className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <MapPin size={14} className="text-gold" />
                    {d.subtitle}
                  </p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                    {d.desc}
                  </p>
                  <p className="text-sm font-semibold text-foreground mb-4">
                    {d.fromPrice}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all">
                    Ver detalhes da saída
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Quer ser avisado(a) das próximas saídas em primeira mão?
            </p>
            <WhatsAppButton
              variant="cta"
              label="Quero receber as próximas saídas"
              params={{ type: "Roteiro", name: "Quero receber as próximas saídas em grupo com guia do Brasil" }}
            />
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Como funciona</p>
            <h2 className="heading-section text-foreground mb-5">
              Reservar é simples — embarcar é leve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-7 rounded-xl shadow-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-5 mx-auto">
                  <step.icon size={22} className="text-white" />
                </div>
                <div className="text-xs font-semibold text-gold tracking-wider mb-2">
                  ETAPA 0{i + 1}
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-caption text-gold mb-4">Perguntas frequentes</p>
            <h2 className="heading-section text-foreground">
              Tudo o que você precisa saber antes de embarcar
            </h2>
          </div>
          <FAQSection faqs={FAQS} />
        </div>
      </section>

      {/* Crie seu grupo cross-link */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 text-center">
            <Compass size={32} className="text-gold mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Prefere um grupo só seu?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Família, amigos, casamento, incentivo corporativo ou retiro
              espiritual: também desenhamos viagens privativas em grupo com
              curadoria autoral e logística impecável.
            </p>
            <Link to="/crie-seu-grupo" className="btn-outline inline-flex items-center gap-2">
              Conhecer Crie seu grupo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <h2 className="heading-section mb-6">
            Sua próxima viagem começa em Guarulhos
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Fale com a Create Travel e garanta sua vaga em uma das próximas
            saídas em grupo com guia desde o Brasil.
          </p>
          <a
            href={generateWhatsAppLink({ type: "Roteiro", name: "Embarque com a Create — Grupos com guia desde o Brasil" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-10 py-5 inline-flex items-center gap-2"
          >
            Falar no WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmbarqueComACreate;
