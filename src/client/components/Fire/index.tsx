// import * as THREE from "three";
// import React, { useRef } from "react";
// import { ShaderMaterial, Color } from "three";
// import { extend, useFrame, useThree } from "@react-three/fiber";

// interface FireMaterialProps {
//   time: number;
// }

// interface FireMaterialUniforms {
//   time: { value: number };
// }

// const FireMaterial = React.forwardRef<
//   ShaderMaterial,
//   FireMaterialProps & JSX.IntrinsicElements["shaderMaterial"]
// >(({ time, ...rest }, ref) => {
//   const uniforms: FireMaterialUniforms = useRef({
//     time: { value: 0 },
//   }).current;

//   useFrame(() => {
//     if (uniforms.time) {
//       uniforms.time.value = time;
//     }
//   });

//   return (
//     <shaderMaterial
//       {...rest}
//       ref={ref}
//       uniforms={uniforms}
//       fragmentShader={`
//         uniform float time;
//         varying vec2 vUv;

//         void main() {
//           vec2 position = (gl_FragCoord.xy / vec2(512.0, 512.0));
//           vec4 noise = texture2D(iChannel0, position * 6.0);
//           vec4 color = vec4(1.0, 1.0, 0.0, 1.0) * (1.0 - (noise.r * 0.6));

//           float strength = 0.5;
//           vec3 baseColor = vec3(1.0, 0.5, 0.0);
//           vec3 flameColor = vec3(1.0, 0.9, 0.1);
//           vec3 finalColor = baseColor * (1.0 - strength) + flameColor * strength;

//           gl_FragColor = vec4(color.rgb * finalColor, color.a);
//         }
//       `}
//     />
//   );
// });

// extend({ FireMaterial });

// interface FireProps {
//   time: number;
// }

// export const Fire = ({ time }: FireProps) => {
//   const { gl } = useThree();

//   const fireVideo = document.getElementById("fire");
//   const fireTexture = fireVideo
//     ? new THREE.VideoTexture(fireVideo as HTMLVideoElement)
//     : undefined;
//   if (fireTexture) {
//     fireTexture.minFilter = THREE.LinearFilter;
//     fireTexture.magFilter = THREE.LinearFilter;
//     fireTexture.format = THREE.RGBAFormat;
//   }

//   return (
//     <mesh>
//       <planeBufferGeometry args={[1, 1]} />
//       <FireMaterial time={time} uniforms-iChannel0-value={fireTexture} />
//     </mesh>
//   );
// };