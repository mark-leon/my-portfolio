import Lottie from "lottie-react";
import React from "react";
import coding from "../pages/programming.json";

const AboutMe = () => {
  const style = {
    height: 450,
    width: 450,
  };
  return (
    <div className="max-w-6xl mx-auto gap-10 flex flex-col lg:flex-row  items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <Lottie animationData={coding} loop={true} style={style} />
      </div>
      <div className="lg:ml-16 mt-8 lg:mt-0 text-center lg:text-left max-w-lg text-secondary">
        <h2 className="text-3xl font-semibold mb-4">ABOUT ME.</h2>
        <h3 className="text-xl font-bold mb-2">
          Im a Front-end Developer with over 2 years of experience.
        </h3>
        <p className="text-gray-300 mb-4">
          Im a Front-end Developer with over 2 years of experience. Im from
          Dhaka,Bangladesh. I focus on building intuitive, user-friendly, and
          responsive web interfaces. I work closely with the design and backend
          teams to implement seamless user experiences across various platforms.
        </p>
        {/* <div className="flex justify-center lg:justify-start space-x-8 mb-4">
          <div className="text-center">
            <span className="text-2xl font-bold">5k</span>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">3k</span>
            <p className="text-gray-300">Satisfied Clients</p>
          </div>
        </div> */}
        {/* <div className="flex justify-center lg:justify-start space-x-4">
          <button className="bg-green text-secondary px-6 py-2 rounded shadow">
            Contact Me
          </button>
          <button className="bg-white border border-green-500 text-green px-6 py-2 rounded shadow">
            Portfolio
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default AboutMe;
