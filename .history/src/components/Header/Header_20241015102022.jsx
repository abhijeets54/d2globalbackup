import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const customStyles = `
  .underline-slide {
    position: relative;
    display: inline-block;
    font-weight: normal;
  }

  .underline-slide::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: yellow;
    transition: width 0.3s ease;
  }

  .underline-slide:hover::after {
    width: 100%;
  }

  .underline-slide:hover {
    font-weight: bold;
  }

  .active-page {
    font-weight: bold;
    border: none;
  }

  .mobile-menu-enter {
    transform: translateY(-100%);
    opacity: 0;
    transition: all 0.3s ease-out;
  }

  .mobile-menu-enter-active {
    transform: translateY(0);
    opacity: 1;
  }

  .mobile-menu-exit {
    transform: translateY(0);
    opacity: 1;
    transition: all 0.3s ease-in;
  }

  .mobile-menu-exit-active {
    transform: translateY(-100%);
    opacity: 0;
  }

  .social-icon {
    transition: transform 0.3s ease;
  }

  .social-icon:hover {
    transform: scale(1.1);
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'About Us', slug: '/AboutUs' },
    {
      name: 'Study Abroad',
      slug: '/StudyAbroad',
      dropdown: [
        { name: 'Study in UK', slug: '/StudyUK' },
        { name: 'Study in Canada', slug: '/StudyCan' },
        { name: 'Study in Australia', slug: '/StudyAus' },
        { name: 'Study in USA', slug: '/StudyUSA' },
        { name: 'Study in Europe', slug: '/StudyEurope' },
        { name: 'Study in Dubai', slug: '/StudyDubai' },
      ],
    },
    {
      name: 'Visa',
      slug: '/visa',
      dropdown: [
        { name: 'Study Visa', slug: '/StudyAbroad' },
        { name: 'Visitor Visa', slug: '/VisitorVisa' },
        { name: 'Tourist Visa', slug: '/TouristVisa' },
        { name: 'Permanent Residency', slug: '/PR' },
      ],
    },
    {
      name: 'Language Coaching',
      slug: '/Training',
      dropdown: [
        { name: 'IELTS Coaching', slug: '/IELTSCoaching' },
        { name: 'PTE Coaching', slug: '/PTECoaching' },
      ],
    },
    { name: 'Contact Us', slug: '/Contactpage' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleNavigation = (slug) => {
    navigate(slug);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <style>{customStyles}</style>

      {/* Combined Header Section */}
      <header className="bg-customBlue text-customYellow">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center flex-shrink-0 ml-8">
  <button onClick={() => navigate('/')} className="focus:outline-none">
    <Logo className="w-20 h-20 object-contain" /> {/* Increased size */}
  </button>
  <div className="ml-2 text-customYellow text-left">
    <p className="text-2xl lg:text-4xl font-semibold">D2 Global</p> {/* Increased font size */}
    <p className="text-lg lg:text-xl">Education and Immigration</p> {/* Increased font size */}
  </div>
</div>


            {/* Contact Info and Social Media */}
            <div className="flex items-center space-x-6 mr-80">
              <div className="flex flex-col items-center">
                {/* <p className="text-sm">Email Us</p> */}
                <p className="flex items-center space-x-2 text-lg">
                  <FaEnvelope className="inline-block text-2xl" />
                  <a href="mailto:info@d2global.com" className="">
                    info@d2global.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                {/* <p className="text-sm">Call Us</p> */}
                <p className="flex items-center space-x-2 text-lg">
                  <FaPhone className="inline-block text-2xl" />
                  <a href="tel:+919878990455" className="">
                    +91 98789 90455
                  </a>
                </p>
              </div>
              <div className="flex space-x-3 ml-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaFacebookF size={22} color="#1877F2" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaYoutube size={22} color="#FF0000" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaInstagram size={22} color="#E4405F" />
                </a>
                <a href="https://wa.me/919878990455" target="_blank" rel="noopener noreferrer" className="social-icon">
                  <FaWhatsapp size={22} color="#25D366" />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Navigation Header */}
      <nav className="shadow bg-customBlue text-customYellow left-0 w-full z-50 ">
        <Container>
          <div className="py-2 flex justify-between items-center">
            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-customYellow focus:outline-none">
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex ml-auto">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <button
                    onClick={() =>
                      item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                    }
                    className={`underline-slide inline-block px-6 py-2 lg:py-3 text-lg lg:text-xl duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-48 bg-customBlue shadow-lg z-50 text-customYellow">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-4 py-2 hover:underline hover:text-customYellow w-full text-left text-lg lg:text-xl ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
                          >
                            {subItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="lg:hidden absolute top-16 left-0 w-full bg-customBlue shadow-md z-40 text-customYellow">
                <ul className="flex flex-col items-center space-y-4 py-6">
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`underline-slide inline-block px-6 py-2 duration-200 text-lg ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && activeDropdown === index && (
                        <>
                          <ul className="bg-customBlue shadow-lg z-50 w-full text-customYellow">
                            {item.dropdown.map((subItem) => (
                              <li key={subItem.name}>
                                <button
                                  onClick={() => handleNavigation(subItem.slug)}
                                  className={`block px-4 py-2 hover:underline hover:text-customYellow w-full text-left text-lg ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
                                >
                                  {subItem.name}
                                </button>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => toggleDropdown(index)}
                            className="text-customYellow px-4 py-2 text-sm"
                          >
                            Close
                          </button>
                        </>
                      )}
                    </li>
                  ))}
                </ul>

                {/* Cross (X) button for mobile menu close */}
                <button onClick={toggleMenu} className="text-customYellow px-4 py-2 mt-4">
                  <FaTimes size={28} />
                </button>
              </div>
            )}
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Header;

