import { ArrowUpRight } from 'lucide-react'
import type { Service, ServiceMotif } from '../data/services'

/**
 * Bespoke line-art motifs — one per discipline, drawn on a shared
 * 160×72 grid so the set feels like one design language.
 */
function Motif({ motif }: { motif: ServiceMotif }) {
  const stroke = {
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  }

  switch (motif) {
    case 'web-design':
      return (
        <svg viewBox="0 0 160 72" fill="none" className="h-full w-full" aria-hidden="true">
          <rect x="14" y="8" width="132" height="56" rx="6" {...stroke} />
          <path d="M14 21h132" {...stroke} />
          <circle cx="24" cy="14.5" r="1.4" fill="currentColor" stroke="none" />
          <circle cx="32" cy="14.5" r="1.4" fill="currentColor" stroke="none" opacity="0.5" />
          <rect x="24" y="30" width="34" height="24" rx="2.5" {...stroke} />
          <path d="M68 31h68M68 39h48M68 47h56M68 55h26" {...stroke} opacity="0.75" />
        </svg>
      )
    case 'web-apps':
      return (
        <svg viewBox="0 0 160 72" fill="none" className="h-full w-full" aria-hidden="true">
          <rect x="8" y="12" width="66" height="48" rx="6" {...stroke} />
          <path d="M20 32h42M20 42h28" {...stroke} opacity="0.75" />
          <rect x="98" y="8" width="54" height="24" rx="6" {...stroke} />
          <path d="M110 20h30" {...stroke} opacity="0.75" />
          <circle cx="112" cy="50" r="8" {...stroke} />
          <path d="M126 50h18" {...stroke} strokeDasharray="3 4" opacity="0.75" />
          <circle cx="150" cy="50" r="3.4" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'ui-ux':
      return (
        <svg viewBox="0 0 160 72" fill="none" className="h-full w-full" aria-hidden="true">
          <rect x="10" y="18" width="34" height="36" rx="4" {...stroke} />
          <circle cx="27" cy="30" r="5" {...stroke} opacity="0.85" />
          <path d="M18 46h18" {...stroke} opacity="0.6" />
          <path d="M44 36h18" {...stroke} strokeDasharray="3 4" />
          <rect x="62" y="10" width="34" height="52" rx="4" {...stroke} />
          <path d="M70 24h18M70 32h18M70 40h12" {...stroke} opacity="0.75" />
          <path d="M96 36h16" {...stroke} strokeDasharray="3 4" />
          <circle cx="130" cy="36" r="13" {...stroke} />
          <path d="M126 36l3 3 6-7" {...stroke} />
        </svg>
      )
    case 'full-stack':
      return (
        <svg viewBox="0 0 160 72" fill="none" className="h-full w-full" aria-hidden="true">
          {[10, 28, 46].map((y, i) => (
            <g key={y}>
              <rect x="18" y={y} width="124" height="15" rx="4" {...stroke} />
              <circle cx="29" cy={y + 7.5} r="2" fill="currentColor" stroke="none" opacity={i === 0 ? 1 : 0.55} />
              <path d={`M42 ${y + 7.5}h${58 - i * 14}`} {...stroke} opacity="0.7" />
            </g>
          ))}
        </svg>
      )
  }
}

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card card-hover group relative flex h-full flex-col gap-5 overflow-hidden p-6 sm:p-7">
      {/* Number + exploration indicator */}
      <div className="flex items-center gap-4">
        <span className="font-mono text-[0.72rem] font-semibold tracking-[0.28em] text-faint transition-colors duration-300 group-hover:text-dim">
          {service.number}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-line transition-colors duration-500 group-hover:bg-linestrong" />
        <ArrowUpRight
          size={19}
          strokeWidth={1.8}
          aria-hidden="true"
          className="text-faint transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      {/* Motif panel */}
      <div
        aria-hidden="true"
        className="flex h-24 items-center justify-center overflow-hidden rounded-xl border border-line bg-panel px-6 text-faint transition-colors duration-500 group-hover:border-linestrong group-hover:text-accent sm:h-28"
      >
        <Motif motif={service.motif} />
      </div>

      {/* Copy */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-display text-[1.42rem] font-semibold tracking-tight text-ink">
          {service.title}
        </h3>
        <p className="text-[0.94rem] leading-relaxed text-dim">{service.description}</p>
      </div>

      {/* Capabilities */}
      <ul className="mt-auto flex flex-wrap gap-1.5 border-t border-line pt-4">
        {service.capabilities.map((capability) => (
          <li
            key={capability}
            className="rounded-full border border-line bg-abyss/40 px-2.5 py-1 text-[0.7rem] font-medium text-dim transition-colors duration-300 group-hover:border-linestrong"
          >
            {capability}
          </li>
        ))}
      </ul>
    </article>
  )
}
