import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { CTASection } from '@/components/sections/CTASection'
import { projects } from '@/data/projects'

export const metadata: Metadata = {
  title: 'Projekte',
  description: 'Entdecken Sie unsere Projekte – von E-Commerce über Dashboards bis hin zu Marketing-Funnels.',
}

export default function ProjektePage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pb-16 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sand">Portfolio</p>
            <h1 className="text-4xl font-bold text-forest sm:text-5xl lg:text-6xl">Unsere Projekte</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-gray">
              Ein Einblick in unsere Arbeit. Jedes Projekt ist einzigartig — genau wie die Unternehmen, mit denen wir zusammenarbeiten.
            </p>
          </div>
        </Container>
      </section>

      {/* Project Grid */}
      <section className="pb-32">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Ihr Projekt ist das nächste?"
        subtitle="Lassen Sie uns gemeinsam etwas Großartiges schaffen."
        buttonText="Projekt besprechen"
      />
    </>
  )
}
