import { useEffect, useState } from 'react'
import {
  achievements,
  education,
  profile,
  projects,
  skillGroups,
} from './data'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
    <div className="page">
      <div className="grain" aria-hidden="true" />

      <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <a className="nav__brand" href="#top" onClick={closeMenu}>
          SV
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
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
          <a href="#contact" className="nav__cta" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__media" aria-hidden="true">
            <img src={profile.photo} alt="" className="hero__photo" />
            <div className="hero__veil" />
          </div>

          <div className="hero__content">
            <p className="hero__eyebrow reveal">Software Engineer · Panna, MP</p>
            <h1 className="hero__name reveal reveal--delay-1">
              <span className="hero__first">{profile.firstName}</span>
              <span className="hero__last">{profile.lastName}</span>
            </h1>
            <p className="hero__tagline reveal reveal--delay-2">
              {profile.tagline}
            </p>
            <div className="hero__actions reveal reveal--delay-3">
              <a className="btn btn--primary" href="#projects">
                View work
              </a>
              <a className="btn btn--ghost" href={`mailto:${profile.email}`}>
                Email me
              </a>
            </div>
          </div>

          <a className="hero__scroll" href="#about" aria-label="Scroll to about">
            <span />
          </a>
        </section>

        <section id="about" className="section about">
          <div className="section__inner">
            <div className="section__head">
              <p className="section__label">About</p>
              <h2 className="section__title">Engineer who ships the whole stack</h2>
            </div>
            <p className="about__text">{profile.summary}</p>
            <ul className="about__stats">
              <li>
                <strong>750+</strong>
                <span>DSA problems</span>
              </li>
              <li>
                <strong>9</strong>
                <span>services in RankEngine</span>
              </li>
              <li>
                <strong>5</strong>
                <span>featured projects</span>
              </li>
              <li>
                <strong>3★</strong>
                <span>CodeChef · 1616</span>
              </li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section projects">
          <div className="section__inner">
            <div className="section__head">
              <p className="section__label">Projects</p>
              <h2 className="section__title">Selected work</h2>
              <p className="section__lead">
                Microservices, NLP pipelines, and AI-assisted product surfaces —
                built end to end.
              </p>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <article className="project" key={project.name}>
                  <div className="project__meta">
                    <span className="project__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="project__period">{project.period}</span>
                  </div>
                  <div className="project__body">
                    <h3 className="project__name">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {project.name}
                        <span className="project__arrow" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    </h3>
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
            <div className="section__head">
              <p className="section__label">Skills</p>
              <h2 className="section__title">Tools I reach for</h2>
            </div>
            <div className="skills__grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <p>{group.items.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="section education">
          <div className="section__inner education__layout">
            <div>
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

            <div>
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
          <div className="section__inner contact__inner">
            <p className="section__label">Contact</p>
            <h2 className="contact__title">
              Let&apos;s build something
              <em> worth shipping</em>
            </h2>
            <p className="contact__lead">
              Open to software engineering roles across backend, full-stack, and
              ML-integrated product work.
            </p>
            <div className="contact__actions">
              <a className="btn btn--primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn btn--ghost" href={`tel:${profile.phone}`}>
                {profile.phone}
              </a>
            </div>
            <ul className="contact__links">
              <li>
                <a href={profile.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={profile.links.leetcode}
                  target="_blank"
                  rel="noreferrer"
                >
                  LeetCode
                </a>
              </li>
              <li>
                <a
                  href={profile.links.codechef}
                  target="_blank"
                  rel="noreferrer"
                >
                  CodeChef
                </a>
              </li>
              <li>
                <a
                  href={profile.links.codeforces}
                  target="_blank"
                  rel="noreferrer"
                >
                  Codeforces
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#top">Back to top</a>
      </footer>
    </div>
  )
}

export default App
