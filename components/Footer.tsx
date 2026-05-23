'use client'
import { useLocale } from '@/lib/i18n'

export default function Footer() {
  const { t } = useLocale()

  return (
    <footer
      className="px-6 py-10 lg:px-14"
      style={{ background: 'var(--black)' }}
    >
      <div
        className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '2rem' }}
      >
        <span
          className="font-display font-semibold"
          style={{
            color: '#fff',
            fontSize: '0.9rem',
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
          }}
        >
          Taxi Boat Monaco
        </span>

        <span className="t-label" style={{ color: 'rgba(255,255,255,0.25)' }}>
          {t.footer.event}
        </span>

        <span className="t-label" style={{ color: 'rgba(255,255,255,0.18)' }}>
          {t.footer.copy}
        </span>
      </div>
    </footer>
  )
}
