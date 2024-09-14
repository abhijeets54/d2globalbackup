import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from 'react-icons/fa';

function Collage({ onLearnMore }) {
  const navigate = useNavigate();

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="relative">
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="4000">
        <div className="carousel-indicators">
          {/* Carousel indicators */}
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="relative h-screen">
              <img src="/main.webp" className="d-block w-full h-full object-cover" alt="Study Visa" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4 animate-slide-in">
                  <h4 className="text-3xl md:text-5xl font-bold mb-4">Where Your Future Finds Its Home.</h4>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-blue-950 text-white rounded-3xl text-sm md:text-lg flex items-center justify-center"
                    onClick={onLearnMore}  {/* Call onLearnMore when clicked */}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional slides */}
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-950 hover:bg-gray-600 text-white"
          onClick={() => handleSocialClick('https://www.instagram.com/initiatorsofchange_')}
        >
          <FaInstagram className="text-base md:text-2xl" />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-950 hover:bg-gray-600 text-white"
          onClick={() => handleSocialClick('https://www.facebook.com/initiatorsofchange')}
        >
          <FaFacebookF className="text-base md:text-2xl" />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-950 hover:bg-gray-600 text-white"
          onClick={() => handleSocialClick('https://www.youtube.com/@initiatorsofchange5173')}
        >
          <FaYoutube className="text-base md:text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Collage;
