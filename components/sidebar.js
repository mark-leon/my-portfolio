// Sidebar.js
import React from "react";

const Sidebar = () => {
  return (
    <div className="w-2/12 bg-gray-100 h-screen p-5 flex flex-col items-center">
      <div className="mb-8">
        <img
          src="https://sergio-react.vercel.app/static/img/about-me.jpg"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-2"
        />
        <h2 className="text-lg font-bold">Sergio Gadot</h2>
      </div>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="text-green-500 font-bold">
          Home
        </a>
        <a href="#" className="text-gray-700">
          About Me
        </a>
        <a href="#" className="text-gray-700">
          Services
        </a>
        <a href="#" className="text-gray-700">
          Portfolio
        </a>
        <a href="#" className="text-gray-700">
          Blogs
        </a>
        <a href="#" className="text-gray-700">
          Contact Me
        </a>
      </nav>
      <div className="mt-auto flex space-x-4">
        <a href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
