import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { Stay } from "@/lib/types";
import { getTagsByIds } from "@/lib/types";

interface StayCardProps {
  stay: Stay;
  index?: number;
}

export const StayCard = ({ stay, index = 0 }: StayCardProps) => {
  const tags = getTagsByIds(stay.tags.slice(0, 2));
  
  const imageUrl = stay.imageOverrideUrl || `https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop`;
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="card-destination group"
    >
      <Link to={`/hospedagens/${stay.slug}`} className="block">
        <div className="relative aspect-[3/2] overflow-hidden">
          <img
            src={imageUrl}
            alt={stay.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* Badge */}
          <div className="absolute top-4 left-4 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-gold text-white text-xs font-medium">
            <Star size={12} fill="currentColor" />
            Seleção Create Travel
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 to-transparent">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white"
                >
                  {tag.label}
                </span>
              ))}
            </div>
            
            <h3 className="heading-card text-white">
              {stay.name}
            </h3>
          </div>
        </div>
        
        <div className="p-5 bg-card">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {stay.whySelected}
          </p>
        </div>
      </Link>
    </motion.article>
  );
};
