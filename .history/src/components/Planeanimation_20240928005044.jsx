import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './PlaneAnimation.css'; // For additional custom animations

// Falling Text Component
const FallingText = ({ text }) => {
  const textRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: '-200%', opacity: 0 },
      { y: '0%', opacity: 1, duration: 2, stagger: 0.5, ease: 'bounce.out' }
    );
  }, []);

  return (
    <h1 ref={textRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
      {text}
    </h1>
  );
};

// Main Animation Component
const PlaneAnimation = () => {
  const backgroundRef = useRef();

  useEffect(() => {
    // Background parallax effect
    gsap.to(backgroundRef.current, {
      backgroundPosition: '200% 50%',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-r from-customBlue to-blue-600">
      {/* Parallax background */}
      <div ref={backgroundRef} className="absolute inset-0 bg-cover bg-center" />

      {/* Embedded 3D Plane Model with iframe */}
      <div className="plane absolute w-2/3 h-auto top-1/4 left-1/2 transform -translate-x-1/2 z-10">
        <iframe 
          src="https://clara.io/embed/a4737c68-a1e8-4a49-a180-93e65f5d131c?renderer=webgl" 
          width="100%" 
          height="400px" 
          allowFullScreen 
          className="border-2 border-gray-300 rounded-lg shadow-lg"
          title="Plane 3D Model"
        ></iframe>
      </div>

      {/* Dropping Text */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center z-20">
        <FallingText text="Explore Your Future!" />
        <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white">
          Connecting you to opportunities worldwide.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 animate-bounce">
          Get Started
        </button>
      </div>

      {/* Optional Particle Effects */}
      <div className="absolute inset-0 pointer-events-none z-10 particles"></div>
    </div>
  );
};

export default PlaneAnimation;
