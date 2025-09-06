"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaChartBar,
  FaChartLine,
  FaBriefcase,
  FaRobot,
  FaLaptopCode,
  FaPython,
  FaProjectDiagram,
  FaDatabase,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      icon: <FaChartBar className="text-purple-400 text-5xl mb-4" />,
      description: "Cleaning, preprocessing & statistical analysis for insights.",
      tools: ["Python", "Pandas", "SQL"],
    },
    {
      title: "Data Visualization",
      icon: <FaChartLine className="text-blue-400 text-5xl mb-4" />,
      description: "Interactive dashboards & reports for decision making.",
      tools: ["Power BI", "Tableau", "Matplotlib"],
    },
    {
      title: "Business Intelligence",
      icon: <FaBriefcase className="text-purple-400 text-5xl mb-4" />,
      description: "ETL workflows & data warehousing for smarter strategies.",
      tools: ["SQL", "ETL", "Data Warehousing"],
    },
    {
      title: "Machine Learning",
      icon: <FaRobot className="text-blue-400 text-5xl mb-4" />,
      description: "Predictive analytics & AI solutions tailored to business.",
      tools: ["Scikit-learn", "TensorFlow", "PyTorch"],
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode className="text-purple-400 text-5xl mb-4" />,
      description: "Responsive, scalable, and modern web applications.",
      tools: ["React", "JavaScript", "Node.js"],
    },
    {
      title: "Python Development",
      icon: <FaPython className="text-blue-400 text-5xl mb-4" />,
      description: "Efficient backends & automation with Python frameworks.",
      tools: ["Django", "FastAPI", "Flask"],
    },
    {
      title: "Statistical Analysis",
      icon: <FaProjectDiagram className="text-purple-400 text-5xl mb-4" />,
      description: "Hypothesis testing, regression & data-driven strategies.",
      tools: ["R", "Stats Models", "SPSS"],
    },
    {
      title: "Data Engineering",
      icon: <FaDatabase className="text-blue-400 text-5xl mb-4" />,
      description: "Pipelines, big data infra & scalable architectures.",
      tools: ["Apache Spark", "Airflow", "AWS"],
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-black via-[#0a0018] to-black py-24 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-32 -left-20 w-[25rem] h-[25rem] bg-purple-700/30 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[25rem] h-[25rem] bg-blue-600/30 rounded-full blur-[160px]" />

      {/* Section Title */}
      <motion.h2
        initial={{  y: 30 }}
        whileInView={{  y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        Stuff I’m Really Good At
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{  y: 40 }}
            whileInView={{  y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-black/60 shadow-lg shadow-purple-900/30 hover:shadow-purple-600/50 transition-all duration-500"
          >
            {/* Gradient Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition duration-500" />

            <div className="relative z-10 flex flex-col items-center p-8 h-full text-center">
              {service.icon}
              <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {service.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-auto">
                {service.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 rounded-full bg-purple-600/20 text-purple-200 border border-purple-500/30"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
