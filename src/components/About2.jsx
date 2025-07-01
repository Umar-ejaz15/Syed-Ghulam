import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  const cards = [
    {
      title: "150+",
      subtitle: "Projects",
      description:
        "Successfully completed data science & product development projects, delivering innovative solutions across diverse industries with measurable impact",
      icon: "🎯"
    },
    {
      title: "98%",
      subtitle: "Accuracy",
      description:
        "In machine learning models & predictive analytics, consistently achieving high performance through advanced algorithms and robust validation techniques",
      icon: "📊"
    },
    {
      title: "75+",
      subtitle: "Clients",
      description:
        "Benefiting from data science solutions & product innovations, ranging from startups to Fortune 500 companies, with demonstrated ROI and business growth",
      icon: "🤝"
    },
  ];

  return (
    <div className="min-h-screen bg-black py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <motion.h2
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
       
        className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600"
      >
        Why Work With Me
      </motion.h2>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
        
          className="mb-20 space-y-8"
        >
          {[
            "I bring a unique blend of technical expertise in machine learning, data analytics, and creative problem-solving to transform complex challenges into elegant solutions ✨",
            "With over 5 years of experience and a proven track record in data science, machine learning, and product development, I consistently deliver innovative solutions that drive measurable ROI 📊",
            "My approach combines cutting-edge technologies with deep business insights to create scalable, production-ready solutions that drive real-world impact 💡",
            "Specializing in predictive analytics, computer vision, NLP, and full-stack development, I ensure each project is delivered with the highest standards 🎯"
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{ x: -50 }}
              whileInView={{ x: 0 }}
             
              className="backdrop-blur-lg bg-white/10 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300"
            >
              <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur group-hover:blur-xl transition duration-1000"></div>
              <div className="relative flex flex-col h-full bg-black rounded-2xl p-8">
                <div className="text-6xl mb-6">{card.icon}</div>
                <h3 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-500">
                  {card.title}
                </h3>
                <div className="inline-block mb-6">
                  <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 text-sm font-medium">
                    {card.subtitle}
                  </span>
                </div>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
         
          className="text-center"
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold tracking-wider text-purple-400 transition-all duration-300 ease-in-out hover:text-purple-300">
            <span className="absolute inset-0 w-full h-full rounded-full bg-purple-600/20 blur-lg group-hover:blur-2xl transition-all duration-300"></span>
            <span className="absolute inset-0 w-full h-full border border-purple-500 rounded-full"></span>
            <span className="relative">Let's Discuss Your Project →</span>
          </button>

          <p className="mt-8 text-lg text-purple-300 font-light">
            Bridging Data Science with Product Innovation 🚀
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About2;
