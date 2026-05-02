import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, MapPin, Compass, Sparkles, ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { StayCard } from "@/components/StayCard";
import { getDestinationBySlug, destinations } from "@/lib/destinations";
import { stays as allStays } from "@/lib/stays";
import { getTagsByIds } from "@/lib/types";
import { getDestinationImage } from "@/lib/destinationImages";

const DestinoDetail = () => {
  const { "*": slug } = useParams();
  const destination = slug ? getDestinationBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [slug]);

  useEffect(() => {
    if (destination) {
      document.title = `${destination.name} — Create Travel`;
      const desc = document.querySelector('meta[name="description"]');
      if (desc) desc.setAttribute("content", destination.intro.slice(0, 155));
    }
  }, [destination]);

  if (!destination) return <Navigate to="/destinos" replace />;

  const tags = getTagsByIds(destination.tags);
  const heroImage =
    destination.imageOverrideUrl ||
    getDestinationImage(destination.id) ||
    `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=900&fit=crop`;

  const relatedStays = allStays.filter((s) => destination.stays.includes(s.slug));
  const otherInContinent = destinations
    .filter((d) => d.continent === destination.continent && d.id !== destination.id)
    .slice(0, 3);

  // FAQ JSON-LD
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: destination.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <WhatsAppButton variant="float" />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt={`${destination.name}, ${destination.country}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10 pb-12 text-primary-foreground">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-caption text-gold mb-3">
              {destination.continent} · {destination.region}
            </p>
            <h1 className="heading-hero mb-4">{destination.name}</h1>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-primary-foreground/85">
              <span className="flex items-center gap-2">
                <MapPin size={16} /> {destination.country}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={16} /> {destination.bestTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-editorial">
        <Breadcrumbs
          items={[
            { label: "Destinos", href: "/destinos" },
            { label: destination.continent, href: `/destinos?c=${destination.continent}` },
            { label: destination.name },
          ]}
        />
      </div>

      {/* Intro & tags */}
      <section className="section-padding pt-12">
        <div className="container-editorial grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <p className="text-editorial text-lg text-foreground">{destination.intro}</p>

            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Link key={t.id} to={`/destinos`} className="tag">
                  {t.label}
                </Link>
              ))}
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              <h2 className="heading-section flex items-center gap-3">
                <Compass className="text-gold" size={28} />
                Destaques
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {destination.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 p-4 rounded-lg bg-muted/60 border border-border/50"
                  >
                    <span className="text-gold font-semibold">0{i + 1}</span>
                    <span className="text-foreground">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Beyond usual */}
            <div className="space-y-4">
              <h2 className="heading-section flex items-center gap-3">
                <Sparkles className="text-gold" size={28} />
                Além do óbvio
              </h2>
              <div className="space-y-3">
                {destination.beyondUsual.map((b, i) => (
                  <div
                    key={i}
                    className="p-5 rounded-lg border-l-4 border-gold bg-card shadow-sm"
                  >
                    <p className="text-foreground">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar CTA */}
          <aside className="lg:col-span-1">
            <div className="sticky top-28 p-6 rounded-2xl bg-gradient-hero text-primary-foreground shadow-lg">
              <p className="text-caption text-gold mb-3">Curadoria personalizada</p>
              <h3 className="text-2xl font-serif font-semibold mb-3">
                Vamos criar seu roteiro em {destination.name}?
              </h3>
              <p className="text-primary-foreground/85 mb-6 text-sm leading-relaxed">
                Conte sua janela de viagem e o que importa para você. A Create Travel monta
                uma proposta sob medida.
              </p>
              <WhatsAppButton
                variant="cta"
                label="Criar roteiro em parceria"
                params={{
                  type: "Destino",
                  name: destination.name,
                  tags: destination.tags,
                }}
                className="w-full"
              />
              <div className="mt-6 pt-6 border-t border-primary-foreground/20 space-y-2 text-sm text-primary-foreground/80">
                <p>
                  <strong className="text-primary-foreground">Melhor época:</strong>{" "}
                  {destination.bestTime}
                </p>
                <p>
                  <strong className="text-primary-foreground">Região:</strong>{" "}
                  {destination.region}, {destination.country}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Stays */}
      {relatedStays.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <p className="text-caption text-gold mb-3">Hospedagens selecionadas</p>
            <h2 className="heading-section mb-10">Onde nos hospedamos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedStays.map((s, i) => (
                <StayCard key={s.slug} stay={s} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-editorial max-w-4xl">
          <FAQSection faqs={destination.faq} />
        </div>
      </section>

      {/* Related */}
      {otherInContinent.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container-editorial">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-caption text-gold mb-3">Continue explorando</p>
                <h2 className="heading-section">Outros destinos em {destination.continent}</h2>
              </div>
              <Link
                to="/destinos"
                className="hidden md:flex items-center gap-2 text-gold hover:text-gold-light font-medium"
              >
                Ver todos <ArrowRight size={18} />
              </Link>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {otherInContinent.map((d) => (
                <Link
                  key={d.id}
                  to={`/destinos/${d.slug}`}
                  className="group block rounded-xl overflow-hidden bg-card shadow-sm hover:shadow-card-hover transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={
                        getDestinationImage(d.id) ||
                        d.imageOverrideUrl ||
                        `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop`
                      }
                      alt={d.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">
                      {d.region}
                    </p>
                    <h3 className="heading-card text-foreground mt-1">{d.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DestinoDetail;
