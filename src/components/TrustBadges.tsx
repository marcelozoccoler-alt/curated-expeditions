import { motion } from "framer-motion";
import { CalendarCheck, Map, Users, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/types";

interface TrustBadgesProps {
  /** Número de destinos com curadoria. */
  destinationsCount: number;
  /** Número de saídas em grupo publicadas. */
  departuresCount: number;
}

/**
 * Prova social logo abaixo do hero — números verificáveis e Cadastur.
 * Mobile-first: empilha em coluna, vira grade de 4 no desktop.
 */
export const TrustBadges = ({ destinationsCount, departuresCount }: TrustBadgesProps) => {
  const items = [
    {
      icon: CalendarCheck,
      value: "11 anos",
      label: "Desenhando viagens do zero",
    },
    {
      icon: Map,
      value: `${destinationsCount} destinos`,
      label: "Em todos os continentes",
    },
    {
      icon: Users,
      value: `${departuresCount} saídas`,
      label: "Grupos com guia brasileiro 2026/2027",
    },
    {
      icon: ShieldCheck,
      value: "Cadastur ✓",
      label: `Agência registrada · CNPJ ${CONTACT.cadastur}`,
    },
  ];

  return (
    <section aria-label="Números e confiança" className="bg-muted/40 border-y border-border">
      <div className="container-editorial py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-3 lg:flex-col lg:items-center lg:text-center"
            >
              <Icon size={22} className="text-gold shrink-0 mt-1 lg:mt-0" strokeWidth={1.5} />
              <div>
                <p className="font-serif text-xl md:text-2xl text-foreground leading-tight">
                  {value}
                </p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
