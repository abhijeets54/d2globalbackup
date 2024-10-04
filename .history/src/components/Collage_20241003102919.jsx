import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaArrowRight } from 'react-icons/fa';

function Collage() {
  const navigate = useNavigate();

  const handleDonateClick = (e) => {
    e.stopPropagation();
    navigate('/');
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };



  return (
    <div className="relative">
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
        </div>

        <div className="carousel-inner">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="relative h-screen">
              <img
                src="/main.webp"
                className="d-block w-full h-full object-cover"
                alt="Study Visa"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4 animate-slide-in">
                  <h4 className="text-3xl md:text-5xl font-bold mb-4">Where Your Future Finds Its Home.</h4>
                  
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/student.webp"
                className="d-block w-full h-full object-cover"
                alt="Visitor Visa"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4 animate-slide-in">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4">Student Visa</h5>
                  <p className="mb-6 text-base md:text-lg">Your Gateway to Global Education.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-blue-950 text-white rounded-3xl text-sm md:text-lg flex items-center justify-center"
                    onClick={() => navigate('/StudyAbroad')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/tourist.webp"
                className="d-block w-full h-full object-cover"
                alt="IELTS"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4 animate-slide-in">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4">Tourist Visa</h5>
                  <p className="mb-6 text-base md:text-lg">Your Ticket to Global Adventures.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-blue-950 text-white rounded-3xl text-sm md:text-lg flex items-center justify-center"
                    onClick= {() => navigate('/TouristVisa')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4 */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/ielts.webp"
                className="d-block w-full h-full object-cover"
                alt="Work Permit"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4 animate-slide-in">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4">Training</h5>
                  <p className="mb-6 text-base md:text-lg">Master English, Unlock the World.</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-blue-950 text-white rounded-3xl text-sm md:text-lg flex items-center justify-center"
                    onClick={() => navigate('/Training')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 5 */}
          <div className="carousel-item">
            <div className="relative h-screen">
              <img
                src="/canadaa.webp"
                className="d-block w-full h-full object-cover"
                alt="Spouse Visa"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
                <div className="text-center text-white px-4 animate-slide-in">
                  <h5 className="text-3xl md:text-5xl font-bold mb-4">Permanent Residen</h5>
                  <p className="mb-6 text-base md:text-lg">Study in Canada</p>
                  <button
                    className="px-4 py-2 md:px-6 md:py-3 bg-blue-950 text-white rounded-3xl text-sm md:text-lg flex items-center justify-center"
                    onClick={() => navigate('/StudyCan')}
                  >
                    Learn More
                    <FaArrowRight className="ml-2 text-yellow-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Buttons */}
      <div className="fixed right-4 md:right-10 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-950 hover:bg-white text-yellow-400"
          onClick={() => handleSocialClick('https://www.instagram.com/d2globalinfo?igsh=M244eHMycGdvZDhm')}
        >
          <FaInstagram className="text-base md:text-2xl" />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-950 hover:bg-white text-yellow-400"
          onClick={() => handleSocialClick('https://www.facebook.com/profile.php?id=100013114175614&mibextid=LQQJ4d')}
        >
          <FaFacebookF className="text-base md:text-2xl" />
        </button>
        <button
          className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-blue-950 hover:bg-white text-yellow-400"
          onClick={() => handleSocialClick('http://www.youtube.com/@D2Global')}
        >
          <FaYoutube className="text-base md:text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Collage;