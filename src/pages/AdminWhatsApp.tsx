import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";
import { Copy, Download, RefreshCw, LogOut, Users } from "lucide-react";

interface Subscriber {
  id: string;
  name: string;
  phone: string;
  city: string | null;
  interests: string[];
  source: string | null;
  active: boolean;
  created_at: string;
}

const normalize = (phone: string) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.startsWith("55")) return `+${digits}`;
  return `+55${digits}`;
};

export default function AdminWhatsApp() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState<Subscriber[]>([]);
  const [error, setError] = useState<string | null>(null);

  const load = async () => {
    setLoading(true);
    setError(null);
    const { data: sessionData } = await supabase.auth.getSession();
    if (!sessionData.session) {
      navigate("/auth", { replace: true });
      return;
    }
    const { data, error: err } = await supabase
      .from("whatsapp_subscribers")
      .select("*")
      .order("created_at", { ascending: false });
    if (err) {
      setError(err.message);
      toast.error("Não foi possível carregar a lista");
    } else {
      setRows((data ?? []) as Subscriber[]);
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

  const actives = rows.filter((r) => r.active);

  const copyNumbers = async () => {
    const list = actives.map((r) => normalize(r.phone)).join("\n");
    await navigator.clipboard.writeText(list);
    toast.success(`${actives.length} números copiados`);
  };

  const downloadCsv = () => {
    const header = "Nome,Telefone,Cidade,Interesses,Origem,Cadastro\n";
    const body = actives
      .map((r) =>
        [
          `"${r.name.replace(/"/g, '""')}"`,
          normalize(r.phone),
          `"${(r.city ?? "").replace(/"/g, '""')}"`,
          `"${(r.interests ?? []).join(" | ")}"`,
          r.source ?? "",
          new Date(r.created_at).toLocaleDateString("pt-BR"),
        ].join(",")
      )
      .join("\n");
    const blob = new Blob([`\ufeff${header}${body}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `lista-transmissao-createtravel-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const toggleActive = async (row: Subscriber) => {
    const { error: err } = await supabase
      .from("whatsapp_subscribers")
      .update({ active: !row.active })
      .eq("id", row.id);
    if (err) {
      toast.error("Não foi possível atualizar");
      return;
    }
    setRows((prev) => prev.map((r) => (r.id === row.id ? { ...r, active: !r.active } : r)));
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <SEO
        title="Lista de transmissão WhatsApp | Create Travel"
        description="Painel interno"
        canonicalPath="/admin/whatsapp"
        noindex
      />
      <div className="container-editorial space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-foreground">Lista de transmissão · WhatsApp</h1>
            <p className="text-sm text-muted-foreground">Cadastros recebidos pelo site</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" onClick={load}>
              <RefreshCw size={16} className="mr-2" /> Atualizar
            </Button>
            <Button variant="outline" size="sm" onClick={copyNumbers} disabled={!actives.length}>
              <Copy size={16} className="mr-2" /> Copiar números
            </Button>
            <Button size="sm" onClick={downloadCsv} disabled={!actives.length}>
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
              <Users size={18} /> {actives.length} inscritos ativos ({rows.length} no total)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Para criar a lista de transmissão: baixe o CSV, salve os contatos no celular e, no WhatsApp, abra
              <strong> Nova lista de transmissão</strong> e selecione os contatos. Só recebem a mensagem quem tiver seu
              número salvo na agenda.
            </p>
          </CardContent>
        </Card>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <Card>
          <CardContent className="p-0 overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nome</TableHead>
                  <TableHead>WhatsApp</TableHead>
                  <TableHead>Cidade</TableHead>
                  <TableHead>Interesses</TableHead>
                  <TableHead>Origem</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loading && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-sm text-muted-foreground">
                      Carregando...
                    </TableCell>
                  </TableRow>
                )}
                {!loading && !rows.length && (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center text-sm text-muted-foreground">
                      Nenhum cadastro ainda.
                    </TableCell>
                  </TableRow>
                )}
                {rows.map((r) => (
                  <TableRow key={r.id}>
                    <TableCell className="font-medium">{r.name}</TableCell>
                    <TableCell>{normalize(r.phone)}</TableCell>
                    <TableCell>{r.city ?? "—"}</TableCell>
                    <TableCell className="max-w-[240px] text-xs">{(r.interests ?? []).join(", ") || "—"}</TableCell>
                    <TableCell className="text-xs">{r.source ?? "—"}</TableCell>
                    <TableCell className="text-xs">
                      {new Date(r.created_at).toLocaleDateString("pt-BR")}
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm" onClick={() => toggleActive(r)}>
                        {r.active ? "Ativo" : "Inativo"}
                      </Button>
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
