import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { diaryPosts } from "@/lib/diaryPosts";
import { DIARY_CATEGORIES, getDiaryCover } from "@/lib/diaryImages";
import { CONTACT } from "@/lib/types";

const Diario = () => {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: diaryPosts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${CONTACT.domain}/diario/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Diário Create Travel — Guias autorais de destinos e cultura"
        description="Curiosidades, guias e roteiros autorais sobre Madagascar, Islândia, Patagônia, Aurora Boreal e mais. Conteúdo Create Travel para inspirar a próxima viagem."
        canonicalPath="/diario"
        jsonLd={itemListLd}
        keywords="diario de viagem, blog viagem autoral, guias de destino, curiosidades viagem"
      />
      <Header />
      <WhatsAppButton variant="float" />

      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-caption text-gold mb-3">Diário Create Travel</p>
          <h1 className="heading-hero mb-5">Conteúdo autoral para quem viaja com propósito</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto font-light">
            Guias profundos, curiosidades e leituras inspiradoras sobre os destinos que curamos pessoalmente.
          </p>
        </div>
      </section>

      <div className="container-editorial pt-6">
        <Breadcrumbs items={[{ label: "Início", href: "/" }, { label: "Diário" }]} />
      </div>

      {/* Category chips */}
      <div className="container-editorial pt-4">
        <div className="flex flex-wrap gap-2" role="navigation" aria-label="Categorias do Diário">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gold border border-gold text-white">
            Todos
          </span>
          {DIARY_CATEGORIES.map((c) => (
            <Link
              key={c.slug}
              to={`/diario/categoria/${c.slug}`}
              className="px-4 py-1.5 rounded-full text-xs font-semibold border border-border text-muted-foreground hover:border-gold hover:text-gold transition-colors"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>

      <section className="section-padding">
        <div className="container-editorial">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {diaryPosts.map((post, i) => {
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Diario;
