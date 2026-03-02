'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { ProjectCard } from '@/components/cards/ProjectCard'
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren'
import { projects } from '@/data/projects'

export function PortfolioPreview() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          title="Ausgewählte Projekte"
          subtitle="Ein Einblick in unsere Arbeit — von E-Commerce bis hin zu Business-Dashboards."
        />

        <StaggerChildren className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="mt-16 text-center">
          <Button href="/projekte" variant="outline">
            Alle Projekte ansehen
          </Button>
        </div>
      </Container>
    </section>
  )
}
