import { categoryLabel, type Project } from '../data/projects'
import { Pattern } from './Pattern'

export function ProjectPage({ project: p }: { project: Project }) {
  return (
    <article className="wrap detail" data-cat={p.category}>
      <a className="back" href="#/#work">← All work</a>
      <p className="eyebrow"><span className="dot" />{categoryLabel[p.category]} · {p.year}{p.status ? ` · ${p.status}` : ''}</p>
      <h1 className="display-sm">{p.title}</h1>
      <p className="lede">{p.tagline}</p>

      {p.links.length > 0 && (
        <div className="actions">
          {p.links.map((l, i) => (
            <a key={l.href} className={`btn ${i === 0 ? 'btn-primary' : ''}`} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}

      {p.figure ? (
        <figure className="detail-figure">
          <img src={p.figure} alt={`${p.title} diagram`} />
        </figure>
      ) : (
        <div className="detail-art">
          {p.image ? <img src={p.image} alt={`${p.title} screenshot`} /> : <Pattern kind={p.pattern} seed={p.slug} />}
        </div>
      )}

      <div className="detail-body">
        <aside className="facts">
          <div><h4>Role</h4><p>{p.role}</p></div>
          <div><h4>Tools</h4><ul className="tags">{p.stack.map((s) => <li key={s}>{s}</li>)}</ul></div>
          {p.credit && <div><h4>Team</h4><p>{p.credit}</p></div>}
        </aside>
        <div className="prose">
          <h2>The problem</h2>
          <p>{p.problem}</p>
          <h2>What I built</h2>
          <ul>{p.built.map((b) => <li key={b}>{b}</li>)}</ul>
          {p.result && (<><h2>Result</h2><p>{p.result}</p></>)}
        </div>
      </div>
    </article>
  )
}
