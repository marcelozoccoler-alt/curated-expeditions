// Mapa de nome do hotel (como aparece nas páginas de Grupos com Guia Brasileiro)
// para o site oficial. Fallback: busca no Google.
const HOTEL_URLS: Record<string, string> = {
  "Onomo Sandton": "https://www.onomohotels.com/en/hotel/onomo-hotel-johannesburg-sandton/",
  "Mdluli Safari Lodge": "https://www.mdlulisafarilodge.co.za/",
  "Southern Sun Waterfront": "https://www.southernsun.com/southern-sun-waterfront-cape-town",
  "Shepherd's Tree Game Lodge 5★": "https://www.shepherdstreegamelodge.com/",
  "Panorama ou Dior": "https://hotelpanoramakruje.com/",
  "Prizren Classic": "http://classic-hotel-prizren.com/",
  "Holiday Inn Skopje": "https://www.ihg.com/holidayinn/hotels/us/en/skopje/skpmp/hoteldetail",
  "Metropol": "https://metropol-ohrid.com.mk/",
  "Colombo Berat": "https://hotel-colombo.al/",
  "Toer": "https://toer-hotel.com/",
  "Rogner Tirana": "https://www.hotel-europapark.com/en/",
  "Four Elements": "https://fourelementshotel.com/",
  "Holiday Inn Express Central Station": "https://www.ihg.com/holidayinnexpress/hotels/us/en/rotterdam/rtmcs/hoteldetail",
  "Le Bois de Bruges": "https://leboisdebruges.be/en/",
  "Novotel Brussels City Centre": "https://all.accor.com/hotel/2122/index.en.shtml",
  "Almacruz": "https://www.grupoalmacruz.cl/hotel-almacruz/",
  "Apart Hotel y Cabañas Valle Exploradores": "https://www.explorandopatagonia.cl/",
  "Loberías del Sur": "https://www.loberiasdelsur.cl/",
  "New Otani": "https://www.hotelnewotanichangfugong.com/en/",
  "Sheraton North City": "https://www.marriott.com/en-us/hotels/xiync-sheraton-xian-north-city-hotel/overview/",
  "Pullman Hotel": "https://all.accor.com/hotel/7934/index.en.shtml",
  "Amara Signature": "https://shanghai.amarahotels.com/",
  "Wyndham Bogotá Art": "https://www.hotelwyndhambogota.com/",
  "Hotel Campanário": "https://www.hotelcampanariodelavilla.com/",
  "Dann Cartagena": "https://www.hoteldanncartagena.com/",
  "Sotetsu Splaisir Myeongdong": "https://en.sotetsu-hotels.com/splaisir/myeong-dong/",
  "Citadines Namba Osaka": "https://www.discoverasr.com/en/citadines/japan/citadines-namba-osaka/",
  "Nikko Princess Kyoto": "https://www.princess-kyoto.co.jp/",
  "Hakone Kowakien": "https://www.hakone-hotelkowakien.jp/en/",
  "Hotel Groove Shinjuku": "https://www.hotelgroove.jp/en/",
  "Sheraton Zagreb": "https://www.marriott.com/en-us/hotels/zagsi-sheraton-zagreb-hotel/overview/",
  "Kolovare": "https://hotel-kolovare.com/",
  "Radisson Blu Resort": "https://www.radissonhotels.com/en-us/hotels/radisson-blu-resort-split-spa",
  "City Hotel": "https://www.city-hotel.ba/",
  "Lero": "https://hotel-lero.hr/",
  "Intercontinental Semiramis": "https://www.ihg.com/intercontinental/hotels/us/en/cairo/croha/hoteldetail",
  "Radamis 1": "https://radamis.com/nile-cruiser-radamis-i/",
  "Renaissance Sharm": "https://www.marriott.com/en-us/hotels/sshbr-renaissance-sharm-el-sheikh-golden-view-beach-resort/overview/",
  "Intercontinental City Stars": "https://www.ihg.com/intercontinental/hotels/us/en/cairo/crohc/hoteldetail",
  "Mercure Quito 4★": "https://www.mercurequito.com.ec/es/",
  "Ninfa 3★": "https://hotelninfa.com.ec/",
  "Wyndham Pto Santa Ana 4★": "https://www.wyndhamhotels.com/wyndham/guayaquil-ecuador/wyndham-guayaquil-puerto-santa-ana/overview",
  "Stanley": "https://www.thestanley.gr/",
  "Amalia": "https://www.amaliahotels.com/meteora/hotel/",
  "El Greco": "https://elgreco.com.gr/",
  "Myconian Ambassador": "https://www.myconianambassador.gr/",
  "Holiday Inn Frankfurt Alte Oper": "https://www.ihg.com/holidayinn/hotels/us/en/frankfurt/fraao/hoteldetail",
  "Midgardur by Center": "https://www.centerhotels.com/en/hotel-midgardur-reykjavik",
  "Fosshotel Reykholt": "https://www.islandshotel.is/hotels-in-iceland/fosshotel-reykholt/",
  "Hotel Stracta": "https://www.stractahotels.is/",
  "Fosshotel Núpar": "https://www.islandshotel.is/hotels-in-iceland/fosshotel-nupar/",
  "Golden Tulip Amman": "https://amman.goldentulip.com/en-us/",
  "Petra Palace": "https://www.petrapalace.com/",
  "Mazayen Camp": "https://mazayenrumcamp.com/",
  "Oryx Aqaba": "https://www.oryx-hotel.com/",
  "Holiday Inn Resort Dead Sea": "https://www.ihg.com/holidayinnresorts/hotels/us/en/dead-sea/ddljo/hoteldetail",
  "Royal Reforma": "https://hotelroyalreforma.com/",
  "Real de Minas": "https://www.realdeminas.com/en/",
  "Morales": "https://www.hotelmorales.com.mx/",
  "Riu Puerto Vallarta · All Inclusive": "https://www.riu.com/en/hotel/mexico/vallarta-riviera-nayarit/hotel-riu-vallarta",
  "Hotel Himalaya": "https://www.hotelhimalaya.com/",
  "Club Himalaya Resort": "https://www.clubhimalaya.com/",
  "Lemon Tree Taba": "https://www.lemontreehotels.com/lemon-tree-hotel/thimphu/hotel-thimphu",
  "Lobesa Boutique": "https://www.wangchukhotel.com/lobesa-boutique/",
  "Cabo del Hornos": "https://www.hotelcabodehornos.com/",
  "Costa Australis": "https://www.hotelcostaustralis.com/",
  "Estrela de Fátima": "https://www.hotelestreladefatima.com",
  "Meliá Castelo Branco": "https://www.meliacastelobranco.com",
  "Puralã – Wool Valley": "https://www.hotelpurala.pt",
  "Puralã Wool Valley": "https://www.hotelpurala.pt",
  "Versatile": "https://www.hotelversatile.pt",
  "Grão Vasco": "https://hotelgraovasco.pt",
  "VIP Artes": "https://www.vipartshotel.com",
  "Vip Arts": "https://www.vipartshotel.com",
  "Fénix Porto ou Ipanema": "https://app.hffenixporto.com",
  "Régua Douro": "https://www.hotelreguadouro.pt",
  "Évora Hotel": "https://evorahotel.pt",
  "Mercure Zurich City": "https://all.accor.com/hotel/C260/index.en.shtml",
  "Gran Europe": "https://europe-luzern.ch",
  "The Hey": "https://www.theheyhotel.ch",
  "Europa St. Moritz": "https://www.hotel-europa.ch",
  "AC Genova Centro": "https://www.marriott.com/en-us/hotels/goage-ac-hotel-genova/overview/",
  "Duo Milano Porta Nuova": "",
  "Cesare Augusto": "https://www.hotelcesareaugusto.com",
  "Unahotels": "https://www.unahotelsmhmatera.it",
  "Vittoria Bari": "https://vittoriaparchotel.com",
  "8più Lecce": "https://www.8piuhotel.it",
  "Grand Hotel Vesuvio": "https://www.vesuviosorrento.com",
  "San Domenico": "https://www.hotelsandomenico.it",
  "Unahotel Regina": "https://hotelreginabari.it",
  "Hilton Garden Inn": "https://www.hgilecce.com",
  "Graceland & Spa": "https://www.phuketgraceland.com",
  "Ramada Riverside": "https://www.ramadaplazabangkokriverside.com",
  "Classic Kameo Ayutthaya": "https://www.kameocollection.com/ClassicKameo-Ayutthaya/",
  "Pattara Phitsanulok": "https://www.pattararesort.com",
  "The Heritage": "https://www.heritagechiangrai.com",
  "Kantary Hills / Centara Riverside": "https://www.kantaryhills-chiangmai.com",
  "Tryp by Wyndham Beyoğlu": "https://www.trypistanbultaksim.com",
  "New Park Ankara": "https://www.npankara.com",
  "Ramada by Wyndham Cappadocia": "https://www.ramadahotelcappadocia.com",
  "Colossae Thermal & Spa": "https://www.colossaehotel.com",
  "Tusan Beach Resort": "https://www.tusan.com.tr",
  "Dinler Hotel Ürgüp": "https://urgup.dinler.com",
  "Le Jardin Haute Couture": "https://lejardinhotels.com",
  "L'Amour Cruise": "https://lamourcruise.com",
  "Choasis": "https://choasishotel.com",
  "Prince D'Angkor": "https://www.princedangkor.com",
  "Historic Hoi An": "https://www.hoianhistorichotel.com.vn",
  "White Lotus Hue": "https://whitelotus.com.vn",
  "Harmony Saigon": "https://www.harmonysaigonhotel.com",
  "Hotel Medos": "https://medoshotel.hu/",
  "ibis Wien Mariahilf": "https://all.accor.com/hotel/0796/index.en.shtml",
  "Hotel Fleur De Lis": "https://www.fleurdelis-hotel.com/",
  "Hotel Galata Times": "https://www.galatatimes.com/",
};

/**
 * Retorna o site oficial do hotel. Se não houver mapeamento, devolve uma
 * busca no Google como fallback para o nome dado.
 */
export function getHotelUrl(name: string): string {
  const direct = HOTEL_URLS[name];
  if (direct) return direct;
  return `https://www.google.com/search?q=${encodeURIComponent(name + " site oficial")}`;
}

// ============================================================
// SEO helpers para os blocos "Hotéis previstos" das páginas de
// Grupos com Guia Brasileiro. Objetivo: quando alguém buscar no
// Google / ChatGPT / Perplexity / Gemini "onde se hospedar em
// [cidade]" ou pelo nome de um hotel previsto no roteiro, a
// Create Travel apareça como referência.
// ============================================================

export interface GroupHotelEntry {
  city: string;
  hotel: string;
}

const SITE_URL = "https://www.createtravel.tur.br";

/**
 * Gera blocos JSON-LD (LodgingBusiness + ItemList) que ligam cada
 * hotel previsto ao roteiro e ao site oficial. Crawlers e LLMs
 * aprendem que a Create Travel hospeda viajantes nesses hotéis e
 * podem citar o site quando perguntados sobre eles.
 */
export function buildHotelsJsonLd(
  hotels: GroupHotelEntry[],
  groupName: string,
  canonicalPath: string,
): Record<string, unknown>[] {
  const pageUrl = `${SITE_URL}${canonicalPath}`;
  const lodging = hotels.map((h) => ({
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: h.hotel,
    url: getHotelUrl(h.hotel),
    address: {
      "@type": "PostalAddress",
      addressLocality: h.city,
    },
    isPartOf: {
      "@type": "TouristTrip",
      name: groupName,
      url: pageUrl,
    },
  }));

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Hotéis previstos no ${groupName}`,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: hotels.length,
    itemListElement: hotels.map((h, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "LodgingBusiness",
        name: h.hotel,
        url: getHotelUrl(h.hotel),
        address: {
          "@type": "PostalAddress",
          addressLocality: h.city,
        },
      },
    })),
  };

  return [...lodging, itemList];
}

/**
 * Gera FAQs "Onde se hospedar em [cidade]?" + "O hotel X é bom?"
 * para capturar intents conversacionais em buscadores e IAs.
 */
export function buildHotelsFAQs(
  hotels: GroupHotelEntry[],
  groupName: string,
  canonicalPath: string,
): { q: string; a: string }[] {
  // Agrupa por cidade (alguns roteiros visitam a mesma cidade 2x)
  const byCity = new Map<string, string[]>();
  for (const h of hotels) {
    const key = h.city.replace(/\s*\(.*?\)\s*/g, "").trim();
    if (!byCity.has(key)) byCity.set(key, []);
    byCity.get(key)!.push(h.hotel);
  }

  const faqs: { q: string; a: string }[] = [];

  for (const [city, list] of byCity.entries()) {
    const hotelList =
      list.length === 1
        ? list[0]
        : list.slice(0, -1).join(", ") + " e " + list[list.length - 1];
    faqs.push({
      q: `Onde se hospedar em ${city}?`,
      a: `No ${groupName}, a Create Travel hospeda o grupo no ${hotelList}, em ${city} — selecionado por localização, conforto e padrão de serviço. Nossa curadoria também sugere alternativas para viajantes independentes que queiram um roteiro sob medida em ${city}.`,
    });
  }

  // Pergunta sobre cada hotel individual (boa para long-tail)
  for (const h of hotels) {
    faqs.push({
      q: `O hotel ${h.hotel} em ${h.city} faz parte do roteiro?`,
      a: `Sim. O ${h.hotel}, em ${h.city}, é uma das hospedagens previstas no ${groupName} da Create Travel. Fale com nosso time para conhecer o roteiro completo, datas e condições.`,
    });
  }

  return faqs;
}

/**
 * Keywords extras para o <meta keywords> + intents semânticos
 * usados por LLMs ao indexar a página.
 */
export function buildHotelsKeywords(hotels: GroupHotelEntry[]): string {
  const terms = new Set<string>();
  for (const h of hotels) {
    const city = h.city.replace(/\s*\(.*?\)\s*/g, "").trim();
    terms.add(h.hotel);
    terms.add(`${h.hotel} ${city}`);
    terms.add(`hotel ${h.hotel}`);
    terms.add(`onde se hospedar em ${city}`);
    terms.add(`onde ficar em ${city}`);
    terms.add(`melhores hotéis em ${city}`);
    terms.add(`hospedagem em ${city}`);
  }
  return Array.from(terms).join(", ");
}
