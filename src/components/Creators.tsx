import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const EASE = [0.22, 1, 0.36, 1] as const

const ASWAPATHY_STACK = ['React', 'JavaScript', 'Node.js', 'Express.js', 'SQL · SQLite', 'Tailwind CSS', 'JWT']
const SHARAT_STACK = ['Python', 'Django', 'Next.js', 'JavaScript', 'React', 'MySQL', 'SQLite']

/**
 * "The creators" — the two people behind PixelSync Studio.
 * Both portfolios were verified live at the time this was written, and every
 * detail below (roles, taglines, stacks) comes straight from their public
 * sites rather than invention.
 * Aswapathy — portfolio-v2-weld-five.vercel.app · Sharat — sharat-s-unnithan.vercel.app
 */
export default function Creators() {
  const reduceMotion = useReducedMotion()
  const reveal = (delay: number) => ({
    initial: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.7, delay, ease: EASE },
  })

  return (
    <div className="wrap mt-16 lg:mt-20">
      <div className="border-t border-line pt-10 lg:pt-12">
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <span className="eyebrow">
            <span aria-hidden="true" className="h-2 w-2 rounded-[3px] bg-accent" />
            The creators
          </span>
          <p className="max-w-xs text-sm leading-relaxed text-faint">
            Two people run PixelSync Studio — one studio, built on mutual trust.
          </p>
        </div>

        <div className="mt-8 grid items-stretch gap-5 md:grid-cols-2">
          {/* Aswapathy Raj — Full-Stack Developer */}
          <motion.article
            {...reveal(0)}
            className="card flex h-full flex-col gap-6 p-6 sm:p-7"
            aria-labelledby="creator-aswapathy"
          >
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accentsoft font-display text-base font-semibold tracking-[0.08em] text-accent"
              >
                AR
              </span>
              <span>
                <h3
                  id="creator-aswapathy"
                  className="font-display text-[1.3rem] font-semibold leading-tight tracking-tight text-ink"
                >
                  Aswapathy Raj
                </h3>
                <p className="mt-1 text-[0.8rem] leading-snug text-dim">Co-founder · Full-Stack Developer</p>
              </span>
            </div>

            <p className="text-[0.98rem] leading-relaxed text-dim">
              Builds PixelSync end to end — interface to API to database.{' '}
              <span className="text-ink">Schema first, then the API, then the interface.</span>
            </p>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-faint">
                Stack
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {ASWAPATHY_STACK.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-abyss/40 px-2.5 py-1 text-[0.7rem] font-medium text-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-line pt-4">
              <a
                href="https://portfolio-v2-weld-five.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent lg:min-h-0"
              >
                <span className="underline decoration-accent/40 underline-offset-4 transition-colors duration-300 group-hover:decoration-accent">
                  View portfolio
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.article>

          {/* Sharat S Unnithan — Creative Technologist */}
          <motion.article
            {...reveal(0.12)}
            className="card flex h-full flex-col gap-6 p-6 sm:p-7"
            aria-labelledby="creator-sharat"
          >
            <div className="flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accentsoft font-display text-base font-semibold tracking-[0.08em] text-accent"
              >
                SU
              </span>
              <span>
                <h3
                  id="creator-sharat"
                  className="font-display text-[1.3rem] font-semibold leading-tight tracking-tight text-ink"
                >
                  Sharat S Unnithan
                </h3>
                <p className="mt-1 text-[0.8rem] leading-snug text-dim">Co-founder · Creative Technologist</p>
              </span>
            </div>

            <p className="text-[0.98rem] leading-relaxed text-dim">
              Engineering practical software that solves real problems —{' '}
              <span className="text-ink">robust Python &amp; Django backends</span>,
              predictive algorithms, and resilient database architectures.
            </p>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-faint">
                Stack
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {SHARAT_STACK.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-line bg-abyss/40 px-2.5 py-1 text-[0.7rem] font-medium text-dim"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto border-t border-line pt-4">
              <a
                href="https://sharat-s-unnithan.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-accent lg:min-h-0"
              >
                <span className="underline decoration-accent/40 underline-offset-4 transition-colors duration-300 group-hover:decoration-accent">
                  View portfolio
                </span>
                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </motion.article>
        </div>
      </div>
    </div>
  )
}
