import Lottie from "lottie-react";
import React from "react";
import connect from "../pages/connect.json";

const Contact = () => {
  const style = {
    height: 500,
    width: 500,
  };
  return (
    <div className="max-w-6xl mx-auto gap-10 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Lottie animationData={connect} loop={true} />
        {/* <div className="w-8/12 bg-primary  text-secondary p-6 rounded-lg shadow-md ">
          <h2 className="text-3xl font-semibold mb-4">Whats your story?</h2>
          <h3 className="text-xl font-semibold mb-4"> Get in touch</h3>
          <p className="mb-4">
            Always available for freelancing if the right project comes along.
            Feel free to contact me.
          </p>
          <ul>
            <li className="mb-2 font-extrabold">
              <span role="img" aria-label="location" className="mr-2">
                📍
              </span>
              123 Stree New York City, United States Of America 750065.
            </li>
            <li className="mb-2 font-extrabold">
              <span role="img" aria-label="email" className="mr-2">
                📧
              </span>
              support@domain.com
            </li>
            <li className="mb-2 font-extrabold">
              <span role="img" aria-label="phone" className="mr-2">
                📞
              </span>
              +044 9696 9696 3636
            </li>
          </ul>
        </div> */}
        <div className="bg-primary  text-secondary p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Say Something</h2>
          <div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                id="name"
                className="mt-1 w-[47%]  p-2 border bg-primary border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="mt-1 w-[47%] p-2 ml-7 border bg-primary border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Subject"
                id="subject"
                className="mt-1 w-full p-2 border bg-primary border-gray-300 rounded-md"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Your message"
                id="message"
                rows="4"
                className="mt-1 w-full p-2 border bg-primary border-gray-300 rounded-md"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-secondary p-2 rounded-md hover:bg-green-600"
            >
              send message
            </button>
          </div>
        </div>
      </div>
      {/* <div className="mt-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.843821578896!2d144.96305791557644!3d-37.81362774259238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776e97a6e8d7e!2sEnvato!5e0!3m2!1sen!2sus!4v1630641533370!5m2!1sen!2sus"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          // className="border-0"
          className="iframe-style"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;
