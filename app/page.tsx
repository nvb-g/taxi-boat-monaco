import Nav      from '@/components/Nav'
import Hero     from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Services  from '@/components/Services'
import Team      from '@/components/Team'
import Poster    from '@/components/Poster'
import Gallery   from '@/components/Gallery'
import Contact   from '@/components/Contact'
import Footer    from '@/components/Footer'

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <Services />
        <Team />
        <Poster />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
