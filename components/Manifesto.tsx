'use client'
import { useLocale } from '@/lib/i18n'

const TICKER_TEXT = [
  'MONACO', '·', 'GRAND PRIX 2026', '·',
  '04—07 JUIN', '·', 'NAVETTE MARITIME', '·',
  'MONACO', '·', 'GRAND PRIX 2026', '·',
  '04—07 JUIN', '·', 'NAVETTE MARITIME', '·',
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
