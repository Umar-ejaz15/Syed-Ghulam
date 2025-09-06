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
      description: "ML model predicting Pakistan Super League match outcomes.",
      image: "/psl.jpg",
      link: "https://github.com/imgmdin/PSL-Win-Prediction/blob/main/Psl.ipynb",
      tags: ["Python", "ML", "Sports Analytics"],
    },
    {
      id: 2,
      title: "Language Detector",
      description: "NLP system detecting multiple languages with high accuracy.",
      image: "/language.jpg",
      link: "https://github.com/imgmdin/Language-Detector/blob/main/language_detection.ipynb",
      tags: ["Python", "NLP", "Text Processing"],
    },
    {
      id: 3,
      title: "Netflix Content Analysis",
      description: "Data viz on Netflix trends, genres & regional content.",
      image: "/netflix.jpg",
      link: "https://github.com/imgmdin/Netflix-Movie-Analysis/blob/main/Netflix%20Movies%20Analysis.ipynb",
      tags: ["Python", "Pandas", "Visualization"],
    },
    {
      id: 4,
      title: "Apple Market Analysis",
      description: "Analysis of Apple’s stock, product lifecycle & market share.",
      image: "/Apple.jpg",
      link: "https://github.com/imgmdin/Apple-Data-Analysis/blob/main/Iphones%20Sales.ipynb",
      tags: ["Python", "Finance", "Market Research"],
    },
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  return (
    <section
      className="relative h-auto w-full px-4 md:px-8 lg:px-16 xl:px-24 py-16 overflow-hidden"
      id="projects"
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-[150px] animate-ping"></div>
      </div>

      {/* Title */}
      <h2 className="relative z-10 text-3xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text drop-shadow-lg">
        🚀 My Projects
      </h2>

      {/* Swiper */}
      <div className="relative z-10 flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 8,
            stretch: 0,
            depth: 120,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper w-full max-w-[1100px]"
        >
          {projects.map((project) => (
            <SwiperSlide
              key={project.id}
              className="!w-[260px] sm:!w-[320px] md:!w-[380px] lg:!w-[420px]"
            >
              <div
                className="bg-gradient-to-br from-purple-900/60 to-blue-900/60 backdrop-blur-md border border-blue-500/20 rounded-2xl shadow-lg p-5 h-[380px] sm:h-[400px] md:h-[440px] flex flex-col hover:scale-[1.04] transition-all duration-300 cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                {/* Project Image */}
                <div className="overflow-hidden rounded-xl h-[160px] sm:h-[180px] md:h-[200px] w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow mt-4">
                  <h3 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-snug mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View button */}
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-md text-center text-sm font-semibold shadow-lg shadow-purple-600/40 hover:shadow-blue-600/40 hover:scale-105 transition-transform"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm flex items-center justify-center z-50 p-6">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-10 right-0 text-white text-5xl hover:text-blue-400 transition-colors"
            >
              ×
            </button>
            <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 shadow-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto min-h-[260px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/95 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-300 text-sm">
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
