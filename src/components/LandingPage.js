import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import Hoodie from "./Hoodie";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import creativityIcon from "../images/paintIcon.png";
import aiIcon from "../images/gearIcon.png";
import qualityIcon from "../images/starsIcon.png";
import communityIcon from "../images/puzzleIcon.png";
import Shirt from "./Shirt";
// import promoVideo from "../images/genieXpromoVideoDraft.mp4";
// import genieBottleAnimation from "../images/newtest.mov";
import hoodieAnimation from "../images/hoodieAnimation1.mov";
// import communityAnimation from "../images/communityAnimation1.mov";
import discordLogo from "../images/discordLogo.png";
import twitterLogo from "../images/twitterLogo.svg";
import youtubeLogo from "../images/youtubeLogo.png";
import tiktokLogo from "../images/tiktokLogo.png";
// import gLogo from "../images/GLogo.png";
import arrowIcon from "../images/arrowIcon.png";
// import * as THREE from "three";
// import { useMemo, useRef } from "react";
// import { BufferGeometry } from "three";
import genieBottleAnimation1 from "../images/0001.mov";
// import communityAnimation1 from "../images/communityAnimation4.mov";
import creativeCommunityGif from "../images/0001.gif";
import genieBottleGif from "../images/genieBottleGif.gif";
import hoodieGif from "../images/hoodieGif.gif";
// import FairyDustCursor from "./FairyDustCursor";
import shirtImage1 from "../images/shirtImage1.png";
import shirtImage2 from "../images/shirtImage2.png";
import shirtImage3 from "../images/shirtImage3.png";
import shirtImage4 from "../images/shirtImage4.png";
import shirtImage5 from "../images/shirtImage5.png";
import shirtImage6 from "../images/shirtImage6.png";
import shirtImage7 from "../images/shirtImage7.png";
import shirtImage8 from "../images/shirtImage8.png";
import shirtImage9 from "../images/shirtImage9.png";

const LandingPage = (props) => {
  const [hovered, setHovered] = useState();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [canvasSize, setCanvasSize] = useState({ width: 0, height: 0 });

  const imageArray = [
    shirtImage1,
    shirtImage2,
    shirtImage3,
    shirtImage4,
    shirtImage5,
    shirtImage6,
    shirtImage7,
    shirtImage8,
    shirtImage9,
  ];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div className="landing-page-container">
      <AnimatePresence>
        {
          <motion.div
            initial={{ y: -800, opacity: 1 }}
            // animate={{
            //   transition: { duration: 1.5, delay: 1.1 },
            //   opacity: 1,
            // }}
            // exit={{ opacity: 0 }}
            className="hero-outer-container"
          >
            <motion.div className="hero-container">
              <motion.div className="hero">
                <motion.h1>
                  {/* <i className="infinity-logo" style={{ fontSize: "100px" }}>
                    ∞
                  </i>{" "} */}
                  Infinity Hoodie
                </motion.h1>
                <motion.h2>
                  The futures most innovative hoodie for maximizing your
                  creativity. Be among the first to obtain the future of tech
                  wear.
                  {/* <br></br> */}
                  {/* Be among the first to obtain the future of tech wear. */}
                </motion.h2>
              </motion.div>
              <div class="input-container">
                <motion.button
                  className="discord-button"
                  style={{
                    display: "flex",
                    alignItems: "center",

                    justifyContent: "center",
                    lineHeight: "1em",
                    width: "280px",
                    padding: "1rem",
                    gap: "1rem",
                    backgroundColor: "transparent",
                  }}
                >
                  Claim Your Spot
                  <img
                    src={arrowIcon}
                    alt="arrow icon"
                    style={{
                      backgroundColor: "transparent",
                      filter: "invert(1)",
                      transform: "scaleX(-1)",
                      height: "auto",
                      width: "30px",
                      marginTop: ".2rem",

                      // marginLeft: "10px", // added some margin to give space between the text and the arrow
                    }}
                  />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>
      <motion.div className="propositions">
        <motion.div>
          <motion.h2>Everyone's Creative</motion.h2>
          <img
            className="skeumorphic-icon"
            src={creativityIcon}
            alt="prop-icon"
          ></img>
          <motion.p>
            Complete creative control no more being told what to wear.
          </motion.p>
        </motion.div>
        <motion.div>
          <motion.h2>Harness AI</motion.h2>
          <img className="skeumorphic-icon" src={aiIcon} alt="prop-icon"></img>
          <motion.p>Maximize your creativity designing with AI</motion.p>
        </motion.div>
        <motion.div>
          <motion.h2>Premium Quality</motion.h2>
          <img
            className="skeumorphic-icon"
            src={qualityIcon}
            alt="prop-icon"
          ></img>
          <motion.p>
            Premium quality physical garments with digital counterparts
          </motion.p>
        </motion.div>
        <motion.div>
          <motion.h2>Creative Community</motion.h2>
          <img
            className="skeumorphic-icon"
            src={communityIcon}
            alt="prop-icon"
          ></img>
          <motion.p>
            Access to a vibrant community of cutting-edge creatives
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="promo-video-container">
        <motion.div className="promo-video">
          {/* <video
            style={{ width: "90%", borderRadius: "2rem" }}
            src={promoVideo}
            // autoPlay
            loop
            controls
          >
            promoVideo
          </video> */}
          <div className="video-responsive">
            <iframe
              style={{
                width: "90%",
                borderRadius: "2rem",
                // maxWidth: "994px",
                height: "100%",
                position: "absolute", // Added absolute positioning
                left: "30px", // Position the iframe within the responsive div
                top: "0",
              }}
              src="https://www.youtube.com/embed/WYg6GiLA6zA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className="why-we-made-this-container">
        <motion.div
          style={{
            height: "600px",
            ...(window.innerWidth > 1200 ? {} : { width: "100%" }),
          }}
        >
          <Canvas className="shirt-canvas">
            <Shirt shirtImages={imageArray} scroll={props.scroll * 2.6} />
            <Environment preset="city" />
          </Canvas>
        </motion.div>
        <motion.div className="why-we-made-this-content">
          <motion.h1>Why We Made This</motion.h1>
          <motion.p>
            At Genie X, we believe in the transformative creative potential that
            technology brings to the world of fashion. We are living in a
            thrilling era where artificial intelligence is reshaping the
            creative landscape, making it more accessible than ever before.
            Artistic expression is no longer confined to those with traditional
            technical skills.
            <br></br>
            <br></br>
            Unfortunately, the fashion industry has been slow to adapt, often
            limiting customers' choices and stifling their creative freedom.
            Genie X was founded to revolutionize the relationship between a
            brand and its community, creating a more collaborative and intimate
            bond. Our mission is to empower you to design and wear clothing that
            truly reflects your unique style and vision.
            <br></br>
          </motion.p>
        </motion.div>
      </motion.div>
      <motion.div className="follow-the-journey-container">
        <motion.h1 className="follow-the-journey">Join the Waitlist</motion.h1>
        <motion.button
          className="discord-button"
          style={{
            display: "flex",
            alignItems: "center",

            justifyContent: "center",
            lineHeight: "1em",
            width: "280px",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          Claim Your Spot
          <img
            src={arrowIcon}
            alt="arrow icon"
            style={{
              backgroundColor: "transparent",
              transform: "scaleX(-1)",
              height: "auto",
              width: "30px",
              marginTop: ".2rem",
              // marginLeft: "10px",
            }}
            className="arrow-icon"
          />
        </motion.button>
      </motion.div>

      {screenWidth > 900 ? (
        <>
          <motion.div className="product-section-container">
            <motion.div
              style={{
                margin: "1rem",
                // height: "500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video
                src={hoodieAnimation}
                autoPlay
                loop
                muted
                // controls
                type="video/mov"
                width={"70%"}
              ></video>
              {/* <img
                width={"70%"}
                // height={"280px"}
                src={hoodieGif}
                alt="community gif"
              ></img> */}
            </motion.div>
            <motion.div
              style={{
                display: "flex",
                alignItems: "left",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <motion.h1>Design Portal</motion.h1>
              <motion.h2>
                Provided any text, GenieX’s revolutionary system leverages the
                power of text to image AI models to seamlessly imprint any
                graphics onto fabric.
              </motion.h2>
            </motion.div>
          </motion.div>
          <motion.div className="product-section-container">
            {/* <FairyDustCursor colors={["#D61C59", "#E7D84B", "#1B8798"]} /> */}
            <motion.div
              style={{
                display: "flex",
                alignItems: "left",
                flexDirection: "column",
                justifyContent: "center",
                // justifyContent: "end",
              }}
            >
              <motion.h1
              // whileHover={{ scale: 1.1 }}
              >
                Genie
              </motion.h1>

              <motion.h2>
                Experience the power of the Genie as it guides and inspires you
                through any design roadblocks - unleashing your full creative
                potential and bringing your creations to a new level of
                brilliance.
              </motion.h2>
            </motion.div>
            <motion.div
              style={{
                margin: "1rem",
                // height: "500px",
                display: "flex",
                justifyContent: "center",
                // justifyContent: "left",
              }}
            >
              <video
                src={genieBottleAnimation1}
                autoPlay
                loop
                muted
                // controls
                type="video/mov"
                width={"70%"}
              ></video>
            </motion.div>
          </motion.div>
          <motion.div className="product-section-container">
            <motion.div
              style={{
                margin: "1rem",
                // height: "500px",
                display: "flex",
                justifyContent: "left",
                // alignItems: "right",
              }}
            >
              {/* <video
                src={communityAnimation1}
                autoPlay
                loop
                muted
                // controls
                type="video/mov"
                width={"70%"}
              ></video> */}
              <img
                width={screenWidth > 1200 ? "400px" : "300px"}
                height={screenWidth > 1200 ? "400px" : "300px"}
                alt="community gif"
                src={creativeCommunityGif}
              ></img>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "left",
                flexDirection: "column",
              }}
            >
              <motion.h1 className="gradient-text">
                <span className="text">Creative Community</span>
              </motion.h1>
              <motion.h2>
                Our thriving ecosystem celebrates and empowers individuals to
                achieve their maximum potential. Unlock the opportunity to build
                and collaborative with others; have your own creations upvoted
                by the community.
              </motion.h2>
              <motion.button className="discord-button-1">
                Join Discord
              </motion.button>
            </motion.div>
          </motion.div>
        </>
      ) : (
        <motion.div
          style={{ display: "flex", flexDirection: "column", gap: "6rem" }}
        >
          <motion.div className="product-section-container-mobile">
            <motion.div
              style={{
                margin: "0",
                // height: "500px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <video
                src={hoodieAnimation}
                autoPlay
                loop
                muted
                // controls
                type="video/mov"
                width={"70%"}
              ></video> */}
              <img
                width={"280px"}
                height={"280px"}
                src={hoodieGif}
                alt="community gif"
              ></img>
            </motion.div>
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: "2rem",
                paddingLeft: "2rem",
                textAlign: "center",
              }}
            >
              <motion.h1>Design Portal</motion.h1>
              <motion.h2>
                Provided any text, GenieX’s revolutionary system leverages the
                power of text to image AI models to seamlessly imprint any
                graphics onto fabric.
              </motion.h2>
            </motion.div>
          </motion.div>
          <motion.div className="product-section-container-mobile">
            {/* <FairyDustCursor colors={["#D61C59", "#E7D84B", "#1B8798"]} /> */}
            <motion.div
              style={{
                margin: "0",
                // height: "500px",
                display: "flex",
                justifyContent: "center",
                // justifyContent: "left",
              }}
            >
              {/* <video
                src={genieBottleAnimation1}
                autoPlay
                loop
                muted
                // controls
                type="video/mov"
                width={"70%"}
              ></video> */}
              <img
                width={"280px"}
                height={"280px"}
                src={genieBottleGif}
                alt="community gif"
              ></img>
            </motion.div>
            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: "2rem",
                paddingLeft: "2rem",
                textAlign: "center",
              }}
            >
              <motion.h1
              // whileHover={{ scale: 1.1 }}
              >
                Genie
              </motion.h1>

              <motion.h2>
                Experience the power of the Genie as it guides and inspires you
                through any design roadblocks - unleashing your full creative
                potential and bringing your creations to a new level of
                brilliance.
              </motion.h2>
            </motion.div>
          </motion.div>
          <motion.div className="product-section-container-mobile">
            <motion.div
              style={{
                margin: "0",
                // height: "500px",
                display: "flex",
                justifyContent: "center",
                // alignItems: "right",
              }}
            >
              {/* <video
                src={communityAnimation1}
                autoPlay
                loop
                muted
                // controls
                type="video/mov"
                width={"70%"}
              ></video> */}
              <img
                width={"280px"}
                height={"280px"}
                src={creativeCommunityGif}
                alt="community gif"
              ></img>
            </motion.div>

            <motion.div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                paddingRight: "2rem",
                paddingLeft: "2rem",
                textAlign: "center",
              }}
            >
              <motion.h1 className="gradient-text">
                <span className="text">Creative Community</span>
              </motion.h1>
              <motion.h2>
                Our thriving ecosystem celebrates and empowers individuals to
                achieve their maximum potential. Unlock the opportunity to build
                and collaborative with others; have your own creations upvoted
                by the community.
              </motion.h2>
              <motion.button
                className="discord-button-1"
                style={{ marginTop: "2rem" }}
              >
                Join Discord
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      <motion.div className="final-action-call-container">
        <motion.div>
          <motion.h2>
            Get exclusive benefits and join
            <br></br>
            the community today.
          </motion.h2>
        </motion.div>
        <div class="input-container">
          <motion.button
            className="discord-button"
            style={{
              display: "flex",
              alignItems: "center",

              justifyContent: "center",
              lineHeight: "1em",
              width: "230px",
              padding: "1rem",
              gap: "1rem",
            }}
          >
            Unlock Access
            <img
              src={arrowIcon}
              alt="arrow icon"
              style={{
                backgroundColor: "transparent",
                filter: "invert(1)",
                transform: "scaleX(-1)",
                height: "auto",
                width: "30px",
                marginTop: ".2rem",

                // marginLeft: "10px", // added some margin to give space between the text and the arrow
              }}
            />
          </motion.button>
        </div>
        <div className="footer-container">
          <h1
            style={{
              backgroundColor: "transparent",
              color: "white",
              fontSize: "40px",
            }}
          >
            Genie X
          </h1>
          <div className="logos">
            <img src={discordLogo} alt="discord"></img>
            <img src={twitterLogo} alt="discord"></img>
            <img src={tiktokLogo} alt="discord"></img>
            <img src={youtubeLogo} alt="discord"></img>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LandingPage;
