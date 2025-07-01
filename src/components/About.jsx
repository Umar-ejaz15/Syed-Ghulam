import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full min-h-screen  bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mt-20 md:mt-10 h-screen mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-center gap-4">
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-purple-400 text-lg sm:text-xl"
            >
              👋 Hello, I'm
            </motion.p>
            <motion.h1
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight mb-2"
            >
              Syed Ghulam Mohi Udin
            </motion.h1>
            <motion.h2
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text leading-tight mb-3"
            >
              Data Scientist & Product Enthusiast
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-xl text-purple-200 max-w-2xl leading-relaxed mb-3"
            >
              I specialize in turning raw data into actionable insights and
              building innovative products. With expertise in{" "}
              <span className="text-pink-400">Python</span>,{" "}
              <span className="text-pink-400">Machine Learning</span>, and{" "}
              <span className="text-pink-400">Analytics</span>, I help
              businesses make data-driven decisions.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-purple-300 text-lg sm:text-xl mb-4"
            >
              Currently working on exciting projects that bridge the gap between
              data science and product development.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-pink-500 hover:bg-transparent text-white px-6 py-3 rounded-md transition-all duration-300 border-2 border-pink-500 text-lg sm:text-xl font-medium flex items-center justify-center gap-2"
              >
                Let's Connect <span className="text-lg">→</span>
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent text-purple-400 px-6 py-3 rounded-md transition-all duration-300 border-2 border-purple-400 text-lg sm:text-xl font-medium flex items-center justify-center gap-2"
              >
                View Projects <span className="text-lg">↗</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center mt-6 lg:mt-0">
          <img 
            className="w-full h-auto max-w-[400px] sm:max-w-[500px] md:max-w-[600px] rounded-lg shadow-2xl object-cover" 
            src="/pfp.png" 
            alt="Profile" 
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
