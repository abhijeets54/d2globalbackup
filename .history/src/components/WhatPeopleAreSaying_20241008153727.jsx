import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

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

const FloatingCircularTestimonials = () => {
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
              className={`absolute w-80 h-80 md:w-96 md:h-96 bg-white rounded-full p-8 shadow-lg flex flex-col justify-center items-center text-center ${
                index === currentTestimonial ? 'z-10' : 'z-0'
              }`}
              initial={{ opacity: 0, scale: 0.8, y: 0 }}
              animate={{
                opacity: index === currentTestimonial ? 1 : 0,
                scale: index === currentTestimonial ? 1 : 0.8,
                y: index === currentTestimonial ? [0, -20, 0] : 0,
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <Star className="w-8 h-8 text-customYellow mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-customBlue">{testimonial.name}</h3>
              <div className="overflow-y-auto max-h-[220px] md:max-h-[260px] scrollbar-thin scrollbar-thumb-customBlue scrollbar-track-gray-100">
                <p className="text-base text-gray-600">{testimonial.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center space-x-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentTestimonial ? 'bg-customYellow scale-125' : 'bg-white opacity-50'
            }`}
            onClick={() => setCurrentTestimonial(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingCircularTestimonials;