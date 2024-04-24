'use client'

import gsap from 'gsap'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import { useEffect, useState } from 'react'

import { heroVideo, smallHeroVideo } from '@/utils/data'

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
    } // reseting the event handler
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.5 })
    gsap.to('#cta', { opacity: 1, y: -50, delay: 2 })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <h1 id='hero' className="hero-title">iPhone 15 pro</h1>
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
        <p className='font-normal text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}
