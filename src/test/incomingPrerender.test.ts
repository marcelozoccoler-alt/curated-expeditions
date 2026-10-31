// @vitest-environment node
import { describe, expect, it } from "vitest";
import { createServer } from "vite";
import { resolve } from "node:path";
import { buildPages } from "../../scripts/prerender-incoming";
import { incomingPackageOffers } from "../lib/incomingPackages";
import { BRAZIL_PACKAGES } from "../lib/brazilPackage";

describe("Incoming crawler entry points", () => {
  it("includes all four primary incoming landing paths in prerender", async () => {
    const server = await createServer({ configFile: false, resolve: { alias: { "@": resolve("src") } },
      server: { middlewareMode: true, hmr: false }, appType: "custom", logLevel: "error" });
    try {
      const pages = await buildPages(id => server.ssrLoadModule(id));
      expect(pages.filter(p => /^\/(en|es|it|de)\/incoming$/.test(p.path)).map(p => p.path).sort())
        .toEqual(["/de/incoming", "/en/incoming", "/es/incoming", "/it/incoming"]);
    } finally { await server.close(); }
  }, 30000);
  it("keeps every offer tied to its own source inclusions and exclusions", () => {
    for (const lang of ["es", "en"] as const) {
      const offers = incomingPackageOffers(lang);
      expect(offers).toHaveLength(4);
      BRAZIL_PACKAGES.forEach((pkg, i) => {
        expect(offers[i].inclusions).toEqual(pkg.copy[lang].includes.slice(0, 2));
        expect(offers[i].exclusion).toBe(pkg.copy[lang].excludes[0]);
        expect(offers[i].basis).toBe(pkg.copy[lang].basis);
      });
    }
  });
});