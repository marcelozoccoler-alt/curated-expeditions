import { expect, it } from "vitest";
import { TESTIMONIAL_ORDER } from "@/pages/Depoimentos";

it("prioritizes Yolanda Paschoal and Emílio before every other testimonial", () => {
  expect(TESTIMONIAL_ORDER[0]).toBe("yolanda-paschoal-emilio");
});