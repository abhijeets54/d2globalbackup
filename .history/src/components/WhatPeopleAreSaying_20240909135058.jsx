import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const testimonials = [
  {
    id: 1,
    videoUrl: 'https://www.youtube.com/embed/sample_video_1',
    name: 'John Doe',
    text: 'The team at D2 Global helped me with every step of the process. They guided me with my student visa, and now I am successfully studying in Canada. Couldn’t have done it without them!',
  },
  {
    id: 2,
    videoUrl: 'https://www.youtube.com/embed/sample_video_2',
    name: 'Jane Smith',
    text: 'My journey to study abroad was seamless with D2 Global. They assisted me with IELTS coaching and visa application, making the entire process stress-free.',
  },
  {
    id: 3,
    videoUrl: 'https://www.youtube.com/embed/sample_video_3',
    name: 'Michael Brown',
    text: 'Thanks to D2 Global, I successfully obtained my work permit in Australia. Their staff was supportive and knowledgeable throughout the entire process.',
  },
  {
    id: 4,
    videoUrl: 'https://www.youtube.com/embed/sample_video_4',
    name: 'Emily Johnson',
    text: 'Tourist visa application can be confusing, but D2 Global made it easy for me to explore New Zealand. They handled all the paperwork and explained everything clearly.',
  },
  {
    id: 5,
    videoUrl: 'https://www.youtube.com/embed/sample_video_5',
    name: 'David Lee',
    text: 'I got my student visa to study in the UK through D2 Global. Their expertise made everything simple and straightforward. I highly recommend their services.',
  },
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
    <div className="py-8 flex flex-col justify-center items-center bg-white">
      <h2 className="text-center text-2xl font-sans sm:text-3xl lg:text-4xl font-bold mb-6">
        STUDENT TESTIMONIALS - OUR SUCCESS STORIES
      </h2>

      <div className="relative w-full max-w-7xl mx-auto p-6 bg-blue-950 rounded-lg shadow-lg overflow-hidden">
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
                <h3 className="text-xl font-bold text- mb-2">
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
