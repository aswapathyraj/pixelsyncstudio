import type { ReactNode } from 'react'

interface SectionHeaderProps {
  /** Section number shown in the eyebrow, e.g. "01". */
  index: string
  /** Short tracked label, e.g. "Services". */
  eyebrow: string
  /** The h2 content — pass JSX to highlight words in emerald. */
  title: ReactNode
  /** Optional supporting copy. */
  supporting?: ReactNode
  /** 'stack' keeps heading and copy on one column; 'split' puts supporting copy to the right on desktop. */
  layout?: 'stack' | 'split'
  headingId?: string
}

export default function SectionHeader({
  index,
  eyebrow,
  title,
  supporting,
  layout = 'stack',
  headingId,
}: SectionHeaderProps) {
  const eyebrowRow = (
    <span className="eyebrow">
      <span className="eyebrow-index">{index}</span>
      <span className="eyebrow-rule" aria-hidden="true" />
      {eyebrow}
    </span>
  )

  const heading = (
    <h2 id={headingId} className="h-display text-[clamp(2.35rem,4.6vw,3.5rem)]">
      {title}
    </h2>
  )

  if (layout === 'split') {
    return (
      <div className="grid gap-8 md:grid-cols-12 md:items-end md:gap-6">
        <div className="flex flex-col gap-6 md:col-span-8">
          {eyebrowRow}
          {heading}
        </div>
        {supporting ? (
          <p className="max-w-xs text-[1.02rem] leading-relaxed text-dim md:col-span-4 md:justify-self-end">
            {supporting}
          </p>
        ) : null}
      </div>
    )
  }

  return (
    <div className="flex max-w-3xl flex-col gap-6">
      {eyebrowRow}
      {heading}
      {supporting ? (
        <p className="max-w-xl text-[1.05rem] leading-relaxed text-dim">{supporting}</p>
      ) : null}
    </div>
  )
}
