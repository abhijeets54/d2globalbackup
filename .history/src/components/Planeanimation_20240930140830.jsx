import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` hook instead of `Navigate` component

const PlaneAnimation = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const plane = document.querySelector('.plane');

    // Animate the plane from left to right continuously, without stopping or scaling
    gsap.to(plane, {
      x: window.innerWidth + 300, // Move the plane out to the right of the screen
      duration: 2, // Adjust duration for smooth movement
      ease: 'none', // Linear movement (no easing)
      repeat: -1, // Infinite repeat to keep the plane moving continuously
      delay: 0, // Start immediately
    });
  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-customBlue to-customYellow overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center" />

      {/* Animated Plane */}
      <div className="plane absolute w-160 z-50 h-180 top-[18%] left-0 transform">
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold">
          Welcome to D2 Global Immigration!
        </h1>
        <p className="mt-4 text-xl">
          Your trusted partner in navigating immigration and global opportunities.
        </p>

        {/* Call to Action Button */}
        <button
          onClick={() => navigate('/StudyAbroad')} // Use navigate to route
          className="mt-6 px-8 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300"
        >
          Explore Our Services
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
