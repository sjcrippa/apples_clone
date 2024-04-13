'use client'

import gsap from 'gsap'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'

import VideoCarousel from './video-carousel'
import { rightImg, watchImg } from '@/utils/data'

export default function Highlights() {
  useGSAP(() => {
    gsap.to('#title', { opacity: 1, y: 0 })
    gsap.to('.link', { opacity: 1, y: 0, duration: 1, stagger: 0.25 })
  }, [])

  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className='mb-12 w-full md:flex items-end justify-between'>
          <h1 id="title" className="section-heading">Get the highlights.</h1>

          <div className='flex flex-wrap items-end gap-5'>
            <p className='link'>
              Watch the film
              <Image src={watchImg} alt='play logo' className='ml-2' />
            </p>
            <p className='link'>
              Watch the event
              <Image src={rightImg} alt='right logo' className='ml-2' />
            </p>
          </div>
        </div>

        <VideoCarousel />

      </div>
    </section>
  )
}
