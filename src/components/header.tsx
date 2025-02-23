import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white fixed w-full top-0 left-0 z-10 shadow-lg">
      <div className="logo">
        <h1 className="text-xl font-bold">My Portfolio</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:text-yellow-400 transition duration-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition duration-300">About Me</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-yellow-400 transition duration-300">Projects</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition duration-300">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
