import React , { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, CustomImageList } from '../components'
import QuickNumbers from '../components/QuickNumbers'
import About from '../components/About'
import WhatPeopleAreSaying from '../components/WhatPeopleAreSaying'
import Events from '../components/Events'

const About = () => {
  const [slideIn, setSlideIn] = useState(false);
  const aboutSectionRef = useRef(null);
  const navigate = useNavigate();

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

  const handleReadMore = () => {
    navigate('/AboutUs');
  };

function AboutUs() {
  return (<>
    <div className="w-full text-center">
      <Container>
        <div className="flex flex-wrap">
          <div className=" w-full">
        
          <QuickNumbers />
          <Events/>
          <WhatPeopleAreSaying />
            <h1 className="text-2xl font-bold hover:text-gray-500 mt-5"></h1>
          </div>
        </div>
      </Container>
    </div>
    </>
  )
}

export default AboutUs
