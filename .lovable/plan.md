## Objetivo

Quando o usuário clicar em **Brasil**, ao invés de ver todos os destinos brasileiros de uma vez, ele verá uma navegação em camadas:

```text
Brasil  →  Estados  →  Destinos do estado  →  Roteiro / detalhe do destino
```

Isso reduz a sobrecarga visual da seção Brasil (que hoje tem ~20 destinos listados de uma só vez).

## Como vai funcionar

### 1. Clique em "Brasil"
Nova página `/destinos/brasil` mostrando um **grid de estados** (cards visuais), agrupados por macro-região para facilitar a leitura:

- **Norte**: Amazonas, Pará, Tocantins
- **Nordeste**: Bahia, Ceará, Pernambuco, Piauí, Maranhão
- **Centro-Oeste**: Mato Grosso, Mato Grosso do Sul, Goiás
- **Sudeste**: Rio de Janeiro
- **Sul**: Paraná, Rio Grande do Sul

Cada card de estado mostra: imagem representativa, nome do estado, nº de destinos disponíveis.

### 2. Clique em um estado (ex: "Bahia")
Nova página `/destinos/brasil/:estado` listando apenas os destinos daquele estado:
- Bahia → Chapada Diamantina, Salvador, Boipeba, Maraú
- Amazonas → Anavilhanas, Manaus & Rio Negro
- etc.

### 3. Clique em um destino
Vai para a página de detalhe já existente (`/destinos/:slug`), que já mostra o roteiro, FAQ, CTA de WhatsApp, etc. **Sem alteração** nesta camada.

### Onde entra na navegação

Na página principal `/destinos`, o filtro "Brasil" no topo passa a levar para `/destinos/brasil` (grid de estados) em vez de filtrar a lista direta. Os demais continentes (Europa, Ásia etc.) continuam funcionando como filtro normal — a mudança é exclusiva do Brasil.

## Detalhes técnicos

**Dados**
- Adicionar campo opcional `state` em cada destino brasileiro em `src/lib/destinations.ts` (já temos `region` mas é misto — alguns usam macrorregião "Nordeste", outros estado "Bahia"). Preencher para cada um dos ~20 destinos.
- Criar `src/lib/brazilStates.ts` com a lista de estados (slug, nome, macrorregião, imagem hero, kicker).

**Rotas (em `App.tsx`)**
- `/destinos/brasil` → nova página `BrasilEstados.tsx` (grid de estados agrupado por macrorregião)
- `/destinos/brasil/:estadoSlug` → nova página `BrasilEstado.tsx` (destinos do estado)
- Breadcrumbs: Home › Destinos › Brasil › Bahia › Chapada Diamantina

**Componentes**
- Reaproveitar o estilo de card já usado em `Regiao.tsx` e `DestinationCard.tsx`.
- Header, Footer, SEO, WhatsApp CTA seguem padrão atual.

**Página `/destinos`**
- Pequeno ajuste no filtro de continente: clicando em "Brasil", navegar para `/destinos/brasil` em vez de aplicar filtro inline.

## Fora do escopo

- Não mexer em destinos de outros continentes.
- Não alterar página de detalhe do destino (`DestinoDetail.tsx`).
- Não alterar hospedagens nem páginas de região existentes (Amazônia, Pantanal etc. continuam funcionando como hoje em `/amazonia`, `/pantanal`).
