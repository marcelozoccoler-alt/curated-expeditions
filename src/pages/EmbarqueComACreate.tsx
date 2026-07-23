import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Plane,
  ShieldCheck,
  Users,
  Languages,
  HeadphonesIcon,
  Sparkles,
  MapPin,
  CreditCard,
  Calendar,
  Compass,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEO } from "@/components/SEO";
import { FAQSection } from "@/components/FAQSection";
import { CONTACT, generateWhatsAppLink } from "@/lib/types";
import grupoGreciaImg from "@/assets/grupo-grecia-2026.jpg";
import grupoMarrocosImg from "@/assets/grupo-marrocos-2026.jpg";
import grupoPatagoniaImg from "@/assets/grupo-patagonia-chilena-2026.jpg";
import grupoEquadorImg from "@/assets/grupo-equador-galapagos-2026.jpg";
import grupoTailandiaImg from "@/assets/grupo-tailandia-2026.jpg";
import grupoCroaciaImg from "@/assets/grupo-croacia-balcas-2026.jpg";
import grupoAfricaImg from "@/assets/grupo-africa-do-sul-2026.jpg";
import grupoEgitoImg from "@/assets/grupo-egito-2026.jpg";
import grupoIslandiaImg from "@/assets/grupo-islandia-2026.jpg";
import grupoCoreiaJapaoImg from "@/assets/grupo-coreia-japao-2026.jpg";
import grupoSulItaliaImg from "@/assets/grupo-sul-italia-2026.jpg";
import grupoJordaniaImg from "@/assets/grupo-jordania-2026.jpg";
import grupoNepalButaoImg from "@/assets/grupo-nepal-butao-2027.jpg";
import grupoVietnaLaosCambojaImg from "@/assets/grupo-vietna-laos-camboja-2027.jpg";
import grupoMexicoImg from "@/assets/grupo-mexico-2026.jpg";
import grupoAfricaReveillonImg from "@/assets/grupo-africa-do-sul-reveillon-2027.jpg";
import grupoTurquiaReveillonImg from "@/assets/grupo-turquia-reveillon-2027.jpg";
import grupoAfricaPrimaveraImg from "@/assets/grupo-africa-do-sul-primavera-2026.jpg";
import grupoTurquia2026Img from "@/assets/grupo-turquia-2026.jpg";
import grupoColombiaImg from "@/assets/grupo-colombia-2026.jpg";
import grupoBeneluxImg from "@/assets/grupo-benelux-2026.jpg";
import grupoBalcasAutenticosImg from "@/assets/grupo-balcas-autenticos-2026.jpg";
import grupoAfricaDoSulOutubroImg from "@/assets/grupo-africa-do-sul-outubro-2026.jpg";
import grupoPortugalAldeiasImg from "@/assets/grupo-portugal-aldeias-2026.jpg";
import grupoSulItaliaOutubroImg from "@/assets/grupo-sul-italia-outubro-2026.jpg";
import grupoChinaImg from "@/assets/grupo-china-2026.jpg";
import grupoSuicaNorteItaliaImg from "@/assets/grupo-suica-norte-italia-2026.jpg";
import grupoPortugalNorteSulImg from "@/assets/grupo-portugal-norte-sul-2026.jpg";
import grupoChileCarreteraImg from "@/assets/grupo-chile-carretera-austral-2026.jpg";
import grupoEuropaLesteTurquiaImg from "@/assets/grupo-europa-leste-turquia-2026.jpg";
import grupoEquadorGalapagosCarnavalImg from "@/assets/grupo-equador-galapagos-carnaval-2027.jpg";
import grupoIndiaSriLankaHoliImg from "@/assets/grupo-india-sri-lanka-holi-2027.jpg";
import grupoCoreiaJapaoCerejeirasImg from "@/assets/grupo-coreia-japao-cerejeiras-2027.jpg";
import grupoChinaPrimaveraImg from "@/assets/grupo-china-primavera-2027.jpg";

const RAW_DEPARTURES = [
  {
    href: "/grupos/jordania-2026",
    img: grupoJordaniaImg,
    tag: "09 a 19/09/2026 · 11 dias",
    title: "Jordânia Completa",
    subtitle: "Amã · Jerash · Petra · Wadi Rum · Aqaba · Mar Morto",
    desc: "Petra rosa, noite beduína em Wadi Rum, snorkel em Aqaba, o sítio do batismo no Rio Jordão e o banho mais singular do planeta. Voos Ethiopian e guia desde o Brasil.",
    fromPrice: "A partir de US$ 4.173 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/africa-do-sul-2026",
    img: grupoAfricaImg,
    tag: "07 a 15/09/2026 · 9 dias",
    title: "África do Sul",
    subtitle: "Johanesburgo · Soweto · Kruger · Cape Town",
    desc: "Safári em reserva privada no Kruger, Soweto e o legado de Mandela, Table Mountain e o Cabo da Boa Esperança. Voos South African Airways e guia desde o Brasil.",
    fromPrice: "A partir de US$ 5.298 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/egito-2026",
    img: grupoEgitoImg,
    tag: "29/09 a 12/10/2026 · 14 dias",
    title: "Egito",
    subtitle: "Cairo · GEM · Luxor · Cruzeiro pelo Nilo · Sharm El Sheikh",
    desc: "Pirâmides de Gizé, o novíssimo Grande Museu Egípcio, cruzeiro pelo Nilo até Assuã e descanso no Mar Vermelho. Voos Turkish Airlines e guia desde o Brasil.",
    fromPrice: "A partir de US$ 4.598 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/coreia-japao-2026",
    img: grupoCoreiaJapaoImg,
    tag: "13 a 27/10/2026 · 15 dias",
    title: "Coreia & Japão",
    subtitle: "Seul · DMZ · Osaka · Kyoto · Hakone · Tóquio",
    desc: "Outono em sua melhor forma: palácios de Seul, a Zona Desmilitarizada, Fushimi Inari, Monte Fuji e Tóquio. Voos Turkish Airlines e guia desde o Brasil.",
    fromPrice: "A partir de US$ 8.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/sul-italia-2026",
    img: grupoSulItaliaImg,
    tag: "27/10 a 07/11/2026 · 12 dias",
    title: "Sul da Itália",
    subtitle: "Sorrento · Amalfi · Pompeia · Matera · Bari · Alberobello · Lecce",
    desc: "Outono italiano: Costa Amalfitana, Sassi de Matera, trulli da Puglia e o encontro do Adriático com o Jônico em Santa Maria di Leuca. Voos ITA Airways e guia desde o Brasil.",
    fromPrice: "A partir de € 4.757 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/islandia-2026",
    img: grupoIslandiaImg,
    tag: "12 a 22/11/2026 · 11 dias",
    title: "Islândia · Aurora Boreal",
    subtitle: "Reykjavík · Círculo Dourado · Jökulsárlón · Blue Lagoon",
    desc: "Caça à aurora boreal, Crystal Ice Cave em Vatnajökull, costa sul e cruzeiro noturno em Reykjavík. Voos Lufthansa e guia desde o Brasil.",
    fromPrice: "A partir de € 5.996 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/tailandia-2026",
    img: grupoTailandiaImg,
    tag: "12 a 26/11/2026 · 15 dias",
    title: "Tailândia · Festival das Lanternas",
    subtitle: "Phuket · Phi Phi · Bangkok · Ayutthaya · Sukhothai · Chiang Mai",
    desc: "Praias do Mar de Andaman, templos milenares e a noite mágica do Yi Peng em Chiang Mai. Voos Emirates e guia desde o Brasil.",
    fromPrice: "A partir de US$ 5.978 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/equador-galapagos-2026",
    img: grupoEquadorImg,
    tag: "12 a 22/10/2026 · 11 dias",
    title: "Equador & Galápagos",
    subtitle: "Quito · Cotopaxi · Galápagos · Guayaquil",
    desc: "Dos Andes ao Pacífico: tartarugas gigantes, iguanas marinhas e a Avenida dos Vulcões com voos LATAM e guia desde o Brasil.",
    fromPrice: "A partir de US$ 3.997 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/croacia-balcas-2026",
    img: grupoCroaciaImg,
    tag: "11 a 22/10/2026 · 12 dias",
    title: "Croácia, Bósnia & Montenegro",
    subtitle: "Zagreb · Plitvice · Split · Hvar · Mostar · Dubrovnik · Kotor",
    desc: "Outono dourado nos Bálcãs: lagos da UNESCO, muralhas medievais e o único fiorde do Mediterrâneo, com voos Turkish e guia desde o Brasil.",
    fromPrice: "A partir de € 4.338 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/patagonia-chilena-2026",
    img: grupoPatagoniaImg,
    tag: "04 a 11/10/2026 · 8 dias",
    title: "Patagônia Chilena",
    subtitle: "Santiago · Punta Arenas · Torres del Paine · Glaciares",
    desc: "Primavera no fim do mundo: granito, gelo e estepes patagônicas com voos LATAM e guia desde o Brasil.",
    fromPrice: "A partir de US$ 3.498 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/grecia-2026",
    img: grupoGreciaImg,
    tag: "27/09 a 09/10/2026 · 13 dias",
    title: "Grécia Eterna",
    subtitle: "Atenas · Delfos · Meteora · Santorini · Mykonos",
    desc: "Entre deuses, ilhas e história. Voos Iberia via Madri, hotéis 1ª categoria e guia acompanhante desde São Paulo.",
    fromPrice: "A partir de € 4.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/mexico-2026",
    img: grupoMexicoImg,
    tag: "12 a 22/11/2026 · 11 dias",
    title: "México · Cidades históricas e Pacífico",
    subtitle: "Cidade do México · Teotihuacán · San Miguel · Guanajuato · Guadalajara · Puerto Vallarta",
    desc: "Centro histórico, Teotihuacán, cidades coloniais Patrimônio UNESCO, mariachi em Guadalajara e Puerto Vallarta All Inclusive. Voos Aeroméxico e guia desde o Brasil.",
    fromPrice: "A partir de US$ 4.398 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/marrocos-2026",
    img: grupoMarrocosImg,
    tag: "18 a 26/11/2026 · 9 dias",
    title: "Marrocos Imperial",
    subtitle: "Rabat · Chefchaouen · Fez · Saara · Marrakech",
    desc: "Cidades imperiais, a cidade azul e uma noite nas dunas de Erg Chebbi. Curadoria autoral Create Travel com guia desde o Brasil.",
    fromPrice: "A partir de R$ 18.295 por pessoa (apto duplo)",
    status: "Vagas limitadas",
  },
  {
    href: "/grupos/nepal-butao-2027",
    img: grupoNepalButaoImg,
    tag: "01 a 15/02/2027 · 15 dias · Carnaval",
    title: "Nepal & Butão",
    subtitle: "Kathmandu · Bhaktapur · Nagarkot · Thimphu · Punakha · Paro",
    desc: "Carnaval 2027 no reino do Himalaia: vale de Kathmandu, amanhecer em Nagarkot, Punakha Dzong e a subida ao Tiger's Nest. Voos Turkish e guia desde o Brasil.",
    fromPrice: "A partir de US$ 7.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/vietna-laos-camboja-2027",
    img: grupoVietnaLaosCambojaImg,
    tag: "01 a 17/02/2027 · 17 dias · Carnaval",
    title: "Vietnã, Laos & Camboja",
    subtitle: "Hanói · Halong · Luang Prabang · Angkor · Hoi An · Hue · Saigon",
    desc: "Carnaval 2027 no Sudeste Asiático: cruzeiro em Halong, Tak Bat em Luang Prabang, templos de Angkor e lanternas de Hoi An. Voos Turkish e guia desde o Brasil.",
    fromPrice: "A partir de US$ 6.798 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/africa-do-sul-reveillon-2027",
    img: grupoAfricaReveillonImg,
    tag: "28/12/2026 a 05/01/2027 · 9 dias · Réveillon",
    title: "África do Sul · Réveillon 2027",
    subtitle: "Johanesburgo · Soweto · Kruger · Cape Town",
    desc: "Virada do ano em reserva privada no Kruger, Soweto e o legado de Mandela, Table Mountain e o Cabo da Boa Esperança. Voos South African Airways e guia desde o Brasil.",
    fromPrice: "A partir de US$ 5.487 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/turquia-reveillon-2027",
    img: grupoTurquiaReveillonImg,
    tag: "28/12/2026 a 09/01/2027 · 13 dias · Réveillon",
    title: "Turquia · Réveillon 2027",
    subtitle: "Istambul · Ancara · Capadócia · Pamukkale · Éfeso · Kusadasi · Bursa",
    desc: "Virada do ano em Istambul, Capadócia no inverno com balões ao amanhecer, piscinas brancas de Pamukkale e ruínas de Éfeso. Voos Turkish Airlines e guia desde o Brasil.",
    fromPrice: "A partir de € 3.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/africa-do-sul-primavera-2026",
    img: grupoAfricaPrimaveraImg,
    tag: "16 a 24/11/2026 · 9 dias",
    title: "África do Sul · Primavera",
    subtitle: "Johanesburgo · Soweto · Pilanesberg · Pretória · Cape Town",
    desc: "Safári no Pilanesberg (área livre de malária) em lodge 5 estrelas Shepherd's Tree, Soweto, Pretória, Table Mountain e Cabo da Boa Esperança. Voos South African Airways e guia desde o Brasil.",
    fromPrice: "A partir de US$ 4.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/turquia-2026",
    img: grupoTurquia2026Img,
    tag: "21/10 a 01/11/2026 · 12 dias",
    title: "Turquia Dourada · Outono",
    subtitle: "Istambul · Ancara · Capadócia · Pamukkale · Éfeso · Kusadasi · Bursa",
    desc: "Outono cinematográfico: cúpulas e Bósforo em Istambul, balões na Capadócia, piscinas brancas de Pamukkale e ruínas de Éfeso. Voos Turkish Airlines e guia desde o Brasil.",
    fromPrice: "A partir de € 3.698 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/colombia-2026",
    img: grupoColombiaImg,
    tag: "13 a 22/10/2026 · 10 dias",
    title: "Colômbia · Entre montanhas e Caribe",
    subtitle: "Bogotá · Zipaquirá · Villa de Leyva · Ráquira · Cartagena",
    desc: "Catedral de Sal de Zipaquirá, Villa de Leyva colonial, Cartagena das Índias amuralhada e a alegria da Chiva Rumbera. Voos LATAM e guia desde o Brasil.",
    fromPrice: "A partir de US$ 2.698 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/benelux-2026",
    img: grupoBeneluxImg,
    tag: "13 a 23/10/2026 · 11 dias",
    title: "Países Baixos, Bélgica & Luxemburgo",
    subtitle: "Amsterdã · Giethoorn · Roterdã · Kinderdijk · Bruges · Gante · Bruxelas · Luxemburgo",
    desc: "Grand Tour do Benelux no outono: canais de Amsterdã, vila de Giethoorn, moinhos de Kinderdijk, cervejaria trapista e Grand Place. Voos Iberia e guia desde o Brasil.",
    fromPrice: "A partir de € 4.989 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/balcas-autenticos-2026",
    img: grupoBalcasAutenticosImg,
    tag: "13 a 25/10/2026 · 13 dias",
    title: "Bálcãs Autênticos · Albânia, Kosovo & Macedônia do Norte",
    subtitle: "Krujë · Prizren · Dečani · Skopje · Ohrid · Berat · Gjirokastër · Butrint · Tirana",
    desc: "Outono dourado nos Bálcãs mais autênticos: cidadela de Skanderbeg, Mosteiro de Dečani (UNESCO), Lago de Ohrid, Berat e Gjirokastër, Riviera Albanesa e Butrint. Voos ITA Airways e guia desde o Brasil.",
    fromPrice: "A partir de € 4.759 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/europa-do-leste-turquia-2026",
    img: grupoEuropaLesteTurquiaImg,
    tag: "02 a 16/10/2026 · 15 dias",
    title: "Europa do Leste & Turquia",
    subtitle: "Budapeste · Viena · Praga · Istambul",
    desc: "Grupo exclusivo de até 12 pessoas por quatro capitais icónicas: cruzeiro pelo Danúbio, concerto clássico em Schönbrunn, jantar medieval em Praga e o encontro entre Europa e Ásia. Voos Turkish Airlines.",
    fromPrice: "A partir de R$ 24.935 por pessoa (apto duplo)",
    status: "Lote esgotado",
  },
  {
    href: "/grupos/africa-do-sul-outubro-2026",
    img: grupoAfricaDoSulOutubroImg,
    tag: "12 a 20/10/2026 · 9 dias",
    title: "África do Sul · Kruger & Cape Town",
    subtitle: "Johanesburgo · Soweto · Blyde River Canyon · Kruger · Cape Town",
    desc: "Safári em reserva privada no Mdluli Safari Lodge, Soweto e legado de Mandela, Blyde River Canyon, Table Mountain e Cabo da Boa Esperança. Voos South African Airways e guia desde o Brasil.",
    fromPrice: "A partir de US$ 4.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/portugal-aldeias-historicas-2026",
    img: grupoPortugalAldeiasImg,
    tag: "12 a 22/10/2026 · 11 dias",
    title: "Portugal com Aldeias Históricas",
    subtitle: "Fátima · Piódão · Marvão · Monsanto · Belmonte · Sortelha · Almeida · Guarda · Trancoso · Viseu · Coimbra · Lisboa",
    desc: "Procissão das Velas em Fátima no dia 13/10, 12 Aldeias Históricas medievais, vinhos do Dão e Belém. Voos TAP Air Portugal e guia desde o Brasil.",
    fromPrice: "A partir de € 4.149 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/sul-italia-outubro-2026",
    img: grupoSulItaliaOutubroImg,
    tag: "11 a 22/10/2026 · 12 dias",
    title: "Sul da Itália · Outono",
    subtitle: "Sorrento · Positano · Amalfi · Pompeia · Matera · Alberobello · Bari · Polignano · Lecce · Otranto · Santa Maria di Leuca",
    desc: "Outono italiano: Costa Amalfitana, Sassi de Matera, trulli da Puglia e o encontro do Adriático com o Jônico em Santa Maria di Leuca. Voos ITA Airways e guia desde o Brasil.",
    fromPrice: "A partir de € 4.757 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/china-2026",
    img: grupoChinaImg,
    tag: "08 a 21/10/2026 · 14 dias",
    title: "China Dourada · Outono",
    subtitle: "Beijing · Grande Muralha · Xi'an · Zhangjiajie · Shanghai",
    desc: "Cidade Proibida, Grande Muralha, Guerreiros de Terracota, Zhangjiajie (cenário de Avatar) e Shanghai futurista. Voos Ethiopian Airlines e guia desde o Brasil.",
    fromPrice: "A partir de US$ 5.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/suica-norte-italia-2026",
    img: grupoSuicaNorteItaliaImg,
    tag: "01 a 13/10/2026 · 13 dias",
    title: "Suíça & Norte da Itália · Outono",
    subtitle: "Zurique · Lucerna · Titlis · Jungfrau · Glacier Express · Como · Cinque Terre · Piemonte · Milão",
    desc: "Alpes dourados, Lindt em Zurique, Glacier Express até St. Moritz, Lago de Como, Riviera Italiana, vinhos do Piemonte e Milão. Voos TAP Air Portugal e guia desde o Brasil.",
    fromPrice: "A partir de € 6.498 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/portugal-norte-sul-2026",
    img: grupoPortugalNorteSulImg,
    tag: "28/09 a 11/10/2026 · 14 dias",
    title: "Portugal de Norte a Sul · Outono",
    subtitle: "Porto · Aveiro · Braga · Douro · Serra da Estrela · Fátima · Óbidos · Lisboa · Sintra · Évora · Algarve",
    desc: "Do Porto ao Algarve no auge do outono: cruzeiro no Douro, queijos da Serra, ginjinha em Óbidos, palácios de Sintra, Évora e praias douradas. Voos Iberia e guia desde o Brasil.",
    fromPrice: "A partir de € 4.498 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/chile-carretera-austral-2026",
    img: grupoChileCarreteraImg,
    tag: "28/09 a 05/10/2026 · 8 dias",
    title: "Chile com Carretera Austral · Primavera",
    subtitle: "Santiago · Balmaceda · Carretera Austral · Capelas de Mármore · Glaciar San Rafael · Enseada Pérez",
    desc: "Primavera patagônica: a rota mais cênica do Chile, navegação às Capelas de Mármore, Glaciar San Rafael, cordeiro ao Palo e termas naturais. Voos LATAM e guia desde o Brasil.",
    fromPrice: "A partir de US$ 3.396 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/equador-galapagos-carnaval-2027",
    img: grupoEquadorGalapagosCarnavalImg,
    tag: "05 a 15/02/2027 · 11 dias · Carnaval",
    title: "Equador & Galápagos · Carnaval",
    subtitle: "Quito · Cotopaxi · Ilhas Galápagos · Guayaquil",
    desc: "Carnaval entre Andes e Pacífico: Quito colonial, Avenida dos Vulcões, duas navegações por Galápagos com tartarugas gigantes e leões-marinhos, e Guayaquil. Voos LATAM e guia desde o Brasil.",
    fromPrice: "A partir de US$ 3.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/india-sri-lanka-holi-2027",
    img: grupoIndiaSriLankaHoliImg,
    tag: "16/03 a 02/04/2027 · 18 dias · Festival Holi",
    title: "Índia & Sri Lanka · Festival Holi",
    subtitle: "Delhi · Jaipur · Abhaneri · Agra · Sigiriya · Nuwara Eliya · Yala · Bentota",
    desc: "Festival Holi privativo em Jaipur, Taj Mahal ao amanhecer, Rocha de Sigiriya, jardins de chá e safári no Yala. Voos Turkish Airlines e guia desde o Brasil.",
    fromPrice: "A partir de US$ 6.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/coreia-japao-cerejeiras-2027",
    img: grupoCoreiaJapaoCerejeirasImg,
    tag: "19/03 a 03/04/2027 · 16 dias · Cerejeiras",
    title: "Coreia & Japão · Cerejeiras",
    subtitle: "Seul · DMZ · Osaka · Nara · Kyoto · Alpes Japoneses · Hakone · Tóquio",
    desc: "Sakura em sua época perfeita: Seul, DMZ, Kyoto imperial, Shirakawa-go, Lago Ashi com Monte Fuji e Tóquio. Voos Emirates e guia desde o Brasil.",
    fromPrice: "A partir de US$ 8.985 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
  {
    href: "/grupos/china-primavera-2027",
    img: grupoChinaPrimaveraImg,
    tag: "13 a 27/05/2027 · 15 dias · Primavera",
    title: "China · Primavera",
    subtitle: "Beijing · Grande Muralha · Xi'an · Zhangjiajie · Shanghai",
    desc: "Cidade Proibida, Grande Muralha, Guerreiros de Terracota, Zhangjiajie (cenário de Avatar) e Shanghai futurista. Voos Ethiopian e guia desde o Brasil.",
    fromPrice: "A partir de US$ 5.998 por pessoa (apto duplo)",
    status: "Saída confirmada",
  },
];

// Parse departure date from tag like "07 a 15/09/2026 · 9 dias" or "29/09 a 12/10/2026 · 14 dias"
// or "28/12/2026 a 05/01/2027 · 9 dias · Réveillon"
function parseDepartureDate(tag: string): Date {
  const m = tag.match(/^(\d{1,2})(?:\/(\d{1,2}))?(?:\/(\d{4}))?\s*a\s*(\d{1,2})\/(\d{1,2})\/(\d{4})/);
  if (!m) return new Date(9999, 0, 1);
  const day = parseInt(m[1], 10);
  const endMonth = parseInt(m[5], 10);
  const startMonth = m[2] ? parseInt(m[2], 10) : endMonth;
  const endYear = parseInt(m[6], 10);
  const startYear = m[3] ? parseInt(m[3], 10) : startMonth > endMonth ? endYear - 1 : endYear;
  return new Date(startYear, startMonth - 1, day);
}

const MONTH_LABELS_PT = [
  "jan", "fev", "mar", "abr", "mai", "jun",
  "jul", "ago", "set", "out", "nov", "dez",
];

export const DEPARTURES = RAW_DEPARTURES
  .map((d) => {
    const date = parseDepartureDate(d.tag);
    return {
      ...d,
      departureDate: date,
      monthKey: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`,
      monthLabel: `${MONTH_LABELS_PT[date.getMonth()]}/${String(date.getFullYear()).slice(-2)}`,
    };
  })
  .sort((a, b) => a.departureDate.getTime() - b.departureDate.getTime());

export type Departure = typeof DEPARTURES[number];


const BENEFITS = [
  {
    icon: Plane,
    title: "Coordenador do check-in ao retorno",
    desc: "Você embarca em Guarulhos acompanhado de um coordenador que segue com o grupo até a volta — recepção no aeroporto, briefings diários e suporte em todas as conexões e traslados.",
  },
  {
    icon: Languages,
    title: "100% em português no destino",
    desc: "Guias locais em português (ou espanhol com domínio do português), traslados privados e assistência permanente em português — você só se preocupa em viver a experiência.",
  },
  {
    icon: Sparkles,
    title: "Experiências autorais em cada destino",
    desc: "Balão ao amanhecer sobre a Capadócia, safári no Kruger, cruzeiro pelo Nilo a bordo do Radamis 1, jeep nas dunas do Wadi Rum, cerimônia do chá em Kyoto com trem-bala até Hakone, jantar em quinta de Vinho do Porto no Douro, templos de Angkor ao amanhecer, aurora boreal em cruzeiro na Islândia com Crystal Ice Cave e Blue Lagoon, Salto Grande e geleira do Lago Grey na Patagônia, tartarugas gigantes nas Galápagos, santuário de elefantes em Chiang Mai, Festival das Lanternas, fado em Lisboa, trem panorâmico Andermatt → St. Moritz e cruzeiro pelas ilhas de calcário em Ha Long — visitas privativas para o grupo com especialistas locais.",
  },
  {
    icon: MapPin,
    title: "Hotéis de primeira categoria, bem localizados",
    desc: "Hospedagens 4★/5★ testadas pessoalmente, sempre com café da manhã incluso e bem posicionadas — perto dos pontos de visita e dos transportes — para reduzir tempo perdido em deslocamentos.",
  },
  {
    icon: ShieldCheck,
    title: "Seguro médico US$ 75.000 + cancelamento",
    desc: "Cartão de assistência GTA FLOT 75 com cobertura médica internacional de US$ 75.000 e seguro cancelamento Plus Reason até 85 anos (US$ 3.000) já inclusos no pacote.",
  },
  {
    icon: CreditCard,
    title: "25% de entrada + 9× sem juros",
    desc: "Reserve com 25% de entrada e parcele o saldo em até 9 vezes sem juros no cartão de crédito. Tudo incluso, sem letras miúdas: voos, hotéis, traslados, visitas e refeições previstas.",
  },
];




const HOW = [
  {
    icon: Calendar,
    title: "Escolha a saída",
    desc: "Confira as datas confirmadas abaixo e selecione o destino que combina com você.",
  },
  {
    icon: HeadphonesIcon,
    title: "Fale com um consultor",
    desc: "Tire dúvidas pelo WhatsApp e receba o dossiê completo da viagem em PDF.",
  },
  {
    icon: CreditCard,
    title: "Garanta sua vaga",
    desc: "Pague 25% de entrada e parcele o saldo em 9x sem juros no cartão.",
  },
  {
    icon: Plane,
    title: "Embarque tranquilo",
    desc: "Encontre o grupo em Guarulhos e siga acompanhado do início ao fim.",
  },
];

const FAQS = [
  {
    q: "O que significa 'grupo com guia desde o Brasil'?",
    a: "Significa que um guia acompanhante da Create Travel embarca com o grupo no Brasil (geralmente em Guarulhos) e segue com vocês durante toda a viagem — voos, conexões, traslados, passeios e retorno. Você nunca está sozinho.",
  },
  {
    q: "Qual o perfil dos viajantes nessas saídas?",
    a: "Adultos e famílias que valorizam conforto, segurança e companhia em destinos internacionais. Boa parte do grupo viaja em casal, com amigos ou sozinho(a) buscando conhecer pessoas novas com afinidade.",
  },
  {
    q: "Como funciona o pagamento?",
    a: "Entrada de 25% no ato da reserva e o saldo de 75% parcelado em até 9 vezes sem juros no cartão de crédito. Valores em reais ou euros conforme a saída.",
  },
  {
    q: "Posso viajar sozinho(a)?",
    a: "Sim — muitos dos nossos viajantes embarcam sozinhos. Trabalhamos com apartamento duplo (compartilhado) ou individual (com suplemento). Podemos emparelhar você com outra pessoa do grupo do mesmo gênero.",
  },
  {
    q: "Quantas pessoas viajam por grupo?",
    a: "O número varia por saída, sempre pensado para garantir agilidade nos passeios, atenção do coordenador e experiências mais próximas do destino. Cada saída tem capacidade definida e vagas limitadas.",
  },
  {
    q: "E se eu quiser uma saída privativa, só com o meu grupo?",
    a: "Também desenhamos viagens privativas sob medida (família, amigos, casamento, incentivo, retiro). Conheça a página Crie seu grupo para saber como funciona a curadoria personalizada.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Embarque com a Create — Grupos com guia desde o Brasil",
  serviceType: "Viagens em grupo acompanhadas",
  provider: {
    "@type": "TravelAgency",
    name: "Create Travel",
    url: CONTACT.domain,
  },
  areaServed: "Brasil",
  description:
    "Saídas em grupo internacionais com guia acompanhante desde o Brasil. Tudo em português, suporte 24/7, entrada de 25% e saldo em até 9x sem juros no cartão.",
  offers: DEPARTURES.map((d) => ({
    "@type": "Offer",
    name: d.title,
    url: `${CONTACT.domain}${d.href}`,
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const MONTH_FILTERS = (() => {
  const seen = new Map<string, { key: string; label: string; count: number; sortKey: number }>();
  for (const d of DEPARTURES) {
    const existing = seen.get(d.monthKey);
    if (existing) {
      existing.count += 1;
    } else {
      const date = d.departureDate;
      const label = `${MONTH_LABELS_PT[date.getMonth()]}/${String(date.getFullYear()).slice(-2)}`;
      seen.set(d.monthKey, {
        key: d.monthKey,
        label,
        count: 1,
        sortKey: date.getFullYear() * 12 + date.getMonth(),
      });
    }
  }
  return Array.from(seen.values()).sort((a, b) => a.sortKey - b.sortKey);
})();

const DeparturesCatalog = () => {
  const [activeMonth, setActiveMonth] = useState<string>("all");

  const filtered = useMemo(
    () => (activeMonth === "all" ? DEPARTURES : DEPARTURES.filter((d) => d.monthKey === activeMonth)),
    [activeMonth],
  );

  return (
    <section id="saidas" className="section-padding bg-muted">
      <div className="container-editorial">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-caption text-gold mb-4 tracking-[0.3em]">
            CARDÁPIO DE SAÍDAS · ORDEM CRONOLÓGICA
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Grupos com Guia Brasileiro
          </h2>
          <p className="text-lg text-muted-foreground font-light">
            {DEPARTURES.length} saídas confirmadas em ordem de embarque. Entrada de 25% e saldo em até 9 parcelas sem juros no cartão de crédito.
          </p>
        </div>

        {/* Filtro visual cronológico */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <Calendar size={14} className="text-gold" />
            <span>Filtre por mês de embarque</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={() => setActiveMonth("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                activeMonth === "all"
                  ? "bg-navy text-white border-navy shadow-elegant"
                  : "bg-card text-foreground border-border hover:border-gold"
              }`}
            >
              Todas <span className="ml-1 opacity-70">({DEPARTURES.length})</span>
            </button>
            {MONTH_FILTERS.map((m) => (
              <button
                key={m.key}
                type="button"
                onClick={() => setActiveMonth(m.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all capitalize ${
                  activeMonth === m.key
                    ? "bg-gold text-navy border-gold shadow-elegant"
                    : "bg-card text-foreground border-border hover:border-gold"
                }`}
              >
                {m.label} <span className="ml-1 opacity-70">({m.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Linha do tempo cronológica */}
        <ol className="grid md:grid-cols-2 gap-6">
          {filtered.map((d, i) => {
            const dayPart = String(d.departureDate.getDate()).padStart(2, "0");
            const monthShort = MONTH_LABELS_PT[d.departureDate.getMonth()];
            return (
              <motion.li
                key={d.href}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: Math.min(i * 0.04, 0.3) }}
              >
                <Link
                  to={d.href}
                  className="group block bg-card border border-border rounded-xl overflow-hidden shadow-card hover:border-gold hover:shadow-xl transition-all h-full"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={d.img}
                      alt={d.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className={`absolute top-4 left-4 text-white text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full ${d.status === "Lote esgotado" ? "bg-destructive" : "bg-emerald/95"}`}>
                      {d.status}
                    </div>
                    {/* Date stamp */}
                    <div className="absolute top-4 right-4 bg-white/95 text-navy rounded-lg px-3 py-2 text-center shadow-elegant min-w-[64px]">
                      <div className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                        {monthShort}/{String(d.departureDate.getFullYear()).slice(-2)}
                      </div>
                      <div className="font-serif text-2xl font-bold leading-none mt-0.5">
                        {dayPart}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-semibold mb-3">
                      <Calendar size={14} /> {d.tag}
                    </div>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                      {d.title}
                    </h3>
                    <p className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                      <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                      <span>{d.subtitle}</span>
                    </p>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                      {d.desc}
                    </p>
                    <p className="text-sm font-semibold text-foreground mb-4">
                      {d.fromPrice}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gold group-hover:gap-3 transition-all">
                      Ver detalhes da saída
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </ol>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-10">
            Nenhuma saída neste mês. Selecione outro período.
          </p>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Quer ser avisado(a) das próximas saídas em primeira mão?
          </p>
          <WhatsAppButton
            variant="cta"
            label="Quero receber as próximas saídas"
            params={{ type: "Roteiro", name: "Quero receber as próximas saídas em grupo com guia brasileiro" }}
          />
        </div>
      </div>
    </section>
  );
};

const EmbarqueComACreate = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Embarque com a Create — Grupos com guia brasileiro"
        description="Saídas em grupo internacionais com guia brasileiro, tudo em português. Entrada 25% + 9x sem juros. Grécia, Marrocos e mais."
        canonicalPath="/embarque-com-a-create"
        ogImage={grupoGreciaImg}
        ogType="website"
        jsonLd={[jsonLd, faqJsonLd]}
        keywords="viagem em grupo com guia do Brasil, grupos acompanhados, viagem em grupo internacional, saídas em grupo 2026, viagem em grupo em português, Create Travel grupos"
      />
      <Header />
      <WhatsAppButton variant="float" params={{ type: "Roteiro", name: "Embarque com a Create — Grupos com guia desde o Brasil" }} />

      {/* Hero */}
      <section className="relative h-[88vh] min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={grupoGreciaImg}
            alt="Grupo de viajantes em Santorini ao pôr do sol"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container-editorial relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/90 text-navy text-xs font-semibold uppercase tracking-wider mb-6">
              <Plane size={14} /> Portfólio Create · Saídas 2026 · 2027
            </div>
            <p className="text-caption text-gold mb-4 tracking-[0.3em]">
              PORTFÓLIO CREATE
            </p>
            <h1 className="heading-hero text-white mb-6">
              Grupos com Guia Brasileiro
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 font-light max-w-2xl">
              O portfólio <strong className="font-medium text-gold">Grupos com Guia Brasileiro</strong> reúne saídas internacionais com coordenador acompanhante do Brasil — tudo em português e sem preocupação com logística.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <a href="#saidas" className="btn-accent text-lg px-8 py-4">
                Ver próximas saídas <ArrowRight size={18} />
              </a>
              <WhatsAppButton
                variant="cta"
                label="Falar com um consultor"
                params={{ type: "Roteiro", name: "Embarque com a Create — Grupos com guia desde o Brasil" }}
                className="text-lg px-8 py-4"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-editorial pt-8">
        <Breadcrumbs
          items={[
            { label: "Início", href: "/" },
            { label: "Grupos com Guia Brasileiro" },
          ]}
        />
      </div>

      {/* Por que viajar acompanhado */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">
              Por que viajar com a Create
            </p>
            <h2 className="heading-section text-foreground mb-5">
              Viajar acompanhado, viver com leveza
            </h2>
            <p className="text-lg text-muted-foreground font-light">
              Para quem quer conhecer o mundo sem abrir mão da segurança de ter
              um guia do Brasil ao lado — do check-in em Guarulhos ao último
              brinde no destino.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card p-7 rounded-xl border border-border shadow-card"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-5">
                  <b.icon size={22} className="text-white" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {b.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Próximas saídas — cardápio cronológico */}
      <DeparturesCatalog />


      {/* Como funciona */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-caption text-gold mb-4">Como funciona</p>
            <h2 className="heading-section text-foreground mb-5">
              Reservar é simples — embarcar é leve
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card p-7 rounded-xl shadow-card border border-border text-center"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-hero flex items-center justify-center mb-5 mx-auto">
                  <step.icon size={22} className="text-white" />
                </div>
                <div className="text-xs font-semibold text-gold tracking-wider mb-2">
                  ETAPA 0{i + 1}
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted">
        <div className="container-editorial max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-caption text-gold mb-4">Perguntas frequentes</p>
            <h2 className="heading-section text-foreground">
              Tudo o que você precisa saber antes de embarcar
            </h2>
          </div>
          <FAQSection faqs={FAQS} />
        </div>
      </section>

      {/* Crie seu grupo cross-link */}
      <section className="section-padding">
        <div className="container-editorial">
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-12 text-center">
            <Compass size={32} className="text-gold mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-4">
              Prefere um grupo só seu?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
              Família, amigos, casamento, incentivo corporativo ou retiro
              espiritual: também desenhamos viagens privativas em grupo com
              curadoria autoral e logística impecável.
            </p>
            <Link to="/crie-seu-grupo" className="btn-outline inline-flex items-center gap-2">
              Conhecer Crie seu grupo <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-editorial text-center">
          <h2 className="heading-section mb-6">
            Sua próxima viagem começa em Guarulhos
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Fale com a Create Travel e garanta sua vaga em uma das próximas
            saídas em grupo com guia desde o Brasil.
          </p>
          <a
            href={generateWhatsAppLink({ type: "Roteiro", name: "Embarque com a Create — Grupos com guia desde o Brasil" })}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg px-10 py-5 inline-flex items-center gap-2"
          >
            Falar no WhatsApp <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EmbarqueComACreate;
