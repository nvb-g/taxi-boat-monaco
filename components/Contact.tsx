'use client'
import { useLocale } from '@/lib/i18n'

export default function Contact() {
  const { t } = useLocale()
  const c = t.contact

  return (
    <section id="contact" style={{ background: 'var(--white)' }}>

      {/* Text block */}
      <div className="px-6 py-20 lg:px-14 lg:py-36">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-end">

            {/* Left — big headline */}
            <div>
              <span className="t-label mb-6 block" style={{ color: 'var(--red)' }}>
                {c.label}
              </span>
              <h2
                className="t-display"
                style={{ color: 'var(--black)', whiteSpace: 'pre-line' }}
              >
                {c.title}
              </h2>
            </div>

            {/* Right — desc + CTAs */}
            <div>
              <p className="t-body mb-8" style={{ color: 'var(--mid)' }}>
                {c.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+33640610807" className="btn btn-red">
                  {c.cta1}
                </a>
                <a
                  href="https://wa.me/33640610807"
                  className="btn btn-outline-b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.cta2}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>


    </section>
  )
}
