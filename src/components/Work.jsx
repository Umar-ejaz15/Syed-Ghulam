import React from "react";

const data = [
  {
    title: "Email Alchemist | TheHexaTown",
    points: [
      "Developed email strategies for solopreneurs, achieving a 25% avg. open rate (vs. industry 18%)",
      "Built campaigns that made spam filters cry (happy tears).",
    ],
  },
  {
    title: "Email Wizard | TalkAgent",
    points: [
      "Turned 'meh' subject lines into click magnets.",
      "Automated workflows so smooth, they'd make Tony Stark jealous.",
    ],
  },
  {
    title: "Lead Gen Manager | TheHexaTown",
    points: [
      "Taught SDR teams to stop sounding like chatbots.",
      "Built campaigns that made spam filters cry (happy tears).",
    ],
  },
  {
    title: "Marketing Manager | Amoxt Solutions",
    points: [
      "Drove 100s of signups via viral hooks & strategic blog boosts.",
      "Turned passive scrollers into high-value website traffic with sticky social funnels.",
    ],
  },
  {
    title: "Lead Gen Strategist | TheHexaTown",
    points: [
      "Designed outreach campaigns for 15+ clients across tech, healthcare, and e-commerce.",
      "Increased average client ROI by 40% through CRM automation and A/B testing",
    ],
  },
];

const Work = () => {
  return (
    <div className="min-h-screen m-auto p-4 py-16 bg-black text-white">
      <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-8 md:mb-12 tracking-tight">
        Work Experience
      </h1>
      <div className="mx-auto container px-4 md:px-6">
        <div className="grid gap-4 md:gap-6">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="backdrop-blur-sm rounded-xl p-4 md:p-8 border border-pink-500/20 
                        shadow-[0_0_15px_rgba(236,72,153,0.1)] hover:shadow-[0_0_30px_rgba(236,72,153,0.2)] 
                        transition-all duration-300 hover:scale-[1.02] hover:bg-gradient-to-r from-purple-800/90 to-pink-800/90"
            >
              <h3 className="text-xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {item.title}
              </h3>
              <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4">
                {item.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-base md:text-lg text-gray-300"
                  >
                    <span className="text-pink-400 mt-1">▹</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <button className="bg-gradient-to-r from-purple-500 to-pink-500 mt-8 md:mt-10 mx-auto text-center flex justify-center hover:bg-transparent text-black hover:text-white px-4 md:px-6 py-2 rounded-md transition-all duration-300 border-2 border-pink-500">
          <a
            href="#hire"
            className="font-medium inline-block transform hover:translate-x-1 transition-transform duration-300 text-sm md:text-base"
          >
            Download CV
            <span className="inline-block transform hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </a>
        </button>
      </div>
    </div>
  );
};

export default Work;