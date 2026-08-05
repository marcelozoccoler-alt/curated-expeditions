import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Globe2 } from "lucide-react";

import { regions } from "@/lib/regions";

/** Continent grouping for region slugs (kickers can point to a parent country). */
const GROUPS: { title: string; slugs: string[] }[] = [
  {
    title: "Brasil",
    slugs: [
      "amazonia",
      "pantanal",
      "lencois-maranhenses",
      "fernando-de-noronha",
      "chapada-diamantina",
      "chapada-dos-veadeiros",
      "jalapao",
      "bonito",
      "jericoacoara",
    ],
  },
  {
    title: "América do Sul",
    slugs: [
      "patagonia",
      "chile",
      "atacama",
      "peru",
      "machu-picchu",
      "salar-de-uyuni",
      "galapagos",
    ],
  },
  {
    title: "América do Norte e Central",
    slugs: ["mexico"],
  },
  {
    title: "Europa",
    slugs: [
      "italia",
      "toscana",
      "portugal",
      "acores",
      "grecia",
      "islandia",
      "noruega",
    ],
  },
  {
    title: "África e Oriente Médio",
    slugs: [
      "tanzania",
      "serengeti",
      "ngorongoro",
      "zanzibar",
      "quenia",
      "masai-mara",
      "africa-do-sul",
      "namibia",
      "botsuana",
      "ruanda",
      "marrocos",
    ],
  },
  {
    title: "Ásia",
    slugs: ["japao", "india", "rajastao", "indonesia", "bali"],
  },
  {
    title: "Oceania e Pacífico",
    slugs: ["nova-zelandia", "australia", "polinesia-francesa", "bora-bora"],
  },
];

export const RegionsWeWork = () => {
  const bySlug = new Map(regions.map((r) => [r.slug, r]));

  const groups = GROUPS.map((group) => ({
    title: group.title,
    items: group.slugs
      .map((slug) => bySlug.get(slug))
      .filter((r): r is NonNullable<typeof r> => Boolean(r)),
  })).filter((group) => group.items.length > 0);

  return (
    <section className="section-padding bg-background">
      <div className="container-editorial">
        <div className="text-center mb-14">
          <p className="text-caption text-gold mb-4">Onde desenhamos viagens</p>
          <h2 className="heading-section text-foreground mb-4">
            Regiões que trabalhamos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Curadoria autoral em sete frentes do mundo — cada região com
            parceiros próprios, guias de confiança e hospedagens visitadas por
            nós.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-card border border-border rounded-xl p-7 shadow-card"
            >
              <div className="flex items-center gap-3 mb-5">
                <Globe2 size={20} className="text-gold" />
                <h3 className="font-serif text-xl text-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((region) => (
                  <li key={region.slug}>
                    <Link
                      to={`/${region.slug}`}
                      className="inline-block px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:border-gold hover:text-gold transition-colors"
                    >
                      {region.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/destinos" className="btn-outline">
            Ver todos os destinos
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};
