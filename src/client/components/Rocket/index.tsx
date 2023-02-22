import { OrbitControls } from "@react-three/drei";
import { MeshProps, useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import THREE, { Mesh } from "three";

interface IRocketProps {
  BoxRef?: React.MutableRefObject<Mesh>;
}

const Rocket = (props: IRocketProps) => {
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
    </mesh>
    <mesh position={[0.1, -0.3, 0.1]} >
      <cylinderBufferGeometry args={[0.05, 0.1, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#57505c" />
    </mesh>
    <mesh position={[0, 1.6, 0]} >
    <cylinderBufferGeometry args={[0.25, 0.25, 0.5, 32, 1, true]} />
      <meshStandardMaterial color="#e4d9eb" />
    </mesh>
    <mesh position={[0, 0.5, 0]}>
    <cylinderBufferGeometry args={[0.2, 0.2, 1.5, 32, 1, true]} />
      <meshStandardMaterial color="#c97c0a" />
    </mesh>
    <mesh position={[0, 1.95, 0]}>
      <cylinderBufferGeometry args={[0.15, 0.25, 0.2, 32, 1, true]} />
      <meshStandardMaterial color="#ede5f1" />
    </mesh>
    <mesh position={[0, 1.3, 0]}>
      <cylinderBufferGeometry args={[0.25, 0.2, 0.1, 32, 1, true]} />
      <meshStandardMaterial color="#dcd3e2" />
    </mesh>
    <mesh position={[0, 2.02, 0]} >
      <sphereGeometry args={[0.152, 32, 16 ]} />
      <meshStandardMaterial color="#eae3ee" />
    </mesh>
    <mesh position={[0, 0.2, 0.3]}>
    <cylinderBufferGeometry args={[0.1, 0.1, 0.9, 32, 1, true]} />
      <meshStandardMaterial color="#e6ddec" />
    </mesh>
    <mesh position={[0, 0.2, -0.3]}>
    <cylinderBufferGeometry args={[0.1, 0.1, 0.9, 32, 1, true]} />
      <meshStandardMaterial color="#dfd8e6" />
    </mesh>
    <mesh position={[0, -0.3, -0.3]}>
      <cylinderBufferGeometry args={[0.1, 0.15, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#433f46" />
    </mesh>
    <mesh position={[0, -0.3, -0.3]}>
      <cylinderBufferGeometry args={[0.1, 0.15, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#433f46" />
    </mesh>
    <mesh position={[0, -0.3, 0.3]}>
      <cylinderBufferGeometry args={[0.1, 0.15, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#3b373d" />
    </mesh>
    <mesh position={[0, 0.725, 0.3]}>
      <cylinderBufferGeometry args={[0.05, 0.1, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#dcd3e2" />
    </mesh>
    <mesh position={[0, 0.725, -0.3]}>
      <cylinderBufferGeometry args={[0.05, 0.1, 0.15, 32, 1, true]} />
      <meshStandardMaterial color="#dad1e0" />
    </mesh>
    <mesh position={[0, 0.8, 0.3]} >
      <sphereGeometry args={[0.05, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
    </mesh>
    <mesh position={[0, 0.8, -0.3]} >
      <sphereGeometry args={[0.05, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
    </mesh>
    {/* <mesh position={[0.5, 1, 0.5]} >
      <circleBufferGeometry args={[0.05, 32, 16 ]} />
      <meshStandardMaterial color="#0051ff" />
    </mesh> */}
    {/* <mesh>
      <circleBufferGeometry args={[0.5, 32, 16]} DoubleSide={true} />
      <meshStandardMaterial color="#0051ff"  />
    </mesh> */}
      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#b0abb3" />
      </mesh>
      <mesh position={[0.3, -0.63, 0]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.2, -0.58, 0.2]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.59, 0]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.61, 0]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.6, 0.25]} >
      <sphereGeometry args={[0.11, 32, 16 ]} />
      <meshStandardMaterial color="#8a858d" />
      </mesh>
      <mesh position={[0, -0.65, -0.05]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.63, 0.23]} >
      <sphereGeometry args={[0.165, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.2, -0.58, -0.2]} >
      <sphereGeometry args={[0.16, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.5, -0.65, 0.3]} >
      <sphereGeometry args={[0.155, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.61, 0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#c2c0c4" />
      </mesh>
      <mesh position={[0.1, -0.625, -0.25]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.1, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.63, -0.1]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.58, 0.2]} >
      <sphereGeometry args={[0.155, 32, 16 ]} />
      <meshStandardMaterial color="#9f9da0" />
      </mesh>
      <mesh position={[0.5, -0.59, -0.15]} >
      <sphereGeometry args={[0.17, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.61, -0.3]} >
      <sphereGeometry args={[0.16, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.6, -0.25]} >
      <sphereGeometry args={[0.145, 32, 16 ]} />
      <meshStandardMaterial color="#959396" />
      </mesh>
      <mesh position={[-0.1, -0.65, 0.05]} >
      <sphereGeometry args={[0.133, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.63, -0.25]} >
      <sphereGeometry args={[0.12, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.2, -0.585, -0.2]} >
      <sphereGeometry args={[0.1255, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.5, -0.6155, 0.3]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.615, -0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#a7a7a7" />
      </mesh>
      <mesh position={[-0.3, -0.635, 0.25]} >
      <sphereGeometry args={[0.1355, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>

      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.14, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.63, 0]} >
      <sphereGeometry args={[0.105, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.2, -0.58, 0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.59, 0]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.61, 0]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.6, 0.25]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#6d6d6d" />
      </mesh>
      <mesh position={[0, -0.65, -0.05]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.63, 0.23]} >
      <sphereGeometry args={[0.13, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.58, 0.9]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.4, -0.605, 0.8]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.58, 0.7]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#959396" />
      </mesh>
      <mesh position={[0.5, -0.59, 0.5]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.595, 0.9]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.9, -0.63, -0.9]} >
      <sphereGeometry args={[0.1, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.6, -0.68, -0.8]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.6, -0.58, 0.8]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#b7b6b8" />
      </mesh>
      <mesh position={[-0.5, -0.68, 0.9]} >
      <sphereGeometry args={[0.12, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.5, -0.60, -0.9]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.53, -0.30, -0.95]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.55, -0.30, 0.92]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.73, -0.35, -0.75]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#818181" />
      </mesh>
      <mesh position={[0.77, -0.40, -0.85]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.77, -0.33, -0.85]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.65, 0.3]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.61, 0.2]} >
      <sphereGeometry args={[0.135, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.1, -0.625, 0.25]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.145, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.635, 0.1]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.66, 0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#5c5c5c" />
      </mesh>
      <mesh position={[0.5, -0.63, -0.15]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.69, -0.35]} >
      <sphereGeometry args={[0.135, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.6, -0.25]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.1, -0.65, -0.05]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#797979" />
      </mesh>
      <mesh position={[0.3, -0.63, -0.25]} >
      <sphereGeometry args={[0.135, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.25, -0.595, -0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.5, -0.6355, 0.3]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.665, -0.2]} >
      <sphereGeometry args={[0.145, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.655, 0.25]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#b0abb3" />
      </mesh>
      <mesh position={[0.3, -0.63, 0]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#a6a1a8" />
      </mesh>
      <mesh position={[-0.2, -0.58, 0.2]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.59, 0]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.61, 0]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.6, 0.25]} >
      <sphereGeometry args={[0.11, 32, 16 ]} />
      <meshStandardMaterial color="#8a858d" />
      </mesh>
      <mesh position={[0, -0.65, -0.05]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.63, 0.23]} >
      <sphereGeometry args={[0.165, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.2, -0.58, -0.2]} >
      <sphereGeometry args={[0.16, 32, 16 ]} />
      <meshStandardMaterial color="#b4b2b6" />
      </mesh>
      <mesh position={[-0.5, -0.65, 0.3]} >
      <sphereGeometry args={[0.155, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.61, 0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#c2c0c4" />
      </mesh>
      <mesh position={[0.1, -0.625, -0.25]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.1, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.63, -0.1]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.58, 0.2]} >
      <sphereGeometry args={[0.155, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.59, -0.15]} >
      <sphereGeometry args={[0.17, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.61, -0.3]} >
      <sphereGeometry args={[0.16, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.6, -0.25]} >
      <sphereGeometry args={[0.145, 32, 16 ]} />
      <meshStandardMaterial color="#959396" />
      </mesh>
      <mesh position={[-0.1, -0.65, 0.05]} >
      <sphereGeometry args={[0.133, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.63, -0.25]} >
      <sphereGeometry args={[0.12, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.2, -0.585, -0.2]} >
      <sphereGeometry args={[0.1255, 32, 16 ]} />
      <meshStandardMaterial color="#b1abb4" />
      </mesh>
      <mesh position={[-0.5, -0.6155, 0.3]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.615, -0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.635, 0.25]} >
      <sphereGeometry args={[0.1355, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>

      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.14, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.33, 0]} >
      <sphereGeometry args={[0.105, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.2, -0.58, 0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.59, 0]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#aea8b1" />
      </mesh>
      <mesh position={[0.3, -0.61, 0]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.6, 0.25]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.65, -0.05]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.63, 0.23]} >
      <sphereGeometry args={[0.13, 32, 16 ]} />
      <meshStandardMaterial color="#bbb8bd" />
      </mesh>
      <mesh position={[0.5, -0.58, 0.9]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.4, -0.605, 0.8]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.58, 0.7]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#9e9e9e" />
      </mesh>
      <mesh position={[0.5, -0.59, 0.5]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.595, 0.9]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.9, -0.63, -0.9]} >
      <sphereGeometry args={[0.1, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.6, -0.68, -0.8]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.6, -0.58, 0.8]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.5, -0.68, 0.9]} >
      <sphereGeometry args={[0.12, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.60, 0.9]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.53, -0.30, 0.95]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.55, -0.30, 0.92]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.73, -0.35, -0.75]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.77, -0.45, -0.85]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.77, -0.43, 0.85]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.5, -0.675, -0.3]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.61, -0.2]} >
      <sphereGeometry args={[0.135, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.1, -0.625, -0.25]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#cccccc" />
      </mesh>
      <mesh position={[0.25, -0.60, 0.15]} >
      <sphereGeometry args={[0.145, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.635, 0.1]} >
      <sphereGeometry args={[0.115, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0, -0.66, 0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.5, -0.63, -0.15]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.69, 0.35]} >
      <sphereGeometry args={[0.135, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[-0.3, -0.45, -0.25]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#c3c1c4" />
      </mesh>
      <mesh position={[-0.1, -0.675, 0.05]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#dbd2e0" />
      </mesh>
      <mesh position={[0.3, -0.63, -0.25]} >
      <sphereGeometry args={[0.135, 32, 16 ]} />
      <meshStandardMaterial color="#b5b4b6" />
      </mesh>
      <mesh position={[0.25, -0.595, 0.2]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#b9b6bb" />
      </mesh>
      <mesh position={[-0.5, -0.6355, 0.3]} >
      <sphereGeometry args={[0.15, 32, 16 ]} />
      <meshStandardMaterial color="#b6b1b9" />
      </mesh>
      <mesh position={[0.3, -0.665, 0.2]} >
      <sphereGeometry args={[0.145, 32, 16 ]} />
      <meshStandardMaterial color="#7f7f80" />
      </mesh>
      <mesh position={[0.3, -0.655, 0.25]} >
      <sphereGeometry args={[0.125, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <OrbitControls/>
      </mesh>
      
    </group>
    
  );
};

export default Rocket;