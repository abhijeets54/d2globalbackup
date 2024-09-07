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
        threshold: 0.3, // Trigger when 10% of the section is in view
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
    navigate('/about-us'); // Change the route according to your routing setup
  };

  return (
    <div ref={aboutSectionRef} className="flex items-center justify-center bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Sliding Text Content */}
        <div
          className={`transform transition-transform duration-1000 ${
            slideIn ? 'translate-x-0' : '-translate-x-full'
          } mt-8 md:mt-0 md:mr-10 max-w-lg`}
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Welcome to D2 Global</h2>
          <p className="text-lg text-gray-700">
            Our founder, John Doe, has been instrumental in shaping the vision and mission of
            our organization. With years of experience and a passion for social impact, John
            has driven our initiatives to empower youth and create lasting change in the
            community.
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
          }`}
        >
          <img
            src="https://via.placeholder.com/300x300" 
            alt="Profile"
            className="rounded-full shadow-lg w-64 h-64 object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default About;
