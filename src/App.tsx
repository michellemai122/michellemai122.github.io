import { useEffect, useState } from 'react'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { Home } from './components/Home'
import { ProjectPage } from './components/ProjectPage'

/** Hash routes keep GitHub Pages happy: #/  and  #/p/<slug>  and  #/#section */
function useRoute() {
  const read = () => window.location.hash.replace(/^#/, '') || '/'
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const on = () => setRoute(read())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}

export function App() {
  const route = useRoute()
  const slug = route.startsWith('/p/') ? route.slice(3) : null
  const project = slug ? projects.find((p) => p.slug === slug) : undefined

  useEffect(() => {
    if (slug) window.scrollTo(0, 0)
    else if (route.startsWith('/#')) document.getElementById(route.slice(2))?.scrollIntoView()
  }, [route, slug])

  useEffect(() => {
    document.title = project ? `${project.title} · ${profile.name}` : `${profile.name} · Engineer`
  }, [project])

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#/" className="nav-name">{profile.name}</a>
          <nav aria-label="Sections">
            <a href="#/#work">Work</a>
            <a href="#/#lab">Lab</a>
            <a href="#/#experience">Experience</a>
            <a href={`mailto:${profile.links.email}`}>Contact</a>
          </nav>
        </div>
      </header>
      <main key={slug ?? 'home'} className="page">
        {slug ? project ? <ProjectPage project={project} /> : <NotFound /> : <Home />}
      </main>
      <footer className="wrap footer">
        <span>© 2026 {profile.name}</span>
        <span className="footer-links">
          <a href={profile.links.github}>GitHub</a>
          <a href={profile.links.linkedin}>LinkedIn</a>
          <a href={profile.links.substack}>Substack</a>
          <a href={`mailto:${profile.links.email}`}>Email</a>
        </span>
      </footer>
    </>
  )
}

function NotFound() {
  return (
    <section className="wrap detail">
      <a className="back" href="#/">← All work</a>
      <h1 className="display-sm">That project isn't here.</h1>
    </section>
  )
}
