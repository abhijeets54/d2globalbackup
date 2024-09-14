import React from 'react';
import { motion } from 'framer-motion';

const points = [
  { title: 'Globally Acclaimed Institutes', description: 'Canadian universities and colleges are renowned for their advanced pedagogical methods & enhanced learning experiences.' },
  { title: 'Post Study Work Options', description: 'The country offers work opportunities to students for up to 3 years after graduation, helping them gain international work experience.' },
  { title: 'Affordable Tuition Fee and Living Cost', description: 'The average course fee and expenses one incurs for living in Canada are less compared to other study abroad destinations.' },
  { title: 'Ample Work Opportunities', description: 'The growth of industries in Canada creates a constant increase in the demand for skilled professionals from across borders.' },
  { title: 'Enriching Multicultural Environment', description: 'With a diverse population, Canada offers a rich and vibrant cultural environment, promoting inclusivity and respect in the community.' },
  { title: 'Excellent Quality of Life', description: 'Students studying in Canada enjoy a high quality of life with advanced healthcare facilities, multiple job options, safety and security.' },
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

const StudyCan = () => {
  return (
    <div className="study-can-container">
      {/* Top section */}
      <div className="bg-white p-10 flex flex-col lg:flex-row items-center justify-between">
        {/* Left text section */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold flex items-center mb-6">
            <img src="/canadaflag.svg" alt="Canada Flag" className="w-8 h-8 mr-2" /> 
            Study in Canada
          </h1>
          <p className="mb-4 text-left text-lg">
            Learn everything about universities, costs, scholarships, admission process & more. Canada facilitates academic, professional, and personal development for students with a constantly upgraded education system in a multicultural environment.
          </p>
          <div className="flex justify-start space-x-10 text-center">
            <div>
              <h3 className="text-3xl font-bold text-red-600">300 +</h3>
              <p>Academic Institutions</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-red-600">11000 +</h3>
              <p>Programs</p>
            </div>
          </div>
        </div>

        {/* Right image section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
          <img src="/canada1.webp" alt="Study in Canada" className="w-full max-w-md rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Why study in Canada */}
      <div className="bg-blue-950 text-white p-10">
        <h2 className="text-3xl font-bold mb-4">Why Study in Canada?</h2>
        <h3 className="text-2xl font-semibold mb-10">A popular study abroad destination nurturing the dreams of millions of students.</h3>

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
      <div className="bg-white text-gray-800 p-10">
        <h2 className="text-3xl font-bold mb-4">Programs Offered:</h2>
        <p>Diploma: 2 years</p>
        <p>Advanced Diploma: 3 years (Fast Track 2 years)</p>
        <p>Bachelors: 4 years</p>
        <p>PG Diploma: 1 year (very few programs are for 2 years)</p>
        <p>Masters: 2 years</p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Top Universities & Colleges:</h2>
        <p>ABM College of Health and Technology</p>
        <p>Ambrose University College</p>
        <p>Bow Valley College</p>
        <p>Canadian University College</p>
        <p>Evergreen College</p>
        <p>Grande Prairie Regional College</p>
        <p>Keyano College</p>
        <p>The King’s University College</p>
        <p>Lakeland College</p>
        <p>Lethbridge College</p>
        <p>Medicine Hat College</p>
        <p>NorQuest College</p>

        <h2 className="text-3xl font-bold mt-8 mb-4">Intakes:</h2>
        <p>January</p>
        <p>September</p>
        <p>May / June – few institutions with limited courses</p>

        <h2 className="text-3xl font-bold mt-8 mb-4">English Requirements:</h2>
        <p>Pearson Test of English (PTE) Academic</p>
        <p>IELTS: 6 to 6.5 bands</p>
      </div>
    </div>
  );
};

export default StudyCan;
