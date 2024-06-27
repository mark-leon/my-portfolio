import React from "react";
import CircularLogos from "./circularLogos";

const EducationAndSkills = () => {
  return (
    <div className="p-5 mt-20">
      <div className="flex flex-col lg:flex-row items-start justify-between text-secondary max-w-6xl mx-auto gap-10">
        {/* Education Section */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-6">EDUCATION & SKILLS</h2>
          <div className="col-lg-4 m-15px-tb">
            <ul className="m-0 p-0 bg-primary list-none">
              <li className="p-5">
                <span class="bg-[#2fbf71] text-secondary text-[11px] px-2 py-[1px] inline-block align-top tracking-wide -ml-6 relative mb-2.5">
                  2010-2012
                </span>
                <h6 class="text-secondary my-1.5">Graphic Designer</h6>
                <p>International Design Institute</p>
              </li>
              <li className="p-5">
                <span class="bg-[#2fbf71] text-secondary text-[11px] px-2 py-[1px] inline-block align-top tracking-wide -ml-6 relative mb-2.5">
                  2010-2012
                </span>
                <h6 class="text-secondary my-1.5">Web Development</h6>
                <p>International Design Institute</p>
              </li>
              <li className="p-5">
                <span class="bg-[#2fbf71] text-secondary text-[11px] px-2 py-[1px] inline-block align-top tracking-wide -ml-6 relative mb-2.5">
                  2010-2012
                </span>
                <h6 class="text-secondary my-1.5">
                  Search Engine Optimization
                </h6>
                <p>International Design Institute</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full lg:w-1/2">
          <CircularLogos />
          {/* <h2 className="text-3xl font-semibold mb-6">My skills</h2>
          <p className="text-gray-300 mb-6">
            Im a Freelancer Front-end Developer with over 3 years of experience.
            I code and create web elements for amazing people around the world.
            I like to work with new people. New people, new experiences.
          </p>
          <div className="space-y-6">
            <div>
              <label className="block text-gray-300 mb-1">HTML5</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">WordPress</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Magento</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">UI/UX</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;
