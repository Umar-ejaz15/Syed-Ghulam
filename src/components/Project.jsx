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
      className="h-auto w-full px-4 md:px-8 lg:px-16 xl:px-24 py-8 md:py-16 bg-black"
      id="projects"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text">
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
          className="mySwiper w-full max-w-[1400px]"
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 30
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 40
            }
          }}
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[280px] sm:!w-[340px] md:!w-[420px] lg:!w-[520px] xl:!w-[600px]"
            >
              <div
                className="bg-black hover:bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm transition-all duration-300 text-white rounded-xl shadow-lg p-4 md:p-6 h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] flex flex-col cursor-pointer border border-purple-500/20 hover:scale-[1.02]"
                onClick={() => handleProjectClick(project)}
              >
                <div className="overflow-hidden rounded-lg h-[180px] sm:h-[220px] md:h-[260px] lg:h-[300px] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col flex-grow mt-4 md:mt-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text mb-2 md:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 md:px-3 md:py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-300 rounded-md text-xs sm:text-sm md:text-base font-medium hover:from-purple-400 hover:to-pink-400 hover:text-black transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md text-center text-sm md:text-base hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 hover:shadow-lg"
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
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-4 md:p-8">
          <div className="relative max-w-5xl w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-10 md:-top-14 right-0 text-white text-3xl md:text-5xl hover:text-gradient-to-r hover:from-purple-400 hover:to-pink-400 focus:outline-none transition-colors duration-200"
            >
              ×
            </button>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto min-h-[200px] sm:min-h-[300px] md:min-h-[400px] lg:min-h-[500px] object-cover rounded-xl shadow-2xl border border-purple-500/20 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-200 text-sm md:text-base lg:text-lg">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Project;