import { memo, type ReactElement } from 'react'
import type { PatternKind } from '../data/projects'

/** Seeded PRNG so each project always draws the same pattern. */
function rng(seed: string) {
  let h = 1779033703 ^ seed.length
  for (let i = 0; i < seed.length; i++) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return () => {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
}

const S = 200
type Draw = (r: () => number) => ReactElement[]

const draw: Record<PatternKind, Draw> = {
  // subway-style lines with 45° bends and stations
  map: (r) => {
    const out: ReactElement[] = []
    for (let l = 0; l < 5; l++) {
      let x = 10 + r() * 30
      let y = 20 + r() * 160
      const pts = [[x, y]]
      while (x < 190) {
        const run = 20 + r() * 40
        const dir = Math.floor(r() * 3) - 1
        x = Math.min(190, x + run)
        y = Math.max(15, Math.min(185, y + dir * run * 0.8))
        pts.push([x, y])
      }
      out.push(
        <polyline key={`l${l}`} points={pts.map((p) => p.join(',')).join(' ')} fill="none"
          stroke="currentColor" strokeWidth={l === 0 ? 5 : 3} strokeLinejoin="round" strokeLinecap="round"
          opacity={l === 0 ? 1 : 0.35 + l * 0.1} />,
      )
      pts.slice(1, -1).forEach(([px, py], i) =>
        out.push(<circle key={`s${l}-${i}`} cx={px} cy={py} r={l === 0 ? 5 : 3.5} fill="var(--card)" stroke="currentColor" strokeWidth={2} />),
      )
    }
    return out
  },
  // pixel field
  grid: (r) => {
    const out: ReactElement[] = []
    const n = 12
    const c = S / n
    for (let i = 0; i < n; i++)
      for (let j = 0; j < n; j++) {
        const v = r()
        if (v < 0.35) continue
        out.push(<rect key={`${i}-${j}`} x={i * c + 2} y={j * c + 2} width={c - 4} height={c - 4} rx={2} fill="currentColor" opacity={(v - 0.35) * 1.4} />)
      }
    return out
  },
  // flow lines through a smooth angle field
  flow: (r) => {
    const out: ReactElement[] = []
    const a = r() * 3 + 1
    const b = r() * 3 + 1
    for (let k = 0; k < 26; k++) {
      let x = r() * S
      let y = r() * S
      let d = `M${x.toFixed(1)},${y.toFixed(1)}`
      for (let s = 0; s < 40; s++) {
        const ang = Math.sin(x / 40 * a) + Math.cos(y / 40 * b)
        x += Math.cos(ang) * 4
        y += Math.sin(ang) * 4
        d += ` L${x.toFixed(1)},${y.toFixed(1)}`
      }
      out.push(<path key={k} d={d} fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" opacity={0.3 + r() * 0.7} />)
    }
    return out
  },
  // stacked signals, like a scope screen
  wave: (r) => {
    const out: ReactElement[] = []
    for (let k = 0; k < 7; k++) {
      const f = 1 + Math.floor(r() * 5)
      const amp = 6 + r() * 12
      const ph = r() * Math.PI * 2
      const y0 = 22 + k * 26
      let d = ''
      for (let x = 0; x <= S; x += 2) d += `${x === 0 ? 'M' : 'L'}${x},${(y0 + Math.sin((x / S) * f * Math.PI * 2 + ph) * amp).toFixed(1)}`
      out.push(<path key={k} d={d} fill="none" stroke="currentColor" strokeWidth={k === 3 ? 3 : 1.5} opacity={k === 3 ? 1 : 0.45} />)
    }
    return out
  },
  // PCB-style orthogonal traces with vias
  circuit: (r) => {
    const out: ReactElement[] = []
    const g = 20
    for (let k = 0; k < 14; k++) {
      let x = Math.floor(r() * 9 + 1) * g
      let y = Math.floor(r() * 9 + 1) * g
      const pts = [[x, y]]
      for (let s = 0; s < 3; s++) {
        if (r() < 0.5) x = Math.max(g, Math.min(S - g, x + (r() < 0.5 ? -1 : 1) * g * Math.ceil(r() * 3)))
        else y = Math.max(g, Math.min(S - g, y + (r() < 0.5 ? -1 : 1) * g * Math.ceil(r() * 3)))
        pts.push([x, y])
      }
      out.push(<polyline key={`t${k}`} points={pts.map((p) => p.join(',')).join(' ')} fill="none" stroke="currentColor" strokeWidth={2} strokeLinejoin="round" opacity={0.7} />)
      const [ex, ey] = pts[pts.length - 1]
      out.push(<circle key={`v${k}`} cx={ex} cy={ey} r={4} fill="var(--card)" stroke="currentColor" strokeWidth={2} />)
    }
    out.push(<rect key="chip" x={70} y={70} width={60} height={60} rx={6} fill="currentColor" opacity={0.9} />)
    return out
  },
  // concentric arcs
  radial: (r) => {
    const out: ReactElement[] = []
    for (let k = 1; k < 12; k++) {
      const rad = k * 8.5
      const start = r() * 360
      const sweep = 60 + r() * 260
      const p = (deg: number) => {
        const t = (deg * Math.PI) / 180
        return `${(100 + rad * Math.cos(t)).toFixed(1)},${(100 + rad * Math.sin(t)).toFixed(1)}`
      }
      out.push(<path key={k} d={`M${p(start)} A${rad},${rad} 0 ${sweep > 180 ? 1 : 0} 1 ${p(start + sweep)}`} fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" opacity={0.25 + k * 0.06} />)
    }
    return out
  },
  // isometric blocks
  iso: (r) => {
    const out: ReactElement[] = []
    const w = 22
    const h = w * 0.58
    for (let row = 0; row < 9; row++)
      for (let col = 0; col < 6; col++) {
        if (r() < 0.45) continue
        const cx = col * w * 2 + (row % 2 ? w : 0) - 6
        const cy = row * h * 1.5 + 22
        const z = 6 + r() * 14
        const top = `${cx},${cy - z} ${cx + w},${cy - h - z} ${cx + 2 * w},${cy - z} ${cx + w},${cy + h - z}`
        const left = `${cx},${cy - z} ${cx + w},${cy + h - z} ${cx + w},${cy + h} ${cx},${cy}`
        const right = `${cx + w},${cy + h - z} ${cx + 2 * w},${cy - z} ${cx + 2 * w},${cy} ${cx + w},${cy + h}`
        out.push(
          <g key={`${row}-${col}`}>
            <polygon points={left} fill="currentColor" opacity={0.55} />
            <polygon points={right} fill="currentColor" opacity={0.8} />
            <polygon points={top} fill="currentColor" opacity={0.25} />
          </g>,
        )
      }
    return out
  },
}

export const Pattern = memo(function Pattern({ kind, seed }: { kind: PatternKind; seed: string }) {
  return (
    <svg viewBox={`0 0 ${S} ${S}`} preserveAspectRatio="xMidYMid slice" aria-hidden="true" className="pattern">
      {draw[kind](rng(seed))}
    </svg>
  )
})
