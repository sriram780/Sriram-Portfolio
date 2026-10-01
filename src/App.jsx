import { useEffect, useMemo, useState } from 'react'
import './App.css'
import {
  certifications,
  education,
  internship,
  navItems,
  profile,
  projects,
  skillGroups,
} from './data'

function App() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('work')
  const [pos, setPos] = useState({ x: 200, y: 160 })

  const ticker = useMemo(
    () => [...skillGroups.flatMap((group) => group.items), ...skillGroups.flatMap((group) => group.items)],
    [],
  )

  useEffect(() => {
    const onScroll = () => {
      const ids = ['work', 'about', 'skills', 'path', 'contact']
      const current = ids.findLast((id) => {
        const el = document.getElementById(id)
        return el && el.getBoundingClientRect().top < 140
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="site"
      onMouseMove={(event) => setPos({ x: event.clientX, y: event.clientY })}
    >
      <div className="glow" style={{ left: pos.x, top: pos.y }} />
      <div className="grain" />

      <header className="nav">
        <a className="brand" href="#top">
          <span className="mark">SK</span>
          <span className="brand-meta">
            <strong>{profile.shortName}</strong>
            <span>{profile.role}</span>
          </span>
        </a>
        <button className="menu-btn" type="button" onClick={() => setOpen((v) => !v)}>
          {open ? 'Close' : 'Menu'}
        </button>
        <nav className={`nav-links ${open ? 'open' : ''}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'active' : ''}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a className="nav-cta" href={profile.phoneHref}>
          Call
        </a>
      </header>

      <section className="hero" id="top">
        <div>
          <p className="kicker">
            <span className="dot" />
            {profile.availability}
          </p>
          <h1 className="display">
            Naga Sai
            <br />
            Pavan Sriram
            <br />
            <em>Koripalli</em>
          </h1>
          <p className="role-line">{profile.role} · B.Tech CSE · 2023–2027</p>
          <p className="lede">
            CSE student in {profile.location}. I design REST APIs, Spring Boot
            services, and React interfaces that stay clear and usable.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#work">
              See selected work
            </a>
            <a className="btn btn-ghost" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
        <aside className="hero-card">
          <h3>Now</h3>
          <div className="stat-row">
            <div className="stat">
              <b>2027</b>
              <span>CSE graduate </span>
            </div>
            <div className="stat">
              <b>Java</b>
              <span>Spring · MySQL · React</span>
            </div>
            <div className="stat">
              <b>02</b>
              <span>Featured projects</span>
            </div>
          </div>
        </aside>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {ticker.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>

      <section className="section" id="work">
        <div className="section-head">
          <div>
            <p className="kicker">Projects</p>
            <h2>Selected work</h2>
          </div>
          <p>Two systems that show how I think about APIs, access control, data, and dashboards.</p>
        </div>
        <div className="projects">
          {projects.map((project) => (
            <article className="project" key={project.id}>
              <div className="project-index">{project.index}</div>
              <div>
                <span className="project-tag">{project.tag}</span>
                <h3>{project.name}</h3>
                <h4>{project.subtitle}</h4>
                <ul>
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="chips">
                  {project.stack.map((tech) => (
                    <span className="chip" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-head">
          <div>
            <p className="kicker">Profile</p>
            <h2>About</h2>
          </div>
        </div>
        <div className="about-grid">
          <p className="about-copy">{profile.summary}</p>
          <div className="panel">
            <h3>{education.degree}</h3>
            <p className="edu-meta">
              {education.school}
              <br />
              {education.place}
            </p>
            <div className="cgpa">
              <span>{education.years}</span>
              <strong>CGPA {education.cgpa}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-head">
          <div>
            <p className="kicker">Toolkit</p>
            <h2>Skills</h2>
          </div>
          <p>A practical Java full stack stack, from collections and JDBC to Spring Boot and React.</p>
        </div>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="path">
        <div className="section-head">
          <div>
            <p className="kicker">Growth</p>
            <h2>Training & credentials</h2>
          </div>
        </div>
        <div className="timeline">
          <article className="time-item">
            <time>{internship.date}</time>
            <div>
              <h3>{internship.role}</h3>
              <p>{internship.org}</p>
            </div>
          </article>
          {certifications.map((item) => (
            <article className="time-item" key={item.title}>
              <time>{item.date}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.org}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="contact">
        <div className="section-head">
          <div>
            <p className="kicker">Next</p>
            <h2>Let’s build something sturdy.</h2>
          </div>
          <p>Seeking an entry-level Java Full Stack Developer role. Reach out by mail, phone, GitHub, or LinkedIn.</p>
        </div>
        <div className="contact">
          <div className="panel">
            <h3>Based in {profile.location}</h3>
            <p className="edu-meta">
              Available for internships, junior roles, and collaborative product work.
            </p>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              Write an email
            </a>
          </div>
          <div className="contact-links">
            <a href={profile.phoneHref}>
              Phone <span>{profile.phone}</span>
            </a>
            <a href={`mailto:${profile.email}`}>
              Email <span>{profile.email}</span>
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer">
              GitHub <span>sriram780</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn <span>Sriram Koripalli</span>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.shortName}</span>
        <span>Built with React</span>
      </footer>
    </div>
  )
}

export default App
