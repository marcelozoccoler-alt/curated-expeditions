import { BRAZIL_PACKAGES, pkgPath, pkgPrice, pkgWhatsApp } from "./brazilPackage";
import type { PackageLang } from "./brazilPackageTypes";

/** Reuse source inclusions rather than inventing a common service basis. */
export const incomingPackageOffers = (lang: PackageLang) => BRAZIL_PACKAGES.map(pkg => {
  const c = pkg.copy[lang];
  return {
    slug: pkg.slug, path: pkgPath(pkg, lang), title: c.h1,
    dates: c.dates, duration: c.duration,
    price: `${c.from} ${pkgPrice(pkg, lang, "EUR")} ${c.perPerson}`,
    basis: c.basis, inclusions: c.includes.slice(0, 2), exclusion: c.excludes[0],
    button: lang === "es" ? "Ver itinerario e inclusiones" : "View itinerary and inclusions",
    quote: c.cta, whatsapp: pkgWhatsApp(pkg, lang),
  };
});