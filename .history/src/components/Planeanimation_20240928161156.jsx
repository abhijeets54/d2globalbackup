import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');
    const infoText = document.querySelectorAll('.infoText'); // Select all infoText elements

    // Animate the plane from left to center with zoom-in effect
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.8 }, // Start with a smaller plane size
      {
        x: window.innerWidth / 2 - 150, // Move the plane to the center of the screen
        scale: 1.5, // Bigger zoom in effect
        duration: 4,
        ease: 'power3.inOut',
        onComplete: () => {
          console.log("Plane animation complete, starting text animation...");
          
          // Animate the info text from below the plane
          gsap.to(infoText, {
            opacity: 1,
            y: -50, // Move upwards from below
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.5, // Stagger each text element for a smooth appearance
          });

          // Move the plane to the right and zoom out
          gsap.to(plane, {
            x: window.innerWidth + 300, // Move out to the right of the screen
            scale: 1, // Slight zoom out for a smooth exit
            duration: 4,
            ease: 'power3.inOut',
            delay: 5, // Delay to allow text to be visible for a while
          });

          // Hide the info text as the plane leaves
          gsap.to(infoText, {
            opacity: 0,
            y: -20, // Move further up before hiding
            duration: 1.5,
            ease: 'power2.in',
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
      <div className="plane absolute w-120 h-auto top-1/3 left-0 transform z-10"> {/* Larger plane */}
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text that appears below the plane */}
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-white text-center z-20"> {/* Ensure text is on a higher z-index */}
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
