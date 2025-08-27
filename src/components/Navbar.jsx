import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src={logo} alt="TradeSmartly Logo" className="h-20  w-auto mr-3" />
              <div className="text-4xl font-bold text-blue-600">
               
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors">
                Home
              </Link>
              <Link to="/why-invest" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors">
                Why Invest?
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors flex items-center"
                >
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <div className="py-1">
                      <Link to="/basic-services" className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Basic Services
                      </Link>
                      <Link to="/premium-services" className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        Premium Services
                      </Link>
                      <Link to="/hni-services" className="block px-4 py-2 text-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                        HNI Services
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              
              <Link to="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors">
                About
              </Link>
              <Link to="/privacy-policy" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors">
                Privacy & Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>

          {/* Contact Us Button */}
          <div className="hidden md:block">
            <Link to="/support" className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-900 hover:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link 
                to="/" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/why-invest" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Why Invest?
              </Link>
              
              {/* Mobile Services Menu */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="text-gray-900 hover:text-blue-600 text-base font-medium flex items-center w-full"
                >
                  Services
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="mt-2 pl-4 space-y-1">
                    <Link 
                      to="/basic-services" 
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Basic Services
                    </Link>
                    <Link 
                      to="/premium-services" 
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Premium Services
                    </Link>
                    <Link 
                      to="/hni-services" 
                      className="text-gray-700 hover:text-blue-600 block px-3 py-2 text-sm"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      HNI Services
                    </Link>
                  </div>
                )}
              </div>
              
              <Link 
                to="/about" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/privacy-policy" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Privacy & Policy
              </Link>
              <Link 
                to="/terms-conditions" 
                className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Terms & Conditions
              </Link>
              <Link 
                to="/support" 
                className="bg-blue-600 text-white block px-3 py-2 text-base font-medium hover:bg-blue-700 transition-colors rounded-md mx-3 mt-4 text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;