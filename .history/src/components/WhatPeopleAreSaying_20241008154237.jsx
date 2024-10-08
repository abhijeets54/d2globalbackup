import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Prabhdeep Singh',
    text: 'Prabhdeep Singh achieved an outstanding score of 7 bands in the IELTS exam after preparing with the expert guidance of D2 Global. The personalized coaching, dedicated support, and focused approach helped Prabhdeep excel in all modules of the test, paving the way for his successful journey toward studying abroad.',
  },
  {
    id: 2,
    name: 'Navjot Singh',
    text: 'I am incredibly thankful to D2 Global for their unwavering support throughout my visa process. After facing a refusal, I was disheartened, but the team at D2 Global guided me step by step, ensuring that my documents were perfectly aligned for a successful application. With their expertise, I received my UK study visa within just one month! I can now pursue my dreams of studying abroad, all thanks to D2 Globals dedication and professionalism.',
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
      <div className="relative w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-center items-center h-[600px] md:h-[700px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute w-100 h-100 md:w-96 md:h-96 bg-white rounded-full p-8 shadow-lg flex flex-col justify-center items-center text-center ${
                index % 2 === 0 ? 'left-0' : 'right-0' // Position based on even/odd index
              }`}
              initial={{ y: 0 }}
              animate={{
                y: index === currentTestimonial ? [-20, 0] : 0, // Up and down movement
              }}
              transition={{ duration: 2, repeat: Infinity, yoyo: true }} // Animation settings
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