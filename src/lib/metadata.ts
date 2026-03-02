import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION } from './constants'

export function createMetadata({
  title,
  description,
  path = '',
}: {
  title?: string
  description?: string
  path?: string
}): Metadata {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} – Agentur für Webentwicklung & Marketing`
  const fullDescription = description || SITE_DESCRIPTION

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: `${SITE_URL}${path}`,
      siteName: SITE_NAME,
      locale: 'de_DE',
      type: 'website',
    },
  }
}
