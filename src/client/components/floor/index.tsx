import { Grid } from "@react-three/drei"
import React from "react"
import { DoubleSide } from "three"

export const Floor = () => {
     return (
        <mesh>
            <mesh  rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
                <planeBufferGeometry  args={[30, 30]} />
                <meshBasicMaterial side={DoubleSide} color="#2d2c2e" />
            </mesh>
            <Grid sectionColor={0} cellColor='#000000' renderOrder={-1} position={[0, -1.2, 0]} infiniteGrid cellSize={0.6} cellThickness={0.6} sectionSize={3.3} sectionThickness={1.5} fadeDistance={20} />
        </mesh>
        
     )
}
