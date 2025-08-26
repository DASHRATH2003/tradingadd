import React from 'react';

const BasicServicesPage = () => {
  const services = [
    {
      title: 'STOCK CASH',
      subtitle: 'Start your trading journey with our basic trading services designed for beginners and intermediate traders',
      monthlyPrice: '₹9999/-',
      quarterlyPrice: '₹14999/-',
      features: [
        'Live market updates',
        'Basic technical analysis',
        'Email support',
        'Social alerts',
        'Basic support',
        'Risk management tips'
      ]
    },
    {
      title: 'STOCK FUTURES',
      subtitle: 'Advanced futures trading for smart traders',
      monthlyPrice: '₹12999/-',
      quarterlyPrice: '₹17999/-',
      features: [
        'Portfolio analysis',
        'Basic allocation advice',
        'Market timing guidance',
        'Risk assessment',
        'Investment suggestions',
        'Additional tracking'
      ]
    },
    {
      title: 'STOCK OPTIONS',
      subtitle: 'Professional options trading and analysis',
      monthlyPrice: '₹14999/-',
      quarterlyPrice: '₹22999/-',
      features: [
        'Daily market reports',
        'Investment recommendations',
        'Personalized research',
        'Advanced analytics',
        'Guidance consultants'
      ]
    },
    {
      title: 'INDEX FUTURES',
      subtitle: 'Dedicated customer support for all your queries',
      monthlyPrice: '₹19999/-',
      quarterlyPrice: '₹25999/-',
      features: [
        '24*7 live support',
        'Phone support',
        'Live support',
        'Technical assistance',
        'Account management'
      ]
    },
    {
      title: 'INDEX OPTIONS',
      subtitle: 'Systematic investment plans and management',
      monthlyPrice: '₹12,999/-',
      quarterlyPrice: '₹23,999/-',
      features: [
        'Mutual fund selection',
        'Professional investing',
        'Systematic tracking',
        'Performance monitoring',
        'Guidance consultants'
      ]
    },
    {
      title: 'MCX BULLIONS',
      subtitle: 'Gold and silver trading with expert guidance',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹45,999/-',
      features: [
        'Recommendations only',
        'Risk to reward ratio 1:2',
        'Bullion market analysis',
        'Whatsapp alerts',
        'Market updates'
      ]
    },
    {
      title: 'MCX BASEMETAL',
      subtitle: 'Copper and aluminum trading strategies',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹29,999/-',
      features: [
        '2 recommendations daily',
        '2 recommendations daily'
      ]
    },
    {
      title: 'MCX ENERGY',
      subtitle: 'Crude oil and natural gas trading',
      monthlyPrice: '₹23999/-',
      quarterlyPrice: '₹30999/-',
      features: [
        '2 recommendations daily',
        '2 recommendations daily'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-sky-400">Basic Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Start your trading journey with our comprehensive basic services designed for beginners and intermediate traders
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Service Header */}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{service.subtitle}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-6">
                  <div className="mb-4">
                    <div className="text-sm text-gray-600 mb-1">Monthly</div>
                    <div className="text-2xl font-bold text-gray-900">{service.monthlyPrice}</div>
                    <button className="w-full mt-2 bg-sky-400 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-sky-500 transition-colors">
                      Buy Now
                    </button>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Quarterly</div>
                    <div className="text-2xl font-bold text-gray-900">{service.quarterlyPrice}</div>
                    <button className="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-600 mb-2">Features Included:</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicServicesPage;