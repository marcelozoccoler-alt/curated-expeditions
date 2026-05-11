import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Wand2, Loader2, X, Download, RotateCcw, Upload } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

interface Props {
  destinationId: string;
  defaultPrompt: string;
  currentImage: string;
  onApply: (dataUrl: string) => void;
  onReset: () => void;
  hasOverride: boolean;
}

export const ImageRegenPanel = ({
  destinationId,
  defaultPrompt,
  currentImage,
  onApply,
  onReset,
  hasOverride,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast.error("Descreva a imagem desejada.");
      return;
    }
    setLoading(true);
    setPreview(null);
    try {
      const { data, error } = await supabase.functions.invoke(
        "regenerate-destination-image",
        { body: { prompt } }
      );
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      if (!data?.imageUrl) throw new Error("Sem imagem na resposta");
      setPreview(data.imageUrl);
    } catch (e: any) {
      toast.error(e?.message || "Falha ao gerar imagem");
    } finally {
      setLoading(false);
    }
  };

  const handleApply = () => {
    if (!preview) return;
    onApply(preview);
    toast.success("Imagem aplicada a este destino (salva neste navegador).");
    setOpen(false);
  };

  return (
    <>
      {/* Floating trigger */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-24 right-6 z-40 flex items-center gap-2 px-4 py-3 rounded-full bg-gold text-primary shadow-lg hover:bg-gold-light transition-colors text-sm font-medium"
        title="Regenerar imagem com IA"
      >
        <Wand2 size={18} />
        <span className="hidden sm:inline">Regenerar imagem</span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              className="bg-card w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-5 border-b border-border">
                <div>
                  <p className="text-caption text-gold">IA generativa</p>
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    Regenerar imagem do destino
                  </h3>
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 rounded-full hover:bg-muted text-muted-foreground"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-5 space-y-4 max-h-[70vh] overflow-y-auto">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Prompt (ajuste como quiser)
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={5}
                    className="w-full p-3 rounded-lg border border-border bg-background text-foreground text-sm resize-y focus:outline-none focus:ring-2 focus:ring-gold"
                    placeholder="Descreva a foto ideal..."
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Modelo: Nano Banana (Lovable AI). A imagem fica salva apenas neste navegador.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Atual</p>
                    <img src={currentImage} alt="Atual" className="w-full aspect-[4/3] object-cover rounded-lg" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Prévia gerada</p>
                    <div className="w-full aspect-[4/3] rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      {loading ? (
                        <Loader2 className="animate-spin text-gold" size={28} />
                      ) : preview ? (
                        <img src={preview} alt="Prévia" className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xs text-muted-foreground px-3 text-center">
                          Clique em "Gerar" para criar uma nova versão
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  <button
                    onClick={handleGenerate}
                    disabled={loading}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" size={16} /> : <Wand2 size={16} />}
                    {loading ? "Gerando..." : preview ? "Gerar outra" : "Gerar imagem"}
                  </button>
                  <button
                    onClick={handleApply}
                    disabled={!preview || loading}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-primary text-sm font-medium hover:bg-gold-light disabled:opacity-50"
                  >
                    <Download size={16} /> Aplicar a este destino
                  </button>
                  {hasOverride && (
                    <button
                      onClick={() => {
                        onReset();
                        toast.success("Imagem original restaurada.");
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground text-sm hover:bg-muted"
                    >
                      <RotateCcw size={16} /> Restaurar original
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const STORAGE_PREFIX = "destImgOverride:";
export const getStoredOverride = (id: string): string | null => {
  try { return localStorage.getItem(STORAGE_PREFIX + id); } catch { return null; }
};
export const setStoredOverride = (id: string, dataUrl: string) => {
  try { localStorage.setItem(STORAGE_PREFIX + id, dataUrl); } catch {}
};
export const clearStoredOverride = (id: string) => {
  try { localStorage.removeItem(STORAGE_PREFIX + id); } catch {}
};
