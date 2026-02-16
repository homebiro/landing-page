import React, { useState } from 'react';
import { Button } from '../ui/button';
import WaitlistModal from '../ui/waitlistmodal';
import { Twitter, Facebook, Linkedin, Instagram, MessageCircle, Smartphone, Apple, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {  
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dynamic year logic
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-[#0A0D14] border-t border-zinc-800 pt-20 pb-10 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-black tracking-tighter text-white mb-4">HOMEBIRO</h3>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  Refund Policy, Intellectual Property Policy, Our Franchise, About Homebiro.Manage Your
                  Estate
                </p>
              </div>
              
              {/* Social Media Links */}
              <div className="flex gap-4 text-zinc-500">
                <a href="#" className="hover:text-white transition-colors"><Twitter size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Facebook size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><Instagram size={18} /></a>
                <a href="#" className="hover:text-white transition-colors"><MessageCircle size={18} /></a>
              </div>

              {/* App Store Icons */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 border border-zinc-800 px-3 py-2 rounded-xl cursor-not-allowed grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all bg-zinc-900/50">
                  <Apple size={14} className="text-white fill-current" />
                  <span className="text-[9px] font-black text-white uppercase tracking-tighter">App Store</span>
                </div>
                <div className="flex items-center gap-2 border border-zinc-800 px-3 py-2 rounded-xl cursor-not-allowed grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all bg-zinc-900/50">
                  <Smartphone size={14} className="text-white" />
                  <span className="text-[9px] font-black text-white uppercase tracking-tighter">Play Store</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase text-[10px] tracking-[0.2em] text-zinc-600">Company</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-400">
                <li><a href="#about" className="hover:text-blue-500 transition-colors">About Homebiro</a></li>
                <li><a href="#vibe-check" className="hover:text-blue-500 transition-colors">How it Works</a></li>
                <li><a href="#franchise" className="hover:text-blue-500 transition-colors">Our Franchise</a></li>
                <li><a href="#protection" className="hover:text-blue-500 transition-colors">The Protection Layer</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h4 className="font-bold uppercase text-[10px] tracking-[0.2em] text-zinc-600">Legal & Policy</h4>
              <ul className="space-y-4 text-sm font-medium text-zinc-400">
                <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">Intellectual Property Policy</a></li>
              </ul>
            </div>

            {/* Manage Your Estate Card */}
            <div className="bg-zinc-900/40 p-8 rounded-[2.5rem] border border-zinc-800 relative overflow-hidden group">
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-[50px] -mr-16 -mt-16" />
              
              <div className="relative z-10 space-y-4">
                <div className="inline-block bg-blue-600 text-white text-[9px] font-black px-2 py-1 rounded-md uppercase tracking-widest">
                  Coming Soon
                </div>
                <h4 className="font-bold text-xl text-white leading-tight">
                  Manage Your Estate.
                </h4>
                <p className="text-zinc-500 text-xs leading-relaxed">
                  Join 500+ managers on the waitlist for exclusive estate oversight tools.
                </p>
                
                <Button 
                  className="w-full bg-transparent border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-500 font-bold text-[10px] tracking-widest h-12 rounded-xl flex items-center justify-center gap-2 transition-all shadow-2xl"
                  onClick={() => setIsModalOpen(true)}
                >
                  JOIN WAITLIST
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-zinc-900 pt-10 flex flex-col items-center justify-center gap-6 text-zinc-600 text-[9px] font-bold uppercase tracking-[0.3em] text-center">
            <p className="leading-relaxed">
              © {currentYear} HOMEBIRO SOLUTIONS LTD. ALL RIGHTS RESERVED. 
              <span className="block mt-4 opacity-50">
                <a href="#" className="cursor-default hover:text-zinc-400 transition-colors">
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