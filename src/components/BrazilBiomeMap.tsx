import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ChevronRight } from "lucide-react";
import { type Lang, type ContentLang, toContentLang } from "@/i18n/config";
import { BIOMES, BIOMES_BY_ID, type BiomeId } from "@/lib/biomes";
import { INCOMING_DESTINATIONS } from "@/lib/incomingDestinations";
import { BRAZIL_OUTLINE, BIOME_REGION_PATHS, PANTANAL_PATH } from "@/lib/brazilGeo";

/**
 * Brazil map by biomes — biome regions are labeled directly on the map.
 * Destinations live inside each biome's expanded legend card with a
 * sensory blurb that entices the traveler.
 */
const BIOME_PATHS: Record<BiomeId, string> = {
  amazonia: BIOME_REGION_PATHS["amazonia"],
  cerrado: BIOME_REGION_PATHS["cerrado"],
  caatinga: BIOME_REGION_PATHS["caatinga"],
  "mata-atlantica": BIOME_REGION_PATHS["mata-atlantica"],
  pantanal: PANTANAL_PATH,
  pampa: BIOME_REGION_PATHS["pampa"],
  costa: "",
};

/** Map-label centroid per biome (viewBox 600x700). */
const BIOME_LABEL_POS: Record<BiomeId, { x: number; y: number; anchor?: "start" | "middle" | "end" }> = {
  amazonia: { x: 215, y: 215 },
  cerrado: { x: 380, y: 360 },
  "mata-atlantica": { x: 470, y: 495 },
  caatinga: { x: 490, y: 280 },
  pantanal: { x: 252, y: 410 },
  pampa: { x: 318, y: 615 },
  costa: { x: 580, y: 380, anchor: "end" },
};

interface Props {
  lang: Lang;
}

export const BrazilBiomeMap = ({ lang }: Props) => {
  const cLang = toContentLang(lang);
  const [activeBiome, setActiveBiome] = useState<BiomeId | null>(null);
  const [activeDestSlug, setActiveDestSlug] = useState<string | null>(null);

  const activeDest = activeDestSlug
    ? INCOMING_DESTINATIONS.find((d) => d.slug === activeDestSlug) || null
    : null;

  const destsByBiome = useMemo(() => {
    const map: Record<BiomeId, typeof INCOMING_DESTINATIONS> = {
      amazonia: [], cerrado: [], "mata-atlantica": [], caatinga: [],
      pantanal: [], pampa: [], costa: [],
    };
    for (const d of INCOMING_DESTINATIONS) map[d.biome].push(d);
    return map;
  }, []);

  const labels: Record<ContentLang, {
    fauna: string; flora: string; wow: string; tap: string; close: string;
    destinations: string; discover: string;
  }> = {
    pt: { fauna: "Fauna", flora: "Flora", wow: "O uau do lugar", tap: "Toque um bioma no mapa ou na legenda", close: "Fechar", destinations: "Destinos deste bioma", discover: "Descobrir" },
    en: { fauna: "Wildlife", flora: "Flora", wow: "The wow of the place", tap: "Tap a biome on the map or in the legend", close: "Close", destinations: "Destinations in this biome", discover: "Discover" },
    es: { fauna: "Fauna", flora: "Flora", wow: "El asombro del lugar", tap: "Toca un bioma en el mapa o en la leyenda", close: "Cerrar", destinations: "Destinos de este bioma", discover: "Descubrir" },
    it: { fauna: "Fauna", flora: "Flora", wow: "La meraviglia del luogo", tap: "Tocca un bioma sulla mappa o nella legenda", close: "Chiudi", destinations: "Destinazioni in questo bioma", discover: "Scopri" },
    de: { fauna: "Tierwelt", flora: "Flora", wow: "Das Wow des Ortes", tap: "Tippe ein Biom auf der Karte oder in der Legende an", close: "Schließen", destinations: "Reiseziele in diesem Biom", discover: "Entdecken" },
  };
  const L = labels[cLang];

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
                if (!BIOME_PATHS[b.id]) return null;
                const isActive = activeBiome === b.id;
                const isDimmed = activeBiome !== null && !isActive;
                return (
                  <path
                    key={b.id}
                    d={BIOME_PATHS[b.id]}
                    fill={b.color}
                    opacity={isDimmed ? 0.2 : 0.82}
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

            {/* Biome name labels on the map */}
            {BIOMES.map((b) => {
              const pos = BIOME_LABEL_POS[b.id];
              if (!pos) return null;
              const isActive = activeBiome === b.id;
              const isDimmed = activeBiome !== null && !isActive;
              return (
                <g
                  key={`label-${b.id}`}
                  transform={`translate(${pos.x} ${pos.y})`}
                  onMouseEnter={() => setActiveBiome(b.id)}
                  onMouseLeave={() => setActiveBiome(null)}
                  onClick={() => setActiveBiome(isActive ? null : b.id)}
                  className="cursor-pointer transition-opacity duration-300"
                  opacity={isDimmed ? 0.35 : 1}
                >
                  <text
                    textAnchor={pos.anchor ?? "middle"}
                    fontSize={isActive ? 15 : 13}
                    fontFamily="'Playfair Display', serif"
                    fontWeight={600}
                    fill="hsl(var(--foreground))"
                    style={{
                      paintOrder: "stroke",
                      stroke: "hsl(var(--background))",
                      strokeWidth: 4,
                      strokeLinejoin: "round",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {b.name[lang]}
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
            const biomeDests = destsByBiome[b.id];
            return (
              <div
                key={b.id}
                className={`w-full rounded-md border transition-all overflow-hidden ${
                  isActive ? "border-gold shadow-md" : "border-border"
                }`}
              >
                <button
                  onMouseEnter={() => setActiveBiome(b.id)}
                  onClick={() => setActiveBiome(isActive ? null : b.id)}
                  className="w-full text-left hover:bg-muted/40 transition-colors"
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
                    <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {biomeDests.length}
                    </span>
                  </div>
                </button>
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

                        {biomeDests.length > 0 && (
                          <div className="pt-2 border-t border-border/60">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                              {L.destinations}
                            </p>
                            <ul className="space-y-1.5">
                              {biomeDests.map((d) => (
                                <li key={d.slug}>
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setActiveDestSlug(d.slug);
                                    }}
                                    className="group w-full flex items-start gap-3 text-left rounded-md p-2 -mx-2 hover:bg-muted/60 transition-colors"
                                  >
                                    <img
                                      src={d.image}
                                      alt={d.name[lang]}
                                      className="w-12 h-12 object-cover rounded-sm flex-shrink-0"
                                      loading="lazy"
                                    />
                                    <span className="flex-1 min-w-0">
                                      <span className="block font-serif text-sm text-foreground leading-tight">
                                        {d.name[lang]}
                                      </span>
                                      <span className="block text-xs text-muted-foreground leading-snug line-clamp-2 mt-0.5">
                                        {d.blurb[lang]}
                                      </span>
                                    </span>
                                    <ChevronRight
                                      size={14}
                                      className="text-muted-foreground group-hover:text-gold transition-colors mt-1 flex-shrink-0"
                                      aria-label={L.discover}
                                    />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <p className="text-xs text-muted-foreground mt-4 italic">{L.tap}</p>
      </div>
    </div>
  );
};
