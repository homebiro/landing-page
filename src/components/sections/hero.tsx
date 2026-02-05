import React from 'react';
import { Button } from '../ui/Button';
// 1. Import your image from assets
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
        <div className="z-10 space-y-8 animate-in slide-in-from-left duration-700">
          <div className="inline-flex items-center gap-2 bg-zinc-100 px-4 py-2 rounded-full border border-zinc-200">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-zinc-600">
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
            <Button variant="primary" onClick={scrollToVibeCheck} className="text-lg px-10">
              START HUNTING TODAY
            </Button>
            
            <button className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-50 transition-all">
              <span>Watch how it works</span>
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Right Column: Visual Image */}
        <div className="relative group animate-in slide-in-from-right duration-700">
          <div className="aspect-[4/5] md:aspect-square bg-zinc-100 rounded-[3rem] overflow-hidden border border-zinc-200 flex items-center justify-center relative shadow-2xl">
            {/* 2. REPLACED PLACEHOLDER WITH ACTUAL IMAGE TAG */}
            <img 
              src={rollup} 
              alt="Homebiro Guaranteed Outcome" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Floating Trust Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-xl hidden md:block">
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