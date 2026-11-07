/**
 * Portfolio data — intentionally empty at launch.
 *
 * PixelSync is a growing studio, and this site does not present fictional
 * client work. Add real projects to the array below; the Work section
 * renders them automatically as soon as they exist.
 *
 * Example:
 *
 * export const projects: Project[] = [
 *   {
 *     id: 'client-project-slug',
 *     title: 'Project title',
 *     category: 'Web Design',
 *     year: '2026',
 *     thumbnail: '/projects/client-project-slug/thumb.webp',
 *     description: 'One or two sentences about the project.',
 *     challenge: 'The problem the client came to us with.',
 *     solution: 'What we designed and built, and why.',
 *     technologies: ['React', 'TypeScript', 'Tailwind CSS'],
 *     liveUrl: 'https://',
 *     repoUrl: 'https://github.com/',
 *     featured: true,
 *   },
 * ]
 */

export interface Project {
  /** Stable identifier used as the React key and for anchors. */
  id: string
  /** Project title. */
  title: string
  /** e.g. "Web Design", "Web App", "UI/UX Design", "Full-Stack Development". */
  category: string
  /** Year shipped, e.g. "2026". */
  year: string
  /** Path to a thumbnail under public/ (or an imported asset). 16:10 recommended. */
  thumbnail: string
  /** One or two sentences shown on the card. */
  description: string
  /** The problem being solved — shown on the project detail view. */
  challenge?: string
  /** The approach and outcome — shown on the project detail view. */
  solution?: string
  /** Technologies used, e.g. ["React", "TypeScript", "PostgreSQL"]. */
  technologies: string[]
  /** Optional full-width screenshots for a detail view. */
  screenshots?: string[]
  /** Optional live project URL. */
  liveUrl?: string
  /** Optional source repository URL. */
  repoUrl?: string
  /** Featured projects are shown larger / first. */
  featured?: boolean
}

export const projects: Project[] = []
