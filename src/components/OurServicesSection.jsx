import React from 'react';

const OurServicesSection = () => {
  const services = [
    {
      title: 'Basic Trading',
      description: 'Perfect for beginners with essential trading tools and market access.',
      features: [
        'Real-time market data',
        'Basic technical analysis',
        'Mobile trading app',
        'Email support'
      ],
      buttonText: 'Contact Us',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      title: 'Premium Trading',
      description: 'Advanced tools for serious traders with enhanced features and priority support.',
      features: [
        'Advanced charting tools',
        'AI-powered insights',
        'Priority support',
        'Custom alerts'
      ],
      buttonText: 'Contact Us',
      buttonColor: 'bg-green-600 hover:bg-green-700',
      popular: true
    },
    {
      title: 'HNI Services',
      description: 'Exclusive services for high net worth individuals with personalized strategies.',
      features: [
        'Personal relationship manager',
        'Custom strategies',
        '24/7 phone support',
        'Exclusive research'
      ],
      buttonText: 'View HNI Services',
      buttonColor: 'bg-blue-600 hover:bg-blue-700'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow relative">
              {service.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-base font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-lg text-gray-600">{service.description}</p>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-base text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-center">
                <button className={`w-full py-3 px-6 rounded-lg text-lg text-white font-medium transition-colors ${service.buttonColor}`}>
                  {service.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Trading Journey?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of successful traders who trust TradeSmart for their investment needs.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServicesSection;