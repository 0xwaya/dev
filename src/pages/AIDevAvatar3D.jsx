import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function AvatarHead() {
    const mesh = useRef();
    useFrame(() => {
        if (mesh.current) {
            mesh.current.rotation.y += 0.005;
        }
    });
    return (
        <mesh ref={mesh} position={[0, 0, 0]} castShadow>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color="#7f5af0" />
        </mesh>
    );
}

export default function AIDevAvatar3D() {
    return (
        <div style={{ width: 120, height: 120, borderRadius: "50%", overflow: "hidden", boxShadow: "0 2px 16px #0002", background: "#16161a" }}>
            <Canvas camera={{ position: [0, 0, 3] }} shadows>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <AvatarHead />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    );
}

