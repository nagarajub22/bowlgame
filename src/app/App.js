import { Canvas } from '@react-three/fiber';
import Bowlpin from '../components/bowlpin/bowlpin';
import GizmoHelperComp from '../helpers/dev/GizmoHelper';
import './App.css';

export default function App() {
    return(
        <Canvas>
            <GizmoHelperComp/>
            <Bowlpin/>
            <gridHelper/>
            <ambientLight intensity={0.1} />
            <directionalLight args={['#aaaaaa']} position={[10, 10, 10]} castShadow="true" />
        </Canvas>
    )
}