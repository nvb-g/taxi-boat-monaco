'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useLocale } from '@/lib/i18n'

export default function Services() {
  const { t } = useLocale()
  const [lightbox, setLightbox] = useState(false)
  const items = t.services.items

  return (
    <section
      className="px-6 pb-24 lg:px-14 lg:pb-36"
      style={{ background: 'var(--white)' }}
      id="services"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          className="flex items-center justify-between mb-10 lg:mb-14"
          style={{ borderBottom: '2px solid var(--black)', paddingBottom: '1rem' }}
        >
          <span className="t-label" style={{ color: 'var(--mid)' }}>
            {t.services.label}
          </span>
          <span className="t-label" style={{ color: 'var(--red)' }}>
            Monaco 2026
          </span>
        </div>

        {/* Rows */}
        {items.map((svc) => (
          <div key={svc.num} className="svc-row">
            <span
              className="font-display font-semibold"
              style={{ fontSize: '0.7rem', color: 'var(--red)', letterSpacing: '0.05em' }}
            >
              {svc.num}
            </span>
            <span
              className="font-display font-semibold"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', color: 'var(--black)', textTransform: 'uppercase', letterSpacing: '-0.01em' }}
            >
              {svc.name}
            </span>
            <p className="t-body svc-desc" style={{ color: 'var(--mid)' }}>
              {svc.desc}
            </p>
          </div>
        ))}

        {/* Map */}
        <div className="flex justify-center mt-16 lg:mt-24">
          <Image
            src="/map.jpeg"
            alt="Carte du circuit de Monaco – zones de dépose Taxi Boat"
            width={2048}
            height={1035}
            style={{ width: '100%', maxWidth: 760, height: 'auto', display: 'block', cursor: 'zoom-in' }}
            sizes="(max-width: 640px) 100vw, 760px"
            onClick={() => setLightbox(true)}
          />
        </div>

        {/* Lightbox */}
        {lightbox && (
          <div
            onClick={() => setLightbox(false)}
            style={{
              position: 'fixed', inset: 0, zIndex: 1000,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'zoom-out', padding: '2rem',
            }}
          >
            <Image
              src="/map.jpeg"
              alt="Carte du circuit de Monaco – zones de dépose Taxi Boat"
              width={2048}
              height={1035}
              style={{ width: '100%', maxWidth: '90vw', maxHeight: '90vh', height: 'auto', display: 'block' }}
              sizes="90vw"
            />
          </div>
        )}

      </div>
    </section>
  )
}
