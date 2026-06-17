import { Plane, MapPin, BedDouble, CheckCircle2, XCircle, Info, Calendar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import type { Itinerary } from "@/lib/types";

interface Props {
  itineraries: Itinerary[];
  destinationName: string;
  destinationTags: string[];
}

export const ItinerariesSection = ({ itineraries, destinationName, destinationTags }: Props) => {
  return (
    <section id="roteiros" className="section-padding bg-muted/40 border-y border-border/40">
      <div className="container-editorial">
        <p className="text-caption text-gold mb-3">Roteiros com preço</p>
        <h2 className="heading-section mb-3">Roteiros prontos em {destinationName}</h2>
        <p className="text-foreground/80 max-w-3xl mb-10 text-editorial">
          Sugestões com curadoria Create Travel, com voos, hospedagens e experiências já desenhados.
          Todos podem ser ajustados às suas datas, ritmo e preferências.
        </p>

        <div className="space-y-10">
          {itineraries.map((it, idx) => (
            <article
              key={idx}
              className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden"
            >
              {/* Header */}
              <header className="p-6 sm:p-8 border-b border-border bg-gradient-to-br from-card to-muted/30">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mb-3">
                      {it.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/75 mb-4">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} className="text-gold" /> {it.duration}
                      </span>
                    </div>
                    {it.summary && (
                      <p className="text-foreground/85 leading-relaxed max-w-2xl">{it.summary}</p>
                    )}
                  </div>

                  <div className="lg:w-72 shrink-0 rounded-xl bg-primary text-primary-foreground p-5">
                    <p className="text-caption text-gold mb-1">A partir de</p>
                    <p className="text-3xl font-serif font-semibold leading-none">
                      {it.currency || "USD"} {it.pricePerPerson}
                    </p>
                    {it.priceBasis && (
                      <p className="text-xs text-primary-foreground/80 mt-2">{it.priceBasis}</p>
                    )}
                    {it.taxes && (
                      <p className="text-xs text-primary-foreground/70 mt-1">+ {it.taxes}</p>
                    )}
                    <WhatsAppButton
                      variant="cta"
                      label="Quero este roteiro"
                      params={{
                        type: "Destino",
                        name: `${destinationName} — ${it.title}`,
                        tags: destinationTags,
                      }}
                      className="w-full mt-4"
                    />
                  </div>
                </div>
              </header>

              {/* Flights */}
              {it.flights && it.flights.length > 0 && (
                <div className="p-6 sm:p-8 border-b border-border">
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Plane size={18} className="text-gold" /> Itinerário aéreo
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="text-left text-xs uppercase tracking-wider text-muted-foreground border-b border-border">
                          <th className="py-2 pr-3">Cia / Voo</th>
                          <th className="py-2 pr-3">Data</th>
                          <th className="py-2 pr-3">Origem</th>
                          <th className="py-2 pr-3">Destino</th>
                          <th className="py-2 pr-3">Saída</th>
                          <th className="py-2 pr-3">Chegada</th>
                        </tr>
                      </thead>
                      <tbody>
                        {it.flights.map((f, i) => (
                          <tr key={i} className="border-b border-border/40 last:border-0">
                            <td className="py-2 pr-3 font-medium text-foreground">
                              {f.airline}{f.flight ? ` · ${f.flight}` : ""}
                            </td>
                            <td className="py-2 pr-3 text-foreground/80">{f.date}</td>
                            <td className="py-2 pr-3 text-foreground/80">{f.from}</td>
                            <td className="py-2 pr-3 text-foreground/80">{f.to}</td>
                            <td className="py-2 pr-3 text-foreground/80">{f.departure}</td>
                            <td className="py-2 pr-3 text-foreground/80">
                              {f.arrival}{f.arrivalDate && f.arrivalDate !== f.date ? ` (${f.arrivalDate})` : ""}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  {it.airTicketNote && (
                    <p className="text-xs text-muted-foreground mt-3">{it.airTicketNote}</p>
                  )}
                </div>
              )}

              {/* Day-by-day */}
              <div className="p-6 sm:p-8 border-b border-border">
                <h4 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin size={18} className="text-gold" /> Dia a dia
                </h4>
                <Accordion type="multiple" className="space-y-2">
                  {it.days.map((d, i) => (
                    <AccordionItem
                      key={i}
                      value={`d-${idx}-${i}`}
                      className="rounded-lg border border-border/60 bg-background px-4 data-[state=open]:border-gold/60"
                    >
                      <AccordionTrigger className="hover:no-underline py-3 text-left">
                        <span className="flex gap-3 items-start pr-2">
                          <span className="text-gold font-semibold shrink-0 min-w-[2.5rem]">
                            Dia {d.day}
                          </span>
                          <span className="text-foreground font-medium">
                            {d.location}
                            {d.date && (
                              <span className="text-muted-foreground font-normal ml-2 text-sm">
                                · {d.date}
                              </span>
                            )}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-4 pl-[3.25rem] pr-1 text-foreground/85 leading-relaxed text-[15px]">
                        {d.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Hotels */}
              {it.hotels && it.hotels.length > 0 && (
                <div className="p-6 sm:p-8 border-b border-border">
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-4 flex items-center gap-2">
                    <BedDouble size={18} className="text-gold" /> Hospedagens selecionadas
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {it.hotels.map((h, i) => (
                      <div key={i} className="rounded-lg border border-border/60 bg-background p-4">
                        <p className="text-caption text-gold mb-1">
                          {h.city} · {h.nights} {h.nights === 1 ? "noite" : "noites"}
                        </p>
                        <p className="font-medium text-foreground">{h.hotel}</p>
                        <p className="text-sm text-foreground/70 mt-1">
                          {[h.category, h.room].filter(Boolean).join(" · ")}
                        </p>
                        {h.includes && (
                          <p className="text-xs text-muted-foreground mt-2">{h.includes}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Includes / Excludes */}
              {(it.includes?.length || it.excludes?.length) && (
                <div className="p-6 sm:p-8 border-b border-border grid md:grid-cols-2 gap-6">
                  {it.includes && it.includes.length > 0 && (
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-emerald-700" /> O roteiro inclui
                      </h4>
                      <ul className="space-y-2 text-sm text-foreground/85">
                        {it.includes.map((line, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-emerald-700 mt-1">•</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {it.excludes && it.excludes.length > 0 && (
                    <div>
                      <h4 className="text-lg font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
                        <XCircle size={18} className="text-muted-foreground" /> Não inclui
                      </h4>
                      <ul className="space-y-2 text-sm text-foreground/85">
                        {it.excludes.map((line, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="text-muted-foreground mt-1">•</span>
                            <span>{line}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Notes */}
              {it.notes && it.notes.length > 0 && (
                <div className="p-6 sm:p-8">
                  <h4 className="text-lg font-serif font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Info size={18} className="text-gold" /> Informações importantes
                  </h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    {it.notes.map((n, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-gold mt-1">•</span>
                        <span>{n}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
