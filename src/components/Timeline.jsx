import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Timeline data
const timelineData = [
  { year: '2015', event: 'Company Founded', description: 'D2 Global Education and Immigration was founded, driven by a mission to provide students with clear guidance for studying abroad.' },
  { year: '2016', event: 'International Partnerships', description: 'Established partnerships with top educational institutions in the UK, Canada, and Europe, enhancing opportunities for students.' },
  { year: '2019', event: 'Expansion to Canada', description: 'Opened an office in Canada, broadening our presence and services in one of the top study destinations.' },
  { year: '2023', event: '450+ Study Visas Processed', description: 'Achieved a significant milestone by successfully processing over 450 study visas for students in the UK and Canada.' },
  { year: '2024', event: '8th Anniversary', description: 'Celebrated our 8th anniversary, reinforcing our commitment to excellence in visa services and client support.' },
];

const HorizontalTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Function to increment to the next event
  const nextEvent = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % timelineData.length);
  };

  const prevEvent = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Automatically move to the next event every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextEvent();
    }, 5000); // Change slide every 3 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-customBlue">
      <div className="relative w-full max-w-4xl px-4 flex flex-col items-center">
        {/* Animated Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-2 bg-customYellow rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(activeIndex + 1) * (100 / timelineData.length)}%` }}
          transition={{ duration: 0.5 }}
        />

        {/* Timeline Cards */}
        <div className="flex items-center justify-between w-full mt-20">
          <button
            onClick={prevEvent}
            disabled={activeIndex === 0}
            className="p-2 bg-customYellow text-white rounded-lg"
          >
            Previous
          </button>

          <motion.div
            key={activeIndex}
            className="relative w-3/5 p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-3xl font-bold mb-2">{timelineData[activeIndex].year}</h4>
            <h5 className="text-xl mb-2">{timelineData[activeIndex].event}</h5>
            <p>{timelineData[activeIndex].description}</p>
          </motion.div>

          <button
            onClick={nextEvent}
            disabled={activeIndex === timelineData.length - 1}
            className="p-2 bg-customYellow text-white rounded-lg"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalTimeline;
