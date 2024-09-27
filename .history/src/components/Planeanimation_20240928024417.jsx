import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

const PlaneAnimation = () => {
  useEffect(() => {
    const plane = document.querySelector('.plane');

    // Circular Animation for Plane using MotionPathPlugin
    gsap.to(plane, {
      motionPath: {
        path: [
          { x: -300, y: 200 },
          { x: 0, y: 300 },
          { x: 300, y: 200 },
          { x: 0, y: -300 },
          { x: -300, y: 200 }
        ],
        curviness: 1.25,
        autoRotate: true,
      },
      duration: 10,
      ease: 'power1.inOut',
      repeat: -1,
      delay: 1,
    });

    // Drop Text Animation
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

    // Background Animation
    gsap.to('.bg', {
      backgroundPosition: '200% 50%',
      duration: 20,
      ease: 'linear',
      repeat: -1,
    });

  }, []);

  return (
    <div className="relative h-screen bg-gradient-to-r from-customBlue to-customYellow overflow-hidden">
      {/* Background */}
      <div className="bg absolute inset-0 bg-cover bg-center" />

      {/* Animated Plane */}
      <div className="plane absolute w-40 h-auto top-1/3 left-1/2 transform -translate-x-1/2">
        <img src="/plane2.png" alt="Plane" className="w-full" />
      </div>

      {/* Info Text that drops with animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl font-bold infoText">
          Explore Your Future!
        </h1>
        <p className="mt-4 text-lg infoText delay-200">
          Connecting you to opportunities worldwide.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 rounded-full text-white hover:bg-yellow-400 transition duration-300 infoText">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default PlaneAnimation;
