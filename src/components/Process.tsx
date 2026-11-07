import { motion, useReducedMotion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand the idea, business objectives, target audience, and project requirements.',
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Develop user flows, interface concepts, and thoughtful user experiences.',
  },
  {
    number: '03',
    title: 'Build',
    description:
      'Transform approved designs into functional, responsive digital products.',
  },
  {
    number: '04',
    title: 'Ship',
    description:
      'Test, refine, and deliver the finished digital experience.',
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

export default function Process() {
  const reduceMotion = useReducedMotion()

  return (
    <section id="process" className="section section-line-top" aria-labelledby="process-heading">
      <div className="wrap flex flex-col gap-14">
        <SectionHeader
          index="03"
          eyebrow="Process"
          headingId="process-heading"
          layout="split"
          title={
            <>
              From Idea<br />to Impact<span className="text-accent">.</span>
            </>
          }
          supporting="Four clear stages, one continuous collaboration — from the first conversation to a shipped product."
        />

        <ol className="relative flex flex-col gap-10 lg:grid lg:grid-cols-4 lg:gap-6">
          {/* Connector lines */}
          {/* Mobile rail */}
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.37rem] top-6 w-px bg-line lg:hidden"
          />
          {/* Desktop rail */}
          <span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[1.4rem] hidden h-px bg-line lg:block"
          />
          <motion.span
            aria-hidden="true"
            className="absolute left-[12.5%] right-[12.5%] top-[1.4rem] hidden h-px origin-left bg-accent/70 lg:block"
            initial={{ scaleX: reduceMotion ? 1 : 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-60% 0px -20% 0px' }}
            transition={{ duration: 1.6, ease: EASE }}
          />

          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              className="relative flex items-start gap-6 lg:flex-col lg:items-center lg:gap-7 lg:text-center"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: reduceMotion ? 0 : index * 0.14, ease: EASE }}
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-surface font-mono text-[0.72rem] font-semibold tracking-widest text-accent shadow-[0_0_24px_rgba(0,229,160,0.14)]"
              >
                {step.number}
              </span>
              {/* Copy */}
              <span className="flex flex-col gap-2 pt-1.5 lg:items-center lg:pt-0">
                <h3 className="font-display text-[1.3rem] font-semibold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="max-w-[16rem] text-[0.92rem] leading-relaxed text-dim lg:max-w-[14.5rem]">
                  {step.description}
                </p>
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
