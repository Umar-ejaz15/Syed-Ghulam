"use client";
import React from "react";
import { motion } from "framer-motion";

const About2 = () => {
  const cards = [
    {
      title: "150+",
      subtitle: "Projects",
      description:
        "Built impactful solutions across web, AI & product development — delivering real results 🚀",
      icon: "🎯",
    },
    {
      title: "98%",
      subtitle: "Accuracy",
      description:
        "Advanced ML models & analytics pipelines — consistently high performance 📊",
      icon: "⚡",
    },
    {
      title: "75+",
      subtitle: "Clients",
      description:
        "From startups to enterprises — scaling growth & driving innovation 🌍",
      icon: "🤝",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-[#0a0018] to-black py-24 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-purple-700/30 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute top-40 right-0 w-[25rem] h-[25rem] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-pink-600/10 rounded-full blur-[200px]" />

      {/* Title */}
      <motion.h2
        initial={{  y: 30 }}
        whileInView={{  y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative text-4xl sm:text-6xl font-extrabold text-center mb-20 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
      >
        Why Work With Me
      </motion.h2>

      <div className="container mx-auto px-6 relative z-10">
        {/* Bullet Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            "I blend technical depth with creative problem-solving to turn challenges into clean solutions ✨",
            "5+ years delivering data-driven products with measurable ROI 📊",
            "Specialized in predictive analytics, NLP, computer vision & full-stack engineering 💡",
            "Always balancing cutting-edge tech with real-world business impact 🎯",
          ].map((text, index) => (
            <motion.div
              key={index}
              initial={{  x: -40 }}
              whileInView={{  x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="relative backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-purple-500/20 hover:border-blue-500/40 hover:bg-white/10 transition-all duration-500"
            >
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{  y: 50 }}
              whileInView={{  y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-blue-600/40 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition duration-500" />
              <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-10 flex flex-col h-full border border-white/10 group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-purple-900/20">
                <div className="text-6xl mb-6">{card.icon}</div>
                <h3 className="text-4xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  {card.title}
                </h3>
                <span className="inline-block px-4 py-1 mb-6 rounded-full bg-purple-600/20 text-purple-200 text-sm font-medium">
                  {card.subtitle}
                </span>
                <p className="text-gray-300 leading-relaxed flex-grow">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-xl shadow-purple-600/40 hover:shadow-blue-600/40 transition-all duration-300"
          >
            Let’s Build Something Amazing →  
          </motion.a>
          <p className="mt-6 text-lg text-blue-300 font-light">
            Turning ideas into scalable products ⚡
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About2;
