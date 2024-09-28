import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Navigate, useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from 'react-icons/fa';
import Lottie from 'lottie-react';
import animationData from '/src/wm.json'; // Your Lottie animation file

const PlaneAnimation = ({ onAnimationComplete }) => {
  useEffect(() => {
    const plane = document.querySelector('.plane');

    // Animate the plane from left to right, passing above the static text and moving off-screen
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.8 }, // Start the plane from the left with smaller size
      {
        x: window.innerWidth / 2 - 240, // Move to a position slightly before the center
        scale: 1.2, // Slight zoom-in effect as it moves over the text
        duration: 4, // Duration to reach the stopping point
        ease: 'power3.inOut',
        onComplete: () => {
          gsap.to(plane, {
            delay: 1, // Pause for 1 second before continuing
            x: window.innerWidth + 300, // Move out to the right of the screen
            scale: 1, // Slight zoom out for a smooth exit
            duration: 2, // Duration for the plane to leave the screen
            ease: 'power3.inOut',
            onComplete: onAnimationComplete, // Trigger the next slide after the animation ends
          });
        },
      }
    );
  }, [onAnimationComplete]);

  return (
    <div className="plane absolute w-120 z-50 h-160 top-[18%] left-0 transform">
      <img src="/plane2.png" alt="Plane" className="w-full" />
    </div>
  );
};

function Collage() {
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    // Automatically advance the carousel on the first slide after the plane animation completes
    const carousel = document.querySelector('#carouselExampleCaptions');
    const nextSlide = () => {
      const nextButton = document.querySelector('.carousel-control-next');
      if (nextButton) {
        nextButton.click(); // Move to the next slide
      }
    };

    gsap.delayedCall(6, nextSlide); // Fallback to move to the next slide after 6 seconds
  }, []);

  return (
    <div className="relative">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="10000" // Set interval to 10 seconds for slower transitions
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>

        <div className="carousel-inner">
          {/* First Slide with Gradient Background */}
          <div className="carousel-item active">
            <div className="relative h-screen bg-gradient-to-br z-40 from-blue-500 via-purple-600 to-pink-500"> {/* Gradient background */}
              <Lottie options={defaultOptions} className="absolute inset-0 z-10 w-full h-full" />

              {/* Plane Animation */}
              <PlaneAnimation onAnimationComplete={() => {
                const nextButton = document.querySelector('.carousel-control-next');
                if (nextButton) nextButton.click(); // Trigger next slide after animation
              }} />

              <div className="absolute inset-0 z-20 bg-black bg-opacity-40 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4">
                  <h4 className="text-3xl md:text-5xl font-bold mb-2 animate-fade-in">Where Your Future Finds Its Home</h4>
                  <p className="mb-4 animate-slide-in text-lg">Unlock endless opportunities with global education.</p>
                  <p className="text-customYellow text-lg animate-bounce-in">Let us guide you to your dream destination.</p>
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
                <div className="text-center text-white px-4">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Student Visa</h5>
                  <p className="mb-6 text-base md:text-lg animate-slide-in">Your Gateway to Global Education.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-3xl text-sm md:text-lg flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => navigate('/StudyAbroad')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-customYellow animate-bounce" />
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
                <div className="text-center text-white px-4">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Tourist Visa</h5>
                  <p className="mb-6 text-base md:text-lg animate-slide-in">Your Ticket to Global Adventures.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-3xl text-sm md:text-lg flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => navigate('/TouristVisa')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-customYellow animate-bounce" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Slide */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/ielts.webp"
                className="d-block w-full h-full object-cover"
                alt="IELTS"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Training</h5>
                  <p className="mb-6 text-base md:text-lg animate-slide-in">Master English, Unlock the World.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-customBlue text-white rounded-3xl text-sm md:text-lg flex items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105"
                    onClick={() => navigate('/Training')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-customYellow animate-bounce" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Navigation */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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
