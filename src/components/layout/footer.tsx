import React, { useState } from 'react';
import { Button } from '../ui/button';
import WaitlistModal from '../ui/waitlistmodal';
import { Twitter, Facebook, Linkedin, Instagram, MessageCircle, Smartphone, Apple } from 'lucide-react';

const Footer: React.FC = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamic year logic
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black tracking-tighter">HOMEBIRO</h3>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                Ibadan's first tenant concierge service. Protecting your interests, 
                securing your home, and guaranteeing your peace of mind.
              </p>
              
              {/* Social Media Links */}
              <div className="flex gap-4 text-zinc-400">
                <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
                <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={20} /></a>
                <a href="#" className="hover:text-blue-700 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="hover:text-pink-600 transition-colors"><Instagram size={20} /></a>
                <a href="#" className="hover:text-green-500 transition-colors"><MessageCircle size={20} /></a>
              </div>

              {/* App Store Icons - Separated Hover States */}
              <div className="flex gap-4">
                <div className="flex items-center gap-1 border border-zinc-300 px-3 py-1.5 rounded-lg cursor-not-allowed grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all">
                  <Apple size={14} className="fill-current" />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">App Store</span>
                </div>
                <div className="flex items-center gap-1 border border-zinc-300 px-3 py-1.5 rounded-lg cursor-not-allowed grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all">
                  <Smartphone size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Play Store</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400">Company</h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li><a href="#about" className="hover:text-green-600 transition">About Us</a></li>
                <li><a href="#vibe-check" className="hover:text-green-600 transition">How it Works</a></li>
                <li><a href="#protection" className="hover:text-green-600 transition">The Protection Layer</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase text-xs tracking-widest text-zinc-400">Legal</h4>
              <ul className="space-y-4 text-sm font-semibold">
                <li><a href="#" className="hover:text-green-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-green-600 transition">Refund Policy</a></li>
              </ul>
            </div>

            {/* App Teaser */}
            <div className="bg-white p-8 rounded-[2rem] border border-zinc-200 space-y-4">
              <div className="inline-block bg-black text-white text-[10px] font-black px-2 py-1 rounded mb-2 uppercase">Coming Soon</div>
              <h4 className="font-bold text-lg leading-tight">Manage your home from your phone.</h4>
              <p className="text-zinc-500 text-xs">Join 500+ users on the mobile waitlist.</p>
              
              <Button 
                variant="outline" 
                className="w-full !py-3 !text-xs"
                onClick={() => setIsModalOpen(true)}
              >
                JOIN WAITLIST
              </Button>
            </div>
          </div>

          {/* Bottom Bar - Centered Layout */}
          <div className="border-t border-zinc-200 pt-10 flex flex-col items-center justify-center gap-4 text-zinc-400 text-[10px] font-bold uppercase tracking-widest text-center">
            <p className="leading-relaxed">
              © {currentYear} HOMEBIRO SOLUTIONS LTD. ALL RIGHTS RESERVED. 
              <span className="block mt-4">
                <a href="https://www.linkedin.com" className="cursor-default hover:text-zinc-500 transition-colors">
                  Powered by Lyridra
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>

      <WaitlistModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Footer;