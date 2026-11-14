export function BudapestSkyline() {
  return <figure className="max-w-3xl mx-auto py-8 border-y border-border" aria-label="Parlamento e Basílica de Santo Estêvão, ambos com 96 metros">
    <svg viewBox="0 0 720 290" role="img" aria-labelledby="budapest-skyline-title" className="w-full h-auto text-gold" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
      <title id="budapest-skyline-title">O Parlamento e a Basílica de Santo Estêvão compartilham o horizonte de 96 metros</title>
      <path d="M144 90 H319 M401 90 H576" strokeDasharray="4 7" className="text-emerald" />
      <text x="360" y="99" textAnchor="middle" fill="currentColor" stroke="none" className="font-serif text-4xl">96</text>
      <text x="360" y="122" textAnchor="middle" fill="currentColor" stroke="none" className="text-sm">metros</text>
      <path d="M30 242 H690" className="text-emerald" />
      <g>
        <path d="M47 240 V184 H112 V154 H176 V184 H241 V240 M112 240 V156 M176 240 V156 M119 153 Q120 117 144 107 Q168 117 169 153 Z M144 107 V90 M139 98 H149" />
        <path d="M48 184 L64 168 L80 184 L96 168 L112 184 M176 184 L192 168 L208 184 L224 168 L240 184 M125 153 V182 M136 153 V182 M152 153 V182 M163 153 V182 M115 184 H173 M144 110 V150" />
        {[56, 78, 100, 122, 156, 178, 200, 222].map(x => <path key={x} d={`M${x} 232 V205 Q${x + 6} 193 ${x + 12} 205 V232 Z`} />)}
        <path d="M132 240 V214 Q144 191 156 214 V240 M64 168 V151 M96 168 V151 M192 168 V151 M224 168 V151" />
      </g>
      <g>
        <path d="M474 240 V144 H510 V240 M642 240 V144 H678 V240 M472 144 L492 129 L512 144 M640 144 L660 129 L680 144 M486 129 V106 Q492 98 498 106 V129 M654 129 V106 Q660 98 666 106 V129" />
        <path d="M510 240 V192 L576 163 L642 192 V240 M510 193 H642 M545 175 V144 H607 V175 M545 144 Q546 115 576 104 Q606 115 607 144 Z M576 104 V90 M571 98 H581 M555 145 V165 M568 145 V165 M584 145 V165 M597 145 V165 M556 143 Q558 117 576 107 Q594 117 596 143" />
        <path d="M532 240 V203 M544 240 V203 M608 240 V203 M620 240 V203 M560 240 V214 Q576 194 592 214 V240 M484 180 V159 H500 V180 Z M652 180 V159 H668 V180 Z M484 218 V198 H500 V218 Z M652 218 V198 H668 V218 Z" />
      </g>
    </svg>
    <figcaption className="grid grid-cols-2 gap-8 text-center text-sm sm:text-base text-muted-foreground mt-3"><span>Parlamento de Budapeste</span><span>Basílica de Santo Estêvão</span></figcaption>
  </figure>;
}

export function CharlesBridgeNumbers() {
  return <aside className="max-w-3xl mx-auto text-center border-y border-border py-8 sm:py-10 mb-10" aria-label="Data e sequência numérica da Ponte Carlos">
    <p className="text-sm text-muted-foreground mb-5">9 de julho de 1357 · 5h31</p>
    <p className="font-serif text-2xl sm:text-4xl text-gold whitespace-nowrap">1 · 3 · 5 · 7 · 9 · 7 · 5 · 3 · 1</p>
    <p className="text-base text-foreground mt-5">135797531</p>
    <p className="text-sm text-muted-foreground leading-relaxed mt-3 max-w-md mx-auto">Um palíndromo: a mesma sequência nos dois sentidos. A hora da primeira pedra pertence à tradição lendária de Praga.</p>
  </aside>;
}