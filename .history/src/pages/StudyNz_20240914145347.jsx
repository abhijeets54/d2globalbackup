import React from 'react';
import { motion } from 'framer-motion';
import Register from '../components/Register';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import OurAssociates from '../components/OurAssociates';


const points = [
  { title: 'Advanced Teaching Methods', description: 'Inspired by the British education system, New Zealand offers an immersive learning experience supported by various programs and courses.' },
  { title: 'Abundant Research Opportunities', description: 'The country offers ample research opportunities with highly experienced faculty, well-equipped laboratories, latest technology and equipment.' },
  { title: 'Affordable Education Cost', description: 'The education expenses on similar structured programs and qualifications in New Zealand are much lower than in other popular study abroad destinations.' },
  { title: 'Beautiful Environment', description: 'New Zealand boasts a wonderful environment with beautiful landscapes, including hills, beaches, volcanoes, and snow-capped mountains. It’s a perfect place to live a healthy and active lifestyle.' },
  { title: 'Immersive Culture', description: 'The country has a rich cultural heritage celebrating numerous traditions. It is also a safe place for International students and is known for its social tolerance and politically stable environment.' },
  { title: 'Work-study options', description: 'New Zealand allows international students to work 18-20 hours a week while studying and full-time during breaks.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const StudyNz = () => {
  return (
    <>
    <div className="study-nz-container">
      {/* Top section */}
      <div className="bg-white p-6 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left text section */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl lg:text-4xl font-bold flex items-center mb-4 lg:mb-6">
            <img src="/nzflag.svg" alt="NZ Flag" className="w-6 lg:w-8 h-6 lg:h-8 mr-2" /> 
            Study in New Zealand
          </h1>
          <p className="mb-4 lg:mb-6 text-base lg:text-lg">
            Explore institutions, cost of living, and scholarships to study in New Zealand. New Zealand is an emerging study abroad destination with an excellent education system and internationally accredited qualifications.
          </p>
          <div className="flex justify-start space-x-6 lg:space-x-10">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-red-600">50 +</h3>
              <p className="text-sm lg:text-base">Academic Institutions</p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-red-600">2100 +</h3>
              <p className="text-sm lg:text-base">Programs</p>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="/nz1.webp" alt="Study in NZ" className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Why study in NZ */}
      <div className="bg-blue-950 text-white p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Why Study in New Zealand?</h2>
        <h3 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-10">Outstanding Educational Opportunities in New Zealand for Indian Students</h3>

        {/* Sequential fade-in effect for each point */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {points.map((point, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-800 rounded-md shadow-lg"
              variants={fadeInVariants}
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
              <p className="text-gray-400">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Top Universities */}
      <div className="bg-white p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Top Universities of New Zealand</h2>
        <ul className="list-disc list-inside">
          <li>The University of Auckland</li>
          <li>Auckland University of Technology</li>
          <li>The University of Waikato</li>
          <li>Massey University</li>
          <li>Victoria University of Wellington</li>
          <li>University of Canterbury</li>
          <li>Lincoln University</li>
          <li>University of Otago</li>
        </ul>
      </div>

      {/* Intakes */}
      <div className="bg-white  p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Intakes</h2>
        <p>Main Intakes – February and September</p>
        <p>Other Intakes – May, July, November</p>
      </div>
    </div>
    <Register/>
    <WhatPeopleAreSaying/>
    </>
  );
};

export default StudyNz;
