import React from 'react';
import { Button } from '../ui/button';
import rollup from '../../assets/rolup.png'; 

const Hero: React.FC = () => {
  const scrollToVibeCheck = () => {
    const element = document.getElementById('vibe-check');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text Content */}
        {/* Added "reveal" scroll animation classes */}
        <div className="z-10 space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          
          {/* Animated Badge: Changed color to your logo's Orange */}
          <div className="inline-flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-full border border-orange-100 animate-bounce transition-all duration-500 hover:scale-105">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E67E22] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E67E22]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-[#E67E22]">
              30-Days 100% Satisfaction Guarantee
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
            Guaranteed Outcome <br />
            <span className="text-zinc-400 font-extrabold text-4xl md:text-6xl italic">
              on your house request.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-600 max-w-lg leading-relaxed">
            Skip the agent and hunting chaos. Homebiro handles your searches, 
            inspections, and neighbourhood tours, so you can move into a home you love 
            without the stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            {/* START HUNTING: Royal Blue with hover scaling */}
            <Button 
              variant="primary" 
              onClick={scrollToVibeCheck} 
              className="text-lg px-10 !bg-[#1D4ED8] hover:!bg-[#153ca3] transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-blue-200"
            >
              START HUNTING TODAY
            </Button>
            
            {/* WATCH HOW IT WORKS: Hover animation added */}
            <button className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#1D4ED8]/5 text-zinc-800 transition-all duration-300 hover:pl-10">
              <span className="group-hover:text-[#1D4ED8] transition-colors">Watch how it works</span>
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:scale-110 group-hover:bg-[#E67E22] transition-all duration-300 shadow-sm">
                <svg className="w-4 h-4 text-black group-hover:text-white fill-current transition-colors" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Image */}
        <div className="relative group animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="aspect-[4/5] md:aspect-square bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-200 flex items-center justify-center relative shadow-2xl transition-transform duration-500 hover:rotate-1">
            <img 
              src={rollup} 
              alt="Homebiro Guaranteed Outcome" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            
            {/* Floating Trust Card: Animated on scroll */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hidden md:block animate-in slide-in-from-bottom-12 duration-1000 delay-700">
              <div className="flex items-center gap-4">
                <div className="text-3xl text-green-500 font-bold">✓</div>
                <div>
                  <p className="font-bold text-sm">Tenant Concierge Active</p>
                  <p className="text-xs text-zinc-500">Protecting renters in Ibadan since 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -z-10 w-1/3 h-full bg-zinc-50/50 skew-x-[-12deg] translate-x-20 hidden lg:block" />
    </section>
  );
};

export default Hero;