import React from 'react';
import { motion } from 'framer-motion';
import QuickNumbers from '../components/QuickNumbers';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import Register from '../components/Register';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';

const points = [
  { title: 'Quality Education', description: 'The country has an independent body to assess the education standards of all academic institutes regularly to maintain quality.' },
  { title: 'Vibrant Community', description: 'The UK is influenced by many cultures, which allow international students to live and study in a multicultural environment.' },
  { title: 'Flexible Learning', description: 'The British education system offers a flexible curriculum to help students upgrade courses based on interests.' },
  { title: 'Work Opportunities', description: 'The country allows international students to work part-time for up to 20 hours a week during sessions and full-time during semester breaks.' },
  { title: 'High Employability', description: 'Graduating from a UK university provides a foundation for students to stand out to prospective employers.' },
  { title: 'Explore Parts of Europe', description: 'Being well connected to some of the major European countries, studying in the UK allows international students to explore different places.' },
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

const StudyUK = () => {
  return (
    <>
      <div className="study-uk-container">
        {/* Top section */}
        <div className="bg-white p-4 md:p-8 lg:p-10 flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
          {/* Left text section */}
          <div className="lg:w-1/2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold flex items-center mb-4 lg:mb-6 text-left">
              <img src="/ukflag.svg" alt="UK Flag" className="w-6 h-6 md:w-8 md:h-8 mr-2" /> 
              Study in UK
            </h1>
            <p className="mb-4 text-sm md:text-lg text-left">
              Plan a successful future. Explore educational institutions and related costs. The UK is a leading study abroad destination known for its esteemed universities, multicultural environment, and globally recognized pedagogy.
            </p>
            <div className="flex justify-start space-x-6 md:space-x-10 text-center text-left">
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">180 +</h3>
                <p className="text-sm md:text-base">Academic Institutions</p>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600">28500 +</h3>
                <p className="text-sm md:text-base">Programs</p>
              </div>
            </div>
          </div>

          {/* Right image section */}
          <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
            <img src="/uk1.webp" alt="Study in UK" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-cover" />
          </div>
        </div>

        {/* Why study in UK */}
        <div className="bg-white p-4 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Why Study in the UK</h2>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 md:mb-10 text-left">Experience an unforgettable academic adventure within a dynamic culture.</h3>

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
                className="p-4 bg-blue-950 rounded-md shadow-lg text-left"
                variants={fadeInVariants}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="text-base md:text-lg text-white font-semibold mb-2">{point.title}</h4>
                <p className="text-gray-300 text-sm md:text-base">{point.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Top Universities Section */}
      <div className="bg-gray-100 p-4 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Top Universities of UK</h2>
        <ul className="list-disc list-inside text-lg text-left">
          <li>University of Aberdeen</li>
          <li>Abertay University</li>
          <li>Aberystwyth University</li>
          <li>Anglia Ruskin University, Cambridge</li>
          <li>The Arts University Bournemouth</li>
          <li>University of the Arts London</li>
          <li>Camberwell College of Arts</li>
          <li>Bangor University</li>
          <li>University of Bath</li>
          <li>Bath Spa University</li>
          <li>University of Bedfordshire, Luton and Bedford</li>
          <li>University of Birmingham</li>
          <li>University of the Arts London</li>
        </ul>
      </div>

      {/* Intakes Section */}
      <div className="bg-white p-4 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">Intakes</h2>
        <p className="text-lg mb-2 text-left">
          <span className="font-semibold">Major intake:</span> September / October
        </p>
        <p className="text-lg text-left">
          <span className="font-semibold">Other Intakes:</span> January / February, May (few Universities offer rolling intakes as well)
        </p>
      </div>

      {/* English Requirements Section */}
      <div className="bg-gray-100 p-4 md:p-8 lg:p-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-left">English Requirements</h2>
        <p className="text-lg mb-2 text-left">
          An IELTS, TOEFL, or other English proficiency exam score is required for admission and visa. If students have secured good grades in English in 10th and 12th, some universities may accept that as proof of English proficiency.
        </p>
      </div>

      <Register/>
      <WhatPeopleAreSaying/>
    </>
  );
};

export default StudyUK;
