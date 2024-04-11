import { appleImg } from '@/utils/data'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Image src={appleImg} alt="apple" />
      <video width="320" height="240" controls preload="none">
        <source src='/public/assets/videos/explore.mp4' type='video/mp4' />
      </video>
    </main>
  )
}
