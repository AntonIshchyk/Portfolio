import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">
        Welcome to My Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Link
          to="/about"
          className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <p>
            Learn more about me, my background, and my journey as a developer.
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
