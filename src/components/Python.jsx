import React from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Python = (props) => {
  const { nodes, materials } = useGLTF('/models/python.glb')
  return (
    <Float floatIntensity={1}>
      <group {...props} dispose={null} scale={1.0}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials.material}
          position={[-0.002, 0, 0]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['.001']}
          position={[-0.002, 0, 0]}
          rotation={[-Math.PI / 2, 0, -Math.PI]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/python.glb')

export default Python
