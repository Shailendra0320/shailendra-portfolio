const nav = document.getElementById('nav')
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')
const progress = document.getElementById('progress')
const year = document.getElementById('year')

if (year) year.textContent = String(new Date().getFullYear())

const closeMenu = () => {
  menu?.classList.remove('is-open')
  burger?.classList.remove('is-open')
  nav?.classList.remove('is-open')
  if (burger) burger.setAttribute('aria-expanded', 'false')
  document.body.style.overflow = ''
}

burger?.addEventListener('click', () => {
  const open = !menu.classList.contains('is-open')
  menu.classList.toggle('is-open', open)
  burger.classList.toggle('is-open', open)
  nav.classList.toggle('is-open', open)
  burger.setAttribute('aria-expanded', String(open))
  document.body.style.overflow = open ? 'hidden' : ''
})

menu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu)
})

const onScroll = () => {
  const max = document.documentElement.scrollHeight - window.innerHeight
  const pct = max > 0 ? (window.scrollY / max) * 100 : 0
  if (progress) progress.style.width = `${pct}%`
  nav?.classList.toggle('is-solid', window.scrollY > 24)
}

window.addEventListener('scroll', onScroll, { passive: true })
onScroll()

const sections = ['about', 'projects', 'skills', 'education', 'contact']
  .map((id) => document.getElementById(id))
  .filter(Boolean)

const navLinks = [...document.querySelectorAll('[data-nav]')]

if (sections.length) {
  const spy = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (!visible) return
      navLinks.forEach((link) => {
        link.classList.toggle(
          'is-active',
          link.getAttribute('href') === `#${visible.target.id}`,
        )
      })
    },
    { rootMargin: '-35% 0px -45% 0px', threshold: [0.15, 0.4, 0.65] },
  )
  sections.forEach((section) => spy.observe(section))
}

const revealNodes = document.querySelectorAll('[data-reveal]')
if (revealNodes.length) {
  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-in')
        reveal.unobserve(entry.target)
      })
    },
    { threshold: 0.14, rootMargin: '0px 0px -8% 0px' },
  )
  revealNodes.forEach((node) => reveal.observe(node))
}
