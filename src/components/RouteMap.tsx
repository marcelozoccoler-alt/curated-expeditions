// Mapa ilustrado do roteiro (SVG puro, funciona no pré-render). Contorno: Natural Earth via world.geo.json.
const BRAZIL = "M169 357L182 344L193 334L200 330L209 324L209 316L204 310L199 312L201 307L202 301L202 295L198 293L195 295L191 295L190 291L189 282L187 279L180 276L176 278L166 276L166 262L163 257L166 255L166 249L168 245L170 237L168 231L162 228L161 224L163 218L143 218L140 206L142 206L142 201L140 199L140 193L134 190L128 190L124 187L117 185L113 181L102 180L91 171L92 164L91 160L92 153L79 154L73 158L65 162L62 165L57 165L50 165L44 166L40 165L40 150L32 156L23 156L19 150L13 150L15 145L9 139L5 130L8 128L8 124L14 121L13 116L15 112L16 108L28 101L36 99L37 98L46 98L51 71L51 66L49 60L45 57L45 50L50 48L52 49L53 45L47 44L47 38L66 38L70 35L72 38L74 44L76 42L82 48L90 47L91 44L99 42L103 40L104 36L111 33L111 31L102 30L101 24L101 17L97 14L99 14L106 15L114 17L117 15L124 13L135 10L139 6L138 3L143 3L145 5L144 9L147 11L150 15L147 19L145 27L148 33L149 37L155 42L160 42L161 40L164 40L168 38L172 36L177 36L180 36L185 37L186 35L184 33L185 30L189 31L194 30L200 32L204 34L207 31L209 32L211 34L216 34L219 30L223 23L228 13L232 13L234 18L240 36L245 38L246 45L238 53L241 56L259 57L259 67L267 61L279 64L296 71L301 76L299 82L311 79L330 84L345 84L360 92L373 103L380 106L389 106L393 110L396 122L398 128L394 145L389 151L375 165L368 177L361 185L358 186L355 193L356 212L353 227L352 234L349 238L347 251L337 264L336 274L327 279L325 285L314 285L299 289L291 293L280 296L269 304L260 314L259 321L260 327L258 337L256 342L249 347L238 365L229 373L222 377L218 387L211 393L208 387L213 382L207 375L199 370L189 364L185 364L175 356L169 357Z";
const W0 = -74.5, N = 5.5, SC = 10;
const STOPS: [RegExp, string, number, number, number, number, "start" | "middle" | "end"][] = [
  [/manaus|amazon/i, "Manaus", -60.0, -3.1, 0, 20, "middle"],
  [/lençóis|lencois|são luís|sao luis/i, "Lençóis Maranhenses", -43.1, -2.5, 0, -12, "middle"],
  [/salvador|bahia/i, "Salvador", -38.5, -12.97, -10, 4, "end"],
  [/foz|iguaz/i, "Foz do Iguaçu", -54.58, -25.55, -10, 4, "end"],
  [/pantanal|aquidauana/i, "Pantanal", -55.8, -20.47, -10, 4, "end"],
  [/paraty/i, "Paraty", -44.71, -23.22, 2, 20, "start"],
  [/são paulo|sao paulo/i, "São Paulo", -46.63, -23.55, -6, 20, "end"],
  [/rio/i, "Rio de Janeiro", -43.2, -22.9, 10, -6, "start"],
];
const xy = (lon: number, lat: number) => [(lon - W0) * SC, (N - lat) * SC] as const;

export function resolveStops(route: string[]) {
  return route.map(r => STOPS.find(s => s[0].test(r))).filter(Boolean).map(s => { const [x, y] = xy(s![2], s![3]); return { label: s![1], x, y, dx: s![4], dy: s![5], anchor: s![6] }; });
}

export default function RouteMap({ route, title }: { route: string[]; title: string }) {
  const pts = resolveStops(route);
  const seen = new Set<string>();
  const legs = pts.slice(1).map((p, i) => {
    const a = pts[i]; const mx = (a.x + p.x) / 2, my = (a.y + p.y) / 2;
    const dx = p.x - a.x, dy = p.y - a.y; const bend = 0.18;
    return { d: `M${a.x} ${a.y} Q${mx - dy * bend} ${my + dx * bend} ${p.x} ${p.y}`, mx: mx - dy * bend / 2, my: my + dx * bend / 2, ang: Math.atan2(dy, dx) * 180 / Math.PI };
  });
  return (
    <figure className="mx-auto max-w-md">
      <svg viewBox="-10 -10 430 420" role="img" aria-label={title} className="w-full h-auto">
        <path d={BRAZIL} className="fill-muted stroke-border" strokeWidth={1.5} />
        <text x={150} y={160} className="fill-muted-foreground font-serif" fontSize={18} letterSpacing={4}>BRASIL</text>
        {legs.map((l, i) => <g key={i}><path d={l.d} fill="none" className="stroke-primary" strokeWidth={2.5} strokeDasharray={i === legs.length - 1 && pts[0].label === pts[pts.length - 1].label ? "6 5" : undefined} strokeLinecap="round" /><path d="M-5 -4 L4 0 L-5 4 Z" className="fill-primary" transform={`translate(${l.mx} ${l.my}) rotate(${l.ang})`} /></g>)}
        {pts.map((p, i) => { if (seen.has(p.label)) return null; seen.add(p.label); return <g key={i}><circle cx={p.x} cy={p.y} r={6} className="fill-gold stroke-background" strokeWidth={2} /><text x={p.x + p.dx} y={p.y + p.dy} textAnchor={p.anchor} fontSize={13} className="fill-foreground stroke-background font-medium" paintOrder="stroke" strokeWidth={4} strokeLinejoin="round">{p.label}</text></g>; })}
      </svg>
    </figure>
  );
}
