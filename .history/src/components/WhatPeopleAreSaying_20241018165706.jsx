import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GraduationCap, Book, Globe, Star } from 'lucide-react';

const testimonials = [
  { id: 1, name: 'Prabhdeep Singh', text: 'Prabhdeep Singh achieved an outstanding score of 7 bands in the IELTS exam after preparing with the expert guidance of D2 Global.' },
  { id: 2, name: 'Navjot Singh', text: 'I am incredibly thankful to D2 Global for their unwavering support throughout my visa process. After facing a refusal, I was disheartened, but D2 Global helped me receive my UK study visa within just one month!' },
  { id: 3, name: 'Angel ishita', text: 'The environment of D2 global is extremely awesome and the way of teaching is very unique and effective. I recommend this institute to those students who wants to achieve their desired scores😊' },
  { id: 4, name: 'Niketan sharma', text: 'I am a student of this reputed organization. In my experience, I enjoyed great facilities as well as competitive and learning environment, which engages me into great skill development.' },
  { id: 5, name: 'Manjot kaur', text: 'My name is manjot kaur and I was getting stuck between 56 to 59 but after coming d2 global, I came to know about effective tips and tricks, which enhanced my scores' },
  { id: 6, name: 'Raman Kaur', text: 'My name is Raman Kaur. I have scored overall 6.5 in IELTS from D2 Global. I am very thankful to Anjali mam and D2 Global for helping me in clearing my IELTS exam.' },
  { id: 7, name: 'Jaskaran kaur', text: 'Here i would like to share my journey in this institution. My experience was very good and i really learn very good things from this institution. I got overall 8 bands from such well honoured institute.' },
  { id: 8, name: 'Jasleen kaur', text: 'It was amazing time to spend with D2 global. I have got to know certain new things from the teachers. The teachers are outstanding behaviour wise and they do their best for students to get good bands.' },
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

const TestimonialCircle = ({ testimonial, index, currentIndex, totalItems }) => {
  const isCenter = index === 0;
  let position = index;
  if (index === totalItems - 1 && currentIndex === 0) {
    position = -1; // Place the last item to the left of the first item
  } else if (currentIndex > 0 && index >= currentIndex) {
    position -= totalItems; // Adjust position for items that should appear on the right
  }

  return (
    <motion.div
      className="absolute transform"
      animate={{
        x: `${position * 300}px`,
        scale: isCenter ? 1.5 : 0.8,
        opacity: isCenter ? 1 : 0.5,
        zIndex: isCenter ? 2 : 1,
      }}
      transition={{ duration: 0.5 }}
    >
      <div className={`bg-white text-customBlue p-6 rounded-full w-64 h-64 border-3 border-customBlue flex flex-col justify-center items-center text-center shadow-xl ${isCenter ? 'z-10' : 'z-0'}`}>
        <div className="flex space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="text-yellow-400" />
          ))}
        </div>
        <h3 className="font-bold mb-2 text-sm">{testimonial.name}</h3>
        <div className="overflow-y-auto h-32 scrollbar-hide px-2">
          <p className="text-xs font-semibold leading-relaxed">
            {testimonial.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedTestimonials, setDisplayedTestimonials] = useState([]);

  useEffect(() => {
    // Create a circular array of testimonials
    const circularTestimonials = [
      ...testimonials.slice(currentIndex),
      ...testimonials.slice(0, currentIndex)
    ];
    setDisplayedTestimonials(circularTestimonials);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white text-customBlue py-16 px-4 overflow-hidden h-[650px]">
      <FloatingIcon Icon={GraduationCap} position="top-4 right-4" />
      <FloatingIcon Icon={Book} position="bottom-1/4 left-4" />
      <FloatingIcon Icon={Globe} position="bottom-1/4 right-4" />

      <h2 className="text-4xl font-bold text-center mb-12">WHAT OUR CLIENTS SAY ABOUT US</h2>

      <div className="relative w-full h-2/3 flex justify-center items-center">
        {displayedTestimonials.map((testimonial, index) => (
          <TestimonialCircle
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            currentIndex={currentIndex}
            totalItems={testimonials.length}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingTestimonials;