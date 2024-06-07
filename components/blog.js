import React from "react";
import Tilt from "react-parallax-tilt";

const Blog = () => {
  return (
    // <div className="p-10">
    //   <h2 className="text-4xl font-semibold mb-8 text-center">LATEST BLOG.</h2>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <div className="bg-white rounded-lg shadow-md overflow-hidden transform-style-3d rotate-card">
    //       <img
    //         src="https://via.placeholder.com/600x400"
    //         alt="Blog 1"
    //         className="w-full h-48 object-cover"
    //       />
    //       <div className="p-6">
    //         <p className="text-gray-500 text-sm mb-2">
    //           29/FEB/2022 - WEBSITE - 1 COMMENT
    //         </p>
    //         <h3 className="text-2xl font-semibold mb-4">
    //           Five Solid Evidences Attending Design Is Good For Your Career
    //           Development.
    //         </h3>
    //         <p className="text-gray-700">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //       </div>
    //     </div>
    //     <div className="bg-white rounded-lg shadow-md overflow-hidden transform-style-3d rotate-card">
    //       <img
    //         src="https://via.placeholder.com/600x400"
    //         alt="Blog 2"
    //         className="w-full h-48 object-cover"
    //       />
    //       <div className="p-6">
    //         <p className="text-gray-500 text-sm mb-2">
    //           29/FEB/2022 - WEBSITE - 1 COMMENT
    //         </p>
    //         <h3 className="text-2xl font-semibold mb-4">
    //           Ten Mind-Blowing Reasons Why Design Is Using This Technique For
    //           Exposure.
    //         </h3>
    //         <p className="text-gray-700">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
    //           eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <Tilt
    //   className="parallax-effect-glare-scale"
    //   perspective={500}
    //   glareEnable={true}
    //   glareMaxOpacity={0.45}
    //   scale={1.02}
    //   gyroscope={true}
    // >
    //   <div className="inner-element">
    //     <div>React</div>
    //     <div>Parallax Tilt</div>
    //     <div>👀</div>
    //   </div>
    // </Tilt>
    <div class="card">
      <div class="content">
        <div class="front">Front</div>
        <div class="back">Back!</div>
      </div>
    </div>
  );
};

export default Blog;
