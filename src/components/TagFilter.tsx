import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, ChevronDown, X } from "lucide-react";
import { TAGS, Tag } from "@/lib/types";

interface TagFilterProps {
  selectedTags: string[];
  onTagsChange: (tags: string[]) => void;
  showAll?: boolean;
  collapsible?: boolean;
}

export const TagFilter = ({
  selectedTags,
  onTagsChange,
  showAll = false,
  collapsible = false,
}: TagFilterProps) => {
  const [showMore, setShowMore] = useState(showAll);
  const [isOpen, setIsOpen] = useState(!collapsible);

  // When switching to collapsible mode (e.g. mobile detection), keep it closed.
  useEffect(() => {
    setIsOpen(!collapsible);
  }, [collapsible]);

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

  if (collapsible) {
    return (
      <div className="border border-border rounded-xl bg-background/50">
        <button
          onClick={() => setIsOpen((s) => !s)}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 text-left"
          aria-expanded={isOpen}
          aria-controls="tag-filter-content"
        >
          <div className="flex items-center gap-2 min-w-0">
            <SlidersHorizontal size={16} className="text-gold shrink-0" />
            <span className="text-sm font-medium">Filtros de experiência</span>
            {selectedTags.length > 0 && (
              <span className="inline-flex items-center justify-center min-w-[1.25rem] px-1.5 h-5 text-xs rounded-full bg-gold text-white">
                {selectedTags.length}
              </span>
            )}
          </div>
          <ChevronDown
            size={16}
            className={`text-muted-foreground shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="tag-filter-content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden"
            >
              <div className="px-4 pb-4 pt-1 space-y-4">
                {selectedTags.length > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {selectedTags.length} selecionado
                      {selectedTags.length > 1 ? "s" : ""}
                    </span>
                    <button
                      onClick={clearAll}
                      className="text-xs text-gold hover:text-gold-light transition-colors inline-flex items-center gap-1"
                    >
                      <X size={12} /> Limpar
                    </button>
                  </div>
                )}

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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

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

TagFilter.displayName = "TagFilter";
