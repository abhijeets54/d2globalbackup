import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/results/result1.webp",
  "/results/result2.webp",
  "/results/result3.webp",
  "/results/result4.webp",
  "/results/result5.webp",
  "/results/result6.webp",
  "/results/result7.webp",
  "/results/result8.webp",
  "/results/result9.webp",
  "/results/result10.webp",
  "/results/result11.webp"
];

const ResultsSlideshow = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    dotsClass: "slick-dots custom-dots",
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Changed from 7 to 6
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1536, // 2xl breakpoint
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="bg-customBlue py-16 px-2 w-full relative">
      <div className="container mx-auto max-w-[95vw]">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-customYellow mb-12">
          Our Success Stories
        </h2>
        <div className="relative group">
          <Slider ref={sliderRef} {...settings}>
            {images.map((image, index) => (
              <div
                key={index}
                className="p-1 focus:outline-none"
              >
                <div className="h-[500px] w-full shadow-xl rounded-xl overflow-hidden">
                  <img
                    src={image}
                    alt={`Success Story ${index + 1}`}
                    className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Previous Button */}
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10
              bg-white/50 hover:bg-white/75 rounded-full p-8
              -ml-8 group-hover:opacity-100 opacity-0 transition-all duration-300"
          >
            <ChevronLeft className="text-customBlue" size={80} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10
              bg-white/50 hover:bg-white/75 rounded-full p-8
              -mr-8 group-hover:opacity-100 opacity-0 transition-all duration-300"
          >
            <ChevronRight className="text-customBlue" size={80} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSlideshow;