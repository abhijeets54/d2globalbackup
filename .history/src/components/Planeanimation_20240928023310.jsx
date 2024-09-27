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
          Connectimport React, { useEffect } from 'react';
import { gsap } from 'gsap';

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');

    // Animate the plane
    gsap.fromTo(plane, 
      { x: '-100%', y: '30%' }, 
      { 
        x: '100%', 
        duration: 6, 
        ease: 'power1.inOut', 
        onComplete: () => {
          gsap.set(plane, { x: '-100%' }); // Reset position for continuous animation
          // Restart the animation after completion
          gsap.fromTo(plane, 
            { x: '-100%', y: '30%' }, 
            { x: '100%', duration: 6, ease: 'power1.inOut', repeat: -1 });
        } 
      }
    );

    // Background Animation (Optional)
    gsap.to('.bg', {
      backgroundPosition: '200% 50%',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });

  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-400 to-blue-600 overflow-hidden">
      <div className="bg absolute inset-0 bg-cover bg-center" />
      <div className="plane absolute w-32 h-auto top-1/3 left-0">
        <img src="/path/to/your/plane-image.png" alt="Plane" className="w-full" />
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold animate-fade-in">Explore Your Future!</h1>
        <p className="mt-4 text-lg animate-fade-in delay-200">Connecting you to opportunities worldwide.</p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
ing you to opportunities worldwide.
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
