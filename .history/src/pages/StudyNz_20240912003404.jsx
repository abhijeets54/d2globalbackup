import React from 'react';
import { motion } from 'framer-motion';

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
    <div className="study-nz-container">
      {/* Top section */}
      <div className="bg-white p-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left text section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold flex items-center mb-6">
            <img src="/nzflag.svg" alt="NZ Flag" className="w-8 h-8 mr-2" /> 
            Study in New Zealand
          </h1>
          <p className="mb-4 text-left text-lg">
            Explore institutions, cost of living, and scholarships to study in New Zealand. New Zealand is an emerging study abroad destination with an excellent education system and internationally accredited qualifications.
          </p>
          <div className="flex justify-start space-x-10 text-center">
            <div>
              <h3 className="text-3xl font-bold text-red-600">50 +</h3>
              <p>Academic Institutions</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">2100 +</h3>
              <p>Programs</p>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="/nz1.webp" alt="Study in NZ" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Why study in NZ */}
      <div className="bg-blue-950 text-white p-10">
        <h2 className="text-3xl font-bold mb-4">Why Study in New Zealand?</h2>
        <h3 className="text-2xl font-semibold mb-10">Outstanding Educational Opportunities in New Zealand for Indian Students</h3>

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
      <div className="bg-white p-10">
        <h2 className="text-3xl font-bold mb-4">Top Universities of New Zealand</h2>
        <ul className="list-disc pl-5">
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
      <div className="bg-blue-950 text-white p-10">
        <h2 className="text-3xl font-bold mb-4">Intakes</h2>
        <p>Main Intakes – February and September</p>
        <p>Other Intakes – May, July, November</p>
      </div>
    </div>
  );
};

export default StudyNz;
