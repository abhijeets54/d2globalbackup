import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiLightBulb } from 'react-icons/hi'; // Import Lightbulb icon

const testimonials = [
  {
    id: 1,
    name: 'Prabhdeep Singh',
    text: 'Excellent coaching!',
  },
  {
    id: 2,
    name: 'Navjot Singh',
    text: 'Great visa support!',
  },
];

const FloatingTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-customBlue min-h-fit flex flex-col justify-center items-center overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-customYellow mb-12">
        STUDENT TESTIMONIALS
      </h2>
      <div className="relative w-full max-w-7xl mx-auto px-4 pb-16"> {/* Reduced bottom padding */}
        <div className="flex justify-center items-center h-[600px] md:h-[700px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute w-95 h-95 md:w-96 md:h-96 bg-white rounded-full p-8 shadow-lg flex flex-col justify-center items-center text-center ${
                index % 2 === 0 ? 'left-0' : 'right-0' // Position based on even/odd index
              }`}
              initial={{ y: 0 }}
              animate={{
                y: index === currentTestimonial ? [(index % 2 === 0) ? -20 : 20, 0] : 0, // Alternate up/down based on index
              }}
              transition={{ duration: 2, repeat: Infinity, yoyo: true }} // Animation settings
            >
              <h3 className="text-xl font-semibold mb-4 text-customBlue">{testimonial.name}</h3>
              <p className="text-base text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
          <div className="absolute inset-0 flex flex-col justify-center items-center"> {/* Blue space with icon */}
            <HiLightBulb className="text-customBlue text-8xl mb-4 animate-spin" /> {/* Animated lightbulb icon */}
            <p className="text-center text-base text-customBlue opacity-75">
              Success Stories That Shine Bright
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingTestimonials;