import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const testimonials = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/acCR96OwoUo',
    name: 'Prabhdeep Singh',
    text: 'Prabhdeep Singh achieved an outstanding score of 7 bands in the IELTS exam after preparing with the expert guidance of D2 Global. The personalized coaching, dedicated support, and focused approach helped Prabhdeep excel in all modules of the test, paving the way for his successful journey toward studying abroad.',
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/7VVtLwesd54',
    name: 'Navjot Singh',
    text: '"I am incredibly thankful to D2 Global for their unwavering support throughout my visa process. After facing a refusal, I was disheartened, but the team at D2 Global guided me step by step, ensuring that my documents were perfectly aligned for a successful application. With their expertise, I received my UK study visa within just one month! I can now pursue my dreams of studying abroad, all thanks to D2 Globals dedication and professionalism."',
  },
  // {
  //   id: 3,
  //   videoUrl: 'https://www.youtube.com/embed/BELRwg10mlU',
  //   name: 'Harmanjeet Singh',
  //   text: 'Harmanjeet Singh successfully obtained his UK work permit with the dedicated support of D2 Global. The teams expertise in navigating the visa process and their tailored guidance made it a smooth and stress-free experience, helping Harmanjeet secure his future in the UK',
  // },
];


const WhatPeopleAreSaying = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide using useEffect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="py-8 flex flex-col justify-center items-center bg-customBlue">
      <h2 className="text-center text-2xl text-customYellow font-sans sm:text-3xl lg:text-4xl font-bold mb-6">
        STUDENT TESTIMONIALS - OUR SUCCESS STORIES
      </h2>

      <div className="relative w-full max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Sliding Testimonials */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 flex flex-col lg:flex-row justify-between items-center p-6"
            >
              {/* Left: Responsive YouTube Video */}
              <div className="w-full lg:w-1/2 p-4">
                <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={testimonial.videoUrl}
                    title="Student Testimonial Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>

              {/* Right: Testimonial Text */}
              <div className="w-full lg:w-1/2 p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-gray-700 text-base lg:text-lg">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={prevSlide}
            className="text-2xl text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Previous Slide"
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            onClick={nextSlide}
            className="text-2xl text-gray-700 hover:text-gray-900 focus:outline-none"
            aria-label="Next Slide"
          >
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleAreSaying;
