import { OrbitControls } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import THREE, { Mesh } from "three";

interface IBoxProps {
  BoxRef?: React.MutableRefObject<Mesh>;
}

const Box = (props: IBoxProps) => {
  const BoxRef = useRef<Mesh>(null);

  useFrame(() => {
    if (BoxRef.current) {
      // BoxRef.current.rotation.x += 0.01;
      BoxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      <mesh position={[0, -1, 0]} ref={BoxRef}>
      <mesh position={[-0.1, -0.3, -0.1]}>
      <cylinderBufferGeometry args={[0.05, 0.1, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#4c4452" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0.1, -0.3, 0.1]} >
      <cylinderBufferGeometry args={[0.05, 0.1, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#57505c" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 1.6, 0]} >
    <cylinderBufferGeometry args={[0.25, 0.25, 0.5, 32, 1, true]} />
      <meshStandardMaterial color="#e4d9eb" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 0.5, 0]}>
    <cylinderBufferGeometry args={[0.2, 0.2, 1.5, 32, 1, true]} />
      <meshStandardMaterial color="#7623ad" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 1.95, 0]}>
      <cylinderBufferGeometry args={[0.15, 0.25, 0.2, 32, 1, true]} />
      <meshStandardMaterial color="#ede5f1" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 1.3, 0]}>
      <cylinderBufferGeometry args={[0.25, 0.2, 0.1, 32, 1, true]} />
      <meshStandardMaterial color="#dcd3e2" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 2.02, 0]} >
      <sphereGeometry args={[0.152, 32, 16 ]} />
      <meshStandardMaterial color="#eae3ee" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 0.2, 0.3]}>
    <cylinderBufferGeometry args={[0.1, 0.1, 0.9, 32, 1, true]} />
      <meshStandardMaterial color="#e6ddec" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 0.2, -0.3]}>
    <cylinderBufferGeometry args={[0.1, 0.1, 0.9, 32, 1, true]} />
      <meshStandardMaterial color="#dfd8e6" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, -0.3, -0.3]}>
      <cylinderBufferGeometry args={[0.1, 0.15, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#433f46" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, -0.3, -0.3]}>
      <cylinderBufferGeometry args={[0.1, 0.15, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#433f46" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, -0.3, 0.3]}>
      <cylinderBufferGeometry args={[0.1, 0.15, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#3b373d" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 0.725, 0.3]}>
      <cylinderBufferGeometry args={[0.05, 0.1, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#dcd3e2" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 0.725, -0.3]}>
      <cylinderBufferGeometry args={[0.05, 0.1, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#dad1e0" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 0.8, 0.3]} >
      <sphereGeometry args={[0.05, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      <OrbitControls/>
    </mesh>
    <mesh position={[0, 0.8, -0.3]} >
      <sphereGeometry args={[0.05, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      <OrbitControls/>
    </mesh>
    {/* <mesh position={[0.5, 1, 0.5]} >
      <circleBufferGeometry args={[0.05, 32, 16 ]} />
      <meshStandardMaterial color="#0051ff" />
      <OrbitControls/>
    </mesh> */}
    {/* <mesh>
      <circleBufferGeometry args={[0.5, 32, 16]} DoubleSide={true} />
      <meshStandardMaterial color="#0051ff"  />
    </mesh> */}

      </mesh>
      
    
    </group>
    
  );
};

export default Box;