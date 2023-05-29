import React, { useEffect, useRef, useState } from "react";

const FairyDustCursor = ({ colors = ["#D61C59", "#E7D84B", "#1B8798"] }) => {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const animationFrame = useRef(null);
  let width = window.innerWidth;
  let height = window.innerHeight;
  let cursor = { x: width / 2, y: width / 2 };
  let lastPos = { x: width / 2, y: width / 2 };

  const [hovered, setHovered] = useState(false); // Track the hover state

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    const char = "*";

    // canvas.style.top = "0px";
    // canvas.style.left = "0px";
    // canvas.style.pointerEvents = "none";
    // canvas.style.position = "fixed";
    // canvas.style.zIndex = "999999";
    // canvas.style.backgroundColor = "transparent";

    canvas.width = width;
    canvas.height = height;

    context.font = "21px serif";
    context.textBaseline = "middle";
    context.textAlign = "center";

    const canvImages = colors.map((color) => {
      const measurements = context.measureText(char);
      const bgCanvas = document.createElement("canvas");
      const bgContext = bgCanvas.getContext("2d");

      bgCanvas.width = measurements.width;
      bgCanvas.height =
        measurements.actualBoundingBoxAscent +
        measurements.actualBoundingBoxDescent;

      bgContext.fillStyle = color;
      bgContext.textAlign = "center";
      bgContext.font = "21px serif";
      bgContext.textBaseline = "middle";
      bgContext.fillText(
        char,
        bgCanvas.width / 2,
        measurements.actualBoundingBoxAscent
      );

      return bgCanvas;
    });

    const bindEvents = () => {
      const genieElement = document.querySelector("h2"); // Select the h2 element

      genieElement.addEventListener("mouseenter", () => {
        setHovered(true); // Set the hover state to true
      });

      genieElement.addEventListener("mouseleave", () => {
        setHovered(false); // Set the hover state to false
      });

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("touchmove", onTouchMove, { passive: true });
      document.addEventListener("touchstart", onTouchMove, { passive: true });
      window.addEventListener("resize", onWindowResize);
    };

    const onMouseMove = (e) => {
      window.requestAnimationFrame(() => {
        cursor.x = e.clientX;
        cursor.y = e.clientY;

        const distBetweenPoints = Math.hypot(
          cursor.x - lastPos.x,
          cursor.y - lastPos.y
        );

        if (hovered && distBetweenPoints > 1.5) {
          addParticle(
            cursor.x,
            cursor.y,
            canvImages[Math.floor(Math.random() * colors.length)]
          );

          lastPos.x = cursor.x;
          lastPos.y = cursor.y;
        }
      });
    };

    const onTouchMove = (e) => {
      if (e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
          addParticle(
            e.touches[i].clientX,
            e.touches[i].clientY,
            canvImages[Math.floor(Math.random() * colors.length)]
          );
        }
      }
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const addParticle = (x, y, color) => {
      particles.current.push(new Particle(x, y, color));
    };

    const updateParticles = () => {
      if (hovered) {
        context.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.current.length; i++) {
          particles.current[i].update(context);
        }

        for (let i = particles.current.length - 1; i >= 0; i--) {
          if (particles.current[i].lifeSpan < 0) {
            particles.current.splice(i, 1);
          }
        }
      }
    };

    const loop = () => {
      updateParticles();
      animationFrame.current = requestAnimationFrame(loop);
    };

    bindEvents();
    loop();

    return () => {
      cancelAnimationFrame(animationFrame.current);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("resize", onWindowResize);
    };
  }, [colors, hovered]);

  class Particle {
    constructor(x, y, canvasItem) {
      const lifeSpan = Math.floor(Math.random() * 30 + 60);
      this.initialLifeSpan = lifeSpan;
      this.lifeSpan = lifeSpan;
      this.velocity = {
        x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
        y: Math.random() * 0.7 + 0.9,
      };
      this.position = { x: x, y: y };
      this.canv = canvasItem;
    }

    update(context) {
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      this.lifeSpan--;

      this.velocity.y += 0.02;

      const scale = Math.max(this.lifeSpan / this.initialLifeSpan, 0);

      context.drawImage(
        this.canv,
        this.position.x - (this.canv.width / 2) * scale,
        this.position.y - this.canv.height / 2,
        this.canv.width * scale,
        this.canv.height * scale
      );
    }
  }

  return (
    <div style={{ position: "relative", zIndex: "9999" }}>
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          backgroundColor: "transparent",
        }}
      />
    </div>
  );
};

export default FairyDustCursor;
