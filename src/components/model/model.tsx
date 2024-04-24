'use client'

import gsap from 'gsap'
import * as THREE from 'three'
import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'

import ModelView from './model-view'
import { yellowImg } from '@/utils/data'
import { models, sizes } from '@/constants/data'
import { animateTimeline } from '@/utils/animations'

export default function Model() {
  const [size, setSize] = useState('small')
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg
  })

  // Camera control for the model view
  const cameraControlSmall = useRef()
  const cameraControlLarge = useRef()

  // Model tracking
  const small = useRef(new THREE.Group())
  const large = useRef(new THREE.Group())

  // Rotation tracking
  const [smallRotation, setSmallRotation] = useState(0)
  const [largeRotation, setLargeRotation] = useState(0)

  // Animation for transition into models sizes
  const timeline = gsap.timeline()

  // Fixing eventSource bug
  const rootRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    rootRef.current = document.getElementById('root')
  }, [])

  useEffect(() => {
    if (size === 'large') {
      animateTimeline({
        timeline,
        rotationRef: small,
        rotationState: smallRotation,
        firstTarget: '#view1',
        secondTarget: '#view2',
        animationProps: {
          transform: 'translateX(-100%)',
          duration: 2
        }
      })
    }
    if (size === 'small') {
      animateTimeline({
        timeline,
        rotationRef: large,
        rotationState: largeRotation,
        firstTarget: '#view2',
        secondTarget: '#view1',
        animationProps: {
          transform: 'translateX(0)',
          duration: 2
        }
      })
    }
  }, [size, smallRotation, timeline, largeRotation])

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />

            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: 'fixed',
                zIndex: -1,
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                overflow: 'hidden',
                pointerEvents: 'none' // Evitar que el Canvas intercepte eventos de ratón

              }}
              eventSource={rootRef.current ?? document.body}
            >
              <View.Port />
            </Canvas>
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {
                  models.map((item, i) => (
                    <li key={i} className="w-6 h-6 rounded-full mx-2 cursor-pointer" style={{ backgroundColor: item.color[0] }} onClick={() => { setModel(item) }} />
                  ))
                }
              </ul>

              <button className="size-btn-container">
                {
                  sizes.map(({ label, value }) => (
                    <span key={label} className="size-btn" style={{ backgroundColor: size === value ? 'white' : 'transparent', color: size === value ? 'black' : 'white' }} onClick={() => { setSize(value) }}>
                      {label}
                    </span>
                  ))
                }
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
