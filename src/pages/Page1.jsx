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