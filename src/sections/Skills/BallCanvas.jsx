/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  Decal, Float, OrbitControls, Preload, useTexture
} from '@react-three/drei'

import CanvasLoader from './Loader.jsx'

const Ball = ({ imgUrl, color }) => {
  const [decal] = useTexture([imgUrl]);
  return (
    <Float speed={0.01} rotationIntensity={0.01} floatIntensity={0.5}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 3]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
      <Decal
        position={[0, 0, 1]}
        rotation={[2 * Math.PI, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
      {/* Second Decal */}
      <Decal
        position={[0, 0, -1]}
        rotation={[2 * Math.PI, Math.PI, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
      {/* Third Decal */}
      <Decal
        position={[0, 1, 0]}
        rotation={[Math.PI / 2, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
      {/* Fourth Decal */}
      <Decal
        position={[0, -1, 0]}
        rotation={[-Math.PI / 2, 0, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
      {/* Fifth Decal */}
      <Decal
        position={[1, 0, 0]}
        rotation={[0, Math.PI / 2, 6.25]}
        scale={1}
        map={decal}
        flatShading
      />
      <Decal
        position={[-1, 0, 0]}
        rotation={[0, -Math.PI / 2, 6.25]} // Adjusted rotation
        scale={1}
        map={decal}
        flatShading
      />
      </mesh>
    </Float>
  )
}

const BallCanvas = ({ icon, ballColor }) => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          autoRotateSpeed={0.75}
          enableZoom={false}
          enablePan={false}
          />
        <Ball imgUrl={icon} color={ballColor} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas