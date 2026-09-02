/**
 * Trilha sonora clássica por cidade da viagem.
 * Gravações históricas de domínio público (Internet Archive / The Great 78 Project).
 */
export interface Faixa {
  id: string;
  obra: string;
  compositor: string;
  interprete: string;
  ano?: string;
  nota: string;
  src: string;
}

const ia = (item: string, file: string) =>
  `https://archive.org/download/${item}/${encodeURIComponent(file)}`;

export const TRILHAS: Record<string, { titulo: string; descricao: string; faixas: Faixa[] }> = {
  budapeste: {
    titulo: "Budapeste em ré menor",
    descricao:
      "Czardas, rapsódias e o arco cigano que atravessa o Danúbio — o som que Liszt e Brahms ouviram nos cafés da cidade.",
    faixas: [
      {
        id: "liszt-rapsodia-2",
        obra: "Rapsódia Húngara nº 2",
        compositor: "Franz Liszt",
        interprete: "Philadelphia Symphony Orchestra · Leopold Stokowski",
        ano: "1927",
        nota: "Para ler a chegada a Budapeste e a primeira travessia do Danúbio.",
        src: ia(
          "78_hungarian-rhapsody-no-2_philadelphia-symphony-orch-liszt-leopold-stokowski_gbia7012295b",
          "HUNGARIAN RHAPSODY, No. 2 - PHILADELPHIA SYMPHONY ORCH..mp3"
        ),
      },
      {
        id: "brahms-danca-5",
        obra: "Dança Húngara nº 5",
        compositor: "Johannes Brahms",
        interprete: "Lajos Kiss mit seinem Orchester",
        nota: "O compasso das noites nos ruin bars e nos mercados.",
        src: ia(
          "78_ungarischer-tanz-nr-5-hungarian-dance-no-5-danza-hngara-no-5_lajos-kiss-mit-seinem-_gbia7039444b",
          "Ungarischer Tanz Nr. 5 ( - Lajos Kiss mit seinem Orchester.mp3"
        ),
      },
      {
        id: "brahms-danca-7",
        obra: "Dança Húngara nº 7",
        compositor: "Johannes Brahms",
        interprete: "Mischa Elman · Percy B. Kahn",
        ano: "1916",
        nota: "Violino solo para as termas e o fim de tarde no Bastião dos Pescadores.",
        src: ia(
          "78_hungarian-dance-no-7_mischa-elman-percy-b-kahn-brahms-joachim_gbia0197706a",
          "Hungarian Dance No. 7 - Mischa Elman - Percy B. Kahn.mp3"
        ),
      },
    ],
  },
  viena: {
    titulo: "Viena em três tempos",
    descricao:
      "A cidade que inventou a valsa como forma de respirar: Strauss em gravações de salão, como se tocassem na sala ao lado.",
    faixas: [
      {
        id: "danubio-azul",
        obra: "O Danúbio Azul, op. 314",
        compositor: "Johann Strauss II",
        interprete: "Gravação histórica de orquestra vienense",
        nota: "Para a entrada em Viena e o café da manhã dentro de um palácio.",
        src: ia("78_blue-danube_johann-strauss_gbia0499084a", "BLUE DANUBE - Johann Strauss.mp3"),
      },
      {
        id: "bosque-de-viena",
        obra: "Contos dos Bosques de Viena, op. 325",
        compositor: "Johann Strauss II",
        interprete: "Concert Orchestra",
        nota: "Trilha das caminhadas pelo Ring e pelos jardins imperiais.",
        src: ia(
          "78_tales-from-the-vienna-woods_concert-orchestra-johann-strauss_gbia0118324b",
          "Tales From The Vienna Woods - Concert Orchestra.mp3"
        ),
      },
      {
        id: "valsa-imperador",
        obra: "Valsa do Imperador, op. 437",
        compositor: "Johann Strauss II",
        interprete: "Levitch Brothers Salon Orchestra",
        nota: "Para os salões de Schönbrunn e a noite de concerto.",
        src: ia(
          "78_emperor-waltz-kaiser-waltzer_levitch-brothers-salon-orchestra-johann-strauss_gbia0432326b",
          "EMPEROR WALTZ (Kaiser Waltzer) - LEVITCH BROTHERS.mp3"
        ),
      },
    ],
  },
  praga: {
    titulo: "Praga e o rio que canta",
    descricao:
      "Smetana e Dvořák: a alma tcheca escrita em água corrente, do nascimento do Moldava às danças do interior da Boêmia.",
    faixas: [
      {
        id: "vltava",
        obra: "Vltava (O Moldava), de Má Vlast",
        compositor: "Bedřich Smetana",
        interprete: "Bamberger Symphoniker · Joseph Keilberth",
        nota: "Do nascimento do rio até a Ponte Carlos ao amanhecer.",
        src: ia(
          "78_1-teil-die-quelle-der-moldau-waldjagd-bauerobechzeit_bamberger-symphoniker-fr_gbia7004034a",
          "1. Teil: Die Quelle der Moldau - W - Bamberger Symphoniker.mp3"
        ),
      },
      {
        id: "danca-eslava",
        obra: "Dança Eslava nº 1 em dó maior",
        compositor: "Antonín Dvořák",
        interprete: "Orquestra Filarmônica Tcheca · Václav Talich",
        ano: "1936",
        nota: "Para o mercado, a cerveja e as ruas da Cidade Velha.",
        src: ia(
          "78_slavonic-dance-no-1-in-c-major-c-dur_czech-philharmonic-orchestra-dvork-vaclav_gbia7002493a",
          "SLAVONIC DANCE NO. 1 IN C M - CZECH PHILHARMONIC ORCHESTRA.mp3"
        ),
      },
      {
        id: "humoresque",
        obra: "Humoresque, op. 101 nº 7",
        compositor: "Antonín Dvořák",
        interprete: "Hugo Kortschak",
        ano: "1923",
        nota: "O fim de tarde em Malá Strana, sem pressa.",
        src: ia(
          "78_humoresque_hugo-kortschak-dvorak_gbia0106060a",
          "Humoresque - Hugo Kortschak - Dvorak.mp3"
        ),
      },
    ],
  },
  istambul: {
    titulo: "Istambul entre dois mundos",
    descricao:
      "O Oriente ouvido pela Europa: Rimsky-Korsakov e Mozart, quando o Bósforo era o limite da imaginação ocidental.",
    faixas: [
      {
        id: "scheherazade",
        obra: "Scheherazade, op. 35",
        compositor: "Nikolai Rimsky-Korsakov",
        interprete: "Leopold Stokowski · Philadelphia Orchestra",
        nota: "Para a travessia do Bósforo e as histórias do palácio.",
        src: ia(
          "78_scheherazade-op-35_leopold-stokowski-and-the-philadelphia-orchestra-rimsky-korsak_gbia7028269b",
          "SCHEHERAZADE, OP. 35 - LEOPOLD STOKOWSKI and the PHILADELPHIA ORCHESTRA.mp3"
        ),
      },
      {
        id: "marcha-turca",
        obra: "Marcha Turca (Rondo alla Turca)",
        compositor: "Wolfgang Amadeus Mozart",
        interprete: "Wanda Landowska",
        ano: "1923",
        nota: "A Viena que sonhava com Istambul — o elo entre a primeira e a última cidade.",
        src: ia(
          "78_turkish-march_wanda-landowska-mozart_gbia0094877b",
          "Turkish March - Wanda Landowska - Mozart.mp3"
        ),
      },
      {
        id: "song-of-india",
        obra: "Canção da Índia (de Sadko)",
        compositor: "Nikolai Rimsky-Korsakov",
        interprete: "Pauline Alpert",
        nota: "Para o Grande Bazar e o mercado de especiarias.",
        src: ia(
          "78_song-of-india-scheherazade_pauline-alpert-rimsky-korsakoff_gbia0218733a",
          "SONG OF INDIA (SCHEHERAZADE) - PAULINE ALPERT.mp3"
        ),
      },
    ],
  },
};

export const getTrilha = (cidadeSlug?: string) =>
  cidadeSlug ? TRILHAS[cidadeSlug] : undefined;

/** Playlist completa da viagem, na ordem das cidades. */
export const TRILHA_VIAGEM: Faixa[] = [
  ...TRILHAS.budapeste.faixas,
  ...TRILHAS.viena.faixas,
  ...TRILHAS.praga.faixas,
  ...TRILHAS.istambul.faixas,
];

export const CREDITO_TRILHA =
  "Gravações históricas em domínio público — Internet Archive / The Great 78 Project.";
