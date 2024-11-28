import React from 'react';
import Slider from 'react-slick';
import SlideArrow from './SlideArrow';
import SlideCard from './SlideCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
  'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1587614297882-0954cf37d533?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1586769852044-692d6e3703f0?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1590402494587-44b71d7772f6?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1590402494610-2c378a9114c6?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1590402494764-2c778a0a877a?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1590402494847-efb6fef3def2?auto=format&fit=crop&q=80&w=1000',
];

const ResultsSlideshow: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <SlideArrow direction="prev" />,
    nextArrow: <SlideArrow direction="next" />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="bg-gray-100 py-10 px-4 w-full">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Our Success Papers
      </h2>
      <div className="max-w-[98%] mx-auto">
        <Slider {...settings}>
          {images.map((image, index) => (
            <SlideCard key={index} image={image} index={index} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ResultsSlideshow;