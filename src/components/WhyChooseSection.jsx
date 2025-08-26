import React from 'react';

const WhyChooseSection = () => {
  const features = [
    {
      icon: '📊',
      title: 'Multi-Market Access',
      description: 'Trade across all major markets with a single platform'
    },
    {
      icon: '📈',
      title: 'Advanced Analytics',
      description: 'AI-powered insights and technical analysis'
    },
    {
      icon: '💰',
      title: '24/7 Trading',
      description: 'Trade anytime, anywhere with mobile access'
    },
    {
      icon: '🎯',
      title: 'Expert Support',
      description: 'Dedicated support team for personalized assistance'
    }
  ];

  const stats = [
    {
      number: '95%',
      label: 'Success Rate',
      description: 'Proven track record of profitable trades'
    },
    {
      number: '15+',
      label: 'Years Experience',
      description: 'Decades of market expertise'
    },
    {
      number: '50K+',
      label: 'Happy Clients',
      description: 'Trusted by traders worldwide'
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose TradeSmartly?
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-base text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-base text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;