import heroAsset from "@/assets/laponia-signature-hero.jpg.asset.json";

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
}

export const signatureTrips: SignatureTrip[] = [
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

export const laponiaSignature = signatureTrips[0];
export const laponiaReveillonSignature = signatureTrips[1];