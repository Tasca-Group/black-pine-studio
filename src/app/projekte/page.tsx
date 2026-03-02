import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Projekte',
  description: 'Unsere Projekte – demnächst verfügbar.',
}

export default function ProjektePage() {
  return (
    <>
      <section className="pb-16 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sand">Portfolio</p>
            <h1 className="text-4xl font-bold text-forest sm:text-5xl lg:text-6xl">Unsere Projekte</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-gray">
              Diese Seite wird gerade überarbeitet. Schon bald finden Sie hier eine Auswahl unserer Arbeiten.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <div className="mx-auto max-w-md rounded-2xl border border-cream bg-beige/50 p-12 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.15em] text-sand">In Bearbeitung</p>
            <p className="mt-3 text-dark-gray">Wir arbeiten an unserem Portfolio. Kontaktieren Sie uns gerne direkt für Referenzen.</p>
          </div>
        </Container>
      </section>

      <CTASection
        title="Neugierig auf unsere Arbeit?"
        subtitle="Kontaktieren Sie uns — wir zeigen Ihnen gerne Referenzen aus bisherigen Projekten."
        buttonText="Kontakt aufnehmen"
      />
    </>
  )
}
