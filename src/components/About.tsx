import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeftRight, Check, MapPin } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

/** Decorative "design meets technology" artwork built from interface fragments. */
function DesignTechArtwork() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full max-w-lg">
      <div className="grid-bg relative rounded-2xl border border-linestrong bg-abyss p-4 sm:p-6">
        {/* Corner registration marks */}
        <span className="absolute -left-px -top-px h-5 w-5 rounded-tl-2xl border-l-2 border-t-2 border-accent/70" />
        <span className="absolute -right-px -top-px h-5 w-5 rounded-tr-2xl border-r-2 border-t-2 border-accent/70" />
        <span className="absolute -bottom-px -left-px h-5 w-5 rounded-bl-2xl border-b-2 border-l-2 border-accent/70" />
        <span className="absolute -bottom-px -right-px h-5 w-5 rounded-br-2xl border-b-2 border-r-2 border-accent/70" />

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Design tool panel */}
          <figure className="overflow-hidden rounded-xl border border-line bg-surface">
            <div className="flex items-center justify-between border-b border-line px-3 py-2">
              <span className="flex gap-1">
                <i className="h-1.5 w-1.5 rounded-full bg-faint/70" />
                <i className="h-1.5 w-1.5 rounded-full bg-faint/50" />
                <i className="h-1.5 w-1.5 rounded-full bg-accent/80" />
              </span>
              <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-faint">Canvas</span>
            </div>
            <div className="space-y-2 p-3">
              <div className="flex items-center gap-1.5">
                <span className="h-4 w-4 rounded-sm bg-accent/90" />
                <span className="h-1.5 w-10 rounded-full bg-linestrong" />
              </div>
              <div className="rounded-md border border-accent/60 p-1.5">
                <div className="h-2 w-full rounded-sm bg-linestrong" />
                <div className="mt-1 h-2 w-4/5 rounded-sm bg-line" />
              </div>
              <div className="flex gap-1.5">
                <div className="h-6 flex-1 rounded-sm bg-panel" />
                <div className="h-6 flex-1 rounded-sm bg-panel" />
              </div>
              <div className="flex items-center justify-between">
                <span className="h-1.5 w-9 rounded-full bg-line" />
                <span className="h-3.5 w-7 rounded-sm border border-accent bg-accent/20" />
              </div>
            </div>
          </figure>

          {/* Code panel */}
          <figure className="overflow-hidden rounded-xl border border-line bg-[#0d1116]">
            <div className="flex items-center justify-between border-b border-white/5 px-3 py-2">
              <span className="flex gap-1">
                <i className="h-1.5 w-1.5 rounded-full bg-white/15" />
                <i className="h-1.5 w-1.5 rounded-full bg-white/15" />
                <i className="h-1.5 w-1.5 rounded-full bg-[#00e5a0]/70" />
              </span>
              <span className="font-mono text-[7px] uppercase tracking-[0.28em] text-white/30">Build</span>
            </div>
            <div className="space-y-[7px] p-3 font-mono text-[8px] leading-none">
              <div><span className="text-[#00e5a0]/90">const</span> <span className="text-white/85">page</span> <span className="text-white/35">=</span> <span className="text-[#00e5a0]/90">render</span><span className="text-white/85">()</span></div>
              <div className="pl-3"><span className="text-white/35">layout:</span> <span className="text-[#00e5a0]/90">&quot;system&quot;</span><span className="text-white/35">,</span></div>
              <div className="pl-3"><span className="text-white/35">motion:</span> <span className="text-[#00e5a0]/90">&quot;purpose&quot;</span><span className="text-white/35">,</span></div>
              <div className="pl-3"><span className="text-white/35">a11y:</span> <span className="text-[#00e5a0]/90">&quot;always&quot;</span></div>
              <div className="pl-3"><span className="text-white/35">ship:</span> <span className="text-[#00e5a0]/90">true</span><span className="text-white/35">,</span></div>
              <div className="pt-1.5"><span className="text-white/35">export</span> <span className="text-white/85">default</span> <span className="text-[#00e5a0]/90">page</span></div>
              <div className="flex items-center gap-1.5 border-t border-white/5 pt-1.5">
                <Check size={10} strokeWidth={3} className="text-[#00e5a0]" />
                <span className="text-white/45">build passed</span>
              </div>
            </div>
          </figure>
        </div>

        {/* Sync connector */}
        <div
          className="absolute left-1/2 top-[46%] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-abyss shadow-[0_0_30px_rgba(0,229,160,0.22)] sm:flex"
        >
          <ArrowLeftRight size={18} strokeWidth={2} className="text-accent" />
        </div>

        {/* Panel captions */}
        <div className="mt-4 flex items-center justify-between px-1">
          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-faint">Design</span>
          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-accent">PixelSync</span>
          <span className="font-mono text-[8px] font-semibold uppercase tracking-[0.3em] text-faint">Technology</span>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const reduceMotion = useReducedMotion()
  const reveal = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 34 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.8, delay, ease: EASE },
  })

  return (
    <section
      id="studio"
      className="section section-line-top section-abyss"
      aria-labelledby="studio-heading"
    >
      <div className="wrap grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <div className="flex flex-col gap-7 lg:col-span-6">
          <motion.div {...reveal(0)} className="flex flex-col gap-6">
            <span className="eyebrow">
              <span className="eyebrow-index">02</span>
              <span className="eyebrow-rule" aria-hidden="true" />
              Studio
            </span>
            <h2 id="studio-heading" className="h-display text-[clamp(2.4rem,4.6vw,3.6rem)]">
              More Than<br />
              Just Design<span className="text-accent">.</span>
            </h2>
          </motion.div>

          <motion.div {...reveal(0.12)} className="flex max-w-md flex-col gap-4 text-[1.02rem] leading-relaxed">
            <p className="text-ink/90">
              We&apos;re PixelSync — a digital design &amp; development studio
              focused on turning ideas into meaningful digital experiences.
            </p>
            <p className="text-dim">
              From UI/UX and modern websites to full-stack web applications, we
              combine thoughtful design with solid technology to build products
              that look good, feel intuitive, and work.
            </p>
          </motion.div>

          <motion.p
            {...reveal(0.2)}
            className="border-l-2 border-accent pl-5 font-display text-[1.15rem] font-medium leading-snug tracking-tight"
          >
            <span className="text-dim">Thoughtful design.</span>{' '}
            <span className="text-ink">Solid technology.</span>
            <br />
            <span className="text-accent">Meaningful experiences.</span>
          </motion.p>

          <motion.div {...reveal(0.28)} className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dim">
            <span className="inline-flex items-center gap-2 font-medium">
              <MapPin size={15} aria-hidden="true" className="text-accent" />
              Kerala, India
            </span>
            <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-faint sm:inline-block" />
            <a
              href="#contact"
              className="group inline-flex min-h-11 items-center font-semibold text-dim underline decoration-linestrong decoration-2 underline-offset-4 transition-colors duration-300 hover:text-accent hover:decoration-accent lg:min-h-0"
            >
              Work with us
            </a>
          </motion.div>
        </div>

        {/* Artwork */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 44, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
          className="lg:col-span-6"
        >
          <DesignTechArtwork />
        </motion.div>
      </div>
    </section>
  )
}
