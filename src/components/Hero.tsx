import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import Button from './Button'
import { PixelMark } from './Logo'

const EASE = [0.22, 1, 0.36, 1] as const

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-linestrong bg-surface/70 px-3 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
      </span>
      <span className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-dim">
        {children}
      </span>
    </span>
  )
}

/* -------- Decorative, non-informational product showcase -------- */

function BrowserFrame() {
  return (
    <div className="overflow-hidden rounded-xl border border-linestrong bg-surface shadow-[var(--shadow-card)]">
      {/* Title bar */}
      <div className="flex items-center gap-3 border-b border-line bg-panel px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <i className="h-2.5 w-2.5 rounded-full bg-faint/60" />
          <i className="h-2.5 w-2.5 rounded-full bg-faint/40" />
          <i className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        </span>
        <span className="mx-auto flex items-center gap-1.5 rounded-md border border-line bg-surface px-3 py-1 font-mono text-[10px] text-dim">
          pixelsync/home
        </span>
        <span className="w-8" aria-hidden="true" />
      </div>
      {/* Page canvas */}
      <div className="space-y-4 p-4 sm:p-5">
        {/* Mini nav */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <PixelMark size={14} />
            <span className="h-1.5 w-14 rounded-full bg-linestrong" />
          </span>
          <span className="flex gap-2">
            <span className="h-1.5 w-8 rounded-full bg-line" />
            <span className="h-1.5 w-8 rounded-full bg-line" />
            <span className="h-1.5 w-8 rounded-full bg-accent/80" />
          </span>
        </div>
        {/* Mini hero */}
        <div className="space-y-2.5 py-1">
          <span className="block h-2 w-24 rounded-full bg-accent/25" />
          <span className="block h-4 w-4/5 rounded-md bg-linestrong" />
          <span className="block h-4 w-3/5 rounded-md bg-linestrong" />
          <span className="block h-4 w-2/5 rounded-md bg-accent/85" />
          <span className="block h-1.5 w-11/12 rounded-full bg-line" />
          <span className="block h-1.5 w-9/12 rounded-full bg-line" />
        </div>
        <div className="flex gap-2.5">
          <span className="h-6 w-20 rounded-md bg-accent" />
          <span className="h-6 w-20 rounded-md border border-linestrong" />
        </div>
        {/* Mini cards */}
        <div className="grid grid-cols-3 gap-2.5">
          {[0, 1, 2].map((i) => (
            <span key={i} className="space-y-1.5 rounded-lg border border-line bg-panel p-2.5">
              <span className="block h-5 w-5 rounded-md bg-accent/20" />
              <span className="block h-1.5 w-11/12 rounded-full bg-linestrong" />
              <span className="block h-1.5 w-8/12 rounded-full bg-line" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function PaletteChip() {
  return (
    <div className="w-32 rounded-xl border border-linestrong bg-panel/95 p-3 shadow-[var(--shadow-card)] backdrop-blur-md">
      <p className="mb-2 font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-faint">
        Tokens
      </p>
      <ul className="space-y-1.5">
        {[
          ['#00E5A0', 'var(--accent)'],
          ['#14171A', '#14171a'],
          ['#E9ECEF', '#e9ecef'],
        ].map(([hex, swatch]) => (
          <li key={hex} className="flex items-center gap-1.5">
            <span
              className="h-3.5 w-3.5 rounded-full border border-white/10"
              style={{ background: swatch }}
            />
            <span className="font-mono text-[8.5px] text-dim">{hex}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function CodeChip() {
  return (
    <div className="rounded-xl border border-linestrong bg-abyss/95 px-3.5 py-2.5 font-mono text-[9.5px] leading-relaxed shadow-[var(--shadow-card)] backdrop-blur-md">
      <p className="text-faint">component</p>
      <p>
        <span className="text-accent">&lt;Button</span>
        <span className="text-ink"> variant=</span>
        <span className="text-accent">&quot;primary&quot;</span>
        <span className="text-accent"> /&gt;</span>
      </p>
    </div>
  )
}

function WireframeChip() {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-linestrong bg-panel/95 px-3 py-2.5 shadow-[var(--shadow-card)] backdrop-blur-md">
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden="true">
        <circle cx="15" cy="9" r="4.5" stroke="var(--accent)" strokeWidth="1.6" />
        <path d="M4 27c1.5-5 6-7.5 11-7.5S24.5 22 26 27" stroke="var(--accent)" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="24.5" cy="5.5" r="2" fill="var(--accent)" fillOpacity="0.35" stroke="var(--accent)" strokeWidth="1.2" />
      </svg>
      <span className="flex flex-col leading-tight">
        <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.22em] text-faint">user flow</span>
        <span className="text-[10px] font-semibold text-ink">discover → ship</span>
      </span>
    </div>
  )
}

function CursorArrow({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" className={className} aria-hidden="true">
      <path
        d="M5 3l14.5 9.2-6.3 1.1L9 19z"
        fill="#e9ecef"
        stroke="#0b0d0f"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Showcase() {
  const reduceMotion = useReducedMotion()
  const float = (duration: number, delay = 0) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -12, 0] },
          transition: { duration, delay, repeat: Infinity, ease: 'easeInOut' as const },
        }

  return (
    <div className="relative mx-auto mt-4 w-full max-w-[26rem] sm:max-w-md lg:mt-0 lg:max-w-none" aria-hidden="true">
      {/* Ambient emerald glow behind the composition */}
      <div className="glow-orb left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 sm:h-96 sm:w-96" />

      <motion.div
        className="relative"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.45, ease: EASE }}
      >
        {/* Main browser window */}
        <motion.div className="relative z-10 ml-0 w-[88%] lg:w-[92%]" {...float(7)}>
          <BrowserFrame />
        </motion.div>

        {/* Floating chips */}
        <motion.div className="absolute -right-1 top-[8%] z-20 sm:right-2" {...float(6, 0.6)}>
          <PaletteChip />
        </motion.div>
        <motion.div className="absolute -left-1 bottom-[30%] z-20 sm:left-[4%]" {...float(8, 1.4)}>
          <WireframeChip />
        </motion.div>
        <motion.div className="absolute bottom-[6%] right-[2%] z-20 sm:right-[8%]" {...float(6.5, 0.9)}>
          <CodeChip />
        </motion.div>

        {/* Cursor accent */}
        <motion.div className="absolute right-[30%] top-[46%] z-20 drop-shadow-[0_6px_12px_rgba(0,0,0,0.45)]" {...float(5, 1.8)}>
          <CursorArrow className="-rotate-6" />
        </motion.div>

        {/* Corner registration marks */}
        <span className="absolute -left-3 top-[14%] h-4 w-4 border-l border-t border-accent/50" />
        <span className="absolute -right-3 bottom-[10%] h-4 w-4 border-b border-r border-accent/50" />
      </motion.div>
    </div>
  )
}

/* -------- Section -------- */

export default function Hero() {
  const reduceMotion = useReducedMotion()

  const reveal = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  })

  const lineReveal = (delay: number) => ({
    initial: reduceMotion ? { y: 0 } : { y: '112%' },
    animate: { y: '0%' },
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-abyss"
    >
      {/* Backdrop: technical grid + ambient light */}
      <div className="grid-bg grid-fade pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="glow-orb -top-24 left-[-10rem] h-96 w-96 opacity-60"
        aria-hidden="true"
        style={{ background: 'radial-gradient(circle at center, rgba(0,229,160,0.09) 0%, transparent 70%)' }}
      />

      <div className="wrap relative z-10 grid min-h-[100svh] grid-cols-1 items-center gap-10 pb-20 pt-[calc(var(--nav-h)+1.5rem)] sm:gap-12 sm:pt-[calc(var(--nav-h)+2rem)] lg:grid-cols-12 lg:gap-8 lg:pb-14">
        {/* Copy column */}
        <div className="flex flex-col items-start gap-7 lg:col-span-7 lg:gap-9">
          <motion.div {...reveal(0)}>
            <Pill>Digital Design &amp; Development Studio</Pill>
          </motion.div>

          <h1
            id="hero-heading"
            className="h-display text-[clamp(2.9rem,10.5vw,5.35rem)] font-bold uppercase leading-[0.98] sm:text-[clamp(3.4rem,9vw,5.6rem)]"
          >
            {[
              <span key="l1" className="block overflow-hidden pb-1">
                <motion.span className="block" {...lineReveal(0.1)}>
                  We Design &amp;
                </motion.span>
              </span>,
              <span key="l2" className="block overflow-hidden pb-1">
                <motion.span className="block" {...lineReveal(0.22)}>
                  <em className="not-italic text-accent">Build</em> Digital
                </motion.span>
              </span>,
              <span key="l3" className="block overflow-hidden pb-2">
                <motion.span className="block" {...lineReveal(0.34)}>
                  Products<span className="text-accent">.</span>
                </motion.span>
              </span>,
            ]}
          </h1>

          <motion.p
            {...reveal(0.42)}
            className="max-w-md text-[1.08rem] leading-relaxed text-dim sm:text-[1.15rem]"
          >
            Websites, web apps, and thoughtful UI/UX — built with modern
            technology and designed around the people who use them.
          </motion.p>

          <motion.div {...reveal(0.54)} className="flex flex-wrap items-center gap-3 sm:gap-4">
            <Button href="#contact">Start a Project</Button>
            <Button href="#services" variant="ghost" showArrow={false}>
              Explore Our Services
            </Button>
          </motion.div>

          <motion.div
            {...reveal(0.66)}
            className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-5 text-[0.82rem] text-dim"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} aria-hidden="true" className="text-accent" />
              Kerala, India
            </span>
            <span aria-hidden="true" className="h-1 w-1 rounded-full bg-faint" />
            <span className="text-faint">Web Design · Web Apps · UI/UX · Full-Stack</span>
          </motion.div>
        </div>

        {/* Visual column */}
        <div className="lg:col-span-5">
          <Showcase />
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="scroll-cue absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-faint transition-colors duration-300 hover:text-accent md:flex"
      >
        <span className="text-[0.6rem] font-semibold uppercase tracking-[0.35em]">Scroll</span>
        <motion.span
          aria-hidden="true"
          className="flex h-9 w-6 items-start justify-center rounded-full border border-linestrong p-1.5"
        >
          <motion.span
            className="h-1.5 w-1.5 rounded-full bg-accent"
            animate={reduceMotion ? {} : { y: [0, 12, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.span>
        <ArrowDown size={12} aria-hidden="true" />
      </a>
    </section>
  )
}
