import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Book, Globe } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Prabhdeep Singh',
    text: 'Prabhdeep Singh achieved an outstanding score of 7 bands in the IELTS exam after preparing with the expert guidance of D2 Global. The personalized coaching and dedicated support helped Prabhdeep excel in the test.',
  },
  {
    id: 2,
    name: 'Navjot Singh',
    text: 'I am incredibly thankful to D2 Global for their unwavering support throughout my visa process. After facing a refusal, I was disheartened, but D2 Global with their expertise helped me receive my UK study visa within just one month!',
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
            <motion.div
              key={testimonial.id}
              className={`absolute w-80 h-80 md:w-96 md:h-96 bg-white rounded-full py-8 shadow-lg flex flex-col justify-center items-center text-center ${
                index === 0                   ? 'left-[10%] md:left-[15%] lg:left-[1%]' 
                : 'right-[10%] md:right-[15%] lg:right-[1%]'
// Adjust base positioning here
              }`} // Adjust base positioning for desired initial layout
              animate={{
                y: index === 0 ? [-60, 60] : [60, -60], // Increased animation distance
              }}
              transition={{
                y: {
                  duration: 2, // Adjust animation speed here
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut', // Smoother transitions
                },
              }}
            >
              <h3 className="text-xl font-semibold mb-4 text-customBlue">{testimonial.name}</h3>
              <p className="text-sm md:text-base text-black font-semiboldleading-relaxed mb-4">{testimonial.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingTestimonials;