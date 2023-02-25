import { useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import { Mesh } from "three";

interface INuvemProps {
    BoxRef?: React.MutableRefObject<Mesh>;
  }
  
  export const Nuvem = (props: INuvemProps) => {
    const BoxRef = useRef<Mesh>(null);
  
    useFrame(() => {
      if (BoxRef.current) {
        // BoxRef.current.rotation.x += 0.01;
        BoxRef.current.rotation.y += 0.01;
      }
    });
  
    return (
        <group position={[3, 2, 0]}>
            <mesh ref={BoxRef}>
                <mesh position={[1.5, 1.8, 1.5]} >
                <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                <mesh position={[1.5, 2, 1.5]} >
                <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                <mesh position={[1.5, 1.5, 1.5]} >
                <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                <mesh position={[1.9, 1.8, 1.5]} >
                <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                <mesh position={[2.3, 1.6, 1.5]}>
                    <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                <mesh position={[2.8, 1.5, 1.5]}>
                    <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                <mesh position={[2, 1.4, 1]}>
                    <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                <mesh position={[1.1, 1.6, 1.5]}>
                    <sphereGeometry args={[0.55, 32, 16 ]} />
                    <meshStandardMaterial color="#b0abb3" />
                </mesh>
                
            </mesh>
            
        </group>
        
    )
}
