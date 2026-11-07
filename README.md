# PixelSync Studio — Official Website

> We design & build digital products.
> Digital design & development studio — Web Design · Web Apps · UI/UX · Full-Stack Development
> Kerala, India · [@pixelsyncweb](https://www.instagram.com/pixelsyncweb/)

Premium dark-first company website for PixelSync Studio, built with thoughtful
design and modern technology. Dark is the default brand experience; a faithful
light theme ships with a theme switcher.

## Stack

- **React 19** + **TypeScript** (strict)
- **Vite 8** with `@tailwindcss/vite`
- **Tailwind CSS v4** (CSS-first configuration, brand tokens as CSS variables)
- **Framer Motion** for purposeful animation (respects `prefers-reduced-motion`)
- **lucide-react** for iconography (brand glyphs live in `src/components/icons.tsx`)

## Getting started

```bash
npm install
npm run dev        # start the dev server
npm run build      # type-check (tsc -b) and produce dist/
npm run preview    # preview the production build
npm run lint       # oxlint
```

## Contact form

The inquiry form never fakes delivery. With no configuration it opens the
visitor's email app with everything they typed pre-filled and addressed to
**pixelsyncweb@gmail.com** — they review and press send. Nothing is sent from
the site itself.

Prefer silent inbox delivery? Set `VITE_FORM_ENDPOINT` (see `.env.example`) to a
real endpoint — Formspree, Web3Forms (include `access_key` in the POST body), or
your own serverless function — and the form POSTs JSON there instead. If the
endpoint ever fails, the form falls back to the visitor's email app rather than
a dead end. States included: validation, loading, success, error, mailto handoff.

To wire up silent delivery (optional):

```bash
cp .env.example .env
# edit .env — set VITE_FORM_ENDPOINT to your provider's endpoint
```

## Adding real portfolio projects

The Work section renders from `src/data/projects.ts`, which is intentionally
empty at launch (no fictional client work). Add a real project to the array and
it appears automatically — the reusable `ProjectCard` supports title, category,
year, thumbnail, description, technologies, live URL, and repo URL.

```ts
export const projects: Project[] = [
  {
    id: 'project-slug',
    title: 'Project Title',
    category: 'Web Design',
    year: '2026',
    thumbnail: '/projects/project-slug/thumb.webp',
    description: 'One or two sentences.',
    challenge: 'The problem.',        // used in a future detail view
    solution: 'What we built.',       // used in a future detail view
    technologies: ['React', 'TypeScript'],
    liveUrl: 'https://…',
    repoUrl: 'https://github.com/…',
    featured: true,
  },
]
```

## Placeholder domain

No production domain exists yet. `index.html` (canonical, Open Graph),
`public/robots.txt` and `public/sitemap.xml` reference
`https://www.pixelsyncstudio.example/` with `TODO` comments — replace every
occurrence when the domain is live. `public/og-image.png` is brand-rendered and
ready to ship as-is.

## Logo

The supplied official logo lives at `public/logo.png` (transparent RGBA, full
symbol + PIXELSYNC wordmark lockup). Derived, site-ready assets — generated
from it, never redrawn or recolored:

- `public/logo-mark.png` — the PS monogram, trimmed + squared (navbar, hero, favicon source)
- `public/logo-lockup.png` — trimmed full lockup (footer brand block)
- `public/logo-mark-light.png` / `logo-lockup-light.png` — light-theme variants:
  white shapes remapped to ink `#14171A`, emerald remapped to `#00875A` (the
  light-theme brand accent), alpha preserved. A recolor onto the established
  light-theme palette roles — the artwork is never redrawn.
- `public/favicon.png` — official mark on its native dark rounded tile

Each theme renders the artwork on a tile in its own color: dark — near-black
tile with the official white + `#00E5A0` artwork; light — white tile with the
light-variant ink + `#00875A` artwork (see `src/components/Logo.tsx` and the
footer brand block). The theme store is a shared external store
(`src/hooks/useTheme.ts`) so every themed component re-renders together on
toggle. Re-derive the assets from `public/logo.png` if the logo changes
(`logo.jpg` is the original supplied file, kept for reference).

## Structure

```
src/
  components/   Navbar, MobileMenu, ThemeToggle, Hero, Services (+ ServiceCard),
                About, Process, Portfolio (+ ProjectCard), WhyPixelSync,
                FAQ, Contact, Footer, Logo, Button, SectionHeader, icons
  data/         nav, services, projects (empty by design), faqs
  hooks/        useTheme (dark default, persisted to localStorage)
  styles/       globals.css — design tokens, buttons, cards, forms, grain
  App.tsx       section assembly + skip link
```

## Accessibility & quality

- Semantic HTML, single `<h1>`, correct heading hierarchy, labelled regions
- Skip-to-content link, visible focus indicators, keyboard-navigable
  navigation, mobile menu (Escape closes, focus returns to trigger)
- Form: associated labels, `aria-invalid`, `aria-describedby` errors,
  `role="alert"` messages, keyboard-submittable
- `prefers-reduced-motion` respected in CSS and Framer Motion
- WCAG 2.1 AA contrast pairs; animations use transform/opacity only
