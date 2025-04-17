import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 relative z-10"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-purple-300 text-lg md:text-xl mb-4"
          >
            👋 Hello, I'm
          </motion.p>
          <motion.h1
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 to-white text-transparent bg-clip-text leading-tight"
          >
            Syed Ghulam Mohi Udin
          </motion.h1>
          <motion.h2
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-300 to-white text-transparent bg-clip-text leading-tight"
          >
            Data Scientist & Product Enthusiast
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed mt-6"
          >
            I specialize in turning raw data into actionable insights and
            building innovative products. With expertise in{" "}
            <span className="text-purple-300">Python</span>,{" "}
            <span className="text-purple-300">Machine Learning</span>, and{" "}
            <span className="text-purple-300">Analytics</span>, I help
            businesses make data-driven decisions.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg"
          >
            Currently working on exciting projects that bridge the gap between
            data science and product development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 mt-8"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-500 hover:bg-transparent text-white px-8 py-4 rounded-md transition-all duration-300 border-2 border-purple-500 text-lg font-semibold flex items-center gap-2"
            >
              Let's Connect <span className="text-xl">→</span>
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent text-white px-8 py-4 rounded-md transition-all duration-300 border-2 border-purple-300 text-lg font-semibold flex items-center gap-2"
            >
              View Projects <span className="text-xl">↗</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent opacity-30"></div>
    </div>
  );
};

export default About;