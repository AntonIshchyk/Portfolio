import React from "react";
import { TfiDownload } from "react-icons/tfi";
import CV from "../assets/about/CV Software Developer Intern Anton Ishchyk.pdf";
import Timeline from "../components/timeline";
import { education, work } from "../data/timeline";

const About: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center px-6 py-8">
      <div className="mb-8">
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