import { Helmet } from "react-helmet-async";
import { CONTACT } from "@/lib/types";

interface SEOProps {
  title: string;
  description: string;
  /** Path + query to be appended to the canonical domain. Should be the
   *  canonical version of the URL (no duplicate-content variants). */
  canonicalPath: string;
  /** When true, emits noindex,follow. Use for filter combinations that
   *  shouldn't be indexed (e.g. multi-tag, search queries). */
  noindex?: boolean;
  /** Optional rel=prev / rel=next for paginated series. */
  prevPath?: string;
  nextPath?: string;
  /** Optional structured data (e.g. ItemList, BreadcrumbList, FAQPage). */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  ogImage?: string;
  ogType?: "website" | "article";
}

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

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
}: SEOProps) => {
  const canonical = `${DOMAIN}${canonicalPath.startsWith("/") ? "" : "/"}${canonicalPath}`;
  const prev = prevPath ? `${DOMAIN}${prevPath.startsWith("/") ? "" : "/"}${prevPath}` : null;
  const next = nextPath ? `${DOMAIN}${nextPath.startsWith("/") ? "" : "/"}${nextPath}` : null;
  const robots = noindex ? "noindex,follow" : "index,follow";

  const ldArray = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      {prev && <link rel="prev" href={prev} />}
      {next && <link rel="next" href={next} />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {ldArray.map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};
