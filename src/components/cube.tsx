import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';

import { TestCube } from './testCube';

const Cube = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {}, []);
  return (
    <Canvas
      ref={canvasRef}
      camera={{ fov: 60 }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
    >
      <ambientLight intensity={1.5} />
      <TestCube />
      <OrbitControls />
      <axesHelper scale={2} />
    </Canvas>
  );
};

export default Cube;

/* <mesh>
        <GenerateCube />
        <ContactShadows
          frames={1}
          position={[0, -0.5, 0]}
          blur={1}
          opacity={0.75}
        />
        <ContactShadows
          frames={1}
          position={[0, -0.5, 0]}
          blur={3}
          color="orange"
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
      </mesh> */

/* <OrbitControls /> */
