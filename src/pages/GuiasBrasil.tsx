import { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SUPPORTED_LANGS, toContentLang, type ContentLang } from "@/i18n/config";
import { useLang } from "@/hooks/useLang";
import { CONTACT } from "@/lib/types";
import {
  BIOME_MOSAIC,
  BRAZIL_GUIDE_SLUGS,
  BRAZIL_GUIDES,
  CONJUGADO_SLUGS,
  GUIDE_FILTER_UI,
  GUIDE_THEME_IDS,
  GUIDE_THEME_LABELS,
  GUIDE_UI,
  filterGuideSlugs,
  guideBlurb,
  guideDestinationName,
  guideImage,
  guidePath,
  type GuideThemeId,
} from "@/lib/brazilGuides";


const DOMAIN = CONTACT.domain.replace(/\/$/, "");

const HREFLANG: Record<ContentLang, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
  it: "it",
  de: "de",
};

const PAGE_SIZE = 6;

const GuiasBrasil = () => {
  const lang = useLang();
  const { lang: paramLang } = useParams<{ lang?: string }>();
  const [query, setQuery] = useState("");
  const [themes, setThemes] = useState<GuideThemeId[]>([]);
  const [visible, setVisible] = useState(PAGE_SIZE);
  const sentinel = useRef<HTMLDivElement | null>(null);

  const cLang = toContentLang(lang);
  const filtered = useMemo(
    () => filterGuideSlugs(cLang, query, themes),
    [cLang, query, themes],
  );
  const shown = useMemo(() => filtered.slice(0, visible), [filtered, visible]);


  useEffect(() => {
    setVisible(PAGE_SIZE);
  }, [query, themes, cLang]);

  useEffect(() => {
    const el = sentinel.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible((v) => v + PAGE_SIZE);
      },
      { rootMargin: "400px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [filtered.length, visible]);

  if (paramLang && !(SUPPORTED_LANGS as readonly string[]).includes(paramLang)) {
    return <Navigate to="/" replace />;
  }

  const ui = GUIDE_UI[cLang];
  const fui = GUIDE_FILTER_UI[cLang];
  const canonicalPath = guidePath(cLang);
  const mosaic = BIOME_MOSAIC[cLang];
  const conjugados = CONJUGADO_SLUGS.filter((s) => BRAZIL_GUIDES[s]);

  const toggleTheme = (id: GuideThemeId) =>
    setThemes((prev) => (prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]));

  const hasMore = visible < filtered.length;

  const hasFilters = query.trim().length > 0 || themes.length > 0;


  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: ui.hubH1,
    inLanguage: HREFLANG[cLang],
    itemListElement: BRAZIL_GUIDE_SLUGS.map((slug, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: BRAZIL_GUIDES[slug][cLang].h1,
      url: `${DOMAIN}${guidePath(cLang, slug)}`,
    })),
  };

  return (
    <div className="min-h-screen">
      <SEO
        title={ui.hubMetaTitle}
        description={ui.hubMetaDescription}
        canonicalPath={canonicalPath}
        keywords={ui.hubKeywords}
        jsonLd={itemListLd}
      />
      <Helmet>
        <html lang={HREFLANG[cLang]} />
        {(["pt", "en", "es", "it", "de"] as ContentLang[]).map((l) => (
          <link key={l} rel="alternate" hrefLang={HREFLANG[l]} href={`${DOMAIN}${guidePath(l)}`} />
        ))}
        <link rel="alternate" hrefLang="x-default" href={`${DOMAIN}${guidePath("en")}`} />
      </Helmet>
      <Header />

      <section className="pt-32 pb-12 bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <div className="gold-line mx-auto mb-6" />
          <p className="text-caption text-gold mb-3">{ui.hubTitle}</p>
          <h1 className="heading-hero mb-5">{ui.hubH1}</h1>
          <p className="text-lg text-white/85 max-w-2xl mx-auto font-light">{ui.hubIntro}</p>
        </div>
      </section>

      <div className="container-editorial pt-6">
        <Breadcrumbs
          items={[
            { label: "Create Travel", href: cLang === "pt" ? "/" : `/${cLang}/incoming` },
            { label: ui.hubTitle },
          ]}
        />
      </div>

      {/* Mosaico dos 7 biomas + roteiros conjugados */}
      <section className="pt-12">
        <div className="container-editorial max-w-4xl">
          <p className="text-caption text-gold mb-3">{mosaic.eyebrow}</p>
          <h2 className="heading-section text-foreground mb-5">{mosaic.heading}</h2>
          <div className="space-y-5 mb-10">
            {mosaic.intro.map((p, i) => (
              <p key={i} className="text-lg text-muted-foreground leading-relaxed font-light">
                {p}
              </p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {mosaic.biomes.map((b) => (
              <div key={b.name} className="rounded-lg border border-border p-5">
                <h3 className="font-semibold text-foreground mb-2">{b.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-secondary/40 border-l-4 border-gold p-6 mb-12">
            <h3 className="font-semibold text-foreground mb-2">{mosaic.artHeading}</h3>
            <p className="text-muted-foreground leading-relaxed font-light">{mosaic.artText}</p>
          </div>

          {conjugados.length > 0 && (
            <div>
              <h2 className="heading-section text-foreground mb-3">{mosaic.itinerariesHeading}</h2>
              <p className="text-muted-foreground font-light mb-6">{mosaic.itinerariesIntro}</p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {conjugados.map((s) => (
                  <li key={s}>
                    <Link
                      to={guidePath(cLang, s)}
                      className="block rounded-lg border border-border p-4 hover:border-gold transition"
                    >
                      <span className="font-medium text-foreground">
                        {guideDestinationName(s, cLang)}
                      </span>
                      <span className="block text-sm text-muted-foreground mt-1">
                        {guideBlurb(s, cLang)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>


      <section className="pt-8">
        <div className="container-editorial space-y-5">
          <div className="relative max-w-xl">
            <label htmlFor="guide-search" className="sr-only">
              {fui.searchLabel}
            </label>
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="guide-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={fui.searchPlaceholder}
              className="w-full rounded-full border border-border bg-background pl-11 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                {fui.themesLabel}
              </h2>
              {hasFilters && (
                <button
                  onClick={() => {
                    setQuery("");
                    setThemes([]);
                  }}
                  className="inline-flex items-center gap-1 text-sm text-gold hover:text-gold-light transition-colors"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                  {fui.clear}
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {GUIDE_THEME_IDS.map((id) => (
                <button
                  key={id}
                  onClick={() => toggleTheme(id)}
                  aria-pressed={themes.includes(id)}
                  className={`tag ${themes.includes(id) ? "tag-active" : ""}`}
                >
                  {GUIDE_THEME_LABELS[cLang][id]}
                </button>
              ))}
            </div>
          </div>

          <p className="text-sm text-muted-foreground" aria-live="polite">
            {fui.results(filtered.length)}
            {filtered.length > PAGE_SIZE && ` · ${fui.showing(shown.length, filtered.length)}`}
          </p>
        </div>
      </section>

      <section className="py-12">
        {filtered.length === 0 ? (
          <div className="container-editorial">
            <p className="text-muted-foreground">{fui.empty}</p>
          </div>
        ) : (
          <div className="container-editorial grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {shown.map((slug, i) => {
              const guide = BRAZIL_GUIDES[slug][cLang];
              const cover = guideImage(slug);
              return (
                <motion.article
                  key={slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 3) * 0.05 }}
                  className="group"
                >
                  <Link to={guidePath(cLang, slug)} className="block">
                    {cover && (
                      <div className="rounded-xl overflow-hidden aspect-[4/3] mb-4">
                        <img
                          src={cover}
                          alt={guideDestinationName(slug, cLang)}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <p className="text-xs tracking-wider text-gold mb-2">
                      {guideDestinationName(slug, cLang).toUpperCase()}
                    </p>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {guide.h1}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {guideBlurb(slug, cLang)}
                    </p>
                    <span className="text-sm text-gold">
                      {ui.readGuide} · {guide.readingMinutes} min
                    </span>
                  </Link>
                </motion.article>
              );
            })}
          </div>
        )}
        {hasMore && (
          <div ref={sentinel} className="container-editorial mt-10 flex justify-center">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground hover:border-gold hover:text-gold transition-colors"
            >
              {fui.loadMore}
            </button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default GuiasBrasil;
