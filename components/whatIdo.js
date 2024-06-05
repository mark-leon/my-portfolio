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
    <div className="p-10 w-10/12">
      <h2 className="text-3xl font-semibold mb-6">WHAT I DO?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center justify-center">
        {services.map((service, index) => (
          <div key={index} className="bg-[#F7F7FF] p-6 rounded-lg shadow-md">
            <div className="text-5xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
