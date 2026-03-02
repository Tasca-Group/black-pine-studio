'use client'

import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { FadeIn } from '@/components/animations/FadeIn'
import { testimonials } from '@/data/testimonials'

export function Testimonials() {
  return (
    <section className="py-32 bg-beige/50">
      <Container>
        <SectionHeading
          title="Was unsere Kunden sagen"
          subtitle="Echte Stimmen von echten Partnern."
        />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1} duration={0.8}>
              <div className="rounded-2xl border border-cream bg-warm-white p-8">
                <p className="text-dark-gray leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-beige text-sm font-bold text-forest">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-forest">{testimonial.name}</p>
                    <p className="text-xs text-dark-gray">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  )
}
