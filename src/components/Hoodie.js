import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated } from "@react-spring/three";
import * as THREE from "three";

export default function Hoodie({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/hoodie.gltf");

  const [videoTexture] = useState();
  const [currentImage, setCurrentImage] = useState(0);
  const [imageTextures, setImageTextures] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (props.hoodieImage && Array.isArray(props.hoodieImage)) {
      const loader = new THREE.TextureLoader();

      props.hoodieImage.forEach((image, index) => {
        loader.load(
          image,
          (texture) => {
            texture.flipY = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;
            texture.encoding = THREE.sRGBEncoding;
            texture.needsUpdate = true;
            setImageTextures((prevTextures) => ({
              ...prevTextures,
              [index]: texture,
            }));
            console.log(`Image ${index} loaded.`);
          },
          undefined,
          function (error) {
            console.error("An error happened during texture loading.", error);
          }
        );
      });

      const interval = setInterval(() => {
        setCurrentImage(
          (prevCurrentImage) =>
            (prevCurrentImage + 1) % props.hoodieImage.length
        );
      }, 750);

      return () => clearInterval(interval);
    }
  }, [props.hoodieImage]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    group.current.rotation.z = Math.sin(time / 2) / 30;
    group.current.rotation.x = Math.sin(time / 2) / 30;
    group.current.rotation.y = Math.sin(time / 4) / 30;
    group.current.position.y = Math.sin(time / 4) / 30;
  });

  const { position } = useSpring({
    position: [
      0,
      window.innerWidth > 850 ? -1.5 : window.innerWidth <= 850 ? -1.5 : 0,
      0,
    ],
  });

  const { scale } = useSpring({
    scale:
      props.scroll < 0.16
        ? 0.003 + props.scroll / 100
        : props.scroll > 0.2
        ? 0.003
        : 0.003 + 0.16 / 100,
  });

  const handleClick = () => {
    console.log(videoTexture);
  };

  return (
    <group onClick={handleClick} ref={group} {...props} dispose={null}>
      {
        <>
          <animated.mesh
            geometry={nodes.blank_hoodie002.geometry}
            material={materials.body}
            position={position}
            rotation={[Math.PI / 2, 0, 0]}
            scale={scale}
          />
          <animated.mesh
            geometry={nodes.blank_hoodie001.geometry}
            position={position}
            rotation={[Math.PI / 2, 0, 0]}
            scale={scale}
          >
            {imageTextures[currentImage] && (
              <meshStandardMaterial
                attach="material"
                map={imageTextures[currentImage]}
                key={currentImage}
              />
            )}
          </animated.mesh>
        </>
      }
    </group>
  );
}

useGLTF.preload("/hoodie.gltf");
