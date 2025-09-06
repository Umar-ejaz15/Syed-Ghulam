"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaBriefcase,
  FaHandshake,
  FaUserTie,
  FaFileContract,
  FaMoneyBillWave,
} from "react-icons/fa";

const Hire = () => {
  return (
    <section className="relative w-full h-auto flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-black via-[#0a0018] to-black">
      {/* Background glow orbs */}
      <div className="absolute -top-20 -left-20 w-[25rem] h-[25rem] bg-purple-600/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[20rem] h-[20rem] bg-blue-500/20 rounded-full blur-[120px]" />

      {/* Marquee Rows */}
      <div className="w-[120%] rotate-2 md:rotate-3">
        <Marquee speed={50} gradient={false}>
          <p className="text-2xl md:text-4xl font-semibold uppercase flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wider">
            hire me <FaBriefcase className="animate-bounce" /> hire me{" "}
            <FaHandshake className="animate-pulse text-blue-300" /> hire me{" "}
            <FaUserTie className="animate-pulse text-purple-300" /> hire me{" "}
            <FaFileContract className="animate-bounce text-pink-400" /> hire me{" "}
            <FaMoneyBillWave className="animate-bounce text-green-400" />
          </p>
          <p className="text-2xl md:text-4xl font-semibold uppercase flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wider">
            hire me <FaBriefcase className="animate-bounce" /> hire me{" "}
            <FaHandshake className="animate-pulse text-blue-300" /> hire me{" "}
            <FaUserTie className="animate-pulse text-purple-300" /> hire me{" "}
            <FaFileContract className="animate-bounce text-pink-400" /> hire me{" "}
            <FaMoneyBillWave className="animate-bounce text-green-400" />
          </p><p className="text-2xl md:text-4xl font-semibold uppercase flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent tracking-wider">
            hire me <FaBriefcase className="animate-bounce" /> hire me{" "}
            <FaHandshake className="animate-pulse text-blue-300" /> hire me{" "}
            <FaUserTie className="animate-pulse text-purple-300" /> hire me{" "}
            <FaFileContract className="animate-bounce text-pink-400" /> hire me{" "}
            <FaMoneyBillWave className="animate-bounce text-green-400" />
          </p>
        </Marquee>
      </div>

      <div className="w-[120%] -rotate-2 md:-rotate-3 mt-6">
        <Marquee direction="right" speed={50} gradient={false}>
          <p className="text-2xl md:text-4xl font-semibold uppercase flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-wider">
            hire me <FaBriefcase className="animate-bounce" /> hire me{" "}
            <FaHandshake className="animate-pulse text-blue-300" /> hire me{" "}
            <FaUserTie className="animate-pulse text-purple-300" /> hire me{" "}
            <FaFileContract className="animate-bounce text-pink-400" /> hire me{" "}
            <FaMoneyBillWave className="animate-bounce text-green-400" />
          </p>
            <p className="text-2xl md:text-4xl font-semibold uppercase flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-wider">
            hire me <FaBriefcase className="animate-bounce" /> hire me{" "}
            <FaHandshake className="animate-pulse text-blue-300" /> hire me{" "}
            <FaUserTie className="animate-pulse text-purple-300" /> hire me{" "}
            <FaFileContract className="animate-bounce text-pink-400" /> hire me{" "}
            <FaMoneyBillWave className="animate-bounce text-green-400" />
          </p>
            <p className="text-2xl md:text-4xl font-semibold uppercase flex items-center gap-6 px-6 py-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent tracking-wider">
            hire me <FaBriefcase className="animate-bounce" /> hire me{" "}
            <FaHandshake className="animate-pulse text-blue-300" /> hire me{" "}
            <FaUserTie className="animate-pulse text-purple-300" /> hire me{" "}
            <FaFileContract className="animate-bounce text-pink-400" /> hire me{" "}
            <FaMoneyBillWave className="animate-bounce text-green-400" />
          </p>
        </Marquee>
        
      </div>

  
    </section>
  );
};

export default Hire;
