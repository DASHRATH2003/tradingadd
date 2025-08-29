import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="TradeSmartly Logo" className="h-16 w-auto mr-4" />
              <span className="text-2xl font-bold">TradeSmartly</span>
            </div>
            <p className="text-blue-200 mb-6 max-w-md">
              Your trusted partner for intelligent trading with advanced analytics, real-time insights, and personalized strategies for maximum returns.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              {/* Twitter */}
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
  href="https://www.facebook.com/people/TRADE-Smartly/61579916974218/?mibextid=wwXIfr&rdid=pJ2Q5TIBzkjgoOpw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17bxpn18Rx%2F%3Fmibextid%3DwwXIfr"
  className="text-blue-300 hover:text-white transition-colors"
  aria-label="Facebook"
>
  <svg
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326v21.348C0 
      23.407.593 24 1.325 24h11.494v-9.294H9.692V11.01h3.127V8.413c0-3.1 
      1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 
      0-1.796.715-1.796 1.763v2.311h3.587l-.467 3.696h-3.12V24h6.116C23.407 
      24 24 23.407 24 22.674V1.326C24 .593 23.407 0 22.675 0z" />
  </svg>
</a>
              {/* Instagram */}
            <a href="https://www.instagram.com/tradesmartly1/" className="text-blue-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/why-invest" className="text-blue-200 hover:text-white transition-colors">Why Invest?</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/support" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/basic-services" className="text-blue-200 hover:text-white transition-colors">Basic Services</Link></li>
              <li><Link to="/premium-services" className="text-blue-200 hover:text-white transition-colors">Premium Services</Link></li>
              <li><Link to="/hni-services" className="text-blue-200 hover:text-white transition-colors">HNI Services</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-200 text-sm mb-4 md:mb-0">
              © 2025 TradeSmart. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/terms-conditions" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</Link>
              <Link to="/privacy-policy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
