import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1587614297882-0954cf37d533?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494764-2c778a0a877a?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494847-efb6fef3def2?auto=format&fit=crop&q=80&w=1000",
];

const ResultsSlideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 px-4 w-full">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Success Papers
      </h2>
      <div className="max-w-[98%] mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              className="p-2 transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-700">
                    Slide {index + 1}
                  </h3>
                  <p className="text-sm text-gray-500">
                    This is a description for Slide {index + 1}.
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResultsSlideshow;
