import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  const cards = [
    {
      title: "100+",
      subtitle: "Projects",
      description: "Successfully completed data science & product development projects"
    },
    {
      title: "95%",
      subtitle: "Accuracy",
      description: "In machine learning models & predictive analytics"
    },
    {
      title: "50+",
      subtitle: "Clients",
      description: "Benefiting from data science solutions & product innovations"
    }
  ];

  return (
    <div className="bg-black py-8 sm:py-12 md:py-16">
         <motion.h2 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: false }}
           transition={{ duration: 0.6 }}
           className="text-4xl font-bold text-center mb-12 text-purple-500"
         >
           Why Work With Me
         </motion.h2>
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mb-8 sm:mb-12 md:mb-16 space-y-4 sm:space-y-6 md:space-y-8"
        >
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors"
          >
            I bring a unique blend of technical expertise in machine learning, data analytics, and creative problem-solving to transform complex challenges into elegant solutions
            <span className="animate-pulse">✨</span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors"
          >
            With over 5 years of experience and a proven track record in data science, machine learning, and product development, I consistently deliver innovative solutions that drive measurable ROI and exceed client expectations
            <span className="animate-bounce inline-block">📊</span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors"
          >
            My approach combines cutting-edge technologies like TensorFlow, PyTorch, and cloud platforms with deep business insights to create scalable, production-ready solutions that drive real-world impact
            <span className="animate-pulse">💡</span>
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-200 hover:text-purple-300 transition-colors"
          >
            Specializing in predictive analytics, computer vision, NLP, and full-stack development, I ensure each project is delivered with the highest standards of code quality and documentation
            <span className="animate-pulse">🎯</span>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
          {cards.map((card, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="transform w-full  md:h-[60vh] hover:scale-105 transition-transform duration-500 border-4 border-purple-500 p-8 sm:p-10 md:p-12 rounded-xl bg-gradient-to-br from-purple-900/40 to-purple-800/30 backdrop-blur-xl shadow-2xl hover:shadow-purple-500/60 flex flex-col justify-between items-center"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-8xl font-extrabold mb-4 sm:mb-6 text-purple-300 flex items-center gap-3">
                  {card.title} 
                  <span className="text-sm sm:text-md font-semibold bg-purple-500/20 px-3 py-1 rounded-full">
                    {card.subtitle}
                  </span>
                </h3>
                <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <button className="w-full sm:w-auto bg-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold shadow-lg hover:bg-purple-700 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 mb-6 sm:mb-8">
            Let's Discuss Your Project →
          </button>

          <p className="text-base sm:text-lg text-purple-300 font-light italic">
            Bridging Data Science with Product Innovation 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About2;