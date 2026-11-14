import { describe, expect, it } from "vitest";
import { MEMORIAL_CHAPTERS, MEMORIAL_PAGES } from "@/lib/viagens/memorialCapitais";

describe("approved memorial book pagination", () => {
  it("publishes all 188 pages in order", () => {
    expect(MEMORIAL_PAGES.map(page => page.number)).toEqual(Array.from({ length: 188 }, (_, i) => i + 1));
  });
  it("points the Kafka chapter to its existing page 100", () => {
    expect(MEMORIAL_CHAPTERS.find(chapter => chapter.name === "Franz Kafka")?.page).toBe(100);
  });
});