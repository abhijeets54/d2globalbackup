import React from 'react';
import { motion } from 'framer-motion';
import { Star, GraduationCap, Book, Globe, Quote } from 'lucide-react';

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
      
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-customYellow mb-12">
          WHAT OUR CLIENTS SAY ABOUT US
        </h2>
        
        <div className="relative w-full h-[600px] md:h-[650px] lg:h-[700px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute 
                w-80 h-80 
                md:w-96 md:h-96 
                lg:w-[420px] lg:h-[420px] 
                bg-white rounded-full shadow-xl 
                flex flex-col justify-center items-center 
                overflow-hidden
                ${index === 0 
                  ? 'left-[5%] md:left-[10%] lg:left-[15%]' 
                  : 'right-[5%] md:right-[10%] lg:right-[15%]'
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
              <div className="absolute top-6 left-6 text-customBlue opacity-20">
                <Quote size={48} />
              </div>
              <div className="px-8 py-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-customBlue">
                  {testimonial.name}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                <div className="flex justify-center">
                  <Star className="text-yellow-400" size={24} />
                  <Star className="text-yellow-400" size={24} />
                  <Star className="text-yellow-400" size={24} />
                  <Star className="text-yellow-400" size={24} />
                  <Star className="text-yellow-400" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingTestimonials;