import React, { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import WaitlistModal from '../ui/waitlistmodal'; 
import logo from '../../assets/logo.png'; 

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  const navLinks = [
    { name: 'About Us', href: '#about-us' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'Work with Homebiro', href: '#certified-concierge' },
    { name: 'Pricing', href: '#pricing' }, 
    { name: 'Our Cities', href: '#cities' },
  ];

  useEffect(() => {
    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
          window.history.replaceState(null, '', `#${id}`);
        }
      });
    };

    const observerOptions = {
      rootMargin: '-30% 0px -60% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navLinks.forEach((link) => {
      const sectionId = link.href.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    const vibeCheck = document.getElementById('vibe-check');
    if (vibeCheck) observer.observe(vibeCheck);

    const handleScroll = () => {
      if (window.scrollY < 50) {
        setActiveSection('');
        if (window.location.hash) {
          window.history.replaceState(null, '', window.location.pathname);
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
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-zinc-50/90 backdrop-blur-xl z-[90] border-b border-zinc-200 h-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4">
          
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Homebiro" className="h-16 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex flex-1 justify-end items-center gap-8 text-sm font-semibold text-zinc-500 mr-4">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className={`relative py-2 transition-all ${isActive ? 'text-[#1D4ED8]' : 'hover:text-[#1D4ED8]'}`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#1D4ED8] transition-transform duration-300 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                </a>
              );
            })}
            <a 
              href="mailto:support@homebiro.com" 
              className="text-[#1D4ED8] font-bold hover:underline cursor-pointer transition-all"
            >
              Email: support@homebiro.com
            </a>
          </div>

          {/* Right Side Buttons (Desktop) */}
          <div className="flex items-center gap-4">
            <div className="relative group hidden sm:block">
              <button onClick={() => setIsModalOpen(true)} className="text-xs font-bold bg-[#1D4ED8]/5 text-[#1D4ED8] px-4 py-2 rounded-full border border-[#1D4ED8]/10">
                Download App
              </button>
              <span className="absolute -top-2 -right-2 bg-[#E67E22] text-[7px] text-white px-1.5 py-0.5 rounded-full font-black uppercase">Soon</span> 
            </div>
            
            <Button 
              className="hidden md:block !bg-[#1D4ED8] !text-white"
               onClick={() => scrollToSection('#pricing')} 
            >
              START HUNTING
            </Button>

            {/* Mobile Toggle */}
            <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden absolute top-full left-0 w-full bg-white border-b transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-6 py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => { e.preventDefault(); setIsMobileMenuOpen(false); scrollToSection(link.href); }}
                className={`text-lg font-bold ${activeSection === link.href.replace('#', '') ? 'text-[#1D4ED8]' : 'text-zinc-700'}`}
              >
                {link.name}
              </a>
            ))}

            {/* Mobile Actions Integrated Here */}
            <div className="flex flex-col gap-4 pt-6 border-t border-zinc-100">
              <div className="relative w-fit">
                <button 
                  onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} 
                  className="text-sm font-bold bg-[#1D4ED8]/5 text-[#1D4ED8] px-6 py-3 rounded-full border border-[#1D4ED8]/10 w-full text-left"
                >
                  Download App
                </button>
                <span className="absolute -top-2 -right-2 bg-[#E67E22] text-[8px] text-white px-2 py-0.5 rounded-full font-black uppercase">Soon</span> 
              </div>

              <Button 
                className="!bg-[#1D4ED8] !text-white w-full py-6 text-lg"
                onClick={() => { scrollToSection('#pricing'); setIsMobileMenuOpen(false); }} 
              >
                START HUNTING
              </Button>
            </div>

            {/* Mobile Support Email Link */}
            <div className="pt-2">
              <a 
                href="mailto:support@homebiro.com" 
                className="text-[#1D4ED8] font-bold text-lg hover:underline transition-all"
              >
                Email: support@homebiro.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;