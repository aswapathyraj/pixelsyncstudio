import { useTheme } from '../hooks/useTheme'

interface PixelMarkProps {
  size?: number
  className?: string
}

/**
 * Official PixelSync mark, adapted to each theme.
 *
 * Dark theme: the official white + emerald artwork on its native near-black
 * tile. Light theme: the same artwork remapped onto the light-theme brand
 * roles (ink #14171A for the white shapes, #00875A for the emerald) on a
 * white tile — a recolor, never a redrawing, proportions untouched.
 * Assets: public/logo-mark.png (dark) · public/logo-mark-light.png (light).
 */
export function PixelMark({ size = 36, className }: PixelMarkProps) {
  const { theme } = useTheme()
  const light = theme === 'light'
  const inner = Math.round(size * 0.76)

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-[26%] transition-colors duration-500 ${
        light
          ? 'border border-line bg-surface'
          : 'border border-white/5 bg-[#0D0D0F]'
      } ${className ?? ''}`}
      style={{ width: size, height: size }}
    >
      <img
        src={light ? '/logo-mark-light.png' : '/logo-mark.png'}
        alt=""
        width={inner}
        height={inner}
        draggable={false}
        className="block"
      />
    </span>
  )
}

export default function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#home"
      className="group inline-flex min-h-11 items-center gap-3 rounded-lg"
      aria-label="PixelSync Studio — back to top"
    >
      <PixelMark
        size={compact ? 30 : 36}
        className="transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[8deg]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.22rem] font-semibold tracking-tight text-ink">
          PixelSync
        </span>
        <span className="mt-1 font-sans text-[0.58rem] font-semibold uppercase tracking-[0.42em] text-faint transition-colors duration-300 group-hover:text-dim">
          Studio
        </span>
      </span>
    </a>
  )
}
