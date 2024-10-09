import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Book, Globe } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Prabhdeep Singh',
    text: 'Prabhdeep Singh achieved an outstanding score of 7 bands in the IELTS exam after preparing with the expert guidance of D2 Global. The personalized coaching, dedicated support, and focused approach helped Prabhdeep excel in all modules of the test, paving the way for his successful journey toward studying abroad.',
  },
  {
    id: 2,
    name: 'Navjot Singh',
    text: 'I am incredibly thankful to D2 Global for their unwavering support throughout my visa process. After facing a refusal, I was disheartened, but the team at D2 Global guided me step by step, ensuring that my documents were perfectly aligned for a successful application. With their expertise, I received my UK study visa within just one month!',
  },
];

const FloatingIcon = ({ Icon, left, top }) => (
  <motion.div
    className="absolute text-customYellow opacity-40 z-50"  // Ensuring z-index is higher
    style={{ left: `${left}%`, top: `${top}%` }}
    animate={{ y: [-10, 10] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
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
      
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-4" // Adjusted margin bottom
      >
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold text-customYellow">
          WHAT OUR CLIENTS SAY ABOUT US
        </h2>
        <div className="w-24 h-1 bg-customYellow mx-auto mt-2"></div>
      </motion.div>

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-[550px] md:h-[600px] lg:h-[650px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute w-80 h-80 md:w-96 md:h-96 bg-white z-50 rounded-full p-8 shadow-lg flex flex-col justify-center items-center text-center ${
                index % 2 === 0 ? 'left-0' : 'right-0' // Position based on even/odd index
              }`}
              initial={{ y: 0 }}
              animate={{
                y: index % 2 === 0
                  ? [-40, 40] // Even indexed items move up then down
                  : [40, -40], // Odd indexed items move down then up
              }}
              transition={{ duration: 2, repeat: Infinity, yoyo: true }} // Infinite animation with yoyo effect
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
