import React from 'react';
import { motion } from 'framer-motion';

// Array containing people information
const people = [
  { name: 'Mr. Amardeep Singh', designation: 'Managing Director', image: '/amar.webp' },
  { name: 'Mr. Rajesh Sharma', designation: 'Buisness Development Manager', image: '/rajesh.webp' },
  { name: 'Ms. Rajwinder Kaur', designation: 'Social Media Manager', image: '/rajwinder.webp' },
  { name: 'Ms. Rishika Duggal', designation: 'General Manager', image: '/rishika.webp' },
  { name: 'Ms. Harpreet Kaur', designation: 'Customer Care Head', image: '/harry.webp' },
  { name: 'Ms. Shanu', designation: 'Designation', image: '/shanu.webp' }
];

// Animation variants for container and child elements
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      staggerChildren: 0.2, 
      duration: 0.6, 
      ease: 'easeInOut'
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeInOut' } }
};

const People = () => {
  return (
    <div className="people-container bg-white text-white p-10">
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
            className="flex flex-col items-center bg-blue- rounded-md shadow-lg p-4"
            variants={fadeInVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <div className="w-32 h-32">
              <img
                src={person.image}
                alt={person.name}
                className="rounded-md w-full h-full object-contain mb-4"
              />
            </div>
            <h4 className="text-lg font-semibold text-gray-800">{person.name}</h4>
            <p className="text-sm text-gray-600">{person.designation}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default People;
