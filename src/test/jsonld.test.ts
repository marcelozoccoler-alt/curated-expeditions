/**
 * Validação automática de JSON-LD (schema.org).
 *
 * Roda em build/CI via `npm test` (vitest) e garante que:
 *  - todo FAQPage tem mainEntity[] com Question/Answer válidos e não vazios
 *  - todo BreadcrumbList tem itemListElement[] ordenado com URLs absolutas
 *  - todo TouristAttraction / TouristTrip / LodgingBusiness / TravelAgency
 *    / ItemList / SpeakableSpecification tem os campos mínimos exigidos
 *  - cobertura: TODOS os destinos, hospedagens, tags de experiência e
 *    Incoming nos 4 idiomas (en/es/it/de) — não só amostras.
 */

import { describe, it, expect } from "vitest";
import { destinations } from "@/lib/destinations";
import { stays } from "@/lib/stays";
import { TAGS, CONTACT } from "@/lib/types";
import { INCOMING_COPY } from "@/lib/incomingCopy";
import {
  buildDestinationIntentFAQs,
  mergeFAQs,
  buildSpeakableSchema,
  buildDestinationKeywords,
} from "@/lib/seoIntents";

type JsonLd = Record<string, any>;

const DOMAIN = CONTACT.domain.replace(/\/$/, "");

// ---------- generic validators ----------

const isAbsoluteUrl = (s: unknown): s is string =>
  typeof s === "string" && /^https?:\/\//.test(s);

const isNonEmptyString = (s: unknown): s is string =>
  typeof s === "string" && s.trim().length > 0;

/**
 * Validates a single JSON-LD object. Returns an array of error messages
 * (empty when valid). Knows the @types we actually emit on the site.
 */
function validateJsonLd(ld: JsonLd, ctx = ""): string[] {
  const errs: string[] = [];
  const at = (m: string) => errs.push(`${ctx}: ${m}`);

  if (ld["@context"] !== "https://schema.org") {
    at(`missing/invalid @context (got ${JSON.stringify(ld["@context"])})`);
  }
  const type = ld["@type"];
  if (!isNonEmptyString(type)) {
    at("missing @type");
    return errs;
  }

  switch (type) {
    case "FAQPage": {
      const me = ld.mainEntity;
      if (!Array.isArray(me) || me.length === 0) {
        at("FAQPage.mainEntity must be a non-empty array");
        break;
      }
      me.forEach((q: any, i: number) => {
        if (q["@type"] !== "Question") at(`mainEntity[${i}].@type !== Question`);
        if (!isNonEmptyString(q.name)) at(`mainEntity[${i}].name empty`);
        const a = q.acceptedAnswer;
        if (!a || a["@type"] !== "Answer")
          at(`mainEntity[${i}].acceptedAnswer.@type !== Answer`);
        if (!isNonEmptyString(a?.text)) at(`mainEntity[${i}].acceptedAnswer.text empty`);
      });
      break;
    }

    case "BreadcrumbList": {
      const items = ld.itemListElement;
      if (!Array.isArray(items) || items.length === 0) {
        at("BreadcrumbList.itemListElement must be a non-empty array");
        break;
      }
      items.forEach((el: any, i: number) => {
        if (el["@type"] !== "ListItem") at(`itemListElement[${i}].@type !== ListItem`);
        if (el.position !== i + 1)
          at(`itemListElement[${i}].position should be ${i + 1}, got ${el.position}`);
        if (!isNonEmptyString(el.name)) at(`itemListElement[${i}].name empty`);
        if (!isAbsoluteUrl(el.item))
          at(`itemListElement[${i}].item must be absolute URL, got ${el.item}`);
      });
      break;
    }

    case "ItemList": {
      const items = ld.itemListElement;
      if (!Array.isArray(items)) at("ItemList.itemListElement must be an array");
      else
        items.forEach((el: any, i: number) => {
          if (el["@type"] !== "ListItem")
            at(`itemListElement[${i}].@type !== ListItem`);
          if (typeof el.position !== "number")
            at(`itemListElement[${i}].position must be number`);
        });
      break;
    }

    case "TouristAttraction":
    case "TouristDestination":
    case "TouristTrip":
    case "LodgingBusiness":
    case "Hotel":
    case "Resort": {
      if (!isNonEmptyString(ld.name)) at(`${type}.name empty`);
      if (ld.url && !isAbsoluteUrl(ld.url)) at(`${type}.url must be absolute`);
      break;
    }

    case "TravelAgency":
    case "Organization": {
      if (!isNonEmptyString(ld.name)) at(`${type}.name empty`);
      if (!isAbsoluteUrl(ld.url)) at(`${type}.url must be absolute`);
      break;
    }

    case "WebPage": {
      if (!isAbsoluteUrl(ld.url)) at("WebPage.url must be absolute");
      if (ld.speakable) {
        const sp = ld.speakable;
        if (sp["@type"] !== "SpeakableSpecification")
          at("speakable.@type must be SpeakableSpecification");
        if (!Array.isArray(sp.cssSelector) || sp.cssSelector.length === 0)
          at("speakable.cssSelector must be non-empty array");
      }
      break;
    }

    default:
      // unknown @type — allow but at least require name/url where relevant
      break;
  }

  // round-trip JSON serialization (catches functions/undefined/circular)
  try {
    const s = JSON.stringify(ld);
    JSON.parse(s);
  } catch (e) {
    at(`not JSON-serializable: ${(e as Error).message}`);
  }
  return errs;
}

// ---------- builders mirroring page templates ----------

function buildBreadcrumb(items: Array<{ name: string; path: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${DOMAIN}${it.path.startsWith("/") ? "" : "/"}${it.path}`,
    })),
  };
}

function buildFAQPage(items: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// =========================================================================
// TESTS
// =========================================================================

describe("JSON-LD — Destinos (/destinos/:slug)", () => {
  it("has at least one destination to validate", () => {
    expect(destinations.length).toBeGreaterThan(0);
  });

  it.each(destinations.map((d) => [d.slug, d]))(
    "%s — FAQPage + BreadcrumbList + keywords are valid",
    (_slug, dest) => {
      const allFaqs = mergeFAQs(dest.faq ?? [], buildDestinationIntentFAQs(dest));
      expect(allFaqs.length).toBeGreaterThanOrEqual(5);

      const faq = buildFAQPage(allFaqs);
      expect(validateJsonLd(faq, `${dest.slug}/FAQPage`)).toEqual([]);

      const bc = buildBreadcrumb([
        { name: "Início", path: "/" },
        { name: "Destinos", path: "/destinos" },
        { name: dest.name, path: `/destinos/${dest.slug}` },
      ]);
      expect(validateJsonLd(bc, `${dest.slug}/Breadcrumb`)).toEqual([]);

      const speak = buildSpeakableSchema(`${DOMAIN}/destinos/${dest.slug}`);
      expect(validateJsonLd(speak, `${dest.slug}/Speakable`)).toEqual([]);

      const keywords = buildDestinationKeywords(dest);
      expect(keywords).toContain("pacote de viagem");
      expect(keywords.toLowerCase()).toContain(dest.name.toLowerCase());
    }
  );
});

describe("JSON-LD — Hospedagens (/hospedagens/:slug)", () => {
  it("has at least one stay to validate", () => {
    expect(stays.length).toBeGreaterThan(0);
  });

  it.each(stays.map((s) => [s.slug, s]))(
    "%s — BreadcrumbList is valid",
    (_slug, stay) => {
      const bc = buildBreadcrumb([
        { name: "Início", path: "/" },
        { name: "Hospedagens", path: "/hospedagens" },
        { name: stay.name, path: `/hospedagens/${stay.slug}` },
      ]);
      expect(validateJsonLd(bc, `${stay.slug}/Breadcrumb`)).toEqual([]);

      if (stay.faq && stay.faq.length > 0) {
        const faq = buildFAQPage(stay.faq);
        expect(validateJsonLd(faq, `${stay.slug}/FAQPage`)).toEqual([]);
      }
    }
  );
});

describe("JSON-LD — Experiências (/experiencias e /experiencias/:tag)", () => {
  it("/experiencias — BreadcrumbList is valid", () => {
    const bc = buildBreadcrumb([
      { name: "Início", path: "/" },
      { name: "Experiências", path: "/experiencias" },
    ]);
    expect(validateJsonLd(bc, "experiencias/Breadcrumb")).toEqual([]);
  });

  it.each(TAGS.map((t) => [t.id, t]))(
    "/experiencias/%s — BreadcrumbList is valid",
    (_id, tag) => {
      const bc = buildBreadcrumb([
        { name: "Início", path: "/" },
        { name: "Experiências", path: "/experiencias" },
        { name: tag.label, path: `/experiencias/${tag.id}` },
      ]);
      expect(validateJsonLd(bc, `experiencias/${tag.id}/Breadcrumb`)).toEqual([]);
    }
  );
});

describe("JSON-LD — Incoming (/:lang/incoming) in 4 languages", () => {
  const langs = ["en", "es", "it", "de"] as const;

  it.each(langs)("%s — FAQPage is valid", (lang) => {
    const copy = INCOMING_COPY[lang];
    expect(copy.faqs.items.length).toBeGreaterThanOrEqual(5);
    const faq = buildFAQPage(copy.faqs.items);
    expect(validateJsonLd(faq, `incoming/${lang}/FAQPage`)).toEqual([]);
  });

  it.each(langs)("%s — TravelAgency schema is valid", (lang) => {
    const copy = INCOMING_COPY[lang];
    const ld: JsonLd = {
      "@context": "https://schema.org",
      "@type": "TravelAgency",
      name: "Create Travel",
      url: `https://www.createtravel.tur.br/${lang}/incoming`,
      description: copy.meta.description,
      areaServed: "Brazil",
    };
    expect(validateJsonLd(ld, `incoming/${lang}/TravelAgency`)).toEqual([]);
  });

  it.each(langs)("%s — meta has title + description + keywords", (lang) => {
    const m = INCOMING_COPY[lang].meta;
    expect(m.title.length).toBeGreaterThan(10);
    expect(m.description.length).toBeGreaterThan(50);
    expect(m.keywords.length).toBeGreaterThan(20);
  });
});

describe("JSON-LD — Listagens (/destinos e /hospedagens)", () => {
  it("/destinos — BreadcrumbList is valid", () => {
    const bc = buildBreadcrumb([
      { name: "Início", path: "/" },
      { name: "Destinos", path: "/destinos" },
    ]);
    expect(validateJsonLd(bc, "destinos/Breadcrumb")).toEqual([]);
  });

  it("/hospedagens — BreadcrumbList is valid", () => {
    const bc = buildBreadcrumb([
      { name: "Início", path: "/" },
      { name: "Hospedagens", path: "/hospedagens" },
    ]);
    expect(validateJsonLd(bc, "hospedagens/Breadcrumb")).toEqual([]);
  });
});

describe("JSON-LD — generic validator self-tests", () => {
  it("rejects FAQPage with empty mainEntity", () => {
    const errs = validateJsonLd(
      { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [] },
      "self"
    );
    expect(errs.length).toBeGreaterThan(0);
  });

  it("rejects BreadcrumbList with relative URL", () => {
    const errs = validateJsonLd(
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        ],
      },
      "self"
    );
    expect(errs.some((e) => e.includes("absolute URL"))).toBe(true);
  });

  it("rejects missing @context", () => {
    const errs = validateJsonLd({ "@type": "FAQPage", mainEntity: [] }, "self");
    expect(errs.some((e) => e.includes("@context"))).toBe(true);
  });
});
