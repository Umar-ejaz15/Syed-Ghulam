import { motion } from "motion/react";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar bg-black text-white border-b-[.05px] border-gray-800 fixed w-full z-50">
      <nav className="md:container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <ul
            className={`lg:flex gap-4 xl:gap-10 items-center font-medium absolute lg:relative top-16 lg:top-0 left-0 w-full lg:w-auto bg-black lg:bg-transparent z-40
            ${
              isOpen ? "flex flex-col lg:flex-row px-4 lg:px-0" : "hidden"
            } transition-all duration-300 py-4 lg:py-0 shadow-lg lg:shadow-none`}
          >
            <li className="hover:text-gray-300 transition-colors duration-300 py-2 lg:py-0 text-center lg:text-left">
              <a href="#home" onClick={() => setIsOpen(false)}>
                Home
              </a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300 py-2 lg:py-0 text-center lg:text-left">
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>
            </li>

            <li className="hover:text-gray-300 transition-colors duration-300 py-2 lg:py-0 text-center lg:text-left">
              <a href="#services" onClick={() => setIsOpen(false)}>
                Services
              </a>
            </li>
            <li className="hover:text-gray-300 transition-colors duration-300 py-2 lg:py-0 text-center lg:text-left">
              <a href="#Projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>
            </li>
          </ul>

            <motion.a
              href="#contact"
              className="bg-purple-500 hover:bg-transparent text-white px-6 py-3 rounded-md transition-all duration-300 hover:border hover:border-purple-500 text-lg sm:text-xl font-medium flex items-center justify-center gap-2"
            >
              Hire Me <span className="text-lg">→</span>
            </motion.a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
