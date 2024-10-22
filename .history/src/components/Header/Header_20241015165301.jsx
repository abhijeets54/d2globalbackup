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
  const toggleDropdown = (index) => setActiveDropdown(activeDropdown === index ? null : index);
  const handleNavigation = (slug) => {
    navigate(slug);
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <style>{customStyles}</style>

      <header className="bg-customBlue text-customYellow">
        <Container>
          <div className="flex justify-between items-center py-2"> {/* Reduced padding */}
            <div className="flex items-center flex-shrink-0 ml-4"> {/* Reduced margin */}
              <button onClick={() => navigate('/')} className="focus:outline-none">
                <Logo className="w-16 h-16 object-contain" /> {/* Slightly reduced logo size */}
              </button>
              <div className="ml-2 text-customYellow text-left">
                <p className="text-xl lg:text-2xl font-semibold">D2 Global</p> {/* Reduced font size */}
                <p className="text-sm lg:text-base">Education and Immigration</p> {/* Reduced font size */}
              </div>
            </div>

            <div className="flex items-center space-x-4 mr-4"> {/* Reduced margin and spacing */}
              <div className="hidden md:flex flex-col items-end">
                <p className="flex items-center space-x-1 text-sm"> {/* Reduced font size and spacing */}
                  <FaEnvelope className="inline-block text-lg" />
                  <a href="mailto:info@d2global.com" className="">info@d2global.com</a>
                </p>
                <p className="flex items-center space-x-1 text-sm"> {/* Reduced font size and spacing */}
                  <FaPhone className="inline-block text-lg rotate-90" />
                  <a href="tel:+919878990455" className="">+91 98789 90455</a>
                </p>
              </div>
              <div className="hidden lg:flex items-center space-x-2"> {/* Reduced spacing */}
                <FaFacebookF className="social-icon text-lg" />
                <FaYoutube className="social-icon text-lg" />
                <FaInstagram className="social-icon text-lg" />
                <FaWhatsapp className="social-icon text-lg" />
              </div>
            </div>
          </div>
        </Container>
      </header>

      <nav className="shadow bg-customBlue text-customYellow">
        <Container>
          <div className="py-1 flex justify-between items-center"> {/* Reduced padding */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-customYellow focus:outline-none">
                {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>

            <ul className="hidden lg:flex ml-auto">
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <button
                    onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                    className={`underline-slide inline-block px-3 py-1 text-base duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-48 bg-customBlue shadow-lg z-50 text-customYellow">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-4 py-1 hover:underline hover:text-customYellow w-full text-left text-sm ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
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

            {menuOpen && (
              <div className="lg:hidden absolute top-16 left-0 w-full bg-customBlue shadow-md z-40 text-customYellow">
                <ul className="flex flex-col items-center space-y-2 py-2"> {/* Reduced spacing and padding */}
                  {navItems.map((item, index) => (
                    <li key={item.name}>
                      <button
                        onClick={() => item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)}
                        className={`underline-slide inline-block px-4 py-1 text-sm duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                      >
                        {item.name}
                      </button>

                      {item.dropdown && activeDropdown === index && (
                        <ul className="bg-customBlue shadow-lg z-50 w-full text-customYellow">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name}>
                              <button
                                onClick={() => handleNavigation(subItem.slug)}
                                className={`block px-4 py-1 hover:underline hover:text-customYellow w-full text-left text-xs ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
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
          </div>
        </Container>
      </nav>
    </>
  );
}

export default Header;