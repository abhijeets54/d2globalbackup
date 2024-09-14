import React from 'react';
import { motion } from 'framer-motion';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import Register from '../components/Register';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import O


const points = [
  { title: 'World-class Education System', description: 'Europe has prominent universities and colleges known for cutting-edge research and a strong academic community.' },
  { title: 'Low Tuition Fees', description: 'Many European universities offer lower fees compared to countries like Australia, the US, and Canada. In some cases, there are no tuition fees at all.' },
  { title: 'Myriad Education Options', description: 'A huge number of colleges in Europe offer diverse study programs in English, covering a vast range of disciplines.' },
  { title: 'Uplift Your Career', description: 'Studying in Europe provides global experience and career opportunities, with many countries encouraging graduates to stay and work.' },
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

const StudyEurope = () => {
  return (
    <>
    <QuickEnquiry/>
    <div className="study-europe-container">
      {/* Top section */}
      <div className="bg-white p-6 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left text section */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl lg:text-4xl font-bold flex items-center mb-4 lg:mb-6">
            Study in Europe
          </h1>
          <p className="mb-4 text-base lg:text-lg">
            Discover the opportunities Europe offers with its world-class education system, rich cultural history, and diverse study programs. Europe is a popular destination for postgraduate studies.
          </p>
          <div className="flex justify-start space-x-6 lg:space-x-10 text-center">
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
          <img src="/eur1.webp" alt="Study in Europe" className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Why study in Europe */}
      <div className="bg-blue-950 text-white p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Why Study in Europe</h2>
        <h3 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-10">Explore the best opportunities and education system Europe has to offer.</h3>

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

      {/* Study Visa Requirements */}
      <div className="bg-white p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Requirements for Europe Study Visa</h2>
        <ul className="list-disc list-inside space-y-2 text-base lg:text-lg">
          <li>Valid visa application form for the selected country</li>
          <li>Proof of meeting the basic age requirements</li>
          <li>Valid passport for the specific nation</li>
          <li>Valid documentation from a European university</li>
          <li>Proof of finances</li>
          <li>Flight tickets</li>
          <li>Proof of language proficiency (if applicable)</li>
        </ul>
      </div>

      {/* Top Universities in Europe */}
      <div className="bg-gray-200 p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Top Universities in Europe</h2>
        <ul className="list-disc list-inside space-y-2 text-base lg:text-lg">
          <li>Karolinska Institute</li>
          <li>University of Cambridge</li>
          <li>Paris Sciences et Lettres – PSL Research University Paris</li>
          <li>Technical University of Munich</li>
          <li>ETH Zurich</li>
          <li>UCL</li>
          <li>KU Leuven</li>
          <li>London School of Economics and Political Science</li>
          <li>University of Manchester</li>
          <li>University of Edinburgh</li>
        </ul>
      </div>
    </div>
    <Register/>
    <WhatPeopleAreSaying/>
    </>
  );
};

export default StudyEurope;
