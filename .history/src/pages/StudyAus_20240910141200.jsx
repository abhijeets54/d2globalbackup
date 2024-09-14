import React from 'react';
import { motion } from 'framer-motion';
import Register from '../components/Register';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';

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
  return (
    <>
    <div className="study-aus-container">
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
          <div className="flex justify-start space-x-6 md:space-x-10 text-center">
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">180 +</h3>
              <p className="text-sm md:text-base">Academic Institutions</p>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">13000 +</h3>
              <p className="text-sm md:text-base">Programs</p>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="/aus1.webp" alt="Study in Australia" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover" />
        </div>
      </div>

      {/* Why study in Australia */}
      <div className="bg-blue-950 text-white p-4 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Study in Australia</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-10">The land of leading academic institutions & pioneering innovations</h3>

        {/* Sequential fade-in effect for each point */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded-md shadow-lg text-left"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-base md:text-lg font-semibold mb-2">{point.title}</h4>
              <p className="text-gray-400 text-sm md:text-base">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional info */}
      <div className="bg-gray-100 p-4 md:p-8 lg:p-10 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Additional Information</h2>

        <h3 className="text-xl md:text-2xl font-semibold mb-2">Student Perks</h3>
        <p className="text-sm md:text-lg mb-4">
          Under the proposed arrangement, students can work up to 40 hours per fortnight. This benefits international students by offering flexibility in balancing work and studies.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-2">Less Funds Required for Visa</h3>
        <p className="text-sm md:text-lg mb-4">
          Students pursuing Bachelor’s and Master’s degrees are now required to show funds only for 12 months, compared to the previous 2 years.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-2">Scholarship Options</h3>
        <p className="text-sm md:text-lg mb-4">
          Australia offers numerous scholarships, student bursaries, and other support programs to help international students transition smoothly.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-2">Top Universities in Australia</h3>
        <ul className="list-disc list-inside text-sm md:text-lg mb-4">
          <li>CQUniversity Australia</li>
          <li>Griffith University</li>
          <li>Queensland University of Technology</li>
          <li>University of Queensland</li>
          <li>University of Southern Queensland</li>
          <li>Bond University</li>
          <li>Southern Cross University</li>
          <li>Charles Sturt University</li>
          <li>University of New South Wales</li>
          <li>University of Sydney</li>
        </ul>

        <h3 className="text-xl md:text-2xl font-semibold mb-2">Intakes</h3>
        <p className="text-sm md:text-lg mb-4">
          The major intakes are February/March, July/August, and November. A few universities also offer limited programs during other periods.
        </p>

        <h3 className="text-xl md:text-2xl font-semibold mb-2">English Requirements</h3>
        <p className="text-sm md:text-lg">
          IELTS, TOEFL, or other English proficiency exams are required for admission and visa. All students seeking to study in Australia must be fluent in English.
        </p>
      </div>
    </div>
    <Register/>
    <WhatPeopleAreSaying/>
    </>
  );
};

export default StudyAus;
