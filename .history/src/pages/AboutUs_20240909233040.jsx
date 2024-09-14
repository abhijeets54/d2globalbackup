import React, { useEffect, useState, useRef } from 'react';
import { Container, CustomImageList } from '../components';
import QuickNumbers from '../components/QuickNumbers';
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying';
import Events from '../components/Events';
import Choose from '../components/Choose';

const AboutUs = () => {
  const [slideIn, setSlideIn] = useState(false);
  const aboutSectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSlideIn(true);
          }
        });
      },
      {
        threshold: 0.3,
      }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      

            {/* Keeping the other components intact */}
            
            
            <QuickNumbers />
            <Events />
            <WhatPeopleAreSaying />
            
          </div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
