import React from "react";

const Contact = () => {
  return (
    <div className="bg-black w-full py-8 sm:py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Transform Your Data into Actionable Insights
          </h2>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-4">
            Let's dive deep into your data and uncover valuable patterns that
            drive informed business decisions.
          </p>
          <button className="w-full sm:w-auto bg-purple-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold shadow-lg hover:bg-purple-700 hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300 mb-4 sm:mb-6 md:mb-8">
            Book Your Free Data Analysis Consultation →
          </button>{" "}
        </div>
        <div className="text-left mt-4 sm:mt-6 md:mt-8 text-gray-400 text-xs sm:text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Contact;