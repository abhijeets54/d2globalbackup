import React from 'react';
import { motion } from 'framer-motion';
import Register from '../components/Register';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';



const points = [
  { title: 'Well-established Education System', description: 'Dubai offers a modern education system with excellent infrastructure in its universities.' },
  { title: 'Safe Living Environment', description: 'Dubai is one of the safest places to live, providing peace of mind for students and their families.' },
  { title: 'Affordable Tuition & Living Costs', description: 'Tuition fees and living costs in Dubai are lower than in the US, UK, and Australia.' },
  { title: 'Fast-Growing Economy', description: 'With a fast-growing economy, Dubai offers ample career opportunities for students after graduation.' },
  { title: 'Cultural Diversity', description: 'Over 200 nationalities live in Dubai, offering students a rich multicultural experience that prepares them for a global career.' },
  { title: 'High Return on Investment', description: 'Students in Dubai experience a high return on investment with many job opportunities and work permits after study.' },
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

const StudyDubai = () => {
  return (
    <>
    <QuickEnquiry/>
    <div className="study-dubai-container">
      {/* Top section */}
      <div className="bg-white p-6 md:p-10 flex flex-col lg:flex-row items-start justify-between">
        {/* Left text section */}
        <div className="lg:w-1/2 text-left">
          <h1 className="text-3xl md:text-4xl font-bold flex items-center mb-4 md:mb-6">
            <img src="/dflag.svg" alt="Dubai Flag" className="w-6 h-6 md:w-8 md:h-8 mr-2" /> 
            Study in Dubai
          </h1>
          <p className="mb-4 md:mb-6 text-base md:text-lg">
            Dubai is a top international study destination, known for its high-ranking universities, modern facilities, and a fast-growing economy. Learn everything about universities, living costs, and visa requirements for a successful educational journey.
          </p>
          <div className="flex justify-start space-x-6 md:space-x-10 text-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-red-600">6</h3>
              <p className="text-sm md:text-base">QS World Ranking Universities</p>
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-red-600">2 years</h3>
              <p className="text-sm md:text-base">Work Permit After Study</p>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="/dub1.webp" alt="Study in Dubai" className="w-full max-w-xs md:max-w-md rounded-lg shadow-lg object-contain" />
        </div>
      </div>

      {/* Why study in Dubai */}
      <div className="bg-blue-950 text-white p-6 md:p-10 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Study in Dubai</h2>
        <h3 className="text-xl md:text-2xl font-semibold mb-8 md:mb-10">Discover why Dubai is an ideal study destination.</h3>

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
              <p className="text-gray-400 text-sm md:text-base">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Intakes Section */}
      <div className="bg-white p-6 md:p-10 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Intakes</h2>
        <table className="min-w-full table-auto text-left">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-4 py-2">Intake</th>
              <th className="px-4 py-2">Study Program</th>
              <th className="px-4 py-2">Admission Deadlines</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Fall</td>
              <td className="border px-4 py-2">Undergraduate and Postgraduate</td>
              <td className="border px-4 py-2">September - October</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Spring</td>
              <td className="border px-4 py-2">Undergraduate and Postgraduate</td>
              <td className="border px-4 py-2">January - February</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">Summer</td>
              <td className="border px-4 py-2">Undergraduate and Postgraduate</td>
              <td className="border px-4 py-2">June - July</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Top Universities Section */}
      <div className="bg-blue-950 text-white p-6 md:p-10 text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Top Universities in Dubai</h2>
        <ul className="list-disc ml-4 md:ml-6">
          <li className="mb-2">University of Birmingham Dubai</li>
          <li className="mb-2">Abu Dhabi University - QS Rank 580</li>
          <li className="mb-2">Khalifa University - QS Rank 230</li>
          <li className="mb-2">United Arab Emirates University - QS Rank 290</li>
          <li className="mb-2">Heriot-Watt University Dubai</li>
          <li className="mb-2">University of Sharjah - QS Rank 465</li>
          <li className="mb-2">Zayed University - QS Rank 701</li>
          <li className="mb-2">American University of Sharjah - QS Rank 364</li>
          <li className="mb-2">RIT Dubai</li>
          <li className="mb-2">Ajman University - QS Rank 551</li>
        </ul>
      </div>
    </div>
    <Register/>
    <WhatPeopleAreSaying/>
    </>
  );
};

export default StudyDubai;
