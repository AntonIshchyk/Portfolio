import React from "react";
import { TfiDownload } from "react-icons/tfi";
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegram  } from "react-icons/fa";
import CV from "../assets/about/CV Software Developer Anton Ishchyk.pdf";
import Timeline from "../components/timeline";
import { education, work } from "../data/timeline";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 py-8">
      <div className="flex space-x-6 mb-12">
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

      <div className="mb-16">
        <a
          href={CV}
          download="CV Software Developer Anton Ishchyk.pdf"
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full inline-flex items-center shadow-xl hover:scale-105 transition-all duration-300">
          <TfiDownload className="mr-2 text-2xl" /> Download Resume
        </a>
      </div>
      <Timeline education={education} />
      <Timeline work={work} />
    </div>
  );
};

export default About;