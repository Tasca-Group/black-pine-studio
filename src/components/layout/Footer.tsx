import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { footerNavItems } from '@/data/navigation'
import { CONTACT_EMAIL, CONTACT_PHONE, CONTACT_LOCATION } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="border-t border-cream">
      <Container>
        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="text-xl font-bold font-[family-name:var(--font-heading)] text-forest tracking-tight">
              Black Pine
            </Link>
            <p className="mt-4 text-sm text-dark-gray leading-relaxed">
              Digital Solutions, Web Design &amp; UI/UX Development.
            </p>
            <div className="mt-4 space-y-1 text-xs text-dark-gray/70">
              <p>Owner: Marcel Tasca</p>
              <p>CF: TSCMCL03M24Z112Z</p>
              <p>{CONTACT_LOCATION}</p>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-sand">
              Leistungen
            </h3>
            <ul className="space-y-3">
              {footerNavItems.leistungen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-dark-gray transition-colors duration-300 hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-sand">
              Unternehmen
            </h3>
            <ul className="space-y-3">
              {footerNavItems.unternehmen.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-dark-gray transition-colors duration-300 hover:text-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.15em] text-sand">
              Kontakt
            </h3>
            <ul className="space-y-3 text-sm text-dark-gray">
              <li className="font-medium text-forest">Marcel Tasca</li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors duration-300 hover:text-forest">
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="transition-colors duration-300 hover:text-forest">
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>{CONTACT_LOCATION}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-dark-gray/60">
              © {new Date().getFullYear()} Black Pine. Alle Rechte vorbehalten.
            </p>
            <div className="flex gap-6 text-xs text-dark-gray/60">
              <Link href="/impressum" className="transition-colors duration-300 hover:text-forest">
                Impressum
              </Link>
              <Link href="/datenschutz" className="transition-colors duration-300 hover:text-forest">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
