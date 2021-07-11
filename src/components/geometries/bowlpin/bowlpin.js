import { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export default function Bowlpin(props) {
  const group = useRef();
  const { nodes, materials } = useGLTF('/glts/single_bowling_pin_for_r3f.gltf');
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, 0.73, 0]} scale={[0.14, 0.14, 0.14]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rings.geometry}
          material={materials.mat_bowlpin}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.rings_1.geometry}
          material={materials.mat_rings}
        />
      </group>
    </group>
  );
}
