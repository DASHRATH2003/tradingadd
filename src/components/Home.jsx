import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const totalImages = 5

  // Live market data state
  const [marketData, setMarketData] = useState({
    nifty: { price: 19425.35, change: 125.40, changePercent: 0.65 },
    sensex: { price: 65832.15, change: 298.20, changePercent: 0.45 },
    bankNifty: { price: 44125.80, change: -85.25, changePercent: -0.19 },
    goldPrice: { price: 62450, change: 180, changePercent: 0.29 }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === totalImages - 1 ? 0 : prevIndex + 1
      )
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [])

  // Simulate live market data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => ({
        nifty: {
          price: prev.nifty.price + (Math.random() - 0.5) * 10,
          change: prev.nifty.change + (Math.random() - 0.5) * 5,
          changePercent: prev.nifty.changePercent + (Math.random() - 0.5) * 0.1
        },
        sensex: {
          price: prev.sensex.price + (Math.random() - 0.5) * 50,
          change: prev.sensex.change + (Math.random() - 0.5) * 20,
          changePercent: prev.sensex.changePercent + (Math.random() - 0.5) * 0.1
        },
        bankNifty: {
          price: prev.bankNifty.price + (Math.random() - 0.5) * 20,
          change: prev.bankNifty.change + (Math.random() - 0.5) * 10,
          changePercent: prev.bankNifty.changePercent + (Math.random() - 0.5) * 0.1
        },
        goldPrice: {
          price: prev.goldPrice.price + (Math.random() - 0.5) * 100,
          change: prev.goldPrice.change + (Math.random() - 0.5) * 50,
          changePercent: prev.goldPrice.changePercent + (Math.random() - 0.5) * 0.1
        }
      }))
    }, 2000) // Update every 2 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Live Market Data */}
     

      {/* Hero Section with Background Carousel */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Carousel */}
        <div className="absolute inset-0">
          {[
            "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1642790106117-e829e14a795f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          ].map((image, index) => (
            <img 
              key={index}
              src={image}
              alt={`Trading Background ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-slate-900/70 to-blue-900/80"></div>
          {/* Animated Bull Silhouette */}
          <div className="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-30">
            <svg width="400" height="300" viewBox="0 0 400 300" className="text-blue-400">
              <path fill="currentColor" d="M50 200 Q100 150 150 180 Q200 120 250 160 Q300 100 350 140 L350 250 Q300 220 250 240 Q200 260 150 240 Q100 250 50 230 Z" />
              <circle cx="80" cy="180" r="3" fill="currentColor" />
              <path stroke="currentColor" strokeWidth="2" fill="none" d="M60 170 Q70 160 80 170" />
              <path stroke="currentColor" strokeWidth="3" fill="none" d="M45 185 Q35 175 25 185" />
              <path stroke="currentColor" strokeWidth="3" fill="none" d="M45 195 Q35 205 25 195" />
            </svg>
          </div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              TradeSmartly
            </span>
            <span className="block text-white text-2xl md:text-3xl mt-2 leading-snug">
              an end to end solution to all the financial research services.
            </span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl text-white mb-6">
              'Something for someone and everyone shall witness an enhancement in their wealth' is the motto of the company and our team.
            </p>
            <p className="text-lg text-white">
              A company in the financial arena which is empowered by great technology and state of the art analytics with ample reinforcement of experts and their 10+ years of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Why Choose TradeSmart?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Multi-Market Access</h3>
              <p className="text-gray-700">Trade across all major markets with a single platform</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-700">AI-powered insights and technical analysis</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Trading</h3>
              <p className="text-gray-700">Trade anytime, anywhere with mobile access</p>
            </div>

            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-700">Dedicated support team for personalized assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">80%</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Success Rate</div>
              <p className="text-gray-700">Proven track record of profitable trades</p>
            </div>
            <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Years Experience</div>
              <p className="text-gray-700">Decades of market expertise</p>
            </div>
            <div className="p-8 rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200">
              <div className="text-4xl font-bold text-emerald-600 mb-2">20K+</div>
              <div className="text-xl text-gray-900 font-semibold mb-2">Happy Clients</div>
              <p className="text-gray-700">Trusted by traders worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 hover:border-blue-300 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Basic Trading</h3>
              <p className="text-gray-700 mb-6">Perfect for beginners with essential trading tools and basic market insights.</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• Real-time market data</li>
                <li>• Basic technical analysis</li>
                <li>• Mobile trading app</li>
                <li>• Email support</li>
              </ul>
              <Link 
                to="/support" 
                className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            <div className="p-8 rounded-lg bg-gradient-to-br from-emerald-50 to-blue-50 border-2 border-emerald-200 hover:border-emerald-300 transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Trading</h3>
              <p className="text-gray-700 mb-6">Advanced features for serious traders with comprehensive analysis tools.</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• Advanced charting tools</li>
                <li>• AI-powered insights</li>
                <li>• Priority support</li>
                <li>• Custom alerts</li>
              </ul>
              <Link 
                to="/support" 
                className="inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-emerald-600 hover:to-blue-600 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>

            <div className="p-8 rounded-lg bg-gradient-to-br from-blue-50 to-emerald-50 border border-blue-200 hover:border-blue-300 transition-all duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">HNI Services</h3>
              <p className="text-gray-700 mb-6">Exclusive services for high net worth individuals with personalized strategies.</p>
              <ul className="text-gray-700 mb-6 space-y-2">
                <li>• Personal account manager</li>
                <li>• Custom strategies</li>
                <li>• 24/7 phone support</li>
                <li>• Exclusive research</li>
              </ul>
              <Link 
                to="/hni-services" 
                className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
              >
                View HNI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Trading Journey?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of successful traders who trust TradeSmart for their investment needs.
          </p>
          <Link 
            to="/support" 
            className="inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-emerald-600 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
