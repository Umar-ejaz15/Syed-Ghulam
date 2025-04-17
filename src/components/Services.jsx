import React from 'react'
import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      icon: "📊",
      description: "Expert in data cleaning, preprocessing, and advanced statistical analysis to derive meaningful insights from complex datasets.",
      tools: ["Python", "Pandas", "NumPy", "SciPy", "SQL"]
    },
    {
      title: "Data Visualization",
      icon: "📈",
      description: "Creating compelling visual stories through interactive dashboards and reports that transform raw data into actionable insights.",
      tools: ["Power BI", "Tableau", "Matplotlib", "Seaborn", "Plotly"]
    },
    {
      title: "Business Intelligence",
      icon: "💼",
      description: "Implementing ETL processes and data warehousing solutions to drive data-driven decision making.",
      tools: ["SQL", "ETL", "Data Warehousing", "Advanced Excel", "Data Studio"]
    },
    {
      title: "Machine Learning",
      icon: "🤖",
      description: "Developing and implementing machine learning models for predictive analytics and pattern recognition.",
      tools: ["Scikit-learn", "TensorFlow", "PyTorch", "Jupyter", "Google Colab"]
    },
    {
      title: "Web Development",
      icon: "💻",
      description: "Building responsive and dynamic web applications using modern frameworks and best practices.",
      tools: ["React", "JavaScript", "HTML", "CSS", "Node.js"]
    },
    {
      title: "Python Development",
      icon: "🐍",
      description: "Creating efficient and scalable applications using Python's extensive ecosystem.",
      tools: ["Python", "Django", "Flask", "FastAPI", "REST APIs"]
    },
    {
      title: "Statistical Analysis",
      icon: "📉",
      description: "Conducting thorough statistical analysis to uncover patterns and relationships in data.",
      tools: ["R", "SPSS", "Statistical Testing", "Regression Analysis"]
    },
    {
      title: "Data Engineering",
      icon: "⚙️",
      description: "Building robust data pipelines and infrastructure for efficient data processing and analysis.",
      tools: ["Apache Spark", "Airflow", "Docker", "AWS", "GCP"]
    }
  ]


  return (
    <div className="mx-auto px-4 py-16 bg-black flex justify-center">
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-3xl sm:text-2xl font-bold text-center mb-12 text-purple-500"
        >
          Stuff I'm Really Good At
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 place-items-center">
          {services.map((service, index) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group w-full max-w-[320px] h-[320px] sm:w-[260px] sm:h-[260px] md:w-[280px] md:h-[280px] lg:w-[280px] lg:h-[280px] bg-purple-100 rounded-full shadow-lg overflow-hidden cursor-pointer transform transition-transform duration-500 hover:scale-105" 
              key={index}
            >
              <div className="absolute inset-0">
                <div className="absolute inset-0 flex flex-col items-center justify-center transform transition-transform duration-500 group-hover:-translate-x-full">
                  <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-center text-black px-4">{service.title}</h3>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 bg-purple-800 text-white transform transition-transform duration-500 translate-x-full group-hover:translate-x-0">
                  <p className="text-xs sm:text-sm text-center mb-2 sm:mb-4">{service.description}</p>
                  <div className="w-full">
                    <h4 className="font-semibold text-sm mb-2">Tools:</h4>
                    <ul className="flex flex-wrap justify-center gap-1 sm:gap-2">
                      {service.tools.map((tool, idx) => (
                        <li key={idx} className="text-[10px] sm:text-xs bg-purple-950 px-2 py-1 rounded-xl">{tool}</li>
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
  )
}

export default Services