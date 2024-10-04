import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CollageWithAnimations from './CollageWithAnimations';

function Collage() {
  const navigate = useNavigate();

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  const slideContent = [
    {
      image: '/student.webp',
      title: 'Student Visa',
      description: 'Your Gateway to Global Education',
      buttonText: 'Explore Opportunities',
      link: '/StudyAbroad'
    },
    {
      image: '/tourist.webp',
      title: 'Tourist Visa',
      description: 'Unlock Incredible Travel Experiences',
      buttonText: 'Plan Your Adventure',
      link: '/TouristVisa'
    },
    {
      image: '/ielts.webp',
      title: 'Language Coaching',
      description: 'Master English, Open Global Doors',
      buttonText: 'Boost Your Skills',
      link: '/Training'
    },
    {
      image: '/canadaa.webp',
      title: 'Permanent Residency',
      description: 'Your Path to a New Home Abroad',
      buttonText: 'Start Your Journey',
      link: '/PR'
    }
  ];

  return (
    <div className="relative">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="5000"
      >
        <div className="carousel-indicators">
          {[0, 1, 2, 3, 4].map((index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {/* Slide 1: CollageWithAnimations Component */}
          <div className="carousel-item active">
            <div className="relative h-screen">
              <CollageWithAnimations />
            </div>
          </div>

          {/* Other Slides */}
          {slideContent.map((slide, index) => (
            <div key={index} className="carousel-item">
              <div className="relative h-screen">
                <img
                  src={slide.image}
                  className="d-block w-full h-full object-cover"
                  alt={slide.title}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                  <motion.div 
                    className="text-center text-white px-4"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h5 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h5>
                    <p className="mb-6 text-xl md:text-2xl">{slide.description}</p>
                    <button
                      className="px-6 py-3 bg-customBlue text-customYellow rounded-full text-lg md:text-xl flex items-center justify-center mx-auto hover:bg-customYellow hover:text-customBlue transition-colors duration-300"
                      onClick={() => navigate(slide.link)}
                    >
                      {slide.buttonText}
                      <FaArrowRight className="ml-2" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        {[
          { icon: FaInstagram, url: 'https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm' },
          { icon: FaFacebookF, url: 'https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d' },
          { icon: FaYoutube, url: 'http://www.youtube.com/@D2Global' }
        ].map((social, index) => (
          <motion.button
            key={index}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-customBlue hover:bg-white text-customYellow hover:text-customBlue transition-colors duration-300"
            onClick={() => handleSocialClick(social.url)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <social.icon className="text-2xl" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Collage;