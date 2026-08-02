import { useEffect, useRef, useState } from 'react'
import {
  achievements,
  education,
  profile,
  projects,
  skillGroups,
} from './data'
import './App.css'

const NAV = [
  { href: '#about', id: 'about', label: 'About' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#skills', id: 'skills', label: 'Skills' },
  { href: '#education', id: 'education', label: 'Education' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const MARQUEE = [
  'React',
  'Spring Boot',
  'Java',
  'REST APIs',
  'MySQL',
  'Redis',
  'MongoDB',
  'Nginx',
  'Swagger UI',
  'JWT',
  'Docker',
  'DSA',
]

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')
  const pageRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
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

  useEffect(() => {
    const els = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    const spy = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (hit?.target?.id) setActive(hit.target.id)
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.15, 0.4] },
    )
    els.forEach((el) => spy.observe(el))
    return () => spy.disconnect()
  }, [])

  useEffect(() => {
    const root = pageRef.current
    if (!root) return undefined
    const nodes = root.querySelectorAll('[data-reveal]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
    )
    nodes.forEach((n) => obs.observe(n))
    return () => obs.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="page" ref={pageRef}>
      <div className="progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className={`nav ${scrolled || menuOpen ? 'is-solid' : ''}`}>
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          <span className="nav__mark">SV</span>
          <span className="nav__name">{profile.firstName}</span>
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
          {NAV.map((item) => (
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
          <div className="hero__bg" aria-hidden="true">
            <div className="hero__orb hero__orb--a" />
            <div className="hero__orb hero__orb--b" />
            <div className="hero__mesh" />
          </div>
          <div className="hero__portrait" aria-hidden="true">
            <img src={profile.photo} alt="" className="hero__photo" />
            <div className="hero__fade" />
          </div>
          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="hero__pulse" />
              Available for software roles
            </p>
            <h1 className="hero__name">
              <span>{profile.firstName}</span>
              <span className="hero__last">{profile.lastName}</span>
            </h1>
            <p className="hero__tagline">{profile.tagline}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#projects">
                See my work <span aria-hidden="true">→</span>
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
          <a className="hero__scroll" href="#about" aria-label="Scroll">
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

        <section className="section about" id="about">
          <div className="wrap">
            <div className="about__grid">
              <div data-reveal>
                <p className="label">About</p>
                <h2 className="title">
                  React frontend.
                  <br />
                  <em>Spring Boot backend.</em>
                </h2>
              </div>
              <p className="about__text" data-reveal>
                {profile.summary}
              </p>
            </div>
            <ul className="stats">
              {[
                ['750+', 'DSA problems'],
                ['20+', 'REST endpoints'],
                ['4', 'featured projects'],
                ['1616', 'CodeChef · 3★'],
              ].map(([v, l]) => (
                <li key={l} data-reveal>
                  <strong>{v}</strong>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section projects" id="projects">
          <div className="wrap">
            <div className="head" data-reveal>
              <p className="label">Projects</p>
              <h2 className="title">Selected work</h2>
              <p className="lead">
                Full-stack builds with Spring Boot APIs and React interfaces.
              </p>
            </div>
            <div className="project-list">
              {projects.map((p, i) => (
                <article className="project" key={p.name} data-reveal>
                  <div className="project__rail">
                    <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                    <span className="project__date">{p.period}</span>
                  </div>
                  <div className="project__body">
                    <div className="project__top">
                      <h3>
                        <a href={p.url} target="_blank" rel="noreferrer">
                          {p.name} <span>↗</span>
                        </a>
                      </h3>
                      <a className="project__link" href={p.url} target="_blank" rel="noreferrer">
                        Open repo
                      </a>
                    </div>
                    <ul className="project__points">
                      {p.highlights.map((h) => (
                        <li key={h}>{h}</li>
                      ))}
                    </ul>
                    <ul className="tags">
                      {p.stack.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills" id="skills">
          <div className="wrap">
            <div className="head" data-reveal>
              <p className="label">Skills</p>
              <h2 className="title">
                Stack I ship with <em>daily</em>
              </h2>
            </div>
            <div className="skills__grid">
              {skillGroups.map((g, i) => (
                <div className="skill" key={g.title} data-reveal>
                  <div className="skill__head">
                    <h3>{g.title}</h3>
                    <span>{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <ul>
                    {g.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section education" id="education">
          <div className="wrap education__grid">
            <div data-reveal>
              <p className="label">Education</p>
              <h2 className="title">Background</h2>
              <ul className="edu">
                {education.map((e) => (
                  <li key={e.school}>
                    <div>
                      <h3>{e.school}</h3>
                      <p>
                        {e.degree}
                        {e.detail ? ` · ${e.detail}` : ''}
                      </p>
                    </div>
                    <span>{e.period}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div data-reveal>
              <p className="label">Achievements</p>
              <h2 className="title">Highlights</h2>
              <ul className="achieve">
                {achievements.map((a) => (
                  <li key={a.label}>
                    {a.href ? (
                      <a href={a.href} target="_blank" rel="noreferrer">
                        <strong>{a.label}</strong>
                        <span>{a.detail}</span>
                      </a>
                    ) : (
                      <>
                        <strong>{a.label}</strong>
                        <span>{a.detail}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap contact__panel" data-reveal>
            <div>
              <p className="label">Contact</p>
              <h2 className="contact__title">
                Let&apos;s build something <em>worth shipping</em>
              </h2>
              <p className="lead">
                Open to roles across React, Spring Boot, and full-stack product work.
              </p>
            </div>
            <div className="contact__actions">
              <a className="btn btn--primary btn--wide" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn btn--ghost btn--wide" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
              <ul className="social">
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
