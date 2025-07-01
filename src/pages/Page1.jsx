import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import About2 from "../components/About2";
import Hire from "../components/Hire";
import Services from "../components/Services";
import Project from "../components/Project";
import Work from "../components/Work";
import Client from "../components/Client";
import Contact from "../components/Contact";
import LocomotiveScroll from "locomotive-scroll";

const Page1 = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="min-h-screen relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 z-20"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
      <Navbar />
      <About />
      <Services />
      <Hire />
      <About2 />
      <Project />
      {/* <Work /> */}
      <Hire />
      {/* <Client /> */}
      <Contact />
    </div>
  );
};

export default Page1;