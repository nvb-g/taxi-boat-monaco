import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css'
import { LocaleProvider } from '@/lib/i18n'

const manrope = Manrope({
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap',
})

const BASE_URL = 'https://taxiboat-monaco.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Taxi Boat Monaco – Grand Prix 2026 | Navette Maritime',
    template: '%s | Taxi Boat Monaco',
  },
  description:
    'Navette maritime officielle pendant le Grand Prix de Monaco 2026. Agréée par les ports Monégasques, dépose directe sur le circuit. 4–7 Juin 2026. Réservation par téléphone ou WhatsApp.',
  keywords: [
    'taxi boat monaco',
    'navette maritime monaco',
    'grand prix monaco 2026',
    'boat shuttle monaco f1',
    'transport maritime monaco',
    'navette port monaco',
    'taxi bateau monaco',
  ],
  authors: [{ name: 'Taxi Boat Monaco' }],
  creator: 'Taxi Boat Monaco',
  openGraph: {
    title: 'Taxi Boat Monaco – Navette Maritime Grand Prix 2026',
    description: 'Navette maritime officielle Monaco Grand Prix · 4–7 Juin 2026. Réservation par téléphone ou WhatsApp.',
    type: 'website',
    url: BASE_URL,
    siteName: 'Taxi Boat Monaco',
    locale: 'fr_FR',
    alternateLocale: ['en_US'],
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Taxi Boat Monaco – Navette Maritime Grand Prix 2026',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taxi Boat Monaco – Grand Prix 2026',
    description: 'Navette maritime officielle Monaco Grand Prix · 4–7 Juin 2026.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en': `${BASE_URL}/en`,
      'fr': `${BASE_URL}/fr`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={manrope.variable}>
      <head>
        {/* Clash Display via Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Taxi Boat Monaco',
              description: 'Navette maritime officielle pendant le Grand Prix de Monaco 2026. Agréée par les ports Monégasques.',
              url: BASE_URL,
              telephone: '+33640610807',
              image: `${BASE_URL}/og-image.jpg`,
              priceRange: '€€€',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Monaco',
                addressCountry: 'MC',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 43.7384,
                longitude: 7.4246,
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                validFrom: '2026-06-04',
                validThrough: '2026-06-07',
                dayOfWeek: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
              },
              contactPoint: [
                {
                  '@type': 'ContactPoint',
                  telephone: '+33640610807',
                  contactType: 'reservations',
                  name: 'Marjorie',
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+33609889012',
                  contactType: 'reservations',
                  name: 'Amélie',
                },
                {
                  '@type': 'ContactPoint',
                  telephone: '+33649817418',
                  contactType: 'reservations',
                  name: 'Bénédicte',
                },
              ],
              event: {
                '@type': 'Event',
                name: 'Grand Prix de Monaco 2026',
                startDate: '2026-06-04',
                endDate: '2026-06-07',
                location: {
                  '@type': 'Place',
                  name: 'Circuit de Monaco',
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Monaco',
                    addressCountry: 'MC',
                  },
                },
              },
            }),
          }}
        />
      </head>
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
