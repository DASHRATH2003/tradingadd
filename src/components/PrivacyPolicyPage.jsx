import React from 'react';

const PrivacyPolicyPage = () => {
 return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto mt-[-30px] text-center">
          <h1 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Refund Policy
            </span>
            <span className="text-gray-700 ml-2">& Privacy Policy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your trust and privacy are our top priorities
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 mt-[-70px] sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Refund Policy */}
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-lg border border-blue-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Refund Policy</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We highly value our clients and strive to offer them the best services possible. However, it is important to understand that we do not provide a 100% guarantee on our calls. Therefore, all sales are final and we do not accept any refunds or cancellations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Important Notice</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We strongly recommend that before making a payment, our visitors, and potential clients, please:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Read all information about our services and support given to our clients</li>
                  <li>Read our Terms and Conditions</li>
                  <li>Read our Privacy Policy and Refund Policy</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h3 className="text-xl font-semibold text-red-600 mb-3">No Refund Policy</h3>
                <p className="text-red-700 leading-relaxed font-medium">
                  There is no refund possible in any case whatsoever.
                </p>
                <p className="text-red-700 leading-relaxed mt-2">
                  Kindly make the payment after reading all terms and conditions, disclaimers and refund policy.
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-gradient-to-br from-blue-50 to-emerald-50 p-8 rounded-lg border border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">1. Information We Collect</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We collect information you provide directly to us, such as:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Personal information (name, email, phone number)</li>
                  <li>Financial information (bank details, PAN, Aadhaar)</li>
                  <li>Trading preferences and investment goals</li>
                  <li>Usage data and platform interactions</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">2. How We Use Your Information</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We use your information to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide and improve our trading services</li>
                  <li>Process transactions and send notifications</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Communicate important updates and recommendations</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">3. Information Security</h3>
                <p className="text-gray-700 leading-relaxed">
                  We implement industry-standard security measures to protect your personal and 
                  financial information. All data is encrypted and stored securely using advanced 
                  security protocols.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">4. Data Sharing</h3>
                <p className="text-gray-700 leading-relaxed">
                  We do not sell, trade, or share your personal information with third parties 
                  except as required by law or with your explicit consent. We may share data 
                  with trusted service providers who assist in our operations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">5. Your Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>File complaints with regulatory authorities</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3">6. Contact Information</h3>
                <p className="text-gray-700 leading-relaxed">
                  For any questions regarding our refund or privacy policies, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                  <p className="text-gray-800">Email: Support@tradesmartly.co.in</p>
                  <p className="text-gray-800">Phone: +91 9591408655</p>
                  <p className="text-gray-800">Address: TradeSmart Technologies Pvt. Ltd., Bangalore, India</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-gray-600">
                  <strong>Last Updated:</strong> January 2025<br/>
                  This policy may be updated from time to time. We will notify you of any 
                  significant changes via email or platform notifications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default PrivacyPolicyPage;