import { useLoader } from '@react-three/fiber';
import { Suspense, useMemo, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

export default function Bowlpin(props) {
  const [gltf, setGLTF] = useState(null);

  useMemo(() => new GLTFLoader().load('/glts/single_bowling_pin_for_r3f.gltf', setGLTF), []);

//   const bowlModel = useLoader(
//     GLTFLoader,
//     '/glts/single_bowling_pin_for_r3f.gltf'
//   );

  return (

    gltf ? <primitive object={gltf.scene} /> : null


    // <Suspense fallback={null}>
    //   <primitive object={gltf.scene} />
    // </Suspense>
  );
}
