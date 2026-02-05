import React, { useState } from 'react';
import { Button } from '../ui/Button';
import WaitlistModal from '../ui/WaitlistModal';

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-[90] border-b border-zinc-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <a href="/" className="text-2xl font-black tracking-tighter">HOMEBIRO</a>
            
            <div className="hidden lg:flex items-center gap-8 text-sm font-semibold text-zinc-500">
              <a href="#about" className="hover:text-black transition">About Us</a>
              <a href="#protection" className="hover:text-black transition">Protection</a>
              <a href="#vibe-check" className="hover:text-black transition">How it Works</a>
              <a href="#contact" className="hover:text-black transition">Contact</a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-sm font-bold text-zinc-400 hover:text-black transition px-2"
              >
                Download App
              </button>
              <span className="absolute -top-3 -right-4 bg-black text-[8px] text-white px-1.5 py-0.5 rounded font-black uppercase">Soon</span>
            </div>
            
            <Button 
              variant="accent" 
              className="hidden sm:block !py-2.5 !px-6 text-sm"
              onClick={() => document.getElementById('vibe-check')?.scrollIntoView({ behavior: 'smooth' })}
            >
              START HUNTING
            </Button>
          </div>
        </div>
      </nav>

      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Navbar;