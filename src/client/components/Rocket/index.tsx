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
    <cylinderBufferGeometry args={[0.23, 0.23, 0.5, 32, 1, true]} />
      <meshStandardMaterial color="#c7bdca" />
    </mesh>
    <mesh position={[0, 0.5, 0]}>
    <cylinderBufferGeometry args={[0.2, 0.2, 1.5, 32, 1, true]} />
      <meshStandardMaterial color="#c97c0a" />
    </mesh>
    <mesh position={[0, 2.07, 0]}>
      <cylinderBufferGeometry args={[0.05, 0.23, 0.45, 32, 1, true]} />
      <meshStandardMaterial color="#c3bcc7" />
    </mesh>
    <mesh position={[0, 1.3, 0]}>
      <cylinderBufferGeometry args={[0.23, 0.2, 0.1, 32, 1, true]} />
      <meshStandardMaterial color="#c2b6bb" />
    </mesh>
    <mesh position={[0, 2.3, 0]} >
      <sphereGeometry args={[0.05, 32, 16 ]} />
      <meshStandardMaterial color="#cabfcf" />
    </mesh>
    <mesh position={[0, 0.2, 0.3]}>
    <cylinderBufferGeometry args={[0.1, 0.1, 0.9, 32, 1, true]} />
      <meshStandardMaterial color="#c5bcca" />
    </mesh>
    <mesh position={[0, 0.2, -0.3]}>
    <cylinderBufferGeometry args={[0.1, 0.1, 0.9, 32, 1, true]} />
      <meshStandardMaterial color="#c1b8ca" />
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

      <mesh position={[0, -0.59, 0]} >
      <sphereGeometry args={[0.25, 32, 16 ]} />
      <meshStandardMaterial color="#b0abb3" />
      </mesh>
      <mesh position={[0.3, -0.855, 0.25]} >
      <sphereGeometry args={[0.325, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[0.5, -0.895, 0.25]} >
      <sphereGeometry args={[0.325, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.5, -0.895, 0.25]} >
      <sphereGeometry args={[0.255, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.5, -0.895, -0.25]} >
      <sphereGeometry args={[0.35, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.1, -0.895, 0.25]} >
      <sphereGeometry args={[0.255, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.5, -0.895, 0.55]} >
      <sphereGeometry args={[0.355, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[0.5, -0.895, 0.55]} >
      <sphereGeometry args={[0.2, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.5, -0.895, -0.55]} >
      <sphereGeometry args={[0.3, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.5, -0.895, -0.85]} >
      <sphereGeometry args={[0.355, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.5, -0.895, 0.85]} >
      <sphereGeometry args={[0.255, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[-0.8, -0.895, -0.85]} >
      <sphereGeometry args={[0.355, 32, 16 ]} />
      <meshStandardMaterial color="#8d888f" />
      </mesh>
      <mesh position={[0.9, -0.895, 0.55]} >
      <sphereGeometry args={[0.355, 32, 16 ]} />
      <meshStandardMaterial color="#b0aab3" />
      </mesh>
      <mesh position={[0.1, -0.895, -0.6]} >
      <sphereGeometry args={[0.35, 32, 16 ]} />
      <meshStandardMaterial color="#9e9aa0" />
      </mesh>
      <mesh position={[0.3, -0.895, -0.3]} >
      <sphereGeometry args={[0.155, 32, 16 ]} />
      <meshStandardMaterial color="#b6b1b8" />
      </mesh>
      <mesh position={[0.5, -0.895, -0.6]} >
      <sphereGeometry args={[0.255, 32, 16 ]} />
      <meshStandardMaterial color="#afaab1" />
      </mesh>
      <mesh position={[0.7, -0.18, -0.6]} >
      <sphereGeometry args={[0.3, 32, 16 ]} />
      <meshStandardMaterial color="#87808a" />
      </mesh>
      <mesh position={[0.7, -0.6, -0.6]} >
      <sphereGeometry args={[0.355, 32, 16 ]} />
      <meshStandardMaterial color="#57505a" />
      </mesh>
      <mesh position={[-0.7, -0.6, -0.6]} >
      <sphereGeometry args={[0.355, 32, 16 ]} />
      <meshStandardMaterial color="#827c85" />
      </mesh>
      <mesh position={[-0.7, -0.18, 0.9]} >
      <sphereGeometry args={[0.3, 32, 16 ]} />
      <meshStandardMaterial color="#666566" />
      </mesh>
      <mesh position={[-0.7, -0.6, 0.6]} >
      <sphereGeometry args={[0.3, 32, 16 ]} />
      <meshStandardMaterial color="#4c4c4d" />
      </mesh>
      <mesh position={[0.7, -0.18, 0.9]} >
      <sphereGeometry args={[0.2, 32, 16 ]} />
      <meshStandardMaterial color="#716e72" />
      </mesh>
      <mesh position={[0.7, -0.6, 0.6]} >
      <sphereGeometry args={[0.355, 32, 16 ]} />
      <meshStandardMaterial color="#d0c5d4" />
      </mesh>
      <OrbitControls/>
      </mesh>
      
    </group>
    
  );
};

export default Rocket;