import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Award, Users, Compass, ShieldCheck } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT } from "@/lib/types";

const FAQS = [
  {
    q: "A Create Travel atende presencialmente em São Paulo?",
    a: "Sim. Nosso escritório fica em Planalto Paulista, zona sul, com atendimento presencial mediante agendamento. Também atendemos 100% remoto via WhatsApp, e-mail e videoconferência.",
  },
  {
    q: "Quais destinos a agência opera?",
    a: "Brasil inteiro, América do Sul, África, Europa, Ásia, Oceania e Antártida. Somos especialistas em roteiros sob medida — não vendemos pacote pronto.",
  },
  {
    q: "Qual o ticket médio dos roteiros?",
    a: "Variam conforme destino. Roteiros nacionais a partir de R$ 5 mil/pessoa, internacionais a partir de R$ 12 mil/pessoa. Personalizamos cada proposta ao perfil e orçamento.",
  },
  {
    q: "Vocês são CADASTUR?",
    a: `Sim. CADASTUR ${CONTACT.cadastur}, emitido pelo Ministério do Turismo, com registro completo na ABAV.`,
  },
];

const AgenciaSaoPaulo = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: "Create Travel",
    url: `${CONTACT.domain}/agencia-de-viagens-sao-paulo`,
    telephone: CONTACT.whatsapp,
    email: CONTACT.email,
    areaServed: { "@type": "City", name: "São Paulo" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua José Libero, 80",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    priceRange: "$$$",
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Agência de viagens em São Paulo — Roteiros sob medida | Create Travel"
        description="Agência de viagens em São Paulo especializada em roteiros autorais e personalizados. Atendimento humano, curadoria CADASTUR e suporte 24/7."
        canonicalPath="/agencia-de-viagens-sao-paulo"
        keywords="agencia de viagens sao paulo, agencia de viagens sp, agencia viagem personalizada sp"
        jsonLd={ld}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="pt-32 pb-16 bg-gradient-hero text-white">
        <div className="container-editorial text-center max-w-3xl mx-auto">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-caption text-gold mb-3">Atendimento em São Paulo · CADASTUR</p>
          <h1 className="heading-hero mb-5">Agência de viagens em São Paulo com curadoria autoral</h1>
          <p className="text-lg text-white/85 font-light mb-8">
            Roteiros sob medida para viajantes exigentes — famílias, casais, grupos e empresas.
            Atendimento presencial em Planalto Paulista ou remoto pelo Brasil inteiro.
          </p>
          <WhatsAppButton
            variant="cta"
            label="Falar com um consultor agora"
            params={{ type: "Roteiro", name: "Agência São Paulo" }}
            className="text-lg px-8 py-4"
          />
        </div>
      </section>

      <div className="container-editorial pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Agência São Paulo" }]} />
      </div>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Award, t: "CADASTUR", d: `Registro ${CONTACT.cadastur}` },
              { icon: Users, t: "+1.000 viagens", d: "Operadas em mais de 60 países" },
              { icon: Compass, t: "Curadoria autoral", d: "Hospedagens testadas pessoalmente" },
              { icon: ShieldCheck, t: "Suporte 24/7", d: "Antes, durante e depois da viagem" },
            ].map((b, i) => (
              <motion.div
                key={b.t}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="text-center p-6 bg-card border border-border rounded-xl"
              >
                <b.icon size={28} className="text-gold mx-auto mb-3" />
                <h3 className="font-serif text-lg text-foreground mb-1">{b.t}</h3>
                <p className="text-sm text-muted-foreground">{b.d}</p>
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground leading-relaxed">
            <h2 className="heading-section text-foreground">
              Por que somos referência em São Paulo
            </h2>
            <p>
              A Create Travel é uma agência de viagens em São Paulo dedicada exclusivamente a roteiros sob medida.
              Não vendemos pacote pronto — desenhamos cada viagem a partir do briefing do cliente: perfil, ritmo,
              propósito, orçamento e o que torna esta data única.
            </p>
            <p>
              Nossos consultores conhecem pessoalmente cada hospedagem que indicam. Operamos família, casais,
              grupos privados, lua de mel, destination wedding, incentivo corporativo e expedições de aventura.
              Atendemos todo o estado de São Paulo (capital, ABC, Campinas, Sorocaba, Ribeirão Preto, Santos)
              e o Brasil inteiro de forma remota.
            </p>
            <p>
              Trabalhamos com fornecedores diretos e contratos transparentes. Cada cliente recebe um anfitrião
              Create Travel disponível 24/7 durante a viagem — para que a única coisa que você precise fazer seja viajar.
            </p>

            <h2 className="heading-section text-foreground mt-12">Onde nos encontrar</h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose">
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-card border border-border rounded-xl flex items-start gap-3 hover:border-gold transition-colors"
              >
                <Phone size={20} className="text-gold mt-1" />
                <div>
                  <div className="font-semibold text-foreground">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">{CONTACT.whatsapp}</div>
                </div>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="p-5 bg-card border border-border rounded-xl flex items-start gap-3 hover:border-gold transition-colors"
              >
                <Mail size={20} className="text-gold mt-1" />
                <div>
                  <div className="font-semibold text-foreground">E-mail</div>
                  <div className="text-sm text-muted-foreground">{CONTACT.email}</div>
                </div>
              </a>
              <div className="p-5 bg-card border border-border rounded-xl flex items-start gap-3 sm:col-span-2">
                <MapPin size={20} className="text-gold mt-1" />
                <div>
                  <div className="font-semibold text-foreground">Escritório São Paulo</div>
                  <div className="text-sm text-muted-foreground">{CONTACT.address}</div>
                  <div className="text-xs text-muted-foreground mt-1">Atendimento presencial mediante agendamento</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-3xl mx-auto mt-16">
            <FAQSection faqs={FAQS} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AgenciaSaoPaulo;
