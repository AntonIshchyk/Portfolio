import React from "react";
import { TfiDownload } from "react-icons/tfi";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import CV from "../assets/about/CV Software Developer Anton Ishchyk.pdf";


const About: React.FC = () => {
    return (
      <>
        <h1>test</h1>
        <a
          href={CV}
          download="CV Software Developer Anton Ishchyk.pdf"
          className="bg-blue-600 text-white py-2 px-4 rounded inline-flex items-center mb-6 hover:bg-blue-700"
        >
          <TfiDownload className="mr-2" /> Download Resume
        </a>

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