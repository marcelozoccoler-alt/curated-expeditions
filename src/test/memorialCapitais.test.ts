import { describe, expect, it } from "vitest";
import { MEMORIAL_CHAPTERS, MEMORIAL_PAGES } from "@/lib/viagens/memorialCapitais";
import { EDITORIAL_PAGES } from "@/lib/viagens/memorialEditorial";

describe("approved memorial book pagination", () => {
  it("publishes all 188 pages in order", () => {
    expect(MEMORIAL_PAGES.map(page => page.number)).toEqual(Array.from({ length: 188 }, (_, i) => i + 1));
  });
  it("points the Kafka chapter to its existing page 100", () => {
    expect(MEMORIAL_CHAPTERS.find(chapter => chapter.name === "Franz Kafka")?.page).toBe(100);
  });
  it("keeps all 188 approved pages in the native web edition", () => {
    expect(EDITORIAL_PAGES.map(page => page.number)).toEqual(MEMORIAL_PAGES.map(page => page.number));
  });
  it("keeps the selected Ponte Carlos photo on page 2", () => {
    expect(EDITORIAL_PAGES[1]?.photos).toHaveLength(1);
  });
});