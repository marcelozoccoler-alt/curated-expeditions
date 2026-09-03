// Narração do roteiro: text-to-speech com cache em storage.
// Cada trecho é gerado UMA única vez e guardado como MP3 no bucket "narracoes".
// Nos acessos seguintes devolvemos apenas o link assinado — sem consumir créditos de IA.
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });

const BUCKET = "narracoes";
// Mude a versão para invalidar o cache (voz, velocidade ou instruções novas).
const VERSAO = "v2-onyx-118";
const VOZ = "onyx";
const INSTRUCOES =
  "Leia em português do Brasil como quem conta uma história de dormir para alguém muito querido: " +
  "ritmo fluido e ágil, nunca arrastado. Tom de conversa, animado e afetuoso, com variações de " +
  "entonação e curiosidade genuína — como um pai lendo um livro de histórias à noite. Sorria na " +
  "voz, respire nas vírgulas sem alongar demais e pronuncie nomes estrangeiros com naturalidade.";

const sha256 = async (texto: string) => {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(texto));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const admin = createClient(SUPABASE_URL, SERVICE_ROLE, {
      auth: { persistSession: false },
    });

    const body = await req.json().catch(() => ({}));
    const text = typeof body.text === "string" ? body.text.trim() : "";
    if (!text) return json({ error: "Texto vazio" }, 400);
    if (text.length > 4000) return json({ error: "Texto muito longo para uma narração" }, 400);

    const hash = await sha256(`${VERSAO}|${VOZ}|${text}`);
    const path = `${VERSAO}/${hash}.mp3`;

    // 1) Já existe? devolve o link assinado (custo zero de IA).
    const assinar = async () => {
      const { data } = await admin.storage.from(BUCKET).createSignedUrl(path, 60 * 60 * 12);
      return data?.signedUrl ?? null;
    };

    const { data: existente } = await admin.storage
      .from(BUCKET)
      .list(VERSAO, { search: `${hash}.mp3`, limit: 1 });
    if (existente?.length) {
      const url = await assinar();
      if (url) return json({ url, cached: true });
    }

    // 2) Não existe: gera uma vez e guarda.
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) return json({ error: "LOVABLE_API_KEY não configurada" }, 401);

    const response = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini-tts",
        input: text,
        voice: VOZ,
        instructions: INSTRUCOES,
        speed: 1.18,
        response_format: "mp3",
      }),
    });

    if (!response.ok) {
      const detalhe = await response.text().catch(() => "");
      const amigavel =
        response.status === 402 || response.status === 403 || detalhe.includes("credit_limit_reached")
          ? "Esta narração ainda não foi gravada e o limite de créditos de IA foi atingido. Avise a Create Travel."
          : response.status === 429
            ? "Muitas narrações ao mesmo tempo. Tente novamente em alguns segundos."
            : "";
      return json({ error: amigavel || detalhe || `Falha na narração (${response.status})` }, response.status);
    }

    const audio = new Uint8Array(await response.arrayBuffer());
    const { error: uploadErro } = await admin.storage.from(BUCKET).upload(path, audio, {
      contentType: "audio/mpeg",
      upsert: true,
    });
    if (uploadErro) console.error("upload", uploadErro.message);

    const url = await assinar();
    if (url) return json({ url, cached: false });

    // Fallback: devolve o áudio direto se o link assinado falhar.
    return new Response(audio, {
      headers: { ...corsHeaders, "Content-Type": "audio/mpeg" },
    });
  } catch (err) {
    return json({ error: err instanceof Error ? err.message : "Erro inesperado" }, 500);
  }
});
