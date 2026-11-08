import { experience, posts, profile, skills } from '../data/profile'
import { projects } from '../data/projects'
import { labs } from '../data/labs'
import { ProjectCard } from './ProjectCard'
import { Links } from './Links'

export function Home() {
  return (
    <>
      {/* Exhibition title wall */}
      <section className="wrap hero">
        <div className="hero-grid">
          <div className="hero-text">
            <p className="kicker">Now on view · Ongoing</p>
            <h1 className="display">Circuits &amp; Intelligence</h1>
            <p className="display-sub">The work of Michelle Mai, 2024–present</p>
            <p className="lede">{profile.headline} {profile.intro}</p>
            <Links />
          </div>
          <figure className="portrait-wrap">
            <div className="frame portrait-frame">
              <img src="/me.jpg" alt="Michelle Mai" width="800" height="1000" />
            </div>
            <figcaption className="label portrait-label">
              <p className="label-title">Michelle Mai</p>
              <p className="label-artist">Electrical Engineering + Computer Science</p>
              <p className="label-medium">Columbia ’27 · New York</p>
            </figcaption>
          </figure>
        </div>
        <aside className="now" aria-label="Right now">
          <span className="now-label">Visitor information · Right now</span>
          <dl>
            {profile.status.map((s) => (
              <div key={s.k}>
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </section>

      <section id="about" className="wrap section" aria-labelledby="about-h">
        <SectionHead kicker="Wall text" id="about-h" title="About the artist" />
        <div className="about">
          {profile.about.map((para) => <p key={para.slice(0, 24)}>{para}</p>)}
        </div>
      </section>

      <section id="skills" className="wrap section" aria-labelledby="skills-h">
        <SectionHead kicker="Materials and techniques" id="skills-h" title="Skills" />
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group} className="skill-group">
              <h3>{g.group}</h3>
              <p>{g.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="wrap section" aria-labelledby="work-h">
        <SectionHead kicker="Gallery 1" id="work-h" title="Software and AI" />
        <div className="gallery">
          {projects.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section id="lab" className="wrap section" aria-labelledby="lab-h">
        <SectionHead kicker="Gallery 2" id="lab-h" title="Works on paper and silicon" />
        <p className="section-sub">Electrical engineering from my Columbia labs: analog circuits, digital systems, signals and devices.</p>
        <div className="gallery">
          {labs.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section id="writing" className="wrap section" aria-labelledby="writing-h">
        <div className="section-top">
          <SectionHead kicker="Publications" id="writing-h" title="Writing" />
          <a className="btn" href={profile.links.substack} target="_blank" rel="noreferrer">All posts on Substack ↗</a>
        </div>
        <p className="section-sub">Product teardowns: how products can compete in the age of AI, from first principles.</p>
        <ol className="posts">
          {posts.map((p) => (
            <li key={p.href}>
              <a className="post" href={p.href} target="_blank" rel="noreferrer">
                <span className="post-date">{p.date}</span>
                <span className="post-body">
                  <span className="post-title">{p.title}</span>
                  <span className="post-blurb">{p.blurb}</span>
                </span>
                <span className="post-go" aria-hidden="true">Read ↗</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section id="experience" className="wrap section" aria-labelledby="exp-h">
        <div className="section-top">
          <SectionHead kicker="Provenance" id="exp-h" title="Experience" />
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
                <div className="exp-when">{j.when}</div>
              </div>
              <dl className="exp-log">
                <div><dt>Why</dt><dd>{j.why}</dd></div>
                <div>
                  <dt>Built</dt>
                  <dd><ul>{j.built.map((b) => <li key={b}>{b}</li>)}</ul></dd>
                </div>
                <div className="exp-impact"><dt>Impact</dt><dd>{j.impact}</dd></div>
              </dl>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}

function SectionHead({ kicker, id, title }: { kicker: string; id: string; title: string }) {
  return (
    <div className="section-head">
      <p className="kicker">{kicker}</p>
      <h2 id={id} className="section-h">{title}</h2>
    </div>
  )
}
