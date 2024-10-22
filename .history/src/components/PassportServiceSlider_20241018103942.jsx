```javascript
<motion.div
  className="absolute z-30 w-full text-left px-8"
  style={{ top: '30%', left: '8%' }}
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: 'easeOut' }}
>
  <div className="w-full md:w-1/2 text-white space-y-4">
    <h1 className="text-3xl md:text-4xl font-bold">{slide.title}</h1>
    <p className="text-base md:text-lg">{slide.description}</p>
    <button
      onClick={(e) => handleButtonClick(slide.path, e)}
      className="px-6 py-3 bg-customBlue text-white font-semibold rounded-md hover:bg-customYellow transition duration-300 z-40"
      style={{ zIndex: 1000 }} // Add this line
    >
      {slide.buttonText}
    </button>
  </div>
</motion.div>
```