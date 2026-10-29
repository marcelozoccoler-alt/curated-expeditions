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
  it("calculates the dollar reference from the checked Wise rate", () => {
    expect(PACKAGE_FACTS.exchange.rate).toBe(1.116);
    expect(packageUSD()).toBe(4447);
    expect(PACKAGE_FACTS.exchange.source).toBe("https://wise.com/us/currency-converter/eur-to-usd-rate");
  });
  it("quotes on the company WhatsApp with the package context", () => {
    for (const lang of ["es", "en"] as const) {
      const url = new URL(packageWhatsApp(lang));
      expect(url.pathname).toBe("/5511963693159");
      expect(url.searchParams.get("text")).toBe(PACKAGE_COPY[lang].whatsapp);
    }
  });
});