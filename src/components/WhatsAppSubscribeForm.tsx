import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const INTERESTS = [
  "Viagens em grupo",
  "Roteiros sob medida",
  "Lua de mel",
  "Brasil",
  "Europa",
  "África & Oriente Médio",
  "Ásia",
  "América do Sul",
];

const schema = z.object({
  name: z.string().trim().min(2, { message: "Informe seu nome" }).max(100, { message: "Nome muito longo" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Informe o WhatsApp com DDD" })
    .max(25, { message: "Telefone muito longo" })
    .refine((v) => v.replace(/\D/g, "").length >= 10, { message: "Informe o WhatsApp com DDD" }),
  city: z.string().trim().max(80, { message: "Cidade muito longa" }).optional(),
});

type Values = { name: string; phone: string; city: string };

interface Props {
  source?: string;
  compact?: boolean;
}

export const WhatsAppSubscribeForm = ({ source = "site", compact = false }: Props) => {
  const { toast } = useToast();
  const [values, setValues] = useState<Values>({ name: "", phone: "", city: "" });
  const [interests, setInterests] = useState<string[]>([]);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const toggleInterest = (item: string) =>
    setInterests((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof Values, string>> = {};
      result.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof Values;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const { error } = await supabase.from("whatsapp_subscribers").insert({
      name: result.data.name,
      phone: result.data.phone,
      city: result.data.city || null,
      interests,
      source,
      consent: true,
    });

    setSubmitting(false);

    if (error) {
      const duplicate = error.code === "23505";
      if (duplicate) {
        setDone(true);
        toast({ title: "Você já está na lista!", description: "Esse WhatsApp já recebe nossas novidades." });
        return;
      }
      toast({
        title: "Não conseguimos concluir",
        description: "Tente novamente em instantes.",
        variant: "destructive",
      });
      return;
    }

    setDone(true);
    toast({
      title: "Cadastro confirmado",
      description: "Você entrou na nossa lista de transmissão do WhatsApp.",
    });
  };

  if (done) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center max-w-xl mx-auto shadow-card">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald/10 text-emerald">
          <Check size={24} />
        </div>
        <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">Pronto!</h3>
        <p className="text-sm text-muted-foreground">
          Você receberá nossas novidades, roteiros e saídas de grupo direto no WhatsApp. Sem spam — e você pode sair
          quando quiser.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-card max-w-xl mx-auto text-left"
      noValidate
    >
      <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
        Receba novidades no WhatsApp
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Entre na nossa lista de transmissão e receba primeiro as saídas de grupo, roteiros autorais e histórias do blog.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="wa-name" className="block text-sm font-medium text-foreground mb-1.5">
            Nome
          </label>
          <input
            id="wa-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Seu nome"
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="wa-phone" className="block text-sm font-medium text-foreground mb-1.5">
            WhatsApp (com DDD)
          </label>
          <input
            id="wa-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues((v) => ({ ...v, phone: e.target.value }))}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="(11) 99999-9999"
          />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>

        {!compact && (
          <div>
            <label htmlFor="wa-city" className="block text-sm font-medium text-foreground mb-1.5">
              Cidade <span className="text-muted-foreground font-normal">(opcional)</span>
            </label>
            <input
              id="wa-city"
              name="city"
              type="text"
              autoComplete="address-level2"
              value={values.city}
              onChange={(e) => setValues((v) => ({ ...v, city: e.target.value }))}
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="São Paulo"
            />
            {errors.city && <p className="mt-1 text-xs text-destructive">{errors.city}</p>}
          </div>
        )}

        {!compact && (
          <fieldset>
            <legend className="block text-sm font-medium text-foreground mb-2">
              Interesses <span className="text-muted-foreground font-normal">(opcional)</span>
            </legend>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map((item) => {
                const active = interests.includes(item);
                return (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={active}
                    onClick={() => toggleInterest(item)}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      active
                        ? "border-gold bg-gold/10 text-foreground"
                        : "border-border text-muted-foreground hover:border-gold/60"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </fieldset>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
      >
        <MessageCircle size={18} />
        {submitting ? "Enviando..." : "Quero receber novidades"}
      </button>

      <p className="mt-3 text-xs text-muted-foreground">
        Ao se cadastrar, você autoriza a Create Travel a enviar mensagens pelo WhatsApp. Você pode pedir a remoção a
        qualquer momento.
      </p>
    </form>
  );
};
