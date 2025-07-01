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
    <div className="bg-black w-full min-h-[40vh] md:h-[50vh] flex flex-col justify-center items-center relative py-8 md:py-0 overflow-hidden">
      <div className="bg-purple-100 transform rotate-3 md:rotate-6 w-[120%] shadow-lg">
        <Marquee speed={40} gradient={false}>
          <p className="text-xl md:text-3xl font-medium uppercase flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            hire me <FaBriefcase className="animate-bounce" /> hire me <FaHandshake className="hover:scale-110 transition-transform" /> hire me{" "}
            <FaUserTie className="animate-pulse" /> hire me <FaFileContract className="hover:scale-110 transition-transform" /> hire me <FaMoneyBillWave className="animate-bounce" />
            hire me <FaBriefcase className="animate-bounce" /> hire me <FaHandshake className="hover:scale-110 transition-transform" /> hire me{" "}
            <FaUserTie className="animate-pulse" /> hire me <FaFileContract className="hover:scale-110 transition-transform" /> hire me <FaMoneyBillWave className="animate-bounce" />
          </p>
        </Marquee>
      </div>
      <div className="bg-white transform -rotate-3 md:-rotate-6 w-[120%] mt-4 shadow-lg">
        <Marquee direction="right" speed={40} gradient={false}>
          <p className="text-xl md:text-3xl font-medium uppercase flex items-center gap-3 px-5 py-4 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            hire me <FaBriefcase className="animate-bounce" /> hire me <FaHandshake className="hover:scale-110 transition-transform" /> hire me{" "}
            <FaUserTie className="animate-pulse" /> hire me <FaFileContract className="hover:scale-110 transition-transform" /> hire me <FaMoneyBillWave className="animate-bounce" />
            hire me <FaBriefcase className="animate-bounce" /> hire me <FaHandshake className="hover:scale-110 transition-transform" /> hire me{" "}
            <FaUserTie className="animate-pulse" /> hire me <FaFileContract className="hover:scale-110 transition-transform" /> hire me <FaMoneyBillWave className="animate-bounce" />
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default Hire;