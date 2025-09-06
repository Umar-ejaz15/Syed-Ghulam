"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
  ];

  return (
    <div className="fixed top-0 w-full z-50">
      <nav className="backdrop-blur-xl bg-[#0a0a0f]/80 border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            dev
          </motion.a>

          {/* Menu Button (Mobile) */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-10 items-center font-medium">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                className="text-white/70 hover:text-white transition-colors relative group cursor-pointer"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={link.href}>{link.name}</a>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.li>
            ))}

            {/* Call to Action */}
            <motion.a
              href="#contact"
              className="relative bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 text-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.a>
          </ul>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden flex flex-col gap-6 px-6 py-8 bg-[#0a0a0f]/95 shadow-lg border-t border-white/10"
            >
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  className="text-white/80 hover:text-white transition-colors relative group cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a href={link.href} onClick={() => setIsOpen(false)}>
                    {link.name}
                  </a>
                  <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </motion.li>
              ))}

              {/* CTA in Mobile */}
              <motion.a
                href="#contact"
                className="mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-medium shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 text-lg flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};

export default Navbar;
