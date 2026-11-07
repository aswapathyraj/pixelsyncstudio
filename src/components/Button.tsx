import { ArrowRight } from 'lucide-react'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost'

interface BaseProps {
  variant?: Variant
  className?: string
  children: ReactNode
  /** Renders the trailing arrow that glides forward on hover. Defaults to true. */
  showArrow?: boolean
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export type ButtonProps = ButtonAsButton | ButtonAsLink

/**
 * One button language across the site: solid emerald for the primary
 * action, quiet outline for secondary actions.
 */
export default function Button(props: ButtonProps) {
  const { variant = 'primary', className = '', children, showArrow = true, ...rest } = props
  const classes = `btn ${variant === 'primary' ? 'btn-primary' : 'btn-ghost'} ${className}`.trim()
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? <ArrowRight aria-hidden="true" size={17} strokeWidth={2.25} className="btn-arrow" /> : null}
    </>
  )

  if ('href' in rest && rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a className={classes} {...anchorProps}>
        {content}
      </a>
    )
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={classes} type={buttonProps.type ?? 'button'} {...buttonProps}>
      {content}
    </button>
  )
}
