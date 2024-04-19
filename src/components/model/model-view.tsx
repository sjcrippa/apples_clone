import * as THREE from 'three'
import { Suspense } from 'react'
import { Html, OrbitControls, PerspectiveCamera, View } from '@react-three/drei'

import Lights from './lights'
import IPhoneModel from './iphone'

import type { ModelViewProps } from '@/utils/types'

export default function ModelView({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationState,
  item,
  size
}: ModelViewProps) {
  return (
    <View
      index={index}
      id={gsapType}
      className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}
    >
      {/* Ambient Light */}
      <ambientLight intensity={1} />
      5
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        onEnd={() => { setRotationState(controlRef?.current?.getAzimuthalAngle()) }}
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
