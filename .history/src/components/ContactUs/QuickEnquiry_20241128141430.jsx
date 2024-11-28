import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const QuickEnquiry = () => {
  const form = useRef(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const toggleForm = () => {
    setIsOpen(!isOpen);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    emailjs
      .sendForm('service_3x7bjfj', 'template_530xg64', form.current, 'I7UB0PZBIaKgzxane')
      .then(
        () => {
          setName('');
          setEmail('');
          setSubject('');
          setPhone('');
          setMessage('');
          setCountry('');
          setSuccessMessage('Your message was sent successfully! We will get back to you very soon.');
        },
        (error) => {
          setErrorMessage('Failed to send message. Please try again later.');
          console.log('FAILED...', error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="fixed left-0 top-0 h-full flex items-center z-50">
      {/* Quick Enquiry Button */}
      <div 
        className="quick-enquiry-btn cursor-pointer flex items-center justify-center h-24 w-8 md:w-10 rounded-r-lg"
        onClick={toggleForm}
      >
        <span className="transform -rotate-90 font-bold text-xs sm:text-sm whitespace-nowrap">ENQUIRE NOW</span>
      </div>

      {/* Rest of the component remains the same */}
      <div
        className={`fixed left-0 top-0 h-full w-full sm:w-80 md:w-96 lg:w-96 bg-white shadow-lg transition-transform duration-500 flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Previous form content remains unchanged */}
      </div>
    </div>
  );
};

export default QuickEnquiry;

{/* Add this to your global CSS file or as a style tag */}
<style>
{`
.quick-enquiry-btn {
  position: relative;
  border: 1px solid rgb(61, 106, 255);
  background: transparent;
  color: #fff;
  overflow: hidden;
  box-shadow: 0 0 0 0 transparent;
  transition: all 0.2s ease-in;
}

.quick-enquiry-btn {
  background: rgb(61, 106, 255);
}

.quick-enquiry-btn::before {
  content: '';
  display: block;
  width: 0px;
  height: 86%;
  position: absolute;
  top: 7%;
  left: 0%;
  opacity: 0;
  background: #fff;
  box-shadow: 0 0 50px 30px #fff;
  transform: skewX(-20deg);
}

.quick-enquiry-btn:hover {
  background: rgb(61, 106, 255);
  box-shadow: 0 0 30px 5px rgba(0, 142, 236, 0.815);
  transition: all 0.2s ease-out;
}

.quick-enquiry-btn:hover::before {
  animation: sh02 0.5s 0s linear;
}

@keyframes sh02 {
  from {
    opacity: 0;
    left: 0%;
  }
  50% {
    opacity: 1;
  }
  to {
    opacity: 0;
    left: 100%;
  }
}

.quick-enquiry-btn:active {
  box-shadow: 0 0 0 0 transparent;
  transition: box-shadow 0.2s ease-in;
}
`}
</style>