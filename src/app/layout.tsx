import type { Metadata } from 'next'
import { dmSerif, dmSans } from '@/lib/fonts'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} – Agentur für Webentwicklung & Marketing`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="min-h-screen bg-warm-white font-[family-name:var(--font-body)] text-near-black antialiased">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
