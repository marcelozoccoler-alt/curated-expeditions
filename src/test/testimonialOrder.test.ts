import { expect, it } from "vitest";
import { TESTIMONIAL_ORDER } from "@/pages/Depoimentos";

it("puts the Pantanal story by Patrícia and Alejandro first", () => {
  expect(TESTIMONIAL_ORDER[0]).toBe("patricia-camarena-alejandro-barrera-pantanal");
  expect(TESTIMONIAL_ORDER[1]).toBe("yolanda-paschoal-emilio");
});
