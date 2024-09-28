import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');
    const infoText = document.querySelectorAll('.infoText'); // Select all infoText elements

    // Animate the plane from left to center with zoom-in effect
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.5 }, // Start the plane off-screen to the left
      {
        x: window.innerWidth / 2 - 100, // Move the plane to the center of the screen (adjust width accordingly)
        scale: 1.2, // Zoom in while reaching the center
        duration: 4,
        ease: 'power3.inOut',
        onComplete: () => {
          // Show the info text when the plane reaches the center
          gsap.to(infoText, {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.3, // Stagger each text element for a smooth appearance
          });

          // Move the plane to the right and zoom out
          gsap.to(plane, {
            x: window.innerWidth + 200, // Move out to the right of the screen
            scale: 0.5, // Zoom out while exiting
            duration: 4,
            ease: 'power3.inOut',
            delay: 3, // Delay to allow text to be visible for a while
          });

          // Hide the info text as the plane leaves
          gsap.to(infoText, {
            opacity: 0,
            y: 20,
            duration: 1.5,
            ease: 'power2.in',
            delay: 2.5, // Delays hiding the text slightly before the plane leaves
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
      <div className="plane absolute w-80 h-auto top-1/3 left-0 transform">
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text that appears in the center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold infoText opacity-0">
          Your Journey Starts Here!
        </h1>
        <p className="mt-4 text-lg infoText opacity-0">
          Embark on an adventure to your dream destination.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 opacity-0 infoText">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
