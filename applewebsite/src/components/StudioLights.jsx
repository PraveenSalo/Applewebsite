import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={7}
            position={[-10, 5, -5]}
            scale={10}
            rotation={[0, Math.PI / 2, 0]}
          />

          <Lightformer
            form="rect"
            intensity={7}
            position={[10, 5, -5]}
            scale={10}
            rotation={[0, Math.PI / 2, 0]}
          />



        </group>
      </Environment>
      

      <spotLight 
          position={[-2, 10, 5]} 
          angle={0.3} 
          intensity={Math.PI * 0.2} 
          decay={0} />

      <spotLight 
            position={[0, -25, 8]} 
            angle={0.1} 
            intensity={Math.PI * 0.2} 
            decay={0} />

        <spotLight 
            position={[0, 25, 5]} 
            angle={0.1} 
            intensity={Math.PI * 1} 
            decay={1} />
          


    </group>
  );
};

export default StudioLights;