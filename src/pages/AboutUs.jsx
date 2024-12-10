import React from 'react';
import { useNavigate } from 'react-router-dom';
import VisionMissionValues from '../components/Vision';
import Choose from '../components/Choose';
import QuickNumbers from '../components/QuickNumbers';
import OurAssociates from '../components/OurAssociates';
import WorldMapContact from '../components/ContactSystem';
import Timeline from '../components/Timeline';
import ApprovedBy from '../components/ApprovedBy'; // New import

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function AboutUs() {
  const navigate = useNavigate();
  
  // Array of logo paths - replace with your actual logo paths
  const approvedLogos = [
    '/approved/icef.png',
    '/approved/idp.png',
    '/approved/govt.svg',
    '/approved/bc.png'
  ];

  return (
    <>
      <div className='pt-20 bg-white'>
        {/* About Section */}
        <div className="flex items-center justify-center bg-white py-12 md:py-16">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
            {/* Text Content */}
            <div className="mt-8 md:mt-0 md:mr-10 max-w-lg text-left md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Welcome to D2 Global
              </h2>
              <p className="text-base md:text-lg text-justify text-black">
                With extensive experience in the immigration industry since 2015, Mr. Amar Dev founded D2 Global with a clear vision to provide students with comprehensive guidance for pursuing higher education abroad. Having studied Business Management at SAIT, Alberta, Canada and having worked with Scotiabank and Shaw Cables in sales and management, Mr. Dev brings valuable expertise to the company. Deeply rooted in Punjab, his strong connection to the community inspires his commitment to help individuals achieve their academic and professional aspirations across the globe.
              </p>
            </div>
            
            {/* Image */}
            <div className="mt-8 md:mt-0">
              <img
                src="amar.webp"
                alt="Profile"
                className="rounded-full shadow-lg w-48 h-48 md:w-64 md:h-64 object-cover object-top mx-auto md:mx-0"
                style={{ objectPosition: 'top center' }}
              />
            </div>
          </div>
        </div>

        {/* Other Components */}
         {/* New Approved By Section */}
         <ApprovedBy logos={approvedLogos} />
        <Timeline/>
        <VisionMissionValues/>
        <Choose />
        <QuickNumbers />
        <OurAssociates/>
        
       
        
        <WorldMapContact/>
      </div>
    </>
  );
}

export default AboutUs;