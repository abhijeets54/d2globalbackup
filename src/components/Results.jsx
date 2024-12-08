import React, { useRef, useState } from "react"; 
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { ChevronLeft, ChevronRight, X } from "lucide-react";  

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
  const [enlargedImage, setEnlargedImage] = useState(null);    

  const settings = {     
    dots: true,     
    dotsClass: "slick-dots custom-dots",     
    infinite: true,     
    speed: 500,     
    slidesToShow: 6,     
    slidesToScroll: 1,     
    autoplay: true,     
    autoplaySpeed: 3000,     
    responsive: [       
      {         
        breakpoint: 1536,         
        settings: {           
          slidesToShow: 5,         
        },       
      },       
      {         
        breakpoint: 1280,         
        settings: {           
          slidesToShow: 4,         
        },       
      },       
      {         
        breakpoint: 1024,         
        settings: {           
          slidesToShow: 3,         
        },       
      },       
      {         
        breakpoint: 768,         
        settings: {           
          slidesToShow: 2,         
        },       
      },       
      {         
        breakpoint: 640,         
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

  const handleImageClick = (image) => {
    setEnlargedImage(image);
  };

  const handleCloseEnlarged = () => {
    setEnlargedImage(null);
  };

  return (     
    <div className="bg-customBlue py-16 px-2 w-full -mb-16 relative">       
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
                <div className="h-[500px] w-full shadow-lg rounded-xl overflow-hidden border-2 border-white/30 transition-all duration-300 hover:shadow-2xl hover:border-white/50 group">                   
                  <img                     
                    src={image}                     
                    alt={`Success Story ${index + 1}`}                     
                    className="w-full h-full object-contain cursor-pointer transition-transform duration-300 group-hover:scale-105"
                    onClick={() => handleImageClick(image)}
                  />                 
                </div>               
              </div>             
            ))}           
          </Slider>            
          
          {/* Previous Button */}           
          <button             
            onClick={handlePrevClick}             
            className="absolute top-1/2 -translate-y-1/2 left-0 z-10               
              bg-white/50 hover:bg-white/75 rounded-full p-12               
              -ml-12 group-hover:opacity-100 opacity-0 transition-all duration-300"           
          >             
            <ChevronLeft className="text-customBlue" size={120} />           
          </button>            
          
          {/* Next Button */}           
          <button             
            onClick={handleNextClick}             
            className="absolute top-1/2 -translate-y-1/2 right-0 z-10               
              bg-white/50 hover:bg-white/75 rounded-full p-12               
              -mr-12 group-hover:opacity-100 opacity-0 transition-all duration-300"           
          >             
            <ChevronRight className="text-customBlue" size={120} />           
          </button>         
        </div>       
      </div>

      {/* Enlarged Image Modal */}
      {enlargedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={handleCloseEnlarged}
        >
          <div className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 z-60 bg-white/20 hover:bg-white/40 rounded-full p-2"
              onClick={handleCloseEnlarged}
            >
              <X className="text-white" size={32} />
            </button>
            <img 
              src={enlargedImage} 
              alt="Enlarged Success Story" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>   
  ); 
};  

export default ResultsSlideshow;