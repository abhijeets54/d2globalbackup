import React, { useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, useGLTF } from '@react-three/drei';
import { gsap } from 'gsap';
import ''; // For additional custom animations

// Plane Component with Three.js
const Plane = () => {
  const { scene } = useGLTF('/path/to/plane/model.glb'); // Use your plane GLB file path
  const planeRef = useRef();

  // Plane movement animation using gsap
  useFrame(() => {
    if (planeRef.current) {
      gsap.to(planeRef.current.position, {
        x: 5, // Move plane across the screen
        duration: 6,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    }
  });

  return <primitive object={scene} ref={planeRef} scale={0.5} />;
};

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

      {/* Three.js Canvas for 3D Plane */}
      <Canvas className="relative z-10">
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Plane />
          <OrbitControls enableZoom={false} />
          <Stars />
        </Suspense>
      </Canvas>

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
