import React from 'react';

const ApprovedBy = ({ logos }) => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Approved By
        </h2>
        <div className="flex flex-wrap justify-center items-center space-x-6 md:space-x-12 space-y-6 md:space-y-0">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="w-1/2 md:w-1/4 flex justify-center items-center"
            >
              <img 
                src={logo} 
                alt={`Approved logo ${index + 1}`} 
                className="max-h-16 md:max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovedBy;