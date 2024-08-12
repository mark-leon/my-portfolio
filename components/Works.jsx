import React from "react";
import Tilt from "react-parallax-tilt";

import { projects } from "../components/constants";
import myGif from "../pages/";

const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-primary p-5 rounded-2xl sm:w-[360px] w-full"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={"https://s3.brilliant.com.bd/leion_portfolio/github.png"}
              alt="source code"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] text-secondary`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  );
};

const Works = () => {
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <p className="text-3xl font-semibold mb-6 text-secondary">My Projects</p>
      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        {/* <div className="mt-20 flex flex-wrap gap-7">
          <img
            src={
              "https://s3.brilliant.com.bd/docs-images/platformScreenshots/createAlarm.gif"
            }
            alt="A cool GIF"
          />
        </div> */}
        <video autoPlay loop muted playsInline>
          <source
            src="https://s3.brilliant.com.bd/leion_portfolio/gifs/5ee89892-bb00-454e-8cbf-d43921a0783e.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Works;
