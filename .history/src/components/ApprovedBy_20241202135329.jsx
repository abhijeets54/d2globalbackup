import React from 'react';

const ApprovedBy = ({ logos }) => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-900">
          Approved By
        </h2>
        <div className="flex flex-row justify-center items-center space-x-6 md:space-x-12 overflow-x-auto">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 flex justify-center items-center"
            >
              <img 
                src={logo} 
                alt={`Approved logo ${index + 1}`} 
                className="max-h-16 md:max-h-24 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApprovedBy;