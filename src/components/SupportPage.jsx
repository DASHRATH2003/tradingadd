import React, { useState } from 'react';

const SupportPage = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const supportCategories = [
    {
      title: 'Market Analysis',
      description: 'Expert market insights, stock analysis, and trading recommendations',
      icon: '📊',
      contact: '+91 9591408655',
    },
    {
      title: 'Portfolio Advisory',
      description: 'Personalized portfolio guidance and investment strategy consultation',
      icon: '💼',
      contact: '+91 9591408655',
    },
  ];

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // ✅ Dynamic endpoint - localhost for dev, production domain for live
      const apiUrl = window.location.hostname === 'localhost' 
        ? 'http://localhost:5000/send-mail'
        : 'https://api.tradesmartly.co.in/send-mail';
      
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('✅ Thank you for contacting us! We’ll get back to you soon.');
        setContactForm({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('❌ Something went wrong, please try again later.');
      }
    } catch (err) {
      setStatus('❌ Error connecting to server.');
    }

    setLoading(false);
  };

  const handleInputChange = (e) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Support
            </span>
            <span className="text-white ml-2">Center</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Get expert assistance and personalized support for your trading journey
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {supportCategories.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-white font-bold text-xl mb-3">{category.title}</h3>
                <p className="text-gray-300 text-base mb-4 leading-relaxed">
                  {category.description}
                </p>
                <a
                  href={`tel:${category.contact}`}
                  className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-white text-center mb-6">Get In Touch</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={contactForm.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Full Name"
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                />
                <input
                  type="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email Address"
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                />
                <input
                  type="text"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                />
                <textarea
                  name="message"
                  value={contactForm.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  placeholder="Message"
                  className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              {status && <p className="mt-4 text-center text-sm">{status}</p>}
            </div>

            {/* Contact Information */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Phone Support</h4>
                    <p className="text-blue-400 font-semibold">+91 9591408655</p>
                    <p className="text-gray-400 text-sm">Mon - Fri, 9 AM - 6 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Email Support</h4>
                    <p className="text-emerald-400 font-semibold">support@tradesmartly.co.in</p>
                    <p className="text-gray-400 text-sm">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">Office Address</h4>
                    <p className="text-purple-400 font-semibold">BANASWADI, BANGALORE</p>
                    <p className="text-gray-400 text-sm">KARNATAKA 560043</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SupportPage;
