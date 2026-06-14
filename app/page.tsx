import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Video from '@/components/Video'
import Overview from '@/components/Overview'
import Residences from '@/components/Residences'
import Amenities from '@/components/Amenities'
import Location from '@/components/Location'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Video />
      <Overview />
      <Residences />
      <Amenities />
      <Location />
      <Team />
      <Contact />
      <Footer />
    </main>
  )
}
