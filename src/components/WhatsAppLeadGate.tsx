import { useCallback, useEffect, useState } from "react";
import { z } from "zod";
import { MessageCircle, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { CONTACT } from "@/lib/types";
import { toast } from "sonner";

export const TRAVELER_OPTIONS = [
  "1 viajante",
  "2 viajantes",
  "3 a 4 viajantes",
  "5 a 8 viajantes",
  "Grupo (9+)",
];

export const BUDGET_OPTIONS = [
  "Até R$ 25 mil por pessoa",
  "R$ 25 mil a R$ 40 mil por pessoa",
  "R$ 40 mil a R$ 70 mil por pessoa",
  "Acima de R$ 70 mil por pessoa",
  "Prefiro conversar sobre o investimento",
];

const schema = z.object({
  name: z.string().trim().min(2, "Informe seu nome completo").max(120),
  email: z.string().trim().email("E-mail inválido").max(255),
  phone: z
    .string()
    .trim()
    .min(8, "Informe o WhatsApp com DDD")
    .max(40)
    .refine((v) => v.replace(/\D/g, "").length >= 10, "Informe o WhatsApp com DDD"),
  interest: z.string().trim().min(2, "Diga o destino ou roteiro de interesse").max(160),
  travelWhen: z.string().trim().min(2, "Informe quando pretende viajar").max(80),
  travelers: z.string().trim().min(1, "Selecione o número de viajantes").max(60),
  budget: z.string().trim().min(1, "Selecione a faixa de investimento").max(80),
  notes: z.string().trim().max(600).optional(),
});

type Values = z.infer<typeof schema>;

const emptyValues: Values = {
  name: "",
  email: "",
  phone: "",
  interest: "",
  travelWhen: "",
  travelers: "",
  budget: "",
  notes: "",
};

/** Abre o WhatsApp de forma resiliente (iframes e in-app browsers). */
export const openWhatsAppUrl = (url: string) => {
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) {
    try {
      window.top!.location.href = url;
    } catch {
      window.location.href = url;
    }
  }
};

export const openWhatsAppMessage = (message: string) =>
  openWhatsAppUrl(
    `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`
  );

const extractBaseMessage = (url: string): string => {
  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("text") ?? "";
  } catch {
    return "";
  }
};

/**
 * Intercepta os cliques em qualquer link wa.me do site (exceto o botão
 * flutuante e links marcados com data-no-gate) e pede um pré-briefing antes de
 * abrir a conversa — qualificando o lead e registrando-o no banco.
 */
export const WhatsAppLeadGate = () => {
  const [open, setOpen] = useState(false);
  const [targetUrl, setTargetUrl] = useState<string | null>(null);
  const [values, setValues] = useState<Values>(emptyValues);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (!/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) return;
      if (anchor.dataset.noGate !== undefined) return;
      if (anchor.classList.contains("whatsapp-float")) return;
      if (anchor.closest(".whatsapp-float")) return;

      event.preventDefault();
      event.stopPropagation();
      setTargetUrl(href);
      setValues({ ...emptyValues });
      setErrors({});
      setOpen(true);
    };
    document.addEventListener("click", handler, true);
    return () => document.removeEventListener("click", handler, true);
  }, []);

  const set = useCallback(
    (key: keyof Values, value: string) => setValues((v) => ({ ...v, [key]: value })),
    []
  );

  const skip = () => {
    setOpen(false);
    if (targetUrl) openWhatsAppUrl(targetUrl);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const fieldErrors: Partial<Record<keyof Values, string>> = {};
      parsed.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof Values;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const d = parsed.data;

    const { error } = await supabase.from("travel_leads").insert({
      name: d.name,
      email: d.email,
      phone: d.phone,
      interest: d.interest,
      travel_when: d.travelWhen,
      travelers: d.travelers,
      budget: d.budget,
      notes: d.notes || null,
      source_page: window.location.pathname,
      context_type: document.title.slice(0, 120),
    });

    if (error) {
      toast.error("Não conseguimos registrar seu contato. Vamos seguir pelo WhatsApp.");
    }

    const base = targetUrl ? extractBaseMessage(targetUrl) : "";
    const message = [
      base || "Olá, Create Travel! Quero criar um roteiro sob medida.",
      "",
      `Nome: ${d.name}`,
      `E-mail: ${d.email}`,
      `WhatsApp: ${d.phone}`,
      `Interesse: ${d.interest}`,
      `Quando pretendo viajar: ${d.travelWhen}`,
      `Viajantes: ${d.travelers}`,
      `Faixa de investimento: ${d.budget}`,
      d.notes ? `Observações: ${d.notes}` : "",
    ]
      .filter((l) => l !== "")
      .join("\n");

    openWhatsAppMessage(message);
    setSubmitting(false);
    setOpen(false);
    setValues({ ...emptyValues });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">Antes de conversarmos</DialogTitle>
          <DialogDescription>
            Um consultor Create Travel prepara sua proposta a partir deste breve
            briefing — assim a conversa já começa no ponto certo.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="gate-name">Nome completo</Label>
              <Input
                id="gate-name"
                maxLength={120}
                value={values.name}
                onChange={(e) => set("name", e.target.value)}
                aria-invalid={!!errors.name}
              />
              {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
            </div>
            <div>
              <Label htmlFor="gate-phone">WhatsApp (com DDD)</Label>
              <Input
                id="gate-phone"
                inputMode="tel"
                maxLength={40}
                placeholder="(11) 99999-9999"
                value={values.phone}
                onChange={(e) => set("phone", e.target.value)}
                aria-invalid={!!errors.phone}
              />
              {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="gate-email">E-mail</Label>
            <Input
              id="gate-email"
              type="email"
              maxLength={255}
              value={values.email}
              onChange={(e) => set("email", e.target.value)}
              aria-invalid={!!errors.email}
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="gate-interest">Destino ou roteiro de interesse</Label>
            <Input
              id="gate-interest"
              maxLength={160}
              placeholder="Ex.: Egito abril/2027, Patagônia, Toscana"
              value={values.interest}
              onChange={(e) => set("interest", e.target.value)}
              aria-invalid={!!errors.interest}
            />
            {errors.interest && (
              <p className="text-xs text-destructive mt-1">{errors.interest}</p>
            )}
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="gate-when">Quando pretende viajar</Label>
              <Input
                id="gate-when"
                maxLength={80}
                placeholder="Ex.: julho/2027"
                value={values.travelWhen}
                onChange={(e) => set("travelWhen", e.target.value)}
                aria-invalid={!!errors.travelWhen}
              />
              {errors.travelWhen && (
                <p className="text-xs text-destructive mt-1">{errors.travelWhen}</p>
              )}
            </div>
            <div>
              <Label htmlFor="gate-travelers">Número de viajantes</Label>
              <Select value={values.travelers} onValueChange={(v) => set("travelers", v)}>
                <SelectTrigger id="gate-travelers">
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  {TRAVELER_OPTIONS.map((o) => (
                    <SelectItem key={o} value={o}>
                      {o}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.travelers && (
                <p className="text-xs text-destructive mt-1">{errors.travelers}</p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="gate-budget">Faixa de investimento por pessoa</Label>
            <Select value={values.budget} onValueChange={(v) => set("budget", v)}>
              <SelectTrigger id="gate-budget">
                <SelectValue placeholder="Selecione" />
              </SelectTrigger>
              <SelectContent>
                {BUDGET_OPTIONS.map((o) => (
                  <SelectItem key={o} value={o}>
                    {o}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.budget && <p className="text-xs text-destructive mt-1">{errors.budget}</p>}
          </div>

          <div>
            <Label htmlFor="gate-notes">Algo que devemos saber (opcional)</Label>
            <Textarea
              id="gate-notes"
              maxLength={600}
              rows={3}
              placeholder="Ritmo desejado, celebração, preferências de hospedagem…"
              value={values.notes}
              onChange={(e) => set("notes", e.target.value)}
            />
          </div>

          <Button
            type="submit"
            className="w-full btn-whatsapp justify-center"
            disabled={submitting}
          >
            {submitting ? (
              <Loader2 className="animate-spin" size={18} />
            ) : (
              <MessageCircle size={18} />
            )}
            <span>Continuar no WhatsApp</span>
          </Button>

          <div className="text-center">
            <button
              type="button"
              onClick={skip}
              className="text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground"
            >
              Prefiro falar direto
            </button>
          </div>

          <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
            Seus dados são usados apenas para o atendimento Create Travel. Não
            compartilhamos com terceiros.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};
