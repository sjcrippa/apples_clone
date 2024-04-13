'use client'

import gsap from 'gsap'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '@/utils/data'
import Link from 'next/link'

export default function Hero() {
  const [videoSrc, setVideoSrc] = useState('')

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    setVideoSrc(window.innerWidth < 760 ? smallHeroVideo : heroVideo)

    window.addEventListener('resize', handleVideoSrcSet)

    return () => {
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id='hero' className="hero-title">iPhone 15 pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div
        // cta = call to action
        id='cta'
        className='flex flex-col items-center opacity-0 translate-y-20'
      >
        <Link href='#highlights' className='btn'>Buy</Link>
        <p className='font-normal text-xl'>Lorem ipsum dolor sit amet.</p>
      </div>
    </section>
  )
}
