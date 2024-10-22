<motion.button
  className="px-6 py-2 bg-customBlue text-customYellow rounded-full hover:bg-blue-600 transition-colors duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  onClick={() => window.location.href = slides[currentSlide].link}
>
  Learn More
</motion.button>