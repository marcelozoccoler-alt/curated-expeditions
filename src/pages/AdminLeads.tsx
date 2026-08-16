import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";
import { Download, RefreshCw, LogOut, UserCheck } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string | null;
  travel_when: string | null;
  travelers: string | null;
  budget: string | null;
  notes: string | null;
  source_page: string | null;
  context_type: string | null;
  status: string;
  created_at: string;
}

const STATUSES = ["novo", "em contato", "proposta", "fechado", "descartado"];

export default function AdminLeads() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Lead[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");

  const load = async () => {
    setLoading(true);
    setError(null);
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      navigate("/auth", { replace: true });
      return;
    }
    const { data, error: err } = await supabase
      .from("travel_leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (err) {
      setError(err.message);
      toast.error("Não foi possível carregar os leads");
    } else {
      setRows((data ?? []) as Lead[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) navigate("/auth", { replace: true });
    });
    load();
    return () => sub.subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = rows.filter((r) => {
    if (!query.trim()) return true;
    const q = query.toLowerCase();
    return [r.name, r.email, r.phone, r.interest, r.budget, r.status]
      .filter(Boolean)
      .some((v) => String(v).toLowerCase().includes(q));
  });

  const setStatus = async (row: Lead, status: string) => {
    const { error: err } = await supabase
      .from("travel_leads")
      .update({ status })
      .eq("id", row.id);
    if (err) {
      toast.error("Não foi possível atualizar");
      return;
    }
    setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, status } : r)));
  };

  const downloadCsv = () => {
    const header =
      "Data,Nome,E-mail,WhatsApp,Interesse,Quando,Viajantes,Investimento,Observacoes,Pagina,Status\n";
    const esc = (v: string | null) => `"${(v ?? "").replace(/"/g, '""')}"`;
    const body = filtered
      .map((r) =>
        [
          new Date(r.created_at).toLocaleString("pt-BR"),
          esc(r.name),
          esc(r.email),
          esc(r.phone),
          esc(r.interest),
          esc(r.travel_when),
          esc(r.travelers),
          esc(r.budget),
          esc(r.notes),
          esc(r.source_page),
          r.status,
        ].join(",")
      )
      .join("\n");
    const blob = new Blob([`\ufeff${header}${body}`], {
      type: "text/csv;charset=utf-8;",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-createtravel-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <SEO
        title="Leads qualificados | Create Travel"
        description="Painel interno"
        canonicalPath="/admin/leads"
        noindex
      />
      <div className="container-editorial space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-foreground">
              Leads qualificados
            </h1>
            <p className="text-sm text-muted-foreground">
              Pré-briefings enviados antes da conversa no WhatsApp
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={load}>
              <RefreshCw size={16} className="mr-2" /> Atualizar
            </Button>
            <Button size="sm" onClick={downloadCsv} disabled={!filtered.length}>
              <Download size={16} className="mr-2" /> Baixar CSV
            </Button>
            <Button variant="ghost" size="sm" onClick={signOut}>
              <LogOut size={16} className="mr-2" /> Sair
            </Button>
          </div>
        </div>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-base">
              <UserCheck size={18} /> {rows.length} leads registrados
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Input
              placeholder="Buscar por nome, e-mail, destino, investimento…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="max-w-md"
            />
          </CardContent>
        </Card>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Data</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Contato</TableHead>
                  <TableHead>Interesse</TableHead>
                  <TableHead>Quando</TableHead>
                  <TableHead>Viajantes</TableHead>
                  <TableHead>Investimento</TableHead>
                  <TableHead>Origem</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading && (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center text-sm text-muted-foreground">
                      Carregando...
                    </TableCell>
                  </TableRow>
                )}
                {!loading && !filtered.length && (
                  <TableRow>
                    <TableCell colSpan={9} className="text-center text-sm text-muted-foreground">
                      Nenhum lead ainda.
                    </TableCell>
                  </TableRow>
                )}
                {filtered.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="text-xs whitespace-nowrap">
                      {new Date(r.created_at).toLocaleString("pt-BR")}
                    </TableCell>
                    <TableCell className="font-medium">
                      {r.name}
                      {r.notes && (
                        <span className="block text-xs text-muted-foreground max-w-[220px]">
                          {r.notes}
                        </span>
                      )}
                    </TableCell>
                    <TableCell className="text-xs">
                      <a
                        href={`https://wa.me/${r.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                      >
                        {r.phone}
                      </a>
                      <span className="block text-muted-foreground">{r.email}</span>
                    </TableCell>
                    <TableCell className="text-xs max-w-[200px]">{r.interest ?? "—"}</TableCell>
                    <TableCell className="text-xs">{r.travel_when ?? "—"}</TableCell>
                    <TableCell className="text-xs">{r.travelers ?? "—"}</TableCell>
                    <TableCell className="text-xs">{r.budget ?? "—"}</TableCell>
                    <TableCell className="text-xs max-w-[160px] truncate">
                      {r.source_page ?? "—"}
                    </TableCell>
                    <TableCell>
                      <select
                        value={r.status}
                        onChange={(e) => setStatus(r, e.target.value)}
                        className="text-xs bg-background border border-input rounded-md px-2 py-1"
                        aria-label={`Status de ${r.name}`}
                      >
                        {STATUSES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
