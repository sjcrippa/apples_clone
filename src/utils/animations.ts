import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import type { AnimationsProps, TimelineAnimationsProps } from './types'

gsap.registerPlugin(ScrollTrigger)

export const animateTimeline = ({ timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps }: TimelineAnimationsProps) => {
  if (timeline !== null) {
    timeline.to(rotationRef.current.rotation, {
      y: rotationState,
      duration: 1,
      ease: 'power2.inOut'
    })

    timeline.to(
      firstTarget,
      {
        ...animationProps,
        ease: 'power2.inOut'
      },
      '<' // This character symbolizes to insert the animation at the start of the previous animation.
    )

    timeline.to(
      secondTarget,
      {
        ...animationProps,
        ease: 'power2.inOut'
      },
      '<'
    )
  }
}

export const animateRandom = ({ target, animationProps, scrollProps }: AnimationsProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse', // in - out - in - out, on scroll movement
      start: 'top 85%',
      ...scrollProps
    }
  })
}
