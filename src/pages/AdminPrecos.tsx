import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";
import { AlertTriangle, CheckCircle2, LogOut, ShieldAlert } from "lucide-react";
import { auditGroupPrices, hasBlockingPriceFindings } from "@/lib/priceAudit";

const STORAGE_KEY = "create-travel:price-audit-ack";

export default function AdminPrecos() {
  const navigate = useNavigate();
  const [confirmed, setConfirmed] = useState<string[]>([]);

  const findings = useMemo(() => auditGroupPrices(), []);
  const blocking = hasBlockingPriceFindings(findings);
  const pending = findings.filter((f) => f.severity === "bloqueio" && !confirmed.includes(f.id));
  const releasedToPublish = pending.length === 0;

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setConfirmed(JSON.parse(raw) as string[]);
    } catch {
      /* ignora armazenamento indisponível */
    }
  }, []);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/auth", { replace: true });
    });
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate("/auth", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggle = (id: string) => {
    setConfirmed((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignora armazenamento indisponível */
      }
      return next;
    });
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO title="Auditoria de preços | Create Travel" description="Checagem interna de inconsistências de preço entre roteiros." noindex />
      <div className="container mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 flex items-start justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl text-foreground">Auditoria de preços</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Checagem automática de inconsistências entre roteiros, com destaque para valores
              genéricos herdados do widget do fornecedor.
            </p>
          </div>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut className="mr-2 h-4 w-4" /> Sair
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              {releasedToPublish ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-primary" /> Publicação liberada
                </>
              ) : (
                <>
                  <ShieldAlert className="h-5 w-5 text-destructive" /> Confirmação pendente antes de publicar
                </>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            {findings.length === 0
              ? "Nenhuma inconsistência encontrada nos grupos com guia local."
              : releasedToPublish
                ? `${findings.length} achado(s) revisado(s) e confirmado(s). Pode publicar.`
                : `${pending.length} achado(s) aguardando sua confirmação. Marque cada item depois de verificar a tabela real do fornecedor.`}
          </CardContent>
        </Card>

        <div className="space-y-4">
          {findings.map((f) => {
            const ok = confirmed.includes(f.id) || f.severity === "atencao";
            return (
              <Card key={f.id} className={ok ? "" : "border-destructive/40"}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="flex items-center gap-2 text-base">
                      <AlertTriangle className={`h-4 w-4 ${ok ? "text-muted-foreground" : "text-destructive"}`} />
                      {f.title}
                    </CardTitle>
                    <Badge variant={ok ? "secondary" : "destructive"}>
                      {ok ? "Confirmado" : "Verificar"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{f.detail}</p>
                  <ul className="space-y-1 text-sm">
                    {f.groups.map((g) => (
                      <li key={g.slug}>
                        <a
                          className="text-primary underline-offset-4 hover:underline"
                          href={`/grupos-guia-local/${g.slug}`}
                        >
                          {g.code} — {g.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  {f.severity === "bloqueio" && (
                    <label className="flex cursor-pointer items-center gap-2 text-sm text-foreground">
                      <Checkbox
                        checked={confirmed.includes(f.id)}
                        onCheckedChange={() => {
                          toggle(f.id);
                          toast.success("Status de confirmação atualizado");
                        }}
                      />
                      Conferi os valores reais deste achado
                    </label>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {blocking && (
          <p className="mt-8 text-xs text-muted-foreground">
            Dica: rode <code className="rounded bg-muted px-1">bun run scripts/check-prices.ts</code> para a
            mesma checagem no terminal — ela retorna erro enquanto houver achado não confirmado.
          </p>
        )}
      </div>
    </div>
  );
}
