import { useEffect, useRef } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, MapPin } from 'lucide-react'
import { navLinks } from '../data/nav'
import { InstagramIcon } from './icons'

interface MobileMenuProps {
  open: boolean
  onClose: () => void
  /** Id of the section currently in view, used to mark the active link. */
  activeId: string
  /** Element that opened the menu — focus returns to it on close. */
  triggerRef: React.RefObject<HTMLButtonElement | null>
}

export default function MobileMenu({ open, onClose, activeId, triggerRef }: MobileMenuProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) return undefined

    const root = document.documentElement
    const previousOverflow = root.style.overflow
    root.style.overflow = 'hidden'
    firstLinkRef.current?.focus()

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        triggerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      root.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose, triggerRef])

  const handleNavigate = () => {
    onClose()
    triggerRef.current?.focus()
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-40 flex flex-col bg-abyss/95 backdrop-blur-xl lg:hidden"
          style={{ paddingTop: 'var(--nav-h)' }}
          initial={{ opacity: 0, y: reduceMotion ? 0 : -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduceMotion ? 0 : -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <nav
            aria-label="Mobile navigation"
            className="flex flex-1 flex-col justify-between overflow-y-auto px-6 pb-8 pt-8"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link, index) => {
                const active = link.id === activeId
                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: reduceMotion ? 0 : -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      delay: reduceMotion ? 0 : 0.06 + index * 0.06,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <a
                      ref={index === 0 ? firstLinkRef : undefined}
                      href={link.href}
                      onClick={handleNavigate}
                      aria-current={active ? 'true' : undefined}
                      className={`group flex items-baseline gap-4 border-b border-line py-4 transition-colors duration-300 ${
                        active ? 'text-accent' : 'text-ink'
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className="font-sans text-[0.65rem] font-semibold tracking-[0.2em] text-faint"
                      >
                        0{index + 1}
                      </span>
                      <span className="font-display text-[clamp(1.6rem,6.5vw,2.35rem)] font-semibold tracking-tight">
                        {link.label}
                      </span>
                      <ArrowRight
                        aria-hidden="true"
                        size={20}
                        className="ml-auto self-center opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                      />
                    </a>
                  </motion.li>
                )
              })}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.32, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-5 pt-8"
            >
              <a
                href="#contact"
                onClick={handleNavigate}
                className="btn btn-primary w-full"
              >
                Start a Project
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2.25} className="btn-arrow" />
              </a>
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-dim">
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} aria-hidden="true" className="text-accent" />
                  Kerala, India
                </span>
                <a
                  href="https://www.instagram.com/pixelsyncweb/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 font-medium text-dim transition-colors duration-300 hover:text-accent"
                >
                  <InstagramIcon size={15} aria-hidden="true" />
                  @pixelsyncweb
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </div>
            </motion.div>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
