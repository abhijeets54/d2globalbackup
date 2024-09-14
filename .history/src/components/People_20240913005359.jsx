import React from 'react';
import { motion } from 'framer-motion';

// Array containing people information
const people = [
  { name: 'Mr. Amardeep Singh', image: '/amar.webp' },
  { name: 'Mr. Rajesh Sharma', image: '/rajesh.webp' },
  { name: 'Ms. Rajwinder Kaur', image: '/rajwinder.webp' },
  { name: 'Ms. Rishika Duggal', image: '/rishika.webp' },
  { name: 'Harpreet Kaur', image: '/harry.webp' },
  { name: 'Shanu', image: '/shanu.webp' }
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const People = () => {
  return (
    <div className="people-container bg-blue-900 text-white p-10">
      {/* Left text section */}
      <div className="mb-10 text-left">
        <h1 className="text-4xl font-bold mb-4">OUR PEOPLE ARE OUR BRAND.</h1>
      </div>

      {/* Photos grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {people.map((person, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center bg-white rounded-md shadow-lg p-4"
            variants={fadeInVariants}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={person.image}
              alt={person.name}
              className="rounded-md w-32 h-32 object-cover mb-4"
            />
            <h4 className="text-lg font-semibold text-gray-800">{person.name}</h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default People;
