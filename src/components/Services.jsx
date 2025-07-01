import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      icon: "📊",
      description:
        "Expert in data cleaning, preprocessing, and statistical analysis.",
      tools: ["Python", "Pandas", "SQL"],
    },
    {
      title: "Data Visualization",
      icon: "📈",
      description:
        "Creating interactive dashboards and reports for actionable insights.",
      tools: ["Power BI", "Tableau", "Matplotlib"],
    },
    {
      title: "Business Intelligence",
      icon: "💼",
      description: "Implementing ETL processes and data warehousing solutions.",
      tools: ["SQL", "ETL", "Data Warehousing"],
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      description: "Developing ML models for predictive analytics.",
      tools: ["Scikit-learn", "TensorFlow", "PyTorch"],
    },
    {
      title: "Web Development",
      icon: "💻",
      description: "Building responsive and dynamic web applications.",
      tools: ["React", "JavaScript", "Node.js"],
    },
    {
      title: "Python Development",
      icon: "🐍",
      description: "Creating efficient applications using Python.",
      tools: ["Python", "Django", "FastAPI"],
    },
    {
      title: "Statistical Analysis",
      icon: "📉",
      description: "Conducting statistical analysis to uncover patterns.",
      tools: ["R", "Statistical Testing", "Regression"],
    },
    {
      title: "Data Engineering",
      icon: "⚙️",
      description: "Building robust data pipelines and infrastructure.",
      tools: ["Apache Spark", "Airflow", "AWS"],
    },
  ];

  return (
    <motion.section
     
      className="w-full min-h-screen px-4 py-12 bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-8 text-purple-500"
          >
            Stuff I'm Really Good At
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
            className="h-1 bg-pink-500 mb-8"
          ></motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
            {services.map((service, index) => (
              <motion.div
                initial={{ scale: 0, y: 100 }}
                whileInView={{ scale: 1,y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.1,
                  delay: index * 0.01,
                
               
                }}
                className="relative group h-[180px] bg-zinc-950 rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
                key={index}
              >
                <div className="absolute inset-0 w-full h-full">
                  <div className="absolute inset-0 flex flex-col items-center justify-center transform transition-transform duration-300 group-hover:-translate-x-full">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-base font-semibold text-center text-pink-200 px-2">
                      {service.title}
                    </h3>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-r from-purple-700 to-pink-700 transform transition-transform duration-300 translate-x-full group-hover:translate-x-0">
                    <p className="text-sm text-center mb-3 text-white">
                      {service.description}
                    </p>
                    <div className="w-full">
                      <h4 className="font-semibold text-xs mb-2 text-center text-white">
                        Tools:
                      </h4>
                      <ul className="flex flex-wrap justify-center gap-2">
                        {service.tools.map((tool, idx) => (
                          <li
                            key={idx}
                            className="text-xs bg-black text-pink-200 px-2 py-1 rounded-xl whitespace-nowrap"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
