import heroAsset from "@/assets/laponia-signature-hero.jpg.asset.json";

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
    image: heroAsset.url,
    imageAlt:
      "Aurora boreal sobre floresta nevada e hospedagem iluminada na Lapônia",
    href: "/grupos/laponia-circulo-polar-2027",
    status: "Reservas abertas",
  },
];

export const laponiaSignature = signatureTrips[0];