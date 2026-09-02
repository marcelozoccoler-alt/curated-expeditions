/**
 * Trilha sonora clássica por cidade da viagem.
 * Gravações modernas em domínio público / licença livre (Wikimedia Commons:
 * Musopen, United States Marine Band, United States Air Force Band e intérpretes
 * que liberaram suas gravações). Áudio limpo — sem chiado de disco de 78 rotações.
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

/** Arquivo MP3 original hospedado no Wikimedia Commons. */
const wm = (path: string) => `https://upload.wikimedia.org/wikipedia/commons/${path}`;

/** Versão MP3 transcodificada (para arquivos originais em OGG/FLAC), compatível com todos os navegadores. */
const wmMp3 = (path: string) => {
  const nome = path.split("/").pop() as string;
  return `https://upload.wikimedia.org/wikipedia/commons/transcoded/${path}/${nome}.mp3`;
};

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
        interprete: "Gravação em domínio público (Wikimedia Commons)",
        nota: "Para ler a chegada a Budapeste e a primeira travessia do Danúbio.",
        src: wmMp3("2/20/Franz_Liszt_-_Second_Hungarian_Rhapsody.ogg"),
      },
      {
        id: "brahms-danca-1",
        obra: "Dança Húngara nº 1",
        compositor: "Johannes Brahms",
        interprete: "Strolling Strings · United States Air Force Band",
        nota: "O passo apressado das ruas de Pest, entre mercados e cafés.",
        src: wm("2/23/Hungarian_Dance_No._1_-_Strolling_Strings_-_United_States_Air_Force_Band.mp3"),
      },
      {
        id: "brahms-danca-4",
        obra: "Dança Húngara nº 4",
        compositor: "Johannes Brahms",
        interprete: "Strolling Strings · United States Air Force Band",
        nota: "Para a noite húngara: o violino que conduz o jantar.",
        src: wm("6/6a/Hungarian_Dance_No._4_-_Strolling_Strings_-_United_States_Air_Force_Band.mp3"),
      },
      {
        id: "liszt-rapsodia-6",
        obra: "Rapsódia Húngara nº 6",
        compositor: "Franz Liszt",
        interprete: "United States Marine Band",
        nota: "A subida ao Bastião dos Pescadores e a vista sobre o Parlamento.",
        src: wm("f/f3/Hungarian_Rhapsody_No._6_-_United_States_Marine_Band.mp3"),
      },
    ],
  },
  viena: {
    titulo: "Viena em três tempos",
    descricao:
      "A cidade que ensinou o mundo a valsar: Johann Strauss II, o Danúbio e os salões imperiais.",
    faixas: [
      {
        id: "danubio-azul",
        obra: "O Danúbio Azul, op. 314",
        compositor: "Johann Strauss II",
        interprete: "United States Marine Band",
        nota: "Para a chegada a Viena e o primeiro café com vista para a Ringstrasse.",
        src: wm(
          "d/d4/%22An_der_sch%C3%B6nen%2C_blauen_Donau%22_performed_by_the_U.S._Marine_Band.mp3"
        ),
      },
      {
        id: "bosques-viena",
        obra: "Contos dos Bosques de Viena, op. 325",
        compositor: "Johann Strauss II",
        interprete: "Gravação em domínio público (Wikimedia Commons)",
        nota: "Para a tarde em Schönbrunn e os jardins imperiais.",
        src: wmMp3("1/19/Johann_Strauss_-_G%27schichten_aus_dem_Wienerwald%2C_Op.325.ogg"),
      },
      {
        id: "valsa-imperador",
        obra: "Valsa do Imperador, op. 437",
        compositor: "Johann Strauss II",
        interprete: "Gravação em domínio público (Wikimedia Commons)",
        nota: "A noite de concerto — a Viena que se veste para ouvir.",
        src: wmMp3("a/a6/Strauss%2C_Kaiserwalzer.ogg"),
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
        interprete: "Musopen Symphony Orchestra",
        nota: "Do nascimento do rio até a Ponte Carlos ao amanhecer.",
        src: wmMp3("3/39/Smetana%2C_M%C3%A1_vlast_-_Vltava_-_The_Moldau.ogg"),
      },
      {
        id: "danca-eslava",
        obra: "Dança Eslava nº 2, op. 72",
        compositor: "Antonín Dvořák",
        interprete: "Strolling Strings · United States Air Force Band",
        nota: "Para o mercado, a cerveja e as ruas da Cidade Velha.",
        src: wm("9/95/Slavonic_Dance_No._2_-_Strolling_Strings_-_United_States_Air_Force_Band.mp3"),
      },
      {
        id: "humoresque",
        obra: "Humoresque, op. 101 nº 7",
        compositor: "Antonín Dvořák",
        interprete: "Elias Goldstein (viola e piano)",
        nota: "O fim de tarde em Malá Strana, sem pressa.",
        src: wmMp3("7/7b/Dvo%C5%99%C3%A1k_-_Humoresque_Op._101_No._7.ogg"),
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
        obra: "Scheherazade, op. 35 — Largo e maestoso",
        compositor: "Nikolai Rimsky-Korsakov",
        interprete: "Versão para piano solo (domínio público)",
        nota: "Para a travessia do Bósforo e as histórias do palácio.",
        src: wmMp3("5/50/Rimsky-Korsakov_-_Scheherazade_-_1._Largo_e_maestoso_for_Piano_solo.ogg"),
      },
      {
        id: "marcha-turca",
        obra: "Marcha Turca (Rondo alla Turca), K. 331",
        compositor: "Wolfgang Amadeus Mozart",
        interprete: "Bernd Krueger (piano)",
        nota: "A Viena que sonhava com Istambul — o elo entre a primeira e a última cidade.",
        src: wmMp3(
          "b/bf/Mozart_-_Piano_Sonata_No._11_in_A_major_-_III._Allegro_%28Turkish_March%29.ogg"
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
  "Gravações em domínio público e licença livre — Musopen, United States Marine Band, United States Air Force Band (via Wikimedia Commons).";
