"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaUserAstronaut, FaRocket, FaFolderOpen } from "react-icons/fa";

const About = () => {
  return (
    <section className="relative w-full p-5 min-h-screen bg-[#050510] text-white flex justify-center items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[150%] h-[150%] bg-gradient-to-r from-purple-700 via-blue-600 to-purple-800 opacity-30 blur-3xl animate-[spin_25s_linear_infinite]"></div>
      </div>

      <div className="max-w-7xl mt-30 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="w-full lg:w-2/3 space-y-6"
        >
          <div className="flex items-center gap-2 text-blue-400 text-lg sm:text-xl font-light">
            <FaUserAstronaut className="text-blue-400" />
            <span>Hey, I’m</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Syed Ghulam Mohi Udin
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-purple-300">
            Data Scientist & Product Innovator
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-xl leading-relaxed">
            I craft{" "}
            <span className="text-blue-400">intelligent systems</span> by
            blending <span className="text-purple-300">data science</span>,{" "}
            <span className="text-purple-300">machine learning</span>, and{" "}
            <span className="text-purple-300">product strategy</span> to unlock
            business growth and innovation.
          </p>

          <p className="text-gray-400 text-lg sm:text-xl">
            Focused on <span className="text-blue-300">AI</span> solutions &{" "}
            <span className="text-purple-300">next-gen products</span> that
            deliver measurable impact.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 rounded-xl text-lg font-medium overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FaRocket className="text-white" />
                Let’s Connect
              </span>
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-8 py-3 rounded-xl text-lg font-medium overflow-hidden border border-blue-400/40 group"
            >
              <span className="absolute inset-0 bg-white/5 backdrop-blur-md group-hover:bg-white/10 transition-all duration-300"></span>
              <span className="relative z-10 flex items-center justify-center gap-2 text-blue-200">
                <FaFolderOpen className="text-blue-300" />
                View Projects
              </span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center items-center"
        >
          <motion.div
            transition={{ type: "spring", stiffness: 200 }}
            className="relative"
          >
            {/* Glow ring behind image */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 blur-3xl opacity-40 animate-pulse"></div>
            <img
              src="/pfp.png"
              alt="Profile"
              className="relative w-full max-w-[380px] sm:max-w-[460px] md:max-w-[520px] rounded-2xl border border-white/10 shadow-[0_0_60px_rgba(59,130,246,0.4)]"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
