import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { useNavigate } from 'react-router-dom'; // Use `useNavigate` hook instead of `Navigate` component

const PlaneAnimation = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  useEffect(() => {
    const plane = document.querySelector('.plane');

    // Animate the plane from left to right, continuously moving without stopping
    gsap.fromTo(
      plane,
      { x: '-300px', scale: 0.8 }, // Start the plane from the left with smaller size
      {
        x: window.innerWidth + 300, // Move the plane out to the right of the screen
        scale: 1, // Smooth size transition
        duration: 4, // Adjust duration for smooth movement
        ease: 'power3.inOut',
      }
    );
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
