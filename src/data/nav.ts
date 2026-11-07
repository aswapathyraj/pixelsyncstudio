export interface NavLink {
  label: string
  /** Section id without the leading #. */
  id: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', id: 'home', href: '#home' },
  { label: 'Services', id: 'services', href: '#services' },
  { label: 'Studio', id: 'studio', href: '#studio' },
  { label: 'Work', id: 'work', href: '#work' },
  { label: 'Contact', id: 'contact', href: '#contact' },
]
