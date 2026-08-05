// Checagem de inconsistências de preço entre roteiros.
// Uso: bun run scripts/check-prices.ts        → relatório + exit 1 se houver bloqueio
//      bun run scripts/check-prices.ts --ack   → apenas relatório (exit 0)

import { auditGroupPrices, hasBlockingPriceFindings } from "../src/lib/priceAudit";

const ackMode = process.argv.includes("--ack");
const findings = auditGroupPrices();

if (findings.length === 0) {
  console.log("✅ Nenhuma inconsistência de preço encontrada nos grupos.");
  process.exit(0);
}

console.log(`\n🔎 Auditoria de preços — ${findings.length} achado(s)\n`);
for (const f of findings) {
  const icon = f.severity === "bloqueio" ? "⛔" : "⚠️ ";
  console.log(`${icon} ${f.title}`);
  console.log(`   ${f.detail}`);
  for (const g of f.groups) {
    console.log(`   · ${g.code} — ${g.title}  (/grupos-guia-local/${g.slug})`);
  }
  console.log("");
}

if (hasBlockingPriceFindings(findings) && !ackMode) {
  console.log(
    "⛔ Confirme os valores reais (ou registre o achado em ACKNOWLEDGED_DUPLICATES em src/lib/priceAudit.ts) antes de publicar.\n",
  );
  process.exit(1);
}

console.log("Achados registrados como revisados. Publicação liberada.\n");
