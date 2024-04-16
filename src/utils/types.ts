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
