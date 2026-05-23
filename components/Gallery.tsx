'use client'
import Image from 'next/image'
import { useLocale } from '@/lib/i18n'

const PHOTOS = [
  { src: '/gallery-1.webp', alt: 'Monaco boat',       label: 'Boat' },
  { src: '/gallery-2.webp', alt: 'Monaco harbour',    label: 'Harbour' },
  { src: '/gallery-3.webp', alt: 'Monaco coastline',  label: 'Monaco' },
  { src: '/hero.webp',      alt: 'Monaco aerial',     label: 'Côte d\'Azur' },
]

export default function Gallery() {
  const { t } = useLocale()

  return (
    <section id="gallery" style={{ background: 'var(--black)' }}>
      {/* Label bar */}
      <div
        className="px-6 py-5 lg:px-14 flex items-center justify-between"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span className="t-label" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {t.gallery.label}
        </span>
        <span className="t-label" style={{ color: 'var(--red)', opacity: 0.7 }}>
          Monaco 2026
        </span>
      </div>

      {/* Photo panels */}
      <div className="grid grid-cols-2 lg:grid-cols-4" style={{ gap: 2 }}>
        {PHOTOS.map((p, i) => (
          <div key={i} className="gal-panel">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
              loading="lazy"
            />
            <div
              className="absolute inset-x-0 bottom-0 flex items-end justify-end px-4 pb-4"
              style={{
                height: '55%',
                background: 'linear-gradient(to top, rgba(10,10,10,0.75), transparent)',
              }}
            >
              <span
                className="font-display font-bold"
                style={{ color: 'rgba(255,255,255,0.15)', fontSize: '3.5rem', lineHeight: 1, letterSpacing: '-0.03em' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
