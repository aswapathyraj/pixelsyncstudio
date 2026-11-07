import { ArrowUp, ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { InstagramIcon } from './icons'
import { useTheme } from '../hooks/useTheme'
import { navLinks } from '../data/nav'
import { services } from '../data/services'

export default function Footer() {
  const { theme } = useTheme()
  const light = theme === 'light'
  const year = 2026

  return (
    <footer className="relative overflow-hidden border-t border-line bg-abyss">
      <div className="wrap relative z-10 grid gap-10 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16">
        {/* Brand — official lockup */}
        <div className="flex flex-col gap-4 lg:col-span-4 lg:gap-5">
          <a
            href="#home"
            aria-label="PixelSync Studio — back to top"
            className={`w-fit rounded-2xl border px-6 py-4 transition-colors duration-500 ${
              light
                ? 'border-line bg-surface'
                : 'border-white/5 bg-[#0D0D0F]'
            }`}
          >
            <img
              src={light ? '/logo-lockup-light.png' : '/logo-lockup.png'}
              alt="PixelSync Studio"
              width={779}
              height={656}
              className="h-14 w-auto lg:h-16"
              draggable={false}
            />
          </a>
          <p className="max-w-[16rem] text-[0.97rem] font-medium leading-snug text-dim">
            We design &amp; build<br />digital products.
          </p>
          <p className="inline-flex items-center gap-2 text-sm text-faint">
            <MapPin size={14} aria-hidden="true" className="text-accent" />
            Kerala, India
          </p>
        </div>

        {/* Navigate + Services — two compact columns on mobile, dissolved into the grid on desktop */}
        <div className="grid grid-cols-2 gap-8 lg:contents">
          {/* Explore */}
          <nav aria-label="Footer — explore" className="lg:col-span-2">
            <h3 className="mb-3 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-faint lg:mb-4">
              Navigate
            </h3>
            <ul className="flex flex-col gap-2.5 text-[0.92rem]">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="text-dim transition-colors duration-300 hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="mb-3 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-faint lg:mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-[0.92rem]">
              {services.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="text-dim transition-colors duration-300 hover:text-accent">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Connect */}
        <div className="lg:col-span-3">
          <h3 className="mb-4 font-mono text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-faint">
            Connect
          </h3>
          <div className="flex flex-col items-stretch gap-3 sm:items-start">
            <a
              href={`mailto:pixelsyncweb@gmail.com`}
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-linestrong px-4 py-3 text-[0.86rem] font-semibold text-dim transition-all duration-300 hover:border-accent hover:text-accent sm:justify-start sm:text-[0.92rem]"
            >
              <Mail size={18} aria-hidden="true" className="shrink-0" />
              pixelsyncweb@gmail.com
            </a>
            <a
              href="https://www.instagram.com/pixelsyncweb/"
              target="_blank"
              rel="noreferrer noopener"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl border border-linestrong px-4 py-3 text-[0.92rem] font-semibold text-dim transition-all duration-300 hover:border-accent hover:text-accent sm:justify-start"
            >
              <InstagramIcon size={18} aria-hidden="true" className="shrink-0" />
              @pixelsyncweb
              <ArrowUpRight
                size={15}
                aria-hidden="true"
                className="opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
          <p className="mt-4 text-[0.78rem] leading-relaxed text-faint">
            DM us the word <span className="font-semibold text-dim">BUILD</span> and
            let&apos;s talk about your website.
          </p>
        </div>
      </div>

      {/* Giant brand sign-off */}
      <div aria-hidden="true" className="pointer-events-none select-none text-center">
        <p className="footer-word translate-y-[14%] text-ink/90">
          PIXELSYNC<span className="text-accent">.</span>
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-line bg-abyss/80 backdrop-blur-sm">
        <div className="wrap flex flex-col items-center gap-3 py-5 text-center text-[0.78rem] text-faint sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-y-3 sm:text-left">
          <p>© {year} PixelSync Studio. All rights reserved.</p>
          <p className="hidden sm:block">Designed &amp; engineered in Kerala, India.</p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-semibold text-dim transition-colors duration-300 hover:text-accent"
            aria-label="Back to top"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-linestrong transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent">
              <ArrowUp size={13} aria-hidden="true" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
