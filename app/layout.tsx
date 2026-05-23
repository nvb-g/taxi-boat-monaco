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

export const metadata: Metadata = {
  title: 'Taxi Boat Monaco – Grand Prix 2026 | Maritime Shuttle',
  description:
    "Navette maritime pendant le Grand Prix de Monaco 2026. Agréée par les ports Monégasques, dépose directe sur le circuit. 4–7 Juin 2026.",
  keywords:
    'taxi boat monaco, navette maritime monaco, grand prix monaco 2026, boat shuttle monaco, f1 monaco 2026',
  openGraph: {
    title: 'Taxi Boat Monaco – Grand Prix 2026',
    description: 'Maritime shuttle · Monaco Grand Prix · June 4–7, 2026.',
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['fr_FR'],
    images: [{ url: '/poster.jpg', width: 900, height: 1200 }],
  },
  alternates: {
    canonical: 'https://taxiboat-monaco.com',
    languages: {
      en: 'https://taxiboat-monaco.com',
      fr: 'https://taxiboat-monaco.com?lang=fr',
    },
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <head>
        {/* Clash Display via Fontshare */}
        <link rel="preconnect" href="https://api.fontshare.com" />
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
              description:
                'Maritime shuttle service during the Monaco Grand Prix 2026',
              url: 'https://taxiboat-monaco.com',
              telephone: '+33640610807',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Monaco',
                addressCountry: 'MC',
              },
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                validFrom: '2026-06-04',
                validThrough: '2026-06-07',
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
