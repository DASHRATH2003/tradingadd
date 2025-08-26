import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import WhyInvestPage from './components/WhyInvestPage'
import BasicServicesPage from './components/BasicServicesPage'
import PremiumServicesPage from './components/PremiumServicesPage'
import HNIServicesPage from './components/HNIServicesPage'
import AboutPage from './components/AboutPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import TermsConditionsPage from './components/TermsConditionsPage'
import SupportPage from './components/SupportPage'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/why-invest" element={<WhyInvestPage />} />
          <Route path="/basic-services" element={<BasicServicesPage />} />
          <Route path="/premium-services" element={<PremiumServicesPage />} />
          <Route path="/hni-services" element={<HNIServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-conditions" element={<TermsConditionsPage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App