## Nova página: "Brasil Vivo — Biomas & Conservação"

Uma página editorial dedicada aos biomas brasileiros, projetos de conservação idôneos, espécies ameaçadas e à filosofia da Create Travel de viajar com autenticidade e preservar. Pensada para SEO (buscas como "turismo de conservação Brasil", "viagem sustentável Pantanal", "projetos de proteção onça-pintada") e para atrair viajeros conscientes que conectem com nossa marca.

### Rota
- `/brasil-vivo` (PT, principal)
- Link no header (entre "Destinos" e "Experiências") e no footer

### Estrutura da página

**1. Hero editorial**
- H1: "Brasil Vivo — viajar é também preservar"
- Subtítulo curto sobre a filosofia: experiência autêntica + impacto positivo
- Imagem ampla (Pantanal/Amazônia) com overlay sutil

**2. Nossa filosofia (Manifesto)**
- 3-4 parágrafos curtos, tom editorial
- Pilares visuais (ícones + título + frase):
  - Autenticidade — pessoas, cultura, território
  - Baixo impacto — grupos pequenos, operadores locais
  - Conservação ativa — parte do investimento apoia projetos
  - Conhecimento — guias-naturalistas e cientistas em campo

**3. Os 6 biomas do Brasil**
Reaproveita os dados de `src/lib/biomes.ts` (já temos fauna, flora, "wow"). Apresenta em formato de cards editoriais grandes (um por bioma): imagem, nome, descrição, fauna icônica, flora, beleza cênica. Cada card linka para destinos relacionados do bioma (via `INCOMING_DESTINATIONS`).

**4. Espécies ameaçadas que protegemos vendo**
Grid de 6-8 espécies icônicas com:
- Nome + nome científico
- Status IUCN (Vulnerável / Em perigo / Criticamente ameaçada)
- Bioma e onde vê-las eticamente
- Por que importam

Espécies: Onça-pintada, Ararinha-azul, Mico-leão-dourado, Lobo-guará, Peixe-boi-da-Amazônia, Tamanduá-bandeira, Tatu-canastra, Tartaruga-de-pente.

**5. Projetos de conservação parceiros / idôneos**
Cards com nome real, foco, bioma, link oficial. Apenas instituições reconhecidas:
- **Instituto Onça-Pintada** (Cerrado/Pantanal)
- **Projeto Tamar** (costa)
- **Instituto Arara Azul** (Pantanal)
- **AMLD — Mico-leão-dourado** (Mata Atlântica)
- **Instituto Mamirauá** (Amazônia)
- **SOS Mata Atlântica**
- **ICAS — Instituto de Conservação de Animais Silvestres** (Tatu-canastra, Pantanal)
- **Fundação Grupo Boticário** (multi-bioma)

Cada card descreve em 2-3 linhas o que fazem e como o viajante apoia ao viajar com curadoria responsável. Link "Saber mais" abre site oficial.

**6. Como sua viagem preserva (CTA)**
Bloco final mostrando concretamente o ciclo: você viaja → contrata operadores locais → eles geram renda comunitária → comunidades protegem o território.
CTA: "Criar roteiro sob medida" (WhatsApp contextual com `type: "Geral"` + mensagem mencionando interesse em turismo de conservação).

**7. FAQ SEO**
4-6 perguntas com Schema.org FAQPage para captação em busca:
- "O que é turismo de conservação?"
- "Quais biomas brasileiros posso visitar?"
- "Como saber se uma viagem é realmente sustentável?"
- "Posso ver onça-pintada eticamente?"
- "Que projetos de preservação a Create Travel apoia?"

### Detalhes técnicos

- Nova página `src/pages/BrasilVivo.tsx`
- Novo arquivo de dados `src/lib/conservation.ts` com: `ENDANGERED_SPECIES[]` e `CONSERVATION_PROJECTS[]` (apenas dados públicos verificáveis; links para sites oficiais com `rel="noopener noreferrer"`)
- Rota em `src/App.tsx`: `/brasil-vivo` antes do catch-all
- Link no `Header.tsx` (desktop + mobile) e `Footer.tsx`
- SEO: title/description otimizados, JSON-LD (`WebPage` + `FAQPage`), entrada no `sitemap.xml`
- Reusa `BIOMES` de `src/lib/biomes.ts` (já tem fauna/flora/wow multilíngue)
- Imagens: 2-3 hero/section novas geradas (paisagens) + reuso de imagens existentes de destinos
- WhatsApp: usa `generateWhatsAppLink` com mensagem contextual ("Quero um roteiro que apoie a conservação")
- Sem mudanças de backend

### Fora de escopo
- Versões i18n da página (só PT nesta primeira entrega; estrutura já preparada para expandir depois)
- Sistema de doação direta / pagamento a projetos
- Blog/conteúdo recorrente
