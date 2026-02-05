import React, { useState } from 'react';
import { Button } from '../ui/button';
import WaitlistModal from '../ui/waitlistmodal'; 
import logo from '../../assets/logo.png'; 

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Protection', href: '#protection' },
    { name: 'How it Works', href: '#vibe-check' },
    { name: 'Contact', href: '#contact' },
  ];

  // Branding Colors from Logo:
  // Royal Blue: #1D4ED8 (approx)
  // Orange: #E67E22 (approx)

  return (
    <>
      <nav className="fixed top-0 w-full bg-zinc-50/90 backdrop-blur-xl z-[90] border-b border-zinc-200 transition-all duration-300 hover:bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Homebiro" 
                className="h-16 w-auto object-contain transition-transform hover:scale-105 active:scale-95" 
              />
            </a>
            
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-zinc-500">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  className="relative py-2 hover:text-[#1D4ED8] transition-all duration-300 transform hover:-translate-y-1"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold bg-[#1D4ED8]/5 text-[#1D4ED8] hover:bg-[#1D4ED8] hover:text-white transition-all duration-300 px-4 py-2 rounded-full border border-[#1D4ED8]/10 shadow-sm"
              >
                Download App
              </button>
              {/* Using the Orange from the icon for the "Soon" badge  when live integrate live */}
              <span className="absolute -top-2 -right-2 bg-[#E67E22] text-[7px] text-white px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest shadow-lg">Soon</span> 
            </div>
            
            {/* START HUNTING BUTTON: Matches the Royal Blue text in logo */}
            <Button 
              variant="primary" 
              className="hidden md:block !py-2.5 !px-6 text-sm !bg-[#1D4ED8] !text-white hover:!bg-[#153ca3] hover:scale-105 transition-all shadow-lg shadow-blue-200 active:scale-95"
              onClick={() => document.getElementById('vibe-check')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START HUNTING
            </Button>

            <button 
              className={`lg:hidden p-2 rounded-lg transition-colors ${isMobileMenuOpen ? 'bg-blue-50 text-[#1D4ED8]' : 'text-zinc-600'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-zinc-100 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link, i) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold text-zinc-700 hover:text-[#1D4ED8] transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-4'}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
               <button 
                onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-between w-full p-4 rounded-xl bg-blue-50 text-[#1D4ED8] font-bold"
              >
                Download App
                {/* Orange badge for consistency */}
                <span className="text-[9px] bg-[#E67E22] text-white px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
              </button>
              
              <Button 
                variant="primary" 
                className="w-full py-4 !bg-[#1D4ED8] !text-white shadow-lg shadow-blue-100 active:scale-95"
                onClick={() => {
                  document.getElementById('vibe-check')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
              >
                START HUNTING
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;