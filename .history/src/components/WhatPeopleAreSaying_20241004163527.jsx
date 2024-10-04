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
    text: 'I am incredibly thankful to D2 Global for their unwavering support throughout my visa process. After facing a refusal, I was disheartened, but the team at D2 Global guided me step by step, ensuring that my documents were perfectly aligned for a successful application. With their expertise, I received my UK study visa within just one month!',
  },
  {
    id: 3,
    name: 'Harmanjeet Singh',
    text: 'Harmanjeet Singh successfully obtained his UK work permit with the dedicated support of D2 Global. The team's expertise in navigating the visa process and their tailored guidance made it a smooth and stress-free experience, helping Harmanjeet secure his future in the UK.',
  }
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
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-white mb-12">
          Our Success Stories
        </h2>
        <div className="relative h-[400px] md:h-[500px]">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={`absolute w-64 md:w-80 bg-white rounded-full p-6 shadow-lg ${
                index === currentTestimonial ? 'z-10' : 'z-0'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: index === currentTestimonial ? 1 : 0.3,
                scale: index === currentTestimonial ? 1 : 0.8,
                x: `${(index - currentTestimonial) * 120}%`,
                y: Math.sin((index - currentTestimonial) * Math.PI / 3) * 100,
              }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold mb-2 text-gray-800">{testimonial.name}</h3>
              <p className="text-sm text-gray-600 overflow-hidden line-clamp-6">
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