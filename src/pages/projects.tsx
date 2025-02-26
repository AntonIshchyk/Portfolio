import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// project images
import registerImage from "../assets/register.jpg";
import friendsImage from "../assets/friends.jpg";
import friendImage from "../assets/friend.jpg";
import itemGroups from "../assets/item-groups.jpg";
import endpoints from "../assets/endpoints.jpg"
// icons
import { FaReact, FaGithub, FaGitAlt} from "react-icons/fa";
import { SiSqlite, SiTypescript, SiSwagger, SiDotnet} from "react-icons/si";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <a
          href="https://github.com/AntonIshchyk/Social-Agenda"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="flex items-center text-3xl font-semibold mb-6">Social Agenda <FaGithub className="w-10 h-10 duration-300 ml-2"/></h2>
          <div className="mb-6">
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={5000}>
              <img src={registerImage} alt="Register Page" className="w-full h-auto rounded-lg object-cover" />
              <img src={friendsImage} alt="Friends Page" className="w-full h-auto rounded-lg object-cover " />
              <img src={friendImage} alt="Friend Attending Event" className="w-full h-auto rounded-lg object-cover" />
            </Slider>
          </div>
          <p className="text-lg">The website makes it easier for employees to see who is attending Workshops and Team Building activities. It also helps managers announce and manage attendance for these events.</p>
          <br /> <br />
          <p className="flex items-center text-lg">
            Technologies: 
            <FaReact className="w-12 h-12 hover:text-[#61DBFB] transition-colors duration-300 ml-2" />
            <SiTypescript className="w-12 h-12 hover:text-[#3178C6] transition-colors duration-300 ml-2" />
            <SiDotnet className="w-12 h-12 hover:text-[#512bd4] transition-colors duration-300 ml-2" />
            <FaGitAlt className="w-12 h-12 hover:text-[#f04141] transition-colors duration-300 ml-2" />
          </p>
        </a>

        <a
          href="https://github.com/AntonIshchyk/CargoHub"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="flex items-center text-3xl font-semibold mb-6">CargoHub <FaGithub className="w-10 h-10 duration-300 ml-2"/> </h2>
          <div className="mb-6">
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={5000}>
                <img src={endpoints} alt="Register Page" className="w-full h-auto rounded-lg object-cover" />
                <img src={itemGroups} alt="Register Page" className="w-auto  h-auto rounded-lg object-cover" />
            </Slider>
          </div>
          <p className="text-lg">Our team of three developers was tasked with analyzing, documenting, refactoring, and enhancing a legacy system inherited from the previous development team. Our focus was on improving code quality, maintainability, and functionality.</p>
          <br />
          <p className="flex items-center text-lg">
            Technologies: 
            <SiDotnet className="w-12 h-12 hover:text-[#512BD4] transition-colors duration-300 ml-2" />
            <SiSwagger className="w-12 h-12 hover:text-[#85C441] transition-colors duration-300 ml-2" />
            <SiSqlite className="w-12 h-12 hover:text-[#003B57] transition-colors duration-300 ml-2" />
            <FaGitAlt className="w-12 h-12 hover:text-[#f04141] transition-colors duration-300 ml-2" />
          </p>
        </a>
      </div>
    </div>
  );
};

export default Projects;