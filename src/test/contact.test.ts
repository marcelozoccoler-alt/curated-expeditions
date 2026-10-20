import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { CONTACT } from "@/lib/types";
import { organizationLd } from "@/lib/entity";

/** Endereço oficial informado pelo cliente em 20/10/2026. */
const ENDERECO = {
  rua: "Avenida Paulista, 1765",
  complemento: "7º andar, Conj. 72",
  bairro: "Bela Vista",
  cep: "01311-930",
};

const ANTIGO = ["Rua José Libero", "Planalto Paulista", "04013-000", "-23.6118"];

describe("endereço da Create Travel", () => {
  it("CONTACT.address traz o endereço completo da Avenida Paulista", () => {
    expect(CONTACT.address).toContain(ENDERECO.rua);
    expect(CONTACT.address).toContain(ENDERECO.complemento);
    expect(CONTACT.address).toContain(ENDERECO.bairro);
    expect(CONTACT.address).toContain(ENDERECO.cep);
  });

  it("o schema de organização concorda com CONTACT.address", () => {
    const a = organizationLd.address;
    expect(a.streetAddress).toContain(ENDERECO.rua);
    expect(a.postalCode).toBe(ENDERECO.cep);
    expect(a.addressLocality).toBe("São Paulo");
    expect(a.addressRegion).toBe("SP");
    expect(a.addressCountry).toBe("BR");
  });

  it("as coordenadas apontam para a Avenida Paulista, não para o endereço antigo", () => {
    expect(organizationLd.geo.latitude).toBeCloseTo(-23.5607, 3);
    expect(organizationLd.geo.longitude).toBeCloseTo(-46.6579, 3);
  });

  it("o JSON-LD fixo do index.html traz o mesmo CEP e não guarda o endereço antigo", () => {
    const html = readFileSync("index.html", "utf8");
    expect(html).toContain(`"postalCode": "${ENDERECO.cep}"`);
    expect(html).toContain(ENDERECO.rua);
    for (const velho of ANTIGO) expect(html).not.toContain(velho);
  });

  it("nenhuma fonte de conteúdo guarda o endereço antigo", () => {
    for (const f of ["src/pages/Sobre.tsx", "src/pages/Incoming.tsx", "src/lib/entity.ts"]) {
      const src = readFileSync(f, "utf8");
      for (const velho of ANTIGO) expect(src, f).not.toContain(velho);
    }
  });
});
