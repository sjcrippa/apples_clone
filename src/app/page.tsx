import Features from '@/components/features'
import Hero from '@/components/hero'
import Highlights from '@/components/highlights'
import Model from '@/components/model/model'
import Navbar from '@/components/navbar'

export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
    </main>
  )
}
