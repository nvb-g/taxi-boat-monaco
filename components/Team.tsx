'use client'
import { useLocale } from '@/lib/i18n'

const GUIDES = [
  { name: 'Marjorie',  phone: '+33 6 40 61 08 07', tel: '+33640610807', showContact: true },
  { name: 'Amélie',    phone: null,                 tel: null,           showContact: false },
  { name: 'Bénédicte', phone: null,                 tel: null,           showContact: false },
]

export default function Team() {
  const { t } = useLocale()

  return (
    <section id="team" style={{ background: 'var(--red)' }}>

      {/* ── Header ── */}
      <div
        className="px-8 lg:px-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4"
        style={{
          borderBottom: '1px solid rgba(255,255,255,0.18)',
          paddingTop: '3.5rem',
          paddingBottom: '3.5rem',
        }}
      >
        <span className="t-label" style={{ color: '#fff' }}>
          {t.team.label}
        </span>
        <p
          className="t-body max-w-sm lg:text-right"
          style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.82rem' }}
        >
          {t.team.intro}
        </p>
      </div>

      {/* ── Guide columns ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {GUIDES.map((g, i) => (
          <div
            key={g.name}
            className="flex flex-col"
            style={{
              padding: '3.5rem 3rem 3.5rem',
              borderBottom: '1px solid rgba(255,255,255,0.18)',
              borderRight: i < 2 ? '1px solid rgba(255,255,255,0.18)' : undefined,
            }}
          >
            {/* Index + role */}
            <div
              className="flex items-center justify-between"
              style={{ marginBottom: '2.5rem' }}
            >
              <span
                className="font-display"
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="t-label"
                style={{ color: 'rgba(255,255,255,0.45)' }}
              >
                {t.team.role}
              </span>
            </div>

            {/* Name */}
            <h2
              className="font-display font-bold"
              style={{
                /* Sized to fit the longest name (Bénédicte, 9 chars) in column */
                fontSize: 'clamp(2rem, 3.2vw, 3.6rem)',
                lineHeight: 0.9,
                letterSpacing: '-0.025em',
                textTransform: 'uppercase',
                color: '#fff',
                marginBottom: '2.5rem',
                wordBreak: 'keep-all',
                whiteSpace: 'nowrap',
              }}
            >
              {g.name}
            </h2>

            {/* Thin rule */}
            <div
              style={{
                height: 1,
                background: 'rgba(255,255,255,0.25)',
                marginBottom: '2rem',
              }}
            />

            {/* Phone + buttons — only for main contact */}
            {g.showContact && (
              <>
                <p
                  className="font-sans"
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: '#fff',
                    letterSpacing: '0.01em',
                    marginBottom: '2rem',
                  }}
                >
                  {g.phone}
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                  <a
                    href={`tel:${g.tel}`}
                    className="btn"
                    style={{
                      background: '#0A0A0A',
                      color: '#fff',
                      border: '1px solid #0A0A0A',
                      justifyContent: 'center',
                      padding: '1rem 1.5rem',
                    }}
                  >
                    {t.team.cta1}
                  </a>
                  <a
                    href={`https://wa.me/${g.tel!.replace('+', '')}`}
                    className="btn"
                    style={{
                      background: 'transparent',
                      color: '#fff',
                      border: '2px solid rgba(255,255,255,0.65)',
                      justifyContent: 'center',
                      padding: '1rem 1.5rem',
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                  <a
                    href="mailto:contact@taxiboatmonacof1.com"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      marginTop: '0.5rem',
                      fontSize: '0.78rem',
                      color: 'rgba(255,255,255,0.55)',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                      letterSpacing: '0.01em',
                    }}
                  >
                    contact@taxiboatmonacof1.com
                  </a>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
