import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/projects", label: "Projects" },
  { path: "/contact", label: "Contact" }
];

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="sticky top-0 bg-[#333] text-white shadow-lg z-10">
      <div className="flex justify-between items-center p-4">
        <Link to="/" className="text-xl font-bold">My Portfolio</Link>
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map(({ path, label }) => (
              <li key={path} className="relative">
                <Link 
                  to={path} 
                  className={`hover:text-[#CFC7A3] transition duration-300 
                  ${location.pathname === path ? "text-[#CFC7A3] font-semibold" : ""}`}>
                  {label}
                </Link>
                {location.pathname === path && (
                  <div className="absolute left-0 bottom--1 w-full h-[3px] bg-[#CFC7A3] rounded-full"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
