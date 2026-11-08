import { categoryLabel, type Project } from '../data/projects'

export function Readout({ lines }: { lines: string[] }) {
  return (
    <div className="scope" aria-hidden="true">
      {lines.map((l) => <div key={l} className="scope-line">{l}</div>)}
    </div>
  )
}

export function ProjectCard({ project: p, code }: { project: Project; code: string }) {
  return (
    <a href={`#/p/${p.slug}`} className="card" data-cat={p.category}>
      <div className="card-strip mono">
        <span>{code}</span>
        <span>{p.status ?? p.badge ?? p.year}</span>
      </div>
      <div className={`card-art${p.imageFit === 'contain' ? ' fit-contain' : ''}`}>
        {p.image ? <img src={p.image} alt="" loading="lazy" /> : p.readout ? <Readout lines={p.readout} /> : null}
      </div>
      <div className="card-body">
        <div className="card-meta mono"><span className="dot" />{categoryLabel[p.category]}</div>
        <h3 className="card-title">{p.title}</h3>
        <p className="card-tag">{p.tagline}</p>
        {p.highlight && <p className="card-highlight">↗ {p.highlight}</p>}
      </div>
    </a>
  )
}
