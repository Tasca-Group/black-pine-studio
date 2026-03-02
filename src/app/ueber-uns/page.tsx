import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Lernen Sie Black Pine kennen – Ihre Agentur für Webentwicklung, Marketing und Business-Beratung.',
}

const missionValues = [
  {
    title: 'Qualität vor Quantität',
    description: 'Wir nehmen nur Projekte an, bei denen wir echten Mehrwert schaffen können. Jedes Projekt bekommt unsere volle Aufmerksamkeit.',
  },
  {
    title: 'Transparenz & Ehrlichkeit',
    description: 'Klare Kommunikation, faire Preise und ehrliche Einschätzungen. Wir versprechen nur, was wir halten können.',
  },
  {
    title: 'Ergebnisorientiert',
    description: 'Schönes Design allein reicht nicht. Unsere Lösungen müssen messbare Ergebnisse liefern – mehr Leads, mehr Umsatz, mehr Effizienz.',
  },
  {
    title: 'Langfristiges Denken',
    description: 'Wir entwickeln nachhaltige Lösungen, die mit Ihrem Unternehmen wachsen. Keine Quick-Fixes, sondern solide Fundamente.',
  },
]

export default function UeberUnsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pb-16 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sand">Über uns</p>
            <h1 className="text-4xl font-bold text-forest sm:text-5xl lg:text-6xl">Die Geschichte<br />hinter Black Pine</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-gray">
              Warum wir tun, was wir tun.
            </p>
          </div>
        </Container>
      </section>

      {/* About Marcel */}
      <section className="pb-32">
        <Container>
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Photo Placeholder */}
            <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-beige to-cream">
              <div className="flex h-full items-center justify-center">
                <span className="text-6xl text-sand/30 font-[family-name:var(--font-heading)]">M</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-forest sm:text-4xl">
                Hi, ich bin Marcel
              </h2>
              <div className="mt-6 space-y-4 text-lg text-dark-gray leading-relaxed">
                <p>
                  Als Gründer von Black Pine verbinde ich meine Leidenschaft für Technologie, Design und Business-Strategie, um Unternehmen dabei zu helfen, digital zu wachsen.
                </p>
                <p>
                  Mit Erfahrung in Webentwicklung, Marketing und Unternehmensberatung biete ich eine ganzheitliche Perspektive, die über das rein Technische hinausgeht. Ich verstehe nicht nur, wie man großartige Websites baut — sondern auch, wie man damit Geschäftsziele erreicht.
                </p>
                <p>
                  Mein Ansatz: Zuhören, verstehen, umsetzen. Jedes Projekt beginnt mit Ihren Zielen und endet mit messbaren Ergebnissen.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="bg-beige/50 py-32">
        <Container>
          <SectionHeading
            title="Mission & Werte"
            subtitle="Wofür Black Pine steht."
          />

          <div className="grid gap-6 sm:grid-cols-2">
            {missionValues.map((value) => (
              <div key={value.title} className="rounded-2xl border border-cream bg-warm-white p-8">
                <h3 className="text-lg font-bold text-forest">{value.title}</h3>
                <p className="mt-3 text-dark-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Bereit, zusammenzuarbeiten?"
        subtitle="Lassen Sie uns in einem Gespräch herausfinden, wie wir Ihr Business voranbringen können."
      />
    </>
  )
}
