'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/animations/FadeIn'

const clients = [
  'Thomas Bergmann',
  'Sarah Klein',
  'Michael Weber',
  'Lisa Hoffmann',
  'David Richter',
  'Anna Müller',
]

export function Testimonials() {
  return (
    <section className="py-32 bg-beige/50">
      <Container>
        <SectionHeading
          title="Unsere Kunden"
          subtitle="Unternehmen, die uns vertrauen."
        />

        <FadeIn duration={0.8}>
          <div className="mx-auto max-w-2xl">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
              {clients.map((name) => (
                <div key={name} className="text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-warm-white border border-cream text-sm font-bold text-forest">
                    {name.charAt(0)}
                  </div>
                  <p className="mt-3 text-sm font-medium text-forest">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
