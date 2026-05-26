'use client'
import { useLocale } from '@/lib/i18n'

const TICKER_TEXT = [
  'MONACO', '→', 'NICE', '→', 'VILLEFRANCHE', '→', 'VINTIMILLE', '·',
  'GRAND PRIX 2026', '·', 'NAVETTE MARITIME', '·',
  'MONACO', '→', 'NICE', '→', 'VILLEFRANCHE', '→', 'VINTIMILLE', '·',
  'GRAND PRIX 2026', '·', 'NAVETTE MARITIME', '·',
]

export default function Manifesto() {
  const { t } = useLocale()

  return (
    <div>
      {/* Red ticker strip */}
      <div
        className="overflow-hidden flex items-center"
        style={{ background: 'var(--red)', borderTop: '1px solid rgba(255,255,255,0.12)', height: '3rem' }}
        aria-hidden="true"
      >
        <div className="marquee-track items-center">
          {[...TICKER_TEXT, ...TICKER_TEXT].map((word, i) => (
            <span
              key={i}
              className="font-display font-semibold mx-4"
              style={{
                fontSize: 'clamp(0.7rem, 1.2vw, 0.85rem)',
                letterSpacing: '0.15em',
                color: word === '·' ? 'rgba(255,255,255,0.4)' : '#fff',
              }}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* Ports strip */}
      <div
        className="px-6 lg:px-14 py-10"
        style={{ background: 'var(--white)', borderBottom: '1px solid #e8e8e8' }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="t-label mb-5" style={{ color: 'var(--mid)' }}>
            Ports desservis
          </p>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
            {[
              { name: 'Monaco', main: true },
              { name: 'Nice', main: false },
              { name: 'Villefranche-sur-Mer', main: false },
              { name: 'Vintimille', main: false },
              { name: '& alentours', main: false },
            ].map((port, i, arr) => (
              <span key={port.name} className="flex items-baseline gap-x-4">
                <span
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.9rem)',
                    fontWeight: port.main ? 700 : 300,
                    letterSpacing: '-0.01em',
                    color: port.main ? 'var(--red)' : 'var(--black)',
                  }}
                >
                  {port.name}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: '#ccc', fontSize: '1rem', fontWeight: 300 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Statement section */}
      <section
        className="px-6 py-20 lg:px-14 lg:py-32"
        style={{ background: 'var(--white)' }}
      >
        <div className="max-w-5xl">
          <p
            className="t-label mb-8"
            style={{ color: 'var(--red)' }}
          >
            {t.manifesto.caption}
          </p>

          <p
            className="t-display"
            style={{ color: 'var(--black)' }}
          >
            {t.manifesto.line1}
            <br />
            {t.manifesto.line2}
            <br />
            <span style={{ color: 'var(--red)' }}>{t.manifesto.line3}</span>
          </p>
        </div>
      </section>
    </div>
  )
}
