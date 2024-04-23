import gsap from 'gsap'

import type { AnimationsProps, TimelineAnimationsProps } from './types'

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

export const animate = ({ target, animationProps, scrollProps }: AnimationsProps) => {
  gsap.to(target, {
    ...animationProps,
    scrollTrigger: {
      trigger: target,
      toggleActions: 'restart reverse restart reverse' // in - out - in - out
    }
  })
}
