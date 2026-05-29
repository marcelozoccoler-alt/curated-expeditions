import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_search_console";
const SITE = "sc-domain:createtravel.tur.br";
const SITE_ENC = encodeURIComponent(SITE);

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GSC_API_KEY = Deno.env.get("GOOGLE_SEARCH_CONSOLE_API_KEY");
    const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
    const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY")!;
    const SERVICE_ROLE = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");
    if (!GSC_API_KEY) throw new Error("GOOGLE_SEARCH_CONSOLE_API_KEY not configured");

    // Auth: validate JWT and check admin role
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    const userClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userErr } = await userClient.auth.getUser();
    if (userErr || !userData.user) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const admin = createClient(SUPABASE_URL, SERVICE_ROLE);
    const { data: roleData } = await admin.rpc("has_role", { _user_id: userData.user.id, _role: "admin" });
    if (!roleData) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    // Date range: last 28 days, ending 3 days ago (GSC data delay)
    const end = new Date(); end.setUTCDate(end.getUTCDate() - 3);
    const start = new Date(end); start.setUTCDate(start.getUTCDate() - 27);
    const fmt = (d: Date) => d.toISOString().slice(0, 10);

    const gscHeaders = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GSC_API_KEY,
      "Content-Type": "application/json",
    };

    // Totals
    const totalsRes = await fetch(`${GATEWAY_URL}/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST",
      headers: gscHeaders,
      body: JSON.stringify({ startDate: fmt(start), endDate: fmt(end), dimensions: [] }),
    });
    if (!totalsRes.ok) {
      const body = await totalsRes.text();
      throw new Error(`GSC totals failed [${totalsRes.status}]: ${body}`);
    }
    const totalsJson = await totalsRes.json();
    const totals = totalsJson.rows?.[0] ?? { clicks: 0, impressions: 0, ctr: 0, position: 0 };

    // Daily trend
    const trendRes = await fetch(`${GATEWAY_URL}/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST",
      headers: gscHeaders,
      body: JSON.stringify({ startDate: fmt(start), endDate: fmt(end), dimensions: ["date"], rowLimit: 100 }),
    });
    const trendJson = trendRes.ok ? await trendRes.json() : { rows: [] };

    // Top pages
    const pagesRes = await fetch(`${GATEWAY_URL}/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST",
      headers: gscHeaders,
      body: JSON.stringify({ startDate: fmt(start), endDate: fmt(end), dimensions: ["page"], rowLimit: 20 }),
    });
    const pagesJson = pagesRes.ok ? await pagesRes.json() : { rows: [] };

    // Top queries
    const queriesRes = await fetch(`${GATEWAY_URL}/webmasters/v3/sites/${SITE_ENC}/searchAnalytics/query`, {
      method: "POST",
      headers: gscHeaders,
      body: JSON.stringify({ startDate: fmt(start), endDate: fmt(end), dimensions: ["query"], rowLimit: 20 }),
    });
    const queriesJson = queriesRes.ok ? await queriesRes.json() : { rows: [] };

    return new Response(JSON.stringify({
      site: SITE,
      range: { start: fmt(start), end: fmt(end) },
      totals,
      trend: trendJson.rows ?? [],
      topPages: pagesJson.rows ?? [],
      topQueries: queriesJson.rows ?? [],
    }), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : "Unknown error";
    console.error("gsc-metrics error:", msg);
    return new Response(JSON.stringify({ error: msg }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
