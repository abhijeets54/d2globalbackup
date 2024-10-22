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
  {
    id: 4,
    name: 'Niketan sharma',
    text: 'I am a student of this reputed organization. In my experience, I enjoyed great facilities as well as competitive and learning environment, which engages me into great skill development.',
  },
  {
    id: 5,
    name: 'Manjot kaur',
    text: 'My name is manjot kaur and I was getting stuck between 56 to 59 but after coming d2 global, I came to know about effective tips and tricks, which enhanced my scores',
  },
  // ... (other testimonials)
];

const FloatingIcon = ({ Icon, left, top }) => (
  <motion.div
    className="absolute text-customBlue"
    style={{ left: `${left}%`, top: `${top}%` }}
    animate={{ y: [0, -20, 0] }}
    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
  >
    <Icon size={48} />
  </motion.div>
);

const TestimonialCircle = ({ testimonial, index, currentIndex }) => {
  const isCenter = index === 1;
  
  return (
    <motion.div
      className={`absolute top-0 left-0 w-full h-full flex items-center justify-center`}
      initial={{ x: '100%' }}
      animate={{ 
        x: `${(index - 1) * 100}%`,
        scale: isCenter ? 1 : 0.8,
        opacity: isCenter ? 1 : 0.6
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <div className={`bg-white text-customBlue p-8 rounded-full w-80 h-80 border-3 border-customBlue flex flex-col justify-center items-center text-center shadow-xl
                      ${isCenter ? 'z-10' : 'z-0'}`}>
        <h3 className="font-bold mb-4 text-lg">{testimonial.name}</h3>
        <div className="overflow-y-auto h-48 scrollbar-hide px-4">
          <p className="text-base font-semibold leading-relaxed" style={{ fontSize: '14px' }}>
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
      testimonials[(currentIndex + 1) % testimonials.length]
    ]);
  }, [currentIndex]);

  return (
    <div className="relative bg-white text-customBlue py-16 px-4 overflow-hidden">
      <FloatingIcon Icon={GraduationCap} left={85} top={15} />
      <FloatingIcon Icon={Book} left={15} top={80} />
      <FloatingIcon Icon={Globe} left={90} top={75} />

      <h2 className="text-4xl font-bold text-center mb-12">WHAT OUR CLIENTS SAY ABOUT US</h2>
      
      <div className="relative w-full h-96 overflow-hidden">
        <AnimatePresence initial={false}>
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCircle
              key={`${testimonial.id}-${index}`}
              testimonial={testimonial}
              index={index}
              currentIndex={currentIndex}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingTestimonials;