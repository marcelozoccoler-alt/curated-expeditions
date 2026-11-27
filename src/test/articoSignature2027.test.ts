import { describe, expect, it } from "vitest";
import { laponiaRovaniemiAuroraBoreal2027 } from "@/lib/localGuideExtra/laponia-rovaniemi-aurora-boreal-2027";
import { islandiaAuroraBorealMarco2027 } from "@/lib/localGuideExtra/islandia-aurora-boreal-marco-2027";
import {
  localGuideFlightNote,
  localGuidePaymentSummary,
  localGuidePriceLabel,
} from "@/lib/localGuideGroups";

/**
 * Regras comerciais dos dois grupos Create Signature com guia local 2027
 * (Lapônia 23–26/01 e Islândia 14–21/03), definidas pelo usuário:
 * - valores exatamente como nas propostas recebidas;
 * - comissão de 20% das propostas B2B NUNCA aparece no site;
 * - pagamento: 30% de entrada + saldo em 3 parcelas no cartão.
 */
describe("Grupos Signature com guia local 2027", () => {
  it("Lapônia: € 3.380 em dupla, single +€ 450 e upgrade 5★ +€ 3.460", () => {
    expect(localGuidePriceLabel(laponiaRovaniemiAuroraBoreal2027)).toBe("€ 3.380");
    expect(laponiaRovaniemiAuroraBoreal2027.singleSupplementEur).toBe(450);
    expect(laponiaRovaniemiAuroraBoreal2027.priceExtras).toEqual([
      {
        label: "Upgrade para hotel 5 estrelas (por quarto, single ou duplo)",
        valueEur: 3460,
      },
    ]);
  });

  it("Islândia: € 5.210 em dupla, single +€ 1.480, voos € 520, refeições € 1.620, The Retreat € 950", () => {
    expect(localGuidePriceLabel(islandiaAuroraBorealMarco2027)).toBe("€ 5.210");
    expect(islandiaAuroraBorealMarco2027.singleSupplementEur).toBe(1480);
    expect(islandiaAuroraBorealMarco2027.priceExtras).toEqual([
      { label: "Voos Lisboa–Keflavík–Lisboa (FI955 / FI954)", valueEur: 520 },
      { label: "Pacote de refeições (6 almoços + 6 jantares)", valueEur: 1620 },
      { label: "Upgrade The Retreat at Blue Lagoon (última noite)", valueEur: 950 },
    ]);
  });

  it("pagamento dos dois grupos: 30% de entrada + saldo em 3 parcelas no cartão", () => {
    for (const group of [laponiaRovaniemiAuroraBoreal2027, islandiaAuroraBorealMarco2027]) {
      expect(localGuidePaymentSummary(group)).toBe(
        "entrada de 30% na reserva e saldo em 3 parcelas no cartão de crédito"
      );
    }
  });

  it("aéreo: voos do circuito incluídos na Lapônia, à parte na Islândia", () => {
    expect(localGuideFlightNote(laponiaRovaniemiAuroraBoreal2027)).toContain(
      "incluídos"
    );
    expect(localGuideFlightNote(islandiaAuroraBorealMarco2027)).toContain(
      "cotado à parte"
    );
  });

  it("nenhum texto dos dois grupos menciona a comissão de 20%", () => {
    for (const group of [laponiaRovaniemiAuroraBoreal2027, islandiaAuroraBorealMarco2027]) {
      const dump = JSON.stringify(group).toLowerCase();
      expect(dump).not.toContain("comiss");
      expect(dump).not.toContain("20%");
    }
  });
});
