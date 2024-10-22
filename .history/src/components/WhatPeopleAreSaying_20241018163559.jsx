const TestimonialCircle = ({ testimonial, index, currentIndex }) => {
  const isCenter = index === currentIndex;
  const position = index - currentIndex;

  return (
    <motion.div
      className={`absolute transform`}
      animate={{
        x: `${position * 200}px`, // Adjust horizontal spacing between circles
        scale: isCenter ? 1.4 : 0.8, // Highlight the center one with larger scale
        opacity: isCenter ? 1 : 0.5, // Highlight the center one with more opacity
        zIndex: isCenter ? 2 : 1, // Make sure center one is on top
      }}
      transition={{ duration: 0.5 }}
    >
      <div className={`bg-white text-customBlue p-4 rounded-full w-48 h-48 border-3 border-customBlue flex flex-col justify-center items-center text-center shadow-xl ${isCenter ? 'z-10' : 'z-0'}`}>
        <h3 className="font-bold mb-2 text-sm">{testimonial.name}</h3>
        <div className="overflow-y-auto h-24 scrollbar-hide px-2">
          <p className="text-xs font-semibold leading-relaxed">
            {testimonial.text}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const FloatingTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white text-customBlue py-16 px-4 overflow-hidden h-screen">
      <FloatingIcon Icon={GraduationCap} position="top-4 right-4" />
      <FloatingIcon Icon={Book} position="bottom-1/4 left-4" />
      <FloatingIcon Icon={Globe} position="bottom-1/4 right-4" />

      <h2 className="text-4xl font-bold text-center mb-12">WHAT OUR CLIENTS SAY ABOUT US</h2>

      {/* Center the testimonial circles */}
      <div className="relative w-full h-2/3 flex justify-center items-center">
        {testimonials.map((testimonial, index) => (
          <TestimonialCircle
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
            currentIndex={currentIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default FloatingTestimonials;
