import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy – Black Pine Studio. Information about the handling of your personal data.',
}

export default function DatenschutzPage() {
  return (
    <section className="pb-32 pt-32">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-forest sm:text-5xl">Privacy Policy</h1>

          <div className="mt-12 space-y-10 text-dark-gray leading-relaxed">
            <div>
              <h2 className="text-lg font-bold text-forest">1. Data Protection at a Glance</h2>

              <h3 className="mt-5 font-bold text-forest">General Information</h3>
              <p className="mt-2">
                The following information provides a simple overview of what happens to your personal data when you visit our website. Personal data is any data that can be used to personally identify you.
              </p>

              <h3 className="mt-5 font-bold text-forest">Data Collection on Our Website</h3>
              <p className="mt-2">
                <strong>Who is responsible for data collection on this website?</strong><br />
                Data processing on this website is carried out by the website operator. You can find their contact details in the Legal Notice of this website.
              </p>
              <p className="mt-3">
                <strong>How do we collect your data?</strong><br />
                Your data is collected when you provide it to us, for example by entering data into a contact form. Other data is automatically collected by our IT systems when you visit the website. This is primarily technical data such as internet browser, operating system, or time of page access.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">2. Responsible Party</h2>
              <p className="mt-3">
                Marcel Tasca<br />
                Black Pine Studio<br />
                Via Parisi 10<br />
                95041 Caltagirone (CT), Italy<br /><br />
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
              <h2 className="text-lg font-bold text-forest">3. Data Collection on Our Website</h2>

              <h3 className="mt-5 font-bold text-forest">Contact Form</h3>
              <p className="mt-2">
                If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided, will be stored for the purpose of processing the inquiry and in case of follow-up questions. We do not share this data without your consent. The processing of data entered in the contact form is based exclusively on your consent (Art. 6 para. 1 lit. a GDPR).
              </p>

              <h3 className="mt-5 font-bold text-forest">Server Log Files</h3>
              <p className="mt-2">
                The provider of the pages automatically collects and stores information in server log files, which your browser automatically transmits to us. These are: browser type and version, operating system used, referrer URL, hostname of the accessing computer, time of the server request, and IP address. This data is not merged with other data sources.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">4. Your Rights</h2>
              <p className="mt-3">
                You have the right to receive information free of charge about the origin, recipient, and purpose of your stored personal data at any time. You also have the right to request the correction, blocking, or deletion of this data. For this purpose, as well as for further questions regarding data protection, you can contact us at any time at the address given in the Legal Notice. Furthermore, you have the right to lodge a complaint with the competent supervisory authority.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-forest">5. Analytics and Advertising</h2>
              <p className="mt-3">
                We currently do not use any analytics tools or tracking software on our website. Should this change, we will update this privacy policy accordingly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
