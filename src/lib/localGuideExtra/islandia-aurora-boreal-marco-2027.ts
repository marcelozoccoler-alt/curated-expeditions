import type { LocalGuideGroup } from "@/lib/localGuideGroups";

export const islandiaAuroraBorealMarco2027: LocalGuideGroup = {
  slug: "islandia-aurora-boreal-marco-2027",
  code: "ISL-MAR27",
  title: "Islândia: Gelo, Fogo & Aurora Boreal",
  subtitle: "Reykjavík · Círculo Dourado · Costa Sul · Jökulsárlón · Blue Lagoon",
  intro:
    "Março é o mês em que a Islândia ainda guarda o inverno e já devolve a luz: dias mais longos para cascatas e glaciares, noites escuras o bastante para a aurora boreal. Este grupo exclusivo Create Signature, com guia em português, atravessa o país do fogo e do gelo — das placas tectônicas de Thingvellir às cavernas de gelo azul do Vatnajökull, da praia negra de Reynisfjara aos icebergs da Diamond Beach — e termina nas águas leitosas da Blue Lagoon, com noite no Silica Hotel.",
  highlights: [
    "Guia em português durante toda a viagem",
    "Caçadas à aurora boreal nas noites favoráveis, com saída adicional se ainda não tiver sido vista",
    "Cavernas de gelo (Ice Caves) do glaciar Vatnajökull, com especialistas locais",
    "Lagoa glaciar de Jökulsárlón e os icebergs da Diamond Beach",
    "Círculo Dourado: Thingvellir, Geysir e Gullfoss, com pão cozido no calor geotérmico",
    "Sky Lagoon com ritual de 7 passos e noite no Silica Hotel, com acesso à Blue Lagoon",
    "Cânion Fjaðrárgljúfur, quadriciclo até o avião DC-3 e túnel de lava Raufarhólshellir",
  ],
  category: "Premium",
  days: 8,
  nights: 7,
  priceEur: 5210,
  singleSupplementEur: 1480,
  payment: { entry: "30%", balance: "3 parcelas no cartão de crédito" },
  priceExtras: [
    { label: "Voos Lisboa–Keflavík–Lisboa (FI955 / FI954)", valueEur: 520 },
    { label: "Pacote de refeições (6 almoços + 6 jantares)", valueEur: 1620 },
    { label: "Upgrade The Retreat at Blue Lagoon (última noite)", valueEur: 950 },
  ],
  priceNote:
    "Saída de Lisboa em 14/03/2027 e regresso em 21/03/2027. O valor acima é a parte terrestre: voos, pacote de refeições e upgrade são itens à parte, listados abaixo.",
  countries: ["Islândia"],
  area: "Europa",
  hotels: [
    { city: "Reykjavík", hotel: "Iceland Parliament Hotel, Curio Collection by Hilton" },
    { city: "Círculo Dourado", hotel: "Hótel Geysir" },
    { city: "Jökulsárlón", hotel: "Hótel Jökulsárlón Glacier Lagoon" },
    { city: "Costa Sul", hotel: "Hotel Lóa" },
    { city: "Blue Lagoon", hotel: "Silica Hotel (Deluxe Room) — upgrade opcional The Retreat" },
  ],
  departures: ["2027-03-14"],
  itinerary: [
    { day: 1, route: "LISBOA / KEFLAVIK / REYKJAVÍK", text: "Voo de Lisboa com chegada a Keflavik às 18h30. Traslado privado ao Iceland Parliament Hotel, no coração de Reykjavík, junto ao Parlamento e à praça Austurvöllur. Por volta das 22h, primeira caçada à aurora boreal (3–4 h), sujeita às condições do céu." },
    { day: 2, route: "REYKJAVÍK", text: "Manhã livre para descobrir a capital a pé. Experiência imersiva no FlyOver Iceland, um voo simulado sobre glaciares, vulcões e cascatas. À tarde, Sky Lagoon com acesso Sér e o ritual de 7 passos — lagoa infinita sobre o Atlântico, mergulho frio, sauna panorâmica e esfoliação com produtos islandeses. Caçada à aurora nas noites favoráveis." },
    { day: 3, route: "CÍRCULO DOURADO", text: "Parque Nacional de Thingvellir, onde as placas tectônicas da América do Norte e da Eurásia se afastam; o campo geotérmico de Geysir e a cascata Gullfoss. Experiência de pão de centeio cozido sob a terra pelo calor geotérmico. Hospedagem no Hótel Geysir, a poucos metros do Strokkur, e caçada à aurora." },
    { day: 4, route: "COSTA SUL", text: "Seljalandsfoss, a cascata que se contorna por trás; Skógafoss e a praia de areia negra de Reynisfjara, com suas colunas de basalto. Hospedagem por duas noites no Hótel Jökulsárlón Glacier Lagoon. Caçada à aurora nas noites favoráveis." },
    { day: 5, route: "JÖKULSÁRLÓN · DIAMOND BEACH · ICE CAVES", text: "Lagoa glaciar de Jökulsárlón e os blocos de gelo da Diamond Beach. Visita guiada às cavernas de gelo azul do Vatnajökull, a maior geleira da Europa, com equipamento de segurança fornecido." },
    { day: 6, route: "FJAÐRÁRGLJÚFUR · QUADRICICLO", text: "Cânion Fjaðrárgljúfur e passeio de quadriciclo pela praia negra até os destroços do avião DC-3. Hospedagem no Hotel Lóa." },
    { day: 7, route: "TÚNEL DE LAVA · BLUE LAGOON", text: "Túnel de lava Raufarhólshellir e traslado direto ao Silica Hotel, na península de Reykjanes, com acesso à Blue Lagoon (voucher Premium). Upgrade opcional para The Retreat at Blue Lagoon." },
    { day: 8, route: "KEFLAVIK / LISBOA", text: "Traslado privado ao aeroporto e voo FI954 às 08h30 com destino a Lisboa." },
  ],
};
