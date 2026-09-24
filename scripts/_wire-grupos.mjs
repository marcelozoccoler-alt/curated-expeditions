import { readFileSync, writeFileSync } from "node:fs";

const G = [
  { comp: "GrupoMendozaCarnaval2027", slug: "mendoza-carnaval-2027", img: "grupo-mendoza-reveillon-29-dezembro.jpg", imgVar: "grupoMendozaCarnavalImg", tag: "04 a 09/02/2027 · 6 dias · Carnaval", title: "Mendoza no Carnaval", subtitle: "Mendoza · Alta Montanha · Vale do Uco · Maipú", desc: "Bodega Santa Julia com aula de empanadas, Alta Montanha até o Aconcágua e três vinícolas no Vale do Uco. Voos GOL e guia desde o Brasil.", fromPrice: "A partir de US$ 2.798 por pessoa (apto duplo)", countries: ["Argentina"] },
  { comp: "GrupoSulItaliaAbril2027", slug: "sul-italia-19-abril-2027", img: "grupo-sul-italia-primavera-2027.jpg", imgVar: "grupoSulItaliaAbrilImg", tag: "19/04 a 30/04/2027 · 12 dias", title: "Sul da Itália · Amalfi, Matera e Puglia", subtitle: "Sorrento · Positano · Amalfi · Pompeia · Matera · Bari · Alberobello · Lecce", desc: "Costa Amalfitana, Pompeia, os Sassi de Matera, os trulli de Alberobello e o barroco de Lecce. Voos ITA Airways e guia desde o Brasil.", fromPrice: "A partir de € 4.757 por pessoa (apto duplo)", countries: ["Itália"] },
  { comp: "GrupoLagosChilenosAbril2027", slug: "lagos-chilenos-abril-2027", img: "grupo-lagos-chilenos-maio-2027.jpg", imgVar: "grupoLagosChilenosAbrilImg", tag: "19 a 26/04/2027 · 8 dias", title: "Lagos Chilenos no outono", subtitle: "Santiago · Vale do Maipo · Puerto Varas · Peulla · Petrohué · Frutillar", desc: "Vinhos do Maipo, navegação até Peulla, Cataratas de Petrohué e a Frutillar alemã. Voos LATAM e guia desde o Brasil.", fromPrice: "A partir de US$ 2.698 por pessoa (apto duplo)", countries: ["Chile"] },
  { comp: "GrupoEscandinaviaAbril2027", slug: "escandinavia-abril-2027", img: "grupo-escandinavia-maio-2027.jpg", imgVar: "grupoEscandinaviaAbrilImg", tag: "26/04 a 08/05/2027 · 13 dias", title: "Escandinávia · fiordes na primavera", subtitle: "Copenhague · Oslo · Geilo · Bergen · Sognefjord · Estocolmo", desc: "Ferry noturno Copenhague–Oslo, Sognefjord, igreja de madeira de Borgund e Museu Vasa. Voos TAP e guia desde o Brasil.", fromPrice: "A partir de € 5.099 por pessoa (apto duplo)", countries: ["Dinamarca", "Noruega", "Suécia"] },
  { comp: "GrupoSiciliaMaltaMaio2027", slug: "sicilia-malta-maio-2027", img: "grupo-sicilia-malta-2027.jpg", imgVar: "grupoSiciliaMaltaMaioImg", tag: "14 a 26/05/2027 · 13 dias", title: "Sicília & Malta em maio", subtitle: "Valletta · Gozo · Ragusa · Noto · Siracusa · Etna · Taormina · Palermo · Agrigento", desc: "Fortalezas de Malta, barroco siciliano da UNESCO, Monte Etna e o Vale dos Templos. Voos ITA Airways e guia desde o Brasil.", fromPrice: "A partir de € 5.673 por pessoa (apto duplo)", countries: ["Itália", "Malta"] },
  { comp: "GrupoTurquiaMaio2027", slug: "turquia-maio-2027", img: "grupo-turquia-junho-2027.jpg", imgVar: "grupoTurquiaMaioImg", tag: "15 a 28/05/2027 · 14 dias", title: "Turquia completa em maio", subtitle: "Istambul · Ancara · Capadócia · Pamukkale · Éfeso · Izmir · Bursa", desc: "Hagia Sophia e Bósforo, vales da Capadócia, terraços de Pamukkale e as ruínas de Éfeso. Voos Turkish Airlines e guia desde o Brasil.", fromPrice: "A partir de € 3.977 por pessoa (apto duplo)", countries: ["Turquia"] },
  { comp: "GrupoCaucasoMaio2027", slug: "caucaso-maio-2027", img: "grupo-caucaso-junho-2027.jpg", imgVar: "grupoCaucasoMaioImg", tag: "24/05 a 07/06/2027 · 15 dias", title: "Cáucaso · Armênia, Geórgia e Azerbaijão", subtitle: "Yerevan · Garni · Sevan · Tbilisi · Mtskheta · Baku · Gobustan", desc: "Mosteiros escavados na rocha, o Monte Ararat ao fundo, Tbilisi das termas e a Baku do Cáspio. Voos Turkish Airlines e guia desde o Brasil.", fromPrice: "A partir de US$ 5.498 por pessoa (apto duplo)", countries: ["Armênia", "Geórgia", "Azerbaijão"] },
  { comp: "GrupoAfricaDoSulMaio2027", slug: "africa-do-sul-maio-2027", img: "grupo-africa-do-sul-carnaval-2027.jpg", imgVar: "grupoAfricaDoSulMaioImg", tag: "24/05 a 01/06/2027 · 9 dias", title: "África do Sul · safári e Cidade do Cabo", subtitle: "Joanesburgo · Kruger · Cidade do Cabo", desc: "Safáris em reserva privada com pensão completa, Table Mountain e Cabo da Boa Esperança. Voos South African Airways e guia desde o Brasil.", fromPrice: "A partir de US$ 4.987 por pessoa (apto duplo)", countries: ["África do Sul"] },
  { comp: "GrupoChinaCoreia2027", slug: "china-coreia-junho-2027", img: "grupo-china-primavera-2027.jpg", imgVar: "grupoChinaCoreiaImg", tag: "02 a 18/06/2027 · 17 dias", title: "China & Coreia do Sul", subtitle: "Pequim · Grande Muralha · Xi'an · Xangai · Seul · DMZ", desc: "Cidade Proibida, Grande Muralha, Guerreiros de Terracota, o Bund de Xangai e a Seul dos palácios e da DMZ. Voos Ethiopian e guia desde o Brasil.", fromPrice: "A partir de US$ 5.998 por pessoa (apto duplo)", countries: ["China", "Coreia do Sul"] },
];

// 1) App.tsx
{
  const p = "src/App.tsx";
  let s = readFileSync(p, "utf8");
  const anchorImport = 'import GrupoAfricaDoSulCarnaval2027 from "./pages/GrupoAfricaDoSulCarnaval2027";';
  if (!s.includes(anchorImport)) throw new Error("import anchor missing");
  s = s.replace(anchorImport, anchorImport + "\n" + G.map((g) => `import ${g.comp} from "./pages/${g.comp}";`).join("\n"));
  const anchorRoute = '<Route path="/grupos/africa-do-sul-carnaval-2027" element={<GrupoAfricaDoSulCarnaval2027 />} />';
  if (!s.includes(anchorRoute)) throw new Error("route anchor missing");
  s = s.replace(anchorRoute, anchorRoute + "\n" + G.map((g) => `            <Route path="/grupos/${g.slug}" element={<${g.comp} />} />`).join("\n"));
  writeFileSync(p, s);
  console.log("App.tsx ok");
}

// 2) EmbarqueComACreate.tsx
{
  const p = "src/pages/EmbarqueComACreate.tsx";
  let s = readFileSync(p, "utf8");
  const anchorImport = 'import grupoAfricaDoSulCarnavalImg from "@/assets/grupo-africa-do-sul-carnaval-2027.jpg";';
  if (!s.includes(anchorImport)) throw new Error("embarque import anchor missing");
  s = s.replace(anchorImport, anchorImport + "\n" + G.map((g) => `import ${g.imgVar} from "@/assets/${g.img}";`).join("\n"));
  const anchorList = "const RAW_DEPARTURES = [";
  if (!s.includes(anchorList)) throw new Error("RAW_DEPARTURES anchor missing");
  const cards = G.map((g) => `  {
    href: "/grupos/${g.slug}",
    img: ${g.imgVar},
    tag: ${JSON.stringify(g.tag)},
    title: ${JSON.stringify(g.title)},
    subtitle: ${JSON.stringify(g.subtitle)},
    desc: ${JSON.stringify(g.desc)},
    fromPrice: ${JSON.stringify(g.fromPrice)},
    status: "Saída confirmada",
  },`).join("\n");
  s = s.replace(anchorList, anchorList + "\n" + cards);
  writeFileSync(p, s);
  console.log("Embarque ok");
}

// 3) groupsCatalog.ts
{
  const p = "src/lib/groupsCatalog.ts";
  let s = readFileSync(p, "utf8");
  const anchor = '  "/grupos/turquia-2026": ["Turquia"],';
  if (!s.includes(anchor)) throw new Error("catalog anchor missing");
  s = s.replace(anchor, G.map((g) => `  "/grupos/${g.slug}": ${JSON.stringify(g.countries)},`).join("\n") + "\n" + anchor);
  writeFileSync(p, s);
  console.log("catalog ok");
}

// 4) sitemap script
{
  const p = "scripts/generate-sitemap.ts";
  let s = readFileSync(p, "utf8");
  const anchor = '"/grupos/africa-do-sul-carnaval-2027"';
  if (!s.includes(anchor)) throw new Error("sitemap anchor missing");
  s = s.replace(anchor, anchor + ",\n  " + G.map((g) => `"/grupos/${g.slug}"`).join(",\n  "));
  writeFileSync(p, s);
  console.log("sitemap ok");
}

// 5) llms.txt
{
  const p = "public/llms.txt";
  let s = readFileSync(p, "utf8");
  const lines = G.map((g) => `- [${g.title} — ${g.tag.split(" · ")[0]}](https://createtravel.tur.br/grupos/${g.slug}): ${g.desc} ${g.fromPrice}.`).join("\n");
  s = s.trimEnd() + "\n\n## Novos grupos com guia desde o Brasil (2027)\n\n" + lines + "\n";
  writeFileSync(p, s);
  console.log("llms ok");
}
