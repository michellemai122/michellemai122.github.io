import { useMemo, useState } from 'react'
import { experience, profile } from '../data/profile'
import { categoryLabel, projects, type Category } from '../data/projects'
import { labs } from '../data/labs'
import { ProjectCard } from './ProjectCard'

type Filter = 'all' | Category

export function Home() {
  const [filter, setFilter] = useState<Filter>('all')
  const featured = projects.filter((p) => p.featured)
  const all = [...projects, ...labs]

  const counts = useMemo(() => {
    const c: Record<Filter, number> = { all: all.length, software: 0, electrical: 0, startup: 0 }
    all.forEach((p) => c[p.category]++)
    return c
  }, [all])

  const shown = filter === 'all' ? all : all.filter((p) => p.category === filter)
  const filters: Filter[] = ['all', 'software', 'electrical', 'startup']

  return (
    <>
      <section className="wrap hero">
        <p className="eyebrow">Columbia Engineering · EE + CS · Class of 2027</p>
        <h1 className="display">{profile.headline}</h1>
        <p className="lede">{profile.intro}</p>
        <div className="actions">
          <a className="btn btn-primary" href="#/#work">See my work</a>
          <a className="btn" href={profile.links.github}>GitHub</a>
          <a className="btn" href={profile.links.linkedin}>LinkedIn</a>
        </div>
      </section>

      <section className="wrap section" aria-labelledby="featured-h">
        <h2 id="featured-h" className="section-h">Featured</h2>
        <div className="featured-grid">
          {featured.map((p) => <ProjectCard key={p.slug} project={p} size="large" />)}
        </div>
      </section>

      <section id="work" className="wrap section" aria-labelledby="work-h">
        <div className="section-top">
          <h2 id="work-h" className="section-h">All work</h2>
          <div className="chips" role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button key={f} className="chip" aria-pressed={filter === f} onClick={() => setFilter(f)}>
                {f === 'all' ? 'All' : categoryLabel[f]}
                <span className="chip-n">{counts[f]}</span>
              </button>
            ))}
          </div>
        </div>
        {shown.length ? (
          <div className="grid">
            {shown.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        ) : (
          <p className="empty">Nothing here yet. Check back soon.</p>
        )}
      </section>

      <section id="lab" className="wrap section" aria-labelledby="lab-h">
        <h2 id="lab-h" className="section-h">Lab notebook</h2>
        <p className="section-sub">
          Electrical engineering work from my Columbia labs: analog circuits, digital systems, signals and power.
        </p>
        {labs.length ? (
          <div className="grid">
            {labs.map((p) => <ProjectCard key={p.slug} project={p} />)}
          </div>
        ) : (
          <p className="empty">Lab write-ups are on their way.</p>
        )}
      </section>

      <section id="experience" className="wrap section" aria-labelledby="exp-h">
        <h2 id="exp-h" className="section-h">Experience</h2>
        <ol className="exp">
          {experience.map((j) => (
            <li key={j.org + j.when} className="exp-row">
              <div className="exp-org">{j.org}</div>
              <div className="exp-role">{j.role}<p>{j.note}</p></div>
              <div className="exp-when">{j.when}</div>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
