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
  {
    id: 6,
    name: 'Raman Kaur',
    text: 'My name is Raman Kaur. I have scored overall 6.5 in IELTS from D2 Global. I am very thankful to Anjali mam and D2 Global for helping me in clearing my IELTS exam.',
  },
  {
    id: 7,
    name: 'Jaskaran kaur',
    text: 'Here i would like to share my journey in this institution. My experience was very good and i really learn very good things from this institution. I got overall 8 bands from such well honoured institute. Teachers are very experienced, skillful and helpful. They are also very supportive and very determined with their work. I have applied my visa from here. My overall experience was very good.',
  },
  {
    id: 8,
    name: 'Jasleen kaur',
    text: 'It was amazing time to spend with D2 global. I have got to know certain new things from the teachers. The teachers are outstanding behaviour wise and they do their best for students to get good bands. I highly recommend this Institute for IELTS and Visa Process',
  },
  {
    id: 9,
    name: 'Lovi tiwana',
    text: 'Good infrastructure as well environment, teachings methods are really unique. Highly professional teachers and staff members. Provide clear information on each and every aspect whether is Visa or Ielts',
  },
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
      
      <div className="flex justify-center items-center h-[400px]">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="flex justify-center items-center"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="bg-white text-customBlue p-8 rounded-full w-80 h-80 flex flex-col justify-center items-center text-center shadow-lg"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <h3 className="font-bold mb-4 text-lg">{testimonials[currentIndex].name}</h3>
              <p className="text-sm overflow-y-auto h-48 scrollbar-hide">{testimonials[currentIndex].text}</p>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingTestimonials;