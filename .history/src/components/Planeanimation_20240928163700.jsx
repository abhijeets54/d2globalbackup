import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');
    const welcomeText = document.querySelector('.welcomeText'); // Select welcome text only
    const subtitleText = document.querySelector('.subtitleText'); // Select subtitle
    const button = document.querySelector('.ctaButton'); // Select the button

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
          // Move the plane to the right and zoom out
          gsap.to(plane, {
            x: window.innerWidth + 300, // Move out to the right of the screen
            scale: 1, // Slight zoom out for a smooth exit
            duration: 4,
            ease: 'power3.inOut',
            delay: 1, // Small delay before the plane leaves
          });

          // Animate the text to slide in after the plane leaves
          gsap.to([welcomeText, subtitleText, button], {
            opacity: 1,
            y: -20, // Move upwards slightly
            duration: 1.5,
            ease: 'power2.out',
            stagger: 0.5, // Stagger each text element for a smooth appearance
            delay: 4.5, // Wait for the plane to leave before showing the text
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

      {/* Info Text that appears after the plane leaves */}
      <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 text-white text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold welcomeText opacity-0">
          Welcome to D2 Global Immigration!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl subtitleText opacity-0">
          Your trusted partner in navigating immigration and global opportunities.
        </p>

        {/* Call to Action Button */}
        <button className="mt-6 px-8 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 opacity-0 ctaButton">
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
