import React from "react";
import { TfiDownload } from "react-icons/tfi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CV from "../assets/about/CV Software Developer Anton Ishchyk.pdf";
import Timeline from "../components/timeline";


const About: React.FC = () => {
    return (
      <>
        <a
          href={CV}
          download="CV Software Developer Anton Ishchyk.pdf"
          className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-6 rounded-full inline-flex items-center shadow-lg hover:scale-105 transition-all">
          <TfiDownload className="mr-2 text-xl" /> Download Resume
        </a>

        <Timeline/>

        <div className="mt-6 flex space-x-4">
          <a href="https://github.com/AntonIshchyk" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-black text-3xl">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/anton-ishchyk/" target="_blank" rel="noopener noreferrer" className="text-[#333] hover:text-blue-600 text-3xl">
            <FaLinkedin />
          </a>
          <a href="mailto:anton.ishchyk@gmail.com" className="text-[#333] hover:text-red-500 text-3xl">
            <FaEnvelope />
          </a>
        </div>
      </>
    );
  }
  
export default About;    