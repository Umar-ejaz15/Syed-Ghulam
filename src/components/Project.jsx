import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  EffectCoverflow,
  Navigation,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "PSL Win Prediction",
      description:
        "Machine learning model to predict Pakistan Super League cricket match outcomes using historical data, team statistics, and player performance metrics.",
      image: "/psl.jpg",
      link: "https://github.com/imgmdin/PSL-Win-Prediction/blob/main/Psl.ipynb",
      tags: ["Python", "Machine Learning", "Data Analysis", "Sports Analytics"],
    },
    {
      id: 2,
      title: "Language Detector",
      description:
        "Developed an automated language detection system using Natural Language Processing and machine learning techniques to identify multiple languages with high accuracy.",
      image: "/language.jpg",
      link: "https://github.com/imgmdin/Language-Detector/blob/main/language_detection.ipynb",
      tags: ["Python", "NLP", "Machine Learning", "Text Processing"],
    },
    {
      id: 3,
      title: "Netflix Content Analysis",
      description:
        "Comprehensive analysis of Netflix's content library examining trends in content production, genre distribution, and regional preferences using data visualization techniques.",
      image: "/netflix.jpg",
      link: "https://github.com/imgmdin/Netflix-Movie-Analysis/blob/main/Netflix%20Movies%20Analysis.ipynb",
      tags: ["Python", "Pandas", "Data Visualization", "Statistical Analysis"],
    },
    {
      id: 4,
      title: "Apple Market Analysis",
      description:
        "In-depth analysis of Apple's market performance, includinag stock trends, product lifecycle analysis, and market share evaluation across different regions.",
      image: "/Apple.jpg",
      link: "https://github.com/imgmdin/Apple-Data-Analysis/blob/main/Iphones%20Sales.ipynb",
      tags: ["Python", "Data Analysis", "Financial Analysis", "Market Research"],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section
      className="w-full h-auto px-2 sm:px-4 md:px-8 lg:px-20 py-4 sm:py-8 lg:py-16 bg-black"
      id="projects"
    >
      <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold text-center mb-12 text-purple-500">
        My Projects
      </h2>
      <div className="flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={1}
          navigation={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[250px] sm:!w-[320px] md:!w-[400px] lg:!w-[500px]"
            >
              <div
                className="bg-black hover:bg-purple-900 transition-all duration-300 text-white rounded-xl shadow-lg p-3 sm:p-4 h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex flex-col cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="overflow-hidden rounded-lg h-[200px] sm:h-[250px] md:h-[300px] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-grow mt-2 sm:mt-4">
                  <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <p className="text-white text-sm sm:text-md md:text-lg lg:text-xl leading-relaxed mb-2 sm:mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-black text-purple-400 rounded-md text-xs sm:text-sm md:text-md font-medium hover:bg-purple-400 hover:text-black transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md text-center hover:bg-purple-600 transition-colors duration-200"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-8 sm:-top-12 right-0 text-white text-3xl sm:text-4xl hover:text-purple-400 focus:outline-none"
            >
              ×
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-auto object-center object-cover sm:h-[400px] md:h-[500px] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;