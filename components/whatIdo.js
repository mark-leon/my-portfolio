import React from "react";

const WhatIDo = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "I design and develop responsive, user-friendly websites and applications, focusing on delivering a seamless user experience. I ensure that the interfaces I create are visually appealing and accessible across different devices and platforms, using modern frameworks and tools like ReactJS, Next.js, and Tailwind CSS.        ",
      icon: "📱", // Replace with appropriate icon or SVG
    },
    {
      title: "Frontend Architecture",
      description:
        "I build and maintain scalable frontend architectures that align with the project’s long-term goals. This includes organizing code structures, creating reusable components, and optimizing performance to ensure that applications load quickly and function smoothly.        ",
      icon: "💻", // Replace with appropriate icon or SVG
    },
    {
      title: "API Integration",
      description:
        "I work closely with backend developers to integrate third-party APIs and backend services, ensuring efficient data fetching, caching, and synchronization and enhance user interactions by providing real-time data without compromising performance.        ",
      icon: "🎯", // Replace with appropriate icon or SVG
    },
    {
      title: "Data Visualization",
      description:
        "I implement data visualization tools like Apex Chart JS to turn complex data into interactive charts and graphs. This helps users easily understand key insights, making the user interface both functional and informative.",
      icon: "🎯", // Replace with appropriate icon or SVG
    },
    {
      title: "Component & UI Frameworks",
      description:
        "I utilize and customize component libraries such as Material UI and Flowbite to speed up development while maintaining a cohesive design language across the application. I also develop custom UI elements tailored to project-specific requirements.",
      icon: "📱", // Replace with appropriate icon or SVG
    },
    {
      title: "Cross-Browser Compatibility",
      description:
        "I ensure that all web applications I build are compatible across different browsers and devices, conducting extensive testing to prevent bugs and maintain a smooth and responsive user experience for all users.",
      icon: "💻", // Replace with appropriate icon or SVG
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
                    {service.title}
                  </h3>
                  <p className="text-gray-400">{service.description}</p>
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
