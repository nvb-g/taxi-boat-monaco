'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type Locale = 'en' | 'fr'

const en = {
  locale: 'en' as Locale,
  nav: { cta: 'Book' },
  hero: {
    dates: '04 — 07 June 2026',
    title1: 'Taxi',
    title2: 'Boat',
    sub: 'Grand Prix de Monaco',
    desc: 'Maritime shuttle approved by Monaco\'s port authorities. Shaded vessel, direct drop-off at the circuit.',
    cta1: 'Call now',
    cta2: 'WhatsApp',
    team: 'The team',
  },
  manifesto: {
    line1: 'The sea route',
    line2: 'to Monaco\'s',
    line3: 'Grand Prix.',
    caption: 'June 4 – 7, 2026 · Monaco',
  },
  services: {
    label: 'What we offer',
    items: [
      { num: '01', name: 'Shaded Shuttle',    desc: 'Covered maritime vessel for transfers between Monaco\'s harbours.' },
      { num: '02', name: 'Circuit Drop-off',  desc: 'Direct access to the track for guests with valid event bracelets.' },
      { num: '03', name: 'Inter-port Routes', desc: 'Connections between all Monegasque ports throughout the weekend.' },
      { num: '04', name: 'Reactive Service',  desc: 'On-demand availability across all four days of the Grand Prix.' },
      { num: '05', name: 'Personal Care',     desc: 'Individual assistance for every journey, attentive to your needs.' },
    ],
  },
  team: {
    label: 'Your guides',
    intro: 'Marjorie, Amélie and Bénédicte will be with you throughout the entire Grand Prix weekend.',
    role: 'Maritime Guide',
    cta1: 'Call',
    cta2: 'WhatsApp',
  },
  gallery: { label: 'Monaco & the Sea' },
  contact: {
    label: 'Get in touch',
    title: 'Ready\nto board?',
    desc: 'Contact us directly for your maritime transfers during the Monaco Grand Prix.',
    cta1: 'Call now',
    cta2: 'WhatsApp',
  },
  footer: {
    copy: '© 2026 Taxi Boat Monaco',
    event: 'Monaco Grand Prix · June 4–7',
  },
}

const fr: typeof en = {
  locale: 'fr' as Locale,
  nav: { cta: 'Réserver' },
  hero: {
    dates: '04 — 07 Juin 2026',
    title1: 'Taxi',
    title2: 'Boat',
    sub: 'Grand Prix de Monaco',
    desc: 'Navette maritime agréée par les ports Monégasques. Navette ombragée avec dépose directe sur le circuit.',
    cta1: 'Appeler',
    cta2: 'WhatsApp',
    team: 'L\'équipe',
  },
  manifesto: {
    line1: 'Le chemin maritime',
    line2: 'vers le Grand Prix',
    line3: 'de Monaco.',
    caption: '4 – 7 Juin 2026 · Monaco',
  },
  services: {
    label: 'Nos services',
    items: [
      { num: '01', name: 'Navette Ombragée',    desc: 'Navette maritime couverte pour vos transferts entre les ports Monégasques.' },
      { num: '02', name: 'Accès Circuit',        desc: 'Dépose directe sur le circuit pour les passagers avec bracelets valides.' },
      { num: '03', name: 'Liaisons Inter-ports', desc: 'Connexions entre tous les ports Monégasques pendant tout le week-end.' },
      { num: '04', name: 'Service Réactif',      desc: 'Disponibilité à la demande sur les quatre jours du Grand Prix.' },
      { num: '05', name: 'Accompagnement',       desc: 'Assistance personnalisée pour chaque trajet, attentive à vos besoins.' },
    ],
  },
  team: {
    label: 'Vos guides',
    intro: 'Marjorie, Amélie et Bénédicte vous accompagneront pendant tout le week-end du Grand Prix.',
    role: 'Guide Maritime',
    cta1: 'Appeler',
    cta2: 'WhatsApp',
  },
  gallery: { label: 'Monaco & la Mer' },
  contact: {
    label: 'Contact',
    title: 'Prêts à\nembarquer ?',
    desc: 'Contactez-nous directement pour vos transferts maritimes pendant le Grand Prix de Monaco.',
    cta1: 'Appeler',
    cta2: 'WhatsApp',
  },
  footer: {
    copy: '© 2026 Taxi Boat Monaco',
    event: 'Grand Prix de Monaco · 4–7 Juin',
  },
}

export const translations = { en, fr }
export type T = typeof en

const LocaleCtx = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  t: T
}>({ locale: 'en', setLocale: () => {}, t: en })

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')
  return (
    <LocaleCtx.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LocaleCtx.Provider>
  )
}

export const useLocale = () => useContext(LocaleCtx)
