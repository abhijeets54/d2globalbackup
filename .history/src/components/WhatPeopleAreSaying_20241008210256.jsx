import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Book, Globe } from 'lucide-react';

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

const FloatingIcon = ({ Icon, left, top }) => (
  <motion.div
    className="absolute text-customYellow z-50" // Ensuring z-index is higher
    style={{ left: `${left}%`, top: `${top}%` }}
    animate={{ y: [-10, 10] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }} // Infinite animation
  >
    <Icon size={48} />
  </motion.div>
);

const FloatingTestimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-12 bg-customBlue flex flex-col h-96 md:h-[450px] lg:h-[550px] justify-center items-center overflow-hidden relative z-0">
      {/* Floating Icons */}
      <FloatingIcon Icon={Star} left={5} top={10} />
      <FloatingIcon Icon={GraduationCap} left={85} top={15} />
      <FloatingIcon Icon={Book} left={10} top={80} />
      <FloatingIcon Icon={Globe} left={90} top={75} />

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-[550px] md:h-[600px] lg:h-[650px]">
          <h2 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-customYellow">
            WHAT OUR CLIENTS SAY ABOUT US
          </h2>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute w-80 h-80 md:w-96 md:h-96 bg-white z-50 rounded-full p-8 shadow-lg flex flex-col justify-center items-center text-center ${
                index % 2 === 0 ? 'left-0' : 'right-0'
              }`}
              // Optimized animation with smoother transitions
              animate={{
                y: ['50%', '-50%'], // Use percentages for smoother transitions
              }}
              transition={{
                duration: 2, // Control animation speed here
                repeat: Infinity, // Ensures infinite loop
                yoyo: true, // Smoothly reverses animation
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-customBlue">{testimonial.name}</h3>
              <p className="text-base text-gray-600">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingTestimonials;