import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Book, Globe } from 'lucide-react';

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
  {
    id: 3,
    name: 'Angel ishita',
    text: 'The environment of D2 global is extremely awesome and the way of teaching is very unique and effective. I recommend this institute to those students who wants to achieve their desired scores😊',
  },
  // ... (other testimonials)
];

const FloatingIcon = ({ Icon, position }) => (
  <motion.div
    className={`absolute text-customBlue ${position}`}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
  >
    <Icon size={48} />
  </motion.div>
);

const TestimonialCircle = ({ testimonial, position }) => {
  const variants = {
    left: { x: '-100%', scale: 0.8, opacity: 0.6, zIndex: 0 },
    center: { x: '0%', scale: 1.2, opacity: 1, zIndex: 2 },
    right: { x: '100%', scale: 0.8, opacity: 0.6, zIndex: 0 },
    exit: { x: '-200%', opacity: 0, zIndex: 0 },
  };

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2"
      variants={variants}
      initial={position === 'right' ? 'right' : 'exit'}
      animate={position}
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white text-customBlue p-6 rounded-full w-64 h-64 border-3 border-customBlue flex flex-col justify-center items-center text-center shadow-xl">
        <h3 className="font-bold mb-2 text-lg">{testimonial.name}</h3>
        <div className="overflow-y-auto h-36 scrollbar-hide px-2">
          <p className="text-sm font-semibold leading-relaxed">
            {testimonial.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setVisibleTestimonials([
      testimonials[(currentIndex - 1 + testimonials.length) % testimonials.length],
      testimonials[currentIndex],
      testimonials[(currentIndex + 1) % testimonials.length],
    ]);
  }, [currentIndex]);

  return (
    <div className="relative bg-white text-customBlue py-16 px-4 overflow-hidden">
      <FloatingIcon Icon={GraduationCap} position="top-4 right-4" />
      <FloatingIcon Icon={Book} position="bottom-4 left-4" />
      <FloatingIcon Icon={Globe} position="bottom-4 right-4" />

      <h2 className="text-4xl font-bold text-center mb-12">WHAT OUR CLIENTS SAY ABOUT US</h2>
      
      <div className="relative w-full h-96 overflow-hidden">
        <AnimatePresence initial={false}>
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCircle
              key={testimonial.id}
              testimonial={testimonial}
              position={index === 0 ? 'left' : index === 1 ? 'center' : 'right'}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingTestimonials;