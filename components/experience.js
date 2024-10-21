import React from "react";

const experiences = [
  {
    companyLogo:
      "https://s3.brilliant.com.bd/intercloud-landingpage/Intercloud%20Logo%20White.png", // Replace with actual path or URL
    role: "Front-end Developer",
    company: "Intercloud Limited",
    location: "Shahjadpur, Dhaka",
    duration: "May 2022 - Present",
    description: [
      "Developed complex, full-stack applications using Next.js, Node.js, PostgreSQL, and Redux Toolkit.",
      "Optimized data management by integrating React Query for efficient API handling, data caching, and synchronization.",
      "Collaborated with back-end developers and UX/UI designers to create cohesive and user-friendly interfaces.",
      "Incorporated Cypress testing framework for enhanced quality assurance and reduced bugs.",
      "Implemented CI/CD pipelines for automating front-end project deployments.",
      "Mentored junior engineers to ensure best practices in coding and design.",
      "Utilized Docker for containerization, streamlining deployment on Brilliant Cloud.",
    ],
  },
  // {
  //   companyLogo: "https://sergio-react.vercel.app/static/img/a1.png",
  //   role: "Front-end Developer",
  //   company: "WeLab",
  //   location: "Remote",
  //   duration: "Jan 2019 - Present",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
  // },
  // {
  //   companyLogo: "https://sergio-react.vercel.app/static/img/a1.png",
  //   role: "Front-end Developer",
  //   company: "WeLab",
  //   location: "Remote",
  //   duration: "Jan 2019 - Present",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
  // },
];

const Experience = () => {
  return (
    <div className="max-w-6xl mx-auto gap-10 mt-16">
      <h2 className="text-3xl font-semibold mb-6 text-secondary">Experience</h2>
      <div className="gap-6 md:grid-cols-1 lg:grid-cols-1">
        {experiences.map((exp, index) => (
          // eslint-disable-next-line react/jsx-key
          <div className="bg-primary p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:items-start">
            <img
              key={index}
              src={exp.companyLogo}
              alt={`${exp.company} logo`}
              className="h-20 w-40 mb-4 md:mb-0 md:mr-6"
            />
            <div className="flex-grow mt-8">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-secondary">
                  {exp.role}
                </h3>
                <span className="inline-block px-3 py-1 text-sm font-semibold text-green-700 bg-green rounded-full">
                  Full Time
                </span>
              </div>
              <p className="text-gray-400 mb-1">
                {exp.company} | {exp.location}
              </p>
              <p className="text-gray-400 mb-4">{exp.duration}</p>
              <ul>
                {exp.description.map((bullet, index) => (
                  <li className="text-gray-400 mb-4" key={index}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
