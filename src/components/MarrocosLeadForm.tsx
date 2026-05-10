import { useState } from "react";
import { z } from "zod";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const leadSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, { message: "Informe seu nome completo" })
      .max(100, { message: "Nome muito longo" }),
    contact: z
      .string()
      .trim()
      .min(5, { message: "Informe um telefone ou e-mail" })
      .max(120, { message: "Contato muito longo" }),
  })
  .refine(
    (d) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.contact) || /\d{8,}/.test(d.contact.replace(/\D/g, "")),
    { path: ["contact"], message: "Informe um e-mail válido ou telefone com DDD" }
  );

type LeadValues = z.infer<typeof leadSchema>;

export const MarrocosLeadForm = () => {
  const { toast } = useToast();
  const [values, setValues] = useState<LeadValues>({ name: "", contact: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof LeadValues, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = leadSchema.safeParse(values);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LeadValues, string>> = {};
      result.error.issues.forEach((iss) => {
        const key = iss.path[0] as keyof LeadValues;
        if (!fieldErrors[key]) fieldErrors[key] = iss.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    const { name, contact } = result.data;
    const message =
      `Olá, Create Travel! Quero garantir minha vaga no Grupo Marrocos 2026 (saída 18/11/2026).\n` +
      `Nome: ${name}\n` +
      `Contato: ${contact}`;
    const url = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(message)}`;

    toast({
      title: "Quase lá!",
      description: "Estamos abrindo o WhatsApp para concluir seu contato.",
    });

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    setValues({ name: "", contact: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-card max-w-xl mx-auto text-left"
      noValidate
    >
      <h3 className="font-serif text-2xl font-semibold mb-2 text-foreground">
        Reserve sua vaga
      </h3>
      <p className="text-sm text-muted-foreground mb-6">
        Deixe seu contato e um consultor Create Travel falará com você pelo WhatsApp.
      </p>

      <div className="space-y-4">
        <div>
          <label htmlFor="lead-name" className="block text-sm font-medium text-foreground mb-1.5">
            Nome completo
          </label>
          <input
            id="lead-name"
            type="text"
            maxLength={100}
            value={values.name}
            onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="Seu nome"
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "lead-name-error" : undefined}
          />
          {errors.name && (
            <p id="lead-name-error" className="text-xs text-destructive mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="lead-contact" className="block text-sm font-medium text-foreground mb-1.5">
            Telefone ou e-mail
          </label>
          <input
            id="lead-contact"
            type="text"
            maxLength={120}
            value={values.contact}
            onChange={(e) => setValues((v) => ({ ...v, contact: e.target.value }))}
            className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            placeholder="(11) 99999-9999 ou email@exemplo.com"
            aria-invalid={!!errors.contact}
            aria-describedby={errors.contact ? "lead-contact-error" : undefined}
          />
          {errors.contact && (
            <p id="lead-contact-error" className="text-xs text-destructive mt-1">{errors.contact}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="btn-whatsapp w-full justify-center disabled:opacity-60"
        >
          <MessageCircle size={20} />
          <span>Enviar e falar no WhatsApp</span>
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Vagas limitadas — grupo exclusivo e pequeno.
        </p>
      </div>
    </form>
  );
};
