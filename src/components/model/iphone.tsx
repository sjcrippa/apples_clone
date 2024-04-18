'use client'

import * as THREE from 'three'
import { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

import type * as THREEtype from 'three'
import type { GLTF } from 'three-stdlib'

interface IPhoneModelProps {
  item: {
    img: string
    color: string[]
  }
}

type GLTFResult = GLTF & {
  nodes: {
    ttmRoLdJipiIOmf: THREEtype.Mesh
    DjsDkGiopeiEJZK: THREEtype.Mesh
    buRWvyqhBBgcJFo: THREEtype.Mesh
    MrMmlCAsAxJpYqQ_0: THREEtype.Mesh
    wqbHSzWaUxBCwxY_0: THREEtype.Mesh
    QvGDcbDApaGssma: THREEtype.Mesh
    vFwJFNASGvEHWhs: THREEtype.Mesh
    evAxFwhaQUwXuua: THREEtype.Mesh
    USxQiqZgxHbRvqB: THREEtype.Mesh
    TvgBVmqNmSrFVfW: THREEtype.Mesh
    GuYJryuYunhpphO: THREEtype.Mesh
    pvdHknDTGDzVpwc: THREEtype.Mesh
    CfghdUoyzvwzIum: THREEtype.Mesh
    DjdhycfQYjKMDyn: THREEtype.Mesh
    usFLmqcyrnltBUr: THREEtype.Mesh
    xXDHkMplTIDAXLN: THREEtype.Mesh
    vELORlCJixqPHsZ: THREEtype.Mesh
    EbQGKrWAqhBHiMv: THREEtype.Mesh
    EddVrWkqZTlvmci: THREEtype.Mesh
    KSWlaxBcnPDpFCs: THREEtype.Mesh
    TakBsdEjEytCAMK: THREEtype.Mesh
    IykfmVvLplTsTEW: THREEtype.Mesh
    wLfSXtbwRlBrwof: THREEtype.Mesh
    WJwwVjsahIXbJpU: THREEtype.Mesh
    YfrJNXgMvGOAfzz: THREEtype.Mesh
    DCLCbjzqejuvsqH: THREEtype.Mesh
    CdalkzDVnwgdEhS: THREEtype.Mesh
    NtjcIgolNGgYlCg: THREEtype.Mesh
    pXBNoLiaMwsDHRF: THREEtype.Mesh
    IkoiNqATMVoZFKD: THREEtype.Mesh
    rqgRAGHOwnuBypi: THREEtype.Mesh
  }
  materials: {
    hUlRcbieVuIiOXG: THREEtype.MeshStandardMaterial
    PaletteMaterial001: THREEtype.MeshStandardMaterial
    PaletteMaterial002: THREEtype.MeshStandardMaterial
    dxCVrUCvYhjVxqy: THREEtype.MeshStandardMaterial
    MHFGNLrDQbTNima: THREEtype.MeshStandardMaterial
    kUhjpatHUvkBwfM: THREEtype.MeshStandardMaterial
    RJoymvEsaIItifI: THREEtype.MeshStandardMaterial
    KSIxMqttXxxmOYl: THREEtype.MeshStandardMaterial
    mcPrzcBUcdqUybC: THREEtype.MeshStandardMaterial
    pIhYLPqiSQOZTjn: THREEtype.MeshStandardMaterial
    eShKpuMNVJTRrgg: THREEtype.MeshStandardMaterial
    xdyiJLYTYRfJffH: THREEtype.MeshStandardMaterial
    jpGaQNgTtEGkTfo: THREEtype.MeshStandardMaterial
    ujsvqBWRMnqdwPx: THREEtype.MeshStandardMaterial
    sxNzrmuTqVeaXdg: THREEtype.MeshStandardMaterial
    pIJKfZsazmcpEiU: THREEtype.MeshStandardMaterial
    zFdeDaGNRwzccye: THREEtype.MeshStandardMaterial
    TBLSREBUyLMVtJa: THREEtype.MeshStandardMaterial
    xNrofRCqOXXHVZt: THREEtype.MeshStandardMaterial
    yQQySPTfbEJufve: THREEtype.MeshStandardMaterial
    PaletteMaterial003: THREEtype.MeshStandardMaterial
    PaletteMaterial004: THREEtype.MeshStandardMaterial
    oZRkkORNzkufnGD: THREEtype.MeshStandardMaterial
    yhcAXNGcJWCqtIS: THREEtype.MeshStandardMaterial
    bCgzXjHOanGdTFV: THREEtype.MeshStandardMaterial
    vhaEJjZoqGtyLdo: THREEtype.MeshStandardMaterial
    jlzuBkUzuJqgiAK: THREEtype.MeshStandardMaterial
    PpwUTnTFZJXxCoE: THREEtype.MeshStandardMaterial
    yiDkEwDSyEhavuP: THREEtype.MeshStandardMaterial
    hiVunnLeAHkwGEo: THREEtype.MeshStandardMaterial
    HGhEhpqSBZRnjHC: THREEtype.MeshStandardMaterial
  }
}

export default function IPhoneModel(props: IPhoneModelProps) {
  const { nodes, materials } = useGLTF('/models/scene.glb') as GLTFResult

  /* const texture = useLoader(THREE.TextureLoader, props.item.img) */
  /* const texture = useTexture(props.item.img) */

  useEffect(() => {
    Object.entries(materials).forEach((material) => {
      // these are the material names that can't be changed color
      if (
        material[0] !== 'zFdeDaGNRwzccye' &&
        material[0] !== 'ujsvqBWRMnqdwPx' &&
        material[0] !== 'hUlRcbieVuIiOXG' &&
        material[0] !== 'jlzuBkUzuJqgiAK' &&
        material[0] !== 'xNrofRCqOXXHVZt'
      ) {
        material[1].color = new THREE.Color(props.item.color[0])
      }
      material[1].needsUpdate = true
    })
  }, [materials, props.item])

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ttmRoLdJipiIOmf.geometry}
        material={materials.hUlRcbieVuIiOXG}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjsDkGiopeiEJZK.geometry}
        material={materials.PaletteMaterial001}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.buRWvyqhBBgcJFo.geometry}
        material={materials.PaletteMaterial002}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MrMmlCAsAxJpYqQ_0.geometry}
        material={materials.dxCVrUCvYhjVxqy}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wqbHSzWaUxBCwxY_0.geometry}
        material={materials.MHFGNLrDQbTNima}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.QvGDcbDApaGssma.geometry}
        material={materials.kUhjpatHUvkBwfM}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vFwJFNASGvEHWhs.geometry}
        material={materials.RJoymvEsaIItifI}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.evAxFwhaQUwXuua.geometry}
        material={materials.KSIxMqttXxxmOYl}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.USxQiqZgxHbRvqB.geometry}
        material={materials.mcPrzcBUcdqUybC}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TvgBVmqNmSrFVfW.geometry}
        material={materials.pIhYLPqiSQOZTjn}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GuYJryuYunhpphO.geometry}
        material={materials.eShKpuMNVJTRrgg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pvdHknDTGDzVpwc.geometry}
        material={materials.xdyiJLYTYRfJffH}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CfghdUoyzvwzIum.geometry}
        material={materials.jpGaQNgTtEGkTfo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DjdhycfQYjKMDyn.geometry}
        material={materials.ujsvqBWRMnqdwPx}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.usFLmqcyrnltBUr.geometry}
        material={materials.sxNzrmuTqVeaXdg}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.xXDHkMplTIDAXLN.geometry}
        material={materials.pIJKfZsazmcpEiU}
        scale={0.01}
      >
        {/* <meshStandardMaterial roughness={1} map={texture} /> */}
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vELORlCJixqPHsZ.geometry}
        material={materials.zFdeDaGNRwzccye}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EbQGKrWAqhBHiMv.geometry}
        material={materials.TBLSREBUyLMVtJa}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EddVrWkqZTlvmci.geometry}
        material={materials.xNrofRCqOXXHVZt}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.KSWlaxBcnPDpFCs.geometry}
        material={materials.yQQySPTfbEJufve}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TakBsdEjEytCAMK.geometry}
        material={materials.PaletteMaterial003}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IykfmVvLplTsTEW.geometry}
        material={materials.PaletteMaterial004}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.wLfSXtbwRlBrwof.geometry}
        material={materials.oZRkkORNzkufnGD}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WJwwVjsahIXbJpU.geometry}
        material={materials.yhcAXNGcJWCqtIS}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.YfrJNXgMvGOAfzz.geometry}
        material={materials.bCgzXjHOanGdTFV}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DCLCbjzqejuvsqH.geometry}
        material={materials.vhaEJjZoqGtyLdo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CdalkzDVnwgdEhS.geometry}
        material={materials.jlzuBkUzuJqgiAK}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NtjcIgolNGgYlCg.geometry}
        material={materials.PpwUTnTFZJXxCoE}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.pXBNoLiaMwsDHRF.geometry}
        material={materials.yiDkEwDSyEhavuP}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.IkoiNqATMVoZFKD.geometry}
        material={materials.hiVunnLeAHkwGEo}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rqgRAGHOwnuBypi.geometry}
        material={materials.HGhEhpqSBZRnjHC}
        scale={0.01}
      />
    </group>
  )
}

useGLTF.preload('/models/scene.glb')
