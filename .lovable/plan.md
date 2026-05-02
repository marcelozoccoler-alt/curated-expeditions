# Paginação e ordenação em /destinos

Adicionar ordenação (popularidade, melhor época, ordem editorial) e paginação à página de listagem de destinos, sem alterar os filtros atuais (continente, tags, busca).

## O que muda

**Página afetada:** `src/pages/Destinos.tsx` (única página tocada)

### 1. Ordenação

Novo seletor "Ordenar por" ao lado dos contadores de resultados, com 3 opções:

- **Curadoria Create Travel** (padrão) — mantém a ordem editorial atual do arquivo `destinations.ts` (Brasil → América do Sul → África → …)
- **Popularidade** — destinos em destaque (`getFeaturedDestinations`) primeiro, depois os demais na ordem editorial
- **Melhor época para ir** — agrupa por mês inicial mencionado em `bestTime`, priorizando destinos cuja melhor janela inclui o mês atual; os demais seguem em ordem cronológica do calendário

A ordenação é aplicada **depois** dos filtros, então sempre reflete o resultado atual.

### 2. Paginação

- **12 destinos por página** (4 linhas no grid de 3 colunas no desktop)
- Controles na base da grade: botões "Anterior / Próxima" + numeração (com elipses para muitas páginas, ex: `1 … 4 5 [6] 7 8 … 12`)
- Indicador textual: "Mostrando 1–12 de 37"
- Ao trocar página, scroll suave volta ao topo da seção de resultados
- Página atual reseta para 1 sempre que filtros, busca ou ordenação mudam
- Quando há ≤12 resultados, os controles ficam ocultos

### 3. Estado sincronizado com a URL (query string)

Para permitir compartilhar links e voltar/avançar no navegador:

- `?page=2&sort=popularidade&c=brasil&tags=safari,trekking&q=anavilhanas`
- Lê os parâmetros ao montar e mantém em sincronia com `useSearchParams`

## Layout

```text
┌─────────────────────────────────────────────────────────┐
│ 24 destinos encontrados        [Ordenar por: Curadoria▾]│
├─────────────────────────────────────────────────────────┤
│  [card] [card] [card]                                   │
│  [card] [card] [card]                                   │
│  [card] [card] [card]                                   │
│  [card] [card] [card]                                   │
├─────────────────────────────────────────────────────────┤
│ Mostrando 1–12 de 24      ‹ 1 [2] ›                     │
└─────────────────────────────────────────────────────────┘
```

## Detalhes técnicos

- Usar `useSearchParams` do `react-router-dom` (já instalado) para persistir estado na URL
- Ordenação implementada em um `useMemo` separado, encadeado após o `useMemo` de filtros
- Paginação puramente cliente — `slice(start, end)` sobre o array ordenado
- Reaproveitar `Select` de `@/components/ui/select` (shadcn) para o dropdown de ordenação
- Reaproveitar `Pagination` de `@/components/ui/pagination` (shadcn) para os controles
- Para "melhor época": parser simples mapeia abreviações PT (`Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez`) presentes no campo `bestTime` para o número do mês; destinos sem match caem no fim com ordem editorial preservada
- Nenhuma mudança em `destinations.ts`, tipos, ou outras páginas
