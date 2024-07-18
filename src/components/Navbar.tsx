import { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="shadow-md">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src='/src/assets/tridentlogo.png' alt="Flowbite Logo" className="h-24 w-full" />
           
          </div>
          {/* Hamburger menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-500 focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          {/* Navigation links */}
          <div className="hidden md:flex space-x-12 font-mono">
              <Link to='/' className="text-white relative after:absolute after:bg-teal-400 after:h-0.5 after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
                Home
              </Link>
              <Link to='/achievements' className="text-white relative after:absolute after:bg-teal-400 after:h-0.5 after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
                Achievements
              </Link>
              <Link to="/team" className="text-white relative after:absolute after:bg-teal-400 after:h-0.5 after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
                Team
              </Link>
              <Link to="/sponsors" className="text-white relative after:absolute after:bg-teal-400 after:h-0.5 after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
                Sponsors
              </Link>
              <Link to='/contactus' className="text-white relative after:absolute after:bg-teal-400 after:h-0.5 after:w-0 after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300">
                Contact Us
              </Link>
          </div>

        </div>
        {/* Responsive menu for mobile screens */}
        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-white hover:text-gray-900">Home</Link>
              <Link to="/achievements" className="text-white hover:text-gray-900">Achievements</Link>
              <Link to="/about" className="text-white hover:text-gray-900">About</Link>
              <Link to='/services' className="text-white hover:text-gray-900">Services</Link>
              <Link to='/contactus' className="text-white hover:text-gray-900">Contact Us</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
