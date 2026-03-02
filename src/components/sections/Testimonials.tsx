'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/animations/FadeIn'

export function Testimonials() {
  return (
    <section className="py-32 bg-beige/50">
      <Container>
        <SectionHeading
          title="Unsere Kunden"
          subtitle="Unternehmen, die uns vertrauen."
        />

        <FadeIn duration={0.8}>
          <div className="mx-auto max-w-md text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-warm-white border border-cream text-base font-bold text-forest">
              J
            </div>
            <p className="mt-4 text-base font-medium text-forest">Jan Valentin Kalb</p>
            <p className="mt-1 text-sm text-dark-gray">Alonies, Deutschland</p>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
