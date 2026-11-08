import { useEffect, useState } from 'react'
import { profile } from './data/profile'
import { projects } from './data/projects'
import { labs } from './data/labs'
import { Home } from './components/Home'
import { ProjectPage } from './components/ProjectPage'
import { Links } from './components/Links'

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
  const project = slug ? [...projects, ...labs].find((p) => p.slug === slug) : undefined

  useEffect(() => {
    if (slug) window.scrollTo(0, 0)
    else if (route.startsWith('/#')) {
      const calm = document.hidden || matchMedia('(prefers-reduced-motion: reduce)').matches
      document.getElementById(route.slice(2))?.scrollIntoView({ behavior: calm ? 'instant' : 'smooth' })
    }
  }, [route, slug])

  useEffect(() => {
    document.title = project ? `${project.title} · ${profile.name}` : `${profile.name} · Engineer`
  }, [project])

  return (
    <>
      <header className="nav">
        <div className="wrap nav-inner">
          <a href="#/" className="nav-name">
            Michelle Mai
          </a>
          <nav aria-label="Sections" className="nav-sections">
            <a href="#/#about">About</a>
            <a href="#/#work">Software</a>
            <a href="#/#lab">Electrical</a>
            <a href="#/#writing">Writing</a>
            <a href="#/#experience">Experience</a>
          </nav>
          <Links compact />
        </div>
      </header>
      <main key={slug ?? 'home'} className="page">
        {slug ? project ? <ProjectPage project={project} /> : <NotFound /> : <Home />}
      </main>
      <footer className="wrap footer">
        <span className="mono">© 2026 {profile.name}</span>
        <Links compact />
      </footer>
    </>
  )
}

function NotFound() {
  return (
    <section className="wrap detail">
      <a className="back" href="#/">← Back to the collection</a>
      <h1 className="display-sm">That project isn't here.</h1>
    </section>
  )
}
