import React from "react";
import { Link } from "react-router-dom";
import test from "../assets/test.jpg";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-bold mt-4 mb-4">
            Hi, I'm Anton Ishchyk
          </h2>
          <p className="text-2xl">
            A passionate software developer focused on creating optimal, user-friendly, and forward-thinking software solutions.
          </p>
          <p className="text-2xl">
            Let's build something amazing together!
          </p>
          <div className="flex justify-center lg:justify-start mt-4">
            <div className="flex space-x-6 bg-[#90dde9] py-3 px-8 rounded-full shadow-xl hover:scale-105 transition-all duration-300 w-fit mx-auto lg:mx-0">
              <a
                href="https://www.linkedin.com/in/anton-ishchyk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333] hover:text-blue-600 text-4xl transition-all duration-200">
                <FaLinkedin />
              </a>
              <a
                href="https://t.me/Anton_Ishchyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333] hover:text-[#0088cc] text-4xl transition-all duration-200">
                <FaTelegram />
              </a>
              <a
                href="mailto:anton.ishchyk@gmail.com"
                className="text-[#333] hover:text-red-500 text-4xl transition-all duration-200">
                <FaEnvelope />
              </a>
              <a
                href="https://github.com/AntonIshchyk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#333] hover:text-black text-4xl transition-all duration-200">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-xs lg:max-w-sm xl:max-w-md mx-auto">
          <img
            src={test}
            alt="Software Developer Anton Ishchyk"
            className="rounded-lg shadow-lg w-full max-w-sm mx-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
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
      </div>
    </div>
  );
};

export default Home;