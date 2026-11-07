import { Layers, PenTool, Cpu, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import SectionHeader from './SectionHeader'

interface Principle {
  index: string
  title: string
  description: string
  icon: LucideIcon
  /** Editorial weight on desktop — wider cells carry slightly larger type. */
  span: 'wide' | 'narrow'
}

const principles: Principle[] = [
  {
    index: '01',
    title: 'Thoughtful Design',
    description:
      'Every interface is designed with purpose, clarity, and usability in mind.',
    icon: PenTool,
    span: 'wide',
  },
  {
    index: '02',
    title: 'Modern Technology',
    description:
      'We use modern development practices to build reliable digital experiences.',
    icon: Cpu,
    span: 'narrow',
  },
  {
    index: '03',
    title: 'User-Centred Approach',
    description:
      'We focus on how people interact with products, not just how interfaces look.',
    icon: Users,
    span: 'narrow',
  },
  {
    index: '04',
    title: 'From Concept to Completion',
    description:
      'Design and development work together to bring ideas into functional products.',
    icon: Layers,
    span: 'wide',
  },
]

export default function WhyPixelSync() {
  return (
    <section id="why" className="section section-line-top" aria-labelledby="why-heading">
      <div className="wrap flex flex-col gap-14">
        <SectionHeader
          index="05"
          eyebrow="Why PixelSync"
          headingId="why-heading"
          layout="split"
          title={
            <>
              Design Meets<br />
              <span className="text-accent">Development.</span>
            </>
          }
          supporting="Design and engineering are not separate phases here — they shape the same decisions, together."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {principles.map((principle) => {
            const Icon = principle.icon
            const spanClass =
              principle.span === 'wide' ? 'lg:col-span-7' : 'lg:col-span-5'
            return (
              <article
                key={principle.index}
                className={`card group relative flex min-h-[13.5rem] flex-col justify-between gap-6 overflow-hidden p-6 sm:p-7 ${spanClass}`}
              >
                {/* Oversized index watermark */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-5 right-2 select-none font-display text-[6.5rem] font-bold leading-none tracking-tighter text-ink/[0.035] transition-colors duration-500 group-hover:text-accent/[0.08]"
                >
                  {principle.index}
                </span>

                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accentsoft text-accent transition-all duration-500 group-hover:border-accent/40 group-hover:shadow-[0_0_28px_rgba(0,229,160,0.18)]">
                    <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[0.68rem] font-semibold tracking-[0.28em] text-faint">
                    {principle.index}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="font-display text-[1.35rem] font-semibold tracking-tight text-ink sm:text-[1.45rem]">
                    {principle.title}
                  </h3>
                  <p className="max-w-md text-[0.93rem] leading-relaxed text-dim">
                    {principle.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>

        {/* The three pillars, said plainly */}
        <div
          aria-hidden="true"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-line pt-10 font-display text-[clamp(1rem,3.4vw,1.55rem)] font-semibold uppercase tracking-[0.08em] text-faint"
        >
          <span>Design</span>
          <span className="h-2 w-2 rounded-sm bg-accent" />
          <span>Technology</span>
          <span className="h-2 w-2 rounded-sm bg-accent" />
          <span>Execution</span>
        </div>
      </div>
    </section>
  )
}
