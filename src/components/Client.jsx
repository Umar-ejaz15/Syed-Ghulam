import React from 'react'

const clientData = [
  {
    quote: "His data analysis skills transformed our messy datasets into actionable insights. The visualizations he created helped us make critical business decisions.",
    client: "Client 1",
    role: "Marketing Director"
  },
  {
    quote: "Exceptional work on our predictive modeling project. The accuracy of his forecasts helped us optimize our inventory management by 40%.",
    client: "Client 2",
    role: "Operations Manager"
  },
  {
    quote: "His statistical analysis revealed customer patterns we never noticed before. Thanks to his insights, we increased customer retention by 25%.",
    client: "Client A",
    role: "E-commerce CEO"
  },
  {
    quote: "The dashboard he created simplified complex data into clear metrics. Our team now makes data-driven decisions with confidence.",
    client: "Client B",
    role: "Product Manager"
  }
]

const Client = () => {
  return (
    <div className="bg-black py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-purple-500 text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {clientData.map((item, index) => (
            <div key={index} className="bg-black h-auto sm:h-[40vh] md:h-[50vh] p-4 sm:p-6 md:p-8 shadow-lg border-2 border-gray-800 hover:border-gray-600 transition-all duration-300">
              <div className="h-full flex flex-col justify-between">
                <p className="text-white text-lg sm:text-xl md:text-2xl italic leading-relaxed">"{item.quote}"</p>
                <div>
                  <p className="text-white font-semibold text-base sm:text-lg">{item.client}</p>
                  <p className="text-gray-400 text-sm sm:text-base">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Client