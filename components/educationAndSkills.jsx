import React from "react";

const EducationAndSkills = () => {
  return (
    <div className="p-10">
      <div className="flex flex-col lg:flex-row items-start justify-between text-white">
        {/* Education Section */}
        <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-10 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-6">EDUCATION & SKILLS</h2>
          <div className="space-y-6">
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-green-500 text-white rounded-full w-max px-3 py-1 mb-2">
                2010-2012
              </div>
              <h3 className="text-xl font-semibold">Graphic Designer</h3>
              <p className="text-gray-300">International Design Institute</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-green-500 text-white rounded-full w-max px-3 py-1 mb-2">
                2010-2012
              </div>
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p className="text-gray-300">International Design Institute</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="bg-green-500 text-white rounded-full w-max px-3 py-1 mb-2">
                2010-2012
              </div>
              <h3 className="text-xl font-semibold">
                Search Engine Optimization
              </h3>
              <p className="text-gray-300">International Design Institute</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">My skills</h2>
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
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">WordPress</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">Magento</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div>
              <label className="block text-gray-300 mb-1">UI/UX</label>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div
                  className="bg-green-500 h-2.5 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkills;
