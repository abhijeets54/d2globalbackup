import React from 'react';
import { motion } from 'framer-motion';

const CircleContent = ({ title, content }) => (
  <div className="flex flex-col items-center text-center">
    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4 text-customBlue">
      {title}
    </h2>
    <p className="text-sm md:text-base lg:text-lg text-gray-700">
      {content}
    </p>
  </div>
);

const AnimatedCircle = ({ children, delay }) => (
  <motion.div
    className="relative w-full aspect-square"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <motion.div
      className="absolute inset-0 border-4 border-customBlue rounded-full"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
    />
    <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 lg:p-8">
      {children}
    </div>
  </motion.div>
);

const VisionMissionValues = () => {
  return (
    <div className="bg-white p-4 md:p-8 lg:p-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
        <AnimatedCircle delay={0}>
          <CircleContent
            title="OUR VISION"
            content="To shape a better future by transforming everyday life and building the life of tomorrow. today !"
          />
        </AnimatedCircle>
        <AnimatedCircle delay={0.2}>
          <CircleContent
            title="OUR MISSION"
            content="To simplify immigration processes and ensure success for individuals and businesses through expert guidance and dedicated service."
          />
        </AnimatedCircle>
        <AnimatedCircle delay={0.4}>
          <CircleContent
            title="OUR VALUES"
            content="Integrity in every action.
              Excellence in service delivery.
              Commitment to client success.
              Innovation in solving challenges."
          />
        </AnimatedCircle>
      </div>
    </div>
  );
};

export default VisionMissionValues;
