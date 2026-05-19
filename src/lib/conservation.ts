import type { BiomeId } from "./biomes";

export type IucnStatus =
  | "Pouco preocupante"
  | "Quase ameaçada"
  | "Vulnerável"
  | "Em perigo"
  | "Criticamente ameaçada"
  | "Extinta na natureza";

export interface EndangeredSpecies {
  id: string;
  commonName: string;
  scientificName: string;
  status: IucnStatus;
  biomes: BiomeId[];
  /** Onde vê-la eticamente */
  whereToSee: string;
  /** Por que importa para o bioma e para a viagem */
  whyItMatters: string;
}

export const ENDANGERED_SPECIES: EndangeredSpecies[] = [
  {
    id: "onca-pintada",
    commonName: "Onça-pintada",
    scientificName: "Panthera onca",
    status: "Quase ameaçada",
    biomes: ["pantanal", "amazonia", "cerrado"],
    whereToSee:
      "Porto Jofre e Transpantaneira (Pantanal Norte), em safáris fluviais conduzidos por guias-naturalistas locais com distância respeitosa.",
    whyItMatters:
      "Predador de topo: sua presença indica florestas e pantanais saudáveis. Ver uma onça em liberdade é o ápice do turismo de fauna nas Américas.",
  },
  {
    id: "ararinha-azul",
    commonName: "Ararinha-azul",
    scientificName: "Cyanopsitta spixii",
    status: "Extinta na natureza",
    biomes: ["caatinga"],
    whereToSee:
      "Refúgio de Vida Silvestre Ararinha-azul, na Bahia — visitas guiadas em parceria com o ICMBio e a ACTP.",
    whyItMatters:
      "Reintroduzida na Caatinga após 22 anos extinta na natureza, virou símbolo mundial de que conservação séria pode reverter a perda.",
  },
  {
    id: "mico-leao-dourado",
    commonName: "Mico-leão-dourado",
    scientificName: "Leontopithecus rosalia",
    status: "Em perigo",
    biomes: ["mata-atlantica"],
    whereToSee:
      "Reserva Biológica Poço das Antas e corredores florestais de Silva Jardim (RJ), com guias da AMLD.",
    whyItMatters:
      "Endêmico da Mata Atlântica fluminense. Sua recuperação inspirou o conceito de corredores ecológicos no Brasil.",
  },
  {
    id: "lobo-guara",
    commonName: "Lobo-guará",
    scientificName: "Chrysocyon brachyurus",
    status: "Quase ameaçada",
    biomes: ["cerrado"],
    whereToSee:
      "Santuário do Caraça (MG), em observação noturna respeitosa nos degraus da igreja — programa de pesquisa há mais de 40 anos.",
    whyItMatters:
      "O maior canídeo da América do Sul. Sintetiza a importância do Cerrado como savana viva e ameaçada.",
  },
  {
    id: "peixe-boi-amazonia",
    commonName: "Peixe-boi-da-Amazônia",
    scientificName: "Trichechus inunguis",
    status: "Vulnerável",
    biomes: ["amazonia"],
    whereToSee:
      "Centros de reabilitação do INPA e Instituto Mamirauá (AM), em visitas educativas — nunca como atração de circo.",
    whyItMatters:
      "Maior mamífero aquático do Brasil, depende de várzeas íntegras. Sua história é a história dos rios e ribeirinhos.",
  },
  {
    id: "tamandua-bandeira",
    commonName: "Tamanduá-bandeira",
    scientificName: "Myrmecophaga tridactyla",
    status: "Vulnerável",
    biomes: ["cerrado", "pantanal"],
    whereToSee:
      "Pantanal Sul (Fazenda Baía das Pedras) e Parque Nacional das Emas (GO), em safáris diurnos com guias-naturalistas.",
    whyItMatters:
      "Mais atropelado que caçado: ver um tamanduá no Cerrado lembra que conservar é também planejar estradas e fogo.",
  },
  {
    id: "tatu-canastra",
    commonName: "Tatu-canastra",
    scientificName: "Priodontes maximus",
    status: "Vulnerável",
    biomes: ["pantanal", "cerrado", "amazonia"],
    whereToSee:
      "Pantanal de Aquidauana e Nhecolândia, em expedições com pesquisadores do ICAS — Projeto Tatu-Canastra.",
    whyItMatters:
      "Engenheiro de paisagem: suas tocas dão abrigo a mais de 80 espécies. Ver um é raro mesmo para quem mora ali.",
  },
  {
    id: "tartaruga-de-pente",
    commonName: "Tartaruga-de-pente",
    scientificName: "Eretmochelys imbricata",
    status: "Criticamente ameaçada",
    biomes: ["costa"],
    whereToSee:
      "Bases do Projeto Tamar em Praia do Forte (BA), Fernando de Noronha (PE) e Pipa (RN), em mergulhos e visitas educativas.",
    whyItMatters:
      "Espécie-bandeira dos recifes do Atlântico Sul. Cada desova protegida é uma vitória de décadas de trabalho comunitário.",
  },
];

export const STATUS_COLOR: Record<IucnStatus, string> = {
  "Pouco preocupante": "#1F8F66",
  "Quase ameaçada": "#B0913A",
  Vulnerável: "#E9A23B",
  "Em perigo": "#C7572B",
  "Criticamente ameaçada": "#A02020",
  "Extinta na natureza": "#4A1F1F",
};

export interface ConservationProject {
  id: string;
  name: string;
  focus: string;
  biomes: BiomeId[];
  description: string;
  /** How the traveler indirectly supports the project by traveling consciously */
  travelerLink: string;
  url: string;
}

export const CONSERVATION_PROJECTS: ConservationProject[] = [
  {
    id: "instituto-onca-pintada",
    name: "Instituto Onça-Pintada (IOP)",
    focus: "Pesquisa e proteção da onça-pintada no Cerrado e Pantanal",
    biomes: ["cerrado", "pantanal"],
    description:
      "Há mais de 20 anos monitora populações de onças, capacita fazendeiros para coexistência e desenvolve protocolos de manejo que viraram referência internacional.",
    travelerLink:
      "Hospedar-se em fazendas-parceiras do Pantanal que adotam manejo coexistente garante renda direta à conservação e reduz retaliação contra a espécie.",
    url: "https://www.jaguar.org.br/",
  },
  {
    id: "projeto-tamar",
    name: "Projeto Tamar",
    focus: "Conservação de tartarugas marinhas no litoral brasileiro",
    biomes: ["costa"],
    description:
      "Fundado em 1980, protege cinco espécies de tartarugas em 25 bases litorâneas. Já liberou mais de 40 milhões de filhotes ao mar com apoio de comunidades pesqueiras.",
    travelerLink:
      "Visitar uma base Tamar (Praia do Forte, Noronha, Pipa) financia diretamente a vigilância de praias e a educação ambiental de jovens locais.",
    url: "https://www.tamar.org.br/",
  },
  {
    id: "instituto-arara-azul",
    name: "Instituto Arara Azul",
    focus: "Proteção da arara-azul-grande no Pantanal e Cerrado",
    biomes: ["pantanal", "cerrado"],
    description:
      "Trouxe a arara-azul-grande da beira da extinção (1990) para mais de 6.500 indivíduos hoje, com manejo de ninhos artificiais e parceria com pecuaristas.",
    travelerLink:
      "Roteiros pelo Pantanal Sul (Buraco das Araras, Aquidauana) financiam a manutenção dos ninhos e a proteção das árvores manduvi, essenciais para a espécie.",
    url: "https://www.institutoararaazul.org.br/",
  },
  {
    id: "amld-mico-leao-dourado",
    name: "AMLD — Associação Mico-Leão-Dourado",
    focus: "Recuperação do mico-leão-dourado e corredores na Mata Atlântica",
    biomes: ["mata-atlantica"],
    description:
      "Trouxe a espécie de menos de 200 indivíduos para mais de 4.800. Pioneira no Brasil em corredores ecológicos sobre rodovias e plantio comunitário de florestas.",
    travelerLink:
      "Roteiros pela Costa Verde fluminense com visita guiada à reserva Poço das Antas convertem o desejo de ver o mico em proteção real do hábitat.",
    url: "https://micoleao.org.br/",
  },
  {
    id: "instituto-mamiraua",
    name: "Instituto Mamirauá",
    focus: "Manejo participativo na várzea amazônica",
    biomes: ["amazonia"],
    description:
      "Unidade de pesquisa do MCTI que combina ciência e comunidades ribeirinhas no maior arquipélago fluvial do mundo. Modelo mundial de uso sustentável.",
    travelerLink:
      "Hospedar-se na Pousada Uacari (gerida pelas comunidades de Mamirauá) é a forma mais direta de financiar pesquisa e renda local na várzea.",
    url: "https://www.mamiraua.org.br/",
  },
  {
    id: "sos-mata-atlantica",
    name: "SOS Mata Atlântica",
    focus: "Restauração e monitoramento da Mata Atlântica",
    biomes: ["mata-atlantica"],
    description:
      "Maior ONG ambiental brasileira voltada à Mata Atlântica. Já plantou mais de 50 milhões de mudas e monitora anualmente o desmatamento por satélite.",
    travelerLink:
      "Roteiros pela Serra do Mar, Bocaina e Costa Verde podem incluir trilhas em áreas de restauração apoiadas pela rede de viveiros parceiros.",
    url: "https://www.sosma.org.br/",
  },
  {
    id: "icas-tatu-canastra",
    name: "ICAS — Projetos Tatu-Canastra e Anta",
    focus: "Pesquisa de fauna silvestre no Cerrado e Pantanal",
    biomes: ["pantanal", "cerrado"],
    description:
      "Pesquisa de longo prazo sobre tatu-canastra, anta-brasileira e tamanduá-bandeira, com forte agenda em redução de atropelamentos e queimadas.",
    travelerLink:
      "Expedições de fauna em Aquidauana e na Nhecolândia podem incluir visitas de campo, com toda a logística contratada de comunidades locais.",
    url: "https://www.icasconservation.org.br/",
  },
  {
    id: "fundacao-boticario",
    name: "Fundação Grupo Boticário",
    focus: "Conservação da natureza em múltiplos biomas",
    biomes: ["mata-atlantica", "cerrado", "amazonia", "caatinga", "pantanal", "pampa"],
    description:
      "Mantém duas das maiores reservas privadas do país (Salto Morato e Serra do Tombador) e financia centenas de iniciativas científicas há mais de 30 anos.",
    travelerLink:
      "Reservas como Salto Morato (PR) podem entrar como dia de caminhada em roteiros pelo litoral do Paraná — visitação responsável apoia a manutenção.",
    url: "https://www.fundacaogrupoboticario.org.br/",
  },
];
