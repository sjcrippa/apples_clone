import Hero from '@/components/hero'
import Highlights from '@/components/highlights'
import Navbar from '@/components/navbar'

export default function page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Highlights />
    </main>
  )
}
