import { useEffect, useRef, useState } from 'react'
import {
  achievements,
  education,
  profile,
  projects,
  skillGroups,
} from './data'
import './App.css'

const NAV_ITEMS = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const MARQUEE = [
  'Java',
  'Spring Boot',
  'React',
  'Python',
  'FastAPI',
  'Microservices',
  'Docker',
  'MySQL',
  'MongoDB',
  'Next.js',
  'NLP',
  'Gemini API',
]

function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return progress
}

function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (!elements.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) setActive(visible[0].target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}

function useReveal() {
  const rootRef = useRef(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return undefined

    const nodes = root.querySelectorAll('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return rootRef
}

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const progress = useScrollProgress()
  const active = useActiveSection(NAV_ITEMS.map((item) => item.id))
  const pageRef = useReveal()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page" ref={pageRef}>
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${menuOpen ? 'nav--open' : ''}`}>
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          <span className="nav__mark">SV</span>
          <span className="nav__fullname">{profile.firstName}</span>
        </a>

        <button
          type="button"
          className={`nav__burger ${menuOpen ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav__links ${menuOpen ? 'is-open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={active === item.id ? 'is-active' : ''}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a className="nav__cta" href={`mailto:${profile.email}`} onClick={closeMenu}>
            Hire me
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__atmosphere" aria-hidden="true">
            <div className="hero__orb hero__orb--a" />
            <div className="hero__orb hero__orb--b" />
            <div className="hero__grid" />
          </div>

          <div className="hero__portrait" aria-hidden="true">
            <img src={profile.photo} alt="" className="hero__photo" />
            <div className="hero__portrait-fade" />
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="hero__pulse" />
              Available for software roles
            </p>
            <h1 className="hero__name">
              <span className="hero__first">{profile.firstName}</span>
              <span className="hero__last">{profile.lastName}</span>
            </h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                Explore projects
                <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>
            <div className="hero__meta">
              <span>{profile.location}</span>
              <span>B.Tech IT · 2026</span>
              <span>750+ DSA</span>
            </div>
          </div>

          <a className="hero__scroll" href="#about" aria-label="Scroll to about">
            <span>Scroll</span>
            <i />
          </a>
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...MARQUEE, ...MARQUEE].map((item, i) => (
              <span key={`${item}-${i}`}>
                {item}
                <em>·</em>
              </span>
            ))}
          </div>
        </div>

        <section id="about" className="section about">
          <div className="section__inner">
            <div className="about__layout">
              <div className="about__intro" data-reveal>
                <p className="section__label">About</p>
                <h2 className="section__title">
                  Engineer who ships
                  <em> the whole stack</em>
                </h2>
              </div>
              <p className="about__text" data-reveal>
                {profile.summary}
              </p>
            </div>

            <ul className="about__stats">
              {[
                ['750+', 'DSA problems solved'],
                ['9', 'services in RankEngine'],
                ['5', 'featured projects'],
                ['1616', 'CodeChef rating · 3★'],
              ].map(([value, label], i) => (
                <li key={label} data-reveal style={{ '--delay': `${i * 80}ms` }}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section__inner">
            <div className="section__head" data-reveal>
              <p className="section__label">Projects</p>
              <h2 className="section__title">Selected work</h2>
              <p className="section__lead">
                Microservices, NLP pipelines, and AI-assisted product surfaces —
                built end to end.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <article
                  className="project"
                  key={project.name}
                  data-reveal
                  style={{ '--delay': `${index * 60}ms` }}
                >
                  <div className="project__rail">
                    <span className="project__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="project__line" aria-hidden="true" />
                    <span className="project__period">{project.period}</span>
                  </div>

                  <div className="project__body">
                    <div className="project__top">
                      <h3 className="project__name">
                        <a href={project.url} target="_blank" rel="noreferrer">
                          {project.name}
                          <span className="project__arrow" aria-hidden="true">
                            ↗
                          </span>
                        </a>
                      </h3>
                      <a
                        className="project__link"
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Open repo
                      </a>
                    </div>

                    <ul className="project__highlights">
                      {project.highlights.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>

                    <ul className="project__stack">
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section skills">
          <div className="section__inner">
            <div className="section__head" data-reveal>
              <p className="section__label">Skills</p>
              <h2 className="section__title">
                Tools I reach for
                <em> every day</em>
              </h2>
            </div>

            <div className="skills__grid">
              {skillGroups.map((group, index) => (
                <div
                  className="skill-group"
                  key={group.title}
                  data-reveal
                  style={{ '--delay': `${index * 70}ms` }}
                >
                  <div className="skill-group__head">
                    <h3>{group.title}</h3>
                    <span>{String(group.items.length).padStart(2, '0')}</span>
                  </div>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section__inner education__layout">
            <div data-reveal>
              <div className="section__head">
                <p className="section__label">Education</p>
                <h2 className="section__title">Background</h2>
              </div>
              <ul className="edu-list">
                {education.map((item) => (
                  <li key={item.school}>
                    <div>
                      <h3>{item.school}</h3>
                      <p>
                        {item.degree}
                        {item.detail ? ` · ${item.detail}` : ''}
                      </p>
                    </div>
                    <span>{item.period}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div data-reveal style={{ '--delay': '100ms' }}>
              <div className="section__head">
                <p className="section__label">Achievements</p>
                <h2 className="section__title">Highlights</h2>
              </div>
              <ul className="achieve-list">
                {achievements.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer">
                        <strong>{item.label}</strong>
                        <span>{item.detail}</span>
                      </a>
                    ) : (
                      <>
                        <strong>{item.label}</strong>
                        <span>{item.detail}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="section__inner contact__panel" data-reveal>
            <div className="contact__copy">
              <p className="section__label">Contact</p>
              <h2 className="contact__title">
                Let&apos;s build something
                <em> worth shipping</em>
              </h2>
              <p className="contact__lead">
                Open to software engineering roles across backend, full-stack,
                and ML-integrated product work.
              </p>
            </div>

            <div className="contact__actions">
              <a className="btn btn--primary btn--wide" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn btn--ghost btn--wide" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
              <ul className="contact__links">
                <li>
                  <a href={profile.links.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={profile.links.leetcode} target="_blank" rel="noreferrer">
                    LeetCode
                  </a>
                </li>
                <li>
                  <a href={profile.links.codechef} target="_blank" rel="noreferrer">
                    CodeChef
                  </a>
                </li>
                <li>
                  <a href={profile.links.codeforces} target="_blank" rel="noreferrer">
                    Codeforces
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  )
}

export default App
