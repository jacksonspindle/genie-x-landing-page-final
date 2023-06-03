import React, { useEffect, useState } from "react";

const Waitlist = () => {
  const [iframeHeight, setIframeHeight] = useState("130%");

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tally.so/widgets/embed.js";
    script.async = true;
    document.body.appendChild(script);

    setTimeout(() => {
      if (window.innerWidth < 420) {
        setIframeHeight("70%");
      } else {
        setIframeHeight("60%");
      }
    }, 10000); // Change height after 20 seconds

    window.scrollTo(0, 0);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="waitlist-container">
      <iframe
        data-tally-src="https://tally.so/r/m6eOQe?transparentBackground=1"
        width="100%"
        style={{
          position: "absolute",
          top:
            window.innerWidth < 420
              ? "10vh"
              : window.innerWidth >= 420 && window.innerWidth <= 800
              ? "12vh"
              : "0",
          maxHeight: "1800px",
          height: iframeHeight,
          backgroundColor: "transparent",
        }}
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Apply For The Waitlist"
      ></iframe>
    </div>
  );
};

export default Waitlist;
