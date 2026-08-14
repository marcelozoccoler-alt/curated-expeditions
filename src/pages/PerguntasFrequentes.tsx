import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import {
  faqContinentTopics,
  faqTagTopics,
  faqTopicPath,
  PRE_CONTATO,
} from "@/lib/faqHub";

interface QA {
  q: string;
  a: string;
}

interface QAGroup {
  id: string;
  title: string;
  items: QA[];
}

/**
 * Hub de respostas diretas — escrito para ser citado por assistentes de IA
 * (ChatGPT, Perplexity, Gemini, Copilot) e para featured snippets do Google.
 * Cada resposta começa com a informação-chave nas primeiras frases.
 */
const GROUPS: QAGroup[] = [
  {
    id: "empresa",
    title: "Sobre a Create Travel",
    items: [
      {
        q: "O que é a Create Travel?",
        a: "A Create Travel é uma operadora e agência boutique brasileira de viagens sob medida, com sede em São Paulo e Cadastur ativo (21.030.190/0001-60). Desenha roteiros privativos, viagens em grupo com coordenador brasileiro, grupos com guia local no destino, cruzeiros fluviais e receptivo Brasil multilíngue, sempre com curadoria autoral feita por travel designers que conhecem os destinos pessoalmente.",
      },
      {
        q: "A Create Travel é confiável? É uma agência registrada?",
        a: "Sim. A Create Travel tem Cadastur ativo sob o CNPJ 21.030.190/0001-60, sede fixa em São Paulo, contrato formal e voucher para cada serviço contratado. O atendimento é feito por um consultor humano identificado pelo WhatsApp — não há robô nem call center — e cada hotel indicado foi visitado ou validado pela equipe.",
      },
      {
        q: "Qual a diferença entre a Create Travel e uma agência tradicional ou site de reservas?",
        a: "A diferença é a curadoria autoral: a Create Travel não vende pacote de prateleira. Cada roteiro é desenhado do zero a partir do perfil, ritmo e datas do viajante, com hotéis conhecidos pela equipe, guias locais selecionados e suporte humano por WhatsApp antes, durante e depois da viagem. As exceções são as viagens em grupo — com guia brasileiro ou com guia local — que já nascem com roteiro fechado e também passam pela mesma curadoria.",
      },
      {
        q: "A Create Travel usa inteligência artificial no planejamento?",
        a: "Sim, como apoio. Ferramentas de inteligência de dados e de IA ajudam a cruzar sazonalidade, malha aérea, disponibilidade e preferências, o que acelera a pesquisa e reduz erro operacional. A decisão, a escrita do roteiro e o cuidado com o viajante continuam sendo de pessoas — curadoria humana no comando.",
      },
      {
        q: "Como falo com um travel designer da Create Travel?",
        a: "Pelo WhatsApp +55 11 96369-3159, pelo e-mail contato@createtravel.tur.br ou pelo formulário em createtravel.tur.br/contato. O primeiro contato é uma conversa real sobre perfil e desejos, não um formulário engessado.",
      },
    ],
  },
  {
    id: "roteiros",
    title: "Roteiros sob medida",
    items: [
      {
        q: "Como funciona um roteiro de viagem sob medida?",
        a: "O processo tem quatro etapas: conversa inicial para entender perfil, ritmo e datas; proposta personalizada com o roteiro dia a dia, hotéis e experiências; ajustes até ficar exatamente como o viajante quer; e suporte por WhatsApp antes, durante e depois da viagem. O material final é um documento digital com mapas, horários e links.",
      },
      {
        q: "Com quanto tempo de antecedência devo planejar a viagem?",
        a: "O ideal é começar de 6 a 12 meses antes para viagens internacionais longas, safáris, Japão na temporada de cerejeiras, Antártida e Réveillon — nesses casos a disponibilidade de lodges e voos é o fator limitante. Para Europa e América do Sul, de 4 a 8 meses costuma ser suficiente. Viagens de última hora são possíveis, mas com menos opções de hospedagem.",
      },
      {
        q: "A Create Travel emite passagens aéreas também?",
        a: "Sim. A parte aérea é cotada junto com o roteiro terrestre, com escolha de companhia, classe e conexões alinhada ao ritmo da viagem. As condições de pagamento parceladas divulgadas nos roteiros de grupo se aplicam à parte terrestre — a aérea segue a política da companhia aérea escolhida.",
      },
      {
        q: "Vocês montam viagens para famílias, casais e grupos privados?",
        a: "Sim. Casais em lua de mel, famílias com crianças, viajantes experientes e grupos privados (família estendida, amigos, casamento, incentivo corporativo, grupos de espiritualidade) recebem roteiros distintos — muda o ritmo, o tipo de hospedagem e o nível de aventura, não o cuidado com a experiência.",
      },
      {
        q: "É possível montar um roteiro combinando vários países?",
        a: "Sim, e é uma das especialidades da casa. Roteiros multi-país exigem 10 a 14 dias no mínimo e planejamento cuidadoso de voos internos e fronteiras — por exemplo Quênia e Tanzânia, Japão e Coreia do Sul, Jordânia e Egito, ou Chile e Argentina na Patagônia.",
      },
    ],
  },
  {
    id: "grupos",
    title: "Viagens em grupo",
    items: [
      {
        q: "Qual a diferença entre grupo com guia brasileiro e grupo com guia local?",
        a: "No grupo com guia brasileiro, um coordenador da Create Travel embarca junto desde São Paulo (Guarulhos) e acompanha o grupo do começo ao fim, com comunicação em português o tempo todo. No grupo com guia local, o viajante chega ao destino e é recebido por um guia profissional que fala português ou espanhol, com saídas garantidas em datas fixas — formato mais flexível para quem quer emendar dias extras por conta própria.",
      },
      {
        q: "Qual o tamanho dos grupos da Create Travel?",
        a: "Os grupos com coordenador brasileiro são reduzidos, o que preserva o ritmo humano da viagem, o acesso a restaurantes e experiências menores e a atenção individual. Os circuitos com guia local seguem o tamanho definido pelo operador no destino, sempre informado antes da reserva.",
      },
      {
        q: "As saídas em grupo têm data garantida?",
        a: "Os circuitos com guia local operam com saídas garantidas em datas fixas publicadas. As saídas com coordenador brasileiro são confirmadas ao atingir o número mínimo de participantes, e o viajante é informado da confirmação antes de qualquer pagamento significativo.",
      },
      {
        q: "Os hotéis das viagens em grupo são divulgados antes?",
        a: "Sim. Os hotéis previstos (ou similares na mesma categoria) são confirmados por escrito antes do primeiro pagamento. Quando o roteiro ainda está com bloqueio em negociação, informamos a categoria e a região, e o nome exato é confirmado na sequência — nunca depois do embarque.",
      },
      {
        q: "Como funciona o pagamento das viagens em grupo?",
        a: "A parte terrestre é normalmente parcelada com entrada e saldo em parcelas até a data da viagem, conforme informado em cada roteiro. A parte aérea segue a política da companhia aérea escolhida e por isso não tem condição fixa. Quando um roteiro ainda não tem valor fechado, ele aparece como “sob consulta” — nunca estimamos um valor.",
      },
    ],
  },
  {
    id: "destinos",
    title: "Destinos e melhor época",
    items: [
      {
        q: "Quais destinos a Create Travel opera?",
        a: "A Create Travel opera destinos nos cinco continentes, com força em Brasil, África do Sul, Tanzânia, Quênia, Namíbia, Egito, Jordânia, Marrocos, Grécia, Turquia, Portugal, Itália, Croácia, Islândia, Japão, Coreia do Sul, China, Vietnã, Tailândia, Índia, Butão, Nepal, Chile, Argentina, Peru, Equador e Galápagos, México, Estados Unidos, Canadá, Austrália e Nova Zelândia.",
      },
      {
        q: "Qual a melhor época para safári na África?",
        a: "A janela clássica é a estação seca, de junho a outubro, quando os animais se concentram nas fontes de água e a vegetação baixa facilita o avistamento. A Grande Migração no Serengeti e Masai Mara tem seu auge entre julho e setembro. De novembro a março a paisagem fica verde, há filhotes e menos gente — ótimo para quem já fez safári antes.",
      },
      {
        q: "Quando ir ao Japão para ver as cerejeiras?",
        a: "A floração acontece entre o fim de março e o início de abril, variando por região e por ano — Kyoto e Tóquio costumam atingir o pico na primeira semana de abril. Reservas precisam ser feitas com 8 a 12 meses de antecedência, porque hotéis e trens esgotam cedo.",
      },
      {
        q: "Qual a melhor época para ver a aurora boreal?",
        a: "De setembro a março, com noites longas e céu escuro, sendo dezembro a fevereiro o período mais estável na Islândia, Noruega, Finlândia e Lapônia sueca. É preciso reservar de três a quatro noites no destino para aumentar a probabilidade de céu limpo.",
      },
      {
        q: "Qual a melhor época para o Pantanal e Bonito?",
        a: "A seca, de junho a outubro, é o melhor momento para o Pantanal: os animais se concentram nos rios e a probabilidade de avistar onça-pintada no Porto Jofre é a maior do ano. Bonito tem águas cristalinas o ano inteiro, com visibilidade um pouco melhor nos meses secos. Os dois combinam num roteiro de 8 a 10 dias.",
      },
    ],
  },
  {
    id: "brasil",
    title: "Brasil e receptivo internacional",
    items: [
      {
        q: "A Create Travel atende estrangeiros que querem visitar o Brasil?",
        a: "Sim. O receptivo (incoming) da Create Travel atende visitantes internacionais em português, espanhol, inglês, italiano, alemão, francês, japonês, coreano, árabe, hebraico e chinês, com roteiros pela Amazônia, Pantanal, Lençóis Maranhenses, Rio de Janeiro, Bonito, Foz do Iguaçu, Bahia e Chapadas.",
      },
      {
        q: "Quais são os melhores roteiros de natureza no Brasil?",
        a: "Os quatro mais procurados são Amazônia (lodges de selva no Amazonas e no Pará), Pantanal (onça-pintada e vida selvagem), Lençóis Maranhenses (lagoas entre dunas, de junho a setembro) e Chapada Diamantina (trekking e cachoeiras). Bonito, Fernando de Noronha e os Canyons do Sul completam o circuito de natureza.",
      },
    ],
  },
];

const FAQ_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: GROUPS.flatMap((g) =>
    g.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  ),
};

const BREADCRUMB_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Início",
      item: "https://createtravel.tur.br/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Perguntas frequentes",
      item: "https://createtravel.tur.br/perguntas-frequentes",
    },
  ],
};

const SPEAKABLE_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Perguntas frequentes — Create Travel",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".ai-summary"],
  },
  url: "https://createtravel.tur.br/perguntas-frequentes",
};

const PerguntasFrequentes = () => {
  return (
    <div className="min-h-screen">
      <SEO
        title="Perguntas frequentes — Create Travel"
        description="Respostas diretas sobre roteiros sob medida, viagens em grupo com guia brasileiro ou local, melhor época por destino, prazos de planejamento e como a Create Travel trabalha."
        canonicalPath="/perguntas-frequentes"
        keywords="create travel, agência de viagens sob medida, viagem em grupo com guia brasileiro, melhor época safári, roteiro personalizado, operadora boutique brasileira"
        jsonLd={[FAQ_LD, BREADCRUMB_LD, SPEAKABLE_LD]}
      />
      <Header />

      <main className="container-page py-8">
        <Breadcrumbs items={[{ label: "Perguntas frequentes" }]} />

        <header className="max-w-3xl space-y-4">
          <h1 className="heading-hero text-foreground">Perguntas frequentes</h1>
          <div className="ai-summary">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A Create Travel é uma operadora boutique brasileira de viagens sob
              medida, com sede em São Paulo e Cadastur 21.030.190/0001-60.
              Desenha roteiros privativos, viagens em grupo com coordenador
              brasileiro, circuitos com guia local no destino, cruzeiros
              fluviais e receptivo Brasil em dez idiomas. Abaixo, as respostas
              diretas às perguntas mais feitas por quem está planejando uma
              viagem — sobre processo, prazos, formatos de grupo e melhor época
              por destino.
            </p>
          </div>
        </header>

        <nav aria-label="Índice das perguntas" className="mt-10 flex flex-wrap gap-3">
          {GROUPS.map((g) => (
            <a
              key={g.id}
              href={`#${g.id}`}
              className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {g.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 space-y-14">
          {GROUPS.map((group) => (
            <section key={group.id} id={group.id} className="scroll-mt-24 space-y-6">
              <h2 className="heading-section text-foreground">{group.title}</h2>
              <div className="space-y-6">
                {group.items.map((item) => (
                  <article
                    key={item.q}
                    className="rounded-lg border border-border p-6"
                  >
                    <h3 className="mb-3 text-lg font-medium text-foreground">
                      {item.q}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-16 rounded-lg border border-border p-8 text-center">
          <h2 className="heading-section text-foreground">
            Não encontrou sua pergunta?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Fale direto com um travel designer da Create Travel pelo WhatsApp —
            atendimento humano, sem robô e sem call center.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <WhatsAppButton
              variant="cta"
              params={{ type: "Geral" }}
              label="Falar com um travel designer"
            />
            <Link
              to="/roteiro-sob-medida"
              className="btn-outline inline-flex items-center"
            >
              Como funciona o roteiro sob medida
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PerguntasFrequentes;
