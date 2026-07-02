import { Code2, ExternalLink } from 'lucide-react'
import type { Project } from '../types/portfolio'
import { ButtonLink } from './ButtonLink'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="h-36 overflow-hidden bg-slate-100 sm:h-44">
        <img className="h-full w-full object-cover object-top" src={project.image} alt={project.imageAlt} loading="lazy" />
      </div>
      <div className="flex min-w-0 flex-1 flex-col space-y-3 p-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue-600">{project.category}</p>
          <h3 className="mt-2 break-words text-xl font-bold text-slate-950">{project.title}</h3>
          <p className="mt-2 break-words text-sm leading-6 text-slate-600">{project.description}</p>
        </div>

        <ul className="space-y-2 text-sm leading-5 text-slate-600">
          {project.bullets.slice(0, 2).map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" aria-hidden="true" />
              <span className="min-w-0 break-words">{bullet}</span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-700">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          <ButtonLink href={project.github} target="_blank" rel="noreferrer" icon={Code2}>
            GitHub
          </ButtonLink>
          {project.live ? (
            <ButtonLink href={project.live} target="_blank" rel="noreferrer" icon={ExternalLink} variant="primary">
              Live Site
            </ButtonLink>
          ) : null}
        </div>
      </div>
    </article>
  )
}
