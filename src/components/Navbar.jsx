import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <img src={logo} alt="TradeSmartly Logo" className="h-20 w-auto mr-3" />
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
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-lg font-medium transition-colors flex items-center border-2 border-gray-900 rounded-lg"
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
            <button className="text-gray-900 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;