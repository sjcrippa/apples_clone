'use client'

import { useGSAP } from '@gsap/react'
import { animateRandom } from '@/utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '@/utils/data'
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export default function Features() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause reverse restart',
        start: '-10% bottom'
      },
      onComplete: () => {
        videoRef.current?.play()
      }
    })
    animateRandom({ target: '#features_title', animationProps: { y: 0, opacity: 1 } })
    animateRandom({
      target: '.g_grow',
      animationProps: { scale: 1, opacity: 1, ease: 'power1' },
      scrollProps: { scrub: 5.5 }
    })
    animateRandom({
      target: '.g_text',
      animationProps: { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 }
    })
  }, [])

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">Explore the full story.</h1>
        </div>

        <div className='flex flex-col justify-center items-center overflow-hidden'>
          <div className='mt-32 mb-24 pl-24'>
            <h2 className='text-5xl lg:text-7xl font-semibold'>iPhone.</h2>
            <h3 className='text-5xl lg:text-7xl font-semibold'>Forged in titanium.</h3>
          </div>
        </div>

        <div className='flex-center flex-col sm:px-10'>
          <div className='relative h-[50vh] w-full flex items-center'>
            <video
              id='exploreVideo'
              ref={videoRef}
              playsInline
              preload='none'
              muted
              autoPlay
              className='w-full h-full object-cover object-center'
            >
              <source src={exploreVideo} type='video/mp4' />
            </video>
          </div>

          <div className='flex flex-col w-full relative'>
            <div className='feature-video-container'>
              <div className='overflow-hidden flex-1 h-[50vh]'>
                <Image
                  src={explore1Img}
                  alt='titanium'
                  className='feature-video g_grow'
                />
              </div>
              <div className='overflow-hidden flex-1 h-[50vh]'>
                <Image
                  src={explore2Img}
                  alt='titanium two'
                  className='feature-video g_grow'
                />
              </div>
            </div>

            <div className="feature-text-container">
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  iPhone 15 Pro is {' '}
                  <span className="text-white">
                    the first iPhone to feature an aerospace-grade titanium design
                  </span>,
                  using the same alloy that spacecrafts use for missions to Mars.
                </p>
              </div>

              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  Titanium has one of the best strength-to-weight ratios of any metal, making these our {' '}
                  <span className="text-white">
                    lightest Pro models ever.{' '}
                  </span>
                  You&apos;ll notice the difference the moment you pick one up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
