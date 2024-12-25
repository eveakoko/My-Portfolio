import React, { useState } from 'react'
import { Float, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/react.glb')
  const [zPosition, setZPosition] = useState(0);

  useFrame(() => {
    setZPosition((prev) => Math.min(prev - 0.1, -50)); 
  });

  return (
    <Float floatIntensity={1}>
      <group position={[8, 15, zPosition]} scale={0.5} {...props} dispose={null}>
        <mesh
          geometry={nodes['React-Logo_Material002_0'].geometry}
          material={materials['Material.002']}
          position={[0, 0.079, 0.181]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[0.392, 0.392, 0.527]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo
