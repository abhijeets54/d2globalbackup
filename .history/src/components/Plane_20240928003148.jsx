import React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');

    // Animate the plane
    gsap.fromTo(
      plane,
      { x: '-100%', y: '30%', scale: 0.5 }, // Start smaller
      {
        x: '50%', // Center
        scale: 1.5, // Zoom in
        duration: 6,
        ease: 'power1.inOut',
        onComplete: () => {
          gsap.set(plane, { x: '-100%', scale: 0.5 }); // Reset position and size
          // Restart the animation after completion
          gsap.fromTo(
            plane,
            { x: '-100%', y: '30%', scale: 0.5 },
            { x: '50%', scale: 1.5, duration: 6, ease: 'power1.inOut', repeat: -1 }
          );
        },
      }
    );

    // Background Animation
    gsap.to('.bg', {
      backgroundPosition: '200% 50%',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });

  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-customBlue to-blue-600 overflow-hidden">
      <div className="bg absolute inset-0 bg-cover bg-center" />
      <div className="plane absolute w-64 h-auto top-1/3 left-0"> {/* Increased width */}
        <img src="/plane.svg" alt="Plane" className="w-full" />
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">Explore Your Future!</h1>
        <p className="mt-4 text-lg animate-slide-in">Connecting you to opportunities worldwide.</p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 animate-bounce">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
