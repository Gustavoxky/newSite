import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
import { useRef } from "react";
import { Mesh } from "three";

interface ISumProps {
    BoxRef?: React.MutableRefObject<Mesh>;
  }
  
  export const Sum = (props: ISumProps) => {
    const BoxRef = useRef<Mesh>(null);
  
    useFrame(() => {
      if (BoxRef.current) {
        // BoxRef.current.rotation.x += 0.01;
        BoxRef.current.rotation.y += 0.01;
      }
    });
  
    return (
        <mesh ref={BoxRef} 
              position={[-4.5, 4.5, 0.005]}
              >
                <meshStandardMaterial />
                <sphereGeometry args={[0.55, 32, 16 ]} />
                <meshStandardMaterial color="#fffc3c" />
        </mesh>
    )
}