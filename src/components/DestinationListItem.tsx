import { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Destination } from "@/lib/types";

interface DestinationListItemProps {
  destination: Destination;
  index?: number;
}

export const DestinationListItem = memo(({ destination, index = 0 }: DestinationListItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.03, 0.3), duration: 0.4 }}
      className="group"
    >
      <Link
        to={`/destinos/${destination.slug}`}
        className="flex items-center justify-between py-4 md:py-5 border-b border-border/60 transition-colors duration-300 hover:border-gold/40"
      >
        <span className="font-serif text-lg md:text-xl lg:text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
          {destination.name}
        </span>
        <span className="text-muted-foreground text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-[-8px] group-hover:translate-x-0">
          Abrir roteiro →
        </span>
      </Link>
    </motion.div>
  );
});
DestinationListItem.displayName = "DestinationListItem";
