import Link from 'next/link'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/projekte/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-cream bg-warm-white transition-all duration-500 hover:border-sage/30"
    >
      {/* Image placeholder */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-beige to-cream">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl text-sand/40 font-[family-name:var(--font-heading)]">
            {project.title.charAt(0)}
          </span>
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-forest/70 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <span className="rounded-full bg-warm-white px-5 py-2 text-sm font-medium text-forest">
            Projekt ansehen
          </span>
        </div>
      </div>

      <div className="p-6">
        <span className="text-xs font-medium uppercase tracking-wider text-sand">
          {project.category}
        </span>
        <h3 className="mt-2 text-lg font-bold text-forest transition-colors duration-300 group-hover:text-pine">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-dark-gray leading-relaxed">
          {project.description}
        </p>
      </div>
    </Link>
  )
}
