import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import WaitlistModal from '../ui/waitlistmodal'; 
import logo from '../../assets/logo.png'; 

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Protection', href: '#protection' },
    { name: 'How it Works', href: '#vibe-check' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        // Only set active and update URL if we have scrolled past the header
        if (entry.isIntersecting && window.scrollY > 50) {
          const id = entry.target.id;
          setActiveSection(id);
          window.history.pushState(null, '', `#${id}`);
        } 
        // Explicitly clear URL if we are at the top, even if an entry triggers
        else if (window.scrollY <= 50) {
          setActiveSection('');
          if (window.location.hash) {
            window.history.pushState(null, '', window.location.pathname);
          }
        }
      });
    };

    const observerOptions = {
      rootMargin: '-100px 0px -60% 0px', 
      threshold: 0.1, 
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    const handleScroll = () => {
      // Secondary check: if the user scrolls to the absolute top, wipe the hash
      if (window.scrollY < 10) {
        setActiveSection('');
        if (window.location.hash) {
          window.history.pushState(null, '', window.location.pathname);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const sectionId = id.replace('#', '');
    const element = document.getElementById(sectionId);
    
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.history.pushState(null, '', id);
    }
  };

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
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a 
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className={`relative py-2 transition-all duration-300 transform hover:-translate-y-1 ${
                      isActive ? 'text-[#1D4ED8]' : 'hover:text-[#1D4ED8]'
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1D4ED8] transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`} />
                  </a>
                );
              })}
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
              <span className="absolute -top-2 -right-2 bg-[#E67E22] text-[7px] text-white px-1.5 py-0.5 rounded-full font-black uppercase tracking-widest shadow-lg">Soon</span> 
            </div>
            
            <Button 
              variant="primary" 
              className="hidden md:block !py-2.5 !px-6 text-sm !bg-[#1D4ED8] !text-white hover:!bg-[#153ca3] hover:scale-105 transition-all shadow-lg shadow-blue-200 active:scale-95"
              onClick={() => scrollToSection('#vibe-check')}
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
            {navLinks.map((link, i) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    scrollToSection(link.href);
                  }}
                  className={`text-lg font-bold transition-transform duration-300 ${
                    isActive ? 'text-[#1D4ED8] translate-x-2' : 'text-zinc-700 hover:text-[#1D4ED8]'
                  } ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-4'}`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-6 border-t border-zinc-100 flex flex-col gap-4">
               <button 
                onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }}
                className="flex items-center justify-between w-full p-4 rounded-xl bg-blue-50 text-[#1D4ED8] font-bold"
              >
                Download App
                <span className="text-[9px] bg-[#E67E22] text-white px-2 py-0.5 rounded-full uppercase">Coming Soon</span>
              </button>
              
              <Button 
                variant="primary" 
                className="w-full py-4 !bg-[#1D4ED8] !text-white shadow-lg shadow-blue-100 active:scale-95"
                onClick={() => {
                  scrollToSection('#vibe-check');
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