import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// project images
import friendsImage from "../assets/projects/friends.jpg";
import friendImage from "../assets/projects/friend.jpg";
import itemGroups from "../assets/projects/item-groups.jpg";
import endpoints from "../assets/projects/endpoints.jpg"
// icons
import { FaReact, FaGithub, FaGitAlt} from "react-icons/fa";
import { SiSqlite, SiTypescript, SiSwagger, SiDotnet} from "react-icons/si";

const projectOptions = [
  {
    id: 1,
    title: "Social Agenda",
    description: "Employee Workshop & Team Building Management"
  },
  {
    id: 2,
    title: "CargoHub",
    description: "Legacy System Refactoring & Enhancement"
  },
  {
    id: 3,
    title: "Project 3",
    description: "Your Next Amazing Project"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(1);
  const renderProjectDetails = () => {
    if (selectedProject === 1) {
      return (
        <div className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-12 transition-all duration-300">
          <a
            href="https://github.com/AntonIshchyk/Social-Agenda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-4xl font-semibold mb-4 hover:underline justify-center">
            Social Agenda <FaGithub className="w-12 h-12 ml-3"/>
          </a>
          <div className="mb-8">
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={5000}>
              <img src={friendsImage} alt="Friends Page" className="w-full h-auto rounded-lg" />
              <img src={friendImage} alt="Friend Attending Event" className="w-full h-auto rounded-lg" />
            </Slider>
          </div>
          <p className="text-xl text-center mb-8 leading-relaxed">The website makes it easier for employees to see who is attending Workshops and Team Building activities. It also helps managers announce and manage attendance for these events.</p>
          <div className="flex items-center justify-center text-xl">
            <span className="">Technologies:</span>
            <FaReact className="w-12 h-12 hover:text-[#61DBFB] transition-colors duration-300 ml-3" />
            <SiTypescript className="w-12 h-12 hover:text-[#3178C6] transition-colors duration-300 ml-3" />
            <SiDotnet className="w-12 h-12 hover:text-[#512bd4] transition-colors duration-300 ml-3" />
            <FaGitAlt className="w-12 h-12 hover:text-[#f04141] transition-colors duration-300 ml-3" />
          </div>
        </div>
      );
    }

    if (selectedProject === 2) {
      return (
        <div className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-12 transition-all duration-300">
          <a
            href="https://github.com/AntonIshchyk/CargoHub"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-4xl font-semibold mb-4 hover:underline justify-center">
            CargoHub <FaGithub className="w-12 h-12 ml-3"/>
          </a>
          <div className="mb-8">
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={5000}>
                <img src={endpoints} alt="API Endpoints" className="w-full h-auto rounded-lg" />
                <img src={itemGroups} alt="Item Groups Endpoint Showcase" className="w-full h-auto rounded-lg" />
            </Slider>
          </div>
          <p className="text-xl text-center mb-8 leading-relaxed">Our team of three developers was tasked with analyzing, documenting, refactoring, and enhancing a legacy system inherited from the previous development team. Our focus was on improving code quality, maintainability, and functionality.</p>
          <div className="flex items-center justify-center text-xl">
            <span className="">Technologies:</span>
            <SiDotnet className="w-12 h-12 hover:text-[#512BD4] transition-colors duration-300 ml-3" />
            <SiSwagger className="w-12 h-12 hover:text-[#85C441] transition-colors duration-300 ml-3" />
            <SiSqlite className="w-12 h-12 hover:text-[#003B57] transition-colors duration-300 ml-3" />
            <FaGitAlt className="w-12 h-12 hover:text-[#f04141] transition-colors duration-300 ml-3" />
          </div>
        </div>
      );
    }

    if (selectedProject === 3) {
      return (
        <div className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-12 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-4xl font-semibold mb-4">Project 3 - Coming Soon</h3>
            <p className="text-xl mb-8 leading-relaxed">This is where your third project will be displayed. Add your project details here!</p>
            <div className="flex items-center justify-center text-xl">
              <span className="">Technologies:</span>
              <FaReact className="w-12 h-12 hover:text-[#61DBFB] transition-colors duration-300 ml-3" />
              <SiTypescript className="w-12 h-12 hover:text-[#3178C6] transition-colors duration-300 ml-3" />
              <FaGitAlt className="w-12 h-12 hover:text-[#f04141] transition-colors duration-300 ml-3" />
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="h-full p-4 flex gap-6">
      <div className="w-80 flex-shrink-0">
        <h2 className="text-2xl font-bold text-[#2C2C2C] mb-4 text-center">Choose a Project</h2>
        <div className="space-y-3">
          {projectOptions.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                selectedProject === project.id ? 'ring-4 ring-[#3B82F6] bg-[#3A3A3A]' : ''
              }`}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                <p className="text-lg text-[#A0A0A0]">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-hidden">
        {selectedProject && (
          <div className="h-full">
            {renderProjectDetails()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;