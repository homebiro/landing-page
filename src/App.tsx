import React from 'react';
import { VibeProvider } from './context/vibecontext';
import Navbar from './components/layout/navbar';
import Hero from './components/sections/hero';
import AboutUs from './components/sections/aboutus';
import Comparison from './components/sections/comparison';
import FeaturesGrid from './components/sections/featuresgrid';
import StepFlow from './components/sections/stepflow';
import ContactSection from './components/sections/contactsection';
import Testimonials from './components/sections/testimonials';
import Footer from './components/layout/footer';
import CookieBanner from './components/layout/cookiebanner';
import ScrollToTop from './components/scrolltotop';

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
          <ScrollToTop />
        </main>
        
        <Footer />
        
        <CookieBanner />
      </div>
    </VibeProvider>
  );
};

export default App;