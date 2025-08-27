import React from 'react';

const PremiumServicesPage = () => {
  const services = [
    {
      title: 'STOCK CASH',
      subtitle: 'Advanced trading strategies with premium market insights',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹29,999/-',
      features: [
        'Live premium recommendations daily',
        'Risk to reward ratio 1:3',
        'Real-time WhatsApp alerts',
        'Priority customer support',
        'Advanced technical analysis',
        'Market timing precision',
        'Stop loss & target guidance'
      ]
    },
     
    {
      title: 'STOCK OPTIONS',
      subtitle: 'Comprehensive wealth management for high net worth individuals',
      monthlyPrice: '₹19,999/-',
      quarterlyPrice: '₹44,999/-',
      features: [
        'Personalized investment advice',
        'Portfolio optimization',
        'Tax optimization planning',
        'Dedicated relationship manager',
        'Quarterly performance reviews',
        'Exclusive research reports',
        'Priority phone support'
      ]
    },
    {
      title: 'STOCK FURURE',
      subtitle: 'Unlock Profitable Trading with Expert Strategies & Exclusive.',
      monthlyPrice: '₹24,999/-',
      quarterlyPrice: '₹59,999/-',
      features: [
        'Daily Premium Recommendations',
        'High Reward Potential',
        'Real-time WhatsApp alerts',
        'Real-time updates directly on WhatsApp',
        'Priority assistance whenever you need it',
        'Market timing precision',
        'Stop loss & target guidance'
      ]
    },
    {
      title: 'INDEX FUTURES',
      subtitle: 'Ultra-premium financial advisory services',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹39,999/-',
      features: [
        'Personal financial advisor',
        'Customized investment plans',
        'Risk assessment & management',
        'Investment tracking',
        'Market trend analysis',
        'VIP portfolio',
        'Personalized tracking'
      ]
    },
    {
      title: 'INDEX OPTIONS',
      subtitle: 'Strategic tax planning and optimization services',
      monthlyPrice: '₹19,999/-',
      quarterlyPrice: '₹49,999/-',
      features: [
        'Comprehensive tax advice',
        'Capital gains optimization',
        'Investment structure planning',
        'Tax-efficient strategies',
        'Filing support',
        'Long-term planning',
        'Professional guidance'
      ]
    },
    {
      title: 'MCX BULLIONS',
      subtitle: 'Premium gold and silver trading with advanced ',
      monthlyPrice: '₹24,999/-',
      quarterlyPrice: '₹49,999/-',
      features: [
        '3-4 premium recommendations daily',
        'Risk to reward ratio 1:3',
        'Precious metals analysis',
        'Real-time WhatsApp alerts',
        'Market volatility insights',
        'Hedging & swing trading calls',
        'Stop loss & target guidance'
      ]
    },
    {
      title: 'MCX BASEMETAL',
      subtitle: 'Premium base metal trading with expert analysis',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹34,999/-',
      features: [
        '3 premium recommendations daily',
        'Risk to reward ratio 1:3',
        'Base metal WhatsApp alerts',
        'Market analysis',
        'Technical indicators',
        'Hedging & swing trading calls',
        'Stop loss & target guidance'
      ]
    },
    {
      title: 'MCX ENERGY',
      subtitle: 'Premium crude oil and natural gas trading strategies',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹34,999/-',
      features: [
        '3 premium recommendations daily',
        'Risk to reward ratio 1:3',
        'Advanced energy market analysis',
        'Real-time WhatsApp alerts',
        'Crude oil volatility insights',
        'Trading timing precision',
        'Stop loss & target guidance'
      ]
    }
  ];

  const whyChooseFeatures = [
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Advanced Analytics',
      description: 'Get access to premium market analytics and insights'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Priority Support',
      description: '24/7 priority support for premium members'
    },
    {
      icon: (
        <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'Guaranteed Results',
      description: 'Higher success rate with premium trading strategies'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">
            <span className="text-teal-400">Premium</span> <span className="text-sky-400">Services</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-6">
            Unlock advanced trading strategies and premium financial services designed for serious investors and traders
          </p>
          <div className="inline-flex items-center bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-medium">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Premium Quality Recommendations
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
                {/* Premium Badge */}
                <div className="absolute -top-2 -right-2">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Premium
                  </span>
                </div>

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
                    <button className="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors">
                      Buy Premium
                    </button>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Quarterly</div>
                    <div className="text-2xl font-bold text-gray-900">{service.quarterlyPrice}</div>
                    <button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors">
                      Buy Premium
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-teal-200 pt-4">
                  <div className="text-sm text-gray-600 mb-2">Premium Features:</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {services.slice(4).map((service, index) => (
              <div key={index + 4} className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative">
                {/* Premium Badge */}
                <div className="absolute -top-2 -right-2">
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    Premium
                  </span>
                </div>

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
                    <button className="w-full mt-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-teal-600 hover:to-cyan-600 transition-colors">
                      Buy Premium
                    </button>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Quarterly</div>
                    <div className="text-2xl font-bold text-gray-900">{service.quarterlyPrice}</div>
                    <button className="w-full mt-2 bg-gradient-to-r from-blue-500 to-teal-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:from-blue-600 hover:to-teal-600 transition-colors">
                      Buy Premium
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-teal-200 pt-4">
                  <div className="text-sm text-gray-600 mb-2">Premium Features:</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-sm text-gray-700">
                        <svg className="w-4 h-4 text-teal-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

      {/* Why Choose Premium Services Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Premium Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Go Premium?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of successful traders who have upgraded to our premium services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-teal-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-teal-500 text-teal-500 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-teal-50 transition-colors">
              Contact Premium Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumServicesPage;