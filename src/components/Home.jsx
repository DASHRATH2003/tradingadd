import React from 'react'
import LiveTradingData from './LiveTradingData'
import HeroSection from './HeroSection'
import WhyChooseSection from './WhyChooseSection'
import OurServicesSection from './OurServicesSection'

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Section 1 - Live Trading Data with background */}
       <div className="min-h-screen bg-cover bg-center bg-fixed" 
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
            }}>
        <LiveTradingData />
        <HeroSection />
      </div>
      
      {/* Section 2 - Why Choose Section */}
      <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 bg-cover bg-center bg-fixed"
           style={{
             backgroundImage: `linear-gradient(rgba(6, 78, 59, 0.8), rgba(17, 94, 89, 0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="dots" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="20" cy="20" r="2" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100%25" height="100%25" fill="url(%23dots)"/></svg>')`
           }}>
        <WhyChooseSection />
      </div>
      
      {/* Section 3 - Our Services Section */}
      <div className="min-h-screen bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 bg-cover bg-center bg-fixed"
           style={{
             backgroundImage: `linear-gradient(rgba(154, 52, 18, 0.8), rgba(153, 27, 27, 0.8)), url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><defs><pattern id="waves" width="100" height="100" patternUnits="userSpaceOnUse"><path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="%23ffffff" stroke-width="1" opacity="0.1"/></pattern></defs><rect width="100%25" height="100%25" fill="url(%23waves)"/></svg>')`
           }}>
        <OurServicesSection />
      </div>
      
      {/* Section 4 - Additional Content Section */}
     
      

    </div>
  )
}

export default Home