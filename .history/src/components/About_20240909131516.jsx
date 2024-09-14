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
    navigate('/about-us');
  };

  return (
    <div ref={aboutSectionRef} className="flex items- justify-center bg-gray-100 py-12 md:py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Sliding Text Content */}
        <div
          className={`transform transition-transform duration-1000 ${
            slideIn ? 'translate-x-0' : '-translate-x-full'
          } mt-8 md:mt-0 md:mr-10 max-w-lg text-center md:text-left`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Welcome to D2 Global</h2>
          <p className="text-base md:text-lg text-gray-700">
          With over years of experience in the immigration industry, [Director/Founder/CEO's Name] founded D2 Global with a vision to simplify the immigration process and help individuals achieve their dreams of living, working, and studying abroad. Under his leadership, the company has successfully guided thousands of clients through the complexities of visas, work permits, and permanent residency applications.
          </p>
          
          {/* Read More Button */}
          <button 
            onClick={handleReadMore}
            className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
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
            src="https://via.placeholder.com/300x300" 
            alt="Profile"
            className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover mx-auto md:mx-0"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
