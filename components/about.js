import React from "react";

const AboutMe = () => {
  return (
    <div className="w-10/12 flex flex-col lg:flex-row p-10 items-center justify-center">
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-1">
        <img
          src="https://sergio-react.vercel.app/static/img/about-me.png"
          alt="Image 1"
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="lg:ml-16 mt-8 lg:mt-0 text-center lg:text-left max-w-lg">
        <h2 className="text-3xl font-semibold mb-4">ABOUT ME.</h2>
        <h3 className="text-xl font-bold mb-2">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
        </h3>
        <p className="text-gray-700 mb-4">
          I'm a Freelancer Front-end Developer with over 3 years of experience.
          I'm from San Francisco. I code and create web elements for amazing
          people around the world. I like work with new people. New people new
          Experiences.
        </p>
        <div className="flex justify-center lg:justify-start space-x-8 mb-4">
          <div className="text-center">
            <span className="text-2xl font-bold">5k</span>
            <p className="text-gray-600">Projects Completed</p>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold">3k</span>
            <p className="text-gray-600">Satisfied Clients</p>
          </div>
        </div>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="bg-green-500 text-white px-6 py-2 rounded shadow">
            Contact Me
          </button>
          <button className="bg-white border border-green-500 text-green-500 px-6 py-2 rounded shadow">
            Portfolio
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
