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
      <header className="bg-customBlue text-customYellow py-2">
        <Container>
          <div className="flex justify-between items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center flex-shrink-0">
              <button onClick={() => navigate('/')} className="focus:outline-none">
                {/* Adjust logo size */}
                <Logo className="w-16 h-16 object-contain" />
              </button>
              <div className="ml-3 text-customYellow text-left">
                {/* Adjust text size */}
                <p className="text-xl lg:text-3xl font-semibold">D2 Global</p>
                <p className="text-md lg:text-lg">Education and Immigration</p>
              </div>
            </div>

            {/* Contact Info and Social Media */}
            <div className="flex items-center space-x-10">
              <div className="flex flex-col items-end">
                <div className="flex flex-col items-center mb-2">
                  <p className="text-sm">Email us</p>
                  <p className="flex items-center space-x-2 text-lg">
                    <FaEnvelope className="inline-block text-2xl" />
                    <a href="mailto:info@d2global.com" className="">
                      info@d2global.com
                    </
