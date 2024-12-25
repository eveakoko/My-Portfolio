import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Room from '../components/Room'
import Loader from '../components/Loader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Target from '../components/Target'
import ReactLogo from '../components/ReactLogo'
import Python from '../components/Python'
import Rings from '../components/Rings'

const LandingPage = () => {

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-ful mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                Hi, I'm Eve <span className='waving-hand'>👋 </span>
            </p>
            <p className="hero_tag text-gray_gradient">Crafting Innovative Solutions</p>
        </div>

        <div className="w-full h-full absolute inset-0">

            <Canvas className='w-full h-full'>

                <Suspense fallback={<Loader />}>
                    <PerspectiveCamera 
                        makeDefault 
                        position={[0, 0, 20]}
                    />

                    <Room 
                        position={sizes.deskPosition}
                        rotation={[0, -Math.PI, 0]}
                        scale={sizes.deskScale}
                    />

                    <group>
                        <Target position={sizes.targetPosition} />
                        <ReactLogo position={sizes.reactLogoPosition} />
                        <Python position={sizes.pythonPosition} />
                        <Rings position={sizes.ringPosition} />
                    </group>

                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
            </Canvas>
        </div>
    </section>
  )
}

export default LandingPage