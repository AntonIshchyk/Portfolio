import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaGithub} from "react-icons/fa";
import { projectsData } from "../data/projects";


const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number>(1);
  const renderProjectDetails = () => {
    const project = projectsData.find(p => p.id === selectedProject);
    if (!project) return null;

    return (
      <div className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-12 transition-all duration-300">
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-4xl font-semibold mb-4 hover:underline justify-center">
            {project.title} <FaGithub className="w-12 h-12 ml-3"/>
          </a>
        ) : (
          <div className="text-center">
            <h3 className="text-4xl font-semibold mb-4">{project.title}</h3>
          </div>
        )}
        
        {project.images && project.images.length > 0 && (
          <div className="mb-8">
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={5000}>
              {project.images.map((image, index) => (
                <img key={index} src={image.src} alt={image.alt} className="w-full h-auto rounded-lg" />
              ))}
            </Slider>
          </div>
        )}
        
        <p className="text-xl mb-4 leading-relaxed">{project.longDescription}</p>
        
        <div className="flex flex-wrap items-center gap-3 text-xl">
          <span className="">Technologies:</span>
          {project.technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <IconComponent 
                key={index}
                className={`w-12 h-12 ${tech.hoverColor} transition-colors duration-300`}
              />
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="h-full p-4 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-80 flex-shrink-0 flex flex-col items-center">
        <div className="space-y-3 w-full max-w-md lg:max-w-none flex flex-col items-center">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project.id)}
              className={`bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-3 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl w-full ${
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