import React, { useState, useEffect, useRef } from 'react';

const timelineData = [
  { year: '2015', event: 'Company Founded', description: 'D2 Global Education and Immigration was founded, driven by a mission to provide students with clear guidance for studying abroad.' },
  { year: '2016', event: 'International Partnerships', description: 'Established partnerships with top educational institutions in the UK, Canada, and Europe, enhancing opportunities for students.' },
  { year: '2019', event: 'Expansion to Canada', description: 'Opened an office in Canada, broadening our presence and services in one of the top study destinations.' },
  { year: '2023', event: '450+ Study Visas Processed', description: 'Achieved a significant milestone by successfully processing over 450 study visas for students in the UK and Canada.' },
  { year: '2024', event: '8th Anniversary', description: 'Celebrated our 8th anniversary, reinforcing our commitment to excellence in visa services and client support.' },
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const timelineRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      timelineRefs.current.forEach((ref, index) => {
        const rect = ref.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center py-10 bg-white">
      {/* Timeline container */}
      <div className="relative w-full max-w-5xl px-4">
        {/* Timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-yellow-500 h-full"></div>

        {timelineData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (timelineRefs.current[index] = el)}
            className="relative flex flex-col items-center mt- mb-60 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
          >
            {/* Dot */}
            <div
              className={`w-5 h-5 rounded-full transition-colors duration-300 ${
                activeIndex >= index ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
            ></div>

            {/* Stay in place once it comes into view */}
            <div
              className={`absolute p-4 bg-white border border-yellow-500 rounded-lg shadow-lg w-64 md:w-72 lg:w-80 transform transition-opacity duration-500 ${
                activeIndex >= index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
              }}
            >
              <h4 className="text-lg font-semibold mb-2">{item.event}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
