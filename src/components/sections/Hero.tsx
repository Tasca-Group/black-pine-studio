'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { FadeIn } from '@/components/animations/FadeIn'

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-beige/60 via-warm-white to-warm-white" />

      <Container className="relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <FadeIn direction="up" delay={0.1} duration={0.8}>
            <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-sand">
              Agentur für digitales Wachstum
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} duration={0.8}>
            <h1 className="text-5xl font-bold leading-[1.1] text-forest sm:text-6xl lg:text-7xl xl:text-8xl">
              Digitale Lösungen,
              <br />
              <span className="text-sage">die wachsen.</span>
            </h1>
          </FadeIn>

          <FadeIn direction="up" delay={0.35} duration={0.8}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-dark-gray sm:text-xl">
              Von der Website über Marketing bis zur Business-Beratung — Ihr Partner für nachhaltiges digitales Wachstum.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.5} duration={0.8}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button href="/kontakt" size="lg">
                Erstgespräch buchen
              </Button>
              <Button href="/leistungen" variant="ghost" size="lg">
                Unsere Leistungen
              </Button>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  )
}
