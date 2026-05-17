# Plano: Site Multilíngue (PT/EN/ES/IT/DE)

Foco: capturar estrangeiros buscando Brasil no Google/IA e levá-los até o pedido de orçamento via WhatsApp no próprio idioma.

## 1. Estrutura de rotas (URLs com idioma no path)

```
/                          → Português (padrão, mantém tudo como está)
/en  /en/destinos/...      → Inglês
/es  /es/destinos/...      → Espanhol
/it  /it/destinos/...      → Italiano
/de  /de/destinos/...      → Alemão
/en/incoming               → Landing especial "Discover Brazil with Create Travel"
/es/incoming               (e equivalentes em cada idioma)
/it/incoming
/de/incoming
```

URLs com idioma no path é o que Google entende melhor para indexar e ranquear regionalmente (melhor que subdomínio ou querystring).

## 2. Stack de tradução

- `react-i18next` + `i18next-browser-languagedetector` para textos de UI (Header, Footer, Home, Sobre, botões, labels).
- 5 arquivos JSON: `src/i18n/locales/{pt,en,es,it,de}.json` com todas as strings da UI.
- Hook `useI18nNavigate()` para prefixar links com o idioma atual.
- Seletor de idioma no Header (bandeiras/códigos PT · EN · ES · IT · DE).

## 3. Tradução do conteúdo (destinos e hospedagens)

Os 87 destinos e 13 hospedagens recebem campos multilíngues:

```ts
translations: {
  en: { name, shortDescription, longDescription, keywords[] },
  es: { ... }, it: { ... }, de: { ... }
}
```

Gerarei tudo via script Lovable AI (Gemini 3 Flash) em batch, em uma única passada por destino pedindo os 4 idiomas + keywords SEO locais (ex: "Pantanal safari tours", "viaggio in Amazzonia", "Reise nach Bahia", "viaje a Iguazú"). Saída gravada em `src/lib/translations/destinations.ts` e `stays.ts`. PT permanece como está.

Estimativa: ~100 chamadas IA, alguns minutos de execução.

## 4. Página "Incoming" (uma por idioma)

Landing dedicada para o estrangeiro que pesquisou "Brazil travel agency", "tour operator Brazil", "viaggi su misura Brasile", etc.

Conteúdo (gerado pela IA em cada idioma, tom editorial):
- Introdução autoral: por que escolher a Create Travel para descobrir o Brasil (curadoria, autenticidade, ritmo, sem turistão).
- Grid dos principais destinos brasileiros (Amazônia, Pantanal, Chapada, Lençóis, Iguaçu, Bahia, Rio, etc.) com cards traduzidos.
- Seção "How we work" / "Cómo trabajamos" / "Come lavoriamo" / "So arbeiten wir".
- CTA WhatsApp com mensagem pré-formatada NO IDIOMA do visitante:
  - EN: "Hi Create Travel, I'd like a custom Brazil trip quote…"
  - ES: "Hola Create Travel, me gustaría un presupuesto…"
  - IT: "Ciao Create Travel, vorrei un preventivo…"
  - DE: "Hallo Create Travel, ich hätte gerne ein Angebot…"

## 5. SEO técnico (essencial para ser achado)

Para cada rota traduzida, via `react-helmet-async`:
- `<title>` e `<meta name="description">` no idioma da página com keywords nativas.
- `<meta name="keywords">` com termos de busca locais por destino.
- `<html lang="...">` dinâmico.
- **Tags `hreflang`** ligando as 5 versões da mesma página (crítico para Google entender que são variantes do mesmo conteúdo):
  ```html
  <link rel="alternate" hreflang="pt-BR" href="…/destinos/amazonia" />
  <link rel="alternate" hreflang="en"    href="…/en/destinations/amazon" />
  <link rel="alternate" hreflang="es"    href="…/es/destinos/amazonia" />
  <link rel="alternate" hreflang="it"    href="…/it/destinazioni/amazzonia" />
  <link rel="alternate" hreflang="de"    href="…/de/reiseziele/amazonas" />
  <link rel="alternate" hreflang="x-default" href="…/destinos/amazonia" />
  ```
- JSON-LD `TravelAgency` + `TouristDestination` em cada idioma.
- `sitemap.xml` regenerado com todas as 5 versões e atributos `xhtml:link` hreflang.
- `robots.txt` permitindo tudo.

## 6. WhatsApp contextual multilíngue

Atualizar o helper de WhatsApp para gerar a mensagem no idioma ativo, mantendo o contexto da página (destino/hospedagem/quiz) já existente.

## 7. Entregáveis

```
src/i18n/
  config.ts
  locales/{pt,en,es,it,de}.json
src/lib/translations/
  destinations.ts        ← gerado por IA
  stays.ts               ← gerado por IA
src/pages/
  Incoming.tsx           ← landing /en /es /it /de
  + ajustes em Index, Sobre, Destinos, DestinoDetail, Hospedagens, HospedagemDetail, Header, Footer
src/components/
  LanguageSwitcher.tsx
  HreflangTags.tsx
public/sitemap.xml       ← regenerado
```

## 8. Ordem de execução

1. Instalar i18n, montar config e estrutura de rotas com prefixo de idioma.
2. Language switcher no Header + persistência da escolha.
3. Traduzir UI (Header/Footer/Home/Sobre/listagens) nos 5 idiomas.
4. Rodar script IA para traduzir os 87 destinos + 13 hospedagens.
5. Criar página Incoming nos 4 idiomas com intro autoral.
6. Helmet + hreflang + JSON-LD + sitemap.
7. WhatsApp multilíngue.
8. QA: navegar em cada idioma, conferir links, hreflang e mensagens.

## Notas técnicas

- O site é SPA, então o crawler do Google (que executa JS) lê o conteúdo traduzido normalmente. LinkedIn/Slack/Facebook só veem o `index.html` estático — para previews sociais perfeitos por idioma precisaria SSR, que está fora deste escopo.
- PT continua como idioma padrão (`/`), sem quebrar URLs/SEO existentes.
- Nenhum texto antigo em português é apagado — apenas adicionados os campos `translations`.