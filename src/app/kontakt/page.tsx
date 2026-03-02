import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { CTASection } from '@/components/sections/CTASection'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_LOCATION } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Nehmen Sie Kontakt mit Black Pine auf. Wir freuen uns auf Ihr Projekt und beraten Sie gerne in einem kostenlosen Erstgespräch.',
}

export default function KontaktPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="pb-16 pt-32">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-sand">Kontakt</p>
            <h1 className="text-4xl font-bold text-forest sm:text-5xl lg:text-6xl">Lassen Sie uns sprechen</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-dark-gray">
              Wir freuen uns auf Ihre Nachricht und Ihr Projekt.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-32">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="mb-8 text-2xl font-bold text-forest">Schreiben Sie uns</h2>
              <ContactForm />
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <h2 className="mb-8 text-2xl font-bold text-forest">Kontaktdaten</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-sand">E-Mail</h3>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block text-lg text-forest hover:text-pine transition-colors duration-300">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-sand">Telefon</h3>
                  <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="mt-2 block text-lg text-forest hover:text-pine transition-colors duration-300">
                    {CONTACT_PHONE}
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-sand">Standort</h3>
                  <p className="mt-2 text-lg text-forest">{CONTACT_LOCATION}</p>
                </div>

                {/* Calendly Placeholder */}
                <div className="rounded-2xl border border-cream bg-beige/50 p-6">
                  <h3 className="font-bold text-forest">Erstgespräch buchen</h3>
                  <p className="mt-2 text-sm text-dark-gray">
                    Buchen Sie direkt einen Termin für ein kostenloses 30-minütiges Erstgespräch.
                  </p>
                  <div className="mt-4 rounded-xl border border-cream bg-warm-white p-8 text-center text-sm text-dark-gray">
                    Calendly Widget wird hier eingebunden
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="Lieber direkt sprechen?"
        subtitle="Rufen Sie uns an oder buchen Sie ein kostenloses Erstgespräch."
        buttonText="Termin buchen"
      />
    </>
  )
}
