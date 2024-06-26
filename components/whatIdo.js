import React from "react";

const WhatIDo = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "📱", // Replace with appropriate icon or SVG
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "💻", // Replace with appropriate icon or SVG
    },
    {
      title: "SEO Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🎯", // Replace with appropriate icon or SVG
    },
    {
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "📱", // Replace with appropriate icon or SVG
    },
    {
      title: "Web Development",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "💻", // Replace with appropriate icon or SVG
    },
    {
      title: "SEO Marketing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "🎯", // Replace with appropriate icon or SVG
    },
  ];

  return (
    <div className="max-w-6xl mx-auto gap-10 mt-20">
      <h2 className="text-3xl font-semibold mb-6 text-secondary">WHAT I DO?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 items-center justify-center">
        {services.map((service, index) => (
          <>
            <div className="bg-primary p-6 rounded-lg shadow-md">
              <div className="flex items-start">
                <img
                  src="https://sergio-react.vercel.app/static/img/a1.png"
                  className="h-16 w-16 mb-4 md:mb-0 md:mr-6"
                />
                <div className="text-secondary text-4xl mr-4"></div>
                <div>
                  <h3 className="text-secondary text-xl font-bold mb-2">
                    Web Design
                  </h3>
                  <p className="text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </>

          // <div key={index} className="bg-[#F7F7FF] p-6 rounded-lg shadow-md">
          //   <div className="text-5xl mb-4">{service.icon}</div>
          //   <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
          //   <p className="text-gray-600">{service.description}</p>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
