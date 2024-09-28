import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { Navigate } from 'react-router-dom';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');
    const textContainer = document.querySelector('.textContainer');

    // Apply 3D perspective to the text container
    gsap.set(textContainer, { perspective: 1000 });

    // Animate the plane from left to right, rotating around the text before leaving
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.8, rotationY: 0 }, // Start with the plane on the left
      {
        x: window.innerWidth / 2 - 240, // Stop slightly before the center
        scale: 1.2, // Zoom in effect
        duration: 4,
        ease: 'power3.inOut',
        onComplete: () => {
          // Rotate the plane around the Y-axis
          gsap.to(plane, {
            rotationY: 360, // Rotate the plane around Y-axis
            duration: 2,
            ease: 'power2.inOut',
            onComplete: () => {
              // After rotation, move the plane out of the screen
              gsap.to(plane, {
                delay: 1, // Short pause
                x: window.innerWidth + 300, // Move out to the right of the screen
                scale: 1, // Slight zoom out for smooth exit
                duration: 3,
                ease: 'power3.inOut',
              });
            },
          });
        },
      }
    );
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-customBlue to-customYellow overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" />

      {/* Animated Plane - Positioned slightly lower */}
      <div className="plane absolute w-120 z-50 h-160 top-[18%] left-0 transform">
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text with 3D effect */}
      <div className="textContainer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-serif font-bold transform transition duration-500 hover:rotate-y-10">
          Welcome to D2 Global Immigration!
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-xl transform transition duration-500 hover:rotate-y-5">
          Your trusted partner in navigating immigration and global opportunities.
        </p>

        {/* Call to Action Button */}
        <button
          onClick={() => Navigate('/StudyAbroad')}
          className="mt-6 px-8 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 transform hover:rotate-y-3d"
        >
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
