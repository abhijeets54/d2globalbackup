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
              className={`${index === 0 ? 'active' : ''} w-3 h-3 rounded-full bg-white bg-opacity-50 mx-2 transition-all duration-300 hover:bg-opacity-100`}
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
            // <div key={index} className="carousel-item">
            //   <div className="relative h-screen">
            //     <img
            //       src={slide.image}
            //       className="d-block w-full h-full object-cover"
            //       alt={slide.title}
            //     />
            //     <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 flex flex-col justify-center items-center">
            //       <motion.div 
            //         className="text-center text-white px-4 max-w-3xl"
            //         initial={{ opacity: 0, y: 50 }}
            //         animate={{ opacity: 1, y: 0 }}
            //         transition={{ duration: 0.5 }}
            //       >
            //         <h5 className="text-5xl md:text-7xl font-bold mb-6 text-customYellow">{slide.title}</h5>
            //         <p className="mb-8 text-xl md:text-3xl font-light">{slide.description}</p>
            //         <button
            //           className="px-8 py-4 bg-customBlue text-white rounded-full text-lg md:text-xl font-semibold flex items-center justify-center mx-auto hover:bg-customYellow hover:text-customBlue transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            //           onClick={() => navigate(slide.link)}
            //         >
            //           {slide.buttonText}
            //           <FaArrowRight className="ml-3" />
            //         </button>
            //       </motion.div>
            //     </div>
            //   </div>
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
            className="w-14 h-14 flex items-center justify-center rounded-full bg-customBlue/80 hover:bg-customYellow text-white hover:text-customBlue transition-all duration-300 shadow-md hover:shadow-lg"
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