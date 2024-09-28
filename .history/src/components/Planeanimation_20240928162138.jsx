import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');
    const infoText = document.querySelectorAll('.infoText');
    console.log(infoText) // Select all infoText elements

    // Animate the plane from left to center with zoom-in effect
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.8 }, // Start with a smaller plane size
      {
        x: window.innerWidth / 2 - 150, // Move the plane to the center of the screen
        scale: 1.5, // Bigger zoom-in effect
        duration: 4,
        ease: 'power3.inOut',
        onComplete: () => {
          
          // Animate the info text from below the plane
          gsap.to(infoText, {
            opacity: 1,
            y: -50, // Move upwards from below
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.5,
            onComplete: () => {
              infoText.forEach((el) => el.classList)
            }
          });

          // Move the plane to the right and zoom out
          gsap.to(plane, {
            x: window.innerWidth + 300, // Move out to the right of the screen
            scale: 1, // Slight zoom out for a smooth exit
            duration: 4,
            ease: 'power3.inOut',
            delay: 5, // Delay to allow text to be visible for a while
          });

          // Slide and hide the info text as the plane leaves
          gsap.to(infoText, {
            x: -300, // Slide text to the left off-screen
            opacity: 0,
            duration: 2, // Slightly longer duration for a smoother slide
            ease: 'power3.inOut',
            delay: 4.5, // Delays hiding the text slightly before the plane leaves
          });
        },
      }
    );
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-customBlue to-customYellow overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" />

      {/* Animated Plane */}
      <div className="plane absolute w-120 h-auto top-1/3 left-0 transform"> {/* Larger plane */}
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text that appears below the plane */}
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-white text-center"> {/* Position text below the plane */}
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold infoText opacity-0">
          Welcome to D2 Global Immigration!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl infoText opacity-0">
          Your trusted partner in navigating immigration and global opportunities.
        </p>

        {/* Additional Information */}
        <p className="mt-2 text-lg infoText opacity-0">
          Let us help you achieve your dreams of studying, working, or living abroad.
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 px-8 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 opacity-0 infoText">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
