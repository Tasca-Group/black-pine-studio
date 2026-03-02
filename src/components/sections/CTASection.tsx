'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
  buttonHref?: string
}

export function CTASection({
  title = 'Bereit, Ihr Business zu skalieren?',
  subtitle = 'Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden, wie wir Ihnen helfen können.',
  buttonText = 'Erstgespräch buchen',
  buttonHref = '/kontakt',
}: CTASectionProps) {
  return (
    <section className="py-32">
      <Container>
        <FadeIn duration={0.8}>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-forest sm:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-dark-gray">
              {subtitle}
            </p>
            <div className="mt-10">
              <Button href={buttonHref} size="lg">
                {buttonText}
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
