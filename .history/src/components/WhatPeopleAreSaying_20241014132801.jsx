import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Book, Globe } from 'lucide-react';

const testimonials = [
  // Testimonials data (same as you provided)
];

const FloatingIcon = ({ Icon, left, top }) => (
  <motion.div
    className="absolute text-customYellow"
    style={{ left: `${left}%`, top: `${top}%` }}
    animate={{
      y: [0, -10, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  >
    <Icon size={32} />
  </motion.div>
);

const FloatingTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonials every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-customBlue text-white py-16 px-4 overflow-hidden">
      {/* Floating Icons */}
      <FloatingIcon Icon={GraduationCap} left={85} top={15} />
      <FloatingIcon Icon={Book} left={15} top={80} />
      <FloatingIcon Icon={Globe} left={90} top={75} />

      <h2 className="text-4xl font-bold text-center mb-12">WHAT OUR CLIENTS SAY ABOUT US</h2>
      
      <div className="flex justify-center items-center h-[450px] relative">
        <AnimatePresence initial={false}>
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute w-96 h-96 rounded-full p-6 shadow-lg bg-white text-customBlue flex flex-col justify-center items-center text-center ${
                index === 1 ? 'z-10 scale-110' : 'scale-90'}`}
              initial={{ opacity: 0, x: index === 1 ? 0 : 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index === 1 ? 0 : -300 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="font-bold mb-4 text-lg">{testimonial.name}</h3>
              <div className="overflow-y-auto h-64 scrollbar-hide">
                <p className="text-base" style={{ fontSize: `${Math.max(16, Math.min(18, 400 / testimonial.text.length))}px` }}>
                  {testimonial.text}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingTestimonials;
