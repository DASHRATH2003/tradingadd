import React from 'react';

const TermsConditionsPage = () => {
    return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Terms &
            </span>
            <span className="text-gray-700 ml-2">Conditions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Please read these terms carefully before using our services
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 mt-[-70px] sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-lg border border-blue-200">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using TradeSmart's services, you accept and agree to be bound by the terms 
                  and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  TradeSmart provides financial research, trading recommendations, and investment advisory services. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Stock market analysis and recommendations</li>
                  <li>Portfolio management guidance</li>
                  <li>Real-time market data and insights</li>
                  <li>Educational content and research reports</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  As a user of our services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide accurate and complete information during registration</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not share your account access with unauthorized persons</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Investment Risks and Disclaimers</h2>
                <div className="bg-red-50 p-4 rounded-lg border border-red-200 mb-4">
                    <p className="text-red-700 font-semibold mb-2">⚠️ Important Risk Disclosure</p>
                    <p className="text-red-600 text-sm leading-relaxed">
                    Trading and investing in financial markets involves substantial risk and may not be suitable for all investors.
                  </p>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Past performance does not guarantee future results</li>
                  <li>All investments carry the risk of loss</li>
                  <li>You should only invest money you can afford to lose</li>
                  <li>Our recommendations are for educational purposes only</li>
                  <li>Always conduct your own research before making investment decisions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  TradeSmart shall not be liable for any direct, indirect, incidental, special, or consequential damages 
                  resulting from the use or inability to use our services, including but not limited to trading losses, 
                  missed opportunities, or system downtime.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Subscription and Payment Terms</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Subscription fees are charged in advance and are non-refundable except as stated in our refund policy</li>
                  <li>Prices are subject to change with 30 days notice</li>
                  <li>Auto-renewal can be cancelled at any time before the next billing cycle</li>
                  <li>Failure to pay subscription fees may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 leading-relaxed">
                  All content, research, analysis, and recommendations provided by TradeSmart are proprietary and 
                  protected by intellectual property laws. Users may not reproduce, distribute, or commercialize 
                  our content without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Privacy and Data Protection</h2>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy and personal information. Please refer to our 
                  Privacy Policy for detailed information about how we collect, use, and protect your data.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Termination</h2>
                <p className="text-gray-700 leading-relaxed">
                  Either party may terminate this agreement at any time. TradeSmart reserves the right to 
                  suspend or terminate accounts that violate these terms or engage in fraudulent activities.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Regulatory Compliance</h2>
                <p className="text-gray-700 leading-relaxed">
                  TradeSmart operates in compliance with applicable financial regulations. We are registered 
                  with relevant regulatory authorities and follow prescribed guidelines for investment advisory services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Governing Law</h2>
                <p className="text-gray-700 leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these terms shall be subject to the jurisdiction of courts in Bangalore, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  For questions about these terms and conditions, please contact us:
                </p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-gray-800">Email: Support@tradesmartly.co.in</p>
                  <p className="text-gray-800">Phone: +91 9591408655</p>
                  <p className="text-gray-800">Address: TradeSmart Technologies Pvt. Ltd., Bangalore, India</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> January 2025<br/>
                  These terms may be updated from time to time. Continued use of our services after 
                  changes constitutes acceptance of the new terms.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default TermsConditionsPage;