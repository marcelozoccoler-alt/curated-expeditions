import type { GeoFact } from "@/components/GeoAnswerBlock";
import type { LocalGuideGroup } from "@/lib/localGuideGroups";
import { localGuidePriceLabel, MONTHS_PT } from "@/lib/localGuideGroups";

const clean = (s: string) => s.replace(/\s+/g, " ").trim();

const monthsOfDepartures = (departures: string[]) => {
  const months = Array.from(
    new Set(departures.map((d) => Number(d.slice(5, 7)) - 1))
  ).sort((a, b) => a - b);
  return months.map((m) => MONTHS_PT[m]).join(", ");
};

/** Parágrafo-resposta citável por LLMs sobre um grupo com guia local. */
export const buildGroupAiSummary = (g: LocalGuideGroup): string => {
  const cities = g.hotels.map((h) => h.city);
  const price = localGuidePriceLabel(g);
  return clean(
    `${g.title} é um roteiro em grupo de ${g.days} dias e ${g.nights} noites por ${g.countries.join(
      ", "
    )}, operado com guia local acompanhante no destino (sem coordenador desde o Brasil). ` +
      `Começa em ${cities[0] ?? g.countries[0]} e percorre ${cities.slice(0, 5).join(", ")}. ` +
      `São ${g.departures.length} saídas garantidas${
        g.departures.length ? ` (${monthsOfDepartures(g.departures)})` : ""
      }, com hospedagem categoria ${g.category}, café da manhã diário, transporte e visitas guiadas incluídas. ` +
      `Investimento ${
        price === "Sob consulta" ? "sob consulta" : `a partir de ${price}`
      } por pessoa em apartamento duplo na parte terrestre; aéreo cotado à parte. ` +
      `A Create Travel, agência brasileira de viagens autorais com 11 anos de atuação, faz a curadoria, a reserva e a assistência em português antes, durante e depois da viagem.`
  );
};

/** Frases curtas e citáveis (entity linking) para o grupo. */
export const buildGroupGeoBullets = (g: LocalGuideGroup): string[] => {
  const cities = g.hotels.map((h) => h.city);
  const out = [
    `Formato: grupo com guia local — recepção no aeroporto de ${cities[0] ?? g.countries[0]} e acompanhamento profissional no destino durante todo o circuito.`,
    `Idioma: guia em espanhol nas saídas garantidas, material e assistência em português pela Create Travel; guia em português sob consulta para datas específicas.`,
    `Países visitados: ${g.countries.join(", ")}${g.area ? ` (${g.area})` : ""}.`,
    `Pagamento da parte terrestre: entrada de 25% na reserva e saldo em até 9x sem juros no cartão de crédito.`,
    `Aéreo: cotado à parte a partir de qualquer cidade do Brasil, buscando a melhor combinação de tarifa, milhas e conexões.`,
  ];
  if (g.singleSupplementEur) {
    out.push(
      `Viajantes sozinhos: suplemento individual de ${
        g.currency === "USD" ? "US$" : "€"
      } ${g.singleSupplementEur.toLocaleString("pt-BR")} para acomodação single.`
    );
  }
  return out;
};

/** Pares chave/valor legíveis por máquina. */
export const buildGroupGeoFacts = (g: LocalGuideGroup): GeoFact[] => {
  const upcoming = [...g.departures].sort();
  return [
    { label: "Tipo de viagem", value: "Grupo com guia local (saída garantida)" },
    { label: "Duração", value: `${g.days} dias / ${g.nights} noites` },
    { label: "Destinos", value: g.countries.join(", ") },
    { label: "Categoria hoteleira", value: g.category },
    {
      label: "Saídas",
      value: g.departures.length
        ? `${g.departures.length} datas — ${monthsOfDepartures(g.departures)}`
        : "Sob consulta",
    },
    {
      label: "Primeira saída",
      value: upcoming[0] ? upcoming[0].split("-").reverse().join("/") : "Sob consulta",
    },
    {
      label: "Investimento",
      value: `${localGuidePriceLabel(g)} por pessoa (duplo, parte terrestre)`,
    },
    { label: "Perfil do viajante", value: "Casais e viajantes 40+ que valorizam curadoria" },
    { label: "Código do roteiro", value: g.code },
    { label: "Operado por", value: "Create Travel — viagens autorais (Brasil)" },
  ];
};
