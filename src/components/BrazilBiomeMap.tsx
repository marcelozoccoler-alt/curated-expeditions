import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X } from "lucide-react";
import type { Lang } from "@/i18n/config";
import { BIOMES, BIOMES_BY_ID, type BiomeId } from "@/lib/biomes";
import { INCOMING_DESTINATIONS } from "@/lib/incomingDestinations";
import { BRAZIL_OUTLINE, BIOME_REGION_PATHS, DEST_COORDS, PANTANAL_PATH } from "@/lib/brazilGeo";

/**
 * Brazil map by biomes — built from real GeoJSON (Brazilian state borders)
 * projected into a 600×700 viewBox via equirectangular projection.
 * Biome regions are state-grouped (editorial, not survey-grade).
 */
const BIOME_PATHS: Record<BiomeId, string> = {
  amazonia: BIOME_REGION_PATHS["amazonia"],
  cerrado: BIOME_REGION_PATHS["cerrado"],
  caatinga: BIOME_REGION_PATHS["caatinga"],
  "mata-atlantica": BIOME_REGION_PATHS["mata-atlantica"],
  pantanal: PANTANAL_PATH,
  pampa: BIOME_REGION_PATHS["pampa"],
  // Costa is implicit along the coastline (no fill region)
  costa: "",
};

interface Props {
  lang: Lang;
}

export const BrazilBiomeMap = ({ lang }: Props) => {
  const [activeBiome, setActiveBiome] = useState<BiomeId | null>(null);
  const [activeDestSlug, setActiveDestSlug] = useState<string | null>(null);

  const activeDest = activeDestSlug
    ? INCOMING_DESTINATIONS.find((d) => d.slug === activeDestSlug) || null
    : null;

  const labels: Record<Lang, { fauna: string; flora: string; wow: string; tap: string; close: string }> = {
    pt: { fauna: "Fauna", flora: "Flora", wow: "O uau do lugar", tap: "Toque um destino para descobrir", close: "Fechar" },
    en: { fauna: "Wildlife", flora: "Flora", wow: "The wow of the place", tap: "Tap a destination to discover it", close: "Close" },
    es: { fauna: "Fauna", flora: "Flora", wow: "El asombro del lugar", tap: "Toca un destino para descubrir", close: "Cerrar" },
    it: { fauna: "Fauna", flora: "Flora", wow: "La meraviglia del luogo", tap: "Tocca una destinazione per scoprirla", close: "Chiudi" },
    de: { fauna: "Tierwelt", flora: "Flora", wow: "Das Wow des Ortes", tap: "Tippe ein Reiseziel an, um es zu entdecken", close: "Schließen" },
  };
  const L = labels[lang];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-start">
      {/* Map */}
      <div className="relative">
        <div className="relative aspect-[6/7] w-full max-w-2xl mx-auto">
          <svg
            viewBox="0 0 600 700"
            className="w-full h-full"
            role="img"
            aria-label="Mapa do Brasil por biomas"
          >
            <defs>
              <clipPath id="brazil-clip">
                <path d={BRAZIL_OUTLINE} />
              </clipPath>
              <filter id="bm-soft" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* Soft outline glow */}
            <path
              d={BRAZIL_OUTLINE}
              fill="hsl(var(--muted))"
              opacity="0.4"
              transform="translate(4 4)"
              filter="url(#bm-soft)"
            />

            {/* Biome regions, clipped to Brazil */}
            <g clipPath="url(#brazil-clip)">
              {BIOMES.map((b) => {
                const isActive = activeBiome === b.id;
                const isDimmed = activeBiome !== null && !isActive;
                return (
                  <path
                    key={b.id}
                    d={BIOME_PATHS[b.id]}
                    fill={b.color}
                    opacity={isDimmed ? 0.25 : 0.78}
                    onMouseEnter={() => setActiveBiome(b.id)}
                    onMouseLeave={() => setActiveBiome(null)}
                    onClick={() => setActiveBiome(isActive ? null : b.id)}
                    className="cursor-pointer transition-opacity duration-300"
                  />
                );
              })}
            </g>

            {/* Brazil outline stroke */}
            <path
              d={BRAZIL_OUTLINE}
              fill="none"
              stroke="hsl(var(--foreground) / 0.65)"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Destination pins */}
            {INCOMING_DESTINATIONS.map((d) => {
              const biome = BIOMES_BY_ID[d.biome];
              const isActive = activeDestSlug === d.slug;
              const isHighlighted = activeBiome === null || activeBiome === d.biome;
              return (
                <g
                  key={d.slug}
                  transform={`translate(${d.map.x} ${d.map.y})`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveDestSlug(d.slug);
                  }}
                  onMouseEnter={() => setActiveBiome(d.biome)}
                  onMouseLeave={() => setActiveBiome(null)}
                  className="cursor-pointer"
                  opacity={isHighlighted ? 1 : 0.3}
                >
                  <circle
                    r={isActive ? 9 : 6}
                    fill="hsl(var(--gold))"
                    stroke={biome.color}
                    strokeWidth="2"
                    className="transition-all duration-200"
                  />
                  <circle r={2.5} fill="hsl(var(--primary))" />
                  <text
                    x={10}
                    y={4}
                    fontSize="11"
                    fontFamily="Inter, sans-serif"
                    fontWeight={isActive ? 600 : 500}
                    fill="hsl(var(--foreground))"
                    style={{ paintOrder: "stroke", stroke: "hsl(var(--background))", strokeWidth: 3, strokeLinejoin: "round" }}
                  >
                    {d.name[lang]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Pop-up destination card */}
        <AnimatePresence>
          {activeDest && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25 }}
              className="mt-4 lg:absolute lg:bottom-0 lg:left-4 lg:right-4 lg:mt-0 rounded-lg bg-card border border-border shadow-xl overflow-hidden"
            >
              <div className="flex gap-4">
                <img
                  src={activeDest.image}
                  alt={activeDest.name[lang]}
                  className="w-28 h-28 object-cover flex-shrink-0"
                />
                <div className="flex-1 p-4 pr-10 relative">
                  <button
                    onClick={() => setActiveDestSlug(null)}
                    aria-label={L.close}
                    className="absolute top-2 right-2 text-muted-foreground hover:text-foreground"
                  >
                    <X size={16} />
                  </button>
                  <div className="flex items-center gap-1 text-[10px] uppercase tracking-wider mb-1" style={{ color: BIOMES_BY_ID[activeDest.biome].color }}>
                    <MapPin size={10} />
                    <span>{BIOMES_BY_ID[activeDest.biome].name[lang]}</span>
                  </div>
                  <h4 className="font-serif text-lg text-foreground mb-1">{activeDest.name[lang]}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3">{activeDest.blurb[lang]}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Legend / biome detail */}
      <div>
        <div className="space-y-2">
          {BIOMES.map((b) => {
            const isActive = activeBiome === b.id;
            return (
              <button
                key={b.id}
                onMouseEnter={() => setActiveBiome(b.id)}
                onMouseLeave={() => setActiveBiome(null)}
                onClick={() => setActiveBiome(isActive ? null : b.id)}
                className={`w-full text-left rounded-md border transition-all overflow-hidden ${
                  isActive ? "border-gold shadow-md" : "border-border hover:border-foreground/30"
                }`}
              >
                <div className="flex items-center gap-3 p-3">
                  <span
                    className="w-5 h-5 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: b.color }}
                    aria-hidden
                  />
                  <span className="font-serif text-base text-foreground flex-1">
                    {b.name[lang]}
                  </span>
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-3 pb-4 pt-1 space-y-3 text-sm">
                        <p className="text-muted-foreground leading-relaxed italic">
                          {b.description[lang]}
                        </p>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                            {L.fauna}
                          </p>
                          <p className="text-foreground/85 leading-relaxed">{b.fauna[lang]}</p>
                        </div>
                        <div>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">
                            {L.flora}
                          </p>
                          <p className="text-foreground/85 leading-relaxed">{b.flora[lang]}</p>
                        </div>
                        <div className="border-l-2 pl-3" style={{ borderColor: b.color }}>
                          <p className="text-[10px] uppercase tracking-[0.2em] mb-1" style={{ color: b.color }}>
                            {L.wow}
                          </p>
                          <p className="text-foreground leading-relaxed">{b.wow[lang]}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-4 italic">{L.tap}</p>
      </div>
    </div>
  );
};
