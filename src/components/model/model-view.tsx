import * as THREE from 'three'
import { Suspense, useRef } from 'react'
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'

import Lights from './lights'
import IPhoneModel from './iphone'

import type { ModelViewProps } from '@/utils/types'
import type { OrbitControls as OrbitControlsType } from 'three/examples/jsm/Addons.js'
import type { MutableRefObject } from 'react'

export default function ModelView({
  index,
  groupRef,
  gsapType,
  setRotationState,
  item,
  size
}: ModelViewProps) {
  const controlRef: MutableRefObject<null> = useRef(null)

  const handleEndAnimation = () => {
    const currentControl = controlRef?.current as unknown as OrbitControlsType
    if (currentControl !== null) {
      setRotationState(currentControl.getAzimuthalAngle())
    }
  }

  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={1} />

      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />

      {/* Lights */}
      <Lights />

      {/* Model */}
      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={0.4}
        target={new THREE.Vector3(0, 0, 0)}
        onEnd={handleEndAnimation}

      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
      >
        <Suspense fallback={
          <Html>
            <div className='w-5 h-5 rounded-full animate-ping border-2 border-red-500'></div>
          </Html>
        }>
          <IPhoneModel
            scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  )
}
