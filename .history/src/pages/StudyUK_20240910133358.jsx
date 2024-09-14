import React from 'react';
import { motion } from 'framer-motion';
impr

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
    <div className="study-uk-container">
      {/* Top section */}
      <div className="bg-white p-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left text section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold flex items-center mb-6">
            <img src="/ukflag.svg" alt="UK Flag" className="w-8 h-8 mr-2" /> 
            Study in UK
          </h1>
          <p className="mb-4 text-left text-lg">
            Plan a successful future. Explore educational institutions and related costs. The UK is a leading study abroad destination known for its esteemed universities, multicultural environment, and globally recognized pedagogy.
          </p>
          <div className="flex justify-start space-x-10 text-center">
            <div>
              <h3 className="text-3xl font-bold text-red-600">180 +</h3>
              <p>Academic Institutions</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">28500 +</h3>
              <p>Programs</p>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="/uk1.webp" alt="Study in UK" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Why study in UK */}
      <div className="bg-blue-950 text-white p-10">
        <h2 className="text-3xl font-bold mb-4">Why Study in UK</h2>
        <h3 className="text-2xl font-semibold mb-10">Experience an unforgettable academic adventure within a dynamic culture.</h3>

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
    </div>
  );
};

export default StudyUK;
