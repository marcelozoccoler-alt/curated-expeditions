import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { diaryPosts } from "@/lib/diaryPosts";
import {
  getCategoryBySlug,
  getDiaryCover,
  getCategorySlug,
  DIARY_CATEGORIES,
} from "@/lib/diaryImages";
import { CONTACT } from "@/lib/types";

const DiarioCategoria = () => {
  const { slug } = useParams<{ slug: string }>();
  const cat = slug ? getCategoryBySlug(slug) : undefined;
  if (!cat) return <Navigate to="/diario" replace />;

  const posts = diaryPosts.filter((p) => p.category === cat.value);

  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${CONTACT.domain}/diario/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={`Diário — ${cat.label} | Create Travel`}
        description={`Artigos autorais sobre ${cat.label.toLowerCase()}: guias, curiosidades e leituras selecionadas pela curadoria Create Travel.`}
        canonicalPath={`/diario/categoria/${cat.slug}`}
        jsonLd={itemListLd}
        keywords={`${cat.label.toLowerCase()}, diario create travel, blog viagem autoral`}
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="pt-32 pb-10 bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-caption text-gold mb-3">Blog Create Travel</p>
          <h1 className="heading-hero mb-4">{cat.label}</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto font-light">
            {posts.length} {posts.length === 1 ? "artigo" : "artigos"} selecionados
          </p>
        </div>
      </section>

      <div className="container-editorial pt-6">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Blog", href: "/diario" },
            { label: cat.label },
          ]}
        />
      </div>

      {/* Category chips */}
      <div className="container-editorial pt-4">
        <div className="flex flex-wrap gap-2">
          <Link
            to="/diario"
            className="px-4 py-1.5 rounded-full text-xs font-semibold border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
          >
            Todos
          </Link>
          {DIARY_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/diario/categoria/${c.slug}`}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                c.slug === cat.slug
                  ? "bg-gold border-gold text-white"
                  : "border-border text-muted-foreground hover:border-gold hover:text-gold"
              }`}
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="section-padding">
        <div className="container-editorial">
          {posts.length === 0 ? (
            <p className="text-center text-muted-foreground">
              Ainda não há artigos nesta categoria.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => {
                const cover = getDiaryCover(post);
                return (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i % 6) * 0.05 }}
                  >
                    <Link
                      to={`/diario/${post.slug}`}
                      className="group block h-full bg-card border border-border rounded-xl overflow-hidden hover:border-gold hover:shadow-card transition-all"
                    >
                      {cover && (
                        <div className="aspect-[16/10] overflow-hidden">
                          <img
                            src={cover}
                            alt={post.h1}
                            loading="lazy"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="text-xs font-semibold text-gold tracking-wider mb-3">
                          {post.category.toUpperCase()} · {post.readingMinutes} MIN
                        </div>
                        <h2 className="text-xl font-serif font-semibold text-foreground mb-3 group-hover:text-gold transition-colors">
                          {post.h1}
                        </h2>
                        <p className="text-[15px] text-muted-foreground leading-relaxed line-clamp-3">
                          {post.intro}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DiarioCategoria;
