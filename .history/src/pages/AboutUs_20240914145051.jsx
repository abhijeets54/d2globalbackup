import React from 'react';
import { useNavigate } from 'react-router-dom';
import People from '../components/People';
import Choose from '../components/Choose';
import QuickNumbers from '../components/QuickNumbers';
import Events from '../components/Events';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import Register from '../components/Register';
import QuickEnquiry from '../components/ContactUs/QuickEnquiry';
import OurAssociates from '../components/OurAssociates';

function AboutUs() {
  const navigate = useNavigate();



  return (
    <>
    <QuickEnquiry/>
      {/* Copying the paragraph and image from the About component */}
      <div className="flex items-center justify-center bg-gray-100 py-12 md:py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          
          {/* Text Content */}
          <div className="mt-8 md:mt-0 md:mr-10 max-w-lg text-left md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Welcome to D2 Global</h2>
            <p className="text-base md:text-lg text-gray-700">
              With over years of experience in the immigration industry, Mr. Amardeep Singh founded D2 Global with a vision to simplify the immigration process and help individuals achieve their dreams of living, working, and studying abroad. Under his leadership, the company has successfully guided thousands of clients through the complexities of visas, work permits, and permanent residency applications.
            </p>
         
          </div>

          {/* Image */}
          <div className="mt-8 md:mt-0">
            <img
              src="amar.webp" 
              alt="Profile"
              className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-contain mx-auto md:mx-0"
            />
          </div>

        </div>
      </div>

      {/* Other components in the AboutUs page */}
      <People />
      <Choose />
      <QuickNumbers />
      <Events />
      <WhatPeopleAreSaying />
      <Register />
    </>
  );
}

export default AboutUs;
