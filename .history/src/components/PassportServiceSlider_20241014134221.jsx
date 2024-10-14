import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FaArrowRight, FaGlobeAmericas, FaPassport, FaPlane, FaGraduationCap, FaHouseUser, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';

// ... (keep existing handleSocialClick and handleWhatsAppClick functions)

const slides = [
  // ... (keep existing slides array)
];

const PassportServiceSlider = () => {
  // ... (keep existing state and functions)

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full bg-center bg-no-repeat transition-transform duration-500 ease-in-out ${
            index === currentSlide 
              ? 'translate-x-0 z-10' 
              : index === (currentSlide - 1 + slides.length) % slides.length 
                ? '-translate-x-full z-0' 
                : 'translate-x-full z-0'
          }`}
          style={{ 
            backgroundImage: `url(${slide.bgImage})`,
            backgroundSize: 'contain',
            backgroundColor: 'white'
          }}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-between p-8">
            <div className="w-full flex justify-between items-center">
              <div className="text-customBlue font-bold text-2xl">D2 GLOBAL</div>
              <nav>
                <ul className="flex space-x-6">
                  <li><a href="#" className="text-customBlue hover:text-customYellow">Home</a></li>
                  <li><a href="#" className="text-customBlue hover:text-customYellow">Services</a></li>
                  <li><a href="#" className="text-customBlue hover:text-customYellow">About Us</a></li>
                  <li><a href="#" className="text-customBlue hover:text-customYellow">Contact</a></li>
                </ul>
              </nav>
            </div>
            <div className="w-full md:w-1/2 text-black self-start">
              <h1 className="text-4xl font-bold mb-4 animate-fadeInUp">{slide.title}</h1>
              <p className="text-lg mb-6 animate-fadeInUp animation-delay-200">{slide.description}</p>
            </div>
            <div className="w-full flex justify-between items-end">
              <div className="text-customBlue">
                <h3 className="font-semibold text-xl mb-2">Our Services</h3>
                <ul className="space-y-2">
                  <li><FaGlobeAmericas className="inline-block mr-2" /> Study Abroad</li>
                  <li><FaPassport className="inline-block mr-2" /> Visa Services</li>
                  <li><FaPlane className="inline-block mr-2" /> Travel Assistance</li>
                  <li><FaGraduationCap className="inline-block mr-2" /> IELTS Training</li>
                </ul>
              </div>
              <div className="text-customBlue text-right">
                <h3 className="font-semibold text-xl mb-2">Contact Us</h3>
                <p>123 Global Street, City, Country</p>
                <p>Phone: +1 234 567 8900</p>
                <p>Email: info@d2global.com</p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ... (keep existing navigation buttons and social media icons) */}
    </div>
  );
};

export default PassportServiceSlider;