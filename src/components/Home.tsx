import { useMemo, useState } from 'react'
import { experience, posts, profile } from '../data/profile'
import { categoryLabel, projects, type Category } from '../data/projects'
import { labs } from '../data/labs'
import { ProjectCard } from './ProjectCard'
import { Links } from './Links'

type Filter = 'all' | Category

export function Home() {
  const [filter, setFilter] = useState<Filter>('all')
  const all = useMemo(() => [...projects, ...labs], [])

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: all.length, software: 0, electrical: 0 }
    all.forEach((p) => c[p.category]++)
    return c
  }, [all])

  // spec-sheet codes: SW-01…, EE-01…
  const codes = useMemo(() => {
    const n = { software: 0, electrical: 0 }
    return Object.fromEntries(
      all.map((p) => [p.slug, `${p.category === 'software' ? 'SW' : 'EE'}-${String(++n[p.category]).padStart(2, '0')}`]),
    )
  }, [all])

  const shown = filter === 'all' ? all : all.filter((p) => p.category === filter)
  const filters: Filter[] = ['all', 'software', 'electrical']

  return (
    <>
      <section className="wrap hero">
        <div className="hero-main">
          <p className="eyebrow mono">// EE + CS · Columbia ’27 · New York</p>
          <h1 className="display">
            <span className="prompt" aria-hidden="true">&gt;</span>
            {profile.headline}
            <span className="cursor" aria-hidden="true" />
          </h1>
          <p className="lede">{profile.intro}</p>
          <Links />
        </div>
        <aside className="readout" aria-label="Quick facts">
          <div className="readout-head mono">
            <span>STATUS</span>
            <span className="live"><span className="nav-dot" />live</span>
          </div>
          <dl>
            {profile.status.map((s) => (
              <div key={s.k} className="readout-row">
                <dt className="mono">{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section id="about" className="wrap section" aria-labelledby="about-h">
        <SectionHead n="01" id="about-h" title="About" />
        <div className="about">
          {profile.about.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
        </div>
      </section>

      <section id="work" className="wrap section" aria-labelledby="work-h">
        <div className="section-top">
          <SectionHead n="02" id="work-h" title="Work" />
          <div className="chips" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button key={f} className="chip mono" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : categoryLabel[f]}
                <span className="chip-n">{counts[f]}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="grid">
          {shown.map((p) => <ProjectCard key={p.slug} project={p} code={codes[p.slug]} />)}
        </div>
      </section>

      <section id="writing" className="wrap section" aria-labelledby="writing-h">
        <div className="section-top">
          <SectionHead n="03" id="writing-h" title="Writing" />
          <a className="btn" href={profile.links.substack} target="_blank" rel="noreferrer">All posts on Substack ↗</a>
        </div>
        <p className="section-sub">Product teardowns: how products can compete in the age of AI, from first principles.</p>
        <ol className="posts">
          {posts.map((p) => (
            <li key={p.href}>
              <a className="post" href={p.href} target="_blank" rel="noreferrer">
                <span className="post-date mono">{p.date}</span>
                <span className="post-body">
                  <span className="post-title">{p.title}</span>
                  <span className="post-blurb">{p.blurb}</span>
                </span>
                <span className="post-go mono" aria-hidden="true">read ↗</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section id="experience" className="wrap section" aria-labelledby="exp-h">
        <div className="section-top">
          <SectionHead n="04" id="exp-h" title="Experience" />
          <a className="btn btn-accent" href={profile.resume} target="_blank" rel="noreferrer">Resume (PDF) ↗</a>
        </div>
        <ol className="exp">
          {experience.map((j) => (
            <li key={j.org + j.when} className="exp-row">
              <div className="exp-head">
                <div>
                  <div className="exp-org">{j.org}</div>
                  <div className="exp-role">{j.role}</div>
                </div>
                <div className="exp-when mono">{j.when}</div>
              </div>
              <dl className="exp-log">
                <div><dt className="mono">why</dt><dd>{j.why}</dd></div>
                <div>
                  <dt className="mono">built</dt>
                  <dd><ul>{j.built.map((b) => <li key={b}>{b}</li>)}</ul></dd>
                </div>
                <div className="exp-impact"><dt className="mono">impact</dt><dd>{j.impact}</dd></div>
              </dl>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}

function SectionHead({ n, id, title }: { n: string; id: string; title: string }) {
  return (
    <div className="section-head">
      <span className="section-n mono">{n} /</span>
      <h2 id={id} className="section-h">{title}</h2>
    </div>
  )
}
