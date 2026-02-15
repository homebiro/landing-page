import React from 'react';
import Navbar from './components/layout/navbar';
import Hero from './components/sections/hero';
import ConciergeService from './components/sections/conciergeservice';
import CitiesNetwork from './components/sections/citiesnetwork';
import WhyChooseUs from './components/sections/whychooseus';
// import NeighbourhoodTour from './components/sections/neighbourhoodtour';
// import ConciergExperience from './components/sections/conciergexperience';
// import Protection from './components/sections/protection';
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
           <CitiesNetwork /> 

          {/*   why choose us */}
          <WhyChooseUs />

          <ScrollToTop />
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </VibeProvider>
  );
};

export default App;
