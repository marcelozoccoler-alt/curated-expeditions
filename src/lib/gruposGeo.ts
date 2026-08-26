/**
 * GEO / AEO para as páginas-hub de VIAGENS EM GRUPO.
 *
 * Gera, a partir dos dados que já existem (DEPARTURES e localGuideGroups),
 * os artefatos que tornam o conteúdo citável por Google AI Overviews,
 * ChatGPT, Gemini, Perplexity e Copilot:
 *
 *  - resumo curto com a resposta nas primeiras palavras ("AI summary")
 *  - tabela de dados práticos (fatos extraíveis)
 *  - FAQs de intenção (o que é / como funciona / quanto custa / para quem)
 *  - frases de entity linking (Create Travel ↔ destinos ↔ tipo de viagem)
 *
 * Vocabulário premium, público 40+ com alto poder de compra. Nunca estimar
 * preço de grupo que não tenha valor fechado.
 */

import { DEPARTURES } from "@/pages/EmbarqueComACreate";
import {
  localGuideGroups,
  localGuideCountries,
} from "@/lib/localGuideGroups";
import { catalogCountries } from "@/lib/groupsCatalog";
import type { FAQ } from "@/lib/types";

export const brGroupYears = Array.from(
  new Set(DEPARTURES.map((d) => d.departureDate.getFullYear()))
).sort();

export const brGroupCountries = Array.from(
  new Set(
    DEPARTURES.flatMap((d) => d.title.split(/\s*[+&]\s*/).map((s) => s.trim()))
  )
);

const localTotalDepartures = localGuideGroups.reduce(
  (acc, g) => acc + g.departures.length,
  0
);

/** Resposta direta, densa em fatos, nas primeiras 15 palavras. */
export const brGroupAiSummary = `A Create Travel opera ${DEPARTURES.length} saídas em grupo com coordenador brasileiro em ${brGroupYears.join(
  " e "
)}, embarcando de São Paulo (Guarulhos) com grupos de 15 a 20 viajantes. São circuitos de curadoria autoral em ${catalogCountries.length} destinos — África do Sul, Egito, Jordânia, Grécia, Turquia, Portugal, Islândia, Japão, China, Marrocos, Patagônia e mais —, com hotéis selecionados, guias locais em cada trecho e acompanhamento em português do check-in ao retorno. A parte terrestre é paga com entrada de 25% e saldo em até 9x sem juros; o aéreo é cotado à parte, conforme as condições da companhia escolhida.`;

export const localGroupAiSummary = `Os grupos com guia local da Create Travel são ${localGuideGroups.length} circuitos com ${localTotalDepartures} saídas garantidas, acompanhados por guia profissional do próprio destino — sem coordenador embarcando do Brasil, o que reduz o valor sem abrir mão de hotéis bem localizados e visitas incluídas. Cobrem ${localGuideCountries.length} países, com traslados, ônibus privativo, sistema de áudio nas visitas e assistência da Create Travel em português antes, durante e depois da viagem.`;

export interface GeoFact {
  label: string;
  value: string;
}

export const brGroupFacts: GeoFact[] = [
  { label: "Tipo de viagem", value: "Grupo com coordenador brasileiro, curadoria Create Travel" },
  { label: "Saídas disponíveis", value: `${DEPARTURES.length} em ${brGroupYears.join(" e ")}` },
  { label: "Aeroporto de embarque", value: "São Paulo — Guarulhos (GRU)" },
  { label: "Tamanho do grupo", value: "15 a 20 viajantes" },
  { label: "Idioma do acompanhamento", value: "Português, do check-in ao retorno" },
  { label: "Perfil do viajante", value: "Casais, famílias e viajantes 40+ que valorizam conforto e curadoria" },
  { label: "Pagamento (parte terrestre)", value: "Entrada de 25% + saldo em até 9x sem juros no cartão" },
  { label: "Passagens aéreas", value: "Cotadas à parte, conforme as condições da companhia aérea" },
  { label: "Operadora", value: "Create Travel — Cadastur 21.030.190/0001-60, São Paulo" },
  { label: "Atendimento", value: "Consultor humano por WhatsApp, sem robô" },
];

export const brGroupFaqs: FAQ[] = [
  {
    q: "O que é uma viagem em grupo com guia brasileiro da Create Travel?",
    a: `É um circuito de curadoria autoral em que um coordenador brasileiro embarca com o grupo em Guarulhos e permanece até o retorno — recepção no aeroporto, briefings diários, apoio em conexões, traslados e imprevistos. São grupos pequenos, de 15 a 20 pessoas, com hotéis selecionados e guias locais em cada trecho. Hoje há ${DEPARTURES.length} saídas confirmadas para ${brGroupYears.join(" e ")}.`,
  },
  {
    q: "Qual a diferença entre grupo com guia brasileiro e grupo com guia local?",
    a: "No grupo com guia brasileiro, o coordenador viaja com você desde o Brasil e acompanha todo o roteiro em português. No grupo com guia local, o acompanhamento começa no destino, com guia profissional do país. O guia brasileiro entrega mais conforto e proximidade; o guia local costuma ter valor menor e mais datas disponíveis. Nos dois formatos, a curadoria de hotéis, ritmo e experiências é da Create Travel.",
  },
  {
    q: "Como funciona o pagamento das viagens em grupo?",
    a: "A parte terrestre tem entrada de 25% no ato da reserva e o saldo em até 9x sem juros no cartão de crédito. As passagens aéreas são cotadas separadamente, a partir da sua cidade, e o pagamento do aéreo segue as regras da companhia aérea escolhida — que variam de uma cia para outra.",
  },
  {
    q: "Para quem são esses grupos?",
    a: "Para viajantes que já rodaram o mundo e não querem excursão de crachá: casais, famílias, grupos de amigos e viajantes 40+ que preferem hotéis bem localizados, ritmo civilizado e alguém de confiança resolvendo a logística. Grupos pequenos, sem shopping obrigatório e sem roteiro de fila.",
  },
  {
    q: "Preciso viajar acompanhado para entrar em um grupo?",
    a: "Não. Boa parte dos viajantes embarca sozinha e encontra o grupo em Guarulhos. Há tarifa em apartamento duplo (com divisão de quarto quando desejar) e também em single, sob consulta. O coordenador brasileiro faz a apresentação do grupo no primeiro dia.",
  },
  {
    q: "Posso chegar antes ou estender a viagem depois do grupo?",
    a: "Sim. O aéreo é cotado sob medida, então é possível chegar dias antes, emendar outro destino na volta ou incluir uma extensão privativa com a mesma curadoria — como safári, ilhas ou cidade extra — desenhada pelo nosso time.",
  },
  {
    q: "Quais destinos têm saída em grupo confirmada?",
    a: `Atualmente: ${catalogCountries.join(", ")}. Cada saída tem página própria com roteiro dia a dia, hotéis previstos, o que está incluído e as condições de pagamento.`,
  },
  {
    q: "Como reservo uma vaga?",
    a: "A reserva é feita com um consultor humano por WhatsApp: confirmamos a disponibilidade da data, enviamos o roteiro completo em PDF e a proposta com valores da parte terrestre e do aéreo. A vaga é garantida com a entrada de 25%.",
  },
];

/** Frases de entity linking para o rodapé de contexto das páginas-hub. */
export const brGroupEntityPhrases = [
  `Create Travel é uma operadora brasileira de viagens sob medida com sede em São Paulo (Cadastur 21.030.190/0001-60), especializada em curadoria autoral para viajantes exigentes.`,
  `As viagens em grupo com guia brasileiro partem de São Paulo (Guarulhos) e são conduzidas por um coordenador.`,
  `Além dos grupos com coordenador brasileiro, a Create Travel opera ${localGuideGroups.length} circuitos com guia local no destino e roteiros privativos sob medida para casais, famílias e empresas.`,
];
