import { describe, expect, it } from "vitest";
import { PACKAGE_FACTS, PACKAGE_COPY, packageUSD, packageWhatsApp, packageJsonLd, guidePackage, PACKAGE_GUIDES, packagePath } from "../lib/brazilPackage";

describe("Rio, Pantanal and Lençóis package", () => {
  it("offers the combined package for exactly the three Spanish destinations", () => {
    expect(PACKAGE_GUIDES.map(g => g.slug)).toEqual(["pantanal", "lencois-maranhenses", "rio-de-janeiro"]);
    for (const slug of ["pantanal", "lencois-maranhenses", "rio-de-janeiro"]) {
      expect(guidePackage("es", slug)?.path).toBe(packagePath("es"));
    }
    expect(guidePackage("es", "amazon")).toBeUndefined();
    expect(guidePackage("it", "pantanal")).toBeUndefined();
  });
  it("keeps the requested base price at 3985 euros per person", () => {
    expect(PACKAGE_FACTS.priceEUR).toBe(3985);
    expect(packageJsonLd("es").offers.price).toBe(3985);
    expect(packageJsonLd("en").offers.priceCurrency).toBe("EUR");
  });
  it("uses the 7–18 August 2027 dates in the source itinerary", () => {
    expect(PACKAGE_FACTS.start).toBe("2027-08-07");
    expect(PACKAGE_FACTS.end).toBe("2027-08-18");
  });
  it("keeps twelve days and eleven accommodation nights", () => {
    expect(PACKAGE_COPY.es.days).toHaveLength(12);
    expect(PACKAGE_COPY.en.days).toHaveLength(12);
    expect(PACKAGE_FACTS.hotels.reduce((sum, h) => sum + h.nights, 0)).toBe(11);
  });
  it("calculates the dollar reference from the checked exchange rate", () => {
    expect(PACKAGE_FACTS.exchange.rate).toBe(1.116);
    expect(packageUSD()).toBe(4447);
  });
  it("quotes on the company WhatsApp with the package context", () => {
    for (const lang of ["es", "en"] as const) {
      const url = new URL(packageWhatsApp(lang));
      expect(url.pathname).toBe("/5511963693159");
      expect(url.searchParams.get("text")).toBe(PACKAGE_COPY[lang].whatsapp);
    }
  });
});
import { AMAZON_GRAND_TOUR } from "../lib/brazilPackages/amazonia-lencois-salvador-iguazu-rio";
import { BRAZIL_PACKAGES, guidePackages, pkgAmount, pkgDayLabel } from "../lib/brazilPackage";
describe("Amazon, Lençóis, Salvador, Iguazu and Rio package", () => {
  const pk = AMAZON_GRAND_TOUR;
  it("starts from 4128 euros per person, 20-day Pantanal option from 5539", () => {
    expect(pk.facts.priceEUR).toBe(4128);
    expect(pk.facts.extension?.priceEUR).toBe(5539);
  });
  it("runs 27 July – 12 August 2027 with 17 days and 16 nights", () => {
    expect(pk.facts.start).toBe("2027-07-27");
    expect(pk.facts.end).toBe("2027-08-12");
    expect(pk.copy.es.days).toHaveLength(17);
    expect(pk.copy.en.days).toHaveLength(17);
    expect(pk.facts.hotels.reduce((s, h) => s + h.nights, 0)).toBe(16);
    expect(pkgDayLabel(pk, 16)).toBe("12/08");
  });
  it("converts to dollars with the 30/10/2026 reference rate", () => {
    expect(pkgAmount(pk, "USD")).toBe(4611);
  });
  it("is listed and featured on the Amazon and Iguazu guides in Spanish and English", () => {
    expect(BRAZIL_PACKAGES.map(p => p.slug)).toContain(pk.slug);
    for (const lang of ["es", "en"]) for (const slug of ["amazon", "iguazu", "bahia"]) {
      expect(guidePackages(lang, slug).map(g => g.path)).toContain(`/${lang}/brazil-packages/${pk.slug}`);
    }
    expect(guidePackages("it", "amazon")).toEqual([]);
  });
});

import { AMAZON_GRAND_TOUR_PANTANAL } from "../lib/brazilPackages/amazonia-lencois-salvador-iguazu-pantanal-rio";
describe("20-day version with the Pantanal", () => {
  const pk = AMAZON_GRAND_TOUR_PANTANAL;
  it("starts from 5539 euros, 27 July – 15 August 2027, 20 days and 19 nights", () => {
    expect(pk.facts.priceEUR).toBe(5539);
    expect(pk.facts.end).toBe("2027-08-15");
    expect(pk.copy.es.days).toHaveLength(20);
    expect(pk.copy.en.days).toHaveLength(20);
    expect(pk.facts.hotels.reduce((s, h) => s + h.nights, 0)).toBe(19);
    expect(pkgDayLabel(pk, 19)).toBe("15/08");
  });
});

import { PARATY_IGUAZU_PANTANAL_RIO } from "../lib/brazilPackages/paraty-iguazu-pantanal-rio";
describe("Paraty, Iguazu, Pantanal and Rio package (April 2027)", () => {
  const pk = PARATY_IGUAZU_PANTANAL_RIO;
  it("converts R$ 36.000 per couple to 2966 euros per person and 3313 dollars", () => {
    expect(pk.facts.priceEUR).toBe(Math.round(18000 * 0.16477));
    expect(pkgAmount(pk, "USD")).toBe(3313);
  });
  it("runs 5–18 April 2027 with 14 days and 13 nights", () => {
    expect(pk.facts.start).toBe("2027-04-05");
    expect(pk.copy.es.days).toHaveLength(14);
    expect(pk.copy.en.days).toHaveLength(14);
    expect(pk.facts.hotels.reduce((s, h) => s + h.nights, 0)).toBe(13);
    expect(pkgDayLabel(pk, 13)).toBe("18/04");
  });
  it("is featured on the Iguazu, Pantanal and Rio guides", () => {
    for (const lang of ["es", "en"]) for (const slug of ["iguazu", "pantanal", "rio-de-janeiro"])
      expect(guidePackages(lang, slug).map(g => g.path)).toContain(`/${lang}/brazil-packages/${pk.slug}`);
  });
});
