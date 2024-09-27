import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const planePath = [
  { x: '0%', y: '0%' },
  { x: '100%', y: '25%' },
  { x: '0%', y: '50%' },
  { x: '100%', y: '75%' },
  { x: '0%', y: '100%' },
];

const droppingElements = [
  { type: 'text', content: 'Expert Guidance', delay: 1 },
  { type: 'image', src: 'https://assets.vercel.com/image/upload/v1689795055/contentful/image/e5382hct74si/2jtJBvKVTOXJVGZf0Ggx2F/b9e9c9f0e9e9f9f9f9f9f9f9f9f9f9f9/visa.png', alt: 'Visa', delay: 2 },
  { type: 'text', content: 'Global Reach', delay: 3 },
  { type: 'image', src: 'https://assets.vercel.com/image/upload/v1689795055/contentful/image/e5382hct74si/2jtJBvKVTOXJVGZf0Ggx2F/b9e9c9f0e9e9f9f9f9f9f9f9f9f9f9f9/passport.png', alt: 'Passport', delay: 4 },
  { type: 'text', content: 'Tailored Solutions', delay: 5 },
  { type: 'image', src: 'https://assets.vercel.com/image/upload/v1689795055/contentful/image/e5382hct74si/2jtJBvKVTOXJVGZf0Ggx2F/b9e9c9f0e9e9f9f9f9f9f9f9f9f9f9f9/globe.png', alt: 'Globe', delay: 6 },
];

const AnimatedPlaneIntro = () => {
  const planeControls = useAnimation();
  const dropControls = useAnimation();

  useEffect(() => {
    const animatePlane = async () => {
      while (true) {
        for (const position of planePath) {
          await planeControls.start({
            x: position.x,
            y: position.y,
            transition: { duration: 5, ease: "easeInOut" }
          });
        }
      }
    };

    const animateDrops = async () => {
      await dropControls.start(i => ({
        y: ['0%', '100%'],
        opacity: [0, 1, 0],
        transition: { delay: i * 2, duration: 2, ease: "easeInOut" }
      }));
    };

    animatePlane();
    animateDrops();
  }, [planeControls, dropControls]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-400 to-sky-200 overflow-hidden">
      <motion.div
        animate={planeControls}
        className="absolute z-10"
        style={{ width: '60%', height: '60%' }}
      >
        <img
          src="/plane.png"
          alt="D2 Global Plane"
          className="w-full h-full object-contain"
        />
        
        {droppingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              top: `${(index % 3) * 33 + 10}%`,
              left: `${Math.floor(index / 3) * 50 + 25}%`,
            }}
            custom={index}
            animate={dropControls}
          >
            {element.type === 'text' ? (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-xl font-bold text-sky-600">{element.content}</p>
              </div>
            ) : (
              <img src={element.src} alt={element.alt} className="w-16 h-16 object-contain" />
            )}
          </motion.div>
        ))}
      </motion.div>

      <div className="relative z-20 container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Welcome to D2 Global
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          Your Journey to a New Life Starts Here
        </motion.p>
        <motion.button
          className="bg-white text-sky-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-sky-100 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Adventure
        </motion.button>
      </div>

      <motion.div
        className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 5, duration: 1 }}
      >
        <h2 className="text-xl font-bold text-sky-600 mb-2">Our Services</h2>
        <ul className="text-sm text-gray-600 list-disc list-inside">
          <li>Visa Applications</li>
          <li>Work Permits</li>
          <li>Citizenship</li>
          <li>Family Reunification</li>
        </ul>
      </motion.div>

      
    </div>
  );
};

export default AnimatedPlaneIntro;