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
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (images.length === 0) {
    return (
      <div className="bg-white p-8 w-full mx-auto">
        <h2 className="text-4xl font-bold text-center text-customBlue mb-8">
          OUR RESULTS - OUR TESTIMONIALS
        </h2>
        <p className="text-center text-gray-600">No images available to display.</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-customBlue to-white p-12 w-full mx-auto">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        OUR RESULTS - OUR TESTIMONIALS
      </h2>
      <div className="h-[600px] relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-4 focus:outline-none">
              <div className="transform transition-all duration-300 hover:scale-105">
                <img
                  src={image}
                  alt={`Result ${index + 1}`}
                  className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
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
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-customYellow text-white p-4 rounded-full shadow-md hover:bg-opacity-80 transition-all duration-300"
  >
    <ChevronLeft size={32} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-customYellow text-white p-4 rounded-full shadow-md hover:bg-opacity-80 transition-all duration-300"
  >
    <ChevronRight size={32} />
  </button>
);

export default ResultsSlideshow;