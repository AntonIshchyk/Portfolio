import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import registerImage from "../assets/register.jpg";
import friendsImage from "../assets/friends.jpg";
import friendImage from "../assets/friend.jpg";
import { FaGithub } from "react-icons/fa"

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <a
          href="https://github.com/AntonIshchyk/Social-Agenda"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold mb-6">Social Agenda</h2>
          <div className="mb-6">
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1} autoplay autoplaySpeed={5000}>
              <div>
                <img src={registerImage} alt="Register Page" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <img src={friendsImage} alt="Friends Page" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <img src={friendImage} alt="Friend Attending Event" className="w-full h-auto rounded-lg" />
              </div>
            </Slider>
          </div>
          <p>The website makes it easier for employees to see who is attending Workshops and Team Building activities. It also helps managers announce and manage attendance for these events.</p>
          <br />
          <p>Used Technologies:</p>
        </a>

        <a
          href="https://github.com/AntonIshchyk/CargoHub"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <h2 className="text-3xl font-semibold mb-6">CargoHub</h2>
          <p>Our team of three developers was tasked with analyzing, documenting, refactoring, and enhancing a legacy system inherited from the previous development team. Our focus was on improving code quality, maintainability, and functionality.</p>
          <br />
          <p>
            Used Technologies: <FaGithub />
          </p>
        </a>
      </div>
    </div>
  );
};
export default Projects;