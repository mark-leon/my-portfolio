import React from "react";
import Experience from "./experience";
// import Testimonial from "./testimonial";
import WhatIDo from "./whatIdo";
import EducationAndSkills from "./educationAndSkills";
import AboutMe from "./about";
import Content from "./content";
import Contact from "./contact";
import { LuHome } from "react-icons/lu";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { MdHomeRepairService } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { ImBlogger2 } from "react-icons/im";
import { MdContactEmergency } from "react-icons/md";
import CircularLogos from "./circularLogos";
import Works from "./Works";
import FlipCard from "./blog";
// import Testimonial from "./testimonial";
import Feedbacks from "./Testimonial";

const Sidebar = () => {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 hover:text-green dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full overflow-y-auto bg-primary dark:bg-gray-800">
          <div className="relative flex flex-col items-center">
            <div
              className="w-full h-32 bg-green"
              style={{ clipPath: "ellipse(50% 80% at 40% 0)" }}
            ></div>
            <div className="absolute top-8 flex flex-col items-center">
              <img
                src="https://s3.brilliant.com.bd/leion_portfolio/1691562725583.jpg"
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-white"
              />
              <span className="text-secondary mt-4">LEION</span>
            </div>
          </div>
          <ul className="mt-24 space-y-2 font-medium pr-8 pl-6">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-secondary rounded-lg dark:text-secondary  hover:text-green group"
              >
                <LuHome />
                <span className="ms-3">HOME</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-secondary rounded-lg dark:text-secondary  hover:text-green group"
              >
                <BsFillPersonVcardFill />
                <span className="ms-3">ABOUT ME</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-secondary rounded-lg dark:text-secondary  hover:text-green group"
              >
                <MdHomeRepairService />
                <span className="ms-3">SERVICES</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-secondary rounded-lg dark:text-secondary  hover:text-green group"
              >
                <AiFillProject />
                <span className="flex-1 ms-3 whitespace-nowrap">PORTFOLIO</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-secondary rounded-lg dark:text-secondary  hover:text-green group"
              >
                <ImBlogger2 />
                <span className="flex-1 ms-3 whitespace-nowrap">BLOGS</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-secondary rounded-lg dark:text-secondary  hover:text-green group"
              >
                <MdContactEmergency />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  CONTACT ME
                </span>
              </a>
            </li>
          </ul>
          <div className="absolute bottom-0 left-0 p-4">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </aside>

      <div className="p-4 sm:ml-64 bg-background">
        <Content />
        <AboutMe />
        <EducationAndSkills />
        <WhatIDo />
        <Experience />
        <Works />
        <Feedbacks />
        <Contact />
      </div>
    </>
  );
};

export default Sidebar;
