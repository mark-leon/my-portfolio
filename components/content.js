// // Content.js
// import React from "react";

// const Content = () => {
//   return (
//     <div className="w-3/4 p-10">
//       <h1 className="text-5xl font-bold">
//         Hello, I am <span className="text-green-500">Sergio Gadot</span>
//       </h1>
//       <h2 className="text-xl font-semibold mt-4">I Am Passionate Freela</h2>
//       <p className="text-gray-700 mt-4">
//         I design and develop services for customers of all sizes, specializing
//         in creating stylish, modern websites, web services, and online stores.
//       </p>
//       <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded shadow">
//         Download CV
//       </button>
//     </div>
//   );
// };

// export default Content;

import React from "react";

const Content = () => {
  return (
    <div className="w-10/12 p-10 flex items-center justify-center">
      <div className="max-w-3xl">
        {/* <h1 className="text-5xl font-bold mb-4">Hello, I am</h1> */}
        {/* <h1 className="text-5xl font-bold text-black">Sergio Gadot</h1> */}
        <h2 className="text-xl font-semibold mt-4 text-black">
          I Am Passionate Developer
        </h2>
        <p className="text-gray-700 mt-4">
          I design and develop services for customers of all sizes, specializing
          in creating stylish, modern websites, web services, and online stores.
        </p>
        <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded shadow">
          Download CV
        </button>
      </div>
      <div className="ml-16">
        <div className="relative">
          <div
            className="absolute inset-0 bg-green-500 rounded-full"
            style={{
              zIndex: -1,
              width: "calc(100% + 4rem)",
              height: "calc(100% + 4rem)",
              left: "-2rem",
              top: "-2rem",
            }}
          ></div>
          <img
            src="https://sergio-react.vercel.app/static/img/home-banner.png"
            alt="Sergio Gadot"
            className="rounded-full w-72 h-72 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
