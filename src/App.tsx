import React from 'react';
import { VibeProvider } from './context/VibeContext';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import Comparison from './components/sections/Comparison';
import FeaturesGrid from './components/sections/FeaturesGrid';
import StepFlow from './components/sections/StepFlow';
import ContactSection from './components/sections/ContactSection';
import Testimonials from './components/sections/Testimonials';
import Footer from './components/layout/Footer';
import CookieBanner from './components/layout/CookieBanner';

const App: React.FC = () => {
  return (
    <VibeProvider>
      <div className="min-h-screen bg-white font-sans text-black selection:bg-green-100">
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Comparison />
          <FeaturesGrid />
          <StepFlow />
          <Testimonials />
          <ContactSection />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </VibeProvider>
  );
};

export default App;