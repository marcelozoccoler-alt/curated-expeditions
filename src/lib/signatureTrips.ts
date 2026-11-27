import heroAsset from "@/assets/laponia-signature-hero.jpg.asset.json";
import islandiaAsset from "@/assets/islandia-signature-hero.jpg.asset.json";

const ASSET_ORIGIN = "https://id-preview--42652cab-79cf-4f24-aaf7-366f68e48196.lovable.app";

export interface SignatureTrip {
  slug: string;
  title: string;
  collection: string;
  subtitle: string;
  dates: string;
  departureDate: string;
  duration: string;
  destinations: string[];
  countries: string[];
  image: string;
  imageAlt: string;
  href: string;
  status: string;
  /** Tipo de acompanhamento: guia brasileiro saindo do Brasil ou guia local no destino. */
  guide?: "Guia brasileiro" | "Guia local";
}

export const signatureTrips: SignatureTrip[] = [
  {
    slug: "laponia-rovaniemi-aurora-boreal-janeiro-2027",
    title: "Lapônia Finlandesa: Rovaniemi & Aurora Boreal",
    collection: "Create Signature · Grupo especial",
    subtitle: "Renas, sauna finlandesa privada, Vila do Papai Noel e caçada à aurora boreal",
    dates: "23 a 26 de janeiro de 2027",
    departureDate: "2027-01-23",
    duration: "4 dias / 3 noites",
    destinations: ["Rovaniemi", "Círculo Polar Ártico"],
    countries: ["Finlândia"],
    image: `${ASSET_ORIGIN}${heroAsset.url}`,
    imageAlt: "Aurora boreal sobre a floresta nevada de Rovaniemi, na Lapônia finlandesa",
    href: "/grupos-guia-local/laponia-rovaniemi-aurora-boreal-janeiro-2027",
    status: "Reservas abertas",
    guide: "Guia local",
  },
  {
    slug: "islandia-aurora-boreal-marco-2027",
    title: "Islândia: Gelo, Fogo & Aurora Boreal",
    collection: "Create Signature · Grupo especial",
    subtitle: "Cavernas de gelo, Jökulsárlón, Círculo Dourado e noite no Silica Hotel da Blue Lagoon",
    dates: "14 a 21 de março de 2027",
    departureDate: "2027-03-14",
    duration: "8 dias / 7 noites",
    destinations: ["Reykjavík", "Círculo Dourado", "Costa Sul", "Jökulsárlón", "Blue Lagoon"],
    countries: ["Islândia"],
    image: `${ASSET_ORIGIN}${islandiaAsset.url}`,
    imageAlt: "Paisagem da Islândia no inverno, entre gelo e montanhas",
    href: "/grupos-guia-local/islandia-aurora-boreal-marco-2027",
    status: "Reservas abertas",
    guide: "Guia local",
  },
  {
    slug: "laponia-circulo-polar-2027",
    title: "Lapônia: Luzes do Círculo Polar",
    collection: "Create Signature",
    subtitle: "Aurora boreal, quebra-gelo e culturas do extremo norte",
    dates: "25 de março a 6 de abril de 2027",
    departureDate: "2027-03-25",
    duration: "13 dias / 10 noites",
    destinations: ["Helsinque", "Rovaniemi", "Kemi", "Tromsø", "Oslo"],
    countries: ["Finlândia", "Noruega"],
    image: `${ASSET_ORIGIN}${heroAsset.url}`,
    imageAlt:
      "Aurora boreal sobre floresta nevada e hospedagem iluminada na Lapônia",
    href: "/grupos/laponia-circulo-polar-2027",
    status: "Reservas abertas",
  },
  {
    slug: "laponia-natal-reveillon-2027",
    title: "Lapônia: Natal Branco & Réveillon em Oslo",
    collection: "Create Signature",
    subtitle: "Celebrações nórdicas, aurora boreal e experiências no Círculo Polar",
    dates: "21 de dezembro de 2026 a 2 de janeiro de 2027",
    departureDate: "2026-12-21",
    duration: "13 dias / 10 noites",
    destinations: ["Helsinque", "Rovaniemi", "Kemi", "Tromsø", "Oslo"],
    countries: ["Finlândia", "Noruega"],
    image: `${ASSET_ORIGIN}${heroAsset.url}`,
    imageAlt: "Aurora boreal sobre a paisagem nevada da Lapônia no inverno",
    href: "/grupos/laponia-natal-reveillon-2027",
    status: "Saída confirmada",
  },
];

export const laponiaSignature = signatureTrips.find((t) => t.slug === "laponia-circulo-polar-2027")!;
export const laponiaReveillonSignature = signatureTrips.find((t) => t.slug === "laponia-natal-reveillon-2027")!;
/** Grupos especiais Signature com guia local, em destaque no site. */
export const signatureLocalGuideTrips = signatureTrips.filter((t) => t.guide === "Guia local");