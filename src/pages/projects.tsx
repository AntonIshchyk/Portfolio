import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center items-center">
        <div className="flex flex-col justify-between max-w-lg w-full">
          <a
            href="https://github.com/AntonIshchyk/Social-Agenda"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6">Social Agenda</h2>
            <div className="mb-6">
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={5000}
              >
                <div>
                  <img src="image1.jpg" alt="Event 1" className="w-full h-auto rounded-lg" />
                </div>
                <div>
                  <img src="image2.jpg" alt="Event 2" className="w-full h-auto rounded-lg" />
                </div>
                <div>
                  <img src="image3.jpg" alt="Event 3" className="w-full h-auto rounded-lg" />
                </div>
              </Slider>
            </div>
            <p>The website makes it easier for employees to see who is attending Workshops and Team Building activities. It also helps managers announce and manage attendance for these events.</p>
          </a>
        </div>

        <div className="flex flex-col justify-between max-w-lg w-full">
          <a
            href="https://github.com/AntonIshchyk/CargoHub"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2C2C2C] text-[#F5F5F5] rounded-lg shadow-lg p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-semibold mb-6">CargoHub</h2>
            <p>...</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
