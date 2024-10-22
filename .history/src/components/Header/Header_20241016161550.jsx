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
      <header className="bg-customBlue text-customYellow relative">
        <Container>
          <div className="flex justify-between  items-center">
            {/* Logo and Company Name */}
            <div className="flex items-center relative flex-shrink-0 ml-8">
              {/* Add a wrapper with relative positioning */}
              <div className="relative">
                <button
                  onClick={() => navigate('/')}
                  className="focus:outline-none absolute"
                  style={{ top: '50%', transform: 'translateY(-50%)' }} // Move the logo down by 50%
                >
                  <Logo className="w-16 h-16 object-contain" /> {/* Increased size */}
                </button>
              </div>
              <div className="ml-2 text-customYellow text-left">
                <p className="text-2xl lg:text-4xl font-semibold">D2 Global</p> {/* Increased font size */}
                <p className="text-lg lg:text-xl">Education and Immigration</p> {/* Increased font size */}
              </div>
            </div>

            {/* Contact Info and Social Media */}
            <div className="flex items-center space-x-6 mr-80">
              <div className="flex flex-col items-center">
                <p className="flex items-center space-x-2 text-lg">
                  <FaEnvelope className="inline-block text-2xl" />
                  <a href="mailto:info@d2global.com" className="">
                    info@d2global.com
                  </a>
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="flex items-center space-x-2 text-lg">
                  <FaPhone className="inline-block text-2xl rotate-90" />
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
      <nav className="shadow bg-customBlue text-customYellow left-0 w-full z-50 ">
        <Container>
          <div className="py-1 flex justify-between items-center"> {/* Reduced padding here */}
            {/* Hamburger Menu */}
            <div className="lg:hidden">
              <button onClick={toggleMenu} className="text-customYellow focus:outline-none">
                {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
              </button>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex ml-auto -mt-3"> {/* Added negative margin to move items up */}
              {navItems.map((item, index) => (
                <li key={item.name} className="relative">
                  <button
                    onClick={() =>
                      item.dropdown ? toggleDropdown(index) : handleNavigation(item.slug)
                    }
                    className={`underline-slide inline-block px-6 py-1 lg:py-2 text-lg lg:text-xl duration-200 ${location.pathname === item.slug ? 'active-page' : 'text-customYellow'}`}
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
