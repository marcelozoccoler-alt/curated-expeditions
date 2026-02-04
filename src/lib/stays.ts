import { Stay } from "./types";

export const stays: Stay[] = [
  {
    slug: "anavilhanas-jungle-lodge",
    name: "Anavilhanas Jungle Lodge",
    destinationRef: "brasil-amazonia-anavilhanas",
    bestTime: "Jun–Nov (seca) para trilhas e praias de rio; Dez–Mai (cheia) para igapós e navegação.",
    tags: ["navegacao", "conservacao", "bem-estar", "fotografia", "familia", "remoto"],
    imageAiPrompt: "Ultra realistic editorial travel photo of a luxury jungle lodge in the Amazon on the riverbank, warm sunrise light, wooden architecture integrated with rainforest, natural colors, no people.",
    imageOverrideUrl: "",
    whySelected: "Luxo discreto e imersão real no Rio Negro: serviço cuidadoso, guias fortes e experiências que valorizam silêncio, ética e profundidade.",
    beyondUsual: [
      "Canoagem silenciosa ao amanhecer com leitura de sons e rastros.",
      "Focagem noturna interpretativa (ética, sem perturbar fauna).",
      "Vivência responsável com comunidades ribeirinhas, com contexto e respeito."
    ],
    faq: [
      { q: "Qual a melhor época para ficar no Anavilhanas?", a: "Seca (jun–nov) favorece trilhas e praias de rio; cheia (dez–mai) revela os igapós e a navegação por dentro da floresta." },
      { q: "É indicado para lua de mel?", a: "Sim, para casais que buscam natureza, conforto e silêncio." },
      { q: "Quantas noites são ideais?", a: "Em geral, 3 a 5 noites funcionam muito bem." },
      { q: "É bom para famílias?", a: "Sim, com atividades adaptadas por guia e ritmo." },
      { q: "Como chegar?", a: "Normalmente via Manaus e traslado até a região do Rio Negro (definimos conforme logística do roteiro)." },
      { q: "A Create Travel monta roteiro combinado?", a: "Sim, com Manaus e extensões no Brasil conforme o seu perfil." }
    ]
  },
  {
    slug: "mirante-do-gaviao",
    name: "Mirante do Gavião Amazon Lodge",
    destinationRef: "brasil-amazonia-manaus-rio-negro",
    bestTime: "Jun–Nov para trilhas e praias de rio; Dez–Mai para floresta alagada e experiências de navegação.",
    tags: ["navegacao", "bem-estar", "conservacao", "fotografia", "remoto"],
    imageAiPrompt: "Ultra realistic photo of an Amazon lodge with modern rustic architecture, deck overlooking a wide river at sunset, lush rainforest background, cinematic light, no people.",
    imageOverrideUrl: "",
    whySelected: "Arquitetura e paisagem se encontram com naturalidade. Um lugar para desacelerar e observar a Amazônia com conforto e estética.",
    beyondUsual: [
      "Rotas de canoa focadas em observação de aves.",
      "Jantar com ingredientes amazônicos e narrativa de origem.",
      "Trilha de escuta noturna com guia especializado."
    ],
    faq: [
      { q: "É bom para quem quer descanso?", a: "Sim, é uma excelente base de slow travel na Amazônia." },
      { q: "A experiência muda entre seca e cheia?", a: "Sim: cheia favorece navegação; seca favorece trilhas e praias de rio." },
      { q: "Dá para combinar com Anavilhanas?", a: "Sim, como duas camadas complementares do Rio Negro." },
      { q: "Como reservar com a Create Travel?", a: "Via WhatsApp no botão Criar roteiro em parceria." },
      { q: "É focado em natureza?", a: "Sim, com curadoria para vivências autênticas." },
      { q: "Posso personalizar atividades?", a: "Sim, conforme seu perfil e ritmo." }
    ]
  },
  {
    slug: "caiman-pantanal",
    name: "Caiman Pantanal",
    destinationRef: "brasil-pantanal-norte",
    bestTime: "Mai–Out (seca) para máxima observação de fauna; Nov–Mar (cheia) para paisagens alagadas e aves.",
    tags: ["safari", "fotografia", "conservacao", "familia", "cavalgadas", "bem-estar"],
    imageAiPrompt: "Ultra realistic editorial photo of a high-end safari lodge in the Pantanal, open landscape, golden hour, tasteful architecture, no people.",
    imageOverrideUrl: "",
    whySelected: "Referência no Pantanal com bom padrão de serviço e vínculo com conservação. Ideal para observação ética e fotografia.",
    beyondUsual: [
      "Saídas focadas em comportamento animal (não em perseguição).",
      "Vivência pantaneira com histórias de território.",
      "Canoagem em silêncio ao entardecer."
    ],
    faq: [
      { q: "Quando é melhor para ver onça?", a: "Em geral na seca (mai–out), quando as condições favorecem observação." },
      { q: "É indicado para famílias?", a: "Sim, com ajustes de ritmo." },
      { q: "Dá para combinar com Bonito?", a: "Sim, é uma combinação excelente." },
      { q: "O que é luxo discreto?", a: "Conforto real e serviço excelente sem ostentação." },
      { q: "Como funciona a curadoria Create Travel?", a: "Definimos base, dias, horários e foco (foto/aves/família)." },
      { q: "Como falar com consultor?", a: "Clique em Criar roteiro em parceria." }
    ]
  }
];

export const getStayBySlug = (slug: string): Stay | undefined => {
  return stays.find((s) => s.slug === slug);
};

export const getStaysByDestination = (destinationRef: string): Stay[] => {
  return stays.filter((s) => s.destinationRef === destinationRef);
};

export const getStaysByTag = (tagId: string): Stay[] => {
  return stays.filter((s) => s.tags.includes(tagId));
};

export const searchStays = (query: string): Stay[] => {
  const lowerQuery = query.toLowerCase();
  return stays.filter((s) => s.name.toLowerCase().includes(lowerQuery));
};

export const getFeaturedStays = (): Stay[] => {
  return stays.slice(0, 3);
};
