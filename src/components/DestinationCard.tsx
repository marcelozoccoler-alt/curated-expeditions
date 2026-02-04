import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Destination } from "@/lib/types";
import { getTagsByIds } from "@/lib/types";

interface DestinationCardProps {
  destination: Destination;
  index?: number;
}

// Default images for destinations without overrides
const defaultImages: Record<string, string> = {
  "brasil-amazonia-anavilhanas": "/hero-amazon.jpg",
  "africa-tanzania-serengeti": "/hero-serengeti.jpg",
  "america-do-sul-patagonia": "/hero-patagonia.jpg",
};

export const DestinationCard = ({ destination, index = 0 }: DestinationCardProps) => {
  const tags = getTagsByIds(destination.tags.slice(0, 3));
  
  // For now, use a placeholder or the AI prompt description for alt text
  const imageUrl = destination.imageOverrideUrl || defaultImages[destination.id] || `https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop`;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-destination group"
    >
      <Link to={`/destinos/${destination.slug}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={imageUrl}
            alt={`${destination.name}, ${destination.country}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Overlay content */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white"
                >
                  {tag.label}
                </span>
              ))}
            </div>
            
            {/* Title and location */}
            <h3 className="heading-card text-white mb-2">
              {destination.name}
            </h3>
            
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center gap-1">
                <MapPin size={14} />
                {destination.country}
              </span>
              <span className="flex items-center gap-1">
                <Calendar size={14} />
                {destination.bestTime.split(" ")[0]}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};
