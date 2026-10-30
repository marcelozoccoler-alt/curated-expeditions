// Shared types for international campaign packages (browser-independent).
export type PackageLang = "es" | "en";

export type PackageCopy = {
  title: string; description: string; eyebrow: string; h1: string; subtitle: string;
  dates: string; duration: string; from: string; perPerson: string; basis: string;
  cta: string; viewRoute: string; introTitle: string; intro: string; landscapes: string;
  wildlifeNote: string; guidesTitle: string; guideLink: string;
  /** Short teaser shown on destination guides that belong to this package. */
  guideTeaser: string; guideButton: string;
  scenes: { name: string; label: string; text: string }[];
  seasonTitle: string; seasonText: string; itineraryTitle: string;
  days: { title: string; text: string }[];
  includesTitle: string; includes: string[]; excludesTitle: string; excludes: string[];
  hotelsTitle: string; nights: string; hotelNotes: string[];
  priceTitle: string; exchangeNote: string; conditions: string; faqTitle: string;
  faq: { q: string; a: string }[]; finalTitle: string; finalText: string;
  whatsapp: string; back: string; contact: string;
  extension?: { label: string; title: string; text: string; days: { title: string; text: string }[] };
};

export type PackageFacts = {
  priceEUR: number; travelers: number; days: number; nights: number;
  start: string; end: string;
  exchange: { rate: number; checkedOn: string; source: string };
  hotels: readonly { name: string; location: string; nights: number }[];
  route: readonly string[];
  extension?: { priceEUR: number; days: number; nights: number; start: string; end: string; hotel: { name: string; location: string; nights: number }; slug?: string };
};

export type BrazilPackageDef = {
  slug: string;
  facts: PackageFacts;
  copy: Record<PackageLang, PackageCopy>;
  guides: readonly { slug: string; name: Record<PackageLang, string> }[];
};
