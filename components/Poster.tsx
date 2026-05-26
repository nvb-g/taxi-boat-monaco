import Image from 'next/image'

export default function Poster() {
  return (
    <div className="flex justify-center" style={{ background: '#ffffff', padding: '64px 24px' }}>
      <Image
        src="/poster.jpg"
        alt="Taxi Boat Monaco — Grand Prix 2026"
        width={1096}
        height={1600}
        style={{ width: '100%', maxWidth: 520, height: 'auto' }}
        sizes="(max-width: 600px) 100vw, 520px"
      />
    </div>
  )
}
