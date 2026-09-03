// Narração do roteiro: text-to-speech em streaming (SSE) via Lovable AI.
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const VOICES = new Set([
  "alloy",
  "ash",
  "ballad",
  "coral",
  "echo",
  "fable",
  "nova",
  "onyx",
  "sage",
  "shimmer",
  "verse",
]);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(
        JSON.stringify({ error: "LOVABLE_API_KEY não configurada" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json().catch(() => ({}));
    const text = typeof body.text === "string" ? body.text.trim() : "";
    const voice = typeof body.voice === "string" && VOICES.has(body.voice) ? body.voice : "onyx";
    const instructions =
      typeof body.instructions === "string" && body.instructions.length < 800
        ? body.instructions
        : "Leia em português do Brasil como quem conta uma história de dormir: ritmo fluido e um pouco mais rápido que uma leitura formal, tom de conversa, animado e afetuoso.";

    if (!text) {
      return new Response(JSON.stringify({ error: "Texto vazio" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (text.length > 4000) {
      return new Response(
        JSON.stringify({ error: "Texto muito longo para uma única narração" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/audio/speech", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-4o-mini-tts",
        input: text,
        voice,
        instructions,
        speed: 1.12,
        stream_format: "sse",
        response_format: "pcm",
      }),
    });

    if (!response.ok) {
      const detail = await response.text().catch(() => "");
      const amigavel =
        response.status === 402 || detail.includes("credit_limit_reached")
          ? "A narração está temporariamente indisponível: o limite de créditos de IA foi atingido. Avise a Create Travel."
          : response.status === 429
            ? "Muitas narrações ao mesmo tempo. Tente novamente em alguns segundos."
            : "";
      return new Response(
        JSON.stringify({ error: amigavel || detail || `Falha na narração (${response.status})` }),
        {
          status: response.status,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: {
        ...corsHeaders,
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Erro inesperado" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
