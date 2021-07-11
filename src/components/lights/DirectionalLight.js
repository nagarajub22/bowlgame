import { useHelper } from '@react-three/drei';
import { useRef } from 'react';
import { DirectionalLightHelper } from 'three';

export default function DirectionalLightComp(props) {
  const ref = useRef();
  useHelper(ref, DirectionalLightHelper, 1, 'cyan');

  return (
    <>
      <directionalLight
        ref={ref}
        args={['white']}
        position={[2,1,2]}
        castShadow='true'
      />
    </>
  );
}
