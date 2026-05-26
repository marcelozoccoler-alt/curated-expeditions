import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getDiaryPost, diaryPosts } from "@/lib/diaryPosts";
import { getRelatedDestinationsForPost, getRelatedStaysForPost } from "@/lib/relatedDiary";
import { getDestinationImage } from "@/lib/destinationImages";
import { CONTACT } from "@/lib/types";

const DiarioPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getDiaryPost(slug) : undefined;

  if (!post) return <Navigate to="/diario" replace />;

  const url = `${CONTACT.domain}/diario/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.h1,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: "Create Travel" },
    publisher: { "@type": "Organization", name: "Create Travel" },
    mainEntityOfPage: url,
    keywords: post.keywords,
  };
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: CONTACT.domain },
      { "@type": "ListItem", position: 2, name: "Diário", item: `${CONTACT.domain}/diario` },
      { "@type": "ListItem", position: 3, name: post.h1, item: url },
    ],
  };
  const faqLd = post.faq.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: post.faq.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  const related = diaryPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const relatedDestinos = getRelatedDestinationsForPost(post, 3);
  const relatedStays = getRelatedStaysForPost(post, 3);

  return (
    <div className="min-h-screen">
      <SEO
        title={post.title}
        description={post.metaDescription}
        canonicalPath={`/diario/${post.slug}`}
        keywords={post.keywords}
        ogType="article"
        jsonLd={faqLd ? [articleLd, breadcrumbLd, faqLd] : [articleLd, breadcrumbLd]}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <article className="pt-32 pb-16">
        <div className="container-editorial max-w-3xl">
          <Breadcrumbs
            items={[
              { label: "Início", href: "/" },
              { label: "Diário", href: "/diario" },
              { label: post.h1 },
            ]}
          />

          <div className="text-xs font-semibold text-gold tracking-wider mb-4 mt-4">
            {post.category.toUpperCase()} · {post.readingMinutes} MIN DE LEITURA
          </div>
          <h1 className="heading-hero text-foreground mb-6">{post.h1}</h1>
          <p className="text-xl text-muted-foreground leading-relaxed font-light mb-12">
            {post.intro}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="prose-content space-y-12"
          >
            {post.sections.map((s) => (
              <section key={s.heading} className="space-y-4">
                <h2 className="heading-section text-foreground">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="text-lg text-muted-foreground leading-relaxed">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </motion.div>

          <div className="my-12 p-8 bg-muted rounded-xl text-center">
            <h3 className="text-2xl font-serif text-foreground mb-3">
              Quer viver esta viagem?
            </h3>
            <p className="text-muted-foreground mb-6">
              Desenhamos um roteiro autoral para você com curadoria Create Travel.
            </p>
            <WhatsAppButton
              variant="cta"
              label="Falar com a curadoria"
              params={{ type: "Roteiro", name: post.whatsappName }}
            />
          </div>

          {post.faq.length > 0 && (
            <div className="my-12">
              <FAQSection faqs={post.faq} />
            </div>
          )}

          {post.relatedDestinations && post.relatedDestinations.length > 0 && (
            <div className="my-12">
              <h3 className="text-xl font-serif text-foreground mb-4">Explore mais</h3>
              <ul className="space-y-2">
                {post.relatedDestinations.map((r) => (
                  <li key={r.href}>
                    <Link to={r.href} className="text-gold hover:underline inline-flex items-center gap-2">
                      {r.label} <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {relatedDestinos.length > 0 && (
            <div className="my-16">
              <h3 className="text-xl font-serif text-foreground mb-6">
                Destinos relacionados
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {relatedDestinos.map((d) => (
                  <Link
                    key={d.id}
                    to={`/destinos/${d.slug}`}
                    className="group block rounded-xl overflow-hidden bg-card border border-border hover:border-gold transition-colors"
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
                    <div className="p-4">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">
                        {d.region}
                      </p>
                      <div className="text-base font-serif text-foreground group-hover:text-gold transition-colors">
                        {d.name}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedStays.length > 0 && (
            <div className="my-16">
              <h3 className="text-xl font-serif text-foreground mb-6">
                Hospedagens selecionadas para este destino
              </h3>
              <ul className="space-y-2">
                {relatedStays.map((s) => (
                  <li key={s.slug}>
                    <Link
                      to={`/hospedagens/${s.slug}`}
                      className="text-gold hover:underline inline-flex items-center gap-2"
                    >
                      {s.name} <ArrowRight size={14} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="my-16">
            <h3 className="text-xl font-serif text-foreground mb-6">Leituras relacionadas</h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  to={`/diario/${r.slug}`}
                  className="block p-5 border border-border rounded-lg hover:border-gold transition-colors"
                >
                  <div className="text-xs text-gold font-semibold tracking-wider mb-2">
                    {r.category.toUpperCase()}
                  </div>
                  <div className="text-sm font-medium text-foreground">{r.h1}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default DiarioPost;
