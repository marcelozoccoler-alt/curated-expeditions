## Novo grupo: Tailândia com Festival das Lanternas — Saída 12/11/2026

Vou seguir exatamente o mesmo padrão das saídas já publicadas (Equador & Galápagos, Patagônia Chilena, Grécia, Marrocos).

### Arquivos a criar/editar

1. **Imagem hero** — `src/assets/grupo-tailandia-2026.jpg`
   Gerada via imagegen: cena cinematográfica do Festival das Lanternas (Yi Peng) em Chiang Mai, com milhares de lanternas no céu noturno, templo iluminado ao fundo, paleta dourada/âmbar, estilo editorial luxo — sem rostos identificáveis.

2. **Nova página** — `src/pages/GrupoTailandia2026.tsx`
   - Roteiro de 15 dias (12 a 26/11/2026): São Paulo → Dubai → Phuket → Phi Phi → Bangkok → Ayutthaya → Angthong → Phitsanulok → Sukhothai → Chiang Rai → Chiang Mai (Festival das Lanternas + Eco Valley) → retorno.
   - Voos Emirates (EK 262 / EK 378).
   - Hotéis: Graceland (Phuket), Ramada Riverside (Bangkok), Classic Kameo (Ayuthaya), Pattara (Phitsanulok), The Heritage (Chiang Rai), Kantary Hills / Centara Riverside (Chiang Mai).
   - Preços em USD: Triplo 5.946 | Duplo 5.978 | Individual 6.789 + IOF + taxas USD 639.
   - Inclui/Não inclui conforme PDF.
   - **Forma de pagamento: 25% de entrada + saldo em 9 parcelas sem juros no cartão.**
   - Seções: Hero, breadcrumbs, destaques (Festival das Lanternas, Ilhas Phi Phi, Eco Valley, gastronomia), roteiro dia a dia, hotéis, valores, o que inclui/não inclui, documentos, FAQ, CTA WhatsApp.
   - SEO otimizado: title, description, keywords ("viagem em grupo Tailândia 2026", "Festival das Lanternas Chiang Mai", "Yi Peng Loi Krathong com guia do Brasil"), JSON-LD TouristTrip + FAQPage, OG image.

3. **Rota** — editar `src/App.tsx`
   Adicionar `/grupos/tailandia-2026` apontando para `GrupoTailandia2026`.

4. **Listagem** — editar `src/pages/EmbarqueComACreate.tsx`
   Inserir Tailândia como **primeiro card** do array `DEPARTURES` (saída mais próxima em destaque), com tag "12 a 26/11/2026 · 15 dias", status "Saída confirmada", preço "A partir de US$ 5.978 por pessoa (apto duplo)". Atualizar também o `ogImage` se fizer sentido manter Grécia (mantenho Grécia para não quebrar share atual).

### Padrão visual
Reaproveita os tokens do design system (navy/emerald/gold, Playfair + Inter), componentes `Header`, `Footer`, `WhatsAppButton`, `Breadcrumbs`, `SEO`, `FAQSection` — idêntico às outras landings de grupo.

### WhatsApp
Links contextuais usando `generateWhatsAppLink({ type: "Roteiro", name: "Tailândia com Festival das Lanternas — Saída 12/11/2026" })`.

Confirma que posso seguir?