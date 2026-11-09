import type { Project } from '../data/projects'
import { Readout, mediumOf } from './ProjectCard'

export function ProjectPage({ project: p }: { project: Project }) {
  const gallery = p.category === 'electrical' ? 'Electrical engineering' : 'Software and AI'
  const backTo = p.category === 'electrical' ? '#/#lab' : '#/#software'
  return (
    <article className="wrap detail" data-cat={p.category}>
      <a className="back" href={backTo}>← All projects</a>
      <p className="kicker">{gallery}</p>
      <h1 className="display-sm">{p.title}</h1>
      <p className="display-sub">{p.role}, {p.year}</p>
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
          <figure className={`detail-figure frame${p.category === 'electrical' ? ' frame-paper' : ''}`}>
            <img src={p.figure} alt={`${p.title} diagram`} />
          </figure>
          {p.photo && (
            <figure className={`detail-figure detail-photo frame${p.category === 'electrical' ? ' frame-paper' : ''}`}>
              <img src={p.photo} alt={p.photoAlt ?? `${p.title} on the breadboard`} loading="lazy" />
            </figure>
          )}
        </>
      ) : p.image ? (
        <figure className="detail-figure detail-shot frame">
          <img src={p.image} alt={`${p.title} screenshot`} />
        </figure>
      ) : p.readout ? (
        <div className="detail-scope frame"><Readout lines={p.readout} /></div>
      ) : null}

      <div className="detail-body">
        <aside className="label label-large">
          <p className="label-title">{p.title}</p>
          <p className="label-artist">{p.year}</p>
          <p className="label-medium">{mediumOf(p)}</p>
          <dl className="label-facts">
            <div><dt>Role</dt><dd>{p.role}</dd></div>
            <div><dt>Tech</dt><dd>{p.stack.join(', ')}</dd></div>
            {p.badge && <div><dt>Program</dt><dd>{p.badge}</dd></div>}
            {p.credit && <div><dt>Team</dt><dd>{p.credit}</dd></div>}
          </dl>
        </aside>
        <div className="prose">
          <h2>Why</h2>
          <p>{p.problem}</p>
          <h2>What I built</h2>
          <ul>{p.built.map((b) => <li key={b}>{b}</li>)}</ul>
          {(p.result || p.highlight) && (
            <>
              <h2>Impact</h2>
              <p>{p.result ?? p.highlight}</p>
            </>
          )}
        </div>
      </div>
    </article>
  )
}
