import { MeshProps, useFrame } from "@react-three/fiber";
import React from "react";
import { useRef } from "react";
import { Mesh } from "three";

interface IBoxProps {
  BoxRef?: React.MutableRefObject<Mesh>;
}

const Box = (props: IBoxProps) => {
  const BoxRef = useRef<Mesh>(null);

  useFrame(() => {
    if (BoxRef.current) {
      BoxRef.current.rotation.x += 0.01;
      BoxRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={BoxRef}>
      <boxBufferGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial color="#32216e" />
    </mesh>
  );
};

export default Box;