// import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  // AnimatePresence,
  useAnimation,
  useScroll,
} from "framer-motion";
import { Environment } from "@react-three/drei";
// import GenieLamp from "./components/GenieLamp";
import LandingPage from "./components/LandingPage";
import "./styles/landing-page.css";
// import arrow from "./arrow.png";
import Hoodie from "./components/Hoodie";
// import * as THREE from "three";
import gLogo from "../src/images/GLogoLarge.png";
import loadingAnimation from "../src/images/loadingGif.gif";
import hoodieImage1 from "../src/images/hoodieImage1.png";
import hoodieImage2 from "../src/images/hoodieImage2.png";
import hoodieImage3 from "../src/images/hoodieImage3.png";
import hoodieImage4 from "../src/images/hoodieImage4.png";
import hoodieImage5 from "../src/images/hoodieImage5.png";
import hoodieImage6 from "../src/images/hoodieImage6.png";
import hoodieImage7 from "../src/images/hoodieImage7.png";
import hoodieImage8 from "../src/images/hoodieImage8.png";
import hoodieImage9 from "../src/images/hoodieImage9.png";
import hoodieImage10 from "../src/images/hoodieImage10.png";
import hoodieImage11 from "../src/images/hoodieImage11.png";
import hoodieImage12 from "../src/images/hoodieImage12.png";
import hoodieImage13 from "../src/images/hoodieImage13.png";

const LoadingScreen = () => {
  useEffect(() => {
    // Disable scrolling when the loading screen is visible
    document.body.classList.add("no-scroll");

    return () => {
      // Re-enable scrolling when the loading screen is hidden
      document.body.classList.remove("no-scroll");
    };
  }, []);
  return (
    <div
      className="loading-screen"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#e2e9f4",
        zIndex: 9999,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "oatmeal-pro-thin",
        pointerEvents: "none",
      }}
    >
      <div
        className="loading-text"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "transparent",
        }}
      >
        {/* <h1>Genie X</h1> */}
        {/* <video
          src={loadingAnimation}
          autoPlay
          loop
          muted
          type="video/mov"
          style={{ width: "300px" }} // fixed width
        ></video> */}
        <img
          src={loadingAnimation}
          width={200}
          style={{ backgroundColor: "transparent" }}
          alt="loading animation"
        ></img>
        {/* <p>Loading...</p> */}
      </div>
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);
  // const [landing, setLanding] = useState(true);
  const [scroll, setScroll] = useState(0);
  const [isHoodieLoaded, setIsHoodieLoaded] = useState(false);
  const canvasRef = useRef(null);

  const controls = useAnimation();
  const { scrollYProgress } = useScroll();

  const imageArray = [
    hoodieImage1,
    hoodieImage2,
    hoodieImage3,
    hoodieImage4,
    hoodieImage5,
    hoodieImage6,
    hoodieImage7,
    hoodieImage8,
    hoodieImage9,
    hoodieImage10,
    hoodieImage11,
    hoodieImage12,
    hoodieImage13,
  ];

  useEffect(() => {
    scrollYProgress.onChange((v) => setScroll(v));
    console.log(scroll);
  }, [scrollYProgress, scroll]);

  useEffect(() => {
    const imageLoadingPromise = new Promise((resolve, reject) => {
      const imagePromises = imageArray.map((image) => {
        return new Promise((resolveImage) => {
          const img = new Image();
          img.src = image;
          img.onload = () => {
            resolveImage();
          };
        });
      });

      Promise.all(imagePromises)
        .then(() => {
          resolve();
        })
        .catch((error) => {
          reject(new Error("Failed to load hoodie images"));
        });
    });

    imageLoadingPromise
      .then(() => {
        setIsHoodieLoaded(true);
      })
      .catch((error) => {
        console.error(error);
        setIsHoodieLoaded(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [imageArray]);

  useEffect(() => {
    controls.start({
      y: ["73vh", "75vh", "73vh"],
      opacity: [1, 1, 1],
      transition: { duration: 4, repeat: Infinity, repeatType: "loop" },
    });
  }, [controls]);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (canvasElement && !loading) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && isHoodieLoaded) {
            setLoading(false);
          }
        },
        { threshold: 1 }
      );

      observer.observe(canvasElement);

      return () => {
        observer.unobserve(canvasElement);
      };
    }
  }, [loading, isHoodieLoaded]);

  return (
    <div>
      <div style={{ position: "relative" }}>
        {loading && <LoadingScreen />}
        {!loading && (
          <div
            className="logo-container"
            style={{
              // position: "absolute",
              // top: 0,
              left: 0,
              zIndex: 9999,
            }}
          >
            <img alt="logo" src={gLogo} className="logo"></img>
            <h1 style={{ fontSize: "30px" }}>Genie X</h1>
          </div>
        )}
        <motion.div
          className="canvas"
          style={{
            opacity: loading ? 0 : 1,
            pointerEvents: loading ? "none" : "auto",
          }}
          ref={canvasRef}
        >
          <Canvas>
            <Hoodie
              scroll={scroll}
              hoodieImage={imageArray}
              setIsHoodieLoaded={setIsHoodieLoaded}
            />
            <Environment preset="city" />
          </Canvas>
        </motion.div>
        <LandingPage scroll={scroll} />
      </div>
    </div>
  );
};

export default App;
