"use client"
import { Environment, Html, Lightformer, useGLTF, useTexture } from '@react-three/drei'
import { Canvas, extend, ThreeEvent, useFrame, useThree } from '@react-three/fiber'
import { BallCollider, CuboidCollider, Physics, RapierRigidBody, RigidBody, useRopeJoint, useSphericalJoint } from '@react-three/rapier'
import { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import type { GLTF } from 'three-stdlib'
import HeroCard from './HeroCard'

extend({ MeshLineGeometry, MeshLineMaterial })
useGLTF.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb')

type GLTFResult = GLTF & {
  nodes: {
    card: THREE.Mesh
    clip: THREE.Mesh
    clamp: THREE.Mesh
  }
  materials: {
    base: THREE.MeshStandardMaterial & { map: THREE.Texture }
    metal: THREE.Material
  }
}

// Extended RigidBody type with lerped property
type ExtendedRigidBody = RapierRigidBody & {
  lerped?: THREE.Vector3
}

export default function App() {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    // Small helper to set ready with a tiny delay so the preloader DOM is fully removed
    const markReady = (delay = 200) => setTimeout(() => setReady(true), delay)

    // If preloader has already been shown in this session, mount after a short delay
    const hasSeenPreloader = typeof window !== 'undefined' && sessionStorage.getItem('preloaderShown')
    if (hasSeenPreloader) {
      const t0 = markReady(200)
      return () => clearTimeout(t0 as unknown as number)
    }

    // Otherwise wait for the preloaderComplete event
    const handler = () => markReady(200)
    window.addEventListener('preloaderComplete', handler)
    // Fallback: after 6s ensure it mounts (defensive)
    const t = setTimeout(() => markReady(200), 6000)
    return () => {
      window.removeEventListener('preloaderComplete', handler)
      clearTimeout(t)
    }
  }, [])

  

  if (!ready) return null

  return (
    <div className="absolute inset-0 w-full h-full z-10">
      <Canvas camera={{ position: [0, 0, 13], fov: 25 }} gl={{ alpha: true }}>
        <ambientLight intensity={Math.PI} />
        <Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
          <Band />
        </Physics>
        <Environment blur={0.75}>
          <Lightformer intensity={2} color="white" position={[0, -1, 5]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[-1, -1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={3} color="white" position={[1, 1, 1]} rotation={[0, 0, Math.PI / 3]} scale={[100, 0.1, 1]} />
          <Lightformer intensity={10} color="white" position={[-10, 0, 14]} rotation={[0, Math.PI / 2, Math.PI / 3]} scale={[100, 10, 1]} />
        </Environment>
      </Canvas>
    </div>
  )
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
  const band = useRef<THREE.Line>(null!)
  const fixed = useRef<RapierRigidBody>(null!)
  const j1 = useRef<ExtendedRigidBody>(null!)
  const j2 = useRef<ExtendedRigidBody>(null!)
  const j3 = useRef<RapierRigidBody>(null!)
  const card = useRef<RapierRigidBody>(null!)
  const connector = useRef<THREE.Mesh>(null!)

  const [isInteractive, setIsInteractive] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || (window.matchMedia && window.matchMedia('(pointer: coarse)').matches)
    const isSmall = window.innerWidth <= 768
    // Consider mobile if touch capable OR small viewport
    setIsInteractive(!(isTouch || isSmall))
  }, [])

  const vec = new THREE.Vector3(), ang = new THREE.Vector3(), rot = new THREE.Vector3(), dir = new THREE.Vector3() // prettier-ignore
  const segmentProps = { type: 'dynamic' as const, canSleep: true, colliders: false as const, angularDamping: 2, linearDamping: 2 }
  const { nodes, materials } = useGLTF('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/5huRVDzcoDwnbgrKUo1Lzs/53b6dd7d6b4ffcdbd338fa60265949e1/tag.glb') as unknown as GLTFResult
  const texture = useTexture('/imgs/texture.jpg')
  const { width, height } = useThree((state) => state.size)
  const [curve] = useState(() => new THREE.CatmullRomCurve3([new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()]))
  const [dragged, drag] = useState<THREE.Vector3 | false>(false)
  const [hovered, hover] = useState(false)

  useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]) // prettier-ignore
  useSphericalJoint(j3, card, [[0, 0, 0], [0, 1.2, 0]]) // prettier-ignore

  useEffect(() => {
    if (!isInteractive) return
    if (hovered) {
      document.body.style.cursor = dragged ? 'grabbing' : 'grab'
      return () => void (document.body.style.cursor = 'auto')
    }
  }, [hovered, dragged, isInteractive])

  useFrame((state, delta) => {
    if (dragged) {
      vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera)
      dir.copy(vec).sub(state.camera.position).normalize()
      vec.add(dir.multiplyScalar(state.camera.position.length()))
        ;[card, j1, j2, j3, fixed].forEach((ref) => ref.current?.wakeUp())
      card.current?.setNextKinematicTranslation({ x: vec.x - dragged.x, y: vec.y - dragged.y, z: vec.z - dragged.z })
    }
    if (fixed.current) {
      // Fix most of the jitter when over pulling the card
      ;[j1, j2].forEach((ref) => {
        if (!ref.current.lerped) ref.current.lerped = new THREE.Vector3().copy(ref.current.translation())
        const clampedDistance = Math.max(0.1, Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())))
        ref.current.lerped.lerp(ref.current.translation(), delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)))
      })
      // Calculate catmul curve
      curve.points[0].copy(j3.current.translation())
      curve.points[1].copy(j2.current.lerped!)
      curve.points[2].copy(j1.current.lerped!)
      curve.points[3].copy(fixed.current.translation())
        ; (band.current.geometry as MeshLineGeometry).setPoints(curve.getPoints(32))
      // Update connector position to cover attachment point
      const j3Pos = j3.current.translation()
      connector.current.position.set(j3Pos.x, j3Pos.y, j3Pos.z)
      // Tilt it back towards the screen
      ang.copy(card.current.angvel())
      rot.copy(card.current.rotation())
      card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z }, true)
    }
  })

  curve.curveType = 'chordal'
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping

  return (
    <>
      <group position={[0, 5, 0]}>
        <RigidBody ref={fixed} {...segmentProps} type="fixed" />
        <RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
          <BallCollider args={[0.1]} />
        </RigidBody>
        <RigidBody position={[2, 0, 0]} ref={card} {...segmentProps} type={dragged ? 'kinematicPosition' : 'dynamic'}>
          <CuboidCollider args={[0.8, 1.125, 0.01]} />
          <group
            scale={2}
            position={[0, -1.2, -0.05]}
            {...(isInteractive
              ? {
                  onPointerOver: () => hover(true),
                  onPointerOut: () => hover(false),
                  onPointerUp: (e: ThreeEvent<PointerEvent>) => {
                    const target = e.target as HTMLElement
                    target?.releasePointerCapture(e.pointerId)
                    drag(false)
                  },
                  onPointerDown: (e: ThreeEvent<PointerEvent>) => {
                    const target = e.target as HTMLElement
                    target?.setPointerCapture(e.pointerId)
                    drag(new THREE.Vector3().copy(e.point).sub(vec.copy(card.current.translation())))
                  },
                }
              : {})}
          >
            <mesh geometry={nodes.card.geometry}>
              <meshPhysicalMaterial
                color="#ffffff"
                clearcoat={1}
                clearcoatRoughness={0.15}
                roughness={0.3}
                metalness={0.5}
              />
            </mesh>
            <mesh geometry={nodes.clip.geometry} material={materials.metal} material-roughness={0.3} />
            <mesh geometry={nodes.clamp.geometry} material={materials.metal} />

            {/* HTML Content Overlay */}
            <Html
              position={[0, 0.5, 0]}
              center
              distanceFactor={1.3}
              transform
              style={{
                pointerEvents: 'none',
                userSelect: 'none',
                zIndex: 1,
              }}
            >
              <div className="flex flex-col items-center gap-3 w-44 relative z-1">
                <div className="size-28 md:size-32 rounded-full overflow-hidden border-2 border-white bg-white">
                  <Image
                    src="/imgs/profile.jpeg"
                    alt="Natnael Profile"
                    width={128}
                    height={128}
                    unoptimized
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className='text-black text-sm md:text-base font-manrope font-extrabold '>Natnael Endale</p>
                <HeroCard />
              </div>
            </Html>
          </group>
        </RigidBody>
      </group>
      <mesh ref={band}>
        <meshLineGeometry />
        <meshLineMaterial color="white" depthTest={false} resolution={[width, height]} useMap map={texture} repeat={[-3, 1]} lineWidth={1} />
      </mesh>
      {/* Connector piece to hide the glitchy attachment point */}
      <mesh ref={connector}>
        <cylinderGeometry args={[0.15, 0.15, 0.3, 16]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
      </mesh>
    </>
  )
}