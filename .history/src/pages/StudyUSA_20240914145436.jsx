import React from 'react';
import { motion } from 'framer-motion';
import Register from '../components/Register';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import OurAssociates from '../components/OurAssociates';

const points = [
  { title: 'Flexibility in Choosing a Major', description: 'Colleges and universities in USA allow students to easily choose and switch majors after admission.' },
  { title: 'General Education', description: 'Students graduate with a range of general education classes apart from majors and gain a well-rounded education.' },
  { title: 'Diverse Student Communities', description: 'The United States hosts a huge number of cultural communities of residents and international students from across the world.' },
  { title: 'Post Study Work Options', description: 'Students on an F-1 visa get permission for practical training and staying in the USA for a period of up to 29 months.' },
  { title: 'Abundant Career Opportunities', description: 'The USA is a land of abundance for jobs and career options, and students easily secure high jobs in their field of study.' },
  { title: 'Immigration Opportunities', description: 'USA’s Post-Graduation Work Permit Program (PWPP) allows students to stay and work in the USA.' },
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

const StudyUSA = () => {
  return (
    <>
    <QuickEnquiry/>
    <div className="study-usa-container">
      {/* Top section */}
      <div className="bg-white p-6 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between">
        {/* Left text section */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl lg:text-4xl font-bold flex items-center mb-4 lg:mb-6">
            <img src="/usaflag.webp" alt="USA Flag" className="w-6 lg:w-8 h-6 lg:h-8 mr-2" /> 
            Study in USA
          </h1>
          <p className="mb-4 lg:mb-6 text-base lg:text-lg">
            Explore educational institutions, studying and living costs, and financial aid. USA is home to the highest top-ranked universities in the world, offering endless academic and professional growth opportunities.
          </p>
          <div className="flex justify-start space-x-6 lg:space-x-10">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-red-600">280 +</h3>
              <p className="text-sm lg:text-base">Academic Institutions</p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-red-600">24000 +</h3>
              <p className="text-sm lg:text-base">Programs</p>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="/usa1.webp" alt="Study in USA" className="w-full max-w-xs lg:max-w-md rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Why study in USA */}
      <div className="bg-blue-950 text-white p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Why Study in USA</h2>
        <h3 className="text-xl lg:text-2xl font-semibold mb-6 lg:mb-10">The ultimate destination for all academic, technical, and professional developments.</h3>

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

      {/* Additional Information */}
      <div className="bg-gray-100 p-6 lg:p-10 text-left">
        <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Top Universities of USA</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Amherst College</li>
          <li>Baylor University</li>
          <li>Boston University</li>
          <li>Brown University</li>
          <li>California Institute of Technology</li>
          <li>Carnegie Mellon University</li>
          <li>Columbia University</li>
        </ul>

        <h3 className="text-xl lg:text-2xl font-semibold mb-4">Intakes</h3>
        <p>Main Intakes – Fall (August / September), Other Intakes – Spring (January) and Summer (Mid April)</p>

        <h3 className="text-xl lg:text-2xl font-semibold mb-4 mt-6">English Requirements</h3>
        <p>TOEFL (Internet-based test), IELTS, or Pearson Test of English (PTE) Academic is required for admission and visa processing.</p>
      </div>
    </div>
    <o
    <Register/>
    <WhatPeopleAreSaying/>
    </>
  );
};

export default StudyUSA;
