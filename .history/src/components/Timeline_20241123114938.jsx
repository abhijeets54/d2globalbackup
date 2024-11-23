import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Timeline data based on provided notes
const timelineData = [
  { 
    year: '2015', 
    event: 'IELTS Certification', 
    description: 'Received IELTS Institute certification, marking the beginning of our expertise in language proficiency and test preparation services.' 
  },
  { 
    year: '2016', 
    event: 'Start of Immi', 
    description: 'Started providing specialized immigration services for Canada, helping students and professionals pursue opportunities in the country.' 
  },
  { 
    year: '2017', 
    event: 'IDP and British Council Certified Trainer', 
    description: 'Achieved certifications from IDP and the British Council as a trainer, enhancing our ability to guide students in achieving their language goals.' 
  },
  { 
    year: '2018', 
    event: 'Immigration in Australia & New Zealand', 
    description: 'Expanded services to include immigration consultancy for Australia and New Zealand, opening new avenues for clients in these regions.' 
  },
  { 
    year: '2019', 
    event: 'Immigration in the UK', 
    description: 'Launched immigration support for the United Kingdom, offering guidance and services to students and professionals interested in moving to the UK.' 
  },
  { 
    year: '2020', 
    event: 'ICEF Certified Agent', 
    description: 'Certified as an ICEF Agent, a mark of our credibility and commitment to providing quality international education consultancy.' 
  },
  { 
    year: '2022', 
    event: 'Immigration in Europe (Schengen)', 
    description: 'Started providing immigration services for European Schengen countries, broadening the scope of opportunities for our clients.' 
  },

 
  { 
    year: '2023', 
    event: 'Indo-Canadian Business Chamber (ICBC) Membership', 
    description: 'Joined the Indo-Canadian Business Chamber (ICBC), strengthening our network and resources to serve our clients better who wish to move to Canada.' 
  },
  { 
    year: '2024', 
    event: 'British Council Certified Agent', 
    description: 'Further reinforced our credentials by becoming a British Council Certified Agent, recognized for our high standards in education services.' 
  },
  
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

  // Automatically move to the next event every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextEvent();
    }, 5000); // Change slide every 5 seconds

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-10 bg-customBlue">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold text-customYellow mb-10">Our Journey</h2>

      <div className="relative w-full max-w-4xl px-4 flex flex-col items-center">
        
        {/* Animated Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-2 bg-customYellow rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${(activeIndex + 1) * (100 / timelineData.length)}%` }}
          transition={{ duration: 2 }}
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
