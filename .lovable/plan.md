## Diagnóstico Semrush (BR) — Concorrentes solicitados

| Concorrente | Keywords BR | Tráfego/mês | Insight |
|---|---|---|---|
| **terramundi.com.br** | 11.599 | 32.530 | Líder. 80% do tráfego vem de blog editorial (cultura, guias de destino) |
| **adventureclub.com.br** | 11.323 | 30.568 | Domina "curiosidades sobre [país]" — Madagascar, Islândia, Escandinávia, Etiópia |
| **venturas.com.br** | 5.052 | 21.862 | Único que monetiza intenção comercial via `/pacote-de-viagem-para-X` |
| **ambiental.tur.br** | 2.140 | 7.886 | Conteúdo de fauna/flora brasileira — Samaúma, Boto, Animais do Cerrado |
| freewayviagens.com.br | sem dados | — | Não rankeia organicamente |
| ciaeco.com.br | sem dados | — | Não rankeia organicamente |
| kangarootours.com.br | sem dados | — | Não rankeia organicamente |
| pisatrekking.com | sem dados | — | Não rankeia organicamente |

**Conclusão crítica:** os 4 que geram leads quentes ganham com **conteúdo editorial longo** (blog) + Venturas adiciona **páginas comerciais** com URL otimizada. Create Travel hoje não tem nenhum dos dois — tem catálogo bonito mas zero captura de busca informacional.

## Gaps de palavra-chave de alto valor (volume mensal Brasil)

**Editorial — não cobertos hoje:**
- madagascar (74.000) · ilha de madagascar (2.400)
- islândia / curiosidades islândia (40.500)
- namíbia / cultura namíbia (14.800)
- escandinávia — o que é, onde fica (12.100)
- etiópia — mitos e curiosidades (12.100)
- cultura africana / heranças africanas (12.100)
- países africanos imperdíveis (8.100)
- machu picchu — onde fica, como chegar (alto)
- aurora boreal canadá / como ver (alto)
- patagônia argentina / chilena
- bali, vietnã, camboja, mongólia (cultura)
- 30 destinos na américa do sul (lista)
- cidades históricas de minas gerais (3.600)

**Comercial (estilo Venturas) — alta intenção de compra:**
- pacote de viagem para chapada dos veadeiros
- pacote de viagem para amazônia
- pacote de viagem para chapada das mesas
- pacote de viagem para alter do chão
- pacote de viagem para patagônia chilena
- pacote de viagem para galápagos
- pacote de viagem para ilhas maldivas

## Plano de execução (3 frentes)

### Frente 1 — Lançar Blog/Diário editorial (`/diario`)
Criar seção de conteúdo longo (1.500-2.500 palavras) com curadoria autoral. Esse é o motor que falta. Modelo de 15 posts iniciais ancorados em keywords de alto volume:

```text
/diario/madagascar-onde-fica-e-curiosidades
/diario/islandia-guia-completo-e-curiosidades
/diario/namibia-cultura-e-vida-selvagem
/diario/escandinavia-paises-e-quando-ir
/diario/etiopia-mitos-e-historia
/diario/cultura-africana-herancas-do-continente
/diario/paises-africanos-imperdiveis
/diario/aurora-boreal-canada-como-ver
/diario/patagonia-argentina-vs-chilena
/diario/machu-picchu-onde-fica-e-como-chegar
/diario/bali-guia-essencial
/diario/cidades-historicas-de-minas-gerais
/diario/30-destinos-america-do-sul
/diario/lugares-mais-frios-do-mundo
/diario/ilhas-do-brasil-imperdiveis
```

Cada post: H1 com keyword exata, intro sensorial Create Travel, 5-8 H2s, FAQ, CTA WhatsApp contextual, JSON-LD `Article`+`BreadcrumbList`, link interno para destino/experiência relacionada do catálogo.

### Frente 2 — Páginas `/pacote-de-viagem-para-X` (estilo Venturas)
Criar rota `/pacote/:slug` com 7 landing pages comerciais focadas em alta intenção:

```text
/pacote/chapada-dos-veadeiros
/pacote/amazonia
/pacote/chapada-das-mesas
/pacote/alter-do-chao
/pacote/patagonia-chilena
/pacote/galapagos
/pacote/ilhas-maldivas
```

Cada landing: título "Pacote de viagem para X — Roteiro autoral Create Travel", 600-900 palavras, hero, "Por que escolher Create Travel", roteiro sugerido (5/7/10 dias), hospedagens recomendadas (link para `/hospedagens/:slug`), melhor época, FAQ, CTA WhatsApp com mensagem pré-formatada incluindo o destino.

### Frente 3 — Landing geo-comercial São Paulo
`/agencia-de-viagens-sao-paulo` (mencionada na auditoria anterior, alta intenção local). Schema `TravelAgency` com `areaServed: São Paulo`, depoimentos, mapa, formulário curto + WhatsApp.

## Arquitetura técnica

- **Roteamento:** adicionar em `src/App.tsx` rotas `/diario`, `/diario/:slug`, `/pacote/:slug`, `/agencia-de-viagens-sao-paulo`.
- **Conteúdo:** `src/lib/diaryPosts.ts` (array tipado com `slug`, `title`, `keywords`, `intro`, `sections`, `faq`, `relatedDestinations`) e `src/lib/comercialPacotes.ts` (array tipado por destino).
- **Componentes:** `src/pages/Diario.tsx` (index), `src/pages/DiarioPost.tsx`, `src/pages/Pacote.tsx`, `src/pages/AgenciaSaoPaulo.tsx`. Reaproveitar `SEO.tsx`, `Breadcrumbs.tsx`, `FAQSection.tsx`.
- **Sitemap:** estender `scripts/generate-sitemap.ts` para emitir todos os slugs novos.
- **Header:** adicionar "Diário" no menu desktop e mobile depois de "Crie seu grupo".
- **Footer:** linkar 4-5 posts mais fortes em nova coluna "Diário".
- **Imagens:** seguir convenção `image_override_url` → `image_ai_prompt` já adotada no projeto.
- **JSON-LD:** `Article` nos posts, `TouristTrip` nos pacotes, `TravelAgency` na landing SP.

## Entrega proposta (uma rodada)

1. Estrutura completa: rotas + tipos + páginas vazias funcionando
2. 5 posts de diário prioritários redigidos com copy Create Travel (Madagascar, Islândia, Patagônia, Aurora boreal Canadá, Cultura africana)
3. 3 pacotes comerciais (Chapada dos Veadeiros, Amazônia, Galápagos)
4. Landing São Paulo
5. Sitemap + header + footer atualizados

Os 10 posts restantes e 4 pacotes restantes ficam para uma rodada seguinte (todos com mesmo template, escala rápida).

## Por que isso gera leads quentes
- **Editorial** captura o viajante 60-90 dias antes da compra, no momento de pesquisa — público que Create Travel hoje não toca.
- **Pacote/X** captura "pronto pra comprar" — Venturas converte exatamente esse volume.
- **Landing SP** captura intenção local + geográfica de altíssima conversão.
- CTAs WhatsApp contextuais por página (já implementados no padrão do projeto) garantem que o lead chegue qualificado, com destino e interesse já no texto.