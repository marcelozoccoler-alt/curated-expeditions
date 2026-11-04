import { expect, it } from "vitest";
import { testimonials } from "@/lib/testimonials";
it("records the authorized Mexican couple without inventing a hometown", () => {
  const account = testimonials.find(t => t.slug === "patricia-camarena-alejandro-barrera-pantanal");
  expect(account?.author).toBe("Patrícia Camarena e Alejandro Barrera");
  expect(account?.originCountry).toBe("México");
  expect(account?.city).toBe("");
  expect(account?.verified).toBe(true);
});
it("keeps indirect feedback editorial rather than a verbatim customer review", () => {
  const account = testimonials.find(t => t.slug === "patricia-camarena-alejandro-barrera-pantanal");
  expect(account?.contentKind).toBe("editorial");
  expect(Object.keys(account?.translations ?? {}).sort()).toEqual(["en", "es"]);
});
