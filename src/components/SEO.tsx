import { Helmet } from "react-helmet-async";
import { CONTACT } from "@/lib/types";

interface SEOProps {
  title: string;
  description: string;
  /** Path + query to be appended to the canonical domain. */
  canonicalPath: string;
  /** When true, emits noindex,follow. */
  noindex?: boolean;
  /** Optional rel=prev / rel=next for paginated series. */
  prevPath?: string;
  nextPath?: string;
  /** Optional structured data (e.g. ItemList, BreadcrumbList, FAQPage). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  ogType?: "website" | "article";
  /** Comma-separated keywords for semantic / AI search. */
  keywords?: string;
}

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

/** Clamp on word boundary, never exceeding `max` chars (incl. ellipsis). */
const clampMeta = (text: string, max: number) => {
  const t = (text || "").replace(/\s+/g, " ").trim();
  if (t.length <= max) return t;
  const slice = t.slice(0, max - 1);
  const cut = slice.replace(/[\s,.;:—–-]+\S*$/, "");
  return (cut || slice).trimEnd() + "…";
};

export const SEO = ({
  title,
  description,
  canonicalPath,
  noindex = false,
  prevPath,
  nextPath,
  jsonLd,
  ogImage,
  ogType = "website",
  keywords,
}: SEOProps) => {
  const safeTitle = clampMeta(title, 60);
  const safeDescription = clampMeta(description, 160);
  const canonical = `${DOMAIN}${canonicalPath.startsWith("/") ? "" : "/"}${canonicalPath}`;
  const prev = prevPath ? `${DOMAIN}${prevPath.startsWith("/") ? "" : "/"}${prevPath}` : null;
  const next = nextPath ? `${DOMAIN}${nextPath.startsWith("/") ? "" : "/"}${nextPath}` : null;
  const robots = noindex ? "noindex,follow" : "index,follow";

  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{safeTitle}</title>
      <meta name="description" content={safeDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      {prev && <link rel="prev" href={prev} />}
      {next && <link rel="next" href={next} />}

      {/* Open Graph */}
      <meta property="og:title" content={safeTitle} />
      <meta property="og:description" content={safeDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={safeTitle} />
      <meta name="twitter:description" content={safeDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};
