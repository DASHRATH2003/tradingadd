import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative py-20 bg-cover bg-center bg-no-repeat" 
         style={{
           backgroundImage: `linear-gradient( url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
         }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          <span className="text-blue-300">Trade</span>
          <span className="text-teal-300">Smart</span>
          <span className="text-green-300">ly</span>
        </h1>
        <p className="text-xl md:text-2xl text-white font-light max-w-4xl mx-auto">
          an end to end solution to all the financial research services.
        </p>
        
        {/* Optional CTA buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </button>
          <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-white hover:text-blue-900 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;