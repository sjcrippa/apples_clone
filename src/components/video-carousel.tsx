import gsap from 'gsap'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import { useEffect, useRef, useState } from 'react'

import { hightlightsSlides } from '@/constants/data'
import { pauseImg, playImg, replayImg } from '@/utils/data'

import type { LoadedDataEvent } from '@/utils/types'

gsap.registerPlugin(ScrollTrigger)

export default function VideoCarousel() {
  const videoRef = useRef<HTMLVideoElement[]>([])
  const videoSpanRef = useRef<HTMLSpanElement[]>([])
  const videoDivRef = useRef<HTMLSpanElement[]>([])
  const [loadedData, setLoadedData] = useState<LoadedDataEvent[]>([])
  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  })

  const { isEnd, isLastVideo, isPlaying, startPlay, videoId } = video

  // Video start:
  useEffect(() => {
    if (loadedData.length > 0 && startPlay) { // only when data exist and startPlay is true.
      if (!isPlaying) {
        videoRef.current[videoId]?.pause()
      } else {
        videoRef.current[videoId]?.play()
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

  // Video process handler:
  const handleProcess = (type: string, index?: number) => {
    switch (type) {
      case 'video-end':
        if (index !== undefined) { // checking for a defined index value
          setVideo((prevVideo) => ({ ...prevVideo, isEnd: true, videoId: index + 1 }))
        }
        break
      case 'video-last':
        setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: true }))
        break
      case 'video-reset':
        setVideo((prevVideo) => ({ ...prevVideo, isLastVideo: false, videoId: 0 }))
        break
      case 'pause':
        setVideo((prevVideo) => ({ ...prevVideo, isPlaying: !prevVideo.isPlaying }))
        break
      case 'play':
        setVideo((prevVideo) => ({ ...prevVideo, isPlaying: !prevVideo.isPlaying }))
        break
      default:
        return video
    }
  }

  // Slider and video animations:
  useGSAP(() => {
    gsap.to('#slider', {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: 'power2.inOut'
    })
    gsap.to('#video', {
      scrollTrigger: {
        trigger: '#video',
        toggleActions: 'restart none none none'
      },
      onComplete: () => {
        setVideo((prevVideo) => ({
          ...prevVideo,
          startPlay: true,
          isPlaying: true
        }))
      }
    })
  }, [isEnd, videoId])

  // Tracking bar animations and logics:
  useEffect(() => {
    let currentProgress = 0
    const span = videoSpanRef.current

    if (span[videoId] !== undefined && span[videoId] !== null) { // span[videoId] will never be undefined or null, but we do the verification for linter.
      // here we animate the progress of the video
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100) // multiplicado x100 para obtener el porcentaje

          if (progress !== currentProgress) {
            currentProgress = progress

            gsap.to(videoDivRef.current[videoId], {
              width: window.innerWidth < 760
                ? '10vw'
                : window.innerWidth < 1200
                  ? '10vw'
                  : '4vw'
            })

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: 'white'
            })
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: '12px'
            })
            gsap.to(span[videoId], {
              backgroundColor: '#afafaf'
            })
          }
        }
      })

      if (videoId === 0) {
        anim.restart()
      }

      const animUpdate = () => {
        anim.progress(videoRef.current[videoId].currentTime / hightlightsSlides[videoId].videoDuration)
      }

      if (isPlaying) {
        gsap.ticker.add(animUpdate) // ticker is used to update the progress bar
      } else {
        gsap.ticker.remove(animUpdate)
      }
    }
  }, [videoId, startPlay, isPlaying])

  // Video data handler:
  const handleLoadedMetadata = (index: number, videoElement: HTMLVideoElement) => {
    setLoadedData((prevData) => {
      if (prevData[index] == null) { // Checks that video it's already laod.
        const newData = [...prevData]
        newData[index] = videoElement
        return newData
      }
      return prevData // If it's already load, we do nothing.
    })
  }

  return (
    <>
      <section className="flex items-center">
        {
          hightlightsSlides.map((list, index) => (
            <div
              id="slider"
              key={list.id}
              className='sm:pr-20 pr-10'
            >
              <div className="video-carousel_container">
                <div className='w-full h-full flex-center rounded-3xl overflow-hidden bg-black'>
                  <video
                    id='video'
                    playsInline={true}
                    preload='auto'
                    className={`${list.id === 2 && 'translate-x-44'} pointer-events-none`}
                    muted
                    ref={(element) => {
                      if (element !== null) {
                        videoRef.current[index] = element
                        handleLoadedMetadata(index, element) // Pass the reference to video instead of the event.
                      }
                    }}
                    onPlay={() => {
                      setVideo((prevVideo) => ({
                        ...prevVideo, isPlaying: true
                      }))
                    }}
                    onEnded={() => {
                      index !== 3
                        ? handleProcess('video-end', index)
                        : handleProcess('video-last')
                    }}
                  >
                    <source src={list.video} type='video/mp4' />
                  </video>
                </div>
                <div className='absolute top-12 left-[5%] z-10'>
                  {
                    list.textLists.map((text) => (
                      <p className='md:text-2xl text-xl font-medium' key={text}>{text}</p>
                    ))
                  }
                </div>
              </div>
            </div>
          ))
        }
      </section >

      <section className='relative flex-center mt-10'>
        <div className='flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full'>
          {
            videoRef.current.map((_, index) => (
              <span
                ref={(element) => {
                  if (element != null) {
                    videoDivRef.current[index] = element
                  }
                }}
                key={index}
                className='mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer'
              >
                <span
                  ref={(element) => {
                    if (element != null) {
                      videoSpanRef.current[index] = element
                    }
                  }}
                  className='absolute h-full w-full rounded-full'
                />
              </span>
            ))
          }
        </div>

        <button className='control-btn'>
          <Image
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? 'replay' : !isPlaying ? 'play' : 'pause'}
            onClick={isLastVideo
              ? () => { handleProcess('video-reset') }
              : !isPlaying
                  ? () => { handleProcess('play') }
                  : () => { handleProcess('pause') }
            }
          />
        </button>
      </section>
    </>
  )
}
