import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { CTASection } from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Projekte',
  description: 'Unsere Projekte – aktuelle und vergangene Arbeiten von Black Pine Studio.',
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
              Ein Einblick in unsere aktuelle Arbeit. Weitere Projekte folgen in Kürze.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <div className="mx-auto max-w-2xl space-y-6">
            {/* Current Project: Alonies */}
            <div className="rounded-2xl border border-cream bg-warm-white p-8">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-sand">Aktuelles Projekt</p>
              <h3 className="mt-3 text-xl font-bold text-forest">Alonies — E-Commerce & Bildungsplattform</h3>
              <p className="mt-3 text-dark-gray leading-relaxed">
                Entwicklung einer E-Commerce- und Bildungsplattform für Alonies (Deutschland). Umfasst UI/UX Design, Frontend-Entwicklung und strategische Digitalberatung.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-cream bg-beige/50 px-3 py-1 text-xs text-dark-gray">E-Commerce</span>
                <span className="rounded-full border border-cream bg-beige/50 px-3 py-1 text-xs text-dark-gray">Web Development</span>
                <span className="rounded-full border border-cream bg-beige/50 px-3 py-1 text-xs text-dark-gray">UI/UX Design</span>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="rounded-2xl border border-cream bg-beige/50 p-8 text-center">
              <p className="text-sm font-medium uppercase tracking-[0.15em] text-sand">Weitere Projekte</p>
              <p className="mt-3 text-dark-gray">Zusätzliche Case Studies und Referenzen werden in Kürze veröffentlicht.</p>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Interesse an einer Zusammenarbeit?"
        subtitle="Kontaktieren Sie uns — wir zeigen Ihnen gerne weitere Referenzen."
        buttonText="Kontakt aufnehmen"
      />
    </>
  )
}
