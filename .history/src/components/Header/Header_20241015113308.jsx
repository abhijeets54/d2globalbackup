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
  return (
    <>
      <style>{customStyles}</style>

      {/* Combined Header Section */}
      <header className="bg-customBlue text-customYellow py-2"> {/* Reduced padding */}
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center flex-shrink-0 ml-2"> {/* Reduced margin */}
              <button onClick={() => navigate('/')} className="focus:outline-none">
                <Logo className="w-16 h-16 object-contain" /> {/* Slightly reduced size */}
              </button>
              <div className="ml-1 text-customYellow text-left"> {/* Reduced margin */}
                <p className="text-xl lg:text-2xl font-semibold">D2 Global</p> {/* Adjusted font size */}
                <p className="text-sm lg:text-lg">Education and Immigration</p> {/* Adjusted font size */}
              </div>
            </div>

            {/* Contact Info and Social Media */}
            <div className="flex items-center space-x-4 mr-40"> {/* Reduced margin and spacing */}
              <div className="flex flex-col items-center">
                <p className="text-xs">Email Us</p> {/* Smaller text */}
                <p className="flex items-center space-x-2 text-base"> {/* Adjusted text size */}
                  <FaEnvelope className="inline-block text-lg" /> {/* Smaller icon */}
                  <a href="mailto:info@d2global.com" className="">
                    info@d2global.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-xs">Call Us</p> {/* Smaller text */}
                <p className="flex items-center space-x-2 text-base"> {/* Adjusted text size */}
                  <FaPhone className="inline-block text-lg rotate-90" /> {/* Smaller icon */}
                  <a href="tel:+919878990455" className="">
                    +91 98789 90455
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </header>

      {/* Navigation Header */}
      <nav className="shadow bg-customBlue text-customYellow left-0 w-full z-50">
        <Container>
          <div className="py-1 flex justify-between items-center"> {/* Reduced padding */}
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
                    className={`underline-slide inline-block px-4 py-2 text-sm lg:text-base duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
                  >
                    {item.name}
                  </button>

                  {item.dropdown && activeDropdown === index && (
                    <ul className="absolute left-0 mt-1 w-48 bg-customBlue shadow-lg z-50 text-customYellow">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.name}>
                          <button
                            onClick={() => handleNavigation(subItem.slug)}
                            className={`block px-4 py-2 hover:underline hover:text-customYellow w-full text-left text-sm lg:text-base ${location.pathname === subItem.slug ? 'font-bold' : ''}`}
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
        </Container>
      </nav>
    </>
  );
}


export default Header;

