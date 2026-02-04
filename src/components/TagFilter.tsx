import { useState } from "react";
import { motion } from "framer-motion";
import { TAGS, Tag } from "@/lib/types";

interface TagFilterProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  showAll?: boolean;
}

export const TagFilter = ({ selectedTags, onTagsChange, showAll = false }: TagFilterProps) => {
  const [showMore, setShowMore] = useState(showAll);
  
  const displayedTags = showMore ? TAGS : TAGS.slice(0, 8);
  
  const toggleTag = (tagId: string) => {
    if (selectedTags.includes(tagId)) {
      onTagsChange(selectedTags.filter((t) => t !== tagId));
    } else {
      onTagsChange([...selectedTags, tagId]);
    }
  };
  
  const clearAll = () => {
    onTagsChange([]);
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Filtrar por experiência
        </h3>
        {selectedTags.length > 0 && (
          <button
            onClick={clearAll}
            className="text-sm text-gold hover:text-gold-light transition-colors"
          >
            Limpar filtros
          </button>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2">
        {displayedTags.map((tag) => (
          <motion.button
            key={tag.id}
            onClick={() => toggleTag(tag.id)}
            whileTap={{ scale: 0.95 }}
            className={`tag ${selectedTags.includes(tag.id) ? "tag-active" : ""}`}
          >
            {tag.label}
          </motion.button>
        ))}
        
        {!showAll && TAGS.length > 8 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="tag text-gold border border-gold/30 bg-transparent hover:bg-gold/10"
          >
            {showMore ? "Ver menos" : `+${TAGS.length - 8} mais`}
          </button>
        )}
      </div>
    </div>
  );
};
