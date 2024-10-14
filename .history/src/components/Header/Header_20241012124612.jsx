import React, { useState } from 'react';
import { Container, Logo } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone, FaFacebookF, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const customStyles = `
  // ... (previous styles remain unchanged)

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
    // ... (navigation items remain unchanged)
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

      {/* Contact Information Section */}
      <div className="bg-customBlue text-customYellow -mb-4 text-sm">
        <div className="container mx-auto flex justify-between items-center px-4 lg:px-8">
          <div className="flex space-x-6 items-center">
            <p className="flex items-center space-x-2 text-sm lg:text-lg">
              <FaEnvelope className="inline-block text-xl" />
              <a href="mailto:info@d2global.com" className="">
                info@d2global.com
              </a>
            </p>
            <p className="flex items-center space-x-2 text-sm lg:text-lg">
              <FaPhone className="inline-block text-xl" />
              <a href="tel:+919878990455" className="">
                +91 98789 90455
              </a>
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF size={20} color="#1877F2" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaYoutube size={20} color="#FF0000" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram size={20} color="#E4405F" />
            </a>
            <a href="https://wa.me/919878990455" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp size={20} color="#25D366" />
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="shadow bg-customBlue text-customYellow left-0 w-full z-50">
        <Container>
          <nav className="py-2 flex justify-between items-center">
            <div className="flex items-center mr-3 ml-5 w-18 h-18">
              <button onClick={() => navigate('/')} className="focus:outline-none">
                <Logo className="w-full h-full object-contain" />
              </button>

              <div className="ml-3 text-customYellow text-left">
                <p className="text-2xl lg:text-4xl font-semibold">D2 Global</p>
                <p className="text-lg lg:text-lg">Education and Immigration</p>
              </div>
            </div>

            {/* Hamburger Menu */}
            <div className="lg:hidden mr-5">
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
                {/* ... (mobile menu content remains unchanged) */}
              </div>
            )}
          </nav>
        </Container>
      </header>
    </>
  );
}

export default Header;