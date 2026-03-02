import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/sections/CTASection'
import { services } from '@/data/services'
import type { ProcessStep } from '@/types'

export const metadata: Metadata = {
  title: 'Leistungen',
  description: 'Web Development, Marketing, Apps & Dashboards, Newsletter & Funnels, Business Consulting – entdecken Sie unsere Leistungen.',
}

const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: 'Erstgespräch',
    description: 'Wir lernen Sie und Ihr Projekt kennen. Kostenlos und unverbindlich.',
  },
  {
    step: 2,
    title: 'Analyse',
    description: 'Wir analysieren Ihre Situation, Zielgruppe und den Wettbewerb.',
  },
  {
    step: 3,
    title: 'Umsetzung',
    description: 'Wir setzen die Strategie um – transparent und in engem Austausch.',
  },
  {
    step: 4,
    title: 'Optimierung',
    description: 'Wir messen, lernen und optimieren kontinuierlich für bessere Ergebnisse.',
  },
]

export default function LeistungenPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pb-16 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sand">Was wir tun</p>
            <h1 className="text-4xl font-bold text-forest sm:text-5xl lg:text-6xl">Unsere Leistungen</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-gray">
              Von der Webentwicklung bis zur Business-Beratung — ganzheitliche Lösungen für Ihr digitales Wachstum.
            </p>
          </div>
        </Container>
      </section>

      {/* Service Detail Blocks */}
      {services.map((service, index) => (
        <section
          key={service.slug}
          id={service.slug}
          className={index % 2 === 0 ? 'py-24' : 'bg-beige/50 py-24'}
        >
          <Container>
            <div className={`grid items-center gap-16 lg:grid-cols-2`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                <h2 className="text-3xl font-bold text-forest sm:text-4xl">
                  {service.title}
                </h2>
                <p className="mt-5 text-lg text-dark-gray leading-relaxed">
                  {service.longDescription}
                </p>
                <div className="mt-8">
                  <Button href="/kontakt" size="md">
                    Projekt besprechen
                  </Button>
                </div>
              </div>
              <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                <div className="rounded-2xl border border-cream bg-warm-white p-8">
                  <h3 className="mb-5 text-sm font-medium uppercase tracking-[0.15em] text-sand">Das bieten wir</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-sage shrink-0" />
                        <span className="text-dark-gray">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Process Section */}
      <section className="py-32">
        <Container>
          <SectionHeading
            title="Unser Prozess"
            subtitle="In vier Schritten von der Idee zum Ergebnis."
          />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-sage/30 text-lg font-bold text-forest">
                  {step.step}
                </div>
                <h3 className="mt-5 text-lg font-bold text-forest">{step.title}</h3>
                <p className="mt-2 text-dark-gray">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  )
}
