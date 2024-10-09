import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ResultsSlideshow = ({ images = [
    '/tour1.jpg',
    '/tour2.jpg',
    '/tour3.jpg'
  ] 
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,  // Show 2 slides on medium screens
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,  // Show 1 slide on smaller screens
        }
      }
    ]
  };

  if (images.length === 0) {
    return (
      <div className="bg-white p-4 w-full mx-auto">
        <h2 className="text-2xl font-semibold text-center text-customBlue mb-4">
          OUR RESULTS - OUR TESTIMONIALS
        </h2>
        <p className="text-center text-gray-600">No images available to display.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-customBlue to-white p-6 w-full mx-auto">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">
        OUR RESULTS - OUR TESTIMONIALS
      </h2>
      <div className="h-[200px] sm:h-[300px] md:h-[350px] max-w-[80%] mx-auto relative"> {/* Reduced heights & width */}
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2 sm:px-4 focus:outline-none">
              <div className="transform transition-all duration-300 hover:scale-105 border-4 border-gray-200 shadow-lg rounded-md overflow-hidden">  {/* Added frame */}
                <img
                  src={image}
                  alt={`Result ${index + 1}`}
                  className="w-full h-[150px] sm:h-[250px] md:h-[300px] object-cover rounded-lg"  // Smaller size
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 bg-customYellow text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-opacity-80 transition-all duration-300"
  >
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 bg-customYellow text-white p-2 sm:p-3 rounded-full shadow-md hover:bg-opacity-80 transition-all duration-300"
  >
    <ChevronRight size={24} />
  </button>
);

export default ResultsSlideshow;
