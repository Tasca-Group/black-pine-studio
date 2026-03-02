'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ServiceCard } from '@/components/cards/ServiceCard'
import { StaggerChildren, StaggerItem } from '@/components/animations/StaggerChildren'
import { services } from '@/data/services'

export function ServicesOverview() {
  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          title="Unsere Leistungen"
          subtitle="Von der Konzeption bis zur Umsetzung — alles, was Ihr Business digital braucht."
        />

        <StaggerChildren className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.slug}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  )
}
