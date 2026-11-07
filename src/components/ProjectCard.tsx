import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from './icons'
import type { Project } from '../data/projects'

/**
 * Reusable project card. Populated entirely from `src/data/projects.ts` —
 * add a real project there and it appears in the Work grid automatically.
 */
export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover group overflow-hidden">
      <a
        href={project.liveUrl ?? project.repoUrl ?? '#'}
        target={project.liveUrl || project.repoUrl ? '_blank' : undefined}
        rel="noreferrer noopener"
        aria-label={`${project.title} — ${project.liveUrl ? 'visit live site' : 'view source'}`}
        className="block overflow-hidden border-b border-line"
      >
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.category} by PixelSync Studio`}
          width={1280}
          height={800}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
        />
      </a>
      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-faint">
          <span>{project.category}</span>
          <span>{project.year}</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-[1.45rem] font-semibold tracking-tight text-ink">
            {project.title}
          </h3>
          <p className="text-[0.92rem] leading-relaxed text-dim">{project.description}</p>
        </div>
        {project.technologies.length > 0 ? (
          <ul className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-line bg-abyss/40 px-2.5 py-1 text-[0.7rem] font-medium text-dim"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}
        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-line pt-4 text-sm font-semibold">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
            >
              Live site
              <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-dim transition-colors hover:text-ink"
            >
              <GithubIcon size={15} aria-hidden="true" />
              Source
            </a>
          ) : null}
        </div>
      </div>
    </article>
  )
}
