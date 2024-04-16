'use client'

import gsap from 'gsap'
import * as THREE from 'three'
import { View } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useGSAP } from '@gsap/react'
import { useRef, useState } from 'react'

import ModelView from './model-view'
import { yellowImg } from '@/utils/data'

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

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">Take a closer look.</h1>

        <div className='flex flex-col items-center mt-5'>
          <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>

            <ModelView
              index={1}
              groupRef={small}
              gsapType='view1'
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType='view2'
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas>
              <View.Port />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  )
}