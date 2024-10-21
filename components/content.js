import Lottie from "lottie-react";
import React from "react";
import developer from "../pages/developer.json";

const Content = () => {
  const style = {
    height: 450,
    width: 450,
  };
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-10 md:flex-row items-center justify-center bg-background text-secondary py-16  md:px-24">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Hello, I am Leion
        </h2>
        <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4">
          I am a passionate front end engineer
        </h3>
        <p className="text-base md:text-xl mb-4 md:mb-8">
          As a front-end engineer, I focus on building intuitive, user-friendly,
          and responsive web interfaces. My job is to implement seamless user
          experiences across various platforms.
        </p>
        <button className="bg-green text-black font-semibold py-2 px-4 rounded hover:bg-green-400 transition duration-300">
          Download CV
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative">
          <div className="rounded-full flex items-center justify-center overflow-hidden">
            <Lottie animationData={developer} loop={true} style={style} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
