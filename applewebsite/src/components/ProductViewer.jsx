import clsx from "clsx";
import useMacStore from "../store";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MacBookModel14 from "./models/Macbook-14.jsx";
import ModelSwitcher from "./three/ModelSwitcher.jsx";
import StudioLights from "./StudioLights.jsx";

const ProductViewer = () => {
  const { color, scale, setColor, setScale } = useMacStore();

  return (
    <section id="product-viewer">
      <h2>Take a closer look</h2>

      <div className="controls">
        <p className="info">MacbookPro {scale} in {color}</p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              onClick={() => setColor("#adb5bd")}
              className={clsx("bg-neutral-300", color === "#adb5bd" && "active")}
            />
            <div
              onClick={() => setColor("#2e2c2e")}
              className={clsx("bg-neutral-900", color === "#2e2c2e" && "active")}
            />
          </div>

          <div className="size-control">
            <div
              onClick={() => setScale(0.06)}
              className={clsx(scale === 0.06 ? "bg-white text-black" : "bg-transparent text-white")}
            >
              <p>14"</p>
            </div>
            <div
              onClick={() => setScale(0.08)}
              className={clsx(scale === 0.08 ? "bg-white text-black" : "bg-transparent text-white")}
            >
              <p>16"</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        className="!w-full !h-[70vh] block"
        camera={{ position: [0, 1.3, 3.5], fov: 70 , near: 0.1, far: 100}}
      >
        {/* <ambientLight intensity={1} /> */}
        <StudioLights />
        {/* <directionalLight position={[2, 2, 2]} /> */}

        {/* Use the store-driven scale & color */}
        <MacBookModel14 scale={scale} color={color} position={[0, -1.2, 0]} />

        <OrbitControls makeDefault enableZoom={false} target={[0, 0, 0]} />
      </Canvas>
    </section>
  );
};

export default ProductViewer;