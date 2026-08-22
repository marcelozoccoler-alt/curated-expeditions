import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ship, MapPin, CalendarDays, Check, Sparkles, Globe } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ShareButtons } from "@/components/ShareButtons";
import { getRiverCruise, riverCruises, waterwayLabel } from "@/lib/riverCruises";
import { CONTACT } from "@/lib/types";
import heroImage from "@/assets/cruzeiros-fluviais.jpg";

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const CruzeiroFluvial = () => {
  const { slug } = useParams<{ slug: string }>();
  const cruise = slug ? getRiverCruise(slug) : undefined;
  if (!cruise) return <Navigate to="/cruzeiros-fluviais" replace />;

  const url = `${DOMAIN}/cruzeiros-fluviais/${cruise.slug}`;

  const tripLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `${url}#trip`,
    name: cruise.name,
    description: cruise.metaDescription,
    url,
    touristType: "Cruzeiro fluvial",
    itinerary: cruise.itinerary.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${d.dia}: ${d.porto}`,
      description: d.descricao,
    })),
    provider: { "@id": "https://createtravel.tur.br/#organization" },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: `${DOMAIN}/` },
      { "@type": "ListItem", position: 2, name: "Cruzeiros fluviais", item: `${DOMAIN}/cruzeiros-fluviais` },
      { "@type": "ListItem", position: 3, name: cruise.name, item: url },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    mainEntity: cruise.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const related = riverCruises.filter((c) => c.slug !== cruise.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={cruise.metaTitle}
        description={cruise.metaDescription}
        canonicalPath={`/cruzeiros-fluviais/${cruise.slug}`}
        jsonLd={[tripLd, breadcrumbLd, faqLd]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="relative pt-32 pb-16 bg-gradient-hero text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src={heroImage} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container-editorial relative">
          <Breadcrumbs
            items={[
              { label: "Cruzeiros fluviais", href: "/cruzeiros-fluviais" },
              { label: cruise.name },
            ]}
          />
          <div className="max-w-3xl mt-6">
            <p className="text-caption text-gold mb-4">
              {cruise.region === "Grécia & Mediterrâneo" ? "Cruzeiro marítimo" : "AmaWaterways"} · {waterwayLabel(cruise.river)}
            </p>
            <div className="gold-line mb-6" />
            <h1 className="heading-hero mb-5">{cruise.name}</h1>
            <p className="text-lg text-primary-foreground/85 font-light">{cruise.intro}</p>

            <div className="grid sm:grid-cols-2 gap-3 mt-8 text-sm text-primary-foreground/90">
              <span className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                {cruise.route}
              </span>
              <span className="flex items-center gap-2">
                <CalendarDays size={16} className="text-gold" />
                {cruise.duration}
              </span>
              <span className="flex items-center gap-2">
                <Ship size={16} className="text-gold" />
                {cruise.ships.join(", ")}
              </span>
              <span className="flex items-center gap-2">
                <Globe size={16} className="text-gold" />
                {cruise.countries.join(" · ")}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <WhatsAppButton
                variant="cta"
                params={{ type: "Roteiro", name: `Cruzeiro ${cruise.name} — AmaWaterways` }}
                label="Solicitar cotação"
              />
              <span className="text-sm text-primary-foreground/80">{cruise.priceFrom}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding flex-1">
        <div className="container-editorial grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h2 className="heading-section text-foreground mb-6">Destaques da rota</h2>
              <ul className="space-y-3">
                {cruise.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-[15px] text-foreground/85">
                    <Sparkles size={18} className="shrink-0 mt-0.5 text-gold" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="heading-section text-foreground mb-6">Roteiro dia a dia</h2>
              <div className="space-y-4">
                {cruise.itinerary.map((d, i) => (
                  <motion.div
                    key={d.dia + d.porto}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 8) * 0.03 }}
                    className="p-5 rounded-lg border border-border bg-card"
                  >
                    <p className="text-xs uppercase tracking-wider text-gold mb-1">{d.dia}</p>
                    <h3 className="font-serif text-lg text-foreground mb-1">{d.porto}</h3>
                    <p className="text-[15px] text-foreground/80 leading-relaxed">{d.descricao}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <FAQSection faqs={cruise.faq} />

            <div className="pt-2 border-t border-border">
              <ShareButtons
                url={url}
                title={`${cruise.name} — ${cruise.duration} · ${cruise.route}`}
                summary="Roteiro com curadoria Create Travel"
              />
            </div>
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="font-serif text-lg text-foreground mb-4">O que está incluído</h2>
              <ul className="space-y-2.5">
                {cruise.includes.map((inc) => (
                  <li key={inc} className="flex gap-2.5 text-sm text-foreground/85">
                    <Check size={16} className="shrink-0 mt-0.5 text-gold" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="font-serif text-lg text-foreground mb-4">Compartilhar esta rota</h2>
              <ShareButtons
                url={url}
                title={`${cruise.name} — ${cruise.duration} · ${cruise.route}`}
                summary="Roteiro com curadoria Create Travel"
              />
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="font-serif text-lg text-foreground mb-2">Melhor época</h2>
              <p className="text-sm text-foreground/80 leading-relaxed">{cruise.bestTime}</p>
            </div>

            <div className="p-6 rounded-lg border border-border bg-card">
              <h2 className="font-serif text-lg text-foreground mb-4">Outras rotas fluviais</h2>
              <ul className="space-y-3">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      to={`/cruzeiros-fluviais/${r.slug}`}
                      className="text-sm text-foreground/85 hover:text-gold transition-colors"
                    >
                      {r.name}
                      <span className="block text-xs text-muted-foreground">
                        {waterwayLabel(r.river)} · {r.duration}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CruzeiroFluvial;
