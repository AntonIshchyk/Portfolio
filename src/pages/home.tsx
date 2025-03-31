import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram } from "react-icons/fa";
import about from "../assets/home/about.png";
import projects from "../assets/home/projects.jpg";

const Home: React.FC = () => {
  return (
    <div className="h-full p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-8">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-5xl font-bold mt-4 mb-4">Hi, I'm Anton Ishchyk</h2>
          <p className="text-2xl">
            Open for an internship as a Full-Stack or Back-end Developer
          </p>
          <p className="text-2xl">Let's build something amazing together!</p>
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
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Link
          to="/about"
          className="relative bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-12 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden h-96 flex flex-col justify-between">
          <div className="z-10 flex flex-col justify-center lg:w-[50%] p-4">
            <h2 className="text-4xl font-semibold mb-6">About Me</h2>
            <p className="text-2xl">Discover more about my journey and skills.</p>
          </div>
          <img src={about} alt="About Me" className="absolute right-0 bottom-0 w-[50%] h-full object-cover " />
        </Link>

        <Link
          to="/projects"
          className="relative bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-12 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden h-auto sm:h-96 md:h-96 flex flex-col sm:flex-row">
          <div className="w-full sm:w-1/2 p-4">
            <h2 className="text-4xl font-semibold mb-6">Projects</h2>
            <p className="text-2xl">Explore the projects I have worked on.</p>
          </div>
          <div className="w-full sm:w-1/2 h-full">
            <img src={projects} alt="My Projects" className="w-full h-full object-cover rounded-lg" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Home;