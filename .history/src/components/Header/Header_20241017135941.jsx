import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const customStyles = `
  .hexagon-logo {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  }

  @keyframes slideDown {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .slide-down {
    animation: slideDown 0.3s ease-out forwards;
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

      <header className="bg-customBlue text-customYellow relative shadow-md">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center relative min-h-[80px]">
            
            {/* Logo and Company Name */}
            <div className="flex items-center relative flex-shrink-0 w-full lg:w-auto mb-4 lg:mb-0">
              {/* Hexagon Logo container */}
              <div className="hexagon-logo absolute w-[80px] h-[92px] bg-[#051b38] top-6 left-4 md:w-[100px] md:h-[115px] md:top-8 md:left-10 lg:w-[120px] lg:h-[138px] lg:top-4 lg:left-20 flex justify-center items-center shadow-inner z-20">
                <img src="/logo.png" alt="D2 Global Logo" className="w-[85%] h-auto object-contain" />
              </div>
              {/* Company Name */}
              <div className="ml-8 md:ml-16 lg:ml-32 xl:ml-44 text-left px-4 -mb-4 pt-2">
                <div className="text-2xl font-bold text-[#FFD700]">D2 Global</div>
                <div className="text-base text-white">Education and Immigration</div>
              </div>
            </div>

            {/* Contact Info and Navigation */}
            <div className="flex flex-col items-center lg:items-end space-y-2">
              {/* Contact Info */}
              <div className="flex space-x-4 mr-4 md:mr-16 lg:mr-40 xl:mr-80 text-sm">
                <a href="mailto:info@d2global.com" className="flex items-center">
                  <FaEnvelope className="mr-1" />
                  info@d2global.com
                </a>
                <a href="tel:+919878990455" className="flex items-center">
                  <FaPhone className="mr-1 rotate-90" />
                  +91 98789 90455
                </a>
              </div>

              {/* Desktop Menu */}
              <nav className="hidden lg:block">
                <ul className="flex space-x-4">
                  {navItems.map((item, index) => (
                    <li key={item.name} className="relative group">
                      <button
                        onClick={() =>
                          item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                        }
                        className={`px-2 py-1 text-sm ${
                          location.pathname === item.slug ? 'font-bold' : 'hover:font-bold'
                        } transition-all duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && (
                        <ul className="absolute hidden group-hover:block right-0 mt-1 w-40 bg-customBlue shadow-lg z-50 text-customYellow">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <button
                                onClick={() => handleNavigation(subItem.slug)}
                                className={`block px-3 py-1 w-full text-left text-sm hover:bg-blue-900 ${
                                  location.pathname === subItem.slug ? 'font-bold' : ''
                                }`}
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
              </nav>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="lg:hidden absolute top-2 right-2">
              <button onClick={toggleMenu} className="text-customYellow focus:outline-none">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-customBlue shadow-md z-40 text-customYellow slide-down">
          <ul className="flex flex-col items-center space-y-2 py-3">
            {navItems.map((item, index) => (
              <li key={item.name} className="w-full">
                <button
                  onClick={() =>
                    item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                  }
                  className={`w-full text-left px-4 py-2 text-sm ${
                    location.pathname === item.slug ? 'font-bold' : ''
                  }`}
                >
                  {item.name}
                </button>

                {item.dropdown && activeDropdown === index && (
                  <ul className="bg-blue-900 w-full">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <button
                          onClick={() => handleNavigation(subItem.slug)}
                          className={`block px-6 py-1 w-full text-left text-xs ${
                            location.pathname === subItem.slug ? 'font-bold' : ''
                          }`}
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
        </div>
      )}
    </>
  );
}

export default Header;