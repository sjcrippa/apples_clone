import type { SyntheticEvent, Dispatch, MutableRefObject, SetStateAction } from 'react'
import type { StaticImageData } from 'next/image'
import type { Group, Object3DEventMap } from 'three'

export type LoadedDataEvent = SyntheticEvent<HTMLVideoElement, Event> | HTMLVideoElement | null

export interface ModelViewProps {
  index: number
  groupRef: MutableRefObject<Group<Object3DEventMap>>
  gsapType: string
  controlRef: MutableRefObject<undefined>
  setRotationState: Dispatch<SetStateAction<number>>
  item: {
    title: string
    color: string[]
    img: StaticImageData
  }
  size: string
}

export interface ModelProps {
  id: number
  title: string
  color: string[]
  img: StaticImageData
}

export interface IPhoneModelProps {
  item: {
    img: string | StaticImageData
    color: string[]
  }
  scale: number[]
  size: string
}

export interface TimelineAnimationsProps {
  timeline: gsap.core.Timeline | null
  rotationRef: MutableRefObject<Group<Object3DEventMap>>
  rotationState: number
  firstTarget: string
  secondTarget: string
  animationProps: {
    transform: string
    duration: number
  }
}

export interface AnimationsProps {
  target: string
  animationProps: {
    y?: number
    opacity: number
    scale?: number
    ease?: string
    duration?: number
  }
  scrollProps?: {
    scrub: number
    scrollTrigger?: {
      trigger: string
      toggleActions: string
      start: string
    }
  }
}
