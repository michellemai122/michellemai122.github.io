import type { Project } from '../data/projects'

export function Readout({ lines }: { lines: string[] }) {
  return (
    <div className="scope" aria-hidden="true">
      {lines.map((l) => <div key={l} className="scope-line">{l}</div>)}
    </div>
  )
}

/** Artist line for a wall label. */
export function artistsOf(p: Project) {
  if (p.artists) return p.artists
  if (p.credit?.startsWith('Lab partner: Miriam Trujillo')) return 'Michelle Mai and Miriam Trujillo'
  return 'Michelle Mai'
}

/** Medium line: the tools, like a museum label lists materials. */
export function mediumOf(p: Project) {
  return p.stack.slice(0, 3).join(', ')
}

/** A framed work with its wall label underneath. */
export function ProjectCard({ project: p }: { project: Project; code?: string }) {
  return (
    <a href={`#/p/${p.slug}`} className="work" data-cat={p.category}>
      <div className={`frame${p.category === 'electrical' ? ' frame-paper' : ''}`}>
        <div className={`art${p.imageFit === 'contain' ? ' fit-contain' : ''}`}>
          {p.image ? <img src={p.image} alt="" loading="lazy" /> : p.readout ? <Readout lines={p.readout} /> : null}
        </div>
      </div>
      <div className="label">
        <p className="label-title">{p.title}</p>
        <p className="label-artist">{p.role} · {p.year}</p>
        <p className="label-medium">{mediumOf(p)}</p>
        <p className="label-desc">{p.tagline}</p>
        {p.highlight && <p className="label-note">{p.highlight}</p>}
        {p.badge && <p className="label-credit">{p.badge}</p>}
      </div>
    </a>
  )
}
