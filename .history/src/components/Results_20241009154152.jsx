import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ResultsSlideshow = ({ images = [] }) => {
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
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  if (images.length === 0) {
    return (
      <div className="bg-white p-8 w- mx-auto">
        <h2 className="text-3xl font-bold text-center text-customBlue mb-8">
          OUR RESULTS - OUR TESTIMONIALS
        </h2>
        <p className="text-center text-gray-600">No images available to display.</p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-customBlue mb-8">
        OUR RESULTS - OUR TESTIMONIALS
      </h2>
      <div className="h-[450px]">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`Result ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
              />
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
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-customYellow text-white p-2 rounded-full shadow-md hover:bg-opacity-80 transition-all duration-300"
  >
    <ChevronLeft size={24} />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-customYellow text-white p-2 rounded-full shadow-md hover:bg-opacity-80 transition-all duration-300"
  >
    <ChevronRight size={24} />
  </button>
);

export default ResultsSlideshow;