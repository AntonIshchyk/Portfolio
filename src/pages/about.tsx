import React from "react";
import { TfiDownload } from "react-icons/tfi";
import CV from "../assets/about/CV Software Developer Anton Ishchyk.pdf";
import voedselbank from "../assets/about/voedselbank-maassluis.png";
import exc from "../assets/about/exc.png";
import delphis from "../assets/about/delphis.png";
import { FaReact, FaGitAlt, FaDatabase } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { SiTypescript, SiDotnet} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import Timeline from "../components/timeline";
import { education, work } from "../data/timeline";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center py-6">
      <a
        href={CV}
        download="CV Software Developer Anton Ishchyk.pdf"
        className="mb-8 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-8 rounded-full inline-flex items-center shadow-xl hover:scale-105 transition-all duration-300">
        <TfiDownload className="mr-2 text-2xl" /> Download Resume
      </a>
      <Timeline education={education} />
      <Timeline work={work} />
      
      <div className="w-full max-w-2xl flex flex-col mb-6">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold">Programming Languages</h4>
            <div className="flex gap-2 flex-wrap mt-2">
              <SiDotnet size={40} className="hover:text-[#512bd4] transition-colors duration-300" />
              <SiTypescript size={40} className="hover:text-[#3178C6] transition-colors duration-300 ml-2" />
              <FaReact size={40} className="hover:text-[#61DBFB] transition-colors duration-300" />
              <IoLogoPython size={40} className="hover:text-[#34A2FE] transition-colors duration-300" />
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold">Development Practices</h4>
            <div className="flex gap-2 flex-wrap mt-2">
              <FaDatabase size={40} className="hover:text-[#00758F] transition-colors duration-300" />
              <FaGitAlt size={40} className="hover:text-[#f04141] transition-colors duration-300" />
              <DiScrum size={50} className="hover:text-[#34A2FE] transition-colors duration-300"/>
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Languages</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mt-2">
              <img className="h-10 object-contain" src="https://flagcdn.com/gb.svg" alt="English"/>
              <img className="h-10 object-contain" src="https://flagcdn.com/nl.svg" alt="Dutch"/>
              <img className="h-10 object-contain" src="https://flagcdn.com/ua.svg" alt="Ukrainian"/>
              <img className="h-10 object-contain" src="https://flagcdn.com/ru.svg" alt="Russian"/>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-2xl flex flex-col items-start">
        <h2 className="text-2xl font-bold">Other Activities</h2>
        <a href="https://www.voedselbankmaassluis.nl/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center space-x-4 mb-2">
          <img
            src={voedselbank}
            className="w-12 h-12 object-contain"
            alt="Voedselbank Maassluis Logo"
          />
          <span className="text-lg hover:underline">Volunteering at Voedselbank Maassluis | 05/2022 - 10/2023</span>
        </a>

        <a href="https://www.excelsiormaassluis.nl/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center space-x-4 mb-2">
          <img
            src={exc}
            className="w-12 h-12 object-contain"
            alt="Excelsior Maassluis Logo"
          />
          <span className="text-lg hover:underline">Football player at Excelsior Maassluis (3e, O23-1) | 2023 - Present</span>
        </a>
        
        <a href="https://www.osvdelphis.nl/watwedoen/conditietraining/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center space-x-4">
          <img
            src={delphis}
            className="w-12 h-12 object-contain"
            alt="OSV Delphis Logo"
          />
          <span className="text-lg hover:underline">Finswimming at OSV Delphis | 2023 - Present</span>
        </a>
      </div>
    </div>
  );
};

export default About;
