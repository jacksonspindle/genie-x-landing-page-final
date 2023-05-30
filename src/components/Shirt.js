import React, { useRef, useState, useEffect } from "react";
import { useGLTF, useTexture, Decal } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
// import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";
// import shirtAnimation from "../images/shirtGraphics1.mov"; // import the video file
import gLogo from "../images/GLogo.webp";
// import testGif from "../images/0001.gif";

export default function Shirt({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/shirt-v1.glb");

  // const [videoTexture, setVideoTexture] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [imageTextures, setImageTextures] = useState([]);
  const imageTexture = useTexture(gLogo);
  // const gif = useTexture(testGif);

  useEffect(() => {
    if (props.shirtImages && Array.isArray(props.shirtImages)) {
      const loader = new THREE.TextureLoader();

      const textures = [];

      const loadTexture = (index) => {
        const image = props.shirtImages[index];

        loader.load(
          image,
          (texture) => {
            texture.flipY = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.encoding = THREE.sRGBEncoding;
            texture.needsUpdate = true;
            textures[index] = texture;

            if (index === props.shirtImages.length - 1) {
              setImageTextures(textures);
            }
          },
          undefined,
          (error) => {
            console.error("An error happened during texture loading.", error);
          }
        );
      };

      props.shirtImages.forEach((_, index) => {
        loadTexture(index);
      });

      const interval = setInterval(() => {
        setCurrentImage(
          (prevCurrentImage) =>
            (prevCurrentImage + 1) % props.shirtImages.length
        );
      }, 750);

      return () => clearInterval(interval);
    }
  }, [props.shirtImages]);

  useFrame(() => {
    // const rotationFactor = 15;
    // group.current.rotation.y = props.scroll * rotationFactor;
    const rotationSpeed = 0.009; // Adjust the rotation speed as desired
    group.current.rotation.y += rotationSpeed;
  });

  return (
    <group ref={group} {...props} dispose={null} scale={[7, 7, 7]}>
      <mesh
        geometry={nodes.Pattern_510522001.geometry}
        material={materials["t-shirt Knit_Cotton_Jersey_FRONT_217918"]}
      />
      <mesh
        geometry={nodes.Pattern_510522001_1.geometry}
        material={materials["t-shirt Rib_2X2_468gsm mod_FRONT_217852"]}
      />
      <mesh
        geometry={nodes.back.geometry}
        material={materials["t-shirt Knit_Cotton_Jersey_FRONT_217918"]}
      >
        {imageTexture && (
          <Decal
            scale={[0.7, 0.7, 0.7]}
            rotation={[0, 0, Math.PI]}
            args={[
              nodes.back.geometry,
              new THREE.Vector3(0, 0, 0),
              new THREE.Euler(),
              new THREE.Vector3(1, 1, 1),
            ]}
          >
            <meshPhysicalMaterial
              transparent
              polygonOffset
              polygonOffsetFactor={-10}
              map={imageTexture}
              map-flipY={false}
              map-anisotropy={16}
              iridescence={1}
              iridescenceIOR={1}
              iridescenceThicknessRange={[0, 1400]}
              roughness={1}
              clearcoat={0.5}
              metalness={0.75}
              toneMapped={false}
            />
          </Decal>
        )}
      </mesh>
      Copy code
      {imageTextures[currentImage] && (
        <mesh geometry={nodes.decal.geometry}>
          <meshStandardMaterial
            attach="material"
            map={imageTextures[currentImage]}
          />
        </mesh>
      )}
    </group>
  );
}

useGLTF.preload("/shirt-v1.glb");
