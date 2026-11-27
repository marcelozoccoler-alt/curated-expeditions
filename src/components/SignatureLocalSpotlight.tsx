import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Compass, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { signatureLocalGuideTrips } from "@/lib/signatureTrips";

/** Destaque da home: grupos especiais Create Signature com guia local. */
export const SignatureLocalSpotlight = () => (
  <section className="section-padding bg-navy text-primary-foreground" aria-labelledby="signature-local-title">
    <div className="container-editorial">
      <div className="max-w-3xl mb-10">
        <p className="text-caption text-gold mb-3 inline-flex items-center gap-2">
          <Sparkles size={16} /> Create Signature · Grupos especiais com guia local
        </p>
        <h2 id="signature-local-title" className="heading-section mb-4">
          Aurora boreal em 2027: Lapônia e Islândia
        </h2>
        <p className="text-primary-foreground/80 text-lg font-light">
          Duas jornadas raras ao norte do mundo, com guias locais, hotéis selecionados e experiências privadas.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {signatureLocalGuideTrips.map((trip) => (
          <article key={trip.slug} className="bg-card text-card-foreground rounded-lg overflow-hidden flex flex-col">
            <Link to={trip.href} className="block aspect-[16/10] overflow-hidden">
              <img src={trip.image} alt={trip.imageAlt} loading="lazy" width={1600} height={1000}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
            </Link>
            <div className="p-7 flex flex-col flex-1">
              <p className="text-caption text-gold mb-3">{trip.status} · {trip.guide}</p>
              <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-3">{trip.title}</h3>
              <p className="text-muted-foreground mb-5">{trip.subtitle}</p>
              <div className="space-y-2 text-sm mb-6">
                <p className="flex gap-3"><Calendar size={18} className="text-gold shrink-0" /> {trip.dates} · {trip.duration}</p>
                <p className="flex gap-3"><Compass size={18} className="text-gold shrink-0" /> {trip.destinations.join(" · ")}</p>
              </div>
              <Button asChild className="self-start mt-auto">
                <Link to={trip.href}>Ver roteiro completo <ArrowRight /></Link>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
