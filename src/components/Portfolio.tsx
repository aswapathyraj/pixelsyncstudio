import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import Button from './Button'
import ProjectCard from './ProjectCard'
import { PixelMark } from './Logo'
import { projects } from '../data/projects'

const EASE = [0.22, 1, 0.36, 1] as const

export default function Portfolio() {
  const reduceMotion = useReducedMotion()
  const hasProjects = projects.length > 0

  return (
    <section
      id="work"
      className="section section-line-top section-abyss"
      aria-labelledby="work-heading"
    >
      <div className="wrap flex flex-col gap-14">
        <SectionHeader
          index="04"
          eyebrow="Work"
          headingId="work-heading"
          layout="split"
          title={
            <>
              Good Ideas Deserve<br />
              Great <span className="text-accent">Execution.</span>
            </>
          }
          supporting="Every project starts with an idea. We're building digital experiences that make those ideas real."
        />

        {hasProjects ? (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="grid-bg relative overflow-hidden rounded-2xl border border-dashed border-linestrong bg-panel/40 px-6 py-16 text-center sm:py-20"
          >
            {/* Blueprint corner ticks */}
            <span aria-hidden="true" className="absolute left-4 top-4 font-mono text-lg text-faint/60">+</span>
            <span aria-hidden="true" className="absolute right-4 top-4 font-mono text-lg text-faint/60">+</span>
            <span aria-hidden="true" className="absolute bottom-4 left-4 font-mono text-lg text-faint/60">+</span>
            <span aria-hidden="true" className="absolute bottom-4 right-4 font-mono text-lg text-faint/60">+</span>

            <div className="relative mx-auto flex max-w-lg flex-col items-center gap-6">
              <span className="flex h-20 w-20 items-center justify-center rounded-2xl border border-accent/25 bg-accentsoft">
                <PixelMark size={40} />
              </span>
              <p className="eyebrow justify-center">
                <span className="eyebrow-index">—</span>
                Case Studies, Coming Soon
              </p>
              <h3 className="h-display text-[clamp(1.7rem,4vw,2.5rem)]">
                Selected work<br />coming soon<span className="text-accent">.</span>
              </h3>
              <p className="max-w-md text-[1.02rem] leading-relaxed text-dim">
                We&apos;re working on bringing new digital experiences to life.
                Have a project in mind? Let&apos;s create something together.
              </p>
              <Button href="#contact" className="mt-2">
                Start a Project
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}
