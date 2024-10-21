import React from "react";
import CircularLogos from "./circularLogos";

const EducationAndSkills = () => {
  return (
    <div className="p-5 mt-20">
      <div className="flex flex-col lg:flex-row items-start justify-between text-secondary max-w-6xl mx-auto gap-10">
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-6">EDUCATION & SKILLS</h2>
          <div className="col-lg-4 m-15px-tb">
            <ul className="m-0 p-0 bg-primary list-none">
              <li className="p-5">
                <span class="bg-[#2fbf71] text-secondary text-[11px] px-2 py-[1px] inline-block align-top tracking-wide -ml-6 relative mb-2.5">
                  2018-2022
                </span>
                <h6 class="text-secondary my-1.5">
                  Bachelor of Science in Computer Science
                </h6>
                <p>Brac university</p>
              </li>
              <li className="p-5">
                <span class="bg-[#2fbf71] text-secondary text-[11px] px-2 py-[1px] inline-block align-top tracking-wide -ml-6 relative mb-2.5">
                  2015-2017
                </span>
                <h6 class="text-secondary my-1.5">
                  Higher Secondary School Certificate
                </h6>
                <p>Govt. Science College</p>
              </li>
              <li className="p-5">
                <span class="bg-[#2fbf71] text-secondary text-[11px] px-2 py-[1px] inline-block align-top tracking-wide -ml-6 relative mb-2.5">
                  2010-2015
                </span>
                <h6 class="text-secondary my-1.5">
                  Secondary School Certificate
                </h6>
                <p>Ideal School & College</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <CircularLogos />
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;
