import { useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";
import chibiScene from "../assets/3d/chibi.glb";
import CanvasLoader from "./Loader";

const Chibi = ({ scale, position, rotation }) => {
  const { scene } = useGLTF(chibiScene);

  return (
    <mesh position={position} scale={scale} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

const ChibiCanvas = ({ scrollContainer }) => {
  const [scale, setScale] = useState([2, 2, 2]); // Smaller scale
  const [position, setPosition] = useState([0, -1, 0]); // Adjusted to center vertically
  const [rotation, setRotation] = useState([-1, -1.4, 1]); // Initial rotation

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setScale([1, 1, 1]);
        setPosition([0, -1.5, 0]);
      } else if (window.innerWidth < 1024) {
        setScale([1.5, 1.5, 1.5]);
        setPosition([0, -1.2, 0]);
      } else if (window.innerWidth < 1280) {
        setScale([1.8, 1.8, 1.8]);
        setPosition([0, -1.1, 0]);
      } else {
        setScale([2, 2, 2]);
        setPosition([0, -1, 0]);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      // Calculate rotation based on mouse position
      const xRotation = ((clientY / innerHeight) - 0.5) * 2; // Up and down
      const yRotation = ((clientX / innerWidth) - 0.5) * 2; // Left and right

      setRotation([
        -1 + xRotation * 0.2, // Limit vertical rotation
        -1.4 + yRotation * 0.4, // Limit horizontal rotation
        1,
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Canvas
      className="w-full h-full absolute top-0 left-0 z-10"
      camera={{
        position: [0, 0, 4], // Bring the camera closer for a smaller model
        near: 0.1,
        far: 1000,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight position={[0, 50, 10]} angle={0.15} penumbra={1} intensity={2} />
        <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
        <Chibi scale={scale} position={position} rotation={rotation} />
      </Suspense>
    </Canvas>
  );
};

export default ChibiCanvas;
