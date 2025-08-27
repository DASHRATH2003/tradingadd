import React from 'react';

const HNIServicesPage = () => {
  const services = [
    {
      title: 'STOCK CASH',
      subtitle: 'Buy and Sell Cash equity with proper stop loss and target using.',
      monthlyPrice: '₹49,999/-',
      quarterlyPrice: '₹84,999/-',
      features: [
        '15 recommendations daily',
        'Risk to reward ratio 1:2',
        'Intraday & fundamental analysis',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      title: 'STOCK FUTURES',
      subtitle: 'Advanced futures trading for smart traders',
      monthlyPrice: '₹54,999/-',
      quarterlyPrice: '₹94,999/-',
      features: [
        '7 recommendations daily',
        'Risk to reward ratio 1:2',
        'Leverage trading strategies',
        'Position sizing guidance',
        'Risk management',
        'Market timing updates'
      ]
    },
    {
      title: 'STOCK OPTIONS',
      subtitle: 'Professional options trading and analysis',
      monthlyPrice: '₹39,999/-',
      quarterlyPrice: '₹74,999/-',
      features: [
        '7 recommendations daily',
        'Risk to reward ratio 1:2',
        'Options strategies',
        'Greeks analysis guidance',
        'Volatility analysis',
        'Market timing updates'
      ]
    },
    {
      title: 'INDEX FUTURES',
      subtitle: 'Index futures trading with expert guidance',
      monthlyPrice: '₹29,999/-',
      quarterlyPrice: '₹64,999/-',
      features: [
        '5 recommendations daily',
        'Risk to reward ratio 1:2',
        'Index trend analysis',
        'Stop loss and target guidance',
        'Market updates',
        'Market timing updates'
      ]
    },
    {
      title: 'INDEX OPTIONS',
      subtitle: 'Ultra-elite bank nifty options trading',
      monthlyPrice: '₹49,999/-',
      quarterlyPrice: '₹84,999/-',
      features: [
        '5 recommendations daily',
        'Risk to reward ratio 1:2',
        'Bank nifty strategies',
        'Options chain analysis',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      title: 'MCX BULLIONS',
      subtitle: 'Gold and silver trading calls',
      monthlyPrice: '₹19,999/-',
      quarterlyPrice: '₹54,999/-',
      features: [
        '3 recommendations daily',
        'Risk to reward ratio 1:2',
        'Commodity trading calls',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      title: 'MCX BASEMETAL',
      subtitle: 'Base metal trading calls',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹39,999/-',
      features: [
        'Risk to reward ratio 1:2',
        'Base metal analysis',
        'Real-time WhatsApp alerts',
        'Stop loss and target guidance',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    },
    {
      title: 'MCX ENERGY',
      subtitle: 'Crude oil and natural gas trading',
      monthlyPrice: '₹14,999/-',
      quarterlyPrice: '₹39,999/-',
      features: [
        '3 recommendations daily',
        'Risk to reward ratio 1:2',
        'Energy market analysis',
        'Real-time WhatsApp alerts',
        'WhatsApp alerts',
        'Market timing updates'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-white">
            HNI SERVICES
          </h1>
          <p className="text-blue-200 text-lg max-w-3xl mx-auto">
            Professional Intraday and Buy Today and Sell Tomorrow (BTST) calls with proper stop loss and target using our technical & fundamental analysis.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
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
                    <button className="w-full mt-2 bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors">
                      Buy
                    </button>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Quarterly</div>
                    <div className="text-2xl font-bold text-gray-900">{service.quarterlyPrice}</div>
                    <button className="w-full mt-2 bg-green-500 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-600 transition-colors">
                      Buy
                    </button>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="text-sm text-gray-600 mb-2">What's Included:</div>
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

      {/* Important Information Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Important Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Risk Disclaimer</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Trading and investing involves substantial risk of loss and is not suitable for all investors. Past performance does not guarantee future results. Please consider your investment objectives and risk tolerance before trading.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Service Terms</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                All services are subject to our terms and conditions. Clients are advised to read and understand before trading. Please contact our customer support for any queries.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-blue-200 mb-8">
            Join our exclusive HNI services and experience professional trading guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Contact Us
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HNIServicesPage;