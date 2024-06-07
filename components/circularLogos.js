import React from "react";

const logos = [
  { src: "https://via.placeholder.com/80", alt: "Logo 1" }, // Adjust placeholder size
  { src: "https://via.placeholder.com/80", alt: "Logo 2" },
  { src: "https://via.placeholder.com/80", alt: "Logo 3" },
  { src: "https://via.placeholder.com/80", alt: "Logo 4" },
  { src: "https://via.placeholder.com/80", alt: "Logo 5" },
  { src: "https://via.placeholder.com/80", alt: "Logo 6" },
  { src: "https://via.placeholder.com/80", alt: "Logo 7" },
];

const CircularLogos = () => {
  return (
    <div className="circle-container">
      <div className="absolute w-36 h-36 bg-white rounded-full flex items-center justify-center z-10">
        {" "}
        {/* Increased size */}
        <p className="text-lg font-semibold">YOUR LOGO</p>
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
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularLogos;
