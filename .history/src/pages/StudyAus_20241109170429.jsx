import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import OurAssociates from '../components/OurAssociates';

const points = [
  { title: 'Globally Recognized Universities', description: 'Australia has world-renowned universities and offers internationally accepted qualifications.' },
  { title: 'Lower Studying Cost', description: 'The country has comparably lower tuition costs than many other destinations.' },
  { title: 'Advanced Research', description: 'Emphasis on scientific research and technical resources creates a great academic and working ground for international researchers.' },
  { title: 'Multicultural Environment', description: 'People from different ethnicities join Australian universities and workforce, creating a diverse and robust culture.' },
  { title: 'Similar Education System', description: 'Both India and Australia broadly follow the British system of education, making it easy to get admission without credential evaluation.' },
  { title: 'Work Opportunities', description: 'International students in Australia are allowed to work part-time for up to 48 hours a fortnight.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const StudyAus = () => {
  // ... (previous state and handlers remain the same)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
    country: 'Australia',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [showContactForm, setShowContactForm] = useState(false);
  const form = useRef();

  const handleMapClick = () => {
    setShowContactForm(true);
  };

  const closeContactForm = () => {
    setShowContactForm(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, {
        publicKey: 'I7UB0PZBIaKgzxane',
      })
      .then(
        () => {
          setResponseMessage('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', phone: '', country: 'Australia', message: '' });
        },
        (error) => {
          setResponseMessage('Error submitting form. Please try again.');
          console.log('Failed...', error.text);
        }
      );
  };

  return (
    <>
      {/* ... (previous sections remain the same until Choose Your Destination) */}
      
      {/* Choose Your Destination Section - Reduced vertical spacing */}
      <div 
        className="bg-cover bg-center p-8 md:p-12 lg:p-16 text-white relative" 
        style={{
          backgroundImage: "url('/register/form1.webp')",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          <div className="lg:w-1/2 mb-4 lg:mb-0 text-left"> {/* Reduced margin-bottom */}
            <h2 className="text-2xl md:text-3xl font-bold mb-2"> {/* Reduced margin-bottom */}
              Choose Your Destination
            </h2>
            <p className="text-sm md:text-lg">
              Discover the top locations for your educational journey in Australia. Explore diverse cities with thriving student communities and excellent academic institutions.
            </p>
          </div>

          <div
            className="lg:w-1/2 flex justify-center cursor-pointer" 
            onClick={handleMapClick}
          >
            <img 
              src="/maps/ausmap.png" 
              alt="Map of Australia" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-lg object-contain hover:opacity-90 transition-opacity duration-300" 
            />
          </div>
        </div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
            onClick={closeContactForm}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl shadow-xl w-full max-w-4xl my-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col md:flex-row">
                {/* Form Section */}
                <div className="md:w-3/4 p-6 md:p-8">
                  {/* ... (form content remains the same) ... */}
                </div>

                {/* Address Section - Modified branch headings */}
                <div className="md:w-1/4 bg-customBlue p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-6 text-white">Visit Us Today!</h3>
                  <div className="space-y-6">
                    <div className="text-white">
                      <div className="flex items-start mb-3">
                        <FaMapMarkerAlt className="text-2xl mt-1 mr-2 text-yellow-400" /> {/* Increased icon size and added color */}
                        <div>
                          <p className="font-bold text-lg mb-2 text-yellow-400">Main Branch</p> {/* Modified heading style */}
                          <p className="text-sm text-left leading-relaxed">
                            Maks Shopping Plaza,
                            Dugri Road, Model Town,
                            Ludhiana
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-white">
                      <div className="flex items-start mb-3">
                        <FaMapMarkerAlt className="text-2xl mt-1 mr-2 text-yellow-400" /> {/* Increased icon size and added color */}
                        <div>
                          <p className="font-bold text-lg mb-2 text-yellow-400">Sub Branch</p> {/* Modified heading style */}
                          <p className="text-sm text-left leading-relaxed">
                            Rattan Bazar Adda,
                            Near Hungry Point Restaurant,
                            Jodhan, Ludhiana
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <OurAssociates />
    </>
  );
};

export default StudyAus;