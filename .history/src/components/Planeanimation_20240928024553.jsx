import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');

    // Animate the plane entering, zooming, showing text, and leaving
    gsap.fromTo(
      plane, 
      { x: '-100%', scale: 0.5 }, // Initial state: enter from the left and small
      { 
        x: '50%', // Moves to the center of the screen
        scale: 1.5, // Zoom in while reaching the center
        duration: 4, 
        ease: 'power3.inOut',
        onComplete: () => {
          // After zooming in, show text and then move the plane out to the right
          gsap.to(plane, {
            x: '150%', // Moves out to the right of the screen
            scale: 0.5, // Zoom out while exiting
            duration: 4,
            ease: 'power3.inOut',
            delay: 2, // Delay to allow text to be visible for a while
          });
        },
      }
    );

    // Background Animation (Optional)
    gsap.to('.bg', {
      backgroundPosition: '200% 50%',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });

    // Animate text fade in and out
    gsap.fromTo(
      '.infoText',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power2.out',
        stagger: 1,
        scrollTrigger: {
          trigger: '.infoText',
          start: 'top 80%',
        },
      }
    );

  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-customBlue to-customYellow overflow-hidden">
      {/* Background */}
      <div className="bg absolute inset-0 bg-cover bg-center" />

      {/* Animated Plane */}
      <div className="plane absolute w-80 h-auto top-1/3 left-0 transform">
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text that appears in the center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold infoText opacity-0">
          Your Journey Starts Here!
        </h1>
        <p className="mt-4 text-lg infoText opacity-0 delay-200">
          Embark on an adventure to your dream destination.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 opacity-0 infoText delay-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
