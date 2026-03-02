import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { projects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  return (
    <>
      {/* Project Hero */}
      <section className="bg-gradient-to-br from-forest to-pine py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-gold/20 px-4 py-1 text-sm font-medium text-gold">
              {project.category}
            </span>
            <h1 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 text-lg text-white/80">
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Project Image Placeholder */}
      <section className="py-12">
        <Container>
          <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-pine/10 to-sage/10">
            <div className="flex h-full items-center justify-center">
              <span className="text-8xl opacity-20">🖼️</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-near-black">Über das Projekt</h2>
            <p className="mt-4 text-lg text-dark-gray leading-relaxed">
              {project.longDescription}
            </p>

            <div className="mt-12">
              <h3 className="text-lg font-bold text-near-black">Eingesetzte Leistungen</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.services.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-pine/10 px-4 py-2 text-sm font-medium text-pine"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <Link href="/projekte" className="text-pine hover:underline">
                ← Zurück zu allen Projekten
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Ähnliches Projekt geplant?"
        subtitle="Lassen Sie uns gemeinsam Ihre Vision umsetzen."
        buttonText="Projekt besprechen"
      />
    </>
  )
}
