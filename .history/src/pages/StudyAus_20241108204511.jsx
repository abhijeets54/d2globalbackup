import React from 'react';
import { motion } from 'framer-motion';
import 
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import OurAssociates from '../components/OurAssociates';

const points = [
  { title: 'Globally Recognized Universities', description: 'Australia has world-renowned universities and offers internationally accepted qualifications.' },
  { title: 'Lower Studying Cost', description: 'The country has comparably lower tuition costs than many other destinations.' },
  { title: 'Advanced Research', description: 'Emphasis on scientific research and technical resources creates a great academic and working ground for international researchers.' },
  { title: 'Multicultural Environment', description: 'People from different ethnicities join Australian universities and workforce, creating a diverse and robust culture.' },
  { title: 'Similar Education System', description: 'Both India and Australia broadly follow the British system of education, making it easy to get admission without credential evaluation.' },
  { title: 'Work Opportunities', description: 'International students in Australia are allowed to work part-time for up to 48 hours a fortnight.' },
];

// Variants for staggered fade-in effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const StudyAus = () => {
  const handleMapClick = () => {
    // Open the WorldMapContact form with Australia pre-selected
    <WorldMapContact selectedCountry="Australia" />;
  };

  return (
    <>
      <div className="study-aus-container bg-white pt-16">
        {/* Top section */}
        <div className="bg-white p-4 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between">
          {/* Left text section */}
          <div className="lg:w-1/2 text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center mb-4 lg:mb-6">
              <img src="/aflag.png" alt="Australia Flag" className="w-6 h-6 md:w-8 md:h-8 mr-2" /> 
              Study in Australia
            </h1>
            <p className="mb-4 text-sm md:text-lg">
              Know everything about universities, costs, scholarships, and the admission process. Australian education focuses on practical aspects and research, making it one of the top five destinations for international students. It also houses the Group of Eight Universities, equivalent to Ivy League institutions.
            </p>
            {/* Other content omitted for brevity */}
          </div>
        </div>

        {/* Why study in Australia */}
        <div className="bg-blue-950 text-yellow-400 p-4 md:p-8 lg:p-10">
          {/* Content omitted for brevity */}
        </div>

        {/* Additional info */}
        <div className="bg-gray-100 p-4 md:p-8 lg:p-10 text-left">
          {/* Content omitted for brevity */}
        </div>

        {/* Choose Your Destination Section */}
        <div 
          className="bg-cover bg-center p-8 md:p-12 lg:p-16 text-white relative" 
          style={{
            backgroundImage: "url('/register/form1.webp')",
            backgroundSize: "cover",
            position: "relative",
          }}
        >
          {/* Black overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between">
            {/* Left text section */}
            <div className="lg:w-1/2 mb-6 lg:mb-0 text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Choose Your Destination</h2>
              <p className="text-sm md:text-lg">
                Discover the top locations for your educational journey in Australia. Explore diverse cities with thriving student communities and excellent academic institutions.
              </p>
            </div>

            {/* Right image map section with onClick */}
            <div
              className="lg:w-1/2 flex justify-center cursor-pointer transform scale-125" 
              onClick={handleMapClick}
            >
              <img src="/maps/ausmap.png" alt="Map of Australia" className="w-full max-w-lg lg:max-w-xl rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* Render the WorldMapContact component when the map is clicked */}
      <WorldMapContact selectedCountry="Australia" />

      <OurAssociates />
    </>
  );
};

export default StudyAus;