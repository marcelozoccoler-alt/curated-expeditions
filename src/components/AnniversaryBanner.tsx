import { motion } from "framer-motion";
import { Cake } from "lucide-react";
import { companyAnniversaryYears, isCompanyAnniversary } from "@/lib/company";

/**
 * Faixa comemorativa exibida automaticamente durante todo o mês de setembro,
 * mês de fundação da Create Travel (12/09/2014).
 * Fora de setembro o componente não renderiza nada.
 */
export const AnniversaryBanner = () => {
  if (!isCompanyAnniversary()) return null;
  const years = companyAnniversaryYears();

  return (
    <motion.section
      aria-label={`Aniversário de ${years} anos da Create Travel`}
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-navy text-primary-foreground"
    >
      <div className="container-editorial py-4 flex items-center justify-center gap-3 text-center">
        <Cake size={20} className="text-gold shrink-0" strokeWidth={1.5} />
        <p className="font-serif text-base md:text-lg font-light tracking-wide">
          Setembro é mês de festa: a Create Travel completa{" "}
          <span className="text-gold">{years} anos</span> desenhando viagens do
          zero — obrigado por viajar com a gente.
        </p>
        <Cake size={20} className="text-gold shrink-0" strokeWidth={1.5} />
      </div>
    </motion.section>
  );
};
