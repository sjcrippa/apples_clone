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

  const [video, setVideo] = useState({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false
  })

  const [loadedData, setLoadedData] = useState<LoadedDataEvent[]>([])
  const { isEnd, isLastVideo, isPlaying, startPlay, videoId } = video

  useGSAP(() => {
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

  useEffect(() => {
    const currentProgress = 0
    const span = videoSpanRef.current

    if (span[videoId]) {
      // here we animate the progress of the video
      const anim = gsap.to(span[videoId], {
        onUpdate: () => {

        },
        onComplete: () => {

        }
      })
    }
  }, [videoId, startPlay])

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

  // This useEffect checks if loadedData exist, if so, the video start playing.
  useEffect(() => {
    if (loadedData.length > 0 && startPlay) { // only when data exist and startPlay is true.
      if (!isPlaying) {
        videoRef.current[videoId]?.pause()
      } else {
        videoRef.current[videoId]?.play()
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData])

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
      </section>

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
