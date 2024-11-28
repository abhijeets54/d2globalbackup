import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1587614297882-0954cf37d53?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494764-2c778a0a877a?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1590402494847-efb6fef3def2?auto=format&fit=crop&q=80&w=1000",
];

const ResultsSlideshow = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1536, // 2xl breakpoint
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1280, // xl breakpoint
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024, // lg breakpoint
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, // md breakpoint
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640, // sm breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // xs breakpoint
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
                <div className="h-[500px] w-full shadow-xl rounded-lg overflow-hidden">
                  <img
                    src={image}
                    alt={`Success Story ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </Slider>

          {/* Previous Button */}
          <button
            onClick={handlePrevClick}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10 
              bg-white/50 hover:bg-white/75 rounded-full p-2 
              -ml-8 group-hover:opacity-100 opacity-0 transition-all duration-300"
          >
            <ChevronLeft className="text-customBlue" size={64} />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNextClick}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10 
              bg-white/50 hover:bg-white/75 rounded-full p-2 
              -mr-8 group-hover:opacity-100 opacity-0 transition-all duration-300"
          >
            <ChevronRight className="text-customBlue" size={} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsSlideshow;