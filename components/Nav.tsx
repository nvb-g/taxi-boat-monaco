'use client'
import { useEffect, useState } from 'react'
import { useLocale } from '@/lib/i18n'

export default function Nav() {
  const { locale, setLocale, t } = useLocale()
  const [solid, setSolid] = useState(false)

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 60)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav id="nav" className={solid ? 'solid' : ''}>
      {/* Logo */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="font-display font-semibold tracking-tight"
        style={{
          fontSize: '0.85rem',
          letterSpacing: '-0.01em',
          textTransform: 'uppercase',
          color: solid ? 'var(--black)' : '#fff',
          transition: 'color 0.3s',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
        }}
      >
        Taxi Boat Monaco
      </button>

      <div className="flex items-center gap-5">
        {/* Lang */}
        {(['en', 'fr'] as const).map((l) => (
          <button
            key={l}
            onClick={() => setLocale(l)}
            className="t-label transition-colors"
            style={{
              color:
                locale === l
                  ? solid ? 'var(--red)' : '#fff'
                  : solid ? 'var(--mid)' : 'rgba(255,255,255,0.4)',
            }}
          >
            {l.toUpperCase()}
          </button>
        ))}

        {/* CTA */}
        <a
          href="tel:+33640610807"
          className="btn btn-red hidden sm:inline-flex"
          style={{ padding: '0.55rem 1.1rem', fontSize: '0.58rem' }}
        >
          {t.nav.cta}
        </a>
      </div>
    </nav>
  )
}
