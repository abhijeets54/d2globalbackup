import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const [slideIn, setSlideIn] = useState(false);
  const aboutSectionRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSlideIn(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  const handleReadMore = () => {
    navigate('/AboutUs');
  };

  return (
    <div ref={aboutSectionRef} className="flex items-center justify-center bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Sliding Text Content */}
        <div
          className={`transform transition-transform duration-1000 ${
            slideIn ? 'translate-x-0' : '-translate-x-full'
          } mt-8 md:mt-0 md:mr-10 max-w-lg text-left md:text-left`}
        >
          <h2 className="text-3xl md:text-4xl  font-bold mb-4 text-gray-900">Welcome to D2 Global</h2>
          <p className="text-base font-merriweather md:text-lg text-gray-700">
          "With years of experience in the immigration sector, I founded D2 Global to simplify the immigration journey for individuals aspiring to study and live abroad. My leadership has guided thousands of clients through complex visa processes, ensuring clear and reliable support at every step in the course."

— Amardeep Singh, Managing Director
          </p>
          
          {/* Read More Button */}
          <button 
            onClick={handleReadMore}
            className="mt-4 inline-block bg-customBlue text-customYellow px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Read More
          </button>
        </div>

      {/* Sliding Image */}
<div
  className={`transform transition-transform duration-1000 ${
    slideIn ? 'translate-x-0' : 'translate-x-full'
  } mt-8 md:mt-0`}
>
  <img
    src="amar.webp" 
    alt="Profile"
    className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover object-top mx-auto md:mx-0"
    style={{ objectPosition: 'top center' }} // This will center the face more
  />
</div>


      </div>
    </div>
  );
};

export default About;
