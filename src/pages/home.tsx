import React from "react";
import { Link } from "react-router-dom";
import test from "../assets/test.jpg";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-bold mt-4 mb-4">
            Let`s Collaborate!
          </h2>
          <p className="text-xl">
            Welcome to my portfolio, where you can explore my projects, learn more about me, and get in touch.
          </p>
        </div>

        <div className="flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
          <img
            src={test}
            alt="Software Developer Anton Ishchyk"
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          to="/about"
          className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            Learn more about my background, experiences, and what drives me as a developer.
          </p>
        </Link>

        <Link
          to="/projects"
          className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">My Projects</h2>
          <p>Explore the projects I have worked on.</p>
        </Link>

        <Link
          to="/contact"
          className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p>Get in touch with me.</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;