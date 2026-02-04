import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ } from "@/lib/types";

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

export const FAQSection = ({ faqs, title = "Perguntas frequentes" }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="space-y-6">
      <h2 className="heading-section text-foreground">{title}</h2>
      
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium text-foreground pr-4">{faq.q}</span>
              <ChevronDown
                size={20}
                className={`flex-shrink-0 text-muted-foreground transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};
