import { memo } from "react";
import { Link } from "react-router-dom";
import { Destination } from "@/lib/types";

interface DestinationListItemProps {
  destination: Destination;
}

export const DestinationListItem = memo(({ destination }: DestinationListItemProps) => {
  return (
    <div className="group">
      <Link
        to={`/destinos/${destination.slug}`}
        className="flex items-center justify-between py-4 md:py-5 border-b border-border/60 transition-colors duration-300 hover:border-gold/40"
      >
        <span className="font-serif text-lg md:text-xl lg:text-2xl text-foreground group-hover:text-gold transition-colors duration-300">
          {destination.name}
        </span>
        <span className="text-muted-foreground text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
          Abrir roteiro →
        </span>
      </Link>
    </div>
  );
});
DestinationListItem.displayName = "DestinationListItem";
