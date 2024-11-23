import React, { useState } from 'react';
import { Container } from '../index';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';

const customStyles = `
  .hexagon-logo {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    border-radius: 50px;
  }

  @keyframes slideDown {
    0% { transform: translateY(-100%); opacity: 0; }
    100% { transform: translateY(0); opacity: 1; }
  }

  .slide-down {
    animation: slideDown 0.3s ease-out forwards;
  }

  .dropdown-hover > ul {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    transform: translateY(-10px);
  }

  .dropdown-hover:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .sub-dropdown > ul {
    opacity: 0;
    visibility: hidden;
    transition: all 0.2s ease;
    transform: translateX(-10px);
  }

  .sub-dropdown:hover > ul {
    opacity: 1;
    visibility: visible;
    transform: translateX(0);
  }
`;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', slug: '/' },
    { name: 'About Us', slug: '/AboutUs' },
    { name: 'Success Stories', slug: '/SuccessStories' },
    {
      name: 'Visa',
      slug: '/',
      dropdown: [
        { name: 'Study Visa', slug: '/StudyAbroad', subDropdown: [
            { name: 'Study in UK', slug: '/StudyUK' },
            { name: 'Study in Canada', slug: '/StudyCan' },
            { name: 'Study in Australia', slug: '/StudyAus' },
            { name: 'Study in USA', slug: '/StudyUSA' },
            { name: 'Study in Europe', slug: '/StudyEurope' },
            { name: 'Study in Dubai', slug: '/StudyDubai' },
          ] 
        },
        { name: 'Visitor Visa', slug: '/VisitorVisa' },
        { name: 'Tourist Visa', slug: '/TouristVisa' },
        { name: 'Permanent Residency', slug: '/PR' },
      ],
    },
    {
      name: 'Language Coaching',
      slug: '/Training',
      dropdown: [
        { name: 'IELTS', slug: '/IELTSCoaching' },
        { name: 'PTE', slug: '/PTECoaching' },
      ],
    },
    { name: 'Contact Us', slug: '/Contactpage' },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleNavigation = (e, slug) => {
    e.preventDefault();
    navigate(slug);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{customStyles}</style>

      <header className="bg-customBlue text-customYellow relative shadow-md">
        <Container>
          <div className="flex flex-col lg:flex-row justify-between items-center relative min-h-[80px]">
            
            {/* Logo and Company Name */} 
            <div className="flex items-center relative flex-shrink-0 w-full lg:w-auto mb-4 lg:mb-0">
              <button
                onClick={(e) => handleNavigation(e, '/')}
                className="hexagon-logo absolute w-[80px] h-[92px] bg-customBlue top-2 left-4 md:w-[100px] md:h-[115px] md:top-4 md:left-10 lg:w-[120px] lg:h-[138px] lg:top-0 lg:left-20 flex justify-center items-center shadow-xl z-20"
              >
                <img src="/logo.png" alt="D2 Global Logo" className="w-[85%] h-auto object-contain" />
              </button>
              
              <div className="ml-16 md:ml-24 lg:ml-40 xl:ml-48 text-left px-4 pt-2">
  <div className="text-3xl font-bold font-poppins text-customYellow">D2 Global</div>
</div>

            </div>

            <div className="flex flex-col items-center lg:items-end space-y-2">
            <div className="flex space-x-4 mr-10 md:mr-28 lg:mr-56 xl:mr-80 2xl:mr-96 text-sm font-openSans">
  <a href="mailto:info@d2global.in" className="flex items-center">
    <FaEnvelope className="mr-1" />
    info@d2global.in 
  </a>
  <a href="tel:+919878990455" className="flex items-center">
    <FaPhone className="mr-1 rotate-90" />
    +91 98789 90455
  </a>
</div>



              {/* Desktop Menu */}
              <nav className="hidden lg:block">
                <ul className="flex space-x-4">
                  {navItems.map((item) => (
                    <li key={item.name} className="relative dropdown-hover group">
                      <a
                        href={item.slug}
                        onClick={(e) => handleNavigation(e, item.slug)}
                        className={`px-2 py-1 text-sm font-poppins ${
                          location.pathname === item.slug ? 'font-bold' : 'hover:font-bold'
                        } transition-all duration-200 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full`}
                      >
                        {item.name}
                      </a>

                      {/* Main Dropdown */}
                      {item.dropdown && (
                        <ul className="absolute right-0 mt-1 w-40 bg-customBlue shadow-lg z-50 text-customYellow font-mukta">
                          {item.dropdown.map((subItem) => (
                            <li key={subItem.name} className="relative sub-dropdown">
                              <a
                                href={subItem.slug}
                                onClick={(e) => handleNavigation(e, subItem.slug)}
                                className={`block px-3 py-2 w-full text-left text-sm hover:bg-customBluetransition-colors duration-150 ${
                                  location.pathname === subItem.slug ? 'font-bold' : ''
                                }`}
                              >
                                {subItem.name}
                              </a>

                              {/* Sub Dropdown */}
                              {subItem.subDropdown && (
                                <ul className="absolute left-full top-0 w-40 bg-customBlue shadow-lg z-50 font-mukta">
                                  {subItem.subDropdown.map((subSubItem) => (
                                    <li key={subSubItem.name}>
                                      <a
                                        href={subSubItem.slug}
                                        onClick={(e) => handleNavigation(e, subSubItem.slug)}
                                        className={`block px-4 py-2 w-full text-left text-sm hover:bg-customBlue transition-colors duration-150 ${
                                          location.pathname === subSubItem.slug ? 'font-bold' : ''
                                        }`}
                                      >
                                        {subSubItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Mobile menu button */}
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
          <ul className="flex flex-col items-center space-y-2 py-3 font-poppins">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <a
                  href={item.slug}
                  onClick={(e) => handleNavigation(e, item.slug)}
                  className={`block w-full text-left px-4 py-2 text-sm ${
                    location.pathname === item.slug ? 'font-bold' : ''
                  }`}
                >
                  {item.name}
                </a>

                {item.dropdown && (
                  <ul className="bg-blue-900 w-full">
                    {item.dropdown.map((subItem) => (
                      <li key={subItem.name}>
                        <a
                          href={subItem.slug}
                          onClick={(e) => handleNavigation(e, subItem.slug)}
                          className={`block px-6 py-2 w-full text-left text-sm hover:bg-customBlue ${
                            location.pathname === subItem.slug ? 'font-bold' : ''
                          }`}
                        >
                          {subItem.name}
                        </a>

                        {subItem.subDropdown && (
                          <ul className="bg-customBlue w-full">
                            {subItem.subDropdown.map((subSubItem) => (
                              <li key={subSubItem.name}>
                                <a
                                  href={subSubItem.slug}
                                  onClick={(e) => handleNavigation(e, subSubItem.slug)}
                                  className={`block px-8 py-2 w-full text-left text-sm hover:bg-blue-700 ${
                                    location.pathname === subSubItem.slug ? 'font-bold' : ''
                                  }`}
                                >
                                  {subSubItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
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