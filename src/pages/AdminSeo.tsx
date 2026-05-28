import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";
import { MousePointerClick, Eye, Percent, TrendingUp, RefreshCw, LogOut } from "lucide-react";

interface GscData {
  site: string;
  range: { start: string; end: string };
  totals: { clicks: number; impressions: number; ctr: number; position: number };
  trend: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  topPages: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
  topQueries: Array<{ keys: string[]; clicks: number; impressions: number; ctr: number; position: number }>;
}

export default function AdminSeo() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<GscData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data: sessionData } = await supabase.auth.getSession();
      if (!sessionData.session) {
        navigate("/auth", { replace: true });
        return;
      }
      const { data: res, error: err } = await supabase.functions.invoke("gsc-metrics");
      if (err) throw err;
      if (res?.error) throw new Error(res.error);
      setData(res as GscData);
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Erro ao carregar dados";
      setError(msg);
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/auth", { replace: true });
    });
    load();
    return () => sub.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  const cards = data
    ? [
        { label: "Cliques", value: data.totals.clicks.toLocaleString("pt-BR"), icon: MousePointerClick },
        { label: "Impressões", value: data.totals.impressions.toLocaleString("pt-BR"), icon: Eye },
        { label: "CTR", value: `${(data.totals.ctr * 100).toFixed(2)}%`, icon: Percent },
        { label: "Posição média", value: data.totals.position.toFixed(1), icon: TrendingUp },
      ]
    : [];

  return (
    <>
      <SEO title="Admin · SEO | Create Travel" description="Painel interno." canonicalPath="/admin/seo" noindex />
      <div className="min-h-screen bg-background">
        <header className="border-b border-border">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div>
              <h1 className="font-serif text-2xl">Painel SEO</h1>
              <p className="text-sm text-muted-foreground">Google Search Console · últimos 28 dias</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={load} disabled={loading}>
                <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
                Atualizar
              </Button>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4" />
                Sair
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 space-y-8">
          {error && (
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-destructive">{error}</p>
                {error.toLowerCase().includes("forbidden") && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Sua conta não tem permissão de admin. Peça para adicionar o papel `admin` ao seu usuário no banco.
                  </p>
                )}
              </CardContent>
            </Card>
          )}

          {loading && !data && <p className="text-muted-foreground">Carregando…</p>}

          {data && (
            <>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {cards.map((c) => (
                  <Card key={c.label}>
                    <CardContent className="pt-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs uppercase tracking-wide text-muted-foreground">{c.label}</span>
                        <c.icon className="h-4 w-4 text-muted-foreground" />
                      </div>
                      <div className="font-serif text-3xl">{c.value}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top páginas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Página</TableHead>
                          <TableHead className="text-right">Cliques</TableHead>
                          <TableHead className="text-right">Impr.</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.topPages.slice(0, 10).map((r) => (
                          <TableRow key={r.keys[0]}>
                            <TableCell className="max-w-xs truncate">
                              <a href={r.keys[0]} target="_blank" rel="noreferrer" className="hover:underline">
                                {r.keys[0].replace(data.site, "/")}
                              </a>
                            </TableCell>
                            <TableCell className="text-right">{r.clicks}</TableCell>
                            <TableCell className="text-right">{r.impressions}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Top consultas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Termo</TableHead>
                          <TableHead className="text-right">Cliques</TableHead>
                          <TableHead className="text-right">Impr.</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.topQueries.slice(0, 10).map((r) => (
                          <TableRow key={r.keys[0]}>
                            <TableCell>{r.keys[0]}</TableCell>
                            <TableCell className="text-right">{r.clicks}</TableCell>
                            <TableCell className="text-right">{r.impressions}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <p className="text-xs text-muted-foreground">
                Período: {data.range.start} → {data.range.end} · Site: {data.site}
              </p>
            </>
          )}
        </main>
      </div>
    </>
  );
}
