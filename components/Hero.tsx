'use client'
import Image from 'next/image'
import { useLocale } from '@/lib/i18n'

export default function Hero() {
  const { t } = useLocale()

  return (
    <section
      id="home"
      className="relative overflow-hidden"
      style={{ height: '100svh', minHeight: 600 }}
    >
      {/* Photo — nearly full bleed, let it breathe */}
      <Image
        src="/hero.webp"
        alt="Vue aérienne du port de Monaco – Taxi Boat navette maritime Grand Prix 2026"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient — bottom heavy for text legibility */}
      <div
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: '75%',
          background:
            'linear-gradient(to top, rgba(10,10,10,0.96) 0%, rgba(10,10,10,0.75) 35%, rgba(10,10,10,0.3) 65%, transparent 100%)',
        }}
      />
      {/* Left vignette */}
      <div
        className="absolute inset-y-0 left-0 pointer-events-none"
        style={{
          width: '55%',
          background:
            'linear-gradient(to right, rgba(10,10,10,0.35) 0%, transparent 100%)',
        }}
      />

      {/* ── Date chip — top right ── */}
      <div
        className="absolute top-24 right-8 lg:top-28 lg:right-14"
        style={{ zIndex: 10 }}
      >
        <span
          className="t-label"
          style={{
            color: '#fff',
            background: 'var(--red)',
            padding: '0.4rem 0.9rem',
            display: 'inline-block',
          }}
        >
          {t.hero.dates}
        </span>
      </div>

      {/* ── Bottom content bar ── */}
      <div
        className="absolute inset-x-0 bottom-0 px-8 pb-10 lg:px-14 lg:pb-14"
        style={{ zIndex: 10 }}
      >
        {/* Sub-label */}
        <p
          className="mb-4"
          style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.05em' }}
        >
          {t.hero.sub} · Maritime Shuttle
        </p>

        {/* Title */}
        <h1
          className="font-display font-bold"
          style={{
            fontSize: 'clamp(3.5rem, 7vw, 7.5rem)',
            lineHeight: 0.88,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            color: '#fff',
            marginBottom: '1.75rem',
          }}
        >
          Taxi Boat
        </h1>

        {/* Red rule */}
        <div style={{ width: '3rem', height: 3, background: 'var(--red)', marginBottom: '1.25rem' }} />

        {/* Description + CTAs row */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10">
          <p
            style={{
              color: '#fff',
              fontSize: '0.88rem',
              lineHeight: 1.65,
              maxWidth: '28rem',
              opacity: 0.8,
            }}
          >
            {t.hero.desc}
          </p>

          <div className="flex gap-2 shrink-0">
            <a href="tel:+33640610807" className="btn btn-red">
              {t.hero.cta1}
            </a>
            <a
              href="https://wa.me/33640610807"
              className="btn btn-outline-w"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
