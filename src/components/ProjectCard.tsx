import { categoryLabel, type Project } from '../data/projects'
import { Pattern } from './Pattern'

export function ProjectCard({ project: p, size = 'square' }: { project: Project; size?: 'square' | 'large' }) {
  return (
    <a href={`#/p/${p.slug}`} className={`card card-${size}`} data-cat={p.category}>
      <div className="card-art">
        {p.image ? <img src={p.image} alt="" loading="lazy" /> : <Pattern kind={p.pattern} seed={p.slug} />}
        {p.status && <span className="badge">{p.status}</span>}
      </div>
      <div className="card-body">
        <div className="card-meta">
          <span className="dot" />
          {categoryLabel[p.category]} · {p.year}
        </div>
        <h3 className="card-title">{p.title}</h3>
        {size === 'large' && <p className="card-tag">{p.tagline}</p>}
      </div>
    </a>
  )
}
