import React from "react";
import { TfiDownload } from "react-icons/tfi";
import CV from "../assets/about/CV Software Developer Intern Anton Ishchyk.pdf";
import voedselbank from "../assets/about/voedselbank-maassluis.png"
import exc from "../assets/about/exc.png"
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
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-bold">Other Activities</h2>
        <a href="https://www.voedselbankmaassluis.nl/" target="_blank" rel="noopener noreferrer" className="mb-2 flex items-center space-x-2">
          <img src={voedselbank} className="w-10 h-10 object-contain" alt="Voedselbank Maassluis Logo" />
          <span className="">Volunteer</span>
        </a>
        <a href="https://www.excelsiormaassluis.nl/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <img src={exc} className="h-10 object-contain" alt="Excelsior Maassluis Logo" />
          <span className=""></span>
        </a>
      </div>
    </div>
  );
};

export default About;