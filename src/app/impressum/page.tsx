import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Legal Notice',
  description: 'Legal Notice – Black Pine Studio. Provider information and legal disclosures.',
}

export default function ImpressumPage() {
  return (
    <section className="pb-32 pt-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-forest sm:text-5xl">Legal Notice</h1>

          <div className="mt-12 space-y-10 text-dark-gray leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-forest">Provider</h2>
              <p className="mt-3">
                Marcel Tasca<br />
                <strong>Black Pine Studio</strong><br />
                Via Parisi 10<br />
                95041 Caltagirone (CT), Italy
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">Contact</h2>
              <p className="mt-3">
                Email:{' '}
                <a href="mailto:marcel@tasca-group.com" className="text-forest hover:text-pine transition-colors duration-300">
                  marcel@tasca-group.com
                </a><br />
                Phone:{' '}
                <a href="tel:+491639769451" className="text-forest hover:text-pine transition-colors duration-300">
                  +49 163 976 9451
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">Tax Identification</h2>
              <p className="mt-3">
                Tax ID (Codice Fiscale): TSCMCL03M24Z112Z
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">Nature of Business</h2>
              <p className="mt-3">
                Digital Solutions, Web Design, and UI/UX Development.
              </p>
            </div>

            <div className="border-t border-cream pt-10">
              <h2 className="text-lg font-bold text-forest">Liability for Content</h2>
              <p className="mt-3">
                The contents of our pages have been created with the greatest care. However, we cannot guarantee the accuracy, completeness, or timeliness of the content. As a service provider, we are responsible for our own content on these pages in accordance with general laws. However, we are not obligated to monitor transmitted or stored third-party information or to investigate circumstances that indicate illegal activity.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">Liability for Links</h2>
              <p className="mt-3">
                Our website contains links to external third-party websites over whose content we have no influence. Therefore, we cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">Copyright</h2>
              <p className="mt-3">
                The content and works created by the site operators on these pages are subject to copyright law. Reproduction, editing, distribution, and any kind of use beyond the limits of copyright law require the written consent of the respective author or creator.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
