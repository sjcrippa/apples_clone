import Features from '@/components/features'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import Highlights from '@/components/highlights'
import HowItWorks from '@/components/how-it-works'
import Model from '@/components/model/model'
import Navbar from '@/components/navbar'

export default function HomePage() {
  return (
    <main className='overflow-y-auto'>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}
