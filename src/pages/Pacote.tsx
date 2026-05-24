import { useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, MapPin, Calendar, Sparkles } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getPacote } from "@/lib/comercialPacotes";
import { CONTACT } from "@/lib/types";

const Pacote = () => {
  const { slug } = useParams<{ slug: string }>();
  const pacote = slug ? getPacote(slug) : undefined;
  if (!pacote) return <Navigate to="/destinos" replace />;

  const url = `${CONTACT.domain}/pacote/${pacote.slug}`;
  const tripLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pacote.h1,
    description: pacote.metaDescription,
    itinerary: pacote.roteiro.map((r, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${r.dias}: ${r.titulo}`,
    })),
    provider: { "@type": "TravelAgency", name: "Create Travel", url: CONTACT.domain },
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: CONTACT.domain },
      { "@type": "ListItem", position: 2, name: "Pacotes", item: `${CONTACT.domain}/destinos` },
      { "@type": "ListItem", position: 3, name: pacote.destinationName, item: url },
    ],
  };
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pacote.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={pacote.title}
        description={pacote.metaDescription}
        canonicalPath={`/pacote/${pacote.slug}`}
        keywords={pacote.keywords}
        jsonLd={[tripLd, breadcrumbLd, faqLd]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="pt-32 pb-16 bg-gradient-hero text-white">
        <div className="container-editorial max-w-4xl">
          <div className="gold-line mb-6" />
          <p className="text-caption text-gold mb-3">Pacote autoral · Create Travel</p>
          <h1 className="heading-hero mb-5">{pacote.h1}</h1>
          <p className="text-lg text-white/85 font-light mb-8 max-w-2xl">{pacote.intro}</p>
          <div className="flex flex-wrap gap-4 text-sm">
            <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
              <Calendar size={16} className="text-gold" /> {pacote.duracoes.join(" · ")}
            </span>
            <span className="px-4 py-2 bg-white/10 rounded-full flex items-center gap-2">
              <Sparkles size={16} className="text-gold" /> {pacote.precoEstimado}
            </span>
          </div>
        </div>
      </section>

      <div className="container-editorial pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Destinos", href: "/destinos" },
            { label: pacote.destinationName },
          ]}
        />
      </div>

      <section className="section-padding">
        <div className="container-editorial max-w-4xl space-y-16">
          <div>
            <h2 className="heading-section text-foreground mb-6">
              Por que escolher Create Travel
            </h2>
            <ul className="space-y-3">
              {pacote.porqueCreate.map((b) => (
                <li key={b} className="flex gap-3 text-lg text-muted-foreground">
                  <Check className="text-gold flex-shrink-0 mt-1" size={20} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-muted p-8 rounded-xl">
            <h2 className="heading-section text-foreground mb-3">Melhor época</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">{pacote.melhorEpoca}</p>
          </div>

          <div>
            <h2 className="heading-section text-foreground mb-8">Roteiro sugerido</h2>
            <div className="space-y-6">
              {pacote.roteiro.map((dia, i) => (
                <motion.div
                  key={dia.dias}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-l-2 border-gold pl-6"
                >
                  <div className="text-xs font-semibold text-gold tracking-wider mb-2">{dia.dias.toUpperCase()}</div>
                  <h3 className="text-xl font-serif text-foreground mb-3">{dia.titulo}</h3>
                  <ul className="space-y-1">
                    {dia.highlights.map((h) => (
                      <li key={h} className="text-muted-foreground flex gap-2">
                        <span className="text-gold">•</span> <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-section text-foreground mb-6">Hospedagens selecionadas</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pacote.hospedagens.map((h) => (
                <div key={h.nome} className="p-6 bg-card border border-border rounded-xl">
                  <div className="flex items-start gap-3 mb-2">
                    <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-serif text-foreground">{h.nome}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.descricao}</p>
                </div>
              ))}
            </div>
          </div>

          <FAQSection faqs={pacote.faq} />

          <div className="bg-gradient-hero text-white p-10 rounded-xl text-center">
            <h2 className="text-3xl font-serif mb-4">Pronto para viver {pacote.destinationName}?</h2>
            <p className="text-white/85 mb-6 max-w-xl mx-auto">
              Solicite uma proposta personalizada. Voltamos em poucos dias com roteiro detalhado, hospedagens e valores.
            </p>
            <WhatsAppButton
              variant="cta"
              label="Solicitar proposta personalizada"
              params={{ type: "Roteiro", name: pacote.whatsappName }}
              className="text-lg px-8 py-4"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pacote;
