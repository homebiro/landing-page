import React from 'react';
import Navbar from './components/layout/navbar';
import Hero from './components/sections/hero';
import ConciergeService from './components/sections/conciergeservice';
import Solutions from './components/sections/solutions';
import AboutUs from './components/sections/aboutus';
import Testimonial from './components/sections/testimonial';
import CertifiedConcierge from './components/sections/certifiedconcierge';
import SuccessMatrics from './components/sections/successmatrics';
import Footer from './components/layout/footer';
import CookieBanner from './components/layout/cookiebanner';
import ScrollToTop from './components/scrolltotop';
import { VibeProvider } from './context/VibeContext';




const App: React.FC = () => {
  return (
    <VibeProvider> {/* ✅ Added wrapper */}
      <div className="min-h-screen bg-white font-sans text-black selection:bg-green-100">
        <Navbar />
        <main>
          {/*   Hero Section */}
          <Hero />

          {/*   Concierge Service */}
          <ConciergeService /> 

          {/* Cities Network  */}
           <Solutions /> 

          {/*   why choose us */}
          <AboutUs />

          {/*   why choose us */}
          <Testimonial />

           {/*   why choose us */}
          <CertifiedConcierge />

          {/*   why choose us */}
          <SuccessMatrics />

          <ScrollToTop />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </VibeProvider>
  );
};

export default App;
