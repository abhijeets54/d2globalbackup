import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '/src/wm.json'; // Your Lottie animation file

function Collage() {
  const navigate = useNavigate();
  const carouselRef = useRef(null); // Use ref to access the carousel

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    const plane = document.querySelector('.plane');
    
    // Animate the plane
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.8 },
      {
        x: window.innerWidth / 2 - 240,
        scale: 1.2,
        duration: 4,
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(plane, {
            delay: 2,
            x: window.innerWidth + 300,
            scale: 1,
            duration: 2,
            ease: 'power3.inOut',
            onComplete: () => {
              // Ensure carousel reference exists
              if (carouselRef.current) {
                // Move to the next slide after plane animation completes
                const carouselElement = carouselRef.current;
                const bsCarousel = new window.bootstrap.Carousel(carouselElement);
                bsCarousel.next();  // Move to the next slide
              }
            },
          });
        },
      }
    );
  }, []);
  

  return (
    <div className="relative">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="10000"
        ref={carouselRef} // Attach ref to the carousel
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
         {/* First Slide with gradient background */}
<div className="carousel-item active">
  <div className="relative h-screen bg-gradient-to-r from-customBlue to-customYellow">
    <div className="absolute inset-0 flex flex-col justify-center items-center">
      {/* Plane Animation */}
      <div className="plane absolute w-160 h-180 top-[18%] left-0 z-50 transform">
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Text Content */}
      <div className="text-center text-white px-4 z-20">
        <h4 className="text-3xl md:text-5xl font-serif font-bold mb-2">Where Your Global Dreams Take Flight</h4>
        <p className="mb-4 font-semibold text-2xl">Unlock endless opportunities with global education.</p>
        <p className="text-customYellow font-bold text-2xl">D2 Global Immigration—your partner in worldwide success.</p>

        {/* Contact Us Button */}
        <button
          className="mt-6 px-4 mx-auto py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-3xl text-sm md:text-lg flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105"
          onClick={() => navigate('/Contactpage')}
        >
          Contact Us
          <FaArrowRight className="ml-2 text-customYellow " />
        </button>
      </div>
    </div>
  </div>
</div>


          {/* Second Slide */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/student.webp"
                className="d-block w-full h-full object-cover"
                alt="Student Visa"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className=" text-left font-serif text-white px-4">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4">Student Visa</h5>
                  <p className="mb-6 text-base md:text-lg">Your Gateway to Global Education.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-3xl text-sm md:text-lg flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => navigate('/StudyAbroad')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-customYellow " />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Third Slide */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/tourist.webp"
                className="d-block w-full h-full object-cover"
                alt="Tourist Visa"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-left  font-serif text-white px-4">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4">Tourist Visa</h5>
                  <p className="mb-6 text-base md:text-lg">Your Ticket to Global Adventures.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-3xl text-sm md:text-lg flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => navigate('/TouristVisa')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-customYellow " />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Slide */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/ielts5.webp"
                className="d-block w-full h-full object-cover"
                alt="IELTS"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center font-serif text-white px-4">
                  <h5 className="text-3xl text-left md:text-5xl font-bold mb-4">Language Coaching</h5>
                  <p className="mb-6 text-base text-left md:text-lg">Master English, Unlock the World.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-3xl text-sm md:text-lg flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => navigate('/Training')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-customYellow " />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-customBlue hover:bg-white text-customYellow"
          onClick={() => window.open('https://www.instagram.com/d2globalinfo', '_blank')}
        >
          <FaInstagram className="text-base md:text-2xl" />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-customBlue hover:bg-white text-customYellow"
          onClick={() => window.open('https://www.facebook.com', '_blank')}
        >
          <FaFacebookF className="text-base md:text-2xl" />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-customBlue hover:bg-white text-customYellow"
          onClick={() => window.open('http://www.youtube.com/@D2Global', '_blank')}
        >
          <FaYoutube className="text-base md:text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Collage;
