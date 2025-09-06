import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-black w-full py-16 sm:py-20 md:py-24 relative overflow-hidden">
      {/* Subtle glow effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-pink-500 bg-clip-text text-transparent drop-shadow-lg mb-6">
          Transform Data into Decisions 🚀
        </h2>

        {/* Subheading */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Unlock hidden patterns and turn your data into actionable strategies
          for business growth and smarter decisions.
        </p>

        {/* CTA Button */}
        <button className="relative group px-8 py-4 rounded-full font-semibold text-lg tracking-wide text-white bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg shadow-purple-600/40 hover:shadow-blue-600/40 transition-all duration-300 transform hover:-translate-y-1">
          Book Free Consultation
          <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
          {/* Glow ring */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur opacity-25 group-hover:opacity-40 transition duration-300"></span>
        </button>

        {/* Footer */}
        <div className="mt-12 text-gray-500 text-sm">
          © {new Date().getFullYear()} Umar Ejaz • All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Contact;
