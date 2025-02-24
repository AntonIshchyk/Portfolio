import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-[#333333] text-white shadow-lg z-10">
      <div className="flex justify-between items-center p-4">
        <div className="logo">
          <Link to="/" className="text-xl font-bold">My Portfolio</Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-[#CFC7A3] transition duration-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#CFC7A3] transition duration-300">About Me</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-[#CFC7A3] transition duration-300">Projects</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#CFC7A3] transition duration-300">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
