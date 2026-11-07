import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Logo from './Logo'
import Button from './Button'
import ThemeToggle from './ThemeToggle'
import MobileMenu from './MobileMenu'
import { navLinks } from '../data/nav'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 24, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      // At the very bottom of the page the observer band sits past the last
      // section — pin the final nav item instead of leaving a stale one.
      const bottom = window.innerHeight + window.scrollY
      if (bottom >= document.documentElement.scrollHeight - 2) {
        setActiveId('contact')
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Scroll-spy: highlight the section currently in view.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null)
    if (sections.length === 0) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        }
      },
      { rootMargin: '-42% 0px -55% 0px', threshold: 0 },
    )
    for (const section of sections) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  const elevated = scrolled || menuOpen

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-500 ${
          elevated
            ? 'border-line bg-abyss/75 backdrop-blur-xl'
            : 'border-transparent bg-transparent'
        }`}
      >
        <div className="wrap relative flex h-[var(--nav-h)] items-center justify-between gap-4">
          <Logo />

          <nav
            aria-label="Primary"
            className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 lg:flex"
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="nav-link"
                data-active={activeId === link.id}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <Button href="#contact" showArrow={false} className="btn-nav-cta btn-sm">
              Start a Project
            </Button>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-linestrong text-ink transition-colors duration-300 hover:border-accent hover:text-accent lg:hidden"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="relative block h-5 w-5">
                <Menu
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? 'rotate-90 scale-50 opacity-0' : 'rotate-0 scale-100 opacity-100'
                  }`}
                />
                <X
                  size={20}
                  strokeWidth={2}
                  aria-hidden="true"
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-50 opacity-0'
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll progress — thin emerald hairline along the header's lower edge */}
        <motion.div
          aria-hidden="true"
          className="absolute bottom-0 left-0 h-[2px] w-full bg-accent/90"
          style={{ scaleX: progress, transformOrigin: '0% 50%' }}
        />
      </header>

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeId={activeId}
        triggerRef={toggleRef}
      />
    </>
  )
}
