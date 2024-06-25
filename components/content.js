import React from "react";

const Content = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto gap-10 md:flex-row items-center justify-center bg-[#10101A] text-white py-16 px-8 md:px-24">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
          Hello, I am Leion
        </h2>
        <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4">
          I Am a Passionate Front end engineer
        </h3>
        <p className="text-base md:text-xl mb-4 md:mb-8">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services and online stores.
        </p>
        <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded hover:bg-green-400 transition duration-300">
          Download CV
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <div className="relative">
          <div className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex items-center justify-center overflow-hidden">
            <img
              src="https://sergio-react.vercel.app/static/img/home-banner.png"
              alt="Sergio Gadot"
              className="w-44 h-44 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-88 lg:h-88 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
