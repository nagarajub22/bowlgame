import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Bowlpin from '../components/geometries/bowlpin/bowlpin';
import DirectionalLightComp from '../components/lights/DirectionalLight';
import GizmoHelperComp from '../helpers/dev/GizmoHelper';
import './App.css';

export default function App() {
  return (
    <Canvas>
      <GizmoHelperComp />

      <ambientLight />
      <DirectionalLightComp showHelper={true}/>

      <gridHelper />

      <Suspense fallback={null}>
        <Bowlpin />
      </Suspense>

      <color attach='background' args={['black']} />
    </Canvas>
  );
}
