import { useId, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, Plus } from 'lucide-react'
import { InstagramIcon } from './icons'
import { faqs } from '../data/faqs'

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id ?? null)
  const reduceMotion = useReducedMotion()
  const baseId = useId()

  return (
    <section id="faq" className="section section-line-top section-abyss" aria-labelledby="faq-heading">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Sidebar */}
        <div className="flex flex-col gap-6 lg:col-span-4">
          <span className="eyebrow">
            <span className="eyebrow-index">06</span>
            <span className="eyebrow-rule" aria-hidden="true" />
            FAQ
          </span>
          <h2 id="faq-heading" className="h-display text-[clamp(2.3rem,4.2vw,3.4rem)]">
            Questions,<br />answered<span className="text-accent">.</span>
          </h2>
          <p className="max-w-sm text-[1.02rem] leading-relaxed text-dim">
            Straight answers, no fine print we haven&apos;t mentioned. If your
            question isn&apos;t here, ask us directly.
          </p>
          <a
            href="https://www.instagram.com/pixelsyncweb/"
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent"
          >
            <InstagramIcon size={16} aria-hidden="true" />
            <span className="underline decoration-accent/40 underline-offset-4 transition-colors group-hover:decoration-accent">
              DM @pixelsyncweb on Instagram
            </span>
            <ArrowUpRight size={15} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-8">
          <ul className="border-t border-line">
            {faqs.map((faq) => {
              const open = openId === faq.id
              const buttonId = `${baseId}-button-${faq.id}`
              const panelId = `${baseId}-panel-${faq.id}`
              return (
                <li key={faq.id} className="border-b border-line">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenId(open ? null : faq.id)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left"
                    >
                      <span
                        className={`font-display text-[1.05rem] font-medium leading-snug tracking-tight transition-colors duration-300 sm:text-[1.18rem] ${
                          open ? 'text-accent' : 'text-ink group-hover:text-accent'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-400 ${
                          open
                            ? 'rotate-45 border-accent bg-accentsoft text-accent'
                            : 'border-linestrong text-dim group-hover:border-accent group-hover:text-accent'
                        }`}
                      >
                        <Plus size={17} strokeWidth={2} />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        key="panel"
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: reduceMotion ? 0.15 : 0.4, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.25 },
                        }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-4 leading-relaxed text-dim">
                          {faq.answer}
                        </p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
