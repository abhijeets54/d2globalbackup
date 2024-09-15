import React, { useState, useEffect, useRef } from 'react';

const timelineData = [
  { year: 'Study Visa'},
  { year: 'Tourist Visa'},
  { year: 'Permanent Residency'},
  { year: 'Spouse Visa', text: 'Description for Spouse Visa.' },
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
            className="relative flex flex-col items-center mb-40 w-full max-w-xs sm:max-w-md md:max-w-lg mx-auto"
          >
            {/* Dot */}
            <div
              className={`w-5 h-5 rounded-full transition-colors duration-300 ${
                activeIndex === index ? 'bg-yellow-500' : 'bg-gray-300'
              }`}
            ></div>

            {/* Sliding content */}
            {activeIndex === index && (
              <div
                className={`absolute p-4 bg-white border border-yellow-500 rounded-lg shadow-lg w-64 md:w-72 lg:w-80 transform transition-transform duration-500 ${
                  index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'
                }`}
              >
                <h4 className="text-lg font-semibold mb-2">{item.year}</h4>
              
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
