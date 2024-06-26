import React from "react";

const experiences = [
  {
    companyLogo: "https://sergio-react.vercel.app/static/img/a1.png", // Replace with actual path or URL
    role: "Front-end Developer",
    company: "WeLab",
    location: "Remote",
    duration: "Jan 2019 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
  },
  {
    companyLogo: "https://sergio-react.vercel.app/static/img/a1.png",
    role: "Front-end Developer",
    company: "WeLab",
    location: "Remote",
    duration: "Jan 2019 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
  },
  {
    companyLogo: "https://sergio-react.vercel.app/static/img/a1.png",
    role: "Front-end Developer",
    company: "WeLab",
    location: "Remote",
    duration: "Jan 2019 - Present",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
  },
];

const Experience = () => {
  return (
    <div className="max-w-6xl mx-auto gap-10 mt-16">
      <h2 className="text-2xl font-bold mb-8 text-secondary">Experience</h2>
      <div className="gap-6 md:grid-cols-1 lg:grid-cols-1">
        {experiences.map((exp, index) => (
          <div className="bg-primary p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
            <img
              // src="https://sergio-react.vercel.app/static/img/a1.png"
              src={exp.companyLogo}
              alt={`${exp.company} logo`}
              className="h-40 w-40 mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-grow">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-secondary">
                  {exp.role}
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green-200 rounded-full">
                  Full Time
                </span>
              </div>
              <p className="text-gray-400 mb-1">
                {exp.company} | {exp.location}
              </p>
              <p className="text-gray-400 mb-4">{exp.duration}</p>
              <p className="text-gray-400">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
