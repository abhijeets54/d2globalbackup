import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');
    
    // Animate the plane from left to right, passing over the static text
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.8 }, // Start the plane from the left with smaller size
      {
        x: window.innerWidth + 300, // Move out to the right of the screen
        scale: 1.2, // Slight zoom-in effect as it moves over the text
        duration: 4.5,
        ease: 'power3.inOut',
      }
    );
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-customBlue to-customYellow overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" />

      {/* Animated Plane */}
      <div className="plane absolute w-120 h-auto top-1/3 left-0 transform">
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text that stays in the center from the start */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold">
          Welcome to D2 Global Immigration!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl">
          Your trusted partner in navigating immigration and global opportunities.
        </p>

        {/* Additional Information */}
        <p className="mt-2 text-lg">
          Let us help you achieve your dreams of studying, working, or living abroad.
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 px-8 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
