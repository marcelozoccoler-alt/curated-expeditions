import { describe, expect, it } from "vitest";
import { GRUPOS_OUTUBRO_2026 } from "../lib/gruposOutubro2026";
import { GRUPOS_LOTE } from "../lib/gruposLote";

const cases = [
  ["grecia-maio-2027", "12/05 (qua)", "24/05 (seg)", "4.870", "133", "EUR 685"],
  ["grecia-junho-2027", "02/06 (qua)", "14/06 (seg)", "4.998", "137", "EUR 685"],
  ["escandinavia-agosto-2027", "23/08 (seg)", "04/09 (sáb)", "5.398", "137", "EUR 188"],
  ["sicilia-malta-23-abril-2027", "23/04 (sex)", "05/05 (qua)", "5.048", "128", "EUR 190"],
  ["africa-zimbabue-botsuana-junho-2027", "01/06 (ter)", "10/06 (qui)", "6.858", "190", "USD 496"],
  ["china-coreia-30-maio-2027", "30/05 (dom)", "15/06 (ter)", "5.998", "164", "USD 790"],
  ["suica-norte-italia-09-junho-2027", "09/06 (qua)", "21/06 (seg)", "6.670", "182", "EUR 191"],
  ["mendoza-maio-2027", "13/05 (qui)", "18/05 (ter)", "2.282", "59", "USD 168"],
  ["equador-galapagos-abril-2027", "27/04 (ter)", "05/05 (qua)", "3.998", "105", "USD 198"],
  ["irlanda-escocia-inglaterra-junho-2027", "12/06 (sáb)", "25/06 (sex)", "6.287", "167", "EUR 375"],
];

describe("Saídas dos documentos de 17/10", () => {
  it.each(cases)("%s mantém datas, valor duplo, IOF e taxas", (slug, first, last, price, iof, tax) => {
    const group = GRUPOS_OUTUBRO_2026.find((g) => g.slug === slug);
    expect(group).toBeDefined();
    if (!group) return;
    const index = group.priceLabels ? group.priceLabels.indexOf("Apto duplo") : 1;
    expect(group.prices[index]).toEqual([price, iof]);
    expect(group.tax).toBe(tax);
    expect(group.itin[0][0]).toBe(first);
    expect(group.itin.at(-1)?.[0]).toBe(last);
    expect(GRUPOS_LOTE.filter((g) => g.slug === slug)).toHaveLength(1);
  });

  it("não cria apartamento triplo nas duas saídas que só oferecem duplo e individual", () => {
    for (const slug of ["africa-zimbabue-botsuana-junho-2027", "irlanda-escocia-inglaterra-junho-2027"]) {
      const group = GRUPOS_OUTUBRO_2026.find((g) => g.slug === slug);
      expect(group?.priceLabels).toEqual(["Apto duplo", "Apto individual"]);
      expect(group?.prices).toHaveLength(2);
    }
  });
});