import React from "react";

const logos = [
  {
    src: "https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png",
    alt: "Logo 1",
  }, // Adjust placeholder size
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    alt: "Logo 2",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "Logo 3",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "Logo 4",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
    alt: "Logo 5",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg",
    alt: "Logo 6",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "Logo 7",
  },
];

const CircularLogos = () => {
  return (
    <div className="circle-container">
      <div className="absolute w-72 h-72 bg-background rounded-full flex items-center justify-center z-10">
        <p className="text-4xl font-semibold">My Skills</p>
      </div>
      <div className="logo-container">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="logo"
            style={{
              transform: `rotate(${
                index * (360 / logos.length)
              }deg) translate(200px) rotate(-${
                index * (360 / logos.length)
              }deg)`, // Increased translation
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularLogos;
