// Auditoria automática de preços dos grupos.
// Objetivo: detectar inconsistências antes de publicar, em especial os casos em que
// o valor exibido vem do widget genérico do fornecedor (mesmo "a partir de" repetido
// em circuitos completamente diferentes).

import { localGuideGroups, type LocalGuideGroup } from "@/lib/localGuideGroups";

/** Valor "a partir de" que o widget da Queensberry repete em vários roteiros. */
export const REFERENCE_WIDGET_PRICES: Array<{ currency: "EUR" | "USD"; amount: number }> = [
  { currency: "USD", amount: 4463 },
];

/** Duplicidades já revisadas e confirmadas manualmente (não bloqueiam a publicação). */
export const ACKNOWLEDGED_DUPLICATES: string[] = [];

export type PriceFindingSeverity = "bloqueio" | "atencao";

export interface PriceFinding {
  id: string;
  severity: PriceFindingSeverity;
  title: string;
  detail: string;
  /** Roteiros envolvidos (slug + título). */
  groups: Array<{ slug: string; title: string; code: string }>;
  acknowledged: boolean;
}

const priceKey = (g: LocalGuideGroup) => `${g.currency ?? "EUR"}:${g.priceEur}`;

const isReferenceWidgetPrice = (g: LocalGuideGroup) =>
  REFERENCE_WIDGET_PRICES.some(
    (r) => r.currency === (g.currency ?? "EUR") && r.amount === g.priceEur,
  );

const asRef = (g: LocalGuideGroup) => ({ slug: g.slug, title: g.title, code: g.code });

/**
 * Roda a auditoria sobre a lista de grupos com guia local.
 * Regras:
 *  1. Mesmo valor + mesma moeda em dois ou mais circuitos → suspeita de widget genérico.
 *  2. Valor igual ao widget de referência conhecido → precisa de nota de preço explícita.
 *  3. Preço ausente, zerado ou negativo → bloqueio.
 */
export function auditGroupPrices(
  groups: LocalGuideGroup[] = localGuideGroups,
  acknowledged: string[] = ACKNOWLEDGED_DUPLICATES,
): PriceFinding[] {
  const findings: PriceFinding[] = [];

  for (const g of groups) {
    if (!Number.isFinite(g.priceEur) || g.priceEur <= 0) {
      findings.push({
        id: `preco-invalido:${g.slug}`,
        severity: "bloqueio",
        title: "Preço ausente ou inválido",
        detail: `O roteiro "${g.title}" (${g.code}) está sem valor por pessoa válido.`,
        groups: [asRef(g)],
        acknowledged: false,
      });
    }
  }

  const byPrice = new Map<string, LocalGuideGroup[]>();
  for (const g of groups) {
    const key = priceKey(g);
    byPrice.set(key, [...(byPrice.get(key) ?? []), g]);
  }

  for (const [key, list] of byPrice) {
    if (list.length < 2) continue;
    const [currency, amount] = key.split(":");
    const symbol = currency === "USD" ? "US$" : "€";
    const id = `duplicidade:${key}`;
    const isWidget = isReferenceWidgetPrice(list[0]);
    findings.push({
      id,
      severity: acknowledged.includes(id) ? "atencao" : "bloqueio",
      title: isWidget
        ? `Valor do widget de referência repetido (${symbol} ${Number(amount).toLocaleString("pt-BR")})`
        : `Mesmo valor em ${list.length} circuitos (${symbol} ${Number(amount).toLocaleString("pt-BR")})`,
      detail: isWidget
        ? `Esses roteiros herdaram o valor genérico ${symbol} ${Number(amount).toLocaleString("pt-BR")} do widget do fornecedor. Confirme a tabela real de cada um antes de publicar.`
        : `Roteiros de durações e destinos diferentes com o mesmo valor por pessoa. Verifique se não houve cópia de preço.`,
      groups: list.map(asRef),
      acknowledged: acknowledged.includes(id),
    });
  }

  for (const g of groups) {
    if (!isReferenceWidgetPrice(g)) continue;
    if (g.priceNote && g.priceNote.trim().length > 0) continue;
    findings.push({
      id: `nota-ausente:${g.slug}`,
      severity: "bloqueio",
      title: "Valor de referência sem nota explicativa",
      detail: `"${g.title}" (${g.code}) usa o valor de referência do fornecedor e precisa de priceNote informando que o preço é confirmado na cotação.`,
      groups: [asRef(g)],
      acknowledged: false,
    });
  }

  return findings.sort((a, b) => (a.severity === b.severity ? 0 : a.severity === "bloqueio" ? -1 : 1));
}

/** Verdadeiro quando ainda existem achados que exigem confirmação antes de publicar. */
export const hasBlockingPriceFindings = (findings: PriceFinding[]) =>
  findings.some((f) => f.severity === "bloqueio");
