import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import { FaUserAlt, FaPassport, FaPlaneDeparture, FaCheckCircle } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

const data = [
  {
    icon: <FaUserAlt className="h-12 w-12 text-yellow-400 mb-2" />,
    number: 3000,
    label: 'Study Visas'
  },
  {
    icon: <FaPassport className="h-12 w-12 text-yellow-400 mb-2" />,
    number: 1000,
    label: 'Spouse Open Work Visas'
  },
  {
    icon: <FaPlaneDeparture className="h-12 w-12 text-yellow-400 mb-2" />,
    number: 4000,
    label: 'Tourist Visas'
  },
  {
    icon: <FaCheckCircle className="h-12 w-12 text-yellow-400 mb-2" />,
    number: 95,
    label: 'Success Ratio (%)',
    isDecimal: true,
  }
];

function QuickNumbers() {
  const [showCounts, setShowCounts] = useState(false);
  const quickNumbersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowCounts(true);
        }
      },
      { threshold: 0.2 }
    );

    if (quickNumbersRef.current) {
      observer.observe(quickNumbersRef.current);
    }

    return () => {
      if (quickNumbersRef.current) {
        observer.unobserve(quickNumbersRef.current);
      }
    };
  }, []);

  return (
    <div ref={quickNumbersRef} className="bg-customBlue w-full">
      <h2 className="text-center text-2xl sm:text-4xl font-serif font-extrabold text-customYellow pt-5 mb-8">
        QUICK NUMBERS
      </h2>
      
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-24 mt-5 pb-5">
        {data.map((item, index) => (
          <div key={index} className="text-center text-customYellow flex flex-col items-center">
            <div className="quicknumber flex flex-col justify-center items-center">
              <div className="icon mb-2">{item.icon}</div>
              <h3 className="text-2xl sm:text-4xl font-bold font-poppins"> {/* Use custom font here */}
                {showCounts && (
                  <CountUp 
                    end={item.number} 
                    duration={7} 
                    decimals={item.isDecimal ? 2 : 0} 
                    suffix={item.isDecimal ? "%" : "+"} 
                  />
                )}
              </h3>
              <p className="mt-2 text-base sm:text-xl font-mukta"> {/* Use custom font here */}
                {item.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuickNumbers;
