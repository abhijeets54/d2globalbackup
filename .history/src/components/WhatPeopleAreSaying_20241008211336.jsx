import React from 'react';
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
    className="absolute text-customYellow z-10" // Ensuring z-index is higher
    style={{ left: `${left}%`, top: `${top}%` }}
    animate={{ y: [-10, 10] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
  >
    <Icon size={48} />
  </motion.div>
);

const FloatingTestimonials = () => {
  return (
    <div className="py-12 bg-customBlue flex flex-col h-96 md:h-[450px] lg:h-[550px] justify-center items-center overflow-hidden relative">
      {/* Floating Icons */}
      <FloatingIcon Icon={Star} left={5} top={10} />
      <FloatingIcon Icon={GraduationCap} left={85} top={15} />
      <FloatingIcon Icon={Book} left={10} top={80} />
      <FloatingIcon Icon={Globe} left={90} top={75} />

      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-[550px] md:h-[600px] lg:h-[650px]">
          <h2 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-customYellow mb-8">
            WHAT OUR CLIENTS SAY ABOUT US
          </h2>

          {testimonials.map((testimonial, index) => (
           import React from 'react';
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
    className="absolute text-customYellow z-10"
    style={{ left: `${left}%`, top: `${top}%` }}
    animate={{ y: [-10, 10] }}
    transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
  >
    <Icon size={48} />
  </motion.div>
);

const FloatingTestimonials = () => {
  return (
    <div className="py-12 bg-customBlue flex flex-col min-h-screen justify-center items-center overflow-hidden relative">
      {/* Floating Icons */}
      <FloatingIcon Icon={Star} left={5} top={10} />
      <FloatingIcon Icon={GraduationCap} left={85} top={15} />
      <FloatingIcon Icon={Book} left={10} top={80} />
      <FloatingIcon Icon={Globe} left={90} top={75} />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-customYellow mb-8">
          WHAT OUR CLIENTS SAY ABOUT US
        </h2>
        
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute 
                w-48 h-48 
                sm:w-64 sm:h-64 
                md:w-80 md:h-80 
                lg:w-96 lg:h-96 
                bg-white rounded-full py-4 sm:py-6 md:py-8 
                shadow-lg flex flex-col justify-center items-center text-center
                ${index === 0 
                  ? 'left-[5%] sm:left-[10%] md:left-[15%] lg:left-[20%]' 
                  : 'right-[5%] sm:right-[10%] md:right-[15%] lg:right-[20%]'
                }`}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
              animate={{
                y: index === 0 ? [-30, 30] : [30, -30],
              }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }}
            >
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold mb-2 sm:mb-3 md:mb-4 text-customBlue">
                {testimonial.name}
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 px-2 sm:px-4 md:px-6 lg:px-8">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingTestimonials;
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingTestimonials;