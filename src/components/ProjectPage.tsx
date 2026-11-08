import { categoryLabel, type Project } from '../data/projects'
import { Readout } from './ProjectCard'

export function ProjectPage({ project: p }: { project: Project }) {
  return (
    <article className="wrap detail" data-cat={p.category}>
      <a className="back mono" href="#/#work">← all work</a>
      <p className="eyebrow mono">
        <span className="dot" />
        {categoryLabel[p.category]} · {p.year}
        {p.badge ? ` · ${p.badge}` : ''}
        {p.status ? ` · ${p.status}` : ''}
      </p>
      <h1 className="display-sm">{p.title}</h1>
      <p className="lede">{p.tagline}</p>

      {p.links.length > 0 && (
        <div className="actions">
          {p.links.map((l, i) => (
            <a key={l.href} className={`btn ${i === 0 ? 'btn-accent' : ''}`} href={l.href} target="_blank" rel="noreferrer">
              {l.label} ↗
            </a>
          ))}
        </div>
      )}

      {p.figure ? (
        <>
          <figure className="detail-figure">
            <img src={p.figure} alt={`${p.title} diagram`} />
          </figure>
          {p.photo && (
            <figure className="detail-figure detail-photo">
              <img src={p.photo} alt={p.photoAlt ?? `${p.title} on the breadboard`} loading="lazy" />
            </figure>
          )}
        </>
      ) : p.image ? (
        <figure className="detail-figure detail-shot">
          <img src={p.image} alt={`${p.title} screenshot`} />
        </figure>
      ) : p.readout ? (
        <div className="detail-scope"><Readout lines={p.readout} /></div>
      ) : null}

      <div className="detail-body">
        <aside className="facts">
          <div><h4 className="mono">Role</h4><p>{p.role}</p></div>
          <div><h4 className="mono">Tools</h4><ul className="tags">{p.stack.map((s) => <li key={s} className="mono">{s}</li>)}</ul></div>
          {p.credit && <div><h4 className="mono">Team</h4><p>{p.credit}</p></div>}
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
