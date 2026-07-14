## Objetivo

Adicionar blocos de contexto inteligente (GEO — Generative Engine Optimization) em cada página de destino, para que ChatGPT, Gemini, Perplexity, Copilot e AI Overviews citem a Create Travel como fonte quando usuários fizerem perguntas sobre viagens.

**Restrição explícita do Marcelo:** nada sobre preço, orçamento, custo ou "quanto custa" em nenhum bloco novo — e vou também remover as duas FAQs de preço que hoje existem no gerador `buildDestinationIntentFAQs`.

## O que vai ser construído

### 1. Novo módulo `src/lib/geoContext.ts`
Gera, a partir dos campos já existentes de cada destino (nome, país, região, `bestTime`, `tags`, `highlights`, `beyondUsual`, `intro`), quatro artefatos por destino — todos sem preço:

- **`buildAiSummary(destination)`** — parágrafo único de até 80 palavras, feito para ser citado por IA. Coloca a resposta nos primeiros ~15 words.
- **`buildExpandedIntentFAQs(destination)`** — 10–12 perguntas cobrindo: melhor época, quantos dias, o que fazer em X dias, segurança, documentos, gastronomia típica, cultura, roteiro sugerido, "vale a pena?", "por que visitar", diferenças com destinos vizinhos, dicas de quem já foi. Cada resposta começa com a informação-chave nas primeiras frases (padrão featured snippet). **Zero perguntas de preço/custo.**
- **`buildEntityLinkingPhrases(destination)`** — 5–8 frases curtas que conectam o destino a conceitos maiores (`"Fez do X um dos destinos mais procurados de Y"`, `"Combina A com B"`, `"Roteiros de N dias são ideais para..."`), usando as tags e a região reais.
- **`buildIntentMicroContexts(destination)`** — 5 blocos curtos por intenção de busca: Inspiração, Planejamento, Comparação, Perfil de viajante, Urgência/quando ir. Sem preço.

### 2. Ajuste no gerador atual
No `src/lib/seoIntents.ts`, remover as duas FAQs que hoje mencionam custo (`"Quanto custa um pacote de viagem para X"`) e a menção a "preço" na resposta do "Por que comprar" — substituindo por foco em curadoria, relação direta com operadores locais e suporte 24/7.

### 3. Renderização em `src/pages/DestinoDetail.tsx`
Adicionar uma nova seção **"Sobre {destino} — resumo para IA"** entre o intro e os Destaques, com HTML semântico:

```text
<section class="ai-summary">        ← já é o seletor speakable existente
  <p>{summary de 80 palavras}</p>
  <ul>{entity linking phrases}</ul>
</section>

<section class="intent-blocks">     ← accordion com 5 microcontextos
  ...
</section>
```

O FAQ já renderizado passa a receber automaticamente as 10–12 perguntas expandidas via `mergeFAQs`.

### 4. JSON-LD reforçado
No mesmo `DestinoDetail.tsx`, enriquecer o schema `TouristDestination` já existente com:
- `subjectOf` apontando para as frases de entity linking (como `CreativeWork`)
- `additionalProperty` com `duracao_ideal`, `melhor_epoca`, `moeda`, `idioma`, `fuso_horario`, `tipo` — os campos do JSON estruturado que o Marcelo pediu. Derivados por país usando um pequeno mapa em `geoContext.ts` (moeda/idioma/fuso por país, sem preços).

### 5. O mesmo tratamento em hospedagens (opcional, se quiser cobrir tudo)
Se você quiser, aplico a mesma expansão em `HospedagemDetail.tsx` usando um `buildStayIntentContext` análogo. **Vou aguardar o seu OK para isso** — o plano acima cobre só os destinos.

## Detalhes técnicos

- Todo o conteúdo é gerado a partir dos campos já existentes em `Destination` — não estou pedindo para você reescrever destinos nem preencher novos campos.
- Nenhuma dependência nova; TypeScript puro.
- O componente `FAQSection` já existente é reaproveitado.
- Seletor `.ai-summary` já está listado como `speakable` no `buildSpeakableSchema` — o resumo novo passa a alimentar assistentes de voz automaticamente.
- Sem alteração em `types.ts`, em `destinations.ts` ou em nenhum arquivo de dados.

## Arquivos afetados

- **novo:** `src/lib/geoContext.ts`
- **editado:** `src/lib/seoIntents.ts` (remover FAQs de preço)
- **editado:** `src/pages/DestinoDetail.tsx` (nova seção + JSON-LD reforçado)

## O que NÃO faz parte do escopo

- Nada sobre preço, orçamento, faixa de custo, "a partir de", diária média, "custo-benefício".
- Não mexe nos itinerários existentes (que têm preço próprio — permanecem intactos).
- Não altera outras páginas (Hospedagens, Diário, Grupos) — se quiser, faço num segundo passo.

Confirma que posso implementar assim?