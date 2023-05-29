import React, { useEffect, useRef } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/genieLamp.gltf");
  const { gl } = useThree();

  console.log(props);

  useFrame((state) => {
    if (props.landing === false) {
      const time = state.clock.getElapsedTime();
      group.current.rotation.z = Math.sin(time / 2) / 30;
      group.current.rotation.x = Math.sin(time / 2) / 30;
      group.current.rotation.y = Math.sin(time / 4) / 30;
      group.current.position.y = Math.sin(time / 4) / 30;
    }
  });

  const { position } = useSpring({
    position: props.landing ? [0, 4, 0] : [0, 0, 0],
  });

  useEffect(() => {
    console.log(document.body.style);
  }, []);

  const handlePointerOver = () => {
    gl.domElement.style.cursor = "pointer";
  };

  const handlePointerOut = () => {
    gl.domElement.style.cursor = "";
  };

  return (
    <group
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      {...props}
      dispose={null}
      rotation={[-Math.PI, -Math.PI / 2, -Math.PI - 0.3]}
    >
      <animated.mesh
        ref={group}
        geometry={nodes.Lamp.geometry}
        material={materials.Lampada}
        scale={0.07}
        position={position}
        onClick={() => props.state(!props.landing)}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      ></animated.mesh>
      <Environment preset="city" />
    </group>
  );
}

useGLTF.preload("/genieLamp.gltf");
