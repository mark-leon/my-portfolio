import React, { useEffect, useRef } from "react";

const logos = [
  {
    src: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    alt: "HTML5 Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "CSS3 Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    alt: "Vue.js Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    alt: "Angular Logo",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript Logo",
  },
];

const CircularLogos = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        containerRef.current.style.setProperty(
          "--container-size",
          `${width}px`
        );
        containerRef.current.style.setProperty(
          "--logo-size",
          `${width * 0.15}px`
        );
        containerRef.current.style.setProperty(
          "--orbit-radius",
          `${width * 0.4}px`
        );
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "600px",
        aspectRatio: "1 / 1",
        margin: "0 auto",
      }}
    >
      <div style={styles.circleContainer}>
        <div style={styles.centerCircle}>
          <p style={styles.centerText}>My Skills</p>
        </div>
        <div style={styles.logoContainer}>
          {logos.map((logo, index) => (
            <div
              key={index}
              style={{
                ...styles.logo,
                transform: `rotate(${index * (360 / logos.length)}deg) 
                            translate(calc(var(--orbit-radius) - var(--logo-size) / 2)) 
                            rotate(-${index * (360 / logos.length)}deg)`,
              }}
            >
              <img src={logo.src} alt={logo.alt} style={styles.logoImage} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

const styles = {
  circleContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f172a",
    overflow: "hidden",
  },
  centerCircle: {
    position: "absolute",
    inset: "0",
    margin: "auto",
    width: "33.33%",
    height: "33.33%",
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  centerText: {
    textAlign: "center",
    color: "#0f172a",
    fontWeight: "600",
    fontSize: "calc(var(--container-size) * 0.06)",
  },
  logoContainer: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "orbit 20s linear infinite",
  },
  logo: {
    width: "var(--logo-size)",
    height: "var(--logo-size)",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    position: "absolute",
  },
  logoImage: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    borderRadius: "50%",
    padding: "8px",
  },
};

export default CircularLogos;
