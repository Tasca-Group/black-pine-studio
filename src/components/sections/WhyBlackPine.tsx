'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ValueCard } from '@/components/cards/ValueCard'
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren'
import type { Value } from '@/types'

const values: Value[] = [
  {
    title: 'Individuelle Lösungen',
    description: 'Keine Templates, keine Standardlösungen. Jedes Projekt wird maßgeschneidert auf Ihre Bedürfnisse und Ziele entwickelt.',
    icon: '',
  },
  {
    title: 'Messbare Ergebnisse',
    description: 'Wir arbeiten datengetrieben und transparent. Sie sehen jederzeit, welchen Impact unsere Arbeit auf Ihr Business hat.',
    icon: '',
  },
  {
    title: 'Langfristige Partnerschaft',
    description: 'Wir sind nicht nur Dienstleister, sondern Ihr strategischer Partner. Wir wachsen gemeinsam mit Ihrem Unternehmen.',
    icon: '',
  },
  {
    title: 'Alles aus einer Hand',
    description: 'Web, Marketing, Apps und Beratung – bei uns bekommen Sie alles aus einer Hand, perfekt aufeinander abgestimmt.',
    icon: '',
  },
]

export function WhyBlackPine() {
  return (
    <section className="py-32 bg-beige/50">
      <Container>
        <SectionHeading
          title="Warum Black Pine?"
          subtitle="Was uns von anderen Agenturen unterscheidet."
        />

        <StaggerChildren className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <StaggerItem key={value.title}>
              <ValueCard value={value} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
