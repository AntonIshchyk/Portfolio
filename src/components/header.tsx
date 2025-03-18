import React, { useCallback, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Me" },
  { path: "/projects", label: "Projects" },
];

const Header: React.FC = () => {
  const location = useLocation();
  const [prefetchedPages, setPrefetchedPages] = useState<Set<string>>(new Set());

  const prefetchPage = useCallback((path: string) => {
    if (!prefetchedPages.has(path)) {
      switch (path) {
        case '/':
          import('../pages/home');
          break;
        case '/about':
          import('../pages/about');
          break;
        case '/projects':
          import('../pages/projects');
          break;
        default:
          break;
      }
      setPrefetchedPages((prev) => new Set(prev.add(path)));
    }
  }, [prefetchedPages]);

  return (
    <header className="sticky top-0 bg-[#333] text-white shadow-lg z-10">
      <div className="flex justify-center items-center p-4">
        <nav>
          <ul className="flex space-x-6">
            {navLinks.map(({ path, label }) => {
              const isActive = location.pathname === path;
              return (
                <li key={path} className="relative">
                  <Link
                    to={path}
                    onMouseEnter={() => prefetchPage(path)}
                    className={`hover:text-[#CFC7A3] text-lg transition duration-300 ${isActive ? "text-[#CFC7A3] font-semibold" : ""}`}
                  >
                    {label}
                  </Link>
                  {isActive && (
                    <div className="absolute left-0 bottom-[-1px] w-full h-[3px] bg-[#CFC7A3] rounded-full"></div>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
