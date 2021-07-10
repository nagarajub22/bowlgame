import { Canvas } from '@react-three/fiber';
import GizmoHelperComp from '../helpers/dev/GizmoHelper';
import './App.css';

export default function App() {
    return(
        <Canvas>
            <GizmoHelperComp/>

            <mesh>
                <boxBufferGeometry/>
                <meshStandardMaterial/>
            </mesh>
        </Canvas>
    )
}